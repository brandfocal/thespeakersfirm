"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "metro-fm-host-criselda",
    label: "Metro FM Radio Host",
    subtitle: "Co-produces and hosts a show focusing on healthy body, mind, and spirit."
  },
  {
    id: "founder-positive-talk",
    label: "Founder: Positive Talk Services",
    subtitle: "Consultancy specializing in workplace wellness and self-development."
  },
  {
    id: "former-trustee-sanac",
    label: "Former Trustee: SANAC",
    subtitle: "Served as a Member of the Board of Trustees at the National AIDS Council."
  },
  {
    id: "strategic-advisor-khomanani",
    label: "Strategic Advisor: Khomanani",
    subtitle: "Advisor for the government comprehensive communication plan."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "holistic-workplace-wellness",
    number: "Theme 01",
    title: "Holistic Workplace Wellness",
    copy: "Implementing corporate and public wellness programs addressing physical, mental, and financial wellbeing."
  },
  {
    id: "socio-economic-health",
    number: "Theme 02",
    title: "Socio-Economic Health Imbalances",
    copy: "Analyzing how health crises and HIV/AIDS impact community infrastructure and family stability."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Criselda Kananda has worked in the corporate sector with different government departments on implementing workplace wellness programs nationally and internationally. Criselda Kananda Dudumashe also owns a consultancy and talk service called Positive Talk Services, which focuses on workplace wellness programs, Self-development, growth, personal financial management, psychological wellbeing, nutrition, rest and recreation, love, life and relationships, health, and sexually transmitted disease management. Criselda Kananda served as a Member of the Board of Trustees at the National AIDS Counsel (SANEC) 2005-2006, was a board member of South African Food Gardens Foundation, to mention a few.",
  "She is also a strategic advisor for Khomanani, government comprehensive communication plan 2003- to date. She started a radio talk show called Positive Talk in 2003 on KAYA FM, focusing on how HIV and AIDS impacts on health, wellness, socio-economic imbalances. She now co-produces and hosts a show focusing on a healthy body, mind, and spirit on Metro FM every Wednesday and Thursday evening from 19h00 to 21h00. Criselda also recorded an eight-track Positive Talk CD and wrote a Booklet focusing on holistic wellness, and has a website which educates and gives people access to basic information about wellness and provides a platform of sharing of life challenges and successes without being judged."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "metro-fm", name: "METRO FM" },
  { id: "kaya-fm", name: "KAYA FM" },
  { id: "sanac", name: "SANAC" }
];

const customMedia = [
  {
    id: "criselda-art-1",
    headline: "Criselda Kananda on living with HIV for 22 years: 'This year, for the first time, was the hardest'",
    publication: "Daily Dispatch",
    date: "02 Dec 2020",
    url: "https://www.dailydispatch.co.za/lifestyle/entertainment/2020-12-02-criselda-kananda-on-living-with-hiv-for-22-years-this-year-for-the-first-time-was-the-hardest/",
    action: "Read Article",
    image: "/speakers/Criselda Kananda/Criselda-Kananda-The-Speakers-Firm-5.jpg"
  },
  {
    id: "criselda-art-2",
    headline: "Criselda's TV show",
    publication: "Daily Sun",
    date: "08 Mar 2016",
    url: "https://www.snl24.com/dailysun/News/Entertainment/criseldas-tv-show-20160308",
    action: "Read Article",
    image: "/speakers/Criselda Kananda/Criselda-Kananda-The-Speakers-Firm-6.jpg"
  },
  {
    id: "criselda-art-3",
    headline: "Criselda Kananda Broadcast Interview",
    publication: "iono.fm",
    date: "",
    url: "https://iono.fm/e/426181",
    action: "Listen to Show",
    image: "/speakers/Criselda Kananda/Criselda-Kananda-The-Speakers-Firm-8.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Criselda Kananda"
      speakerTitle=""
      speakerDesignation="Broadcaster, Humanitarian & Health Advocate"
      speakerRole="Pioneering holistic workplace wellness programs and positive talk."
      speakerRef="TSF-CK-03"
      heroBackgroundImage="/speakers/Criselda Kananda/Criselda-Kananda-The-Speakers-Firm-7.jpg"
      biographyImage="/speakers/Criselda Kananda/Criselda-Kananda-The-Speakers-Firm.jpg"
      bioHook="“Advocating for psychological wellbeing, self-development, and health management globally.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={[
        {
          id: "criselda-book-1",
          title: "You Are Never Alone",
          description: "A guidebook of inspiration and hope, offering support for those dealing with chronic health challenges.",
          coverImage: "/speakers/Criselda Kananda/criselda-kananda-book.jpg",
          url: "https://www.amazon.com/You-Are-Never-Alone-Favourite-ebook/dp/B01MU3O03U/ref=sr_1_1?crid=388E9JN3LXJ0W&keywords=Criselda+Kananda+Dudumashe&qid=1676413610&s=books&sprefix=criselda+kananda+dudumashe%2Cstripbooks-intl-ship%2C364&sr=1-1"
        }
      ]}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="criselda-kananda" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="criselda-kananda" 
        customIntroText="Snapshots from Criselda Kananda's humanitarian work, broadcast studios, and corporate health campaigns."
        customGallery={[]}
        customVideos={[
          {
            id: "criselda-video-1",
            label: "Criselda Kananda Keynote Presentation",
            youtubeId: "biIWQrufK4k"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
