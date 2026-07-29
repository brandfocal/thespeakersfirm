"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "holdings-ceo",
    label: "CEO of Siyotula Holdings",
    subtitle: "Focuses on advisory services and strategic investments."
  },
  {
    id: "prof-uj",
    label: "Professor in Practice",
    subtitle: "Appointed at the University of Johannesburg Business School."
  },
  {
    id: "sarb-shortlist",
    label: "SARB Board Shortlisted",
    subtitle: "Youngest member to be shortlisted for the SARB board."
  },
  {
    id: "ca-sa",
    label: "Chartered Accountant (SA)",
    subtitle: "Holds CA(SA), FCMA(UK), CD(SA), and MBA degrees."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "strategic-advisory-turnarounds",
    number: "Theme 01",
    title: "Strategic Advisory and Corporate Turnarounds",
    copy: "Zukie has a proven track record of growing, transforming, and turning around businesses in both the public and private sectors. Drawing on 17 years of cross-sector expertise, she advises on leadership and operational change."
  },
  {
    id: "governance-investment-strategy",
    number: "Theme 02",
    title: "Financial Governance and Investment Strategy",
    copy: "As the former CEO of Thebe Capital, Zukie managed a large and diverse portfolio of investments. She brings deep insights into board governance, risk management, and strategic acquisitions."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Nozukiso Zukie Siyotula is the founding CEO of Siyotula Holdings, a 100% female-owned and managed company which focuses on advisory services and strategic investments in key economic sectors. She has also been appointed a Professor in Practice at the University of Johannesburg Business School. She holds a CA (SA); FCMA(UK);CD(SA); MBA and Executive Programmes from Harvard, Insead and Oxford.",
  "Zukie is a highly experienced executive with a proven track record as CEO and CFO. She has grown, transformed and turned around business in the public and private sector. Her drives. During her diverse 17 years of professional experience, she has held various leadership and management roles across various sectors including manufacturing, banking, insurance, private equity, oil and gas, mining and telecoms.",
  "Zukie currently serves as a lead independent non-executive director, and serves on various board committees in the public and private sector including African Bank, York Timbers, Airports Company South Africa (ACSA SOC), Toyota Financial Services, Ogilvy Mathers South Africa. She is also in the Takeover Regulations Panel, Nelson Mandela Childrens Hospital and Show it Now NGO.",
  "As the CEO of Thebe Capital, Zukie played a critical role in managing a large diverse portfolio of investments across various sectors and actively growing this portfolio through new acquisitions. Prior to joining the Thebe Group, Zukie held various senior positions at the Barclays Africa Group, Old Mutual Retail Mass, Royal Bafokeng Holdings and South African Breweries.",
  "Prior directorships amongst others include Bidvest Group, Growthpoint Properties, Denel SOC, Shell South Africa, Vodacom South Africa, Altech Netstar, Combined Motot Holdings, Safripol Chemicals, as well as Professional bodies ie ABSIP and AWCA.",
  "She has been recognised for various leadership roles and awards internationally and locally such as a World Economic Forum Young Global Leader, Desmond Tutu Fellow, Aspen Leadership Initiatice Leadership Fellow, Internationall Womans Forum Leadership Fellow and a Choisel Top 10 African Leaders Lauriet. She is a well sought after international key note speaker and advisor. She is a certified Neuro Linguistic Practioner and Oncology Coach who is paaaionate about helping great leadership achieve significance."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "siyotula-holdings", name: "SIYOTULA HOLDINGS" },
  { id: "uj-business-school", name: "UJ BUSINESS SCHOOL" },
  { id: "thebe-capital", name: "THEBE CAPITAL" },
  { id: "african-bank", name: "AFRICAN BANK" }
];

const customMedia = [
  {
    id: "zukie-media-1",
    headline: "BACKSTORY: Siyotula Holdings CEO Zukie Siyotula",
    publication: "Financial Mail (BusinessLive)",
    date: "2020-09-10",
    url: "https://www.businesslive.co.za/fm/money-and-investing/backstory/2020-09-10-backstory-siyotula-holdings-ceo-zukie-siyotula/",
    action: "Read Article",
    image: "/speakers/Zukie%20Siyotula/zukie-siyotula-the-speakers-firm-2.jpg"
  },
  {
    id: "zukie-media-2",
    headline: "Zukie Siyotula: The youngest member to be shortlisted for SARB board",
    publication: "IOL (Business Report)",
    date: "2018-06-28",
    url: "https://iol.co.za/business-report/companies/2018-06-28-zukie-siyotula-the-youngest-member-to-be-shortlisted-for-sarb-board/",
    action: "Read Article",
    image: "/speakers/Zukie%20Siyotula/zukie-siyotula-the-speakers-firm-3.jpg"
  },
  {
    id: "zukie-media-3",
    headline: "Disruptor in the SA’s corporate sector",
    publication: "CNBC Africa",
    date: "N/A",
    url: "https://www.cnbcafrica.com/media/5524364017001/",
    action: "Watch Video",
    image: "/speakers/Zukie%20Siyotula/zukie-siyotula-the-speakers-firm-4.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Zukie Siyotula"
      speakerTitle="Nozukiso"
      speakerDesignation="Founding CEO of Siyotula Holdings & Professor of Practice"
      speakerRole="100% female-owned advisory and strategic investment leader."
      speakerRef="TSF-ZS-12"
      heroBackgroundImage="/speakers/Zukie%20Siyotula/zukie-siyotula-the-speakers-firm-7.jpg"
      biographyImage="/speakers/Zukie%20Siyotula/zukie-siyotula-the-speakers-firm.jpg"
      bioHook="“Growing, transforming, and turning around businesses with purpose and strategic governance.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="zukie-siyotula" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="zukie-siyotula" 
        customVideos={[
          {
            id: "zukie-video-1",
            label: "Experience Reel",
            youtubeId: "8r14UbCmPDY"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
