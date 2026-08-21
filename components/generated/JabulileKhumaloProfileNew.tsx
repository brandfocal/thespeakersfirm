"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "jabulile-client",
    label: "Head of Client Relationship Management",
    subtitle: "Leading customer experience, compliance, and strategic retention at a top financial services institution."
  },
  {
    id: "jabulile-systems",
    label: "Human Systems Thinker",
    subtitle: "Advising organizations on combining business strategy with the emotional realities of employees."
  },
  {
    id: "jabulile-author",
    label: "Published Author",
    subtitle: "Author of 'The Uncomfortable Grace of Becoming', exploring personal transformation and growth."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "human-systems",
    number: "Theme 01",
    title: "Human-Centered Leadership.",
    copy: "Building leadership models and organizational systems that prioritize psychological safety, trust, and emotional intelligence."
  },
  {
    id: "client-experience",
    number: "Theme 02",
    title: "Strategic Client Management.",
    copy: "Moving relationship management from operational support to a key driver of retention and commercial sustainability."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Jabulile Khumalo is a strategic leadership speaker, author, executive leader, and human systems thinker whose work sits at the intersection of leadership, financial inclusion, emotional intelligence, and human-centered business strategy.",
  "Currently serving as the Head of Client Relationship Management at Old Mutual Foundation Market, Jabulile leads strategic initiatives across operational effectiveness, retention strategy, and client experience. Throughout her 20+ year leadership journey, she has steered major turnaround strategies and governance alignments within the financial services sector.",
  "Jabulile's book, 'The Uncomfortable Grace of Becoming', is a deeply reflective account of healing, self-discovery, and transition, bridging corporate leadership insights with emotional and human realities.",
  "Book Jabulile Khumalo through The Speakers Firm, A Leading African Speakers Bureau, to deliver deeply moving keynotes on human-centered leadership, emotional intelligence, and client experience strategy."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "old-mutual", name: "Old Mutual" },
  { id: "gibs", name: "GIBS Business School" }
];

export const AboutTeamSection = () => {
  const customVideos = [
    {
      id: "jabulile-vid-1",
      label: "Jabulile Khumalo Keynote Showcase",
      youtubeId: "Gqab_Ia-9eg"
    }
  ];

  const customBooks = [
    {
      id: "uncomfortable-grace",
      title: "The Uncomfortable Grace of Becoming",
      description: "A deeply reflective book inspired by Jabulile's personal journey, offering tools for self-discovery, identity transformation, and healing.",
      coverImage: "/speakers/Jabulile Khumalo/Uncomfortable-Grace-Of-Becoming.jpg",
      url: "https://exclusivebooks.co.za/products/9781049206257"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Jabulile Khumalo"
      speakerTitle=""
      speakerDesignation="Head of Client Relationship Management, Author & Leadership Speaker"
      speakerRole="Human Systems & Leadership Consultant"
      speakerRef="TSF-JK-99"
      heroBackgroundImage="/speakers/Jabulile Khumalo/Jabulile-Khumalo-The-Speakers-Firm5.jpg"
      biographyImage="/speakers/Jabulile Khumalo/Jabulile-Khumalo-The-Speakers-Firm4.jpg"
      bioHook="“Organizations cannot build sustainable systems while ignoring the emotional, social, and human realities of the people those systems are designed to serve.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={customBooks}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
    >
      <ProfileAdditionalSections 
        speakerId="jabulile-khumalo" 
        customIntroText="Human-centered business strategy, customer retention masterclasses, and emotional intelligence keynotes led by Jabulile Khumalo."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
