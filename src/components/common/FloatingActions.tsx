import React from 'react';
import { MessageSquare, PhoneCall } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/918950000415?text=Hello%20Vardha%20Build%20Projects,%20I%20am%20interested%20in%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
      </a>
      <a
        href="tel:8950000415"
        className="bg-blue-600 hover:bg-blue-700 text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110"
        title="Call Now"
      >
        <PhoneCall className="w-6 h-6" />
      </a>
    </div>
  );
};