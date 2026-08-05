"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "celebrated-chef",
    label: "Celebrated Chef & Author",
    subtitle: "Renowned gastronome, founder of Vuyo's, and author on business resilience."
  },
  {
    id: "tuckshop-founder",
    label: "Gcwalisa Tuckshop Founder",
    subtitle: "Pioneered a retail business model enabling low-income communities to buy basic foodstuffs."
  },
  {
    id: "accelerator-leader",
    label: "Wakanda Food Accelerator",
    subtitle: "Created the Chefpreneur programme supporting food tech innovators in launching businesses."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "audacity-of-hope",
    number: "Theme 01",
    title: "Audacity of Hope.",
    copy: "Unlocking individual and team potential by turning bold, purpose-driven dreams into executable reality."
  },
  {
    id: "optimism-resilience",
    number: "Theme 02",
    title: "Optimism & Resilience.",
    copy: "Maintaining absolute optimism and discovering creative solutions in complex, challenging business environments."
  },
  {
    id: "food-security",
    number: "Theme 03",
    title: "Social Food Security.",
    copy: "Leveraging food technology and micro-enterprise models to solve poverty and foster economic inclusion."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Miles Kubheka is a celebrated Chef, global speaker, transformative force to be reckoned with and visionary leader that helps individuals unlock boundless potential.",
  "Miles Kubheka’s journey as a changemaker in South Africa is nothing short of inspirational. With the audacity of hope and spirit of innovation, he has transformed many of his dreams into reality. His influential story resonates not only within South Africa but also beyond its borders, inspiring others to embrace entrepreneurship and contribute to the country and continent’s greatness.",
  "He is a visionary who sees solutions to problems and remains optimistic in the face of challenges. He plays a significant role in positively impacting the lives of many. He is truly a dynamic individual who has founded numerous successful businesses and inspired countless people. His expertise spans multiple sectors, making him a versatile and impactful leader. His eloquence and commanding stage presence make him an inspiration to many.",
  "Miles’s heartfelt commitment to enacting positive change and his unwavering dedication to uplifting others is what truly defines him.",
  "In a world where dreams often remain just that dreams Miles Kubheka stands out as a powerful force for change, bridging the gap between aspiration and action. Miles is a beacon of innovation and resilience, embodying the mantra of bold, purpose driven action. He inspires a new generation of leaders to embrace opportunities, innovate fearlessly, and turn bold ideas into transformative ventures, making him a powerful force in driving business success and societal impact. Miles has established himself as one of the foremost global speakers, capturing the hearts and minds of audiences across borders."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "gcwalisa", name: "GCWALISA TUCKSHOP" },
  { id: "wakanda", name: "WAKANDA FOOD ACCELERATOR" },
  { id: "talk702", name: "702 TALK RADIO" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "miles-art-1",
      headline: "Gcwalisa Tuckshop",
      publication: "Miles Kubheka Official",
      date: "2024",
      action: "Read Article",
      url: "https://mileskubheka.com/gcwalisa-tuckshop/",
      image: "/speakers/Miles Kubheka/miles-kubheka-the-speakers-firm-2.jpg"
    },
    {
      id: "miles-art-2",
      headline: "Africa Travel Indaba",
      publication: "Miles Kubheka official podcast",
      date: "2024",
      action: "Read Article",
      url: "https://mileskubheka.com/africa-travel-indaba/",
      image: "/speakers/Miles Kubheka/miles-kubheka-the-speakers-firm-5.jpg"
    },
    {
      id: "miles-art-3",
      headline: "Turning food tech innovators’ skills into own businesses",
      publication: "702 Talk Radio",
      date: "2023",
      action: "Read Article",
      url: "https://mileskubheka.com/turning-food-tech-innovators-skills-businesses/",
      image: "/speakers/Miles Kubheka/miles-kubheka-the-speakers-firm-6.jpg"
    }
  ];

  const customVideos = [
    {
      id: "miles-vid-1",
      label: "Miles Kubheka Keynote Presentation",
      youtubeId: "uVmBwO_ct7k"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Miles Kubheka"
      speakerTitle=""
      speakerDesignation="Celebrated Chef, Author, Entrepreneur & Keynote Speaker"
      speakerRole="Gastronome maverick, social entrepreneur, and global business growth strategist."
      speakerRef="TSF-MK-32"
      heroBackgroundImage="/speakers/Miles Kubheka/miles-kubheka-the-speakers-firm-7.jpg"
      biographyImage="/speakers/Miles Kubheka/miles-kubheka-the-speakers-firm-2.jpg"
      bioHook="“Resilience, purpose-driven action, and turning bold ideas into transformative ventures.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="miles-kubheka" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="miles-kubheka" 
        customGallery={[]} 
        customIntroText="Gastronomy disruption keynotes, social entrepreneurship strategy, and corporate growth masterclasses with Miles Kubheka."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
