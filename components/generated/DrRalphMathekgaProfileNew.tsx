import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { label: "PhD", subtitle: "Political Studies (UJ)" },
  { label: "GIS Senior Expert", subtitle: "Lichtenstein" },
  { label: "Former Senior Analyst", subtitle: "National Treasury" }
];

const STRATEGIC_THEMES = [
  {
    number: "01",
    title: "Affirmative Action & Constitutional Law",
    copy: "Evaluating court challenges on affirmative action in South Africa and their systemic implications for equality, justice, and corporate compliance."
  },
  {
    number: "02",
    title: "SADC Trade & Diplomacy",
    copy: "Providing geopolitical intelligence on trade, international relations, and diplomatic pacts within the Southern African Development Community (SADC)."
  },
  {
    number: "03",
    title: "Democracy & State Reform",
    copy: "Analyzing party politics, electoral amendment bills, cabinet reshuffles, and state capacity to manage socio-economic crises."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr Ralph Mathekga (PhD) started his studies in Political Science, Law and Economic History at the University of the Witwatersrand, where he completed BA degree. He subsequently completed honours degree in Political Science as well as a MA (Masters) in Political Science, at the same university. Ralph has completed PhD in Political Studies at University of Johannesburg (2018). His thesis focuses on the court challenges on affirmative action in South Africa and the implications on equality and justice. Ralph also completed studies at the New School for Social Research, New York, where he spent 3 years researching and publishing. He completed post-doctoral studies at University of Johannesburg.",
  "Ralph worked as a Political Researcher with Institute for Democracy in South Africa (Idasa) where he focused on political, social and economic research. Ralph also worked as a Political Science Lecturer at the University of Western Cape. He has worked at the National Treasury (Ministry of Finance) in the Budget Office as a Senior Policy Analyst. Ralph regularly contributes content to local and international publications including The New York Times, Washington Post, and Financial Times, among others. He has written over 500 opinion articles over the years in various newspapers and magazines, both locally and internationally.",
  "Ralph is the author of the books When Zuma Goes (Tafelberg, 2016) and Ramaphosa’s Turn (Tafelberg, 2018), The ANC ‘s last decade (Tafelberg, 2021). His next book The role of the judiciary in a historically divided society will be published by Jacana (2025). He is currently a senior expert at the Lichtenstein based Geopolitical Intelligence Services (GIS), where he contributes report focusing on trade, diplomacy and foreign relations focusing on the SADC region."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "gis-lichtenstein", name: "GEOPOLITICAL INTELLIGENCE SERVICES" },
  { id: "national-treasury", name: "NATIONAL TREASURY" },
  { id: "idasa", name: "IDASA" },
  { id: "uj-postdoc", name: "UJ POST-DOC" }
];

const customMedia = [
  {
    id: "ralph-media-1",
    headline: "SAPS inquiry Ramaphosa’s ‘way to manage public rage’ – expert",
    publication: "Eyewitness News (EWN)",
    date: "2025-07-15",
    url: "https://www.ewn.co.za/2025/07/15/saps-inquiry-ramaphosas-way-to-manage-public-rage-expert",
    action: "Read Article",
    image: "/speakers/Ralph%20Mathekga/Ralph-Mathekga-The-Speakers-Firm-2.jpg"
  },
  {
    id: "ralph-media-2",
    headline: "Ralph Mathekga | Ramaphosa’s Limpopo problem: Why he is choosing political survival",
    publication: "News24",
    date: "2022-10-17",
    url: "https://www.news24.com/opinions/columnists/ralph_mathekga/ralph-mathekga-ramaphosas-limpopo-problem-why-he-is-choosing-political-survival-20221017",
    action: "Read Article",
    image: "/speakers/Ralph%20Mathekga/Ralph-Mathekga-The-Speakers-Firm-3.jpg"
  },
  {
    id: "ralph-media-3",
    headline: "Ralph Mathekga | Same old, same old: Don’t hold your breath when Ramaphosa reshuffles Cabinet",
    publication: "News24",
    date: "2023-02-20",
    url: "https://www.news24.com/opinions/columnists/ralph_mathekga/ralph-mathekga-same-old-same-old-dont-hold-your-breath-when-ramaphosa-reshuffles-cabinet-20230220",
    action: "Read Article",
    image: "/speakers/Ralph%20Mathekga/Ralph-Mathekga-The-Speakers-Firm-4.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Ralph Mathekga"
      speakerTitle="Dr."
      speakerDesignation="Political Analyst, Author & Democracy Specialist"
      speakerRole="Senior Expert at Lichtenstein Geopolitical Intelligence Services (GIS)."
      speakerRef="TSF-RM-28"
      heroBackgroundImage="/speakers/Ralph%20Mathekga/ralph-mathekga-banner.jpg"
      biographyImage="/speakers/Ralph%20Mathekga/Ralph-Mathekga-The-Speakers-Firm.jpg"
      bioHook="“Equality and justice are shaped by how constitutionality and affirmative policies interface with historically divided societies.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={[
        {
          id: "ralph-book-1",
          title: "When Zuma Goes",
          description: "Critique of political developments and prospects for reform under leadership transitions.",
          coverImage: "/speakers/Ralph%20Mathekga/Ralph-Mathekga-When-Zuma-Falls.jpg",
          url: "https://thespeakersfirm.co.za/dr-ralph-mathekga/"
        },
        {
          id: "ralph-book-2",
          title: "Ramaphosa's Turn",
          description: "Evaluating the internal factions, governance mandates, and economic challenges of the new administration.",
          coverImage: "/speakers/Ralph%20Mathekga/Ramaphosa's%20Turn%20-%20Ralph%20Mathekga.png",
          url: "https://thespeakersfirm.co.za/dr-ralph-mathekga/"
        },
        {
          id: "ralph-book-3",
          title: "The ANC's Last Decade",
          description: "A forward-looking analysis of South Africa's ruling party trajectory and democratic coalition futures.",
          coverImage: "/speakers/Ralph%20Mathekga/The%20ANC’s%20Last%20Decade-Ralph%20Mathekga.png",
          url: "https://thespeakersfirm.co.za/dr-ralph-mathekga/"
        }
      ]}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="dr-ralph-mathekga" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="dr-ralph-mathekga" 
        customVideos={[
          {
            id: "ralph-video-1",
            label: "Experience Reel",
            youtubeId: "WjJecdzODvo"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
