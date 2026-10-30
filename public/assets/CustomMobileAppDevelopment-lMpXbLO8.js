import{a as e}from"./rolldown-runtime-CNC7AqOf.js";import{d as t,u as n}from"./motion-Cw6iLlDO.js";import{n as r}from"./vendor-DLzSi8Bf.js";import{S as i}from"./app-digi.js";import{t as a}from"./Seo-B4SgXAPu.js";import{t as o}from"./FoldFX-BQ1mS7Ah.js";var s=e(t(),1),c=`/* DigiWorks.ai High-Tech Black & Neon Red AI Theme System - Animated Edition with Logo & Testimonial Sliders */

.cad-lp {
  --bg-main: #040407;
  --bg-alt: #090a0f;
  --bg-card: #0d0e16;
  --bg-card-hover: #141520;
  --bg-glass: rgba(13, 14, 22, 0.85);

  --ink: #f8fafc;
  --muted: #94a3b8;
  --muted-dark: #64748b;
  --line: rgba(255, 255, 255, 0.08);
  --line-bright: rgba(43,140,255, 0.4);

  --red: #2b8cff;
  --red-glow: #e11d48;
  --red-dark: #b91c1c;
  --red-light: #52a1ff;
  --red-soft: rgba(43,140,255, 0.14);
  --amber-glow: #f97316;

  --radius-lg: 20px;
  --radius-md: 12px;
  --radius-sm: 8px;
  --container: 1200px;
  --font-heading: 'Manrope', -apple-system, sans-serif;
  --font-body: 'Inter', -apple-system, sans-serif;
}

.cad-lp,
.cad-lp * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* The standalone page set these on <body>; they live on the page root here so
   the custom properties above actually resolve, and so the site's global body
   type (Sora) does not win by specificity over an inherited value. */
.cad-lp {
  color: var(--ink);
  font-family: var(--font-body);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

/* Neutralise the global "Crimson Graphite" body background + film-grain
   overlay on this route only, matching the Friday.jsx pattern. */
body.cad-active {
  background-color: #040407;
  background-image: none;
  background-attachment: scroll;
  overflow-x: hidden;
}
body.cad-active::after { display: none; }

.cad-lp a {
  text-decoration: none;
  color: inherit;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cad-lp button,
.cad-lp input,
.cad-lp select {
  font: inherit;
}

.cad-lp .container {
  width: min(calc(100% - 40px), var(--container));
  margin: auto;
}

.cad-lp h1,
.cad-lp h2,
.cad-lp h3 {
  font-family: var(--font-heading);
  letter-spacing: -0.04em;
  line-height: 1.1;
  color: #ffffff;
}

.cad-lp p {
  color: var(--muted);
}

/* ----------------------------------------------------
   KEYFRAME ANIMATIONS
---------------------------------------------------- */
@keyframes floatOrb {

  0%,
  100% {
    transform: translate(-50%, 0) scale(1);
    opacity: 0.35;
  }

  50% {
    transform: translate(-50%, -20px) scale(1.08);
    opacity: 0.50;
  }
}

@keyframes pulseGlow {

  0%,
  100% {
    box-shadow: 0 0 20px rgba(43,140,255, 0.4), 0 0 40px rgba(43,140,255, 0.1);
  }

  50% {
    box-shadow: 0 0 35px rgba(43,140,255, 0.7), 0 0 60px rgba(43,140,255, 0.3);
  }
}

@keyframes floatPhone {

  0%,
  100% {
    transform: translateY(50px) rotate(-3deg);
  }

  50% {
    transform: translateY(35px) rotate(-2deg);
  }
}

@keyframes floatBadge {

  0%,
  100% {
    transform: rotate(4deg) translateY(0);
  }

  50% {
    transform: rotate(2deg) translateY(-10px);
  }
}

@keyframes radarPulse {
  0% {
    box-shadow: 0 0 0 0 rgba(43,140,255, 0.6);
  }

  70% {
    box-shadow: 0 0 0 14px rgba(43,140,255, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(43,140,255, 0);
  }
}

@keyframes barGrow {

  0%,
  100% {
    transform: scaleY(1);
  }

  50% {
    transform: scaleY(1.15);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(25px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes logoScroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

/* ----------------------------------------------------
   HEADER & NAVIGATION
---------------------------------------------------- */
.cad-lp .header {
  height: 80px;
  background: rgba(4, 4, 7, 0.88);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--line);
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
}

.cad-lp .nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
}

.cad-lp .logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-heading);
  font-weight: 800;
}

.cad-lp .logo-mark {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--red) 0%, var(--red-dark) 100%);
  color: #fff;
  font-size: 18px;
  animation: pulseGlow 4s infinite ease-in-out;
}

.cad-lp .logo-word {
  font-size: 23px;
  letter-spacing: -0.05em;
  color: #fff;
}

.cad-lp .logo-word span {
  color: var(--red-light);
}

.cad-lp .nav-right {
  display: flex;
  align-items: center;
  gap: 24px;
}

.cad-lp .contact-mini {
  display: flex;
  align-items: center;
  gap: 20px;
}

.cad-lp .contact-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.cad-lp .contact-pill:hover {
  transform: translateY(-1px);
}

.cad-lp .contact-pill-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.cad-lp .pill-label {
  font-size: 10px;
  color: var(--muted-dark);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1.2;
  font-weight: 600;
  margin-bottom: 2px;
}

.cad-lp .pill-label.whatsapp-label {
  color: #25d366;
  opacity: 0.95;
}

.cad-lp .pill-val {
  font-size: 13.5px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
  transition: color 0.2s ease;
}

.cad-lp .whatsapp-pill:hover .pill-val {
  color: #25d366;
}

.cad-lp .phone-pill:hover .pill-val {
  color: var(--red-light);
}

.cad-lp .contact-pill + .contact-pill {
  border-left: 1px solid var(--line);
  padding-left: 20px;
}

/* ----------------------------------------------------
   ANIMATED BORDER BEAM / GLOW (digiworksai.com STYLE)
---------------------------------------------------- */
@keyframes borderBeamRotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.cad-lp .header-cta {
  position: relative;
  z-index: 1;
  overflow: hidden;
  border: 1px solid transparent !important;
  isolation: isolate;
}

/* Rotating light beam around the border (Header button only) */
.cad-lp .header-cta::before {
  content: "";
  position: absolute;
  top: -150%;
  left: -150%;
  width: 400%;
  height: 400%;
  background: conic-gradient(from 0deg,
      transparent 0deg,
      transparent 260deg,
      #4c9eff 300deg,
      #2b8cff 335deg,
      #ffffff 360deg);
  animation: borderBeamRotate 3.5s linear infinite;
  z-index: -2;
  pointer-events: none;
}

/* Inner content background mask */
.cad-lp .header-cta::after {
  content: "";
  position: absolute;
  inset: 1.5px;
  border-radius: inherit;
  z-index: -1;
  pointer-events: none;
}

.cad-lp .contact-mini a {
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  transition: color 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.cad-lp .contact-mini a:hover {
  color: var(--red-light);
}

.cad-lp .header-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: #fff;
  border-radius: 10px;
  padding: 12px 24px;
  font-size: 13px;
  font-weight: 800;
  white-space: nowrap !important;
  line-height: 1.2;
  box-shadow: 0 4px 22px rgba(43,140,255, 0.45);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cad-lp .header-cta::after {
  background: linear-gradient(135deg, var(--red) 0%, #dc2626 100%);
  transition: filter 0.3s ease;
}

.cad-lp .header-cta:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 30px rgba(43,140,255, 0.85);
}

.cad-lp .header-cta:hover::after {
  filter: brightness(0.82);
}

/* ----------------------------------------------------
   HERO SECTION (ANIMATED RED ORB)
---------------------------------------------------- */
.cad-lp .hero {
  position: relative;
  background: var(--bg-main);
  padding: 44px 0 40px;
  overflow: hidden;
}

/* Animated central glowing red energy halo */
.cad-lp .hero::before {
  content: "";
  position: absolute;
  top: -10%;
  left: 50%;
  width: 750px;
  height: 500px;
  background: radial-gradient(circle, rgba(43,140,255, 0.35) 0%, rgba(225, 29, 72, 0.16) 45%, transparent 75%);
  filter: blur(80px);
  pointer-events: none;
  z-index: 1;
  animation: floatOrb 6s ease-in-out infinite;
}

.cad-lp .hero::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  height: 50%;
  background: radial-gradient(circle, rgba(249, 115, 22, 0.12) 0%, transparent 70%);
  filter: blur(90px);
  pointer-events: none;
}

.cad-lp .hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 60px;
  align-items: start;
  position: relative;
  z-index: 2;
  animation: fadeInUp 0.8s ease-out forwards;
}

.cad-lp .hero-copy {
  padding: 2px 0 0;
}

.cad-lp .badge,
.cad-lp .section-kicker {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--red-light);
  background: var(--red-soft);
  border: 1px solid var(--line-bright);
  padding: 6px 16px;
  border-radius: 99px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  box-shadow: 0 0 15px rgba(43,140,255, 0.2);
  transition: all 0.3s ease;
  margin-bottom: 20px;
}

.cad-lp .badge:hover,
.cad-lp .section-kicker:hover {
  box-shadow: 0 0 25px rgba(43,140,255, 0.45);
  transform: translateY(-2px);
}

.cad-lp .hero h1 {
  font-size: clamp(32px, 3.3vw, 46px);
  max-width: 600px;
  margin-top: 0;
  font-weight: 800;
  line-height: 1.1;
}

.cad-lp .hero h1 span,
.cad-lp .section-title-row h2 span,
.cad-lp .center-heading h2 span,
.cad-lp .accent-text {
  background: linear-gradient(135deg, #ffffff 0%, #80baff 35%, #4b9dff 68%, #3692ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cad-lp .hero-lead {
  font-size: 15px;
  line-height: 1.6;
  color: var(--muted);
  max-width: 590px;
  margin-top: 20px;
}

.cad-lp .hero-points {
  list-style: none;
  display: grid;
  gap: 14px;
  margin-top: 30px;
}

.cad-lp .hero-points li {
  font-size: 15px;
  font-weight: 500;
  color: #e2e8f0;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
}

.cad-lp .hero-points li:hover {
  transform: translateX(6px);
}

.cad-lp .hero-points li span {
  display: inline-grid;
  place-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(43,140,255, 0.2);
  border: 1px solid var(--red-light);
  color: var(--red-light);
  font-size: 12px;
  margin-right: 12px;
  flex-shrink: 0;
  box-shadow: 0 0 10px rgba(43,140,255, 0.3);
}

.cad-lp .hero-proof {
  display: flex;
  align-items: center;
  gap: 28px;
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid var(--line);
}

.cad-lp .proof-rating strong {
  display: block;
  color: var(--red-light);
  letter-spacing: 3px;
  font-size: 16px;
  text-shadow: 0 0 10px rgba(43,140,255, 0.5);
}

.cad-lp .proof-rating span,
.cad-lp .proof-stat span {
  display: block;
  font-size: 12px;
  color: var(--muted-dark);
  margin-top: 4px;
}

.cad-lp .proof-stat strong {
  font: 800 28px/1 var(--font-heading);
  color: #ffffff;
}

.cad-lp .proof-line {
  height: 44px;
  width: 1px;
  background: var(--line);
}

/* ----------------------------------------------------
   HERO — "idea in, live app out" rebuild
   Denser than the old badge/bullets/proof block, so the
   whole column is tuned to stay inside the first fold
   alongside the quote form to its right.
   ---------------------------------------------------- */
.cad-lp .hero-copy .hero-lead strong {
  color: #ffffff;
  font-weight: 700;
}

/* Input pills: the things a client can bring us, ending in the one thing they
   leave with. Each dot colour is set inline-free via data-dot. */
.cad-lp .hero-inputs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-top: 22px;
}

.cad-lp .hero-input-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 12px;
  border-radius: 99px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.03);
  font-size: 12.5px;
  font-weight: 600;
  color: #e2e8f0;
  white-space: nowrap;
}

.cad-lp .hero-input-pill::before {
  content: "";
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
  background: currentColor;
  box-shadow: 0 0 8px currentColor;
}

.cad-lp .hero-input-pill[data-dot="amber"]::before { color: #f59e0b; }
.cad-lp .hero-input-pill[data-dot="violet"]::before { color: #a855f7; }
.cad-lp .hero-input-pill[data-dot="pink"]::before { color: #ec4899; }
.cad-lp .hero-input-pill[data-dot="blue"]::before { color: #3b82f6; }
.cad-lp .hero-input-pill[data-dot="green"]::before { color: #22c55e; }

.cad-lp .hero-input-pill.is-output {
  border-color: rgba(34, 197, 94, 0.5);
  background: rgba(34, 197, 94, 0.1);
  color: #ffffff;
  font-weight: 700;
}

.cad-lp .hero-input-out {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.cad-lp .hero-input-arrow {
  color: var(--muted);
  font-size: 16px;
  padding: 0 2px;
}

/* 2×2 promise grid. */
.cad-lp .hero-feature-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 22px;
}

.cad-lp .hero-feature {
  display: flex;
  align-items: flex-start;
  gap: 11px;
  padding: 13px 15px;
  border-radius: var(--radius-md);
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
  transition: border-color 0.3s ease, transform 0.3s ease;
}

.cad-lp .hero-feature:hover {
  border-color: var(--line-bright);
  transform: translateY(-2px);
}

.cad-lp .hero-feature .hf-check {
  display: inline-grid;
  place-items: center;
  width: 20px;
  height: 20px;
  border-radius: 6px;
  flex-shrink: 0;
  margin-top: 1px;
  background: rgba(43,140,255, 0.16);
  border: 1px solid var(--red-light);
  color: var(--red-light);
  font-size: 11px;
  font-weight: 800;
}

.cad-lp .hero-feature p {
  font-size: 13.5px;
  line-height: 1.4;
  font-weight: 500;
  color: #e2e8f0;
}

/* Day-by-day timeline. */
.cad-lp .hero-timeline {
  margin-top: 22px;
  padding-top: 20px;
  border-top: 1px solid var(--line);
}

/* On viewports tall enough to show the whole hero at once, match the left
   column to the form's height and let the timeline settle at the bottom, so its
   baseline lines up with the form's footer instead of floating with a gap
   beneath it. The slack lands above the timeline as intentional section space. */
@media (min-width: 981px) and (min-height: 740px) {
  .cad-lp .hero-grid {
    align-items: stretch;
  }

  .cad-lp .hero-copy {
    display: flex;
    flex-direction: column;
    /* Lift the whole column off the form's baseline a touch, so the timeline
       doesn't sit flush against the bottom edge. */
    padding-bottom: 30px;
  }

  /* Spread the spare vertical room evenly across the lower three sections
     instead of pooling it all above the timeline. Three equal auto margins
     each claim a third of the free space, so subhead→pills→cards→timeline get
     matching, generous gaps and the block reads as four distinct bands. */
  .cad-lp .hero-inputs,
  .cad-lp .hero-feature-grid,
  .cad-lp .hero-timeline {
    margin-top: auto;
  }
}

.cad-lp .hero-timeline-head {
  display: flex;
  justify-content: space-between;
  font-size: 10.5px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-dark);
  margin-bottom: 14px;
}

.cad-lp .hero-timeline-track {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  position: relative;
}

/* The connector line runs behind the dots, aligned to their centre. */
.cad-lp .hero-timeline-track::before {
  content: "";
  position: absolute;
  top: 5px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--red-dark), var(--red));
  opacity: 0.6;
}

.cad-lp .htl-step {
  display: flex;
  flex-direction: column;
  gap: 7px;
  position: relative;
  padding-right: 10px;
}

.cad-lp .htl-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--bg-main);
  border: 2px solid var(--red);
  position: relative;
  z-index: 1;
}

.cad-lp .htl-step.is-final .htl-dot {
  background: var(--red);
  box-shadow: 0 0 12px rgba(43,140,255, 0.8);
}

.cad-lp .htl-day {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--red-light);
}

.cad-lp .htl-label {
  font-size: 12.5px;
  font-weight: 600;
  line-height: 1.3;
  color: #e2e8f0;
}

/* ----------------------------------------------------
   QUOTE FORM CARD (FLOATING & GLOWING ACCENTS)
---------------------------------------------------- */
.cad-lp .quote-card {
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--line-bright);
  border-radius: var(--radius-lg);
  padding: 34px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(43,140,255, 0.2);
  position: relative;
  z-index: 3;
  transition: all 0.4s ease;
}

.cad-lp .quote-card:hover {
  border-color: rgba(43,140,255, 0.6);
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.9), 0 0 50px rgba(43,140,255, 0.35);
}

.cad-lp .quote-head span {
  font-size: 11px;
  color: var(--red-light);
  font-weight: 800;
  letter-spacing: 0.14em;
}

.cad-lp .quote-head h2 {
  font-size: 28px;
  margin-top: 6px;
}

.cad-lp .quote-head p {
  font-size: 13px;
  line-height: 1.6;
  margin: 8px 0 24px;
  color: var(--muted);
}

.cad-lp .field {
  margin-bottom: 16px;
}

.cad-lp .field label {
  display: block;
  font-size: 11px;
  color: #cbd5e1;
  font-weight: 700;
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.cad-lp .field input,
.cad-lp .field select {
  width: 100%;
  height: 48px;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  padding: 0 16px;
  outline: none;
  background: #08090e;
  color: #ffffff;
  font-size: 14px;
  transition: all 0.3s ease;
}

.cad-lp .field input:focus,
.cad-lp .field select:focus {
  border-color: var(--red-light);
  box-shadow: 0 0 0 3px rgba(43,140,255, 0.3), 0 0 15px rgba(43,140,255, 0.2);
  background: #0e0f17;
}

.cad-lp .quote-btn {
  width: 100%;
  height: 52px;
  border: 0;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--red) 0%, #dc2626 100%);
  color: #fff;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  margin-top: 10px;
  box-shadow: 0 8px 25px rgba(43,140,255, 0.5);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.cad-lp .quote-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 38px rgba(43,140,255, 0.8);
  filter: brightness(0.82);
}

.cad-lp .quote-btn span {
  display: inline-block;
  margin-left: 8px;
  transition: transform 0.3s ease;
}

.cad-lp .quote-btn:hover span {
  transform: translateX(4px);
}

.cad-lp .form-trust {
  text-align: center;
  color: var(--muted-dark);
  font-size: 11px;
  margin-top: 12px;
}

/* ----------------------------------------------------
   LOGO STRIP SLIDER (INFINITE MARQUEE)
---------------------------------------------------- */
.cad-lp .logo-strip-wrap {
  padding: 100px 0 60px;
  overflow: hidden;
}

.cad-lp .press-strip-title {
  font-family: var(--font-heading);
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 800;
  text-align: center;
  color: #ffffff;
  margin-bottom: 30px;
  letter-spacing: -0.5px;
}

.cad-lp .logo-slider {
  margin-top: 24px;
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
}

.cad-lp .logo-slide-track {
  display: flex;
  gap: 20px;
  width: max-content;
  animation: logoScroll 28s linear infinite;
}

.cad-lp .logo-slider:hover .logo-slide-track {
  animation-play-state: paused;
}

.cad-lp .logo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  height: 68px;
  min-width: 190px;
  border-radius: 18px;
  background: #0d0e16;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
}

.cad-lp .logo-item:hover {
  border-color: rgba(43,140,255, 0.4);
  background: #131420;
  box-shadow: 0 16px 40px rgba(43,140,255, 0.2), 0 8px 25px rgba(0, 0, 0, 0.6);
}

.cad-lp .logo-item img {
  height: 38px;
  width: auto;
  object-fit: contain;
}

/* ----------------------------------------------------
   PORTFOLIO SECTION & ANIMATED VISUALS
---------------------------------------------------- */
.cad-lp .section {
  padding: 100px 0;
  position: relative;
}

.cad-lp .section-title-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 50px;
  margin-top: 16px;
  margin-bottom: 44px;
}

.cad-lp .section-title-row>div {
  max-width: 760px;
}

.cad-lp .section-title-row h2,
.cad-lp .center-heading h2 {
  font-size: clamp(36px, 3.8vw, 54px);
  font-weight: 800;
}

.cad-lp .section-title-row p,
.cad-lp .center-heading p {
  margin-top: 14px;
  font-size: 16px;
}

.cad-lp .outline-link {
  border: 1px solid var(--line-bright);
  background: var(--red-soft);
  color: var(--red-light);
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
  transition: all 0.3s ease;
}

.cad-lp .outline-link:hover {
  background: var(--red);
  color: #fff;
  box-shadow: 0 0 25px rgba(43,140,255, 0.6);
  transform: translateY(-2px);
  filter: brightness(0.85);
}

/* ----------------------------------------------------
   PORTFOLIO 2-ROW INFINITE SHOWCASE SLIDER (REFERENCE IMAGE STYLE)
---------------------------------------------------- */
.cad-lp .portfolio-showcase-container {
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
}

.cad-lp .showcase-row {
  display: flex;
  width: 100%;
  overflow: hidden;
}

.cad-lp .showcase-track-left {
  display: flex;
  gap: 24px;
  width: max-content;
  animation: scrollLeft 45s linear infinite;
  will-change: transform;
}

.cad-lp .showcase-track-right {
  display: flex;
  gap: 24px;
  width: max-content;
  animation: scrollRight 50s linear infinite;
  will-change: transform;
}

.cad-lp .showcase-row:hover .showcase-track-left,
.cad-lp .showcase-row:hover .showcase-track-right {
  animation-play-state: paused;
}

@keyframes scrollLeft {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

@keyframes scrollRight {
  0% {
    transform: translateX(-50%);
  }

  100% {
    transform: translateX(0);
  }
}

/* Keep the portfolio / logo / review marquees auto-scrolling even when the
   OS has prefers-reduced-motion enabled — the sliding carousels are core UX
   for this landing page, not decorative motion. The global rule in index.css
   would otherwise clamp animation-duration to 0.01ms and freeze them. */
@media (prefers-reduced-motion: reduce) {
  .cad-lp .showcase-track-left,
  .cad-lp .showcase-track-right,
  .cad-lp .logo-slide-track,
  .cad-lp .marquee-track-left,
  .cad-lp .marquee-track-right {
    animation-duration: var(--cad-marquee-duration, 45s) !important;
    animation-iteration-count: infinite !important;
  }

  .cad-lp .showcase-track-right {
    animation-duration: 50s !important;
  }

  .cad-lp .marquee-track-left,
  .cad-lp .marquee-track-right {
    animation-duration: 42s !important;
  }

  .cad-lp .logo-slide-track {
    animation-duration: 28s !important;
  }

  /* Rotating orange border beam on the header "Get a Free Quote" button —
     core brand element, keep it circling under reduced-motion too. */
  .cad-lp .header-cta::before {
    animation-duration: 3.5s !important;
    animation-iteration-count: infinite !important;
  }

  /* Restore smooth hover transitions for interactive elements. The global
     rule in index.css clamps transition-duration to 0.01ms under
     prefers-reduced-motion, which makes every hover movement snap instantly.
     These are functional UI affordances (lift, scale, shift), not decorative
     motion, so we re-enable reasonable durations. */
  .cad-lp *,
  .cad-lp *::before,
  .cad-lp *::after {
    transition-duration: 0.3s !important;
  }

  /* Elements with intentionally longer transitions keep their durations. */
  .cad-lp .showcase-card,
  .cad-lp .showcase-card-bg,
  .cad-lp .consult-box,
  .cad-lp .process-card,
  .cad-lp .process-image,
  .cad-lp .review-card,
  .cad-lp .office-card,
  .cad-lp .office-thumb,
  .cad-lp .quote-modal-left .quote-modal-bg-img,
  .cad-lp .glass-radar-ring,
  .cad-lp .screen-back,
  .cad-lp .screen-front,
  .cad-lp .terminal-glass-window,
  .cad-lp .code-matrix-badge,
  .cad-lp .launch-rocket-badge,
  .cad-lp .launch-sparkle {
    transition-duration: 0.4s !important;
  }

  .cad-lp .showcase-card-bg,
  .cad-lp .quote-modal-left .quote-modal-bg-img {
    transition-duration: 0.6s !important;
  }
}

/* Individual Showcase Card Styling (Matching Reference Image) */
.cad-lp .showcase-card {
  width: 420px;
  height: 260px;
  border-radius: 22px;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--line);
  background: var(--bg-card);
  flex-shrink: 0;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.7);
}

.cad-lp .showcase-card:hover {
  border-color: var(--red-light);
  /* transform: translateY(-8px) scale(1.03); */
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.95), 0 0 40px rgba(43,140,255, 0.45);
  z-index: 10;
}

.cad-lp .showcase-card-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  filter: brightness(0.78) contrast(1.1);
}

.cad-lp .showcase-card:hover .showcase-card-bg {
  transform: scale(1.08);
  filter: brightness(0.95) contrast(1.15);
}

.cad-lp .showcase-card-content {
  position: absolute;
  inset: 0;
  /* background: linear-gradient(180deg, rgba(4, 4, 7, 0.25) 0%, rgba(4, 4, 7, 0.65) 50%, rgba(4, 4, 7, 0.96) 100%); */
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
}

.cad-lp .showcase-badge-row {
  display: none;
}

.cad-lp .showcase-info {
  margin-top: 101px;
  width: 225px;
}

.cad-lp .showcase-info h3 {
  font-size: 26px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.03em;
  line-height: 1.15;
  margin-bottom: 6px;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.9);
}

.cad-lp .showcase-info p {
  font-size: 13px;
  color: rgba(248, 250, 252, 0.85);
  margin-bottom: 12px;
  line-height: 1.4;
  font-weight: 500;
}

.cad-lp .showcase-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 800;
  color: #ffffff;
  background: linear-gradient(135deg, var(--red) 0%, #dc2626 100%);
  padding: 6px 16px;
  border-radius: 99px;
  box-shadow: 0 4px 18px rgba(43,140,255, 0.5);
  transition: all 0.3s ease;
  width: max-content;
}

.cad-lp .showcase-card:hover .showcase-link-btn {
  transform: translateX(4px);
  box-shadow: 0 6px 25px rgba(43,140,255, 0.85);
}

@media (max-width: 1024px) {
  .cad-lp .portfolio-slide-card {
    flex: 0 0 calc(50% - 12px);
    min-width: calc(50% - 12px);
  }
}

@media (max-width: 640px) {
  .cad-lp .portfolio-slide-card {
    flex: 0 0 100%;
    min-width: 100%;
  }
}

.cad-lp .case-badge-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.cad-lp .case-category {
  font-size: 10px;
  font-weight: 800;
  color: var(--red-light);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.cad-lp .case-metric {
  font-size: 11px;
  font-weight: 700;
  color: #f8fafc;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--line);
  padding: 4px 10px;
  border-radius: 99px;
  white-space: nowrap;
}

.cad-lp .portfolio-slide-card h3 {
  font-size: 24px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 8px;
}

.cad-lp .portfolio-slide-card p {
  font-size: 13px;
  line-height: 1.6;
  color: var(--muted);
  margin-bottom: 20px;
}

.cad-lp .case-link {
  font-size: 13px;
  font-weight: 700;
  color: var(--red-light);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 16px;
  transition: all 0.3s ease;
}

.cad-lp .case-link span {
  transition: transform 0.3s ease;
}

.cad-lp .case-link:hover {
  color: #ffffff;
}

.cad-lp .case-link:hover span {
  transform: translateX(5px);
}

.cad-lp .dark-card {
  background: linear-gradient(160deg, #11121c 0%, #06070a 100%);
}

.cad-lp .purple-card {
  background: linear-gradient(160deg, #240b12 0%, #0a0407 100%);
  border-color: rgba(43,140,255, 0.3);
}

.cad-lp .light-card {
  background: linear-gradient(160deg, #1c100e 0%, #090504 100%);
  border-color: rgba(249, 115, 22, 0.3);
}

/* Custom Interactive UI Graphic Containers */
.cad-lp .audio-ui,
.cad-lp .fitness-ui,
.cad-lp .route-ui,
.cad-lp .delivery-ui,
.cad-lp .health-ui,
.cad-lp .draft-ui,
.cad-lp .fuel-ui,
.cad-lp .cart-ui,
.cad-lp .ai-hud-ui,
.cad-lp .zen-ui,
.cad-lp .photo-ui,
.cad-lp .prop-ui,
.cad-lp .support-ui {
  height: 140px;
  background: rgba(4, 4, 7, 0.6);
  border: 1px solid var(--line);
  border-radius: 14px;
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
  margin-bottom: 12px;
}

.cad-lp .audio-bars {
  display: flex;
  align-items: flex-end;
  gap: 6px;
  height: 50px;
}

.cad-lp .audio-bars span {
  width: 6px;
  background: linear-gradient(to top, var(--red), var(--amber-glow));
  border-radius: 99px;
  animation: barGrow 1.2s ease-in-out infinite alternate;
}

.cad-lp .ring-circle {
  width: 66px;
  height: 66px;
  border-radius: 50%;
  border: 4px solid var(--red-light);
  border-left-color: transparent;
  display: grid;
  place-items: center;
  font-weight: 800;
  font-size: 14px;
  color: #fff;
  box-shadow: 0 0 15px rgba(43,140,255, 0.4);
}

.cad-lp .route-line {
  width: 80%;
  height: 3px;
  background: linear-gradient(90deg, var(--red) 0%, var(--amber-glow) 100%);
  position: relative;
}

.cad-lp .truck-dot {
  position: absolute;
  top: 50%;
  left: 60%;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0 0 10px var(--red-light);
  transform: translate(-50%, -50%);
}

.cad-lp .speed-meter,
.cad-lp .ecg-line,
.cad-lp .draft-badge,
.cad-lp .fuel-level,
.cad-lp .star-rating,
.cad-lp .hud-target,
.cad-lp .ai-sparkle,
.cad-lp .building-icon,
.cad-lp .streak-badge,
.cad-lp .pulse-circle {
  background: var(--red-soft);
  border: 1px solid var(--line-bright);
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 99px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.05em;
  box-shadow: 0 0 15px rgba(43,140,255, 0.3);
}

.cad-lp .pulse-circle {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  animation: pulseGlow 2s infinite ease-in-out;
  padding: 0;
}

.cad-lp .portfolio-progress-wrap {
  margin-top: 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.cad-lp .portfolio-progress-bar {
  width: 100%;
  max-width: 420px;
  height: 4px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 99px;
  overflow: hidden;
}

.cad-lp .portfolio-progress-fill {
  height: 100%;
  width: 20%;
  background: linear-gradient(90deg, var(--red) 0%, var(--amber-glow) 100%);
  border-radius: 99px;
  transition: width 0.4s ease;
  box-shadow: 0 0 10px rgba(43,140,255, 0.6);
}

.cad-lp .portfolio-dots {
  display: flex;
  gap: 8px;
}

.cad-lp .portfolio-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  cursor: pointer;
  transition: all 0.3s ease;
}

.cad-lp .portfolio-dot.active {
  background: var(--red-light);
  width: 24px;
  border-radius: 99px;
  box-shadow: 0 0 10px rgba(43,140,255, 0.6);
}

.cad-lp .case-copy {
  position: relative;
  z-index: 2;
  max-width: 440px;
}

.cad-lp .case-copy>span {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.14em;
  color: var(--red-light);
  text-transform: uppercase;
}

.cad-lp .purple-card .case-copy>span {
  color: var(--amber-glow);
}

.cad-lp .case-copy h3 {
  font-size: 38px;
  margin-top: 8px;
}

.cad-lp .case-copy p {
  font-size: 14px;
  margin-top: 10px;
  color: var(--muted);
}

.cad-lp .case-copy a {
  display: inline-flex;
  align-items: center;
  margin-top: 20px;
  font-size: 12px;
  font-weight: 800;
  color: var(--red-light);
  letter-spacing: 0.05em;
  transition: transform 0.3s ease, color 0.3s ease;
}

.cad-lp .case-copy a:hover {
  color: #fff;
  transform: translateX(6px);
}

/* Floating & Radar Animations on Components */
.cad-lp .case-visual {
  position: absolute;
  inset: auto 0 0;
  height: 65%;
  display: grid;
  place-items: center;
}

.cad-lp .mock-phone {
  width: 260px;
  height: 480px;
  background: #000;
  border-radius: 36px 36px 0 0;
  padding: 10px;
  border: 2px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.9);
  animation: floatPhone 6s ease-in-out infinite;
}

.cad-lp .mock-screen {
  height: 100%;
  border-radius: 26px;
  background: #08090e;
  position: relative;
  overflow: hidden;
}

.cad-lp .map-screen:before {
  content: "";
  position: absolute;
  width: 140%;
  height: 1px;
  background: rgba(43,140,255, 0.35);
  top: 44%;
  left: -10%;
  transform: rotate(32deg);
}

.cad-lp .map-screen:after {
  content: "";
  position: absolute;
  width: 140%;
  height: 1px;
  background: rgba(249, 115, 22, 0.35);
  top: 61%;
  left: -10%;
  transform: rotate(-20deg);
}

.cad-lp .pin {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--red-light);
  animation: radarPulse 2.5s infinite ease-out;
}

.cad-lp .p1 {
  left: 28%;
  top: 28%;
  animation-delay: 0s;
}

.cad-lp .p2 {
  right: 25%;
  top: 45%;
  animation-delay: 0.8s;
}

.cad-lp .p3 {
  left: 44%;
  bottom: 25%;
  animation-delay: 1.6s;
}

.cad-lp .route {
  position: absolute;
  left: 24%;
  top: 32%;
  width: 52%;
  height: 3px;
  background: linear-gradient(90deg, var(--red-light), var(--amber-glow));
  transform: rotate(39deg);
}

.cad-lp .score-ui {
  position: absolute;
  right: 36px;
  bottom: 36px;
  width: 190px;
  padding: 24px;
  background: rgba(20, 8, 12, 0.92);
  border: 1px solid rgba(43,140,255, 0.4);
  color: #fff;
  border-radius: 18px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7);
  animation: floatBadge 5s ease-in-out infinite;
}

.cad-lp .score-ui span {
  font-size: 9px;
  color: var(--red-light);
  letter-spacing: 0.1em;
  font-weight: 800;
}

.cad-lp .score-ui strong {
  display: block;
  font: 800 52px var(--font-heading);
  margin: 6px 0;
  background: linear-gradient(135deg, #fff, var(--red-light));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cad-lp .score-ui div {
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 99px;
  overflow: hidden;
}

.cad-lp .score-ui i {
  display: block;
  width: 86%;
  height: 100%;
  background: linear-gradient(90deg, var(--red), var(--amber-glow));
}

.cad-lp .city-ui {
  position: absolute;
  right: 35px;
  bottom: 30px;
  display: flex;
  align-items: flex-end;
  gap: 8px;
  height: 140px;
}

.cad-lp .city-ui i {
  width: 28px;
  background: linear-gradient(to top, var(--red), var(--amber-glow));
  border-radius: 6px 6px 2px 2px;
  opacity: 0.88;
  animation: barGrow 3s ease-in-out infinite alternate;
  transform-origin: bottom;
}

.cad-lp .city-ui i:nth-child(1) {
  height: 55px;
  animation-delay: 0s;
}

.cad-lp .city-ui i:nth-child(2) {
  height: 94px;
  animation-delay: 0.5s;
}

.cad-lp .city-ui i:nth-child(3) {
  height: 125px;
  animation-delay: 1s;
}

.cad-lp .city-ui i:nth-child(4) {
  height: 76px;
  animation-delay: 1.5s;
}

.cad-lp .city-ui i:nth-child(5) {
  height: 108px;
  animation-delay: 2s;
}

/* ----------------------------------------------------
   STATS SECTION (REDESIGNED MATCHING SCREENSHOT UI)
---------------------------------------------------- */
.cad-lp .stats-section {
  padding: 100px 0;
  background: #040407;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  position: relative;
  overflow: hidden;
}

.cad-lp .cad-global-hud-canvas {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 1;
}

.cad-lp .cad-stats-hud-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.cad-lp .stats-section .container {
  position: relative;
  z-index: 2;
}

.cad-lp .stats-hero-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  max-width: 1140px;
  margin: 0 auto 60px auto;
}

.cad-lp .stats-hero-big {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.cad-lp .big-stat-number {
  font-family: var(--font-heading);
  font-size: clamp(140px, 16vw, 210px);
  font-weight: 800;
  line-height: 0.85;
  letter-spacing: -5px;
  color: #2b8cff;
  background: linear-gradient(135deg, #4d9eff 0%, var(--red) 70%, #1c72d9 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 35px rgba(43,140,255, 0.45));
  display: inline-block;
}

.cad-lp .stats-hero-content {
  max-width: 780px;
}

.cad-lp .stats-hero-content h2 {
  font-family: var(--font-heading);
  font-size: clamp(40px, 5.2vw, 64px);
  font-weight: 800;
  line-height: 1.1;
  color: #ffffff;
  margin-bottom: 24px;
  letter-spacing: -0.8px;
}

.cad-lp .stats-hero-content h2 .accent-text {
  background: linear-gradient(135deg, #ffffff 0%, #80baff 35%, #4b9dff 68%, #3692ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.cad-lp .stats-hero-content p {
  color: #cbd5e1;
  font-size: 18.5px;
  line-height: 1.7;
  font-weight: 400;
}

.cad-lp .stats-numbers-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--line);
  padding-top: 50px;
  padding-bottom: 30px;
  margin-top: 50px;
}

.cad-lp .stat-bar-item {
  text-align: center;
  padding: 10px 15px;
  border-right: 1px solid var(--line);
}

.cad-lp .stat-bar-item:last-child {
  border-right: none;
}

.cad-lp .stat-bar-item .stat-num {
  font-family: var(--font-heading);
  font-size: clamp(42px, 5.2vw, 68px);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.0;
  margin-bottom: 14px;
  letter-spacing: -1.5px;
}

.cad-lp .stat-bar-item .stat-label {
  color: #f1f5f9;
  font-size: 16.5px;
  font-weight: 700;
  line-height: 1.35;
  max-width: 190px;
  margin: 0 auto;
}

.cad-lp .stats-footer-caption {
  text-align: center;
  color: var(--muted-dark);
  font-size: 13.5px;
  margin-top: 25px;
}

/* ----------------------------------------------------
   MID CONSULTATION BANNER (MATCHING SCREENSHOT)
---------------------------------------------------- */
.cad-lp .consult-section {
  padding: 100px 0;
}

.cad-lp .consult-box {
  position: relative;
  overflow: hidden;
  background-color: #040407;
  background-image:
    linear-gradient(90deg, #040407 38%, rgba(4, 4, 7, 0.82) 68%, rgba(4, 4, 7, 0.55) 100%),
    url('../cad/consult-bg-red.png');
  background-position: center right;
  background-size: cover;
  background-repeat: no-repeat;
  border: 1px solid rgba(61, 61, 61, 0.64);
  border-radius: 28px;
  padding: 56px 60px;
  min-height: 280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.cad-lp .consult-box:hover {
  border-color: rgba(43,140,255, 0.4);
  box-shadow: 0 25px 70px rgba(43,140,255, 0.2), 0 10px 35px rgba(0, 0, 0, 0.7);
}

.cad-lp .consult-content {
  position: relative;
  z-index: 2;
  max-width: 720px;
}

.cad-lp .consult-content h2 {
  font-family: var(--font-heading);
  font-size: clamp(24px, 3.2vw, 38px);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.6px;
  background: linear-gradient(135deg, #ffffff 0%, #80baff 35%, #4b9dff 68%, #3692ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cad-lp .consult-content p {
  color: #94a3b8;
  font-size: 15px;
  line-height: 1.55;
  margin-top: 10px;
  max-width: 620px;
  font-weight: 400;
}

.cad-lp .consult-cta {
  position: relative;
  z-index: 2;
  flex-shrink: 0;
}

.cad-lp .consult-pill-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #2b8cff 0%, #52a1ff 100%);
  color: #ffffff;
  padding: 15px 54px;
  border-radius: 50px;
  font-size: 15.5px;
  font-weight: 800;
  letter-spacing: 0.02em;
  text-decoration: none;
  box-shadow: 0 10px 30px rgba(43,140,255, 0.5), 0 0 20px rgba(43,140,255, 0.3);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
}

.cad-lp .consult-pill-btn:hover {
  transform: translateY(-3px) scale(1.04);
  box-shadow: 0 16px 40px rgba(43,140,255, 0.7), 0 0 30px rgba(43,140,255, 0.5);
  color: #ffffff;
}

/* ----------------------------------------------------
   PROCESS SECTION
---------------------------------------------------- */
.cad-lp .process-section {
  background: var(--bg-main);
}

.cad-lp .center-heading {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 50px;
}

.cad-lp .center-heading h2 {
  margin-top: 14px;
}

.cad-lp .process-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.cad-lp .process-card {
  background: var(--bg-card);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: 14px 14px 28px;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.cad-lp .process-card:hover {
  border-color: var(--line-bright);
  transform: translateY(-6px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.8), 0 0 25px rgba(43,140,255, 0.2);
}

.cad-lp .process-image {
  height: 180px;
  border-radius: var(--radius-md);
  background: #090a10;
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--line);
}

.cad-lp .process-card .num {
  display: block;
  color: var(--red-light);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.1em;
  margin: 20px 10px 8px;
}

.cad-lp .process-card h3 {
  font-size: 19px;
  margin: 0 10px;
}

.cad-lp .process-card p {
  font-size: 13px;
  line-height: 1.6;
  margin: 8px 10px 0;
  color: var(--muted);
}

.cad-lp .orbit {
  width: 95px;
  height: 95px;
  border-radius: 50%;
  border: 1px solid var(--red-light);
  box-shadow: 0 0 0 25px rgba(43,140,255, 0.08);
}

.cad-lp .discovery-art b {
  position: absolute;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--red);
  color: #fff;
  font-size: 12px;
  font-weight: 800;
  box-shadow: 0 0 20px rgba(43,140,255, 0.6);
  animation: pulseGlow 3s infinite ease-in-out;
}

.cad-lp .wire {
  position: absolute;
  width: 80px;
  height: 125px;
  border: 1px solid var(--line-bright);
  border-radius: 12px;
  background: linear-gradient(rgba(43,140,255, 0.3) 0 0) 12px 18px/35px 5px no-repeat,
    linear-gradient(rgba(255, 255, 255, 0.1) 0 0) 12px 36px/54px 30px no-repeat,
    #12131e;
}

.cad-lp .w1 {
  transform: translate(-20px, 8px) rotate(-6deg);
}

.cad-lp .w2 {
  transform: translate(24px, -6px) rotate(8deg);
}

.cad-lp .codebox {
  width: 130px;
  background: #06070a;
  border-radius: 14px;
  padding: 20px;
  transform: rotate(-4deg);
  border: 1px solid var(--line);
}

.cad-lp .codebox i {
  display: block;
  height: 5px;
  background: #334155;
  border-radius: 20px;
  margin: 10px 0;
}

.cad-lp .codebox i:nth-child(odd) {
  width: 65%;
  background: var(--red-light);
}

.cad-lp .launch-icon {
  width: 64px;
  height: 64px;
  border-radius: 20px;
  background: linear-gradient(135deg, var(--red) 0%, var(--amber-glow) 100%);
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 28px;
  box-shadow: 0 10px 30px rgba(43,140,255, 0.5);
  transition: transform 0.3s ease;
}

.cad-lp .process-card:hover .launch-icon {
  transform: scale(1.1) rotate(10deg);
}

/* ----------------------------------------------------
   INDUSTRIES SECTION
---------------------------------------------------- */
.cad-lp .industry-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.cad-lp .industry-grid article {
  padding: 30px;
  min-height: 235px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: var(--bg-card);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cad-lp .industry-grid article:hover {
  background: var(--bg-card-hover);
  border-color: var(--line-bright);
  transform: translateY(-2px);
}

.cad-lp .industry-grid article div {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--red-soft);
  border: 1px solid var(--line-bright);
  color: var(--red-light);
  display: grid;
  place-items: center;
  font-size: 14px;
  font-weight: 800;
  transition: transform 0.3s ease, background 0.3s ease, filter 0.3s ease;
}

.cad-lp .industry-grid article:hover div {
  transform: scale(1.1);
  background: var(--red);
  color: #fff;
  box-shadow: 0 0 15px rgba(43,140,255, 0.5);
  filter: brightness(0.85);
}

.cad-lp .industry-grid h3 {
  font-size: 20px;
  margin-top: 24px;
}

.cad-lp .industry-grid p {
  font-size: 13px;
  line-height: 1.65;
  margin-top: 8px;
  color: var(--muted);
}

/* ----------------------------------------------------
   WHAT WE BUILD SECTION
---------------------------------------------------- */
.cad-lp .build-section {
  background: var(--bg-alt);
}

.cad-lp .build-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.cad-lp .build-grid article {
  background: var(--bg-card);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  padding: 28px;
  min-height: 220px;
  transition: all 0.3s ease;
}

.cad-lp .build-grid article:hover {
  border-color: var(--line-bright);
  transform: translateY(-4px);
  background: var(--bg-card-hover);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(43,140,255, 0.15);
}

.cad-lp .build-grid article span {
  color: var(--red-light);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.cad-lp .build-grid h3 {
  font-size: 20px;
  margin-top: 24px;
}

.cad-lp .build-grid p {
  font-size: 13px;
  line-height: 1.65;
  margin-top: 8px;
  color: var(--muted);
}

/* ----------------------------------------------------
   AWARDS & RECOGNITION (REDESIGNED MATCHING SCREENSHOT)
---------------------------------------------------- */
.cad-lp .awards-section {
  padding: 100px 0;
  background: var(--bg-main);
  border-top: 1px solid var(--line);
  position: relative;
}

.cad-lp .awards-top-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: 32px;
}

.cad-lp .awards-intro-card {
  background: var(--bg-card);
  border: 1px solid var(--line);
  border-radius: 28px;
  padding: 55px 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

.cad-lp .awards-intro-card::before {
  content: '';
  position: absolute;
  bottom: -40px;
  right: -40px;
  width: 220px;
  height: 220px;
  background: radial-gradient(circle, rgba(43,140,255, 0.22) 0%, rgba(0, 0, 0, 0) 70%);
  pointer-events: none;
}

.cad-lp .awards-intro-card h2 {
  font-family: var(--font-heading);
  font-size: clamp(34px, 4vw, 50px);
  font-weight: 800;
  line-height: 1.12;
  color: #ffffff;
  margin-bottom: 20px;
  letter-spacing: -0.5px;
}

.cad-lp .awards-intro-card h2 .accent-text {
  background: linear-gradient(135deg, #ffffff 0%, #80baff 35%, #4b9dff 68%, #3692ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cad-lp .awards-intro-card p {
  color: var(--muted);
  font-size: 16px;
  line-height: 1.65;
  max-width: 480px;
}

.cad-lp .featured-award-card {
  background: #0d0e16;
  border-radius: 28px;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #f62a394d;
}

.cad-lp .featured-award-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
}

.cad-lp .featured-award-card img {
  max-width: 100%;
  max-height: 220px;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
}

.cad-lp .awards-badge-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.cad-lp .badge-card {
  background: #0d0e16;
  border-radius: 20px;
  padding: 22px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: 1px solid #f62a394d;
}

.cad-lp .badge-card:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 18px 40px rgba(43,140,255, 0.3), 0 8px 24px rgba(0, 0, 0, 0.4);
  border-color: rgba(43,140,255, 0.8);
}

.cad-lp .badge-card svg,
.cad-lp .badge-card img {
  max-width: 100%;
  max-height: 100px;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
}

/* Responsive Badges */
@media (max-width: 1100px) {
  .cad-lp .awards-badge-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 880px) {
  .cad-lp .awards-top-grid {
    grid-template-columns: 1fr;
  }

  .cad-lp .awards-badge-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 580px) {
  .cad-lp .awards-badge-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }

  .cad-lp .awards-intro-card {
    padding: 35px 25px;
  }

  .cad-lp .featured-award-card {
    padding: 25px;
  }
}

/* ----------------------------------------------------
   CLIENT REVIEWS / TRUSTED BY TEAMS WHO SHIP (MARQUEE)
---------------------------------------------------- */
.cad-lp .reviews-marquee-section {
  padding: 100px 0;
  background: var(--bg-main);
  position: relative;
  overflow: hidden;
  border-top: 1px solid var(--line);
}

.cad-lp .reviews-header {
  text-align: center;
  margin-bottom: 50px;
}

.cad-lp .reviews-header h2 {
  font-family: var(--font-heading);
  font-size: clamp(34px, 5vw, 60px);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -1px;
  background: linear-gradient(135deg, #ffffff 0%, #ffffff 42%, #80baff 65%, #4b9dff 84%, #3692ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.cad-lp .reviews-header h2 .ship-underline {
  position: relative;
  display: inline-block;
}

.cad-lp .reviews-header h2 .ship-underline::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 4px;
  background: #2b8cff;
  border-radius: 2px;
  box-shadow: 0 0 12px rgba(43,140,255, 0.8);
}

.cad-lp .reviews-header p {
  color: var(--muted);
  font-size: 16px;
  margin-top: 18px;
  font-weight: 400;
}

.cad-lp .marquee-wrapper {
  display: flex;
  overflow: hidden;
  user-select: none;
  position: relative;
  width: 100%;
}

.cad-lp .marquee-wrapper.margin-top-20 {
  margin-top: 24px;
}

.cad-lp .marquee-wrapper::before,
.cad-lp .marquee-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 140px;
  z-index: 2;
  pointer-events: none;
}

.cad-lp .marquee-wrapper::before {
  left: 0;
  background: linear-gradient(to right, var(--bg-main) 0%, rgba(4, 4, 7, 0) 100%);
}

.cad-lp .marquee-wrapper::after {
  right: 0;
  background: linear-gradient(to left, var(--bg-main) 0%, rgba(4, 4, 7, 0) 100%);
}

.cad-lp .marquee-track {
  display: flex;
  gap: 24px;
  width: max-content;
  will-change: transform;
}

.cad-lp .marquee-track-left {
  animation: marqueeLeft 42s linear infinite;
}

.cad-lp .marquee-track-right {
  animation: marqueeRight 42s linear infinite;
}

.cad-lp .marquee-wrapper:hover .marquee-track {
  animation-play-state: paused;
}

@keyframes marqueeLeft {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

@keyframes marqueeRight {
  0% {
    transform: translateX(-50%);
  }

  100% {
    transform: translateX(0);
  }
}

.cad-lp .review-card {
  width: 440px;
  flex-shrink: 0;
  background: #0d0e16;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 30px 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
}

.cad-lp .review-card:hover {
  border-color: var(--rev-border, rgba(43,140,255, 0.4));
  background: #12131c;
  box-shadow: 0 16px 45px rgba(0, 0, 0, 0.5), 0 0 25px var(--rev-glow, rgba(43,140,255, 0.15));
}

.cad-lp .review-stars {
  color: #2b8cff;
  font-size: 16px;
  letter-spacing: 3px;
  margin-bottom: 16px;
  text-shadow: 0 0 10px rgba(43,140,255, 0.4);
}

.cad-lp .review-text {
  color: #cbd5e1;
  font-size: 15px;
  line-height: 1.65;
  font-style: normal;
  margin-bottom: 24px;
  font-weight: 400;
}

.cad-lp .review-user {
  display: flex;
  align-items: center;
  gap: 14px;
}

.cad-lp .review-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #2b8cff;
  color: #ffffff;
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 0 12px rgba(43,140,255, 0.5);
}

.cad-lp .review-user-info strong {
  display: block;
  color: #ffffff;
  font-size: 14.5px;
  font-weight: 700;
  line-height: 1.2;
}

.cad-lp .review-user-info span {
  display: block;
  color: var(--muted-dark);
  font-size: 12.5px;
  margin-top: 3px;
}

.cad-lp .testimonial-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 32px;
}

.cad-lp .slider-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--bg-card);
  border: 1px solid var(--line-bright);
  color: var(--red-light);
  display: grid;
  place-items: center;
  font-size: 20px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  user-select: none;
}

.cad-lp .slider-btn:hover {
  background: var(--red);
  color: #fff;
  transform: scale(1.08);
  box-shadow: 0 0 25px rgba(43,140,255, 0.7);
}

.cad-lp .slider-dots {
  display: flex;
  gap: 10px;
}

.cad-lp .dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cad-lp .dot:hover {
  background: rgba(43,140,255, 0.6);
}

.cad-lp .dot.active {
  width: 32px;
  border-radius: 99px;
  background: var(--red-light);
  box-shadow: 0 0 15px rgba(43,140,255, 0.7);
}

/* ----------------------------------------------------
   SECOND ESTIMATE SECTION (REDESIGNED STRATEGY CALL FORM)
---------------------------------------------------- */
.cad-lp .estimate-section {
  padding: 100px 0;
  background: var(--bg-alt);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  position: relative;
  overflow: hidden;
}

.cad-lp .cad-estimate-dustfx {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.cad-lp .red-ribbon-wrap {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 1;
}

.cad-lp .red-ribbon-svg {
  width: 100%;
  height: 100%;
  display: block;
}

.cad-lp .ribbon-path-1,
.cad-lp .ribbon-path-2,
.cad-lp .ribbon-path-gloss,
.cad-lp .ribbon-path-glow {
  animation: ribbonWaveFloat 10s ease-in-out infinite alternate;
  transform-origin: center;
}

.cad-lp .ribbon-path-2 {
  animation-delay: -3s;
  animation-duration: 12s;
}

.cad-lp .ribbon-path-gloss {
  animation-delay: -5s;
  animation-duration: 9s;
}

@keyframes ribbonWaveFloat {
  0% {
    transform: translateY(0px) scaleY(1);
  }
  50% {
    transform: translateY(-22px) scaleY(1.06);
  }
  100% {
    transform: translateY(16px) scaleY(0.96);
  }
}

.cad-lp .estimate-box {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 60px;
  align-items: start;
  position: relative;
  z-index: 2;
}

@media (max-width: 992px) {
  .cad-lp .estimate-box {
    grid-template-columns: 1fr;
    gap: 45px;
  }
}

.cad-lp .estimate-copy {
  display: flex;
  flex-direction: column;
}

.cad-lp .estimate-copy h2 {
  font-family: var(--font-heading);
  font-size: clamp(34px, 4.2vw, 52px);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.8px;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #ffffff 0%, #ffffff 40%, #80baff 65%, #4b9dff 84%, #3692ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.cad-lp .estimate-sub {
  color: #94a3b8;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 32px;
  max-width: 480px;
  font-weight: 400;
}

.cad-lp .next-steps-kicker {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #64748b;
  text-transform: uppercase;
  margin-bottom: 24px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.cad-lp .next-steps-list {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.cad-lp .next-step-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding-bottom: 22px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.cad-lp .next-step-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.cad-lp .next-step-item .step-num {
  font-size: 15px;
  font-weight: 800;
  color: #2b8cff;
  min-width: 28px;
  padding-top: 1px;
}

.cad-lp .next-step-item strong {
  display: block;
  font-size: 17px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 5px;
}

.cad-lp .next-step-item p {
  font-size: 14.5px;
  color: #94a3b8;
  line-height: 1.55;
  margin: 0;
  font-weight: 400;
}

/* Redesigned Form Card */
.cad-lp .estimate-form {
  display: flex;
  flex-direction: column;
  gap: 22px;
  background: #090a12;
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cad-lp .estimate-form:hover {
  border-color: rgba(43,140,255, 0.3);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7), 0 0 35px rgba(43,140,255, 0.12);
}

@media (max-width: 580px) {
  .cad-lp .estimate-form {
    padding: 24px 18px;
    border-radius: 18px;
  }
}

.cad-lp .form-row-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;
}

@media (max-width: 640px) {
  .cad-lp .form-row-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }
}

.cad-lp .form-field-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.cad-lp .form-field-group.full-width {
  grid-column: 1 / -1;
}

.cad-lp .form-field-group label {
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 1.2px;
  color: #94a3b8;
  text-transform: uppercase;
}

.cad-lp .form-field-group input,
.cad-lp .form-field-group select,
.cad-lp .form-field-group textarea {
  width: 100%;
  box-sizing: border-box;
  background: #0f111c;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  color: #ffffff;
  font-family: inherit;
  font-size: 14.5px;
  padding: 0 16px;
  outline: none;
  transition: all 0.25s ease;
}

.cad-lp .form-field-group input,
.cad-lp .form-field-group select {
  height: 50px;
}

.cad-lp .form-field-group input:focus,
.cad-lp .form-field-group select:focus,
.cad-lp .form-field-group textarea:focus {
  border-color: #2b8cff;
  box-shadow: 0 0 0 3px rgba(43,140,255, 0.22);
  background: #131524;
}

.cad-lp .form-field-group input::placeholder,
.cad-lp .form-field-group textarea::placeholder {
  color: #64748b;
  font-weight: 400;
}

.cad-lp .form-field-group select {
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' d='M1 1l5 5 5-5'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px;
  cursor: pointer;
}

.cad-lp .form-field-group select option {
  background: #0f111c;
  color: #ffffff;
  padding: 12px;
}

.cad-lp .form-field-group textarea {
  height: 120px;
  min-height: 90px;
  padding: 14px 16px;
  resize: vertical;
  line-height: 1.55;
}

/* Phone input layout override */
.cad-lp .phone-input-wrap {
  display: flex !important;
  align-items: center !important;
  gap: 10px !important;
  width: 100% !important;
  box-sizing: border-box;
}

.cad-lp select.country-code-select {
  width: 88px !important;
  min-width: 88px !important;
  max-width: 88px !important;
  flex: 0 0 88px !important;
  height: 50px !important;
  background: #0f111c !important;
  border: 1px solid rgba(255, 255, 255, 0.12) !important;
  color: #ffffff !important;
  border-radius: 10px !important;
  padding: 0 4px 0 10px !important;
  font-size: 13.5px !important;
  font-weight: 700 !important;
  cursor: pointer !important;
  outline: none !important;
  appearance: none !important;
  -webkit-appearance: none !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='5' viewBox='0 0 10 6'%3E%3Cpath fill='none' stroke='%23ff2b3f' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' d='M1 1l4 4 4-4'/%3E%3C/svg%3E") !important;
  background-repeat: no-repeat !important;
  background-position: right 6px center !important;
  padding-right: 18px !important;
  box-sizing: border-box !important;
}

.cad-lp select.country-code-select:focus,
.cad-lp select.country-code-select:hover {
  border-color: #2b8cff !important;
  box-shadow: 0 0 0 3px rgba(43,140,255, 0.22) !important;
}

.cad-lp input.phone-num-input {
  flex: 1 1 auto !important;
  width: 100% !important;
  min-width: 0 !important;
  height: 50px !important;
  box-sizing: border-box !important;
}

.cad-lp .submit-discuss-btn {
  width: 100%;
  height: 54px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #2b8cff 0%, #1c72d9 100%);
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.2px;
  cursor: pointer;
  margin-top: 6px;
  box-shadow: 0 10px 28px rgba(43,140,255, 0.45);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cad-lp .submit-discuss-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(43,140,255, 0.65);
  background: linear-gradient(135deg, #3b94ff 0%, #227be6 100%);
}

.cad-lp .form-bottom-note {
  font-size: 13px;
  color: #64748b;
  line-height: 1.55;
  text-align: left;
  margin-top: 4px;
  font-weight: 400;
}

/* ----------------------------------------------------
   FAQ SECTION
---------------------------------------------------- */
.cad-lp .faq-layout {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 60px;
  align-items: start;
}

.cad-lp .faq-layout > div:first-child h2 {
  font-family: var(--font-heading);
  font-size: clamp(30px, 4vw, 48px);
  font-weight: 800;
  line-height: 1.16;
  margin-top: 12px;
  letter-spacing: -0.6px;
  background: linear-gradient(135deg, #ffffff 0%, #80baff 35%, #4b9dff 68%, #3692ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
}

.cad-lp .faq-list details {
  border-bottom: 1px solid var(--line);
  transition: all 0.3s ease;
}

.cad-lp .faq-list details[open] {
  border-bottom-color: var(--line-bright);
}

.cad-lp .faq-list summary {
  list-style: none;
  cursor: pointer;
  padding: 22px 0;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font: 700 17px var(--font-heading);
  color: #ffffff;
  transition: color 0.3s ease;
}

.cad-lp .faq-list summary:hover {
  color: var(--red-light);
}

.cad-lp .faq-list summary::-webkit-details-marker {
  display: none;
}

.cad-lp .faq-list summary span {
  color: var(--red-light);
  font-size: 22px;
  transition: transform 0.3s ease;
}

.cad-lp .faq-list details[open] summary span {
  transform: rotate(45deg);
}

.cad-lp .faq-list p {
  font-size: 14px;
  line-height: 1.7;
  padding: 0 40px 22px 0;
  color: var(--muted);
}

.cad-lp .offices-section {
  position: relative;
  overflow: hidden;
}

.cad-lp .offices-section .container {
  position: relative;
  z-index: 2;
}

/* ----------------------------------------------------
   FINAL CTA & FOOTER
---------------------------------------------------- */
.cad-lp .final-cta {
  padding: 100px 0;
  background: linear-gradient(135deg, #090a10 0%, #120508 50%, #1e080e 100%);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  color: #fff;
  position: relative;
  overflow: hidden;
}

.cad-lp .final-cta::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -20%;
  width: 140%;
  height: 200%;
  background: radial-gradient(circle at 75% 50%, rgba(43,140,255, 0.18) 0%, transparent 65%);
  pointer-events: none;
}

.cad-lp .final-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  position: relative;
  z-index: 2;
}

.cad-lp .final-wrap span {
  font-size: 11.5px;
  letter-spacing: 0.18em;
  font-weight: 800;
  color: var(--red-light);
  text-transform: uppercase;
}

.cad-lp .final-wrap h2 {
  font-family: var(--font-heading);
  font-size: clamp(24px, 3.8vw, 42px);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.5px;
  max-width: 780px;
  margin-top: 10px;
  color: #ffffff;
}

.cad-lp .final-wrap a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #2b8cff 0%, #52a1ff 100%);
  color: #ffffff;
  padding: 16px 36px;
  border-radius: 50px;
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.02em;
  text-decoration: none;
  white-space: nowrap;
  box-shadow: 0 10px 30px rgba(43,140,255, 0.5), 0 0 20px rgba(43,140,255, 0.3);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
}

.cad-lp .final-wrap a:hover {
  transform: translateY(-3px) scale(1.04);
  box-shadow: 0 16px 40px rgba(43,140,255, 0.7), 0 0 30px rgba(43,140,255, 0.5);
  color: #ffffff;
}

.cad-lp footer {
  position: relative;
  overflow: hidden;
  background: #030305;
  color: #fff;
  padding: 60px 0 24px;
  border-top: 1px solid var(--line);
}

.cad-lp footer .container {
  position: relative;
  z-index: 2;
}

.cad-lp .footer-wrap {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 45px;
  margin-bottom: 40px;
}

.cad-lp .light-mark {
  background: linear-gradient(135deg, var(--red) 0%, var(--red-dark) 100%);
  color: #fff;
}

.cad-lp .footer-wrap strong,
.cad-lp .footer-wrap a,
.cad-lp .footer-wrap span {
  display: block;
}

.cad-lp .footer-wrap strong {
  font-size: 12px;
  margin-bottom: 12px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.cad-lp .footer-wrap a,
.cad-lp .footer-wrap>div>span {
  color: var(--muted);
  font-size: 13px;
  margin: 8px 0;
}

.cad-lp .footer-wrap a:hover {
  color: var(--red-light);
}

/* ----------------------------------------------------
   FOOTER STANDARDS & INFRASTRUCTURE COMPLIANCE BAR
---------------------------------------------------- */
.cad-lp .footer-standards-wrap {
  padding: 36px 0;
  border-top: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.cad-lp .standards-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.cad-lp .standards-label {
  color: var(--muted-dark);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  min-width: 185px;
  text-align: right;
  white-space: nowrap;
}

.cad-lp .standards-pills {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.cad-lp .standard-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: #0d0e16;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  padding: 6px 14px;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.cad-lp .standard-pill:hover {
  border-color: rgba(43,140,255, 0.4);
  background: #131420;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(43,140,255, 0.15);
}

.cad-lp .standard-pill strong {
  color: #ffffff;
  font-size: 12.5px;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.cad-lp .standard-pill.cloud-pill {
  padding: 6px 16px;
}

.cad-lp .footer-bottom {
  border-top: 1px solid var(--line);
  padding: 24px 0 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}

.cad-lp .copyright-text {
  color: var(--muted-dark);
  font-size: 12px;
}

.cad-lp .legal-links {
  display: flex;
  align-items: center;
}

.cad-lp .legal-links a {
  color: var(--muted);
  font-size: 12.5px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.25s ease;
}

.cad-lp .legal-links a:hover {
  color: var(--red-light);
  text-decoration: underline;
}

.cad-lp .dot-separator {
  color: var(--muted-dark);
  margin: 0 10px;
  font-size: 12px;
}

/* ----------------------------------------------------
   RESPONSIVE BREAKPOINTS
---------------------------------------------------- */
/* Narrow two-column band (981–1240px): the container has not hit its 1200px
   cap yet, so the left column is tighter than on a full desktop and the input
   pills would wrap. Shrink them just for this band so the row stays single and
   the timeline still clears a short fold. */
@media (min-width: 981px) and (max-width: 1240px) {
  /* Tighter column gap buys the left column ~20px, enough to keep the pill row
     single down to 1024px without shrinking the form too far. */
  .cad-lp .hero-grid {
    gap: 36px;
  }

  .cad-lp .hero-input-pill {
    padding: 6px 9px;
    font-size: 11px;
    gap: 5px;
  }

  .cad-lp .hero-inputs {
    gap: 5px;
  }

  .cad-lp .hero-feature {
    padding: 9px 12px;
  }

  .cad-lp .hero-feature p {
    font-size: 12.5px;
  }

  /* margin-top intentionally omitted on the sections here too — the stretch
     rule's auto margins must win so the timeline keeps bottom-aligning. */
  .cad-lp .hero-timeline {
    padding-top: 12px;
  }

  .cad-lp .hero-timeline-head {
    margin-bottom: 12px;
  }
}

/* Short desktop viewports (laptops with browser chrome, ~720–768px tall):
   the fold is the height, not the width, so compact the vertical rhythm across
   all two-column widths to keep the whole hero — timeline included — above it. */
@media (min-width: 981px) and (max-height: 780px) {
  .cad-lp .hero {
    padding-top: 36px;
    padding-bottom: 28px;
  }

  .cad-lp .hero-lead {
    margin-top: 12px;
  }

  /* NOTE: no margin-top here on .hero-inputs / .hero-feature-grid / .hero-timeline
     — the stretch rule's auto margins own the vertical distribution, and a fixed
     value here would override them and re-open the gap below the timeline. Only
     size-reducing properties (padding, gaps) belong in this compaction. */
  .cad-lp .hero-feature {
    padding: 9px 12px;
  }

  .cad-lp .hero-feature-grid {
    gap: 9px;
  }

  .cad-lp .hero-timeline {
    padding-top: 12px;
  }

  .cad-lp .hero-timeline-head {
    margin-bottom: 12px;
  }
}

@media (max-width: 980px) {

  .cad-lp .hero-grid,
  .cad-lp .stats-layout,
  .cad-lp .estimate-box,
  .cad-lp .faq-layout,
  .cad-lp .awards-wrap {
    grid-template-columns: 1fr;
  }

  .cad-lp .hero-grid {
    gap: 40px;
  }

  .cad-lp .quote-card {
    max-width: 620px;
  }

  .cad-lp .portfolio-cards {
    grid-template-columns: 1fr 1fr;
  }

  .cad-lp .portfolio-card:first-child {
    grid-column: 1 / -1;
    grid-row: auto;
    min-height: 580px;
  }

  .cad-lp .process-grid,
  .cad-lp .industry-grid,
  .cad-lp .build-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .cad-lp .awards-badge-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Mobile call link. Hidden on desktop, where the full two-line .contact-mini
   pills carry the number instead. */
.cad-lp .header-phone-mobile {
  display: none;
}

@media (max-width: 700px) {
  .cad-lp .header {
    height: 70px;
  }

  .cad-lp .contact-mini {
    display: none;
  }

  /* Swap the theme toggle for a tap-to-call number in the same slot. The base
     .theme-toggle-btn rule sits later in this file, so at equal specificity it
     wins on source order unless this is forced. */
  .cad-lp .theme-toggle-btn {
    display: none !important;
  }

  .cad-lp .header-phone-mobile {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 7px 11px;
    border: 1px solid rgba(43,140,255, 0.35);
    border-radius: 999px;
    background: rgba(43,140,255, 0.08);
    color: var(--ink);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: -0.01em;
    white-space: nowrap;
    line-height: 1;
  }

  .cad-lp .header-phone-mobile svg {
    color: var(--red);
  }

  .cad-lp .header-cta {
    padding: 10px 16px;
    font-size: 12px;
  }

  .cad-lp .hero {
    padding-top: 40px;
  }

  .cad-lp .hero h1 {
    font-size: 40px;
  }

  .cad-lp .hero-lead {
    font-size: 15px;
  }

  .cad-lp .hero-proof {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .cad-lp .proof-line {
    display: none;
  }

  .cad-lp .logo-slider {
    margin-top: 18px;
  }

  .cad-lp .section,
  .cad-lp .stats-section,
  .cad-lp .consult-section,
  .cad-lp .process-section,
  .cad-lp .build-section,
  .cad-lp .awards-section,
  .cad-lp .reviews-marquee-section,
  .cad-lp .estimate-section,
  .cad-lp .offices-section {
    padding: 60px 0;
  }

  .cad-lp .section-title-row,
  .cad-lp .offices-header-row,
  .cad-lp .final-wrap {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 16px;
  }

  .cad-lp .section-title-row>div,
  .cad-lp .offices-header-row>div,
  .cad-lp .final-wrap>div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
  }

  .cad-lp .section-kicker {
    margin-left: auto;
    margin-right: auto;
  }

  .cad-lp .outline-link {
    display: inline-block;
  }

  .cad-lp .portfolio-cards,
  .cad-lp .process-grid,
  .cad-lp .industry-grid,
  .cad-lp .build-grid {
    grid-template-columns: 1fr;
  }

  .cad-lp .portfolio-card:first-child {
    min-height: 500px;
  }

  .cad-lp .portfolio-card {
    min-height: 340px;
  }

  .cad-lp .consult-box {
    flex-direction: column;
    align-items: flex-start;
    padding: 36px 28px;
    gap: 28px;
  }

  .cad-lp .final-wrap a {
    width: 100%;
    justify-content: center;
    text-align: center;
  }

  .cad-lp .stats-hero-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 35px;
  }

  .cad-lp .stats-numbers-bar {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px 0;
    padding-top: 30px;
  }

  .cad-lp .stat-bar-item:nth-child(2n) {
    border-right: none;
  }

  .cad-lp .stat-bar-item:nth-child(1),
  .cad-lp .stat-bar-item:nth-child(2) {
    border-bottom: 1px solid var(--line);
    padding-bottom: 25px;
  }

  .cad-lp .stats-grid {
    grid-template-columns: 1fr;
  }

  .cad-lp .stat {
    border-right: none;
    border-bottom: 1px solid var(--line) !important;
  }

  .cad-lp .stat:last-child {
    border-bottom: none !important;
  }

  .cad-lp .testimonial {
    padding: 28px;
    flex-direction: column;
    gap: 18px;
  }

  .cad-lp .testimonial blockquote {
    font-size: 18px;
  }

  .cad-lp .testimonial-avatar {
    margin-bottom: 0;
  }

  .cad-lp .estimate-form {
    grid-template-columns: 1fr;
  }

  .cad-lp .footer-wrap {
    grid-template-columns: 1fr;
  }

  .cad-lp .awards-badge-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .cad-lp .standards-row {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
  }

  .cad-lp .standards-label {
    min-width: auto;
    text-align: center;
  }

  .cad-lp .standards-pills {
    justify-content: center;
  }

  .cad-lp .footer-bottom {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 12px;
  }

}

/* ----------------------------------------------------
   OUR GLOBAL OFFICES SECTION (5-CARD GRID SHOWCASE)
---------------------------------------------------- */
.cad-lp .offices-section {
  padding: 100px 0;
  background: var(--bg-main);
  border-top: 1px solid var(--line);
}

.cad-lp .offices-header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 38px;
}

.cad-lp .offices-header-row h2 {
  font-family: var(--font-heading);
  font-size: clamp(26px, 3.5vw, 36px);
  font-weight: 800;
  margin-top: 4px;
  letter-spacing: -0.5px;
  background: linear-gradient(135deg, #ffffff 0%, #80baff 35%, #4b9dff 68%, #3692ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cad-lp .offices-view-all {
  color: var(--red-light);
  font-size: 13px;
  font-weight: 700;
  transition: all 0.3s ease;
}

.cad-lp .offices-view-all:hover {
  color: #ffffff;
  transform: translateX(4px);
}

.cad-lp .offices-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

.cad-lp .office-card {
  background: #090a10;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
}

.cad-lp .office-card:hover {
  border-color: rgba(43,140,255, 0.45);
  transform: translateY(-8px);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.9), 0 0 30px rgba(43,140,255, 0.25);
}

.cad-lp .office-thumb-wrap {
  position: relative;
  width: 100%;
  height: 155px;
  overflow: hidden;
  background: #000000;
}

.cad-lp .office-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease, filter 0.5s ease;
  filter: brightness(0.85) contrast(1.05);
}

.cad-lp .office-card:hover .office-thumb {
  transform: scale(1.08);
  filter: brightness(0.98) contrast(1.1);
}

.cad-lp .office-badge-hq {
  position: absolute;
  top: 12px;
  left: 12px;
  background: var(--red);
  color: #ffffff;
  font-size: 10px;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: 99px;
  letter-spacing: 0.08em;
  box-shadow: 0 4px 12px rgba(43,140,255, 0.6);
  z-index: 2;
}

.cad-lp .office-flag {
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 18px;
  z-index: 2;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.8));
}

.cad-lp .office-card-body {
  padding: 22px 18px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
}

.cad-lp .office-card-body h3 {
  font-size: 22px;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 2px;
}

.cad-lp .office-country {
  font-size: 12px;
  color: var(--muted-dark);
  font-weight: 600;
  margin-bottom: 12px;
}

.cad-lp .office-address {
  font-size: 12px;
  line-height: 1.5;
  color: var(--muted);
  margin-bottom: 16px;
  min-height: 36px;
}

.cad-lp .office-map-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 700;
  color: var(--red-light);
  transition: all 0.3s ease;
  width: max-content;
}

.cad-lp .office-map-link:hover {
  color: #ffffff;
  transform: translateX(4px);
}

@media (max-width: 1200px) {
  .cad-lp .offices-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .cad-lp .offices-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .cad-lp .offices-grid {
    grid-template-columns: 1fr;
  }
}

/* ----------------------------------------------------
   FOOTER SOCIAL MEDIA CIRCULAR BUTTONS (MATCHING REFERENCE IMAGE)
---------------------------------------------------- */
.cad-lp .footer-social-row {
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
  margin-top: 14px !important;
  flex-wrap: nowrap !important;
}

.cad-lp .footer-wrap a.social-circle-btn,
.cad-lp .social-circle-btn {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 34px !important;
  height: 34px !important;
  min-width: 34px !important;
  min-height: 34px !important;
  border-radius: 50% !important;
  background: rgba(255, 255, 255, 0.04) !important;
  border: 1px solid rgba(255, 255, 255, 0.22) !important;
  transition: all 0.3s ease !important;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4) !important;
  text-decoration: none !important;
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box !important;
  flex-shrink: 0 !important;
}

.cad-lp .footer-wrap a.social-circle-btn:hover,
.cad-lp .social-circle-btn:hover {
  background: rgba(43,140,255, 0.2) !important;
  border-color: var(--red-light) !important;
  transform: translateY(-3px) scale(1.08) !important;
  box-shadow: 0 6px 16px rgba(43,140,255, 0.45) !important;
}

.cad-lp .social-circle-btn svg {
  display: block !important;
  margin: 0 auto !important;
  flex-shrink: 0 !important;
  pointer-events: none !important;
}

/* ----------------------------------------------------
   3D GLASSMORPHISM DEVELOPMENT PROCESS SECTION
---------------------------------------------------- */
.cad-lp .process-timeline-wrap {
  position: relative;
  margin-top: 50px;
}

.cad-lp .process-connector-line {
  position: absolute;
  top: 100px;
  left: 10%;
  right: 10%;
  height: 3px;
  background: linear-gradient(90deg,
      rgba(43,140,255, 0.2) 0%,
      var(--red-light) 50%,
      rgba(43,140,255, 0.2) 100%);
  z-index: 1;
  border-radius: 99px;
  box-shadow: 0 0 15px rgba(43,140,255, 0.5);
}

.cad-lp .process-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  position: relative;
  z-index: 2;
}

.cad-lp .process-card {
  background: rgba(9, 10, 16, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 30px 20px;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.cad-lp .process-card:hover {
  transform: translateY(-12px) scale(1.02);
  border-color: rgba(43,140,255, 0.5);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(43,140,255, 0.3);
  background: rgba(14, 16, 26, 0.9);
}

.cad-lp .process-image {
  width: 100%;
  height: 180px;
  border-radius: 18px;
  background: radial-gradient(circle at center, rgba(43,140,255, 0.15) 0%, rgba(5, 6, 10, 0.8) 80%);
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
  display: grid;
  place-items: center;
  margin-bottom: 24px;
  transition: all 0.4s ease;
}

.cad-lp .process-card:hover .process-image {
  border-color: rgba(43,140,255, 0.35);
  background: radial-gradient(circle at center, rgba(43,140,255, 0.28) 0%, rgba(5, 6, 10, 0.9) 80%);
}

/* 3D GRAPHIC 01: DISCOVERY RADAR */
.cad-lp .discovery-3d-graphic {
  perspective: 600px;
}

.cad-lp .glass-radar-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(43,140,255, 0.4);
  transition: all 0.5s ease;
}

.cad-lp .ring-3 {
  width: 140px;
  height: 140px;
  opacity: 0.3;
}

.cad-lp .ring-2 {
  width: 100px;
  height: 100px;
  opacity: 0.6;
  border-style: dashed;
}

.cad-lp .ring-1 {
  width: 65px;
  height: 65px;
  opacity: 0.9;
}

.cad-lp .radar-core-node {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--red) 0%, #dc2626 100%);
  color: #ffffff;
  font-size: 14px;
  font-weight: 800;
  display: grid;
  place-items: center;
  box-shadow: 0 0 25px rgba(43,140,255, 0.9);
  position: relative;
  z-index: 3;
}

.cad-lp .process-card:hover .ring-3 {
  transform: scale(1.15) rotate(45deg);
  opacity: 0.6;
}

.cad-lp .process-card:hover .ring-2 {
  transform: scale(1.1) rotate(-90deg);
}

/* 3D GRAPHIC 02: DESIGN UI SCREENS */
.cad-lp .design-3d-graphic {
  perspective: 700px;
}

.cad-lp .glass-ui-screen {
  position: absolute;
  width: 85px;
  height: 125px;
  border-radius: 12px;
  background: rgba(18, 20, 32, 0.85);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);
  transition: all 0.5s ease;
}

.cad-lp .screen-back {
  transform: rotate(-12deg) translate(-14px, -6px) rotateY(15deg);
  opacity: 0.75;
}

.cad-lp .screen-front {
  transform: rotate(6deg) translate(12px, 6px) rotateY(-10deg);
  border-color: rgba(43,140,255, 0.5);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(43,140,255, 0.3);
}

.cad-lp .ui-bar {
  height: 6px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.15);
  margin-bottom: 8px;
}

.cad-lp .ui-bar.header {
  width: 70%;
  background: var(--muted);
}

.cad-lp .ui-bar.header.red {
  background: var(--red-light);
}

.cad-lp .ui-bar.content {
  width: 100%;
  height: 45px;
  background: rgba(255, 255, 255, 0.05);
}

.cad-lp .ui-circle-avatar {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--red);
  position: absolute;
  bottom: 12px;
  right: 12px;
}

.cad-lp .cursor-node {
  position: absolute;
  bottom: 25px;
  right: 25px;
  width: 12px;
  height: 12px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 12px #ffffff;
  transition: all 0.5s ease;
  z-index: 4;
}

.cad-lp .process-card:hover .screen-back {
  transform: rotate(-18deg) translate(-22px, -10px);
}

.cad-lp .process-card:hover .screen-front {
  transform: rotate(10deg) translate(18px, 10px) scale(1.05);
}

/* 3D GRAPHIC 03: TERMINAL & CODE MATRIX */
.cad-lp .develop-3d-graphic {
  perspective: 600px;
}

.cad-lp .terminal-glass-window {
  width: 130px;
  height: 100px;
  background: rgba(7, 8, 14, 0.92);
  border: 1px solid rgba(43,140,255, 0.4);
  border-radius: 12px;
  padding: 8px 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(43,140,255, 0.2);
  transition: all 0.5s ease;
  transform: rotateX(10deg);
}

.cad-lp .terminal-header {
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
}

.cad-lp .terminal-header .dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
}

.cad-lp .terminal-header .dot.red {
  background: #ef4444;
}

.cad-lp .terminal-header .dot.yellow {
  background: #f59e0b;
}

.cad-lp .terminal-header .dot.green {
  background: #10b981;
}

.cad-lp .code-lines .line {
  height: 4px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.2);
  margin-bottom: 7px;
}

.cad-lp .code-lines .line.l1 {
  width: 85%;
}

.cad-lp .code-lines .line.l2.red {
  width: 60%;
  background: var(--red-light);
  box-shadow: 0 0 8px var(--red-light);
}

.cad-lp .code-lines .line.l3 {
  width: 95%;
}

.cad-lp .code-matrix-badge {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: var(--red);
  color: #ffffff;
  font-size: 11px;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(43,140,255, 0.7);
  transition: all 0.5s ease;
}

.cad-lp .process-card:hover .terminal-glass-window {
  transform: rotateX(0deg) scale(1.06);
}

.cad-lp .process-card:hover .code-matrix-badge {
  transform: translate(-4px, -4px) scale(1.15);
}

/* 3D GRAPHIC 04: LAUNCH ROCKET BADGE */
.cad-lp .launch-3d-graphic {
  perspective: 600px;
}

.cad-lp .launch-rocket-badge {
  width: 68px;
  height: 68px;
  border-radius: 20px;
  background: linear-gradient(135deg, var(--red) 0%, #dc2626 100%);
  color: #ffffff;
  display: grid;
  place-items: center;
  box-shadow: 0 10px 30px rgba(43,140,255, 0.8), 0 0 40px rgba(43,140,255, 0.5);
  position: relative;
  z-index: 3;
  transition: all 0.5s ease;
  transform: rotate(-5deg);
}

.cad-lp .launch-sparkle {
  position: absolute;
  color: #fca5a5;
  font-size: 16px;
  transition: all 0.5s ease;
}

.cad-lp .launch-sparkle.s1 {
  top: 25px;
  left: 30px;
}

.cad-lp .launch-sparkle.s2 {
  bottom: 25px;
  right: 30px;
}

.cad-lp .thruster-aura {
  position: absolute;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(43,140,255, 0.6) 0%, transparent 70%);
  animation: pulseAura 2s infinite ease-in-out;
}

@keyframes pulseAura {

  0%,
  100% {
    transform: scale(0.9);
    opacity: 0.5;
  }

  50% {
    transform: scale(1.2);
    opacity: 0.9;
  }
}

.cad-lp .process-card:hover .launch-rocket-badge {
  transform: translateY(-8px) rotate(8deg) scale(1.12);
  box-shadow: 0 15px 40px rgba(43,140,255, 0.95);
}

.cad-lp .process-card .num {
  font: 800 13px/1 var(--font-heading);
  color: var(--red-light);
  background: rgba(43,140,255, 0.12);
  border: 1px solid rgba(43,140,255, 0.3);
  padding: 6px 14px;
  border-radius: 99px;
  margin-bottom: 14px;
  letter-spacing: 0.1em;
}

.cad-lp .process-card h3 {
  font-size: 20px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 10px;
}

.cad-lp .process-card p {
  font-size: 13px;
  line-height: 1.6;
  color: var(--muted);
}

@media (max-width: 980px) {
  .cad-lp .process-connector-line {
    display: none;
  }

  .cad-lp .process-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 580px) {
  .cad-lp .process-grid {
    grid-template-columns: 1fr;
  }
}

/* ----------------------------------------------------
   GET A FREE QUOTE POPUP MODAL (FULL-HEIGHT LEFT HERO)
---------------------------------------------------- */
.cad-lp .quote-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 999999;
  background: rgba(4, 4, 7, 0.27);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.cad-lp .quote-modal-overlay.active {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.cad-lp .quote-modal-card {
  position: relative;
  background: #0d0e16;
  border: 1px solid rgba(43,140,255, 0.35);
  border-radius: 32px;
  padding: 0;
  max-width: 900px;
  width: 100%;
  box-shadow: 0 35px 110px rgba(0, 0, 0, 0.95), 0 0 50px rgba(43,140,255, 0.25);
  transform: scale(0.92) translateY(20px);
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
}

.cad-lp .quote-modal-overlay.active .quote-modal-card {
  transform: scale(1) translateY(0);
}

/* Floating Outer Red Close Button (X) */
.cad-lp .quote-modal-close {
  position: absolute;
  top: 16px;
  right: 18px;
  background: linear-gradient(135deg, #2b8cff 0%, #52a1ff 100%);
  border: 2px solid #040407;
  color: #ffffff;
  font-size: 20px;
  font-weight: 900;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  line-height: 1;
  box-shadow: 0 8px 25px rgba(43,140,255, 0.6);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 20;
}

.cad-lp .quote-modal-close:hover {
  transform: scale(1.12) rotate(90deg);
  box-shadow: 0 12px 30px rgba(43,140,255, 0.85);
}

.cad-lp .quote-modal-body {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  min-height: 490px;
  align-items: stretch;
}

/* Left Column: 100% Height Image Overlay */
.cad-lp .quote-modal-left {
  position: relative;
  height: 100%;
  width: 100%;
  min-height: 490px;
  overflow: hidden;
  border-right: 1px solid rgba(43,140,255, 0.25);
}

.cad-lp .quote-modal-bg-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.6s ease;
}

.cad-lp .quote-modal-left:hover .quote-modal-bg-img {
  transform: scale(1.04);
}

.cad-lp .quote-left-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, #04040700 0%, rgba(4, 4, 7, 0.85) 45%, rgba(4, 4, 7, 0.05) 100%);
  display: flex;
  align-items: flex-end;
  padding: 36px 30px;
  z-index: 2;
}

.cad-lp .quote-left-heading {
  font-family: var(--font-heading);
  font-size: 22px;
  font-weight: 800;
  line-height: 1.3;
  color: #ffffff;
  letter-spacing: -0.4px;
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.8);
}

.cad-lp .quote-red-text {
  color: var(--red-light);
  font-weight: 900;
}

/* Right Column (Form) */
.cad-lp .quote-modal-right {
  display: flex;
  flex-direction: column;
  padding: 42px 42px 42px 32px;
  justify-content: center;
}

.cad-lp .quote-modal-right h2 {
  font-family: var(--font-heading);
  font-size: 32px;
  font-weight: 900;
  color: #ffffff;
  letter-spacing: -0.6px;
  margin-bottom: 6px;
}

.cad-lp .quote-modal-sub {
  color: #94a3b8;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 24px;
}

.cad-lp .quote-modal-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.cad-lp .quote-field {
  position: relative;
  background: rgba(19, 20, 32, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  padding: 3px 16px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
}

.cad-lp .quote-field:focus-within {
  border-color: var(--red);
  box-shadow: 0 0 18px rgba(43,140,255, 0.3);
  background: #181928;
}

.cad-lp .field-icon {
  color: var(--red-light);
  margin-right: 12px;
  flex-shrink: 0;
  transition: color 0.3s ease;
}

.cad-lp .quote-field:focus-within .field-icon {
  color: #ffffff;
}

.cad-lp .quote-input {
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  padding: 12px 0;
  font-size: 14.5px;
  font-family: var(--font-body);
  color: #ffffff;
}

.cad-lp .quote-input::placeholder {
  color: #64748b;
}

.cad-lp .quote-textarea {
  resize: vertical;
  min-height: 52px;
  line-height: 1.5;
}

.cad-lp .quote-field-textarea {
  align-items: flex-start;
  padding-top: 8px;
}

.cad-lp .quote-submit-btn {
  margin-top: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #2b8cff 0%, #52a1ff 100%);
  color: #ffffff;
  padding: 15px 36px;
  border: none;
  border-radius: 50px;
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(43,140,255, 0.5), 0 0 20px rgba(43,140,255, 0.3);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  align-self: flex-start;
}

.cad-lp .quote-submit-btn:hover {
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 16px 40px rgba(43,140,255, 0.75), 0 0 30px rgba(43,140,255, 0.5);
}

/* Responsive Modal */
@media (max-width: 860px) {
  .cad-lp .quote-modal-card {
    max-width: 500px;
    border-radius: 28px;
  }

  .cad-lp .quote-modal-body {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .cad-lp .quote-modal-left {
    height: 220px;
    min-height: 220px;
    border-right: none;
    border-bottom: 1px solid rgba(43,140,255, 0.25);
  }

  .cad-lp .quote-modal-right {
    padding: 32px 24px;
  }

  .cad-lp .quote-left-overlay {
    padding: 24px 20px;
  }

  .cad-lp .quote-left-heading {
    font-size: 18px;
  }

  .cad-lp .quote-modal-right h2 {
    font-size: 26px;
  }

  .cad-lp .quote-submit-btn {
    width: 100%;
  }
}

/* ----------------------------------------------------
   THANK YOU POPUP MODAL (DARK HIGH-TECH THEME)
---------------------------------------------------- */
.cad-lp .thankyou-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 999999;
  background: rgba(4, 4, 7, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.cad-lp .thankyou-modal-overlay.active {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.cad-lp .thankyou-modal-card {
  position: relative;
  background: #0d0e16;
  background-image: radial-gradient(circle at 50% 20%, rgba(43,140,255, 0.2) 0%, transparent 65%);
  border: 1px solid rgba(43,140,255, 0.4);
  border-radius: 32px;
  padding: 44px 40px;
  max-width: 520px;
  width: 100%;
  text-align: center;
  box-shadow: 0 35px 110px rgba(0, 0, 0, 0.95), 0 0 50px rgba(43,140,255, 0.25);
  transform: scale(0.92) translateY(20px);
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.cad-lp .thankyou-modal-overlay.active .thankyou-modal-card {
  transform: scale(1) translateY(0);
}

.cad-lp .thankyou-modal-close {
  position: absolute;
  top: 16px;
  right: 18px;
  background: linear-gradient(135deg, #2b8cff 0%, #52a1ff 100%);
  border: 2px solid #040407;
  color: #ffffff;
  font-size: 20px;
  font-weight: 900;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  line-height: 1;
  box-shadow: 0 8px 25px rgba(43,140,255, 0.6);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
}

.cad-lp .thankyou-modal-close:hover {
  transform: scale(1.12) rotate(90deg);
  box-shadow: 0 12px 30px rgba(43,140,255, 0.85);
}

.cad-lp .thankyou-check-ring {
  width: 86px;
  height: 86px;
  margin: 0 auto 22px;
  border-radius: 50%;
  background: rgba(43,140,255, 0.12);
  border: 2px solid rgba(43,140,255, 0.4);
  color: #52a1ff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 30px rgba(43,140,255, 0.35);
  animation: pulseGlow 2.5s infinite ease-in-out;
}

@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 25px rgba(43,140,255, 0.3); transform: scale(1); }
  50% { box-shadow: 0 0 45px rgba(43,140,255, 0.6); transform: scale(1.05); }
}

.cad-lp .thankyou-modal-card h2 {
  font-family: var(--font-heading);
  font-size: 32px;
  font-weight: 900;
  background: linear-gradient(135deg, #ffffff 0%, #80baff 35%, #4b9dff 68%, #3692ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.6px;
  margin-bottom: 10px;
}

.cad-lp .thankyou-sub {
  color: #94a3b8;
  font-size: 14.5px;
  line-height: 1.6;
  margin-bottom: 26px;
}

.cad-lp .thankyou-info-box {
  background: #131420;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
  margin-bottom: 28px;
}

.cad-lp .thankyou-info-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.cad-lp .info-icon {
  font-size: 20px;
  line-height: 1;
}

.cad-lp .thankyou-info-item strong {
  display: block;
  font-size: 14px;
  color: #ffffff;
  margin-bottom: 2px;
}

.cad-lp .thankyou-info-item p {
  color: #94a3b8;
  font-size: 13px;
  line-height: 1.45;
  margin: 0;
}

.cad-lp .thankyou-timer-note {
  color: #94a3b8;
  font-size: 13.5px;
  margin-top: 10px;
  font-weight: 500;
  letter-spacing: 0.02em;
}
/* ----------------------------------------------------
   LEAD-FORM STATE (React port)
   Invisible in the happy path — these only style the states the standalone
   HTML mock had no markup for: invalid fields, the in-flight button, the
   send-failure notice, and the spam honeypot.
---------------------------------------------------- */
.cad-lp .hp {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.cad-lp .is-invalid,
.cad-lp input.is-invalid,
.cad-lp .field.is-invalid input {
  border-color: var(--red) !important;
  box-shadow: 0 0 0 3px rgba(43,140,255, 0.22) !important;
}

.cad-lp .quote-btn[disabled],
.cad-lp .quote-submit-btn[disabled],
.cad-lp .estimate-form button[disabled] {
  opacity: 0.62;
  cursor: default;
  transform: none;
}

.cad-lp .form-error {
  margin-top: 12px;
  font-size: 12.5px;
  line-height: 1.5;
  color: var(--red-light);
}

.cad-lp .form-error a {
  color: var(--red-light);
  text-decoration: underline;
}

/* Per-field validation message. Sits directly under its input on all three
   forms; the estimate and modal forms lay their children out in a gap-based
   column, so the negative margin keeps the message tight to the field it
   belongs to instead of floating midway to the next one. */
.cad-lp .field-error {
  margin: 6px 0 0;
  font-size: 12px;
  line-height: 1.45;
  font-weight: 500;
  color: var(--red-light);
}

.cad-lp .estimate-form .field-error,
.cad-lp .quote-modal-form .field-error {
  margin-top: -6px;
}

/* ----------------------------------------------------
   INDUSTRY CARD COLORIZED ICONS
---------------------------------------------------- */
.cad-lp .ind-icon-wrapper {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cad-lp .industry-card:hover .ind-icon-wrapper {
  transform: translateY(-3px) scale(1.08);
}

/* ----------------------------------------------------
   WHAT WE BUILD COLORIZED CARDS
---------------------------------------------------- */
.cad-lp .build-card {
  position: relative;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.cad-lp .build-card:hover {
  transform: translateY(-4px);
  border-color: var(--build-border) !important;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4), 0 0 22px var(--build-glow);
}

.cad-lp .build-num-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 3px 10px;
  border-radius: 8px;
  border: 1px solid transparent;
  font-size: 13px;
  font-weight: 800;
  margin-bottom: 16px;
  letter-spacing: 0.05em;
  transition: transform 0.3s ease;
}

.cad-lp .build-card:hover .build-num-badge {
  transform: scale(1.1);
}

/* ----------------------------------------------------
   PROCESS CARD COLOR SCHEME PROGRESSION
---------------------------------------------------- */
/* Step 01: Discover & Strategize (Cyan) */
.cad-lp .process-card.step-01 .num {
  color: #06b6d4;
}
.cad-lp .process-card.step-01 .radar-core-node {
  background: #06b6d4;
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.6);
}
.cad-lp .process-card.step-01 .glass-radar-ring {
  border-color: rgba(6, 182, 212, 0.35);
}
.cad-lp .process-card.step-01:hover {
  border-color: rgba(6, 182, 212, 0.5);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.8), 0 0 25px rgba(6, 182, 212, 0.25);
}

/* Step 02: Design & Prototype (Violet) */
.cad-lp .process-card.step-02 .num {
  color: #a855f7;
}
.cad-lp .process-card.step-02 .screen-front .ui-bar.red {
  background: #a855f7;
}
.cad-lp .process-card.step-02 .screen-front {
  border-color: rgba(168, 85, 247, 0.4);
}
.cad-lp .process-card.step-02 .cursor-node {
  background: #a855f7;
  box-shadow: 0 0 12px rgba(168, 85, 247, 0.6);
}
.cad-lp .process-card.step-02:hover {
  border-color: rgba(168, 85, 247, 0.5);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.8), 0 0 25px rgba(168, 85, 247, 0.25);
}

/* Step 03: Develop & Test (Emerald) */
.cad-lp .process-card.step-03 .num {
  color: #10b981;
}
.cad-lp .process-card.step-03 .code-matrix-badge {
  background: #10b981;
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.6);
}
.cad-lp .process-card.step-03 .line.red {
  background: #10b981;
}
.cad-lp .process-card.step-03:hover {
  border-color: rgba(16, 185, 129, 0.5);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.8), 0 0 25px rgba(16, 185, 129, 0.25);
}

/* Step 04: Launch & Upgrade (Orange) */
.cad-lp .process-card.step-04 .num {
  color: #f97316;
}
.cad-lp .process-card.step-04 .launch-rocket-badge {
  background: linear-gradient(135deg, #f97316 0%, #ef4444 100%);
  box-shadow: 0 0 20px rgba(249, 115, 22, 0.6);
}
.cad-lp .process-card.step-04 .thruster-aura {
  background: radial-gradient(circle, rgba(249, 115, 22, 0.4) 0%, transparent 70%);
}
.cad-lp .process-card.step-04:hover {
  border-color: rgba(249, 115, 22, 0.5);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.8), 0 0 25px rgba(249, 115, 22, 0.25);
}

/* ----------------------------------------------------
   THEME TOGGLE BUTTON & LIGHT MODE SYSTEM
---------------------------------------------------- */
.cad-lp .theme-toggle-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  backdrop-filter: blur(10px);
}

.cad-lp .theme-toggle-btn:hover {
  background: rgba(43,140,255, 0.18);
  border-color: rgba(43,140,255, 0.5);
  color: #ffffff;
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(43,140,255, 0.25);
}

/* --- LIGHT THEME STYLES --- */
.cad-lp.light-theme {
  background-color: #f8fafc;
  color: #0f172a;
}

.cad-lp.light-theme .theme-toggle-btn {
  background: #ffffff;
  border-color: #cbd5e1;
  color: #0f172a;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.cad-lp.light-theme .theme-toggle-btn:hover {
  background: #ffeff1;
  border-color: #2b8cff;
  color: #2b8cff;
  box-shadow: 0 4px 15px rgba(43,140,255, 0.2);
}

.cad-lp.light-theme .header {
  background: rgba(255, 255, 255, 0.88);
  border-bottom-color: #e2e8f0;
  backdrop-filter: blur(16px);
}

.cad-lp.light-theme .contact-pill {
  background: #ffffff;
  border-color: #cbd5e1;
  color: #0f172a;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.cad-lp.light-theme .contact-pill-text .pill-label {
  color: #64748b;
}

.cad-lp.light-theme .contact-pill-text .pill-val {
  color: #0f172a;
}

.cad-lp.light-theme .hero {
  background: linear-gradient(180deg, #f8fafc 0%, #edf2f7 100%);
  border-bottom-color: #e2e8f0;
}

.cad-lp.light-theme .hero-copy .badge {
  background: #ffeff1;
  border-color: rgba(43,140,255, 0.3);
  color: #2b8cff;
}

.cad-lp.light-theme .hero-copy h1 {
  color: #0f172a;
}

.cad-lp.light-theme .hero-lead {
  color: #475569;
}

.cad-lp.light-theme .hero-points li {
  color: #334155;
}

.cad-lp.light-theme .hero-points li span {
  background: #ffeff1;
  color: #2b8cff;
}

/* Light-theme readability for the rebuilt hero: the new pills, cards and
   timeline default to light-on-dark text, which vanishes on the pale hero. */
.cad-lp.light-theme .hero-lead strong {
  color: #0f172a;
}

.cad-lp.light-theme .hero-input-pill {
  border-color: #e2e8f0;
  background: #ffffff;
  color: #334155;
}

.cad-lp.light-theme .hero-input-pill.is-output {
  border-color: rgba(22, 163, 74, 0.45);
  background: #ecfdf3;
  color: #0f172a;
}

.cad-lp.light-theme .hero-input-arrow {
  color: #94a3b8;
}

.cad-lp.light-theme .hero-feature {
  border-color: #e2e8f0;
  background: #ffffff;
}

.cad-lp.light-theme .hero-feature:hover {
  border-color: rgba(43,140,255, 0.4);
}

.cad-lp.light-theme .hero-feature .hf-check {
  background: #ffeff1;
  color: #2b8cff;
}

.cad-lp.light-theme .hero-feature p {
  color: #334155;
}

.cad-lp.light-theme .hero-timeline {
  border-top-color: #e2e8f0;
}

.cad-lp.light-theme .hero-timeline-head {
  color: #64748b;
}

.cad-lp.light-theme .htl-dot {
  background: #ffffff;
}

.cad-lp.light-theme .htl-label {
  color: #334155;
}

.cad-lp.light-theme .proof-rating span,
.cad-lp.light-theme .proof-stat span {
  color: #64748b;
}

.cad-lp.light-theme .proof-stat strong {
  color: #0f172a;
}

.cad-lp.light-theme .proof-line {
  background: #cbd5e1;
}

.cad-lp.light-theme .quote-card {
  background: #ffffff;
  border-color: #cbd5e1;
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.09);
  color: #0f172a;
}

.cad-lp.light-theme .quote-head h2 {
  color: #0f172a;
}

.cad-lp.light-theme .quote-head p {
  color: #64748b;
}

.cad-lp.light-theme .field label {
  color: #475569;
}

.cad-lp.light-theme .field input,
.cad-lp.light-theme .field select,
.cad-lp.light-theme .field textarea {
  background: #f8fafc;
  border-color: #cbd5e1;
  color: #0f172a;
}

.cad-lp.light-theme .field input::placeholder,
.cad-lp.light-theme .field textarea::placeholder {
  color: #94a3b8;
}

.cad-lp.light-theme .stats-section {
  background: #ffffff;
  border-color: #e2e8f0;
}

.cad-lp.light-theme .stats-hero-content h2 {
  color: #0f172a;
}

.cad-lp.light-theme .stats-hero-content p {
  color: #475569;
}

.cad-lp.light-theme .stats-numbers-bar {
  border-top-color: #e2e8f0;
}

.cad-lp.light-theme .stat-bar-item {
  border-right-color: #e2e8f0;
}

.cad-lp.light-theme .stat-bar-item .stat-num {
  color: #0f172a;
}

.cad-lp.light-theme .stat-bar-item .stat-label {
  color: #334155;
}

.cad-lp.light-theme .stats-footer-caption {
  color: #64748b;
}

.cad-lp.light-theme .consult-box {
  background-color: #ffffff;
  background-image: linear-gradient(90deg, #fff 40%, rgba(255, 255, 255, 0.52) 70%, rgba(255, 255, 255, 0.32) 100%), url('../cad/consult-bg-red.png');
  border-color: #ffc1c7;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
}

.cad-lp.light-theme .consult-content h2 {
  background: linear-gradient(135deg, #3d0c1e 0%, #7a152d 35%, #1e6bc8 70%, #2b8cff 100%) !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}

.cad-lp.light-theme .consult-content p {
  color: #475569 !important;
}

.cad-lp.light-theme .process-section {
  background: #f8fafc;
}

.cad-lp.light-theme .center-heading h2 {
  color: #0f172a;
}

.cad-lp.light-theme .center-heading p {
  color: #475569;
}

.cad-lp.light-theme .process-card {
  background: #ffffff;
  border-color: #e2e8f0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
}

.cad-lp.light-theme .process-card:hover {
  background: #ffffff !important;
  border-color: rgba(43,140,255, 0.45) !important;
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 14px 35px rgba(15, 23, 42, 0.08), 0 0 20px rgba(43,140,255, 0.12) !important;
}

.cad-lp.light-theme .process-card.step-01:hover {
  border-color: rgba(6, 182, 212, 0.5) !important;
  box-shadow: 0 14px 35px rgba(15, 23, 42, 0.08), 0 0 20px rgba(6, 182, 212, 0.18) !important;
}

.cad-lp.light-theme .process-card.step-02:hover {
  border-color: rgba(168, 85, 247, 0.5) !important;
  box-shadow: 0 14px 35px rgba(15, 23, 42, 0.08), 0 0 20px rgba(168, 85, 247, 0.18) !important;
}

.cad-lp.light-theme .process-card.step-03:hover {
  border-color: rgba(16, 185, 129, 0.5) !important;
  box-shadow: 0 14px 35px rgba(15, 23, 42, 0.08), 0 0 20px rgba(16, 185, 129, 0.18) !important;
}

.cad-lp.light-theme .process-card.step-04:hover {
  border-color: rgba(249, 115, 22, 0.5) !important;
  box-shadow: 0 14px 35px rgba(15, 23, 42, 0.08), 0 0 20px rgba(249, 115, 22, 0.18) !important;
}

.cad-lp.light-theme .process-card h3 {
  color: #0f172a;
}

.cad-lp.light-theme .process-card p {
  color: #64748b;
}

.cad-lp.light-theme .process-image {
  background: #f8fafc;
  border-color: #e2e8f0;
}

.cad-lp.light-theme .industries {
  background: #ffffff;
}

.cad-lp.light-theme .industry-grid article {
  background: #ffffff;
  border-color: #e2e8f0;
}

.cad-lp.light-theme .industry-grid h3 {
  color: #0f172a;
}

.cad-lp.light-theme .industry-grid p {
  color: #64748b;
}

.cad-lp.light-theme .build-section {
  background: #f8fafc;
}

.cad-lp.light-theme .build-grid article {
  background: #ffffff;
  border-color: #e2e8f0;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.04);
}

.cad-lp.light-theme .build-grid h3 {
  color: #0f172a;
}

.cad-lp.light-theme .build-grid p {
  color: #64748b;
}

.cad-lp.light-theme .awards-section {
  background: #ffffff;
  border-top-color: #e2e8f0;
}

.cad-lp.light-theme .awards-intro-card {
  background: #f8fafc;
  border-color: #e2e8f0;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.05);
}

.cad-lp.light-theme .awards-intro-card h2 {
  color: #0f172a;
}

.cad-lp.light-theme .awards-intro-card p {
  color: #475569;
}

.cad-lp.light-theme .featured-award-card {
  background: #ffffff;
  border-color: #e2e8f0;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.06);
}

.cad-lp.light-theme .badge-card {
  background: #ffffff;
  border-color: #e2e8f0;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
}

.cad-lp.light-theme .reviews-marquee-section {
  background: #f8fafc;
  border-top-color: #e2e8f0;
}

/* LIGHT THEME BASE HEADINGS & TITLES (CRISP DARK SLATE) */
.cad-lp.light-theme h1,
.cad-lp.light-theme h2,
.cad-lp.light-theme h3,
.cad-lp.light-theme h4,
.cad-lp.light-theme h5,
.cad-lp.light-theme h6,
.cad-lp.light-theme .hero-copy h1,
.cad-lp.light-theme .section-title-row h2,
.cad-lp.light-theme .center-heading h2,
.cad-lp.light-theme .stats-hero-content h2,
.cad-lp.light-theme .awards-intro-card h2,
.cad-lp.light-theme .reviews-header h2,
.cad-lp.light-theme .estimate-copy h2,
.cad-lp.light-theme .faq-layout h2,
.cad-lp.light-theme .faq-layout > div:first-child h2,
.cad-lp.light-theme .offices-header-row h2,
.cad-lp.light-theme .final-wrap h2,
.cad-lp.light-theme .press-strip-title,
.cad-lp.light-theme .tech-heading,
.cad-lp.light-theme .quote-left-heading,
.cad-lp.light-theme #cadQuoteModalTitle,
.cad-lp.light-theme #cadThankyouModalTitle {
  color: #0f172a !important;
}

/* LIGHT THEME ACCENT GRADIENT HEADINGS & SPANS (DARK BURGUNDY TO VIVID RED) */
.cad-lp.light-theme .hero h1 span,
.cad-lp.light-theme .section-title-row h2 span,
.cad-lp.light-theme .center-heading h2 span,
.cad-lp.light-theme .accent-text,
.cad-lp.light-theme .stats-hero-content h2 .accent-text,
.cad-lp.light-theme .stats-numbers-bar .stat-num,
.cad-lp.light-theme .consult-content h2,
.cad-lp.light-theme .awards-intro-card h2 .accent-text,
.cad-lp.light-theme .reviews-header h2,
.cad-lp.light-theme .reviews-header h2 span,
.cad-lp.light-theme .estimate-copy h2,
.cad-lp.light-theme .faq-layout > div:first-child h2,
.cad-lp.light-theme .offices-header-row h2 {
  background: linear-gradient(135deg, #3d0c1e 0%, #7a152d 35%, #1e6bc8 70%, #2b8cff 100%) !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}

.cad-lp.light-theme .reviews-header p {
  color: #64748b;
}

.cad-lp.light-theme .review-card {
  background: #ffffff;
  border-color: #e2e8f0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.cad-lp.light-theme .review-text {
  color: #334155;
}

.cad-lp.light-theme .review-user-info strong {
  color: #0f172a;
}

.cad-lp.light-theme .review-user-info span {
  color: #64748b;
}

.cad-lp.light-theme .marquee-wrapper::before {
  background: linear-gradient(to right, #f8fafc 0%, rgba(248, 250, 252, 0) 100%);
}

.cad-lp.light-theme .marquee-wrapper::after {
  background: linear-gradient(to left, #f8fafc 0%, rgba(248, 250, 252, 0) 100%);
}

.cad-lp.light-theme .estimate-section {
  background: #ffffff;
  border-color: #e2e8f0;
}

.cad-lp.light-theme .estimate-copy h2 {
  background: linear-gradient(135deg, #3d0c1e 0%, #8c1932 38%, #1e6bc8 70%, #2b8cff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cad-lp.light-theme .estimate-sub {
  color: #475569;
}

.cad-lp.light-theme .next-steps-kicker {
  color: #64748b;
  border-top-color: #e2e8f0;
}

.cad-lp.light-theme .next-step-item {
  border-bottom-color: #e2e8f0;
}

.cad-lp.light-theme .next-step-item strong {
  color: #0f172a;
}

.cad-lp.light-theme .next-step-item p {
  color: #475569;
}

.cad-lp.light-theme .estimate-form {
  background: #fff;
  border-color: #2a88f8;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.23);
}

.cad-lp.light-theme .form-field-group label {
  color: #475569;
}

.cad-lp.light-theme .form-field-group input,
.cad-lp.light-theme .form-field-group select,
.cad-lp.light-theme .form-field-group textarea {
  background: #ffffff;
  border-color: #cbd5e1;
  color: #0f172a;
}

.cad-lp.light-theme select.country-code-select {
  background: #ffffff !important;
  color: #0f172a !important;
  border-color: #cbd5e1 !important;
}

.cad-lp.light-theme .form-bottom-note {
  color: #64748b;
}

.cad-lp.light-theme .faq-section {
  background: #f8fafc;
}

.cad-lp.light-theme .faq-layout > div:first-child h2 {
  background: linear-gradient(135deg, #3d0c1e 0%, #8c1932 38%, #1e6bc8 70%, #2b8cff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cad-lp.light-theme .faq-list details {
  border-bottom-color: #e2e8f0;
}

.cad-lp.light-theme .faq-list summary {
  color: #0f172a;
}

.cad-lp.light-theme .faq-list summary:hover {
  color: #2b8cff;
}

.cad-lp.light-theme .faq-list p {
  color: #475569;
}

.cad-lp.light-theme .final-cta {
  background: linear-gradient(135deg, #ffffff 0%, #fff5f6 50%, #ffecee 100%);
  border-color: #e2e8f0;
  color: #0f172a;
}

.cad-lp.light-theme .final-wrap h2 {
  color: #0f172a;
}

/* --- OUR GLOBAL OFFICES SECTION (LIGHT THEME) --- */
.cad-lp.light-theme .offices-section {
  background: #ffffff;
  border-top-color: #e2e8f0;
}

.cad-lp.light-theme .offices-section .section-kicker {
  color: #2b8cff;
  background: rgba(43,140,255, 0.08);
  border-color: rgba(43,140,255, 0.2);
}

.cad-lp.light-theme .offices-header-row h2 {
  background: linear-gradient(135deg, #3d0c1e 0%, #8c1932 38%, #1e6bc8 70%, #2b8cff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cad-lp.light-theme .offices-view-all {
  color: #2b8cff;
}

.cad-lp.light-theme .offices-view-all:hover {
  color: #0f172a;
}

.cad-lp.light-theme .office-card {
  background: #ffffff;
  border-color: #e2e8f0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.cad-lp.light-theme .office-card:hover {
  border-color: rgba(43,140,255, 0.5);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08), 0 0 25px rgba(43,140,255, 0.15);
}

.cad-lp.light-theme .office-thumb-wrap {
  background: #f1f5f9;
}

.cad-lp.light-theme .office-card-body h3 {
  color: #0f172a;
}

.cad-lp.light-theme .office-country {
  color: #64748b;
}

.cad-lp.light-theme .office-address {
  color: #475569;
}

.cad-lp.light-theme .office-map-link {
  color: #2b8cff;
}

.cad-lp.light-theme .office-map-link:hover {
  color: #0f172a;
}

/* --- FOOTER (LIGHT THEME) --- */
.cad-lp.light-theme footer {
  background: #f8fafc;
  color: #0f172a;
  border-top: 1px solid #e2e8f0;
}

.cad-lp.light-theme .footer-wrap strong {
  color: #0f172a;
}

.cad-lp.light-theme .footer-wrap a,
.cad-lp.light-theme .footer-wrap span {
  color: #475569;
}

.cad-lp.light-theme .footer-wrap a:hover {
  color: #2b8cff;
}

.cad-lp.light-theme .footer-social-row a.social-circle-btn,
.cad-lp.light-theme a.social-circle-btn {
  background: #ffffff !important;
  border-color: #cbd5e1 !important;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06) !important;
}

/* X (Twitter) & Threads are white in dark theme, so turn them dark slate in light theme for crisp contrast */
.cad-lp.light-theme a.social-circle-btn[aria-label="X (Twitter)"] svg,
.cad-lp.light-theme a.social-circle-btn[aria-label="X (Twitter)"] svg path,
.cad-lp.light-theme a.social-circle-btn[aria-label="Threads"] svg,
.cad-lp.light-theme a.social-circle-btn[aria-label="Threads"] svg path {
  fill: #0f172a !important;
}

/* Light Theme Social Button Hover State - Matches Dark Theme hover style while retaining original brand icon colors */
.cad-lp.light-theme .footer-social-row a.social-circle-btn:hover,
.cad-lp.light-theme a.social-circle-btn:hover {
  background: rgba(43,140,255, 0.12) !important;
  border-color: #2b8cff !important;
  transform: translateY(-3px) scale(1.08) !important;
  box-shadow: 0 6px 18px rgba(43,140,255, 0.25) !important;
}

.cad-lp.light-theme .footer-standards-wrap {
  border-top-color: #e2e8f0;
}

.cad-lp.light-theme .standards-label {
  color: #64748b;
}

.cad-lp.light-theme .standard-pill {
  background: #ffffff;
  border-color: #e2e8f0;
  color: #475569;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
}

.cad-lp.light-theme .standard-pill strong {
  color: #0f172a;
}

.cad-lp.light-theme .footer-bottom {
  border-top-color: #e2e8f0;
  color: #64748b;
}

.cad-lp.light-theme .footer-bottom a {
  color: #475569;
}

.cad-lp.light-theme .footer-bottom a:hover {
  color: #2b8cff;
}

/* PRESS STRIP LOGO CARDS (WHITE THEME BACKGROUND) */
.cad-lp.light-theme .logo-item {
  background: #ffffff !important;
  border: 1px solid #e2e8f0 !important;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.05) !important;
}

.cad-lp.light-theme .logo-item:hover {
  background: #ffffff !important;
  border-color: rgba(43,140,255, 0.45) !important;
  box-shadow: 0 10px 25px rgba(43,140,255, 0.18) !important;
}

.cad-lp.light-theme .logo-item text {
  fill: #0f172a !important;
}

.cad-lp.light-theme .logo-item text tspan[fill="#4285F4"] { fill: #4285F4 !important; }
.cad-lp.light-theme .logo-item text tspan[fill="#EA4335"] { fill: #EA4335 !important; }
.cad-lp.light-theme .logo-item text tspan[fill="#FBBC05"] { fill: #FBBC05 !important; }
.cad-lp.light-theme .logo-item text tspan[fill="#34A853"] { fill: #34A853 !important; }

/* PORTFOLIO SHOWCASE CARDS (WHITE THEME OVERRIDE FOR DARK CARD IMAGES) */
.cad-lp.light-theme .showcase-info h3 {
  color: #ffffff !important;
  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.9) !important;
}

.cad-lp.light-theme .showcase-info p {
  color: rgba(255, 255, 255, 0.9) !important;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.8) !important;
}

/* MOBILE & TABLET RESPONSIVE REFINEMENTS (DARK & LIGHT THEMES) */
@media (max-width: 580px) {
  .cad-lp .nav-wrap {
    gap: 8px !important;
  }

  .cad-lp .nav-right {
    gap: 6px !important;
  }

  .cad-lp .header-cta {
    padding: 8px 12px !important;
    font-size: 11.5px !important;
    white-space: nowrap !important;
    line-height: 1 !important;
  }

  .cad-lp .theme-toggle-btn {
    padding: 6px 10px !important;
    font-size: 11.5px !important;
    gap: 4px !important;
    white-space: nowrap !important;
  }

  /* Logo, number and CTA share one row, so the logo gives up width first — it
     is the element that stays recognisable when scaled. */
  .cad-lp .header-phone-mobile {
    padding: 6px 9px !important;
    font-size: 11.5px !important;
    gap: 4px !important;
  }

  .cad-lp .nav-wrap img {
    height: 28px !important;
  }

  .cad-lp .hero h1 {
    font-size: clamp(28px, 7.5vw, 36px);
    line-height: 1.16;
  }

  .cad-lp .hero-copy .badge {
    font-size: 11px;
    padding: 6px 12px;
  }

  .cad-lp .consult-box {
    padding: 28px 20px;
    border-radius: 20px;
  }

  .cad-lp .consult-pill-btn {
    width: 100%;
    padding: 14px 24px;
    font-size: 15px;
  }

  .cad-lp .estimate-form {
    padding: 24px 18px;
    border-radius: 20px;
  }

  .cad-lp .awards-badge-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .cad-lp .awards-intro-card,
  .cad-lp .featured-award-card {
    padding: 24px 20px;
    border-radius: 20px;
  }

  .cad-lp .offices-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 400px) {
  .cad-lp .header-cta {
    padding: 7px 10px !important;
    font-size: 11px !important;
  }

  .cad-lp .theme-toggle-btn {
    padding: 5px 8px !important;
    font-size: 11px !important;
  }

  /* Below ~400px the pill's own padding is what stops the three items fitting,
     so shed the chrome and let the number sit as plain text. The digits stay
     full size — they are the reason this element replaced the theme toggle. */
  .cad-lp .header-phone-mobile {
    padding: 4px 0 !important;
    font-size: 11px !important;
    gap: 4px !important;
    border-color: transparent !important;
    background: transparent !important;
  }

  .cad-lp .nav-wrap img {
    height: 26px !important;
  }

  .cad-lp .nav-wrap {
    gap: 8px !important;
  }

  .cad-lp .nav-right {
    gap: 8px !important;
  }
}


`,l=n(),u=/[^0-9\s\-+()]/g,d=/^[^\s@.][^\s@]*@[^\s@]+\.[a-zA-Z]{2,}$/,f=/\p{L}/u,p=/[<>]/,m=/^(\d)\1+$/,h=new Map;for(let e=0;e<=9;e++)for(let t of[1632,1776,2406])h.set(String.fromCharCode(t+e),String(e));var g=e=>e.replace(/[٠-٩۰-۹०-९]/g,e=>h.get(e)||e),_=[{iso:`US`,dial:`+1`,country:`United States`,label:`🇺🇸 +1`},{iso:`GB`,dial:`+44`,country:`United Kingdom`,label:`🇬🇧 +44`},{iso:`AE`,dial:`+971`,country:`United Arab Emirates`,label:`🇦🇪 +971`},{iso:`PK`,dial:`+92`,country:`Pakistan`,label:`🇵🇰 +92`},{iso:`AU`,dial:`+61`,country:`Australia`,label:`🇦🇺 +61`},{iso:`SA`,dial:`+966`,country:`Saudi Arabia`,label:`🇸🇦 +966`},{iso:`IN`,dial:`+91`,country:`India`,label:`🇮🇳 +91`},{iso:`DE`,dial:`+49`,country:`Germany`,label:`🇩🇪 +49`},{iso:`FR`,dial:`+33`,country:`France`,label:`🇫🇷 +33`},{iso:`SG`,dial:`+65`,country:`Singapore`,label:`🇸🇬 +65`}],v=new Map(_.map(e=>[e.iso,e])),y=[`Mobile App Development`,`iOS App Development`,`Android App Development`,`Cross-Platform App`,`AI-Powered App`,`App Redesign / Upgrade`],b=[{img:`/case/checkmate/checkmate-01.webp`,alt:`Checkmate`,title:`Checkmate`,desc:`Doubled Peak-Hour Order Capacity`,slug:`checkmate`},{img:`/case/lead-scout/lead-scout-01.webp`,alt:`Lead Scout`,title:`Lead Scout`,desc:`About 35–40% Less Research Time`,slug:`lead-scout`}];function V({density:e=2.2,className:t=``,opacity:n=.9}){let r=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let t=r.current;if(!t)return;let n=t.getContext(`2d`),i=0,a=0,o,s=0,c=[`255,43,63`,`255,82,99`,`255,120,70`,`255,180,140`,`239,68,68`],l={x:-1e3,y:-1e3,active:!1},u=e=>{if(!t)return;let n=t.getBoundingClientRect();l.x=e.clientX-n.left,l.y=e.clientY-n.top,l.active=!0},d=()=>{l.active=!1};window.addEventListener(`mousemove`,u,{passive:!0}),document.addEventListener(`mouseleave`,d,{passive:!0});let f=()=>{let e=t.getBoundingClientRect();i=e.width,a=e.height;let r=Math.min(window.devicePixelRatio||1,2);t.width=Math.max(1,i*r),t.height=Math.max(1,a*r),n.setTransform(r,0,0,r,0,0)};f();let p=new ResizeObserver(f);p.observe(t);let m=typeof window<`u`&&window.innerWidth<768,h=Math.round((m?220:450)*e),g=Array.from({length:h},()=>{let e=c[Math.random()*c.length|0],t=Math.random()>.82,n=t?2.2+Math.random()*2.2:.6+Math.random()*1.2,r=t?.6+Math.random()*.35:.2+Math.random()*.7,o=.015+Math.random()*.04;return{x:Math.random()*i,y:Math.random()*a,vx:(Math.random()-.5)*.45,vy:-.15-Math.random()*.5,r:n,c:e,isBig:t,baseAlpha:r,pulseSpeed:o,phase:Math.random()*Math.PI*2,wobble:.2+Math.random()*.6}}),_=!0,v=new IntersectionObserver(e=>{_=e[0].isIntersecting},{threshold:.01});v.observe(t);let y=m?55:75,b=m?90:140,x=()=>{if(o=requestAnimationFrame(x),_){s++,n.clearRect(0,0,i,a);for(let e of g){if(e.x+=e.vx+Math.sin(s*.018+e.y*.006)*e.wobble,e.y+=e.vy,l.active){let t=e.x-l.x,n=e.y-l.y,r=Math.hypot(t,n);if(r<b&&r>0){let i=(1-r/b)*4.2;e.x+=t/r*i,e.y+=n/r*i}}e.y<-12&&(e.y=a+12,e.x=Math.random()*i),e.x<-12&&(e.x=i+12),e.x>i+12&&(e.x=-12)}for(let e=0;e<g.length;e++){let t=m?3:2;if(e%t===0)for(let r=e+1;r<g.length;r+=t){let t=g[e],i=g[r],a=t.x-i.x,o=t.y-i.y,s=Math.hypot(a,o);if(s<y){let e=(1-s/y)*.28;n.strokeStyle=`rgba(${t.c}, ${e})`,n.lineWidth=.9,n.beginPath(),n.moveTo(t.x,t.y),n.lineTo(i.x,i.y),n.stroke()}}}if(l.active)for(let e of g){let t=e.x-l.x,r=e.y-l.y,i=Math.hypot(t,r);i<130&&(n.strokeStyle=`rgba(43,140,255, ${(1-i/130)*.55})`,n.lineWidth=1.1,n.beginPath(),n.moveTo(l.x,l.y),n.lineTo(e.x,e.y),n.stroke())}for(let e of g){let t=Math.max(.12,e.baseAlpha+Math.sin(s*e.pulseSpeed+e.phase)*.35);if(e.isBig){n.save(),n.shadowColor=`rgba(${e.c}, 0.9)`,n.shadowBlur=e.r*6,n.fillStyle=`rgba(${e.c}, ${t})`,n.beginPath(),n.arc(e.x,e.y,e.r,0,Math.PI*2),n.fill();let r=e.r*(2.2+Math.sin(s*.03+e.phase)*.8);n.strokeStyle=`rgba(${e.c}, ${t*.4})`,n.lineWidth=.8,n.beginPath(),n.arc(e.x,e.y,r,0,Math.PI*2),n.stroke(),n.restore()}else n.fillStyle=`rgba(${e.c}, ${t})`,n.beginPath(),n.arc(e.x,e.y,e.r,0,Math.PI*2),n.fill()}}};return x(),()=>{cancelAnimationFrame(o),window.removeEventListener(`mousemove`,u),document.removeEventListener(`mouseleave`,d),v.disconnect(),p.disconnect()}},[e]),(0,l.jsx)(`canvas`,{ref:r,className:`pointer-events-none absolute inset-0 h-full w-full ${t}`,style:{opacity:n},"aria-hidden":!0})}function H({className:e=``,opacity:t=.85}){let n=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let e=n.current;if(!e)return;let t=e.getContext(`2d`),r=0,i=0,a,o=0,s={x:-1e3,y:-1e3,targetX:-1e3,targetY:-1e3,active:!1},c=t=>{if(!e)return;let n=e.getBoundingClientRect();s.targetX=t.clientX-n.left,s.targetY=t.clientY-n.top,s.active=!0},l=()=>{s.active=!1};window.addEventListener(`mousemove`,c,{passive:!0}),document.addEventListener(`mouseleave`,l,{passive:!0});let u=()=>{let n=e.getBoundingClientRect();r=n.width,i=n.height;let a=Math.min(window.devicePixelRatio||1,2);e.width=Math.max(1,r*a),e.height=Math.max(1,i*a),t.setTransform(a,0,0,a,0,0),s.x<0&&(s.x=r/2,s.y=i/2,s.targetX=r/2,s.targetY=i/2)};u();let d=new ResizeObserver(u);d.observe(e);let f=!0,p=new IntersectionObserver(e=>{f=e[0].isIntersecting},{threshold:.01});p.observe(e);let m=()=>{if(a=requestAnimationFrame(m),f){o++,s.x+=(s.targetX-s.x)*.08,s.y+=(s.targetY-s.y)*.08,t.clearRect(0,0,r,i);for(let e=0;e<r+45;e+=45)for(let n=0;n<i+45;n+=45){let r=e-s.x,i=n-s.y,a=Math.hypot(r,i);if(a<180){let r=(1-a/180)*.75,i=(1-a/180)*3+1;t.save(),t.shadowColor=`rgba(43,140,255, 0.9)`,t.shadowBlur=8,t.fillStyle=`rgba(255, 60, 80, ${r})`,t.beginPath(),t.arc(e,n,i,0,Math.PI*2),t.fill(),t.restore()}}if(s.active&&s.x>0&&s.x<r){let e=s.x,n=s.y;t.save(),t.strokeStyle=`rgba(255, 50, 70, 0.85)`,t.lineWidth=1.4;let r=42+Math.sin(o*.05)*4;t.beginPath(),t.arc(e,n,r,0,Math.PI*2),t.stroke(),t.strokeStyle=`rgba(255, 90, 110, 0.65)`,t.setLineDash([4,4]),t.beginPath(),t.arc(e,n,r+14,0,Math.PI*2),t.stroke(),t.setLineDash([]),t.strokeStyle=`rgba(255, 60, 80, 0.9)`,t.lineWidth=1.6,t.beginPath(),t.moveTo(e-r-12,n),t.lineTo(e-r+18-12,n),t.stroke(),t.beginPath(),t.moveTo(e+r+12,n),t.lineTo(e+r-18+12,n),t.stroke(),t.beginPath(),t.moveTo(e,n-r-12),t.lineTo(e,n-r+18-12),t.stroke(),t.beginPath(),t.moveTo(e,n+r+12),t.lineTo(e,n+r-18+12),t.stroke(),t.fillStyle=`#2b8cff`,t.beginPath(),t.arc(e,n,3,0,Math.PI*2),t.fill(),t.fillStyle=`rgba(255, 140, 155, 0.95)`,t.font=`700 10.5px monospace`,t.fillText(`digiworks AI // MOBILE LABS`,e+r+16,n-10),t.fillStyle=`rgba(255, 255, 255, 0.85)`,t.font=`600 9.5px monospace`,t.fillText(`7+ YEARS · 1000+ APPS SHIPPED`,e+r+16,n+4),t.fillStyle=`rgba(82,161,255, 0.9)`,t.fillText(`95% CUSTOMER RETENTION`,e+r+16,n+18),t.restore()}}};return m(),()=>{cancelAnimationFrame(a),window.removeEventListener(`mousemove`,c),document.removeEventListener(`mouseleave`,l),p.disconnect(),d.disconnect()}},[]),(0,l.jsx)(`canvas`,{ref:n,className:`pointer-events-none absolute inset-0 h-full w-full ${e}`,style:{opacity:t},"aria-hidden":!0})}function U({source:e,fields:t,onDone:n}){let[r,a]=(0,s.useState)({name:``,email:``,phone:``,service:y[0],brief:``,website:``}),[o,c]=(0,s.useState)({}),[l,h]=(0,s.useState)(!1),[_,b]=(0,s.useState)(!1),x=(0,s.useRef)(null),S=(0,s.useRef)(null),C=(0,s.useRef)(!1);(0,s.useEffect)(()=>{C.current&&(C.current=!1,S.current?.querySelector(`[aria-invalid="true"]`)?.focus())},[o]);let w=e=>t=>{let n=t.target.value,r=e===`phone`?g(n).replace(u,``):n;a(t=>({...t,[e]:r})),c(t=>t[e]?{...t,[e]:void 0}:t)};async function T(o){if(o.preventDefault(),l)return;b(!1);let s={},u=r.name.trim();if(u.length<2?s.name=`Please enter your full name.`:(!f.test(u)||p.test(u))&&(s.name=`Please enter a real name.`),r.email.trim()?d.test(r.email.trim())||(s.email=`Enter a valid email, e.g. john@company.com`):s.email=`Please enter your email address.`,t.includes(`phone`)){let e=r.phone.replace(/[^0-9]/g,``);e?e.length<7?s.phone=`That number looks too short.`:m.test(e)&&(s.phone=`Please enter a real phone number.`):s.phone=`Please enter your phone number.`}if(c(s),Object.keys(s).length){C.current=!0;return}h(!0);let g=x.current?v.get(x.current.value):null,_={name:u,email:r.email.trim(),...t.includes(`phone`)&&{phone:g?`${g.dial} ${r.phone.trim()}`.trim():r.phone.trim(),...g&&{country:g.country}},...t.includes(`service`)&&{service:r.service},...t.includes(`brief`)&&{message:r.brief.trim()},website:r.website,page:`/custom-mobile-app-development-openai`},S=await i(_,{source:e,mailtoSubject:`Custom app development enquiry — ${_.name}`,mailtoBodyFields:[`name`,`email`,`phone`,`country`,`service`,`message`]});if(h(!1),!S.ok){b(!0);return}a({name:``,email:``,phone:``,service:y[0],brief:``,website:``}),n()}return{values:r,set:w,bad:e=>o[e]?`is-invalid`:void 0,errId:t=>o[t]?`${e.replace(/\W+/g,`-`)}-${t}-err`:void 0,errors:o,busy:l,failed:_,codeRef:x,formRef:S,onSubmit:T}}function W({form:e,name:t}){let n=e.errors[t];return n?(0,l.jsx)(`p`,{className:`field-error`,id:e.errId(t),role:`alert`,children:n}):null}function G(e){try{delete window[e]}catch{window[e]=void 0}}function K(e){[`Backspace`,`Delete`,`ArrowLeft`,`ArrowRight`,`Tab`,`Enter`,`Home`,`End`].includes(e.key)||e.ctrlKey||e.metaKey||/^[a-zA-Z]$/.test(e.key)&&e.preventDefault()}function q({innerRef:e,name:t}){return(0,l.jsx)(`select`,{className:`country-code-select`,ref:e,name:t,defaultValue:`US`,"aria-label":`Country code`,children:_.map(e=>(0,l.jsx)(`option`,{value:e.iso,children:e.label},e.iso))})}function J({f:e}){return(0,l.jsxs)(`div`,{className:`hp`,"aria-hidden":`true`,children:[(0,l.jsx)(`label`,{htmlFor:`hp-${e.id}`,children:`Website`}),(0,l.jsx)(`input`,{id:`hp-${e.id}`,type:`text`,tabIndex:-1,autoComplete:`off`,value:e.form.values.website,onChange:e.form.set(`website`)})]})}function Y({show:e}){return e?(0,l.jsxs)(`p`,{className:`form-error`,role:`alert`,children:[`We couldn't send your details just now. Please try again, or email`,` `,(0,l.jsx)(`a`,{href:`mailto:[EMAIL]`,children:`[EMAIL]`}),`.`]}):null}function X(){let[e,t]=(0,s.useState)(`dark`),[n,i]=(0,s.useState)(!1),[u,d]=(0,s.useState)(!1),[f,p]=(0,s.useState)(3),m=(0,s.useCallback)(()=>{t(e=>e===`dark`?`light`:`dark`)},[]),h=(0,s.useCallback)(()=>i(!1),[]),g=(0,s.useCallback)(()=>d(!1),[]),_=(0,s.useCallback)(e=>{e.preventDefault(),i(!0)},[]),v=(0,s.useCallback)(()=>i(!0),[]),w=(0,s.useRef)(!1),k=(0,s.useCallback)(()=>{i(!1),p(3),d(!0),typeof window<`u`&&typeof window.oaiq==`function`&&window.oaiq(`measure`,`lead_created`,{type:`customer_action`})},[]),X=U({source:`custom-mobile-app-development-openai (hero)`,fields:[`phone`,`service`],onDone:k}),Z=U({source:`custom-mobile-app-development-openai (estimate)`,fields:[`phone`],onDone:k}),Q=U({source:`custom-mobile-app-development-openai (quote modal)`,fields:[`phone`,`brief`],onDone:k});(0,s.useEffect)(()=>(document.body.classList.add(`cad-active`),()=>document.body.classList.remove(`cad-active`)),[]),(0,s.useEffect)(()=>{window.Tawk_API=window.Tawk_API||{},window.Tawk_LoadStart=new Date;let e=document.createElement(`script`);e.async=!0,e.src=`https://embed.tawk.to/6a45c0f6539b7e1d4b7d2cd6/1jsg7jhmn`,e.charset=`UTF-8`,e.setAttribute(`crossorigin`,`*`);let t=document.getElementsByTagName(`script`)[0];return t.parentNode.insertBefore(e,t),()=>{e.remove(),G(`Tawk_API`),G(`Tawk_LoadStart`),document.querySelectorAll(`iframe[src*="tawk.to"], #tawkchat-container, .tawk-widget`).forEach(e=>e.remove())}},[]),(0,s.useEffect)(()=>{window.clarity=window.clarity||function(){(window.clarity.q=window.clarity.q||[]).push(arguments)};let e=document.createElement(`script`);e.async=1,e.src=`https://www.clarity.ms/tag/xk1krwzglw`;let t=document.getElementsByTagName(`script`)[0];return t.parentNode.insertBefore(e,t),()=>{e.remove(),G(`clarity`)}},[]),(0,s.useEffect)(()=>{window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},gtag(`js`,new Date),gtag(`config`,`G-86JJ6NBVL7`);let e=document.createElement(`script`);e.async=!0,e.src=`https://www.googletagmanager.com/gtag/js?id=G-86JJ6NBVL7`;let t=document.getElementsByTagName(`script`)[0];return t.parentNode.insertBefore(e,t),()=>{e.remove(),G(`gtag`)}},[]);let $=n||u;return(0,s.useEffect)(()=>{if(!$)return;let e=document.body.style.overflow;document.body.style.overflow=`hidden`;let t=e=>{e.key===`Escape`&&(i(!1),d(!1))};return document.addEventListener(`keydown`,t),()=>{document.body.style.overflow=e,document.removeEventListener(`keydown`,t)}},[$]),(0,s.useEffect)(()=>{if(!u)return;let e=setInterval(()=>{p(t=>t<=1?(clearInterval(e),d(!1),0):t-1)},1e3);return()=>clearInterval(e)},[u]),(0,s.useEffect)(()=>{let e=()=>{w.current||n||u||(w.current=!0,v())},t=t=>{t.clientY<=0&&!t.relatedTarget&&e()};document.addEventListener(`mouseleave`,t);let r=typeof window<`u`&&window.matchMedia?.(`(pointer: coarse)`)?.matches||typeof window<`u`&&window.innerWidth<768,i;return r&&(i=setTimeout(e,4e4)),()=>{document.removeEventListener(`mouseleave`,t),i&&clearTimeout(i)}},[n,u,v]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`Custom Mobile App Development | DigiWorks AI`,description:`Custom mobile app development for startups and businesses. Build iOS, Android, cross-platform and AI-powered apps with DigiWorks AI.`,path:`/custom-mobile-app-development-openai`,noindex:!0}),(0,l.jsxs)(r,{children:[(0,l.jsx)(`link`,{rel:`preconnect`,href:`https://fonts.gstatic.com`,crossOrigin:``}),(0,l.jsx)(`link`,{rel:`stylesheet`,href:`https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Manrope:wght@600;700;800&display=swap`})]}),(0,l.jsx)(`style`,{dangerouslySetInnerHTML:{__html:c}}),(0,l.jsxs)(`div`,{className:`cad-lp ${e===`light`?`light-theme`:``}`,children:[(0,l.jsx)(H,{opacity:e===`light`?.65:.85,className:`cad-global-hud-canvas`}),(0,l.jsx)(`header`,{className:`header`,children:(0,l.jsxs)(`div`,{className:`container nav-wrap`,children:[(0,l.jsx)(`a`,{href:`/`,"aria-label":`DigiWorks AI`,children:(0,l.jsx)(`img`,{src:e===`light`?`/cad/logo-light.png`:`/cad/logo.png`,alt:`DigiWorks AI`,width:`130`,height:`38`,decoding:`async`,style:{height:`38px`,width:`auto`}})}),(0,l.jsxs)(`div`,{className:`nav-right`,children:[(0,l.jsxs)(`div`,{className:`contact-mini`,children:[(0,l.jsxs)(`a`,{href:`https://wa.me/13468291047`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Chat on WhatsApp at +1 346 829 1047`,className:`contact-pill whatsapp-pill`,children:[(0,l.jsx)(M,{size:18,style:{flexShrink:0}}),(0,l.jsxs)(`div`,{className:`contact-pill-text`,children:[(0,l.jsx)(`span`,{className:`pill-label whatsapp-label`,children:`Chat on WhatsApp`}),(0,l.jsx)(`span`,{className:`pill-val`,children:`+1 346 829 1047`})]})]}),(0,l.jsxs)(`a`,{href:`tel:+17373945488`,"aria-label":`Call us at +1 737 394 5488`,className:`contact-pill phone-pill`,children:[(0,l.jsx)(j,{size:16,style:{flexShrink:0}}),(0,l.jsxs)(`div`,{className:`contact-pill-text`,children:[(0,l.jsx)(`span`,{className:`pill-label`,children:`Talk to an app expert`}),(0,l.jsx)(`span`,{className:`pill-val`,children:`+1 737 394 5488`})]})]})]}),(0,l.jsxs)(`a`,{href:`tel:+17373945488`,"aria-label":`Call us at +1 737 394 5488`,className:`header-phone-mobile`,children:[(0,l.jsx)(j,{size:14,style:{flexShrink:0}}),(0,l.jsx)(`span`,{children:`+1 737 394 5488`})]}),(0,l.jsxs)(`button`,{type:`button`,className:`theme-toggle-btn`,onClick:m,"aria-label":`Switch to ${e===`dark`?`Light`:`Dark`} Mode`,title:`Switch to ${e===`dark`?`Light`:`Dark`} Mode`,children:[e===`dark`?(0,l.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`16`,height:`16`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,l.jsx)(`circle`,{cx:`12`,cy:`12`,r:`5`}),(0,l.jsx)(`line`,{x1:`12`,y1:`1`,x2:`12`,y2:`3`}),(0,l.jsx)(`line`,{x1:`12`,y1:`21`,x2:`12`,y2:`23`}),(0,l.jsx)(`line`,{x1:`4.22`,y1:`4.22`,x2:`5.64`,y2:`5.64`}),(0,l.jsx)(`line`,{x1:`18.36`,y1:`18.36`,x2:`19.78`,y2:`19.78`}),(0,l.jsx)(`line`,{x1:`1`,y1:`12`,x2:`3`,y2:`12`}),(0,l.jsx)(`line`,{x1:`21`,y1:`12`,x2:`23`,y2:`12`}),(0,l.jsx)(`line`,{x1:`4.22`,y1:`19.78`,x2:`5.64`,y2:`18.36`}),(0,l.jsx)(`line`,{x1:`18.36`,y1:`5.64`,x2:`19.78`,y2:`4.22`})]}):(0,l.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`16`,height:`16`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,l.jsx)(`path`,{d:`M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z`})}),(0,l.jsx)(`span`,{children:e===`dark`?`Light`:`Dark`})]}),(0,l.jsx)(`a`,{href:`#quote`,className:`header-cta`,onClick:_,children:`Get a Free Quote`})]})]})}),(0,l.jsxs)(`main`,{children:[(0,l.jsxs)(`section`,{className:`hero`,children:[(0,l.jsx)(o,{variant:`streams`,tone:`crimson`,density:1.3,opacity:.65}),(0,l.jsxs)(`div`,{className:`container hero-grid`,children:[(0,l.jsxs)(`div`,{className:`hero-copy`,children:[(0,l.jsxs)(`h1`,{children:[`Idea or Prototype. We Design, Build and `,(0,l.jsx)(`span`,{children:`Launch It.`})]}),(0,l.jsxs)(`p`,{className:`hero-lead`,children:[`Starting from scratch, or sitting on a design that never got built — we take it from wherever you are to `,(0,l.jsx)(`strong`,{children:`live on the App Store and Play Store`}),`. Native iOS and Android, real backend, fixed fee agreed upfront, source code yours.`]}),(0,l.jsxs)(`div`,{className:`hero-inputs`,children:[(0,l.jsx)(`span`,{className:`hero-input-pill`,"data-dot":`amber`,children:`An idea`}),(0,l.jsx)(`span`,{className:`hero-input-pill`,"data-dot":`violet`,children:`A Figma file`}),(0,l.jsx)(`span`,{className:`hero-input-pill`,"data-dot":`pink`,children:`A Lovable link`}),(0,l.jsx)(`span`,{className:`hero-input-pill`,"data-dot":`blue`,children:`A half-built app`}),(0,l.jsxs)(`span`,{className:`hero-input-out`,children:[(0,l.jsx)(`span`,{className:`hero-input-arrow`,"aria-hidden":`true`,children:`→`}),(0,l.jsx)(`span`,{className:`hero-input-pill is-output`,"data-dot":`green`,children:`A live app`})]})]}),(0,l.jsxs)(`div`,{className:`hero-feature-grid`,children:[(0,l.jsxs)(`div`,{className:`hero-feature`,children:[(0,l.jsx)(`span`,{className:`hf-check`,children:`✓`}),(0,l.jsx)(`p`,{children:`Native iOS & Android, real backend and admin panel included`})]}),(0,l.jsxs)(`div`,{className:`hero-feature`,children:[(0,l.jsx)(`span`,{className:`hf-check`,children:`✓`}),(0,l.jsx)(`p`,{children:`Fixed fee agreed before development starts — no hourly surprises`})]}),(0,l.jsxs)(`div`,{className:`hero-feature`,children:[(0,l.jsx)(`span`,{className:`hf-check`,children:`✓`}),(0,l.jsx)(`p`,{children:`Source code and all accounts transferred to you`})]}),(0,l.jsxs)(`div`,{className:`hero-feature`,children:[(0,l.jsx)(`span`,{className:`hf-check`,children:`✓`}),(0,l.jsx)(`p`,{children:`One team for strategy, UI/UX, build, testing and store launch`})]})]}),(0,l.jsxs)(`div`,{className:`hero-timeline`,children:[(0,l.jsxs)(`div`,{className:`hero-timeline-head`,children:[(0,l.jsx)(`span`,{children:`How it moves`}),(0,l.jsx)(`span`,{children:`Idea → Production`})]}),(0,l.jsxs)(`div`,{className:`hero-timeline-track`,children:[(0,l.jsxs)(`div`,{className:`htl-step`,children:[(0,l.jsx)(`span`,{className:`htl-dot`}),(0,l.jsx)(`span`,{className:`htl-day`,children:`Day 1`}),(0,l.jsx)(`span`,{className:`htl-label`,children:`Free 20-min call`})]}),(0,l.jsxs)(`div`,{className:`htl-step`,children:[(0,l.jsx)(`span`,{className:`htl-dot`}),(0,l.jsx)(`span`,{className:`htl-day`,children:`Day 2`}),(0,l.jsx)(`span`,{className:`htl-label`,children:`Scope & fixed fee`})]}),(0,l.jsxs)(`div`,{className:`htl-step`,children:[(0,l.jsx)(`span`,{className:`htl-dot`}),(0,l.jsx)(`span`,{className:`htl-day`,children:`Day 7`}),(0,l.jsx)(`span`,{className:`htl-label`,children:`Build on your device`})]}),(0,l.jsxs)(`div`,{className:`htl-step is-final`,children:[(0,l.jsx)(`span`,{className:`htl-dot`}),(0,l.jsx)(`span`,{className:`htl-day`,children:`Day 14`}),(0,l.jsx)(`span`,{className:`htl-label`,children:`Production ready`})]})]})]})]}),(0,l.jsxs)(`aside`,{className:`quote-card`,id:`quote`,children:[(0,l.jsxs)(`div`,{className:`quote-head`,children:[(0,l.jsx)(`span`,{children:`START YOUR PROJECT`}),(0,l.jsx)(`h2`,{children:`Get a Free App Estimate`}),(0,l.jsx)(`p`,{children:`Tell us the basics. Our team will review your idea and contact you with the next steps.`})]}),(0,l.jsxs)(`form`,{ref:X.formRef,onSubmit:X.onSubmit,noValidate:!0,children:[(0,l.jsxs)(`div`,{className:[`field`,X.bad(`name`)].filter(Boolean).join(` `),children:[(0,l.jsx)(`label`,{htmlFor:`cad-hero-name`,children:`Your Name *`}),(0,l.jsx)(`input`,{id:`cad-hero-name`,name:`name`,type:`text`,placeholder:`John Smith`,autoComplete:`name`,value:X.values.name,onChange:X.set(`name`),"aria-invalid":X.bad(`name`)?`true`:void 0,"aria-describedby":X.errId(`name`),required:!0}),(0,l.jsx)(W,{form:X,name:`name`})]}),(0,l.jsxs)(`div`,{className:[`field`,X.bad(`email`)].filter(Boolean).join(` `),children:[(0,l.jsx)(`label`,{htmlFor:`cad-hero-email`,children:`Email Address *`}),(0,l.jsx)(`input`,{id:`cad-hero-email`,name:`email`,type:`email`,placeholder:`john@company.com`,autoComplete:`email`,value:X.values.email,onChange:X.set(`email`),"aria-invalid":X.bad(`email`)?`true`:void 0,"aria-describedby":X.errId(`email`),required:!0}),(0,l.jsx)(W,{form:X,name:`email`})]}),(0,l.jsxs)(`div`,{className:[`field`,X.bad(`phone`)].filter(Boolean).join(` `),children:[(0,l.jsx)(`label`,{htmlFor:`cad-hero-phone`,children:`Phone Number *`}),(0,l.jsxs)(`div`,{className:`phone-input-wrap`,children:[(0,l.jsx)(q,{innerRef:X.codeRef,name:`country_code`}),(0,l.jsx)(`input`,{id:`cad-hero-phone`,name:`phone`,type:`tel`,className:`phone-num-input`,placeholder:`(000) 000-0000`,inputMode:`numeric`,autoComplete:`tel`,value:X.values.phone,onChange:X.set(`phone`),onKeyDown:K,"aria-invalid":X.bad(`phone`)?`true`:void 0,"aria-describedby":X.errId(`phone`),required:!0})]}),(0,l.jsx)(W,{form:X,name:`phone`})]}),(0,l.jsxs)(`div`,{className:`field`,children:[(0,l.jsx)(`label`,{htmlFor:`cad-hero-service`,children:`What do you need?`}),(0,l.jsx)(`select`,{id:`cad-hero-service`,name:`service`,value:X.values.service,onChange:X.set(`service`),children:y.map(e=>(0,l.jsx)(`option`,{children:e},e))})]}),(0,l.jsx)(J,{f:{id:`hero`,form:X}}),(0,l.jsxs)(`button`,{type:`submit`,className:`quote-btn`,disabled:X.busy,children:[X.busy?`Sending…`:`Get a Free Quote`,!X.busy&&(0,l.jsx)(A,{style:{display:`inline-block`,verticalAlign:`middle`,marginLeft:`4px`}})]}),(0,l.jsx)(Y,{show:X.failed}),(0,l.jsxs)(`div`,{className:`form-trust`,children:[(0,l.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`13`,height:`13`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,style:{display:`inline-block`,verticalAlign:`middle`,marginRight:`4px`,color:`var(--red-light)`},children:[(0,l.jsx)(`rect`,{x:`3`,y:`11`,width:`18`,height:`11`,rx:`2`,ry:`2`}),(0,l.jsx)(`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`})]}),` `,`Your idea stays confidential. No spam.`]})]})]})]}),(0,l.jsxs)(`div`,{className:`container logo-strip-wrap`,children:[(0,l.jsxs)(`h2`,{className:`press-strip-title`,children:[`As seen and `,(0,l.jsx)(`span`,{className:`accent-text`,children:`Reported on`})]}),(0,l.jsx)(`div`,{className:`logo-slider`,children:(0,l.jsx)(`div`,{className:`logo-slide-track`,children:[0,1].map(e=>R.map((t,n)=>(0,l.jsx)(`div`,{className:`logo-item`,children:t},`${e}-${n}`)))})})]})]}),(0,l.jsxs)(`section`,{className:`section portfolio`,id:`work`,children:[(0,l.jsxs)(`div`,{className:`container`,children:[(0,l.jsx)(`div`,{className:`section-kicker`,children:`PORTFOLIO`}),(0,l.jsxs)(`div`,{className:`section-title-row`,children:[(0,l.jsxs)(`div`,{children:[(0,l.jsxs)(`h2`,{children:[`Mobile Products Built for `,(0,l.jsx)(`span`,{children:`Real Business Use`})]}),(0,l.jsx)(`p`,{children:`Explore our 16 featured applications across AI, Healthcare, Logistics, Sports & Entertainment.`})]}),(0,l.jsxs)(`a`,{href:`/case-studies`,className:`outline-link`,target:`_blank`,rel:`noreferrer`,children:[`View All Work `,(0,l.jsx)(A,{})]})]})]}),(0,l.jsxs)(`div`,{className:`portfolio-showcase-container`,children:[(0,l.jsx)(`div`,{className:`showcase-row`,children:(0,l.jsx)(`div`,{className:`showcase-track-left`,children:[0,1].map(e=>b.map(t=>(0,l.jsx)(I,{item:t},`${e}-${t.slug}`)))})}),(0,l.jsx)(`div`,{className:`showcase-row`,children:(0,l.jsx)(`div`,{className:`showcase-track-right`,children:[0,1].map(e=>x.map(t=>(0,l.jsx)(I,{item:t},`${e}-${t.slug}`)))})})]})]}),(0,l.jsx)(`section`,{className:`stats-section`,id:`credibility`,children:(0,l.jsxs)(`div`,{className:`container`,children:[(0,l.jsxs)(`div`,{className:`stats-hero-row`,children:[(0,l.jsx)(`div`,{className:`stats-hero-big`,children:(0,l.jsx)(`span`,{className:`big-stat-number`,children:(0,l.jsx)(N,{value:`7+`})})}),(0,l.jsxs)(`div`,{className:`stats-hero-content`,children:[(0,l.jsxs)(`h2`,{children:[`Years of Building`,(0,l.jsx)(`br`,{}),(0,l.jsxs)(`span`,{className:`accent-text`,children:[`Mobile App Success`,(0,l.jsx)(`br`,{}),`Stories`]})]}),(0,l.jsx)(`p`,{children:`We build product experiences for startups, growing companies, and enterprises, turning complex ideas into reliable mobile apps through clear strategy, focused design, and practical engineering.`})]})]}),(0,l.jsx)(`div`,{className:`stats-numbers-bar`,children:S.map((e,t)=>(0,l.jsxs)(`div`,{className:`stat-bar-item`,children:[(0,l.jsx)(`div`,{className:`stat-num`,children:(0,l.jsx)(N,{value:e.num})}),(0,l.jsx)(`div`,{className:`stat-label`,children:e.label})]},t))}),(0,l.jsx)(`p`,{className:`stats-footer-caption`,children:`As a mobile app development company USA businesses trust, we have delivered 1000+ apps across 20+ industries.`})]})}),(0,l.jsx)(`section`,{className:`consult-section`,id:`consultation`,children:(0,l.jsx)(`div`,{className:`container`,children:(0,l.jsxs)(`div`,{className:`consult-box`,children:[(0,l.jsxs)(`div`,{className:`consult-content`,children:[(0,l.jsx)(`h2`,{children:`Work With a Top Mobile App Development Company in the USA`}),(0,l.jsx)(`p`,{children:`Book a free consultation and get a clear technical view on scope, timeline, and investment before you commit.`})]}),(0,l.jsx)(`div`,{className:`consult-cta`,children:(0,l.jsx)(`a`,{href:`#quote`,className:`consult-pill-btn`,onClick:_,children:`Contact`})})]})})}),(0,l.jsxs)(`section`,{className:`section process-section`,id:`process`,style:{position:`relative`,overflow:`hidden`},children:[(0,l.jsx)(o,{variant:`nodes`,tone:`crimson`,density:1.3,opacity:.6}),(0,l.jsxs)(`div`,{className:`container`,style:{position:`relative`,zIndex:2},children:[(0,l.jsxs)(`div`,{className:`center-heading`,children:[(0,l.jsx)(`div`,{className:`section-kicker`,children:`OUR PROCESS`}),(0,l.jsxs)(`h2`,{children:[`Our Step-by-Step `,(0,l.jsx)(`span`,{children:`App Development Process`})]}),(0,l.jsx)(`p`,{children:`Clear stages. Tangible deliverables. No black box.`})]}),(0,l.jsxs)(`div`,{className:`process-timeline-wrap`,children:[(0,l.jsx)(`div`,{className:`process-connector-line`}),(0,l.jsxs)(`div`,{className:`process-grid`,children:[(0,l.jsxs)(`article`,{className:`process-card step-01`,children:[(0,l.jsxs)(`div`,{className:`process-image discovery-3d-graphic`,children:[(0,l.jsx)(`div`,{className:`glass-radar-ring ring-3`}),(0,l.jsx)(`div`,{className:`glass-radar-ring ring-2`}),(0,l.jsx)(`div`,{className:`glass-radar-ring ring-1`}),(0,l.jsx)(`div`,{className:`radar-core-node`,children:`01`})]}),(0,l.jsx)(`span`,{className:`num`,children:`01`}),(0,l.jsx)(`h3`,{children:`Discover & Strategize`}),(0,l.jsx)(`p`,{children:`We clarify your idea, users, goals, budget and launch priorities before writing a line of code.`})]}),(0,l.jsxs)(`article`,{className:`process-card step-02`,children:[(0,l.jsxs)(`div`,{className:`process-image design-3d-graphic`,children:[(0,l.jsxs)(`div`,{className:`glass-ui-screen screen-back`,children:[(0,l.jsx)(`div`,{className:`ui-bar header`}),(0,l.jsx)(`div`,{className:`ui-bar content`})]}),(0,l.jsxs)(`div`,{className:`glass-ui-screen screen-front`,children:[(0,l.jsx)(`div`,{className:`ui-bar header red`}),(0,l.jsx)(`div`,{className:`ui-bar content`}),(0,l.jsx)(`div`,{className:`ui-circle-avatar`})]}),(0,l.jsx)(`div`,{className:`cursor-node`})]}),(0,l.jsx)(`span`,{className:`num`,children:`02`}),(0,l.jsx)(`h3`,{children:`Design & Prototype`}),(0,l.jsx)(`p`,{children:`We shape intuitive screens and clickable flows so the product feels clear before development starts.`})]}),(0,l.jsxs)(`article`,{className:`process-card step-03`,children:[(0,l.jsxs)(`div`,{className:`process-image develop-3d-graphic`,children:[(0,l.jsxs)(`div`,{className:`terminal-glass-window`,children:[(0,l.jsxs)(`div`,{className:`terminal-header`,children:[(0,l.jsx)(`span`,{className:`dot red`}),(0,l.jsx)(`span`,{className:`dot yellow`}),(0,l.jsx)(`span`,{className:`dot green`})]}),(0,l.jsxs)(`div`,{className:`code-lines`,children:[(0,l.jsx)(`div`,{className:`line l1`}),(0,l.jsx)(`div`,{className:`line l2 red`}),(0,l.jsx)(`div`,{className:`line l3`})]})]}),(0,l.jsx)(`div`,{className:`code-matrix-badge`,children:`</>`})]}),(0,l.jsx)(`span`,{className:`num`,children:`03`}),(0,l.jsx)(`h3`,{children:`Develop & Test`}),(0,l.jsx)(`p`,{children:`We build scalable features and test performance, usability, integrations and release readiness.`})]}),(0,l.jsxs)(`article`,{className:`process-card step-04`,children:[(0,l.jsxs)(`div`,{className:`process-image launch-3d-graphic`,children:[(0,l.jsx)(`div`,{className:`launch-rocket-badge`,children:(0,l.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`26`,height:`26`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,l.jsx)(`line`,{x1:`7`,y1:`17`,x2:`17`,y2:`7`}),(0,l.jsx)(`polyline`,{points:`7 7 17 7 17 17`})]})}),(0,l.jsx)(`div`,{className:`launch-sparkle s1`,children:`✦`}),(0,l.jsx)(`div`,{className:`launch-sparkle s2`,children:`✦`}),(0,l.jsx)(`div`,{className:`thruster-aura`})]}),(0,l.jsx)(`span`,{className:`num`,children:`04`}),(0,l.jsx)(`h3`,{children:`Launch & Upgrade`}),(0,l.jsx)(`p`,{children:`We support store submission, launch monitoring, improvements and post-release growth needs.`})]})]})]})]})]}),(0,l.jsx)(`section`,{className:`section industries`,children:(0,l.jsxs)(`div`,{className:`container`,children:[(0,l.jsxs)(`div`,{className:`center-heading`,children:[(0,l.jsx)(`div`,{className:`section-kicker`,children:`INDUSTRIES`}),(0,l.jsxs)(`h2`,{children:[`Industry Experience Across `,(0,l.jsx)(`span`,{children:`Multiple Verticals`})]}),(0,l.jsx)(`p`,{children:`We build around the workflows, regulations and customer expectations that matter in your market.`})]}),(0,l.jsx)(`div`,{className:`industry-grid`,children:B.map(e=>(0,l.jsxs)(`article`,{className:`industry-card`,children:[(0,l.jsx)(`div`,{className:`ind-icon-wrapper`,style:{color:e.color,backgroundColor:e.bg,borderColor:e.border,boxShadow:`0 0 16px ${e.glow}`},children:(0,l.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`22`,height:`22`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:e.icon})}),(0,l.jsx)(`h3`,{children:e.title}),(0,l.jsx)(`p`,{children:e.desc})]},e.title))})]})}),(0,l.jsx)(`section`,{className:`section build-section`,children:(0,l.jsxs)(`div`,{className:`container`,children:[(0,l.jsx)(`div`,{className:`section-kicker`,children:`WHAT WE BUILD`}),(0,l.jsx)(`div`,{className:`section-title-row`,children:(0,l.jsxs)(`div`,{children:[(0,l.jsxs)(`h2`,{children:[`Mobile App Solutions for `,(0,l.jsx)(`span`,{children:`Different Product Needs`})]}),(0,l.jsx)(`p`,{children:`From MVPs to mature products, we design, develop, launch and improve mobile experiences.`})]})}),(0,l.jsx)(`div`,{className:`build-grid`,children:C.map(e=>(0,l.jsxs)(`article`,{className:`build-card`,style:{"--build-color":e.color,"--build-bg":e.bg,"--build-border":e.border,"--build-glow":e.glow},children:[(0,l.jsx)(`span`,{className:`build-num-badge`,style:{color:e.color,backgroundColor:e.bg,borderColor:e.border,boxShadow:`0 0 12px ${e.glow}`},children:e.n}),(0,l.jsx)(`h3`,{children:e.title}),(0,l.jsx)(`p`,{children:e.desc})]},e.n))})]})}),(0,l.jsx)(`section`,{className:`awards-section`,id:`awards`,children:(0,l.jsxs)(`div`,{className:`container`,children:[(0,l.jsxs)(`div`,{className:`awards-top-grid`,children:[(0,l.jsxs)(`div`,{className:`awards-intro-card`,children:[(0,l.jsxs)(`h2`,{children:[`Awards &`,(0,l.jsx)(`br`,{}),(0,l.jsx)(`span`,{className:`accent-text`,children:`Recognitions`})]}),(0,l.jsx)(`p`,{children:`Our work has been recognized across software development, app design, and client satisfaction platforms. These badges reflect the standards we bring to every discovery call, sprint, and launch.`})]}),(0,l.jsx)(`div`,{className:`featured-award-card`,children:(0,l.jsx)(`img`,{src:`/cad/badges/featured-clutch.png`,alt:`Clutch Top App Development Company Non-Profit Austin 2025`,loading:`lazy`})})]}),(0,l.jsx)(`div`,{className:`awards-badge-grid`,children:z.map(e=>(0,l.jsx)(`div`,{className:`badge-card`,children:e},e.key))})]})}),(0,l.jsxs)(`section`,{className:`section reviews-marquee-section`,id:`reviews`,children:[(0,l.jsx)(`div`,{className:`container`,children:(0,l.jsxs)(`div`,{className:`reviews-header`,children:[(0,l.jsxs)(`h2`,{children:[`Trusted by Teams Who `,(0,l.jsx)(`span`,{className:`ship-underline`,children:`Ship`})]}),(0,l.jsx)(`p`,{children:`Real reviews from Bark, Trustpilot, and Clutch. Hover to pause.`})]})}),(0,l.jsx)(`div`,{className:`marquee-wrapper`,children:(0,l.jsx)(`div`,{className:`marquee-track marquee-track-left`,children:[0,1].map(e=>T.map((t,n)=>(0,l.jsx)(L,{r:t},`${e}-${n}`)))})}),(0,l.jsx)(`div`,{className:`marquee-wrapper margin-top-20`,children:(0,l.jsx)(`div`,{className:`marquee-track marquee-track-right`,children:[0,1].map(e=>E.map((t,n)=>(0,l.jsx)(L,{r:t},`${e}-${n}`)))})})]}),(0,l.jsxs)(`section`,{className:`estimate-section`,id:`estimate`,children:[(0,l.jsx)(V,{density:.6,opacity:.35,className:`cad-estimate-dustfx`}),(0,l.jsxs)(`div`,{className:`container estimate-box`,children:[(0,l.jsxs)(`div`,{className:`estimate-copy`,children:[(0,l.jsx)(`h2`,{children:`Book a Free Strategy Call`}),(0,l.jsx)(`p`,{className:`estimate-sub`,children:`Speak with a mobile app expert. Leave with a clear scope, a realistic timeline, and a fixed-fee estimate.`}),(0,l.jsx)(`div`,{className:`next-steps-kicker`,children:`WHAT HAPPENS NEXT`}),(0,l.jsxs)(`div`,{className:`next-steps-list`,children:[(0,l.jsxs)(`div`,{className:`next-step-item`,children:[(0,l.jsx)(`span`,{className:`step-num`,children:`01`}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`strong`,{children:`Requirements Review`}),(0,l.jsx)(`p`,{children:`We review your goals, users, and feature priorities.`})]})]}),(0,l.jsxs)(`div`,{className:`next-step-item`,children:[(0,l.jsx)(`span`,{className:`step-num`,children:`02`}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`strong`,{children:`NDA if Needed`}),(0,l.jsx)(`p`,{children:`We sign a mutual NDA before any deep project discussion.`})]})]}),(0,l.jsxs)(`div`,{className:`next-step-item`,children:[(0,l.jsx)(`span`,{className:`step-num`,children:`03`}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`strong`,{children:`Scope and Estimate`}),(0,l.jsx)(`p`,{children:`You receive a clear scope, timeline, and cost estimate.`})]})]}),(0,l.jsxs)(`div`,{className:`next-step-item`,children:[(0,l.jsx)(`span`,{className:`step-num`,children:`04`}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`strong`,{children:`Project Kickoff`}),(0,l.jsx)(`p`,{children:`We align teams, lock the roadmap, and begin.`})]})]})]})]}),(0,l.jsxs)(`form`,{className:`estimate-form`,ref:Z.formRef,onSubmit:Z.onSubmit,noValidate:!0,children:[(0,l.jsxs)(`div`,{className:`form-row-grid`,children:[(0,l.jsxs)(`div`,{className:`form-field-group`,children:[(0,l.jsx)(`label`,{htmlFor:`est-name`,children:`FULL NAME *`}),(0,l.jsx)(`input`,{id:`est-name`,type:`text`,placeholder:`Full name`,autoComplete:`name`,className:Z.bad(`name`),value:Z.values.name,onChange:Z.set(`name`),"aria-invalid":Z.bad(`name`)?`true`:void 0,"aria-describedby":Z.errId(`name`),required:!0}),(0,l.jsx)(W,{form:Z,name:`name`})]}),(0,l.jsxs)(`div`,{className:`form-field-group`,children:[(0,l.jsx)(`label`,{htmlFor:`est-email`,children:`WORK EMAIL *`}),(0,l.jsx)(`input`,{id:`est-email`,type:`email`,placeholder:`you@company.com`,autoComplete:`email`,className:Z.bad(`email`),value:Z.values.email,onChange:Z.set(`email`),"aria-invalid":Z.bad(`email`)?`true`:void 0,"aria-describedby":Z.errId(`email`),required:!0}),(0,l.jsx)(W,{form:Z,name:`email`})]})]}),(0,l.jsxs)(`div`,{className:`form-row-grid`,children:[(0,l.jsxs)(`div`,{className:`form-field-group`,children:[(0,l.jsx)(`label`,{htmlFor:`est-phone`,children:`PHONE NUMBER *`}),(0,l.jsxs)(`div`,{className:`phone-input-wrap`,children:[(0,l.jsx)(q,{innerRef:Z.codeRef,name:`country_code_bottom`}),(0,l.jsx)(`input`,{id:`est-phone`,type:`tel`,className:[`phone-num-input`,Z.bad(`phone`)].filter(Boolean).join(` `),placeholder:`Phone number`,inputMode:`numeric`,autoComplete:`tel`,value:Z.values.phone,onChange:Z.set(`phone`),onKeyDown:K,"aria-invalid":Z.bad(`phone`)?`true`:void 0,"aria-describedby":Z.errId(`phone`),required:!0})]}),(0,l.jsx)(W,{form:Z,name:`phone`})]}),(0,l.jsxs)(`div`,{className:`form-field-group`,children:[(0,l.jsx)(`label`,{htmlFor:`est-nature`,children:`NATURE OF BUSINESS OR APP`}),(0,l.jsx)(`input`,{id:`est-nature`,type:`text`,placeholder:`e.g. fleet logistics, marketplace`,value:Z.values.nature||``,onChange:Z.set(`nature`)})]})]}),(0,l.jsxs)(`div`,{className:`form-row-grid`,children:[(0,l.jsxs)(`div`,{className:`form-field-group`,children:[(0,l.jsx)(`label`,{htmlFor:`est-budget`,children:`BUDGET RANGE`}),(0,l.jsxs)(`select`,{id:`est-budget`,value:Z.values.budget||`Select a budget range`,onChange:Z.set(`budget`),children:[(0,l.jsx)(`option`,{disabled:!0,children:`Select a budget range`}),(0,l.jsx)(`option`,{value:`<$10k`,children:`Under $10,000`}),(0,l.jsx)(`option`,{value:`$10k - $25k`,children:`$10,000 – $25,000`}),(0,l.jsx)(`option`,{value:`$25k - $50k`,children:`$25,000 – $50,000`}),(0,l.jsx)(`option`,{value:`$50k - $100k`,children:`$50,000 – $100,000`}),(0,l.jsx)(`option`,{value:`$100k+`,children:`$100,000+`})]})]}),(0,l.jsxs)(`div`,{className:`form-field-group`,children:[(0,l.jsx)(`label`,{htmlFor:`est-timeline`,children:`TIMELINE`}),(0,l.jsxs)(`select`,{id:`est-timeline`,value:Z.values.timeline||`Select a timeline`,onChange:Z.set(`timeline`),children:[(0,l.jsx)(`option`,{disabled:!0,children:`Select a timeline`}),(0,l.jsx)(`option`,{value:`As soon as possible`,children:`As soon as possible`}),(0,l.jsx)(`option`,{value:`Within 1 month`,children:`Within 1 month`}),(0,l.jsx)(`option`,{value:`1 - 3 months`,children:`1 – 3 months`}),(0,l.jsx)(`option`,{value:`3+ months`,children:`3+ months`})]})]})]}),(0,l.jsxs)(`div`,{className:`form-field-group full-width`,children:[(0,l.jsx)(`label`,{htmlFor:`est-brief`,children:`PROJECT REQUIREMENTS`}),(0,l.jsx)(`textarea`,{id:`est-brief`,rows:4,placeholder:`What are you building? Who is it for? What matters most?`,value:Z.values.brief,onChange:Z.set(`brief`)})]}),(0,l.jsx)(J,{f:{id:`estimate`,form:Z}}),(0,l.jsx)(`button`,{type:`submit`,className:`submit-discuss-btn`,disabled:Z.busy,children:Z.busy?`Sending…`:`Let's Discuss the Project`}),(0,l.jsx)(`p`,{className:`form-bottom-note`,children:`30 minutes. We reply within one business day. We will sign an NDA before any deep discussion.`}),(0,l.jsx)(Y,{show:Z.failed})]})]})]}),(0,l.jsx)(`section`,{className:`section faq-section`,children:(0,l.jsxs)(`div`,{className:`container faq-layout`,children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`div`,{className:`section-kicker`,children:`FAQ`}),(0,l.jsxs)(`h2`,{children:[`Frequently Asked`,(0,l.jsx)(`br`,{}),`Questions`]})]}),(0,l.jsx)(`div`,{className:`faq-list`,children:D.map((e,t)=>(0,l.jsxs)(`details`,{open:t===0,children:[(0,l.jsxs)(`summary`,{children:[e.q,(0,l.jsx)(`span`,{children:`+`})]}),(0,l.jsx)(`p`,{children:e.a})]},e.q))})]})}),(0,l.jsx)(`section`,{className:`final-cta`,children:(0,l.jsxs)(`div`,{className:`container final-wrap`,children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{children:`READY TO BUILD?`}),(0,l.jsx)(`h2`,{children:`Bring us your app idea. We’ll help you turn it into a real product.`})]}),(0,l.jsxs)(`a`,{href:`#quote`,onClick:_,children:[`Get Your Free Estimate `,(0,l.jsx)(A,{})]})]})}),(0,l.jsxs)(`section`,{className:`section offices-section`,id:`offices`,children:[(0,l.jsx)(o,{variant:`streams`,tone:`crimson`,density:1.3,opacity:.65}),(0,l.jsxs)(`div`,{className:`container`,children:[(0,l.jsx)(`div`,{className:`offices-header-row`,children:(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`div`,{className:`section-kicker`,children:`PRESENCE`}),(0,l.jsx)(`h2`,{children:`Our Global Offices`})]})}),(0,l.jsx)(`div`,{className:`offices-grid`,children:O.map(e=>(0,l.jsxs)(`article`,{className:`office-card`,children:[(0,l.jsxs)(`div`,{className:`office-thumb-wrap`,children:[(0,l.jsx)(`img`,{loading:`lazy`,src:String(e.img).startsWith(`/`)?e.img:`/cad/${e.img}`,alt:e.alt,className:`office-thumb`}),e.hq&&(0,l.jsx)(`span`,{className:`office-badge-hq`,children:`HQ`}),(0,l.jsx)(`span`,{className:`office-flag`,children:e.flag})]}),(0,l.jsxs)(`div`,{className:`office-card-body`,children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`h3`,{children:e.city}),(0,l.jsx)(`span`,{className:`office-country`,children:e.country}),(0,l.jsx)(`p`,{className:`office-address`,children:e.address})]}),(0,l.jsxs)(`a`,{href:e.map,target:`_blank`,rel:`noreferrer`,className:`office-map-link`,children:[(0,l.jsx)(P,{}),`View on Map`]})]})]},e.city))})]})]})]}),(0,l.jsxs)(`footer`,{children:[(0,l.jsx)(o,{variant:`streams`,tone:`crimson`,density:1.3,opacity:.65}),(0,l.jsxs)(`div`,{className:`container footer-wrap`,children:[(0,l.jsx)(`a`,{href:`/`,"aria-label":`DigiWorks AI`,children:(0,l.jsx)(`img`,{src:e===`light`?`/cad/logo-light.png`:`/cad/logo.png`,alt:`DigiWorks AI`,width:`130`,height:`38`,loading:`lazy`,decoding:`async`,style:{height:`38px`,width:`auto`}})}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`strong`,{children:`Contact`}),(0,l.jsx)(`a`,{href:`tel:+17373945488`,children:`+1 737 394 5488`}),(0,l.jsx)(`a`,{href:`mailto:[EMAIL]`,children:`[EMAIL]`})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`strong`,{children:`Location`}),(0,l.jsx)(`span`,{children:`Austin, Texas, USA`}),(0,l.jsxs)(`div`,{className:`footer-social-row`,children:[ne.map(e=>(0,l.jsx)(`a`,{href:e.href,target:`_blank`,rel:`noreferrer`,"aria-label":e.label,className:`social-circle-btn`,children:(0,l.jsx)(`svg`,{viewBox:`0 0 24 24`,width:e.size,height:e.size,fill:e.fill,children:(0,l.jsx)(`path`,{d:e.d})})},e.label)),(0,l.jsx)(`a`,{href:`https://instagram.com/digiworksai.com`,target:`_blank`,rel:`noreferrer`,"aria-label":`Instagram`,className:`social-circle-btn`,children:(0,l.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`15`,height:`15`,fill:`none`,children:[(0,l.jsxs)(`radialGradient`,{id:`cadIgGrad`,cx:`30%`,cy:`107%`,r:`150%`,children:[(0,l.jsx)(`stop`,{offset:`0%`,stopColor:`#fdf497`}),(0,l.jsx)(`stop`,{offset:`5%`,stopColor:`#fdf497`}),(0,l.jsx)(`stop`,{offset:`45%`,stopColor:`#499bfd`}),(0,l.jsx)(`stop`,{offset:`60%`,stopColor:`#d6249f`}),(0,l.jsx)(`stop`,{offset:`90%`,stopColor:`#285AEB`})]}),(0,l.jsx)(`rect`,{x:`2`,y:`2`,width:`20`,height:`20`,rx:`5`,ry:`5`,stroke:`url(#cadIgGrad)`,strokeWidth:`2.2`}),(0,l.jsx)(`path`,{d:`M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z`,stroke:`url(#cadIgGrad)`,strokeWidth:`2.2`}),(0,l.jsx)(`line`,{x1:`17.5`,y1:`6.5`,x2:`17.51`,y2:`6.5`,stroke:`url(#cadIgGrad)`,strokeWidth:`2.5`,strokeLinecap:`round`})]})})]})]})]}),(0,l.jsxs)(`div`,{className:`container footer-standards-wrap`,children:[(0,l.jsxs)(`div`,{className:`standards-row`,children:[(0,l.jsx)(`span`,{className:`standards-label`,children:`STANDARDS WE ENGINEER TO`}),(0,l.jsx)(`div`,{className:`standards-pills`,children:ee.map(e=>(0,l.jsxs)(`div`,{className:`standard-pill`,children:[(0,l.jsx)(F,{}),(0,l.jsx)(`strong`,{children:e})]},e))})]}),(0,l.jsxs)(`div`,{className:`standards-row`,children:[(0,l.jsx)(`span`,{className:`standards-label`,children:`DELIVERED ON`}),(0,l.jsx)(`div`,{className:`standards-pills`,children:te.map(e=>(0,l.jsx)(`div`,{className:`standard-pill cloud-pill`,children:(0,l.jsx)(`strong`,{children:e})},e))})]})]}),(0,l.jsxs)(`div`,{className:`container footer-bottom`,children:[(0,l.jsx)(`span`,{className:`copyright-text`,children:`© DigiWorks AI 2026. All rights reserved. · Since 2017`}),(0,l.jsxs)(`div`,{className:`legal-links`,children:[(0,l.jsx)(`a`,{href:`/terms-of-use`,target:`_blank`,rel:`noreferrer`,children:`Terms of Use`}),(0,l.jsx)(`span`,{className:`dot-separator`,children:`•`}),(0,l.jsx)(`a`,{href:`/privacy-policy`,target:`_blank`,rel:`noreferrer`,children:`Privacy Policy`})]})]})]}),(0,l.jsx)(`div`,{className:[`quote-modal-overlay`,n?`active`:``].filter(Boolean).join(` `),"aria-hidden":n?`false`:`true`,onClick:e=>{e.target===e.currentTarget&&h()},children:(0,l.jsxs)(`div`,{className:`quote-modal-card`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`cadQuoteModalTitle`,children:[(0,l.jsx)(`button`,{type:`button`,className:`quote-modal-close`,onClick:h,"aria-label":`Close modal`,children:`×`}),(0,l.jsxs)(`div`,{className:`quote-modal-body`,children:[(0,l.jsxs)(`div`,{className:`quote-modal-left`,children:[(0,l.jsx)(`img`,{src:`/cad/modal-team-clean.jpg`,alt:`Apps Design Company Team`,className:`quote-modal-bg-img`}),(0,l.jsx)(`div`,{className:`quote-left-overlay`,children:(0,l.jsxs)(`h3`,{className:`quote-left-heading`,children:[`We are Friendly &`,(0,l.jsx)(`br`,{}),`Experienced `,(0,l.jsx)(`span`,{className:`quote-red-text`,children:`Apps Design Company`})]})})]}),(0,l.jsxs)(`div`,{className:`quote-modal-right`,children:[(0,l.jsx)(`h2`,{id:`cadQuoteModalTitle`,children:`Get A Free Quote!`}),(0,l.jsx)(`p`,{className:`quote-modal-sub`,children:`Discuss your app idea with our consultants and we'll help you`}),(0,l.jsxs)(`form`,{className:`quote-modal-form`,ref:Q.formRef,onSubmit:Q.onSubmit,noValidate:!0,children:[(0,l.jsxs)(`div`,{className:`quote-field`,children:[(0,l.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`16`,height:`16`,fill:`currentColor`,className:`field-icon`,children:(0,l.jsx)(`path`,{d:`M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z`})}),(0,l.jsx)(`input`,{type:`text`,placeholder:`Full Name *`,"aria-label":`Full Name`,autoComplete:`name`,className:[`quote-input`,Q.bad(`name`)].filter(Boolean).join(` `),value:Q.values.name,onChange:Q.set(`name`),"aria-invalid":Q.bad(`name`)?`true`:void 0,"aria-describedby":Q.errId(`name`),required:!0})]}),(0,l.jsx)(W,{form:Q,name:`name`}),(0,l.jsxs)(`div`,{className:`quote-field`,children:[(0,l.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`16`,height:`16`,fill:`currentColor`,className:`field-icon`,children:(0,l.jsx)(`path`,{d:`M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z`})}),(0,l.jsx)(`input`,{type:`email`,placeholder:`Email Address *`,"aria-label":`Email Address`,autoComplete:`email`,className:[`quote-input`,Q.bad(`email`)].filter(Boolean).join(` `),value:Q.values.email,onChange:Q.set(`email`),"aria-invalid":Q.bad(`email`)?`true`:void 0,"aria-describedby":Q.errId(`email`),required:!0})]}),(0,l.jsx)(W,{form:Q,name:`email`}),(0,l.jsxs)(`div`,{className:`quote-field`,children:[(0,l.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`16`,height:`16`,fill:`currentColor`,className:`field-icon`,children:(0,l.jsx)(`path`,{d:`M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z`})}),(0,l.jsx)(`input`,{type:`tel`,placeholder:`Phone No. *`,"aria-label":`Phone Number`,autoComplete:`tel`,inputMode:`numeric`,className:[`quote-input`,`phone-num-input`,Q.bad(`phone`)].filter(Boolean).join(` `),value:Q.values.phone,onChange:Q.set(`phone`),onKeyDown:K,"aria-invalid":Q.bad(`phone`)?`true`:void 0,"aria-describedby":Q.errId(`phone`),required:!0})]}),(0,l.jsx)(W,{form:Q,name:`phone`}),(0,l.jsxs)(`div`,{className:`quote-field quote-field-textarea`,children:[(0,l.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`16`,height:`16`,fill:`currentColor`,className:`field-icon`,children:(0,l.jsx)(`path`,{d:`M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z`})}),(0,l.jsx)(`textarea`,{placeholder:`Enter a brief`,"aria-label":`Project brief`,rows:`2`,className:`quote-input quote-textarea`,value:Q.values.brief,onChange:Q.set(`brief`)})]}),(0,l.jsx)(J,{f:{id:`modal`,form:Q}}),(0,l.jsxs)(`button`,{type:`submit`,className:`quote-submit-btn`,disabled:Q.busy,children:[Q.busy?`SENDING…`:`SUBMIT REQUEST`,!Q.busy&&(0,l.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`16`,height:`16`,fill:`none`,stroke:`currentColor`,strokeWidth:`3`,strokeLinecap:`round`,strokeLinejoin:`round`,style:{marginLeft:`8px`,display:`inline-block`,verticalAlign:`middle`},children:[(0,l.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`}),(0,l.jsx)(`polyline`,{points:`12 5 19 12 12 19`})]})]}),(0,l.jsx)(Y,{show:Q.failed})]})]})]})]})}),(0,l.jsx)(`div`,{className:[`thankyou-modal-overlay`,u?`active`:``].filter(Boolean).join(` `),"aria-hidden":u?`false`:`true`,onClick:e=>{e.target===e.currentTarget&&g()},children:(0,l.jsxs)(`div`,{className:`thankyou-modal-card`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`cadThankyouModalTitle`,children:[(0,l.jsx)(`button`,{type:`button`,className:`thankyou-modal-close`,onClick:g,"aria-label":`Close modal`,children:`×`}),(0,l.jsxs)(`div`,{className:`thankyou-modal-content`,children:[(0,l.jsx)(`div`,{className:`thankyou-check-ring`,children:(0,l.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`42`,height:`42`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,l.jsx)(`polyline`,{points:`20 6 9 17 4 12`})})}),(0,l.jsx)(`h2`,{id:`cadThankyouModalTitle`,children:`Request Received!`}),(0,l.jsxs)(`p`,{className:`thankyou-sub`,children:[`Thank you for reaching out to `,(0,l.jsx)(`strong`,{style:{color:`#ffffff`},children:`DigiWorks AI`}),`. Our mobile app development team has received your project details.`]}),(0,l.jsxs)(`div`,{className:`thankyou-info-box`,children:[(0,l.jsxs)(`div`,{className:`thankyou-info-item`,children:[(0,l.jsx)(`span`,{className:`info-icon`,children:`⚡`}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`strong`,{children:`Fast Response`}),(0,l.jsx)(`p`,{children:`An App Strategist will review your scope and contact you within 2 business hours.`})]})]}),(0,l.jsxs)(`div`,{className:`thankyou-info-item`,children:[(0,l.jsx)(`span`,{className:`info-icon`,children:`🔒`}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`strong`,{children:`Strict Confidentiality`}),(0,l.jsx)(`p`,{children:`Your app idea and project specifications are protected under our strict NDA policy.`})]})]})]}),(0,l.jsxs)(`p`,{className:`thankyou-timer-note`,children:[`Auto closing in `,(0,l.jsx)(`span`,{style:{color:`var(--red-light)`,fontWeight:800},children:f}),`s...`]})]})]})})]})]})}export{X as default};