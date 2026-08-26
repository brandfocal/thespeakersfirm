import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "urology-head", label: "Head of Urology", subtitle: "Sefako Makgatho University" },
  { id: "mmed-urol", label: "MMed (Urology)", subtitle: "Medunsa Degree" },
  { id: "prostate-founder", label: "Foundation Founder", subtitle: "Prostate Cancer Foundation SA" },
  { id: "cmsa-chair", label: "Academic Chair", subtitle: "Colleges of Medicine SA (CMSA)" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "Oncology Research & Multidisciplinary Cancer Care",
    copy: "Publishing peer-reviewed research, reviewing journals, and chairing urological associations to structure oncology guidelines."
  },
  {
    id: "theme-2",
    number: "02",
    title: "Men's Health & Wellness Advocacy",
    copy: "Urging men to advocate for their health, leading wellness programs, and educating communities on cancer screening and prevention."
  },
  {
    id: "theme-3",
    number: "03",
    title: "Academic Medicine & Clinical Training",
    copy: "Structuring medical curricula, heading academic departments, and training next-generation specialists in urological medicine."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Prof Shingai Mutambirwa is Head of the Department of Urology at Dr George Mukhari Academic Hospital and Sefako Makgatho Health Sciences University in Pretoria, South Africa, a position he has held since 2008. He holds an MMed (Urology) from Medunsa and an FCS (Urol) degree. Prof. Mutambirwa is actively involved in teaching and research, participating in both university-led and industry-driven projects.",
  "He is a founding member of the Prostate Cancer Foundation of South Africa and serves on several academic and professional boards, including Chair of the Academic Committee for the Colleges of Medicine of South Africa (CMSA) and the South African Urological Association. He also contributes to multidisciplinary cancer teams and is a member of organisations such as the African Society of Sexual Medicine and the Continence Association of South Africa.",
  "Prof Mutambirwa has published over 80 peer-reviewed articles and 10 book chapters and serves as a reviewer for leading journals including The Journal of Urology and The African Journal of Urology."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "sefakomakgatho", name: "Sefako Makgatho University" },
  { id: "prostatefoundation", name: "Prostate Cancer Foundation" },
  { id: "cmsa", name: "CMSA" }
];

const customMedia = [
  {
    id: "shingai-media-1",
    headline: "“You mustn’t fight cancer – you must become friends with it, so that you can control your friend”",
    publication: "Combat Cancer",
    date: "",
    url: "https://combatcancer.com/you-must-become-friends-with-cancer",
    action: "View Interview",
    image: "/speakers/Shingai%20Mutambirwa/Dr-Shingai-Mutambirwa-The-Speakers-Firm-5.jpg"
  },
  {
    id: "shingai-media-2",
    headline: "Prof. Shingai Mutambirwa, Professor and chair division of urology",
    publication: "Omny / Noname Breakfast",
    date: "",
    url: "https://omny.fm/shows/nonamebreakfast-show/prof-shingai-mutambirwa-professor-and-chair-divisi#description",
    action: "Listen Audio",
    image: "/speakers/Shingai%20Mutambirwa/Dr-Shingai-Mutambirwa-The-Speakers-Firm-3.jpg"
  },
  {
    id: "shingai-media-3",
    headline: "#WellnessWednesday| Gauteng transmission update",
    publication: "Omny / The Morning Buzz",
    date: "",
    url: "https://omny.fm/shows/the-morning-buzz/prof-shingai-mutambirwa-professor-and-chair-divisi#description",
    action: "Listen Audio",
    image: "/speakers/Shingai%20Mutambirwa/Dr-Shingai-Mutambirwa-The-Speakers-Firm-2.jpg"
  }
];

const customGallery = [
  {
    id: "shingai-gal-1",
    src: "/speakers/Shingai%20Mutambirwa/Dr-Shingai-Mutambirwa-The-Speakers-Firm-4.jpg",
    alt: "Dr. Shingai Mutambirwa Presentation",
    caption: "Academic Urology Presentation",
    className: ""
  },
  {
    id: "shingai-gal-2",
    src: "/speakers/Shingai%20Mutambirwa/Dr-Shingai-Mutambirwa-The-Speakers-Firm-8.jpg",
    alt: "Dr. Shingai Mutambirwa Academic",
    caption: "Teaching & Research Advisory",
    className: ""
  },
  {
    id: "shingai-gal-3",
    src: "/speakers/Shingai%20Mutambirwa/Dr-Shingai-Mutambirwa-The-Speakers-Firm-6.jpg",
    alt: "Dr. Shingai Mutambirwa Medical Session",
    caption: "Prostate Cancer Foundation Meeting",
    className: ""
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Dr. Shingai Mutambirwa"
      speakerTitle=""
      speakerDesignation="Head of the Department of Urology at Dr George Mukhari Academic Hospital & Sefako Makgatho University"
      speakerRole="Academic Leader & Medical Specialist"
      speakerRef="TSF-SM-34"
      heroBackgroundImage="/speakers/Shingai%20Mutambirwa/Dr-Shingai-Mutambirwa-The-Speakers-Firm-2.jpg"
      biographyImage="/speakers/Shingai%20Mutambirwa/Dr-Shingai-Mutambirwa-The-Speakers-Firm.jpg"
      bioHook="“Empowering men to become active advocates for their own health and wellness preserves families and builds future legacy.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="dr-shingai-mutambirwa" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="dr-shingai-mutambirwa" 
        customGallery={[]} 
        customVideos={[
          {
            id: "shingai-video-1",
            label: "Dr. Shingai Mutambirwa Medical Reel",
            youtubeId: "QVZzW-RGj0g"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
