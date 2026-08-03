import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "ucla-grad", label: "UCLA Graduate", subtitle: "Bachelor's Degree from UCLA" },
  { id: "empowa-founder", label: "Empowa Co-Founder", subtitle: "Black-Owned Investment Pioneer" },
  { id: "keynote-spk", label: "Acclaimed Speaker", subtitle: "Over 20 Years Experience" },
  { id: "author-door", label: "Published Author", subtitle: "Author of 'The Door'" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "Personal Transformation & Recovery Architecture",
    copy: "Building cognitive and behavioural frameworks to overcome addiction, navigate personal crises, and achieve sustainable self-mastery."
  },
  {
    id: "theme-2",
    number: "02",
    title: "Inspirational Leadership & Youth Empowerment",
    copy: "Designing community, educational, and corporate interventions to unlock human potential and foster high-performance mindsets."
  },
  {
    id: "theme-3",
    number: "03",
    title: "Strategic Socio-Economic Integration",
    copy: "Developing inclusive corporate governance, stakeholder alignments, and transformation programs across diverse operational layers."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "During his seven years in the United States, Abner Mariri obtained a Bachelor’s Degree from UCLA. In addition, this multi-talented professional speaker also worked on many entertainment projects which lead him to cross paths with comedian Bill Cosby, Little Steven, the legendary music producer Quincy Jones and Mrs Martin Luther King Jnr – the widow of the great American Civil Rights Leader.",
  "Having spent seven years in exile, Abner returned to South Africa and established Empowa Investments with top businessman Caesar Molebatsi. Empowa is a 100% black owned business with the aim of harnessing investment opportunities in South Africa. Abner’s style of presentation is adaptable and tailor-made to the client’s needs – from the boardroom to the shop floor."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "ucla", name: "UCLA" },
  { id: "empowa", name: "EMPOWA INVESTMENTS" },
  { id: "speakersfirm", name: "THE SPEAKERS FIRM" }
];

const customMedia = [
  {
    id: "abner-media-1",
    headline: "Journey of addiction captured intimately",
    publication: "Rosebank Killarney Gazette / Citizen",
    date: "April 2022",
    url: "https://www.citizen.co.za/rosebank-killarney-gazette/news-headlines/2022/04/19/journey-of-addiction-captured-intimately/",
    action: "Read Article",
    image: "/speakers/Abner%20Mariri/Abner-Mariri-The-Speakers-Firm-3.jpg"
  },
  {
    id: "abner-media-2",
    headline: "STILL I RISE-ABNER MARIRI",
    publication: "Radio 702 / Omny.fm",
    date: "",
    url: "https://omny.fm/shows/the-midday-link-up/still-i-rise-abner-mariri#description",
    action: "Listen to Interview",
    image: "/speakers/Abner%20Mariri/Abner-Mariri-The-Speakers-Firm-2.jpg"
  },
  {
    id: "abner-media-3",
    headline: "‘If you ride with cocaine you are headed for hell’",
    publication: "Benoni City Times / Citizen",
    date: "June 2014",
    url: "https://www.citizen.co.za/benoni-city-times/news-headlines/2014/06/24/if-you-ride-with-cocaine-you-are-headed-for-hell/",
    action: "Read Article",
    image: "/speakers/Abner%20Mariri/Abner-Mariri-The-Speakers-Firm.jpg"
  }
];

const customGallery = [
  {
    id: "abner-gal-1",
    src: "/speakers/Abner%20Mariri/Abner-Mariri-The-Speakers-Firm-7.jpg",
    alt: "Abner Mariri Portrait",
    caption: "Abner Mariri",
    className: ""
  },
  {
    id: "abner-gal-2",
    src: "/speakers/Abner%20Mariri/Abner-Mariri-The-Speakers-Firm-5.jpg",
    alt: "Abner Mariri Speaking",
    caption: "Strategic Leadership Address",
    className: ""
  },
  {
    id: "abner-gal-3",
    src: "/speakers/Abner%20Mariri/Abner-Mariri-The-Speakers-Firm-4.jpg",
    alt: "Abner Mariri Presentation",
    caption: "Transformation Keynote",
    className: ""
  }
];

const customBooks = [
  {
    id: "abner-book-1",
    title: "THE DOOR: An addict's journey",
    coverImage: "/speakers/Abner%20Mariri/The-Door-Abner-Mariri.jpg",
    purchaseUrl: "https://www.amazon.com/DOOR-addicts-journey-Abner-Mariri-ebook/dp/B0D8F37QNX",
    description: "A memoir capturing the raw journey of addiction and gradual recovery."
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Abner Mariri"
      speakerTitle=""
      speakerDesignation="Inspirational Speaker, Transformation Architect & Advisor"
      speakerRole="Internationally Acclaimed Transformation Architect"
      speakerRef="TSF-AM-28"
      heroBackgroundImage="/speakers/Abner%20Mariri/Abner-Mariri-The-Speakers-Firm-3.jpg"
      biographyImage="/speakers/Abner%20Mariri/Abner-Mariri-The-Speakers-Firm-7.jpg"
      bioHook="“A journey of self-mastery begins by opening the door to consciousness, masterfully navigating recovery, and rising above failures.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      books={customBooks}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="abner-mariri" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="abner-mariri" 
        customGallery={customGallery} 
        customVideos={[
          {
            id: "abner-video-1",
            label: "Abner Mariri Keynote Presentation",
            youtubeId: "dPbPDashk1A"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
