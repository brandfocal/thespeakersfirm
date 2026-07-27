import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram, Linkedin, Mail, MapPin, Menu, Phone, X } from 'lucide-react';
const navItems = [{
  label: 'Home',
  href: '#'
}, {
  label: 'About',
  href: '#about'
}, {
  label: 'Speakers',
  href: '#speakers'
}, {
  label: 'Contact',
  href: '#contact'
}];
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
  value: 'Johannesburg, South Africa',
  detail: 'Operating globally',
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
const contactTabs = [{
  id: 'general',
  label: 'General Enquiry',
  kicker: 'Open Brief',
  title: 'Start a considered conversation.',
  description: 'For introductions, availability questions, and general speaker guidance.',
  subject: 'General enquiry for The Speakers Firm',
  message: 'Share the event date, audience profile, strategic objective, preferred budget range, and any speaker themes you are considering.'
}, {
  id: 'speaker',
  label: 'Book A Speaker',
  kicker: 'Speaker Booking',
  title: 'Match the voice to the moment.',
  description: 'For keynotes, MCs, moderators, facilitators, and influential talent procurement.',
  subject: 'Speaker booking brief',
  message: 'Tell us the event format, audience size, required speaker profile, topic territory, budget range, and timing.'
}, {
  id: 'media',
  label: 'Media & Press',
  kicker: 'Press Desk',
  title: 'Route press requests directly.',
  description: 'For interviews, media comments, speaker bios, and production coordination.',
  subject: 'Media or press request',
  message: 'Share publication details, deadline, format, requested speaker, and the context for the feature.'
}, {
  id: 'partnerships',
  label: 'Partnerships',
  kicker: 'Strategic Partners',
  title: 'Build a platform together.',
  description: 'For brand collaborations, knowledge programmes, sponsorships, and long-form engagements.',
  subject: 'Partnership opportunity',
  message: 'Describe the partnership ambition, timeline, audience, markets, and the type of impact you want to create.'
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
      ease: [0.16, 1, 0.3, 1]
    }
  }
};
export const TSFContact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('general');
  const activeContact = contactTabs.find(tab => tab.id === activeTab) ?? contactTabs[0];
  return <main className="tsf-page">
      <header className="tsf-nav">
        <div className="tsf-nav__inner">
          <a href="#" className="tsf-nav__brand" aria-label="The Speakers Firm home">
            <span className="tsf-nav__mark">TSF</span>
            <span className="tsf-nav__divider" aria-hidden="true" />
            <span className="tsf-nav__name">The Speakers Firm</span>
          </a>
          <nav className="tsf-nav__links" aria-label="Primary navigation">
            {navItems.map(item => <a key={item.label} href={item.href} className={`tsf-nav__link${item.label === 'Contact' ? ' is-active' : ''}`}>
                <span>{item.label}</span>
              </a>)}
          </nav>
          <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="tsf-nav__toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen ? <nav className="tsf-nav__mobile" aria-label="Mobile navigation">
            {navItems.map(item => <a key={item.label} onClick={() => setMenuOpen(false)} href={item.href} className="tsf-nav__mobile-link">
                <span>{item.label}</span>
              </a>)}
          </nav> : null}
      </header>

      <section className="tsf-hero-full" aria-labelledby="contact-hero-heading">
        <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop" alt="" aria-hidden="true" className="tsf-hero-full__bg" />
        <div aria-hidden="true" className="tsf-hero-full__overlay tsf-hero-full__overlay--gradient" />
        <div aria-hidden="true" className="tsf-hero-full__overlay tsf-hero-full__overlay--vignette" />
        <div aria-hidden="true" className="tsf-hero-full__overlay tsf-hero-full__overlay--noise" />
        <span aria-hidden="true" className="tsf-hero-full__location">
          JOHANNESBURG - OPERATING GLOBALLY
        </span>
        <span aria-hidden="true" className="tsf-hero-full__border tsf-hero-full__border--left" />
        <span aria-hidden="true" className="tsf-hero-full__border tsf-hero-full__border--right" />
        <div className="tsf-hero-full__content">
          <h1 id="contact-hero-heading" className="tsf-hero-full__heading" aria-label="Brief The Bureau.">
            <span className="tsf-hero-full__line">
              <span className="tsf-hero-full__word">
                <span className="tsf-hero-full__word-inner tsf-hero-full__word-inner--one">BRIEF</span>
              </span>
            </span>
            <span className="tsf-hero-full__line">
              <span className="tsf-hero-full__word">
                <span className="tsf-hero-full__word-inner tsf-hero-full__word-inner--two">THE</span>
              </span>
              <span className="tsf-hero-full__word">
                <span className="tsf-hero-full__word-inner tsf-hero-full__word-inner--three tsf-hero-full__heading-accent">BUREAU.</span>
              </span>
            </span>
          </h1>
          <div aria-hidden="true" className="tsf-hero-full__rule" />
          <p className="tsf-hero-full__desc">We place the right voice in the right room — strategically selected, professionally delivered.</p>
          <div className="tsf-hero-full__ctas">
            <a href="#contact" className="tsf-hero-full__cta-primary">
              <span className="tsf-hero-full__cta-primary-inner">
                <span>Brief the Bureau</span>
                <ArrowRight aria-hidden="true" size={16} strokeWidth={1.8} />
              </span>
            </a>
            <a href="#speakers" className="tsf-hero-full__cta-secondary">
              <span>Explore Speakers</span>
            </a>
          </div>
        </div>
      </section>

      <section className="filter-bar contact-method-bar" aria-label="Contact method filters">
        <div className="filter-inner">
          <span className="filter-label">Enquiry type</span>
          <div className="filter-pills" role="tablist" aria-label="Choose contact method">
            {contactTabs.map(tab => <button key={tab.id} type="button" role="tab" aria-selected={activeTab === tab.id} className={activeTab === tab.id ? 'selected' : ''} onClick={() => setActiveTab(tab.id)}>
                <span>{tab.label}</span>
              </button>)}
          </div>
          <div className="contact-method-bar__summary" aria-live="polite">
            <span>{activeContact.kicker}</span>
            <strong>{activeContact.title}</strong>
          </div>
        </div>
      </section>

      <section className="featured-section contact-featured" aria-labelledby="featured-contact-heading">
        <div className="rule-mark" aria-hidden="true"><span /></div>
        <motion.article initial="hidden" whileInView="visible" viewport={{
        once: true,
        amount: 0.2
      }} variants={reveal} className="featured-card contact-featured__card">
          <div className="featured-photo">
            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400" alt="Professionals in a strategic consultation meeting" />
            <span className="featured-badge">Private Brief</span>
          </div>
          <div className="featured-copy contact-featured__copy">
            <div className="date-large contact-response-stat"><strong>&lt; 24</strong><span>HRS<br />RESPONSE</span></div>
            <span className="contact-featured__location"><MapPin size={14} /> <span>Johannesburg base — global speaker network</span></span>
            <h2 id="featured-contact-heading">Speak to a consultant.</h2>
            <p>{activeContact.description}</p>
            <dl className="contact-methods contact-methods--featured">
              {contactMethods.map(item => <div key={item.id} className="contact-method">
                  <dt className="contact-method__label">
                    <span className="contact-method__icon" aria-hidden="true">
                      {item.icon === 'phone' ? <Phone size={18} strokeWidth={1.8} /> : null}
                      {item.icon === 'mail' ? <Mail size={18} strokeWidth={1.8} /> : null}
                      {item.icon === 'location' ? <MapPin size={18} strokeWidth={1.8} /> : null}
                    </span>
                    <span>{item.label}</span>
                  </dt>
                  <dd className="contact-method__value">
                    {item.href ? <a href={item.href} className="contact-method__link">
                        <span>{item.value}</span>
                      </a> : <span>
                        <span>{item.value}</span>
                        <span className="contact-method__detail"> — {item.detail}</span>
                      </span>}
                  </dd>
                </div>)}
            </dl>
            <div className="social-strip" aria-label="Social links">
              {socialLinks.map(item => <a key={item.id} href={item.href} target="_blank" rel="noreferrer" className="social-strip__link">
                  <span className="social-strip__icon" aria-hidden="true">
                    {item.icon === 'linkedin' ? <Linkedin size={17} strokeWidth={1.8} /> : null}
                    {item.icon === 'instagram' ? <Instagram size={17} strokeWidth={1.8} /> : null}
                  </span>
                  <span>{item.label}</span>
                </a>)}
            </div>
            <div className="feature-actions">
              <a href="#contact-form" className="red-button"><span>Submit a Brief</span><ArrowRight size={16} aria-hidden="true" /></a>
              <a href="#speakers" className="ghost-button"><span>Explore Speakers</span></a>
            </div>
          </div>
        </motion.article>
      </section>

      <section id="contact" className="events-section contact-redesign" aria-labelledby="contact-body-heading">
        <div className="section-heading contact-section-heading">
          <div>
            <motion.div initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.25
          }} variants={reveal} className="section-tag light"><span>Contact The Speakers Firm</span></motion.div>
            <motion.h2 id="contact-body-heading" initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.25
          }} variants={reveal}>Tell us what the room needs.</motion.h2>
          </div>
          <motion.p initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.25
        }} variants={reveal}>{activeContact.description}</motion.p>
        </div>
        <div className="contact-redesign__layout">
          <motion.form id="contact-form" onSubmit={event => {
          event.preventDefault();
          setSubmitted(true);
        }} initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.18
        }} variants={reveal} className="contact-redesign__form" aria-label="Contact form">
            <div className="contact-form-heading">
              <span>{activeContact.kicker}</span>
              <p>{activeContact.title}</p>
            </div>
            <div className="contact-form__fields contact-form__fields--refined">
              <label className="contact-line-field">
                <span className="contact-line-field__label">Name</span>
                <input required name="name" type="text" autoComplete="name" placeholder="Your full name" />
              </label>
              <label className="contact-line-field">
                <span className="contact-line-field__label">Email</span>
                <input required name="email" type="email" autoComplete="email" placeholder="you@organisation.com" />
              </label>
              <label className="contact-line-field contact-line-field--wide">
                <span className="contact-line-field__label">Subject</span>
                <input required name="subject" type="text" placeholder={activeContact.subject} />
              </label>
              <label className="contact-line-field contact-line-field--wide">
                <span className="contact-line-field__label">Message</span>
                <textarea required name="message" rows={7} placeholder={activeContact.message} />
              </label>
            </div>
            {submitted ? <p role="status" className="contact-redesign__status">
                <span>Message received. A TSF consultant will contact you within one business day.</span>
              </p> : <button type="submit" className="red-button contact-redesign__submit">
                <span>Submit Enquiry</span>
                <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
              </button>}
          </motion.form>

          <motion.aside initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.18
        }} variants={reveal} className="contact-redesign__aside" aria-labelledby="contact-aside-heading">
            <div className="contact-quote">
              <span className="section-tag"><span>Consultation Note</span></span>
              <blockquote>
                <p>“The most powerful engagements begin with a clear room: who is present, what must shift, and what the audience should carry out.”</p>
              </blockquote>
              <p id="contact-aside-heading">TSF Advisory Team</p>
            </div>
            <figure className="location-card contact-location-card">
              <iframe title="Map showing Johannesburg, South Africa" src="https://www.google.com/maps?q=Johannesburg%2C%20South%20Africa&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="location-card__map" />
              <figcaption className="location-card__caption">
                <span>Johannesburg base. Global speaker network.</span>
              </figcaption>
            </figure>
          </motion.aside>
        </div>
      </section>

      <section className="ticker-section" aria-label="Contact priorities">
        <div className="ticker-label">Contact Desk</div>
        <div className="ticker-window">
          <div className="ticker-track">
            {tickerItems.map(item => <span className="ticker-item" key={item.id}>
                <span>{item.label}</span>
                <b aria-hidden="true">•</b>
              </span>)}
          </div>
        </div>
      </section>

      <section className="newsletter contact-newsletter" aria-labelledby="newsletter-heading">
        <motion.div initial="hidden" whileInView="visible" viewport={{
        once: true,
        amount: 0.25
      }} variants={reveal} className="newsletter-copy">
          <div className="section-tag light"><span>Stay informed</span></div>
          <h2 id="newsletter-heading">Stay in the<br /><em>conversation.</em></h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{
        once: true,
        amount: 0.25
      }} variants={reveal} className="newsletter-form">
          <p>Receive useful ideas, speaker updates, and invitation-only moments from The Speakers Firm.</p>
          <form onSubmit={event => event.preventDefault()}>
            <label className="email-pill">
              <Mail size={17} aria-hidden="true" />
              <input type="email" placeholder="Your email address" aria-label="Your email address" required />
              <button type="submit"><span>Subscribe</span><ArrowRight size={15} aria-hidden="true" /></button>
            </label>
          </form>
          <small>By subscribing, you agree to receive updates from The Speakers Firm. Unsubscribe anytime.</small>
        </motion.div>
      </section>

      <footer className="tsf-footer">
        <div className="footer-inner">
          <div className="footer-divider" />
          <div className="footer-bottom">
            <div className="footer-brand">
              <div className="footer-brand__mark">TSF</div>
              <p className="footer-brand__line">The right voice, strategically selected.</p>
            </div>
            <nav className="footer-links" aria-label="Footer navigation">
              {navItems.map(item => <a key={item.label} href={item.href} className="footer-links__item">
                  <span>{item.label}</span>
                </a>)}
            </nav>
            <p className="footer-copyright">© 2025 The Speakers Firm</p>
          </div>
        </div>
      </footer>
    </main>;
};