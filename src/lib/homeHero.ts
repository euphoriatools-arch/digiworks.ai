const css = `
.dw-hero{position:relative;min-height:100svh;display:flex;flex-direction:column;isolation:isolate;overflow:hidden;padding:7.5rem 6vw 4rem;background:#060a13;color:#f8fafc}
@media (hover:hover) and (pointer:fine){.dw-hero{cursor:crosshair}.dw-hero a,.dw-hero button{cursor:pointer}}
.dw-bg-base{position:absolute;inset:0;z-index:-5;background:radial-gradient(60% 55% at 50% 45%, rgba(29,78,216,.28), transparent 70%),linear-gradient(180deg,#0a1122 0%,#060a13 100%)}
.dw-px{position:absolute;inset:0;z-index:-4;pointer-events:none;will-change:transform}
.dw-glow{position:absolute;border-radius:50%;filter:blur(80px);opacity:.45}
.dw-g1{width:42vw;height:42vw;left:8%;top:10%;background:radial-gradient(circle,#2563eb,transparent 70%);animation:dwDrift1 18s ease-in-out infinite alternate}
.dw-g2{width:36vw;height:36vw;right:6%;bottom:5%;background:radial-gradient(circle,#22d3ee,transparent 70%);opacity:.3;animation:dwDrift2 22s ease-in-out infinite alternate}
@keyframes dwDrift1{to{transform:translate(8vw,6vh) scale(1.15)}}
@keyframes dwDrift2{to{transform:translate(-7vw,-5vh) scale(1.1)}}
.dw-cursor{position:absolute;z-index:-3;width:520px;height:520px;margin:-260px 0 0 -260px;border-radius:50%;pointer-events:none;background:radial-gradient(circle,rgba(59,130,246,.22),rgba(34,211,238,.06) 45%,transparent 70%);opacity:0;transition:opacity .6s ease;mix-blend-mode:screen}
.dw-hero.is-active .dw-cursor{opacity:1}
.dw-bg-svg{position:absolute;inset:0;z-index:-2;width:100%;height:100%;pointer-events:none}
.dw-ring{fill:none;stroke:rgba(59,130,246,.22);stroke-width:1;transform-origin:720px 450px;transform-box:view-box}
.dw-r1{animation:dwSpin 60s linear infinite}
.dw-r2{animation:dwSpin 90s linear infinite reverse;stroke-dasharray:6 14}
.dw-r3{animation:dwPulse 6s ease-in-out infinite}
.dw-r4{animation:dwSpin 120s linear infinite;stroke-dasharray:2 10}
@keyframes dwSpin{to{transform:rotate(360deg)}}
@keyframes dwPulse{0%,100%{opacity:.25;transform:scale(1)}50%{opacity:.7;transform:scale(1.03)}}
.dw-wave{fill:none;stroke-width:1.4;stroke-linecap:round;stroke-dasharray:260 1400;animation:dwFlow 9s linear infinite}
.dw-wa{stroke:url(#dwHeroGradA)}
.dw-wb{stroke:url(#dwHeroGradB);opacity:.6;animation-duration:13s}
.dw-wc{stroke:url(#dwHeroGradA);opacity:.45;animation-duration:17s;animation-direction:reverse}
@keyframes dwFlow{from{stroke-dashoffset:1660}to{stroke-dashoffset:0}}
.dw-node{fill:#60a5fa;transform-box:fill-box;transform-origin:center;animation:dwTwinkle 4s ease-in-out infinite}
.dw-node.dim{fill:rgba(96,165,250,.4);animation-duration:6s}
.dw-n2{animation-delay:-1.5s}
.dw-n3{animation-delay:-3s}
.dw-n4{animation-delay:-2s;animation-duration:5s}
@keyframes dwTwinkle{0%,100%{opacity:.25;transform:scale(.8)}50%{opacity:1;transform:scale(1.25)}}
.dw-vignette{position:absolute;inset:0;z-index:-1;pointer-events:none;background:radial-gradient(ellipse at center,transparent 40%,#060a13 95%)}
.dw-center{position:relative;z-index:1;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;will-change:transform}
.dw-badge{padding:9px 20px;border-radius:999px;border:1px solid rgba(59,130,246,.4);background:rgba(15,23,42,.6);backdrop-filter:blur(8px);font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#bfdbfe;font-weight:600}
.dw-badge i{display:inline-block;width:7px;height:7px;border-radius:50%;background:#3b82f6;margin-right:10px;box-shadow:0 0 10px #3b82f6;vertical-align:middle;animation:dwBlink 2s ease-in-out infinite}
@keyframes dwBlink{0%,100%{opacity:1}50%{opacity:.3}}
.dw-hero h1{margin-top:32px;font-family:Unbounded,"Unbounded Fallback",sans-serif;font-weight:800;font-size:60px;line-height:1.08;letter-spacing:-2px;color:#f8fafc}
.dw-hero h1 .dw-b{background:linear-gradient(90deg,#60a5fa,#22d3ee,#60a5fa);background-size:200% auto;-webkit-background-clip:text;background-clip:text;color:transparent;animation:dwShine 6s linear infinite}
@keyframes dwShine{to{background-position:200% center}}
.dw-sub{margin-top:28px;max-width:640px;font-size:19px;line-height:1.7;color:#94a3b8}
.dw-sub a{color:#bfdbfe;text-decoration:underline;text-underline-offset:3px}
.dw-actions{margin-top:42px;display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
.dw-btn{padding:18px 32px;border-radius:14px;font-weight:600;font-size:16px;text-decoration:none;border:0;transition:transform .25s ease,box-shadow .25s ease}
.dw-btn:hover{transform:translateY(-2px)}
.dw-btn-primary{background:linear-gradient(135deg,#3b82f6,#1d4ed8);color:#fff;box-shadow:0 14px 40px rgba(59,130,246,.4)}
.dw-btn-primary:hover{box-shadow:0 18px 50px rgba(59,130,246,.6)}
.dw-btn-ghost{border:1px solid rgba(148,163,184,.3);color:#dbeafe;background:rgba(15,23,42,.4);backdrop-filter:blur(8px)}
.dw-btn-ghost:hover{border-color:rgba(96,165,250,.6)}
.dw-note{margin-top:28px;font-size:14px;color:#94a3b8}
@media (max-width:800px){.dw-hero h1{font-size:34px;letter-spacing:-1px}.dw-sub{font-size:16px}}
@media (prefers-reduced-motion:reduce){.dw-hero *,.dw-hero *::before,.dw-hero *::after{animation:none !important;transition:none !important}}
`;

export const homeHeroInnerHtml = `<style>${css}</style><div class="dw-bg-base" aria-hidden="true"></div><div class="dw-px" data-depth="-30" aria-hidden="true"><div class="dw-glow dw-g1"></div></div><div class="dw-px" data-depth="20" aria-hidden="true"><div class="dw-glow dw-g2"></div></div><div class="dw-cursor" aria-hidden="true"></div><svg class="dw-bg-svg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="dwHeroGradA" x1="0" x2="1"><stop offset="0%" stop-color="#1d4ed8" stop-opacity="0"></stop><stop offset="50%" stop-color="#3b82f6" stop-opacity=".9"></stop><stop offset="100%" stop-color="#22d3ee" stop-opacity="0"></stop></linearGradient><linearGradient id="dwHeroGradB" x1="0" x2="1"><stop offset="0%" stop-color="#22d3ee" stop-opacity="0"></stop><stop offset="50%" stop-color="#60a5fa" stop-opacity=".7"></stop><stop offset="100%" stop-color="#1d4ed8" stop-opacity="0"></stop></linearGradient></defs><g class="dw-px" data-depth="14"><ellipse class="dw-ring dw-r1" cx="720" cy="450" rx="260" ry="200"></ellipse><ellipse class="dw-ring dw-r2" cx="720" cy="450" rx="420" ry="320"></ellipse><ellipse class="dw-ring dw-r3" cx="720" cy="450" rx="600" ry="460"></ellipse><ellipse class="dw-ring dw-r4" cx="720" cy="450" rx="800" ry="600"></ellipse></g><g class="dw-px" data-depth="-22"><path class="dw-wave dw-wa" d="M-50 620 C 240 520, 420 720, 720 610 S 1200 470, 1500 580"></path><path class="dw-wave dw-wa" d="M-50 680 C 260 600, 460 780, 760 670 S 1220 540, 1500 640" style="animation-delay:-4s"></path><path class="dw-wave dw-wb" d="M-50 260 C 300 340, 520 160, 800 260 S 1200 380, 1500 230"></path><path class="dw-wave dw-wc" d="M-50 310 C 320 380, 540 220, 820 310 S 1220 420, 1500 280"></path></g><g class="dw-px" data-depth="34"><circle class="dw-node" cx="260" cy="280" r="3"></circle><circle class="dw-node dim dw-n2" cx="460" cy="180" r="2.5"></circle><circle class="dw-node dw-n3" cx="1080" cy="210" r="3"></circle><circle class="dw-node dim dw-n4" cx="1260" cy="340" r="2.5"></circle><circle class="dw-node dw-n2" cx="180" cy="640" r="3"></circle><circle class="dw-node dim dw-n3" cx="1180" cy="700" r="2.5"></circle><circle class="dw-node dw-n4" cx="1340" cy="560" r="3"></circle><circle class="dw-node dim" cx="520" cy="790" r="2.5"></circle></g></svg><div class="dw-vignette" aria-hidden="true"></div><div class="dw-center" data-depth-el="-8"><div class="dw-badge"><i></i>Austin HQ · Production AI for US Businesses</div><h1><span class="dw-w">The AI</span><br><span class="dw-b">Development Company</span><br><span class="dw-w">For US Businesses</span></h1><!-- DigiWorks AI is an Austin AI development company that builds agents, generative AI, predictive models, and automation for US businesses. --><p class="dw-sub">DigiWorks AI is an Austin AI development company that builds agents, <a href="/services/generative-ai-development.html">generative AI</a>, <a href="/services/predictive-modeling.html">predictive models</a>, and <a href="/services/automation-and-integration.html">automation for US businesses</a>.</p><div class="dw-actions"><button type="button" class="dw-btn dw-btn-primary" data-dw-scroll>Book a Free Discovery Call →</button><a class="dw-btn dw-btn-ghost" href="/case-studies.html">View Case Studies</a></div><p class="dw-note">Free discovery session · Reply within 1 business day</p></div>`;

export function homeHeroSectionHtml(): string {
  return `<section id="dw-hero" class="dw-hero">${homeHeroInnerHtml}</section>`;
}
