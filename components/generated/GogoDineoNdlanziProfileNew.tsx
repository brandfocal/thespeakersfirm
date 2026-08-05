"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "preeminent-sangoma",
    label: "Pre-eminent Sangoma & Gobela",
    subtitle: "Highly respected spiritual teacher and custodian of African traditional healing practices."
  },
  {
    id: "african-storyteller",
    label: "Professional Storyteller & Poet",
    subtitle: "Using spoken word, poetry, and performance to share African indigenous knowledge."
  },
  {
    id: "spiritual-coach",
    label: "Spiritual Life Coach",
    subtitle: "Merging sacred African spirituality with modern cognitive coaching models."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "spirituality-modernity",
    number: "Theme 01",
    title: "African Spirituality & Modern Thinking.",
    copy: "Successfully merging the sacredness of traditional African spiritual systems with modern cognitive structures and organizational wellness."
  },
  {
    id: "indigenous-knowledge",
    number: "Theme 02",
    title: "Indigenous Knowledge Systems.",
    copy: "Unlocking collective consciousness, traditional history, and the healing practices of the Sangoma and Inyanga."
  },
  {
    id: "destigmatising-ubungoma",
    number: "Theme 03",
    title: "Destigmatising Traditional Healing.",
    copy: "Using media platforms and outspoken education to change perceptions around ubungoma and reclaim cultural heritage."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "As a trained sangoma and gobela, Gogo Dineo Ndlanzi has been instrumental in changing perceptions around the practice of “ubungoma” which is a type of African Spiritual Healing. This has made her a household name in South Africa and with Africans in the diaspora over the last decade as she continues to shift mindsets by encouraging people to access African spiritual healing modalities and indigenous knowledge systems. Gogo Dineo has successfully used mainstream and social media to de-stigmatise the practices of African Spirituality using her outspoken personality and educational nuances.",
  "Gogo Dineo Ndlanzi is a pre-eminent and pioneering sangoma who has successfully merged the sacredness of African Spirituality with modern thinking. She is a celebrated spiritual teacher, life coach, African storyteller, poet, writer, dancer and facilitator.",
  "The words “innovator” or “spearhead” come to mind when thinking of Gogo Dineo Ndlanzi and her impact on African spirituality in the context of popular culture. This website is an extension for her tribe members to see where she has been and where she intends to go. An information station and learning space for the ‘average Jabu’."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "702", name: "TALK RADIO 702" },
  { id: "sabc", name: "SABC NEWS" },
  { id: "apple", name: "APPLE PODCASTS" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "dineo-art-1",
      headline: "Weird & Wonderful: South Africa’s traditional history and cultural practices",
      publication: "702 (Aubrey Masango Show)",
      date: "2024",
      action: "Read Details",
      url: "https://gogodineondlanzi.com/the-aubrey-masango-show/",
      image: "/speakers/Gogo Dineo Ndlanzi/Gogo-Dineo-Ndlanzi-The-Speakers-Firm-2.jpg"
    },
    {
      id: "dineo-art-2",
      headline: "Taking Your Spiritual Power Back – with Gogo Dineo Ndlanzi",
      publication: "Apple Podcasts",
      date: "2023",
      action: "Listen to Podcast",
      url: "https://podcasts.apple.com/gh/podcast/taking-your-spiritual-power-back-with-gogo-dineo-ndlanzi/id1362277001?i=1000499906646",
      image: "/speakers/Gogo Dineo Ndlanzi/Gogo-Dineo-Ndlanzi-The-Speakers-Firm-3.jpg"
    }
  ];

  const customGallery = [
    {
      id: "dineo-gal-1",
      src: "/speakers/Gogo Dineo Ndlanzi/Gogo-Dineo-Ndlanzi-The-Speakers-Firm-5.png",
      alt: "Gogo Dineo Ndlanzi training",
      caption: "Gobela Gogo Dineo instructing traditional initiates",
      className: "sm:col-span-2 lg:col-span-2"
    },
    {
      id: "dineo-gal-2",
      src: "/speakers/Gogo Dineo Ndlanzi/Gogo-Dineo-Ndlanzi-The-Speakers-Firm-4.jpg",
      alt: "Spiritual coaching session",
      caption: "Facilitating workplace wellness and spiritual alignment",
      className: ""
    },
    {
      id: "dineo-gal-3",
      src: "/speakers/Gogo Dineo Ndlanzi/Gogo-Dineo-Ndlanzi-The-Speakers-Firm-6.jpg",
      alt: "Traditional throwing of bones",
      caption: "Educating audiences on African indigenous healing",
      className: ""
    }
  ];

  const customVideos = [
    {
      id: "dineo-vid-1",
      label: "Gogo Dineo Ndlanzi - Indigenous Knowledge Systems",
      youtubeId: "4xi6_idDthQ"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Gogo Dineo Ndlanzi"
      speakerTitle="Gogo"
      speakerDesignation="African Spiritual Teacher & Healing Practitioner"
      speakerRole="Pre-eminent sangoma, spiritual life coach, and professional storyteller."
      speakerRef="TSF-GDN-09"
      heroBackgroundImage="/speakers/Gogo Dineo Ndlanzi/Gogo-Dineo-Ndlanzi-The-Speakers-Firm.png"
      biographyImage="/speakers/Gogo Dineo Ndlanzi/Gogo-Dineo-Ndlanzi-The-Speakers-Firm-7.jpg"
      bioHook="“African spiritual healing modalities offer critical, time-tested systems to restore collective wellness.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="gogo-dineo-ndlanzi" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="gogo-dineo-ndlanzi" 
        customGallery={customGallery} 
        customIntroText="Indigenous knowledge keynotes, heritage storytelling and alignment sessions by Gogo Dineo Ndlanzi."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
