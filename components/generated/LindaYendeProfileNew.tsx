"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "ly-author",
    label: "10x Bestselling Author",
    subtitle: "Author of the widely discussed self-published book 'Wakeup Woman'."
  },
  {
    id: "ly-facilitator",
    label: "Lead Facilitator, EmpowaYouth",
    subtitle: "Helps youth beat poverty and unemployment by connecting them to mentors and opportunities."
  },
  {
    id: "ly-corporate",
    label: "Sales & Marketing Leader",
    subtitle: "Former Key Account Manager for Levi Strauss, Coca-Cola, Mondi Paper, and Mercedes Benz."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "wakeup-woman",
    number: "Theme 01",
    title: "Gender & Relationships Dynamics.",
    copy: "Guiding organizations and audiences through character development, healthy love, and gender equality dialogues."
  },
  {
    id: "youth-empowerment",
    number: "Theme 02",
    title: "Youth Development & Mentorship.",
    copy: "Leveraging large events and strategic industry integrations to combat youth inequality, poverty, and unemployment."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Linda Yende is an author, actor, radio personality, musical artist, events facilitator, brand influencer, voice artist, entrepreneur and sought after MC and inspirational speaker, not only in literary circles, but as a relationship expert, since the release (and the overwhelming response to) his 10x bestselling self-published book, the widely discussed “Wakeup Woman”.",
  "Linda has a sales and marketing background, having worked as Key Account Manager for multinational companies such as Coca Cola, Mondi Paper, Levi Strauss and Mercedes Benz. In addition to his corporate & media careers, has also had great success in the network marketing industry, having recruited and built teams as big as 12,000 members, over the past five years. Linda is a great speaker and has been called upon to compere many events, with his great sense of humour and easy-going nature.",
  "Most recently, Linda has been the Relationships Lead on EmpowaYouth, a programme which uses events to bring industry to township and peri-urban youth. The aim is to help young people to beat the triple challenges of unemployment, poverty and inequality. This he does by finding sponsors & facilitating large events, introducing the youth to mentors, and helping them access opportunities through funding, mentoring, job opportunities, learnerships, and education.",
  "Book Linda Yende through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to bring relationship expertise, youth development facilitation, and positive masculinity dialogues to your next corporate or community event."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "empowayouth", name: "EMPOWAYOUTH" },
  { id: "cocacola", name: "COCA COLA" },
  { id: "levis", name: "LEVI STRAUSS" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "ly-art-1",
      headline: "Love vs lust: ‘A healthy balance between the two is always great’",
      publication: "Eyewitness News (EWN)",
      date: "2024",
      action: "Read Interview",
      url: "https://www.ewn.co.za/2024/10/11/love-vs-lust-a-healthy-balance-between-the-two-is-always-great-relationship-coach",
      image: "/speakers/Linda Yende/Linda-Yende-The-Speakers-Firm.jpg"
    },
    {
      id: "ly-art-2",
      headline: "Understanding the essence of healthy love",
      publication: "Health For Mzansi Podcast",
      date: "2024",
      action: "Listen to Podcast",
      url: "https://healthformzansi.co.za/podcast-understanding-the-essence-of-healthy-love/",
      image: "/speakers/Linda Yende/Linda-Yende-The-Speakers-Firm2.jpg"
    },
    {
      id: "ly-art-3",
      headline: "Intimate Moments With Linda Yende Episode 12",
      publication: "YouTube / Linda Yende",
      date: "2023",
      action: "Watch Episode",
      url: "https://www.youtube.com/watch?v=9bvRdh1FUgY",
      image: "/speakers/Linda Yende/Linda-Yende-The-Speakers-Firm5.jpg"
    }
  ];

  const customVideos = [
    {
      id: "ly-vid-1",
      label: "Linda Yende on Relationships, Youth & Personal Growth",
      youtubeId: "2zAiLdQrqQQ"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Linda Yende"
      speakerTitle=""
      speakerDesignation="Relationship Coach, Author & Youth Mentor"
      speakerRole="Lead Facilitator of EmpowaYouth & Author of Wakeup Woman"
      speakerRef="TSF-LY-54"
      heroBackgroundImage="/speakers/Linda Yende/Linda-Yende-The-Speakers-Firm4.jpg"
      biographyImage="/speakers/Linda Yende/Linda-Yende-The-Speakers-Firm3.jpg"
      bioHook="“Uncovering the essence of healthy love, building youth resilience, and empowering communities to beat inequality.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="linda-yende" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="linda-yende" 
        customIntroText="Motivational talks, focus group facilitation, and youth empowerment seminars led by Linda Yende."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
