"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "ignite-potential-founder",
    label: "Founder, Ignite My Potential",
    subtitle: "Human development organization specializing in leadership transformation and personal mastery."
  },
  {
    id: "fin-services-vet",
    label: "Financial Services Veteran",
    subtitle: "Led divisions at Old Mutual, Sanlam, Discovery, Liberty Active, and Allan Gray."
  },
  {
    id: "global-consultant",
    label: "Global Transformation Consultant",
    subtitle: "Advised Standard Bank, DStv, SuperSport, and African governments."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "identity-leadership",
    number: "Theme 01",
    title: "Identity-Driven Leadership.",
    copy: "Redefining leadership by shifting focus from external circumstances to core internal identity and authenticity."
  },
  {
    id: "igniting-potential",
    number: "Theme 02",
    title: "Igniting Human Potential.",
    copy: "Overcoming fear and pain, using personal mastery and emotional intelligence to drive corporate and individual alignment."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "At The Speakers Firm, we proudly represent Max Moyo, an internationally acclaimed Human Transformation Coach, Brand Internalisation Specialist, and Leadership Speaker whose life’s work is dedicated to igniting human potential and redefining purpose driven leadership. A powerful storyteller and strategist, Max combines emotional intelligence, behavioural insight, and business acumen to help individuals and organisations awaken their deepest potential and lead from identity, not circumstance.",
  "Driven by a profound yearning for mental emancipation and a lifelong passion for people, Max founded Ignite My Potential, a human development organisation focused on leadership transformation, personal mastery, and authentic engagement. Through his dynamic keynotes, coaching programmes, and executive facilitation, he equips leaders and teams to embrace their unique identity, harness their strengths, and unlock sustainable success from the inside out.",
  "Before becoming a global transformation voice, Max built a distinguished career in financial services, serving in leadership roles at Old Mutual, Sanlam Life, Discovery Health, Liberty Active, and Allan Gray Limited. His corporate experience gave him a deep understanding of organisational behaviour, leadership psychology, and cultural alignment, insights that now underpin his groundbreaking work in leadership and human capital development.",
  "As a sought after speaker and consultant, Max has partnered with prestigious organisations including Standard Bank, SuperSport, DStv, the Law Association of Zambia, and the Guardian Life Group (Jamaica), as well as various governments and institutions across Africa and the diaspora. His work transcends motivation, it is a call to consciousness, courage, and clarity of purpose.",
  "Through his bestselling books, keynote addresses, and corporate interventions, Max Moyo continues to inspire a movement of leaders who choose authenticity over conformity and transformation over transaction.",
  "Book Max Moyo through The Speakers Firm, A Leading African Speakers Bureau, to bring transformational insight, purpose driven leadership, and authentic inspiration to your next corporate retreat, leadership summit, or personal development engagement."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "allangray", name: "ALLAN GRAY" },
  { id: "oldmutual", name: "OLD MUTUAL" },
  { id: "sanlam", name: "SANLAM" }
];

const BOOKS = [
  {
    id: "who-moved-my-ladder",
    title: "Who Moved My Ladder",
    description: "A thought-provoking framework on career transformation, urging professionals to align their work with their true identity and values.",
    coverImage: "/speakers/Max Moyo/Max-Moyo-Who-Moved-My-Ladder.jpg",
    url: "https://www.maxmoyo.co.za/index.php?route=product/product&path=57&product_id=51"
  },
  {
    id: "become-yourself",
    title: "Become Yourself",
    description: "Unpacking the roadmap to self-discovery, identity transformation, and achieving personal mastery from the inside out.",
    coverImage: "/speakers/Max Moyo/Max-Moyo-Become-Yourself.jpg",
    url: "https://www.maxmoyo.co.za/index.php?route=product/product&path=57&product_id=52"
  },
  {
    id: "8th-wonders",
    title: "The 8th Wonders of the World",
    description: "Exploring the untapped potential within human consciousness and the keys to unlocking authentic, purpose-driven impact.",
    coverImage: "/speakers/Max Moyo/Max-Moyo-The-8th-Wonders-of-the-World.jpg",
    url: "https://www.maxmoyo.co.za/index.php?route=product/product&path=57&product_id=50"
  }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "moyo-art-1",
      headline: "I WILL NOT DIE A LIFE I HAVEN’T LIVED",
      publication: "Ignite My Potential",
      date: "2023",
      action: "Watch Address",
      url: "https://www.youtube.com/watch?v=kJB8HoE1tP4",
      image: "/speakers/Max Moyo/Max-Moyo-The-Speakers-Firm-2.jpg"
    },
    {
      id: "moyo-art-2",
      headline: "How I Managed Pain, Loss & Still Kept My Faith",
      publication: "OfficialMaxMoyo Broadcast",
      date: "2023",
      action: "Watch Testimony",
      url: "https://www.youtube.com/watch?v=HKeyslUB6tY",
      image: "/speakers/Max Moyo/Max-Moyo-The-Speakers-Firm3.jpg"
    },
    {
      id: "moyo-art-3",
      headline: "How I turned my pain into gain",
      publication: "Max Moyo Insights",
      date: "2023",
      action: "Watch Video",
      url: "https://www.youtube.com/watch?v=IoAs0kX7A2I",
      image: "/speakers/Max Moyo/Max-Moyo-The-Speakers-Firm4.jpg"
    }
  ];

  const customVideos = [
    {
      id: "moyo-vid-1",
      label: "Max Moyo Keynote Presentation",
      youtubeId: "u0TM0Q_iDVc"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Max Moyo"
      speakerTitle=""
      speakerDesignation="Transformation Specialist & Author"
      speakerRole="Founder and CEO – Ignite My Potential"
      speakerRef="TSF-MM-27"
      heroBackgroundImage="/speakers/Max Moyo/Max-Moyo-The-Speakers-Firm7.jpg"
      biographyImage="/speakers/Max Moyo/Max-Moyo-The-Speakers-Firm.jpg"
      bioHook="“Igniting human potential and redefining purpose-driven leadership. Awakening deepest potential to lead from identity, not circumstance.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={BOOKS}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="max-moyo" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="max-moyo" 
        customIntroText="Purpose-driven leadership masterclasses, brand internalisation seminars, and identity coaching retreats led by Max Moyo."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
