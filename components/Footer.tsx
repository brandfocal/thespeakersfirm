import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const COLORS = {
  red: '#e30e04',
};

const FOOTER_NAV_LINKS = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'categories', label: 'Categories', href: '/categories' },
  { id: 'faculty', label: 'Faculty', href: '/#faculty' },
  { id: 'methodology', label: 'Methodology', href: '/#methodology' },
  { id: 'executive-dialogues', label: 'Executive Dialogues', href: '/executive-dialogues' },
  { id: 'upcoming-events', label: 'Upcoming Events', href: '/upcoming-events' },
  { id: 'gallery', label: 'Gallery', href: '/gallery' },
  { id: 'media', label: 'Media', href: '/media' },
  { id: 'brief-bureau', label: 'Brief the Bureau', href: '/contact' },
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
                <Link 
                  key={`footer-${item.id}`} 
                  href={item.href} 
                  className="text-[15px] font-bold uppercase tracking-[0.08em] transition-colors duration-300 hover:text-[#e30e04]"
                >
                  {item.label}
                </Link>
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
                <a href="https://www.facebook.com/TheSpeakersFirm" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#ffffff] transition-colors duration-300 hover:text-[#e30e04]">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M14.02 21.5v-8.65h2.9l.43-3.37h-3.33V7.33c0-.98.27-1.64 1.67-1.64h1.78V2.67c-.31-.04-1.36-.13-2.59-.13-2.56 0-4.32 1.56-4.32 4.43v2.51h-2.9v3.37h2.9v8.65h3.46Z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/thespeakersfirmza/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#ffffff] transition-colors duration-300 hover:text-[#e30e04]">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@thespeakersfirm_za" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-[#ffffff] transition-colors duration-300 hover:text-[#e30e04]">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.52-4.08-1.39v7.92c-.06 2.02-.78 4.09-2.31 5.4-1.87 1.66-4.57 2.12-6.96 1.51-2.47-.63-4.63-2.61-5.18-5.12-.7-3.15.54-6.7 3.25-8.39 1.63-1.02 3.63-1.35 5.51-.95v4.04c-1.31-.38-2.79-.18-3.92.59-1.15.78-1.74 2.22-1.52 3.6.2 1.25.99 2.37 2.11 2.87 1.21.55 2.68.42 3.77-.33.82-.57 1.25-1.54 1.22-2.54V0z"/>
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
