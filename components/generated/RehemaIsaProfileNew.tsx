"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "strategy-facilitation",
    label: "25+ Years Strategy Facilitation",
    subtitle: "Navigating business unusual, designing realities, and guiding executive performance."
  },
  {
    id: "executive-education",
    label: "14+ Years Executive Education",
    subtitle: "Curator of leadership interventions for Duke CE, Yale University, and Wits Business School."
  },
  {
    id: "master-storyteller",
    label: "Master Storyteller & Coach",
    subtitle: "Connecting personal and corporate narratives to nurture inclusive, high-performance culture."
  },
  {
    id: "tedx-licensee",
    label: "TEDx Organiser & Head Coach",
    subtitle: "Curator of TEDxLytteltonWomen, amplifying over 100 African women's voices."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "authentic-storytelling",
    number: "Theme 01",
    title: "Authentic Storytelling for Executive Leadership & Cultural Alignment",
    copy: "Rehema equips executives and teams to curate safe spaces for storytelling, translating complex organizational strategy into human, emotionally resonant narratives that drive commitment and cultural cohesion."
  },
  {
    id: "womanomics-economic-inclusion",
    number: "Theme 02",
    title: "Womanomics & Pan-African Economic Inclusion (AfCFTA)",
    copy: "Drawing from her work pioneering Womanomics Africa and supporting women-owned agribusinesses, Rehema delivers bold frameworks for cross-border trade, economic inclusion, and building sustainable, high-impact enterprises."
  },
  {
    id: "the-leaders-voice",
    number: "Theme 03",
    title: "The Leader's Voice: Executive Communication & High-Performance Teams",
    copy: "From the boardroom to global keynote stages, Rehema teaches leaders how to define their next growth curve, command presence under pressure, and foster high-performance teams through strategic conversational architecture."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Rehema Isa is an accomplished business executive, executive leadership development practitioner, and master storytelling coach with over 25 years of experience in strategy design, organizational facilitation, and executive education. As the Co-Founder and Director of Oya Solutions Group, Rehema specializes in executive leadership development, helping corporate boards and executive committees think through complex challenges and unlock sustainable growth.",
  "With more than 14 years in corporate and executive education, Rehema has designed and delivered transformative leadership interventions for premier global and continental business institutions, including Yale University, Duke Corporate Education, Wits Business School, Regenesys, and the Stellenbosch Business Institute. Her client engagements span multinational enterprises and public institutions including RMB, CitiBank, MTN, Eskom, Standard Bank Group, and the Black Management Forum (BMF).",
  "As a conversation architect and master storyteller, Rehema works with individuals and organizations to curate safe spaces for authentic storytelling. She facilitates a deep, systemic connection between personal purpose and organizational narrative, helping leadership teams break down silos, nurture psychological safety, and cultivate inclusive, high-performance work cultures.",
  "Rehema is the licensee, curator, and head speaker coach for TEDxLytteltonWomen, the longest consecutively run TEDxWomen event in Africa, which has amplified more than 100 African women's voices on the global TEDx stage. She is also the co-founder of Womanomics Africa, a non-profit advocacy initiative connecting women entrepreneurs to international ecosystems and markets under the African Continental Free Trade Area (AfCFTA).",
  "Her academic foundation includes an MBA and a Certificate in Leadership Development from the University of Witwatersrand Business School, a Bachelor of Commerce from the University of Botswana, and accounting credentials from the Association of Chartered Certified Accountants (ACCA). A sought-after keynote speaker, programme director, and senior leadership sounding board, Rehema brings infectious energy, profound lived wisdom, and strategic sharpness to every stage."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "duke-ce", name: "DUKE CORPORATE EDUCATION" },
  { id: "wits-business-school", name: "WITS BUSINESS SCHOOL" },
  { id: "yale-university", name: "YALE UNIVERSITY" },
  { id: "un-women", name: "UN WOMEN" },
  { id: "tedx", name: "TEDx LYTTELTON WOMEN" },
  { id: "standard-bank", name: "STANDARD BANK" }
];

const customMedia = [
  {
    id: "rehema-media-1",
    headline: "Inclusive Inclusion: Invited Doesn't Always Mean Welcome",
    publication: "Integrated Thinking Solutions",
    date: "Feature Discussion",
    url: "https://www.youtube.com/watch?v=tnwccuw0h-Y",
    action: "Watch Interview",
    image: "/speakers/Rehema%20Isa/Rehema-Isa-The-Speakers-Firm7.jpg",
    caption: "Rehema Isa unpacks systemic inclusivity, authentic belonging, and organizational culture."
  },
  {
    id: "rehema-media-2",
    headline: "Conversations on Leadership, Transformation & Wisdom",
    publication: "Wisdom Personified with Dudu Msomi",
    date: "Episode 38",
    url: "https://www.youtube.com/watch?v=y4UXvHljzP4",
    action: "Watch Interview",
    image: "/speakers/Rehema%20Isa/Rehema-Isa-The-Speakers-Firm6.jpg",
    caption: "In-depth dialogue on executive resilience, personal development, and purposeful leadership."
  },
  {
    id: "rehema-media-3",
    headline: "Ms Rehema Isa — Amplifying African Women's Voices",
    publication: "TEDxLytteltonWomen",
    date: "TEDx Showcase",
    url: "https://www.youtube.com/watch?v=PQ6kIvJl6t4",
    action: "Watch Session",
    image: "/speakers/Rehema%20Isa/Rehema-Isa-The-Speakers-Firm8.jpg",
    caption: "Leading Africa's longest-running TEDxWomen platform and curating transformative storytelling."
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Rehema Isa"
      speakerTitle=""
      speakerDesignation="Executive Leadership Development Practitioner, Communication & Storytelling Coach"
      speakerRole="Co-Founder & Director of Oya Solutions Group, Master Storyteller & TEDx Organiser (TEDxLytteltonWomen)"
      speakerRef="TSF-RI-52"
      heroBackgroundImage="/speakers/Rehema%20Isa/Rehema-Isa-The-Speakers-Firm5.jpg"
      heroMobileBackgroundImage="/speakers/Rehema%20Isa/Rehema-Isa-The-Speakers-Firm-mobile.jpg"
      biographyImage="/speakers/Rehema%20Isa/Rehema-Isa-The-Speakers-Firm4.jpg"
      bioHook="“Curating safe spaces for authentic storytelling, connecting personal and organisational narratives to cultivate high-performance leadership.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="rehema-isa" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="rehema-isa" 
        customGallery={[]}
        customVideos={[
          {
            id: "rehema-video-1",
            label: "EP #21 — Womanomics: The Future of African Power with Rehema Isa",
            youtubeId: "Pb3cFtNDOnQ"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
