import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "icf-pcc", label: "ICF PCC Coach", subtitle: "International Coaching Federation" },
  { id: "tsheto-dir", label: "Academy Director", subtitle: "Founder, Tsheto Leadership Academy" },
  { id: "3000-hours", label: "3000+ Coaching Hours", subtitle: "Group & One-on-One Mastery" },
  { id: "gibs-coach", label: "GIBS Model Expert", subtitle: "Consciousness & V-GROWTH Expert" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "Conscious Leadership & High Performance Culture",
    copy: "Anchoring executive decision-making in deep consciousness, driving cultural shifts, and building accountability models that deliver results."
  },
  {
    id: "theme-2",
    number: "02",
    title: "Courageous Conversations & Team Alignment",
    copy: "Creating psychological safety to support open communication, resolve structural conflicts, and align diverse leadership teams."
  },
  {
    id: "theme-3",
    number: "03",
    title: "Systemic Self-Leadership & Mastery Coaching",
    copy: "Empowering senior leaders with self-coaching models, self-reflection practices, and personal accountability systems."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Queen Ramotsehoa is an internationally accredited professional certified coach. She has an Honors degree in Comparative Literature and is accredited with the ICF (International Coaching Federation). She is the founder and Director of Tsheto Leadership & Coaching Academy which was founded in 2008. She has a wealth of experience in coaching executives and senior managers, specializing in leadership and organizational culture. She has used her experience from the many hours of coaching and development to write and publish a leadership book titled Leadership Anchored in Consciousness is a Big Deal.",
  "Queen is an executive coach with special focus on Leadership Development including Self-Leadership, Team Alignment, Courageous Conversations, Leadership Culture as a driver of High Performance and Conscious Communication. She has over 3000 coaching hours, 80% of which are in group coaching and 20% in one-on-one coaching. Most of her clients are senior managers and executives because they are custodians of Organizational Leadership Culture. Her coaching methodology has strong influence of both the Consciousness Coaching Model, and the Gibs V-GROWTH Models. These Models provide structure and a strong commitment to coaching the client relationship to issues, which is where powerful shifts lie and how her clients grow and achieve results that exceed expectations."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "icf", name: "ICF" },
  { id: "tsheto", name: "TSHETO ACADEMY" },
  { id: "gibs", name: "GIBS BUSINESS SCHOOL" }
];

const customMedia = [
  {
    id: "queen-media-1",
    headline: "The book on conscious leadership you NEED to read by Queen Ramotsehoa",
    publication: "Glamour",
    date: "October 2023",
    url: "https://www.glamour.co.za/lifestyle/careers/the-book-on-conscious-leadership-you-need-to-read-by-queen-ramotsehoa-307b6697-d5cf-4247-ac11-363855dfe3e7",
    action: "Read Review",
    image: "/speakers/Queen%20Ramotsehoa/Queen-Ramotsehoa-The-Speakers-Firm-2.jpg"
  },
  {
    id: "queen-media-2",
    headline: "Leadership is accountability, not perfection",
    publication: "TEDx / YouTube",
    date: "",
    url: "https://www.youtube.com/watch?v=WD2H47ISw98",
    action: "Watch TEDx Talk",
    image: "/speakers/Queen%20Ramotsehoa/Queen-Ramotsehoa-The-Speakers-Firm-3.jpg"
  },
  {
    id: "queen-media-3",
    headline: "Mastery is your only currency - Tsheto Leadership and Coaching Academy",
    publication: "Barloworld Siyakhula",
    date: "",
    url: "https://barloworldsiyakhula.co.za/news-article.php?articleLink=mastery-is-your-only-currency-tsheto-leadership-and-coaching-academy",
    action: "Read Press Release",
    image: "/speakers/Queen%20Ramotsehoa/Queen-Ramotsehoa-The-Speakers-Firm-4.jpg"
  }
];

const customGallery = [
  {
    id: "queen-gal-1",
    src: "/speakers/Queen%20Ramotsehoa/Queen-Ramotsehoa-The-Speakers-Firm-7.jpg",
    alt: "Queen Ramotsehoa Portrait",
    caption: "Queen Ramotsehoa",
    className: ""
  },
  {
    id: "queen-gal-2",
    src: "/speakers/Queen%20Ramotsehoa/Queen-Ramotsehoa-The-Speakers-Firm-5.jpg",
    alt: "Queen Ramotsehoa Speaking",
    caption: "Conscious Leadership Alignment Session",
    className: ""
  },
  {
    id: "queen-gal-3",
    src: "/speakers/Queen%20Ramotsehoa/Queen-Ramotsehoa-The-Speakers-Firm-6.jpg",
    alt: "Queen Ramotsehoa Academy",
    caption: "Tsheto Leadership Academy Presentation",
    className: ""
  }
];

const customBooks = [
  {
    id: "queen-book-1",
    title: "Leadership Anchored in Consciousness is a Big Deal",
    coverImage: "/speakers/Queen%20Ramotsehoa/Leadership-Anchored-in-Consciousness-is-a-Big-Deal.jpg",
    purchaseUrl: "#",
    description: "Insights and wisdom on self-leadership and building positive, conscious relationships in the workplace."
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Queen Ramotsehoa"
      speakerTitle=""
      speakerDesignation="Founder of Tsheto Academy & Executive Coach"
      speakerRole="Executive Coach & Leadership Development Pioneer"
      speakerRef="TSF-QR-50"
      heroBackgroundImage="/speakers/Queen%20Ramotsehoa/Queen-Ramotsehoa-The-Speakers-Firm-8.jpg"
      heroMobileBackgroundImage="/speakers/Queen%20Ramotsehoa/queen-ramotsehoa-mobile.jpg"
      biographyImage="/speakers/Queen%20Ramotsehoa/Queen-Ramotsehoa-The-Speakers-Firm-7.jpg"
      bioHook="“Leadership anchored in consciousness is a big deal. High performance lies in coaching the client's relationship to issues.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="queen-ramotsehoa" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="queen-ramotsehoa" 
        customGallery={customGallery} 
        customVideos={[
          {
            id: "queen-video-1",
            label: "Queen Ramotsehoa TEDx Presentation",
            youtubeId: "WD2H47ISw98"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
