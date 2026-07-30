import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { label: "Economist", subtitle: "" },
  { label: "Entrepreneur", subtitle: "" },
  { label: "Growth Strategist", subtitle: "" }
];

const STRATEGIC_THEMES = [
  {
    number: "01",
    title: "Macroeconomic Policy & Inclusive Growth",
    copy: "Analyzing micro and macro indicators to shape developmental policy, trade strategies, and inclusive growth frameworks that bridge economic disparities."
  },
  {
    number: "02",
    title: "Strategic Asset & Portfolio Management",
    copy: "Designing growth plans across diverse Sub-Saharan African economies, based on deep institutional knowledge and hands-on portfolio management."
  },
  {
    number: "03",
    title: "Economic Innovation & Advisory",
    copy: "Providing strategic direction for private and public sector infrastructure planning, G20 policy cooperation, and financial market integration."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Sifiso Skenjana is founder and financial economist at AFRA Consultants a research and economic advisory company with advisory experience across various sectors and sub industries.",
  "He is a frequent speaker at various seminars and conferences as a subject matter expert thought leader on the micro and macro economy and broader development topics He is a columnist for Sunday Times (Business Times), Business Day and Fin 24 and a weekly local and global economy contributor at Power Fm Prior to that, he most recently worked as a senior consultant in the innovation and growth services ( unit within Monitor Deloitte, Deloitte’s premier strategy business Sifiso has experience working in strategy, policy research and development and asset management.",
  "Prior to joining Monitor Deloitte, he worked at Stanlib as an in house strategy analyst, where he was involved in strategy development and execution support across all business units and across a variety of geographies (including South Africa, Botswana, Namibia, Kenya, Swaziland, Lesotho, Uganda and Ghana) Prior to joining Stanlib Sifiso worked at Nedbank Private Wealth (previously BoE Private Clients) as a Portfolio Manager, managing investments on behalf of clients Sifiso a PhD student at The University of Cape Town ( focusing on financial development and economic in Sub Saharan Africa)."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "afra-consultants", name: "AFRA CONSULTANTS" },
  { id: "deloitte", name: "MONITOR DELOITTE" },
  { id: "stanlib", name: "STANLIB" },
  { id: "nedbank", name: "NEDBANK PRIVATE WEALTH" }
];

const customMedia = [
  {
    id: "sifiso-media-1",
    headline: "SIFISO SKENJANA: Puff n’ pass the G20 sherpa spirit",
    publication: "Sunday Times (Business Times)",
    date: "2025-06-08",
    url: "https://www.businesslive.co.za/bt/opinion/2025-06-08-sifiso-skenjana-puff-n-pass-the-g20-sherpa-spirit/",
    action: "Read Article",
    image: "/speakers/Sifiso%20Skenjana/Sifiso-Skenjana-The-Speakers-Firm-6.jpg"
  },
  {
    id: "sifiso-media-2",
    headline: "Economist Sifiso Skenjana shares his thoughts on leadership and the future",
    publication: "Sowetan Live",
    date: "2020-07-23",
    url: "https://www.sowetanlive.co.za/s-mag/2020-07-23-economist-sifiso-skenjana-shares-his-thoughts-on-leadership-and-the-future/",
    action: "Read Article",
    image: "/speakers/Sifiso%20Skenjana/Sifiso-Skenjana-The-Speakers-Firm-7.jpg"
  },
  {
    id: "sifiso-media-3",
    headline: "SIFISO SKENJANA: NDB offers investment opportunity for Transnet",
    publication: "Sunday Times (Business Times)",
    date: "2023-09-10",
    url: "https://www.businesslive.co.za/bt/opinion/2023-09-10-sifiso-skenjana-ndb-offers-investment-opportunity-for-transnet/",
    action: "Read Article",
    image: "/speakers/Sifiso%20Skenjana/skenjana.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Sifiso Skenjana"
      speakerTitle=""
      speakerDesignation="Financial Economist, Columnist & Strategic Advisor"
      speakerRole="Founder & Financial Economist at AFRA Consultants."
      speakerRef="TSF-SS-22"
      heroBackgroundImage="/speakers/Sifiso%20Skenjana/Sifiso-Skenjana-The-Speakers-Firm-5.jpg"
      biographyImage="/speakers/Sifiso%20Skenjana/Sifiso-Skenjana-The-Speakers-Firm.jpg"
      bioHook="“Transforming economic insights into actionable development strategies for emerging markets.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="sifiso-skenjana" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="sifiso-skenjana" 
        customVideos={[
          {
            id: "sifiso-video-1",
            label: "Experience Reel",
            youtubeId: "rBzfFTyPC6c"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
