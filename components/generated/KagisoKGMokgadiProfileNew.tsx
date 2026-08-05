"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "comics-choice",
    label: "Comics Choice Award Winner",
    subtitle: "Recipient of the prestigious Comic's Choice Award for outstanding stand-up comedy."
  },
  {
    id: "international-act",
    label: "International Comedy Performer",
    subtitle: "Featured at the Jive Funny Festival in both Cape Town and London."
  },
  {
    id: "trusted-opener",
    label: "Trusted Opening Act",
    subtitle: "Handpicked to open for global comedy giants like Jim Jefferies."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "minimalist-delivery",
    number: "Theme 01",
    title: "Minimalist Delivery, Big Impact.",
    copy: "Engaging corporate audiences with highly relatable, clean, and understated comedic timing that fits any boardroom."
  },
  {
    id: "classic-storytelling",
    number: "Theme 02",
    title: "Classic Storytelling.",
    copy: "Drawing inspiration from old-school comedy giants to deliver timeless, narrative-driven corporate entertainment."
  },
  {
    id: "program-orchestration",
    number: "Theme 03",
    title: "Program Orchestration.",
    copy: "Providing professional event emceeing and master-of-ceremonies services tailored for business summits."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Kagiso KG Mokgadi or just KG as he is affectionately known is the quintessential comedy heavyweight.",
  "Influenced by old-school comedy greats and touted by his colleagues as an up and coming great, this Comics Choice Award winning stand up comedian will have you laughing from deep within your belly. He made his big stage performance at the Joburg Arts Alive Festival in the Comedy Nine-Nine showcase in 2012 and earned rave reviews from the audience members and organizers alike. Since then, he has become one of the most recognisable up and coming comics in South Africa. His easily relatable material, a minimalist delivery style and great comedic timing has made Kagiso KG Mokgadi a regular and headliner at club, theatre, music festivals and corporate comedy stages around the country.",
  "Some of his performances include The Jive Funny Festival Cape Town and London, Keeping You In Stitches with Riaad Moosa, The Marc Lottering Roadshow, Blacks Only Comedy Show and many more. Comedy greats David Kau, Nik Rabinowitz and Australian comedian Jim Jefferies have entrusted him to be the opening act for their one man shows. He has become one of the top acts in South Africa and even though he’s a big guy already, he will be huge one day."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "arts-alive", name: "ARTS ALIVE FESTIVAL" },
  { id: "baxter-theatre", name: "BAXTER THEATRE" },
  { id: "comics-choice", name: "COMICS CHOICE" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "kg-art-1",
      headline: "From IT to Laughter: Kagiso KG Mokgadi’s comedy journey",
      publication: "Southern Suburbs Tatler",
      date: "2025",
      action: "Read Article",
      url: "https://southernsuburbstatler.co.za/news/2025-05-30-from-it-to-laughter-kagiso-kg-mokgadis-comedy-journey/",
      image: "/speakers/Kagiso KG Mokgadi/Kagiso-KG-Mokgadi-The-Speakers-Firm-2.jpg"
    },
    {
      id: "kg-art-2",
      headline: "KG Mokgadi: The intentional hard-working chiller reflects on his career ahead of the Comic’s Choice Awards",
      publication: "The Citizen",
      date: "2024",
      action: "Read Article",
      url: "https://www.citizen.co.za/entertainment/kg-mokgadi-the-intentional-hard-working-chiller-reflects-on-his-career-ahead-of-the-comics-choice-awards/",
      image: "/speakers/Kagiso KG Mokgadi/Kagiso-KG-Mokgadi-The-Speakers-Firm-3.jpg"
    },
    {
      id: "kg-art-3",
      headline: "Hilarious KG to make his mark at Joburg comedy festival",
      publication: "IOL",
      date: "2019",
      action: "Read Article",
      url: "https://iol.co.za/the-star/news/2019-02-27-hilarious-kg-to-make-his-mark-at-joburg-comedy-festival/",
      image: "/speakers/Kagiso KG Mokgadi/Kagiso-KG-Mokgadi-The-Speakers-Firm-4.jpg"
    }
  ];

  const customGallery = [
    {
      id: "kg-gal-1",
      src: "/speakers/Kagiso KG Mokgadi/Kagiso-KG-Mokgadi-The-Speakers-Firm-5.jpg",
      alt: "KG Mokgadi profile",
      caption: "KG Mokgadi during a stage appearance.",
      className: "sm:col-span-2 lg:col-span-2"
    },
    {
      id: "kg-gal-2",
      src: "/speakers/Kagiso KG Mokgadi/Kagiso-KG-Mokgadi-The-Speakers-Firm-6.jpg",
      alt: "KG Mokgadi portrait",
      caption: "Studio photoshoot for promotional campaigns.",
      className: ""
    },
    {
      id: "kg-gal-3",
      src: "/speakers/Kagiso KG Mokgadi/Kagiso-KG-Mokgadi-The-Speakers-Firm.jpg",
      alt: "KG Mokgadi promo",
      caption: "Promotional card for corporate workshops.",
      className: ""
    }
  ];

  const customVideos = [
    {
      id: "kg-vid-1",
      label: "KG Mokgadi Standup",
      youtubeId: "t8OSpcpJkHY"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Kagiso “KG” Mokgadi"
      speakerTitle="Kagiso “KG”"
      speakerDesignation="Award-Winning Stand-Up Comedian & Master of Ceremonies"
      speakerRole="Comics Choice Award-winning comedy heavyweight and corporate emcee."
      speakerRef="TSF-KM-26"
      heroBackgroundImage="/speakers/Kagiso KG Mokgadi/99d40624c4cf0d26cb810fe7376ff357_heavy-695.jpg"
      biographyImage="/speakers/Kagiso KG Mokgadi/Kagiso-KG-Mokgadi.jpg"
      bioHook="“Relatable material and minimalist delivery allow an audience to connect with the storytelling naturally.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="kagiso-kg-mokgadi" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="kagiso-kg-mokgadi" 
        customGallery={customGallery} 
        customIntroText="Dynamic stand-up comedy, bespoke corporate emceeing, and panel moderation services with Kagiso KG Mokgadi."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
