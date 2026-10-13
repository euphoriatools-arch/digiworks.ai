import{a as e}from"./rolldown-runtime-CNC7AqOf.js";import{d as t,u as n}from"./motion-Cw6iLlDO.js";import{A as r,B as i,D as a,I as o,J as s,K as c,O as l,P as u,V as d,d as f,j as p,n as m,o as h,q as g,r as _,s as v,t as y,z as b}from"./three-DzeE39i9.js";var x=e(t(),1),S=n(),C=`
  uniform float uTime;
  uniform float uScroll;
  uniform vec3 uMouse;
  uniform float uSize;
  uniform float uPixelRatio;
  attribute vec3 aSeed;
  attribute float aScale;
  varying float vGlow;
  varying float vTone;

  void main() {
    vec3 p = position;
    float t = uTime;

    // swirling vector field (cheap pseudo-curl) — the "thinking" motion
    float f = 0.35;
    vec3 flow = vec3(
      sin(p.y * f + t * 0.6) + cos(p.z * f - t * 0.5),
      sin(p.z * f + t * 0.7) + cos(p.x * f - t * 0.45),
      sin(p.x * f + t * 0.5) + cos(p.y * f - t * 0.55)
    );
    p += flow * (0.32 + aSeed.x * 0.5);

    // breathing pulse outward
    float pulse = 1.0 + sin(t * 0.8 + aSeed.y * 6.28) * 0.04;
    p *= pulse;

    // cursor force-field: particles get pushed away from the pointer
    vec3 toMouse = p - uMouse;
    float d = length(toMouse);
    float force = smoothstep(5.5, 0.0, d) * 3.4;
    p += normalize(toMouse + 0.0001) * force;

    // scroll disperses + lifts the cloud (descend into the system)
    p.y += uScroll * 3.0;
    p *= 1.0 + uScroll * 0.5;

    vGlow = force * 0.4 + 0.3 + aSeed.z * 0.4;
    vTone = aSeed.z;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * aScale * uPixelRatio * (1.0 / -mv.z);
  }
`,ee=`
  precision highp float;
  varying float vGlow;
  varying float vTone;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float a = smoothstep(0.5, 0.0, d);
    // deep navy → electric blue by tone, hot-tipped only where the cursor pushes
    vec3 deep = vec3(0.04, 0.28, 0.95);
    vec3 hot = vec3(0.12, 0.55, 1.0);
    vec3 bright = vec3(0.55, 0.82, 1.0);
    vec3 col = mix(deep, hot, vTone);
    col = mix(col, bright, clamp(vGlow - 0.55, 0.0, 1.0));
    gl_FragColor = vec4(col * (0.7 + vGlow * 0.85), a);
  }
`;function w(){let e=(0,x.useRef)(null);return(0,x.useEffect)(()=>{let t=e.current;if(!t)return;let n=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,x=window.innerWidth<768,S=new b,w=new r(58,t.clientWidth/t.clientHeight,.1,100);w.position.z=16;let T=new s({antialias:!0,alpha:!0,powerPreference:`high-performance`}),E=Math.min(window.devicePixelRatio,x?1.5:2);T.setPixelRatio(E),T.setSize(t.clientWidth,t.clientHeight),t.appendChild(T.domElement);let D=x?14e3:42e3,O=new Float32Array(D*3),k=new Float32Array(D*3),A=new Float32Array(D);for(let e=0;e<D;e++){let t=e+.5,n=Math.acos(1-2*t/D),r=Math.PI*(1+Math.sqrt(5))*t,i=7.5*(.55+Math.random()*.5);O[e*3]=i*Math.sin(n)*Math.cos(r),O[e*3+1]=i*Math.sin(n)*Math.sin(r)*.8,O[e*3+2]=i*Math.cos(n),k[e*3]=Math.random(),k[e*3+1]=Math.random(),k[e*3+2]=Math.random(),A[e]=6+Math.random()*16}let j=new v;j.setAttribute(`position`,new h(O,3)),j.setAttribute(`aSeed`,new h(k,3)),j.setAttribute(`aScale`,new h(A,1));let M={uTime:{value:0},uScroll:{value:0},uMouse:{value:new g(999,999,999)},uSize:{value:x?20:26},uPixelRatio:{value:E}},N=new i({uniforms:M,vertexShader:C,fragmentShader:ee,transparent:!0,depthWrite:!1,blending:2}),P=new u(j,N);S.add(P);let F=new a(new d(2.2,24,24),new l({color:1737471,transparent:!0,opacity:.04}));S.add(F);let I=null,L=null;x||(I=new _(T),I.setPixelRatio(E),I.setSize(t.clientWidth,t.clientHeight),I.addPass(new m(S,w)),L=new y(new c(t.clientWidth,t.clientHeight),.62,.5,.12),I.addPass(L));let R=()=>I?I.render():T.render(S,w),z=new c(2,2),B=new o,V=new p(new g(0,0,1),0),H=new g,U=e=>{z.x=e.clientX/window.innerWidth*2-1,z.y=-(e.clientY/window.innerHeight)*2+1};window.addEventListener(`mousemove`,U,{passive:!0});let W=0,G=()=>{let e=window.innerHeight;W=Math.min(1,(window.scrollY||window.pageYOffset||0)/e)};window.addEventListener(`scroll`,G,{passive:!0});let K=()=>{t.clientWidth&&(w.aspect=t.clientWidth/t.clientHeight,w.updateProjectionMatrix(),T.setSize(t.clientWidth,t.clientHeight),I?.setSize(t.clientWidth,t.clientHeight))};window.addEventListener(`resize`,K);let q=!0,J=new IntersectionObserver(e=>{q=e[0].isIntersecting},{threshold:.01});J.observe(t);let Y=new f,X,Z=0,Q=0,te=()=>{let e=Y.getElapsedTime();M.uTime.value=e,M.uScroll.value+=(W-M.uScroll.value)*.06,B.setFromCamera(z,w),B.ray.intersectPlane(V,H)&&M.uMouse.value.lerp(H,.12),Z+=(z.x*.35-Z)*.04,Q+=(z.y*.25-Q)*.04,S.rotation.y=e*.05+Z,S.rotation.x=Q,F.scale.setScalar(1+Math.sin(e*1.1)*.1),R()},$=()=>{X=requestAnimationFrame($),q&&document.body.style.overflow!==`hidden`&&te()};return n?(M.uTime.value=2,R()):$(),()=>{cancelAnimationFrame(X),J.disconnect(),window.removeEventListener(`mousemove`,U),window.removeEventListener(`scroll`,G),window.removeEventListener(`resize`,K),j.dispose(),N.dispose(),F.geometry.dispose(),F.material.dispose(),L?.dispose?.(),I?.dispose?.(),T.dispose(),T.domElement.parentNode===t&&t.removeChild(T.domElement)}},[]),(0,S.jsx)(`div`,{ref:e,className:`absolute inset-0`,"aria-hidden":!0})}export{w as default};