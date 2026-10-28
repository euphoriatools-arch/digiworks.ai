import{a as e}from"./rolldown-runtime-CNC7AqOf.js";import{d as t,u as n}from"./motion-Cw6iLlDO.js";import{n as r}from"./vendor-DLzSi8Bf.js";import{S as i}from"./app-digi.js";import{t as a}from"./Seo-B4SgXAPu.js";import{t as o}from"./FoldFX-BQ1mS7Ah.js";var s=e(t(),1),c=`/* digiworksdigital.com High-Tech Black & Neon Red AI Theme System - Animated Edition with Logo & Testimonial Sliders */

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

/* Root Background & Smooth Scroll System */
html {
  background-color: #040407;
  color-scheme: dark;
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body.cad-lp,
body.cad-active {
  background-color: #040407;
  color-scheme: dark;
  background-image: none;
  background-attachment: scroll;
  overflow-x: hidden;
  min-height: 100vh;
}

body.cad-active::after,
body.cad-lp::after {
  display: none;
}

html.light-theme,
html:has(body.light-theme),
body.cad-lp.light-theme {
  background-color: #f8fafc;
  color-scheme: light;
}

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
  background: rgba(4, 4, 7, 0.95);
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
  gap: 20px;
}

.cad-lp .nav-contact-item {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.cad-lp .nav-contact-item:hover {
  transform: translateY(-1px);
  opacity: 0.9;
}

.cad-lp .contact-text-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.cad-lp .contact-top-label {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  line-height: 1.1;
  margin-bottom: 2px;
}

.cad-lp .contact-top-label.wa-label {
  color: #10B981;
}

.cad-lp .contact-top-label.expert-label {
  color: #9CA3AF;
}

.cad-lp .contact-val {
  font-size: 13.5px;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.2;
  font-family: var(--font-body);
}

.cad-lp .nav-vertical-divider {
  width: 1px;
  height: 26px;
  background: rgba(255, 255, 255, 0.16);
  margin: 0 4px;
}

/* ----------------------------------------------------
   ANIMATED BORDER BEAM / GLOW (digiworksDIGITAL.COM STYLE)
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
  padding: 36px 0 45px;
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
  align-items: center !important;
  position: relative;
  z-index: 2;
  animation: fadeInUp 0.8s ease-out forwards;
}

.cad-lp .hero-copy {
  padding: 0;
  position: relative;
  top: -60px;
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

.cad-lp .hero h1,
.cad-lp .hero-title {
  font-size: clamp(34px, 3.5vw, 50px);
  max-width: 720px;
  margin-top: 0;
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.035em;
  position: relative;
  z-index: 1;
}

.cad-lp .hero h1 span,
.cad-lp .section-title-row h2 span,
.cad-lp .center-heading h2 span,
.cad-lp .accent-text {
  background: linear-gradient(135deg, #6baeff 0%, #2b8cff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;
}

.cad-lp .hero-lead {
  font-size: 14.5px;
  line-height: 1.6;
  color: #94a3b8;
  max-width: 640px;
  margin-top: 14px;
  position: relative;
  z-index: 1;
}

.cad-lp .hero-lead strong {
  color: #ffffff;
  font-weight: 700;
}

/* Hero Status Pills Row (Single Row Layout) */
.cad-lp .hero-status-pills {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 7px;
  margin: 14px 0 14px 0;
  position: relative;
  z-index: 1;
  overflow-x: auto;
  padding-bottom: 2px;
  scrollbar-width: none;
}

.cad-lp .hero-status-pills::-webkit-scrollbar {
  display: none;
}

.cad-lp .status-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(14, 16, 26, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 6px 13px;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  white-space: nowrap;
  flex-shrink: 0;
}

.cad-lp .status-pill:hover {
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
}

.cad-lp .pill-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.cad-lp .dot-amber {
  background: #f59e0b;
  box-shadow: 0 0 8px rgba(245, 158, 11, 0.7);
}

.cad-lp .dot-purple {
  background: #a855f7;
  box-shadow: 0 0 8px rgba(168, 85, 247, 0.7);
}

.cad-lp .dot-pink {
  background: #ec4899;
  box-shadow: 0 0 8px rgba(236, 72, 153, 0.7);
}

.cad-lp .dot-blue {
  background: #3b82f6;
  box-shadow: 0 0 8px rgba(59, 130, 246, 0.7);
}

.cad-lp .dot-green {
  background: #10b981;
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.9);
}

.cad-lp .pill-arrow {
  color: #64748b;
  font-size: 13px;
  font-weight: 700;
  margin: 0 2px;
  flex-shrink: 0;
}

.cad-lp .pill-green-active {
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.45);
  color: #ffffff;
  font-weight: 700;
  box-shadow: 0 0 18px rgba(16, 185, 129, 0.25);
}

/* 2x2 Feature Cards Grid */
.cad-lp .hero-features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
}

.cad-lp .hero-feature-card {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  background: rgba(13, 15, 25, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 14px 16px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.cad-lp .hero-feature-card:hover {
  border-color: rgba(43,140,255, 0.4);
  background: rgba(20, 23, 38, 0.9);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5), 0 0 20px rgba(43,140,255, 0.2);
}

.cad-lp .feature-check-icon {
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1.5px solid var(--red-light);
  background: rgba(43,140,255, 0.12);
  color: var(--red-light);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
}

.cad-lp .hero-feature-card span {
  font-size: 13px;
  line-height: 1.45;
  color: #e2e8f0;
  font-weight: 500;
}

/* HOW IT MOVES Step Tracker Timeline */
.cad-lp .hero-timeline-section {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 14px;
  margin-top: 10px;
}

.cad-lp .timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.cad-lp .timeline-tag-left {
  color: #94a3b8;
}

.cad-lp .timeline-tag-right {
  color: var(--red-light);
}

.cad-lp .timeline-track {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.cad-lp .timeline-line {
  position: absolute;
  top: 6px;
  left: 8px;
  right: 8px;
  height: 2px;
  background: linear-gradient(90deg, rgba(43,140,255, 0.8) 0%, rgba(43,140,255, 0.9) 75%, #2b8cff 100%);
  z-index: 0;
}

.cad-lp .timeline-step {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.cad-lp .step-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #040407;
  border: 2px solid #2b8cff;
  margin-bottom: 12px;
}

.cad-lp .glowing-dot {
  background: #2b8cff;
  border-color: #ffffff;
  box-shadow: 0 0 14px #2b8cff, 0 0 28px rgba(43,140,255, 0.8);
  animation: pulseGlow 2s infinite ease-in-out;
}

@keyframes pulseGlow {

  0%,
  100% {
    box-shadow: 0 0 10px #2b8cff, 0 0 20px rgba(43,140,255, 0.8);
  }

  50% {
    box-shadow: 0 0 18px #2b8cff, 0 0 35px rgba(43,140,255, 1);
    transform: scale(1.15);
  }
}

.cad-lp .step-label {
  font-size: 11px;
  font-weight: 800;
  color: #2b8cff;
  letter-spacing: 0.08em;
  margin-bottom: 4px;
}

.cad-lp .step-title {
  font-size: 13px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.3;
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

.cad-lp .hero-proposal-card {
  background: radial-gradient(ellipse at 50% -10%, rgba(43,140,255, 0.09) 0%, rgba(11, 12, 18, 0.96) 65%);
  border: 1px solid rgb(43,140,255);
  border-radius: 20px;
  padding: 16px 22px 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.85), 0 0 45px rgba(43,140,255, 0.16);
  position: relative;
  z-index: 3;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.cad-lp .hero-proposal-card:hover {
  border-color: rgba(43,140,255, 0.55);
  box-shadow: 0 25px 75px rgba(0, 0, 0, 0.95), 0 0 55px rgba(43,140,255, 0.28);
}

.cad-lp .quote-head span {
  font-size: 9px;
  color: var(--red-light);
  font-weight: 800;
  letter-spacing: 0.14em;
}

.cad-lp .hero-proposal-card .quote-head h2 {
  font-family: var(--font-heading);
  font-size: clamp(24px, 2.2vw, 29px);
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.025em;
  line-height: 1.22;
  margin: 0 0 8px;
}

.cad-lp .hero-proposal-card .proposal-subhead {
  font-size: 13.5px;
  line-height: 1.55;
  color: #94a3b8;
  margin: 0 0 16px;
}

.cad-lp .hero-proposal-card .proposal-subhead strong {
  color: #ffffff;
  font-weight: 700;
}

/* Feature Chips */
.cad-lp .proposal-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-bottom: 22px;
}

.cad-lp .proposal-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(43,140,255, 0.24);
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  color: #e2e8f0;
  letter-spacing: 0.01em;
  transition: all 0.2s ease;
  user-select: none;
}

.cad-lp .proposal-chip:hover {
  background: rgba(43,140,255, 0.1);
  border-color: rgba(43,140,255, 0.45);
  color: #ffffff;
}

.cad-lp .chip-check {
  width: 12px;
  height: 12px;
  stroke: #2b8cff;
  flex-shrink: 0;
}

/* Fields & Labels */
.cad-lp .field {
  margin-bottom: 15px;
  position: relative;
}

.cad-lp .field label {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 4px;
  font-size: 11px;
  color: #cbd5e1;
  font-weight: 800;
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: var(--font-body);
}

.cad-lp .req-star {
  color: #2b8cff;
  font-weight: 800;
  font-size: 13px;
  line-height: 1;
}

.cad-lp .label-opt {
  color: #64748b;
  font-weight: 500;
  font-size: 11px;
  text-transform: none;
  letter-spacing: 0;
  margin-left: 2px;
}

.cad-lp .field input,
.cad-lp .field select {
  width: 100%;
  height: 48px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 9px;
  padding: 0 16px;
  outline: none;
  background: #08090f;
  color: #ffffff;
  font-size: 13.5px;
  font-family: var(--font-body);
  transition: all 0.25s ease;
  box-sizing: border-box;
}

.cad-lp .field input::placeholder {
  color: #52586b;
  font-weight: 400;
}

.cad-lp .field input:hover,
.cad-lp .field select:hover {
  border-color: rgba(255, 255, 255, 0.22);
  background: #0c0d15;
}

.cad-lp .field input:focus,
.cad-lp .field select:focus {
  border-color: #2b8cff !important;
  box-shadow: 0 0 0 3px rgba(43,140,255, 0.24), 0 0 16px rgba(43,140,255, 0.16) !important;
  background: #0d0e17 !important;
  color: #ffffff !important;
}

/* Custom Select Wrap for Budget Range */
.cad-lp .select-dropdown-wrap {
  position: relative;
  width: 100%;
}

.cad-lp .select-dropdown-wrap select {
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  padding-right: 38px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='7' viewBox='0 0 12 7'%3E%3Cpath fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' d='M1 1l5 5 5-5'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-color: #08090f;
}

.cad-lp .select-dropdown-wrap select:focus {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='7' viewBox='0 0 12 7'%3E%3Cpath fill='none' stroke='%23ff2b3f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' d='M1 1l5 5 5-5'/%3E%3C/svg%3E");
}

/* CTA Proposal Button */
.cad-lp .quote-btn,
.cad-lp .proposal-submit-btn {
  width: 100%;
  height: 52px;
  border: 0;
  border-radius: 10px;
  background: linear-gradient(135deg, #2387ff 0%, #dc2626 100%);
  color: #ffffff;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  margin-top: 8px;
  box-shadow: 0 8px 25px rgba(43,140,255, 0.48);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  letter-spacing: -0.01em;
}

.cad-lp .quote-btn:hover,
.cad-lp .proposal-submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 34px rgba(43,140,255, 0.72);
  filter: brightness(1.06);
}

.cad-lp .quote-btn:active,
.cad-lp .proposal-submit-btn:active {
  transform: translateY(0);
  box-shadow: 0 4px 16px rgba(43,140,255, 0.4);
}

.cad-lp .proposal-submit-btn svg {
  transition: transform 0.25s ease;
}

.cad-lp .proposal-submit-btn:hover svg {
  transform: translateX(4px);
}

/* Trust & Security Notes */
.cad-lp .proposal-trust {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 11.5px;
  color: #94a3b8;
  margin-top: 14px;
  text-align: center;
  font-weight: 500;
}

.cad-lp .proposal-trust svg {
  color: #2b8cff !important;
  width: 13px;
  height: 13px;
  flex-shrink: 0;
}

.cad-lp .proposal-terms {
  font-size: 11px;
  color: #64748b;
  margin-top: 8px;
  text-align: center;
  line-height: 1.5;
}

.cad-lp .proposal-terms a {
  color: #94a3b8;
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color 0.2s ease, text-decoration-color 0.2s ease;
}

.cad-lp .proposal-terms a:hover {
  color: #ffffff;
  text-decoration-color: #2b8cff;
}

.cad-lp .form-trust {
  text-align: center;
  color: var(--muted-dark);
  font-size: 11px;
  margin-top: 12px;
}

/* Responsive adjustments for hero proposal form */
@media (max-width: 640px) {
  .cad-lp .hero-proposal-card {
    padding: 22px 16px 20px;
    border-radius: 16px;
  }

  .cad-lp .hero-proposal-card .quote-head h2 {
    font-size: 22px;
  }

  .cad-lp .proposal-subhead {
    font-size: 13px;
    margin-bottom: 12px;
  }

  .cad-lp .proposal-chips {
    gap: 6px;
    margin-bottom: 18px;
  }

  .cad-lp .proposal-chip {
    font-size: 11px;
    padding: 4px 10px;
  }

  .cad-lp .proposal-submit-btn {
    height: 48px;
    font-size: 14px;
  }

  .cad-lp select.country-code-select {
    width: 96px !important;
    min-width: 96px !important;
    max-width: 96px !important;
    flex: 0 0 96px !important;
    font-size: 12.5px !important;
    padding-left: 32px !important;
  }
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

.cad-lp .section.portfolio {
  padding: 100px 0 80px 0;
  position: relative;
  background-color: #090608;
  background-image:
    radial-gradient(ellipse 75% 45% at 50% 0%, rgba(43,140,255, 0.16) 0%, rgba(160, 20, 40, 0.05) 50%, transparent 80%),
    radial-gradient(ellipse 50% 30% at 20% 0%, rgba(255, 80, 100, 0.07) 0%, transparent 70%),
    radial-gradient(ellipse 50% 30% at 80% 0%, rgba(43,140,255, 0.07) 0%, transparent 70%);
  overflow: hidden;
}

.cad-lp .section.portfolio .section-kicker {
  display: inline-block;
  padding: 6px 18px;
  border-radius: 999px;
  background: rgba(43,140,255, 0.08);
  border: 1px solid rgba(43,140,255, 0.32);
  color: #6baeff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 20px;
  box-shadow: 0 0 15px rgba(43,140,255, 0.12);
}

.cad-lp .section.portfolio .section-title-row h2 {
  color: #ffffff;
  font-size: clamp(34px, 3.8vw, 52px);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.15;
}

.cad-lp .section.portfolio .section-title-row h2 span {
  background: linear-gradient(135deg, #ff8095 0%, #52a1ff 50%, #4a9cff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;
}

.cad-lp .section.portfolio .section-title-row p {
  color: #94a3b8;
  font-size: 15px;
  margin-top: 14px;
}

.cad-lp .section.portfolio .outline-link {
  background: rgba(43,140,255, 0.12);
  border: 1px solid rgba(43,140,255, 0.35);
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 700;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cad-lp .section.portfolio .outline-link:hover {
  background: #2b8cff;
  color: #ffffff;
  border-color: #2b8cff;
  box-shadow: 0 0 25px rgba(43,140,255, 0.5);
  transform: translateY(-2px);
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
  width: 207px;
}

.cad-lp .showcase-info h3 {
  font-size: 20px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.03em;
  line-height: 1.15;
  margin-bottom: 6px;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.9);
}

.cad-lp .showcase-info p {
  font-size: 12px;
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
  background-color: #080507;
  background-image:
    radial-gradient(ellipse 75% 45% at 50% 0%, rgba(43,140,255, 0.15) 0%, rgba(160, 20, 40, 0.04) 50%, transparent 80%),
    radial-gradient(ellipse 40% 30% at 15% 20%, rgba(255, 80, 100, 0.06) 0%, transparent 60%);
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
   3D NUMBER ROTATION & FLIP ANIMATION ON SCROLL
---------------------------------------------------- */
.cad-lp .number-rotating {
  display: inline-block;
  perspective: 600px;
  animation: numberRotateFlip 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes numberRotateFlip {
  0% {
    opacity: 0.2;
    transform: rotateX(-90deg) scale(0.8);
    filter: blur(4px);
  }

  50% {
    transform: rotateX(18deg) scale(1.08);
    filter: blur(0px);
  }

  100% {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
    filter: blur(0px);
  }
}

/* ----------------------------------------------------
   MID CONSULTATION BANNER (MATCHING SCREENSHOT)
---------------------------------------------------- */
.cad-lp .consult-section {
  padding: 100px 0;
  position: relative;
  background-color: #080507;
  background-image:
    radial-gradient(ellipse 75% 45% at 50% 0%, rgba(43,140,255, 0.16) 0%, rgba(160, 20, 40, 0.05) 50%, transparent 80%),
    radial-gradient(ellipse 40% 30% at 10% 20%, rgba(255, 80, 100, 0.06) 0%, transparent 60%);
  overflow: hidden;
}

.cad-lp .consult-box {
  position: relative;
  overflow: hidden;
  background-color: #060406;
  background-image:
    linear-gradient(90deg, #060406 38%, rgba(6, 4, 6, 0.82) 68%, rgba(6, 4, 6, 0.55) 100%),
    url('../cad/consult-bg-red.png');
  background-position: center right;
  background-size: cover;
  background-repeat: no-repeat;
  border: 1px solid rgba(43,140,255, 0.28);
  border-radius: 28px;
  padding: 56px 60px;
  min-height: 280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7), 0 0 35px rgba(43,140,255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.cad-lp .consult-box:hover {
  border-color: rgba(43,140,255, 0.5);
  box-shadow: 0 25px 70px rgba(43,140,255, 0.25), 0 10px 35px rgba(0, 0, 0, 0.8);
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
  color: #ffffff;
}

.cad-lp .consult-content h2 span,
.cad-lp .consult-content h2 .accent-text {
  background: linear-gradient(135deg, #ff8095 0%, #52a1ff 50%, #4a9cff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;
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
  padding: 100px 0;
  position: relative;
  background-color: #090608;
  background-image:
    radial-gradient(ellipse 75% 45% at 50% 0%, rgba(43,140,255, 0.15) 0%, rgba(160, 20, 40, 0.05) 50%, transparent 80%),
    radial-gradient(ellipse 50% 30% at 85% 20%, rgba(255, 80, 100, 0.06) 0%, transparent 70%);
  overflow: hidden;
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
.cad-lp .industries {
  padding: 100px 0;
  position: relative;
  background-color: #080507;
  background-image:
    radial-gradient(ellipse 75% 45% at 50% 0%, rgba(43,140,255, 0.16) 0%, rgba(160, 20, 40, 0.05) 50%, transparent 80%),
    radial-gradient(ellipse 40% 30% at 90% 20%, rgba(255, 80, 100, 0.06) 0%, transparent 60%);
  overflow: hidden;
}

.cad-lp .industry-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  overflow: hidden;
  background: rgba(9, 11, 20, 0.85);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
}

.cad-lp .industry-grid article {
  padding: 32px 28px;
  min-height: 235px;
  border-right: 1px solid rgba(255, 255, 255, 0.07);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  background: transparent;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.cad-lp .industry-grid article:nth-child(4n) {
  border-right: none;
}

.cad-lp .industry-grid article:nth-child(n+5) {
  border-bottom: none;
}

.cad-lp .industry-grid article:hover {
  background: rgba(16, 19, 32, 0.95);
  transform: translateY(-4px);
  z-index: 2;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.8);
}

.cad-lp .industry-grid article div {
  width: 46px;
  height: 46px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  font-size: 15px;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s ease;
}

.cad-lp .industry-grid article:hover div {
  transform: scale(1.12);
}

/* 1. Healthcare - Emerald */
.cad-lp .industry-grid article:nth-child(1) div {
  color: #10b981;
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.35);
  box-shadow: 0 0 15px rgba(16, 185, 129, 0.2);
}

.cad-lp .industry-grid article:nth-child(1):hover div {
  box-shadow: 0 0 25px rgba(16, 185, 129, 0.5);
}

/* 2. Fintech - Blue */
.cad-lp .industry-grid article:nth-child(2) div {
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.12);
  border: 1px solid rgba(59, 130, 246, 0.35);
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.2);
}

.cad-lp .industry-grid article:nth-child(2):hover div {
  box-shadow: 0 0 25px rgba(59, 130, 246, 0.5);
}

/* 3. eCommerce - Purple */
.cad-lp .industry-grid article:nth-child(3) div {
  color: #a855f7;
  background: rgba(168, 85, 247, 0.12);
  border: 1px solid rgba(168, 85, 247, 0.35);
  box-shadow: 0 0 15px rgba(168, 85, 247, 0.2);
}

.cad-lp .industry-grid article:nth-child(3):hover div {
  box-shadow: 0 0 25px rgba(168, 85, 247, 0.5);
}

/* 4. Education - Indigo */
.cad-lp .industry-grid article:nth-child(4) div {
  color: #6366f1;
  background: rgba(99, 102, 241, 0.12);
  border: 1px solid rgba(99, 102, 241, 0.35);
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.2);
}

.cad-lp .industry-grid article:nth-child(4):hover div {
  box-shadow: 0 0 25px rgba(99, 102, 241, 0.5);
}

/* 5. Real Estate - Amber */
.cad-lp .industry-grid article:nth-child(5) div {
  color: #f59e0b;
  background: rgba(245, 158, 11, 0.12);
  border: 1px solid rgba(245, 158, 11, 0.35);
  box-shadow: 0 0 15px rgba(245, 158, 11, 0.2);
}

.cad-lp .industry-grid article:nth-child(5):hover div {
  box-shadow: 0 0 25px rgba(245, 158, 11, 0.5);
}

/* 6. On-Demand - Orange */
.cad-lp .industry-grid article:nth-child(6) div {
  color: #f97316;
  background: rgba(249, 115, 22, 0.12);
  border: 1px solid rgba(249, 115, 22, 0.35);
  box-shadow: 0 0 15px rgba(249, 115, 22, 0.2);
}

.cad-lp .industry-grid article:nth-child(6):hover div {
  box-shadow: 0 0 25px rgba(249, 115, 22, 0.5);
}

/* 7. Logistics - Cyan */
.cad-lp .industry-grid article:nth-child(7) div {
  color: #06b6d4;
  background: rgba(6, 182, 212, 0.12);
  border: 1px solid rgba(6, 182, 212, 0.35);
  box-shadow: 0 0 15px rgba(6, 182, 212, 0.2);
}

.cad-lp .industry-grid article:nth-child(7):hover div {
  box-shadow: 0 0 25px rgba(6, 182, 212, 0.5);
}

/* 8. AI & Enterprise - Red */
.cad-lp .industry-grid article:nth-child(8) div {
  color: #2b8cff;
  background: rgba(43,140,255, 0.12);
  border: 1px solid rgba(43,140,255, 0.35);
  box-shadow: 0 0 15px rgba(43,140,255, 0.2);
}

.cad-lp .industry-grid article:nth-child(8):hover div {
  box-shadow: 0 0 25px rgba(43,140,255, 0.5);
}

.cad-lp .industry-grid h3 {
  font-size: 20px;
  font-weight: 800;
  color: #ffffff;
  margin-top: 24px;
}

.cad-lp .industry-grid p {
  font-size: 13.5px;
  line-height: 1.6;
  margin-top: 8px;
  color: #94a3b8;
}

/* ----------------------------------------------------
   WHAT WE BUILD SECTION
---------------------------------------------------- */
.cad-lp .build-section {
  padding: 100px 0;
  position: relative;
  background-color: #080507;
  background-image:
    radial-gradient(ellipse 75% 45% at 50% 0%, rgba(43,140,255, 0.16) 0%, rgba(160, 20, 40, 0.05) 50%, transparent 80%),
    radial-gradient(ellipse 40% 30% at 10% 30%, rgba(255, 80, 100, 0.06) 0%, transparent 60%);
  overflow: hidden;
}

.cad-lp .build-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 50px;
}

.cad-lp .build-grid article {
  background: rgba(10, 12, 22, 0.85);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 30px 24px;
  min-height: 220px;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6);
}

.cad-lp .build-grid article:hover {
  transform: translateY(-8px);
  background: rgba(15, 18, 32, 0.92);
  border-color: rgba(43,140,255, 0.45);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.85), 0 0 25px rgba(43,140,255, 0.2);
}

.cad-lp .build-grid article span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  margin-bottom: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cad-lp .build-grid article:hover span {
  transform: scale(1.1);
}

/* 1. Enterprise Mobile Apps - Cyan */
.cad-lp .build-grid article:nth-child(1) span {
  color: #06b6d4;
  background: rgba(6, 182, 212, 0.12);
  border: 1px solid rgba(6, 182, 212, 0.35);
  box-shadow: 0 0 12px rgba(6, 182, 212, 0.2);
}

.cad-lp .build-grid article:nth-child(1):hover {
  border-color: rgba(6, 182, 212, 0.5);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.85), 0 0 25px rgba(6, 182, 212, 0.25);
}

/* 2. AI-Powered Apps - Red/Pink */
.cad-lp .build-grid article:nth-child(2) span {
  color: #52a1ff;
  background: rgba(43,140,255, 0.12);
  border: 1px solid rgba(43,140,255, 0.35);
  box-shadow: 0 0 12px rgba(43,140,255, 0.2);
}

.cad-lp .build-grid article:nth-child(2):hover {
  border-color: rgba(43,140,255, 0.5);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.85), 0 0 25px rgba(43,140,255, 0.25);
}

/* 3. Social Network Apps - Violet */
.cad-lp .build-grid article:nth-child(3) span {
  color: #a855f7;
  background: rgba(168, 85, 247, 0.12);
  border: 1px solid rgba(168, 85, 247, 0.35);
  box-shadow: 0 0 12px rgba(168, 85, 247, 0.2);
}

.cad-lp .build-grid article:nth-child(3):hover {
  border-color: rgba(168, 85, 247, 0.5);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.85), 0 0 25px rgba(168, 85, 247, 0.25);
}

/* 4. Smart Device & IoT Apps - Emerald */
.cad-lp .build-grid article:nth-child(4) span {
  color: #10b981;
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.35);
  box-shadow: 0 0 12px rgba(16, 185, 129, 0.2);
}

.cad-lp .build-grid article:nth-child(4):hover {
  border-color: rgba(16, 185, 129, 0.5);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.85), 0 0 25px rgba(16, 185, 129, 0.25);
}

/* 5. Messenger Apps - Teal/Cyan */
.cad-lp .build-grid article:nth-child(5) span {
  color: #00e5ff;
  background: rgba(0, 229, 255, 0.12);
  border: 1px solid rgba(0, 229, 255, 0.35);
  box-shadow: 0 0 12px rgba(0, 229, 255, 0.2);
}

.cad-lp .build-grid article:nth-child(5):hover {
  border-color: rgba(0, 229, 255, 0.5);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.85), 0 0 25px rgba(0, 229, 255, 0.25);
}

/* 6. Geo-Service Apps - Amber */
.cad-lp .build-grid article:nth-child(6) span {
  color: #f59e0b;
  background: rgba(245, 158, 11, 0.12);
  border: 1px solid rgba(245, 158, 11, 0.35);
  box-shadow: 0 0 12px rgba(245, 158, 11, 0.2);
}

.cad-lp .build-grid article:nth-child(6):hover {
  border-color: rgba(245, 158, 11, 0.5);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.85), 0 0 25px rgba(245, 158, 11, 0.25);
}

/* 7. Wearable Apps - Pink */
.cad-lp .build-grid article:nth-child(7) span {
  color: #ec4899;
  background: rgba(236, 72, 153, 0.12);
  border: 1px solid rgba(236, 72, 153, 0.35);
  box-shadow: 0 0 12px rgba(236, 72, 153, 0.2);
}

.cad-lp .build-grid article:nth-child(7):hover {
  border-color: rgba(236, 72, 153, 0.5);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.85), 0 0 25px rgba(236, 72, 153, 0.25);
}

/* 8. Cross-Platform Apps - Indigo */
.cad-lp .build-grid article:nth-child(8) span {
  color: #6366f1;
  background: rgba(99, 102, 241, 0.12);
  border: 1px solid rgba(99, 102, 241, 0.35);
  box-shadow: 0 0 12px rgba(99, 102, 241, 0.2);
}

.cad-lp .build-grid article:nth-child(8):hover {
  border-color: rgba(99, 102, 241, 0.5);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.85), 0 0 25px rgba(99, 102, 241, 0.25);
}

.cad-lp .build-grid h3 {
  font-size: 20px;
  font-weight: 800;
  color: #ffffff;
  margin-top: 10px;
}

.cad-lp .build-grid p {
  font-size: 13.5px;
  line-height: 1.6;
  margin-top: 8px;
  color: #94a3b8;
}

/* ----------------------------------------------------
   AWARDS & RECOGNITION (REDESIGNED MATCHING SCREENSHOT)
---------------------------------------------------- */
.cad-lp .awards-section {
  padding: 100px 0;
  background-color: #080507;
  background-image:
    radial-gradient(ellipse 75% 45% at 50% 0%, rgba(43,140,255, 0.15) 0%, rgba(160, 20, 40, 0.05) 50%, transparent 80%);
  border-top: 1px solid var(--line);
  position: relative;
  overflow: hidden;
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
  background: rgba(13, 14, 22, 0.85);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 20px 16px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: 1px solid rgba(43,140,255, 0.25);
}

.cad-lp .badge-card:hover {
  transform: translateY(-6px) scale(1.04);
  box-shadow: 0 20px 45px rgba(43,140,255, 0.35), 0 8px 24px rgba(0, 0, 0, 0.6);
  border-color: rgba(43,140,255, 0.8);
  background: rgba(18, 20, 32, 0.95);
}

.cad-lp .badge-card svg,
.cad-lp .badge-card img {
  max-width: 100%;
  max-height: 90px;
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
  background-color: #070406;
  background-image:
    radial-gradient(ellipse 80% 50% at 50% 0%, rgba(43,140,255, 0.16) 0%, rgba(160, 20, 40, 0.05) 50%, transparent 80%);
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
  color: #ffffff;
  display: inline-block;
}

.cad-lp .reviews-header h2 .who-gradient {
  background: linear-gradient(135deg, #ffffff 0%, #80baff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cad-lp .reviews-header h2 .ship-underline {
  color: #2b8cff;
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
  box-shadow: 0 0 12px #2b8cff, 0 0 24px rgba(43,140,255, 0.8);
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
  background: linear-gradient(to right, #070406 0%, rgba(7, 4, 6, 0) 100%);
}

.cad-lp .marquee-wrapper::after {
  right: 0;
  background: linear-gradient(to left, #070406 0%, rgba(7, 4, 6, 0) 100%);
}

.cad-lp .marquee-track {
  display: flex;
  gap: 24px;
  width: max-content;
  will-change: transform;
}

.cad-lp .marquee-track-left {
  animation: marqueeLeft 40s linear infinite;
}

.cad-lp .marquee-track-right {
  animation: marqueeRight 40s linear infinite;
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
  position: relative;
  overflow: hidden;
}

.cad-lp .review-card:hover {
  border-color: rgba(43,140,255, 0.45);
  background: #12131c;

  box-shadow: 0 16px 45px rgba(0, 0, 0, 0.5), 0 0 25px rgba(43,140,255, 0.15);
}

/* Individual Card Hover Colors matching Avatar Themes */
.cad-lp .review-card.rev-green:hover {
  border-color: rgba(16, 185, 129, 0.75);
  box-shadow: 0 16px 45px rgba(0, 0, 0, 0.6), 0 0 25px rgba(16, 185, 129, 0.35);
}

.cad-lp .review-card.rev-cyan:hover {
  border-color: rgba(6, 182, 212, 0.75);
  box-shadow: 0 16px 45px rgba(0, 0, 0, 0.6), 0 0 25px rgba(6, 182, 212, 0.35);
}

.cad-lp .review-card.rev-orange:hover {
  border-color: rgba(249, 115, 22, 0.85);
  box-shadow: 0 16px 45px rgba(0, 0, 0, 0.6), 0 0 25px rgba(249, 115, 22, 0.4);
}

.cad-lp .review-card.rev-purple:hover {
  border-color: rgba(168, 85, 247, 0.75);
  box-shadow: 0 16px 45px rgba(0, 0, 0, 0.6), 0 0 25px rgba(168, 85, 247, 0.35);
}

.cad-lp .review-card.rev-blue:hover {
  border-color: rgba(59, 130, 246, 0.75);
  box-shadow: 0 16px 45px rgba(0, 0, 0, 0.6), 0 0 25px rgba(59, 130, 246, 0.35);
}



.cad-lp .review-stars {
  color: #2b8cff;
  font-size: 16px;
  letter-spacing: 3px;
  margin-bottom: 16px;
  text-shadow: 0 0 10px rgba(43,140,255, 0.4);
  position: relative;
  z-index: 2;
}

.cad-lp .review-text {
  color: #cbd5e1;
  font-size: 15px;
  line-height: 1.65;
  font-style: normal;
  margin-bottom: 24px;
  font-weight: 400;
  position: relative;
  z-index: 2;
}

.cad-lp .review-user {
  display: flex;
  align-items: center;
  gap: 14px;
  position: relative;
  z-index: 2;
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

/* Custom Colored Avatar Badges matching screenshot */
.cad-lp .review-avatar.avatar-green {
  background: #10b981;
  color: #ffffff;
  box-shadow: 0 0 12px rgba(16, 185, 129, 0.4);
}

.cad-lp .review-avatar.avatar-cyan {
  background: #06b6d4;
  color: #ffffff;
  box-shadow: 0 0 12px rgba(6, 182, 212, 0.4);
}

.cad-lp .review-avatar.avatar-orange {
  background: #f97316;
  color: #ffffff;
  box-shadow: 0 0 12px rgba(249, 115, 22, 0.4);
}

.cad-lp .review-avatar.avatar-purple {
  background: #a855f7;
  color: #ffffff;
  box-shadow: 0 0 12px rgba(168, 85, 247, 0.4);
}

.cad-lp .review-avatar.avatar-blue {
  background: #3b82f6;
  color: #ffffff;
  box-shadow: 0 0 12px rgba(59, 130, 246, 0.4);
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
  background-color: #090608;
  background-image:
    radial-gradient(ellipse 75% 45% at 50% 0%, rgba(43,140,255, 0.16) 0%, rgba(160, 20, 40, 0.05) 50%, transparent 80%);
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
  color: #ffffff;
  display: inline-block;
}

.cad-lp .estimate-copy h2 .strategy-gradient {
  background: linear-gradient(135deg, #ffffff 0%, #80baff 40%, #2b8cff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cad-lp .estimate-sub {
  color: #94a3b8;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 32px;
  max-width: 480px;
  font-weight: 400;
}

.cad-lp .next-steps-kicker-wrap {
  position: relative;
  margin-bottom: 24px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.cad-lp .next-steps-kicker {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #64748b;
  text-transform: uppercase;
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

/* Redesigned Form Card matching screenshot */
.cad-lp .estimate-form {
  display: flex;
  flex-direction: column;
  gap: 22px;
  background: #0c0d16;
  border: 1px solid rgb(43,140,255);
  border-radius: 24px;
  padding: 36px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cad-lp .estimate-form:hover {
  border-color: rgba(43,140,255, 0.25);
  box-shadow: 0 25px 65px rgba(0, 0, 0, 0.65), 0 0 30px rgba(43,140,255, 0.1);
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
  gap: 18px;
  width: 100%;
}

@media (max-width: 640px) {
  .cad-lp .form-row-grid {
    grid-template-columns: 1fr;
    gap: 16px;
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
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.1px;
  color: #7d8b9e;
  text-transform: uppercase;
}

.cad-lp .form-field-group input,
.cad-lp .form-field-group select,
.cad-lp .form-field-group textarea {
  width: 100%;
  box-sizing: border-box;
  background: #06070e;
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 10px;
  color: #ffffff;
  font-family: inherit;
  font-size: 14px;
  padding: 0 16px;
  outline: none;
  transition: all 0.25s ease;
}

.cad-lp .form-field-group input,
.cad-lp .form-field-group select {
  height: 48px;
}

.cad-lp .form-field-group input:focus,
.cad-lp .form-field-group select:focus,
.cad-lp .form-field-group textarea:focus {
  border-color: rgba(43,140,255, 0.6);
  box-shadow: 0 0 0 3px rgba(43,140,255, 0.18);
  background: #0a0b14;
}

.cad-lp .form-field-group input::placeholder,
.cad-lp .form-field-group textarea::placeholder {
  color: #4a566a;
  font-weight: 400;
}

.cad-lp .form-field-group select {
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%237d8b9e' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px;
  cursor: pointer;
}

.cad-lp .form-field-group select option {
  background: #0c0d16;
  color: #ffffff;
  padding: 12px;
}

.cad-lp .form-field-group textarea {
  height: 100px;
  min-height: 80px;
  padding: 14px 16px;
  resize: vertical;
  line-height: 1.55;
}

/* Phone input layout override */
.cad-lp .phone-input-wrap {
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
  width: 100% !important;
  box-sizing: border-box;
  position: relative !important;
}

.cad-lp .selected-flag-box {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  position: absolute !important;
  left: 10px !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  z-index: 3 !important;
  pointer-events: none !important;
}

.cad-lp .flag-icon-img {
  width: 20px !important;
  height: 14px !important;
  object-fit: cover !important;
  border-radius: 2px !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4) !important;
  display: block !important;
}

.cad-lp select.country-code-select {
  width: 105px !important;
  min-width: 105px !important;
  max-width: 105px !important;
  flex: 0 0 105px !important;
  height: 48px !important;
  background: #06070e !important;
  border: 1px solid rgba(255, 255, 255, 0.09) !important;
  color: #ffffff !important;
  border-radius: 10px !important;
  padding: 0 4px 0 36px !important;
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
  box-shadow: 0 0 0 3px rgba(43,140,255, 0.18) !important;
}

.cad-lp input.phone-num-input {
  flex: 1 1 auto !important;
  width: 100% !important;
  min-width: 0 !important;
  height: 48px !important;
  box-sizing: border-box !important;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #08090f;
  border-radius: 10px;
  color: #fff;
  padding-left: 11px;
}

.cad-lp .submit-discuss-btn {
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #2b8cff 0%, #1c72d9 100%);
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.2px;
  cursor: pointer;
  margin-top: 6px;
  box-shadow: 0 8px 25px rgba(43,140,255, 0.45);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cad-lp .submit-discuss-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 35px rgba(43,140,255, 0.65);
  background: linear-gradient(135deg, #3b94ff 0%, #227be6 100%);
}

.cad-lp .form-bottom-note {
  font-size: 12px;
  color: #64748b;
  line-height: 1.55;
  text-align: left;
  margin-top: 4px;
  font-weight: 400;
}

/* ----------------------------------------------------
   FAQ SECTION
---------------------------------------------------- */
.cad-lp .faq-section {
  padding: 100px 0;
  background-color: #060407;
  background-image:
    radial-gradient(ellipse 65% 55% at 88% 25%, rgba(43,140,255, 0.15) 0%, rgba(160, 20, 40, 0.04) 50%, transparent 80%),
    radial-gradient(ellipse 55% 45% at 12% 35%, rgba(43,140,255, 0.08) 0%, transparent 60%);
  border-top: 1px solid var(--line);
  position: relative;
  overflow: hidden;
}

.cad-lp .faq-layout {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 60px;
  align-items: start;
}

.cad-lp .faq-kicker-badge {
  display: inline-block;
  padding: 4px 14px;
  border-radius: 99px;
  background: rgba(43,140,255, 0.12);
  border: 1px solid rgba(43,140,255, 0.35);
  color: #2b8cff;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.1em;
  margin-bottom: 20px;
  box-shadow: 0 0 15px rgba(43,140,255, 0.2);
}

.cad-lp .faq-layout>div:first-child h2 {
  font-family: var(--font-heading);
  font-size: clamp(34px, 4.5vw, 56px);
  font-weight: 800;
  line-height: 1.12;
  margin-top: 0;
  letter-spacing: -0.8px;
  color: #ffffff;
}

.cad-lp .faq-asked-gradient {
  background: linear-gradient(135deg, #ffffff 0%, #80baff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cad-lp .faq-questions-gradient {
  background: linear-gradient(135deg, #80baff 0%, #4b9dff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cad-lp .faq-list details {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
}

.cad-lp .faq-list details[open] {
  border-bottom-color: rgba(43,140,255, 0.4);
}

.cad-lp .faq-list summary {
  list-style: none;
  cursor: pointer;
  padding: 22px 0;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font: 700 17.5px var(--font-heading);
  color: #ffffff;
  transition: color 0.3s ease;
}

.cad-lp .faq-list summary:hover {
  color: #52a1ff;
}

.cad-lp .faq-list summary::-webkit-details-marker {
  display: none;
}

.cad-lp .faq-list summary span {
  color: #2b8cff;
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
  transition: transform 0.3s ease;
  display: inline-block;
}

.cad-lp .faq-list details[open] summary span {
  transform: rotate(45deg);
  color: #2b8cff;
}

.cad-lp .faq-list p {
  font-size: 14.5px;
  line-height: 1.65;
  padding: 0 40px 22px 0;
  color: #94a3b8;
  font-weight: 400;
}

/* ----------------------------------------------------
   CYBER RED LASER METEOR ANIMATION SYSTEM
---------------------------------------------------- */
.cad-lp .cyber-laser-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 1;
}

.cad-lp .laser-streak {
  position: absolute;
  width: 2px;
  background: linear-gradient(180deg, #2b8cff 0%, rgba(43,140,255, 0.75) 60%, transparent 100%);
  box-shadow: 0 0 14px rgba(43,140,255, 1), 0 0 28px rgba(43,140,255, 0.6);
  transform: rotate(-35deg);
  opacity: 0.95;
  animation: laserStreakFall 4.2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
  border-radius: 99px;
}

.cad-lp .laser-streak.l1 {
  top: -25%;
  left: 2%;
  height: 160px;
  animation-delay: 0s;
  animation-duration: 3.8s;
}

.cad-lp .laser-streak.l2 {
  top: -25%;
  left: 9%;
  height: 100px;
  animation-delay: 1.6s;
  animation-duration: 5.0s;
}

.cad-lp .laser-streak.l3 {
  top: -25%;
  left: 16%;
  height: 210px;
  animation-delay: 0.5s;
  animation-duration: 3.4s;
}

.cad-lp .laser-streak.l4 {
  top: -25%;
  left: 23%;
  height: 130px;
  animation-delay: 2.7s;
  animation-duration: 5.6s;
}

.cad-lp .laser-streak.l5 {
  top: -25%;
  left: 30%;
  height: 180px;
  animation-delay: 1.1s;
  animation-duration: 4.1s;
}

.cad-lp .laser-streak.l6 {
  top: -25%;
  left: 37%;
  height: 110px;
  animation-delay: 3.2s;
  animation-duration: 4.7s;
}

.cad-lp .laser-streak.l7 {
  top: -25%;
  left: 44%;
  height: 230px;
  animation-delay: 0.1s;
  animation-duration: 3.7s;
}

.cad-lp .laser-streak.l8 {
  top: -25%;
  left: 51%;
  height: 140px;
  animation-delay: 2.0s;
  animation-duration: 5.2s;
}

.cad-lp .laser-streak.l9 {
  top: -25%;
  left: 58%;
  height: 190px;
  animation-delay: 1.3s;
  animation-duration: 3.9s;
}

.cad-lp .laser-streak.l10 {
  top: -25%;
  left: 65%;
  height: 120px;
  animation-delay: 3.7s;
  animation-duration: 5.8s;
}

.cad-lp .laser-streak.l11 {
  top: -25%;
  left: 72%;
  height: 170px;
  animation-delay: 0.8s;
  animation-duration: 4.5s;
}

.cad-lp .laser-streak.l12 {
  top: -25%;
  left: 79%;
  height: 240px;
  animation-delay: 2.3s;
  animation-duration: 3.3s;
}

.cad-lp .laser-streak.l13 {
  top: -25%;
  left: 86%;
  height: 150px;
  animation-delay: 4.0s;
  animation-duration: 5.1s;
}

.cad-lp .laser-streak.l14 {
  top: -25%;
  left: 93%;
  height: 200px;
  animation-delay: 1.7s;
  animation-duration: 4.2s;
}

@keyframes laserStreakFall {
  0% {
    transform: translate(250px, -250px) rotate(-35deg);
    opacity: 0;
  }

  15% {
    opacity: 0.95;
  }

  85% {
    opacity: 0.95;
  }

  100% {
    transform: translate(-500px, 1000px) rotate(-35deg);
    opacity: 0;
  }
}

.cad-lp .section-kicker-pill {
  display: inline-block;
  padding: 4px 14px;
  border-radius: 99px;
  background: rgba(43,140,255, 0.12);
  border: 1px solid rgba(43,140,255, 0.35);
  color: #2b8cff;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.1em;
  margin-bottom: 16px;
  box-shadow: 0 0 15px rgba(43,140,255, 0.2);
}

.cad-lp .global-offices-gradient {
  background: linear-gradient(135deg, #ffffff 0%, #80baff 40%, #4b9dff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cad-lp .offices-section {
  padding: 100px 0;
  position: relative;
  background-color: var(--bg-main);
  overflow: hidden;
  border-top: 1px solid var(--line);
}

.cad-lp .offices-section::before {
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

.cad-lp .offices-section::after {
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

.cad-lp .offices-section .container {
  position: relative;
  z-index: 2;
}

.cad-lp .offices-header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 48px;
}

.cad-lp .offices-header-row h2 {
  font-family: var(--font-heading);
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 800;
  line-height: 1.15;
  color: #ffffff;
  margin-top: 6px;
}

.cad-lp .offices-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.cad-lp .office-card {
  background: #090a12;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
}

.cad-lp .office-card:hover {
  transform: translateY(-6px);
  border-color: rgba(43,140,255, 0.55);
  box-shadow: 0 16px 35px rgba(43,140,255, 0.22), 0 0 20px rgba(43,140,255, 0.15);
}

.cad-lp .office-thumb-wrap {
  position: relative;
  width: 100%;
  height: 150px;
  overflow: hidden;
  background: #040508;
}

.cad-lp .office-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.cad-lp .office-card:hover .office-thumb {
  transform: scale(1.08);
}

.cad-lp .office-badge-hq {
  position: absolute;
  top: 10px;
  left: 10px;
  background: #2b8cff;
  color: #ffffff;
  font-size: 10px;
  font-weight: 800;
  padding: 3px 8px;
  border-radius: 4px;
  letter-spacing: 0.05em;
  box-shadow: 0 2px 8px rgba(43,140,255, 0.5);
  z-index: 2;
}

.cad-lp .office-flag {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 16px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  padding: 2px 6px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  z-index: 2;
}

.cad-lp .office-card-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  gap: 16px;
}

.cad-lp .office-card-body h3 {
  font-family: var(--font-heading);
  font-size: 19px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 2px 0;
}

.cad-lp .office-country {
  font-size: 12px;
  color: #7d8b9e;
  font-weight: 500;
  display: block;
  margin-bottom: 8px;
}

.cad-lp .office-address {
  font-size: 12px;
  color: #64748b;
  line-height: 1.5;
  margin: 0;
}

.cad-lp .office-map-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #2b8cff;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.25s ease;
  margin-top: auto;
}

.cad-lp .office-map-link:hover {
  color: #52a1ff;
  transform: translateX(3px);
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
  background-color: var(--bg-main);
  color: #fff;
  padding: 60px 0 24px;
  border-top: 1px solid var(--line);
}

.cad-lp footer::before {
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

.cad-lp footer::after {
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

.cad-lp .footer-social-row {
  display: flex !important;
  align-items: center !important;
  gap: 10px !important;
  margin-top: 14px !important;
}

.cad-lp .social-circle-btn {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 32px !important;
  height: 32px !important;
  border-radius: 50% !important;
  background: rgba(255, 255, 255, 0.06) !important;
  border: 1px solid rgba(255, 255, 255, 0.12) !important;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
  text-decoration: none !important;
  margin: 0 !important;
}

.cad-lp .social-circle-btn:hover {
  background: rgba(43,140,255, 0.2) !important;
  border-color: rgba(43,140,255, 0.6) !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 4px 15px rgba(43,140,255, 0.35) !important;
}

.cad-lp .footer-hud-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 24px 0 10px;
  position: relative;
  z-index: 2;
}

.cad-lp .hud-dot-grid {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 8px;
}

.cad-lp .hud-dot {
  width: 4px;
  height: 4px;
  background-color: #2b8cff;
  border-radius: 50%;
  opacity: 0.35;
  box-shadow: 0 0 6px rgba(43,140,255, 0.6);
  animation: hudDotPulse 2.5s ease-in-out infinite alternate;
}

.cad-lp .hud-dot:nth-child(2n) {
  animation-delay: 0.4s;
}

.cad-lp .hud-dot:nth-child(3n) {
  animation-delay: 0.8s;
}

.cad-lp .hud-dot:nth-child(4n) {
  animation-delay: 1.2s;
}

@keyframes hudDotPulse {
  0% {
    opacity: 0.2;
    transform: scale(0.8);
  }

  100% {
    opacity: 0.9;
    transform: scale(1.4);
    box-shadow: 0 0 10px rgba(43,140,255, 0.9);
  }
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

@media (max-width: 700px) {
  .cad-lp .header {
    height: 70px;
  }

  .cad-lp .contact-mini {
    display: none;
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
  margin-bottom: 20px;
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
.cad-lp .quote-modal-overlay,
.quote-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 999999;
  background: rgba(4, 4, 7, 0.82);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.35s ease, visibility 0.35s ease;
}

.cad-lp .quote-modal-overlay.active,
.cad-lp.light-theme .quote-modal-overlay.active,
.quote-modal-overlay.active,
#recurringQuoteModalOverlay.active,
#quoteModalOverlay.active {
  display: flex !important;
  opacity: 1 !important;
  visibility: visible !important;
  pointer-events: auto !important;
}

.cad-lp .quote-modal-card,
.cad-lp .split-timeline-modal {
  position: relative;
  background: #090a12;
  border: 1px solid rgba(43,140,255, 0.32);
  border-radius: 24px;
  padding: 0;
  max-width: 900px;
  width: 95vw;
  box-shadow: 0 35px 120px rgba(0, 0, 0, 0.96), 0 0 60px rgba(43,140,255, 0.2);
  transform: scale(0.94) translateY(18px);
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
}

.cad-lp .quote-modal-overlay.active .quote-modal-card,
.cad-lp .quote-modal-overlay.active .split-timeline-modal {
  transform: scale(1) translateY(0);
}

/* Modal Close Icon (Circular Dark Button) */
.cad-lp .modal-close-icon {
  position: absolute;
  top: 18px;
  right: 20px;
  background: #181926;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #94a3b8;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  line-height: 1;
  transition: all 0.25s ease;
  z-index: 30;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.5);
}

.cad-lp .modal-close-icon:hover {
  background: #25273c;
  color: #ffffff;
  border-color: rgba(43,140,255, 0.4);
  transform: scale(1.08) rotate(90deg);
}

.cad-lp .split-timeline-modal .quote-modal-body {
  display: grid;
  grid-template-columns: 40% 60%;
  min-height: 560px;
  align-items: stretch;
}

/* Left Column: Idea -> Production Timeline */
.cad-lp .modal-timeline-col {
  background: #06070d;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  padding: 38px 28px 32px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
}

.cad-lp .timeline-eyebrow {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 800;
  color: #2b8cff;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 18px;
  display: block;
}

.cad-lp .modal-timeline-steps {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding-left: 28px;
}

.cad-lp .modal-timeline-steps::before {
  content: '';
  position: absolute;
  left: 9px;
  top: 10px;
  bottom: 10px;
  width: 2px;
  background: rgba(255, 255, 255, 0.1);
  z-index: 1;
}

.cad-lp .modal-timeline-step {
  position: relative;
  display: flex;
  align-items: flex-start;
  z-index: 2;
}

.cad-lp .modal-step-dot {
  position: absolute;
  left: -28px;
  top: 2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #06070d;
  border: 2px solid rgba(255, 255, 255, 0.22);
  box-sizing: border-box;
  transition: all 0.3s ease;
}

.cad-lp .modal-timeline-step.active .modal-step-dot {
  background: #2b8cff;
  border-color: #2b8cff;
  box-shadow: 0 0 0 4px rgba(43,140,255, 0.25), 0 0 14px #2b8cff;
}

.cad-lp .modal-step-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.cad-lp .modal-step-day {
  font-size: 11px;
  font-weight: 800;
  color: #2b8cff;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-family: var(--font-body);
}

.cad-lp .modal-step-title {
  font-size: 14.5px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.35;
  font-family: var(--font-heading);
}

.cad-lp .modal-timeline-guarantee {
  margin-top: 28px;
  padding-top: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.cad-lp .modal-timeline-guarantee p {
  font-size: 12.5px;
  line-height: 1.55;
  color: #94a3b8;
  margin: 0;
}

.cad-lp .modal-timeline-guarantee strong {
  color: #ffffff;
  font-weight: 700;
  display: block;
  margin-top: 4px;
}

/* Right Column: Form */
.cad-lp .modal-form-col {
  background: #0b0c15;
  padding: 38px 40px 32px 34px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
}

.cad-lp .form-eyebrow {
  font-size: 20px;
  font-weight: 800;
  color: #2b8cff;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 6px;
  display: block;
}

.cad-lp .modal-form-title {
  font-family: var(--font-heading);
  font-size: clamp(24px, 2.3vw, 29px);
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.025em;
  line-height: 1.22;
  margin: 0 0 8px;
}

.cad-lp .modal-form-sub {
  color: #94a3b8;
  font-size: 13px;
  line-height: 1.5;
  margin-bottom: 18px;
}

.cad-lp .modal-form-sub strong {
  color: #ffffff;
  font-weight: 700;
}

.cad-lp .modal-field {
  margin-bottom: 2px;
  position: relative;
}

.cad-lp .modal-field label {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 700;
  color: #cbd5e1;
  margin-bottom: 5px;
  font-family: var(--font-body);
}

.cad-lp .modal-field input.modal-input,
.cad-lp .modal-field textarea.modal-textarea {
  width: 100%;
  background: #08090f;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 9px;
  padding: 10px 14px;
  color: #ffffff;
  font-size: 13.5px;
  font-family: var(--font-body);
  transition: all 0.25s ease;
  outline: none;
  box-sizing: border-box;
}

.cad-lp .modal-field input.modal-input {
  height: 44px;
}

.cad-lp .modal-field textarea.modal-textarea {
  min-height: 60px;
  resize: none;
  line-height: 1.45;
}

.cad-lp .modal-field input.modal-input::placeholder,
.cad-lp .modal-field textarea.modal-textarea::placeholder {
  color: #52586b;
  font-weight: 400;
}

.cad-lp .modal-field input.modal-input:hover,
.cad-lp .modal-field textarea.modal-textarea:hover {
  border-color: rgba(255, 255, 255, 0.22);
  background: #0c0d15;
}

.cad-lp .modal-field input.modal-input:focus,
.cad-lp .modal-field textarea.modal-textarea:focus {
  border-color: #2b8cff !important;
  box-shadow: 0 0 0 3px rgba(43,140,255, 0.24), 0 0 16px rgba(43,140,255, 0.16) !important;
  background: #0d0e17 !important;
  color: #ffffff !important;
}

/* Micro-copy below phone */
.cad-lp .field-subnote {
  font-size: 11px;
  color: #64748b;
  margin-top: 5px;
  font-weight: 500;
  line-height: 1.4;
}

/* Submit button */
.cad-lp .modal-submit-btn {
  width: 100%;
  height: 50px;
  margin-top: 6px;
  border: 0;
  border-radius: 10px;
  background: linear-gradient(135deg, #2387ff 0%, #dc2626 100%);
  color: #ffffff;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(43,140,255, 0.48);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  letter-spacing: -0.01em;
}

.cad-lp .modal-submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 34px rgba(43,140,255, 0.72);
  filter: brightness(1.06);
}

.cad-lp .modal-submit-btn svg {
  transition: transform 0.25s ease;
}

.cad-lp .modal-submit-btn:hover svg {
  transform: translateX(4px);
}

/* Trust footer */
.cad-lp .modal-trust-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 11.5px;
  color: #94a3b8;
  margin-top: 12px;
  text-align: center;
  font-weight: 500;
}

.cad-lp .modal-trust-footer svg {
  color: #2b8cff !important;
  width: 13px;
  height: 13px;
  flex-shrink: 0;
}

/* Responsive Modal Breakpoints */
@media (max-width: 860px) {
  .cad-lp .split-timeline-modal {
    max-width: 540px;
    width: 94vw;
    max-height: 90vh;
    overflow-y: auto;
    border-radius: 20px;
  }

  .cad-lp .split-timeline-modal .quote-modal-body {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .cad-lp .modal-timeline-col {
    padding: 24px 22px 20px;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .cad-lp .timeline-eyebrow {
    margin-bottom: 16px;
  }

  .cad-lp .modal-timeline-steps {
    gap: 16px;
  }

  .cad-lp .modal-step-title {
    font-size: 13.5px;
  }

  .cad-lp .modal-timeline-guarantee {
    margin-top: 16px;
    padding-top: 12px;
  }

  .cad-lp .modal-form-col {
    padding: 28px 24px 24px;
  }

  .cad-lp .modal-form-title {
    font-size: 23px;
  }

  .cad-lp .modal-submit-btn {
    height: 48px;
    font-size: 14px;
  }
}

@media (max-width: 520px) {
  .cad-lp .modal-timeline-col {
    display: none;
    /* Focus mobile modal squarely on high-converting form without vertical bloat */
  }

  .cad-lp .modal-form-col {
    padding: 28px 18px 20px;
  }

  .cad-lp .modal-form-title {
    font-size: 21px;
  }

  .cad-lp select.country-code-select {
    width: 96px !important;
    min-width: 96px !important;
    max-width: 96px !important;
    flex: 0 0 96px !important;
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

  0%,
  100% {
    box-shadow: 0 0 25px rgba(43,140,255, 0.3);
    transform: scale(1);
  }

  50% {
    box-shadow: 0 0 45px rgba(43,140,255, 0.6);
    transform: scale(1.05);
  }
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

  margin-top: 0;
  position: absolute;
  right: 8px;
  font-size: 10px;
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
  background: rgba(6, 182, 212, 0.12);
  border: 1px solid rgba(6, 182, 212, 0.35);
}

.cad-lp .process-card.step-01 .radar-core-node {
  background: linear-gradient(135deg, #06b6d4 0%, #0284c7 100%);
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.7);
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
  background: rgba(168, 85, 247, 0.12);
  border: 1px solid rgba(168, 85, 247, 0.35);
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
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.35);
}

.cad-lp .process-card.step-03 .code-matrix-badge {
  background: #10b981;
  color: #ffffff;
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
  background: rgba(249, 115, 22, 0.12);
  border: 1px solid rgba(249, 115, 22, 0.35);
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

.cad-lp .logo-dark {
  display: block !important;
}

.cad-lp .logo-light {
  display: none !important;
}

.cad-lp.light-theme .logo-dark {
  display: none !important;
}

.cad-lp.light-theme .logo-light {
  display: block !important;
}

.cad-lp.light-theme .header {
  background: rgba(255, 255, 255, 0.95);
  border-bottom-color: #e2e8f0;
  backdrop-filter: blur(16px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
}

.cad-lp.light-theme .nav-contact-item {
  color: #0f172a;
}

.cad-lp.light-theme .contact-top-label.wa-label {
  color: #059669;
}

.cad-lp.light-theme .contact-top-label.expert-label {
  color: #64748b;
}

.cad-lp.light-theme .contact-val {
  color: #0f172a;
}

.cad-lp.light-theme .nav-vertical-divider {
  background: #cbd5e1;
}

.cad-lp.light-theme .hero {
  background: #f8fafc;
  border-bottom-color: #e2e8f0;
}

.cad-lp.light-theme .hero-copy .badge {
  background: #ffeff1;
  border-color: rgba(43,140,255, 0.3);
  color: #2b8cff;
}

.cad-lp.light-theme .hero-title,
.cad-lp.light-theme .hero h1,
.cad-lp.light-theme .hero-copy h1 {
  color: #0f172a !important;
}

.cad-lp.light-theme .accent-text {
  color: #2b8cff !important;
  background: none !important;
  -webkit-text-fill-color: #2b8cff !important;
}

.cad-lp.light-theme .hero-lead {
  color: #475569 !important;
}

.cad-lp.light-theme .hero-lead strong {
  color: #0f172a !important;
  font-weight: 700 !important;
}

/* Light Theme Status Pills */
.cad-lp.light-theme .status-pill {
  background: #ffffff !important;
  border: 1px solid #cbd5e1 !important;
  color: #0f172a !important;
  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.05) !important;
}

.cad-lp.light-theme .status-pill:hover {
  border-color: #94a3b8 !important;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08) !important;
}

.cad-lp.light-theme .pill-arrow {
  color: #64748b !important;
}

.cad-lp.light-theme .pill-green-active {
  background: rgba(16, 185, 129, 0.12) !important;
  border: 1px solid rgba(16, 185, 129, 0.5) !important;
  color: #065f46 !important;
  box-shadow: 0 0 12px rgba(16, 185, 129, 0.15) !important;
}

/* Light Theme 2x2 Feature Cards */
.cad-lp.light-theme .hero-feature-card {
  background: #ffffff !important;
  border: 1px solid #e2e8f0 !important;
  box-shadow: 0 4px 15px rgba(15, 23, 42, 0.04) !important;
}

.cad-lp.light-theme .hero-feature-card:hover {
  border-color: rgba(43,140,255, 0.4) !important;
  box-shadow: 0 8px 25px rgba(15, 23, 42, 0.08) !important;
}

.cad-lp.light-theme .hero-feature-card span {
  color: #1e293b !important;
  font-weight: 500 !important;
}

.cad-lp.light-theme .feature-check-icon {
  background: #ffffff !important;
  border: 1.5px solid #2b8cff !important;
  color: #2b8cff !important;
}

/* Light Theme Timeline Section */
.cad-lp.light-theme .hero-timeline-section {
  border-top: 1px solid #e2e8f0 !important;
}

.cad-lp.light-theme .timeline-tag-left {
  color: #64748b !important;
}

.cad-lp.light-theme .timeline-tag-right {
  color: #2b8cff !important;
}

.cad-lp.light-theme .timeline-line {
  background: #2b8cff !important;
}

.cad-lp.light-theme .step-dot {
  background: #ffffff !important;
  border: 2px solid #2b8cff !important;
}

.cad-lp.light-theme .glowing-dot {
  background: #2b8cff !important;
  border-color: #ffffff !important;
  box-shadow: 0 0 12px rgba(43,140,255, 0.6) !important;
}

.cad-lp.light-theme .step-label {
  color: #2b8cff !important;
  font-weight: 800 !important;
}

.cad-lp.light-theme .step-title {
  color: #0f172a !important;
  font-weight: 700 !important;
}

.cad-lp.light-theme .hero-points li {
  color: #334155;
}

.cad-lp.light-theme .hero-points li span {
  background: #ffeff1;
  color: #2b8cff;
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

.cad-lp.light-theme .consult-section {
  background-color: #f8fafc !important;
  background-image:
    radial-gradient(ellipse 75% 45% at 50% 0%, rgba(43,140,255, 0.08) 0%, rgba(43,140,255, 0.02) 50%, transparent 80%),
    radial-gradient(ellipse 40% 30% at 10% 20%, rgba(255, 80, 100, 0.04) 0%, transparent 60%) !important;
}

.cad-lp.light-theme .consult-box {
  background-color: #ffffff !important;
  background-image: linear-gradient(90deg, #ffffff 48%, rgba(255, 255, 255, 0.88) 72%, rgba(255, 255, 255, 0.6) 100%), url('../cad/consult-bg-red.png') !important;
  border-color: #cbd5e1 !important;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08) !important;
}

.cad-lp.light-theme .consult-content h2 {
  color: #0f172a !important;
  background: none !important;
  -webkit-text-fill-color: #0f172a !important;
}

.cad-lp.light-theme .consult-content h2 span {
  background: linear-gradient(135deg, #3d0c1e 0%, #7a152d 35%, #1e6bc8 70%, #2b8cff 100%) !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}

.cad-lp.light-theme .consult-content p {
  color: #475569 !important;
}

.cad-lp.light-theme .consult-pill-btn {
  background: linear-gradient(135deg, #2b8cff 0%, #1b72d9 100%) !important;
  color: #ffffff !important;
  box-shadow: 0 4px 20px rgba(43,140,255, 0.45) !important;
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
  background: radial-gradient(circle at center, rgba(43,140,255, 0.08) 0%, #f8fafc 85%) !important;
  border: 1px solid #e2e8f0 !important;
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.02) !important;
}

.cad-lp.light-theme .process-card:hover .process-image {
  background: radial-gradient(circle at center, rgba(43,140,255, 0.16) 0%, #ffffff 85%) !important;
  border-color: rgba(43,140,255, 0.35) !important;
}

.cad-lp.light-theme .terminal-glass-window {
  background: #ffffff !important;
  border: 1px solid #cbd5e1 !important;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08), 0 0 15px rgba(43,140,255, 0.12) !important;
}

.cad-lp.light-theme .code-lines .line {
  background: #cbd5e1 !important;
}

.cad-lp.light-theme .screen-back,
.cad-lp.light-theme .screen-front {
  background: #ffffff !important;
  border-color: #cbd5e1 !important;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08) !important;
}

.cad-lp.light-theme .ui-bar {
  background: #cbd5e1 !important;
}

.cad-lp.light-theme .ui-bar.content {
  background: #f1f5f9 !important;
}

.cad-lp.light-theme .glass-radar-ring {
  border-color: rgba(43,140,255, 0.3) !important;
}

.cad-lp.light-theme .industries {
  background-color: #ffffff !important;
  background-image: radial-gradient(ellipse 75% 45% at 50% 0%, rgba(43,140,255, 0.05) 0%, transparent 80%) !important;
}

.cad-lp.light-theme .industry-grid {
  background: #ffffff !important;
  border: 1px solid #cbd5e1 !important;
  box-shadow: 0 10px 35px rgba(15, 23, 42, 0.06), 0 2px 8px rgba(15, 23, 42, 0.03) !important;
}

.cad-lp.light-theme .industry-grid article {
  background: #ffffff !important;
  border-right-color: #e2e8f0 !important;
  border-bottom-color: #e2e8f0 !important;
}

.cad-lp.light-theme .industry-grid article:hover {
  background: #f8fafc !important;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08) !important;
}

.cad-lp.light-theme .industry-grid h3 {
  color: #0f172a !important;
}

.cad-lp.light-theme .industry-grid p {
  color: #64748b !important;
}

.cad-lp.light-theme .build-section {
  background: #f8fafc;
}

.cad-lp.light-theme .build-grid article {
  background: #ffffff !important;
  border: 1px solid #cbd5e1 !important;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05), 0 2px 6px rgba(15, 23, 42, 0.02) !important;
}

.cad-lp.light-theme .build-grid article:hover {
  background: #ffffff !important;
  border-color: rgba(43,140,255, 0.5) !important;
  box-shadow: 0 14px 35px rgba(15, 23, 42, 0.1), 0 0 20px rgba(43,140,255, 0.12) !important;
  transform: translateY(-6px) !important;
}

.cad-lp.light-theme .build-grid h3 {
  color: #0f172a !important;
}

.cad-lp.light-theme .build-grid p {
  color: #64748b !important;
}

.cad-lp.light-theme .review-card {
  background: #ffffff !important;
  border: 1px solid #cbd5e1 !important;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05), 0 2px 6px rgba(15, 23, 42, 0.02) !important;
}

.cad-lp.light-theme .review-card:hover {
  background: #ffffff !important;
  border-color: rgba(43,140,255, 0.45) !important;
  box-shadow: 0 14px 35px rgba(15, 23, 42, 0.1), 0 0 20px rgba(43,140,255, 0.12) !important;
  transform: translateY(-4px) !important;
}

.cad-lp.light-theme .review-card.rev-green:hover {
  border-color: rgba(16, 185, 129, 0.6) !important;
  box-shadow: 0 14px 35px rgba(15, 23, 42, 0.1), 0 0 20px rgba(16, 185, 129, 0.18) !important;
}

.cad-lp.light-theme .review-card.rev-cyan:hover {
  border-color: rgba(6, 182, 212, 0.6) !important;
  box-shadow: 0 14px 35px rgba(15, 23, 42, 0.1), 0 0 20px rgba(6, 182, 212, 0.18) !important;
}

.cad-lp.light-theme .review-card.rev-orange:hover {
  border-color: rgba(249, 115, 22, 0.6) !important;
  box-shadow: 0 14px 35px rgba(15, 23, 42, 0.1), 0 0 20px rgba(249, 115, 22, 0.18) !important;
}

.cad-lp.light-theme .review-card.rev-purple:hover {
  border-color: rgba(168, 85, 247, 0.6) !important;
  box-shadow: 0 14px 35px rgba(15, 23, 42, 0.1), 0 0 20px rgba(168, 85, 247, 0.18) !important;
}

.cad-lp.light-theme .review-card.rev-blue:hover {
  border-color: rgba(59, 130, 246, 0.6) !important;
  box-shadow: 0 14px 35px rgba(15, 23, 42, 0.1), 0 0 20px rgba(59, 130, 246, 0.18) !important;
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
.cad-lp.light-theme .faq-layout>div:first-child h2,
.cad-lp.light-theme .offices-header-row h2,
.cad-lp.light-theme .final-wrap h2,
.cad-lp.light-theme .press-strip-title,
.cad-lp.light-theme .tech-heading,
.cad-lp.light-theme #cadQuoteModalTitle,
.cad-lp.light-theme #cadThankyouModalTitle {
  color: #0f172a !important;
  background: none !important;
  -webkit-text-fill-color: #0f172a !important;
}

/* LIGHT THEME ACCENT GRADIENT SPANS (VIVID CRIMSON RED) */
.cad-lp.light-theme .hero h1 span,
.cad-lp.light-theme .section-title-row h2 span,
.cad-lp.light-theme .center-heading h2 span,
.cad-lp.light-theme .accent-text,
.cad-lp.light-theme .stats-hero-content h2 .accent-text,
.cad-lp.light-theme .stats-numbers-bar .stat-num,
.cad-lp.light-theme .consult-content h2 span,
.cad-lp.light-theme .awards-intro-card h2 .accent-text,
.cad-lp.light-theme .reviews-header h2 span,
.cad-lp.light-theme .estimate-copy h2 span,
.cad-lp.light-theme .strategy-gradient,
.cad-lp.light-theme .faq-asked-gradient,
.cad-lp.light-theme .faq-questions-gradient,
.cad-lp.light-theme .global-offices-gradient,
.cad-lp.light-theme .who-gradient,
.cad-lp.light-theme .ship-underline,
.cad-lp.light-theme .faq-layout>div:first-child h2 span,
.cad-lp.light-theme .offices-header-row h2 span {
  background: linear-gradient(135deg, #2b8cff 0%, #1b72d9 100%) !important;
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
  color: #0f172a !important;
  background: none !important;
  -webkit-text-fill-color: #0f172a !important;
}

.cad-lp.light-theme .estimate-copy h2 span,
.cad-lp.light-theme .strategy-gradient {
  background: linear-gradient(135deg, #2b8cff 0%, #1b72d9 100%) !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
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
  background: #ffffff;
  border-color: rgba(43,140,255, 0.35);
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
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

.cad-lp.light-theme .faq-layout>div:first-child h2 {
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

.cad-lp.light-theme .logo-item text tspan[fill="#4285F4"] {
  fill: #4285F4 !important;
}

.cad-lp.light-theme .logo-item text tspan[fill="#EA4335"] {
  fill: #EA4335 !important;
}

.cad-lp.light-theme .logo-item text tspan[fill="#FBBC05"] {
  fill: #FBBC05 !important;
}

.cad-lp.light-theme .logo-item text tspan[fill="#34A853"] {
  fill: #34A853 !important;
}

/* PORTFOLIO SHOWCASE CARDS & SECTION (WHITE THEME OVERRIDES) */
.cad-lp.light-theme .section.portfolio {
  background-color: #f8fafc !important;
  background-image:
    radial-gradient(ellipse 75% 45% at 50% 0%, rgba(43,140,255, 0.08) 0%, rgba(43,140,255, 0.02) 50%, transparent 80%),
    radial-gradient(ellipse 50% 30% at 20% 0%, rgba(255, 80, 100, 0.05) 0%, transparent 70%),
    radial-gradient(ellipse 50% 30% at 80% 0%, rgba(43,140,255, 0.05) 0%, transparent 70%) !important;
  border-top: 1px solid #e2e8f0 !important;
  border-bottom: 1px solid #e2e8f0 !important;
}

.cad-lp.light-theme .section.portfolio .section-kicker {
  background: #ffeff1 !important;
  border-color: rgba(43,140,255, 0.3) !important;
  color: #2b8cff !important;
  box-shadow: none !important;
}

.cad-lp.light-theme .section.portfolio .section-title-row h2 {
  color: #0f172a !important;
}

.cad-lp.light-theme .section.portfolio .section-title-row h2 span {
  background: linear-gradient(135deg, #3d0c1e 0%, #7a152d 35%, #1e6bc8 70%, #2b8cff 100%) !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}

.cad-lp.light-theme .section.portfolio .section-title-row p {
  color: #475569 !important;
}

.cad-lp.light-theme .section.portfolio .outline-link {
  background: #ffffff !important;
  border-color: #cbd5e1 !important;
  color: #0f172a !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05) !important;
}

.cad-lp.light-theme .section.portfolio .outline-link:hover {
  background: #2b8cff !important;
  border-color: #2b8cff !important;
  color: #ffffff !important;
  box-shadow: 0 4px 18px rgba(43,140,255, 0.4) !important;
}

.cad-lp.light-theme .showcase-card {
  background: #ffffff !important;
  border-color: #cbd5e1 !important;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08) !important;
}

.cad-lp.light-theme .showcase-card:hover {
  border-color: rgba(43,140,255, 0.5) !important;
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.12), 0 0 25px rgba(43,140,255, 0.2) !important;
}

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
}

/* ==========================================================================
   QUOTE MODAL & THANK YOU POPUP STYLES (DARK HIGH-TECH THEME MATCHING SCREENSHOT)
   ========================================================================== */

.quote-modal-overlay,
#quoteModalOverlay {
  position: fixed !important;
  inset: 0 !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  background: rgba(5, 4, 10, 0.88) !important;
  backdrop-filter: blur(14px) !important;
  -webkit-backdrop-filter: blur(14px) !important;
  z-index: 999999 !important;
  display: none;
  align-items: center !important;
  justify-content: center !important;
  padding: 20px !important;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-sizing: border-box !important;
}

.quote-modal-overlay.active,
#recurringQuoteModalOverlay.active,
#quoteModalOverlay.active,
.cad-lp .quote-modal-overlay.active,
.cad-lp.light-theme .quote-modal-overlay.active {
  display: flex !important;
  opacity: 1 !important;
  visibility: visible !important;
  pointer-events: auto !important;
}

.quote-modal-card {
  background: #090a14 !important;
  border: 1px solid rgba(43,140,255, 0.4) !important;
  border-radius: 24px !important;
  max-width: 920px !important;
  width: 100% !important;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.95), 0 0 50px rgba(43,140,255, 0.3) !important;
  overflow: hidden !important;
  position: relative !important;
  transform: scale(0.92) translateY(20px);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-sizing: border-box !important;
}

.quote-modal-overlay.active .quote-modal-card,
#recurringQuoteModalOverlay.active .quote-modal-card,
#quoteModalOverlay.active .quote-modal-card {
  transform: scale(1) translateY(0) !important;
}

.quote-modal-close {
  position: absolute !important;
  top: 18px !important;
  right: 18px !important;
  width: 36px !important;
  height: 36px !important;
  border-radius: 50% !important;
  background: linear-gradient(135deg, #2b8cff 0%, #1c72d9 100%) !important;
  color: #ffffff !important;
  border: none !important;
  font-size: 22px !important;
  font-weight: 700 !important;
  line-height: 1 !important;
  cursor: pointer !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  z-index: 10 !important;
  box-shadow: 0 0 18px rgba(43,140,255, 0.7) !important;
  transition: all 0.25s ease !important;
}

.quote-modal-close:hover {
  transform: scale(1.12) rotate(90deg) !important;
  box-shadow: 0 0 25px rgba(43,140,255, 0.9) !important;
}

.quote-modal-body {
  display: grid !important;
  grid-template-columns: 46% 54% !important;
  width: 100% !important;
  min-height: 520px !important;
  align-items: stretch !important;
  position: relative !important;
}

.quote-modal-left {
  grid-column: 1 !important;
  position: relative !important;
  width: 100% !important;
  height: 100% !important;
  min-height: 520px !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: flex-end !important;
  padding: 0 !important;
  box-sizing: border-box !important;
  overflow: hidden !important;
  background: #090a14 !important;
  border-top-left-radius: 24px !important;
  border-bottom-left-radius: 24px !important;
}

.quote-modal-bg-img {
  position: absolute !important;
  inset: 0 !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  object-position: center 25% !important;
  z-index: 0 !important;
  border-top-left-radius: 24px !important;
  border-bottom-left-radius: 24px !important;
}

.quote-left-overlay {
  position: absolute !important;
  inset: 0 !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  background: linear-gradient(180deg, rgba(9, 10, 20, 0.12) 0%, rgba(9, 10, 20, 0.55) 45%, rgba(9, 10, 20, 0.92) 100%) !important;
  z-index: 1 !important;
  display: flex !important;
  align-items: flex-end !important;
  padding: 32px 28px !important;
  box-sizing: border-box !important;
  border-top-left-radius: 24px !important;
  border-bottom-left-radius: 24px !important;
}

.quote-left-heading,
.cad-lp.light-theme .quote-left-heading,
.cad-lp.light-theme h3.quote-left-heading {
  font-family: var(--font-heading) !important;
  font-size: 23px !important;
  font-weight: 800 !important;
  line-height: 1.3 !important;
  color: #ffffff !important;
  margin: 0 !important;
  position: relative !important;
  z-index: 2 !important;
  letter-spacing: -0.4px !important;
  -webkit-text-fill-color: #ffffff !important;
  background: none !important;
  text-shadow: 0 4px 18px rgba(0, 0, 0, 0.95) !important;
}

.quote-red-text,
.cad-lp.light-theme .quote-red-text {
  background: linear-gradient(135deg, #2b8cff 0%, #6eb0ff 100%) !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  display: inline !important;
}

.quote-modal-right {
  grid-column: 2 !important;
  width: 100% !important;
  height: 100% !important;
  min-height: 520px !important;
  padding: 42px 36px !important;
  background: #090a14 !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  position: relative !important;
  box-sizing: border-box !important;
}

.quote-modal-right h2 {
  font-family: var(--font-heading) !important;
  font-size: 28px !important;
  font-weight: 800 !important;
  color: #ffffff !important;
  margin: 0 0 6px 0 !important;
  letter-spacing: -0.5px !important;
  -webkit-text-fill-color: #ffffff !important;
}

.quote-modal-sub {
  font-size: 13.5px !important;
  color: #94a3b8 !important;
  margin: 0 0 24px 0 !important;
  line-height: 1.5 !important;
  font-weight: 400 !important;
}

.quote-modal-form {
  display: flex !important;
  flex-direction: column !important;
  gap: 14px !important;
  width: 100% !important;
}

.quote-modal-form .quote-field {
  position: relative !important;
  width: 100% !important;
  background: transparent !important;
  border: none !important;
  padding: 0 !important;
  margin: 0 !important;
  box-shadow: none !important;
}

.quote-modal-form .quote-field .field-icon {
  position: absolute !important;
  left: 16px !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  color: #2b8cff !important;
  fill: #2b8cff !important;
  pointer-events: none !important;
  z-index: 5 !important;
  width: 16px !important;
  height: 16px !important;
  opacity: 0.95 !important;
  filter: drop-shadow(0 0 6px rgba(43,140,255, 0.5)) !important;
}

.quote-modal-form .quote-field-textarea .field-icon {
  top: 18px !important;
  transform: none !important;
}

.quote-modal-form input.quote-input,
.quote-modal-form textarea.quote-input {
  width: 100% !important;
  height: 50px !important;
  background: rgba(14, 16, 28, 0.95) !important;
  border: 1px solid rgba(255, 255, 255, 0.14) !important;
  border-radius: 12px !important;
  color: #ffffff !important;
  font-family: var(--font-body), -apple-system, sans-serif !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  padding: 0 16px 0 46px !important;
  outline: none !important;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
  box-sizing: border-box !important;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3) !important;
  margin: 0 !important;
}

.quote-modal-form textarea.quote-input {
  height: 100px !important;
  min-height: 90px !important;
  padding-top: 15px !important;
  padding-bottom: 15px !important;
  line-height: 1.5 !important;
  resize: none !important;
}

/* Crisp & Clear Readable Placeholders */
.quote-modal-form input.quote-input::placeholder,
.quote-modal-form textarea.quote-input::placeholder {
  color: #8a99ad !important;
  font-weight: 400 !important;
  opacity: 1 !important;
  -webkit-text-fill-color: #8a99ad !important;
}

/* High-Tech Glowing Red Focus State */
.quote-modal-form input.quote-input:focus,
.quote-modal-form textarea.quote-input:focus {
  border-color: #2b8cff !important;
  background: rgba(20, 23, 42, 0.98) !important;
  box-shadow: 0 0 0 3px rgba(43,140,255, 0.22), 0 0 15px rgba(43,140,255, 0.15) !important;
  color: #ffffff !important;
}

/* Phone input layout inside Image 1 Modal */
.quote-modal-form .quote-phone-wrap {
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
  width: 100% !important;
  position: relative !important;
  box-sizing: border-box !important;
}

.quote-modal-form .quote-phone-wrap .selected-flag-box {
  position: absolute !important;
  left: 12px !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  z-index: 4 !important;
  pointer-events: none !important;
  display: inline-flex !important;
  align-items: center !important;
}

.quote-modal-form .quote-phone-wrap select.country-code-select {
  width: 108px !important;
  min-width: 108px !important;
  max-width: 108px !important;
  flex: 0 0 108px !important;
  height: 50px !important;
  background: rgba(14, 16, 28, 0.95) !important;
  border: 1px solid rgba(255, 255, 255, 0.14) !important;
  border-radius: 12px !important;
  color: #ffffff !important;
  padding: 0 16px 0 38px !important;
  font-size: 13.5px !important;
  font-weight: 700 !important;
  cursor: pointer !important;
  outline: none !important;
  box-sizing: border-box !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='5' viewBox='0 0 10 6'%3E%3Cpath fill='none' stroke='%23ff2b3f' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' d='M1 1l4 4 4-4'/%3E%3C/svg%3E") !important;
  background-repeat: no-repeat !important;
  background-position: right 8px center !important;
  appearance: none !important;
  -webkit-appearance: none !important;
}

.quote-modal-form .quote-phone-wrap select.country-code-select:focus,
.quote-modal-form .quote-phone-wrap select.country-code-select:hover {
  border-color: #2b8cff !important;
  box-shadow: 0 0 0 3px rgba(43,140,255, 0.22) !important;
}

.quote-modal-form input.quote-phone-input {
  flex: 1 1 auto !important;
  width: 100% !important;
  min-width: 0 !important;
  height: 50px !important;
  padding: 0 16px !important;
}

.quote-submit-btn {
  width: 100% !important;
  height: 50px !important;
  border: none !important;
  border-radius: 99px !important;
  background: linear-gradient(135deg, #2b8cff 0%, #1c72d9 100%) !important;
  color: #ffffff !important;
  font-size: 14.5px !important;
  font-weight: 800 !important;
  letter-spacing: 0.8px !important;
  cursor: pointer !important;
  margin-top: 8px !important;
  box-shadow: 0 8px 25px rgba(43,140,255, 0.5) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 8px !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  text-transform: uppercase !important;
}

.quote-submit-btn:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 14px 35px rgba(43,140,255, 0.75) !important;
  background: linear-gradient(135deg, #3b94ff 0%, #227be6 100%) !important;
}

/* Light Theme Styling for Image 1 Modal (#quoteModalOverlay) */
.cad-lp.light-theme #quoteModalOverlay .quote-modal-card {
  background: #ffffff !important;
  border: 1px solid rgba(43,140,255, 0.22) !important;
  box-shadow: 0 30px 90px rgba(15, 23, 42, 0.18), 0 0 45px rgba(43,140,255, 0.08) !important;
}

.cad-lp.light-theme #quoteModalOverlay .quote-modal-right {
  background: #ffffff !important;
}

.cad-lp.light-theme #quoteModalOverlay .quote-modal-right h2 {
  color: #0f172a !important;
  -webkit-text-fill-color: #0f172a !important;
}

.cad-lp.light-theme #quoteModalOverlay .quote-modal-sub {
  color: #475569 !important;
}

.cad-lp.light-theme #quoteModalOverlay input.quote-input,
.cad-lp.light-theme #quoteModalOverlay textarea.quote-input,
.cad-lp.light-theme #quoteModalOverlay select.country-code-select {
  background: #f8fafc !important;
  border: 1px solid #cbd5e1 !important;
  color: #0f172a !important;
}

.cad-lp.light-theme #quoteModalOverlay input.quote-input::placeholder,
.cad-lp.light-theme #quoteModalOverlay textarea.quote-input::placeholder {
  color: #94a3b8 !important;
  -webkit-text-fill-color: #94a3b8 !important;
}

.cad-lp.light-theme #quoteModalOverlay input.quote-input:focus,
.cad-lp.light-theme #quoteModalOverlay textarea.quote-input:focus,
.cad-lp.light-theme #quoteModalOverlay select.country-code-select:focus {
  background: #ffffff !important;
  border-color: #2b8cff !important;
  box-shadow: 0 0 0 3px rgba(43,140,255, 0.18) !important;
  color: #0f172a !important;
}

/* ==========================================================================
   THANK YOU POPUP MODAL STYLES
   ========================================================================== */

.thankyou-modal-overlay,
#thankyouModalOverlay {
  position: fixed !important;
  inset: 0 !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  background: rgba(5, 4, 10, 0.9) !important;
  backdrop-filter: blur(14px) !important;
  -webkit-backdrop-filter: blur(14px) !important;
  z-index: 9999999 !important;
  display: none;
  align-items: center !important;
  justify-content: center !important;
  padding: 20px !important;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-sizing: border-box !important;
}

.thankyou-modal-overlay.active,
#thankyouModalOverlay.active,
.cad-lp .thankyou-modal-overlay.active,
.cad-lp.light-theme .thankyou-modal-overlay.active {
  display: flex !important;
  opacity: 1 !important;
  visibility: visible !important;
  pointer-events: auto !important;
}

.thankyou-modal-card {
  background: #090a14 !important;
  border: 1px solid rgba(43,140,255, 0.45) !important;
  border-radius: 24px !important;
  max-width: 480px !important;
  width: 100% !important;
  padding: 42px 34px !important;
  text-align: center !important;
  position: relative !important;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.95), 0 0 50px rgba(43,140,255, 0.35) !important;
  box-sizing: border-box !important;
  transform: scale(0.92) translateY(20px);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.thankyou-modal-overlay.active .thankyou-modal-card,
#thankyouModalOverlay.active .thankyou-modal-card {
  transform: scale(1) translateY(0) !important;
}

.thankyou-modal-close {
  position: absolute !important;
  top: 16px !important;
  right: 16px !important;
  width: 32px !important;
  height: 32px !important;
  border-radius: 50% !important;
  background: rgba(43,140,255, 0.2) !important;
  border: 1px solid rgba(43,140,255, 0.4) !important;
  color: #2b8cff !important;
  font-size: 20px !important;
  cursor: pointer !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  transition: all 0.2s ease !important;
}

.thankyou-modal-close:hover {
  background: #2b8cff !important;
  color: #ffffff !important;
}

.thankyou-check-ring {
  width: 72px !important;
  height: 72px !important;
  border-radius: 50% !important;
  background: rgba(43,140,255, 0.12) !important;
  border: 2px solid #2b8cff !important;
  color: #2b8cff !important;
  display: grid !important;
  place-items: center !important;
  margin: 0 auto 20px auto !important;
  box-shadow: 0 0 25px rgba(43,140,255, 0.45) !important;
}

.thankyou-modal-content h2 {
  font-family: var(--font-heading) !important;
  font-size: 26px !important;
  font-weight: 800 !important;
  color: #ffffff !important;
  margin: 0 0 10px 0 !important;
  -webkit-text-fill-color: #ffffff !important;
}

.thankyou-sub {
  color: #94a3b8 !important;
  font-size: 14px !important;
  line-height: 1.55 !important;
  margin: 0 0 24px 0 !important;
  font-weight: 400 !important;
}

.thankyou-info-box {
  background: #111322 !important;
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  border-radius: 14px !important;
  padding: 18px !important;
  margin-bottom: 20px !important;
  text-align: left !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 14px !important;
}

.thankyou-info-item {
  display: flex !important;
  gap: 12px !important;
  align-items: flex-start !important;
}

.thankyou-info-item .info-icon {
  font-size: 18px !important;
  line-height: 1 !important;
}

.thankyou-info-item strong {
  display: block !important;
  color: #ffffff !important;
  font-size: 13.5px !important;
  margin-bottom: 3px !important;
}

.thankyou-info-item p {
  color: #64748b !important;
  font-size: 12.5px !important;
  margin: 0 !important;
  line-height: 1.45 !important;
}

.thankyou-timer-note {
  font-size: 12.5px !important;
  color: #64748b !important;
  margin: 0 !important;
}

@media (max-width: 768px) {
  .cad-lp .hero-features-grid {
    grid-template-columns: 1fr !important;
    gap: 10px !important;
  }

  .cad-lp .timeline-track {
    grid-template-columns: repeat(4, 1fr) !important;
    gap: 20px 12px !important;
  }

  .cad-lp .timeline-line {
    display: none !important;
  }

  .quote-modal-card,
  .cad-lp .quote-modal-card {
    max-width: 520px !important;
    width: 94vw !important;
    max-height: 90vh !important;
    overflow-y: auto !important;
    border-radius: 20px !important;
  }

  .quote-modal-body,
  .cad-lp .quote-modal-body {
    display: flex !important;
    flex-direction: column !important;
    min-height: auto !important;
  }

  .quote-modal-left,
  .cad-lp .quote-modal-left {
    width: 100% !important;
    height: 150px !important;
    min-height: 150px !important;
    border-radius: 20px 20px 0 0 !important;
    border-right: none !important;
    border-bottom: 1px solid rgba(43,140,255, 0.3) !important;
    display: none !important;
  }

  .quote-modal-bg-img,
  .cad-lp .quote-modal-bg-img {
    border-radius: 20px 20px 0 0 !important;
    object-position: center 25% !important;
  }

  .quote-left-overlay,
  .cad-lp .quote-left-overlay {
    border-radius: 20px 20px 0 0 !important;
    padding: 18px 20px !important;
  }

  .quote-left-heading,
  .cad-lp .quote-left-heading {
    font-size: 18px !important;
    line-height: 1.25 !important;
  }

  .quote-modal-right,
  .cad-lp .quote-modal-right {
    width: 100% !important;
    padding: 28px 20px !important;
  }
}

/* ==========================================================================
   LIGHT THEME POPUP MODAL & HERO FORM STYLING (CRISP ELEGANT WHITE EDITION)
   ========================================================================== */
.cad-lp.light-theme .quote-modal-overlay,
.cad-lp.light-theme #quoteModalOverlay,
.cad-lp.light-theme .recurring-quote-modal-overlay,
.cad-lp.light-theme #recurringQuoteModalOverlay,
.cad-lp.light-theme .thankyou-modal-overlay,
.cad-lp.light-theme #thankyouModalOverlay {
  background: rgba(15, 23, 42, 0.52) !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
}

/* Modal Card in Light Theme */
.cad-lp.light-theme .quote-modal-card,
.cad-lp.light-theme .split-timeline-modal,
.cad-lp.light-theme #recurringQuoteModalCard {
  background: #ffffff !important;
  border: 1px solid rgba(43,140,255, 0.22) !important;
  border-radius: 24px !important;
  color: #0f172a !important;
  padding: 0 !important;
  box-shadow: 0 30px 90px rgba(15, 23, 42, 0.18), 0 0 45px rgba(43,140,255, 0.08) !important;
  overflow: hidden !important;
}

/* Modal Close Icon in Light Theme */
.cad-lp.light-theme .modal-close-icon {
  background: #f1f5f9 !important;
  border: 1px solid #cbd5e1 !important;
  color: #475569 !important;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06) !important;
}

.cad-lp.light-theme .modal-close-icon:hover {
  background: #fee2e2 !important;
  color: #2b8cff !important;
  border-color: rgba(43,140,255, 0.45) !important;
  transform: scale(1.08) rotate(90deg) !important;
}

/* Modal Body Layout */
.cad-lp.light-theme .split-timeline-modal .quote-modal-body,
.cad-lp .split-timeline-modal .quote-modal-body {
  display: grid !important;
  grid-template-columns: 39% 61% !important;
  min-height: 560px !important;
  align-items: stretch !important;
}

/* Left Column: Timeline in Light Theme */
.cad-lp.light-theme .modal-timeline-col {
  background: #f8fafc !important;
  border-right: 1px solid #e2e8f0 !important;
  padding: 38px 28px 32px 32px !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
  box-sizing: border-box !important;
}

.cad-lp.light-theme .timeline-eyebrow {
  color: #2b8cff !important;
  font-family: var(--font-body) !important;
  font-size: 11px !important;
  font-weight: 800 !important;
  letter-spacing: 0.14em !important;
  text-transform: uppercase !important;
  margin-bottom: 28px !important;
  display: block !important;
}

.cad-lp.light-theme .modal-timeline-steps {
  position: relative !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 100px !important;
  padding-left: 28px !important;
}

.cad-lp.light-theme .modal-timeline-steps::before {
  content: '' !important;
  position: absolute !important;
  left: 9px !important;
  top: 10px !important;
  bottom: 10px !important;
  width: 2px !important;
  background: #e2e8f0 !important;
  z-index: 1 !important;
}

.cad-lp.light-theme .modal-step-dot {
  background: #ffffff !important;
  border: 2px solid #cbd5e1 !important;
  box-shadow: none !important;
}

.cad-lp.light-theme .modal-timeline-step.active .modal-step-dot {
  background: #2b8cff !important;
  border: 2.5px solid #ffffff !important;
  box-shadow: 0 0 0 4px rgba(43,140,255, 0.22), 0 0 16px rgba(43,140,255, 0.45) !important;
}

.cad-lp.light-theme .modal-step-day {
  color: #2b8cff !important;
  font-size: 11px !important;
  font-weight: 800 !important;
  letter-spacing: 0.08em !important;
  text-transform: uppercase !important;
  font-family: var(--font-body) !important;
}

.cad-lp.light-theme .modal-step-title {
  color: #0f172a !important;
  font-size: 14.5px !important;
  font-weight: 700 !important;
  line-height: 1.35 !important;
  font-family: var(--font-heading) !important;
}

.cad-lp.light-theme .modal-timeline-guarantee {
  margin-top: 24px !important;
  padding-top: 18px !important;
  border-top: 1px solid #e2e8f0 !important;
}

.cad-lp.light-theme .modal-timeline-guarantee p {
  color: #64748b !important;
  font-size: 12.5px !important;
  line-height: 1.55 !important;
  margin: 0 !important;
}

.cad-lp.light-theme .modal-timeline-guarantee strong {
  color: #0f172a !important;
  font-weight: 700 !important;
  display: block !important;
  margin-top: 4px !important;
}

/* Right Column: Form in Light Theme */
.cad-lp.light-theme .modal-form-col {
  background: #ffffff !important;
  padding: 38px 40px 32px 34px !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  position: relative !important;
  box-sizing: border-box !important;
}

.cad-lp.light-theme .form-eyebrow {
  color: #2b8cff !important;
  font-size: 11px !important;
  font-weight: 800 !important;
  letter-spacing: 0.14em !important;
  text-transform: uppercase !important;
  margin-bottom: 6px !important;
  display: block !important;
}

.cad-lp.light-theme .modal-form-title,
.cad-lp.light-theme #recurringQuoteModalTitle,
.cad-lp.light-theme #quoteModalTitle {
  color: #0f172a !important;
  font-family: var(--font-heading) !important;
  font-size: clamp(24px, 2.3vw, 29px) !important;
  font-weight: 800 !important;
  letter-spacing: -0.025em !important;
  line-height: 1.22 !important;
  margin: 0 0 8px !important;
  background: none !important;
  -webkit-text-fill-color: #0f172a !important;
}

.cad-lp.light-theme .modal-form-sub {
  color: #475569 !important;
  font-size: 13px !important;
  line-height: 1.5 !important;
  margin-bottom: 18px !important;
}

.cad-lp.light-theme .modal-form-sub strong {
  color: #0f172a !important;
  font-weight: 700 !important;
}

.cad-lp.light-theme .modal-field {
  margin-bottom: 4px !important;
  position: relative !important;
}

.cad-lp.light-theme .modal-field label {
  color: #334155 !important;
  font-size: 12px !important;
  font-weight: 700 !important;
  margin-bottom: 5px !important;
  font-family: var(--font-body) !important;
  display: flex !important;
  align-items: center !important;
  gap: 4px !important;
}

.cad-lp.light-theme .modal-field label .req-star,
.cad-lp .modal-field label .req-star {
  color: #2b8cff !important;
  font-weight: 800 !important;
}

.cad-lp.light-theme .modal-field input.modal-input,
.cad-lp.light-theme .modal-field textarea.modal-textarea,
.cad-lp.light-theme input.phone-num-input {
  width: 100% !important;
  background: #f8fafc !important;
  border: 1px solid #cbd5e1 !important;
  border-radius: 9px !important;
  padding: 10px 14px !important;
  color: #0f172a !important;
  font-size: 13.5px !important;
  font-family: var(--font-body) !important;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.03) !important;
  outline: none !important;
  transition: all 0.25s ease !important;
  box-sizing: border-box !important;
}

.cad-lp.light-theme .modal-field input.modal-input,
.cad-lp.light-theme input.phone-num-input {
  height: 46px !important;
}

.cad-lp.light-theme .modal-field textarea.modal-textarea {
  min-height: 60px !important;
  height: 60px !important;
  resize: none !important;
  line-height: 1.45 !important;
}

.cad-lp.light-theme .modal-field input.modal-input::placeholder,
.cad-lp.light-theme .modal-field textarea.modal-textarea::placeholder,
.cad-lp.light-theme input.phone-num-input::placeholder {
  color: #94a3b8 !important;
  font-weight: 400 !important;
  opacity: 1 !important;
  -webkit-text-fill-color: #94a3b8 !important;
}

.cad-lp.light-theme .modal-field input.modal-input:hover,
.cad-lp.light-theme .modal-field textarea.modal-textarea:hover,
.cad-lp.light-theme input.phone-num-input:hover {
  border-color: #94a3b8 !important;
  background: #ffffff !important;
}

.cad-lp.light-theme .modal-field input.modal-input:focus,
.cad-lp.light-theme .modal-field textarea.modal-textarea:focus,
.cad-lp.light-theme input.phone-num-input:focus {
  border-color: #2b8cff !important;
  background: #ffffff !important;
  box-shadow: 0 0 0 3px rgba(43,140,255, 0.18), 0 0 12px rgba(43,140,255, 0.08) !important;
  color: #0f172a !important;
}

/* Phone Input & Country Select in Light Theme */
.cad-lp.light-theme .phone-input-wrap {
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
  width: 100% !important;
  position: relative !important;
  box-sizing: border-box !important;
}

.cad-lp.light-theme select.country-code-select {
  width: 105px !important;
  min-width: 105px !important;
  max-width: 105px !important;
  flex: 0 0 105px !important;
  height: 46px !important;
  background-color: #f8fafc !important;
  border: 1px solid #cbd5e1 !important;
  color: #0f172a !important;
  border-radius: 9px !important;
  padding: 0 18px 0 36px !important;
  font-size: 13.5px !important;
  font-weight: 700 !important;
  cursor: pointer !important;
  outline: none !important;
  appearance: none !important;
  -webkit-appearance: none !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='5' viewBox='0 0 10 6'%3E%3Cpath fill='none' stroke='%23ff2b3f' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' d='M1 1l4 4 4-4'/%3E%3C/svg%3E") !important;
  background-repeat: no-repeat !important;
  background-position: right 8px center !important;
  transition: all 0.25s ease !important;
  box-sizing: border-box !important;
}

.cad-lp.light-theme select.country-code-select:hover,
.cad-lp.light-theme select.country-code-select:focus {
  border-color: #2b8cff !important;
  background-color: #ffffff !important;
  box-shadow: 0 0 0 3px rgba(43,140,255, 0.18) !important;
}

.cad-lp.light-theme input.phone-num-input {
  flex: 1 1 auto !important;
  padding-left: 12px !important;
}

.cad-lp.light-theme .field-subnote {
  font-size: 11px !important;
  color: #64748b !important;
  margin-top: 5px !important;
  font-weight: 500 !important;
  line-height: 1.4 !important;
}

/* Submit Button in Light Theme */
.cad-lp.light-theme .modal-submit-btn {
  width: 100% !important;
  height: 50px !important;
  margin-top: 6px !important;
  border: 0 !important;
  border-radius: 10px !important;
  background: linear-gradient(135deg, #2387ff 0%, #dc2626 100%) !important;
  color: #ffffff !important;
  font-size: 15px !important;
  font-weight: 800 !important;
  cursor: pointer !important;
  box-shadow: 0 8px 24px rgba(35,135,255, 0.42) !important;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 4px !important;
  letter-spacing: -0.01em !important;
}

.cad-lp.light-theme .modal-submit-btn:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 12px 32px rgba(35,135,255, 0.6) !important;
  filter: brightness(1.06) !important;
}

.cad-lp.light-theme .modal-submit-btn svg {
  transition: transform 0.25s ease !important;
}

.cad-lp.light-theme .modal-submit-btn:hover svg {
  transform: translateX(4px) !important;
}

/* Trust Footer in Light Theme */
.cad-lp.light-theme .modal-trust-footer {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 6px !important;
  font-size: 11.5px !important;
  color: #64748b !important;
  margin-top: 12px !important;
  text-align: center !important;
  font-weight: 500 !important;
}

.cad-lp.light-theme .modal-trust-footer svg {
  color: #2b8cff !important;
  stroke: #2b8cff !important;
  width: 13px !important;
  height: 13px !important;
  flex-shrink: 0 !important;
}

/* Error States in Light Theme */
.cad-lp.light-theme .modal-field .field-error {
  color: #dc2626 !important;
  font-size: 11px !important;
  font-weight: 600 !important;
  margin-top: 4px !important;
  display: block !important;
}

.cad-lp.light-theme .modal-field input.modal-input.input-error,
.cad-lp.light-theme .modal-field textarea.modal-textarea.input-error,
.cad-lp.light-theme input.phone-num-input.input-error {
  border-color: #ef4444 !important;
  background: #fff5f5 !important;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15) !important;
}

/* Hero Proposal Card in Light Theme */
.cad-lp.light-theme .hero-proposal-card {
  background: #ffffff !important;
  border: 1px solid rgba(43,140,255, 0.25) !important;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08), 0 0 30px rgba(43,140,255, 0.06) !important;
}

.cad-lp.light-theme .hero-proposal-card:hover {
  border-color: rgba(43,140,255, 0.45) !important;
  box-shadow: 0 25px 75px rgba(15, 23, 42, 0.12), 0 0 45px rgba(43,140,255, 0.15) !important;
}

.cad-lp.light-theme .hero-proposal-card .quote-head h2 {
  color: #0f172a !important;
}

.cad-lp.light-theme .hero-proposal-card .proposal-subhead {
  color: #475569 !important;
}

.cad-lp.light-theme .hero-proposal-card .proposal-subhead strong {
  color: #0f172a !important;
}

.cad-lp.light-theme .proposal-chip {
  background: rgba(43,140,255, 0.05) !important;
  border-color: rgba(43,140,255, 0.25) !important;
  color: #334155 !important;
}

.cad-lp.light-theme .proposal-chip:hover {
  background: rgba(43,140,255, 0.12) !important;
  color: #0f172a !important;
}

.cad-lp.light-theme .select-dropdown-wrap select {
  background-color: #f8fafc !important;
  border-color: #cbd5e1 !important;
  color: #0f172a !important;
}

.cad-lp.light-theme .select-dropdown-wrap select:focus {
  border-color: #2b8cff !important;
  background-color: #ffffff !important;
}

.cad-lp.light-theme .proposal-trust {
  color: #64748b !important;
}

.cad-lp.light-theme .proposal-terms {
  color: #64748b !important;
}

.cad-lp.light-theme .proposal-terms a {
  color: #334155 !important;
}

.cad-lp.light-theme .proposal-terms a:hover {
  color: #2b8cff !important;
}

/* Thank You Modal in Light Theme */
.cad-lp.light-theme .thankyou-modal-card {
  background: #ffffff !important;
  border: 1px solid rgba(43,140,255, 0.22) !important;
  border-radius: 24px !important;
  color: #0f172a !important;
  box-shadow: 0 25px 70px rgba(15, 23, 42, 0.16), 0 0 40px rgba(43,140,255, 0.08) !important;
}

.cad-lp.light-theme .thankyou-modal-close {
  background: #f1f5f9 !important;
  border: 1px solid #cbd5e1 !important;
  color: #475569 !important;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06) !important;
}

.cad-lp.light-theme .thankyou-modal-close:hover {
  background: #fee2e2 !important;
  color: #2b8cff !important;
  border-color: rgba(43,140,255, 0.45) !important;
}

.cad-lp.light-theme .thankyou-check-ring {
  background: rgba(43,140,255, 0.08) !important;
  border-color: rgba(43,140,255, 0.3) !important;
  color: #2b8cff !important;
}

.cad-lp.light-theme #thankyouModalTitle {
  color: #0f172a !important;
  font-family: var(--font-heading) !important;
  font-weight: 800 !important;
}

.cad-lp.light-theme .thankyou-sub {
  color: #475569 !important;
}

.cad-lp.light-theme .thankyou-sub strong {
  color: #0f172a !important;
  font-weight: 700 !important;
}

.cad-lp.light-theme .thankyou-info-box {
  background: #f8fafc !important;
  border: 1px solid #e2e8f0 !important;
}

.cad-lp.light-theme .thankyou-info-item strong {
  color: #0f172a !important;
  font-weight: 700 !important;
}

.cad-lp.light-theme .thankyou-info-item p {
  color: #64748b !important;
}

.cad-lp.light-theme .thankyou-timer-note {
  color: #64748b !important;
}

/* Light Theme & Mobile Responsive Overrides */
@media (max-width: 860px) {

  .cad-lp.light-theme .split-timeline-modal,
  .cad-lp .split-timeline-modal {
    padding: 0 !important;
    max-width: 540px !important;
  }

  .cad-lp.light-theme .split-timeline-modal .quote-modal-body,
  .cad-lp .split-timeline-modal .quote-modal-body {
    grid-template-columns: 1fr !important;
    min-height: auto !important;
  }

  .cad-lp.light-theme .modal-timeline-col {
    border-right: none !important;
    border-bottom: 1px solid #e2e8f0 !important;
    padding: 24px 22px 20px !important;
  }

  .cad-lp.light-theme .modal-timeline-steps {
    gap: 16px !important;
  }

  .cad-lp.light-theme .modal-timeline-guarantee {
    margin-top: 16px !important;
    padding-top: 12px !important;
  }

  .cad-lp.light-theme .modal-form-col {
    padding: 28px 24px 24px !important;
  }
}

@media (max-width: 520px) {

  .cad-lp.light-theme .quote-modal-overlay,
  .cad-lp .quote-modal-overlay,
  .cad-lp.light-theme .recurring-quote-modal-overlay,
  .cad-lp .recurring-quote-modal-overlay {
    padding: 12px !important;
  }

  .cad-lp.light-theme .split-timeline-modal,
  .cad-lp .split-timeline-modal {
    padding: 0 !important;
    width: 100% !important;
    max-width: 100% !important;
  }

  .cad-lp.light-theme .modal-timeline-col,
  .cad-lp .modal-timeline-col {
    display: none !important;
  }

  .cad-lp.light-theme .modal-form-col,
  .cad-lp .modal-form-col {
    padding: 24px 16px 20px !important;
    width: 100% !important;
  }

  .cad-lp.light-theme .modal-form-title,
  .cad-lp .modal-form-title {
    font-size: 20px !important;
  }

  .cad-lp.light-theme select.country-code-select,
  .cad-lp select.country-code-select {
    width: 92px !important;
    min-width: 92px !important;
    max-width: 92px !important;
    flex: 0 0 92px !important;
  }
}

/* ==========================================================================
   MASTER PIXEL-PERFECT RESPONSIVE DESIGN SYSTEM (MATCHING SECOND SS)
   ========================================================================== */

/* Global Strict Box-Sizing & Overflow Containment */
*,
*::before,
*::after {
  box-sizing: border-box !important;
}

html,
body {
  overflow-x: hidden !important;
  width: 100% !important;
  max-width: 100vw !important;
}

.cad-lp .hero,
.cad-lp .header,
.cad-lp section,
.cad-lp footer {
  max-width: 100vw !important;
  overflow-x: hidden !important;
}

/* Container Width & Padding Control */
.cad-lp .container {
  width: 100% !important;
  max-width: 1280px !important;
  margin: 0 auto !important;
  padding-left: 16px !important;
  padding-right: 16px !important;
  box-sizing: border-box !important;
}

/* 1. Large Monitors / LED / LCD (1440px and above) */
@media (min-width: 1440px) {
  .cad-lp .container {
    max-width: 1320px !important;
  }
}

/* 2. Standard Laptops & 1024px Tablet Landscape (992px - 1200px) */
@media (max-width: 1200px) {
  .cad-lp .hero-grid {
    grid-template-columns: 1fr 370px !important;
    gap: 22px !important;
    align-items: center !important;
  }

  .cad-lp .hero-title,
  .cad-lp .hero h1 {
    font-size: 34px !important;
    line-height: 1.2 !important;
  }

  .cad-lp .hero-lead {
    font-size: 13.5px !important;
    line-height: 1.5 !important;
  }

  .cad-lp .hero-status-pills {
    gap: 5px !important;
    margin: 16px 0 20px 0 !important;
  }

  .cad-lp .status-pill {
    padding: 5px 9px !important;
    font-size: 11px !important;
  }

  .cad-lp .hero-features-grid {
    gap: 8px !important;
  }

  .cad-lp .hero-feature-card {
    padding: 10px 10px !important;
  }

  .cad-lp .hero-feature-card span {
    font-size: 11.5px !important;
    line-height: 1.35 !important;
  }

  .cad-lp .quote-card {
    padding: 24px 18px !important;
  }

  .cad-lp .quote-head h2 {
    font-size: 24px !important;
  }

  .cad-lp .offices-grid {
    grid-template-columns: repeat(3, 1fr) !important;
  }

  .cad-lp .services-grid {
    grid-template-columns: repeat(3, 1fr) !important;
  }
}

/* 3. Mobile & Tablet Specific Responsive Overrides (Matching Second Screenshot 100%) */
@media (max-width: 991px) {
  .cad-lp .hero-grid {
    display: flex !important;
    flex-direction: column !important;
    grid-template-columns: 1fr !important;
    width: 100% !important;
    gap: 32px !important;
  }

  .cad-lp .hero-copy {
    width: 100% !important;
    max-width: 100% !important;
  }

  /* Header: Logo left, Phone pill + Red CTA button right (matching 2nd SS) */
  .cad-lp .header-logo-img {
    height: 28px !important;
    width: auto !important;
  }

  .cad-lp .wa-item {
    display: none !important;
  }

  .cad-lp .theme-toggle-btn {
    display: none !important;
  }

  .cad-lp .nav-vertical-divider {
    display: none !important;
  }

  .cad-lp .phone-item {
    display: inline-flex !important;
    align-items: center !important;
    gap: 5px !important;
    background: rgba(43,140,255, 0.1) !important;
    border: 1px solid rgba(43,140,255, 0.35) !important;
    border-radius: 50px !important;
    padding: 5px 10px !important;
    color: #2b8cff !important;
    text-decoration: none !important;
    white-space: nowrap !important;
    flex-shrink: 0 !important;
    box-shadow: 0 2px 8px rgba(43,140,255, 0.1) !important;
  }

  .cad-lp.light-theme .phone-item {
    background: #fff0f2 !important;
    border: 1px solid rgba(43,140,255, 0.35) !important;
  }

  .cad-lp .phone-item svg {
    stroke: #2b8cff !important;
    flex-shrink: 0 !important;
  }

  .cad-lp .phone-item .contact-text-wrap {
    display: inline-flex !important;
    white-space: nowrap !important;
  }

  .cad-lp .phone-item .expert-label {
    display: none !important;
  }

  .cad-lp .phone-item .contact-val {
    font-size: 11px !important;
    color: #2b8cff !important;
    font-weight: 800 !important;
    white-space: nowrap !important;
    line-height: 1 !important;
  }

  .cad-lp.light-theme .phone-item .contact-val {
    color: #2b8cff !important;
  }

  .cad-lp .header-cta {
    padding: 6px 12px !important;
    font-size: 11.5px !important;
    border-radius: 50px !important;
    background: linear-gradient(135deg, #2b8cff 0%, #52a1ff 100%) !important;
    color: #ffffff !important;
    white-space: nowrap !important;
    flex-shrink: 0 !important;
    box-shadow: 0 4px 15px rgba(43,140,255, 0.4) !important;
  }

  .cad-lp .nav-right {
    gap: 6px !important;
  }
}

@media (max-width: 768px) {
  .cad-lp .hero {
    padding: 15px 0 36px !important;
    top: 0;
  }


  .cad-lp .hero-grid {
    display: flex !important;
    flex-direction: column !important;
    grid-template-columns: 1fr !important;
    width: 100% !important;
    gap: 28px !important;
  }

  .cad-lp .hero-copy {
    width: 100% !important;
    max-width: 100% !important;
    top: 0;
  }

  .cad-lp .hero-title,
  .cad-lp .hero h1 {
    font-size: clamp(24px, 6.5vw, 32px) !important;
    line-height: 1.2 !important;
    word-break: break-word !important;
    white-space: normal !important;
  }

  .cad-lp .hero-lead {
    font-size: 12px !important;
    line-height: 1.55 !important;
    word-break: break-word !important;
    white-space: normal !important;
    margin-top: 20px;
  }

  /* Status Pills 2-row wrap (matching 2nd SS) */
  .cad-lp .hero-status-pills {
    display: flex !important;
    flex-wrap: wrap !important;
    align-items: center !important;
    gap: 8px 6px !important;
    width: 100% !important;
    margin: 20px 0 0px 0 !important;
    overflow: visible !important;
  }

  .cad-lp .status-pill {
    padding: 5px 11px !important;
    font-size: 11.5px !important;
    flex-shrink: 0 !important;
    white-space: nowrap !important;
  }

  /* 2x2 Feature Cards Grid (matching 2nd SS) */
  .cad-lp .hero-features-grid {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 10px !important;
    width: 100% !important;
    box-sizing: border-box !important;
    margin-bottom: 24px !important;
    display: none !important;
  }

  .cad-lp .hero-feature-card {
    display: flex !important;
    flex-direction: row !important;
    align-items: flex-start !important;
    gap: 8px !important;
    padding: 12px 10px !important;
    border-radius: 12px !important;
    box-sizing: border-box !important;
  }

  .cad-lp .hero-feature-card span {
    font-size: 11.5px !important;
    line-height: 1.35 !important;
    font-weight: 500 !important;
    word-break: break-word !important;
    white-space: normal !important;
    display: block !important;
  }

  .cad-lp .feature-check-icon {
    width: 18px !important;
    height: 18px !important;
    border-radius: 4px !important;
    flex-shrink: 0 !important;
    margin-top: 1px !important;
  }

  /* Step Timeline (matching 2nd SS) */
  .cad-lp .hero-timeline-section {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
    padding-top: 20px !important;
    display: none;
  }

  .cad-lp .timeline-header {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    width: 100% !important;
    font-size: 11px !important;
    margin-bottom: 14px !important;
  }

  .cad-lp .timeline-track {
    display: grid !important;
    grid-template-columns: repeat(4, 1fr) !important;
    gap: 18px 10px !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }

  .cad-lp .timeline-line {
    display: block !important;
  }

  .cad-lp .step-title {
    font-size: 12px !important;
    line-height: 1.3 !important;
    white-space: normal !important;
    word-break: break-word !important;
    display: block;
  }

  .cad-lp .timeline-step {

    display: block;
  }

  /* Quote Card & Estimate Form */
  .cad-lp .quote-card {
    width: 100% !important;
    max-width: 100% !important;
    padding: 22px 16px !important;
    border-radius: 18px !important;
    box-sizing: border-box !important;
    margin-top: 2px !important;
    border: 2px solid rgb(43,140,255);
  }

  .cad-lp .quote-head h2 {
    font-size: 22px !important;
    line-height: 1.25 !important;
  }

  .cad-lp .quote-head p {
    font-size: 12.5px !important;
    margin: 6px 0 16px 0 !important;
  }

  .cad-lp .field {
    margin-bottom: 14px !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }

  .cad-lp .field label {
    font-size: 11px !important;
    margin-bottom: 4px !important;
  }

  .cad-lp .field input,
  .cad-lp .field select,
  .cad-lp .estimate-form input,
  .cad-lp .estimate-form select {
    width: 100% !important;
    height: 46px !important;
    font-size: 13.5px !important;
    padding: 0 14px !important;
    box-sizing: border-box !important;
    border-radius: 10px !important;
  }

  .cad-lp .estimate-form {
    width: 100% !important;
    max-width: 100% !important;
    padding: 22px 16px !important;
    border-radius: 18px !important;
    box-sizing: border-box !important;
    gap: 16px !important;
    border: 2px solid rgb(43,140,255);
  }

  .cad-lp .estimate-form .form-row-grid {
    grid-template-columns: 1fr !important;
    gap: 14px !important;
    width: 100% !important;
  }

  .cad-lp .estimate-form textarea {
    width: 100% !important;
    min-height: 85px !important;
    padding: 12px 14px !important;
    font-size: 13.5px !important;
    box-sizing: border-box !important;
    border-radius: 10px !important;
  }

  .cad-lp .submit-discuss-btn,
  .cad-lp .quote-btn {
    width: 100% !important;
    height: 48px !important;
    font-size: 14px !important;
    font-weight: 800 !important;
    border-radius: 10px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    text-align: center !important;
    padding: 0 16px !important;
    box-sizing: border-box !important;
  }

  .cad-lp .phone-input-wrap {
    display: flex !important;
    align-items: center !important;
    gap: 6px !important;
    width: 100% !important;
    box-sizing: border-box !important;
    position: relative !important;
  }

  .cad-lp .selected-flag-box {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    position: absolute !important;
    left: 8px !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    z-index: 5 !important;
    pointer-events: none !important;
  }

  .cad-lp .flag-icon-img {
    width: 18px !important;
    height: 12px !important;
    object-fit: cover !important;
    border-radius: 2px !important;
    display: block !important;
  }

  .cad-lp select.country-code-select {
    width: 98px !important;
    min-width: 98px !important;
    max-width: 98px !important;
    flex: 0 0 98px !important;
    height: 46px !important;
    font-size: 12px !important;
    padding: 0 16px 0 30px !important;
    box-sizing: border-box !important;
  }

  .cad-lp input.phone-num-input {
    flex: 1 1 auto !important;
    width: 100% !important;
    min-width: 0 !important;
    height: 46px !important;
    font-size: 13px !important;
    box-sizing: border-box !important;
  }

  .cad-lp .services-grid {
    grid-template-columns: 1fr !important;
  }

  .cad-lp .process-grid {
    grid-template-columns: 1fr !important;
  }

  /* Stats Section 2x2 Grid for Mobile & Tablet (Matching Second SS 100%) */
  .cad-lp .stats-numbers-bar {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 0 !important;
    padding-top: 24px !important;
    padding-bottom: 24px !important;
    margin-top: 30px !important;
    border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
  }

  .cad-lp.light-theme .stats-numbers-bar {
    border-top: 1px solid #e2e8f0 !important;
  }

  .cad-lp .stat-bar-item {
    text-align: center !important;
    padding: 18px 12px !important;
    border-right: 1px solid rgba(255, 255, 255, 0.1) !important;
    box-sizing: border-box !important;
  }

  .cad-lp.light-theme .stat-bar-item {
    border-right: 1px solid #e2e8f0 !important;
  }

  .cad-lp .stat-bar-item:nth-child(2n) {
    border-right: none !important;
  }

  .cad-lp .stat-bar-item:nth-child(1),
  .cad-lp .stat-bar-item:nth-child(2) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
    padding-bottom: 20px !important;
  }

  .cad-lp.light-theme .stat-bar-item:nth-child(1),
  .cad-lp.light-theme .stat-bar-item:nth-child(2) {
    border-bottom: 1px solid #e2e8f0 !important;
  }

  .cad-lp .stat-bar-item .stat-num {
    font-size: clamp(28px, 6.8vw, 42px) !important;
    font-weight: 800 !important;
    color: #2b8cff !important;
    line-height: 1.1 !important;
    margin-bottom: 8px !important;
    letter-spacing: -0.5px !important;
  }

  .cad-lp.light-theme .stat-bar-item .stat-num {
    color: #1869c9 !important;
  }

  .cad-lp .stat-bar-item .stat-label {
    font-size: 13px !important;
    font-weight: 700 !important;
    color: #f1f5f9 !important;
    line-height: 1.35 !important;
    max-width: 140px !important;
    margin: 0 auto !important;
  }

  .cad-lp.light-theme .stat-bar-item .stat-label {
    color: #1e293b !important;
  }

  .cad-lp .final-wrap {
    flex-direction: column !important;
    text-align: center !important;
    align-items: center !important;
    gap: 20px !important;
  }

  .cad-lp .final-wrap a {
    width: 100% !important;
    max-width: 320px !important;
  }

  .cad-lp .offices-grid {
    grid-template-columns: 1fr !important;
  }

  .cad-lp .footer-top-grid {
    grid-template-columns: 1fr !important;
    gap: 24px !important;
  }

  .cad-lp .footer-bottom {
    flex-direction: column !important;
    gap: 14px !important;
    text-align: center !important;
  }

  /* Modals on Mobile */
  .quote-modal-card:not(.split-timeline-modal),
  .cad-lp .quote-modal-card:not(.split-timeline-modal),
  .thankyou-modal-card,
  .cad-lp .thankyou-modal-card {
    width: 100% !important;
    max-width: 480px !important;
    max-height: 90vh !important;
    overflow-y: auto !important;
    border-radius: 18px !important;
    padding: 24px 16px !important;
    box-sizing: border-box !important;
  }

  .cad-lp .split-timeline-modal,
  .cad-lp.light-theme .split-timeline-modal {
    width: 100% !important;
    max-width: 440px !important;
    max-height: 92vh !important;
    overflow-y: auto !important;
    border-radius: 20px !important;
    padding: 0 !important;
    margin: 0 auto !important;
    box-sizing: border-box !important;
  }

  .cad-lp .split-timeline-modal .quote-modal-body,
  .cad-lp.light-theme .split-timeline-modal .quote-modal-body {
    display: flex !important;
    flex-direction: column !important;
    grid-template-columns: none !important;
    width: 100% !important;
    min-height: auto !important;
    box-sizing: border-box !important;
  }

  .cad-lp .split-timeline-modal .modal-form-col,
  .cad-lp.light-theme .split-timeline-modal .modal-form-col {
    width: 100% !important;
    max-width: 100% !important;
    grid-column: auto !important;
    box-sizing: border-box !important;
  }
}

/* 4. Extra Small Phones (320px - 480px) */
@media (max-width: 480px) {
  .cad-lp .header-logo-img {
    height: 24px !important;
  }

  .cad-lp .container {
    padding-left: 12px !important;
    padding-right: 12px !important;
  }

  .cad-lp .hero-title,
  .cad-lp .hero h1 {
    font-size: 26px !important;
    word-break: break-word !important;
  }

  .cad-lp .quote-head h2 {
    font-size: 24px !important;
  }

  .cad-lp .quote-btn,
  .cad-lp .quote-submit-btn,
  .cad-lp .estimate-form button {
    font-size: 13.5px !important;
    padding: 13px 18px !important;
    width: 100% !important;
  }
}`,l=n(),u=/^[^\s@.][^\s@]*@[^\s@]+\.[a-zA-Z]{2,}$/,d=/\p{L}/u,f=/[<>]/,p=/^(\d)\1+$/,m=new Map;for(let e=0;e<=9;e++)for(let t of[1632,1776,2406])m.set(String.fromCharCode(t+e),String(e));var h=e=>e.replace(/[٠-٩۰-۹०-९]/g,e=>m.get(e)||e),g=e=>{let t=h(e).replace(/\D/g,``);if(t.length>10&&t.startsWith(`1`)&&(t=t.slice(1)),!t)return``;if(t.length<=3)return`(${t}`;if(t.length<=6)return`(${t.slice(0,3)}) ${t.slice(3)}`;let n=`(${t.slice(0,3)}) ${t.slice(3,6)}-${t.slice(6,10)}`;return t.length>10?`${n} ${t.slice(10)}`:n},_=[{iso:`US`,dial:`+1`,country:`United States`,label:`US +1`,flag:`us`},{iso:`GB`,dial:`+44`,country:`United Kingdom`,label:`UK +44`,flag:`gb`},{iso:`AE`,dial:`+971`,country:`United Arab Emirates`,label:`AE +971`,flag:`ae`},{iso:`PK`,dial:`+92`,country:`Pakistan`,label:`PK +92`,flag:`pk`},{iso:`CA`,dial:`+1`,country:`Canada`,label:`CA +1`,flag:`ca`},{iso:`AU`,dial:`+61`,country:`Australia`,label:`AU +61`,flag:`au`},{iso:`SA`,dial:`+966`,country:`Saudi Arabia`,label:`SA +966`,flag:`sa`},{iso:`IN`,dial:`+91`,country:`India`,label:`IN +91`,flag:`in`},{iso:`DE`,dial:`+49`,country:`Germany`,label:`DE +49`,flag:`de`},{iso:`FR`,dial:`+33`,country:`France`,label:`FR +33`,flag:`fr`},{iso:`SG`,dial:`+65`,country:`Singapore`,label:`SG +65`,flag:`sg`}],v=new Map(_.map(e=>[e.iso,e])),y=[{label:`An idea`,tone:`amber`},{label:`A Figma file`,tone:`purple`},{label:`A Lovable link`,tone:`pink`},{label:`A half-built app`,tone:`blue`}],b=[`Native iOS & Android, real backend and admin panel included`,`Fixed fee agreed before development starts no hourly surprises`,`Source code and all accounts transferred to you`,`One team for strategy, UI/UX, build, testing and store launch`],x=[{day:`DAY 1`,title:`Free 20-min call`},{day:`DAY 2`,title:`Scope & fixed fee`},{day:`DAY 7`,title:`Build on your device`},{day:`DAY 14`,title:`Production ready`}],S=[`$10k – $25k`,`$25k – $50k`,`$50k – $100k`,`$100k+`],C=[`1 – 2 Months`,`2 – 4 Months`,`4 – 6 Months`,`Flexible`],w=[`Mobile App Development`,`iOS App Development`,`Android App Development`,`Cross-Platform App`,`AI-Powered App`,`App Redesign / Upgrade`],ee=[{img:`/case/checkmate/checkmate-01.webp`,alt:`Checkmate`,title:`Checkmate`,desc:`Doubled Peak-Hour Order Capacity`,slug:`checkmate`},{img:`/case/lead-scout/lead-scout-01.webp`,alt:`Lead Scout`,title:`Lead Scout`,desc:`About 35–40% Less Research Time`,slug:`lead-scout`}];function B({density:e=2.2,className:t=``,opacity:n=.9}){let r=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let t=r.current;if(!t)return;let n=t.getContext(`2d`),i=0,a=0,o,s=0,c=[`255,43,63`,`255,82,99`,`255,120,70`,`255,180,140`,`239,68,68`],l=()=>{let e=t.getBoundingClientRect();i=e.width,a=e.height;let r=Math.min(window.devicePixelRatio||1,2);t.width=Math.max(1,i*r),t.height=Math.max(1,a*r),n.setTransform(r,0,0,r,0,0)};l();let u=new ResizeObserver(l);u.observe(t);let d=typeof window<`u`&&window.innerWidth<768,f=Math.round((d?220:450)*e),p=Array.from({length:f},()=>{let e=c[Math.random()*c.length|0],t=Math.random()>.82,n=t?2.2+Math.random()*2.2:.6+Math.random()*1.2,r=t?.6+Math.random()*.35:.2+Math.random()*.7,o=.015+Math.random()*.04;return{x:Math.random()*i,y:Math.random()*a,vx:(Math.random()-.5)*.45,vy:-.15-Math.random()*.5,r:n,c:e,isBig:t,baseAlpha:r,pulseSpeed:o,phase:Math.random()*Math.PI*2,wobble:.2+Math.random()*.6}}),m=!0,h=new IntersectionObserver(e=>{m=e[0].isIntersecting},{threshold:.01});h.observe(t);let g=d?55:75,_=()=>{if(o=requestAnimationFrame(_),m){s++,n.clearRect(0,0,i,a);for(let e of p)e.x+=e.vx+Math.sin(s*.018+e.y*.006)*e.wobble,e.y+=e.vy,e.y<-12&&(e.y=a+12,e.x=Math.random()*i),e.x<-12&&(e.x=i+12),e.x>i+12&&(e.x=-12);for(let e=0;e<p.length;e++){let t=d?3:2;if(e%t===0)for(let r=e+1;r<p.length;r+=t){let t=p[e],i=p[r],a=t.x-i.x,o=t.y-i.y,s=Math.hypot(a,o);if(s<g){let e=(1-s/g)*.28;n.strokeStyle=`rgba(${t.c}, ${e})`,n.lineWidth=.9,n.beginPath(),n.moveTo(t.x,t.y),n.lineTo(i.x,i.y),n.stroke()}}}for(let e of p){let t=Math.max(.12,e.baseAlpha+Math.sin(s*e.pulseSpeed+e.phase)*.35);if(e.isBig){n.save(),n.shadowColor=`rgba(${e.c}, 0.9)`,n.shadowBlur=e.r*6,n.fillStyle=`rgba(${e.c}, ${t})`,n.beginPath(),n.arc(e.x,e.y,e.r,0,Math.PI*2),n.fill();let r=e.r*(2.2+Math.sin(s*.03+e.phase)*.8);n.strokeStyle=`rgba(${e.c}, ${t*.4})`,n.lineWidth=.8,n.beginPath(),n.arc(e.x,e.y,r,0,Math.PI*2),n.stroke(),n.restore()}else n.fillStyle=`rgba(${e.c}, ${t})`,n.beginPath(),n.arc(e.x,e.y,e.r,0,Math.PI*2),n.fill()}}};return _(),()=>{cancelAnimationFrame(o),h.disconnect(),u.disconnect()}},[e]),(0,l.jsx)(`canvas`,{ref:r,className:`pointer-events-none absolute inset-0 h-full w-full ${t}`,style:{opacity:n},"aria-hidden":!0})}var V={name:``,email:``,phone:``,service:w[0],brief:``,building:``,nature:``,budget:``,timeline:``,website:``};function H({source:e,fields:t,onDone:n}){let[r,a]=(0,s.useState)(V),[o,c]=(0,s.useState)({}),[l,m]=(0,s.useState)(!1),[h,_]=(0,s.useState)(!1),y=(0,s.useRef)(null),b=(0,s.useRef)(null),x=(0,s.useRef)(!1);(0,s.useEffect)(()=>{x.current&&(x.current=!1,b.current?.querySelector(`[aria-invalid="true"]`)?.focus())},[o]);let S=e=>t=>{let n=t.target.value,r=e===`phone`?g(n):n;a(t=>({...t,[e]:r})),c(t=>t[e]?{...t,[e]:void 0}:t)};async function C(o){if(o.preventDefault(),l)return;_(!1);let s={},h=r.name.trim();h.length<2?s.name=`Please enter your full name.`:(!d.test(h)||f.test(h))&&(s.name=`Please enter a real name.`),r.email.trim()?u.test(r.email.trim())||(s.email=`Enter a valid email, e.g. john@company.com`):s.email=`Please enter your email address.`,t.includes(`building`)&&r.building.trim().length<3&&(s.building=`Tell us in a few words what you want built.`),t.includes(`budget`)&&!r.budget&&(s.budget=`Please select a budget range.`);let g=t.includes(`phone`)||t.includes(`phoneOptional`);if(g){let e=r.phone.replace(/[^0-9]/g,``);e?e.length<7?s.phone=`That number looks too short.`:p.test(e)&&(s.phone=`Please enter a real phone number.`):t.includes(`phone`)&&(s.phone=`Please enter your phone number.`)}if(c(s),Object.keys(s).length){x.current=!0;return}m(!0);let b=y.current?v.get(y.current.value):null,S=!!r.phone.trim(),C={name:h,email:r.email.trim(),...g&&S&&{phone:b?`${b.dial} ${r.phone.trim()}`.trim():r.phone.trim(),...b&&{country:b.country}},...t.includes(`service`)&&{service:r.service},...t.includes(`nature`)&&r.nature.trim()&&{nature_of_business:r.nature.trim()},...t.includes(`brief`)&&{message:r.brief.trim()},...t.includes(`building`)&&{message:r.building.trim()},...t.includes(`budget`)&&r.budget&&{budget:r.budget},...t.includes(`timeline`)&&r.timeline&&{timeline:r.timeline},website:r.website,page:`/custom-app-development-meta`},w=await i(C,{source:e,mailtoSubject:`Custom app development enquiry — ${C.name}`,mailtoBodyFields:[`name`,`email`,`phone`,`country`,`service`,`nature_of_business`,`budget`,`timeline`,`message`]});if(m(!1),!w.ok){_(!0);return}a(V),n()}return{values:r,set:S,bad:e=>o[e]?`is-invalid`:void 0,errId:t=>o[t]?`${e.replace(/\W+/g,`-`)}-${t}-err`:void 0,errors:o,busy:l,failed:h,codeRef:y,formRef:b,onSubmit:C}}function U({form:e,name:t}){let n=e.errors[t];return n?(0,l.jsx)(`p`,{className:`field-error`,id:e.errId(t),role:`alert`,children:n}):null}function W(e){try{delete window[e]}catch{window[e]=void 0}}function G(e){[`Backspace`,`Delete`,`ArrowLeft`,`ArrowRight`,`Tab`,`Enter`,`Home`,`End`].includes(e.key)||e.ctrlKey||e.metaKey||/^[a-zA-Z]$/.test(e.key)&&e.preventDefault()}function K({innerRef:e,name:t}){let[n,r]=(0,s.useState)(`US`),i=v.get(n);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`div`,{className:`selected-flag-box`,children:(0,l.jsx)(`img`,{src:`/cad/flags/${i.flag}.png`,className:`flag-icon-img`,alt:`${i.country} flag`,width:`20`,height:`14`})}),(0,l.jsx)(`select`,{className:`country-code-select`,ref:e,name:t,value:n,onChange:e=>r(e.target.value),"aria-label":`Country Code`,children:_.map(e=>(0,l.jsx)(`option`,{value:e.iso,children:e.label},e.iso))})]})}function q({f:e}){return(0,l.jsxs)(`div`,{className:`hp`,"aria-hidden":`true`,children:[(0,l.jsx)(`label`,{htmlFor:`hp-${e.id}`,children:`Website`}),(0,l.jsx)(`input`,{id:`hp-${e.id}`,type:`text`,tabIndex:-1,autoComplete:`off`,value:e.form.values.website,onChange:e.form.set(`website`)})]})}function J({show:e}){return e?(0,l.jsxs)(`p`,{className:`form-error`,role:`alert`,children:[`We couldn't send your details just now. Please try again, or email`,` `,(0,l.jsx)(`a`,{href:`mailto:appointment@digiworksai.com`,children:`appointment@digiworksai.com`}),`.`]}):null}var Y={heroProposal:`custom-app-development-meta (get-your-custom-app-proposal-hero)`,strategyCall:`custom-app-development-meta (book-a-free-strategy-call)`,quote:`custom-app-development-meta (get-a-free-quote)`,contact:`custom-app-development-meta (contact-form)`,freeEstimate:`custom-app-development-meta (get-your-free-estimate)`,popup:`custom-app-development-meta (popup-modal)`};function X(){let[e,t]=(0,s.useState)(`dark`),[n,i]=(0,s.useState)(!1),[u,d]=(0,s.useState)(Y.popup),[f,p]=(0,s.useState)(!1),[m,h]=(0,s.useState)(3),g=(0,s.useCallback)(()=>{t(e=>e===`dark`?`light`:`dark`)},[]);(0,s.useEffect)(()=>{try{localStorage.getItem(`cad-theme`)===`light`&&t(`light`)}catch{}},[]),(0,s.useEffect)(()=>{let t=document.documentElement;t.classList.toggle(`light-theme`,e===`light`);try{localStorage.setItem(`cad-theme`,e)}catch{}return()=>t.classList.remove(`light-theme`)},[e]);let _=(0,s.useCallback)(()=>i(!1),[]),v=(0,s.useCallback)(()=>p(!1),[]),w=(0,s.useCallback)((e,t)=>{e.preventDefault(),d(t),i(!0)},[]),T=(0,s.useCallback)(()=>{d(Y.popup),i(!0)},[]),M=(0,s.useRef)(!1),V=(0,s.useCallback)(()=>{i(!1),h(3),p(!0),typeof window<`u`&&typeof window.fbq==`function`&&window.fbq(`track`,`Lead`)},[]),X=H({source:Y.heroProposal,fields:[`building`,`phone`,`budget`],onDone:V}),Z=H({source:Y.strategyCall,fields:[`phone`,`nature`,`budget`,`timeline`,`brief`],onDone:V}),Q=H({source:u,fields:[`building`,`phone`,`brief`],onDone:V});(0,s.useEffect)(()=>(document.body.classList.add(`cad-active`),()=>document.body.classList.remove(`cad-active`)),[]),(0,s.useEffect)(()=>{if(window.matchMedia(`(max-width: 768px)`).matches)return;let e={enabled:!0,chatButtonSetting:{backgroundColor:`#16BE45`,ctaText:``,borderRadius:`100`,marginLeft:`20`,marginBottom:`20`,marginRight:`20`,position:`right`,textColor:`#ffffff`,phoneNumber:`+13468291047`,messageText:`Send my App Idea`,trackClick:!0},brandSetting:{brandName:`DigiWorks`,brandSubTitle:`Custom App Development . Austin, TX`,headerTextColor:`#fff`,brandImg:`/cad/digiworksicon.png`,welcomeText:`Hi I'm UZ - Founder at DigiWorks

Send me one line about your app and I'll reply with a realistic price range and timeline. No sales pitch. `,messageText:`Hi DigiWorks, I'd like a price range and timeline.
What I'm building:
Stage: Just an Idea / a design / a half built app / live app needing work`,backgroundColor:`#000000`,ctaText:`Chat`,borderRadius:`100`,autoShow:!1,btnColor:`#16BE45`,phoneNumber:`+13468291047`,trackClick:!0}},t=document.createElement(`script`);t.type=`text/javascript`,t.async=!0,t.src=`https://cdn.waplus.io/waplus-crm/settings/ossembed.js`,t.onload=function(){typeof window.CreateWhatsappChatWidget==`function`&&window.CreateWhatsappChatWidget(e)};let n=document.getElementsByTagName(`script`)[0];n.parentNode.insertBefore(t,n);let r=document.createElement(`style`);return r.textContent=`
      #wa-widget-send-button { padding: 8px 10px !important; min-width: 44px !important; }
      .wa-messenger-svg-whatsapp { width: 26px !important; height: 26px !important; }
    `,document.head.appendChild(r),()=>{t.remove(),r.remove(),W(`CreateWhatsappChatWidget`),document.querySelectorAll(`#wa-widget-send-button, .wa-chat-box, .wa-messenger-svg-whatsapp, [class*="wa-"]`).forEach(e=>e.remove())}},[]),(0,s.useEffect)(()=>{window.clarity=window.clarity||function(){(window.clarity.q=window.clarity.q||[]).push(arguments)};let e=document.createElement(`script`);e.async=1,e.src=`https://www.clarity.ms/tag/xk1krwzglw`;let t=document.getElementsByTagName(`script`)[0];return t.parentNode.insertBefore(e,t),()=>{e.remove(),W(`clarity`)}},[]),(0,s.useEffect)(()=>{window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},gtag(`js`,new Date),gtag(`config`,`G-86JJ6NBVL7`);let e=document.createElement(`script`);e.async=!0,e.src=`https://www.googletagmanager.com/gtag/js?id=G-86JJ6NBVL7`;let t=document.getElementsByTagName(`script`)[0];return t.parentNode.insertBefore(e,t),()=>{e.remove(),W(`gtag`)}},[]);let $=n||f;return(0,s.useEffect)(()=>{if(!$)return;let e=document.body.style.overflow;document.body.style.overflow=`hidden`;let t=e=>{e.key===`Escape`&&(i(!1),p(!1))};return document.addEventListener(`keydown`,t),()=>{document.body.style.overflow=e,document.removeEventListener(`keydown`,t)}},[$]),(0,s.useEffect)(()=>{if(!f)return;let e=setInterval(()=>{h(t=>t<=1?(clearInterval(e),p(!1),window.location.href=`/case-studies`,0):t-1)},1e3);return()=>clearInterval(e)},[f]),(0,s.useEffect)(()=>{let e=()=>{M.current||n||f||(M.current=!0,T())},t=t=>{t.clientY<=0&&!t.relatedTarget&&e()};document.addEventListener(`mouseleave`,t);let r=typeof window<`u`&&window.matchMedia?.(`(pointer: coarse)`)?.matches||typeof window<`u`&&window.innerWidth<768,i;return r&&(i=setTimeout(e,4e4)),()=>{document.removeEventListener(`mouseleave`,t),i&&clearTimeout(i)}},[n,f,T]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`Custom Mobile App Development | DigiWorks AI`,description:`Custom mobile app development for startups and businesses. Build iOS, Android, cross-platform and AI-powered apps with DigiWorks AI.`,path:`/custom-app-development-meta`,noindex:!0}),(0,l.jsxs)(r,{children:[(0,l.jsx)(`link`,{rel:`preconnect`,href:`https://fonts.gstatic.com`,crossOrigin:``}),(0,l.jsx)(`link`,{rel:`stylesheet`,href:`https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Manrope:wght@600;700;800&display=swap`})]}),(0,l.jsx)(`style`,{dangerouslySetInnerHTML:{__html:c}}),(0,l.jsxs)(`div`,{className:`cad-lp ${e===`light`?`light-theme`:``}`,children:[(0,l.jsx)(`header`,{className:`header`,children:(0,l.jsxs)(`div`,{className:`container nav-wrap`,children:[(0,l.jsxs)(`a`,{href:`/`,className:`logo-link`,"aria-label":`DigiWorks`,children:[(0,l.jsx)(`img`,{src:`/logo-white.png`,alt:`DigiWorks`,className:`header-logo-img logo-dark`,width:`130`,height:`38`,decoding:`async`,style:{height:`38px`,width:`auto`}}),(0,l.jsx)(`img`,{src:`/logo.png`,alt:`DigiWorks`,className:`header-logo-img logo-light`,width:`130`,height:`38`,decoding:`async`,style:{height:`38px`,width:`auto`}})]}),(0,l.jsxs)(`div`,{className:`nav-right`,children:[(0,l.jsxs)(`a`,{href:`https://wa.me/13468291047`,target:`_blank`,rel:`noopener noreferrer`,className:`nav-contact-item wa-item`,"aria-label":`Chat on WhatsApp +1 346 829 1047`,style:{display:`none`},children:[(0,l.jsx)(oe,{size:18,style:{flexShrink:0}}),(0,l.jsxs)(`div`,{className:`contact-text-wrap`,children:[(0,l.jsx)(`span`,{className:`contact-top-label wa-label`,children:`CHAT ON WHATSAPP`}),(0,l.jsx)(`span`,{className:`contact-val`,children:`+1 346 829 1047`})]})]}),(0,l.jsxs)(`a`,{href:`tel:+17373945488`,className:`nav-contact-item phone-item`,"aria-label":`Call us at +1 737 394 5488`,children:[(0,l.jsx)(ae,{size:16,style:{flexShrink:0}}),(0,l.jsxs)(`div`,{className:`contact-text-wrap`,children:[(0,l.jsx)(`span`,{className:`contact-top-label expert-label`,children:`TALK TO AN APP EXPERT`}),(0,l.jsx)(`span`,{className:`contact-val`,children:`(737) 394-5488`})]})]}),(0,l.jsxs)(`button`,{type:`button`,className:`theme-toggle-btn`,onClick:g,"aria-label":`Switch to ${e===`dark`?`Light`:`Dark`} Mode`,title:`Switch to ${e===`dark`?`Light`:`Dark`} Mode`,children:[e===`dark`?(0,l.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`15`,height:`15`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,l.jsx)(`circle`,{cx:`12`,cy:`12`,r:`5`}),(0,l.jsx)(`line`,{x1:`12`,y1:`1`,x2:`12`,y2:`3`}),(0,l.jsx)(`line`,{x1:`12`,y1:`21`,x2:`12`,y2:`23`}),(0,l.jsx)(`line`,{x1:`4.22`,y1:`4.22`,x2:`5.64`,y2:`5.64`}),(0,l.jsx)(`line`,{x1:`18.36`,y1:`18.36`,x2:`19.78`,y2:`19.78`}),(0,l.jsx)(`line`,{x1:`1`,y1:`12`,x2:`3`,y2:`12`}),(0,l.jsx)(`line`,{x1:`21`,y1:`12`,x2:`23`,y2:`12`}),(0,l.jsx)(`line`,{x1:`4.22`,y1:`19.78`,x2:`5.64`,y2:`18.36`}),(0,l.jsx)(`line`,{x1:`18.36`,y1:`5.64`,x2:`19.78`,y2:`4.22`})]}):(0,l.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`15`,height:`15`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,l.jsx)(`path`,{d:`M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z`})}),(0,l.jsx)(`span`,{children:e===`dark`?`Light`:`Dark`})]}),(0,l.jsx)(`a`,{href:`#quote`,className:`header-cta open-quote-btn`,onClick:e=>w(e,Y.quote),children:`Get a Free Quote`})]})]})}),(0,l.jsxs)(`main`,{children:[(0,l.jsxs)(`section`,{className:`hero`,children:[(0,l.jsx)(o,{variant:`streams`,tone:`crimson`,density:1.3,opacity:.65}),(0,l.jsxs)(`div`,{className:`container hero-grid`,children:[(0,l.jsxs)(`div`,{className:`hero-copy`,children:[(0,l.jsxs)(`h1`,{className:`hero-title`,children:[`Idea or Prototype. We`,(0,l.jsx)(`br`,{}),`Design, Build and `,(0,l.jsx)(`span`,{className:`accent-text`,children:`Launch It.`})]}),(0,l.jsxs)(`p`,{className:`hero-lead`,children:[`Starting from scratch, or sitting on a design that never got built we take it from wherever you are to`,` `,(0,l.jsx)(`strong`,{children:`live on the App Store and Play Store`}),`. Native iOS and Android, real backend, fixed fee agreed upfront, source code yours.`]}),(0,l.jsxs)(`div`,{className:`hero-status-pills`,children:[y.map(e=>(0,l.jsxs)(`span`,{className:`status-pill pill-${e.tone}`,children:[(0,l.jsx)(`span`,{className:`pill-dot dot-${e.tone}`}),` `,e.label]},e.label)),(0,l.jsx)(`span`,{className:`pill-arrow`,children:`→`}),(0,l.jsxs)(`span`,{className:`status-pill pill-green-active`,children:[(0,l.jsx)(`span`,{className:`pill-dot dot-green`}),` A live app`]})]}),(0,l.jsx)(`div`,{className:`hero-features-grid`,children:b.map(e=>(0,l.jsxs)(`div`,{className:`hero-feature-card`,children:[(0,l.jsx)(`div`,{className:`feature-check-icon`,children:(0,l.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`14`,height:`14`,fill:`none`,stroke:`currentColor`,strokeWidth:`3`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,l.jsx)(`polyline`,{points:`20 6 9 17 4 12`})})}),(0,l.jsx)(`span`,{children:e})]},e))}),(0,l.jsxs)(`div`,{className:`hero-timeline-section`,children:[(0,l.jsxs)(`div`,{className:`timeline-header`,children:[(0,l.jsx)(`span`,{className:`timeline-tag-left`,children:`HOW IT MOVES`}),(0,l.jsx)(`span`,{className:`timeline-tag-right`,children:`IDEA → PRODUCTION`})]}),(0,l.jsxs)(`div`,{className:`timeline-track`,children:[(0,l.jsx)(`div`,{className:`timeline-line`}),x.map((e,t)=>{let n=t===x.length-1;return(0,l.jsxs)(`div`,{className:`timeline-step${n?` active`:``}`,children:[(0,l.jsx)(`div`,{className:`step-dot${n?` glowing-dot`:``}`}),(0,l.jsx)(`span`,{className:`step-label`,children:e.day}),(0,l.jsx)(`strong`,{className:`step-title`,children:e.title})]},e.day)})]})]})]}),(0,l.jsxs)(`aside`,{className:`quote-card hero-proposal-card`,id:`quote`,children:[(0,l.jsxs)(`div`,{className:`quote-head`,children:[(0,l.jsx)(`h2`,{children:`Get Your Custom App Proposal`}),(0,l.jsxs)(`p`,{className:`proposal-subhead`,children:[`Sent within `,(0,l.jsx)(`strong`,{children:`24 hours`}),`. No sales call required to receive it.`]}),(0,l.jsx)(`div`,{className:`proposal-chips`,children:[`Fixed-price estimate`,`Delivery timeline`,`Tech architecture`].map(e=>(0,l.jsxs)(`div`,{className:`proposal-chip`,children:[(0,l.jsx)(`svg`,{className:`chip-check`,viewBox:`0 0 14 14`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,l.jsx)(`polyline`,{points:`2.5 7 5.5 10 11.5 4`})}),(0,l.jsx)(`span`,{children:e})]},e))})]}),(0,l.jsxs)(`form`,{ref:X.formRef,onSubmit:X.onSubmit,noValidate:!0,children:[(0,l.jsxs)(`div`,{className:[`field`,X.bad(`building`)].filter(Boolean).join(` `),children:[(0,l.jsxs)(`label`,{htmlFor:`cad-hero-building`,children:[`WHAT ARE YOU BUILDING? `,(0,l.jsx)(`span`,{className:`req-star`,children:`*`})]}),(0,l.jsx)(`input`,{id:`cad-hero-building`,name:`what_are_you_building`,type:`text`,placeholder:`A fleet-tracking app for 40 trucks`,value:X.values.building,onChange:X.set(`building`),"aria-invalid":X.bad(`building`)?`true`:void 0,"aria-describedby":X.errId(`building`),required:!0}),(0,l.jsx)(U,{form:X,name:`building`})]}),(0,l.jsxs)(`div`,{className:[`field`,X.bad(`email`)].filter(Boolean).join(` `),children:[(0,l.jsxs)(`label`,{htmlFor:`cad-hero-email`,children:[`EMAIL `,(0,l.jsx)(`span`,{className:`req-star`,children:`*`})]}),(0,l.jsx)(`input`,{id:`cad-hero-email`,name:`email`,type:`email`,placeholder:`you@company.com`,autoComplete:`email`,value:X.values.email,onChange:X.set(`email`),"aria-invalid":X.bad(`email`)?`true`:void 0,"aria-describedby":X.errId(`email`),required:!0}),(0,l.jsx)(U,{form:X,name:`email`})]}),(0,l.jsxs)(`div`,{className:[`field`,X.bad(`name`)].filter(Boolean).join(` `),children:[(0,l.jsxs)(`label`,{htmlFor:`cad-hero-name`,children:[`FULL NAME `,(0,l.jsx)(`span`,{className:`req-star`,children:`*`})]}),(0,l.jsx)(`input`,{id:`cad-hero-name`,name:`full_name`,type:`text`,placeholder:`John Smith`,autoComplete:`name`,value:X.values.name,onChange:X.set(`name`),"aria-invalid":X.bad(`name`)?`true`:void 0,"aria-describedby":X.errId(`name`),required:!0}),(0,l.jsx)(U,{form:X,name:`name`})]}),(0,l.jsxs)(`div`,{className:[`field`,X.bad(`phone`)].filter(Boolean).join(` `),children:[(0,l.jsxs)(`label`,{htmlFor:`cad-hero-phone`,children:[`PHONE `,(0,l.jsx)(`span`,{className:`req-star`,children:`*`})]}),(0,l.jsxs)(`div`,{className:`phone-input-wrap`,children:[(0,l.jsx)(K,{innerRef:X.codeRef,name:`country_code`}),(0,l.jsx)(`input`,{id:`cad-hero-phone`,name:`phone_number`,type:`tel`,className:`phone-num-input`,placeholder:`(512) 555-0100`,inputMode:`numeric`,autoComplete:`tel`,value:X.values.phone,onChange:X.set(`phone`),onKeyDown:G,"aria-invalid":X.bad(`phone`)?`true`:void 0,"aria-describedby":X.errId(`phone`),required:!0})]}),(0,l.jsx)(U,{form:X,name:`phone`})]}),(0,l.jsxs)(`div`,{className:[`field`,X.bad(`budget`)].filter(Boolean).join(` `),children:[(0,l.jsxs)(`label`,{htmlFor:`cad-hero-budget`,children:[`BUDGET RANGE `,(0,l.jsx)(`span`,{className:`req-star`,children:`*`})]}),(0,l.jsx)(`div`,{className:`select-dropdown-wrap`,children:(0,l.jsxs)(`select`,{id:`cad-hero-budget`,name:`budget_range`,value:X.values.budget,onChange:X.set(`budget`),"aria-invalid":X.bad(`budget`)?`true`:void 0,"aria-describedby":X.errId(`budget`),required:!0,children:[(0,l.jsx)(`option`,{value:``,children:`Select a range...`}),S.map(e=>(0,l.jsx)(`option`,{value:e,children:e},e))]})}),(0,l.jsx)(U,{form:X,name:`budget`})]}),(0,l.jsx)(q,{f:{id:`hero`,form:X}}),(0,l.jsxs)(`button`,{type:`submit`,className:`quote-btn proposal-submit-btn`,disabled:X.busy,children:[X.busy?`Sending…`:`Send My Proposal Request`,!X.busy&&(0,l.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`16`,height:`16`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,style:{display:`inline-block`,verticalAlign:`middle`,marginLeft:`6px`},children:[(0,l.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`}),(0,l.jsx)(`polyline`,{points:`12 5 19 12 12 19`})]})]}),(0,l.jsx)(J,{show:X.failed}),(0,l.jsxs)(`div`,{className:`proposal-trust`,children:[(0,l.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`14`,height:`14`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,style:{display:`inline-block`,verticalAlign:`middle`,marginRight:`5px`,color:`#94a3b8`},children:(0,l.jsx)(`path`,{d:`M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z`})}),(0,l.jsx)(`span`,{children:`100% confidential · No obligation · NDA on request`})]}),(0,l.jsxs)(`div`,{className:`proposal-terms`,children:[`By submitting you agree to our `,(0,l.jsx)(`a`,{href:`/privacy-policy`,children:`Privacy Policy`}),` and`,` `,(0,l.jsx)(`a`,{href:`/terms-of-use`,children:`Terms of Service`}),`.`]})]})]})]}),(0,l.jsxs)(`div`,{className:`container logo-strip-wrap`,children:[(0,l.jsxs)(`h2`,{className:`press-strip-title`,children:[`As seen and `,(0,l.jsx)(`span`,{className:`accent-text`,children:`Reported on`})]}),(0,l.jsx)(`div`,{className:`logo-slider`,children:(0,l.jsx)(`div`,{className:`logo-slide-track`,children:[0,1].map(e=>L.map((t,n)=>(0,l.jsx)(`div`,{className:`logo-item`,children:t},`${e}-${n}`)))})})]})]}),(0,l.jsxs)(`section`,{className:`section portfolio`,id:`work`,children:[(0,l.jsxs)(`div`,{className:`container`,children:[(0,l.jsx)(`div`,{className:`section-kicker`,children:`PORTFOLIO`}),(0,l.jsxs)(`div`,{className:`section-title-row`,children:[(0,l.jsxs)(`div`,{children:[(0,l.jsxs)(`h2`,{children:[`Mobile Products Built for `,(0,l.jsx)(`span`,{children:`Real Business Use`})]}),(0,l.jsx)(`p`,{children:`Explore our 16 featured applications across AI, Healthcare, Logistics, Sports & Entertainment.`})]}),(0,l.jsxs)(`a`,{href:`/case-studies`,className:`outline-link`,target:`_blank`,rel:`noreferrer`,children:[`View All Work `,(0,l.jsx)(N,{})]})]})]}),(0,l.jsxs)(`div`,{className:`portfolio-showcase-container`,children:[(0,l.jsx)(`div`,{className:`showcase-row`,children:(0,l.jsx)(`div`,{className:`showcase-track-left`,children:[0,1].map(e=>ee.map(t=>(0,l.jsx)(F,{item:t},`${e}-${t.slug}`)))})}),(0,l.jsx)(`div`,{className:`showcase-row`,children:(0,l.jsx)(`div`,{className:`showcase-track-right`,children:[0,1].map(e=>te.map(t=>(0,l.jsx)(F,{item:t},`${e}-${t.slug}`)))})})]})]}),(0,l.jsx)(`section`,{className:`stats-section`,id:`credibility`,children:(0,l.jsxs)(`div`,{className:`container`,children:[(0,l.jsxs)(`div`,{className:`stats-hero-row`,children:[(0,l.jsx)(`div`,{className:`stats-hero-big`,children:(0,l.jsx)(`span`,{className:`big-stat-number`,children:(0,l.jsx)(P,{value:`7+`})})}),(0,l.jsxs)(`div`,{className:`stats-hero-content`,children:[(0,l.jsxs)(`h2`,{children:[`Years of Building`,(0,l.jsx)(`br`,{}),(0,l.jsxs)(`span`,{className:`accent-text`,children:[`Mobile App Success`,(0,l.jsx)(`br`,{}),`Stories`]})]}),(0,l.jsx)(`p`,{children:`We build product experiences for startups, growing companies, and enterprises, turning complex ideas into reliable mobile apps through clear strategy, focused design, and practical engineering.`})]})]}),(0,l.jsx)(`div`,{className:`stats-numbers-bar`,children:ne.map((e,t)=>(0,l.jsxs)(`div`,{className:`stat-bar-item`,children:[(0,l.jsx)(`div`,{className:`stat-num`,children:(0,l.jsx)(P,{value:e.num})}),(0,l.jsx)(`div`,{className:`stat-label`,children:e.label})]},t))}),(0,l.jsx)(`p`,{className:`stats-footer-caption`,children:`As a mobile app development company USA businesses trust, we have delivered 1000+ apps across 20+ industries.`})]})}),(0,l.jsx)(`section`,{className:`consult-section`,id:`consultation`,children:(0,l.jsx)(`div`,{className:`container`,children:(0,l.jsxs)(`div`,{className:`consult-box`,children:[(0,l.jsxs)(`div`,{className:`consult-content`,children:[(0,l.jsxs)(`h2`,{children:[`Work With a Top Mobile App `,(0,l.jsx)(`span`,{children:`Development Company in the USA`})]}),(0,l.jsx)(`p`,{children:`Book a free consultation and get a clear technical view on scope, timeline, and investment before you commit.`})]}),(0,l.jsx)(`div`,{className:`consult-cta`,children:(0,l.jsx)(`a`,{href:`#quote`,className:`consult-pill-btn`,onClick:e=>w(e,Y.contact),children:`Contact`})})]})})}),(0,l.jsxs)(`section`,{className:`section process-section`,id:`process`,style:{position:`relative`,overflow:`hidden`},children:[(0,l.jsx)(o,{variant:`nodes`,tone:`crimson`,density:1.3,opacity:.6}),(0,l.jsxs)(`div`,{className:`container`,style:{position:`relative`,zIndex:2},children:[(0,l.jsxs)(`div`,{className:`center-heading`,children:[(0,l.jsx)(`div`,{className:`section-kicker`,children:`OUR PROCESS`}),(0,l.jsxs)(`h2`,{children:[`Our Step-by-Step `,(0,l.jsx)(`span`,{children:`App Development Process`})]}),(0,l.jsx)(`p`,{children:`Clear stages. Tangible deliverables. No black box.`})]}),(0,l.jsxs)(`div`,{className:`process-timeline-wrap`,children:[(0,l.jsx)(`div`,{className:`process-connector-line`}),(0,l.jsxs)(`div`,{className:`process-grid`,children:[(0,l.jsxs)(`article`,{className:`process-card step-01`,children:[(0,l.jsxs)(`div`,{className:`process-image discovery-3d-graphic`,children:[(0,l.jsx)(`div`,{className:`glass-radar-ring ring-3`}),(0,l.jsx)(`div`,{className:`glass-radar-ring ring-2`}),(0,l.jsx)(`div`,{className:`glass-radar-ring ring-1`}),(0,l.jsx)(`div`,{className:`radar-core-node`,children:`01`})]}),(0,l.jsx)(`span`,{className:`num`,children:`01`}),(0,l.jsx)(`h3`,{children:`Discover & Strategize`}),(0,l.jsx)(`p`,{children:`We clarify your idea, users, goals, budget and launch priorities before writing a line of code.`})]}),(0,l.jsxs)(`article`,{className:`process-card step-02`,children:[(0,l.jsxs)(`div`,{className:`process-image design-3d-graphic`,children:[(0,l.jsxs)(`div`,{className:`glass-ui-screen screen-back`,children:[(0,l.jsx)(`div`,{className:`ui-bar header`}),(0,l.jsx)(`div`,{className:`ui-bar content`})]}),(0,l.jsxs)(`div`,{className:`glass-ui-screen screen-front`,children:[(0,l.jsx)(`div`,{className:`ui-bar header red`}),(0,l.jsx)(`div`,{className:`ui-bar content`}),(0,l.jsx)(`div`,{className:`ui-circle-avatar`})]}),(0,l.jsx)(`div`,{className:`cursor-node`})]}),(0,l.jsx)(`span`,{className:`num`,children:`02`}),(0,l.jsx)(`h3`,{children:`Design & Prototype`}),(0,l.jsx)(`p`,{children:`We shape intuitive screens and clickable flows so the product feels clear before development starts.`})]}),(0,l.jsxs)(`article`,{className:`process-card step-03`,children:[(0,l.jsxs)(`div`,{className:`process-image develop-3d-graphic`,children:[(0,l.jsxs)(`div`,{className:`terminal-glass-window`,children:[(0,l.jsxs)(`div`,{className:`terminal-header`,children:[(0,l.jsx)(`span`,{className:`dot red`}),(0,l.jsx)(`span`,{className:`dot yellow`}),(0,l.jsx)(`span`,{className:`dot green`})]}),(0,l.jsxs)(`div`,{className:`code-lines`,children:[(0,l.jsx)(`div`,{className:`line l1`}),(0,l.jsx)(`div`,{className:`line l2 red`}),(0,l.jsx)(`div`,{className:`line l3`})]})]}),(0,l.jsx)(`div`,{className:`code-matrix-badge`,children:`</>`})]}),(0,l.jsx)(`span`,{className:`num`,children:`03`}),(0,l.jsx)(`h3`,{children:`Develop & Test`}),(0,l.jsx)(`p`,{children:`We build scalable features and test performance, usability, integrations and release readiness.`})]}),(0,l.jsxs)(`article`,{className:`process-card step-04`,children:[(0,l.jsxs)(`div`,{className:`process-image launch-3d-graphic`,children:[(0,l.jsx)(`div`,{className:`launch-rocket-badge`,children:(0,l.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`26`,height:`26`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,l.jsx)(`line`,{x1:`7`,y1:`17`,x2:`17`,y2:`7`}),(0,l.jsx)(`polyline`,{points:`7 7 17 7 17 17`})]})}),(0,l.jsx)(`div`,{className:`launch-sparkle s1`,children:`✦`}),(0,l.jsx)(`div`,{className:`launch-sparkle s2`,children:`✦`}),(0,l.jsx)(`div`,{className:`thruster-aura`})]}),(0,l.jsx)(`span`,{className:`num`,children:`04`}),(0,l.jsx)(`h3`,{children:`Launch & Upgrade`}),(0,l.jsx)(`p`,{children:`We support store submission, launch monitoring, improvements and post-release growth needs.`})]})]})]})]})]}),(0,l.jsx)(`section`,{className:`section industries`,children:(0,l.jsxs)(`div`,{className:`container`,children:[(0,l.jsxs)(`div`,{className:`center-heading`,children:[(0,l.jsx)(`div`,{className:`section-kicker`,children:`INDUSTRIES`}),(0,l.jsxs)(`h2`,{children:[`Industry Experience Across `,(0,l.jsx)(`span`,{children:`Multiple Verticals`})]}),(0,l.jsx)(`p`,{children:`We build around the workflows, regulations and customer expectations that matter in your market.`})]}),(0,l.jsx)(`div`,{className:`industry-grid`,children:z.map(e=>(0,l.jsxs)(`article`,{children:[(0,l.jsx)(`div`,{children:(0,l.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`22`,height:`22`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:e.icon})}),(0,l.jsx)(`h3`,{children:e.title}),(0,l.jsx)(`p`,{children:e.desc})]},e.title))})]})}),(0,l.jsx)(`section`,{className:`section build-section`,children:(0,l.jsxs)(`div`,{className:`container`,children:[(0,l.jsx)(`div`,{className:`section-kicker`,children:`WHAT WE BUILD`}),(0,l.jsx)(`div`,{className:`section-title-row`,children:(0,l.jsxs)(`div`,{children:[(0,l.jsxs)(`h2`,{children:[`Mobile App Solutions for `,(0,l.jsx)(`span`,{children:`Different Product Needs`})]}),(0,l.jsx)(`p`,{children:`From MVPs to mature products, we design, develop, launch and improve mobile experiences.`})]})}),(0,l.jsx)(`div`,{className:`build-grid`,children:re.map(e=>(0,l.jsxs)(`article`,{children:[(0,l.jsx)(`span`,{children:e.n}),(0,l.jsx)(`h3`,{children:e.title}),(0,l.jsx)(`p`,{children:e.desc})]},e.n))})]})}),(0,l.jsx)(`section`,{className:`awards-section`,id:`awards`,children:(0,l.jsxs)(`div`,{className:`container`,children:[(0,l.jsxs)(`div`,{className:`awards-top-grid`,children:[(0,l.jsxs)(`div`,{className:`awards-intro-card`,children:[(0,l.jsxs)(`h2`,{children:[`Awards &`,(0,l.jsx)(`br`,{}),(0,l.jsx)(`span`,{className:`accent-text`,children:`Recognitions`})]}),(0,l.jsx)(`p`,{children:`Our work has been recognized across software development, app design, and client satisfaction platforms. These badges reflect the standards we bring to every discovery call, sprint, and launch.`})]}),(0,l.jsx)(`div`,{className:`featured-award-card`,children:(0,l.jsx)(`img`,{src:`/cad/award-clutch.png`,alt:`Top App Development Company - Clutch`,loading:`lazy`,style:{maxHeight:`230px`,objectFit:`contain`},width:`120`,height:`40`})})]}),(0,l.jsx)(`div`,{className:`awards-badge-grid`,children:R.map(e=>(0,l.jsx)(`div`,{className:`badge-card`,children:(0,l.jsx)(`img`,{src:String(e.img).startsWith(`/`)?e.img:`/cad/${e.img}`,alt:e.alt,loading:`lazy`,width:`120`,height:`40`})},e.img))})]})}),(0,l.jsxs)(`section`,{className:`section reviews-marquee-section`,id:`reviews`,children:[(0,l.jsx)(`div`,{className:`container`,children:(0,l.jsxs)(`div`,{className:`reviews-header`,children:[(0,l.jsxs)(`h2`,{children:[`Trusted by Teams `,(0,l.jsx)(`span`,{className:`who-gradient`,children:`Who`}),` `,(0,l.jsx)(`span`,{className:`ship-underline`,children:`Ship`})]}),(0,l.jsx)(`p`,{children:`Real reviews from Bark, Trustpilot, and Clutch. Hover to pause.`})]})}),(0,l.jsx)(`div`,{className:`marquee-wrapper`,children:(0,l.jsx)(`div`,{className:`marquee-track marquee-track-left`,children:[0,1].map(e=>E.map((t,n)=>(0,l.jsx)(I,{r:t},`${e}-${n}`)))})}),(0,l.jsx)(`div`,{className:`marquee-wrapper margin-top-20`,children:(0,l.jsx)(`div`,{className:`marquee-track marquee-track-right`,children:[0,1].map(e=>D.map((t,n)=>(0,l.jsx)(I,{r:t},`${e}-${n}`)))})})]}),(0,l.jsxs)(`section`,{className:`section estimate-section`,id:`strategy`,children:[(0,l.jsx)(B,{density:.6,opacity:.35,className:`cad-estimate-dustfx`}),(0,l.jsxs)(`div`,{className:`container estimate-box`,children:[(0,l.jsxs)(`div`,{className:`estimate-copy`,children:[(0,l.jsxs)(`h2`,{children:[`Book a Free `,(0,l.jsx)(`span`,{className:`strategy-gradient`,children:`Strategy`}),` Call`]}),(0,l.jsx)(`p`,{className:`estimate-sub`,children:`Speak with a mobile app expert. Leave with a clear scope, a realistic timeline, and a fixed-fee estimate.`}),(0,l.jsx)(`div`,{className:`next-steps-kicker-wrap`,children:(0,l.jsx)(`div`,{className:`next-steps-kicker`,children:`WHAT HAPPENS NEXT`})}),(0,l.jsxs)(`div`,{className:`next-steps-list`,children:[(0,l.jsxs)(`div`,{className:`next-step-item`,children:[(0,l.jsx)(`span`,{className:`step-num`,children:`01`}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`strong`,{children:`Requirements Review`}),(0,l.jsx)(`p`,{children:`We review your goals, users, and feature priorities.`})]})]}),(0,l.jsxs)(`div`,{className:`next-step-item`,children:[(0,l.jsx)(`span`,{className:`step-num`,children:`02`}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`strong`,{children:`NDA if Needed`}),(0,l.jsx)(`p`,{children:`We sign a mutual NDA before any deep project discussion.`})]})]}),(0,l.jsxs)(`div`,{className:`next-step-item`,children:[(0,l.jsx)(`span`,{className:`step-num`,children:`03`}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`strong`,{children:`Scope and Estimate`}),(0,l.jsx)(`p`,{children:`You receive a clear scope, timeline, and cost estimate.`})]})]}),(0,l.jsxs)(`div`,{className:`next-step-item`,children:[(0,l.jsx)(`span`,{className:`step-num`,children:`04`}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`strong`,{children:`Project Kickoff`}),(0,l.jsx)(`p`,{children:`We align teams, lock the roadmap, and begin.`})]})]})]})]}),(0,l.jsxs)(`form`,{className:`estimate-form`,ref:Z.formRef,onSubmit:Z.onSubmit,noValidate:!0,children:[(0,l.jsxs)(`div`,{className:`form-row-grid`,children:[(0,l.jsxs)(`div`,{className:`form-field-group`,children:[(0,l.jsx)(`label`,{htmlFor:`est-name`,children:`FULL NAME *`}),(0,l.jsx)(`input`,{id:`est-name`,type:`text`,placeholder:`Full name`,autoComplete:`name`,className:Z.bad(`name`),value:Z.values.name,onChange:Z.set(`name`),"aria-invalid":Z.bad(`name`)?`true`:void 0,"aria-describedby":Z.errId(`name`),required:!0}),(0,l.jsx)(U,{form:Z,name:`name`})]}),(0,l.jsxs)(`div`,{className:`form-field-group`,children:[(0,l.jsx)(`label`,{htmlFor:`est-email`,children:`WORK EMAIL *`}),(0,l.jsx)(`input`,{id:`est-email`,type:`email`,placeholder:`you@company.com`,autoComplete:`email`,className:Z.bad(`email`),value:Z.values.email,onChange:Z.set(`email`),"aria-invalid":Z.bad(`email`)?`true`:void 0,"aria-describedby":Z.errId(`email`),required:!0}),(0,l.jsx)(U,{form:Z,name:`email`})]}),(0,l.jsxs)(`div`,{className:`form-field-group`,children:[(0,l.jsx)(`label`,{htmlFor:`est-phone`,children:`PHONE NUMBER *`}),(0,l.jsxs)(`div`,{className:`phone-input-wrap`,children:[(0,l.jsx)(K,{innerRef:Z.codeRef,name:`country_code_bottom`}),(0,l.jsx)(`input`,{id:`est-phone`,type:`tel`,className:[`phone-num-input`,Z.bad(`phone`)].filter(Boolean).join(` `),placeholder:`(512) 555-0100`,inputMode:`numeric`,autoComplete:`tel`,value:Z.values.phone,onChange:Z.set(`phone`),onKeyDown:G,"aria-invalid":Z.bad(`phone`)?`true`:void 0,"aria-describedby":Z.errId(`phone`),required:!0})]}),(0,l.jsx)(U,{form:Z,name:`phone`})]}),(0,l.jsxs)(`div`,{className:`form-field-group`,children:[(0,l.jsx)(`label`,{htmlFor:`est-nature`,children:`NATURE OF BUSINESS OR APP`}),(0,l.jsx)(`input`,{id:`est-nature`,type:`text`,placeholder:`e.g. fleet logistics, marketplace`,value:Z.values.nature,onChange:Z.set(`nature`)})]}),(0,l.jsxs)(`div`,{className:`form-field-group`,children:[(0,l.jsx)(`label`,{htmlFor:`est-budget`,children:`BUDGET RANGE`}),(0,l.jsxs)(`select`,{id:`est-budget`,value:Z.values.budget,onChange:Z.set(`budget`),children:[(0,l.jsx)(`option`,{value:``,disabled:!0,children:`Select a budget range`}),S.map(e=>(0,l.jsx)(`option`,{value:e,children:e},e))]})]}),(0,l.jsxs)(`div`,{className:`form-field-group`,children:[(0,l.jsx)(`label`,{htmlFor:`est-timeline`,children:`TIMELINE`}),(0,l.jsxs)(`select`,{id:`est-timeline`,value:Z.values.timeline,onChange:Z.set(`timeline`),children:[(0,l.jsx)(`option`,{value:``,disabled:!0,children:`Select a timeline`}),C.map(e=>(0,l.jsx)(`option`,{value:e,children:e},e))]})]}),(0,l.jsxs)(`div`,{className:`form-field-group full-width`,children:[(0,l.jsx)(`label`,{htmlFor:`est-brief`,children:`PROJECT REQUIREMENTS`}),(0,l.jsx)(`textarea`,{id:`est-brief`,rows:3,placeholder:`What are you building? Who is it for? What matters most?`,value:Z.values.brief,onChange:Z.set(`brief`)})]})]}),(0,l.jsx)(q,{f:{id:`estimate`,form:Z}}),(0,l.jsx)(`button`,{type:`submit`,className:`submit-discuss-btn`,disabled:Z.busy,children:Z.busy?`Sending…`:`Let's Discuss the Project`}),(0,l.jsx)(`p`,{className:`form-bottom-note`,children:`30 minutes. We reply within one business day. We will sign an NDA before any deep discussion.`}),(0,l.jsx)(J,{show:Z.failed})]})]})]}),(0,l.jsx)(`section`,{className:`section faq-section`,id:`faq`,children:(0,l.jsxs)(`div`,{className:`container faq-layout`,children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`div`,{className:`faq-kicker-badge`,children:`FAQ`}),(0,l.jsxs)(`h2`,{children:[`Frequently `,(0,l.jsx)(`span`,{className:`faq-asked-gradient`,children:`Asked`}),(0,l.jsx)(`br`,{}),(0,l.jsx)(`span`,{className:`faq-questions-gradient`,children:`Questions`})]})]}),(0,l.jsx)(`div`,{className:`faq-list`,children:O.map((e,t)=>(0,l.jsxs)(`details`,{open:t===0,children:[(0,l.jsxs)(`summary`,{children:[e.q,(0,l.jsx)(`span`,{children:`+`})]}),(0,l.jsx)(`p`,{children:e.a})]},e.q))})]})}),(0,l.jsx)(`section`,{className:`final-cta`,children:(0,l.jsxs)(`div`,{className:`container final-wrap`,children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{children:`READY TO BUILD?`}),(0,l.jsx)(`h2`,{children:`Bring us your app idea. We’ll help you turn it into a real product.`})]}),(0,l.jsxs)(`a`,{href:`#quote`,onClick:e=>w(e,Y.freeEstimate),children:[`Get Your Free Estimate `,(0,l.jsx)(N,{})]})]})}),(0,l.jsxs)(`section`,{className:`section offices-section`,id:`offices`,children:[(0,l.jsx)(o,{variant:`streams`,tone:`crimson`,density:1.3,opacity:.65}),(0,l.jsxs)(`div`,{className:`container`,children:[(0,l.jsx)(`div`,{className:`offices-header-row`,children:(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`div`,{className:`section-kicker-pill`,children:`PRESENCE`}),(0,l.jsxs)(`h2`,{children:[`Our `,(0,l.jsx)(`span`,{className:`global-offices-gradient`,children:`Global Offices`})]})]})}),(0,l.jsx)(`div`,{className:`offices-grid`,children:k.map(e=>(0,l.jsxs)(`article`,{className:`office-card`,children:[(0,l.jsxs)(`div`,{className:`office-thumb-wrap`,children:[(0,l.jsx)(`img`,{loading:`lazy`,src:String(e.img).startsWith(`/`)?e.img:`/cad/${e.img}`,alt:e.alt,className:`office-thumb`}),e.hq&&(0,l.jsx)(`span`,{className:`office-badge-hq`,children:`HQ`}),(0,l.jsx)(`span`,{className:`office-flag`,children:e.flag})]}),(0,l.jsxs)(`div`,{className:`office-card-body`,children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`h3`,{children:e.city}),(0,l.jsx)(`span`,{className:`office-country`,children:e.country}),(0,l.jsx)(`p`,{className:`office-address`,children:e.address})]}),(0,l.jsxs)(`a`,{href:e.map,target:`_blank`,rel:`noreferrer`,className:`office-map-link`,children:[(0,l.jsx)(se,{}),`View on Map`]})]})]},e.city))})]})]})]}),(0,l.jsxs)(`footer`,{children:[(0,l.jsx)(o,{variant:`streams`,tone:`crimson`,density:1.3,opacity:.65}),(0,l.jsxs)(`div`,{className:`container footer-wrap`,children:[(0,l.jsxs)(`a`,{href:`/`,"aria-label":`DigiWorks AI`,className:`footer-logo-link`,children:[(0,l.jsx)(`img`,{src:`/cad/logo.png`,alt:`DigiWorks AI`,className:`footer-logo-img logo-dark`,width:`130`,height:`38`,loading:`lazy`,decoding:`async`,style:{height:`38px`,width:`auto`}}),(0,l.jsx)(`img`,{src:`/cad/logo-black.png`,alt:`DigiWorks AI`,className:`footer-logo-img logo-light`,width:`130`,height:`38`,loading:`lazy`,decoding:`async`,style:{height:`38px`,width:`auto`,display:`none`}})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`strong`,{children:`Contact`}),(0,l.jsx)(`a`,{href:`tel:+17373945488`,children:`+1 737 394 5488`}),(0,l.jsx)(`a`,{href:`mailto:appointment@digiworksai.com`,children:`appointment@digiworksai.com`})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`strong`,{children:`Location`}),(0,l.jsx)(`span`,{children:`Austin, Texas, USA`}),(0,l.jsxs)(`div`,{className:`footer-social-row`,children:[ie.map(e=>(0,l.jsx)(`a`,{href:e.href,target:`_blank`,rel:`noreferrer`,"aria-label":e.label,className:`social-circle-btn`,children:(0,l.jsx)(`svg`,{viewBox:`0 0 24 24`,width:e.size,height:e.size,fill:e.fill,children:(0,l.jsx)(`path`,{d:e.d})})},e.label)),(0,l.jsx)(`a`,{href:`https://instagram.com/digiworksai.com`,target:`_blank`,rel:`noreferrer`,"aria-label":`Instagram`,className:`social-circle-btn`,children:(0,l.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`15`,height:`15`,fill:`none`,children:[(0,l.jsxs)(`radialGradient`,{id:`cadIgGrad`,cx:`30%`,cy:`107%`,r:`150%`,children:[(0,l.jsx)(`stop`,{offset:`0%`,stopColor:`#fdf497`}),(0,l.jsx)(`stop`,{offset:`5%`,stopColor:`#fdf497`}),(0,l.jsx)(`stop`,{offset:`45%`,stopColor:`#499bfd`}),(0,l.jsx)(`stop`,{offset:`60%`,stopColor:`#d6249f`}),(0,l.jsx)(`stop`,{offset:`90%`,stopColor:`#285AEB`})]}),(0,l.jsx)(`rect`,{x:`2`,y:`2`,width:`20`,height:`20`,rx:`5`,ry:`5`,stroke:`url(#cadIgGrad)`,strokeWidth:`2.2`}),(0,l.jsx)(`path`,{d:`M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z`,stroke:`url(#cadIgGrad)`,strokeWidth:`2.2`}),(0,l.jsx)(`line`,{x1:`17.5`,y1:`6.5`,x2:`17.51`,y2:`6.5`,stroke:`url(#cadIgGrad)`,strokeWidth:`2.5`,strokeLinecap:`round`})]})})]})]})]}),(0,l.jsxs)(`div`,{className:`container footer-standards-wrap`,children:[(0,l.jsxs)(`div`,{className:`standards-row`,children:[(0,l.jsx)(`span`,{className:`standards-label`,children:`STANDARDS WE ENGINEER TO`}),(0,l.jsx)(`div`,{className:`standards-pills`,children:A.map(e=>(0,l.jsxs)(`div`,{className:`standard-pill`,children:[(0,l.jsx)(ce,{}),(0,l.jsx)(`strong`,{children:e})]},e))})]}),(0,l.jsxs)(`div`,{className:`standards-row`,children:[(0,l.jsx)(`span`,{className:`standards-label`,children:`DELIVERED ON`}),(0,l.jsx)(`div`,{className:`standards-pills`,children:j.map(e=>(0,l.jsx)(`div`,{className:`standard-pill cloud-pill`,children:(0,l.jsx)(`strong`,{children:e})},e))})]})]}),(0,l.jsxs)(`div`,{className:`container footer-bottom`,children:[(0,l.jsx)(`span`,{className:`copyright-text`,children:`© DigiWorks AI 2026. All rights reserved. · Since 2025`}),(0,l.jsxs)(`div`,{className:`legal-links`,children:[(0,l.jsx)(`a`,{href:`/terms-of-use`,target:`_blank`,rel:`noreferrer`,children:`Terms of Use`}),(0,l.jsx)(`span`,{className:`dot-separator`,children:`•`}),(0,l.jsx)(`a`,{href:`/privacy-policy`,target:`_blank`,rel:`noreferrer`,children:`Privacy Policy`})]})]})]}),(0,l.jsx)(`div`,{className:[`quote-modal-overlay`,n?`active`:``].filter(Boolean).join(` `),"aria-hidden":n?`false`:`true`,onClick:e=>{e.target===e.currentTarget&&_()},children:(0,l.jsxs)(`div`,{className:`quote-modal-card split-timeline-modal`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`cadQuoteModalTitle`,children:[(0,l.jsx)(`button`,{type:`button`,className:`modal-close-icon`,onClick:_,"aria-label":`Close modal`,children:(0,l.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`18`,height:`18`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,l.jsx)(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),(0,l.jsx)(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]})}),(0,l.jsxs)(`div`,{className:`quote-modal-body`,children:[(0,l.jsxs)(`div`,{className:`modal-timeline-col`,children:[(0,l.jsx)(`span`,{className:`timeline-eyebrow`,children:`IDEA → PRODUCTION`}),(0,l.jsxs)(`div`,{className:`modal-timeline-steps`,children:[(0,l.jsxs)(`div`,{className:`modal-timeline-step active`,children:[(0,l.jsx)(`div`,{className:`modal-step-dot glowing-dot`}),(0,l.jsxs)(`div`,{className:`modal-step-content`,children:[(0,l.jsx)(`span`,{className:`modal-step-day`,children:`DAY 1`}),(0,l.jsx)(`strong`,{className:`modal-step-title`,children:`Free 20-minute call`})]})]}),(0,l.jsxs)(`div`,{className:`modal-timeline-step`,children:[(0,l.jsx)(`div`,{className:`modal-step-dot`}),(0,l.jsxs)(`div`,{className:`modal-step-content`,children:[(0,l.jsx)(`span`,{className:`modal-step-day`,children:`DAY 2`}),(0,l.jsx)(`strong`,{className:`modal-step-title`,children:`Scope and fixed fee`})]})]}),(0,l.jsxs)(`div`,{className:`modal-timeline-step`,children:[(0,l.jsx)(`div`,{className:`modal-step-dot`}),(0,l.jsxs)(`div`,{className:`modal-step-content`,children:[(0,l.jsx)(`span`,{className:`modal-step-day`,children:`DAY 7`}),(0,l.jsx)(`strong`,{className:`modal-step-title`,children:`Build running on your device`})]})]}),(0,l.jsxs)(`div`,{className:`modal-timeline-step`,children:[(0,l.jsx)(`div`,{className:`modal-step-dot`}),(0,l.jsxs)(`div`,{className:`modal-step-content`,children:[(0,l.jsx)(`span`,{className:`modal-step-day`,children:`DAY 14`}),(0,l.jsx)(`strong`,{className:`modal-step-title`,children:`Production ready`})]})]})]}),(0,l.jsx)(`div`,{className:`modal-timeline-guarantee`,children:(0,l.jsxs)(`p`,{children:[`Fixed fee agreed before development starts.`,(0,l.jsx)(`br`,{}),(0,l.jsx)(`strong`,{children:`Source code and all accounts transferred to you.`})]})})]}),(0,l.jsxs)(`div`,{className:`modal-form-col`,children:[(0,l.jsx)(`h2`,{id:`cadQuoteModalTitle`,className:`modal-form-title`,children:`Get A Free Quote!`}),(0,l.jsx)(`p`,{className:`modal-form-sub`,children:`Discuss your app idea with our consultants and we'll help you`}),(0,l.jsxs)(`form`,{className:`quote-modal-form`,ref:Q.formRef,onSubmit:Q.onSubmit,noValidate:!0,children:[(0,l.jsxs)(`div`,{className:`modal-field`,children:[(0,l.jsxs)(`label`,{htmlFor:`cadModalBuilding`,children:[`What are you building? `,(0,l.jsx)(`span`,{className:`req-star`,children:`*`})]}),(0,l.jsx)(`textarea`,{id:`cadModalBuilding`,rows:`2`,placeholder:`A fleet-tracking app for 40 trucks iOS and Android`,className:[`modal-textarea`,Q.bad(`building`)].filter(Boolean).join(` `),value:Q.values.building,onChange:Q.set(`building`),"aria-invalid":Q.bad(`building`)?`true`:void 0,"aria-describedby":Q.errId(`building`),required:!0})]}),(0,l.jsx)(U,{form:Q,name:`building`}),(0,l.jsxs)(`div`,{className:`modal-field`,children:[(0,l.jsxs)(`label`,{htmlFor:`cadModalEmail`,children:[`Email `,(0,l.jsx)(`span`,{className:`req-star`,children:`*`})]}),(0,l.jsx)(`input`,{id:`cadModalEmail`,type:`email`,placeholder:`you@company.com`,autoComplete:`email`,className:[`modal-input`,Q.bad(`email`)].filter(Boolean).join(` `),value:Q.values.email,onChange:Q.set(`email`),"aria-invalid":Q.bad(`email`)?`true`:void 0,"aria-describedby":Q.errId(`email`),required:!0})]}),(0,l.jsx)(U,{form:Q,name:`email`}),(0,l.jsxs)(`div`,{className:`modal-field`,children:[(0,l.jsxs)(`label`,{htmlFor:`cadModalName`,children:[`Full name `,(0,l.jsx)(`span`,{className:`req-star`,children:`*`})]}),(0,l.jsx)(`input`,{id:`cadModalName`,type:`text`,placeholder:`John Smith`,autoComplete:`name`,className:[`modal-input`,Q.bad(`name`)].filter(Boolean).join(` `),value:Q.values.name,onChange:Q.set(`name`),"aria-invalid":Q.bad(`name`)?`true`:void 0,"aria-describedby":Q.errId(`name`),required:!0})]}),(0,l.jsx)(U,{form:Q,name:`name`}),(0,l.jsxs)(`div`,{className:`modal-field`,children:[(0,l.jsxs)(`label`,{htmlFor:`cadModalPhone`,children:[`Phone `,(0,l.jsx)(`span`,{className:`req-star`,children:`*`})]}),(0,l.jsxs)(`div`,{className:`phone-input-wrap`,children:[(0,l.jsx)(K,{innerRef:Q.codeRef,name:`country_code`}),(0,l.jsx)(`input`,{id:`cadModalPhone`,type:`tel`,className:[`phone-num-input`,Q.bad(`phone`)].filter(Boolean).join(` `),placeholder:`(512) 555-0100`,inputMode:`numeric`,value:Q.values.phone,onChange:Q.set(`phone`),onKeyDown:G,"aria-invalid":Q.bad(`phone`)?`true`:void 0,"aria-describedby":Q.errId(`phone`),required:!0})]})]}),(0,l.jsx)(U,{form:Q,name:`phone`}),(0,l.jsx)(q,{f:{id:`modal`,form:Q}}),(0,l.jsxs)(`button`,{type:`submit`,className:`quote-btn modal-submit-btn`,disabled:Q.busy,children:[Q.busy?`SENDING…`:`Get My Fixed-Price Estimate`,!Q.busy&&(0,l.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`16`,height:`16`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,style:{marginLeft:`6px`,display:`inline-block`,verticalAlign:`middle`},children:[(0,l.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`}),(0,l.jsx)(`polyline`,{points:`12 5 19 12 12 19`})]})]}),(0,l.jsx)(J,{show:Q.failed}),(0,l.jsxs)(`div`,{className:`modal-trust-footer`,children:[(0,l.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`13`,height:`13`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,l.jsx)(`path`,{d:`M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z`})}),(0,l.jsx)(`span`,{children:`NDA on request · No obligation · We don't share your idea`})]})]})]})]})]})}),(0,l.jsx)(`div`,{className:[`thankyou-modal-overlay`,f?`active`:``].filter(Boolean).join(` `),"aria-hidden":f?`false`:`true`,onClick:e=>{e.target===e.currentTarget&&v()},children:(0,l.jsxs)(`div`,{className:`thankyou-modal-card`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`cadThankyouModalTitle`,children:[(0,l.jsx)(`button`,{type:`button`,className:`thankyou-modal-close`,onClick:v,"aria-label":`Close modal`,children:`×`}),(0,l.jsxs)(`div`,{className:`thankyou-modal-content`,children:[(0,l.jsx)(`div`,{className:`thankyou-check-ring`,children:(0,l.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`42`,height:`42`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,l.jsx)(`polyline`,{points:`20 6 9 17 4 12`})})}),(0,l.jsx)(`h2`,{id:`cadThankyouModalTitle`,children:`Request Received!`}),(0,l.jsxs)(`p`,{className:`thankyou-sub`,children:[`Thank you for reaching out to `,(0,l.jsx)(`strong`,{style:{color:`#ffffff`},children:`DigiWorks AI`}),`. Our mobile app development team has received your project details.`]}),(0,l.jsxs)(`div`,{className:`thankyou-info-box`,children:[(0,l.jsxs)(`div`,{className:`thankyou-info-item`,children:[(0,l.jsx)(`span`,{className:`info-icon`,children:`⚡`}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`strong`,{children:`Fast Response`}),(0,l.jsx)(`p`,{children:`An App Strategist will review your scope and contact you within 2 business hours.`})]})]}),(0,l.jsxs)(`div`,{className:`thankyou-info-item`,children:[(0,l.jsx)(`span`,{className:`info-icon`,children:`🔒`}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`strong`,{children:`Strict Confidentiality`}),(0,l.jsx)(`p`,{children:`Your app idea and project specifications are protected under our strict NDA policy.`})]})]})]}),(0,l.jsxs)(`p`,{className:`thankyou-timer-note`,children:[`Auto closing in `,(0,l.jsx)(`span`,{style:{color:`var(--red-light)`,fontWeight:800},children:m}),`s...`]})]})]})})]})]})}export{X as default};