"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "mba-gibs",
    label: "MBA Graduate (GIBS)",
    subtitle: "Gordon Institute of Business Science class leader."
  },
  {
    id: "wef-leader",
    label: "WEF Young Global Leader",
    subtitle: "World Economic Forum recognized leader."
  },
  {
    id: "tedx-speaker",
    label: "TEDx Speaker",
    subtitle: "Inspirational ideas worth spreading contributor."
  },
  {
    id: "getready-founder",
    label: "Founder of GetReady Mentorship",
    subtitle: "Leading graduate mentoring & training programs."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "youth-empowerment",
    number: "Theme 01",
    title: "Youth Empowerment & Graduate Mentorship",
    copy: "Using innovative methods to equip and guide graduates from all industries and backgrounds, preparing them for the future of work."
  },
  {
    id: "leadership-accounting",
    number: "Theme 02",
    title: "Accounting, Governance, and Corporate Leadership",
    copy: "Drawing on extensive professional services experience at Deloitte Africa, ABASA, and business colleges to guide corporate transformation."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Manqoba Linda Zungu is one of the founding members of the GetReady Mentorship Programme. He is an accountant by trade currently employed as a Senior Manager by a leading professional services firm, Deloitte Africa. Manqoba has immense experience in leadership and mentorship having served in some of the following roles nationwide:​ Class leader: MBA Gordon Institute of Business Science, Leadership Programme Chairperson: Association of Black Accountants in South Africa (ABASA), ABASA JHB Board Member, ABASA KZN General Secretary and Chairperson: Deloitte BPS Employment Equity Forum.”"
];

const SOCIAL_PROOF_LOGOS = [
  { id: "deloitte", name: "DELOITTE AFRICA" },
  { id: "abasa", name: "ABASA" },
  { id: "gibs", name: "GIBS BUSINESS SCHOOL" },
  { id: "getready", name: "GETREADY" }
];

const customMedia = [
  {
    id: "manqoba-art-1",
    headline: "#CoolestInTheCity: Manqoba Zungu joins Bongani to talk youth empowerment",
    publication: "East Coast Radio",
    date: "",
    url: "https://www.ecr.co.za/shows/east-coast-drive/coolestinthecity-manqoba-zungu-joins-bongani-talk-youth-empowerment/",
    action: "Read Article",
    image: "/speakers/Manqoba Zungu/IMG_5508.jpg"
  },
  {
    id: "manqoba-art-2",
    headline: "GetReady graduate-mentoring and training programme",
    publication: "Moneyweb",
    date: "",
    url: "https://www.moneyweb.co.za/moneyweb-radio/getready-graduate-mentoring-and-training-programme/",
    action: "Listen to Podcast",
    image: "/speakers/Manqoba Zungu/IMG_5511.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Manqoba Zungu"
      speakerTitle=""
      speakerDesignation="TEDx Speaker, WEF Young Global Leader, CEO & Accountant"
      speakerRole="Equipping the youth of South Africa with mentorship and professional training."
      speakerRef="TSF-MZ-02"
      heroBackgroundImage="/speakers/Manqoba Zungu/Manqoba-Zungu-The-Speakers-Firm-8.jpg"
      biographyImage="/speakers/Manqoba Zungu/Manqoba-Zungu-The-Speakers-Firm-7.jpg"
      bioHook="“Equipping the youth and graduates of South Africa with leadership, mentorship and future-ready skills.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="manqoba-zungu" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="manqoba-zungu" 
        customIntroText="Snapshots from Manqoba Zungu's dynamic GIBS academic sessions, graduate workshops, and public forums."
        customVideos={[
          {
            id: "manqoba-video-1",
            label: "Manqoba Zungu on Youth Empowerment",
            youtubeId: "9SkY5sW99oQ"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
