import React from 'react';
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
            <div className="bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-700 p-8 rounded-3xl shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-slate-700 pb-5 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">SAFAL KISAN BAZAR KIOSK</h3>
                  <p className="text-xs text-cyan-400">Featured Turn-Key Deployment Standard</p>
                </div>
                <div className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-semibold px-3 py-1 rounded-full">
                  Insulated & Fire-Retardant
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-600/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center font-bold text-xs">65mm</div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Sloped Roof Insulation Panel</h4>
                      <p className="text-xs text-slate-400">Heavy rain, hail & heat reflective profile</p>
                    </div>
                  </div>
                  <Check className="w-5 h-5 text-emerald-400" />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center font-bold text-xs">60mm</div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Wall Sandwich Panels</h4>
                      <p className="text-xs text-slate-400">Interlocking tongue & groove alignment</p>
                    </div>
                  </div>
                  <Check className="w-5 h-5 text-emerald-400" />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-600/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center font-bold text-xs">MS</div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Heavy MS Square Pipe Structure</h4>
                      <p className="text-xs text-slate-400">Anti-rust coated skeleton frame</p>
                    </div>
                  </div>
                  <Check className="w-5 h-5 text-emerald-400" />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Manufactured in Sonepat Unit</span>
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