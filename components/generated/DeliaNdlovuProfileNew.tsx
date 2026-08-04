"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const STRATEGIC_THEMES = [
  {
    id: "global-leadership-governance",
    number: "Theme 01",
    title: "Global Leadership, Resilient Governance & Business Ethics",
    copy: "Keynotes covering board strategy, ethical leadership in turbulent markets, and institutional resilience. Draws from over 30 years of top-tier leadership experience, including presiding over Deloitte Africa's board operations across 16 African countries."
  },
  {
    id: "sustainable-venturing",
    number: "Theme 02",
    title: "Sustainable Venturing, Growth & Women on Boards",
    copy: "Focuses on strategic tax frameworks, investment architecture, and advancing gender inclusion in boardrooms. Unpacks actionable paths for co-founding Women on Boards and guiding Chapter Zero Southern Africa."
  }
];

const TICKER_LOGOS = [
  "DELOITTE AFRICA", "ECIC CHAIRPERSON", "PETRA ROCK INVESTMENTS", "WITS MBA", "SAICA MASTER TAX", "WOMEN ON BOARDS", "CHAPTER ZERO SA", "IOD MEMBER", "PPS BOARD"
];

const FULL_BIO_PARAGRAPHS = [
  "Delia Ndlovu is a prominent South African business leader with over 30 years of global leadership experience. She is the former Chairperson of the Board of Deloitte Africa, where she oversaw operations across 16 African countries and served on the Deloitte Global Board. During her distinguished career, Delia has driven strategic growth, built inclusive corporate environments, and advised top-tier multinational organizations on restructuring, taxation, and business transformation.",
  "Prior to her appointment as Chair of the Board, Delia served as the Managing Director of the Deloitte Africa Tax & Legal service line and led the Global Employer Services (GES) advisory team in South Africa. Her areas of expertise span multiple industries including energy, telecommunications, manufacturing, mining, financial services, and consumer products.",
  "Delia currently serves as the Independent Chairperson of the Export Credit Insurance Corporation of South Africa (ECIC). In this role, she provides strategic oversight to the state-owned corporation, underwriting regional infrastructure and enabling trade. Additionally, she is the founder and CEO of Petra Rock Investments, focusing on sustainable, high-growth ventures across sub-Saharan Africa.",
  "As a passionate advocate for corporate governance and gender equality, she is the co-founder of Women on Boards (partnered with the Good Governance Academy) and serves on the board of Chapter Zero Southern Africa. Her qualifications include an MBA from the University of the Witwatersrand, a Higher Diploma in Tax Law, and Master Tax Practitioner (SAICA) certification."
];

const CREDENTIAL_BADGES = [
  {
    id: "former-deloitte-chair",
    label: "Former Deloitte Africa Board Chair",
    subtitle: "Led board oversight for R8bn services firm across 16 African nations."
  },
  {
    id: "ecic-board-chair",
    label: "ECIC Independent Chairperson",
    subtitle: "Providing strategic board oversight for South Africa's export credit agency."
  }
];

const GALLERY_IMAGES = [
  {
    id: "dn-gal-1",
    src: "/speakers/Delia Ndlovu/Delia-Ndlovu-The-Speakers-Firm-6.jpg",
    alt: "Delia Ndlovu corporate portrait",
    caption: "Delia Ndlovu, chairperson and executive advisor",
    className: "sm:col-span-2 lg:col-span-2"
  },
  {
    id: "dn-gal-2",
    src: "/speakers/Delia Ndlovu/Delia-Ndlovu-The-Speakers-Firm-7.jpg",
    alt: "Delia Ndlovu in discussion",
    caption: "Leading discussions on sustainable trade financing",
    className: ""
  },
  {
    id: "dn-gal-3",
    src: "/speakers/Delia Ndlovu/image.jpg",
    alt: "Delia Ndlovu close portrait",
    caption: "Co-founder of Women on Boards",
    className: ""
  }
];

const MEDIA_ARTICLES = [
  {
    id: "dn-med-1",
    headline: "ECIC Chairperson Delia Ndlovu outlines strategic oversight on South Africa's export growth and regional projects.",
    publication: "Export Credit Insurance Corporation",
    date: "12 Oct 2025",
    action: "Read Press Release",
    url: "https://www.ecic.co.za/",
    image: "/speakers/Delia Ndlovu/Delia-Ndlovu-The-Speakers-Firm-3.jpg"
  },
  {
    id: "dn-med-2",
    headline: "Resilient Leadership, Ethics & Governance in Turbulent Times: A Fireside Chat with Delia Ndlovu",
    publication: "Good Governance Academy",
    date: "15 Jun 2024",
    action: "Watch Discussion",
    url: "https://goodgovernance.academy",
    image: "/speakers/Delia Ndlovu/Delia-Ndlovu-The-Speakers-Firm-4.jpg"
  },
  {
    id: "dn-med-3",
    headline: "Delia Ndlovu appointed Independent Board Chairperson of ECIC",
    publication: "Engineering News",
    date: "03 Sep 2024",
    action: "Read News Article",
    url: "https://www.engineeringnews.co.za/",
    image: "/speakers/Delia Ndlovu/Delia-Ndlovu-The-Speakers-Firm-5.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <>
      <SpeakerProfileTemplate
        speakerName="Delia Ndlovu"
        speakerTitle=""
        speakerDesignation="Independent Board Chairperson (ECIC). Former Deloitte Africa Board Chair. Transformation Strategist."
        speakerRole="Guiding C-suite leaders on boardroom resilience, international trade credit, and corporate governance."
        speakerRef="TSF-DN-01"
        heroBackgroundImage="/speakers/Delia Ndlovu/Delia-Ndlovu-The-Speakers-Firm-10.jpg"
        biographyImage="/speakers/Delia Ndlovu/Delia-Ndlovu-The-Speakers-Firm.jpg"
        bioHook="“Resilient leadership starts with unwavering ethics, foresight, and inclusive governance.”"
        fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
        credentials={CREDENTIAL_BADGES}
        strategicThemes={STRATEGIC_THEMES}
        socialProofLogos={TICKER_LOGOS.map(name => ({ id: name.toLowerCase().replace(/\s+/g, "-"), name }))}
        mediaArticlesSlot={
          <ProfileAdditionalMediaSections speakerId="delia-ndlovu" customMedia={MEDIA_ARTICLES} />
        }
      >
        <ProfileAdditionalSections 
          speakerId="delia-ndlovu"
          customGallery={[]}
          customIntroText="Snapshots from Delia's global boardrooms, policy advisory roundtables, and Women on Boards forums."
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
