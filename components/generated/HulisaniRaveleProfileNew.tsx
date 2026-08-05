"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "broadcaster-29",
    label: "29 Years Broadcasting",
    subtitle: "Highly respected industry veteran with broad media and brand expertise."
  },
  {
    id: "gibs-mphil",
    label: "MPhil Change Leadership",
    subtitle: "Studying Change Leadership at the Gordon Institute of Business Science (GIBS)."
  },
  {
    id: "conduit-conversations",
    label: "Conduit of Conversations",
    subtitle: "Masterful facilitator for SLT conferences, strategy kick-offs, and launches."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "change-leadership",
    number: "Theme 01",
    title: "Change Leadership & Transition.",
    copy: "Navigating institutional transitions, walking away from comfortable paths to align with purpose, and leading change with empathy."
  },
  {
    id: "event-facilitation",
    number: "Theme 02",
    title: "High-Performance Event Facilitation.",
    copy: "Behind-the-scenes strategy and on-stage execution that turn corporate events, panels, and launch forums into meaningful dialogues."
  },
  {
    id: "authenticity-culture",
    number: "Theme 03",
    title: "Culture, Self-Love & Mental Health.",
    copy: "Advocating for positive self-esteem, workplace wellness, and building brands that carry legacies of relatability and trust."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "A Seasoned Broadcaster, Hulisani Ravele is a marvel to watch and experience! Her 29 years of experience as a broadcaster is why Hulisani has the ambidexterity and versatility of a masterful MC. Lauded as a 'Conduit of Conversations', her skills have seen her host Senior Leadership Team Conferences and Conventions, Company Strategy Kick-Offs, Gala Dinners, Company Awards and Brand/Product launches for clients such as Exxaro, ABInBev, Unilever, Netflix, BBC Lifestyle, and Sony Pictures.",
  "She has led leading industry award ceremonies such as the Effie Awards South Africa, GLAMOUR Women of the Year, and the Marketing Achievement Awards. Revered for her advocacy of culture, self-love, mental health and positive self-esteem, this, coupled with her vibrant personality, has cemented Ravele into the hearts of millions.",
  "The 'Hulisani Ravele' brand carries a legacy that delivers relatability across audiences and markets. Hulisani oozes authenticity and is an informed and trusted voice and key opinion leader. Ravele is currently pursuing her MPhil specialising in Change Leadership at the prestigious Gordon Institute of Business Science (GIBS).",
  "It is not often that a Media Personality has such a depth of skill, mastery and creative solutions. These attributes make for valuable partnership opportunities; whether she’s on the stage, behind the mic, in the boardroom, or a part of your campaign."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "gibs", name: "GIBS BUSINESS SCHOOL" },
  { id: "netflix", name: "NETFLIX" },
  { id: "unilever", name: "UNILEVER" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "hulisani-art-1",
      headline: "Hulisani Ravele celebrates milestone in her education journey at GIBS",
      publication: "Kaya 95.9",
      date: "04 Mar 2025",
      action: "Read Article",
      url: "https://www.kaya959.co.za/entertainment-news/hulisani-ravele-celebrates-milestone-in-her-education-journey/",
      image: "/speakers/Hulisani Ravele/Hulisani-Ravele-The-Speakers-Firm-2.jpg"
    },
    {
      id: "hulisani-art-2",
      headline: "The Discomfort of Stillness: Walking Away for Alignment",
      publication: "YouTube",
      date: "2024",
      action: "Watch Show",
      url: "https://www.youtube.com/watch?v=Ta8rFguALEA",
      image: "/speakers/Hulisani Ravele/Hulisani-Ravele-The-Speakers-Firm-3.jpg"
    }
  ];

  const customGallery = [
    {
      id: "hulisani-gal-1",
      src: "/speakers/Hulisani Ravele/Hulisani-Ravele-The-Speakers-Firm-4.jpg",
      alt: "Hulisani Ravele MCing",
      caption: "Hosting Effie Awards South Africa",
      className: "sm:col-span-2 lg:col-span-2"
    },
    {
      id: "hulisani-gal-2",
      src: "/speakers/Hulisani Ravele/Hulisani-Ravele-The-Speakers-Firm-5.jpg",
      alt: "Hulisani Ravele strategy session",
      caption: "Facilitating corporate strategy alignment workshops",
      className: ""
    },
    {
      id: "hulisani-gal-3",
      src: "/speakers/Hulisani Ravele/Hulisani-Ravele-The-Speakers-Firm-6.jpg",
      alt: "Hulisani Ravele brand ambassador",
      caption: "Vibrant and authentic public speaker profile",
      className: ""
    }
  ];

  const customVideos = [
    {
      id: "hulisani-vid-1",
      label: "Hulisani Ravele - Catching Up and Broadcaster Reel",
      youtubeId: "04qp8R0xUy4"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Hulisani Ravele"
      speakerTitle=""
      speakerDesignation="Television Presenter & Media Personality"
      speakerRole="Change Leadership scholar, 29-year broadcaster veteran, and premium MC."
      speakerRef="TSF-HR-06"
      heroBackgroundImage="/speakers/Hulisani Ravele/Hulisani-Ravele-The-Speakers-Firm.jpg"
      biographyImage="/speakers/Hulisani Ravele/Hulisani-Ravele-The-Speakers-Firm-7.jpg"
      bioHook="“Authenticity is a legacy that builds instant relatability and trust across any audience.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="hulisani-ravele" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="hulisani-ravele" 
        customGallery={customGallery} 
        customIntroText="Corporate events facilitation, SLT summits, and media dialogues by Hulisani Ravele."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
