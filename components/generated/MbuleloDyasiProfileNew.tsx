"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "md-mensector",
    label: "Secretary General, SA Men’s Sector",
    subtitle: "Drives national strategy on male involvement in combatting GBV and promoting health equity."
  },
  {
    id: "md-convenor",
    label: "National Convenor, Men's Forums",
    subtitle: "Coordinates dialogue platforms across provinces working closely with traditional and religious leaders."
  },
  {
    id: "md-author",
    label: "Author of 'Dignity in the Darkness'",
    subtitle: "Chronicles a life of resistance, resilience, and community advocacy across Southern Africa."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "masculinity-gbv",
    number: "Theme 01",
    title: "Masculinity & GBV Interventions.",
    copy: "Creating structured platforms to engage men in safety, human rights advocacy, and active allyship."
  },
  {
    id: "family-restructuring",
    number: "Theme 02",
    title: "Evolving Role of Men in Families.",
    copy: "Guiding communities away from toxic structures toward emotionally safe, supportive family environments."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Professor Mbulelo Dyasi is a highly respected gender and HIV/AIDS activist, serving as the Secretary General of the South African Men’s Sector and the National Convenor of the National Men’s Forums of South Africa. He has dedicated his career to human rights advocacy, policy formulation, and community healthcare campaigns across Southern Africa.",
  "Prof. Dyasi is a leading champion of positive masculinity, arguing that active and continuous conversations are essential to evaluate if men are truly absorbing the anti-GBV messages. Through national forums, he engages traditional and religious leaders, government bodies, and civil society organizations to promote gender equality, combat domestic violence, and improve healthcare access.",
  "His work highlights the transforming role of men in contemporary families, advocating for a shift away from traditional rigid gender norms toward inclusive, emotionally intelligent, and supportive partnerships. He is also the author of the memoir Dignity in the Darkness: A Journey of Resilience, Resistance, and Redemption, documenting his long-standing work in humanitarian development.",
  "Book Prof. Mbulelo Dyasi through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to bring definitive positive masculinity workshops, public health leadership briefings, and gender equity seminars to your organization."
];

const BOOKS = [
  {
    id: "dignity-darkness",
    title: "Dignity in the Darkness: A Journey of Resilience, Resistance, and Redemption",
    description: "Documentation of a life dedicated to activism, detailing journeys through structural challenges, resistance against inequality, and the pursuit of human dignity in Africa.",
    coverImage: "/speakers/Mbulelo Dyasi/DIGNITY-IN-THE-DARKNESS---A-JOURNEY-OF-RESILIENCE-RESISTANCE-AND-REDEMPTION.jpg",
    url: "https://inerela.org/2025/08/28/book-launch-dignity-in-the-darkness-a-journey-of-resilience-resistance-and-redemption-and-recognition-of-peace-and-humanitarian-honorees/"
  }
];

const SOCIAL_PROOF_LOGOS = [
  { id: "mensector", name: "SA MEN'S SECTOR" },
  { id: "unwomen", name: "UN WOMEN" },
  { id: "dsd", name: "DEPARTMENT OF SOCIAL DEVELOPMENT" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "dyasi-art-1",
      headline: "In conversation with human rights activist and author, Prof. Mbulelo Dyasi",
      publication: "Khanyisa Kukhanye / Mhlobo Wenene FM / Omny.fm",
      date: "2024",
      action: "Listen to Discussion",
      url: "https://omny.fm/shows/khanyisa-kukhanye-mhlobo/prof-mbulelo-dyasi#description",
      image: "/speakers/Mbulelo Dyasi/Mbulelo-Dyasi-The-Speakers-Firm-3.jpg"
    },
    {
      id: "dyasi-art-2",
      headline: "From Where I Stand: Conversations on positive masculinity are essential",
      publication: "UN Women Africa",
      date: "2024",
      action: "Read Story",
      url: "https://africa.unwomen.org/en/stories/from-where-i-stand/2024/01/from-where-i-stand-conversations-on-positive-masculinity-are-essential-to-determine-if-men-are-getting-the-messages-on-gbv",
      image: "/speakers/Mbulelo Dyasi/Mbulelo-Dyasi-The-Speakers-Firm-4.jpg"
    },
    {
      id: "dyasi-art-3",
      headline: "The role of men in families is transforming, says Prof. Dyasi",
      publication: "DSD News",
      date: "2023",
      action: "Read Article",
      url: "https://dsdnews.org/the-role-of-men-in-families-is-transforming-says-prof-dyasi/",
      image: "/speakers/Mbulelo Dyasi/Mbulelo-Dyasi-The-Speakers-Firm-6.jpg"
    }
  ];

  const customVideos = [
    {
      id: "dyasi-vid-1",
      label: "Prof. Mbulelo Dyasi on Reforming Family Structures & Masculinity",
      youtubeId: "D8MWj8YSCTM"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Mbulelo Dyasi"
      speakerTitle="Prof."
      speakerDesignation="Gender & HIV/AIDS Activist"
      speakerRole="Secretary General of Men’s Sector & National Convenor of Men's Forums"
      speakerRef="TSF-MD-40"
      heroBackgroundImage="/speakers/Mbulelo Dyasi/Mbulelo-Dyasi-The-Speakers-Firm-2.jpg"
      biographyImage="/speakers/Mbulelo Dyasi/Mbulelo-Dyasi-The-Speakers-Firm-7.jpg"
      bioHook="“Conversations on positive masculinity are essential to determine if men are getting the messages on GBV and redefining their role in families.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={BOOKS}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="mbulelo-dyasi" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="mbulelo-dyasi" 
        customIntroText="Positive masculinity seminars, HIV/AIDS public health advocacy drives, and family dynamics workshops led by Prof. Mbulelo Dyasi."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
