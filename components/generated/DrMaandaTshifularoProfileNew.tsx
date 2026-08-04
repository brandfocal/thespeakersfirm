"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const STRATEGIC_THEMES = [
  {
    id: "lead-with-super-clarity",
    number: "Theme 01",
    title: "Lead with Super Clarity & Re-engineer Operations",
    copy: "Addresses how leaders can eliminate political friction, create organizational direction, boost morale, and drive business turnaround. Focuses on frameworks from his tenure as Head of Dialdirect Insurance."
  },
  {
    id: "strengths-based-teams",
    number: "Theme 02",
    title: "Strengths-Based Leadership & Purpose Mindset",
    copy: "Keynotes on unlocking personal leadership potential using Gallup Strengths and Enneagram models. Outlines how to design cohesive teams that leverage collective strengths and operate with a purpose mindset."
  }
];

const TICKER_LOGOS = [
  "DIALDIRECT HEAD", "GIBS ADJUNCT FACULTY", "SUPERLEAD FOUNDER", "UJ PhD FINANCE", "HARVARD BUSINESS GMP", "DELOITTE CONSULTING", "MCKINSEY & COMPANY", "JCI TOP 10", "M&G TOP 200"
];

const FULL_BIO_PARAGRAPHS = [
  "Dr Maanda Tshifularo is a skilled strategist, leadership coach (Integral Coach® UCT GSB, certified Gallup Strengths Coach, accredited practitioner of Insights Discovery, and Integrative Enneagram) and author (Lead with Super Clarity), who is passionate about advancing leadership excellence. He is the founding director of SuperLead Advisory, a consultancy focused on strategy, operations, and leadership. He also serves as a director for the University of Pretoria’s Gordon Institute of Business Science (GIBS) Centre for Leadership and Dialogue and is an adjunct faculty member at GIBS. Until recently, he was the Head of Dialdirect Insurance, where he successfully led a business turnaround and was awarded the South African Product Innovation of the Year in the financial services category. His previous roles include management and executive positions at MTN SA, Discovery Health and 1Life Insurance. Maanda has also worked as a strategy management consultant at Deloitte Consulting and McKinsey & Company.",
  "Maanda recently completed his Doctor of Philosophy in Finance at the University of Johannesburg and the General Management Program at Harvard Business School. He is the host of the SuperLead podcast, an experienced summit moderator and facilitator. In 2019, he was named one of the Mail & Guardian’s Top 200 Young South Africans and recognised by Junior Chamber International as one of the Top 10 Outstanding Young Persons in South Africa."
];

const CREDENTIAL_BADGES = [
  {
    id: "gibs-director-faculty",
    label: "GIBS Center Director & Adjunct Faculty",
    subtitle: "Directs center for leadership & dialogue; lectures executive cohorts."
  },
  {
    id: "superlead-advisory-director",
    label: "SuperLead Advisory Founding Director",
    subtitle: "Providing strategic cost optimization, operation scaling, and C-suite coaching."
  }
];

const BOOKS = [
  {
    id: "super-clarity",
    title: "Lead with Super Clarity",
    description: "Dr. Maanda Tshifularo's signature playbook on how modern leaders can align teams, eliminate boardroom politics, and execute business turnaround.",
    coverImage: "/speakers/Maanda Tshifularo/Maanda-Tshifularo-Lead-with-Super-Clarity.jpg",
    url: "https://www.maandatshifularo.com/lead-with-super-clarity/"
  }
];

const GALLERY_IMAGES = [
  {
    id: "mt-gal-1",
    src: "/speakers/Maanda Tshifularo/Maanda-Tshifularo-The-Speakers-Firm-7.jpg",
    alt: "Dr Maanda Tshifularo coaching",
    caption: "Dr. Tshifularo conducting executive leadership coaching",
    className: "sm:col-span-2 lg:col-span-2"
  },
  {
    id: "mt-gal-2",
    src: "/speakers/Maanda Tshifularo/Maanda-Tshifularo-The-Speakers-Firm-9.jpg",
    alt: "Maanda presenting live",
    caption: "Speaking on super clarity models at regional summits",
    className: ""
  },
  {
    id: "mt-gal-3",
    src: "/speakers/Maanda Tshifularo/Maanda-Tshifularo-The-Speakers-Firm-6.jpg",
    alt: "Maanda portrait session",
    caption: "Strategy and corporate alignment specialist",
    className: ""
  }
];

const VIDEOS = [
  {
    id: "mt-vid-1",
    label: "Dr. Maanda Tshifularo: Leading with Super Clarity Keynote",
    youtubeId: "W4G3zl_EhtE"
  }
];

const MEDIA_ARTICLES = [
  {
    id: "mt-med-1",
    headline: "Here is how you can create a healthy team environment characterised by minimal politics, clear direction and team high morale",
    publication: "SuperLead Advisory",
    date: "12 Nov 2024",
    action: "Read Article",
    url: "https://www.maandatshifularo.com/here-is-how-you-can-create-a-healthy-team-environment-characterised-by-minimal-politics-clear-direction-and-team-high-morale/",
    image: "/speakers/Maanda Tshifularo/Maanda-Tshifularo-The-Speakers-Firm-Fifth.jpg"
  },
  {
    id: "mt-med-2",
    headline: "Lead from your strengths and build strengths-based teams",
    publication: "SuperLead Advisory",
    date: "25 Oct 2023",
    action: "Read Thought Leadership",
    url: "https://www.maandatshifularo.com/lead-from-your-strengths-and-build-strengths-based-teams/",
    image: "/speakers/Maanda Tshifularo/Maanda-Tshifularo-The-Speakers-Firm-Fourth.jpg"
  },
  {
    id: "mt-med-3",
    headline: "Leading with a purpose mindset; Finding meaning and making an impact",
    publication: "SuperLead Advisory",
    date: "10 Aug 2023",
    action: "Read Article",
    url: "https://www.maandatshifularo.com/leading-with-a-purpose-mindset-finding-meaning-and-making-an-impact/",
    image: "/speakers/Maanda Tshifularo/Maanda-Tshifularo-The-Speakers-Firm-Second.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <>
      <SpeakerProfileTemplate
        speakerName="Dr. Maanda Tshifularo"
        speakerTitle="Dr."
        speakerDesignation="Leadership Expert. Strategy Advisor. Transformation Author. Practical Strategist."
        speakerRole="Bridging leadership theory with boardroom execution and strategic turnaround."
        speakerRef="TSF-MT-01"
        heroBackgroundImage="/speakers/Maanda Tshifularo/Maanda-Tshifularo-The-Speakers-Firm-10.jpg"
        biographyImage="/speakers/Maanda Tshifularo/Maanda-Tshifularo-The-Speakers-Firm-7.jpg"
        bioHook="“Advance leadership excellence by replacing corporate politics with super clarity.”"
        fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
        credentials={CREDENTIAL_BADGES}
        strategicThemes={STRATEGIC_THEMES}
        socialProofLogos={TICKER_LOGOS.map(name => ({ id: name.toLowerCase().replace(/\s+/g, "-"), name }))}
        books={BOOKS}
        mediaArticlesSlot={
          <ProfileAdditionalMediaSections speakerId="dr-maanda-tshifularo" customMedia={MEDIA_ARTICLES} />
        }
      >
        <ProfileAdditionalSections 
          speakerId="dr-maanda-tshifularo"
          customGallery={[]}
          customVideos={VIDEOS}
          customIntroText="Snapshots from Maanda's strategic facilitation, GIBS MBA lectures, and book signings."
        />
      </SpeakerProfileTemplate>
    </>
  );
};

export const SpeakerFooter = () => {
  return null;
};

export const ProfileAdditionalSectionsOld = () => {
  return null;
};
