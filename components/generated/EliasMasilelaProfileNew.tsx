import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { label: "BA", subtitle: "Social Science (UNISWA)" },
  { label: "MSc", subtitle: "Economic Policy (AAU)" },
  { label: "Harvard", subtitle: "Professional Certs" }
];

const STRATEGIC_THEMES = [
  {
    number: "01",
    title: "Capital Allocation & Pension Fund Strategy",
    copy: "Structuring large-scale sovereign wealth and public investment portfolios. Aligning capital deployment with long-term macroeconomic stability and growth."
  },
  {
    number: "02",
    title: "Impact Investing & Development Finance",
    copy: "Pioneering the national task force for impact investing in South Africa. Driving sustainable and social returns alongside financial performance."
  },
  {
    number: "03",
    title: "Macroeconomic Policy Formulation",
    copy: "Crafting developmental frameworks at the National Planning Commission, advising national treasury, and structuring monetary policy systems."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Elias Masilela is an MD of Family Investment business, BuMa Investment Holdings. Chairman of DNA Economics, Sanlam, Capital Harvest, Economic Research Southern Africa (ERSA) as well as National Task Force on Impact Investing in South Africa. Convenor of Family Foundation, Number 43 Trelawney Park; kwaMagogo. Member of the boards of Multichoice Group, Multichoice SA, Alternative Prosperity Holdings, Future Planet Capital in London, Strate, CA Sales as well as Global Steering Group (GSG) on Impact Investing.",
  "Previously, Commissioner of the 1st & 2nd National Planning Commission, CEO of the PIC, Head of Policy Analysis at Sanlam, Act. Dep. Director General Economic Policy in the National Treasury, Director of Research, Central Bank of Swaziland. He was also a member of the Boards of the South African Reserve Bank, Government Employee Pension Fund, Airports Company SA as well as the UN Global Compact Board & Chairman of the (UNGC) SA Local Network. Until recently, Chairman of Absa Asset Management and member of the Avior Capital Markets, Absa Financial Services, Eskom Pension and Provident Fund as well as the V&A Waterfront. Elias holds a BA Degree Social Science with the University of Swaziland, MSc in Economic Policy and Analysis with Addis Ababa University as well as several professional certificates with Harvard University."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "buma-holdings", name: "BUMA INVESTMENT HOLDINGS" },
  { id: "dna-economics", name: "DNA ECONOMICS" },
  { id: "multichoice", name: "MULTICHOICE GROUP" },
  { id: "sanlam", name: "SANLAM" }
];

const customMedia = [
  {
    id: "elias-media-1",
    headline: "MultiChoice names former PIC head as chair from 2024",
    publication: "News24",
    date: "2023-09-11",
    url: "https://www.news24.com/business/companies/multichoice-names-former-pic-head-as-chair-from-2024-20230911",
    action: "Read Article",
    image: "/speakers/Elias%20Masilela/Elias-Masilela-The-Speakers-Firm-3.jpg"
  },
  {
    id: "elias-media-2",
    headline: "Big shake-up at MultiChoice",
    publication: "BusinessTech",
    date: "2023-10-11",
    url: "https://businesstech.co.za/news/technology/717594/big-shake-up-at-multichoice/",
    action: "Read Article",
    image: "/speakers/Elias%20Masilela/Elias-Masilela-The-Speakers-Firm-5.jpg"
  },
  {
    id: "elias-media-3",
    headline: "Elias Masilela: private sector should ‘stop bickering’ and become part of the solution",
    publication: "Daily Maverick",
    date: "2019-08-21",
    url: "https://www.dailymaverick.co.za/article/2019-08-21-elias-masilela-private-sector-should-stop-bickering-and-become-part-of-the-solution/",
    action: "Read Article",
    image: "/speakers/Elias%20Masilela/eliasmasilela.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Elias Masilela"
      speakerTitle=""
      speakerDesignation="Chairman of MultiChoice Group & DNA Economics, Former PIC CEO"
      speakerRole="Managing Director of BuMa Investment Holdings & Chairman of DNA Economics."
      speakerRef="TSF-EM-23"
      heroBackgroundImage="/speakers/Elias%20Masilela/Elias-Masilela-The-Speakers-Firm-7.jpg"
      biographyImage="/speakers/Elias%20Masilela/Elias-Masilela-The-Speakers-Firm.jpg"
      bioHook="“Sustainable economic structures are constructed when the private sector actively transitions from complaining to co-creating solutions.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="elias-masilela" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="elias-masilela" 
        customVideos={[
          {
            id: "elias-video-1",
            label: "Experience Reel",
            youtubeId: "sQhAtNcpXm0"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
