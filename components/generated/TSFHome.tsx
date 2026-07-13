"use client";

import * as React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { AnimatePresence, motion, useAnimationControls, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Menu, Play, Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BeyondThePodium } from './BeyondThePodium';
const COLORS = {
  black: '#000000',
  red: '#e30e04',
  gray: '#000000',
  silver: '#ffffff',
  silverAlt: '#ffffff',
  borderGray: '#ffffff',
  darkGray: '#000000',
  offWhite: '#ffffff'
};
const SOFT_RULE_COLOR = 'rgba(33, 33, 33, 0.14)';
const DARK_RULE_COLOR = 'rgba(248, 247, 245, 0.10)';
const NOISE_TEXTURE = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")";
const SECTION_TAG_CLASS = 'inline-flex items-center border border-l-[4px] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] shadow-none';
const SECTION_TAG_STYLE = {
  backgroundColor: COLORS.darkGray,
  borderColor: COLORS.darkGray,
  borderLeftColor: COLORS.red,
  color: COLORS.offWhite
};
const CLIENT_LABELS = [{
  id: 'absa',
  label: 'ABSA'
}, {
  id: 'standard-bank',
  label: 'STANDARD BANK'
}, {
  id: 'nedbank',
  label: 'NEDBANK'
}, {
  id: 'dti',
  label: 'DEPARTMENT OF TRADE & INDUSTRY'
}, {
  id: 'african-union',
  label: 'AFRICAN UNION'
}];
const CLIENT_MARQUEE_TOTAL_WIDTH = 1320;
const CLIENT_MARQUEE_ITEMS = [...CLIENT_LABELS.map(client => ({
  id: `first-${client.id}`,
  label: client.label
})), ...CLIENT_LABELS.map(client => ({
  id: `second-${client.id}`,
  label: client.label
})), ...CLIENT_LABELS.map(client => ({
  id: `third-${client.id}`,
  label: client.label
}))];
const COMPETENCIES = [{
  id: '01',
  title: 'Macroeconomics, Geopolitics & Policy Risk',
  body: 'Unpacking macroeconomic shifts, global policy dynamics, fiscal architectures, and geopolitical risk landscapes.',
  image: '/faculty/Sizwe-Mpofu-Walsh-The-Speakers-Firm.jpg',
  visualClassName: 'tsf-competency-visual-economics',
  ctaLabel: 'Explore Track',
  ctaHref: '#faculty'
}, {
  id: '02',
  title: 'Corporate Governance, Ethics & Statesmanship',
  body: 'Cultivating boardroom integrity, ethical corporate leadership, shareholder relations, and strategic statesmanship.',
  image: '/faculty/Siphiwe-Moyo-The-Speakers-Firm.jpg',
  visualClassName: 'tsf-competency-visual-leadership',
  ctaLabel: 'Explore Track',
  ctaHref: '#faculty'
}, {
  id: '03',
  title: 'Systemic Transformation, Equity & Public Policy',
  body: 'Bridging public policy mandates, macro-economic equity strategies, gender justice, and state capability execution.',
  image: '/faculty/Thuli-Madonsela-The-Speakers-Firm-The-Speakers-Firm.jpg',
  visualClassName: 'tsf-competency-visual-transformation',
  ctaLabel: 'Explore Track',
  ctaHref: '#faculty'
}, {
  id: '04',
  title: 'Organisational Behaviour, Narrative & Human Resilience',
  body: 'Understanding psychological safety, high-performance team narratives, cultural adaptability, and human resilience.',
  image: '/faculty/dr-victor-ramathesele-the-speakers-firm.jpg',
  visualClassName: 'tsf-competency-visual-innovation',
  ctaLabel: 'Explore Track',
  ctaHref: '#faculty'
}];
const HERO_SLIDES = [{
  id: 'bonang-mohale',
  image: '/hero_backgrounds/bonang-mohale.jpg',
  alt: 'Professor Bonang Mohale',
  position: 'object-center'
}, {
  id: 'dr-phumzile-mlambo-ngcuka2',
  image: '/hero_backgrounds/dr-phumzile-mlambo-ngcuka2.jpg',
  alt: 'Dr. Phumzile Mlambo-Ngcuka',
  position: 'object-center'
}, {
  id: 'khaya-sithole',
  image: '/hero_backgrounds/khaya-sithole.jpg',
  alt: 'Khaya Sithole',
  position: 'object-center'
}, {
  id: 'sizwe-mpofu-walsh',
  image: '/hero_backgrounds/sizwe-mpofu-walsh.jpg',
  alt: 'Dr. Sizwe Mpofu-Walsh',
  position: 'object-top'
}, {
  id: 'thuli-madonsela',
  image: '/hero_backgrounds/thuli-madonsela.jpg',
  alt: 'Professor Thuli Madonsela',
  position: 'object-top'
}, {
  id: 'prince-mashele',
  image: '/hero_backgrounds/Prince-Mashele.jpg',
  alt: 'Prince Mashele',
  position: 'object-center'
}];
const HERO_SLIDE_DURATION_MS = 5000;

const FEATURED_SPEAKERS = [{
  id: 'abner-mariri',
  name: 'Abner Mariri',
  category: 'Keynote',
  image: '/image_marquee/Abner-Mariri-The-Speakers-Firm.jpg',
  alt: 'Abner Mariri',
  quote: 'Unlock the performance velocity of your teams.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Inspirational Speaker, Transformation Architect & Leadership Catalyst</span>
}, {
  id: 'andisa-liba',
  name: 'Andisa Liba',
  category: 'Leadership',
  image: '/image_marquee/Andisa-Liba-The-Speakers-Firm.jpg',
  alt: 'Andisa Liba',
  quote: 'Future-fit talent strategies drive African progress.',
  youtubeId: 'arj7oStGLkU',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.26)',
  bio: <span>Human Capital Leader, Workforce Futurist & Inclusion Advocate</span>
}, {
  id: 'aubrey-masango',
  name: 'Aubrey Masango',
  category: 'MCs',
  image: '/image_marquee/Aubrey-Masango-The-Speakers-Firm.jpg',
  alt: 'Aubrey Masango',
  quote: 'Holding the narrative, facilitating the future.',
  youtubeId: 'UF8uR6Z6KLc',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.25)',
  bio: <span>Broadcaster, Writer, Command-Level MC & Facilitator</span>
}, {
  id: 'bonang-mohale',
  name: 'Prof. Bonang Mohale',
  category: 'Keynote',
  image: '/image_marquee/Bonang-Mohale-The-Speakers-Firm.jpg',
  alt: 'Prof. Bonang Mohale',
  quote: 'Servant leadership is the ultimate competitive edge.',
  youtubeId: '2s5CXK-w0AQ',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.25)',
  bio: <span>Corporate Statesman, Business Leader, Chancellor & Author</span>
}, {
  id: 'bridget-masinga',
  name: 'Bridget Masinga',
  category: 'Media',
  image: '/image_marquee/Bridget-Masinga-The-Speakers-Firm.jpg',
  alt: 'Bridget Masinga',
  quote: 'Own the message, command the spotlight.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.25)',
  bio: <span>Broadcaster, Media Personality, MC & Facilitator</span>
}, {
  id: 'clement-manyathela',
  name: 'Clement Manyathela',
  category: 'MCs',
  image: '/image_marquee/Clement-Manyathela-The-Speakers-Firm.jpg',
  alt: 'Clement Manyathela',
  quote: 'Conversations that shift minds and inspire outcomes.',
  youtubeId: 'iG9CE55wbtY',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.26)',
  bio: <span>Broadcast Journalist, Host of The Clement Manyathela Show & MC</span>
}, {
  id: 'dr-billy-selekane',
  name: 'Dr. Billy Selekane',
  category: 'Keynote',
  image: '/image_marquee/Dr-Billy-Selekane-The-Speakers-Firm.jpg',
  alt: 'Dr. Billy Selekane',
  quote: 'Organisational culture defines legacy.',
  youtubeId: 'RcGyVTAoXEU',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.25)',
  bio: <span>International Keynote Speaker & Organisational Culture Specialist</span>
}, {
  id: 'dr-buyani-zwane',
  name: 'Dr. Buyani Zwane',
  category: 'Leadership',
  image: '/image_marquee/Dr-Buyani-Zwane-The-Speakers-Firm.jpg',
  alt: 'Dr. Buyani Zwane',
  quote: 'Leadership is a conscious choice, not a title.',
  youtubeId: '8CrOL-ydFMI',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.25)',
  bio: <span>Leadership Consultant, Executive Coach & Academic</span>
}, {
  id: 'dr-david-molapo',
  name: 'Dr. David Molapo',
  category: 'Keynote',
  image: '/image_marquee/Dr-David-Molapo-The-Speakers-Firm-2.jpg',
  alt: 'Dr. David Molapo',
  quote: 'We don’t just train leaders, we inspire nation builders.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Leadership Icon, Author & International Keynote Speaker</span>
}, {
  id: 'dr-gugulethu-xaba',
  name: 'Dr. Gugulethu Xaba',
  category: 'Innovation',
  image: '/image_marquee/Dr-Gugulethu-Xaba-The-Speakers-Firm.jpg',
  alt: 'Dr. Gugulethu Xaba',
  quote: 'Sustainable growth stems from economic transformation.',
  youtubeId: 'arj7oStGLkU',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.26)',
  bio: <span>Governance Specialist & Local Government Strategist</span>
}, {
  id: 'dr-john-kani',
  name: 'Dr. John Kani',
  category: 'Keynote',
  image: '/image_marquee/Dr-John-Kani-The-Speakers-Firm.jpg',
  alt: 'Dr. John Kani',
  quote: 'Heritage is the foundation of our future.',
  youtubeId: 'UF8uR6Z6KLc',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.25)',
  bio: <span>Legendary Actor, Playwright, Director & Cultural Activist</span>
}, {
  id: 'dr-mpho-phalatse',
  name: 'Dr. Mpho Phalatse Nxumalo',
  category: 'Governance',
  image: '/image_marquee/Dr-Mpho-Phalatse-Nxumalo-The-Speakers-Firm.jpg',
  alt: 'Dr. Mpho Phalatse Nxumalo',
  quote: 'Ethical governance is a fiduciaty duty.',
  youtubeId: 'iG9CE55wbtY',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.25)',
  bio: <span>Medical Doctor & Former Executive Mayor of Johannesburg</span>
}, {
  id: 'dr-puleng-mokhoalibe',
  name: 'Dr. Puleng Mokhoalibe',
  category: 'A.I.',
  image: '/image_marquee/Dr-Puleng-Mokhoalibe--The-Speakers-Firm.jpg',
  alt: 'Dr. Puleng Mokhoalibe',
  quote: 'Design thinking unlocks exponential growth.',
  youtubeId: 'RcGyVTAoXEU',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.26)',
  bio: <span>Innovation Catalyst, CEO of Alchemy Inspiration & Futurist</span>
}, {
  id: 'dr-somadoda-fikeni',
  name: 'Dr. Somadoda Fikeni',
  category: 'Leadership',
  image: '/image_marquee/Dr-Somadoda-Fikeni-The-Speakers-Firm.jpg',
  alt: 'Dr. Somadoda Fikeni',
  quote: 'Understanding power dynamics dictates strategic execution.',
  youtubeId: '8CrOL-ydFMI',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.25)',
  bio: <span>Renowned Political Analyst, Policy Architect & Governance Strategist</span>
}, {
  id: 'duma-gqubule',
  name: 'Duma Gqubule',
  category: 'Economics',
  image: '/image_marquee/Duma-Gqubule-The-Speakers-Firm.jpg',
  alt: 'Duma Gqubule',
  quote: 'Economic models must serve society, not spreadsheets.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Financial Analyst, Macroeconomist & Policy Consultant</span>
}, {
  id: 'khaya-sithole',
  name: 'Khaya Sithole',
  category: 'Economics',
  image: '/image_marquee/Khaya-Sithole-The-Speakers-Firm-2.jpg',
  alt: 'Khaya Sithole',
  quote: 'Decoding public finance with accountability and transparency.',
  youtubeId: 'arj7oStGLkU',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.26)',
  bio: <span>Chartered Accountant, Academic & Macro Analyst</span>
}, {
  id: 'dr-victor-ramathesele',
  name: 'Dr. Victor Ramathesele',
  category: 'High-Performance',
  image: '/image_marquee/dr-victor-ramathesele-the-speakers-firm.jpg',
  alt: 'Dr. Victor Ramathesele',
  quote: 'Health is the first wealth of any enterprise.',
  youtubeId: 'UF8uR6Z6KLc',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.25)',
  bio: <span>Sports Medicine Specialist, Broadcaster & Health Strategist</span>
}, {
  id: 'felicia-mabuza-suttle',
  name: 'Felicia Mabuza Suttle',
  category: 'Keynote',
  image: '/image_marquee/felicia-mabuza-suttle-the-speakers-firm.jpg',
  alt: 'Felicia Mabuza Suttle',
  quote: 'Laughter, legacy, and talk show sovereignty.',
  youtubeId: '8CrOL-ydFMI',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>"First Lady of Talk", Talk Show Hostess, Executive Coach & Author</span>
}];

const FEATURED_SPEAKERS_HEADING_LINES = [{
  id: 'signature-speakers-heading',
  words: [{
    id: 'signature-word',
    text: 'Signature'
  }, {
    id: 'speakers-word',
    text: 'Speakers',
    isRed: true
  }]
}];

const FEATURED_SPEAKER_FILTERS = [{
  id: 'all-speakers',
  label: 'All'
}, {
  id: 'keynote',
  label: 'Keynote'
}, {
  id: 'leadership',
  label: 'Leadership'
}, {
  id: 'governance',
  label: 'Governance'
}, {
  id: 'ai',
  label: 'A.I.'
}, {
  id: 'future-of-work',
  label: 'Future of Work'
}, {
  id: 'economics',
  label: 'Economics'
}, {
  id: 'futurists',
  label: 'Futurists'
}, {
  id: 'geopolitics',
  label: 'Geopolitics'
}, {
  id: 'innovation',
  label: 'Innovation'
}, {
  id: 'organisational-agility',
  label: 'Organisational Agility'
}, {
  id: 'media',
  label: 'Media'
}, {
  id: 'reputation',
  label: 'Reputation'
}, {
  id: 'branding',
  label: 'Branding'
}, {
  id: 'sales',
  label: 'Sales'
}, {
  id: 'neuroscience',
  label: 'Neuroscience'
}, {
  id: 'high-performance',
  label: 'High-Performance'
}, {
  id: 'sports',
  label: 'Sports'
}, {
  id: 'sustainability',
  label: 'Sustainability'
}, {
  id: 'mcs',
  label: 'MCs'
}];

const ROUNDTABLE_INVITES = [
  { id: 'mohale', src: '/roundtable/mohale.jpg', alt: 'Prof. Bonang Mohale Roundtable Discussion' },
  { id: 'invite3', src: '/roundtable/invite3.jpg', alt: 'Executive Dialogue Session' },
  { id: 'lincoln', src: '/roundtable/lincoln.jpg', alt: 'Lincoln Roundtable Discussion' },
  { id: 'mmamoloko', src: '/roundtable/mmamoloko.jpg', alt: 'Mmamoloko Roundtable Discussion' },
  { id: 'mzamo', src: '/roundtable/mzamo.jpg', alt: 'Mzamo Roundtable Discussion' },
  { id: 'nozipho2', src: '/roundtable/nozipho2.jpg', alt: 'Nozipho Roundtable Discussion' },
  { id: 'reuel2', src: '/roundtable/reuel2.jpg', alt: 'Reuel Roundtable Discussion' },
  { id: 'siphiwe', src: '/roundtable/siphiwe invite.jpg', alt: 'Siphiwe Roundtable Discussion' },
  { id: 'thebe', src: '/roundtable/thebe.jpg', alt: 'Thebe Roundtable Discussion' },
  { id: 'tinyiko', src: '/roundtable/tinyiko.jpg', alt: 'Tinyiko Roundtable Discussion' }
];

const FACULTY = [{
  id: 'phumzile-mlambo-ngcuka',
  name: 'Dr. Phumzile Mlambo-Ngcuka',
  designation: 'Global Stateswoman',
  role: 'Former Deputy President of South Africa & United Nations Under-Secretary-General',
  image: '/highlighted_faculty/Dr-Phumzile-Mlambo-Ngcuka.jpg',
  trackId: 'leadership-strategy-and-executive-performance',
  tags: [{
    id: 'sustainable-development',
    label: 'Sustainable Development'
  }, {
    id: 'gender-equality',
    label: 'Gender Equality'
  }, {
    id: 'public-policy',
    label: 'Public Policy'
  }, {
    id: 'global-education',
    label: 'Global Education'
  }],
  snippet: 'Championing sustainable development and gender equity at the highest levels of global governance.',
  spanClassName: 'col-span-12 md:col-span-7',
  wipeDelay: 0,
  entryDelay: 0
}, {
  id: 'bonang-mohale',
  name: 'Prof. Bonang Mohale',
  designation: 'Corporate Statesman',
  role: 'Chancellor of the University of the Free State, Author & Corporate Leader',
  image: '/highlighted_faculty/prof-bonang-mohale.jpg',
  trackId: 'leadership-strategy-and-executive-performance',
  tags: [{
    id: 'economic-transformation',
    label: 'Economic Transformation'
  }, {
    id: 'ethical-leadership',
    label: 'Ethical Leadership'
  }, {
    id: 'corporate-governance',
    label: 'Corporate Governance'
  }],
  snippet: 'Driving ethical corporate transformation and servant leadership across African boardrooms.',
  spanClassName: 'col-span-12 md:col-span-5',
  wipeDelay: 0.15,
  entryDelay: 0.12
}, {
  id: 'khaya-sithole',
  name: 'Khaya Sithole',
  designation: 'Academic & Macro Analyst',
  role: 'Chartered Accountant, Academic & Political Analyst',
  image: '/highlighted_faculty/Khaya-Sithole.jpg',
  trackId: 'economics-and-politics',
  tags: [{
    id: 'public-finance',
    label: 'Public Finance'
  }, {
    id: 'political-economy',
    label: 'Political Economy'
  }, {
    id: 'institutional-accountability',
    label: 'Institutional Accountability'
  }],
  snippet: 'Decoding the intersection of public finance, political risk, and institutional accountability.',
  spanClassName: 'col-span-12 md:col-span-5',
  wipeDelay: 0.25,
  entryDelay: 0.24
}, {
  id: 'ralph-mathekga',
  name: 'Dr. Ralph Mathekga',
  designation: 'Political Strategist & Author',
  role: 'Political Analyst, Author & Researcher',
  image: '/highlighted_faculty/Dr-Ralph-Mathekga.jpg',
  trackId: 'economics-and-politics',
  tags: [{
    id: 'south-african-politics',
    label: 'South African Politics'
  }, {
    id: 'policy-risk-analysis',
    label: 'Policy Risk Analysis'
  }, {
    id: 'state-governance',
    label: 'State Governance'
  }],
  snippet: 'Translating South African political complexity into actionable strategic intelligence.',
  spanClassName: 'col-span-12 md:col-span-7',
  wipeDelay: 0.1,
  entryDelay: 0.36
}];
const TESTIMONIAL_QUOTES = [{
  id: 'commanding-presence',
  quote: 'The most commanding presence we have ever put on a main stage.',
  attribution: 'Africa CEO Forum'
}, {
  id: 'delegates-recalibrated',
  quote: 'Our delegates left re-calibrated. Every single one.',
  attribution: 'Johannesburg Business Summit'
}, {
  id: 'rebooked-three-times',
  quote: 'Transformative. We have re-booked three times.',
  attribution: 'Standard Bank Group'
}, {
  id: 'turning-point',
  quote: 'This was not a keynote. It was a turning point.',
  attribution: 'NEDBANK Leadership Symposium'
}, {
  id: 'standing-ovation',
  quote: 'Standing ovation. Both days.',
  attribution: 'ABSA Executive Retreat'
}, {
  id: 'always-come-back',
  quote: 'We have tried others. We always come back.',
  attribution: 'Department of Trade & Industry'
}, {
  id: 'nps-jumped',
  quote: 'Our NPS jumped 22 points the week after the summit.',
  attribution: 'Pan-African Women in Leadership Forum'
}, {
  id: 'execution-extraordinary',
  quote: 'The brief was heard. The execution was extraordinary.',
  attribution: 'MTN Group'
}];
const TESTIMONIAL_MARQUEE_ITEMS = [...TESTIMONIAL_QUOTES.map(item => ({
  id: `first-${item.id}`,
  quote: item.quote,
  attribution: item.attribution
})), ...TESTIMONIAL_QUOTES.map(item => ({
  id: `second-${item.id}`,
  quote: item.quote,
  attribution: item.attribution
}))];
const POSITION_WORDS = 'The Speakers Firm operates at the intersection of leadership, policy, economics, and transformation. We represent an elite, handpicked faculty of leaders, intellectuals, and statespeople who possess deep, lived expertise and systemic fluency. We do not manage a mass catalogue of talent. We cultivate a select circle of authoritative voices equipped to deliver precise execution under high-pressure boardroom, national, and international conditions.'.split(' ').map((text, order) => ({
  id: `${order}-${text.replace(/[^a-zA-Z]/g, '').toLowerCase()}`,
  text,
  isHighlighted: order < 57
}));
const TICKER_IMAGES = {
  col1: [
    '/image_marquee/Abner-Mariri-The-Speakers-Firm.jpg',
    '/image_marquee/Andisa-Liba-The-Speakers-Firm.jpg',
    '/image_marquee/Aubrey-Masango-The-Speakers-Firm.jpg',
    '/image_marquee/Bonang-Mohale-The-Speakers-Firm.jpg',
    '/image_marquee/Bridget-Masinga-The-Speakers-Firm.jpg'
  ],
  col2: [
    '/image_marquee/Clement-Manyathela-The-Speakers-Firm.jpg',
    '/image_marquee/Dr-Billy-Selekane-The-Speakers-Firm.jpg',
    '/image_marquee/Dr-Buyani-Zwane-The-Speakers-Firm.jpg',
    '/image_marquee/Dr-David-Molapo-The-Speakers-Firm-2.jpg'
  ],
  col3: [
    '/image_marquee/Dr-Gugulethu-Xaba-The-Speakers-Firm.jpg',
    '/image_marquee/Dr-John-Kani-The-Speakers-Firm.jpg',
    '/image_marquee/Dr-Mpho-Phalatse-Nxumalo-The-Speakers-Firm.jpg',
    '/image_marquee/Dr-Puleng-Mokhoalibe--The-Speakers-Firm.jpg',
    '/image_marquee/Dr-Somadoda-Fikeni-The-Speakers-Firm.jpg'
  ],
  col4: [
    '/image_marquee/Duma-Gqubule-The-Speakers-Firm.jpg',
    '/image_marquee/Khaya-Sithole-The-Speakers-Firm-2.jpg',
    '/image_marquee/dr-victor-ramathesele-the-speakers-firm.jpg',
    '/image_marquee/felicia-mabuza-suttle-the-speakers-firm.jpg'
  ]
};
const HERO_HEADLINE_LINES = [{
  id: 'africas',
  className: 'block text-[clamp(54px,18vw,72px)] md:text-[106px] lg:text-[138px] leading-[0.9] tracking-[-0.065em]',
  words: [{
    id: 'africas-word',
    text: "Africa's",
    isRed: false
  }]
}, {
  id: 'strategic',
  className: 'block max-w-none text-[clamp(34px,9.2vw,58px)] sm:text-[clamp(52px,8.6vw,72px)] md:text-[clamp(68px,8.6vw,104px)] lg:text-[clamp(92px,9.4vw,118px)] xl:text-[122px] leading-[0.9] tracking-[-0.055em] -ml-1 md:-ml-2 lg:-ml-3',
  words: [{
    id: 'strategic-word',
    text: 'Strategic',
    isRed: false
  }]
}, {
  id: 'bureau',
  className: 'block max-w-none text-[clamp(34px,9.2vw,58px)] sm:text-[clamp(52px,8.6vw,72px)] md:text-[clamp(68px,8.6vw,104px)] lg:text-[clamp(92px,9.4vw,118px)] xl:text-[122px] leading-[0.9] tracking-[-0.055em] -ml-1 md:-ml-2 lg:-ml-3',
  words: [{
    id: 'bureau-word',
    text: 'Bureau.',
    isRed: true
  }]
}];
const FOOTER_NAV_LINKS = [{
  id: 'home',
  label: 'Home',
  href: '#'
}, {
  id: 'faculty',
  label: 'Faculty',
  href: '#faculty'
}, {
  id: 'methodology',
  label: 'Methodology',
  href: '#methodology'
}, {
  id: 'executive-dialogues',
  label: 'Executive Dialogues',
  href: '#dialogues'
}, {
  id: 'brief-bureau',
  label: 'Brief the Bureau',
  href: '#brief-us'
}];
const ENGAGEMENT_OPTIONS = [{
  id: 'boardroom-strategy',
  label: 'Boardroom Strategy'
}, {
  id: 'annual-general-meeting',
  label: 'Annual General Meeting'
}, {
  id: 'leadership-summit',
  label: 'Leadership Summit'
}, {
  id: 'keynote-address',
  label: 'Keynote Address'
}, {
  id: 'panel-facilitation',
  label: 'Panel Facilitation'
}];
const METHODOLOGY_HEADING_LINES = [{
  id: 'methodology-heading',
  words: [{
    id: 'exclusivity-word',
    text: 'Exclusivity'
  }, {
    id: 'by-word',
    text: 'by'
  }, {
    id: 'design-word',
    text: 'Design.'
  }, {
    id: 'velocity-word',
    text: 'Velocity',
    isRed: true
  }, {
    id: 'over-word',
    text: 'Over',
    isRed: true
  }, {
    id: 'volume-word',
    text: 'Volume.',
    isRed: true
  }]
}];
const CORE_COMPETENCIES_HEADING_LINES = [{
  id: 'core-heading',
  words: [{
    id: 'four-word',
    text: 'Four'
  }, {
    id: 'domains-word',
    text: 'Domains'
  }, {
    id: 'of-word',
    text: 'of'
  }, {
    id: 'expertise-word',
    text: 'Expertise.',
    isRed: true
  }]
}];
const FACULTY_HEADING_LINES = [{
  id: 'seismic-line',
  className: 'block',
  words: [{
    id: 'seismic-word',
    text: 'Seismic'
  }]
}, {
  id: 'thinkers-line',
  className: 'block',
  words: [{
    id: 'thinkers-word',
    text: 'Thinkers.',
    isRed: true
  }]
}];
const BRIDGE_HEADING_LINES = [{
  id: 'bridge-heading',
  words: [{
    id: 'every-word',
    text: 'Every'
  }, {
    id: 'voice-word',
    text: 'voice.'
  }, {
    id: 'precisely-word',
    text: 'Precisely'
  }, {
    id: 'placed-word',
    text: 'placed.'
  }]
}];
const BRIEF_HEADING_LINES = [{
  id: 'brief-heading',
  words: [{
    id: 'brief-word',
    text: 'Brief'
  }, {
    id: 'the-brief-word',
    text: 'the'
  }, {
    id: 'bureau-brief-word',
    text: 'Bureau'
  }]
}];
const FOOTER_HEADING_LINES = [{
  id: 'footer-heading',
  words: [{
    id: 'footer-the-word',
    text: 'The'
  }, {
    id: 'footer-speakers-word',
    text: 'Speakers'
  }, {
    id: 'footer-firm-word',
    text: 'Firm'
  }]
}];
const HEADING_EASE = [0.16, 1, 0.3, 1] as const;
type AnimatedHeadingWord = {
  id: string;
  text: string;
  isRed?: boolean;
};
type AnimatedHeadingLine = {
  id: string;
  className?: string;
  words: AnimatedHeadingWord[];
};
type AnimatedWordHeadingProps = {
  as: 'h1' | 'h2';
  lines: AnimatedHeadingLine[];
  className: string;
  style?: React.CSSProperties;
  wordClassName?: string;
  id?: string;
};
type FloatingNavProps = {
  searchQuery: string;
  onSearchQueryChange: (value: string) => void;
};
const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);
  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  return prefersReducedMotion;
};
const useOneShotInView = <T extends Element,>(threshold = 0.3) => {
  const elementRef = React.useRef<T | null>(null);
  const [isInView, setIsInView] = React.useState(false);
  React.useEffect(() => {
    if (isInView) {
      return undefined;
    }
    const element = elementRef.current;
    if (!element || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsInView(true);
      return undefined;
    }
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
        setIsInView(true);
        observer.disconnect();
      }
    }, {
      threshold
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [isInView, threshold]);
  return [elementRef, isInView] as const;
};
const AnimatedWordHeading = ({
  as: HeadingTag,
  lines,
  className,
  style,
  wordClassName = 'mr-[0.18em]',
  id
}: AnimatedWordHeadingProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [headingRef, isHeadingInView] = useOneShotInView<HTMLHeadingElement>(0.3);
  let wordOrder = -1;
  return <HeadingTag ref={headingRef} id={id} className={className} style={style}>
      {lines.map(line => <span key={line.id} className={line.className ?? 'inline'}>
          {line.words.map(word => {
        wordOrder += 1;
        return <span key={word.id} className="inline-block overflow-hidden pr-[0.05em] pb-[0.12em] -mb-[0.12em] align-top">
              <motion.span initial={prefersReducedMotion ? {
            opacity: 0
          } : {
            opacity: 0,
            y: 24,
            rotate: 3
          }} animate={isHeadingInView ? {
            opacity: 1,
            y: 0,
            rotate: 0
          } : undefined} transition={{
            duration: prefersReducedMotion ? 0.35 : 0.6,
            delay: prefersReducedMotion ? 0 : wordOrder * 0.09,
            ease: HEADING_EASE
          }} className={cn('inline-block origin-bottom-left last:mr-0', wordClassName)} style={word.isRed ? {
            color: COLORS.red
          } : {}}>
                <span>{word.text}</span>
              </motion.span>
              <span aria-hidden="true" className="inline-block">&nbsp;</span>
            </span>;
      })}
        </span>)}
    </HeadingTag>;
};
const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = {
    damping: 28,
    stiffness: 180
  };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);
  return <div className="fixed inset-0 pointer-events-none z-[300] hidden lg:block">
      <motion.div className="fixed w-2 h-2 rounded-full z-[301]" style={{
      x: mouseX,
      y: mouseY,
      translateX: '-50%',
      translateY: '-50%',
      backgroundColor: COLORS.red
    }} />
      <motion.div className="fixed w-9 h-9 rounded-full border border-black/20" style={{
      x: cursorX,
      y: cursorY,
      translateX: '-50%',
      translateY: '-50%'
    }} />
    </div>;
};
const ScrollProgressBar = () => {
  const {
    scrollYProgress
  } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const opacity = useTransform(scrollYProgress, [0, 0.985, 1], [1, 1, 0]);
  return <motion.div className="fixed top-0 left-0 right-0 h-[2px] z-[400] origin-left" style={{
    scaleX,
    opacity,
    backgroundColor: COLORS.red
  }} />;
};
const CurtainReveal = () => {
  return <motion.div className="fixed inset-0 z-[200] bg-[#000000] origin-left" initial={{
    scaleX: 1
  }} animate={{
    scaleX: 0
  }} transition={{
    duration: 1,
    ease: [0.76, 0, 0.24, 1],
    delay: 0.2
  }} />;
};
const VerticalBorderLines = ({
  isDark = false
}: {
  isDark?: boolean;
}) => {
  const borderColor = isDark ? COLORS.darkGray : COLORS.borderGray;
  const capColor = isDark ? '#FFFFFF' : COLORS.black;
  return <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
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
const FloatingNav = ({
  searchQuery,
  onSearchQueryChange
}: FloatingNavProps) => {
  const [isSearchExpanded, setIsSearchExpanded] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const searchInputRef = React.useRef<HTMLInputElement | null>(null);
  React.useEffect(() => {
    if (isSearchExpanded) {
      searchInputRef.current?.focus();
    }
  }, [isSearchExpanded]);
  const handleSearchToggle = () => {
    setIsSearchExpanded(current => !current);
  };
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchQueryChange(event.target.value);
  };
  const handleSearchKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      setIsSearchExpanded(false);
    }
  };
  const handleMobileSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchQueryChange(event.target.value);
  };
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(current => !current);
  };
  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };
  return <motion.nav initial={{
    opacity: 0,
    y: -20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    delay: 0.9,
    duration: 0.5
  }} className="fixed top-4 left-1/2 z-50 flex min-h-[56px] w-[calc(100vw-24px)] max-w-[calc(100vw-24px)] -translate-x-1/2 items-center rounded-[28px] border bg-[#ffffff]/90 px-4 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl md:top-6 lg:h-[56px] lg:w-auto lg:rounded-full lg:px-6" style={{
    borderColor: 'rgba(199, 199, 200, 0.6)'
  }}>
      <div className="flex items-center gap-3">
        <span className="text-[18px] font-bold tracking-[-0.04em] whitespace-nowrap" style={{
        color: COLORS.black
      }}>TSF</span>
        <div className="h-4 w-[1px]" style={{
        backgroundColor: COLORS.borderGray
      }} />
        <span className="hidden text-[11px] font-bold uppercase tracking-[0.1em] min-[380px]:inline" style={{
        color: COLORS.gray
      }}>The Speakers Firm</span>
      </div>
      <div className="hidden lg:flex items-center gap-6 mx-8">
        {FOOTER_NAV_LINKS.slice(1, 5).filter(item => item.id !== 'brief-bureau').map(item => <a key={`nav-${item.id}`} href={item.href} className="text-[12px] font-bold uppercase tracking-[0.1em] transition-colors" style={{
        color: COLORS.gray
      }} onMouseEnter={event => event.currentTarget.style.color = COLORS.black} onMouseLeave={event => event.currentTarget.style.color = COLORS.gray}>
            {item.label === 'Executive Dialogues' ? 'Dialogues' : item.label}
          </a>)}
      </div>
      <div className="ml-auto hidden items-center gap-3 lg:ml-0 lg:flex">
        <div className="flex items-center gap-2 overflow-hidden">
          <button type="button" aria-label={isSearchExpanded ? 'Collapse faculty search' : 'Expand faculty search'} aria-expanded={isSearchExpanded} onClick={handleSearchToggle} className="grid h-9 w-9 shrink-0 place-items-center rounded-full transition-colors duration-300" style={{
          color: isSearchExpanded ? COLORS.red : COLORS.gray
        }}>
            <Search aria-hidden="true" className="h-5 w-5" />
          </button>
          <motion.div initial={false} animate={isSearchExpanded ? {
          width: 240,
          opacity: 1
        } : {
          width: 0,
          opacity: 0
        }} transition={{
          duration: 0.3,
          ease: 'easeOut'
        }} className="overflow-hidden">
            <label htmlFor="nav-faculty-search" className="sr-only">Search faculty</label>
            <input ref={searchInputRef} id="nav-faculty-search" value={searchQuery} onChange={handleSearchChange} onKeyDown={handleSearchKeyDown} type="search" placeholder="Search faculty..." className="w-[240px] border-b bg-transparent pb-1 text-[14px] font-normal outline-none placeholder:text-[#686869]" style={{
            borderColor: COLORS.borderGray,
            color: COLORS.black
          }} />
          </motion.div>
        </div>
        <a href="#brief-us" className="whitespace-nowrap rounded-full px-5 py-2 text-[12px] font-bold uppercase tracking-[0.1em] text-white transition-transform active:scale-95" style={{
        backgroundColor: COLORS.red
      }}>
          Brief the Bureau
        </a>
      </div>
      <button type="button" aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isMobileMenuOpen} aria-controls="mobile-navigation-menu" onClick={handleMobileMenuToggle} className="ml-auto grid h-10 w-10 place-items-center rounded-full border transition-colors duration-300 lg:hidden" style={{
      borderColor: COLORS.borderGray,
      color: COLORS.black
    }}>
        {isMobileMenuOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
      </button>
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div id="mobile-navigation-menu" initial={{
        opacity: 0,
        y: -8
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -8
      }} transition={{
        duration: 0.24,
        ease: 'easeOut'
      }} className="absolute left-0 right-0 top-[calc(100%+10px)] overflow-hidden rounded-[26px] border bg-[#ffffff]/95 p-5 shadow-[0_18px_48px_rgba(0,0,0,0.12)] backdrop-blur-xl lg:hidden" style={{
        borderColor: 'rgba(199, 199, 200, 0.72)'
      }}>
            <div className="flex flex-col gap-1">
              {FOOTER_NAV_LINKS.slice(1, 5).map(item => <a key={`mobile-nav-${item.id}`} href={item.href} onClick={handleMobileMenuClose} className="flex items-center justify-between rounded-2xl px-2 py-3 text-[13px] font-bold uppercase tracking-[0.12em] transition-colors active:text-[#e30e04]" style={{
            color: COLORS.black
          }}>
                  <span>{item.label}</span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>)}
            </div>
            <form className="mt-4 border-t pt-5" role="search" onSubmit={event => event.preventDefault()} style={{
          borderColor: COLORS.borderGray
        }}>
              <label htmlFor="mobile-nav-faculty-search" className="sr-only">Search faculty</label>
              <div className="flex items-center gap-3 rounded-full border bg-white/60 px-4 py-3" style={{
            borderColor: COLORS.borderGray
          }}>
                <Search aria-hidden="true" className="h-4 w-4 shrink-0" style={{
              color: COLORS.red
            }} />
                <input id="mobile-nav-faculty-search" value={searchQuery} onChange={handleMobileSearchChange} type="search" placeholder="Search faculty..." className="min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-[#686869]" style={{
              color: COLORS.black
            }} />
              </div>
            </form>
          </motion.div>}
      </AnimatePresence>
    </motion.nav>;
};
const TickerColumn = ({
  images,
  direction,
  duration,
  parallaxRate = 0.45
}: {
  images: string[];
  direction: 'up' | 'down';
  duration: number;
  parallaxRate?: number;
}) => {
  const parallaxRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    let animationFrame = 0;
    const updateParallax = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translate3d(0, ${window.scrollY * parallaxRate * -1}px, 0)`;
      }
      animationFrame = 0;
    };
    const handleScroll = () => {
      if (animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(updateParallax);
      }
    };
    updateParallax();
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrame !== 0) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [parallaxRate]);
  const duplicatedImages = [...images, ...images];
  const tickerItems = duplicatedImages.map((image, duplicatePosition) => ({
    id: `${duplicatePosition < images.length ? 'first' : 'second'}-${image}`,
    image
  }));
  return <div ref={parallaxRef} className="will-change-transform">
      <motion.div animate={{
      y: direction === 'up' ? ['0%', '-50%'] : ['-50%', '0%']
    }} transition={{
      duration,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'linear'
    }} className="flex flex-col gap-4 py-4 h-auto min-h-fit">
        {tickerItems.map(item => <div key={item.id} className="w-full aspect-[3/4] rounded-2xl overflow-hidden shrink-0 bg-[#0f0f0f] shadow-[inset_0_0_48px_rgba(0,0,0,0.28)]">
            <img src={item.image} alt="Atmospheric executive event scene" className="w-full h-full object-cover grayscale saturate-0 contrast-[1.12] brightness-[0.82] transition-all duration-700 hover:grayscale-0 hover:saturate-100 hover:scale-105 cursor-pointer" />
          </div>)}
      </motion.div>
    </div>;
};
const SocialProofStrip = () => {
  const marqueeControls = useAnimationControls();
  React.useEffect(() => {
    void marqueeControls.start({
      x: [0, -CLIENT_MARQUEE_TOTAL_WIDTH],
      transition: {
        duration: 40,
        repeat: Infinity,
        ease: 'linear'
      }
    });
  }, [marqueeControls]);
  const handlePointerEnter = () => {
    marqueeControls.stop();
  };
  const handlePointerLeave = () => {
    void marqueeControls.start({
      x: [0, -CLIENT_MARQUEE_TOTAL_WIDTH],
      transition: {
        duration: 40,
        repeat: Infinity,
        ease: 'linear'
      }
    });
  };
  return <section aria-label="Institutional clients" className="relative w-full overflow-hidden border-y" style={{
    backgroundColor: COLORS.offWhite,
    borderColor: SOFT_RULE_COLOR
  }} onPointerEnter={handlePointerEnter} onPointerLeave={handlePointerLeave}>
      <div className="relative mx-auto max-w-[1440px] px-6 py-6 md:px-16">
        <motion.div className="flex w-max items-center will-change-transform" animate={marqueeControls}>
          {CLIENT_MARQUEE_ITEMS.map(client => <div key={client.id} className="flex shrink-0 items-center px-8 md:px-10">
              <span className="whitespace-nowrap text-center text-[10px] font-bold uppercase tracking-[0.22em] md:text-[11px]" style={{
            color: COLORS.gray
          }}>{client.label}</span>
              <span aria-hidden="true" className="ml-8 h-5 w-[1px] md:ml-10" style={{
            backgroundColor: COLORS.borderGray
          }} />
            </div>)}
        </motion.div>
        <div aria-hidden="true" className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#ffffff] to-transparent md:w-32" />
        <div aria-hidden="true" className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#ffffff] to-transparent md:w-32" />
      </div>
    </section>;
};
const TestimonialMarqueeStrip = () => {
  return <section aria-label="Client testimonials" className="tsf-testimonial-marquee w-full overflow-hidden" style={{
    backgroundColor: COLORS.offWhite
  }}>
      <style>{`
        @keyframes tsf-testimonial-scroll {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
        .tsf-testimonial-track { animation: tsf-testimonial-scroll 90s linear infinite; }
        .tsf-testimonial-marquee:hover .tsf-testimonial-track { animation-play-state: paused; }
      `}</style>
      <div className="tsf-testimonial-track flex w-max items-center py-10 md:py-12 will-change-transform">
        {TESTIMONIAL_MARQUEE_ITEMS.map(item => <div key={item.id} className="flex shrink-0 items-center gap-8 px-4 md:gap-10 md:px-5">
            <blockquote className="whitespace-nowrap leading-none tracking-[-0.02em]" style={{
          color: COLORS.black
        }}>
              <span className="font-serif text-[18px] italic md:text-[20px]">{item.quote}</span>
              <span className="ml-3 text-[10px] font-bold uppercase not-italic tracking-[0.18em]" style={{
            color: COLORS.gray
          }}>— {item.attribution}</span>
            </blockquote>
            <span aria-hidden="true" className="text-[18px] leading-none" style={{
          color: COLORS.red
        }}>◆</span>
          </div>)}
      </div>
    </section>;
};
const BriefBureauFormSection = () => {
  const [strategicObjective, setStrategicObjective] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };
  const handleObjectiveChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setStrategicObjective(event.target.value);
  };
  return <section id="brief-us" className="relative w-full" style={{
    backgroundColor: COLORS.offWhite,
    borderColor: SOFT_RULE_COLOR
  }}>
      <VerticalBorderLines />
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-20 sm:py-24 md:py-[120px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <AnimatedWordHeading as="h2" lines={BRIEF_HEADING_LINES} className="text-[clamp(2.75rem,11vw,4rem)] font-bold tracking-[-0.05em] leading-[0.95] uppercase" style={{
            color: COLORS.black
          }} />
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.16
          }} className="text-[18px] md:text-[22px] font-normal leading-[1.55] mt-8 max-w-[440px]" style={{
            color: COLORS.gray
          }}>
              Tell us about your event. We will find the right voice for it.
            </motion.p>
          </div>
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!isSubmitted && <motion.form key="brief-form" initial={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0,
              y: -24
            }} transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1]
            }} onSubmit={handleSubmit} className="flex flex-col gap-10" aria-label="Brief the Bureau contact form">
                  <div className="relative pt-6 border-b focus-within:border-transparent transition-colors duration-300" style={{
                borderColor: COLORS.black
              }}>
                    <input id="brief-name" name="name" type="text" required placeholder=" " className="peer w-full bg-transparent pb-4 text-[20px] leading-none outline-none" style={{
                  color: COLORS.black
                }} />
                    <label htmlFor="brief-name" className="absolute left-0 top-6 origin-left text-[18px] transition-all duration-300 ease-out peer-focus:top-0 peer-focus:text-[11px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.16em] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.16em]" style={{
                  color: COLORS.gray
                }}>Full Name & Designation</label>
                    <span aria-hidden="true" className="absolute bottom-[-1px] left-0 h-[1px] w-0 transition-all duration-300 ease-out peer-focus:w-full" style={{
                  backgroundColor: COLORS.red
                }} />
                  </div>
                  <div className="relative pt-6 border-b focus-within:border-transparent transition-colors duration-300" style={{
                borderColor: COLORS.black
              }}>
                    <input id="brief-organisation" name="organisation" type="text" required placeholder=" " className="peer w-full bg-transparent pb-4 text-[20px] leading-none outline-none" style={{
                  color: COLORS.black
                }} />
                    <label htmlFor="brief-organisation" className="absolute left-0 top-6 origin-left text-[18px] transition-all duration-300 ease-out peer-focus:top-0 peer-focus:text-[11px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.16em] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.16em]" style={{
                  color: COLORS.gray
                }}>Institution / Organisation</label>
                    <span aria-hidden="true" className="absolute bottom-[-1px] left-0 h-[1px] w-0 transition-all duration-300 ease-out peer-focus:w-full" style={{
                  backgroundColor: COLORS.red
                }} />
                  </div>
                  <div className="relative pt-6 border-b focus-within:border-transparent transition-colors duration-300" style={{
                borderColor: COLORS.black
              }}>
                    <select id="brief-engagement" name="engagement" required defaultValue="" className="peer w-full appearance-none bg-transparent pb-4 text-[20px] leading-none outline-none" style={{
                  color: COLORS.black
                }}>
                      <option value="" disabled> </option>
                      {ENGAGEMENT_OPTIONS.map(option => <option key={option.id} value={option.label}>{option.label}</option>)}
                    </select>
                    <label htmlFor="brief-engagement" className="absolute left-0 top-6 origin-left text-[18px] transition-all duration-300 ease-out peer-focus:top-0 peer-focus:text-[11px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.16em] peer-valid:top-0 peer-valid:text-[11px] peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-[0.16em]" style={{
                  color: COLORS.gray
                }}>Nature of Engagement</label>
                    <span aria-hidden="true" className="absolute bottom-[-1px] left-0 h-[1px] w-0 transition-all duration-300 ease-out peer-focus:w-full" style={{
                  backgroundColor: COLORS.red
                }} />
                  </div>
                  <div>
                    <div className="relative pt-6 border-b focus-within:border-transparent transition-colors duration-300" style={{
                  borderColor: COLORS.black
                }}>
                      <textarea id="brief-objective" name="objective" required maxLength={500} value={strategicObjective} onChange={handleObjectiveChange} placeholder=" " rows={6} className="peer min-h-[180px] w-full resize-none bg-transparent pb-4 text-[20px] leading-[1.45] outline-none" style={{
                    color: COLORS.black
                  }} />
                      <label htmlFor="brief-objective" className="absolute left-0 top-6 origin-left text-[18px] transition-all duration-300 ease-out peer-focus:top-0 peer-focus:text-[11px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.16em] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.16em]" style={{
                    color: COLORS.gray
                  }}>Strategic Objective</label>
                      <span aria-hidden="true" className="absolute bottom-[-1px] left-0 h-[1px] w-0 transition-all duration-300 ease-out peer-focus:w-full" style={{
                    backgroundColor: COLORS.red
                  }} />
                    </div>
                    <p className="mt-3 text-right font-mono text-[12px] tracking-[0.08em]" style={{
                  color: COLORS.silver
                }}><span>{strategicObjective.length} / 500</span></p>
                  </div>
                  <div className="relative pt-6 border-b focus-within:border-transparent transition-colors duration-300" style={{
                borderColor: COLORS.black
              }}>
                    <input id="brief-date-location" name="date-location" type="text" required placeholder=" " className="peer w-full bg-transparent pb-4 text-[20px] leading-none outline-none" style={{
                  color: COLORS.black
                }} />
                    <label htmlFor="brief-date-location" className="absolute left-0 top-6 origin-left text-[18px] transition-all duration-300 ease-out peer-focus:top-0 peer-focus:text-[11px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.16em] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.16em]" style={{
                  color: COLORS.gray
                }}>Proposed Date & Location</label>
                    <span aria-hidden="true" className="absolute bottom-[-1px] left-0 h-[1px] w-0 transition-all duration-300 ease-out peer-focus:w-full" style={{
                  backgroundColor: COLORS.red
                }} />
                  </div>
                  <div className="pt-2">
                    <button type="submit" className="rounded-full border px-10 py-4 text-[13px] font-bold uppercase tracking-[0.1em] transition-colors duration-300 hover:text-white" style={{
                  borderColor: COLORS.black,
                  color: COLORS.black,
                  backgroundColor: 'transparent'
                }} onMouseEnter={event => {
                  event.currentTarget.style.backgroundColor = COLORS.red;
                  event.currentTarget.style.borderColor = COLORS.red;
                  event.currentTarget.style.color = '#FFFFFF';
                }} onMouseLeave={event => {
                  event.currentTarget.style.backgroundColor = 'transparent';
                  event.currentTarget.style.borderColor = COLORS.black;
                  event.currentTarget.style.color = COLORS.black;
                }}>
                      <span>Send Brief</span>
                    </button>
                  </div>
                </motion.form>}
              {isSubmitted && <motion.div key="brief-confirmation" initial={{
              opacity: 0,
              y: 24
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1]
            }} className="min-h-[360px] flex items-center justify-center text-center">
                  <p className="font-serif text-[34px] md:text-[48px] italic tracking-[-0.04em] leading-[1.15] max-w-[720px]" style={{
                color: COLORS.black
              }}>We have received your brief. Expect a response within 24 hours.</p>
                </motion.div>}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>;
};
export const TheSpeakersFirmHome = () => {
  const [hoveredId, setHoveredId] = React.useState<string | null>(null);
  const [activeHeroSlide, setActiveHeroSlide] = React.useState(0);
  const [activeSpeakerCategory, setActiveSpeakerCategory] = React.useState('All');
  const [isSpeakerCarouselHovering, setIsSpeakerCarouselHovering] = React.useState(false);
  const [isSpeakerCarouselInteracting, setIsSpeakerCarouselInteracting] = React.useState(false);
  const [activeClipSpeakerId, setActiveClipSpeakerId] = React.useState<string | null>(null);
  const [activeClipIframeSrc, setActiveClipIframeSrc] = React.useState('');
  const [activeInviteImage, setActiveInviteImage] = React.useState<string | null>(null);

  const speakerCarouselRef1 = React.useRef<HTMLDivElement | null>(null);
  const speakerCarouselRef2 = React.useRef<HTMLDivElement | null>(null);
  const speakerCarouselRef3 = React.useRef<HTMLDivElement | null>(null);
  const [isHoveredRow1, setIsHoveredRow1] = React.useState(false);
  const [isHoveredRow2, setIsHoveredRow2] = React.useState(false);
  const [isHoveredRow3, setIsHoveredRow3] = React.useState(false);
  const clipIframeRef = React.useRef<HTMLIFrameElement | null>(null);

  const router = useRouter();
  const searchParams = useSearchParams();
  const facultySearchQuery = searchParams.get("search") || "";
  const [localSearch, setLocalSearch] = React.useState(facultySearchQuery);
  const prefersReducedMotion = usePrefersReducedMotion();
  const heroRef = React.useRef<HTMLElement | null>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  const tickerRotation = useTransform(scrollYProgress, [0, 1], [-26, -2]);
  const tickerScale = useTransform(scrollYProgress, [0, 1], [1.35, 1.15]);

  // Sync local search state with URL parameters when changed elsewhere (e.g., navbar)
  React.useEffect(() => {
    setLocalSearch(facultySearchQuery);
  }, [facultySearchQuery]);

  // Sync state instantly when custom search event is triggered elsewhere
  React.useEffect(() => {
    const handleSearchEvent = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setLocalSearch(customEvent.detail);
    };
    window.addEventListener('tsf-search', handleSearchEvent);
    return () => window.removeEventListener('tsf-search', handleSearchEvent);
  }, []);

  // Debounce pushing local search state changes back to the URL
  React.useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      const currentQuery = params.get("search") || "";
      if (localSearch === currentQuery) return;

      if (localSearch) {
        params.set("search", localSearch);
      } else {
        params.delete("search");
      }
      router.push(`/?${params.toString()}`, { scroll: false });
    }, 250);

    return () => clearTimeout(timer);
  }, [localSearch, router]);

  const normalizedFacultySearchQuery = localSearch.trim().toLowerCase();
  const displayedFaculty = normalizedFacultySearchQuery.length === 0 ? FACULTY : FACULTY.filter(member => {
    const haystack = `${member.name} ${member.designation} ${member.role} ${member.tags.map(tag => tag.label).join(' ')}`.toLowerCase();
    return haystack.includes(normalizedFacultySearchQuery);
  });
  
  const handleFacultySearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setLocalSearch(val);
    window.dispatchEvent(new CustomEvent('tsf-search', { detail: val }));
  };

  const displayedFeaturedSpeakers = FEATURED_SPEAKERS;
  const row1Speakers = displayedFeaturedSpeakers.slice(0, 6);
  const row2Speakers = displayedFeaturedSpeakers.slice(6, 12);
  const row3Speakers = displayedFeaturedSpeakers.slice(12, 18);

  const carouselRow1 = [...row1Speakers.map(speaker => ({
    ...speaker,
    loopId: `r1-first-${speaker.id}`
  })), ...row1Speakers.map(speaker => ({
    ...speaker,
    loopId: `r1-second-${speaker.id}`
  }))];
  
  const carouselRow2 = [...row2Speakers.map(speaker => ({
    ...speaker,
    loopId: `r2-first-${speaker.id}`
  })), ...row2Speakers.map(speaker => ({
    ...speaker,
    loopId: `r2-second-${speaker.id}`
  }))];

  const carouselRow3 = [...row3Speakers.map(speaker => ({
    ...speaker,
    loopId: `r3-first-${speaker.id}`
  })), ...row3Speakers.map(speaker => ({
    ...speaker,
    loopId: `r3-second-${speaker.id}`
  }))];

  const activeClipSpeaker = activeClipSpeakerId ? FEATURED_SPEAKERS.find(speaker => speaker.id === activeClipSpeakerId) : undefined;
  const isSpeakerCarouselPaused = isSpeakerCarouselHovering || isSpeakerCarouselInteracting || prefersReducedMotion;

  const handleClipModalClose = React.useCallback(() => {
    clipIframeRef.current?.setAttribute('src', '');
    setActiveClipIframeSrc('');
    setActiveClipSpeakerId(null);
  }, []);

  const handleWatchClipOpen = (speakerId: string, youtubeId: string) => {
    setActiveClipSpeakerId(speakerId);
    setActiveClipIframeSrc(`https://www.youtube.com/embed/${youtubeId}?autoplay=1`);
  };

  const handleHeroThumbnailClick = (slideIndex: number) => {
    setActiveHeroSlide(slideIndex);
  };

  const handleFeaturedSpeakerFilterChange = (category: string) => {
    setActiveSpeakerCategory(category);
  };

  const handleSpeakerCarouselAdvance = (rowNum: 1 | 2 | 3, direction: 'previous' | 'next') => {
    let carousel: HTMLDivElement | null = null;
    let dirMultiplier = 1;
    
    if (rowNum === 1) {
      carousel = speakerCarouselRef1.current;
    } else if (rowNum === 2) {
      carousel = speakerCarouselRef2.current;
      dirMultiplier = -1; // Reverse scroll direction
    } else if (rowNum === 3) {
      carousel = speakerCarouselRef3.current;
    }
    
    if (!carousel) return;
    
    const firstCard = carousel.querySelector<HTMLElement>('[data-speaker-card="true"]');
    const cardTravel = firstCard?.offsetWidth ?? 340;
    
    setIsSpeakerCarouselInteracting(true);

    const seamlessLoopPoint = carousel.scrollWidth / 2;
    const amount = (direction === 'next' ? cardTravel : -cardTravel) * dirMultiplier;
    
    if (amount < 0 && carousel.scrollLeft < Math.abs(amount)) {
      carousel.scrollLeft += seamlessLoopPoint;
    }
    if (amount > 0 && carousel.scrollLeft > seamlessLoopPoint - amount) {
      carousel.scrollLeft -= seamlessLoopPoint;
    }
    
    carousel.scrollBy({
      left: amount,
      behavior: 'smooth'
    });

    window.setTimeout(() => setIsSpeakerCarouselInteracting(false), 900);
  };

  React.useEffect(() => {
    if (!activeClipSpeakerId) {
      return undefined;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClipModalClose();
      }
    };
    const originalBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeClipSpeakerId, handleClipModalClose]);

  React.useEffect(() => {
    const slideTimer = window.setTimeout(() => {
      setActiveHeroSlide(currentSlide => (currentSlide + 1) % HERO_SLIDES.length);
    }, HERO_SLIDE_DURATION_MS);
    return () => window.clearTimeout(slideTimer);
  }, [activeHeroSlide]);

  React.useEffect(() => {
    if (speakerCarouselRef1.current) speakerCarouselRef1.current.scrollLeft = 0;
    if (speakerCarouselRef2.current) speakerCarouselRef2.current.scrollLeft = 0;
    if (speakerCarouselRef3.current) speakerCarouselRef3.current.scrollLeft = 0;
    return undefined;
  }, [activeSpeakerCategory]);

  React.useEffect(() => {
    const c1 = speakerCarouselRef1.current;
    const c2 = speakerCarouselRef2.current;
    const c3 = speakerCarouselRef3.current;
    if (isSpeakerCarouselPaused) {
      return undefined;
    }
    
    // Set initial scroll position for the reverse row to avoid starting at 0
    if (c2 && c2.scrollLeft === 0) {
      const loopPoint = c2.scrollWidth / 2;
      if (loopPoint > 0) c2.scrollLeft = loopPoint;
    }

    let animationFrame = 0;
    let previousTimestamp = window.performance.now();
    const scrollStep = (timestamp: number) => {
      const deltaSeconds = (timestamp - previousTimestamp) / 1000;
      previousTimestamp = timestamp;
      const speed = 40; // Pixels per second

      // Row 1 (Left) - Pause only if row 1 is hovered
      if (c1 && !isHoveredRow1) {
        const seamlessLoopPoint = c1.scrollWidth / 2;
        c1.scrollLeft += speed * deltaSeconds;
        if (seamlessLoopPoint > 0 && c1.scrollLeft >= seamlessLoopPoint) {
          c1.scrollLeft -= seamlessLoopPoint;
        }
      }

      // Row 2 (Right / Reverse) - Pause only if row 2 is hovered
      if (c2 && !isHoveredRow2) {
        const seamlessLoopPoint = c2.scrollWidth / 2;
        c2.scrollLeft -= speed * deltaSeconds;
        if (seamlessLoopPoint > 0 && c2.scrollLeft <= 0) {
          c2.scrollLeft += seamlessLoopPoint;
        }
      }

      // Row 3 (Left) - Pause only if row 3 is hovered
      if (c3 && !isHoveredRow3) {
        const seamlessLoopPoint = c3.scrollWidth / 2;
        c3.scrollLeft += speed * deltaSeconds;
        if (seamlessLoopPoint > 0 && c3.scrollLeft >= seamlessLoopPoint) {
          c3.scrollLeft -= seamlessLoopPoint;
        }
      }

      animationFrame = window.requestAnimationFrame(scrollStep);
    };
    animationFrame = window.requestAnimationFrame(scrollStep);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [activeSpeakerCategory, isSpeakerCarouselPaused, isHoveredRow1, isHoveredRow2, isHoveredRow3]);

  return <motion.div initial={prefersReducedMotion ? {
    opacity: 0
  } : {
    opacity: 0,
    y: 12
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: prefersReducedMotion ? 0.35 : 0.6,
    ease: 'easeOut'
  }} className="min-h-screen w-full selection:bg-[#e30e04] selection:text-white font-['Kontora',sans-serif] overflow-x-hidden" style={{
    backgroundColor: COLORS.offWhite
  }}>
      <style>{`
        @import url('https://api.fontshare.com/v2/css?f[]=kontora@400,500,700&display=swap');
        body { font-family: 'Kontora', sans-serif; }
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .tsf-competency-card {
          min-width: 0;
          min-height: 0;
          flex: 1 1 0;
          height: 100%;
          transition: flex-grow 0.5s ease-in-out, box-shadow 0.5s ease-in-out, border-color 0.5s ease-in-out;
        }
        .tsf-competency-accordion {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          width: 100%;
          height: clamp(520px, 64vh, 720px);
        }
        .tsf-competency-accordion .tsf-competency-card:hover {
          flex-grow: 1.2;
          z-index: 20;
          border-color: rgba(227, 14, 4, 0.72);
          box-shadow: 0 28px 70px rgba(33, 33, 33, 0.34);
        }
        .tsf-competency-content {
          opacity: 1;
          transition: opacity 0.5s ease-in-out;
        }
        .tsf-competency-card:hover .tsf-competency-content {
          opacity: 1;
        }
        .tsf-competency-title {
          transition: letter-spacing 0.5s ease-in-out;
        }
        .tsf-competency-card:hover .tsf-competency-title {
          letter-spacing: -0.055em;
        }
        .tsf-competency-body {
          transition: opacity 0.5s ease-in-out;
        }
        .tsf-competency-cta {
          opacity: 0.84;
          transition: opacity 0.35s ease-in-out, background-color 0.35s ease-in-out, border-color 0.35s ease-in-out, color 0.35s ease-in-out, transform 0.35s ease-in-out;
        }
        .tsf-competency-card:hover .tsf-competency-cta {
          opacity: 1;
          transform: translateY(-2px);
          background-color: #e30e04;
          border-color: #e30e04;
          color: #FFFFFF;
        }
        @media (max-width: 767px) {
          .tsf-competency-accordion {
            height: 560px;
          }
        }
        @media (min-width: 768px) {
          .tsf-competency-accordion {
            height: 640px;
          }
        }
        .tsf-competency-visual {
          background-color: #0a0a0a;
          background-size: cover;
          background-position: center;
          filter: saturate(0.88) contrast(1.12);
          transition: filter 0.4s ease-in-out, transform 0.5s ease-in-out;
        }
        .tsf-competency-card:hover .tsf-competency-visual {
          filter: saturate(1.04) contrast(1.2);
          transform: scale(1.035);
        }
        .tsf-competency-visual::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          opacity: 0.92;
          background:
            radial-gradient(ellipse at 50% 30%, rgba(245, 245, 240, 0.18) 0%, transparent 22%),
            radial-gradient(ellipse at 50% 54%, rgba(0, 0, 0, 0.98) 0 7%, transparent 7.8%),
            linear-gradient(90deg, transparent 45%, rgba(0, 0, 0, 0.88) 45.4% 54.6%, transparent 55%),
            radial-gradient(ellipse at 50% 86%, rgba(0, 0, 0, 0.9) 0 18%, transparent 19%);
        }
        .tsf-competency-visual::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 2;
          opacity: 0.15;
          mix-blend-mode: screen;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E");
          background-size: 120px 120px;
        }
        .tsf-competency-overlay {
          background:
            linear-gradient(180deg, rgba(5, 5, 5, 0.28) 0%, rgba(5, 5, 5, 0.68) 52%, rgba(5, 5, 5, 0.94) 100%),
            radial-gradient(circle at 88% 12%, rgba(227, 14, 4, 0.08), transparent 32%);
          transition: background 0.4s ease-in-out, opacity 0.4s ease-in-out;
        }
        .tsf-competency-card:hover .tsf-competency-overlay {
          background:
            linear-gradient(180deg, rgba(5, 5, 5, 0.4) 0%, rgba(5, 5, 5, 0.78) 48%, rgba(5, 5, 5, 0.97) 100%),
            radial-gradient(circle at 84% 18%, rgba(227, 14, 4, 0.34), transparent 42%);
        }
        @media (max-width: 1023px) {
          .tsf-competency-accordion {
            flex-direction: column;
            height: auto;
            overflow: visible;
          }
          .tsf-competency-card {
            flex: none;
            width: 100%;
            height: auto;
            min-height: clamp(380px, 72vw, 560px);
            border-right: 0 !important;
            border-bottom: 1px solid rgba(199, 199, 200, 0.45);
          }
          .tsf-competency-card:last-child {
            border-bottom: 0;
          }
          .tsf-competency-accordion .tsf-competency-card:hover {
            flex-grow: 0;
            z-index: auto;
            border-color: rgba(199, 199, 200, 0.45);
            box-shadow: none;
          }
          .tsf-competency-card:hover .tsf-competency-title {
            letter-spacing: -0.04em;
          }
          .tsf-competency-card:hover .tsf-competency-visual {
            filter: saturate(0.88) contrast(1.12);
            transform: none;
          }
          .tsf-competency-card:hover .tsf-competency-cta {
            opacity: 0.84;
            transform: none;
            background-color: rgba(0, 0, 0, 0.1);
            border-color: rgba(248, 247, 245, 0.3);
            color: #F8F7F5;
          }
        }
        @media (hover: none), (pointer: coarse) {
          .tsf-competency-accordion .tsf-competency-card:hover {
            flex-grow: 1;
            z-index: auto;
            box-shadow: none;
          }
          .tsf-competency-card:hover .tsf-competency-visual {
            filter: saturate(0.88) contrast(1.12);
            transform: none;
          }
          .tsf-competency-card:hover .tsf-competency-overlay {
            background:
              linear-gradient(180deg, rgba(5, 5, 5, 0.28) 0%, rgba(5, 5, 5, 0.68) 52%, rgba(5, 5, 5, 0.94) 100%),
              radial-gradient(circle at 88% 12%, rgba(227, 14, 4, 0.08), transparent 32%);
          }
          .tsf-competency-card:hover .tsf-competency-cta {
            opacity: 0.84;
            transform: none;
            background-color: rgba(0, 0, 0, 0.1);
            border-color: rgba(248, 247, 245, 0.3);
            color: #F8F7F5;
          }
        }
        .tsf-competency-visual-leadership {
          background-image:
            radial-gradient(circle at 50% 18%, rgba(255, 255, 255, 0.62), transparent 7%),
            radial-gradient(circle at 30% 28%, rgba(227, 14, 4, 0.42), transparent 20%),
            radial-gradient(circle at 70% 24%, rgba(255, 241, 210, 0.28), transparent 18%),
            linear-gradient(115deg, #050505 0%, #17110f 42%, #030303 100%);
        }
        .tsf-competency-visual-economics {
          background-image:
            radial-gradient(circle at 52% 16%, rgba(245, 245, 240, 0.58), transparent 8%),
            radial-gradient(circle at 72% 26%, rgba(175, 176, 176, 0.28), transparent 22%),
            radial-gradient(circle at 24% 72%, rgba(227, 14, 4, 0.24), transparent 28%),
            linear-gradient(135deg, #060606 0%, #111417 50%, #020202 100%);
        }
        .tsf-competency-visual-innovation {
          background-image:
            radial-gradient(circle at 50% 16%, rgba(255, 255, 255, 0.62), transparent 8%),
            radial-gradient(circle at 22% 30%, rgba(227, 14, 4, 0.34), transparent 18%),
            radial-gradient(circle at 78% 28%, rgba(245, 245, 240, 0.25), transparent 22%),
            repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.045) 0 1px, transparent 1px 28px),
            linear-gradient(140deg, #040404 0%, #121212 48%, #060302 100%);
        }
        .tsf-competency-visual-transformation {
          background-image:
            radial-gradient(circle at 48% 18%, rgba(245, 245, 240, 0.56), transparent 8%),
            radial-gradient(circle at 26% 24%, rgba(255, 255, 255, 0.18), transparent 18%),
            radial-gradient(circle at 76% 64%, rgba(227, 14, 4, 0.32), transparent 30%),
            linear-gradient(128deg, #050505 0%, #15100f 46%, #020202 100%);
        }
        .tsf-signature-speaker-card {
          background-color: #212121;
          transition: border-color 0.35s ease-in-out, box-shadow 0.35s ease-in-out, transform 0.35s ease-in-out;
        }
        .tsf-signature-speaker-card:hover .tsf-competency-visual {
          filter: saturate(1.04) contrast(1.2);
          transform: scale(1.035);
        }
        .tsf-signature-speaker-card:hover .tsf-competency-overlay {
          background:
            linear-gradient(180deg, rgba(5, 5, 5, 0.4) 0%, rgba(5, 5, 5, 0.78) 48%, rgba(5, 5, 5, 0.97) 100%),
            radial-gradient(circle at 84% 18%, rgba(227, 14, 4, 0.34), transparent 42%);
        }
        .tsf-signature-speaker-name {
          transition: letter-spacing 0.5s ease-in-out;
        }
        .tsf-signature-speaker-card:hover .tsf-signature-speaker-name {
          letter-spacing: -0.055em;
        }
        .tsf-signature-speaker-card:hover .tsf-competency-cta {
          opacity: 1;
          transform: translateY(-2px);
          background-color: #e30e04;
          border-color: #e30e04;
          color: #FFFFFF;
        }
        @keyframes tsf-hero-slide-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .tsf-hero-progress-fill {
          transform-origin: left center;
          animation-name: tsf-hero-slide-progress;
          animation-duration: 5000ms;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }
        @media (max-width: 639px) {
          .tsf-hero-progress-group {
            width: min(100%, 272px);
          }
        }
      `}</style>
      <CurtainReveal />
      <ScrollProgressBar />
      <CustomCursor />
      <AnimatePresence>
        {activeClipSpeaker && <motion.div key="signature-speaker-video-modal" className="fixed inset-0 z-[500] flex items-center justify-center px-2 py-4 sm:px-6 sm:py-6" style={{
        backgroundColor: 'rgba(0,0,0,0.85)'
      }} initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} transition={{
        duration: prefersReducedMotion ? 0.18 : 0.28,
        ease: 'easeOut'
      }} onClick={event => {
        if (event.target === event.currentTarget) {
          handleClipModalClose();
        }
      }}>
            <motion.div role="dialog" aria-modal="true" aria-labelledby="signature-speaker-video-title" className="relative w-full max-w-[calc(100vw-16px)] rounded-[18px] border border-white/15 bg-[#050505] p-1.5 shadow-[0_34px_110px_rgba(0,0,0,0.62)] sm:max-w-5xl sm:rounded-[30px] sm:p-3" initial={prefersReducedMotion ? {
          opacity: 0
        } : {
          opacity: 0,
          scale: 0.94
        }} animate={{
          opacity: 1,
          scale: 1
        }} exit={prefersReducedMotion ? {
          opacity: 0
        } : {
          opacity: 0,
          scale: 0.96
        }} transition={{
          duration: prefersReducedMotion ? 0.18 : 0.32,
          ease: [0.22, 1, 0.36, 1]
        }} onClick={event => event.stopPropagation()}>
              <h2 id="signature-speaker-video-title" className="sr-only"><span>{activeClipSpeaker.name} video clip</span></h2>
              <button type="button" aria-label="Close video modal" onClick={handleClipModalClose} className="absolute right-2 top-2 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/75 text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md transition-colors duration-300 hover:border-[#e30e04] hover:bg-[#e30e04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e30e04] focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:right-4 sm:top-4 sm:h-10 sm:w-10">
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
              <div className="relative aspect-video w-full overflow-hidden rounded-[18px] bg-black sm:rounded-[24px]">
                <iframe ref={clipIframeRef} src={activeClipIframeSrc} title={`${activeClipSpeaker.name} YouTube video clip`} className="h-full w-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>

      <section ref={heroRef} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden sm:min-h-[720px] lg:h-[100vh]" style={{
      backgroundColor: COLORS.black
    }}>
        <div className="absolute inset-0 z-0 bg-[#111111]" aria-hidden="true">
          {HERO_SLIDES.map((slide, slideIndex) => <motion.img key={slide.id} src={slide.image} alt="" aria-hidden="true" className={cn("absolute inset-0 h-full w-full object-cover", slide.position || "object-center")} initial={false} animate={{
          opacity: activeHeroSlide === slideIndex ? 1 : 0,
          scale: activeHeroSlide === slideIndex ? 1 : 1.035
        }} transition={{
          opacity: {
            duration: prefersReducedMotion ? 0.2 : 1.2,
            ease: 'easeInOut'
          },
          scale: {
            duration: prefersReducedMotion ? 0.2 : 6,
            ease: 'easeOut'
          }
        }} />)}
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.38)_46%,rgba(0,0,0,0.3)_100%)]" />
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_18%_36%,rgba(0,0,0,0.08),transparent_34%),linear-gradient(90deg,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0.2)_42%,rgba(0,0,0,0.52)_100%)]" />
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.055]" style={{
          backgroundImage: NOISE_TEXTURE,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px'
        }} />
        </div>
        <VerticalBorderLines isDark />
        <div className="absolute inset-0 pointer-events-none z-20 hidden sm:block">
          <div className="relative h-full mx-auto max-w-[1440px] px-6 md:px-10">
            <motion.p initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 1.55,
            duration: 0.8
          }} className="absolute left-6 md:left-10 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.22em]" style={{
            color: COLORS.silverAlt
          }}>Johannesburg - Operating Globally</motion.p>
          </div>
        </div>
        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-center px-6 pb-20 pt-20 sm:pb-24 sm:pt-24 md:px-16 md:pb-20 md:pt-28 lg:pb-16 lg:pt-24">
          <AnimatedWordHeading as="h1" lines={HERO_HEADLINE_LINES} className="font-bold uppercase max-w-full drop-shadow-[0_8px_34px_rgba(0,0,0,0.38)]" style={{
          color: COLORS.offWhite
        }} wordClassName="mr-[0.13em]" />
          <motion.div aria-hidden="true" initial={{
          scaleX: 0,
          opacity: 0
        }} animate={{
          scaleX: 1,
          opacity: 1
        }} transition={{
          duration: prefersReducedMotion ? 0.35 : 0.74,
          delay: prefersReducedMotion ? 1.35 : 2.2,
          ease: HEADING_EASE
        }} className="mt-5 h-[3px] w-28 origin-left md:mt-7 md:w-40" style={{
          backgroundColor: COLORS.red
        }} />
          <div className="mt-6 flex max-w-[620px] flex-col gap-3 sm:mt-8">
            <motion.p initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 1.5,
            duration: 0.8
          }} className="text-[15px] font-normal leading-[1.6] md:text-[16px] md:leading-[1.65] drop-shadow-[0_6px_22px_rgba(0,0,0,0.45)]" style={{
            color: COLORS.silverAlt
          }}>We deploy seismic thinkers to catalyse change and engineer institutional impact.</motion.p>
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 1.7,
            duration: 0.8
          }} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <motion.a href="#brief-us" whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} className="flex w-full items-center gap-2 p-1.5 rounded-full border bg-white sm:w-auto" style={{
              borderColor: 'rgba(255, 255, 255, 0.18)'
            }}>
                <span className="flex flex-1 items-center justify-center gap-3 rounded-full px-5 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-white sm:flex-none sm:px-10 sm:py-4 sm:text-[13px]" style={{
                backgroundColor: COLORS.black
              }}><span>Brief the Bureau</span><ArrowRight aria-hidden="true" size={16} /></span>
              </motion.a>
              <div className="w-full rounded-full border px-6 py-3 text-center text-[12px] font-bold uppercase tracking-[0.1em] backdrop-blur-sm sm:w-auto sm:px-10 sm:py-4 sm:text-[13px] text-white/50 border-white/25 cursor-default select-none">
                Explore Categories
              </div>
            </motion.div>
          </div>
        </div>
        <div className="tsf-hero-progress-group absolute bottom-[102px] left-6 z-30 flex items-center gap-1.5 sm:bottom-[104px] sm:gap-2 md:left-16 lg:bottom-8" aria-label="Hero slide progress">
          {HERO_SLIDES.map((slide, slideIndex) => <button key={`progress-${slide.id}`} type="button" aria-label={`Show slide ${slideIndex + 1}: ${slide.alt}`} aria-current={activeHeroSlide === slideIndex ? 'true' : undefined} onClick={() => handleHeroThumbnailClick(slideIndex)} className={cn('group h-5 w-9 shrink-0 rounded-full px-0 py-2 transition-opacity duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e30e04] focus-visible:ring-offset-2 focus-visible:ring-offset-black min-[360px]:w-10 sm:w-12 md:w-14', activeHeroSlide === slideIndex ? 'opacity-100' : 'opacity-55 hover:opacity-85')}>
              <span className="block h-[2px] overflow-hidden rounded-full bg-white/30">
                <span key={activeHeroSlide === slideIndex ? `active-${slide.id}-${activeHeroSlide}` : `idle-${slide.id}`} className={cn('block h-full w-full rounded-full', activeHeroSlide === slideIndex ? 'tsf-hero-progress-fill bg-[#e30e04]' : 'bg-white/55')} style={{
              animationName: activeHeroSlide === slideIndex && prefersReducedMotion ? 'none' : undefined,
              transform: activeHeroSlide === slideIndex && prefersReducedMotion ? 'scaleX(1)' : undefined
            }} />
              </span>
            </button>)}
        </div>
        <div className="absolute bottom-5 left-6 right-6 z-30 max-w-none overflow-x-auto rounded-[18px] border border-white/10 bg-black/38 p-1.5 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:bottom-6 sm:rounded-[22px] sm:p-2 md:bottom-8 md:left-auto md:right-10 md:max-w-[calc(100vw-40px)]" aria-label="Hero image slides">
          <div className="flex w-max items-center gap-1 sm:gap-2">
            {HERO_SLIDES.map((slide, slideIndex) => <button key={`thumb-${slide.id}`} type="button" aria-label={`Show slide ${slideIndex + 1}: ${slide.alt}`} aria-current={activeHeroSlide === slideIndex ? 'true' : undefined} onClick={() => handleHeroThumbnailClick(slideIndex)} className={cn('h-[30px] w-[46px] shrink-0 overflow-hidden rounded-[9px] border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e30e04] focus-visible:ring-offset-2 focus-visible:ring-offset-black min-[360px]:h-[34px] min-[360px]:w-[52px] sm:h-[40px] sm:w-[64px] sm:rounded-[12px] md:h-[46px] md:w-[74px] lg:h-[50px] lg:w-[80px] lg:rounded-[14px]', activeHeroSlide === slideIndex ? 'scale-[1.06] border-[#e30e04]' : 'border-white/10 opacity-70 hover:opacity-100')}>
                <img src={slide.image} alt={`${slide.alt} thumbnail`} className="h-full w-full object-cover object-center" />
              </button>)}
          </div>
        </div>
      </section>

      <SocialProofStrip />

      <section aria-labelledby="featured-speakers-heading" className="relative w-full overflow-hidden border-b" style={{
      backgroundColor: COLORS.offWhite,
      borderColor: SOFT_RULE_COLOR
    }}>
        <VerticalBorderLines />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 pt-20 pb-0 sm:pt-24 sm:pb-0 md:px-16 md:pt-32 md:pb-0">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: prefersReducedMotion ? 0.35 : 0.6,
          ease: HEADING_EASE
        }} className="grid grid-cols-1 gap-7 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <div className={SECTION_TAG_CLASS} style={SECTION_TAG_STYLE}>
                <span>Spotlight</span>
              </div>
              <AnimatedWordHeading as="h2" id="featured-speakers-heading" lines={FEATURED_SPEAKERS_HEADING_LINES} className="mt-6 max-w-[780px] text-[clamp(3rem,12vw,6.75rem)] font-bold uppercase leading-[0.86] tracking-[-0.075em]" style={{
              color: COLORS.black
            }} wordClassName="mr-[0.11em]" />
            </div>
            <div className="block lg:col-span-1 lg:self-stretch">
              <div className="h-[1px] w-full lg:h-full lg:w-[1px]" style={{
              backgroundColor: COLORS.borderGray
            }} />
            </div>
            <div className="flex flex-col justify-end lg:col-span-4">
              <p aria-hidden="true" className="mb-3 font-serif text-[28px] italic leading-none tracking-[-0.06em] sm:text-[34px] lg:mb-5" style={{
              color: COLORS.silver
            }}>
                <span>Voices of Authority</span>
              </p>
              <p className="max-w-[520px] text-[17px] font-normal leading-[1.55] md:text-[22px]" style={{
              color: COLORS.gray
            }}>
                <span>Keynote voices shaping the global discourse on artificial intelligence, systemic change, and leadership.</span>
              </p>
            </div>
          </motion.div>
          <motion.div initial={{
          scaleX: 0,
          opacity: 0
        }} whileInView={{
          scaleX: 1,
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: prefersReducedMotion ? 0.35 : 0.85,
          delay: 0.08,
          ease: HEADING_EASE
        }} className="mt-10 h-[1px] w-full origin-left md:mt-12" style={{
          backgroundColor: COLORS.borderGray
        }} />
          <div className="mt-8 flex flex-col gap-5 md:mt-10 md:flex-row md:items-center">
            <div className="-mx-6 overflow-x-auto px-6 md:mx-0 md:overflow-visible md:px-0" aria-label="Filter Signature Speakers by category">
              <div className="flex w-max gap-2 md:w-auto md:flex-wrap">
                {FEATURED_SPEAKER_FILTERS.map(filter => <button key={filter.id} type="button" aria-pressed={activeSpeakerCategory === filter.label} onClick={() => handleFeaturedSpeakerFilterChange(filter.label)} className={cn('shrink-0 rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] transition-all duration-300', activeSpeakerCategory === filter.label ? 'border-[#e30e04] bg-[#e30e04] text-white shadow-[0_12px_32px_rgba(227,14,4,0.16)]' : 'border-black text-black hover:bg-black hover:text-white')}>
                    <span>{filter.label}</span>
                  </button>)}
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full mt-6 flex flex-col gap-0 overflow-hidden md:mt-8">
            {/* Row 1 */}
            <div className="relative group/row w-full">
              <button 
                type="button" 
                aria-label="Show previous speakers" 
                onClick={() => handleSpeakerCarouselAdvance(1, 'previous')} 
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 grid h-11 w-11 place-items-center rounded-full border bg-white/90 shadow-lg text-black transition-all duration-300 hover:bg-black hover:text-white md:opacity-0 md:group-hover/row:opacity-100 focus:opacity-100"
                style={{ borderColor: 'rgba(0,0,0,0.1)' }}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div 
                ref={speakerCarouselRef1} 
                onPointerEnter={() => setIsHoveredRow1(true)} 
                onPointerLeave={() => setIsHoveredRow1(false)}
                className="scrollbar-none w-full overflow-x-hidden" 
                aria-label="Auto-scrolling Signature Speakers carousel row 1"
              >
                <div className="flex w-max gap-0 py-2 pl-6 md:pl-16">
                  {carouselRow1.map((speaker) => (
                    <motion.article data-speaker-card="true" key={speaker.loopId} aria-label={`${speaker.name}, ${speaker.category}`} className="tsf-signature-speaker-card group relative isolate flex h-[280px] w-[280px] shrink-0 cursor-default overflow-hidden border border-[#C7C7C8]/45 bg-[#000000] transition-[border-color,box-shadow,transform] duration-[350ms] ease-in-out hover:z-30 hover:scale-[1.045] hover:border-[#e30e04]/70 hover:shadow-[0_28px_70px_rgba(33,33,33,0.34)] min-[380px]:h-[320px] min-[380px]:w-[320px] sm:h-[360px] sm:w-[360px] md:h-[400px] md:w-[400px] lg:h-[420px] lg:w-[420px]" style={{ backgroundColor: COLORS.black }}>
                      <img src={speaker.image} alt="" aria-hidden="true" className="tsf-competency-visual absolute inset-0 h-full w-full object-cover object-center" />
                      <div aria-hidden="true" className="tsf-competency-overlay absolute inset-0 z-10" />
                      <div aria-hidden="true" className="absolute inset-0 z-[11] opacity-0 transition-opacity duration-[420ms] group-hover:opacity-100" style={{
                        background: `linear-gradient(180deg, transparent 0%, ${speaker.tint} 48%, rgba(0,0,0,0.18) 100%)`
                      }} />
                      <div className="tsf-competency-content relative z-20 mt-auto flex min-h-[54%] w-full flex-col justify-end px-4 py-6 sm:px-5 sm:py-8 md:px-7 lg:px-8">
                        <h3 className="tsf-signature-speaker-name origin-left mt-2 text-[22px] font-bold uppercase leading-tight tracking-[-0.04em] text-[#F8F7F5] sm:text-[26px] md:text-[34px]">
                          <span>{speaker.name}</span>
                        </h3>
                        <p className="mt-3 max-w-[560px] text-[13px] font-normal leading-[1.6] text-[#AFAFBA] md:text-base md:leading-[1.65]">
                          {speaker.bio}
                        </p>
                        <div className="mt-5 flex translate-y-0 flex-col items-stretch gap-2 opacity-100 transition-all duration-[360ms] ease-in-out md:mt-6 md:flex-row md:items-center md:opacity-0 md:translate-y-3 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                          <a href="#brief-us" className="tsf-competency-cta inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#F8F7F5]/30 bg-black/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#F8F7F5] backdrop-blur-sm transition-all duration-[400ms] ease-in-out md:w-fit">
                            <span>Book Speaker</span>
                            <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
              <button 
                type="button" 
                aria-label="Show next speakers" 
                onClick={() => handleSpeakerCarouselAdvance(1, 'next')} 
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 grid h-11 w-11 place-items-center rounded-full border bg-white/90 shadow-lg text-black transition-all duration-300 hover:bg-black hover:text-white md:opacity-0 md:group-hover/row:opacity-100 focus:opacity-100"
                style={{ borderColor: 'rgba(0,0,0,0.1)' }}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Row 2 */}
            <div className="relative group/row w-full">
              <button 
                type="button" 
                aria-label="Show previous speakers" 
                onClick={() => handleSpeakerCarouselAdvance(2, 'previous')} 
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 grid h-11 w-11 place-items-center rounded-full border bg-white/90 shadow-lg text-black transition-all duration-300 hover:bg-black hover:text-white md:opacity-0 md:group-hover/row:opacity-100 focus:opacity-100"
                style={{ borderColor: 'rgba(0,0,0,0.1)' }}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div 
                ref={speakerCarouselRef2} 
                onPointerEnter={() => setIsHoveredRow2(true)} 
                onPointerLeave={() => setIsHoveredRow2(false)}
                className="scrollbar-none w-full overflow-x-hidden" 
                aria-label="Auto-scrolling Signature Speakers carousel row 2"
              >
                <div className="flex w-max gap-0 py-2 pl-6 md:pl-16">
                  {carouselRow2.map((speaker) => (
                    <motion.article data-speaker-card="true" key={speaker.loopId} aria-label={`${speaker.name}, ${speaker.category}`} className="tsf-signature-speaker-card group relative isolate flex h-[280px] w-[280px] shrink-0 cursor-default overflow-hidden border border-[#C7C7C8]/45 bg-[#000000] transition-[border-color,box-shadow,transform] duration-[350ms] ease-in-out hover:z-30 hover:scale-[1.045] hover:border-[#e30e04]/70 hover:shadow-[0_28px_70px_rgba(33,33,33,0.34)] min-[380px]:h-[320px] min-[380px]:w-[320px] sm:h-[360px] sm:w-[360px] md:h-[400px] md:w-[400px] lg:h-[420px] lg:w-[420px]" style={{ backgroundColor: COLORS.black }}>
                      <img src={speaker.image} alt="" aria-hidden="true" className="tsf-competency-visual absolute inset-0 h-full w-full object-cover object-center" />
                      <div aria-hidden="true" className="tsf-competency-overlay absolute inset-0 z-10" />
                      <div aria-hidden="true" className="absolute inset-0 z-[11] opacity-0 transition-opacity duration-[420ms] group-hover:opacity-100" style={{
                        background: `linear-gradient(180deg, transparent 0%, ${speaker.tint} 48%, rgba(0,0,0,0.18) 100%)`
                      }} />
                      <div className="tsf-competency-content relative z-20 mt-auto flex min-h-[54%] w-full flex-col justify-end px-4 py-6 sm:px-5 sm:py-8 md:px-7 lg:px-8">
                        <h3 className="tsf-signature-speaker-name origin-left mt-2 text-[22px] font-bold uppercase leading-tight tracking-[-0.04em] text-[#F8F7F5] sm:text-[26px] md:text-[34px]">
                          <span>{speaker.name}</span>
                        </h3>
                        <p className="mt-3 max-w-[560px] text-[13px] font-normal leading-[1.6] text-[#AFAFBA] md:text-base md:leading-[1.65]">
                          {speaker.bio}
                        </p>
                        <div className="mt-5 flex translate-y-0 flex-col items-stretch gap-2 opacity-100 transition-all duration-[360ms] ease-in-out md:mt-6 md:flex-row md:items-center md:opacity-0 md:translate-y-3 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                          <a href="#brief-us" className="tsf-competency-cta inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#F8F7F5]/30 bg-black/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#F8F7F5] backdrop-blur-sm transition-all duration-[400ms] ease-in-out md:w-fit">
                            <span>Book Speaker</span>
                            <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
              <button 
                type="button" 
                aria-label="Show next speakers" 
                onClick={() => handleSpeakerCarouselAdvance(2, 'next')} 
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 grid h-11 w-11 place-items-center rounded-full border bg-white/90 shadow-lg text-black transition-all duration-300 hover:bg-black hover:text-white md:opacity-0 md:group-hover/row:opacity-100 focus:opacity-100"
                style={{ borderColor: 'rgba(0,0,0,0.1)' }}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Row 3 */}
            <div className="relative group/row w-full">
              <button 
                type="button" 
                aria-label="Show previous speakers" 
                onClick={() => handleSpeakerCarouselAdvance(3, 'previous')} 
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 grid h-11 w-11 place-items-center rounded-full border bg-white/90 shadow-lg text-black transition-all duration-300 hover:bg-black hover:text-white md:opacity-0 md:group-hover/row:opacity-100 focus:opacity-100"
                style={{ borderColor: 'rgba(0,0,0,0.1)' }}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div 
                ref={speakerCarouselRef3} 
                onPointerEnter={() => setIsHoveredRow3(true)} 
                onPointerLeave={() => setIsHoveredRow3(false)}
                className="scrollbar-none w-full overflow-x-hidden" 
                aria-label="Auto-scrolling Signature Speakers carousel row 3"
              >
                <div className="flex w-max gap-0 py-2 pl-6 md:pl-16">
                  {carouselRow3.map((speaker) => (
                    <motion.article data-speaker-card="true" key={speaker.loopId} aria-label={`${speaker.name}, ${speaker.category}`} className="tsf-signature-speaker-card group relative isolate flex h-[280px] w-[280px] shrink-0 cursor-default overflow-hidden border border-[#C7C7C8]/45 bg-[#000000] transition-[border-color,box-shadow,transform] duration-[350ms] ease-in-out hover:z-30 hover:scale-[1.045] hover:border-[#e30e04]/70 hover:shadow-[0_28px_70px_rgba(33,33,33,0.34)] min-[380px]:h-[320px] min-[380px]:w-[320px] sm:h-[360px] sm:w-[360px] md:h-[400px] md:w-[400px] lg:h-[420px] lg:w-[420px]" style={{ backgroundColor: COLORS.black }}>
                      <img src={speaker.image} alt="" aria-hidden="true" className="tsf-competency-visual absolute inset-0 h-full w-full object-cover object-center" />
                      <div aria-hidden="true" className="tsf-competency-overlay absolute inset-0 z-10" />
                      <div aria-hidden="true" className="absolute inset-0 z-[11] opacity-0 transition-opacity duration-[420ms] group-hover:opacity-100" style={{
                        background: `linear-gradient(180deg, transparent 0%, ${speaker.tint} 48%, rgba(0,0,0,0.18) 100%)`
                      }} />
                      <div className="tsf-competency-content relative z-20 mt-auto flex min-h-[54%] w-full flex-col justify-end px-4 py-6 sm:px-5 sm:py-8 md:px-7 lg:px-8">
                        <h3 className="tsf-signature-speaker-name origin-left mt-2 text-[22px] font-bold uppercase leading-tight tracking-[-0.04em] text-[#F8F7F5] sm:text-[26px] md:text-[34px]">
                          <span>{speaker.name}</span>
                        </h3>
                        <p className="mt-3 max-w-[560px] text-[13px] font-normal leading-[1.6] text-[#AFAFBA] md:text-base md:leading-[1.65]">
                          {speaker.bio}
                        </p>
                        <div className="mt-5 flex translate-y-0 flex-col items-stretch gap-2 opacity-100 transition-all duration-[360ms] ease-in-out md:mt-6 md:flex-row md:items-center md:opacity-0 md:translate-y-3 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                          <a href="#brief-us" className="tsf-competency-cta inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#F8F7F5]/30 bg-black/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#F8F7F5] backdrop-blur-sm transition-all duration-[400ms] ease-in-out md:w-fit">
                            <span>Book Speaker</span>
                            <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
              <button 
                type="button" 
                aria-label="Show next speakers" 
                onClick={() => handleSpeakerCarouselAdvance(3, 'next')} 
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 grid h-11 w-11 place-items-center rounded-full border bg-white/90 shadow-lg text-black transition-all duration-300 hover:bg-black hover:text-white md:opacity-0 md:group-hover/row:opacity-100 focus:opacity-100"
                style={{ borderColor: 'rgba(0,0,0,0.1)' }}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-16 pb-20 sm:pb-24 md:pb-[120px]">
            <motion.div initial={{
          opacity: 0,
          y: 18
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.18
        }} className="mt-12 flex w-full justify-center md:mt-16">
            <a href="#faculty" className="flex w-full justify-center rounded-full border px-8 py-4 text-[12px] font-bold uppercase tracking-[0.1em] transition-colors duration-300 hover:text-white sm:w-auto sm:px-10 sm:text-[13px]" style={{
            borderColor: COLORS.borderGray,
            color: COLORS.black,
            backgroundColor: 'transparent'
          }} onMouseEnter={event => {
            event.currentTarget.style.backgroundColor = COLORS.red;
            event.currentTarget.style.borderColor = COLORS.red;
            event.currentTarget.style.color = '#FFFFFF';
          }} onMouseLeave={event => {
            event.currentTarget.style.backgroundColor = 'transparent';
            event.currentTarget.style.borderColor = COLORS.borderGray;
            event.currentTarget.style.color = COLORS.black;
          }}>
              <span>View All Speakers</span>
            </a>
          </motion.div>
        </div>
      </section>

      <section id="methodology" className="relative w-full" style={{
      backgroundColor: COLORS.black,
      borderColor: DARK_RULE_COLOR
    }}>
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none z-0" style={{
        backgroundImage: NOISE_TEXTURE,
        backgroundRepeat: 'repeat',
        backgroundSize: '128px 128px'
      }} />
        <VerticalBorderLines isDark />
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-20 sm:py-24 md:py-32 relative z-10">
          <motion.div initial={{
          scale: 0.9,
          opacity: 0
        }} whileInView={{
          scale: 1,
          opacity: 1
        }} viewport={{
          once: true
        }} className={SECTION_TAG_CLASS} style={SECTION_TAG_STYLE}>Exclusivity by Design</motion.div>
          <AnimatedWordHeading as="h2" lines={METHODOLOGY_HEADING_LINES} className="text-[clamp(2.5rem,9vw,4.25rem)] font-bold tracking-[-0.05em] leading-[1.05] uppercase max-w-[1080px] mt-6" style={{
          color: COLORS.silverAlt
        }} />
          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.blockquote initial={{
            opacity: 0,
            y: 24
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="lg:col-span-4 font-serif text-[clamp(2.375rem,9vw,3.875rem)] italic leading-[1.08] tracking-[-0.055em]" style={{
            color: COLORS.offWhite
          }}>A select circle. Not a catalogue.</motion.blockquote>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="relative pb-10 lg:col-span-8">
              <div className="flex flex-wrap items-baseline gap-x-[0.4em] gap-y-0 leading-[1.3] md:leading-[1.5]">
                {POSITION_WORDS.map((segment, order) => <motion.span key={segment.id} initial={{
                opacity: 0
              }} whileInView={{
                opacity: 1
              }} viewport={{
                once: true
              }} whileHover={{
                color: '#e30e04'
              }} transition={{
                duration: 0.4,
                delay: order * 0.015,
                ease: 'linear',
                color: {
                  duration: 0.15
                }
              }} className={cn('text-[24px] md:text-[32px] lg:text-[36px] font-bold tracking-tight uppercase cursor-default', segment.isHighlighted ? 'text-[#AFB0B0]' : 'text-[#393939]')}>{segment.text}</motion.span>)}
              </div>
              <motion.div initial={{
              scaleX: 0
            }} whileInView={{
              scaleX: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 1.5,
              ease: 'easeInOut'
            }} className="absolute bottom-4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#AFB0B0]/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/*
      <section className="relative w-full" style={{
      borderColor: SOFT_RULE_COLOR
    }}>
        <VerticalBorderLines />
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-14 md:pb-16 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="flex flex-col">
            <div className={cn(SECTION_TAG_CLASS, 'self-start')} style={SECTION_TAG_STYLE}>What We Do</div>
            <AnimatedWordHeading as="h2" lines={CORE_COMPETENCIES_HEADING_LINES} className="text-[clamp(2.5rem,10vw,4rem)] font-bold tracking-[-0.05em] uppercase mt-4 leading-[0.98]" style={{
            color: COLORS.black
          }} />
          </motion.div>
        </div>
        <div className="tsf-competency-accordion relative left-1/2 w-screen -translate-x-1/2 border-y border-[#C7C7C8] overflow-hidden lg:overflow-hidden">
          {COMPETENCIES.map((comp, order) => <motion.div key={comp.id} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: order * 0.1
        }} className="tsf-competency-card group relative isolate overflow-hidden cursor-default border-r border-[#C7C7C8]/45 last:border-r-0" style={{
          backgroundColor: COLORS.black
        }}>
              <img src={comp.image} alt={`${comp.title} speaker session`} className={cn('tsf-competency-visual absolute inset-0 h-full w-full object-cover object-center', comp.visualClassName)} />
              <div aria-hidden="true" className="tsf-competency-overlay absolute inset-0 z-10" />
              <div className="tsf-competency-content relative z-20 flex h-full flex-col justify-end px-5 py-8 md:px-7 lg:px-8">
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] lg:col-span-1" style={{
              color: COLORS.silverAlt
            }}>{comp.id}</span>
                <h3 className="tsf-competency-title origin-left text-[24px] md:text-[34px] font-bold uppercase tracking-[-0.04em] mt-2 leading-tight lg:col-span-5 lg:mt-0" style={{
              color: COLORS.offWhite
            }}>{comp.title}</h3>
                <p className="tsf-competency-body text-[14px] md:text-base font-normal leading-[1.65] mt-3 max-w-[560px] lg:col-span-5 lg:mt-0" style={{
              color: COLORS.silverAlt
            }}>{comp.body}</p>
                <motion.div initial={{
              scaleX: 0
            }} whileInView={{
              scaleX: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 1,
              ease: 'circOut',
              delay: 0.4
            }} className="h-[2px] w-12 mt-5 origin-left lg:col-span-1 lg:mt-0" style={{
              backgroundColor: COLORS.red
            }} />
                <div className="tsf-competency-cta mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#F8F7F5]/20 bg-black/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#F8F7F5]/60 backdrop-blur-sm md:px-5 md:py-2.5 md:text-[11px] cursor-default select-none">
                  <span>Explore Track</span>
                  <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 opacity-40" />
                </div>
              </div>
            </motion.div>)}
        </div>
        <div className="pb-20 sm:pb-24 md:pb-32" />
      </section>
      */}

      {/*
      <section id="faculty" className="relative w-full overflow-hidden" style={{
      borderColor: SOFT_RULE_COLOR
    }}>
        <VerticalBorderLines />
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-20 sm:py-24 md:py-32 relative z-10">
          <div className="grid grid-cols-12 gap-8 items-end mb-16">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="col-span-12 md:col-span-5">
              <div className={SECTION_TAG_CLASS} style={SECTION_TAG_STYLE}>Highlighted Faculty</div>
              <div className="w-full h-[1px] mt-6" style={{
              backgroundColor: COLORS.borderGray
            }} />
              <AnimatedWordHeading as="h2" lines={FACULTY_HEADING_LINES} className="text-[clamp(2.75rem,11vw,4rem)] font-bold tracking-[-0.05em] leading-[0.95] uppercase mt-6" style={{
              color: COLORS.black
            }} />
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.15
          }} className="col-span-12 md:col-span-7 flex flex-col items-start md:items-end justify-end">
              <p className="text-[18px] md:text-[22px] font-normal leading-[1.5] text-left md:text-right max-w-[420px]" style={{
              color: COLORS.gray
            }}>A select circle. Not a catalogue.</p>
              <p className="text-[13px] font-normal text-left md:text-right max-w-[420px] mt-4" style={{
              color: COLORS.silver
            }}>Every faculty member is handpicked for systemic fluency, lived authority, and the capacity to move rooms.</p>
              <form className="mt-8 w-full max-w-[520px]" role="search" onSubmit={event => event.preventDefault()}>
                <label htmlFor="faculty-search" className="sr-only">Search faculty</label>
                <div className="relative border-b pb-3 transition-colors duration-300 focus-within:border-[#e30e04]" style={{
                borderColor: COLORS.borderGray
              }}>
                  <input id="faculty-search" value={localSearch} onChange={handleFacultySearchChange} type="search" placeholder="Search by name, topic, or expertise..." className="w-full bg-transparent pr-11 text-[18px] font-normal leading-none tracking-[-0.03em] outline-none placeholder:text-[#686869] md:text-right md:text-[20px]" style={{
                  color: COLORS.black
                }} />
                  <button type="submit" aria-label="Submit faculty search" className="absolute right-0 top-0 grid h-7 w-7 place-items-center transition-transform duration-300 hover:scale-105 active:scale-95" style={{
                  color: COLORS.red
                }}>
                    <Search aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
          {normalizedFacultySearchQuery.length > 0 && displayedFaculty.length === 0 && <p className="mb-10 text-center font-serif text-[22px] italic tracking-[-0.03em]" style={{
          color: COLORS.gray
        }}>No faculty found for that query.</p>}
          <div className="grid grid-cols-12 gap-6 md:gap-8">
            {displayedFaculty.map((member, order) => <motion.article key={member.id} initial={{
            opacity: 0,
            y: 40
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            amount: 0.3
          }} whileHover={prefersReducedMotion ? undefined : {
            y: -6,
            boxShadow: '0 24px 70px rgba(33, 33, 33, 0.26)',
            transition: {
              duration: 0.3,
              ease: 'easeOut'
            }
          }} transition={{
            duration: prefersReducedMotion ? 0.35 : 0.6,
            ease: HEADING_EASE,
            delay: prefersReducedMotion ? 0 : order * 0.1
          }} onMouseEnter={() => setHoveredId(member.id)} onMouseLeave={() => setHoveredId(null)} onClick={() => router.push(`/tracks/${member.trackId}/${member.id}`)} className={cn(member.spanClassName, 'bg-[#000000] rounded-[22px] overflow-hidden group cursor-pointer relative isolate flex flex-col border border-[#000000] transition-colors duration-[400ms] ease-out hover:border-[#e30e04]/70')}>
                <div className="w-full h-[clamp(340px,92vw,440px)] md:h-[520px] overflow-hidden relative bg-[#000000]">
                  <motion.div className="absolute inset-0 bg-[#000000] z-10 origin-top" initial={{
                scaleY: 1
              }} whileInView={{
                scaleY: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.9,
                ease: [0.76, 0, 0.24, 1],
                delay: member.wipeDelay
              }} />
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover object-center grayscale saturate-0 transition-[filter,transform] duration-[400ms] ease-out group-hover:grayscale-0 group-hover:saturate-100 group-hover:scale-[1.035]" />
                </div>
                <div className="mt-auto p-6 md:p-7 relative z-20 bg-[#000000] transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{
                color: COLORS.red
              }}>{member.designation}</p>
                  <h3 className="font-serif text-[28px] md:text-[34px] font-normal tracking-[-0.045em] leading-[1.02] mt-2" style={{
                color: COLORS.offWhite
              }}>{member.name}</h3>
                  <span aria-hidden="true" className="mt-3 block h-[1px] w-0 transition-all duration-[400ms] ease-out group-hover:w-16" style={{
                backgroundColor: COLORS.red
              }} />
                  <p className="text-[14px] md:text-[15px] font-normal leading-[1.5] mt-3 max-w-[560px]" style={{
                color: COLORS.silver
              }}>{member.role}</p>
                </div>
                <AnimatePresence>
                  {hoveredId === member.id && <motion.div initial={{
                y: '100%',
                opacity: 0
              }} animate={{
                y: 0,
                opacity: 1
              }} exit={{
                y: '100%',
                opacity: 0
              }} transition={{
                duration: 0.4,
                ease: [0.32, 0.72, 0, 1]
              }} className="absolute bottom-0 left-0 right-0 z-30 px-6 pb-6 pt-10" style={{
                backgroundColor: 'rgba(33,33,33,0.85)'
              }}>
                      <span aria-hidden="true" className="mb-4 block h-[2px] w-14" style={{
                  backgroundColor: COLORS.red
                }} />
                      <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-white"><span>View Profile</span><ArrowUpRight className="w-4 h-4" /></div>
                      <p className="text-[12px] font-normal leading-[1.6] max-w-[280px] mt-1" style={{
                  color: COLORS.silverAlt
                }}>{member.snippet}</p>
                    </motion.div>}
                </AnimatePresence>
              </motion.article>)}
          </div>
        </div>
      </section>
      */}

      <section aria-label="Placement principle" className="relative w-full" style={{
      backgroundColor: COLORS.offWhite
    }}>
        <VerticalBorderLines />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-24 text-center sm:py-32 md:px-16 md:py-48">
          <AnimatedWordHeading as="h2" lines={BRIDGE_HEADING_LINES} className="mx-auto max-w-[1180px] font-serif text-[clamp(3rem,15vw,7.625rem)] font-light italic leading-[0.98] tracking-[-0.06em]" style={{
          color: COLORS.black
        }} />
          <p className="mx-auto mt-8 max-w-[640px] text-[18px] font-light leading-[1.7] md:text-[22px]" style={{
          color: COLORS.gray
        }}>The right voice for the right room, every time.</p>
        </div>
      </section>

      <div id="dialogues" className="overflow-hidden">
        <BeyondThePodium />
      </div>

      <section id="roundtable" className="relative w-full border-t border-b" style={{
        backgroundColor: COLORS.offWhite,
        borderColor: SOFT_RULE_COLOR
      }}>
        <VerticalBorderLines />
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 pt-20 sm:pt-24 md:pt-[120px] pb-10 relative z-10">
          <div className="flex flex-col gap-6">
            <div className={cn(SECTION_TAG_CLASS, 'self-start')} style={SECTION_TAG_STYLE}>
              <span>Roundtables</span>
            </div>
            <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-bold tracking-[-0.04em] leading-none uppercase mt-4" style={{
              color: COLORS.black
            }}>
              Roundtable Discussions
            </h2>
            <p className="max-w-[620px] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.55]" style={{
              color: COLORS.gray
            }}>
              Authoritative dialogue series gathering corporate statesmen, key intellectuals, and leaders to address strategic and transformation challenges.
            </p>
          </div>
        </div>

        <div className="w-full px-6 md:px-16 pb-20 sm:pb-24 md:pb-[120px] relative z-10">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-6 space-y-6">
            {ROUNDTABLE_INVITES.map((invite) => (
              <div 
                key={invite.id} 
                className="break-inside-avoid relative overflow-hidden rounded-2xl border border-black/10 bg-white group cursor-pointer transition-all duration-500 hover:border-[#e30e04]/50 hover:shadow-2xl"
                onClick={() => setActiveInviteImage(invite.src)}
              >
                <img 
                  src={invite.src} 
                  alt={invite.alt} 
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-6">
                  <div className="text-white">
                    <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#e30e04]">Discussion Invite</p>
                    <h3 className="text-sm font-bold uppercase tracking-[0.05em] mt-1">{invite.alt}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      <AnimatePresence>
        {activeInviteImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveInviteImage(null)}
            className="fixed inset-0 z-[300] flex items-center justify-center bg-black/95 p-4 cursor-zoom-out"
          >
            <button 
              type="button" 
              className="absolute right-6 top-6 z-50 text-white hover:text-[#e30e04] transition-colors"
              onClick={() => setActiveInviteImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={activeInviteImage} 
                alt="Enlarged Roundtable invite" 
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <BriefBureauFormSection />
    </motion.div>;
};
