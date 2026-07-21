# The Speakers Firm Design Guidelines

## Button Standards
- Always use pill-shaped buttons (`rounded-full`) for interactive calls-to-action.
- Primary CTA structure:
  ```tsx
  <motion.a href="..." whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="..." style={{ borderColor: 'rgba(255, 255, 255, 0.18)' }}>
    <span className="flex flex-1 items-center justify-center gap-3 rounded-full bg-[#000000] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-white">
      <span>Label</span>
      <Icon size={16} />
    </span>
  </motion.a>
  ```
- Secondary CTA: Outline pill styling with backdrop blurs (`border border-white/25 hover:border-white/50 backdrop-blur-sm px-6 py-3`).

## Eyebrow Standards (SectionTags)
- Use standard, high-contrast, left-accent-bordered tags for eyebrows:
  ```tsx
  const SECTION_TAG_CLASS = 'inline-flex items-center border border-l-[4px] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] shadow-none';
  const SECTION_TAG_STYLE = {
    backgroundColor: '#000000', // or '#393939' inside light panels
    borderColor: '#000000',
    borderLeftColor: '#e30e04',
    color: '#ffffff'
  };
  ```
- Never prefix eyebrow text parameters with hyphens (`— ` or `- `).

## Layout & Color Standards
- **Vertical Guides**: Section paddings must align to the grid bounds using `px-6 md:px-16` alongside standard `<VerticalBorderLines />`.
- **Colors**: Pure `#000000` (black) and `#ffffff` (white/off-white) must form the canvas surfaces. Do not use local custom creams or charcoal derivatives (`#F8F7F5` / `#212121`).
