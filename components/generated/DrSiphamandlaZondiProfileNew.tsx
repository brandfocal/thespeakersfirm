import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { label: "Professor", subtitle: "Political Sciences (UP)" },
  { label: "Director", subtitle: "IPATC (UJ)" },
  { label: "Former Head", subtitle: "Institute for Global Dialogue" }
];

const STRATEGIC_THEMES = [
  {
    number: "01",
    title: "Global South & Decolonial Diplomacy",
    copy: "Decolonizing diplomatic theory and practice. Building new paradigms of peace, dialogue, and South-South agency in global affairs."
  },
  {
    number: "02",
    title: "African Union & Regional Integration",
    copy: "Developing common positions at the African Union. Structuring mediation and governance frameworks to resolve regional conflicts."
  },
  {
    number: "03",
    title: "BRICS & Emerging Partnerships",
    copy: "Evaluating Africa's strategic relationships with BRICS countries and other emerging markets across Iran, Turkey, Japan, and South Korea."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Siphamandla Zondi is a professor and the head of the Department of Political Sciences, University of Pretoria, and coordinates the Department’s Institute for Strategic and Political Affairs. Siphamandla Zondi is a professor and the head of the Department of Political Sciences, University of Pretoria, and coordinates the Department’s Institute for Strategic and Political Affairs, which analyses strategic dynamics in national, continental and international affairs including decision-making, leadership, norms, values, and agency. He also overseas the Centre for the Study of Governance Innovation and the Centre for Mediation in Africa. Between 2004 and 2016, he worked first as the head of the Africa programme of the Institute for Global Dialogue associated with Unisa and later as the head of the Institute itself. He was previously employed to lead research on regional integration at the Africa Institute between 2000 and 2003.",
  "His intellectual interests lie in the area of Africa’s international relations as well as theory building in relation to decolonization and transformation of the modern world and its systems. His recent published work focused on the diplomacy of common positions at the African Union, decolonising diplomatic theory and practice, south-south agency in global affairs, African voices in international relations and the paradigm of peace and dialogue. Zondi is the co-editor (with Sabelo Ndlovu-Gatsheni) of the recently published book entitled Decolonising the University, its Knowledge and Disciplines (Carolina Press) – available on Amazon."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "up-university", name: "UNIVERSITY OF PRETORIA" },
  { id: "uj-ipatc", name: "IPATC AT UJ" },
  { id: "global-dialogue", name: "INSTITUTE FOR GLOBAL DIALOGUE" },
  { id: "africa-institute", name: "AFRICA INSTITUTE" }
];

const customMedia = [
  {
    id: "zondi-media-1",
    headline: "PROF ZONDI: Despite early controversy, Ramaphosa’s National Dialogue signals a path forward",
    publication: "Eyewitness News (EWN)",
    date: "2025-08-21",
    url: "https://www.ewn.co.za/2025/08/21/prof-siphamandla-zondi-despite-early-controversy-ramaphosa-s-national-dialogue-signals-a-path-forward",
    action: "Read Article",
    image: "/speakers/Siphamandla%20Zondi/Prof-Siphamandla-Zondi-The-Speakers-Firm-3.jpg"
  },
  {
    id: "zondi-media-2",
    headline: "UJ appoints Prof Siphamandla Zondi as the Director of the Institute for Pan African Thought and Conversation",
    publication: "UJ News",
    date: "2022-09-02",
    url: "https://news.uj.ac.za/news/uj-appoints-prof-siphamandla-zondi-as-the-director-of-the-institute-for-pan-african-thought-and-conversation-ipatc-and-the-institute-for-global-african-affairs-igaa-2/",
    action: "Read Article",
    image: "/speakers/Siphamandla%20Zondi/Professor-Siphamandla-Zondi.jpg"
  },
  {
    id: "zondi-media-3",
    headline: "Africa’s Strategic Partnerships with BRICS and Other Emerging Countries",
    publication: "Polity.org.za",
    date: "2025-08-20",
    url: "https://www.polity.org.za/article/africas-strategic-partnerships-with-brics-and-other-emerging-countries-siphamandla-zondi-hellen-adogo-2025-08-20",
    action: "Read Article",
    image: "/speakers/Siphamandla%20Zondi/Prof-Siphamandla-Zondi-The-Speakers-Firm-6.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Siphamandla Zondi"
      speakerTitle="Dr."
      speakerDesignation="Political Scientist & Global South Policy Strategist"
      speakerRole="Professor & Head of Department of Political Sciences at University of Pretoria."
      speakerRef="TSF-SZ-30"
      heroBackgroundImage="/speakers/Siphamandla%20Zondi/Prof-Siphamandla-Zondi-The-Speakers-Firm-5.jpg"
      biographyImage="/speakers/Siphamandla%20Zondi/Prof-Siphamandla-Zondi-The-Speakers-Firm.jpg"
      bioHook="“Peace and dialogue in continental affairs require decolonising diplomatic theory and translating decolonial theory into policy agency.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="dr-siphamandla-zondi" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="dr-siphamandla-zondi" 
        customVideos={[
          {
            id: "zondi-video-1",
            label: "Experience Reel",
            youtubeId: "SHFSHWoZqMw"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
