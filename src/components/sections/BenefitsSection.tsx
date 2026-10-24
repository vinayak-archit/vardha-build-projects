import React from 'react';
import { ShieldCheck, Zap, Clock, Layers } from 'lucide-react';
import { ScrollRevealSection } from '@/components/common/ScrollRevealSection';

export const BenefitsSection: React.FC = () => {
  return (
    <ScrollRevealSection id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cyan-600 font-bold text-xs uppercase tracking-widest block mb-2">Why Partner With Us</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Benefits of Vardha Modular Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4"><ShieldCheck className="w-6 h-6" /></div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Lightweight & Ultra-Strong</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Engineered structural balance providing high resistance against wind load, physical impact, and environmental wear.</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-4"><Zap className="w-6 h-6" /></div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Superior Thermal Insulation</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Polyurethane foam core drastically reduces air conditioning energy costs and maintains ambient temperature inside.</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4"><Clock className="w-6 h-6" /></div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Fast Installation & Long Life</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Zero mess site installation in 2-3 days with decade-plus maintenance-free longevity.</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4"><Layers className="w-6 h-6" /></div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Easy to Relocate & Expand</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Modular design allows seamless dismantling, site relocation, or expansion whenever business needs change.</p>
          </div>
        </div>
      </div>
    </ScrollRevealSection>
  );
};