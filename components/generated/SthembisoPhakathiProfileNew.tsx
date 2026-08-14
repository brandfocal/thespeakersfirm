"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "deloitte-director",
    label: "Former Human Capital Director",
    subtitle: "Served as Director of Human Capital at Deloitte Africa."
  },
  {
    id: "unisa-absa",
    label: "MBA & Corporate Head",
    subtitle: "ABSA Group Head of Organisational Effectiveness."
  },
  {
    id: "cardiff-msc",
    label: "MSc from Cardiff",
    subtitle: "MSc in Strategic Marketing from Cardiff University (UK)."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "organisational-effectiveness",
    number: "Theme 01",
    title: "Culture & Organisational Transformation.",
    copy: "Aligning corporate culture with commercial strategy, steering change management, and designing high-performance teams."
  },
  {
    id: "future-work",
    number: "Theme 02",
    title: "Future of Work & Human Capital.",
    copy: "Developing future-ready talent strategies, leading DEI initiatives, and managing workforce transitions."
  },
  {
    id: "responsible-masculinity",
    number: "Theme 03",
    title: "Responsible Masculinity & Single Dads.",
    copy: "Empowering single fathers, mentoring young men, and fostering authentic leadership values."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Sthembiso Phakathi is a prominent Leadership Strategist, Organisational Transformation Expert, and Keynote Speaker. He is recognized for his work at the intersection of business strategy, organizational culture, and human performance.",
  "With over two decades of executive experience, Phakathi has established himself as a trusted advisor to CEOs and executive teams. He has served as the Director of Human Capital at Deloitte Africa and previously held the position of Group Head of Organisational Effectiveness at ABSA. He has also held senior roles at KPMG and worked with major multinationals in the mining, consumer, and financial services sectors.",
  "He holds an MBA from the University of South Africa (UNISA) and an MSc in Strategic Marketing from Cardiff University (UK), with additional grounding in engineering and business science. He has also served as a part-time lecturer at the University of the Witwatersrand (Wits).",
  "Beyond his corporate work, Phakathi is the founder of the Single Dads Network, a platform dedicated to empowering single fathers, challenging stereotypes about fatherhood, and promoting responsible masculinity and leadership development."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "deloitte", name: "DELOITTE AFRICA" },
  { id: "absa", name: "ABSA GROUP" },
  { id: "cardiff", name: "CARDIFF UNIVERSITY" }
];

const STHEMBISO_MEDIA = [
  {
    id: "sthembiso-art-1",
    headline: "Leaders: Catalysts Igniting Business Transformation",
    publication: "YouTube Presentation",
    date: "12 Oct 2023",
    action: "Watch Presentation",
    url: "https://www.youtube.com/watch?v=UiLEXu5UjXk",
    image: "/speakers/Sthembiso Phakathi/sthembiso-phakathi-The-Speakers-Firm-3.jpeg"
  },
  {
    id: "sthembiso-art-2",
    headline: "Future of Work & Human Capital Insights",
    publication: "Keynote Highlight",
    date: "24 Nov 2023",
    action: "Watch Highlight",
    url: "https://www.youtube.com/watch?v=WiQNCukwKrA",
    image: "/speakers/Sthembiso Phakathi/sthembiso-phakathi-The-Speakers-Firm.jpg"
  },
  {
    id: "sthembiso-art-3",
    headline: "Deloitte Human Capital Summit: Fostering Agility",
    publication: "Summit Panel",
    date: "05 Jun 2024",
    action: "Watch Session",
    url: "https://www.youtube.com/watch?v=8OvAdiQ3oK8",
    image: "/speakers/Sthembiso Phakathi/sthembiso-phakathi-The-Speakers-Firm-2.jpg"
  }
];

export const AboutTeamSection = () => {
  const customVideos = [
    {
      id: "sthembiso-vid-1",
      label: "Sthembiso Phakathi in Action",
      youtubeId: "P5O15canciY"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Sthembiso Phakathi"
      speakerTitle=""
      speakerDesignation="Leadership Strategist, Transformation Expert & Keynote Speaker"
      speakerRole="Former Deloitte Human Capital Director, former ABSA head, and founder of Single Dads Network."
      speakerRef="TSF-SP-01"
      heroBackgroundImage="/speakers/Sthembiso Phakathi/sthembiso-phakathi-The-Speakers-Firm-11.jpg"
      biographyImage="/speakers/Sthembiso Phakathi/sthembiso-phakathi-The-Speakers-Firm-10.jpg"
      bioHook="“Connecting strategy with culture and leadership to drive peak organisational performance.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={[]}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="sthembiso-phakathi" customMedia={STHEMBISO_MEDIA} />
      }
    >
      <ProfileAdditionalSections speakerId="sthembiso-phakathi" customVideos={customVideos} />
    </SpeakerProfileTemplate>
  );
};
