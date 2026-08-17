"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "high-court-attorney",
    label: "Admitted High Court Attorney",
    subtitle: "Admitted Attorney of the High Courts of South Africa with over a decade of post-qualification experience."
  },
  {
    id: "legacy-yezibaya-founder",
    label: "Founder, Legacy Yezibaya",
    subtitle: "Boutique legal consultancy specializing in fiduciary services, wills, and community legal clinics."
  },
  {
    id: "fintech-compliance",
    label: "FinTech Compliance Executive",
    subtitle: "Secured GN5 Banking through Partnership license and built quality assurance compliance divisions."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "wills-estates",
    number: "Theme 01",
    title: "Wills, Estates & Legacy Security.",
    copy: "Simplifying the legal mechanics of inheritance, estate administration, and preventing family disputes through proactive fiduciary planning."
  },
  {
    id: "regulatory-compliance",
    number: "Theme 02",
    title: "Regulatory Compliance & Risk.",
    copy: "Unpacking licensing, Quality Assurance, and corporate legal risks across fintech and traditional financial sectors."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Zola Thabile Mbatha is an Admitted Attorney of the High Courts of South Africa with over a decade of post-qualification experience as a Fiduciary Specialist and Regulatory Compliance Expert. She is the founder of Legacy Yezibaya, a boutique legal consultancy providing fiduciary services and national community legal clinics — both in-person and via National Media.",
  "Zola has administered ultra-high-net-worth estates and played a leading role in regulatory compliance across multiple sectors. Notably, she obtained a GN5 (Banking through Partnership) License from the Prudential Authority while serving as Head of Compliance for a FinTech operating in three global jurisdictions. She also established and led a Quality Assurance Division, incorporating compliance, risk, legal, and fraud management systems from the ground up.",
  "In the media, Zola is a trusted legal voice, frequently invited as a guest on radio, podcasts, television, and YouTube to simplify complex legal matters for the public. Her “legal clinic through the media” platform has become a powerful tool for legal education, and she was the featured fiduciary commentator on the estate of the late former Deputy President David “DD” Mabuza.",
  "Zola is also a sought-after public speaker, having addressed platforms such as the Africa Financial Inclusion Conference, Old Mutual Black Distributors Trust, and numerous corporate and women’s empowerment events, where she provides legal and financial clarity rooted in current legislation.",
  "Book Zola Mbatha through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to bring expert estate planning guidance, fiduciary compliance insight, and empowering legal workshops to your team or organization."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "oldmutual", name: "OLD MUTUAL" },
  { id: "legacy-yezibaya", name: "LEGACY YEZIBAYA" },
  { id: "fintech", name: "FINTECH COMPLIANCE" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "mbatha-art-1",
      headline: "Wills, Fraud in Housing & Why R1 Million for a Taxi is Daylight Robbery",
      publication: "Rings and Bearings",
      date: "2023",
      action: "Watch Discussion",
      url: "https://www.youtube.com/watch?v=2UCOPUjs15c",
      image: "/speakers/Zola Mbatha/Zola-Mbatha-The-Speakers-Firm.jpg"
    },
    {
      id: "mbatha-art-2",
      headline: "WE HONESTLY CANNOT AFFORD TO DIE",
      publication: "Legal Clinic Broadcast",
      date: "2023",
      action: "Watch Video",
      url: "https://www.youtube.com/watch?v=kwGeGMZyMWU",
      image: "/speakers/Zola Mbatha/Zola-Mbatha-The-Speakers-Firm-5.jpg"
    },
    {
      id: "mbatha-art-3",
      headline: "Court battle over DD Mabuza’s R44m pension fund",
      publication: "SABC News Analysis",
      date: "2023",
      action: "Watch Commentary",
      url: "https://www.youtube.com/watch?v=WhxZmYxPfeE",
      image: "/speakers/Zola Mbatha/Zola-Mbatha-The-Speakers-Firm-6.jpg"
    }
  ];

  const customVideos = [
    {
      id: "mbatha-vid-1",
      label: "Zola Mbatha Legal Clinic & Wills Presentation",
      youtubeId: "pg2C8mVK51E"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Zola Mbatha"
      speakerTitle=""
      speakerDesignation="Fiduciary & Estate Planning Specialist"
      speakerRole="Founder of Legacy Yezibaya"
      speakerRef="TSF-ZM-32"
      heroBackgroundImage="/speakers/Zola Mbatha/Zola-Mbatha-The-Speakers-Firm-2.jpg"
      biographyImage="/speakers/Zola Mbatha/Zola-Mbatha-The-Speakers-Firm-4.jpg"
      bioHook="“We honestly cannot afford to die without a will. Fiduciary planning is the basis of legacy protection and family peace.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="zola-mbatha" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="zola-mbatha" 
        customIntroText="Fiduciary planning masterclasses, legal compliance briefings, and estate planning legal clinics led by Zola Mbatha."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
