import{a as e}from"./rolldown-runtime-CNC7AqOf.js";import{d as t,i as n,n as r,s as i,u as a}from"./motion-Cw6iLlDO.js";import{t as o}from"./useLowPower-C7TsudmS.js";import{A as s,B as c,J as l,K as u,P as d,d as f,n as p,o as m,r as h,s as g,t as _,z as v}from"./three-DzeE39i9.js";var y=e(t(),1),b=a(),x=[{k:`01 · Data`,title:`Your data becomes a signal`,desc:`We gather, clean, and structure what your business already produces, turning scattered records into model-ready fuel.`},{k:`02 · Model`,title:`Models learn your domain`,desc:`Custom architectures train on your reality, not generic benchmarks, validated until precision holds under pressure.`},{k:`03 · Decision`,title:`Intelligence enters the workflow`,desc:`Agents and APIs plug into the systems your team already uses, recommending, routing, and acting in real time.`},{k:`04 · Outcome`,title:`Outcomes compound`,desc:`Monitoring and retraining keep accuracy climbing, so the system you launch is the weakest version you will ever run.`}],S=`
  uniform float uProgress;
  uniform float uTime;
  attribute vec3 aChaos;
  attribute vec3 aSphere;
  attribute float aSeed;
  varying float vTone;

  void main() {
    float t = uTime;
    // STATE 0 — scattered raw data (chaos)
    vec3 p0 = aChaos;
    // STATE 1 — organized model sphere
    vec3 p1 = aSphere * (1.0 + sin(t * 0.6 + aSeed * 6.28) * 0.03);
    // STATE 2 — decision streams (flattened flowing lanes)
    float lane = floor(aSeed * 6.0) - 2.5;
    vec3 p2 = vec3(
      (aSphere.x) * 1.9,
      lane * 1.3 + sin(aSphere.x * 1.5 + t * 1.2) * 0.6,
      aSphere.z * 0.35
    );
    // STATE 3 — outcome: a centered, slowly turning galaxy/vortex (stays centered)
    float ang = aSeed * 30.0 + t * 0.4;
    float rad = 3.0 + abs(aSphere.y) * 0.4;
    vec3 p3 = vec3(cos(ang) * rad, aSphere.y * 1.1, sin(ang) * rad);

    float g = uProgress * 3.0;
    vec3 pos = p0;
    pos = mix(pos, p1, smoothstep(0.0, 1.0, clamp(g, 0.0, 1.0)));
    pos = mix(pos, p2, smoothstep(0.0, 1.0, clamp(g - 1.0, 0.0, 1.0)));
    pos = mix(pos, p3, smoothstep(0.0, 1.0, clamp(g - 2.0, 0.0, 1.0)));

    vTone = aSeed;
    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = (12.0 + aSeed * 14.0) * (1.0 / -mv.z);
  }
`,C=`
  precision highp float;
  varying float vTone;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float a = smoothstep(0.5, 0.0, d);
    vec3 deep = vec3(0.02, 0.22, 0.70);
    vec3 hot = vec3(0.20, 0.55, 1.0);
    vec3 col = mix(deep, hot, vTone);
    gl_FragColor = vec4(col * 1.1, a);
  }
`;function w({progress:e}){let t=(0,y.useRef)(null);return(0,y.useEffect)(()=>{let n=t.current;if(!n)return;try{/*dwWebglGuard*/let r=window.innerWidth<768,i=new v,a=new s(60,n.clientWidth/n.clientHeight,.1,100);a.position.z=15;let o=new l({antialias:!0,alpha:!0,powerPreference:`high-performance`}),y=Math.min(window.devicePixelRatio,r?1.5:2);o.setPixelRatio(y),o.setSize(n.clientWidth,n.clientHeight),n.appendChild(o.domElement);let b=r?11e3:3e4,x=new Float32Array(b*3),w=new Float32Array(b*3),T=new Float32Array(b);for(let e=0;e<b;e++){x[e*3]=(Math.random()-.5)*30,x[e*3+1]=(Math.random()-.5)*18,x[e*3+2]=(Math.random()-.5)*20;let t=e+.5,n=Math.acos(1-2*t/b),r=Math.PI*(1+Math.sqrt(5))*t,i=6.5;w[e*3]=i*Math.sin(n)*Math.cos(r),w[e*3+1]=i*Math.sin(n)*Math.sin(r),w[e*3+2]=i*Math.cos(n),T[e]=Math.random()}let E=new g;E.setAttribute(`position`,new m(w,3)),E.setAttribute(`aChaos`,new m(x,3)),E.setAttribute(`aSphere`,new m(w,3)),E.setAttribute(`aSeed`,new m(T,1));let D={uProgress:{value:0},uTime:{value:0}},O=new c({uniforms:D,vertexShader:S,fragmentShader:C,transparent:!0,depthWrite:!1,blending:2}),k=new d(E,O);k.position.x=r?0:4.6,i.add(k);let A=new h(o);A.setPixelRatio(y),A.setSize(n.clientWidth,n.clientHeight),A.addPass(new p(i,a)),A.addPass(new _(new u(n.clientWidth,n.clientHeight),r?.55:.8,.55,.15));let j=0,M=e.on(`change`,e=>{j=e}),N=()=>{n.clientWidth&&(a.aspect=n.clientWidth/n.clientHeight,a.updateProjectionMatrix(),o.setSize(n.clientWidth,n.clientHeight),A.setSize(n.clientWidth,n.clientHeight))};window.addEventListener(`resize`,N);let P=!0,F=new IntersectionObserver(e=>{P=e[0].isIntersecting},{threshold:.01});F.observe(n);let I=new f,L,R=()=>{L=requestAnimationFrame(R),P&&(D.uTime.value=I.getElapsedTime(),D.uProgress.value+=(j-D.uProgress.value)*.08,k.rotation.y=I.getElapsedTime()*.04,A.render())};return R(),()=>{cancelAnimationFrame(L),M(),F.disconnect(),window.removeEventListener(`resize`,N),E.dispose(),O.dispose(),A.dispose?.(),o.dispose(),o.domElement.parentNode===n&&n.removeChild(o.domElement)}}catch(err){console.warn("[DW] WebGL scroll skipped",err)}},[e]),(0,b.jsx)(`div`,{ref:t,className:`absolute inset-0`,"aria-hidden":!0})}function T({progress:e,i:t,total:n}){let a=1/(n-1),o=t*a,s=.07,c=t===0,l=t===n-1,u=c?[0,o+a/2-s,o+a/2]:l?[o-a/2,o-a/2+s,1]:[o-a/2,o-a/2+s,o+a/2-s,o+a/2],d=c?[1,1,0]:l?[0,1,1]:[0,1,1,0],f=c?[0,0,-36]:l?[36,0,0]:[36,0,0,-36],p=r(e,u,d),m=r(e,u,f),h=x[t];return(0,b.jsxs)(i.div,{style:{opacity:p,y:m},className:`absolute inset-0 flex flex-col justify-center`,children:[(0,b.jsx)(`p`,{className:`font-display text-sm font-bold uppercase tracking-[0.3em] text-coral`,children:h.k}),(0,b.jsx)(`h3`,{className:`mt-4 max-w-xl font-display text-3xl font-extrabold leading-tight text-dusk sm:text-4xl md:text-5xl`,children:h.title}),(0,b.jsx)(`p`,{className:`mt-5 max-w-md text-base leading-relaxed text-dusk/70 md:text-lg`,children:h.desc})]})}function E(){let e=(0,y.useRef)(null),{scrollYProgress:t}=n({target:e,offset:[`start start`,`end end`]}),i=typeof window<`u`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches||o(),a=typeof window<`u`&&window.innerWidth>0&&window.innerWidth<768,s=r(t,e=>Math.max(0,Math.min(x.length-1,Math.round(e*(x.length-1)))));return i||a?(0,b.jsxs)(`section`,{className:`section-pad relative overflow-hidden`,"aria-label":`How DigiWorks ships AI`,children:[(0,b.jsxs)(`div`,{className:`mx-auto max-w-3xl text-center`,children:[(0,b.jsxs)(`span`,{className:`chip`,children:[(0,b.jsx)(`span`,{className:`h-1.5 w-1.5 animate-pulse rounded-full bg-coral`}),`How It Works`]}),(0,b.jsxs)(`h2`,{className:`mt-5 font-display text-2xl font-bold text-dusk sm:text-3xl`,children:[`From raw data to `,(0,b.jsx)(`span`,{className:`text-gradient-hot`,children:`running intelligence`})]})]}),(0,b.jsx)(`div`,{className:`mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2`,children:x.map(e=>(0,b.jsxs)(`div`,{className:`glass p-7`,children:[(0,b.jsx)(`p`,{className:`font-display text-xs font-bold uppercase tracking-[0.3em] text-coral`,children:e.k}),(0,b.jsx)(`h3`,{className:`mt-3 font-display text-xl font-bold text-dusk`,children:e.title}),(0,b.jsx)(`p`,{className:`mt-2 text-sm leading-relaxed text-dusk/70`,children:e.desc})]},e.k))})]}):(0,b.jsx)(`section`,{ref:e,className:`relative h-[420vh]`,"aria-label":`How DigiWorks ships AI: from raw data to running intelligence`,children:(0,b.jsxs)(`div`,{className:`sticky top-0 flex h-screen items-center overflow-hidden`,children:[(0,b.jsx)(w,{progress:t}),(0,b.jsx)(`div`,{className:`pointer-events-none absolute inset-0 bg-gradient-to-r from-void/85 via-void/30 to-transparent`,"aria-hidden":!0}),(0,b.jsx)(`div`,{className:`pointer-events-none absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-void via-void/75 to-transparent`,"aria-hidden":!0}),(0,b.jsx)(`div`,{className:`pointer-events-none absolute inset-x-0 bottom-0 h-[18%] bg-gradient-to-t from-void to-transparent`,"aria-hidden":!0}),(0,b.jsxs)(`div`,{className:`pointer-events-none absolute inset-x-0 top-[10%] z-10 flex flex-col items-center text-center`,children:[(0,b.jsxs)(`span`,{className:`chip`,children:[(0,b.jsx)(`span`,{className:`h-1.5 w-1.5 animate-pulse rounded-full bg-coral`}),`How It Works`]}),(0,b.jsxs)(`h2`,{className:`mt-4 font-display text-xl font-bold text-dusk/90 sm:text-2xl`,children:[`From raw data to `,(0,b.jsx)(`span`,{className:`text-gradient-hot`,children:`running intelligence`})]})]}),(0,b.jsx)(`div`,{className:`relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8`,children:(0,b.jsx)(`div`,{className:`relative h-72 max-w-xl`,children:x.map((e,n)=>(0,b.jsx)(T,{progress:t,i:n,total:x.length},n))})}),(0,b.jsx)(`div`,{className:`absolute right-8 top-1/2 hidden -translate-y-1/2 flex-col gap-3 lg:flex`,"aria-hidden":!0,children:x.map((e,t)=>(0,b.jsx)(D,{dotIndex:s,i:t},t))})]})})}function D({dotIndex:e,i:t}){let n=r(e,e=>e===t?1:.3),a=r(e,e=>e===t?1.4:1);return(0,b.jsx)(i.span,{style:{opacity:n,scale:a},className:`h-2.5 w-2.5 rounded-full bg-coral shadow-[0_0_10px_rgba(48,142,255,0.8)]`})}export{E as default};