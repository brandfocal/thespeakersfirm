import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "ulimo-host", label: "Ulimo Show Host", subtitle: "SABC1 Agriculture Morning Show" },
  { id: "gospel-mc", label: "I Want to Sing Gospel Host", subtitle: "SABC2 Reality Competition" },
  { id: "newzroom-anchor", label: "In Focus Anchor", subtitle: "Newzroom Afrika Show Host" },
  { id: "one-gospel", label: "Tonight Show Presenter", subtitle: "One Gospel Channel Host" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "Agricultural Broadcasting & Rural Journalism",
    copy: "Structuring current affairs coverage and hosting dedicated morning talk shows focused on national farming and agricultural growth."
  },
  {
    id: "theme-2",
    number: "02",
    title: "Reality Format Facilitation & Event Anchoring",
    copy: "Managing live competition shows, reality television frameworks, and directing large audiences in high-stakes entertainment environments."
  },
  {
    id: "theme-3",
    number: "03",
    title: "In-Focus Current Affairs Moderation",
    copy: "Drilling down into critical societal and political issues of the day, conducting high-pressure interviews, and holding leaders accountable."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Thabo Mdluli is best known to television viewers for hosting the morning agriculture show Ulimo, on SABC1. He also host the shows The Tonight Show and The Late Debate on DStv’s One Gospel channel.",
  "Mdluli was the host of the SABC2 reality talent competition I Want to Sing Gospel, from 2008-2011. He was replaced for Season 3 by Salamina Mosese."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "sabc", name: "SABC" },
  { id: "newzroom", name: "Newzroom Afrika" },
  { id: "powerfm", name: "Power FM" }
];

const customMedia = [
  {
    id: "thabo-media-1",
    headline: "Newzroom Afrika takes a fresh approach as it marks 5th birthday",
    publication: "Nexmedia",
    date: "",
    url: "https://www.nexmedia.co.za/2024/02/12/newzroom-afrika-takes-a-fresh-approach-as-it-marks-5th-birthday/",
    action: "View Article",
    image: "/speakers/Thabo%20Mdluli/Thabo-Mdluli-The-Speakers-Firm.jpg"
  },
  {
    id: "thabo-media-2",
    headline: "Thabo Mdluli fires tough questions at Tshwane acting city manager",
    publication: "Power FM / Omny",
    date: "",
    url: "https://omny.fm/shows/power-breakfast/thabo-mdluli-fires-tough-questions-at-tshwane-acti#description",
    action: "Listen Audio",
    image: "/speakers/Thabo%20Mdluli/Thabo-Mdluli-The-Speakers-Firm-5.jpg"
  },
  {
    id: "thabo-media-3",
    headline: "Xoli Mngambi and Thabo Mdluli get new shows on Newzroom Afrika",
    publication: "IOL",
    date: "",
    url: "https://iol.co.za/entertainment/tv/local/2021-05-18-xoli-mngambi-and-thabo-mdluli-get-new-shows-on-newzroom-afrika/",
    action: "View Article",
    image: "/speakers/Thabo%20Mdluli/Thabo-Mdluli-The-Speakers-Firm-4.jpg"
  }
];

const customGallery = [
  {
    id: "thabo-gal-1",
    src: "/speakers/Thabo%20Mdluli/Thabo-Mdluli-The-Speakers-Firm-6.jpg",
    alt: "Thabo Mdluli Portrait",
    caption: "Thabo Mdluli",
    className: ""
  },
  {
    id: "thabo-gal-2",
    src: "/speakers/Thabo%20Mdluli/Thabo-Mdluli-The-Speakers-Firm-5.jpg",
    alt: "Thabo Mdluli Broadcast",
    caption: "Broadcasting Session",
    className: ""
  },
  {
    id: "thabo-gal-3",
    src: "/speakers/Thabo%20Mdluli/Thabo-Mdluli-The-Speakers-Firm-7.jpg",
    alt: "Thabo Mdluli Talk",
    caption: "Corporate Event Host",
    className: ""
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Thabo Mdluli"
      speakerTitle=""
      speakerDesignation="Television Presenter & Broadcaster"
      speakerRole="Dynamic TV Presenter & Event Facilitator"
      speakerRef="TSF-TM-31"
      heroBackgroundImage="/speakers/Thabo%20Mdluli/Thabo-Mdluli-The-Speakers-Firm-2.jpg"
      biographyImage="/speakers/Thabo%20Mdluli/Thabo-Mdluli-The-Speakers-Firm-5.jpg"
      bioHook="“Anchoring major media platforms is about driving critical, balanced, and sharp public dialogue on issues that matter.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="thabo-mdluli" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="thabo-mdluli" 
        customGallery={[]} 
        customVideos={[
          {
            id: "thabo-video-1",
            label: "Thabo Mdluli Presentation Reel",
            youtubeId: "WLE70tfOpQQ"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
