"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "marketing-maverick",
    label: "Marketing Maverick",
    subtitle: "Highly awarded entrepreneur and disruptor transforming corporate brand communications."
  },
  {
    id: "dna-founder",
    label: "Founder, DNA Brand Architects",
    subtitle: "Built one of the most innovative and highly acclaimed marketing consultancies on the continent."
  },
  {
    id: "prof-practice",
    label: "Professor of Practice",
    subtitle: "Professor of Practice at the University of Johannesburg's Department of Strategic Communication."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "brand-disruption",
    number: "Theme 01",
    title: "Branding Against Bland & Standing Out.",
    copy: "Challenging traditional advertising models by creating raw, authentic cultural movements that deeply engage the African consumer."
  },
  {
    id: "entrepreneurial-scale",
    number: "Theme 02",
    title: "Entrepreneurship & Creative Leadership.",
    copy: "Fostering institutional agility, creative intelligence, and purpose-driven campaigns to drive sustainable business growth."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "All Africa Young Business Leader of the Year 2017, Sylvester Chauke is a self-confessed Madonna crazy, multi-ward winning Entrepreneur and founder of DNA Brand Architects. After an lustrous career as the National Marketing Manager for Nando’s South Africa, Sylvester joined broadcasting giant MTV Networks Africa as its Director of Marketing and Communication. In 2012, Sylvester established DNA Brand Architects; a marketing and brand consultancy that works with some of the most revered brands on the continent. Besides running one of the most innovative brand agency in South Africa, Sylvester Chauke is one the 22 young leaders from around the world to sit as the Advisory Council for the World Economic Forum Global Shapers.",
  "Sylvester’s business acumen has led him to be invited to sit amongst others, on the board of the South African State Theatre; Chair of the Artistic and Sponsorship Committee and is also in the Advisory Board for the University of Johannesburg. Some of Sylvester’s accolades include: CNBC Africa All Africa Young Business Leader of the Year, BBQ Young Leader of the Year, European Business Assembly, Best Enterprise and CEO Award, Oliver Empowerment Top Empowered Young Entrepreneur, World Confederation of Businesses Business Leader Award, Falcon Award for Excellence in leadership, Golden European Award for Quality and Commercial Prestige – to name a few."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "nandos", name: "NANDO'S" },
  { id: "mtv", name: "MTV NETWORKS" },
  { id: "uj", name: "UNIVERSITY OF JOHANNESBURG" }
];

const BOOKS = [
  {
    id: "stand-against-bland",
    title: "Stand Against Bland",
    description: "A disruptive branding guidebook that challenges corporate conformity and outlines creative strategies to build iconic African brands.",
    coverImage: "/speakers/Sylvester Chauke/Stand-Against-Bland.jpg"
  }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "chauke-art-1",
      headline: "Behind the hustle | Sylvester Chauke",
      publication: "Sowetan Live",
      date: "07 Mar 2019",
      action: "Read Article",
      url: "https://www.sowetanlive.co.za/sebenza-live/2019-03-07-behind-the-hustle-sylvester-chauke/",
      image: "/speakers/Sylvester Chauke/sylvester-chauke-the-speakers-firm10.jpg"
    },
    {
      id: "chauke-art-2",
      headline: "Sylvester Chauke transforms brands into cultural movements",
      publication: "GQ South Africa",
      date: "2023",
      action: "Read Interview",
      url: "https://www.gq.co.za/wealth/career-advice/sylvester-chauke-transforms-brands-into-cultural-movements-e4c1036a-97a1-4774-8b6c-e0b3466ecd79/",
      image: "/speakers/Sylvester Chauke/sylvester-chauke-the-speakers-firm11.jpg"
    },
    {
      id: "chauke-art-3",
      headline: "UJ alumnus Sylvester Chauke returns as Professor of Practice to inspire the next generation",
      publication: "UJ News",
      date: "2023",
      action: "Read Article",
      url: "https://news.uj.ac.za/news/uj-alumnus-sylvester-chauke-returns-as-professor-of-practice-to-inspire-the-next-generation/",
      image: "/speakers/Sylvester Chauke/sylvester-chauke-the-speakers-firm12.jpg"
    }
  ];

  const customGallery = [
    {
      id: "chauke-gal-1",
      src: "/speakers/Sylvester Chauke/sylvester-chauke-the-speakers-firm6.jpg",
      alt: "Sylvester Chauke brand summit presentation",
      caption: "Marketing disruptor presenting at national brand conference",
      className: "sm:col-span-2 lg:col-span-2"
    },
    {
      id: "chauke-gal-2",
      src: "/speakers/Sylvester Chauke/sylvester-chauke-the-speakers-firm2.jpg",
      alt: "Sylvester Chauke brand presentation",
      caption: "DNA Brand Architects team alignment",
      className: ""
    },
    {
      id: "chauke-gal-3",
      src: "/speakers/Sylvester Chauke/sylvester-chauke-the-speakers-firm5.jpg",
      alt: "Sylvester Chauke lecturing at UJ",
      caption: "Professor of Practice lecturing at the University of Johannesburg",
      className: ""
    },
    {
      id: "chauke-gal-4",
      src: "/speakers/Sylvester Chauke/sylvester-chauke-the-speakers-firm8.jpg",
      alt: "Sylvester Chauke panel",
      caption: "Fostering creative thinking and brand disruption",
      className: "sm:col-span-2 lg:col-span-2"
    },
    {
      id: "chauke-gal-5",
      src: "/speakers/Sylvester Chauke/sylvester-chauke-the-speakers-firm9.jpg",
      alt: "Sylvester Chauke keynotes",
      caption: "Transforming corporate communication strategies",
      className: ""
    }
  ];

  const customVideos = [
    {
      id: "chauke-vid-1",
      label: "Sylvester Chauke Keynote Presentation",
      youtubeId: "icQS5_mOx7U"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Sylvester Chauke"
      speakerTitle=""
      speakerDesignation="Marketing Disruptor, Brand Visionary & Professor of Practice"
      speakerRole="Award-winning entrepreneur, founder of DNA Brand Architects, and cultural trend strategist."
      speakerRef="TSF-SC-13"
      heroBackgroundImage="/speakers/Sylvester Chauke/sylvester-chauke-the-speakers-firm7.jpg"
      heroMobileBackgroundImage="/speakers/Sylvester%20Chauke/sylvester-chauke-mobile.jpg"
      biographyImage="/speakers/Sylvester Chauke/Sylvester-Chauke-The-Speakers-Firm.jpg"
      bioHook="“Stand out or fade out. In a weaponized brand landscape, conformity is the ultimate commercial risk.”"
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
        customIntroText="Disruptive branding sessions, creative thinking keynotes, and marketing masterclasses led by Sylvester Chauke."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
