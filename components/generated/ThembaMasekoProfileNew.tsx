"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "head-wits-governance",
    label: "Head: Wits School of Governance",
    subtitle: "Leading academic programs in governance and public policy."
  },
  {
    id: "former-gov-spokesperson",
    label: "Former Government Spokesperson",
    subtitle: "Served as CEO of GCIS and Director-General."
  },
  {
    id: "ba-llb-mba",
    label: "BA LLB (Wits) & MBA",
    subtitle: "Dual qualifications in corporate law and business administration."
  },
  {
    id: "corruption-watch-board",
    label: "Corruption Watch Board Director",
    subtitle: "Whistleblower advocating for state integrity."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "crisis-leadership-governance",
    number: "Theme 01",
    title: "Crisis Leadership & Public Governance",
    copy: "Rebuilding state capacity, institutional integrity, and whistleblower support systems in public and private enterprises."
  },
  {
    id: "state-capture-risk",
    number: "Theme 02",
    title: "State Capture & Geopolitical Risk",
    copy: "Insights into state capture, anti-corruption strategies, and risk mitigation models for corporate boards."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Themba Maseko is Head of the Wits School of Governance. He holds BA LLB (University of the Witwatersrand) and a Master of Business Administration degree (De Montfort University).",
  "Previously Professor Maseko had a long career in the public service, which included roles as the CEO of the Government Communication and Information Service and Government Spokesperson and Director-General in the Department of Public Service and Administration. He also served in the National Department of Public Works, and was the first Superintendent-General in the Gauteng Department of Education and a Member of Parliament in 1994.",
  "His role in the private sector included short stints as Managing Director of the Damelin Education Group, independent management consultant, and Communications Director at the Business Leadership South Africa.",
  "Professor Maseko left the public service after 17 years when he became one of the public servants who spoke out against the capture of the South African state and became a witness at the Judicial Commission of Inquiry into State Capture, also known as the Zondo Commission. Professor Maseko has written of his decision to speak out in the book, For my Country.",
  "He serves on the Boards of Corruption Watch and the Council for the Advancement of the South African Constitution."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "wits-governance", name: "WITS SCHOOL OF GOVERNANCE" },
  { id: "corruption-watch", name: "CORRUPTION WATCH" },
  { id: "gcis", name: "GCIS" },
  { id: "casac", name: "CASAC" }
];

const customMedia = [
  {
    id: "themba-art-1",
    headline: "State capture whistleblower Themba Maseko appointed to key post at Wits governance school",
    publication: "News24",
    date: "14 Jan 2022",
    url: "https://www.news24.com/business/companies/state-capture-whistleblower-themba-maseko-appointed-wits-governance-school-director-20220114",
    action: "Read Article",
    image: "/speakers/Themba Maseko/Themba-Maseko-The-Speakers-Firm-3.jpg"
  },
  {
    id: "themba-art-2",
    headline: "Themba Maseko: ‘South Africa now had a parallel system of government’",
    publication: "Daily Maverick",
    date: "30 Aug 2018",
    url: "https://www.dailymaverick.co.za/article/2018-08-30-themba-maseko-sa-now-had-a-parallel-system-of-government/",
    action: "Read Article",
    image: "/speakers/Themba Maseko/Themba-Maseko-The-Speakers-Firm-4.jpg"
  },
  {
    id: "themba-art-3",
    headline: "Former DG Themba Maseko tells state capture inquiry why he quit office",
    publication: "TimesLIVE",
    date: "06 Nov 2019",
    url: "https://www.timeslive.co.za/politics/2019-11-06-former-dg-themba-maseko-tells-state-capture-inquiry-why-he-quit-office/",
    action: "Read Article",
    image: "/speakers/Themba Maseko/Themba-Maseko-The-Speakers-Firm-5.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Themba Maseko"
      speakerTitle=""
      speakerDesignation="Head: Wits School of Governance & Former Government Spokesperson"
      speakerRole="Distinguished public service leader, anti-corruption advocate, and whistleblower."
      speakerRef="TSF-TM-03"
      heroBackgroundImage="/speakers/Themba Maseko/Themba-Maseko-The-Speakers-Firm-6.jpg"
      biographyImage="/speakers/Themba Maseko/Themba-Maseko-The-Speakers-Firm-7.jpg"
      bioHook="“Standing for public sector integrity, ethical leadership, and institutional accountability.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={[
        {
          id: "themba-book-1",
          title: "My Country: Why I Blew the Whistle on Zuma and the Guptas",
          description: "A powerful testimony on speaking out against state capture, whistleblowing, and public service ethics.",
          coverImage: "/speakers/Themba Maseko/For-My-Country--Why-I-Blew-the-Whistle-on-Zuma-and-the-Guptas.jpg",
          url: "https://www.amazon.co.za/My-Country-Blew-Whistle-Guptas/dp/177619053X"
        }
      ]}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="themba-maseko" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="themba-maseko" 
        customIntroText="Snapshots from Themba Maseko's Wits academic lectures, anti-corruption roundtables, and public broadcasts."
        customGallery={[]}
        customVideos={[
          {
            id: "themba-video-1",
            label: "Themba Maseko on Whistleblowing & Public Service",
            youtubeId: "R2rvIanVdGk"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
