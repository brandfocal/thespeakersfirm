"use client";

import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';

const COLORS = {
  black: '#000000',
  red: '#e30e04',
  gray: '#000000',
  silver: '#ffffff',
  borderGray: '#ffffff',
  darkGray: '#000000',
  offWhite: '#ffffff'
};

const formSteps = [{
  id: 'institutional-identity',
  step: 1,
  number: '01',
  label: 'INSTITUTIONAL IDENTITY'
}, {
  id: 'engagement-logistics',
  step: 2,
  number: '02',
  label: 'ENGAGEMENT LOGISTICS'
}, {
  id: 'strategic-alignment',
  step: 3,
  number: '03',
  label: 'STRATEGIC ALIGNMENT'
}];

const introSteps = [{
  id: 'institutional-identity-intro',
  step: 1,
  number: '01',
  label: 'Institutional Identity'
}, {
  id: 'engagement-logistics-intro',
  step: 2,
  number: '02',
  label: 'Engagement Logistics'
}, {
  id: 'strategic-alignment-intro',
  step: 3,
  number: '03',
  label: 'Strategic Alignment'
}];

const engagementOptions = [{
  id: 'boardroom',
  label: 'Executive Boardroom Strategy'
}, {
  id: 'agm',
  label: 'Annual General Meeting'
}, {
  id: 'summit',
  label: 'Leadership Summit'
}, {
  id: 'campaign',
  label: 'Brand Campaign'
}, {
  id: 'keynote',
  label: 'Keynote Address'
}, {
  id: 'panel',
  label: 'Panel Facilitation'
}, {
  id: 'virtual',
  label: 'Virtual Broadcast'
}];

const audienceOptions = [{
  id: 'under-50',
  label: 'Under 50 (Executive/Closed Door)'
}, {
  id: '50-200',
  label: '50–200'
}, {
  id: '200-500',
  label: '200–500'
}, {
  id: '500-plus',
  label: '500+ (Large Scale Summit)'
}];

const budgetOptions = [{
  id: 'tbd',
  label: 'To be Determined'
}, {
  id: '20-40',
  label: 'R20k–R40k'
}, {
  id: '40-80',
  label: 'R40k–R80k'
}, {
  id: '80-150',
  label: 'R80k–R150k'
}, {
  id: '150-plus',
  label: 'R150k+'
}];

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

const stepTransition = {
  duration: 0.45,
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
  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const activeStepLabel = formSteps.find(item => item.step === currentStep)?.label ?? 'INSTITUTIONAL IDENTITY';

  const submitBrief = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return <main className="min-h-screen w-full selection:bg-[#e30e04] selection:text-white font-[Kontora,sans-serif] overflow-x-hidden bg-[#ffffff] text-[#000000]">
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
              <div className="mt-10 flex flex-col gap-5 border-t border-black/10 pt-8 max-w-sm">
                {introSteps.map(step => (
                  <button key={step.id} type="button" onClick={() => setCurrentStep(step.step)} className={`flex items-center gap-4 text-left transition-colors duration-300 ${currentStep === step.step ? 'text-[#e30e04]' : 'text-[#686869] hover:text-[#000000]'}`}>
                    <span className="font-mono text-xs font-bold tracking-wider">{step.number}</span>
                    <span className="text-xs font-bold uppercase tracking-wider">{step.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Reveal delay={0.2}>
                <form onSubmit={submitBrief} className="border border-black/10 bg-white p-6 md:p-10 shadow-lg rounded-2xl">
                  <div className="mb-8 border-b border-black/10 pb-6 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold tracking-widest text-[#686869]">STEP {currentStep} OF 3</span>
                      <h3 className="mt-1 text-sm font-bold uppercase tracking-wider text-[#000000]">{activeStepLabel}</h3>
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    {currentStep === 1 && (
                      <motion.fieldset key="identity" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={stepTransition} className="flex flex-col gap-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                          <label className="flex flex-col gap-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Your Name</span>
                            <input required className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" name="name" placeholder="John Doe" />
                          </label>
                          <label className="flex flex-col gap-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Corporate Email</span>
                            <input required type="email" className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" name="email" placeholder="john@organisation.com" />
                          </label>
                          <label className="flex flex-col gap-2 sm:col-span-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Organisation / Entity</span>
                            <input required className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" name="organisation" placeholder="e.g. Standard Bank" />
                          </label>
                        </div>
                        <div className="mt-4 flex justify-end">
                          <button className="flex items-center gap-2 rounded-full border border-black px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-black hover:bg-black hover:text-white transition-colors duration-300" type="button" onClick={() => setCurrentStep(2)}>
                            <span>NEXT STEP</span>
                            <ArrowRight size={14} />
                          </button>
                        </div>
                      </motion.fieldset>
                    )}

                    {currentStep === 2 && (
                      <motion.fieldset key="logistics" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={stepTransition} className="flex flex-col gap-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                          <label className="flex flex-col gap-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Engagement Format</span>
                            <span className="relative flex items-center">
                              <select required className="w-full appearance-none border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors pr-10" name="format" defaultValue="">
                                <option value="" disabled>Select Format</option>
                                {engagementOptions.map(option => <option key={option.id} value={option.label}>{option.label}</option>)}
                              </select>
                              <ChevronDown className="absolute right-3 pointer-events-none text-[#686869]" size={16} />
                            </span>
                          </label>
                          <label className="flex flex-col gap-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Audience Size</span>
                            <span className="relative flex items-center">
                              <select required className="w-full appearance-none border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors pr-10" name="audience" defaultValue="">
                                <option value="" disabled>Select Audience Size</option>
                                {audienceOptions.map(option => <option key={option.id} value={option.label}>{option.label}</option>)}
                              </select>
                              <ChevronDown className="absolute right-3 pointer-events-none text-[#686869]" size={16} />
                            </span>
                          </label>
                          <label className="flex flex-col gap-2 sm:col-span-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Allocated Talent Budget (ZAR)</span>
                            <span className="relative flex items-center">
                              <select required className="w-full appearance-none border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors pr-10" name="budget" defaultValue="">
                                <option value="" disabled>Select budget range</option>
                                {budgetOptions.map(option => <option key={option.id} value={option.label}>{option.label}</option>)}
                              </select>
                              <ChevronDown className="absolute right-3 pointer-events-none text-[#686869]" size={16} />
                            </span>
                          </label>
                        </div>
                        <div className="mt-4 flex justify-between">
                          <button className="flex items-center gap-2 rounded-full border border-black/20 px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-black/60 hover:text-black transition-colors duration-300" type="button" onClick={() => setCurrentStep(1)}>
                            <span>BACK</span>
                          </button>
                          <button className="flex items-center gap-2 rounded-full border border-black px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-black hover:bg-black hover:text-white transition-colors duration-300" type="button" onClick={() => setCurrentStep(3)}>
                            <span>NEXT STEP</span>
                            <ArrowRight size={14} />
                          </button>
                        </div>
                      </motion.fieldset>
                    )}

                    {currentStep === 3 && (
                      <motion.fieldset key="alignment" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={stepTransition} className="flex flex-col gap-6">
                        <div className="grid grid-cols-1 gap-6">
                          <label className="flex flex-col gap-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Specific Faculty Member Requested (Optional)</span>
                            <input className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors" name="faculty" placeholder="Leave blank for strategic matching" />
                          </label>
                          <label className="flex flex-col gap-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Strategic Objective &amp; Context</span>
                            <textarea required className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors min-h-[120px] resize-none" name="context" placeholder="Briefly outline the core theme of your event or the specific organisational shift this engagement must achieve..." />
                          </label>
                        </div>
                        <div className="mt-4 flex justify-between">
                          <button className="flex items-center gap-2 rounded-full border border-black/20 px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-black/60 hover:text-black transition-colors duration-300" type="button" onClick={() => setCurrentStep(2)}>
                            <span>BACK</span>
                          </button>
                          <button className="flex items-center gap-2 rounded-full border border-[#e30e04] bg-[#e30e04] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-white hover:bg-black hover:border-black transition-colors duration-300" type="submit">
                            <span>{submitted ? 'BRIEF RECEIVED' : 'SUBMIT STRATEGIC BRIEF'}</span>
                          </button>
                        </div>
                      </motion.fieldset>
                    )}
                  </AnimatePresence>
                </form>
              </Reveal>
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
    </main>;
}
