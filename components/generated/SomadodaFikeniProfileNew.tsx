"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "psc-chair",
    label: "PSC Chairperson",
    subtitle: "Chairperson of the Public Service Commission of South Africa."
  },
  {
    id: "msu-phd",
    label: "PhD from Michigan State",
    subtitle: "PhD in Comparative Politics and Public Policy Analysis."
  },
  {
    id: "visiting-prof",
    label: "Visiting Professor",
    subtitle: "Visiting Professor at Nelson Mandela University."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "political-economy",
    number: "Theme 01",
    title: "South African Geopolitics & Institutional Reform.",
    copy: "Analysing structural politics, policy trends, and governance models for sustainable socioeconomic development."
  },
  {
    id: "governance-stewardship",
    number: "Theme 02",
    title: "Public Sector Leadership & Governance.",
    copy: "Exploring public administration, accountability, ethical stewardship, and the future of state capacity."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr. Somadoda Fikeni is one of South Africa’s most recognised figures among political and social commentators, and a prominent scholar and public intellectual. He is widely recognised for his insightful commentary on political, social, economic, and heritage issues in both local and international media.",
  "He currently serves as the Chairperson of the Public Service Commission (PSC) of South Africa. Dr. Fikeni is also a visiting professor at Nelson Mandela University and has held various senior academic positions at the University of South Africa (Unisa), including advisor to the principal and director for special projects.",
  "With extensive qualifications including a PhD in Comparative Politics and Public Policy Analysis from Michigan State University, Dr. Fikeni has held numerous leadership positions such as merger manager at the University of Transkei, founding COO of the National Heritage Council of South Africa, and chairperson of the Indlulamithi South Africa Scenarios Board of Trustees."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "psc", name: "PUBLIC SERVICE COMMISSION" },
  { id: "nmu", name: "NELSON MANDELA UNIVERSITY" },
  { id: "unisa", name: "UNISA" }
];

const SOMADODA_MEDIA = [
  {
    id: "somadoda-art-1",
    headline: "Ramaphosa appoints Dr Somadoda Fikeni to head up Public Service Commission",
    publication: "TimesLIVE",
    date: "27 Jan 2021",
    action: "Read Article",
    url: "https://www.timeslive.co.za/politics/2021-01-27-ramaphosa-appoints-dr-somadoda-fikeni-to-head-up-public-service-commission/",
    image: "/speakers/Somadoda Fikeni/Somadoda-Fikeni-The-Speakers-Firm.jpg"
  },
  {
    id: "somadoda-art-2",
    headline: "Bringing Public Services to the People: Dr. Somadoda Fikeni, Commissioner of the Public Service Commission",
    publication: "Public Sector Leaders",
    date: "14 Feb 2021",
    action: "Read Profile",
    url: "https://publicsectorleaders.co.za/bringing-public-services-to-the-people-dr-somadoda-fikeni-commissioner-of-the-public-service-commission/",
    image: "/speakers/Somadoda Fikeni/Somadoda-Fikeni-The-Speakers-Firm-2.jpg"
  },
  {
    id: "somadoda-art-3",
    headline: "Addressing transformation in SA, one task team at a time",
    publication: "UNISA News & Media",
    date: "22 Sep 2022",
    action: "Read Interview",
    url: "https://www.unisa.ac.za/sites/corporate/default/News-&-Media/Articles/Addressing-transformation-in-SA,-one-task-team-at-a-time",
    image: "/speakers/Somadoda Fikeni/Somadoda-Fikeni-The-Speakers-Firm-3.jpg"
  }
];

export const AboutTeamSection = () => {
  const customVideos = [
    {
      id: "somadoda-vid-1",
      label: "Dr. Somadoda Fikeni on Governance",
      youtubeId: "wcYehNAx9gc"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Somadoda Fikeni"
      speakerTitle="Dr."
      speakerDesignation="Political Analyst, Chairman of the PSC & Scholar"
      speakerRole="Chairperson of the Public Service Commission of South Africa, visiting professor, and leading commentator."
      speakerRef="TSF-SF-01"
      heroBackgroundImage="/speakers/Somadoda Fikeni/Dr-Somadoda-Fikeni-The-Speakers-Firm-6.jpg"
      biographyImage="/speakers/Somadoda Fikeni/Somadoda-Fikeni-The-Speakers-Firm-6.jpg"
      bioHook="“Providing critical scholarly analysis and strategic frameworks for policy reform and governance.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={[]}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="somadoda-fikeni" customMedia={SOMADODA_MEDIA} />
      }
    >
      <ProfileAdditionalSections speakerId="somadoda-fikeni" customVideos={customVideos} />
    </SpeakerProfileTemplate>
  );
};
