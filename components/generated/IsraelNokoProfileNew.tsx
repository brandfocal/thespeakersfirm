"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "npi-ceo",
    label: "Founder & CEO, NPI Governance",
    subtitle: "Leads a leading ISO9001 accredited B-BBEE and corporate transformation advisory firm."
  },
  {
    id: "bankseta-director",
    label: "BankSETA Board Director",
    subtitle: "Appointed by the Minister of Higher Education & Training to the national banking training authority."
  },
  {
    id: "trade-commissioner",
    label: "Former Trade Commissioner",
    subtitle: "Served as Trade Commissioner for the Canadian High Commission and B-BBEE Advisor for the IDC."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "bee-transformation",
    number: "Theme 01",
    title: "Transformation & B-BBEE Strategy.",
    copy: "Aligning regulatory transformation mandates with core market expansion and commercial partnership goals."
  },
  {
    id: "inclusive-gov",
    number: "Theme 02",
    title: "Inclusive Governance & ESG.",
    copy: "Driving sustainable corporate governance, compliance, and risk management through skilled advisory boards."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Israel Noko is the Founder & CEO of NPI Governance Consulting, a leading B-BBEE Advisory & ISO9001 accredited company. He is passionate about the intentions behind Broad-Based Black Economic Empowerment (“B-BBEE”), including the economic transformation of South Africa. Israel’s experience has focused on developing and executing strategies which would enable companies to better position themselves in the market and develop partnerships with companies and organizations that want to implement “business-sense” transformational strategies. Under his leadership, NPI Governance Consulting was nominated at the Top Empowerment Awards as the 'Fastest Growth SME of the Year'.",
  "Israel has been involved in various mergers and acquisitions and other general corporate / commercial transactions. He has also advised on BEE joint-venture structures, company formations, and re-organisations. Israel has extensive experience in business entity formation and governance matters, M&A, and BEE financing transactions in a wide variety of sectors.",
  "Furthermore, Israel also served on the Boards of a variety of different organisations/ companies and provides management with strategic input on compliance, risk management, and corporate governance. In March 2018, the national Minister of Higher Education & Training appointed Israel to the Board of the BankSETA, the national training authority for the banking and micro-lending industry, which supports people development and skills advancement.",
  "With over 10 years of relationship management experience within the public sector in South Africa and abroad, Israel has worked at the United Nations Environmental Program, the Canadian High Commission Trade Office (as Trade Commissioner) in South Africa, and the Industrial Development Corporation of South Africa (as B-BBEE Advisor). He holds an LL.B in Business Law from Coventry University, studied Law and Social Sciences at the University of Warwick, and completed three Post-Graduate certificates with the Mandela School of Law (Wits).",
  "Book Israel Noko through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to bring definitive B-BBEE transformation strategy, corporate governance insight, and inclusive growth frameworks to your next boardroom or conference."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "npi", name: "NPI GOVERNANCE CONSULTING" },
  { id: "bankseta", name: "BANKSETA" },
  { id: "idc", name: "IDC" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "noko-art-1",
      headline: "An Expansive Power Pack Inside Story | Israel Noko",
      publication: "sheridanpollock.co.za / iono.fm",
      date: "2024",
      action: "Listen to Podcast",
      url: "https://iono.fm/e/1201398",
      image: "/speakers/Israel Noko/Israel-Noko-The-Speakers-Firm-5.jpg"
    },
    {
      id: "noko-art-2",
      headline: "Why are companies struggling with transformation in top management?",
      publication: "Power FM / iono.fm",
      date: "2024",
      action: "Listen to Discussion",
      url: "https://iono.fm/e/1466937",
      image: "/speakers/Israel Noko/Israel-Noko-The-Speakers-Firm-7.jpg"
    },
    {
      id: "noko-art-3",
      headline: "25 Years of Nation Building to Transformation Report",
      publication: "NPI Consulting News",
      date: "2019",
      action: "Read Report",
      url: "https://npiconsulting.co.za/2019/04/23/25-years-of-nation-building-to-transformation/",
      image: "/speakers/Israel Noko/Israel-Noko-The-Speakers-Firm-6.jpg"
    }
  ];

  const customVideos = [
    {
      id: "noko-vid-1",
      label: "Israel Noko on B-BBEE & Corporate Transformation",
      youtubeId: "uUpP_0-ikf0"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Israel Noko"
      speakerTitle=""
      speakerDesignation="Transformation Strategist & Corporate Governance Advisor"
      speakerRole="Founder & CEO of NPI Governance Consulting"
      speakerRef="TSF-IN-33"
      heroBackgroundImage="/speakers/Israel Noko/Israel-Noko-The-Speakers-Firm-9.jpg"
      biographyImage="/speakers/Israel Noko/Israel-Noko-The-Speakers-Firm.jpg"
      bioHook="“Broad-Based Black Economic Empowerment (B-BBEE) is a business-sense transformational strategy, not just compliance.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="israel-noko" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="israel-noko" 
        customIntroText="Inclusive growth panel discussions, B-BBEE transformation masterclasses, and corporate governance seminars led by Israel Noko."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
