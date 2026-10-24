import { ReactNode } from 'react';

export type ServiceCategory = 'all' | 'noc' | 'puf' | 'branding';

export interface ServiceItem {
  cat: ServiceCategory;
  title: string;
  icon: ReactNode;
  desc: string;
}

export interface SpecItem {
  label: string;
  val: string;
  desc: string;
}

export interface ConstructionStep {
  num: string;
  title: string;
  desc: string;
  details: string[];
}

export interface InquiryFormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  location: string;
  message: string;
}