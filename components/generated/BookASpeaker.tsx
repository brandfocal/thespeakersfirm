"use client";

import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Check, ChevronDown, CheckCircle } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const COLORS = {
  black: '#000000',
  red: '#e30e04',
  gray: '#000000',
  silver: '#ffffff',
  borderGray: '#ffffff',
  darkGray: '#000000',
  offWhite: '#ffffff'
};

const stats = [{
  id: 'turnaround',
  value: '24 HRS',
  label: 'Average curation turnaround'
}, {
  id: 'tracks',
  value: '20+',
  label: 'Strategic speaker tracks'
}, {
  id: 'confidentiality',
  value: '100%',
  label: 'Institutional confidentiality'
}];

const revealTransition = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
};

const SECTION_TAG_CLASS = 'inline-flex items-center border border-l-[4px] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] shadow-none';
const SECTION_TAG_STYLE = {
  backgroundColor: '#000000',
  borderColor: '#000000',
  borderLeftColor: '#e30e04',
  color: '#ffffff'
};

const SectionTag = ({
  children
}: {
  children: string;
}) => <span className={SECTION_TAG_CLASS} style={SECTION_TAG_STYLE}>{children}</span>;

const VerticalBorderLines = ({
  isDark = false
}: {
  isDark?: boolean;
}) => {
  const borderColor = isDark ? '#393939' : '#C7C7C8';
  const capColor = isDark ? '#FFFFFF' : '#212121';
  return <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-20">
      <div className="h-full mx-auto max-w-[1440px] relative px-6 md:px-10">
        <div className="absolute left-6 md:left-10 top-0 bottom-0 w-[1px]" style={{
        backgroundColor: borderColor
      }}>
          <div className="absolute -top-[3.5px] left-1/2 -translate-x-1/2 w-[7px] h-[7px]" style={{
          backgroundColor: capColor
        }} />
        </div>
        <div className="absolute right-6 md:right-10 top-0 bottom-0 w-[1px]" style={{
        backgroundColor: borderColor
      }}>
          <div className="absolute -top-[3.5px] left-1/2 -translate-x-1/2 w-[7px] h-[7px]" style={{
          backgroundColor: capColor
        }} />
        </div>
      </div>
    </div>;
};

const Reveal = ({
  children,
  delay = 0,
  className = ''
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  return <motion.div className={className} initial={{
    opacity: 0,
    y: 28
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    margin: '-80px'
  }} transition={{
    ...revealTransition,
    delay
  }}>
      {children}
    </motion.div>;
};

export function BookASpeaker() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [enquiryRef] = useState(() => `TSF-ENQ-${Math.floor(100000 + Math.random() * 900000)}`);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    // Step 1
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
    
    // Step 2
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
    
    // Step 3
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
    
    // Step 4
    budgetRange: "",
    currency: "ZAR",
    budgetStatus: "Approved",
    quotationDeadline: "",
    decisionDate: "",
    
    // Step 5
    source: "Google or another search engine",
    sourceDetails: "",
    
    // Step 6
    ackComplete: false,
    ackPolicy: false,
    ackNoReserve: false,
    ackNoTender: false,
    ackConsent: false,
    marketingConsent: false
  });

  React.useEffect(() => {
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

  return <main className="min-h-screen w-full selection:bg-[#e30e04] selection:text-white font-[Kontora,sans-serif] overflow-x-hidden bg-[#ffffff] text-[#000000] flex flex-col justify-between">
      <Header />
      
      <div className="flex-grow">
        <section id="top" className="relative min-h-screen w-full overflow-hidden pt-20 pb-28 md:pt-24 lg:pb-44 bg-[#000000]">
          <img src="/galleries/bonang-mohale/bonang-mohale.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/60 via-[#000000]/30 to-[#000000]/85" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")"
          }} aria-hidden="true" />
          <VerticalBorderLines isDark={true} />
          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] max-w-[1440px] flex-col justify-center px-6 md:px-10">
            <Reveal>
              <SectionTag>BOOK A SPEAKER</SectionTag>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-[clamp(3rem,12vw,7rem)] font-bold uppercase leading-[0.9] tracking-[-0.055em] text-[#ffffff] drop-shadow-[0_8px_34px_rgba(0,0,0,0.38)] mt-6">
                <span>Brief The</span><br />
                <span>Bureau.</span>
              </h1>
            </Reveal>
            <motion.div aria-hidden="true" initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ delay: 1.0, duration: 0.74, ease: 'easeOut' }} className="mt-5 h-[3px] w-28 origin-left bg-[#e30e04] md:mt-7 md:w-40" />
            <div className="mt-8 flex max-w-[620px] flex-col gap-3">
              <Reveal delay={0.2}>
                <p className="text-[15px] font-normal leading-[1.6] text-[#ffffff]/80 drop-shadow-[0_6px_22px_rgba(0,0,0,0.45)] md:text-[16px] md:leading-[1.65]">
                  Secure Strategic Talent. Receive Curated Options Within 24 Hours. All inquiries are handled with absolute institutional confidentiality.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 mt-4">
                  <motion.a href="#brief" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex w-full items-center justify-center gap-2 rounded-full border bg-white p-1.5 sm:w-auto" style={{ borderColor: 'rgba(255, 255, 255, 0.18)' }}>
                    <span className="flex flex-1 items-center justify-center gap-3 rounded-full bg-[#000000] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-white sm:flex-none sm:px-10 sm:py-4 sm:text-[13px]">
                      <span>Brief Us Now</span>
                      <ArrowRight size={16} />
                    </span>
                  </motion.a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="brief" className="relative py-16 md:py-24 lg:py-32 px-6 md:px-16" style={{ backgroundColor: COLORS.offWhite }}>
          <VerticalBorderLines isDark={false} />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-16">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.8fr] lg:gap-20">
              <div>
                <SectionTag>STRATEGIC MATCHING</SectionTag>
                <Reveal>
                  <h2 className="mt-6 text-[clamp(2.2rem,8vw,3.8rem)] font-bold uppercase leading-[0.9] tracking-[-0.055em] text-[#000000]">
                    Curation<br />In Motion.
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-6 text-sm leading-relaxed text-[#686869] max-w-sm">
                    Our strategic matching system ensures your objectives, timeline, audience dynamics, and budget coordinate seamlessly to deliver optimal engagement outcomes.
                  </p>
                </Reveal>
                
                <div className="mt-10 flex flex-col gap-4 border-t border-black/10 pt-8 max-w-sm">
                  <div className="flex justify-between items-center text-black text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                    <span>Step {step} of 6</span>
                    <span className="text-[#e30e04]">Progress</span>
                  </div>
                  <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#e30e04] h-full transition-all duration-300" style={{ width: `${(step / 6) * 100}%` }} />
                  </div>
                  <div className="grid grid-cols-3 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A] mt-3 gap-2">
                    <span className={step <= 2 ? "text-black" : ""}>1-2. Contact & Talent</span>
                    <span className={step > 2 && step <= 4 ? "text-black" : ""}>3-4. Event & Budget</span>
                    <span className={step > 4 ? "text-black" : ""}>5-6. Source & Consent</span>
                  </div>
                </div>
              </div>

              <div>
                {isSubmitted ? (
                  <div className="border border-black/10 bg-white p-6 md:p-10 shadow-lg rounded-2xl text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#e30e04]">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold uppercase text-black">Enquiry Submitted</h3>
                    <p className="mt-4 text-[#686869] text-sm leading-relaxed">
                      Thank you for briefing The Speakers Firm™. Reference: <strong className="text-black">{enquiryRef}</strong>
                    </p>
                    <button onClick={() => { setStep(1); setIsSubmitted(false); }} className="mt-8 inline-flex items-center gap-2 rounded-full border border-black px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-black hover:bg-black hover:text-white transition-colors duration-300">
                      Submit Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="border border-black/10 bg-white p-6 md:p-10 shadow-lg rounded-2xl text-black">
                    <AnimatePresence mode="wait">
                      {step === 1 && (
                        <motion.fieldset key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-6">
                          <h3 className="text-sm font-bold uppercase tracking-wider text-black border-b pb-3">Step 1: Contact Information</h3>
                          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <label className="flex flex-col gap-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Full Name*</span>
                              <input required className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" value={formData.fullName} onChange={e => handleFieldChange("fullName", e.target.value)} />
                              {errors.fullName && <p className="text-[#e30e04] text-xs">{errors.fullName}</p>}
                            </label>
                            <label className="flex flex-col gap-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Job Title*</span>
                              <input required className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" value={formData.jobTitle} onChange={e => handleFieldChange("jobTitle", e.target.value)} />
                            </label>
                            <label className="flex flex-col gap-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Organisation*</span>
                              <input required className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" value={formData.organisation} onChange={e => handleFieldChange("organisation", e.target.value)} />
                            </label>
                            <label className="flex flex-col gap-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Email Address*</span>
                              <input required type="email" className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" value={formData.email} onChange={e => handleFieldChange("email", e.target.value)} />
                            </label>
                            <label className="flex flex-col gap-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Mobile Number*</span>
                              <input required className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" value={formData.mobile} onChange={e => handleFieldChange("mobile", e.target.value)} />
                            </label>
                            <label className="flex flex-col gap-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">City & Country*</span>
                              <input required className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" value={formData.city} onChange={e => handleFieldChange("city", e.target.value)} placeholder="e.g. Johannesburg, South Africa" />
                            </label>
                          </div>
                          <div className="mt-4 flex justify-end">
                            <button className="flex items-center gap-2 rounded-full border border-black px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-black hover:bg-black hover:text-white transition-colors duration-300" type="button" onClick={nextStep}>
                              <span>Next Step</span>
                              <ArrowRight size={14} />
                            </button>
                          </div>
                        </motion.fieldset>
                      )}

                      {step === 2 && (
                        <motion.fieldset key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-6">
                          <h3 className="text-sm font-bold uppercase tracking-wider text-black border-b pb-3">Step 2: Speaker requirements</h3>
                          <div className="grid grid-cols-1 gap-6">
                            <label className="flex flex-col gap-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Speaker Requested (Optional)</span>
                              <input className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" value={formData.speakerName} onChange={e => handleFieldChange("speakerName", e.target.value)} placeholder="Leave blank for strategic matching" />
                            </label>
                            <label className="flex flex-col gap-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Area of Expertise / Topic*</span>
                              <input required className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" value={formData.expertise} onChange={e => handleFieldChange("expertise", e.target.value)} placeholder="e.g. Ethical Mentorship, Cyber Security" />
                            </label>
                            <label className="flex flex-col gap-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Strategic Objectives / Focus*</span>
                              <textarea required className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors min-h-[100px] resize-none" value={formData.eventObjectives} onChange={e => handleFieldChange("eventObjectives", e.target.value)} placeholder="What must this event achieve?" />
                            </label>
                          </div>
                          <div className="mt-4 flex justify-between">
                            <button className="text-[12px] font-bold uppercase text-[#686869] hover:text-black" type="button" onClick={prevStep}>Back</button>
                            <button className="flex items-center gap-2 rounded-full border border-black px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-black hover:bg-black hover:text-white transition-colors duration-300" type="button" onClick={nextStep}>
                              <span>Next Step</span>
                              <ArrowRight size={14} />
                            </button>
                          </div>
                        </motion.fieldset>
                      )}

                      {step === 3 && (
                        <motion.fieldset key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-6">
                          <h3 className="text-sm font-bold uppercase tracking-wider text-black border-b pb-3">Step 3: Event Information</h3>
                          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <label className="flex flex-col gap-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Event Name*</span>
                              <input required className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" value={formData.eventName} onChange={e => handleFieldChange("eventName", e.target.value)} />
                            </label>
                            <label className="flex flex-col gap-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Event Date*</span>
                              <input required className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" value={formData.eventDate} onChange={e => handleFieldChange("eventDate", e.target.value)} placeholder="e.g. 15 October 2026" />
                            </label>
                            <label className="flex flex-col gap-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Event Location / City*</span>
                              <input required className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" value={formData.eventCityCountry} onChange={e => handleFieldChange("eventCityCountry", e.target.value)} />
                            </label>
                            <label className="flex flex-col gap-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Expected Audience Size*</span>
                              <input required className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" value={formData.audienceSize} onChange={e => handleFieldChange("audienceSize", e.target.value)} />
                            </label>
                            <label className="flex flex-col gap-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Audience Profile*</span>
                              <input required className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" value={formData.audienceProfile} onChange={e => handleFieldChange("audienceProfile", e.target.value)} placeholder="e.g. Executive C-Suite" />
                            </label>
                            <label className="flex flex-col gap-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Industry / Sector*</span>
                              <input required className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" value={formData.industry} onChange={e => handleFieldChange("industry", e.target.value)} />
                            </label>
                          </div>
                          <div className="mt-4 flex justify-between">
                            <button className="text-[12px] font-bold uppercase text-[#686869] hover:text-black" type="button" onClick={prevStep}>Back</button>
                            <button className="flex items-center gap-2 rounded-full border border-black px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-black hover:bg-black hover:text-white transition-colors duration-300" type="button" onClick={nextStep}>
                              <span>Next Step</span>
                              <ArrowRight size={14} />
                            </button>
                          </div>
                        </motion.fieldset>
                      )}

                      {step === 4 && (
                        <motion.fieldset key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-6">
                          <h3 className="text-sm font-bold uppercase tracking-wider text-black border-b pb-3">Step 4: Budget range</h3>
                          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <label className="flex flex-col gap-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Currency*</span>
                              <select className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" value={formData.currency} onChange={e => handleFieldChange("currency", e.target.value)}>
                                <option value="ZAR">ZAR (R)</option>
                                <option value="USD">USD ($)</option>
                                <option value="GBP">GBP (£)</option>
                                <option value="EUR">EUR (€)</option>
                              </select>
                            </label>
                            <label className="flex flex-col gap-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Speaker Budget Range*</span>
                              <select className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" value={formData.budgetRange} onChange={e => handleFieldChange("budgetRange", e.target.value)}>
                                <option value="" disabled>Select range...</option>
                                {getBudgetRanges().map((range) => (
                                  <option key={range} value={range}>{range}</option>
                                ))}
                              </select>
                            </label>
                          </div>
                          <div className="mt-4 flex justify-between">
                            <button className="text-[12px] font-bold uppercase text-[#686869] hover:text-black" type="button" onClick={prevStep}>Back</button>
                            <button className="flex items-center gap-2 rounded-full border border-black px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-black hover:bg-black hover:text-white transition-colors duration-300" type="button" onClick={nextStep}>
                              <span>Next Step</span>
                              <ArrowRight size={14} />
                            </button>
                          </div>
                        </motion.fieldset>
                      )}

                      {step === 5 && (
                        <motion.fieldset key="step5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-6">
                          <h3 className="text-sm font-bold uppercase tracking-wider text-black border-b pb-3">Step 5: How did you hear about us?</h3>
                          <div className="grid grid-cols-1 gap-6">
                            <label className="flex flex-col gap-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Source Channel*</span>
                              <select className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" value={formData.source} onChange={e => handleFieldChange("source", e.target.value)}>
                                <option value="Google or another search engine">Google or another search engine</option>
                                <option value="LinkedIn">LinkedIn</option>
                                <option value="Referral or recommendation">Referral or recommendation</option>
                                <option value="Other">Other</option>
                              </select>
                            </label>
                            {["Referral or recommendation", "Other"].includes(formData.source) && (
                              <label className="flex flex-col gap-2">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Provide details*</span>
                                <input required className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" value={formData.sourceDetails} onChange={e => handleFieldChange("sourceDetails", e.target.value)} />
                              </label>
                            )}
                          </div>
                          <div className="mt-4 flex justify-between">
                            <button className="text-[12px] font-bold uppercase text-[#686869] hover:text-black" type="button" onClick={prevStep}>Back</button>
                            <button className="flex items-center gap-2 rounded-full border border-black px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-black hover:bg-black hover:text-white transition-colors duration-300" type="button" onClick={nextStep}>
                              <span>Next Step</span>
                              <ArrowRight size={14} />
                            </button>
                          </div>
                        </motion.fieldset>
                      )}

                      {step === 6 && (
                        <motion.fieldset key="step6" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-6">
                          <h3 className="text-sm font-bold uppercase tracking-wider text-black border-b pb-3">Step 6: Review &amp; Policies</h3>
                          
                          <div className="rounded-xl border border-black/10 bg-gray-50 p-4 space-y-3 max-h-[160px] overflow-y-auto text-xs text-[#686869]">
                            <h5 className="font-bold text-black uppercase">Enquiry Terms &amp; Policies</h5>
                            <p><strong>1. Payments:</strong> Clearance of booking fee is required prior to event delivery.</p>
                            <p><strong>2. Availability:</strong> Placements remain non-reserved until full written contract executions.</p>
                          </div>

                          <div className="space-y-3">
                            <label className="flex items-start gap-3 cursor-pointer">
                              <input type="checkbox" checked={formData.ackComplete} onChange={e => handleFieldChange("ackComplete", e.target.checked)} className="mt-1 h-4 w-4 rounded border-gray-300 text-[#e30e04] focus:ring-[#e30e04]" />
                              <span className="text-xs text-[#686869]">I confirm that all details provided in this enquiry are accurate.*</span>
                            </label>
                            <label className="flex items-start gap-3 cursor-pointer">
                              <input type="checkbox" checked={formData.ackPolicy} onChange={e => handleFieldChange("ackPolicy", e.target.checked)} className="mt-1 h-4 w-4 rounded border-gray-300 text-[#e30e04] focus:ring-[#e30e04]" />
                              <span className="text-xs text-[#686869]">I accept booking and confidentiality policy.*</span>
                            </label>
                            <label className="flex items-start gap-3 cursor-pointer">
                              <input type="checkbox" checked={formData.ackNoReserve} onChange={e => handleFieldChange("ackNoReserve", e.target.checked)} className="mt-1 h-4 w-4 rounded border-gray-300 text-[#e30e04] focus:ring-[#e30e04]" />
                              <span className="text-xs text-[#686869]">I understand submitting does not reserve the speaker.*</span>
                            </label>
                            <label className="flex items-start gap-3 cursor-pointer">
                              <input type="checkbox" checked={formData.ackNoTender} onChange={e => handleFieldChange("ackNoTender", e.target.checked)} className="mt-1 h-4 w-4 rounded border-gray-300 text-[#e30e04] focus:ring-[#e30e04]" />
                              <span className="text-xs text-[#686869]">I represent that I will not name speakers in tenders without consent.*</span>
                            </label>
                            <label className="flex items-start gap-3 cursor-pointer">
                              <input type="checkbox" checked={formData.ackConsent} onChange={e => handleFieldChange("ackConsent", e.target.checked)} className="mt-1 h-4 w-4 rounded border-gray-300 text-[#e30e04] focus:ring-[#e30e04]" />
                              <span className="text-xs text-[#686869]">I consent to secure processing of my data.*</span>
                            </label>
                          </div>

                          <div className="mt-4 flex justify-between">
                            <button className="text-[12px] font-bold uppercase text-[#686869] hover:text-black" type="button" onClick={prevStep}>Back</button>
                            <button className="flex items-center gap-2 rounded-full border border-red bg-[#e30e04] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-white hover:bg-black hover:border-black transition-colors duration-300" type="submit">
                              Submit Booking Enquiry
                            </button>
                          </div>
                        </motion.fieldset>
                      )}
                    </AnimatePresence>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-16 md:py-24 lg:py-32 px-6 md:px-16 border-t border-black/10" style={{ backgroundColor: COLORS.offWhite }}>
          <VerticalBorderLines isDark={false} />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-16 grid grid-cols-1 gap-12 md:grid-cols-2">
            <Reveal>
              <blockquote className="border-l-4 border-[#e30e04] pl-6 py-2">
                <span className="block text-[11px] font-bold uppercase tracking-widest text-[#e30e04] mb-3">CURATED RECOMMENDATIONS</span>
                <p className="text-xl font-bold leading-tight">
                  “Within 24 hours, The Speakers Firm presented a carefully curated shortlist aligned with our strategy, audience, budget and brand. Their speed never compromised quality.”
                </p>
                <footer className="mt-4 text-xs text-[#686869]">— Head of Brand, Standard Bank</footer>
              </blockquote>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-col gap-4">
                <span className="block text-[11px] font-bold uppercase tracking-widest text-[#e30e04]">DIRECT DESK ACCESS</span>
                <p className="text-sm leading-relaxed text-[#686869]">For urgent bookings or boardroom advisory interventions, email us directly:</p>
                <div className="flex flex-col gap-2">
                  <a href="mailto:booking@thespeakersfirm.co.za" className="text-sm font-bold text-black hover:text-[#e30e04] transition-colors">booking@thespeakersfirm.co.za</a>
                  <a href="mailto:info@thespeakersfirm.co.za" className="text-sm font-bold text-black hover:text-[#e30e04] transition-colors">info@thespeakersfirm.co.za</a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </div>

      <Footer />
    </main>;
}
