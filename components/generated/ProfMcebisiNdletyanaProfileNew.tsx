import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "phd", label: "PhD", subtitle: "Political Science" },
  { id: "head-faculty", label: "Head Faculty", subtitle: "MISTRA" },
  { id: "mellon-award", label: "Mellon Award", subtitle: "Recipient" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "Political Economy & Strategic Reflection",
    copy: "Analyzing the intersection of economic policy, governance structures, and historical dynamics to shape developmental strategy in emerging democracies."
  },
  {
    id: "theme-2",
    number: "02",
    title: "Traditional Identity & Colonial Manipulation",
    copy: "Evaluating how colonial and apartheid administrations manipulated local identities, and how to adapt traditional institutions to modern democratic principles."
  },
  {
    id: "theme-3",
    number: "03",
    title: "Heritage Conservation & Policy Advising",
    copy: "Shaping national policy on heritage representation, cultural preservation, and state-level advisory boards."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Prof Mcebisi Ndletyana is currently the Head: Political Economy Faculty at the Mapungubwe: Institute for Strategic Reflection (MISTRA) and holds a PhD in Political Science. His research dissertation explored the South African colonial and apartheid history, with a focus on how traditional identities and institutions were manipulated for political purposes and how they have been adapted to the democratic principles and ethos of the present-day South Africa. He has held academic positions internationally in 2002 and 2003; at the Marymount Manhattan College and the City University of New York. Locally, Prof Ndletyana has conducted research, published in the newspaper articles in the Sunday Independent and daily Dispatch Newspapers, and presented various papers at conferences and Seminars.",
  "Prof Ndletyana is well published and has made various contributions in Books, Chapters, Journal Articles, and to the HSRC and Centre for Policy Studies Publications. In addition he has served as a panel member in advisory panels and committees since to 2007, and was elected to serve as Chairperson for the National Heritage Council, Panel of experts in 2012. Amongst his achievements has won the following merit awards for his contribution to research: the Mellon-Foundation Award in 2000 and 2001, and the Post-Graduate Merit Award from 1996-2001."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "mistra", name: "MISTRA FACULTY" },
  { id: "cuny", name: "CITY UNIVERSITY OF NEW YORK" },
  { id: "heritage-council", name: "NATIONAL HERITAGE COUNCIL" },
  { id: "hsrc", name: "HSRC" }
];

const customMedia = [
  {
    id: "mcebisi-media-1",
    headline: "Mcebisi Ndletyana | The PA’s racial division playbook may win votes but it comes with a risk",
    publication: "News24",
    date: "2025-09-03",
    url: "https://www.news24.com/opinions/columnists/mcebisi-ndletyana-the-pas-racial-division-playbook-may-win-votes-but-it-comes-with-a-risk-20250903-0541",
    action: "Read Article",
    image: "/speakers/Mcebisi%20Ndletyana/Mcebisi-Ndletyana-The-Speakers-Firm-2.jpg"
  },
  {
    id: "mcebisi-media-2",
    headline: "Mcebisi Ndletyana | The SOE contrast is stark – but Transnet offers simple, obvious solution",
    publication: "News24",
    date: "2025-08-27",
    url: "https://www.news24.com/opinions/columnists/mcebisi-ndletyana-the-soe-contrast-is-stark-but-transnet-offers-simple-obvious-solution-20250827-0810",
    action: "Read Article",
    image: "/speakers/Mcebisi%20Ndletyana/Mcebisi-Ndletyana-The-Speakers-Firm-3.jpg"
  },
  {
    id: "mcebisi-media-3",
    headline: "Power play: The energy conundrum facing South Africa — and the world",
    publication: "Mail & Guardian",
    date: "2023-01-29",
    url: "https://mg.co.za/thought-leader/opinion/2023-01-29-power-play-the-energy-conundrum-facing-south-africa-and-the-world/",
    action: "Read Article",
    image: "/speakers/Mcebisi%20Ndletyana/Mcebisi-Ndletyana-The-Speakers-Firm.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Mcebisi Ndletyana"
      speakerTitle="Prof."
      speakerDesignation="Academic, Historian & Political Commentator"
      speakerRole="Head of Political Economy Faculty at MISTRA."
      speakerRef="TSF-MN-27"
      heroBackgroundImage="/speakers/Mcebisi%20Ndletyana/Mcebisi-Ndletyana-The-Speakers-Firm-5.jpg"
      biographyImage="/speakers/Mcebisi%20Ndletyana/Mcebisi-Ndletyana-The-Speakers-Firm-4.jpg"
      bioHook="“Adapting traditional identities to the democratic principles and ethos of present-day South Africa.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="prof-mcebisi-ndletyana" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="prof-mcebisi-ndletyana" 
        customVideos={[
          {
            id: "mcebisi-video-1",
            label: "Experience Reel",
            youtubeId: "NfbOBrnwPiE"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
