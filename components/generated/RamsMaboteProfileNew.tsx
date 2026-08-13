import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "broadcaster-mc", label: "Broadcaster & MC", subtitle: "Radio & Television Anchor" },
  { id: "pr-reputation", label: "PR Strategist", subtitle: "Reputation & Crisis Management" },
  { id: "published-author", label: "Author", subtitle: "Communication & Public Discourse" },
  { id: "keynote-spk", label: "Keynote Speaker", subtitle: "Media Dynamics & Personal Branding" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "Media Relations & Crisis Reputation Tactics",
    copy: "Navigating high-pressure broadcast media interviews, press conferences, and corporate reputation repair."
  },
  {
    id: "theme-2",
    number: "02",
    title: "Master of Ceremonies Excellence & Event Facilitation",
    copy: "Delivering engaging, sharp, and memorable event moderation for premier corporate conferences and award ceremonies."
  },
  {
    id: "theme-3",
    number: "03",
    title: "Personal Branding, Influence & Authentic Communication",
    copy: "Empowering leaders to cultivate persuasive voice, public gravitas, and authentic brand communication."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Rams Mabote is one of the most versatile media people having made an impact in print, TV and radio.",
  "Rams is a quintessential media man. He brings the unique experience of having worked on all media platforms – radio, television, print and online – over the past 25 years. Very quirky, witty and sometimes humorous, he engages listeners and guests at any level with amazing ease.",
  "Rams brings a combination of being a journalist and an entrepreneur in his own right. This combination works perfectly for Talk With Rams in the sense that all the topics that Rams handles are issues he interacts on in his everyday life, but also because of his journalistic background, he brings the required skills to bring out the best out of guests and listeners.",
  "Other than media work, Rams plays golf (9 handicap), coaches SMMEs on sales and is a reputed speaker on Reputation. He is also seasoned MC and facilitator.",
  "In 2009 Rams self-published his first book Crisis? What Crisis – Public Relations Not According to Thabo Mbeki. This was a satirical yet semi academic critique of the public relations failures of former president Thabo Mbeki.",
  "An aspiring actor in his youth, Rams took part in several stage productions including The Mob, which got good reviews in the Sowetan in 1985. He has also written and recited poetry."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "talk-radio", name: "TALK RADIO & BROADCASTING" },
  { id: "pr-firm", name: "PR & COMMUNICATIONS" },
  { id: "corporate-events", name: "EXECUTIVE FORUMS" }
];

const customMedia = [
  {
    id: "rams-media-1",
    headline: "Rams Mabote on PR, Broadcast Media & Reputation Management",
    publication: "The Speakers Firm",
    date: "",
    url: "https://thespeakersfirm.co.za/media-brand-reputation/rams-mabote/",
    action: "BOOK THE SPEAKER",
    image: "/speakers/Rams%20Mabote/Rams-Mabote-The-Speakers-Firm-7.jpg"
  }
];

const customGallery = [
  {
    id: "rams-gal-1",
    src: "/speakers/Rams%20Mabote/Rams-Mabote-The-Speakers-Firm-3.jpg",
    alt: "Rams Mabote Portrait",
    caption: "Rams Mabote",
    className: ""
  },
  {
    id: "rams-gal-2",
    src: "/speakers/Rams%20Mabote/Rams-Mabote-The-Speakers-Firm-4.jpg",
    alt: "Rams Mabote Hosting Event",
    caption: "Corporate Master of Ceremonies",
    className: ""
  },
  {
    id: "rams-gal-3",
    src: "/speakers/Rams%20Mabote/Rams-Mabote-The-Speakers-Firm-2.jpg",
    alt: "Rams Mabote Keynote",
    caption: "Media & PR Strategy Speaker",
    className: ""
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Rams Mabote"
      speakerTitle=""
      speakerDesignation="Broadcaster, PR Strategist & Master of Ceremonies"
      speakerRole="Talk Show Host, Author & Communication Advisor."
      speakerRef="TSF-RM-40"
      heroBackgroundImage="/speakers/Rams%20Mabote/Rams-Mabote-The-Speakers-Firm-6.jpg"
      biographyImage="/speakers/Rams%20Mabote/Rams%20Mabote.jpg"
      bioHook="“Communication is not merely transferring information—it is shaping perception, trust, and connection.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="rams-mabote" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="rams-mabote" 
        customGallery={customGallery} 
        customVideos={[
          {
            id: "rams-video-1",
            label: "Experience Reel",
            youtubeId: "iXfrhWwujT4"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
