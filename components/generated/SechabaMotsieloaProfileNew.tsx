import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "exec-director", label: "Executive Director", subtitle: "Corporate Affairs & Communications" },
  { id: "brand-architect", label: "Brand Architect", subtitle: "FMCG & Corporate Strategy" },
  { id: "reputation-lead", label: "Reputation Lead", subtitle: "Stakeholder Management" },
  { id: "keynote-spk", label: "Keynote Speaker", subtitle: "Marketing & Leadership Transformation" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "Corporate Brand Transformation & FMCG Strategy",
    copy: "Executing high-impact corporate brand positioning, market penetration, and long-term brand equity alignment."
  },
  {
    id: "theme-2",
    number: "02",
    title: "Stakeholder Engagement & Reputation Governance",
    copy: "Navigating complex stakeholder ecosystems, regulatory communications, and executive reputation preservation."
  },
  {
    id: "theme-3",
    number: "03",
    title: "Purpose-Driven Leadership & Organisational Culture",
    copy: "Aligning corporate purpose with operational culture to drive sustainable business performance and market trust."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Sechaba Motsieloa is a distinguished business leader, brand strategist, and transformation coach with over two decades of executive experience at South Africa’s top corporate and advisory institutions. As Managing Partner and Co-Founder of the Kansy Group, a consulting and coaching firm he established alongside Yolanda Motsieloa in 2018, and as Co-Founder of EmpowaMEN, a movement dedicated to redefining masculinity, leadership, and purpose across Africa, Sechaba champions a Oneness Approach to Business and Life. This transformative philosophy seamlessly integrates purpose, leadership, and humanity into the heart of enterprise.",
  "An accomplished strategist and advisor, Sechaba partners with organizations on marketing, communication, brand management, and reputation leadership, helping executives and teams navigate complex environments through clarity, empathy, and connection. His Oneness Approach has become a hallmark framework for developing conscious leaders who align profit with purpose and performance with peace.",
  "With a career spanning industry giants including SFW, SAB, Kimberly-Clark, McDonald’s South Africa, Magna Carta, and Lurco Group, Sechaba brings boardroom-tested experience, commercial insight, and emotional depth to his coaching and keynotes. His unique ability to step back, connect & collect dots, and uncover insights where others see division enables him to transform complexity into clarity, and leadership into legacy.",
  "Sechaba holds a B.Soc.Sci (Hons) in Organisational Psychology and the Chartered Marketer (CM(SA)) designation, and is currently pursuing an MSc in Management of Technology and Innovation. He has served as Chairman of the Marketing Association of South Africa and as Chairman of Council at The Da Vinci Institute. He is currently a Guarantor of the Audit Bureau of Circulation (SA) and a member of the Professional Designation Board for Chartered Marketers, underscoring his commitment to ethical leadership and national excellence.",
  "As a globally experienced, purpose-driven thought leader, Sechaba speaks with authenticity and conviction at men’s gatherings, conferences, events, and campaigns. He explores themes of identity, purpose, oneness, integrity, and accountability in leadership. His message resonates deeply with men and organizations seeking to lead from a place of wholeness, groundedness, and conscious connection.",
  "Book Sechaba Motsieloa for your next men’s conference, leadership summit, or empowerment campaign, and experience a keynote blending intellect, authenticity, and spiritual intelligence empowering a generation of men to lead with purpose, presence, and unity.",
  "At The Speakers Firm, we proudly represent Sechaba Motsieloa, Co-Founder of EmpowaMEN a voice for Oneness, Purpose, and Transformational Leadership for Men."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "fmcg-leaders", name: "FMCG LEADERSHIP" },
  { id: "corporate-affairs", name: "CORPORATE AFFAIRS" },
  { id: "brand-sa", name: "BRAND SOUTH AFRICA" }
];

const customMedia = [
  {
    id: "sechaba-media-1",
    headline: "Sechaba Motsieloa on Corporate Brand Equity & Leadership",
    publication: "The Speakers Firm",
    date: "",
    url: "https://thespeakersfirm.co.za/media-brand-reputation/sechaba-motsieloa/",
    action: "BOOK THE SPEAKER",
    image: "/speakers/Sechaba%20Motsieloa/PHOTO-2019-07-22-10-10-59.jpg"
  }
];

const customGallery = [
  {
    id: "sechaba-gal-1",
    src: "/speakers/Sechaba%20Motsieloa/Sechaba-Motsieloa-The-Speakers-Firm.jpg",
    alt: "Sechaba Motsieloa Executive Portrait",
    caption: "Sechaba Motsieloa",
    className: ""
  },
  {
    id: "sechaba-gal-2",
    src: "/speakers/Sechaba%20Motsieloa/DSC_98722.jpg",
    alt: "Sechaba Motsieloa Keynote Address",
    caption: "Corporate Affairs Address",
    className: ""
  },
  {
    id: "sechaba-gal-3",
    src: "/speakers/Sechaba%20Motsieloa/DSC_98752.jpg",
    alt: "Sechaba Motsieloa Panel Moderator",
    caption: "Brand Strategy Session",
    className: ""
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Sechaba Motsieloa"
      speakerTitle=""
      speakerDesignation="Corporate Affairs Director, Brand Strategist & Speaker"
      speakerRole="Executive Advisor, Communications Specialist & Purpose Advocate."
      speakerRef="TSF-SM-38"
      heroBackgroundImage="/speakers/Sechaba%20Motsieloa/Sechaba-Motsieloa-The-Speakers-Firm.jpg"
      heroMobileBackgroundImage="/speakers/Sechaba%20Motsieloa/sechana-motsieloa-mobile.jpg"
      biographyImage="/speakers/Sechaba%20Motsieloa/Sechaba%20Motsielaoa.jpg"
      bioHook="“Authentic corporate reputation is not created in public relations campaigns—it is built in every operational decision.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="sechaba-motsieloa" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="sechaba-motsieloa" 
        customGallery={[]} 
        customVideos={[
          {
            id: "sechaba-video-1",
            label: "Experience Reel",
            youtubeId: "tySjryC3vOU"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
