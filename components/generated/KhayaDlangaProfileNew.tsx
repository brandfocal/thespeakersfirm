import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "ted-spk", label: "TED Speaker", subtitle: "Global Presenter" },
  { id: "best-author", label: "Bestselling Author", subtitle: "To Quote Myself & Others" },
  { id: "mktg-exec", label: "Marketing Executive", subtitle: "Award-winning Strategist" },
  { id: "storyteller", label: "Storyteller", subtitle: "Cultural Commentator" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "Brand Strategy & Cultural Resonance",
    copy: "Leveraging cultural insights and storytelling to build brands that connect deeply with modern consumers."
  },
  {
    id: "theme-2",
    number: "02",
    title: "The Art of Storytelling & Public Dialogue",
    copy: "Using personal narrative and cultural commentary to engage audiences on complex social and branding themes."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Khaya Dlanga is a TED global speaker, bestselling author, award-winning strategist, and influential cultural commentator whose insights have transformed audiences across industries."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "pan-macmillan", name: "PAN MACMILLAN" },
  { id: "ted", name: "TED" },
  { id: "tsf", name: "THE SPEAKERS FIRM" }
];

const books = [
  {
    id: "life-like-that",
    title: "Life Is Like That Sometimes",
    description: "Reflections on life, growth, and the human condition in modern South Africa.",
    coverImage: "/speakers/Khaya%20Dlanga/Life-is-Like-That-Sometimes.jpg",
    url: "https://www.panmacmillan.co.za/authors/khaya-dlanga/life-is-like-that-sometimes/9781770108585"
  },
  {
    id: "quote-myself",
    title: "To Quote Myself",
    description: "A bestselling memoir shortlisted for the Sunday Times Alan Paton Literary Award.",
    coverImage: "/speakers/Khaya%20Dlanga/To-Quote-Myself.jpg",
    url: "https://www.panmacmillan.co.za/authors/khaya-dlanga/to-quote-myself/9781770104716"
  },
  {
    id: "these-things",
    title: "These Things Really Do Happen To Me",
    description: "A collection of hilarious and touching stories from Khaya's life and travels.",
    coverImage: "/speakers/Khaya%20Dlanga/These-Things.jpg",
    url: "https://www.panmacmillan.co.za/authors/khaya-dlanga/these-things-really-do-happen-to-me/9781770106314"
  }
];

const customMedia = [
  {
    id: "khaya-media-1",
    headline: "INTERVIEW | Social media master Khaya Dlanga reveals dark secrets in new memoir",
    publication: "News24",
    date: "",
    url: "https://www.news24.com/life/books/interviews/books-interview-social-media-master-khaya-dlanga-reveals-dark-secrets-in-new-memoir-20250419",
    action: "Read Article",
    image: "/speakers/Khaya%20Dlanga/Khaya-Dlanga-The-Speakers-FIrm-12.jpg"
  },
  {
    id: "khaya-media-2",
    headline: "Khaya Dlanga: Writing his way to inner peace",
    publication: "Mail & Guardian",
    date: "",
    url: "https://mg.co.za/friday/2025-03-07-khaya-dlanga-writing-his-way-to-inner-peace/",
    action: "Read Article",
    image: "/speakers/Khaya%20Dlanga/Khaya-Dlanga-The-Speakers-FIrm-10.jpg"
  },
  {
    id: "khaya-media-3",
    headline: "Renowned author Khaya Dlanga set to inspire audiences at TED talk in Canada",
    publication: "IOL",
    date: "",
    url: "https://iol.co.za/entertainment/books/2025-03-11-renowned-author-khaya-dlanga-set-to-inspire-audiences-at-ted-talk-in-canada/",
    action: "Read Article",
    image: "/speakers/Khaya%20Dlanga/Khaya-Dlanga-The-Speakers-FIrm-11.jpg"
  }
];

const customGallery = [
  {
    id: "khaya-gal-1",
    src: "/speakers/Khaya%20Dlanga/Khaya-Dlanga-The-Speakers-FIrm-9.jpg",
    alt: "Khaya Dlanga Portrait",
    caption: "Khaya Dlanga",
    className: ""
  },
  {
    id: "khaya-gal-2",
    src: "/speakers/Khaya%20Dlanga/Khaya-Dlanga-The-Speakers-FIrm-6.jpg",
    alt: "Khaya Dlanga Presentation",
    caption: "Strategic Marketing Briefing",
    className: ""
  },
  {
    id: "khaya-gal-3",
    src: "/speakers/Khaya%20Dlanga/Khaya-Dlanga-The-Speakers-FIrm-7.jpg",
    alt: "Khaya Dlanga Speaking",
    caption: "Keynote Session",
    className: ""
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Khaya Dlanga"
      speakerTitle="Mr."
      speakerDesignation="Author, Marketing Executive & Storyteller"
      speakerRole="TED Global Speaker & Brand Strategist"
      speakerRef="TSF-KD-12"
      heroBackgroundImage="/speakers/Khaya%20Dlanga/Khaya-Dlanga-The-Speakers-FIrm-15.jpg"
      biographyImage="/speakers/Khaya%20Dlanga/Khaya-Dlanga-The-Speakers-FIrm-2.jpg"
      bioHook="“Stories are not just told; they define who we are, what we buy, and where we belong.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={books}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="khaya-dlanga" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="khaya-dlanga" 
        customGallery={customGallery} 
        customVideos={[
          {
            id: "khaya-video-1",
            label: "Khaya Dlanga Keynote",
            youtubeId: "kWbXpGd6PBk"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
