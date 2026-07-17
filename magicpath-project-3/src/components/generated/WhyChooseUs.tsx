import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
const VALUE_PROPOSITION_ITEMS = [{
  id: 'leading-bureau',
  label: "One of Africa's leading speakers bureaus"
}, {
  id: 'black-owned-bbbee',
  label: '100% black-owned and Level 1 B-BBEE'
}, {
  id: 'twenty-four-hours',
  label: 'Initial response and talent recommendations within 24 hours'
}, {
  id: 'beyond-portfolio',
  label: 'Access to talent beyond our published portfolio'
}, {
  id: 'strategic-matching',
  label: 'Strategic matching aligned with your objectives, audience and budget'
}, {
  id: 'end-to-end-management',
  label: 'End-to-end contracting, coordination and talent management'
}, {
  id: 'trusted-partner',
  label: 'One trusted partner for conferences, campaigns and corporate gatherings'
}];
export const WhyChooseUs = () => {
  return <section aria-labelledby="why-speakers-firm-heading" className="relative w-full overflow-x-hidden bg-[#212121] text-[#F8F7F5]" style={{
    fontFamily: 'Kontora, Arial, sans-serif'
  }}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.025] sm:opacity-[0.035]" style={{
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      backgroundRepeat: 'repeat',
      backgroundSize: '128px 128px'
    }} />
      <div className="relative z-10 mx-auto w-full max-w-[1440px] border-x border-white/[0.1] px-5 py-12 sm:px-6 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
        <div className="grid min-w-0 grid-cols-1 gap-10 md:gap-12 lg:grid-cols-[minmax(0,6fr)_1px_minmax(0,5fr)] lg:gap-16">
          <motion.div initial={{
          opacity: 0,
          y: 22
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          amount: 0.28
        }} transition={{
          duration: 0.62,
          ease: [0.16, 1, 0.3, 1]
        }} className="min-w-0">
            <div className="inline-flex items-center border border-l-[4px] border-[#393939] border-l-[#e30e04] bg-[#393939] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-[#F8F7F5]">
              <span>WHY CHOOSE US</span>
            </div>
            <h1 id="why-speakers-firm-heading" className="mt-6 max-w-[720px] text-[clamp(2.25rem,13vw,5.75rem)] font-bold uppercase leading-[0.94] tracking-[-0.07em] md:leading-[0.9]">
              <span>Why The Speakers Firm?</span>
            </h1>
            <div aria-hidden="true" className="mt-6 h-[3px] w-20 bg-[#e30e04] sm:w-24 md:mt-7 md:w-32" />
            <p className="mt-7 max-w-[680px] text-[18px] font-normal leading-[1.55] text-[#AFAFBA] md:mt-8 md:text-[19px] md:leading-[1.6] lg:text-[20px]">
              <span>
                Make The Speakers Firm your agency of choice and trusted talent partner for conferences, corporate events, brand campaigns, and high-impact stakeholder engagements.
              </span>
            </p>
            <p className="mt-6 max-w-[720px] text-[16px] font-normal leading-[1.75] text-[#AFB0B0] md:text-[17px] lg:text-[18px]">
              <span>
                As one of Africa&apos;s leading speakers bureaus, The Speakers Firm provides seamless access to exceptional keynote speakers, MCs, moderators, comedians, facilitators, celebrities, media personalities and influential leaders. Our offering is not limited to the talent featured in our portfolio, we source and secure the right local, continental, or global talent for every brief.
              </span>
            </p>
          </motion.div>

          <div aria-hidden="true" className="h-px w-full bg-white/[0.1] lg:hidden" />
          <div aria-hidden="true" className="hidden w-px bg-white/[0.1] lg:block" />

          <motion.div initial={{
          opacity: 0,
          y: 22
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          amount: 0.28
        }} transition={{
          duration: 0.62,
          delay: 0.1,
          ease: [0.16, 1, 0.3, 1]
        }} className="min-w-0 lg:pt-12">
            <h2 className="text-[clamp(1.5rem,6vw,2rem)] font-bold uppercase leading-none tracking-[-0.04em]">
              <span>Our Value Proposition</span>
            </h2>
            <ul className="mt-7 flex flex-col gap-5 md:mt-8 md:gap-4" aria-label="Our Value Proposition">
              {VALUE_PROPOSITION_ITEMS.map(item => <li key={item.id} className="group flex min-w-0 items-start gap-4 border-b border-white/[0.1] pb-5 last:border-b-0 last:pb-0 md:pb-4">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[#e30e04]/[0.58] text-[#e30e04] transition-colors duration-300 group-hover:bg-[#e30e04] group-hover:text-white">
                    <Check aria-hidden="true" className="h-4 w-4 stroke-[3]" />
                  </span>
                  <span className="min-w-0 text-[15.5px] font-bold uppercase leading-[1.45] tracking-[0.02em] text-[#AFAFBA] md:text-[16px]">
                    {item.label}
                  </span>
                </li>)}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>;
};