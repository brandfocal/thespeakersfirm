"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "ea-global-reach",
    label: "Global Stage Reach",
    subtitle: "150+ speaking engagements across 3 continents with an audience reach exceeding 200,000+"
  },
  {
    id: "ea-education",
    label: "PhD Candidate & Scholar",
    subtitle: "PhD in Corporate Sustainability (ongoing), Master's in Strategic Business Management, BCom (Hons) (UP)"
  },
  {
    id: "ea-jci-top10",
    label: "Top 10 Worldwide (JCI 2022)",
    subtitle: "Named among the Top 10 Outstanding Young Persons in the World by Junior Chamber International"
  },
  {
    id: "ea-elevate-africa",
    label: "Founder & CEO, Elevate Africa",
    subtitle: "Leading human capital and executive communication accelerator across the African continent"
  }
];

const STRATEGIC_THEMES = [
  {
    id: "high-stakes-moderation",
    number: "Theme 01",
    title: "High-Stakes Moderation & Executive Event Direction.",
    copy: "Guiding ministerial dialogues, presidential forums, and multilateral assemblies with analytical rigour, seamless improvisation, and client-centric precision."
  },
  {
    id: "corporate-sustainability",
    number: "Theme 02",
    title: "Corporate Sustainability & Strategic Communication.",
    copy: "Unpacking the intersection of sustainability frameworks, SDG compliance, and strategic stakeholder narratives for boards and enterprise leaders."
  },
  {
    id: "pan-african-leadership",
    number: "Theme 03",
    title: "Pan-African Leadership, Gender & Inclusion Dynamics.",
    copy: "Challenging conventional narratives around intersectional feminism, youth agency, and institutional culture to foster transformative social and commercial impact."
  },
  {
    id: "public-speaking-mastery",
    number: "Theme 04",
    title: "Executive Voice, Presence & Public Speaking Mastery.",
    copy: "Equipping executives, diplomats, and high-potential leaders with the rhetorical mastery, psychological composure, and stage craft needed to command rooms and mobilise action."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Elma Akob is an internationally celebrated Master of Ceremonies, keynote speaker, public speaking coach, and Pan-African thought leader. Currently pursuing her PhD in Corporate Sustainability at the University of Pretoria, Elma brings an exceptional fusion of academic rigour, evidence-based research, and charismatic stage presence to high-stakes stages worldwide. With over five years of professional experience, 150+ speaking engagements spanning three continents, and an audience reach exceeding 200,000+, she has established herself as one of the continent's most sought-after event facilitators.",
  "Her leadership journey began early: at 15, she was appointed South Africa's Youth Ambassador for the Global Volunteering Network, and by 16, represented the African continent at the Global Young Leaders Conference at the United Nations Headquarters in New York, where she was elected Chairperson of Youth UN 2016 by 169 international delegates. A Mastercard Foundation Scholar, Elma holds a Master's degree in Strategic Business Management, a BCom Honours in Communication Management, and a BCom in Commercial Law from the University of Pretoria. She served as the youngest-ever President of the Golden Key International Honour Society at her university and was named one of GradStar's Top 100 Most Employable Graduates in South Africa.",
  "As an MC and moderator, Elma operates through three foundational pillars: Analytical Thinker, Communication Strategist, and Client-Focused Partner. Prior to every engagement, she conducts exhaustive background research on industry dynamics, panellists, and institutional mandates to ensure every dialogue is substantive and outcomes-driven. Her high-profile hosting portfolio includes the B20 Sustainable Food Systems Dialogue, Transcultural Leadership Summit in Germany, Prince George’s County International Women's Day in the United States, Sentech Africa Tech Week, Public Sector Leaders Summit, The Presidency Voluntary National Review for the SDG Report, and dialogues for the African Union and United Nations.",
  "Her global accolades include being named among the Top 10 Outstanding Young Persons in the World by Junior Chamber International (JCI) in 2022, winning the Anzisha Entrepreneurship Prize, CEO of Top Youth-Owned Education Brand SA, Tshwane Women in Business Award, and the Women of Wonder Gauteng Award. Her viral TEDx talk, 'The Dangers of Western Feminism on Black African Women', has garnered over 380,000 views, sparking vital continental debates on cultural nuance, gender equity, and African self-determination.",
  "Book Elma Akob through The Speakers Firm, A Leading African Speakers Bureau, to bring intellectual depth, commanding stage presence, and flawless program moderation to your next global convention, ministerial summit, or corporate gala."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "b20", name: "B20 SUMMIT" },
  { id: "un", name: "UNITED NATIONS" },
  { id: "au", name: "AFRICAN UNION" },
  { id: "presidency", name: "THE PRESIDENCY SA" },
  { id: "standardbank", name: "STANDARD BANK" },
  { id: "jci", name: "JCI WORLDWIDE" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "ea-art-1",
      headline: "Women in Charge: Elma Akob Speaks on Intersectional Feminism & Modern Leadership",
      publication: "Glamour South Africa",
      date: "Leadership Feature",
      action: "Read Article",
      url: "https://www.glamour.co.za/lifestyle/women-in-charge/women-in-charge-elma-akob-speaks-on-intersectional-feminism-2653dbc4-7dac-40d3-a50b-ae6a72e7210d",
      image: "/speakers/Elma%20Akob/Elma-Akob-The-Speakers-Firm.jpg"
    },
    {
      id: "ea-art-2",
      headline: "In Conversation with Elma Akob: Championing Pan-African Feminism, Leadership & Global Impact",
      publication: "VOW FM 88.1 / iono.fm",
      date: "Podcast Broadcast",
      action: "Listen to Episode",
      url: "https://iono.fm/e/1553938",
      image: "/speakers/Elma%20Akob/Elma-Akob-The-Speakers-Firm2.jpg"
    },
    {
      id: "ea-art-3",
      headline: "The Dangers of Western Feminism on Black African Women with Elma Akob",
      publication: "Embrace with Annie Gichuru",
      date: "Global Feature",
      action: "Read & Listen",
      url: "https://anniegichuru.com/the-dangers-of-western-feminism-on-black-african-women-with-elma-akob/",
      image: "/speakers/Elma%20Akob/Elma-Akob-The-Speakers-Firm3.jpg"
    }
  ];

  const customVideos = [
    {
      id: "ea-vid-1",
      label: "You Don’t Need More Confidence — You Need to Use Your Voice with Elma Akob",
      youtubeId: "l_jvZFqHcMw"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Elma Akob"
      speakerTitle=""
      speakerDesignation="Award-Winning Global MC, Keynote Speaker, Public Speaking Coach & PhD Candidate"
      speakerRole="CEO of Elevate Africa Academy, Pan-African Thought Leader & Communications Strategist"
      speakerRef="TSF-EA-42"
      heroBackgroundImage="/speakers/Elma%20Akob/Elma-Akob-The-Speakers-Firm4.jpg"
      heroMobileBackgroundImage="/speakers/Elma%20Akob/Elma-Akob-The-Speakers-Firm-mobile.jpg"
      biographyImage="/speakers/Elma%20Akob/Elma-Akob-The-Speakers-Firm5.jpg"
      bioHook="“If conversations are the birthplace of action, then my role is to be the midwife, guiding them safely into clarity.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="elma-akob" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="elma-akob" 
        customIntroText="Global keynote presentations, ministerial panel moderation, and executive voice masterclasses led by Elma Akob."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
