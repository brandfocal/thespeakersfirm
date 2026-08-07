"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "ceo-invest-edge",
    label: "CEO of Invest Edge",
    subtitle: "Investing in SMMEs across the African continent."
  },
  {
    id: "un-women-trailblazer",
    label: "UN Women FFIMEA Trailblazer",
    subtitle: "Awarded 50 under 50 trailblazers in the Middle East and Africa."
  },
  {
    id: "bold-black",
    label: "Top 16 Young Bold & Black Winners",
    subtitle: "Recognized as an outstanding young leader in 2022."
  },
  {
    id: "broadcaster-anchor",
    label: "Trained Broadcaster & Anchor",
    subtitle: "Former news and business anchor on 938 Radio."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "financial-literacy",
    number: "Theme 01",
    title: "Financial Literacy & Youth Inclusion",
    copy: "Through Bloom with Grace Financial Edition, making valuable investment and wealth creation insights accessible to the youth."
  },
  {
    id: "smme-investment",
    number: "Theme 02",
    title: "SMME Investment and Growth",
    copy: "Supporting entrepreneurs and small businesses to innovation, expansion, and long-term sustainability across Africa."
  },
  {
    id: "broadcasting-storytelling",
    number: "Theme 03",
    title: "Communication & Storytelling in Business",
    copy: "Leveraging broadcasting, radio, and television production background to shape corporate narratives, entrepreneurship education, and leadership impact."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Trudy Theledi is an award-winning entrepreneur, business leader, and broadcaster passionate about people and business. As the recipient of accolades such as the UN Women FFIMEA 50 under 50 trailblazers in the Middle East and Africa, and the top 16 Young bold and black winners in 2022, she was also featured as one of the 50 most memorable women of 2022 by a prominent magazine. Her groundbreaking work with The Business Dialogue Africa has been acknowledged by the Global Entrepreneurship Awards, where she was nominated for Young Entrepreneur of the Year for the work they’ve done in entrepreneurship education.",
  "She serves as the CEO of Invest Edge, a company focused on investing in SMMEs across the continent. Additionally, their CSI subsidiary, Bloom with Grace Financial Edition, was established in 2019, with the financial edition running for three years with the support of institutions such as Allan Gray and the JSE. It was born out of the realization that almost half of our population lacks financial literacy. In response to this ongoing crisis, Bloom with Grace launched its financial edition, dedicated to making valuable information readily accessible, especially to the youth.",
  "With a background in media and as a news and business anchor on 938 Radio with DJ Fresh’s Fresh Breakfast show, Trudy brings a wealth of experience as a trained broadcaster in radio and television, as well as an executive producer. This expertise in communication and storytelling has greatly influenced her journey as an entrepreneur and leader. She is also a Varsity College alumnus and holds qualifications within business and greentech."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "allan-gray", name: "ALLAN GRAY" },
  { id: "jse", name: "JSE" },
  { id: "un-women", name: "UN WOMEN" },
  { id: "invest-edge", name: "INVEST EDGE" }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Trudy Theledi"
      speakerTitle=""
      speakerDesignation="CEO of Invest Edge, Broadcaster & Award-Winning Entrepreneur"
      speakerRole="A catalyst for financial literacy, green tech, and enterprise growth in Africa."
      speakerRef="TSF-TT-03"
      heroBackgroundImage="/speakers/Trudy Theledi/Trudy-Theledi-The-Speakers-Firm2.jpg"
      biographyImage="/speakers/Trudy Theledi/Trudy-Theledi-The-Speakers-Firm3.jpg"
      bioHook="“Making financial literacy and business education accessible to the next generation of African builders.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
    >
      <ProfileAdditionalSections 
        speakerId="trudy-theledi" 
        customIntroText="Watch Trudy Theledi in media panel interviews, political polarization discussions, and finance features."
        customVideos={[
          {
            id: "trudy-video-1",
            label: "S3 Ep7 “The SA we Want. The SA we DESERVE”",
            youtubeId: "AKTDJ0DsdZw"
          },
          {
            id: "trudy-video-2",
            label: "BUSINESS TODAY | Tips on investment choices - NBC",
            youtubeId: "9AhWoB4SI34"
          },
          {
            id: "trudy-video-3",
            label: "GMN INTERVIEW | Entrepreneurs view on political polarisation",
            youtubeId: "k75AX0GltIc"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
