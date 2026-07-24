## Floating animated WhatsApp button

Replace the current text-pill WhatsApp FAB with the uploaded green WhatsApp glyph, and give it attention-grabbing motion.

### Changes
1. **Register the uploaded logo as a Lovable asset**
   - `lovable-assets create --file /mnt/user-uploads/208297-removebg-preview.png --filename whatsapp.png > src/assets/whatsapp.png.asset.json`

2. **Rebuild `src/components/site/WhatsAppFab.tsx`**
   - Circular floating button (56px desktop, 52px mobile), bottom-right, same safe-area offsets so it clears the mobile hero.
   - Use the imported WhatsApp PNG as the icon (drop `MessageCircle` and the "WhatsApp" text label).
   - Attention animations, layered:
     - Continuous soft **breathing pulse** on the button (scale 1 to 1.06, ~2s loop).
     - Two **expanding ping rings** in WhatsApp green behind the button (staggered, infinite) - the classic "call me" radar effect.
     - Subtle **wiggle** every ~5s (rotate -8/+8 for 0.6s) to catch the eye without being annoying.
     - Hover: rings pause, button lifts (scale 1.08) and shows a small "Chat with us" tooltip pill to the left.
   - Respect `prefers-reduced-motion` - disables ping + wiggle, keeps a static button.
   - Keep `aria-label="Chat on WhatsApp"` and the `wa.me/${SITE.whatsapp}` link.

3. **Add keyframes in `src/index.css`**
   - `@keyframes wa-ping` (scale 1 to 2.2, opacity 0.6 to 0)
   - `@keyframes wa-wiggle` (5s cycle, active window ~0.6s)
   - `@keyframes wa-breathe` (2s ease-in-out)

No other pages, copy, or layout affected.
