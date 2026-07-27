"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections } from "./ProfileAdditionalSectionsNew";

const STRATEGIC_THEMES = [
  {
    id: "lift-as-you-rise-theme",
    number: "Theme 01",
    title: "Lift As You Rise — Institutionalizing Ethical Mentorship.",
    copy: "A definitive strategic framework for C-Suite executives designed to transform corporate transformation from a compliance exercise into a core engine of commercial growth and long-term market legitimacy. Addresses structural economic exclusion with actionable blueprints for sustainable human capital acceleration."
  },
  {
    id: "restoring-governance-theme",
    number: "Theme 02",
    title: "Restoring Governance in Volatile Ecosystems.",
    copy: "Tailored for executive boards — deconstructs the mechanics of institutional erosion and outlines structural defense mechanisms to preserve corporate integrity, fortify stakeholder trust, and execute turnarounds under high-stakes regulatory or macroeconomic pressure."
  },
  {
    id: "macro-political-economy-theme",
    number: "Theme 03",
    title: "The Macro-Political Economy and South Africa's Future Path.",
    copy: "A high-level briefing on the intersection of public policy, private sector capability, and systemic risk. Provides deep context on navigating shifting state landscapes, mitigating country risk, and identifying avenues for localized economic growth."
  }
];

const TICKER_LOGOS = [
  "DBSA", "PIC", "ABSA", "MTN", "ESKOM", "SASOL", "NEDBANK", "STANLIB", "VODACOM"
];

const FULL_BIO_PARAGRAPHS = [
  "Professor Bonang Mohale is the Chancellor of the University of the Free State, Professor of Practice at the Johannesburg Business School (JBS) College of Business and Economics, Chairman of both Bidvest Group Limited and SBV Services, and President of the Business Unity South Africa (BUSA).",
  "He is a highly respected South African businessman, known for his patriotism and active role in advancing countrywide transformation. He is the author of the best-selling books 'Lift As You Rise' and 'Behold The Turtle'."
];

const CREDENTIAL_BADGES = [
  {
    id: "ufs-chancellor",
    label: "Chancellor of UFS",
    subtitle: "Academic stewardship and institutional vision for higher education."
  },
  {
    id: "bidvest-chairman",
    label: "Chairman of Bidvest Group",
    subtitle: "Strategic leadership oversight across major commercial industries."
  }
];

export const AboutTeamSection = () => {
  return (
    <>
      <SpeakerProfileTemplate
        speakerName="Bonang Mohale"
        speakerTitle="Professor"
        speakerDesignation="Chairman. Author. Leadership Authority."
        speakerRole="Transforming organisations through ethical leadership and purpose."
        speakerRef="TSF-BM-01"
        heroBackgroundImage="/hero_backgrounds/bonang-mohale.jpg"
        bioHook="“Transforming corporate legacy into unified national purpose.”"
        fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
        credentials={CREDENTIAL_BADGES}
        strategicThemes={STRATEGIC_THEMES}
        socialProofLogos={TICKER_LOGOS.map(name => ({ id: name.toLowerCase(), name }))}
      >
        <ProfileAdditionalSections />
      </SpeakerProfileTemplate>
    </>
  );
};
export const SpeakerFooter = () => {
  return null;
};
export const ProfileAdditionalSectionsOld = () => {
  return null;
};
