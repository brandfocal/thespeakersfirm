"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "knn-founder",
    label: "Founder & MD, KNN Media",
    subtitle: "Leading independent African media production and storytelling platforms."
  },
  {
    id: "autism-advocate",
    label: "Autism Advocate",
    subtitle: "Committed voice for neurodiversity, inclusion, and special needs parenting."
  },
  {
    id: "tv-presenter",
    label: "Broadcaster & Presenter",
    subtitle: "Over a decade of high-profile TV hosting and digital storytelling."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "african-media-future",
    number: "Theme 01",
    title: "The Future of African Media.",
    copy: "Building sustainable media enterprises and storytelling frameworks that drive representation and shape culture across Africa."
  },
  {
    id: "resilience-purpose",
    number: "Theme 02",
    title: "Resilience, Identity & Reinvention.",
    copy: "Navigating personal and professional transitions, soft power, and using emotional intelligence to lead authentically."
  },
  {
    id: "autism-inclusion",
    number: "Theme 03",
    title: "Autism & Inclusive Communities.",
    copy: "Driving awareness, inclusion, and representation for neurodivergent children and families in African societies."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Kayise Ngqula is a South African media executive & producer, broadcaster, speaker and entrepreneur with over a decade of experience across television, digital media, communications and brand storytelling.",
  "Known for her authenticity, emotional intelligence and commanding presence, she has evolved from one of South Africa’s most recognisable television personalities into a respected voice in media leadership, culture shaping and women’s empowerment.",
  "As the Founder of KNN Media and KNN Network, Kayise is passionate about building impactful African media platforms and conversations that shape culture, drive representation and create meaningful social impact. Beyond media, she is also a growing advocate for autism awareness and inclusive parenting conversations, inspired by her journey as a mother raising a child on the autism spectrum."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "knn", name: "KNN MEDIA" },
  { id: "iol", name: "IOL NEWS" },
  { id: "news24", name: "NEWS24" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "kayise-art-1",
      headline: "Kayise Ngqula on Healing, Purpose & Rising After Loss",
      publication: "YouTube Interview",
      date: "2024",
      action: "Watch Interview",
      url: "https://www.youtube.com/watch?v=U3Vbffk_nUE",
      image: "/speakers/Kayise Ngcula/Kayise-Ngcula-The-Speakers-Firm.jpg"
    },
    {
      id: "kayise-art-2",
      headline: "Kayise Ngqula returns with season 2 of her popular YouTube show, 'After Dark'",
      publication: "Sunday Tribune",
      date: "21 Aug 2024",
      action: "Read Article",
      url: "https://iol.co.za/sunday-tribune/entertainment/2024-08-21-kayise-ngqula-returns-with-season-2-of-her-popular-youtube-show-after-dark/",
      image: "/speakers/Kayise Ngcula/Kayise-Ngcula-The-Speakers-Firm2.jpg"
    },
    {
      id: "kayise-art-3",
      headline: "Kayise Ngqula shines bright as she talks healing, growth, and new beginnings",
      publication: "News24",
      date: "24 Aug 2024",
      action: "Read Interview",
      url: "https://www.news24.com/life/arts-and-entertainment/celebrities/kayise-ngqula-shines-bright-as-she-talks-healing-growth-and-new-beginnings-in-all-new-after-dark-20240824",
      image: "/speakers/Kayise Ngcula/Kayise-Ngcula-The-Speakers-Firm3.jpg"
    }
  ];

  const customVideos = [
    {
      id: "kayise-vid-1",
      label: "Kayise Ngqula - Access Genie Interview on Healing & Purpose",
      youtubeId: "C84PrwHhchE"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Kayise Ngqula"
      speakerTitle=""
      speakerDesignation="Media Executive, Broadcaster & Autism Advocate"
      speakerRole="Founder & MD of KNN Media, television producer, and advocate for neurodiversity."
      speakerRef="TSF-KN-04"
      heroBackgroundImage="/speakers/Kayise Ngcula/Kayise-Ngcula-The-Speakers-Firm7.jpg"
      biographyImage="/speakers/Kayise Ngcula/Kayise-Ngcula-The-Speakers-Firm4.jpg"
      bioHook="“Reinvention is not about changing who you are; it is about uncovering your true purpose and alignment.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="kayise-ngqula" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="kayise-ngqula" 
        customGallery={[]} 
        customIntroText="Broadcasting, executive moderation and advocacy panel keynotes by Kayise Ngqula."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
