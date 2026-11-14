import React from 'react';
import Image from 'next/image';
import { Check, ChevronRight } from 'lucide-react';
import { ScrollRevealSection } from '@/components/common/ScrollRevealSection';
import { pufSpecsData } from '@/data/servicesData';

interface SpecsSectionProps {
  onOpenQuote: () => void;
}

export const SpecsSection: React.FC<SpecsSectionProps> = ({ onOpenQuote }) => {
  return (
    <ScrollRevealSection id="puf-specs" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest block mb-2">Engineered Performance</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                High-Density PUF Panel Technical Specifications
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-3">
                Manufactured in state-of-the-art facilities with rigid Polyurethane Foam cores sandwiched between galvanized pre-painted steel sheets.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {pufSpecsData.map((spec, index) => (
                <div key={index} className="bg-slate-800/70 border border-slate-700/80 p-4 rounded-xl">
                  <span className="text-xs text-slate-400 block font-medium">{spec.label}</span>
                  <span className="text-xl font-black text-cyan-300 block my-1">{spec.val}</span>
                  <span className="text-[11px] text-slate-300 block">{spec.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-700 p-4 sm:p-6 rounded-3xl shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-5">
                <div>
                  <h3 className="text-xl font-bold text-white">KIOSK</h3>
                  <p className="text-xs text-cyan-400">Featured Deployment Standard</p>
                </div>
                <div className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-semibold px-3 py-1 rounded-full">
                  Insulated & Fire-Retardant
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="relative w-full aspect-[1300/1300] overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
                  <Image
                    src="/images/roof_panel.jpeg"
                    alt="PUF roof panel profile"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
                    <Image
                      src="/images/puf_panel_info.jpeg"
                      alt="PUF panel cross section"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                  </div>
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
                    <Image
                      src="/images/puf_panel_1.jpeg"
                      alt="PUF roof panel wall section"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Manufactured in Sonipat Unit</span>
                <button onClick={onOpenQuote} className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 uppercase tracking-wider">
                  Request Sample Spec Sheet <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollRevealSection>
  );
};