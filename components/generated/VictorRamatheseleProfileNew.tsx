import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "ceo-medipost", label: "CEO of Medipost", subtitle: "Medipost Holdings" },
  { id: "sports-phys", label: "Sports Physician", subtitle: "M Phil in Sports Medicine" },
  { id: "bafana-doc", label: "Bafana Bafana Doctor", subtitle: "Team Doctor (1992 - 2000)" },
  { id: "media-host", label: "Radio & TV Host", subtitle: "Lesedi & Ukhozi FM" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "Healthcare Leadership & Market Access Strategy",
    copy: "Managing pharmaceutical economics, market access channels, and executive stewardship of major healthcare delivery chains."
  },
  {
    id: "theme-2",
    number: "02",
    title: "Sports Medicine & High Performance Management",
    copy: "Applying physical conditioning, injury prevention, and medical support models from national sports squads to corporate health."
  },
  {
    id: "theme-3",
    number: "03",
    title: "Corporate Wellness & Psycho-economic Health",
    copy: "Designing workplace wellness interventions, stress mitigation frameworks, and health-focused operational environments."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr Victor Ramathesele started media work in 1988 when he was persuaded by Mr. Koos Radebe to host a weekly medical show at Radio Metro. Ever since, he has hosted healthcare talk-shows on Lesedi FM and Ukhozi FM. Dr Ramathesele graduated with MB ChB from the University of Natal in 1985. He later obtained M Phil in Sports Medicine from the University of Cape Town in 1998 and completed the Management Advancement Programme (MAP) at the Wits Business School in 2002. Victor worked in the Soweto clinics in the late eighties before setting up general practice in Katlehong and later Tembisa until 2000, when he joined the private sector.",
  "In between these engagements he was the team doctor of South African premier league soccer side Jomo Cosmos and subsequently served in the same capacity for Bafana Bafana (the South African national soccer team) from 1992 to 2000. He joined Human Dynamics, a corporate wellness company, as a medical consultant in 2000 which paved the way for tenure as Pharmaco-economics Manager at Novartis Pharma in 2002 and was later appointed as Market Access Manager."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "medipost", name: "MEDIPOST HOLDINGS" },
  { id: "novartis", name: "NOVARTIS PHARMA" },
  { id: "bafana", name: "BAFANA BAFANA" }
];

const customMedia = [
  {
    id: "victor-media-1",
    headline: "Fatherhood | Men's Conference | Dr. Victor Ramathesele",
    publication: "YouTube",
    date: "",
    url: "https://www.youtube.com/watch?v=OE6pEXCujgw",
    action: "Watch Video",
    image: "/speakers/Victor%20Ramathesele/dr-victor-ramathesele-the-speakers-firm-6.jpg"
  },
  {
    id: "victor-media-2",
    headline: "Dr Victor Ramathesele appointed Chief Executive Officer of Medipost Holdings",
    publication: "Medipost",
    date: "October 2023",
    url: "https://medipost.co.za/dr-victor-ramathesele-appointed-chief-executive-officer-of-medipost-holdings/",
    action: "Read Press Release",
    image: "/speakers/Victor%20Ramathesele/dr-victor-ramathesele-the-speakers-firm-4.jpg"
  },
  {
    id: "victor-media-3",
    headline: "TV REVIEW: The good doctor, Dr Victor Ramathesele, gives viewers medical advice",
    publication: "News24 / Drum",
    date: "",
    url: "https://www.news24.com/drum/celebs/tv-review-the-good-doctor-dr-victor-ramathesele-gives-viewers-medical-advice-20180606",
    action: "Read Review",
    image: "/speakers/Victor%20Ramathesele/dr-victor-ramathesele-the-speakers-firm-3.jpg"
  }
];

const customGallery = [
  {
    id: "victor-gal-1",
    src: "/speakers/Victor%20Ramathesele/dr-victor-ramathesele-the-speakers-firm.jpg",
    alt: "Dr Victor Ramathesele Portrait",
    caption: "Dr Victor Ramathesele",
    className: ""
  },
  {
    id: "victor-gal-2",
    src: "/speakers/Victor%20Ramathesele/dr-victor-ramathesele-the-speakers-firm-8.jpg",
    alt: "Dr Victor Ramathesele Speaking",
    caption: "Sports Medicine Seminar",
    className: ""
  },
  {
    id: "victor-gal-3",
    src: "/speakers/Victor%20Ramathesele/dr-victor-ramathesele-the-speakers-firm-10.jpg",
    alt: "Dr Victor Ramathesele Presentation",
    caption: "Healthcare Leadership Keynote",
    className: ""
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Victor Ramathesele"
      speakerTitle="Dr."
      speakerDesignation="Medical Doctor, Sports Physician & CEO"
      speakerRole="CEO of Medipost Holdings & Healthcare Commentator"
      speakerRef="TSF-VR-15"
      heroBackgroundImage="/speakers/Victor%20Ramathesele/dr-victor-ramathesele-the-speakers-firm-11.jpg"
      biographyImage="/speakers/Victor%20Ramathesele/dr-victor-ramathesele-the-speakers-firm-3.jpg"
      bioHook="“Stewardship in healthcare is about ensuring market access and digital delivery while preserving human-centered medical care.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="victor-ramathesele" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="victor-ramathesele" 
        customGallery={customGallery} 
        customVideos={[
          {
            id: "victor-video-1",
            label: "Dr Victor Ramathesele Keynote",
            youtubeId: "HemT18W4UN8"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
