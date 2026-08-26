"use client";

import * as React from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { AnimatePresence, motion, useAnimationControls, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Menu, Play, Quote, Search, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BeyondThePodium } from './BeyondThePodium';
import { WhyChooseUs } from './WhyChooseUs';
import { RecommendedSpeakers } from './RecommendedSpeakers';
import { CATEGORIES_CONFIG, CATEGORY_SPEAKERS_MAP } from '@/lib/categories';
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
  id: 'john-sanei',
  image: '/speakers/John Sanei/John-Sanei-The-Speakers-Firm-6.jpg',
  mobileImage: '/hero_backgrounds/John-Sanei-mobile.jpg',
  alt: 'John Sanei',
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

const FEATURED_SPEAKERS_RAW: Array<{
  id: string;
  name: string;
  category: string | string[];
  image: string;
  alt: string;
  quote: string;
  youtubeId: string;
  topics: string[];
  tint: string;
  bio: React.ReactNode;
  trackId?: string;
}> = [{
  id: 'phumzile-mlambo-ngcuka',
  name: 'Dr. Phumzile Mlambo-Ngcuka',
  category: ['Leadership', 'Governance'],
  image: '/speakers/Governance/Phumzile-Mlambo-Ngcuka-The-Speakers-Firm.jpg',
  alt: 'Dr. Phumzile Mlambo-Ngcuka',
  quote: 'Education and equality are the cornerstones of progress.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Global Stateswoman, Former UN Under-Secretary-General & Deputy President</span>
}, {
  id: 'bonang-mohale',
  name: 'Prof. Bonang Mohale',
  category: ['Governance', 'Keynote', 'Motivation'],
  image: '/speakers/Governance/Bonang-Mohale-The-Speakers-Firm.jpg',
  alt: 'Prof. Bonang Mohale',
  quote: 'Servant leadership is the ultimate competitive edge.',
  youtubeId: '2s5CXK-w0AQ',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.25)',
  bio: <span>Corporate Statesman, Business Leader & Author</span>
}, {
  id: 'nozipho-tshabalala',
  name: 'Nozipho Tshabalala',
  category: ['Keynote', 'MCs'],
  image: '/speakers/MCs/Nozipho-Tshabalala-The-Speakers-Firm.jpg',
  alt: 'Nozipho Tshabalala',
  quote: 'Facilitating conversations that matter for Africa’s development.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.25)',
  bio: <span>Global Moderator, Conversation Architect & Broadcast Journalist</span>,
  trackId: 'mcs'
}, {
  id: 'prince-mashele',
  name: 'Prince Mashele',
  category: 'Geopolitics',
  image: '/speaker_thumbnails/Prince-Mashele-The-Speakers-Firm.jpg',
  alt: 'Prince Mashele',
  quote: 'Understanding political dynamics is key to future stability.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.25)',
  bio: <span>Political Analyst, Columnist & Public Intellectual</span>,
  trackId: 'geopolitics'
}, {
  id: 'clement-manyathela',
  name: 'Clement Manyathela',
  category: 'MCs',
  image: '/speaker_thumbnails/Clement-Manyathela-The-Speakers-Firm.jpg',
  alt: 'Clement Manyathela',
  quote: 'Conversations that shift minds and inspire outcomes.',
  youtubeId: 'iG9CE55wbtY',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.26)',
  bio: <span>Award-Winning Broadcaster, Radio Talk-Show Host, Moderator & Public-Dialogue Facilitator</span>,
  trackId: 'mcs'
}, {
  id: 'sizwe-mpofu-walsh',
  name: 'Dr. Sizwe Mpofu-Walsh',
  category: 'Future of Work',
  image: '/speakers/FutureOfWork/Sizwe-Mpofu-Walsh-The-Speakers-Firm.jpg',
  alt: 'Dr. Sizwe Mpofu-Walsh',
  quote: 'Dismantling old paradigms to rebuild robust institutions.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.25)',
  bio: <span>Lecturer in the Department of International Relations at Wits University, Podcaster, Author, Musician and Activist</span>,
  trackId: 'future-of-work'
}, {
  id: 'khaya-sithole',
  name: 'Khaya Sithole',
  category: 'Economics',
  image: '/speakers/Economics/Khaya-Sithole-The-Speakers-Firm.jpg',
  alt: 'Khaya Sithole',
  quote: 'Decoding public finance with accountability and transparency.',
  youtubeId: 'arj7oStGLkU',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.26)',
  bio: <span>Accountant, Broadcaster & Economic Analyst</span>,
  trackId: 'economics-markets-and-the-global-economy'
}, {
  id: 'siphiwe-moyo',
  name: 'Siphiwe Moyo',
  category: ['Leadership', 'Governance', 'Organisational Agility', 'Neuroscience', 'Team-Building'],
  image: '/speaker_thumbnails/Siphiwe-Moyo-The-Speakers-Firm.jpg',
  alt: 'Siphiwe Moyo',
  quote: 'Resilience is not about bouncing back, it is about bouncing forward.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.25)',
  bio: <span>Global Speaker, Author & Organisational Development Specialist</span>,
  trackId: 'change-resilience-and-organisational-agility'
}, {
  id: 'lincoln-mali',
  name: 'Lincoln Mali',
  category: ['Leadership', 'Organisational Agility'],
  image: '/image_marquee/leadership/Lincoln-Mali-The-Speakers-Firm.jpg',
  alt: 'Lincoln Mali',
  quote: 'Leadership is a journey of influence, integrity, and impact.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Corporate Executive, Leadership Writer & CEO</span>,
  trackId: 'leadership-governance-and-risk-intelligence'
}, {
  id: 'stafford-masie',
  name: 'Stafford Masie',
  category: ['A.I.', 'Futurists', 'Business Transformation'],
  image: '/image_marquee/stafford-masie-the-speakers-firm.jpg',
  alt: 'Stafford Masie',
  quote: 'Technology is not about gadgets, it is about human empowerment.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.26)',
  bio: <span>Technology Futurist, Former CEO of Google SA & Angel Investor</span>,
  trackId: 'leadership-governance-and-risk-intelligence'
}, {
  id: 'abdullah-verachia',
  name: 'Abdullah Verachia',
  category: ['Future of Work', 'Futurists'],
  image: '/image_marquee/leadership/Abdullah-Verachia-The-Speakers-Firm.jpg',
  alt: 'Abdullah Verachia',
  quote: 'Navigating disruption requires cognitive flexibility and strategy.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.25)',
  bio: <span>Global Strategist, Author & Executive Director</span>
}, {
  id: 'cathy-mohlahlana',
  name: 'Cathy Mohlahlana',
  category: 'MCs',
  image: '/speaker_thumbnails/Cathy-Mohlahlana--The-Speakers-Firm-The-Speakers-Firm.jpg',
  alt: 'Cathy Mohlahlana',
  quote: 'Reporting with integrity, presenting with clarity.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.25)',
  bio: <span>Award-Winning Broadcaster, News Anchor, Moderator & Strategic Communications Professional</span>
}, {
  id: 'john-sanei',
  name: 'John Sanei',
  category: ['Futurists', 'A.I.', 'Business Transformation'],
  image: '/image_marquee/John-Sanei-The-Speakers-Firm.jpg',
  alt: 'John Sanei',
  quote: 'We need to prepare for the future, not just react to it.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Global Futurist, Best-Selling Author & Transformation Specialist</span>
}, {
  id: 'alistair-mokoena',
  name: 'Dr Alistair Mokoena',
  category: ['Branding', 'Future of Work', 'A.I.'],
  image: '/speakers/FutureOfWork/Dr-Alistair-Mokoena-The-Speakers-Firm.jpg',
  alt: 'Dr Alistair Mokoena',
  quote: 'Strong brands are built on authentic human connections.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.26)',
  bio: <span>The Architect of Digital Futures, Country Director: Google South Africa</span>
}, {
  id: 'sylvester-chauke',
  name: 'Sylvester Chauke',
  category: ['Keynote', 'Branding'],
  image: '/speakers/Branding/Sylvester-Chauke--The-Speakers-Firm.jpg',
  alt: 'Sylvester Chauke',
  quote: 'Building brands that resonate with authentic African soul.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Founder and Chief Architect, DNA Brand Architects | Professor of Practice, UJ</span>
}, {
  id: 'mzamo-masito',
  name: 'Dr Mzamo Masito',
  category: ['Keynote', 'Branding'],
  image: '/speakers/Branding/Mzamo-Masito-The-Speakers-Firm.jpg',
  alt: 'Dr Mzamo Masito',
  quote: 'Transforming businesses, empowering communities.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>Africa Regional Lead, Canva | Founder, African Men Care</span>
}, {
  id: 'muzi-kuzwayo',
  name: 'Muzi Kuzwayo',
  category: 'Keynote',
  image: '/speaker_thumbnails/Muzi-Kuzwayo--The-Speakers-Firm.jpg',
  alt: 'Muzi Kuzwayo',
  quote: 'Unlocking promise, driving marketing excellence.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>Founder, Ignitive | Chairman, South Africa’s Promise | Author</span>
}, {
  id: 'mushambi-mutuma',
  name: 'Mushambi Mutuma',
  category: 'Keynote',
  image: '/speakers/Keynote/Mushambi-Mutuma-The-Speakers-Firm.jpg',
  alt: 'Mushambi Mutuma',
  quote: 'Leading technology transformation and executive strategy.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>Keynote Speaker | Author | Executive Adviser & Tech Leader</span>
}, {
  id: 'tshilidzi-marwala',
  name: 'Prof. Tshilidzi Marwala',
  category: ['Keynote', 'A.I.'],
  image: '/speakers/AI/Prof-Tshilidzi-Marwala-The-Speakers-Firm.jpg',
  alt: 'Prof. Tshilidzi Marwala',
  quote: 'Artificial intelligence is the engine of the modern world.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.25)',
  bio: <span>Rector, United Nations University | Under-Secretary-General, UN</span>
}, {
  id: 'sipho-maseko',
  name: 'Sipho Maseko',
  category: ['Keynote', 'A.I.'],
  image: '/speakers/AI/Sipho-Maseko-The-Speakers-Firm.jpg',
  alt: 'Sipho Maseko',
  quote: 'Strategic corporate turnarounds for long-term growth.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>Investor | Turnaround Strategist | Former Group CEO, Telkom SA</span>
}, {
  id: 'tryphosa-ramano',
  name: 'Tryphosa Ramano',
  category: 'Keynote',
  image: '/speakers/Keynote/Tryphosa-Ramano-The-Speakers-Firm.jpg',
  alt: 'Tryphosa Ramano',
  quote: 'Financial leadership that drives transformation.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>Corporate Executive, Financial Services Leader & Speaker</span>,
  trackId: 'leadership-governance-and-risk-intelligence'
}, {
  id: 'zukie-siyotula',
  name: 'Nozukiso “Zukie” Siyotula',
  category: 'Keynote',
  image: '/speakers/Keynote/Zukie-Siyotula-The-Speakers-Firm.jpg',
  alt: 'Nozukiso “Zukie” Siyotula',
  quote: 'Empowering boardroom strategies and global investment.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>Boardroom Power Broker, Inspirational Speaker & Executive</span>
}, {
  id: 'gerry-rantseli-elsdon',
  name: 'Gerry Rantseli-Elsdon',
  category: ['Keynote', 'MCs'],
  image: '/speakers/MCs/Gerry-Rantseli-Elsdon-The-Speakers-Firm.jpg',
  alt: 'Gerry Rantseli-Elsdon',
  quote: 'Inspirational broadcasting and global humanitarian leadership.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Business Executive, International Humanitarian, Television Personality & Master of Ceremonies</span>
}, {
  id: 'nombasa-tsengwa',
  name: 'Dr Nombasa Tsengwa',
  category: 'Keynote',
  image: '/speakers/Keynote/Nombasa-Tsengwa-The-Speakers-Firm.jpg',
  alt: 'Dr Nombasa Tsengwa',
  quote: 'Sustainability and executive leadership in modern mining.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>Mining Executive, Sustainability Leader & Advocate for Women</span>
}, {
  id: 'thuli-madonsela-keynote',
  name: 'Prof. Thuli Madonsela',
  category: ['Keynote', 'Governance'],
  image: '/speakers/Governance/Thuli-Madonsela-The-Speakers-Firm-The-Speakers-Firm.jpg',
  alt: 'Prof. Thuli Madonsela',
  quote: 'Justice and integrity are the cornerstones of democracy.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.25)',
  bio: <span>Former Public Protector, Global Voice for Integrity & Governance</span>
}, {
  id: 'nene-molefi',
  name: 'Nene Molefi',
  category: ['Keynote', 'Governance'],
  image: '/speakers/Governance/Nene-Molefi-The-Speakers-Firm.jpg',
  alt: 'Nene Molefi',
  quote: 'Cultural transformation starts with equity and inclusion.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.25)',
  bio: <span>The Inclusion Vanguard, Diversity & Cultural Specialist</span>
}, {
  id: 'vumile-msweli',
  name: 'Dr. Vumile Msweli',
  category: ['Keynote', 'Future of Work'],
  image: '/speakers/FutureOfWork/Dr-Vumile-Msweli-The-Speakers-Firm.jpg',
  alt: 'Dr. Vumile Msweli',
  quote: 'Empowering global careers and organizational human capital.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>Chief Executive Officer, Hesed Consulting, International Keynote Speaker, Redefining People, Leadership & the Future of Work</span>
}, {
  id: 'azania-mosaka',
  name: 'Azania Mosaka',
  category: ['Keynote', 'MCs', 'Reputation', 'Sales'],
  image: '/speakers/MCs/Azania-Mosaka-The-Speakers-Firm.jpg',
  alt: 'Azania Mosaka',
  quote: 'Strategic communications and media influence.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Broadcaster, Moderator, Strategic Communications Expert & Entrepreneur</span>
}, {
  id: 'femi-adebanji',
  name: 'Femi Adebanji',
  category: ['Keynote', 'Governance'],
  image: '/speakers/Governance/Femi-Adebanji-The-Speakers-Firm.jpg',
  alt: 'Femi Adebanji',
  quote: 'Building global leadership and customer experience excellence.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>Leadership Speaker, Customer Experience Strategist & Expert</span>
}, {
  id: 'nyimpini-mabunda',
  name: 'Nyimpini Mabunda',
  category: ['Keynote', 'Governance', 'Sales'],
  image: '/speakers/Governance/Nyimpini-Mabunda-The-Speakers-Firm.jpg',
  alt: 'Nyimpini Mabunda',
  quote: 'Boardroom strategy and corporate leadership in action.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>Boardroom Strategist, Chief Executive, Author & Global Leader</span>
}, {
  id: 'maanda-tshifularo',
  name: 'Dr Maanda Tshifularo',
  category: ['Keynote', 'Governance'],
  image: '/speakers/Governance/Maanda-Tshifularo-The-Speakers-Firm.jpg',
  alt: 'Dr Maanda Tshifularo',
  quote: 'Bridging leadership theory with boardroom execution.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>Leadership Expert, Strategy Adviser & Practical Strategist</span>
}, {
  id: 'andisa-liba',
  name: 'Andisa Liba',
  category: ['Keynote', 'Future of Work'],
  image: '/speakers/FutureOfWork/Andisa-Liba-The-Speakers-Firm.jpg',
  alt: 'Andisa Liba',
  quote: 'Fostering future of work cultures and human capital excellence.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>Chief People Officer, FloatPays, Award-Winning HR Executive & Conference Speaker</span>
}, {
  id: 'themba-maseko',
  name: 'Themba Maseko',
  category: ['Keynote', 'Reputation'],
  image: '/speakers/Keynote/Themba-Maseko--The-Speakers-Firm.jpg',
  alt: 'Themba Maseko',
  quote: 'Public policy and strategic government communications.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>Former Government Spokesperson, Public Policy Commentator</span>
}, {
  id: 'sindy-mabe',
  name: 'Sindy Mabe',
  category: 'MCs',
  image: '/speakers/MCs/Sindy-Mabe-The-Speakers-Firm.jpg',
  alt: 'Sindy Mabe',
  quote: 'Anchoring and hosting events with journalistic precision.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>Television News Anchor, Journalist, Moderator & Event Host</span>
}, {
  id: 'michelle-craig',
  name: 'Michelle Craig',
  category: 'MCs',
  image: '/speakers/MCs/Michelle-Craig-The-Speakers-Firm.jpg',
  alt: 'Michelle Craig',
  quote: 'Guiding high-level dialogues and corporate conferences.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>Broadcaster, Moderator, Conference Chairperson & Event Host</span>
}, {
  id: 'thami-ngubeni',
  name: 'Thami Ngubeni',
  category: 'MCs',
  image: '/speakers/MCs/Thami-Ngubeni-The-Speakers-Firm.jpg',
  alt: 'Thami Ngubeni',
  quote: 'Inspiring thought leadership and media excellence.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>Media Personality, Author, Producer, Moderator & Thought Leader</span>
}, {
  id: 'thabo-mdluli',
  name: 'Thabo Mdluli',
  category: 'MCs',
  image: '/speakers/MCs/Thabo-Mdluli-The-Speakers-Firm.jpg',
  alt: 'Thabo Mdluli',
  quote: 'Broadcasting and moderating events with clarity and poise.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Television Presenter, Broadcaster, Moderator & Master of Ceremonies</span>
}, {
  id: 'victor-kgomoeswana',
  name: 'Victor Kgomoeswana',
  category: ['MCs', 'Economics', 'Business Transformation'],
  image: '/speakers/MCs/Victor-Kgomoeswana-The-Speakers-Firm.jpg',
  alt: 'Victor Kgomoeswana',
  quote: 'African business insights and expert conference moderation.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>Africa Business Specialist, Author, Broadcaster & Conference Moderator</span>
}, {
  id: 'bongiwe-zwane',
  name: 'Bongiwe Zwane',
  category: 'MCs',
  image: '/speakers/MCs/Bongiwe-Zwane-The-Speakers-Firm.jpg',
  alt: 'Bongiwe Zwane',
  quote: 'Facilitating critical conversations and news analysis.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>News Anchor, Television Host, Journalist & Facilitator</span>
}, {
  id: 'kgomotso-monyai',
  name: 'Kgomotso Monyai',
  category: 'MCs',
  image: '/speakers/MCs/Kgomotso-Monyai-The-Speakers-Firm.jpg',
  alt: 'Kgomotso Monyai',
  quote: 'Hosting corporate events and panel discussions.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>Television Broadcaster, Panel Moderator & Event Host</span>
}, {
  id: 'kayise-ngqula',
  name: 'Kayise Ngqula',
  category: 'MCs',
  image: '/speaker_thumbnails/Kayise-Ngcula-The-Speakers-Firm2.jpg',
  alt: 'Kayise Ngqula',
  quote: 'Advocating for social impact and media production excellence.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Media Executive, Executive Producer, Broadcaster, Speaker & Social-Impact Advocate</span>
}, {
  id: 'nqaba-mabece',
  name: 'Nqaba Mabece',
  category: 'MCs',
  image: '/speaker_thumbnails/Nqaba-Mabece-The-Speakers-Firm.jpg',
  alt: 'Nqaba Mabece',
  quote: 'Legal insights and strategic stakeholder engagement.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>Broadcaster, Legal and Policy Professional, Moderator & Strategic Stakeholder-Engagement Specialist</span>
}, {
  id: 'hulisani-ravele',
  name: 'Hulisani Ravele',
  category: 'MCs',
  image: '/speaker_thumbnails/Hulisani-Ravele-The-Speakers-Firm.jpg',
  alt: 'Hulisani Ravele',
  quote: 'Media personality and seasoned event hosting.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>Seasoned Broadcaster, Television Presenter, Moderator & Media Personality</span>
}, {
  id: 'penny-lebyane',
  name: 'Penny Lebyane',
  category: 'MCs',
  image: '/speaker_thumbnails/Penny-Lebyane-The-Speakers-Firm.jpg',
  alt: 'Penny Lebyane',
  quote: 'Radio hosting and professional event facilitation.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>Radio Broadcaster, Media Facilitator, Moderator & Master of Ceremonies</span>
}, {
  id: 'khaya-dlanga',
  name: 'Khaya Dlanga',
  category: 'MCs',
  image: '/speaker_thumbnails/Khaya-Dlanga-The-Speakers-Firm-2.jpg',
  alt: 'Khaya Dlanga',
  quote: 'Creative storytelling and marketing leadership.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Author, Marketing Executive, Storyteller & Conference Facilitator</span>
}, {
  id: 'thembekile-mrototo',
  name: 'Thembekile Mrototo',
  category: 'MCs',
  image: '/speakers/MCs/Thembekile-Mrototo-The-Speakers-Firm.jpg',
  alt: 'Thembekile Mrototo',
  quote: 'Delivering news and event hosting with precision.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>News Anchor, Broadcaster, Moderator & Event Host</span>
}, {
  id: 'rami-chuene',
  name: 'Rami Chuene',
  category: 'MCs',
  image: '/speakers/MCs/Rami-Chuene-The-Speakers-Firm.jpg',
  alt: 'Rami Chuene',
  quote: 'Creative expression and dynamic public speaking.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>Actress, Author, Public Speaker, Master of Ceremonies & Voice-Over Artist</span>
}, {
  id: 'naledi-moleo',
  name: 'Naledi Moleo',
  category: 'MCs',
  image: '/speakers/MCs/Naledi-Moleo-The-Speakers-Firm.jpg',
  alt: 'Naledi Moleo',
  quote: 'News anchor and professional media presentation.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>News Anchor, Radio Host, Television Presenter, Producer & Moderator</span>
}, {
  id: 'nimrod-nkosi',
  name: 'Nimrod Nkosi',
  category: ['MCs', 'Team-Building'],
  image: '/speakers/MCs/Nimrod-Nkosi-The-Speakers-Firm.jpg',
  alt: 'Nimrod Nkosi',
  quote: 'Professional acting and corporate master of ceremonies.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Television Presenter, Actor, Master of Ceremonies & Event Host</span>
}, {
  id: 'criselda-kananda',
  name: 'Criselda Kananda',
  category: 'MCs',
  image: '/speakers/MCs/Criselda-Kananda-The-Speakers-Firm.jpg',
  alt: 'Criselda Kananda',
  quote: 'Advocating for health and humanitarian causes.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>Broadcaster, Humanitarian, Health Advocate, Facilitator & Master of Ceremonies</span>
}, {
  id: 'putco-mafani',
  name: 'Putco Mafani',
  category: 'MCs',
  image: '/speakers/MCs/Putco-Mafani-The-Speakers-Firm.jpg',
  alt: 'Putco Mafani',
  quote: 'Inspiring audiences and hosting corporate events.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>Radio Broadcaster, Motivational Speaker & Master of Ceremonies</span>
}, {
  id: 'tbo-touch',
  name: 'Thabo “Tbo Touch” Molefe',
  category: 'MCs',
  image: '/speakers/MCs/tbo-touch3.jpg',
  alt: 'Thabo “Tbo Touch” Molefe',
  quote: 'Media entrepreneurship and creative business leadership.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>Media Entrepreneur, Broadcaster, Business Leader & Event Host</span>
}, {
  id: 'mpho-popps',
  name: 'Mpho “Popps” Modikoane',
  category: ['MCs', 'comedy'],
  image: '/speakers/Comedy/Mpho-Popps-The-Speakers-Firm.jpg',
  alt: 'Mpho “Popps” Modikoane',
  quote: 'Injecting humor and charisma into premium events.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Award-Winning Comedian, Actor, Television Host & Master of Ceremonies</span>
}, {
  id: 'eugene-khoza',
  name: 'Eugene Khoza',
  category: ['MCs', 'comedy'],
  image: '/speakers/Comedy/Eugene-Khoza-The-Speakers-Firm.jpg',
  alt: 'Eugene Khoza',
  quote: 'Writing, comedy, and media moderation.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>Comedian, Writer, Broadcaster, Moderator & Master of Ceremonies</span>
}, {
  id: 'peter-ndoro',
  name: 'Peter Ndoro',
  category: 'MCs',
  image: '/speakers/MCs/Peter-Ndoro-The-Speakers-Firm2.jpg',
  alt: 'Peter Ndoro',
  quote: 'Veteran broadcasting and global conference facilitation.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>Veteran Broadcast Journalist, Conference Facilitator, Moderator & Master of Ceremonies</span>
}, {
  id: 'hector-motivator',
  name: 'Hector Motivator',
  category: ['MCs', 'Team-Building'],
  image: '/speakers/MCs/Hector-Motivator.jpg',
  alt: 'Hector Motivator',
  quote: 'Energizing audiences and hosting dynamic events.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>Broadcaster, Author, Motivational Speaker & Master of Ceremonies</span>
}, {
  id: 'sibusiso-molimi',
  name: 'Sibusiso Molimi',
  category: 'MCs',
  image: '/speakers/MCs/Sibusiso-Molimi-The-Speakers-Firm.jpg',
  alt: 'Sibusiso Molimi',
  quote: 'Shifting perspectives and managing corporate programmes.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Master of Ceremonies, Keynote Speaker, Entrepreneur & Perspective-Shifter</span>
}, {
  id: 'proverb',
  name: 'Tebogo “ProVerb” Thekisho',
  category: ['MCs', 'Media', 'Entrepreneurship'],
  image: '/speakers/Entrepreneurship/Tebogo-ProVerb-Thekisho.jpg',
  alt: 'Tebogo “ProVerb” Thekisho',
  quote: 'Media entrepreneurship and hosting with distinction.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>Media Personality, Author, Entrepreneur, Speaker & Master of Ceremonies</span>
}, {
  id: 'noni-khumalo',
  name: 'Nonhlanhla “Noni” Khumalo',
  category: 'MCs',
  image: '/speakers/MCs/Noni-Khumalo-The-Speakers-Firm.jpg',
  alt: 'Nonhlanhla “Noni” Khumalo',
  quote: 'Producing and hosting premium corporate ceremonies.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>Radio and Television Broadcaster, Producer & Corporate Events MC</span>
}, {
  id: 'thapelo-mokoena',
  name: 'Thapelo Mokoena',
  category: ['MCs', 'Media', 'Entrepreneurship', 'Organisational Agility'],
  image: '/speakers/Entrepreneurship/Thapelo-Mokoena-The-Speakers-Firm.jpg',
  alt: 'Thapelo Mokoena',
  quote: 'Storytelling, entrepreneurship, and master of ceremonies.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>Actor, Entrepreneur, Producer, Speaker, Moderator & Master of Ceremonies</span>
}, {
  id: 'bridget-masinga-mc',
  name: 'Bridget Masinga',
  category: 'MCs',
  image: '/speakers/MCs/Bridget-Masinga-The-Speakers-Firm.jpg',
  alt: 'Bridget Masinga',
  quote: 'Broadcasting and public speaking with elegance.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Radio Host, Television Personality, Producer, Public Speaker & Master of Ceremonies</span>
}, {
  id: 'aubrey-masango-mc',
  name: 'Aubrey Masango',
  category: 'MCs',
  image: '/speakers/MCs/Aubrey-Masango-The-Speakers-Firm.jpg',
  alt: 'Aubrey Masango',
  quote: 'Intellectual dialogue and engaging event facilitation.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>Radio Personality, Broadcaster, Moderator & Master of Ceremonies</span>
}, {
  id: 'bridget-masinga',
  name: 'Bridget Masinga',
  category: ['MCs'],
  image: '/speakers/Bridget Masinga/Bridget-Masinga-The-Speakers-Firm.jpg',
  alt: 'Bridget Masinga',
  quote: 'Live stages are spaces to build connections and elevate stories.',
  youtubeId: 'lT4ihmin7mw',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>Master of Ceremonies, Facilitator & Broadcaster</span>,
  trackId: 'mc-and-facilitators'
}, {
  id: 'dr-brenda-kubheka',
  name: 'Dr. Brenda Kubheka',
  category: ['Governance', 'Workplace Wellness'],
  image: '/speakers/Dr. Brenda Kubheka/Dr-Brenda-Kubheka-The-Speakers-Firm.jpg',
  alt: 'Dr. Brenda Kubheka',
  quote: 'Institutional resilience is built on the wellness and ethics of its people.',
  youtubeId: 'rCgg4Jzoq7Y',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>Medical Doctor, Bioethics Scholar & Governance Expert</span>,
  trackId: 'leadership-governance-and-risk-intelligence'
}, {
  id: 'trudy-theledi',
  name: 'Trudy Theledi',
  category: ['MCs', 'Future of Work', 'Entrepreneurship', 'Organisational Agility'],
  image: '/speakers/Entrepreneurship/Trudy-Theledi-The-Speakers-Firm.jpg',
  alt: 'Trudy Theledi',
  quote: 'Directing programmes and hosting events with grace.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>MC, Broadcaster</span>
}, {
  id: 'boniwe-dunster',
  name: 'Boniwe Dunster',
  category: ['Future of Work', 'Organisational Agility', 'Neuroscience', 'Team-Building'],
  image: '/speakers/FutureOfWork/Boniwe-Dunster-The-Speakers-Firm.jpg',
  alt: 'Boniwe Dunster',
  quote: 'Nurturing leadership capability and corporate agility.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>Executive Manager, Finalist, 2022 IPM HR Practitioner of the Year, Acclaimed Speaker, Facilitator</span>
}, {
  id: 'callan-abrahams',
  name: 'Callan Abrahams',
  category: ['Future of Work', 'A.I.', 'Organisational Agility', 'Neuroscience'],
  image: '/speakers/FutureOfWork/Callan-Abrahams-The-Speakers-Firm.jpg',
  alt: 'Callan Abrahams',
  quote: 'Fostering mental resilience and strategic workplace leadership.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>The Voice of Resilience, Mental Health & Leadership Strategist</span>
}, {
  id: 'puleng-mokhoalibe',
  name: 'Dr. Puleng Mokhoalibe',
  category: ['Future of Work', 'A.I.', 'Business Transformation'],
  image: '/speakers/FutureOfWork/Dr-Puleng-Mokhoalibe--The-Speakers-Firm.jpg',
  alt: 'Dr. Puleng Mokhoalibe',
  quote: 'Catalysing innovation through design thinking and future strategy.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>The Innovation Catalyst, Design Thinking & Future Strategy Specialist</span>
}, {
  id: 'kgomotso-mamello-motshidi',
  name: 'Kgomotso Mamello Motshidi',
  category: ['Future of Work', 'A.I.'],
  image: '/speakers/FutureOfWork/Kgomotso-Mamello-Motshidi-The-Speakers-Firm.jpg',
  alt: 'Kgomotso Mamello Motshidi',
  quote: 'Leveraging capital, investment, and technology for Africa’s growth.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>The Capital Maven, Investment Entrepreneur & Wealth Builder</span>
}, {
  id: 'manqoba-zungu',
  name: 'Manqoba Zungu',
  category: 'Future of Work',
  image: '/speakers/FutureOfWork/Manqoba-Zungu-The-Speakers-Firm.jpg',
  alt: 'Manqoba Zungu',
  quote: 'Shaping future-ready skills and leading youth employability.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>TEDx Speaker, WEF Young Global Leader, Part-Time Faculty at GIBS & AmazuluFC Business College, CEO, GetReadySkills & Business Executive, SoluGrowth</span>
}, {
  id: 'mncane-mthunzi',
  name: 'Dr Mncane Mthunzi',
  category: ['Future of Work', 'Economics', 'Business Transformation', 'Sales'],
  image: '/speakers/FutureOfWork/Mncane-Mthunzi-The-Speakers-Firm.jpg',
  alt: 'Dr Mncane Mthunzi',
  quote: 'Driving business turnaround and operational excellence.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>Business Turnaround Strategist, Operational Excellence Practitioner and Scholar</span>
}, {
  id: 'ntandoyenkosi-kunene-radzuma',
  name: 'Ntandoyenkosi Kunene-Radzuma',
  category: 'Future of Work',
  image: '/speakers/FutureOfWork/Ntandoyenkosi-Kunene-Radzuma-The-Speakers-Firm.jpg',
  alt: 'Ntandoyenkosi Kunene-Radzuma',
  quote: 'Empowering future leaders and advocating for educational reform.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Miss South Africa 2016, Programme Lead, Author & Speaker, Coach & Education Activist Shaping Leadership, Culture & People Futures</span>
}, {
  id: 'tseliso-mohlomi',
  name: 'Tseliso Mohlomi',
  category: 'Future of Work',
  image: '/speakers/FutureOfWork/Tseliso-Mohlomi-The-Speakers-Firm.jpg',
  alt: 'Tseliso Mohlomi',
  quote: 'Architecting intercultural communication and ethical organizational futures.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>Senior Director, Institute for the Future of Work at TUT, Architect of Culture, Storytelling, and Ethical Futures</span>
}, {
  id: 'buyani-zwane',
  name: 'Dr Buyani Zwane',
  category: ['Governance', 'Organisational Agility', 'Neuroscience', 'Sustainability'],
  image: '/speakers/Governance/Dr-Buyani-Zwane-The-Speakers-Firm.jpg',
  alt: 'Dr Buyani Zwane',
  quote: 'Building people, culture, and alignment in resilient organizations.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>The People & Culture Builder, Leadership Coach & Organisational Strategist</span>
}, {
  id: 'david-molapo',
  name: 'Dr David Molapo',
  category: ['Governance', 'Organisational Agility', 'Neuroscience', 'Team-Building'],
  image: '/speakers/Governance/Dr-David-Molapo-The-Speakers-Firm-2.jpg',
  alt: 'Dr David Molapo',
  quote: 'Empowering leadership through transformation, mentoring and inspiration.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>The Leadership Mentor, Inspirational Speaker & Transformation Strategist</span>
}, {
  id: 'eunice-cross',
  name: 'Dr Eunice Cross',
  category: ['Governance', 'Entrepreneurship'],
  image: '/speakers/Entrepreneurship/Dr-Eunice-Cross-The-Speakers-Firm.jpg',
  alt: 'Dr Eunice Cross',
  quote: 'Legal advising, entrepreneurship and boardroom agility.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Attorney, Entrepreneur, and Founder of EC Advisory</span>
}, {
  id: 'john-kani',
  name: 'Dr John Kani',
  category: 'Governance',
  image: '/speakers/Governance/Dr-John-Kani-The-Speakers-Firm.jpg',
  alt: 'Dr John Kani',
  quote: 'Telling stories that shape cultural heritage and boardroom dynamics.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>The Living Legend, Actor, Playwright & Cultural Icon</span>
}, {
  id: 'maureen-tong',
  name: 'Dr Maureen Tong',
  category: 'Governance',
  image: '/speakers/Governance/Dr-Maureen-Tong-The-Speakers-Firm.jpg',
  alt: 'Dr Maureen Tong',
  quote: 'Advocating gender power and leadership in institutional reform.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>The Governance & Gender Powerhouse, Leadership Coach & Institutional Reform Specialist</span>
}, {
  id: 'dudu-msomi',
  name: 'Dudu Msomi',
  category: 'Governance',
  image: '/speakers/Governance/Dudu-Msomi-The-Speakers-Firm.jpg',
  alt: 'Dudu Msomi',
  quote: 'Bridging strategic board advisory and ethical corporate governance.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>The Governance Architect, Board Advisor & Strategy Specialist</span>
}, {
  id: 'lerato-sithole',
  name: 'Lerato Sithole',
  category: 'Governance',
  image: '/speakers/Governance/Lerato-Sithole-The-Speakers-Firm.jpg',
  alt: 'Lerato Sithole',
  quote: 'Architecting brand visibility, influence and marketing strategy.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>The Brand & Influence Architect | Marketing, Media & Leadership Specialist</span>
}, {
  id: 'mazwe-majola',
  name: 'Prof Mazwe Majola',
  category: 'Governance',
  image: '/speakers/Governance/Prof-Mazwe-Majola-The-Speakers-Firm.jpg',
  alt: 'Prof Mazwe Majola',
  quote: 'Strengthening gender development and national policy advisors.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>The Governance & Gender Powerhouse, Leadership Coach & Institutional Reform Specialist</span>
}, {
  id: 'sthembiso-phakathi',
  name: 'Sthembiso Phakathi',
  category: ['Governance', 'Business Transformation'],
  image: '/speakers/Governance/sthembiso-phakathi-The-Speakers-Firm.jpg',
  alt: 'Sthembiso Phakathi',
  quote: 'Analyzing organizational dynamics, change, and corporate strategy.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>The Organisational Dynamics Analyst, Culture, Change & Strategy Advisor</span>
}, {
  id: 'abner-mariri',
  name: 'Abner Mariri',
  category: ['Governance', 'Organisational Agility', 'Team-Building'],
  image: '/speakers/Governance/Abner-Mariri-The-Speakers-Firm.jpg',
  alt: 'Abner Mariri',
  quote: 'Motivating team performance and catalytic business growth.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>The Performance Catalyst, Leadership, Motivation & Growth Specialist</span>
}, {
  id: 'ntosh-madlingozi',
  name: 'Ntobeko “Ntosh” Madlingozi',
  category: ['MCs', 'comedy'],
  image: '/speakers/Comedy/Ntosh-Madlingozi-The-Speakers-Firm.jpg',
  alt: 'Ntobeko “Ntosh” Madlingozi',
  quote: 'Shifting cultural paradigms through sharp, insightful comedy.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>Comedy Maverick & Cultural Provocateur</span>
}, {
  id: 'ndumiso-lindi',
  name: 'Ndumiso Lindi',
  category: ['MCs', 'comedy'],
  image: '/speakers/Comedy/Ndumiso-Lindi-The-Speakers-Firm.jpg',
  alt: 'Ndumiso Lindi',
  quote: 'Authentic storytelling that brings people together through laughter.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>Gentleman of South African Comedy & Storytelling Voice</span>
}, {
  id: 'kagiso-kg-mokgadi',
  name: 'Kagiso “KG” Mokgadi',
  category: ['MCs', 'comedy'],
  image: '/speakers/Comedy/Kagiso-KG-Mokgadi-The-Speakers-Firm.jpg',
  alt: 'Kagiso “KG” Mokgadi',
  quote: 'Satirizing cultural dynamics and sharing compelling narratives.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Storyteller, Comedian & Cultural Disruptor</span>
}, {
  id: 'kagiso-lediga',
  name: 'Kagiso Lediga',
  category: ['MCs', 'comedy'],
  image: '/speakers/Comedy/Kagiso-Lediga-The-Speakers-Firm.jpg',
  alt: 'Kagiso Lediga',
  quote: 'Pioneering satirical representation in film and live storytelling.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>Pioneer of Satirical Storytelling & Film Disruption</span>
}, {
  id: 'isaac-gampu',
  name: 'Isaac Gampu',
  category: ['MCs', 'comedy'],
  image: '/speakers/Comedy/Isaac-Gampu-The-Speakers-Firm.jpg',
  alt: 'Isaac Gampu',
  quote: 'Wielding wit as social commentary to connect generations.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>Veteran Voice of Satire & Social Commentary</span>
}, {
  id: 'tol-ass-mo',
  name: 'Tol Ass Mo',
  category: ['MCs', 'comedy'],
  image: '/speakers/Comedy/Tol-As-Mo-The-Speakers-Firm.jpg',
  alt: 'Tol Ass Mo',
  quote: 'Unapologetic truth-telling that disrupts corporate complacency.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>Unapologetic Truth-Teller & Disruption Artist</span>
}, {
  id: 'duma-gqubule',
  name: 'Duma Gqubule',
  category: 'Economics',
  image: '/speakers/Economics/Duma-Gqubule-The-Speakers-Firm.jpg',
  alt: 'Duma Gqubule',
  quote: 'Advocating radical transformation and macroeconomic reform.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>Economist, Financial Commentator & Transformation Strategist</span>
}, {
  id: 'pali-lehohla',
  name: 'Dr. Pali Lehohla',
  category: 'Economics',
  image: '/speakers/Economics/Pali-Lehohla-The-Speakers-Firm.jpg',
  alt: 'Dr. Pali Lehohla',
  quote: 'Strengthening nation building through development economics and statistics.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>Former Statistician-General & Development Economist</span>
}, {
  id: 'elias-masilela',
  name: 'Elias Masilela',
  category: 'Economics',
  image: '/speakers/Economics/Elias-Masilela-The-Speakers-Firm.jpg',
  alt: 'Elias Masilela',
  quote: 'Designing social security policies and corporate governance structures.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Economist, Former PIC CEO & Policy Architect</span>
}, {
  id: 'sifiso-skenjana',
  name: 'Sifiso Skenjana',
  category: 'Economics',
  image: '/speakers/Economics/Sifiso-Skenjana-The-Speakers-Firm.jpg',
  alt: 'Sifiso Skenjana',
  quote: 'Driving inclusive financial growth and developmental advisory.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>Economist, Entrepreneur & Inclusive Growth Strategist</span>
}, {
  id: 'thembisa-fakude',
  name: 'Thembisa Fakude',
  category: 'Geopolitics',
  image: '/speaker_thumbnails/Thembisa-Fakude-The-Speakers-Firm.jpg',
  alt: 'Thembisa Fakude',
  quote: 'Decoding global relations and Africa-Middle East policy risks.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>Political Analyst, Author & Middle East–Africa Relations Specialist</span>
}, {
  id: 'mcebisi-ndletyana',
  name: 'Prof. Mcebisi Ndletyana',
  category: 'Geopolitics',
  image: '/speaker_thumbnails/Mcebisi-Ndletyana-The-Speakers-Firm.jpg',
  alt: 'Prof. Mcebisi Ndletyana',
  quote: 'Reflecting historical context and political analysis on democracy.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>Academic, Historian & Political Commentator</span>
}, {
  id: 'ralph-mathekga',
  name: 'Dr. Ralph Mathekga',
  category: 'Geopolitics',
  image: '/speaker_thumbnails/Ralph-Mathekga-The-Speakers-Firm.jpg',
  alt: 'Dr. Ralph Mathekga',
  quote: 'Analyzing democratic institutional health and governance dynamics.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Political Analyst, Author & Democracy Specialist</span>
}, {
  id: 'ebrahim-fakir',
  name: 'Ebrahim Fakir',
  category: 'Geopolitics',
  image: '/speaker_thumbnails/Ebrahim-Fakir-The-Speakers-Firm.jpg',
  alt: 'Ebrahim Fakir',
  quote: 'Strengthening citizen engagement and public policy review.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>Political Analyst & Democracy Governance Specialist</span>
}, {
  id: 'siphamandla-zondi',
  name: 'Dr. Siphamandla Zondi',
  category: 'Geopolitics',
  image: '/speaker_thumbnails/Siphamandla-Zondi-The-Speakers-Firm.jpg',
  alt: 'Dr. Siphamandla Zondi',
  quote: 'Shaping Global South diplomacy and foreign policy strategy.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>Political Scientist & Global South Policy Strategist</span>
}, {
  id: 'tumi-ramonotsi',
  name: 'Tumi Ramonotsi',
  category: 'A.I.',
  image: '/speakers/AI/Tumi-Ramonotsi-The-Speakers-Firm.jpg',
  alt: 'Tumi Ramonotsi',
  quote: 'Strengthening digital financial stewardship and governance.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>Financial Steward, Risk, Governance & Leadership Strategist</span>
}, {
  id: 'mushambi-mutuma',
  name: 'Mushambi Mutuma',
  category: ['A.I.', 'Business Transformation', 'Organisational Agility'],
  image: '/speakers/AI/Mushambi-Mutuma-The-Speakers-Firm.jpg',
  alt: 'Mushambi Mutuma',
  quote: 'Unlocking tech entrepreneurship and corporate acceleration.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>Author, Speaker, Tech Leader</span>
}, {
  id: 'sid-peimer',
  name: 'Sid Peimer',
  category: ['A.I.', 'Business Transformation'],
  image: '/speakers/AI/Sid-Peimer-The-Speakers-Firm.jpg',
  alt: 'Sid Peimer',
  quote: 'Exploring human potential and creative strategy in a digital era.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>Strategic Thinker, Creative Leader, Insights Explorer, and Proponent of Human Potential</span>
}, {
  id: 'molefe-pooe',
  name: 'Molefe Pooe',
  category: ['A.I.', 'Business Transformation', 'Entrepreneurship', 'Organisational Agility'],
  image: '/speakers/Entrepreneurship/Molefe-Pooe-The-Speakers-Firm.jpg',
  alt: 'Molefe Pooe',
  quote: 'Coaching executive leadership through entrepreneurial growth.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Accomplished Corporate Executive, Entrepreneur, Author, and Certified Business Coach</span>
}, {
  id: 'lorato-tshenkeng',
  name: 'Lorato Tshenkeng',
  category: ['Media', 'Reputation'],
  image: '/speakers/Media/Lorato-Tshenkeng--The-Speakers-Firm.jpg',
  alt: 'Lorato Tshenkeng',
  quote: 'Defending reputation sovereignty and managing risk.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>CEO: Decode Communications, Reputation Risk & Stakeholder Management Expert</span>,
  trackId: 'media-brand-reputation'
}, {
  id: 'mandla-radebe',
  name: 'Mandla J. Radebe',
  category: ['Media', 'Reputation'],
  image: '/speakers/Media/Mandla-J-Radebe-The-Speakers-Firm.jpg',
  alt: 'Mandla J. Radebe',
  quote: 'Reframing media dynamics and strategic public discourse.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>Strategic Communication Professor, Author, Media Theorist</span>,
  trackId: 'media-brand-reputation'
}, {
  id: 'milton-nkosi',
  name: 'Milton Nkosi',
  category: ['Media', 'Reputation'],
  image: '/speakers/Media/Milton-Nkosi-The-Speakers-Firm.jpg',
  alt: 'Milton Nkosi',
  quote: 'Translating global media relations into narrative sovereignty.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Former BBC Africa Bureau Chief, Global Correspondent, Media Relations Specialist</span>,
  trackId: 'media-brand-reputation'
}, {
  id: 'rams-mabote',
  name: 'Rams Mabote',
  category: ['Media', 'Reputation', 'Sales'],
  image: '/speakers/Media/Rams-Mabote-The-Speakers-Firm.jpg',
  alt: 'Rams Mabote',
  quote: 'Coaching C-suite reputation and leading public relations.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>Media Personality, Reputation Coach, Host & Facilitator</span>,
  trackId: 'media-brand-reputation'
}, {
  id: 'jj-tabane',
  name: 'Prof JJ Tabane',
  category: ['Media', 'Reputation'],
  image: '/speakers/Media/Prof-JJ-Tabane--The-Speakers-Firm.jpg',
  alt: 'Prof JJ Tabane',
  quote: 'Influencing governance through independent political commentary.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>Political Commentator, Media Owner, Narrative Influencer</span>
}, {
  id: 'phathiswa-magopeni',
  name: 'Phathiswa Magopeni',
  category: ['Media', 'Reputation'],
  image: '/speakers/Media/Phathiswa-Magopeni--The-Speakers-Firm.jpg',
  alt: 'Phathiswa Magopeni',
  quote: 'Advocating independent broadcasting and editorial resilience.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>Veteran Media Executive, Editorial Strategist, Public Broadcasting Advocate</span>
}, {
  id: 'muzi-kuzwayo',
  name: 'Muzi Kuzwayo',
  category: 'Branding',
  image: '/speaker_thumbnails/Muzi-Kuzwayo--The-Speakers-Firm.jpg',
  alt: 'Muzi Kuzwayo',
  quote: 'Disrupting traditional marketing to build authentic consumer trust.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Founder: Ignitive, Former CEO: TBWA Hunt Lascaris, Marketing Disruptor</span>
}, {
  id: 'sechaba-motsieloa',
  name: 'Sechaba Motsieloa',
  category: 'Branding',
  image: '/speakers/Branding/Sechaba-Motsielo-The-Speakers-Firm.jpg',
  alt: 'Sechaba Motsieloa',
  quote: 'Structuring brand sovereignty and strategic C-suite communications.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>Former Chief Marketing Officer: McDonald’s South Africa, Brand Architect, Corporate Strategist, C-Suite Communicator</span>,
  trackId: 'media-brand-reputation'
}, {
  id: 'joshua-maluleke',
  name: 'Joshua Maluleke',
  category: 'Entrepreneurship',
  image: '/speakers/Entrepreneurship/Joshua-Maluleke-The-Speakers-Firm.jpg',
  alt: 'Joshua Maluleke',
  quote: 'Building sustainable businesses and scaling informal trade models.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>Chief Executive Officer at Mayeke Holdings</span>
}, {
  id: 'bulelani-balabala',
  name: 'Bulelani Balabala',
  category: 'Entrepreneurship',
  image: '/speakers/Entrepreneurship/Bulelani-Balabala-The-Speakers-Firm.jpg',
  alt: 'Bulelani Balabala',
  quote: 'Fostering local economic ecosystems and grassroots ventures.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>Founder of TEA</span>
}, {
  id: 'rekgotsofetse-chikane',
  name: 'Rekgotsofetse Chikane',
  category: 'Entrepreneurship',
  image: '/speakers/Entrepreneurship/Rekgotsofetse-Chikane-The-Speakers-Firm.jpg',
  alt: 'Rekgotsofetse Chikane',
  quote: 'Integrating technology, policy, and entrepreneurial development.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Lecturer: Wits School of Governance & Research Associate: Wits Institute of Socio-Economic Research</span>
}, {
  id: 'lebo-gunguluza',
  name: 'Lebo Gunguluza',
  category: 'Entrepreneurship',
  image: '/speakers/Entrepreneurship/Lebo-Gunguluza-The-Speakers-Firm.jpg',
  alt: 'Lebo Gunguluza',
  quote: 'Unlocking capital and scaling scaled black industrialists.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>Entrepreneur, Turnaround Strategist, Business Speaker and Dragon Investor on SA’s Dragons Den TV Show</span>
}, {
  id: 'thokozani-nkosi',
  name: 'Thokozani Nkosi',
  category: 'Entrepreneurship',
  image: '/speakers/Entrepreneurship/Thokozani-Nkosi-The-Speakers-Firm.jpg',
  alt: 'Thokozani Nkosi',
  quote: 'Shaping television broadcast models and industrial media assets.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>Co-Founder and Chairman of Newzroom Afrika</span>
}, {
  id: 'anael-granoux',
  name: 'Anael Granoux',
  category: 'Entrepreneurship',
  image: '/speakers/Entrepreneurship/Anael-Granoux-The-Speakers-Firm.jpg',
  alt: 'Anael Granoux',
  quote: 'Strategic advisory and business expansion in complex economies.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>Strategy Advisor, Lecturer & Speaker</span>
}, {
  id: 'musa-sono',
  name: 'Musa Sono',
  category: ['Entrepreneurship', 'Sales', 'Winning Mindset'],
  image: '/speakers/Entrepreneurship/Musa-Sono-The-Speakers-Firm.jpg',
  alt: 'Musa Sono',
  quote: 'Overcoming adversity and leading change with purpose.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Inspirational Speaker, Entrepreneur & Disruption Catalyst</span>
}, {
  id: 'thuli-magubane',
  name: 'Thuli Magubane',
  category: 'Entrepreneurship',
  image: '/speakers/Entrepreneurship/thuli-magubane-the-speakers-firm.jpg',
  alt: 'Thuli Magubane',
  quote: 'Empowering women-led enterprises and circular ecosystems.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>Entrepreneur, Business Strategist & Empowerment Speaker</span>
}, {
  id: 'zamo-mbele',
  name: 'Dr Zamo Mbele',
  category: ['Neuroscience', 'Sustainability'],
  image: '/speakers/Neuroscience/Zamo-Mbele-The-Speakers-Firm.jpg',
  alt: 'Dr Zamo Mbele',
  quote: 'Sustaining mental fitness and composure under board-level pressure.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>Clinical Psychologist, Mental Health Advocate & Speaker</span>
}, {
  id: 'timothy-maurice-webster',
  name: 'Timothy Maurice Webster',
  category: 'Neuroscience',
  image: '/speakers/Neuroscience/Timothy-Maurice-Webster-The-Speakers-Firm.jpg',
  alt: 'Timothy Maurice Webster',
  quote: 'Applying brain science to sharpen brand influence and personal power.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>Behavioural Psychology Author & Brand Influence Strategist</span>
}, {
  id: 'veli-ndaba',
  name: 'Veli Ndaba',
  category: ['Neuroscience', 'Winning Mindset'],
  image: '/speakers/Neuroscience/Veli-Ndaba-The-Speakers-Firm.jpg',
  alt: 'Veli Ndaba',
  quote: 'Rewiring the brain for neuroleadership and composture.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>NeuroLeadership Coach, NeuroSpeaker and Author</span>
}, {
  id: 'richie-achukwu',
  name: 'Dr Richie Achukwu',
  category: ['Neuroscience', 'Winning Mindset'],
  image: '/speakers/Neuroscience/Dr-Richie-Achukwu-The-Speakers-Firm.jpg',
  alt: 'Dr Richie Achukwu',
  quote: 'Integrating neuroscience and psychology to lead organizational growth.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>Author, Executive & Leadership Coach, Leadership Trainer</span>
}, {
  id: 'lauren-davis',
  name: 'Lauren Davis',
  category: ['Neuroscience', 'Sustainability'],
  image: '/speakers/Neuroscience/Lauren-Davis-The-Speakers-Firm.jpg',
  alt: 'Lauren Davis',
  quote: 'Hardwiring workplace resilience and psychological safety.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>Clinical Psychologist, Workplace Mental Health Coach, Keynote Speaker</span>
}, {
  id: 'queen-ramotsehoa',
  name: 'Queen Ramotsehoa',
  category: ['Leadership', 'Team-Building'],
  image: '/image_marquee/leadership/Queen-Ramotsehoa-The-Speakers-Firm.jpg',
  alt: 'Queen Ramotsehoa',
  quote: 'Shaping team alignment and high-performance leadership culture.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>Leadership Alignment Coach, Organisational Culture Strategist & Speaker</span>
}, {
  id: 'khanyisile-chaba',
  name: 'Khanyisile Chaba',
  category: 'Sustainability',
  image: '/speakers/Sustainability/Khanyi-Chaba-The-Speakers-Firm.jpg',
  alt: 'Khanyisile Chaba',
  quote: 'Integrating sustainable Old Mutual responsible business metrics.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>Head of Responsible Business, Old Mutual | Sustainability & Corporate Citizenship Strategist</span>
}, {
  id: 'victor-ramathesele',
  name: 'Dr. Victor Ramathesele',
  category: 'Sustainability',
  image: '/speakers/Sustainability/dr-victor-ramathesele-the-speakers-firm.jpg',
  alt: 'Dr. Victor Ramathesele',
  quote: 'Hardwiring corporate health, wellness strategy, and ESG longevity.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>CEO, Medipost Holdings | Sports Physician & Workplace Wellness Strategist</span>
}, {
  id: 'somadoda-fikeni',
  name: 'Dr Somadoda Fikeni',
  category: ['Governance', 'Geopolitics', 'Sustainability'],
  image: '/speakers/Sustainability/Dr-Somadoda-Fikeni-The-Speakers-Firm.jpg',
  alt: 'Dr Somadoda Fikeni',
  quote: 'Structuring national governance and sustainable policy architecture.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Public Policy Analyst & Governance Strategist</span>
}, {
  id: 'neil-tovey',
  name: 'Neil Tovey',
  category: 'Winning Mindset',
  image: '/speakers/Winning Mindset/Neil-Tovey-The-Speakers-Firm.jpg',
  alt: 'Neil Tovey',
  quote: 'Leading Bafana Bafana AFCON win and structuring high performance.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>Bafana Bafana Captain & Soccer Legend, Coach and former Technical Director</span>
}, {
  id: 'doctor-khumalo',
  name: 'Doctor Khumalo',
  category: 'Winning Mindset',
  image: '/speakers/Winning Mindset/Doctor-Khumalo-The-Speakers-Firm.jpg',
  alt: 'Doctor Khumalo',
  quote: 'Harnessing sporting distinction and strategic tactical leadership.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>South African Soccer Legend, Kaizer Chiefs Icon, Coach & Media Analyst</span>
}, {
  id: 'paul-nzimande',
  name: 'Paul Nzimande',
  category: ['Governance', 'Organisational Agility', 'Team-Building'],
  image: '/speakers/Governance/Paul-Nzimande-The-Speakers-Firm.jpg',
  alt: 'Paul Nzimande',
  quote: 'Addressing masculinity and equity to transform workplace leadership culture.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>Transformational Leadership Strategist, Executive Coach & Author</span>
}, {
  id: 'ndileka-mandela',
  name: 'Ndileka Mandela',
  category: ['Governance', 'MCs'],
  image: '/speakers/Governance/Ndileka-Mandela-The-Speakers-Firm.jpg',
  alt: 'Ndileka Mandela',
  quote: 'Advocating for women, youth development, and social justice.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>Social Activist, Author & Founder of The Thembelihle Mandela Foundation</span>
}, {
  id: 'linda-ntuli',
  name: 'Linda Ntuli',
  category: ['Organisational Agility', 'Entrepreneurship', 'Team-Building'],
  image: '/speakers/Organisational Agility/Linda-Ntuli-The-Speakers-Firm.jpg',
  alt: 'Linda Ntuli',
  quote: 'Structuring high-performance teams and personal wellness blueprints.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>Management Consultant, Motivational Speaker, Trainer & Life Coach</span>
}, {
  id: 'gugulethu-xaba',
  name: 'Dr. Gugulethu Xaba',
  category: 'Governance',
  image: '/speakers/Governance/Dr-Gugulethu-Xaba-The-Speakers-Firm.jpg',
  alt: 'Dr. Gugulethu Xaba',
  quote: 'Fostering ethical leadership, governance, and institutional alignment.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Leadership Expert & Director in Student Governance</span>
}, {
  id: 'shingai-mutambirwa',
  name: 'Prof. Shingai Mutambirwa',
  category: 'Sustainability',
  image: '/speakers/Sustainability/Dr-Shingai-Mutambirwa-The-Speakers-Firm.jpg',
  alt: 'Prof. Shingai Mutambirwa',
  quote: 'Driving wellness strategy and cognitive longevity in high-performance cultures.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>Specialist in Urology & Academic Health Leadership</span>
}, {
  id: 'joy-machoene-kaapu',
  name: 'Joy Machoene Kaapu',
  category: ['Governance', 'Organisational Agility', 'Team-Building'],
  image: '/speakers/Governance/Joy-Kaapu-The-Speakers-Firm-.jpg',
  alt: 'Joy Machoene Kaapu',
  quote: 'Aligning governance structures with high-performance culture.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>Leadership Alignment, Culture Strategist & Legal Consultant</span>
}, {
  id: 'delia-ndlovu',
  name: 'Delia Ndlovu',
  category: ['Business Transformation', 'Governance'],
  image: '/speakers/Governance/Delia-Ndlovu-The-Speakers-Firm.jpg',
  alt: 'Delia Ndlovu',
  quote: 'Navigating market disruption and corporate growth strategies.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>Strategic Business Transformation Leader & C-Suite Advisor</span>
}, {
  id: 'mary-bomela',
  name: 'Mary Bomela',
  category: ['Governance', 'Economics'],
  image: '/speakers/Governance/Mary-Bomela-The-Speakers-Firm.jpg',
  alt: 'Mary Bomela',
  quote: 'Championing corporate governance, investment growth, and economic value.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Business Executive & Corporate Leader</span>
}, {
  id: 'pastor-tebogo-moema',
  name: 'Pastor Tebogo Moema',
  category: 'Gender',
  image: '/speaker_thumbnails/Tebogo-Moema-The-Speakers-Firm.jpg',
  alt: 'Pastor Tebogo Moema',
  quote: 'Preaching the gospel of love, unity, and family support.',
  youtubeId: 'A8U-QILsK_M',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>Pastor, TV Host & Gender Equality Advocate</span>
}, {
  id: 'zanele-luvuno',
  name: 'Zanele Luvuno',
  category: 'Gender',
  image: '/speaker_thumbnails/Zanele-Luvuno-The-Speakers-Firm.jpg',
  alt: 'Zanele Luvuno',
  quote: 'Establishing and promoting the future of female leaders.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(84, 133, 96, 0.22)',
  bio: <span>Thought Leader, Transformation and Gender Equality Advocate</span>
}, {
  id: 'josina-machel',
  name: 'Josina Z. Machel',
  category: 'Gender',
  image: '/speaker_thumbnails/Josina-Machel-The-Speakers-Firm3.jpg',
  alt: 'Josina Z. Machel',
  quote: 'Redefining the global fight against gender-based violence.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>Gender Equality and Human Rights Advocate, Founder of Kuhluka Movement</span>
}, {
  id: 'happy-ngidi',
  name: 'Happy MaKhumalo Ngidi',
  category: 'Neuroscience',
  image: '/speaker_thumbnails/Happy-MaKhumalo-Ngidi-The-Speakers-Firm.jpg',
  alt: 'Happy MaKhumalo Ngidi',
  quote: 'Brand alignment dialogues, local enterprise development panels, and CMO briefs.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>PR and Marketing Executive, Speaker, Cultural Advocate & Philanthropist</span>
}, {
  id: 'gogo-dineo-ndlanzi',
  name: 'Gogo Dineo Ndlanzi',
  category: 'Neuroscience',
  image: '/speaker_thumbnails/Gogo-Dineo-Ndlanzi-The-Speakers-Firm.jpg',
  alt: 'Gogo Dineo Ndlanzi',
  quote: 'African spiritual healing modalities offer critical, time-tested systems to restore collective wellness.',
  youtubeId: '4xi6_idDthQ',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>Traditional Healer, Spiritual Teacher, Cultural Practitioner, International Speaker & Change Agent</span>
}, {
  id: 'billy-selekane',
  name: 'Dr Billy Selekane',
  category: 'Neuroscience',
  image: '/speaker_thumbnails/Dr-Billy-Selekane-The-Speakers-Firm.jpg',
  alt: 'Dr Billy Selekane',
  quote: 'Transforming leadership effectiveness, team performance, and organisational culture.',
  youtubeId: 'qp0HIF3SfI4',
  topics: [],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>International Keynote Speaker, Executive Coach, Author & Leadership Guru</span>
}, {
  id: 'ntosh-madlingozi',
  name: 'Ntosh Madlingozi',
  category: 'Comedy',
  image: '/speakers/Ntosh Madlingozi/Ntosh-Madlingozi-The-Speakers-Firm.jpg',
  alt: 'Ntosh Madlingozi',
  quote: 'Understanding and adapting to the collective funny bone of an audience is where comedy transforms into connection.',
  youtubeId: 'nfS7SRV-gSs',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Entrepreneur, Stand-Up Comedian & Master of Ceremonies</span>
}, {
  id: 'ndumiso-lindi',
  name: 'Ndumiso Lindi',
  category: 'Comedy',
  image: '/speakers/Ndumiso Lindi/Ndumiso-Lindi-The-Speakers-Firm.jpg',
  alt: 'Ndumiso Lindi',
  quote: 'Understanding your audience and delivering down-to-earth stories is how you keep people laughing from the belly.',
  youtubeId: 'I0_tDPmCALM',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Stand-Up Comedian, Master of Ceremonies & Broadcaster</span>
}, {
  id: 'mpho-popps',
  name: 'Mpho Popps Modikoane',
  category: 'Comedy',
  image: '/speakers/Mpho Popps/Mpho-Popps-The-Speakers-Firm.jpg',
  alt: 'Mpho Popps Modikoane',
  quote: 'Laughter is not just entertainment, it is a powerful form of connection, healing, and cultural celebration.',
  youtubeId: 'x6t2e0roe2M',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Charismatic Comedian, Actor, Presenter & Master of Ceremonies</span>
}, {
  id: 'kagiso-kg-mokgadi',
  name: 'Kagiso “KG” Mokgadi',
  category: 'Comedy',
  image: '/speakers/Kagiso KG Mokgadi/Kagiso-KG-Mokgadi-The-Speakers-Firm.jpg',
  alt: 'Kagiso “KG” Mokgadi',
  quote: 'Relatable material and minimalist delivery allow an audience to connect with the storytelling naturally.',
  youtubeId: 't8OSpcpJkHY',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Award-Winning Stand-Up Comedian & Master of Ceremonies</span>
}, {
  id: 'kagiso-lediga',
  name: 'Kagiso Lediga',
  category: 'Comedy',
  image: '/speakers/Kagiso Lediga/Kagiso-Lediga-The-Speakers-Firm.jpg',
  alt: 'Kagiso Lediga',
  quote: 'Creative genius begins with schoolboy charm and ends in disruptive, groundbreaking storytelling.',
  youtubeId: 'r_S7o66RndE',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Comedy Legend, Emmy-Nominated Director & Showrunner</span>
}, {
  id: 'eugene-khoza',
  name: 'Eugene Khoza',
  category: 'Comedy',
  image: '/speakers/Eugene Khoza/Eugene-Khoza-The-Speakers-Firm.jpg',
  alt: 'Eugene Khoza',
  quote: 'Understanding cultures and engaging them on a humorous level is the true art of connection.',
  youtubeId: 'GhlhkbAtN1g',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Multilingual Stand-Up Comedian, TV Host & Cultural Analyst</span>
}, {
  id: 'isaac-gampu',
  name: 'Isaac Gampu',
  category: 'Comedy',
  image: '/speakers/Isaac Gampu/Isaac-Gampu-The-Speakers-Firm.jpg',
  alt: 'Isaac Gampu',
  quote: 'Vosloorus-born comedy exporter shaping modern satire and radio hosting across South African airwaves.',
  youtubeId: 'cNEHNcItviY',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Veteran Stand-Up Comedian, Actor & Radio Presenter</span>
}, {
  id: 'tol-ass-mo',
  name: 'Tol A$$ Mo',
  category: 'Comedy',
  image: '/speakers/Tol Ass Mo/Tol-As-Mo-The-Speakers-Firm.jpg',
  alt: 'Tol A$$ Mo',
  quote: 'Laughter is the ultimate vehicle for cultural disruption and authentic brand expression.',
  youtubeId: 'YWlD-KbLwnQ',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Celebrated Stand-Up Comedian, TV Personality & Entrepreneur</span>
}, {
  id: 'summary',
  name: 'Summary',
  category: 'Comedy',
  image: '/speakers/Summary/Summary-The-Speakers-Firm.jpg',
  alt: 'Summary',
  quote: 'Using comedy wisely to make people laugh their problems away, and helping the next generation rise.',
  youtubeId: 'LoZwKjm6X0M',
  topics: [],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Stand-Up Comedian, Event Emcee & Media Personality</span>
}, {
  id: 'miles-kubheka',
  name: 'Miles Kubheka',
  category: 'Keynote',
  image: '/speakers/Miles Kubheka/miles-kubheka-the-speakers-firm.jpg',
  alt: 'Miles Kubheka',
  quote: 'Resilience, purpose-driven action, and turning bold ideas into transformative ventures.',
  youtubeId: 'uVmBwO_ct7k',
  topics: [],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>Celebrated Chef, Author, Entrepreneur & Keynote Speaker</span>
}, {
  id: 'olwethu-leshabane',
  name: 'Olwethu Leshabane',
  category: ['Sustainability', 'Health & Wellbeing'],
  image: '/speakers/Olwethu Leshabane/Olwethu-Leshabane-The-Speakers-Firm.jpg',
  alt: 'Olwethu Leshabane',
  quote: 'Doing it all, but not all at once.',
  youtubeId: 'qp0HIF3SfI4',
  topics: ['Corporate Wellbeing & Health', 'Sustainable Institutional Performance'],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Media Entrepreneur, Author & Women’s Advocate</span>,
  trackId: 'sustainability-esg-health-and-human-performance'
}, {
  id: 'dr-jerry-gule',
  name: 'Dr Jerry Gule',
  category: ['Leadership', 'Governance'],
  image: '/speakers/Jerry Gule/Dr-Jerry-Gule-The-Speakers-Firm.jpg',
  alt: 'Dr Jerry Gule',
  quote: 'Lead with purpose, authenticity, and emotional intelligence.',
  youtubeId: 'qp0HIF3SfI4',
  topics: ['Courageous Leadership & Decision Making'],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>CEO of Institute of People Management & Leadership Expert</span>,
  trackId: 'leadership-governance-and-risk-intelligence'
}, {
  id: 'dr-paulina-mamogobo',
  name: 'Dr. Paulina Mamogobo',
  category: ['Keynote', 'Leadership'],
  image: '/speakers/Dr. Paulina Mamogobo/Dr-Paulina-Mamogobo.jpg',
  alt: 'Dr. Paulina Mamogobo',
  quote: 'Empowering leadership through trade, diplomacy, and global strategy.',
  youtubeId: 'qp0HIF3SfI4',
  topics: ['Global Trade & Diplomatic Leadership'],
  tint: 'rgba(227, 14, 4, 0.22)',
  bio: <span>Academic, Leadership Coach & International Policy Expert</span>,
  trackId: 'leadership-governance-and-risk-intelligence'
}, {
  id: 'felicia-mabuza-suttle',
  name: 'Felicia Mabuza-Suttle',
  category: ['Keynote', 'Motivation'],
  image: '/speakers/Felicia Mabuza-Suttle/felicia-mabuza-suttle-the-speakers-firm.jpg',
  alt: 'Felicia Mabuza-Suttle',
  quote: 'Dare to dream and leave a legacy.',
  youtubeId: 'qp0HIF3SfI4',
  topics: ['Personal Transformation', 'Female Leadership'],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>Legendary Talk Show Hostess, Entrepreneur & Keynote Speaker</span>,
  trackId: 'female-keynote-speakers'
}, {
  id: 'mbuyiselo-botha',
  name: 'Mbuyiselo Botha',
  category: ['Masculinity', 'Leadership'],
  image: '/speakers/Mbuyiselo Botha/Mbuyiselo-Botha-The-Speakers-Firm.jpg',
  alt: 'Mbuyiselo Botha',
  quote: 'Positive masculinity and active allyship are central to gender justice.',
  youtubeId: 'X_uytsYrhrY',
  topics: ['Positive Masculinity & Allyship'],
  tint: 'rgba(72, 112, 166, 0.22)',
  bio: <span>Positive Masculinity Pioneer, Co-Founder of Sonke Gender Justice & Broadcaster</span>,
  trackId: 'leadership-governance-and-risk-intelligence'
}, {
  id: 'phemelo-motene',
  name: 'Phemelo Motene',
  category: ['MCs', 'Media'],
  image: '/speakers/Phemelo Motene/Phemelo-Motene-The-Speakers-Firm.jpg',
  alt: 'Phemelo Motene',
  quote: 'Connecting with an audience requires authenticity.',
  youtubeId: '4dBygPZkY2s',
  topics: ['Media Strategy & Live Dialogue', 'Women Empowerment & Wellness'],
  tint: 'rgba(180, 127, 48, 0.22)',
  bio: <span>Broadcaster, Actress, Master of Ceremonies & Communication Specialist</span>,
  trackId: 'mc-and-facilitators'
}];

export const FEATURED_SPEAKERS = FEATURED_SPEAKERS_RAW.map(speaker => {
  const filename = speaker.image.split('/').pop();
  return {
    ...speaker,
    image: `/speaker_thumbnails/${filename}`
  };
});

export const WELCOME_SPEAKERS = [
  {
    id: "clement-manyathela",
    name: "Clement Manyathela",
    role: "Broadcaster, Panel Facilitator & MC",
    image: "/welcome_slides/clement-manyathela.jpg",
    profileUrl: "/tracks/mc-and-facilitators/clement-manyathela"
  },
  {
    id: "dr-anele-siswana",
    name: "Dr. Anele Siswana",
    role: "Clinical Psychologist & Decolonial Scholar",
    image: "/welcome_slides/dr-anele-siswana.jpg",
    profileUrl: "/tracks/masculinity/anele-siswana"
  },
  {
    id: "dr-david-molapo",
    name: "Dr. David Molapo",
    role: "Management Consultant & Educationalist",
    image: "/welcome_slides/dr-david-molapo.jpg",
    profileUrl: "/tracks/inspirational-keynote-speakers/david-molapo"
  },
  {
    id: "dr-mncane-mthunzi",
    name: "Dr. Mncane Mthunzi",
    role: "Corporate Governance, Transformation & Leadership",
    image: "/welcome_slides/dr-mncane-mthunzi.jpg",
    profileUrl: "/tracks/future-of-work/dr-mncane-mthunzi"
  },
  {
    id: "dr-mzamo-masito",
    name: "Dr. Mzamo Masito",
    role: "Global Marketing Director & Brand Strategist",
    image: "/welcome_slides/dr-mzamo-masito.jpg",
    profileUrl: "/tracks/media-brand-reputation/mzamo-masito"
  },
  {
    id: "dr-nombasa-tsengwa",
    name: "Dr. Nombasa Tsengwa",
    role: "CEO of Exxaro Resources & Business Leader",
    image: "/welcome_slides/dr-nombasa-tsengwa.jpg",
    profileUrl: "/tracks/female-keynote-speakers/nombasa-tsengwa"
  },
  {
    id: "dr-pali-lehohla",
    name: "Dr. Pali Lehohla",
    role: "Economics, Policy & National Statistics",
    image: "/welcome_slides/dr-pali-lehohla.jpg",
    profileUrl: "/tracks/economics-and-politics/dr-pali-lehohla"
  },
  {
    id: "dr-pumela-salela",
    name: "Dr. Pumela Salela",
    role: "Global Competitiveness, ESG & Brand Architecture",
    image: "/welcome_slides/dr-pumela-salela.jpg",
    profileUrl: "/tracks/economics-and-politics/pumela-salela"
  },
  {
    id: "dr-shingai-mutambirwa",
    name: "Dr. Shingai Mutambirwa",
    role: "Clinical Wellness, Urology & Healthcare Leadership",
    image: "/welcome_slides/dr-shingai-mutambirwa.jpg",
    profileUrl: "/tracks/workplace-wellness/dr-shingai-mutambirwa"
  },
  {
    id: "dr-steven-molakeng",
    name: "Dr. Steven Molakeng",
    role: "Academic, Music Business Specialist & Author",
    image: "/welcome_slides/dr-steven-molakeng.jpg",
    profileUrl: "/tracks/masculinity/steven-molakeng"
  },
  {
    id: "musa-sono",
    name: "Musa Sono",
    role: "Inspirational Speaker & Disability Activist",
    image: "/welcome_slides/musa-sono.jpg",
    profileUrl: "/tracks/entrepreneurship/musa-sono"
  },
  {
    id: "noni-khumalo",
    name: "Noni Khumalo",
    role: "Global Business Executive & Strategy Facilitator",
    image: "/welcome_slides/noni-khumalo.jpg",
    profileUrl: "/tracks/female-keynote-speakers/noni-khumalo"
  },
  {
    id: "paul-nzimande",
    name: "Paul Nzimande",
    role: "Executive Coach & Human Performance Specialist",
    image: "/welcome_slides/paul-nzimande.jpg",
    profileUrl: "/tracks/neuroscience-peak-performance-mental-agility/paul-nzimande"
  },
  {
    id: "samke-mhlongo",
    name: "Samke Mhlongo",
    role: "Wealth Advisor & Personal Finance Author",
    image: "/welcome_slides/samke-mhlongo.jpg",
    profileUrl: "/tracks/financial-inclusion/samke-mhlongo"
  },
  {
    id: "stafford-masie",
    name: "Stafford Masie",
    role: "Technology Futurist, AI Innovator & Business Strategist",
    image: "/welcome_slides/stafford-massie.jpg",
    profileUrl: "/tracks/future-of-work/stafford-masie"
  }
];

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

const FEATURED_SPEAKER_FILTERS = [
  { id: 'all-speakers', label: 'All' },
  ...CATEGORIES_CONFIG.map(c => ({ id: c.id, label: c.buttonLabel }))
];

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

export const FACULTY = [{
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
  trackId: 'governance',
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
}, {
  id: 'olwethu-leshabane',
  name: 'Olwethu Leshabane',
  designation: 'Media Entrepreneur & Author',
  role: "Media Entrepreneur, Author & Women's Advocate",
  image: '/speaker_thumbnails/Olwethu-Leshabane-The-Speakers-Firm.jpg',
  trackId: 'sustainability-esg-health-and-human-performance',
  tags: [{
    id: 'corporate-wellbeing-health',
    label: 'Corporate Wellbeing & Health'
  }, {
    id: 'sustainable-institutional-performance',
    label: 'Sustainable Institutional Performance'
  }],
  snippet: 'Media entrepreneur, author, and women’s advocate promoting corporate wellbeing and sustainable performance.',
  spanClassName: 'col-span-12 md:col-span-5',
  wipeDelay: 0.2,
  entryDelay: 0.48
}, {
  id: 'dr-jerry-gule',
  name: 'Dr Jerry Gule',
  designation: 'Leadership & Transformation Expert',
  role: 'CEO of Institute of People Management & Executive Coach',
  image: '/speaker_thumbnails/Dr-Jerry-Gule-The-Speakers-Firm.jpg',
  trackId: 'leadership-governance-and-risk-intelligence',
  tags: [{
    id: 'courageous-leadership',
    label: 'Courageous Leadership'
  }, {
    id: 'transformation',
    label: 'Transformation'
  }],
  snippet: 'Harvard-educated leadership expert, executive coach, and CEO of Institute of People Management driving organisational transformation.',
  spanClassName: 'col-span-12 md:col-span-5',
  wipeDelay: 0.25,
  entryDelay: 0.54
}, {
  id: 'dr-paulina-mamogobo',
  name: 'Dr. Paulina Mamogobo',
  designation: 'Leadership & Policy Expert',
  role: 'Academic, Leadership Coach & International Policy Expert',
  image: '/speaker_thumbnails/Dr-Paulina-Mamogobo.jpg',
  trackId: 'leadership-governance-and-risk-intelligence',
  tags: [{
    id: 'diplomatic-leadership',
    label: 'Diplomatic Leadership'
  }, {
    id: 'trade-policy',
    label: 'Trade Policy'
  }],
  snippet: 'Respected academic and international policy expert coaching leaders in trade regulation and diplomatic strategy.',
  spanClassName: 'col-span-12 md:col-span-5',
  wipeDelay: 0.1,
  entryDelay: 0.15
}, {
  id: 'felicia-mabuza-suttle',
  name: 'Felicia Mabuza-Suttle',
  designation: 'Pioneering Broadcaster & Entrepreneur',
  role: "Legendary Talk Show Hostess, Entrepreneur & International Keynote Speaker",
  image: '/speaker_thumbnails/felicia-mabuza-suttle-the-speakers-firm.jpg',
  trackId: 'female-keynote-speakers',
  tags: [{
    id: 'personal-transformation',
    label: 'Personal Transformation'
  }, {
    id: 'female-leadership',
    label: 'Female Leadership'
  }],
  snippet: 'South Africa’s "First Lady of Talk", legendary media personality, and entrepreneur driving socio-economic transformation.',
  spanClassName: 'col-span-12 md:col-span-7',
  wipeDelay: 0.15,
  entryDelay: 0.25
}, {
  id: 'aubrey-masango',
  name: 'Aubrey Masango',
  designation: 'Moderator & Broadcaster',
  role: 'Radio Personality, Broadcaster, Moderator & Master of Ceremonies',
  image: '/speaker_thumbnails/Aubrey-Masango-The-Speakers-Firm.jpg',
  trackId: 'mc-and-facilitators',
  tags: [{
    id: 'intellectual-dialogue',
    label: 'Intellectual Dialogue'
  }, {
    id: 'governance',
    label: 'Governance'
  }],
  snippet: 'Respected broadcaster and moderator navigating complex national socioeconomic and leadership topics.',
  spanClassName: 'col-span-12 md:col-span-5',
  wipeDelay: 0.2,
  entryDelay: 0.3
}, {
  id: 'bridget-masinga',
  name: 'Bridget Masinga',
  designation: 'Broadcaster & Premium Host',
  role: 'Master of Ceremonies, Facilitator & Broadcaster',
  image: '/speaker_thumbnails/Bridget-Masinga-The-Speakers-Firm.jpg',
  trackId: 'mc-and-facilitators',
  tags: [{
    id: 'premium-facilitation',
    label: 'Premium Facilitation'
  }, {
    id: 'arts-culture',
    label: 'Arts & Culture'
  }],
  snippet: 'Veteran broadcaster and elegant master of ceremonies hosting high-profile corporate galas and art events.',
  spanClassName: 'col-span-12 md:col-span-5',
  wipeDelay: 0.25,
  entryDelay: 0.35
}, {
  id: 'dr-brenda-kubheka',
  name: 'Dr. Brenda Kubheka',
  designation: 'Bioethics Scholar & Governance Expert',
  role: 'Medical Doctor, Bioethics Scholar & Governance Expert',
  image: '/speaker_thumbnails/Dr-Brenda-Kubheka-The-Speakers-Firm.jpg',
  trackId: 'leadership-governance-and-risk-intelligence',
  tags: [{
    id: 'workplace-wellness',
    label: 'Workplace Wellness'
  }, {
    id: 'clinical-governance',
    label: 'Clinical Governance'
  }],
  snippet: 'Medical doctor and bioethics scholar advising organizations on clinical risk, ethics, and corporate wellness.',
  spanClassName: 'col-span-12 md:col-span-5',
  wipeDelay: 0.3,
  entryDelay: 0.4
}, {
  id: 'dr-john-kani',
  name: 'Dr. John Kani',
  designation: 'Living Legend & Cultural Icon',
  role: 'Living Legend, Actor, Playwright & Cultural Icon',
  image: '/speaker_thumbnails/Dr-John-Kani-The-Speakers-Firm.jpg',
  trackId: 'spirituality-heritage-and-identity',
  tags: [{
    id: 'cultural-heritage',
    label: 'Cultural Heritage'
  }, {
    id: 'struggle-history',
    label: 'Struggle History'
  }],
  snippet: 'World-renowned actor, playwright, and activist using the power of storytelling to shape cultural memory and leadership.',
  spanClassName: 'col-span-12 md:col-span-7',
  wipeDelay: 0.1,
  entryDelay: 0.2
}, {
  id: 'dr-maureen-tong',
  name: 'Dr. Maureen Tong',
  designation: 'Governance & Institutional Reform Specialist',
  role: 'Legal Scholar, Governance Authority & Coach',
  image: '/speaker_thumbnails/Dr-Maureen-Tong-The-Speakers-Firm.jpg',
  trackId: 'governance',
  tags: [{
    id: 'gender-power',
    label: 'Gender Power'
  }, {
    id: 'constitutional-law',
    label: 'Constitutional Law'
  }],
  snippet: 'Distinguished international legal scholar and leadership coach specializing in land reform, human rights, and gender power.',
  spanClassName: 'col-span-12 md:col-span-5',
  wipeDelay: 0.15,
  entryDelay: 0.25
}, {
  id: 'dudu-msomi',
  name: 'Dudu Msomi',
  designation: 'Governance & Board Advisor',
  role: 'Corporate Governance Authority, Board Advisor & Speaker',
  image: '/speaker_thumbnails/Dudu-Msomi-The-Speakers-Firm.jpg',
  trackId: 'governance',
  tags: [{
    id: 'corporate-governance',
    label: 'Corporate Governance'
  }, {
    id: 'ethical-stewardship',
    label: 'Ethical Stewardship'
  }],
  snippet: 'Corporate governance authority and strategy advisor counseling boards on ethical stewardship and resilient leadership.',
  spanClassName: 'col-span-12 md:col-span-5',
  wipeDelay: 0.2,
  entryDelay: 0.3
}, {
  id: 'josina-machel',
  name: 'Josina Z. Machel',
  designation: 'Human Rights Defender & Gender Activist',
  role: 'Human Rights Defender, Gender Activist & Founder of Kuhluka Movement',
  image: '/speaker_thumbnails/Josina-Machel-The-Speakers-Firm3.jpg',
  trackId: 'gender',
  tags: [{
    id: 'gender-equality',
    label: 'Gender Equality'
  }, {
    id: 'gbv-advocacy',
    label: 'GBV Advocacy'
  }],
  snippet: 'Global women’s rights defender and founder of Kuhluka Movement leading advocacy against gender-based violence.',
  spanClassName: 'col-span-12 md:col-span-5',
  wipeDelay: 0.25,
  entryDelay: 0.35
}, {
  id: 'musa-sono',
  name: 'Musa Sono',
  designation: 'Farmer, High-Performance Entrepreneur & Social Innovator',
  role: 'Farmer, High-Performance Entrepreneur & Accessibility Advocate',
  image: '/speaker_thumbnails/Musa-Sono-The-Speakers-Firm.jpg',
  trackId: 'entrepreneurship',
  tags: [{
    id: 'winning-mindset',
    label: 'Winning Mindset'
  }, {
    id: 'disability-inclusion',
    label: 'Disability Inclusion'
  }],
  snippet: 'Celebrated agricultural entrepreneur and business coach translating enterprise growth and high-performance frameworks into corporate team cohesion.',
  spanClassName: 'col-span-12 md:col-span-5',
  wipeDelay: 0.3,
  entryDelay: 0.4
}, {
  id: 'mbuyiselo-botha',
  name: 'Mbuyiselo Botha',
  designation: 'Positive Masculinity Pioneer',
  role: 'Positive Masculinity Pioneer, Co-Founder of Sonke Gender Justice & Broadcaster',
  image: '/speaker_thumbnails/Mbuyiselo-Botha-The-Speakers-Firm.jpg',
  trackId: 'masculinity',
  tags: [{
    id: 'positive-masculinity',
    label: 'Positive Masculinity'
  }, {
    id: 'gender-equity',
    label: 'Gender Equity'
  }],
  snippet: 'Prominent gender activist and co-founder of Sonke Gender Justice leading national dialogues on positive masculinity and allyship.',
  spanClassName: 'col-span-12 md:col-span-7',
  wipeDelay: 0.15,
  entryDelay: 0.25
}, {
  id: 'ndileka-mandela',
  name: 'Ndileka Mandela',
  designation: 'Social Activist & Author',
  role: 'Social Activist, Author & Founder of Thembelihle Development Foundation',
  image: '/speaker_thumbnails/Ndileka-Mandela-The-Speakers-Firm.jpg',
  trackId: 'gender',
  tags: [{
    id: 'gender-equality',
    label: 'Gender Equality'
  }, {
    id: 'social-justice',
    label: 'Social Justice'
  }],
  snippet: 'Social activist and author of "I Am Ndileka" directing development programs for rural schools and communities.',
  spanClassName: 'col-span-12 md:col-span-5',
  wipeDelay: 0.2,
  entryDelay: 0.3
}, {
  id: 'noni-khumalo',
  name: 'Noni Khumalo',
  designation: 'Premium Master of Ceremonies',
  role: 'Professional Master of Ceremonies, Panel Facilitator & TV Host',
  image: '/speaker_thumbnails/Noni-Khumalo-The-Speakers-Firm.jpg',
  trackId: 'mc-and-facilitators',
  tags: [{
    id: 'premium-hosting',
    label: 'Premium Hosting'
  }, {
    id: 'panel-facilitation',
    label: 'Panel Facilitation'
  }],
  snippet: 'Polished master of ceremonies and television presenter facilitating corporate award evenings and global summits.',
  spanClassName: 'col-span-12 md:col-span-5',
  wipeDelay: 0.25,
  entryDelay: 0.35
}, {
  id: 'peter-ndoro',
  name: 'Peter Ndoro',
  designation: 'Veteran Broadcast Journalist & Host',
  role: 'Veteran Broadcaster, News Anchor & Professional Moderator',
  image: '/speaker_thumbnails/Peter-Ndoro-The-Speakers-Firm.jpg',
  trackId: 'mc-and-facilitators',
  tags: [{
    id: 'summit-moderation',
    label: 'Summit Moderation'
  }, {
    id: 'news-anchor',
    label: 'News Anchor'
  }],
  snippet: 'Highly respected television newsman and anchor facilitating strategic panels and international summits globally.',
  spanClassName: 'col-span-12 md:col-span-5',
  wipeDelay: 0.3,
  entryDelay: 0.4
}, {
  id: 'phemelo-motene',
  name: 'Phemelo Motene',
  designation: 'Broadcaster & Actress',
  role: 'Broadcaster, Actress, Master of Ceremonies & Communication Specialist',
  image: '/speaker_thumbnails/Phemelo-Motene-The-Speakers-Firm.jpg',
  trackId: 'mc-and-facilitators',
  tags: [{
    id: 'media-dialogue',
    label: 'Media Dialogue'
  }, {
    id: 'women-empowerment',
    label: 'Women Empowerment'
  }],
  snippet: 'Veteran radio host and television personality facilitating high-engagement corporate panels and communication workshops.',
  spanClassName: 'col-span-12 md:col-span-5',
  wipeDelay: 0.1,
  entryDelay: 0.2
}, {
  id: 'mazwe-majola',
  name: 'Prof. Mazwe Majola',
  designation: 'Gender Governance Specialist',
  role: 'Academic Scholar, Gender Governance Expert & Policy Analyst',
  image: '/speaker_thumbnails/Prof-Mazwe-Majola-The-Speakers-Firm.jpg',
  trackId: 'governance',
  tags: [{
    id: 'gender-governance',
    label: 'Gender Governance'
  }, {
    id: 'public-policy',
    label: 'Public Policy'
  }],
  snippet: 'Distinguished professor and consultant advising public departments and corporate boards on gender development.',
  spanClassName: 'col-span-12 md:col-span-7',
  wipeDelay: 0.15,
  entryDelay: 0.25
}, {
  id: 'sid-peimer',
  name: 'Sid Peimer',
  designation: 'Business Pitch Consultant & Author',
  role: 'Business Pitch Consultant, Strategist & Bestselling Author',
  image: '/speaker_thumbnails/Sid-Peimer-The-Speakers-Firm.jpg',
  trackId: 'digital-identity-cybersecurity-and-data-sovereignty',
  tags: [{
    id: 'pitching-excellence',
    label: 'Pitching Excellence'
  }, {
    id: 'tech-disruption',
    label: 'Tech Disruption'
  }],
  snippet: 'Business pitch strategist and author of "The Clear Win" advising companies on strategic proposal design and communication.',
  spanClassName: 'col-span-12 md:col-span-5',
  wipeDelay: 0.2,
  entryDelay: 0.3
}, {
  id: 'sibusiso-molimi',
  name: 'Sibusiso Molimi',
  designation: 'Master of Ceremonies & Speaker',
  role: 'Master of Ceremonies, Keynote Speaker, Entrepreneur & Perspective-Shifter',
  image: '/speaker_thumbnails/Sibusiso-Molimi-The-Speakers-Firm.jpg',
  trackId: 'mc-and-facilitators',
  tags: [{
    id: 'premium-hosting',
    label: 'Premium Hosting'
  }, {
    id: 'perspective-shift',
    label: 'Perspective Shift'
  }],
  snippet: 'Polished master of ceremonies and motivational speaker guiding corporate teams on accountability and perspective alignment.',
  spanClassName: 'col-span-12 md:col-span-5',
  wipeDelay: 0.25,
  entryDelay: 0.35
}, {
  id: 'pastor-tebogo-moema',
  name: 'Pastor Tebogo Moema',
  designation: 'Spiritual Leader & Counselor',
  role: 'Spiritual Leader, Relationship Counselor & Bestselling Author',
  image: '/speaker_thumbnails/Tebogo-Moema-The-Speakers-Firm.jpg',
  trackId: 'gender',
  tags: [{
    id: 'family-dynamics',
    label: 'Family Dynamics'
  }, {
    id: 'relationship-counseling',
    label: 'Relationship Counseling'
  }],
  snippet: 'Spiritual leader and relationship counselor facilitating workshops on family dynamics, domestic communication, and personal values.',
  spanClassName: 'col-span-12 md:col-span-7',
  wipeDelay: 0.3,
  entryDelay: 0.4
}, {
  id: 'pumela-salela',
  name: 'Dr. Pumela Salela',
  designation: 'CEO of Invest Global & Speaker',
  role: 'CEO of Invest Global, Economic Diplomacy Expert & Keynote Speaker',
  image: '/speaker_thumbnails/Dr-Pumela-Salela-The-Speakers-Firm.jpg',
  trackId: 'economics-and-politics',
  tags: [{
    id: 'economic-diplomacy',
    label: 'Economic Diplomacy'
  }, {
    id: 'country-branding',
    label: 'Country Branding'
  }],
  snippet: 'Internationally recognized authority in economic diplomacy, trade integration, and attracting Foreign Direct Investment.',
  spanClassName: 'col-span-12 md:col-span-5',
  wipeDelay: 0.1,
  entryDelay: 0.2
}, {
  id: 'jabulile-khumalo',
  name: 'Jabulile Khumalo',
  designation: 'Leadership Speaker & Author',
  role: 'Head of Client Relationship Management, Author & Leadership Speaker',
  image: '/speaker_thumbnails/Jabulile-Khumalo-The-Speakers-Firm.jpg',
  trackId: 'leadership',
  tags: [{
    id: 'human-systems',
    label: 'Human-Centered Leadership'
  }, {
    id: 'client-experience',
    label: 'Client Experience'
  }],
  snippet: 'Executive leader and author of "The Uncomfortable Grace of Becoming" bridging business operations with emotional intelligence.',
  spanClassName: 'col-span-12 md:col-span-7',
  wipeDelay: 0.15,
  entryDelay: 0.25
}, {
  id: 'monde-ndlovu',
  name: 'Monde Ndlovu',
  designation: 'Managing Director of the Black Management Forum',
  role: 'Managing Director of the BMF, Business Leader & Strategist',
  image: '/speaker_thumbnails/Monde-Ndlovu-The-Speakers-Firm.jpg',
  trackId: 'leadership-governance-and-risk-intelligence',
  tags: [{
    id: 'black-leadership',
    label: 'Black Leadership'
  }, {
    id: 'transformation',
    label: 'Transformation'
  }],
  snippet: 'Managing Director of the Black Management Forum leading socioeconomic development and corporate transformation roadmaps.',
  spanClassName: 'col-span-12 md:col-span-5',
  wipeDelay: 0.1,
  entryDelay: 0.2
}, {
  id: 'sid-peimer',
  name: 'Sid Peimer',
  designation: 'Executive Director of the Cape Chamber of Commerce',
  role: 'Executive Director of Cape Chamber of Commerce, Pitching Strategist & Author',
  image: '/speaker_thumbnails/Sid-Peimer-The-Speakers-Firm.jpg',
  trackId: 'digital-identity-cybersecurity-and-data-sovereignty',
  tags: [{
    id: 'business-pitching',
    label: 'Business Pitching'
  }, {
    id: 'corporate-strategy',
    label: 'Corporate Strategy'
  }],
  snippet: 'Executive Director of the Cape Chamber of Commerce and pitching expert helping organizations design winning strategies.',
  spanClassName: 'col-span-12 md:col-span-5',
  wipeDelay: 0.25,
  entryDelay: 0.35
}, {
  id: 'sibusiso-molimi',
  name: 'Sibusiso Molimi',
  designation: 'Corporate Master of Ceremonies',
  role: 'Corporate Master of Ceremonies, Host & Facilitator',
  image: '/speaker_thumbnails/Sibusiso-Molimi-The-Speakers-Firm.jpg',
  trackId: 'mc-and-facilitators',
  tags: [{
    id: 'corporate-hosting',
    label: 'Corporate Hosting'
  }, {
    id: 'panel-facilitation',
    label: 'Panel Facilitation'
  }],
  snippet: 'Polished corporate master of ceremonies facilitating high-level panels and executive events.',
  spanClassName: 'col-span-12 md:col-span-5',
  wipeDelay: 0.2,
  entryDelay: 0.3
}, {
  id: 'ndileka-mandela',
  name: 'Ndileka Mandela',
  designation: 'Social Activist & Author',
  role: 'Social Activist, Author & Founder of Thembelihle Development Foundation',
  image: '/speaker_thumbnails/Ndileka-Mandela-The-Speakers-Firm.jpg',
  trackId: 'gender',
  tags: [{
    id: 'gender-equality',
    label: 'Gender Equality'
  }, {
    id: 'social-justice',
    label: 'Social Justice'
  }],
  snippet: 'Social activist, author, and founder of Thembelihle Development Foundation driving development in rural schools.',
  spanClassName: 'col-span-12 md:col-span-5',
  wipeDelay: 0.15,
  entryDelay: 0.25
}, {
  id: 'noni-khumalo',
  name: 'Noni Khumalo',
  designation: 'Premium Master of Ceremonies',
  role: 'Premium Master of Ceremonies, Panel Facilitator & TV Host',
  image: '/speaker_thumbnails/Noni-Khumalo-The-Speakers-Firm.jpg',
  trackId: 'mc-and-facilitators',
  tags: [{
    id: 'premium-hosting',
    label: 'Premium Hosting'
  }, {
    id: 'panel-facilitation',
    label: 'Panel Facilitation'
  }],
  snippet: 'Highly polished master of ceremonies facilitating high-impact corporate discussions and panel sessions.',
  spanClassName: 'col-span-12 md:col-span-7',
  wipeDelay: 0.1,
  entryDelay: 0.2
}, {
  id: 'gcina-mhlophe-becker',
  name: 'Dr. Gcina Mhlophe Becker',
  designation: 'Celebrated Storyteller, Author & Activist',
  role: 'Founder of the Nozincwadi Literacy Campaign, Storyteller & Activist',
  image: '/speaker_thumbnails/Gcina-Mhlophe-Becker-The-Speakers-Firm.jpg',
  trackId: 'spirituality-heritage-and-identity',
  tags: [{
    id: 'literacy-campaign',
    label: 'Literacy Campaign'
  }, {
    id: 'cultural-heritage',
    label: 'Cultural Heritage'
  }],
  snippet: 'World-renowned storyteller, activist, and founder of the Nozincwadi Literacy Campaign promoting reading across Africa.',
  spanClassName: 'col-span-12 md:col-span-5',
  wipeDelay: 0.2,
  entryDelay: 0.3
}, {
  id: 'linda-maqoma',
  name: 'Linda Maqoma',
  designation: 'Black Business Council VP & Audit Specialist',
  role: 'VP of Black Business Council, Audit Committee Chair & Corporate Strategist',
  image: '/speaker_thumbnails/Linda-Maqoma-The-Speakers-Firm.jpg',
  trackId: 'leadership-governance-and-risk-intelligence',
  tags: [{
    id: 'corporate-leadership',
    label: 'Corporate Leadership'
  }, {
    id: 'financial-audit',
    label: 'Financial Audit'
  }],
  snippet: 'Black Business Council VP and strategic committee chairperson driving auditing and organizational governance.',
  spanClassName: 'col-span-12 md:col-span-7',
  wipeDelay: 0.1,
  entryDelay: 0.2
}, {
  id: 'theo-baloyi',
  name: 'Theo Baloyi',
  designation: 'Founder & CEO of Bathu Sneakers',
  role: 'Retail Pioneer, Entrepreneur & Founder of Bathu',
  image: '/speaker_thumbnails/Theo-Baloyi-The-Speakers-Firm.jpg',
  trackId: 'entrepreneurship-investment-and-business-growth',
  tags: [{
    id: 'retail-entrepreneurship',
    label: 'Retail Entrepreneurship'
  }, {
    id: 'job-creation',
    label: 'Job Creation'
  }],
  snippet: 'Pioneering retail entrepreneur and founder of Bathu sneakers driving job creation and brand building across South Africa.',
  spanClassName: 'col-span-12 md:col-span-5',
  wipeDelay: 0.15,
  entryDelay: 0.25
}, {
  id: 'gaby-magomola',
  name: 'Gaby Magomola',
  designation: 'Veteran Businessman & Author',
  role: 'Former Political Prisoner, Wall Street Banker, Author & Hotelier',
  image: '/speaker_thumbnails/Gaby-Magomola-The-Speakers-Firm.jpg',
  trackId: 'inspirational-keynote-speakers',
  tags: [{
    id: 'political-history',
    label: 'Political History'
  }, {
    id: 'corporate-finance',
    label: 'Corporate Finance'
  }],
  snippet: 'Respected corporate pioneer, former political prisoner, and author sharing lessons from Robben Island to Wall Street.',
  spanClassName: 'col-span-12 md:col-span-5',
  wipeDelay: 0.25,
  entryDelay: 0.35
}, {
  id: 'sir-max',
  name: 'Sir Max',
  designation: 'Motivational Speaker & Lateral Thinker',
  role: 'Motivational Speaker, Lateral Thinking Specialist & Broadcaster',
  image: '/speaker_thumbnails/Sir-Max-The-Speakers-Firm.jpg',
  trackId: 'inspirational-keynote-speakers',
  tags: [{
    id: 'mind-power',
    label: 'Mind Power'
  }, {
    id: 'lateral-thinking',
    label: 'Lateral Thinking'
  }],
  snippet: 'Dynamic motivational speaker and radio host coaching audiences in mind power and lateral corporate strategy.',
  spanClassName: 'col-span-12 md:col-span-5',
  wipeDelay: 0.1,
  entryDelay: 0.2
}, {
  id: 'tj-malamule',
  name: 'TJ Malamule',
  designation: 'NLP Coach & Team Building Expert',
  role: 'Bestselling Author, NLP Coach & Team Performance Advisor',
  image: '/speaker_thumbnails/TJ-Malamule-The-Speakers-Firm.jpg',
  trackId: 'inspirational-keynote-speakers',
  tags: [{
    id: 'nlp-coaching',
    label: 'NLP Coaching'
  }, {
    id: 'high-performance',
    label: 'High Performance'
  }],
  snippet: 'Bestselling author and executive coach helping teams maximize output using neuro-linguistic programming.',
  spanClassName: 'col-span-12 md:col-span-7',
  wipeDelay: 0.15,
  entryDelay: 0.25
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
  id: 'africas-1',
  className: 'block text-[clamp(54px,18vw,72px)] md:text-[106px] lg:text-[138px] leading-[0.9] tracking-[-0.065em]',
  words: [{
    id: 'africas-1-word',
    text: "A Leading",
    isRed: false
  }]
}, {
  id: 'strategic',
  className: 'block max-w-none text-[clamp(34px,9.2vw,58px)] sm:text-[clamp(52px,8.6vw,72px)] md:text-[clamp(68px,8.6vw,104px)] lg:text-[clamp(92px,9.4vw,118px)] xl:text-[122px] leading-[0.9] tracking-[-0.055em] -ml-1 md:-ml-2 lg:-ml-3',
  words: [{
    id: 'strategic-word',
    text: 'African',
    isRed: false
  }]
}, {
  id: 'speakers-bureau',
  className: 'block max-w-none text-[clamp(34px,9.2vw,58px)] sm:text-[clamp(52px,8.6vw,72px)] md:text-[clamp(68px,8.6vw,104px)] lg:text-[clamp(92px,9.4vw,118px)] xl:text-[122px] leading-[0.9] tracking-[-0.055em] -ml-1 md:-ml-2 lg:-ml-3',
  words: [{
    id: 'speakers-word',
    text: 'Speakers',
    isRed: false
  }, {
    id: 'bureau-word',
    text: 'Bureau.',
    isRed: true
  }]
}];

const SPEAKER_VIDEOS = [
  {
    id: 'SEeymv8o9OY',
    title: 'Pumela Salela',
    subtitle: 'UK Country Head, Brand South Africa',
    description: 'Equipping leaders with practical strategies at the intersection of business, investment, and global strategy.',
    thumbnail: 'https://img.youtube.com/vi/SEeymv8o9OY/hqdefault.jpg'
  },
  {
    id: 'XiRZfz001Og',
    title: 'Prince Mashele',
    subtitle: 'Political Scientist, Author & Public Intellectual',
    description: 'Delivering bold political intelligence, strategic insights, and thought-provoking perspectives to help leaders navigate today\'s realities.',
    thumbnail: 'https://img.youtube.com/vi/XiRZfz001Og/hqdefault.jpg'
  },
  {
    id: 'gR9vlxv_y4o',
    title: 'Noni Khumalo',
    subtitle: 'Broadcaster, Producer & MC',
    description: 'An award-winning broadcaster and dynamic speaker embodying the power of purpose, presence, and possibility.',
    thumbnail: 'https://img.youtube.com/vi/gR9vlxv_y4o/hqdefault.jpg'
  },
  {
    id: 'A05nON7UWKg',
    title: 'Ntsoaki Sibiya',
    subtitle: 'Mentorship Maven, Enterprise & Founder Development',
    description: 'An award-winning mentor challenging conventional thinking and reminding leaders that growth begins with capable people.',
    thumbnail: 'https://img.youtube.com/vi/A05nON7UWKg/hqdefault.jpg'
  },
  {
    id: 'BW1M_Pa8DJo',
    title: 'Musa Sono',
    subtitle: 'Agripreneur & Motivational Speaker',
    description: 'A dynamic young leader, entrepreneur, and motivational speaker bringing a fresh voice to conversations around purpose and discipline.',
    thumbnail: 'https://img.youtube.com/vi/BW1M_Pa8DJo/hqdefault.jpg'
  },
  {
    id: 'wIt-HmG5RwQ',
    title: 'Dr. Tumelo Chaka',
    subtitle: 'The Brand Economist™',
    description: 'Meet Dr. Tumelo Chaka, sharing insights at the intersection of brand strategy, consumer culture, and commercial growth.',
    thumbnail: 'https://img.youtube.com/vi/wIt-HmG5RwQ/hqdefault.jpg'
  },
  {
    id: 'YVgFd5ljYJI',
    title: 'Apostle Dr. Steven Thebe Molakeng',
    subtitle: 'Thought Leader, Pastor & Speaker',
    description: 'Apostle Dr. Steven Thebe Molakeng brings together insight, purpose, and lived experience to create conversations that challenge and inspire.',
    thumbnail: 'https://img.youtube.com/vi/YVgFd5ljYJI/hqdefault.jpg'
  },
  {
    id: 'VHrJM-9U_IM',
    title: 'Jessica Dube',
    subtitle: 'Broadcast Producer, Presenter & Global Voice Artist',
    description: 'Jessica Dube brings versatility, presence, and a deep understanding of storytelling, media production, and compelling communication.',
    thumbnail: 'https://img.youtube.com/vi/VHrJM-9U_IM/hqdefault.jpg'
  },
  {
    id: 'STtoaFX7A-I',
    title: 'Dr. Pali Lehohla',
    subtitle: 'Economist & Former Statistician-General of South Africa',
    description: 'Connecting statistical data to the realities of society, leadership, and public policy.',
    thumbnail: 'https://img.youtube.com/vi/STtoaFX7A-I/hqdefault.jpg'
  },
  {
    id: 'UOeqwEC-nxA',
    title: 'Palesa Dooms',
    subtitle: 'Public Speaking Coach, Speaker & Founder of Unforgettable Speakers',
    description: 'An award-winning public speaking coach helping leaders craft unforgettable messages and command the stage with confidence.',
    thumbnail: 'https://img.youtube.com/vi/UOeqwEC-nxA/hqdefault.jpg'
  },
  {
    id: 'QVZzW-RGj0g',
    title: 'Prof. Shingai Mutambirwa',
    subtitle: 'Head of Urology, Sefako Makgatho Health Sciences University',
    description: 'A leading urologist, academic, and health advocate sharing vital insights on men\'s health, wellness, and medical innovation.',
    thumbnail: 'https://img.youtube.com/vi/QVZzW-RGj0g/hqdefault.jpg'
  },
  {
    id: 'gVh6u7s6yR4',
    title: 'Dr. Jerry Gule',
    subtitle: 'Director & Executive Coach, Gule Executive Coaching',
    description: 'An experienced executive coach and business leader guiding professionals in strategic development, leadership, and organizational growth.',
    thumbnail: 'https://img.youtube.com/vi/gVh6u7s6yR4/hqdefault.jpg'
  }
];

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
  href: '/contact'
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
const MAIN_CATEGORIES = CATEGORIES_CONFIG.slice(0, 11);
const SUBMENU_CATEGORIES = CATEGORIES_CONFIG.slice(11);

const FloatingNav = ({
  searchQuery,
  onSearchQueryChange
}: FloatingNavProps) => {
  const [isSearchExpanded, setIsSearchExpanded] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isMobileCategoriesOpen, setIsMobileCategoriesOpen] = React.useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();
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
            <input ref={searchInputRef} id="nav-faculty-search" value={searchQuery} onChange={handleSearchChange} onKeyDown={handleSearchKeyDown} type="search" placeholder="Find a speaker" className="w-[240px] border-b bg-transparent pb-1 text-[14px] font-normal outline-none placeholder:text-[#686869]" style={{
            borderColor: COLORS.borderGray,
            color: COLORS.black
          }} />
          </motion.div>
        </div>
        <a href="/contact" className="whitespace-nowrap rounded-full px-5 py-2 text-[12px] font-bold uppercase tracking-[0.1em] text-white transition-transform active:scale-95" style={{
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
            <div className="flex flex-col gap-1 max-h-[500px] overflow-y-auto pr-1">
              {/* Mobile Search input at the top to prevent virtual keyboard overlaps */}
              <form className="mb-4 border-b pb-5" role="search" onSubmit={event => event.preventDefault()} style={{
                borderColor: COLORS.borderGray
              }}>
                <label htmlFor="mobile-nav-faculty-search" className="sr-only">Search faculty</label>
                <div className="flex items-center gap-3 rounded-full border bg-white/60 px-4 py-3" style={{
                  borderColor: COLORS.borderGray
                }}>
                  <Search aria-hidden="true" className="h-4 w-4 shrink-0" style={{
                    color: COLORS.red
                  }} />
                  <input id="mobile-nav-faculty-search" value={searchQuery} onChange={handleMobileSearchChange} type="search" placeholder="Find a speaker" className="min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-[#686869]" style={{
                    color: COLORS.black
                  }} />
                </div>
              </form>

              {[
                { label: "Find a Speaker", href: "/find-a-speaker" },
                { label: "About Us", href: "/about" },
                { label: "Executive Dialogues", href: "/executive-dialogues" },
                { label: "Upcoming Events", href: "/upcoming-events" },
                { label: "Gallery", href: "/gallery" },
                { label: "Media", href: "/media" },
                { label: "Contact Us", href: "/contact" },
                { label: "Join Us", href: "/join-the-speakers-firm" }
              ].map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <Link 
                    key={link.href}
                    href={link.href}
                    onClick={handleMobileMenuClose}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-3 py-3 text-[13px] font-bold uppercase tracking-[0.12em] transition-all duration-200 active:text-[#e30e04]",
                      isActive 
                        ? "text-[#e30e04] bg-gray-50/60 font-extrabold" 
                        : "text-[#212121] hover:text-[#e30e04]"
                    )}
                    style={{ color: isActive ? COLORS.red : COLORS.black }}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight aria-hidden="true" className={cn("h-4 w-4 transition-transform", isActive ? "text-[#e30e04] translate-x-0.5 -translate-y-0.5" : "text-[#212121]/45")} style={{ color: isActive ? COLORS.red : undefined }} />
                  </Link>
                );
              })}

              {/* Action CTA Buttons */}
              <div className="mt-4 flex flex-col gap-3 px-2 pt-2">
                <Link 
                  href="/brief-us" 
                  onClick={handleMobileMenuClose}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#e30e04] px-5 py-3 text-center text-[11px] font-bold uppercase tracking-[0.1em] text-white transition-all active:scale-95 shadow-[0_8px_20px_rgba(227,14,4,0.2)]"
                >
                  <span>Brief Us Now</span>
                </Link>
                <Link 
                  href="/book-a-speaker" 
                  onClick={handleMobileMenuClose}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#000000] px-5 py-3 text-center text-[11px] font-bold uppercase tracking-[0.1em] text-white transition-all active:scale-95 border border-white/10 hover:bg-[#1E1E1E]"
                >
                  <span>Book A Speaker</span>
                </Link>
              </div>
            </div>
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
  const [step, setStep] = React.useState(1);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [formData, setFormData] = React.useState({
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
    if (validateStep(step)) setStep(prev => prev + 1);
  };
  const prevStep = () => {
    setStep(prev => Math.max(1, prev - 1));
  };

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateStep(3)) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1200);
    }
  };

  return <section id="brief-us" className="relative w-full border-t" style={{
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
            }} onSubmit={handleSubmit} className="flex flex-col gap-6" aria-label="Brief the Bureau contact form">
                  
                  {/* Step Tracker */}
                  <div className="pb-4 border-b border-black/5 flex justify-between items-center text-xs font-bold uppercase tracking-wider text-[#686869]">
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
                            <select required className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors animate-none" value={formData.format} onChange={e => handleFieldChange("format", e.target.value)}>
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
                            <select required className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors animate-none" value={formData.audienceSize} onChange={e => handleFieldChange("audienceSize", e.target.value)}>
                              <option value="" disabled>Select range...</option>
                              <option value="Under 50 (Executive/Closed Door)">Under 50 (Executive/Closed Door)</option>
                              <option value="50-200">50–200</option>
                              <option value="200-500">200–500</option>
                              <option value="500+ (Large Scale Summit)">500+ (Large Scale Summit)</option>
                            </select>
                          </label>
                          <label className="flex flex-col gap-2 sm:col-span-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#686869]">Allocated Talent Budget*</span>
                            <select required className="border border-black/20 px-4 py-3 rounded-lg text-sm bg-transparent outline-none focus:border-[#e30e04] transition-colors animate-none" value={formData.budget} onChange={e => handleFieldChange("budget", e.target.value)}>
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
                          <button disabled={isSubmitting} className="flex items-center gap-2 rounded-full border border-red bg-[#e30e04] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-white hover:bg-black hover:border-black transition-colors duration-300 disabled:opacity-50" type="submit">
                            <span>{isSubmitting ? "Requesting..." : "Request Talent Recommendations"}</span>
                          </button>
                        </div>
                      </motion.fieldset>
                    )}
                  </AnimatePresence>

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
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [hoveredId, setHoveredId] = React.useState<string | null>(null);
  const [activeHeroSlide, setActiveHeroSlide] = React.useState(0);
  const [activeSpeakerCategory, setActiveSpeakerCategory] = React.useState('All');
  const [isSpeakerCarouselHovering, setIsSpeakerCarouselHovering] = React.useState(false);
  const [isSpeakerCarouselInteracting, setIsSpeakerCarouselInteracting] = React.useState(false);
  const [activeClipSpeakerId, setActiveClipSpeakerId] = React.useState<string | null>(null);
  const [activeClipIframeSrc, setActiveClipIframeSrc] = React.useState('');
  const [activeInviteImage, setActiveInviteImage] = React.useState<string | null>(null);
  const [activeHomeVideoId, setActiveHomeVideoId] = React.useState<string | null>(null);

  const router = useRouter();
  const searchParams = useSearchParams();

  // Preload all speaker images to make category switches and image displays instant
  React.useEffect(() => {
    FEATURED_SPEAKERS.forEach(speaker => {
      const img = new Image();
      img.src = speaker.image;
    });
  }, []);

  // Sync category state from URL query parameters
  React.useEffect(() => {
    const urlCategory = searchParams.get("category");
    if (urlCategory) {
      const match = CATEGORIES_CONFIG.find(
        c => c.buttonLabel.toLowerCase() === urlCategory.toLowerCase() || 
             c.id.toLowerCase() === urlCategory.toLowerCase() ||
             c.id.toLowerCase().startsWith(urlCategory.toLowerCase())
      );
      if (match) {
        setActiveSpeakerCategory(match.id);
      } else if (urlCategory.toLowerCase() === 'all') {
        setActiveSpeakerCategory('All');
      }
    }
  }, [searchParams]);

  // Sync category state from sticky bottom menu custom events
  React.useEffect(() => {
    const handleCategorySelect = (e: Event) => {
      const customEvent = e as CustomEvent<any>;
      const detail = customEvent.detail;
      const label = typeof detail === 'string' ? detail : detail?.label;
      if (!label) return;

      const match = CATEGORIES_CONFIG.find(
        c => c.buttonLabel.toLowerCase() === label.toLowerCase() || 
             c.id.toLowerCase() === label.toLowerCase() ||
             c.id.toLowerCase().startsWith(label.toLowerCase())
      );
      if (match) {
        setActiveSpeakerCategory(match.id);
      } else if (label.toLowerCase() === 'all') {
        setActiveSpeakerCategory('All');
      }
    };
    window.addEventListener('tsf-select-category', handleCategorySelect);
    return () => window.removeEventListener('tsf-select-category', handleCategorySelect);
  }, []);

  const refCategoryContainer = React.useRef<HTMLDivElement | null>(null);
  const speakerCarouselRef1 = React.useRef<HTMLDivElement | null>(null);
  const speakerCarouselRef2 = React.useRef<HTMLDivElement | null>(null);
  const speakerCarouselRef3 = React.useRef<HTMLDivElement | null>(null);
  const welcomeCarouselRef = React.useRef<HTMLDivElement | null>(null);
  const welcomeIndexRef = React.useRef(30);
  const animateWelcomeScroll = (targetLeft: number, duration: number = 1400) => {
    const c = welcomeCarouselRef.current;
    if (!c) return () => {};
    
    const startLeft = c.scrollLeft;
    const distance = targetLeft - startLeft;
    const startTime = window.performance.now();
    const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    
    let animationFrame = 0;
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);
      
      if (c) c.scrollLeft = startLeft + distance * easedProgress;
      
      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      }
    };
    
    animationFrame = window.requestAnimationFrame(step);
    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  };

  const welcomeAnimationCancelRef = React.useRef<(() => void) | null>(null);
  const welcomeInteractingTimeoutRef = React.useRef<number | null>(null);
  const welcomeBoundaryTimeoutRef = React.useRef<number | null>(null);
  const testimonialCarouselRef = React.useRef<HTMLDivElement | null>(null);
  const [isHoveredRow1, setIsHoveredRow1] = React.useState(false);
  const [isHoveredRow2, setIsHoveredRow2] = React.useState(false);
  const [isHoveredRow3, setIsHoveredRow3] = React.useState(false);
  const [isWelcomeInteracting, setIsWelcomeInteracting] = React.useState(false);
  const clipIframeRef = React.useRef<HTMLIFrameElement | null>(null);
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

  const handleNavFacultySearchChange = (value: string) => {
    setLocalSearch(value);
    window.dispatchEvent(new CustomEvent('tsf-search', { detail: value }));
  };

  const getTextFromNode = (node: any): string => {
    if (!node) return "";
    if (typeof node === 'string' || typeof node === 'number') {
      return String(node);
    }
    if (Array.isArray(node)) {
      return node.map(getTextFromNode).join(" ");
    }
    if (node.props && node.props.children) {
      return getTextFromNode(node.props.children);
    }
    return "";
  };

  const displayedFeaturedSpeakers = FEATURED_SPEAKERS.filter(speaker => {
    // 1. Category Filter
    if (activeSpeakerCategory !== 'All') {
      const allowedSpeakers = CATEGORY_SPEAKERS_MAP[activeSpeakerCategory];
      if (allowedSpeakers) {
        if (!allowedSpeakers.includes(speaker.id)) {
          return false;
        }
      } else {
        // Fallback to legacy matching if not in mapped categories
        const catConfig = CATEGORIES_CONFIG.find(c => c.id === activeSpeakerCategory);
        if (!catConfig) return false;
        
        const targetLabel = catConfig.buttonLabel.toLowerCase();
        const speakerCategories = Array.isArray(speaker.category) ? speaker.category : [speaker.category];
        
        const categoryMatches = speakerCategories.some(cat => {
          let normalized = cat.toLowerCase();
          if (normalized === "mcs") normalized = "mc's";
          else if (normalized === "geopolitics") normalized = "economics";
          else if (normalized === "organisational agility" || normalized === "team-building" || normalized === "winning mindset") normalized = "leadership";
          else if (normalized === "futurists" || normalized === "business transformation") normalized = "a.i.";
          else if (normalized === "sustainability") normalized = "governance";
          else if (normalized === "reputation" || normalized === "branding") normalized = "media";
          else if (normalized === "sales") normalized = "entrepreneurship";
          return normalized === targetLabel;
        });
        
        if (!categoryMatches) return false;
      }
    }

    // 2. Search Query Filter
    if (normalizedFacultySearchQuery !== '') {
      const q = normalizedFacultySearchQuery;
      
      // Match Name
      const nameMatch = speaker.name.toLowerCase().includes(q);
      
      // Match Quote
      const quoteMatch = speaker.quote.toLowerCase().includes(q);
      
      // Match Category strings
      const categoryStringMatch = Array.isArray(speaker.category)
        ? speaker.category.some(cat => cat.toLowerCase().includes(q))
        : speaker.category.toLowerCase().includes(q);

      // Match Bio/Title text content using recursive extractor
      const bioText = getTextFromNode(speaker.bio);
      const bioMatch = bioText.toLowerCase().includes(q);

      return nameMatch || quoteMatch || categoryStringMatch || bioMatch;
    }

    return true;
  });

  const numRows = displayedFeaturedSpeakers.length <= 8 ? 1 : (displayedFeaturedSpeakers.length <= 16 ? 2 : 3);
  const row1Speakers: typeof FEATURED_SPEAKERS = [];
  const row2Speakers: typeof FEATURED_SPEAKERS = [];
  const row3Speakers: typeof FEATURED_SPEAKERS = [];
  displayedFeaturedSpeakers.forEach((speaker, index) => {
    if (numRows === 1) {
      row1Speakers.push(speaker);
    } else if (numRows === 2) {
      if (index % 2 === 0) row1Speakers.push(speaker);
      else row2Speakers.push(speaker);
    } else {
      if (index % 3 === 0) row1Speakers.push(speaker);
      else if (index % 3 === 1) row2Speakers.push(speaker);
      else row3Speakers.push(speaker);
    }
  });

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
    const catConfig = CATEGORIES_CONFIG.find(c => c.id === category);
    const label = catConfig ? catConfig.buttonLabel : category;
    
    // Sync sticky bottom menu without triggering global search expansion
    window.dispatchEvent(new CustomEvent('tsf-select-category', { 
      detail: { label: label, syncSearch: false } 
    }));
    
    // Sync URL search parameters
    const params = new URLSearchParams(window.location.search);
    if (category === 'All') {
      params.delete('category');
    } else {
      params.set('category', label);
    }
    router.push(`/?${params.toString()}`, { scroll: false });
  };

  const handleWelcomeCarouselScroll = (direction: 'left' | 'right') => {
    const c = welcomeCarouselRef.current;
    if (!c) return;
    
    setIsWelcomeInteracting(true);
    
    // Clear any pending interaction resets
    if (welcomeInteractingTimeoutRef.current) window.clearTimeout(welcomeInteractingTimeoutRef.current);
    if (welcomeBoundaryTimeoutRef.current) window.clearTimeout(welcomeBoundaryTimeoutRef.current);
    if (welcomeAnimationCancelRef.current) welcomeAnimationCancelRef.current();
    
    const gap = window.innerWidth >= 768 ? 30 : 20;
    const children = c.children;
    if (children.length === 0) return;
    const cardElement = children[0] as HTMLDivElement;
    const currentCardWidth = cardElement.clientWidth + gap;
    
    const expectedCurrentLeft = welcomeIndexRef.current * currentCardWidth;
    
    // Sync check: if c.scrollLeft is not where we expect, snap it to the starting card instantly first
    if (Math.abs(c.scrollLeft - expectedCurrentLeft) > currentCardWidth * 0.5) {
      c.scrollLeft = expectedCurrentLeft;
    }

    if (direction === 'right') {
      welcomeIndexRef.current++;
    } else {
      welcomeIndexRef.current--;
    }
    
    const targetLeft = welcomeIndexRef.current * currentCardWidth;
    welcomeAnimationCancelRef.current = animateWelcomeScroll(targetLeft, 1400);
    
    // Check boundaries and reset index seamlessly after the smooth scroll finishes (1400ms)
    if (welcomeIndexRef.current >= 45) {
      welcomeBoundaryTimeoutRef.current = window.setTimeout(() => {
        welcomeIndexRef.current = 30;
        if (c) c.scrollLeft = 30 * currentCardWidth;
      }, 1450) as any;
    } else if (welcomeIndexRef.current <= 15) {
      welcomeBoundaryTimeoutRef.current = window.setTimeout(() => {
        welcomeIndexRef.current = 30;
        if (c) c.scrollLeft = 30 * currentCardWidth;
      }, 1450) as any;
    }
    
    welcomeInteractingTimeoutRef.current = window.setTimeout(() => {
      setIsWelcomeInteracting(false);
    }, 1600) as any;
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

  const handleTestimonialCarouselAdvance = (direction: 'previous' | 'next') => {
    const carousel = testimonialCarouselRef.current;
    if (!carousel) return;
    const card = carousel.querySelector<HTMLElement>('[data-testimonial-card="true"]');
    const cardTravel = card ? (card.offsetWidth + 32) : 400; // width + gap
    const amount = direction === 'next' ? cardTravel : -cardTravel;
    carousel.scrollBy({
      left: amount,
      behavior: 'smooth'
    });
  };

  React.useEffect(() => {
    const carousel = testimonialCarouselRef.current;
    if (!carousel) return;

    let animationId: number;
    let isPaused = false;

    const scroll = () => {
      if (!isPaused && carousel) {
        carousel.scrollLeft += 0.8; // Smooth autoscroll speed
        
        const halfScrollWidth = carousel.scrollWidth / 2;
        if (carousel.scrollLeft >= halfScrollWidth) {
          carousel.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };

    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);
    
    // Start smooth autoscroll
    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
      carousel.removeEventListener('mouseenter', handleMouseEnter);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

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
    const c = welcomeCarouselRef.current;
    if (!c || prefersReducedMotion) return undefined;

    const gap = window.innerWidth >= 768 ? 30 : 20;
    
    const initializeScroll = () => {
      const children = c.children;
      if (children.length === 0) return;
      const cardElement = children[0] as HTMLDivElement;
      const cardWidth = cardElement.clientWidth + gap;
      c.scrollLeft = welcomeIndexRef.current * cardWidth;
    };
    
    // Set initial position to start of 3rd loop set
    setTimeout(initializeScroll, 150);
    
    const interval = setInterval(() => {
      if (isWelcomeInteracting) return;
      
      const children = c.children;
      if (children.length === 0) return;
      const cardElement = children[0] as HTMLDivElement;
      const currentCardWidth = cardElement.clientWidth + gap;
      
      if (welcomeAnimationCancelRef.current) welcomeAnimationCancelRef.current();
      
      const expectedCurrentLeft = welcomeIndexRef.current * currentCardWidth;
      if (Math.abs(c.scrollLeft - expectedCurrentLeft) > currentCardWidth * 0.5) {
        c.scrollLeft = expectedCurrentLeft;
      }
      
      welcomeIndexRef.current++;
      const targetLeft = welcomeIndexRef.current * currentCardWidth;
      welcomeAnimationCancelRef.current = animateWelcomeScroll(targetLeft, 1400);
      
      // If we scroll past the 3rd set, jump back to 2nd set seamlessly
      if (welcomeIndexRef.current >= 45) {
        setTimeout(() => {
          welcomeIndexRef.current = 30;
          if (c) c.scrollLeft = 30 * currentCardWidth;
        }, 1450);
      }
    }, 5000); // 3.6s pause + 1.4s smooth slide out
    
    return () => {
      clearInterval(interval);
      if (welcomeInteractingTimeoutRef.current) window.clearTimeout(welcomeInteractingTimeoutRef.current);
      if (welcomeBoundaryTimeoutRef.current) window.clearTimeout(welcomeBoundaryTimeoutRef.current);
      if (welcomeAnimationCancelRef.current) welcomeAnimationCancelRef.current();
    };
  }, [isWelcomeInteracting, prefersReducedMotion]);

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
          background-color: #e5e5e5;
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
          {HERO_SLIDES.map((slide, slideIndex) => <motion.img key={slide.id} src={isMobile && (slide as any).mobileImage ? (slide as any).mobileImage : slide.image} alt="" aria-hidden="true" className={cn("absolute inset-0 h-full w-full object-cover", slide.position || "object-center")} initial={false} animate={{
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
              <Link href="/brief-us" className="flex w-full items-center gap-2 p-1.5 rounded-full border bg-white sm:w-auto" style={{
              borderColor: 'rgba(255, 255, 255, 0.18)'
            }}>
                <span className="flex flex-1 items-center justify-center gap-3 rounded-full px-5 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-white sm:flex-none sm:px-10 sm:py-4 sm:text-[13px]" style={{
                backgroundColor: COLORS.red
              }}><span>Brief Us Now</span><ArrowRight aria-hidden="true" size={16} /></span>
              </Link>
              <Link href="/book-a-speaker" className="w-full rounded-full border px-6 py-3 text-center text-[12px] font-bold uppercase tracking-[0.1em] backdrop-blur-sm sm:w-auto sm:px-10 sm:py-4 sm:text-[13px] text-white border-white/25 hover:border-white/50 transition-colors duration-300">
                Book a Speaker
              </Link>
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

      <RecommendedSpeakers />

      <section className="relative w-full overflow-hidden border-b bg-[#ffffff]" style={{
        borderColor: SOFT_RULE_COLOR
      }}>
        <VerticalBorderLines />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-12 md:px-16 md:py-20">
          <div className="mb-10 max-w-[800px]">
            <div className={SECTION_TAG_CLASS} style={SECTION_TAG_STYLE}>
              <span>Featured Event</span>
            </div>
            <h2 className="mt-6 text-[clamp(2.5rem,5vw,3.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.05em] text-[#000000]">
              Upcoming Book Launch.
            </h2>
            <p className="mt-4 text-sm md:text-base text-[#686869] leading-relaxed">
              Engaging with authoritative leadership voices, strategic ideas, and transformative literature shaping the future of African society, administration, and organizational design.
            </p>
          </div>
          <div className="relative w-full overflow-hidden rounded-[28px] border border-black/10 shadow-2xl bg-white">
            <img 
              src="/upcoming_events/Prof-Letlhokwa-George-Mpedi-Book-Launch-desktop.jpg" 
              alt="Prof. Letlhokwa George Mpedi Book Launch" 
              className="w-full h-auto block"
            />
          </div>
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
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-8 sm:py-10 md:py-12 relative z-10">
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

      <WhyChooseUs />

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
                      <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-white"><span>BOOK THE SPEAKER</span><ArrowUpRight className="w-4 h-4" /></div>
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
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-8 text-center sm:py-10 md:px-16 md:py-12">
          <AnimatedWordHeading as="h2" lines={BRIDGE_HEADING_LINES} className="mx-auto max-w-[1180px] font-serif text-[clamp(3rem,15vw,7.625rem)] font-light italic leading-[0.98] tracking-[-0.06em]" style={{
          color: COLORS.black
        }} />
          <p className="mx-auto mt-4 max-w-[640px] text-[18px] font-light leading-[1.7] md:text-[22px]" style={{
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
              Roundtable Conversations
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
          
          <div className="mt-12 flex justify-center">
            <Link 
              href="/executive-dialogues" 
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-black hover:bg-[#e30e04] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md active:scale-98"
            >
              <span>Explore Executive Dialogues</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

      </section>

      {/* Section: Institutional Trust */}
      <section id="institutional-trust" className="relative w-full border-t border-b overflow-hidden" style={{
        backgroundColor: COLORS.black,
        borderColor: '#212121'
      }}>
        <VerticalBorderLines isDark />
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 pt-20 sm:pt-24 relative z-10">
          <div className="flex flex-col">
            <div className={cn(SECTION_TAG_CLASS, 'self-start')} style={{
              ...SECTION_TAG_STYLE,
              borderColor: 'rgba(255,255,255,0.3)',
              color: '#F8F7F5'
            }}>
              <span>Institutional Trust</span>
            </div>
            
            <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-bold tracking-[-0.04em] leading-none uppercase mt-6 text-[#F8F7F5]">
              Why Leading Organisations Choose The Speakers Firm™
            </h2>

            {/* Corporate Brand Watermark Row */}
            <div className="mt-8 flex flex-wrap items-center justify-start gap-x-10 gap-y-4 opacity-30 select-none">
              {['Standard Bank', 'Bidvest Group', 'Anglo American', 'MTN Group', 'Shell', 'Deloitte'].map((brand, i) => (
                <span key={i} className="text-[10px] font-bold uppercase tracking-[0.24em] text-white">{brand}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Scrollable Testimonial Carousel Track */}
        <div className="relative group/testimonials w-full mt-12 pb-20 z-10">
          {/* Left Arrow Button */}
          <button 
            type="button" 
            aria-label="Show previous testimonials" 
            onClick={() => handleTestimonialCarouselAdvance('previous')} 
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 grid h-11 w-11 place-items-center rounded-full border bg-white/90 shadow-lg text-black transition-all duration-300 hover:bg-[#e30e04] hover:text-white hover:border-[#e30e04] md:opacity-0 md:group-hover/testimonials:opacity-100 focus:opacity-100"
            style={{ borderColor: 'rgba(0,0,0,0.1)' }}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div 
            ref={testimonialCarouselRef}
            className="scrollbar-none w-full overflow-x-auto scroll-smooth flex gap-8 px-6 md:px-16"
          >
            {[...Array(2)].flatMap((_, i) => [
              {
                id: 't1',
                title: "Strategic Talent That Delivers Results",
                quote: "The Speakers Firm did not simply secure a keynote speaker. They understood our strategy, audience and desired outcomes, then curated a voice that transformed our event into a powerful platform for insight, influence and action. If your organisation wants more than applause, brief The Speakers Firm.",
                attribution: "Verified Executive Review"
              },
              {
                id: 't2',
                title: "One Brief. Exceptional Talent. Seamless Delivery.",
                quote: "One brief gave us access to an exceptional selection of African and global speakers, MCs, facilitators and thought leaders. The process was fast, commercially focused and professionally managed from beginning to end. Make The Speakers Firm your first call when planning your next event.",
                attribution: "Institutional Client Review"
              },
              {
                id: 't3',
                title: "Talent Beyond the Published Portfolio",
                quote: "The Speakers Firm was not restricted by its existing portfolio. They searched the market, challenged conventional choices and secured the perfect talent for our audience and objectives. Give them your most demanding brief and allow them to find the voice your event deserves.",
                attribution: "Verified Strategic Partner"
              },
              {
                id: 't4',
                title: "Curated Recommendations Within 24 Hours",
                quote: "Within 24 hours, The Speakers Firm presented a carefully curated shortlist aligned with our strategy, audience, budget and brand. Their speed never compromised quality or relevance. Brief them today and accelerate your talent-booking decision.",
                attribution: "Verified Executive Review"
              },
              {
                id: 't5',
                title: "Reduced Risk. Greater Value. Stronger Impact.",
                quote: "The Speakers Firm saved our team valuable time, reduced booking risk and ensured that every commercial, contractual, and logistical detail was professionally managed. Their value extends far beyond securing talent. Partner with them for confidence from the first brief to the final applause.",
                attribution: "Institutional Client Review"
              },
              {
                id: 't6',
                title: "Audience Fit Over Profile and Popularity",
                quote: "Their recommendations were driven by strategic relevance, credibility and audience fit, not profile alone. The result was an authentic, compelling speaker who understood our context and delivered lasting value. Choose The Speakers Firm when impact matters more than celebrity.",
                attribution: "Verified Executive Review"
              },
              {
                id: 't7',
                title: "A Strategic Partner, Not Merely a Booking Agency",
                quote: "The Speakers Firm approached our engagement as a strategic talent partner. They interrogated the brief, strengthened our thinking and connected us with talent capable of advancing our leadership and organisational agenda. Bring them into the conversation early and let them shape the right solution.",
                attribution: "Strategic Partner Feedback"
              },
              {
                id: 't8',
                title: "World-Class African and Global Talent",
                quote: "The Speakers Firm combines a deep understanding of African audiences with access to leading African and global voices. They helped us deliver an experience that was locally relevant, globally credible, and commercially powerful. Partner with Africa’s leading speaker’s bureau for your next stage.",
                attribution: "Verified Strategic Partner"
              },
              {
                id: 't9',
                title: "Talent That Strengthens Brands",
                quote: "The talent secured by The Speakers Firm elevated our event, strengthened our brand positioning, and gave our audience ideas they could apply beyond the room. This was not simply a speaking engagement. It was a strategic investment in influence, reputation, and impact. Brief The Speakers Firm and turn your platform into a business asset.",
                attribution: "Verified Executive Review"
              },
              {
                id: 't10',
                title: "Our Agency of Choice",
                quote: "The right talent can change the energy of a room, sharpen a strategic conversation, and redefine the success of an event. The Speakers Firm delivered exactly that, with precision, professionalism, and measurable value. They remain our agency of choice for speakers, MCs, facilitators, and influential talent.",
                attribution: "Institutional Client Review"
              }
            ].map((item, idx) => (
              <div 
                key={`${item.id}-${i}-${idx}`}
                data-testimonial-card="true"
                className="relative rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10 backdrop-blur-md transition-all duration-500 hover:border-[#e30e04]/40 hover:bg-white/[0.04] group/card flex flex-col justify-between w-[300px] sm:w-[360px] md:w-[440px] shrink-0"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <Quote className="text-[#e30e04] h-8 w-8 opacity-80 transition-transform duration-300 group-hover/card:scale-110" />
                    <span className="text-[10px] text-white/20 font-mono tracking-widest uppercase">Verified Review</span>
                  </div>
                  <h3 className="text-[16px] sm:text-[18px] font-bold uppercase tracking-[0.02em] text-[#F8F7F5] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] font-light leading-[1.6] text-white/80">
                    "{item.quote}"
                  </p>
                </div>
                <div className="mt-8 border-t border-white/10 pt-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#AFB0B0]">
                    — {item.attribution}
                  </p>
                </div>
              </div>
            )))}
          </div>

          {/* Right Arrow Button */}
          <button 
            type="button" 
            aria-label="Show next testimonials" 
            onClick={() => handleTestimonialCarouselAdvance('next')} 
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 grid h-11 w-11 place-items-center rounded-full border bg-white/90 shadow-lg text-black transition-all duration-300 hover:bg-[#e30e04] hover:text-white hover:border-[#e30e04] md:opacity-0 md:group-hover/testimonials:opacity-100 focus:opacity-100"
            style={{ borderColor: 'rgba(0,0,0,0.1)' }}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Faculty in Action (Speaker Videos) */}
      <section className="relative w-full border-b bg-[#000000] text-[#ffffff] py-16 md:py-24 lg:py-32" style={{ borderColor: '#212121' }}>
        <VerticalBorderLines isDark />
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex flex-col items-start justify-between gap-6 sm:mb-16 md:flex-row md:items-end"
          >
            <div>
              <div className={SECTION_TAG_CLASS} style={SECTION_TAG_STYLE}>
                <span>FACULTY IN PROFILE</span>
              </div>
              <h2 className="mt-6 text-[clamp(2.5rem,11vw,3.75rem)] font-bold uppercase leading-[0.9] tracking-[-0.055em] text-white sm:text-6xl">
                MEET OUR LEADING<br />
                <span className="text-[#686869]">VOICES.</span>
              </h2>
              <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-[2px] bg-[#e30e04] mt-6" />
            </div>
            <p className="hidden max-w-xs text-right text-sm leading-relaxed text-[#AFB0B0] md:block">
              Explore the background, vision, and strategic insights of our distinguished speakers and thought leaders.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SPEAKER_VIDEOS.map((video) => (
              <motion.figure 
                key={video.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative cursor-pointer" 
                onClick={() => setActiveHomeVideoId(video.id)}
              >
                <div className="relative aspect-video overflow-hidden rounded-[18px] border border-[#212121]">
                  <img 
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                    src={video.thumbnail} 
                    alt={video.title} 
                  />
                  <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/60" />
                  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white transition-colors group-hover:bg-[#e30e04] group-hover:border-[#e30e04]">
                      <Play className="ml-1 h-5 w-5 fill-current" />
                    </span>
                  </span>
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#e30e04] transition-all duration-500 group-hover:w-full" aria-hidden="true" />
                </div>
                <figcaption className="px-0 py-4">
                  <strong className="block text-[15px] font-bold uppercase tracking-[0.08em] text-[#F8F7F5]">{video.title}</strong>
                  <span className="mt-1 block text-[11px] uppercase tracking-[0.1em] text-[#e30e04] font-bold">{video.subtitle}</span>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#AFB0B0] font-light">{video.description}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Footer Master CTA */}
      <section id="master-cta" className="relative w-full border-b" style={{
        backgroundColor: COLORS.black,
        borderColor: '#212121',
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(227, 14, 4, 0.08) 0%, transparent 60%)'
      }}>
        <VerticalBorderLines isDark />
        <div className="max-w-[1440px] mx-auto px-6 py-20 sm:py-24 md:py-32 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[clamp(2.5rem,7vw,4.5rem)] font-bold tracking-[-0.04em] leading-[1.05] uppercase mx-auto max-w-[1080px] text-[#F8F7F5]"
          >
            The Right Talent Changes Everything.<br />Book Through The Speakers Firm.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-6 max-w-[720px] text-[16px] sm:text-[18px] md:text-[20px] font-light leading-[1.65] text-[#AFB0B0]"
          >
            Your next event deserves more than a recognised name. It deserves the right voice, strategically selected, and professionally delivered. Brief The Speakers Firm today and receive curated talent recommendations within 24 hours.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-10 flex justify-center"
          >
            <Link 
              href="/brief-us"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#e30e04] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.14em] text-white shadow-lg transition-all duration-300 hover:bg-white hover:text-black hover:scale-[1.03]"
            >
              <span>Make Us Your Agency of Choice</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
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
        {activeHomeVideoId && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveHomeVideoId(null)}
            className="fixed inset-0 z-[500] flex items-center justify-center bg-black/90 p-4 sm:p-6"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-black border border-white/10 shadow-2xl"
            >
              <button 
                type="button" 
                onClick={() => setActiveHomeVideoId(null)}
                className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/80 text-white hover:bg-[#e30e04] hover:border-[#e30e04] transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              <iframe 
                src={`https://www.youtube.com/embed/${activeHomeVideoId}?autoplay=1`}
                title="Speaker Video" 
                className="h-full w-full border-0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <BriefBureauFormSection />
    </motion.div>;
};
