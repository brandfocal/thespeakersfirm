"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "bridget-broadcaster",
    label: "Veteran Broadcaster",
    subtitle: "Over two decades of experience hosting prime-time shows on Kaya FM, Metro FM, and various television platforms."
  },
  {
    id: "bridget-mc",
    label: "Elite Host & MC",
    subtitle: "Sought-after host for premium events, national awards ceremonies, and corporate launches."
  },
  {
    id: "bridget-culture",
    label: "Cultural Curator",
    subtitle: "Producer and commentator championing African art, lifestyle, and design on global stages."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "art-and-media",
    number: "Theme 01",
    title: "The Intersection of Art, Media & Commerce.",
    copy: "Leveraging cultural storytelling to build brands, connect audiences, and unlock economic value in the creative sector."
  },
  {
    id: "women-empowerment",
    number: "Theme 02",
    title: "Women in Media & Executive Spaces.",
    copy: "Navigating corporate media landscapes, fostering diverse talent, and architecting sustainable paths for female creatives."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Bridget Masinga is one of South Africa’s most recognizable and respected media personalities, veterans of television and radio broadcasting, and cultural entrepreneurs. With a career spanning over 20 years, she has hosted major national broadcasts, high-profile corporate galas, and key cultural events.",
  "Highly regarded for her elegance, versatility, and strategic command of live stages, Bridget is an exceptional master of ceremonies and panel facilitator. She has led discussions featuring prominent leaders in business, governance, and the arts, ensuring dynamic, highly engaging event execution.",
  "Beyond her on-screen and on-air presence, Bridget is a passionate advocate for the development of Africa’s creative economy. She frequently speaks on the value of cultural heritage, brand building, and building supportive ecosystems for creative talent and female leaders.",
  "Book Bridget Masinga through The Speakers Firm, A Leading African Speakers Bureau, to bring premium event facilitation, brand launches, and inspirational keynote moderation to your next summit."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "kaya", name: "Kaya FM" },
  { id: "metro", name: "Metro FM" },
  { id: "dstv", name: "DStv Africa" }
];

export const AboutTeamSection = () => {
  const customMedia: any[] = [];

  const customVideos = [
    {
      id: "bridget-vid-1",
      label: "Bridget Masinga Interview on Media and Culture",
      youtubeId: "lT4ihmin7mw"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Bridget Masinga"
      speakerTitle=""
      speakerDesignation="Master of Ceremonies, Facilitator & Broadcaster"
      speakerRole="Broadcaster & Premium Event Host"
      speakerRef="TSF-BM-44"
      heroBackgroundImage="/speakers/Bridget Masinga/Bridget-Masinga-The-Speakers-Firm3.jpg"
      biographyImage="/speakers/Bridget Masinga/Bridget-Masinga-The-Speakers-Firm9.jpg"
      bioHook="“Live stages are spaces to build connections, elevate stories, and challenge audiences to think, feel, and act differently.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="bridget-masinga" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="bridget-masinga" 
        customIntroText="Sophisticated event hosting, panel moderation, and creative industry keynotes led by Bridget Masinga."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
