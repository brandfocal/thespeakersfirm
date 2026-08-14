"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "everest-summiteer",
    label: "Everest Summiteer",
    subtitle: "First Black African woman to scale Mount Everest (2019)."
  },
  {
    id: "seven-summits",
    label: "Seven Summits Completed",
    subtitle: "Successfully scaled the highest peak on all seven continents."
  },
  {
    id: "guinness-record",
    label: "Guinness World Record",
    subtitle: "Guinness World Record holder for explorer achievements."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "resilience-overcoming",
    number: "Theme 01",
    title: "Resilience, Perseverance & Unwavering Vision.",
    copy: "How to persist through failures (such as multiple Everest attempts) to achieve historic milestones."
  },
  {
    id: "corporate-lessons",
    number: "Theme 02",
    title: "Translating Mountaintop Lessons into Boardroom Strategies.",
    copy: "Combining executive loyalty/eCommerce experience with extreme risk management and execution under pressure."
  },
  {
    id: "purpose-leadership",
    number: "Theme 03",
    title: "Climbing for a Cause & Social Impact.",
    copy: "Leveraging personal achievements to drive literacy, digital library builds, and socioeconomic change in Africa."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Saray Khumalo is an award-winning mountaineer, Guinness World Record holder, author, and accomplished speaker and expedition leader. In 2019, on her fourth attempt, Saray summited Mount Everest, becoming the first Black African woman to reach the world’s highest peak. She further cemented her place in mountaineering history by completing the Seven Summits challenge, climbing the highest mountains on each of the seven continents. Her journey is a testament to resilience, perseverance, and the power of an unwavering vision.",
  "Beyond her achievements on the mountains, Saray is an experienced business executive with a successful career in some of South Africa’s leading financial institutions, specializing in eCommerce and customer loyalty. She seamlessly blends her corporate expertise with the lessons from extreme expeditions to inspire and partner with organizations on transformational journeys.",
  "Through her keynotes and leadership engagements, she empowers individuals and teams to identify personal and business goals, unlock their full potential, and achieve exceptional results.",
  "Saray is also the founder of Summits with a Purpose, an initiative dedicated to improving education in disadvantaged African communities. Under her leadership, the initiative has raised funds to build physical and digital libraries, reflecting her belief that literacy and education are pivotal in transforming the narrative for the next generation."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "everest", name: "MT. EVEREST 2019" },
  { id: "guinness", name: "GUINNESS WORLD RECORD" },
  { id: "summits-purpose", name: "SUMMITS WITH A PURPOSE" }
];

const PUBLISHED_BOOKS = [
  {
    id: "my-journey-to-the-top",
    title: "My Journey to the Top of the World",
    description: "Saray's memoir detailing her historic Everest summit and the lessons of resilience along the way.",
    coverImage: "/speakers/Saray Khumalo/My-Journey-to-the-Top-of-the-World---Saray-Khumalo.jpg",
    url: "https://saraykhumalo.com/product/all-products/my-journey-to-the-top-of-the-world"
  }
];

const SARAY_MEDIA = [
  {
    id: "saray-art-1",
    headline: "Saray Khumalo: Moving proverbial mountains by climbing real ones",
    publication: "The Citizen",
    date: "14 Jun 2021",
    action: "Read Article",
    url: "https://www.citizen.co.za/news/saray-khumalo-moving-proverbial-mountains-by-climbing-real-ones/",
    image: "/speakers/Saray Khumalo/Saray-Khumalo-The-Speakers-Firm-3.jpg"
  },
  {
    id: "saray-art-2",
    headline: "5 things to know about Saray Khumalo, the first black SA woman to reach top of Mount Everest",
    publication: "News24",
    date: "16 May 2019",
    action: "Read Article",
    url: "https://www.news24.com/5-things-to-know-about-saray-khumalo-the-first-black-sa-woman-to-reach-top-of-mount-everest-20190516",
    image: "/speakers/Saray Khumalo/Saray-Khumalo-The-Speakers-Firm-7.jpg"
  },
  {
    id: "saray-art-3",
    headline: "SA businesswoman becomes first black African woman to scale Mount Everest",
    publication: "Face2Face Africa",
    date: "17 May 2019",
    action: "Read Profile",
    url: "https://face2faceafrica.com/article/sa-businesswoman-becomes-first-black-african-woman-to-scale-mount-everest",
    image: "/speakers/Saray Khumalo/Saray-Khumalo-The-Speakers-Firm-8.jpg"
  }
];

export const AboutTeamSection = () => {
  const customVideos = [
    {
      id: "saray-vid-1",
      label: "Saray Khumalo in Action",
      youtubeId: "u9B7D82fd34"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Saray Khumalo"
      speakerTitle=""
      speakerDesignation="Mountaineer, Author, Business Executive & Keynote Speaker"
      speakerRole="First Black African woman to summit Mount Everest, explorer, and corporate loyalty specialist."
      speakerRef="TSF-SK-01"
      heroBackgroundImage="/speakers/Saray Khumalo/Saray-Khumalo-The-Speakers-Firm-9.jpg"
      biographyImage="/speakers/Saray Khumalo/Saray-Khumalo-The-Speakers-Firm-4.jpg"
      bioHook="“Moving proverbial mountains by climbing real ones to transform the socioeconomic landscape of Africa.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={PUBLISHED_BOOKS}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="saray-khumalo" customMedia={SARAY_MEDIA} />
      }
    >
      <ProfileAdditionalSections speakerId="saray-khumalo" customVideos={customVideos} />
    </SpeakerProfileTemplate>
  );
};
