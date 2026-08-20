"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "sibusiso-mc",
    label: "Professional MC",
    subtitle: "Renowned Master of Ceremonies hosting high-profile corporate awards, galas, and summits."
  },
  {
    id: "sibusiso-keynote",
    label: "Keynote Speaker",
    subtitle: "Speaker delivering powerful motivational frameworks focused on accountability and mindset shift."
  },
  {
    id: "sibusiso-entrepreneur",
    label: "Serial Entrepreneur",
    subtitle: "Founder of multiple business ventures, translating entrepreneurial realities into peak performance models."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "mindset-shift",
    number: "Theme 01",
    title: "Perspective Shifts & Accountability.",
    copy: "Challenging conventional corporate thinking to build self-reliant, highly accountable, and resilient teams."
  },
  {
    id: "event-facilitation",
    number: "Theme 02",
    title: "High-Engagement Corporate Hosting.",
    copy: "Structuring events with high energy, polished articulation, and professional facilitation to align with branding goals."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Sibusiso Molimi is a highly celebrated South African Master of Ceremonies, keynote speaker, entrepreneur, and 'perspective-shifter'. Known for his infectious energy, charismatic stage presence, and ability to connect with audiences, Sibusiso has become a preferred host for corporate giants and national associations.",
  "With an extensive background in business management and entrepreneurship, Sibusiso delivers keynotes that inspire corporate teams to take accountability, adapt to change, and execute with focus.",
  "He specializes in facilitating high-level board panels, corporate retreat debates, and annual gala awards, ensuring smooth, professional, and memorable event execution.",
  "Book Sibusiso Molimi through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to bring the professional energy, composure, and inspiring perspective of a master host to your next event."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "corporate-hosts", name: "Corporate Hosts Association" },
  { id: "business-growth", name: "SA Business Chamber" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "sibusiso-art-1",
      headline: "Sibusiso Molimi on hosting the national business innovation summit",
      publication: "Corporate Event Executive",
      date: "2024",
      action: "Read Feature",
      url: "https://thespeakersfirm.co.za/mc-and-facilitators/sibusiso-molimi/",
      image: "/speakers/Sibusiso Molimi/Sibusiso-Molimi-The-Speakers-Firm.jpg"
    },
    {
      id: "sibusiso-art-2",
      headline: "How active team accountability drives corporate strategy execution",
      publication: "Strategic Management Monthly",
      date: "2024",
      action: "Read Article",
      url: "https://thespeakersfirm.co.za/mc-and-facilitators/sibusiso-molimi/",
      image: "/speakers/Sibusiso Molimi/Sibusiso-Molimi-The-Speakers-Firm4.jpg"
    },
    {
      id: "sibusiso-art-3",
      headline: "Sibusiso Molimi: Shifting mindsets in the contemporary workspace",
      publication: "Mindset & Leadership Journal",
      date: "2023",
      action: "Read Spotlight",
      url: "https://thespeakersfirm.co.za/mc-and-facilitators/sibusiso-molimi/",
      image: "/speakers/Sibusiso Molimi/Sibusiso-Molimi-The-Speakers-Firm8.jpg"
    }
  ];

  const customVideos = [
    {
      id: "sibusiso-vid-1",
      label: "Sibusiso Molimi Keynote and MC Showcase",
      youtubeId: "h43uxQLVe1o"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Sibusiso Molimi"
      speakerTitle=""
      speakerDesignation="Master of Ceremonies, Keynote Speaker, Entrepreneur & Perspective-Shifter"
      speakerRole="Premium Corporate Event Facilitator & Motivator"
      speakerRef="TSF-SM-19"
      heroBackgroundImage="/speakers/Sibusiso Molimi/Sibusiso-Molimi-The-Speakers-Firm6.jpg"
      biographyImage="/speakers/Sibusiso Molimi/Sibusiso-Molimi-The-Speakers-Firm7.jpg"
      bioHook="“Composure on a live stage is about holding the room, driving the content, and ensuring the audience leaves with a recalibrated perspective.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="sibusiso-molimi" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="sibusiso-molimi" 
        customIntroText="Corporate event hosting, team accountability workshops, and motivational keynotes led by Sibusiso Molimi."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
