"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "km-charisma",
    label: "Founder of Charisma Life Tabernacle",
    subtitle: "Senior Pastor leading an apostolic and prophetic ministry in Pretoria."
  },
  {
    id: "km-kairos",
    label: "Leader of Kairos Apostolic Network",
    subtitle: "Oversees Kairos Apostolic Relationship (KAR), a covenant network of over 40 churches."
  },
  {
    id: "km-educator",
    label: "International Ministry Educator",
    subtitle: "Regular lecturer on biblical interpretation, contentment theology, and spiritual leadership."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "spiritual-masculinity",
    number: "Theme 01",
    title: "Spiritual Masculinity & Family.",
    copy: "Redefining male leadership, covenant relationships, and moral accountability within the home and community."
  },
  {
    id: "theology-worship",
    number: "Theme 02",
    title: "Revelation Knowledge & Hermeneutics.",
    copy: "Teaching the art of biblical interpretation and prioritizing contentment over covetousness in modern lifestyles."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Apostle Kabelo J. Moroke is the visionary and founder of Charisma Life Tabernacle, an apostolic and prophetic ministry, and Kairos Apostolic Relationship, which is a network of over 40 churches. Residing in Pretoria, Gauteng, South Africa, Kabelo is married to Nompumelelo Moroke, and together they lead a dynamic spiritual community focused on spiritual transformation and empowerment.",
  "With an apostolic and prophetic calling confirmed by various seasoned servants of God, Apostle Moroke has dedicated his life to equipping church leaders, fostering community accountability, and redefining positive masculinity in faith-based spaces. His ministries focus on spiritual maturity, family alignment, and ethical leadership.",
  "A respected educator and theologian, Apostle Moroke is also known for his teaching on biblical hermeneutics, worship theology, and the principles of contentment over covetousness. Those who have sat under his ministry testify of his deep commitment to revelation knowledge and practical spiritual execution that transforms both individuals and organizations.",
  "Book Apostle Kabelo J. Moroke through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to bring inspirational spiritual keynotes, leadership development teachings, and family alignment seminars to your next conference or event."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "charisma", name: "CHARISMA LIFE TABERNACLE" },
  { id: "kairos", name: "KAIROS APOSTOLIC RELATIONSHIP" },
  { id: "wordlife", name: "WORD AND LIFE SCHOOL OF MINISTRY" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "moroke-art-1",
      headline: "Kabelo Moroke: Revelation Knowledge as a Key to Worship",
      publication: "YouTube / Charisma Life Media",
      date: "2024",
      action: "Watch Message",
      url: "https://www.youtube.com/watch?v=CYtInq5JZV4",
      image: "/speakers/Apostle Kabelo J. Moroke/Apostle-Kabelo-J-Moroke-The-Speakers-Firm-3.jpg"
    },
    {
      id: "moroke-art-2",
      headline: "Kabelo Moroke: Contentment vs. Covetousness",
      publication: "YouTube",
      date: "2024",
      action: "Watch Sermon",
      url: "https://www.youtube.com/watch?v=knCs255BzhU",
      image: "/speakers/Apostle Kabelo J. Moroke/Apostle-Kabelo-J-Moroke-The-Speakers-Firm-4.jpg"
    },
    {
      id: "moroke-art-3",
      headline: "Apostle Kabelo Moroke: Art of Bible Interpretation",
      publication: "Word and Life International School of Ministry",
      date: "2025",
      action: "Watch Teaching",
      url: "https://www.youtube.com/watch?v=xkeMkzjWedU",
      image: "/speakers/Apostle Kabelo J. Moroke/Apostle-Kabelo-J-Moroke-The-Speakers-Firm-5.jpg"
    }
  ];

  const customVideos = [
    {
      id: "moroke-vid-1",
      label: "Apostle Kabelo J. Moroke on Spiritual Masculinity & Ministry",
      youtubeId: "Q2N8VuVkOBo"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Apostle Kabelo J. Moroke"
      speakerTitle=""
      speakerDesignation="Apostolic & Prophetic Leader"
      speakerRole="Founder of Charisma Life Tabernacle"
      speakerRef="TSF-KM-37"
      heroBackgroundImage="/speakers/Apostle Kabelo J. Moroke/Apostle-Kabelo-J-Moroke-The-Speakers-Firm.jpg"
      biographyImage="/speakers/Apostle Kabelo J. Moroke/Apostle-Kabelo-J-Moroke-The-Speakers-Firm-7.jpg"
      bioHook="“Redefining faith-based leadership, community accountability, and positive spiritual masculinity to guide a new generation of believers.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="apostle-kabelo-j-moroke" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="apostle-kabelo-j-moroke" 
        customIntroText="Theological seminars, spiritual leadership masterclasses, and covenant masculinity workshops led by Apostle Kabelo J. Moroke."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
