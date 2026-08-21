"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "vt-ca",
    label: "Chartered Accountant (SA)",
    subtitle: "Highly qualified finance professional with over 17 years of experience in financial services."
  },
  {
    id: "vt-vunani",
    label: "CEO Designate at Vunani Securities",
    subtitle: "Leading strategic growth, compliance, and transformation at a premier financial services firm."
  },
  {
    id: "vt-director",
    label: "Former Director at SNG Grant Thornton",
    subtitle: "Led audit teams, implemented IFRS frameworks, and championed organizational diversity."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "wealth-legacy",
    number: "Theme 01",
    title: "Financial Inclusion & Legacy Strategy.",
    copy: "Structuring financial products and services to expand economic access and secure long-term generational wealth."
  },
  {
    id: "corp-transformation",
    number: "Theme 02",
    title: "Corporate Governance & Ethics.",
    copy: "Implementing rigorous audit processes, IFRS alignment, and ethical integrity standards in public and private enterprises."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Viwe Tini CA(SA) is the Chief Executive Officer Designate at Vunani based in Sandton, Johannesburg. She is an ambitious and dynamic leader with 17 years of experience in financial services, widely recognized for her drive, adaptability, and ethical integrity. Fluent in five South African languages, Viwe is deeply committed to fostering equitable, inclusive growth across corporate and public sectors.",
  "Previously, Viwe served as a Consultant at Pretoria Portland Cement Company (PPC) and also held executive positions at Grant Thornton and SizweNtsaluba VSP. Her career includes key roles such as Acting Head of Finance at PPC Cement and Director at SNG Grant Thornton, where her expertise in audit and IFRS frameworks spanned multiple complex industries.",
  "With a strong focus on corporate strategy, financial stewardship, and team leadership, Viwe has been a pivotal force in promoting inclusion and transformation. She has contributed to diversity initiatives at both SNG Grant Thornton and Vunani Securities. Her unique background bridges the gap between rigorous financial management and purposeful organizational culture.",
  "Book Viwe Tini CA(SA) through The Speakers Firm, A Leading African Speakers Bureau, to bring definitive financial leadership, corporate governance insight, and transformation strategies to your next event or boardroom."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "vunani", name: "VUNANI SECURITIES" },
  { id: "ppc", name: "PPC CEMENT" },
  { id: "sng", name: "SNG GRANT THORNTON" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "tini-art-1",
      headline: "Profile Interview with Viwe Tini, Seasoned Finance Executive, Chartered Accountant and Artist",
      publication: "Soweto TV / SAfm / Evening Show",
      date: "2024",
      action: "Listen to Show",
      url: "https://omny.fm/shows/evening-show/profile-interview-19",
      image: "/speakers/Viwe Tini/Viwe-Tini-The-Speakers-Firm-3.jpg"
    }
  ];

  const customVideos = [
    {
      id: "tini-vid-1",
      label: "Viwe Tini on Financial Leadership & Capital Markets",
      youtubeId: "yg166m_l7qc"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Viwe Tini CA(SA)"
      speakerTitle=""
      speakerDesignation="Finance Executive & Governance Specialist"
      speakerRole="Chief Executive Officer Designate at Vunani"
      speakerRef="TSF-VT-34"
      heroBackgroundImage="/speakers/Viwe Tini/Viwe-Tini-The-Speakers-Firm-6.jpg"
      biographyImage="/speakers/Viwe Tini/Viwe-Tini-The-Speakers-Firm.jpg"
      bioHook="“Deeply committed to fostering equitable, inclusive growth with unwavering ethical integrity, bridging corporate finance and strategic leadership.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="viwe-tini" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="viwe-tini" 
        customIntroText="Corporate governance keynotes, financial leadership briefings, and strategic transformation workshops led by Viwe Tini."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
