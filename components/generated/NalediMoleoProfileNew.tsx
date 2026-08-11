"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "enca-anchor-moleo",
    label: "eNCA News Anchor",
    subtitle: "Presents the weekday morning bulletin 'News Link'."
  },
  {
    id: "safm-talk-shop",
    label: "Host of SAfm: The Talk Shop",
    subtitle: "A current affairs and nation building program."
  },
  {
    id: "mtn-radio-award",
    label: "Best PBS Weekend Show Winner",
    subtitle: "Received MTN Radio Award for hosting 'In Tune'."
  },
  {
    id: "unaids-storyteller",
    label: "UNAIDS Storyteller & Producer",
    subtitle: "Produced a book/documentary on preventing HIV transmission."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "active-citizenship-nation-building",
    number: "Theme 01",
    title: "Active Citizenship & Nation Building",
    copy: "Promoting public participation, accountability, and active civic leadership through broadcast dialogues."
  },
  {
    id: "media-social-trans",
    number: "Theme 02",
    title: "Media for Social Transformation",
    copy: "Designing campaigns, documentaries, and programs that address public health, youth issues, and gender equity."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "At The Speakers Firm, we proudly represent Naledi Moleo, a dynamic news anchor, radio presenter, and social entrepreneur, whose voice embodies intelligence, compassion, and purpose. As one of South Africa’s most captivating broadcasters, Naledi has built a powerful reputation for using media as a tool for nation building, youth empowerment, and social transformation.",
  "Naledi currently serves as a News Anchor at eNCA, where she presents the weekday morning bulletin “News Link” from 09h00 to midday. With her signature poise, credibility, and insight, she brings clarity and context to the day’s top stories, anchoring national conversations with precision and empathy. Her on-screen presence has established her as a trusted voice in current affairs and a respected figure in South African journalism.",
  "Before joining eNCA, Naledi was a News Anchor at Newzroom Afrika, where she co-anchored major news broadcasts, covering breaking stories, political developments, and human-interest features with professionalism and depth. Her ability to translate complex national issues into accessible, thoughtful dialogue earned her widespread recognition and cemented her status as one of the leading women in South African news media.",
  "In addition to her television work, Naledi hosts “The Talk Shop” on SAfm, a thought-provoking current affairs and nation building programme that airs Monday to Thursday from 19h00 to 21h00. The show provides a platform for critical dialogue and public participation, where she engages leading academics, policymakers, and innovators from around the world, including the Vice-Chancellor of Oxford University, cabinet ministers, and civic leaders. Through her work, Naledi inspires listeners to move from awareness to action, championing a culture of active citizenship and accountability.",
  "On Saturday evenings, Naledi brings a creative and soulful touch to the airwaves as host of “The Mash-Up”, a live showcase of music and poetry that celebrates South Africa’s vibrant cultural landscape. Her warm personality and natural ability to connect have made her a beloved figure among listeners and artists alike.",
  "A seasoned journalist and content creator, Naledi’s work extends far beyond radio and television. In 2014, she collaborated with Neo Ntsoma Productions to produce a documentary and book focused on preventing mother to child HIV transmission across Africa, a project later published by UNAIDS. Her dedication to social storytelling reflects her belief that media can and should be a catalyst for change.",
  "Earlier in her career, Naledi hosted SAfm’s “In Tune”, a youth focused programme that won the MTN Radio Award for Best PBS Weekend Show in 2013. The show became a space for inspiring young South Africans to dream bigger, think critically, and take ownership of their future, values that continue to define her work today.",
  "An accomplished speaker, moderator, and event host, Naledi brings a blend of elegance, intellect, and energy to every stage. Her speaking themes include Nation Building Through Dialogue, The Power of Media for Social Change, Youth Leadership and Active Citizenship, and Women in Media and Leadership."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "safm", name: "SAFM" },
  { id: "enca-logos", name: "ENCA" },
  { id: "newzroom-afrika", name: "NEWZROOM AFRIKA" },
  { id: "unaids", name: "UNAIDS" }
];

const customMedia = [
  {
    id: "naledi-art-1",
    headline: "Child star shines brightly on Newzroom Afrika",
    publication: "Daily Sun",
    date: "",
    url: "https://www.snl24.com/dailysun/celebs/naledi-moleos-20-year-journey-of-news-reading-20240308",
    action: "Read Article",
    image: "/speakers/Naledi Moleo/Neldi-Moleo-The-Speakers-Firm-7.jpg"
  },
  {
    id: "naledi-art-2",
    headline: "Getting to know the entrepreneur and radio presenter: Naledi Moleo",
    publication: "iLoveZA",
    date: "",
    url: "https://www.iloveza.com/blogs/news/interview-with-naledi-moleo",
    action: "Read Interview",
    image: "/speakers/Naledi Moleo/Neldi-Moleo-The-Speakers-Firm-9.jpg"
  },
  {
    id: "naledi-art-3",
    headline: "Naledi Moleo Joins Newzroom Afrika",
    publication: "Youth Village",
    date: "",
    url: "https://youthvillage.co.za/2024/02/naledi-moleo-joins-newzroom-afrika/",
    action: "Read Article",
    image: "/speakers/Naledi Moleo/Neldi-Moleo-The-Speakers-Firm-16.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Naledi Moleo"
      speakerTitle=""
      speakerDesignation="eNCA News Anchor, SAfm Presenter & Social Entrepreneur"
      speakerRole="Using media as a tool for nation building and social change."
      speakerRef="TSF-NM-02"
      heroBackgroundImage="/speakers/Naledi Moleo/Neldi-Moleo-The-Speakers-Firm-15.jpg"
      biographyImage="/speakers/Naledi Moleo/Neldi-Moleo-The-Speakers-Firm-6.jpg"
      bioHook="“Facilitating public dialogue and active citizenship across radio and television.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="naledi-moleo" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="naledi-moleo" 
        customIntroText="Snapshots from Naledi Moleo's radio broadcasts, news anchor sessions, and social entrepreneurship panels."
        customGallery={[]}
        customVideos={[
          {
            id: "naledi-video-1",
            label: "Naledi Moleo Presentation Reel",
            youtubeId: "DNymd1Il7Oc"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
