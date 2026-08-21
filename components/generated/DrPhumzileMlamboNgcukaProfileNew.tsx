"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections } from "./ProfileAdditionalSectionsPhumzile";

const CREDENTIAL_BADGES = [
  {
    id: "un-director",
    label: "Former UN Executive Director",
    subtitle: "Led global efforts on gender equality and female empowerment."
  },
  {
    id: "deputy-president",
    label: "Former Deputy President of SA",
    subtitle: "First female Deputy President of South Africa (2005 - 2008)."
  },
  {
    id: "uj-chancellor",
    label: "Chancellor of UJ",
    subtitle: "Academic stewardship and institutional vision for higher education."
  },
  {
    id: "umlambo-founder",
    label: "Founder Umlambo Foundation",
    subtitle: "Championing digital literacy and education reform across Africa."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "gender-equality-equity",
    number: "Theme 01",
    title: "Gender Equality, Equity and Social Justice.",
    copy: "Building on her tenure as Executive Director of UN Women and architect of the global HeForShe initiative. Dr. Mlambo-Ngcuka delivers authoritative strategies on building inclusive corporate cultures, policy transformation, and driving systemic social parity."
  },
  {
    id: "global-leadership-governance",
    number: "Theme 02",
    title: "Global Leadership, Governance and Public Policy.",
    copy: "Insights drawn from the highest levels of national governance and international diplomacy. Covers crisis leadership, macro-political landscapes, regulatory dynamics, and ethical stewardship in volatile institutional environments."
  },
  {
    id: "education-4ir",
    number: "Theme 03",
    title: "Education, Technology and the Fourth Industrial Revolution (4IR).",
    copy: "Navigating shifting education paradigms, digital access, and digital literacy. Explores the future of work, ethical integration of emerging tech, and digital capacity building for educators and institutions."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "At The Speakers Firm, we proudly represent Dr. Phumzile Mlambo-Ngcuka, a globally respected Leader, Diplomat, Advocate, and Keynote Speaker, whose influence spans governance, gender equality, education, and global leadership.",
  "A former United Nations Under Secretary General and Executive Director of UN Women, Dr. Mlambo-Ngcuka has dedicated her life to advancing equity, empowerment, and inclusive development. Her leadership at the UN saw the launch of groundbreaking initiatives such as HeForShe, which mobilised men and boys worldwide to champion gender equality.",
  "In South Africa, Dr. Mlambo-Ngcuka’s public service journey has been equally remarkable. From Member of Parliament to Deputy Minister of Trade and Industry, Minister of Minerals and Energy, and ultimately Deputy President of South Africa (2005 to 2008), she played a pivotal role in shaping policies that reduced inequality, strengthened governance, and fostered national transformation.",
  "A Hauser Leader at Harvard Kennedy School’s Center for Public Leadership and Chancellor of the University of Johannesburg, Dr. Mlambo-Ngcuka continues to inspire leaders, educators, and institutions to drive social innovation and equality in the Fourth Industrial Revolution era. Through her Umlambo Foundation, she champions education reform and digital literacy for educators across Africa.",
  "Her keynotes deliver unmatched insight into leadership, inclusion, education, and empowerment, making her the ideal choice for year-end functions, executive retreats, and strategy sessions seeking depth, inspiration, and global perspective.",
  "Book Dr. Phumzile Mlambo-Ngcuka through The Speakers Firm, A Leading African Speakers Bureau, and bring world class leadership insight, authenticity, and influence to your next event."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "un-women", name: "UN WOMEN" },
  { id: "umlambo", name: "UMLAMBO FOUNDATION" },
  { id: "uj", name: "UNIVERSITY OF JOHANNESBURG" },
  { id: "harvard", name: "HARVARD KENNEDY SCHOOL" }
];

export const AboutTeamSection = () => {
  const customVideos = [
    {
      id: "phumzile-vid-1",
      label: "Dr. Phumzile Mlambo-Ngcuka in Action",
      youtubeId: "cWaP-HkU8Jg"
    }
  ];

  return (
    <>
      <SpeakerProfileTemplate
        speakerName="Phumzile Mlambo-Ngcuka"
        speakerTitle="Dr."
        speakerDesignation="GLOBAL STATESWOMAN. ADVOCATE. CHANCELLOR."
        speakerRole="Former Deputy President of South Africa & United Nations Under-Secretary-General."
        speakerRef="TSF-PMN-02"
        heroBackgroundImage="/hero_backgrounds/dr-phumzile-mlambo-ngcuka2.jpg"
        biographyImage="/speakers/Phumzile-Mlambo-Ngcuka/finals/Dr.-Phumzile-Mlambo-Ngcuka-9.jpg"
        bioHook="“Equity is not a favor; it is a fundamental human right and a structural economic necessity.”"
        fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
        credentials={CREDENTIAL_BADGES}
        strategicThemes={STRATEGIC_THEMES}
        socialProofLogos={SOCIAL_PROOF_LOGOS}
      >
        <ProfileAdditionalSections customVideos={customVideos} />
      </SpeakerProfileTemplate>
    </>
  );
};
