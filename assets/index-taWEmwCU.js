var uv=Object.defineProperty;var dv=(i,t,e)=>t in i?uv(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var ct=(i,t,e)=>dv(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const fv="modulepreload",pv=function(i,t){return new URL(i,t).href},dd={},Om=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){let o=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const a=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");s=o(e.map(h=>{if(h=pv(h,n),h in dd)return;dd[h]=!0;const u=h.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!n)for(let v=a.length-1;v>=0;v--){const g=a[v];if(g.href===h&&(!u||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":fv,u||(p.as="script"),p.crossOrigin="",p.href=h,c&&p.setAttribute("nonce",c),document.head.appendChild(p),u)return new Promise((v,g)=>{p.addEventListener("load",v),p.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})},wt=Object.freeze({heightAtPublish:3487653,zecUsd:1460,state:{chip:"pre-launch · gate 1",stat:"pre-launch"},supply:1e9,bands:[{n:1,share:.05,a:10,b:20},{n:2,share:.1,a:20,b:60},{n:3,share:.2,a:60,b:150},{n:4,share:.3,a:150,b:300},{n:5,share:.35,a:300,b:1/0}],fee:{buy:.02,sell:.03,launchStart:.5,halvingZec:4,bondedZec:20},split:{vault:.8,builder:.2},pool:{script:null,address:null,rune:null},vault:{notes:0,zec:0,viewingKey:"tba",firstPurchase:"when the coin bonds · 20 ZEC"},gates:[{id:"gate0",name:"gate 0",sub:"delivery batch",state:"passed",text:"The delivery batch is on chain: 30 transactions, 1,530 notes, blocks 3,486,819–3,486,918."},{id:"gate1",name:"gate 1",sub:"the chain",state:"pending",chip:"3 of 4 on chain",text:"On mainnet, 19 Sep: our builder's first transaction mined at 3,488,574 · the pool script spent down its 2-of-3 branch at 3,488,580 · the first ZRune ever etched on Zcash (a throwaway name) read by Universe's indexer exactly as sent, and transferred by edict at 3,488,590 · the recovery branch waits for height 3,488,700. Still open: a stranger reads the vault through its published key."},{id:"build",name:"build",sub:"weeks 2–7",state:"queued",chip:"queued",text:"Two indexers · wallet · signer · watcher."},{id:"gate2",name:"gate 2",sub:"test of one",state:"queued",chip:"market closed",text:"Buy one zkSNARK into the vault when Zilkroad's market opens. Sell it."},{id:"launch",name:"launch",sub:"after NU7",state:"queued",chip:"to be announced",text:"After NU7. Height to be announced."}],views:[{id:"home",name:"Home",stat:"pre-launch"},{id:"terminal",name:"Terminal",stat:"live rule"},{id:"vault",name:"Vault",stat:"empty"},{id:"genesis",name:"Genesis",stat:"lookup"},{id:"rule",name:"The rule",stat:"archive"},{id:"how",name:"How it works",stat:"online"}],links:{brief:"https://claude.ai/code/artifact/76329673-84ca-4f34-be9b-979eae364eec",zilkroad:"https://zilkroad.com",x:"https://x.com/zksnarks_"}}),Qe=Object.freeze({name:"GLASS",ticker:"$GLASS",chain:"Zcash",node:"node-glass",pool:"the pool",vault:"the vault",rule:"the rule",bonded:"bonded",operator:"one operator",registry:"the registry",piece:"zkSNARK",pieces:"zkSNARKs",retire:"retires",tba:"to be announced"}),mv=`${Qe.name} is an experimental onchain protocol. Not a bank. Not investment advice.
Holdings are public. Participate at your own risk.`,gv="Not available to residents of the United States, United Kingdom, Canada, China, Iran, North Korea, Syria, Cuba, Russia, Belarus, Myanmar, Afghanistan, Yemen, Venezuela, the Crimea, Donetsk and Luhansk regions, or any sanctioned jurisdiction.",Qc=new Map,fd=new Set;let yr=null;const zm=new Set;let qc={};function ur(i,t){Qc.set(i,t)}function vv(i){qc={...qc,...i}}function _v(i){zm.add(i)}function yv(){const i=(location.hash||"#/").replace(/^#\/?/,"").replace(/\/$/,"").split("?")[0]||"home";return wt.views.some(t=>t.id===i)?i:"home"}function pd(){const i=yv();yr&&yr!==i&&Qc.get(yr)?.leave?.();const t=yr;yr=i,document.body.dataset.v=i;for(const o of wt.views){const a=document.getElementById("v-"+o.id);a&&a.classList.toggle("on",o.id===i)}const e=Qc.get(i),n=document.querySelector("#v-"+i+" .mount")||document.getElementById("v-"+i);e&&!fd.has(i)&&(fd.add(i),e.render(n,{id:i,...qc})),e?.enter?.(t);const s=document.querySelector("#v-"+i+" .panel");s&&(s.style.animation="none",s.offsetWidth,s.style.animation="");const r=document.getElementById("v-"+i);r&&(r.scrollTop=0),zm.forEach(o=>o(i,t))}function eo(i){location.hash=i==="home"?"#/":"#/"+i}function md(){addEventListener("hashchange",pd),pd()}const xl="glass_snd_v2";function xv(i){let t=null,e=null,n=null,s=!1,r=null;const o=matchMedia("(prefers-reduced-motion: reduce)").matches;function a(){t=new(window.AudioContext||window.webkitAudioContext),e=t.createGain(),e.gain.value=0;const p=t.createDynamicsCompressor();p.threshold.value=-24,p.ratio.value=6,n=p;const v=t.createBiquadFilter();v.type="lowpass",v.frequency.value=900,v.Q.value=.7;const g=t.createOscillator();g.type="triangle",g.frequency.value=.043;const m=t.createGain();m.gain.value=260,g.connect(m),m.connect(v.frequency),g.start();const x=t.createDelay(2);x.delayTime.value=.47;const _=t.createGain();_.gain.value=.38;const y=t.createGain();y.gain.value=.35,v.connect(p),p.connect(e),e.connect(t.destination),v.connect(x),x.connect(_),_.connect(x),x.connect(y),y.connect(p),[73.42,110,146.83,174.61].forEach((I,w)=>{[-4,4].forEach(b=>{const S=t.createOscillator();S.type=w<2?"sawtooth":"triangle",S.frequency.value=I,S.detune.value=b;const U=t.createGain();U.gain.value=w<2?.05:.035,S.connect(U),U.connect(v),S.start()})});const A=t.createOscillator();A.type="sine",A.frequency.value=50;const T=t.createGain();T.gain.value=.012,A.connect(T),T.connect(p),A.start(),l()}function l(){clearTimeout(r),r=setTimeout(()=>{if(t&&s){const p=t.createOscillator();p.type="sine",p.frequency.value=[1174.66,1567.98,880,2093][Math.floor(Math.random()*4)];const v=t.createGain();v.gain.setValueAtTime(0,t.currentTime),v.gain.linearRampToValueAtTime(.02,t.currentTime+.02),v.gain.exponentialRampToValueAtTime(1e-4,t.currentTime+1.8),p.connect(v),v.connect(e),p.start(),p.stop(t.currentTime+2)}l()},6e3+Math.random()*14e3)}function c(p,v=1.6){e&&(e.gain.cancelScheduledValues(t.currentTime),e.gain.setTargetAtTime(p,t.currentTime,v/3))}function h(p,v=!0){if(s=!!p,s?(t||a(),t.state==="suspended"&&t.resume(),c(o?.18:.28)):c(0,.8),i.setAttribute("aria-pressed",String(s)),i.setAttribute("aria-label","sound: "+(s?"on":"off")),i.classList.toggle("on",s),v)try{localStorage.setItem(xl,s?"1":"0")}catch{}}let u=!1;i.addEventListener("click",()=>{u=s,h(!s),i.classList.remove("armed")}),document.addEventListener("visibilitychange",()=>{t&&(document.hidden?c(0,.4):s&&c(.28))}),addEventListener("pagehide",()=>{t&&s&&c(0,.2)});let d=!0;try{d=localStorage.getItem(xl)!=="0"}catch{}if(d){i.classList.add("armed"),i.setAttribute("aria-label","sound: starting");const p=()=>{s||u||(h(!0,!1),i.classList.remove("armed"),t&&t.state!=="running"&&t.resume().catch(()=>{}))};try{a(),t.state==="running"?p():t.resume().then(()=>{t.state==="running"&&p()}).catch(()=>{})}catch{}["pointerdown","keydown","touchstart"].forEach(v=>addEventListener(v,p,{passive:!0}))}function f(){if(u)return;let p=!1;try{p=localStorage.getItem(xl)==="0"}catch{}p||(h(!0,!1),i.classList.remove("armed"),t&&t.state!=="running"&&t.resume().catch(()=>{}))}return{setOn:h,arm:f,isOn:()=>s,toggle:()=>h(!s),context:()=>t,bus:()=>n}}function bv(i,{count:t=110}={}){const e=i.getContext("2d"),n=matchMedia("(prefers-reduced-motion: reduce)").matches;let s=0,r=0,o=1,a=0,l=[],c=0;function h(){o=Math.min(2,devicePixelRatio||1),s=i.clientWidth,r=i.clientHeight,i.width=Math.round(s*o),i.height=Math.round(r*o),e.setTransform(o,0,0,o,0,0),l.length||u()}function u(){l=Array.from({length:t},()=>({x:Math.random()*s,y:Math.random()*r,r:.5+Math.random()*1.1,vx:(Math.random()-.5)*6,vy:-3-Math.random()*7,ph:Math.random()*Math.PI*2,tw:.4+Math.random()*.9,a:.25+Math.random()*.5,g:Math.random()<.3}))}function d(g){e.clearRect(0,0,s,r);for(const m of l){const x=n?1:.6+.4*Math.sin(g*m.tw+m.ph);e.globalAlpha=m.a*x,e.fillStyle=m.g?"#bfffd6":"#e8f2ff",e.beginPath(),e.arc(m.x,m.y,m.r,0,Math.PI*2),e.fill()}e.globalAlpha=1}function f(g){if(a=0,document.hidden)return;const m=g/1e3,x=c?Math.min(.1,m-c):0;c=m;for(const _ of l)_.x+=(_.vx+Math.sin(m*.3+_.ph)*2)*x,_.y+=_.vy*x,_.y<-4&&(_.y=r+4,_.x=Math.random()*s),_.x<-4?_.x=s+4:_.x>s+4&&(_.x=-4);d(m),a=requestAnimationFrame(f)}if(new ResizeObserver(h).observe(i),h(),n)return d(0),{stop(){}};const v=()=>{!a&&!document.hidden&&(c=0,a=requestAnimationFrame(f))};return document.addEventListener("visibilitychange",v),v(),{stop(){a&&cancelAnimationFrame(a),a=0}}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nl="170",wv=0,gd=1,Mv=2,Hm=1,Sv=2,Xn=3,Fn=0,ve=1,dn=2,Nn=0,Ws=1,js=2,vd=3,_d=4,Ev=5,Qi=100,Av=101,Cv=102,Tv=103,Iv=104,Rv=200,Lv=201,Pv=202,Dv=203,Kc=204,Yc=205,Uv=206,Bv=207,Nv=208,Fv=209,kv=210,Ov=211,zv=212,Hv=213,Vv=214,Xc=0,jc=1,Zc=2,Zs=3,Jc=4,th=5,eh=6,nh=7,Vm=0,Gv=1,Wv=2,Ri=0,Gm=1,Wm=2,$m=3,eu=4,$v=5,Qm=6,qm=7,Km=300,Js=301,tr=302,Na=303,ih=304,il=306,sh=1e3,ei=1001,rh=1002,en=1003,Qv=1004,wo=1005,Ee=1006,bl=1007,ni=1008,li=1009,Ym=1010,Xm=1011,er=1012,nu=1013,is=1014,ii=1015,nn=1016,iu=1017,su=1018,nr=1020,jm=35902,Zm=1021,Jm=1022,Cn=1023,tg=1024,eg=1025,Xi=1026,ir=1027,ng=1028,ru=1029,ig=1030,ou=1031,au=1033,Ea=33776,Aa=33777,Ca=33778,Ta=33779,oh=35840,ah=35841,lh=35842,ch=35843,hh=36196,uh=37492,dh=37496,fh=37808,ph=37809,mh=37810,gh=37811,vh=37812,_h=37813,yh=37814,xh=37815,bh=37816,wh=37817,Mh=37818,Sh=37819,Eh=37820,Ah=37821,Ia=36492,Ch=36494,Th=36495,sg=36283,Ih=36284,Rh=36285,Lh=36286,qv=3200,Kv=3201,rg=0,Yv=1,Ai="",Pe="srgb",fs="srgb-linear",sl="linear",ie="srgb",ms=7680,yd=519,Xv=512,jv=513,Zv=514,og=515,Jv=516,t_=517,e_=518,n_=519,xd=35044,bd="300 es",si=2e3,Fa=2001;class dr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wd=1234567;const $s=Math.PI/180,no=180/Math.PI;function fr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function Se(i,t,e){return Math.max(t,Math.min(e,i))}function lu(i,t){return(i%t+t)%t}function i_(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function s_(i,t,e){return i!==t?(e-i)/(t-i):0}function Qr(i,t,e){return(1-e)*i+e*t}function r_(i,t,e,n){return Qr(i,t,1-Math.exp(-e*n))}function o_(i,t=1){return t-Math.abs(lu(i,t*2)-t)}function a_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function l_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function c_(i,t){return i+Math.floor(Math.random()*(t-i+1))}function h_(i,t){return i+Math.random()*(t-i)}function u_(i){return i*(.5-Math.random())}function d_(i){i!==void 0&&(wd=i);let t=wd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function f_(i){return i*$s}function p_(i){return i*no}function m_(i){return(i&i-1)===0&&i!==0}function g_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function v_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function __(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),p=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ns(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const y_={DEG2RAD:$s,RAD2DEG:no,generateUUID:fr,clamp:Se,euclideanModulo:lu,mapLinear:i_,inverseLerp:s_,lerp:Qr,damp:r_,pingpong:o_,smoothstep:a_,smootherstep:l_,randInt:c_,randFloat:h_,randFloatSpread:u_,seededRandom:d_,degToRad:f_,radToDeg:p_,isPowerOfTwo:m_,ceilPowerOfTwo:g_,floorPowerOfTwo:v_,setQuaternionFromProperEuler:__,normalize:Fe,denormalize:Ns};class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,n,s,r,o,a,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],v=s[0],g=s[3],m=s[6],x=s[1],_=s[4],y=s[7],R=s[2],A=s[5],T=s[8];return r[0]=o*v+a*x+l*R,r[3]=o*g+a*_+l*A,r[6]=o*m+a*y+l*T,r[1]=c*v+h*x+u*R,r[4]=c*g+h*_+u*A,r[7]=c*m+h*y+u*T,r[2]=d*v+f*x+p*R,r[5]=d*g+f*_+p*A,r[8]=d*m+f*y+p*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(wl.makeScale(t,e)),this}rotate(t){return this.premultiply(wl.makeRotation(-t)),this}translate(t,e){return this.premultiply(wl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wl=new $t;function ag(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ka(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function x_(){const i=ka("canvas");return i.style.display="block",i}const Md={};function Nr(i){i in Md||(Md[i]=!0,console.warn(i))}function b_(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function w_(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function M_(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Xt={enabled:!0,workingColorSpace:fs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ie&&(i.r=ai(i.r),i.g=ai(i.g),i.b=ai(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ie&&(i.r=Qs(i.r),i.g=Qs(i.g),i.b=Qs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ai?sl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Sd=[.64,.33,.3,.6,.15,.06],Ed=[.2126,.7152,.0722],Ad=[.3127,.329],Cd=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Td=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xt.define({[fs]:{primaries:Sd,whitePoint:Ad,transfer:sl,toXYZ:Cd,fromXYZ:Td,luminanceCoefficients:Ed,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:Sd,whitePoint:Ad,transfer:ie,toXYZ:Cd,fromXYZ:Td,luminanceCoefficients:Ed,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}});let gs;class S_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{gs===void 0&&(gs=ka("canvas")),gs.width=t.width,gs.height=t.height;const n=gs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=gs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ka("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ai(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ai(e[n]/255)*255):e[n]=ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let E_=0;class lg{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=fr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ml(s[o].image)):r.push(Ml(s[o]))}else r=Ml(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ml(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?S_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let A_=0;class Be extends dr{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=ei,s=ei,r=Ee,o=ni,a=Cn,l=li,c=Be.DEFAULT_ANISOTROPY,h=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=fr(),this.name="",this.source=new lg(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Km)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sh:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case rh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sh:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case rh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=Km;Be.DEFAULT_ANISOTROPY=1;class Jt{constructor(t=0,e=0,n=0,s=1){Jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,y=(f+1)/2,R=(m+1)/2,A=(h+d)/4,T=(u+v)/4,I=(p+g)/4;return _>y&&_>R?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=A/n,r=T/n):y>R?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=I/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=T/r,s=I/r),this.set(n,s,r,e),this}let x=Math.sqrt((g-p)*(g-p)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(u-v)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class C_ extends dr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Jt(0,0,t,e),this.scissorTest=!1,this.viewport=new Jt(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ee,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Be(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new lg(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ne extends C_{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class cg extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class T_ extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mo{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],p=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=v;return}if(u!==v||l!==d||c!==f||h!==p){let g=1-a;const m=l*d+c*f+h*p+u*v,x=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const R=Math.sqrt(_),A=Math.atan2(R,m*x);g=Math.sin(g*A)/R,a=Math.sin(a*A)/R}const y=a*x;if(l=l*g+d*y,c=c*g+f*y,h=h*g+p*y,u=u*g+v*y,g===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,n=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Id.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Id.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Sl.copy(this).projectOnVector(t),this.sub(Sl)}reflect(t){return this.sub(Sl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sl=new k,Id=new mo;class go{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mo.copy(n.boundingBox)),Mo.applyMatrix4(t.matrixWorld),this.union(Mo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xr),So.subVectors(this.max,xr),vs.subVectors(t.a,xr),_s.subVectors(t.b,xr),ys.subVectors(t.c,xr),fi.subVectors(_s,vs),pi.subVectors(ys,_s),Ui.subVectors(vs,ys);let e=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Ui.z,Ui.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Ui.z,0,-Ui.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Ui.y,Ui.x,0];return!El(e,vs,_s,ys,So)||(e=[1,0,0,0,1,0,0,0,1],!El(e,vs,_s,ys,So))?!1:(Eo.crossVectors(fi,pi),e=[Eo.x,Eo.y,Eo.z],El(e,vs,_s,ys,So))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Vn=[new k,new k,new k,new k,new k,new k,new k,new k],xn=new k,Mo=new go,vs=new k,_s=new k,ys=new k,fi=new k,pi=new k,Ui=new k,xr=new k,So=new k,Eo=new k,Bi=new k;function El(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Bi.fromArray(i,r);const a=s.x*Math.abs(Bi.x)+s.y*Math.abs(Bi.y)+s.z*Math.abs(Bi.z),l=t.dot(Bi),c=e.dot(Bi),h=n.dot(Bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const I_=new go,br=new k,Al=new k;class rl{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):I_.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;br.subVectors(t,this.center);const e=br.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(br,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Al.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(br.copy(t.center).add(Al)),this.expandByPoint(br.copy(t.center).sub(Al))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new k,Cl=new k,Ao=new k,mi=new k,Tl=new k,Co=new k,Il=new k;class cu{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Cl.copy(t).add(e).multiplyScalar(.5),Ao.copy(e).sub(t).normalize(),mi.copy(this.origin).sub(Cl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ao),a=mi.dot(this.direction),l=-mi.dot(Ao),c=mi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Cl).addScaledVector(Ao,d),f}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);const n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,s,r){Tl.subVectors(e,t),Co.subVectors(n,t),Il.crossVectors(Tl,Co);let o=this.direction.dot(Il),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,t);const l=a*this.direction.dot(Co.crossVectors(mi,Co));if(l<0)return null;const c=a*this.direction.dot(Tl.cross(mi));if(c<0||l+c>o)return null;const h=-a*mi.dot(Il);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,p,v,g){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,p,v,g)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,p,v,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/xs.setFromMatrixColumn(t,0).length(),r=1/xs.setFromMatrixColumn(t,1).length(),o=1/xs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,p=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,p=c*h,v=c*u;e[0]=d+v*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,p=c*h,v=c*u;e[0]=d-v*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,p=a*h,v=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,p=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*l,f=o*c,p=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(R_,t,L_)}lookAt(t,e,n){const s=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),gi.crossVectors(n,Ye),gi.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),gi.crossVectors(n,Ye)),gi.normalize(),To.crossVectors(Ye,gi),s[0]=gi.x,s[4]=To.x,s[8]=Ye.x,s[1]=gi.y,s[5]=To.y,s[9]=Ye.y,s[2]=gi.z,s[6]=To.z,s[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],v=n[6],g=n[10],m=n[14],x=n[3],_=n[7],y=n[11],R=n[15],A=s[0],T=s[4],I=s[8],w=s[12],b=s[1],S=s[5],U=s[9],P=s[13],W=s[2],Z=s[6],D=s[10],nt=s[14],q=s[3],lt=s[7],K=s[11],$=s[15];return r[0]=o*A+a*b+l*W+c*q,r[4]=o*T+a*S+l*Z+c*lt,r[8]=o*I+a*U+l*D+c*K,r[12]=o*w+a*P+l*nt+c*$,r[1]=h*A+u*b+d*W+f*q,r[5]=h*T+u*S+d*Z+f*lt,r[9]=h*I+u*U+d*D+f*K,r[13]=h*w+u*P+d*nt+f*$,r[2]=p*A+v*b+g*W+m*q,r[6]=p*T+v*S+g*Z+m*lt,r[10]=p*I+v*U+g*D+m*K,r[14]=p*w+v*P+g*nt+m*$,r[3]=x*A+_*b+y*W+R*q,r[7]=x*T+_*S+y*Z+R*lt,r[11]=x*I+_*U+y*D+R*K,r[15]=x*w+_*P+y*nt+R*$,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],v=t[7],g=t[11],m=t[15];return p*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+v*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+g*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+m*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],v=t[13],g=t[14],m=t[15],x=u*g*c-v*d*c+v*l*f-a*g*f-u*l*m+a*d*m,_=p*d*c-h*g*c-p*l*f+o*g*f+h*l*m-o*d*m,y=h*v*c-p*u*c+p*a*f-o*v*f-h*a*m+o*u*m,R=p*u*l-h*v*l-p*a*d+o*v*d+h*a*g-o*u*g,A=e*x+n*_+s*y+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=x*T,t[1]=(v*d*r-u*g*r-v*s*f+n*g*f+u*s*m-n*d*m)*T,t[2]=(a*g*r-v*l*r+v*s*c-n*g*c-a*s*m+n*l*m)*T,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*T,t[4]=_*T,t[5]=(h*g*r-p*d*r+p*s*f-e*g*f-h*s*m+e*d*m)*T,t[6]=(p*l*r-o*g*r-p*s*c+e*g*c+o*s*m-e*l*m)*T,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*T,t[8]=y*T,t[9]=(p*u*r-h*v*r-p*n*f+e*v*f+h*n*m-e*u*m)*T,t[10]=(o*v*r-p*a*r+p*n*c-e*v*c-o*n*m+e*a*m)*T,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*T,t[12]=R*T,t[13]=(h*v*s-p*u*s+p*n*d-e*v*d-h*n*g+e*u*g)*T,t[14]=(p*a*s-o*v*s-p*n*l+e*v*l+o*n*g-e*a*g)*T,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,v=o*h,g=o*u,m=a*u,x=l*c,_=l*h,y=l*u,R=n.x,A=n.y,T=n.z;return s[0]=(1-(v+m))*R,s[1]=(f+y)*R,s[2]=(p-_)*R,s[3]=0,s[4]=(f-y)*A,s[5]=(1-(d+m))*A,s[6]=(g+x)*A,s[7]=0,s[8]=(p+_)*T,s[9]=(g-x)*T,s[10]=(1-(d+v))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=xs.set(s[0],s[1],s[2]).length();const o=xs.set(s[4],s[5],s[6]).length(),a=xs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],bn.copy(this);const c=1/r,h=1/o,u=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=u,bn.elements[9]*=u,bn.elements[10]*=u,e.setFromRotationMatrix(bn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=si){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,p;if(a===si)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===Fa)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=si){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,f=(n+s)*h;let p,v;if(a===si)p=(o+r)*u,v=-2*u;else if(a===Fa)p=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const xs=new k,bn=new ae,R_=new k(0,0,0),L_=new k(1,1,1),gi=new k,To=new k,Ye=new k,Rd=new ae,Ld=new mo;class kn{constructor(t=0,e=0,n=0,s=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Rd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ld.setFromEuler(this),this.setFromQuaternion(Ld,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class hu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let P_=0;const Pd=new k,bs=new mo,Wn=new ae,Io=new k,wr=new k,D_=new k,U_=new mo,Dd=new k(1,0,0),Ud=new k(0,1,0),Bd=new k(0,0,1),Nd={type:"added"},B_={type:"removed"},ws={type:"childadded",child:null},Rl={type:"childremoved",child:null};class be extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new k,e=new kn,n=new mo,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new $t}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.multiply(bs),this}rotateOnWorldAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.premultiply(bs),this}rotateX(t){return this.rotateOnAxis(Dd,t)}rotateY(t){return this.rotateOnAxis(Ud,t)}rotateZ(t){return this.rotateOnAxis(Bd,t)}translateOnAxis(t,e){return Pd.copy(t).applyQuaternion(this.quaternion),this.position.add(Pd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dd,t)}translateY(t){return this.translateOnAxis(Ud,t)}translateZ(t){return this.translateOnAxis(Bd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Io.copy(t):Io.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(wr,Io,this.up):Wn.lookAt(Io,wr,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(Wn),this.quaternion.premultiply(bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nd),ws.child=t,this.dispatchEvent(ws),ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(B_),Rl.child=t,this.dispatchEvent(Rl),Rl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nd),ws.child=t,this.dispatchEvent(ws),ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,t,D_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,U_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}be.DEFAULT_UP=new k(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new k,$n=new k,Ll=new k,Qn=new k,Ms=new k,Ss=new k,Fd=new k,Pl=new k,Dl=new k,Ul=new k,Bl=new Jt,Nl=new Jt,Fl=new Jt;class fn{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),wn.subVectors(t,e),s.cross(wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){wn.subVectors(s,e),$n.subVectors(n,e),Ll.subVectors(t,e);const o=wn.dot(wn),a=wn.dot($n),l=wn.dot(Ll),c=$n.dot($n),h=$n.dot(Ll),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(a,Qn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Bl.setScalar(0),Nl.setScalar(0),Fl.setScalar(0),Bl.fromBufferAttribute(t,e),Nl.fromBufferAttribute(t,n),Fl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Bl,r.x),o.addScaledVector(Nl,r.y),o.addScaledVector(Fl,r.z),o}static isFrontFacing(t,e,n,s){return wn.subVectors(n,e),$n.subVectors(t,e),wn.cross($n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),wn.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return fn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ms.subVectors(s,n),Ss.subVectors(r,n),Pl.subVectors(t,n);const l=Ms.dot(Pl),c=Ss.dot(Pl);if(l<=0&&c<=0)return e.copy(n);Dl.subVectors(t,s);const h=Ms.dot(Dl),u=Ss.dot(Dl);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ms,o);Ul.subVectors(t,r);const f=Ms.dot(Ul),p=Ss.dot(Ul);if(p>=0&&f<=p)return e.copy(r);const v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Ss,a);const g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return Fd.subVectors(r,s),a=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(Fd,a);const m=1/(g+v+d);return o=v*m,a=d*m,e.copy(n).addScaledVector(Ms,o).addScaledVector(Ss,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const hg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function kl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Xt.workingColorSpace){if(t=lu(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=kl(o,r,t+1/3),this.g=kl(o,r,t),this.b=kl(o,r,t-1/3)}return Xt.toWorkingColorSpace(this,s),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){const n=hg[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=Qs(t.r),this.g=Qs(t.g),this.b=Qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return Xt.fromWorkingColorSpace(Te.copy(this),t),Math.round(Se(Te.r*255,0,255))*65536+Math.round(Se(Te.g*255,0,255))*256+Math.round(Se(Te.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(Te.copy(this),e);const n=Te.r,s=Te.g,r=Te.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=Pe){Xt.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,n=Te.g,s=Te.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(Ro);const n=Qr(vi.h,Ro.h,e),s=Qr(vi.s,Ro.s,e),r=Qr(vi.l,Ro.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new Ft;Ft.NAMES=hg;let N_=0;class pr extends dr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=fr(),this.name="",this.blending=Ws,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kc,this.blendDst=Yc,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Kc&&(n.blendSrc=this.blendSrc),this.blendDst!==Yc&&(n.blendDst=this.blendDst),this.blendEquation!==Qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hi extends pr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Vm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Jn=F_();function F_(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function k_(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Se(i,-65504,65504),Jn.floatView[0]=i;const t=Jn.uint32View[0],e=t>>23&511;return Jn.baseTable[e]+((t&8388607)>>Jn.shiftTable[e])}function O_(i){const t=i>>10;return Jn.uint32View[0]=Jn.mantissaTable[Jn.offsetTable[t]+(i&1023)]+Jn.exponentTable[t],Jn.floatView[0]}const T2={toHalfFloat:k_,fromHalfFloat:O_},pe=new k,Lo=new kt;class pn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xd,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lo.fromBufferAttribute(this,e),Lo.applyMatrix3(t),this.setXY(e,Lo.x,Lo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ns(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ns(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ns(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ns(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ns(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xd&&(t.usage=this.usage),t}}class ug extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class dg extends pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ve extends pn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let z_=0;const an=new ae,Ol=new be,Es=new k,Xe=new go,Mr=new go,xe=new k;class vn extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ag(t)?dg:ug)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return Ol.lookAt(t),Ol.updateMatrix(),this.applyMatrix4(Ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ve(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new go);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Mr.setFromBufferAttribute(a),this.morphTargetsRelative?(xe.addVectors(Xe.min,Mr.min),Xe.expandByPoint(xe),xe.addVectors(Xe.max,Mr.max),Xe.expandByPoint(xe)):(Xe.expandByPoint(Mr.min),Xe.expandByPoint(Mr.max))}Xe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)xe.fromBufferAttribute(a,c),l&&(Es.fromBufferAttribute(t,c),xe.add(Es)),s=Math.max(s,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new k,l[I]=new k;const c=new k,h=new k,u=new k,d=new kt,f=new kt,p=new kt,v=new k,g=new k;function m(I,w,b){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,b),h.sub(c),u.sub(c),f.sub(d),p.sub(d);const S=1/(f.x*p.y-p.x*f.y);isFinite(S)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(S),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(S),a[I].add(v),a[w].add(v),a[b].add(v),l[I].add(g),l[w].add(g),l[b].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let I=0,w=x.length;I<w;++I){const b=x[I],S=b.start,U=b.count;for(let P=S,W=S+U;P<W;P+=3)m(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const _=new k,y=new k,R=new k,A=new k;function T(I){R.fromBufferAttribute(s,I),A.copy(R);const w=a[I];_.copy(w),_.sub(R.multiplyScalar(R.dot(w))).normalize(),y.crossVectors(A,w);const S=y.dot(l[I])<0?-1:1;o.setXYZW(I,_.x,_.y,_.z,S)}for(let I=0,w=x.length;I<w;++I){const b=x[I],S=b.start,U=b.count;for(let P=S,W=S+U;P<W;P+=3)T(t.getX(P+0)),T(t.getX(P+1)),T(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,h=new k,u=new k;if(t)for(let d=0,f=t.count;d<f;d+=3){const p=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,p=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new pn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new vn,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kd=new ae,Ni=new cu,Po=new rl,Od=new k,Do=new k,Uo=new k,Bo=new k,zl=new k,No=new k,zd=new k,Fo=new k;class Qt extends be{constructor(t=new vn,e=new hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){No.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(zl.fromBufferAttribute(u,t),o?No.addScaledVector(zl,h):No.addScaledVector(zl.sub(e),h))}e.add(No)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(r),Ni.copy(t.ray).recast(t.near),!(Po.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Po,Od)===null||Ni.origin.distanceToSquared(Od)>(t.far-t.near)**2))&&(kd.copy(r).invert(),Ni.copy(t.ray).applyMatrix4(kd),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){const g=d[p],m=o[g.materialIndex],x=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=x,R=_;y<R;y+=3){const A=a.getX(y),T=a.getX(y+1),I=a.getX(y+2);s=ko(this,m,t,n,c,h,u,A,T,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const x=a.getX(g),_=a.getX(g+1),y=a.getX(g+2);s=ko(this,o,t,n,c,h,u,x,_,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){const g=d[p],m=o[g.materialIndex],x=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=x,R=_;y<R;y+=3){const A=y,T=y+1,I=y+2;s=ko(this,m,t,n,c,h,u,A,T,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const x=g,_=g+1,y=g+2;s=ko(this,o,t,n,c,h,u,x,_,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function H_(i,t,e,n,s,r,o,a){let l;if(t.side===ve?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Fn,a),l===null)return null;Fo.copy(a),Fo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Fo);return c<e.near||c>e.far?null:{distance:c,point:Fo.clone(),object:i}}function ko(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Do),i.getVertexPosition(l,Uo),i.getVertexPosition(c,Bo);const h=H_(i,t,e,n,Do,Uo,Bo,zd);if(h){const u=new k;fn.getBarycoord(zd,Do,Uo,Bo,u),s&&(h.uv=fn.getInterpolatedAttribute(s,a,l,c,u,new kt)),r&&(h.uv1=fn.getInterpolatedAttribute(r,a,l,c,u,new kt)),o&&(h.normal=fn.getInterpolatedAttribute(o,a,l,c,u,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new k,materialIndex:0};fn.getNormal(Do,Uo,Bo,d.normal),h.face=d,h.barycoord=u}return h}class On extends vn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ve(c,3)),this.setAttribute("normal",new Ve(h,3)),this.setAttribute("uv",new Ve(u,2));function p(v,g,m,x,_,y,R,A,T,I,w){const b=y/T,S=R/I,U=y/2,P=R/2,W=A/2,Z=T+1,D=I+1;let nt=0,q=0;const lt=new k;for(let K=0;K<D;K++){const $=K*S-P;for(let Q=0;Q<Z;Q++){const it=Q*b-U;lt[v]=it*x,lt[g]=$*_,lt[m]=W,c.push(lt.x,lt.y,lt.z),lt[v]=0,lt[g]=0,lt[m]=A>0?1:-1,h.push(lt.x,lt.y,lt.z),u.push(Q/T),u.push(1-K/I),nt+=1}}for(let K=0;K<I;K++)for(let $=0;$<T;$++){const Q=d+$+Z*K,it=d+$+Z*(K+1),O=d+($+1)+Z*(K+1),Y=d+($+1)+Z*K;l.push(Q,it,Y),l.push(it,O,Y),q+=6}a.addGroup(f,q,w),f+=q,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new On(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function sr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ke(i){const t={};for(let e=0;e<i.length;e++){const n=sr(i[e]);for(const s in n)t[s]=n[s]}return t}function V_(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function fg(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const rr={clone:sr,merge:ke};var G_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ge extends pr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=G_,this.fragmentShader=W_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=sr(t.uniforms),this.uniformsGroups=V_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class uu extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new k,Hd=new kt,Vd=new kt;class $e extends uu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=no*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return no*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,Hd,Vd),e.subVectors(Vd,Hd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($s*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const As=-90,Cs=1;class $_ extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $e(As,Cs,t,e);s.layers=this.layers,this.add(s);const r=new $e(As,Cs,t,e);r.layers=this.layers,this.add(r);const o=new $e(As,Cs,t,e);o.layers=this.layers,this.add(o);const a=new $e(As,Cs,t,e);a.layers=this.layers,this.add(a);const l=new $e(As,Cs,t,e);l.layers=this.layers,this.add(l);const c=new $e(As,Cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class pg extends Be{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Js,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Q_ extends Ne{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new pg(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ee}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new On(5,5,5),r=new ge({name:"CubemapFromEquirect",uniforms:sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ve,blending:Nn});r.uniforms.tEquirect.value=e;const o=new Qt(s,r),a=e.minFilter;return e.minFilter===ni&&(e.minFilter=Ee),new $_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Hl=new k,q_=new k,K_=new $t;class Si{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Hl.subVectors(n,e).cross(q_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Hl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||K_.getNormalMatrix(t),s=this.coplanarPoint(Hl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new rl,Oo=new k;class du{constructor(t=new Si,e=new Si,n=new Si,s=new Si,r=new Si,o=new Si){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=si){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],p=s[9],v=s[10],g=s[11],m=s[12],x=s[13],_=s[14],y=s[15];if(n[0].setComponents(l-r,d-c,g-f,y-m).normalize(),n[1].setComponents(l+r,d+c,g+f,y+m).normalize(),n[2].setComponents(l+o,d+h,g+p,y+x).normalize(),n[3].setComponents(l-o,d-h,g-p,y-x).normalize(),n[4].setComponents(l-a,d-u,g-v,y-_).normalize(),e===si)n[5].setComponents(l+a,d+u,g+v,y+_).normalize();else if(e===Fa)n[5].setComponents(a,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Oo.x=s.normal.x>0?t.max.x:t.min.x,Oo.y=s.normal.y>0?t.max.y:t.min.y,Oo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mg(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Y_(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],v=u[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class sn extends vn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],v=[],g=[];for(let m=0;m<h;m++){const x=m*d-o;for(let _=0;_<c;_++){const y=_*u-r;p.push(y,-x,0),v.push(0,0,1),g.push(_/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){const _=x+c*m,y=x+c*(m+1),R=x+1+c*(m+1),A=x+1+c*m;f.push(_,y,A),f.push(y,R,A)}this.setIndex(f),this.setAttribute("position",new Ve(p,3)),this.setAttribute("normal",new Ve(v,3)),this.setAttribute("uv",new Ve(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sn(t.width,t.height,t.widthSegments,t.heightSegments)}}var X_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Z_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,J_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ty=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ey=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ny=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ry=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ay=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ly=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,py=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,my=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_y=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,by=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,My=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ey=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ay="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ty=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Iy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ry=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ly=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Py=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,By=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ny=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ky=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Oy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Vy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Gy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$y=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ky=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ex=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ox=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ax=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ux=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,px=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_x=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ex=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ax=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ix=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Px=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ux=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ox=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ib=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ob=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ab=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ub=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,db=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_b=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Eb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ab=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:X_,alphahash_pars_fragment:j_,alphamap_fragment:Z_,alphamap_pars_fragment:J_,alphatest_fragment:ty,alphatest_pars_fragment:ey,aomap_fragment:ny,aomap_pars_fragment:iy,batching_pars_vertex:sy,batching_vertex:ry,begin_vertex:oy,beginnormal_vertex:ay,bsdfs:ly,iridescence_fragment:cy,bumpmap_pars_fragment:hy,clipping_planes_fragment:uy,clipping_planes_pars_fragment:dy,clipping_planes_pars_vertex:fy,clipping_planes_vertex:py,color_fragment:my,color_pars_fragment:gy,color_pars_vertex:vy,color_vertex:_y,common:yy,cube_uv_reflection_fragment:xy,defaultnormal_vertex:by,displacementmap_pars_vertex:wy,displacementmap_vertex:My,emissivemap_fragment:Sy,emissivemap_pars_fragment:Ey,colorspace_fragment:Ay,colorspace_pars_fragment:Cy,envmap_fragment:Ty,envmap_common_pars_fragment:Iy,envmap_pars_fragment:Ry,envmap_pars_vertex:Ly,envmap_physical_pars_fragment:Vy,envmap_vertex:Py,fog_vertex:Dy,fog_pars_vertex:Uy,fog_fragment:By,fog_pars_fragment:Ny,gradientmap_pars_fragment:Fy,lightmap_pars_fragment:ky,lights_lambert_fragment:Oy,lights_lambert_pars_fragment:zy,lights_pars_begin:Hy,lights_toon_fragment:Gy,lights_toon_pars_fragment:Wy,lights_phong_fragment:$y,lights_phong_pars_fragment:Qy,lights_physical_fragment:qy,lights_physical_pars_fragment:Ky,lights_fragment_begin:Yy,lights_fragment_maps:Xy,lights_fragment_end:jy,logdepthbuf_fragment:Zy,logdepthbuf_pars_fragment:Jy,logdepthbuf_pars_vertex:tx,logdepthbuf_vertex:ex,map_fragment:nx,map_pars_fragment:ix,map_particle_fragment:sx,map_particle_pars_fragment:rx,metalnessmap_fragment:ox,metalnessmap_pars_fragment:ax,morphinstance_vertex:lx,morphcolor_vertex:cx,morphnormal_vertex:hx,morphtarget_pars_vertex:ux,morphtarget_vertex:dx,normal_fragment_begin:fx,normal_fragment_maps:px,normal_pars_fragment:mx,normal_pars_vertex:gx,normal_vertex:vx,normalmap_pars_fragment:_x,clearcoat_normal_fragment_begin:yx,clearcoat_normal_fragment_maps:xx,clearcoat_pars_fragment:bx,iridescence_pars_fragment:wx,opaque_fragment:Mx,packing:Sx,premultiplied_alpha_fragment:Ex,project_vertex:Ax,dithering_fragment:Cx,dithering_pars_fragment:Tx,roughnessmap_fragment:Ix,roughnessmap_pars_fragment:Rx,shadowmap_pars_fragment:Lx,shadowmap_pars_vertex:Px,shadowmap_vertex:Dx,shadowmask_pars_fragment:Ux,skinbase_vertex:Bx,skinning_pars_vertex:Nx,skinning_vertex:Fx,skinnormal_vertex:kx,specularmap_fragment:Ox,specularmap_pars_fragment:zx,tonemapping_fragment:Hx,tonemapping_pars_fragment:Vx,transmission_fragment:Gx,transmission_pars_fragment:Wx,uv_pars_fragment:$x,uv_pars_vertex:Qx,uv_vertex:qx,worldpos_vertex:Kx,background_vert:Yx,background_frag:Xx,backgroundCube_vert:jx,backgroundCube_frag:Zx,cube_vert:Jx,cube_frag:tb,depth_vert:eb,depth_frag:nb,distanceRGBA_vert:ib,distanceRGBA_frag:sb,equirect_vert:rb,equirect_frag:ob,linedashed_vert:ab,linedashed_frag:lb,meshbasic_vert:cb,meshbasic_frag:hb,meshlambert_vert:ub,meshlambert_frag:db,meshmatcap_vert:fb,meshmatcap_frag:pb,meshnormal_vert:mb,meshnormal_frag:gb,meshphong_vert:vb,meshphong_frag:_b,meshphysical_vert:yb,meshphysical_frag:xb,meshtoon_vert:bb,meshtoon_frag:wb,points_vert:Mb,points_frag:Sb,shadow_vert:Eb,shadow_frag:Ab,sprite_vert:Cb,sprite_frag:Tb},gt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Pn={basic:{uniforms:ke([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:ke([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:ke([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:ke([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:ke([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:ke([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:ke([gt.points,gt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:ke([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:ke([gt.common,gt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:ke([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:ke([gt.sprite,gt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:ke([gt.common,gt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:ke([gt.lights,gt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Pn.physical={uniforms:ke([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const zo={r:0,b:0,g:0},ki=new kn,Ib=new ae;function Rb(i,t,e,n,s,r,o){const a=new Ft(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function p(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function v(x){let _=!1;const y=p(x);y===null?m(a,l):y&&y.isColor&&(m(y,1),_=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(x,_){const y=p(_);y&&(y.isCubeTexture||y.mapping===il)?(h===void 0&&(h=new Qt(new On(1,1,1),new ge({name:"BackgroundCubeMaterial",uniforms:sr(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ki.copy(_.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ib.makeRotationFromEuler(ki)),h.material.toneMapped=Xt.getTransfer(y.colorSpace)!==ie,(u!==y||d!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Qt(new sn(2,2),new ge({name:"BackgroundMaterial",uniforms:sr(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(y.colorSpace)!==ie,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,_){x.getRGB(zo,fg(i)),n.buffers.color.setClear(zo.r,zo.g,zo.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(a,l)},render:v,addToRenderList:g}}function Lb(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(b,S,U,P,W){let Z=!1;const D=u(P,U,S);r!==D&&(r=D,c(r.object)),Z=f(b,P,U,W),Z&&p(b,P,U,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,y(b,S,U,P),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,S,U){const P=U.wireframe===!0;let W=n[b.id];W===void 0&&(W={},n[b.id]=W);let Z=W[S.id];Z===void 0&&(Z={},W[S.id]=Z);let D=Z[P];return D===void 0&&(D=d(l()),Z[P]=D),D}function d(b){const S=[],U=[],P=[];for(let W=0;W<e;W++)S[W]=0,U[W]=0,P[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:U,attributeDivisors:P,object:b,attributes:{},index:null}}function f(b,S,U,P){const W=r.attributes,Z=S.attributes;let D=0;const nt=U.getAttributes();for(const q in nt)if(nt[q].location>=0){const K=W[q];let $=Z[q];if($===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&($=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&($=b.instanceColor)),K===void 0||K.attribute!==$||$&&K.data!==$.data)return!0;D++}return r.attributesNum!==D||r.index!==P}function p(b,S,U,P){const W={},Z=S.attributes;let D=0;const nt=U.getAttributes();for(const q in nt)if(nt[q].location>=0){let K=Z[q];K===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(K=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(K=b.instanceColor));const $={};$.attribute=K,K&&K.data&&($.data=K.data),W[q]=$,D++}r.attributes=W,r.attributesNum=D,r.index=P}function v(){const b=r.newAttributes;for(let S=0,U=b.length;S<U;S++)b[S]=0}function g(b){m(b,0)}function m(b,S){const U=r.newAttributes,P=r.enabledAttributes,W=r.attributeDivisors;U[b]=1,P[b]===0&&(i.enableVertexAttribArray(b),P[b]=1),W[b]!==S&&(i.vertexAttribDivisor(b,S),W[b]=S)}function x(){const b=r.newAttributes,S=r.enabledAttributes;for(let U=0,P=S.length;U<P;U++)S[U]!==b[U]&&(i.disableVertexAttribArray(U),S[U]=0)}function _(b,S,U,P,W,Z,D){D===!0?i.vertexAttribIPointer(b,S,U,W,Z):i.vertexAttribPointer(b,S,U,P,W,Z)}function y(b,S,U,P){v();const W=P.attributes,Z=U.getAttributes(),D=S.defaultAttributeValues;for(const nt in Z){const q=Z[nt];if(q.location>=0){let lt=W[nt];if(lt===void 0&&(nt==="instanceMatrix"&&b.instanceMatrix&&(lt=b.instanceMatrix),nt==="instanceColor"&&b.instanceColor&&(lt=b.instanceColor)),lt!==void 0){const K=lt.normalized,$=lt.itemSize,Q=t.get(lt);if(Q===void 0)continue;const it=Q.buffer,O=Q.type,Y=Q.bytesPerElement,rt=O===i.INT||O===i.UNSIGNED_INT||lt.gpuType===nu;if(lt.isInterleavedBufferAttribute){const tt=lt.data,ht=tt.stride,dt=lt.offset;if(tt.isInstancedInterleavedBuffer){for(let vt=0;vt<q.locationSize;vt++)m(q.location+vt,tt.meshPerAttribute);b.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let vt=0;vt<q.locationSize;vt++)g(q.location+vt);i.bindBuffer(i.ARRAY_BUFFER,it);for(let vt=0;vt<q.locationSize;vt++)_(q.location+vt,$/q.locationSize,O,K,ht*Y,(dt+$/q.locationSize*vt)*Y,rt)}else{if(lt.isInstancedBufferAttribute){for(let tt=0;tt<q.locationSize;tt++)m(q.location+tt,lt.meshPerAttribute);b.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let tt=0;tt<q.locationSize;tt++)g(q.location+tt);i.bindBuffer(i.ARRAY_BUFFER,it);for(let tt=0;tt<q.locationSize;tt++)_(q.location+tt,$/q.locationSize,O,K,$*Y,$/q.locationSize*tt*Y,rt)}}else if(D!==void 0){const K=D[nt];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(q.location,K);break;case 3:i.vertexAttrib3fv(q.location,K);break;case 4:i.vertexAttrib4fv(q.location,K);break;default:i.vertexAttrib1fv(q.location,K)}}}}x()}function R(){I();for(const b in n){const S=n[b];for(const U in S){const P=S[U];for(const W in P)h(P[W].object),delete P[W];delete S[U]}delete n[b]}}function A(b){if(n[b.id]===void 0)return;const S=n[b.id];for(const U in S){const P=S[U];for(const W in P)h(P[W].object),delete P[W];delete S[U]}delete n[b.id]}function T(b){for(const S in n){const U=n[S];if(U[b.id]===void 0)continue;const P=U[b.id];for(const W in P)h(P[W].object),delete P[W];delete U[b.id]}}function I(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function Pb(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let p=0;for(let v=0;v<u;v++)p+=h[v]*d[v];e.update(p,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Db(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Cn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const I=T===nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==li&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ii&&!I)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=p>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:R,maxSamples:A}}function Ub(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Si,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{const x=r?0:n,_=x*4;let y=m.clippingState||null;l.value=y,y=h(p,d,_,f);for(let R=0;R!==_;++R)y[R]=e[R];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=l.value,p!==!0||g===null){const m=f+v*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,y=f;_!==v;++_,y+=4)o.copy(u[_]).applyMatrix4(x,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function Bb(i){let t=new WeakMap;function e(o,a){return a===Na?o.mapping=Js:a===ih&&(o.mapping=tr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Na||a===ih)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Q_(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class fu extends uu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Os=4,Gd=[.125,.215,.35,.446,.526,.582],qi=20,Vl=new fu,Wd=new Ft;let Gl=null,Wl=0,$l=0,Ql=!1;const Wi=(1+Math.sqrt(5))/2,Ts=1/Wi,$d=[new k(-Wi,Ts,0),new k(Wi,Ts,0),new k(-Ts,0,Wi),new k(Ts,0,Wi),new k(0,Wi,-Ts),new k(0,Wi,Ts),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Oa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Gl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Gl,Wl,$l),this._renderer.xr.enabled=Ql,t.scissorTest=!1,Ho(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Js||t.mapping===tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ee,minFilter:Ee,generateMipmaps:!1,type:nn,format:Cn,colorSpace:fs,depthBuffer:!1},s=Qd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qd(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nb(r)),this._blurMaterial=Fb(r,t,e)}return s}_compileMaterial(t){const e=new Qt(this._lodPlanes[0],t);this._renderer.compile(e,Vl)}_sceneToCubeUV(t,e,n,s){const a=new $e(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Wd),h.toneMapping=Ri,h.autoClear=!1;const f=new hi({name:"PMREM.Background",side:ve,depthWrite:!1,depthTest:!1}),p=new Qt(new On,f);let v=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,v=!0):(f.color.copy(Wd),v=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):x===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const _=this._cubeSize;Ho(s,x*_,m>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Js||t.mapping===tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Qt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ho(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Vl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$d[(s-r-1)%$d.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Qt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*qi-1),v=r/p,g=isFinite(r)?1+Math.floor(h*v):qi;g>qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${qi}`);const m=[];let x=0;for(let T=0;T<qi;++T){const I=T/v,w=Math.exp(-I*I/2);m.push(w),T===0?x+=w:T<g&&(x+=2*w)}for(let T=0;T<m.length;T++)m[T]=m[T]/x;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=p,d.mipInt.value=_-n;const y=this._sizeLods[s],R=3*y*(s>_-Os?s-_+Os:0),A=4*(this._cubeSize-y);Ho(e,R,A,3*y,2*y),l.setRenderTarget(e),l.render(u,Vl)}}function Nb(i){const t=[],e=[],n=[];let s=i;const r=i-Os+1+Gd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Os?l=Gd[o-i+Os-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,v=3,g=2,m=1,x=new Float32Array(v*p*f),_=new Float32Array(g*p*f),y=new Float32Array(m*p*f);for(let A=0;A<f;A++){const T=A%3*2/3-1,I=A>2?0:-1,w=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];x.set(w,v*p*A),_.set(d,g*p*A);const b=[A,A,A,A,A,A];y.set(b,m*p*A)}const R=new vn;R.setAttribute("position",new pn(x,v)),R.setAttribute("uv",new pn(_,g)),R.setAttribute("faceIndex",new pn(y,m)),t.push(R),s>Os&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Qd(i,t,e){const n=new Ne(i,t,e);return n.texture.mapping=il,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ho(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Fb(i,t,e){const n=new Float32Array(qi),s=new k(0,1,0);return new ge({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function qd(){return new ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Kd(){return new ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function pu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kb(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Na||l===ih,h=l===Js||l===tr;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Oa(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Oa(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ob(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Nr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function zb(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const p in d.attributes)t.remove(d.attributes[p]);for(const p in d.morphAttributes){const v=d.morphAttributes[p];for(let g=0,m=v.length;g<m;g++)t.remove(v[g])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const p in f){const v=f[p];for(let g=0,m=v.length;g<m;g++)t.update(v[g],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,p=u.attributes.position;let v=0;if(f!==null){const x=f.array;v=f.version;for(let _=0,y=x.length;_<y;_+=3){const R=x[_+0],A=x[_+1],T=x[_+2];d.push(R,A,A,T,T,R)}}else if(p!==void 0){const x=p.array;v=p.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const R=_+0,A=_+1,T=_+2;d.push(R,A,A,T,T,R)}}else return;const g=new(ag(d)?dg:ug)(d,1);g.version=v;const m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Hb(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,d*o,p),e.update(f,n,p))}function h(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,n,1)}function u(d,f,p,v){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,p);let m=0;for(let x=0;x<p;x++)m+=f[x]*v[x];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Vb(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Gb(i,t,e){const n=new WeakMap,s=new Jt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let w=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let _=0;f===!0&&(_=1),p===!0&&(_=2),v===!0&&(_=3);let y=a.attributes.position.count*_,R=1;y>t.maxTextureSize&&(R=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const A=new Float32Array(y*R*4*u),T=new cg(A,y,R,u);T.type=ii,T.needsUpdate=!0;const I=_*4;for(let b=0;b<u;b++){const S=g[b],U=m[b],P=x[b],W=y*R*4*b;for(let Z=0;Z<S.count;Z++){const D=Z*I;f===!0&&(s.fromBufferAttribute(S,Z),A[W+D+0]=s.x,A[W+D+1]=s.y,A[W+D+2]=s.z,A[W+D+3]=0),p===!0&&(s.fromBufferAttribute(U,Z),A[W+D+4]=s.x,A[W+D+5]=s.y,A[W+D+6]=s.z,A[W+D+7]=0),v===!0&&(s.fromBufferAttribute(P,Z),A[W+D+8]=s.x,A[W+D+9]=s.y,A[W+D+10]=s.z,A[W+D+11]=P.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new kt(y,R)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Wb(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class mu extends Be{constructor(t,e,n,s,r,o,a,l,c,h=Xi){if(h!==Xi&&h!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xi&&(n=is),n===void 0&&h===ir&&(n=nr),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const gg=new Be,Yd=new mu(1,1),vg=new cg,_g=new T_,yg=new pg,Xd=[],jd=[],Zd=new Float32Array(16),Jd=new Float32Array(9),tf=new Float32Array(4);function mr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Xd[s];if(r===void 0&&(r=new Float32Array(s),Xd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ol(i,t){let e=jd[t];e===void 0&&(e=new Int32Array(t),jd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $b(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Qb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function qb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function Kb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function Yb(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(_e(e,n))return;tf.set(n),i.uniformMatrix2fv(this.addr,!1,tf),ye(e,n)}}function Xb(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(_e(e,n))return;Jd.set(n),i.uniformMatrix3fv(this.addr,!1,Jd),ye(e,n)}}function jb(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(_e(e,n))return;Zd.set(n),i.uniformMatrix4fv(this.addr,!1,Zd),ye(e,n)}}function Zb(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Jb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function tw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function ew(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function nw(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function iw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function sw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function rw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function ow(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Yd.compareFunction=og,r=Yd):r=gg,e.setTexture2D(t||r,s)}function aw(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||_g,s)}function lw(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||yg,s)}function cw(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||vg,s)}function hw(i){switch(i){case 5126:return $b;case 35664:return Qb;case 35665:return qb;case 35666:return Kb;case 35674:return Yb;case 35675:return Xb;case 35676:return jb;case 5124:case 35670:return Zb;case 35667:case 35671:return Jb;case 35668:case 35672:return tw;case 35669:case 35673:return ew;case 5125:return nw;case 36294:return iw;case 36295:return sw;case 36296:return rw;case 35678:case 36198:case 36298:case 36306:case 35682:return ow;case 35679:case 36299:case 36307:return aw;case 35680:case 36300:case 36308:case 36293:return lw;case 36289:case 36303:case 36311:case 36292:return cw}}function uw(i,t){i.uniform1fv(this.addr,t)}function dw(i,t){const e=mr(t,this.size,2);i.uniform2fv(this.addr,e)}function fw(i,t){const e=mr(t,this.size,3);i.uniform3fv(this.addr,e)}function pw(i,t){const e=mr(t,this.size,4);i.uniform4fv(this.addr,e)}function mw(i,t){const e=mr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function gw(i,t){const e=mr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function vw(i,t){const e=mr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _w(i,t){i.uniform1iv(this.addr,t)}function yw(i,t){i.uniform2iv(this.addr,t)}function xw(i,t){i.uniform3iv(this.addr,t)}function bw(i,t){i.uniform4iv(this.addr,t)}function ww(i,t){i.uniform1uiv(this.addr,t)}function Mw(i,t){i.uniform2uiv(this.addr,t)}function Sw(i,t){i.uniform3uiv(this.addr,t)}function Ew(i,t){i.uniform4uiv(this.addr,t)}function Aw(i,t,e){const n=this.cache,s=t.length,r=ol(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||gg,r[o])}function Cw(i,t,e){const n=this.cache,s=t.length,r=ol(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||_g,r[o])}function Tw(i,t,e){const n=this.cache,s=t.length,r=ol(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||yg,r[o])}function Iw(i,t,e){const n=this.cache,s=t.length,r=ol(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||vg,r[o])}function Rw(i){switch(i){case 5126:return uw;case 35664:return dw;case 35665:return fw;case 35666:return pw;case 35674:return mw;case 35675:return gw;case 35676:return vw;case 5124:case 35670:return _w;case 35667:case 35671:return yw;case 35668:case 35672:return xw;case 35669:case 35673:return bw;case 5125:return ww;case 36294:return Mw;case 36295:return Sw;case 36296:return Ew;case 35678:case 36198:case 36298:case 36306:case 35682:return Aw;case 35679:case 36299:case 36307:return Cw;case 35680:case 36300:case 36308:case 36293:return Tw;case 36289:case 36303:case 36311:case 36292:return Iw}}class Lw{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=hw(e.type)}}class Pw{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Rw(e.type)}}class Dw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ql=/(\w+)(\])?(\[|\.)?/g;function ef(i,t){i.seq.push(t),i.map[t.id]=t}function Uw(i,t,e){const n=i.name,s=n.length;for(ql.lastIndex=0;;){const r=ql.exec(n),o=ql.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ef(e,c===void 0?new Lw(a,i,t):new Pw(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Dw(a),ef(e,u)),e=u}}}class Ra{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Uw(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function nf(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Bw=37297;let Nw=0;function Fw(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const sf=new $t;function kw(i){Xt._getMatrix(sf,Xt.workingColorSpace,i);const t=`mat3( ${sf.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(i)){case sl:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function rf(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Fw(i.getShaderSource(t),o)}else return s}function Ow(i,t){const e=kw(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function zw(i,t){let e;switch(t){case Gm:e="Linear";break;case Wm:e="Reinhard";break;case $m:e="Cineon";break;case eu:e="ACESFilmic";break;case Qm:e="AgX";break;case qm:e="Neutral";break;case $v:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Vo=new k;function Hw(){Xt.getLuminanceCoefficients(Vo);const i=Vo.x.toFixed(4),t=Vo.y.toFixed(4),e=Vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fr).join(`
`)}function Gw(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ww(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Fr(i){return i!==""}function of(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function af(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $w=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ph(i){return i.replace($w,qw)}const Qw=new Map;function qw(i,t){let e=Kt[t];if(e===void 0){const n=Qw.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ph(e)}const Kw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lf(i){return i.replace(Kw,Yw)}function Yw(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Xw(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Hm?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Sv?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xn&&(t="SHADOWMAP_TYPE_VSM"),t}function jw(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Js:case tr:t="ENVMAP_TYPE_CUBE";break;case il:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Zw(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case tr:t="ENVMAP_MODE_REFRACTION";break}return t}function Jw(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vm:t="ENVMAP_BLENDING_MULTIPLY";break;case Gv:t="ENVMAP_BLENDING_MIX";break;case Wv:t="ENVMAP_BLENDING_ADD";break}return t}function tM(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function eM(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Xw(e),c=jw(e),h=Zw(e),u=Jw(e),d=tM(e),f=Vw(e),p=Gw(r),v=s.createProgram();let g,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Fr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Fr).join(`
`),m.length>0&&(m+=`
`)):(g=[cf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),m=[cf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ri?"#define TONE_MAPPING":"",e.toneMapping!==Ri?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Ri?zw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,Ow("linearToOutputTexel",e.outputColorSpace),Hw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fr).join(`
`)),o=Ph(o),o=of(o,e),o=af(o,e),a=Ph(a),a=of(a,e),a=af(a,e),o=lf(o),a=lf(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===bd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=x+g+o,y=x+m+a,R=nf(s,s.VERTEX_SHADER,_),A=nf(s,s.FRAGMENT_SHADER,y);s.attachShader(v,R),s.attachShader(v,A),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(S){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(v).trim(),P=s.getShaderInfoLog(R).trim(),W=s.getShaderInfoLog(A).trim();let Z=!0,D=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,A);else{const nt=rf(s,R,"vertex"),q=rf(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+U+`
`+nt+`
`+q)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(P===""||W==="")&&(D=!1);D&&(S.diagnostics={runnable:Z,programLog:U,vertexShader:{log:P,prefix:g},fragmentShader:{log:W,prefix:m}})}s.deleteShader(R),s.deleteShader(A),I=new Ra(s,v),w=Ww(s,v)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,Bw)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Nw++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=A,this}let nM=0;class iM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new sM(t),e.set(t,n)),n}}class sM{constructor(t){this.id=nM++,this.code=t,this.usedTimes=0}}function rM(i,t,e,n,s,r,o){const a=new hu,l=new iM,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,b,S,U,P){const W=U.fog,Z=P.geometry,D=w.isMeshStandardMaterial?U.environment:null,nt=(w.isMeshStandardMaterial?e:t).get(w.envMap||D),q=nt&&nt.mapping===il?nt.image.height:null,lt=p[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const K=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,$=K!==void 0?K.length:0;let Q=0;Z.morphAttributes.position!==void 0&&(Q=1),Z.morphAttributes.normal!==void 0&&(Q=2),Z.morphAttributes.color!==void 0&&(Q=3);let it,O,Y,rt;if(lt){const ne=Pn[lt];it=ne.vertexShader,O=ne.fragmentShader}else it=w.vertexShader,O=w.fragmentShader,l.update(w),Y=l.getVertexShaderID(w),rt=l.getFragmentShaderID(w);const tt=i.getRenderTarget(),ht=i.state.buffers.depth.getReversed(),dt=P.isInstancedMesh===!0,vt=P.isBatchedMesh===!0,It=!!w.map,Et=!!w.matcap,zt=!!nt,B=!!w.aoMap,Rt=!!w.lightMap,mt=!!w.bumpMap,Lt=!!w.normalMap,L=!!w.displacementMap,G=!!w.emissiveMap,N=!!w.metalnessMap,E=!!w.roughnessMap,M=w.anisotropy>0,F=w.clearcoat>0,J=w.dispersion>0,at=w.iridescence>0,st=w.sheen>0,Bt=w.transmission>0,yt=M&&!!w.anisotropyMap,At=F&&!!w.clearcoatMap,jt=F&&!!w.clearcoatNormalMap,ft=F&&!!w.clearcoatRoughnessMap,Ct=at&&!!w.iridescenceMap,Ot=at&&!!w.iridescenceThicknessMap,Ht=st&&!!w.sheenColorMap,Tt=st&&!!w.sheenRoughnessMap,Yt=!!w.specularMap,qt=!!w.specularColorMap,le=!!w.specularIntensityMap,z=Bt&&!!w.transmissionMap,_t=Bt&&!!w.thicknessMap,et=!!w.gradientMap,ot=!!w.alphaMap,Mt=w.alphaTest>0,xt=!!w.alphaHash,Gt=!!w.extensions;let de=Ri;w.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(de=i.toneMapping);const Ae={shaderID:lt,shaderType:w.type,shaderName:w.name,vertexShader:it,fragmentShader:O,defines:w.defines,customVertexShaderID:Y,customFragmentShaderID:rt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:vt,batchingColor:vt&&P._colorsTexture!==null,instancing:dt,instancingColor:dt&&P.instanceColor!==null,instancingMorph:dt&&P.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:fs,alphaToCoverage:!!w.alphaToCoverage,map:It,matcap:Et,envMap:zt,envMapMode:zt&&nt.mapping,envMapCubeUVHeight:q,aoMap:B,lightMap:Rt,bumpMap:mt,normalMap:Lt,displacementMap:d&&L,emissiveMap:G,normalMapObjectSpace:Lt&&w.normalMapType===Yv,normalMapTangentSpace:Lt&&w.normalMapType===rg,metalnessMap:N,roughnessMap:E,anisotropy:M,anisotropyMap:yt,clearcoat:F,clearcoatMap:At,clearcoatNormalMap:jt,clearcoatRoughnessMap:ft,dispersion:J,iridescence:at,iridescenceMap:Ct,iridescenceThicknessMap:Ot,sheen:st,sheenColorMap:Ht,sheenRoughnessMap:Tt,specularMap:Yt,specularColorMap:qt,specularIntensityMap:le,transmission:Bt,transmissionMap:z,thicknessMap:_t,gradientMap:et,opaque:w.transparent===!1&&w.blending===Ws&&w.alphaToCoverage===!1,alphaMap:ot,alphaTest:Mt,alphaHash:xt,combine:w.combine,mapUv:It&&v(w.map.channel),aoMapUv:B&&v(w.aoMap.channel),lightMapUv:Rt&&v(w.lightMap.channel),bumpMapUv:mt&&v(w.bumpMap.channel),normalMapUv:Lt&&v(w.normalMap.channel),displacementMapUv:L&&v(w.displacementMap.channel),emissiveMapUv:G&&v(w.emissiveMap.channel),metalnessMapUv:N&&v(w.metalnessMap.channel),roughnessMapUv:E&&v(w.roughnessMap.channel),anisotropyMapUv:yt&&v(w.anisotropyMap.channel),clearcoatMapUv:At&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:jt&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&v(w.sheenRoughnessMap.channel),specularMapUv:Yt&&v(w.specularMap.channel),specularColorMapUv:qt&&v(w.specularColorMap.channel),specularIntensityMapUv:le&&v(w.specularIntensityMap.channel),transmissionMapUv:z&&v(w.transmissionMap.channel),thicknessMapUv:_t&&v(w.thicknessMap.channel),alphaMapUv:ot&&v(w.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Lt||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!Z.attributes.uv&&(It||ot),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ht,skinning:P.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Q,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&S.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,decodeVideoTexture:It&&w.map.isVideoTexture===!0&&Xt.getTransfer(w.map.colorSpace)===ie,decodeVideoTextureEmissive:G&&w.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(w.emissiveMap.colorSpace)===ie,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===dn,flipSided:w.side===ve,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Gt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&w.extensions.multiDraw===!0||vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function m(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const S in w.defines)b.push(S),b.push(w.defines[S]);return w.isRawShaderMaterial===!1&&(x(b,w),_(b,w),b.push(i.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function x(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function _(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){const b=p[w.type];let S;if(b){const U=Pn[b];S=rr.clone(U.uniforms)}else S=w.uniforms;return S}function R(w,b){let S;for(let U=0,P=h.length;U<P;U++){const W=h[U];if(W.cacheKey===b){S=W,++S.usedTimes;break}}return S===void 0&&(S=new eM(i,b,w,r),h.push(S)),S}function A(w){if(--w.usedTimes===0){const b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function T(w){l.remove(w)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:R,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:I}}function oM(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function aM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function hf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function uf(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,p,v,g){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:v,group:g},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=v,m.group=g),t++,m}function a(u,d,f,p,v,g){const m=o(u,d,f,p,v,g);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(u,d,f,p,v,g){const m=o(u,d,f,p,v,g);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||aM),n.length>1&&n.sort(d||hf),s.length>1&&s.sort(d||hf)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function lM(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new uf,i.set(n,[o])):s>=r.length?(o=new uf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function cM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Ft};break;case"SpotLight":e={position:new k,direction:new k,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function hM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let uM=0;function dM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function fM(i){const t=new cM,e=hM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const s=new k,r=new ae,o=new ae;function a(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,x=0,_=0,y=0,R=0,A=0,T=0;c.sort(dM);for(let w=0,b=c.length;w<b;w++){const S=c[w],U=S.color,P=S.intensity,W=S.distance,Z=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=U.r*P,u+=U.g*P,d+=U.b*P;else if(S.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(S.sh.coefficients[D],P);T++}else if(S.isDirectionalLight){const D=t.get(S);if(D.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const nt=S.shadow,q=e.get(S);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=S.shadow.matrix,x++}n.directional[f]=D,f++}else if(S.isSpotLight){const D=t.get(S);D.position.setFromMatrixPosition(S.matrixWorld),D.color.copy(U).multiplyScalar(P),D.distance=W,D.coneCos=Math.cos(S.angle),D.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),D.decay=S.decay,n.spot[v]=D;const nt=S.shadow;if(S.map&&(n.spotLightMap[R]=S.map,R++,nt.updateMatrices(S),S.castShadow&&A++),n.spotLightMatrix[v]=nt.matrix,S.castShadow){const q=e.get(S);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,n.spotShadow[v]=q,n.spotShadowMap[v]=Z,y++}v++}else if(S.isRectAreaLight){const D=t.get(S);D.color.copy(U).multiplyScalar(P),D.halfWidth.set(S.width*.5,0,0),D.halfHeight.set(0,S.height*.5,0),n.rectArea[g]=D,g++}else if(S.isPointLight){const D=t.get(S);if(D.color.copy(S.color).multiplyScalar(S.intensity),D.distance=S.distance,D.decay=S.decay,S.castShadow){const nt=S.shadow,q=e.get(S);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,q.shadowCameraNear=nt.camera.near,q.shadowCameraFar=nt.camera.far,n.pointShadow[p]=q,n.pointShadowMap[p]=Z,n.pointShadowMatrix[p]=S.shadow.matrix,_++}n.point[p]=D,p++}else if(S.isHemisphereLight){const D=t.get(S);D.skyColor.copy(S.color).multiplyScalar(P),D.groundColor.copy(S.groundColor).multiplyScalar(P),n.hemi[m]=D,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==p||I.spotLength!==v||I.rectAreaLength!==g||I.hemiLength!==m||I.numDirectionalShadows!==x||I.numPointShadows!==_||I.numSpotShadows!==y||I.numSpotMaps!==R||I.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,I.directionalLength=f,I.pointLength=p,I.spotLength=v,I.rectAreaLength=g,I.hemiLength=m,I.numDirectionalShadows=x,I.numPointShadows=_,I.numSpotShadows=y,I.numSpotMaps=R,I.numLightProbes=T,n.version=uM++)}function l(c,h){let u=0,d=0,f=0,p=0,v=0;const g=h.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const _=c[m];if(_.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(_.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(_.isRectAreaLight){const y=n.rectArea[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(_.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:n}}function df(i){const t=new fM(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function pM(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new df(i),t.set(s,[a])):r>=o.length?(a=new df(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class mM extends pr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=qv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gM extends pr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const vM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_M=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yM(i,t,e){let n=new du;const s=new kt,r=new kt,o=new Jt,a=new mM({depthPacking:Kv}),l=new gM,c={},h=e.maxTextureSize,u={[Fn]:ve,[ve]:Fn,[dn]:dn},d=new ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:vM,fragmentShader:_M}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new vn;p.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Qt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hm;let m=this.type;this.render=function(A,T,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const w=i.getRenderTarget(),b=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Nn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const P=m!==Xn&&this.type===Xn,W=m===Xn&&this.type!==Xn;for(let Z=0,D=A.length;Z<D;Z++){const nt=A[Z],q=nt.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const lt=q.getFrameExtents();if(s.multiply(lt),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/lt.x),s.x=r.x*lt.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/lt.y),s.y=r.y*lt.y,q.mapSize.y=r.y)),q.map===null||P===!0||W===!0){const $=this.type!==Xn?{minFilter:en,magFilter:en}:{};q.map!==null&&q.map.dispose(),q.map=new Ne(s.x,s.y,$),q.map.texture.name=nt.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const K=q.getViewportCount();for(let $=0;$<K;$++){const Q=q.getViewport($);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),U.viewport(o),q.updateMatrices(nt,$),n=q.getFrustum(),y(T,I,q.camera,nt,this.type)}q.isPointLightShadow!==!0&&this.type===Xn&&x(q,I),q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(w,b,S)};function x(A,T){const I=t.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ne(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,I,d,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,I,f,v,null)}function _(A,T,I,w){let b=null;const S=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(S!==void 0)b=S;else if(b=I.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=b.uuid,P=T.uuid;let W=c[U];W===void 0&&(W={},c[U]=W);let Z=W[P];Z===void 0&&(Z=b.clone(),W[P]=Z,T.addEventListener("dispose",R)),b=Z}if(b.visible=T.visible,b.wireframe=T.wireframe,w===Xn?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:u[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const U=i.properties.get(b);U.light=I}return b}function y(A,T,I,w,b){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===Xn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const P=t.update(A),W=A.material;if(Array.isArray(W)){const Z=P.groups;for(let D=0,nt=Z.length;D<nt;D++){const q=Z[D],lt=W[q.materialIndex];if(lt&&lt.visible){const K=_(A,lt,w,b);A.onBeforeShadow(i,A,T,I,P,K,q),i.renderBufferDirect(I,null,P,K,A,q),A.onAfterShadow(i,A,T,I,P,K,q)}}}else if(W.visible){const Z=_(A,W,w,b);A.onBeforeShadow(i,A,T,I,P,Z,null),i.renderBufferDirect(I,null,P,Z,A,null),A.onAfterShadow(i,A,T,I,P,Z,null)}}const U=A.children;for(let P=0,W=U.length;P<W;P++)y(U[P],T,I,w,b)}function R(A){A.target.removeEventListener("dispose",R);for(const I in c){const w=c[I],b=A.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}const xM={[Xc]:jc,[Zc]:eh,[Jc]:nh,[Zs]:th,[jc]:Xc,[eh]:Zc,[nh]:Jc,[th]:Zs};function bM(i,t){function e(){let z=!1;const _t=new Jt;let et=null;const ot=new Jt(0,0,0,0);return{setMask:function(Mt){et!==Mt&&!z&&(i.colorMask(Mt,Mt,Mt,Mt),et=Mt)},setLocked:function(Mt){z=Mt},setClear:function(Mt,xt,Gt,de,Ae){Ae===!0&&(Mt*=de,xt*=de,Gt*=de),_t.set(Mt,xt,Gt,de),ot.equals(_t)===!1&&(i.clearColor(Mt,xt,Gt,de),ot.copy(_t))},reset:function(){z=!1,et=null,ot.set(-1,0,0,0)}}}function n(){let z=!1,_t=!1,et=null,ot=null,Mt=null;return{setReversed:function(xt){if(_t!==xt){const Gt=t.get("EXT_clip_control");_t?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);const de=Mt;Mt=null,this.setClear(de)}_t=xt},getReversed:function(){return _t},setTest:function(xt){xt?tt(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(xt){et!==xt&&!z&&(i.depthMask(xt),et=xt)},setFunc:function(xt){if(_t&&(xt=xM[xt]),ot!==xt){switch(xt){case Xc:i.depthFunc(i.NEVER);break;case jc:i.depthFunc(i.ALWAYS);break;case Zc:i.depthFunc(i.LESS);break;case Zs:i.depthFunc(i.LEQUAL);break;case Jc:i.depthFunc(i.EQUAL);break;case th:i.depthFunc(i.GEQUAL);break;case eh:i.depthFunc(i.GREATER);break;case nh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ot=xt}},setLocked:function(xt){z=xt},setClear:function(xt){Mt!==xt&&(_t&&(xt=1-xt),i.clearDepth(xt),Mt=xt)},reset:function(){z=!1,et=null,ot=null,Mt=null,_t=!1}}}function s(){let z=!1,_t=null,et=null,ot=null,Mt=null,xt=null,Gt=null,de=null,Ae=null;return{setTest:function(ne){z||(ne?tt(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(ne){_t!==ne&&!z&&(i.stencilMask(ne),_t=ne)},setFunc:function(ne,_n,zn){(et!==ne||ot!==_n||Mt!==zn)&&(i.stencilFunc(ne,_n,zn),et=ne,ot=_n,Mt=zn)},setOp:function(ne,_n,zn){(xt!==ne||Gt!==_n||de!==zn)&&(i.stencilOp(ne,_n,zn),xt=ne,Gt=_n,de=zn)},setLocked:function(ne){z=ne},setClear:function(ne){Ae!==ne&&(i.clearStencil(ne),Ae=ne)},reset:function(){z=!1,_t=null,et=null,ot=null,Mt=null,xt=null,Gt=null,de=null,Ae=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],p=null,v=!1,g=null,m=null,x=null,_=null,y=null,R=null,A=null,T=new Ft(0,0,0),I=0,w=!1,b=null,S=null,U=null,P=null,W=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,nt=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(q)[1]),D=nt>=1):q.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),D=nt>=2);let lt=null,K={};const $=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),it=new Jt().fromArray($),O=new Jt().fromArray(Q);function Y(z,_t,et,ot){const Mt=new Uint8Array(4),xt=i.createTexture();i.bindTexture(z,xt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<et;Gt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,ot,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(_t+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return xt}const rt={};rt[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),rt[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),rt[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),tt(i.DEPTH_TEST),o.setFunc(Zs),mt(!1),Lt(gd),tt(i.CULL_FACE),B(Nn);function tt(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function ht(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function dt(z,_t){return u[z]!==_t?(i.bindFramebuffer(z,_t),u[z]=_t,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=_t),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function vt(z,_t){let et=f,ot=!1;if(z){et=d.get(_t),et===void 0&&(et=[],d.set(_t,et));const Mt=z.textures;if(et.length!==Mt.length||et[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,Gt=Mt.length;xt<Gt;xt++)et[xt]=i.COLOR_ATTACHMENT0+xt;et.length=Mt.length,ot=!0}}else et[0]!==i.BACK&&(et[0]=i.BACK,ot=!0);ot&&i.drawBuffers(et)}function It(z){return p!==z?(i.useProgram(z),p=z,!0):!1}const Et={[Qi]:i.FUNC_ADD,[Av]:i.FUNC_SUBTRACT,[Cv]:i.FUNC_REVERSE_SUBTRACT};Et[Tv]=i.MIN,Et[Iv]=i.MAX;const zt={[Rv]:i.ZERO,[Lv]:i.ONE,[Pv]:i.SRC_COLOR,[Kc]:i.SRC_ALPHA,[kv]:i.SRC_ALPHA_SATURATE,[Nv]:i.DST_COLOR,[Uv]:i.DST_ALPHA,[Dv]:i.ONE_MINUS_SRC_COLOR,[Yc]:i.ONE_MINUS_SRC_ALPHA,[Fv]:i.ONE_MINUS_DST_COLOR,[Bv]:i.ONE_MINUS_DST_ALPHA,[Ov]:i.CONSTANT_COLOR,[zv]:i.ONE_MINUS_CONSTANT_COLOR,[Hv]:i.CONSTANT_ALPHA,[Vv]:i.ONE_MINUS_CONSTANT_ALPHA};function B(z,_t,et,ot,Mt,xt,Gt,de,Ae,ne){if(z===Nn){v===!0&&(ht(i.BLEND),v=!1);return}if(v===!1&&(tt(i.BLEND),v=!0),z!==Ev){if(z!==g||ne!==w){if((m!==Qi||y!==Qi)&&(i.blendEquation(i.FUNC_ADD),m=Qi,y=Qi),ne)switch(z){case Ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case js:i.blendFunc(i.ONE,i.ONE);break;case vd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _d:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case js:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case vd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _d:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}x=null,_=null,R=null,A=null,T.set(0,0,0),I=0,g=z,w=ne}return}Mt=Mt||_t,xt=xt||et,Gt=Gt||ot,(_t!==m||Mt!==y)&&(i.blendEquationSeparate(Et[_t],Et[Mt]),m=_t,y=Mt),(et!==x||ot!==_||xt!==R||Gt!==A)&&(i.blendFuncSeparate(zt[et],zt[ot],zt[xt],zt[Gt]),x=et,_=ot,R=xt,A=Gt),(de.equals(T)===!1||Ae!==I)&&(i.blendColor(de.r,de.g,de.b,Ae),T.copy(de),I=Ae),g=z,w=!1}function Rt(z,_t){z.side===dn?ht(i.CULL_FACE):tt(i.CULL_FACE);let et=z.side===ve;_t&&(et=!et),mt(et),z.blending===Ws&&z.transparent===!1?B(Nn):B(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const ot=z.stencilWrite;a.setTest(ot),ot&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),G(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(z){b!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),b=z)}function Lt(z){z!==wv?(tt(i.CULL_FACE),z!==S&&(z===gd?i.cullFace(i.BACK):z===Mv?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),S=z}function L(z){z!==U&&(D&&i.lineWidth(z),U=z)}function G(z,_t,et){z?(tt(i.POLYGON_OFFSET_FILL),(P!==_t||W!==et)&&(i.polygonOffset(_t,et),P=_t,W=et)):ht(i.POLYGON_OFFSET_FILL)}function N(z){z?tt(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function E(z){z===void 0&&(z=i.TEXTURE0+Z-1),lt!==z&&(i.activeTexture(z),lt=z)}function M(z,_t,et){et===void 0&&(lt===null?et=i.TEXTURE0+Z-1:et=lt);let ot=K[et];ot===void 0&&(ot={type:void 0,texture:void 0},K[et]=ot),(ot.type!==z||ot.texture!==_t)&&(lt!==et&&(i.activeTexture(et),lt=et),i.bindTexture(z,_t||rt[z]),ot.type=z,ot.texture=_t)}function F(){const z=K[lt];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function at(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function st(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Bt(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function yt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function At(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function jt(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ft(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ct(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ot(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ht(z){it.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),it.copy(z))}function Tt(z){O.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),O.copy(z))}function Yt(z,_t){let et=c.get(_t);et===void 0&&(et=new WeakMap,c.set(_t,et));let ot=et.get(z);ot===void 0&&(ot=i.getUniformBlockIndex(_t,z.name),et.set(z,ot))}function qt(z,_t){const ot=c.get(_t).get(z);l.get(_t)!==ot&&(i.uniformBlockBinding(_t,ot,z.__bindingPointIndex),l.set(_t,ot))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},lt=null,K={},u={},d=new WeakMap,f=[],p=null,v=!1,g=null,m=null,x=null,_=null,y=null,R=null,A=null,T=new Ft(0,0,0),I=0,w=!1,b=null,S=null,U=null,P=null,W=null,it.set(0,0,i.canvas.width,i.canvas.height),O.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:tt,disable:ht,bindFramebuffer:dt,drawBuffers:vt,useProgram:It,setBlending:B,setMaterial:Rt,setFlipSided:mt,setCullFace:Lt,setLineWidth:L,setPolygonOffset:G,setScissorTest:N,activeTexture:E,bindTexture:M,unbindTexture:F,compressedTexImage2D:J,compressedTexImage3D:at,texImage2D:Ct,texImage3D:Ot,updateUBOMapping:Yt,uniformBlockBinding:qt,texStorage2D:jt,texStorage3D:ft,texSubImage2D:st,texSubImage3D:Bt,compressedTexSubImage2D:yt,compressedTexSubImage3D:At,scissor:Ht,viewport:Tt,reset:le}}function ff(i,t,e,n){const s=wM(n);switch(e){case Zm:return i*t;case tg:return i*t;case eg:return i*t*2;case ng:return i*t/s.components*s.byteLength;case ru:return i*t/s.components*s.byteLength;case ig:return i*t*2/s.components*s.byteLength;case ou:return i*t*2/s.components*s.byteLength;case Jm:return i*t*3/s.components*s.byteLength;case Cn:return i*t*4/s.components*s.byteLength;case au:return i*t*4/s.components*s.byteLength;case Ea:case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ca:case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ah:case ch:return Math.max(i,16)*Math.max(t,8)/4;case oh:case lh:return Math.max(i,8)*Math.max(t,8)/2;case hh:case uh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case dh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ph:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case mh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case gh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case vh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case _h:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case yh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case xh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case bh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case wh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Mh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Sh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Eh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ah:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ia:case Ch:case Th:return Math.ceil(i/4)*Math.ceil(t/4)*16;case sg:case Ih:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Rh:case Lh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wM(i){switch(i){case li:case Ym:return{byteLength:1,components:1};case er:case Xm:case nn:return{byteLength:2,components:1};case iu:case su:return{byteLength:2,components:4};case is:case nu:case ii:return{byteLength:4,components:1};case jm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function MM(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new kt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(E,M){return f?new OffscreenCanvas(E,M):ka("canvas")}function v(E,M,F){let J=1;const at=N(E);if((at.width>F||at.height>F)&&(J=F/Math.max(at.width,at.height)),J<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const st=Math.floor(J*at.width),Bt=Math.floor(J*at.height);u===void 0&&(u=p(st,Bt));const yt=M?p(st,Bt):u;return yt.width=st,yt.height=Bt,yt.getContext("2d").drawImage(E,0,0,st,Bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+st+"x"+Bt+")."),yt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),E;return E}function g(E){return E.generateMipmaps}function m(E){i.generateMipmap(E)}function x(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(E,M,F,J,at=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let st=M;if(M===i.RED&&(F===i.FLOAT&&(st=i.R32F),F===i.HALF_FLOAT&&(st=i.R16F),F===i.UNSIGNED_BYTE&&(st=i.R8)),M===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(st=i.R8UI),F===i.UNSIGNED_SHORT&&(st=i.R16UI),F===i.UNSIGNED_INT&&(st=i.R32UI),F===i.BYTE&&(st=i.R8I),F===i.SHORT&&(st=i.R16I),F===i.INT&&(st=i.R32I)),M===i.RG&&(F===i.FLOAT&&(st=i.RG32F),F===i.HALF_FLOAT&&(st=i.RG16F),F===i.UNSIGNED_BYTE&&(st=i.RG8)),M===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(st=i.RG8UI),F===i.UNSIGNED_SHORT&&(st=i.RG16UI),F===i.UNSIGNED_INT&&(st=i.RG32UI),F===i.BYTE&&(st=i.RG8I),F===i.SHORT&&(st=i.RG16I),F===i.INT&&(st=i.RG32I)),M===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(st=i.RGB8UI),F===i.UNSIGNED_SHORT&&(st=i.RGB16UI),F===i.UNSIGNED_INT&&(st=i.RGB32UI),F===i.BYTE&&(st=i.RGB8I),F===i.SHORT&&(st=i.RGB16I),F===i.INT&&(st=i.RGB32I)),M===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),F===i.UNSIGNED_INT&&(st=i.RGBA32UI),F===i.BYTE&&(st=i.RGBA8I),F===i.SHORT&&(st=i.RGBA16I),F===i.INT&&(st=i.RGBA32I)),M===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),M===i.RGBA){const Bt=at?sl:Xt.getTransfer(J);F===i.FLOAT&&(st=i.RGBA32F),F===i.HALF_FLOAT&&(st=i.RGBA16F),F===i.UNSIGNED_BYTE&&(st=Bt===ie?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function y(E,M){let F;return E?M===null||M===is||M===nr?F=i.DEPTH24_STENCIL8:M===ii?F=i.DEPTH32F_STENCIL8:M===er&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===is||M===nr?F=i.DEPTH_COMPONENT24:M===ii?F=i.DEPTH_COMPONENT32F:M===er&&(F=i.DEPTH_COMPONENT16),F}function R(E,M){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==en&&E.minFilter!==Ee?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function A(E){const M=E.target;M.removeEventListener("dispose",A),I(M),M.isVideoTexture&&h.delete(M)}function T(E){const M=E.target;M.removeEventListener("dispose",T),b(M)}function I(E){const M=n.get(E);if(M.__webglInit===void 0)return;const F=E.source,J=d.get(F);if(J){const at=J[M.__cacheKey];at.usedTimes--,at.usedTimes===0&&w(E),Object.keys(J).length===0&&d.delete(F)}n.remove(E)}function w(E){const M=n.get(E);i.deleteTexture(M.__webglTexture);const F=E.source,J=d.get(F);delete J[M.__cacheKey],o.memory.textures--}function b(E){const M=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let at=0;at<M.__webglFramebuffer[J].length;at++)i.deleteFramebuffer(M.__webglFramebuffer[J][at]);else i.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)i.deleteFramebuffer(M.__webglFramebuffer[J]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const F=E.textures;for(let J=0,at=F.length;J<at;J++){const st=n.get(F[J]);st.__webglTexture&&(i.deleteTexture(st.__webglTexture),o.memory.textures--),n.remove(F[J])}n.remove(E)}let S=0;function U(){S=0}function P(){const E=S;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),S+=1,E}function W(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function Z(E,M){const F=n.get(E);if(E.isVideoTexture&&L(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){const J=E.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(F,E,M);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+M)}function D(E,M){const F=n.get(E);if(E.version>0&&F.__version!==E.version){O(F,E,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+M)}function nt(E,M){const F=n.get(E);if(E.version>0&&F.__version!==E.version){O(F,E,M);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+M)}function q(E,M){const F=n.get(E);if(E.version>0&&F.__version!==E.version){Y(F,E,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+M)}const lt={[sh]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[rh]:i.MIRRORED_REPEAT},K={[en]:i.NEAREST,[Qv]:i.NEAREST_MIPMAP_NEAREST,[wo]:i.NEAREST_MIPMAP_LINEAR,[Ee]:i.LINEAR,[bl]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},$={[Xv]:i.NEVER,[n_]:i.ALWAYS,[jv]:i.LESS,[og]:i.LEQUAL,[Zv]:i.EQUAL,[e_]:i.GEQUAL,[Jv]:i.GREATER,[t_]:i.NOTEQUAL};function Q(E,M){if(M.type===ii&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ee||M.magFilter===bl||M.magFilter===wo||M.magFilter===ni||M.minFilter===Ee||M.minFilter===bl||M.minFilter===wo||M.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,lt[M.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,lt[M.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,lt[M.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,K[M.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,K[M.minFilter]),M.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,$[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===en||M.minFilter!==wo&&M.minFilter!==ni||M.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function it(E,M){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",A));const J=M.source;let at=d.get(J);at===void 0&&(at={},d.set(J,at));const st=W(M);if(st!==E.__cacheKey){at[st]===void 0&&(at[st]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),at[st].usedTimes++;const Bt=at[E.__cacheKey];Bt!==void 0&&(at[E.__cacheKey].usedTimes--,Bt.usedTimes===0&&w(M)),E.__cacheKey=st,E.__webglTexture=at[st].texture}return F}function O(E,M,F){let J=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=i.TEXTURE_3D);const at=it(E,M),st=M.source;e.bindTexture(J,E.__webglTexture,i.TEXTURE0+F);const Bt=n.get(st);if(st.version!==Bt.__version||at===!0){e.activeTexture(i.TEXTURE0+F);const yt=Xt.getPrimaries(Xt.workingColorSpace),At=M.colorSpace===Ai?null:Xt.getPrimaries(M.colorSpace),jt=M.colorSpace===Ai||yt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let ft=v(M.image,!1,s.maxTextureSize);ft=G(M,ft);const Ct=r.convert(M.format,M.colorSpace),Ot=r.convert(M.type);let Ht=_(M.internalFormat,Ct,Ot,M.colorSpace,M.isVideoTexture);Q(J,M);let Tt;const Yt=M.mipmaps,qt=M.isVideoTexture!==!0,le=Bt.__version===void 0||at===!0,z=st.dataReady,_t=R(M,ft);if(M.isDepthTexture)Ht=y(M.format===ir,M.type),le&&(qt?e.texStorage2D(i.TEXTURE_2D,1,Ht,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,Ht,ft.width,ft.height,0,Ct,Ot,null));else if(M.isDataTexture)if(Yt.length>0){qt&&le&&e.texStorage2D(i.TEXTURE_2D,_t,Ht,Yt[0].width,Yt[0].height);for(let et=0,ot=Yt.length;et<ot;et++)Tt=Yt[et],qt?z&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,Tt.width,Tt.height,Ct,Ot,Tt.data):e.texImage2D(i.TEXTURE_2D,et,Ht,Tt.width,Tt.height,0,Ct,Ot,Tt.data);M.generateMipmaps=!1}else qt?(le&&e.texStorage2D(i.TEXTURE_2D,_t,Ht,ft.width,ft.height),z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft.width,ft.height,Ct,Ot,ft.data)):e.texImage2D(i.TEXTURE_2D,0,Ht,ft.width,ft.height,0,Ct,Ot,ft.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qt&&le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Ht,Yt[0].width,Yt[0].height,ft.depth);for(let et=0,ot=Yt.length;et<ot;et++)if(Tt=Yt[et],M.format!==Cn)if(Ct!==null)if(qt){if(z)if(M.layerUpdates.size>0){const Mt=ff(Tt.width,Tt.height,M.format,M.type);for(const xt of M.layerUpdates){const Gt=Tt.data.subarray(xt*Mt/Tt.data.BYTES_PER_ELEMENT,(xt+1)*Mt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,xt,Tt.width,Tt.height,1,Ct,Gt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,Tt.width,Tt.height,ft.depth,Ct,Tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,Ht,Tt.width,Tt.height,ft.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,Tt.width,Tt.height,ft.depth,Ct,Ot,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,Ht,Tt.width,Tt.height,ft.depth,0,Ct,Ot,Tt.data)}else{qt&&le&&e.texStorage2D(i.TEXTURE_2D,_t,Ht,Yt[0].width,Yt[0].height);for(let et=0,ot=Yt.length;et<ot;et++)Tt=Yt[et],M.format!==Cn?Ct!==null?qt?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,Tt.width,Tt.height,Ct,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,et,Ht,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?z&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,Tt.width,Tt.height,Ct,Ot,Tt.data):e.texImage2D(i.TEXTURE_2D,et,Ht,Tt.width,Tt.height,0,Ct,Ot,Tt.data)}else if(M.isDataArrayTexture)if(qt){if(le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Ht,ft.width,ft.height,ft.depth),z)if(M.layerUpdates.size>0){const et=ff(ft.width,ft.height,M.format,M.type);for(const ot of M.layerUpdates){const Mt=ft.data.subarray(ot*et/ft.data.BYTES_PER_ELEMENT,(ot+1)*et/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,ft.width,ft.height,1,Ct,Ot,Mt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Ct,Ot,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ht,ft.width,ft.height,ft.depth,0,Ct,Ot,ft.data);else if(M.isData3DTexture)qt?(le&&e.texStorage3D(i.TEXTURE_3D,_t,Ht,ft.width,ft.height,ft.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Ct,Ot,ft.data)):e.texImage3D(i.TEXTURE_3D,0,Ht,ft.width,ft.height,ft.depth,0,Ct,Ot,ft.data);else if(M.isFramebufferTexture){if(le)if(qt)e.texStorage2D(i.TEXTURE_2D,_t,Ht,ft.width,ft.height);else{let et=ft.width,ot=ft.height;for(let Mt=0;Mt<_t;Mt++)e.texImage2D(i.TEXTURE_2D,Mt,Ht,et,ot,0,Ct,Ot,null),et>>=1,ot>>=1}}else if(Yt.length>0){if(qt&&le){const et=N(Yt[0]);e.texStorage2D(i.TEXTURE_2D,_t,Ht,et.width,et.height)}for(let et=0,ot=Yt.length;et<ot;et++)Tt=Yt[et],qt?z&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,Ct,Ot,Tt):e.texImage2D(i.TEXTURE_2D,et,Ht,Ct,Ot,Tt);M.generateMipmaps=!1}else if(qt){if(le){const et=N(ft);e.texStorage2D(i.TEXTURE_2D,_t,Ht,et.width,et.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,Ot,ft)}else e.texImage2D(i.TEXTURE_2D,0,Ht,Ct,Ot,ft);g(M)&&m(J),Bt.__version=st.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function Y(E,M,F){if(M.image.length!==6)return;const J=it(E,M),at=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);const st=n.get(at);if(at.version!==st.__version||J===!0){e.activeTexture(i.TEXTURE0+F);const Bt=Xt.getPrimaries(Xt.workingColorSpace),yt=M.colorSpace===Ai?null:Xt.getPrimaries(M.colorSpace),At=M.colorSpace===Ai||Bt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const jt=M.isCompressedTexture||M.image[0].isCompressedTexture,ft=M.image[0]&&M.image[0].isDataTexture,Ct=[];for(let ot=0;ot<6;ot++)!jt&&!ft?Ct[ot]=v(M.image[ot],!0,s.maxCubemapSize):Ct[ot]=ft?M.image[ot].image:M.image[ot],Ct[ot]=G(M,Ct[ot]);const Ot=Ct[0],Ht=r.convert(M.format,M.colorSpace),Tt=r.convert(M.type),Yt=_(M.internalFormat,Ht,Tt,M.colorSpace),qt=M.isVideoTexture!==!0,le=st.__version===void 0||J===!0,z=at.dataReady;let _t=R(M,Ot);Q(i.TEXTURE_CUBE_MAP,M);let et;if(jt){qt&&le&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Yt,Ot.width,Ot.height);for(let ot=0;ot<6;ot++){et=Ct[ot].mipmaps;for(let Mt=0;Mt<et.length;Mt++){const xt=et[Mt];M.format!==Cn?Ht!==null?qt?z&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Mt,0,0,xt.width,xt.height,Ht,xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Mt,Yt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Mt,0,0,xt.width,xt.height,Ht,Tt,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Mt,Yt,xt.width,xt.height,0,Ht,Tt,xt.data)}}}else{if(et=M.mipmaps,qt&&le){et.length>0&&_t++;const ot=N(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Yt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(ft){qt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Ct[ot].width,Ct[ot].height,Ht,Tt,Ct[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Yt,Ct[ot].width,Ct[ot].height,0,Ht,Tt,Ct[ot].data);for(let Mt=0;Mt<et.length;Mt++){const Gt=et[Mt].image[ot].image;qt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Mt+1,0,0,Gt.width,Gt.height,Ht,Tt,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Mt+1,Yt,Gt.width,Gt.height,0,Ht,Tt,Gt.data)}}else{qt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Ht,Tt,Ct[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Yt,Ht,Tt,Ct[ot]);for(let Mt=0;Mt<et.length;Mt++){const xt=et[Mt];qt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Mt+1,0,0,Ht,Tt,xt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Mt+1,Yt,Ht,Tt,xt.image[ot])}}}g(M)&&m(i.TEXTURE_CUBE_MAP),st.__version=at.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function rt(E,M,F,J,at,st){const Bt=r.convert(F.format,F.colorSpace),yt=r.convert(F.type),At=_(F.internalFormat,Bt,yt,F.colorSpace),jt=n.get(M),ft=n.get(F);if(ft.__renderTarget=M,!jt.__hasExternalTextures){const Ct=Math.max(1,M.width>>st),Ot=Math.max(1,M.height>>st);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,st,At,Ct,Ot,M.depth,0,Bt,yt,null):e.texImage2D(at,st,At,Ct,Ot,0,Bt,yt,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Lt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,at,ft.__webglTexture,0,mt(M)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,at,ft.__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(E,M,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),M.depthBuffer){const J=M.depthTexture,at=J&&J.isDepthTexture?J.type:null,st=y(M.stencilBuffer,at),Bt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=mt(M);Lt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,st,M.width,M.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,st,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,st,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Bt,i.RENDERBUFFER,E)}else{const J=M.textures;for(let at=0;at<J.length;at++){const st=J[at],Bt=r.convert(st.format,st.colorSpace),yt=r.convert(st.type),At=_(st.internalFormat,Bt,yt,st.colorSpace),jt=mt(M);F&&Lt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,At,M.width,M.height):Lt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt,At,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,At,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(M.depthTexture);J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z(M.depthTexture,0);const at=J.__webglTexture,st=mt(M);if(M.depthTexture.format===Xi)Lt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(M.depthTexture.format===ir)Lt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function dt(E){const M=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==E.depthTexture){const J=E.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){const at=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",at)};J.addEventListener("dispose",at),M.__depthDisposeCallback=at}M.__boundDepthTexture=J}if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ht(M.__webglFramebuffer,E)}else if(F){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=i.createRenderbuffer(),tt(M.__webglDepthbuffer[J],E,!1);else{const at=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=M.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,st)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),tt(M.__webglDepthbuffer,E,!1);else{const J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,at)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(E,M,F){const J=n.get(E);M!==void 0&&rt(J.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&dt(E)}function It(E){const M=E.texture,F=n.get(E),J=n.get(M);E.addEventListener("dispose",T);const at=E.textures,st=E.isWebGLCubeRenderTarget===!0,Bt=at.length>1;if(Bt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=M.version,o.memory.textures++),st){F.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[yt]=[];for(let At=0;At<M.mipmaps.length;At++)F.__webglFramebuffer[yt][At]=i.createFramebuffer()}else F.__webglFramebuffer[yt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let yt=0;yt<M.mipmaps.length;yt++)F.__webglFramebuffer[yt]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Bt)for(let yt=0,At=at.length;yt<At;yt++){const jt=n.get(at[yt]);jt.__webglTexture===void 0&&(jt.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&Lt(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let yt=0;yt<at.length;yt++){const At=at[yt];F.__webglColorRenderbuffer[yt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[yt]);const jt=r.convert(At.format,At.colorSpace),ft=r.convert(At.type),Ct=_(At.internalFormat,jt,ft,At.colorSpace,E.isXRRenderTarget===!0),Ot=mt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,Ct,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,F.__webglColorRenderbuffer[yt])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),tt(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Q(i.TEXTURE_CUBE_MAP,M);for(let yt=0;yt<6;yt++)if(M.mipmaps&&M.mipmaps.length>0)for(let At=0;At<M.mipmaps.length;At++)rt(F.__webglFramebuffer[yt][At],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,At);else rt(F.__webglFramebuffer[yt],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);g(M)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Bt){for(let yt=0,At=at.length;yt<At;yt++){const jt=at[yt],ft=n.get(jt);e.bindTexture(i.TEXTURE_2D,ft.__webglTexture),Q(i.TEXTURE_2D,jt),rt(F.__webglFramebuffer,E,jt,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,0),g(jt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let yt=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(yt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,J.__webglTexture),Q(yt,M),M.mipmaps&&M.mipmaps.length>0)for(let At=0;At<M.mipmaps.length;At++)rt(F.__webglFramebuffer[At],E,M,i.COLOR_ATTACHMENT0,yt,At);else rt(F.__webglFramebuffer,E,M,i.COLOR_ATTACHMENT0,yt,0);g(M)&&m(yt),e.unbindTexture()}E.depthBuffer&&dt(E)}function Et(E){const M=E.textures;for(let F=0,J=M.length;F<J;F++){const at=M[F];if(g(at)){const st=x(E),Bt=n.get(at).__webglTexture;e.bindTexture(st,Bt),m(st),e.unbindTexture()}}}const zt=[],B=[];function Rt(E){if(E.samples>0){if(Lt(E)===!1){const M=E.textures,F=E.width,J=E.height;let at=i.COLOR_BUFFER_BIT;const st=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Bt=n.get(E),yt=M.length>1;if(yt)for(let At=0;At<M.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let At=0;At<M.length;At++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),yt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Bt.__webglColorRenderbuffer[At]);const jt=n.get(M[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,F,J,0,0,F,J,at,i.NEAREST),l===!0&&(zt.length=0,B.length=0,zt.push(i.COLOR_ATTACHMENT0+At),E.depthBuffer&&E.resolveDepthBuffer===!1&&(zt.push(st),B.push(st),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,zt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),yt)for(let At=0;At<M.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Bt.__webglColorRenderbuffer[At]);const jt=n.get(M[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const M=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function mt(E){return Math.min(s.maxSamples,E.samples)}function Lt(E){const M=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function L(E){const M=o.render.frame;h.get(E)!==M&&(h.set(E,M),E.update())}function G(E,M){const F=E.colorSpace,J=E.format,at=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==fs&&F!==Ai&&(Xt.getTransfer(F)===ie?(J!==Cn||at!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}function N(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=U,this.setTexture2D=Z,this.setTexture2DArray=D,this.setTexture3D=nt,this.setTextureCube=q,this.rebindTextures=vt,this.setupRenderTarget=It,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=Lt}function SM(i,t){function e(n,s=Ai){let r;const o=Xt.getTransfer(s);if(n===li)return i.UNSIGNED_BYTE;if(n===iu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===su)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jm)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ym)return i.BYTE;if(n===Xm)return i.SHORT;if(n===er)return i.UNSIGNED_SHORT;if(n===nu)return i.INT;if(n===is)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===nn)return i.HALF_FLOAT;if(n===Zm)return i.ALPHA;if(n===Jm)return i.RGB;if(n===Cn)return i.RGBA;if(n===tg)return i.LUMINANCE;if(n===eg)return i.LUMINANCE_ALPHA;if(n===Xi)return i.DEPTH_COMPONENT;if(n===ir)return i.DEPTH_STENCIL;if(n===ng)return i.RED;if(n===ru)return i.RED_INTEGER;if(n===ig)return i.RG;if(n===ou)return i.RG_INTEGER;if(n===au)return i.RGBA_INTEGER;if(n===Ea||n===Aa||n===Ca||n===Ta)if(o===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oh||n===ah||n===lh||n===ch)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===oh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ah)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ch)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hh||n===uh||n===dh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===hh||n===uh)return o===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===dh)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fh||n===ph||n===mh||n===gh||n===vh||n===_h||n===yh||n===xh||n===bh||n===wh||n===Mh||n===Sh||n===Eh||n===Ah)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fh)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ph)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mh)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gh)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vh)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_h)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yh)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xh)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bh)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wh)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mh)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sh)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Eh)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ah)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ia||n===Ch||n===Th)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ia)return o===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ch)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Th)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sg||n===Ih||n===Rh||n===Lh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ia)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ih)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class EM extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Bn extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AM={type:"move"};class Kl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,n),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(AM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Bn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const CM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class IM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Be,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ge({vertexShader:CM,fragmentShader:TM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qt(new sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RM extends dr{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null;const v=new IM,g=e.getContextAttributes();let m=null,x=null;const _=[],y=[],R=new kt;let A=null;const T=new $e;T.viewport=new Jt;const I=new $e;I.viewport=new Jt;const w=[T,I],b=new EM;let S=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let Y=_[O];return Y===void 0&&(Y=new Kl,_[O]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(O){let Y=_[O];return Y===void 0&&(Y=new Kl,_[O]=Y),Y.getGripSpace()},this.getHand=function(O){let Y=_[O];return Y===void 0&&(Y=new Kl,_[O]=Y),Y.getHandSpace()};function P(O){const Y=y.indexOf(O.inputSource);if(Y===-1)return;const rt=_[Y];rt!==void 0&&(rt.update(O.inputSource,O.frame,c||o),rt.dispatchEvent({type:O.type,data:O.inputSource}))}function W(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Z);for(let O=0;O<_.length;O++){const Y=y[O];Y!==null&&(y[O]=null,_[O].disconnect(Y))}S=null,U=null,v.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,x=null,it.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const Y={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Y),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Ne(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:li,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let Y=null,rt=null,tt=null;g.depth&&(tt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=g.stencil?ir:Xi,rt=g.stencil?nr:is);const ht={colorFormat:e.RGBA8,depthFormat:tt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(ht),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Ne(d.textureWidth,d.textureHeight,{format:Cn,type:li,depthTexture:new mu(d.textureWidth,d.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),it.setContext(s),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(O){for(let Y=0;Y<O.removed.length;Y++){const rt=O.removed[Y],tt=y.indexOf(rt);tt>=0&&(y[tt]=null,_[tt].disconnect(rt))}for(let Y=0;Y<O.added.length;Y++){const rt=O.added[Y];let tt=y.indexOf(rt);if(tt===-1){for(let dt=0;dt<_.length;dt++)if(dt>=y.length){y.push(rt),tt=dt;break}else if(y[dt]===null){y[dt]=rt,tt=dt;break}if(tt===-1)break}const ht=_[tt];ht&&ht.connect(rt)}}const D=new k,nt=new k;function q(O,Y,rt){D.setFromMatrixPosition(Y.matrixWorld),nt.setFromMatrixPosition(rt.matrixWorld);const tt=D.distanceTo(nt),ht=Y.projectionMatrix.elements,dt=rt.projectionMatrix.elements,vt=ht[14]/(ht[10]-1),It=ht[14]/(ht[10]+1),Et=(ht[9]+1)/ht[5],zt=(ht[9]-1)/ht[5],B=(ht[8]-1)/ht[0],Rt=(dt[8]+1)/dt[0],mt=vt*B,Lt=vt*Rt,L=tt/(-B+Rt),G=L*-B;if(Y.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(G),O.translateZ(L),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),ht[10]===-1)O.projectionMatrix.copy(Y.projectionMatrix),O.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const N=vt+L,E=It+L,M=mt-G,F=Lt+(tt-G),J=Et*It/E*N,at=zt*It/E*N;O.projectionMatrix.makePerspective(M,F,J,at,N,E),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function lt(O,Y){Y===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(Y.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let Y=O.near,rt=O.far;v.texture!==null&&(v.depthNear>0&&(Y=v.depthNear),v.depthFar>0&&(rt=v.depthFar)),b.near=I.near=T.near=Y,b.far=I.far=T.far=rt,(S!==b.near||U!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),S=b.near,U=b.far),T.layers.mask=O.layers.mask|2,I.layers.mask=O.layers.mask|4,b.layers.mask=T.layers.mask|I.layers.mask;const tt=O.parent,ht=b.cameras;lt(b,tt);for(let dt=0;dt<ht.length;dt++)lt(ht[dt],tt);ht.length===2?q(b,T,I):b.projectionMatrix.copy(T.projectionMatrix),K(O,b,tt)};function K(O,Y,rt){rt===null?O.matrix.copy(Y.matrixWorld):(O.matrix.copy(rt.matrixWorld),O.matrix.invert(),O.matrix.multiply(Y.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(Y.projectionMatrix),O.projectionMatrixInverse.copy(Y.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=no*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let $=null;function Q(O,Y){if(h=Y.getViewerPose(c||o),p=Y,h!==null){const rt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let tt=!1;rt.length!==b.cameras.length&&(b.cameras.length=0,tt=!0);for(let dt=0;dt<rt.length;dt++){const vt=rt[dt];let It=null;if(f!==null)It=f.getViewport(vt);else{const zt=u.getViewSubImage(d,vt);It=zt.viewport,dt===0&&(t.setRenderTargetTextures(x,zt.colorTexture,d.ignoreDepthValues?void 0:zt.depthStencilTexture),t.setRenderTarget(x))}let Et=w[dt];Et===void 0&&(Et=new $e,Et.layers.enable(dt),Et.viewport=new Jt,w[dt]=Et),Et.matrix.fromArray(vt.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(vt.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(It.x,It.y,It.width,It.height),dt===0&&(b.matrix.copy(Et.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),tt===!0&&b.cameras.push(Et)}const ht=s.enabledFeatures;if(ht&&ht.includes("depth-sensing")){const dt=u.getDepthInformation(rt[0]);dt&&dt.isValid&&dt.texture&&v.init(t,dt,s.renderState)}}for(let rt=0;rt<_.length;rt++){const tt=y[rt],ht=_[rt];tt!==null&&ht!==void 0&&ht.update(tt,Y,c||o)}$&&$(O,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),p=null}const it=new mg;it.setAnimationLoop(Q),this.setAnimationLoop=function(O){$=O},this.dispose=function(){}}}const Oi=new kn,LM=new ae;function PM(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,fg(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,x,_,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,x,_):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===ve&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===ve&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const x=t.get(m),_=x.envMap,y=x.envMapRotation;_&&(g.envMap.value=_,Oi.copy(y),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),g.envMapRotation.value.setFromMatrix4(LM.makeRotationFromEuler(Oi)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,x,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=_*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ve&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const x=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function DM(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){const y=_.program;n.uniformBlockBinding(x,y)}function c(x,_){let y=s[x.id];y===void 0&&(p(x),y=h(x),s[x.id]=y,x.addEventListener("dispose",g));const R=_.program;n.updateUBOMapping(x,R);const A=t.render.frame;r[x.id]!==A&&(d(x),r[x.id]=A)}function h(x){const _=u();x.__bindingPointIndex=_;const y=i.createBuffer(),R=x.__size,A=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const _=s[x.id],y=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let A=0,T=y.length;A<T;A++){const I=Array.isArray(y[A])?y[A]:[y[A]];for(let w=0,b=I.length;w<b;w++){const S=I[w];if(f(S,A,w,R)===!0){const U=S.__offset,P=Array.isArray(S.value)?S.value:[S.value];let W=0;for(let Z=0;Z<P.length;Z++){const D=P[Z],nt=v(D);typeof D=="number"||typeof D=="boolean"?(S.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,U+W,S.__data)):D.isMatrix3?(S.__data[0]=D.elements[0],S.__data[1]=D.elements[1],S.__data[2]=D.elements[2],S.__data[3]=0,S.__data[4]=D.elements[3],S.__data[5]=D.elements[4],S.__data[6]=D.elements[5],S.__data[7]=0,S.__data[8]=D.elements[6],S.__data[9]=D.elements[7],S.__data[10]=D.elements[8],S.__data[11]=0):(D.toArray(S.__data,W),W+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,_,y,R){const A=x.value,T=_+"_"+y;if(R[T]===void 0)return typeof A=="number"||typeof A=="boolean"?R[T]=A:R[T]=A.clone(),!0;{const I=R[T];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return R[T]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function p(x){const _=x.uniforms;let y=0;const R=16;for(let T=0,I=_.length;T<I;T++){const w=Array.isArray(_[T])?_[T]:[_[T]];for(let b=0,S=w.length;b<S;b++){const U=w[b],P=Array.isArray(U.value)?U.value:[U.value];for(let W=0,Z=P.length;W<Z;W++){const D=P[W],nt=v(D),q=y%R,lt=q%nt.boundary,K=q+lt;y+=lt,K!==0&&R-K<nt.storage&&(y+=R-K),U.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=nt.storage}}}const A=y%R;return A>0&&(y+=R-A),x.__size=y,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function g(x){const _=x.target;_.removeEventListener("dispose",g);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class UM{constructor(t={}){const{canvas:e=x_(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const x=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this.toneMapping=Ri,this.toneMappingExposure=1;const y=this;let R=!1,A=0,T=0,I=null,w=-1,b=null;const S=new Jt,U=new Jt;let P=null;const W=new Ft(0);let Z=0,D=e.width,nt=e.height,q=1,lt=null,K=null;const $=new Jt(0,0,D,nt),Q=new Jt(0,0,D,nt);let it=!1;const O=new du;let Y=!1,rt=!1;const tt=new ae,ht=new ae,dt=new k,vt=new Jt,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function zt(){return I===null?q:1}let B=n;function Rt(C,H){return e.getContext(C,H)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nl}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),B===null){const H="webgl2";if(B=Rt(H,C),B===null)throw Rt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let mt,Lt,L,G,N,E,M,F,J,at,st,Bt,yt,At,jt,ft,Ct,Ot,Ht,Tt,Yt,qt,le,z;function _t(){mt=new Ob(B),mt.init(),qt=new SM(B,mt),Lt=new Db(B,mt,t,qt),L=new bM(B,mt),Lt.reverseDepthBuffer&&d&&L.buffers.depth.setReversed(!0),G=new Vb(B),N=new oM,E=new MM(B,mt,L,N,Lt,qt,G),M=new Bb(y),F=new kb(y),J=new Y_(B),le=new Lb(B,J),at=new zb(B,J,G,le),st=new Wb(B,at,J,G),Ht=new Gb(B,Lt,E),ft=new Ub(N),Bt=new rM(y,M,F,mt,Lt,le,ft),yt=new PM(y,N),At=new lM,jt=new pM(mt),Ot=new Rb(y,M,F,L,st,f,l),Ct=new yM(y,st,Lt),z=new DM(B,G,Lt,L),Tt=new Pb(B,mt,G),Yt=new Hb(B,mt,G),G.programs=Bt.programs,y.capabilities=Lt,y.extensions=mt,y.properties=N,y.renderLists=At,y.shadowMap=Ct,y.state=L,y.info=G}_t();const et=new RM(y,B);this.xr=et,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=mt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=mt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(D,nt,!1))},this.getSize=function(C){return C.set(D,nt)},this.setSize=function(C,H,X=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=C,nt=H,e.width=Math.floor(C*q),e.height=Math.floor(H*q),X===!0&&(e.style.width=C+"px",e.style.height=H+"px"),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(D*q,nt*q).floor()},this.setDrawingBufferSize=function(C,H,X){D=C,nt=H,q=X,e.width=Math.floor(C*X),e.height=Math.floor(H*X),this.setViewport(0,0,C,H)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy($)},this.setViewport=function(C,H,X,j){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,H,X,j),L.viewport(S.copy($).multiplyScalar(q).round())},this.getScissor=function(C){return C.copy(Q)},this.setScissor=function(C,H,X,j){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,H,X,j),L.scissor(U.copy(Q).multiplyScalar(q).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(C){L.setScissorTest(it=C)},this.setOpaqueSort=function(C){lt=C},this.setTransparentSort=function(C){K=C},this.getClearColor=function(C){return C.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(C=!0,H=!0,X=!0){let j=0;if(C){let V=!1;if(I!==null){const pt=I.texture.format;V=pt===au||pt===ou||pt===ru}if(V){const pt=I.texture.type,bt=pt===li||pt===is||pt===er||pt===nr||pt===iu||pt===su,Pt=Ot.getClearColor(),Dt=Ot.getClearAlpha(),Vt=Pt.r,Wt=Pt.g,Ut=Pt.b;bt?(p[0]=Vt,p[1]=Wt,p[2]=Ut,p[3]=Dt,B.clearBufferuiv(B.COLOR,0,p)):(v[0]=Vt,v[1]=Wt,v[2]=Ut,v[3]=Dt,B.clearBufferiv(B.COLOR,0,v))}else j|=B.COLOR_BUFFER_BIT}H&&(j|=B.DEPTH_BUFFER_BIT),X&&(j|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),At.dispose(),jt.dispose(),N.dispose(),M.dispose(),F.dispose(),st.dispose(),le.dispose(),z.dispose(),Bt.dispose(),et.dispose(),et.removeEventListener("sessionstart",sd),et.removeEventListener("sessionend",rd),Di.stop()};function ot(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const C=G.autoReset,H=Ct.enabled,X=Ct.autoUpdate,j=Ct.needsUpdate,V=Ct.type;_t(),G.autoReset=C,Ct.enabled=H,Ct.autoUpdate=X,Ct.needsUpdate=j,Ct.type=V}function xt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Gt(C){const H=C.target;H.removeEventListener("dispose",Gt),de(H)}function de(C){Ae(C),N.remove(C)}function Ae(C){const H=N.get(C).programs;H!==void 0&&(H.forEach(function(X){Bt.releaseProgram(X)}),C.isShaderMaterial&&Bt.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,X,j,V,pt){H===null&&(H=It);const bt=V.isMesh&&V.matrixWorld.determinant()<0,Pt=lv(C,H,X,j,V);L.setMaterial(j,bt);let Dt=X.index,Vt=1;if(j.wireframe===!0){if(Dt=at.getWireframeAttribute(X),Dt===void 0)return;Vt=2}const Wt=X.drawRange,Ut=X.attributes.position;let Zt=Wt.start*Vt,ce=(Wt.start+Wt.count)*Vt;pt!==null&&(Zt=Math.max(Zt,pt.start*Vt),ce=Math.min(ce,(pt.start+pt.count)*Vt)),Dt!==null?(Zt=Math.max(Zt,0),ce=Math.min(ce,Dt.count)):Ut!=null&&(Zt=Math.max(Zt,0),ce=Math.min(ce,Ut.count));const he=ce-Zt;if(he<0||he===1/0)return;le.setup(V,j,Pt,X,Dt);let We,te=Tt;if(Dt!==null&&(We=J.get(Dt),te=Yt,te.setIndex(We)),V.isMesh)j.wireframe===!0?(L.setLineWidth(j.wireframeLinewidth*zt()),te.setMode(B.LINES)):te.setMode(B.TRIANGLES);else if(V.isLine){let Nt=j.linewidth;Nt===void 0&&(Nt=1),L.setLineWidth(Nt*zt()),V.isLineSegments?te.setMode(B.LINES):V.isLineLoop?te.setMode(B.LINE_LOOP):te.setMode(B.LINE_STRIP)}else V.isPoints?te.setMode(B.POINTS):V.isSprite&&te.setMode(B.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)te.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))te.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Nt=V._multiDrawStarts,Hn=V._multiDrawCounts,ee=V._multiDrawCount,yn=Dt?J.get(Dt).bytesPerElement:1,ps=N.get(j).currentProgram.getUniforms();for(let Ke=0;Ke<ee;Ke++)ps.setValue(B,"_gl_DrawID",Ke),te.render(Nt[Ke]/yn,Hn[Ke])}else if(V.isInstancedMesh)te.renderInstances(Zt,he,V.count);else if(X.isInstancedBufferGeometry){const Nt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Hn=Math.min(X.instanceCount,Nt);te.renderInstances(Zt,he,Hn)}else te.render(Zt,he)};function ne(C,H,X){C.transparent===!0&&C.side===dn&&C.forceSinglePass===!1?(C.side=ve,C.needsUpdate=!0,bo(C,H,X),C.side=Fn,C.needsUpdate=!0,bo(C,H,X),C.side=dn):bo(C,H,X)}this.compile=function(C,H,X=null){X===null&&(X=C),m=jt.get(X),m.init(H),_.push(m),X.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),C!==X&&C.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();const j=new Set;return C.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const pt=V.material;if(pt)if(Array.isArray(pt))for(let bt=0;bt<pt.length;bt++){const Pt=pt[bt];ne(Pt,X,V),j.add(Pt)}else ne(pt,X,V),j.add(pt)}),_.pop(),m=null,j},this.compileAsync=function(C,H,X=null){const j=this.compile(C,H,X);return new Promise(V=>{function pt(){if(j.forEach(function(bt){N.get(bt).currentProgram.isReady()&&j.delete(bt)}),j.size===0){V(C);return}setTimeout(pt,10)}mt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let _n=null;function zn(C){_n&&_n(C)}function sd(){Di.stop()}function rd(){Di.start()}const Di=new mg;Di.setAnimationLoop(zn),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(C){_n=C,et.setAnimationLoop(C),C===null?Di.stop():Di.start()},et.addEventListener("sessionstart",sd),et.addEventListener("sessionend",rd),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(H),H=et.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,H,I),m=jt.get(C,_.length),m.init(H),_.push(m),ht.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),O.setFromProjectionMatrix(ht),rt=this.localClippingEnabled,Y=ft.init(this.clippingPlanes,rt),g=At.get(C,x.length),g.init(),x.push(g),et.enabled===!0&&et.isPresenting===!0){const pt=y.xr.getDepthSensingMesh();pt!==null&&yl(pt,H,-1/0,y.sortObjects)}yl(C,H,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(lt,K),Et=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Et&&Ot.addToRenderList(g,C),this.info.render.frame++,Y===!0&&ft.beginShadows();const X=m.state.shadowsArray;Ct.render(X,C,H),Y===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=g.opaque,V=g.transmissive;if(m.setupLights(),H.isArrayCamera){const pt=H.cameras;if(V.length>0)for(let bt=0,Pt=pt.length;bt<Pt;bt++){const Dt=pt[bt];ad(j,V,C,Dt)}Et&&Ot.render(C);for(let bt=0,Pt=pt.length;bt<Pt;bt++){const Dt=pt[bt];od(g,C,Dt,Dt.viewport)}}else V.length>0&&ad(j,V,C,H),Et&&Ot.render(C),od(g,C,H);I!==null&&(E.updateMultisampleRenderTarget(I),E.updateRenderTargetMipmap(I)),C.isScene===!0&&C.onAfterRender(y,C,H),le.resetDefaultState(),w=-1,b=null,_.pop(),_.length>0?(m=_[_.length-1],Y===!0&&ft.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function yl(C,H,X,j){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||O.intersectsSprite(C)){j&&vt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ht);const bt=st.update(C),Pt=C.material;Pt.visible&&g.push(C,bt,Pt,X,vt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||O.intersectsObject(C))){const bt=st.update(C),Pt=C.material;if(j&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),vt.copy(C.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),vt.copy(bt.boundingSphere.center)),vt.applyMatrix4(C.matrixWorld).applyMatrix4(ht)),Array.isArray(Pt)){const Dt=bt.groups;for(let Vt=0,Wt=Dt.length;Vt<Wt;Vt++){const Ut=Dt[Vt],Zt=Pt[Ut.materialIndex];Zt&&Zt.visible&&g.push(C,bt,Zt,X,vt.z,Ut)}}else Pt.visible&&g.push(C,bt,Pt,X,vt.z,null)}}const pt=C.children;for(let bt=0,Pt=pt.length;bt<Pt;bt++)yl(pt[bt],H,X,j)}function od(C,H,X,j){const V=C.opaque,pt=C.transmissive,bt=C.transparent;m.setupLightsView(X),Y===!0&&ft.setGlobalState(y.clippingPlanes,X),j&&L.viewport(S.copy(j)),V.length>0&&xo(V,H,X),pt.length>0&&xo(pt,H,X),bt.length>0&&xo(bt,H,X),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function ad(C,H,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new Ne(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?nn:li,minFilter:ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const pt=m.state.transmissionRenderTarget[j.id],bt=j.viewport||S;pt.setSize(bt.z,bt.w);const Pt=y.getRenderTarget();y.setRenderTarget(pt),y.getClearColor(W),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),Et&&Ot.render(X);const Dt=y.toneMapping;y.toneMapping=Ri;const Vt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),Y===!0&&ft.setGlobalState(y.clippingPlanes,j),xo(C,X,j),E.updateMultisampleRenderTarget(pt),E.updateRenderTargetMipmap(pt),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Ut=0,Zt=H.length;Ut<Zt;Ut++){const ce=H[Ut],he=ce.object,We=ce.geometry,te=ce.material,Nt=ce.group;if(te.side===dn&&he.layers.test(j.layers)){const Hn=te.side;te.side=ve,te.needsUpdate=!0,ld(he,X,j,We,te,Nt),te.side=Hn,te.needsUpdate=!0,Wt=!0}}Wt===!0&&(E.updateMultisampleRenderTarget(pt),E.updateRenderTargetMipmap(pt))}y.setRenderTarget(Pt),y.setClearColor(W,Z),Vt!==void 0&&(j.viewport=Vt),y.toneMapping=Dt}function xo(C,H,X){const j=H.isScene===!0?H.overrideMaterial:null;for(let V=0,pt=C.length;V<pt;V++){const bt=C[V],Pt=bt.object,Dt=bt.geometry,Vt=j===null?bt.material:j,Wt=bt.group;Pt.layers.test(X.layers)&&ld(Pt,H,X,Dt,Vt,Wt)}}function ld(C,H,X,j,V,pt){C.onBeforeRender(y,H,X,j,V,pt),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),V.onBeforeRender(y,H,X,j,C,pt),V.transparent===!0&&V.side===dn&&V.forceSinglePass===!1?(V.side=ve,V.needsUpdate=!0,y.renderBufferDirect(X,H,j,V,C,pt),V.side=Fn,V.needsUpdate=!0,y.renderBufferDirect(X,H,j,V,C,pt),V.side=dn):y.renderBufferDirect(X,H,j,V,C,pt),C.onAfterRender(y,H,X,j,V,pt)}function bo(C,H,X){H.isScene!==!0&&(H=It);const j=N.get(C),V=m.state.lights,pt=m.state.shadowsArray,bt=V.state.version,Pt=Bt.getParameters(C,V.state,pt,H,X),Dt=Bt.getProgramCacheKey(Pt);let Vt=j.programs;j.environment=C.isMeshStandardMaterial?H.environment:null,j.fog=H.fog,j.envMap=(C.isMeshStandardMaterial?F:M).get(C.envMap||j.environment),j.envMapRotation=j.environment!==null&&C.envMap===null?H.environmentRotation:C.envMapRotation,Vt===void 0&&(C.addEventListener("dispose",Gt),Vt=new Map,j.programs=Vt);let Wt=Vt.get(Dt);if(Wt!==void 0){if(j.currentProgram===Wt&&j.lightsStateVersion===bt)return hd(C,Pt),Wt}else Pt.uniforms=Bt.getUniforms(C),C.onBeforeCompile(Pt,y),Wt=Bt.acquireProgram(Pt,Dt),Vt.set(Dt,Wt),j.uniforms=Pt.uniforms;const Ut=j.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ut.clippingPlanes=ft.uniform),hd(C,Pt),j.needsLights=hv(C),j.lightsStateVersion=bt,j.needsLights&&(Ut.ambientLightColor.value=V.state.ambient,Ut.lightProbe.value=V.state.probe,Ut.directionalLights.value=V.state.directional,Ut.directionalLightShadows.value=V.state.directionalShadow,Ut.spotLights.value=V.state.spot,Ut.spotLightShadows.value=V.state.spotShadow,Ut.rectAreaLights.value=V.state.rectArea,Ut.ltc_1.value=V.state.rectAreaLTC1,Ut.ltc_2.value=V.state.rectAreaLTC2,Ut.pointLights.value=V.state.point,Ut.pointLightShadows.value=V.state.pointShadow,Ut.hemisphereLights.value=V.state.hemi,Ut.directionalShadowMap.value=V.state.directionalShadowMap,Ut.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ut.spotShadowMap.value=V.state.spotShadowMap,Ut.spotLightMatrix.value=V.state.spotLightMatrix,Ut.spotLightMap.value=V.state.spotLightMap,Ut.pointShadowMap.value=V.state.pointShadowMap,Ut.pointShadowMatrix.value=V.state.pointShadowMatrix),j.currentProgram=Wt,j.uniformsList=null,Wt}function cd(C){if(C.uniformsList===null){const H=C.currentProgram.getUniforms();C.uniformsList=Ra.seqWithValue(H.seq,C.uniforms)}return C.uniformsList}function hd(C,H){const X=N.get(C);X.outputColorSpace=H.outputColorSpace,X.batching=H.batching,X.batchingColor=H.batchingColor,X.instancing=H.instancing,X.instancingColor=H.instancingColor,X.instancingMorph=H.instancingMorph,X.skinning=H.skinning,X.morphTargets=H.morphTargets,X.morphNormals=H.morphNormals,X.morphColors=H.morphColors,X.morphTargetsCount=H.morphTargetsCount,X.numClippingPlanes=H.numClippingPlanes,X.numIntersection=H.numClipIntersection,X.vertexAlphas=H.vertexAlphas,X.vertexTangents=H.vertexTangents,X.toneMapping=H.toneMapping}function lv(C,H,X,j,V){H.isScene!==!0&&(H=It),E.resetTextureUnits();const pt=H.fog,bt=j.isMeshStandardMaterial?H.environment:null,Pt=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:fs,Dt=(j.isMeshStandardMaterial?F:M).get(j.envMap||bt),Vt=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Wt=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ut=!!X.morphAttributes.position,Zt=!!X.morphAttributes.normal,ce=!!X.morphAttributes.color;let he=Ri;j.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(he=y.toneMapping);const We=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,te=We!==void 0?We.length:0,Nt=N.get(j),Hn=m.state.lights;if(Y===!0&&(rt===!0||C!==b)){const on=C===b&&j.id===w;ft.setState(j,C,on)}let ee=!1;j.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Hn.state.version||Nt.outputColorSpace!==Pt||V.isBatchedMesh&&Nt.batching===!1||!V.isBatchedMesh&&Nt.batching===!0||V.isBatchedMesh&&Nt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Nt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Nt.instancing===!1||!V.isInstancedMesh&&Nt.instancing===!0||V.isSkinnedMesh&&Nt.skinning===!1||!V.isSkinnedMesh&&Nt.skinning===!0||V.isInstancedMesh&&Nt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Nt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Nt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Nt.instancingMorph===!1&&V.morphTexture!==null||Nt.envMap!==Dt||j.fog===!0&&Nt.fog!==pt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==ft.numPlanes||Nt.numIntersection!==ft.numIntersection)||Nt.vertexAlphas!==Vt||Nt.vertexTangents!==Wt||Nt.morphTargets!==Ut||Nt.morphNormals!==Zt||Nt.morphColors!==ce||Nt.toneMapping!==he||Nt.morphTargetsCount!==te)&&(ee=!0):(ee=!0,Nt.__version=j.version);let yn=Nt.currentProgram;ee===!0&&(yn=bo(j,H,V));let ps=!1,Ke=!1,vr=!1;const ue=yn.getUniforms(),In=Nt.uniforms;if(L.useProgram(yn.program)&&(ps=!0,Ke=!0,vr=!0),j.id!==w&&(w=j.id,Ke=!0),ps||b!==C){L.buffers.depth.getReversed()?(tt.copy(C.projectionMatrix),w_(tt),M_(tt),ue.setValue(B,"projectionMatrix",tt)):ue.setValue(B,"projectionMatrix",C.projectionMatrix),ue.setValue(B,"viewMatrix",C.matrixWorldInverse);const ui=ue.map.cameraPosition;ui!==void 0&&ui.setValue(B,dt.setFromMatrixPosition(C.matrixWorld)),Lt.logarithmicDepthBuffer&&ue.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ue.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),b!==C&&(b=C,Ke=!0,vr=!0)}if(V.isSkinnedMesh){ue.setOptional(B,V,"bindMatrix"),ue.setOptional(B,V,"bindMatrixInverse");const on=V.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),ue.setValue(B,"boneTexture",on.boneTexture,E))}V.isBatchedMesh&&(ue.setOptional(B,V,"batchingTexture"),ue.setValue(B,"batchingTexture",V._matricesTexture,E),ue.setOptional(B,V,"batchingIdTexture"),ue.setValue(B,"batchingIdTexture",V._indirectTexture,E),ue.setOptional(B,V,"batchingColorTexture"),V._colorsTexture!==null&&ue.setValue(B,"batchingColorTexture",V._colorsTexture,E));const _r=X.morphAttributes;if((_r.position!==void 0||_r.normal!==void 0||_r.color!==void 0)&&Ht.update(V,X,yn),(Ke||Nt.receiveShadow!==V.receiveShadow)&&(Nt.receiveShadow=V.receiveShadow,ue.setValue(B,"receiveShadow",V.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(In.envMap.value=Dt,In.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&H.environment!==null&&(In.envMapIntensity.value=H.environmentIntensity),Ke&&(ue.setValue(B,"toneMappingExposure",y.toneMappingExposure),Nt.needsLights&&cv(In,vr),pt&&j.fog===!0&&yt.refreshFogUniforms(In,pt),yt.refreshMaterialUniforms(In,j,q,nt,m.state.transmissionRenderTarget[C.id]),Ra.upload(B,cd(Nt),In,E)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ra.upload(B,cd(Nt),In,E),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ue.setValue(B,"center",V.center),ue.setValue(B,"modelViewMatrix",V.modelViewMatrix),ue.setValue(B,"normalMatrix",V.normalMatrix),ue.setValue(B,"modelMatrix",V.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const on=j.uniformsGroups;for(let ui=0,di=on.length;ui<di;ui++){const ud=on[ui];z.update(ud,yn),z.bind(ud,yn)}}return yn}function cv(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function hv(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(C,H,X){N.get(C.texture).__webglTexture=H,N.get(C.depthTexture).__webglTexture=X;const j=N.get(C);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=X===void 0,j.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,H){const X=N.get(C);X.__webglFramebuffer=H,X.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(C,H=0,X=0){I=C,A=H,T=X;let j=!0,V=null,pt=!1,bt=!1;if(C){const Dt=N.get(C);if(Dt.__useDefaultFramebuffer!==void 0)L.bindFramebuffer(B.FRAMEBUFFER,null),j=!1;else if(Dt.__webglFramebuffer===void 0)E.setupRenderTarget(C);else if(Dt.__hasExternalTextures)E.rebindTextures(C,N.get(C.texture).__webglTexture,N.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ut=C.depthTexture;if(Dt.__boundDepthTexture!==Ut){if(Ut!==null&&N.has(Ut)&&(C.width!==Ut.image.width||C.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(C)}}const Vt=C.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(bt=!0);const Wt=N.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Wt[H])?V=Wt[H][X]:V=Wt[H],pt=!0):C.samples>0&&E.useMultisampledRTT(C)===!1?V=N.get(C).__webglMultisampledFramebuffer:Array.isArray(Wt)?V=Wt[X]:V=Wt,S.copy(C.viewport),U.copy(C.scissor),P=C.scissorTest}else S.copy($).multiplyScalar(q).floor(),U.copy(Q).multiplyScalar(q).floor(),P=it;if(L.bindFramebuffer(B.FRAMEBUFFER,V)&&j&&L.drawBuffers(C,V),L.viewport(S),L.scissor(U),L.setScissorTest(P),pt){const Dt=N.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+H,Dt.__webglTexture,X)}else if(bt){const Dt=N.get(C.texture),Vt=H||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Dt.__webglTexture,X||0,Vt)}w=-1},this.readRenderTargetPixels=function(C,H,X,j,V,pt,bt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=N.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&bt!==void 0&&(Pt=Pt[bt]),Pt){L.bindFramebuffer(B.FRAMEBUFFER,Pt);try{const Dt=C.texture,Vt=Dt.format,Wt=Dt.type;if(!Lt.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-j&&X>=0&&X<=C.height-V&&B.readPixels(H,X,j,V,qt.convert(Vt),qt.convert(Wt),pt)}finally{const Dt=I!==null?N.get(I).__webglFramebuffer:null;L.bindFramebuffer(B.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(C,H,X,j,V,pt,bt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=N.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&bt!==void 0&&(Pt=Pt[bt]),Pt){const Dt=C.texture,Vt=Dt.format,Wt=Dt.type;if(!Lt.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=C.width-j&&X>=0&&X<=C.height-V){L.bindFramebuffer(B.FRAMEBUFFER,Pt);const Ut=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ut),B.bufferData(B.PIXEL_PACK_BUFFER,pt.byteLength,B.STREAM_READ),B.readPixels(H,X,j,V,qt.convert(Vt),qt.convert(Wt),0);const Zt=I!==null?N.get(I).__webglFramebuffer:null;L.bindFramebuffer(B.FRAMEBUFFER,Zt);const ce=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await b_(B,ce,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ut),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,pt),B.deleteBuffer(Ut),B.deleteSync(ce),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,H=null,X=0){C.isTexture!==!0&&(Nr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,C=arguments[1]);const j=Math.pow(2,-X),V=Math.floor(C.image.width*j),pt=Math.floor(C.image.height*j),bt=H!==null?H.x:0,Pt=H!==null?H.y:0;E.setTexture2D(C,0),B.copyTexSubImage2D(B.TEXTURE_2D,X,0,0,bt,Pt,V,pt),L.unbindTexture()},this.copyTextureToTexture=function(C,H,X=null,j=null,V=0){C.isTexture!==!0&&(Nr("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,C=arguments[1],H=arguments[2],V=arguments[3]||0,X=null);let pt,bt,Pt,Dt,Vt,Wt,Ut,Zt,ce;const he=C.isCompressedTexture?C.mipmaps[V]:C.image;X!==null?(pt=X.max.x-X.min.x,bt=X.max.y-X.min.y,Pt=X.isBox3?X.max.z-X.min.z:1,Dt=X.min.x,Vt=X.min.y,Wt=X.isBox3?X.min.z:0):(pt=he.width,bt=he.height,Pt=he.depth||1,Dt=0,Vt=0,Wt=0),j!==null?(Ut=j.x,Zt=j.y,ce=j.z):(Ut=0,Zt=0,ce=0);const We=qt.convert(H.format),te=qt.convert(H.type);let Nt;H.isData3DTexture?(E.setTexture3D(H,0),Nt=B.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(E.setTexture2DArray(H,0),Nt=B.TEXTURE_2D_ARRAY):(E.setTexture2D(H,0),Nt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,H.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,H.unpackAlignment);const Hn=B.getParameter(B.UNPACK_ROW_LENGTH),ee=B.getParameter(B.UNPACK_IMAGE_HEIGHT),yn=B.getParameter(B.UNPACK_SKIP_PIXELS),ps=B.getParameter(B.UNPACK_SKIP_ROWS),Ke=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,he.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,he.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Dt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Vt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Wt);const vr=C.isDataArrayTexture||C.isData3DTexture,ue=H.isDataArrayTexture||H.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const In=N.get(C),_r=N.get(H),on=N.get(In.__renderTarget),ui=N.get(_r.__renderTarget);L.bindFramebuffer(B.READ_FRAMEBUFFER,on.__webglFramebuffer),L.bindFramebuffer(B.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let di=0;di<Pt;di++)vr&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,N.get(C).__webglTexture,V,Wt+di),C.isDepthTexture?(ue&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,N.get(H).__webglTexture,V,ce+di),B.blitFramebuffer(Dt,Vt,pt,bt,Ut,Zt,pt,bt,B.DEPTH_BUFFER_BIT,B.NEAREST)):ue?B.copyTexSubImage3D(Nt,V,Ut,Zt,ce+di,Dt,Vt,pt,bt):B.copyTexSubImage2D(Nt,V,Ut,Zt,ce+di,Dt,Vt,pt,bt);L.bindFramebuffer(B.READ_FRAMEBUFFER,null),L.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ue?C.isDataTexture||C.isData3DTexture?B.texSubImage3D(Nt,V,Ut,Zt,ce,pt,bt,Pt,We,te,he.data):H.isCompressedArrayTexture?B.compressedTexSubImage3D(Nt,V,Ut,Zt,ce,pt,bt,Pt,We,he.data):B.texSubImage3D(Nt,V,Ut,Zt,ce,pt,bt,Pt,We,te,he):C.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,V,Ut,Zt,pt,bt,We,te,he.data):C.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,V,Ut,Zt,he.width,he.height,We,he.data):B.texSubImage2D(B.TEXTURE_2D,V,Ut,Zt,pt,bt,We,te,he);B.pixelStorei(B.UNPACK_ROW_LENGTH,Hn),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ee),B.pixelStorei(B.UNPACK_SKIP_PIXELS,yn),B.pixelStorei(B.UNPACK_SKIP_ROWS,ps),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ke),V===0&&H.generateMipmaps&&B.generateMipmap(Nt),L.unbindTexture()},this.copyTextureToTexture3D=function(C,H,X=null,j=null,V=0){return C.isTexture!==!0&&(Nr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,j=arguments[1]||null,C=arguments[2],H=arguments[3],V=arguments[4]||0),Nr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,H,X,j,V)},this.initRenderTarget=function(C){N.get(C).__webglFramebuffer===void 0&&E.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?E.setTextureCube(C,0):C.isData3DTexture?E.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?E.setTexture2DArray(C,0):E.setTexture2D(C,0),L.unbindTexture()},this.resetState=function(){A=0,T=0,I=null,L.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}}class gu{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ft(t),this.near=e,this.far=n}clone(){return new gu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class al extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class BM extends Be{constructor(t=null,e=1,n=1,s,r,o,a,l,c=en,h=en,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xg extends pr{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const za=new k,Ha=new k,pf=new ae,Sr=new cu,Go=new rl,Yl=new k,mf=new k;class NM extends be{constructor(t=new vn,e=new xg){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)za.fromBufferAttribute(e,s-1),Ha.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=za.distanceTo(Ha);t.setAttribute("lineDistance",new Ve(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(s),Go.radius+=r,t.ray.intersectsSphere(Go)===!1)return;pf.copy(s).invert(),Sr.copy(t.ray).applyMatrix4(pf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=f,g=p-1;v<g;v+=c){const m=h.getX(v),x=h.getX(v+1),_=Wo(this,t,Sr,l,m,x);_&&e.push(_)}if(this.isLineLoop){const v=h.getX(p-1),g=h.getX(f),m=Wo(this,t,Sr,l,v,g);m&&e.push(m)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=f,g=p-1;v<g;v+=c){const m=Wo(this,t,Sr,l,v,v+1);m&&e.push(m)}if(this.isLineLoop){const v=Wo(this,t,Sr,l,p-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Wo(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(za.fromBufferAttribute(o,s),Ha.fromBufferAttribute(o,r),e.distanceSqToSegment(za,Ha,Yl,mf)>n)return;Yl.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Yl);if(!(l<t.near||l>t.far))return{distance:l,point:mf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const gf=new k,vf=new k;class FM extends NM{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)gf.fromBufferAttribute(e,s),vf.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+gf.distanceTo(vf);t.setAttribute("lineDistance",new Ve(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vu extends Be{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const $o=new k,Qo=new k,Xl=new k,qo=new fn;class kM extends vn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos($s*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:v,b:g,c:m}=qo;if(v.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),qo.getNormal(Xl),u[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,u[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const _=(x+1)%3,y=u[x],R=u[_],A=qo[h[x]],T=qo[h[_]],I=`${y}_${R}`,w=`${R}_${y}`;w in d&&d[w]?(Xl.dot(d[w].normal)<=r&&(f.push(A.x,A.y,A.z),f.push(T.x,T.y,T.z)),d[w]=null):I in d||(d[I]={index0:c[x],index1:c[_],normal:Xl.clone()})}}for(const p in d)if(d[p]){const{index0:v,index1:g}=d[p];$o.fromBufferAttribute(a,v),Qo.fromBufferAttribute(a,g),f.push($o.x,$o.y,$o.z),f.push(Qo.x,Qo.y,Qo.z)}this.setAttribute("position",new Ve(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class _u extends vn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new k,d=new k,f=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){const x=[],_=m/n;let y=0;m===0&&o===0?y=.5/e:m===n&&l===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){const A=R/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+_*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(A+y,1-_),x.push(c++)}h.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){const _=h[m][x+1],y=h[m][x],R=h[m+1][x],A=h[m+1][x+1];(m!==0||o>0)&&f.push(_,y,A),(m!==n-1||l<Math.PI)&&f.push(y,R,A)}this.setIndex(f),this.setAttribute("position",new Ve(p,3)),this.setAttribute("normal",new Ve(v,3)),this.setAttribute("uv",new Ve(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _u(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class OM extends ge{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Li extends pr{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rg,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class yu extends Li{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new kt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Se(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ft(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ft(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ft(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const _f={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class zM{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}}const HM=new zM;class xu{constructor(t){this.manager=t!==void 0?t:HM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}xu.DEFAULT_MATERIAL_NAME="__DEFAULT";const qn={};class VM extends Error{constructor(t,e){super(t),this.response=e}}class GM extends xu{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=_f.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(qn[t]!==void 0){qn[t].push({onLoad:e,onProgress:n,onError:s});return}qn[t]=[],qn[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=qn[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let v=0;const g=new ReadableStream({start(m){x();function x(){u.read().then(({done:_,value:y})=>{if(_)m.close();else{v+=y.byteLength;const R=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:f});for(let A=0,T=h.length;A<T;A++){const I=h[A];I.onProgress&&I.onProgress(R)}m.enqueue(y),x()}},_=>{m.error(_)})}}});return new Response(g)}else throw new VM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{_f.add(t,c);const h=qn[t];delete qn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=qn[t];if(h===void 0)throw this.manager.itemError(t),c;delete qn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class I2 extends xu{constructor(t){super(t)}load(t,e,n,s){const r=this,o=new BM,a=new GM(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:ei,o.wrapT=c.wrapT!==void 0?c.wrapT:ei,o.magFilter=c.magFilter!==void 0?c.magFilter:Ee,o.minFilter=c.minFilter!==void 0?c.minFilter:Ee,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=ni),c.mipmapCount===1&&(o.minFilter=Ee),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,e&&e(o,c)},n,s),o}}class bu extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class WM extends bu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const jl=new ae,yf=new k,xf=new k;class bg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new du,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;yf.setFromMatrixPosition(t.matrixWorld),e.position.copy(yf),xf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xf),e.updateMatrixWorld(),jl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const bf=new ae,Er=new k,Zl=new k;class $M extends bg{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new kt(4,2),this._viewportCount=6,this._viewports=[new Jt(2,1,1,1),new Jt(0,1,1,1),new Jt(3,1,1,1),new Jt(1,1,1,1),new Jt(3,0,1,1),new Jt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Er.setFromMatrixPosition(t.matrixWorld),n.position.copy(Er),Zl.copy(n.position),Zl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Zl),n.updateMatrixWorld(),s.makeTranslation(-Er.x,-Er.y,-Er.z),bf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bf)}}class wg extends bu{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new $M}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class QM extends bg{constructor(){super(new fu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wf extends bu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new QM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Mg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Mf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Mf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Mf(){return performance.now()}class Oe{constructor(t){this.value=t}clone(){return new Oe(this.value.clone===void 0?this.value:this.value.clone())}}const Sf=new ae;class qM{constructor(t,e,n=0,s=1/0){this.ray=new cu(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new hu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Sf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sf),this}intersectObject(t,e=!0,n=[]){return Dh(t,this,n,e),n.sort(Ef),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Dh(t[s],this,n,e);return n.sort(Ef),n}}function Ef(i,t){return i.distance-t.distance}function Dh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Dh(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nl);const Sg={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class gr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const KM=new fu(-1,1,1,-1,0,1);class YM extends vn{constructor(){super(),this.setAttribute("position",new Ve([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ve([0,2,0,0,2,0],2))}}const XM=new YM;class wu{constructor(t){this._mesh=new Qt(XM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,KM)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class jM extends gr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ge?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=rr.clone(t.uniforms),this.material=new ge({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new wu(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Af extends gr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class ZM extends gr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class JM{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new kt);this._width=n.width,this._height=n.height,e=new Ne(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:nn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new jM(Sg),this.copyPass.material.blending=Nn,this.clock=new Mg}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Af!==void 0&&(o instanceof Af?n=!0:o instanceof ZM&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new kt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class tS extends gr{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ft}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const eS={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ft(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class or extends gr{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new kt(t.x,t.y):new kt(256,256),this.clearColor=new Ft(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ne(r,o,{type:nn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Ne(r,o,{type:nn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Ne(r,o,{type:nn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=eS;this.highPassUniforms=rr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ge({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new kt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Sg;this.copyUniforms=rr.clone(h.uniforms),this.blendMaterial=new ge({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:js,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ft,this.oldClearAlpha=1,this.basic=new hi,this.fsQuad=new wu(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new kt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=or.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=or.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ge({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new kt(.5,.5)},direction:{value:new kt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new ge({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}or.BlurDirectionX=new kt(1,0);or.BlurDirectionY=new kt(0,1);const nS={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class iS extends gr{constructor(){super();const t=nS;this.uniforms=rr.clone(t.uniforms),this.material=new OM({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new wu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Xt.getTransfer(this._outputColorSpace)===ie&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Gm?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Wm?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===$m?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===eu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Qm?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===qm&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function Cf(i,t={}){const e=t.text||"> THE VAULT IS EMPTY_";i.innerHTML=`
    <div class="cssvault" aria-hidden="true">
      <div class="box">
        <div class="face front"></div><div class="face back"></div><div class="face left"></div><div class="face right"></div><div class="face top"></div><div class="face bottom"></div>
        <div class="screen"><span class="txt">${e.replace("_","")}</span><i class="cur"></i></div>
      </div>
      <div class="floor"></div>
    </div>`,i.dataset.stage="css";const n=i.querySelector(".txt");let s=!1;const r={start(){s=!0,i.classList.add("run"),i.dataset.running="1"},stop(){s=!1,i.classList.remove("run"),i.dataset.running="0"},setText(o){n&&(n.textContent=String(o).replace("_",""))},setPieces(){},knock(){return!1},frames:()=>0,running:()=>s};return i.__glassStage=r,r}function sS(i,t,e,n){const s=Object.entries(i);class r extends ge{constructor(a){super({uniforms:s.reduce((l,[c,h])=>{const u=rr.clone({[c]:{value:h}});return{...l,...u}},{}),vertexShader:t,fragmentShader:e});for(const[l]of s)Object.defineProperty(this,l,{get:()=>this.uniforms[l].value,set:c=>this.uniforms[l].value=c});Object.assign(this,a)}}return ct(r,"key",y_.generateUUID()),r}const rS=sS({},"void main() { }","void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard;  }");class oS extends al{constructor(){super();const t=new On;t.deleteAttribute("uv");const e=new Li({side:ve}),n=new Li,s=new wg(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Qt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Qt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Qt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new Qt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Qt(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new Qt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new Qt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new Qt(t,Is(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new Qt(t,Is(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const p=new Qt(t,Is(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);const v=new Qt(t,Is(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const g=new Qt(t,Is(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const m=new Qt(t,Is(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Is(i){const t=new hi;return t.color.setScalar(i),t}const Ar=new k;function ln(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Ar.copy(t),Ar[n]=0,Ar.normalize();const c=.5*o/(o+a),h=1-Ar.angleTo(i)/l;return Math.sign(Ar[e])===1?h*c:a/(o+a)+c+c*(1-h)}class Ko extends On{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new k,l=new k,c=new k(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,p=new k,v=.5/s;for(let g=0,m=0;g<h.length;g+=3,m+=2)switch(a.fromArray(h,g),l.copy(a),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),h[g+0]=c.x*Math.sign(a.x)+l.x*r,h[g+1]=c.y*Math.sign(a.y)+l.y*r,h[g+2]=c.z*Math.sign(a.z)+l.z*r,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/f)){case 0:p.set(1,0,0),d[m+0]=ln(p,l,"z","y",r,n),d[m+1]=1-ln(p,l,"y","z",r,e);break;case 1:p.set(-1,0,0),d[m+0]=1-ln(p,l,"z","y",r,n),d[m+1]=1-ln(p,l,"y","z",r,e);break;case 2:p.set(0,1,0),d[m+0]=1-ln(p,l,"x","z",r,t),d[m+1]=ln(p,l,"z","x",r,n);break;case 3:p.set(0,-1,0),d[m+0]=1-ln(p,l,"x","z",r,t),d[m+1]=1-ln(p,l,"z","x",r,n);break;case 4:p.set(0,0,1),d[m+0]=1-ln(p,l,"x","y",r,t),d[m+1]=1-ln(p,l,"y","x",r,e);break;case 5:p.set(0,0,-1),d[m+0]=ln(p,l,"x","y",r,t),d[m+1]=1-ln(p,l,"y","x",r,e);break}}}class aS extends yu{constructor({samples:t=6,transmissionSampler:e=!1,chromaticAberration:n=.05,transmission:s=0,_transmission:r=1,transmissionMap:o=null,roughness:a=0,thickness:l=0,thicknessMap:c=null,attenuationDistance:h=1/0,attenuationColor:u=new Ft("white"),anisotropicBlur:d=.1,time:f=0,distortion:p=0,distortionScale:v=.5,temporalDistortion:g=0,buffer:m=null}={}){super(),this.uniforms={chromaticAberration:{value:n},transmission:{value:s},_transmission:{value:r},transmissionMap:{value:o},roughness:{value:a},thickness:{value:l},thicknessMap:{value:c},attenuationDistance:{value:h},attenuationColor:{value:u},anisotropicBlur:{value:d},time:{value:f},distortion:{value:p},distortionScale:{value:v},temporalDistortion:{value:g},buffer:{value:m}},this.onBeforeCompile=x=>{x.uniforms={...x.uniforms,...this.uniforms},e?x.defines.USE_SAMPLER="":x.defines.USE_TRANSMISSION="",x.fragmentShader=`
      uniform float chromaticAberration;         
      uniform float anisotropicBlur;      
      uniform float time;
      uniform float distortion;
      uniform float distortionScale;
      uniform float temporalDistortion;
      uniform sampler2D buffer;

      vec3 random3(vec3 c) {
        float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
        vec3 r;
        r.z = fract(512.0*j);
        j *= .125;
        r.x = fract(512.0*j);
        j *= .125;
        r.y = fract(512.0*j);
        return r-0.5;
      }

      uint hash( uint x ) {
        x += ( x << 10u );
        x ^= ( x >>  6u );
        x += ( x <<  3u );
        x ^= ( x >> 11u );
        x += ( x << 15u );
        return x;
      }

      // Compound versions of the hashing algorithm I whipped together.
      uint hash( uvec2 v ) { return hash( v.x ^ hash(v.y)                         ); }
      uint hash( uvec3 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z)             ); }
      uint hash( uvec4 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z) ^ hash(v.w) ); }

      // Construct a float with half-open range [0:1] using low 23 bits.
      // All zeroes yields 0.0, all ones yields the next smallest representable value below 1.0.
      float floatConstruct( uint m ) {
        const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
        const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32
        m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
        m |= ieeeOne;                          // Add fractional part to 1.0
        float  f = uintBitsToFloat( m );       // Range [1:2]
        return f - 1.0;                        // Range [0:1]
      }

      // Pseudo-random value in half-open range [0:1].
      float randomBase( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
      float randomBase( vec2  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec3  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec4  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float rand(float seed) {
        float result = randomBase(vec3(gl_FragCoord.xy, seed));
        return result;
      }

      const float F3 =  0.3333333;
      const float G3 =  0.1666667;

      float snoise(vec3 p) {
        vec3 s = floor(p + dot(p, vec3(F3)));
        vec3 x = p - s + dot(s, vec3(G3));
        vec3 e = step(vec3(0.0), x - x.yzx);
        vec3 i1 = e*(1.0 - e.zxy);
        vec3 i2 = 1.0 - e.zxy*(1.0 - e);
        vec3 x1 = x - i1 + G3;
        vec3 x2 = x - i2 + 2.0*G3;
        vec3 x3 = x - 1.0 + 3.0*G3;
        vec4 w, d;
        w.x = dot(x, x);
        w.y = dot(x1, x1);
        w.z = dot(x2, x2);
        w.w = dot(x3, x3);
        w = max(0.6 - w, 0.0);
        d.x = dot(random3(s), x);
        d.y = dot(random3(s + i1), x1);
        d.z = dot(random3(s + i2), x2);
        d.w = dot(random3(s + 1.0), x3);
        w *= w;
        w *= w;
        d *= w;
        return dot(d, vec4(52.0));
      }

      float snoiseFractal(vec3 m) {
        return 0.5333333* snoise(m)
              +0.2666667* snoise(2.0*m)
              +0.1333333* snoise(4.0*m)
              +0.0666667* snoise(8.0*m);
      }
`+x.fragmentShader,x.fragmentShader=x.fragmentShader.replace("#include <transmission_pars_fragment>",`
        #ifdef USE_TRANSMISSION
          // Transmission code is based on glTF-Sampler-Viewer
          // https://github.com/KhronosGroup/glTF-Sample-Viewer
          uniform float _transmission;
          uniform float thickness;
          uniform float attenuationDistance;
          uniform vec3 attenuationColor;
          #ifdef USE_TRANSMISSIONMAP
            uniform sampler2D transmissionMap;
          #endif
          #ifdef USE_THICKNESSMAP
            uniform sampler2D thicknessMap;
          #endif
          uniform vec2 transmissionSamplerSize;
          uniform sampler2D transmissionSamplerMap;
          uniform mat4 modelMatrix;
          uniform mat4 projectionMatrix;
          varying vec3 vWorldPosition;
          vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
            // Direction of refracted light.
            vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
            // Compute rotation-independant scaling of the model matrix.
            vec3 modelScale;
            modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
            modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
            modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
            // The thickness is specified in local space.
            return normalize( refractionVector ) * thickness * modelScale;
          }
          float applyIorToRoughness( const in float roughness, const in float ior ) {
            // Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
            // an IOR of 1.5 results in the default amount of microfacet refraction.
            return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
          }
          vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
            float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );            
            #ifdef USE_SAMPLER
              #ifdef texture2DLodEXT
                return texture2DLodEXT(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #else
                return texture2D(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #endif
            #else
              return texture2D(buffer, fragCoord.xy);
            #endif
          }
          vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
            if ( isinf( attenuationDistance ) ) {
              // Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.
              return radiance;
            } else {
              // Compute light attenuation using Beer's law.
              vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
              vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
              return transmittance * radiance;
            }
          }
          vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
            const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
            const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
            const in vec3 attenuationColor, const in float attenuationDistance ) {
            vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
            vec3 refractedRayExit = position + transmissionRay;
            // Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
            vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
            vec2 refractionCoords = ndcPos.xy / ndcPos.w;
            refractionCoords += 1.0;
            refractionCoords /= 2.0;
            // Sample framebuffer to get pixel the refracted ray hits.
            vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
            vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
            // Get the specular component.
            vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
            return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
          }
        #endif
`),x.fragmentShader=x.fragmentShader.replace("#include <transmission_fragment>",`  
        // Improve the refraction to use the world pos
        material.transmission = _transmission;
        material.transmissionAlpha = 1.0;
        material.thickness = thickness;
        material.attenuationDistance = attenuationDistance;
        material.attenuationColor = attenuationColor;
        #ifdef USE_TRANSMISSIONMAP
          material.transmission *= texture2D( transmissionMap, vUv ).r;
        #endif
        #ifdef USE_THICKNESSMAP
          material.thickness *= texture2D( thicknessMap, vUv ).g;
        #endif
        
        vec3 pos = vWorldPosition;
        float runningSeed = 0.0;
        vec3 v = normalize( cameraPosition - pos );
        vec3 n = inverseTransformDirection( normal, viewMatrix );
        vec3 transmission = vec3(0.0);
        float transmissionR, transmissionB, transmissionG;
        float randomCoords = rand(runningSeed++);
        float thickness_smear = thickness * max(pow(roughnessFactor, 0.33), anisotropicBlur);
        vec3 distortionNormal = vec3(0.0);
        vec3 temporalOffset = vec3(time, -time, -time) * temporalDistortion;
        if (distortion > 0.0) {
          distortionNormal = distortion * vec3(snoiseFractal(vec3((pos * distortionScale + temporalOffset))), snoiseFractal(vec3(pos.zxy * distortionScale - temporalOffset)), snoiseFractal(vec3(pos.yxz * distortionScale + temporalOffset)));
        }
        for (float i = 0.0; i < ${t}.0; i ++) {
          vec3 sampleNorm = normalize(n + roughnessFactor * roughnessFactor * 2.0 * normalize(vec3(rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5)) * pow(rand(runningSeed++), 0.33) + distortionNormal);
          transmissionR = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness  + thickness_smear * (i + randomCoords) / float(${t}),
            material.attenuationColor, material.attenuationDistance
          ).r;
          transmissionG = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior  * (1.0 + chromaticAberration * (i + randomCoords) / float(${t})) , material.thickness + thickness_smear * (i + randomCoords) / float(${t}),
            material.attenuationColor, material.attenuationDistance
          ).g;
          transmissionB = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior * (1.0 + 2.0 * chromaticAberration * (i + randomCoords) / float(${t})), material.thickness + thickness_smear * (i + randomCoords) / float(${t}),
            material.attenuationColor, material.attenuationDistance
          ).b;
          transmission.r += transmissionR;
          transmission.g += transmissionG;
          transmission.b += transmissionB;
        }
        transmission /= ${t}.0;
        totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
`)},Object.keys(this.uniforms).forEach(x=>Object.defineProperty(this,x,{get:()=>this.uniforms[x].value,set:_=>this.uniforms[x].value=_}))}}class lS extends ge{constructor(t=new kt){super({uniforms:{inputBuffer:new Oe(null),depthBuffer:new Oe(null),resolution:new Oe(new kt),texelSize:new Oe(new kt),halfTexelSize:new Oe(new kt),kernel:new Oe(0),scale:new Oe(1),cameraNear:new Oe(0),cameraFar:new Oe(1),minDepthThreshold:new Oe(0),maxDepthThreshold:new Oe(1),depthScale:new Oe(0),depthToBlurRatioBias:new Oe(.25)},fragmentShader:`#include <common>
        #include <dithering_pars_fragment>      
        uniform sampler2D inputBuffer;
        uniform sampler2D depthBuffer;
        uniform float cameraNear;
        uniform float cameraFar;
        uniform float minDepthThreshold;
        uniform float maxDepthThreshold;
        uniform float depthScale;
        uniform float depthToBlurRatioBias;
        varying vec2 vUv;
        varying vec2 vUv0;
        varying vec2 vUv1;
        varying vec2 vUv2;
        varying vec2 vUv3;

        void main() {
          float depthFactor = 0.0;
          
          #ifdef USE_DEPTH
            vec4 depth = texture2D(depthBuffer, vUv);
            depthFactor = smoothstep(minDepthThreshold, maxDepthThreshold, 1.0-(depth.r * depth.a));
            depthFactor *= depthScale;
            depthFactor = max(0.0, min(1.0, depthFactor + 0.25));
          #endif
          
          vec4 sum = texture2D(inputBuffer, mix(vUv0, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv1, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv2, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv3, vUv, depthFactor));
          gl_FragColor = sum * 0.25 ;

          #include <dithering_fragment>
          #include <tonemapping_fragment>
          #include <${parseInt(nl.replace(/\D+/g,""))>=154?"colorspace_fragment":"encodings_fragment"}>
        }`,vertexShader:`uniform vec2 texelSize;
        uniform vec2 halfTexelSize;
        uniform float kernel;
        uniform float scale;
        varying vec2 vUv;
        varying vec2 vUv0;
        varying vec2 vUv1;
        varying vec2 vUv2;
        varying vec2 vUv3;

        void main() {
          vec2 uv = position.xy * 0.5 + 0.5;
          vUv = uv;

          vec2 dUv = (texelSize * vec2(kernel) + halfTexelSize) * scale;
          vUv0 = vec2(uv.x - dUv.x, uv.y + dUv.y);
          vUv1 = vec2(uv.x + dUv.x, uv.y + dUv.y);
          vUv2 = vec2(uv.x + dUv.x, uv.y - dUv.y);
          vUv3 = vec2(uv.x - dUv.x, uv.y - dUv.y);

          gl_Position = vec4(position.xy, 1.0, 1.0);
        }`,blending:Nn,depthWrite:!1,depthTest:!1}),this.toneMapped=!1,this.setTexelSize(t.x,t.y),this.kernel=new Float32Array([0,1,2,2,3])}setTexelSize(t,e){this.uniforms.texelSize.value.set(t,e),this.uniforms.halfTexelSize.value.set(t,e).multiplyScalar(.5)}setResolution(t){this.uniforms.resolution.value.copy(t)}}class cS{constructor({gl:t,resolution:e,width:n=500,height:s=500,minDepthThreshold:r=0,maxDepthThreshold:o=1,depthScale:a=0,depthToBlurRatioBias:l=.25}){ct(this,"renderToScreen",!1);this.renderTargetA=new Ne(e,e,{minFilter:Ee,magFilter:Ee,stencilBuffer:!1,depthBuffer:!1,type:nn}),this.renderTargetB=this.renderTargetA.clone(),this.convolutionMaterial=new lS,this.convolutionMaterial.setTexelSize(1/n,1/s),this.convolutionMaterial.setResolution(new kt(n,s)),this.scene=new al,this.camera=new uu,this.convolutionMaterial.uniforms.minDepthThreshold.value=r,this.convolutionMaterial.uniforms.maxDepthThreshold.value=o,this.convolutionMaterial.uniforms.depthScale.value=a,this.convolutionMaterial.uniforms.depthToBlurRatioBias.value=l,this.convolutionMaterial.defines.USE_DEPTH=a>0;const c=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),h=new Float32Array([0,0,2,0,0,2]),u=new vn;u.setAttribute("position",new pn(c,3)),u.setAttribute("uv",new pn(h,2)),this.screen=new Qt(u,this.convolutionMaterial),this.screen.frustumCulled=!1,this.scene.add(this.screen)}render(t,e,n){const s=this.scene,r=this.camera,o=this.renderTargetA,a=this.renderTargetB,l=this.convolutionMaterial,c=l.uniforms;c.depthBuffer.value=e.depthTexture;const h=l.kernel;let u=e,d,f,p;for(f=0,p=h.length-1;f<p;++f)d=(f&1)===0?o:a,c.kernel.value=h[f],c.inputBuffer.value=u.texture,t.setRenderTarget(d),t.render(s,r),u=d;c.kernel.value=h[f],c.inputBuffer.value=u.texture,t.setRenderTarget(this.renderToScreen?null:n),t.render(s,r)}}class hS extends Li{constructor(e={}){super();ct(this,"_tDepth",{value:null});ct(this,"_distortionMap",{value:null});ct(this,"_tDiffuse",{value:null});ct(this,"_tDiffuseBlur",{value:null});ct(this,"_textureMatrix",{value:null});ct(this,"_hasBlur",{value:!1});ct(this,"_mirror",{value:0});ct(this,"_mixBlur",{value:0});ct(this,"_blurStrength",{value:.5});ct(this,"_minDepthThreshold",{value:.9});ct(this,"_maxDepthThreshold",{value:1});ct(this,"_depthScale",{value:0});ct(this,"_depthToBlurRatioBias",{value:.25});ct(this,"_distortion",{value:1});ct(this,"_mixContrast",{value:1});this._tDepth={value:null},this._distortionMap={value:null},this._tDiffuse={value:null},this._tDiffuseBlur={value:null},this._textureMatrix={value:null},this._hasBlur={value:!1},this._mirror={value:0},this._mixBlur={value:0},this._blurStrength={value:.5},this._minDepthThreshold={value:.9},this._maxDepthThreshold={value:1},this._depthScale={value:0},this._depthToBlurRatioBias={value:.25},this._distortion={value:1},this._mixContrast={value:1},this.setValues(e)}onBeforeCompile(e){var n;(n=e.defines)!=null&&n.USE_UV||(e.defines.USE_UV=""),e.uniforms.hasBlur=this._hasBlur,e.uniforms.tDiffuse=this._tDiffuse,e.uniforms.tDepth=this._tDepth,e.uniforms.distortionMap=this._distortionMap,e.uniforms.tDiffuseBlur=this._tDiffuseBlur,e.uniforms.textureMatrix=this._textureMatrix,e.uniforms.mirror=this._mirror,e.uniforms.mixBlur=this._mixBlur,e.uniforms.mixStrength=this._blurStrength,e.uniforms.minDepthThreshold=this._minDepthThreshold,e.uniforms.maxDepthThreshold=this._maxDepthThreshold,e.uniforms.depthScale=this._depthScale,e.uniforms.depthToBlurRatioBias=this._depthToBlurRatioBias,e.uniforms.distortion=this._distortion,e.uniforms.mixContrast=this._mixContrast,e.vertexShader=`
        uniform mat4 textureMatrix;
        varying vec4 my_vUv;
      ${e.vertexShader}`,e.vertexShader=e.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
        my_vUv = textureMatrix * vec4( position, 1.0 );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );`),e.fragmentShader=`
        uniform sampler2D tDiffuse;
        uniform sampler2D tDiffuseBlur;
        uniform sampler2D tDepth;
        uniform sampler2D distortionMap;
        uniform float distortion;
        uniform float cameraNear;
			  uniform float cameraFar;
        uniform bool hasBlur;
        uniform float mixBlur;
        uniform float mirror;
        uniform float mixStrength;
        uniform float minDepthThreshold;
        uniform float maxDepthThreshold;
        uniform float mixContrast;
        uniform float depthScale;
        uniform float depthToBlurRatioBias;
        varying vec4 my_vUv;
        ${e.fragmentShader}`,e.fragmentShader=e.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>

      float distortionFactor = 0.0;
      #ifdef USE_DISTORTION
        distortionFactor = texture2D(distortionMap, vUv).r * distortion;
      #endif

      vec4 new_vUv = my_vUv;
      new_vUv.x += distortionFactor;
      new_vUv.y += distortionFactor;

      vec4 base = texture2DProj(tDiffuse, new_vUv);
      vec4 blur = texture2DProj(tDiffuseBlur, new_vUv);

      vec4 merge = base;

      #ifdef USE_NORMALMAP
        vec2 normal_uv = vec2(0.0);
        vec4 normalColor = texture2D(normalMap, vUv * normalScale);
        vec3 my_normal = normalize( vec3( normalColor.r * 2.0 - 1.0, normalColor.b,  normalColor.g * 2.0 - 1.0 ) );
        vec3 coord = new_vUv.xyz / new_vUv.w;
        normal_uv = coord.xy + coord.z * my_normal.xz * 0.05;
        vec4 base_normal = texture2D(tDiffuse, normal_uv);
        vec4 blur_normal = texture2D(tDiffuseBlur, normal_uv);
        merge = base_normal;
        blur = blur_normal;
      #endif

      float depthFactor = 0.0001;
      float blurFactor = 0.0;

      #ifdef USE_DEPTH
        vec4 depth = texture2DProj(tDepth, new_vUv);
        depthFactor = smoothstep(minDepthThreshold, maxDepthThreshold, 1.0-(depth.r * depth.a));
        depthFactor *= depthScale;
        depthFactor = max(0.0001, min(1.0, depthFactor));

        #ifdef USE_BLUR
          blur = blur * min(1.0, depthFactor + depthToBlurRatioBias);
          merge = merge * min(1.0, depthFactor + 0.5);
        #else
          merge = merge * depthFactor;
        #endif

      #endif

      float reflectorRoughnessFactor = roughness;
      #ifdef USE_ROUGHNESSMAP
        vec4 reflectorTexelRoughness = texture2D( roughnessMap, vUv );
        reflectorRoughnessFactor *= reflectorTexelRoughness.g;
      #endif

      #ifdef USE_BLUR
        blurFactor = min(1.0, mixBlur * reflectorRoughnessFactor);
        merge = mix(merge, blur, blurFactor);
      #endif

      vec4 newMerge = vec4(0.0, 0.0, 0.0, 1.0);
      newMerge.r = (merge.r - 0.5) * mixContrast + 0.5;
      newMerge.g = (merge.g - 0.5) * mixContrast + 0.5;
      newMerge.b = (merge.b - 0.5) * mixContrast + 0.5;

      diffuseColor.rgb = diffuseColor.rgb * ((1.0 - min(1.0, mirror)) + newMerge.rgb * mixStrength);
      `)}get tDiffuse(){return this._tDiffuse.value}set tDiffuse(e){this._tDiffuse.value=e}get tDepth(){return this._tDepth.value}set tDepth(e){this._tDepth.value=e}get distortionMap(){return this._distortionMap.value}set distortionMap(e){this._distortionMap.value=e}get tDiffuseBlur(){return this._tDiffuseBlur.value}set tDiffuseBlur(e){this._tDiffuseBlur.value=e}get textureMatrix(){return this._textureMatrix.value}set textureMatrix(e){this._textureMatrix.value=e}get hasBlur(){return this._hasBlur.value}set hasBlur(e){this._hasBlur.value=e}get mirror(){return this._mirror.value}set mirror(e){this._mirror.value=e}get mixBlur(){return this._mixBlur.value}set mixBlur(e){this._mixBlur.value=e}get mixStrength(){return this._blurStrength.value}set mixStrength(e){this._blurStrength.value=e}get minDepthThreshold(){return this._minDepthThreshold.value}set minDepthThreshold(e){this._minDepthThreshold.value=e}get maxDepthThreshold(){return this._maxDepthThreshold.value}set maxDepthThreshold(e){this._maxDepthThreshold.value=e}get depthScale(){return this._depthScale.value}set depthScale(e){this._depthScale.value=e}get depthToBlurRatioBias(){return this._depthToBlurRatioBias.value}set depthToBlurRatioBias(e){this._depthToBlurRatioBias.value=e}get distortion(){return this._distortion.value}set distortion(e){this._distortion.value=e}get mixContrast(){return this._mixContrast.value}set mixContrast(e){this._mixContrast.value=e}}const Tf=(i,t)=>new Ne(i,t,{type:nn,samples:4,depthBuffer:!0,stencilBuffer:!1}),If=[2560,1440];function uS({W:i,H:t,D:e,color:n="#f6fbff"}){const s=new On(i,t,e),r=new rS,o={thickness:.05,backsideThickness:.08,backside:!1,samples:8,roughness:.02,chromaticAberration:.008,anisotropicBlur:0,envMapIntensity:.2};let a=null;function l(_,y,R){const A=new aS({samples:_,_transmission:1,thickness:R,roughness:o.roughness,ior:1.5,chromaticAberration:o.chromaticAberration,anisotropicBlur:o.anisotropicBlur,distortion:0,attenuationColor:new Ft("#e6fff0"),attenuationDistance:4});return A.color=new Ft(n),A.ior=1.5,A.side=y,A.clearcoat=0,A.specularIntensity=.35,A.envMap=a,A.envMapIntensity=y===ve?o.envMapIntensity*.12:o.envMapIntensity,A}let c=l(o.samples,Fn,o.thickness),h=l(o.samples,ve,o.backsideThickness);const u=new Qt(s,c);u.name="glass";const d=new FM(new kM(s),new xg({color:"#dfffe9",transparent:!0,opacity:.26,depthWrite:!1,depthTest:!1}));d.renderOrder=6,d.name="glass-edges",u.add(d);const f=new yu({color:new Ft(n),transparent:!0,opacity:.16,roughness:.03,metalness:0,clearcoat:1,clearcoatRoughness:.03,depthWrite:!1});let p=Tf(2,2),v=Tf(2,2),g=1;function m(_,y){const R=Math.max(2,Math.round(Math.min(If[0],_)*g)),A=Math.max(2,Math.round(Math.min(If[1],y)*g));p.setSize(R,A),v.setSize(R,A)}function x(_,y,R,A=[]){const T=_.getRenderTarget(),I=A.concat([d]).filter(w=>w.visible);I.forEach(w=>{w.visible=!1}),u.material=r,o.backside&&(_.setRenderTarget(p),_.render(y,R),h.buffer=p.texture,u.material=h),_.setRenderTarget(v),_.render(y,R),c.buffer=v.texture,u.material=c,_.setRenderTarget(T),I.forEach(w=>{w.visible=!0})}return{mesh:u,edges:d,proxy:f,look:o,capture:x,get material(){return c},get fboMain(){return v},get fboBack(){return p},setSize:m,setTime(_){c.time=_,h.time=_},setEnvironment(_,y=o.envMapIntensity){a=_,o.envMapIntensity=y,c.envMap=_,c.envMapIntensity=y,c.needsUpdate=!0,h.envMap=_,h.envMapIntensity=y*.12,h.needsUpdate=!0,f.envMap=_,f.envMapIntensity=y*.3,f.needsUpdate=!0},degrade(_,y){return g===1?(g=.5,m(_,y),!0):o.samples===4?!1:(o.samples=4,o.backside=!1,g=.25,c.dispose(),h.dispose(),c=l(4,Fn,o.thickness),h=l(4,ve,o.backsideThickness),u.material=c,m(_,y),!0)}}}function dS({size:i=14,y:t=-.5,resolution:e=512}={}){const n={blur:[420,110],mixBlur:1,mixStrength:5,mirror:.22,depthScale:.5,minDepthThreshold:0,maxDepthThreshold:.6,depthToBlurRatioBias:.25,distortion:0,mixContrast:1,color:"#0b0a12",roughness:.9,metalness:.5},s=new ae,r=new Qt(new sn(i,i),null);r.rotation.x=-Math.PI/2,r.position.y=t,r.name="floor";let o,a,l,c;function h(I){const w={minFilter:Ee,magFilter:Ee,type:nn};o=new Ne(I,I,w),o.depthBuffer=!0,o.depthTexture=new mu(I,I),o.depthTexture.format=Xi,o.depthTexture.type=er,a=new Ne(I,I,w),l=new cS({gl:null,resolution:I,width:n.blur[0],height:n.blur[1],minDepthThreshold:n.minDepthThreshold,maxDepthThreshold:n.maxDepthThreshold,depthScale:n.depthScale,depthToBlurRatioBias:n.depthToBlurRatioBias}),c=new hS({mirror:n.mirror,textureMatrix:s,mixBlur:n.mixBlur,tDiffuse:o.texture,tDepth:o.depthTexture,tDiffuseBlur:a.texture,hasBlur:!0,mixStrength:n.mixStrength,minDepthThreshold:n.minDepthThreshold,maxDepthThreshold:n.maxDepthThreshold,depthScale:n.depthScale,depthToBlurRatioBias:n.depthToBlurRatioBias,distortion:n.distortion,mixContrast:n.mixContrast,color:new Ft(n.color),roughness:n.roughness,metalness:n.metalness}),c.defines.USE_BLUR="",c.defines.USE_DEPTH="",c.envMapIntensity=.25,r.material=c}h(e);const u=new Si,d=new k,f=new k,p=new k,v=new ae,g=new k,m=new Jt,x=new k,_=new k,y=new Jt,R=new $e;function A(I){if(f.setFromMatrixPosition(r.matrixWorld),p.setFromMatrixPosition(I.matrixWorld),v.extractRotation(r.matrixWorld),d.set(0,0,1).applyMatrix4(v),x.subVectors(f,p),x.dot(d)>0)return!1;x.reflect(d).negate().add(f),v.extractRotation(I.matrixWorld),g.set(0,0,-1).applyMatrix4(v).add(p),_.subVectors(f,g).reflect(d).negate().add(f),R.position.copy(x),R.up.set(0,1,0).applyMatrix4(v).reflect(d),R.lookAt(_),R.far=I.far,R.updateMatrixWorld(),R.projectionMatrix.copy(I.projectionMatrix),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(R.projectionMatrix).multiply(R.matrixWorldInverse).multiply(r.matrixWorld),u.setFromNormalAndCoplanarPoint(d,f).applyMatrix4(R.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const w=R.projectionMatrix;return y.x=(Math.sign(m.x)+w.elements[8])/w.elements[0],y.y=(Math.sign(m.y)+w.elements[9])/w.elements[5],y.z=-1,y.w=(1+w.elements[10])/w.elements[14],m.multiplyScalar(2/m.dot(y)),w.elements[2]=m.x,w.elements[6]=m.y,w.elements[10]=m.z+1,w.elements[14]=m.w,!0}function T(I,w,b,S=[]){if(!A(b))return;const U=I.getRenderTarget(),P=S.map(D=>{const nt=D.mesh.material;return D.mesh.material=D.material,nt});r.visible=!1;const W=I.xr.enabled,Z=I.shadowMap.autoUpdate;I.xr.enabled=!1,I.shadowMap.autoUpdate=!1,I.setRenderTarget(o),I.state.buffers.depth.setMask(!0),I.autoClear||I.clear(),I.render(w,R),l.render(I,o,a),I.xr.enabled=W,I.shadowMap.autoUpdate=Z,r.visible=!0,S.forEach((D,nt)=>{D.mesh.material=P[nt]}),I.setRenderTarget(U)}return{mesh:r,capture:T,get material(){return c},setResolution(I){o.width!==I&&(o.dispose(),a.dispose(),l.renderTargetA.dispose(),l.renderTargetB.dispose(),l.convolutionMaterial.dispose(),c.dispose(),h(I))}}}const Mu="#f4b728";function fS(i=2.5){const t=new hi({color:new Ft(Mu).multiplyScalar(i),side:dn,fog:!1,toneMapped:!1}),e=new Qt(new sn(3,1.6),t);return e.name="violet-softbox",e.visible=!1,e}function pS(i,t,e){const n=new k().subVectors(t.position,e).normalize(),s=new k().crossVectors(new k(0,1,0),n).normalize().negate(),r=new k().crossVectors(n,s).normalize();i.position.copy(t.position).addScaledVector(r,2.4).addScaledVector(s,-3.2).addScaledVector(n,1),i.lookAt(e)}function mS(i,t,e,{mapBoost:n=6,rotation:s=0}={}){return Om(async()=>{const{RGBELoader:r}=await import("./RGBELoader-c4IS4tyL.js");return{RGBELoader:r}},[],import.meta.url).then(({RGBELoader:r})=>new Promise((o,a)=>{new r().load(e,l=>{l.mapping=Na,l.colorSpace=fs;const c=new al,h=new Qt(new _u(20,48,24),new hi({map:l,side:ve,toneMapped:!1,fog:!1}));h.rotation.y=s,c.add(h);const u=t.clone();u.material=t.material.clone(),u.material.color.copy(new Ft(Mu).multiplyScalar(n)),u.visible=!0,c.add(u);const d=new Oa(i),f=d.fromScene(c,.02).texture;d.dispose(),u.material.dispose(),h.geometry.dispose(),h.material.dispose(),l.dispose(),o(f)},void 0,a)}))}function gS(i,t,e=6){const n=new oS,s=t.clone();s.material=t.material.clone(),s.material.color.copy(new Ft(Mu).multiplyScalar(e)),s.visible=!0,n.add(s);const r=new Oa(i),o=r.fromScene(n,.04).texture;return r.dispose(),s.material.dispose(),n.traverse(a=>{a.isMesh&&(a.geometry?.dispose?.(),a.material?.dispose?.())}),o}const Rf="#5dff8f";function vS(i,{W:t,H:e,D:n}){const s=new Bn;s.name="terminal";const r=t*.44,o=r/2.39,a=.034,l=r+a*2,c=o+a*2,h=.085,u=.14,d=new Li({color:"#15161d",roughness:.55,metalness:.2,envMapIntensity:.55}),f=new Li({color:"#23242c",roughness:.68,metalness:.15,envMapIntensity:.4}),p=new Li({color:"#050607",roughness:.92,metalness:.05}),v=new Qt(new Ko(l,c,h,5,.022),d);v.position.z=-.024;const g=.012,m=h/2-.004+g/2,x=[[l,a,0,c/2-a/2],[l,a,0,-c/2+a/2],[a,o,-l/2+a/2,0],[a,o,l/2-a/2,0]].map(([nt,q,lt,K])=>{const $=new Qt(new Ko(nt,q,g,2,.004),f);return $.position.set(lt,K,m),$}),_=h/2-.004-.018,y=new Qt(new sn(r,o),p);y.position.z=_;const R=new Qt(new sn(r-.006,o-.006),new hi({map:i,color:new Ft(1.3,1.3,1.3)}));R.position.z=_+.003;const A=new Qt(new sn(r-.002,o-.002),new yu({color:"#cfe9dc",transparent:!0,opacity:.05,roughness:.12,metalness:0,clearcoat:.6,clearcoatRoughness:.12,envMapIntensity:.35,depthWrite:!1}));A.position.z=_+.012,A.renderOrder=3;const T=new Bn;T.add(v,...x,y,R,A),T.position.y=u,s.add(T);const I=-e/2,w=u-c/2-I,b=new Qt(new Ko(.07,w+.01,.07,3,.01),d);b.position.set(0,I+w/2-.005,-.012);const S=new Qt(new Ko(.28,.02,.17,3,.008),d);S.position.set(0,I+.01,-.012),s.add(b,S);const U=new WM(new Ft(Rf).multiplyScalar(.55),"#03110a",.75);U.position.set(0,u+.2,h/2+.2);const P=new wg(Rf,0,1.2,2);P.position.set(0,u-.08,h/2+.28),s.add(U,P),s.position.set(0,0,-n*.22);const W=s.position.clone();let Z=0,D=1;return{group:s,screen:R,light:P,nudge(nt=1){Z=.0015*Math.max(.4,Math.min(1,nt)),D=Math.random()<.5?-1:1},update(nt){Z>0?(s.position.z=W.z-Z*D*.6,s.position.x=W.x+Z*D,Z=Math.max(0,Z-nt*.008)):s.position.copy(W)}}}const _S="#5dff8f",Yo=[[.02,.44],[.1,.4],[.16,.4],[.2,.33],[.27,.27],[.36,.25],[.42,.28],[.44,.33],[.5,.31],[.54,.3],[.7,.34],[.86,.38],[.97,.41],[1,.44],[.98,.48],[.86,.47],[.7,.45],[.57,.43],[.63,.47],[.66,.54],[.6,.58],[.65,.62],[.65,.69],[.57,.72],[.6,.76],[.57,.82],[.47,.83],[.32,.82],[.16,.77],[.06,.72],[.02,.64]],yS=[[[.53,.32],[.56,.37],[.56,.42]],[[.7,.35],[.71,.4],[.7,.44]],[[.85,.385],[.86,.42],[.85,.465]],[[.5,.46],[.56,.52],[.54,.58]],[[.48,.6],[.55,.66],[.52,.72]],[[.44,.73],[.5,.78]],[[.2,.42],[.3,.44],[.42,.4]],[[.1,.5],[.14,.62],[.2,.72]]];function Cr(i,t,e,n,s,r){i.beginPath(),t.forEach(([o,a],l)=>{const c=n+o*e,h=s+a*e;l===0?i.moveTo(c,h):i.lineTo(c,h)}),r&&i.closePath()}function Eg(i,{level:t=1,glitch:e=0}={}){const n=i.width,s=i.getContext("2d");s.clearRect(0,0,n,n);const r=n*.08,o=n-r*2,a=r,l=r;s.save(),s.globalAlpha=Math.max(0,Math.min(1,t)),s.lineJoin="round",s.lineCap="round";const c=s.createLinearGradient(a,0,a+o,0);if(c.addColorStop(0,"rgba(93,255,143,.05)"),c.addColorStop(1,"rgba(93,255,143,.16)"),Cr(s,Yo,o,a,l,!0),s.fillStyle=c,s.fill(),s.lineWidth=n*.006,s.strokeStyle="rgba(120,255,255,.45)",Cr(s,Yo,o,a-n*.004,l,!0),s.stroke(),s.strokeStyle="rgba(214,255,120,.45)",Cr(s,Yo,o,a+n*.004,l,!0),s.stroke(),s.shadowColor="rgba(93,255,143,.9)",s.shadowBlur=n*.035,s.strokeStyle=_S,s.lineWidth=n*.007,Cr(s,Yo,o,a,l,!0),s.stroke(),s.shadowBlur=0,s.strokeStyle="rgba(93,255,143,.55)",s.lineWidth=n*.004,yS.forEach(h=>{Cr(s,h,o,a,l,!1),s.stroke()}),s.fillStyle="#b8ffd0",s.shadowColor="rgba(93,255,143,1)",s.shadowBlur=n*.05,s.beginPath(),s.arc(a+o*.985,l+o*.44,n*.011,0,Math.PI*2),s.fill(),s.shadowBlur=0,s.restore(),e>.01){const h=Math.round(3+e*9);for(let u=0;u<h;u++){const d=Math.floor(Math.random()*n),f=2+Math.floor(Math.random()*n*.03*e),p=(Math.random()-.5)*n*.12*e,v=s.getImageData(0,d,n,f);s.clearRect(0,d,n,f),s.putImageData(v,p,d)}}s.save(),s.globalCompositeOperation="destination-out",s.fillStyle="rgba(0,0,0,.35)";for(let h=0;h<n;h+=3)s.fillRect(0,h,n,1);return s.restore(),i}function xS(i={}){const t=i.size||512,e=document.createElement("canvas");return e.width=t,e.height=t,Eg(e,i)}const Lf={u:.08+.84*.985,v:.08+.84*.44},Jl=.55,tc=.05,Pf=.04,Df=.5,Uf=.55,zi=.06,ec=.001,Bf=.11,bS=.17,Xo=4,Nf=i=>1-Math.pow(1-i,3),Ff=i=>i*i*i,Fs=i=>Math.max(0,Math.min(1,i));function wS(i,t,e){const n={time:{value:0},aspect:{value:i/t},rings:{value:Array.from({length:Xo},()=>new Jt(0,0,-100,0))}},s=new ge({uniforms:n,transparent:!0,depthWrite:!1,blending:js,side:dn,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float time; uniform float aspect; uniform vec4 rings[${Xo}];
      varying vec2 vUv;
      float annulus(vec2 p, vec2 c, float age, float vel, float dur) {
        if (age < 0.0 || age > dur) return 0.0;
        float k = age / dur;
        float e = 1.0 - pow(1.0 - k, 2.4);
        float radius = 0.24 * e * (0.72 + 0.28 * vel);
        float width = 0.012 * (1.0 - k) * (0.8 + 0.4 * vel) + 0.002;
        float d = length((p - c) * vec2(1.0, 1.0 / aspect));
        float a = 1.0 - smoothstep(0.0, width, abs(d - radius));
        return a * (1.0 - k) * (1.0 - k);
      }
      void main(){
        vec2 p = vec2(vUv.x, 1.0 - vUv.y);
        float a = 0.0;
        for (int i = 0; i < ${Xo}; i++) {
          vec4 r = rings[i];
          float age = time - r.z;
          a += annulus(p, r.xy, age, r.w, 0.9);
          a += 0.38 * annulus(p, r.xy, age - 0.08, r.w, 0.9);
        }
        a = min(a, 1.0);
        vec3 col = vec3(0.86, 1.0, 0.92);
        gl_FragColor = vec4(col * a * 0.55, a);
      }`}),r=new Qt(new sn(i,t),s);r.position.z=e/2+.001,r.renderOrder=20,r.name="rings";let o=0;return{mesh:r,spawn(a,l,c,h){n.rings.value[o%Xo].set(a,l,h,Fs(c)),o++,r.visible=!0},update(a){n.time.value=a,r.visible=n.rings.value.some(l=>a-l.z<1.05)}}}function MS(i,{W:t,H:e,D:n,phosphor:s,terminal:r,reduce:o=!1}){const a=e*.38,l=xS({size:512}),c=new vu(l);c.colorSpace=Pe;const h=new Qt(new sn(a,a),new hi({map:c,transparent:!0,depthWrite:!1,depthTest:!1,blending:js,side:dn}));h.scale.x=-1,h.rotation.y=.12,h.renderOrder=21,h.visible=!1,h.name="hand",i.add(h);const u=wS(t,e,n);i.add(u.mesh);const f=new k((.5-Lf.u)*a,(.5-Lf.v)*a,0).clone().applyEuler(h.rotation);let p=null,v=-1,g=-1;function m(_,y){const R=Math.round(y*40)/40,A=Math.round(_*24)/24;R===v&&A===g&&R===0||(v=R,g=A,Eg(l,{level:A,glitch:R}),c.needsUpdate=!0)}function x(_,y,R,A){const T=new k(-t/2+_*t+R,e/2-y*e,n/2+A);h.position.copy(T).sub(f)}return{hand:h,rings:u,active:()=>!!p,knock({onsets:_,u:y,v:R,onContact:A},T){const I=(_&&_.length?_:[{at:0,velocity:1}]).map(U=>({at:+U.at||0,velocity:Fs(U.velocity??1)})),w=T+(o?0:Jl),b=I.map(U=>w+U.at),S=b[b.length-1];return p={u:Fs(y??.7),v:Fs(R??.42),list:I,contacts:b,fired:I.map(()=>!1),onContact:A,start:T,withdrawAt:S+Df,end:S+Df+Uf},o||(h.visible=!0,v=-1),!0},update(_){if(u.update(_),!p)return;const y=p;for(let b=0;b<y.contacts.length;b++)if(!y.fired[b]&&_>=y.contacts[b]){y.fired[b]=!0;const S=y.list[b].velocity;u.spawn(y.u,y.v,S,_),o||(s.jolt?.(S),r.nudge?.(S));try{y.onContact?.(b)}catch(U){console.warn("stage: onContact threw",U)}}if(o){_>=y.end&&(p=null);return}let R=zi,A=0,T=0,I=1;const w=y.start+Jl;if(_<w){const b=Nf(Fs((_-y.start)/Jl));A=(1-b)*.26,R=Bf+(zi-Bf)*b,T=1-b,I=.35+.65*b}else if(_>=y.withdrawAt){const b=Fs((_-y.withdrawAt)/Uf),S=Ff(b);if(A=S*.1,R=zi+(bS-zi)*S,T=b,I=1-b*.9,b>=1){p=null,h.visible=!1;return}}else for(let b=0;b<y.contacts.length;b++){const S=y.contacts[b];if(_>=S-tc&&_<S){const U=Ff((_-(S-tc))/tc);R=zi+(ec-zi)*U}else if(_>=S&&_<S+Pf){const U=(_-S)/Pf;R=ec+(zi-ec)*Nf(U)}}x(y.u,y.v,A,R),m(I,T)}}}const ji=wt.supply,Ag=1e8,qs=(()=>{let i=0,t=0;return wt.bands.map(e=>{const n=e.a/ji,s=isFinite(e.b)?e.b/ji:1/0,r=e.share*ji,o=1/Math.sqrt(n)-(isFinite(e.b)?1/Math.sqrt(s):0),a=r/o,l=isFinite(e.b)?a*(Math.sqrt(s)-Math.sqrt(n)):1/0,c={...e,Pa:n,Pb:s,T:r,L:a,Z:l,z0:i,z1:i+l,t0:t};return i+=l,t+=r,c})})();function He(i){if(!(i>=0)||!Number.isFinite(i))throw new RangeError("stateAt: pool ZEC must be a finite number ≥ 0");for(const t of qs)if(i<t.z1||!isFinite(t.z1)){const e=Math.sqrt(t.Pa)+(i-t.z0)/t.L,n=e*e;return{band:t,P:n,cap:n*ji,sold:t.t0+t.L*(1/Math.sqrt(t.Pa)-1/e),sp:e}}}function Su(i,t){let e=i,n=t,s=0,r=0;for(;n>1e-12&&r++<12;){const o=He(e),a=o.band,l=isFinite(a.z1)?a.z1-e:1/0,c=Math.min(n,l);if(c<=0)break;const h=o.sp+c/a.L;s+=a.L*(1/o.sp-1/h),e+=c,n-=c}return{tokens:s,z:e}}function Cg(i,t){if(!(t>=0)||t>He(i).sold*(1+1e-9)+1e-6)throw new RangeError("sellInto: t exceeds the GLASS sold at this pool state");let e=i,n=t,s=0,r=0;for(;n>1e-6&&e>1e-12&&r++<12;){const o=He(e),a=o.band,l=a.L*(1/Math.sqrt(a.Pa)-1/o.sp),c=Math.min(n,l);if(c<=0){e=a.z0-1e-12;continue}const h=1/(1/o.sp+c/a.L),u=a.L*(o.sp-h);s+=u,e-=u,n-=c}return{zec:s,z:Math.max(0,e)}}function ss(i,t="buy"){const e=t==="sell"?wt.fee.sell:wt.fee.buy;if(!(i>=0)||!Number.isFinite(i))throw new RangeError("launchFee: hwm must be a finite number ≥ 0");return i>=wt.fee.bondedZec?e:t==="sell"?Math.max(e,Uh(Math.floor(i/qr+1e-12))):Math.min(1,Math.max(e,wt.fee.launchStart*Math.pow(.5,i/wt.fee.halvingZec)))}const qr=.01,jo=(()=>{const i=[],t=Math.round(wt.fee.buy*1e6);for(let e=0;;e++){const n=Math.round(ss(e*qr,"buy")*1e6);if(i.push(n),n<=t)break}return i})(),Uh=i=>(i<jo.length?jo[i]:jo[jo.length-1])/1e6;function Tg(i,t,e){const n=wt.fee.buy;if(t>=wt.fee.bondedZec)return e*n/(1-n);let s=0,r=e,o=i;if(o<t){const a=Uh(Math.floor(t/qr)),l=Math.min(r,t-o);s+=l*a/(1-a),r-=l,o=t}for(;r>0;){const a=Math.floor(o/qr+1e-12),l=(a+1)*qr,c=Uh(a),h=Math.min(r,l-o);s+=h*c/(1-c),r-=h,o+=h}return s}function Eu(i,t,e){let n=0,s=e;for(let r=0;r<60;r++){const o=(n+s)/2;o+Tg(i,t,o)<=e?n=o:s=o}return n}function Va(i){return Tg(0,0,i)}function Ga(i){let t=0,e=5e3;for(let n=0;n<80;n++){const s=(t+e)/2;He(s).cap<i?t=s:e=s}return e}const St=(i,t=1)=>i.toLocaleString("en-GB",{minimumFractionDigits:t,maximumFractionDigits:t}),re=(i,t=1)=>St(i*100,t)+"%",SS=i=>{const t=i*wt.zecUsd;return t>=1e6?"$"+St(t/1e6,2)+"M":t>=1e3?"$"+St(t/1e3,1)+"K":"$"+St(t,0)},kf=i=>{const t=i*Ag;return St(t,t<10?2:1)},tn=/[?&]preview(=|&|$)/.test(location.search),Tr="./assets/preview/",io=Object.freeze({zecLiquid:2.9013,feesReceived:6.1342,builderPaid:1.5336,hwm:47.2,poolZec:44.8,glassRetired:124e4,viewingKey:"uview1example0000000000000000000000000000000000000000000000000000000000000000000000000000000000example",pieces:[{n:2077,acquired:3512340,cost:1.52,ask:1.82,state:"held",art:Tr+"lum-prism.png"},{n:412,acquired:3519102,cost:1.61,ask:1.93,state:"listed",art:Tr+"lum-amber.png"},{n:5931,acquired:3524877,cost:1.55,ask:1.86,state:"held",art:Tr+"lum-013-zecoshi.png"},{n:7304,acquired:3498210,cost:1.48,sold:1.78,soldAt:3509991,retired:124e4,state:"sold",art:Tr+"lum-static.png"}],moreArt:["lum-valens.jpg","lum-005-solbigbrain.jpeg","lum-006-zakurazcash.jpeg","lum-007-spcmnandhobbes.jpeg","lum-008-cozymaximalist.jpeg","lum-009-digitalzcapital.jpeg","lum-010-tonymargarit.jpeg","lum-011-yungwest-jeff.jpeg","lum-012-jswihart.jpeg"].map(i=>Tr+i),ledger:[{h:3498210,what:"bought #7304",zec:-1.48},{h:3498211,what:"listed #7304 · ask 1.78",zec:0},{h:3509991,what:"sold #7304 · 1.78",zec:1.78},{h:3509993,what:"retired 1,240,000 GLASS on the curve · 0.15 ZEC",zec:-.15},{h:3512340,what:"bought #2077",zec:-1.52},{h:3512341,what:"listed #2077 · ask 1.82",zec:0},{h:3519102,what:"bought #0412",zec:-1.61},{h:3519103,what:"listed #0412 · ask 1.93",zec:0},{h:3524877,what:"bought #5931",zec:-1.55},{h:3524878,what:"listed #5931 · ask 1.86",zec:0}]}),Ig=()=>io.pieces.filter(i=>i.state!=="sold"),ll=i=>String(i).padStart(4,"0"),so=(()=>{const i=[];let t=0,e=0,n=20260919;const s=()=>(n=n*1103515245+12345&2147483647,n/2147483647),r=3.2,o=620,a=Date.now()-1080*1e3,l=a-r*864e5;let c=3512e3;for(let u=0;u<o;u++){const d=Math.floor((l+(a-l)*(u/(o-1)))/1e3);c+=Math.floor(s()*4);const f=He(t),p=u<90?.92:u<240?.74:.6;if(s()<p||f.sold<1){const g=.012+s()*s()*s()*2.2,m=Eu(t,e,g),{tokens:x,z:_}=Su(t,m);t=_,e=Math.max(e,t),i.push(h(c,d,"buy",g,g-m,Math.floor(x),t))}else{const g=He(t).sold,m=Math.floor(g*(.002+s()*s()*.035));if(m<1)continue;const{zec:x,z:_}=Cg(t,m),y=x*ss(e,"sell");t=_,i.push(h(c,d,"sell",x,y,m,t))}}return Object.freeze(i);function h(u,d,f,p,v,g,m){return{height:u,time:d,side:f,glass:g,gross_zat:Math.round(p*1e8),fee_zat:Math.round(v*1e8),pool_zec_after:Math.round(m*1e8),price_zat_per_glass:He(m).P*1e8}}})(),Au=Object.freeze((()=>{const i=so[so.length-1];return{pool_zec:i.pool_zec_after,price_zat_per_glass:i.price_zat_per_glass,height:i.height}})()),ES=Object.freeze(Object.defineProperty({__proto__:null,PREVIEW:tn,SAMPLE:io,SAMPLE_NOW:Au,SAMPLE_TAPE:so,held:Ig,pad4:ll},Symbol.toStringTag,{value:"Module"}));function AS(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function Cu(i,t,{art:e=null,onReady:n=null}={}){if(TS(i,t),!e)return i;const s=new Image;return s.decoding="async",s.onload=()=>{CS(i,t,s),n&&n(i)},s.onerror=()=>{},s.src=e,i}function CS(i,t,e){const r=Math.min(2,devicePixelRatio||1);i.width=360*r,i.height=450*r,i.style.aspectRatio="360 / 450";const o=i.getContext("2d");o.setTransform(r,0,0,r,0,0),o.fillStyle="#04140c",o.fillRect(0,0,360,450),o.strokeStyle="#1d5837",o.lineWidth=1,o.strokeRect(.5,.5,359,449);const a=332,l=14,c=14;o.fillStyle="#ece9e4",o.fillRect(l,c,a,a);const h=Math.min(a/e.width,a/e.height),u=e.width*h,d=e.height*h;o.drawImage(e,l+(a-u)/2,c+(a-d)/2,u,d),o.strokeStyle="rgba(93,255,143,.35)",o.strokeRect(l+.5,c+.5,a-1,a-1),o.fillStyle="#4f9e70",o.font='400 10px "JetBrains Mono", monospace',o.textBaseline="top",o.textAlign="left",o.fillText("zkSNARK",14,c+a+14),o.textAlign="right",o.fillText("#"+ll(t),346,c+a+14),o.textAlign="left",o.fillStyle="#c7a23a",o.fillText("PREVIEW · ART IS ZKSNARKS’",14,426),o.fillStyle="#5dff8f",o.font='700 11px "JetBrains Mono", monospace',o.textAlign="right",o.fillText("encrypted identity",346,426)}function TS(i,t){const s=Math.min(2,devicePixelRatio||1);i.width=360*s,i.height=450*s,i.style.aspectRatio="360 / 450";const r=i.getContext("2d");r.setTransform(s,0,0,s,0,0);const o=AS(t*7919+17),a=r.createRadialGradient(360/2,450*.42,20,360/2,450*.5,450*.7);a.addColorStop(0,"#0a2a17"),a.addColorStop(.6,"#04140c"),a.addColorStop(1,"#010603"),r.fillStyle=a,r.fillRect(0,0,360,450);const l=14,c=18,h=18,u=(360-l*h)/2,d=60,f=Math.ceil(l/2);for(let p=0;p<c;p++)for(let v=0;v<f;v++){const g=p/c,m=v/f,x=g<.45&&Math.hypot(m-1,(g-.25)*1.6)<.85,_=g>=.5&&m>.15-(g-.5)*.3;if(!((x||_)&&o()>.28))continue;const R=.55+o()*.45;r.fillStyle=o()>.93?`rgba(163,148,255,${R})`:`rgba(93,255,143,${R*.85})`;const A=u+v*h,T=d+p*h;r.fillRect(A+1,T+1,h-2,h-2),r.fillRect(u+(l-1-v)*h+1,T+1,h-2,h-2)}for(let p=0;p<4;p++){const v=40+o()*330,g=2+o()*6,m=(o()-.5)*24,x=r.getImageData(0,v,360,g);r.putImageData(x,m,v),r.fillStyle="rgba(244,183,40,.12)",r.fillRect(0,v,360,1)}r.fillStyle="rgba(0,0,0,.28)";for(let p=0;p<450;p+=3)r.fillRect(0,p,360,1);r.strokeStyle="#1d5837",r.lineWidth=1,r.strokeRect(.5,.5,359,449),r.fillStyle="#4f9e70",r.font='400 10px "JetBrains Mono", monospace',r.textBaseline="top",r.fillText("zkSNARK",14,14),r.textAlign="right",r.fillText("#"+ll(t),346,14),r.textAlign="left",r.fillStyle="#c7a23a",r.fillText("EXAMPLE PLATE · ART IS ZILKROAD’S",14,426),r.fillStyle="#5dff8f",r.font='700 11px "JetBrains Mono", monospace',r.textAlign="right",r.fillText("encrypted identity",346,426)}function IS(i,t,e){let n=0;i.innerHTML=`
    <div class="stagewrap">
      <button class="parrow prev" type="button" aria-label="previous">&larr;</button>
      <div class="plate"><div class="pstack"></div></div>
      <button class="parrow next" type="button" aria-label="next">&rarr;</button>
    </div>
    <div class="pmeta"><span class="pcur"><b class="cur-n">01</b> / ${String(t.length).padStart(2,"0")}</span><span class="pticks"></span></div>
    <div class="plaque"></div>`;const s=i.querySelector(".pstack"),r=i.querySelector(".plaque"),o=i.querySelector(".pticks"),a=i.querySelector(".cur-n"),l=i.querySelector(".plate"),c=i.querySelector(".stagewrap");t.forEach((d,f)=>{const p=document.createElement("canvas");p.className="pimg",Cu(p,d.n,{art:d.art||null}),s.appendChild(p);const v=document.createElement("i");v.dataset.i=f,o.appendChild(v)});function h(){s.querySelectorAll(".pimg").forEach((d,f)=>d.classList.toggle("on",f===n)),o.querySelectorAll("i").forEach((d,f)=>d.classList.toggle("on",f===n)),a.textContent=String(n+1).padStart(2,"0"),r.innerHTML=e(t[n]),r.classList.remove("fade"),r.offsetWidth,r.classList.add("fade")}const u=d=>{n=(n+d+t.length)%t.length,h()};return i.querySelector(".prev").addEventListener("click",()=>u(-1)),i.querySelector(".next").addEventListener("click",()=>u(1)),o.addEventListener("click",d=>{const f=d.target.closest("i");f&&(n=+f.dataset.i,h())}),!matchMedia("(prefers-reduced-motion: reduce)").matches&&!matchMedia("(hover: none)").matches&&(c.addEventListener("pointermove",d=>{const f=c.getBoundingClientRect(),p=(d.clientX-f.left)/f.width-.5,v=(d.clientY-f.top)/f.height-.5;l.style.transition="transform .18s linear",l.style.transform=`rotateY(${(p*9).toFixed(2)}deg) rotateX(${(-v*9).toFixed(2)}deg) translateZ(14px)`}),c.addEventListener("pointerleave",()=>{l.style.transition="transform .6s cubic-bezier(.2,.7,.3,1)",l.style.transform=""})),h(),{go:u,set(d){n=d,h()}}}const RS=22,LS=9,Of=.6,zf=1.2,Hf=2.4,Vf=i=>1-Math.pow(1-i,3),Gf=i=>Math.max(0,Math.min(1,i));function PS(i,t,e,n,s,r){if(i.clearRect(0,0,e,n),i.globalAlpha=s,i.drawImage(t,0,0),i.globalAlpha=1,r>.01){const o=Math.round(3+r*10);for(let a=0;a<o;a++){const l=Math.floor(Math.random()*n),c=2+Math.floor(Math.random()*n*.04*r),h=(Math.random()-.5)*e*.16*r,u=i.getImageData(0,l,e,c);i.clearRect(0,l,e,c),i.putImageData(u,h,l)}i.fillStyle=`rgba(93,255,143,${.25*r})`;for(let a=0;a<3;a++)i.fillRect(0,Math.random()*n,e,1)}}function DS(i){const t=new ge({uniforms:{k:{value:2}},transparent:!0,depthWrite:!1,blending:js,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform float k; varying vec2 vUv;
      void main(){ if (k > 1.0) discard; float e = 1.0 - pow(1.0 - k, 2.5); float r = 0.48 * e; float w = 0.03 * (1.0 - k) + 0.004;
        float d = length(vUv - 0.5); float a = (1.0 - smoothstep(0.0, w, abs(d - r))) * (1.0 - k) * (1.0 - k);
        gl_FragColor = vec4(vec3(0.6, 1.0, 0.72) * a * 0.55, a); }`}),e=new Qt(new sn(i,i),t);return e.rotation.x=-Math.PI/2,e.visible=!1,e.renderOrder=15,{mesh:e,set(n){t.uniforms.k.value=n,e.visible=n<=1}}}function US(i,{W:t,H:e,D:n,screen:s,reduce:r=!1}){const o=e*.42,a=o*360/450,l=.014,c=new Bn;c.name="pieces",i.add(c);const h=new Li({color:"#0b0b12",roughness:.82,metalness:.15,envMapIntensity:.18}),u=DS(.7);i.add(u.mesh);let d=[],f=null,p=1/0;function v(x){const _=x.n;let y=null;const R=document.createElement("canvas");Cu(R,_,{art:x.art||null,onReady:()=>{y&&g(y)}});const A=R.width,T=R.height,I=document.createElement("canvas");I.width=A,I.height=T;const w=I.getContext("2d"),b=new vu(I);b.colorSpace=Pe,b.anisotropy=16;const S=new Bn,U=new Qt(new On(a+.014,o+.014,l),h),P=new Qt(new sn(a,o),new hi({map:b,transparent:!0,color:new Ft(1.15,1.15,1.15)}));P.position.z=l/2+.003;const W=new Bn;W.add(U,P),W.position.y=o/2+.014,W.rotation.x=-.09;const Z=new Qt(new On(a*.42,.012,.09),h);return Z.position.set(0,.006,-.01),S.add(W,Z),y={n:_,node:S,canvas:I,ctx:w,base:R,cw:A,ch:T,texture:b,level:1,glitch:0,since:0,dirty:!0},y}function g(x){PS(x.ctx,x.base,x.cw,x.ch,x.level,x.glitch),x.texture.needsUpdate=!0,x.node.visible=x.level>.02}function m(){const x=d.length;if(!x)return;const _=Math.min(.52,t*.84/x),y=(x-1)/2;d.forEach((R,A)=>{const T=_*(A-y),I=y?Math.abs(A-y)/y:0;R.node.position.set(T,-e/2,n*.14+.07*(1-I)),R.node.rotation.y=-T*.45+.1,R.node.updateMatrixWorld()})}return{group:c,count:()=>d.length,set(x){for(const _ of d)c.remove(_.node),_.texture.dispose();d=(Array.isArray(x)?x:[]).filter(_=>_&&_.state!=="sold").map(_=>v(_)),d.forEach((_,y)=>{_.since=-y,c.add(_.node),g(_)}),m(),f=null,u.set(2),p=d.length&&!r?-1:1/0,s.restore()},update(x){if(!d.length||r||(p===-1&&(p=x+LS),!f&&x>=p&&(f={p:d.reduce((A,T)=>A.since<=T.since?A:T),t0:x,phase:"dissolve"}),!f))return;const{p:_}=f,y=x-f.t0;if(f.phase==="dissolve"){const R=Gf(y/Of);_.glitch=R,_.level=1-Vf(R),g(_),R>=1&&(f.phase="arrive",f.t0=x,s.temp(`> #${ll(_.n)} DELIVERED_`),u.mesh.position.set(_.node.position.x,-e/2+.002,_.node.position.z))}else if(f.phase==="arrive"){const R=Gf(y/zf);_.glitch=1-R,_.level=Vf(R),g(_),u.set(R*1.05),R>=1&&(_.glitch=0,_.level=1,g(_),f.phase="hold",f.t0=x,_.since=x)}else f.phase==="hold"&&(u.set(1+y),y>=Hf&&(s.restore(),f=null,p=x+RS-Hf-zf-Of))}}}const BS={},Zo={scene:.34,glass:2.3,floor:.06},NS=Math.PI*.55,Wf="#5dff8f",Ir=1.6,Rs=1,Rr=1,Mn=2048,Kn=856,$f=30,yi=Math.PI/180,nc=2,Qf=5.2,FS=[[0,1],[.07,.62],[.08,1],[.31,.78],[.35,1],[.52,.9],[.53,1],[.68,.55],[.7,1],[.88,.7],[.9,1]],kS=.82,qf=.12;function OS(){try{const i=new URLSearchParams(location.search).get("stage"),t=new URLSearchParams(location.hash.split("?")[1]||"").get("stage");return i||t||null}catch{return null}}function zS(){const i=OS();if(i==="css")return"flag";if(i==="gl")return null;try{if(matchMedia("(prefers-reduced-motion: reduce)").matches)return"reduced-motion";if(navigator.deviceMemory&&navigator.deviceMemory<=2)return"low-power";const t=document.createElement("canvas");if(!(t.getContext("webgl2")||t.getContext("webgl")))return"no-webgl"}catch{return"probe-failed"}return null}function HS(i,t={}){const e=zS();if(e)return i.dataset.stageReason=e,Cf(i,t);try{return GS(i,t)}catch(n){return console.warn("stage: WebGL path failed, using CSS",n),i.dataset.stageReason="gl-failed",Cf(i,t)}}function VS(i){let t=String(i||"> THE VAULT IS EMPTY_");const e=document.createElement("canvas");e.width=Mn,e.height=Kn;const n=e.getContext("2d"),s=document.createElement("canvas");s.width=Mn,s.height=Kn;const r=s.getContext("2d"),o=r.createRadialGradient(Mn/2,Kn/2,20,Mn/2,Kn/2,Mn*.62);o.addColorStop(0,"#0a2a17"),o.addColorStop(1,"#04140c"),r.fillStyle=o,r.fillRect(0,0,Mn,Kn);const a=document.createElement("canvas");a.width=Mn,a.height=Kn;const l=a.getContext("2d");l.fillStyle="rgba(0,0,0,.22)";for(let g=0;g<Kn;g+=4)l.fillRect(0,g,Mn,1);const c=new vu(e);c.colorSpace=Pe,c.generateMipmaps=!0,c.minFilter=ni,c.anisotropy=16;let h=!0,u=1,d=0,f=-10,p=0;function v(){n.clearRect(0,0,Mn,Kn),n.drawImage(s,0,0);const g=t.endsWith("_")?t.slice(0,-1):t,m=t.endsWith("_"),x=132;n.font=`700 ${x}px "JetBrains Mono", ui-monospace, Menlo, Consolas, monospace`,n.textBaseline="middle","letterSpacing"in n&&(n.letterSpacing=Math.round(x*.12)+"px");const _=x*.62,y=x*.14;let R=n.measureText(g).width,A=1;const T=Mn-240-(m?_+y:0);R>T&&(A=T/R,R=T);const I=R+(m?_+y:0),w=(Mn-I)/2,b=Kn/2+2;n.save(),n.globalAlpha=u,n.translate(w,b),n.scale(A,1),n.fillStyle="rgba(120,255,255,.34)",n.fillText(g,-3,0),n.fillStyle="rgba(214,255,120,.34)",n.fillText(g,3,0),n.shadowColor="rgba(93,255,143,.8)",n.shadowBlur=22,n.fillStyle=Wf,n.fillText(g,0,0),n.shadowBlur=0,n.fillStyle="#c8ffdc",n.globalAlpha=u*.7,n.fillText(g,0,0),n.restore(),m&&h&&(n.save(),n.globalAlpha=u,n.shadowColor="rgba(93,255,143,.8)",n.shadowBlur=18,n.fillStyle=Wf,n.fillRect(w+R+y,b-x*.44,_,x*.88),n.restore()),n.drawImage(a,0,0),c.needsUpdate=!0}return v(),document.fonts&&document.fonts.load&&document.fonts.load('700 132px "JetBrains Mono"').then(()=>v()).catch(()=>{}),{texture:c,tick(g){d=g;const m=Math.floor(g/(kS/2))%2===0,x=g%Qf/Qf;let _=1;for(const[R,A]of FS)if(x>=R)_=A;else break;const y=g-f;return y>=0&&y<qf&&(_*=1-p*(1-y/qf)),_=Math.round(_*40)/40,m===h&&_===u?!1:(h=m,u=_,v(),!0)},setText(g){t=String(g),v()},jolt(g=1){f=d,p=.45*Math.max(.4,Math.min(1,g))}}}function GS(i,t){i.innerHTML="",i.dataset.stage="webgl";const e=new UM({antialias:!1,alpha:!1,powerPreference:"high-performance"});if(!e.capabilities.isWebGL2)throw new Error("WebGL2 required for the multisampled composer");e.setClearColor(0,1),e.setPixelRatio(Math.min(window.devicePixelRatio||1,nc)),e.outputColorSpace=Pe,e.toneMapping=eu,e.toneMappingExposure=1.1,i.appendChild(e.domElement);const n=new al;n.background=new Ft(0),n.fog=new gu(0,8,16);const s=new $e($f,1,.5,60),r=new k(0,-.06,0),o=new Bn;o.name="vault",n.add(o);const a=new wf(15922943,.55);a.position.set(-2.2,3.2,2.6),n.add(a);const l=new wf(12109055,.18);l.position.set(2.4,1.2,1.8),n.add(l);const c=uS({W:Ir,H:Rs,D:Rr});o.add(c.mesh);const h=VS(t.text),u=vS(h.texture,{W:Ir,H:Rs,D:Rr});o.add(u.group);const d=dS({size:14,y:-Rs/2-.012,resolution:512});n.add(d.mesh);const f=fS(.7);n.add(f);let p=String(t.text||"> THE VAULT IS EMPTY_");const g=US(o,{W:Ir,H:Rs,D:Rr,screen:{temp(Rt){h.setText(Rt)},restore(){h.setText(p)}}}),m=MS(o,{W:Ir,H:Rs,D:Rr,phosphor:h,terminal:u}),x=new JM(e,new Ne(2,2,{type:nn,samples:4}));x.addPass(new tS(n,s));const _=new or(new kt(2,2),.3,.4,.84);x.addPass(_),x.addPass(new iS);let y=!1,R=5,A=9*yi,T=-26*yi,I=!1,w=null,b=!1;const S=1.35;function U(Rt,mt){s.position.set(r.x+R*Math.cos(mt)*Math.sin(-Rt),r.y+R*Math.sin(mt),r.z+R*Math.cos(mt)*Math.cos(Rt)),s.lookAt(r),s.updateMatrixWorld()}function P(){const Rt=i.clientWidth,mt=i.clientHeight;if(!Rt||!mt)return;y=mt>Rt;const Lt=y?.78:.46,L=Ir*Math.cos(T)+Rr*Math.abs(Math.sin(T)),G=Rt/mt;s.aspect=G,s.updateProjectionMatrix(),R=L/(Lt*2*Math.tan($f/2*yi)*G),A=(y?12:9)*yi,n.fog.near=R+3,n.fog.far=R+9.5;const N=Math.min(window.devicePixelRatio||1,nc);if(e.setPixelRatio(N),e.setSize(Rt,mt,!1),x.setPixelRatio(N),x.setSize(Rt,mt),c.setSize(Math.round(Rt*N),Math.round(mt*N)),U(T,A),!I){I=!0,pS(f,s,r);const E=gS(e,f,45);n.environment=E,n.environmentIntensity=.12,w={tex:E,level:.2},c.setEnvironment(E,.2),d.material.envMap=E,d.material.envMapIntensity=.4,d.material.needsUpdate=!0,/[?&]env=room/.test(location.search)||mS(e,f,(BS&&"./"||"./")+"assets/env/studio_small_09_1k.hdr",{mapBoost:4,rotation:NS}).then(F=>{n.environment=F,n.environmentIntensity=Zo.scene,w={tex:F,level:Zo.glass},c.setEnvironment(F,Zo.glass*(b?S:1)),d.material.envMap=F,d.material.envMapIntensity=Zo.floor,d.material.needsUpdate=!0,E.dispose()}).catch(F=>console.warn("stage: studio HDR unavailable, keeping the room",F))}}new ResizeObserver(P).observe(i),P();let Z=0,D=0,nt=0,q=0;const lt=matchMedia("(hover: hover) and (pointer: fine)").matches;lt&&(addEventListener("pointermove",Rt=>{Z=Rt.clientX/innerWidth*2-1,D=Rt.clientY/innerHeight*2-1},{passive:!0}),document.addEventListener("pointerleave",()=>{Z=0,D=0}));const K=new Mg(!1);let $=0,Q=!1,it=0,O=0,Y=0,rt=!1;const tt=[m.hand,m.rings.mesh];function ht(){if(it=0,!Q||document.hidden)return;const Rt=Math.min(K.getDelta(),.1);$+=Rt,O++,nt+=(Z-nt)*.04,q+=(D-q)*.04;const mt=T+2.5*yi*Math.sin($*2*Math.PI/20)+(lt?nt*3*yi:0),Lt=A+1*yi*Math.sin($*2*Math.PI/20*.61+1.3)-(lt?q*2*yi:0);if(U(mt,Lt),o.position.y=.01*Rs*(1+Math.sin($*2*Math.PI/7)),h.tick($),u.update(Rt),g.update($),m.update($),c.setTime($),o.updateMatrixWorld(),f.visible=!0,d.capture(e,n,s,[{mesh:c.mesh,material:c.proxy}]),c.capture(e,n,s,tt),f.visible=!1,x.render(),!rt){if($>=1&&$<3)Y++;else if($>=3){rt=!0;const L=Y/2;if(i.dataset.fps=String(Math.round(L)),L<48){const G=Math.min(window.devicePixelRatio||1,nc);c.degrade(Math.round(i.clientWidth*G),Math.round(i.clientHeight*G)),d.setResolution(256),i.dataset.degraded="1"}}}it=requestAnimationFrame(ht)}function dt(){Q&&!it&&!document.hidden&&(K.start(),it=requestAnimationFrame(ht))}document.addEventListener("visibilitychange",()=>{document.hidden?(it&&cancelAnimationFrame(it),it=0,K.stop()):dt()});const vt=new qM,It=new kt;function Et(Rt,mt){const Lt=e.domElement.getBoundingClientRect();return!Lt.width||!Lt.height?!1:(It.set((Rt-Lt.left)/Lt.width*2-1,-((mt-Lt.top)/Lt.height)*2+1),vt.setFromCamera(It,s),vt.intersectObject(c.mesh,!1).length>0)}function zt(Rt){Rt=!!Rt,Rt!==b&&(b=Rt,w&&c.setEnvironment(w.tex,w.level*(Rt?S:1)))}const B={start(){Q=!0,i.dataset.running="1",dt()},stop(){Q=!1,i.dataset.running="0",it&&cancelAnimationFrame(it),it=0,K.stop(),zt(!1)},setText(Rt){p=String(Rt),h.setText(p)},setPieces(Rt){g.set(Rt)},knock(Rt={}){return Q?m.knock(Rt,$):!1},pick:Et,setHover:zt,frames:()=>O,running:()=>Q};return i.__glassStage=B,i.__glassDebug={scene:n,camera:s,renderer:e,glass:c,floor:d,vault:o,terminal:u,violet:f,composer:x,bloom:_},B}const WS={modes:[[1560,.55,.085,26],[2340,1,.075,34],[3480,.85,.062,40],[4920,.6,.05,44],[6600,.35,.038,44],[8400,.16,.03,40]],body:{f0:720,f1:520,level:.08,dec:.03},click:{level:.32,dec:.006,hp:2600},out:.5},$S={modes:[[620,1,.11,18],[980,.7,.09,22],[1460,.55,.075,26],[2150,.32,.06,30],[3100,.14,.045,30]],body:{f0:230,f1:120,level:.9,dec:.06},click:{level:.18,dec:.012,hp:800},out:.55},QS=/[?&]tap=thick/.test(location.search)?$S:WS;function qS(i,t,{x:e=.5,velocity:n=1}={}){const s=QS,r=i.currentTime,o=Math.max(.2,Math.min(1,n)),a=i.createGain();a.gain.value=s.out*o;const l=i.createStereoPanner?i.createStereoPanner():null;l?(l.pan.value=(e-.5)*.9,a.connect(l),l.connect(t)):a.connect(t);const c=Math.floor(i.sampleRate*.003),h=i.createBuffer(1,c,i.sampleRate),u=h.getChannelData(0);for(let _=0;_<c;_++)u[_]=(Math.random()*2-1)*Math.pow(1-_/c,1.6);const d=i.createBufferSource();d.buffer=h;const f=i.createGain();f.gain.value=1,d.connect(f);const p=1+(Math.random()-.5)*.05;for(const[_,y,R,A]of s.modes){const T=i.createBiquadFilter();T.type="bandpass",T.frequency.value=_*p,T.Q.value=A;const I=i.createGain();I.gain.setValueAtTime(y*2.4,r),I.gain.exponentialRampToValueAtTime(6e-4,r+R*(.85+.3*o)),f.connect(T),T.connect(I),I.connect(a)}const v=i.createBiquadFilter();v.type="highpass",v.frequency.value=s.click.hp;const g=i.createGain();g.gain.setValueAtTime(s.click.level,r),g.gain.exponentialRampToValueAtTime(.001,r+s.click.dec),f.connect(v),v.connect(g),g.connect(a),d.start(r),d.stop(r+.02);const m=i.createOscillator();m.type="sine",m.frequency.setValueAtTime(s.body.f0*(.97+.06*o),r),m.frequency.exponentialRampToValueAtTime(s.body.f1,r+s.body.dec*.7);const x=i.createGain();x.gain.setValueAtTime(1e-4,r),x.gain.linearRampToValueAtTime(s.body.level*o,r+.0015),x.gain.exponentialRampToValueAtTime(.001,r+s.body.dec),m.connect(x),x.connect(a),m.start(r),m.stop(r+s.body.dec+.02)}function KS(i=2){const t=.15+Math.random()*.06,e=[{at:0,velocity:.92+Math.random()*.08}];return i>=2&&e.push({at:t*(.97+Math.random()*.06),velocity:.72+Math.random()*.12}),i>=3&&e.push({at:t*2*(1.02+Math.random()*.08),velocity:.56+Math.random()*.12}),e}let kr=null,$i=!1;const Jo=(i,t)=>i+Math.random()*(t-i);function YS({score:i,stage:t,container:e}){if($i)return;$i=!0;const n=matchMedia("(prefers-reduced-motion: reduce)").matches;function s(a,l){i?.isOn()&&i.context()&&qS(i.context(),i.bus(),{x:a,velocity:l})}function r(){if(!$i)return;const a=n?1:Math.random()<.6?2:Math.random()<.55?1:3,l=KS(a),c=Jo(.58,.86),h=Jo(.28,.55);(t&&typeof t.knock=="function"?t.knock({onsets:l,u:c,v:h,onContact:d=>s(c,l[d].velocity)})!==!1:!1)||l.forEach((d,f)=>setTimeout(()=>{$i&&(s(c,d.velocity),jS(e,c,h,d.velocity))},d.at*1e3)),o()}function o(){clearTimeout(kr),kr=setTimeout(()=>{if($i){if(document.hidden){o();return}r()}},Jo(9e3,18e3))}clearTimeout(kr),kr=setTimeout(()=>{$i&&!document.hidden?r():o()},Jo(3500,6e3))}function XS(){$i=!1,clearTimeout(kr)}function jS(i,t,e,n=1){const s=i?.querySelector(".cssvault .front")||i;if(!s)return;const r=document.createElement("i");r.className="tapring",r.style.left=t*100+"%",r.style.top=e*100+"%",r.style.setProperty("--amp",String(n)),s.appendChild(r),r.addEventListener("animationend",()=>r.remove(),{once:!0})}let Dn=null,ic=null,je=null,Kf=!1;const ZS=()=>document.getElementById("hint");function Yf(i){return Dn?typeof Dn.pick=="function"?Dn.pick(i.clientX,i.clientY):!!(i.target&&i.target.closest&&i.target.closest(".cssvault .box")):!1}function Lr(i){if(i===Kf)return;Kf=i,je.style.cursor=i?"pointer":"",Dn.setHover?.(i);const t=ZS();t&&(t.textContent=i?"[ OPEN THE VAULT → ]":matchMedia("(hover: none)").matches?"tap the case to open the vault":"click the case to open the vault · m for index",t.classList.toggle("vio",i))}const JS={render(i,t){ic=t?.score||null,je=document.getElementById("stage");const e=tn?`> THE VAULT HOLDS ${Ig().length}_`:"> THE VAULT IS EMPTY_";Dn=HS(je,{text:e}),tn&&typeof Dn.setPieces=="function"&&Dn.setPieces(io.pieces),je.style.pointerEvents="auto",je.addEventListener("pointermove",n=>{document.body.dataset.v==="home"&&Lr(Yf(n))},{passive:!0}),je.addEventListener("pointerleave",()=>Lr(!1)),je.addEventListener("click",n=>{document.body.dataset.v==="home"&&Yf(n)&&(Lr(!1),eo("vault"))}),je.addEventListener("keydown",n=>{n.key==="Enter"&&document.body.dataset.v==="home"&&eo("vault")}),je.removeAttribute("aria-hidden"),je.setAttribute("role","link"),je.setAttribute("aria-label","the vault — open"),je.tabIndex=0},enter(){Dn?.start(),Lr(!1),ic&&YS({score:ic,stage:Dn,container:je})},leave(){Dn?.stop(),XS(),Lr(!1)}};function Bh(i){return i instanceof Uint8Array||ArrayBuffer.isView(i)&&i.constructor.name==="Uint8Array"&&"BYTES_PER_ELEMENT"in i&&i.BYTES_PER_ELEMENT===1}const Nh=i=>i?`"${i}" `:"";function mn(i,t=""){if(typeof i!="number")throw new TypeError(Nh(t)+"expected number, got "+typeof i);if(!Number.isSafeInteger(i)||i<0)throw new RangeError(Nh(t)+"expected integer >= 0, got "+i);return i}function De(i,t,e=""){if(Bh(i)&&(t===void 0||i.length===t))return i;t!==void 0&&mn(t,"length");const n=Bh(i),s=t!==void 0?` of length ${t}`:"",r=n?`length=${i.length}`:`type=${typeof i}`,o=Nh(e)+"expected Uint8Array"+s+", got "+r;throw n?new RangeError(o):new TypeError(o)}function Tu(i){if(typeof i!="function"||typeof i.create!="function")throw new TypeError("expected hash wrapped by utils.createHasher");if(mn(i.outputLen),mn(i.blockLen),i.outputLen<1||i.blockLen<1)throw new Error("hash blockLen / outputLen must be >= 1")}const tE=(i,t)=>{if(i===null||typeof i!="object"||Array.isArray(i))throw new TypeError((t==="object"?"":`"${t}" `)+"expected object, got type="+typeof i)},Xf=(i,t)=>{tE(i,t);const e=Object.getPrototypeOf(i);if(e!==Object.prototype&&e!==null)throw new TypeError(`"${t}" expected plain object`);if(Object.hasOwn(i,"__proto__"))throw new TypeError(`"${t}.__proto__" is not allowed`)};function Wa(i,t=!0){if(i.destroyed)throw new Error("hash was destroyed");if(t&&i.finished)throw new Error("digest() was already called")}function Rg(i,t){De(i,void 0,"output");const e=t.outputLen;if(!(i.length>=e))throw new RangeError('"output" expected length >= '+e)}function Tn(...i){for(let t=0;t<i.length;t++)i[t].fill(0)}function Zi(i){return new DataView(i.buffer,i.byteOffset,i.byteLength)}function Rn(i,t){return i<<32-t|i>>>t}function ta(i,t){return i<<t|i>>>32-t>>>0}const Lg=typeof Uint8Array.from([]).toHex=="function"&&typeof Uint8Array.fromHex=="function",eE=Array.from({length:256},(i,t)=>t.toString(16).padStart(2,"0"));function Iu(i){if(De(i),Lg)return i.toHex();let t="";for(let e=0;e<i.length;e++)t+=eE[i[e]];return t}function jf(i){return i>=48&&i<=57?i-48:i>=65&&i<=70?i-55:i>=97&&i<=102?i-87:void 0}function Pg(i){if(typeof i!="string")throw new TypeError("hex string expected, got "+typeof i);if(Lg)try{return Uint8Array.fromHex(i)}catch(s){throw s instanceof SyntaxError?new RangeError(s.message):s}const t=i.length,e=t/2;if(t%2)throw new RangeError("hex string expected, got unpadded hex of length "+t);const n=new Uint8Array(e);for(let s=0,r=0;s<e;s++,r+=2){const o=jf(i.charCodeAt(r)),a=jf(i.charCodeAt(r+1));if(o===void 0||a===void 0){const l=i[r]+i[r+1];throw new RangeError('hex string expected, got non-hex character "'+l+'" at index '+r)}n[s]=o*16+a}return n}function nE(i){if(typeof i!="string")throw new TypeError("string expected");const t=new TextEncoder().encode(i);try{return new Uint8Array(t)}finally{Tn(t)}}function Zf(i,t=""){return typeof i=="string"?nE(i):De(i,void 0,t)}function Or(...i){let t=0;for(let n=0;n<i.length;n++){const s=i[n];De(s),t+=s.length}const e=new Uint8Array(t);for(let n=0,s=0;n<i.length;n++){const r=i[n];e.set(r,s),s+=r.length}return e}function Dg(i,t,e="opts"){return Xf(i,"defaults"),t!==void 0&&Xf(t,e),Object.assign(Object.create(null),i,t)}function Ru(i,t={}){if(typeof i!="function")throw new TypeError('"hashCons" expected function, got type='+typeof i);t=Dg({},t,"info");const e=(s,r)=>i(r).update(s).digest(),n=i(void 0);return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.canXOF=n.canXOF,e.create=s=>i(s),Object.assign(e,t),Object.freeze(e)}function Ug(i=32){mn(i,"bytesLength");const t=typeof globalThis=="object"?globalThis.crypto:null;if(typeof t?.getRandomValues!="function")throw new Error("crypto.getRandomValues must be defined");if(i>65536)throw new RangeError(`"bytesLength" expected <= 65536, got ${i}`);return t.getRandomValues(new Uint8Array(i))}const Bg=i=>({oid:Uint8Array.from([6,9,96,134,72,1,101,3,4,2,i])});class Jf{constructor(t,e){ct(this,"oHash");ct(this,"iHash");ct(this,"blockLen");ct(this,"outputLen");ct(this,"canXOF",!1);ct(this,"finished",!1);ct(this,"destroyed",!1);if(Tu(t),De(e,void 0,"key"),this.iHash=t.create(),typeof this.iHash.update!="function")throw new Error("expected Hash instance");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const n=this.blockLen,s=new Uint8Array(n);s.set(e.length>n?t.create().update(e).digest():e);for(let r=0;r<s.length;r++)s[r]^=54;this.iHash.update(s),this.oHash=t.create();for(let r=0;r<s.length;r++)s[r]^=106;this.oHash.update(s),Tn(s)}update(t){return Wa(this),this.iHash.update(t),this}digestInto(t){Wa(this),Rg(t,this),this.finished=!0;const e=t.subarray(0,this.outputLen);this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:e,iHash:n,finished:s,destroyed:r,blockLen:o,outputLen:a,canXOF:l}=this;return t=t,t.finished=s,t.destroyed=r,t.blockLen=o,t.outputLen=a,t.canXOF=l,t.oHash=e._cloneInto(t.oHash),t.iHash=n._cloneInto(t.iHash),t}clone(){return this._cloneInto()}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const $a=(()=>{const i=((t,e,n)=>new Jf(t,e).update(n).digest());return i.create=(t,e)=>new Jf(t,e),i})();function iE(i,t,e,n){Tu(i);const s=Dg({dkLen:32,asyncTick:10},n),{c:r,dkLen:o,asyncTick:a}=s;if(mn(r,"c"),mn(o,"dkLen"),mn(a,"asyncTick"),r<1)throw new Error('"c" (iterations) must be >= 1');if(o<1)throw new Error('"dkLen" must be >= 1');if(o>(2**32-1)*i.outputLen)throw new Error("derived key too long");const l=Zf(t,"password");try{const c=Zf(e,"salt");try{const h=new Uint8Array(o),{iHash:u,oHash:d,outputLen:f}=$a.create(i,l),p=new Uint8Array(f),v=sE(u,d,c,p);return{c:r,dkLen:o,asyncTick:a,DK:h,outputLen:f,eng:v}}finally{typeof e=="string"&&Tn(c)}}finally{typeof t=="string"&&Tn(l)}}function sE(i,t,e,n){const s=new Uint8Array(4),r=Zi(s),o=i._cloneInto().update(e),a=t._cloneInto(),l=i._cloneInto,c=t._cloneInto;return{u1:(h,u)=>{r.setInt32(0,h,!1),o._cloneInto(a).update(s).digestInto(n),t._cloneInto(a).update(n).digestInto(n),u.set(n.subarray(0,u.length))},rounds:(h,u)=>{for(let d=1;d<h;d++){l.call(i,a).update(n).digestInto(n),c.call(t,a).update(n).digestInto(n);for(let f=0;f<u.length;f++)u[f]^=n[f]}},output:h=>(i.destroy(),t.destroy(),o.destroy(),a.destroy(),Tn(n),h)}}function rE(i,t,e,n){const{c:s,dkLen:r,DK:o,outputLen:a,eng:l}=iE(i,t,e,n);for(let c=1,h=0;h<r;c++,h+=a){const u=o.subarray(h,h+a);l.u1(c,u),l.rounds(s,u)}return l.output(o)}const ea=BigInt(2**32-1),tp=BigInt(32);function oE(i,t=!1){return t?{h:Number(i&ea),l:Number(i>>tp&ea)}:{h:Number(i>>tp&ea)|0,l:Number(i&ea)|0}}function aE(i,t=!1){const e=i.length;let n=new Uint32Array(e),s=new Uint32Array(e);for(let r=0;r<e;r++){const{h:o,l:a}=oE(i[r],t);[n[r],s[r]]=[o,a]}return[n,s]}const lE=i=>i/2**32|0,cE=i=>i>>>0;function hE(i,t,e,n){const s=lE(e),r=cE(e);i.setUint32(t,n?r:s,n),i.setUint32(t+4,n?s:r,n)}const ep=(i,t,e)=>i>>>e,np=(i,t,e)=>i<<32-e|t>>>e,Ls=(i,t,e)=>i>>>e|t<<32-e,Ps=(i,t,e)=>i<<32-e|t>>>e,na=(i,t,e)=>i<<64-e|t>>>e-32,ia=(i,t,e)=>i>>>e-32|t<<64-e;function Yn(i,t,e,n){const s=(t>>>0)+(n>>>0);return{h:i+e+(s/2**32|0)|0,l:s|0}}const uE=(i,t,e)=>(i>>>0)+(t>>>0)+(e>>>0),dE=(i,t,e,n)=>t+e+n+(i/2**32|0)|0,fE=(i,t,e,n)=>(i>>>0)+(t>>>0)+(e>>>0)+(n>>>0),pE=(i,t,e,n,s)=>t+e+n+s+(i/2**32|0)|0,mE=(i,t,e,n,s)=>(i>>>0)+(t>>>0)+(e>>>0)+(n>>>0)+(s>>>0),gE=(i,t,e,n,s,r)=>t+e+n+s+r+(i/2**32|0)|0;function vE(i,t,e){return i&t^~i&e}function _E(i,t,e){return i&t^i&e^t&e}class Lu{constructor(t,e,n,s){ct(this,"blockLen");ct(this,"outputLen");ct(this,"canXOF",!1);ct(this,"padOffset");ct(this,"isLE");ct(this,"buffer");ct(this,"view");ct(this,"finished",!1);ct(this,"length",0);ct(this,"pos",0);ct(this,"destroyed",!1);this.blockLen=t,this.outputLen=e,this.padOffset=n,this.isLE=s,this.buffer=new Uint8Array(t),this.view=Zi(this.buffer)}update(t){Wa(this),De(t);const{view:e,buffer:n,blockLen:s}=this,r=t.length;let o=!1;for(let a=0;a<r;){const l=Math.min(s-this.pos,r-a);if(l===s){const c=Zi(t);for(;s<=r-a;a+=s)this.process(c,a);o=!0;continue}n.set(a===0&&l===r?t:t.subarray(a,a+l),this.pos),this.pos+=l,a+=l,this.pos===s&&(this.process(e,0),this.pos=0,o=!0)}return this.length+=t.length,o&&this.roundClean(),this}digestInto(t){Wa(this),Rg(t,this),this.finished=!0;const{buffer:e,view:n,blockLen:s,isLE:r}=this;let{pos:o}=this;e[o++]=128,e.fill(0,o),this.padOffset>s-o&&(this.process(n,0),e.fill(0)),hE(n,s-8,this.length*8,r),this.process(n,0),this.roundClean();const a=t===e?n:Zi(t),l=this.outputLen,c=l/4,h=this.get();if(l%4||c>h.length)throw new Error("invalid outputLen");for(let u=0;u<c;u++)a.setUint32(4*u,h[u],r)}digest(){const{buffer:t,outputLen:e}=this;this.digestInto(t);const n=t.slice(0,e);return this.destroy(),n}_cloneIntoMeta(t){const{buffer:e,length:n,finished:s,destroyed:r,pos:o}=this;return t.destroyed=r,t.finished=s,t.length=n,t.pos=o,o&&t.buffer.set(e),t}clone(){return this._cloneInto()}}const yE=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),xE=Uint32Array.from([1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209]),bE=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),xi=new Uint32Array(64);class wE extends Lu{constructor(e,n){super(64,e,8,!1);ct(this,"A",0);ct(this,"B",0);ct(this,"C",0);ct(this,"D",0);ct(this,"E",0);ct(this,"F",0);ct(this,"G",0);ct(this,"H",0);this.A=n[0]|0,this.B=n[1]|0,this.C=n[2]|0,this.D=n[3]|0,this.E=n[4]|0,this.F=n[5]|0,this.G=n[6]|0,this.H=n[7]|0}get(){const{A:e,B:n,C:s,D:r,E:o,F:a,G:l,H:c}=this;return[e,n,s,r,o,a,l,c]}set(e,n,s,r,o,a,l,c){this.A=e|0,this.B=n|0,this.C=s|0,this.D=r|0,this.E=o|0,this.F=a|0,this.G=l|0,this.H=c|0}_cloneInto(e){return(e||(e=new this.constructor)).set(...this.get()),this._cloneIntoMeta(e)}process(e,n){for(let d=0;d<16;d++,n+=4)xi[d]=e.getUint32(n,!1);for(let d=16;d<64;d++){const f=xi[d-15],p=xi[d-2],v=Rn(f,7)^Rn(f,18)^f>>>3,g=Rn(p,17)^Rn(p,19)^p>>>10;xi[d]=g+xi[d-7]+v+xi[d-16]|0}let{A:s,B:r,C:o,D:a,E:l,F:c,G:h,H:u}=this;for(let d=0;d<64;d++){const f=Rn(l,6)^Rn(l,11)^Rn(l,25),p=u+f+vE(l,c,h)+bE[d]+xi[d]|0,g=(Rn(s,2)^Rn(s,13)^Rn(s,22))+_E(s,r,o)|0;u=h,h=c,c=l,l=a+p|0,a=o,o=r,r=s,s=p+g|0}s=s+this.A|0,r=r+this.B|0,o=o+this.C|0,a=a+this.D|0,l=l+this.E|0,c=c+this.F|0,h=h+this.G|0,u=u+this.H|0,this.set(s,r,o,a,l,c,h,u)}roundClean(){Tn(xi)}destroy(){this.destroyed=!0,this.set(0,0,0,0,0,0,0,0),Tn(this.buffer)}}class ME extends wE{constructor(){super(32,yE)}}const Ng=aE(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(i=>BigInt(i))),SE=Ng[0],EE=Ng[1],bi=new Uint32Array(80),wi=new Uint32Array(80);class AE extends Lu{constructor(e,n){super(128,e,16,!1);ct(this,"Ah",0);ct(this,"Al",0);ct(this,"Bh",0);ct(this,"Bl",0);ct(this,"Ch",0);ct(this,"Cl",0);ct(this,"Dh",0);ct(this,"Dl",0);ct(this,"Eh",0);ct(this,"El",0);ct(this,"Fh",0);ct(this,"Fl",0);ct(this,"Gh",0);ct(this,"Gl",0);ct(this,"Hh",0);ct(this,"Hl",0);this.Ah=n[0]|0,this.Al=n[1]|0,this.Bh=n[2]|0,this.Bl=n[3]|0,this.Ch=n[4]|0,this.Cl=n[5]|0,this.Dh=n[6]|0,this.Dl=n[7]|0,this.Eh=n[8]|0,this.El=n[9]|0,this.Fh=n[10]|0,this.Fl=n[11]|0,this.Gh=n[12]|0,this.Gl=n[13]|0,this.Hh=n[14]|0,this.Hl=n[15]|0}get(){const{Ah:e,Al:n,Bh:s,Bl:r,Ch:o,Cl:a,Dh:l,Dl:c,Eh:h,El:u,Fh:d,Fl:f,Gh:p,Gl:v,Hh:g,Hl:m}=this;return[e,n,s,r,o,a,l,c,h,u,d,f,p,v,g,m]}set(e,n,s,r,o,a,l,c,h,u,d,f,p,v,g,m){this.Ah=e|0,this.Al=n|0,this.Bh=s|0,this.Bl=r|0,this.Ch=o|0,this.Cl=a|0,this.Dh=l|0,this.Dl=c|0,this.Eh=h|0,this.El=u|0,this.Fh=d|0,this.Fl=f|0,this.Gh=p|0,this.Gl=v|0,this.Hh=g|0,this.Hl=m|0}_cloneInto(e){return(e||(e=new this.constructor)).set(...this.get()),this._cloneIntoMeta(e)}process(e,n){for(let y=0;y<16;y++,n+=4)bi[y]=e.getUint32(n),wi[y]=e.getUint32(n+=4);for(let y=16;y<80;y++){const R=bi[y-15]|0,A=wi[y-15]|0,T=Ls(R,A,1)^Ls(R,A,8)^ep(R,A,7),I=Ps(R,A,1)^Ps(R,A,8)^np(R,A,7),w=bi[y-2]|0,b=wi[y-2]|0,S=Ls(w,b,19)^na(w,b,61)^ep(w,b,6),U=Ps(w,b,19)^ia(w,b,61)^np(w,b,6),P=fE(I,U,wi[y-7],wi[y-16]),W=pE(P,T,S,bi[y-7],bi[y-16]);bi[y]=W|0,wi[y]=P|0}let{Ah:s,Al:r,Bh:o,Bl:a,Ch:l,Cl:c,Dh:h,Dl:u,Eh:d,El:f,Fh:p,Fl:v,Gh:g,Gl:m,Hh:x,Hl:_}=this;for(let y=0;y<80;y++){const R=Ls(d,f,14)^Ls(d,f,18)^na(d,f,41),A=Ps(d,f,14)^Ps(d,f,18)^ia(d,f,41),T=d&p^~d&g,I=f&v^~f&m,w=mE(_,A,I,EE[y],wi[y]),b=gE(w,x,R,T,SE[y],bi[y]),S=w|0,U=Ls(s,r,28)^na(s,r,34)^na(s,r,39),P=Ps(s,r,28)^ia(s,r,34)^ia(s,r,39),W=s&o^s&l^o&l,Z=r&a^r&c^a&c;x=g|0,_=m|0,g=p|0,m=v|0,p=d|0,v=f|0,{h:d,l:f}=Yn(h|0,u|0,b|0,S|0),h=l|0,u=c|0,l=o|0,c=a|0,o=s|0,a=r|0;const D=uE(S,P,Z);s=dE(D,b,U,W),r=D|0}({h:s,l:r}=Yn(this.Ah|0,this.Al|0,s|0,r|0)),{h:o,l:a}=Yn(this.Bh|0,this.Bl|0,o|0,a|0),{h:l,l:c}=Yn(this.Ch|0,this.Cl|0,l|0,c|0),{h,l:u}=Yn(this.Dh|0,this.Dl|0,h|0,u|0),{h:d,l:f}=Yn(this.Eh|0,this.El|0,d|0,f|0),{h:p,l:v}=Yn(this.Fh|0,this.Fl|0,p|0,v|0),{h:g,l:m}=Yn(this.Gh|0,this.Gl|0,g|0,m|0),{h:x,l:_}=Yn(this.Hh|0,this.Hl|0,x|0,_|0),this.set(s,r,o,a,l,c,h,u,d,f,p,v,g,m,x,_)}roundClean(){Tn(bi,wi)}destroy(){this.destroyed=!0,Tn(this.buffer),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}class CE extends AE{constructor(){super(64,xE)}}const rs=Ru(()=>new ME,Bg(1)),Fh=Ru(()=>new CE,Bg(3));/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const TE=i=>i[0]==="あいこくしん";function Fg(i){for(let t=0;t<i.length;t++){const e=i.charCodeAt(t);if(e>=55296&&e<=56319){if(t+1>=i.length)return!1;const n=i.charCodeAt(++t);if(n<56320||n>57343)return!1}else if(e>=56320&&e<=57343)return!1}return!0}function kg(i){if(typeof i!="string")throw new TypeError("invalid mnemonic type: "+typeof i);if(!Fg(i))throw new TypeError("expected well-formed Unicode string");return i.normalize("NFKD")}function Og(i){const t=kg(i),e=t.split(" ");if(![12,15,18,21,24].includes(e.length))throw new Error("Invalid mnemonic");return{nfkd:t,words:e}}function zg(i){if(De(i),![16,20,24,28,32].includes(i.length))throw new RangeError("invalid entropy length")}function IE(i,t=128){if(mn(t),t%32!==0||t>256)throw new RangeError("Invalid entropy");return DE(Ug(t/8),i)}const Hg=i=>{const t=8-i.length/4;return rs(i)[0]>>t<<t};function Vg(i){if(!Array.isArray(i)||i.length!==2048||typeof i[0]!="string")throw new TypeError("Wordlist: expected array of 2048 strings");i.forEach(t=>{if(typeof t!="string")throw new TypeError("wordlist: non-string element: "+t);if(!Fg(t))throw new TypeError("wordlist: expected well-formed Unicode string")})}function RE(i,t){Vg(t);const e=new Uint8Array(i.length+1);e.set(i),e[i.length]=Hg(i);const n=[];let s=0,r=0;for(const o of e)s=s<<8|o,r+=8,r>=11&&(r-=11,n.push(t[s>>>r&2047]),s&=(1<<r)-1);return n}function LE(i,t){Vg(t);const e=i.length/3*4,n=new Uint8Array(e+1);let s=0,r=0,o=0;for(const l of i){const c=t.indexOf(l);if(c===-1)throw new Error("Unknown word: "+l);for(s=s<<11|c,r+=11;r>=8;)r-=8,n[o++]=s>>>r&255;s&=(1<<r)-1}r>0&&(n[o]=s<<8-r);const a=n.subarray(0,e);if(n[e]!==Hg(a))throw new Error("Invalid checksum");return Uint8Array.from(a)}function PE(i,t){const{words:e}=Og(i),n=LE(e,t);return zg(n),n}function DE(i,t){return zg(i),RE(i,t).join(TE(t)?"　":" ")}function UE(i,t){try{PE(i,t)}catch{return!1}return!0}const BE=i=>{if(typeof i!="string")throw new TypeError("invalid passphrase type: "+typeof i);return kg("mnemonic"+i)};function NE(i,t=""){return rE(Fh,Og(i).nfkd,BE(t),{c:2048,dkLen:64})}const Gg=Object.freeze(`abandon
ability
able
about
above
absent
absorb
abstract
absurd
abuse
access
accident
account
accuse
achieve
acid
acoustic
acquire
across
act
action
actor
actress
actual
adapt
add
addict
address
adjust
admit
adult
advance
advice
aerobic
affair
afford
afraid
again
age
agent
agree
ahead
aim
air
airport
aisle
alarm
album
alcohol
alert
alien
all
alley
allow
almost
alone
alpha
already
also
alter
always
amateur
amazing
among
amount
amused
analyst
anchor
ancient
anger
angle
angry
animal
ankle
announce
annual
another
answer
antenna
antique
anxiety
any
apart
apology
appear
apple
approve
april
arch
arctic
area
arena
argue
arm
armed
armor
army
around
arrange
arrest
arrive
arrow
art
artefact
artist
artwork
ask
aspect
assault
asset
assist
assume
asthma
athlete
atom
attack
attend
attitude
attract
auction
audit
august
aunt
author
auto
autumn
average
avocado
avoid
awake
aware
away
awesome
awful
awkward
axis
baby
bachelor
bacon
badge
bag
balance
balcony
ball
bamboo
banana
banner
bar
barely
bargain
barrel
base
basic
basket
battle
beach
bean
beauty
because
become
beef
before
begin
behave
behind
believe
below
belt
bench
benefit
best
betray
better
between
beyond
bicycle
bid
bike
bind
biology
bird
birth
bitter
black
blade
blame
blanket
blast
bleak
bless
blind
blood
blossom
blouse
blue
blur
blush
board
boat
body
boil
bomb
bone
bonus
book
boost
border
boring
borrow
boss
bottom
bounce
box
boy
bracket
brain
brand
brass
brave
bread
breeze
brick
bridge
brief
bright
bring
brisk
broccoli
broken
bronze
broom
brother
brown
brush
bubble
buddy
budget
buffalo
build
bulb
bulk
bullet
bundle
bunker
burden
burger
burst
bus
business
busy
butter
buyer
buzz
cabbage
cabin
cable
cactus
cage
cake
call
calm
camera
camp
can
canal
cancel
candy
cannon
canoe
canvas
canyon
capable
capital
captain
car
carbon
card
cargo
carpet
carry
cart
case
cash
casino
castle
casual
cat
catalog
catch
category
cattle
caught
cause
caution
cave
ceiling
celery
cement
census
century
cereal
certain
chair
chalk
champion
change
chaos
chapter
charge
chase
chat
cheap
check
cheese
chef
cherry
chest
chicken
chief
child
chimney
choice
choose
chronic
chuckle
chunk
churn
cigar
cinnamon
circle
citizen
city
civil
claim
clap
clarify
claw
clay
clean
clerk
clever
click
client
cliff
climb
clinic
clip
clock
clog
close
cloth
cloud
clown
club
clump
cluster
clutch
coach
coast
coconut
code
coffee
coil
coin
collect
color
column
combine
come
comfort
comic
common
company
concert
conduct
confirm
congress
connect
consider
control
convince
cook
cool
copper
copy
coral
core
corn
correct
cost
cotton
couch
country
couple
course
cousin
cover
coyote
crack
cradle
craft
cram
crane
crash
crater
crawl
crazy
cream
credit
creek
crew
cricket
crime
crisp
critic
crop
cross
crouch
crowd
crucial
cruel
cruise
crumble
crunch
crush
cry
crystal
cube
culture
cup
cupboard
curious
current
curtain
curve
cushion
custom
cute
cycle
dad
damage
damp
dance
danger
daring
dash
daughter
dawn
day
deal
debate
debris
decade
december
decide
decline
decorate
decrease
deer
defense
define
defy
degree
delay
deliver
demand
demise
denial
dentist
deny
depart
depend
deposit
depth
deputy
derive
describe
desert
design
desk
despair
destroy
detail
detect
develop
device
devote
diagram
dial
diamond
diary
dice
diesel
diet
differ
digital
dignity
dilemma
dinner
dinosaur
direct
dirt
disagree
discover
disease
dish
dismiss
disorder
display
distance
divert
divide
divorce
dizzy
doctor
document
dog
doll
dolphin
domain
donate
donkey
donor
door
dose
double
dove
draft
dragon
drama
drastic
draw
dream
dress
drift
drill
drink
drip
drive
drop
drum
dry
duck
dumb
dune
during
dust
dutch
duty
dwarf
dynamic
eager
eagle
early
earn
earth
easily
east
easy
echo
ecology
economy
edge
edit
educate
effort
egg
eight
either
elbow
elder
electric
elegant
element
elephant
elevator
elite
else
embark
embody
embrace
emerge
emotion
employ
empower
empty
enable
enact
end
endless
endorse
enemy
energy
enforce
engage
engine
enhance
enjoy
enlist
enough
enrich
enroll
ensure
enter
entire
entry
envelope
episode
equal
equip
era
erase
erode
erosion
error
erupt
escape
essay
essence
estate
eternal
ethics
evidence
evil
evoke
evolve
exact
example
excess
exchange
excite
exclude
excuse
execute
exercise
exhaust
exhibit
exile
exist
exit
exotic
expand
expect
expire
explain
expose
express
extend
extra
eye
eyebrow
fabric
face
faculty
fade
faint
faith
fall
false
fame
family
famous
fan
fancy
fantasy
farm
fashion
fat
fatal
father
fatigue
fault
favorite
feature
february
federal
fee
feed
feel
female
fence
festival
fetch
fever
few
fiber
fiction
field
figure
file
film
filter
final
find
fine
finger
finish
fire
firm
first
fiscal
fish
fit
fitness
fix
flag
flame
flash
flat
flavor
flee
flight
flip
float
flock
floor
flower
fluid
flush
fly
foam
focus
fog
foil
fold
follow
food
foot
force
forest
forget
fork
fortune
forum
forward
fossil
foster
found
fox
fragile
frame
frequent
fresh
friend
fringe
frog
front
frost
frown
frozen
fruit
fuel
fun
funny
furnace
fury
future
gadget
gain
galaxy
gallery
game
gap
garage
garbage
garden
garlic
garment
gas
gasp
gate
gather
gauge
gaze
general
genius
genre
gentle
genuine
gesture
ghost
giant
gift
giggle
ginger
giraffe
girl
give
glad
glance
glare
glass
glide
glimpse
globe
gloom
glory
glove
glow
glue
goat
goddess
gold
good
goose
gorilla
gospel
gossip
govern
gown
grab
grace
grain
grant
grape
grass
gravity
great
green
grid
grief
grit
grocery
group
grow
grunt
guard
guess
guide
guilt
guitar
gun
gym
habit
hair
half
hammer
hamster
hand
happy
harbor
hard
harsh
harvest
hat
have
hawk
hazard
head
health
heart
heavy
hedgehog
height
hello
helmet
help
hen
hero
hidden
high
hill
hint
hip
hire
history
hobby
hockey
hold
hole
holiday
hollow
home
honey
hood
hope
horn
horror
horse
hospital
host
hotel
hour
hover
hub
huge
human
humble
humor
hundred
hungry
hunt
hurdle
hurry
hurt
husband
hybrid
ice
icon
idea
identify
idle
ignore
ill
illegal
illness
image
imitate
immense
immune
impact
impose
improve
impulse
inch
include
income
increase
index
indicate
indoor
industry
infant
inflict
inform
inhale
inherit
initial
inject
injury
inmate
inner
innocent
input
inquiry
insane
insect
inside
inspire
install
intact
interest
into
invest
invite
involve
iron
island
isolate
issue
item
ivory
jacket
jaguar
jar
jazz
jealous
jeans
jelly
jewel
job
join
joke
journey
joy
judge
juice
jump
jungle
junior
junk
just
kangaroo
keen
keep
ketchup
key
kick
kid
kidney
kind
kingdom
kiss
kit
kitchen
kite
kitten
kiwi
knee
knife
knock
know
lab
label
labor
ladder
lady
lake
lamp
language
laptop
large
later
latin
laugh
laundry
lava
law
lawn
lawsuit
layer
lazy
leader
leaf
learn
leave
lecture
left
leg
legal
legend
leisure
lemon
lend
length
lens
leopard
lesson
letter
level
liar
liberty
library
license
life
lift
light
like
limb
limit
link
lion
liquid
list
little
live
lizard
load
loan
lobster
local
lock
logic
lonely
long
loop
lottery
loud
lounge
love
loyal
lucky
luggage
lumber
lunar
lunch
luxury
lyrics
machine
mad
magic
magnet
maid
mail
main
major
make
mammal
man
manage
mandate
mango
mansion
manual
maple
marble
march
margin
marine
market
marriage
mask
mass
master
match
material
math
matrix
matter
maximum
maze
meadow
mean
measure
meat
mechanic
medal
media
melody
melt
member
memory
mention
menu
mercy
merge
merit
merry
mesh
message
metal
method
middle
midnight
milk
million
mimic
mind
minimum
minor
minute
miracle
mirror
misery
miss
mistake
mix
mixed
mixture
mobile
model
modify
mom
moment
monitor
monkey
monster
month
moon
moral
more
morning
mosquito
mother
motion
motor
mountain
mouse
move
movie
much
muffin
mule
multiply
muscle
museum
mushroom
music
must
mutual
myself
mystery
myth
naive
name
napkin
narrow
nasty
nation
nature
near
neck
need
negative
neglect
neither
nephew
nerve
nest
net
network
neutral
never
news
next
nice
night
noble
noise
nominee
noodle
normal
north
nose
notable
note
nothing
notice
novel
now
nuclear
number
nurse
nut
oak
obey
object
oblige
obscure
observe
obtain
obvious
occur
ocean
october
odor
off
offer
office
often
oil
okay
old
olive
olympic
omit
once
one
onion
online
only
open
opera
opinion
oppose
option
orange
orbit
orchard
order
ordinary
organ
orient
original
orphan
ostrich
other
outdoor
outer
output
outside
oval
oven
over
own
owner
oxygen
oyster
ozone
pact
paddle
page
pair
palace
palm
panda
panel
panic
panther
paper
parade
parent
park
parrot
party
pass
patch
path
patient
patrol
pattern
pause
pave
payment
peace
peanut
pear
peasant
pelican
pen
penalty
pencil
people
pepper
perfect
permit
person
pet
phone
photo
phrase
physical
piano
picnic
picture
piece
pig
pigeon
pill
pilot
pink
pioneer
pipe
pistol
pitch
pizza
place
planet
plastic
plate
play
please
pledge
pluck
plug
plunge
poem
poet
point
polar
pole
police
pond
pony
pool
popular
portion
position
possible
post
potato
pottery
poverty
powder
power
practice
praise
predict
prefer
prepare
present
pretty
prevent
price
pride
primary
print
priority
prison
private
prize
problem
process
produce
profit
program
project
promote
proof
property
prosper
protect
proud
provide
public
pudding
pull
pulp
pulse
pumpkin
punch
pupil
puppy
purchase
purity
purpose
purse
push
put
puzzle
pyramid
quality
quantum
quarter
question
quick
quit
quiz
quote
rabbit
raccoon
race
rack
radar
radio
rail
rain
raise
rally
ramp
ranch
random
range
rapid
rare
rate
rather
raven
raw
razor
ready
real
reason
rebel
rebuild
recall
receive
recipe
record
recycle
reduce
reflect
reform
refuse
region
regret
regular
reject
relax
release
relief
rely
remain
remember
remind
remove
render
renew
rent
reopen
repair
repeat
replace
report
require
rescue
resemble
resist
resource
response
result
retire
retreat
return
reunion
reveal
review
reward
rhythm
rib
ribbon
rice
rich
ride
ridge
rifle
right
rigid
ring
riot
ripple
risk
ritual
rival
river
road
roast
robot
robust
rocket
romance
roof
rookie
room
rose
rotate
rough
round
route
royal
rubber
rude
rug
rule
run
runway
rural
sad
saddle
sadness
safe
sail
salad
salmon
salon
salt
salute
same
sample
sand
satisfy
satoshi
sauce
sausage
save
say
scale
scan
scare
scatter
scene
scheme
school
science
scissors
scorpion
scout
scrap
screen
script
scrub
sea
search
season
seat
second
secret
section
security
seed
seek
segment
select
sell
seminar
senior
sense
sentence
series
service
session
settle
setup
seven
shadow
shaft
shallow
share
shed
shell
sheriff
shield
shift
shine
ship
shiver
shock
shoe
shoot
shop
short
shoulder
shove
shrimp
shrug
shuffle
shy
sibling
sick
side
siege
sight
sign
silent
silk
silly
silver
similar
simple
since
sing
siren
sister
situate
six
size
skate
sketch
ski
skill
skin
skirt
skull
slab
slam
sleep
slender
slice
slide
slight
slim
slogan
slot
slow
slush
small
smart
smile
smoke
smooth
snack
snake
snap
sniff
snow
soap
soccer
social
sock
soda
soft
solar
soldier
solid
solution
solve
someone
song
soon
sorry
sort
soul
sound
soup
source
south
space
spare
spatial
spawn
speak
special
speed
spell
spend
sphere
spice
spider
spike
spin
spirit
split
spoil
sponsor
spoon
sport
spot
spray
spread
spring
spy
square
squeeze
squirrel
stable
stadium
staff
stage
stairs
stamp
stand
start
state
stay
steak
steel
stem
step
stereo
stick
still
sting
stock
stomach
stone
stool
story
stove
strategy
street
strike
strong
struggle
student
stuff
stumble
style
subject
submit
subway
success
such
sudden
suffer
sugar
suggest
suit
summer
sun
sunny
sunset
super
supply
supreme
sure
surface
surge
surprise
surround
survey
suspect
sustain
swallow
swamp
swap
swarm
swear
sweet
swift
swim
swing
switch
sword
symbol
symptom
syrup
system
table
tackle
tag
tail
talent
talk
tank
tape
target
task
taste
tattoo
taxi
teach
team
tell
ten
tenant
tennis
tent
term
test
text
thank
that
theme
then
theory
there
they
thing
this
thought
three
thrive
throw
thumb
thunder
ticket
tide
tiger
tilt
timber
time
tiny
tip
tired
tissue
title
toast
tobacco
today
toddler
toe
together
toilet
token
tomato
tomorrow
tone
tongue
tonight
tool
tooth
top
topic
topple
torch
tornado
tortoise
toss
total
tourist
toward
tower
town
toy
track
trade
traffic
tragic
train
transfer
trap
trash
travel
tray
treat
tree
trend
trial
tribe
trick
trigger
trim
trip
trophy
trouble
truck
true
truly
trumpet
trust
truth
try
tube
tuition
tumble
tuna
tunnel
turkey
turn
turtle
twelve
twenty
twice
twin
twist
two
type
typical
ugly
umbrella
unable
unaware
uncle
uncover
under
undo
unfair
unfold
unhappy
uniform
unique
unit
universe
unknown
unlock
until
unusual
unveil
update
upgrade
uphold
upon
upper
upset
urban
urge
usage
use
used
useful
useless
usual
utility
vacant
vacuum
vague
valid
valley
valve
van
vanish
vapor
various
vast
vault
vehicle
velvet
vendor
venture
venue
verb
verify
version
very
vessel
veteran
viable
vibrant
vicious
victory
video
view
village
vintage
violin
virtual
virus
visa
visit
visual
vital
vivid
vocal
voice
void
volcano
volume
vote
voyage
wage
wagon
wait
walk
wall
walnut
want
warfare
warm
warrior
wash
wasp
waste
water
wave
way
wealth
weapon
wear
weasel
weather
web
wedding
weekend
weird
welcome
west
wet
whale
what
wheat
wheel
when
where
whip
whisper
wide
width
wife
wild
will
win
window
wine
wing
wink
winner
winter
wire
wisdom
wise
wish
witness
wolf
woman
wonder
wood
wool
word
work
world
worry
worth
wrap
wreck
wrestle
wrist
write
wrong
yard
year
yellow
you
young
youth
zebra
zero
zone
zoo`.split(`
`));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Wg(i,t,e=()=>{}){if(!Array.isArray(i))throw new TypeError(`"${t}" expected array, got type=${typeof i}`);for(let n=0;n<i.length;n++)e(i[n],`${t}[${n}]`);return i}const Ue=(i,t,e)=>De(i,t,e),$g=mn;function FE(i,t=""){if(typeof i!="string"){const e=t&&`"${t}" `;throw new TypeError(e+"expected string, got type="+typeof i)}return i}function Ks(i,t="object"){if(i===null||typeof i!="object"||Array.isArray(i))throw new TypeError(t==="object"?"expected valid options object":`"${t}" expected object, got type=${typeof i}`);return i}function Kr(i,t){if(typeof i!="function")throw new TypeError(`"${t}" is invalid: expected function, got ${typeof i}`);return i}const Qg=Iu,Ci=(...i)=>Or(...i),kh=i=>Pg(i),cl=Bh,Pu=i=>Ug(i),Qa=BigInt(0),ip=BigInt(1),kE=i=>i?`"${i}" `:"";function os(i,t=""){if(typeof i!="boolean")throw new TypeError(kE(t)+"expected boolean, got type="+typeof i);return i}function Du(i){if(typeof i=="bigint"){if(!Ji(i))throw new RangeError("positive bigint expected, got "+i)}else $g(i);return i}function ro(i,t=""){if(typeof i!="number"){const e=t&&`"${t}" `;throw new TypeError(e+"expected number, got type="+typeof i)}if(!Number.isSafeInteger(i)){const e=t&&`"${t}" `;throw new RangeError(e+"expected safe integer, got "+i)}}function sa(i){const t=Du(i).toString(16);return t.length&1?"0"+t:t}function qg(i){if(typeof i!="string")throw new TypeError("hex string expected, got "+typeof i);return i===""?Qa:BigInt("0x"+i)}function ar(i){return qg(Iu(i))}function Kg(i){return qg(Iu(OE(De(i)).reverse()))}function Uu(i,t){if(mn(t),t===0)throw new Error("zero output length is invalid");i=Du(i);const e=t*2,n=i.toString(16);if(n.length>e)throw new RangeError("number is too large");return Pg(n.padStart(e,"0"))}function Yg(i,t){return Uu(i,t).reverse()}function OE(i){return Uint8Array.from(Ue(i))}function Ji(i){return typeof i=="bigint"&&Qa<=i}function Xg(i,t,e){return Ji(i)&&Ji(t)&&Ji(e)&&t<=i&&i<e}function jg(i,t,e,n){if(!Xg(t,e,n))throw new RangeError("expected valid "+i+": "+e+" <= n < "+n+", got "+t)}function Bu(i){if(i<Qa)throw new Error("expected non-negative bigint, got "+i);return i===Qa?0:i.toString(2).length}const Nu=i=>(ro(i,"n"),(ip<<BigInt(i))-ip);function zE(i,t,e){if(mn(i,"hashLen"),mn(t,"qByteLen"),typeof e!="function")throw new TypeError("hmacFn must be a function");const n=g=>new Uint8Array(g),s=Uint8Array.of(),r=Uint8Array.of(0),o=Uint8Array.of(1),a=1e3;let l=n(i),c=n(i),h=0;const u=()=>{l.fill(1),c.fill(0),h=0},d=(...g)=>e(c,Ci(l,...g)),f=(g=s)=>{c=d(r,g),l=d(),g.length!==0&&(c=d(o,g),l=d())},p=()=>{if(h++>=a)throw new Error("drbg: tried max amount of iterations");let g=0;const m=[];for(;g<t;){l=d();const x=l.slice();m.push(x),g+=l.length}return Ci(...m)};return(g,m)=>{u(),f(g);let x;for(;(x=m(p()))===void 0;)f();return u(),x}}function vo(i,t={},e={},n="object"){Ks(i,n),Ks(t,"fields"),Ks(e,"optFields");function s(o,a,l){const c=n==="object"?`param "${String(o)}"`:`"${n}.${String(o)}"`,h=i[o];if(!Object.hasOwn(i,o)&&(l?h!==void 0:a!=="function"))throw new TypeError(`${c} is invalid: expected own property`);if(l&&h===void 0)return;const u=typeof h;if(u!==a||h===null)throw new TypeError(`${c} is invalid: expected ${a}, got ${u}`)}const r=(o,a)=>Object.entries(o).forEach(([l,c])=>s(l,c,a));r(t,!1),r(e,!0)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const me=BigInt(0),se=BigInt(1),Ti=BigInt(2),Zg=BigInt(3),Fu=BigInt(4),Jg=BigInt(5),HE=BigInt(7),t0=BigInt(8),VE=BigInt(9),GE=BigInt(15),e0=BigInt(16),WE=BigInt("0x10000000000000000");function Je(i,t){if(t<=me)throw new Error("mod: expected positive modulus, got "+t);const e=i%t;return e>=me?e:t+e}function n0(i,t,e){if(e<=se)throw new Error("pow: expected modulus > 1, got "+e);if(typeof t!="bigint")throw new TypeError("invalid exponent: expected bigint, got "+typeof t);if(t<me)throw new Error("invalid exponent, negatives unsupported");if(t===me)return se;if(t===se)return i;let n=i%e;if(n<me&&(n+=e),t<WE){let a=se;for(;t>me;)t&se&&(a=a*n%e),n=n*n%e,t>>=se;return a}const s=[];for(;t>me;)s.push(Number(t&GE)),t>>=Fu;const r=new Array(16);r[0]=se,r[1]=n;for(let a=2;a<16;a++)r[a]=r[a-1]*n%e;let o=r[s[s.length-1]];for(let a=s.length-2;a>=0;a--){o=o*o%e,o=o*o%e,o=o*o%e,o=o*o%e;const l=s[a];l!==0&&(o=o*r[l]%e)}return o}function cn(i,t,e){if(e<=se)throw new Error("pow2: expected modulus > 1, got "+e);if(t<me)throw new Error("pow2: expected non-negative exponent, got "+t);let n=i;for(;t-- >me;)n*=n,n%=e;return n}function sp(i,t){if(i===me)throw new Error("invert: expected non-zero number");if(t<=se)throw new Error("invert: expected modulus > 1, got "+t);let e=Je(i,t),n=t,s=me,r=se;for(;e!==me;){const a=n/e,l=n-e*a,c=s-r*a;n=e,e=l,s=r,r=c}if(n!==se)throw new Error("invert: does not exist");return Je(s,t)}function $E(i,t){if(t<=se)throw new Error("invertCt: expected prime modulus > 1, got "+t);const e=Je(i,t);if(e===me)throw new Error("invertCt: expected non-zero number");const n=n0(e,t-Ti,t);if(Je(e*n,t)!==se)throw new Error("invertCt: does not exist");return n}function ku(i,t,e){const n=i;if(!n.eql(n.sqr(t),e))throw new Error("Cannot find square root")}function Ou(i,t){if((i&se)===me)throw new Error(t+": expected odd modulus, got "+i)}function i0(i,t){const e=i,n=(e.ORDER+se)/Fu,s=e.pow(t,n);return ku(e,s,t),s}function QE(i,t){const e=i,n=(e.ORDER-Jg)/t0,s=e.mul(t,Ti),r=e.pow(s,n),o=e.mul(t,r),a=e.mul(e.mul(o,Ti),r),l=e.mul(o,e.sub(a,e.ONE));return ku(e,l,t),l}function qE(i){const t=hl(i),e=s0(i),n=e(t,t.neg(t.ONE)),s=e(t,n),r=e(t,t.neg(n)),o=(i+HE)/e0;return((a,l)=>{const c=a;let h=c.pow(l,o),u=c.mul(h,n);const d=c.mul(h,s),f=c.mul(h,r),p=c.eql(c.sqr(u),l),v=c.eql(c.sqr(d),l);h=c.cmov(h,u,p),u=c.cmov(f,d,v);const g=c.eql(c.sqr(u),l),m=c.cmov(h,u,g);return ku(c,m,l),m})}function s0(i){if(i<Zg)throw new Error("sqrt is not defined for small field");Ou(i,"tonelliShanks");let t=i-se,e=0;for(;t%Ti===me;)t/=Ti,e++;let n=Ti;const s=hl(i);for(;rp(s,n)===1;)if(n++>1e3)throw new Error("Cannot find square root: probably non-prime P");if(e===1)return i0;let r=s.pow(n,t);const o=(t+se)/Ti;return function(l,c){const h=l;if(h.is0(c))return c;if(rp(h,c)!==1)throw new Error("Cannot find square root");let u=e,d=h.mul(h.ONE,r),f=h.pow(c,t),p=h.pow(c,o);for(;!h.eql(f,h.ONE);){if(h.is0(f))throw new Error("Cannot find square root: probably non-prime P");let v=1,g=h.sqr(f);for(;!h.eql(g,h.ONE);)if(v++,g=h.sqr(g),v===u)throw new Error("Cannot find square root");const m=se<<BigInt(u-v-1),x=h.pow(d,m);u=v,d=h.sqr(x),f=h.mul(f,d),p=h.mul(p,x)}return p}}function KE(i){return Ou(i,"Fp.sqrt"),i%Fu===Zg?i0:i%t0===Jg?QE:i%e0===VE?qE(i):s0(i)}const YE=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function oo(i){if(Ks(i,"field"),typeof i.ORDER!="bigint")throw new TypeError('param "ORDER" is invalid: expected bigint, got '+typeof i.ORDER);ro(i.BYTES,"BYTES"),ro(i.BITS,"BITS");for(const t of YE)Kr(i[t],"field."+t);if(i.BYTES<1||i.BITS<1)throw new Error("invalid field: expected BYTES/BITS > 0");if(i.ORDER<=se)throw new Error("invalid field: expected ORDER > 1, got "+i.ORDER);return i}function r0(i,t,e=!1){oo(i),Wg(t,"nums"),os(e,"passZero");const n=i,s=new Array(t.length).fill(e?n.ZERO:void 0),r=t.reduce((a,l,c)=>n.is0(l)?a:(s[c]=a,n.mul(a,l)),n.ONE),o=n.inv(r);return t.reduceRight((a,l,c)=>n.is0(l)?a:(s[c]=n.mul(a,s[c]),n.mul(a,l)),o),s}function rp(i,t){oo(i);const e=i;Ou(e.ORDER,"FpLegendre");const n=(e.ORDER-se)/Ti,s=e.pow(t,n),r=e.eql(s,e.ONE),o=e.eql(s,e.ZERO),a=e.eql(s,e.neg(e.ONE));if(!r&&!o&&!a)throw new Error("invalid Legendre symbol result");return r?1:o?0:-1}function XE(i,t){if(t!==void 0&&$g(t),i<=me)throw new Error("invalid n length: expected positive n, got "+i);if(t!==void 0&&t<1)throw new Error("invalid n length: expected positive bit length, got "+t);const e=Bu(i);if(t!==void 0&&t<e)throw new Error(`invalid n length: expected nBitLength (${t}) >= bitLen(n) (${e})`);const n=t!==void 0?t:e,s=Math.ceil(n/8);return{nBitLength:n,nByteLength:s}}const op=new WeakMap;class ap{constructor(t,e={}){ct(this,"ORDER");ct(this,"BITS");ct(this,"BYTES");ct(this,"isLE");ct(this,"ZERO",me);ct(this,"ONE",se);ct(this,"_lengths");ct(this,"_mod");if(t<=se)throw new Error("invalid field: expected ORDER > 1, got "+t);let n;this.isLE=!1,e!=null&&typeof e=="object"&&(typeof e.BITS=="number"&&(n=e.BITS),typeof e.sqrt=="function"&&Object.defineProperty(this,"sqrt",{value:e.sqrt,enumerable:!0}),typeof e.isLE=="boolean"&&(this.isLE=e.isLE),e.allowedLengths&&(this._lengths=Object.freeze(e.allowedLengths.slice())),typeof e.modFromBytes=="boolean"&&(this._mod=e.modFromBytes));const{nBitLength:s,nByteLength:r}=XE(t,n);if(r>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");this.ORDER=t,this.BITS=s,this.BYTES=r,Object.freeze(this)}create(t){return Je(t,this.ORDER)}isValid(t){if(typeof t!="bigint")throw new TypeError("invalid field element: expected bigint, got "+typeof t);return me<=t&&t<this.ORDER}is0(t){return t===me}isValidNot0(t){return!this.is0(t)&&this.isValid(t)}isOdd(t){return(t&se)===se}neg(t){return Je(-t,this.ORDER)}eql(t,e){return t===e}sqr(t){return Je(t*t,this.ORDER)}add(t,e){return Je(t+e,this.ORDER)}sub(t,e){return Je(t-e,this.ORDER)}mul(t,e){return Je(t*e,this.ORDER)}pow(t,e){return n0(t,e,this.ORDER)}div(t,e){return Je(t*sp(e,this.ORDER),this.ORDER)}sqrN(t){return t*t}addN(t,e){return t+e}subN(t,e){return t-e}mulN(t,e){return t*e}inv(t){return sp(t,this.ORDER)}sqrt(t){let e=op.get(this);return e||op.set(this,e=KE(this.ORDER)),e(this,t)}toBytes(t){return this.isLE?Yg(t,this.BYTES):Uu(t,this.BYTES)}fromBytes(t,e=!1){Ue(t);const{_lengths:n,BYTES:s,isLE:r,ORDER:o,_mod:a}=this;if(n){if(t.length<1||!n.includes(t.length)||t.length>s)throw new Error("Field.fromBytes: expected "+n+" bytes, got "+t.length);const c=new Uint8Array(s);c.set(t,r?0:c.length-t.length),t=c}if(t.length!==s)throw new Error("Field.fromBytes: expected "+s+" bytes, got "+t.length);let l=r?Kg(t):ar(t);if(a&&(l=Je(l,o)),!e&&!this.isValid(l))throw new Error("invalid field element: outside of range 0..ORDER");return l}invertBatch(t){return r0(this,t,!0)}cmov(t,e,n){return os(n,"condition"),n?e:t}}function hl(i,t={}){return Object.freeze(ap.prototype),new ap(i,t)}function o0(i){if(typeof i!="bigint")throw new Error("field order must be bigint");if(i<=se)throw new Error("field order must be greater than 1");const t=Bu(i-se);return Math.ceil(t/8)}function zu(i){const t=o0(i);return t+Math.ceil(t/2)}function a0(i,t,e=!1){Ue(i);const n=i.length,s=o0(t),r=Math.max(zu(t),16);if(n<r||n>1024)throw new Error("expected "+r+"-1024 bytes of input, got "+n);const o=e?Kg(i):ar(i),a=Je(o,t-se)+se;return e?Yg(a,s):Uu(a,s)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Hu=BigInt(0),ao=BigInt(1),jE=BigInt(4),sc=16,lp=128,ZE=5,cp=2**31;function _o(i){const t=i;if(typeof t!="function")throw new TypeError('"Point" expected constructor, got type='+typeof i);Kr(t.fromAffine,"Point.fromAffine"),Kr(t.fromBytes,"Point.fromBytes"),Kr(t.fromHex,"Point.fromHex"),Ks(t.BASE,"Point.BASE"),Ks(t.ZERO,"Point.ZERO"),oo(t.Fp),oo(t.Fn)}function JE(i,t){_o(i),c0(t,i);const e=r0(i.Fp,t.map(n=>n.Z));return t.map((n,s)=>i.fromAffine(n.toAffine(e[s])))}function tA(i,t,e=1){if(!Number.isSafeInteger(i)||i<e||i>t)throw new Error("invalid window size, expected ["+e+".."+t+"], got W="+i)}function eA(i,t){const e=i*(4*t+128);if(e>cp)throw new Error("invalid window size: table would need ~"+Math.ceil(e/2**20)+" MiB, max "+cp/2**20+" MiB")}function l0(i,t){if(i!==void 0){Kr(i,"randomBytes");try{const e=i(t);if(!cl(e)||e.length!==t)return}catch{return}return i}}function c0(i,t){Wg(i,"points"),i.forEach((e,n)=>{if(!(e instanceof t))throw new Error("invalid point at index "+n)})}function nA(i,t,e){if(!Array.isArray(i))throw new Error("array of scalars expected");i.forEach((n,s)=>{if(!(e===void 0?t.isValid(n):Ji(n)&&n<e))throw new Error("invalid scalar at index "+s)})}const h0=new WeakMap;function rc(i){return h0.get(i)||1}function iA(i,t){const e=i.double(),n=[i];for(let s=1;s<t;s++)n.push(n[s-1].add(e));return n}function sA(i,t){const e=2**t,n=e/2,s=BigInt(e-1),r=[];for(;i>Hu;){let o=0;i&ao&&(o=Number(i&s),o>=n&&(o-=e),i-=BigInt(o)),r.push(o),i>>=ao}return r}function rA(i,t,e){const n=2**t,s=n/2,r=BigInt(n-1),o=BigInt(t),a=[];for(let l=0;l<e;l++){let c=Number(i&r);i>>=o,c>s&&(c-=n,i+=ao),a.push(c)}if(i!==Hu)throw new Error("invalid wnaf");return a}function oA(i,t,e){let n=0;for(const r of e)n=Math.max(n,r.length);let s=i;for(let r=n-1;r>=0;r--){r!==n-1&&(s=s.double());for(let o=0;o<e.length;o++){const a=e[o][r];if(a){const l=t[o][Math.abs(a)-1>>1];s=s.add(a<0?l.negate():l)}}}return s}class aA{constructor(t,e){ct(this,"Point");ct(this,"BASE");ct(this,"ZERO");ct(this,"randomBytes");ct(this,"wnafPrecomputes",new WeakMap);ct(this,"baseCanBeBlinded");ct(this,"bits");_o(t),this.randomBytes=l0(e,sc),this.Point=t,this.BASE=t.BASE,this.ZERO=t.ZERO,this.bits=t.Fn.BITS}buildWnafTable(t,e,n){const s=Math.ceil(n/e)+1,r=2**(e-1),o=[];let a=t;for(let l=0;l<s;l++){let c=a;for(let h=0;h<r;h++)o.push(c),c=c.add(a);a=o[o.length-1].double()}return{W:e,bits:n,windows:s,comp:o}}wnafCachedCT(t,e){const{W:n,windows:s,comp:r}=t,o=2**(n-1),a=rA(e,n,s);let l=this.ZERO,c=this.BASE;for(let h=0;h<s;h++){const u=a[h],d=h*o,f=Math.abs(u)-1;let p=r[d];for(let g=1;g<o;g++)p=g===f?r[d+g]:p;const v=p.negate();u===0?c=c.add(r[d]):l=l.add(u<0?v:p)}return{p:l,f:c}}getWnafPrecomputes(t,e,n,s){let r=this.wnafPrecomputes.get(e),o=r?.find(a=>a.W===t&&a.bits===n);return o||(o=this.buildWnafTable(e,t,n),typeof s=="function"&&(o={...o,comp:s(o.comp)}),r||(r=[],this.wnafPrecomputes.set(e,r)),r.push(o)),o}assertPoint(t){if(!(t instanceof this.Point))throw new TypeError('"point" expected Point instance, got type='+typeof t)}validateMulInput(t,e){if(this.assertPoint(t),!Xg(e,ao,this.Point.Fn.ORDER))throw new Error("invalid scalar")}runCT(t,e,n,s){const r=rc(t);return r===1?this.fixedWindowCT(t,e,n):this.wnafCachedCT(this.getWnafPrecomputes(r,t,n,s),e)}mulCT(t,e,n){return this.validateMulInput(t,e),this.runCT(t,e,this.bits,n)}mulCTBlinded(t,e,n){if(this.validateMulInput(t,e),this.randomBytes===void 0)throw new Error("randomBytes is required for scalar blinding");const s=this.Point.Fn.BITS+lp,r=this.randomBytes(sc);if(!cl(r)||r.length!==sc)throw new Error("randomBytes returned invalid byte array");r[0]=r[0]&63|128;const o=e+ar(r)*this.Point.Fn.ORDER;return this.runCT(t,o,s,n)}fixedWindowCT(t,e,n){const s=ZE,r=1<<s,o=Nu(s),a=new Array(r);a[0]=this.ZERO;for(let h=1;h<r;h++)a[h]=a[h-1].add(t);const l=Math.ceil(n/s);let c=this.ZERO;for(let h=l-1;h>=0;h--){if(h!==l-1)for(let f=0;f<s;f++)c=c.double();const u=Number(e>>BigInt(h*s)&o);let d=a[0];for(let f=1;f<r;f++)d=f===u?a[f]:d;c=c.add(d)}return{p:c,f:c}}shouldBlind(t,e){return this.randomBytes===void 0?!1:e===ao?!0:t!==this.BASE?!1:(this.baseCanBeBlinded===void 0&&(this.baseCanBeBlinded=this.mulUnsafe(this.BASE,this.Point.Fn.ORDER).is0()),this.baseCanBeBlinded)}mulSecret(t,e,n,s){return this.shouldBlind(t,n)?this.mulCTBlinded(t,e,s):this.mulCT(t,e,s)}mulUnsafe(t,e,n){if(this.assertPoint(t),!Ji(e))throw new Error("invalid scalar");const s=rc(t);if(s===1||e>=this.Point.Fn.ORDER)return Oh(this.Point,[t],[e],!0);const r=this.getWnafPrecomputes(s,t,this.bits,n);return this.wnafCachedCT(r,e).p}setWindowSize(t,e){this.assertPoint(t),tA(e,this.bits);const n=Math.ceil((this.bits+lp)/e)+1;eA(n*2**(e-1),this.Point.Fp.BYTES),h0.set(t,e),this.wnafPrecomputes.delete(t)}hasWindowSize(t){return rc(t)!==1}}function Oh(i,t,e,n=!1){if(_o(i),c0(t,i),os(n,"allowOversized"),nA(e,i.Fn,n?i.Fn.ORDER**jE:void 0),t.length!==e.length)throw new Error("arrays of points and scalars must have equal length");const s=t.map(o=>iA(o,4)),r=e.map(o=>sA(o,4));return oA(i.ZERO,s,r)}function hp(i,t,e){if(t){if(t.ORDER!==i)throw new Error("Field.ORDER must match order: Fp == p, Fn == n");return oo(t),t}else return hl(i,{isLE:e})}function lA(i,t,e={},n){if(n===void 0&&(n=i==="edwards"),!t||typeof t!="object")throw new Error(`expected valid ${i} CURVE object`);vo(e);for(const l of["p","n","h"]){const c=t[l];if(!(Ji(c)&&c!==Hu))throw new Error(`CURVE.${l} must be positive bigint`)}const s=hp(t.p,e.Fp,n),r=hp(t.n,e.Fn,n),a=["Gx","Gy","a","b"];for(const l of a)if(!s.isValid(t[l]))throw new Error(`CURVE.${l} must be valid field element of CURVE.Fp`);return t=Object.freeze(Object.assign({},t)),{CURVE:t,Fp:s,Fn:r}}function cA(i,t){return function(n){const s=i(n);return{secretKey:s,publicKey:t(s)}}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const hA=BigInt(0);class uA extends Error{constructor(t=""){super(t)}}const Zn={Err:uA,_tlv:{encode:(i,t)=>{const{Err:e}=Zn;if(ro(i,"tag"),i<0||i>255)throw new e("tlv.encode: wrong tag");if(FE(t,"data"),t.length&1)throw new e("tlv.encode: unpadded data");const n=t.length/2,s=sa(n);if(s.length/2&128)throw new e("tlv.encode: long form length too big");const r=n>127?sa(s.length/2|128):"";return sa(i)+r+s+t},decode(i,t){const{Err:e}=Zn;t=Ue(t,void 0,"DER data");let n=0;if(i<0||i>255)throw new e("tlv.decode: wrong tag");if(t.length<2||t[n++]!==i)throw new e("tlv.decode: wrong tlv");const s=t[n++],r=!!(s&128);let o=0;if(!r)o=s;else{const l=s&127;if(!l)throw new e("tlv.decode(long): indefinite length not supported");if(l>4)throw new e("tlv.decode(long): byte length is too big");const c=t.subarray(n,n+l);if(c.length!==l)throw new e("tlv.decode: length bytes not complete");if(c[0]===0)throw new e("tlv.decode(long): zero leftmost byte");for(const h of c)o=o<<8|h;if(n+=l,o<128)throw new e("tlv.decode(long): not minimal encoding")}const a=t.subarray(n,n+o);if(a.length!==o)throw new e("tlv.decode: wrong value length");return{v:a,l:t.subarray(n+o)}}},_int:{encode(i){const{Err:t}=Zn;if(Du(i),i<hA)throw new t("integer: negative integers are not allowed");let e=sa(i);if(Number.parseInt(e[0],16)&8&&(e="00"+e),e.length&1)throw new t("unexpected DER parsing assertion: unpadded hex");return e},decode(i){const{Err:t}=Zn;if(i.length<1)throw new t("invalid signature integer: empty");if(i[0]&128)throw new t("invalid signature integer: negative");if(i.length>1&&i[0]===0&&!(i[1]&128))throw new t("invalid signature integer: unnecessary leading zero");return ar(i)}},toSig(i,t){const{Err:e,_int:n,_tlv:s}=Zn;if(t!==void 0&&(ro(t,"maxScalarBytes"),t<1))throw new e("invalid signature: maxScalarBytes must be positive");const r=Ue(i,void 0,"signature"),{v:o,l:a}=s.decode(48,r);if(a.length)throw new e("invalid signature: left bytes after parsing");const{v:l,l:c}=s.decode(2,o),{v:h,l:u}=s.decode(2,c);if(u.length)throw new e("invalid signature: left bytes after parsing");if(t!==void 0&&(l.length>t||h.length>t))throw new e("invalid signature: integer too large");return{r:n.decode(l),s:n.decode(h)}},hexFromSig(i){const{_tlv:t,_int:e}=Zn;vo(i,{r:"bigint",s:"bigint"},{},"sig");const n=t.encode(2,e.encode(i.r)),s=t.encode(2,e.encode(i.s)),r=n+s;return t.encode(48,r)}},oc=(Object.freeze(Zn._tlv),Object.freeze(Zn._int),Object.freeze(Zn));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const up=(i,t)=>(i+(i>=0?t:-t)/u0)/t;function dA(i,t,e){jg("scalar",i,ti,e);const[[n,s],[r,o]]=t,a=up(o*i,e),l=up(-s*i,e);let c=i-a*n-l*r,h=-a*s-l*o;const u=c<ti,d=h<ti;u&&(c=-c),d&&(h=-h);const f=Nu(Math.ceil(Bu(e)/2))+Yi;if(c<ti||c>=f||h<ti||h>=f)throw new Error("splitScalar (endomorphism): failed for k");return{k1neg:u,k1:c,k2neg:d,k2:h}}function zh(i){if(!["compact","recovered","der"].includes(i))throw new Error('Signature format must be "compact", "recovered", or "der"');return i}function ac(i,t){vo(i);const e={};for(let n of Object.keys(t))e[n]=i[n]===void 0?t[n]:i[n];return os(e.lowS,"lowS"),os(e.prehash,"prehash"),e.format!==void 0&&zh(e.format),e}const ti=BigInt(0),Yi=BigInt(1),u0=BigInt(2),lc=BigInt(3),fA=BigInt(4);function pA(i,t={}){const e=lA("weierstrass",i,t),n=e.Fp,s=e.Fn;let r=e.CURVE;const{h:o,n:a}=r;vo(t,{},{allowInfinityPoint:"boolean",clearCofactor:"function",isTorsionFree:"function",fromBytes:"function",toBytes:"function",endo:"object",randomBytes:"function"});const{endo:l,allowInfinityPoint:c,clearCofactor:h,isTorsionFree:u,fromBytes:d,toBytes:f}=t,p=t.randomBytes===void 0?Pu:t.randomBytes;if(l&&(!n.is0(r.a)||typeof l.beta!="bigint"||!Array.isArray(l.basises)))throw new Error('invalid endo: expected "beta": bigint and "basises": array');const v=l?{beta:l.beta,basises:l.basises.map($=>[...$])}:void 0,g=f0(n,s);function m(){if(!n.isOdd)throw new Error("compression is not supported: Field does not have .isOdd()")}function x($,Q,it){if(Q.is0()){if(!c)throw new Error("bad point: ZERO");return Uint8Array.of(0)}const{x:O,y:Y}=Q.toAffine(),rt=n.toBytes(O);if(os(it,"isCompressed"),it){m();const tt=!n.isOdd(Y);return Ci(d0(tt),rt)}else return Ci(Uint8Array.of(4),rt,n.toBytes(Y))}function _($){Ue($,void 0,"Point");const{publicKey:Q,publicKeyUncompressed:it}=g,O=$.length,Y=$[0],rt=$.subarray(1);if(c&&O===1&&Y===0)return{x:n.ZERO,y:n.ZERO};if(O===Q&&(Y===2||Y===3)){const tt=n.fromBytes(rt);if(!n.isValid(tt))throw new Error("bad point: is not on curve, wrong x");const ht=I(tt);let dt;try{dt=n.sqrt(ht)}catch(Et){const zt=Et instanceof Error?": "+Et.message:"";throw new Error("bad point: is not on curve, sqrt error"+zt)}m();const vt=n.isOdd(dt);return(Y&1)===1!==vt&&(dt=n.neg(dt)),{x:tt,y:dt}}else if(O===it&&Y===4){const tt=n.BYTES,ht=n.fromBytes(rt.subarray(0,tt)),dt=n.fromBytes(rt.subarray(tt,tt*2));if(!w(ht,dt))throw new Error("bad point: is not on curve");return{x:ht,y:dt}}else throw new Error(`bad point: got length ${O}, expected compressed=${Q} or uncompressed=${it}`)}const y=f===void 0?x:f,R=d===void 0?_:d,A=n.mul(r.b,lc),T=n.is0(r.a)?$=>n.ZERO:$=>n.mul(r.a,$);function I($){const Q=n.sqr($),it=n.mul(Q,$);return n.add(n.add(it,n.mul($,r.a)),r.b)}function w($,Q){const it=n.sqr(Q),O=I($);return n.eql(it,O)}if(!w(r.Gx,r.Gy))throw new Error("bad curve params: generator point");const b=n.mul(n.pow(r.a,lc),fA),S=n.mul(n.sqr(r.b),BigInt(27));if(n.is0(n.add(b,S)))throw new Error("bad curve params: a or b");function U($,Q,it=!1){if(!n.isValid(Q)||it&&n.is0(Q))throw new Error(`bad point coordinate ${$}`);return typeof Q=="object"&&Q!==null?n.create(Q):Q}function P($){if(!($ instanceof nt))throw new Error("Weierstrass Point expected")}function W($){if(!v||!v.basises)throw new Error("no endo");return dA($,v.basises,s.ORDER)}function Z($,Q,it,O){if(!s.isValid(O))throw new RangeError("invalid scalar: out of range");if(v){const{k1neg:Y,k1:rt,k2neg:tt,k2:ht}=W(O),dt=new nt(n.mul(it.X,v.beta),it.Y,it.Z);$.push(Y?it.negate():it,tt?dt.negate():dt),Q.push(rt,ht)}else $.push(it),Q.push(O)}const D=new WeakSet,K=class K{constructor(Q,it,O){ct(this,"X");ct(this,"Y");ct(this,"Z");this.X=U("x",Q),this.Y=U("y",it,!0),this.Z=U("z",O),Object.freeze(this)}static CURVE(){return r}static fromAffine(Q){const{x:it,y:O}=Q||{};if(!Q||!n.isValid(it)||!n.isValid(O))throw new Error("invalid affine point");if(Q instanceof K)throw new Error("projective point not allowed");return n.is0(it)&&n.is0(O)?K.ZERO:new K(it,O,n.ONE)}static fromBytes(Q){const it=K.fromAffine(R(Ue(Q,void 0,"point")));return it.assertValidity(),it}static fromHex(Q){return K.fromBytes(kh(Q))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}precompute(Q=6,it=!0){return lt.setWindowSize(this,Q),it||this.multiply(lc),this}assertValidity(){const Q=this;if(Q.is0()){if(c&&n.is0(Q.X)&&n.eql(Q.Y,n.ONE)&&n.is0(Q.Z))return;throw new Error("bad point: ZERO")}if(D.has(Q))return;const{x:it,y:O}=Q.toAffine();if(!n.isValid(it)||!n.isValid(O))throw new Error("bad point: x or y not field elements");if(!w(it,O))throw new Error("bad point: equation left != right");if(!Q.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");D.add(Q)}hasEvenY(){const{y:Q}=this.toAffine();if(!n.isOdd)throw new Error("Field doesn't support isOdd");return!n.isOdd(Q)}equals(Q){P(Q);const{X:it,Y:O,Z:Y}=this,{X:rt,Y:tt,Z:ht}=Q,dt=n.eql(n.mul(it,ht),n.mul(rt,Y)),vt=n.eql(n.mul(O,ht),n.mul(tt,Y));return dt&&vt}negate(){return new K(this.X,n.neg(this.Y),this.Z)}double(){const{X:Q,Y:it,Z:O}=this;let Y=n.ZERO,rt=n.ZERO,tt=n.ZERO,ht=n.mul(Q,Q),dt=n.mul(it,it),vt=n.mul(O,O),It=n.mul(Q,it);return It=n.add(It,It),tt=n.mul(Q,O),tt=n.add(tt,tt),Y=T(tt),rt=n.mul(A,vt),rt=n.add(Y,rt),Y=n.sub(dt,rt),rt=n.add(dt,rt),rt=n.mul(Y,rt),Y=n.mul(It,Y),tt=n.mul(A,tt),vt=T(vt),It=n.sub(ht,vt),It=T(It),It=n.add(It,tt),tt=n.add(ht,ht),ht=n.add(tt,ht),ht=n.add(ht,vt),ht=n.mul(ht,It),rt=n.add(rt,ht),vt=n.mul(it,O),vt=n.add(vt,vt),ht=n.mul(vt,It),Y=n.sub(Y,ht),tt=n.mul(vt,dt),tt=n.add(tt,tt),tt=n.add(tt,tt),new K(Y,rt,tt)}add(Q){P(Q);const{X:it,Y:O,Z:Y}=this,{X:rt,Y:tt,Z:ht}=Q;let dt=n.ZERO,vt=n.ZERO,It=n.ZERO,Et=n.mul(it,rt),zt=n.mul(O,tt),B=n.mul(Y,ht),Rt=n.add(it,O),mt=n.add(rt,tt);Rt=n.mul(Rt,mt),mt=n.add(Et,zt),Rt=n.sub(Rt,mt),mt=n.add(it,Y);let Lt=n.add(rt,ht);return mt=n.mul(mt,Lt),Lt=n.add(Et,B),mt=n.sub(mt,Lt),Lt=n.add(O,Y),dt=n.add(tt,ht),Lt=n.mul(Lt,dt),dt=n.add(zt,B),Lt=n.sub(Lt,dt),It=T(mt),dt=n.mul(A,B),It=n.add(dt,It),dt=n.sub(zt,It),It=n.add(zt,It),vt=n.mul(dt,It),zt=n.add(Et,Et),zt=n.add(zt,Et),B=T(B),mt=n.mul(A,mt),zt=n.add(zt,B),B=n.sub(Et,B),B=T(B),mt=n.add(mt,B),Et=n.mul(zt,mt),vt=n.add(vt,Et),Et=n.mul(Lt,mt),dt=n.mul(Rt,dt),dt=n.sub(dt,Et),Et=n.mul(Rt,zt),It=n.mul(Lt,It),It=n.add(It,Et),new K(dt,vt,It)}subtract(Q){return P(Q),this.add(Q.negate())}is0(){return this.equals(K.ZERO)}multiply(Q){if(!s.isValidNot0(Q))throw new RangeError("invalid scalar: out of range");const{p:it,f:O}=lt.mulSecret(this,Q,o,q);return q([it,O])[0]}multiplyUnsafe(Q){const it=this,O=Q;if(!s.isValid(O))throw new RangeError("invalid scalar: out of range");if(O===ti||it.is0())return K.ZERO;if(O===Yi)return it;if(lt.hasWindowSize(this))return lt.mulUnsafe(it,O,q);const Y=[],rt=[];return Z(Y,rt,it,O),Oh(K,Y,rt)}mulAddUnsafe(Q,it,O){P(it);const Y=[],rt=[];return Z(Y,rt,this,Q),Z(Y,rt,it,O),Oh(K,Y,rt)}toAffine(Q){const it=this;let O=Q;if(O!=null&&!n.isValid(O))throw new RangeError('"invertedZ" expected valid field element');const{X:Y,Y:rt,Z:tt}=it;if(n.eql(tt,n.ONE))return{x:Y,y:rt};const ht=it.is0();O==null&&(O=ht?n.ONE:n.inv(tt));const dt=n.mul(Y,O),vt=n.mul(rt,O),It=n.mul(tt,O);if(ht)return{x:n.ZERO,y:n.ZERO};if(!n.eql(It,n.ONE))throw new Error("invZ was invalid");return{x:dt,y:vt}}isTorsionFree(){return o===Yi?!0:u?u(K,this):lt.mulUnsafe(this,a).is0()}clearCofactor(){return o===Yi?this:h?h(K,this):this.multiplyUnsafe(o)}isSmallOrder(){return o===Yi?this.is0():this.clearCofactor().is0()}toBytes(Q=!0){return os(Q,"isCompressed"),this.assertValidity(),y(K,this,Q)}toHex(Q=!0){return Qg(this.toBytes(Q))}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}};ct(K,"BASE",new K(r.Gx,r.Gy,n.ONE)),ct(K,"ZERO",new K(n.ZERO,n.ONE,n.ZERO)),ct(K,"Fp",n),ct(K,"Fn",s);let nt=K;const q=$=>JE(nt,$),lt=new aA(nt,p);return lt.bits>=6&&nt.BASE.precompute(6),Object.freeze(nt.prototype),Object.freeze(nt),nt}function d0(i){return Uint8Array.of(i?2:3)}function f0(i,t){return{secretKey:t.BYTES,publicKey:1+i.BYTES,publicKeyUncompressed:1+2*i.BYTES,publicKeyHasPrefix:!0,signature:2*t.BYTES}}function mA(i,t={}){_o(i);const{Fn:e}=i,n=t.randomBytes===void 0?Pu:t.randomBytes,s=Object.assign(f0(i.Fp,e),{seed:Math.max(zu(e.ORDER),16)});function r(f){try{const p=e.fromBytes(f);return e.isValidNot0(p)}catch{return!1}}function o(f,p){const{publicKey:v,publicKeyUncompressed:g}=s;try{const m=f.length;return p===!0&&m!==v||p===!1&&m!==g?!1:!i.fromBytes(f).is0()}catch{return!1}}function a(f){return f=f===void 0?n(s.seed):f,a0(Ue(f,s.seed,"seed"),e.ORDER)}function l(f,p=!0){return i.BASE.multiply(e.fromBytes(f)).toBytes(p)}function c(f){const{secretKey:p,publicKey:v,publicKeyUncompressed:g}=s,m=e._lengths;if(!cl(f))return;const x=Ue(f,void 0,"key").length,_=x===v||x===g,y=x===p||!!m?.includes(x);if(!(_&&y))return _}function h(f,p,v=!0){if(c(f)===!0)throw new Error("first arg must be private key");if(c(p)===!1)throw new Error("second arg must be public key");const g=e.fromBytes(f),m=i.fromBytes(p);if(m.is0())throw new Error("invalid public key: point at infinity");return m.multiply(g).toBytes(v)}const u={isValidSecretKey:r,isValidPublicKey:o,randomSecretKey:a},d=cA(a,l);return Object.freeze(u),Object.freeze(s),Object.freeze({getPublicKey:l,getSharedSecret:h,keygen:d,Point:i,utils:u,lengths:s})}function gA(i,t,e={}){_o(i);const n=t;Tu(n),vo(e,{},{hmac:"function",lowS:"boolean",randomBytes:"function",bits2int:"function",bits2int_modN:"function"});const s=Object.assign({},e),r=s.randomBytes===void 0?Pu:s.randomBytes,o=s.hmac===void 0?(K,$)=>$a(n,K,$):s.hmac,{Fp:a,Fn:l}=i,{ORDER:c,BITS:h}=l,u=zu(c),d=l0(r,u),{keygen:f,getPublicKey:p,getSharedSecret:v,utils:g,lengths:m}=mA(i,s),x={prehash:!0,lowS:typeof s.lowS=="boolean"?s.lowS:!0,format:"compact",extraEntropy:!1},_=c*u0+Yi<a.ORDER;function y(K){const $=c>>Yi;return K>$}function R(K,$){if(!l.isValidNot0($))throw new Error(`invalid signature ${K}: out of range 1..Point.Fn.ORDER`);return $}function A(){if(!a.isOdd)throw new Error("Field doesn't support isOdd")}function T(K,$,Q){return A(),(K===Q?0:2)|Number(a.isOdd($))}function I(){if(_)throw new Error('"recovered" sig type is not supported for cofactor >2 curves')}function w(K,$){zh($);const Q=m.signature,it=$==="compact"?Q:$==="recovered"?Q+1:void 0;return Ue(K,it)}class b{constructor($,Q,it){ct(this,"r");ct(this,"s");ct(this,"recovery");if(this.r=R("r",$),this.s=R("s",Q),it!=null){if(I(),![0,1,2,3].includes(it))throw new Error("invalid recovery id");this.recovery=it}Object.freeze(this)}static fromBytes($,Q=x.format){w($,Q);let it;if(Q==="der"){if($.length>2*l.BYTES+16)throw new oc.Err("invalid signature: DER signature too long");const{r:tt,s:ht}=oc.toSig(Ue($),l.BYTES+1);return new b(tt,ht)}Q==="recovered"&&(it=$[0],Q="compact",$=$.subarray(1));const O=m.signature/2,Y=$.subarray(0,O),rt=$.subarray(O,O*2);return new b(l.fromBytes(Y),l.fromBytes(rt),it)}static fromHex($,Q){return this.fromBytes(kh($),Q)}assertRecovery(){const{recovery:$}=this;if($==null)throw new Error("invalid recovery id: must be present");return $}addRecoveryBit($){return new b(this.r,this.s,$)}recoverPublicKey($){const{r:Q,s:it}=this,O=this.assertRecovery(),Y=O===2||O===3?Q+c:Q;if(!a.isValid(Y))throw new Error("invalid recovery id: sig.r+curve.n != R.x");const rt=a.toBytes(Y),tt=i.fromBytes(Ci(d0((O&1)===0),rt)),ht=l.inv(Y),dt=U(Ue($,void 0,"msgHash")),vt=l.create(-dt*ht),It=l.create(it*ht),Et=i.BASE.mulAddUnsafe(vt,tt,It);if(Et.is0())throw new Error("invalid recovery: point at infinify");return Et.assertValidity(),Et}hasHighS(){return y(this.s)}toBytes($=x.format){if(zh($),$==="der")return kh(oc.hexFromSig(this));const{r:Q,s:it}=this,O=l.toBytes(Q),Y=l.toBytes(it);return $==="recovered"?(I(),Ci(Uint8Array.of(this.assertRecovery()),O,Y)):Ci(O,Y)}toHex($){return Qg(this.toBytes($))}}Object.freeze(b.prototype),Object.freeze(b);const S=s.bits2int===void 0?function($){if($.length>8192)throw new Error("input is too large");const Q=ar($),it=$.length*8-h;return it>0?Q>>BigInt(it):Q}:s.bits2int,U=s.bits2int_modN===void 0?function($){return l.create(S($))}:s.bits2int_modN,P=Nu(h);function W(K){return jg("num < 2^"+h,K,ti,P),l.toBytes(K)}function Z(K,$){return Ue(K,void 0,"message"),$?Ue(n(K),void 0,"prehashed message"):K}function D(K,$,Q){const{lowS:it,prehash:O,extraEntropy:Y}=ac(Q,x);K=Z(K,O);const rt=U(K),tt=l.fromBytes($);if(!l.isValidNot0(tt))throw new Error("invalid private key");const ht=[W(tt),W(rt)];if(Y!=null&&Y!==!1){const Et=Y===!0?r(m.secretKey):Y;ht.push(Ue(Et,void 0,"extraEntropy"))}const dt=Ci(...ht),vt=rt;function It(Et){const zt=S(Et);if(!l.isValidNot0(zt))return;const B=i.BASE.multiply(zt).toAffine(),Rt=l.create(B.x);if(Rt===ti)return;let mt;if(d!==void 0){const G=ar(a0(d(u),c)),N=l.inv(l.mul(G,zt)),E=l.mul(G,vt),M=l.mul(G,tt);mt=l.create(N*l.create(E+M*Rt))}else{const G=$E(zt,c);mt=l.create(G*l.create(vt+Rt*tt))}if(mt===ti)return;let Lt=T(B.x,B.y,Rt),L=mt;return it&&y(mt)&&(L=l.neg(mt),Lt^=1),new b(Rt,L,_?void 0:Lt)}return{seed:dt,k2sig:It}}function nt(K,$,Q={}){const{seed:it,k2sig:O}=D(K,$,Q);return zE(n.outputLen,l.BYTES,o)(it,O).toBytes(Q.format)}function q(K,$,Q,it={}){const{lowS:O,prehash:Y,format:rt}=ac(it,x);if(Q=Ue(Q,void 0,"publicKey"),$=Z($,Y),!cl(K)){const tt=K instanceof b?", use sig.toBytes()":"";throw new Error("verify expects Uint8Array signature"+tt)}w(K,rt);try{const tt=b.fromBytes(K,rt),ht=i.fromBytes(Q);if(ht.is0()||O&&tt.hasHighS())return!1;const{r:dt,s:vt}=tt,It=U($),Et=l.inv(vt),zt=l.create(It*Et),B=l.create(dt*Et),Rt=i.BASE.mulAddUnsafe(zt,ht,B);if(Rt.is0())return!1;const mt=Rt.toAffine();return!(l.create(mt.x)!==dt||rt==="recovered"&&tt.recovery!==T(mt.x,mt.y,dt))}catch{return!1}}function lt(K,$,Q={}){const{prehash:it}=ac(Q,x);return $=Z($,it),b.fromBytes(K,"recovered").recoverPublicKey($).toBytes()}return Object.freeze({keygen:f,getPublicKey:p,getSharedSecret:v,utils:g,lengths:m,Point:i,sign:nt,verify:q,recoverPublicKey:lt,Signature:b,hash:n})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Vu={p:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:BigInt(1),a:BigInt(0),b:BigInt(7),Gx:BigInt("0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),Gy:BigInt("0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")},vA={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),basises:[[BigInt("0x3086d221a7d46bcde86c90e49284eb15"),-BigInt("0xe4437ed6010e88286f547fa90abfe4c3")],[BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),BigInt("0x3086d221a7d46bcde86c90e49284eb15")]]},dp=BigInt(2);function _A(i){const t=Vu.p,e=BigInt(3),n=BigInt(6),s=BigInt(11),r=BigInt(22),o=BigInt(23),a=BigInt(44),l=BigInt(88),c=i*i*i%t,h=c*c*i%t,u=cn(h,e,t)*h%t,d=cn(u,e,t)*h%t,f=cn(d,dp,t)*c%t,p=cn(f,s,t)*f%t,v=cn(p,r,t)*p%t,g=cn(v,a,t)*v%t,m=cn(g,l,t)*g%t,x=cn(m,a,t)*v%t,_=cn(x,e,t)*h%t,y=cn(_,o,t)*p%t,R=cn(y,n,t)*c%t,A=cn(R,dp,t);if(!Hh.eql(Hh.sqr(A),i))throw new Error("Cannot find square root");return A}const Hh=hl(Vu.p,{sqrt:_A}),yA=pA(Vu,{Fp:Hh,endo:vA}),zs=gA(yA,rs),xA=Uint8Array.from([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),p0=Uint8Array.from(new Array(16).fill(0).map((i,t)=>t)),bA=p0.map(i=>(9*i+5)%16),m0=(()=>{const e=[[p0],[bA]];for(let n=0;n<4;n++)for(let s of e)s.push(s[n].map(r=>xA[r]));return e})(),g0=m0[0],v0=m0[1],_0=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(i=>Uint8Array.from(i)),wA=g0.map((i,t)=>i.map(e=>_0[t][e])),MA=v0.map((i,t)=>i.map(e=>_0[t][e])),SA=Uint32Array.from([0,1518500249,1859775393,2400959708,2840853838]),EA=Uint32Array.from([1352829926,1548603684,1836072691,2053994217,0]);function fp(i,t,e,n){return i===0?t^e^n:i===1?t&e|~t&n:i===2?(t|~e)^n:i===3?t&n|e&~n:t^(e|~n)}const ra=new Uint32Array(16);class AA extends Lu{constructor(){super(64,20,8,!0);ct(this,"h0",1732584193);ct(this,"h1",-271733879);ct(this,"h2",-1732584194);ct(this,"h3",271733878);ct(this,"h4",-1009589776)}get(){const{h0:e,h1:n,h2:s,h3:r,h4:o}=this;return[e,n,s,r,o]}set(e,n,s,r,o){this.h0=e|0,this.h1=n|0,this.h2=s|0,this.h3=r|0,this.h4=o|0}_cloneInto(e){return(e||(e=new this.constructor)).set(...this.get()),this._cloneIntoMeta(e)}process(e,n){for(let p=0;p<16;p++,n+=4)ra[p]=e.getUint32(n,!0);let s=this.h0|0,r=s,o=this.h1|0,a=o,l=this.h2|0,c=l,h=this.h3|0,u=h,d=this.h4|0,f=d;for(let p=0;p<5;p++){const v=4-p,g=SA[p],m=EA[p],x=g0[p],_=v0[p],y=wA[p],R=MA[p];for(let A=0;A<16;A++){const T=ta(s+fp(p,o,l,h)+ra[x[A]]+g,y[A])+d|0;s=d,d=h,h=ta(l,10)|0,l=o,o=T}for(let A=0;A<16;A++){const T=ta(r+fp(v,a,c,u)+ra[_[A]]+m,R[A])+f|0;r=f,f=u,u=ta(c,10)|0,c=a,a=T}}this.set(this.h1+l+u|0,this.h2+h+f|0,this.h3+d+r|0,this.h4+s+a|0,this.h0+o+c|0)}roundClean(){Tn(ra)}destroy(){this.destroyed=!0,Tn(this.buffer),this.set(0,0,0,0,0)}}const y0=Ru(()=>new AA);/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */const CA=i=>Object.freeze(i());function TA(i){return i instanceof Uint8Array||ArrayBuffer.isView(i)&&i.constructor.name==="Uint8Array"&&"BYTES_PER_ELEMENT"in i&&i.BYTES_PER_ELEMENT===1}function lo(i){if(!TA(i))throw new TypeError("Uint8Array expected")}function x0(i){if(typeof i!="function")throw new TypeError("function expected");return!0}function b0(i,t){if(typeof t!="string")throw new TypeError(`${i}: string expected`);return!0}function IA(i,t="number"){if(typeof i!="number")throw new TypeError(`${t}: expected number, got ${typeof i}`);if(!Number.isSafeInteger(i))throw new RangeError(`${t}: expected safe integer, got ${i}`)}function RA(...i){const t=r=>r,e=(r,o)=>a=>r(o(a)),n=i.map(r=>r.encode).reduceRight(e,t),s=i.map(r=>r.decode).reduce(e,t);return{encode:n,decode:s}}const pp=(()=>{try{const i=new TextDecoder;return i.decode(Uint8Array.of(65,48,43,127))==="A0+"?i:void 0}catch{return}})(),cc=8192;function LA(i){const t=i.length;if(pp!==void 0&&t>=12)return pp.decode(i);if(t<=cc)return String.fromCharCode.apply(null,i);let e="";for(let n=0;n<t;n+=cc)e+=String.fromCharCode.apply(null,i.subarray(n,n+cc));return e}function PA(i,t){const e=i.length;if(e>128)throw new Error("alphabet: max 128 letters");const n=new Uint8Array(e),s=new Int8Array(128).fill(-1);for(let r=0;r<e;r++){const o=i.charCodeAt(r);if(i.codePointAt(r)!==o||o>127)throw new Error("alphabet: single-char ASCII letters only");n[r]=o,s[o]=r}if(t!==void 0)for(const r of Object.keys(t)){const o=r.charCodeAt(0),a=s[t[r].charCodeAt(0)];if(r.length!==1||o>127||a===void 0||a===-1)throw new Error(`alphabet: invalid alias ${r}`);s[o]=a}return{encode:r=>{const o=new Uint8Array(r.length);for(let a=0;a<r.length;a++){const l=r[a],c=n[l];if(c===void 0)throw new Error(`alphabet.encode: invalid digit ${l}`);o[a]=c}return LA(o)},decode:r=>{b0("decode",r);const o=r.length,a=new Uint8Array(o);for(let l=0;l<o;l++){const c=r.charCodeAt(l),h=c<128?s[c]:-1;if(h===-1)throw new Error(`Unknown letter "${r[l]}". Allowed: ${i}`);a[l]=h}return a}}}function DA(i,t){if(IA(i),i<=0)throw new RangeError(`checksum length must be positive: ${i}`);x0(t);const e=t;return{encode(n){lo(n);const s=e(n).slice(0,i),r=new Uint8Array(n.length+i);return r.set(n),r.set(s,n.length),r},decode(n){lo(n);const s=n.slice(0,-i),r=n.slice(-i),o=e(s).slice(0,i);for(let a=0;a<i;a++)if(o[a]!==r[a])throw new Error("Invalid checksum");return s}}}const UA=656356768,mp=65536,BA=2048,NA=4096,FA=(i,t)=>({encode:e=>{lo(e);const n=e.length;if(n===0)return new Uint8Array(0);if(n>=mp)throw new Error("invalid length");let s=0;for(;s<n-1&&e[s]===0;)s++;const r=Math.ceil(n/2),o=new Uint16Array(r),a=n&1;a&&(o[0]=e[0]);for(let p=a,v=a;p<n;p+=2,v++)o[v]=e[p]<<8|e[p+1];const l=[];let c=0;for(;c<r;){let p=0;for(let v=c;v<r;v++){const g=p*65536+o[v],m=Math.floor(g/t);p=g-m*t,o[v]=m,m===0&&v===c&&c++}l.push(p)}const h=l.length-1;let u=h*5;for(let p=l[h];u++,!(p<i);p=Math.floor(p/i));const d=new Uint8Array(s+u);let f=d.length-1;for(let p=0;p<h;p++){let v=l[p];for(let g=0;g<5;g++)d[f--]=v%i,v=Math.floor(v/i)}for(let p=l[h];f>=s;p=Math.floor(p/i))d[f--]=p%i;return d},decode:e=>{lo(e);const n=e.length;if(n===0)return new Uint8Array(0);if(n>=mp)throw new Error("invalid length");let s=0;for(;s<n-1&&e[s]===0;)s++;const r=new Uint16Array(Math.ceil(n*6/16)+1);let o=0,a=0,l=n%5||5;for(;a<n;){let d=0,f=1;for(const v=a+l;a<v;a++){const g=e[a];if(g>=i)throw new Error(`invalid integer: ${g}`);d=d*i+g,f*=i}l=5;let p=d;for(let v=0;v<o;v++){const g=r[v]*f+p;p=Math.floor(g/65536),r[v]=g-p*65536}for(;p>0;p=Math.floor(p/65536))r[o++]=p%65536}const c=o===0?1:o*2-(r[o-1]<256?1:0),h=new Uint8Array(s+c);let u=h.length-1;for(let d=0;d<o;d++){const f=r[d];h[u--]=f&255,u>=s&&(h[u--]=f>>8)}return h}}),kA=(i,t)=>{const e=PA(t);return{encode(n){if(lo(n),n.length>BA)throw new Error("invalid length");return e.encode(i.encode(n))},decode(n){if(b0("baseN.decode",n),n.length>NA)throw new Error("invalid length");return i.decode(e.decode(n))}}},OA=FA(58,UA),zA=i=>kA(OA,i),HA=CA(()=>zA("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")),VA=i=>{x0(i);const t=i;return RA(DA(4,e=>t(t(e))),HA)};/*! scure-bip32 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const zr=zs.Point,Ds=zr.Fn,hc=VA(rs),GA=Uint8Array.from("Bitcoin seed".split(""),i=>i.charCodeAt(0)),uc={private:76066276,public:76067358},oa=2147483648,dc=255,WA=i=>y0(rs(i)),$A=i=>Zi(i).getUint32(0,!1),Ei=(i,t="number")=>{if(typeof i!="number")throw new TypeError(`"${t}" expected number, got type=${typeof i}`);if(!Number.isSafeInteger(i)||i<0||i>2**32-1)throw new RangeError(`"${t}" expected integer in range 0..2**32-1, got ${i}`);const e=new Uint8Array(4);return Zi(e).setUint32(0,i,!1),e},fc=(i,t="versions")=>{if(!(typeof i=="object"&&i!==null))throw new Error("versions must be an object");return Ei(i.private,`${t}.private`),Ei(i.public,`${t}.public`),i};class Ki{constructor(t){ct(this,"versions");ct(this,"depth",0);ct(this,"index",0);ct(this,"parentFingerprint",0);ct(this,"_chainCode",null);ct(this,"_privateKey");ct(this,"_publicKey");ct(this,"_pubHash");if(!t||typeof t!="object")throw new Error("HDKey.constructor must not be called directly");const e=t.depth??0,n=t.index??0,s=t.parentFingerprint??0;if(!Number.isSafeInteger(e)||e<0||e>dc)throw new RangeError("HDKey: depth must be an integer in range 0..255");if(Ei(n,"index"),Ei(s,"parentFingerprint"),e===0&&(n!==0||s!==0))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(this.versions=t.versions?fc(t.versions):uc,this.depth=e,t.chainCode&&De(t.chainCode,32),this._chainCode=t.chainCode?Uint8Array.from(t.chainCode):null,this.index=n,this.parentFingerprint=s,t.publicKey&&t.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(t.privateKey){if(!zs.utils.isValidSecretKey(t.privateKey))throw new Error("Invalid private key");this._privateKey=Uint8Array.from(t.privateKey),this._publicKey=zs.getPublicKey(this._privateKey,!0)}else if(t.publicKey)this._publicKey=zr.fromBytes(t.publicKey).toBytes(!0);else throw new Error("HDKey: no public or private key provided");this._pubHash=WA(this._publicKey)}get fingerprint(){if(!this._pubHash)throw new Error("No publicKey set!");return $A(this._pubHash)}get identifier(){return this._pubHash?Uint8Array.from(this._pubHash):void 0}get pubKeyHash(){return this._pubHash?Uint8Array.from(this._pubHash):void 0}get privateKey(){return this._privateKey?Uint8Array.from(this._privateKey):null}get publicKey(){return this._publicKey?Uint8Array.from(this._publicKey):null}get chainCode(){return this._chainCode?Uint8Array.from(this._chainCode):null}get privateExtendedKey(){const t=this._privateKey;if(!t)throw new Error("No private key");return hc.encode(this.serialize(this.versions.private,Or(Uint8Array.of(0),t)))}get publicExtendedKey(){if(!this._publicKey)throw new Error("No public key");return hc.encode(this.serialize(this.versions.public,this._publicKey))}static fromMasterSeed(t,e=uc){if(De(t),e=fc(e),8*t.length<128||8*t.length>512)throw new RangeError("HDKey: seed length must be between 128 and 512 bits; 256 bits is advised, got "+t.length);const n=$a(Fh,GA,t),s=n.slice(0,32),r=n.slice(32);return new Ki({versions:e,chainCode:r,privateKey:s})}static fromExtendedKey(t,e=uc){e=fc(e);const n=hc.decode(t);if(n.length!==78)throw new Error(`HDKey: invalid extended key length: expected 78 bytes, got ${n.length}`);const s=Zi(n),r=s.getUint32(0,!1),o={versions:e,depth:n[4],parentFingerprint:s.getUint32(5,!1),index:s.getUint32(9,!1),chainCode:n.slice(13,45)},a=n.slice(45),l=a[0]===0;if(r!==e[l?"private":"public"])throw new Error("Version mismatch");return l?new Ki({...o,privateKey:a.slice(1)}):new Ki({...o,publicKey:a})}static fromJSON(t){return Ki.fromExtendedKey("xpriv"in t?t.xpriv:t.xpub)}derive(t){if(!/^[mM]'?/.test(t))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(t))return this;const e=t.replace(/^[mM]'?\//,"").split("/");if(e.length>dc-this.depth)throw new Error("HDKey: path exceeds the serializable depth 255");let n=this;for(const s of e){const r=/^(\d+)('?)$/.exec(s),o=r&&r[1];if(!r||r.length!==3||typeof o!="string")throw new Error("invalid child index: "+s);let a=+o;if(!Number.isSafeInteger(a)||a>=oa)throw new Error("Invalid index");r[2]==="'"&&(a+=oa),n=n.deriveChild(a)}return n}deriveChild(t){return this._deriveChild(t)}_deriveChild(t,e){if(!this._publicKey||!this._chainCode)throw new Error("No publicKey or chainCode set");let n=Ei(t,"index");if(t>=oa){const h=this._privateKey;if(!h)throw new Error("Could not derive hardened child key");n=Or(Uint8Array.of(0),h,n)}else n=Or(this._publicKey,n);const s=e||$a(Fh,this._chainCode,n);De(s,64);const r=s.slice(0,32),o=s.slice(32),a={versions:this.versions,chainCode:o,depth:this.depth+1,parentFingerprint:this.fingerprint,index:t};if(a.depth>dc)throw new Error("HDKey: depth exceeds the serializable value 255");const l=()=>{const h=this._privateKey?4294967295:oa-1;if(t>=h)throw new Error(`HDKey: cannot retry child derivation at index ${t}`);return this.deriveChild(t+1)},c=Ds.fromBytes(r,!0);if(!Ds.isValid(c))return l();if(this._privateKey){const h=Ds.create(Ds.fromBytes(this._privateKey)+c);if(!Ds.isValidNot0(h))return l();a.privateKey=Ds.toBytes(h)}else{const h=zr.fromBytes(this._publicKey),u=c===0n?h:h.add(zr.BASE.multiply(c));if(u.equals(zr.ZERO))return l();a.publicKey=u.toBytes(!0)}return new Ki(a)}sign(t){if(!this._privateKey)throw new Error("No privateKey set!");return De(t,32),zs.sign(t,this._privateKey,{prehash:!1})}verify(t,e){if(De(t,32),De(e,64),!this._publicKey)throw new Error("No publicKey set!");return zs.verify(e,t,this._publicKey,{prehash:!1})}wipePrivateData(){return this._privateKey&&(this._privateKey.fill(0),this._privateKey=void 0),this}toJSON(){return this.toPrivateJSON()}toPrivateJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(t,e){if(!this._chainCode)throw new Error("No chainCode set");return De(e,33),Or(Ei(t,"version"),new Uint8Array([this.depth]),Ei(this.parentFingerprint,"parentFingerprint"),Ei(this.index,"index"),this._chainCode,e)}}function QA(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ie={exports:{}},pc,gp;function w0(){if(gp)return pc;gp=1,pc=t;class i extends Error{}i.prototype.name="AssertionError";function t(e,n){if(!e){var s=new i(n);throw Error.captureStackTrace&&Error.captureStackTrace(s,t),s}}return pc}var Sn={exports:{}},aa={exports:{}},mc,vp;function qA(){if(vp)return mc;vp=1;function i(n){return n.length}function t(n){const s=n.byteLength;let r="";for(let o=0;o<s;o++)r+=String.fromCharCode(n[o]&127);return r}function e(n,s){const r=n.byteLength;for(let o=0;o<r;o++)n[o]=s.charCodeAt(o);return r}return mc={byteLength:i,toString:t,write:e},mc}var gc,_p;function KA(){if(_p)return gc;_p=1;const i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=new Uint8Array(256);for(let r=0;r<i.length;r++)t[i.charCodeAt(r)]=r;t[45]=62,t[95]=63;function e(r){let o=r.length;return r.charCodeAt(o-1)===61&&o--,o>1&&r.charCodeAt(o-1)===61&&o--,o*3>>>2}function n(r){const o=r.byteLength;let a="";for(let l=0;l<o;l+=3)a+=i[r[l]>>2]+i[(r[l]&3)<<4|r[l+1]>>4]+i[(r[l+1]&15)<<2|r[l+2]>>6]+i[r[l+2]&63];return o%3===2?a=a.substring(0,a.length-1)+"=":o%3===1&&(a=a.substring(0,a.length-2)+"=="),a}function s(r,o){const a=r.byteLength;for(let l=0,c=0;c<a;l+=4){const h=t[o.charCodeAt(l)],u=t[o.charCodeAt(l+1)],d=t[o.charCodeAt(l+2)],f=t[o.charCodeAt(l+3)];r[c++]=h<<2|u>>4,r[c++]=(u&15)<<4|d>>2,r[c++]=(d&3)<<6|f&63}return a}return gc={byteLength:e,toString:n,write:s},gc}var vc,yp;function YA(){if(yp)return vc;yp=1;function i(s){return s.length>>>1}function t(s){const r=s.byteLength;s=new DataView(s.buffer,s.byteOffset,r);let o="",a=0;for(let l=r-r%4;a<l;a+=4)o+=s.getUint32(a).toString(16).padStart(8,"0");for(;a<r;a++)o+=s.getUint8(a).toString(16).padStart(2,"0");return o}function e(s,r){const o=s.byteLength;for(let a=0;a<o;a++){const l=n(r.charCodeAt(a*2)),c=n(r.charCodeAt(a*2+1));if(l===void 0||c===void 0)return a;s[a]=l<<4|c}return o}vc={byteLength:i,toString:t,write:e};function n(s){if(s>=48&&s<=57)return s-48;if(s>=65&&s<=70)return s-65+10;if(s>=97&&s<=102)return s-97+10}return vc}var _c,xp;function XA(){if(xp)return _c;xp=1;function i(n){return n.length}function t(n){const s=n.byteLength;let r="";for(let o=0;o<s;o++)r+=String.fromCharCode(n[o]);return r}function e(n,s){const r=n.byteLength;for(let o=0;o<r;o++)n[o]=s.charCodeAt(o);return r}return _c={byteLength:i,toString:t,write:e},_c}var yc,bp;function jA(){if(bp)return yc;bp=1;function i(n){let s=0;for(let r=0,o=n.length;r<o;r++){const a=n.charCodeAt(r);if(a>=55296&&a<=56319&&r+1<o){const l=n.charCodeAt(r+1);if(l>=56320&&l<=57343){s+=4,r++;continue}}a<=127?s+=1:a<=2047?s+=2:s+=3}return s}let t;if(typeof TextDecoder<"u"){const n=new TextDecoder;t=function(r){return n.decode(r)}}else t=function(s){const r=s.byteLength;let o="",a=0;for(;a<r;){let l=s[a];if(l<=127){o+=String.fromCharCode(l),a++;continue}let c=0,h=0;if(l<=223?(c=1,h=l&31):l<=239?(c=2,h=l&15):l<=244&&(c=3,h=l&7),r-a-c>0){let u=0;for(;u<c;)l=s[a+u+1],h=h<<6|l&63,u+=1}else h=65533,c=r-a;o+=String.fromCodePoint(h),a+=c+1}return o};let e;if(typeof TextEncoder<"u"){const n=new TextEncoder;e=function(r,o){return n.encodeInto(o,r).written}}else e=function(s,r){const o=s.byteLength;let a=0,l=0;for(;a<r.length;){const c=r.codePointAt(a);if(c<=127){if(l+1>o)break;s[l++]=c,a++;continue}let h=0,u=0;if(c<=2047?(h=6,u=192):c<=65535?(h=12,u=224):c<=2097151&&(h=18,u=240),l+h/6+1>o)break;for(s[l++]=u|c>>h,h-=6;h>=0;)s[l++]=128|c>>h&63,h-=6;a+=c>=65536?2:1}return l};return yc={byteLength:i,toString:t,write:e},yc}var xc,wp;function ZA(){if(wp)return xc;wp=1;function i(n){return n.length*2}function t(n){const s=n.byteLength;let r="";for(let o=0;o<s-1;o+=2)r+=String.fromCharCode(n[o]+n[o+1]*256);return r}function e(n,s){const r=n.byteLength;let o=r;for(let a=0;a<s.length&&!((o-=2)<0);++a){const l=s.charCodeAt(a),c=l>>8,h=l%256;n[a*2]=h,n[a*2+1]=c}return r}return xc={byteLength:i,toString:t,write:e},xc}var Mp;function JA(){return Mp||(Mp=1,(function(i,t){const e=qA(),n=KA(),s=YA(),r=XA(),o=jA(),a=ZA(),l=new Uint8Array(Uint16Array.of(255).buffer)[0]===255;function c(L){switch(L){case"ascii":return e;case"base64":return n;case"hex":return s;case"binary":case"latin1":return r;case"utf8":case"utf-8":case void 0:case null:return o;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return a;default:throw new Error(`Unknown encoding '${L}'`)}}function h(L){return L instanceof Uint8Array}function u(L){try{return c(L),!0}catch{return!1}}function d(L,G,N){const E=new Uint8Array(L);return G!==void 0&&t.fill(E,G,0,E.byteLength,N),E}function f(L){return new Uint8Array(L)}function p(L){return new Uint8Array(L)}function v(L,G){return c(G).byteLength(L)}function g(L,G){if(L===G)return 0;const N=Math.min(L.byteLength,G.byteLength);L=new DataView(L.buffer,L.byteOffset,L.byteLength),G=new DataView(G.buffer,G.byteOffset,G.byteLength);let E=0;for(let M=N-N%4;E<M;E+=4){const F=L.getUint32(E,l),J=G.getUint32(E,l);if(F!==J)break}for(;E<N;E++){const M=L.getUint8(E),F=G.getUint8(E);if(M<F)return-1;if(M>F)return 1}return L.byteLength>G.byteLength?1:L.byteLength<G.byteLength?-1:0}function m(L,G){G===void 0&&(G=L.reduce((M,F)=>M+F.byteLength,0));const N=new Uint8Array(G);let E=0;for(const M of L){if(E+M.byteLength>N.byteLength)return N.set(M.subarray(0,N.byteLength-E),E),N;N.set(M,E),E+=M.byteLength}return N}function x(L,G,N=0,E=0,M=L.byteLength){if(N<0&&(N=0),N>=G.byteLength)return 0;const F=G.byteLength-N;if(E<0&&(E=0),E>=L.byteLength||M<=E)return 0;M>L.byteLength&&(M=L.byteLength),M-E>F&&(M=E+F);const J=M-E;return L===G?G.copyWithin(N,E,M):((E!==0||M!==L.byteLength)&&(L=L.subarray(E,M)),G.set(L,N)),J}function _(L,G){return L===G?!0:L.byteLength!==G.byteLength?!1:g(L,G)===0}function y(L,G,N=0,E=L.byteLength,M="utf8"){if(typeof G=="string"?typeof N=="string"?(M=N,N=0,E=L.byteLength):typeof E=="string"&&(M=E,E=L.byteLength):typeof G=="number"?G=G&255:typeof G=="boolean"&&(G=+G),N<0&&(N=0),N>=L.byteLength||E<=N)return L;if(E>L.byteLength&&(E=L.byteLength),typeof G=="number")return L.fill(G,N,E);typeof G=="string"&&(G=t.from(G,M));const F=G.byteLength;for(let J=0,at=E-N;J<at;++J)L[J+N]=G[J%F];return L}function R(L,G,N){return typeof L=="string"?A(L,G):Array.isArray(L)?T(L):ArrayBuffer.isView(L)?I(L):w(L,G,N)}function A(L,G){const N=c(G),E=new Uint8Array(N.byteLength(L));return N.write(E,L),E}function T(L){const G=new Uint8Array(L.length);return G.set(L),G}function I(L){const G=new Uint8Array(L.byteLength);return G.set(L),G}function w(L,G,N){return new Uint8Array(L,G,N)}function b(L,G,N,E){return S(L,G,N,E)!==-1}function S(L,G,N,E){return P(L,G,N,E,!0)}function U(L,G,N,E){return P(L,G,N,E,!1)}function P(L,G,N,E,M){if(L.byteLength===0)return-1;if(typeof N=="string"?(E=N,N=0):N===void 0?N=M?0:L.length-1:N<0&&(N+=L.byteLength),N>=L.byteLength){if(M)return-1;N=L.byteLength-1}else if(N<0)if(M)N=0;else return-1;if(typeof G=="string")G=R(G,E);else if(typeof G=="number")return G=G&255,M?L.indexOf(G,N):L.lastIndexOf(G,N);if(G.byteLength===0)return-1;if(M){let F=-1;for(let J=N;J<L.byteLength;J++)if(L[J]===G[F===-1?0:J-F]){if(F===-1&&(F=J),J-F+1===G.byteLength)return F}else F!==-1&&(J-=J-F),F=-1}else{N+G.byteLength>L.byteLength&&(N=L.byteLength-G.byteLength);for(let F=N;F>=0;F--){let J=!0;for(let at=0;at<G.byteLength;at++)if(L[F+at]!==G[at]){J=!1;break}if(J)return F}}return-1}function W(L,G,N){const E=L[G];L[G]=L[N],L[N]=E}function Z(L){const G=L.byteLength;if(G%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let N=0;N<G;N+=2)W(L,N,N+1);return L}function D(L){const G=L.byteLength;if(G%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let N=0;N<G;N+=4)W(L,N,N+3),W(L,N+1,N+2);return L}function nt(L){const G=L.byteLength;if(G%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let N=0;N<G;N+=8)W(L,N,N+7),W(L,N+1,N+6),W(L,N+2,N+5),W(L,N+3,N+4);return L}function q(L){return L}function lt(L,G="utf8",N=0,E=L.byteLength){return arguments.length===1?o.toString(L):arguments.length===2?c(G).toString(L):(N<0&&(N=0),N>=L.byteLength||E<=N?"":(E>L.byteLength&&(E=L.byteLength),(N!==0||E!==L.byteLength)&&(L=L.subarray(N,E)),c(G).toString(L)))}function K(L,G,N){return lt(L,"hex",G,N)}function $(L,G,N=0,E=L.byteLength,M){if(arguments.length===2)return o.write(L,G);typeof N=="string"?(M=N,N=0,E=L.byteLength):typeof E=="string"&&(M=E,E=L.byteLength-N),E=Math.min(E,t.byteLength(G,M));let F=N;if(F<0&&(F=0),F>=L.byteLength)return 0;let J=N+E;return J<=F?0:(J>L.byteLength&&(J=L.byteLength),(F!==0||J!==L.byteLength)&&(L=L.subarray(F,J)),c(M).write(L,G))}function Q(L,G=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).getFloat64(G,!1)}function it(L,G=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).getFloat64(G,!0)}function O(L,G=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).getFloat32(G,!1)}function Y(L,G=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).getFloat32(G,!0)}function rt(L,G=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).getInt32(G,!1)}function tt(L,G=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).getInt32(G,!0)}function ht(L,G=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).getUint32(G,!1)}function dt(L,G=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).getUint32(G,!0)}function vt(L,G,N=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).setFloat64(N,G,!1),N+8}function It(L,G,N=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).setFloat64(N,G,!0),N+8}function Et(L,G,N=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).setFloat32(N,G,!1),N+4}function zt(L,G,N=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).setFloat32(N,G,!0),N+4}function B(L,G,N=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).setInt32(N,G,!1),N+4}function Rt(L,G,N=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).setInt32(N,G,!0),N+4}function mt(L,G,N=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).setUint32(N,G,!1),N+4}function Lt(L,G,N=0){return new DataView(L.buffer,L.byteOffset,L.byteLength).setUint32(N,G,!0),N+4}i.exports=t={isBuffer:h,isEncoding:u,alloc:d,allocUnsafe:f,allocUnsafeSlow:p,byteLength:v,compare:g,concat:m,copy:x,equals:_,fill:y,from:R,includes:b,indexOf:S,lastIndexOf:U,swap16:Z,swap32:D,swap64:nt,toBuffer:q,toString:lt,toHex:K,write:$,readDoubleBE:Q,readDoubleLE:it,readFloatBE:O,readFloatLE:Y,readInt32BE:rt,readInt32LE:tt,readUInt32BE:ht,readUInt32LE:dt,writeDoubleBE:vt,writeDoubleLE:It,writeFloatBE:Et,writeFloatLE:zt,writeInt32BE:B,writeInt32LE:Rt,writeUInt32BE:mt,writeUInt32LE:Lt}})(aa,aa.exports)),aa.exports}var bc,Sp;function t1(){if(Sp)return bc;Sp=1;var i=(r,o)=>function(){return o||(0,r[Object.keys(r)[0]])((o={exports:{}}).exports,o),o.exports},t=(()=>{for(var r=new Uint8Array(128),o=0;o<64;o++)r[o<26?o+65:o<52?o+71:o<62?o-4:o*4-205]=o;return a=>{for(var l=a.length,c=new Uint8Array((l-(a[l-1]=="=")-(a[l-2]=="="))*3/4|0),h=0,u=0;h<l;){var d=r[a.charCodeAt(h++)],f=r[a.charCodeAt(h++)],p=r[a.charCodeAt(h++)],v=r[a.charCodeAt(h++)];c[u++]=d<<2|f>>4,c[u++]=f<<4|p>>2,c[u++]=p<<6|v}return c}})(),e=i({"wasm-binary:./blake2b.wat"(r,o){o.exports=t("AGFzbQEAAAABEANgAn9/AGADf39/AGABfwADBQQAAQICBQUBAQroBwdNBQZtZW1vcnkCAAxibGFrZTJiX2luaXQAAA5ibGFrZTJiX3VwZGF0ZQABDWJsYWtlMmJfZmluYWwAAhBibGFrZTJiX2NvbXByZXNzAAMKvz8EwAIAIABCADcDACAAQgA3AwggAEIANwMQIABCADcDGCAAQgA3AyAgAEIANwMoIABCADcDMCAAQgA3AzggAEIANwNAIABCADcDSCAAQgA3A1AgAEIANwNYIABCADcDYCAAQgA3A2ggAEIANwNwIABCADcDeCAAQoiS853/zPmE6gBBACkDAIU3A4ABIABCu86qptjQ67O7f0EIKQMAhTcDiAEgAEKr8NP0r+68tzxBECkDAIU3A5ABIABC8e30+KWn/aelf0EYKQMAhTcDmAEgAELRhZrv+s+Uh9EAQSApAwCFNwOgASAAQp/Y+dnCkdqCm39BKCkDAIU3A6gBIABC6/qG2r+19sEfQTApAwCFNwOwASAAQvnC+JuRo7Pw2wBBOCkDAIU3A7gBIABCADcDwAEgAEIANwPIASAAQgA3A9ABC20BA38gAEHAAWohAyAAQcgBaiEEIAQpAwCnIQUCQANAIAEgAkYNASAFQYABRgRAIAMgAykDACAFrXw3AwBBACEFIAAQAwsgACAFaiABLQAAOgAAIAVBAWohBSABQQFqIQEMAAsLIAQgBa03AwALYQEDfyAAQcABaiEBIABByAFqIQIgASABKQMAIAIpAwB8NwMAIABCfzcD0AEgAikDAKchAwJAA0AgA0GAAUYNASAAIANqQQA6AAAgA0EBaiEDDAALCyACIAOtNwMAIAAQAwuqOwIgfgl/IABBgAFqISEgAEGIAWohIiAAQZABaiEjIABBmAFqISQgAEGgAWohJSAAQagBaiEmIABBsAFqIScgAEG4AWohKCAhKQMAIQEgIikDACECICMpAwAhAyAkKQMAIQQgJSkDACEFICYpAwAhBiAnKQMAIQcgKCkDACEIQoiS853/zPmE6gAhCUK7zqqm2NDrs7t/IQpCq/DT9K/uvLc8IQtC8e30+KWn/aelfyEMQtGFmu/6z5SH0QAhDUKf2PnZwpHagpt/IQ5C6/qG2r+19sEfIQ9C+cL4m5Gjs/DbACEQIAApAwAhESAAKQMIIRIgACkDECETIAApAxghFCAAKQMgIRUgACkDKCEWIAApAzAhFyAAKQM4IRggACkDQCEZIAApA0ghGiAAKQNQIRsgACkDWCEcIAApA2AhHSAAKQNoIR4gACkDcCEfIAApA3ghICANIAApA8ABhSENIA8gACkD0AGFIQ8gASAFIBF8fCEBIA0gAYVCIIohDSAJIA18IQkgBSAJhUIYiiEFIAEgBSASfHwhASANIAGFQhCKIQ0gCSANfCEJIAUgCYVCP4ohBSACIAYgE3x8IQIgDiAChUIgiiEOIAogDnwhCiAGIAqFQhiKIQYgAiAGIBR8fCECIA4gAoVCEIohDiAKIA58IQogBiAKhUI/iiEGIAMgByAVfHwhAyAPIAOFQiCKIQ8gCyAPfCELIAcgC4VCGIohByADIAcgFnx8IQMgDyADhUIQiiEPIAsgD3whCyAHIAuFQj+KIQcgBCAIIBd8fCEEIBAgBIVCIIohECAMIBB8IQwgCCAMhUIYiiEIIAQgCCAYfHwhBCAQIASFQhCKIRAgDCAQfCEMIAggDIVCP4ohCCABIAYgGXx8IQEgECABhUIgiiEQIAsgEHwhCyAGIAuFQhiKIQYgASAGIBp8fCEBIBAgAYVCEIohECALIBB8IQsgBiALhUI/iiEGIAIgByAbfHwhAiANIAKFQiCKIQ0gDCANfCEMIAcgDIVCGIohByACIAcgHHx8IQIgDSAChUIQiiENIAwgDXwhDCAHIAyFQj+KIQcgAyAIIB18fCEDIA4gA4VCIIohDiAJIA58IQkgCCAJhUIYiiEIIAMgCCAefHwhAyAOIAOFQhCKIQ4gCSAOfCEJIAggCYVCP4ohCCAEIAUgH3x8IQQgDyAEhUIgiiEPIAogD3whCiAFIAqFQhiKIQUgBCAFICB8fCEEIA8gBIVCEIohDyAKIA98IQogBSAKhUI/iiEFIAEgBSAffHwhASANIAGFQiCKIQ0gCSANfCEJIAUgCYVCGIohBSABIAUgG3x8IQEgDSABhUIQiiENIAkgDXwhCSAFIAmFQj+KIQUgAiAGIBV8fCECIA4gAoVCIIohDiAKIA58IQogBiAKhUIYiiEGIAIgBiAZfHwhAiAOIAKFQhCKIQ4gCiAOfCEKIAYgCoVCP4ohBiADIAcgGnx8IQMgDyADhUIgiiEPIAsgD3whCyAHIAuFQhiKIQcgAyAHICB8fCEDIA8gA4VCEIohDyALIA98IQsgByALhUI/iiEHIAQgCCAefHwhBCAQIASFQiCKIRAgDCAQfCEMIAggDIVCGIohCCAEIAggF3x8IQQgECAEhUIQiiEQIAwgEHwhDCAIIAyFQj+KIQggASAGIBJ8fCEBIBAgAYVCIIohECALIBB8IQsgBiALhUIYiiEGIAEgBiAdfHwhASAQIAGFQhCKIRAgCyAQfCELIAYgC4VCP4ohBiACIAcgEXx8IQIgDSAChUIgiiENIAwgDXwhDCAHIAyFQhiKIQcgAiAHIBN8fCECIA0gAoVCEIohDSAMIA18IQwgByAMhUI/iiEHIAMgCCAcfHwhAyAOIAOFQiCKIQ4gCSAOfCEJIAggCYVCGIohCCADIAggGHx8IQMgDiADhUIQiiEOIAkgDnwhCSAIIAmFQj+KIQggBCAFIBZ8fCEEIA8gBIVCIIohDyAKIA98IQogBSAKhUIYiiEFIAQgBSAUfHwhBCAPIASFQhCKIQ8gCiAPfCEKIAUgCoVCP4ohBSABIAUgHHx8IQEgDSABhUIgiiENIAkgDXwhCSAFIAmFQhiKIQUgASAFIBl8fCEBIA0gAYVCEIohDSAJIA18IQkgBSAJhUI/iiEFIAIgBiAdfHwhAiAOIAKFQiCKIQ4gCiAOfCEKIAYgCoVCGIohBiACIAYgEXx8IQIgDiAChUIQiiEOIAogDnwhCiAGIAqFQj+KIQYgAyAHIBZ8fCEDIA8gA4VCIIohDyALIA98IQsgByALhUIYiiEHIAMgByATfHwhAyAPIAOFQhCKIQ8gCyAPfCELIAcgC4VCP4ohByAEIAggIHx8IQQgECAEhUIgiiEQIAwgEHwhDCAIIAyFQhiKIQggBCAIIB58fCEEIBAgBIVCEIohECAMIBB8IQwgCCAMhUI/iiEIIAEgBiAbfHwhASAQIAGFQiCKIRAgCyAQfCELIAYgC4VCGIohBiABIAYgH3x8IQEgECABhUIQiiEQIAsgEHwhCyAGIAuFQj+KIQYgAiAHIBR8fCECIA0gAoVCIIohDSAMIA18IQwgByAMhUIYiiEHIAIgByAXfHwhAiANIAKFQhCKIQ0gDCANfCEMIAcgDIVCP4ohByADIAggGHx8IQMgDiADhUIgiiEOIAkgDnwhCSAIIAmFQhiKIQggAyAIIBJ8fCEDIA4gA4VCEIohDiAJIA58IQkgCCAJhUI/iiEIIAQgBSAafHwhBCAPIASFQiCKIQ8gCiAPfCEKIAUgCoVCGIohBSAEIAUgFXx8IQQgDyAEhUIQiiEPIAogD3whCiAFIAqFQj+KIQUgASAFIBh8fCEBIA0gAYVCIIohDSAJIA18IQkgBSAJhUIYiiEFIAEgBSAafHwhASANIAGFQhCKIQ0gCSANfCEJIAUgCYVCP4ohBSACIAYgFHx8IQIgDiAChUIgiiEOIAogDnwhCiAGIAqFQhiKIQYgAiAGIBJ8fCECIA4gAoVCEIohDiAKIA58IQogBiAKhUI/iiEGIAMgByAefHwhAyAPIAOFQiCKIQ8gCyAPfCELIAcgC4VCGIohByADIAcgHXx8IQMgDyADhUIQiiEPIAsgD3whCyAHIAuFQj+KIQcgBCAIIBx8fCEEIBAgBIVCIIohECAMIBB8IQwgCCAMhUIYiiEIIAQgCCAffHwhBCAQIASFQhCKIRAgDCAQfCEMIAggDIVCP4ohCCABIAYgE3x8IQEgECABhUIgiiEQIAsgEHwhCyAGIAuFQhiKIQYgASAGIBd8fCEBIBAgAYVCEIohECALIBB8IQsgBiALhUI/iiEGIAIgByAWfHwhAiANIAKFQiCKIQ0gDCANfCEMIAcgDIVCGIohByACIAcgG3x8IQIgDSAChUIQiiENIAwgDXwhDCAHIAyFQj+KIQcgAyAIIBV8fCEDIA4gA4VCIIohDiAJIA58IQkgCCAJhUIYiiEIIAMgCCARfHwhAyAOIAOFQhCKIQ4gCSAOfCEJIAggCYVCP4ohCCAEIAUgIHx8IQQgDyAEhUIgiiEPIAogD3whCiAFIAqFQhiKIQUgBCAFIBl8fCEEIA8gBIVCEIohDyAKIA98IQogBSAKhUI/iiEFIAEgBSAafHwhASANIAGFQiCKIQ0gCSANfCEJIAUgCYVCGIohBSABIAUgEXx8IQEgDSABhUIQiiENIAkgDXwhCSAFIAmFQj+KIQUgAiAGIBZ8fCECIA4gAoVCIIohDiAKIA58IQogBiAKhUIYiiEGIAIgBiAYfHwhAiAOIAKFQhCKIQ4gCiAOfCEKIAYgCoVCP4ohBiADIAcgE3x8IQMgDyADhUIgiiEPIAsgD3whCyAHIAuFQhiKIQcgAyAHIBV8fCEDIA8gA4VCEIohDyALIA98IQsgByALhUI/iiEHIAQgCCAbfHwhBCAQIASFQiCKIRAgDCAQfCEMIAggDIVCGIohCCAEIAggIHx8IQQgECAEhUIQiiEQIAwgEHwhDCAIIAyFQj+KIQggASAGIB98fCEBIBAgAYVCIIohECALIBB8IQsgBiALhUIYiiEGIAEgBiASfHwhASAQIAGFQhCKIRAgCyAQfCELIAYgC4VCP4ohBiACIAcgHHx8IQIgDSAChUIgiiENIAwgDXwhDCAHIAyFQhiKIQcgAiAHIB18fCECIA0gAoVCEIohDSAMIA18IQwgByAMhUI/iiEHIAMgCCAXfHwhAyAOIAOFQiCKIQ4gCSAOfCEJIAggCYVCGIohCCADIAggGXx8IQMgDiADhUIQiiEOIAkgDnwhCSAIIAmFQj+KIQggBCAFIBR8fCEEIA8gBIVCIIohDyAKIA98IQogBSAKhUIYiiEFIAQgBSAefHwhBCAPIASFQhCKIQ8gCiAPfCEKIAUgCoVCP4ohBSABIAUgE3x8IQEgDSABhUIgiiENIAkgDXwhCSAFIAmFQhiKIQUgASAFIB18fCEBIA0gAYVCEIohDSAJIA18IQkgBSAJhUI/iiEFIAIgBiAXfHwhAiAOIAKFQiCKIQ4gCiAOfCEKIAYgCoVCGIohBiACIAYgG3x8IQIgDiAChUIQiiEOIAogDnwhCiAGIAqFQj+KIQYgAyAHIBF8fCEDIA8gA4VCIIohDyALIA98IQsgByALhUIYiiEHIAMgByAcfHwhAyAPIAOFQhCKIQ8gCyAPfCELIAcgC4VCP4ohByAEIAggGXx8IQQgECAEhUIgiiEQIAwgEHwhDCAIIAyFQhiKIQggBCAIIBR8fCEEIBAgBIVCEIohECAMIBB8IQwgCCAMhUI/iiEIIAEgBiAVfHwhASAQIAGFQiCKIRAgCyAQfCELIAYgC4VCGIohBiABIAYgHnx8IQEgECABhUIQiiEQIAsgEHwhCyAGIAuFQj+KIQYgAiAHIBh8fCECIA0gAoVCIIohDSAMIA18IQwgByAMhUIYiiEHIAIgByAWfHwhAiANIAKFQhCKIQ0gDCANfCEMIAcgDIVCP4ohByADIAggIHx8IQMgDiADhUIgiiEOIAkgDnwhCSAIIAmFQhiKIQggAyAIIB98fCEDIA4gA4VCEIohDiAJIA58IQkgCCAJhUI/iiEIIAQgBSASfHwhBCAPIASFQiCKIQ8gCiAPfCEKIAUgCoVCGIohBSAEIAUgGnx8IQQgDyAEhUIQiiEPIAogD3whCiAFIAqFQj+KIQUgASAFIB18fCEBIA0gAYVCIIohDSAJIA18IQkgBSAJhUIYiiEFIAEgBSAWfHwhASANIAGFQhCKIQ0gCSANfCEJIAUgCYVCP4ohBSACIAYgEnx8IQIgDiAChUIgiiEOIAogDnwhCiAGIAqFQhiKIQYgAiAGICB8fCECIA4gAoVCEIohDiAKIA58IQogBiAKhUI/iiEGIAMgByAffHwhAyAPIAOFQiCKIQ8gCyAPfCELIAcgC4VCGIohByADIAcgHnx8IQMgDyADhUIQiiEPIAsgD3whCyAHIAuFQj+KIQcgBCAIIBV8fCEEIBAgBIVCIIohECAMIBB8IQwgCCAMhUIYiiEIIAQgCCAbfHwhBCAQIASFQhCKIRAgDCAQfCEMIAggDIVCP4ohCCABIAYgEXx8IQEgECABhUIgiiEQIAsgEHwhCyAGIAuFQhiKIQYgASAGIBh8fCEBIBAgAYVCEIohECALIBB8IQsgBiALhUI/iiEGIAIgByAXfHwhAiANIAKFQiCKIQ0gDCANfCEMIAcgDIVCGIohByACIAcgFHx8IQIgDSAChUIQiiENIAwgDXwhDCAHIAyFQj+KIQcgAyAIIBp8fCEDIA4gA4VCIIohDiAJIA58IQkgCCAJhUIYiiEIIAMgCCATfHwhAyAOIAOFQhCKIQ4gCSAOfCEJIAggCYVCP4ohCCAEIAUgGXx8IQQgDyAEhUIgiiEPIAogD3whCiAFIAqFQhiKIQUgBCAFIBx8fCEEIA8gBIVCEIohDyAKIA98IQogBSAKhUI/iiEFIAEgBSAefHwhASANIAGFQiCKIQ0gCSANfCEJIAUgCYVCGIohBSABIAUgHHx8IQEgDSABhUIQiiENIAkgDXwhCSAFIAmFQj+KIQUgAiAGIBh8fCECIA4gAoVCIIohDiAKIA58IQogBiAKhUIYiiEGIAIgBiAffHwhAiAOIAKFQhCKIQ4gCiAOfCEKIAYgCoVCP4ohBiADIAcgHXx8IQMgDyADhUIgiiEPIAsgD3whCyAHIAuFQhiKIQcgAyAHIBJ8fCEDIA8gA4VCEIohDyALIA98IQsgByALhUI/iiEHIAQgCCAUfHwhBCAQIASFQiCKIRAgDCAQfCEMIAggDIVCGIohCCAEIAggGnx8IQQgECAEhUIQiiEQIAwgEHwhDCAIIAyFQj+KIQggASAGIBZ8fCEBIBAgAYVCIIohECALIBB8IQsgBiALhUIYiiEGIAEgBiARfHwhASAQIAGFQhCKIRAgCyAQfCELIAYgC4VCP4ohBiACIAcgIHx8IQIgDSAChUIgiiENIAwgDXwhDCAHIAyFQhiKIQcgAiAHIBV8fCECIA0gAoVCEIohDSAMIA18IQwgByAMhUI/iiEHIAMgCCAZfHwhAyAOIAOFQiCKIQ4gCSAOfCEJIAggCYVCGIohCCADIAggF3x8IQMgDiADhUIQiiEOIAkgDnwhCSAIIAmFQj+KIQggBCAFIBN8fCEEIA8gBIVCIIohDyAKIA98IQogBSAKhUIYiiEFIAQgBSAbfHwhBCAPIASFQhCKIQ8gCiAPfCEKIAUgCoVCP4ohBSABIAUgF3x8IQEgDSABhUIgiiENIAkgDXwhCSAFIAmFQhiKIQUgASAFICB8fCEBIA0gAYVCEIohDSAJIA18IQkgBSAJhUI/iiEFIAIgBiAffHwhAiAOIAKFQiCKIQ4gCiAOfCEKIAYgCoVCGIohBiACIAYgGnx8IQIgDiAChUIQiiEOIAogDnwhCiAGIAqFQj+KIQYgAyAHIBx8fCEDIA8gA4VCIIohDyALIA98IQsgByALhUIYiiEHIAMgByAUfHwhAyAPIAOFQhCKIQ8gCyAPfCELIAcgC4VCP4ohByAEIAggEXx8IQQgECAEhUIgiiEQIAwgEHwhDCAIIAyFQhiKIQggBCAIIBl8fCEEIBAgBIVCEIohECAMIBB8IQwgCCAMhUI/iiEIIAEgBiAdfHwhASAQIAGFQiCKIRAgCyAQfCELIAYgC4VCGIohBiABIAYgE3x8IQEgECABhUIQiiEQIAsgEHwhCyAGIAuFQj+KIQYgAiAHIB58fCECIA0gAoVCIIohDSAMIA18IQwgByAMhUIYiiEHIAIgByAYfHwhAiANIAKFQhCKIQ0gDCANfCEMIAcgDIVCP4ohByADIAggEnx8IQMgDiADhUIgiiEOIAkgDnwhCSAIIAmFQhiKIQggAyAIIBV8fCEDIA4gA4VCEIohDiAJIA58IQkgCCAJhUI/iiEIIAQgBSAbfHwhBCAPIASFQiCKIQ8gCiAPfCEKIAUgCoVCGIohBSAEIAUgFnx8IQQgDyAEhUIQiiEPIAogD3whCiAFIAqFQj+KIQUgASAFIBt8fCEBIA0gAYVCIIohDSAJIA18IQkgBSAJhUIYiiEFIAEgBSATfHwhASANIAGFQhCKIQ0gCSANfCEJIAUgCYVCP4ohBSACIAYgGXx8IQIgDiAChUIgiiEOIAogDnwhCiAGIAqFQhiKIQYgAiAGIBV8fCECIA4gAoVCEIohDiAKIA58IQogBiAKhUI/iiEGIAMgByAYfHwhAyAPIAOFQiCKIQ8gCyAPfCELIAcgC4VCGIohByADIAcgF3x8IQMgDyADhUIQiiEPIAsgD3whCyAHIAuFQj+KIQcgBCAIIBJ8fCEEIBAgBIVCIIohECAMIBB8IQwgCCAMhUIYiiEIIAQgCCAWfHwhBCAQIASFQhCKIRAgDCAQfCEMIAggDIVCP4ohCCABIAYgIHx8IQEgECABhUIgiiEQIAsgEHwhCyAGIAuFQhiKIQYgASAGIBx8fCEBIBAgAYVCEIohECALIBB8IQsgBiALhUI/iiEGIAIgByAafHwhAiANIAKFQiCKIQ0gDCANfCEMIAcgDIVCGIohByACIAcgH3x8IQIgDSAChUIQiiENIAwgDXwhDCAHIAyFQj+KIQcgAyAIIBR8fCEDIA4gA4VCIIohDiAJIA58IQkgCCAJhUIYiiEIIAMgCCAdfHwhAyAOIAOFQhCKIQ4gCSAOfCEJIAggCYVCP4ohCCAEIAUgHnx8IQQgDyAEhUIgiiEPIAogD3whCiAFIAqFQhiKIQUgBCAFIBF8fCEEIA8gBIVCEIohDyAKIA98IQogBSAKhUI/iiEFIAEgBSARfHwhASANIAGFQiCKIQ0gCSANfCEJIAUgCYVCGIohBSABIAUgEnx8IQEgDSABhUIQiiENIAkgDXwhCSAFIAmFQj+KIQUgAiAGIBN8fCECIA4gAoVCIIohDiAKIA58IQogBiAKhUIYiiEGIAIgBiAUfHwhAiAOIAKFQhCKIQ4gCiAOfCEKIAYgCoVCP4ohBiADIAcgFXx8IQMgDyADhUIgiiEPIAsgD3whCyAHIAuFQhiKIQcgAyAHIBZ8fCEDIA8gA4VCEIohDyALIA98IQsgByALhUI/iiEHIAQgCCAXfHwhBCAQIASFQiCKIRAgDCAQfCEMIAggDIVCGIohCCAEIAggGHx8IQQgECAEhUIQiiEQIAwgEHwhDCAIIAyFQj+KIQggASAGIBl8fCEBIBAgAYVCIIohECALIBB8IQsgBiALhUIYiiEGIAEgBiAafHwhASAQIAGFQhCKIRAgCyAQfCELIAYgC4VCP4ohBiACIAcgG3x8IQIgDSAChUIgiiENIAwgDXwhDCAHIAyFQhiKIQcgAiAHIBx8fCECIA0gAoVCEIohDSAMIA18IQwgByAMhUI/iiEHIAMgCCAdfHwhAyAOIAOFQiCKIQ4gCSAOfCEJIAggCYVCGIohCCADIAggHnx8IQMgDiADhUIQiiEOIAkgDnwhCSAIIAmFQj+KIQggBCAFIB98fCEEIA8gBIVCIIohDyAKIA98IQogBSAKhUIYiiEFIAQgBSAgfHwhBCAPIASFQhCKIQ8gCiAPfCEKIAUgCoVCP4ohBSABIAUgH3x8IQEgDSABhUIgiiENIAkgDXwhCSAFIAmFQhiKIQUgASAFIBt8fCEBIA0gAYVCEIohDSAJIA18IQkgBSAJhUI/iiEFIAIgBiAVfHwhAiAOIAKFQiCKIQ4gCiAOfCEKIAYgCoVCGIohBiACIAYgGXx8IQIgDiAChUIQiiEOIAogDnwhCiAGIAqFQj+KIQYgAyAHIBp8fCEDIA8gA4VCIIohDyALIA98IQsgByALhUIYiiEHIAMgByAgfHwhAyAPIAOFQhCKIQ8gCyAPfCELIAcgC4VCP4ohByAEIAggHnx8IQQgECAEhUIgiiEQIAwgEHwhDCAIIAyFQhiKIQggBCAIIBd8fCEEIBAgBIVCEIohECAMIBB8IQwgCCAMhUI/iiEIIAEgBiASfHwhASAQIAGFQiCKIRAgCyAQfCELIAYgC4VCGIohBiABIAYgHXx8IQEgECABhUIQiiEQIAsgEHwhCyAGIAuFQj+KIQYgAiAHIBF8fCECIA0gAoVCIIohDSAMIA18IQwgByAMhUIYiiEHIAIgByATfHwhAiANIAKFQhCKIQ0gDCANfCEMIAcgDIVCP4ohByADIAggHHx8IQMgDiADhUIgiiEOIAkgDnwhCSAIIAmFQhiKIQggAyAIIBh8fCEDIA4gA4VCEIohDiAJIA58IQkgCCAJhUI/iiEIIAQgBSAWfHwhBCAPIASFQiCKIQ8gCiAPfCEKIAUgCoVCGIohBSAEIAUgFHx8IQQgDyAEhUIQiiEPIAogD3whCiAFIAqFQj+KIQUgISAhKQMAIAEgCYWFNwMAICIgIikDACACIAqFhTcDACAjICMpAwAgAyALhYU3AwAgJCAkKQMAIAQgDIWFNwMAICUgJSkDACAFIA2FhTcDACAmICYpAwAgBiAOhYU3AwAgJyAnKQMAIAcgD4WFNwMAICggKCkDACAIIBCFhTcDAAs=")}}),n=e(),s=WebAssembly.compile(n);return bc=async r=>(await WebAssembly.instantiate(await s,r)).exports,bc}var Ep;function e1(){if(Ep)return Sn.exports;Ep=1;var i=w0(),t=JA(),e=null,n=typeof WebAssembly<"u"&&t1()().then(p=>{e=p}),s=64,r=[];Sn.exports=d;var o=Sn.exports.BYTES_MIN=16,a=Sn.exports.BYTES_MAX=64;Sn.exports.BYTES=32;var l=Sn.exports.KEYBYTES_MIN=16,c=Sn.exports.KEYBYTES_MAX=64;Sn.exports.KEYBYTES=32;var h=Sn.exports.SALTBYTES=16,u=Sn.exports.PERSONALBYTES=16;function d(p,v,g,m,x){if(!(this instanceof d))return new d(p,v,g,m,x);if(!e)throw new Error("WASM not loaded. Wait for Blake2b.ready(cb)");p||(p=32),x!==!0&&(i(p>=o,"digestLength must be at least "+o+", was given "+p),i(p<=a,"digestLength must be at most "+a+", was given "+p),v!=null&&(i(v instanceof Uint8Array,"key must be Uint8Array or Buffer"),i(v.length>=l,"key must be at least "+l+", was given "+v.length),i(v.length<=c,"key must be at least "+c+", was given "+v.length)),g!=null&&(i(g instanceof Uint8Array,"salt must be Uint8Array or Buffer"),i(g.length===h,"salt must be exactly "+h+", was given "+g.length)),m!=null&&(i(m instanceof Uint8Array,"personal must be Uint8Array or Buffer"),i(m.length===u,"personal must be exactly "+u+", was given "+m.length))),r.length||(r.push(s),s+=216),this.digestLength=p,this.finalized=!1,this.pointer=r.pop(),this._memory=new Uint8Array(e.memory.buffer),this._memory.fill(0,0,64),this._memory[0]=this.digestLength,this._memory[1]=v?v.length:0,this._memory[2]=1,this._memory[3]=1,g&&this._memory.set(g,32),m&&this._memory.set(m,48),this.pointer+216>this._memory.length&&this._realloc(this.pointer+216),e.blake2b_init(this.pointer,this.digestLength),v&&(this.update(v),this._memory.fill(0,s,s+v.length),this._memory[this.pointer+200]=128)}d.prototype._realloc=function(p){e.memory.grow(Math.max(0,Math.ceil(Math.abs(p-this._memory.length)/65536))),this._memory=new Uint8Array(e.memory.buffer)},d.prototype.update=function(p){return i(this.finalized===!1,"Hash instance finalized"),i(p instanceof Uint8Array,"input must be Uint8Array or Buffer"),s+p.length>this._memory.length&&this._realloc(s+p.length),this._memory.set(p,s),e.blake2b_update(this.pointer,s,s+p.length),this},d.prototype.digest=function(p){if(i(this.finalized===!1,"Hash instance finalized"),this.finalized=!0,r.push(this.pointer),e.blake2b_final(this.pointer),!p||p==="binary")return this._memory.slice(this.pointer+128,this.pointer+128+this.digestLength);if(typeof p=="string")return t.toString(this._memory,p,this.pointer+128,this.pointer+128+this.digestLength);i(p instanceof Uint8Array&&p.length>=this.digestLength,"input must be Uint8Array or Buffer");for(var v=0;v<this.digestLength;v++)p[v]=this._memory[this.pointer+128+v];return p},d.prototype.final=d.prototype.digest,d.WASM=e,d.SUPPORTED=typeof WebAssembly<"u",d.ready=function(p){return p||(p=f),n?n.then(()=>p(),p):p(new Error("WebAssembly not supported"))},d.prototype.ready=d.ready,d.prototype.getPartialHash=function(){return this._memory.slice(this.pointer,this.pointer+216)},d.prototype.setPartialHash=function(p){this._memory.set(p,this.pointer)};function f(){}return Sn.exports}var Ap;function n1(){if(Ap)return Ie.exports;Ap=1;var i=w0(),t=e1();function e(w,b,S){var U=w[b]+w[S],P=w[b+1]+w[S+1];U>=4294967296&&P++,w[b]=U,w[b+1]=P}function n(w,b,S,U){var P=w[b]+S;S<0&&(P+=4294967296);var W=w[b+1]+U;P>=4294967296&&W++,w[b]=P,w[b+1]=W}function s(w,b){return w[b]^w[b+1]<<8^w[b+2]<<16^w[b+3]<<24}function r(w,b,S,U,P,W){var Z=h[P],D=h[P+1],nt=h[W],q=h[W+1];e(c,w,b),n(c,w,Z,D);var lt=c[U]^c[w],K=c[U+1]^c[w+1];c[U]=K,c[U+1]=lt,e(c,S,U),lt=c[b]^c[S],K=c[b+1]^c[S+1],c[b]=lt>>>24^K<<8,c[b+1]=K>>>24^lt<<8,e(c,w,b),n(c,w,nt,q),lt=c[U]^c[w],K=c[U+1]^c[w+1],c[U]=lt>>>16^K<<16,c[U+1]=K>>>16^lt<<16,e(c,S,U),lt=c[b]^c[S],K=c[b+1]^c[S+1],c[b]=K>>>31^lt<<1,c[b+1]=lt>>>31^K<<1}var o=new Uint32Array([4089235720,1779033703,2227873595,3144134277,4271175723,1013904242,1595750129,2773480762,2917565137,1359893119,725511199,2600822924,4215389547,528734635,327033209,1541459225]),a=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3,11,8,12,0,5,2,15,13,10,14,3,6,7,1,9,4,7,9,3,1,13,12,11,14,2,6,5,10,4,0,15,8,9,0,5,7,2,4,10,15,14,1,11,12,6,8,3,13,2,12,6,10,0,11,8,3,4,13,7,5,15,14,1,9,12,5,1,15,14,13,4,10,0,7,6,3,9,2,8,11,13,11,7,14,12,1,3,9,5,0,15,4,8,6,2,10,6,15,14,9,11,3,0,8,12,2,13,7,1,4,10,5,10,2,8,4,7,6,1,5,15,11,9,14,3,12,13,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3],l=new Uint8Array(a.map(function(w){return w*2})),c=new Uint32Array(32),h=new Uint32Array(32);function u(w,b){var S=0;for(S=0;S<16;S++)c[S]=w.h[S],c[S+16]=o[S];for(c[24]=c[24]^w.t,c[25]=c[25]^w.t/4294967296,b&&(c[28]=~c[28],c[29]=~c[29]),S=0;S<32;S++)h[S]=s(w.b,4*S);for(S=0;S<12;S++)r(0,8,16,24,l[S*16+0],l[S*16+1]),r(2,10,18,26,l[S*16+2],l[S*16+3]),r(4,12,20,28,l[S*16+4],l[S*16+5]),r(6,14,22,30,l[S*16+6],l[S*16+7]),r(0,10,20,30,l[S*16+8],l[S*16+9]),r(2,12,22,24,l[S*16+10],l[S*16+11]),r(4,14,16,26,l[S*16+12],l[S*16+13]),r(6,8,18,28,l[S*16+14],l[S*16+15]);for(S=0;S<16;S++)w.h[S]=w.h[S]^c[S]^c[S+16]}var d=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);function f(w,b,S,U){d.fill(0),this.b=new Uint8Array(128),this.h=new Uint32Array(16),this.t=0,this.c=0,this.outlen=w,d[0]=w,b&&(d[1]=b.length),d[2]=1,d[3]=1,S&&d.set(S,32),U&&d.set(U,48);for(var P=0;P<16;P++)this.h[P]=o[P]^s(d,P*4);b&&(p(this,b),this.c=128)}f.prototype.update=function(w){return i(w instanceof Uint8Array,"input must be Uint8Array or Buffer"),p(this,w),this},f.prototype.digest=function(w){var b=!w||w==="binary"||w==="hex"?new Uint8Array(this.outlen):w;return i(b instanceof Uint8Array,'out must be "binary", "hex", Uint8Array, or Buffer'),i(b.length>=this.outlen,"out must have at least outlen bytes of space"),v(this,b),w==="hex"?g(b):b},f.prototype.final=f.prototype.digest,f.ready=function(w){t.ready(function(){w()})};function p(w,b){for(var S=0;S<b.length;S++)w.c===128&&(w.t+=w.c,u(w,!1),w.c=0),w.b[w.c++]=b[S]}function v(w,b){for(w.t+=w.c;w.c<128;)w.b[w.c++]=0;u(w,!0);for(var S=0;S<w.outlen;S++)b[S]=w.h[S>>2]>>8*(S&3);return b}function g(w){for(var b="",S=0;S<w.length;S++)b+=m(w[S]);return b}function m(w){return w<16?"0"+w.toString(16):w.toString(16)}var x=f;Ie.exports=function(b,S,U,P,W){return W!==!0&&(i(b>=_,"outlen must be at least "+_+", was given "+b),i(b<=y,"outlen must be at most "+y+", was given "+b),S!=null&&(i(S instanceof Uint8Array,"key must be Uint8Array or Buffer"),i(S.length>=R,"key must be at least "+R+", was given "+S.length),i(S.length<=A,"key must be at most "+A+", was given "+S.length)),U!=null&&(i(U instanceof Uint8Array,"salt must be Uint8Array or Buffer"),i(U.length===T,"salt must be exactly "+T+", was given "+U.length)),P!=null&&(i(P instanceof Uint8Array,"personal must be Uint8Array or Buffer"),i(P.length===I,"personal must be exactly "+I+", was given "+P.length))),new x(b,S,U,P)},Ie.exports.ready=function(w){t.ready(function(){w()})},Ie.exports.WASM_SUPPORTED=t.SUPPORTED,Ie.exports.WASM_LOADED=!1;var _=Ie.exports.BYTES_MIN=16,y=Ie.exports.BYTES_MAX=64;Ie.exports.BYTES=32;var R=Ie.exports.KEYBYTES_MIN=16,A=Ie.exports.KEYBYTES_MAX=64;Ie.exports.KEYBYTES=32;var T=Ie.exports.SALTBYTES=16,I=Ie.exports.PERSONALBYTES=16;return t.ready(function(w){w||(Ie.exports.WASM_LOADED=!0,Ie.exports=t)}),Ie.exports}var i1=n1();const s1=QA(i1),M0=new TextEncoder;function En(i,...t){const e=new Uint8Array(16);e.set(typeof i=="string"?M0.encode(i):i);const n=s1(32,null,null,e);for(const s of t)n.update(s);return n.digest()}const ts=i=>{const t=i.reduce((s,r)=>s+r.length,0),e=new Uint8Array(t);let n=0;for(const s of i)e.set(s,n),n+=s.length;return e},Hr=i=>Uint8Array.of(i&255),un=i=>{const t=new Uint8Array(4);return new DataView(t.buffer).setUint32(0,i>>>0,!0),t},La=i=>{const t=new Uint8Array(8);return new DataView(t.buffer).setBigUint64(0,BigInt(i),!0),t},es=i=>{const t=new Uint8Array(i.length/2);for(let e=0;e<t.length;e++)t[e]=parseInt(i.slice(e*2,e*2+2),16);return t},ul=i=>Array.from(i,t=>t.toString(16).padStart(2,"0")).join(""),Cp=i=>es(i).reverse();function r1(i){return i<253?Hr(i):i<=65535?ts([Hr(253),un(i).slice(0,2)]):i<=4294967295?ts([Hr(254),un(i)]):ts([Hr(255),La(i)])}const wc=i=>ts([r1(i.length),i]),o1=2147483653,a1=648488714,l1=1;function S0(i,t){const e=i.inputs,n=i.outputs,s=En("ZTxIdHeadersHash",un(o1),un(a1),un(i.branchId),un(i.lockTime),un(i.expiryHeight)),r=En("ZTxIdPrevoutHash",...e.map(g=>ts([Cp(g.txid),un(g.vout)]))),o=En("ZTxTrAmountsHash",...e.map(g=>La(g.value))),a=En("ZTxTrScriptsHash",...e.map(g=>wc(es(g.scriptPubKey)))),l=En("ZTxIdSequencHash",...e.map(g=>un(g.sequence))),c=En("ZTxIdOutputsHash",...n.map(g=>ts([La(g.value),wc(es(g.scriptPubKey))]))),h=e[t],u=En("Zcash___TxInHash",Cp(h.txid),un(h.vout),La(h.value),wc(es(h.scriptPubKey)),un(h.sequence)),d=En("ZTxIdTranspaHash",Hr(l1),r,o,a,l,c,u),f=En("ZTxIdSaplingHash"),p=En("ZTxIdOrchardHash"),v=ts([M0.encode("ZcashTxHash_"),un(i.branchId)]);return En(v,s,d,f,p)}const c1="m/44'/133'/0'/0",h1=Uint8Array.of(28,184),u1="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",d1=()=>IE(Gg,256),f1=i=>UE(i.trim().replace(/\s+/g," "),Gg);function p1(i){const t=rs(rs(i)).slice(0,4),e=new Uint8Array(i.length+4);e.set(i),e.set(t,i.length);let n=0n;for(const r of e)n=n<<8n|BigInt(r);let s="";for(;n>0n;)s=u1[Number(n%58n)]+s,n/=58n;for(const r of e)if(r===0)s="1"+s;else break;return s}const E0=i=>y0(rs(i));function m1(i){const t=typeof i=="string"?es(i):i;return p1(new Uint8Array([...h1,...E0(t)]))}function Mc(i,t=0){const e=NE(i.trim().replace(/\s+/g," ")),n=Ki.fromMasterSeed(e).derive(`${c1}/${t}`);if(!n.privateKey)throw new Error("derivation produced no private key");const s=n.publicKey;return{index:t,secret:n.privateKey,pubkey:ul(s),address:m1(s)}}function Tp(i){let t=0;for(;t<i.length-1&&i[t]===0;)t++;const e=i.slice(t),n=e[0]&128?new Uint8Array([0,...e]):e;return new Uint8Array([2,n.length,...n])}function g1(i,t){const e=zs.sign(i,t,{lowS:!0}),n=Tp(e.slice(0,32)),s=Tp(e.slice(32,64));return ul(new Uint8Array([48,n.length+s.length,...n,...s]))+"01"}function v1(i){const t=E0(typeof i=="string"?es(i):i);return"76a914"+ul(t)+"88ac"}const _1="glass",as="wallet",Gu="v1",A0=6e5,qa=()=>{const i=globalThis.crypto?.subtle;if(!i)throw new Error("this browser has no Web Crypto — use a current browser over https");return i};function Wu(){return new Promise((i,t)=>{const e=indexedDB.open(_1,1);e.onupgradeneeded=()=>e.result.createObjectStore(as),e.onsuccess=()=>i(e.result),e.onerror=()=>t(e.error)})}async function y1(i){const t=await Wu();return new Promise((e,n)=>{const s=t.transaction(as,"readwrite");s.objectStore(as).put(i,Gu),s.oncomplete=e,s.onerror=()=>n(s.error)})}async function $u(){const i=await Wu();return new Promise((t,e)=>{const s=i.transaction(as,"readonly").objectStore(as).get(Gu);s.onsuccess=()=>t(s.result||null),s.onerror=()=>e(s.error)})}async function x1(){const i=await Wu();return new Promise((t,e)=>{const n=i.transaction(as,"readwrite");n.objectStore(as).delete(Gu),n.oncomplete=t,n.onerror=()=>e(n.error)})}async function C0(i,t){const e=await qa().importKey("raw",new TextEncoder().encode(i),"PBKDF2",!1,["deriveKey"]);return qa().deriveKey({name:"PBKDF2",salt:t,iterations:A0,hash:"SHA-256"},e,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}async function b1(i,t){const e=crypto.getRandomValues(new Uint8Array(16)),n=crypto.getRandomValues(new Uint8Array(12)),s=await C0(t,e),r=new Uint8Array(await qa().encrypt({name:"AES-GCM",iv:n},s,new TextEncoder().encode(i)));return{v:1,kdf:"PBKDF2-SHA256",iterations:A0,salt:[...e],iv:[...n],ct:[...r],created:new Date().toISOString()}}async function w1(i,t){const e=await C0(t,new Uint8Array(i.salt));try{const n=await qa().decrypt({name:"AES-GCM",iv:new Uint8Array(i.iv)},e,new Uint8Array(i.ct));return new TextDecoder().decode(n)}catch{throw new Error("wrong passphrase")}}const Ip=async(i,t)=>y1(await b1(i,t)),M1=$u,S1=async()=>!!await $u(),E1=x1,A1=async()=>JSON.stringify(await $u(),null,1),Rp=22,Lp=101,Pp=103;function C1(i){const t=es(i);if(t[0]!==106||t[1]!==94)throw new Error("not a ZRunes runestone");let e=2,n;if(t[e]<=75)n=t[e],e+=1;else if(t[e]===76)n=t[e+1],e+=2;else throw new Error("the payload is not a plain data push");const s=t.slice(e,e+n);if(s.length!==n)throw new Error("the payload is truncated");let r=0;const o=()=>{let h=0n,u=0n;for(;;){if(r>=s.length)throw new Error("a varint runs off the end");const d=s[r++];if(h|=BigInt(d&127)<<u,!(d&128))return h;if(u+=7n,u>126n)throw new Error("a varint is too long")}},a=new Map,l=[];let c=-1n;for(;r<s.length;){const h=o();if(h===0n){let u=0n,d=0n;for(;r<s.length;){const f=o(),p=o(),v=o(),g=o();f===0n?d+=p:(u+=f,d=p),l.push({block:u,tx:d,amount:v,output:Number(g)})}break}if(h<=c)throw new Error(`tags are not ascending (${c} then ${h})`);if(h>=26n&&h%2n===0n)throw new Error(`tag ${h} is an undefined even tag — an indexer reads this stone as a cenotaph and burns every balance in it`);c=h,a.set(Number(h),o())}return{tags:a,edicts:l,pointer:a.has(Rp)?Number(a.get(Rp)):null}}function T1(i,t,e){const n=new Array(t).fill(0n);let s=BigInt(e);for(const r of i.edicts){if(r.output>=t)throw new Error(`an edict names output ${r.output} of ${t} — that is a malformed stone, which burns every balance`);const o=r.amount===0n?s:r.amount<s?r.amount:s;n[r.output]+=o,s-=o}if(s>0n){if(i.pointer===null)throw new Error("unallocated GLASS with no pointer");if(i.pointer>=t)throw new Error("the pointer names an output that does not exist");n[i.pointer]+=s}return n.map(Number)}function I1({scriptHex:i,side:t,rune:e,headGlass:n,amount:s,outputCount:r,traderBrings:o=0,traderOutput:a=1,poolOutput:l=0}){const c=C1(i);if(c.pointer!==a)throw new Error(`the stone points its leftover GLASS at output ${c.pointer}, not at us (${a})`);for(const m of c.edicts)if(m.output!==l)throw new Error(`an edict sends GLASS to output ${m.output}; a trade may only name the pool (${l})`);const h=t==="buy"?Lp:Pp;if(!c.tags.has(h))throw new Error(`the stone is not marked as a ${t}`);if(c.tags.has(t==="buy"?Pp:Lp))throw new Error("the stone is marked as both a buy and a sell");if(c.edicts.length!==1)throw new Error(`expected one edict, found ${c.edicts.length}`);const u=c.edicts[0];if(u.block!==BigInt(e.block)||u.tx!==BigInt(e.tx))throw new Error("the edict names a different rune");const d=t==="buy"?BigInt(n)-BigInt(s):BigInt(n)+BigInt(s);if(u.amount!==d)throw new Error(`the edict hands the pool ${u.amount} GLASS where this ${t} names ${d}`);if(u.amount===0n)throw new Error('an edict amount of 0 means "everything left" — never valid for a trade');const f=BigInt(n)+BigInt(o)+(t==="sell"?BigInt(s):0n),p=T1(c,r,f),v=p[1],g=p[0];if(t==="buy"){if(v<s)throw new Error(`the stone gives us ${v} GLASS, not the ${s} quoted`);if(g!==n-s)throw new Error(`the stone leaves the pool ${g} GLASS where ${n-s} is right`)}else{if(g!==n+s)throw new Error(`the stone gives the pool ${g} GLASS, not ${n+s}`);if(v!==o)throw new Error(`the stone returns us ${v} GLASS where ${o} is right`)}return{stone:c,outs:p}}const T0=1e8,Vr=i=>Math.round(i*T0),Un=i=>i/T0,Qu=(i,t,e)=>fetch(i+t,e?{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}:void 0).then(async n=>{const s=await n.text();let r;try{r=JSON.parse(s)}catch{throw new Error(`${t}: ${s.slice(0,200)}`)}if(!n.ok)throw new Error(r.error||s);return r}),I0=i=>Qu(i,"/state");function R1(i,t,e){const n=Un(i.pool_zec),s=Un(i.hwm);if(t==="buy"){const a=Un(e),l=Eu(n,s,a);return{glass:Math.floor(Su(n,l).tokens),netZat:Vr(l),feeZat:Vr(a-l)}}const r=Cg(n,e).zec,o=r*ss(s,"sell");return{glass:e,netZat:Vr(r-o),feeZat:Vr(o)}}async function L1({daemon:i,side:t,amount:e,key:n,utxos:s,tolerance:r=2}){const o=await I0(i),a=R1(o,t,e),l={side:t,trader_address:n.address,inputs:s.map(I=>({txid:I.txid,vout:I.vout,value:I.value,pubkey:n.pubkey}))};t==="buy"?l.zat=e:l.glass=e;const c=await Qu(i,"/quote",l),h=a.glass-c.amounts.glass;if(t==="buy"&&h>r)throw new Error(`the quote gives ${c.amounts.glass} GLASS where the curve says ${a.glass}`);if(t==="sell"&&a.netZat-c.amounts.net_zat>r)throw new Error(`the quote pays ${c.amounts.net_zat} zat where the curve says ${a.netZat}`);const u=v1(n.pubkey),d=wt.pool?.script;if(!d)throw new Error("no pool script is published yet — nothing to check a trade against");if(c.outputs[0].script_pubkey!==d)throw new Error("output 0 does not pay the published pool script");if(c.outputs[1].script_pubkey!==u)throw new Error("output 1 does not pay us");const f=c.outputs.filter(I=>I.script_pubkey===u).reduce((I,w)=>I+w.value,0),p=s.reduce((I,w)=>I+w.value,0),v=t==="buy"?p-e-c.amounts.network_fee_zat:p+c.amounts.net_zat-c.amounts.network_fee_zat;if(f+r<v)throw new Error(`the outputs return ${f} zat where ${v} is due`);c.outputs.forEach((I,w)=>{if(!(w===0&&I.script_pubkey===d||I.script_pubkey===u||I.script_pubkey.startsWith("6a5e")&&I.value===0))throw new Error(`output ${w} pays neither the pool nor us — ${I.value} zat to something else`)});const g=o.head.zec+p,m=c.outputs.reduce((I,w)=>I+w.value,0),x=g-m,_=5e3*Math.max(2,Math.max(1+s.length,c.outputs.length));if(x<0)throw new Error("the outputs pay out more than the inputs bring in");if(x>_)throw new Error(`the transaction spends ${x} zat on network fees where ZIP-317 allows ${_}`);if(Math.abs(x-c.amounts.network_fee_zat)>r)throw new Error(`the quote calls the network fee ${c.amounts.network_fee_zat} zat; the transaction actually pays ${x}`);if(!Number.isInteger(c.expiry_height)||c.expiry_height<=o.height||c.expiry_height>o.height+50)throw new Error(`the quote expires at height ${c.expiry_height}, which is not just ahead of the tip (${o.height})`);const y=c.outputs.filter(I=>I.script_pubkey.startsWith("6a5e"));if(y.length!==1)throw new Error(`expected one runestone, found ${y.length}`);if(y[0].value!==0)throw new Error("the runestone output must carry no value");if(!wt.pool?.rune)throw new Error("no GLASS rune id is published yet — nothing to check the stone against");const[R,A]=wt.pool.rune.split(":");I1({scriptHex:y[0].script_pubkey,side:t,rune:{block:+R,tx:+A},headGlass:o.head.glass,amount:t==="buy"?c.amounts.glass:e,outputCount:c.outputs.length,traderBrings:t==="sell"?Math.max(0,(o.my_glass||0)-e):0});const T={branchId:parseInt(o.branch,16),lockTime:0,expiryHeight:c.expiry_height,inputs:[{txid:o.head.txid,vout:o.head.vout,value:o.head.zec,scriptPubKey:c.outputs[0].script_pubkey,sequence:4294967295},...s.map(I=>({txid:I.txid,vout:I.vout,value:I.value,scriptPubKey:u,sequence:4294967295}))],outputs:c.outputs.map(I=>({value:I.value,scriptPubKey:I.script_pubkey}))};for(const I of c.inputs)if(ul(S0(T,I.input))!==I.sighash)throw new Error(`signature hash mismatch on input ${I.input} — refusing to sign`);return{quote:c,state:o,tx:T,expected:a}}async function P1({daemon:i,checked:t,secret:e}){const n=t.quote.inputs.map(s=>({input:s.input,signature:g1(S0(t.tx,s.input),e)}));return Qu(i,"/trade",{quote_id:t.quote.quote_id,signatures:n})}const Pr=wt.links?.operator||"";function Dp(i){let t;try{t=new URL(i,location.origin)}catch{return null}const e=t.hostname==="localhost"||t.hostname==="127.0.0.1"||t.hostname==="[::1]";return t.protocol!=="https:"&&!(t.protocol==="http:"&&e)?null:t.origin+t.pathname.replace(/\/$/,"")}const D1=()=>{let i=null;try{i=new URLSearchParams(location.search).get("op")}catch{i=null}if(!i)return{url:Pr,foreign:!1};const t=Dp(i);if(!t)return{url:Pr,foreign:!1,refused:`ignored ?op=${i} — an operator must be https (or http on this machine)`};if(Pr&&t===Dp(Pr))return{url:t,foreign:!1};const e=new URL(t).hostname;if(e==="localhost"||e==="127.0.0.1"||e==="[::1]")return{url:t,foreign:!0};const n=new URL(t).host;return confirm(`This link points your GLASS wallet at ${n} instead of the operator published on this site.

That server would hand this page every price and every transaction it asks you to sign, and this page holds your seed phrase.

Only continue if you set this up yourself.`)?{url:t,foreign:!0}:{url:Pr,foreign:!1,refused:`ignored ?op=${n}`}},co=D1(),gn=co.url,U1=co.foreign;co.refused;co.refused&&console.warn("[glass]",co.refused);const ci=String.raw,Ys=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Sc=(i,t,e="")=>ci`<div class="ln"><span class="c">&gt;</span><span class="k">${i}</span><span class="v ${e}">${t}</span></div>`;let Ze=null;function B1(i){if(!i)return;const t=async()=>{i.innerHTML=await N1(),H1(i,t)};t()}async function N1(){return Ze?O1():await S1()?k1():F1()}const qu=(i,t,e="")=>ci`
  <div class="eyebrow"><span><b>GLASS</b> // ${i}</span><span class="rule"></span><span>${gn?(U1?"UNPUBLISHED operator ":"operator ")+Ys(gn.replace(/^https?:\/\//,"")):"no operator configured"}</span></div>
  ${t}${e}`,F1=()=>qu("WALLET_",ci`
  <h2 class="q"><span class="c">&gt;</span>Trade from this browser.</h2>
  <p class="hintp">The wallet is 24 words and a passphrase. Both stay on this machine: there is no account, no
  email, and nothing to log in to. The same 24 words restore your ZEC in any Zcash wallet.</p>
  <div class="ctl">
    <div>
      <label for="w-pass">Choose a passphrase</label>
      <div class="row"><input id="w-pass" type="password" autocomplete="new-password" placeholder="12 characters or more"></div>
      <label for="w-pass2" style="margin-top:10px">Again</label>
      <div class="row"><input id="w-pass2" type="password" autocomplete="new-password"></div>
      <p class="hintp" id="w-err" style="color:var(--ask-2);min-height:1.2em"></p>
    </div>
    <div>
      <label>Or bring 24 words you already have</label>
      <div class="row"><textarea id="w-words" rows="3" placeholder="word word word …" style="width:100%;background:transparent;border:1px solid var(--line-2);color:var(--grn-2);font:inherit;padding:8px"></textarea></div>
    </div>
  </div>`,ci`
  <div class="foot" style="position:static;padding:14px 0 0">
    <button class="btn" type="button" id="w-create">[ CREATE A WALLET ]</button>
    <button class="btn vio" type="button" id="w-restore">[ RESTORE ]</button>
  </div>`),k1=()=>qu("WALLET_",ci`
  <h2 class="q"><span class="c">&gt;</span>Locked.</h2>
  <p class="hintp">A wallet is stored in this browser. Your passphrase opens it; nothing else can.</p>
  <div class="ctl"><div>
    <label for="w-unlock">Passphrase</label>
    <div class="row"><input id="w-unlock" type="password" autocomplete="current-password"></div>
    <p class="hintp" id="w-err" style="color:var(--ask-2);min-height:1.2em"></p>
  </div></div>`,ci`
  <div class="foot" style="position:static;padding:14px 0 0">
    <button class="btn" type="button" id="w-open">[ UNLOCK ]</button>
    <button class="btn" type="button" id="w-backup">[ SAVE A BACKUP FILE ]</button>
    <button class="btn vio" type="button" id="w-forget">[ FORGET THIS WALLET ]</button>
  </div>`),O1=()=>qu("WALLET_",ci`
  <h2 class="q"><span class="c">&gt;</span>Open.</h2>
  <div class="term" id="w-state">
    ${Sc("address",`<span style="word-break:break-all">${Ys(Ze.key.address)}</span>`,"gold")}
    ${Sc("balance","reading the chain…","dimv")}
    ${Sc("pool",gn?"asking the operator…":"no operator configured — nothing to trade against yet","dimv")}
  </div>
  <div class="ctl" style="margin-top:18px">
    <div>
      <label for="w-amt">Buy</label>
      <div class="row"><input id="w-amt" type="number" min="0.001" step="0.01" value="0.1" inputmode="decimal"><span class="unit">ZEC</span></div>
      <p class="hintp" id="w-quote" style="min-height:2.4em">The quote is priced at the pool's current state. You see the exact fill before you sign.</p>
    </div>
    <div>
      <label for="w-sell">Sell</label>
      <div class="row"><input id="w-sell" type="number" min="1" step="1" placeholder="GLASS" inputmode="numeric"><span class="unit">GLASS</span></div>
      <p class="hintp" id="w-quote2" style="min-height:2.4em"></p>
    </div>
  </div>`,ci`
  <div class="foot" style="position:static;padding:14px 0 0">
    <button class="btn" type="button" id="w-buy">[ QUOTE A BUY ]</button>
    <button class="btn" type="button" id="w-sellq">[ QUOTE A SELL ]</button>
    <button class="btn vio" type="button" id="w-lock">[ LOCK ]</button>
  </div>`);function z1(i){const t=i.split(" ");return ci`
  <h2 class="q"><span class="c">&gt;</span>Write these down.</h2>
  <p class="hintp">These 24 words are the wallet. Anyone who has them has the coins; anyone who loses them
  loses the coins. They are shown once. Paper is the best place for them.</p>
  <div class="pgrid" style="grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:2px" id="w-words-grid">
    ${t.map((e,n)=>`<div style="padding:8px 10px;border:1px solid var(--line-2);font:inherit"><span class="k" style="opacity:.5">${String(n+1).padStart(2,"0")}</span> <span class="v">${Ys(e)}</span></div>`).join("")}
  </div>
  <div class="foot" style="position:static;padding:14px 0 0">
    <button class="btn" type="button" id="w-copy">[ COPY THE 24 WORDS ]</button>
    <button class="btn vio" type="button" id="w-written">[ I HAVE WRITTEN THEM DOWN ]</button>
  </div>`}function H1(i,t){const e=r=>i.querySelector("#"+r),n=r=>{const o=e("w-err");o&&(o.textContent=r)};e("w-create")?.addEventListener("click",async()=>{const r=e("w-pass").value,o=e("w-pass2").value;if(r.length<12)return n("the passphrase needs 12 characters or more");if(r!==o)return n("the two passphrases differ");const a=d1();i.innerHTML=z1(a),i.querySelector("#w-copy").addEventListener("click",async l=>{try{await navigator.clipboard.writeText(a),l.target.textContent="[ COPIED ]",setTimeout(()=>{l.target.textContent="[ COPY THE 24 WORDS ]"},1600)}catch{l.target.textContent="[ SELECT AND COPY THEM BY HAND ]"}}),i.querySelector("#w-written").addEventListener("click",async()=>{await Ip(a,r),Ze={key:Mc(a,0),mnemonic:a},t()})}),e("w-restore")?.addEventListener("click",async()=>{const r=(e("w-words").value||"").trim().replace(/\s+/g," "),o=e("w-pass").value;if(!f1(r))return n("those are not 24 valid words");if(o.length<12)return n("choose a passphrase of 12 characters or more to lock them with");await Ip(r,o),Ze={key:Mc(r,0),mnemonic:r},t()}),e("w-open")?.addEventListener("click",async()=>{try{const r=await w1(await M1(),e("w-unlock").value);Ze={key:Mc(r,0),mnemonic:r},t()}catch(r){n(r.message)}}),e("w-backup")?.addEventListener("click",async()=>{const r=new Blob([await A1()],{type:"application/json"}),o=document.createElement("a");o.href=URL.createObjectURL(r),o.download="glass-wallet-backup.json",o.click(),setTimeout(()=>URL.revokeObjectURL(o.href),2e3)}),e("w-forget")?.addEventListener("click",async()=>{confirm("Forget this wallet? Without the 24 words it cannot be brought back.")&&(await E1(),Ze=null,t())}),e("w-lock")?.addEventListener("click",()=>{Ze=null,t()}),Ze&&Up(i);const s=async r=>{const o=i.querySelector(r==="buy"?"#w-quote":"#w-quote2");if(!gn){o.textContent="No operator is configured, so there is nothing to quote against yet.";return}o.textContent="asking…";try{const a=r==="buy"?Vr(+i.querySelector("#w-amt").value):Math.floor(+i.querySelector("#w-sell").value),l=await R0(Ze.key.address);if(!l.length){o.textContent="This address holds nothing yet. Send ZEC to it first.";return}const c=await L1({daemon:gn,side:r,amount:a,key:Ze.key,utxos:l}),h=c.quote.amounts;o.innerHTML=r==="buy"?`<b>${h.glass.toLocaleString("en-GB")} GLASS</b> for ${St(Un(h.gross_zat),4)} ZEC · fee ${St(Un(h.fee_zat),4)} (${re(h.fee_zat/h.gross_zat,1)}) · network ${St(Un(h.network_fee_zat),5)}<br><span class="dimv">checked against the curve and every signature hash re-derived here.</span>`:`<b>${St(Un(h.net_zat),4)} ZEC</b> for ${h.glass.toLocaleString("en-GB")} GLASS · fee ${St(Un(h.fee_zat),4)}<br><span class="dimv">checked here before signing.</span>`;const u=document.createElement("button");u.className="btn",u.type="button",u.textContent=`[ SIGN AND ${r==="buy"?"BUY":"SELL"} ]`,u.addEventListener("click",async()=>{u.disabled=!0,u.textContent="[ SIGNING… ]";try{const d=await P1({daemon:gn,checked:c,secret:Ze.key.secret});o.innerHTML=`<b>done.</b> <span class="txlink">${Ys(d.txid)}</span><br><span class="dimv">one transaction, mined or void. Nobody owes anybody anything either way.</span>`,Up(i)}catch(d){o.innerHTML=`<span style="color:var(--ask-2)">refused: ${Ys(d.message)}</span>`,u.disabled=!1}}),o.appendChild(document.createElement("br")),o.appendChild(u)}catch(a){o.innerHTML=`<span style="color:var(--ask-2)">${Ys(a.message)}</span>`}};e("w-buy")?.addEventListener("click",()=>s("buy")),e("w-sellq")?.addEventListener("click",()=>s("sell"))}async function R0(i){if(!gn)return[];const t=await fetch(`${gn}/utxos/${i}`);return t.ok?(await t.json()).utxos||[]:[]}async function Up(i){const t=i.querySelector("#w-state");if(!(!t||!Ze)){try{const e=await R0(Ze.key.address),n=e.reduce((s,r)=>s+r.value,0);t.children[1].querySelector(".v").textContent=`${St(Un(n),4)} ZEC in ${e.length} output${e.length===1?"":"s"}`}catch{t.children[1].querySelector(".v").textContent="could not read the chain"}if(gn)try{const e=await I0(gn);t.children[2].querySelector(".v").textContent=`${St(Un(e.pool_zec),3)} ZEC in the pool · ${e.bonded?"bonded":"launch fees"} · head ${e.head.txid.slice(0,12)}…`}catch{t.children[2].querySelector(".v").textContent="the operator is not answering — nothing is owed either way"}}}const V1="./data/zilkroad.json";let la=null;async function L0(){if(la)return la;const i=await fetch(V1,{cache:"no-cache"});if(!i.ok)throw new Error("snapshot "+i.status);return la=await i.json(),la}const G1=i=>new Date(i).toLocaleDateString("en-GB",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",timeZone:"UTC"})+" UTC";function W1(i){const t=[`${St(i.floorZec,3)} ZEC`,"zilkroad"];return i.sales24h!=null&&t.push(`${i.sales24h.toLocaleString("en-GB")} sales · 24h`),i.medianFillZec!=null&&t.push(`median of last ${i.fillsSampled} fills ${St(i.medianFillZec,2)}`),t.push(`snapshot ${G1(i.at)}`),t.join(" · ")}const $1="https://api.coingecko.com/api/v3/simple/price?ids=zcash&vs_currencies=usd";let ca=null;function P0(){return ca||(ca=(async()=>{try{const i=new AbortController,t=setTimeout(()=>i.abort(),6e3),e=await fetch($1,{signal:i.signal});if(clearTimeout(t),e.ok){const n=await e.json(),s=n&&n.zcash&&Number(n.zcash.usd);if(Number.isFinite(s)&&s>0)return{usd:s,note:"live · coingecko"}}}catch{}try{const i=await L0();if(Number.isFinite(i.zecUsd)&&i.zecUsd>0){const t=i.at?new Date(i.at).toLocaleDateString("en-GB",{day:"numeric",month:"short",timeZone:"UTC"}):null;return{usd:i.zecUsd,note:(i.rateSource||"snapshot")+(t?" snapshot, "+t:" snapshot")}}}catch{}return{usd:wt.zecUsd,note:"a fixed rate in this build"}})(),ca)}function oe(i){var t=i.width,e=i.height;if(t<0)throw new Error("Negative width is not allowed for Size");if(e<0)throw new Error("Negative height is not allowed for Size");return{width:t,height:e}}function ns(i,t){return i.width===t.width&&i.height===t.height}var Q1=(function(){function i(t){var e=this;this._resolutionListener=function(){return e._onResolutionChanged()},this._resolutionMediaQueryList=null,this._observers=[],this._window=t,this._installResolutionListener()}return i.prototype.dispose=function(){this._uninstallResolutionListener(),this._window=null},Object.defineProperty(i.prototype,"value",{get:function(){return this._window.devicePixelRatio},enumerable:!1,configurable:!0}),i.prototype.subscribe=function(t){var e=this,n={next:t};return this._observers.push(n),{unsubscribe:function(){e._observers=e._observers.filter(function(s){return s!==n})}}},i.prototype._installResolutionListener=function(){if(this._resolutionMediaQueryList!==null)throw new Error("Resolution listener is already installed");var t=this._window.devicePixelRatio;this._resolutionMediaQueryList=this._window.matchMedia("all and (resolution: ".concat(t,"dppx)")),this._resolutionMediaQueryList.addListener(this._resolutionListener)},i.prototype._uninstallResolutionListener=function(){this._resolutionMediaQueryList!==null&&(this._resolutionMediaQueryList.removeListener(this._resolutionListener),this._resolutionMediaQueryList=null)},i.prototype._reinstallResolutionListener=function(){this._uninstallResolutionListener(),this._installResolutionListener()},i.prototype._onResolutionChanged=function(){var t=this;this._observers.forEach(function(e){return e.next(t._window.devicePixelRatio)}),this._reinstallResolutionListener()},i})();function q1(i){return new Q1(i)}var K1=(function(){function i(t,e,n){var s;this._canvasElement=null,this._bitmapSizeChangedListeners=[],this._suggestedBitmapSize=null,this._suggestedBitmapSizeChangedListeners=[],this._devicePixelRatioObservable=null,this._canvasElementResizeObserver=null,this._canvasElement=t,this._canvasElementClientSize=oe({width:this._canvasElement.clientWidth,height:this._canvasElement.clientHeight}),this._transformBitmapSize=e??(function(r){return r}),this._allowResizeObserver=(s=n?.allowResizeObserver)!==null&&s!==void 0?s:!0,this._chooseAndInitObserver()}return i.prototype.dispose=function(){var t,e;if(this._canvasElement===null)throw new Error("Object is disposed");(t=this._canvasElementResizeObserver)===null||t===void 0||t.disconnect(),this._canvasElementResizeObserver=null,(e=this._devicePixelRatioObservable)===null||e===void 0||e.dispose(),this._devicePixelRatioObservable=null,this._suggestedBitmapSizeChangedListeners.length=0,this._bitmapSizeChangedListeners.length=0,this._canvasElement=null},Object.defineProperty(i.prototype,"canvasElement",{get:function(){if(this._canvasElement===null)throw new Error("Object is disposed");return this._canvasElement},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"canvasElementClientSize",{get:function(){return this._canvasElementClientSize},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"bitmapSize",{get:function(){return oe({width:this.canvasElement.width,height:this.canvasElement.height})},enumerable:!1,configurable:!0}),i.prototype.resizeCanvasElement=function(t){this._canvasElementClientSize=oe(t),this.canvasElement.style.width="".concat(this._canvasElementClientSize.width,"px"),this.canvasElement.style.height="".concat(this._canvasElementClientSize.height,"px"),this._invalidateBitmapSize()},i.prototype.subscribeBitmapSizeChanged=function(t){this._bitmapSizeChangedListeners.push(t)},i.prototype.unsubscribeBitmapSizeChanged=function(t){this._bitmapSizeChangedListeners=this._bitmapSizeChangedListeners.filter(function(e){return e!==t})},Object.defineProperty(i.prototype,"suggestedBitmapSize",{get:function(){return this._suggestedBitmapSize},enumerable:!1,configurable:!0}),i.prototype.subscribeSuggestedBitmapSizeChanged=function(t){this._suggestedBitmapSizeChangedListeners.push(t)},i.prototype.unsubscribeSuggestedBitmapSizeChanged=function(t){this._suggestedBitmapSizeChangedListeners=this._suggestedBitmapSizeChangedListeners.filter(function(e){return e!==t})},i.prototype.applySuggestedBitmapSize=function(){if(this._suggestedBitmapSize!==null){var t=this._suggestedBitmapSize;this._suggestedBitmapSize=null,this._resizeBitmap(t),this._emitSuggestedBitmapSizeChanged(t,this._suggestedBitmapSize)}},i.prototype._resizeBitmap=function(t){var e=this.bitmapSize;ns(e,t)||(this.canvasElement.width=t.width,this.canvasElement.height=t.height,this._emitBitmapSizeChanged(e,t))},i.prototype._emitBitmapSizeChanged=function(t,e){var n=this;this._bitmapSizeChangedListeners.forEach(function(s){return s.call(n,t,e)})},i.prototype._suggestNewBitmapSize=function(t){var e=this._suggestedBitmapSize,n=oe(this._transformBitmapSize(t,this._canvasElementClientSize)),s=ns(this.bitmapSize,n)?null:n;e===null&&s===null||e!==null&&s!==null&&ns(e,s)||(this._suggestedBitmapSize=s,this._emitSuggestedBitmapSizeChanged(e,s))},i.prototype._emitSuggestedBitmapSizeChanged=function(t,e){var n=this;this._suggestedBitmapSizeChangedListeners.forEach(function(s){return s.call(n,t,e)})},i.prototype._chooseAndInitObserver=function(){var t=this;if(!this._allowResizeObserver){this._initDevicePixelRatioObservable();return}X1().then(function(e){return e?t._initResizeObserver():t._initDevicePixelRatioObservable()})},i.prototype._initDevicePixelRatioObservable=function(){var t=this;if(this._canvasElement!==null){var e=Bp(this._canvasElement);if(e===null)throw new Error("No window is associated with the canvas");this._devicePixelRatioObservable=q1(e),this._devicePixelRatioObservable.subscribe(function(){return t._invalidateBitmapSize()}),this._invalidateBitmapSize()}},i.prototype._invalidateBitmapSize=function(){var t,e;if(this._canvasElement!==null){var n=Bp(this._canvasElement);if(n!==null){var s=(e=(t=this._devicePixelRatioObservable)===null||t===void 0?void 0:t.value)!==null&&e!==void 0?e:n.devicePixelRatio,r=this._canvasElement.getClientRects(),o=r[0]!==void 0?j1(r[0],s):oe({width:this._canvasElementClientSize.width*s,height:this._canvasElementClientSize.height*s});this._suggestNewBitmapSize(o)}}},i.prototype._initResizeObserver=function(){var t=this;this._canvasElement!==null&&(this._canvasElementResizeObserver=new ResizeObserver(function(e){var n=e.find(function(o){return o.target===t._canvasElement});if(!(!n||!n.devicePixelContentBoxSize||!n.devicePixelContentBoxSize[0])){var s=n.devicePixelContentBoxSize[0],r=oe({width:s.inlineSize,height:s.blockSize});t._suggestNewBitmapSize(r)}}),this._canvasElementResizeObserver.observe(this._canvasElement,{box:"device-pixel-content-box"}))},i})();function Y1(i,t){return new K1(i,t.transform,t.options)}function Bp(i){return i.ownerDocument.defaultView}function X1(){return new Promise(function(i){var t=new ResizeObserver(function(e){i(e.every(function(n){return"devicePixelContentBoxSize"in n})),t.disconnect()});t.observe(document.body,{box:"device-pixel-content-box"})}).catch(function(){return!1})}function j1(i,t){return oe({width:Math.round(i.left*t+i.width*t)-Math.round(i.left*t),height:Math.round(i.top*t+i.height*t)-Math.round(i.top*t)})}var Z1=(function(){function i(t,e,n){if(e.width===0||e.height===0)throw new TypeError("Rendering target could only be created on a media with positive width and height");if(this._mediaSize=e,n.width===0||n.height===0)throw new TypeError("Rendering target could only be created using a bitmap with positive integer width and height");this._bitmapSize=n,this._context=t}return i.prototype.useMediaCoordinateSpace=function(t){try{return this._context.save(),this._context.setTransform(1,0,0,1,0,0),this._context.scale(this._horizontalPixelRatio,this._verticalPixelRatio),t({context:this._context,mediaSize:this._mediaSize})}finally{this._context.restore()}},i.prototype.useBitmapCoordinateSpace=function(t){try{return this._context.save(),this._context.setTransform(1,0,0,1,0,0),t({context:this._context,mediaSize:this._mediaSize,bitmapSize:this._bitmapSize,horizontalPixelRatio:this._horizontalPixelRatio,verticalPixelRatio:this._verticalPixelRatio})}finally{this._context.restore()}},Object.defineProperty(i.prototype,"_horizontalPixelRatio",{get:function(){return this._bitmapSize.width/this._mediaSize.width},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"_verticalPixelRatio",{get:function(){return this._bitmapSize.height/this._mediaSize.height},enumerable:!1,configurable:!0}),i})();function ls(i,t){var e=i.canvasElementClientSize;if(e.width===0||e.height===0)return null;var n=i.bitmapSize;if(n.width===0||n.height===0)return null;var s=i.canvasElement.getContext("2d",t);return s===null?null:new Z1(s,e,n)}/*!
 * @license
 * TradingView Lightweight Charts™ v5.2.1
 * Copyright (c) 2026 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */const D0={title:"",visible:!0,hitTestTolerance:3,lastValueVisible:!0,priceLineVisible:!0,priceLineSource:0,priceLineWidth:1,priceLineColor:"",priceLineStyle:2,baseLineVisible:!0,baseLineWidth:1,baseLineColor:"#B2B5BE",baseLineStyle:0,priceFormat:{type:"price",precision:2,minMove:.01}};var Np,Yr;function cs(i,t){const e=(function(n,s){switch(n){case 0:default:return[];case 1:return[s,s];case 2:return[2*s,2*s];case 3:return[6*s,6*s];case 4:return[s,4*s]}})(t,i.lineWidth);return i.setLineDash(e),e}function U0(i,t,e,n){i.beginPath();const s=i.lineWidth%2?.5:0;i.moveTo(e,t+s),i.lineTo(n,t+s),i.stroke()}function Me(i,t){if(!i)throw new Error("Assertion failed"+(t?": "+t:""))}function qe(i){if(i===void 0)throw new Error("Value is undefined");return i}function ut(i){if(i===null)throw new Error("Value is null");return i}function Ii(i){return ut(qe(i))}(function(i){i[i.Simple=0]="Simple",i[i.WithSteps=1]="WithSteps",i[i.Curved=2]="Curved"})(Np||(Np={})),(function(i){i[i.Solid=0]="Solid",i[i.Dotted=1]="Dotted",i[i.Dashed=2]="Dashed",i[i.LargeDashed=3]="LargeDashed",i[i.SparseDotted=4]="SparseDotted"})(Yr||(Yr={}));class fe{constructor(){this.t=[]}i(t,e,n){const s={h:t,l:e,o:n===!0};this.t.push(s)}_(t){const e=this.t.findIndex((n=>t===n.h));e>-1&&this.t.splice(e,1)}u(t){this.t=this.t.filter((e=>e.l!==t))}p(t,e,n){const s=[...this.t];this.t=this.t.filter((r=>!r.o)),s.forEach((r=>r.h(t,e,n)))}v(){return this.t.length>0}m(){this.t=[]}}function rn(i,...t){for(const e of t)for(const n in e)e[n]!==void 0&&Object.prototype.hasOwnProperty.call(e,n)&&!["__proto__","constructor","prototype"].includes(n)&&(typeof e[n]!="object"||i[n]===void 0||Array.isArray(e[n])?i[n]=e[n]:rn(i[n],e[n]));return i}function lr(i){return typeof i=="number"&&isFinite(i)}function ho(i){return typeof i=="number"&&i%1==0}function yo(i){return typeof i=="string"}function ha(i){return typeof i=="boolean"}function ri(i){const t=i;if(!t||typeof t!="object")return t;let e,n,s;for(n in e=Array.isArray(t)?[]:{},t)t.hasOwnProperty(n)&&(s=t[n],e[n]=s&&typeof s=="object"?ri(s):s);return e}function Fp(i){return i!==null}function uo(i){return i===null?void 0:i}const B0="-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";function Ka(i,t,e){return t===void 0&&(t=B0),`${e=e!==void 0?`${e} `:""}${i}px ${t}`}class J1{constructor(t){this.M={S:1,C:5,P:NaN,k:"",T:"",R:"",D:"",I:0,V:0,B:0,A:0,L:0},this.O=t}N(){const t=this.M,e=this.F(),n=this.W();return t.P===e&&t.T===n||(t.P=e,t.T=n,t.k=Ka(e,n),t.A=2.5/12*e,t.I=t.A,t.V=e/12*t.C,t.B=e/12*t.C,t.L=0),t.R=this.H(),t.D=this.U(),this.M}H(){return this.O.N().layout.textColor}U(){return this.O.$()}F(){return this.O.N().layout.fontSize}W(){return this.O.N().layout.fontFamily}}function Ec(i){return i<0?0:i>255?255:Math.round(i)||0}function kp(i){return .199*i[0]+.687*i[1]+.114*i[2]}class tC{constructor(t,e){this.j=new Map,this.q=t,e&&(this.j=e)}Y(t,e){if(t==="transparent")return t;const n=this.K(t),s=n[3];return`rgba(${n[0]}, ${n[1]}, ${n[2]}, ${e*s})`}G(t){const e=this.K(t);return{Z:`rgb(${e[0]}, ${e[1]}, ${e[2]})`,X:kp(e)>160?"black":"white"}}J(t){return kp(this.K(t))}tt(t,e,n){const[s,r,o,a]=this.K(t),[l,c,h,u]=this.K(e),d=[Ec(s+n*(l-s)),Ec(r+n*(c-r)),Ec(o+n*(h-o)),(f=a+n*(u-a),f<=0||f>1?Math.min(Math.max(f,0),1):Math.round(1e4*f)/1e4)];var f;return`rgba(${d[0]}, ${d[1]}, ${d[2]}, ${d[3]})`}K(t){const e=this.j.get(t);if(e)return e;const n=(function(o){const a=document.createElement("div");a.style.display="none",document.body.appendChild(a),a.style.color=o;const l=window.getComputedStyle(a).color;return document.body.removeChild(a),l})(t),s=n.match(/^rgba?\s*\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)$/);if(!s){if(this.q.length)for(const o of this.q){const a=o(t);if(a)return this.j.set(t,a),a}throw new Error(`Failed to parse color: ${t}`)}const r=[parseInt(s[1],10),parseInt(s[2],10),parseInt(s[3],10),s[4]?parseFloat(s[4]):1];return this.j.set(t,r),r}}class eC{constructor(){this.it=[]}nt(t){this.it=t}st(t,e,n){this.it.forEach((s=>{s.st(t,e,n)}))}}class Pi{st(t,e,n){t.useBitmapCoordinateSpace((s=>this.et(s,e,n)))}}class nC extends Pi{constructor(){super(...arguments),this.rt=null}ht(t){this.rt=t}et({context:t,horizontalPixelRatio:e,verticalPixelRatio:n}){if(this.rt===null||this.rt.lt===null)return;const s=this.rt.lt,r=this.rt,o=Math.max(1,Math.floor(e))%2/2,a=l=>{t.beginPath();for(let c=s.to-1;c>=s.from;--c){const h=r.ot[c],u=Math.round(h._t*e)+o,d=h.ut*n,f=l*n+o;t.moveTo(u,d),t.arc(u,d,f,0,2*Math.PI)}t.fill()};r.ct>0&&(t.fillStyle=r.dt,a(r.ft+r.ct)),t.fillStyle=r.vt,a(r.ft)}}function iC(){return{ot:[{_t:0,ut:0,wt:0,Mt:0}],vt:"",dt:"",ft:0,ct:0,lt:null}}const sC={from:0,to:1};class rC{constructor(t,e,n){this.gt=new eC,this.bt=[],this.St=[],this.xt=!0,this.O=t,this.Ct=e,this.yt=n,this.gt.nt(this.bt)}Pt(t){this.kt(),this.xt=!0}Tt(){return this.xt&&(this.Rt(),this.xt=!1),this.gt}kt(){const t=this.yt.Dt();t.length!==this.bt.length&&(this.St=t.map(iC),this.bt=this.St.map((e=>{const n=new nC;return n.ht(e),n})),this.gt.nt(this.bt))}Rt(){const t=this.Ct.N().mode===2||!this.Ct.It(),e=this.yt.Vt(),n=this.Ct.Bt(),s=this.O.Et();this.kt(),e.forEach(((r,o)=>{const a=this.St[o],l=r.At(n),c=r.Lt();!t&&l!==null&&r.It()&&c!==null?(a.vt=l.zt,a.ft=l.ft,a.ct=l.Ot,a.ot[0].Mt=l.Mt,a.ot[0].ut=r.Ft().Nt(l.Mt,c.Wt),a.dt=l.Ht??this.O.Ut(a.ot[0].ut/r.Ft().$t()),a.ot[0].wt=n,a.ot[0]._t=s.jt(n),a.lt=sC):a.lt=null}))}}class oC extends Pi{constructor(t){super(),this.qt=t}et({context:t,bitmapSize:e,horizontalPixelRatio:n,verticalPixelRatio:s}){if(this.qt===null)return;const r=this.qt.Yt.It,o=this.qt.Kt.It;if(!r&&!o)return;const a=Math.round(this.qt._t*n),l=Math.round(this.qt.ut*s);t.lineCap="butt",r&&a>=0&&(t.lineWidth=Math.floor(this.qt.Yt.ct*n),t.strokeStyle=this.qt.Yt.R,t.fillStyle=this.qt.Yt.R,cs(t,this.qt.Yt.Gt),(function(c,h,u,d){c.beginPath();const f=c.lineWidth%2?.5:0;c.moveTo(h+f,u),c.lineTo(h+f,d),c.stroke()})(t,a,0,e.height)),o&&l>=0&&(t.lineWidth=Math.floor(this.qt.Kt.ct*s),t.strokeStyle=this.qt.Kt.R,t.fillStyle=this.qt.Kt.R,cs(t,this.qt.Kt.Gt),U0(t,l,0,e.width))}}let aC=class{constructor(t,e){this.xt=!0,this.Zt={Yt:{ct:1,Gt:0,R:"",It:!1},Kt:{ct:1,Gt:0,R:"",It:!1},_t:0,ut:0},this.Xt=new oC(this.Zt),this.Jt=t,this.yt=e}Pt(){this.xt=!0}Tt(t){return this.xt&&(this.Rt(),this.xt=!1),this.Xt}Rt(){const t=this.Jt.It(),e=this.yt.Qt().N().crosshair,n=this.Zt;if(e.mode===2)return n.Kt.It=!1,void(n.Yt.It=!1);n.Kt.It=t&&this.Jt.ti(this.yt),n.Yt.It=t&&this.Jt.ii(),n.Kt.ct=e.horzLine.width,n.Kt.Gt=e.horzLine.style,n.Kt.R=e.horzLine.color,n.Yt.ct=e.vertLine.width,n.Yt.Gt=e.vertLine.style,n.Yt.R=e.vertLine.color,n._t=this.Jt.ni(),n.ut=this.Jt.si()}};function lC(i,t,e,n,s,r){i.fillRect(t+r,e,n-2*r,r),i.fillRect(t+r,e+s-r,n-2*r,r),i.fillRect(t,e,r,s),i.fillRect(t+n-r,e,r,s)}function dl(i,t,e,n,s,r){i.save(),i.globalCompositeOperation="copy",i.fillStyle=r,i.fillRect(t,e,n,s),i.restore()}function Op(i,t,e,n,s,r){i.beginPath(),i.roundRect?i.roundRect(t,e,n,s,r):(i.lineTo(t+n-r[1],e),r[1]!==0&&i.arcTo(t+n,e,t+n,e+r[1],r[1]),i.lineTo(t+n,e+s-r[2]),r[2]!==0&&i.arcTo(t+n,e+s,t+n-r[2],e+s,r[2]),i.lineTo(t+r[3],e+s),r[3]!==0&&i.arcTo(t,e+s,t,e+s-r[3],r[3]),i.lineTo(t,e+r[0]),r[0]!==0&&i.arcTo(t,e,t+r[0],e,r[0]))}function zp(i,t,e,n,s,r,o=0,a=[0,0,0,0],l=""){if(i.save(),!o||!l||l===r)return Op(i,t,e,n,s,a),i.fillStyle=r,i.fill(),void i.restore();const c=o/2;var h;Op(i,t+c,e+c,n-o,s-o,(h=-c,a.map((u=>u===0?u:u+h)))),r!=="transparent"&&(i.fillStyle=r,i.fill()),l!=="transparent"&&(i.lineWidth=o,i.strokeStyle=l,i.closePath(),i.stroke()),i.restore()}function N0(i,t,e,n,s,r,o){i.save(),i.globalCompositeOperation="copy";const a=i.createLinearGradient(0,0,0,s);a.addColorStop(0,r),a.addColorStop(1,o),i.fillStyle=a,i.fillRect(t,e,n,s),i.restore()}class Hp{constructor(t,e){this.ht(t,e)}ht(t,e){this.qt=t,this.ei=e}$t(t,e){return this.qt.It?t.P+t.A+t.I:0}st(t,e,n,s){if(!this.qt.It||this.qt.ri.length===0)return;const r=this.qt.R,o=this.ei.Z,a=t.useBitmapCoordinateSpace((l=>{const c=l.context;c.font=e.k;const h=this.hi(l,e,n,s),u=h.ai;return h.li?zp(c,u.oi,u._i,u.ui,u.ci,o,u.di,[u.ft,0,0,u.ft],o):zp(c,u.fi,u._i,u.ui,u.ci,o,u.di,[0,u.ft,u.ft,0],o),this.qt.pi&&(c.fillStyle=r,c.fillRect(u.fi,u.mi,u.wi-u.fi,u.Mi)),this.qt.gi&&(c.fillStyle=e.D,c.fillRect(h.li?u.bi-u.di:0,u._i,u.di,u.Si-u._i)),h}));t.useMediaCoordinateSpace((({context:l})=>{const c=a.xi;l.font=e.k,l.textAlign=a.li?"right":"left",l.textBaseline="middle",l.fillStyle=r,l.fillText(this.qt.ri,c.Ci,(c._i+c.Si)/2+c.yi)}))}hi(t,e,n,s){const{context:r,bitmapSize:o,mediaSize:a,horizontalPixelRatio:l,verticalPixelRatio:c}=t,h=this.qt.pi||!this.qt.Pi?e.C:0,u=this.qt.ki?e.S:0,d=e.A+this.ei.Ti,f=e.I+this.ei.Ri,p=e.V,v=e.B,g=this.qt.ri,m=e.P,x=n.Di(r,g),_=Math.ceil(n.Ii(r,g)),y=m+d+f,R=e.S+p+v+_+h,A=Math.max(1,Math.floor(c));let T=Math.round(y*c);T%2!=A%2&&(T+=1);const I=u>0?Math.max(1,Math.floor(u*l)):0,w=Math.round(R*l),b=Math.round(h*l),S=this.ei.Vi??this.ei.Bi??this.ei.Ei,U=Math.round(S*c)-Math.floor(.5*c),P=Math.floor(U+A/2-T/2),W=P+T,Z=s==="right",D=Z?a.width-u:u,nt=Z?o.width-I:I;let q,lt,K;return Z?(q=nt-w,lt=nt-b,K=D-h-p-u):(q=nt+w,lt=nt+b,K=D+h+p),{li:Z,ai:{_i:P,mi:U,Si:W,ui:w,ci:T,ft:2*l,di:I,oi:q,fi:nt,wi:lt,Mi:A,bi:o.width},xi:{_i:P/c,Si:W/c,Ci:K,yi:x}}}}class fl{constructor(t){this.Ai={Ei:0,Z:"#000",Ri:0,Ti:0},this.Li={ri:"",It:!1,pi:!0,Pi:!1,Ht:"",R:"#FFF",gi:!1,ki:!1},this.zi={ri:"",It:!1,pi:!1,Pi:!0,Ht:"",R:"#FFF",gi:!0,ki:!0},this.xt=!0,this.Oi=new(t||Hp)(this.Li,this.Ai),this.Ni=new(t||Hp)(this.zi,this.Ai)}ri(){return this.Fi(),this.Li.ri}Ei(){return this.Fi(),this.Ai.Ei}Pt(){this.xt=!0}$t(t,e=!1){return Math.max(this.Oi.$t(t,e),this.Ni.$t(t,e))}Wi(){return this.Ai.Vi??null}Hi(){return this.Ai.Vi??this.Ai.Bi??this.Ei()}Ui(t){this.Ai.Bi=t??void 0}$i(){return this.Fi(),this.Li.It||this.zi.It}ji(){return this.Fi(),this.Li.It}Tt(t){return this.Fi(),this.Li.pi=this.Li.pi&&t.N().ticksVisible,this.zi.pi=this.zi.pi&&t.N().ticksVisible,this.Oi.ht(this.Li,this.Ai),this.Ni.ht(this.zi,this.Ai),this.Oi}qi(){return this.Fi(),this.Oi.ht(this.Li,this.Ai),this.Ni.ht(this.zi,this.Ai),this.Ni}Fi(){this.xt&&(this.Li.pi=!0,this.zi.pi=!1,this.Yi(this.Li,this.zi,this.Ai))}}class cC extends fl{constructor(t,e,n){super(),this.Jt=t,this.Ki=e,this.Gi=n}Yi(t,e,n){if(t.It=!1,this.Jt.N().mode===2)return;const s=this.Jt.N().horzLine;if(!s.labelVisible)return;const r=this.Ki.Lt();if(!this.Jt.It()||this.Ki.Zi()||r===null)return;const o=this.Ki.Xi().G(s.labelBackgroundColor);n.Z=o.Z,t.R=o.X;const a=2/12*this.Ki.P();n.Ti=a,n.Ri=a;const l=this.Gi(this.Ki);n.Ei=l.Ei,t.ri=this.Ki.Ji(l.Mt,r),t.It=!0}}const hC=/[1-9]/g;class F0{constructor(){this.qt=null}ht(t){this.qt=t}st(t,e){if(this.qt===null||this.qt.It===!1||this.qt.ri.length===0)return;const n=t.useMediaCoordinateSpace((({context:d})=>(d.font=e.k,Math.round(e.Qi.Ii(d,ut(this.qt).ri,hC)))));if(n<=0)return;const s=e.tn,r=n+2*s,o=r/2,a=this.qt.nn;let l=this.qt.Ei,c=Math.floor(l-o)+.5;c<0?(l+=Math.abs(0-c),c=Math.floor(l-o)+.5):c+r>a&&(l-=Math.abs(a-(c+r)),c=Math.floor(l-o)+.5);const h=c+r,u=Math.ceil(0+e.S+e.C+e.A+e.P+e.I);t.useBitmapCoordinateSpace((({context:d,horizontalPixelRatio:f,verticalPixelRatio:p})=>{const v=ut(this.qt);d.fillStyle=v.Z;const g=Math.round(c*f),m=Math.round(0*p),x=Math.round(h*f),_=Math.round(u*p),y=Math.round(2*f);if(d.beginPath(),d.moveTo(g,m),d.lineTo(g,_-y),d.arcTo(g,_,g+y,_,y),d.lineTo(x-y,_),d.arcTo(x,_,x,_-y,y),d.lineTo(x,m),d.fill(),v.pi){const R=Math.round(v.Ei*f),A=m,T=Math.round((A+e.C)*p);d.fillStyle=v.R;const I=Math.max(1,Math.floor(f)),w=Math.floor(.5*f);d.fillRect(R-w,A,I,T-A)}})),t.useMediaCoordinateSpace((({context:d})=>{const f=ut(this.qt),p=0+e.S+e.C+e.A+e.P/2;d.font=e.k,d.textAlign="left",d.textBaseline="middle",d.fillStyle=f.R;const v=e.Qi.Di(d,"Apr0");d.translate(c+s,p+v),d.fillText(f.ri,0,0)}))}}class uC{constructor(t,e,n){this.xt=!0,this.Xt=new F0,this.Zt={It:!1,Z:"#4c525e",R:"white",ri:"",nn:0,Ei:NaN,pi:!0},this.Ct=t,this.sn=e,this.Gi=n}Pt(){this.xt=!0}Tt(){return this.xt&&(this.Rt(),this.xt=!1),this.Xt.ht(this.Zt),this.Xt}Rt(){const t=this.Zt;if(t.It=!1,this.Ct.N().mode===2)return;const e=this.Ct.N().vertLine;if(!e.labelVisible)return;const n=this.sn.Et();if(n.Zi())return;t.nn=n.nn();const s=this.Gi();if(s===null)return;t.Ei=s.Ei;const r=n.en(this.Ct.Bt());t.ri=n.rn(ut(r)),t.It=!0;const o=this.sn.Xi().G(e.labelBackgroundColor);t.Z=o.Z,t.R=o.X,t.pi=n.N().ticksVisible}}class k0{constructor(){this.hn=null,this.an=0}ln(){return this.an}_n(t){this.an=t}Ft(){return this.hn}un(t){this.hn=t}cn(t){return[]}dn(){return[]}It(){return!0}}var Vh;(function(i){i[i.Normal=0]="Normal",i[i.Magnet=1]="Magnet",i[i.Hidden=2]="Hidden",i[i.MagnetOHLC=3]="MagnetOHLC"})(Vh||(Vh={}));let dC=class extends k0{constructor(t,e){super(),this.yt=null,this.fn=NaN,this.pn=0,this.vn=!1,this.mn=new Map,this.wn=!1,this.Mn=new WeakMap,this.gn=new WeakMap,this.bn=NaN,this.Sn=NaN,this.xn=NaN,this.Cn=NaN,this.sn=t,this.yn=e,this.Pn=((s,r)=>o=>{const a=r(),l=s();if(o===ut(this.yt).kn())return{Mt:l,Ei:a};{const c=ut(o.Lt());return{Mt:o.Tn(a,c),Ei:a}}})((()=>this.fn),(()=>this.Sn));const n=((s,r)=>()=>{const o=this.sn.Et().Rn(s()),a=r();return o&&Number.isFinite(a)?{wt:o,Ei:a}:null})((()=>this.pn),(()=>this.ni()));this.Dn=new uC(this,t,n)}N(){return this.yn}In(t,e){this.xn=t,this.Cn=e}Vn(){this.xn=NaN,this.Cn=NaN}Bn(){return this.xn}En(){return this.Cn}An(t,e,n){this.wn||(this.wn=!0),this.vn=!0,this.Ln(t,e,n)}Bt(){return this.pn}ni(){return this.bn}si(){return this.Sn}It(){return this.vn}zn(){this.vn=!1,this.On(),this.fn=NaN,this.bn=NaN,this.Sn=NaN,this.yt=null,this.Vn(),this.Nn()}Fn(t){if(!this.yn.doNotSnapToHiddenSeriesIndices)return t;const e=this.sn,n=e.Et();let s=null,r=null;for(const c of e.Wn()){const h=c.Un().Hn(t,-1);if(h){if(h.$n===t)return t;(s===null||h.$n>s)&&(s=h.$n)}const u=c.Un().Hn(t,1);if(u){if(u.$n===t)return t;(r===null||u.$n<r)&&(r=u.$n)}}const o=[s,r].filter(Fp);if(o.length===0)return t;const a=n.jt(t),l=o.map((c=>Math.abs(a-n.jt(c))));return o[l.indexOf(Math.min(...l))]}jn(t){let e=this.Mn.get(t);e||(e=new aC(this,t),this.Mn.set(t,e));let n=this.gn.get(t);return n||(n=new rC(this.sn,this,t),this.gn.set(t,n)),[e,n]}ti(t){return t===this.yt&&this.yn.horzLine.visible}ii(){return this.yn.vertLine.visible}qn(t,e){this.vn&&this.yt===t||this.mn.clear();const n=[];return this.yt===t&&n.push(this.Yn(this.mn,e,this.Pn)),n}dn(){return this.vn?[this.Dn]:[]}Kn(){return this.yt}Nn(){this.sn.Gn().forEach((t=>{this.Mn.get(t)?.Pt(),this.gn.get(t)?.Pt()})),this.mn.forEach((t=>t.Pt())),this.Dn.Pt()}Zn(t){return t&&!t.kn().Zi()?t.kn():null}Ln(t,e,n){this.Xn(t,e,n)&&this.Nn()}Xn(t,e,n){const s=this.bn,r=this.Sn,o=this.fn,a=this.pn,l=this.yt,c=this.Zn(n);this.pn=t,this.bn=isNaN(t)?NaN:this.sn.Et().jt(t),this.yt=n;const h=c!==null?c.Lt():null;return c!==null&&h!==null?(this.fn=e,this.Sn=c.Nt(e,h)):(this.fn=NaN,this.Sn=NaN),s!==this.bn||r!==this.Sn||a!==this.pn||o!==this.fn||l!==this.yt}On(){const t=this.sn.Jn().map((n=>n.Un().Qn())).filter(Fp),e=t.length===0?null:Math.max(...t);this.pn=e!==null?e:NaN}Yn(t,e,n){let s=t.get(e);return s===void 0&&(s=new cC(this,e,n),t.set(e,s)),s}};function pl(i){return i==="left"||i==="right"}class we{constructor(t){this.ts=new Map,this.ns=[],this.ss=t}es(t,e){const n=(function(s,r){return s===void 0?r:{rs:Math.max(s.rs,r.rs),hs:s.hs||r.hs}})(this.ts.get(t),e);this.ts.set(t,n)}ls(){return this.ss}_s(t){const e=this.ts.get(t);return e===void 0?{rs:this.ss}:{rs:Math.max(this.ss,e.rs),hs:e.hs}}us(){this.cs(),this.ns=[{ds:0}]}fs(t){this.cs(),this.ns=[{ds:1,Wt:t}]}ps(t){this.vs(),this.ns.push({ds:5,Wt:t})}cs(){this.vs(),this.ns.push({ds:6})}ws(){this.cs(),this.ns=[{ds:4}]}Ms(t){this.cs(),this.ns.push({ds:2,Wt:t})}gs(t){this.cs(),this.ns.push({ds:3,Wt:t})}bs(){return this.ns}Ss(t){for(const e of t.ns)this.xs(e);this.ss=Math.max(this.ss,t.ss),t.ts.forEach(((e,n)=>{this.es(n,e)}))}static Cs(){return new we(2)}static ys(){return new we(3)}xs(t){switch(t.ds){case 0:this.us();break;case 1:this.fs(t.Wt);break;case 2:this.Ms(t.Wt);break;case 3:this.gs(t.Wt);break;case 4:this.ws();break;case 5:this.ps(t.Wt);break;case 6:this.vs()}}vs(){const t=this.ns.findIndex((e=>e.ds===5));t!==-1&&this.ns.splice(t,1)}}class O0{formatTickmarks(t){return t.map((e=>this.format(e)))}}const Vp=".";function oi(i,t){if(!lr(i))return"n/a";if(!ho(t))throw new TypeError("invalid length");if(t<0||t>16)throw new TypeError("invalid length");return t===0?i.toString():("0000000000000000"+i.toString()).slice(-t)}class ml extends O0{constructor(t,e){if(super(),e||(e=1),lr(t)&&ho(t)||(t=100),t<0)throw new TypeError("invalid base");this.Ki=t,this.Ps=e,this.ks()}format(t){const e=t<0?"−":"";return t=Math.abs(t),e+this.Ts(t)}ks(){if(this.Rs=0,this.Ki>0&&this.Ps>0){let t=this.Ki;for(;t>1;)t/=10,this.Rs++}}Ts(t){const e=this.Ki/this.Ps;let n=Math.floor(t),s="";const r=this.Rs!==void 0?this.Rs:NaN;if(e>1){let o=+(Math.round(t*e)-n*e).toFixed(this.Rs);o>=e&&(o-=e,n+=1),s=Vp+oi(+o.toFixed(this.Rs)*this.Ps,r)}else n=Math.round(n*e)/e,r>0&&(s=Vp+oi(0,r));return n.toFixed(0)+s}}class z0 extends ml{constructor(t=100){super(t)}format(t){return`${super.format(t)}%`}}class fC extends O0{constructor(t){super(),this.Ds=t}format(t){let e="";return t<0&&(e="-",t=-t),t<995?e+this.Is(t):t<999995?e+this.Is(t/1e3)+"K":t<999999995?(t=1e3*Math.round(t/1e3),e+this.Is(t/1e6)+"M"):(t=1e6*Math.round(t/1e6),e+this.Is(t/1e9)+"B")}Is(t){let e;const n=Math.pow(10,this.Ds);return e=(t=Math.round(t*n)/n)>=1e-15&&t<1?t.toFixed(this.Ds).replace(/\.?0+$/,""):String(t),e.replace(/(\.[1-9]*)0+$/,((s,r)=>r))}}const pC=/[2-9]/g;class Ya{constructor(t=50){this.Vs=0,this.Bs=1,this.Es=1,this.As={},this.Ls=new Map,this.zs=t}Os(){this.Vs=0,this.Ls.clear(),this.Bs=1,this.Es=1,this.As={}}Ii(t,e,n){return this.Ns(t,e,n).width}Di(t,e,n){const s=this.Ns(t,e,n);return((s.actualBoundingBoxAscent||0)-(s.actualBoundingBoxDescent||0))/2}Ns(t,e,n){const s=n||pC,r=String(e).replace(s,"0");if(this.Ls.has(r))return qe(this.Ls.get(r)).Fs;if(this.Vs===this.zs){const a=this.As[this.Es];delete this.As[this.Es],this.Ls.delete(a),this.Es++,this.Vs--}t.save(),t.textBaseline="middle";const o=t.measureText(r);return t.restore(),o.width===0&&e.length||(this.Ls.set(r,{Fs:o,Ws:this.Bs}),this.As[this.Bs]=r,this.Vs++,this.Bs++),o}}class mC{constructor(t){this.Hs=null,this.M=null,this.Us="right",this.$s=t}js(t,e,n){this.Hs=t,this.M=e,this.Us=n}st(t){this.M!==null&&this.Hs!==null&&this.Hs.st(t,this.M,this.$s,this.Us)}}class H0{constructor(t,e,n){this.qs=t,this.$s=new Ya(50),this.Ys=e,this.O=n,this.F=-1,this.Xt=new mC(this.$s)}Tt(){const t=this.O.Ks(this.Ys);if(t===null)return null;const e=t.Gs(this.Ys)?t.Zs():this.Ys.Ft();if(e===null)return null;const n=t.Xs(e);if(n==="overlay")return null;const s=this.O.Js();return s.P!==this.F&&(this.F=s.P,this.$s.Os()),this.Xt.js(this.qs.qi(),s,n),this.Xt}}class gC extends Pi{constructor(){super(...arguments),this.qt=null}ht(t){this.qt=t}Qs(t,e){if(!this.qt?.It)return null;const{ut:n,ct:s,te:r}=this.qt;return e>=n-s-7&&e<=n+s+7?{ie:this.qt,ne:Math.abs(e-n),se:2,ee:"price-line",te:r}:null}et({context:t,bitmapSize:e,horizontalPixelRatio:n,verticalPixelRatio:s}){if(this.qt===null||this.qt.It===!1)return;const r=Math.round(this.qt.ut*s);r<0||r>e.height||(t.lineCap="butt",t.strokeStyle=this.qt.R,t.lineWidth=Math.floor(this.qt.ct*n),cs(t,this.qt.Gt),U0(t,r,0,e.width))}}class Ku{constructor(t){this.re={ut:0,R:"rgba(0, 0, 0, 0)",ct:1,Gt:0,It:!1},this.he=new gC,this.xt=!0,this.ae=t,this.le=t.Qt(),this.he.ht(this.re)}Pt(){this.xt=!0}Tt(){return this.ae.It()?(this.xt&&(this.oe(),this.xt=!1),this.he):null}}class vC extends Ku{constructor(t){super(t)}oe(){this.re.It=!1;const t=this.ae.Ft(),e=t._e()._e;if(e!==2&&e!==3)return;const n=this.ae.N();if(!n.baseLineVisible||!this.ae.It())return;const s=this.ae.Lt();s!==null&&(this.re.It=!0,this.re.ut=t.Nt(s.Wt,s.Wt),this.re.R=n.baseLineColor,this.re.ct=n.baseLineWidth,this.re.Gt=n.baseLineStyle)}}class _C extends Pi{constructor(){super(...arguments),this.qt=null}ht(t){this.qt=t}ue(){return this.qt}et({context:t,horizontalPixelRatio:e,verticalPixelRatio:n}){const s=this.qt;if(s===null)return;const r=Math.max(1,Math.floor(e)),o=r%2/2,a=Math.round(s.ce.x*e)+o,l=s.ce.y*n;t.fillStyle=s.de,t.beginPath();const c=Math.max(2,1.5*s.fe)*e;t.arc(a,l,c,0,2*Math.PI,!1),t.fill(),t.fillStyle=s.pe,t.beginPath(),t.arc(a,l,s.ft*e,0,2*Math.PI,!1),t.fill(),t.lineWidth=r,t.strokeStyle=s.ve,t.beginPath(),t.arc(a,l,s.ft*e+r/2,0,2*Math.PI,!1),t.stroke()}}const yC=[{me:0,we:.25,Me:4,ge:10,be:.25,Se:0,xe:.4,Ce:.8},{me:.25,we:.525,Me:10,ge:14,be:0,Se:0,xe:.8,Ce:0},{me:.525,we:1,Me:14,ge:14,be:0,Se:0,xe:0,Ce:0}];class xC{constructor(t){this.Xt=new _C,this.xt=!0,this.ye=!0,this.Pe=performance.now(),this.ke=this.Pe-1,this.Te=t}Re(){this.ke=this.Pe-1,this.Pt()}De(){if(this.Pt(),this.Te.N().lastPriceAnimation===2){const t=performance.now(),e=this.ke-t;if(e>0)return void(e<650&&(this.ke+=2600));this.Pe=t,this.ke=t+2600}}Pt(){this.xt=!0}Ie(){this.ye=!0}It(){return this.Te.N().lastPriceAnimation!==0}Ve(){switch(this.Te.N().lastPriceAnimation){case 0:return!1;case 1:return!0;case 2:return performance.now()<=this.ke}}Tt(){return this.xt?(this.Rt(),this.xt=!1,this.ye=!1):this.ye&&(this.Be(),this.ye=!1),this.Xt}Rt(){this.Xt.ht(null);const t=this.Te.Qt().Et(),e=t.Ee(),n=this.Te.Lt();if(e===null||n===null)return;const s=this.Te.Ae(!0);if(s.Le||!e.ze(s.$n))return;const r={x:t.jt(s.$n),y:this.Te.Ft().Nt(s.Mt,n.Wt)},o=s.R,a=this.Te.N().lineWidth,l=this.Oe(this.Ne(),o);this.Xt.ht({de:o,fe:a,pe:l.pe,ve:l.ve,ft:l.ft,ce:r})}Be(){const t=this.Xt.ue();if(t!==null){const e=this.Oe(this.Ne(),t.de);t.pe=e.pe,t.ve=e.ve,t.ft=e.ft}}Ne(){return this.Ve()?performance.now()-this.Pe:2599}Fe(t,e,n,s){const r=n+(s-n)*e;return this.Te.Qt().Xi().Y(t,r)}Oe(t,e){const n=t%2600/2600;let s;for(const c of yC)if(n>=c.me&&n<=c.we){s=c;break}Me(s!==void 0,"Last price animation internal logic error");const r=(n-s.me)/(s.we-s.me);return{pe:this.Fe(e,r,s.be,s.Se),ve:this.Fe(e,r,s.xe,s.Ce),ft:(o=r,a=s.Me,l=s.ge,a+(l-a)*o)};var o,a,l}}class bC extends Ku{constructor(t){super(t)}oe(){const t=this.re;t.It=!1;const e=this.ae.N();if(!e.priceLineVisible||!this.ae.It())return;const n=this.ae.Ae(e.priceLineSource===0);n.Le||(t.It=!0,t.ut=n.Ei,t.R=this.ae.We(n.R),t.ct=e.priceLineWidth,t.Gt=e.priceLineStyle)}}class wC extends fl{constructor(t){super(),this.Jt=t}Yi(t,e,n){t.It=!1,e.It=!1;const s=this.Jt;if(!s.It())return;const r=s.N(),o=r.lastValueVisible,a=s.He()!=="",l=r.seriesLastValueMode===0,c=s.Ae(!1);if(c.Le)return;o&&(t.ri=this.Ue(c,o,l),t.It=t.ri.length!==0),(a||l)&&(e.ri=this.$e(c,o,a,l),e.It=e.ri.length>0);const h=s.We(c.R),u=this.Jt.Qt().Xi().G(h);n.Z=u.Z,n.Ei=c.Ei,e.Ht=s.Qt().Ut(c.Ei/s.Ft().$t()),t.Ht=h,t.R=u.X,e.R=u.X}$e(t,e,n,s){let r="";const o=this.Jt.He();return n&&o.length!==0&&(r+=`${o} `),e&&s&&(r+=this.Jt.Ft().je()?t.qe:t.Ye),r.trim()}Ue(t,e,n){return e?n?this.Jt.Ft().je()?t.Ye:t.qe:t.ri:""}}function Gp(i,t,e,n){const s=Number.isFinite(t),r=Number.isFinite(e);return s&&r?i(t,e):s||r?s?t:e:n}class Ge{constructor(t,e){this.Ke=t,this.Ge=e}Ze(t){return t!==null&&this.Ke===t.Ke&&this.Ge===t.Ge}Xe(){return new Ge(this.Ke,this.Ge)}Je(){return this.Ke}Qe(){return this.Ge}tr(){return this.Ge-this.Ke}Zi(){return this.Ge===this.Ke||Number.isNaN(this.Ge)||Number.isNaN(this.Ke)}Ss(t){return t===null?this:new Ge(Gp(Math.min,this.Je(),t.Je(),-1/0),Gp(Math.max,this.Qe(),t.Qe(),1/0))}ir(t){if(!lr(t)||this.Ge-this.Ke===0)return;const e=.5*(this.Ge+this.Ke);let n=this.Ge-e,s=this.Ke-e;n*=t,s*=t,this.Ge=e+n,this.Ke=e+s}nr(t){lr(t)&&(this.Ge+=t,this.Ke+=t)}sr(){return{minValue:this.Ke,maxValue:this.Ge}}static er(t){return t===null?null:new Ge(t.minValue,t.maxValue)}}class Xa{constructor(t,e){this.rr=t,this.hr=e||null}ar(){return this.rr}lr(){return this.hr}sr(){return{priceRange:this.rr===null?null:this.rr.sr(),margins:this.hr||void 0}}static er(t){return t===null?null:new Xa(Ge.er(t.priceRange),t.margins)}}const MC=[2,4,8,16,32,64,128,256,512],SC="Custom series with conflation reducer must have a priceValueBuilder method";class EC extends Ku{constructor(t,e){super(t),this._r=e}oe(){const t=this.re;t.It=!1;const e=this._r.N();if(!this.ae.It()||!e.lineVisible)return;const n=this._r.ur();n!==null&&(t.It=!0,t.ut=n,t.R=e.color,t.ct=e.lineWidth,t.Gt=e.lineStyle,t.te=this._r.N().id)}}class AC extends fl{constructor(t,e){super(),this.Te=t,this._r=e}Yi(t,e,n){t.It=!1,e.It=!1;const s=this._r.N(),r=s.axisLabelVisible,o=s.title!=="",a=this.Te;if(!r||!a.It())return;const l=this._r.ur();if(l===null)return;o&&(e.ri=s.title,e.It=!0),e.Ht=a.Qt().Ut(l/a.Ft().$t()),t.ri=this.cr(s.price),t.It=!0;const c=this.Te.Qt().Xi().G(s.axisLabelColor||s.color);n.Z=c.Z;const h=s.axisLabelTextColor||c.X;t.R=h,e.R=h,n.Ei=l}cr(t){const e=this.Te.Lt();return e===null?"":this.Te.Ft().Ji(t,e.Wt)}}class CC{constructor(t,e){this.Te=t,this.yn=e,this.dr=new EC(t,this),this.qs=new AC(t,this),this.pr=new H0(this.qs,t,t.Qt())}vr(t){rn(this.yn,t),this.Pt(),this.Te.Qt().mr()}N(){return this.yn}wr(){return this.dr}Mr(){return this.pr}gr(){return this.qs}Pt(){this.dr.Pt(),this.qs.Pt()}ur(){const t=this.Te,e=t.Ft();if(t.Qt().Et().Zi()||e.Zi())return null;const n=t.Lt();return n===null?null:e.Nt(this.yn.price,n.Wt)}}class TC{constructor(){this.br=new WeakMap}Sr(t,e,n){const s=1/e*n;if(t>=s)return 1;const r=s/t,o=Math.pow(2,Math.floor(Math.log2(r)));return Math.min(o,512)}Cr(t,e,n,s=!1,r){if(t.length===0||e<=1)return t;const o=this.yr(e);if(o<=1)return t;const a=this.Pr(t);let l=a.kr.get(o);return l!==void 0||(l=this.Tr(t,o,n,s,r,a.kr),a.kr.set(o,l)),l}Rr(t,e,n,s,r=!1,o){if(n<1||t.length===0)return t;const a=this.Pr(t),l=a.kr.get(n);if(!l)return this.Cr(t,n,s,r,o);const c=this.Dr(t,e,n,l,r,s,o);return a.kr.set(n,c),c}yr(t){if(t<=2)return 2;for(const e of MC)if(t<=e)return e;return 512}Ir(t){if(t.length===0)return 0;const e=t[0],n=t[t.length-1];return 31*t.length+17*e.$n+13*n.$n}Tr(t,e,n,s=!1,r,o=new Map){if(e===2)return this.Vr(t,2,n,s,r);const a=e/2;let l=o.get(a);return l||(l=this.Tr(t,a,n,s,r,o),o.set(a,l)),this.Br(l,n,s,r)}Vr(t,e,n,s=!1,r){const o=this.Er(t,e,n,s,r);return this.Ar(o,s)}Br(t,e,n=!1,s){const r=this.Er(t,2,e,n,s);return this.Ar(r,n)}Er(t,e,n,s=!1,r){const o=[];for(let a=0;a<t.length;a+=e)if(t.length-a>=e){const l=this.Lr(t[a],t[a+1],n,s,r);l.zr=!1,o.push(l)}else if(o.length===0)o.push(this.Or(t[a],!0));else{const l=o[o.length-1];o[o.length-1]=this.Nr(l,t[a],n,s,r)}return o}Fr(t,e){return(t??1)+(e??1)}Lr(t,e,n,s=!1,r){if(!s||!n||!r){const c=t.Wt[1]>e.Wt[1]?t.Wt[1]:e.Wt[1],h=t.Wt[2]<e.Wt[2]?t.Wt[2]:e.Wt[2];return{Wr:t.$n,Hr:e.$n,Ur:t.wt,$r:e.wt,jr:t.Wt[0],qr:c,Yr:h,Kr:e.Wt[3],Gr:this.Fr(t.Gr,e.Gr),Zr:void 0,zr:!1}}const o=n(this.Xr(t,r),this.Xr(e,r)),a=r(o),l=a.length?a[a.length-1]:0;return{Wr:t.$n,Hr:e.$n,Ur:t.wt,$r:e.wt,jr:t.Wt[0],qr:Math.max(t.Wt[1],l),Yr:Math.min(t.Wt[2],l),Kr:l,Gr:this.Fr(t.Gr,e.Gr),Zr:o,zr:!1}}Nr(t,e,n,s=!1,r){if(!s||!n||!r)return{Wr:t.Wr,Hr:e.$n,Ur:t.Ur,$r:e.wt,jr:t.jr,qr:t.qr>e.Wt[1]?t.qr:e.Wt[1],Yr:t.Yr<e.Wt[2]?t.Yr:e.Wt[2],Kr:e.Wt[3],Gr:t.Gr+(e.Gr??1),Zr:t.Zr,zr:!1};const o=t.Zr,a=this.Xr(e,r),l=o?{data:o,index:t.Wr,originalTime:t.Ur,time:t.Ur,priceValues:r(o)}:null,c=l?n(l,a):a.data,h=l?r(c):a.priceValues,u=h.length?h[h.length-1]:0;return{Wr:t.Wr,Hr:e.$n,Ur:t.Ur,$r:e.wt,jr:t.jr,qr:Math.max(t.qr,u),Yr:Math.min(t.Yr,u),Kr:u,Gr:t.Gr+(e.Gr??1),Zr:c,zr:!1}}Jr(t,e,n,s,r,o,a=!1,l){const c=e===s?r:t[e];if(n-e==1)return this.Or(c,!0);const h=e+1===s?r:t[e+1];let u=this.Lr(c,h,o,a,l);for(let d=e+2;d<n;d++){const f=d===s?r:t[d];u=this.Nr(u,f,o,a,l)}return u}Xr(t,e){const n=t.ue??{};return{data:t.ue,index:t.$n,originalTime:t.Qr,time:t.wt,priceValues:e(n)}}th(t,e=!1){const n=e===!0,s=!!t.Zr;return{$n:t.Wr,wt:t.Ur,Qr:t.Ur,Wt:[n?t.Kr:t.jr,t.qr,t.Yr,t.Kr],Gr:t.Gr,ue:n?s?t.Zr:{wt:t.Ur}:void 0}}Ar(t,e=!1){return t.map((n=>this.th(n,e)))}Dr(t,e,n,s,r=!1,o,a){if(s.length===0)return s;const l=t.length-1,c=Math.floor(l/n)*n;if(Math.min(c+n,t.length)-c<n&&t.length>n){const h=t.slice();return h[h.length-1]=e,this.Cr(h,n,o,r,a)}if(Math.floor((l-1)/n)===Math.floor(l/n)||s.length===1){const h=Math.min(c+n,t.length),u=h-c;if(u<=0)return s;const d=u===1?this.Or(c===l?e:t[c],!0):this.Jr(t,c,h,l,e,o,r,a);return s[s.length-1]=this.th(d,r),s}{const h=t.slice();return h[h.length-1]=e,this.Cr(h,n,o,r,a)}}Or(t,e=!1){return{Wr:t.$n,Hr:t.$n,Ur:t.wt,$r:t.wt,jr:t.Wt[0],qr:t.Wt[1],Yr:t.Wt[2],Kr:t.Wt[3],Gr:t.Gr??1,Zr:t.ue,zr:e}}Pr(t){const e=this.ih(t),n=this.Ir(t);return e.nh!==n&&(e.kr.clear(),e.nh=n),e}ih(t){let e=this.br.get(t);return e===void 0&&(e={nh:this.Ir(t),kr:new Map},this.br.set(t,e)),e}}class IC extends k0{constructor(t){super(),this.sn=t}Qt(){return this.sn}}const RC={Bar:(i,t,e,n)=>{const s=t.upColor,r=t.downColor,o=ut(i(e,n)),a=Ii(o.Wt[0])<=Ii(o.Wt[3]);return{sh:o.R??(a?s:r)}},Candlestick:(i,t,e,n)=>{const s=t.upColor,r=t.downColor,o=t.borderUpColor,a=t.borderDownColor,l=t.wickUpColor,c=t.wickDownColor,h=ut(i(e,n)),u=Ii(h.Wt[0])<=Ii(h.Wt[3]);return{sh:h.R??(u?s:r),eh:h.Ht??(u?o:a),rh:h.hh??(u?l:c)}},Custom:(i,t,e,n)=>({sh:ut(i(e,n)).R??t.color}),Area:(i,t,e,n)=>{const s=ut(i(e,n));return{sh:s.vt??t.lineColor,vt:s.vt??t.lineColor,ah:s.ah??t.topColor,oh:s.oh??t.bottomColor}},Baseline:(i,t,e,n)=>{const s=ut(i(e,n));return{sh:s.Wt[3]>=t.baseValue.price?t.topLineColor:t.bottomLineColor,_h:s._h??t.topLineColor,uh:s.uh??t.bottomLineColor,dh:s.dh??t.topFillColor1,fh:s.fh??t.topFillColor2,ph:s.ph??t.bottomFillColor1,mh:s.mh??t.bottomFillColor2}},Line:(i,t,e,n)=>{const s=ut(i(e,n));return{sh:s.R??t.color,vt:s.R??t.color}},Histogram:(i,t,e,n)=>({sh:ut(i(e,n)).R??t.color})};class LC{constructor(t){this.wh=(e,n)=>n!==void 0?n.Wt:this.Te.Un().Mh(e),this.Te=t,this.gh=RC[t.bh()]}Sh(t,e){return this.gh(this.wh,this.Te.N(),t,e)}}function V0(i,t,e,n,s=0,r=t.length){let o=r-s;for(;0<o;){const a=o>>1,l=s+a;n(t[l],e)===i?(s=l+1,o-=a+1):o=a}return s}const hs=V0.bind(null,!0),Yu=V0.bind(null,!1);var Wp;(function(i){i[i.NearestLeft=-1]="NearestLeft",i[i.None=0]="None",i[i.NearestRight=1]="NearestRight"})(Wp||(Wp={}));const Mi=30;class PC{constructor(){this.xh=[],this.Ch=new Map,this.yh=new Map,this.Ph=[]}kh(){return this.Th()>0?this.xh[this.xh.length-1]:null}Rh(){return this.Th()>0?this.Dh(0):null}Qn(){return this.Th()>0?this.Dh(this.xh.length-1):null}Th(){return this.xh.length}Zi(){return this.Th()===0}ze(t){return this.Ih(t,0)!==null}Mh(t){return this.Hn(t)}Hn(t,e=0){const n=this.Ih(t,e);return n===null?null:{...this.Vh(n),$n:this.Dh(n)}}Bh(){return this.xh}Eh(t,e,n){if(this.Zi())return null;let s=null;for(const r of n)s=ua(s,this.Ah(t,e,r));return s}ht(t){this.yh.clear(),this.Ch.clear(),this.xh=t,this.Ph=t.map((e=>e.$n))}Lh(){return this.Ph}Dh(t){return this.xh[t].$n}Vh(t){return this.xh[t]}Ih(t,e){const n=this.zh(t);if(n===null&&e!==0)switch(e){case-1:return this.Oh(t);case 1:return this.Nh(t);default:throw new TypeError("Unknown search mode")}return n}Oh(t){let e=this.Fh(t);return e>0&&(e-=1),e!==this.xh.length&&this.Dh(e)<t?e:null}Nh(t){const e=this.Wh(t);return e!==this.xh.length&&t<this.Dh(e)?e:null}zh(t){const e=this.Fh(t);return e===this.xh.length||t<this.xh[e].$n?null:e}Fh(t){return hs(this.xh,t,((e,n)=>e.$n<n))}Wh(t){return Yu(this.xh,t,((e,n)=>e.$n>n))}Hh(t,e,n){let s=null;for(let r=t;r<e;r++){const o=this.xh[r].Wt[n];Number.isNaN(o)||(s===null?s={Uh:o,$h:o}:(o<s.Uh&&(s.Uh=o),o>s.$h&&(s.$h=o)))}return s}Ah(t,e,n){if(this.Zi())return null;let s=null;const r=ut(this.Rh()),o=ut(this.Qn()),a=Math.max(t,r),l=Math.min(e,o),c=Math.ceil(a/Mi)*Mi,h=Math.max(c,Math.floor(l/Mi)*Mi);{const d=this.Fh(a),f=this.Wh(Math.min(l,c,e));s=ua(s,this.Hh(d,f,n))}let u=this.Ch.get(n);u===void 0&&(u=new Map,this.Ch.set(n,u));for(let d=Math.max(c+1,a);d<h;d+=Mi){const f=Math.floor(d/Mi);let p=u.get(f);if(p===void 0){const v=this.Fh(f*Mi),g=this.Wh((f+1)*Mi-1);p=this.Hh(v,g,n),u.set(f,p)}s=ua(s,p)}{const d=this.Fh(h),f=this.Wh(l);s=ua(s,this.Hh(d,f,n))}return s}}function ua(i,t){return i===null?t:t===null?i:{Uh:Math.min(i.Uh,t.Uh),$h:Math.max(i.$h,t.$h)}}function Ac(){return new PC}const ja={setLineStyle:cs};class DC{constructor(t){this.jh=t}st(t,e,n){this.jh.draw(t,ja)}qh(t,e,n){this.jh.drawBackground?.(t,ja)}}class UC{constructor(t){this.Ls=null,this.Yh=t}Tt(){const t=this.Yh.renderer();if(t===null)return null;if(this.Ls?.Kh===t)return this.Ls.Gh;const e=new DC(t);return this.Ls={Kh:t,Gh:e},e}Zh(){return this.Yh.zOrder?.()??"normal"}}class G0{constructor(t){this.Xh=null,this.Jh=t}Qh(){return this.Jh}Nn(){this.Jh.updateAllViews?.()}jn(){const t=this.Jh.paneViews?.()??[];if(this.Xh?.Kh===t)return this.Xh.Gh;const e=t.map((n=>new UC(n)));return this.Xh={Kh:t,Gh:e},e}Qs(t,e){return this.Jh.hitTest?.(t,e)??null}}let BC=class extends G0{cn(){return[]}};class NC{constructor(t){this.jh=t}st(t,e,n){this.jh.draw(t,ja)}qh(t,e,n){this.jh.drawBackground?.(t,ja)}}class $p{constructor(t){this.Ls=null,this.Yh=t}Tt(){const t=this.Yh.renderer();if(t===null)return null;if(this.Ls?.Kh===t)return this.Ls.Gh;const e=new NC(t);return this.Ls={Kh:t,Gh:e},e}Zh(){return this.Yh.zOrder?.()??"normal"}}function W0(i){return{ri:i.text(),Ei:i.coordinate(),Vi:i.fixedCoordinate?.(),R:i.textColor(),Z:i.backColor(),It:i.visible?.()??!0,pi:i.tickVisible?.()??!0}}class FC{constructor(t,e){this.Xt=new F0,this.ta=t,this.ia=e}Tt(){return this.Xt.ht({nn:this.ia.nn(),...W0(this.ta)}),this.Xt}}class kC extends fl{constructor(t,e){super(),this.ta=t,this.Ki=e}Yi(t,e,n){const s=W0(this.ta);n.Z=s.Z,t.R=s.R;const r=2/12*this.Ki.P();n.Ti=r,n.Ri=r,n.Ei=s.Ei,n.Vi=s.Vi,t.ri=s.ri,t.It=s.It,t.pi=s.pi}}class OC extends G0{constructor(t,e){super(t),this.na=null,this.sa=null,this.ea=null,this.ra=null,this.Te=e}dn(){const t=this.Jh.timeAxisViews?.()??[];if(this.na?.Kh===t)return this.na.Gh;const e=this.Te.Qt().Et(),n=t.map((s=>new FC(s,e)));return this.na={Kh:t,Gh:n},n}qn(){const t=this.Jh.priceAxisViews?.()??[];if(this.sa?.Kh===t)return this.sa.Gh;const e=this.Te.Ft(),n=t.map((s=>new kC(s,e)));return this.sa={Kh:t,Gh:n},n}ha(){const t=this.Jh.priceAxisPaneViews?.()??[];if(this.ea?.Kh===t)return this.ea.Gh;const e=t.map((n=>new $p(n)));return this.ea={Kh:t,Gh:e},e}aa(){const t=this.Jh.timeAxisPaneViews?.()??[];if(this.ra?.Kh===t)return this.ra.Gh;const e=t.map((n=>new $p(n)));return this.ra={Kh:t,Gh:e},e}la(t,e){return this.Jh.autoscaleInfo?.(t,e)??null}}function da(i,t,e,n){i.forEach((s=>{t(s).forEach((r=>{r.Zh()===e&&n.push(r)}))}))}function fa(i){return i.jn()}function zC(i){return i.ha()}function HC(i){return i.aa()}const VC=["Area","Line","Baseline"];class gl extends IC{constructor(t,e,n,s,r){super(t),this.qt=Ac(),this.dr=new bC(this),this.oa=[],this._a=new vC(this),this.ua=null,this.ca=null,this.da=null,this.fa=[],this.pa=new TC,this.va=new Map,this.ma=null,this.yn=n,this.wa=e;const o=new wC(this);if(this.mn=[o],this.pr=new H0(o,this,t),VC.includes(this.wa)&&(this.ua=new xC(this)),this.Ma(),this.Yh=s(this,this.Qt(),r),this.wa==="Custom"){const a=this.Yh;a.ga&&this.ba(a.ga)}}m(){this.da!==null&&clearTimeout(this.da)}We(t){return this.yn.priceLineColor||t}Ae(t){const e={Le:!0},n=this.Ft();if(this.Qt().Et().Zi()||n.Zi()||this.qt.Zi())return e;const s=this.Qt().Et().Ee(),r=this.Lt();if(s===null||r===null)return e;let o,a;if(t){const u=this.qt.kh();if(u===null)return e;o=u,a=u.$n}else{const u=this.qt.Hn(s.bi(),-1);if(u===null||(o=this.qt.Mh(u.$n),o===null))return e;a=u.$n}const l=o.Wt[3],c=this.Sa().Sh(a,{Wt:o}),h=n.Nt(l,r.Wt);return{Le:!1,Mt:l,ri:n.Ji(l,r.Wt),qe:n.xa(l),Ye:n.Ca(l,r.Wt),R:c.sh,Ei:h,$n:a}}Sa(){return this.ca!==null||(this.ca=new LC(this)),this.ca}N(){return this.yn}vr(t){const e=this.Qt(),{priceScaleId:n,visible:s,priceFormat:r}=t;n!==void 0&&n!==this.yn.priceScaleId&&e.ya(this,n),s!==void 0&&s!==this.yn.visible&&e.Pa();const o=t.conflationThresholdFactor!==void 0;rn(this.yn,t),Object.prototype.hasOwnProperty.call(t,"autoscaleInfoProvider")&&t.autoscaleInfoProvider===void 0&&(this.yn.autoscaleInfoProvider=void 0),o&&(this.va.clear(),this.Qt().mr()),r!==void 0&&(this.Ma(),e.ka()),e.Ta(this),e.Ra(),this.Yh.Pt("options")}ht(t,e){this.qt.ht(t),this.va.clear();const n=this.Qt().Et().N();n.enableConflation&&n.precomputeConflationOnInit&&this.Da(n.precomputeConflationPriority),this.Ia(),this.ua!==null&&(e&&e.Va?this.ua.De():t.length===0&&this.ua.Re());const s=this.Qt().Ks(this);this.Qt().Ba(s),this.Qt().Ta(this),this.Qt().Ra(),this.Qt().mr()}Ia(){this.Yh.Pt("data")}Ea(t){const e=new CC(this,t);return this.oa.push(e),this.Qt().Ta(this),e}Aa(t){const e=this.oa.indexOf(t);e!==-1&&this.oa.splice(e,1),this.Qt().Ta(this)}La(){return this.oa}bh(){return this.wa}Lt(){const t=this.za();return t===null?null:{Wt:t.Wt[3],Oa:t.wt}}za(){const t=this.Qt().Et().Ee();if(t===null)return null;const e=t.Na();return this.qt.Hn(e,1)}Un(){return this.qt}ba(t){this.ma=t,this.va.clear()}Fa(){return!!this.Qt().Et().N().enableConflation&&this.Wa()>1}Rr(t){if(!this.Fa())return;const e=this.Wa();if(!this.va.has(e))return;const n=this.wa==="Custom",s=n&&this.ma||void 0,r=n&&this.Yh.Ha?l=>{const c=l,h=this.Yh.Ha(c);return Array.isArray(h)?h:[typeof h=="number"?h:0]}:void 0,o=this.pa.Rr(this.qt.Bh(),t,e,s,n,r),a=Ac();a.ht(o),this.va.set(e,a)}Ua(){const t=this.Qt().Et().N().enableConflation;if(this.wa==="Custom"&&this.ma===null)return this.qt;if(!t)return this.qt;const e=this.Wa(),n=this.va.get(e);return n||(this.$a(e),this.va.get(e)??this.qt)}ja(t){const e=this.qt.Mh(t);return e===null?null:this.wa==="Bar"||this.wa==="Candlestick"||this.wa==="Custom"?{jr:e.Wt[0],qr:e.Wt[1],Yr:e.Wt[2],Kr:e.Wt[3]}:e.Wt[3]}qa(t){const e=[];da(this.fa,fa,"top",e);const n=this.ua;return n!==null&&n.It()&&(this.da===null&&n.Ve()&&(this.da=setTimeout((()=>{this.da=null,this.Qt().Ya()}),0)),n.Ie(),e.unshift(n)),e}jn(){const t=[];this.Ka()||t.push(this._a),t.push(this.Yh,this.dr);const e=this.oa.map((n=>n.wr()));return t.push(...e),da(this.fa,fa,"normal",t),t}Ga(){const t=this.Yh.Ga?.()??null;if(t===null)return null;const e=[];this.Ka()||e.push(this._a),e.push(...t.Za),da(this.fa,fa,"normal",e);const n=[];n.push(...t.qa,this.dr);const s=this.oa.map((r=>r.wr()));return n.push(...s),{Za:e,qa:n}}Xa(){return this.Ja(fa,"bottom")}Qa(t){return this.Ja(zC,t)}tl(t){return this.Ja(HC,t)}il(t,e){return this.fa.map((n=>n.Qs(t,e))).filter((n=>n!==null))}cn(){return[this.pr,...this.oa.map((t=>t.Mr()))]}qn(t,e){if(e!==this.hn&&!this.Ka())return[];const n=[...this.mn];for(const s of this.oa)n.push(s.gr());return this.fa.forEach((s=>{n.push(...s.qn())})),n}dn(){const t=[];return this.fa.forEach((e=>{t.push(...e.dn())})),t}la(t,e){if(this.yn.autoscaleInfoProvider!==void 0){const n=this.yn.autoscaleInfoProvider((()=>{const s=this.nl(t,e);return s===null?null:s.sr()}));return Xa.er(n)}return this.nl(t,e)}Kh(){const t=this.yn.priceFormat;return t.base??1/t.minMove}sl(){return this.el}Nn(){this.Yh.Pt();for(const t of this.mn)t.Pt();for(const t of this.oa)t.Pt();this.dr.Pt(),this._a.Pt(),this.ua?.Pt(),this.fa.forEach((t=>t.Nn()))}Ft(){return ut(super.Ft())}At(t){if(!((this.wa==="Line"||this.wa==="Area"||this.wa==="Baseline")&&this.yn.crosshairMarkerVisible))return null;const e=this.qt.Mh(t);return e===null?null:{Mt:e.Wt[3],ft:this.rl(),Ht:this.hl(),Ot:this.al(),zt:this.ll(t)}}He(){return this.yn.title}It(){return this.yn.visible}ol(t){this.fa.push(new OC(t,this))}_l(t){this.fa=this.fa.filter((e=>e.Qh()!==t))}ul(){if(this.wa==="Custom")return t=>this.Yh.Ha(t)}cl(){if(this.wa==="Custom")return t=>this.Yh.dl(t)}fl(){return this.qt.Lh()}Ka(){return!pl(this.Ft().pl())}nl(t,e){if(!ho(t)||!ho(e)||this.qt.Zi())return null;const n=this.wa==="Line"||this.wa==="Area"||this.wa==="Baseline"||this.wa==="Histogram"?[3]:[2,1],s=this.qt.Eh(t,e,n);let r=s!==null?new Ge(s.Uh,s.$h):null,o=null;if(this.bh()==="Histogram"){const a=this.yn.base,l=new Ge(a,a);r=r!==null?r.Ss(l):l}return this.fa.forEach((a=>{const l=a.la(t,e);if(l?.priceRange){const c=new Ge(l.priceRange.minValue,l.priceRange.maxValue);r=r!==null?r.Ss(c):c}l?.margins&&(o=l.margins)})),new Xa(r,o)}rl(){switch(this.wa){case"Line":case"Area":case"Baseline":return this.yn.crosshairMarkerRadius}return 0}hl(){switch(this.wa){case"Line":case"Area":case"Baseline":{const t=this.yn.crosshairMarkerBorderColor;if(t.length!==0)return t}}return null}al(){switch(this.wa){case"Line":case"Area":case"Baseline":return this.yn.crosshairMarkerBorderWidth}return 0}ll(t){switch(this.wa){case"Line":case"Area":case"Baseline":{const e=this.yn.crosshairMarkerBackgroundColor;if(e.length!==0)return e}}return this.Sa().Sh(t).sh}Ma(){switch(this.yn.priceFormat.type){case"custom":{const t=this.yn.priceFormat.formatter;this.el={format:t,formatTickmarks:this.yn.priceFormat.tickmarksFormatter??(e=>e.map(t))};break}case"volume":this.el=new fC(this.yn.priceFormat.precision);break;case"percent":this.el=new z0(this.yn.priceFormat.precision);break;default:{const t=Math.pow(10,this.yn.priceFormat.precision);this.el=new ml(t,this.yn.priceFormat.minMove*t)}}this.hn!==null&&this.hn.vl()}Ja(t,e){const n=[];return da(this.fa,t,e,n),n}Wa(){const{ml:t,wl:e,Ml:n}=this.gl();return this.pa.Sr(t,e,n)}gl(){const t=this.Qt().Et(),e=t.ml(),n=window.devicePixelRatio||1,s=t.N().conflationThresholdFactor;return{ml:e,wl:n,Ml:this.yn.conflationThresholdFactor??s??1}}bl(t){const e=this.qt.Bh();let n;if(this.wa==="Custom"&&this.ma!==null){const r=this.ul();if(!r)throw new Error(SC);n=this.pa.Cr(e,t,this.ma,!0,(o=>r(o)))}else n=this.pa.Cr(e,t);const s=Ac();return s.ht(n),s}$a(t){const e=this.bl(t);this.va.set(t,e)}Da(t){if(this.wa==="Custom"&&(this.ma===null||!this.ul()))return;this.va.clear();const e=this.Qt().Et().Sl();for(const n of e){const s=()=>{this.xl(n)},r=typeof window=="object"&&window||typeof self=="object"&&self;r?.yl?.Cl?r.yl.Cl((()=>{s()}),{se:t}):Promise.resolve().then((()=>s()))}}xl(t){if(this.va.has(t)||this.qt.Bh().length===0)return;const e=this.bl(t);this.va.set(t,e)}}const GC=[3],WC=[0,1,2,3];class $C{constructor(t){this.yn=t}Pl(t,e,n){let s=t;if(this.yn.mode===0)return s;const r=n.kn(),o=r.Lt();if(o===null)return s;const a=r.Nt(t,o),l=n.kl().filter((h=>h instanceof gl)).reduce(((h,u)=>{if(n.Gs(u)||!u.It())return h;const d=u.Ft(),f=u.Un();if(d.Zi()||!f.ze(e))return h;const p=f.Mh(e);if(p===null)return h;const v=Ii(u.Lt()),g=this.yn.mode===3?WC:GC;return h.concat(g.map((m=>d.Nt(p.Wt[m],v.Wt))))}),[]);if(l.length===0)return s;l.sort(((h,u)=>Math.abs(h-a)-Math.abs(u-a)));const c=l[0];return s=r.Tn(c,o),s}}function Xr(i,t,e){return Math.min(Math.max(i,t),e)}function pa(i,t,e){return t-i<=e}class QC extends Pi{constructor(){super(...arguments),this.qt=null}ht(t){this.qt=t}et({context:t,bitmapSize:e,horizontalPixelRatio:n,verticalPixelRatio:s}){if(this.qt===null)return;const r=Math.max(1,Math.floor(n));t.lineWidth=r,(function(o,a){o.save(),o.lineWidth%2&&o.translate(.5,.5),a(),o.restore()})(t,(()=>{const o=ut(this.qt);if(o.Tl){t.strokeStyle=o.Rl,cs(t,o.Dl),t.beginPath();for(const a of o.Il){const l=Math.round(a.Vl*n);t.moveTo(l,-r),t.lineTo(l,e.height+r)}t.stroke()}if(o.Bl){t.strokeStyle=o.El,cs(t,o.Al),t.beginPath();for(const a of o.Ll){const l=Math.round(a.Vl*s);t.moveTo(-r,l),t.lineTo(e.width+r,l)}t.stroke()}}))}}class qC{constructor(t){this.Xt=new QC,this.xt=!0,this.yt=t}Pt(){this.xt=!0}Tt(){if(this.xt){const t=this.yt.Qt().N().grid,e={Bl:t.horzLines.visible,Tl:t.vertLines.visible,El:t.horzLines.color,Rl:t.vertLines.color,Al:t.horzLines.style,Dl:t.vertLines.style,Ll:this.yt.kn().zl(),Il:(this.yt.Qt().Et().zl()||[]).map((n=>({Vl:n.coord})))};this.Xt.ht(e),this.xt=!1}return this.Xt}}class KC{constructor(t){this.Yh=new qC(t)}wr(){return this.Yh}}const Cc={Ol:4,Nl:1e-4};function Hs(i,t){const e=100*(i-t)/t;return t<0?-e:e}function YC(i,t){const e=Hs(i.Je(),t),n=Hs(i.Qe(),t);return new Ge(e,n)}function jr(i,t){const e=100*(i-t)/t+100;return t<0?-e:e}function XC(i,t){const e=jr(i.Je(),t),n=jr(i.Qe(),t);return new Ge(e,n)}function Za(i,t){const e=Math.abs(i);if(e<1e-15)return 0;const n=Math.log10(e+t.Nl)+t.Ol;return i<0?-n:n}function Zr(i,t){const e=Math.abs(i);if(e<1e-15)return 0;const n=Math.pow(10,e-t.Ol)-t.Nl;return i<0?-n:n}function Dr(i,t){if(i===null)return null;const e=Za(i.Je(),t),n=Za(i.Qe(),t);return new Ge(e,n)}function Vs(i,t){if(i===null)return null;const e=Zr(i.Je(),t),n=Zr(i.Qe(),t);return new Ge(e,n)}function Tc(i){if(i===null)return Cc;const t=Math.abs(i.Qe()-i.Je());if(t>=1||t<1e-15)return Cc;const e=Math.ceil(Math.abs(Math.log10(t))),n=Cc.Ol+e;return{Ol:n,Nl:1/Math.pow(10,n)}}class Ic{constructor(t,e){if(this.Fl=t,this.Wl=e,(function(n){if(n<0)return!1;if(n>1e18)return!0;for(let s=n;s>1;s/=10)if(s%10!=0)return!1;return!0})(this.Fl))this.Hl=[2,2.5,2];else{this.Hl=[];for(let n=this.Fl;n!==1;){if(n%2==0)this.Hl.push(2),n/=2;else{if(n%5!=0)throw new Error("unexpected base");this.Hl.push(2,2.5),n/=5}if(this.Hl.length>100)throw new Error("something wrong with base")}}}Ul(t,e,n){const s=this.Fl===0?0:1/this.Fl;let r=Math.pow(10,Math.max(0,Math.ceil(Math.log10(t-e)))),o=0,a=this.Wl[0];for(;;){const u=pa(r,s,1e-14)&&r>s+1e-14,d=pa(r,n*a,1e-14),f=pa(r,1,1e-14);if(!(u&&d&&f))break;r/=a,a=this.Wl[++o%this.Wl.length]}if(r<=s+1e-14&&(r=s),r=Math.max(1,r),this.Hl.length>0&&(l=r,c=1,h=1e-14,Math.abs(l-c)<h))for(o=0,a=this.Hl[0];pa(r,n*a,1e-14)&&r>s+1e-14;)r/=a,a=this.Hl[++o%this.Hl.length];var l,c,h;return r}}class Qp{constructor(t,e,n,s){this.$l=[],this.Ki=t,this.Fl=e,this.jl=n,this.ql=s}Ul(t,e){if(t<e)throw new Error("high < low");const n=this.Ki.$t(),s=(t-e)*this.Yl()/n,r=new Ic(this.Fl,[2,2.5,2]),o=new Ic(this.Fl,[2,2,2.5]),a=new Ic(this.Fl,[2.5,2,2]),l=[];return l.push(r.Ul(t,e,s),o.Ul(t,e,s),a.Ul(t,e,s)),(function(c){if(c.length<1)throw Error("array is empty");let h=c[0];for(let u=1;u<c.length;++u)c[u]<h&&(h=c[u]);return h})(l)}Kl(){const t=this.Ki,e=t.Lt();if(e===null)return void(this.$l=[]);const n=t.$t(),s=this.jl(n-1,e),r=this.jl(0,e),o=this.Ki.N().entireTextOnly?this.Gl()/2:0,a=o,l=n-1-o,c=Math.max(s,r),h=Math.min(s,r);if(c===h)return void(this.$l=[]);const u=this.Ul(c,h);if(this.Zl(e,u,c,h,a,l),t.Xl()&&this.Jl(u,h,c)){const p=this.Ki.Ql();this.io(e,u,a,l,p,2*p)}const d=this.$l.map((p=>p.no)),f=this.Ki.so(d);for(let p=0;p<this.$l.length;p++)this.$l[p].eo=f[p]}zl(){return this.$l}Gl(){return this.Ki.P()}Yl(){return Math.ceil(this.Gl()*this.Ki.N().tickMarkDensity)}Zl(t,e,n,s,r,o){const a=this.$l,l=this.Ki;let c=n%e;c+=c<0?e:0;const h=n>=s?1:-1;let u=null,d=0;for(let f=n-c;f>s;f-=e){const p=this.ql(f,t,!0);u!==null&&Math.abs(p-u)<this.Yl()||p<r||p>o||(d<a.length?(a[d].Vl=p,a[d].eo=l.ro(f),a[d].no=f):a.push({Vl:p,eo:l.ro(f),no:f}),d++,u=p,l.ho()&&(e=this.Ul(f*h,s)))}a.length=d}io(t,e,n,s,r,o){const a=this.$l,l=this.ao(t,n,r,o),c=this.ao(t,s,-o,-r),h=this.ql(0,t,!0)-this.ql(e,t,!0);a.length>0&&a[0].Vl-l.Vl<h/2&&a.shift(),a.length>0&&c.Vl-a[a.length-1].Vl<h/2&&a.pop(),a.unshift(l),a.push(c)}ao(t,e,n,s){const r=(n+s)/2,o=this.jl(e+n,t),a=this.jl(e+s,t),l=Math.min(o,a),c=Math.max(o,a),h=Math.max(.1,this.Ul(c,l)),u=this.jl(e+r,t),d=u-u%h,f=this.ql(d,t,!0);return{eo:this.Ki.ro(d),Vl:f,no:d}}Jl(t,e,n){let s=Ii(this.Ki.ar());return this.Ki.ho()&&(s=Vs(s,this.Ki.lo())),s.Je()-e<t&&n-s.Qe()<t}}function $0(i){return i.slice().sort(((t,e)=>ut(t.ln())-ut(e.ln())))}var qp;(function(i){i[i.Normal=0]="Normal",i[i.Logarithmic=1]="Logarithmic",i[i.Percentage=2]="Percentage",i[i.IndexedTo100=3]="IndexedTo100"})(qp||(qp={}));const Kp=new z0,Yp=new ml(100,1);class jC{constructor(t,e,n,s,r){this.oo=0,this._o=null,this.rr=null,this.uo=null,this.co={do:!1,fo:null},this.po=!1,this.vo=0,this.mo=0,this.wo=new fe,this.Mo=new fe,this.bo=[],this.So=null,this.xo=null,this.Co=null,this.yo=null,this.Po=null,this.el=Yp,this.ko=Tc(null),this.To=t,this.yn=e,this.Ro=n,this.Do=s,this.Io=r,this.Vo=new Qp(this,100,this.Bo.bind(this),this.Eo.bind(this))}pl(){return this.To}N(){return this.yn}vr(t){if(rn(this.yn,t),this.vl(),t.mode!==void 0&&this.Ao({_e:t.mode}),t.scaleMargins!==void 0){const e=qe(t.scaleMargins.top),n=qe(t.scaleMargins.bottom);if(e<0||e>1)throw new Error(`Invalid top margin - expect value between 0 and 1, given=${e}`);if(n<0||n>1)throw new Error(`Invalid bottom margin - expect value between 0 and 1, given=${n}`);if(e+n>1)throw new Error(`Invalid margins - sum of margins must be less than 1, given=${e+n}`);this.Lo(),this.Co=null}}zo(){return this.yn.autoScale}Oo(){return this.po}ho(){return this.yn.mode===1}je(){return this.yn.mode===2}No(){return this.yn.mode===3}lo(){return this.ko}_e(){return{hs:this.yn.autoScale,Fo:this.yn.invertScale,_e:this.yn.mode}}Ao(t){const e=this._e();let n=null;t.hs!==void 0&&(this.yn.autoScale=t.hs),t._e!==void 0&&(this.yn.mode=t._e,t._e!==2&&t._e!==3||(this.yn.autoScale=!0),this.co.do=!1),e._e===1&&t._e!==e._e&&((function(r,o){if(r===null)return!1;const a=Zr(r.Je(),o),l=Zr(r.Qe(),o);return isFinite(a)&&isFinite(l)})(this.rr,this.ko)?(n=Vs(this.rr,this.ko),n!==null&&this.Wo(n)):this.yn.autoScale=!0),t._e===1&&t._e!==e._e&&(n=Dr(this.rr,this.ko),n!==null&&this.Wo(n));const s=e._e!==this.yn.mode;s&&(e._e===2||this.je())&&this.vl(),s&&(e._e===3||this.No())&&this.vl(),t.Fo!==void 0&&e.Fo!==t.Fo&&(this.yn.invertScale=t.Fo,this.Ho()),this.Mo.p(e,this._e())}Uo(){return this.Mo}P(){return this.Ro.fontSize}$t(){return this.oo}$o(t){this.oo!==t&&(this.oo=t,this.Lo(),this.Co=null)}jo(){if(this._o)return this._o;const t=this.$t()-this.qo()-this.Yo();return this._o=t,t}ar(){return this.Ko(),this.rr}Wo(t,e){const n=this.rr;(e||n===null&&t!==null||n!==null&&!n.Ze(t))&&(this.Co=null,this.rr=t)}Go(t){this.Wo(t),this.Zo(t!==null)}Zi(){return this.Ko(),this.oo===0||!this.rr||this.rr.Zi()}Xo(t){return this.Fo()?t:this.$t()-1-t}Nt(t,e){return this.je()?t=Hs(t,e):this.No()&&(t=jr(t,e)),this.Eo(t,e)}Jo(t,e,n){this.Ko();const s=this.Yo(),r=ut(this.ar()),o=r.Je(),a=r.Qe(),l=this.jo()-1,c=this.Fo(),h=l/(a-o),u=n===void 0?0:n.from,d=n===void 0?t.length:n.to,f=this.Qo();for(let p=u;p<d;p++){const v=t[p],g=v.Mt;if(isNaN(g))continue;let m=g;f!==null&&(m=f(v.Mt,e));const x=s+h*(m-o),_=c?x:this.oo-1-x;v.ut=_}}t_(t,e,n){this.Ko();const s=this.Yo(),r=ut(this.ar()),o=r.Je(),a=r.Qe(),l=this.jo()-1,c=this.Fo(),h=l/(a-o),u=n===void 0?0:n.from,d=n===void 0?t.length:n.to,f=this.Qo();for(let p=u;p<d;p++){const v=t[p];let g=v.jr,m=v.qr,x=v.Yr,_=v.Kr;f!==null&&(g=f(v.jr,e),m=f(v.qr,e),x=f(v.Yr,e),_=f(v.Kr,e));let y=s+h*(g-o),R=c?y:this.oo-1-y;v.i_=R,y=s+h*(m-o),R=c?y:this.oo-1-y,v.n_=R,y=s+h*(x-o),R=c?y:this.oo-1-y,v.s_=R,y=s+h*(_-o),R=c?y:this.oo-1-y,v.e_=R}}Tn(t,e){const n=this.Bo(t,e);return this.r_(n,e)}r_(t,e){let n=t;return this.je()?n=(function(s,r){return r<0&&(s=-s),s/100*r+r})(n,e):this.No()&&(n=(function(s,r){return s-=100,r<0&&(s=-s),s/100*r+r})(n,e)),n}kl(){return this.bo}Dt(){return this.xo||(this.xo=$0(this.bo)),this.xo}h_(t){this.bo.indexOf(t)===-1&&(this.bo.push(t),this.vl(),this.a_())}l_(t){const e=this.bo.indexOf(t);if(e===-1)throw new Error("source is not attached to scale");this.bo.splice(e,1),this.bo.length===0&&(this.Ao({hs:!0}),this.Wo(null)),this.vl(),this.a_()}Lt(){let t=null;for(const e of this.bo){const n=e.Lt();n!==null&&(t===null||n.Oa<t.Oa)&&(t=n)}return t===null?null:t.Wt}Fo(){return this.yn.invertScale}zl(){const t=this.Lt()===null;if(this.Co!==null&&(t||this.Co.o_===t))return this.Co.zl;this.Vo.Kl();const e=this.Vo.zl();return this.Co={zl:e,o_:t},this.wo.p(),e}__(){return this.wo}u_(t){this.je()||this.No()||this.yo===null&&this.uo===null&&(this.Zi()||(this.yo=this.oo-t,this.uo=ut(this.ar()).Xe()))}c_(t){if(this.je()||this.No()||this.yo===null)return;this.Ao({hs:!1}),(t=this.oo-t)<0&&(t=0);let e=(this.yo+.2*(this.oo-1))/(t+.2*(this.oo-1));const n=ut(this.uo).Xe();e=Math.max(e,.1),n.ir(e),this.Wo(n)}d_(){this.je()||this.No()||(this.yo=null,this.uo=null)}f_(t){this.zo()||this.Po===null&&this.uo===null&&(this.Zi()||(this.Po=t,this.uo=ut(this.ar()).Xe()))}p_(t){if(this.zo()||this.Po===null)return;const e=ut(this.ar()).tr()/(this.jo()-1);let n=t-this.Po;this.Fo()&&(n*=-1);const s=n*e,r=ut(this.uo).Xe();r.nr(s),this.Wo(r,!0),this.Co=null}v_(){this.zo()||this.Po!==null&&(this.Po=null,this.uo=null)}sl(){return this.el||this.vl(),this.el}Ji(t,e){switch(this.yn.mode){case 2:return this.m_(Hs(t,e));case 3:return this.sl().format(jr(t,e));default:return this.cr(t)}}ro(t){switch(this.yn.mode){case 2:return this.m_(t);case 3:return this.sl().format(t);default:return this.cr(t)}}so(t){switch(this.yn.mode){case 2:return this.w_(t);case 3:return this.sl().formatTickmarks(t);default:return this.M_(t)}}xa(t){return this.cr(t,ut(this.So).sl())}Ca(t,e){return t=Hs(t,e),this.m_(t,Kp)}g_(){return this.bo}b_(t){this.co={fo:t,do:!1}}Nn(){this.bo.forEach((t=>t.Nn()))}Xl(){return this.yn.ensureEdgeTickMarksVisible&&this.zo()}Ql(){return this.P()/2}vl(){this.Co=null;let t=1/0;this.So=null;for(const n of this.bo)n.ln()<t&&(t=n.ln(),this.So=n);let e=100;this.So!==null&&(e=Math.round(this.So.Kh())),this.el=Yp,this.je()?(this.el=Kp,e=100):this.No()?(this.el=new ml(100,1),e=100):this.So!==null&&(this.el=this.So.sl()),this.Vo=new Qp(this,e,this.Bo.bind(this),this.Eo.bind(this)),this.Vo.Kl()}a_(){this.xo=null}S_(){return this.So===null||this.je()||this.No()?1:1/this.So.Kh()}Xi(){return this.Io}Zo(t){this.po=t}qo(){return this.Fo()?this.yn.scaleMargins.bottom*this.$t()+this.mo:this.yn.scaleMargins.top*this.$t()+this.vo}Yo(){return this.Fo()?this.yn.scaleMargins.top*this.$t()+this.vo:this.yn.scaleMargins.bottom*this.$t()+this.mo}Ko(){this.co.do||(this.co.do=!0,this.x_())}Lo(){this._o=null}Eo(t,e){if(this.Ko(),this.Zi())return 0;t=this.ho()&&t?Za(t,this.ko):t;const n=ut(this.ar()),s=this.Yo()+(this.jo()-1)*(t-n.Je())/n.tr();return this.Xo(s)}Bo(t,e){if(this.Ko(),this.Zi())return 0;const n=this.Xo(t),s=ut(this.ar()),r=s.Je()+s.tr()*((n-this.Yo())/(this.jo()-1));return this.ho()?Zr(r,this.ko):r}Ho(){this.Co=null,this.Vo.Kl()}x_(){if(this.Oo()&&!this.zo())return;const t=this.co.fo;if(t===null)return;let e=null;const n=this.g_();let s=0,r=0;for(const l of n){if(!l.It())continue;const c=l.Lt();if(c===null)continue;const h=l.la(t.Na(),t.bi());let u=h&&h.ar();if(u!==null){switch(this.yn.mode){case 1:u=Dr(u,this.ko);break;case 2:u=YC(u,c.Wt);break;case 3:u=XC(u,c.Wt)}if(e=e===null?u:e.Ss(ut(u)),h!==null){const d=h.lr();d!==null&&(s=Math.max(s,d.above),r=Math.max(r,d.below))}}}if(this.Xl()&&(s=Math.max(s,this.Ql()),r=Math.max(r,this.Ql())),s===this.vo&&r===this.mo||(this.vo=s,this.mo=r,this.Co=null,this.Lo()),e!==null){if(e.Je()===e.Qe()){const l=5*this.S_();this.ho()&&(e=Vs(e,this.ko)),e=new Ge(e.Je()-l,e.Qe()+l),this.ho()&&(e=Dr(e,this.ko))}if(this.ho()){const l=Vs(e,this.ko),c=Tc(l);if(o=c,a=this.ko,o.Ol!==a.Ol||o.Nl!==a.Nl){const h=this.uo!==null?Vs(this.uo,this.ko):null;this.ko=c,e=Dr(l,c),h!==null&&(this.uo=Dr(h,c))}}this.Wo(e)}else this.rr===null&&(this.Wo(new Ge(-.5,.5)),this.ko=Tc(null));var o,a}Qo(){return this.je()?Hs:this.No()?jr:this.ho()?t=>Za(t,this.ko):null}C_(t,e,n){return e===void 0?(n===void 0&&(n=this.sl()),n.format(t)):e(t)}y_(t,e,n){return e===void 0?(n===void 0&&(n=this.sl()),n.formatTickmarks(t)):e(t)}cr(t,e){return this.C_(t,this.Do.priceFormatter,e)}M_(t,e){const n=this.Do.priceFormatter;return this.y_(t,this.Do.tickmarksPriceFormatter??(n?s=>s.map(n):void 0),e)}m_(t,e){return this.C_(t,this.Do.percentageFormatter,e)}w_(t,e){const n=this.Do.percentageFormatter;return this.y_(t,this.Do.tickmarksPercentageFormatter??(n?s=>s.map(n):void 0),e)}}function Xp(i){return i instanceof gl}class Gh{constructor(t,e){this.bo=[],this.P_=new Map,this.oo=0,this.k_=0,this.T_=1,this.xo=null,this.R_=null,this.D_=!1,this.I_=new fe,this.fa=[],this.ia=t,this.sn=e,this.V_=new KC(this);const n=e.N();this.B_=this.E_("left",n.leftPriceScale),this.A_=this.E_("right",n.rightPriceScale),this.B_.Uo().i(this.L_.bind(this,this.B_),this),this.A_.Uo().i(this.L_.bind(this,this.A_),this),this.z_(n)}z_(t){if(t.leftPriceScale&&this.B_.vr(t.leftPriceScale),t.rightPriceScale&&this.A_.vr(t.rightPriceScale),t.localization&&(this.B_.vl(),this.A_.vl()),t.overlayPriceScales){const e=Array.from(this.P_.values());for(const n of e){const s=ut(n[0].Ft());s.vr(t.overlayPriceScales),t.localization&&s.vl()}}}O_(t){switch(t){case"left":return this.B_;case"right":return this.A_}return this.P_.has(t)?qe(this.P_.get(t))[0].Ft():null}m(){this.Qt().N_().u(this),this.B_.Uo().u(this),this.A_.Uo().u(this),this.bo.forEach((t=>{t.m&&t.m()})),this.fa=this.fa.filter((t=>{const e=t.Qh();return e.detached&&e.detached(),!1})),this.I_.p()}F_(){return this.T_}W_(t){this.T_=t}Qt(){return this.sn}nn(){return this.k_}$t(){return this.oo}H_(t){this.k_=t,this.U_()}$o(t){this.oo=t,this.B_.$o(t),this.A_.$o(t),this.bo.forEach((e=>{if(this.Gs(e)){const n=e.Ft();n!==null&&n.$o(t)}})),this.U_()}j_(t){this.D_=t}q_(){return this.D_}Y_(){return this.bo.filter(Xp)}kl(){return this.bo}Gs(t){const e=t.Ft();return e===null||this.B_!==e&&this.A_!==e}h_(t,e,n){this.K_(t,e,n?t.ln():this.bo.length)}l_(t,e){const n=this.bo.indexOf(t);Me(n!==-1,"removeDataSource: invalid data source"),this.bo.splice(n,1),e||this.bo.forEach(((o,a)=>o._n(a)));const s=ut(t.Ft()).pl();if(this.P_.has(s)){const o=qe(this.P_.get(s)),a=o.indexOf(t);a!==-1&&(o.splice(a,1),o.length===0&&this.P_.delete(s))}const r=t.Ft();r&&r.kl().indexOf(t)>=0&&(r.l_(t),this.G_(r)),this.Z_()}Xs(t){return t===this.B_?"left":t===this.A_?"right":"overlay"}X_(){return this.B_}J_(){return this.A_}Q_(t,e){t.u_(e)}tu(t,e){t.c_(e),this.U_()}iu(t){t.d_()}nu(t,e){t.f_(e)}su(t,e){t.p_(e),this.U_()}eu(t){t.v_()}U_(){this.bo.forEach((t=>{t.Nn()}))}kn(){const[t,e]=this.ru();let n=null;return t.N().visible&&t.kl().length!==0?n=t:e.N().visible&&e.kl().length!==0?n=e:this.bo.length!==0&&(n=this.bo[0].Ft()),n===null&&(n=this.Zs()??t),n}Zs(){const[t,e]=this.ru();return t.N().visible?t:e.N().visible?e:null}G_(t){t!==null&&t.zo()&&this.hu(t)}au(t){const e=this.ia.Ee();t.Ao({hs:!0}),e!==null&&t.b_(e),this.U_()}lu(){this.hu(this.B_),this.hu(this.A_)}ou(){this.G_(this.B_),this.G_(this.A_),this.bo.forEach((t=>{this.Gs(t)&&this.G_(t.Ft())})),this.U_(),this.sn.mr()}Dt(){return this.xo===null&&(this.xo=$0(this.bo)),this.xo}_u(){const t=this.Dt(),e=this.sn.cu()?.uu,n=this.sn.N().hoveredSeriesOnTop,s=this.R_;if(s!==null&&s.Kh===t&&s.du===e&&s.fu===n)return s.pu;const r=(function(o,a,l){if(!l)return o;const c=o.indexOf(a);if(c===-1||c===o.length-1)return o;const h=[];for(let u=0;u<o.length;u++)u!==c&&h.push(o[u]);return h.push(o[c]),h})(t,e,n);return this.R_={Kh:t,du:e,fu:n,pu:r},r}vu(t,e){e=Xr(e,0,this.bo.length-1);const n=this.bo.indexOf(t);Me(n!==-1,"setSeriesOrder: invalid data source"),this.bo.splice(n,1),this.bo.splice(e,0,t),this.bo.forEach(((s,r)=>s._n(r))),this.Z_();for(const s of[this.B_,this.A_])s.a_(),s.vl();this.sn.mr()}Vt(){return this.Dt().filter(Xp)}mu(){return this.I_}wu(){return this.V_}ol(t){this.fa.push(new BC(t))}_l(t){this.fa=this.fa.filter((e=>e.Qh()!==t)),t.detached&&t.detached(),this.sn.mr()}Mu(){return this.fa}il(t,e){return this.fa.map((n=>n.Qs(t,e))).filter((n=>n!==null))}hu(t){const e=t.g_();if(e&&e.length>0&&!this.ia.Zi()){const n=this.ia.Ee();n!==null&&t.b_(n)}t.Nn()}K_(t,e,n){let s=this.O_(e);if(s===null&&(s=this.E_(e,this.sn.N().overlayPriceScales)),this.bo.splice(n,0,t),!pl(e)){const r=this.P_.get(e)||[];r.push(t),this.P_.set(e,r)}t._n(n),s.h_(t),t.un(s),this.G_(s),this.Z_()}Z_(){this.xo=null,this.R_=null}ru(){return this.sn.N().defaultVisiblePriceScaleId==="left"?[this.B_,this.A_]:[this.A_,this.B_]}L_(t,e,n){e._e!==n._e&&this.hu(t)}E_(t,e){const n={visible:!0,autoScale:!0,...ri(e)},s=new jC(t,n,this.sn.N().layout,this.sn.N().localization,this.sn.Xi());return s.$o(this.$t()),s}}function Wh(i,t){return t===null||i.se===2&&t.se!==2||(t.se!==2||i.se===2)&&i.ne!==t.ne&&i.ne<t.ne}function Q0(i){return{te:i.te,ie:i.ie}}function ZC(i){return{ne:i.distance??0,se:i.hitTestPriority??(i.itemType==="marker"?2:0),ee:i.itemType??"primitive",gu:i.cursorStyle,te:i.externalId}}function ma(i){return{uu:i.uu,bu:Q0(i.Su),gu:i.Su.gu,ee:i.Su.ee??"primitive"}}function JC(i,t,e,n){let s=null;for(const r of i){let o=r.Qs?.(t,e,n)??null;if(o===null){const a=r.Tt(n);o=a!==null&&a.Qs?a.Qs(t,e):null}if(o!==null){const a={xu:r,Su:o};(s===null||Wh(a.Su,s.Su))&&(s=a)}}return s}function tT(i){return i.jn!==void 0}function q0(i,t,e){const n=[i,...i.Dt()].reverse(),s=(function(a,l,c){let h,u,d;for(const v of a){const g=v.il?.(l,c)??[];for(const m of g){const x=ZC(m);f=m.zOrder,p=h?.zOrder,(!p||f==="top"&&p!=="top"||f==="normal"&&p==="bottom"||m.zOrder===h?.zOrder&&u!==void 0&&Wh(x,u)||m.zOrder===h?.zOrder&&u===void 0)&&(h=m,u=x,d=v)}}var f,p;return h&&d&&u?{Su:u,Cu:h,uu:d}:null})(n,t,e);if(s?.Cu.zOrder==="top")return ma(s);let r=null,o=null;for(const a of n){if(s&&s.uu===a&&s.Cu.zOrder!=="bottom"&&!s.Cu.isBackground)return r??ma(s);if(tT(a)){const l=JC(a.jn(i),t,e,i);if(l!==null){const c={uu:a,xu:l.xu,bu:Q0(l.Su),gu:l.Su.gu,ee:l.Su.ee??"primitive"};(r===null||Wh(l.Su,o))&&(r=c,o=l.Su)}}if(s&&s.uu===a&&s.Cu.zOrder!=="bottom"&&s.Cu.isBackground)return r??ma(s)}return r!==null?r:s?.Cu?ma(s):null}class eT{constructor(t,e,n=50){this.Vs=0,this.Bs=1,this.Es=1,this.Ls=new Map,this.As=new Map,this.yu=t,this.Pu=e,this.zs=n}ku(t){const e=t.time,n=this.Pu.cacheKey(e),s=this.Ls.get(n);if(s!==void 0)return s.Tu;if(this.Vs===this.zs){const o=this.As.get(this.Es);this.As.delete(this.Es),this.Ls.delete(qe(o)),this.Es++,this.Vs--}const r=this.yu(t);return this.Ls.set(n,{Tu:r,Ws:this.Bs}),this.As.set(this.Bs,n),this.Vs++,this.Bs++,r}}class Jr{constructor(t,e){Me(t<=e,"right should be >= left"),this.Ru=t,this.Du=e}Na(){return this.Ru}bi(){return this.Du}Iu(){return this.Du-this.Ru+1}ze(t){return this.Ru<=t&&t<=this.Du}Ze(t){return this.Ru===t.Na()&&this.Du===t.bi()}}function jp(i,t){return i===null||t===null?i===t:i.Ze(t)}class nT{constructor(){this.Vu=new Map,this.Ls=null,this.Bu=!1}Eu(t){this.Bu=t,this.Ls=null}Au(t,e){this.Lu(e),this.Ls=null;for(let n=e;n<t.length;++n){const s=t[n];let r=this.Vu.get(s.timeWeight);r===void 0&&(r=[],this.Vu.set(s.timeWeight,r)),r.push({index:n,time:s.time,weight:s.timeWeight,originalTime:s.originalTime})}}zu(t,e,n,s,r){const o=Math.ceil(e/t);return this.Ls!==null&&this.Ls.Ou===o&&r===this.Ls.Nu&&n===this.Ls.Fu||(this.Ls={Nu:r,Fu:n,zl:this.Wu(o,n,s),Ou:o}),this.Ls.zl}Lu(t){if(t===0)return void this.Vu.clear();const e=[];this.Vu.forEach(((n,s)=>{t<=n[0].index?e.push(s):n.splice(hs(n,t,(r=>r.index<t)),1/0)}));for(const n of e)this.Vu.delete(n)}Wu(t,e,n){let s=[];const r=o=>!e||n.has(o.index);for(const o of Array.from(this.Vu.keys()).sort(((a,l)=>l-a))){if(!this.Vu.get(o))continue;const a=s;s=[];const l=a.length;let c=0;const h=qe(this.Vu.get(o)),u=h.length;let d=1/0,f=-1/0;for(let p=0;p<u;p++){const v=h[p],g=v.index;for(;c<l;){const m=a[c],x=m.index;if(!(x<g&&r(m))){d=x;break}c++,s.push(m),f=x,d=1/0}if(d-g>=t&&g-f>=t&&r(v))s.push(v),f=g;else if(this.Bu)return a}for(;c<l;c++)r(a[c])&&s.push(a[c])}return s}}class Xs{constructor(t){this.Hu=t}Uu(){return this.Hu===null?null:new Jr(Math.floor(this.Hu.Na()),Math.ceil(this.Hu.bi()))}$u(){return this.Hu}static ju(){return new Xs(null)}}function iT(i,t){return i.weight>t.weight?i:t}class sT{constructor(t,e,n,s){this.k_=0,this.qu=null,this.Yu=[],this.Po=null,this.yo=null,this.Ku=new nT,this.Gu=new Map,this.Zu=Xs.ju(),this.Xu=!0,this.Ju=new fe,this.Qu=new fe,this.tc=new fe,this.nc=null,this.sc=null,this.ec=new Map,this.rc=-1,this.hc=[],this.ac=1,this.yn=e,this.Do=n,this.lc=e.rightOffset,this.oc=e.barSpacing,this.sn=t,this._c(e),this.Pu=s,this.uc(),this.Ku.Eu(e.uniformDistribution),this.cc(),this.dc()}N(){return this.yn}fc(t){rn(this.Do,t),this.vc(),this.uc()}vr(t,e){rn(this.yn,t),this.yn.fixLeftEdge&&this.mc(),this.yn.fixRightEdge&&this.wc(),t.barSpacing!==void 0&&this.sn.Ms(t.barSpacing),t.rightOffset!==void 0&&this.sn.gs(t.rightOffset),this._c(t),t.minBarSpacing===void 0&&t.maxBarSpacing===void 0||this.sn.Ms(t.barSpacing??this.oc),t.ignoreWhitespaceIndices!==void 0&&t.ignoreWhitespaceIndices!==this.yn.ignoreWhitespaceIndices&&this.dc(),this.vc(),this.uc(),t.enableConflation===void 0&&t.conflationThresholdFactor===void 0||this.cc(),this.tc.p()}Rn(t){return this.Yu[t]?.time??null}en(t){return this.Yu[t]??null}Mc(t,e){if(this.Yu.length<1)return null;if(this.Pu.key(t)>this.Pu.key(this.Yu[this.Yu.length-1].time))return e?this.Yu.length-1:null;const n=hs(this.Yu,this.Pu.key(t),((s,r)=>this.Pu.key(s.time)<r));return this.Pu.key(t)<this.Pu.key(this.Yu[n].time)?e?n:null:n}Zi(){return this.k_===0||this.Yu.length===0||this.qu===null}gc(){return this.Yu.length>0}Ee(){return this.bc(),this.Zu.Uu()}Sc(){return this.bc(),this.Zu.$u()}xc(){const t=this.Ee();if(t===null)return null;const e={from:t.Na(),to:t.bi()};return this.Cc(e)}Cc(t){const e=Math.round(t.from),n=Math.round(t.to),s=ut(this.yc()),r=ut(this.Pc());return{from:ut(this.en(Math.max(s,e))),to:ut(this.en(Math.min(r,n)))}}kc(t){return{from:ut(this.Mc(t.from,!0)),to:ut(this.Mc(t.to,!0))}}nn(){return this.k_}H_(t){if(!isFinite(t)||t<=0||this.k_===t)return;const e=this.Sc(),n=this.k_;if(this.k_=t,this.Xu=!0,this.yn.lockVisibleTimeRangeOnResize&&n!==0){const s=this.oc*t/n;this.oc=s}if(this.yn.fixLeftEdge&&e!==null&&e.Na()<=0){const s=n-t;this.lc-=Math.round(s/this.oc)+1,this.Xu=!0}this.Tc(),this.Rc()}jt(t){if(this.Zi()||!ho(t))return 0;const e=this.Dc()+this.lc-t;return this.k_-(e+.5)*this.oc-1}Ic(t,e){const n=this.Dc(),s=e===void 0?0:e.from,r=e===void 0?t.length:e.to;for(let o=s;o<r;o++){const a=t[o].wt,l=n+this.lc-a,c=this.k_-(l+.5)*this.oc-1;t[o]._t=c}}Vc(t,e){const n=Math.ceil(this.Bc(t));return e&&this.yn.ignoreWhitespaceIndices&&!this.Ec(n)?this.Ac(n):n}gs(t){this.Xu=!0,this.lc=t,this.Rc(),this.sn.Lc(),this.sn.mr()}ml(){return this.oc}Ms(t){const e=this.oc;if(this.zc(t),this.yn.rightOffsetPixels!==void 0&&e!==0){const n=this.lc*e/this.oc;this.lc=n}this.Rc(),this.sn.Lc(),this.sn.mr()}Oc(){return this.lc}zl(){if(this.Zi())return null;if(this.sc!==null)return this.sc;const t=this.oc,e=5*(this.sn.N().layout.fontSize+4)/8*(this.yn.tickMarkMaxCharacterLength||8),n=Math.round(e/t),s=ut(this.Ee()),r=Math.max(s.Na(),s.Na()-n),o=Math.max(s.bi(),s.bi()-n),a=this.Ku.zu(t,e,this.yn.ignoreWhitespaceIndices,this.ec,this.rc),l=this.yc()+n,c=this.Pc()-n,h=this.Nc(),u=this.yn.fixLeftEdge||h,d=this.yn.fixRightEdge||h;let f=0;for(const p of a){if(!(r<=p.index&&p.index<=o))continue;let v;f<this.hc.length?(v=this.hc[f],v.coord=this.jt(p.index),v.label=this.Fc(p),v.weight=p.weight):(v={needAlignCoordinate:!1,coord:this.jt(p.index),label:this.Fc(p),weight:p.weight},this.hc.push(v)),this.oc>e/2&&!h?v.needAlignCoordinate=!1:v.needAlignCoordinate=u&&p.index<=l||d&&p.index>=c,f++}return this.hc.length=f,this.sc=this.hc,this.hc}Wc(){let t;this.Xu=!0,this.Ms(this.yn.barSpacing),t=this.yn.rightOffsetPixels!==void 0?this.yn.rightOffsetPixels/this.ml():this.yn.rightOffset,this.gs(t)}Hc(t){this.Xu=!0,this.qu=t,this.Rc(),this.mc()}Uc(t,e){const n=this.Bc(t),s=this.ml(),r=s+e*(s/10);this.Ms(r),this.yn.rightBarStaysOnScroll||this.gs(this.Oc()+(n-this.Bc(t)))}u_(t){this.Po&&this.v_(),this.yo===null&&this.nc===null&&(this.Zi()||(this.yo=t,this.$c()))}c_(t){if(this.nc===null)return;const e=Xr(this.k_-t,0,this.k_),n=Xr(this.k_-ut(this.yo),0,this.k_);e!==0&&n!==0&&this.Ms(this.nc.ml*e/n)}d_(){this.yo!==null&&(this.yo=null,this.jc())}f_(t){this.Po===null&&this.nc===null&&(this.Zi()||(this.Po=t,this.$c()))}p_(t){if(this.Po===null)return;const e=(this.Po-t)/this.ml();this.lc=ut(this.nc).Oc+e,this.Xu=!0,this.Rc()}v_(){this.Po!==null&&(this.Po=null,this.jc())}qc(){this.Yc(this.yn.rightOffset)}Yc(t,e=400){if(!isFinite(t))throw new RangeError("offset is required and must be finite number");if(!isFinite(e)||e<=0)throw new RangeError("animationDuration (optional) must be finite positive number");const n=this.lc,s=performance.now();this.sn.ps({Kc:r=>(r-s)/e>=1,Gc:r=>{const o=(r-s)/e;return o>=1?t:n+(t-n)*o}})}Pt(t,e){this.Xu=!0,this.Yu=t,this.Ku.Au(t,e),this.Rc()}Zc(){return this.Ju}Xc(){return this.Qu}Jc(){return this.tc}Dc(){return this.qu||0}Qc(t,e){const n=t.Iu(),s=e&&this.yn.rightOffsetPixels||0;this.zc((this.k_-s)/n),this.lc=t.bi()-this.Dc(),e&&(this.lc=s?s/this.ml():this.yn.rightOffset),this.Rc(),this.Xu=!0,this.sn.Lc(),this.sn.mr()}td(){const t=this.yc(),e=this.Pc();if(t===null||e===null)return;const n=!this.yn.rightOffsetPixels&&this.yn.rightOffset||0;this.Qc(new Jr(t,e+n),!0)}nd(t){const e=new Jr(t.from,t.to);this.Qc(e)}rn(t){return this.Do.timeFormatter!==void 0?this.Do.timeFormatter(t.originalTime):this.Pu.formatHorzItem(t.time)}dc(){if(!this.yn.ignoreWhitespaceIndices)return;this.ec.clear();const t=this.sn.Jn();for(const e of t)for(const n of e.fl())this.ec.set(n,!0);this.rc++}sd(){return this.ac}Sl(){const t=1/(window.devicePixelRatio||1),e=this.yn.minBarSpacing;if(e>=t)return[1];const n=[1];let s=2;for(;s<=512;)e<t/s&&n.push(s),s*=2;return n}Nc(){const t=this.sn.N().handleScroll,e=this.sn.N().handleScale;return!(t.horzTouchDrag||t.mouseWheel||t.pressedMouseMove||t.vertTouchDrag||e.axisDoubleClickReset.time||e.axisPressedMouseMove.time||e.mouseWheel||e.pinch)}yc(){return this.Yu.length===0?null:0}Pc(){return this.Yu.length===0?null:this.Yu.length-1}ed(t){return(this.k_-1-t)/this.oc}Bc(t){const e=this.ed(t),n=this.Dc()+this.lc-e;return Math.round(1e6*n)/1e6}zc(t){const e=this.oc;this.oc=t,this.Tc(),e!==this.oc&&(this.Xu=!0,this.rd(),this.cc())}bc(){if(!this.Xu)return;if(this.Xu=!1,this.Zi())return void this.hd(Xs.ju());const t=this.Dc(),e=this.k_/this.oc,n=this.lc+t,s=new Jr(n-e+1,n);this.hd(new Xs(s))}Tc(){const t=Xr(this.oc,this.ad(),this.ld());this.oc!==t&&(this.oc=t,this.Xu=!0)}ld(){return this.yn.maxBarSpacing>0?this.yn.maxBarSpacing:.5*this.k_}ad(){return this.yn.fixLeftEdge&&this.yn.fixRightEdge&&this.Yu.length!==0?this.k_/this.Yu.length:this.yn.minBarSpacing}cc(){if(!this.yn.enableConflation)return void(this.ac=1);const t=1/(window.devicePixelRatio||1)*(this.yn.conflationThresholdFactor??1);if(this.oc>=t)return void(this.ac=1);const e=t/this.oc,n=Math.pow(2,Math.floor(Math.log2(e)));this.ac=Math.min(n,512)}Rc(){const t=this.od();t!==null&&this.lc<t&&(this.lc=t,this.Xu=!0);const e=this._d();this.lc>e&&(this.lc=e,this.Xu=!0)}od(){const t=this.yc(),e=this.qu;return t===null||e===null?null:t-e-1+(this.yn.fixLeftEdge?this.k_/this.oc:Math.min(2,this.Yu.length))}_d(){return this.yn.fixRightEdge?0:this.k_/this.oc-Math.min(2,this.Yu.length)}$c(){this.nc={ml:this.ml(),Oc:this.Oc()}}jc(){this.nc=null}Fc(t){let e=this.Gu.get(t.weight);return e===void 0&&(e=new eT((n=>this.ud(n)),this.Pu),this.Gu.set(t.weight,e)),e.ku(t)}ud(t){return this.Pu.formatTickmark(t,this.Do)}hd(t){const e=this.Zu;this.Zu=t,jp(e.Uu(),this.Zu.Uu())||this.Ju.p(),jp(e.$u(),this.Zu.$u())||this.Qu.p(),this.rd()}rd(){this.sc=null}vc(){this.rd(),this.Gu.clear()}uc(){this.Pu.updateFormatter(this.Do)}mc(){if(!this.yn.fixLeftEdge)return;const t=this.yc();if(t===null)return;const e=this.Ee();if(e===null)return;const n=e.Na()-t;if(n<0){const s=this.lc-n-1;this.gs(s)}this.Tc()}wc(){this.Rc(),this.Tc()}Ec(t){return!this.yn.ignoreWhitespaceIndices||this.ec.get(t)||!1}Ac(t){const e=(function*(s){const r=Math.round(s),o=r<s;let a=1;for(;;)o?(yield r+a,yield r-a):(yield r-a,yield r+a),a++})(t),n=this.Pc();for(;n;){const s=e.next().value;if(this.ec.get(s))return s;if(s<0||s>n)break}return t}_c(t){if(t.rightOffsetPixels!==void 0){const e=t.rightOffsetPixels/(t.barSpacing||this.oc);this.sn.gs(e)}}}var Zp,Jp,tm,$h,em;(function(i){i[i.OnTouchEnd=0]="OnTouchEnd",i[i.OnNextTap=1]="OnNextTap"})(Zp||(Zp={}));class rT{constructor(t,e,n){this.dd=[],this.fd=[],this.pd=null,this.k_=0,this.vd=null,this.md=new fe,this.wd=new fe,this.Md=null,this.gd=t,this.yn=e,this.Pu=n,this.Io=new tC(this.yn.layout.colorParsers),this.bd=new J1(this),this.ia=new sT(this,e.timeScale,this.yn.localization,n),this.Ct=new dC(this,e.crosshair),this.Sd=new $C(e.crosshair),e.addDefaultPane&&(this.xd(0),this.dd[0].W_(2)),this.Cd=this.yd(0),this.Pd=this.yd(1)}ka(){this.kd(we.ys())}mr(){this.kd(we.Cs())}Ya(){this.kd(new we(1))}Ta(t){const e=this.Td(t);this.kd(e)}cu(){return this.vd}Rd(t){if(this.vd?.uu===t?.uu&&this.vd?.bu?.te===t?.bu?.te&&this.vd?.bu?.ie===t?.bu?.ie&&this.vd?.gu===t?.gu&&this.vd?.ee===t?.ee)return;const e=this.vd;this.vd=t,e!==null&&this.Ta(e.uu),t!==null&&t.uu!==e?.uu&&this.Ta(t.uu)}N(){return this.yn}vr(t){rn(this.yn,t),this.dd.forEach((e=>e.z_(t))),t.timeScale!==void 0&&this.ia.vr(t.timeScale),t.localization!==void 0&&this.ia.fc(t.localization),(t.leftPriceScale||t.rightPriceScale)&&this.md.p(),this.Cd=this.yd(0),this.Pd=this.yd(1),this.ka()}Dd(t,e,n=0){const s=this.dd[n];if(s===void 0)return;if(t==="left")return rn(this.yn,{leftPriceScale:e}),s.z_({leftPriceScale:e}),this.md.p(),void this.ka();if(t==="right")return rn(this.yn,{rightPriceScale:e}),s.z_({rightPriceScale:e}),this.md.p(),void this.ka();const r=this.Id(t,n);r!==null&&(r.Ft.vr(e),this.md.p())}Id(t,e){const n=this.dd[e];if(n===void 0)return null;const s=n.O_(t);return s!==null?{Kn:n,Ft:s}:null}Et(){return this.ia}Gn(){return this.dd}Vd(){return this.Ct}Bd(){return this.wd}Ed(t,e){t.$o(e),this.Lc()}H_(t){this.k_=t,this.ia.H_(this.k_),this.dd.forEach((e=>e.H_(t))),this.Lc()}Ad(t){this.dd.length!==1&&(Me(t>=0&&t<this.dd.length,"Invalid pane index"),this.dd.splice(t,1),this.ka())}Ld(t,e){if(this.dd.length<2)return;Me(t>=0&&t<this.dd.length,"Invalid pane index");const n=this.dd[t],s=this.dd.reduce(((u,d)=>u+d.F_()),0),r=this.dd.reduce(((u,d)=>u+d.$t()),0),o=r-30*(this.dd.length-1);e=Math.min(o,Math.max(30,e));const a=s/r,l=n.$t();n.W_(e*a);let c=e-l,h=this.dd.length-1;for(const u of this.dd)if(u!==n){const d=Math.min(o,Math.max(30,u.$t()-c/h));c-=u.$t()-d,h-=1;const f=d*a;u.W_(f)}this.ka()}zd(t,e){Me(t>=0&&t<this.dd.length&&e>=0&&e<this.dd.length,"Invalid pane index");const n=this.dd[t],s=this.dd[e];this.dd[t]=s,this.dd[e]=n,this.ka()}Od(t,e){if(Me(t>=0&&t<this.dd.length&&e>=0&&e<this.dd.length,"Invalid pane index"),t===e)return;const[n]=this.dd.splice(t,1);this.dd.splice(e,0,n),this.ka()}Q_(t,e,n){t.Q_(e,n)}tu(t,e,n){t.tu(e,n),this.Ra(),this.kd(this.Nd(t,2))}iu(t,e){t.iu(e),this.kd(this.Nd(t,2))}nu(t,e,n){e.zo()||t.nu(e,n)}su(t,e,n){e.zo()||(t.su(e,n),this.Ra(),this.kd(this.Nd(t,2)))}eu(t,e){e.zo()||(t.eu(e),this.kd(this.Nd(t,2)))}au(t,e){t.au(e),this.kd(this.Nd(t,2))}Fd(t){this.ia.u_(t)}Wd(t,e){const n=this.Et();if(n.Zi()||e===0)return;const s=n.nn();t=Math.max(1,Math.min(t,s)),n.Uc(t,e),this.Lc()}Hd(t){this.Ud(0),this.$d(t),this.jd()}qd(t){this.ia.c_(t),this.Lc()}Yd(){this.ia.d_(),this.mr()}Ud(t){this.ia.f_(t)}$d(t){this.ia.p_(t),this.Lc()}jd(){this.ia.v_(),this.mr()}Jn(){return this.fd}Wn(){return this.pd===null&&(this.pd=this.fd.filter((t=>t.It()))),this.pd}Pa(){this.pd=null}Kd(t,e,n,s,r){this.Ct.In(t,e);let o=NaN,a=this.ia.Vc(t,!0);const l=this.ia.Ee();l!==null&&(a=Math.min(Math.max(l.Na(),a),l.bi())),a=this.Ct.Fn(a);const c=s.kn(),h=c.Lt();if(h!==null&&(o=c.Tn(e,h)),o=this.Sd.Pl(o,a,s),this.Ct.An(a,o,s),this.Ya(),!r){const u=q0(s,t,e);this.Rd(u&&{uu:u.uu,bu:u.bu,gu:u.gu||null,ee:u.ee}),this.wd.p(this.Ct.Bt(),{x:t,y:e},n)}}Gd(t,e,n){const s=n.kn(),r=s.Lt(),o=s.Nt(t,ut(r)),a=this.ia.Mc(e,!0),l=this.ia.jt(ut(a));this.Kd(l,o,null,n,!0)}Zd(t){this.Vd().zn(),this.Ya(),t||this.wd.p(null,null,null)}Ra(){const t=this.Ct.Kn();if(t!==null){const e=this.Ct.Bn(),n=this.Ct.En();this.Kd(e,n,null,t)}this.Ct.Nn()}Xd(t,e,n){const s=this.ia.Rn(0);e!==void 0&&n!==void 0&&this.ia.Pt(e,n);const r=this.ia.Rn(0),o=this.ia.Dc(),a=this.ia.Ee();if(a!==null&&s!==null&&r!==null){const l=a.ze(o),c=this.Pu.key(s)>this.Pu.key(r),h=t!==null&&t>o&&!c,u=this.ia.N().allowShiftVisibleRangeOnWhitespaceReplacement,d=l&&(n!==void 0||u)&&this.ia.N().shiftVisibleRangeOnNewBar;if(h&&!d){const f=t-o;this.ia.gs(this.ia.Oc()-f)}}this.ia.Hc(t)}Ba(t){t!==null&&t.ou()}Ks(t){if((function(n){return n instanceof Gh})(t))return t;const e=this.dd.find((n=>n.Dt().includes(t)));return e===void 0?null:e}Lc(){this.dd.forEach((t=>t.ou())),this.Ra()}m(){this.dd.forEach((t=>t.m())),this.dd.length=0,this.yn.localization.priceFormatter=void 0,this.yn.localization.percentageFormatter=void 0,this.yn.localization.timeFormatter=void 0}Jd(){return this.bd}Js(){return this.bd.N()}N_(){return this.md}Qd(t,e){const n=this.xd(e);this.tf(t,n),this.fd.push(t),this.Pa(),this.fd.length===1?this.ka():this.mr()}if(t){const e=this.Ks(t),n=this.fd.indexOf(t);Me(n!==-1,"Series not found");const s=ut(e);this.fd.splice(n,1),s.l_(t),t.m&&t.m(),this.Pa(),this.ia.dc(),this.nf(s)}ya(t,e){const n=ut(this.Ks(t));n.l_(t,!0),n.h_(t,e,!0)}td(){const t=we.Cs();t.us(),this.kd(t)}sf(t){const e=we.Cs();e.fs(t),this.kd(e)}ws(){const t=we.Cs();t.ws(),this.kd(t)}Ms(t){const e=we.Cs();e.Ms(t),this.kd(e)}gs(t){const e=we.Cs();e.gs(t),this.kd(e)}ps(t){const e=we.Cs();e.ps(t),this.kd(e)}cs(){const t=we.Cs();t.cs(),this.kd(t)}ef(){const t=this.yn.defaultVisiblePriceScaleId,e=this.yn.leftPriceScale.visible;return e!==this.yn.rightPriceScale.visible?e?"left":"right":t}rf(t,e){if(Me(e>=0,"Index should be greater or equal to 0"),e===this.hf(t))return;const n=ut(this.Ks(t));n.l_(t);const s=this.xd(e);this.tf(t,s);let r=!1;n.kl().length===0&&(r=this.nf(n)),r||this.ka()}af(){return this.Pd}$(){return this.Cd}Ut(t){const e=this.Pd,n=this.Cd;if(e===n)return e;if(t=Math.max(0,Math.min(100,Math.round(100*t))),this.Md===null||this.Md.ah!==n||this.Md.oh!==e)this.Md={ah:n,oh:e,lf:new Map};else{const r=this.Md.lf.get(t);if(r!==void 0)return r}const s=this.Io.tt(n,e,t/100);return this.Md.lf.set(t,s),s}_f(t){return this.dd.indexOf(t)}Xi(){return this.Io}uf(){return this.cf()}cf(t){const e=new Gh(this.ia,this);this.dd.push(e);const n=t??this.dd.length-1,s=we.ys();return s.es(n,{rs:0,hs:!0}),this.kd(s),e}xd(t){return Me(t>=0,"Index should be greater or equal to 0"),(t=Math.min(this.dd.length,t))<this.dd.length?this.dd[t]:this.cf(t)}hf(t){return this.dd.findIndex((e=>e.Y_().includes(t)))}Nd(t,e){const n=new we(e);if(t!==null){const s=this.dd.indexOf(t);n.es(s,{rs:e})}return n}Td(t,e){return e===void 0&&(e=2),this.Nd(this.Ks(t),e)}kd(t){this.gd&&this.gd(t),this.dd.forEach((e=>e.wu().wr().Pt()))}tf(t,e){const n=t.N().priceScaleId,s=n!==void 0?n:this.ef();e.h_(t,s),pl(s)||t.vr(t.N())}yd(t){const e=this.yn.layout;return e.background.type==="gradient"?t===0?e.background.topColor:e.background.bottomColor:e.background.color}nf(t){return!t.q_()&&t.kl().length===0&&this.dd.length>1&&(this.dd.splice(this._f(t),1),this.ka(),!0)}}function K0(i){if(i>=1)return 0;let t=0;for(;t<8;t++){const e=Math.round(i);if(Math.abs(e-i)<1e-8)return t;i*=10}return t}function Qh(i){return!lr(i)&&!yo(i)}function Y0(i){return lr(i)}(function(i){i[i.Disabled=0]="Disabled",i[i.Continuous=1]="Continuous",i[i.OnDataUpdate=2]="OnDataUpdate"})(Jp||(Jp={})),(function(i){i[i.LastBar=0]="LastBar",i[i.LastVisible=1]="LastVisible"})(tm||(tm={})),(function(i){i.Solid="solid",i.VerticalGradient="gradient"})($h||($h={})),(function(i){i[i.Year=0]="Year",i[i.Month=1]="Month",i[i.DayOfMonth=2]="DayOfMonth",i[i.Time=3]="Time",i[i.TimeWithSeconds=4]="TimeWithSeconds"})(em||(em={}));const nm=i=>i.getUTCFullYear();function oT(i,t,e){return t.replace(/yyyy/g,(n=>oi(nm(n),4))(i)).replace(/yy/g,(n=>oi(nm(n)%100,2))(i)).replace(/MMMM/g,((n,s)=>new Date(n.getUTCFullYear(),n.getUTCMonth(),1).toLocaleString(s,{month:"long"}))(i,e)).replace(/MMM/g,((n,s)=>new Date(n.getUTCFullYear(),n.getUTCMonth(),1).toLocaleString(s,{month:"short"}))(i,e)).replace(/MM/g,(n=>oi((s=>s.getUTCMonth()+1)(n),2))(i)).replace(/dd/g,(n=>oi((s=>s.getUTCDate())(n),2))(i))}class X0{constructor(t="yyyy-MM-dd",e="default"){this.df=t,this.ff=e}ku(t){return oT(t,this.df,this.ff)}}class aT{constructor(t){this.pf=t||"%h:%m:%s"}ku(t){return this.pf.replace("%h",oi(t.getUTCHours(),2)).replace("%m",oi(t.getUTCMinutes(),2)).replace("%s",oi(t.getUTCSeconds(),2))}}const lT={vf:"yyyy-MM-dd",mf:"%h:%m:%s",wf:" ",Mf:"default"};class cT{constructor(t={}){const e={...lT,...t};this.gf=new X0(e.vf,e.Mf),this.bf=new aT(e.mf),this.Sf=e.wf}ku(t){return`${this.gf.ku(t)}${this.Sf}${this.bf.ku(t)}`}}function ga(i){return 60*i*60*1e3}function Rc(i){return 60*i*1e3}const va=[{xf:(im=1,1e3*im),Cf:10},{xf:Rc(1),Cf:20},{xf:Rc(5),Cf:21},{xf:Rc(30),Cf:22},{xf:ga(1),Cf:30},{xf:ga(3),Cf:31},{xf:ga(6),Cf:32},{xf:ga(12),Cf:33}];var im;function sm(i,t){if(i.getUTCFullYear()!==t.getUTCFullYear())return 70;if(i.getUTCMonth()!==t.getUTCMonth())return 60;if(i.getUTCDate()!==t.getUTCDate())return 50;for(let e=va.length-1;e>=0;--e)if(Math.floor(t.getTime()/va[e].xf)!==Math.floor(i.getTime()/va[e].xf))return va[e].Cf;return 0}function Lc(i){let t=i;if(yo(i)&&(t=Xu(i)),!Qh(t))throw new Error("time must be of type BusinessDay");const e=new Date(Date.UTC(t.year,t.month-1,t.day,0,0,0,0));return{yf:Math.round(e.getTime()/1e3),Pf:t}}function rm(i){if(!Y0(i))throw new Error("time must be of type isUTCTimestamp");return{yf:i}}function Xu(i){const t=new Date(i);if(isNaN(t.getTime()))throw new Error(`Invalid date string=${i}, expected format=yyyy-mm-dd`);return{day:t.getUTCDate(),month:t.getUTCMonth()+1,year:t.getUTCFullYear()}}function om(i){yo(i.time)&&(i.time=Xu(i.time))}class am{options(){return this.yn}setOptions(t){this.yn=t,this.updateFormatter(t.localization)}preprocessData(t){Array.isArray(t)?(function(e){e.forEach(om)})(t):om(t)}createConverterToInternalObj(t){return ut((function(e){return e.length===0?null:Qh(e[0].time)||yo(e[0].time)?Lc:rm})(t))}key(t){return typeof t=="object"&&"yf"in t?t.yf:this.key(this.convertHorzItemToInternal(t))}cacheKey(t){const e=t;return e.Pf===void 0?new Date(1e3*e.yf).getTime():new Date(Date.UTC(e.Pf.year,e.Pf.month-1,e.Pf.day)).getTime()}convertHorzItemToInternal(t){return Y0(e=t)?rm(e):Qh(e)?Lc(e):Lc(Xu(e));var e}updateFormatter(t){if(!this.yn)return;const e=t.dateFormat;this.yn.timeScale.timeVisible?this.kf=new cT({vf:e,mf:this.yn.timeScale.secondsVisible?"%h:%m:%s":"%h:%m",wf:"   ",Mf:t.locale}):this.kf=new X0(e,t.locale)}formatHorzItem(t){const e=t;return this.kf.ku(new Date(1e3*e.yf))}formatTickmark(t,e){const n=(function(r,o,a){switch(r){case 0:case 10:return o?a?4:3:2;case 20:case 21:case 22:case 30:case 31:case 32:case 33:return o?3:2;case 50:return 2;case 60:return 1;case 70:return 0}})(t.weight,this.yn.timeScale.timeVisible,this.yn.timeScale.secondsVisible),s=this.yn.timeScale;if(s.tickMarkFormatter!==void 0){const r=s.tickMarkFormatter(t.originalTime,n,e.locale);if(r!==null)return r}return(function(r,o,a){const l={};switch(o){case 0:l.year="numeric";break;case 1:l.month="short";break;case 2:l.day="numeric";break;case 3:l.hour12=!1,l.hour="2-digit",l.minute="2-digit";break;case 4:l.hour12=!1,l.hour="2-digit",l.minute="2-digit",l.second="2-digit"}const c=r.Pf===void 0?new Date(1e3*r.yf):new Date(Date.UTC(r.Pf.year,r.Pf.month-1,r.Pf.day));return new Date(c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate(),c.getUTCHours(),c.getUTCMinutes(),c.getUTCSeconds(),c.getUTCMilliseconds()).toLocaleString(a,l)})(t.time,n,e.locale)}maxTickMarkWeight(t){let e=t.reduce(iT,t[0]).weight;return e>30&&e<50&&(e=30),e}fillWeightsForPoints(t,e){(function(n,s=0){if(n.length===0)return;let r=s===0?null:n[s-1].time.yf,o=r!==null?new Date(1e3*r):null,a=0;for(let l=s;l<n.length;++l){const c=n[l],h=new Date(1e3*c.time.yf);o!==null&&(c.timeWeight=sm(h,o)),a+=c.time.yf-(r||c.time.yf),r=c.time.yf,o=h}if(s===0&&n.length>1){const l=Math.ceil(a/(n.length-1)),c=new Date(1e3*(n[0].time.yf-l));n[0].timeWeight=sm(new Date(1e3*n[0].time.yf),c)}})(t,e)}static Tf(t){return rn({localization:{dateFormat:"dd MMM 'yy"}},t??{})}}const cr=typeof window<"u";function lm(){return!!cr&&window.navigator.userAgent.toLowerCase().indexOf("firefox")>-1}function Pc(){return!!cr&&/iPhone|iPad|iPod/.test(window.navigator.platform)}function hT(i,t){switch(i){case"custom":return t!==void 0?"custom-object":"series";case"price-line":return"custom-price-line";case"marker":return"series-marker";case"primitive":return"primitive";default:return"series"}}function qh(i){return i+i%2}function uT(i){cr&&window.chrome!==void 0&&i.addEventListener("mousedown",(t=>{if(t.button===1)return t.preventDefault(),!1}))}class vl{constructor(t,e,n){this.Rf=0,this.Df=null,this.If={_t:Number.NEGATIVE_INFINITY,ut:Number.POSITIVE_INFINITY},this.Vf=0,this.Bf=null,this.Ef={_t:Number.NEGATIVE_INFINITY,ut:Number.POSITIVE_INFINITY},this.Af=null,this.Lf=!1,this.zf=null,this.Of=null,this.Nf=!1,this.Ff=!1,this.Wf=!1,this.Hf=null,this.Uf=null,this.$f=null,this.jf=null,this.qf=null,this.Yf=null,this.Kf=null,this.Gf=0,this.Zf=!1,this.Xf=!1,this.Jf=!1,this.Qf=0,this.tp=null,this.ip=!Pc(),this.np=s=>{this.sp(s)},this.ep=s=>{if(this.rp(s)){const r=this.hp(s);if(++this.Vf,this.Bf&&this.Vf>1){const{ap:o}=this.lp(Ln(s),this.Ef);o<30&&!this.Wf&&this.op(r,this.up._p),this.cp()}}else{const r=this.hp(s);if(++this.Rf,this.Df&&this.Rf>1){const{ap:o}=this.lp(Ln(s),this.If);o<5&&!this.Ff&&this.dp(r,this.up.fp),this.pp()}}},this.vp=t,this.up=e,this.yn=n,this.mp()}m(){this.Hf!==null&&(this.Hf(),this.Hf=null),this.Uf!==null&&(this.Uf(),this.Uf=null),this.jf!==null&&(this.jf(),this.jf=null),this.qf!==null&&(this.qf(),this.qf=null),this.Yf!==null&&(this.Yf(),this.Yf=null),this.$f!==null&&(this.$f(),this.$f=null),this.wp(),this.pp()}Mp(t){this.jf&&this.jf();const e=this.gp.bind(this);if(this.jf=()=>{this.vp.removeEventListener("mousemove",e)},this.vp.addEventListener("mousemove",e),this.rp(t))return;const n=this.hp(t);this.dp(n,this.up.bp),this.ip=!0}pp(){this.Df!==null&&clearTimeout(this.Df),this.Rf=0,this.Df=null,this.If={_t:Number.NEGATIVE_INFINITY,ut:Number.POSITIVE_INFINITY}}cp(){this.Bf!==null&&clearTimeout(this.Bf),this.Vf=0,this.Bf=null,this.Ef={_t:Number.NEGATIVE_INFINITY,ut:Number.POSITIVE_INFINITY}}gp(t){if(this.Jf||this.Of!==null||this.rp(t))return;const e=this.hp(t);this.dp(e,this.up.Sp),this.ip=!0}xp(t){const e=Dc(t.changedTouches,ut(this.tp));if(e===null||(this.Qf=_a(t),this.Kf!==null)||this.Xf)return;this.Zf=!0;const n=this.lp(Ln(e),ut(this.Of)),{Cp:s,yp:r,ap:o}=n;if(this.Nf||!(o<5)){if(!this.Nf){const a=.5*s,l=r>=a&&!this.yn.Pp(),c=a>r&&!this.yn.kp();l||c||(this.Xf=!0),this.Nf=!0,this.Wf=!0,this.wp(),this.cp()}if(!this.Xf){const a=this.hp(t,e);this.op(a,this.up.Tp),Us(t)}}}Rp(t){if(t.button!==0)return;const e=this.lp(Ln(t),ut(this.zf)),{ap:n}=e;if(n>=5&&(this.Ff=!0,this.pp()),this.Ff){const s=this.hp(t);this.dp(s,this.up.Dp)}}lp(t,e){const n=Math.abs(e._t-t._t),s=Math.abs(e.ut-t.ut);return{Cp:n,yp:s,ap:n+s}}Ip(t){let e=Dc(t.changedTouches,ut(this.tp));if(e===null&&t.touches.length===0&&(e=t.changedTouches[0]),e===null)return;this.tp=null,this.Qf=_a(t),this.wp(),this.Of=null,this.Yf&&(this.Yf(),this.Yf=null);const n=this.hp(t,e);if(this.op(n,this.up.Vp),++this.Vf,this.Bf&&this.Vf>1){const{ap:s}=this.lp(Ln(e),this.Ef);s<30&&!this.Wf&&this.op(n,this.up._p),this.cp()}else this.Wf||(this.op(n,this.up.Bp),this.up.Bp&&Us(t));this.Vf===0&&Us(t),t.touches.length===0&&this.Lf&&(this.Lf=!1,Us(t))}sp(t){if(t.button!==0)return;const e=this.hp(t);if(this.zf=null,this.Jf=!1,this.qf&&(this.qf(),this.qf=null),lm()&&this.vp.ownerDocument.documentElement.removeEventListener("mouseleave",this.np),!this.rp(t))if(this.dp(e,this.up.Ep),++this.Rf,this.Df&&this.Rf>1){const{ap:n}=this.lp(Ln(t),this.If);n<5&&!this.Ff&&this.dp(e,this.up.fp),this.pp()}else this.Ff||this.dp(e,this.up.Ap)}wp(){this.Af!==null&&(clearTimeout(this.Af),this.Af=null)}Lp(t){if(this.tp!==null)return;const e=t.changedTouches[0];this.tp=e.identifier,this.Qf=_a(t);const n=this.vp.ownerDocument.documentElement;this.Wf=!1,this.Nf=!1,this.Xf=!1,this.Of=Ln(e),this.Yf&&(this.Yf(),this.Yf=null);{const r=this.xp.bind(this),o=this.Ip.bind(this);this.Yf=()=>{n.removeEventListener("touchmove",r),n.removeEventListener("touchend",o)},n.addEventListener("touchmove",r,{passive:!1}),n.addEventListener("touchend",o,{passive:!1}),this.wp(),this.Af=setTimeout(this.zp.bind(this,t),240)}const s=this.hp(t,e);this.op(s,this.up.Op),this.Bf||(this.Vf=0,this.Bf=setTimeout(this.cp.bind(this),500),this.Ef=Ln(e))}Np(t){if(t.button!==0)return;const e=this.vp.ownerDocument.documentElement;lm()&&e.addEventListener("mouseleave",this.np),this.Ff=!1,this.zf=Ln(t),this.qf&&(this.qf(),this.qf=null);{const s=this.Rp.bind(this),r=this.sp.bind(this);this.qf=()=>{e.removeEventListener("mousemove",s),e.removeEventListener("mouseup",r)},e.addEventListener("mousemove",s),e.addEventListener("mouseup",r)}if(this.Jf=!0,this.rp(t))return;const n=this.hp(t);this.dp(n,this.up.Fp),this.Df||(this.Rf=0,this.Df=setTimeout(this.pp.bind(this),500),this.If=Ln(t))}mp(){this.vp.addEventListener("mouseenter",this.Mp.bind(this)),this.vp.addEventListener("touchcancel",this.wp.bind(this));{const t=this.vp.ownerDocument,e=n=>{this.up.Wp&&(n.composed&&this.vp.contains(n.composedPath()[0])||n.target&&this.vp.contains(n.target)||this.up.Wp())};this.Uf=()=>{t.removeEventListener("touchstart",e)},this.Hf=()=>{t.removeEventListener("mousedown",e)},t.addEventListener("mousedown",e),t.addEventListener("touchstart",e,{passive:!0})}Pc()&&(this.$f=()=>{this.vp.removeEventListener("dblclick",this.ep)},this.vp.addEventListener("dblclick",this.ep)),this.vp.addEventListener("mouseleave",this.Hp.bind(this)),this.vp.addEventListener("touchstart",this.Lp.bind(this),{passive:!0}),uT(this.vp),this.vp.addEventListener("mousedown",this.Np.bind(this)),this.Up(),this.vp.addEventListener("touchmove",(()=>{}),{passive:!1})}Up(){this.up.$p===void 0&&this.up.jp===void 0&&this.up.qp===void 0||(this.vp.addEventListener("touchstart",(t=>this.Yp(t.touches)),{passive:!0}),this.vp.addEventListener("touchmove",(t=>{if(t.touches.length===2&&this.Kf!==null&&this.up.jp!==void 0){const e=cm(t.touches[0],t.touches[1])/this.Gf;this.up.jp(this.Kf,e),Us(t)}}),{passive:!1}),this.vp.addEventListener("touchend",(t=>{this.Yp(t.touches)})))}Yp(t){t.length===1&&(this.Zf=!1),t.length!==2||this.Zf||this.Lf?this.Kp():this.Gp(t)}Gp(t){const e=this.vp.getBoundingClientRect()||{left:0,top:0};this.Kf={_t:(t[0].clientX-e.left+(t[1].clientX-e.left))/2,ut:(t[0].clientY-e.top+(t[1].clientY-e.top))/2},this.Gf=cm(t[0],t[1]),this.up.$p!==void 0&&this.up.$p(),this.wp()}Kp(){this.Kf!==null&&(this.Kf=null,this.up.qp!==void 0&&this.up.qp())}Hp(t){if(this.jf&&this.jf(),this.rp(t)||!this.ip)return;const e=this.hp(t);this.dp(e,this.up.Zp),this.ip=!Pc()}zp(t){const e=Dc(t.touches,ut(this.tp));if(e===null)return;const n=this.hp(t,e);this.op(n,this.up.Xp),this.Wf=!0,this.Lf=!0}rp(t){return t.sourceCapabilities&&t.sourceCapabilities.firesTouchEvents!==void 0?t.sourceCapabilities.firesTouchEvents:_a(t)<this.Qf+500}op(t,e){e&&e.call(this.up,t)}dp(t,e){e&&e.call(this.up,t)}hp(t,e){const n=e||t,s=this.vp.getBoundingClientRect()||{left:0,top:0};return{clientX:n.clientX,clientY:n.clientY,pageX:n.pageX,pageY:n.pageY,screenX:n.screenX,screenY:n.screenY,localX:n.clientX-s.left,localY:n.clientY-s.top,ctrlKey:t.ctrlKey,altKey:t.altKey,shiftKey:t.shiftKey,metaKey:t.metaKey,Jp:!t.type.startsWith("mouse")&&t.type!=="contextmenu"&&t.type!=="click",Qp:t.type,tv:n.target,xu:t.view,iv:()=>{t.type!=="touchstart"&&Us(t)}}}}function cm(i,t){const e=i.clientX-t.clientX,n=i.clientY-t.clientY;return Math.sqrt(e*e+n*n)}function Us(i){i.cancelable&&i.preventDefault()}function Ln(i){return{_t:i.pageX,ut:i.pageY}}function _a(i){return i.timeStamp||performance.now()}function Dc(i,t){for(let e=0;e<i.length;++e)if(i[e].identifier===t)return i[e];return null}class dT{constructor(t,e,n){this.nv=null,this.sv=null,this.ev=!0,this.rv=null,this.hv=t,this.av=t.lv()[e],this.ov=t.lv()[n],this._v=document.createElement("tr"),this._v.style.height="1px",this.uv=document.createElement("td"),this.uv.style.position="relative",this.uv.style.padding="0",this.uv.style.margin="0",this.uv.setAttribute("colspan","3"),this.cv(),this._v.appendChild(this.uv),this.ev=this.hv.N().layout.panes.enableResize,this.ev?this.dv():(this.nv=null,this.sv=null)}m(){this.sv!==null&&this.sv.m()}fv(){return this._v}pv(){return oe({width:this.av.pv().width,height:1})}vv(){return oe({width:this.av.vv().width,height:1*window.devicePixelRatio})}mv(t,e,n){const s=this.vv();t.fillStyle=this.hv.N().layout.panes.separatorColor,t.fillRect(e,n,s.width,s.height)}Pt(){this.cv(),this.hv.N().layout.panes.enableResize!==this.ev&&(this.ev=this.hv.N().layout.panes.enableResize,this.ev?this.dv():(this.nv!==null&&(this.uv.removeChild(this.nv.wv),this.uv.removeChild(this.nv.Mv),this.nv=null),this.sv!==null&&(this.sv.m(),this.sv=null)))}dv(){const t=document.createElement("div"),e=t.style;e.position="fixed",e.display="none",e.zIndex="49",e.top="0",e.left="0",e.width="100%",e.height="100%",e.cursor="row-resize",this.uv.appendChild(t);const n=document.createElement("div"),s=n.style;s.position="absolute",s.zIndex="50",s.top="-4px",s.height="9px",s.width="100%",s.backgroundColor="",s.cursor="row-resize",this.uv.appendChild(n);const r={bp:this.gv.bind(this),Zp:this.bv.bind(this),Fp:this.Sv.bind(this),Op:this.Sv.bind(this),Dp:this.xv.bind(this),Tp:this.xv.bind(this),Ep:this.Cv.bind(this),Vp:this.Cv.bind(this)};this.sv=new vl(n,r,{Pp:()=>!1,kp:()=>!0}),this.nv={Mv:n,wv:t}}cv(){this.uv.style.background=this.hv.N().layout.panes.separatorColor}gv(t){this.nv!==null&&(this.nv.Mv.style.backgroundColor=this.hv.N().layout.panes.separatorHoverColor)}bv(t){this.nv!==null&&this.rv===null&&(this.nv.Mv.style.backgroundColor="")}Sv(t){if(this.nv===null)return;const e=this.av.yv().F_()+this.ov.yv().F_(),n=e/(this.av.pv().height+this.ov.pv().height),s=30*n;e<=2*s||(this.rv={Pv:t.pageY,kv:this.av.yv().F_(),Tv:e-s,Rv:e,Dv:n,Iv:s},this.nv.wv.style.display="block")}xv(t){const e=this.rv;if(e===null)return;const n=(t.pageY-e.Pv)*e.Dv,s=Xr(e.kv+n,e.Iv,e.Tv);this.av.yv().W_(s),this.ov.yv().W_(e.Rv-s),this.hv.Qt().ka()}Cv(t){this.rv!==null&&this.nv!==null&&(this.rv=null,this.nv.wv.style.display="none")}}function Uc(i,t){return i.Vv-t.Vv}function Bc(i,t,e){const n=(i.Vv-t.Vv)/(i.wt-t.wt);return Math.sign(n)*Math.min(Math.abs(n),e)}class fT{constructor(t,e,n,s){this.Bv=null,this.Ev=null,this.Av=null,this.Lv=null,this.zv=null,this.Ov=0,this.Nv=0,this.Fv=t,this.Wv=e,this.Hv=n,this.Ps=s}Uv(t,e){if(this.Bv!==null){if(this.Bv.wt===e)return void(this.Bv.Vv=t);if(Math.abs(this.Bv.Vv-t)<this.Ps)return}this.Lv=this.Av,this.Av=this.Ev,this.Ev=this.Bv,this.Bv={wt:e,Vv:t}}me(t,e){if(this.Bv===null||this.Ev===null||e-this.Bv.wt>50)return;let n=0;const s=Bc(this.Bv,this.Ev,this.Wv),r=Uc(this.Bv,this.Ev),o=[s],a=[r];if(n+=r,this.Av!==null){const c=Bc(this.Ev,this.Av,this.Wv);if(Math.sign(c)===Math.sign(s)){const h=Uc(this.Ev,this.Av);if(o.push(c),a.push(h),n+=h,this.Lv!==null){const u=Bc(this.Av,this.Lv,this.Wv);if(Math.sign(u)===Math.sign(s)){const d=Uc(this.Av,this.Lv);o.push(u),a.push(d),n+=d}}}}let l=0;for(let c=0;c<o.length;++c)l+=a[c]/n*o[c];Math.abs(l)<this.Fv||(this.zv={Vv:t,wt:e},this.Nv=l,this.Ov=(function(c,h){const u=Math.log(h);return Math.log(1*u/-c)/u})(Math.abs(l),this.Hv))}Gc(t){const e=ut(this.zv),n=t-e.wt;return e.Vv+this.Nv*(Math.pow(this.Hv,n)-1)/Math.log(this.Hv)}Kc(t){return this.zv===null||this.$v(t)===this.Ov}$v(t){const e=t-ut(this.zv).wt;return Math.min(e,this.Ov)}}class pT{constructor(t,e){this.jv=void 0,this.qv=void 0,this.Yv=void 0,this.vn=!1,this.Kv=t,this.Gv=e,this.Zv()}Pt(){this.Zv()}Xv(){this.jv&&this.Kv.removeChild(this.jv),this.qv&&this.Kv.removeChild(this.qv),this.jv=void 0,this.qv=void 0}Jv(){return this.vn!==this.Qv()||this.Yv!==this.tm()}tm(){return this.Gv.Qt().Xi().J(this.Gv.N().layout.textColor)>160?"dark":"light"}Qv(){return this.Gv.N().layout.attributionLogo}im(){const t=new URL(location.href);return t.hostname?"&utm_source="+t.hostname+t.pathname:""}Zv(){this.Jv()&&(this.Xv(),this.vn=this.Qv(),this.vn&&(this.Yv=this.tm(),this.qv=document.createElement("style"),this.qv.innerText="a#tv-attr-logo{--fill:#131722;--stroke:#fff;position:absolute;left:10px;bottom:10px;height:19px;width:35px;margin:0;padding:0;border:0;z-index:3;}a#tv-attr-logo[data-dark]{--fill:#D1D4DC;--stroke:#131722;}",this.jv=document.createElement("a"),this.jv.href=`https://www.tradingview.com/?utm_medium=lwc-link&utm_campaign=lwc-chart${this.im()}`,this.jv.title="Charting by TradingView",this.jv.id="tv-attr-logo",this.jv.target="_blank",this.jv.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="35" height="19" fill="none"><g fill-rule="evenodd" clip-path="url(#a)" clip-rule="evenodd"><path fill="var(--stroke)" d="M2 0H0v10h6v9h21.4l.5-1.3 6-15 1-2.7H23.7l-.5 1.3-.2.6a5 5 0 0 0-7-.9V0H2Zm20 17h4l5.2-13 .8-2h-7l-1 2.5-.2.5-1.5 3.8-.3.7V17Zm-.8-10a3 3 0 0 0 .7-2.7A3 3 0 1 0 16.8 7h4.4ZM14 7V2H2v6h6v9h4V7h2Z"/><path fill="var(--fill)" d="M14 2H2v6h6v9h6V2Zm12 15h-7l6-15h7l-6 15Zm-7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></g><defs><clipPath id="a"><path fill="var(--stroke)" d="M0 0h35v19H0z"/></clipPath></defs></svg>',this.jv.toggleAttribute("data-dark",this.Yv==="dark"),this.Kv.appendChild(this.qv),this.Kv.appendChild(this.jv)))}}function us(i,t){const e=ut(i.ownerDocument).createElement("canvas");i.appendChild(e);const n=Y1(e,{options:{allowResizeObserver:!0},transform:(s,r)=>({width:Math.max(s.width,r.width),height:Math.max(s.height,r.height)})});return n.resizeCanvasElement(t),n}function ds(i){i.width=1,i.height=1,i.getContext("2d")?.clearRect(0,0,1,1)}function Pa(i,t,e,n){i.qh&&i.qh(t,e,n)}function Gr(i,t,e,n){i.st(t,e,n)}function Kh(i,t,e,n){j0(i(e,n),t,n)}function j0(i,t,e){for(const n of i){const s=n.Tt(e);s!==null&&t(s)}}function Nc(i,t){return e=>(function(n){return n.Ft!==void 0})(e)?(e.Ft()?.pl()??"")!==t?[]:e.Qa?.(i)??[]:[]}function hm(i,t,e,n){if(!i.length)return;let s=0;const r=i[0].$t(n,!0);let o=t===1?e/2-(i[0].Hi()-r/2):i[0].Hi()-r/2-e/2;o=Math.max(0,o);for(let a=1;a<i.length;a++){const l=i[a],c=i[a-1],h=c.$t(n,!1),u=l.Hi(),d=c.Hi();if(t===1?u>d-h:u<d+h){const f=d-h*t;l.Ui(f);const p=f-t*h/2;if((t===1?p<0:p>e)&&o>0){const v=t===1?-1-p:p-e,g=Math.min(v,o);for(let m=s;m<i.length;m++)i[m].Ui(i[m].Hi()+t*g);o-=g}}else s=a,o=t===1?d-h-u:u-(d+h)}}class um{constructor(t,e,n,s){this.Ki=null,this.nm=null,this.sm=!1,this.rm=new Ya(200),this.hm=null,this.am=0,this.lm=!1,this.om=()=>{this.lm||this.yt._m().Qt().mr()},this.um=()=>{this.lm||this.yt._m().Qt().mr()},this.yt=t,this.yn=e,this.Ro=e.layout,this.bd=n,this.dm=s==="left",this.fm=Nc("normal",s),this.pm=Nc("top",s),this.vm=Nc("bottom",s),this.uv=document.createElement("div"),this.uv.style.height="100%",this.uv.style.overflow="hidden",this.uv.style.width="25px",this.uv.style.left="0",this.uv.style.position="relative",this.wm=us(this.uv,oe({width:16,height:16})),this.wm.subscribeSuggestedBitmapSizeChanged(this.om);const r=this.wm.canvasElement;r.style.position="absolute",r.style.zIndex="1",r.style.left="0",r.style.top="0",this.Mm=us(this.uv,oe({width:16,height:16})),this.Mm.subscribeSuggestedBitmapSizeChanged(this.um);const o=this.Mm.canvasElement;o.style.position="absolute",o.style.zIndex="2",o.style.left="0",o.style.top="0";const a={Fp:this.Sv.bind(this),Op:this.Sv.bind(this),Dp:this.xv.bind(this),Tp:this.xv.bind(this),Wp:this.gm.bind(this),Ep:this.Cv.bind(this),Vp:this.Cv.bind(this),fp:this.bm.bind(this),_p:this.bm.bind(this),bp:this.Sm.bind(this),Zp:this.bv.bind(this)};this.sv=new vl(this.Mm.canvasElement,a,{Pp:()=>!this.yn.handleScroll.vertTouchDrag,kp:()=>!0})}m(){this.sv.m(),this.Mm.unsubscribeSuggestedBitmapSizeChanged(this.um),ds(this.Mm.canvasElement),this.Mm.dispose(),this.wm.unsubscribeSuggestedBitmapSizeChanged(this.om),ds(this.wm.canvasElement),this.wm.dispose(),this.Ki!==null&&this.Ki.__().u(this),this.Ki=null}fv(){return this.uv}P(){return this.Ro.fontSize}xm(){const t=this.bd.N();return this.hm!==t.k&&(this.rm.Os(),this.hm=t.k),t}Cm(){if(this.Ki===null)return 0;let t=0;const e=this.xm(),n=ut(this.wm.canvasElement.getContext("2d",{colorSpace:this.yt._m().N().layout.colorSpace}));n.save();const s=this.Ki.zl();n.font=this.ym(),s.length>0&&(t=Math.max(this.rm.Ii(n,s[0].eo),this.rm.Ii(n,s[s.length-1].eo)));const r=this.Pm();for(let c=r.length;c--;){const h=this.rm.Ii(n,r[c].ri());h>t&&(t=h)}const o=this.Ki.Lt();if(o!==null&&this.nm!==null&&(a=this.yn.crosshair).mode!==2&&a.horzLine.visible&&a.horzLine.labelVisible){const c=this.Ki.Tn(1,o),h=this.Ki.Tn(this.nm.height-2,o);t=Math.max(t,this.rm.Ii(n,this.Ki.Ji(Math.floor(Math.min(c,h))+.11111111111111,o)),this.rm.Ii(n,this.Ki.Ji(Math.ceil(Math.max(c,h))-.11111111111111,o)))}var a;n.restore();const l=t||34;return qh(Math.ceil(e.S+e.C+e.V+e.B+5+l))}km(t){this.nm!==null&&ns(this.nm,t)||(this.nm=t,this.lm=!0,this.wm.resizeCanvasElement(t),this.Mm.resizeCanvasElement(t),this.lm=!1,this.uv.style.width=`${t.width}px`,this.uv.style.height=`${t.height}px`)}Tm(){return ut(this.nm).width}un(t){this.Ki!==t&&(this.Ki!==null&&this.Ki.__().u(this),this.Ki=t,t.__().i(this.wo.bind(this),this))}Ft(){return this.Ki}Os(){const t=this.yt.yv();this.yt._m().Qt().au(t,ut(this.Ft()))}Rm(t){if(this.nm===null)return;const e={colorSpace:this.yt._m().N().layout.colorSpace};if(t!==1){this.Dm(),this.wm.applySuggestedBitmapSize();const s=ls(this.wm,e);s!==null&&(s.useBitmapCoordinateSpace((r=>{this.Im(r),this.Vm(r)})),this.yt.Bm(s,this.vm),this.Em(s),this.yt.Bm(s,this.fm),this.Am(s))}this.Mm.applySuggestedBitmapSize();const n=ls(this.Mm,e);n!==null&&(n.useBitmapCoordinateSpace((({context:s,bitmapSize:r})=>{s.clearRect(0,0,r.width,r.height)})),this.Lm(n),this.yt.Bm(n,this.pm))}vv(){return this.wm.bitmapSize}mv(t,e,n,s){const r=this.vv();if(r.width>0&&r.height>0&&(t.drawImage(this.wm.canvasElement,e,n),s)){const o=this.Mm.canvasElement;t.drawImage(o,e,n)}}Pt(){this.Ki?.zl()}Sv(t){if(this.Ki===null||this.Ki.Zi()||!this.yn.handleScale.axisPressedMouseMove.price)return;const e=this.yt._m().Qt(),n=this.yt.yv();this.sm=!0,e.Q_(n,this.Ki,t.localY)}xv(t){if(this.Ki===null||!this.yn.handleScale.axisPressedMouseMove.price)return;const e=this.yt._m().Qt(),n=this.yt.yv(),s=this.Ki;e.tu(n,s,t.localY)}gm(){if(this.Ki===null||!this.yn.handleScale.axisPressedMouseMove.price)return;const t=this.yt._m().Qt(),e=this.yt.yv(),n=this.Ki;this.sm&&(this.sm=!1,t.iu(e,n))}Cv(t){if(this.Ki===null||!this.yn.handleScale.axisPressedMouseMove.price)return;const e=this.yt._m().Qt(),n=this.yt.yv();this.sm=!1,e.iu(n,this.Ki)}bm(t){this.yn.handleScale.axisDoubleClickReset.price&&this.Os()}Sm(t){this.Ki!==null&&(!this.yt._m().Qt().N().handleScale.axisPressedMouseMove.price||this.Ki.je()||this.Ki.No()||this.zm(1))}bv(t){this.zm(0)}Pm(){const t=[],e=this.Ki===null?void 0:this.Ki;return(n=>{for(let s=0;s<n.length;++s){const r=n[s].qn(this.yt.yv(),e);for(let o=0;o<r.length;o++)t.push(r[o])}})(this.yt.yv().Dt()),t}Im({context:t,bitmapSize:e}){const{width:n,height:s}=e,r=this.yt.yv().Qt(),o=r.$(),a=r.af();o===a?dl(t,0,0,n,s,o):N0(t,0,0,n,s,o,a)}Vm({context:t,bitmapSize:e,horizontalPixelRatio:n}){if(this.nm===null||this.Ki===null||!this.Ki.N().borderVisible)return;t.fillStyle=this.Ki.N().borderColor;const s=Math.max(1,Math.floor(this.xm().S*n));let r;r=this.dm?e.width-s:0,t.fillRect(r,0,s,e.height)}Em(t){if(this.nm===null||this.Ki===null)return;const e=this.Ki.zl(),n=this.Ki.N(),s=this.xm(),r=this.dm?this.nm.width-s.C:0;n.borderVisible&&n.ticksVisible&&t.useBitmapCoordinateSpace((({context:o,horizontalPixelRatio:a,verticalPixelRatio:l})=>{o.fillStyle=n.borderColor;const c=Math.max(1,Math.floor(l)),h=Math.floor(.5*l),u=Math.round(s.C*a);o.beginPath();for(const d of e)o.rect(Math.floor(r*a),Math.round(d.Vl*l)-h,u,c);o.fill()})),t.useMediaCoordinateSpace((({context:o})=>{o.font=this.ym(),o.fillStyle=n.textColor??this.Ro.textColor,o.textAlign=this.dm?"right":"left",o.textBaseline="middle";const a=this.dm?Math.round(r-s.V):Math.round(r+s.C+s.V),l=e.map((c=>this.rm.Di(o,c.eo)));for(let c=e.length;c--;){const h=e[c];o.fillText(h.eo,a,h.Vl+l[c])}}))}Dm(){if(this.nm===null||this.Ki===null)return;let t=this.nm.height/2;const e=[],n=this.Ki.Dt().slice(),s=this.yt.yv(),r=this.xm();this.Ki===s.Zs()&&this.yt.yv().Dt().forEach((l=>{s.Gs(l)&&n.push(l)}));const o=this.Ki.kl()[0],a=this.Ki;n.forEach((l=>{const c=l.qn(s,a);c.forEach((h=>{h.$i()&&h.Wi()===null&&(h.Ui(null),e.push(h))})),o===l&&c.length>0&&(t=c[0].Ei())})),this.Ki.N().alignLabels&&this.Om(e,r,t)}Om(t,e,n){if(this.nm===null)return;const s=t.filter((o=>o.Ei()<=n)),r=t.filter((o=>o.Ei()>n));s.sort(((o,a)=>a.Ei()-o.Ei())),s.length&&r.length&&r.push(s[0]),r.sort(((o,a)=>o.Ei()-a.Ei()));for(const o of t){const a=Math.floor(o.$t(e)/2),l=o.Ei();l>-a&&l<a&&o.Ui(a),l>this.nm.height-a&&l<this.nm.height+a&&o.Ui(this.nm.height-a)}hm(s,1,this.nm.height,e),hm(r,-1,this.nm.height,e)}Am(t){if(this.nm===null)return;const e=this.Pm(),n=this.xm(),s=this.dm?"right":"left";e.forEach((r=>{r.ji()&&r.Tt(ut(this.Ki)).st(t,n,this.rm,s)}))}Lm(t){if(this.nm===null||this.Ki===null)return;const e=this.yt._m().Qt(),n=[],s=this.yt.yv(),r=e.Vd().qn(s,this.Ki);r.length&&n.push(r);const o=this.xm(),a=this.dm?"right":"left";n.forEach((l=>{l.forEach((c=>{c.Tt(ut(this.Ki)).st(t,o,this.rm,a)}))}))}zm(t){this.uv.style.cursor=t===1?"ns-resize":"default"}wo(){const t=this.Cm();this.am<t&&this.yt._m().Qt().ka(),this.am=t}ym(){return Ka(this.Ro.fontSize,this.Ro.fontFamily)}}function mT(i,t){return i.Xa?.(t)??[]}function Fc(i,t){return i.jn?.(t)??[]}function dm(i,t){return i.cn?.(t)??[]}function gT(i,t){return i.qa?.(t)??[]}class ju{constructor(t,e){this.nm=oe({width:0,height:0}),this.Nm=null,this.Fm=null,this.Wm=null,this.Hm=null,this.Um=!1,this.$m=new fe,this.jm=new fe,this.qm=0,this.Ym=!1,this.Km=null,this.Gm=!1,this.Zm=null,this.Xm=null,this.lm=!1,this.om=()=>{this.lm||this.Jm===null||this.sn().mr()},this.um=()=>{this.lm||this.Jm===null||this.sn().mr()},this.Gv=t,this.Jm=e,this.Jm.mu().i(this.Qm.bind(this),this,!0),this.tw=document.createElement("td"),this.tw.style.padding="0",this.tw.style.position="relative";const n=document.createElement("div");n.style.width="100%",n.style.height="100%",n.style.position="relative",n.style.overflow="hidden",this.iw=document.createElement("td"),this.iw.style.padding="0",this.nw=document.createElement("td"),this.nw.style.padding="0",this.tw.appendChild(n),this.wm=us(n,oe({width:16,height:16})),this.wm.subscribeSuggestedBitmapSizeChanged(this.om);const s=this.wm.canvasElement;s.style.position="absolute",s.style.zIndex="1",s.style.left="0",s.style.top="0",this.Mm=us(n,oe({width:16,height:16})),this.Mm.subscribeSuggestedBitmapSizeChanged(this.um);const r=this.Mm.canvasElement;r.style.position="absolute",r.style.zIndex="2",r.style.left="0",r.style.top="0",this._v=document.createElement("tr"),this._v.appendChild(this.iw),this._v.appendChild(this.tw),this._v.appendChild(this.nw),this.sw(),this.sv=new vl(this.Mm.canvasElement,this,{Pp:()=>this.Km===null&&!this.Gv.N().handleScroll.vertTouchDrag,kp:()=>this.Km===null&&!this.Gv.N().handleScroll.horzTouchDrag})}m(){this.Nm!==null&&this.Nm.m(),this.Fm!==null&&this.Fm.m(),this.Wm=null,this.Mm.unsubscribeSuggestedBitmapSizeChanged(this.um),ds(this.Mm.canvasElement),this.Mm.dispose(),this.wm.unsubscribeSuggestedBitmapSizeChanged(this.om),ds(this.wm.canvasElement),this.wm.dispose(),this.Jm!==null&&(this.Jm.mu().u(this),this.Jm.m()),this.sv.m()}yv(){return ut(this.Jm)}ew(t){this.Jm!==null&&this.Jm.mu().u(this),this.Jm=t,this.Jm!==null&&this.Jm.mu().i(ju.prototype.Qm.bind(this),this,!0),this.sw(),this.Gv.lv().indexOf(this)===this.Gv.lv().length-1?(this.Wm=this.Wm??new pT(this.tw,this.Gv),this.Wm.Pt()):(this.Wm?.Xv(),this.Wm=null)}_m(){return this.Gv}fv(){return this._v}sw(){if(this.Jm!==null&&(this.rw(),this.sn().Jn().length!==0)){if(this.Nm!==null){const t=this.Jm.X_();this.Nm.un(ut(t))}if(this.Fm!==null){const t=this.Jm.J_();this.Fm.un(ut(t))}}}hw(){this.Nm!==null&&this.Nm.Pt(),this.Fm!==null&&this.Fm.Pt()}F_(){return this.Jm!==null?this.Jm.F_():0}W_(t){this.Jm&&this.Jm.W_(t)}bp(t){if(!this.Jm)return;this.aw();const e=t.localX,n=t.localY;this.lw(e,n,t)}Fp(t){this.aw(),this.ow(),this.lw(t.localX,t.localY,t)}Sp(t){if(!this.Jm)return;this.aw();const e=t.localX,n=t.localY;this.lw(e,n,t)}Ap(t){this.Jm!==null&&(this.aw(),this.lw(t.localX,t.localY,t),this._w(t))}fp(t){this.Jm!==null&&this.uw(this.jm,t)}_p(t){this.fp(t)}Dp(t){this.aw(),this.cw(t),this.lw(t.localX,t.localY,t)}Ep(t){this.Jm!==null&&(this.aw(),this.Ym=!1,this.dw(t))}Bp(t){this.Jm!==null&&this._w(t)}Xp(t){if(this.Ym=!0,this.Km===null){const e={x:t.localX,y:t.localY};this.fw(e,e,t)}}Zp(t){this.Jm!==null&&(this.aw(),this.Jm.Qt().Rd(null),this.pw())}mw(){return this.$m}ww(){return this.jm}$p(){this.qm=1,this.sn().cs()}jp(t,e){if(!this.Gv.N().handleScale.pinch)return;const n=5*(e-this.qm);this.qm=e,this.sn().Wd(t._t,n)}Op(t){this.Ym=!1,this.Gm=this.Km!==null,this.ow();const e=this.sn().Vd();this.Km!==null&&e.It()&&(this.Zm={x:e.ni(),y:e.si()},this.Km={x:t.localX,y:t.localY})}Tp(t){if(this.Jm===null)return;const e=t.localX,n=t.localY;if(this.Km===null)this.cw(t);else{this.Gm=!1;const s=ut(this.Zm),r=s.x+(e-this.Km.x),o=s.y+(n-this.Km.y);this.lw(r,o,t)}}Vp(t){this._m().N().trackingMode.exitMode===0&&(this.Gm=!0),this.Mw(),this.dw(t)}Qs(t,e){const n=this.Jm;return n===null?null:q0(n,t,e)}gw(t,e){ut(e==="left"?this.Nm:this.Fm).km(oe({width:t,height:this.nm.height}))}pv(){return this.nm}km(t){ns(this.nm,t)||(this.nm=t,this.lm=!0,this.wm.resizeCanvasElement(t),this.Mm.resizeCanvasElement(t),this.lm=!1,this.tw.style.width=t.width+"px",this.tw.style.height=t.height+"px")}bw(){const t=ut(this.Jm);t.G_(t.X_()),t.G_(t.J_());for(const e of t.kl())if(t.Gs(e)){const n=e.Ft();n!==null&&t.G_(n),e.Nn()}for(const e of t.Mu())e.Nn()}vv(){return this.wm.bitmapSize}mv(t,e,n,s){const r=this.vv();if(r.width>0&&r.height>0&&(t.drawImage(this.wm.canvasElement,e,n),s)){const o=this.Mm.canvasElement;t!==null&&t.drawImage(o,e,n)}}Rm(t){if(t===0||this.Jm===null)return;t>1&&this.bw(),this.Nm!==null&&this.Nm.Rm(t),this.Fm!==null&&this.Fm.Rm(t);const e={colorSpace:this.Gv.N().layout.colorSpace};if(t!==1){this.wm.applySuggestedBitmapSize();const s=ls(this.wm,e);s!==null&&(s.useBitmapCoordinateSpace((r=>{this.Im(r)})),this.Jm&&(this.Sw(s,mT),this.xw(s),this.Sw(s,Fc),this.Sw(s,dm)))}this.Mm.applySuggestedBitmapSize();const n=ls(this.Mm,e);n!==null&&(n.useBitmapCoordinateSpace((({context:s,bitmapSize:r})=>{s.clearRect(0,0,r.width,r.height)})),this.Cw(n),this.Sw(n,gT),this.Sw(n,dm))}yw(){return this.Nm}Pw(){return this.Fm}Bm(t,e){this.Sw(t,e)}Qm(){this.Jm!==null&&this.Jm.mu().u(this),this.Jm=null}_w(t){this.uw(this.$m,t)}uw(t,e){const n=e.localX,s=e.localY;t.v()&&t.p(this.sn().Et().Vc(n),{x:n,y:s},e)}Im({context:t,bitmapSize:e}){const{width:n,height:s}=e,r=this.sn(),o=r.$(),a=r.af();o===a?dl(t,0,0,n,s,a):N0(t,0,0,n,s,o,a)}xw(t){const e=ut(this.Jm),n=e.wu().wr().Tt(e);n!==null&&n.st(t,!1)}Cw(t){this.kw(t,Fc,Gr,this.sn().Vd())}Sw(t,e){const n=ut(this.Jm),s=e===Fc?this.Tw():null,r=s===null?null:this.Rw(s,n),o=n.Mu();if(r===null||s===null){const c=n._u();return this.Dw(t,e,Pa,o,c),void this.Dw(t,e,Gr,o,c)}const a=n.Dt(),l=c=>c===s?r.Za:void 0;this.Dw(t,e,Pa,o,a,l),this.Dw(t,e,Gr,o,a,l),this.kw(t,e,Pa,s,r.qa),this.kw(t,e,Gr,s,r.qa)}Dw(t,e,n,s,r,o){for(const a of s)this.kw(t,e,n,a);if(o!==void 0)for(const a of r)this.kw(t,e,n,a,o(a));else for(const a of r)this.kw(t,e,n,a)}Tw(){const t=ut(this.Jm),e=t.Qt().cu()?.uu;if(!t.Qt().N().hoveredSeriesOnTop||e===void 0)return null;for(const n of t.Dt())if(n===e)return n;return null}Rw(t,e){const n=t.Ga?.(e)??null;return n===null||n.qa.length===0?null:n}kw(t,e,n,s,r){const o=ut(this.Jm),a=o.Qt().cu(),l=a!==null&&a.uu===s,c=a!==null&&l&&a.bu!==void 0?a.bu.ie:void 0,h=u=>n(u,t,l,c);r===void 0?Kh(e,h,s,o):j0(r,h,o)}rw(){if(this.Jm===null)return;const t=this.Gv,e=this.Jm.X_().N().visible,n=this.Jm.J_().N().visible;e||this.Nm===null||(this.iw.removeChild(this.Nm.fv()),this.Nm.m(),this.Nm=null),n||this.Fm===null||(this.nw.removeChild(this.Fm.fv()),this.Fm.m(),this.Fm=null);const s=t.Qt().Jd();e&&this.Nm===null&&(this.Nm=new um(this,t.N(),s,"left"),this.iw.appendChild(this.Nm.fv())),n&&this.Fm===null&&(this.Fm=new um(this,t.N(),s,"right"),this.nw.appendChild(this.Fm.fv()))}Iw(t){return t.Jp&&this.Ym||this.Km!==null}lw(t,e,n){t=Math.max(0,Math.min(t,this.nm.width-1)),e=Math.max(0,Math.min(e,this.nm.height-1)),this.sn().Kd(t,e,n,ut(this.Jm))}pw(){this.sn().Zd()}Mw(){this.Gm&&(this.Km=null,this.pw())}fw(t,e,n){this.Km=t,this.Gm=!1,this.lw(e.x,e.y,n);const s=this.sn().Vd();this.Zm={x:s.ni(),y:s.si()}}sn(){return this.Gv.Qt()}dw(t){if(!this.Um)return;const e=this.sn(),n=this.yv();if(e.eu(n,n.kn()),this.Hm=null,this.Um=!1,e.jd(),this.Xm!==null){const s=performance.now(),r=e.Et();this.Xm.me(r.Oc(),s),this.Xm.Kc(s)||e.ps(this.Xm)}}aw(){this.Km=null}ow(){if(this.Jm){if(this.sn().cs(),document.activeElement!==document.body&&document.activeElement!==document.documentElement)ut(document.activeElement).blur();else{const t=document.getSelection();t!==null&&t.removeAllRanges()}!this.Jm.kn().Zi()&&this.sn().Et().Zi()}}cw(t){if(this.Jm===null)return;const e=this.sn(),n=e.Et();if(n.Zi())return;const s=this.Gv.N(),r=s.handleScroll,o=s.kineticScroll;if((!r.pressedMouseMove||t.Jp)&&(!r.horzTouchDrag&&!r.vertTouchDrag||!t.Jp))return;const a=this.Jm.kn(),l=performance.now();if(this.Hm!==null||this.Iw(t)||(this.Hm={x:t.clientX,y:t.clientY,yf:l,Vw:t.localX,Bw:t.localY}),this.Hm!==null&&!this.Um&&(this.Hm.x!==t.clientX||this.Hm.y!==t.clientY)){if(t.Jp&&o.touch||!t.Jp&&o.mouse){const c=n.ml();this.Xm=new fT(.2/c,7/c,.997,15/c),this.Xm.Uv(n.Oc(),this.Hm.yf)}else this.Xm=null;a.Zi()||e.nu(this.Jm,a,t.localY),e.Ud(t.localX),this.Um=!0}this.Um&&(a.Zi()||e.su(this.Jm,a,t.localY),e.$d(t.localX),this.Xm!==null&&this.Xm.Uv(n.Oc(),l))}}class fm{constructor(t,e,n,s,r){this.xt=!0,this.nm=oe({width:0,height:0}),this.om=()=>this.Rm(3),this.dm=t==="left",this.bd=n.Jd,this.yn=e,this.Ew=s,this.Aw=r,this.uv=document.createElement("div"),this.uv.style.width="25px",this.uv.style.height="100%",this.uv.style.overflow="hidden",this.wm=us(this.uv,oe({width:16,height:16})),this.wm.subscribeSuggestedBitmapSizeChanged(this.om)}m(){this.wm.unsubscribeSuggestedBitmapSizeChanged(this.om),ds(this.wm.canvasElement),this.wm.dispose()}fv(){return this.uv}pv(){return this.nm}km(t){ns(this.nm,t)||(this.nm=t,this.wm.resizeCanvasElement(t),this.uv.style.width=`${t.width}px`,this.uv.style.height=`${t.height}px`,this.xt=!0)}Rm(t){if(t<3&&!this.xt||this.nm.width===0||this.nm.height===0)return;this.xt=!1,this.wm.applySuggestedBitmapSize();const e=ls(this.wm,{colorSpace:this.yn.layout.colorSpace});e!==null&&e.useBitmapCoordinateSpace((n=>{this.Im(n),this.Vm(n)}))}vv(){return this.wm.bitmapSize}mv(t,e,n){const s=this.vv();s.width>0&&s.height>0&&t.drawImage(this.wm.canvasElement,e,n)}Vm({context:t,bitmapSize:e,horizontalPixelRatio:n,verticalPixelRatio:s}){if(!this.Ew())return;t.fillStyle=this.yn.timeScale.borderColor;const r=Math.floor(this.bd.N().S*n),o=Math.floor(this.bd.N().S*s),a=this.dm?e.width-r:0;t.fillRect(a,0,r,o)}Im({context:t,bitmapSize:e}){dl(t,0,0,e.width,e.height,this.Aw())}}function Zu(i){return t=>t.tl?.(i)??[]}const vT=Zu("normal"),_T=Zu("top"),yT=Zu("bottom");class xT{constructor(t,e){this.Lw=null,this.zw=null,this.M=null,this.Ow=!1,this.nm=oe({width:0,height:0}),this.Nw=new fe,this.rm=new Ya(5),this.lm=!1,this.om=()=>{this.lm||this.Gv.Qt().mr()},this.um=()=>{this.lm||this.Gv.Qt().mr()},this.Gv=t,this.Pu=e,this.yn=t.N().layout,this.jv=document.createElement("tr"),this.Fw=document.createElement("td"),this.Fw.style.padding="0",this.Ww=document.createElement("td"),this.Ww.style.padding="0",this.uv=document.createElement("td"),this.uv.style.height="25px",this.uv.style.padding="0",this.Hw=document.createElement("div"),this.Hw.style.width="100%",this.Hw.style.height="100%",this.Hw.style.position="relative",this.Hw.style.overflow="hidden",this.uv.appendChild(this.Hw),this.wm=us(this.Hw,oe({width:16,height:16})),this.wm.subscribeSuggestedBitmapSizeChanged(this.om);const n=this.wm.canvasElement;n.style.position="absolute",n.style.zIndex="1",n.style.left="0",n.style.top="0",this.Mm=us(this.Hw,oe({width:16,height:16})),this.Mm.subscribeSuggestedBitmapSizeChanged(this.um);const s=this.Mm.canvasElement;s.style.position="absolute",s.style.zIndex="2",s.style.left="0",s.style.top="0",this.jv.appendChild(this.Fw),this.jv.appendChild(this.uv),this.jv.appendChild(this.Ww),this.Uw(),this.Gv.Qt().N_().i(this.Uw.bind(this),this),this.sv=new vl(this.Mm.canvasElement,this,{Pp:()=>!0,kp:()=>!this.Gv.N().handleScroll.horzTouchDrag})}m(){this.sv.m(),this.Lw!==null&&this.Lw.m(),this.zw!==null&&this.zw.m(),this.Mm.unsubscribeSuggestedBitmapSizeChanged(this.um),ds(this.Mm.canvasElement),this.Mm.dispose(),this.wm.unsubscribeSuggestedBitmapSizeChanged(this.om),ds(this.wm.canvasElement),this.wm.dispose()}fv(){return this.jv}$w(){return this.Lw}jw(){return this.zw}Fp(t){if(this.Ow)return;this.Ow=!0;const e=this.Gv.Qt();!e.Et().Zi()&&this.Gv.N().handleScale.axisPressedMouseMove.time&&e.Fd(t.localX)}Op(t){this.Fp(t)}Wp(){const t=this.Gv.Qt();!t.Et().Zi()&&this.Ow&&(this.Ow=!1,this.Gv.N().handleScale.axisPressedMouseMove.time&&t.Yd())}Dp(t){const e=this.Gv.Qt();!e.Et().Zi()&&this.Gv.N().handleScale.axisPressedMouseMove.time&&e.qd(t.localX)}Tp(t){this.Dp(t)}Ep(){this.Ow=!1;const t=this.Gv.Qt();t.Et().Zi()&&!this.Gv.N().handleScale.axisPressedMouseMove.time||t.Yd()}Vp(){this.Ep()}fp(){this.Gv.N().handleScale.axisDoubleClickReset.time&&this.Gv.Qt().ws()}_p(){this.fp()}bp(){this.Gv.Qt().N().handleScale.axisPressedMouseMove.time&&this.zm(1)}Zp(){this.zm(0)}pv(){return this.nm}qw(){return this.Nw}Yw(t,e,n){ns(this.nm,t)||(this.nm=t,this.lm=!0,this.wm.resizeCanvasElement(t),this.Mm.resizeCanvasElement(t),this.lm=!1,this.uv.style.width=`${t.width}px`,this.uv.style.height=`${t.height}px`,this.Nw.p(t)),this.Lw!==null&&this.Lw.km(oe({width:e,height:t.height})),this.zw!==null&&this.zw.km(oe({width:n,height:t.height}))}Kw(){const t=this.Gw();return Math.ceil(t.S+t.C+t.P+t.A+t.I+t.Zw)}Pt(){this.Gv.Qt().Et().zl()}vv(){return this.wm.bitmapSize}mv(t,e,n,s){const r=this.vv();if(r.width>0&&r.height>0&&(t.drawImage(this.wm.canvasElement,e,n),s)){const o=this.Mm.canvasElement;t.drawImage(o,e,n)}}Rm(t){if(t===0)return;const e={colorSpace:this.yn.colorSpace};if(t!==1){this.wm.applySuggestedBitmapSize();const s=ls(this.wm,e);s!==null&&(s.useBitmapCoordinateSpace((r=>{this.Im(r),this.Vm(r),this.Xw(s,yT)})),this.Em(s),this.Xw(s,vT)),this.Lw!==null&&this.Lw.Rm(t),this.zw!==null&&this.zw.Rm(t)}this.Mm.applySuggestedBitmapSize();const n=ls(this.Mm,e);n!==null&&(n.useBitmapCoordinateSpace((({context:s,bitmapSize:r})=>{s.clearRect(0,0,r.width,r.height)})),this.Jw([...this.Gv.Qt().Jn(),this.Gv.Qt().Vd()],n),this.Xw(n,_T))}Xw(t,e){const n=this.Gv.Qt().Jn();for(const s of n)Kh(e,(r=>Pa(r,t,!1,void 0)),s,void 0);for(const s of n)Kh(e,(r=>Gr(r,t,!1,void 0)),s,void 0)}Im({context:t,bitmapSize:e}){dl(t,0,0,e.width,e.height,this.Gv.Qt().af())}Vm({context:t,bitmapSize:e,verticalPixelRatio:n}){if(this.Gv.N().timeScale.borderVisible){t.fillStyle=this.Qw();const s=Math.max(1,Math.floor(this.Gw().S*n));t.fillRect(0,0,e.width,s)}}Em(t){const e=this.Gv.Qt().Et(),n=e.zl();if(!n||n.length===0)return;const s=this.Pu.maxTickMarkWeight(n),r=this.Gw(),o=e.N();o.borderVisible&&o.ticksVisible&&t.useBitmapCoordinateSpace((({context:a,horizontalPixelRatio:l,verticalPixelRatio:c})=>{a.strokeStyle=this.Qw(),a.fillStyle=this.Qw();const h=Math.max(1,Math.floor(l)),u=Math.floor(.5*l);a.beginPath();const d=Math.round(r.C*c);for(let f=n.length;f--;){const p=Math.round(n[f].coord*l);a.rect(p-u,0,h,d)}a.fill()})),t.useMediaCoordinateSpace((({context:a})=>{const l=r.S+r.C+r.A+r.P/2;a.textAlign="center",a.textBaseline="middle",a.fillStyle=this.H(),a.font=this.ym();for(const c of n)if(c.weight<s){const h=c.needAlignCoordinate?this.tM(a,c.coord,c.label):c.coord;a.fillText(c.label,h,l)}this.Gv.N().timeScale.allowBoldLabels&&(a.font=this.iM());for(const c of n)if(c.weight>=s){const h=c.needAlignCoordinate?this.tM(a,c.coord,c.label):c.coord;a.fillText(c.label,h,l)}}))}tM(t,e,n){const s=this.rm.Ii(t,n),r=s/2,o=Math.floor(e-r)+.5;return o<0?e+=Math.abs(0-o):o+s>this.nm.width&&(e-=Math.abs(this.nm.width-(o+s))),e}Jw(t,e){const n=this.Gw();for(const s of t)for(const r of s.dn())r.Tt().st(e,n)}Qw(){return this.Gv.N().timeScale.borderColor}H(){return this.yn.textColor}F(){return this.yn.fontSize}ym(){return Ka(this.F(),this.yn.fontFamily)}iM(){return Ka(this.F(),this.yn.fontFamily,"bold")}Gw(){this.M===null&&(this.M={S:1,L:NaN,A:NaN,I:NaN,tn:NaN,C:5,P:NaN,k:"",Qi:new Ya,Zw:0});const t=this.M,e=this.ym();if(t.k!==e){const n=this.F();t.P=n,t.k=e,t.A=3*n/12,t.I=3*n/12,t.tn=9*n/12,t.L=0,t.Zw=4*n/12,t.Qi.Os()}return this.M}zm(t){this.uv.style.cursor=t===1?"ew-resize":"default"}Uw(){const t=this.Gv.Qt(),e=t.N();e.leftPriceScale.visible||this.Lw===null||(this.Fw.removeChild(this.Lw.fv()),this.Lw.m(),this.Lw=null),e.rightPriceScale.visible||this.zw===null||(this.Ww.removeChild(this.zw.fv()),this.zw.m(),this.zw=null);const n={Jd:this.Gv.Qt().Jd()},s=()=>e.leftPriceScale.borderVisible&&t.Et().N().borderVisible,r=()=>t.af();e.leftPriceScale.visible&&this.Lw===null&&(this.Lw=new fm("left",e,n,s,r),this.Fw.appendChild(this.Lw.fv())),e.rightPriceScale.visible&&this.zw===null&&(this.zw=new fm("right",e,n,s,r),this.Ww.appendChild(this.zw.fv()))}}const bT=!!cr&&!!navigator.userAgentData&&navigator.userAgentData.brands.some((i=>i.brand.includes("Chromium")))&&!!cr&&(navigator?.userAgentData?.platform?navigator.userAgentData.platform==="Windows":navigator.userAgent.toLowerCase().indexOf("win")>=0);class wT{constructor(t,e,n){var s;this.nM=[],this.sM=[],this.eM=0,this.oo=0,this.k_=0,this.rM=0,this.hM=0,this.aM=null,this.lM=!1,this.$m=new fe,this.jm=new fe,this.wd=new fe,this.oM=null,this._M=null,this.Kv=t,this.yn=e,this.Pu=n,this.jv=document.createElement("div"),this.jv.classList.add("tv-lightweight-charts"),this.jv.style.overflow="hidden",this.jv.style.direction="ltr",this.jv.style.width="100%",this.jv.style.height="100%",(s=this.jv).style.userSelect="none",s.style.webkitUserSelect="none",s.style.msUserSelect="none",s.style.MozUserSelect="none",s.style.webkitTapHighlightColor="transparent",this.uM=document.createElement("table"),this.uM.setAttribute("cellspacing","0"),this.jv.appendChild(this.uM),this.cM=this.dM.bind(this),kc(this.yn)&&this.fM(!0),this.sn=new rT(this.gd.bind(this),this.yn,n),this.Qt().Bd().i(this.pM.bind(this),this),this.vM=new xT(this,this.Pu),this.uM.appendChild(this.vM.fv());const r=e.autoSize&&this.mM();let o=this.yn.width,a=this.yn.height;if(r||o===0||a===0){const l=t.getBoundingClientRect();o=o||l.width,a=a||l.height}this.wM(o,a),this.MM(),t.appendChild(this.jv),this.gM(),this.sn.Et().Jc().i(this.sn.ka.bind(this.sn),this),this.sn.N_().i(this.sn.ka.bind(this.sn),this)}Qt(){return this.sn}N(){return this.yn}lv(){return this.nM}bM(){return this.vM}m(){this.fM(!1),this.eM!==0&&window.cancelAnimationFrame(this.eM),this.sn.Bd().u(this),this.sn.Et().Jc().u(this),this.sn.N_().u(this),this.sn.m();for(const t of this.nM)this.uM.removeChild(t.fv()),t.mw().u(this),t.ww().u(this),t.m();this.nM=[];for(const t of this.sM)this.SM(t);this.sM=[],ut(this.vM).m(),this.jv.parentElement!==null&&this.jv.parentElement.removeChild(this.jv),this.wd.m(),this.$m.m(),this.jm.m(),this.xM()}wM(t,e,n=!1){if(this.oo===e&&this.k_===t)return;const s=(function(a){const l=Math.floor(a.width),c=Math.floor(a.height);return oe({width:l-l%2,height:c-c%2})})(oe({width:t,height:e}));this.oo=s.height,this.k_=s.width;const r=this.oo+"px",o=this.k_+"px";if(this.CM()||(ut(this.jv).style.height=r,ut(this.jv).style.width=o),this.uM.style.height=r,this.uM.style.width=o,n){this.eM!==0&&(window.cancelAnimationFrame(this.eM),this.eM=0),this.lM=!1;const a=we.ys();this.aM!==null&&(a.Ss(this.aM),this.aM=null),this.yM(a,performance.now())}else this.sn.ka()}Rm(t){t===void 0&&(t=we.ys());for(let e=0;e<this.nM.length;e++)this.nM[e].Rm(t._s(e).rs);this.yn.timeScale.visible&&this.vM.Rm(t.ls())}vr(t){const e=kc(this.yn);this.sn.vr(t);const n=kc(this.yn);n!==e&&this.fM(n),t.layout?.panes&&this.PM(),this.gM(),this.kM(t)}mw(){return this.$m}ww(){return this.jm}Bd(){return this.wd}TM(t=!1){this.aM!==null&&(this.yM(this.aM,performance.now()),this.aM=null);const e=this.RM(null),n=document.createElement("canvas");n.width=e.width,n.height=e.height;const s=ut(n.getContext("2d"));return this.RM(s,t),n}DM(t){return t==="left"&&!this.IM()||t==="right"&&!this.VM()||this.nM.length===0?0:ut(t==="left"?this.nM[0].yw():this.nM[0].Pw()).Tm()}CM(){return this.yn.autoSize&&this.oM!==null}Mv(){return this.jv}BM(t){this._M=t,this._M?this.Mv().style.setProperty("cursor",t):this.Mv().style.removeProperty("cursor")}EM(){return this._M}AM(t){return qe(this.nM[t]).pv()}PM(){this.sM.forEach((t=>{t.Pt()}))}kM(t){(t.autoSize!==void 0||!this.oM||t.width===void 0&&t.height===void 0)&&(t.autoSize&&!this.oM&&this.mM(),t.autoSize===!1&&this.oM!==null&&this.xM(),t.autoSize||t.width===void 0&&t.height===void 0||this.wM(t.width||this.k_,t.height||this.oo))}RM(t,e){let n=0,s=0;const r=this.nM[0],o=(l,c)=>{let h=0;for(let u=0;u<this.nM.length;u++){const d=this.nM[u],f=ut(l==="left"?d.yw():d.Pw()),p=f.vv();if(t!==null&&f.mv(t,c,h,e),h+=p.height,u<this.nM.length-1){const v=this.sM[u],g=v.vv();t!==null&&v.mv(t,c,h),h+=g.height}}};this.IM()&&(o("left",0),n+=ut(r.yw()).vv().width);for(let l=0;l<this.nM.length;l++){const c=this.nM[l],h=c.vv();if(t!==null&&c.mv(t,n,s,e),s+=h.height,l<this.nM.length-1){const u=this.sM[l],d=u.vv();t!==null&&u.mv(t,n,s),s+=d.height}}n+=r.vv().width,this.VM()&&(o("right",n),n+=ut(r.Pw()).vv().width);const a=(l,c,h)=>{ut(l==="left"?this.vM.$w():this.vM.jw()).mv(ut(t),c,h)};if(this.yn.timeScale.visible){const l=this.vM.vv();if(t!==null){let c=0;this.IM()&&(a("left",c,s),c=ut(r.yw()).vv().width),this.vM.mv(t,c,s,e),c+=l.width,this.VM()&&a("right",c,s)}s+=l.height}return oe({width:n,height:s})}LM(){let t=0,e=0,n=0;for(const g of this.nM)this.IM()&&(e=Math.max(e,ut(g.yw()).Cm(),this.yn.leftPriceScale.minimumWidth)),this.VM()&&(n=Math.max(n,ut(g.Pw()).Cm(),this.yn.rightPriceScale.minimumWidth)),t+=g.F_();e=qh(e),n=qh(n);const s=this.k_,r=this.oo,o=Math.max(s-e-n,0),a=1*this.sM.length,l=this.yn.timeScale.visible;let c=l?Math.max(this.vM.Kw(),this.yn.timeScale.minimumHeight):0;var h;c=(h=c)+h%2;const u=a+c,d=r<u?0:r-u,f=d/t;let p=0;const v=window.devicePixelRatio||1;for(let g=0;g<this.nM.length;++g){const m=this.nM[g];m.ew(this.sn.Gn()[g]);let x=0,_=0;_=g===this.nM.length-1?Math.ceil((d-p)*v)/v:Math.round(m.F_()*f*v)/v,x=Math.max(_,2),p+=x,m.km(oe({width:o,height:x})),this.IM()&&m.gw(e,"left"),this.VM()&&m.gw(n,"right"),m.yv()&&this.sn.Ed(m.yv(),x)}this.vM.Yw(oe({width:l?o:0,height:c}),l?e:0,l?n:0),this.sn.H_(o),this.rM!==e&&(this.rM=e),this.hM!==n&&(this.hM=n)}fM(t){t?this.jv.addEventListener("wheel",this.cM,{passive:!1}):this.jv.removeEventListener("wheel",this.cM)}zM(t){switch(t.deltaMode){case t.DOM_DELTA_PAGE:return 120;case t.DOM_DELTA_LINE:return 32}return bT?1/window.devicePixelRatio:1}dM(t){if(!(t.deltaX!==0&&this.yn.handleScroll.mouseWheel||t.deltaY!==0&&this.yn.handleScale.mouseWheel))return;const e=this.zM(t),n=e*t.deltaX/100,s=-e*t.deltaY/100;if(t.cancelable&&t.preventDefault(),s!==0&&this.yn.handleScale.mouseWheel){const r=Math.sign(s)*Math.min(1,Math.abs(s)),o=t.clientX-this.jv.getBoundingClientRect().left;this.Qt().Wd(o,r)}n!==0&&this.yn.handleScroll.mouseWheel&&this.Qt().Hd(-80*n)}yM(t,e){const n=t.ls();n===3&&this.OM(),n!==3&&n!==2||(this.NM(t),this.FM(t,e),this.vM.Pt(),this.nM.forEach((s=>{s.hw()})),this.aM?.ls()===3&&(this.aM.Ss(t),this.OM(),this.NM(this.aM),this.FM(this.aM,e),t=this.aM,this.aM=null)),this.Rm(t)}FM(t,e){for(const n of t.bs())this.xs(n,e)}NM(t){const e=this.sn.Gn();for(let n=0;n<e.length;n++)t._s(n).hs&&e[n].lu()}xs(t,e){const n=this.sn.Et();switch(t.ds){case 0:n.td();break;case 1:n.nd(t.Wt);break;case 2:n.Ms(t.Wt);break;case 3:n.gs(t.Wt);break;case 4:n.Wc();break;case 5:t.Wt.Kc(e)||n.gs(t.Wt.Gc(e))}}gd(t){this.aM!==null?this.aM.Ss(t):this.aM=t,this.lM||(this.lM=!0,this.eM=window.requestAnimationFrame((e=>{if(this.lM=!1,this.eM=0,this.aM!==null){const n=this.aM;this.aM=null,this.yM(n,e);for(const s of n.bs())if(s.ds===5&&!s.Wt.Kc(e)){this.Qt().ps(s.Wt);break}}})))}OM(){this.MM()}SM(t){this.uM.removeChild(t.fv()),t.m()}MM(){const t=this.sn.Gn(),e=t.length,n=this.nM.length;for(let s=e;s<n;s++){const r=qe(this.nM.pop());this.uM.removeChild(r.fv()),r.mw().u(this),r.ww().u(this),r.m();const o=this.sM.pop();o!==void 0&&this.SM(o)}for(let s=n;s<e;s++){const r=new ju(this,t[s]);if(r.mw().i(this.WM.bind(this,r),this),r.ww().i(this.HM.bind(this,r),this),this.nM.push(r),s>0){const o=new dT(this,s-1,s);this.sM.push(o),this.uM.insertBefore(o.fv(),this.vM.fv())}this.uM.insertBefore(r.fv(),this.vM.fv())}for(let s=0;s<e;s++){const r=t[s],o=this.nM[s];o.yv()!==r?o.ew(r):o.sw()}this.gM(),this.LM()}UM(t,e,n,s){const r=new Map;t!==null&&this.sn.Jn().forEach((h=>{const u=h.Un().Hn(t);u!==null&&r.set(h,u)}));let o;if(t!==null){const h=this.sn.Et().en(t)?.originalTime;h!==void 0&&(o=h)}const a=this.Qt().cu(),l=this.$M(s),c=(function(h,u){const d=h!==null&&h.uu instanceof gl?h.uu:void 0,f=h?.bu?.te,p=u!==void 0&&u!==-1?u:void 0;return h===null||h.ee===void 0?{jM:d,qM:f}:{jM:d,qM:f,YM:{ds:h.ee,KM:(v=h.uu,g=h.ee,v instanceof Gh?"pane-primitive":g==="marker"||g==="primitive"?"series-primitive":"series"),GM:hT(h.ee,f),Y_:d,ZM:f,XM:p}};var v,g})(a,l);return{Qr:o,$n:t??void 0,JM:e??void 0,XM:l!==-1?l:void 0,jM:c.jM,QM:r,qM:c.qM,YM:c.YM,tg:n??void 0}}$M(t){let e=-1;if(t)e=this.nM.indexOf(t);else{const n=this.Qt().Vd().Kn();n!==null&&(e=this.Qt().Gn().indexOf(n))}return e}WM(t,e,n,s){this.$m.p((()=>this.UM(e,n,s,t)))}HM(t,e,n,s){this.jm.p((()=>this.UM(e,n,s,t)))}pM(t,e,n){this.BM(this.Qt().cu()?.gu??null),this.wd.p((()=>this.UM(t,e,n)))}gM(){const t=this.yn.timeScale.visible?"":"none";this.vM.fv().style.display=t}IM(){return this.nM[0].yv().X_().N().visible}VM(){return this.nM[0].yv().J_().N().visible}mM(){return"ResizeObserver"in window&&(this.oM=new ResizeObserver((t=>{const e=t[t.length-1];if(!e)return;const n=e.contentRect.width,s=e.contentRect.height;this.wM(n,s,!0)})),this.oM.observe(this.Kv,{box:"border-box"}),!0)}xM(){this.oM!==null&&this.oM.disconnect(),this.oM=null}}function kc(i){return!!(i.handleScroll.mouseWheel||i.handleScale.mouseWheel)}function MT(i){return i.open===void 0&&i.value===void 0}function ST(i){return(function(t){return t.open!==void 0})(i)||(function(t){return t.value!==void 0})(i)}function pm(i,t,e,n){const s=e.value,r={$n:t,wt:i,Wt:[s,s,s,s],Qr:n};return e.color!==void 0&&(r.R=e.color),r}function ET(i,t,e,n){const s=e.value,r={$n:t,wt:i,Wt:[s,s,s,s],Qr:n};return e.lineColor!==void 0&&(r.vt=e.lineColor),e.topColor!==void 0&&(r.ah=e.topColor),e.bottomColor!==void 0&&(r.oh=e.bottomColor),r}function AT(i,t,e,n){const s=e.value,r={$n:t,wt:i,Wt:[s,s,s,s],Qr:n};return e.topLineColor!==void 0&&(r._h=e.topLineColor),e.bottomLineColor!==void 0&&(r.uh=e.bottomLineColor),e.topFillColor1!==void 0&&(r.dh=e.topFillColor1),e.topFillColor2!==void 0&&(r.fh=e.topFillColor2),e.bottomFillColor1!==void 0&&(r.ph=e.bottomFillColor1),e.bottomFillColor2!==void 0&&(r.mh=e.bottomFillColor2),r}function CT(i,t,e,n){const s={$n:t,wt:i,Wt:[e.open,e.high,e.low,e.close],Qr:n};return e.color!==void 0&&(s.R=e.color),s}function TT(i,t,e,n){const s={$n:t,wt:i,Wt:[e.open,e.high,e.low,e.close],Qr:n};return e.color!==void 0&&(s.R=e.color),e.borderColor!==void 0&&(s.Ht=e.borderColor),e.wickColor!==void 0&&(s.hh=e.wickColor),s}function IT(i,t,e,n,s){const r=qe(s)(e),o=Math.max(...r),a=Math.min(...r),l=r[r.length-1],c=[l,o,a,l],{time:h,color:u,...d}=e;return{$n:t,wt:i,Wt:c,Qr:n,ue:d,R:u}}function Bs(i){return i.Wt!==void 0}function mm(i,t){return t.customValues!==void 0&&(i.ig=t.customValues),i}function Hi(i){return(t,e,n,s,r,o)=>(function(a,l){return l?l(a):MT(a)})(n,o)?mm({wt:t,$n:e,Qr:s},n):mm(i(t,e,n,s,r),n)}function gm(i){return{Candlestick:Hi(TT),Bar:Hi(CT),Area:Hi(ET),Baseline:Hi(AT),Histogram:Hi(pm),Line:Hi(pm),Custom:Hi(IT)}[i]}function vm(i){return{$n:0,ng:new Map,Oa:i}}function _m(i,t){if(i!==void 0&&i.length!==0)return{sg:t.key(i[0].wt),eg:t.key(i[i.length-1].wt)}}function ym(i){let t;return i.forEach((e=>{t===void 0&&(t=e.Qr)})),qe(t)}class RT{constructor(t){this.rg=new Map,this.hg=new Map,this.ag=new Map,this.lg=[],this.Pu=t}m(){this.rg.clear(),this.hg.clear(),this.ag.clear(),this.lg=[]}og(t,e){let n=this.rg.size!==0,s=!1;const r=this.hg.get(t);if(r!==void 0)if(this.hg.size===1)n=!1,s=!0,this.rg.clear();else for(const l of this.lg)l.pointData.ng.delete(t)&&(s=!0);let o=[];if(e.length!==0){const l=e.map((f=>f.time)),c=this.Pu.createConverterToInternalObj(e),h=gm(t.bh()),u=t.ul(),d=t.cl();o=e.map(((f,p)=>{const v=c(f.time),g=this.Pu.key(v);let m=this.rg.get(g);m===void 0&&(m=vm(v),this.rg.set(g,m),s=!0);const x=h(v,m.$n,f,l[p],u,d);return m.ng.set(t,x),x}))}n&&this._g(),this.ug(t,o);let a=-1;if(s){const l=[];this.rg.forEach((c=>{l.push({timeWeight:0,time:c.Oa,pointData:c,originalTime:ym(c.ng)})})),l.sort(((c,h)=>this.Pu.key(c.time)-this.Pu.key(h.time))),a=this.cg(l)}return this.dg(t,a,(function(l,c,h){const u=_m(l,h),d=_m(c,h);if(u!==void 0&&d!==void 0)return{fg:!1,Va:u.eg>=d.eg&&u.sg>=d.sg}})(this.hg.get(t),r,this.Pu))}if(t){return this.og(t,[])}pg(t,e,n){if(n&&t.Fa())throw new Error("Historical updates are not supported when conflation is enabled. Conflation requires data to be processed in order.");const s=e;(function(m){m.Qr===void 0&&(m.Qr=m.time)})(s),this.Pu.preprocessData(e);const r=this.Pu.createConverterToInternalObj([e])(e.time),o=this.ag.get(t);if(!n&&o!==void 0&&this.Pu.key(r)<this.Pu.key(o))throw new Error(`Cannot update oldest data, last time=${o}, new time=${r}`);let a=this.rg.get(this.Pu.key(r));if(n&&a===void 0)throw new Error("Cannot update non-existing data point when historicalUpdate is true");const l=a===void 0;a===void 0&&(a=vm(r),this.rg.set(this.Pu.key(r),a));const c=gm(t.bh()),h=t.ul(),u=t.cl(),d=c(r,a.$n,e,s.Qr,h,u),f=!n&&!l&&o!==void 0&&this.Pu.key(r)===this.Pu.key(o);a.ng.set(t,d),n?this.vg(t,d,a.$n):f&&t.Fa()&&Bs(d)?(t.Rr(d),this.mg(t,d)):this.mg(t,d);const p={Va:Bs(d),fg:n};if(!l)return this.dg(t,-1,p);const v={timeWeight:0,time:a.Oa,pointData:a,originalTime:ym(a.ng)},g=hs(this.lg,this.Pu.key(v.time),((m,x)=>this.Pu.key(m.time)<x));this.lg.splice(g,0,v);for(let m=g;m<this.lg.length;++m)ya(this.lg[m].pointData,m);return this.Pu.fillWeightsForPoints(this.lg,g),this.dg(t,g,p)}wg(t,e){const n=this.hg.get(t);if(n===void 0||e<=0)return[[],this.Mg()];e=Math.min(e,n.length);const s=n.splice(-e).reverse();n.length===0?this.ag.delete(t):this.ag.set(t,n[n.length-1].wt);for(const r of s){const o=this.rg.get(this.Pu.key(r.wt));if(o&&(o.ng.delete(t),o.ng.size===0)){this.rg.delete(this.Pu.key(o.Oa)),this.lg.splice(o.$n,1);for(let a=o.$n;a<this.lg.length;++a)ya(this.lg[a].pointData,a)}}return[s,this.dg(t,this.lg.length-1,{fg:!1,Va:!1})]}mg(t,e){let n=this.hg.get(t);n===void 0&&(n=[],this.hg.set(t,n));const s=n.length!==0?n[n.length-1]:null;s===null||this.Pu.key(e.wt)>this.Pu.key(s.wt)?Bs(e)&&n.push(e):Bs(e)?n[n.length-1]=e:n.splice(-1,1),this.ag.set(t,e.wt)}vg(t,e,n){const s=this.hg.get(t);if(s===void 0)return;const r=hs(s,n,((o,a)=>o.$n<a));Bs(e)?s[r]=e:s.splice(r,1)}ug(t,e){e.length!==0?(this.hg.set(t,e.filter(Bs)),this.ag.set(t,e[e.length-1].wt)):(this.hg.delete(t),this.ag.delete(t))}_g(){for(const t of this.lg)t.pointData.ng.size===0&&this.rg.delete(this.Pu.key(t.time))}cg(t){let e=-1;for(let n=0;n<this.lg.length&&n<t.length;++n){const s=this.lg[n],r=t[n];if(this.Pu.key(s.time)!==this.Pu.key(r.time)){e=n;break}r.timeWeight=s.timeWeight,ya(r.pointData,n)}if(e===-1&&this.lg.length!==t.length&&(e=Math.min(this.lg.length,t.length)),e===-1)return-1;for(let n=e;n<t.length;++n)ya(t[n].pointData,n);return this.Pu.fillWeightsForPoints(t,e),this.lg=t,e}gg(){if(this.hg.size===0)return null;let t=0;return this.hg.forEach((e=>{e.length!==0&&(t=Math.max(t,e[e.length-1].$n))})),t}dg(t,e,n){const s=this.Mg();if(e!==-1)this.hg.forEach(((r,o)=>{s.Y_.set(o,{ue:r,bg:o===t?n:void 0})})),this.hg.has(t)||s.Y_.set(t,{ue:[],bg:n}),s.Et.Sg=this.lg,s.Et.xg=e;else{const r=this.hg.get(t);s.Y_.set(t,{ue:r||[],bg:n})}return s}Mg(){return{Y_:new Map,Et:{Dc:this.gg()}}}}function ya(i,t){i.$n=t,i.ng.forEach((e=>{e.$n=t}))}function LT(i,t){return i._t<t}function PT(i,t){return t<i._t}function Yh(i,t,e,n){return hs(i,t,LT,e,n)}function Xh(i,t,e,n){return Yu(i,t,PT,e,n)}function Da(i,t,e){return{ne:i,se:t,ee:e}}function xm(i,t,e,n){return i>=t-n&&i<=e+n}function Wr(i,t,e,n,s,r){const o=s-e,a=r-n;if(o===0&&a===0)return Math.hypot(i-e,t-n);const l=((i-e)*o+(t-n)*a)/(o*o+a*a),c=Math.max(0,Math.min(1,l)),h=e+o*c,u=n+a*c;return Math.hypot(i-h,t-u)}const Oc=[0,0];function DT(i,t,e){return t===void 0||t.wt!==i.wt-1?i._t-e/2:(t._t+i._t)/2}function UT(i,t,e){return t===void 0||t.wt!==i.wt+1?i._t+e/2:(i._t+t._t)/2}function Ju(i,t,e,n,s,r,o){if(t===null||t.from>=t.to||i.length===0)return null;const a=s/2+r,l=Yh(i,e-a,t.from,t.to),c=Xh(i,e+a,l,t.to);if(l>=c)return null;let h=Number.POSITIVE_INFINITY;for(let u=l;u<c;u++){const d=i[u],f=u>t.from?i[u-1]:void 0,p=u<t.to-1?i[u+1]:void 0,v=DT(d,f,s)-r,g=UT(d,p,s)+r;if(e<v||e>g)continue;o(d,Oc);const m=Oc[0],x=Oc[1],_=Math.min(m,x),y=Math.max(m,x),R=_-r,A=y+r;if(n>=_&&n<=y)h=Math.min(h,0);else if(n>=R&&n<=A){const T=Math.min(Math.abs(n-_),Math.abs(y-n));h=Math.min(h,T)}}return Number.isFinite(h)?Da(h,0,"series-range"):null}function BT(i,t){return i.wt<t}function NT(i,t){return t<i.wt}function FT(i,t,e){const n=t.Na(),s=t.bi(),r=hs(i,n,BT),o=Yu(i,s,NT);if(!e)return{from:r,to:o};let a=r,l=o;return r>0&&r<i.length&&i[r].wt>=n&&(a=r-1),o>0&&o<i.length&&i[o-1].wt<=s&&(l=o+1),{from:a,to:l}}class td{constructor(t,e,n){this.Cg=!0,this.yg=!0,this.Pg=!0,this.kg=[],this.Tg=null,this.Rg=-1,this.ae=t,this.le=e,this.Dg=n}Pt(t){this.Cg=!0,t==="data"&&(this.yg=!0),t==="options"&&(this.Pg=!0)}Tt(){return this.ae.It()?(this.Ig(),this.Tg===null?null:this.Vg):null}Qs(t,e){return this.ae.It()?(this.Ig(),this.Tg===null?null:this.Bg(t,e)):null}Bg(t,e){return null}Eg(){this.kg=this.kg.map((t=>({...t,...this.ae.Sa().Sh(t.wt)})))}Ag(){this.Tg=null}Ig(){const t=this.le.Et(),e=t.N().enableConflation?t.sd():0;e!==this.Rg&&(this.yg=!0,this.Rg=e),this.yg&&(this.Lg(),this.yg=!1),this.Pg&&(this.Eg(),this.Pg=!1),this.Cg&&(this.zg(),this.Cg=!1)}zg(){const t=this.ae.Ft(),e=this.le.Et();if(this.Ag(),e.Zi()||t.Zi())return;const n=e.Ee();if(n===null||this.ae.Un().Th()===0)return;const s=this.ae.Lt();s!==null&&(this.Tg=FT(this.kg,n,this.Dg),this.Og(t,e,s.Wt),this.Ng())}}class kT{constructor(t,e){this.Fg=t,this.Ki=e}st(t,e,n){this.Fg.draw(t,this.Ki,e,n)}}function OT(i){switch(i){case"point":return 2;case"range":return 0;default:return 1}}class zT extends td{constructor(t,e,n){super(t,e,!1),this.Yh=n,this.Fg=this.Yh.renderer(),this.Vg=new kT(this.Fg,(s=>this.Wg(s)))}get ga(){return this.Yh.conflationReducer}Ha(t){return this.Yh.priceValueBuilder(t)}dl(t){return this.Yh.isWhitespace(t)}Bg(t,e){const n=this.Fg.hitTest?.(t,e,(o=>this.Wg(o)));if(n!=null)return{ne:(s=n).distance,se:OT(s.type),ee:"custom",gu:s.cursorStyle,te:s.objectId,ie:s.hitTestData};var s;const r=Ju(this.kg,this.Tg,t,e,this.le.Et().ml(),this.ae.N().hitTestTolerance,((o,a)=>{const l=o.Hg;let c=NaN,h=NaN;if(l!==void 0&&!this.Yh.isWhitespace(l))for(const u of this.Yh.priceValueBuilder(l)){const d=this.Wg(u);d!==null&&(c=Number.isNaN(c)?d:Math.min(c,d),h=Number.isNaN(h)?d:Math.max(h,d))}a[0]=c,a[1]=h}));return r===null?null:{...r,ee:"custom"}}Lg(){const t=this.ae.Sa();this.kg=this.ae.Ua().Bh().map((e=>({wt:e.$n,_t:NaN,...t.Sh(e.$n),Hg:e.ue})))}Og(t,e){e.Ic(this.kg,uo(this.Tg))}Ng(){this.Yh.update({bars:this.kg.map(HT),barSpacing:this.le.Et().ml(),visibleRange:this.Tg,conflationFactor:this.le.Et().sd()},this.ae.N())}Wg(t){const e=this.ae.Lt();return e===null?null:this.ae.Ft().Nt(t,e.Wt)}}function HT(i){return{x:i._t,time:i.wt,originalData:i.Hg,barColor:i.sh}}const VT={color:"#2196f3"},GT=(i,t,e)=>{const n=Ii(e);return new zT(i,t,n)};function ed(i){const t={value:i.Wt[3],time:i.Qr};return i.ig!==void 0&&(t.customValues=i.ig),t}function bm(i){const t=ed(i);return i.R!==void 0&&(t.color=i.R),t}function WT(i){const t=ed(i);return i.vt!==void 0&&(t.lineColor=i.vt),i.ah!==void 0&&(t.topColor=i.ah),i.oh!==void 0&&(t.bottomColor=i.oh),t}function $T(i){const t=ed(i);return i._h!==void 0&&(t.topLineColor=i._h),i.uh!==void 0&&(t.bottomLineColor=i.uh),i.dh!==void 0&&(t.topFillColor1=i.dh),i.fh!==void 0&&(t.topFillColor2=i.fh),i.ph!==void 0&&(t.bottomFillColor1=i.ph),i.mh!==void 0&&(t.bottomFillColor2=i.mh),t}function Z0(i){const t={open:i.Wt[0],high:i.Wt[1],low:i.Wt[2],close:i.Wt[3],time:i.Qr};return i.ig!==void 0&&(t.customValues=i.ig),t}function QT(i){const t=Z0(i);return i.R!==void 0&&(t.color=i.R),t}function qT(i){const t=Z0(i),{R:e,Ht:n,hh:s}=i;return e!==void 0&&(t.color=e),n!==void 0&&(t.borderColor=n),s!==void 0&&(t.wickColor=s),t}function Ua(i){return{Area:WT,Line:bm,Baseline:$T,Histogram:bm,Bar:QT,Candlestick:qT,Custom:KT}[i]}function KT(i){const t=i.Qr;return{...i.ue,time:t}}const YT={vertLine:{color:"#9598A1",width:1,style:3,visible:!0,labelVisible:!0,labelBackgroundColor:"#131722"},horzLine:{color:"#9598A1",width:1,style:3,visible:!0,labelVisible:!0,labelBackgroundColor:"#131722"},mode:1,doNotSnapToHiddenSeriesIndices:!1},XT={vertLines:{color:"#D6DCDE",style:0,visible:!0},horzLines:{color:"#D6DCDE",style:0,visible:!0}},jT={background:{type:"solid",color:"#FFFFFF"},textColor:"#191919",fontSize:12,fontFamily:B0,panes:{enableResize:!0,separatorColor:"#E0E3EB",separatorHoverColor:"rgba(178, 181, 189, 0.2)"},attributionLogo:!0,colorSpace:"srgb",colorParsers:[]},zc={autoScale:!0,mode:0,invertScale:!1,alignLabels:!0,borderVisible:!0,borderColor:"#2B2B43",entireTextOnly:!1,visible:!1,ticksVisible:!1,scaleMargins:{bottom:.1,top:.2},minimumWidth:0,ensureEdgeTickMarksVisible:!1,tickMarkDensity:2.5},ZT={rightOffset:0,barSpacing:6,minBarSpacing:.5,maxBarSpacing:0,fixLeftEdge:!1,fixRightEdge:!1,lockVisibleTimeRangeOnResize:!1,rightBarStaysOnScroll:!1,borderVisible:!0,borderColor:"#2B2B43",visible:!0,timeVisible:!1,secondsVisible:!0,shiftVisibleRangeOnNewBar:!0,allowShiftVisibleRangeOnWhitespaceReplacement:!1,ticksVisible:!1,uniformDistribution:!1,minimumHeight:0,allowBoldLabels:!0,ignoreWhitespaceIndices:!1,enableConflation:!1,conflationThresholdFactor:1,precomputeConflationOnInit:!1,precomputeConflationPriority:"background"};function wm(){return{addDefaultPane:!0,hoveredSeriesOnTop:!0,width:0,height:0,autoSize:!1,layout:jT,crosshair:YT,grid:XT,overlayPriceScales:{...zc},leftPriceScale:{...zc,visible:!1},rightPriceScale:{...zc,visible:!0},defaultVisiblePriceScaleId:"right",timeScale:ZT,localization:{locale:cr?navigator.language:"",dateFormat:"dd MMM 'yy"},handleScroll:{mouseWheel:!0,pressedMouseMove:!0,horzTouchDrag:!0,vertTouchDrag:!0},handleScale:{axisPressedMouseMove:{time:!0,price:!0},axisDoubleClickReset:{time:!0,price:!0},mouseWheel:!0,pinch:!0},kineticScroll:{mouse:!1,touch:!0},trackingMode:{exitMode:1}}}class J0{constructor(t,e,n){this.hv=t,this.Ug=e,this.$g=n??0}applyOptions(t){this.hv.Qt().Dd(this.Ug,t,this.$g)}options(){return this.Ki().N()}width(){return pl(this.Ug)?this.hv.DM(this.Ug):0}setVisibleRange(t){this.setAutoScale(!1),this.Ki().Go(new Ge(t.from,t.to))}getVisibleRange(){let t,e,n=this.Ki().ar();if(n===null)return null;if(this.Ki().ho()){const s=this.Ki().S_(),r=K0(s);n=Vs(n,this.Ki().lo()),t=Number((Math.round(n.Je()/s)*s).toFixed(r)),e=Number((Math.round(n.Qe()/s)*s).toFixed(r))}else t=n.Je(),e=n.Qe();return{from:t,to:e}}setAutoScale(t){this.applyOptions({autoScale:t})}Ki(){return ut(this.hv.Qt().Id(this.Ug,this.$g)).Ft}}class JT{constructor(t,e,n,s){this.hv=t,this.yt=n,this.jg=e,this.qg=s}getHeight(){return this.yt.$t()}setHeight(t){const e=this.hv.Qt(),n=e._f(this.yt);e.Ld(n,t)}getStretchFactor(){return this.yt.F_()}setStretchFactor(t){this.yt.W_(t),this.hv.Qt().ka()}paneIndex(){return this.hv.Qt()._f(this.yt)}moveTo(t){const e=this.paneIndex();e!==t&&(Me(t>=0&&t<this.hv.lv().length,"Invalid pane index"),this.hv.Qt().Od(e,t))}getSeries(){return this.yt.Y_().map((t=>this.jg(t)))??[]}getHTMLElement(){const t=this.hv.lv();return t&&t.length!==0&&t[this.paneIndex()]?t[this.paneIndex()].fv():null}attachPrimitive(t){this.yt.ol(t),t.attached&&t.attached({chart:this.qg,requestUpdate:()=>this.yt.Qt().ka()})}detachPrimitive(t){this.yt._l(t)}priceScale(t){if(this.yt.O_(t)===null)throw new Error(`Cannot find price scale with id: ${t}`);return new J0(this.hv,t,this.paneIndex())}setPreserveEmptyPane(t){this.yt.j_(t)}preserveEmptyPane(){return this.yt.q_()}addCustomSeries(t,e={},n=0){return this.qg.addCustomSeries(t,e,n)}addSeries(t,e={}){return this.qg.addSeries(t,e,this.paneIndex())}}const tI={color:"#FF0000",price:0,lineStyle:2,lineWidth:1,lineVisible:!0,axisLabelVisible:!0,title:"",axisLabelColor:"",axisLabelTextColor:""};class Mm{constructor(t){this._r=t}applyOptions(t){this._r.vr(t)}options(){return this._r.N()}Yg(){return this._r}}class eI{constructor(t,e,n,s,r,o){this.Kg=new fe,this.ae=t,this.Gg=e,this.Zg=n,this.Pu=r,this.qg=s,this.Xg=o}m(){this.Kg.m()}priceFormatter(){return this.ae.sl()}priceToCoordinate(t){const e=this.ae.Lt();return e===null?null:this.ae.Ft().Nt(t,e.Wt)}coordinateToPrice(t){const e=this.ae.Lt();return e===null?null:this.ae.Ft().Tn(t,e.Wt)}barsInLogicalRange(t){if(t===null)return null;const e=new Xs(new Jr(t.from,t.to)).Uu(),n=this.ae.Un();if(n.Zi())return null;const s=n.Hn(e.Na(),1),r=n.Hn(e.bi(),-1),o=ut(n.Rh()),a=ut(n.Qn());if(s!==null&&r!==null&&s.$n>r.$n)return{barsBefore:t.from-o,barsAfter:a-t.to};const l={barsBefore:s===null||s.$n===o?t.from-o:s.$n-o,barsAfter:r===null||r.$n===a?a-t.to:a-r.$n};return s!==null&&r!==null&&(l.from=s.Qr,l.to=r.Qr),l}setData(t){this.Pu,this.ae.bh(),this.Gg.Jg(this.ae,t),this.Qg("full")}update(t,e=!1){this.ae.bh(),this.Gg.tb(this.ae,t,e),this.Qg("update")}pop(t=1){const e=this.Gg.ib(this.ae,t);e.length!==0&&this.Qg("update");const n=Ua(this.seriesType());return e.map((s=>n(s)))}dataByIndex(t,e){const n=this.ae.Un().Hn(t,e);return n===null?null:Ua(this.seriesType())(n)}data(){const t=Ua(this.seriesType());return this.ae.Un().Bh().map((e=>t(e)))}subscribeDataChanged(t){this.Kg.i(t)}unsubscribeDataChanged(t){this.Kg._(t)}applyOptions(t){this.ae.vr(t)}options(){return ri(this.ae.N())}priceScale(){return this.Zg.priceScale(this.ae.Ft().pl(),this.getPane().paneIndex())}createPriceLine(t){const e=rn(ri(tI),t),n=this.ae.Ea(e);return new Mm(n)}removePriceLine(t){this.ae.Aa(t.Yg())}priceLines(){return this.ae.La().map((t=>new Mm(t)))}seriesType(){return this.ae.bh()}lastValueData(t){const e=this.ae.Ae(t);return e.Le?{noData:!0}:{noData:!1,price:e.Mt,color:e.R}}attachPrimitive(t){this.ae.ol(t),t.attached&&t.attached({chart:this.qg,series:this,requestUpdate:()=>this.ae.Qt().ka(),horzScaleBehavior:this.Pu})}detachPrimitive(t){this.ae._l(t),t.detached&&t.detached(),this.ae.Qt().ka()}getPane(){const t=this.ae,e=ut(this.ae.Qt().Ks(t));return this.Xg(e)}moveToPane(t){this.ae.Qt().rf(this.ae,t)}seriesOrder(){const t=this.ae.Qt().Ks(this.ae);return t===null?-1:t.Y_().indexOf(this.ae)}setSeriesOrder(t){const e=this.ae.Qt().Ks(this.ae);e!==null&&e.vu(this.ae,t)}Qg(t){this.Kg.v()&&this.Kg.p(t)}}class nI{constructor(t,e,n){this.nb=new fe,this.Qu=new fe,this.Nw=new fe,this.sn=t,this.ia=t.Et(),this.vM=e,this.ia.Zc().i(this.sb.bind(this)),this.ia.Xc().i(this.eb.bind(this)),this.vM.qw().i(this.rb.bind(this)),this.Pu=n}m(){this.ia.Zc().u(this),this.ia.Xc().u(this),this.vM.qw().u(this),this.nb.m(),this.Qu.m(),this.Nw.m()}scrollPosition(){return this.ia.Oc()}scrollToPosition(t,e){e?this.ia.Yc(t,1e3):this.sn.gs(t)}scrollToRealTime(){this.ia.qc()}getVisibleRange(){const t=this.ia.xc();return t===null?null:{from:t.from.originalTime,to:t.to.originalTime}}setVisibleRange(t){const e={from:this.Pu.convertHorzItemToInternal(t.from),to:this.Pu.convertHorzItemToInternal(t.to)},n=this.ia.kc(e);this.sn.sf(n)}getVisibleLogicalRange(){const t=this.ia.Sc();return t===null?null:{from:t.Na(),to:t.bi()}}setVisibleLogicalRange(t){Me(t.from<=t.to,"The from index cannot be after the to index."),this.sn.sf(t)}resetTimeScale(){this.sn.ws()}fitContent(){this.sn.td()}logicalToCoordinate(t){const e=this.sn.Et();return e.Zi()?null:e.jt(t)}coordinateToLogical(t){return this.ia.Zi()?null:this.ia.Vc(t)}timeToIndex(t,e){const n=this.Pu.convertHorzItemToInternal(t);return this.ia.Mc(n,e)}timeToCoordinate(t){const e=this.timeToIndex(t,!1);return e===null?null:this.ia.jt(e)}coordinateToTime(t){const e=this.sn.Et(),n=e.Vc(t),s=e.en(n);return s===null?null:s.originalTime}width(){return this.vM.pv().width}height(){return this.vM.pv().height}subscribeVisibleTimeRangeChange(t){this.nb.i(t)}unsubscribeVisibleTimeRangeChange(t){this.nb._(t)}subscribeVisibleLogicalRangeChange(t){this.Qu.i(t)}unsubscribeVisibleLogicalRangeChange(t){this.Qu._(t)}subscribeSizeChange(t){this.Nw.i(t)}unsubscribeSizeChange(t){this.Nw._(t)}applyOptions(t){this.ia.vr(t)}options(){return{...ri(this.ia.N()),barSpacing:this.ia.ml()}}sb(){this.nb.v()&&this.nb.p(this.getVisibleRange())}eb(){this.Qu.v()&&this.Qu.p(this.getVisibleLogicalRange())}rb(t){this.Nw.p(t.width,t.height)}}function Sm(i){return(function(t){if(ha(t.handleScale)){const n=t.handleScale;t.handleScale={axisDoubleClickReset:{time:n,price:n},axisPressedMouseMove:{time:n,price:n},mouseWheel:n,pinch:n}}else if(t.handleScale!==void 0){const{axisPressedMouseMove:n,axisDoubleClickReset:s}=t.handleScale;ha(n)&&(t.handleScale.axisPressedMouseMove={time:n,price:n}),ha(s)&&(t.handleScale.axisDoubleClickReset={time:s,price:s})}const e=t.handleScroll;ha(e)&&(t.handleScroll={horzTouchDrag:e,vertTouchDrag:e,mouseWheel:e,pressedMouseMove:e})})(i),i}class iI{constructor(t,e,n){this.hb=new Map,this.ab=new Map,this.lb=new fe,this.ob=new fe,this._b=new fe,this.dd=new WeakMap,this.ub=new RT(e);const s=n===void 0?ri(wm()):rn(ri(wm()),Sm(n));this.cb=e,this.hv=new wT(t,s,e),this.hv.mw().i((o=>{this.lb.v()&&this.lb.p(this.fb(o()))}),this),this.hv.ww().i((o=>{this.ob.v()&&this.ob.p(this.fb(o()))}),this),this.hv.Bd().i((o=>{this._b.v()&&this._b.p(this.fb(o()))}),this);const r=this.hv.Qt();this.pb=new nI(r,this.hv.bM(),this.cb)}remove(){this.hv.mw().u(this),this.hv.ww().u(this),this.hv.Bd().u(this),this.pb.m(),this.hv.m(),this.hb.clear(),this.ab.clear(),this.lb.m(),this.ob.m(),this._b.m(),this.ub.m()}resize(t,e,n){this.autoSizeActive()||this.hv.wM(t,e,n)}addCustomSeries(t,e={},n=0){const s=(r=>({type:"Custom",isBuiltIn:!1,defaultOptions:{...VT,...r.defaultOptions()},mb:GT,wb:r}))(Ii(t));return this.Mb(s,e,n)}addSeries(t,e={},n=0){return this.Mb(t,e,n)}removeSeries(t){const e=qe(this.hb.get(t)),n=this.ub.if(e);this.hv.Qt().if(e),this.gb(n),this.hb.delete(t),this.ab.delete(e)}Jg(t,e){this.gb(this.ub.og(t,e))}tb(t,e,n){this.gb(this.ub.pg(t,e,n))}ib(t,e){const[n,s]=this.ub.wg(t,e);return n.length!==0&&this.gb(s),n}subscribeClick(t){this.lb.i(t)}unsubscribeClick(t){this.lb._(t)}subscribeCrosshairMove(t){this._b.i(t)}unsubscribeCrosshairMove(t){this._b._(t)}subscribeDblClick(t){this.ob.i(t)}unsubscribeDblClick(t){this.ob._(t)}priceScale(t,e=0){return new J0(this.hv,t,e)}timeScale(){return this.pb}applyOptions(t){this.hv.vr(Sm(t))}options(){return this.hv.N()}takeScreenshot(t=!1,e=!1){let n,s;try{e||(n=this.hv.Qt().N().crosshair.mode,this.hv.vr({crosshair:{mode:2}})),s=this.hv.TM(t)}finally{e||n===void 0||this.hv.Qt().vr({crosshair:{mode:n}})}return s}addPane(t=!1){const e=this.hv.Qt().uf();return e.j_(t),this.bb(e)}removePane(t){this.hv.Qt().Ad(t)}swapPanes(t,e){this.hv.Qt().zd(t,e)}autoSizeActive(){return this.hv.CM()}chartElement(){return this.hv.Mv()}panes(){return this.hv.Qt().Gn().map((t=>this.bb(t)))}paneSize(t=0){const e=this.hv.AM(t);return{height:e.height,width:e.width}}setCrosshairPosition(t,e,n){const s=this.hb.get(n);if(s===void 0)return;const r=this.hv.Qt().Ks(s);r!==null&&this.hv.Qt().Gd(t,e,r)}clearCrosshairPosition(){this.hv.Qt().Zd(!0)}horzBehaviour(){return this.cb}Mb(t,e={},n=0){Me(t.mb!==void 0),(function(l){if(l===void 0||l.type==="custom")return;const c=l;c.minMove!==void 0&&c.precision===void 0&&(c.precision=K0(c.minMove))})(e.priceFormat),t.type==="Candlestick"&&(function(l){l.borderColor!==void 0&&(l.borderUpColor=l.borderColor,l.borderDownColor=l.borderColor),l.wickColor!==void 0&&(l.wickUpColor=l.wickColor,l.wickDownColor=l.wickColor)})(e);const s=rn(ri(D0),ri(t.defaultOptions),e),r=t.mb,o=new gl(this.hv.Qt(),t.type,s,r,t.wb);this.hv.Qt().Qd(o,n);const a=new eI(o,this,this,this,this.cb,(l=>this.bb(l)));return this.hb.set(a,o),this.ab.set(o,a),a}gb(t){const e=this.hv.Qt();for(const n of t.Y_.keys())n.Ia();e.Xd(t.Et.Dc,t.Et.Sg,t.Et.xg),t.Y_.forEach(((n,s)=>s.ht(n.ue,n.bg))),e.Et().dc(),e.Lc()}Sb(t){return qe(this.ab.get(t))}xb(t){return t!==void 0&&this.ab.has(t)?this.Sb(t):void 0}fb(t){const e=new Map;t.QM.forEach(((r,o)=>{const a=o.bh(),l=Ua(a)(r);if(a!=="Custom")Me(ST(l));else{const c=o.cl();Me(!c||c(l)===!1)}e.set(this.Sb(o),l)}));const n=this.xb(t.jM),s=t.YM===void 0?void 0:{type:t.YM.ds,sourceKind:t.YM.KM,objectKind:t.YM.GM,series:this.xb(t.YM.Y_),objectId:t.YM.ZM,paneIndex:t.YM.XM};return{time:t.Qr,logical:t.$n,point:t.JM,paneIndex:t.XM,hoveredInfo:s,hoveredSeries:n,hoveredObjectId:t.qM,seriesData:e,sourceEvent:t.tg}}bb(t){let e=this.dd.get(t);return e||(e=new JT(this.hv,(n=>this.Sb(n)),t,this),this.dd.set(t,e)),e}}function sI(i){if(yo(i)){const t=document.getElementById(i);return Me(t!==null,`Cannot find element in DOM with id=${i}`),t}return i}function rI(i,t,e){const n=sI(i),s=new iI(n,t,e);return t.setOptions(s.options()),s}function oI(i,t){return rI(i,new am,am.Tf(t))}function Ur(i,t,e,n){return Math.hypot(e-i,n-t)}function aI(i,t,e,n,s,r,o,a=0){if(t.length===0||n.from>=t.length||n.to<=0)return;const{context:l,horizontalPixelRatio:c,verticalPixelRatio:h}=i,u=t[n.from];let d=r(i,u),f=u;if(n.to-n.from<2){const p=s/2;l.beginPath();const v={_t:u._t-p,ut:u.ut},g={_t:u._t+p,ut:u.ut};l.moveTo(v._t*c,v.ut*h),l.lineTo(g._t*c,g.ut*h),o(i,d,v,g)}else{const p=a>0;let v=0;const g=(x,_)=>{if(o(i,d,f,_),l.beginPath(),d=x,f=_,p){const y=v%a;l.lineDashOffset=y,v=y}};let m=f;l.beginPath(),l.moveTo(u._t*c,u.ut*h);for(let x=n.from+1;x<n.to;++x){m=t[x];const _=m._t*c,y=m.ut*h,R=r(i,m);switch(e){case 0:if(l.lineTo(_,y),p){const A=t[x-1],T=A._t*c,I=A.ut*h;v+=Ur(T,I,_,y)}break;case 1:{const A=t[x-1],T=A.ut*h;l.lineTo(_,T),p&&(v+=Math.abs(m._t-A._t)*c),R!==d&&(g(R,m),l.lineTo(_,T)),l.lineTo(_,y),p&&(v+=Math.abs(m.ut-A.ut)*h);break}case 2:{const[A,T]=nd(t,x-1,x),I=A._t*c,w=A.ut*h,b=T._t*c,S=T.ut*h;if(l.bezierCurveTo(I,w,b,S,_,y),p){const U=t[x-1],P=U._t*c,W=U.ut*h,Z=Ur(P,W,_,y),D=Ur(P,W,I,w)+Ur(I,w,b,S)+Ur(b,S,_,y);v+=(Z+D)/2}break}}e!==1&&R!==d&&(g(R,m),l.moveTo(_,y))}(f!==m||f===m&&e===1)&&o(i,d,f,m),p&&(l.lineDashOffset=0)}}const Em=6;function Hc(i,t){return{_t:i._t-t._t,ut:i.ut-t.ut}}function Am(i,t){return{_t:i._t/t,ut:i.ut/t}}function nd(i,t,e){const n=Math.max(0,t-1),s=Math.min(i.length-1,e+1);var r,o;return[(r=i[t],o=Am(Hc(i[e],i[n]),Em),{_t:r._t+o._t,ut:r.ut+o.ut}),Hc(i[e],Am(Hc(i[s],i[t]),Em))]}function lI(i,t){const e=i.context;e.strokeStyle=t,e.stroke()}class cI extends Pi{constructor(){super(...arguments),this.rt=null}ht(t){this.rt=t}et(t){if(this.rt===null)return;const{ot:e,lt:n,Cb:s,yb:r,ct:o,Gt:a,Pb:l}=this.rt;if(n===null)return;const c=t.context;c.lineCap="butt",c.lineWidth=o*t.verticalPixelRatio;const h=cs(c,a);c.lineJoin="round";const u=this.kb.bind(this),d=(function(f){return f.reduce(((p,v)=>p+v),0)})(h);r!==void 0&&aI(t,e,r,n,s,u,lI,d),l&&(function(f,p,v,g,m){if(g.to-g.from<=0)return;const{horizontalPixelRatio:x,verticalPixelRatio:_,context:y}=f;let R=null;const A=Math.max(1,Math.floor(x))%2/2,T=v*_+A;for(let I=g.to-1;I>=g.from;--I){const w=p[I];if(w){const b=m(f,w);b!==R&&(R!==null&&y.fill(),y.beginPath(),y.fillStyle=b,R=b);const S=Math.round(w._t*x)+A,U=w.ut*_;y.moveTo(S,U),y.arc(S,U,T,0,2*Math.PI)}}y.fill()})(t,e,l,n,u)}}class hI extends cI{kb(t,e){return e.vt}}function Cm(i,t,e,n,s){const r=1-s;return r*r*r*i+3*r*r*s*t+3*r*s*s*e+s*s*s*n}function uI(i,t,e,n,s){if(e===2){const[r,o]=nd(n,s-1,s);return[Math.min(i._t,t._t,r._t,o._t),Math.max(i._t,t._t,r._t,o._t)]}return[Math.min(i._t,t._t),Math.max(i._t,t._t)]}function dI(i,t,e,n,s,r,o,a){switch(s){case 1:{const l=Wr(i,t,e._t,e.ut,n._t,e.ut),c=Wr(i,t,n._t,e.ut,n._t,n.ut),h=Math.min(l,c);return h<=a?h:null}case 2:{const[l,c]=nd(r,o-1,o),h=(function(u,d,f){let p=Number.POSITIVE_INFINITY,v=f[0];for(let g=1;g<=12;g++){const m=g/12,x={_t:Cm(f[0]._t,f[1]._t,f[2]._t,f[3]._t,m),ut:Cm(f[0].ut,f[1].ut,f[2].ut,f[3].ut,m)};p=Math.min(p,Wr(u,d,v._t,v.ut,x._t,x.ut)),v=x}return p})(i,t,[e,l,c,n]);return h<=a?h:null}default:{const l=Wr(i,t,e._t,e.ut,n._t,n.ut);return l<=a?l:null}}}class tv extends td{constructor(t,e){super(t,e,!0)}Og(t,e,n){e.Ic(this.kg,uo(this.Tg)),t.Jo(this.kg,n,uo(this.Tg))}Tb(t,e){return{wt:t,Mt:e,_t:NaN,ut:NaN}}Lg(){const t=this.ae.Sa();this.kg=this.ae.Ua().Bh().map((e=>{let n;if((e.Gr??1)>1){const s=e.Wt[1],r=e.Wt[2],o=e.Wt[3];n=Math.abs(s-o)>Math.abs(r-o)?s:r}else n=e.Wt[3];return this.Rb(e.$n,n,t)}))}}class fI extends tv{Bg(t,e){const n=this.ae.N();return(function(s,r,o,a,l,c,h,u=0,d=0){if(r===null||r.from>=r.to||s.length===0)return null;const f=Math.max(c/2,h??0)+d;let p=Number.POSITIVE_INFINITY;if(h!==void 0){const y=h+d,R=Yh(s,o-y,r.from,r.to),A=Xh(s,o+y,R,r.to);for(let T=R;T<A;T++){const I=s[T];if(!xm(o,I._t,I._t,h+d))continue;const w=Math.hypot(o-I._t,a-I.ut);w<=h+d&&(p=Math.min(p,w))}}if(r.to-r.from<2){const y=s[r.from],R=Math.max(u/2,f),A=Wr(o,a,y._t-R,y.ut,y._t+R,y.ut);return A<=f&&(p=Math.min(p,A)),Number.isFinite(p)?Da(p,2,"series-point"):null}let v=Number.POSITIVE_INFINITY;const g=Yh(s,o-f,r.from,r.to),m=Xh(s,o+f,g,r.to),x=Math.max(r.from+1,g),_=Math.min(r.to,m+1);for(let y=x;y<_;y++){const R=s[y-1],A=s[y],[T,I]=uI(R,A,l,s,y);if(!xm(o,T,I,f))continue;const w=dI(o,a,R,A,l,s,y,f);w!==null&&(v=Math.min(v,w))}return Number.isFinite(p)?Da(p,2,"series-point"):Number.isFinite(v)?Da(v,1,"series-line"):null})(this.kg,this.Tg,t,e,n.lineType,n.lineVisible?n.lineWidth:1,n.pointMarkersVisible?n.pointMarkersRadius||n.lineWidth/2+2:void 0,this.le.Et().ml(),n.hitTestTolerance)}}class pI extends fI{constructor(){super(...arguments),this.Vg=new hI}Rb(t,e,n){return{...this.Tb(t,e),...n.Sh(t)}}Ng(){const t=this.ae.N(),e={ot:this.kg,Gt:t.lineStyle,yb:t.lineVisible?t.lineType:void 0,ct:t.lineWidth,Pb:t.pointMarkersVisible?t.pointMarkersRadius||t.lineWidth/2+2:void 0,lt:this.Tg,Cb:this.le.Et().ml()};this.Vg.ht(e)}}const mI={type:"Line",isBuiltIn:!0,defaultOptions:{color:"#2196f3",lineStyle:0,lineWidth:3,lineType:0,lineVisible:!0,crosshairMarkerVisible:!0,crosshairMarkerRadius:4,crosshairMarkerBorderColor:"",crosshairMarkerBorderWidth:2,crosshairMarkerBackgroundColor:"",lastPriceAnimation:0,pointMarkersVisible:!1},mb:(i,t)=>new pI(i,t)};class gI extends td{constructor(t,e){super(t,e,!1)}Bg(t,e){return Ju(this.kg,this.Tg,t,e,this.le.Et().ml(),this.ae.N().hitTestTolerance,((n,s)=>{s[0]=n.n_,s[1]=n.s_}))}Og(t,e,n){e.Ic(this.kg,uo(this.Tg)),t.t_(this.kg,n,uo(this.Tg))}fS(t,e,n){return{wt:t,jr:e.Wt[0],qr:e.Wt[1],Yr:e.Wt[2],Kr:e.Wt[3],_t:NaN,i_:NaN,n_:NaN,s_:NaN,e_:NaN}}Lg(){const t=this.ae.Sa();this.kg=this.ae.Ua().Bh().map((e=>this.Rb(e.$n,e,t)))}}class vI extends Pi{constructor(){super(...arguments),this.qt=null,this.oS=0}ht(t){this.qt=t}et(t){if(this.qt===null||this.qt.Un.length===0||this.qt.lt===null)return;const{horizontalPixelRatio:e}=t;this.oS=(function(r,o){if(r>=2.5&&r<=4)return Math.floor(3*o);const a=1-.2*Math.atan(Math.max(4,r)-4)/(.5*Math.PI),l=Math.floor(r*a*o),c=Math.floor(r*o),h=Math.min(l,c);return Math.max(Math.floor(o),h)})(this.qt.ml,e),this.oS>=2&&Math.floor(e)%2!=this.oS%2&&this.oS--;const n=this.qt.Un;this.qt.pS&&this.vS(t,n,this.qt.lt),this.qt.gi&&this.Vm(t,n,this.qt.lt);const s=this.mS(e);(!this.qt.gi||this.oS>2*s)&&this.wS(t,n,this.qt.lt)}vS(t,e,n){if(this.qt===null)return;const{context:s,horizontalPixelRatio:r,verticalPixelRatio:o}=t;let a="",l=Math.min(Math.floor(r),Math.floor(this.qt.ml*r));l=Math.max(Math.floor(r),Math.min(l,this.oS));const c=Math.floor(.5*l);let h=null;for(let u=n.from;u<n.to;u++){const d=e[u];d.rh!==a&&(s.fillStyle=d.rh,a=d.rh);const f=Math.round(Math.min(d.i_,d.e_)*o),p=Math.round(Math.max(d.i_,d.e_)*o),v=Math.round(d.n_*o),g=Math.round(d.s_*o);let m=Math.round(r*d._t)-c;const x=m+l-1;h!==null&&(m=Math.max(h+1,m),m=Math.min(m,x));const _=x-m+1;s.fillRect(m,v,_,f-v),s.fillRect(m,p+1,_,g-p),h=x}}mS(t){let e=Math.floor(1*t);this.oS<=2*e&&(e=Math.floor(.5*(this.oS-1)));const n=Math.max(Math.floor(t),e);return this.oS<=2*n?Math.max(Math.floor(t),Math.floor(1*t)):n}Vm(t,e,n){if(this.qt===null)return;const{context:s,horizontalPixelRatio:r,verticalPixelRatio:o}=t;let a="";const l=this.mS(r);let c=null;for(let h=n.from;h<n.to;h++){const u=e[h];u.eh!==a&&(s.fillStyle=u.eh,a=u.eh);let d=Math.round(u._t*r)-Math.floor(.5*this.oS);const f=d+this.oS-1,p=Math.round(Math.min(u.i_,u.e_)*o),v=Math.round(Math.max(u.i_,u.e_)*o);if(c!==null&&(d=Math.max(c+1,d),d=Math.min(d,f)),this.qt.ml*r>2*l)lC(s,d,p,f-d+1,v-p+1,l);else{const g=f-d+1;s.fillRect(d,p,g,v-p+1)}c=f}}wS(t,e,n){if(this.qt===null)return;const{context:s,horizontalPixelRatio:r,verticalPixelRatio:o}=t;let a="";const l=this.mS(r);for(let c=n.from;c<n.to;c++){const h=e[c];let u=Math.round(Math.min(h.i_,h.e_)*o),d=Math.round(Math.max(h.i_,h.e_)*o),f=Math.round(h._t*r)-Math.floor(.5*this.oS),p=f+this.oS-1;if(h.sh!==a){const v=h.sh;s.fillStyle=v,a=v}this.qt.gi&&(f+=l,u+=l,p-=l,d-=l),u>d||s.fillRect(f,u,p-f+1,d-u+1)}}}class _I extends gI{constructor(){super(...arguments),this.Vg=new vI}Rb(t,e,n){return{...this.fS(t,e,n),...n.Sh(t)}}Ng(){const t=this.ae.N();this.Vg.ht({Un:this.kg,ml:this.le.Et().ml(),pS:t.wickVisible,gi:t.borderVisible,lt:this.Tg})}}const yI={type:"Candlestick",isBuiltIn:!0,defaultOptions:{upColor:"#26a69a",downColor:"#ef5350",wickVisible:!0,borderVisible:!0,borderColor:"#378658",borderUpColor:"#26a69a",borderDownColor:"#ef5350",wickColor:"#737375",wickUpColor:"#26a69a",wickDownColor:"#ef5350"},mb:(i,t)=>new _I(i,t)};class xI extends Pi{constructor(){super(...arguments),this.qt=null,this.MS=[]}ht(t){this.qt=t,this.MS=[]}et({context:t,horizontalPixelRatio:e,verticalPixelRatio:n}){if(this.qt===null||this.qt.ot.length===0||this.qt.lt===null)return;this.MS.length||this.gS(e);const s=Math.max(1,Math.floor(n)),r=Math.round(this.qt.bS*n)-Math.floor(s/2),o=r+s;for(let a=this.qt.lt.from;a<this.qt.lt.to;a++){const l=this.qt.ot[a],c=this.MS[a-this.qt.lt.from],h=Math.round(l.ut*n);let u,d;t.fillStyle=l.sh,h<=r?(u=h,d=o):(u=r,d=h-Math.floor(s/2)+s),t.fillRect(c.Na,u,c.bi-c.Na+1,d-u)}}gS(t){if(this.qt===null||this.qt.ot.length===0||this.qt.lt===null)return void(this.MS=[]);const e=Math.ceil(this.qt.ml*t)<=1?0:Math.max(1,Math.floor(t)),n=Math.round(this.qt.ml*t)-e;this.MS=new Array(this.qt.lt.to-this.qt.lt.from);for(let r=this.qt.lt.from;r<this.qt.lt.to;r++){const o=this.qt.ot[r],a=Math.round(o._t*t);let l,c;if(n%2){const h=(n-1)/2;l=a-h,c=a+h}else{const h=n/2;l=a-h,c=a+h-1}this.MS[r-this.qt.lt.from]={Na:l,bi:c,SS:a,ce:o._t*t,wt:o.wt}}for(let r=this.qt.lt.from+1;r<this.qt.lt.to;r++){const o=this.MS[r-this.qt.lt.from],a=this.MS[r-this.qt.lt.from-1];o.wt===a.wt+1&&o.Na-a.bi!==e+1&&(a.SS>a.ce?a.bi=o.Na-e-1:o.Na=a.bi+e+1)}let s=Math.ceil(this.qt.ml*t);for(let r=this.qt.lt.from;r<this.qt.lt.to;r++){const o=this.MS[r-this.qt.lt.from];o.bi<o.Na&&(o.bi=o.Na);const a=o.bi-o.Na+1;s=Math.min(a,s)}if(e>0&&s<4)for(let r=this.qt.lt.from;r<this.qt.lt.to;r++){const o=this.MS[r-this.qt.lt.from];o.bi-o.Na+1>s&&(o.SS>o.ce?o.bi-=1:o.Na+=1)}}}class bI extends tv{constructor(){super(...arguments),this.Vg=new xI}Bg(t,e){const n=this.ae.Ft().Nt(this.ae.N().base,ut(this.ae.Lt()).Wt);return n===null?null:Ju(this.kg,this.Tg,t,e,this.le.Et().ml(),this.ae.N().hitTestTolerance,((s,r)=>{r[0]=s.ut,r[1]=n}))}Rb(t,e,n){return{...this.Tb(t,e),...n.Sh(t)}}Ng(){const t={ot:this.kg,ml:this.le.Et().ml(),lt:this.Tg,bS:this.ae.Ft().Nt(this.ae.N().base,ut(this.ae.Lt()).Wt)};this.Vg.ht(t)}}const wI={type:"Histogram",isBuiltIn:!0,defaultOptions:{color:"#26a69a",base:0},mb:(i,t)=>new bI(i,t)};({...D0});const id=String.raw,An=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),_l=1e8,Vi="#5dff8f",MI="#f4b728",Vc="#ff5a5a",Tm="#4f9e70",xa="#0f2b1d",SI="#010603",ba=(i,t)=>{const e=parseInt(i.slice(1),16);return`rgba(${e>>16&255},${e>>8&255},${e&255},${t})`};let fo=wt.zecUsd,ev="a fixed rate in this build";function jh(i,t){const e=Math.max(Math.abs(i),Math.abs(t)),n=Math.abs(t-i)/4,s=o=>n>0?Math.max(0,Math.ceil(-Math.log10(n/o))+1):2;for(const[o,a]of[[1e9,"B"],[1e6,"M"],[1e3,"K"]])if(e>=o&&s(o)<=2){const l=Math.max(1,s(o));return c=>"$"+St(c/o,l)+a}const r=Math.min(e<1?12:6,s(1));return o=>"$"+St(o,r)}const EI=i=>{try{return He(i/_l).cap}catch{return 0}},Zh={cap:{label:"market cap",of:i=>EI(i.pool)*fo,at:jh},price:{label:"price",of:i=>i.price/_l*fo,at:jh}};let $r="cap",Im=null,Br=null;const Jh=[{key:"1m",secs:60},{key:"5m",secs:300},{key:"15m",secs:900},{key:"1h",secs:3600},{key:"4h",secs:14400},{key:"1d",secs:86400}],Rm=[15,30,60,120,300,600,900,1800,3600,7200,10800,14400,21600,28800,43200,86400,172800,259200,432e3,604800,1209600,2592e3,7776e3,15552e3,31536e3],nv=(i,t)=>{const e=Jh.find(n=>n.key===i).secs;return t?e:Math.max(1,Math.round(e/75))};function AI(i,t){const e=t?Rm:[...new Set(Rm.map(r=>Math.max(1,Math.round(r/75))))].sort((r,o)=>r-o);if(!(i>0))return e[0];let n=e[0],s=1/0;for(const r of e){const o=i/r,a=o<60?(60-o)*2:o>120?o-120:0;a<s&&(s=a,n=r)}return n}function CI(i,t){let e=Jh[0].key,n=1/0;for(const{key:s}of Jh){const r=Math.abs(i/nv(s,t)-80);r<n&&(n=r,e=s)}return e}const TI=(i,t,e)=>i==="all"?AI(t,e):nv(i,e);function II(i,t,e,n){const s=new Map;for(const h of i){const u=Math.floor(t(h)/n)*n,d=e(h),f=h.gross_zat/_l*fo;let p=s.get(u);p?(d>p.high&&(p.high=d),d<p.low&&(p.low=d),p.close=d):(p={time:u,open:d,high:d,low:d,close:d,buyUsd:0,sellUsd:0},s.set(u,p)),h.side==="buy"?p.buyUsd+=f:p.sellUsd+=f}const r=[...s.keys()].sort((h,u)=>h-u),o=r[0],a=r[r.length-1],l=Math.round((a-o)/n),c=[];for(let h=0;h<=l;h++){const u=o+h*n;c.push(s.get(u)||{time:u})}return c}function Lm(i,t){const e=Math.abs(t-i)||Math.max(Math.abs(t),1e-9),n=Math.floor(Math.log10(e/500));return Number.isFinite(n)?Math.pow(10,Math.max(-12,Math.min(2,n))):.01}function RI(i,t){if(!i)return;if(i._tapeChart){try{i._tapeChart.remove()}catch{}i._tapeChart=null}i.innerHTML=id`
    <div class="eyebrow"><span><b>GLASS</b> // TAPE_</span><span class="rule"></span><span>every trade, from the chain</span></div>
    <h2 class="q"><span class="c">&gt;</span>Price is where the pool sits on the curve.</h2>
    <p class="hintp">No feed, no exchange. Each trade spends the pool's previous output, so the chain of
    them is the whole history, and anyone replaying it from the etch derives this same series. The pool is
    GLASS against ZEC; dollars are a conversion at the rate below.</p>
    <div class="units" role="group" aria-label="What the chart measures">
      <button type="button" data-unit="cap" class="on">market cap</button>
      <button type="button" data-unit="price">price</button>
      <span class="ratenote" id="ratenote"></span>
    </div>
    <div class="units tfunits" role="group" aria-label="Candle timeframe">
      <button type="button" data-tf="1m">1m</button>
      <button type="button" data-tf="5m">5m</button>
      <button type="button" data-tf="15m">15m</button>
      <button type="button" data-tf="1h">1h</button>
      <button type="button" data-tf="4h">4h</button>
      <button type="button" data-tf="1d">1d</button>
      <button type="button" data-tf="all">ALL</button>
      <span class="ratenote" id="tfnote"></span>
    </div>
    <p class="hintp" id="exnote" style="color:var(--gold)"></p>
    <div class="chartwrap">
      <div class="chartmode" role="group" aria-label="Chart style">
        <button type="button" data-mode="candles">candles</button>
        <button type="button" data-mode="line">line</button>
      </div>
      <div id="tapechart" class="tapechart" role="img" aria-label="Market cap over time, from every trade on the chain"></div>
      <div class="tapetip" id="tapetip" hidden></div>
      <div class="tapeempty" id="tapeempty" hidden></div>
      <div class="legend">
        <span><i></i><b id="unitname">market cap · USD</b></span>
        <span><i></i>up</span><span><i class="d"></i>down</span>
        <span><i class="b"></i>buy vol</span><span><i class="sv"></i>sell vol</span>
      </div>
    </div>
    <div id="tapetable"></div>`;let e=null,n=null,s=null,r=String,o=!0;function a(){if(e)return e;const d=i.querySelector("#tapechart");return e=oI(d,{layout:{background:{type:$h.Solid,color:SI},textColor:Tm,fontFamily:'"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',fontSize:10.5,attributionLogo:!0},grid:{vertLines:{color:xa},horzLines:{color:xa}},crosshair:{mode:Vh.Normal,vertLine:{color:ba(Vi,.4),style:Yr.Dashed,labelBackgroundColor:"#04140c"},horzLine:{color:ba(Vi,.4),style:Yr.Dashed,labelBackgroundColor:"#04140c"}},rightPriceScale:{borderColor:xa},timeScale:{borderColor:xa,timeVisible:!0,secondsVisible:!1,rightOffset:3},localization:{locale:"en-GB"},handleScroll:!0,handleScale:!0,autoSize:!0}),i._tapeChart=e,e.subscribeCrosshairMove(l),e}function l(d){const f=i.querySelector("#tapetip");if(!f)return;if(!d.point||!n){f.hidden=!0;return}const p=d.seriesData.get(n);if(!p){f.hidden=!0;return}const v=o?new Date(d.time*1e3).toLocaleString("en-GB",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}):"block "+Math.round(d.time).toLocaleString("en-GB");let g=`<b>${An(v)}</b>`;if("close"in p)g+=`<br>O ${An(r(p.open))} &middot; H ${An(r(p.high))}<br>L ${An(r(p.low))} &middot; C ${An(r(p.close))}`;else if("value"in p)g+=`<br>${An(r(p.value))}`;else{f.hidden=!0;return}const m=s&&d.seriesData.get(s);m&&"value"in m&&(g+=`<br><span class="s">vol $${St(m.value,0)}</span>`),f.innerHTML=g,f.hidden=!1}function c(d,f,p){const v=i.querySelector("#tapeempty"),g=i.querySelector("#tapetip");if(a(),n&&(e.removeSeries(n),n=null),s&&(e.removeSeries(s),s=null),!d.length){g&&(g.hidden=!0),v&&(v.textContent=p||"the tape starts at the first trade",v.hidden=!1);const D=i.querySelector("#tfnote");D&&(D.textContent="");return}v&&(v.hidden=!0);const m=Zh[$r],x=d.every(D=>D.time!==null);o=x;const _=D=>x?D.time:D.height,y=d.slice().sort((D,nt)=>_(D)-_(nt)),R=_(y[y.length-1])-_(y[0]);Br===null&&(Br=CI(R,x));const A=TI(Br,R,x),T=II(y,_,m.of,A),I=T.filter(D=>D.open!==void 0).length;i.querySelectorAll(".tfunits button[data-tf]").forEach(D=>D.classList.toggle("on",D.dataset.tf===Br));const w=i.querySelector("#tfnote");w&&(w.textContent=I>=10?"":I<T.length*.6?"finer than the trading here — most candles are empty":"too few candles yet at this timeframe");const b=T.flatMap(D=>D.open!==void 0?[D.open,D.high,D.low,D.close]:[]);r=b.length?m.at(Math.min(...b),Math.max(...b)):m.at(0,0);const S=Im||(I>=5?"candles":"line");i.querySelectorAll(".chartmode button[data-mode]").forEach(D=>D.classList.toggle("on",D.dataset.mode===S)),e.applyOptions({timeScale:{timeVisible:x,secondsVisible:!1,tickMarkFormatter:x?void 0:D=>Math.round(D).toLocaleString("en-GB")}});const U={priceFormat:{type:"custom",formatter:D=>r(D),minMove:Lm(Math.min(...b),Math.max(...b))}};n=S==="candles"?e.addSeries(yI,{...U,upColor:Vi,downColor:Vc,borderVisible:!0,borderUpColor:Vi,borderDownColor:Vc,wickUpColor:Vi,wickDownColor:Vc}):e.addSeries(mI,{...U,color:Vi,lineWidth:2,pointMarkersVisible:I<=15}),n.priceScale().applyOptions({scaleMargins:{top:.06,bottom:.28}}),n.setData(S==="candles"?T.map(D=>D.open!==void 0?{time:D.time,open:D.open,high:D.high,low:D.low,close:D.close}:{time:D.time}):T.map(D=>D.open!==void 0?{time:D.time,value:D.close}:{time:D.time}));const P=T.filter(D=>D.open!==void 0).map(D=>D.buyUsd+D.sellUsd),W=jh(0,P.length?Math.max(...P):0);s=e.addSeries(wI,{priceFormat:{type:"custom",formatter:D=>W(D),minMove:Lm(0,P.length?Math.max(...P):1)},priceScaleId:"volume"}),s.priceScale().applyOptions({scaleMargins:{top:.78,bottom:0}}),s.setData(T.map(D=>D.open===void 0?{time:D.time,value:0}:{time:D.time,value:D.buyUsd+D.sellUsd,color:D.buyUsd>=D.sellUsd?ba(Vi,.55):ba(MI,.55)}));const Z=h(m,f);Z!==null&&n.createPriceLine({price:Z,color:Tm,lineWidth:1,lineStyle:Yr.Dashed,axisLabelVisible:!0,title:"now"}),e.timeScale().fitContent()}function h(d,f){const p=jn(f&&f.pool_zec),v=jn(f&&f.price_zat_per_glass);return p===null||v===null?null:d.of({pool:p,price:v})}function u(d,f,p){const v=i.querySelector("#tapetable"),g=()=>{i.querySelectorAll(".units button[data-unit]").forEach(x=>x.classList.toggle("on",x.dataset.unit===$r));const m=i.querySelector("#unitname");m&&(m.textContent=Zh[$r].label+" · USD"),c(d,f,p),d.length&&(v.innerHTML=BI(d))};i.querySelectorAll(".units button[data-unit]").forEach(m=>m.addEventListener("click",()=>{$r=m.dataset.unit,g()})),i.querySelectorAll(".tfunits button[data-tf]").forEach(m=>m.addEventListener("click",()=>{Br=m.dataset.tf,g()})),i.querySelectorAll(".chartmode button[data-mode]").forEach(m=>m.addEventListener("click",()=>{Im=m.dataset.mode,g()})),g()}LI(i,t,u)}async function LI(i,t,e){const n=i.querySelector("#tapetable");if({usd:fo,note:ev}=await P0(),PI(i),tn){const s=i.querySelector("#exnote");s&&(s.textContent="Example data. The trades are invented; every price and market cap on them is what the published curve actually produces at that pool position."),e(Dm(so.map(Pm).filter(Boolean)),Au);return}if(!t){n.innerHTML=Gc("No operator is configured, so there is no tape to read yet."),e([],null,"no operator configured");return}try{const s=await fetch(t+"/trades");if(!s.ok)throw new Error("the operator did not answer");const r=await s.json(),o=Dm((Array.isArray(r.trades)?r.trades:[]).map(Pm).filter(Boolean));if(!o.length){n.innerHTML=Gc("No trades yet. The tape starts at the first one."),e([],r.now,"the tape starts at the first trade");return}e(o,r.now)}catch(s){n.innerHTML=Gc("Could not read the tape: "+An(s.message)+". Nothing is owed either way."),e([],null,"the operator is not answering")}}const Gc=i=>id`<p class="hintp" style="padding-top:12px">${i}</p>`,jn=(i,t=0)=>{const e=Number(i);return Number.isFinite(e)&&e>=t?e:null};function Pm(i){if(!i||typeof i!="object")return null;const t=jn(i.height),e=jn(i.price_zat_per_glass),n=jn(i.gross_zat),s=jn(i.glass),r=jn(i.fee_zat),o=jn(i.pool_zec_after);if(t===null||e===null||n===null||s===null||r===null||o===null)return null;const a=jn(i.time);return{height:t,price:e,pool:o,gross_zat:n,glass:s,fee_zat:r,time:a!==null&&a>15e8?a:null,side:i.side==="buy"?"buy":i.side==="sell"?"sell":"trade"}}function Dm(i){const t=i.find(e=>e.time!==null);return t?i.map(e=>e.time!==null?e:{...e,time:t.time+(e.height-t.height)*75,estimated:!0}):i.map(e=>({...e,time:null,estimated:!0}))}function PI(i){const t=i.querySelector("#ratenote");t&&(t.textContent=`1 ZEC = $${St(fo,0)} · ${ev}`)}function DI(i,t){if(!t.length)return i.at(0,0);const e=t.map(n=>i.of(n));return i.at(Math.min(...e),Math.max(...e))}const UI=i=>i===null?"—":new Date(i*1e3).toLocaleString("en-GB",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"});function BI(i){const t=i.slice(-12).reverse(),e=Zh[$r],n=DI(e,t);return id`
    <div class="tablewrap"><table>
      <thead><tr><th>time</th><th class="n">block</th><th>side</th><th class="n">GLASS</th><th class="n">ZEC</th><th class="n">fee</th><th class="n">${An(e.label)}</th></tr></thead>
      <tbody>${t.map(s=>`<tr>
        <td>${An(UI(s.time))}${s.estimated?'<span class="s"> est</span>':""}</td>
        <td class="n">${s.height.toLocaleString("en-GB")}</td>
        <td style="color:${s.side==="buy"?"var(--grn-2)":"var(--vio-txt)"}">${An(s.side)}</td>
        <td class="n">${s.glass.toLocaleString("en-GB")}</td>
        <td class="n">${St(s.gross_zat/_l,6)}</td>
        <td class="n">${re(s.fee_zat/Math.max(1,s.gross_zat),0)}</td>
        <td class="n">${An(n(e.of(s)))}</td>
      </tr>`).join("")}</tbody>
    </table></div>`}const iv=String.raw,Re=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),wa=1e8,Ja=86400,Ma=i=>Number.isFinite(i)?i>=1e9?"$"+St(i/1e9,2)+"B":i>=1e6?"$"+St(i/1e6,2)+"M":i>=1e3?"$"+St(i/1e3,1)+"K":i>=1?"$"+St(i,2):i>0?"$"+i.toPrecision(3):"$0":"—",Wc=i=>Number.isFinite(i)?i>=1e9?St(i/1e9,i%1e9===0?0:2)+"B":i>=1e6?St(i/1e6,i%1e6===0?0:2)+"M":i>=1e4?St(i/1e3,1)+"K":i.toLocaleString("en-GB"):"—";function NI(i){if(!Number.isFinite(i)||i<0)return"—";const t=Math.floor(i/Ja),e=Math.floor(i%Ja/3600),n=Math.floor(i%3600/60);return t>=1?`${t}d ${e}h`:e>=1?`${e}h ${n}m`:`${n}m`}const FI=`
.tokhead{border:1px solid var(--line);background:var(--panel);padding:16px 18px 0}
.tokhead .top{display:flex;align-items:baseline;gap:14px;flex-wrap:wrap}
.tokhead .sym{font-size:1.45rem;letter-spacing:.04em;color:var(--grn);font-weight:600}
.tokhead .nm{font-size:var(--fs-label);letter-spacing:.2em;text-transform:uppercase;color:var(--label)}
.tokhead .id{margin-left:auto;display:flex;align-items:center;gap:8px;font-size:var(--fs-label);letter-spacing:.14em;color:var(--label)}
.tokhead .id button{font:inherit;font-size:var(--fs-label);letter-spacing:.14em;text-transform:uppercase;color:var(--label);background:transparent;border:1px solid var(--line-2);padding:3px 8px;cursor:pointer}
.tokhead .id button:hover{color:var(--grn-2);border-color:rgba(93,255,143,.35)}
.tokhead .px{display:flex;align-items:baseline;gap:14px;margin:12px 0 4px;flex-wrap:wrap}
.tokhead .px .v{font-size:2rem;line-height:1.1;color:#f2fbf5;font-variant-numeric:tabular-nums}
.tokhead .px .ch{font-size:1rem;font-variant-numeric:tabular-nums}
.tokhead .px .ch.up{color:var(--grn)} .tokhead .px .ch.dn{color:var(--warn)} .tokhead .px .ch.flat{color:var(--label)}
.tokhead .px .w{font-size:var(--fs-label);letter-spacing:.2em;text-transform:uppercase;color:var(--label)}
.tokhead .stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(112px,1fr));gap:1px;background:var(--line);margin:14px -18px 0}
.tokhead .stats div{background:var(--panel);padding:11px 18px}
.tokhead .stats .k{display:block;font-size:var(--fs-label);letter-spacing:.18em;text-transform:uppercase;color:var(--label);margin-bottom:5px}
.tokhead .stats .n{display:block;font-variant-numeric:tabular-nums;color:#dff3e6}
.tokhead .ex{color:var(--gold);font-size:var(--fs-label);letter-spacing:.14em;text-transform:uppercase;padding:9px 0 0}
`;let Um=!1;function kI(){if(Um)return;Um=!0;const i=document.createElement("style");i.textContent=FI,document.head.appendChild(i)}function OI(i,t){i&&(kI(),i.innerHTML=iv`<div class="tokhead"><div class="top"><span class="sym">—</span></div></div>`,zI(i,t).catch(e=>{console.error("[tokenhead]",e),i.innerHTML=`<div class="tokhead"><div class="top"><span class="sym">—</span></div><p class="ex">the header could not be built: ${Re(e.message)}</p></div>`}))}const hn=i=>{const t=Number(i);return Number.isFinite(t)?t:null};async function zI(i,t){const{usd:e,note:n}=await P0();let s=null,r=[];if(tn)s=Au,r=so;else if(t)try{const[S,U]=await Promise.all([fetch(t+"/state").then(P=>P.ok?P.json():null).catch(()=>null),fetch(t+"/trades").then(P=>P.ok?P.json():null).catch(()=>null)]);s=S,r=U&&Array.isArray(U.trades)?U.trades:[]}catch{}const o=s?hn(s.pool_zec):null,a=s?hn(s.height):null,l=o===null?null:(()=>{try{return He(o/wa)}catch{return null}})(),c=l?l.P*e:null,h=l?l.cap*e:null,u=o===null?null:o/wa*e,d=Math.floor(Date.now()/1e3),f=r.filter(S=>hn(S.time)!==null&&d-S.time<=Ja),p=f.reduce((S,U)=>S+(hn(U.gross_zat)||0),0)/wa*e,v=r.filter(S=>hn(S.time)!==null&&d-S.time>Ja).pop()||(f.length?f[0]:null),g=v?hn(v.pool_zec_after):null;let m=null;if(g!==null&&l)try{const S=He(g/wa).P;S>0&&(m=l.P/S-1)}catch{}const x=await HI(),_=x?hn(x.etch_height):null,y=r.find(S=>hn(S.time)!==null),R=y&&_!==null&&hn(y.height)!==null?d-y.time+(y.height-_)*75:a!==null&&_!==null?(a-_)*75:null,A=wt.pool?.rune||(tn?"3512000:1":null),T=x&&x.symbol||"◇",I=x&&x.name||(wt.pool?.rune?"—":"GLASS"),w=m===null?{cls:"flat",txt:"—"}:{cls:m>1e-4?"up":m<-1e-4?"dn":"flat",txt:(m>0?"+":"")+St(m*100,2)+"%"};i.innerHTML=iv`
    <div class="tokhead">
      <div class="top">
        <span class="sym">${Re(T)} ${Re(I)}</span>
        <span class="nm">${wt.state?.chip?Re(wt.state.chip):""}</span>
        ${A?`<span class="id"><span>${Re(A)}</span><button type="button" id="cpid">copy</button></span>`:""}
      </div>
      <div class="px">
        <span class="v">${Re(Ma(c))}</span>
        <span class="ch ${w.cls}">${Re(w.txt)}</span>
        <span class="w">24h · 1 ZEC = $${Re(St(e,0))} · ${Re(n)}</span>
      </div>
      <div class="stats">
        <div><span class="k">market cap</span><span class="n">${Re(Ma(h))}</span></div>
        <div><span class="k">liquidity</span><span class="n">${Re(Ma(u))}</span></div>
        <div><span class="k">volume 24h</span><span class="n">${Re(Ma(p))}</span></div>
        <div><span class="k">holders</span><span class="n">${Re(Wc(x?hn(x.holders):null))}</span></div>
        <div><span class="k">circulating</span><span class="n">${Re(Wc(x?hn(x.circulating):null))}</span></div>
        <div><span class="k">burned</span><span class="n">${Re(Wc(x?hn(x.burned):null))}</span></div>
        <div><span class="k">age</span><span class="n">${Re(NI(R))}</span></div>
      </div>
      ${tn?'<p class="ex">example data · the trades are invented, the prices are what the published curve produces at that pool position</p>':""}
    </div>`;const b=i.querySelector("#cpid");b&&b.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(A),b.textContent="copied",setTimeout(()=>{b.textContent="copy"},1400)}catch{b.textContent="copy failed"}})}async function HI(){if(tn)return{symbol:"◇",name:"GLASS",holders:412,circulating:1e9,burned:124e4,etch_height:3512e3};const i=wt.pool?.rune;if(!i)return null;try{const t=await fetch(`${wt.links?.indexer||"https://zrunes.io/idx/zcash-metaprotocols"}/zrunes/${encodeURIComponent(i)}`);if(!t.ok)return null;const e=await t.json();return e&&!e.error?e:null}catch{return null}}const VI=String.raw;function GI(){const i=re(Ga(600)/600,0)+" at 600 · "+re(Ga(1500)/1500,0)+" at 1,500";return qs.map(t=>{const e=isFinite(t.b)?t.b:null,n=e?re(t.z1/e,t.z1/e<.1?1:0):i;return`<tr><th>${t.n===5?"5 · tail":t.n}</th><td class="n">${re(t.share,0)}</td><td>${t.a} → ${e||"∞"} ZEC</td><td class="n">${isFinite(t.Z)?St(t.Z,1):"open"}</td><td class="n">${isFinite(t.z1)?St(t.z1,1)+" · "+re((t.t0+t.T)/ji,0):"never sells out"}</td><td class="n">${n}</td></tr>`}).join("")}function WI(){const i=[0,4,8,12,16,20],t="<tr><th>launch fee, each side</th>"+i.map(s=>{const r=ss(s);return`<td class="n">${s>=wt.fee.bondedZec?"2% / 3%":re(r,r>=.2?0:1)}</td>`}).join("")+"</tr>",e="<tr><th>fees collected so far · buys only</th>"+i.map(s=>`<td class="n">${s?"~"+St(Va(s),1):"0"}${s===20?" ZEC":""}</td>`).join("")+"</tr>",n="<tr><th>in the vault at 80%</th>"+i.map(s=>`<td class="n">${s?St(Va(s)*wt.split.vault,1):"0"}${s===20?" ZEC · two floors":""}</td>`).join("")+"</tr>";return t+e+n}const $I={render(i){i.innerHTML=VI`
<div class="thead"><span class="cmd">root@glass:~$ <b>terminal</b><span class="cur" aria-hidden="true"></span></span><span class="ct"><span class="h">height at publish</span><span class="rd">${wt.heightAtPublish.toLocaleString("en-GB")}</span><span class="h">·</span><span class="held">held</span></span></div>
<div class="body">
  <section class="sec">
    <h1 class="q big tw" style="--t:.05s;--d:.5s"><span class="c">&gt;</span>A curve coin on Zcash. Fees buy zkSNARKs.</h1>
    <p class="lead tw" style="--t:.5s">2% in, 3% out. 80% of every fee goes to a vault that buys zkSNARKs. Read the vault with a published key.</p>
    <div class="facts">
      <div><span class="ix">01</span><span class="h">Five bands. The last never runs out.</span><p>The multicurve long.xyz launches with, on Zcash. Buy steps the price up. Sell steps it down. The pool pays every sell.</p></div>
      <div><span class="ix">02</span><span class="h">Steep while it bonds.</span><p>50% at the first ZEC, halving every 4 ZEC the pool has held. Steady at 20 ZEC.</p></div>
      <div><span class="ix">03</span><span class="h">The vault is glass.</span><p>Its viewing key is published. What it holds, you read yourself.</p></div>
    </div>
  </section>

  <section class="sec" id="wallet"></section>

  <section class="sec" id="tokenhead"></section>
  <section class="sec" id="tape"></section>

  <section class="sec" id="curve">
    <div class="eyebrow"><span><b>GLASS</b> // CURVE_</span><span class="rule"></span><span>live rule · not a quote</span></div>
    <h2 class="q"><span class="c">&gt;</span>Move the pool.</h2>
    <p class="hintp">Computed from the published curve. 1 ZEC = 100,000,000 zat · USD at a fixed ${wt.zecUsd.toLocaleString("en-GB")}.</p>
    <div class="ctl">
      <div>
        <label for="zin">ZEC in the pool so far</label>
        <div class="row"><input id="zin" type="number" min="0" max="400" step="0.1" value="12" inputmode="decimal"><span class="unit">ZEC</span></div>
        <input id="zrange" type="range" min="0" max="120" step="0.1" value="12" aria-label="ZEC in the pool so far">
        <div class="presets" id="presets"><button type="button" data-z="0">launch</button><button type="button" data-z="${St(qs[2].z0,1)}">band 3 opens</button><button type="button" data-z="${wt.fee.bondedZec}">bonded</button><button type="button" data-z="${St(qs[4].z0,1)}">tail opens</button></div>
      </div>
      <div>
        <label for="buy">Your buy</label>
        <div class="row"><input id="buy" type="number" min="0.001" max="200" step="0.1" value="1" inputmode="decimal"><span class="unit">ZEC gross</span></div>
        <p class="hintp" style="margin:14px 0 0">Fee set by the pool's high-water mark and charged marginally: splitting an order changes nothing.</p>
      </div>
    </div>
    <div class="strip" aria-live="polite">
      <div><span class="k">band</span><span class="v" id="o-band">—</span><span class="s" id="o-bandr">—</span></div>
      <div><span class="k">market cap</span><span class="v" id="o-cap">—</span><span class="s" id="o-capusd">—</span></div>
      <div><span class="k">price</span><span class="v" id="o-price">—</span><span class="s">zat per GLASS</span></div>
      <div><span class="k">supply sold</span><span class="v" id="o-sold">—</span><span class="s" id="o-back">—</span></div>
      <div><span class="k">fee on this buy</span><span class="v gold" id="o-fee">—</span><span class="s" id="o-feez">—</span></div>
      <div><span class="k">GLASS out</span><span class="v" id="o-out">—</span><span class="s" id="o-avg">—</span></div>
      <div><span class="k">price after</span><span class="v" id="o-after">—</span><span class="s" id="o-impact">—</span></div>
      <div><span class="k">to the vault</span><span class="v vio" id="o-vault">—</span><span class="s" id="o-builder">—</span></div>
    </div>
    <div class="chartwrap">
      <canvas id="chart" width="860" height="240" role="img" aria-label="Market cap against ZEC in the pool, across five supply bands"></canvas>
      <div class="legend"><span><i></i>market cap · ZEC</span><span><i class="b"></i>band boundaries 1–5</span><span><i class="v"></i>bonded · 20 ZEC</span><span><i class="g"></i>your position</span></div>
    </div>
    <div class="tablewrap"><table>
      <thead><tr><th>band</th><th class="n">share</th><th>market cap</th><th class="n">ZEC in band</th><th class="n">cumulative</th><th class="n">pool ÷ cap at end</th></tr></thead>
      <tbody>${GI()}</tbody></table></div>
    <p class="hintp" style="margin-top:12px">Bands 1–2 thin: fast early. Bands 3–5 thick: 29% of cap held in ZEC at 300.</p>
  </section>

  <section class="sec" id="fees">
    <div class="eyebrow"><span><b>GLASS</b> // FEES_</span><span class="rule"></span><span>immutable · hash inscribed with the etch</span></div>
    <h2 class="q"><span class="c">&gt;</span>Steep while it bonds. Then 2 in, 3 out.</h2>
    <div class="term">
      <div class="ln"><span class="c">&gt;</span><span class="k">steady</span><span class="v">2% buy · 3% sell</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">launch</span><span class="v">50% at the first ZEC · halves every 4 ZEC the pool has ever held · both sides</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">bonded</span><span class="v">20 ZEC in the pool · steady fees from here · vault buys its first piece</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">routing</span><span class="v">80% vault · 20% builder · each leg its own output, checked by the rule</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">to_team</span><span class="v">0 allocation · 0 premine</span></div>
    </div>
    <div class="tablewrap"><table>
      <thead><tr><th>pool high-water mark</th><th class="n">0</th><th class="n">4</th><th class="n">8</th><th class="n">12</th><th class="n">16</th><th class="n">20 · bonded</th></tr></thead>
      <tbody>${WI()}</tbody></table></div>
    <p class="hintp" style="margin-top:12px">Keyed to money, and to nothing else. Only buys and sells retire the launch fee: there is no clock in it, so no change to how fast blocks arrive can quietly rewrite it.</p>
  </section>
</div>
<div class="foot">
  <a class="btn" href="#/rule">[ READ THE RULE → ]</a>
  <a class="btn vio" href="#/vault">[ THE VAULT → ]</a>
</div>`,B1(i.querySelector("#wallet")),OI(i.querySelector("#tokenhead"),gn),RI(i.querySelector("#tape"),gn);const t=p=>i.querySelector("#"+p),e=t("zin"),n=t("zrange"),s=t("buy"),r=t("presets"),o=t("chart"),a=o.getContext("2d"),l=(p,v)=>{const g=parseFloat(p.value);return isFinite(g)&&g>=0?g:v},c=120,h=400;function u(p,v){const g=Math.min(2,devicePixelRatio||1),m=o.clientWidth||860,x=240;(o.width!==Math.round(m*g)||o.height!==Math.round(x*g))&&(o.width=Math.round(m*g),o.height=Math.round(x*g)),a.setTransform(g,0,0,g,0,0),a.clearRect(0,0,m,x);const _={l:46,r:16,t:14,b:26},y=m-_.l-_.r,R=x-_.t-_.b,A=b=>_.l+y*Math.min(b,c)/c,T=b=>_.t+R*(1-Math.min(b,h)/h);a.font='400 9.5px "JetBrains Mono", ui-monospace, monospace',a.textBaseline="middle",qs.forEach((b,S)=>{const U=A(b.z0),P=isFinite(b.z1)?A(b.z1):A(c);a.fillStyle=S%2?"rgba(93,255,143,.035)":"rgba(93,255,143,.06)",a.fillRect(U,_.t,P-U,R),isFinite(b.z1)&&(a.strokeStyle="#17462d",a.beginPath(),a.moveTo(P+.5,_.t),a.lineTo(P+.5,_.t+R),a.stroke()),a.fillStyle="#4f9e70",a.textAlign="center",P-U>18&&a.fillText(String(b.n),(U+P)/2,x-_.b+12)}),a.textAlign="right",a.fillStyle="#4f9e70",[100,200,300,400].forEach(b=>{const S=T(b);a.strokeStyle="#0f2b1d",a.beginPath(),a.moveTo(_.l,S+.5),a.lineTo(m-_.r,S+.5),a.stroke(),a.fillText(String(b),_.l-8,S)}),a.textAlign="left",a.fillText("ZEC cap",_.l-40,_.t+2),a.textAlign="right",a.fillText("ZEC in pool →",m-_.r,x-_.b+12),a.setLineDash([3,4]),a.strokeStyle="#f4b728",a.beginPath(),a.moveTo(A(20)+.5,_.t),a.lineTo(A(20)+.5,_.t+R),a.stroke(),a.setLineDash([]),a.fillStyle="#a394ff",a.textAlign="left",a.fillText("bonded",A(20)+6,_.t+8),a.strokeStyle="#5dff8f",a.lineWidth=1.5,a.shadowColor="rgba(93,255,143,.55)",a.shadowBlur=8,a.beginPath();for(let b=0;b<=y;b++){const S=c*b/y,U=He(S).cap,P=_.l+b,W=T(U);b===0?a.moveTo(P,W):a.lineTo(P,W)}a.stroke(),a.shadowBlur=0,a.lineWidth=1;const I=He(p).cap,w=He(v).cap;p<=c&&(a.strokeStyle="#c7a23a",a.beginPath(),a.moveTo(A(p)+.5,T(I)),a.lineTo(A(p)+.5,_.t+R),a.stroke(),a.fillStyle="#c7a23a",a.fillRect(A(p)-3,T(I)-3,6,6),v<=c&&v>p&&(a.fillStyle="#f2fbf5",a.fillRect(A(v)-2,T(w)-2,4,4)),a.fillStyle="#c7a23a",a.textAlign=p>c*.7?"right":"left",a.fillText(St(p,p<10?1:0)+" ZEC · cap "+St(I,I<100?1:0),A(p)+(p>c*.7?-8:8),Math.max(_.t+20,T(I)-12)))}function d(){const p=l(e,0),v=Math.max(0,l(s,0)),g=He(p),m=Eu(p,p,v),x=v-m,_=v>0?x/v:ss(p),y=Su(p,m),R=He(y.z);t("o-band").textContent=g.band.n===5?"5 · tail":String(g.band.n),t("o-bandr").textContent=g.band.a+" → "+(isFinite(g.band.b)?g.band.b:"∞")+" ZEC cap",t("o-cap").textContent=St(g.cap,g.cap<100?1:0)+" ZEC",t("o-capusd").textContent="≈ "+SS(g.cap)+" USD",t("o-price").textContent=kf(g.P),t("o-sold").textContent=re(g.sold/ji,1),t("o-back").textContent="pool ÷ cap "+(g.cap>0?re(p/g.cap,0):"—"),t("o-fee").textContent=re(_,_>=.2?0:1),t("o-feez").textContent=St(x,4)+" ZEC · "+(_>wt.fee.sell?"launch schedule":"steady"),t("o-out").textContent=y.tokens>=1e6?St(y.tokens/1e6,2)+"M":St(y.tokens,0),t("o-avg").textContent=y.tokens>0?"avg "+St(v/y.tokens*Ag,2)+" zat incl. fee":"—",t("o-after").textContent=kf(R.P)+" zat",t("o-impact").textContent=g.P>0?"+"+re(R.P/g.P-1,1)+" · cap "+St(R.cap,R.cap<100?1:0)+" ZEC":"—",t("o-vault").textContent=St(x*wt.split.vault,4)+" ZEC",t("o-builder").textContent="builder "+St(x*wt.split.builder,4)+" ZEC",[...r.children].forEach(A=>A.setAttribute("aria-pressed",String(Math.abs(parseFloat(A.dataset.z)-p)<.051))),u(p,y.z)}e.addEventListener("input",()=>{n.value=Math.min(120,l(e,0)),d()}),n.addEventListener("input",()=>{e.value=n.value,d()}),s.addEventListener("input",d),r.addEventListener("click",p=>{const v=p.target.closest("button");v&&(e.value=v.dataset.z,n.value=Math.min(120,parseFloat(v.dataset.z)),d())});let f;addEventListener("resize",()=>{clearTimeout(f),f=setTimeout(d,80)}),document.fonts?.ready&&document.fonts.ready.then(d),this._render=d,d()},enter(){this._render?.()}},QI="./data/vault.json",Sa={pieces:[],ledger:[],feesReceived:0,builderPaid:0,zecLiquid:0,deployed:0,realised:0,held:0,hwm:0,poolZec:0,glassRetired:0,viewingKey:null,updated:null};let Gi=null;async function qI(){if(Gi)return Gi;if(tn){const i=io.pieces;return Gi={...Sa,...io,example:!0,pieces:i,deployed:+i.reduce((t,e)=>t+e.cost,0).toFixed(4),realised:+i.filter(t=>t.state==="sold").reduce((t,e)=>t+(e.sold-e.cost),0).toFixed(4),held:i.filter(t=>t.state!=="sold").length},Gi}try{const i=await fetch(QI,{cache:"no-cache"});Gi=i.ok?{...Sa,...await i.json()}:{...Sa}}catch{Gi={...Sa}}return Gi}const tu=i=>i.pieces.filter(t=>t.state!=="sold"),KI=i=>i.pieces.filter(t=>t.state==="sold"),tl=i=>String(i).padStart(4,"0"),hr=String.raw,YI=wt.gates.find(i=>i.id==="gate1"),el=i=>i.toLocaleString("en-GB"),Le=(i,t,e="")=>hr`<div class="ln"><span class="c">&gt;</span><span class="k">${i}</span><span class="v ${e}">${t}</span></div>`;function XI(i){if(!i.pieces.length)return[Le("fees_generated",`${St(i.feesReceived/wt.split.vault,4)} ZEC · ${i.feesReceived?`${St(i.feesReceived,4)} to the vault at 80%`:"pre-launch"}`),Le("deployed",`${St(i.deployed,2)} ZEC · 0 pieces`),Le("available",`${St(i.zecLiquid,4)} ZEC · ready to deploy`),hr`<div class="ln" id="mkt"><span class="c">&gt;</span><span class="k">floor</span><span class="v dimv">zilkroad · loading</span></div>`,Le("viewing_key",i.viewingKey?`<span style="word-break:break-all">${i.viewingKey}</span>`:"published at launch","gold"),Le("first_purchase",`${wt.vault.firstPurchase} · about two floors in the vault by then`)].join("");const t=tu(i),e=KI(i),n=[Le("fees_generated",`${St(i.feesReceived/wt.split.vault,4)} ZEC · since etch · ${St(i.feesReceived,4)} to the vault at 80%`),Le("deployed",`${St(i.deployed,2)} ZEC · ${i.pieces.length} piece${i.pieces.length===1?"":"s"} at cost`),Le("available",`${St(i.zecLiquid,4)} ZEC · ready to deploy`),Le("pieces_held",`${t.length}${t.length?" · "+t.map(s=>"#"+tl(s.n)).join(" · "):""}`),hr`<div class="ln" id="mkt"><span class="c">&gt;</span><span class="k">floor</span><span class="v dimv">zilkroad · loading</span></div>`];return e.length&&n.push(Le("sold",`${e.length} · ${e.map(s=>`#${tl(s.n)} at ${St(s.sold,2)} ZEC`).join(" · ")}${i.realised?` · realised ${St(i.realised,2)} ZEC`:""}`)),i.glassRetired&&n.push(Le("glass_retired",`${i.glassRetired.toLocaleString("en-GB")} GLASS · ${St(i.glassRetired/wt.supply*100,3)}% of supply`)),i.viewingKey&&n.push(Le("viewing_key",`<span style="word-break:break-all">${i.viewingKey}</span>`,"dimv")),i.hwm&&n.push(Le("high_water_mark",`${St(i.hwm,1)} ZEC${i.hwm>=wt.fee.bondedZec?` · ${Qe.bonded} · steady fees`:""}`)),n.join("")}function jI(i){const t=i.state==="sold"?`<span class="chip vio"><i></i>sold · ${St(i.sold,2)} ZEC · block ${el(i.soldAt)}</span>`:i.state==="listed"?`<span class="chip ok"><i></i>listed · ask ${St(i.ask,2)} ZEC</span>`:'<span class="chip queued"><i></i>held</span>';return hr`<div class="nm">zkSNARK #${tl(i.n)}</div>
    <div class="ct">acquired block ${el(i.acquired)} · cost ${St(i.cost,2)} ZEC${i.state==="sold"?` · profit ${St(i.sold-i.cost,2)} ZEC${i.retired?` · half retired ${i.retired.toLocaleString("en-GB")} GLASS`:""}`:""}</div>
    <div class="st">${t}</div>`}function ZI(i){return i.ledger?.length?hr`
  <section class="sec">
    <div class="eyebrow"><span><b>GLASS</b> // LEDGER_</span><span class="rule"></span><span>every action, with its block</span></div>
    <h2 class="q"><span class="c">&gt;</span>What the vault did, in the order the chain saw it.</h2>
    <div class="tablewrap"><table>
      <thead><tr><th class="n">block</th><th>action</th><th class="n">ZEC</th><th>proof</th></tr></thead>
      <tbody>${i.ledger.map(t=>`<tr><td class="n">${el(t.h)}</td><td>${t.what}</td><td class="n" style="color:${t.zec>0?"var(--grn-2)":t.zec<0?"var(--ask-2)":"var(--label)"}">${t.zec===0?"—":(t.zec>0?"+":"")+St(t.zec,2)}</td><td><span class="txlink">block ${el(t.h)}${i.example?" · example":""}</span></td></tr>`).join("")}</tbody>
    </table></div>
  </section>`:""}const JI={render(i){i.innerHTML=hr`
<div class="thead"><span class="cmd">root@glass:~$ <b>vault</b><span class="cur" aria-hidden="true"></span></span><span class="ct" id="vhead">${tn?'<span class="chip warn"><i></i>example data</span>':`<span class="h">viewing key</span><span class="rd gold">${Qe.tba}</span>`}</span></div>
<div class="body">
  <section class="sec">
    <div class="eyebrow"><span><b>GLASS</b> // VAULT_</span><span class="rule"></span><span>read it yourself</span></div>
    <h2 class="q big tw" id="vlede" style="--d:.5s"><span class="c">&gt;</span>The vault is empty. Watch it fill.</h2>
    ${tn?'<p class="hintp" style="color:var(--gold)">Example state for design review. The blocks, amounts and piece numbers are illustrative. The art is real — zkSNARKs’ public luminary plates — used here to preview only; it is theirs, not ours.</p>':""}
    <div id="pgrid" class="pgrid" aria-label="every piece the vault has held"></div><div id="plates" class="plates"></div>
    <div class="term" id="vreadout"></div>
    <div class="term" style="margin-top:0">
      ${Le("buys","fee income only · never the pool · ≤ 1.1 × lowest ask","ask")}
      ${Le("sells",`≥ 1.2 × cost · half the profit ${Qe.retire} GLASS`,"ask")}
      ${Le("delay","policy and weekly budget · 1 week on chain")}
    </div>
    <div id="vgate">${tn?"":`<div class="rgres pending"><span class="dot"></span><div><p class="t">${YI.name} · a stranger reads the vault through its key</p></div></div>`}</div>
  </section>
  <div id="vledger"></div>

  <section class="sec">
    <div class="eyebrow"><span><b>GLASS</b> // TRUST_MODEL_</span><span class="rule"></span><span>every sentence, who enforces it</span></div>
    <h2 class="q"><span class="c">&gt;</span>Who enforces what.</h2>
    <div class="tablewrap"><table>
      <thead><tr><th>what</th><th>enforced by</th></tr></thead>
      <tbody>
        <tr><th>the price of every trade · fees · burns</th><td><span class="tier r">published rule</span> · two indexers</td></tr>
        <tr><th>pool and vault keys</th><td><span class="tier c">consensus</span></td></tr>
        <tr><th>policy changes wait a week</th><td><span class="tier c">consensus</span> · CLTV</td></tr>
        <tr><th>what the vault holds</th><td><span class="tier c">consensus</span> · published viewing key</td></tr>
        <tr><th>answering quotes · never above the curve</th><td><span class="tier s">operator</span> · public every block</td></tr>
        <tr><th>which pieces are listed, and when</th><td><span class="tier s">operator</span> · never below the rule's floor</td></tr>
      </tbody></table></div>
  </section>
</div>
<div class="foot">
  <a class="btn" href="#/rule">[ READ THE RULE → ]</a>
  ${tn?'<a class="btn vio" href="./#/vault">[ LEAVE PREVIEW ]</a>':`<button class="btn vio" type="button" disabled title="${Qe.tba}">[ WATCH THE VAULT ]</button>`}
</div>`,qI().then(t=>{i.querySelector("#vreadout").innerHTML=XI(t);const e=i.querySelector("#vlede");t.pieces.length&&(e.innerHTML=`<span class="c">&gt;</span>The vault holds ${tu(t).length}. Read ${tu(t).length===1?"it":"them"} yourself.`),i.querySelector("#vledger").innerHTML=ZI(t),t.pieces.length&&t2(i,t),L0().then(n=>{const s=i.querySelector("#mkt .v");s&&n&&(s.className="v",s.innerHTML=W1(n))}).catch(()=>{})})}};function t2(i,t){const e=IS(i.querySelector("#plates"),t.pieces,jI),n=i.querySelector("#pgrid");t.pieces.forEach((s,r)=>{const o=document.createElement("button");o.type="button",o.setAttribute("aria-current",r===0?"true":"false");const a=document.createElement("canvas");Cu(a,s.n,{art:s.art||null}),o.appendChild(a),o.insertAdjacentHTML("beforeend",`<span class="pn">#${tl(s.n)}</span><span class="ps ${s.state}">${s.state==="sold"?"sold · "+St(s.sold,2)+" ZEC":s.state==="listed"?"listed · "+St(s.ask,2):"held"}</span>`),o.addEventListener("click",()=>{e.set(r),n.querySelectorAll("button").forEach((l,c)=>l.setAttribute("aria-current",String(c===r))),i.querySelector("#plates").scrollIntoView({behavior:"smooth",block:"center"})}),n.appendChild(o)})}const e2=String.raw,n2=/^[0-9a-f]{64}$/,i2="./data/delivery-set.json",ks=i=>i.toLocaleString("en-GB"),s2=i=>i.slice(0,12)+"…"+i.slice(-12),Gs=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),ze=(i,t,e="")=>`<div class="ln"><span class="c">&gt;</span><span class="k">${i}</span><span class="v${e?" "+e:""}">${t}</span></div>`;function r2(i){const t=new Date(i),e=n=>String(n).padStart(2,"0");return`${t.getUTCFullYear()}-${e(t.getUTCMonth()+1)}-${e(t.getUTCDate())} ${e(t.getUTCHours())}:${e(t.getUTCMinutes())} UTC`}function o2(i){let t=i.trim().toLowerCase();return t.startsWith("0x")&&(t=t.slice(2)),t}function a2(i){const t=[...i.txs].sort((s,r)=>s.height-r.height||s.txid.localeCompare(r.txid));t.forEach((s,r)=>{s.k=r+1});const e=new Map,n=new Map;for(const s of t)e.set(s.txid.toLowerCase(),s),s.cm.forEach((r,o)=>n.set(r.toLowerCase(),{tx:s,i:o+1}));return{data:i,txs:t,txIndex:e,cmIndex:n}}function $c(){return'<div class="rgres pending"><span class="dot"></span><div><p class="t">reading the batch · 30 transactions</p></div></div>'}function l2(){return'<div class="rgres none"><span class="dot"></span><div><p class="err">! BATCH FILE UNREACHABLE — TRY AGAIN</p></div></div>'}function Bm(i,t){const e=t.tx,n=[ze("txid",Gs(e.txid)),ze("block",ks(e.height)),ze("position",`transaction ${e.k} of ${i.txs.length} in the batch`),ze("notes",`${e.notes} notes in this transaction`)];return t.i&&n.push(ze("note_index",`note ${t.i} of ${e.notes} in this transaction`)),`<div class="rgres accepted"><span class="dot"></span><div>
    <p class="t">In the delivery batch.</p>
    <div class="term">${n.join("")}</div>
    <a class="btn small gview" href="https://blockchair.com/zcash/transaction/${Gs(e.txid)}" target="_blank" rel="noopener">[ VIEW ON BLOCKCHAIR → ]</a>
  </div></div>`}function c2(){return`<div class="rgres none"><span class="dot"></span><div>
    <p class="t">Not in the batch.</p>
    <p>This is not one of the 30 delivery transactions, and not one of their 1,530 notes. A zkSNARK moved after delivery lives in a later transaction; only the original delivery is in this set.</p>
  </div></div>`}const h2={render(i){i.innerHTML=e2`
<div class="thead"><span class="cmd">root@glass:~$ <b>genesis</b><span class="cur" aria-hidden="true"></span></span><span class="ct"><span class="h">batch</span><span class="rd" id="hcount">reading…</span></span></div>
<div class="body">
  <section class="sec">
    <div class="eyebrow"><span><b>GLASS</b> // GENESIS_</span><span class="rule"></span><span>runs in your browser</span></div>
    <h2 class="q big tw" style="--d:.5s"><span class="c">&gt;</span>Prove your zkSNARK was in the delivery batch.</h2>
    <p class="lead">Paste the delivery transaction id your wallet shows. The check runs in your browser.</p>
    <div class="field genfield">
      <label for="gq">transaction id, or a note commitment</label>
      <div class="genrow">
        <input id="gq" type="text" placeholder="transaction id, or a note commitment · 64 hex characters" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off">
        <button class="btn" type="button" id="gcheck">[ CHECK ]</button>
        <button class="btn small" type="button" id="gclear">[ CLEAR ]</button>
      </div>
    </div>
    <p class="err" id="gerr" hidden>! NOT A 64-CHARACTER HEX STRING</p>
    <div id="gresult" aria-live="polite"></div>
  </section>

  <section class="sec">
    <div class="eyebrow"><span><b>GLASS</b> // THE_BATCH_</span><span class="rule"></span><span>heights over clocks</span></div>
    <div class="term" id="gbatchterm">${ze("derived_from","reading…")}</div>
    <div class="tablewrap"><table id="gtable">
      <thead><tr><th>#</th><th class="n">block</th><th class="n">notes</th><th>txid</th></tr></thead>
      <tbody><tr><td colspan="4">reading the batch · 30 transactions</td></tr></tbody>
    </table></div>
  </section>

  <section class="sec">
    <div class="eyebrow"><span><b>GLASS</b> // WHAT_THIS_PROVES_</span><span class="rule"></span></div>
    <div class="term">
      ${ze("proves","that a transaction or note is one of the 1,530 Zilkroad delivered on 17 Sep 2026 — on chain, re-derivable by anyone with a lightwalletd.","ask")}
      ${ze("does_not_prove","who holds it now — ownership lives in the registry, not on the chain.","ask")}
    </div>
  </section>
</div>
<div class="foot">
  <a class="btn" href="#/terminal">[ OPEN THE TERMINAL → ]</a>
  <a class="btn vio" href="#/how">[ HOW IT WORKS → ]</a>
</div>`;const t=_=>i.querySelector("#"+_),e=t("gq"),n=t("gerr"),s=t("gresult"),r=t("hcount"),o=t("gbatchterm"),a=t("gtable");let l=null,c="loading",h=null;function u(_){n.hidden=!_}function d(_){s.innerHTML=_}function f(){a.querySelector("tbody").innerHTML=l.txs.map(_=>`<tr data-txid="${Gs(_.txid)}"><td class="n">${_.k}</td><td class="n">${ks(_.height)}</td><td class="n">${_.notes}</td><td class="txid" title="${Gs(_.txid)}">${Gs(s2(_.txid))}</td></tr>`).join(""),a.querySelector("tbody").addEventListener("click",_=>{const y=_.target.closest("tr[data-txid]");y&&(e.value=y.dataset.txid,x())})}function p(_){o.innerHTML=[ze("derived_from",`lightwalletd · ${Gs(_.server)}`),ze("rule",`Ironwood · &ge; ${_.rule.minOutputs} outputs per transaction`),ze("window",`blocks ${ks(_.heights.from)}–${ks(_.heights.to)}`),ze("false_positives","0 over 1,116 baseline transactions"),ze("transactions",String(_.txCount)),ze("notes",ks(_.noteCount)),ze("derived_at",r2(_.derivedAt))].join("")}function v(_){a.querySelectorAll("tbody tr").forEach(y=>y.classList.toggle("hit",y.dataset.txid===_))}async function g(){c="loading";try{const _=await fetch(i2);if(!_.ok)throw new Error("bad status "+_.status);const y=await _.json();if(l=a2(y),c="ready",r.textContent=`${y.txCount} tx · ${ks(y.noteCount)} notes`,p(y),f(),h){const R=h;h=null,m(R)}else d("")}catch{c="error",r.textContent="unavailable",a.querySelector("tbody").innerHTML='<tr><td colspan="4" class="err">! BATCH FILE UNREACHABLE — TRY AGAIN</td></tr>',d(l2()),h=null}}function m(_){const y=l.txIndex.get(_);if(y){d(Bm(l,{tx:y})),v(y.txid);return}const R=l.cmIndex.get(_);if(R){d(Bm(l,R)),v(R.tx.txid);return}d(c2()),v(null)}function x(){const _=o2(e.value);if(!n2.test(_)){u(!0),d(""),v(null);return}if(u(!1),c==="ready"){m(_);return}if(c==="error"){h=_,d($c()),g();return}h=_,d($c())}t("gcheck").addEventListener("click",x),e.addEventListener("keydown",_=>{_.key==="Enter"&&x()}),t("gclear").addEventListener("click",()=>{e.value="",u(!1),d(""),v(null),e.focus()}),d($c()),g(),e.focus()}},u2=String.raw;function d2(){const i=re(Ga(600)/600,0)+" at 600 · "+re(Ga(1500)/1500,0)+" at 1,500";return qs.map(t=>{const e=isFinite(t.b)?t.b:null,n=e?re(t.z1/e,t.z1/e<.1?1:0):i;return`<tr><th>${t.n===5?"5 · tail":t.n}</th><td class="n">${re(t.share,0)}</td><td>${t.a} → ${e||"∞"} ZEC</td><td class="n">${isFinite(t.Z)?St(t.Z,1):"open"}</td><td class="n">${isFinite(t.z1)?St(t.z1,1)+" · "+re((t.t0+t.T)/ji,0):"never sells out"}</td><td class="n">${n}</td></tr>`}).join("")}const Ba=(()=>{const i=[];for(let t=0;t<=wt.fee.bondedZec;t+=wt.fee.halvingZec)i.push(t);return i})();function f2(){return Ba.map(i=>`<th class="n">${i}${i===wt.fee.bondedZec?" · bonded":""}</th>`).join("")}function p2(){const i="<tr><th>launch fee, each side</th>"+Ba.map(n=>`<td class="n">${n>=wt.fee.bondedZec?`${re(wt.fee.buy,0)} / ${re(wt.fee.sell,0)}`:re(ss(n),ss(n)>=.2?0:1)}</td>`).join("")+"</tr>",t="<tr><th>fees collected so far · buys only</th>"+Ba.map(n=>`<td class="n">${n?"~"+St(Va(n),1):"0"}${n===wt.fee.bondedZec?" ZEC":""}</td>`).join("")+"</tr>",e="<tr><th>in the vault at ${vaultShare}%</th>"+Ba.map(n=>`<td class="n">${n?St(Va(n)*wt.split.vault,1):"0"}${n===wt.fee.bondedZec?" ZEC · two floors":""}</td>`).join("")+"</tr>";return i+t+e.replace("${vaultShare}",String(Math.round(wt.split.vault*100)))}const m2=i=>i.state==="passed"?'<span class="chip ok"><i></i>passed</span>':i.state==="pending"?`<span class="chip pending"><i></i>${i.chip}</span>`:`<span class="chip queued"><i></i>${i.chip}</span>`;function g2(){return`<div class="gates">${wt.gates.map(i=>`<div><span class="g">${i.name}<b>${i.sub}</b></span><span class="d">${i.text.replace(/(\d{1,3}(?:,\d{3})+)/g,'<span class="h">$1</span>').replace(/(MIN_OUT|marketEnabled:false)/g,'<span class="h">$1</span>')}</span>${m2(i)}</div>`).join("")}</div>`}const v2={render(i){i.innerHTML=u2`
<div class="thead"><span class="cmd">root@glass:~$ <b>cat rule.asc</b><span class="cur" aria-hidden="true"></span></span><span class="ct"><span class="h">spec hash</span><span class="rd gold">${Qe.tba}</span></span></div>
<div class="body">
  <p class="hintp rule-decrypt">decrypting…</p>
  <div class="rule-content">

  <section class="sec">
    <div class="eyebrow"><span><b>GLASS</b> // PARAMETERS_</span><span class="rule"></span><span>fixed at etch</span></div>
    <h2 class="q"><span class="c">&gt;</span>Everything that cannot change once it is etched.</h2>
    <div class="term">
      <div class="ln"><span class="c">&gt;</span><span class="k">name</span><span class="v ask">${Qe.name} · ${Qe.ticker}</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">supply</span><span class="v">${wt.supply.toLocaleString("en-GB")} · divisibility 0 · allocation 0</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">builder</span><span class="v">${re(wt.split.builder,0)} of fees · one address · immutable</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">curve</span><span class="v">${wt.bands.length} bands · launch cap ${wt.bands[0].a} ZEC · no graduation · the Doppler multicurve long.xyz uses</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">settlement</span><span class="v">one transaction per trade · trades chain through the pool's head · 3 confirmations</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">carrier</span><span class="v dimv">ZRunes v1 rules + <code>BUY</code> · <code>SELL</code> · <code>FEE</code> · <code>REFUND</code> · <code>ROTATE</code> tags inside the runestone</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">delivered_to</span><span class="v dimv">output 1 of your trade · a real ZRunes edict, visible to every ZRunes indexer</span></div>
    </div>
  </section>

  <section class="sec">
    <div class="eyebrow"><span><b>GLASS</b> // CURVE_</span><span class="rule"></span><span>five bands, computed live</span></div>
    <h2 class="q"><span class="c">&gt;</span>Buy steps it up. Sell walks the same steps back down.</h2>
    <div class="tablewrap"><table>
      <thead><tr><th>band</th><th class="n">share</th><th>market cap, start → end</th><th class="n">ZEC in band</th><th class="n">cumulative · sold</th><th class="n">pool ÷ cap at end</th></tr></thead>
      <tbody>${d2()}</tbody>
    </table></div>
  </section>

  <section class="sec">
    <div class="eyebrow"><span><b>GLASS</b> // FEES_</span><span class="rule"></span><span>immutable · hash inscribed with the etch</span></div>
    <h2 class="q"><span class="c">&gt;</span>Steep while it bonds. Then steady, forever.</h2>
    <div class="term">
      <div class="ln"><span class="c">&gt;</span><span class="k">steady</span><span class="v">${re(wt.fee.buy,0)} buy · ${re(wt.fee.sell,0)} sell · forever</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">launch</span><span class="v">${re(wt.fee.launchStart,0)} at the first ZEC · halves every ${wt.fee.halvingZec} ZEC the pool has ever held · both sides</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">bonded</span><span class="v">${wt.fee.bondedZec} ZEC in the pool · steady fees from here · vault buys its first piece</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">no_clock</span><span class="v dimv">nothing about the fee is timed: only buys and sells retire it</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">routing</span><span class="v">${re(wt.split.vault,0)} vault · ${re(wt.split.builder,0)} builder · each leg its own output, checked by the rule</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">to_team</span><span class="v">0 allocation · 0 premine</span></div>
    </div>
    <div class="tablewrap"><table>
      <thead><tr><th>pool high-water mark</th>${f2()}</tr></thead>
      <tbody>${p2()}</tbody>
    </table></div>
  </section>

  <section class="sec">
    <div class="eyebrow"><span><b>GLASS</b> // SETTLEMENT_</span><span class="rule"></span><span>what happens to every transaction</span></div>
    <h2 class="q"><span class="c">&gt;</span>Every trade is one transaction. The operator signs the pool's side; the rule bounds it.</h2>
    <div class="term">
      <div class="ln"><span class="c">&gt;</span><span class="k">buy</span><span class="v ask">You sign your ZEC in. The operator signs the pool's GLASS out. One transaction, mined or void. What you see before you sign is what you get.</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">sell</span><span class="v ask">You sign your GLASS in. The operator signs the pool's ZEC out. Same transaction. Never an IOU.</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">order</span><span class="v ask">Trades chain through the pool's head UTXO. A head is spent once, so a miner can neither reorder nor sandwich a trade.</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">confirmations</span><span class="v">state published at 3 confirmations · the chain of heads is followed to the tip</span></div>
    </div>
    <div class="tablewrap"><table>
      <thead><tr><th>what arrived</th><th>what the rule says</th><th>who acts</th></tr></thead>
      <tbody>
        <tr><th>A quote the operator does not answer</th><td>No trade. Nobody is owed anything. Liveness, never solvency.</td><td>the operator</td></tr>
        <tr><th>ZEC or GLASS sent to the pool address directly</th><td>A stray, never a trade. Returned by policy, less 5,000 zat.</td><td>daemon, by policy</td></tr>
        <tr><th>A trade that hands out more than the curve</th><td>A breach. Not applied. The open-source watcher flags it the block it's mined.</td><td>anyone running the watcher</td></tr>
        <tr><th>Any pool spend that isn't a trade, fee leg, refund, sweep or rotation</th><td>A breach. Flagged the same way.</td><td>anyone running the watcher</td></tr>
      </tbody>
    </table></div>
    <p class="hintp">Fees stay in the pool's head until a fee-leg transaction pays them out, at least every 1,000 blocks. The pool never pays a trade's network fee. Minimum sell 0.001 ZEC.</p>
  </section>

  <section class="sec">
    <div class="eyebrow"><span><b>GLASS</b> // VAULT_POLICY_</span><span class="rule"></span><span>how it buys, how it asks</span></div>
    <h2 class="q"><span class="c">&gt;</span>Never from the pool. Never above the ask.</h2>
    <div class="term">
      <div class="ln"><span class="c">&gt;</span><span class="k">sources</span><span class="v">fee income and retained profit only · never the pool</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">buy_ceiling</span><span class="v">never more than 1.1 × the lowest live ask at the time of purchase</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">ask</span><span class="v">the larger of 1.2 × cost and 1.1 × floor</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">ratchet</span><span class="v">ask moves up only · unsold pieces held, never marked down below 1.2 × cost</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">on_a_fill</span><span class="v">half the profit ${Qe.retire} GLASS on the curve · half is kept for the next piece</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">published</span><span class="v">fills-per-listing, from day one · a resale rate of zero is visible, not silent</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">floor</span><span class="v dimv">trailing median of Zilkroad fills over a minimum count · never the last fill, never a listing</span></div>
    </div>
  </section>

  <section class="sec">
    <div class="eyebrow"><span><b>GLASS</b> // DELAYED_</span><span class="rule"></span><span>policy waits. a note does not.</span></div>
    <h2 class="q"><span class="c">&gt;</span>A week protects the policy. Nothing protects a single key.</h2>
    <div class="term">
      <div class="ln"><span class="c">&gt;</span><span class="k">delayed_by_chain</span><span class="v">vault policy and each week's spending budget · one week · CLTV</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">not_delayed</span><span class="v">individual buys, listings and buybacks inside that budget</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">cannot_be_delayed</span><span class="v warn">a zkSNARK leaving the shielded account · single key · visible via the key</span></div>
    </div>
  </section>

  <section class="sec">
    <div class="eyebrow"><span><b>GLASS</b> // KEYS_</span><span class="rule"></span><span>who can move what</span></div>
    <h2 class="q"><span class="c">&gt;</span>Lose one device. Freeze nothing but the float.</h2>
    <div class="term">
      <div class="ln"><span class="c">&gt;</span><span class="k">pool</span><span class="v">hot float under two bot keys, independent hosts · the rest under a script that also needs the cold key</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">vault_zec</span><span class="v">2-of-3 across the builder's own devices, separate places</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">vault_nfts</span><span class="v">one Ironwood spending key · one dedicated device · seed backed up</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">recovery</span><span class="v dimv">branch height H years out, disclosed · after H the cold key alone can spend</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">rotation</span><span class="v dimv">a signed pool-address rotation rule in the spec · rollover is not a fork</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">mis_payouts</span><span class="v">made good from the builder's ${re(wt.split.builder,0)} · before any further builder income</span></div>
    </div>
  </section>

  <section class="sec">
    <div class="eyebrow"><span><b>GLASS</b> // TRUST_</span><span class="rule"></span><span>every sentence, who enforces it</span></div>
    <h2 class="q"><span class="c">&gt;</span>Nobody, for what the vault holds. One operator, for what it does.</h2>
    <div class="tablewrap"><table>
      <thead><tr><th>mechanism</th><th>enforced by</th><th>who is trusted, for what</th></tr></thead>
      <tbody>
        <tr><th>the price of every trade · fees owed · burns</th><td><span class="tier r">published rule</span></td><td>whoever runs the indexer · two implementations must agree before launch</td></tr>
        <tr><th>pool and vault ZEC spendable only by the published keys</th><td><span class="tier c">consensus</span></td><td>nobody</td></tr>
        <tr><th>vault policy and weekly budget wait a week</th><td><span class="tier c">consensus</span></td><td>nobody · CLTV, both branches tested with mainnet dust</td></tr>
        <tr><th>what the vault holds and when it spends</th><td><span class="tier c">consensus</span></td><td>nobody · published viewing key</td></tr>
        <tr><th>answering quotes · fee legs · refunds</th><td><span class="tier s">signer-honoured</span></td><td>the operator · never above the curve · public · detectable within a block</td></tr>
        <tr><th>a zkSNARK leaving the vault</th><td><span class="tier s">signer-honoured</span></td><td>the operator · single key · visible via the key · <b>not delayed</b></td></tr>
        <tr><th>the floor figure</th><td><span class="tier t">third party</span></td><td>Zilkroad's market data</td></tr>
      </tbody>
    </table></div>
  </section>

  <section class="sec">
    <div class="eyebrow"><span><b>GLASS</b> // GATES_</span><span class="rule"></span><span>heights over clocks</span></div>
    <h2 class="q"><span class="c">&gt;</span>Nothing is for sale. Nothing to claim.</h2>
    ${g2()}
  </section>

  </div>
</div>
<div class="foot">
  <a class="btn" href="#/terminal">[ OPEN THE TERMINAL → ]</a>
  <a class="btn vio" href="${wt.links.brief}" target="_blank" rel="noopener">[ THE FULL BRIEF → ]</a>
</div>`}},_2=String.raw,y2=i=>i.state==="passed"?'<span class="chip ok"><i></i>passed</span>':i.state==="pending"?`<span class="chip pending"><i></i>${i.chip}</span>`:`<span class="chip queued"><i></i>${i.chip}</span>`,x2={render(i){i.innerHTML=_2`
<div class="thead"><span class="cmd">root@glass:~$ <b>how</b><span class="cur" aria-hidden="true"></span></span><span class="ct"><span class="h">state</span><span class="rd">${wt.state.chip}</span></span></div>
<div class="body">
  <section class="sec">
    <div class="eyebrow"><span><b>GLASS</b> // HOW_IT_WORKS_</span><span class="rule"></span><span>six lines</span></div>
    <h2 class="q big tw" style="--d:.5s"><span class="c">&gt;</span>Buy on the curve. Fees buy zkSNARKs.</h2>
    <div class="term">
      <div class="ln"><span class="c">&gt;</span><span class="k">buy</span><span class="v ask">ZEC in, GLASS out, one transaction. You see the exact fill before you sign.</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">sell</span><span class="v ask">GLASS in, ZEC out at the curve price less 3%.</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">fee</span><span class="v ask">2% in · 3% out · 50% at the first ZEC, halving every 4 ZEC · steady at 20 ZEC.</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">vault</span><span class="v ask">80% of fees. Buys zkSNARKs. Half of each profit ${Qe.retire} GLASS. Read it with the published key.</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">trust</span><span class="v ask">The rule is public. Two indexers must agree.</span></div>
      <div class="ln"><span class="c">&gt;</span><span class="k">wallet</span><span class="v ask">Unshield from Zashi, ZODL or Vizor to the address GLASS shows you.</span></div>
    </div>
  </section>

  <section class="sec">
    <div class="eyebrow"><span><b>GLASS</b> // STATUS_</span><span class="rule"></span><span>heights over clocks</span></div>
    <h2 class="q"><span class="c">&gt;</span>Nothing is for sale yet.</h2>
    <div class="gates">${wt.gates.map(t=>`<div><span class="g">${t.name}<b>${t.sub}</b></span><span class="d">${t.text.replace(/(\d{1,3}(?:,\d{3})+)/g,'<span class="h">$1</span>').replace(/(MIN_OUT|marketEnabled:false)/g,'<span class="h">$1</span>')}</span>${y2(t)}</div>`).join("")}</div>
    <p class="disc">${mv}<small>${gv}</small></p>
  </section>
</div>
<div class="foot">
  <a class="btn" href="#/terminal">[ OPEN THE TERMINAL → ]</a>
  <a class="btn vio" href="${wt.links.x}" target="_blank" rel="noopener">[ zkSNARKs ON X → ]</a>
</div>
<p class="copyline"><b>The pool is sacred. The vault is glass.</b>glass.zcash · ${Qe.tba}<span>glass · a curve coin on Zcash · ${Qe.operator} · read it yourself</span></p>`}},b2=["  ████ "," █     "," █  ██ "," █   █ "," █   █ ","  ████ "],w2=[" █     "," █     "," █     "," █     "," █     "," █████ "],M2=["  ███  "," █   █ "," █   █ "," █████ "," █   █ "," █   █ "],Nm=["  ████ "," █     ","  ███  ","     █ ","     █ "," ████  "],S2=[b2,w2,M2,Nm,Nm],sv=[0,1,2,3,4,5].map(i=>S2.map(t=>t[i]).join("")).join(`
`);document.getElementById("loadmark").textContent=sv;document.getElementById("logomark").textContent=sv;const E2=document.getElementById("ilist");E2.innerHTML=wt.views.map((i,t)=>`<a class="ilink" href="${i.id==="home"?"#/":"#/"+i.id}" data-v="${i.id}"><span class="ix">${String(t+1).padStart(2,"0")}</span><span class="nm">${i.name}<span class="st">${i.stat}</span></span><span class="go">&rarr;</span></a>`).join("");const po=document.getElementById("index"),rv=document.getElementById("menubtn"),A2=document.getElementById("menulbl");function to(i){po.classList.toggle("on",i),rv.setAttribute("aria-expanded",String(i)),A2.textContent=i?"CLOSE":"INDEX"}rv.addEventListener("click",()=>to(!po.classList.contains("on")));po.addEventListener("click",i=>{(i.target.closest(".ilink")||i.target===po)&&to(!1)});ur("home",JS);ur("terminal",$I);ur("vault",JI);ur("genesis",h2);ur("rule",v2);ur("how",x2);const ov=document.getElementById("stat"),Fm=document.getElementById("hint");_v(i=>{const t=wt.views.find(e=>e.id===i);ov.textContent=t?t.stat:"online",document.querySelectorAll(".ilink").forEach(e=>e.classList.toggle("on",e.dataset.v===i)),Fm.classList.toggle("on",i==="home"),Fm.textContent=i==="home"?matchMedia("(hover: none)").matches?"tap index to navigate":"m for index · 1–6 to jump":"",document.title=i==="home"?`${Qe.name} // the glass vault`:`${Qe.name} // ${t.name.toLowerCase()}`});Om(async()=>{const{PREVIEW:i,held:t}=await Promise.resolve().then(()=>ES);return{PREVIEW:i,held:t}},void 0,import.meta.url).then(({PREVIEW:i,held:t})=>{if(!i)return;const e=document.getElementById("statchip");e.className="chip warn",e.querySelector("#statchiptext").textContent=`example data · vault holds ${t().length}`,ov.textContent="preview"});bv(document.getElementById("dust"));document.querySelectorAll(".view").forEach(i=>i.addEventListener("click",t=>{t.target===i&&eo("home")}));const av=xv(document.getElementById("sndbtn"));vv({score:av});addEventListener("keydown",i=>{if(i.metaKey||i.ctrlKey||i.altKey||i.target&&/INPUT|TEXTAREA/.test(i.target.tagName))return;const t=po.classList.contains("on");if(i.key==="Escape"){t?to(!1):eo("home");return}if(i.key==="m"||i.key==="M"){to(!t);return}const e="123456".indexOf(i.key);e>-1&&wt.views[e]&&(eo(wt.views[e].id),to(!1))});const km=["initialising","reading the rule","opening node-glass","checking indexers · 0 / 2","ready"];(function(){const t=document.getElementById("fill"),e=document.getElementById("pc"),n=document.getElementById("loadmsg"),s=document.getElementById("loader"),r=document.getElementById("shell");let o=!1;try{o=sessionStorage.getItem("glass_booted")==="1"}catch{}const a=matchMedia("(prefers-reduced-motion: reduce)").matches;if(o||a){s.remove(),r.classList.add("up"),md();return}let l=0,c=0;const h=setInterval(()=>{l=Math.min(100,l+Math.random()*13+4),t.style.width=l+"%",e.textContent=Math.round(l)+"%";const u=Math.min(km.length-1,Math.floor(l/25));if(u!==c&&(c=u,n.textContent=km[c]),l>=100){clearInterval(h),n.textContent="ready";const d=document.getElementById("enter"),f=document.getElementById("loadnote");s.removeAttribute("aria-hidden"),d.hidden=!1,f.hidden=!1,d.focus();let p=!1;const v=()=>{if(!p){p=!0;try{sessionStorage.setItem("glass_booted","1")}catch{}av.arm(),s.classList.add("done"),r.classList.add("up"),setTimeout(()=>s.remove(),700),md()}};d.addEventListener("click",v);const g=m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),removeEventListener("keydown",g),v())};addEventListener("keydown",g)}},165)})();export{I2 as D,ii as F,nn as H,fs as L,T2 as a,Ee as b};
