import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "sa-talkingpoint", label: "#TheTalkingPoint Host", subtitle: "SAfm Daily Show" },
  { id: "yali-fellow", label: "Obama YALI Fellow", subtitle: "Young African Leaders" },
  { id: "cnn-fellow", label: "CNN Journalism Fellow", subtitle: "International Media Program" },
  { id: "destiny-40", label: "Top 40 Under 40", subtitle: "Destiny Magazine" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "Strategic Communications & Editorial Integrity",
    copy: "Decisive panel facilitation and broadcast hosting that translates complex political, policy, and social concepts into highly accessible national conversations."
  },
  {
    id: "theme-2",
    number: "02",
    title: "Community Social Change & Rural Infrastructure",
    copy: "Constructing rural schools and supporting girls' educational foundations to drive long-term community transformation and strategic alignment."
  },
  {
    id: "theme-3",
    number: "03",
    title: "Trek4Mandela & Active Social Dialogue Advocacy",
    copy: "Representing critical causes on continental peaks to demonstrate endurance, promote dignity, and fund menstrual hygiene products for young girls."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Cathy Mohlahlana is one of South Africa’s most respected broadcasters and sought-after moderators, a commanding voice trusted by audiences, executives, and policymakers alike. With a career in national broadcast journalism spanning more than a decade, she brings insight, composure, and authority to every platform, from the newsroom to global leadership stages.",
  "Cathy is the host of #TheTalkingPoint on SAfm, broadcast daily from 09:00 to 12:00, where her sharp interviewing style and balanced perspective continue to shape national dialogue. She formerly anchored News@Prime on Newzroom Afrika, DStv Channel 405, where she led in-depth reporting and live analysis on major national and continental stories that defined South Africa’s current affairs landscape.",
  "Her journalism career began at Talk Radio 702’s Eyewitness News and Kaya FM, where her ability to communicate complex stories with clarity quickly earned her national recognition.",
  "In 2009, she received the National Press Club Radio Journalist of the Year Award, acknowledging her outstanding storytelling and editorial integrity. In 2012, she was selected for the CNN Journalism Fellowship, followed by her selection as a fellow of US President Barack Obama’s Young African Leaders Initiative (YALI) in 2014. The following year, Destiny Magazine named her among the “Top 40 Women Under 40”, recognising her as one of South Africa’s leading voices in media and leadership.",
  "When she is not on radio or moderating policy discussions, Cathy is a regular presence on South Africa’s premier corporate and leadership stages as a programme director, moderator, master of ceremonies, and panel chairperson. She has hosted and facilitated high-level conferences, government summits, and corporate leadership events, commanding the stage with elegance, precision, and intellect. Her ability to read the room, adapt her tone, and connect with diverse audiences ensures that every conversation she leads is both purposeful and impactful.",
  "A passionate advocate for youth development and social change, Cathy is an Ambassador for Trek4Mandela, supporting initiatives that promote education, dignity, and empowerment for young South Africans. She is also part of a non-profit organisation that builds schools in rural areas and delivers youth empowerment programmes focused on education, leadership, and skills development, particularly for young women and girls. Her work reflects her belief that informed dialogue, coupled with opportunity, can transform lives and communities.",
  "At The Speakers Firm, we proudly represent Cathy Mohlahlana, a world-class broadcaster, moderator, and facilitator who embodies the firm’s booking philosophy, that every voice we represent must drive strategy, shape culture, and create legacy. Whether moderating a national dialogue, hosting a presidential gala, or facilitating a corporate summit, Cathy Mohlahlana delivers clarity, credibility, and connection that resonate far beyond the stage.",
  "Book Cathy Mohlahlana for corporate conferences, national dialogues, leadership summits, and global forums, where informed storytelling and strategic communication meet purpose and impact."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "safm", name: "SAfm" },
  { id: "newzroom", name: "Newzroom Afrika" },
  { id: "yali", name: "Obama YALI" }
];

const customMedia = [
  {
    id: "cathy-media-1",
    headline: "My Hometown: Polokwane, Limpopo",
    publication: "eNCA",
    date: "",
    url: "https://www.enca.com/south-africa/my-hometown-polokwane-limpopo",
    action: "Watch Video",
    image: "/speakers/Cathy%20Mohlahlana/Cathy-Mohlahlana-The-Speakers-Firm.jpg"
  },
  {
    id: "cathy-media-2",
    headline: "ENCAs Cathy Mohlahlana Ready To Climb Kilimanjaro",
    publication: "eNCA",
    date: "",
    url: "https://www.youtube.com/watch?v=DH6nhKb8f8o",
    action: "Watch Video",
    image: "/speakers/Cathy%20Mohlahlana/Cathy-Mohlahlana-The-Speakers-Firm-6.jpg"
  },
  {
    id: "cathy-media-3",
    headline: "eNCA’s Cathy Mohlahlana ready to climb Kilimanjaro",
    publication: "eNCA",
    date: "",
    url: "https://www.youtube.com/watch?v=DH6nhKb8f8o",
    action: "Watch Video",
    image: "/speakers/Cathy%20Mohlahlana/Cathy-Mohlahlana-The-Speakers-Firm-7.jpg"
  }
];

const customGallery = [
  {
    id: "cathy-gal-1",
    src: "/speakers/Cathy%20Mohlahlana/Cathy-Mohlahlana-3-1.jpg",
    alt: "Cathy Mohlahlana Presenting",
    caption: "Cathy Mohlahlana",
    className: ""
  },
  {
    id: "cathy-gal-2",
    src: "/speakers/Cathy%20Mohlahlana/Cathy-Mohlahlana-The-Speakers-Firm-2.jpg",
    alt: "Cathy Mohlahlana Broadcast",
    caption: "In the Studio",
    className: ""
  },
  {
    id: "cathy-gal-3",
    src: "/speakers/Cathy%20Mohlahlana/Cathy-Mohlahlana-The-Speakers-Firm-3.jpg",
    alt: "Cathy Mohlahlana Panel",
    caption: "Strategic Panel Moderation",
    className: ""
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Cathy Mohlahlana"
      speakerTitle=""
      speakerDesignation="Broadcaster, News Anchor, Moderator & Strategic Communications Professional"
      speakerRole="Respected Broadcast Host & Policy Moderator"
      speakerRef="TSF-CM-28"
      heroBackgroundImage="/speakers/Cathy%20Mohlahlana/Cathy-Mohlahlana-The-Speakers-Firm-2.jpg"
      heroMobileBackgroundImage="/speakers/Cathy%20Mohlahlana/cathy-mohlahlana-mobile.jpg"
      biographyImage="/speakers/Cathy%20Mohlahlana/Cathy-Mohlahlana-The-Speakers-Firm-5.jpg"
      bioHook="“Informed dialogue coupled with concrete opportunity holds the transformational power to change lives and build legacy.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGES_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="cathy-mohlahlana" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="cathy-mohlahlana" 
        customGallery={[]} 
        customVideos={[
          {
            id: "cathy-video-1",
            label: "Cathy Mohlahlana Broadcaster Reel",
            youtubeId: "DH6nhKb8f8o"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};

const STRATEGES_THEMES = STRATEGIC_THEMES; // Fallback mapping in case of typos
