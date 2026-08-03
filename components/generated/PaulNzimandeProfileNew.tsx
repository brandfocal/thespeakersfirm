import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "exec-coach", label: "Executive Coach", subtitle: "Transformational Leadership" },
  { id: "author-bible-dep", label: "Acclaimed Author", subtitle: "The Bible & Depression" },
  { id: "mental-wellness", label: "Board Member", subtitle: "Durban & Coastal Mental Health" },
  { id: "leadership-spk", label: "Keynote Speaker", subtitle: "Men's Gatherings & Wellness" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "Leadership, Mental Health & Purpose Driven Transformation",
    copy: "Embracing human-centered leadership, cultivating psychological safety, and fostering organizational cultures of empathy, accountability, and high performance."
  },
  {
    id: "theme-2",
    number: "02",
    title: "Emotional Intelligence & Inner Healing in Leadership",
    copy: "Challenging leaders to heal inwardly so they can lead outwardly with authenticity and conviction, bridging faith and strategy."
  },
  {
    id: "theme-3",
    number: "03",
    title: "Modern Masculinity & Purposeful Restructuring",
    copy: "Inspiring men to lead from the inside out, aligning personal purpose with organizational strategy and community rebuilding."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Paul Nzimande is a transformational leadership strategist, executive coach, and author whose life’s work is dedicated to helping leaders, men, and organisations rediscover purpose, alignment, and emotional intelligence. With nearly three decades of executive experience across the private, public, and nonprofit sectors, Paul has become a trusted guide for those seeking to lead with humanity, courage, and clarity in an era of relentless change.",
  "As a speaker represented by The Speakers Firm, Paul stands at the profound intersection of leadership, mental health, and purpose driven transformation. His keynotes go beyond motivation, they awaken. Through powerful storytelling and deep insight, he equips leaders and teams to embrace human centred leadership, cultivate psychological safety, and foster cultures of empathy, accountability, and performance. His message challenges leaders to heal inwardly so they can lead outwardly with authenticity and conviction.",
  "Paul is the acclaimed author of The Bible and Depression, a deeply moving reflection on faith, healing, and the power of renewal. His work is not theory, it is testimony. As a board member of Durban & Coastal Mental Health, Paul continues to champion the cause of mental wellness and leadership restoration, shaping national conversations on emotional resilience and human dignity.",
  "A sought-after keynote speaker for men’s gatherings, leadership summits, corporate wellness campaigns, and national transformation movements, Paul’s presence is both grounding and catalytic. He inspires men and leaders to lead from the inside out, bridging the heart and the mind, faith and strategy, healing and high performance. Every session leaves audiences awakened to the truth that leadership is not just about titles, it is about transformation.",
  "Aligned with The Speakers Firm’s philosophy of curating internationally acclaimed keynote speakers who shift strategy, culture, and legacy, Paul Nzimande embodies purpose driven influence. His voice carries wisdom, empathy, and power, calling leaders and men to rise, to restore, and to rebuild. Through his work, organisations and societies are reminded that true leadership begins with wholeness, and that healing is the new frontier of human performance.",
  "Book Paul Nzimande with The Speakers Firm for men’s gatherings, leadership summits, organisational wellness events, and national transformation campaigns that ignite authenticity, restore purpose, and redefine what it means to lead and live with impact."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "durban-mental-health", name: "DURBAN MENTAL HEALTH" },
  { id: "tsf", name: "THE SPEAKERS FIRM" }
];

const books = [
  {
    id: "bible-depression",
    title: "The Bible and Depression",
    description: "A deeply moving reflection on faith, healing, and the power of renewal in the face of mental struggles.",
    coverImage: "/speakers/Paul%20Nzimande/The-Bible-And-Depression-Paul-Nzimande.jpg",
    url: "https://www.amazon.com/Bible-Depression-Paul-Nzimande-ebook/dp/B098PBLV2Z"
  }
];

const customMedia = [
  {
    id: "paul-media-1",
    headline: "Our Dynasty: There is a huge set of conflicting expectations when it comes to widowed women in particular",
    publication: "The Morning Bliss",
    date: "",
    url: "https://omny.fm/shows/the-morning-bliss/our-dynasty-there-is-a-huge-set-of-conflicting-exp#description",
    action: "Listen Now",
    image: "/speakers/Paul%20Nzimande/Paul-Nzimande-The-Speakers-Firm-5.jpg"
  },
  {
    id: "paul-media-2",
    headline: "Emotional Intelligence Leadership by Paul Nzimande",
    publication: "YouTube",
    date: "",
    url: "https://www.youtube.com/watch?v=-oJ938DOWoE",
    action: "Watch Video",
    image: "/speakers/Paul%20Nzimande/Paul-Nzimande-The-Speakers-Firm-2.jpg"
  },
  {
    id: "paul-media-3",
    headline: "Our Dynasty - Paul Nzimande – Author and Life Coach",
    publication: "The Morning Bliss",
    date: "",
    url: "https://omny.fm/shows/the-morning-bliss/our-dynasty-paul-nzimande-author-and-life-coach#description",
    action: "Listen Now",
    image: "/speakers/Paul%20Nzimande/Paul-Nzimande-The-Speakers-Firm-3.jpg"
  }
];

const customGallery = [
  {
    id: "paul-gal-1",
    src: "/speakers/Paul%20Nzimande/Paul-Nzimande-The-Speakers-Firm.jpg",
    alt: "Paul Nzimande portrait",
    caption: "Paul Nzimande",
    className: ""
  },
  {
    id: "paul-gal-2",
    src: "/speakers/Paul%20Nzimande/Paul-Nzimande-The-Speakers-Firm-6.jpg",
    alt: "Paul Nzimande speaking",
    caption: "Leadership Keynote",
    className: ""
  },
  {
    id: "paul-gal-3",
    src: "/speakers/Paul%20Nzimande/Paul-Nzimande-The-Speakers-Firm-7.jpg",
    alt: "Paul Nzimande session",
    caption: "Mental Wellness Seminar",
    className: ""
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Paul Nzimande"
      speakerTitle="Mr."
      speakerDesignation="Life Coach, Author & Mental Wellness Advocate"
      speakerRole="Transformational Leadership Strategist & Executive Coach"
      speakerRef="TSF-PN-11"
      heroBackgroundImage="/speakers/Paul%20Nzimande/Paul-Nzimande-The-Speakers-Firm-8.jpg"
      biographyImage="/speakers/Paul%20Nzimande/Paul-Nzimande-The-Speakers-Firm-5.jpg"
      bioHook="“True leadership begins with wholeness, and healing is the new frontier of human performance.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={books}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="paul-nzimande" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="paul-nzimande" 
        customGallery={customGallery} 
        customVideos={[
          {
            id: "paul-video-1",
            label: "Paul Nzimande Interview",
            youtubeId: "UNYaYpsIOBA"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
