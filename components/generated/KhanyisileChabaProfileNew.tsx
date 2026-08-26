import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "old-mutual", label: "Head of Responsible Business", subtitle: "Old Mutual Continent Strategy" },
  { id: "sawic-chair", label: "Founding Chair of SAWIC", subtitle: "SA Women in Construction" },
  { id: "cidb-board", label: "Former CIDB Board Member", subtitle: "Construction Industry Board" },
  { id: "standard-bank", label: "Former Sponsorships Director", subtitle: "Standard Bank Exec Role" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "ESG & Continental Responsible Business Strategy",
    copy: "Directing responsible business models, ESG integration, and sustainability frameworks across 13 African countries to drive shared value."
  },
  {
    id: "theme-2",
    number: "02",
    title: "Women in Built Environment & Construction",
    copy: "Empowering female constructors, establishing SAWIC, and advising housing ministers on infrastructure and engineering inclusion."
  },
  {
    id: "theme-3",
    number: "03",
    title: "Corporate Sponsorship & Sponsorship Management",
    copy: "Leveraging financial service experience, leading group sponsorships, affordable housing initiatives, and customer experience programs."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Khanyisile Chaba is the head of responsible business at Old Mutual. She is responsible for leading the company’s sustainable development strategy across 13 countries on the continent. She is a qualified architectural technologist (UJ) and marketing strategist (IMM). She started her career in construction, spending 15 years as a built environment professional. She was the founding member and chairperson of South African Women in Construction (SAWIC), held board membership at the Construction Industry Development Board, and served as an advisory council member to the Minister of Housing and Public Works.",
  "Chaba subsequently studied business development at the University of Cape Town (UCT) and executive general management at the Gordon Institute of Business Science (GIBS). She also attended the Cambridge Institute for Sustainability Leadership. She has spent 20 years in financial services and has held positions as director of group sponsorships, private banking, affordable housing and customer experience at Standard Bank. She served as a committee member of The Banking Association of South Africa."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "oldmutual", name: "Old Mutual" },
  { id: "sawic", name: "SAWIC" },
  { id: "standardbank", name: "Standard Bank" }
];

const customMedia = [
  {
    id: "khanyi-media-1",
    headline: "Executive Lounge: Khanyisile Chaba",
    publication: "Moneyweb",
    date: "",
    url: "https://www.moneyweb.co.za/moneyweb-radio/executive-lounge-khanyisile-chaba/",
    action: "Listen Audio",
    image: "/speakers/Khanyisile%20Chaba/Khanyi-Chaba-The-Speakers-Firm.jpg"
  },
  {
    id: "khanyi-media-2",
    headline: "A guide to investing in positive change, with Khanyi Chaba",
    publication: "TEDxCapeTown",
    date: "",
    url: "https://tedxcapetown.org/posts/guide-investing-positive-change-khanyi-chaba",
    action: "View Article",
    image: "/speakers/Khanyisile%20Chaba/Khanyi-Chaba-The-Speakers-Firm-8.jpg"
  },
  {
    id: "khanyi-media-3",
    headline: "A conversation with Khanyi Chaba – Head Responsible Business, Old Mutual, South Africa",
    publication: "Leadership Conversations",
    date: "",
    url: "https://leadershipconversations.co.za/conversations-with-leaders/a-conversation-with-khanyi-chaba-head-responsible-business-old-mutual-south-africa/",
    action: "View Conversation",
    image: "/speakers/Khanyisile%20Chaba/Khanyi-Chaba-The-Speakers-Firm-4.jpg"
  }
];

const customGallery = [
  {
    id: "khanyi-gal-1",
    src: "/speakers/Khanyisile%20Chaba/Khanyi-Chaba-The-Speakers-Firm-9.jpg",
    alt: "Khanyisile Chaba Presentation",
    caption: "Corporate Citizenship Keynote",
    className: ""
  },
  {
    id: "khanyi-gal-2",
    src: "/speakers/Khanyisile%20Chaba/Khanyi-Chaba-The-Speakers-Firm-7.jpg",
    alt: "Khanyisile Chaba Panel",
    caption: "Sustainability Summit Panel",
    className: ""
  },
  {
    id: "khanyi-gal-3",
    src: "/speakers/Khanyisile%20Chaba/Khanyi-Chaba-The-Speakers-Firm-6.jpg",
    alt: "Khanyisile Chaba built environment",
    caption: "Women in Construction Forum",
    className: ""
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Khanyisile Chaba"
      speakerTitle=""
      speakerDesignation="Sustainability Leader, Corporate Citizenship Strategist & Social Impact Advocate"
      speakerRole="ESG Leader & Sustainability Advocate"
      speakerRef="TSF-KC-33"
      heroBackgroundImage="/speakers/Khanyisile%20Chaba/Khanyi-Chaba-The-Speakers-Firm-4.jpg"
      heroMobileBackgroundImage="/speakers/Khanyisile%20Chaba/khanyisile-chaba-mobile.jpg"
      biographyImage="/speakers/Khanyisile%20Chaba/Khanyi-Chaba-The-Speakers-Firm-7.jpg"
      bioHook="“Driving sustainability, ESG integration, and shared value strategies requires combining technical design with corporate citizenship leadership.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="khanyisile-chaba" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="khanyisile-chaba" 
        customGallery={customGallery} 
        customVideos={[
          {
            id: "khanyi-video-1",
            label: "Khanyisile Chaba Keynote Video",
            youtubeId: "jpB4_el1hKc"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
