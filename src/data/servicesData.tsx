import React from 'react';
import { Building2, FileCheck2, ShieldCheck, Wrench, Factory, Layers, Sparkles } from 'lucide-react';
import { ServiceItem, SpecItem, ConstructionStep } from '@/types';

export const servicesData: ServiceItem[] = [
  {
    cat: "noc",
    title: "DM & Development Authority NOC",
    icon: <Building2 className="w-6 h-6 text-cyan-600" />,
    desc: "End-to-end clearance & District Magistrate NOC approvals for fuel stations, logistics hubs, warehouses, and commercial private properties."
  },
  {
    cat: "noc",
    title: "National Highway (NHAI) NOC",
    icon: <FileCheck2 className="w-6 h-6 text-blue-600" />,
    desc: "Seamless highway access approval, deceleration/acceleration lane clearances, and NHAI compliance documentation."
  },
  {
    cat: "noc",
    title: "PWD, Forest & CLU Clearances",
    icon: <ShieldCheck className="w-6 h-6 text-cyan-600" />,
    desc: "Change of Land Use (CLU) permissions, Forest department approvals, and Public Works Department (PWD) road connectivity NOCs."
  },
  {
    cat: "noc",
    title: "Gas & Water Pipeline NOC",
    icon: <Wrench className="w-6 h-6 text-blue-600" />,
    desc: "Regulatory and safety compliance clearances for underground utility, cross-country gas pipelines, and government water mains."
  },
  {
    cat: "puf",
    title: "PUF Panel KIOSK & Store Fabrication",
    icon: <Factory className="w-6 h-6 text-cyan-600" />,
    desc: "Custom engineered modular kiosks, retail outlets, container shops, and site offices constructed with thermal-efficient PUF sandwich panels."
  },
  {
    cat: "puf",
    title: "Industrial & Cold Storage Structures",
    icon: <Layers className="w-6 h-6 text-blue-600" />,
    desc: "Heavy-duty modular building solutions for warehouses, agri-trading hubs (e.g. Safal Kisan Bazar), and cold chain storage enclosures."
  },
  {
    cat: "branding",
    title: "Corporate Branding & Signage",
    icon: <Sparkles className="w-6 h-6 text-cyan-600" />,
    desc: "360° visual identity, structural fascia boards, LED signages, printed vinyl wraps, and full site marketing execution for retail brands."
  }
];

export const pufSpecsData: SpecItem[] = [
  { label: "Wall Thickness", val: "60 mm", desc: "High-density polyurethane foam core" },
  { label: "Roof Thickness", val: "65 mm", desc: "Enhanced thermal & rain resistance" },
  { label: "Panel Warranty", val: "10 Years", desc: "Guaranteed structural integrity" },
  { label: "Insulation Warranty", val: "10 Years", desc: "Long-term thermal conservation" },
  { label: "Mfg. Timeline", val: "5-7 Days", desc: "Rapid off-site precision production" },
  { label: "Site Installation", val: "2-3 Days", desc: "Fast turn-key assembly on site" },
  { label: "Load Capacity", val: "150-200 Kg", desc: "High structural load bearing rating" },
  { label: "Mobility", val: "Easy Relocate", desc: "Modular, re-locatable & expandable" }
];

export const constructionStepsData: ConstructionStep[] = [
  {
    num: "01",
    title: "Foundation Base & Civil Work",
    desc: "Levelled RCC / Concrete base setup with heavy-duty anchor bolts for the main steel framework and waterproofing layer.",
    details: ["Levelled RCC base", "Anchor bolts for MS structure", "Waterproofing layer"]
  },
  {
    num: "02",
    title: "Structural Steel Framing",
    desc: "Fabrication of rigid MS square pipe structural framework tailored to engineered load requirements and approved layout.",
    details: ["MS square pipe structure", "As per approved design", "Provision for roof & fixtures"]
  },
  {
    num: "03",
    title: "PUF Panel Wall Interlocking",
    desc: "Precision installation of 60mm insulated interlocking wall panels ensuring airtight fit and rapid clean execution.",
    details: ["Interlocking PUF panels (60mm)", "Fast & clean installation", "Insulated & weather resistant"]
  },
  {
    num: "04",
    title: "Roofing, Sealing & Branding",
    desc: "Mounting of 65mm sloping PUF roof panels, waterproof trims, doors, windows, and complete corporate exterior branding.",
    details: ["PUF roof panels (65mm)", "Waterproof sealing & trims", "Full turn-key branding finish"]
  }
];