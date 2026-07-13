import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}
interface RepeatedGalleryImage extends GalleryImage {
  repeatId: string;
}
const SECTION_HEADING_CLASS = "text-[clamp(2.15rem,12vw,5rem)] font-bold leading-[0.9] tracking-[-0.05em]";
const SPEAKER_GALLERY_IMAGES: GalleryImage[] = [{
  id: "speaker-podium-dramatic-stage",
  src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500&q=80",
  alt: "Senior keynote speaker presenting on a dramatically lit stage"
}, {
  id: "executive-panel-room",
  src: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=500&q=80",
  alt: "Executive panel discussion with business leaders in a conference room"
}, {
  id: "large-conference-audience",
  src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=80",
  alt: "Large conference audience gathered for a leadership keynote"
}, {
  id: "conference-stage-keynote",
  src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500&q=80",
  alt: "Professional conference stage prepared for a keynote speaker"
}, {
  id: "leadership-workshop-collaboration",
  src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&q=80",
  alt: "Corporate workshop participants collaborating during a leadership session"
}, {
  id: "auditorium-business-conference",
  src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=500&q=80",
  alt: "Speaker addressing an auditorium during a business conference"
}, {
  id: "modern-classroom-training",
  src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&q=80",
  alt: "Leadership training session with attendees in a modern classroom"
}, {
  id: "conference-keynote-hall",
  src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&q=80",
  alt: "Conference keynote hall with an audience facing a stage"
}];
const REPEATED_GALLERY_IMAGES: RepeatedGalleryImage[] = [...SPEAKER_GALLERY_IMAGES.map(image => ({
  id: image.id,
  src: image.src,
  alt: image.alt,
  repeatId: `${image.id}-first`
})), ...SPEAKER_GALLERY_IMAGES.map(image => ({
  id: image.id,
  src: image.src,
  alt: image.alt,
  repeatId: `${image.id}-second`
}))];
export const CallToActionSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };
  return <section className="relative flex min-h-[620px] w-full items-center justify-center overflow-hidden bg-[#F2F2F2] p-4 sm:p-6 md:p-12" aria-labelledby="premium-cta-heading">
      <div className="relative grid w-full max-w-7xl grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
        <div className="pointer-events-none absolute inset-y-0 -left-10 -right-10 hidden items-start justify-between xl:flex" aria-hidden="true">
          <div className="relative h-full w-[1px] bg-[#C7C7C8]">
            <div className="absolute top-0 -left-[3px] h-[7px] w-[7px] rounded-sm bg-[#212121]" />
          </div>
          <div className="relative h-full w-[1px] bg-[#C7C7C8]">
            <div className="absolute top-0 -left-[3px] h-[7px] w-[7px] rounded-sm bg-[#212121]" />
          </div>
        </div>

        <article className="group relative h-[340px] overflow-hidden rounded-[24px] bg-[#212121] shadow-2xl sm:h-[400px] md:rounded-[32px] lg:h-[450px]" aria-label="Scrolling speaker and conference photo gallery">
          <motion.div animate={{
          x: [0, "-50%"]
        }} transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear"
        }} className="flex h-full w-max flex-row items-center gap-3 py-6 sm:gap-4 sm:py-8">
            {REPEATED_GALLERY_IMAGES.map(image => <img key={image.repeatId} src={image.src} alt={image.alt} className="h-[280px] w-[178px] max-w-full flex-shrink-0 rounded-2xl object-cover shadow-lg sm:h-[340px] sm:w-[214px] lg:h-[380px] lg:w-[240px]" loading="lazy" />)}
          </motion.div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#212121] to-transparent" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#212121] to-transparent" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#212121] to-transparent" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#212121] to-transparent" aria-hidden="true" />
        </article>

        <article className="flex min-h-[390px] flex-col items-start justify-center rounded-[24px] border border-white/20 bg-white p-6 shadow-xl sm:min-h-[430px] sm:p-8 md:rounded-[32px] md:p-12 lg:h-[450px]" aria-label="Book an engagement call">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="max-w-lg space-y-8">
            <div className="space-y-4">
              <h2 id="premium-cta-heading" className={SECTION_HEADING_CLASS}>
                <span className="text-[#AFB0B0]">Book Your </span>
                <span className="text-[#e30e04]">Engagement Call</span>
              </h2>

              <p className="max-w-[95%] text-base leading-relaxed text-gray-500 sm:text-lg md:text-xl">
                <span>Ready to bring world-class leadership thinking to your next event? Schedule a 30-min call to discuss format, audience, and fit.</span>
              </p>
            </div>

            <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:gap-4">
              <motion.button whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} className="flex h-[52px] w-full items-center justify-between gap-4 rounded-full bg-[#e30e04] px-6 text-[11px] font-bold uppercase tracking-[0.1em] text-white transition-opacity duration-300 hover:opacity-90 sm:h-[56px] sm:px-8 sm:text-[12px] md:w-auto" type="button" aria-label="Send an enquiry" onClick={() => scrollToSection("enquiry-form")}>
                <span>Send an Enquiry</span>
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </motion.button>
              <button className="flex h-[52px] w-full items-center justify-center gap-3 rounded-full border border-[#212121] bg-transparent px-6 text-[11px] font-bold uppercase tracking-[0.1em] text-[#212121] transition-colors duration-200 hover:bg-[#212121] hover:text-white sm:h-[56px] sm:px-8 sm:text-[12px] md:w-auto" type="button" aria-label="Book a call" onClick={() => scrollToSection("booking-calendar")}>
                <span>Book a Call</span>
                <Phone className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        </article>
      </div>

      <div className="absolute bottom-0 left-0 right-0 hidden h-[1px] bg-[#C7C7C8] xl:block" aria-hidden="true" />
    </section>;
};