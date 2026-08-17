"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "jm-founder",
    label: "Founder of Men of Purpose (MOP)",
    subtitle: "Built a transformative movement to redefine masculine identity and character."
  },
  {
    id: "jm-voice",
    label: "Culture Change Advocate",
    subtitle: "Challenges outdated narratives of manhood and drives positive male wellness dialogues."
  },
  {
    id: "jm-speaker",
    label: "International Guest Speaker",
    subtitle: "Delivers keynotes globally on faith-based leadership, family restoration, and accountability."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "identity-restoration",
    number: "Theme 01",
    title: "Men’s Identity & Cultural Restoration.",
    copy: "Constructing healthy identities, addressing silent traumas, and rebuilding self-worth in men."
  },
  {
    id: "authentic-leadership",
    number: "Theme 02",
    title: "Authentic Leadership & Accountability.",
    copy: "Equipping men to lead families and organizations with vulnerability, empathy, and integrity."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Joshua Makukule Mtanyelwa is a passionate men’s identity advocate, inspirational speaker, and founder of Men of Purpose (MOP), a transformative movement redefining what it means to be a man in today’s world. As one of South Africa’s top inspirational speakers on purpose, healing, and leadership, he is celebrated for his powerful message of transformation, accountability, and authentic manhood.",
  "A leading South African voice on men’s identity and culture change, Joshua challenges outdated narratives of manhood and equips men to lead with empathy, emotional intelligence, and integrity. His keynotes move beyond motivation, they shift culture, restore confidence, and ignite leadership from the inside out.",
  "A gifted communicator and community transformer, Joshua’s work bridges the worlds of faith, leadership, and healing. Through Men of Purpose, he has built safe spaces for men to reflect, rebuild, and re-engage, turning vulnerability into strength and silence into leadership. His talks resonate across corporate platforms, youth summits, community dialogues, and faith-based gatherings.",
  "Aligned with The Speakers Firm’s philosophy of curating internationally acclaimed keynote speakers who activate transformation across strategy, culture, and legacy, Joshua Makukule Mtanyelwa inspires audiences to embrace authenticity, accountability, and legacy in family and nation building.",
  "Book Joshua Makukule Mtanyelwa through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to bring inspirational keynote addresses, men's identity dialogues, and family leadership masterclasses to your next corporate or community event."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "menofpurpose", name: "MEN OF PURPOSE" },
  { id: "faithministries", name: "FAITH MINISTRIES" },
  { id: "covenantmedia", name: "COVENANT MEDIA" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "mtanyelwa-art-1",
      headline: "Ps Joshua Mtanyelwa – A dislocated heart",
      publication: "YouTube / Faith Ministries",
      date: "2024",
      action: "Watch Message",
      url: "https://www.youtube.com/watch?v=H-ZehyLdiwE",
      image: "/speakers/Joshua Makukule Mtanyelwa/Joshua-Makukule-Mtanyelwa-The-Speakers-Firm-2.jpg"
    },
    {
      id: "mtanyelwa-art-2",
      headline: "Main Service – Cross over to the other side",
      publication: "YouTube / Covenant Media",
      date: "2023",
      action: "Watch Sermon",
      url: "https://www.youtube.com/watch?v=dPUX41qkDdk",
      image: "/speakers/Joshua Makukule Mtanyelwa/Joshua-Makukule-Mtanyelwa-The-Speakers-Firm.jpg"
    }
  ];

  const customVideos = [
    {
      id: "mtanyelwa-vid-1",
      label: "Pastor Joshua Mtanyelwa on Spiritual Accountability & Purpose",
      youtubeId: "aHcjYxFpMe8"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Joshua Makukule Mtanyelwa"
      speakerTitle=""
      speakerDesignation="Men's Identity Advocate & Keynote Speaker"
      speakerRole="Founder of Men of Purpose (MOP)"
      speakerRef="TSF-JM-46"
      heroBackgroundImage="/speakers/Joshua Makukule Mtanyelwa/Joshua-Makukule-Mtanyelwa-The-Speakers-Firm-hero.jpg"
      biographyImage="/speakers/Joshua Makukule Mtanyelwa/Joshua-Makukule-Mtanyelwa-The-Speakers-Firm-bio.jpg"
      bioHook="“Redefining manhood, deconstructing outdated gender narratives, and transforming vulnerability into authentic leadership strength.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="joshua-makukule-mtanyelwa" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="joshua-makukule-mtanyelwa" 
        customIntroText="Faith-based motivation keynotes, masculine wellness dialogues, and youth leadership seminars led by Joshua Makukule Mtanyelwa."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
