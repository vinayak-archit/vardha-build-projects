'use client';

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Check, Send } from 'lucide-react';
import { useInquiryForm } from '@/hooks/useInquiryForm';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, defaultService }) => {
  const { inquiryForm, formSubmitted, updateFormField, handleInquirySubmit } = useInquiryForm(onClose);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-200"
      >
        <button type="button" onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1">
          <X className="w-5 h-5" />
        </button>

        <div className="bg-slate-900 text-white p-6 border-b border-slate-800">
          <h3 id="quote-modal-title" className="text-xl font-bold">Request Direct Quote</h3>
          <p className="text-xs text-slate-300 mt-1">Get instant details for NOC clearances or PUF Panel Store setup.</p>
        </div>

        <form onSubmit={handleInquirySubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
            <input
              type="text"
              required
              placeholder="Your Name"
              value={inquiryForm.name}
              onChange={(e) => updateFormField('name', e.target.value)}
              className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm outline-none focus:border-cyan-600"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
            <input
              type="tel"
              required
              placeholder="Phone Number"
              value={inquiryForm.phone}
              onChange={(e) => updateFormField('phone', e.target.value)}
              className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm outline-none focus:border-cyan-600"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Select Service</label>
            <select
              value={defaultService || inquiryForm.serviceType}
              onChange={(e) => updateFormField('serviceType', e.target.value)}
              className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm outline-none bg-white"
            >
              <option>PUF Panel Kiosk Construction</option>
              <option>DM / Development Authority NOC</option>
              <option>National Highway (NHAI) NOC</option>
              <option>PWD / Forest / CLU Clearance</option>
              <option>Gas / Water Pipeline NOC</option>
              <option>Container Shop / Cold Storage</option>
              <option>Branding & Printing Work</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Details / Dimensions / City</label>
            <textarea
              rows={2}
              placeholder="Enter location or custom specs..."
              value={inquiryForm.message}
              onChange={(e) => updateFormField('message', e.target.value)}
              className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm outline-none focus:border-cyan-600"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={formSubmitted}
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 rounded-xl shadow transition-all text-sm flex items-center justify-center gap-2"
          >
            {formSubmitted ? (
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-300" /> Request Submitted!</span>
            ) : (
              <span className="flex items-center gap-1.5"><Send className="w-4 h-4" /> Submit Inquiry</span>
            )}
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};