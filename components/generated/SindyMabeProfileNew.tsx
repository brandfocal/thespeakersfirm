import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "business-dip", label: "Business Management Dip", subtitle: "National Diploma" },
  { id: "wits-ent", label: "Wits Ent Certificate", subtitle: "Wits Business School" },
  { id: "logos-ba", label: "BA Leadership", subtitle: "Logos University" },
  { id: "etv-sunrise", label: "Morning Show Pioneer", subtitle: "Morning Edition & Sunrise Host" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "Broadcast Media & Current Affairs Strategy",
    copy: "Building morning news frameworks, editorial direction, and structuring weekend live broadcasts to drive national public awareness."
  },
  {
    id: "theme-2",
    number: "02",
    title: "Work-Life Integration & Support Architectures",
    copy: "Constructing strong support structures for professional working mothers to balance corporate delivery with family responsibility."
  },
  {
    id: "theme-3",
    number: "03",
    title: "Leadership & Entrepreneurial Management",
    copy: "Leveraging leadership theory and business management techniques to drive brand performance and event facilitation."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Sindy Mabe is a well-known and much-respected South African television presenter. Before a spell on ANN7, Sindy was instrumental in establishing ‘Morning Edition’ on eTV and then eTV’s breakfast show ‘Sunrise’. She also anchored SABC’s weekend flagship programme ‘Weekend Live’ on SABC2 as both producer and anchor of the ‘News in 60 Seconds’.",
  "As a working mom, Sindy Mabe has learned to successfully balance work and family, by creating a strong support structure to ensure that her commitments to her clients is not compromised. A much-awarded industry professional, holds a national diploma in business management and a entrepreneurship certificate from the Wits Business School. She also has a BA in management and leadership from Logos University."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "etv", name: "e.TV" },
  { id: "sabc", name: "SABC" },
  { id: "wits", name: "WITS BUSINESS SCHOOL" }
];

const customMedia = [
  {
    id: "sindy-media-1",
    headline: "Should we worry about hi-tech world?",
    publication: "eNCA",
    date: "",
    url: "https://www.enca.com/videos/should-we-worry-about-hi-tech-world",
    action: "Watch Video",
    image: "/speakers/Sindy%20Mabe/Sindy-Mabe-The-Speakers-Firm-7.jpg"
  },
  {
    id: "sindy-media-2",
    headline: "Petition to challenge Eskom's request for 36.1% price hike",
    publication: "eNCA",
    date: "",
    url: "https://www.enca.com/videos/petition-challenge-eskoms-request-361-price-hike",
    action: "Watch Video",
    image: "/speakers/Sindy%20Mabe/Sindy-Mabe-The-Speakers-Firm-9.jpg"
  },
  {
    id: "sindy-media-3",
    headline: "WATCH | Much anticipation over GNU Cabinet announcement",
    publication: "eNCA",
    date: "",
    url: "https://www.enca.com/videos/watch-much-anticipation-over-gnu-cabinet-announcement",
    action: "Watch Video",
    image: "/speakers/Sindy%20Mabe/Sindy-Mabe-The-Speakers-Firm-10.jpg"
  }
];

const customGallery = [
  {
    id: "sindy-gal-1",
    src: "/speakers/Sindy%20Mabe/Sindy-Mabe-The-Speakers-Firm-2.jpg",
    alt: "Sindy Mabe Portrait",
    caption: "Sindy Mabe",
    className: ""
  },
  {
    id: "sindy-gal-2",
    src: "/speakers/Sindy%20Mabe/Sindy-Mabe-The-Speakers-Firm-6.jpg",
    alt: "Sindy Mabe Presenting",
    caption: "Morning Live Broadcast",
    className: ""
  },
  {
    id: "sindy-gal-3",
    src: "/speakers/Sindy%20Mabe/Sindy-Mabe-The-Speakers-Firm-3.jpg",
    alt: "Sindy Mabe Session",
    caption: "Corporate MC Dialogue",
    className: ""
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Sindy Mabe"
      speakerTitle=""
      speakerDesignation="Television News Anchor & Journalist"
      speakerRole="Respected Broadcast Pioneer & Commentator"
      speakerRef="TSF-SM-27"
      heroBackgroundImage="/speakers/Sindy%20Mabe/Sindy-Mabe-The-Speakers-Firm-10.jpg"
      biographyImage="/speakers/Sindy%20Mabe/Sindy-Mabe-The-Speakers-Firm-5.jpg"
      bioHook="“Balancing high-profile broadcast journalism with life commitments requires structural clarity and unwavering dedication to service delivery.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="sindy-mabe" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="sindy-mabe" 
        customGallery={customGallery} 
        customVideos={[
          {
            id: "sindy-video-1",
            label: "Sindy Mabe Keynote Video",
            youtubeId: "zCfmDLqDMKA"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
