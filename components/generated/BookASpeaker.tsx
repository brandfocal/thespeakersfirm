"use client";

import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const COLORS = {
  black: "#0A0A0A",
  red: "#e30e04",
  redHover: "#c00b03",
  gray: "#9A9A9A",
  mutedGray: "#9A9A9A",
  silver: "#9A9A9A",
  silverAlt: "#9A9A9A",
  borderGray: "#E5E5E5",
  darkGray: "#1E1E1E",
  cardBorder: "#1E1E1E",
  offWhite: "#FFFFFF",
  deepBlack: "#0A0A0A"
};

const SECTION_TAG_CLASS = "inline-flex items-center border border-l-[4px] px-3 py-2 text-[10px] font-bold uppercase tracking-widest sm:px-4 sm:text-xs";
const SECTION_TAG_STYLE: React.CSSProperties = {
  backgroundColor: "#111111",
  borderColor: COLORS.darkGray,
  borderLeftColor: COLORS.red,
  color: COLORS.offWhite
};

const VerticalBorderLines = ({ isDark = false }: { isDark?: boolean }) => {
  const borderColor = isDark ? '#393939' : '#C7C7C8';
  const capColor = isDark ? '#FFFFFF' : '#212121';
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-20">
      <div className="h-full mx-auto max-w-[1440px] relative px-6 md:px-16">
        <div className="absolute left-6 md:left-16 top-0 bottom-0 w-[1px]" style={{ backgroundColor: borderColor }}>
          <div className="absolute -top-[3.5px] left-1/2 -translate-x-1/2 w-[7px] h-[7px]" style={{ backgroundColor: capColor }} />
        </div>
        <div className="absolute right-6 md:right-16 top-0 bottom-0 w-[1px]" style={{ backgroundColor: borderColor }}>
          <div className="absolute -top-[3.5px] left-1/2 -translate-x-1/2 w-[7px] h-[7px]" style={{ backgroundColor: capColor }} />
        </div>
      </div>
    </div>
  );
};

export function BookASpeaker() {
  const searchParams = useSearchParams();
  const [step, setStep] = React.useState(1);
  const [enquiryRef] = React.useState(() => `TSF-ENQ-${Math.floor(100000 + Math.random() * 900000)}`);
  
  const [formData, setFormData] = React.useState({
    fullName: "",
    jobTitle: "",
    organisation: "",
    email: "",
    mobile: "",
    country: "South Africa",
    city: "",
    website: "",
    contactMethod: "Email",
    decisionMaker: "Yes",
    additionalContact: "",
    
    speakerName: "",
    speakerRef: "",
    engagementCategory: "Keynote speaker",
    expertise: "",
    alternativeRecommendations: "Yes",
    eventObjectives: "",
    audienceOutcomes: "",
    presentationStyle: "",
    duration: "",
    additionalActivities: "No",
    
    eventName: "",
    eventType: "Conference",
    eventFormat: "In-person",
    eventDate: "",
    alternativeDate: "",
    times: "",
    techCheckTime: "",
    performanceTime: "",
    venue: "",
    eventCityCountry: "",
    audienceSize: "",
    audienceProfile: "",
    industry: "",
    classification: "Private",
    paidEvent: "No",
    recorded: "No",
    postEventUse: "No",
    mediaAttendance: "No",
    eventWebsite: "",
    intendedPlatform: "",
    proposedUse: "",
    territory: "",
    usagePeriod: "",
    
    budgetRange: "",
    currency: "ZAR",
    budgetStatus: "Approved",
    quotationDeadline: "",
    decisionDate: "",
    
    source: "Google or another search engine",
    sourceDetails: "",
    
    ackComplete: false,
    ackPolicy: false,
    ackNoReserve: false,
    ackNoTender: false,
    ackConsent: false,
    marketingConsent: false
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  React.useEffect(() => {
    // Try to auto-populate speaker from query param
    const querySpeaker = searchParams.get("speaker");
    if (querySpeaker) {
      setFormData(prev => ({
        ...prev,
        speakerName: decodeURIComponent(querySpeaker),
        speakerRef: `TSF-${decodeURIComponent(querySpeaker).substring(0,3).toUpperCase()}-${Math.floor(10 + Math.random() * 90)}`
      }));
    }
  }, [searchParams]);

  React.useEffect(() => {
    let matchedCurrency = "USD";
    if (formData.country === "South Africa") matchedCurrency = "ZAR";
    else if (formData.country === "United Kingdom") matchedCurrency = "GBP";
    else if (formData.country === "Europe") matchedCurrency = "EUR";
    else if (formData.country === "Kenya") matchedCurrency = "KES";
    else if (formData.country === "Nigeria") matchedCurrency = "NGN";
    
    setFormData(prev => ({ ...prev, currency: matchedCurrency }));
  }, [formData.country]);

  const getBudgetRanges = () => {
    switch (formData.currency) {
      case "ZAR":
        return ["R50,000 - R100,000", "R100,000 - R150,000", "R150,000 - R200,000", "R200,000+"];
      case "GBP":
        return ["£3,000 - £6,000", "£6,000 - £10,000", "£10,000 - £15,000", "£15,000+"];
      case "EUR":
        return ["€4,000 - €8,000", "€8,000 - €12,000", "€12,000 - €16,000", "€16,000+"];
      case "KES":
        return ["KSh 500,000 - KSh 1,000,000", "KSh 1,000,000+"];
      case "NGN":
        return ["₦5,000,000 - ₦10,000,000", "₦10,000,000+"];
      default:
        return ["$5,000 - $10,000", "$10,000 - $15,000", "$15,000 - $20,000", "$20,000+"];
    }
  };

  const handleFieldChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (currentStep === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
      if (!formData.jobTitle.trim()) newErrors.jobTitle = "Job title is required";
      if (!formData.organisation.trim()) newErrors.organisation = "Organisation is required";
      if (!formData.email.trim()) newErrors.email = "Email address is required";
      if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
      if (!formData.country.trim()) newErrors.country = "Country is required";
      if (!formData.city.trim()) newErrors.city = "City is required";
    }
    
    if (currentStep === 2) {
      if (!formData.expertise.trim()) newErrors.expertise = "Topic or area of expertise is required";
      if (!formData.eventObjectives.trim()) newErrors.eventObjectives = "Event objectives are required";
    }
    
    if (currentStep === 3) {
      if (!formData.eventName.trim()) newErrors.eventName = "Event name is required";
      if (!formData.eventCityCountry.trim()) newErrors.eventCityCountry = "Event city & country are required";
      if (!formData.eventDate.trim()) newErrors.eventDate = "Proposed date is required";
      if (!formData.audienceSize.trim()) newErrors.audienceSize = "Expected audience size is required";
      if (!formData.audienceProfile.trim()) newErrors.audienceProfile = "Audience profile is required";
      if (!formData.industry.trim()) newErrors.industry = "Industry/sector is required";
      
      const requiresMediaConsent = formData.recorded === "Yes" || formData.postEventUse === "Yes";
      if (requiresMediaConsent) {
        if (!formData.intendedPlatform.trim()) newErrors.intendedPlatform = "Intended platform is required";
        if (!formData.proposedUse.trim()) newErrors.proposedUse = "Proposed use is required";
        if (!formData.territory.trim()) newErrors.territory = "Territory is required";
        if (!formData.usagePeriod.trim()) newErrors.usagePeriod = "Usage period is required";
      }
    }
    
    if (currentStep === 4) {
      if (!formData.budgetRange.trim()) newErrors.budgetRange = "Budget range is required";
    }
    
    if (currentStep === 5) {
      const needsDetails = ["Referral or recommendation", "Speaker or talent referral", "Other"].includes(formData.source);
      if (needsDetails && !formData.sourceDetails.trim()) {
        newErrors.sourceDetails = "Please specify source details";
      }
    }
    
    if (currentStep === 6) {
      if (!formData.ackComplete) newErrors.ackComplete = "Please confirm accurate details";
      if (!formData.ackPolicy) newErrors.ackPolicy = "Please accept policy terms";
      if (!formData.ackNoReserve) newErrors.ackNoReserve = "Please acknowledge booking terms";
      if (!formData.ackNoTender) newErrors.ackNoTender = "Please acknowledge tender restrictions";
      if (!formData.ackConsent) newErrors.ackConsent = "Please consent to data processing";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setStep(prev => Math.max(1, prev - 1));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(6)) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1200);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-[Kontora,sans-serif] selection:bg-[#e30e04] selection:text-white flex flex-col justify-between">
      <Header />
      
      <main className="flex-grow pt-24 pb-20 relative">
        <VerticalBorderLines isDark={true} />
        
        <div className="mx-auto max-w-[1440px] px-6 md:px-16 relative z-30">
          <div className="mb-10 text-center">
            <div className={SECTION_TAG_CLASS} style={SECTION_TAG_STYLE}>
              <span>SECURE STRATEGIC TALENT</span>
            </div>
            <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] font-bold uppercase leading-none tracking-[-0.05em] mt-6">
              Book A <span className="text-[#e30e04]">Speaker</span>
            </h1>
            <p className="mt-4 text-[#9A9A9A] max-w-xl mx-auto text-sm leading-relaxed sm:text-base">
              Complete the multi-step form below to brief our bureau. We respond to all enquiries within 24 hours.
            </p>
          </div>

          {isSubmitted ? (
            <div className="mx-auto max-w-2xl rounded-2xl border border-[#1E1E1E] bg-[#111111] p-8 text-center text-white shadow-2xl">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#e30e04]">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold uppercase">Enquiry Submitted Successfully</h3>
              <p className="mt-4 text-[#9A9A9A] text-sm leading-relaxed">
                Thank you for considering The Speakers Firm™.
              </p>
              <div className="my-6 rounded-xl bg-black/40 p-4 border border-[#1E1E1E]">
                <p className="text-xs uppercase tracking-widest text-[#9A9A9A]">Reference Number</p>
                <p className="mt-1 text-lg font-mono font-bold text-[#e30e04]">{enquiryRef}</p>
              </div>
              <p className="text-[#9A9A9A] text-sm leading-relaxed text-left max-w-md mx-auto">
                A member of our team will contact you within one business day to assess availability, review your requirements and advise you on the next steps.
                <br /><br />
                <span className="text-xs text-[#FFFFFF]/70 italic">Please note that submitting an enquiry does not reserve or confirm the requested speaker. All bookings remain subject to availability, written confirmation and fulfilment of our commercial terms.</span>
              </p>
              <button 
                onClick={() => {
                  setStep(1);
                  setIsSubmitted(false);
                  setFormData(prev => ({
                    ...prev,
                    fullName: "",
                    email: "",
                    mobile: "",
                    organisation: "",
                    eventName: "",
                    eventDate: "",
                    ackComplete: false,
                    ackPolicy: false,
                    ackNoReserve: false,
                    ackNoTender: false,
                    ackConsent: false
                  }));
                }}
                className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#e30e04] px-8 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#c00c03]"
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <div className="mx-auto w-full max-w-4xl rounded-2xl border border-[#1E1E1E] bg-[#111111] p-6 text-white shadow-2xl md:p-8">
              {/* Progress Tracker */}
              <div className="mb-8 w-full border-b border-[#1E1E1E] pb-6">
                <div className="flex justify-between items-center text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                  <span>Step {step} of 6</span>
                  <span className="text-[#e30e04]">Progress</span>
                </div>
                <div className="w-full bg-[#1E1E1E] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#e30e04] h-full transition-all duration-300" style={{ width: `${(step / 6) * 100}%` }} />
                </div>
                <div className="grid grid-cols-6 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A] mt-3 gap-1">
                  <span className={step === 1 ? "text-white" : ""}>1. Contact</span>
                  <span className={step === 2 ? "text-white" : ""}>2. Talent</span>
                  <span className={step === 3 ? "text-white" : ""}>3. Event</span>
                  <span className={step === 4 ? "text-white" : ""}>4. Budget</span>
                  <span className={step === 5 ? "text-white" : ""}>5. Source</span>
                  <span className={step === 6 ? "text-white" : ""}>6. Consent</span>
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                {step === 1 && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-white uppercase tracking-wider">Step 1: Contact Information</h4>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Full Name*</span>
                        <input className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none" type="text" value={formData.fullName} onChange={e => handleFieldChange("fullName", e.target.value)} />
                        {errors.fullName && <p className="text-[#e30e04] text-xs mt-1">{errors.fullName}</p>}
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Job Title*</span>
                        <input className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none" type="text" value={formData.jobTitle} onChange={e => handleFieldChange("jobTitle", e.target.value)} />
                        {errors.jobTitle && <p className="text-[#e30e04] text-xs mt-1">{errors.jobTitle}</p>}
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Organisation*</span>
                        <input className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none" type="text" value={formData.organisation} onChange={e => handleFieldChange("organisation", e.target.value)} />
                        {errors.organisation && <p className="text-[#e30e04] text-xs mt-1">{errors.organisation}</p>}
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Business Email Address*</span>
                        <input className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none" type="email" value={formData.email} onChange={e => handleFieldChange("email", e.target.value)} />
                        {errors.email && <p className="text-[#e30e04] text-xs mt-1">{errors.email}</p>}
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Mobile Number*</span>
                        <input className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none" type="tel" value={formData.mobile} onChange={e => handleFieldChange("mobile", e.target.value)} />
                        {errors.mobile && <p className="text-[#e30e04] text-xs mt-1">{errors.mobile}</p>}
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Country*</span>
                        <select className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none" value={formData.country} onChange={e => handleFieldChange("country", e.target.value)}>
                          <option value="South Africa">South Africa</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="United States">United States</option>
                          <option value="Europe">Europe</option>
                          <option value="Kenya">Kenya</option>
                          <option value="Nigeria">Nigeria</option>
                          <option value="Other">Other</option>
                        </select>
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">City*</span>
                        <input className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none" type="text" value={formData.city} onChange={e => handleFieldChange("city", e.target.value)} />
                        {errors.city && <p className="text-[#e30e04] text-xs mt-1">{errors.city}</p>}
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Organisation Website</span>
                        <input className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none" type="text" value={formData.website} onChange={e => handleFieldChange("website", e.target.value)} />
                      </label>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-white uppercase tracking-wider">Step 2: Speaker or Talent Requirements</h4>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Speaker Requested (Optional)</span>
                        <input className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none" type="text" placeholder="e.g. Professor Bonang Mohale" value={formData.speakerName} onChange={e => handleFieldChange("speakerName", e.target.value)} />
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Engagement Category*</span>
                        <select className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none" value={formData.engagementCategory} onChange={e => handleFieldChange("engagementCategory", e.target.value)}>
                          <option value="Keynote speaker">Keynote speaker</option>
                          <option value="Facilitator">Facilitator</option>
                          <option value="Moderator">Moderator</option>
                          <option value="Master of ceremonies">Master of ceremonies</option>
                          <option value="Panellist">Panellist</option>
                          <option value="Comedian">Comedian</option>
                          <option value="Celebrity">Celebrity</option>
                          <option value="Other">Other</option>
                        </select>
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Topic, stream or area of expertise*</span>
                        <input className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none" type="text" placeholder="e.g. Ethical Leadership, Governance" value={formData.expertise} onChange={e => handleFieldChange("expertise", e.target.value)} />
                        {errors.expertise && <p className="text-[#e30e04] text-xs mt-1">{errors.expertise}</p>}
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Alternative recommendations?</span>
                        <select className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none" value={formData.alternativeRecommendations} onChange={e => handleFieldChange("alternativeRecommendations", e.target.value)}>
                          <option value="Yes">Yes, please propose alternatives if unavailable</option>
                          <option value="No">No, only requested speaker</option>
                        </select>
                      </label>
                      <label className="block sm:col-span-2">
                        <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Event objectives*</span>
                        <textarea className="min-h-[80px] w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] p-4 text-sm text-white focus:border-[#e30e04] focus:outline-none resize-none" value={formData.eventObjectives} onChange={e => handleFieldChange("eventObjectives", e.target.value)} />
                        {errors.eventObjectives && <p className="text-[#e30e04] text-xs mt-1">{errors.eventObjectives}</p>}
                      </label>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-white uppercase tracking-wider">Step 3: Event Information</h4>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Event Name*</span>
                        <input className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none" type="text" value={formData.eventName} onChange={e => handleFieldChange("eventName", e.target.value)} />
                        {errors.eventName && <p className="text-[#e30e04] text-xs mt-1">{errors.eventName}</p>}
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Event Type*</span>
                        <select className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none" value={formData.eventType} onChange={e => handleFieldChange("eventType", e.target.value)}>
                          <option value="Conference">Conference</option>
                          <option value="Leadership summit">Leadership summit</option>
                          <option value="Corporate function">Corporate function</option>
                          <option value="Strategy session">Strategy session</option>
                          <option value="Other">Other</option>
                        </select>
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Event Format*</span>
                        <select className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none" value={formData.eventFormat} onChange={e => handleFieldChange("eventFormat", e.target.value)}>
                          <option value="In-person">In-person</option>
                          <option value="Virtual">Virtual</option>
                          <option value="Hybrid">Hybrid</option>
                        </select>
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Proposed Event Date*</span>
                        <input className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none" type="text" placeholder="e.g. 15 September 2026" value={formData.eventDate} onChange={e => handleFieldChange("eventDate", e.target.value)} />
                        {errors.eventDate && <p className="text-[#e30e04] text-xs mt-1">{errors.eventDate}</p>}
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">City and Country*</span>
                        <input className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none" type="text" placeholder="e.g. Johannesburg, South Africa" value={formData.eventCityCountry} onChange={e => handleFieldChange("eventCityCountry", e.target.value)} />
                        {errors.eventCityCountry && <p className="text-[#e30e04] text-xs mt-1">{errors.eventCityCountry}</p>}
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Expected Audience Size*</span>
                        <input className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none" type="text" placeholder="e.g. 250 people" value={formData.audienceSize} onChange={e => handleFieldChange("audienceSize", e.target.value)} />
                        {errors.audienceSize && <p className="text-[#e30e04] text-xs mt-1">{errors.audienceSize}</p>}
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Audience Profile & Seniority*</span>
                        <input className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none" type="text" placeholder="e.g. Executive Board, C-Suite Leaders" value={formData.audienceProfile} onChange={e => handleFieldChange("audienceProfile", e.target.value)} />
                        {errors.audienceProfile && <p className="text-[#e30e04] text-xs mt-1">{errors.audienceProfile}</p>}
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Industry or Sector*</span>
                        <input className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none" type="text" placeholder="e.g. Financial Services" value={formData.industry} onChange={e => handleFieldChange("industry", e.target.value)} />
                        {errors.industry && <p className="text-[#e30e04] text-xs mt-1">{errors.industry}</p>}
                      </label>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-white uppercase tracking-wider">Step 4: Budget and Commercial Information</h4>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Currency*</span>
                        <select className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none" value={formData.currency} onChange={e => handleFieldChange("currency", e.target.value)}>
                          <option value="ZAR">ZAR (R)</option>
                          <option value="USD">USD ($)</option>
                          <option value="GBP">GBP (£)</option>
                          <option value="EUR">EUR (€)</option>
                        </select>
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Speaker Budget Range*</span>
                        <select className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none" value={formData.budgetRange} onChange={e => handleFieldChange("budgetRange", e.target.value)}>
                          <option value="" disabled>Select range...</option>
                          {getBudgetRanges().map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                        {errors.budgetRange && <p className="text-[#e30e04] text-xs mt-1">{errors.budgetRange}</p>}
                      </label>
                    </div>
                  </div>
                )}

                {step === 5 && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-white uppercase tracking-wider">Step 5: How Did You Hear About Us?</h4>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block sm:col-span-2">
                        <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">How did you hear about The Speakers Firm™?</span>
                        <select className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none" value={formData.source} onChange={e => handleFieldChange("source", e.target.value)}>
                          <option value="Google or another search engine">Google or another search engine</option>
                          <option value="LinkedIn">LinkedIn</option>
                          <option value="Referral or recommendation">Referral or recommendation</option>
                          <option value="Other">Other</option>
                        </select>
                      </label>
                      {["Referral or recommendation", "Other"].includes(formData.source) && (
                        <label className="block sm:col-span-2">
                          <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Please provide details*</span>
                          <input className="min-h-12 w-full rounded-xl border border-[#1E1E1E] bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none" type="text" value={formData.sourceDetails} onChange={e => handleFieldChange("sourceDetails", e.target.value)} />
                          {errors.sourceDetails && <p className="text-[#e30e04] text-xs mt-1">{errors.sourceDetails}</p>}
                        </label>
                      )}
                    </div>
                  </div>
                )}

                {step === 6 && (
                  <div className="space-y-6">
                    <h4 className="text-lg font-bold text-white uppercase tracking-wider">Step 6: Review, Policy and Consent</h4>
                    <div className="rounded-xl border border-[#1E1E1E] bg-black/40 p-5 space-y-4 max-h-[260px] overflow-y-auto text-xs text-[#9A9A9A] leading-relaxed scrollbar-thin">
                      <h5 className="font-bold text-white uppercase text-sm">Booking, Tender, Payment and Confidentiality Policy</h5>
                      <p><strong>1. Booking and Payment:</strong> The Speakers Firm™ requires full payment before the event. A booking may only be confirmed once payment has cleared or an authorised purchase order is accepted.</p>
                      <p><strong>2. Availability and Confirmation:</strong> Availability cannot be guaranteed or reserved indefinitely. A booking becomes binding only once formal written confirmation is issued by The Speakers Firm™.</p>
                      <p><strong>3. Announcements and Marketing:</strong> Clients may not market or represent the speaker as confirmed before receiving formal written confirmation.</p>
                      <p><strong>4. Tender and Proposal Restrictions:</strong> Clients may not name or represent any talent in a tender or bid without prior written authorisation.</p>
                    </div>

                    <div className="space-y-3">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" checked={formData.ackComplete} onChange={e => handleFieldChange("ackComplete", e.checked)} className="mt-1 h-4 w-4 rounded border-[#1E1E1E] bg-[#0A0A0A] text-[#e30e04] focus:ring-[#e30e04]" />
                        <span className="text-xs text-[#9A9A9A]">I confirm that all details provided in this enquiry are accurate.*</span>
                      </label>
                      {errors.ackComplete && <p className="text-[#e30e04] text-xs pl-7">{errors.ackComplete}</p>}

                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" checked={formData.ackPolicy} onChange={e => handleFieldChange("ackPolicy", e.checked)} className="mt-1 h-4 w-4 rounded border-[#1E1E1E] bg-[#0A0A0A] text-[#e30e04] focus:ring-[#e30e04]" />
                        <span className="text-xs text-[#9A9A9A]">I have read and accept The Speakers Firm™ Booking, Tender, Payment and Confidentiality Policy.*</span>
                      </label>
                      {errors.ackPolicy && <p className="text-[#e30e04] text-xs pl-7">{errors.ackPolicy}</p>}

                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" checked={formData.ackNoReserve} onChange={e => handleFieldChange("ackNoReserve", e.checked)} className="mt-1 h-4 w-4 rounded border-[#1E1E1E] bg-[#0A0A0A] text-[#e30e04] focus:ring-[#e30e04]" />
                        <span className="text-xs text-[#9A9A9A]">I understand that submitting this enquiry does not reserve or confirm the requested speaker.*</span>
                      </label>
                      {errors.ackNoReserve && <p className="text-[#e30e04] text-xs pl-7">{errors.ackNoReserve}</p>}

                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" checked={formData.ackNoTender} onChange={e => handleFieldChange("ackNoTender", e.checked)} className="mt-1 h-4 w-4 rounded border-[#1E1E1E] bg-[#0A0A0A] text-[#e30e04] focus:ring-[#e30e04]" />
                        <span className="text-xs text-[#9A9A9A]">I understand that I may not represent a speaker from The Speakers Firm™ in a tender, bid or proposal without written authorisation.*</span>
                      </label>
                      {errors.ackNoTender && <p className="text-[#e30e04] text-xs pl-7">{errors.ackNoTender}</p>}

                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" checked={formData.ackConsent} onChange={e => handleFieldChange("ackConsent", e.checked)} className="mt-1 h-4 w-4 rounded border-[#1E1E1E] bg-[#0A0A0A] text-[#e30e04] focus:ring-[#e30e04]" />
                        <span className="text-xs text-[#9A9A9A]">I consent to secure processing of my data.*</span>
                      </label>
                      {errors.ackConsent && <p className="text-[#e30e04] text-xs pl-7">{errors.ackConsent}</p>}
                    </div>
                  </div>
                )}

                <div className="mt-8 flex flex-col gap-3 border-t border-[#1E1E1E] pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    {step > 1 && (
                      <button type="button" onClick={prevStep} className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#9A9A9A] px-6 text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A] transition-colors hover:border-white hover:text-white sm:text-xs">
                        Back
                      </button>
                    )}
                  </div>
                  <div>
                    {step < 6 ? (
                      <button type="button" onClick={nextStep} className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#e30e04] px-7 text-[10px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#c00c03] sm:w-auto sm:text-xs">
                        Next Step
                      </button>
                    ) : (
                      <button type="submit" disabled={isSubmitting} className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#e30e04] px-7 text-[10px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#c00c03] sm:w-auto sm:text-xs">
                        {isSubmitting ? "Submitting..." : "Submit Booking Enquiry"}
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
