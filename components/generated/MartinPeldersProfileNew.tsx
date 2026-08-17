"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "mp-matrixmen",
    label: "Founder of MatrixMen",
    subtitle: "Pioneering organization advocating for male survivors of abuse and men's mental health."
  },
  {
    id: "mp-author",
    label: "Bestselling Author",
    subtitle: "Wrote the acclaimed memoir 'The Pumpkin Van' detailing his story of healing and advocacy."
  },
  {
    id: "mp-speaker",
    label: "International Keynote Speaker",
    subtitle: "Delivers strategic talks on workplace psychological safety and human-centered leadership."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "psychological-safety",
    number: "Theme 01",
    title: "Psychological Safety in the Workplace.",
    copy: "Equipping organizations to cultivate spaces where vulnerability is met with trust and empathy."
  },
  {
    id: "biblical-masculinity",
    number: "Theme 02",
    title: "Redefining Healthy Masculinity.",
    copy: "Challenging societal norms and promoting emotional intelligence, healing, and allyship in corporate cultures."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Martin Pelders is an acclaimed author, international speaker, and the founder of MatrixMen, a pioneering organization that has championed men’s mental health, biblical masculinity, and healing for male survivors of sexual abuse across Africa for over 14 years. A survivor himself, Martin transformed profound personal pain into purposeful action, authoring the bestselling memoir The Pumpkin Van! and building one of South Africa’s most courageous platforms for men to confront trauma, reclaim dignity, and lead with authenticity, compassion, and emotional intelligence.",
  "Drawing from lived experience, evidence-based insights, and real-world applications, Martin’s work sits at the intersection of healing, leadership, and cultural transformation. He equips leaders and organizations to cultivate psychological safety in the workplace, creating environments where vulnerability is met with trust, empathy fosters accountability, and unresolved stress or trauma no longer undermines performance, team dynamics, or long-term resilience. His talks move audiences from awareness to actionable change, redefining strength through allyship and emotional resilience.",
  "As a catalytic thinker and gifted storyteller, Martin challenges societal norms around masculinity while delivering strategic frameworks that drive human-centered leadership. His message resonates in corporate boardrooms, executive retreats, faith communities, and national campaigns. Aligned with The Speakers Firm’s philosophy of activating seismic thinkers who shift strategy, culture, and legacy, Martin Pelders embodies purposeful influence: transforming silence into courageous dialogue.",
  "Book Martin Pelders through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to bring definitive psychological safety workshops, leadership transformation talks, and men's mental health keynotes to your organization."
];

const BOOKS = [
  {
    id: "pumpkin-van",
    title: "The Pumpkin Van",
    description: "The life story of Martin Pelders, detailing his journey of healing from sexual abuse and his mission to help other male survivors break the silence across Africa.",
    coverImage: "/speakers/Martin Pelders/The-Pumpkin-Van-The-Life-Story-Of-Martin-Pelders-Healing-From-Sexual-Abuse-And-How-He-Helped-Others-Too.jpg",
    url: "https://www.goodreads.com/book/show/210462130-the-pumpkin-van"
  }
];

const SOCIAL_PROOF_LOGOS = [
  { id: "matrixmen", name: "MATRIXMEN NGO" },
  { id: "justgospel", name: "JUSTGOSPEL / IONO.FM" },
  { id: "healthe", name: "HEALTH-E NEWS" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "pelders-art-1",
      headline: "“Men Experience GBV Too”: Martin Pelders on Breaking the Silence",
      publication: "YouTube / #AfricanDiaries",
      date: "2024",
      action: "Watch Interview",
      url: "https://www.youtube.com/watch?v=b_rFHKGvkYU",
      image: "/speakers/Martin Pelders/Martin-Pelders-The-Speakers-Firm-3.jpg"
    },
    {
      id: "pelders-art-2",
      headline: "Reclaiming Biblical Masculinity: Fighting for Men’s Mental Health",
      publication: "JustGospel / iono.fm",
      date: "2024",
      action: "Listen to Podcast",
      url: "https://iono.fm/e/1583393",
      image: "/speakers/Martin Pelders/Martin-Pelders-The-Speakers-Firm-4.jpg"
    },
    {
      id: "pelders-art-3",
      headline: "Sexual abuse: The shame and pain of men and boy survivors",
      publication: "Health-e News",
      date: "2022",
      action: "Read Article",
      url: "https://health-e.org.za/2022/06/24/sexual-abuse-the-shame-and-pain-of-men-and-boy-survivors/",
      image: "/speakers/Martin Pelders/Martin-Pelders-The-Speakers-Firm-5.jpg"
    }
  ];

  const customVideos = [
    {
      id: "pelders-vid-1",
      label: "Martin Pelders on Healing, Masculinity & Authentic Leadership",
      youtubeId: "ujh29-e9EAE"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Martin Pelders"
      speakerTitle=""
      speakerDesignation="Healing, Masculinity & Transformative Leadership"
      speakerRole="Acclaimed Author & Founder of MatrixMen"
      speakerRef="TSF-MP-38"
      heroBackgroundImage="/speakers/Martin Pelders/Martin-Pelders-The-Speakers-Firm-9.jpg"
      biographyImage="/speakers/Martin Pelders/Martin-Pelders-The-Speakers-Firm-8.jpg"
      bioHook="“Transforming personal trauma into purposeful action, championing men’s mental health, and building psychologically safe, resilient workplace cultures.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={BOOKS}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="martin-pelders" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="martin-pelders" 
        customIntroText="Psychological safety seminars, culture transformation keynotes, and men’s mental health workshops led by Martin Pelders."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
