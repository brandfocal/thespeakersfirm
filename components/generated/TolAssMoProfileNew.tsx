"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "comics-choice-nominee",
    label: "Best Newcomer Nominee",
    subtitle: "Nominated for Best Newcomer at the inaugural Comic’s Choice Awards."
  },
  {
    id: "reality-tv-star",
    label: "Reality TV Lead",
    subtitle: "Starred in the hit multi-season docu-reality show 'Mo Love' on Vuzu."
  },
  {
    id: "tv-show-host",
    label: "SA’s Got Talent Host",
    subtitle: "Main host of the national reality competition show 'SA’s Got Talent' (Season 7)."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "satirical-entertainment",
    number: "Theme 01",
    title: "Satirical Entertainment.",
    copy: "Leading television shows and live corporate comedy with high-energy satirical commentary and unique stage presence."
  },
  {
    id: "hospitality-cannabis",
    number: "Theme 02",
    title: "Gastronomy & Cannabis Culture.",
    copy: "Merging hospitality, food innovation, and modern cannabis culture at his Sandton restaurant, High Grounds Blvd."
  },
  {
    id: "brand-influence",
    number: "Theme 03",
    title: "Brand Influence & Advertising.",
    copy: "Acting as a powerful media spokesperson and brand face for national television networks and corporations."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Tol A$$ Mo is a South African comedian and television personality known for his appearances on numerous television series, including Mo Love on Vuzu.",
  "Mo was nominated in the “Best Newcomer” category at the first Comic’s Choice Awards in 2011 and in 2012 he starred in the nine-part docu-reality show Mo Love on DStv’s Vuzu channel, which documented his relationship with fashionista Mome Nale, including their impending wedding. The show returned in 2013 for a second season. He also appeared on the comedy show Laugh Out Loud on Mzansi Magic in a regular segment called Mo News, was featured on Walala Wasala (an SABC1 educational programme), had a segment on Late Nite News with Loyiso Gola (eNCA and e.tv) as Vuyo from the Future and was the face of Mzansi Magic Movies.",
  "In early 2016 he was a guest on the SABC2 sketch comedy series The Bantu Hour, returning for a later appearance as a musical guest. He was also one of the featured celebrities to be interviewed on the sixth season of Nicky Greenwall’s show The Close Up. In April 2016 he teamed up with Jason Goliath to battle against fellow comedians Celeste Ntuli and Nina Hastie on the third episode of the MTV reality series Lip Sync Battle Africa. In September 2016, Mo took over from Tats Nkonzo as the host of the e.tv reality competition series SA’s Got Talent, joining the show for its seventh season."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "vuzu", name: "VUZU TV" },
  { id: "etv", name: "E.TV" },
  { id: "mzansi-magic", name: "MZANSI MAGIC" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "mo-art-1",
      headline: "Tol Ass Mo Opens Unique Restaurant in Sandton, Blending Food and Cannabis Culture",
      publication: "OKMzansi",
      date: "2024",
      action: "Read Article",
      url: "https://okmzansi.co.za/tol-ass-mo-opens-unique-restaurant-in-sandton-blending-food-and-cannabis-culture/",
      image: "/speakers/Tol Ass Mo/Tol-As-Mo-The-Speakers-Firm-2.jpg"
    },
    {
      id: "mo-art-2",
      headline: "Bigger and Better: Tol Ass Mo and Mome Make A Comeback!",
      publication: "Mgosi",
      date: "2023",
      action: "Read Article",
      url: "https://mgosi.co.za/tol-ass-mo-and-mome-make-a-comeback/",
      image: "/speakers/Tol Ass Mo/Tol-As-Mo-The-Speakers-Firm-3.jpg"
    },
    {
      id: "mo-art-3",
      headline: "10 Things You Didn’t Know about Tol Ass Mo",
      publication: "Youth Village",
      date: "2020",
      action: "Read Article",
      url: "https://youthvillage.co.za/2015/01/things-didnt-know-tall-ass-mo/",
      image: "/speakers/Tol Ass Mo/Tol-As-Mo-The-Speakers-Firm-4.jpg"
    }
  ];

  const customGallery = [
    {
      id: "mo-gal-1",
      src: "/speakers/Tol Ass Mo/Tol-As-Mo-The-Speakers-Firm-5.jpg",
      alt: "Tol Ass Mo standup",
      caption: "Tol Ass Mo performing live on stage.",
      className: "sm:col-span-2 lg:col-span-2"
    },
    {
      id: "mo-gal-2",
      src: "/speakers/Tol Ass Mo/Tol-As-Mo-The-Speakers-Firm-7.jpg",
      alt: "Tol Ass Mo event emcee",
      caption: "Hosting a high-impact corporate celebration.",
      className: ""
    },
    {
      id: "mo-gal-3",
      src: "/speakers/Tol Ass Mo/Tol-As-Mo-The-Speakers-Firm-8.jpg",
      alt: "Tol Ass Mo portrait",
      caption: "Official promo headshot of Mongezi Mahlangu.",
      className: ""
    }
  ];

  const customVideos = [
    {
      id: "mo-vid-1",
      label: "Tol Ass Mo Standup Comedy",
      youtubeId: "YWlD-KbLwnQ"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Tol A$$ Mo"
      speakerTitle="Mongezi Mahlangu"
      speakerDesignation="Celebrated Stand-Up Comedian, TV Personality & Entrepreneur"
      speakerRole="Renowned television host, reality star, and comedic disruptor."
      speakerRef="TSF-TM-30"
      heroBackgroundImage="/speakers/Tol Ass Mo/Mo.jpg"
      biographyImage="/speakers/Tol Ass Mo/Tol-Ass-Mo.jpg"
      bioHook="“Laughter is the ultimate vehicle for cultural disruption and authentic brand expression.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="tol-ass-mo" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="tol-ass-mo" 
        customGallery={customGallery} 
        customIntroText="Gastronomy and cannabis culture alignment summits, satirical comedy hosting, and corporate keynote entertainment with Tol A$$ Mo."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
