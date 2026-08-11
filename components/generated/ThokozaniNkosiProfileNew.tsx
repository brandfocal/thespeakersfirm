"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "chairman-newzroom",
    label: "Chairman of Newzroom Afrika",
    subtitle: "Leading South Africa's premier TV news channel."
  },
  {
    id: "md-global-media",
    label: "MD of Global Media Enterprises",
    subtitle: "Managing director and co-founder of content provision systems."
  },
  {
    id: "media-innovator",
    label: "Media Entrepreneur & Producer",
    subtitle: "Two decades building and executing broadcast strategies."
  },
  {
    id: "dstv-partner",
    label: "DStv Partner",
    subtitle: "Successfully launched the prominent 24-hour news network."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "broadcasting-growth",
    number: "Theme 01",
    title: "Media Innovations & Broadcasting Futures",
    copy: "Building 24-hour TV news networks and content pipelines targeting audiences in Southern, East, and West Africa."
  },
  {
    id: "media-entrepreneurship",
    number: "Theme 02",
    title: "Media Entrepreneurship & Scaling Creative Teams",
    copy: "Managing, pitching, and executing high-growth media partnerships and operational models in corporate publishing and entertainment."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Thokozani Nkosi is a co-founder and managing director of Global Media Enterprises FZ LLC, a content provider for TV channels. He is also the chairman of Newzroom Afrika, a news channel in South Africa."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "newzroom-afrika", name: "NEWZROOM AFRIKA" },
  { id: "global-media-ent", name: "GLOBAL MEDIA ENTERPRISES" },
  { id: "dstv", name: "DSTV" }
];

const customMedia = [
  {
    id: "thokozani-art-1",
    headline: "Meet the team behind the new DStv channel Newzroom Afrika",
    publication: "Sowetan Live",
    date: "28 Aug 2018",
    url: "https://www.sowetanlive.co.za/news/south-africa/2018-08-28-meet-the-team-behind-the-new-dstv-channel-newzroom-afrika/",
    action: "Read Article",
    image: "/speakers/Thokozani Nkosi/Thokozani-Nkosi-The-Speakers-Firm-3.jpg"
  },
  {
    id: "thokozani-art-2",
    headline: "How Thokozani Nkosi and Thabile Ngwato Built A Premier 24-hour TV news Channel",
    publication: "StartupMag",
    date: "2023",
    url: "https://startupmag.co.za/2023/05/how-thokozani-nkosi-and-thabile-ngwato-built-a-premier-24-hour-tv-news-channel-broadcasting-in-southern-east-and-west-africa/",
    action: "Read Article",
    image: "/speakers/Thokozani Nkosi/Thokozani-Nkosi-The-Speakers-Firm-4.jpg"
  },
  {
    id: "thokozani-art-3",
    headline: "Everything you need to know about the team behind DStv’s new channel",
    publication: "News24",
    date: "28 Aug 2018",
    url: "https://www.news24.com/business/everything-you-need-to-know-about-team-behind-dstvs-new-channel-20180828",
    action: "Read Article",
    image: "/speakers/Thokozani Nkosi/Thokozani-Nkosi-The-Speakers-Firm-5.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Thokozani Nkosi"
      speakerTitle=""
      speakerDesignation="Co-Founder & Chairman of Newzroom Afrika"
      speakerRole="Media entrepreneur and visionary building broadcast futures in Africa."
      speakerRef="TSF-TN-03"
      heroBackgroundImage="/speakers/Thokozani Nkosi/Thokozani-Nkosi-The-Speakers-Firm.jpg"
      biographyImage="/speakers/Thokozani Nkosi/Thokozani-Nkosi-The-Speakers-Firm-2.jpg"
      bioHook="“Pioneering premier 24-hour TV news broadcasting and strategic media enterprises across Africa.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="thokozani-nkosi" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="thokozani-nkosi" 
        customIntroText="Snapshots from Thokozani Nkosi's media launches, business panels, and news channel announcements."
        customGallery={[]}
        customVideos={[
          {
            id: "thokozani-video-1",
            label: "Thokozani Nkosi Presentation Reel",
            youtubeId: "CMalwKYs5lM"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
