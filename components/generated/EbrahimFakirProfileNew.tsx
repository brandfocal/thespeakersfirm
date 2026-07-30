import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { label: "Ruth First Fellow", subtitle: "Wits University" },
  { label: "Director Programs", subtitle: "ASRI" },
  { label: "Summer Fellow", subtitle: "Stanford University" }
];

const STRATEGIC_THEMES = [
  {
    number: "01",
    title: "Legislative & Parliamentary Oversight",
    copy: "Structuring oversight protocols and legislative procedures based on foundational work in the first democratic Parliament of South Africa."
  },
  {
    number: "02",
    title: "Democratic Reform & Party Politics",
    copy: "Analyzing internal party factionalism, electoral amendment bills, and the effectiveness of institutional governance reforms."
  },
  {
    number: "03",
    title: "Media Commentary & Opinion Strategy",
    copy: "Structuring news editorial boards, advising media houses, and translating complex constitutional issues into public interest broadcasts."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Awarded the Ruth First Fellowship for 2014 at the University of the Witwatersrand, Johannesburg – Ebrahim Fakir is currently the Director of Programs at ASRI and was part time lecturer at the WITS School of Governance at the University of the Witwatersrand, Johannesburg for 2018. He is an editorial advisor to the independent start-up media house “Daily Vox” & regularly contributes analysis, opinion and comment articles to the Mail & Guardian, Sunday Times and News 24, amongst others and regularly appears in the electronic broadcast media as an analyst and commentator. Formerly Senior Researcher and Analyst at the Centre for Policy Studies in Johannesburg [2003-2009], he worked at the Institute for Democracy in South Africa (IDASA) [1998-2003] at both IDASA’s Pretoria and Cape Town offices and he also worked at the first democratic Parliament of the Republic of South Africa (1996-1998) in the Legislation and Oversight Division.",
  "Before that, he was junior lecturer in English Literature at the then University of Durban-Westville (1994-1996). He read for a degree in English Literature at the University of the Witwatersrand; Johannesburg where he was elected on to the Students Representative Council. He was visiting fellow at the Institute of Development Studies at the University of Sussex (2005/2006) and was a Draper Hills Summer Fellow at the Centre for Democracy, Development and the Rule of Law at Stanford University, for a month-long summer programme in 2011."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "asri", name: "ASRI PROGRAMS" },
  { id: "wits-governance", name: "WITS SCHOOL OF GOVERNANCE" },
  { id: "stanford-cddr", name: "STANFORD CDDRL" },
  { id: "daily-vox", name: "THE DAILY VOX" }
];

const customMedia = [
  {
    id: "ebrahim-media-1",
    headline: "Ebrahim Fakir | Death to the debate on the death penalty",
    publication: "News24",
    date: "2023-02-20",
    url: "https://www.news24.com/opinions/columnists/guestcolumn/ebrahim-fakir-death-to-the-debate-on-the-death-penalty-20230220",
    action: "Read Article",
    image: "/speakers/Ebrahim%20Fakir/ebrahim-fakir-the-speakers-firm-3.jpg"
  },
  {
    id: "ebrahim-media-2",
    headline: "Ebrahim Fakir | Hopeless hope: Confidence in ANC’s organisational, institutional reform is misplaced",
    publication: "News24",
    date: "2023-01-12",
    url: "https://www.news24.com/opinions/fridaybriefing/ebrahim-fakir-hopeless-hope-confidence-in-ancs-organisational-institutional-reform-is-misplaced-20230112",
    action: "Read Article",
    image: "/speakers/Ebrahim%20Fakir/ebrahim-fakir-the-speakers-firm-4.jpg"
  },
  {
    id: "ebrahim-media-3",
    headline: "Ebrahim Fakir | Reject the parties that accept the Electoral Amendment Bill",
    publication: "News24",
    date: "2022-10-20",
    url: "https://www.news24.com/opinions/fridaybriefing/ebrahim-fakir-reject-the-parties-that-accept-the-electoral-amendment-bill-20221020",
    action: "Read Article",
    image: "/speakers/Ebrahim%20Fakir/ebrahim-fakir-the-speakers-firm-5.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Ebrahim Fakir"
      speakerTitle=""
      speakerDesignation="Political Analyst & Democracy Governance Specialist"
      speakerRole="Director of Programs at ASRI & Ruth First Fellow."
      speakerRef="TSF-EF-29"
      heroBackgroundImage="/speakers/Ebrahim%20Fakir/ebrahim-fakir-the-speakers-firm-9.jpg"
      biographyImage="/speakers/Ebrahim%20Fakir/ebrahim-fakir-the-speakers-firm.jpg"
      bioHook="“Sustainable democratic growth requires robust oversight and institutional accountability rather than temporary political compromises.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="ebrahim-fakir" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="ebrahim-fakir" 
        customVideos={[
          {
            id: "ebrahim-video-1",
            label: "Experience Reel",
            youtubeId: "4QLBJ8zZudc"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
