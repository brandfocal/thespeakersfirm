import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "clin-psych", label: "Clinical Psychologist", subtitle: "Private & Public Practice" },
  { id: "mental-adv", label: "Mental Health Advocate", subtitle: "SADAG Contributor" },
  { id: "org-consultant", label: "Organisational Consultant", subtitle: "Leadership Advisory" },
  { id: "media-comm", label: "TV & Radio Host", subtitle: "Public Commentator" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "Mental Fitness & Peak Performance",
    copy: "Unpacking lessons from psychology and elite sport to help leaders sustain energy, focus, and resilience while 'beating their best' without burning out."
  },
  {
    id: "theme-2",
    number: "02",
    title: "Understanding Severe Mental Health Challenges & Risk",
    copy: "Empowering organisations, schools, and communities to recognise, respond to, and manage serious conditions with empathy and precision."
  },
  {
    id: "theme-3",
    number: "03",
    title: "Psychoanalysis, Identity & Modern Masculinity",
    copy: "Exploring what modern psychology reveals about leadership, race, gender, and masculinity, offering profound lessons for organizational transformation."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr Zamo Mbele is an internationally acclaimed Clinical Psychologist, Mental Health Advocate, and Keynote Speaker whose work helps men, leaders, and organisations master the psychology of purpose, performance, and human transformation. He stands at the intersection of mental health, leadership, and culture, translating the science of the mind into powerful insights that build emotionally intelligent, high performing, and purpose driven people and institutions.",
  "A respected thought leader with a distinguished career across clinical practice, public mental health, and organisational consulting, Dr Mbele is recognised for helping teams and executives confront the hidden dynamics shaping modern leadership, from burnout and emotional repression to the psychological demands of change, identity, and belonging. His message is both deeply human and profoundly strategic, true strength begins with self-awareness.",
  "As a sought-after keynote speaker for men’s gatherings, leadership summits, wellness campaigns, and transformation movements, Dr Mbele confronts the complexities and contradictions of modern masculinity, exploring how men can lead, connect, and thrive in an era that demands vulnerability as much as vision. His sessions challenge stereotypes, inspire healing, and equip audiences to lead with balance, authenticity, and empathy.",
  "Dr Mbele is not merely a speaker; he is a catalyst for human evolution. His work invites men, leaders, and teams to move beyond performance into purpose, beyond authority into awareness, and beyond silence into transformation.",
  "Aligned with The Speakers Firm’s philosophy of curating internationally acclaimed keynote speakers and sought after guest voices who shift strategy, culture, and legacy, Dr Zamo Mbele represents the new generation of leadership thinkers redefining success through self-mastery, empathy, and human connection.",
  "Book Dr Zamo Mbele with The Speakers Firm for your next men’s gathering, leadership summit, corporate wellness event, or transformation campaign, and experience how psychology, authenticity, and purpose can unlock a new standard of leadership, culture, and impact."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "sadag", name: "SADAG" },
  { id: "tsf", name: "THE SPEAKERS FIRM" }
];

const customMedia = [
  {
    id: "zamo-media-1",
    headline: "SADAG Calls for Open Dialogue on Suicide Prevention",
    publication: "Media Update",
    date: "",
    url: "https://www.mediaupdate.co.za/publicity/156845/sadag-calls-for-open-dialogue-on-suicide-prevention",
    action: "Read Article",
    image: "/speakers/Zamo%20Mbele/Zamo-Mbele-The-Speakers-Firm.jpg"
  },
  {
    id: "zamo-media-2",
    headline: "Men’s mental health: no longer taboo",
    publication: "Health-e News",
    date: "",
    url: "https://health-e.org.za/2022/03/16/mens-mental-health-guys-must-man-up-and-get-help/",
    action: "Read Article",
    image: "/speakers/Zamo%20Mbele/Zamo-Mbele-The-Speakers-Firm-2.jpg"
  },
  {
    id: "zamo-media-3",
    headline: "Mind Over Matter: Prioritising Mental Health for Men (Watch)",
    publication: "BM Psychologist Blog",
    date: "",
    url: "https://bmpsychologist.co.za/blog/2023/11/08/mind-over-matter-prioritising-mental-health-for-men-watch/",
    action: "Watch Webinar",
    image: "/speakers/Zamo%20Mbele/Zamo-Mbele-The-Speakers-Firm-3.jpg"
  }
];

const customGallery = [
  {
    id: "zamo-gal-1",
    src: "/speakers/Zamo%20Mbele/Zamo-Mbele-The-Speakers-Firm.jpg",
    alt: "Dr Zamo Mbele Portrait",
    caption: "Dr Zamo Mbele",
    className: ""
  },
  {
    id: "zamo-gal-2",
    src: "/speakers/Zamo%20Mbele/Zamo-Mbele-The-Speakers-Firm-2.jpg",
    alt: "Dr Zamo Mbele Speaking",
    caption: "Clinical Psychology Keynote",
    className: ""
  },
  {
    id: "zamo-gal-3",
    src: "/speakers/Zamo%20Mbele/Zamo-Mbele-The-Speakers-Firm-3.jpg",
    alt: "Dr Zamo Mbele Presentation",
    caption: "Mental Health Summit",
    className: ""
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Zamo Mbele"
      speakerTitle="Dr."
      speakerDesignation="Clinical Psychologist & Mental Health Advocate"
      speakerRole="Public Commentator & Organisational Psychology Advisor"
      speakerRef="TSF-ZM-13"
      heroBackgroundImage="/speakers/Zamo%20Mbele/Zamo-Mbele-The-Speakers-Firm-4.jpg"
      biographyImage="/speakers/Zamo%20Mbele/Zamo-Mbele-The-Speakers-Firm-2.jpg"
      bioHook="“True strength begins with self-awareness, and mental fitness is the engine of sustainable peak performance.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="zamo-mbele" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="zamo-mbele" 
        customGallery={customGallery} 
        customVideos={[
          {
            id: "zamo-video-1",
            label: "Dr Zamo Mbele Keynote Video",
            youtubeId: "QpEojIJygcY"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
