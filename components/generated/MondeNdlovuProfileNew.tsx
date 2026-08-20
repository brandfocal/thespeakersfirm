"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "mn-bmf",
    label: "MD, Black Management Forum",
    subtitle: "Leads South Africa's foremost organization for management development and transformation."
  },
  {
    id: "mn-henley",
    label: "Henley Alumni Chair",
    subtitle: "Chairperson of the Henley Business School Johannesburg Alumni Chapter."
  },
  {
    id: "mn-icaba",
    label: "Global 100 Black Professional",
    subtitle: "Recognized globally by the ICABA World Network for leadership excellence."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "socio-economic-transformation",
    number: "Theme 01",
    title: "Socio-Economic Transformation.",
    copy: "How to implement effective, sustainable transformation and diversity strategies within corporate structures."
  },
  {
    id: "ethical-governance",
    number: "Theme 02",
    title: "Thought Leadership & Ethical Governance.",
    copy: "Building corporate value and resilience through ethical management development and policy leadership."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Monde Ndlovu is the Managing Director of the Black Management Forum (BMF), a premier South African professional organization dedicated to management development and socio-economic transformation. He previously served as the BMF's first Head of Thought Leadership and has sat on its National Events, Editorial, and Policy and Research Exco committees.",
  "In addition to his leadership at the BMF, Monde serves as the Chairperson of the Henley Business School Johannesburg Alumni Chapter and is a Board Trustee of the Maduke Lot Ndlovu Legacy Trust. He is also a Non-executive Board member of the PGA of South Africa, where he chairs the Transformation Committee.",
  "An active contributor to public discourse, Monde regularly writes on leadership, economic transformation, and policy for Eyewitness News and 702. He co-leads the equality stream for V20 South Africa and, in 2024, was honored as one of the global 100 leading black professionals by the ICABA World Network. He holds qualifications from UNISA and Henley Business School.",
  "Book Monde Ndlovu through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to deliver corporate leadership keynotes, transformation strategy workshops, and ethical governance panel moderation at your next corporate event."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "bmf", name: "BLACK MANAGEMENT FORUM" },
  { id: "henley", name: "HENLEY BUSINESS SCHOOL" },
  { id: "pga", name: "PGA OF SOUTH AFRICA" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "mn-art-1",
      headline: "Monde Ndlovu on management development and transformation in SA",
      publication: "BMF Executive Forum / YouTube",
      date: "2024",
      action: "Watch Discussion",
      url: "https://bmfonline.co.za/media-release/mr-monde-ndlovus-appointment-as-managing-director-of-the-black-management/",
      image: "/speakers/Monde Ndlovu/Monde-Ndlovu-The-Speakers-Firm2.jpg"
    },
    {
      id: "mn-art-2",
      headline: "Ethical Leadership: Navigating corporate governance in modern South Africa",
      publication: "702/Eyewitness News Contributions",
      date: "2023",
      action: "Read Contributions",
      url: "https://www.ewn.co.za/2023/10/26/monde-ndlovu-the-next-30-years-black-leadership-must-help-build-sas-roadmap",
      image: "/speakers/Monde Ndlovu/Monde-Ndlovu-The-Speakers-Firm3.jpg"
    },
    {
      id: "mn-art-3",
      headline: "Recognized among the Global 100 Leading Black Professionals",
      publication: "ICABA World Network Spotlight",
      date: "2024",
      action: "Read Profile",
      url: "https://www.citizen.co.za/business/tired-of-political-rhetoric-ndlovu-wants-to-develop-a-new-leaders/",
      image: "/speakers/Monde Ndlovu/Monde-Ndlovu-The-Speakers-Firm4.jpg"
    }
  ];

  const customVideos = [
    {
      id: "mn-vid-1",
      label: "Monde Ndlovu on Transformative Leadership and Economic Equality",
      youtubeId: "BNpWJAZZst4"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Monde Ndlovu"
      speakerTitle=""
      speakerDesignation="Managing Director of the Black Management Forum (BMF)"
      speakerRole="Transformation Leader & BMF Director"
      speakerRef="TSF-MN-69"
      heroBackgroundImage="/speakers/Monde Ndlovu/Monde-Ndlovu-The-Speakers-Firm7.jpg"
      biographyImage="/speakers/Monde Ndlovu/Monde-Ndlovu-The-Speakers-Firm5.jpg"
      bioHook="“Developing transformative leaders and pioneering ethical corporate governance to build a sustainable, equitable economy.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="monde-ndlovu" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="monde-ndlovu" 
        customIntroText="Ethical management dialogues, socio-economic transformation workshops, and leadership development sessions led by Monde Ndlovu."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
