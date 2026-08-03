import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "newzroom-anchor", label: "Newzroom Afrika Anchor", subtitle: "Midday Prime Host" },
  { id: "tv-journalism", label: "19+ Years TV Journalism", subtitle: "National Broadcasting" },
  { id: "campaign-host", label: "Presidential Event Host", subtitle: "Government & Ministerial Stages" },
  { id: "award-mc", label: "Award-Winning Broadcaster", subtitle: "Media Excellence & Storytelling" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "National Narrative Construction & Editorial Composure",
    copy: "Leveraging 19 years of broadcast experience to build national news structures, host leaders, and direct media strategy during critical affairs."
  },
  {
    id: "theme-2",
    number: "02",
    title: "Executive Dialogue & Panel Moderation",
    copy: "Facilitating panels, governing boardrooms, and moderating high-profile summits for global corporate and government institutions."
  },
  {
    id: "theme-3",
    number: "03",
    title: "Transformation & Empowered Dialogues",
    copy: "Structuring campaigns and social dialogues focused on gender representation, economic inclusion, and high-impact legacy strategies."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Michelle Craig is one of South Africa’s most trusted broadcasters and commanding moderators, a seasoned professional who brings credibility, composure, and connection to every platform she steps onto. With over 19 years of experience in television journalism, she has shaped national narratives, interviewed world leaders, and anchored pivotal moments that define South Africa’s public discourse.",
  "As a celebrated journalist, Michelle has fronted some of the country’s most influential news programmes, first at eNCA, where she became a household name, and now as the host of Newzroom Afrika’s prime midday show, broadcast across the African continent. Her ability to distill complexity into clarity, lead live conversations with authority, and navigate high-pressure environments makes her one of the most formidable voices in modern broadcasting.",
  "Beyond the newsroom, Michelle is an accomplished event host, campaign anchor, and master of ceremonies, trusted by leading brands and institutions to deliver excellence on national stages. She has hosted presidential and ministerial events, chaired high-level summits, and moderated strategic dialogues for corporate, government, and international audiences. Whether commanding a boardroom, gala, or broadcast studio, Michelle brings a rare balance of elegance, intelligence, and emotional precision.",
  "Her expertise in panel facilitation and chairing executive conversations has positioned her as a go-to figure for leadership summits, industry think tanks, and award platforms. She is adept at reading the room, shaping conversations that matter, and turning complex issues into accessible insights that move audiences to action.",
  "Michelle’s contribution to South African media and communications has earned her numerous awards and recognitions, celebrating her excellence in journalism, women’s leadership, and national storytelling. She has led major national campaigns and cultural initiatives, using her platform to elevate dialogue around transformation, empowerment, and social impact.",
  "At The Speakers Firm, we proudly represent Michelle Craig, a world-class broadcaster, moderator, and media personality who embodies excellence, influence, and authenticity. Whether moderating a global policy panel, hosting a presidential gala, or facilitating a leadership strategy retreat, Michelle Craig delivers moments of intelligence, warmth, and lasting impact.",
  "Book Michelle Craig for your corporate events, leadership summits, or national award ceremonies, where clarity, credibility, and connection define the experience."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "newzroom", name: "Newzroom Afrika" },
  { id: "enca", name: "eNCA" },
  { id: "biz", name: "Bizcommunity" }
];

const customMedia = [
  {
    id: "michelle-media-1",
    headline: "In conversation with Michelle Craig",
    publication: "Bizcommunity",
    date: "",
    url: "https://www.bizcommunity.com/Article/196/66/219737.html#",
    action: "View Article",
    image: "/speakers/Michelle%20Craig/Michelle-Craig-The-Speakers-Firm-4.jpg"
  },
  {
    id: "michelle-media-2",
    headline: "Getting to know Newzroom Afrika AM Report anchor Michelle Craig",
    publication: "African Style",
    date: "",
    url: "https://africanstyle.co.za/2021/10/07/getting-to-know-newzroom-afrika-am-report-anchor-michelle-craig/",
    action: "View Article",
    image: "/speakers/Michelle%20Craig/Michelle-Craig-The-Speakers-Firm-3.jpg"
  },
  {
    id: "michelle-media-3",
    headline: "Newzroom Afrika's new breakfast show to set the pace with Michelle Craig as new co-anchor",
    publication: "Bizcommunity",
    date: "",
    url: "https://www.bizcommunity.com/Article/196/66/203563.html#",
    action: "View Article",
    image: "/speakers/Michelle%20Craig/Michelle-Craig-The-Speakers-Firm-5.jpg"
  }
];

const customGallery = [
  {
    id: "michelle-gal-1",
    src: "/speakers/Michelle%20Craig/Michelle-Craig-The-Speakers-Firm-6.jpg",
    alt: "Michelle Craig Presenting",
    caption: "Michelle Craig",
    className: ""
  },
  {
    id: "michelle-gal-2",
    src: "/speakers/Michelle%20Craig/Michelle-Craig-The-Speakers-Firm-2.jpg",
    alt: "Michelle Craig Broadcast",
    caption: "Studio Presentation",
    className: ""
  },
  {
    id: "michelle-gal-3",
    src: "/speakers/Michelle%20Craig/Michelle-Craig-The-Speakers-Firm-7.jpg",
    alt: "Michelle Craig Event MC",
    caption: "Executive Moderation",
    className: ""
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Michelle Craig"
      speakerTitle=""
      speakerDesignation="Broadcaster, Moderator, Event Host & Chairperson"
      speakerRole="Renowned Broadcast Personality & Moderator"
      speakerRef="TSF-MC-29"
      heroBackgroundImage="/speakers/Michelle%20Craig/Michelle-Craig-The-Speakers-Firm-8.jpg"
      biographyImage="/speakers/Michelle%20Craig/Michelle-Craig-The-Speakers-Firm-2.jpg"
      bioHook="“Credibility and composure under pressure enable us to turn complex national challenges into accessible, high-impact stories.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="michelle-craig" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="michelle-craig" 
        customGallery={customGallery} 
        customVideos={[
          {
            id: "michelle-video-1",
            label: "Michelle Craig Broadcast Highlights",
            youtubeId: "aR30J70a0_M"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
