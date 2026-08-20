"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "phemelo-broadcaster",
    label: "Radio & TV Presenter",
    subtitle: "Highly popular host on SAFM, Metro FM, and major television talk shows and dramas."
  },
  {
    id: "phemelo-mc",
    label: "Master of Ceremonies",
    subtitle: "Sought-after corporate host bringing warmth, structure, and high engagement to live events."
  },
  {
    id: "phemelo-coach",
    label: "Performance Coach",
    subtitle: "Facilitator focusing on voice projection, media confidence, and presentation skills."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "media-dialogue",
    number: "Theme 01",
    title: "Media Strategy & Live Dialogue.",
    copy: "Leveraging broadcast dynamics, audience connection, and interview structures to host high-impact panel discussions."
  },
  {
    id: "women-empowerment",
    number: "Theme 02",
    title: "Women Empowerment & Wellness.",
    copy: "Addressing work-life balance, positive mental health, and leadership resilience for professional women."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Phemelo Motene is a widely recognized South African broadcaster, actress, Master of Ceremonies, and communication specialist. With over two decades in the media industry, she has hosted major radio programs on Metro FM and SAFM, and starred in celebrated television dramas.",
  "Phemelo's natural warmth, quick intellect, and ability to connect with audiences make her a highly sought-after host and panel facilitator for corporate retreats, brand activations, and national conferences.",
  "In addition to her media work, Phemelo offers media training and executive voice coaching, helping corporate professionals develop powerful presentation and communication skills.",
  "Book Phemelo Motene through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to bring the professional charisma, warmth, and structure of a media icon to your next event."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "safm", name: "SAFM" },
  { id: "metro-fm", name: "Metro FM" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "phemelo-art-1",
      headline: "Phemelo Motene on facilitating national dialogues around women's health and wellness",
      publication: "Corporate Wellness Magazine",
      date: "2024",
      action: "Read Feature",
      url: "https://thespeakersfirm.co.za/phemelo-motene/",
      image: "/speakers/Phemelo Motene/Phemelo-Motene-The-Speakers-Firm-5.jpg"
    },
    {
      id: "phemelo-art-2",
      headline: "The role of active listening in broadcasting and panel moderation",
      publication: "Broadcasting Today",
      date: "2024",
      action: "Read Article",
      url: "https://thespeakersfirm.co.za/phemelo-motene/",
      image: "/speakers/Phemelo Motene/Phemelo-Motene-The-Speakers-Firm-6.jpg"
    },
    {
      id: "phemelo-art-3",
      headline: "Phemelo Motene: Balancing acting, radio, and corporate coaching",
      publication: "Media & Arts Weekly",
      date: "2023",
      action: "Read Spotlight",
      url: "https://thespeakersfirm.co.za/phemelo-motene/",
      image: "/speakers/Phemelo Motene/Phemelo-Motene.jpg"
    }
  ];

  const customVideos = [
    {
      id: "phemelo-vid-1",
      label: "Phemelo Motene Media Address and Presentation",
      youtubeId: "4dBygPZkY2s"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Phemelo Motene"
      speakerTitle=""
      speakerDesignation="Broadcaster, Actress, Master of Ceremonies & Communication Specialist"
      speakerRole="Premium Radio Host & Executive Coach"
      speakerRef="TSF-PM-33"
      heroBackgroundImage="/speakers/Phemelo Motene/Phemelo-Motene-The-Speakers-Firm-4.jpg"
      biographyImage="/speakers/Phemelo Motene/Phemelo-Motene-The-Speakers-Firm.jpg"
      bioHook="“Connecting with an audience requires authenticity. An MC must listen as much as they speak, bridging the gap between content and the room.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="phemelo-motene" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="phemelo-motene" 
        customIntroText="Corporate events moderation, voice presentation coaching, and female leadership workshops led by Phemelo Motene."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
