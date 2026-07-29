"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "tech-leader",
    label: "Canva Africa Regional Lead",
    subtitle: "Leading Canva's mission to democratize creativity, design, and opportunity across Africa."
  },
  {
    id: "former-cmo-google",
    label: "Former CMO, Google Africa",
    subtitle: "Shaped Google's Sub-Saharan growth strategy, scaling access and digital skills."
  },
  {
    id: "men-empowerment",
    label: "Co-founder, AMC",
    subtitle: "Pioneers family leadership, men's mental health advocacy, and accountability across Africa."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "men-empowerment-social",
    number: "Theme 01",
    title: "Men’s Empowerment, Social Impact & Accountability.",
    copy: "Transforming family leadership and men's mental health to align personal integrity with social responsibility."
  },
  {
    id: "leadership-4ir",
    number: "Theme 02",
    title: "Purpose-Driven Leadership & Innovation.",
    copy: "Blending behavioral science and corporate strategy to lead with empathy, authenticity, and clarity in the modern era."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr Mzamo Masito is one of Africa’s most distinguished voices on leadership, purpose, and transformation, a business strategist and cultural architect redefining how men, organisations, and societies lead in the modern world. With more than 27 years of experience across technology, telecommunications, sport, consultancy, and consumer goods, he brings boardroom credibility, academic depth, and human-centred insight to every stage he steps onto.",
  "As the Africa Regional Lead at Canva, Dr Masito is leading the company’s mission to democratise creativity and opportunity across the continent, inspiring a new generation of African innovators to think boldly and design their own futures. His leadership is marked by authenticity, compassion, and strategic clarity, qualities that have made him a trusted guide to executives, entrepreneurs, and men navigating change.",
  "Previously the Chief Marketing Officer at Google Africa, Chief Brand Officer at Nike Africa, and Vice President of Brand Building at Unilever, Dr Masito has shaped some of the world’s most powerful brands. From Nike’s award-winning 2010 FIFA World Cup Campaign to Google’s Africa-wide growth strategy, his work has elevated purpose, culture, and inclusion into cornerstones of global brand success.",
  "His high-impact keynotes and masterclasses bring together behavioural science, leadership strategy, and cultural intelligence, offering men and leaders practical tools to align purpose with performance. His signature themes include, Men’s Empowerment and Social Impact, Leadership in the 4IR Era, Brand Purpose and Innovation, Inclusion, Equity and Belonging, African Growth Strategy, Transformational Leadership.",
  "A passionate advocate for redefining masculinity and emotional leadership, Dr Masito is the Cofounder of African Men Care (AMC), a pioneering movement dedicated to transforming men’s mental health, family leadership, and accountability across Africa. Through his men’s gatherings, corporate engagements, and national campaigns, he challenges men to lead with empathy, integrity, and intention, shifting narratives from dominance to discipline, and from power to purpose.",
  "A former lecturer at the University of Cape Town, GIBS, and Harvard Business School guest faculty, Dr Masito blends academic excellence with lived experience. Holding a PhD in Business Science (Marketing) and an MBA (GIBS), he has worked in the UK, USA, Europe, India, and across Africa, shaping a global understanding of how leadership, identity, and culture intersect to drive sustainable growth.",
  "Book Dr Mzamo Masito today for your next men’s conference, empowerment gathering, leadership retreat, or national campaign, and ignite a movement of men who lead with courage, accountability, and purpose.",
  "At The Speakers Firm, we proudly represent Dr Mzamo Masito, Africa’s Voice of Purpose, Leadership, and Men’s Empowerment."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "canva", name: "CANVA" },
  { id: "google", name: "GOOGLE" },
  { id: "nike", name: "NIKE" }
];

const BOOKS = [
  {
    id: "country-hates-men-boys",
    title: "This Country Hates Our Men Boys",
    description: "Dr Mzamo Masito’s urgent new book confronts the pervasive ‘cold and hot love’ that often translates into collective male guilt, and outlines a clear path forward for families, schools, and communities.",
    coverImage: "/speakers/Mzamo Masito/The Country hates our Boys by Dr Mzamo Masito.jpg",
    url: "https://exclusivebooks.co.za/products/9781067229061"
  }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "masito-art-1",
      headline: "Google appoints Mzamo Masito as its new chief marketing officer",
      publication: "Good Things Guy",
      date: "2017",
      action: "Read Announcement",
      url: "https://www.goodthingsguy.com/business/mzamo-masito-google/",
      image: "/speakers/Mzamo Masito/Mzamo-Masito-The-Speakers-Firm-2.jpg"
    },
    {
      id: "masito-art-2",
      headline: "Meet Mzamo Masito – Chief Marketing Officer, Google Africa and DStv Seminar of Creativity speaker",
      publication: "Bizcommunity",
      date: "2018",
      action: "Read Interview",
      url: "https://www.bizcommunity.com/Article/196/614/179911.html",
      image: "/speakers/Mzamo Masito/Mzamo-Masito-The-Speakers-Firm-3.jpg"
    },
    {
      id: "masito-art-3",
      headline: "ALUSB EMBA Intensive Q&A with Mzamo Masito",
      publication: "ALUSB EMBA Insights",
      date: "2020",
      action: "Read Article",
      url: "https://www.alusb.com/interview-mzamo-masito-cmo-google-africa/",
      image: "/speakers/Mzamo Masito/Mzamo-Masito-The-Speakers-Firm-4.jpg"
    }
  ];

  const customGallery = [
    {
      id: "masito-gal-1",
      src: "/speakers/Mzamo Masito/Mzamo-Masito-The-Speakers-Firm-6.png",
      alt: "Dr. Mzamo Masito keynote address",
      caption: "Corporate leadership and men's empowerment keynote",
      className: "sm:col-span-2 lg:col-span-2"
    },
    {
      id: "masito-gal-2",
      src: "/speakers/Mzamo Masito/Mzamo-Masito-The-Speakers-Firm-2.jpg",
      alt: "Dr. Mzamo Masito speaking panel",
      caption: "Redefining brand purpose and digital innovation",
      className: ""
    },
    {
      id: "masito-gal-3",
      src: "/speakers/Mzamo Masito/Mzamo-Masito-The-Speakers-Firm-3.jpg",
      alt: "Dr. Mzamo Masito lecturing",
      caption: "Transformational leadership seminar",
      className: ""
    },
    {
      id: "masito-gal-4",
      src: "/speakers/Mzamo Masito/Mzamo-Masito-The-Speakers-Firm-7.jpg",
      alt: "Empowerment conference",
      caption: "Redefining masculinity and family leadership",
      className: "sm:col-span-2 lg:col-span-2"
    },
    {
      id: "masito-gal-5",
      src: "/speakers/Mzamo Masito/Mzamo-Masito-The-Speakers-Firm-5.jpg",
      alt: "Advisory session",
      caption: "Boardroom and executive strategy advisory",
      className: ""
    }
  ];

  const customVideos = [
    {
      id: "masito-vid-1",
      label: "Dr. Mzamo Masito Keynote Address",
      youtubeId: "UBoiAq5977M"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Mzamo Masito"
      speakerTitle="Dr."
      speakerDesignation="Regional Lead Canva Africa, Former CMO of Google Africa & Co-founder AMC"
      speakerRole="Renowned business strategist, corporate brand building authority, and leadership advocate."
      speakerRef="TSF-MM-14"
      heroBackgroundImage="/speakers/Mzamo Masito/Mzamo-Masito-The-Speakers-Firm-7.jpg"
      biographyImage="/speakers/Mzamo Masito/Mzamo-Masito-The-Speakers-Firm.jpg"
      bioHook="“Sustainable growth demands aligning absolute organizational purpose with deep human capability.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={BOOKS}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="siphiwe-moyo" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="siphiwe-moyo" 
        customGallery={customGallery} 
        customIntroText="Brand transformation retreats, corporate leadership seminars, and men's empowerment masterclasses led by Dr. Mzamo Masito."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
