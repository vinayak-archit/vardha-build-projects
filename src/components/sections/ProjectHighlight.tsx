import React from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { ScrollRevealSection } from '@/components/common/ScrollRevealSection';

interface ProjectHighlightProps {
  onOpenQuote: () => void;
}

export const ProjectHighlight: React.FC<ProjectHighlightProps> = ({ onOpenQuote }) => {
  return (
    <ScrollRevealSection id="projects" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest block">Client Highlight</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Turn-Key Branding & PUF Store Setup for SAFAL KISAN BAZAR
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Complete manufacturing, structural assembly, thermal roofing, and full front-to-back retail branding executed by Vardha Build Projects.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>Integrated retail front fascia with high-impact weather-proof graphics</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>Insulated PUF structure ensuring optimal seed & fertilizer chemical protection</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>Fully completed within 7 business days from foundation to handover</span>
              </div>
            </div>

            <button onClick={onOpenQuote} className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold px-6 py-3 rounded-xl shadow transition-all text-sm flex items-center gap-2">
              <span>Request Similar Retail Kiosk</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-gradient-to-r from-emerald-900/40 via-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 shadow-2xl relative">
              <div className="bg-emerald-600 text-white text-xs font-black px-4 py-1.5 rounded-md inline-block mb-4 uppercase tracking-wider">
                SAFAL KISAN BAZAR - Finished Execution
              </div>

              <div className="bg-emerald-800 border-2 border-emerald-600 rounded-xl p-6 text-center mb-6 shadow-inner">
                <span className="text-yellow-300 font-extrabold text-2xl sm:text-3xl block">सफल किसान बाजार</span>
                <span className="text-emerald-100 text-xs sm:text-sm block mt-1">बीज | खाद | कीटनाशक | कृषि समाधान</span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs text-slate-300">
                <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">Location Type</span>
                  <span className="font-bold text-white">Agri-Hub Retail Outlet</span>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">Scope</span>
                  <span className="font-bold text-white">Fabrication + Printing + NOC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollRevealSection>
  );
};