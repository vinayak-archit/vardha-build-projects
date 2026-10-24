import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/vardha-logo-2.png"
                alt="Vardha Build Projects logo"
                className="h-12 w-auto object-contain shrink-0"
              />
              <span
                className="text-xl font-black tracking-tight"
                style={{
                  background: 'linear-gradient(90deg, #dfeeff 0%, #38bdf8 20%, #0ea5e9 45%, #1d4ed8 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                VARDHA BUILD PROJECTS
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Vardha Build Projects Private Limited. Specializing in government clearance NOCs, NHAI approvals, and turnkey modular PUF panel store manufacturing.
            </p>
            <div className="text-xs text-slate-300">
              <strong>GSTIN:</strong> 06IQVPS8458H1ZN
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Core Clearances</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• National Highway (NHAI) NOC</li>
              <li>• District Magistrate (DM) NOC</li>
              <li>• CLU & Forest Approvals</li>
              <li>• Gas & Water Pipeline Clearances</li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Modular Construction</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• PUF Panel KIOSK & Store Fabrication</li>
              <li>• Cold Storage & Industrial Enclosures</li>
              <li>• Container Shop Manufacturing</li>
              <li>• Outdoor Branding & Printing Services</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Vardha Build Projects Private Limited. All rights reserved.</p>
          <p>Sonepat, Haryana, India</p>
        </div>
      </div>
    </footer>
  );
};