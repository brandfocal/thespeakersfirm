"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "exec-master-ie",
    label: "Executive Master: Leadership & Strategy",
    subtitle: "IE Business School, Madrid, Spain."
  },
  {
    id: "director-mint-fresh",
    label: "Director of Mint Fresh Advisory Services",
    subtitle: "15 years of Enterprise & Supplier Development."
  },
  {
    id: "kaya-bizz-host",
    label: "Former KayaFM Host",
    subtitle: "Nominated for Liberty Radio Awards best Business and Finance Show."
  },
  {
    id: "top-50-businesswomen",
    label: "Top 50 Businesswomen to Watch",
    subtitle: "Ranked #19 by Entrepreneur Magazine in 2018."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "enterprise-development",
    number: "Theme 01",
    title: "Enterprise & Supplier Development (ESD)",
    copy: "Helping small and medium businesses build operational capacity, navigate investment options, and successfully enter corporate supply chains."
  },
  {
    id: "financial-inclusion",
    number: "Theme 02",
    title: "Financial Inclusion & Wealth Management",
    copy: "Empowering communities and employees with personal finance mastery, wealth legacy planning, and investment intelligence."
  },
  {
    id: "entrepreneur-stories",
    number: "Theme 03",
    title: "Inspirational Business Journeys & Podcasting",
    copy: "Sharing key takeaways, growth lessons, and strategies learned from hosting The Success Rate Podcast and interviewing top African business builders."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Thuli Magubane has over 25 years professional experience spanning Management Consulting, Corporate Finance and Investment Banking and Entrepreneurship. Thuli holds an executive master degree from IE Business School in Madrid (Spain) in Leadership and Strategy. Prior to starting her company, she worked at Absa Capital and Investec Bank. Thuli is a director of Mint Fresh Advisory Services, a company specialising in Enterprise and Supplier development that she founded 15 years ago. Thuli has assisted thousands of entrepreneurs across the country to grow and develop their businesses. She has consulted for organisations in the private and public sector such as National Empowerment Fund, Sasol SA, BankSeta, South32, Transnet and Standard Bank. Thuli has worked with Nedbank, 702 and Cape Talk for the past two years in the successful Business Ignite campaign and competition. She was the face of the campaign and a judge in the competition.",
  "Thuli is the former host of KayaBizz and My Money and Me on KayaFM, a weekly show that dealt with personal finance and investment matters. She was nominated for a Liberty Radio Award for the best Business and Finance Show in 2017 and in 2018.",
  "Thuli has sat on the board of the awarding winning Benguela Global Fund Managers, an emerging Fund Manager for the past 9 years. As a way of supporting her interest in the Arts, Thuli also sits on the board of Vuyani Dance Theatre.",
  "Thuli is also the host of the Success Rate Podcast. The Success Rate showcases inspirational stories of individual’s journey to success. She has interviewed successful entrepreneurs, trailblazers from diverse industries as well as celebrities such as Tasha Cobbs Leonard. The Podcast launched in October 2023.",
  "Thuli was recognised in 2018 by the Entrepreneur Magazine as one of the top 50 businesswomen to watch in South Africa. She came in at number 19 of the top 50 list. Thuli was also recognised by Money Today SA as one of the Top 12 businesswomen in South Africa in 2019."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "mint-fresh", name: "MINT FRESH ADVISORY" },
  { id: "benguela", name: "BENGUELA GLOBAL FUND MANAGERS" },
  { id: "kaya-fm", name: "KAYAFM" },
  { id: "investec", name: "INVESTEC BANK" }
];

const customMedia = [
  {
    id: "thuli-art-1",
    headline: "Nedbank Business Ignite 2024: Thuli Magubane | In Conversation with Nedbank",
    publication: "CapeTalk",
    date: "2024",
    url: "https://omny.fm/shows/capetalk-breakfast/nedbank-business-ignite-2#description",
    action: "Listen to Episode",
    image: "/speakers/Thuli Magubane/thuli-magubane-the-speakers-firm2.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Thuli Magubane"
      speakerTitle=""
      speakerDesignation="Director of Mint Fresh, Broadcaster & Financial Inclusion Expert"
      speakerRole="Driving supplier development and wealth management strategy across South Africa."
      speakerRef="TSF-TM-05"
      heroBackgroundImage="/speakers/Thuli Magubane/thuli-magubane-the-speakers-firm-10.jpg"
      biographyImage="/speakers/Thuli Magubane/thuli-magubane-the-speakers-firm3.jpg"
      bioHook="“Assisting thousands of entrepreneurs to grow their businesses and master personal finance.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="thuli-magubane" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="thuli-magubane" 
        customIntroText="Watch Thuli Magubane on the Success Rate Podcast, business ignite campaigns, and income protection features."
        customVideos={[
          {
            id: "thuli-video-1",
            label: "Thuli Magubane Experience Reel",
            youtubeId: "twHKiYLhQpc"
          },
          {
            id: "thuli-video-2",
            label: "Khosi Nyezi | The Success Rate with Thuli Magubane | Full Episode",
            youtubeId: "Ob4LF3n-gkY"
          },
          {
            id: "thuli-video-3",
            label: "Liberty Income Protection Campaign #Episode 4",
            youtubeId: "nRp3FF2WDLk"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
