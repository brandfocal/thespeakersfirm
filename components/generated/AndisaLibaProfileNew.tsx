"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "ceo-eyana",
    label: "CEO of Eyana Consulting",
    subtitle: "Integrating technology and sustainability to drive high-performance cultures."
  },
  {
    id: "forty-under-forty",
    label: "Forty Under 40 Africa Winner",
    subtitle: "Human Capital leader & Social Impact Award recipient."
  },
  {
    id: "women-in-tech",
    label: "Best Ally Award 2024",
    subtitle: "Women in Tech Africa Summit, represented Africa at the Global awards in Paris."
  },
  {
    id: "former-chamber-ceo",
    label: "Former CEO: Pan African Chamber of Commerce",
    subtitle: "Vocal advocate for enterprise development and job creation."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "workforce-futurism",
    number: "Theme 01",
    title: "Future of Work & ESG Talent Strategy",
    copy: "Integrating green automation, responsible digital transformation, and AI-driven workforce optimization to align human capital with ESG goals."
  },
  {
    id: "african-governance",
    number: "Theme 02",
    title: "Pan-African Leadership & Geopolitical Governance",
    copy: "Facilitating dialogues between policymakers, executives, and thought leaders to tackle enterprise development, policy, and job creation."
  },
  {
    id: "diversity-tech",
    number: "Theme 03",
    title: "Diversity, Inclusion & Women in Tech",
    copy: "Empowering women in STEM and tech sectors, championing gender mainstreaming, and mentoring future leaders through Women's Tech Connection."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Andisa Liba is a leader in human capital strategy, organisational transformation, and sustainable business practices, with over 15 years of experience across Africa. As the Chief Executive Officer at Eyana Consulting, she integrates technology and sustainability to drive high-performance cultures.",
  "A highly sought-after Pan-African moderator, Andisa has facilitated leadership dialogues in countries including Botswana, Zambia, Malawi, Eswatini, Namibia, and South Africa. She has a unique ability to bring together policymakers, executives, and thought leaders to tackle pressing socio-economic and governance challenges.",
  "As a member of the founding team of LeanIn Equity & Sustainability Sub-Saharan Africa chapter, Andisa is a strong advocate for ESG principles and green automation. She helps businesses adopt AI-driven workforce optimisation, energy-efficient operations, and responsible digital transformation.",
  "Passionate about diversity in tech, she co-founded Women’s Tech Connection to empower women in the industry and brings together leaders to address sustainability in business and technology. From driving organisational success to fostering inclusivity in tech, Andisa Liba is a catalyst for transformation—making an undeniable impact on businesses, communities, and the next generation of leaders across the continent.",
  "Recognised as one of Africa’s Most Influential Women in Digital Transformation, Andisa has received accolades including the Best Ally Award at the 2024 Women in Tech Africa Summit and represented Africa at the Global Women in Tech Awards in Paris. She continues to drive change at the intersection of leadership, innovation, and sustainability.",
  "Previously serving as CEO of the Pan African Chamber of Commerce, Andisa has been a vocal advocate for enterprise development and job creation, shaping policies that support sustainable economic growth. Andisa continues to champion leadership excellence through mentorship, coaching, and public speaking.",
  "Her influence in the leadership and tech spaces has earned her numerous accolades, including the Forty Under 40 Africa & South Africa Human Capital leader & Social Impact Award, as well as special recognition from the African Union for her contributions to human capital development.",
  "Andisa Liba was a top finalist in the inaugural Wired4Women Awards a platform aims to recognise the achievements of women working in the South African tech sector and pay it forward, opening doors for future generations. She was a finalist in the Leader of the Year Award as well as Tech for Good categories respectively. In 2024 she was nominated as a finalist in the Gender Mainstream Awards under the category Inclusive Leader & Positive Role Model. Andisa Liba is not only a leader in her field but also a true pioneer driving social change through innovation and empowerment."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "eyana", name: "EYANA CONSULTING" },
  { id: "pan-african-chamber", name: "PAN AFRICAN CHAMBER OF COMMERCE" },
  { id: "african-union", name: "AFRICAN UNION" },
  { id: "women-in-tech", name: "WOMEN IN TECH" }
];

const customMedia = [
  {
    id: "andisa-art-1",
    headline: "SADGT: Andisa Liba, Visionary Leader in Human Capital and social impact.",
    publication: "Omny FM",
    date: "",
    url: "https://omny.fm/shows/evening-show/sadgt-andisa-liba-visionary-leader-in-human-capita#description",
    action: "Listen to Interview",
    image: "/speakers/Andisa Liba/Andisa-Liba-The-Speakers-Firm-2.jpg"
  },
  {
    id: "andisa-art-2",
    headline: "The female workplace experience",
    publication: "People Factor",
    date: "",
    url: "https://peoplefactor.co.za/the-female-workplace-experience/",
    action: "Read Article",
    image: "/speakers/Andisa Liba/Andisa-Liba-The-Speakers-Firm-4.jpg"
  },
  {
    id: "andisa-art-3",
    headline: "Andisa Liba: A catalyst, connector and storyteller",
    publication: "CHRO SA",
    date: "",
    url: "https://chro.co.za/articles/andisa-liba-a-catalyst-connector-and-storyteller/",
    action: "Read Article",
    image: "/speakers/Andisa Liba/Andisa-Liba-The-Speakers-Firm-8.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Andisa Liba"
      speakerTitle=""
      speakerDesignation="CEO of Eyana Consulting, Human Capital Leader & Workforce Futurist"
      speakerRole="Driving future-fit talent strategies and shaping the evolution of work across Africa."
      speakerRef="TSF-AL-04"
      heroBackgroundImage="/speakers/Andisa Liba/Andisa-Liba-The-Speakers-Firm.jpg"
      biographyImage="/speakers/Andisa Liba/Andisa-Liba-The-Speakers-Firm-3.jpg"
      bioHook="“Integrating technology, ESG principles, and human capital to build high-performance, future-ready cultures.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="andisa-liba" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="andisa-liba" 
        customIntroText="Moments from Andisa Liba's Pan-African moderator panels, tech summits, and leadership keynotes."
        customVideos={[
          {
            id: "andisa-video-1",
            label: "Andisa Liba Experience Reel",
            youtubeId: "P9n8wlcIk5E"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
