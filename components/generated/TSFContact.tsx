"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

type ContactField = {
  id: string;
  label: string;
  name: string;
  type: 'text' | 'email' | 'date' | 'textarea';
  placeholder: string;
  autoComplete?: string;
  wide?: boolean;
  rows?: number;
};

type ContactTab = {
  id: string;
  label: string;
  kicker: string;
  title: string;
  description: string;
  subject: string;
  message: string;
  fields: ContactField[];
};

const contactMethods = [{
  id: 'telephone',
  label: 'Telephone',
  value: '+27 11 568 7055',
  href: 'tel:+27115687055',
  icon: 'phone'
}, {
  id: 'email',
  label: 'Email',
  value: 'info@thespeakersfirm.co.za',
  href: 'mailto:info@thespeakersfirm.co.za',
  icon: 'mail'
}, {
  id: 'address',
  label: 'Physical Address',
  value: '364 Pine Avenue, Ferndale, Randburg, 2196',
  detail: 'Johannesburg, South Africa',
  icon: 'location'
}];

const socialLinks = [{
  id: 'linkedin',
  label: 'LinkedIn',
  href: 'https://www.linkedin.com/company/the-speakers-firm/',
  icon: 'linkedin'
}, {
  id: 'instagram',
  label: 'Instagram',
  href: 'https://www.instagram.com/thespeakersfirm/',
  icon: 'instagram'
}];

const contactTabs: ContactTab[] = [{
  id: 'general',
  label: 'General Enquiry',
  kicker: 'Open Brief',
  title: 'Start a considered conversation.',
  description: 'For introductions, availability questions, and general speaker guidance.',
  subject: 'General enquiry for The Speakers Firm',
  message: 'Share the event date, audience profile, strategic objective, preferred budget range, and any speaker themes you are considering.',
  fields: [{
    id: 'general-name',
    label: 'Name',
    name: 'name',
    type: 'text',
    autoComplete: 'name',
    placeholder: 'Your full name'
  }, {
    id: 'general-email',
    label: 'Email',
    name: 'email',
    type: 'email',
    autoComplete: 'email',
    placeholder: 'you@organisation.com'
  }, {
    id: 'general-message',
    label: 'Message',
    name: 'message',
    type: 'textarea',
    placeholder: 'How can our consultants help?',
    wide: true,
    rows: 6
  }]
}, {
  id: 'media',
  label: 'Media & Press',
  kicker: 'Press Desk',
  title: 'Route press requests directly.',
  description: 'For interviews, media comments, speaker bios, and production coordination.',
  subject: 'Media or press request',
  message: 'Share publication details, deadline, format, requested speaker, and the context for the feature.',
  fields: [{
    id: 'media-name',
    label: 'Name',
    name: 'name',
    type: 'text',
    autoComplete: 'name',
    placeholder: 'Your full name'
  }, {
    id: 'media-email',
    label: 'Email',
    name: 'email',
    type: 'email',
    autoComplete: 'email',
    placeholder: 'press@publication.com'
  }, {
    id: 'media-outlet',
    label: 'Publication / Outlet',
    name: 'outlet',
    type: 'text',
    placeholder: 'Publication, channel, or platform'
  }, {
    id: 'media-deadline',
    label: 'Deadline',
    name: 'deadline',
    type: 'date',
    placeholder: 'Select the deadline'
  }, {
    id: 'media-request',
    label: 'Request Details',
    name: 'message',
    type: 'textarea',
    placeholder: 'Interview format, requested speaker, deadline, and context.',
    wide: true,
    rows: 6
  }]
}, {
  id: 'partnerships',
  label: 'Partnerships',
  kicker: 'Strategic Partners',
  title: 'Build a platform together.',
  description: 'For brand collaborations, knowledge programmes, sponsorships, and long-form engagements.',
  subject: 'Partnership opportunity',
  message: 'Describe the partnership ambition, timeline, audience, markets, and the type of impact you want to create.',
  fields: [{
    id: 'partnership-name',
    label: 'Name',
    name: 'name',
    type: 'text',
    autoComplete: 'name',
    placeholder: 'Your full name'
  }, {
    id: 'partnership-email',
    label: 'Email',
    name: 'email',
    type: 'email',
    autoComplete: 'email',
    placeholder: 'you@organisation.com'
  }, {
    id: 'partnership-organisation',
    label: 'Organisation',
    name: 'organisation',
    type: 'text',
    placeholder: 'Company, foundation, or programme'
  }, {
    id: 'partnership-timeline',
    label: 'Timeline',
    name: 'timeline',
    type: 'text',
    placeholder: 'Launch window or preferred dates'
  }, {
    id: 'partnership-message',
    label: 'Partnership Ambition',
    name: 'message',
    type: 'textarea',
    placeholder: 'Audience, markets, objectives, and the type of impact you want to create.',
    wide: true,
    rows: 6
  }]
}];

const tickerItems = [{
  id: 'brief',
  label: 'BRIEF THE BUREAU'
}, {
  id: 'private',
  label: 'PRIVATE CONSULTATION'
}, {
  id: 'johannesburg',
  label: 'JOHANNESBURG — GLOBAL'
}, {
  id: 'strategic',
  label: 'STRATEGIC ENGAGEMENT'
}, {
  id: 'booking',
  label: 'SPEAKER BOOKING'
}, {
  id: 'voices',
  label: 'RIGHT VOICE. RIGHT ROOM.'
}, {
  id: 'brief-repeat',
  label: 'BRIEF THE BUREAU'
}, {
  id: 'private-repeat',
  label: 'PRIVATE CONSULTATION'
}, {
  id: 'johannesburg-repeat',
  label: 'JOHANNESBURG — GLOBAL'
}, {
  id: 'strategic-repeat',
  label: 'STRATEGIC ENGAGEMENT'
}, {
  id: 'booking-repeat',
  label: 'SPEAKER BOOKING'
}, {
  id: 'voices-repeat',
  label: 'RIGHT VOICE. RIGHT ROOM.'
}];

const reveal = {
  hidden: {
    opacity: 0,
    y: 28
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    }
  }
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

export const TSFContact = () => {
  const [activeSubmitted, setActiveSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('general');
  const [displayedTab, setDisplayedTab] = useState('general');
  const [tabTransition, setTabTransition] = useState<'idle' | 'exiting' | 'entering'>('idle');
  const tabTransitionTimeout = useRef<number | null>(null);
  const activeContact = contactTabs.find(tab => tab.id === activeTab) ?? contactTabs[0];
  const displayedContact = contactTabs.find(tab => tab.id === displayedTab) ?? contactTabs[0];

  // Contact Enquiry Form submission states
  const [enquiryData, setEnquiryData] = useState({ name: '', email: '', message: '', outlet: '', deadline: '', organisation: '', timeline: '', mailingList: '' }); // Set empty default to avoid pre-selection
  const [enquirySubmitting, setEnquirySubmitting] = useState(false);
  const [utmParams, setUtmParams] = useState({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: '',
    gclid: ''
  });

  // Automatically parse UTM parameters from search URL on component mount
  useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      setUtmParams({
        utm_source: params.get('utm_source') || '',
        utm_medium: params.get('utm_medium') || '',
        utm_campaign: params.get('utm_campaign') || '',
        utm_term: params.get('utm_term') || '',
        utm_content: params.get('utm_content') || '',
        gclid: params.get('gclid') || ''
      });
    }
  });

  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey) return;

    if (document.getElementById("recaptcha-script")) return;

    const script = document.createElement("script");
    script.id = "recaptcha-script";
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const el = document.getElementById("recaptcha-script");
      if (el) el.remove();
      const badge = document.querySelector(".grecaptcha-badge");
      if (badge) badge.remove();
    };
  }, []);

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) {
      return;
    }
    if (tabTransitionTimeout.current !== null) {
      window.clearTimeout(tabTransitionTimeout.current);
    }
    setActiveTab(tabId);
    setActiveSubmitted(false);
    setTabTransition('exiting');
    tabTransitionTimeout.current = window.setTimeout(() => {
      setDisplayedTab(tabId);
      setTabTransition('entering');
      tabTransitionTimeout.current = window.setTimeout(() => {
        setTabTransition('idle');
        tabTransitionTimeout.current = null;
      }, 180);
    }, 110);
  };

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySubmitting(true);
    try {
      let formId = 3;
      let payloadValues: Record<string, string> = {};

      if (activeTab === 'media') {
        formId = 5; // Media Requests form ID
        payloadValues = {
          "input_1": enquiryData.name,         // Full Name ID: 1
          "input_3": enquiryData.email,        // Email ID: 3
          "input_4": enquiryData.outlet,       // Publication / Outlet ID: 4
          "input_5": enquiryData.deadline,     // Deadline ID: 5
          "input_6": enquiryData.message,      // Request Details ID: 6
          // Include Campaign UTM fields silently
          "input_18": utmParams.utm_source,
          "input_19": utmParams.utm_medium,
          "input_20": utmParams.utm_campaign,
          "input_21": utmParams.utm_term,
          "input_22": utmParams.utm_content,
          "input_23": utmParams.gclid
        };
      } else if (activeTab === 'partnerships') {
        formId = 6; // Strategic Partnerships form ID
        payloadValues = {
          "input_1": enquiryData.name,         // Full Name ID: 1
          "input_3": enquiryData.email,        // Email ID: 3
          "input_4": enquiryData.organisation, // Organisation ID: 4
          "input_7": enquiryData.timeline,     // Timeline ID: 7
          "input_6": enquiryData.message,      // Partnership Ambition ID: 6
          // Include Campaign UTM fields silently
          "input_18": utmParams.utm_source,
          "input_19": utmParams.utm_medium,
          "input_20": utmParams.utm_campaign,
          "input_21": utmParams.utm_term,
          "input_22": utmParams.utm_content,
          "input_23": utmParams.gclid
        };
      } else {
        // General tab falls back to Form ID: 3 (Website Enquiry Form)
        payloadValues = {
          "input_24": enquiryData.name,        // Full Name ID: 24
          "input_14": enquiryData.email,       // Email ID: 14
          "input_17": enquiryData.message,     // Message ID: 17
          "input_25": "",                      // Untitled ID: 25
          // Include Campaign UTM fields silently
          "input_18": utmParams.utm_source,
          "input_19": utmParams.utm_medium,
          "input_20": utmParams.utm_campaign,
          "input_21": utmParams.utm_term,
          "input_22": utmParams.utm_content,
          "input_23": utmParams.gclid
        };
      }

      let recaptchaToken = "";
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
      if (siteKey && typeof window !== "undefined" && (window as any).grecaptcha) {
        try {
          await new Promise<void>((resolve, reject) => {
            (window as any).grecaptcha.ready(async () => {
              try {
                recaptchaToken = await (window as any).grecaptcha.execute(siteKey, { action: 'submit_enquiry' });
                resolve();
              } catch (err) {
                reject(err);
              }
            });
          });
        } catch (e) {
          console.error("reCAPTCHA execution failed:", e);
        }
      }

      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formId,
          recaptchaToken,
          values: payloadValues
        })
      });
      if (response.ok) {
        setActiveSubmitted(true);
      } else {
        const errData = await response.json().catch(() => ({}));
        console.error("Failed to submit enquiry form", response.status, errData);
      }
    } catch (err) {
      console.error("Enquiry form submission error", err);
    } finally {
      setEnquirySubmitting(false);
    }
  };

  // Newsletter Gravity Form submission state
  const [newsletterData, setNewsletterData] = useState({ name: '', email: '', company: '', designation: '' });
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSubmitting(true);
    try {
      let recaptchaToken = "";
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
      if (siteKey && typeof window !== "undefined" && (window as any).grecaptcha) {
        try {
          await new Promise<void>((resolve, reject) => {
            (window as any).grecaptcha.ready(async () => {
              try {
                recaptchaToken = await (window as any).grecaptcha.execute(siteKey, { action: 'submit_newsletter' });
                resolve();
              } catch (err) {
                reject(err);
              }
            });
          });
        } catch (e) {
          console.error("reCAPTCHA execution failed:", e);
        }
      }

      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formId: 2,
          recaptchaToken,
          values: {
            "17": newsletterData.name,
            "14": newsletterData.email,
            "15": newsletterData.company,
            "16": newsletterData.designation
          }
        })
      });
      if (response.ok) {
        setNewsletterSubmitted(true);
      } else {
        const errData = await response.json().catch(() => ({}));
        console.error("Failed to register newsletter subscriber", response.status, errData);
      }
    } catch (err) {
      console.error("Newsletter submission error", err);
    } finally {
      setNewsletterSubmitting(false);
    }
  };

  return <main className="tsf-page font-[Kontora,sans-serif] selection:bg-[#e30e04] selection:text-white bg-[#212121] text-[#F8F7F5]">
      
      {/* Redesigned Hero complying with standard design limits */}
      <section id="top" className="relative min-h-screen w-full overflow-hidden pt-20 pb-28 md:pt-24 lg:pb-44 bg-[#000000] px-6 md:px-16">
        <div className="absolute inset-0 z-0 bg-[#111111]" aria-hidden="true">
          <img src="/hero_backgrounds/contact-us.jpg" alt="" className="absolute inset-0 h-full w-full object-cover object-top opacity-30" />
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.38)_46%,rgba(0,0,0,0.3)_100%)]" />
        </div>
        <VerticalBorderLines isDark={true} />
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] max-w-[1440px] flex-col justify-center px-6 md:px-16">
          <motion.div initial="hidden" animate="visible" variants={reveal}>
            <SectionTag>CONTACT US</SectionTag>
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" transition={{ delay: 0.12 }} variants={reveal} className="text-[clamp(3.5rem,11vw,6.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.055em] text-[#ffffff] drop-shadow-[0_8px_34px_rgba(0,0,0,0.38)] mt-6">
            <span>Institutional Access.</span>
          </motion.h1>
          <motion.div aria-hidden="true" initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ delay: 0.8, duration: 0.74 }} className="mt-5 h-[3px] w-28 origin-left bg-[#e30e04] md:mt-7 md:w-40" />
          <div className="mt-8 flex max-w-[720px] flex-col gap-3">
            <motion.h2 initial="hidden" animate="visible" transition={{ delay: 0.18 }} variants={reveal} className="text-xl font-bold uppercase tracking-wider text-[#e30e04]">
              General Enquiries, Operations &amp; Global Logistics.
            </motion.h2>
            <motion.p initial="hidden" animate="visible" transition={{ delay: 0.24 }} variants={reveal} className="text-[15px] font-normal leading-[1.6] text-[#ffffff]/80 drop-shadow-[0_6px_22px_rgba(0,0,0,0.45)] md:text-[16px] md:leading-[1.65]">
              For strategic talent recommendations or to initiate a booking, please utilize our dedicated Briefing or Booking gateways. For media inquiries, operational support, or general institutional correspondence, connect with our headquarters. All communications are handled with absolute corporate discretion.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Cloned Component body: Enquiry selection pills bar */}
      <section className="filter-bar contact-method-bar" aria-label="Contact method filters">
        <div className="filter-inner px-6 md:px-16">
          <span className="filter-label">Enquiry type</span>
          <div className="filter-pills" role="tablist" aria-label="Choose contact method">
            {contactTabs.map(tab => (
              <button key={tab.id} type="button" role="tab" aria-selected={activeTab === tab.id} className={activeTab === tab.id ? 'selected' : ''} onClick={() => handleTabChange(tab.id)}>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
          <div className="contact-method-bar__summary" aria-live="polite">
            <span>{activeContact.kicker}</span>
            <strong>{activeContact.title}</strong>
          </div>
        </div>
      </section>

      {/* Cloned Component body: Tabbed contact form & details panel */}
      <section className="featured-section contact-featured px-6 md:px-16" aria-labelledby="featured-contact-heading">
        <VerticalBorderLines isDark={true} />
        <div className="rule-mark" aria-hidden="true"><span /></div>
        <motion.article initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.2
        }} variants={reveal} className="featured-card contact-featured__card max-w-[1440px] mx-auto z-10 relative">
          <div className="featured-photo contact-tabbed-panel">
            <form key={displayedContact.id} className={`tabbed-contact-form tabbed-contact-form--${tabTransition}`} aria-label={`${displayedContact.label} form`} onSubmit={handleEnquirySubmit}>
              <div className="contact-form-heading tabbed-contact-form__heading">
                <span className="text-[10px] font-extrabold tracking-[0.16em] text-[#e30e04] block mb-2">{displayedContact.kicker.toUpperCase()}</span>
                <p className="text-[clamp(1.35rem,2.4vw,2.2rem)] font-black uppercase leading-[0.96] tracking-[-0.055em] text-[#F8F7F5]">{displayedContact.title}</p>
              </div>
              <p className="tabbed-contact-form__intro text-white/70 text-sm leading-6 mb-6">{displayedContact.description}</p>
              <div className="contact-form__fields contact-form__fields--refined tabbed-contact-form__fields">
                {displayedContact.fields.map(field => {
                  const getFieldValue = () => {
                    return (enquiryData as any)[field.name] || '';
                  };

                  const handleValueChange = (val: string) => {
                    setEnquiryData(prev => ({
                      ...prev,
                      [field.name]: val
                    }));
                  };

                  return (
                    <label key={field.id} className={field.wide ? 'contact-line-field contact-line-field--wide' : 'contact-line-field'}>
                      <span className="contact-line-field__label">{field.label}</span>
                      {field.type === 'textarea' ? (
                        <textarea required name={field.name} rows={field.rows ?? 5} value={getFieldValue()} onChange={e => handleValueChange(e.target.value)} placeholder={field.placeholder} />
                      ) : (
                        <input required name={field.name} type={field.type} autoComplete={field.autoComplete} value={getFieldValue()} onChange={e => handleValueChange(e.target.value)} placeholder={field.placeholder} />
                      )}
                    </label>
                  );
                })}
              </div>
              

              {activeSubmitted ? (
                <p role="status" className="contact-redesign__status tabbed-contact-form__status mt-6">
                  <span>Message received. A The Speakers Firm consultant will contact you within one business day.</span>
                </p>
              ) : (
                <button type="submit" disabled={enquirySubmitting} className="red-button contact-redesign__submit tabbed-contact-form__submit mt-6 disabled:opacity-50">
                  <span>{enquirySubmitting ? "Submitting..." : `Submit ${displayedContact.label}`}</span>
                  <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
                </button>
              )}
            </form>
          </div>
          
          <div className="featured-copy contact-featured__copy">
            <div className="date-large contact-response-stat"><strong>&lt; 24</strong><span>HRS<br />RESPONSE</span></div>
            <span className="contact-featured__location"><MapPin size={14} className="text-[#e30e04]" /><span>Johannesburg base — global speaker network</span></span>
            <h2 id="featured-contact-heading" className="text-[clamp(1.9rem,3.8vw,4rem)] font-black uppercase tracking-[-0.065em] text-[#F8F7F5] mt-6">Speak to a consultant.</h2>
            <p className="mt-4">{activeContact.description}</p>
            <dl className="contact-methods contact-methods--featured">
              {contactMethods.map(item => (
                <div key={item.id} className="contact-method">
                  <dt className="contact-method__label">
                    <span className="contact-method__icon" aria-hidden="true">
                      {item.icon === 'phone' ? <Phone size={18} strokeWidth={1.8} /> : null}
                      {item.icon === 'mail' ? <Mail size={18} strokeWidth={1.8} /> : null}
                      {item.icon === 'location' ? <MapPin size={18} strokeWidth={1.8} /> : null}
                    </span>
                    <span>{item.label}</span>
                  </dt>
                  <dd className="contact-method__value">
                    {item.href ? (
                      <a href={item.href} className="contact-method__link">
                        <span>{item.value}</span>
                      </a>
                    ) : (
                      <span>
                        <span>{item.value}</span>
                        <span className="contact-method__detail"> — {item.detail}</span>
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="social-strip" aria-label="Social links">
              {socialLinks.map(item => (
                <a key={item.id} href={item.href} target="_blank" rel="noreferrer" className="social-strip__link">
                  <span className="social-strip__icon" aria-hidden="true">
                    {item.icon === 'linkedin' ? <Linkedin size={17} strokeWidth={1.8} /> : null}
                    {item.icon === 'instagram' ? <Instagram size={17} strokeWidth={1.8} /> : null}
                  </span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.article>
      </section>

      {/* Cloned Component body: Advisory side note & Google Maps */}
      <section id="contact" className="events-section contact-redesign px-6 md:px-16" aria-label="Contact form and advisory details">
        <VerticalBorderLines isDark={true} />
        <div className="contact-redesign__layout max-w-[1440px] mx-auto z-10 relative">
          <motion.aside initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.18
          }} variants={reveal} className="contact-redesign__aside w-full" aria-labelledby="contact-aside-heading">
            <div className="contact-quote">
              <span className="inline-flex border-l-4 border-[#e30e04] bg-[#2C2C2C] px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-[#F8F7F5]">CONSULTATION NOTE</span>
              <blockquote>
                <p className="text-[clamp(1.35rem,3vw,2.55rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.055em] text-[#F8F7F5] my-6">
                  “The most powerful engagements begin with a clear room: who is present, what must shift, and what the audience should carry out.”
                </p>
              </blockquote>
              <p id="contact-aside-heading" className="border-l-3 border-[#e30e04] pl-3 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#B0ADA8]">
                The Speakers Firm Advisory Team
              </p>
            </div>
            <figure className="location-card contact-location-card">
              <iframe title="Map showing The Speakers Firm Office" src="https://www.google.com/maps?q=364%20Pine%20Avenue%2C%20Ferndale%2C%20Randburg%2C%20South%20Africa&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="location-card__map" />
              <figcaption className="location-card__caption">
                <span>364 Pine Avenue, Ferndale, Randburg, 2196</span>
              </figcaption>
            </figure>
          </motion.aside>
        </div>
      </section>

      {/* Cloned Component body: Ticker desk priorities strip */}
      <section className="ticker-section" aria-label="Contact priorities">
        <VerticalBorderLines isDark={true} />
        <div className="z-10 relative">
          <div className="ticker-label px-6 md:px-16 text-[10px] font-bold tracking-[0.18em] text-[#B0ADA8] uppercase mb-4 max-w-[1440px] mx-auto">CONTACT DESK</div>
          <div className="ticker-window">
            <div className="ticker-track">
              {tickerItems.map((item, idx) => (
                <span className="ticker-item" key={`${item.id}-${idx}`}>
                  <span>{item.label}</span>
                  <b aria-hidden="true" className="text-[#e30e04]">•</b>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cloned Component body: Newsletter signup module */}
      <section className="newsletter contact-newsletter px-6 md:px-16 py-14 md:py-20 xl:py-24" aria-labelledby="newsletter-heading">
        <VerticalBorderLines isDark={true} />
        <div className="max-w-[1440px] mx-auto z-10 relative flex flex-col md:flex-row md:justify-between md:items-end gap-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.25
          }} variants={reveal} className="newsletter-copy flex-1">
            <span className="inline-flex border-l-4 border-[#e30e04] bg-[#2C2C2C] px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-[#F8F7F5] mb-4">SUBSCRIBE TO OUR NEWSLETTER</span>
            <h2 id="newsletter-heading" className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase tracking-tight text-white leading-[0.95]">
              INSIGHTFUL VOICES.<br />
              STRATEGIC INTELLIGENCE.<br />
              EXPONENTIAL GROWTH.
            </h2>
            <p className="mt-6 text-sm text-[#AFB0B0] leading-relaxed max-w-xl">
              Stay connected to the influential speakers, bold ideas and emerging trends shaping leadership, business, government, and society.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.25
          }} variants={reveal} className="newsletter-form flex-1 w-full">
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Subscribe for exclusive access to featured speakers, executive insights, industry intelligence, upcoming engagements, and high-impact opportunities from The Speakers Firm™.
            </p>
            {newsletterSubmitted ? (
              <div className="rounded-2xl border border-white/[0.08] bg-[#2C2C2C]/30 p-6 text-center text-white">
                <p className="font-serif text-[20px] italic">Thank you for subscribing. You have been added to our network.</p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="mt-6 flex flex-col gap-4">
                <input type="hidden" name="form_id" value="2" />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/50">Full Name*</span>
                    <input type="text" name="input_17" value={newsletterData.name} onChange={e => setNewsletterData(prev => ({ ...prev, name: e.target.value }))} placeholder="First and last name" required className="border border-white/20 px-4 py-3 rounded-full text-sm bg-transparent outline-none focus:border-[#e30e04] text-white transition-colors" />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/50">Email Address*</span>
                    <input type="email" name="input_14" value={newsletterData.email} onChange={e => setNewsletterData(prev => ({ ...prev, email: e.target.value }))} placeholder="Corporate email" required className="border border-white/20 px-4 py-3 rounded-full text-sm bg-transparent outline-none focus:border-[#e30e04] text-white transition-colors" />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/50">Company*</span>
                    <input type="text" name="input_15" value={newsletterData.company} onChange={e => setNewsletterData(prev => ({ ...prev, company: e.target.value }))} placeholder="Company/organisation" required className="border border-white/20 px-4 py-3 rounded-full text-sm bg-transparent outline-none focus:border-[#e30e04] text-white transition-colors" />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/50">Designation*</span>
                    <input type="text" name="input_16" value={newsletterData.designation} onChange={e => setNewsletterData(prev => ({ ...prev, designation: e.target.value }))} placeholder="Corporate job title" required className="border border-white/20 px-4 py-3 rounded-full text-sm bg-transparent outline-none focus:border-[#e30e04] text-white transition-colors" />
                  </label>
                </div>
                <motion.button type="submit" disabled={newsletterSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-2 inline-flex items-center self-start" style={{ borderColor: 'rgba(255, 255, 255, 0.18)' }}>
                  <span className="flex items-center justify-center gap-3 rounded-full bg-[#e30e04] px-7 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-white hover:bg-[#c00b03] transition-colors disabled:opacity-50">
                    <span>{newsletterSubmitting ? "Subscribing..." : "SUBSCRIBE NOW"}</span>
                    <ArrowRight size={16} />
                  </span>
                </motion.button>
              </form>
            )}
            <small className="block mt-4 text-[#B0ADA8] text-[10px]">Stay informed. Lead decisively. Drive exponential growth.</small>
          </motion.div>
        </div>
      </section>
    </main>;
};
