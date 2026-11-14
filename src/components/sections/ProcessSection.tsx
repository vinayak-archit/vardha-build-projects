'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { ScrollRevealSection } from '@/components/common/ScrollRevealSection';
import { constructionStepsData } from '@/data/servicesData';

interface ProcessSectionProps {
  onOpenQuote: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenQuote }) => {
  const [activeStep, setActiveStep] = useState(0);
  const basePath = process.env.NODE_ENV === 'production' ? '/vardha-build-projects' : '';

  return (
    <ScrollRevealSection id="process" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cyan-600 font-bold text-xs uppercase tracking-widest block mb-2">Step-by-Step Execution</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            3-Step PUF Panel Kiosk Construction Process
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Our systematic approach guarantees modular precision, clean installation on site, and long service life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {constructionStepsData.map((step, idx) => (
            <div
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`w-full max-w-[360px] cursor-pointer rounded-2xl p-6 transition-all duration-300 border ${
                activeStep === idx
                  ? 'bg-white border-cyan-500 shadow-xl ring-2 ring-cyan-500/20 -translate-y-1'
                  : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-slate-300 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-2xl font-black ${activeStep === idx ? 'text-cyan-600' : 'text-slate-400'}`}>{step.num}</span>
                <div className={`w-3 h-3 rounded-full ${activeStep === idx ? 'bg-cyan-500 animate-pulse' : 'bg-slate-300'}`} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed mb-4">{step.desc}</p>
              <ul className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-700">
                {step.details.map((d, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[28px] border border-cyan-200 bg-white p-4 sm:p-6 shadow-[0_20px_50px_rgba(14,116,144,0.10)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 items-center">
            <div className="relative w-full aspect-[1448/1086] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
              <Image
                src={`${basePath}/images/puf_panel_roof_installation.jpeg`}
                alt="Roof installation process for PUF insulated panel"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-600">Installation highlight</span>
                <h3 className="mt-2 text-xl font-black text-slate-900">Roof panels installed with precision alignment</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Our team ensures accurate overlap, secure fastening, and weather-ready sealing for long-lasting insulated roofing.
                </p>
              </div>

              <div className="relative w-full aspect-[1300/1300] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                <Image
                  src={`${basePath}/images/roof_panel.jpeg`}
                  alt="Insulated roof panel detail"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 35vw"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold text-xl flex-shrink-0">⚡</div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">Need Rapid Deployment for your Site?</h4>
              <p className="text-xs sm:text-sm text-slate-600">From baseline design to finished shop installation in under 30 days.</p>
            </div>
          </div>
          <button onClick={onOpenQuote} className="whitespace-nowrap bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm">
            Start Your Project
          </button>
        </div>
      </div>
    </ScrollRevealSection>
  );
};