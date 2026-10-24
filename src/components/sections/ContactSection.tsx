'use client';

import React from 'react';
import { MapPin, PhoneCall, Mail, FileText, Check, Send } from 'lucide-react';
import { ScrollRevealSection } from '@/components/common/ScrollRevealSection';
import { useInquiryForm } from '@/hooks/useInquiryForm';

export const ContactSection: React.FC = () => {
  const { inquiryForm, formSubmitted, updateFormField, handleInquirySubmit } = useInquiryForm();

  return (
    <ScrollRevealSection className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest block mb-2">Direct Contact</span>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Get In Touch With Our Consultants</h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-8 leading-relaxed">
                Have questions about National Highway NOC requirements or need pricing for modular PUF kiosks? Contact our team directly.
              </p>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0"><MapPin className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-semibold text-white">Head Office</h4>
                    <p className="text-slate-300 text-xs mt-0.5">883, Chopra Colony, Sonepat, Haryana</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0"><PhoneCall className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-semibold text-white">Call Us Directly</h4>
                    <p className="text-slate-300 text-xs mt-0.5">+91 8950000415 / +91 8059334212</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0"><Mail className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-semibold text-white">Email Address</h4>
                    <p className="text-slate-300 text-xs mt-0.5">vardhaconsultant@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0"><FileText className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-semibold text-white">GSTIN Registration</h4>
                    <p className="text-slate-300 text-xs mt-0.5">06IQVPS8458H1ZN</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-slate-800 text-xs text-slate-400">
              Operating Hours: Mon - Sat (9:00 AM - 7:00 PM)
            </div>
          </div>

          <div className="lg:col-span-7 p-8 sm:p-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Technical Quote</h3>
            <p className="text-slate-600 text-xs sm:text-sm mb-6">Fill out the form below and our team will get back to you within 2 hours.</p>

            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={inquiryForm.name}
                    onChange={(e) => updateFormField('name', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 text-sm outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9876543210"
                    value={inquiryForm.phone}
                    onChange={(e) => updateFormField('phone', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 text-sm outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={inquiryForm.email}
                    onChange={(e) => updateFormField('email', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 text-sm outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Service Required *</label>
                  <select
                    value={inquiryForm.serviceType}
                    onChange={(e) => updateFormField('serviceType', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 text-sm outline-none bg-white"
                  >
                    <option>PUF Panel Kiosk Construction</option>
                    <option>DM / Development Authority NOC</option>
                    <option>National Highway (NHAI) NOC</option>
                    <option>PWD / Forest / CLU Clearance</option>
                    <option>Gas / Water Pipeline NOC</option>
                    <option>Container Shop / Cold Storage</option>
                    <option>Branding & Printing Services</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Project Site / City Location</label>
                <input
                  type="text"
                  placeholder="e.g. Sonepat, Haryana / NH-44 Highway site"
                  value={inquiryForm.location}
                  onChange={(e) => updateFormField('location', e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 text-sm outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Message / Key Requirements</label>
                <textarea
                  rows={3}
                  placeholder="Specify kiosk size, land details or specific NOC requirements..."
                  value={inquiryForm.message}
                  onChange={(e) => updateFormField('message', e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 text-sm outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formSubmitted}
                className="w-full bg-gradient-to-r from-blue-700 to-cyan-600 hover:from-blue-800 hover:to-cyan-700 text-white font-bold py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm"
              >
                {formSubmitted ? (
                  <span className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-300" /> Inquiry Sent Successfully!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" /> Submit Quote Request
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </ScrollRevealSection>
  );
};