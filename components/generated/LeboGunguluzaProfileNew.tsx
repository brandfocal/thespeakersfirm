import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "chairman-gem", label: "Group Chairman", subtitle: "Gem Group (Est. 2002)" },
  { id: "president-sabef", label: "President", subtitle: "SABEF Board of Directors" },
  { id: "dragon-investor", label: "Dragon Investor", subtitle: "SA's Dragons Den TV Show" },
  { id: "awards-recipient", label: "Award Recipient", subtitle: "Bethesda Business & Leadership Awards" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "The Breakthrough Entrepreneurship Blueprint",
    copy: "Unpacking the strategic rules to build multi-million rand enterprises without government tenders or initial institutional capital."
  },
  {
    id: "theme-2",
    number: "02",
    title: "Diversified Media & Hospitality Portfolio",
    copy: "Structuring publishing networks, contract media agencies, luxury hospitality networks, and VIP transport logistics."
  },
  {
    id: "theme-3",
    number: "03",
    title: "The 12-12-12 Mentorship Initiative",
    copy: "Recruiting and building young entrepreneurs through structured enterprise incubation, governance, and business model replication."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Lebo Gunguluza is an Entrepreneur, Turnaround Strategist, Business Speaker and Dragon Investor on SA’s Dragons Den TV Show – known as the “The Breakthrough Entrepreneur”. Lebo joined the professional speaking fraternity in August 2011 due to the demand created by his inspirational story of overcoming tremendous odds to succeed. By December 2011, he was chosen as one of the Top 3 new motivational speakers in South Africa by a leading speaker bureau.",
  "Lebo was chosen among many to be a Dragon on South Africa’s first Dragon’s Den TV Show, an internationally acclaimed TV Show started in the UK, which broadcasted on DSTV’s Mzansi Magic. At the age of 27, he became one of South Africa’s self-made black millionaires, without any funding or tenders from government, and over the years he built a multi-million rand empire where he had to overcome tremendous odds on his entrepreneurial journey.",
  "He is one of the key founders of the South African Black Entrepreneurs Forum (SABEF) to address issues facing black entrepreneurs in South Africa. Lebo adapted the title of 'The Ultimate Breakthrough Entrepreneur' and was awarded with the 'Africa Heritage Youth Entrepreneur Award' five years later. He also became a resident millionaire youth entrepreneur on a youth TV programme called 'Take 5', where he guided, motivated, and inspired aspiring youth entrepreneurs. He was honoured by the Millionaires Club with the Leadership Award in May 2010, and later received the Bethesda Business Award for his contribution to the development of entrepreneurship in South Africa.",
  "Lebo is the Founder and Group Chairman of the Gem (Gunguluza Enterprises and Media) Group established in 2002, an integrated media and hospitality group with interests in companies that serve in the media, communications, hospitality and IT spheres. SABEF has benefited from his extensive experience in communication and media, having consulted as National Director of Media Communications for membership-driven organisations such as Nafcoc and the Institute for Local Government Management.",
  "Lebo’s career started at the SABC where he was responsible for promoting the African Language stations, and later Metro FM. He then left for a broadcasting course in the US, and came back to join Herdbouys Advertising, where he gained a strong understanding of the media and advertising business. His journey as an entrepreneur started in entertainment through Gunguluza Entertainment and later refocused towards corporate communication and media spaces.",
  "The Gem Group has diversified into various portfolios within the media, leisure, and hospitality space, which include publishing, television, media technologies, restaurants, hotels, and resort properties. He is also the Chairman and Principal Consultant of the Local Government Business Network (LGBN). Through Uhuru Communications, he oversaw the Commercial Direction of Uhuru Publishing, which published Sawubona (SAA’s inflight publication), Metro Live, and government-related publications such as Municipal Focus, Public Sector Manager (PSM), and SEO Review.",
  "His entity Izani Media and Distribution is the first 100% black-owned magazine publishing and distribution agency in South Africa, which produces contract publications on behalf of corporate, special events, and government. This entity also publishes the SMME Opportunities Journal. He is also the Founder and Chairman of GovNet South Africa, and partner at Gem Driven and Pastrascor, leading VIP and Diplomatic Transportation companies.",
  "Lebo is also a Director of Municipal Property Management (MPS) and recently launched the Izani Luxury Hotel Network and Izani Executive Travel. In addition, Lebo co-founded the 12-12-12 entrepreneurship developmental and mentorship initiative, where he committed to recruiting 12 entrepreneurs every 12 months to start 12 enterprises, supporting dozens of dynamic young black entrepreneurs."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "gem-group", name: "GEM ENTERPRISES & MEDIA" },
  { id: "sabef", name: "SABEF" },
  { id: "dragons-den", name: "DRAGONS DEN SA" },
  { id: "metro-fm", name: "METRO FM" }
];

const customMedia = [
  {
    id: "lebo-media-1",
    headline: "The South African media mogul who started out with R60 and became a multi-millionaire",
    publication: "BusinessTech",
    date: "2024-05-12",
    url: "https://businesstech.co.za/news/business/789828/the-south-african-media-mogul-who-started-out-with-r60-and-became-a-multi-millionaire/",
    action: "Read Article",
    image: "/speakers/Lebo%20Gunguluza/Lebo-Gunguluza-The-Speakers-Firm-2.jpg"
  },
  {
    id: "lebo-media-2",
    headline: "From dirt poor to self-made millionaire: Lebo Gunguluza",
    publication: "Leader.co.za",
    date: "",
    url: "https://www.leader.co.za/article.aspx?s=6&a=5199",
    action: "Read Article",
    image: "/speakers/Lebo%20Gunguluza/Lebo-Gunguluza-The-Speakers-Firm-3.jpg"
  },
  {
    id: "lebo-media-3",
    headline: "15 Things You Need To Know About Lebo Gunguluza",
    publication: "Jozi Wire",
    date: "2021-02-15",
    url: "https://joziwire.co.za/2021/02/15-things-you-need-to-know-about-lebo-gunguluza/",
    action: "Read Article",
    image: "/speakers/Lebo%20Gunguluza/Lebo-Gunguluza.jpg"
  }
];

const customGallery = [
  {
    id: "lebo-gal-1",
    src: "/speakers/Lebo%20Gunguluza/Lebo-Gunguluza-The-Speakers-Firm-5.jpg",
    alt: "Lebo Gunguluza Portrait",
    caption: "Lebo Gunguluza",
    className: ""
  },
  {
    id: "lebo-gal-2",
    src: "/speakers/Lebo%20Gunguluza/IMG_7382-Edit.jpg",
    alt: "Lebo Gunguluza Speaking",
    caption: "Business Keynote Address",
    className: ""
  },
  {
    id: "lebo-gal-3",
    src: "/speakers/Lebo%20Gunguluza/Lebo-Gunguluza2.jpg",
    alt: "Lebo Gunguluza Executive Profile",
    caption: "Breakthrough Entrepreneur",
    className: ""
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Lebo Gunguluza"
      speakerTitle="Mr"
      speakerDesignation="Entrepreneur, Turnaround Strategist & Dragon Investor"
      speakerRole="Group Chairman of Gem Group & President of SABEF."
      speakerRef="TSF-LG-35"
      heroBackgroundImage="/speakers/Lebo%20Gunguluza/Lebo-Gunguluza-The-Speakers-Firm-4.jpg"
      biographyImage="/speakers/Lebo%20Gunguluza/Lebo-Gunguluza-The-Speakers-Firm.jpg"
      bioHook="“Grit, vision, and strategic mentorship can turn any young entrepreneur into a self-made icon.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="lebo-gunguluza" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="lebo-gunguluza" 
        customGallery={customGallery} 
        customVideos={[
          {
            id: "lebo-video-1",
            label: "Experience Reel",
            youtubeId: "VFHlBLA71QA"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
