"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "tjm-ceo",
    label: "CEO, TTI Group",
    subtitle: "Leads a premier skills development and enterprise transformation consultancy."
  },
  {
    id: "tjm-coach",
    label: "Top 100 Global Coach",
    subtitle: "Recognized globally for executive coaching excellence and NLP integration."
  },
  {
    id: "tjm-mba",
    label: "Henley MBA Alumnus",
    subtitle: "Holds an MBA from Henley Business School, specializing in organizational development."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "stand-out-culture",
    number: "Theme 01",
    title: "Stand Out or Don't Bother.",
    copy: "How to build a culture of peak performance, branding excellence, and unstoppable teamwork."
  },
  {
    id: "lit-framework",
    number: "Theme 02",
    title: "The LIT Framework.",
    copy: "A practical framework (Learn, Implement, Teach) to accelerate sales growth, customer loyalty, and team execution."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "TJ Malamule (known to many as 'Mr. Supercharge') is a highly acclaimed international keynote speaker, executive coach, bestselling author, and entrepreneur. He is the CEO of the TTI Group, a premier organization focused on skills development, corporate education, and enterprise transformation. An expert in Neuro-Linguistic Programming (NLP), TJ holds an MBA from Henley Business School.",
  "With a reputation for high-energy, humorous, and deeply practical presentations, TJ has addressed corporate audiences across major sectors including banking, automotive, telecommunications, and retail. His professional coaching excellence has earned him recognition as one of the 'Top 100 Global Coaching Leaders' by the Global HRD Congress, helping executives unlock peak performance and align personal growth with strategic corporate objectives.",
  "TJ is the author of several impactful books, including *Unstoppable Together*, *Stand Out or Don't Bother*, and *Supercharge Your Destiny*. He is also the founder of Rihanyo Holdings and dedicates significant time to philanthropy, supporting community upliftment and youth education through the TJ Malamule Foundation.",
  "Book TJ Malamule through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to bring high-impact motivation, sales acceleration, and leadership transformation to your next corporate convention or team development session."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "tti", name: "TTI GROUP" },
  { id: "henley", name: "HENLEY BUSINESS SCHOOL" },
  { id: "rihanyo", name: "RIHANYO HOLDINGS" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "tjm-art-1",
      headline: "TJ Malamule on leadership, transformation, and supercharging teams",
      publication: "TTI Leadership Summit / YouTube",
      date: "2024",
      action: "Watch Address",
      url: "https://www.youtube.com/watch?v=_rM5yM191hU",
      image: "/speakers/TJ Malamule/TJ-Malamule-The-Speakers-Firm5.jpg"
    },
    {
      id: "tjm-art-2",
      headline: "How to become unstoppable together in the modern economy",
      publication: "Business Transformation Journal",
      date: "2023",
      action: "Read Article",
      url: "https://www.youtube.com/watch?v=bdbEerbXFSA",
      image: "/speakers/TJ Malamule/TJ-Malamule-The-Speakers-Firm6.jpg"
    },
    {
      id: "tjm-art-3",
      headline: "Unlocking executive potential through Neuro-Linguistic Programming",
      publication: "Global Coaching Leaders Review",
      date: "2024",
      action: "Read Spotlight",
      url: "https://www.snl24.com/dailysun/news/limpopo-businessman-and-philanthropist-thomas-malamule-inspires-mzansi-20250831",
      image: "/speakers/TJ Malamule/TJ-Malamule-the-speakers-firm-second.jpg"
    }
  ];

  const customVideos = [
    {
      id: "tjm-vid-1",
      label: "TJ Malamule Keynote: Supercharging your Teams and Leadership",
      youtubeId: "B4aNuVl5bH8"
    }
  ];

  const customBooks = [
    {
      id: "unstoppable-together",
      title: "Unstoppable Together",
      description: "Supercharge your teams, elevate leadership capability, and build collaborative momentum to achieve unstoppable collective growth.",
      coverImage: "/speakers/TJ Malamule/Unstoppable-Together-TJ-Malamule.png",
      url: "https://tjmalamule.com/book"
    },
    {
      id: "high-value-man",
      title: "The Unstoppable High Value Man",
      description: "A powerful blueprint for personal leadership, self-mastery, and unlocking peak potential in all spheres of life.",
      coverImage: "/speakers/TJ Malamule/The-Unstoppable-High-Value-Man-TJ-Malamule.jpg",
      url: "#"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="TJ Malamule"
      speakerTitle=""
      speakerDesignation="CEO of TTI Group, Executive Coach & Author"
      speakerRole="International Keynote Speaker ('Mr. Supercharge')"
      speakerRef="TSF-TJM-68"
      heroBackgroundImage="/speakers/TJ Malamule/TJ-Malamule-The-Speakers-Firm10.jpg"
      biographyImage="/speakers/TJ Malamule/TJ-Malamule-the-speakers-firm.jpg"
      bioHook="“Mr. Supercharge: Empowering organizations and leaders to stand out, supercharge their destiny, and become unstoppable together.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={customBooks}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="tj-malamule" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="tj-malamule" 
        customIntroText="Corporate mindset keynotes, peak performance coaching sessions, and enterprise transformation workshops led by TJ Malamule."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
