import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "associate-prof", label: "Associate Professor", subtitle: "University of Johannesburg" },
  { id: "dept-head", label: "Head of Department", subtitle: "Strategic Communication (UJ)" },
  { id: "published-author", label: "Author", subtitle: "Political Economy & ANC History" },
  { id: "media-analyst", label: "Political Analyst", subtitle: "Broadcasting & Print Media" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "Strategic Communication & Media Political Economy",
    copy: "Analyzing media policy, political economy, and structural shifts in South African strategic communications."
  },
  {
    id: "theme-2",
    number: "02",
    title: "Political History & Democratic Transformation",
    copy: "Examining liberation movements, political ideology, leadership transitions, and structural transformation in South Africa."
  },
  {
    id: "theme-3",
    number: "03",
    title: "Institutional Governance & Public Intellectual Leadership",
    copy: "Advancing ethical governance, public scholarship, and evidence-based policy discourse in higher education and government."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Mandla J. Radebe is an Associate Professor in the Department of Strategic Communication and the Director of the Centre for Data and Digital Communications in the School of Communication. With a professional tenure spanning over two decades, he has extensive experience across diverse industries including Accounting & Auditing, Financial Services, Information and Communication Technology, Higher Education, Retail, and the Public Sector. Mandla has actively contributed to numerous policy formulation and development initiatives throughout his career. Previously, he held the role of Business Executive overseeing Communication and Stakeholder Management at the Auditor-General of South Africa until December 2020. He is an award-winning author, recognised for his book “The Lost Prince of the ANC: The Life and Times of Jabulani Nobleman ‘Mzala’ Nxumalo 1955-1991” (Jacana Media), which won the prestigious 2023 South African Literary Awards (SALA) Creative Non-Fiction Literary Award. Mandla is also the author of “Constructing Hegemony: The South African Commercial Media and the (Mis)Representation of Nationalisation” (UKZN Press)."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "uj", name: "UNIVERSITY OF JOHANNESBURG" },
  { id: "dept-strat-comm", name: "DEPT OF STRATEGIC COMMUNICATION" },
  { id: "academic-press", name: "ACADEMIC PRESS" }
];

const BOOKS = [
  {
    id: "mandla-book-1",
    title: "Apartheid Did Not Die",
    description: "A critical examination of post-apartheid political economy, structural inequalities, and media dynamics.",
    coverImage: "/speakers/Mandla%20J.%20Radebe/Apartheid-Did-Not-Die'-by-Mandla-J-Radebe.jpg",
    url: "https://thespeakersfirm.co.za/media-brand-reputation/mandla-j-radebe/"
  },
  {
    id: "mandla-book-2",
    title: "The Lost Prince of the ANC: The Life and Times of Jabulani Nobleman ‘Mzala’ Nxumalo",
    description: "An authoritative biography exploring the intellectual legacy and political contributions of Mzala Nxumalo.",
    coverImage: "/speakers/Mandla%20J.%20Radebe/The-Lost-Prince-of-the-ANC--The-Life-and-Times-of-Jabulani-Nobleman-%E2%80%98Mzala%E2%80%99-Nxumalo.jpg",
    url: "https://thespeakersfirm.co.za/media-brand-reputation/mandla-j-radebe/"
  }
];

const customMedia = [
  {
    id: "mandla-media-1",
    headline: "Prof Mandla J. Radebe on Strategic Communication & Liberation History",
    publication: "The Speakers Firm",
    date: "",
    url: "https://thespeakersfirm.co.za/media-brand-reputation/mandla-j-radebe/",
    action: "BOOK THE SPEAKER",
    image: "/speakers/Mandla%20J.%20Radebe/Prof-Mandla-J-Radebe-The-Speakers-Firm-3.jpg"
  }
];

const customGallery = [
  {
    id: "mandla-gal-1",
    src: "/speakers/Mandla%20J.%20Radebe/prof-mandla-j-radebe.jpg",
    alt: "Prof. Mandla J. Radebe Executive Portrait",
    caption: "Prof. Mandla J. Radebe",
    className: ""
  },
  {
    id: "mandla-gal-2",
    src: "/speakers/Mandla%20J.%20Radebe/Prof-Mandla-J-Radebe-The-Speakers-Firm-3.jpg",
    alt: "Prof. Mandla J. Radebe Academic Lecture",
    caption: "Academic Leadership & Discourse",
    className: ""
  },
  {
    id: "mandla-gal-3",
    src: "/speakers/Mandla%20J.%20Radebe/Prof-Mandla-J-Radebe-The-Speakers-Firm-4.jpg",
    alt: "Prof. Mandla J. Radebe Speaking",
    caption: "Public Keynote Presentation",
    className: ""
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Mandla J. Radebe"
      speakerTitle="Prof"
      speakerDesignation="Head of Strategic Communication Dept (UJ) & Author"
      speakerRole="Associate Professor, Political Economist & Media Analyst."
      speakerRef="TSF-MJR-37"
      heroBackgroundImage="/speakers/Mandla%20J.%20Radebe/Prof-Mandla-J-Radebe-The-Speakers-Firm-5.jpg"
      biographyImage="/speakers/Mandla%20J.%20Radebe/prof-mandla-j-radebe.jpg"
      bioHook="“Understanding the political economy of media and history is key to shaping transformative future governance.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      books={BOOKS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="mandla-j-radebe" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="mandla-j-radebe" 
        customGallery={customGallery} 
        customVideos={[
          {
            id: "mandla-video-1",
            label: "Experience Reel",
            youtubeId: "fDKkUn_fOck"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
