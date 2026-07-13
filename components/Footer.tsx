import * as React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const COLORS = {
  red: '#e30e04',
};

const FOOTER_NAV_LINKS = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'faculty', label: 'Faculty', href: '/#faculty' },
  { id: 'methodology', label: 'Methodology', href: '/#methodology' },
  { id: 'executive-dialogues', label: 'Executive Dialogues', href: '/#dialogues' },
  { id: 'brief-bureau', label: 'Brief the Bureau', href: '/#brief-us' },
  { id: 'what-sets-us-apart', label: 'What Sets Us Apart', href: '/#methodology' },
  { id: 'why-engagements-stand-apart', label: 'Why Our Engagements Stand Apart', href: '/#methodology' },
  { id: 'booking-process', label: 'Our Booking Process Is Built for Impact', href: '/#brief-us' },
  { id: 'deployment-formats', label: 'Deployment Formats', href: '/#brief-us' },
  { id: 'join', label: 'Join The Speakers Firm', href: '/#brief-us' }
];

export function Footer() {
  return (
    <footer className="relative w-full border-t bg-[#000000] border-[#000000] text-[#ffffff]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 pt-20 pb-0 sm:pt-24 md:pt-28 relative z-10">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8 pb-10 md:pb-12">
          
          {/* Logo & Headline */}
          <div className="md:col-span-5 space-y-4">
            <img 
              src="/the-speakers-firm-logo.png" 
              alt="The Speakers Firm Logo" 
              className="h-16 w-auto object-contain brightness-0 invert"
            />
            <p className="max-w-[360px] text-[15px] font-normal leading-[1.65] text-[#F5F5F0]">
              Deploying Africa&apos;s most authoritative voices.
            </p>
          </div>

          {/* Navigation */}
          <nav className="md:col-span-3" aria-label="Footer navigation">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#ffffff]">
              Navigate
            </h3>
            <div className="mt-5 flex flex-col items-start gap-3">
              {FOOTER_NAV_LINKS.map(item => (
                <a 
                  key={`footer-${item.id}`} 
                  href={item.href} 
                  className="text-[15px] font-bold uppercase tracking-[0.08em] transition-colors duration-300 hover:text-[#e30e04]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Contact Details */}
          <div className="md:col-span-4 md:text-right flex flex-col gap-3 md:items-end">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#ffffff] self-start md:self-auto">
              Contact
            </h3>
            <div className="mt-2 flex flex-col items-start gap-3 md:items-end w-full">
              <a href="mailto:info@thespeakersfirm.co.za" className="text-[15px] font-bold transition-colors duration-300 hover:text-[#e30e04]">
                info@thespeakersfirm.co.za
              </a>
              <a href="mailto:booking@thespeakersfirm.co.za" className="text-[15px] font-bold transition-colors duration-300 hover:text-[#e30e04]">
                booking@thespeakersfirm.co.za
              </a>
              <a href="tel:+27114827256" className="text-[14px] leading-[1.6] transition-colors duration-300 hover:text-white">
                +27(0) 11 482 7256/7257
              </a>
              <p className="text-[14px] leading-[1.6]">
                364 Pine Avenue, Ferndale, Randburg, 2196
              </p>
              <p className="text-[14px] leading-[1.6]">
                Johannesburg, South Africa (Operating Globally)
              </p>

              {/* Socials */}
              <div className="mt-3 flex items-center gap-4 md:justify-end" aria-label="Social media links">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#ffffff] transition-colors duration-300 hover:text-[#e30e04]">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.42a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.03H3.54V8.98H7.1v11.47Z" />
                  </svg>
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-[#ffffff] transition-colors duration-300 hover:text-[#e30e04]">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M18.9 2.9h3.05l-6.66 7.61 7.84 10.59h-6.14l-4.81-6.4-5.5 6.4H3.62l7.13-8.29L3.23 2.9h6.3l4.35 5.87 5.02-5.87Zm-1.07 16.34h1.69L8.61 4.66H6.8l11.03 14.58Z" />
                  </svg>
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#ffffff] transition-colors duration-300 hover:text-[#e30e04]">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M14.02 21.5v-8.65h2.9l.43-3.37h-3.33V7.33c0-.98.27-1.64 1.67-1.64h1.78V2.67c-.31-.04-1.36-.13-2.59-.13-2.56 0-4.32 1.56-4.32 4.43v2.51h-2.9v3.37h2.9v8.65h3.46Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mx-[-24px] mt-20 border-t border-[#000000] px-6 py-6 md:mx-[-64px] md:px-16 bg-[#000000]">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#ffffff]">
            Copyright &copy; {new Date().getFullYear()} The Speakers Firm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
