"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "art-superwoman",
    label: "Founder of Art of Superwoman",
    subtitle: "CEO of the prominent digital platform and podcast 'The Sit Down'."
  },
  {
    id: "media-agency",
    label: "CreativeSHOPPË & Busara Media",
    subtitle: "Founder of digital boutiques and media houses connecting brands with creators."
  },
  {
    id: "red-wings",
    label: "Founder of Red Wings Project",
    subtitle: "Non-profit organization tackling period poverty across South African schools."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "superwoman-myth",
    number: "Theme 01",
    title: "Dismantling the 'Superwoman' Myth.",
    copy: "Learning how to balance career ambition, partnership, and family without burning out (doing it all, but not all at once)."
  },
  {
    id: "branding-influencer",
    number: "Theme 02",
    title: "Digital Marketing & Creator Economy.",
    copy: "Unlocking commercial value by matching brands with niche creators and building authentic influence."
  },
  {
    id: "maternal-health",
    number: "Theme 03",
    title: "Maternal Health & Women's Advocacy.",
    copy: "Advocating for reproductive rights, doula services, menstrual hygiene, and female-led enterprises."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Olwethu Leshabane is a highly recognized South African media entrepreneur, author, public speaker, and women's advocate. She is the Founder and CEO of Art of Superwoman, a leading lifestyle-curated digital network comprising e-commerce, blogging, and the popular podcast 'The Sit Down'.",
  "A seasoned marketing and branding strategist, Olwethu also heads Busara Media, Stanford Media, and CreativeSHOPPË, a boutique creative agency bridging the gap between global brands and niche content creators.",
  "Beyond her business pursuits, she is a passionate advocate for maternal health and period dignity. She founded the Red Wings Project, an NGO dedicated to providing sanitary products and reproductive health education to disadvantaged young girls.",
  "Whether hosting TV shows (such as 'Oh Baby' on 1 Magic), presenting on global stages, or practicing as a doula, Olwethu champions the philosophy of 'doing it all, but not all at once', helping modern women establish sustainable boundaries."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "superwoman-logo", name: "ART OF SUPERWOMAN" },
  { id: "red-wings-logo", name: "RED WINGS PROJECT" },
  { id: "1magic", name: "1MAGIC TV" }
];

const OLWETHU_MEDIA = [
  {
    id: "olwethu-art-1",
    headline: "Glamour Women in Charge: Meet Olwethu Leshabane",
    publication: "Glamour Magazine",
    date: "12 Oct 2021",
    action: "Read Interview",
    url: "https://www.glamour.co.za/lifestyle/glamour-women-in-charge-meet-olwethu-leshabane-51b4efe8-7be1-4efb-80d4-12a040bc0d6f",
    image: "/speakers/Olwethu Leshabane/Olwethu-Leshabane-The-Speakers-Firm-2.jpg"
  },
  {
    id: "olwethu-art-2",
    headline: "Olwethu Leshabane on creating a platform to amplify women's voices: 'We're not one-size-fits-all'",
    publication: "TrueLove / News24",
    date: "28 Jul 2023",
    action: "Read Article",
    url: "https://www.news24.com/truelove/exclusive/olwethu-leshabane-on-creating-a-platform-to-amplify-womens-voices-were-not-one-size-fits-all-20230728",
    image: "/speakers/Olwethu Leshabane/Olwethu-Leshabane-The-Speakers-Firm-6.png"
  },
  {
    id: "olwethu-art-3",
    headline: "Lessons in sharing and self-sufficiency: Shaping values from childhood to adulthood",
    publication: "Art of Superwoman",
    date: "28 Oct 2024",
    action: "Read Blog",
    url: "https://www.artofsuperwoman.com/2024/10/28/lessons-in-sharing-and-self-sufficiency-shaping-values-from-childhood-to-adulthood/",
    image: "/speakers/Olwethu Leshabane/Olwethu-Leshabane-The-Speakers-Firm-11.jpg"
  }
];

export const AboutTeamSection = () => {
  const customVideos = [
    {
      id: "olwethu-vid-1",
      label: "Olwethu Leshabane on Maternal Health",
      youtubeId: "NX3-wUk1Pk0"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Olwethu Leshabane"
      speakerTitle=""
      speakerDesignation="Media Entrepreneur, Author & Women's Advocate"
      speakerRole="Founder of Art of Superwoman, marketing strategist, and TV personality."
      speakerRef="TSF-OL-01"
      heroBackgroundImage="/speakers/Olwethu Leshabane/Olwethu-Leshabane-The-Speakers-Firm-3.jpg"
      biographyImage="/speakers/Olwethu Leshabane/Olwethu-Leshabane-The-Speakers-Firm-10.jpg"
      bioHook="“Empowering women to run profitable enterprises and present families by establishing sustainable boundaries.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={[]}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="olwethu-leshabane" customMedia={OLWETHU_MEDIA} />
      }
    >
      <ProfileAdditionalSections speakerId="olwethu-leshabane" customVideos={customVideos} />
    </SpeakerProfileTemplate>
  );
};
