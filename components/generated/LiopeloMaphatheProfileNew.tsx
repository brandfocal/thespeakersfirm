"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "lm-arts",
    label: "Performing Arts Degree",
    subtitle: "Graduated in Performing Arts from the University of the Free State."
  },
  {
    id: "lm-actress",
    label: "Award-Winning Actress",
    subtitle: "Starred in major productions including Backstage, Kings of Jo'burg, and Gomora."
  },
  {
    id: "lm-advocate",
    label: "Social Advocate & Host",
    subtitle: "Hosts Moja Love's Madi-Aka, championing child rights and family healing."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "storytelling-impact",
    number: "Theme 01",
    title: "Storytelling & Social Impact.",
    copy: "How television, media representation, and storytelling can drive community healing and advocacy."
  },
  {
    id: "youth-mentorship",
    number: "Theme 02",
    title: "Youth Mentorship & Development.",
    copy: "Empowering the next generation through art, creative leadership, and personal resilience."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Liopelo Maphathe is a Lesotho-born actress, television presenter, MC, moderator, producer, voice-over artist, and dedicated philanthropist who has been a prominent figure in the South African entertainment industry since the early 2000s. She holds a degree in Performing Arts from the University of the Free State.",
  "Liopelo achieved her breakout role as Luyanda on the hit soapie *Backstage*. Her extensive acting portfolio includes leading roles in popular television series such as Netflix's *Kings of Jo'burg*, *Durban Gen*, *Gomora*, *Nikiwe*, *Muvhango*, *Rhythm City*, and *Nna Sajene Kokobela*. In addition, she has hosted lifestyle and musical shows such as *AfroCafe*.",
  "Beyond her artistic work, Liopelo is deeply passionate about social advocacy and youth development. She hosts the impactful show *Madi-Aka* on Moja Love, which advocates for children caught in the middle of parental conflict or difficult divorces, helping families heal and build healthier relationships.",
  "Book Liopelo Maphathe through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to bring seasoned entertainment industry perspectives, professional event facilitation, and compassionate advocacy talks to your next conference."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "mojalove", name: "MOJA LOVE" },
  { id: "netflix", name: "NETFLIX" },
  { id: "ufs", name: "UNIV OF THE FREE STATE" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "lm-art-1",
      headline: "Liopelo Maphathe on acting, advocacy, and Moja Love's Madi-Aka",
      publication: "Moja Love / YouTube",
      date: "2024",
      action: "Watch Interview",
      url: "https://www.youtube.com/watch?v=WB_kJOyEH88",
      image: "/speakers/Liopelo Maphathe/Liopelo-Maphathe-The-Speakers-Firm2.jpg"
    },
    {
      id: "lm-art-2",
      headline: "From Backstage to Kings of Jo'burg: Liopelo's creative journey",
      publication: "Entertainment Weekly Africa",
      date: "2023",
      action: "Read Feature",
      url: "https://www.news24.com/life/arts-and-entertainment/celebrities/actor-liopelo-maphathe-reflects-on-the-challenges-faced-by-women-in-the-creative-arts-industry-20220609",
      image: "/speakers/Liopelo Maphathe/Liopelo-Maphathe-The-Speakers-Firm3.jpg"
    },
    {
      id: "lm-art-3",
      headline: "Advocating for children affected by parental conflict",
      publication: "Child Rights & Family Advocacy Journal",
      date: "2024",
      action: "Read Article",
      url: "https://www.news24.com/drum/news/liopelo-maphathe-the-best-mom-20170728",
      image: "/speakers/Liopelo Maphathe/Liopelo-Maphathe-The-Speakers-Firm4.jpg"
    }
  ];

  const customVideos = [
    {
      id: "lm-vid-1",
      label: "Liopelo Maphathe on the Power of Media and Child Rights Advocacy",
      youtubeId: "WB_kJOyEH88"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Liopelo Maphathe"
      speakerTitle=""
      speakerDesignation="Acclaimed Actress, TV Presenter & Philanthropist"
      speakerRole="Socio-Emotional Advocacy Speaker"
      speakerRef="TSF-LM-72"
      heroBackgroundImage="/speakers/Liopelo Maphathe/Liopelo-Maphathe-The-Speakers-Firm7.jpg"
      biographyImage="/speakers/Liopelo Maphathe/Liopelo-Maphathe-The-Speakers-Firm8.jpg"
      bioHook="“Using the power of media, storytelling, and social advocacy to champion child rights, mentor youth, and lead impactful conversations.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="liopelo-maphathe" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="liopelo-maphathe" 
        customIntroText="Creative industry panel dialogues, youth mentorship keynotes, and family advocacy talks led by Liopelo Maphathe."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
