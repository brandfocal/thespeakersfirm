import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "ceo-khetha", label: "Founder & CEO", subtitle: "Khetha Media" },
  { id: "reputation-exp", label: "Strategist", subtitle: "Reputation Management & PR" },
  { id: "crisis-mgmt", label: "Specialist", subtitle: "Crisis Communication" },
  { id: "keynote-spk", label: "Keynote Speaker", subtitle: "Brand & Corporate Governance" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "Brand Reputation & Crisis Management Architecture",
    copy: "Building resilient crisis communication strategies, preserving corporate goodwill, and mitigating reputation fallout in high-stakes environments."
  },
  {
    id: "theme-2",
    number: "02",
    title: "Strategic Communications & Executive PR Leadership",
    copy: "Crafting impactful stakeholder narratives, brand positioning models, and authentic executive thought leadership."
  },
  {
    id: "theme-3",
    number: "03",
    title: "Ethical Corporate Governance & Stakeholder Engagement",
    copy: "Aligning corporate brand posture with governance standards, public transparency, and multi-stakeholder trust."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Lorato Tshenkeng is a reputation management and crisis communication specialist with a keen interest in how technology disrupts life, work, and play. In 2009, he was recognised as a leading communication strategist by Mail & Guardian’s Top 200 Young South Africans.",
  "He is also a media contributor and freelance columnist who writes for publications, including the Sunday Times and City Press, South Africa’s two leading and agenda-setting weekly newspapers.",
  "Lorato works with executives and senior managers in the public and private, and civil society sectors in roles ranging from communication and thought leadership strategy development, media training and coaching to change management."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "khetha-media", name: "KHETHA MEDIA" },
  { id: "prisa", name: "PRISA" },
  { id: "corporate-sa", name: "CORPORATE SA" }
];

const customMedia = [
  {
    id: "lorato-media-1",
    headline: "Lorato Tshenkeng on Brand Reputation & Crisis Communications Strategy",
    publication: "The Speakers Firm",
    date: "",
    url: "https://thespeakersfirm.co.za/media-brand-reputation/lorato-tshenkeng-2/",
    action: "View Profile",
    image: "/speakers/Lorato%20Tshenkeng/Lorato-Tshenkeng-The-Speakers-Firm-2.jpg"
  }
];

const customGallery = [
  {
    id: "lorato-gal-1",
    src: "/speakers/Lorato%20Tshenkeng/Lorato-Tshenkeng-The-Speakers-Firm-2.jpg",
    alt: "Lorato Tshenkeng Executive Portrait",
    caption: "Lorato Tshenkeng",
    className: ""
  },
  {
    id: "lorato-gal-2",
    src: "/speakers/Lorato%20Tshenkeng/Lorato-Tshenkeng-The-Speakers-Firm-3.jpg",
    alt: "Lorato Tshenkeng Presentation",
    caption: "Strategic Communications Briefing",
    className: ""
  },
  {
    id: "lorato-gal-3",
    src: "/speakers/Lorato%20Tshenkeng/Lorato-Tshenkeng-The-Speakers-Firm-4.jpg",
    alt: "Lorato Tshenkeng Speaking",
    caption: "Reputation Management Keynote",
    className: ""
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Lorato Tshenkeng"
      speakerTitle=""
      speakerDesignation="Brand Reputation Strategist & CEO of Khetha Media"
      speakerRole="Communications Consultant, PR Expert & Strategic Advisor."
      speakerRef="TSF-LT-36"
      heroBackgroundImage="/speakers/Lorato%20Tshenkeng/Lorato-Tshenkeng-The-Speakers-Firm.jpg"
      biographyImage="/speakers/Lorato%20Tshenkeng/Lorato-Tshenkeng-The-Speakers-Firm-5.jpg"
      bioHook="“A strong reputation takes years to build, but only strategic communication and ethical governance can defend it.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="lorato-tshenkeng" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="lorato-tshenkeng" 
        customGallery={customGallery} 
        customVideos={[
          {
            id: "lorato-video-1",
            label: "Experience Reel",
            youtubeId: "Zpw0gfDz_3g"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
