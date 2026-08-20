"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "mazwe-gender",
    label: "Gender Governance Specialist",
    subtitle: "Highly respected academic advisor leading research on gender inclusion and policy transformation."
  },
  {
    id: "mazwe-academic",
    label: "Academic & Professor",
    subtitle: "Distinguished lecturer and policy analyst with decades of institutional advisory experience."
  },
  {
    id: "mazwe-adviser",
    label: "National Policy Adviser",
    subtitle: "Consultant to government agencies and corporate boards on diversity strategy and cultural integration."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "gender-governance",
    number: "Theme 01",
    title: "Gender Inclusion & Board Governance.",
    copy: "Deconstructing institutional barriers to create diverse, equitable, and highly effective corporate boards."
  },
  {
    id: "public-policy",
    number: "Theme 02",
    title: "Public Policy & Cultural Agility.",
    copy: "Structuring social policies and cultural frameworks to improve diversity, equity, and inclusion across public sectors."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Prof. Mazwe Majola is a highly distinguished South African academic, policy analyst, and governance consultant. Specializing in gender development, diversity integration, and national social policy, he has spent decades advising corporate boards and government departments on strategic transformation.",
  "As a public intellectual, Prof. Majola focuses on deconstructing systemic institutional barriers to foster inclusive leadership cultures, ethical governance models, and corporate gender equity.",
  "He frequently facilitates board evaluations, diversity workshops, and policy roundtables, helping organizations align their operational structures with progressive social values and modern compliance standards.",
  "Book Prof. Mazwe Majola through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to deliver authoritative lectures, board advisories, and governance keynotes."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "academic-board", name: "Governance Academic Board" },
  { id: "policy-dept", name: "Social Policy Dept" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "mazwe-art-1",
      headline: "Prof. Mazwe Majola on restructuring national gender equality policies",
      publication: "Public Administration Review",
      date: "2024",
      action: "Read Feature",
      url: "https://omny.fm/shows/ukhozi-current-affairs-sabcnews/abasiki-bebunda-anc-is-feeling-the-pressure-prof-mazwe-majola-leadership-expert-on-anc-roll-call-meeting#description",
      image: "/speakers/Prof. Mazwe Majola/Prof-Mazwe-Majola-The-Speakers-Firm-2.jpg"
    },
    {
      id: "mazwe-art-2",
      headline: "The socioeconomic impacts of diversity on boardroom decision making",
      publication: "Socio-Economic Development Journal",
      date: "2024",
      action: "Read Article",
      url: "https://www.youtube.com/watch?v=T7MaIUK6yxw",
      image: "/speakers/Prof. Mazwe Majola/Prof-Mazwe-Majola-The-Speakers-Firm-4.jpg"
    },
    {
      id: "mazwe-art-3",
      headline: "Fostering inclusive leadership in South Africa's public institutions",
      publication: "Institutional Governance Quarterly",
      date: "2023",
      action: "Read Spotlight",
      url: "https://www.youtube.com/watch?v=FFxf3bVdlss",
      image: "/speakers/Prof. Mazwe Majola/Prof-Mazwe-Majola-The-Speakers-Firm.jpg"
    }
  ];

  const customVideos = [
    {
      id: "mazwe-vid-1",
      label: "Prof. Mazwe Majola Keynote on Social Policy & Inclusion",
      youtubeId: "T7MaIUK6yxw"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Prof Mazwe Majola"
      speakerTitle="Prof."
      speakerDesignation="Academic Scholar, Gender Governance Expert & Policy Analyst"
      speakerRole="Governance Consultant & Diversity Adviser"
      speakerRef="TSF-MM-41"
      heroBackgroundImage="/speakers/Prof. Mazwe Majola/Prof-Mazwe-Majola-The-Speakers-Firm-8.jpg"
      biographyImage="/speakers/Prof. Mazwe Majola/Prof-Mazwe-Majola-The-Speakers-Firm-5.jpg"
      bioHook="“Genuine corporate transformation is not a check-box exercise; it requires the systematic integration of diverse voices at the highest governance level.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="mazwe-majola" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="mazwe-majola" 
        customIntroText="Gender governance training, public policy seminars, and boardroom transformation consultations led by Prof. Mazwe Majola."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
