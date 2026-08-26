import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "founder-tea", label: "Founder", subtitle: "Township Entrepreneurs Alliance" },
  { id: "ceo-iaf-brands", label: "CEO", subtitle: "IAF Brands (Township Agency)" },
  { id: "impact-stat", label: "80,000+", subtitle: "SMEs Impacted Nationally" },
  { id: "funding-stat", label: "430+ Enterprises", subtitle: "Funding Facilitated" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "Township Economy & Consumer Insights",
    copy: "Analyzing market opportunities, brand activations, and cultural dynamics in South Africa's vibrant township markets."
  },
  {
    id: "theme-2",
    number: "02",
    title: "Empowering Rural & Informal Businesses",
    copy: "Structuring mentorship, workshops, and sustainable ecosystem support through the Township Entrepreneurs Alliance."
  },
  {
    id: "theme-3",
    number: "03",
    title: "The #GetThingsDone Execution Strategy",
    copy: "Driving operational execution, productivity habits, and grit to turn entrepreneurial ideas into sustainable enterprises."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Bulelani Balabala is a distinguished award-winning entrepreneur and business speaker based in South Africa, renowned for his exceptional contributions to the business landscape. With a well-deserved reputation as a Township entrepreneur developer and youth ambassador, Bulelani has been recognized for his outstanding achievements in fostering economic growth and empowerment within underserved Townships of South Africa.",
  "As the CEO of IAF Brands, a specialist township agency offering integrated solutions for corporate South Africa and the township economy, Bulelani leads a dedicated team in delivering cutting-edge strategies, insightful market analyses, brand activation, and nationwide implementation services. Under his visionary leadership, IAF Brands has successfully served a diverse clientele of local and international brands, driving sustainable growth and fostering meaningful connections.",
  "In addition to his role at IAF Brands, Bulelani is the visionary founder of Township Entrepreneurs Alliance (TEA), a transformative initiative aimed at empowering small businesses in township and rural areas. TEA has directly impacted over 80,000 small businesses in both formal and informal sectors, creating opportunities for growth and prosperity. His advocacy has led to the facilitation of funding opportunities for over 430 small enterprises, catalyzing their entrepreneurial journey and fostering economic resilience.",
  "A seasoned professional speaker, Bulelani is a sought-after voice in the fields of township economy, productivity and entrepreneurship. With a global presence on various media platforms, he shares his thought leadership and insights with audiences worldwide, inspiring change and driving innovation. Bulelani has shared prestigious platforms with business leaders, industry experts, and government officials, shaping dialogues and fostering collaboration for a brighter future.",
  "Living by the mantra #GetThingsDone, Bulelani Balabala embodies a spirit of determination, resilience, and unwavering dedication to creating positive impact in the world. His commitment to empowering communities and driving economic progress serves as a beacon of inspiration for aspiring entrepreneurs and change-makers globally."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "iaf-brands", name: "IAF BRANDS" },
  { id: "tea", name: "TOWNSHIP ENTREPRENEURS ALLIANCE" },
  { id: "drum", name: "DRUM MAGAZINE" },
  { id: "sme-sa", name: "SME SOUTH AFRICA" }
];

const BOOKS = [
  {
    id: "bulelani-book-1",
    title: "The Township Entrepreneur's Guide to Get Things Done",
    description: "Bulelani's flagship book outlining practical, actionable strategies for township business owners to navigate local markets and scale successfully.",
    coverImage: "/speakers/Bulelani%20Balabala/The-Township-Entrepreneurs-Guide-to-Get-Things-Done.jpg",
    url: "https://www.bulelani.co.za/product/the-township-entrepreneurs-guide-to-get-things-done/"
  }
];

const customMedia = [
  {
    id: "bulelani-media-1",
    headline: "Meet Bulelani Balabala, the man behind the Township Economy Summit and Awards",
    publication: "Drum / News24",
    date: "2024-12-03",
    url: "https://www.news24.com/drum/inspiration/mystory/meet-bulelani-balabala-the-man-behind-the-township-economy-summit-and-awards-20241203",
    action: "Read Article",
    image: "/speakers/Bulelani%20Balabala/Bulelani-Balabala-The-Speakers-Firm-3.jpg"
  },
  {
    id: "bulelani-media-2",
    headline: "Bulelani Balabala Talks Township to TEA",
    publication: "SME South Africa",
    date: "",
    url: "https://smesouthafrica.co.za/bulelani-balabla-talks-township-to-tea/",
    action: "Read Article",
    image: "/speakers/Bulelani%20Balabala/Bulelani-Balabala-The-Speakers-Firm-4.jpg"
  },
  {
    id: "bulelani-media-3",
    headline: "Business & entrepreneurship: Get things done",
    publication: "Mail & Guardian Young South Africans",
    date: "2022-06-30",
    url: "https://200youngsouthafricans.co.za/bulelani-balabala-35-2022/",
    action: "Read Profile",
    image: "/speakers/Bulelani%20Balabala/Bulelani-Balabala-The-Speakers-Firm-5.jpg"
  }
];

const customGallery = [
  {
    id: "bulelani-gal-1",
    src: "/speakers/Bulelani%20Balabala/Bulelani-Balabala-The-Speakers-Firm.jpg",
    alt: "Bulelani Balabala Portrait",
    caption: "Bulelani Balabala",
    className: ""
  },
  {
    id: "bulelani-gal-2",
    src: "/speakers/Bulelani%20Balabala/Bulelani-Balabala-The-Speakers-Firm-6.jpg",
    alt: "Bulelani Balabala Speaking",
    caption: "TEA Summit Presentation",
    className: ""
  },
  {
    id: "bulelani-gal-3",
    src: "/speakers/Bulelani%20Balabala/160301-bulelani-balabala-360-biz.jpg",
    alt: "Bulelani Business Showcase",
    caption: "Empowering Local Ventures",
    className: ""
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Bulelani Balabala"
      speakerTitle=""
      speakerDesignation="Founder of Township Entrepreneurs Alliance & CEO of IAF Brands"
      speakerRole="Award-winning entrepreneur, business speaker and township developer."
      speakerRef="TSF-BB-34"
      heroBackgroundImage="/speakers/Bulelani%20Balabala/Bulelani-Balabala-The-Speakers-Firm-2.jpg"
      heroMobileBackgroundImage="/speakers/Bulelani%20Balabala/bulelani-balabala-mobile.jpg"
      biographyImage="/speakers/Bulelani%20Balabala/Bulelani-Balabala-The-Speakers-Firm.jpg"
      bioHook="“Get things done! Empowering local township and rural businesses is the heartbeat of economic growth.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      books={BOOKS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="bulelani-balabala" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="bulelani-balabala" 
        customGallery={customGallery} 
        customVideos={[
          {
            id: "bulelani-video-1",
            label: "Experience Reel",
            youtubeId: "f5M48qLqyiQ"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
