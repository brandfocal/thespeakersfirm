import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "clinical-psych", label: "Clinical Psychologist", subtitle: "AI Integration specialist" },
  { id: "podcast-host", label: "Beneath the Busy Host", subtitle: "Top Workplace Podcast" },
  { id: "wellness-coach", label: "Executive Leadership Coach", subtitle: "Be Well, Lead Well" },
  { id: "hr-advisor", label: "Strategic HR Advisor", subtitle: "Mental Health Specialist" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "AI Adoption & Human Capability",
    copy: "Helping leaders and HR teams navigate the psychological transitions, change fatigue, and cognitive load of AI transformation."
  },
  {
    id: "theme-2",
    number: "02",
    title: "Productivity Dysmorphia & Self-Worth",
    copy: "Deconstructing why high performers burn out, and rebuilding self-worth distinct from constant execution metrics."
  },
  {
    id: "theme-3",
    number: "03",
    title: "Caring Without Crumbling (HR for HR)",
    copy: "Providing targeted coping systems, burnout boundaries, and compassion fatigue strategies for HR professionals and leaders."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Lauren Davis works at the intersection of leadership, workplace mental health, HR, and AI transformation. She helps leaders, HR teams, and organisations strengthen wellbeing, performance, and the human capability needed to navigate change and AI implementation.",
  "With extensive experience working with a wide variety of organisations, Lauren specialises in the psychological and behavioural factors that determine whether people can adapt, lead, and perform sustainably through change.",
  "Lauren combines deep clinical insight with practical organisational experience, translating complex human dynamics into clear strategies for leadership, performance, wellbeing, and change readiness. She coaches senior leaders and HR professionals, facilitates workshops, delivers keynotes, and hosts the podcast: Beneath the Busy.",
  "Her core belief is simple: when leaders are not well, organisations do not function well. Her work is grounded in one guiding principle: Be Well, Lead Well."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "beneaththebusy", name: "Beneath the Busy" },
  { id: "laurenworkshops", name: "Be Well, Lead Well Workshops" }
];

const customMedia = [
  {
    id: "lauren-media-1",
    headline: "Caring Without Crumbling: Compassion Fatigue and Burnout in HR and Leadership",
    publication: "Beneath the Busy Podcast",
    date: "",
    url: "https://www.buzzsprout.com/2445583",
    action: "Listen Episode",
    image: "/speakers/Lauren%20Davis/Lauren-Davis-The-Speakers-Firm.jpg"
  },
  {
    id: "lauren-media-2",
    headline: "From Proving to Leading: Why High Performers Burn Out | Productivity Dysmorphia and Self-Worth",
    publication: "Beneath the Busy Podcast",
    date: "",
    url: "https://www.buzzsprout.com/2445583",
    action: "Listen Episode",
    image: "/speakers/Lauren%20Davis/Lauren-Davis-The-Speakers-Firm2.jpg"
  },
  {
    id: "lauren-media-3",
    headline: "The Cult of Busyness: How High-Performing Leaders Burn Out Without Noticing",
    publication: "Beneath the Busy Podcast",
    date: "",
    url: "https://www.buzzsprout.com/2445583",
    action: "Listen Episode",
    image: "/speakers/Lauren%20Davis/Lauren-Davis-The-Speakers-Firm3.jpg"
  }
];

const customGallery = [
  {
    id: "lauren-gal-1",
    src: "/speakers/Lauren%20Davis/Lauren-Davis-The-Speakers-Firm.jpg",
    alt: "Lauren Davis Portrait",
    caption: "Lauren Davis Clinical Psychologist",
    className: ""
  },
  {
    id: "lauren-gal-2",
    src: "/speakers/Lauren%20Davis/Lauren-Davis-The-Speakers-Firm2.jpg",
    alt: "Lauren Davis Studio",
    caption: "Beneath the Busy Host",
    className: ""
  },
  {
    id: "lauren-gal-3",
    src: "/speakers/Lauren%20Davis/Lauren-Davis-The-Speakers-Firm3.jpg",
    alt: "Lauren Davis Keynote",
    caption: "Workplace Wellness Keynote",
    className: ""
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Lauren Davis"
      speakerTitle=""
      speakerDesignation="Clinical & AI Integration Psychologist, Leadership Coach & Keynote Speaker"
      speakerRole="Clinical Psychologist & Wellbeing Strategist"
      speakerRef="TSF-LD-35"
      heroBackgroundImage="/speakers/Lauren%20Davis/Lauren-Davis-The-Speakers-Firm4.jpg"
      biographyImage="/speakers/Lauren%20Davis/Lauren-Davis-The-Speakers-Firm.jpg"
      bioHook="“When leaders are not well, organisations do not function well. The foundation of high performance is sustainable wellbeing.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="lauren-davis" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="lauren-davis" 
        customGallery={[]} 
        customVideos={[
          {
            id: "lauren-video-1",
            label: "Lauren Davis Presentation",
            youtubeId: "_XEKuvVxzcY"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
