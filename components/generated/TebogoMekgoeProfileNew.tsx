"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "tm-ceo",
    label: "CEO, Systemic Advisory",
    subtitle: "Founder and lead consultant specializing in systemic design and facilitation."
  },
  {
    id: "tm-architect",
    label: "Change & Culture Architect",
    subtitle: "Designs frameworks to guide complex organizational change and culture transformation."
  },
  {
    id: "tm-systems",
    label: "Systems Leadership Expert",
    subtitle: "Integrates systems thinking and complexity theory into corporate strategy and operations."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "navigating-complexity",
    number: "Theme 01",
    title: "Navigating Complexity & Systems Thinking.",
    copy: "How corporate leaders can apply systems thinking models to identify leverage points and solve complex business problems."
  },
  {
    id: "strategy-alignment",
    number: "Theme 02",
    title: "Executive Strategy Alignment & Facilitation.",
    copy: "Designing and facilitating high-stakes board retreats, alignment sessions, and strategic dialogues."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Tebogo Mekgoe is the Founder and CEO of Systemic Advisory, a leading consultancy specializing in bespoke systemic design, executive facilitation, and organizational development. As a premier leadership strategist and culture transformation advisor, he acts as a key architect in designing and guiding strategic conversations for large corporates and medium-sized enterprises.",
  "Integrating systems thinking, complexity theory, and practical organizational development, Tebogo has built a reputation for crafting highly tailored executive workshops, strategy alignment sessions, and leadership retreats. His methodology helps executive teams navigate structural and market complexity by identifying leverage points and aligning organizational design with execution.",
  "His mission is to bring profound clarity to leaders and their teams, creating psychological safety and open dialogue to drive trust and alignment. Before founding Systemic Advisory, he acquired years of operational and corporate governance experience, positioning him as a trusted advisor on risk intelligence and executive performance.",
  "Book Tebogo Mekgoe through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to facilitate your next executive strategy retreat, board alignment session, or lead keynotes on systems leadership."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "systemic", name: "SYSTEMIC ADVISORY" },
  { id: "henley", name: "HENLEY BUSINESS SCHOOL" },
  { id: "unisa", name: "UNISA" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "tm-art-1",
      headline: "Tebogo Mekgoe on systemic design, complexity, and leadership strategy",
      publication: "Systemic Advisory Insights / YouTube",
      date: "2024",
      action: "Watch Presentation",
      url: "https://www.youtube.com/watch?v=dn4DuJtt7mI",
      image: "/speakers/Tebogo Mekgoe/Tebogo-Mekgoe-The-Speakers-Firm.jpg"
    },
    {
      id: "tm-art-2",
      headline: "Designing strategic conversations: A guide for modern corporate boards",
      publication: "Executive Dialogues Quarterly",
      date: "2023",
      action: "Read Paper",
      url: "https://thespeakersfirm.co.za/tebogo-mekgoe/",
      image: "/speakers/Tebogo Mekgoe/Tebogo-Mekgoe-The-Speakers-Firm-3.jpg"
    },
    {
      id: "tm-art-3",
      headline: "Systems thinking vs. linear strategy: Shifting leadership mindsets",
      publication: "Leadership & Governance Review",
      date: "2024",
      action: "Read Article",
      url: "https://thespeakersfirm.co.za/tebogo-mekgoe/",
      image: "/speakers/Tebogo Mekgoe/Tebogo-Mekgoe-The-Speakers-Firm-5.jpg"
    }
  ];

  const customVideos = [
    {
      id: "tm-vid-1",
      label: "Tebogo Mekgoe on Systems Thinking, Leadership and Solving Corporate Complexity",
      youtubeId: "dn4DuJtt7mI"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Tebogo Mekgoe"
      speakerTitle=""
      speakerDesignation="Founder & CEO of Systemic Advisory, Leadership Strategist"
      speakerRole="Systems Leadership & Governance Facilitator"
      speakerRef="TSF-TM-74"
      heroBackgroundImage="/speakers/Tebogo Mekgoe/Tebogo-Mekgoe-The-Speakers-Firm-4.jpg"
      biographyImage="/speakers/Tebogo Mekgoe/Tebogo-Mekgoe-The-Speakers-Firm-2.jpg"
      bioHook="“Helping leaders navigate complexity, master systems thinking, and align strategy with high-performance culture.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="tebogo-mekgoe" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="tebogo-mekgoe" 
        customIntroText="Systems leadership keynotes, corporate governance alignment retreats, and systemic design facilitation led by Tebogo Mekgoe."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
