"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "buergenthal-scholar",
    label: "Thomas Buergenthal Scholar",
    subtitle: "LLM candidate in Government Procurement Law at George Washington University."
  },
  {
    id: "comp-commission-lead",
    label: "Competition Commission Leader",
    subtitle: "Served in policy, research, mergers & acquisitions, and legal services."
  },
  {
    id: "safm-broadcaster",
    label: "SAfm Talk Show Host",
    subtitle: "Engaging national audiences on law, governance, and socio-economic reform."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "market-inquiries-media",
    number: "Theme 01",
    title: "Competition Policy & Digital Platforms.",
    copy: "Deconstructing the media and digital platforms inquiries, analyzing the interface between tech giants, publishers, and competition frameworks."
  },
  {
    id: "procurement-governance",
    number: "Theme 02",
    title: "Government Procurement & Trade.",
    copy: "Structuring clean, transparent procurement policies, managing trade dependencies, and minimizing public sector transactional risks."
  },
  {
    id: "stakeholder-engagement",
    number: "Theme 03",
    title: "Corporate Conferencing & Media Strategy.",
    copy: "Bridging complex legal realities with public communications, stakeholder mapping, and policy positioning."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "At The Speakers Firm, we proudly represent Nqaba Songezo Mabece, a trailblazer in law, policy, and strategic stakeholder engagement, whose career bridges the intersection of governance, innovation, and public impact. With an exceptional blend of academic depth and practical leadership, Nqaba has established himself as one of South Africa’s most dynamic legal minds, shaping policy, influencing governance frameworks, and driving institutional excellence across multiple sectors.",
  "Nqaba is a Justice Thomas Buergenthal Scholar currently pursuing an LLM in Government Procurement Law at George Washington University in the United States. He also holds an LLM in International Trade Law from Stellenbosch University and an LLB (Honours) from the University of Fort Hare, underscoring his academic versatility and global perspective. His commitment to continuous learning includes advanced executive courses such as “The Next Manager” at the University of Pretoria (GIBS) and “POPIA for Tech Startups” at the University of Cape Town.",
  "Over the years, Nqaba has made significant contributions at the Competition Commission of South Africa, where he served in leadership roles across Policy and Research, Mergers and Acquisitions, and Legal Services. His strategic oversight and legal acumen were instrumental in key market inquiries, including the Media and Digital Platforms Market Inquiry, which analysed the evolving relationship between digital media and traditional broadcasting. His influence extended into policy development, stakeholder relations, and institutional communication, where he became known for translating complex legal frameworks into actionable strategies for impact.",
  "Beyond his legal and policy leadership, Nqaba is a compelling broadcaster and thought leader, best known for hosting high-impact talk shows on SAfm, where he engages national audiences on issues of law, governance, and social justice. As a consultant with AfrikaneyeZ Holdings, he advises on corporate conferencing, stakeholder mapping, media strategy, and brand positioning, merging legal insight with strategic communication."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "compcom", name: "COMPETITION COMMISSION" },
  { id: "safm", name: "SAFM" },
  { id: "gwu", name: "GEORGE WASHINGTON UNIV" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "nqaba-art-1",
      headline: "Competition Commission: Policy & Market Dynamics in Digital Media",
      publication: "The Speakers Firm",
      date: "2025",
      action: "Read Profile",
      url: "https://thespeakersfirm.co.za/mc-and-facilitators/nqaba-mabece/",
      image: "/speakers/Nqaba Mabece/Nqaba-Mabece-The-Speakers-Firm-2.jpg"
    }
  ];

  const customGallery = [
    {
      id: "nqaba-gal-1",
      src: "/speakers/Nqaba Mabece/Nqaba-Mabece-The-Speakers-Firm-3.jpg",
      alt: "Nqaba Mabece keynote",
      caption: "Presenting on international trade and procurement policy",
      className: "sm:col-span-2 lg:col-span-2"
    },
    {
      id: "nqaba-gal-2",
      src: "/speakers/Nqaba Mabece/Nqaba-Mabece-The-Speakers-Firm-4.jpg",
      alt: "Nqaba Mabece panel",
      caption: "Facilitating high-level governance panel dialogues",
      className: ""
    },
    {
      id: "nqaba-gal-3",
      src: "/speakers/Nqaba Mabece/Nqaba-Mabece-The-Speakers-Firm-5.jpg",
      alt: "Nqaba Mabece media interview",
      caption: "Representing policy frameworks in broadcast media",
      className: ""
    }
  ];

  const customVideos = [
    {
      id: "nqaba-vid-1",
      label: "Nqaba Mabece - Legal and Policy Presentation",
      youtubeId: "oXg1j3g1wX0"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Nqaba Mabece"
      speakerTitle=""
      speakerDesignation="Law, Policy & Strategic Stakeholder Engagement Authority"
      speakerRole="Buergenthal Scholar, government procurement expert, and SAfm broadcaster."
      speakerRef="TSF-NM-05"
      heroBackgroundImage="/speakers/Nqaba Mabece/Nqaba-Mabece-The-Speakers-Firm.jpg"
      biographyImage="/speakers/Nqaba Mabece/Nqaba-Mabece-The-Speakers-Firm-7.jpg"
      bioHook="“Bridging the gap between complex legal policy and impactful public communication is the core of governance.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="nqaba-mabece" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="nqaba-mabece" 
        customGallery={customGallery} 
        customIntroText="Policy briefs, legal forums and media facilitations by Nqaba Mabece."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
