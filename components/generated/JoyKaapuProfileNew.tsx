import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "mckinsey-fac", label: "McKinsey Facilitator", subtitle: "Facilitator of Transformation" },
  { id: "coactive-coach", label: "Co-Active Coach", subtitle: "Certified Leadership Coach (Spain)" },
  { id: "gallup-coach", label: "Gallup Strengths Coach", subtitle: "Certified StrengthsFinder Coach" },
  { id: "barrett-cult", label: "Barrett Consultant", subtitle: "Certified Culture Consultant" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "Culture Transformation & Systemic Performance",
    copy: "Mapping corporate values, measuring culture gaps, and embedding new operational models that align with modern strategic goals."
  },
  {
    id: "theme-2",
    number: "02",
    title: "Strengths-Based Leadership & Mindset Shifts",
    copy: "Utilizing Gallup tools and Co-Active coaching methods to transition teams from comfortable routines into growth paradigms."
  },
  {
    id: "theme-3",
    number: "03",
    title: "Psychological Safety & Safe Team Spaces",
    copy: "Building the high trust environments necessary for difficult strategic feedback, innovation, and change adoption."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Joy Machoene Kaapu brings over 20 years of corporate and consulting experience from her work as a Leadership Development and Organisational Culture Transformation Consultant. She has been trained as a Facilitator of Transformation by McKinsey & Company and Gita Bellin & Associates in Provence, the South of France. Joy is certified as a Leadership Coach from The Co-Active Training Institute in Spain and StrengthsFinder Coach from Gallup. Her academic background is in Human Resources Management, and she is also a certified Culture Transformation Consultant from the Barrett Values Centre. She applies a holistic approach to business performance by taking organisations on a journey to awaken the innate human potential in their teams which helps them to embed a thriving culture that drives sustainable success. Her approach to work is centered around Mindsets, Behaviours and Capabilities while co-creating with clients to shift root perspectives that brings about personal and organisational culture transformation.",
  "Joy is South African by birth and currently resides in Johannesburg. She consults globally and loves co-creating with clients beyond borders. My clients describe me as a catalyst for leadership development and organisational culture transformation. They resonate with the psychological safety I create while taking them out of their comfort zones to shift mindsets, behaviours, capabilities and transform cultures."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "mckinsey", name: "MCKINSEY & COMPANY" },
  { id: "gallup", name: "GALLUP STRENGTHS" },
  { id: "barrett", name: "BARRETT VALUES CENTRE" }
];

const customMedia = [
  {
    id: "joy-media-1",
    headline: "A casual conversation with Thabang Mahlale about leadership...",
    publication: "YouTube",
    date: "",
    url: "https://www.youtube.com/watch?v=5oDvqhPTsEI",
    action: "Watch Video",
    image: "/speakers/Joy%20Kaapu/Joy-Kaapu-The-Speakers-Firm-3.jpg"
  },
  {
    id: "joy-media-2",
    headline: "What does Surrendering Your Career mean to you?",
    publication: "YouTube",
    date: "",
    url: "https://www.youtube.com/watch?v=4GEJ2tscrm4",
    action: "Watch Video",
    image: "/speakers/Joy%20Kaapu/Joy-Kaapu-The-Speakers-Firm-.jpg"
  },
  {
    id: "joy-media-3",
    headline: "Heritage Month - Conversations with Joy Kaapu and Sipho Nkosi & Ido Lekota",
    publication: "YouTube",
    date: "September",
    url: "https://www.youtube.com/watch?v=bYiZlHCD2D0",
    action: "Watch Conversation",
    image: "/speakers/Joy%20Kaapu/Joy-Kaapu-The-Speakers-Firm-2.jpg"
  }
];

const customGallery = [
  {
    id: "joy-gal-1",
    src: "/speakers/Joy%20Kaapu/Joy-Kaapu-The-Speakers-Firm-5.jpg",
    alt: "Joy Kaapu Portrait",
    caption: "Joy Machoene Kaapu",
    className: ""
  },
  {
    id: "joy-gal-2",
    src: "/speakers/Joy%20Kaapu/Joy-Kaapu-The-Speakers-Firm-6.jpg",
    alt: "Joy Kaapu Consultation",
    caption: "Organisational Culture Transformation session",
    className: ""
  },
  {
    id: "joy-gal-3",
    src: "/speakers/Joy%20Kaapu/Joy-Kaapu-The-Speakers-Firm-4.jpg",
    alt: "Joy Kaapu Presentation",
    caption: "Leadership Mindsets Keynote",
    className: ""
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Joy Machoene Kaapu"
      speakerTitle=""
      speakerDesignation="Leadership & Culture Transformation Consultant"
      speakerRole="Global Culture Transformation Catalyst"
      speakerRef="TSF-JK-17"
      heroBackgroundImage="/speakers/Joy%20Kaapu/Joy-Kaapu-The-Speakers-Firm-7.jpg"
      biographyImage="/speakers/Joy%20Kaapu/Joy-Kaapu-The-Speakers-Firm-5.jpg"
      bioHook="“Transformation begins at the root perspective. By shifting mindsets, behaviours, and capabilities, we unlock potential and embed a thriving culture.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="joy-kaapu" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="joy-kaapu" 
        customGallery={customGallery} 
        customVideos={[
          {
            id: "joy-video-1",
            label: "Joy Kaapu Keynote Presentation",
            youtubeId: "S0kCXNCjRhQ"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
