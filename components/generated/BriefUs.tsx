"use client";

import * as React from 'react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';
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
      <div className="h-full mx-auto max-w-[1440px] relative px-6 md:px-16">
        <div className="absolute left-6 md:left-16 top-0 bottom-0 w-[1px]" style={{
        backgroundColor: borderColor
      }}>
          <div className="absolute -top-[3.5px] left-1/2 -translate-x-1/2 w-[7px] h-[7px]" style={{
          backgroundColor: capColor
        }} />
        </div>
        <div className="absolute right-6 md:right-16 top-0 bottom-0 w-[1px]" style={{
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

export function BriefUs() {
  const [step, setStep] = useState(1);
  const [enquiryRef] = useState(() => `TSF-ENQ-${Math.floor(100000 + Math.random() * 900000)}`);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    organisation: "",
    email: "",
    mobile: "",
    
    format: "",
    eventDate: "",
    city: "",
    audienceSize: "",
    budget: "",
    
    expertise: "",
    eventObjectives: ""
  });

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
      if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
      if (!formData.jobTitle.trim()) newErrors.jobTitle = "Corporate Designation is required";
      if (!formData.organisation.trim()) newErrors.organisation = "Organisation Name is required";
      if (!formData.email.trim()) newErrors.email = "Corporate Email is required";
      if (!formData.mobile.trim()) newErrors.mobile = "Direct Contact Number is required";
    }
    
    if (currentStep === 2) {
      if (!formData.format) newErrors.format = "Nature of Engagement is required";
      if (!formData.eventDate.trim()) newErrors.eventDate = "Proposed Date(s) is required";
      if (!formData.city.trim()) newErrors.city = "Location is required";
      if (!formData.audienceSize) newErrors.audienceSize = "Estimated Audience Size is required";
      if (!formData.budget) newErrors.budget = "Allocated Talent Budget is required";
    }
    
    if (currentStep === 3) {
      if (!formData.expertise.trim()) newErrors.expertise = "Topic / Theme required is required";
      if (!formData.eventObjectives.trim()) newErrors.eventObjectives = "Strategic Objective & Context is required";
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
    if (validateStep(3)) {
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
        <section id="top" className="relative min-h-[70vh] w-full overflow-hidden pt-20 pb-28 md:pt-24 lg:pb-36 bg-[#000000]">
          <img src="/galleries/bonang-mohale/bonang-mohale.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/60 via-[#000000]/30 to-[#000000]/85" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")"
          }} aria-hidden="true" />
          <VerticalBorderLines isDark={true} />
          <div className="relative z-10 mx-auto flex min-h-[40vh] max-w-[1440px] flex-col justify-center px-6 md:px-16">
            <Reveal>
              <SectionTag>Brief Us Now (The Curation Route)</SectionTag>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-[clamp(3rem,12vw,7rem)] font-bold uppercase leading-[0.9] tracking-[-0.055em] text-[#ffffff] drop-shadow-[0_8px_34px_rgba(0,0,0,0.38)] mt-6">
                <span>Brief The</span><br />
                <span>Bureau.</span>
              </h1>
            </Reveal>
            <motion.div aria-hidden="true" initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ delay: 1.0, duration: 0.74, ease: 'easeOut' }} className="mt-5 h-[3px] w-28 origin-left bg-[#e30e04] md:mt-7 md:w-40" />
            <div className="mt-8 flex max-w-[720px] flex-col gap-3">
              <Reveal delay={0.2}>
                <p className="text-[18px] font-bold leading-tight text-[#ffffff] md:text-[22px] mb-2">
                  Challenge Us to Find the Perfect Fit.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-[15px] font-normal leading-[1.6] text-[#ffffff]/80 drop-shadow-[0_6px_22px_rgba(0,0,0,0.45)] md:text-[16px] md:leading-[1.65]">
                  Your event deserves the right voice. If you require expert curation, provide your engagement parameters below. We will assess your strategic objectives and deliver a curated shortlist of talent—whether from our published portfolio or our extended global network.
                </p>
              </Reveal>
              <Reveal delay={0.4} className="mt-4">
                <a href="#brief-form" className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#e30e04] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-white transition-all hover:bg-white hover:text-black">
                  <span>Start Strategic Briefing</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="brief-form" className="relative py-16 md:py-24 lg:py-32 px-6 md:px-16" style={{ backgroundColor: COLORS.offWhite }}>
          <VerticalBorderLines isDark={false} />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-16">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.8fr] lg:gap-20">
              
              {/* Trust Column (Sidebar) */}
              <div>
                <SectionTag>STRATEGIC MATCHING</SectionTag>
                
                <div className="mt-8 border-l-4 border-[#e30e04] pl-6 py-2">
                  <p className="text-lg font-normal italic leading-relaxed text-[#212121]">
                    "The Speakers Firm was not restricted by its existing portfolio. They searched the market, challenged conventional choices and secured the perfect talent for our audience and objectives. Give them your most demanding brief and allow them to find the voice your event deserves."
                  </p>
                </div>

                <div className="mt-8 rounded-2xl bg-gray-50 border border-black/10 p-5 space-y-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#e30e04]">VALUE PROPOSITION</p>
                  <p className="text-sm font-bold text-black leading-snug">
                    Initial response and curated recommendations within 24 hours.
                  </p>
                </div>
              </div>

              {/* Form Column */}
              <div>
                {isSubmitted ? (
                  <div className="border border-black/10 bg-white p-6 md:p-10 shadow-lg rounded-2xl text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#e30e04]">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold uppercase text-black">Brief Submitted</h3>
                    <p className="mt-4 text-[#686869] text-sm leading-relaxed">
                      Thank you for briefing The Speakers Firm™. Reference: <strong className="text-black">{enquiryRef}</strong>
                    </p>
                    <button onClick={() => { setStep(1); setIsSubmitted(false); }} className="mt-8 inline-flex items-center gap-2 rounded-full border border-black px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-black hover:bg-black hover:text-white transition-colors duration-300">
                      Submit Another Brief
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="border border-black/10 bg-white p-6 md:p-10 shadow-lg rounded-2xl text-black">
                    {/* Step Tracker */}
                    <div className="mb-6 pb-4 border-b border-black/5 flex justify-between items-center text-xs font-bold uppercase tracking-wider text-[#686869]">
                      <span>Step {step} of 3</span>
                      <span className="text-[#e30e04]">{step === 1 ? 'Identity' : step === 2 ? 'Logistics' : 'Strategic'}</span>
                    </div>

                    <AnimatePresence mode="wait">
                      {step === 1 && (
                        <motion.fieldset key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-6">
                          <h3 className="text-xs font-bold uppercase tracking-wider text-black border-b pb-3">Institutional Identity</h3>
                          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <label className="flex flex-col gap-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Full Name*</span>
                              <input required className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" value={formData.fullName} onChange={e => handleFieldChange("fullName", e.target.value)} />
                              {errors.fullName && <p className="text-[#e30e04] text-xs">{errors.fullName}</p>}
                            </label>
                            <label className="flex flex-col gap-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Corporate Designation*</span>
                              <input required className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" value={formData.jobTitle} onChange={e => handleFieldChange("jobTitle", e.target.value)} />
                            </label>
                            <label className="flex flex-col gap-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Organisation Name*</span>
                              <input required className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" value={formData.organisation} onChange={e => handleFieldChange("organisation", e.target.value)} />
                            </label>
                            <label className="flex flex-col gap-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Corporate Email*</span>
                              <input required type="email" className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" value={formData.email} onChange={e => handleFieldChange("email", e.target.value)} />
                            </label>
                            <label className="flex flex-col gap-2 sm:col-span-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Direct Contact Number*</span>
                              <input required className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" value={formData.mobile} onChange={e => handleFieldChange("mobile", e.target.value)} />
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
                          <h3 className="text-xs font-bold uppercase tracking-wider text-black border-b pb-3">Engagement Logistics</h3>
                          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <label className="flex flex-col gap-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Nature of Engagement*</span>
                              <select required className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" value={formData.format} onChange={e => handleFieldChange("format", e.target.value)}>
                                <option value="" disabled>Select option...</option>
                                <option value="Executive Boardroom Strategy">Executive Boardroom Strategy</option>
                                <option value="Annual General Meeting">Annual General Meeting</option>
                                <option value="Leadership Summit">Leadership Summit</option>
                                <option value="Brand Campaign">Brand Campaign</option>
                                <option value="Keynote Address">Keynote Address</option>
                                <option value="Panel Facilitation">Panel Facilitation</option>
                                <option value="Virtual Broadcast">Virtual Broadcast</option>
                              </select>
                            </label>
                            <label className="flex flex-col gap-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Proposed Date(s)*</span>
                              <input required className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" value={formData.eventDate} onChange={e => handleFieldChange("eventDate", e.target.value)} placeholder="e.g. 15 September 2026" />
                            </label>
                            <label className="flex flex-col gap-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Location*</span>
                              <input required className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" value={formData.city} onChange={e => handleFieldChange("city", e.target.value)} placeholder="e.g. Johannesburg, South Africa" />
                            </label>
                            <label className="flex flex-col gap-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Estimated Audience Size*</span>
                              <select required className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" value={formData.audienceSize} onChange={e => handleFieldChange("audienceSize", e.target.value)}>
                                <option value="" disabled>Select range...</option>
                                <option value="Under 50 (Executive/Closed Door)">Under 50 (Executive/Closed Door)</option>
                                <option value="50-200">50–200</option>
                                <option value="200-500">200–500</option>
                                <option value="500+ (Large Scale Summit)">500+ (Large Scale Summit)</option>
                              </select>
                            </label>
                            <label className="flex flex-col gap-2 sm:col-span-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Allocated Talent Budget*</span>
                              <select required className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" value={formData.budget} onChange={e => handleFieldChange("budget", e.target.value)}>
                                <option value="" disabled>Select range...</option>
                                <option value="To be Determined">To be Determined</option>
                                <option value="R20k–R40k">R20k–R40k</option>
                                <option value="R40k–R80k">R40k–R80k</option>
                                <option value="R80k–R150k">R80k–R150k</option>
                                <option value="R150k+">R150k+</option>
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

                      {step === 3 && (
                        <motion.fieldset key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-6">
                          <h3 className="text-xs font-bold uppercase tracking-wider text-black border-b pb-3">The Strategic Brief</h3>
                          <div className="grid grid-cols-1 gap-6">
                            <label className="flex flex-col gap-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Topic / Theme Required*</span>
                              <input required className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" value={formData.expertise} onChange={e => handleFieldChange("expertise", e.target.value)} placeholder="e.g. AI Transformation, Macroeconomics" />
                            </label>
                            <label className="flex flex-col gap-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Strategic Objective &amp; Context*</span>
                              <textarea required className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors min-h-[120px] resize-none" value={formData.eventObjectives} onChange={e => handleFieldChange("eventObjectives", e.target.value)} placeholder="What specific shift must this engagement achieve?" />
                            </label>
                          </div>
                          <div className="mt-4 flex justify-between">
                            <button className="text-[12px] font-bold uppercase text-[#686869] hover:text-black" type="button" onClick={prevStep}>Back</button>
                            <button className="flex items-center gap-2 rounded-full border border-red bg-[#e30e04] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-white hover:bg-black hover:border-black transition-colors duration-300" type="submit">
                              <span>Request Talent Recommendations</span>
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
      </div>

      <Footer />
    </main>;
}
