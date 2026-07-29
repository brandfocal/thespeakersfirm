"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "resilience-expert",
    label: "Resilience Expert",
    subtitle: "Renowned globally for framework models on employee resilience and leadership adaptability."
  },
  {
    id: "od-specialist",
    label: "OD Specialist",
    subtitle: "Over 18 years in Organizational Development and Employee Engagement consulting."
  },
  {
    id: "global-speaker",
    label: "Global Keynote Speaker",
    subtitle: "Highly requested corporate keynote speaker with engagements spanning multiple continents."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "organisational-agility",
    number: "Theme 01",
    title: "Change, Resilience & Organisational Agility.",
    copy: "Helping teams shift from merely surviving change to actively thriving and adapting under complex market conditions."
  },
  {
    id: "leadership-development",
    number: "Theme 02",
    title: "People-Centered Servant Leadership.",
    copy: "Building leadership models rooted in emotional intelligence, neuroscience, and active employee engagement."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "At The Speakers Firm, we proudly represent Siphiwe Moyo, a globally sought-after Keynote Speaker, Author, and Facilitator renowned for transforming leadership, culture, and human behaviour in organisations. A Southern African Speaker Hall of Fame and Educator Hall of Fame inductee, Siphiwe is trusted by executives and institutions navigating people, performance, and organisational change.",
  "A seasoned HR practitioner and Organisational Behaviour specialist, Siphiwe has served as Head of Learning & Development for several JSE-listed companies and taught at leading business schools including Stellenbosch University, GIBS, Henley Business School Africa, Wits Business School, and Johannesburg Business School.",
  "His keynotes bring clarity, energy, and executional insight to leadership teams, making him the perfect fit for year-end functions, strategy offsites, and teambuilding sessions. Whether in person or virtual, Siphiwe connects deeply with audiences, turning behavioural science into practical leadership action.",
  "Elevate your next leadership event with Siphiwe Moyo, represented by The Speakers Firm, Africa’s #1 Strategic Speakers Bureau."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "vodacom", name: "VODACOM" },
  { id: "absa", name: "ABSA GROUP" },
  { id: "discovery", name: "DISCOVERY" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "siphiwe-art-1",
      headline: "Radical Self-Love in the Workplace",
      publication: "Siphiwe Moyo Podcast",
      date: "14 Jun 2022",
      action: "Watch Podcast",
      url: "https://thespeakersfirm.co.za/siphiwe-moyo-2/",
      image: "/speakers/Siphiwe Moyo/Siphiwe-Moyo-The-Speakers-Firm-2.jpg"
    },
    {
      id: "siphiwe-art-2",
      headline: "Strategies For Energy And Self Care",
      publication: "Siphiwe Moyo Podcast",
      date: "04 May 2022",
      action: "Watch Episode",
      url: "https://thespeakersfirm.co.za/siphiwe-moyo-2/",
      image: "/speakers/Siphiwe Moyo/Siphiwe-Moyo-The-Speakers-Firm-3.jpg"
    },
    {
      id: "siphiwe-art-3",
      headline: "Resilience and Mental Health Advocacy in Leadership with Yael Geffen",
      publication: "Buzzsprout",
      date: "18 Dec 2024",
      action: "Listen to Podcast",
      url: "https://www.buzzsprout.com/2255382/episodes/16206615-episode-18-resilience-and-mental-health-advocacy-in-leadership-with-yael-geffen",
      image: "/speakers/Siphiwe Moyo/Siphiwe-Moyo-The-Speakers-Firm-7.jpg"
    }
  ];

  const customGallery = [
    {
      id: "siphiwe-gal-1",
      src: "/speakers/Siphiwe Moyo/Siphiwe-Moyo-The-Speakers-Firm-4.jpg",
      alt: "Siphiwe Moyo corporate resilience keynote",
      caption: "Author, speaker, and resilience specialist",
      className: "sm:col-span-2 lg:col-span-2"
    },
    {
      id: "siphiwe-gal-2",
      src: "/speakers/Siphiwe Moyo/Siphiwe-Moyo-The-Speakers-Firm-5.jpg",
      alt: "Interactive team engagement workshop",
      caption: "Fostering collaboration in corporate team builds",
      className: ""
    },
    {
      id: "siphiwe-gal-3",
      src: "/speakers/Siphiwe Moyo/Siphiwe-Moyo-The-Speakers-Firm-6.jpg",
      alt: "Siphiwe Moyo keynote stage address",
      caption: "High-impact presentation",
      className: ""
    },
    {
      id: "siphiwe-gal-4",
      src: "/speakers/Siphiwe Moyo/Siphiwe-Moyo-The-Speakers-Firm-7.jpg",
      alt: "Siphiwe Moyo presenting live keynote address",
      caption: "Keynote presentation and audience interaction",
      className: ""
    }
  ];

  const customVideos = [
    {
      id: "siphiwe-vid-1",
      label: "Siphiwe Moyo Keynote Video Presentation",
      youtubeId: "dMjS6N78jwg"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Siphiwe Moyo"
      speakerTitle=""
      speakerDesignation="Global Speaker, Author & Organisational Development Specialist"
      speakerRole="Global speaker, author, and expert in corporate resilience and organizational behavior."
      speakerRef="TSF-SM-09"
      heroBackgroundImage="/speakers/Siphiwe Moyo/siphiwe-moyo-banner.jpg"
      biographyImage="/speakers/Siphiwe Moyo/Siphiwe-Moyo-The-Speakers-Firm-4.jpg"
      bioHook="“Resilience is not about bouncing back; it is about bouncing forward with wisdom and agility.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="siphiwe-moyo" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="siphiwe-moyo" 
        customGallery={customGallery} 
        customIntroText="Corporate team-building sessions and resilience masterclasses led by Siphiwe Moyo."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
