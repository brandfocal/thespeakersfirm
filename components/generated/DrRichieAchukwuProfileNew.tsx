"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "nlp-society",
    label: "Neuro Linguistic Programming",
    subtitle: "Member of the Society of Neuro Linguistic Programming."
  },
  {
    id: "robbins-madanes",
    label: "Strategic Intervention Coach",
    subtitle: "Trained under Anthony Robbins and Cloé Madanes."
  },
  {
    id: "motivational-maps",
    label: "Certified Maps Practitioner",
    subtitle: "Certified Business Practitioner of Motivational Maps and member of COMENSA."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "neuroscience-leadership",
    number: "Theme 01",
    title: "Neuroscience in Leadership.",
    copy: "Fusing neuroscience and behavioural psychology to shift mindsets, build emotional intelligence, and cultivate conscious, high-performing leaders."
  },
  {
    id: "project-deconfliction",
    number: "Theme 02",
    title: "High-Stakes Deconfliction & Change.",
    copy: "Lessons from DHL and Shell Nigeria on project deconfliction, strategic corporate interventions, and leading through complexity."
  },
  {
    id: "three-keys-greatness",
    number: "Theme 03",
    title: "Three Elements of Greatness.",
    copy: "A systematic approach to self-mastery, personal development, and bridging the gap between corporate intention and commercial impact."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "At The Speakers Firm, we proudly represent Dr Richie Achukwu, a globally recognised Leadership and Human Transformation Expert, whose work fuses neuroscience, behavioural psychology, and strategic coaching to cultivate conscious, high-performing leaders. With an impressive background spanning corporate, consulting, and international facilitation, Dr Richie stands at the intersection of leadership science, emotional intelligence, and organisational excellence.",
  "Drawing from his corporate tenure with DHL and his consulting work for Shell Petroleum Nigeria on high-stakes project deconfliction, Dr Richie has built a reputation as a trusted advisor to executives and leadership teams navigating complexity, change, and growth. He is a member of the Society of Neuro Linguistic Programming, COMENSA (Coaches and Mentors Association of South Africa), and a Certified Business Practitioner of Motivational Maps. An alumnus of Brendon Burchard’s Expert Academy and a Strategic Intervention Coach trained under Anthony Robbins and Cloé Madanes, Dr Richie is also a member of the Global Speakers Federation, reflecting his international reach and credibility.",
  "For more than two decades, Dr Richie has led leadership and transformation interventions across South Africa, Zambia, Zimbabwe, Chad, Suriname, and Nigeria, working with top executives, entrepreneurs, and teams to shift mindsets and elevate performance. His approach blends evidence-based methodology with intuitive understanding, empowering leaders to bridge the gap between intention and impact.",
  "A gifted communicator, Dr Richie extends his influence through media, using storytelling as a tool for social and professional transformation. He has hosted “The Mind Clinic” on CNBC Africa’s Kicking Doors, led leadership dialogues on Dexterity Radio, and facilitated live coaching sessions on SABC 1’s Mzansi Insider, reaching millions with practical insights on leadership, purpose, and self-mastery."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "cnbc", name: "CNBC AFRICA" },
  { id: "dhl", name: "DHL" },
  { id: "shell", name: "SHELL NIGERIA" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "richie-art-1",
      headline: "Emotional Intelligence and Personal Development Masterclass",
      publication: "YouTube",
      date: "2024",
      action: "Watch Masterclass",
      url: "https://www.youtube.com/watch?v=n18O4GMHy9Y",
      image: "/speakers/Richie Achukwu/Dr-Richie-Achukwu-The-Speakers-Firm-2.jpg"
    },
    {
      id: "richie-art-2",
      headline: "The Path to Success: A GPS Navigator for Life's Traffic Jams",
      publication: "Dexterity Radio",
      date: "2023",
      action: "Watch Feature",
      url: "https://www.youtube.com/watch?v=VbQP9wV2tuY",
      image: "/speakers/Richie Achukwu/Dr-Richie-Achukwu-The-Speakers-Firm-3.jpg"
    }
  ];

  const customGallery = [
    {
      id: "richie-gal-1",
      src: "/speakers/Richie Achukwu/Dr-Richie-Achukwu-The-Speakers-Firm-4.jpg",
      alt: "Dr Richie Achukwu consulting",
      caption: "Strategic board advisory and team alignment",
      className: "sm:col-span-2 lg:col-span-2"
    },
    {
      id: "richie-gal-2",
      src: "/speakers/Richie Achukwu/Dr-Richie-Achukwu-The-Speakers-Firm-5.jpg",
      alt: "Dr Richie Achukwu speaking",
      caption: "Neuroscience-based keynote presentation",
      className: ""
    },
    {
      id: "richie-gal-3",
      src: "/speakers/Richie Achukwu/Dr-Richie-Achukwu-The-Speakers-Firm-6.jpg",
      alt: "Dr Richie Achukwu broadcast",
      caption: "Hosting The Mind Clinic on CNBC Africa",
      className: ""
    }
  ];

  const customVideos = [
    {
      id: "richie-vid-1",
      label: "Dr Richie Achukwu - Keynote Highlights",
      youtubeId: "jB68CV8ljpw"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Dr Richie Achukwu"
      speakerTitle="Dr"
      speakerDesignation="Leadership & Human Transformation Expert"
      speakerRole="Neuroscience speaker, strategic board advisor, and executive leadership coach."
      speakerRef="TSF-RA-07"
      heroBackgroundImage="/speakers/Richie Achukwu/Dr-Richie-Achukwu-The-Speakers-Firm.jpg"
      biographyImage="/speakers/Richie Achukwu/Dr-Richie.jpg"
      bioHook="“Transforming leadership requires mapping the mind to bridge the gap between intention and ultimate execution.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="dr-richie-achukwu" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="dr-richie-achukwu" 
        customGallery={customGallery} 
        customIntroText="Neuro-leadership seminars, organizational deconfliction forums and masterclasses by Dr Richie Achukwu."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
