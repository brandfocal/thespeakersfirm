"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "sid-author",
    label: "Acclaimed Author",
    subtitle: "Author of 'The Clear Win: Pitching for New Business', the definitive guide on corporate pitching."
  },
  {
    id: "sid-pitch",
    label: "Pitching Consultant",
    subtitle: "Highly trusted consultant helping agencies and corporates design winning proposals and client presentations."
  },
  {
    id: "sid-facilitator",
    label: "Peak Performance Coach",
    subtitle: "Facilitator focusing on strategic communication, business strategy, and presenting with confidence."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "pitching-excellence",
    number: "Theme 01",
    title: "Pitching & Presentation Strategy.",
    copy: "Mastering client presentations, proposal construction, and persuasive pitching to secure new business."
  },
  {
    id: "digital-disruption",
    number: "Theme 02",
    title: "Navigating Tech & Market Disruption.",
    copy: "Unpacking digital identity, technological shifts, and strategic foresight to adapt business models for exponential growth."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Sid Peimer is a highly regarded business strategy consultant, pitch coach, author, and speaker specializing in strategic communication and corporate growth. With decades of experience advising corporate teams and advertising agencies, he helps organizations construct persuasive pitches and win high-value accounts.",
  "As the author of 'The Clear Win: Pitching for New Business', Sid translates complex marketing and communication theories into actionable, step-by-step frameworks that corporate leaders and sales teams can execute under pressure.",
  "Sid is also a commentator on digital identity, technology trends, and market disruption, guiding boards on strategic adaptation in the modern digital economy.",
  "Book Sid Peimer through The Speakers Firm, A Leading African Speakers Bureau, to deliver high-impact workshops, keynotes, and masterclasses on pitching excellence and strategic presentation."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "clear-win", name: "The Clear Win" },
  { id: "agency-advisor", name: "Corporate Sales Coach" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "sid-art-1",
      headline: "Sid Peimer on the core psychology of winning corporate pitches",
      publication: "Business Strategy & Growth Review",
      date: "2024",
      action: "Read Feature",
      url: "https://www.chaifm.com/podcast/2025-05-20-guest-sid-peimer-executive-director-of-the-cape-town-chamber-of-commerce-and-industry/",
      image: "/speakers/Sid Peimer/Sid-Peimer-The-Speakers-Firm2.jpg"
    },
    {
      id: "sid-art-2",
      headline: "How strategic foresight protects businesses against sudden market disruption",
      publication: "Digital Economy Quarterly",
      date: "2024",
      action: "Read Article",
      url: "https://www.leader.co.za/article.aspx?s=209&a=9781&title=AI",
      image: "/speakers/Sid Peimer/Sid-Peimer-The-Speakers-Firm3.jpg"
    },
    {
      id: "sid-art-3",
      headline: "Sid Peimer: Helping agencies secure the multi-million dollar contracts",
      publication: "Agency Leaders Review",
      date: "2023",
      action: "Read Spotlight",
      url: "https://www.leader.co.za/event.aspx?s=3&f=1&ei=286",
      image: "/speakers/Sid Peimer/Sid-Peimer-The-Speakers-Firm5.jpg"
    }
  ];

  const customVideos = [
    {
      id: "sid-vid-1",
      label: "Sid Peimer on Pitching and Persuasive Communication",
      youtubeId: "DAPnPtuRhMk"
    }
  ];

  const customBooks = [
    {
      id: "the-clear-win",
      title: "The Clear Win: Pitching for New Business",
      description: "A comprehensive guide packing practical wisdom, templates, and strategies to help business professionals structure, design, and deliver winning pitches.",
      coverImage: "/speakers/Sid Peimer/The-Clear-Win-Sid-Peimer.jpg",
      url: "https://www.amazon.com.au/Clear-Win-Pitching-New-Business-ebook/dp/B0036DEBMQ?ref_=ast_author_mpb"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Sid Peimer"
      speakerTitle=""
      speakerDesignation="Business Pitch Consultant, Strategist & Bestselling Author"
      speakerRole="Strategic Presentation & Communication Specialist"
      speakerRef="TSF-SP-22"
      heroBackgroundImage="/speakers/Sid Peimer/Sid-Peimer-The-Speakers-Firm4.jpg"
      biographyImage="/speakers/Sid Peimer/Sid-Peimer-The-Speakers-Firm.jpg"
      bioHook="“Winning new business is not about luck; it is about absolute clarity of value, rigorous alignment with the client's needs, and structured delivery.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={customBooks}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="sid-peimer" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="sid-peimer" 
        customIntroText="Pitching masterclasses, strategic communication design, and sales team alignment workshops led by Sid Peimer."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
