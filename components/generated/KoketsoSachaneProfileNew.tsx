"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "ks-broadcasting",
    label: "20+ Years Broadcasting Leadership",
    subtitle: "Host of The Meeting Point on SAFM; veteran of Bush Radio, Heart 104.9 FM, Kaya FM, 702 & Cape Talk"
  },
  {
    id: "ks-gov-comm",
    label: "Strategic Communications Leader",
    subtitle: "Former Spokesperson to the Minister of Public Works, Western Cape MEC & Communications Lead at SA Tourism"
  },
  {
    id: "ks-house-of-sachane",
    label: "Founder, House of Sachane",
    subtitle: "Strategic narrative, media, and dialogue practice creating spaces where people don't simply hear — they listen differently"
  },
  {
    id: "ks-cultural-curator",
    label: "Curator & Cultural Storyteller",
    subtitle: "Creator of original dialogue and cultural concepts exploring South African identity, history, and citizenship"
  }
];

const STRATEGIC_THEMES = [
  {
    id: "who-shapes-the-story",
    number: "Theme 01",
    title: "Who Shapes the South African Story?",
    copy: "South Africa is constantly being narrated by politicians, journalists, business leaders, and citizens. Koketso explores the relationship between narrative, power, identity, and democracy — challenging participants to recognise themselves not merely as consumers of South Africa's story, but as active participants in its creation."
  },
  {
    id: "beyond-the-headlines",
    number: "Theme 02",
    title: "Beyond the Headlines: The Conversations We Are Not Having.",
    copy: "Information surrounds us, yet information does not necessarily produce understanding. Drawing on more than two decades in broadcasting, Koketso moves beyond the immediate news cycle to explore context, consequence, and meaning — helping leaders move from reaction to reflection."
  },
  {
    id: "can-we-still-talk",
    number: "Theme 03",
    title: "Can We Still Talk to One Another? Disagreement Without Division.",
    copy: "Democracy requires disagreement. But disagreement without listening becomes division. This keynote examines the crisis of conversation in an increasingly polarised society and delivers practical insights into listening, empathy, and dialogue as essential leadership and citizenship capabilities."
  },
  {
    id: "listening-as-leadership",
    number: "Theme 04",
    title: "Listening is a Leadership Act.",
    copy: "We have become very good at speaking and considerably less skilled at listening. Koketso explores listening not as passive behaviour, but as an active, strategic form of leadership that enables leaders and institutions to truly understand people before attempting to lead them."
  },
  {
    id: "stories-we-leave-behind",
    number: "Theme 05",
    title: "The Stories We Leave Behind: Intergenerational Responsibility.",
    copy: "Every generation inherits a story and decides what to preserve, what to challenge, and what to transform. This keynote examines memory, history, and the intergenerational responsibility of the narratives, values, and possibilities we pass to the generations that follow."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Koketso Sachane is a South African broadcaster, journalist, storyteller, moderator, and dialogue facilitator who has spent more than two decades listening to, questioning, and helping shape South Africa's public conversation. His career has traversed some of the country's most influential media platforms, including Bush Radio, Heart 104.9 FM, Kaya FM, 702, and Cape Talk. He currently hosts The Meeting Point on SAFM, where he engages political leaders, academics, business leaders, civil society activists, artists, and community voices on the critical issues defining the nation and its future.",
  "Koketso's work has always been about far more than reporting the daily news. His particular strength lies in asking the question beneath the headline — uncovering the human story inside the political debate, the social consequence inside policy formulation, and the deeper question within public disagreement. Over more than 20 years, he has developed a distinctive ability to make complex and contested issues accessible without diminishing their nuance, moving effortlessly between politics and culture, governance and citizenship, leadership and identity.",
  "His experience extends deep into public administration and institutional strategy. Koketso has worked at senior communications levels in both government and tourism, serving as spokesperson to the Western Cape MEC for Transport and Public Works, spokesperson to the Minister of Public Works, and Communications Manager at South African Tourism. These roles have provided him with a rare, seasoned perspective from both sides of public communication — both as the interviewer asking rigorous questions and as the executive responsible for communicating public policy, institutional purpose, and national strategy.",
  "He is the founder of House of Sachane, a strategic narrative, media, and dialogue practice built around the belief that the quality of our conversations influences the quality of the society we build. House of Sachane creates platforms that bring together storytelling, public affairs, culture, broadcasting, and live dialogue — curating original formats such as 'A Letter to Sobukwe' that explore heritage, democracy, and collective memory.",
  "Book Koketso Sachane through The Speakers Firm, A Leading African Speakers Bureau, to bring seasoned journalistic curiosity, masterful program moderation, and unforgettable dialogue facilitation to your next conference, executive summit, or national symposium."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "safm", name: "SAFM 104-107" },
  { id: "sabc", name: "SABC NEWS" },
  { id: "radio702", name: "RADIO 702" },
  { id: "capetalk", name: "CAPE TALK" },
  { id: "satourism", name: "SOUTH AFRICAN TOURISM" },
  { id: "houseofsachane", name: "HOUSE OF SACHANE" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "ks-art-1",
      headline: "SAfm 90th Anniversary: Koketso Sachane & Caesar Molebatsi Co-Hosting #TheNationalBriefing",
      publication: "SAfm Radio / SABC",
      date: "Broadcasting Milestone",
      action: "Watch Broadcast",
      url: "https://www.youtube.com/watch?v=N7rh941oBKo",
      image: "/speakers/Koketso%20Sachane/Koketso-Sachane-The-Speakers-Firm2.jpg",
      caption: "Co-hosting the landmark 90th anniversary national broadcast on SAfm."
    },
    {
      id: "ks-art-2",
      headline: "Unpacking Complex Social Dynamics on #TheMeetingPoint with Koketso Sachane",
      publication: "SAfm Radio / The Meeting Point",
      date: "Current Affairs Dialogue",
      action: "Watch Discussion",
      url: "https://www.youtube.com/watch?v=IOJ1mxebuRM",
      image: "/speakers/Koketso%20Sachane/Koketso-Sachane-The-Speakers-Firm.jpg",
      caption: "Investigating community realities and socio-economic dynamics on national radio."
    },
    {
      id: "ks-art-3",
      headline: "National Dialogue, Land, Governance & Public Discourse with Koketso Sachane",
      publication: "Chester Missing & Conrad Koch Interview",
      date: "Cultural & Political Analysis",
      action: "Watch Interview",
      url: "https://www.youtube.com/watch?v=O63mnF-qPzQ",
      image: "/speakers/Koketso%20Sachane/Koketso-Sachane-The-Speakers-Firm3.jpg",
      caption: "Engaging sharp political commentary, satire, and governance analysis."
    }
  ];

  const customVideos = [
    {
      id: "ks-vid-1",
      label: "Koketso Sachane: Mastering the Art of Effortless Conversation",
      youtubeId: "tgzEgzCRvKE",
      thumbnail: "https://img.youtube.com/vi/tgzEgzCRvKE/maxresdefault.jpg"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Koketso Sachane"
      speakerTitle=""
      speakerDesignation="Broadcaster, Journalist, Storyteller & Conversation Maker"
      speakerRole="Host of The Meeting Point on SAFM & Founder of House of Sachane"
      speakerRef="TSF-KS-29"
      heroBackgroundImage="/speakers/Koketso%20Sachane/Koketso-Sachane-The-Speakers-Firm6.jpg"
      heroMobileBackgroundImage="/speakers/Koketso%20Sachane/Koketso-Sachane-The-Speakers-Firm-mobile.jpg"
      biographyImage="/speakers/Koketso%20Sachane/Koketso-Sachane-The-Speakers-Firm5.jpg"
      bioHook="“Because the story of a country is never simply told. It is contested. It is remembered. It is inherited. And ultimately, it is ours to shape.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="koketso-sachane" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="koketso-sachane" 
        customIntroText="National current affairs dialogues, keynote addresses, and high-level panel moderations led by Koketso Sachane."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
