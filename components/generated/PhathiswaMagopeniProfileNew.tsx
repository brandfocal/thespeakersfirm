"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "exec-director-pcsa",
    label: "Executive Director: PCSA",
    subtitle: "Appointed to lead the Press Council of South Africa in 2025."
  },
  {
    id: "former-sabc-news-head",
    label: "Former SABC Head of News",
    subtitle: "Managed SABC's News & Current Affairs division."
  },
  {
    id: "mba-magopeni",
    label: "MBA Graduate",
    subtitle: "Postgraduate degree in business management."
  },
  {
    id: "mphil-education",
    label: "MPhil in Education",
    subtitle: "Advanced degree focusing on learning frameworks."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "media-freedom-governance",
    number: "Theme 01",
    title: "Media Freedom & Independent Journalism",
    copy: "Promoting ethical journalism, regulatory compliance, and democratic accountability through Press Council frameworks."
  },
  {
    id: "brand-strategy-broadcasting",
    number: "Theme 02",
    title: "Brand Strategy & Public Broadcasting",
    copy: "Strategic communications, editorial independence, and brand positioning in highly transparent and complex corporate environments."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Phathiswa Magopeni is a South African-born media personality. She was the head of news and current affairs at the SABC in 2018. Her expertise in the broadcasting industry has earned her many top roles.",
  "Though many know her for her knacks for the media, Magopeni loved singing. With no formal music class, she discovered her talent.",
  "Magopeni has a Master of Philosophy in education and an Integrated Marketing Communications Diploma.",
  "Phathiswa holds other qualifications from other institutions – a Master of Business Administration. She ran a doctoral proposal for a Doctor of Business Administration degree at Gordon Institute of Business Science."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "press-council-sa", name: "PRESS COUNCIL SA" },
  { id: "sabc", name: "SABC" },
  { id: "gibs", name: "GIBS BUSINESS SCHOOL" }
];

const customMedia = [
  {
    id: "phathiswa-art-1",
    headline: "Media freedom advocate Phathiswa Magopeni takes reins at the Press Council",
    publication: "Press Council of SA",
    date: "03 Feb 2025",
    url: "https://presscouncil.org.za/2025/02/03/prominent-journalist-media-freedom-advocate-phathiswa-magopeni-appointed-press-council-executive-director/",
    action: "Read Article",
    image: "/speakers/Phathiswa Magopeni/Phathiswa Magopeni-The-Speakers-Firm-2.jpg"
  },
  {
    id: "phathiswa-art-2",
    headline: "Standing Up For What You Believe – An Exclusive with Phathiswa Magopeni",
    publication: "AWiM News",
    date: "",
    url: "https://awimnews.com/standing-up-for-what-you-believe-an-exclusive-with-phathiswa-magopeni/",
    action: "Read Article",
    image: "/speakers/Phathiswa Magopeni/Phathiswa Magopeni-The-Speakers-Firm-6.jpg"
  },
  {
    id: "phathiswa-art-3",
    headline: "Interview with media leader Phathiswa Magopeni as she joins the Press Council",
    publication: "Press Council of SA",
    date: "01 Oct 2024",
    url: "https://presscouncil.org.za/2024/10/01/13175/",
    action: "Read Interview",
    image: "/speakers/Phathiswa Magopeni/Phathiswa-Magopeni-The-Speakers-Firm-4.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Phathiswa Magopeni"
      speakerTitle=""
      speakerDesignation="Executive Director of the Press Council of SA & Veteran Media Executive"
      speakerRole="Advocating independent journalism, media freedom, and ethics in public broadcasting."
      speakerRef="TSF-PM-02"
      heroBackgroundImage="/speakers/Phathiswa Magopeni/Phathiswa-Magopeni-The-Speakers-Firm.jpg"
      biographyImage="/speakers/Phathiswa Magopeni/Phathiswa Magopeni-The-Speakers-Firm-5.jpg"
      bioHook="“Advocating for independent journalism, media freedom, and ethics in public broadcasting.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="phathiswa-magopeni" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="phathiswa-magopeni" 
        customIntroText="Snapshots from Phathiswa Magopeni's Press Council meetings, SABC board oversight, and media conferences."
        customGallery={[]}
        customVideos={[
          {
            id: "phathiswa-video-1",
            label: "Phathiswa Magopeni on Media Freedom & Governance",
            youtubeId: "A-G7HhzuoeU"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
