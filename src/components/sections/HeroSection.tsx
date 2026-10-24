import React from 'react';
import { Zap, CheckCircle2, Award, Clock, ArrowRight, MessageSquare, Factory, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onOpenQuote: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuote }) => {
  return (
    <section className="reveal-up relative bg-slate-900 text-white overflow-hidden py-16 sm:py-24 lg:py-28">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="float-slow w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <polygon points="0,0 600,0 300,1000 0,1000" fill="#0284c7" />
          <polygon points="600,0 1000,0 1000,700 300,1000" fill="#1e3a8a" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>Premier Govt NOC Liaison & PUF Kiosk Manufacturers</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Turn-Key <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">NOC Services</span> & Modular Construction
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Streamlining statutory compliance for National Highways, Fuel Stations, and Warehouses alongside high-speed manufacturing of insulated <strong>PUF Panel Kiosks & Container Stores</strong>.
            </p>

            <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur border border-slate-700/60 px-3.5 py-2 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>100% Highway & Forest Approvals</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur border border-slate-700/60 px-3.5 py-2 rounded-lg">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>10-Year Panel Warranty</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur border border-slate-700/60 px-3.5 py-2 rounded-lg">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>5-7 Days Manufacturing</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-cyan-900/30 hover:shadow-cyan-800/50 transition-all flex items-center justify-center gap-3 text-base"
              >
                <span>Inquire Now / Get Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="https://wa.me/918950000415?text=Hello%20Vardha%20Build%20Projects,%20I%20want%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2 text-base"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-slate-800/90 to-slate-900/95 border border-slate-700/70 p-6 sm:p-8 rounded-2xl shadow-2xl relative">
              <div className="absolute -top-3 -right-3 bg-cyan-500 text-slate-950 font-black text-xs uppercase px-3 py-1 rounded-full shadow-lg">
                Certified Quality
              </div>

              <div className="border-b border-slate-700 pb-4 mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Factory className="w-5 h-5 text-cyan-400" />
                  PUF Panel Modular Kiosks
                </h3>
                <p className="text-xs text-slate-400 mt-1">Pre-engineered insulated stores for retail & fuel outlets</p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-slate-800">
                  <span className="text-slate-400">Insulation Thickness</span>
                  <span className="font-bold text-cyan-300">60mm Wall / 65mm Roof</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800">
                  <span className="text-slate-400">Site Assembly Speed</span>
                  <span className="font-bold text-slate-200">2 - 3 Days Total</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800">
                  <span className="text-slate-400">Thermal Protection</span>
                  <span className="font-bold text-slate-200">100% Weather Resistant</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800">
                  <span className="text-slate-400">Key Application</span>
                  <span className="font-bold text-slate-200">Fuel Station Stores & Agri Hubs</span>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/40 flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-cyan-200">Statutory NOC & Build Combo</h4>
                  <p className="text-xs text-slate-300 mt-0.5">We manage the NHAI, DM & Forest NOCs together with full store setup for hassle-free execution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};