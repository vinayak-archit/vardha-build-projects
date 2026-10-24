import React from 'react';
import { MapPin, Mail, PhoneCall } from 'lucide-react';

export const TopUtilityBar: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-300 text-[11px] sm:text-xs lg:text-sm py-2 px-3 sm:px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-2 text-center lg:text-left">
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4 text-slate-300 leading-relaxed">
          <span className="flex items-center gap-1.5 whitespace-normal sm:whitespace-nowrap">
            <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>883, Chopra Colony, Sonepat, Haryana (GSTIN: 06IQVPS8458H1ZN)</span>
          </span>
          <span className="hidden md:inline text-slate-600">|</span>
          <span className="hidden md:flex items-center gap-1.5 whitespace-nowrap">
            <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            vardhaconsultant@gmail.com
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2 sm:gap-4 font-medium whitespace-nowrap">
          <a href="tel:8950000415" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
            <PhoneCall className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> +91 8950000415
          </a>
          <a href="tel:8059334212" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
            +91 8059334212
          </a>
        </div>
      </div>
    </div>
  );
};