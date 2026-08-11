"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "seasoned-host",
    label: "TV & Radio Host",
    subtitle: "Over two decades of experience presenting and producing."
  },
  {
    id: "mc-facilitator",
    label: "Professional MC & Facilitator",
    subtitle: "Hosting workshops, conferences, and high-level panels."
  },
  {
    id: "wellness-advocate",
    label: "Wellness & Health Advocate",
    subtitle: "Focusing on mental health, women's health, and menstruation."
  },
  {
    id: "multilingual-mc",
    label: "Multilingual Communicator",
    subtitle: "Engaging diverse audiences across multicultural environments."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "wellness-womens-health",
    number: "Theme 01",
    title: "Wellness & Women's Health",
    copy: "Advocating for mental health, women's wellness, and breaking barriers around reproductive health."
  },
  {
    id: "youth-development-self-actualisation",
    number: "Theme 02",
    title: "Youth Development & Self-Actualisation",
    copy: "Coaching young people to unlock potential, promote social good, and integrate indigenous knowledge."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Penny Lebyane is a seasoned media personality with extensive experience in hosting, MCing, facilitating, and moderating events. With a background in radio and TV, she brings a dynamic and engaging approach to her work.",
  "Penny has a proven track record of hosting various events, from conferences to workshops, with poise and confidence. She is skilled at keeping audiences engaged and entertained, making her a sought-after MC for corporate and social events.",
  "Penny’s experience in facilitating discussions and workshops enables her to bring people together, foster collaboration, and drive meaningful conversations. She is adept at moderating panel discussions, ensuring that conversations are productive, informative, and engaging.",
  "Penny is passionate about community development, with a focus on children’s issues, innovation, and social impact. She is interested in working with NGOs, government agencies, and private sector organizations to drive positive change and promote social good.",
  "Penny has a strong background in radio and TV, with experience in presenting, producing, and hosting various programs.",
  "Her multilingual abilities and deep understanding of diverse cultures make her a relatable and effective host in multicultural environments. Penny’s commitment to inclusivity and diversity is evident in her work, where she facilitates impactful conversations that resonate across various audiences.",
  "As she continues to evolve her career, Penny is focusing on expanding her expertise in areas such as wellness—particularly mental health and women’s health issues like menstruation and menopause. She is also passionate about youth self-actualisation and development, aiming to inspire young individuals to realise their full potential. Furthermore, Penny is dedicated to promoting global thinking by drawing from indigenous knowledge, encouraging Africans to embrace and present their authentic selves to the world.",
  "Through her dynamic presence and insightful discourse, Penny Lebyane remains a powerful voice in media, advocating for meaningful change and empowerment across communities."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "metro-fm", name: "METRO FM" },
  { id: "sabc-tv", name: "SABC TV" },
  { id: "etv", name: "E.TV" }
];

const customMedia = [
  {
    id: "penny-art-1",
    headline: "I’m a healer with a microphone: Penny Lebyane on her presenting journey",
    publication: "BONA Magazine",
    date: "",
    url: "https://www.bona.co.za/entertainment/im-a-healer-with-a-microphone-penny-lebyane-on-her-presenting-journey/",
    action: "Read Article",
    image: "/speakers/Penny Lebyane/Penny-Lebyane-The-Speakers-Firm-5.jpg"
  },
  {
    id: "penny-art-2",
    headline: "Penny Lebyane takes over as Season 3 host of 'The Big Secret'",
    publication: "Independent Online (IOL)",
    date: "25 Nov 2022",
    url: "https://iol.co.za/entertainment/celebrity-news/local/2022-11-25-penny-lebyane-takes-over-as-season-3-host-of-the-big-secret/",
    action: "Read Article",
    image: "/speakers/Penny Lebyane/Penny-Lebyane-The-Speakers-Firm-3.jpg"
  },
  {
    id: "penny-art-3",
    headline: "Afternoon Express Guest: Penny Lebyane",
    publication: "Afternoon Express",
    date: "",
    url: "https://afternoonexpress.co.za/guests/penny-lebyane/4914",
    action: "Read Profile",
    image: "/speakers/Penny Lebyane/Penny-Lebyane-The-Speakers-Firm-4.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Penny Lebyane"
      speakerTitle=""
      speakerDesignation="Seasoned Media Personality, MC & Broadcaster"
      speakerRole="Advocating wellness, mental health, and women's health issues."
      speakerRef="TSF-PL-04"
      heroBackgroundImage="/speakers/Penny Lebyane/Penny-Lebyane-The-Speakers-Firm-2.jpg"
      biographyImage="/speakers/Penny Lebyane/Penny-Lebyane-The-Speakers-Firm-6.jpg"
      bioHook="“Advocating for wellness, youth self-actualisation, and presenting our authentic selves to the world.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="penny-lebyane" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="penny-lebyane" 
        customIntroText="Snapshots from Penny Lebyane's media hosting, mental health campaigns, and community forums."
        customGallery={[]}
        customVideos={[
          {
            id: "penny-video-1",
            label: "Penny Lebyane on Media & Mental Health",
            youtubeId: "DzIRAdS3-Es"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
