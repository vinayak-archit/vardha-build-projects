'use client';

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { ScrollRevealSection } from '@/components/common/ScrollRevealSection';
import { servicesData } from '@/data/servicesData';
import { ServiceCategory } from '@/types';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<ServiceCategory>('all');

  const filteredServices = activeTab === 'all'
    ? servicesData
    : servicesData.filter(s => s.cat === activeTab);

  return (
    <ScrollRevealSection id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-cyan-600 font-bold text-xs uppercase tracking-widest block mb-2">Our Expertise</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive NOC Clearances & Modular Build Solutions
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Providing end-to-end statutory government liaisoning and heavy-duty pre-fabricated building infrastructure across India.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <button onClick={() => setActiveTab('all')} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${activeTab === 'all' ? 'bg-slate-900 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>All Offerings</button>
            <button onClick={() => setActiveTab('noc')} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${activeTab === 'noc' ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>NOC & Govt Approvals</button>
            <button onClick={() => setActiveTab('puf')} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${activeTab === 'puf' ? 'bg-cyan-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>PUF Kiosks & Containers</button>
            <button onClick={() => setActiveTab('branding')} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${activeTab === 'branding' ? 'bg-slate-900 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>Branding & Printing</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((srv, idx) => (
            <div key={idx} className="group bg-slate-50 hover:bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-cyan-50 border border-slate-200 group-hover:border-cyan-200 flex items-center justify-center shadow-sm mb-5 transition-colors">
                  {srv.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {srv.desc}
                </p>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onSelectService(srv.title);
                }}
                className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-cyan-600 transition-colors uppercase tracking-wider"
              >
                <span>Request Proposal</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </ScrollRevealSection>
  );
};