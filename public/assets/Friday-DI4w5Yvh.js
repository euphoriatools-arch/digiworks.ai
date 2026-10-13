import{a as e}from"./rolldown-runtime-CNC7AqOf.js";import{d as t,u as n}from"./motion-Cw6iLlDO.js";import{t as r}from"./Seo-B4SgXAPu.js";var i=e(t(),1),a=n(),o=`/api/friday-lead`,s=``,c=`/friday/discovery`,l=2,u=[`No`,`One`,`Two`,`Three`,`Four`,`Five`,`Six`,`Seven`,`Eight`,`Nine`][l]||l,d=`s`,f=`
.friday-lp{
  --bg:#0B0A09; --ink:#0E0D0C; --deeper:#080807; --deep:#131211; --field:#141312;
  --white:#FFFFFF; --near:#F7F5F2; --strong:#E4DED7; --mid:#CFC8C1;
  --body:#A5A099; --dim:#9A948C; --faint:#8F8981; --ghost:#8A847D;
  --line:rgba(255,255,255,0.10); --line2:rgba(255,255,255,0.14); --hair:rgba(255,255,255,0.07);
  --grad:linear-gradient(92deg,#1c83ff,#0066e0);
  --grad-hover:linear-gradient(92deg,#328fff,#006df0);
  --focus:#3c95ff;
  --pad:24px;
  --display:'Anton',Impact,sans-serif; --sans:'Sora',system-ui,sans-serif; --mono:'Space Grotesk',sans-serif;
  background:var(--bg);color:var(--near);font-family:var(--sans);
  background-image:radial-gradient(680px 420px at 78% -4%,rgba(28,131,255,.10),transparent 62%),radial-gradient(520px 380px at 0% 12%,rgba(0,102,224,.06),transparent 60%);
  background-repeat:no-repeat;-webkit-font-smoothing:antialiased;
  min-height:100vh;padding-bottom:84px;position:relative;
}
body.friday-active{background:#0B0A09}
body.friday-active::after{display:none}
.friday-lp *{box-sizing:border-box}
.friday-lp img{display:block}
.friday-lp a{color:#3c95ff;text-decoration:none}
.friday-lp a:hover{color:#1c83ff}
.friday-lp h1,.friday-lp h2,.friday-lp h3,.friday-lp p{margin:0}
.friday-lp button,.friday-lp input{font-family:inherit}
.friday-lp :focus-visible{outline:2px solid var(--focus);outline-offset:2px}
.friday-lp .btn:focus-visible,.friday-lp .opt:focus-visible{outline:2px solid var(--focus);outline-offset:3px}

.friday-lp .wrap{max-width:1440px;margin:0 auto}
.friday-lp .sec{border-top:1px solid var(--line);padding:52px var(--pad) 56px}
.friday-lp .sec--raised{background:var(--ink)}
.friday-lp .sec--deep{background:var(--deeper)}
.friday-lp .tick{width:44px;height:2px;background-image:var(--grad);margin-bottom:22px}
.friday-lp h1,.friday-lp h2{font-family:var(--display);font-weight:400;letter-spacing:-.015em}
.friday-lp h2{font-size:36px;line-height:1.02;color:var(--white)}
.friday-lp .grad{background-image:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent;display:block}
.friday-lp .eyebrow{font-family:var(--mono);font-size:11.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#B9B2AA}
.friday-lp .body{font-size:14.5px;line-height:1.65;color:var(--body)}
.friday-lp .meta{font-family:var(--mono);font-size:13px;letter-spacing:.03em;color:var(--dim)}

.friday-lp .btn{
  display:flex;align-items:center;justify-content:center;width:100%;height:60px;
  background-image:var(--grad);border:none;border-radius:2px;color:#fff;
  font-size:16px;font-weight:600;letter-spacing:.005em;cursor:pointer;
  transition:background-image .18s cubic-bezier(.21,.65,.36,1);
}
.friday-lp .btn:hover{background-image:var(--grad-hover)}

/* Header — full-bleed dark bar: logo left, phone pill + solid-red CTA right.
   Matches the main digiworksai.com site header style. */
.friday-lp header{padding:22px var(--pad) 0;display:flex;align-items:center;gap:12px 14px;flex-wrap:wrap;width:100vw;margin-left:calc(50% - 50vw)}
.friday-lp header img{height:19px;width:auto;opacity:.95}
.friday-lp .fr-head-cta{display:flex;align-items:center;gap:10px;margin-left:auto;flex-wrap:wrap}
.friday-lp .fr-phone{display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(76,158,255,.2);background:rgba(12,20,36,.7);border-radius:999px;padding:9px 16px;font-family:var(--sans);font-size:13px;font-weight:600;color:#fff;white-space:nowrap}
.friday-lp .fr-phone svg{width:14px;height:14px;flex:none}
.friday-lp .fr-apply{display:inline-flex;align-items:center;justify-content:center;border:none;border-radius:999px;background-image:var(--grad);padding:10px 20px;font-family:var(--sans);font-size:13px;font-weight:600;color:#fff;white-space:nowrap;cursor:pointer;box-shadow:0 0 24px rgba(26,130,255,.35);transition:background-image .18s cubic-bezier(.21,.65,.36,1)}
.friday-lp .fr-apply:hover{background-image:var(--grad-hover)}

.friday-lp .hero{padding:38px var(--pad) 44px;width:100vw;margin-left:calc(50% - 50vw)}
.friday-lp .hero h1{font-size:54px;line-height:.94;margin-bottom:18px;text-wrap:balance}
.friday-lp .hero .forwho{font-size:15px;line-height:1.5;color:var(--mid);margin-bottom:22px;padding-left:14px;border-left:1px solid var(--line2)}
.friday-lp .hero .lead{font-size:16px;line-height:1.5;font-weight:500;color:var(--strong);margin-bottom:16px}
/* Callout — the "not a mockup" line, promoted to the dominant post-headline read */
.friday-lp .hero .callout{font-size:19px;line-height:1.45;font-weight:600;color:var(--white);margin-bottom:30px;padding-left:16px;border-left:3px solid #1c83ff}
/* Price statement — standalone line above the CTA, in white */
.friday-lp .hero .price-line{font-size:16px;line-height:1.5;font-weight:600;color:var(--white);margin-bottom:16px}

/* Hero phone stack — three overlapping, subtly angled device frames */
.friday-lp .phone-stack{position:relative;width:100%;max-width:320px;height:400px;margin:44px auto 6px}
.friday-lp .pf{position:absolute;top:0;width:174px;border:1px solid var(--line2);background:#0F0E0D;padding:6px 6px 0;box-shadow:0 26px 60px rgba(0,0,0,.55)}
.friday-lp .pf .bar{height:30px;background-image:linear-gradient(140deg,#1c83ff,#0066e0)}
.friday-lp .pf .screen{position:relative;overflow:hidden;height:326px;background:var(--deep);border-left:1px solid rgba(255,255,255,.05);border-right:1px solid rgba(255,255,255,.05)}
.friday-lp .pf .screen img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top}
.friday-lp .pf-back{left:6px;top:34px;transform:rotate(-9deg);z-index:1}
.friday-lp .pf-mid{left:73px;top:16px;transform:rotate(5deg);z-index:2}
.friday-lp .pf-front{left:140px;top:44px;transform:rotate(-2deg);z-index:3}

.friday-lp .trust{border-top:1px solid var(--line);padding:20px var(--pad);display:flex;flex-wrap:wrap;gap:8px 12px;font-family:var(--mono);font-size:12px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:#A9A39B}
.friday-lp .trust s{color:#54504B;text-decoration:none}

.friday-lp .stats{border-top:1px solid var(--line);padding:26px var(--pad);display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.friday-lp .stat b{display:block;font-family:var(--display);font-size:34px;line-height:1;letter-spacing:-.01em;color:var(--white)}
.friday-lp .stat span{display:block;margin-top:9px;font-family:var(--mono);font-size:10.5px;font-weight:500;letter-spacing:.13em;text-transform:uppercase;color:var(--dim);line-height:1.6}

.friday-lp .cmp{margin-top:34px;border-top:1px solid var(--line2)}
.friday-lp .cmp-col{padding:22px 0;border-bottom:1px solid var(--hair)}
.friday-lp .cmp-col h3{font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--dim);margin-bottom:16px}
.friday-lp .cmp-col.is-us h3{color:var(--white)}
.friday-lp .cmp-row{display:grid;grid-template-columns:104px 1fr;gap:14px;padding:9px 0}
.friday-lp .cmp-row dt{font-family:var(--mono);font-size:10.5px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:var(--ghost);padding-top:3px}
.friday-lp .cmp-row dd{margin:0;font-size:14.5px;line-height:1.5;color:var(--body)}
.friday-lp .cmp-col.is-us .cmp-row dd{color:var(--strong)}
.friday-lp .cmp-note{margin-top:24px;font-size:14.5px;line-height:1.65;color:var(--body)}

.friday-lp .listhead{padding-bottom:12px;border-bottom:1px solid var(--line2)}
.friday-lp .row{display:grid;grid-template-columns:20px 1fr;gap:12px;padding:14px 0;border-bottom:1px solid var(--hair)}
.friday-lp .row i{font-family:var(--mono);font-size:13px;line-height:1.5;font-style:normal}
.friday-lp .row span{font-size:14.5px;line-height:1.5}
.friday-lp .yes i{color:var(--white)}.friday-lp .yes span{color:var(--mid)}
.friday-lp .no i{color:var(--faint)}.friday-lp .no span{color:var(--body)}
.friday-lp .pull{margin-top:34px;padding:22px 0;border-top:1px solid var(--line2);border-bottom:1px solid var(--line2);font-family:var(--display);font-size:23px;line-height:1.2;color:var(--white)}

.friday-lp .tl{position:relative;padding-left:38px;margin-top:40px}
.friday-lp .tl:before{content:"";position:absolute;left:11px;top:6px;bottom:14px;width:1px;background:var(--line2)}
.friday-lp .day{position:relative;padding-bottom:26px}
.friday-lp .day:before{content:"";position:absolute;left:-27px;top:5px;width:23px;height:1px;background:rgba(255,255,255,.22)}
.friday-lp .day:after{content:"";position:absolute;left:-31px;top:2px;width:7px;height:7px;background:var(--bg);border:1px solid rgba(255,255,255,.35)}
.friday-lp .day>div{border-top:1px solid var(--line2);padding-top:12px}
.friday-lp .day-top{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:12px}
.friday-lp .day-name{font-family:var(--display);font-size:26px;line-height:1;color:var(--white)}
.friday-lp .day-idx{font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:.16em;color:var(--faint)}
.friday-lp .day p{font-size:14.5px;line-height:1.5;font-weight:500;color:var(--strong);margin-bottom:10px}
.friday-lp .see{display:grid;grid-template-columns:14px 1fr;gap:8px;font-family:var(--mono);font-size:13px;line-height:1.5;color:var(--dim)}
.friday-lp .tl.reveal .day{opacity:0;transform:translateY(22px);transition:opacity .55s cubic-bezier(.21,.65,.36,1),transform .55s cubic-bezier(.21,.65,.36,1)}
.friday-lp .tl.reveal .day.in{opacity:1;transform:none}

.friday-lp .gtee{max-width:760px}
.friday-lp .gtee .lead{font-family:var(--display);font-size:26px;line-height:1.18;color:var(--white);margin:0 0 30px}
.friday-lp .clause{padding:20px 0;border-top:1px solid var(--hair);display:grid;grid-template-columns:1fr;gap:8px}
.friday-lp .clause:first-of-type{border-top:1px solid var(--line2)}
.friday-lp .clause dt{font-family:var(--mono);font-size:10.5px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--white)}
.friday-lp .clause dd{margin:0;font-size:14.5px;line-height:1.6;color:var(--body)}

.friday-lp .cards{display:flex;flex-direction:column;gap:28px}
.friday-lp .card{border:1px solid var(--line);background:var(--ink)}
.friday-lp .frames{padding:18px 18px 0;display:flex;gap:10px}
.friday-lp .frame{flex:1;aspect-ratio:9/17;background:#171615;border:1px solid var(--line2);display:flex;flex-direction:column;justify-content:space-between;overflow:hidden}
.friday-lp .frame .fbar{height:22px;background:#1F1E1C;border-bottom:1px solid var(--line)}
.friday-lp .frame .flabel{padding:0 8px 12px;font-family:var(--mono);font-size:8.5px;font-weight:500;letter-spacing:.13em;text-transform:uppercase;color:var(--ghost);text-align:center;line-height:1.6}
.friday-lp .card-body{padding:18px}
.friday-lp .card-cat{font-family:var(--mono);font-size:10.5px;font-weight:700;letter-spacing:.19em;text-transform:uppercase;color:var(--dim);margin-bottom:8px}
.friday-lp .card-name{font-family:var(--display);font-size:22px;color:var(--white);margin-bottom:10px}
.friday-lp .card-body p{font-size:13.5px;line-height:1.55;color:var(--body)}

.friday-lp .tcards{display:flex;flex-direction:column;gap:16px}
.friday-lp .tcard{border:1px solid var(--line);background:var(--bg);padding:20px}
.friday-lp .tcard-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}
.friday-lp .stars{font-family:var(--mono);font-size:13px;letter-spacing:.22em;color:var(--strong)}
.friday-lp .badge{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--dim);border:1px solid var(--line2);padding:4px 8px}
.friday-lp .quote-slot{height:78px;background:#171615;border:1px solid var(--line2);display:flex;align-items:center;justify-content:center;margin-bottom:16px}
.friday-lp .quote-slot span{font-family:var(--mono);font-size:9.5px;font-weight:500;letter-spacing:.15em;text-transform:uppercase;color:var(--ghost)}
.friday-lp .tname{font-size:14px;font-weight:500;color:var(--white)}

.friday-lp .terms{border-top:1px solid var(--line2)}
.friday-lp .term{padding:16px 0;border-bottom:1px solid rgba(255,255,255,.09)}
.friday-lp .term dt{font-family:var(--mono);font-size:10.5px;font-weight:700;letter-spacing:.19em;text-transform:uppercase;color:var(--dim);margin-bottom:7px}
.friday-lp .term dd{margin:0;font-size:14.5px;line-height:1.5;color:var(--strong)}

.friday-lp #form{background:var(--ink)}
.friday-lp .prog-head{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:12px}
.friday-lp .bars{display:flex;gap:4px;margin-bottom:32px}
.friday-lp .bars i{flex:1;height:3px;background:rgba(255,255,255,.12);transition:background .3s cubic-bezier(.21,.65,.36,1)}
.friday-lp .bars i.on{background-image:var(--grad)}
.friday-lp #stage{transition:opacity .18s cubic-bezier(.21,.65,.36,1)}
.friday-lp #stage.fade{opacity:0}
.friday-lp #q{font-size:32px;line-height:1.05;margin-bottom:26px}
.friday-lp .opts{display:flex;flex-direction:column;gap:10px}
.friday-lp .opt{display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%;min-height:62px;padding:16px 18px;background:rgba(255,255,255,.02);border:1px solid var(--line2);border-radius:2px;font-size:15px;font-weight:500;line-height:1.35;color:var(--near);text-align:left;cursor:pointer;transition:border-color .18s}
.friday-lp .opt:hover{border-color:rgba(255,255,255,.42)}
.friday-lp .opt em{font-family:var(--mono);font-size:13px;color:var(--dim);font-style:normal}
.friday-lp .fields{display:flex;flex-direction:column;gap:14px}
.friday-lp .fields label{display:block;font-family:var(--mono);font-size:10.5px;font-weight:700;letter-spacing:.19em;text-transform:uppercase;color:var(--dim);margin-bottom:8px}
.friday-lp .fields input{width:100%;height:56px;padding:0 16px;background:var(--field);border:1px solid var(--line2);border-radius:2px;font-size:15.5px;color:var(--near);outline:none}
.friday-lp .fields input::placeholder{color:#6E6862}
.friday-lp .fields input:focus{border-color:#1c83ff}
.friday-lp .fields input:focus-visible{outline:none;border-color:#1c83ff;box-shadow:0 0 0 2px rgba(60,149,255,.45)}
.friday-lp .err{display:none;margin-top:8px;font-family:var(--mono);font-size:11px;font-weight:500;letter-spacing:.06em;color:var(--focus)}
.friday-lp .f-bad input{border-color:var(--focus)}
.friday-lp .f-bad .err{display:block}
.friday-lp .hide{display:none}
.friday-lp .back{margin-top:22px;background:none;border:none;padding:6px 0;font-family:var(--mono);font-size:11.5px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--dim);cursor:pointer}
.friday-lp .back[disabled]{color:#5B5651;cursor:default}

.friday-lp .faq{border-top:1px solid var(--line2)}
.friday-lp .faq-item{border-bottom:1px solid rgba(255,255,255,.09)}
.friday-lp .faq-q{display:flex;align-items:flex-start;justify-content:space-between;gap:14px;width:100%;padding:18px 0;background:none;border:none;text-align:left;cursor:pointer}
.friday-lp .faq-q span{font-size:15px;font-weight:500;line-height:1.4;color:var(--near)}
.friday-lp .faq-q em{font-family:var(--mono);font-size:17px;line-height:1.2;color:var(--dim);font-style:normal;transition:transform .2s cubic-bezier(.21,.65,.36,1)}
.friday-lp .faq-item.open .faq-q em{transform:rotate(45deg)}
.friday-lp .faq-a{display:none;padding:0 0 20px;font-size:14.5px;line-height:1.62;color:var(--body)}
.friday-lp .faq-item.open .faq-a{display:block}

.friday-lp .final{border-top:1px solid var(--line);padding:56px var(--pad)}
.friday-lp .final h2{font-size:44px;line-height:.98;margin-bottom:18px}
.friday-lp .final .body{margin-bottom:28px;font-size:15px}
.friday-lp .contact{margin-top:18px;font-family:var(--mono);font-size:13px;line-height:1.9;letter-spacing:.02em;color:var(--dim);text-align:center}
.friday-lp footer{border-top:1px solid var(--line);padding:24px;display:flex;flex-direction:column;gap:8px;font-family:var(--mono);font-size:11.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--ghost)}
.friday-lp footer nav{display:flex;gap:16px}
.friday-lp footer a{color:var(--dim)}

.friday-lp .sticky{
  position:fixed;left:0;right:0;bottom:0;z-index:20;padding:12px 16px 16px;
  background:rgba(11,10,9,.94);border-top:1px solid var(--line2);
  transform:translateY(120%);transition:transform .28s cubic-bezier(.21,.65,.36,1);
}
.friday-lp .sticky.show{transform:none}
.friday-lp .sticky .btn{height:56px}
@media (min-width:1024px){.friday-lp .sticky{display:none}}

@media (max-width:1023px){
  .friday-lp .two > div + div .listhead{margin-top:40px}
  .friday-lp .split-row .btn,.friday-lp .center-cta .btn{margin-top:32px}
  .friday-lp .cmp-col.is-us{background:rgba(255,255,255,.02);padding:22px 16px;margin:0 -16px}
}

@media (min-width:1024px){
  .friday-lp{--pad:80px;padding-bottom:0}
  .friday-lp .sec{padding:90px var(--pad)}
  .friday-lp h2{font-size:62px;line-height:1}
  .friday-lp .tick{width:56px;margin-bottom:26px}
  .friday-lp .body{font-size:16px;line-height:1.7}
  .friday-lp .btn{display:inline-flex;width:auto;height:62px;padding:0 44px;font-size:16.5px}
  .friday-lp header{padding:32px var(--pad) 0}
  .friday-lp header img{height:22px}

  .friday-lp .hero{padding:64px var(--pad) 72px;display:grid;grid-template-columns:1fr 460px;gap:80px;align-items:center}
  .friday-lp .hero h1{font-size:104px;line-height:.9;letter-spacing:-.02em;margin-bottom:24px}
  .friday-lp .hero .forwho{font-size:17px;max-width:560px;margin-bottom:28px;padding-left:18px}
  .friday-lp .hero .lead{font-size:21px;line-height:1.45;max-width:640px;margin-bottom:18px}
  .friday-lp .hero .callout{font-size:24px;line-height:1.4;max-width:600px;margin-bottom:38px;padding-left:20px}
  .friday-lp .hero .price-line{font-size:20px;margin-bottom:18px}
  .friday-lp .hero-cta{display:flex;align-items:center;gap:24px}

  .friday-lp .phone-stack{max-width:440px;height:540px;margin:0 0 0 auto}
  .friday-lp .pf{width:230px}
  .friday-lp .pf .bar{height:38px}
  .friday-lp .pf .screen{height:430px}
  .friday-lp .pf-back{left:10px;top:42px}
  .friday-lp .pf-mid{left:100px;top:20px}
  .friday-lp .pf-front{left:195px;top:54px}

  .friday-lp .trust{padding:20px var(--pad);flex-wrap:nowrap;gap:20px;font-size:13px;letter-spacing:.12em}
  .friday-lp .stats{padding:34px var(--pad);gap:40px}
  .friday-lp .stat b{font-size:52px}
  .friday-lp .stat span{font-size:11.5px;margin-top:12px}

  .friday-lp .cmp{display:grid;grid-template-columns:repeat(3,1fr);gap:0;margin-top:48px}
  .friday-lp .cmp-col{padding:26px 32px;border-bottom:none;border-left:1px solid var(--hair)}
  .friday-lp .cmp-col:first-child{border-left:none;padding-left:0}
  .friday-lp .cmp-col.is-us{background:rgba(255,255,255,.03)}
  .friday-lp .cmp-col h3{font-size:11.5px;margin-bottom:22px}
  .friday-lp .cmp-row{grid-template-columns:1fr;gap:6px;padding:14px 0;border-top:1px solid var(--hair)}
  .friday-lp .cmp-row:first-of-type{border-top:none}
  .friday-lp .cmp-row dd{font-size:16px}
  .friday-lp .cmp-note{margin-top:36px;max-width:720px;font-size:16px}

  .friday-lp .two{display:grid;grid-template-columns:1fr 1fr;gap:64px}
  .friday-lp .row{grid-template-columns:24px 1fr;gap:14px;padding:15px 0}
  .friday-lp .row i{font-size:14px}.friday-lp .row span{font-size:16px}
  .friday-lp .pull{margin-top:56px;padding:28px 0;font-size:34px;line-height:1.15}
  .friday-lp .head-split{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;margin-bottom:76px}
  .friday-lp .head-split h2{margin:0}
  .friday-lp .head-split p+p{margin-top:18px}

  .friday-lp .tl{padding:0;margin-top:0;border-top:1px solid var(--line2);display:grid;grid-template-columns:repeat(5,1fr)}
  .friday-lp .tl:before{display:none}
  .friday-lp .day{padding:28px 28px 0 0}
  .friday-lp .day:before{display:none}
  .friday-lp .day:after{content:"";position:absolute;left:0;top:0;width:1px;height:16px;background:rgba(255,255,255,.30);border:none}
  .friday-lp .day>div{border-top:none;padding-top:0}
  .friday-lp .day-top{display:block;margin-bottom:0}
  .friday-lp .day-idx{display:block;font-size:11.5px;letter-spacing:.19em;margin-bottom:14px}
  .friday-lp .day-name{font-size:38px;letter-spacing:0;margin-bottom:22px}
  .friday-lp .day p{font-size:15.5px;margin-bottom:18px}
  .friday-lp .see{padding-top:16px;border-top:1px solid rgba(255,255,255,.09);grid-template-columns:16px 1fr;font-size:13px}
  .friday-lp .after-tl{margin-top:64px;max-width:620px;font-size:15.5px}

  .friday-lp .gtee{max-width:820px;margin:0 auto;text-align:center}
  .friday-lp .gtee .tick{margin:0 auto 26px}
  .friday-lp .gtee .lead{font-size:40px;line-height:1.14;margin-bottom:44px}
  .friday-lp .clause{grid-template-columns:220px 1fr;gap:32px;text-align:left;padding:22px 0}
  .friday-lp .clause dd{font-size:16px}

  .friday-lp .cards,.friday-lp .tcards{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}
  .friday-lp .frames{padding:24px 24px 0;gap:14px}
  .friday-lp .frame .fbar{height:26px}
  .friday-lp .frame .flabel{font-size:9.5px;padding-bottom:16px}
  .friday-lp .card-body{padding:26px 24px 28px}
  .friday-lp .card-cat{font-size:10.5px;margin-bottom:10px}
  .friday-lp .card-name{font-size:28px;margin-bottom:12px}
  .friday-lp .card-body p{font-size:15px}
  .friday-lp .center-cta{display:flex;justify-content:center;margin-top:52px}
  .friday-lp .tcard{padding:28px}
  .friday-lp .tcard-top{margin-bottom:22px}
  .friday-lp .stars{font-size:14px}
  .friday-lp .quote-slot{height:112px;margin-bottom:22px}
  .friday-lp .quote-slot span{font-size:10px}
  .friday-lp .tname{font-size:15.5px}

  .friday-lp .split-row{display:flex;align-items:center;justify-content:space-between;gap:60px;margin-top:56px;padding:32px 0;border-top:1px solid var(--line2);border-bottom:1px solid var(--line2)}
  .friday-lp .split-row .pull{margin:0;padding:0;border:none;flex:1}
  .friday-lp .split-row .btn{flex:none}
  .friday-lp .price{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start}
  .friday-lp .price h2{margin-bottom:40px}
  .friday-lp .term{display:grid;grid-template-columns:200px 1fr;gap:32px;padding:20px 0}
  .friday-lp .term dt{font-size:11px;letter-spacing:.18em;margin:3px 0 0}
  .friday-lp .term dd{font-size:16px}

  .friday-lp #form .inner{max-width:720px;margin:0 auto}
  .friday-lp .bars{gap:5px;margin-bottom:44px}
  .friday-lp #q{font-size:52px;line-height:1.02;margin-bottom:40px}
  .friday-lp .opt{min-height:66px;padding:18px 22px;font-size:16.5px}
  .friday-lp .fields{display:grid;grid-template-columns:1fr 1fr;gap:18px}
  .friday-lp .fields input{height:58px;padding:0 18px;font-size:16px}
  .friday-lp .f-wide{grid-column:1 / -1}
  .friday-lp .submit-row{grid-column:1 / -1;display:flex;align-items:center;gap:24px;margin-top:8px}
  .friday-lp .faq-wrap{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start}
  .friday-lp .faq-q{padding:22px 0;gap:20px}
  .friday-lp .faq-q span{font-size:17px}
  .friday-lp .faq-q em{font-size:19px}
  .friday-lp .faq-a{padding:0 40px 24px 0;font-size:16px}

  .friday-lp .final{padding:100px var(--pad);display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:end}
  .friday-lp .final h2{font-size:84px;line-height:.92;letter-spacing:-.02em;margin:0}
  .friday-lp .final .body{font-size:17px;line-height:1.6;margin-bottom:32px}
  .friday-lp .contact{text-align:left;font-size:13.5px;margin-top:22px}
  .friday-lp footer{padding:26px var(--pad);flex-direction:row;align-items:center;justify-content:space-between;font-size:11.5px;letter-spacing:.13em}
  .friday-lp footer nav{gap:26px}
}
@media (prefers-reduced-motion:reduce){
  .friday-lp *{transition:none!important}
  .friday-lp .tl.reveal .day{opacity:1;transform:none}
}

/* Real screenshots dropped into the case-study card frames */
.friday-lp .frame{position:relative}
.friday-lp .frame .shot{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top}

/* Case-studies carousel — full-bleed horizontal scroll-snap track.
   Mobile shows ~1.2 slides (peek to the right); desktop shows 3. */
.friday-lp .cs-carousel{width:100vw;margin-left:calc(50% - 50vw);margin-top:30px}
.friday-lp .cs-track{display:flex;gap:16px;overflow-x:auto;position:relative;scroll-snap-type:x mandatory;scroll-padding-left:var(--pad);padding:6px var(--pad) 14px;scrollbar-width:none;-ms-overflow-style:none}
.friday-lp .cs-track::-webkit-scrollbar{display:none}
.friday-lp .cs-slide{flex:0 0 82%;scroll-snap-align:start;display:flex;flex-direction:column;align-items:center;gap:14px}
.friday-lp .cs-pf{width:100%;max-width:212px;border:1px solid var(--line2);background:#0F0E0D;padding:6px 6px 0;box-shadow:0 20px 44px rgba(0,0,0,.5)}
.friday-lp .cs-pf .bar{height:32px;background-image:linear-gradient(140deg,#1c83ff,#0066e0)}
.friday-lp .cs-pf .screen{position:relative;overflow:hidden;aspect-ratio:9 / 19;background:var(--deep);border-left:1px solid rgba(255,255,255,.05);border-right:1px solid rgba(255,255,255,.05)}
.friday-lp .cs-pf .screen img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top}
.friday-lp .cs-name{font-family:var(--display);font-size:19px;letter-spacing:-.01em;color:var(--white);text-align:center}
/* Desktop: 3 slides across. Placed after the base carousel rules so it wins the cascade. */
@media (min-width:1024px){
  .friday-lp .cs-slide{flex:0 0 calc((100% - 32px) / 3)}
  .friday-lp .cs-pf{max-width:236px}
  .friday-lp .cs-name{font-size:22px}
}
`,p=[{label:`DriveGuard`,src:`/cs/Driveguard/02.png`},{label:`ArcViva`,src:`/cs/Arcviva/splash screen.png`},{label:`BeyWorld`,src:`/cs/beyworld/Home.jpg`},{label:`Coachd`,src:`/cs/Coached/Home List View.png`},{label:`CurbCream`,src:`/cs/Curbcream/03-Home.png`},{label:`Addiction World`,src:`/cs/Addictionworld app/Home.png`},{label:`MVP Editz`,src:`/cs/MVP editz/1.jpg`},{label:`Gas on the Go`,src:`/cs/Gas on the GO/Home.png`},{label:`LiveMuse`,src:`/cs/Livemuse/Home - Live Stream.png`},{label:`Memorial`,src:`/cs/Memor Gravefinder & Memorial/Direction-4.png`},{label:`Niroo`,src:`/cs/Niroo/Home.png`},{label:`SiteIQ`,src:`/cs/SiteIQ/Home.png`},{label:`TCMS`,src:`/cs/TCMS/Splash.jpg`},{label:`Yum Runner`,src:`/cs/Yumrunner/02-Splash.png`}];function m(){let e=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let t=e.current;if(!t)return;let n=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,r=!1,i=0,a=()=>{let e=t.children;return e.length<2?e[0]?e[0].getBoundingClientRect().width:0:e[1].offsetLeft-e[0].offsetLeft},o=()=>{let e=a();if(!e)return 1;let n=t.clientWidth-2*parseFloat(getComputedStyle(t).paddingLeft||0);return Math.max(1,Math.round((n+16)/e))},s=e=>{i=e,t.scrollTo({left:Math.round(e*a()),behavior:n?`auto`:`smooth`})},c=setInterval(()=>{if(r)return;let e=Math.max(0,t.children.length-o());s(i>=e?0:i+1)},3e3),l=()=>{r=!0},u=()=>{r=!1},d=()=>{r=!0},f=()=>{setTimeout(()=>{r=!1},4e3)},p,m=()=>{clearTimeout(p),p=setTimeout(()=>{let e=a();e&&(i=Math.round(t.scrollLeft/e))},140)};return t.addEventListener(`mouseenter`,l),t.addEventListener(`mouseleave`,u),t.addEventListener(`touchstart`,d,{passive:!0}),t.addEventListener(`touchend`,f,{passive:!0}),t.addEventListener(`scroll`,m,{passive:!0}),()=>{clearInterval(c),t.removeEventListener(`mouseenter`,l),t.removeEventListener(`mouseleave`,u),t.removeEventListener(`touchstart`,d),t.removeEventListener(`touchend`,f),t.removeEventListener(`scroll`,m)}},[]),(0,a.jsx)(`div`,{className:`cs-carousel`,children:(0,a.jsx)(`div`,{className:`cs-track`,ref:e,children:p.map(e=>(0,a.jsxs)(`div`,{className:`cs-slide`,children:[(0,a.jsxs)(`div`,{className:`cs-pf`,children:[(0,a.jsx)(`div`,{className:`bar`}),(0,a.jsx)(`div`,{className:`screen`,children:(0,a.jsx)(`img`,{src:encodeURI(e.src),alt:`${e.label} app screen`,loading:`lazy`})})]}),(0,a.jsx)(`div`,{className:`cs-name`,children:e.label})]},e.label))})})}function h(){let e=(0,i.useRef)(null);return(0,i.useEffect)(()=>{document.body.classList.add(`friday-active`);let t=e.current,n=e=>t.querySelector(`#`+e),r=[{q:`What are you building?`,key:`build`,opts:[`Consumer app`,`Business or internal tool`,`Marketplace, two-sided`,`Something else`]},{q:`How ready is it?`,key:`ready`,opts:[`I have designs and a spec`,`I have a clear idea, no designs`,`Still shaping the idea`]},{q:`When do you want it live?`,key:`when`,opts:[`Next week`,`This month`,`Next quarter`,`No fixed date`]},{q:`Budget confirmed at $15,000 or above?`,key:`budget`,opts:[`Yes, approved`,`Yes, but I need to see scope first`,`No, below that`]},{q:`Where do we send your build plan?`,key:null,opts:null}],i=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,a=0,l={},u=!1,d=!1,f=n(`stage`),p=n(`q`),m=n(`opts`),h=n(`fields`),g=n(`back`),_=n(`step-n`),v=n(`bars`).children,y=n(`form`),b={},x=new URLSearchParams(location.search);[`utm_source`,`utm_medium`,`utm_campaign`,`utm_content`,`utm_term`].forEach(e=>{b[e]=x.get(e)||``});function S(){let e=r[a];p.textContent=e.q,_.textContent=a+1;for(let e=0;e<v.length;e++)v[e].className=e<=a?`on`:``;g.disabled=a===0,m.innerHTML=``,e.opts?(h.classList.add(`hide`),m.classList.remove(`hide`),e.opts.forEach(t=>{let n=document.createElement(`button`);n.type=`button`,n.className=`opt`,n.innerHTML=`<span></span><em>→</em>`,n.firstChild.textContent=t,n.addEventListener(`click`,()=>T(e.key,t)),m.appendChild(n)})):(m.classList.add(`hide`),h.classList.remove(`hide`))}function C(){let e=f.getBoundingClientRect();if(e.top<0||e.top>window.innerHeight*.4){let t=e.top+window.pageYOffset-24;window.scrollTo({top:t,behavior:i?`auto`:`smooth`})}}function w(e){if(a=Math.max(0,Math.min(r.length-1,e)),i){S(),C();return}f.classList.add(`fade`),setTimeout(()=>{S(),f.classList.remove(`fade`),C()},180)}function T(e,t){if(l[e]=t,!u&&window.fbq&&(window.fbq(`track`,`InitiateCheckout`),u=!0),e===`budget`&&(l.budget===`No, below that`||l.ready===`Still shaping the idea`)){k(`soft`);return}w(a+1)}function E(e){let t=n(e);return t?t.value.trim():``}function D(e){return{route:e,page:`/friday`,submitted_at:new Date().toISOString(),build:l.build||``,ready:l.ready||``,when:l.when||``,budget:l.budget||``,name:E(`f-name`),email:E(`f-email`),phone:E(`f-phone`),company:E(`f-co`),idea:E(`f-idea`),utm_source:b.utm_source,utm_medium:b.utm_medium,utm_campaign:b.utm_campaign,utm_content:b.utm_content,utm_term:b.utm_term,referrer:document.referrer||``}}let O=0;function k(e){if(d)return;d=!0;let t=e===`soft`?c:s,r=JSON.stringify(D(e));if(e===`soft`){try{fetch(o,{method:`POST`,keepalive:!0,headers:{"Content-Type":`application/json`},body:r})}catch{}window.location.href=t;return}let i=n(`submit`),a=n(`e-submit`),l=i?i.textContent:``;i&&(i.disabled=!0,i.textContent=`Sending…`),a&&(a.style.display=`none`);let u=`AbortController`in window?new AbortController:null,f=setTimeout(()=>{u&&u.abort()},6e3);function p(){if(O+=1,O>=2){window.location.href=t;return}d=!1,i&&(i.disabled=!1,i.textContent=l),a&&(a.style.display=`block`)}try{fetch(o,{method:`POST`,keepalive:!0,headers:{"Content-Type":`application/json`},body:r,signal:u?u.signal:void 0}).then(e=>{clearTimeout(f),e.ok?window.location.href=t:p()},()=>{clearTimeout(f),p()})}catch{clearTimeout(f),p()}}let A=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;function j(e,t){let r=n(`w-`+e),i=n(`f-`+e);return t?(r.classList.remove(`f-bad`),i.removeAttribute(`aria-invalid`)):(r.classList.add(`f-bad`),i.setAttribute(`aria-invalid`,`true`)),t}let M=[];[`name`,`email`,`phone`].forEach(e=>{let t=n(`f-`+e),r=()=>{let t=n(`w-`+e);t.classList.contains(`f-bad`)&&t.classList.remove(`f-bad`)};t.addEventListener(`input`,r),M.push(()=>t.removeEventListener(`input`,r))});function N(e){e.preventDefault();let t=j(`name`,E(`f-name`).length>1),n=j(`email`,A.test(E(`f-email`))),r=j(`phone`,E(`f-phone`).replace(/[^0-9]/g,``).length>=7);if(!t||!n||!r){let e=h.querySelector(`.f-bad input`);e&&e.focus();return}window.fbq&&window.fbq(`track`,`Lead`),k(`qualified`)}h.addEventListener(`submit`,N);function P(){a>0&&w(a-1)}g.addEventListener(`click`,P);let F=n(`faq`);function I(e){let t=e.target.closest(`.faq-q`);if(!t)return;let n=t.parentNode.classList.toggle(`open`);t.setAttribute(`aria-expanded`,n?`true`:`false`)}F.addEventListener(`click`,I);let L=n(`tl`),R=L.querySelectorAll(`.day`),z=[];if(!i&&`IntersectionObserver`in window){L.classList.add(`reveal`);let e=new IntersectionObserver(t=>{t.forEach(t=>{if(t.isIntersecting){let n=Array.prototype.indexOf.call(R,t.target);setTimeout(()=>t.target.classList.add(`in`),n*90),e.unobserve(t.target)}})},{threshold:.35,rootMargin:`0px 0px -8% 0px`});R.forEach(t=>e.observe(t)),z.push(e)}let B=n(`sticky`),V=!1,H=!1;function U(){B.classList.toggle(`show`,V&&!H)}if(`IntersectionObserver`in window){let e=new IntersectionObserver(e=>{V=!e[0].isIntersecting,U()},{threshold:0});e.observe(t.querySelector(`.hero`));let n=new IntersectionObserver(e=>{H=e[0].isIntersecting,U()},{threshold:.08});n.observe(y),z.push(e,n)}let W=!1;function G(){if(W)return;let e=document.documentElement;(window.scrollY+window.innerHeight)/e.scrollHeight>.5&&(W=!0,window.fbq&&window.fbq(`track`,`ViewContent`))}return window.addEventListener(`scroll`,G,{passive:!0}),S(),()=>{document.body.classList.remove(`friday-active`),h.removeEventListener(`submit`,N),g.removeEventListener(`click`,P),F.removeEventListener(`click`,I),window.removeEventListener(`scroll`,G),M.forEach(e=>e()),z.forEach(e=>e.disconnect())}},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{title:`The Friday Build — DigiWorks AI`,description:`Custom native iOS and Android. Real backend, real API, real admin panel. Deployment ready. You own the source code. From $15,000.`,path:`/friday`,noindex:!0}),(0,a.jsx)(`style`,{dangerouslySetInnerHTML:{__html:f}}),(0,a.jsxs)(`div`,{className:`friday-lp`,ref:e,children:[(0,a.jsxs)(`div`,{className:`wrap`,children:[(0,a.jsxs)(`header`,{children:[(0,a.jsx)(`img`,{src:`/logo-white.png`,alt:`DigiWorks AI`,width:`110`,height:`19`}),(0,a.jsxs)(`div`,{className:`fr-head-cta`,children:[(0,a.jsxs)(`a`,{className:`fr-phone`,href:`tel:+17373945488`,"aria-label":`Call us at +1 737 394 5488`,children:[(0,a.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,strokeWidth:`2`,stroke:`currentColor`,"aria-hidden":`true`,children:(0,a.jsx)(`path`,{d:`M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z`})}),`+1 737 394 5488`]}),(0,a.jsx)(`a`,{className:`fr-apply`,href:`#form`,children:`Apply for a Build Slot`})]})]}),(0,a.jsxs)(`section`,{className:`hero`,children:[(0,a.jsxs)(`div`,{children:[(0,a.jsxs)(`h1`,{children:[(0,a.jsx)(`span`,{className:`grad`,children:`Next Friday,`}),(0,a.jsx)(`span`,{children:`Your App Exists.`})]}),(0,a.jsx)(`p`,{className:`forwho`,children:`You have a launch date. We build the app that makes it real.`}),(0,a.jsx)(`p`,{className:`lead`,children:`Custom native iOS and Android. Real backend, real API, real admin panel. Deployment ready. You own the source code.`}),(0,a.jsx)(`p`,{className:`callout`,children:`Not a mockup. Not a clickable demo. An app you install on your phone, sign into, and use, with your data saving to a live server you own.`}),(0,a.jsx)(`p`,{className:`price-line`,children:`From $15,000. 50% to start. Takes 90 seconds.`}),(0,a.jsx)(`div`,{className:`hero-cta`,children:(0,a.jsx)(`a`,{className:`btn`,href:`#form`,children:`Apply for a Build Slot`})})]}),(0,a.jsxs)(`div`,{className:`phone-stack`,children:[(0,a.jsxs)(`div`,{className:`pf pf-back`,children:[(0,a.jsx)(`div`,{className:`bar`}),(0,a.jsx)(`div`,{className:`screen`,children:(0,a.jsx)(`img`,{src:`/cs/Livemuse/Streams.png`,alt:`LiveMuse app screen`})})]}),(0,a.jsxs)(`div`,{className:`pf pf-mid`,children:[(0,a.jsx)(`div`,{className:`bar`}),(0,a.jsx)(`div`,{className:`screen`,children:(0,a.jsx)(`img`,{src:`/cs/Arcviva/Leaderboard.png`,alt:`ArcViva app screen`})})]}),(0,a.jsxs)(`div`,{className:`pf pf-front`,children:[(0,a.jsx)(`div`,{className:`bar`}),(0,a.jsx)(`div`,{className:`screen`,children:(0,a.jsx)(`img`,{src:`/cs/Driveguard/01.png`,alt:`DriveGuard app screen`})})]})]})]}),(0,a.jsxs)(`div`,{className:`trust`,children:[(0,a.jsx)(`span`,{children:`Austin, TX`}),(0,a.jsx)(`s`,{children:`·`}),(0,a.jsx)(`span`,{children:`4.9 on Trustpilot, Bark and Clutch`}),(0,a.jsx)(`s`,{children:`·`}),(0,a.jsx)(`span`,{children:`GDPR`}),(0,a.jsx)(`s`,{children:`·`}),(0,a.jsx)(`span`,{children:`ISO 27001`}),(0,a.jsx)(`s`,{children:`·`}),(0,a.jsx)(`span`,{children:`HIPAA-aligned`})]}),(0,a.jsxs)(`div`,{className:`stats`,children:[(0,a.jsxs)(`div`,{className:`stat`,children:[(0,a.jsx)(`b`,{children:`150+`}),(0,a.jsx)(`span`,{children:`Deployments shipped`})]}),(0,a.jsxs)(`div`,{className:`stat`,children:[(0,a.jsx)(`b`,{children:`5`}),(0,a.jsx)(`span`,{children:`Working days from signed brief`})]}),(0,a.jsxs)(`div`,{className:`stat`,children:[(0,a.jsx)(`b`,{children:`100%`}),(0,a.jsx)(`span`,{children:`Code and accounts in your name`})]})]}),(0,a.jsxs)(`section`,{className:`sec sec--raised`,children:[(0,a.jsx)(`div`,{className:`tick`}),(0,a.jsx)(`h2`,{children:`What the same app costs elsewhere.`}),(0,a.jsxs)(`div`,{className:`cmp`,children:[(0,a.jsxs)(`div`,{className:`cmp-col`,children:[(0,a.jsx)(`h3`,{children:`Traditional agency`}),(0,a.jsxs)(`dl`,{children:[(0,a.jsxs)(`div`,{className:`cmp-row`,children:[(0,a.jsx)(`dt`,{children:`Price`}),(0,a.jsx)(`dd`,{children:`$60,000 to $150,000`})]}),(0,a.jsxs)(`div`,{className:`cmp-row`,children:[(0,a.jsx)(`dt`,{children:`Timeline`}),(0,a.jsx)(`dd`,{children:`Four to nine months, discovery first`})]}),(0,a.jsxs)(`div`,{className:`cmp-row`,children:[(0,a.jsx)(`dt`,{children:`Code`}),(0,a.jsx)(`dd`,{children:`Often held until the final invoice clears`})]}),(0,a.jsxs)(`div`,{className:`cmp-row`,children:[(0,a.jsx)(`dt`,{children:`Predictability`}),(0,a.jsx)(`dd`,{children:`Scope grows, the price follows`})]})]})]}),(0,a.jsxs)(`div`,{className:`cmp-col`,children:[(0,a.jsx)(`h3`,{children:`Marketplace freelancers`}),(0,a.jsxs)(`dl`,{children:[(0,a.jsxs)(`div`,{className:`cmp-row`,children:[(0,a.jsx)(`dt`,{children:`Price`}),(0,a.jsx)(`dd`,{children:`$4,000 to $12,000`})]}),(0,a.jsxs)(`div`,{className:`cmp-row`,children:[(0,a.jsx)(`dt`,{children:`Timeline`}),(0,a.jsx)(`dd`,{children:`Eight weeks quoted, rarely eight weeks`})]}),(0,a.jsxs)(`div`,{className:`cmp-row`,children:[(0,a.jsx)(`dt`,{children:`Code`}),(0,a.jsx)(`dd`,{children:`One contractor's laptop, undocumented and hard to hand on`})]}),(0,a.jsxs)(`div`,{className:`cmp-row`,children:[(0,a.jsx)(`dt`,{children:`Predictability`}),(0,a.jsx)(`dd`,{children:`One person, no cover when they go quiet`})]})]})]}),(0,a.jsxs)(`div`,{className:`cmp-col is-us`,children:[(0,a.jsx)(`h3`,{children:`The Friday Build`}),(0,a.jsxs)(`dl`,{children:[(0,a.jsxs)(`div`,{className:`cmp-row`,children:[(0,a.jsx)(`dt`,{children:`Price`}),(0,a.jsx)(`dd`,{children:`$15,000 fixed`})]}),(0,a.jsxs)(`div`,{className:`cmp-row`,children:[(0,a.jsx)(`dt`,{children:`Timeline`}),(0,a.jsx)(`dd`,{children:`Five working days, date set on the call`})]}),(0,a.jsxs)(`div`,{className:`cmp-row`,children:[(0,a.jsx)(`dt`,{children:`Code`}),(0,a.jsx)(`dd`,{children:`Yours from day one, repo and accounts in your name`})]}),(0,a.jsxs)(`div`,{className:`cmp-row`,children:[(0,a.jsx)(`dt`,{children:`Predictability`}),(0,a.jsx)(`dd`,{children:`Fixed scope, signed before the clock starts`})]})]})]})]}),(0,a.jsx)(`p`,{className:`cmp-note`,children:`$15,000 only looks expensive on its own. Next to a six month agency engagement it is a quarter of the price and a fortieth of the wait. Next to the cheapest quote you will get, it is the difference between a build you can raise on and a build you have to explain.`})]}),(0,a.jsxs)(`section`,{className:`sec`,children:[(0,a.jsx)(`div`,{className:`tick`}),(0,a.jsx)(`h2`,{style:{marginBottom:`34px`,maxWidth:`820px`},children:`Here is exactly what you get on Friday.`}),(0,a.jsxs)(`div`,{className:`two`,children:[(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`div`,{className:`eyebrow listhead`,children:`You get:`}),(0,a.jsxs)(`div`,{className:`row yes`,children:[(0,a.jsx)(`i`,{children:`✓`}),(0,a.jsx)(`span`,{children:`Native iOS app on TestFlight, native Android on Play internal testing`})]}),(0,a.jsxs)(`div`,{className:`row yes`,children:[(0,a.jsx)(`i`,{children:`✓`}),(0,a.jsx)(`span`,{children:`Every core screen built and working, not placeholder`})]}),(0,a.jsxs)(`div`,{className:`row yes`,children:[(0,a.jsx)(`i`,{children:`✓`}),(0,a.jsx)(`span`,{children:`Live backend with your database, hosted on AWS, Azure or GCP`})]}),(0,a.jsxs)(`div`,{className:`row yes`,children:[(0,a.jsx)(`i`,{children:`✓`}),(0,a.jsx)(`span`,{children:`Working API, documented`})]}),(0,a.jsxs)(`div`,{className:`row yes`,children:[(0,a.jsx)(`i`,{children:`✓`}),(0,a.jsx)(`span`,{children:`Admin panel where you manage users and content`})]}),(0,a.jsxs)(`div`,{className:`row yes`,children:[(0,a.jsx)(`i`,{children:`✓`}),(0,a.jsx)(`span`,{children:`User signup, login, and profiles`})]}),(0,a.jsxs)(`div`,{className:`row yes`,children:[(0,a.jsx)(`i`,{children:`✓`}),(0,a.jsx)(`span`,{children:`Push notifications configured`})]}),(0,a.jsxs)(`div`,{className:`row yes`,children:[(0,a.jsx)(`i`,{children:`✓`}),(0,a.jsx)(`span`,{children:`The full source code in your GitHub, and every account in your name`})]}),(0,a.jsxs)(`div`,{className:`row yes`,children:[(0,a.jsx)(`i`,{children:`✓`}),(0,a.jsx)(`span`,{children:`Deployment ready for store submission`})]})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`div`,{className:`eyebrow listhead`,children:`You do not get:`}),(0,a.jsxs)(`div`,{className:`row no`,children:[(0,a.jsx)(`i`,{children:`✕`}),(0,a.jsx)(`span`,{children:`A finished company. This is version one, built to be used and tested by real people`})]}),(0,a.jsxs)(`div`,{className:`row no`,children:[(0,a.jsx)(`i`,{children:`✕`}),(0,a.jsx)(`span`,{children:`Store approval by Friday. Apple review takes its own time, we submit and manage it`})]}),(0,a.jsxs)(`div`,{className:`row no`,children:[(0,a.jsx)(`i`,{children:`✕`}),(0,a.jsx)(`span`,{children:`Unlimited scope. See what fits below`})]})]})]})]}),(0,a.jsxs)(`section`,{className:`sec`,children:[(0,a.jsx)(`div`,{className:`tick`}),(0,a.jsxs)(`div`,{className:`head-split`,children:[(0,a.jsx)(`h2`,{style:{marginBottom:`20px`},children:`One week is not a shortcut. It is a system.`}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{className:`body`,children:`Most agencies start every project from an empty folder. We do not. We start from a production foundation we have built and shipped many times over: authentication, payments, notifications, admin, hosting, CI, all already engineered and battle tested. Your week is spent building what makes your app yours, not rebuilding what every app already needs.`}),(0,a.jsx)(`p`,{className:`body`,children:`Then we run it as a war room, not a queue. One dedicated squad, one project, five days, no context switching.`})]})]}),(0,a.jsxs)(`div`,{className:`tl`,id:`tl`,children:[(0,a.jsx)(`div`,{className:`day`,children:(0,a.jsxs)(`div`,{children:[(0,a.jsxs)(`div`,{className:`day-top`,children:[(0,a.jsx)(`span`,{className:`day-name`,children:`Monday`}),(0,a.jsx)(`span`,{className:`day-idx`,children:`01`})]}),(0,a.jsx)(`p`,{children:`Kickoff call, scope locked, screen list signed off`}),(0,a.jsxs)(`div`,{className:`see`,children:[(0,a.jsx)(`span`,{children:`→`}),(0,a.jsx)(`span`,{children:`Your screen inventory and build plan`})]})]})}),(0,a.jsx)(`div`,{className:`day`,children:(0,a.jsxs)(`div`,{children:[(0,a.jsxs)(`div`,{className:`day-top`,children:[(0,a.jsx)(`span`,{className:`day-name`,children:`Tuesday`}),(0,a.jsx)(`span`,{className:`day-idx`,children:`02`})]}),(0,a.jsx)(`p`,{children:`Design system and every screen designed`}),(0,a.jsxs)(`div`,{className:`see`,children:[(0,a.jsx)(`span`,{children:`→`}),(0,a.jsx)(`span`,{children:`Full visual design of your app`})]})]})}),(0,a.jsx)(`div`,{className:`day`,children:(0,a.jsxs)(`div`,{children:[(0,a.jsxs)(`div`,{className:`day-top`,children:[(0,a.jsx)(`span`,{className:`day-name`,children:`Wednesday`}),(0,a.jsx)(`span`,{className:`day-idx`,children:`03`})]}),(0,a.jsx)(`p`,{children:`Backend, database and API built and live`}),(0,a.jsxs)(`div`,{className:`see`,children:[(0,a.jsx)(`span`,{children:`→`}),(0,a.jsx)(`span`,{children:`Your server running, API live`})]})]})}),(0,a.jsx)(`div`,{className:`day`,children:(0,a.jsxs)(`div`,{children:[(0,a.jsxs)(`div`,{className:`day-top`,children:[(0,a.jsx)(`span`,{className:`day-name`,children:`Thursday`}),(0,a.jsx)(`span`,{className:`day-idx`,children:`04`})]}),(0,a.jsx)(`p`,{children:`Native iOS and Android built against the live API`}),(0,a.jsxs)(`div`,{className:`see`,children:[(0,a.jsx)(`span`,{children:`→`}),(0,a.jsx)(`span`,{children:`First build on your phone`})]})]})}),(0,a.jsx)(`div`,{className:`day`,children:(0,a.jsxs)(`div`,{children:[(0,a.jsxs)(`div`,{className:`day-top`,children:[(0,a.jsx)(`span`,{className:`day-name`,children:`Friday`}),(0,a.jsx)(`span`,{className:`day-idx`,children:`05`})]}),(0,a.jsx)(`p`,{children:`QA, admin panel handover, source code transfer`}),(0,a.jsxs)(`div`,{className:`see`,children:[(0,a.jsx)(`span`,{children:`→`}),(0,a.jsx)(`span`,{children:`Your app, your repo, your accounts`})]})]})})]}),(0,a.jsx)(`p`,{className:`body after-tl`,style:{marginTop:`16px`},children:`The clock starts Monday, once your brief is signed off on the qualification call. That call is what makes Friday possible.`})]}),(0,a.jsx)(`section`,{className:`sec sec--deep`,children:(0,a.jsxs)(`div`,{className:`gtee`,children:[(0,a.jsx)(`div`,{className:`tick`}),(0,a.jsx)(`div`,{className:`eyebrow`,style:{marginBottom:`18px`},children:`The Friday Guarantee`}),(0,a.jsx)(`p`,{className:`lead`,children:`If it is not in your hands by Friday, you do not pay the remaining 50%.`}),(0,a.jsxs)(`dl`,{children:[(0,a.jsxs)(`div`,{className:`clause`,children:[(0,a.jsx)(`dt`,{children:`The date`}),(0,a.jsx)(`dd`,{children:`Delivery is due by 6pm Central on the Friday of your build week, five working days after the brief is signed. The date is written into the SOW before you pay anything.`})]}),(0,a.jsxs)(`div`,{className:`clause`,children:[(0,a.jsx)(`dt`,{children:`What counts as delivered`}),(0,a.jsx)(`dd`,{children:`A native build installed on your device, running against your live backend, with the admin panel handed over and the source code in your repository.`})]}),(0,a.jsxs)(`div`,{className:`clause`,children:[(0,a.jsx)(`dt`,{children:`If we miss it`}),(0,a.jsx)(`dd`,{children:`The second payment is cancelled. We do not invoice it, and we finish the build at our own cost.`})]}),(0,a.jsxs)(`div`,{className:`clause`,children:[(0,a.jsx)(`dt`,{children:`Your deposit`}),(0,a.jsx)(`dd`,{children:`[WHAT HAPPENS TO THE 50% DEPOSIT IF YOU MISS FRIDAY]`})]}),(0,a.jsxs)(`div`,{className:`clause`,children:[(0,a.jsx)(`dt`,{children:`What transfers either way`}),(0,a.jsx)(`dd`,{children:`The source code, the repository and every cloud and store account stay in your name whether we hit the date or not. Nothing is held back as leverage.`})]}),(0,a.jsxs)(`div`,{className:`clause`,children:[(0,a.jsx)(`dt`,{children:`What does not count as a miss`}),(0,a.jsx)(`dd`,{children:`Scope added after Monday, time spent waiting on content, credentials or approvals from your side, and App Store review, which runs on Apple's clock. We name these on the call so there is no argument on Friday.`})]})]})]})}),(0,a.jsxs)(`section`,{className:`sec`,children:[(0,a.jsx)(`div`,{className:`tick`}),(0,a.jsx)(`h2`,{style:{marginBottom:`30px`},children:`Apps we have already shipped.`}),(0,a.jsx)(m,{}),(0,a.jsx)(`div`,{className:`center-cta`,children:(0,a.jsx)(`a`,{className:`btn`,href:`#form`,children:`See If My Project Qualifies`})})]}),(0,a.jsxs)(`section`,{className:`sec sec--raised`,children:[(0,a.jsx)(`div`,{className:`tick`}),(0,a.jsx)(`h2`,{style:{marginBottom:`30px`},children:`What clients say.`}),(0,a.jsxs)(`div`,{className:`tcards`,children:[(0,a.jsxs)(`article`,{className:`tcard`,children:[(0,a.jsxs)(`div`,{className:`tcard-top`,children:[(0,a.jsx)(`span`,{className:`stars`,children:`★★★★★`}),(0,a.jsx)(`span`,{className:`badge`,children:`via Bark`})]}),(0,a.jsx)(`div`,{className:`quote-slot`,children:(0,a.jsx)(`span`,{children:`Review 01 · Bark`})}),(0,a.jsx)(`div`,{className:`tname`,children:`Jason Knapp`})]}),(0,a.jsxs)(`article`,{className:`tcard`,children:[(0,a.jsxs)(`div`,{className:`tcard-top`,children:[(0,a.jsx)(`span`,{className:`stars`,children:`★★★★★`}),(0,a.jsx)(`span`,{className:`badge`,children:`via Trustpilot`})]}),(0,a.jsx)(`div`,{className:`quote-slot`,children:(0,a.jsx)(`span`,{children:`Review 02 · Trustpilot`})}),(0,a.jsx)(`div`,{className:`tname`,children:`Travers Maheu`})]}),(0,a.jsxs)(`article`,{className:`tcard`,children:[(0,a.jsxs)(`div`,{className:`tcard-top`,children:[(0,a.jsx)(`span`,{className:`stars`,children:`★★★★★`}),(0,a.jsx)(`span`,{className:`badge`,children:`via Bark`})]}),(0,a.jsx)(`div`,{className:`quote-slot`,children:(0,a.jsx)(`span`,{children:`Review 03 · Bark`})}),(0,a.jsx)(`div`,{className:`tname`,children:`Mark Shkrelj`})]})]})]}),(0,a.jsxs)(`section`,{className:`sec`,children:[(0,a.jsx)(`div`,{className:`tick`}),(0,a.jsx)(`h2`,{style:{marginBottom:`34px`},children:`This is not for everyone.`}),(0,a.jsxs)(`div`,{className:`two`,children:[(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`div`,{className:`eyebrow listhead`,children:`A good fit if:`}),(0,a.jsxs)(`div`,{className:`row yes`,children:[(0,a.jsx)(`i`,{children:`✓`}),(0,a.jsx)(`span`,{children:`You know what you want built and can describe it in a call`})]}),(0,a.jsxs)(`div`,{className:`row yes`,children:[(0,a.jsx)(`i`,{children:`✓`}),(0,a.jsx)(`span`,{children:`Your budget is confirmed at $15,000 or above`})]}),(0,a.jsxs)(`div`,{className:`row yes`,children:[(0,a.jsx)(`i`,{children:`✓`}),(0,a.jsx)(`span`,{children:`You want to launch and learn, not perfect for a year`})]}),(0,a.jsxs)(`div`,{className:`row yes`,children:[(0,a.jsx)(`i`,{children:`✓`}),(0,a.jsx)(`span`,{children:`You want to own the code and the accounts`})]}),(0,a.jsxs)(`div`,{className:`row yes`,children:[(0,a.jsx)(`i`,{children:`✓`}),(0,a.jsx)(`span`,{children:`One product, one clear user, a defined set of features`})]})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`div`,{className:`eyebrow listhead`,children:`Not a fit if:`}),(0,a.jsxs)(`div`,{className:`row no`,children:[(0,a.jsx)(`i`,{children:`✕`}),(0,a.jsx)(`span`,{children:`You are still deciding what the idea is`})]}),(0,a.jsxs)(`div`,{className:`row no`,children:[(0,a.jsx)(`i`,{children:`✕`}),(0,a.jsx)(`span`,{children:`You need HIPAA, PCI or SOC 2 certified from day one`})]}),(0,a.jsxs)(`div`,{className:`row no`,children:[(0,a.jsx)(`i`,{children:`✕`}),(0,a.jsx)(`span`,{children:`You want a full marketplace with payments, escrow and disputes in week one`})]}),(0,a.jsxs)(`div`,{className:`row no`,children:[(0,a.jsx)(`i`,{children:`✕`}),(0,a.jsx)(`span`,{children:`You need it built for under $15,000`})]}),(0,a.jsxs)(`div`,{className:`row no`,children:[(0,a.jsx)(`i`,{children:`✕`}),(0,a.jsx)(`span`,{children:`You need a partner to work for equity`})]})]})]}),(0,a.jsxs)(`div`,{className:`split-row`,children:[(0,a.jsx)(`p`,{className:`pull`,children:`We say no to most enquiries. That is why Friday works.`}),(0,a.jsx)(`a`,{className:`btn`,href:`#form`,children:`See If My Project Qualifies`})]})]}),(0,a.jsx)(`section`,{className:`sec`,children:(0,a.jsxs)(`div`,{className:`price`,children:[(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`div`,{className:`tick`}),(0,a.jsx)(`h2`,{style:{marginBottom:`30px`},children:`$15,000. Half to start.`}),(0,a.jsx)(`div`,{className:`eyebrow`,style:{marginBottom:`12px`},children:`What moves the price up`}),(0,a.jsx)(`p`,{className:`body`,style:{maxWidth:`520px`},children:`Payments and payouts, live chat or video, complex integrations with your existing systems, more than one user type with a separate app each, or a regulated industry build. We tell you on the call, before you pay anything.`}),(0,a.jsx)(`a`,{className:`btn`,href:`#form`,style:{marginTop:`32px`},children:`See If My Project Qualifies`})]}),(0,a.jsxs)(`dl`,{className:`terms`,children:[(0,a.jsxs)(`div`,{className:`term`,children:[(0,a.jsx)(`dt`,{children:`Starting price`}),(0,a.jsx)(`dd`,{children:`$15,000`})]}),(0,a.jsxs)(`div`,{className:`term`,children:[(0,a.jsx)(`dt`,{children:`Payment`}),(0,a.jsx)(`dd`,{children:`50% to start, 50% on Friday delivery`})]}),(0,a.jsxs)(`div`,{className:`term`,children:[(0,a.jsx)(`dt`,{children:`Timeline`}),(0,a.jsx)(`dd`,{children:`5 working days from signed brief`})]}),(0,a.jsxs)(`div`,{className:`term`,children:[(0,a.jsx)(`dt`,{children:`Platforms`}),(0,a.jsx)(`dd`,{children:`Native iOS and Android`})]}),(0,a.jsxs)(`div`,{className:`term`,children:[(0,a.jsx)(`dt`,{children:`You own`}),(0,a.jsx)(`dd`,{children:`Source code, repo, database, cloud accounts, App Store and Play accounts`})]}),(0,a.jsxs)(`div`,{className:`term`,children:[(0,a.jsx)(`dt`,{children:`Contract`}),(0,a.jsx)(`dd`,{children:`Fixed scope SOW, signed before the clock starts`})]})]})]})}),(0,a.jsx)(`section`,{className:`sec`,id:`form`,children:(0,a.jsxs)(`div`,{className:`inner`,children:[(0,a.jsxs)(`div`,{className:`prog-head`,children:[(0,a.jsxs)(`span`,{className:`eyebrow`,children:[`Step `,(0,a.jsx)(`span`,{id:`step-n`,children:`1`}),` of 5`]}),(0,a.jsx)(`span`,{className:`meta`,children:`90 seconds`})]}),(0,a.jsxs)(`div`,{className:`bars`,id:`bars`,children:[(0,a.jsx)(`i`,{className:`on`}),(0,a.jsx)(`i`,{}),(0,a.jsx)(`i`,{}),(0,a.jsx)(`i`,{}),(0,a.jsx)(`i`,{})]}),(0,a.jsxs)(`div`,{id:`stage`,children:[(0,a.jsx)(`h2`,{id:`q`,children:`What are you building?`}),(0,a.jsx)(`div`,{className:`opts`,id:`opts`}),(0,a.jsxs)(`form`,{className:`fields hide`,id:`fields`,noValidate:!0,children:[(0,a.jsxs)(`div`,{id:`w-name`,children:[(0,a.jsx)(`label`,{htmlFor:`f-name`,children:`Name`}),(0,a.jsx)(`input`,{id:`f-name`,type:`text`,placeholder:`Full name`,autoComplete:`name`}),(0,a.jsx)(`p`,{className:`err`,id:`e-name`,children:`Enter your name`})]}),(0,a.jsxs)(`div`,{id:`w-email`,children:[(0,a.jsx)(`label`,{htmlFor:`f-email`,children:`Work email`}),(0,a.jsx)(`input`,{id:`f-email`,type:`email`,placeholder:`you@company.com`,autoComplete:`email`,inputMode:`email`}),(0,a.jsx)(`p`,{className:`err`,id:`e-email`,children:`Enter a valid work email`})]}),(0,a.jsxs)(`div`,{id:`w-phone`,children:[(0,a.jsx)(`label`,{htmlFor:`f-phone`,children:`Phone or WhatsApp`}),(0,a.jsx)(`input`,{id:`f-phone`,type:`tel`,placeholder:`+1`,autoComplete:`tel`,inputMode:`tel`}),(0,a.jsx)(`p`,{className:`err`,id:`e-phone`,children:`Enter a phone or WhatsApp number`})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`label`,{htmlFor:`f-co`,children:`Company`}),(0,a.jsx)(`input`,{id:`f-co`,type:`text`,placeholder:`Company name`,autoComplete:`organization`})]}),(0,a.jsxs)(`div`,{className:`f-wide`,children:[(0,a.jsx)(`label`,{htmlFor:`f-idea`,children:`One line on what you are building`}),(0,a.jsx)(`input`,{id:`f-idea`,type:`text`,placeholder:`In one sentence`})]}),(0,a.jsxs)(`div`,{className:`submit-row`,children:[(0,a.jsx)(`button`,{className:`btn`,type:`submit`,id:`submit`,style:{marginTop:`10px`},children:`Book My Qualification Call`}),(0,a.jsx)(`p`,{id:`e-submit`,role:`alert`,style:{display:`none`,margin:`10px 0 0`,textAlign:`center`,fontSize:`13px`,color:`#6baeff`},children:`Couldn't send your details — check your connection and tap the button again.`}),(0,a.jsx)(`p`,{className:`meta`,style:{textAlign:`center`,lineHeight:`1.55`},children:`15 minutes. You leave the call with a scope, a price, and a Friday date. No pitch deck.`})]})]})]}),(0,a.jsx)(`button`,{className:`back`,id:`back`,type:`button`,disabled:!0,children:`← Back`})]})}),(0,a.jsx)(`section`,{className:`sec`,children:(0,a.jsxs)(`div`,{className:`faq-wrap`,children:[(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`div`,{className:`tick`}),(0,a.jsx)(`h2`,{style:{marginBottom:`24px`},children:`Questions.`})]}),(0,a.jsxs)(`div`,{className:`faq`,id:`faq`,children:[(0,a.jsxs)(`div`,{className:`faq-item`,children:[(0,a.jsxs)(`button`,{className:`faq-q`,type:`button`,"aria-expanded":`false`,"aria-controls":`a1`,children:[(0,a.jsx)(`span`,{children:`Who actually builds it?`}),(0,a.jsx)(`em`,{children:`+`})]}),(0,a.jsx)(`p`,{className:`faq-a`,id:`a1`,children:`Our own in-house team. No freelancers, no white-labelling to a third party. DigiWorks is headquartered in Austin, Texas, with engineering teams in Karachi, Dubai and Guangzhou, and that spread is exactly why five days is possible. When the US team signs off a screen at the end of the day, the next shift is already at their desks, so your build moves while you sleep. One squad owns your project from Monday to Friday, and your calls stay in your timezone.`})]}),(0,a.jsxs)(`div`,{className:`faq-item`,children:[(0,a.jsxs)(`button`,{className:`faq-q`,type:`button`,"aria-expanded":`false`,"aria-controls":`a2`,children:[(0,a.jsx)(`span`,{children:`Who owns the code?`}),(0,a.jsx)(`em`,{children:`+`})]}),(0,a.jsx)(`p`,{className:`faq-a`,id:`a2`,children:`You do, completely. The repo, the database, the cloud accounts, all in your name from day one. There is no lock-in and no licence fee.`})]}),(0,a.jsxs)(`div`,{className:`faq-item`,children:[(0,a.jsxs)(`button`,{className:`faq-q`,type:`button`,"aria-expanded":`false`,"aria-controls":`a3`,children:[(0,a.jsx)(`span`,{children:`Is this a template?`}),(0,a.jsx)(`em`,{children:`+`})]}),(0,a.jsx)(`p`,{className:`faq-a`,id:`a3`,children:`No. The foundation underneath is reusable, the app on top is built for you. Your screens, your logic, your brand, your data model.`})]}),(0,a.jsxs)(`div`,{className:`faq-item`,children:[(0,a.jsxs)(`button`,{className:`faq-q`,type:`button`,"aria-expanded":`false`,"aria-controls":`a4`,children:[(0,a.jsx)(`span`,{children:`What if it is not done on Friday?`}),(0,a.jsx)(`em`,{children:`+`})]}),(0,a.jsx)(`p`,{className:`faq-a`,id:`a4`,children:`You do not pay the remaining 50%. We cancel the second invoice, finish the build at our own cost, and you keep everything already in your name: the source code, the repository and every cloud and store account. Delivered means a native build installed on your device, running against your live backend, with the admin panel handed over, and that definition is written into the SOW before you pay. Two things sit outside it, and we say so upfront: scope you add after Monday, and App Store review, which runs on Apple's clock. Everything else is our risk, not yours.`})]}),(0,a.jsxs)(`div`,{className:`faq-item`,children:[(0,a.jsxs)(`button`,{className:`faq-q`,type:`button`,"aria-expanded":`false`,"aria-controls":`a5`,children:[(0,a.jsx)(`span`,{children:`What happens after Friday?`}),(0,a.jsx)(`em`,{children:`+`})]}),(0,a.jsx)(`p`,{className:`faq-a`,id:`a5`,children:`Most clients move onto a monthly build retainer for version two. That is optional and quoted separately. You are free to walk away with the code.`})]}),(0,a.jsxs)(`div`,{className:`faq-item`,children:[(0,a.jsxs)(`button`,{className:`faq-q`,type:`button`,"aria-expanded":`false`,"aria-controls":`a6`,children:[(0,a.jsx)(`span`,{children:`Can I change the scope mid-week?`}),(0,a.jsx)(`em`,{children:`+`})]}),(0,a.jsx)(`p`,{className:`faq-a`,id:`a6`,children:`No. Scope is locked Monday, and that lock is what makes Friday real. Changes go into the next sprint.`})]}),(0,a.jsxs)(`div`,{className:`faq-item`,children:[(0,a.jsxs)(`button`,{className:`faq-q`,type:`button`,"aria-expanded":`false`,"aria-controls":`a7`,children:[(0,a.jsx)(`span`,{children:`Will you sign an NDA?`}),(0,a.jsx)(`em`,{children:`+`})]}),(0,a.jsx)(`p`,{className:`faq-a`,id:`a7`,children:`Yes, before the call if you want. Say so in the form.`})]}),(0,a.jsxs)(`div`,{className:`faq-item`,children:[(0,a.jsxs)(`button`,{className:`faq-q`,type:`button`,"aria-expanded":`false`,"aria-controls":`a8`,children:[(0,a.jsx)(`span`,{children:`What about App Store approval?`}),(0,a.jsx)(`em`,{children:`+`})]}),(0,a.jsx)(`p`,{className:`faq-a`,id:`a8`,children:`We prepare the submission, write the listing, and manage the review. Apple's timeline is not ours to promise, but we handle the process.`})]})]})]})}),(0,a.jsxs)(`section`,{className:`final`,children:[(0,a.jsxs)(`h2`,{children:[(0,a.jsxs)(`span`,{className:`grad`,children:[u,` build slot`,d]}),(0,a.jsx)(`span`,{children:`left this week.`})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{className:`body`,children:`Book the call. Fifteen minutes. You leave with a locked scope, a fixed price, and a Friday date on the calendar.`}),(0,a.jsx)(`a`,{className:`btn`,href:`#form`,children:`See If My Project Qualifies`}),(0,a.jsxs)(`div`,{className:`contact`,children:[(0,a.jsx)(`div`,{children:`Or message us on WhatsApp: +1 346 829 1047`}),(0,a.jsx)(`div`,{children:`[EMAIL] · +1 737 394 5488`}),(0,a.jsx)(`div`,{children:`716 Congress Ave #200, Austin, TX 78701`})]})]})]}),(0,a.jsxs)(`footer`,{children:[(0,a.jsx)(`div`,{children:`© 2026 DigiWorks AI`}),(0,a.jsxs)(`nav`,{children:[(0,a.jsx)(`a`,{href:`/privacy-policy`,children:`Privacy`}),(0,a.jsx)(`a`,{href:`/terms-of-use`,children:`Terms`}),(0,a.jsx)(`a`,{href:`mailto:[EMAIL]`,children:`Contact`})]})]})]}),(0,a.jsx)(`div`,{className:`sticky`,id:`sticky`,children:(0,a.jsx)(`a`,{className:`btn`,href:`#form`,children:`See If My Project Qualifies`})})]})]})}export{h as default};