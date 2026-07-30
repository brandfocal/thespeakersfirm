"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "alchemy-ceo",
    label: "CEO Alchemy Inspiration",
    subtitle: "Pioneering creative innovation and design thinking."
  },
  {
    id: "academic-background",
    label: "BSc, MBA, PhD",
    subtitle: "PhD in Business Management from UCT, BSc Computer Science & Stats."
  },
  {
    id: "wlw-member",
    label: "20 Women Leaders of the World",
    subtitle: "Selected globally and serving on the WLW Council."
  },
  {
    id: "innovation-award",
    label: "Social Innovation Leadership Award",
    subtitle: "Recognized as a global leader in creativity and social impact."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "design-thinking",
    number: "Theme 01",
    title: "Design Thinking & Innovation Catalysis",
    copy: "Dr. Puleng brings 20 years of experience across government and private sectors, driving creative methodologies to solve complex business problems."
  },
  {
    id: "project-artistry",
    number: "Theme 02",
    title: "The Project Artistry Framework",
    copy: "Utilizing artistic expression, creative thinking, and future strategies to optimize executive education and strategic change."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr. Puleng is the CEO of the Alchemy Inspiration. She has a passion for creativity, design thinking and innovation. She has twenty years of experience working in the private sector, government and in higher educational institutions. She is a mother of two children, and wife of one and a sister of three. Her academic background entails a BSc in Computer Science and Statistics, an MBA and a PhD in Business Management from the University of Cape Town. Her international peers have recognised Makhoalibe as a global leader in creativity and innovation.",
  "In 2013, she received an award recognising her contribution to the international community of innovators and creatives. In 2016, she received an Africa Social Innovation Leardership Award. In 2019, she was selected as one of the twenty women leaders of the world (WLW) has now joined the WLW council. She is a speaker, panelist, facilitator, consultant locally and internationally and a published author."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "alchemy-inspiration", name: "ALCHEMY INSPIRATION" },
  { id: "uct", name: "UNIVERSITY OF CAPE TOWN" },
  { id: "henley-sa", name: "HENLEY BUSINESS SCHOOL SA" },
  { id: "wlw-council", name: "WLW COUNCIL" }
];

const customMedia = [
  {
    id: "puleng-media-1",
    headline: "Dr. Puleng Makhoalibe – Founder of Alchemy Inspiration",
    publication: "CIO Views",
    date: "",
    url: "https://cioviews.com/dr-puleng-makhoalibe-founder-of-alchemy-inspiration/",
    action: "Read Article",
    image: "/speakers/Puleng%20Mokhoalibe/Dr-Puleng-Mokhoalibe-The-Speakers-Firm-4.jpg"
  },
  {
    id: "puleng-media-2",
    headline: "Force of nature",
    publication: "Henley Business School SA Blog",
    date: "",
    url: "https://blog.henleysa.ac.za/force-of-nature",
    action: "Read Article",
    image: "/speakers/Puleng%20Mokhoalibe/Dr-Puleng-Mokhoalibe-The-Speakers-Firm-5.jpg"
  },
  {
    id: "puleng-media-3",
    headline: "Using The Project Artistry Framework To Optimise Executive Education",
    publication: "Henley Business School SA Research",
    date: "",
    url: "https://blog.henleysa.ac.za/research/project-artistry-framework-to-optimise-executive-education_dr-puleng-makhoalibe",
    action: "Read Article",
    image: "/speakers/Puleng%20Mokhoalibe/Dr-Puleng-Mokhoalibe-The-Speakers-Firm-6.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Puleng Mokhoalibe"
      speakerTitle="Dr."
      speakerDesignation="The Innovation Catalyst, Design Thinking & Future Strategy Specialist"
      speakerRole="The Innovation Catalyst."
      speakerRef="TSF-PM-24"
      heroBackgroundImage="/speakers/Puleng%20Mokhoalibe/Dr-Puleng-Mokhoalibe-The-Speakers-Firm-7.jpg"
      biographyImage="/speakers/Puleng%20Mokhoalibe/Dr-Puleng-Mokhoalibe-The-Speakers-Firm-3.jpg"
      bioHook="“We cannot rely solely on logic to solve complex problems in times of change.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="dr-puleng-mokhoalibe" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="dr-puleng-mokhoalibe" 
        customVideos={[
          {
            id: "puleng-video-1",
            label: "Experience Reel",
            youtubeId: "CRAr3m7IL8I"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
