import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "bba", label: "BBA", subtitle: "Regenesys Business School" },
  { id: "sound-eng", label: "Diploma", subtitle: "Sound Engineering" },
  { id: "property-cert", label: "Certificate", subtitle: "Property Development (UCT)" },
  { id: "samro-board", label: "Board Member", subtitle: "SAMRO (2020-2024)" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "Broadcast Innovation & Media Strategy",
    copy: "Evaluating the impact of digital disruption on traditional broadcasting networks, media programming, and audience engagement."
  },
  {
    id: "theme-2",
    number: "02",
    title: "Real Estate Portfolio & Investment Architecture",
    copy: "Leveraging structured Property Development and Investment methods to build and manage diversified real estate assets across South Africa."
  },
  {
    id: "theme-3",
    number: "03",
    title: "Wellbeing, Resilience & Holistic Health",
    copy: "Empowering individuals to realign their physical, mental, and professional wellbeing, inspired by his book 'To Health With It'."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Distinguished as Tebogo Thekisho, widely known as ProVerb, is a versatile figure hailing from the Diamond Capital of the world, Kimberley in the Northern Cape. Evolving from his roots in music, Tebogo has seamlessly transitioned into a multifaceted professional, emphasizing academic achievements, business acumen, and a commitment to continuous learning.",
  "After attaining a diploma in Sound Engineering, Tebogo commenced his career at Yfm as the Technical Producer for DJ Fresh in 2003. Simultaneously, he left an indelible mark on television as the host of the Hip-Hop segment Head-Rush on Channel O. Tebogoʼs music career flourished with the release of his debut album, The Book of ProVerb, in 2005, followed by four subsequent albums, a mixtape, and numerous collaborations that solidified his standing in the music industry.",
  "Beyond his musical endeavors, Tebogo is a published author, formidable speaker, and Master of Ceremonies. He is a former non-executive director for travel and tourism companies Flight Centre and FCM Travel Solutions, and also a former co-owner of the television production company SIC Entertainment, he has contributed to the production of notable shows, including Idols South Africa, Nigerian Idol, and Wedding Bashers.",
  "Demonstrating a keen interest in property, Tebogo has expanded his expertise by completing a UCT certificate in Property Development and Investment, one in Tax Law, and another in Investment Management. Currently managing a diverse property portfolio across Gauteng, KZN, and the Western Cape, he has established himself as a savvy entrepreneur in the real estate sector.",
  "Tebogoʼs commitment to continuous learning is evident through his completion of a Bachelor of Business Administration with Regenesys Business School in 2023, and he is currently enrolled in their MBA programme, where his dissertation explores the impact of digital disruption on traditional broadcasting platforms.",
  "In addition to his academic achievements, Tebogo is the author of the acclaimed memoir The Book of ProVerb, released in 2020. In October 2025, he published his second book, To Health With It – Reset, Realign and Redefine Your Health, Wealth and Happiness, which offers a personal and holistic guide to wellbeing, drawing on his journey across physical, emotional, financial, and professional health.",
  "A dedicated advocate for the music industry, he served on the board of the Southern African Music Rights Organization (SAMRO) from 2020 until December 2024, actively participating in the Social Ethics and Governance Committee. Returning to national radio in April 2022 as the co-host of The Midday Link Up on Metro FM, Tebogo continues to make a significant impact in the media landscape. His achievements were further acknowledged in July 2022 when he was honored with the Gold Presidential Award at the PRISA PRISM Awards.",
  "In recognition of his contributions to the entertainment industry, Tebogo received the esteemed Legend Award from the Hope Givers Foundation, as part of their renowned Raising Legends initiative. This accolade symbolizes his dedication to nurturing hope and empowerment within communities, reflecting a steadfast commitment to leadership, compassion, and inspiration.",
  "Tebogo also had the privilege of hosting the prestigious Metro FM Music Awards 2024, showcasing his enduring influence and versatility in the entertainment industry. He has been announced as the official host of the Miss World South Africa Pageant, further solidifying his status as a prominent figure in South Africaʼs entertainment landscape.",
  "In line with his dedication to nurturing future creatives, Tebogo partnered with his alma mater, St Patrickʼs CBC in Kimberley, to launch the Tebogo “ProVerb” Thekisho Trophy for Outstanding Performance at MADDFest, an evolved version of the schoolʼs original Talent Night, where he once honed his own creative expression. The trophy honors excellence in Music, Art, Dance, and Drama and reflects his belief in the transformative power of creativity, especially among youth. It also stands as a meaningful symbol of his legacy and continued investment in the cultural and artistic development of South African learners.",
  "Most recently, Tebogo was named a UMA Icon Award recipient at the 20th Anniversary of the Urban Music Awards, held at the Heartfelt Arena in Pretoria. This historic celebration marked the Awardsʼ inaugural South African ceremony and recognized his longstanding impact on the music and entertainment industry, alongside fellow trailblazers such as Zola 7, Boom Shaka, Mandla Spikiri, Letta Mbulu, and DJ Ready D."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "metro-fm", name: "METRO FM" },
  { id: "samro", name: "SAMRO" },
  { id: "regenesys", name: "REGENESYS BUSINESS SCHOOL" },
  { id: "prisa", name: "PRISA" }
];

const BOOKS = [
  {
    id: "proverb-book-1",
    title: "To Health With It – Reset, Realign and Redefine Your Health, Wealth and Happiness",
    description: "A personal and holistic guide to wellbeing, drawing on ProVerb's journey across physical, emotional, financial, and professional health.",
    coverImage: "/speakers/Tebogo%20“ProVerb”%20Thekisho/To-health-with-it.jpg",
    url: "https://exclusivebooks.co.za/products/9781776096879"
  },
  {
    id: "proverb-book-2",
    title: "The Book of ProVerb",
    description: "The acclaimed memoir of Tebogo Thekisho, detailing his childhood, music career, and transition into business.",
    coverImage: "/speakers/Tebogo%20“ProVerb”%20Thekisho/The-Book-of-Proverb.jpg",
    url: "https://exclusivebooks.co.za/products/9781776094875?_pos=1&_sid=8d619ca66&_ss=r"
  }
];

const customMedia = [
  {
    id: "proverb-media-1",
    headline: "ProVerb's new book offers guide to health, wealth and happiness",
    publication: "TimesLIVE",
    date: "2025-09-26",
    url: "https://www.timeslive.co.za/tshisa-live/tshisa-live/2025-09-26-proverbs-new-book-offers-guide-to-health-wealth-and-happiness/",
    action: "Read Article",
    image: "/speakers/Tebogo%20“ProVerb”%20Thekisho/ProVerb-The-Speakers-Firm.jpg"
  },
  {
    id: "proverb-media-2",
    headline: "Tebogo “ProVerb” Thekisho has graduated with a Bachelor of Business Administration",
    publication: "Kaya 959",
    date: "2023-07-01",
    url: "https://www.kaya959.co.za/entertainment/tebogo-proverb-thekisho-has-graduated-with-a-bachelor-of-business-administration/",
    action: "Read Article",
    image: "/speakers/Tebogo%20“ProVerb”%20Thekisho/ProVerb-The-Speakers-Firm6.jpg"
  },
  {
    id: "proverb-media-3",
    headline: "From lyricist to role model: How ProVerb swapped hip-hop for family and found success",
    publication: "News24",
    date: "2025-11-13",
    url: "https://www.news24.com/life/arts-and-entertainment/celebrities/from-lyricist-to-role-model-how-proverb-swapped-hip-hop-for-family-and-found-success-20251113-0771",
    action: "Read Article",
    image: "/speakers/Tebogo%20“ProVerb”%20Thekisho/ProVerb-The-Speakers-Firm8.jpg"
  }
];

const customGallery = [
  {
    id: "proverb-gal-1",
    src: "/speakers/Tebogo%20“ProVerb”%20Thekisho/ProVerb-The-Speakers-Firm5.jpg",
    alt: "ProVerb Professional Portrait",
    caption: "Tebogo 'ProVerb' Thekisho",
    className: ""
  },
  {
    id: "proverb-gal-2",
    src: "/speakers/Tebogo%20“ProVerb”%20Thekisho/ProVerb-The-Speakers-Firm3.jpg",
    alt: "ProVerb on Stage",
    caption: "Hosting Live Events",
    className: ""
  },
  {
    id: "proverb-gal-3",
    src: "/speakers/Tebogo%20“ProVerb”%20Thekisho/ProVerb-The-Speakers-Firm4.jpg",
    alt: "ProVerb Speaking",
    caption: "Professional Master of Ceremonies",
    className: ""
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Tebogo “ProVerb” Thekisho"
      speakerTitle=""
      speakerDesignation="Media Personality, Author, Entrepreneur & Speaker"
      speakerRole="Co-host of Metro FM Midday Link Up & former non-executive director FCM Travel / SAMRO board."
      speakerRef="TSF-TPT-31"
      heroBackgroundImage="/speakers/Tebogo%20“ProVerb”%20Thekisho/ProVerb-The-Speakers-Firm7.jpg"
      biographyImage="/speakers/Tebogo%20“ProVerb”%20Thekisho/ProVerb-The-Speakers-Firm5.jpg"
      bioHook="“Realign, reset, and redefine your physical, mental, and financial health to achieve true legacy.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      books={BOOKS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="proverb" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="proverb" 
        customGallery={customGallery} 
        customVideos={[
          {
            id: "proverb-video-1",
            label: "Experience Reel",
            youtubeId: "GRkviiHPM5E"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
