"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "exxaro-ceo",
    label: "Former CEO Exxaro Resources",
    subtitle: "Led one of SA's top mining and renewable energy firms."
  },
  {
    id: "large-scale-capex",
    label: "R17B+ Capex Managed",
    subtitle: "Spearheaded massive investment programs with 25% average ROCE."
  },
  {
    id: "esg-champion",
    label: "ESG & Carbon Neutrality Lead",
    subtitle: "Positioned Exxaro for carbon neutrality by 2050."
  },
  {
    id: "linyathelo-founder",
    label: "L'inyathelo Founder",
    subtitle: "Empowering purpose-driven leadership and human capital development."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "value-creation-esg",
    number: "Theme 01",
    title: "Transformational Value Creation and ESG Strategy",
    copy: "Dr. Nombasa Tsengwa shares battle-tested strategies for leading large-scale investments, future-facing resource diversification, and integrating sustainability goals with bottom-line growth."
  },
  {
    id: "purpose-driven-leadership",
    number: "Theme 02",
    title: "Purpose-Driven Leadership & Human Capital Potential",
    copy: "Believing in harnessing unique human DNA to unlock organic organizational energy. Dr. Tsengwa guides executives on building resilience, organizational courage, and leading beyond profit."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr Nombasa Tsengwa believes in harnessing each person’s unique DNA to generate organic energy that empowers them to reach their full potential. This belief has been at the heart of her leadership journey and continues to guide her today.",
  "With over two decades at Exxaro Resources, Dr Nombasa Tsengwa had the privilege of playing a central role in shaping one of South Africa’s leading mining and renewable energy companies. As CEO and in previous roles, including Executive Head of Coal Operations and MD of Minerals, she led strategic investments exceeding R17 billion and helped achieve an average ROCE of 25% since 2017. She spearheaded Exxaro’s diversification into future-facing commodities such as copper and manganese, aligning with the company’s Sustainable Growth and Impact Strategy and its ambition to achieve carbon neutrality by 2050. Under her leadership, Exxaro ranked among the JSE’s top 5 performers and expanded its operational and geographical footprint, becoming a model for transformation, innovation, and value creation.",
  "These experiences shaped her thinking about what true, lasting impact requires – resilience, courage, vision, and a commitment to a purpose beyond profit. They also prepared her for her next chapter: L’inyathelo.",
  "Dr Nombasa Tsengwa founded L’inyathelo in 2024, a name that means “the step” in isiXhosa. For her, it truly represents the bold step she felt called to take. She created a private investment and strategic advisory platform shaped by her deep belief in transformative, values-based leadership. This step was her response to what she sees as an urgent need across public organisations, the private sector, and our continent: leadership grounded in integrity, purpose, and the promise of shared prosperity.",
  "L’inyathelo was born out of deep reflection. She thought about her journey as a rural girl finding her way in the world, the leadership challenges she has navigated over the past 30 years, and her hopes for Africa’s future. Our continent is rich with potential but too often held back by deep inequalities. She believes that the most significant investment we can make, the step that truly matters, is in nurturing visionary, organic leadership and building resilient ecosystems that honour and are rooted in our unique African DNA.",
  "In this new role, she will oversee strategic direction, mentor leaders, and guide initiatives that bridge inner growth with outer impact. Together, she believes we can co-create a leadership culture in which authentic, values-driven leadership shapes Africa’s future."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "exxaro", name: "EXXARO RESOURCES" },
  { id: "linyathelo", name: "L'INYATHELO" },
  { id: "forbes-africa", name: "FORBES AFRICA" },
  { id: "mining-review", name: "MINING REVIEW AFRICA" }
];

const customMedia = [
  {
    id: "nombasa-media-1",
    headline: "Leadership Profile: Nombasa Tsengwa",
    publication: "Mining Review Africa",
    date: "N/A",
    url: "https://www.miningreview.com/magazine-article/leadership-profile-nombasa-tsengwa-exxaro-resources/",
    action: "Read Article",
    image: "/speakers/Nombasa%20Tsengwa/Nombasa-Tsengwa-The-Speakers-Firm-5.jpg"
  },
  {
    id: "nombasa-media-2",
    headline: "Natural Fit: South African Mining CEO On Influential Leadership",
    publication: "Forbes Africa",
    date: "2022-08-22",
    url: "https://www.forbesafrica.com/corporate-speak/2022/08/22/natural-fit-south-african-mining-ceo-on-influential-leadership",
    action: "Read Article",
    image: "/speakers/Nombasa%20Tsengwa/Nombasa-Tsengwa-The-Speakers-Firm-6.jpg"
  },
  {
    id: "nombasa-media-3",
    headline: "Exxaro names Nombasa Tsengwa CEO designate",
    publication: "Sowetan Live",
    date: "2021-03-18",
    url: "https://www.sowetanlive.co.za/business/2021-03-18-exxaro-names-nombasa-tsengwa-ceo-designate/",
    action: "Read Article",
    image: "/speakers/Nombasa%20Tsengwa/Nombasa-Tsengwa-The-Speakers-Firm-8.jpg"
  }
];

const customGallery = [
  {
    id: "nombasa-gal-1",
    src: "/speakers/Nombasa%20Tsengwa/Nombasa-Tsengwa-The-Speakers-Firm-11.jpg",
    alt: "Dr Nombasa Tsengwa keynote speaker",
    caption: "Addressing industry summit",
    className: "sm:col-span-2 lg:col-span-2"
  },
  {
    id: "nombasa-gal-2",
    src: "/speakers/Nombasa%20Tsengwa/Nombasa-Tsengwa-The-Speakers-Firm-7.png",
    alt: "Dr Nombasa Tsengwa panelist",
    caption: "Strategic advisory panel session",
    className: ""
  },
  {
    id: "nombasa-gal-3",
    src: "/speakers/Nombasa%20Tsengwa/Nombasa-Tsengwa-The-Speakers-Firm-9.jpg",
    alt: "Dr Nombasa Tsengwa speaking engagement",
    caption: "Values-based leadership keynote",
    className: ""
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Nombasa Tsengwa"
      speakerTitle="Dr."
      speakerDesignation="Former CEO Exxaro Resources & Performance Champion"
      speakerRole="Executive mining authority, sustainability champion, and value creation strategist."
      speakerRef="TSF-NT-13"
      heroBackgroundImage="/speakers/Nombasa%20Tsengwa/Nombasa-Tsengwa-The-Speakers-Firm-10.jpg"
      heroImagePosition="object-[center_20%]"
      biographyImage="/speakers/Nombasa%20Tsengwa/Nombasa-Tsengwa-The-Speakers-Firm-4.jpg"
      bioHook="“Harnessing each person's unique DNA to generate organic energy and value.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="nombasa-tsengwa" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="nombasa-tsengwa" 
        customGallery={customGallery}
        customIntroText="Snapshots from Dr. Nombasa Tsengwa's keynotes, executive summits, and corporate leadership milestones."
        customVideos={[
          {
            id: "nombasa-video-1",
            label: "Experience Reel",
            youtubeId: "zGraCnVOp3A"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
