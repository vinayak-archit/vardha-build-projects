import { useState, FormEvent } from 'react';
import { InquiryFormData } from '@/types';

const INITIAL_FORM_STATE: InquiryFormData = {
  name: '',
  phone: '',
  email: '',
  serviceType: 'PUF Panel Kiosk Construction',
  location: '',
  message: ''
};

export function useInquiryForm(onSuccessCallback?: () => void) {
  const [inquiryForm, setInquiryForm] = useState<InquiryFormData>(INITIAL_FORM_STATE);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const updateFormField = (field: keyof InquiryFormData, value: string) => {
    setInquiryForm((prev) => ({ ...prev, [field]: value }));
  };

  const setServiceType = (serviceType: string) => {
    setInquiryForm((prev) => ({ ...prev, serviceType }));
  };

  const handleInquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    setTimeout(() => {
      setFormSubmitted(false);
      setInquiryForm(INITIAL_FORM_STATE);
      if (onSuccessCallback) onSuccessCallback();
    }, 2500);
  };

  return {
    inquiryForm,
    formSubmitted,
    updateFormField,
    setServiceType,
    handleInquirySubmit
  };
}