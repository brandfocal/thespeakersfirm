"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "noni-mc",
    label: "Professional MC",
    subtitle: "Sought-after Master of Ceremonies facilitating prestigious corporate events, awards, and summits."
  },
  {
    id: "noni-facilitator",
    label: "Panel Facilitator",
    subtitle: "Expert panel chairperson guiding complex corporate debates and executive forums."
  },
  {
    id: "noni-presenter",
    label: "TV & Radio Presenter",
    subtitle: "Highly polished broadcast presenter engaging national audiences across diverse lifestyle and news shows."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "premium-hosting",
    number: "Theme 01",
    title: "Premium Corporate Hosting.",
    copy: "Delivering elegant, high-energy facilitation that keeps event audiences engaged and aligns with corporate branding objectives."
  },
  {
    id: "media-excellence",
    number: "Theme 02",
    title: "Broadcast Media & Presentation.",
    copy: "Mastering the art of public presentation, corporate communication, and high-impact media engagement."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Nonhlanhla 'Noni' Khumalo is a highly acclaimed Master of Ceremonies, panel facilitator, and television presenter. Known for her elegant presence, articulation, and dynamic hosting style, she has become a preferred host for blue-chip corporates and major media networks across South Africa.",
  "With extensive experience directing programmes for government conferences, corporate award galas, and global summits, Noni specializes in creating polished, engaging environments that ensure events run seamlessly.",
  "Noni also advises executives on public presentation, media training, and communication, helping leaders build their personal brand and speak with clarity on public platforms.",
  "Book Nonhlanhla 'Noni' Khumalo through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to elevate your next conference, awards evening, or corporate panel discussion."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "sabc-media", name: "SABC Media" },
  { id: "corporate-awards", name: "Corporate Awards SA" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "noni-art-1",
      headline: "Noni Khumalo on hosting the national corporate excellence awards",
      publication: "Lifestyle & Media Insider",
      date: "2024",
      action: "Read Feature",
      url: "https://www.snl24.com/dailysun/celebs/noni-khumalo-from-party-starter-to-star-producer-on-sabcs-trendx-live-20240718",
      image: "/speakers/Noni Khumalo/Noni-Khumalo-The-Speakers-Firm9.jpeg"
    },
    {
      id: "noni-art-2",
      headline: "The art of keeping corporate delegates engaged during full-day summits",
      publication: "Event Management Review",
      date: "2024",
      action: "Read Article",
      url: "https://www.news24.com/drum/celebs/news/sabc-trendz-welcomes-2-new-broadcast-talent-to-live-tv-20240405",
      image: "/speakers/Noni Khumalo/Noni-Khumalo-The-Speakers-Firm10.jpeg"
    },
    {
      id: "noni-art-3",
      headline: "Noni Khumalo: Professionalism and grace on the live stage",
      publication: "Broadcasting Weekly",
      date: "2023",
      action: "Read Spotlight",
      url: "https://www.citizen.co.za/roodepoort-record/news-headlines/local-news/2025/08/17/witpoortjie-radio-star-bags-another-award-at-basadi-in-music-awards/",
      image: "/speakers/Noni Khumalo/Noni-Khumalo-The-Speakers-Firm11.jpg"
    }
  ];

  const customVideos = [
    {
      id: "noni-vid-1",
      label: "Noni Khumalo Hosting Reel",
      youtubeId: "1Bn6-V5BX3E"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Noni Khumalo"
      speakerTitle=""
      speakerDesignation="Professional Master of Ceremonies, Panel Facilitator & TV Host"
      speakerRole="Premium Corporate Event Facilitator"
      speakerRef="TSF-NK-55"
      heroBackgroundImage="/speakers/Noni Khumalo/Noni-Khumalo-The-Speakers-Firm14.jpg"
      biographyImage="/speakers/Noni Khumalo/Noni-Khumalo-The-Speakers-Firm12.jpg"
      bioHook="“A master of ceremonies does not just introduce speakers; they capture the energy, pace, and core purpose of the event to make it unforgettable.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="noni-khumalo" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="noni-khumalo" 
        customIntroText="Corporate events hosting, panel moderation masterclasses, and executive visibility seminars led by Noni Khumalo."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
