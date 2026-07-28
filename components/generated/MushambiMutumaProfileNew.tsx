"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "tech-innovator",
    label: "Accenture Alumnus",
    subtitle: "Led Accenture's Commerce and Innovation practice driving Fortune 500 digital scale."
  },
  {
    id: "blue-ocean-partner",
    label: "Partner, Blue Ocean TNS",
    subtitle: "Advises enterprises on transaction scaling, growth, and mobility systems."
  },
  {
    id: "author-leader",
    label: "Technology Futurist",
    subtitle: "Over 18 years at the intersection of AI, logistics, and digital transformation."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "ai-future-work",
    number: "Theme 01",
    title: "AI, Innovation & The Future of Work.",
    copy: "Demystifying artificial intelligence, machine learning, and automation to build agile, future-ready business units."
  },
  {
    id: "digital-scale",
    number: "Theme 02",
    title: "Scaling Digital & Logistics Mobility.",
    copy: "Leveraging digital ecosystem architectures, mobility networks, and transaction platforms to scale across Africa and the globe."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "At The Speakers Firm, we proudly represent Mushambi Mutuma, a globally recognised AI and innovation leader, digital transformation expert, and futurist keynote speaker.",
  "With over 18 years of experience at the intersection of technology, leadership, and innovation, Mushambi has guided leading organisations across Africa and the world through the complexities of digital transformation and exponential change. An accomplished speaker, author, and strategist, Mushambi is renowned for translating complex technology concepts into practical, actionable insights that empower teams to innovate with confidence.",
  "Mushambi has delivered powerful, future-focused sessions for global brands such as Facebook, Salesforce, Coca-Cola, PwC, Dell, QuickBooks, Workday, and Huawei. Most recently, Mushambi led Accenture’s Commerce and Innovation practice, overseeing large scale digital transformation projects. Today, he serves as Partner at Blue Ocean TNS, advising enterprises on growth and scalability, and as Chief Technology Officer of the Black Fleet Network."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "accenture", name: "ACCENTURE" },
  { id: "salesforce", name: "SALESFORCE" },
  { id: "huawei", name: "HUAWEI" }
];

const BOOKS = [
  {
    id: "adaptability-code",
    title: "The Adaptability Code",
    description: "A manual for leadership agility, exploring how professionals and enterprises can code adaptability into their core business frameworks.",
    coverImage: "/speakers/Mushambi Mutuma/FRONT-COVER-The-Adaptability-Code-by-Mushambi-Mutuma-LR-scaled.jpg",
    url: "https://mushambimutuma.com/product/theadaptabilitycode/"
  },
  {
    id: "tech-adjacent",
    title: "Tech Adjacent",
    description: "An actionable guide for leaders to understand how to leverage technologies that are adjacent to their core business models to scale rapidly.",
    coverImage: "/speakers/Mushambi Mutuma/Tech Adjacent Cover v3.png",
    url: "https://mushambimutuma.com/product/techadjacent/"
  }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "mutuma-art-1",
      headline: "Curiosity Declines with Seniority… Unless You Fight It",
      publication: "MushambiMutuma.com",
      date: "2024",
      action: "Read Article",
      url: "https://mushambimutuma.com/allinsights/curiosity-declines-with-seniority-unless-you-fight-it/",
      image: "/speakers/Mushambi Mutuma/Mushambi Mutuma - The Speakers Firm-8.jpg"
    },
    {
      id: "mutuma-art-2",
      headline: "Are you outsourcing your thinking?",
      publication: "MushambiMutuma.com",
      date: "2024",
      action: "Read Insights",
      url: "https://mushambimutuma.com/allinsights/are-you-outsourcing-your-thinking/",
      image: "/speakers/Mushambi Mutuma/Mushambi Mutuma - The Speakers Firm-9.jpg"
    },
    {
      id: "mutuma-art-3",
      headline: "What if your next hire was AI?",
      publication: "MushambiMutuma.com",
      date: "2024",
      action: "Read Column",
      url: "https://mushambimutuma.com/allinsights/what-if-your-next-hire-was-ai/",
      image: "/speakers/Mushambi Mutuma/Mushambi Mutuma - The Speakers Firm-10.jpg"
    }
  ];

  const customGallery = [
    {
      id: "mutuma-gal-1",
      src: "/speakers/Mushambi Mutuma/Mushambi Mutuma - The Speakers Firm-7.jpg",
      alt: "Mushambi Mutuma keynote address",
      caption: "Digital transformation and creative leadership keynote",
      className: "sm:col-span-2 lg:col-span-2"
    },
    {
      id: "mutuma-gal-2",
      src: "/speakers/Mushambi Mutuma/Mushambi Mutuma - The Speakers Firm-4.jpg",
      alt: "Mushambi Mutuma panel",
      caption: "Strategic advisory on exponential technological growth",
      className: ""
    },
    {
      id: "mutuma-gal-3",
      src: "/speakers/Mushambi Mutuma/Mushambi Mutuma - The Speakers Firm-8.jpg",
      alt: "Mushambi Mutuma keynote session",
      caption: "Advising enterprise teams on growth and transformation",
      className: ""
    },
    {
      id: "mutuma-gal-4",
      src: "/speakers/Mushambi Mutuma/Mushambi-Mutuma---The-Speakers-Firm-10.jpg",
      alt: "Tech strategy roundtable",
      caption: "Logistics, mobility and digital scaling discussion",
      className: "sm:col-span-2 lg:col-span-2"
    },
    {
      id: "mutuma-gal-5",
      src: "/speakers/Mushambi Mutuma/Mushambi Mutuma - The Speakers Firm-9.jpg",
      alt: "Executive strategy session",
      caption: "Translating complex technology concepts into actionable insights",
      className: ""
    }
  ];

  const customVideos = [
    {
      id: "mutuma-vid-1",
      label: "Mushambi Mutuma Keynote & Adaptability Address",
      youtubeId: "wcyjSOIk9zQ"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Mushambi Mutuma"
      speakerTitle=""
      speakerDesignation="Author, Futurist & Technology Leader"
      speakerRole="Global keynote speaker on AI, innovation systems, and the future of work."
      speakerRef="TSF-MM-16"
      heroBackgroundImage="/speakers/Mushambi Mutuma/Mushambi Mutuma - The Speakers Firm-6.jpg"
      biographyImage="/speakers/Mushambi Mutuma/Mushambi Mutuma - The Speakers Firm-11.jpg"
      bioHook="“Curiosity is the ultimate fuel for innovation. If you stop asking questions, technology will outpace you.”"
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
        customIntroText="Strategic digital advisory keynotes, AI integration seminars, and creative thinking retreats led by Mushambi Mutuma."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
