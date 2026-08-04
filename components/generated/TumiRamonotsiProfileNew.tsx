"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const STRATEGIC_THEMES = [
  {
    id: "digital-transformation-4ir",
    number: "Theme 01",
    title: "Digital Transformation, 4IR & ICT Strategy",
    copy: "Keynotes guiding boards and executives on EMEA digital trends, software architectures, enterprise scaling, and strategic technology investments. Leverages extensive consulting experience at Gartner, Software AG, and PwC."
  },
  {
    id: "risk-governance-audit",
    number: "Theme 02",
    title: "Risk Management, Group Audit & Strategic Cost Optimization",
    copy: "Addresses corporate risk management, cost optimization structures, and committee oversight. Incorporates over 5 years of board level audit and performance committee insights."
  }
];

const TICKER_LOGOS = [
  "EMANCIP8 CONSULTING", "GARTNER ADVISORY", "PWC CONSULTING", "SOFTWARE AG", "CITY OF JOBURG AUDIT", "TOTAL OIL", "TRANSNET RAIL", "WITS GRADUATE", "AFRICAN BANK"
];

const FULL_BIO_PARAGRAPHS = [
  "Tumi Ramonotsi is a dynamic Corporate Leader, Non-Executive Director and Business Strategist. As an astute Director, Mr Ramonotsi is currently an active Board Director with over 5 years’ experience including serving on the Group Audit Committee, the Group Risk & Governance Committee, and the Group Performance Audit Committee. Mr Ramonotsi is amongst other things responsible for advising business, enterprises and governments in the EMEA region (Europe, Middle East & Africa) on Strategy, Digital Transformation, Strategic Cost Optimisation Governance, Risk Management and most importantly Technology (ICT).",
  "Mr Ramonotsi is an MBA candidate and a Wits Business School graduate with various qualifications and industry certification. As Managing Partner at Emancip8, Tumi is responsible for providing Senior Leaders, Executives & Boards across various sectors & enterprises with the indispensable Business Insights, Advice & Tools they need, to achieve their mission-critical priorities & KPI’s to build organizations of tomorrow.",
  "Tumi has over a decade’s work experience, both in the Private – & Public-Sector. His combined practical work experience varies from the Banking & Finance Sector at African Bank, ICT Sector, Energy Oil-Gas Sector at Total Oil, Rail and Transport Sector at Transnet, Media & Television Industry and lastly Management Consulting & Advisory Sector at both Software AG and PwC."
];

const CREDENTIAL_BADGES = [
  {
    id: "managing-partner-emancip8",
    label: "Managing Partner at Emancip8",
    subtitle: "Leading business strategy and management advisory services."
  },
  {
    id: "group-audit-committee",
    label: "Group Audit & Risk Committee Director",
    subtitle: "Over 5 years advising municipal and corporate boards on governance."
  }
];

const GALLERY_IMAGES = [
  {
    id: "tr-gal-1",
    src: "/speakers/Tumi Ramonotsi/Tumi-Ramonotsi-The-Speakers-Firm-9.jpg",
    alt: "Tumi Ramonotsi presentation",
    caption: "Tumi presenting on corporate digital governance frameworks",
    className: "sm:col-span-2 lg:col-span-2"
  },
  {
    id: "tr-gal-2",
    src: "/speakers/Tumi Ramonotsi/Tumi-Ramonotsi-The-Speakers-Firm-8.jpg",
    alt: "Tumi close portrait",
    caption: "Risk management, governance, and technology advisor",
    className: ""
  },
  {
    id: "tr-gal-3",
    src: "/speakers/Tumi Ramonotsi/Tumi-Ramonotsi-The-Speakers-Firm-7.jpg",
    alt: "Tumi in session",
    caption: "Advising enterprise leadership cohorts on 4IR strategy",
    className: ""
  }
];

const VIDEOS = [
  {
    id: "tr-vid-1",
    label: "Tumi Ramonotsi: Cyber Security & Data Sovereignty Dialogue",
    youtubeId: "Xb2VPORlJ5U"
  }
];

const MEDIA_ARTICLES = [
  {
    id: "tr-med-1",
    headline: "Tumi Ramonotsi highlights regional ICT infrastructure growth and 4IR investments.",
    publication: "IT News Africa",
    date: "18 Sep 2025",
    action: "Read Press Coverage",
    url: "https://www.itnewsafrica.com/",
    image: "/speakers/Tumi Ramonotsi/Tumi-Ramonotsi-The-Speakers-Firm-9.jpg"
  },
  {
    id: "tr-med-2",
    headline: "Digital transformation, governance and strategic cost optimization in the EMEA region.",
    publication: "Emancip8 Consulting",
    date: "14 Jun 2024",
    action: "Read Advisory Notes",
    url: "https://www.emancip8.com",
    image: "/speakers/Tumi Ramonotsi/Tumi-Ramonotsi-The-Speakers-Firm-8.jpg"
  },
  {
    id: "tr-med-3",
    headline: "Group Audit and Risk Governance frameworks for municipal and corporate stewardship.",
    publication: "City of Johannesburg Governance",
    date: "10 Mar 2024",
    action: "View Governance Report",
    url: "https://www.joburg.org.za/",
    image: "/speakers/Tumi Ramonotsi/Tumi-Ramonotsi-The-Speakers-Firm-7.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <>
      <SpeakerProfileTemplate
        speakerName="Tumi Ramonotsi"
        speakerTitle=""
        speakerDesignation="Financial Steward. Risk, Governance & Leadership Strategist. Managing Partner (Emancip8)."
        speakerRole="Advising C-suite headers and public boards on digital transformation, technology risk, and cost structures."
        speakerRef="TSF-TR-01"
        heroBackgroundImage="/speakers/Tumi Ramonotsi/Tumi-Ramonotsi-The-Speakers-Firm-3.jpg"
        biographyImage="/speakers/Tumi Ramonotsi/Tumi-Ramonotsi-The-Speakers-Firm-4.jpg"
        bioHook="“Transforming business models is not just about technology—it's about aligning risk, governance, and value.”"
        fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
        credentials={CREDENTIAL_BADGES}
        strategicThemes={STRATEGIC_THEMES}
        socialProofLogos={TICKER_LOGOS.map(name => ({ id: name.toLowerCase().replace(/\s+/g, "-"), name }))}
        mediaArticlesSlot={
          <ProfileAdditionalMediaSections speakerId="tumi-ramonotsi" customMedia={MEDIA_ARTICLES} />
        }
      >
        <ProfileAdditionalSections 
          speakerId="tumi-ramonotsi"
          customGallery={[]}
          customVideos={VIDEOS}
          customIntroText="Snapshots from Tumi's public audit presentations, 4IR workshops, and executive consulting sessions."
        />
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
