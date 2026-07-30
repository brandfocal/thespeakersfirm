"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "hesed-founder",
    label: "Founder Hesed Consulting",
    subtitle: "Pan-African human capital and coaching firm with global presence."
  },
  {
    id: "career-coach",
    label: "Global Career Coach",
    subtitle: "Specializes in leadership development and women empowerment."
  },
  {
    id: "young-achiever",
    label: "40 Under 40 Business Icon",
    subtitle: "Featured in Mail & Guardian’s Top 200 Young South Africans."
  },
  {
    id: "un-nominee",
    label: "UN 50 Under 50 Nominee",
    subtitle: "Among top female founders in Middle East & Africa."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "leadership-career-growth",
    number: "Theme 01",
    title: "Leadership Development & Career Strategy",
    copy: "Dr. Msweli partners with companies like Google, Vodacom, Investec, and ABSA to equip professionals with career advancement and leadership tools."
  },
  {
    id: "financial-literacy-empowerment",
    number: "Theme 02",
    title: "Financial Literacy & Women Empowerment",
    copy: "Delivering powerful keynotes on economic empowerment, building diverse workforces, and strategic leadership acceleration."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr. Vumile Msweli is the founder of Hesed Consulting, a Pan-African human capital and coaching firm with operations across Botswana, Kenya, South Africa, Rwanda, Nigeria, and the United States. Dr. Vumile Msweli is an experienced career and executive coach specializing in leadership development, career growth, financial literacy, and women empowerment.",
  "Dr. Vumile Msweli has partnered with global organisations, including Google, Vodacom, Investec, ABSA, Barclays, and Bidvest Bank, helping professionals and teams unlock their potential and thrive in competitive environments. Dr. Vumile Msweli has addressed international platforms like the African Union and the Women’s Economic Forum.",
  "Professional Summary Recognised for her leadership and impact, Dr. Vumile Msweli has been named among the UN 50 under 50 Female Founders in the Middle East and Africa, Africa’s 40 Under 40 Business Icons, and Mail & Guardian’s Top 200 Young South Africans. Dr. Vumile Msweli has also been celebrated as CEO Magazine’s Pan-African Business Woman.",
  "Dr. Vumile Msweli’s thought-provoking talks and transformative coaching empower individuals to develop financial literacy, leadership skills, and career strategies. Dr. Vumile Msweli’s work extends to the Africa Career Summit, a platform endorsed by the African Union, fostering professional growth and networking among African talent.",
  "With a presence across Africa and the United States, Dr. Vumile Msweli continues to drive meaningful change by equipping professionals with actionable tools to achieve personal and organisational success.",
  "With extensive experience in telecommunications and finance, Vumile has led teams across Africa, the Middle East, Asia, and Europe. Through Hesed Consulting, she drives meaningful change, empowering individuals and businesses to achieve sustainable success."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "hesed-consulting", name: "HESED CONSULTING" },
  { id: "african-union", name: "AFRICAN UNION" },
  { id: "google", name: "GOOGLE" },
  { id: "bidvest", name: "BIDVEST BANK" }
];

const customMedia = [
  {
    id: "vumile-media-1",
    headline: "Bidvest Bank’s Mmamollo Programme drives female empowerment",
    publication: "Startup Magazine",
    date: "",
    url: "https://startupmag.co.za/2024/08/bidvest-banks-mmamollo-programme-drives-female-empowerment/",
    action: "Read Article",
    image: "/speakers/Vumile%20Msweli/Dr-Vumile-Msweli-The-Speakers-Firm-2.jpg"
  },
  {
    id: "vumile-media-2",
    headline: "Vumile Msweli: ‘Career Success for me is driven by two things having the right strategy and having the right team.’",
    publication: "Her Network",
    date: "",
    url: "https://www.hernetwork.co/vumile-msweli-career-success-for-me-is-driven-by-two-things-having-the-right-strategy-and-having-the-right-team/",
    action: "Read Article",
    image: "/speakers/Vumile%20Msweli/Dr-Vumile-Msweli-The-Speakers-Firm-3.jpg"
  },
  {
    id: "vumile-media-3",
    headline: "CEO Conversations | Dr. Vumile Msweli, South Africa",
    publication: "YouTube",
    date: "",
    url: "https://www.youtube.com/watch?v=ppNSTUMKG7Q",
    action: "Watch Video",
    image: "/speakers/Vumile%20Msweli/update/vumile-msweli-the-speakers-firm-2.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Vumile Msweli"
      speakerTitle="Dr."
      speakerDesignation="Internationally Acclaimed Inspirational Speaker, Global Career Coach & Human Capital Strategist"
      speakerRole="Human Capital Strategist."
      speakerRef="TSF-VM-22"
      heroBackgroundImage="/speakers/Vumile%20Msweli/Dr-Vumile-Msweli-The-Speakers-Firm.jpg"
      biographyImage="/speakers/Vumile%20Msweli/Dr-Vumile-Msweli-The-Speakers-Firm-7.jpg"
      bioHook="“Career success requires having the right strategy and having the right team.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="dr-vumile-msweli" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="dr-vumile-msweli" 
        customVideos={[
          {
            id: "vumile-video-1",
            label: "Experience Reel",
            youtubeId: "3-uM8GUFhSA"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
