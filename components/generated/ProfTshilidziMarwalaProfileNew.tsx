"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "un-rector",
    label: "Rector of UNU",
    subtitle: "Rector of the United Nations University in Tokyo and Under-Secretary-General of the UN."
  },
  {
    id: "ai-statesman",
    label: "AI Statesman",
    subtitle: "Renowned globally for research and policy leadership in Artificial Intelligence."
  },
  {
    id: "tech-academic",
    label: "Distinguished Academic",
    subtitle: "Former Vice-Chancellor and Principal of the University of Johannesburg."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "artificial-intelligence",
    number: "Theme 01",
    title: "AI, Computational Intelligence & Global Development.",
    copy: "Leveraging advanced computational models, machine learning, and automation to drive inclusive socio-economic growth."
  },
  {
    id: "4ir-leadership",
    number: "Theme 02",
    title: "Leadership in the Fourth Industrial Revolution.",
    copy: "Preparing governance models, education systems, and workforce structures to adapt and lead in a highly digitized era."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "At The Speakers Firm, we proudly represent Prof. Tshilidzi Marwala, a globally distinguished AI statesman, the Rector of the United Nations University (UNU) in Tokyo, and Under-Secretary-General of the United Nations.",
  "In 1995 Prof. Tshilidzi Marwala was employed at the Council for Scientific and Industrial Research as a project engineer. Marwala studied at the University of Pretoria and obtained his Masters in Mechanical Engineering in 1996. Between 1997 and 2000, Marwala went to the University of Cambridge to do a PhD in Computational Intelligence, after which he became a post-doctoral research associate at the University of London’s Imperial College of Science, Technology and Medicine where he worked on intelligence software. On his return to South Africa in 2001, he took up a position at the South African Breweries to work on projects to develop artificial tasters and the electronic nose, before taking up his current position as Associate Professor and Head of Control and Systems Group at the School of Electrical and Information Engineering of the University of the Witwatersrand.",
  "In his illustrious career, Prof. Marwala has published more than 50 papers and articles in international journals, conference proceedings, and books and has received more than 30 academic awards for his work. His accomplishments are nothing short of astounding; through hard work and application, he has positioned himself at the cutting edge of global technological governance and serves as an inspiration for continental development."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "unu", name: "UNITED NATIONS UNIVERSITY" },
  { id: "uj", name: "UNIVERSITY OF JOHANNESBURG" },
  { id: "csir", name: "CSIR" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "marwala-art-1",
      headline: "Prof Marwala appointed as Rector of the United Nations University",
      publication: "University of Johannesburg News",
      date: "2023",
      action: "Read Article",
      url: "https://news.uj.ac.za/news/prof-marwala-appointed-as-rector-of-the-united-nations-university-2/",
      image: "/speakers/Tshilidzi Marwala/Prof-Tshilidzi-Marwala-The-Speakers-Firm-2.jpg"
    },
    {
      id: "marwala-art-2",
      headline: "Young South Africans to lead the revolution",
      publication: "Mail & Guardian",
      date: "28 Jun 2019",
      action: "Read Column",
      url: "https://mg.co.za/article/2019-06-28-00-young-south-africans-to-lead-the-revolution/",
      image: "/speakers/Tshilidzi Marwala/Prof-Tshilidzi-Marwala-The-Speakers-Firm-3.jpg"
    },
    {
      id: "marwala-art-3",
      headline: "UJ VC to launch scholarship as tribute to grandmother",
      publication: "Independent Online (IOL)",
      date: "15 Apr 2019",
      action: "Read Article",
      url: "https://iol.co.za/news/south-africa/2019-04-15-uj-vc-to-launch-scholarship-as-tribute-to-grandmother/",
      image: "/speakers/Tshilidzi Marwala/Prof-Tshilidzi-Marwala-The-Speakers-Firm-4.jpg"
    }
  ];

  const customGallery = [
    {
      id: "marwala-gal-1",
      src: "/speakers/Tshilidzi Marwala/Prof-Tshilidzi-Marwala-The-Speakers-Firm-6.jpg",
      alt: "Prof. Tshilidzi Marwala keynote speech",
      caption: "AI Governance & Computational Intelligence Keynote",
      className: "sm:col-span-2 lg:col-span-2"
    },
    {
      id: "marwala-gal-2",
      src: "/speakers/Tshilidzi Marwala/Prof-Tshilidzi-Marwala-The-Speakers-Firm-2.jpg",
      alt: "Prof. Tshilidzi Marwala presenting",
      caption: "Addressing the global tech and academic community",
      className: ""
    },
    {
      id: "marwala-gal-3",
      src: "/speakers/Tshilidzi Marwala/Prof-Tshilidzi-Marwala-The-Speakers-Firm-3.jpg",
      alt: "Prof. Tshilidzi Marwala live",
      caption: "Strategic panels on digital transformation",
      className: ""
    },
    {
      id: "marwala-gal-4",
      src: "/speakers/Tshilidzi Marwala/Prof-Tshilidzi-Marwala-The-Speakers-Firm-5.jpg",
      alt: "Global AI strategy session",
      caption: "Fostering collaboration in technological research",
      className: "sm:col-span-2 lg:col-span-2"
    },
    {
      id: "marwala-gal-5",
      src: "/speakers/Tshilidzi Marwala/Prof-Tshilidzi-Marwala-The-Speakers-Firm-4.jpg",
      alt: "Academic leadership roundtable",
      caption: "Advancing digital inclusion and equity",
      className: ""
    }
  ];

  const customVideos = [
    {
      id: "marwala-vid-1",
      label: "Prof. Tshilidzi Marwala on AI & Future Strategy",
      youtubeId: "enCvV-1y3OQ"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Tshilidzi Marwala"
      speakerTitle="Prof."
      speakerDesignation="Rector of the UNU, Under-Secretary-General of the UN & AI Statesman"
      speakerRole="Global authority on artificial intelligence, international education, and technological policy."
      speakerRef="TSF-TM-12"
      heroBackgroundImage="/speakers/Tshilidzi Marwala/Prof-Tshilidzi-Marwala-The-Speakers-Firm-7.jpg"
      biographyImage="/speakers/Tshilidzi Marwala/Prof-Tshilidzi-Marwala-The-Speakers-Firm.jpg"
      bioHook="“Artificial intelligence is the blueprint of future human capability and global equity.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
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
        customIntroText="Global digital transformation roundtables and AI strategy keynotes by Prof. Tshilidzi Marwala."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
