"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, CheckCircle2, Mic, Radio, Sparkles, Tv, Users } from "lucide-react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const SECTION_TAG_CLASS = "inline-flex items-center border border-l-[4px] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] sm:px-4 sm:text-[12px]";
const SECTION_TAG_STYLE: React.CSSProperties = {
  backgroundColor: "#000000",
  borderColor: "#000000",
  borderLeftColor: "#e30e04",
  color: "#ffffff"
};

const CREDENTIAL_BADGES = [
  {
    id: "founder-unforgettable",
    label: "Founder, Unforgettable Speakers",
    subtitle: "School of Excellence equipping leaders, professionals, and graduates with world-class speaking mastery."
  },
  {
    id: "tv-media-presenter",
    label: "Television Presenter & Host",
    subtitle: "Experienced broadcaster comfortable in unscripted live broadcasts, human-interest stories, and executive dialogues."
  },
  {
    id: "master-of-ceremonies",
    label: "Elite Master of Ceremonies",
    subtitle: "Commanding corporate conferences, awards galas, leadership summits, and ministerial forums."
  },
  {
    id: "communication-coach",
    label: "Executive Communication Coach",
    subtitle: "Transforming professionals from invisible to unignorable through practical, applied frameworks."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "from-invisible-to-unignorable",
    number: "Theme 01",
    title: "From Invisible to Unignorable: Personal Positioning & Presence",
    copy: "Challenging the myth that good work always speaks for itself, providing practical guidance on becoming known for the value you bring without becoming boastful or inauthentic."
  },
  {
    id: "qualification-cannot-speak",
    number: "Theme 02",
    title: "Your Qualification Cannot Speak for You: Bridging the Competence Gap",
    copy: "Closing the critical communication gap that exists between being competent and being recognised as competent across boardroom meetings and high-stakes executive rooms."
  },
  {
    id: "african-way-we-communicate",
    number: "Theme 03",
    title: "The African Way We Communicate: Storytelling, Ubuntu & Influence",
    copy: "Leveraging Africa's rich traditions of oral history, community dialogue, and lived experience to strengthen modern executive leadership and authentic business influence."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Palesa Dibakwane Dooms is a South African speaker, communication coach, television presenter and the Founder of Unforgettable Speakers - School of Excellence.",
  "She helps professionals, graduates, entrepreneurs and emerging leaders communicate with confidence, position themselves effectively and become more visible in the spaces where opportunities are created.",
  "Her work focuses on the conversations that can change the direction of a person’s career: introducing yourself, attending an interview, speaking in a meeting, presenting your ideas, networking with decision-makers and confidently communicating the value you bring.",
  "Having built a career across corporate South Africa, television, speaking and entrepreneurship, Palesa understands that qualifications and experience are not always enough. People must also know how to express what they know, communicate their potential and make a credible impression.",
  "Her approach is practical, relatable and rooted in the realities of the South African workplace. She speaks honestly about confidence, unemployment, career transitions, limited professional networks and the difficulty many talented people experience when trying to communicate in high-pressure environments.",
  "Whether speaking to students, graduates, professionals, entrepreneurs or corporate teams, Palesa equips audiences with tools they can apply immediately."
];

const SIGNATURE_KEYNOTES = [
  {
    title: "Speak to Get the Job",
    subtitle: "A practical and confidence-building talk for graduates, job seekers and professionals preparing for their next opportunity.",
    description: "Palesa explores how to communicate your value before, during and after the interview process. The session helps audiences understand how to introduce themselves, structure interview answers, speak about their experience and avoid underselling their potential.",
    bullets: [
      "Answering “Tell me about yourself”",
      "Communicating your experience clearly",
      "Preparing for difficult interview questions",
      "Speaking confidently when nervous",
      "Showing potential when experience is limited",
      "Asking intelligent questions during an interview",
      "Creating a memorable professional impression"
    ]
  },
  {
    title: "Your Qualification Cannot Speak for You",
    subtitle: "The communication gap between being competent and being recognised as competent.",
    description: "Many capable people have qualifications, experience and potential but struggle to articulate what they know. Palesa helps audiences understand that professional growth requires more than working hard. It also requires the ability to contribute in meetings, explain ideas, speak about achievements and communicate with decision-makers. The session is ideal for graduates, young professionals and employees preparing for promotion.",
    bullets: [
      "Articulating what you know with clarity",
      "Contributing with impact in high-stakes meetings",
      "Speaking about achievements without feeling boastful",
      "Communicating with decision-makers"
    ]
  },
  {
    title: "From Invisible to Unignorable",
    subtitle: "A talk about professional visibility, personal positioning and confidently taking up space.",
    description: "Palesa addresses the fear of speaking up, networking, sharing ideas and making oneself visible in professional environments. The session challenges the belief that good work will always speak for itself and provides practical guidance on becoming known for the value you bring without becoming boastful or inauthentic.",
    bullets: [
      "Building professional visibility",
      "Speaking about your achievements",
      "Networking with intention",
      "Contributing confidently in meetings",
      "Communicating your professional value",
      "Becoming memorable for the right reasons"
    ]
  },
  {
    title: "Speak to Get Promoted",
    subtitle: "Communicating at the level of the leadership position you want.",
    description: "This talk is designed for professionals who are ready for greater responsibility but may not yet be communicating at the level of the position they want. Palesa explores how communication affects credibility, leadership potential and career progression. The session focuses on helping professionals express ideas clearly, contribute strategically, answer questions with confidence and communicate with senior stakeholders.",
    bullets: [
      "Expressing ideas clearly and concisely",
      "Contributing strategically to leadership discussions",
      "Answering challenging questions with executive composure",
      "Communicating with senior stakeholders"
    ]
  },
  {
    title: "Confidence Is Not a Personality Type",
    subtitle: "Developing communication confidence through preparation and self-awareness.",
    description: "Confidence is often misunderstood as something a person either naturally has or does not have. In this keynote, Palesa shows audiences that communication confidence can be developed through preparation, structure, practice and self-awareness. The session is especially valuable for people who experience anxiety during interviews, presentations, meetings or professional conversations.",
    bullets: [
      "Overcoming speaking anxiety and self-doubt",
      "Structured preparation models for impromptu speaking",
      "Practicing executive composure in high-pressure rooms",
      "Building long-term self-awareness and presence"
    ]
  },
  {
    title: "How to Introduce Yourself Without Underselling Yourself",
    subtitle: "A practical session on creating a clear, credible and memorable professional introduction.",
    description: "Palesa teaches audiences how to speak about who they are, what they do, what they have achieved and where they are going. This topic is suitable for networking events, career fairs, graduate programmes, entrepreneurship events and leadership development sessions.",
    bullets: [
      "Structuring your elevator pitch with authority",
      "Articulating achievements without shrinking",
      "Connecting past experience with future direction",
      "Creating immediate rapport and professional credibility"
    ]
  },
  {
    title: "Job Searching in a Relationship-Driven Economy",
    subtitle: "Opportunities are often created through conversations, referrals and professional relationships.",
    description: "This keynote explores how job seekers and young professionals can build networks, approach people respectfully, request career conversations and remain visible within the industries they want to enter. The session encourages audiences to move beyond submitting applications and begin creating meaningful professional connections.",
    bullets: [
      "Building authentic professional networks",
      "Approaching senior leaders respectfully and effectively",
      "Requesting strategic career conversations",
      "Remaining visible within target industries"
    ]
  },
  {
    title: "The Interview Starts Before You Enter the Room",
    subtitle: "A talk on preparation, presence and professional reputation.",
    description: "Palesa explains how employers begin forming impressions through applications, emails, online profiles, telephone conversations and professional conduct before the formal interview takes place. The session covers communication across the full job-search journey.",
    bullets: [
      "Digital footprint and reputation management",
      "Pre-interview email and telephone communication etiquette",
      "First impressions and non-verbal communication",
      "Sustaining professional presence throughout the evaluation process"
    ]
  },
  {
    title: "The African Way We Communicate",
    subtitle: "Rediscovering the power of African communication.",
    description: "Africa has always been rich in communication traditions: storytelling, Ubuntu, oral history, community dialogue and learning through lived experience. This keynote explores how African philosophies can strengthen modern leadership, business communication and influence, reminding audiences that our greatest communication lessons have always existed within our own cultures.",
    bullets: [
      "The leadership power of African storytelling",
      "Ubuntu as a communication and relational framework",
      "Community dialogue and inclusive leadership",
      "Translating cultural wisdom into corporate influence"
    ]
  }
];

const ENTREPRENEURSHIP_TOPICS = [
  {
    title: "From Employee to Employer",
    description: "Palesa shares her journey from corporate employment into entrepreneurship and building a growing education and communication business. The keynote explores the emotional, financial and professional realities of starting a business, creating employment and learning to trust your own ideas. It is an honest conversation about courage, preparation, uncertainty and building while still becoming."
  },
  {
    title: "Your Voice Is Part of Your Personal Brand",
    description: "This session explores how communication shapes professional reputation. Palesa helps audiences understand how tone, language, clarity, confidence and consistency influence how others experience their personal brand."
  },
  {
    title: "Stop Waiting to Feel Ready",
    description: "A keynote for people who continuously postpone applying, speaking, starting or making themselves visible because they do not yet feel fully prepared. Palesa encourages audiences to recognise that readiness is often developed through action rather than achieved before action."
  }
];

const MODERATION_AND_MC_AREAS = [
  "Corporate conferences",
  "Awards ceremonies",
  "Career and education events",
  "Graduation ceremonies",
  "Women’s events",
  "Leadership summits",
  "Business breakfasts",
  "Gala dinners",
  "Product launches",
  "Entrepreneurship events",
  "Youth development programmes",
  "Panel discussions"
];

const SOCIAL_PROOF_LOGOS = [
  { id: "glencore", name: "GLENCORE" },
  { id: "unforgettable", name: "UNFORGETTABLE SPEAKERS" },
  { id: "sabc", name: "TELEVISION & BROADCAST" },
  { id: "up", name: "UNIVERSITY OF PRETORIA" },
  { id: "lead-sa", name: "LEADERSHIP FORUMS" }
];

const customMedia = [
  {
    id: "dooms-media-1",
    headline: "The Skill That Changes Everything: You're Not Shy - You're Just Afraid to Speak with Clarity",
    publication: "Unforgettable Speakers",
    date: "Masterclass Series",
    caption: "Palesa explores the difference between shyness and fear, providing practical frameworks to help professionals overcome self-doubt and articulate their ideas with clarity.",
    url: "https://www.youtube.com/watch?v=pBHJAMsMByw",
    action: "Watch Session",
    image: "/speakers/Palesa%20Dooms/Palesa-Dooms-The-Speakers-Firm9.jpg"
  },
  {
    id: "dooms-media-2",
    headline: "Learn how to speak eloquently with Palesa Dooms | How to get promoted at work through speaking",
    publication: "The Career Conversation",
    date: "Executive Dialogue",
    caption: "A practical guide to workplace communication, articulating achievements, and speaking at the level of the leadership position you want.",
    url: "https://www.youtube.com/watch?v=XLajsvnv8AQ",
    action: "Watch Interview",
    image: "/speakers/Palesa%20Dooms/Palesa-Dooms-The-Speakers-Firm10.jpg"
  },
  {
    id: "dooms-media-3",
    headline: "Public Speaking Isn't Hard. You're Just Missing This Simple Framework",
    publication: "Masterclass Series",
    date: "Speaking Frameworks",
    caption: "Palesa breaks down the Triple P Framework (Past, Present, Prospective) to structure impromptu speeches, interviews, and high-stakes presentations.",
    url: "https://www.youtube.com/watch?v=BA_d2z9_dlI",
    action: "Watch Masterclass",
    image: "/speakers/Palesa%20Dooms/Palesa-Dooms-The-Speakers-Firm11.jpg"
  }
];

const customVideos = [
  {
    id: "dooms-video-1",
    label: "Palesa Dooms - Award-Winning Public Speaking Coach, Speaker and Founder of Unforgettable Speakers",
    youtubeId: "UOeqwEC-nxA"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Palesa Dooms"
      speakerTitle=""
      speakerDesignation="Speaker, Moderator, Master of Ceremonies, Television Presenter and Communications Coach."
      speakerRole="Founder of Unforgettable Speakers - School of Excellence, helping professionals communicate with confidence and become unignorable."
      speakerRef="TSF-PD-27"
      heroBackgroundImage="/speakers/Palesa%20Dooms/Palesa-Dooms-The-Speakers-Firm7.jpg"
      heroMobileBackgroundImage="/speakers/Palesa%20Dooms/Palesa-Dooms-The-Speakers-Firm-mobile.jpg"
      heroImagePosition="object-top"
      biographyImage="/speakers/Palesa%20Dooms/Palesa-Dooms-The-Speakers-Firm8.jpg"
      bioHook="“Being capable is important. Being able to communicate your capability is what helps other people recognise it.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="palesa-dooms" customMedia={customMedia} />
      }
    >
      {/* Signature Speaking Topics (Pages 3 to 9 word-for-word) */}
      <section className="relative bg-[#000000] px-4 py-12 text-white sm:px-6 md:px-16 md:py-20 border-t border-white/10" aria-labelledby="signature-topics-heading">
        <div className="mx-auto max-w-[1312px]">
          <div className="mb-12 max-w-3xl">
            <p className={`${SECTION_TAG_CLASS} mb-4 w-fit`} style={SECTION_TAG_STYLE}>
              <span>Keynote Interventions</span>
            </p>
            <h2 id="signature-topics-heading" className="font-['Kontora',sans-serif] text-[clamp(1.75rem,5vw,3.25rem)] font-bold uppercase leading-[0.95] tracking-[-0.05em]">
              <span className="block text-[#FFFFFF]">Signature Speaking</span>
              <span className="block text-[#e30e04]">Topics</span>
            </h2>
            <p className="mt-4 text-sm text-[#9A9A9A] sm:text-base leading-relaxed">
              Practical, relatable, and confidence-building keynotes designed to help professionals, graduates, and corporate teams articulate their value with authority.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SIGNATURE_KEYNOTES.map((topic, idx) => (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="flex flex-col justify-between rounded-[24px] border border-white/10 bg-[#0A0A0A] p-6 sm:p-8 transition-colors hover:border-[#e30e04]/60"
              >
                <div>
                  <div className="flex items-center gap-3 text-[#e30e04] mb-3">
                    <Sparkles className="h-5 w-5" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A]">Topic 0{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-white sm:text-xl leading-tight mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#e30e04] mb-3 leading-snug">
                    {topic.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#9A9A9A] leading-relaxed mb-4">
                    {topic.description}
                  </p>
                  {topic.bullets && topic.bullets.length > 0 && (
                    <div className="border-t border-white/10 pt-4 space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 block mb-2">Key Themes:</span>
                      {topic.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-[#9A9A9A]">
                          <span className="text-[#e30e04] mt-0.5">•</span>
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Entrepreneurship & Personal Growth (Page 10 word-for-word) */}
      <section className="relative bg-[#000000] px-4 py-12 text-white sm:px-6 md:px-16 md:py-20 border-t border-white/10" aria-labelledby="growth-topics-heading">
        <div className="mx-auto max-w-[1312px]">
          <div className="mb-12 max-w-3xl">
            <p className={`${SECTION_TAG_CLASS} mb-4 w-fit`} style={SECTION_TAG_STYLE}>
              <span>Personal Growth</span>
            </p>
            <h2 id="growth-topics-heading" className="font-['Kontora',sans-serif] text-[clamp(1.75rem,5vw,3.25rem)] font-bold uppercase leading-[0.95] tracking-[-0.05em]">
              <span className="block text-[#FFFFFF]">Entrepreneurship &amp; Personal</span>
              <span className="block text-[#e30e04]">Growth Topics</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {ENTREPRENEURSHIP_TOPICS.map((item, idx) => (
              <div 
                key={idx}
                className="flex flex-col justify-between rounded-[24px] border border-white/10 bg-[#0A0A0A] p-6 sm:p-8 transition-colors hover:border-[#e30e04]/60"
              >
                <div>
                  <div className="flex items-center gap-2 text-[#e30e04] mb-4">
                    <Award className="h-5 w-5" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A]">Perspective 0{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-white mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9A9A9A] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Master of Ceremonies & Moderator Capabilities */}
      <section className="relative bg-[#000000] px-4 py-12 text-white sm:px-6 md:px-16 md:py-20 border-t border-white/10" aria-labelledby="mc-heading">
        <div className="mx-auto max-w-[1312px]">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-6">
              <p className={`${SECTION_TAG_CLASS} w-fit`} style={SECTION_TAG_STYLE}>
                <span>Stage Authority</span>
              </p>
              <h2 id="mc-heading" className="font-['Kontora',sans-serif] text-[clamp(1.75rem,5vw,3.25rem)] font-bold uppercase leading-[0.95] tracking-[-0.05em]">
                <span className="block text-[#FFFFFF]">Master of Ceremonies</span>
                <span className="block text-[#e30e04]">&amp; Moderator</span>
              </h2>
              <p className="text-sm text-[#9A9A9A] sm:text-base leading-relaxed">
                As a Master of Ceremonies, Palesa brings structure, professionalism, warmth and energy to an event. She understands that an MC is not only responsible for introducing speakers. The MC must protect the programme, manage the room, maintain momentum and help create a memorable experience.
              </p>
              <p className="text-sm text-[#9A9A9A] sm:text-base leading-relaxed">
                Her style is polished but approachable, making her well suited to both formal corporate environments and energetic audience-centred events.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-[24px] border border-white/10 bg-[#0A0A0A] p-6 sm:p-8">
                <div className="flex items-center gap-3 text-[#e30e04] mb-4">
                  <Mic className="h-6 w-6" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">Palesa is available to host &amp; moderate:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {MODERATION_AND_MC_AREAS.map((area, aIdx) => (
                    <div key={aIdx} className="flex items-center gap-2.5 text-xs text-[#9A9A9A]">
                      <CheckCircle2 className="h-4 w-4 text-[#e30e04] shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Reel */}
      <ProfileAdditionalSections 
        speakerId="palesa-dooms" 
        customGallery={[]} 
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
