"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "metro-fm-host-tbo",
    label: "Metro FM Radio Presenter",
    subtitle: "Hosted high-rating formats Ryhme & Reason and Saturday International shows."
  },
  {
    id: "founder-touch-hd",
    label: "Founder: Touch HD",
    subtitle: "Pioneered South Africa's premier digital online radio station."
  },
  {
    id: "def-jam-alumnus",
    label: "Def Jam Records Alumnus",
    subtitle: "Completed def jam internship under Kevin Liles and Jay-Z's leadership."
  },
  {
    id: "concert-producer-tbo",
    label: "Concert Impresario & Producer",
    subtitle: "Staged international concerts featuring Akon, John Legend, and Bishop TD Jakes."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "showbiz-global-partnerships",
    number: "Theme 01",
    title: "Showbiz & Global Partnerships",
    copy: "Bridging SABC/Metro FM with international stars and staging major multi-format stadium events."
  },
  {
    id: "digital-broadcasting-frontiers",
    number: "Theme 02",
    title: "Digital Broadcasting Frontiers",
    copy: "Launching online radio formats and streaming applications to challenge traditional linear broadcasting."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Tbo Touch is a popular South African entertainer who has worked on Metro FM and SABC Live Music show. Tbo Touch is also the founder of Touch HD, an online radio station. His passion for the entertainment industry expanded more in 2002 when he worked at Def Jam Records as an intern under the leadership of Kevin Liles which was later passed on to Jay-Z as President of Def Jam. This experience earned left an indelible mark in Touch’s career as an executive in Showbiz. In February 2004, meeting in Manhattan with the Station Manager of Metro FM at the Mr Lesley Ntloko currently Head of Radio as SABC, this was to convince SABC to have a satellite studio in New York and possibly host a radio show live from the hub Entertainment. In April 2004 the deal was sealed and now officially Metro FM went live from New York City everyday Saturday April 4th 2004 between 8-9pm. To celebrate Touch founded a company called Trademark and staged its 1st international concert in December featuring Akon. Early 2005 flew to Zurich meet with John Legend to seal his first trip ever to South Africa. The show was a success and thanks to Nokia.",
  "The journey has been a constant growing experience. In 2004 hosted an Hour show on Saturday between 8-9pm called the international. In 2005 hosted a 3 hour show called Ryhme and Reason. In 2006 Tbo Touch continued to excel in what he loves, hosted 2 shows Friday night and Saturday. He became the first radio and TV personality to host 2 live TV show and radio in two different studios both running simultaneously on Friday night on SABC 1 (Largest Urban Music TV Show then) , Metro FM and TouchCentral. It was in 2009 when Touch was the 1st metro fm joc to host Metro FM Awards for 2 years consecutively. With his spiritual upbringing and influence Tbo Touch brought Times Magazine most influential and sought after leader and speaker Bishop TD Jakes along with the starring of Preachers of LA, World renowned and giant intellectual Bishop Noel Jones 2010 to minister at Orlando Stadium in Soweto"
];

const SOCIAL_PROOF_LOGOS = [
  { id: "metro-fm-tbo", name: "METRO FM" },
  { id: "touch-hd", name: "TOUCH HD" },
  { id: "def-jam", name: "DEF JAM RECORDS" },
  { id: "sabc-1", name: "SABC 1" }
];

const customMedia = [
  {
    id: "tbo-art-1",
    headline: "Tbo Touch stands apart—unmatched, in a league of his own",
    publication: "GQ South Africa",
    date: "",
    url: "https://www.gq.co.za/culture/entertainment/tbo-touch-stands-apartunmatched-in-a-league-of-his-own-41dd0594-2305-4ad5-be94-909e62982b72",
    action: "Read Article",
    image: "/speakers/Tbo Touch/tbo-touch-7.jpg"
  },
  {
    id: "tbo-art-2",
    headline: "TBO TOUCH’S MOVIE BLESSERS TO HIT CINEMAS NEXT MONTH!",
    publication: "Daily Sun",
    date: "19 Sep 2019",
    url: "https://www.snl24.com/dailysun/Celebs/tbo-touchs-movie-blessers-to-hit-cinemas-next-month-20190919",
    action: "Read Article",
    image: "/speakers/Tbo Touch/tbo-touch-6.jpg"
  },
  {
    id: "tbo-art-3",
    headline: "Tbo Touch launches SA-focused, video-on-demand offering, THD24",
    publication: "The Media Online",
    date: "19 Jul 2019",
    url: "https://themediaonline.co.za/2019/07/tbo-touch-launches-sa-focused-video-on-demand-offering-thd24/",
    action: "Read Article",
    image: "/speakers/Tbo Touch/tbo-touch-8.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Thabo “Tbo Touch” Molefe"
      speakerTitle=""
      speakerDesignation="Media Entrepreneur, Metro FM Presenter & Business Leader"
      speakerRole="A prominent executive and entertainer rewriting showbiz paradigms."
      speakerRef="TSF-TM-05"
      heroBackgroundImage="/speakers/Tbo Touch/tbo-touch-12.jpg"
      biographyImage="/speakers/Tbo Touch/tbo-touch-3.jpg"
      bioHook="“Building online radio networks and pioneering international entertainment partnerships.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="thabo-tbo-touch-molefe" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="thabo-tbo-touch-molefe" 
        customIntroText="Snapshots from Tbo Touch's digital media launches, radio hosting, and international partnerships."
        customGallery={[]}
        customVideos={[
          {
            id: "tbo-video-1",
            label: "Tbo Touch Presentation Reel",
            youtubeId: "Fu3Pug0r0ZU"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
