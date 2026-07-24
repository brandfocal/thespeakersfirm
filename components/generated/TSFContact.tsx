"use client";

import { useRef, useState } from 'react';
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
  id: 'speaker',
  label: 'Book A Speaker',
  kicker: 'Speaker Booking',
  title: 'Match the voice to the moment.',
  description: 'For keynotes, MCs, moderators, facilitators, and influential talent procurement.',
  subject: 'Speaker booking brief',
  message: 'Tell us the event format, audience size, required speaker profile, topic territory, budget range, and timing.',
  fields: [{
    id: 'speaker-name',
    label: 'Name',
    name: 'name',
    type: 'text',
    autoComplete: 'name',
    placeholder: 'Your full name'
  }, {
    id: 'speaker-email',
    label: 'Email',
    name: 'email',
    type: 'email',
    autoComplete: 'email',
    placeholder: 'you@organisation.com'
  }, {
    id: 'speaker-date',
    label: 'Event Date',
    name: 'eventDate',
    type: 'date',
    placeholder: 'Select the event date'
  }, {
    id: 'speaker-budget',
    label: 'Budget',
    name: 'budget',
    type: 'text',
    placeholder: 'Preferred budget range'
  }, {
    id: 'speaker-preference',
    label: 'Speaker Preference',
    name: 'speakerPreference',
    type: 'text',
    placeholder: 'Named speaker, topic, or profile preference',
    wide: true
  }, {
    id: 'speaker-message',
    label: 'Event Context',
    name: 'message',
    type: 'textarea',
    placeholder: 'Audience size, format, objectives, and timing.',
    wide: true,
    rows: 5
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

  return <main className="tsf-page font-[Kontora,sans-serif] selection:bg-[#e30e04] selection:text-white bg-[#212121] text-[#F8F7F5]">
      
      {/* Redesigned Hero complying with standard design limits */}
      <section id="top" className="relative min-h-screen w-full overflow-hidden pt-20 pb-28 md:pt-24 lg:pb-44 bg-[#000000] px-6 md:px-16">
        <div className="absolute inset-0 z-0 bg-[#111111]" aria-hidden="true">
          <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop" alt="" className="absolute inset-0 h-full w-full object-cover object-center opacity-30" />
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.38)_46%,rgba(0,0,0,0.3)_100%)]" />
        </div>
        <VerticalBorderLines isDark={true} />
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] max-w-[1440px] flex-col justify-center px-6 md:px-16">
          <motion.div initial="hidden" animate="visible" variants={reveal}>
            <SectionTag>CONTACT US</SectionTag>
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" transition={{ delay: 0.12 }} variants={reveal} className="text-[clamp(3.5rem,11vw,6.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.055em] text-[#ffffff] drop-shadow-[0_8px_34px_rgba(0,0,0,0.38)] mt-6">
            <span>BRIEF THE</span><br />
            <span className="text-[#e30e04]">BUREAU.</span>
          </motion.h1>
          <motion.div aria-hidden="true" initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ delay: 0.8, duration: 0.74 }} className="mt-5 h-[3px] w-28 origin-left bg-[#e30e04] md:mt-7 md:w-40" />
          <div className="mt-8 flex max-w-[620px] flex-col gap-3">
            <motion.p initial="hidden" animate="visible" transition={{ delay: 0.24 }} variants={reveal} className="text-[15px] font-normal leading-[1.6] text-[#ffffff]/80 drop-shadow-[0_6px_22px_rgba(0,0,0,0.45)] md:text-[16px] md:leading-[1.65]">
              We place the right voice in the right room — strategically selected, professionally delivered.
            </motion.p>
            <motion.div initial="hidden" animate="visible" transition={{ delay: 0.36 }} variants={reveal} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 mt-4">
              <motion.a href="#contact" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center" style={{ borderColor: 'rgba(255, 255, 255, 0.18)' }}>
                <span className="flex flex-1 items-center justify-center gap-3 rounded-full bg-[#000000] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-white border border-white/20">
                  <span>Brief the Bureau</span>
                  <ArrowRight size={16} />
                </span>
              </motion.a>
              <a href="#speakers" className="border border-white/25 hover:border-white/50 backdrop-blur-sm px-6 py-3 rounded-full text-[12px] font-bold uppercase tracking-[0.1em] text-white flex items-center justify-center">
                <span>Explore Speakers</span>
              </a>
            </motion.div>
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
            <form key={displayedContact.id} className={`tabbed-contact-form tabbed-contact-form--${tabTransition}`} aria-label={`${displayedContact.label} form`} onSubmit={event => {
              event.preventDefault();
              setActiveSubmitted(true);
            }}>
              <div className="contact-form-heading tabbed-contact-form__heading">
                <span className="text-[10px] font-extrabold tracking-[0.16em] text-[#e30e04] block mb-2">{displayedContact.kicker.toUpperCase()}</span>
                <p className="text-[clamp(1.35rem,2.4vw,2.2rem)] font-black uppercase leading-[0.96] tracking-[-0.055em] text-[#F8F7F5]">{displayedContact.title}</p>
              </div>
              <p className="tabbed-contact-form__intro text-white/70 text-sm leading-6 mb-6">{displayedContact.description}</p>
              <div className="contact-form__fields contact-form__fields--refined tabbed-contact-form__fields">
                {displayedContact.fields.map(field => (
                  <label key={field.id} className={field.wide ? 'contact-line-field contact-line-field--wide' : 'contact-line-field'}>
                    <span className="contact-line-field__label">{field.label}</span>
                    {field.type === 'textarea' ? (
                      <textarea required name={field.name} rows={field.rows ?? 5} placeholder={field.placeholder} />
                    ) : (
                      <input required name={field.name} type={field.type} autoComplete={field.autoComplete} placeholder={field.placeholder} />
                    )}
                  </label>
                ))}
              </div>
              {activeSubmitted ? (
                <p role="status" className="contact-redesign__status tabbed-contact-form__status mt-6">
                  <span>Message received. A The Speakers Firm consultant will contact you within one business day.</span>
                </p>
              ) : (
                <button type="submit" className="red-button contact-redesign__submit tabbed-contact-form__submit mt-6">
                  <span>Submit {displayedContact.label}</span>
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
            <div className="feature-actions">
              <a href="#contact" className="red-button"><span>Submit a Brief</span><ArrowRight size={16} aria-hidden="true" /></a>
              <a href="#speakers" className="ghost-button"><span>Explore Speakers</span></a>
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
            <span className="inline-flex border-l-4 border-[#e30e04] bg-[#2C2C2C] px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-[#F8F7F5] mb-4">STAY INFORMED</span>
            <h2 id="newsletter-heading" className="mt-4">Stay in the<br /><em>conversation.</em></h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.25
          }} variants={reveal} className="newsletter-form flex-1 w-full">
            <p>Receive useful ideas, speaker updates, and invitation-only moments from The Speakers Firm.</p>
            <form onSubmit={event => event.preventDefault()}>
              <label className="email-pill">
                <Mail size={17} aria-hidden="true" />
                <input type="email" placeholder="Your email address" aria-label="Your email address" required className="bg-transparent border-none outline-none pl-3 text-white" />
                <button type="submit" className="mt-4 md:mt-0"><span>Subscribe</span><ArrowRight size={15} aria-hidden="true" /></button>
              </label>
            </form>
            <small className="block mt-4 text-[#B0ADA8] text-[10px]">By subscribing, you agree to receive updates from The Speakers Firm. Unsubscribe anytime.</small>
          </motion.div>
        </div>
      </section>
    </main>;
};
