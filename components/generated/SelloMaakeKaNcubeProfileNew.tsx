"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "sm-theatre",
    label: "Royal Shakespeare Alumnus",
    subtitle: "Performed in London's West End and with the prestigious Royal Shakespeare Company."
  },
  {
    id: "sm-icon",
    label: "Global Cultural Ambassador",
    subtitle: "Enduring voice of African theatrical and cinematic excellence across three continents."
  },
  {
    id: "sm-advocate",
    label: "Social Restitution Pioneer",
    subtitle: "Advocates for creative economy policies and male wellness dialogues in the media."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "creative-storytelling",
    number: "Theme 01",
    title: "Storytelling as Strategy.",
    copy: "Utilizing narrative structures to align team cultures, build corporate legacies, and shift mindsets."
  },
  {
    id: "cultural-economy",
    number: "Theme 02",
    title: "Creative Economy & Leadership.",
    copy: "Positioning African arts as powerful drivers of national identity, social justice, and fiscal growth."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Sello Maake Ka-Ncube is one of South Africa’s most celebrated actors, directors, and creative industry leaders, a global cultural icon whose artistry has elevated African storytelling across stage, film, and television. With a career spanning decades across South Africa, the United States, and Britain, Sello has performed with the Royal Shakespeare Company, appeared on London’s West End, and headlined world-renowned productions including Othello, The Suit, Raisin in the Sun, Guess Who’s Coming to Dinner, and The Lion King.",
  "His craft has redefined African excellence in global theatre and earned him recognition as one of the continent’s most influential and enduring creative voices. Beyond performance, Sello is a passionate advocate for creative leadership, men’s empowerment, and social transformation.",
  "As a cultural ambassador and mentor, Sello champions the arts as instruments of national identity, social justice, and economic growth. His talks inspire leaders, policymakers, and creatives alike to see storytelling as strategy, a powerful force that builds nations, strengthens identity, and transforms mindsets. A master storyteller on and off the stage, Sello Maake Ka-Ncube uses his platform to promote values of authenticity, responsibility, and purpose, inviting men to embrace creativity as a catalyst for healing and leadership.",
  "Book Sello Maake Ka-Ncube through The Speakers Firm, A Leading African Speakers Bureau, to bring inspirational keynote addresses, creative leadership masterclasses, and masculinity dialogues to your next corporate or community event."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "royalshakespeare", name: "ROYAL SHAKESPEARE COMPANY" },
  { id: "westend", name: "LONDON WEST END" },
  { id: "bet", name: "BET AFRICA" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "ncube-art-1",
      headline: "Sello Maake kaNcube reflects on fatherhood and ambition in BET Africa’s ‘Black Gold’",
      publication: "IOL Entertainment / TV",
      date: "2025",
      action: "Read Article",
      url: "https://iol.co.za/entertainment/tv/2025-07-31-sello-maake-kancube-reflects-on-fatherhood-and-ambition-in-bet-africas-black-gold/",
      image: "/speakers/Sello Maake Ka-Ncube/Sello-Maake-Ka-Ncube-The-Speakers-Firm-2.jpg"
    },
    {
      id: "ncube-art-2",
      headline: "Sello Maake kaNcube returns to Can Themba’s iconic ‘The Suit’ in thrilling new production",
      publication: "IOL The Star",
      date: "2024",
      action: "Read Report",
      url: "https://iol.co.za/the-star/news/2024-10-17-sello-maake-kancube-returns-to-can-thembas-iconic-the-suit-in-thrilling-new-production/",
      image: "/speakers/Sello Maake Ka-Ncube/Sello-Maake-Ka-Ncube-The-Speakers-Firm-3.jpg"
    },
    {
      id: "ncube-art-3",
      headline: "Sello Maake Ka-Ncube is looking for a new role but has one condition",
      publication: "IOL Celebrity News",
      date: "2023",
      action: "Read Column",
      url: "https://iol.co.za/entertainment/celebrity-news/local/2023-01-04-sello-maake-ka-ncube-is-looking-for-a-new-role-but-has-one-condition/",
      image: "/speakers/Sello Maake Ka-Ncube/Sello-Maake-Ka-Ncube-The-Speakers-Firm-5.jpg"
    }
  ];

  const customVideos = [
    {
      id: "ncube-vid-1",
      label: "Sello Maake Ka-Ncube on Creative Arts & Cultural Legacy",
      youtubeId: "jcZtOxXPNQY"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Sello Maake Ka-Ncube"
      speakerTitle=""
      speakerDesignation="Actor, Director & Cultural Ambassador"
      speakerRole="Global Cultural Icon & Creative Industry Leader"
      speakerRef="TSF-SM-48"
      heroBackgroundImage="/speakers/Sello Maake Ka-Ncube/Sello-Maake-Ka-Ncube-The-Speakers-Firm-hero.jpg"
      biographyImage="/speakers/Sello Maake Ka-Ncube/Sello-Maake-Ka-Ncube-The-Speakers-Firm-bio.jpg"
      bioHook="“Storytelling is strategy: a powerful, creative tool that builds nations, strengthens identity, and deconstructs toxic mindsets.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="sello-maake-ka-ncube" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="sello-maake-ka-ncube" 
        customIntroText="Creative industry panel moderations, cultural economy keynotes, and men’s empowerment workshops led by Sello Maake Ka-Ncube."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
