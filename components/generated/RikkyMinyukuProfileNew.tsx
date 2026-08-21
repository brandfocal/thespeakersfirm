"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "rm-pioneer",
    label: "Gender Equality Pioneer",
    subtitle: "25+ years leading development, human rights and social justice in Africa."
  },
  {
    id: "rm-strategist",
    label: "Systems-Thinking Strategist",
    subtitle: "Develops programs supporting organizations through gender transitions and feminist leadership."
  },
  {
    id: "rm-campaigner",
    label: "Campaigner & Facilitator",
    subtitle: "Facilitator and researcher spearheading the #Daretoseeus campaign for gender equality."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "feminist-leadership",
    number: "Theme 01",
    title: "Gender Equality & Feminist Leadership.",
    copy: "Advocating for systems change, gender equality, and compassionate accountability in modern organizations."
  },
  {
    id: "diversity-belonging",
    number: "Theme 02",
    title: "Diversity, Equity & Belonging.",
    copy: "Addressing gender-based violence, fostering inclusion, and championing diversity policy implementation."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "25 years of working in development, human rights and social justice in Africa has enabled Rikky Minyuku to develop a systems-thinking lens and broad perspective on gender equality. Working with a wide range of organisations and formations has honed Rikky’s skills as a facilitator, researcher, writer and programme developer.",
  "Leadership roles and running her own consultancy have strengthened organisational skills, fundraising and financial management; while working with people from all walks of life has sharpened her feminist leadership practices. All combine to support or lead organisations through change.",
  "Book Rikky Minyuku through The Speakers Firm, A Leading African Speakers Bureau, to guide your organization through gender equality, human rights advocacy, and diversity, equity, and belonging initiatives."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "nyakaza", name: "NYAKAZA" },
  { id: "talenttalks", name: "TALENT TALKS" },
  { id: "iol", name: "IOL" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "rm-art-1",
      headline: "Women+ power",
      publication: "Nyakaza",
      date: "2024",
      action: "View Initiative",
      url: "https://nyakaza.org.za/women-power/",
      image: "/speakers/Rikky Minyuku/Rikky-Minyuku-The-Speakers-Firm.jpg"
    },
    {
      id: "rm-art-2",
      headline: "Dare to see us interview with Rikky Minyuku",
      publication: "Talent Talks",
      date: "2024",
      action: "Read Interview",
      url: "https://talenttalks.net/dare-to-see-us-interview-with-rikky-minyuku/",
      image: "/speakers/Rikky Minyuku/Rikky-Minyuku-The-Speakers-Firm-3.jpg"
    },
    {
      id: "rm-art-3",
      headline: "Compassionate accountability: Overcoming empathy-accountability binary",
      publication: "IOL Business Report",
      date: "2024",
      action: "Read Article",
      url: "https://iol.co.za/business-report/economy/2024-08-24-womens-month-compassionate-accountability-overcoming-empathy-accountability-binary/",
      image: "/speakers/Rikky Minyuku/Rikky-Minyuku-The-Speakers-Firm-5.jpg"
    }
  ];

  const customVideos = [
    {
      id: "rm-vid-1",
      label: "Rikky Minyuku on Gender Equality & Social Justice",
      youtubeId: "rnqvGLhXGL8"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Rikky Minyuku"
      speakerTitle=""
      speakerDesignation="Gender Specialist, Facilitator & Speaker"
      speakerRole="Gender Equality & Diversity Consultant"
      speakerRef="TSF-RM-60"
      heroBackgroundImage="/speakers/Rikky Minyuku/Rikky-Minyuku-The-Speakers-Firm-4.jpg"
      biographyImage="/speakers/Rikky Minyuku/RMinyuku Profile.jpeg"
      bioHook="“25 years of working in development, human rights and social justice in Africa has enabled Rikky Minyuku to develop a systems-thinking lens and broad perspective on gender equality.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="rikky-minyuku" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="rikky-minyuku" 
        customIntroText="Motivational talks, workshop facilitation, and gender policy seminars led by Rikky Minyuku."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
