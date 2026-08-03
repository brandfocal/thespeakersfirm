import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "seta-acc", label: "Seta Accredited", subtitle: "Rise Up and Do It" },
  { id: "wits-map", label: "Wits Business School MAP", subtitle: "Management Advancement Program" },
  { id: "gibs-mdp", label: "GIBS MDP", subtitle: "Management Development Program" },
  { id: "radio-spk", label: "Broadcaster Commentator", subtitle: "Metro FM, SAFM, Ukhozi" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "Setback Recovery & Resilience Mastery",
    copy: "Learning to master change, rebound from operational and personal failure, and set goals that map directly to long-term destiny pathways."
  },
  {
    id: "theme-2",
    number: "02",
    title: "Corporate Service Delivery Excellence",
    copy: "Training public and private sector employees on client relationship management, service delivery pipelines, and operational alignment."
  },
  {
    id: "theme-3",
    number: "03",
    title: "Youth Leadership & Life Skills Architecture",
    copy: "Providing structured life skills camps, engineering-aligned career design, and academic empowerment frameworks."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Management Consultant and Motivational speaker, Team-­builder, Trainer, Facilitator, Life Coach with excellent personal, organizational and client relationship management capability. Linda Ntuli is making a great contribution on Radio (Metro FM, SAFM, Kasie FM, Ukhozi, Jozi FM and Ikwekwezi FM) and Television (SABC and Soweto tv). He is a regular contributor on the weekly Move Magazine. He has played a role in the department of education to train public servants with the ultimate goal being to improve service delivery, some of his happy clients include SARS, Department Education, Gauteng Local Government and Housing, Mpumalanga Department of Education, Mpumalanga Department of Health, Limpopo Department of Arts and Culture, Engen, City of Joburg, Nedbank, Department of Health, Transnet, Emerald Foundation SMME annual conference just to mention a few. Rise Up and Do It is accredited by the Services Seta. He has authored two books: Your destiny is calling, Make it Happen & From sacrifice to greatness.",
  "He has been involved with SAICA to inspire and conduct life skills workshops at the ​Thuthuka camp. He has done impacted learners at Ratanda, Sedibeng district, Attredgeville, Diepslot, Soweto, Tembisa, Devon and Mpumalanga(Bushbuckridge and Piet Retief) just to mention a few. Has done extensive work for NASDEV, TUT, VUT, North West University, UNISA and UJ. He has conducted empowerment seminars in Soweto, Daveyton, Orange Farm, Madadeni and Tembisa as part of giving back to the community (CSI). In his thought provoking and entertaining presentations, Linda helps people to: master change, rebound from failure, set goals, take responsibility, think positively, pursue excellence, come out of their comfort zones and above all make a difference. His academic background include: Electrical Engineering (UJ) Sales and Marketing Management (Damelin College), Maintenance Practice (University of Pretoria), Management Advancement Program (Wits Business School) Management Development Program (GIBS).​"
];

const SOCIAL_PROOF_LOGOS = [
  { id: "nedbank", name: "NEDBANK" },
  { id: "transnet", name: "TRANSNET" },
  { id: "sars", name: "SARS" }
];

const customMedia = [
  {
    id: "linda-media-1",
    headline: "Linda Ntuli - Taking Ownership",
    publication: "YouTube",
    date: "",
    url: "https://www.youtube.com/watch?v=bmEiz-wDT-I",
    action: "Watch DVD Clip",
    image: "/speakers/Linda%20Ntuli/Linda-Ntuli-The-Speakers-Firm9.jpg"
  },
  {
    id: "linda-media-2",
    headline: "Linda Ntuli Interview",
    publication: "Radio 702 / Omny.fm",
    date: "",
    url: "https://omny.fm/shows/podcast-7/linda-ntuli#description",
    action: "Listen to Interview",
    image: "/speakers/Linda%20Ntuli/Linda-Ntuli-The-Speakers-Firm2.jpg"
  },
  {
    id: "linda-media-3",
    headline: "Blunder #159 | When Success Feels Like a Mistake | Linda Ntuli",
    publication: "YouTube",
    date: "",
    url: "https://www.youtube.com/watch?v=2CERE0K-jwA",
    action: "Watch Video",
    image: "/speakers/Linda%20Ntuli/Linda-Ntuli-The-Speakers-Firm4.jpg"
  }
];

const customGallery = [
  {
    id: "linda-gal-1",
    src: "/speakers/Linda%20Ntuli/Linda-Ntuli-The-Speakers-Firm7.jpg",
    alt: "Linda Ntuli Portrait",
    caption: "Linda Ntuli",
    className: ""
  },
  {
    id: "linda-gal-2",
    src: "/speakers/Linda%20Ntuli/Linda-Ntuli-The-Speakers-Firm3.jpg",
    alt: "Linda Ntuli Speaking",
    caption: "Empowerment Seminar Presentation",
    className: ""
  },
  {
    id: "linda-gal-3",
    src: "/speakers/Linda%20Ntuli/Linda-Ntuli-The-Speakers-Firm5.jpg",
    alt: "Linda Ntuli Workshop",
    caption: "Corporate Team-Building Workshop",
    className: ""
  }
];

const customBooks = [
  {
    id: "linda-book-1",
    title: "Life University Knocks",
    coverImage: "/speakers/Linda%20Ntuli/Life-University-Knocks-Linda-Ntuli.jpg",
    purchaseUrl: "https://www.amazon.com/Life-University-Knocks-Linda-Ntuli/dp/B014CWPCJU",
    description: "Lessons on handling setbacks and rebounding from failures in life and career."
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Linda Ntuli"
      speakerTitle=""
      speakerDesignation="Management Consultant, Speaker & Life Coach"
      speakerRole="Acclaimed Motivational Speaker & Coach"
      speakerRef="TSF-LN-31"
      heroBackgroundImage="/speakers/Linda%20Ntuli/Linda-Ntuli-The-Speakers-Firm.jpg"
      biographyImage="/speakers/Linda%20Ntuli/Linda-Ntuli-The-Speakers-Firm7.jpg"
      bioHook="“Mastering change, rebounding from failure, and pursuing excellence starts when you decide to take absolute responsibility and make a difference.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      books={customBooks}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="linda-ntuli" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="linda-ntuli" 
        customGallery={customGallery} 
        customVideos={[
          {
            id: "linda-video-1",
            label: "Linda Ntuli Presentation",
            youtubeId: "NNvuaDGCtzk"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
