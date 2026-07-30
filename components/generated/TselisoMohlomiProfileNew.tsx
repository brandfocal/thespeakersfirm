"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "tut-director",
    label: "Senior Director, IFOW at TUT",
    subtitle: "Pioneers initiatives to bridge industry and academic gaps."
  },
  {
    id: "gauteng-director",
    label: "Former Gauteng Economic Director",
    subtitle: "Led Strategic Partnerships, Special Projects, and International Relations."
  },
  {
    id: "intercultural-coach",
    label: "Intercultural Executive Coach",
    subtitle: "Trains senior executives at Dwellworks, Cartus, and NetExpat."
  },
  {
    id: "publishing-vp",
    label: "Former Vice President Africa Ops",
    subtitle: "Managed regional operations for Our Daily Bread / Discovery House."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "future-of-work",
    number: "Theme 01",
    title: "Future of Work & Academic-Industry Alignment",
    copy: "Delivering research and strategies to develop future-ready graduates, leverage technology, and build institutional collaborations."
  },
  {
    id: "intercultural-leadership",
    number: "Theme 02",
    title: "Intercultural Leadership & Corporate Governance",
    copy: "Coaching multinational executives on change management, governance structures, and adapting to global business dynamics."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Tseliso Mohlomi has over twenty years of experience in senior management positions. His experiences span from the NGO sector, corporate sector, and the public sector. He is currently working as the Senior Director for the Tshwane University of Technology’s Institute for Future of Work. His responsibility is to pioneer the initiative by the university to bridge the gap between the industry and the academia. This is to aid the university in its quest to produce high impact research, develop high tech solutions in partnership with the industry and to produce future ready graduates. He joined the university direct from the public sector where he worked for the Gauteng Department of Economic Development as the Director responsible for Strategic Partnerships, Special Projects, and International Relations. In this role he was responsible to source and forge strategic partnerships between government and corporate sector, lobby for the integration of the SMMEs into the mainstream economy through market access initiatives. He also liaised with the embassies, multilateral, and bilateral development agencies to facilitate collaborations and leverage foreign direct investment.",
  "Tseliso Mohlomi has also worked for an American based Christian publishing company Our Daily Bread/Discovery House Publishing as the Vice President for Africa Operations. In this role he oversaw operations in Kenya, Nigeria, Zimbabwe, and South Africa. He led a process of change management through developing business processes, governance structures, human capital development strategies, business development and financial management. With over 20 years in global senior management positions Tseliso Mohlomi is also a freelance Executive Coach/Consultant focusing on intercultural leadership and integration. He freelances for the likes of Dwellworks University in New York, Cartus Intercultural and Language Solutions (UK) and NetExpat (UK). In this role Tseliso Mohlomi offers training and coaching to Senior Executives coming to South Africa or going out of South Africa to work with the Multinational Companies."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "tut-ifow", name: "TUT IFOW" },
  { id: "gauteng-gov", name: "GAUTENG ECONOMIC DEVELOPMENT" },
  { id: "netexpat", name: "NETEXPAT" },
  { id: "dwellworks", name: "DWELLWORKS" }
];

const customMedia = [
  {
    id: "mohlomi-media-1",
    headline: "Future of Work National Dialogue to focus on building global competitiveness through collaboration",
    publication: "ITWeb",
    date: "",
    url: "https://www.itweb.co.za/article/future-of-work-national-dialogue-to-focus-on-building-global-competitiveness-through-collaboration/lLn147mQb3x7J6Aa",
    action: "Read Article",
    image: "/speakers/Tseliso%20Mohlomi/Tseliso-Mohlomi-The-Speakers-Firm-2.jpg"
  },
  {
    id: "mohlomi-media-2",
    headline: "Inclusive economic growth at centre of TUT’s annual Future of Work 4IR Dialogue",
    publication: "TUT News",
    date: "",
    url: "https://www.tut.ac.za/latest-news/411-inclusive-economic-growth-at-centre-of-tuts-annual-future-of-work-4ir-dialogue",
    action: "Read Article",
    image: "/speakers/Tseliso%20Mohlomi/Tseliso-Mohlomi-The-Speakers-Firm-5.jpg"
  },
  {
    id: "mohlomi-media-3",
    headline: "The Innovative Hub: Artificial Intelligence and its impact on South Africa’s creative industry.",
    publication: "Omny.fm",
    date: "",
    url: "https://omny.fm/shows/the-national-pulse/the-innovative-hub-artificial-intelligence-and-its#description",
    action: "Listen Audio",
    image: "/speakers/Tseliso%20Mohlomi/Tseliso-Mohlomi-The-Speakers-Firm.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Tseliso Mohlomi"
      speakerTitle=""
      speakerDesignation="Senior Director, Institute for the Future of Work at TUT & Intercultural Executive Coach"
      speakerRole="Senior Director, Institute for the Future of Work at TUT."
      speakerRef="TSF-TM-23"
      heroBackgroundImage="/speakers/Tseliso%20Mohlomi/Tseliso-Mohlomi-The-Speakers-Firm-8.jpg"
      biographyImage="/speakers/Tseliso%20Mohlomi/Tseliso-Mohlomi-The-Speakers-Firm-6.jpg"
      bioHook="“Bridging industry and academia is key to creating future-ready leaders.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="tseliso-mohlomi" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="tseliso-mohlomi" 
        customVideos={[
          {
            id: "mohlomi-video-1",
            label: "Experience Reel",
            youtubeId: "rgmxcwIdTWQ"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
