import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "metro-sacred", label: "The Sacred Space Host", subtitle: "Metro FM Presenter" },
  { id: "oprah-editor", label: "Former Editor", subtitle: "O, The Oprah Magazine SA" },
  { id: "tamzin-media", label: "Tamzin Media Founder", subtitle: "Boutique Production House" },
  { id: "actor-lead", label: "Lead Actor", subtitle: "Generations & Known Gods" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "Faith, Purpose & Authentic Leadership",
    copy: "Integrating inner renewal principles, emotional stability, and purpose-driven communication into executive coaching and leadership models."
  },
  {
    id: "theme-2",
    number: "02",
    title: "The Art of Meaningful & Purposeful Media",
    copy: "Constructing media architectures, producing content, and hosting broadcast channels that elevate public dialogue and build legacy."
  },
  {
    id: "theme-3",
    number: "03",
    title: "Cultural & Emotional Intelligence",
    copy: "Structuring cross-cultural insight, self-governance strategies, and leadership empathy based on global broadcast experience."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "At The Speakers Firm, we proudly represent Thami Ngubeni, one of South Africa’s most versatile and inspiring media professionals, a celebrated broadcaster, writer, producer, and thought leader whose career spans television, film, radio, publishing, and spiritual development. With grace, depth, and authenticity, Thami has become a defining voice in conversations about purpose, identity, and the human spirit.",
  "A familiar face to millions, Thami has appeared in acclaimed productions such as Teleschool, Man 2 Man, Talk Talk, and Live Your Dreams. She went on to star in popular television dramas including Generations, Molo Fish, Suburban Bliss, and Going Up. On the international stage, she appeared in the feature film Critical Assignment, and was cast in Country of My Skull. Her acting versatility extended to her lead role as Nana Soci in the award-winning Known Gods series, solidifying her reputation as one of South Africa’s most compelling performers.",
  "Thami’s creative influence extends far beyond the screen. As a television writer, producer, and host, she has contributed to iconic programmes such as Top Billing, Family Fortunes, and Free Spirit. She hosted The Scarlet Lounge on DStv’s ONE Gospel, a soulful platform where she guided conversations on purpose, womanhood, and faith. Her global perspective deepened during her time in Los Angeles, where she worked as a DJ for the American Radio Network (ARN), building cross-cultural insight and storytelling depth.",
  "On radio, Thami continues to inspire as a long-standing voice on Metro FM, where she hosts the beloved and spiritually uplifting show “The Sacred Space.” Her ability to weave spirituality, purpose, and practical wisdom into relatable dialogue has made her a trusted companion to listeners across generations.",
  "As an author, entrepreneur, and content creator, Thami co-authored My Sacred Spaces (Penguin Books), a profound reflection on faith and inner renewal, and she leads Tamzin Media, a boutique production company producing purposeful content across television, film, radio, and print. Her editorial leadership also includes her tenure as Editor of O, The Oprah Magazine South Africa, where she championed narratives of empowerment and authenticity.",
  "A sought-after keynote speaker, moderator, and media strategist, Thami brings intellectual depth, emotional resonance, and spiritual clarity to every engagement. Her speaking themes include Faith and Leadership, Women and Purpose, The Art of Meaningful Media, and Cultural and Emotional Intelligence in Leadership, empowering audiences to lead, create, and live with intention.",
  "Book Thami Ngubeni through The Speakers Firm, A Leading African Speakers Bureau, for your next leadership retreat, women’s conference, or faith-based dialogue, and experience a voice that enlightens, uplifts, and transforms."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "metro", name: "Metro FM" },
  { id: "oprah", name: "Oprah Magazine" },
  { id: "enca", name: "eNCA" }
];

const customBooks = [
  {
    id: "thami-book-1",
    title: "My Sacred Spaces",
    coverImage: "/speakers/Thami%20Ngubeni/preview.ltyt-488-g070.1.front.0143025228.jpg",
    purchaseUrl: "https://www.loot.co.za/product/thami-ngubeni-my-sacred-spaces/ltyt-488-g070",
    description: "A profound reflection on faith and inner renewal, co-authored by Thami Ngubeni."
  }
];

const customMedia = [
  {
    id: "thami-media-1",
    headline: "Thami Ngubeni lands her first breakfast TV show gig as a co-anchor on eNCA’s revamped ‘SA Morning’",
    publication: "IOL",
    date: "",
    url: "https://iol.co.za/sunday-tribune/entertainment/2023-09-07-thami-ngubeni-lands-her-first-breakfast-tv-show-gig-as-a-co-anchor-on-encas-revamped-sa-morning/",
    action: "View Article",
    image: "/speakers/Thami%20Ngubeni/Thami-Ngubeni-The-Speakers-Firm-5.jpg"
  },
  {
    id: "thami-media-2",
    headline: "Thami Ngubeni joins eNCA as co-anchor",
    publication: "Sunday World",
    date: "",
    url: "https://sundayworld.co.za/celebrity-news/thami-ngubeni-joins-enca-as-co-anchor/",
    action: "View Article",
    image: "/speakers/Thami%20Ngubeni/Thami-Ngubeni-The-Speakers-Firm-6.jpg"
  },
  {
    id: "thami-media-3",
    headline: "Get to know your TV news Anchor: Thami Ngubeni",
    publication: "IOL",
    date: "",
    url: "https://iol.co.za/entertainment/tv/local/2020-07-26-get-to-know-your-tv-news-anchor-thami-ngubeni/",
    action: "View Article",
    image: "/speakers/Thami%20Ngubeni/Thami-Ngubeni-The-Speakers-Firm-4.jpg"
  }
];

const customGallery = [
  {
    id: "thami-gal-1",
    src: "/speakers/Thami%20Ngubeni/Thami-Ngubeni-The-Speakers-Firm-3.jpg",
    alt: "Thami Ngubeni Portrait",
    caption: "Thami Ngubeni",
    className: ""
  },
  {
    id: "thami-gal-2",
    src: "/speakers/Thami%20Ngubeni/Thami-Ngubeni-The-Speakers-Firm-2.jpg",
    alt: "Thami Ngubeni Studio",
    caption: "In Studio Session",
    className: ""
  },
  {
    id: "thami-gal-3",
    src: "/speakers/Thami%20Ngubeni/maxresdefault.jpg",
    alt: "Thami Ngubeni Broadcaster",
    caption: "Radio Hosting",
    className: ""
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Thami Ngubeni"
      speakerTitle=""
      speakerDesignation="Media Personality, Author & Thought Leader"
      speakerRole="Inspirational Broadcaster & Content Creator"
      speakerRef="TSF-TN-30"
      heroBackgroundImage="/speakers/Thami%20Ngubeni/Thami-Ngubeni-The-Speakers-Firm-4.jpg"
      biographyImage="/speakers/Thami%20Ngubeni/Thami-Ngubeni-The-Speakers-Firm-2.jpg"
      bioHook="“Living and leading with intention means connecting our daily execution with our deepest values and human purpose.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      books={customBooks}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="thami-ngubeni" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="thami-ngubeni" 
        customGallery={customGallery} 
        customVideos={[
          {
            id: "thami-video-1",
            label: "Thami Ngubeni Broadcast Interview",
            youtubeId: "02teMcWzDWc"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
