"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "founder-strategy-reignited",
    label: "Founder: Strategy Reignited",
    subtitle: "Assisting organisations to excel in strategy definition and execution."
  },
  {
    id: "lecturer-gibs-jbs",
    label: "Lecturer: GIBS, JBS & IAE Lille",
    subtitle: "Trained over 1000 executives and master's students."
  },
  {
    id: "tedx-speaker-anael",
    label: "TEDx Speaker",
    subtitle: "Featured at TEDx Sandton and TEDx Gaborone."
  },
  {
    id: "strategy-expert",
    label: "20+ Years Strategy Advisor",
    subtitle: "Worked with Strategy&, Booz&co, PwC, and boutique firms globally."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "strategy-reignited-theme",
    number: "Theme 01",
    title: "Strategy Reignited",
    copy: "Rethink, Relearn, and Rebuild strategy by debunking common myths and executing results-oriented programs on the ground."
  },
  {
    id: "slow-strategic-thinking",
    number: "Theme 02",
    title: "Art of Slow Strategic Thinking",
    copy: "Prioritising quality and depth over operational speed, urging corporate boards to construct more resilient, thoughtful visions."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Anael Granoux is a French advisor, lecturer, speaker, NED and entrepreneur with two decades of experience in strategy formulation, strategy execution, and strategy leadership. He has worked with renowned consulting houses (incl. Strategy&, Booz&co, PwC) as well as smaller boutique firms in Europe, the Middle East, Latin America, and Africa.",
  "Anael has trained over 1000 executives and master’s students on innovation, strategic planning, and strategy execution. Anael was recently a guest lecturer at Johannesburg Business School and at GIBS and is currently lecturing at IAE Business School in Lille (France).",
  "He has shared his expertise as a speaker at the TEDx Sandton, TEDx Gaborone, Manufacturing Indaba, Energy Indaba, AfricaCom, Africa Strategy Execution Conference, GPRC Summit, and more. He has founded Strategy Reignited with the aim of assisting organisations to excel in strategy definition and execution. He has set forth a triple objective: Rethink Strategy (debunking common myths surrounding strategy and co-creating new approaches that drive tangible results), Relearn Strategy (providing to today and tomorrow’s leaders the skills and training solutions they need to master strategy), and Rebuild Strategy (implementing on the ground results-oriented strategies for his clients)."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "gibs", name: "GIBS BUSINESS SCHOOL" },
  { id: "pwc", name: "PWC" },
  { id: "strategy-reignited", name: "STRATEGY REIGNITED" },
  { id: "tedx", name: "TEDX" }
];

const customMedia = [
  {
    id: "anael-art-1",
    headline: "Ever heard of the two CEOs",
    publication: "Strategy Reignited",
    date: "",
    url: "https://www.strategyreignited.com/blog/ever-heard-of-the-two-ceos",
    action: "Read Blog Post",
    image: "/speakers/Anael Granoux/Anael-Granoux-The-Speakers-Firm2.jpg"
  },
  {
    id: "anael-art-2",
    headline: "Embrace the Art of Slow Strategic Thinking",
    publication: "Strategy Reignited",
    date: "",
    url: "https://www.strategyreignited.com/blog/embrace-the-art-of-slow-strategic-thinking",
    action: "Read Blog Post",
    image: "/speakers/Anael Granoux/Anael-Granoux-The-Speakers-Firm4.jpg"
  },
  {
    id: "anael-art-3",
    headline: "Your strategy needs a strategy",
    publication: "Strategy Reignited",
    date: "",
    url: "https://www.strategyreignited.com/blog/your-strategy-needs-a-strategy",
    action: "Read Blog Post",
    image: "/speakers/Anael Granoux/Anael-Granoux-The-Speakers-Firm5.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Anael Granoux"
      speakerTitle=""
      speakerDesignation="Strategy Advisor, Lecturer, Speaker & NED"
      speakerRole="Debunking myths and co-creating results-oriented business strategies."
      speakerRef="TSF-AG-04"
      heroBackgroundImage="/speakers/Anael Granoux/Anael-Granoux-The-Speakers-Firm6.jpg"
      biographyImage="/speakers/Anael Granoux/Anael-Granoux-The-Speakers-Firm.jpg"
      bioHook="“Rethinking, relearning, and rebuilding strategic formulation and execution across global landscapes.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="anael-granoux" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="anael-granoux" 
        customIntroText="Snapshots from Anael Granoux's global strategy summits, business advisory sessions, and TEDx keynotes."
        customGallery={[]}
        customVideos={[
          {
            id: "anael-video-1",
            label: "Anael Granoux Keynote Presentation",
            youtubeId: "Ez80SW7grXg"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
