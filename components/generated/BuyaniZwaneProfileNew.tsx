import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "breakthrough-ceo", label: "CEO of Breakthrough Development", subtitle: "Founded in 2000" },
  { id: "gibs-fulltime", label: "GIBS Full-Time Faculty", subtitle: "Leadership Lecturer" },
  { id: "sanlam-exco", label: "Former HR Chief Executive", subtitle: "Sanlam Limited Group Role" },
  { id: "franklincovey", label: "Former FranklinCovey Chair", subtitle: "Southern Africa Region" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "Empathy & Heart-Centered Leadership",
    copy: "Demonstrating how effective leaders manifest love, active empathy, and deep-seated character during crisis points to align modern workforces."
  },
  {
    id: "theme-2",
    number: "02",
    title: "HR Strategy & Talent Architecture",
    copy: "Structuring general management models, executing continental change strategies, and running comprehensive team development initiatives."
  },
  {
    id: "theme-3",
    number: "03",
    title: "Next-Gen Succession Planning",
    copy: "Mentoring upcoming executives and grooming future leaders to assume core governance roles in the next 20 to 30 years."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr Buyani Zwane has been involved in human resources management and leadership development for over 25 years, with both local and international companies. He is the director of Dynamic Leadership Solutions (Pty) Limited and Magnificent Mile Trading (Pty) Limited, as well as the CEO of Breakthrough Development (Pty) limited – a leadership development company established in 2000. He also recently served as chief executive: group human resources for Sanlam Limited.",
  "He served as facilitator, director and executive chairperson at FranklinCovey Southern Africa between 2002 and 2010.",
  "Buyani is a full-time faculty member and lecturer at Gordon Institute of Business He is a dynamic speaker and gifted facilitator."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "gibs", name: "GIBS Faculty" },
  { id: "sanlam", name: "Sanlam" },
  { id: "franklincovey", name: "FranklinCovey" }
];

const customMedia = [
  {
    id: "buyani-media-1",
    headline: "Effective leaders demonstrate love and empathy to those they lead",
    publication: "IOL",
    date: "",
    url: "https://iol.co.za/business-report/opinion/2021-08-30-effective-leaders-demonstrate-love-and-empathy-to-those-they-lead/",
    action: "View Opinion",
    image: "/speakers/Buyani%20Zwane/buyani-zwane-the-speakers-firm-4.jpg"
  },
  {
    id: "buyani-media-2",
    headline: "LEAD with Heart. | Buyani Zwane | TEDxUniversityofJohannesburg",
    publication: "YouTube / TEDx",
    date: "",
    url: "https://www.youtube.com/watch?v=gvqe98KEEdM",
    action: "Watch Video",
    image: "/speakers/Buyani%20Zwane/buyani-zwane-the-speakers-firm-8.jpg"
  },
  {
    id: "buyani-media-3",
    headline: "A crisis distinguishes leaders from pretenders",
    publication: "IOL",
    date: "",
    url: "https://iol.co.za/business-report/opinion/2021-08-02-a-crisis-distinguishes-leaders-from-pretenders/",
    action: "View Opinion",
    image: "/speakers/Buyani%20Zwane/buyani-zwane-the-speakers-firm-2.jpg"
  }
];

const customGallery = [
  {
    id: "buyani-gal-1",
    src: "/speakers/Buyani%20Zwane/buyani-zwane-the-speakers-firm-7.jpg",
    alt: "Dr Buyani Zwane Presentation",
    caption: "Dynamic Leadership Facilitation",
    className: ""
  },
  {
    id: "buyani-gal-2",
    src: "/speakers/Buyani%20Zwane/buyani-zwane-the-speakers-firm-9.jpg",
    alt: "Dr Buyani Zwane Keynote",
    caption: "TEDx Keynote Presentation",
    className: ""
  },
  {
    id: "buyani-gal-3",
    src: "/speakers/Buyani%20Zwane/buyani-zwane-the-speakers-firm-6.jpg",
    alt: "Dr Buyani Zwane Academic Session",
    caption: "GIBS Faculty Class",
    className: ""
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Dr. Buyani Zwane"
      speakerTitle=""
      speakerDesignation="The People & Culture Builder, Leadership Coach & Organisational Strategist"
      speakerRole="Leadership Developer & Executive Coach"
      speakerRef="TSF-BZ-36"
      heroBackgroundImage="/speakers/Buyani%20Zwane/buyani-zwane-the-speakers-firm-8.jpg"
      biographyImage="/speakers/Buyani%20Zwane/buyani-zwane-the-speakers-firm-7.jpg"
      bioHook="“A crisis is the ultimate test of leadership. True leaders distinguish themselves by demonstrating love, empathy, and character.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="dr-buyani-zwane" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="dr-buyani-zwane" 
        customGallery={[]} 
        customVideos={[
          {
            id: "buyani-video-1",
            label: "Dr. Buyani Zwane Presentation",
            youtubeId: "sD3aIz1OWCw"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
