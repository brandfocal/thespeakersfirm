import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { label: "Honorary PhD", subtitle: "Stellenbosch, UKZN, Zululand" },
  { label: "Research Associate", subtitle: "Oxford University" },
  { label: "Professor of Practice", subtitle: "UJ" }
];

const STRATEGIC_THEMES = [
  {
    number: "01",
    title: "National Statistics & Data Revolution",
    copy: "Structuring state-level indicators and demographic frameworks. Utilizing statistical insights to navigate institutional planning and economic policy formulation."
  },
  {
    number: "02",
    title: "Civil Registration & Development Economics",
    copy: "Advocating for robust vital statistics registries across Africa. Developing economic models that reflect the true motions of developmental finance."
  },
  {
    number: "03",
    title: "Global Statistical Leadership & Governance",
    copy: "Structuring international data networks through roles at the UN Statistics Commission, StatCom Africa, and PARIS21."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr Pali Lehohla is the former Statistician-General of South Africa, a position he held from the year 2000 up to 2017. He was co-chair of PARIS21 and was the Chair of the United Nations Statistics Commission. He was the founding chair of the Statistics Commission of Africa (StatCom Africa) and chaired the African Symposium for Statistical Development (ASSD). He was the Vice President of the International Statistics Institute (ISI). He served as one of the twenty-five-member panel on Data Revolution appointed by the UN Secretary General. Dr Lehohla has been a forceful advocate for improving the Civil Registration and Vital Statistics systems in Africa. He consulted extensively in the in conflict, out of conflict and fragile states on matters statistics. Since 2018 he became a Research Associate at Oxford University. For twenty years to date he has been a weekly columnist in the Business Report, over a month to-date he is a weekly columnist in the Sunday Times Daily Online.",
  "Dr Lehohla is the co-director of the Economic Modelling Academy (EMA) that aims to train society in economic policy formulation based on the principles and laws of motion of economics. He is a board member of the Foundation for Human Rights as well as a board member for the Institute of Economic Justice at Wits. He was awarded Honorary doctorates by the Universities of Stellenbosch, Kwa-Zulu Natal, and Zululand. His alma mater, at forty years of existence, the Regional Institute of Population Studies at the University of Ghana recognized him for his contribution in the African public service. Dr Pali Lehohla is a professor of practice at the University of Johannesburg."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "stats-sa", name: "STATISTICS SOUTH AFRICA" },
  { id: "un-statistics", name: "UN STATISTICS COMMISSION" },
  { id: "oxford", name: "OXFORD UNIVERSITY" },
  { id: "uj-university", name: "UNIVERSITY OF JOHANNESBURG" }
];

const customMedia = [
  {
    id: "pali-media-1",
    headline: "REAL NUMBERS: Skills crisis: SA youth cannot win as the life game is rigged at birth",
    publication: "Business Report",
    date: "2023-02-19",
    url: "https://iol.co.za/business-report/economy/2023-02-19-real-numbers-skills-crisis-sa-youth-cannot-win-as-the-life-game-is-rigged-at-birth/",
    action: "Read Article",
    image: "/speakers/Pali%20Lehohla/Dr-Pali-Lehohla-The-Speakers-Firm-3.jpg"
  },
  {
    id: "pali-media-2",
    headline: "PALI LEHOHLA | No honour in a country with a seemingly insatiable appetite for failure",
    publication: "TimesLive",
    date: "2023-01-16",
    url: "https://www.timeslive.co.za/sunday-times-daily/opinion-and-analysis/2023-01-16-pali-lehohla-no-honour-in-a-country-with-a-seemingly-insatiable-appetite-for-failure/",
    action: "Read Article",
    image: "/speakers/Pali%20Lehohla/Dr-Pali-Lehohla-The-Speakers-Firm-4.jpg"
  },
  {
    id: "pali-media-3",
    headline: "PALI LEHOHLA | Just energy transition: don’t be fooled by St Peter’s mother dressed up as Matthew",
    publication: "TimesLive",
    date: "2023-02-12",
    url: "https://www.timeslive.co.za/sunday-times-daily/opinion-and-analysis/2023-02-12-pali-lehohla-just-energy-transition-dont-be-fooled-by-st-peters-mother-dressed-up-as-matthew/",
    action: "Read Article",
    image: "/speakers/Pali%20Lehohla/Dr-Pali-Lehohla-The-Speakers-Firm-5.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Pali Lehohla"
      speakerTitle="Dr."
      speakerDesignation="Former Statistician-General of South Africa & Economist"
      speakerRole="Oxford Research Associate & EMA Co-Director."
      speakerRef="TSF-PL-25"
      heroBackgroundImage="/speakers/Pali%20Lehohla/Dr-Pali-Lehohla-The-Speakers-Firm-6.jpg"
      biographyImage="/speakers/Pali%20Lehohla/Dr-Pali-Lehohla-The-Speakers-Firm.jpg"
      bioHook="“Data is the lifeblood of accountability—without metrics, we are blind to both our failures and our possibilities.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="pali-lehohla" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="pali-lehohla" 
        customVideos={[
          {
            id: "pali-video-1",
            label: "Experience Reel",
            youtubeId: "F77KhNFtTb0"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
