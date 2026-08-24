"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Instagram, Linkedin, Menu, Play, X, Youtube, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
const filters = [{
  id: 'all',
  label: 'All'
}, {
  id: 'keynotes',
  label: 'Keynotes'
}, {
  id: 'executive-roundtables',
  label: 'Executive Roundtables'
}, {
  id: 'corporate-events',
  label: 'Corporate Events'
}, {
  id: 'summits',
  label: 'Summits'
}, {
  id: 'workshops',
  label: 'Workshops'
}, {
  id: 'international',
  label: 'International'
}];
const leratoSitholeImages = [
  '/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4527.JPG',
  '/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4535.JPG',
  '/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4563.JPG',
  '/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4568.JPG',
  '/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4581.JPG',
  '/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4592.JPG',
  '/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4598.JPG',
  '/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4606.JPG',
  '/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4610.JPG',
  '/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4611.JPG',
  '/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4614.JPG',
  '/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4617.JPG',
  '/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4619.JPG',
  '/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4624.JPG',
  '/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4635.JPG',
  '/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4662.JPG',
  '/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4666.JPG',
  '/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4677.JPG',
  '/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4679.JPG',
  '/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4681.JPG',
  '/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4682.JPG',
  '/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4685.JPG',
  '/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4686.JPG',
  '/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4691.JPG',
  '/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4694.JPG',
  '/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4696.JPG',
  '/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4698.JPG',
  '/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4700.JPG',
  '/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4723.JPG',
  '/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4726.JPG'
];

const sizweMpofuWalshImages = [
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_6796.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_6793.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_6785.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_6784.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_6776.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_6736.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_6717_1.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_6710.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_6705.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_6697.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_6673.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_6670.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_6665.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_6657.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_6648.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_6645.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_6644.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_6618.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_6609.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_6594.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_6584.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_6583.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_6581.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_6575.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_6560.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_6550.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_6542.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_6490.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_6489.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_6476.jpg'
];

const bonangMohaleImages = [
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_5265.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_5263.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_5255.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_5245.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_5244.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_5220.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_5219.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_5208.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_5206.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_5176.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_5169.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_5126.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_5124.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_5085.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_5081.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_5049.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_5039.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_5031.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_5023.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_5016.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_5008.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_5005.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_4994.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_4988.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_4981.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_4977.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_4976.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_4972.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_4868.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_4853.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_4824.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_4822.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_4816.jpg',
  'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_4795.jpg'
];

const galleryItems = [{
  id: 'lerato-sithole-aie-2026',
  title: 'Lerato Sithole - African Insurance Exchange - 2026',
  year: '2026',
  category: 'Corporate Events',
  image: '/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4611.JPG',
  aspect: 'wide',
  images: leratoSitholeImages
}, {
  id: 'sizwe-mpofu-walsh-alf-2026',
  title: 'Sizwe Mpofu-Walsh - African Leadership Festival 2026',
  year: '2026',
  category: 'International',
  image: 'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_6657.jpg',
  aspect: 'wide',
  images: sizweMpofuWalshImages
}, {
  id: 'prof-bonang-mohale-aie-2026',
  title: 'Prof Bonang Mohale - African Insurance Exchange - 2026',
  year: '2026',
  category: 'Corporate Events',
  image: 'https://cms.thespeakersfirm.co.za/wp-content/uploads/2026/08/DSC_4853.jpg',
  aspect: 'wide',
  images: bonangMohaleImages
}];
const videos = [
  {
    id: 'SEeymv8o9OY',
    title: 'Pumela Salela Profile',
    image: 'https://img.youtube.com/vi/SEeymv8o9OY/hqdefault.jpg'
  },
  {
    id: 'XiRZfz001Og',
    title: 'Prince Mashele Profile',
    image: 'https://img.youtube.com/vi/XiRZfz001Og/hqdefault.jpg'
  },
  {
    id: 'gR9vlxv_y4o',
    title: 'Noni Khumalo Profile',
    image: 'https://img.youtube.com/vi/gR9vlxv_y4o/hqdefault.jpg'
  },
  {
    id: 'A05nON7UWKg',
    title: 'Ntsoaki Sibiya Profile',
    image: 'https://img.youtube.com/vi/A05nON7UWKg/hqdefault.jpg'
  },
  {
    id: 'BW1M_Pa8DJo',
    title: 'Musa Sono Profile',
    image: 'https://img.youtube.com/vi/BW1M_Pa8DJo/hqdefault.jpg'
  },
  {
    id: 'wIt-HmG5RwQ',
    title: 'Dr. Tumelo Chaka Profile',
    image: 'https://img.youtube.com/vi/wIt-HmG5RwQ/hqdefault.jpg'
  },
  {
    id: 'YVgFd5ljYJI',
    title: 'Apostle Dr. Steven Thebe Molakeng Profile',
    image: 'https://img.youtube.com/vi/YVgFd5ljYJI/hqdefault.jpg'
  },
  {
    id: 'VHrJM-9U_IM',
    title: 'Jessica Dube Profile',
    image: 'https://img.youtube.com/vi/VHrJM-9U_IM/hqdefault.jpg'
  }
];
const eventStats = [{
  id: 'delegates',
  value: '500+',
  label: 'Delegates'
}, {
  id: 'days',
  value: '3',
  label: 'Days'
}, {
  id: 'countries',
  value: '28',
  label: 'Countries'
}];
const heroHeadingLines = [{
  id: 'moments',
  words: [{
    id: 'moments-word',
    text: 'MOMENTS'
  }]
}, {
  id: 'that-move',
  words: [{
    id: 'that-word',
    text: 'THAT'
  }, {
    id: 'move-word',
    text: 'MOVE'
  }]
}, {
  id: 'the-world',
  words: [{
    id: 'the-word',
    text: 'THE'
  }, {
    id: 'world-word',
    text: 'WORLD'
  }]
}];
const reveal = {
  initial: {
    opacity: 0,
    y: 24
  },
  whileInView: {
    opacity: 1,
    y: 0
  },
  viewport: {
    once: true,
    amount: 0.18
  },
  transition: {
    duration: 0.7,
    ease: 'easeOut' as const
  }
};
const redRuleTransition = {
  duration: 0.74,
  ease: 'easeOut' as const
};
type VerticalBorderLinesProps = {
  isDark?: boolean;
};
type AnimatedRedRuleProps = {
  className?: string;
};
type AnimatedWordHeadingProps = {
  lines: typeof heroHeadingLines;
  className: string;
  wordClassName?: string;
};
const AnimatedRedRule = ({
  className = 'mt-5'
}: AnimatedRedRuleProps) => {
  return <div className={`relative overflow-hidden ${className}`} aria-hidden="true">
      <motion.div initial={{
      scaleX: 0,
      opacity: 0
    }} whileInView={{
      scaleX: 1,
      opacity: 1
    }} viewport={{
      once: true,
      amount: 0.55
    }} transition={redRuleTransition} className="h-[2px] w-full origin-left bg-[#e30e04]" />
    </div>;
};
const SECTION_TAG_CLASS = 'inline-flex items-center border border-l-[4px] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] shadow-none';
const SECTION_TAG_STYLE = {
  backgroundColor: '#393939',
  borderColor: '#393939',
  borderLeftColor: '#e30e04',
  color: '#F8F7F5'
};

const SectionTag = ({
  children
}: {
  children: string;
}) => <span className={SECTION_TAG_CLASS} style={SECTION_TAG_STYLE}>{children}</span>;

const AnimatedWordHeading = ({
  lines,
  className,
  wordClassName = 'mr-[0.13em]'
}: AnimatedWordHeadingProps) => {
  let wordOrder = -1;
  return <h1 className={className}>
      {lines.map(line => <span key={line.id} className="block">
          {line.words.map(word => {
        wordOrder += 1;
        return <span key={word.id} className="inline-block overflow-hidden pr-[0.05em] align-top">
              <motion.span initial={{
            opacity: 0,
            y: 24,
            rotate: 3
          }} animate={{
            opacity: 1,
            y: 0,
            rotate: 0
          }} transition={{
            duration: 0.6,
            delay: wordOrder * 0.09,
            ease: [0.22, 1, 0.36, 1]
          }} className={`inline-block origin-bottom-left last:mr-0 ${wordClassName}`}>
                <span>{word.text}</span>
              </motion.span>
              <span aria-hidden="true" className="inline-block">&nbsp;</span>
            </span>;
      })}
        </span>)}
    </h1>;
};
const VerticalBorderLines = ({
  isDark = false
}: VerticalBorderLinesProps) => {
  const borderColor = isDark ? '#393939' : '#C7C7C8';
  const capColor = isDark ? '#FFFFFF' : '#212121';
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
export const TSFGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedGallery, setSelectedGallery] = useState<any | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedGallery) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      const galleryList = selectedGallery.images || [selectedGallery.image];
      if (e.key === 'Escape') {
        setSelectedGallery(null);
      } else if (e.key === 'ArrowLeft' && galleryList.length > 1) {
        setActiveImageIndex((prev) => (prev === 0 ? galleryList.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight' && galleryList.length > 1) {
        setActiveImageIndex((prev) => (prev === galleryList.length - 1 ? 0 : prev + 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedGallery]);

  const filteredItems = activeFilter === 'All' ? galleryItems : galleryItems.filter(item => item.category === activeFilter);
  return <main className="min-h-screen bg-[#ffffff] font-[Kontora,sans-serif] text-[#212121]">
      <section id="top" className="relative min-h-screen w-full overflow-hidden pt-20 pb-28 md:pt-24 lg:pb-44 bg-[#111111]" style={{
      backgroundColor: '#000000'
    }}>
        <div className="absolute inset-0 z-0 bg-[#111111]" aria-hidden="true">
          <img src="/galleries/LeratoSithole-AfricaInsuranceConference2026/DSC_4698.JPG" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.07)_0_1px,transparent_1px_42px)] opacity-[0.16]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        </div>
        <VerticalBorderLines isDark />
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] max-w-[1440px] flex-col justify-center px-6 md:px-16">
          <motion.div initial={{
          opacity: 0,
          y: 12
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="mb-6"><SectionTag>GALLERY</SectionTag></motion.div>
          <AnimatedWordHeading lines={heroHeadingLines} className="max-w-full overflow-hidden text-[clamp(3rem,15vw,7rem)] font-bold uppercase leading-[0.9] tracking-[-0.055em] text-[#F8F7F5] drop-shadow-[0_8px_34px_rgba(0,0,0,0.38)] sm:text-[clamp(4rem,12vw,7rem)]" />
          <motion.div aria-hidden="true" initial={{
          scaleX: 0,
          opacity: 0
        }} animate={{
          scaleX: 1,
          opacity: 1
        }} transition={{
          delay: 2.2,
          duration: 0.74,
          ease: [0.22, 1, 0.36, 1]
        }} className="mt-5 h-[3px] w-28 origin-left bg-[#e30e04] md:mt-7 md:w-40" />
          <div className="mt-6 flex max-w-[640px] flex-col gap-3 sm:mt-8">
            <motion.p initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 1.5,
            duration: 0.8
          }} className="text-[15px] font-normal leading-[1.6] text-[#AFB0B0] drop-shadow-[0_6px_22px_rgba(0,0,0,0.45)] md:text-[16px] md:leading-[1.65]">Explore highlights from our world-class events, executive summits, and speaker engagements.</motion.p>
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 1.7,
            duration: 0.8
          }} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href="/brief-us" className="flex w-full items-center gap-2 rounded-full border bg-white p-1.5 sm:w-auto" style={{
              borderColor: 'rgba(255, 255, 255, 0.18)'
            }}>
                <span className="flex flex-1 items-center justify-center gap-3 rounded-full bg-[#212121] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-white sm:flex-none sm:px-10 sm:py-4 sm:text-[13px]"><span>Brief Us</span><ArrowRight aria-hidden="true" size={16} /></span>
              </Link>
              <motion.a href="#gallery" whileHover={{
              scale: 1.02
            }} className="w-full rounded-full border border-[#F8F7F5]/40 px-6 py-3 text-center text-[12px] font-bold uppercase tracking-[0.1em] text-[#F8F7F5] backdrop-blur-sm sm:w-auto sm:px-10 sm:py-4 sm:text-[13px]">Explore Gallery</motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights (Dark Section) */}
      <section className="relative bg-[#212121] text-[#F8F7F5] py-16 md:py-24 lg:py-32">
        <VerticalBorderLines isDark />
        <div className="mx-auto max-w-[1440px] px-6 md:px-16">
          <motion.div {...reveal} id="gallery" className="mb-12 flex flex-col items-start justify-between gap-6 sm:mb-16 md:flex-row md:items-end">
            <div>
              <SectionTag>Highlights</SectionTag>
              <h2 className="mt-6 max-w-2xl text-[clamp(2.5rem,12vw,3.75rem)] font-bold uppercase leading-[0.9] tracking-[-0.055em] text-white sm:text-6xl">
                A room full<br /><span className="text-[#AFB0B0]">of possibility.</span>
              </h2>
              <AnimatedRedRule className="mt-6 w-full" />
            </div>
            <p className="hidden max-w-xs text-right text-sm leading-relaxed text-[#AFB0B0] md:block">
              A visual record of the ideas, conversations, and people shaping what comes next.
            </p>
          </motion.div>

          <div className="relative border-y border-white/10 py-5 mb-10" aria-label="Gallery filters">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#AFB0B0]">Browse by format</h2>
            <div className="flex gap-2 overflow-x-auto mt-4 pb-2 [scrollbar-width:none]">
              {filters.map(filter => (
                <button 
                  key={filter.id} 
                  type="button" 
                  onClick={() => setActiveFilter(filter.label)} 
                  className={`shrink-0 rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.1em] transition-colors ${activeFilter === filter.label ? 'bg-white text-black' : 'border border-white/20 text-[#AFB0B0] hover:border-white hover:text-white'}`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map(item => (
              <motion.figure 
                key={item.id} 
                {...reveal} 
                className="group relative min-h-[320px] cursor-pointer" 
                onClick={() => { setSelectedGallery(item); setActiveImageIndex(0); }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src={item.image} alt={item.title} />
                  <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-5 left-5 right-5 translate-y-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="block text-sm font-bold uppercase tracking-[0.08em]">{item.title}</span>
                    <span className="mt-1 block text-[11px] font-bold uppercase tracking-[0.12em] text-white/70">{item.category}</span>
                  </div>
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#e30e04] transition-all duration-500 group-hover:w-full" aria-hidden="true" />
                </div>
                <figcaption className="border-t border-white/10 px-0 py-4">
                  <strong className="block text-[13px] font-bold uppercase tracking-[0.08em] text-[#F8F7F5]">{item.title}</strong>
                  <span className="mt-1 block text-[11px] uppercase tracking-[0.1em] text-[#AFB0B0]">{item.year} / {item.category}</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Videos & Reels (Light Section) */}
      <section className="relative bg-[#ffffff] text-[#212121] py-16 md:py-24 lg:py-32 border-t border-[rgba(33,33,33,0.14)]">
        <VerticalBorderLines />
        <div className="mx-auto max-w-[1440px] px-6 md:px-16">
          <motion.div {...reveal}>
            <SectionTag>Videos & Reels</SectionTag>
            <h2 className="mt-6 text-[clamp(2.5rem,11vw,3.75rem)] font-bold uppercase leading-[0.9] tracking-[-0.055em] sm:text-6xl text-[#212121]">
              See the energy<br /><span className="text-[#686869]">in motion.</span>
            </h2>
            <AnimatedRedRule className="mt-6 w-full" />
          </motion.div>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
            {videos.map(video => (
              <figure key={video.id} className="group w-full cursor-pointer" onClick={() => setActiveVideoId(video.id)}>
                <div className="relative aspect-[9/16] overflow-hidden">
                  <img className="absolute inset-0 h-full w-full object-cover object-center" src={video.image} alt={video.title} />
                  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-black/20 text-black transition-colors group-hover:bg-[#e30e04] group-hover:text-white group-hover:border-[#e30e04]">
                      <Play className="ml-0.5 h-4 w-4 fill-current" />
                    </span>
                  </span>
                </div>
                <figcaption className="pt-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#212121]">{video.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
 
      <section id="contact" className="relative border-t border-[rgba(33,33,33,0.14)] py-16 md:py-24 lg:py-28"><VerticalBorderLines /><motion.div {...reveal} className="mx-auto grid max-w-[1440px] gap-10 px-6 md:px-16 lg:grid-cols-12 lg:items-end"><div className="lg:col-span-8"><SectionTag>Media Enquiries</SectionTag><h2 className="mt-7 text-[clamp(3rem,13vw,7rem)] font-bold uppercase leading-[0.86] tracking-[-0.055em]">Bring The Speakers Firm<br /><span className="text-[#686869]">to your stage.</span></h2><p className="mt-8 max-w-lg text-base leading-relaxed text-[#686869]">For press enquiries, event coverage, or to invite one of our speakers to your next gathering, our team would love to hear from you.</p></div><div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end"><Link href="/brief-us" className="inline-flex items-center rounded-full bg-[#e30e04] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-white">Brief Us Now <ArrowRight className="ml-2 h-4 w-4" /></Link><Link href="/contact" className="inline-flex items-center rounded-full border border-[#212121] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#212121]">Make An Enquiry</Link></div></motion.div></section>

      <AnimatePresence>
        {selectedGallery && (() => {
          const galleryList = selectedGallery.images || [selectedGallery.image];
          const currentImage = galleryList[activeImageIndex];
          return (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] flex flex-col justify-between bg-black/95 p-4 md:p-8"
              onClick={() => setSelectedGallery(null)}
            >
              <div className="flex items-center justify-between z-10 w-full text-white">
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-wider">{selectedGallery.title}</h2>
                  <p className="text-[10px] text-white/60 uppercase tracking-widest mt-0.5">{selectedGallery.year} / {selectedGallery.category}</p>
                </div>
                <button 
                  onClick={() => setSelectedGallery(null)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 hover:border-white/50 hover:bg-white/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="relative flex flex-1 items-center justify-center py-4" onClick={(e) => e.stopPropagation()}>
                {galleryList.length > 1 && (
                  <button 
                    onClick={() => setActiveImageIndex((prev) => (prev === 0 ? galleryList.length - 1 : prev - 1))}
                    className="absolute left-2 md:left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white hover:bg-white/10 transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                )}

                <div className="relative max-h-[70vh] max-w-full overflow-hidden select-none">
                  <motion.img 
                    key={currentImage}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    src={currentImage} 
                    alt="" 
                    className="max-h-[70vh] max-w-full object-contain mx-auto"
                  />
                </div>

                {galleryList.length > 1 && (
                  <button 
                    onClick={() => setActiveImageIndex((prev) => (prev === galleryList.length - 1 ? 0 : prev + 1))}
                    className="absolute right-2 md:right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white hover:bg-white/10 transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                )}
              </div>

              <div className="z-10 w-full flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
                <span className="text-[11px] font-bold tracking-widest text-white/55">
                  {activeImageIndex + 1} / {galleryList.length}
                </span>

                {galleryList.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto max-w-full pb-2 justify-center px-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    {galleryList.map((img: string, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0 overflow-hidden border-2 transition-all ${idx === activeImageIndex ? 'border-[#e30e04]' : 'border-transparent opacity-50 hover:opacity-100'}`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })()}
        {activeVideoId && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideoId(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 sm:p-6"
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
                onClick={() => setActiveVideoId(null)}
                className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/80 text-white hover:bg-[#e30e04] hover:border-[#e30e04] transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              <iframe 
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                title="Speaker Video" 
                className="h-full w-full border-0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>;
};
