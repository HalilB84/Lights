(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();const js="181",Sc=0,_o=1,Mc=2,Rl=1,bc=2,bn=3,Hn=0,kt=1,dn=2,An=0,Di=1,yo=2,So=3,Mo=4,Tc=5,ti=100,Ec=101,Ac=102,wc=103,Cc=104,Rc=200,Pc=201,Uc=202,Dc=203,es=204,ts=205,Lc=206,Ic=207,Fc=208,Nc=209,Oc=210,Bc=211,kc=212,Gc=213,zc=214,ns=0,is=1,rs=2,Ii=3,as=4,ss=5,os=6,ls=7,Pl=0,Vc=1,Hc=2,Vn=0,Wc=1,Xc=2,Yc=3,qc=4,jc=5,Kc=6,Zc=7,Ul=300,Fi=301,Ni=302,cs=303,us=304,ia=306,or=1e3,Tn=1001,fs=1002,St=1003,Jc=1004,Tr=1005,vt=1006,ya=1007,ii=1008,Cn=1009,Dl=1010,Ll=1011,lr=1012,Ks=1013,si=1014,Kt=1015,Bi=1016,Zs=1017,Js=1018,cr=1020,Il=35902,Fl=35899,Nl=1021,Ol=1022,an=1023,ur=1026,fr=1027,Bl=1028,Qs=1029,$s=1030,eo=1031,to=1033,qr=33776,jr=33777,Kr=33778,Zr=33779,hs=35840,ds=35841,ps=35842,ms=35843,xs=36196,gs=37492,vs=37496,_s=37808,ys=37809,Ss=37810,Ms=37811,bs=37812,Ts=37813,Es=37814,As=37815,ws=37816,Cs=37817,Rs=37818,Ps=37819,Us=37820,Ds=37821,Ls=36492,Is=36494,Fs=36495,Ns=36283,Os=36284,Bs=36285,ks=36286,Qc=3200,kl=3201,$c=0,eu=1,Gn="",jt="srgb",oi="srgb-linear",ta="linear",st="srgb",pi=7680,bo=519,tu=512,nu=513,iu=514,Gl=515,ru=516,au=517,su=518,ou=519,To=35044,Rn="300 es",pn=2e3,na=2001;function zl(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function hr(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function lu(){const o=hr("canvas");return o.style.display="block",o}const Eo={};function Ao(...o){const e="THREE."+o.shift();console.log(e,...o)}function qe(...o){const e="THREE."+o.shift();console.warn(e,...o)}function dt(...o){const e="THREE."+o.shift();console.error(e,...o)}function dr(...o){const e=o.join(" ");e in Eo||(Eo[e]=!0,qe(...o))}function cu(o,e,t){return new Promise(function(r,i){function n(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:i();break;case o.TIMEOUT_EXPIRED:setTimeout(n,t);break;default:r()}}setTimeout(n,t)})}class ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const i=r[e];if(i!==void 0){const n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let n=0,a=i.length;n<a;n++)i[n].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sa=Math.PI/180,Gs=180/Math.PI;function pr(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ut[o&255]+Ut[o>>8&255]+Ut[o>>16&255]+Ut[o>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[r&255]+Ut[r>>8&255]+Ut[r>>16&255]+Ut[r>>24&255]).toLowerCase()}function Qe(o,e,t){return Math.max(e,Math.min(t,o))}function uu(o,e){return(o%e+e)%e}function Ma(o,e,t){return(1-t)*o+t*e}function Zi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Bt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6],this.y=i[1]*t+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Qe(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Qe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),i=Math.sin(t),n=this.x-e.x,a=this.y-e.y;return this.x=n*r-a*i+e.x,this.y=n*i+a*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mr{constructor(e=0,t=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=i}static slerpFlat(e,t,r,i,n,a,s){let l=r[i+0],c=r[i+1],u=r[i+2],d=r[i+3],h=n[a+0],f=n[a+1],p=n[a+2],x=n[a+3];if(s<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(s>=1){e[t+0]=h,e[t+1]=f,e[t+2]=p,e[t+3]=x;return}if(d!==x||l!==h||c!==f||u!==p){let m=l*h+c*f+u*p+d*x;m<0&&(h=-h,f=-f,p=-p,x=-x,m=-m);let g=1-s;if(m<.9995){const M=Math.acos(m),T=Math.sin(M);g=Math.sin(g*M)/T,s=Math.sin(s*M)/T,l=l*g+h*s,c=c*g+f*s,u=u*g+p*s,d=d*g+x*s}else{l=l*g+h*s,c=c*g+f*s,u=u*g+p*s,d=d*g+x*s;const M=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=M,c*=M,u*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,r,i,n,a){const s=r[i],l=r[i+1],c=r[i+2],u=r[i+3],d=n[a],h=n[a+1],f=n[a+2],p=n[a+3];return e[t]=s*p+u*d+l*f-c*h,e[t+1]=l*p+u*h+c*d-s*f,e[t+2]=c*p+u*f+s*h-l*d,e[t+3]=u*p-s*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,i){return this._x=e,this._y=t,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,i=e._y,n=e._z,a=e._order,s=Math.cos,l=Math.sin,c=s(r/2),u=s(i/2),d=s(n/2),h=l(r/2),f=l(i/2),p=l(n/2);switch(a){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],i=t[4],n=t[8],a=t[1],s=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=r+s+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(n-c)*f,this._z=(a-i)*f}else if(r>s&&r>d){const f=2*Math.sqrt(1+r-s-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(n+c)/f}else if(s>d){const f=2*Math.sqrt(1+s-r-d);this._w=(n-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-r-s);this._w=(a-i)/f,this._x=(n+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,t/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,i=e._y,n=e._z,a=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=r*u+a*s+i*c-n*l,this._y=i*u+a*l+n*s-r*c,this._z=n*u+a*c+r*l-i*s,this._w=a*u-r*s-i*l-n*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let r=e._x,i=e._y,n=e._z,a=e._w,s=this.dot(e);s<0&&(r=-r,i=-i,n=-n,a=-a,s=-s);let l=1-t;if(s<.9995){const c=Math.acos(s),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+r*t,this._y=this._y*l+i*t,this._z=this._z*l+n*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+r*t,this._y=this._y*l+i*t,this._z=this._z*l+n*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),n=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),n*Math.sin(t),n*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(e=0,t=0,r=0){oe.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,i=this.z,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6]*i,this.y=n[1]*t+n[4]*r+n[7]*i,this.z=n[2]*t+n[5]*r+n[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,n=e.elements,a=1/(n[3]*t+n[7]*r+n[11]*i+n[15]);return this.x=(n[0]*t+n[4]*r+n[8]*i+n[12])*a,this.y=(n[1]*t+n[5]*r+n[9]*i+n[13])*a,this.z=(n[2]*t+n[6]*r+n[10]*i+n[14])*a,this}applyQuaternion(e){const t=this.x,r=this.y,i=this.z,n=e.x,a=e.y,s=e.z,l=e.w,c=2*(a*i-s*r),u=2*(s*t-n*i),d=2*(n*r-a*t);return this.x=t+l*c+a*d-s*u,this.y=r+l*u+s*c-n*d,this.z=i+l*d+n*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,i=this.z,n=e.elements;return this.x=n[0]*t+n[4]*r+n[8]*i,this.y=n[1]*t+n[5]*r+n[9]*i,this.z=n[2]*t+n[6]*r+n[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Qe(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,i=e.y,n=e.z,a=t.x,s=t.y,l=t.z;return this.x=i*l-n*s,this.y=n*a-r*l,this.z=r*s-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ba.copy(this).projectOnVector(e),this.sub(ba)}reflect(e){return this.sub(ba.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Qe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return t*t+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const i=Math.sin(t)*e;return this.x=i*Math.sin(r),this.y=Math.cos(t)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ba=new oe,wo=new mr;class Ye{constructor(e,t,r,i,n,a,s,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,i,n,a,s,l,c)}set(e,t,r,i,n,a,s,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=s,u[3]=t,u[4]=n,u[5]=l,u[6]=r,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,n=this.elements,a=r[0],s=r[3],l=r[6],c=r[1],u=r[4],d=r[7],h=r[2],f=r[5],p=r[8],x=i[0],m=i[3],g=i[6],M=i[1],T=i[4],A=i[7],v=i[2],y=i[5],b=i[8];return n[0]=a*x+s*M+l*v,n[3]=a*m+s*T+l*y,n[6]=a*g+s*A+l*b,n[1]=c*x+u*M+d*v,n[4]=c*m+u*T+d*y,n[7]=c*g+u*A+d*b,n[2]=h*x+f*M+p*v,n[5]=h*m+f*T+p*y,n[8]=h*g+f*A+p*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],i=e[2],n=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*s*c-r*n*u+r*s*l+i*n*c-i*a*l}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],n=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],d=u*a-s*c,h=s*l-u*n,f=c*n-a*l,p=t*d+r*h+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return e[0]=d*x,e[1]=(i*c-u*r)*x,e[2]=(s*r-i*a)*x,e[3]=h*x,e[4]=(u*t-i*l)*x,e[5]=(i*n-s*t)*x,e[6]=f*x,e[7]=(r*l-c*t)*x,e[8]=(a*t-r*n)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,i,n,a,s){const l=Math.cos(n),c=Math.sin(n);return this.set(r*l,r*c,-r*(l*a+c*s)+a+e,-i*c,i*l,-i*(-c*a+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Ta.makeScale(e,t)),this}rotate(e){return this.premultiply(Ta.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ta.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<9;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ta=new Ye,Co=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ro=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fu(){const o={enabled:!0,workingColorSpace:oi,spaces:{},convert:function(i,n,a){return this.enabled===!1||n===a||!n||!a||(this.spaces[n].transfer===st&&(i.r=wn(i.r),i.g=wn(i.g),i.b=wn(i.b)),this.spaces[n].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[n].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(i.r=Li(i.r),i.g=Li(i.g),i.b=Li(i.b))),i},workingToColorSpace:function(i,n){return this.convert(i,this.workingColorSpace,n)},colorSpaceToWorking:function(i,n){return this.convert(i,n,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gn?ta:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,n=this.workingColorSpace){return i.fromArray(this.spaces[n].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,n,a){return i.copy(this.spaces[n].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,n){return dr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(i,n)},toWorkingColorSpace:function(i,n){return dr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(i,n)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[oi]:{primaries:e,whitePoint:r,transfer:ta,toXYZ:Co,fromXYZ:Ro,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:r,transfer:st,toXYZ:Co,fromXYZ:Ro,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),o}const tt=fu();function wn(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Li(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let mi;class hu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{mi===void 0&&(mi=hr("canvas")),mi.width=e.width,mi.height=e.height;const i=mi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),r=mi}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hr("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),n=i.data;for(let a=0;a<n.length;a++)n[a]=wn(n[a]/255)*255;return r.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(wn(t[r]/255)*255):t[r]=wn(t[r]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let du=0;class no{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=pr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let n;if(Array.isArray(i)){n=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?n.push(Ea(i[a].image)):n.push(Ea(i[a]))}else n=Ea(i);r.url=n}return t||(e.images[this.uuid]=r),r}}function Ea(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?hu.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let pu=0;const Aa=new oe;class Et extends ki{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,r=Tn,i=Tn,n=vt,a=ii,s=an,l=Cn,c=Et.DEFAULT_ANISOTROPY,u=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=pr(),this.name="",this.source=new no(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=n,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Aa).x}get height(){return this.source.getSize(Aa).y}get depth(){return this.source.getSize(Aa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&r&&i.isVector2&&r.isVector2||i&&r&&i.isVector3&&r.isVector3||i&&r&&i.isMatrix3&&r.isMatrix3?i.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ul)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case or:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case fs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case or:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case fs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Ul;Et.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,r=0,i=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,i){return this.x=e,this.y=t,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,n=this.w,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*i+a[12]*n,this.y=a[1]*t+a[5]*r+a[9]*i+a[13]*n,this.z=a[2]*t+a[6]*r+a[10]*i+a[14]*n,this.w=a[3]*t+a[7]*r+a[11]*i+a[15]*n,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,i,n;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,A=(f+1)/2,v=(g+1)/2,y=(u+h)/4,b=(d+x)/4,E=(p+m)/4;return T>A&&T>v?T<.01?(r=0,i=.707106781,n=.707106781):(r=Math.sqrt(T),i=y/r,n=b/r):A>v?A<.01?(r=.707106781,i=0,n=.707106781):(i=Math.sqrt(A),r=y/i,n=E/i):v<.01?(r=.707106781,i=.707106781,n=0):(n=Math.sqrt(v),r=b/n,i=E/n),this.set(r,i,n,t),this}let M=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(d-x)/M,this.z=(h-u)/M,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Qe(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mu extends ki{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const i={width:e,height:t,depth:r.depth},n=new Et(i);this.textures=[];const a=r.count;for(let s=0;s<a;s++)this.textures[s]=n.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let i=0,n=this.textures.length;i<n;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=r,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new no(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sn extends mu{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Vl extends Et{constructor(e=null,t=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=St,this.minFilter=St,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xu extends Et{constructor(e=null,t=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=St,this.minFilter=St,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class li{constructor(e=new oe(1/0,1/0,1/0),t=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const n=r.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0)for(let a=0,s=n.count;a<s;a++)e.isMesh===!0?e.getVertexPosition(a,$t):$t.fromBufferAttribute(n,a),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Er.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Er.copy(r.boundingBox)),Er.applyMatrix4(e.matrixWorld),this.union(Er)}const i=e.children;for(let n=0,a=i.length;n<a;n++)this.expandByObject(i[n],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ji),Ar.subVectors(this.max,Ji),xi.subVectors(e.a,Ji),gi.subVectors(e.b,Ji),vi.subVectors(e.c,Ji),In.subVectors(gi,xi),Fn.subVectors(vi,gi),qn.subVectors(xi,vi);let t=[0,-In.z,In.y,0,-Fn.z,Fn.y,0,-qn.z,qn.y,In.z,0,-In.x,Fn.z,0,-Fn.x,qn.z,0,-qn.x,-In.y,In.x,0,-Fn.y,Fn.x,0,-qn.y,qn.x,0];return!wa(t,xi,gi,vi,Ar)||(t=[1,0,0,0,1,0,0,0,1],!wa(t,xi,gi,vi,Ar))?!1:(wr.crossVectors(In,Fn),t=[wr.x,wr.y,wr.z],wa(t,xi,gi,vi,Ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gn=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],$t=new oe,Er=new li,xi=new oe,gi=new oe,vi=new oe,In=new oe,Fn=new oe,qn=new oe,Ji=new oe,Ar=new oe,wr=new oe,jn=new oe;function wa(o,e,t,r,i){for(let n=0,a=o.length-3;n<=a;n+=3){jn.fromArray(o,n);const s=i.x*Math.abs(jn.x)+i.y*Math.abs(jn.y)+i.z*Math.abs(jn.z),l=e.dot(jn),c=t.dot(jn),u=r.dot(jn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const gu=new li,Qi=new oe,Ca=new oe;class ra{constructor(e=new oe,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):gu.setFromPoints(e).getCenter(r);let i=0;for(let n=0,a=e.length;n<a;n++)i=Math.max(i,r.distanceToSquared(e[n]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);const t=Qi.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),i=(r-this.radius)*.5;this.center.addScaledVector(Qi,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(Ca)),this.expandByPoint(Qi.copy(e.center).sub(Ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const vn=new oe,Ra=new oe,Cr=new oe,Nn=new oe,Pa=new oe,Rr=new oe,Ua=new oe;class vu{constructor(e=new oe,t=new oe(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,r,i){Ra.copy(e).add(t).multiplyScalar(.5),Cr.copy(t).sub(e).normalize(),Nn.copy(this.origin).sub(Ra);const n=e.distanceTo(t)*.5,a=-this.direction.dot(Cr),s=Nn.dot(this.direction),l=-Nn.dot(Cr),c=Nn.lengthSq(),u=Math.abs(1-a*a);let d,h,f,p;if(u>0)if(d=a*l-s,h=a*s-l,p=n*u,d>=0)if(h>=-p)if(h<=p){const x=1/u;d*=x,h*=x,f=d*(d+a*h+2*s)+h*(a*d+h+2*l)+c}else h=n,d=Math.max(0,-(a*h+s)),f=-d*d+h*(h+2*l)+c;else h=-n,d=Math.max(0,-(a*h+s)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-a*n+s)),h=d>0?-n:Math.min(Math.max(-n,-l),n),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-n,-l),n),f=h*(h+2*l)+c):(d=Math.max(0,-(a*n+s)),h=d>0?n:Math.min(Math.max(-n,-l),n),f=-d*d+h*(h+2*l)+c);else h=a>0?-n:n,d=Math.max(0,-(a*h+s)),f=-d*d+h*(h+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ra).addScaledVector(Cr,h),f}intersectSphere(e,t){vn.subVectors(e.center,this.origin);const r=vn.dot(this.direction),i=vn.dot(vn)-r*r,n=e.radius*e.radius;if(i>n)return null;const a=Math.sqrt(n-i),s=r-a,l=r+a;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,i,n,a,s,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(r=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(r=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(n=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(n=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),r>a||n>i||((n>r||isNaN(r))&&(r=n),(a<i||isNaN(i))&&(i=a),d>=0?(s=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(s=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),r>l||s>i)||((s>r||r!==r)&&(r=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(r>=0?r:i,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,r,i,n){Pa.subVectors(t,e),Rr.subVectors(r,e),Ua.crossVectors(Pa,Rr);let a=this.direction.dot(Ua),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Nn.subVectors(this.origin,e);const l=s*this.direction.dot(Rr.crossVectors(Nn,Rr));if(l<0)return null;const c=s*this.direction.dot(Pa.cross(Nn));if(c<0||l+c>a)return null;const u=-s*Nn.dot(Ua);return u<0?null:this.at(u/a,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,r,i,n,a,s,l,c,u,d,h,f,p,x,m){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,i,n,a,s,l,c,u,d,h,f,p,x,m)}set(e,t,r,i,n,a,s,l,c,u,d,h,f,p,x,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=r,g[12]=i,g[1]=n,g[5]=a,g[9]=s,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,i=1/_i.setFromMatrixColumn(e,0).length(),n=1/_i.setFromMatrixColumn(e,1).length(),a=1/_i.setFromMatrixColumn(e,2).length();return t[0]=r[0]*i,t[1]=r[1]*i,t[2]=r[2]*i,t[3]=0,t[4]=r[4]*n,t[5]=r[5]*n,t[6]=r[6]*n,t[7]=0,t[8]=r[8]*a,t[9]=r[9]*a,t[10]=r[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,i=e.y,n=e.z,a=Math.cos(r),s=Math.sin(r),l=Math.cos(i),c=Math.sin(i),u=Math.cos(n),d=Math.sin(n);if(e.order==="XYZ"){const h=a*u,f=a*d,p=s*u,x=s*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=h-x*c,t[9]=-s*l,t[2]=x-h*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,p=c*u,x=c*d;t[0]=h+x*s,t[4]=p*s-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-s,t[2]=f*s-p,t[6]=x+h*s,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,p=c*u,x=c*d;t[0]=h-x*s,t[4]=-a*d,t[8]=p+f*s,t[1]=f+p*s,t[5]=a*u,t[9]=x-h*s,t[2]=-a*c,t[6]=s,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,p=s*u,x=s*d;t[0]=l*u,t[4]=p*c-f,t[8]=h*c+x,t[1]=l*d,t[5]=x*c+h,t[9]=f*c-p,t[2]=-c,t[6]=s*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,p=s*l,x=s*c;t[0]=l*u,t[4]=x-h*d,t[8]=p*d+f,t[1]=d,t[5]=a*u,t[9]=-s*u,t[2]=-c*u,t[6]=f*d+p,t[10]=h-x*d}else if(e.order==="XZY"){const h=a*l,f=a*c,p=s*l,x=s*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+x,t[5]=a*u,t[9]=f*d-p,t[2]=p*d-f,t[6]=s*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_u,e,yu)}lookAt(e,t,r){const i=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),On.crossVectors(r,zt),On.lengthSq()===0&&(Math.abs(r.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),On.crossVectors(r,zt)),On.normalize(),Pr.crossVectors(zt,On),i[0]=On.x,i[4]=Pr.x,i[8]=zt.x,i[1]=On.y,i[5]=Pr.y,i[9]=zt.y,i[2]=On.z,i[6]=Pr.z,i[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,n=this.elements,a=r[0],s=r[4],l=r[8],c=r[12],u=r[1],d=r[5],h=r[9],f=r[13],p=r[2],x=r[6],m=r[10],g=r[14],M=r[3],T=r[7],A=r[11],v=r[15],y=i[0],b=i[4],E=i[8],S=i[12],_=i[1],C=i[5],w=i[9],P=i[13],L=i[2],I=i[6],O=i[10],V=i[14],H=i[3],W=i[7],X=i[11],N=i[15];return n[0]=a*y+s*_+l*L+c*H,n[4]=a*b+s*C+l*I+c*W,n[8]=a*E+s*w+l*O+c*X,n[12]=a*S+s*P+l*V+c*N,n[1]=u*y+d*_+h*L+f*H,n[5]=u*b+d*C+h*I+f*W,n[9]=u*E+d*w+h*O+f*X,n[13]=u*S+d*P+h*V+f*N,n[2]=p*y+x*_+m*L+g*H,n[6]=p*b+x*C+m*I+g*W,n[10]=p*E+x*w+m*O+g*X,n[14]=p*S+x*P+m*V+g*N,n[3]=M*y+T*_+A*L+v*H,n[7]=M*b+T*C+A*I+v*W,n[11]=M*E+T*w+A*O+v*X,n[15]=M*S+T*P+A*V+v*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],i=e[8],n=e[12],a=e[1],s=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],x=e[7],m=e[11],g=e[15];return p*(+n*l*d-i*c*d-n*s*h+r*c*h+i*s*f-r*l*f)+x*(+t*l*f-t*c*h+n*a*h-i*a*f+i*c*u-n*l*u)+m*(+t*c*d-t*s*f-n*a*d+r*a*f+n*s*u-r*c*u)+g*(-i*s*u-t*l*d+t*s*h+i*a*d-r*a*h+r*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],n=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],x=e[13],m=e[14],g=e[15],M=d*m*c-x*h*c+x*l*f-s*m*f-d*l*g+s*h*g,T=p*h*c-u*m*c-p*l*f+a*m*f+u*l*g-a*h*g,A=u*x*c-p*d*c+p*s*f-a*x*f-u*s*g+a*d*g,v=p*d*l-u*x*l-p*s*h+a*x*h+u*s*m-a*d*m,y=t*M+r*T+i*A+n*v;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/y;return e[0]=M*b,e[1]=(x*h*n-d*m*n-x*i*f+r*m*f+d*i*g-r*h*g)*b,e[2]=(s*m*n-x*l*n+x*i*c-r*m*c-s*i*g+r*l*g)*b,e[3]=(d*l*n-s*h*n-d*i*c+r*h*c+s*i*f-r*l*f)*b,e[4]=T*b,e[5]=(u*m*n-p*h*n+p*i*f-t*m*f-u*i*g+t*h*g)*b,e[6]=(p*l*n-a*m*n-p*i*c+t*m*c+a*i*g-t*l*g)*b,e[7]=(a*h*n-u*l*n+u*i*c-t*h*c-a*i*f+t*l*f)*b,e[8]=A*b,e[9]=(p*d*n-u*x*n-p*r*f+t*x*f+u*r*g-t*d*g)*b,e[10]=(a*x*n-p*s*n+p*r*c-t*x*c-a*r*g+t*s*g)*b,e[11]=(u*s*n-a*d*n-u*r*c+t*d*c+a*r*f-t*s*f)*b,e[12]=v*b,e[13]=(u*x*i-p*d*i+p*r*h-t*x*h-u*r*m+t*d*m)*b,e[14]=(p*s*i-a*x*i-p*r*l+t*x*l+a*r*m-t*s*m)*b,e[15]=(a*d*i-u*s*i+u*r*l-t*d*l-a*r*h+t*s*h)*b,this}scale(e){const t=this.elements,r=e.x,i=e.y,n=e.z;return t[0]*=r,t[4]*=i,t[8]*=n,t[1]*=r,t[5]*=i,t[9]*=n,t[2]*=r,t[6]*=i,t[10]*=n,t[3]*=r,t[7]*=i,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,i))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),i=Math.sin(t),n=1-r,a=e.x,s=e.y,l=e.z,c=n*a,u=n*s;return this.set(c*a+r,c*s-i*l,c*l+i*s,0,c*s+i*l,u*s+r,u*l-i*a,0,c*l-i*s,u*l+i*a,n*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,i,n,a){return this.set(1,r,n,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,r){const i=this.elements,n=t._x,a=t._y,s=t._z,l=t._w,c=n+n,u=a+a,d=s+s,h=n*c,f=n*u,p=n*d,x=a*u,m=a*d,g=s*d,M=l*c,T=l*u,A=l*d,v=r.x,y=r.y,b=r.z;return i[0]=(1-(x+g))*v,i[1]=(f+A)*v,i[2]=(p-T)*v,i[3]=0,i[4]=(f-A)*y,i[5]=(1-(h+g))*y,i[6]=(m+M)*y,i[7]=0,i[8]=(p+T)*b,i[9]=(m-M)*b,i[10]=(1-(h+x))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,r){const i=this.elements;let n=_i.set(i[0],i[1],i[2]).length();const a=_i.set(i[4],i[5],i[6]).length(),s=_i.set(i[8],i[9],i[10]).length();this.determinant()<0&&(n=-n),e.x=i[12],e.y=i[13],e.z=i[14],en.copy(this);const c=1/n,u=1/a,d=1/s;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=d,en.elements[9]*=d,en.elements[10]*=d,t.setFromRotationMatrix(en),r.x=n,r.y=a,r.z=s,this}makePerspective(e,t,r,i,n,a,s=pn,l=!1){const c=this.elements,u=2*n/(t-e),d=2*n/(r-i),h=(t+e)/(t-e),f=(r+i)/(r-i);let p,x;if(l)p=n/(a-n),x=a*n/(a-n);else if(s===pn)p=-(a+n)/(a-n),x=-2*a*n/(a-n);else if(s===na)p=-a/(a-n),x=-a*n/(a-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,r,i,n,a,s=pn,l=!1){const c=this.elements,u=2/(t-e),d=2/(r-i),h=-(t+e)/(t-e),f=-(r+i)/(r-i);let p,x;if(l)p=1/(a-n),x=a/(a-n);else if(s===pn)p=-2/(a-n),x=-(a+n)/(a-n);else if(s===na)p=-1/(a-n),x=-n/(a-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<16;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const _i=new oe,en=new _t,_u=new oe(0,0,0),yu=new oe(1,1,1),On=new oe,Pr=new oe,zt=new oe,Po=new _t,Uo=new mr;class Pn{constructor(e=0,t=0,r=0,i=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,i=this._order){return this._x=e,this._y=t,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const i=e.elements,n=i[0],a=i[4],s=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Qe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,n)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,n),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,n)):(this._x=0,this._y=Math.atan2(s,f));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(s,n)):(this._x=Math.atan2(-u,f),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Po.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Po,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uo.setFromEuler(this),this.setFromQuaternion(Uo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class Hl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Su=0;const Do=new oe,yi=new mr,_n=new _t,Ur=new oe,$i=new oe,Mu=new oe,bu=new mr,Lo=new oe(1,0,0),Io=new oe(0,1,0),Fo=new oe(0,0,1),No={type:"added"},Tu={type:"removed"},Si={type:"childadded",child:null},Da={type:"childremoved",child:null};class Ht extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new oe,t=new Pn,r=new mr,i=new oe(1,1,1);function n(){r.setFromEuler(t,!1)}function a(){t.setFromQuaternion(r,void 0,!1)}t._onChange(n),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _t},normalMatrix:{value:new Ye}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(Lo,e)}rotateY(e){return this.rotateOnAxis(Io,e)}rotateZ(e){return this.rotateOnAxis(Fo,e)}translateOnAxis(e,t){return Do.copy(e).applyQuaternion(this.quaternion),this.position.add(Do.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lo,e)}translateY(e){return this.translateOnAxis(Io,e)}translateZ(e){return this.translateOnAxis(Fo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Ur.copy(e):Ur.set(e,t,r);const i=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt($i,Ur,this.up):_n.lookAt(Ur,$i,this.up),this.quaternion.setFromRotationMatrix(_n),i&&(_n.extractRotation(i.matrixWorld),yi.setFromRotationMatrix(_n),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(No),Si.child=e,this.dispatchEvent(Si),Si.child=null):dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tu),Da.child=e,this.dispatchEvent(Da),Da.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(No),Si.child=e,this.dispatchEvent(Si),Si.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,i=this.children.length;r<i;r++){const a=this.children[r].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const i=this.children;for(let n=0,a=i.length;n<a;n++)i[n].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,e,Mu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,bu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let n=0,a=i.length;n<a;n++)i[n].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(s=>({...s,boundingBox:s.boundingBox?s.boundingBox.toJSON():void 0,boundingSphere:s.boundingSphere?s.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(s=>({...s})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function n(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=n(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];n(e.shapes,d)}else n(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(n(e.materials,this.material[l]));i.material=s}else i.material=n(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(n(e.animations,l))}}if(t){const s=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),p=a(e.nodes);s.length>0&&(r.geometries=s),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),d.length>0&&(r.shapes=d),h.length>0&&(r.skeletons=h),f.length>0&&(r.animations=f),p.length>0&&(r.nodes=p)}return r.object=i,r;function a(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}Ht.DEFAULT_UP=new oe(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new oe,yn=new oe,La=new oe,Sn=new oe,Mi=new oe,bi=new oe,Oo=new oe,Ia=new oe,Fa=new oe,Na=new oe,Oa=new ft,Ba=new ft,ka=new ft;class rn{constructor(e=new oe,t=new oe,r=new oe){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,i){i.subVectors(r,t),tn.subVectors(e,t),i.cross(tn);const n=i.lengthSq();return n>0?i.multiplyScalar(1/Math.sqrt(n)):i.set(0,0,0)}static getBarycoord(e,t,r,i,n){tn.subVectors(i,t),yn.subVectors(r,t),La.subVectors(e,t);const a=tn.dot(tn),s=tn.dot(yn),l=tn.dot(La),c=yn.dot(yn),u=yn.dot(La),d=a*c-s*s;if(d===0)return n.set(0,0,0),null;const h=1/d,f=(c*l-s*u)*h,p=(a*u-s*l)*h;return n.set(1-f-p,p,f)}static containsPoint(e,t,r,i){return this.getBarycoord(e,t,r,i,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(e,t,r,i,n,a,s,l){return this.getBarycoord(e,t,r,i,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Sn.x),l.addScaledVector(a,Sn.y),l.addScaledVector(s,Sn.z),l)}static getInterpolatedAttribute(e,t,r,i,n,a){return Oa.setScalar(0),Ba.setScalar(0),ka.setScalar(0),Oa.fromBufferAttribute(e,t),Ba.fromBufferAttribute(e,r),ka.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Oa,n.x),a.addScaledVector(Ba,n.y),a.addScaledVector(ka,n.z),a}static isFrontFacing(e,t,r,i){return tn.subVectors(r,t),yn.subVectors(e,t),tn.cross(yn).dot(i)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,i){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,r,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),tn.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,i,n){return rn.getInterpolation(e,this.a,this.b,this.c,t,r,i,n)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,i=this.b,n=this.c;let a,s;Mi.subVectors(i,r),bi.subVectors(n,r),Ia.subVectors(e,r);const l=Mi.dot(Ia),c=bi.dot(Ia);if(l<=0&&c<=0)return t.copy(r);Fa.subVectors(e,i);const u=Mi.dot(Fa),d=bi.dot(Fa);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(r).addScaledVector(Mi,a);Na.subVectors(e,n);const f=Mi.dot(Na),p=bi.dot(Na);if(p>=0&&f<=p)return t.copy(n);const x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return s=c/(c-p),t.copy(r).addScaledVector(bi,s);const m=u*p-f*d;if(m<=0&&d-u>=0&&f-p>=0)return Oo.subVectors(n,i),s=(d-u)/(d-u+(f-p)),t.copy(i).addScaledVector(Oo,s);const g=1/(m+x+h);return a=x*g,s=h*g,t.copy(r).addScaledVector(Mi,a).addScaledVector(bi,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function Ga(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class Je{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,i=tt.workingColorSpace){return this.r=e,this.g=t,this.b=r,tt.colorSpaceToWorking(this,i),this}setHSL(e,t,r,i=tt.workingColorSpace){if(e=uu(e,1),t=Qe(t,0,1),r=Qe(r,0,1),t===0)this.r=this.g=this.b=r;else{const n=r<=.5?r*(1+t):r+t-r*t,a=2*r-n;this.r=Ga(a,n,e+1/3),this.g=Ga(a,n,e),this.b=Ga(a,n,e-1/3)}return tt.colorSpaceToWorking(this,i),this}setStyle(e,t=jt){function r(n){n!==void 0&&parseFloat(n)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,t);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=i[1],a=n.length;if(a===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(n,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const r=Wl[e.toLowerCase()];return r!==void 0?this.setHex(r,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wn(e.r),this.g=wn(e.g),this.b=wn(e.b),this}copyLinearToSRGB(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return tt.workingToColorSpace(Dt.copy(this),e),Math.round(Qe(Dt.r*255,0,255))*65536+Math.round(Qe(Dt.g*255,0,255))*256+Math.round(Qe(Dt.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Dt.copy(this),t);const r=Dt.r,i=Dt.g,n=Dt.b,a=Math.max(r,i,n),s=Math.min(r,i,n);let l,c;const u=(s+a)/2;if(s===a)l=0,c=0;else{const d=a-s;switch(c=u<=.5?d/(a+s):d/(2-a-s),a){case r:l=(i-n)/d+(i<n?6:0);break;case i:l=(n-r)/d+2;break;case n:l=(r-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=jt){tt.workingToColorSpace(Dt.copy(this),e);const t=Dt.r,r=Dt.g,i=Dt.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,t,r){return this.getHSL(Bn),this.setHSL(Bn.h+e,Bn.s+t,Bn.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL(Dr);const r=Ma(Bn.h,Dr.h,t),i=Ma(Bn.s,Dr.s,t),n=Ma(Bn.l,Dr.l,t);return this.setHSL(r,i,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,i=this.b,n=e.elements;return this.r=n[0]*t+n[3]*r+n[6]*i,this.g=n[1]*t+n[4]*r+n[7]*i,this.b=n[2]*t+n[5]*r+n[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Je;Je.NAMES=Wl;let Eu=0;class aa extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=pr(),this.name="",this.type="Material",this.blending=Di,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=es,this.blendDst=ts,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Ii,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pi,this.stencilZFail=pi,this.stencilZPass=pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(r.blending=this.blending),this.side!==Hn&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==es&&(r.blendSrc=this.blendSrc),this.blendDst!==ts&&(r.blendDst=this.blendDst),this.blendEquation!==ti&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ii&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bo&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pi&&(r.stencilFail=this.stencilFail),this.stencilZFail!==pi&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==pi&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(n){const a=[];for(const s in n){const l=n[s];delete l.metadata,a.push(l)}return a}if(t){const n=i(e.textures),a=i(e.images);n.length>0&&(r.textures=n),a.length>0&&(r.images=a)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const i=t.length;r=new Array(i);for(let n=0;n!==i;++n)r[n]=t[n].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class En extends aa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new oe,Lr=new et;let Au=0;class on{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Au++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=To,this.updateRanges=[],this.gpuType=Kt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let i=0,n=this.itemSize;i<n;i++)this.array[e+i]=t.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Lr.fromBufferAttribute(this,t),Lr.applyMatrix3(e),this.setXY(t,Lr.x,Lr.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Zi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Bt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),r=Bt(r,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,t,r,i,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),r=Bt(r,this.array),i=Bt(i,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==To&&(e.usage=this.usage),e}}class Xl extends on{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Yl extends on{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class mn extends on{constructor(e,t,r){super(new Float32Array(e),t,r)}}let wu=0;const Yt=new _t,za=new Ht,Ti=new oe,Vt=new li,er=new li,Tt=new oe;class xn extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=pr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zl(e)?Yl:Xl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const n=new Ye().getNormalMatrix(e);r.applyNormalMatrix(n),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,r){return Yt.makeTranslation(e,t,r),this.applyMatrix4(Yt),this}scale(e,t,r){return Yt.makeScale(e,t,r),this.applyMatrix4(Yt),this}lookAt(e){return za.lookAt(e),za.updateMatrix(),this.applyMatrix4(za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let i=0,n=e.length;i<n;i++){const a=e[i];r.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mn(r,3))}else{const r=Math.min(e.length,t.count);for(let i=0;i<r;i++){const n=e[i];t.setXYZ(i,n.x,n.y,n.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,i=t.length;r<i;r++){const n=t[r];Vt.setFromBufferAttribute(n),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ra);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const r=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const s=t[n];er.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(Vt.min,er.min),Vt.expandByPoint(Tt),Tt.addVectors(Vt.max,er.max),Vt.expandByPoint(Tt)):(Vt.expandByPoint(er.min),Vt.expandByPoint(er.max))}Vt.getCenter(r);let i=0;for(let n=0,a=e.count;n<a;n++)Tt.fromBufferAttribute(e,n),i=Math.max(i,r.distanceToSquared(Tt));if(t)for(let n=0,a=t.length;n<a;n++){const s=t[n],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)Tt.fromBufferAttribute(s,c),l&&(Ti.fromBufferAttribute(e,c),Tt.add(Ti)),i=Math.max(i,r.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,i=t.normal,n=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*r.count),4));const a=this.getAttribute("tangent"),s=[],l=[];for(let E=0;E<r.count;E++)s[E]=new oe,l[E]=new oe;const c=new oe,u=new oe,d=new oe,h=new et,f=new et,p=new et,x=new oe,m=new oe;function g(E,S,_){c.fromBufferAttribute(r,E),u.fromBufferAttribute(r,S),d.fromBufferAttribute(r,_),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,S),p.fromBufferAttribute(n,_),u.sub(c),d.sub(c),f.sub(h),p.sub(h);const C=1/(f.x*p.y-p.x*f.y);isFinite(C)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(C),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(C),s[E].add(x),s[S].add(x),s[_].add(x),l[E].add(m),l[S].add(m),l[_].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let E=0,S=M.length;E<S;++E){const _=M[E],C=_.start,w=_.count;for(let P=C,L=C+w;P<L;P+=3)g(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const T=new oe,A=new oe,v=new oe,y=new oe;function b(E){v.fromBufferAttribute(i,E),y.copy(v);const S=s[E];T.copy(S),T.sub(v.multiplyScalar(v.dot(S))).normalize(),A.crossVectors(y,S);const C=A.dot(l[E])<0?-1:1;a.setXYZW(E,T.x,T.y,T.z,C)}for(let E=0,S=M.length;E<S;++E){const _=M[E],C=_.start,w=_.count;for(let P=C,L=C+w;P<L;P+=3)b(e.getX(P+0)),b(e.getX(P+1)),b(e.getX(P+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let h=0,f=r.count;h<f;h++)r.setXYZ(h,0,0,0);const i=new oe,n=new oe,a=new oe,s=new oe,l=new oe,c=new oe,u=new oe,d=new oe;if(e)for(let h=0,f=e.count;h<f;h+=3){const p=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,p),n.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,n),d.subVectors(i,n),u.cross(d),s.fromBufferAttribute(r,p),l.fromBufferAttribute(r,x),c.fromBufferAttribute(r,m),s.add(u),l.add(u),c.add(u),r.setXYZ(p,s.x,s.y,s.z),r.setXYZ(x,l.x,l.y,l.z),r.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),n.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,n),d.subVectors(i,n),u.cross(d),r.setXYZ(h+0,u.x,u.y,u.z),r.setXYZ(h+1,u.x,u.y,u.z),r.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,d=s.normalized,h=new c.constructor(l.length*u);let f=0,p=0;for(let x=0,m=l.length;x<m;x++){s.isInterleavedBufferAttribute?f=l[x]*s.data.stride+s.offset:f=l[x]*u;for(let g=0;g<u;g++)h[p++]=c[f++]}return new on(h,u,d)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xn,r=this.index.array,i=this.attributes;for(const s in i){const l=i[s],c=e(l,r);t.setAttribute(s,c)}const n=this.morphAttributes;for(const s in n){const l=[],c=n[s];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,r);l.push(f)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const c=a[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let n=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,n=!0)}n&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere=s.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const n=e.morphAttributes;for(const c in n){const u=[],d=n[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bo=new _t,Kn=new vu,Ir=new ra,ko=new oe,Fr=new oe,Nr=new oe,Or=new oe,Va=new oe,Br=new oe,Go=new oe,kr=new oe;class At extends Ht{constructor(e=new xn,t=new En){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}getVertexPosition(e,t){const r=this.geometry,i=r.attributes.position,n=r.morphAttributes.position,a=r.morphTargetsRelative;t.fromBufferAttribute(i,e);const s=this.morphTargetInfluences;if(n&&s){Br.set(0,0,0);for(let l=0,c=n.length;l<c;l++){const u=s[l],d=n[l];u!==0&&(Va.fromBufferAttribute(d,e),a?Br.addScaledVector(Va,u):Br.addScaledVector(Va.sub(t),u))}t.add(Br)}return t}raycast(e,t){const r=this.geometry,i=this.material,n=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ir.copy(r.boundingSphere),Ir.applyMatrix4(n),Kn.copy(e.ray).recast(e.near),!(Ir.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(Ir,ko)===null||Kn.origin.distanceToSquared(ko)>(e.far-e.near)**2))&&(Bo.copy(n).invert(),Kn.copy(e.ray).applyMatrix4(Bo),!(r.boundingBox!==null&&Kn.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Kn)))}_computeIntersections(e,t,r){let i;const n=this.geometry,a=this.material,s=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv1,d=n.attributes.normal,h=n.groups,f=n.drawRange;if(s!==null)if(Array.isArray(a))for(let p=0,x=h.length;p<x;p++){const m=h[p],g=a[m.materialIndex],M=Math.max(m.start,f.start),T=Math.min(s.count,Math.min(m.start+m.count,f.start+f.count));for(let A=M,v=T;A<v;A+=3){const y=s.getX(A),b=s.getX(A+1),E=s.getX(A+2);i=Gr(this,g,e,r,c,u,d,y,b,E),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),x=Math.min(s.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){const M=s.getX(m),T=s.getX(m+1),A=s.getX(m+2);i=Gr(this,a,e,r,c,u,d,M,T,A),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=h.length;p<x;p++){const m=h[p],g=a[m.materialIndex],M=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let A=M,v=T;A<v;A+=3){const y=A,b=A+1,E=A+2;i=Gr(this,g,e,r,c,u,d,y,b,E),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){const M=m,T=m+1,A=m+2;i=Gr(this,a,e,r,c,u,d,M,T,A),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Cu(o,e,t,r,i,n,a,s){let l;if(e.side===kt?l=r.intersectTriangle(a,n,i,!0,s):l=r.intersectTriangle(i,n,a,e.side===Hn,s),l===null)return null;kr.copy(s),kr.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(kr);return c<t.near||c>t.far?null:{distance:c,point:kr.clone(),object:o}}function Gr(o,e,t,r,i,n,a,s,l,c){o.getVertexPosition(s,Fr),o.getVertexPosition(l,Nr),o.getVertexPosition(c,Or);const u=Cu(o,e,t,r,Fr,Nr,Or,Go);if(u){const d=new oe;rn.getBarycoord(Go,Fr,Nr,Or,d),i&&(u.uv=rn.getInterpolatedAttribute(i,s,l,c,d,new et)),n&&(u.uv1=rn.getInterpolatedAttribute(n,s,l,c,d,new et)),a&&(u.normal=rn.getInterpolatedAttribute(a,s,l,c,d,new oe),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const h={a:s,b:l,c,normal:new oe,materialIndex:0};rn.getNormal(Fr,Nr,Or,h.normal),u.face=h,u.barycoord=d}return u}class xr extends xn{constructor(e=1,t=1,r=1,i=1,n=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:i,heightSegments:n,depthSegments:a};const s=this;i=Math.floor(i),n=Math.floor(n),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;p("z","y","x",-1,-1,r,t,e,a,n,0),p("z","y","x",1,-1,r,t,-e,a,n,1),p("x","z","y",1,1,e,r,t,i,a,2),p("x","z","y",1,-1,e,r,-t,i,a,3),p("x","y","z",1,-1,e,t,r,i,n,4),p("x","y","z",-1,-1,e,t,-r,i,n,5),this.setIndex(l),this.setAttribute("position",new mn(c,3)),this.setAttribute("normal",new mn(u,3)),this.setAttribute("uv",new mn(d,2));function p(x,m,g,M,T,A,v,y,b,E,S){const _=A/b,C=v/E,w=A/2,P=v/2,L=y/2,I=b+1,O=E+1;let V=0,H=0;const W=new oe;for(let X=0;X<O;X++){const N=X*C-P;for(let Y=0;Y<I;Y++){const J=Y*_-w;W[x]=J*M,W[m]=N*T,W[g]=L,c.push(W.x,W.y,W.z),W[x]=0,W[m]=0,W[g]=y>0?1:-1,u.push(W.x,W.y,W.z),d.push(Y/b),d.push(1-X/E),V+=1}}for(let X=0;X<E;X++)for(let N=0;N<b;N++){const Y=h+N+I*X,J=h+N+I*(X+1),ne=h+(N+1)+I*(X+1),$=h+(N+1)+I*X;l.push(Y,J,$),l.push(J,ne,$),H+=6}s.addGroup(f,H,S),f+=H,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oi(o){const e={};for(const t in o){e[t]={};for(const r in o[t]){const i=o[t][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=i.clone():Array.isArray(i)?e[t][r]=i.slice():e[t][r]=i}}return e}function It(o){const e={};for(let t=0;t<o.length;t++){const r=Oi(o[t]);for(const i in r)e[i]=r[i]}return e}function Ru(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function ql(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const jl={clone:Oi,merge:It};var Pu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pt extends aa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pu,this.fragmentShader=Uu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oi(e.uniforms),this.uniformsGroups=Ru(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Kl extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const kn=new oe,zo=new et,Vo=new et;class nn extends Kl{constructor(e=50,t=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(kn.x,kn.y).multiplyScalar(-e/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(kn.x,kn.y).multiplyScalar(-e/kn.z)}getViewSize(e,t){return this.getViewBounds(e,zo,Vo),t.subVectors(Vo,zo)}setViewOffset(e,t,r,i,n,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sa*.5*this.fov)/this.zoom,r=2*t,i=this.aspect*r,n=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;n+=a.offsetX*i/l,t-=a.offsetY*r/c,i*=a.width/l,r*=a.height/c}const s=this.filmOffset;s!==0&&(n+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+i,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ei=-90,Ai=1;class Du extends Ht{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new nn(Ei,Ai,e,t);i.layers=this.layers,this.add(i);const n=new nn(Ei,Ai,e,t);n.layers=this.layers,this.add(n);const a=new nn(Ei,Ai,e,t);a.layers=this.layers,this.add(a);const s=new nn(Ei,Ai,e,t);s.layers=this.layers,this.add(s);const l=new nn(Ei,Ai,e,t);l.layers=this.layers,this.add(l);const c=new nn(Ei,Ai,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,i,n,a,s,l]=t;for(const c of t)this.remove(c);if(e===pn)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===na)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[n,a,s,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const x=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(t,n),e.setRenderTarget(r,1,i),e.render(t,a),e.setRenderTarget(r,2,i),e.render(t,s),e.setRenderTarget(r,3,i),e.render(t,l),e.setRenderTarget(r,4,i),e.render(t,c),r.texture.generateMipmaps=x,e.setRenderTarget(r,5,i),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=p,r.texture.needsPMREMUpdate=!0}}class Zl extends Et{constructor(e=[],t=Fi,r,i,n,a,s,l,c,u){super(e,t,r,i,n,a,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lu extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new Zl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xr(5,5,5),n=new Pt({name:"CubemapFromEquirect",uniforms:Oi(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kt,blending:An});n.uniforms.tEquirect.value=t;const a=new At(i,n),s=t.minFilter;return t.minFilter===ii&&(t.minFilter=vt),new Du(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,r=!0,i=!0){const n=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,r,i);e.setRenderTarget(n)}}class zr extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Iu={type:"move"};class Ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let i=null,n=null,a=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,r),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,r),n!==null&&(l.matrix.fromArray(n.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,n.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(n.linearVelocity)):l.hasLinearVelocity=!1,n.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(n.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,r),i===null&&n!==null&&(i=n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Iu)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=n!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new zr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class zs extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Fu extends Et{constructor(e=null,t=1,r=1,i,n,a,s,l,c=St,u=St,d,h){super(null,a,s,l,c,u,i,n,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nu extends on{constructor(e,t,r,i=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Wa=new oe,Ou=new oe,Bu=new Ye;class ei{constructor(e=new oe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,i){return this.normal.set(e,t,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const i=Wa.subVectors(r,t).cross(Ou.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Wa),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/i;return n<0||n>1?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Bu.getNormalMatrix(e),i=this.coplanarPoint(Wa).applyMatrix4(e),n=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new ra,ku=new et(.5,.5),Vr=new oe;class Jl{constructor(e=new ei,t=new ei,r=new ei,i=new ei,n=new ei,a=new ei){this.planes=[e,t,r,i,n,a]}set(e,t,r,i,n,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(r),s[3].copy(i),s[4].copy(n),s[5].copy(a),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=pn,r=!1){const i=this.planes,n=e.elements,a=n[0],s=n[1],l=n[2],c=n[3],u=n[4],d=n[5],h=n[6],f=n[7],p=n[8],x=n[9],m=n[10],g=n[11],M=n[12],T=n[13],A=n[14],v=n[15];if(i[0].setComponents(c-a,f-u,g-p,v-M).normalize(),i[1].setComponents(c+a,f+u,g+p,v+M).normalize(),i[2].setComponents(c+s,f+d,g+x,v+T).normalize(),i[3].setComponents(c-s,f-d,g-x,v-T).normalize(),r)i[4].setComponents(l,h,m,A).normalize(),i[5].setComponents(c-l,f-h,g-m,v-A).normalize();else if(i[4].setComponents(c-l,f-h,g-m,v-A).normalize(),t===pn)i[5].setComponents(c+l,f+h,g+m,v+A).normalize();else if(t===na)i[5].setComponents(l,h,m,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(e){Zn.center.set(0,0,0);const t=ku.distanceTo(e.center);return Zn.radius=.7071067811865476+t,Zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(e){const t=this.planes,r=e.center,i=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const i=t[r];if(Vr.x=i.normal.x>0?e.max.x:e.min.x,Vr.y=i.normal.y>0?e.max.y:e.min.y,Vr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gu extends Et{constructor(e,t,r,i,n=vt,a=vt,s,l,c){super(e,t,r,i,n,a,s,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function d(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class Ql extends Et{constructor(e,t,r=si,i,n,a,s=St,l=St,c,u=ur,d=1){if(u!==ur&&u!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,i,n,a,s,l,u,r,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new no(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $l extends Et{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ri extends xn{constructor(e=1,t=32,r=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:i},t=Math.max(3,t);const n=[],a=[],s=[],l=[],c=new oe,u=new et;a.push(0,0,0),s.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const f=r+d/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),s.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)n.push(d,d+1,0);this.setIndex(n),this.setAttribute("position",new mn(a,3)),this.setAttribute("normal",new mn(s,3)),this.setAttribute("uv",new mn(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ri(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Un extends xn{constructor(e=1,t=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:i};const n=e/2,a=t/2,s=Math.floor(r),l=Math.floor(i),c=s+1,u=l+1,d=e/s,h=t/l,f=[],p=[],x=[],m=[];for(let g=0;g<u;g++){const M=g*h-a;for(let T=0;T<c;T++){const A=T*d-n;p.push(A,-M,0),x.push(0,0,1),m.push(T/s),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<s;M++){const T=M+c*g,A=M+c*(g+1),v=M+1+c*(g+1),y=M+1+c*g;f.push(T,A,y),f.push(A,v,y)}this.setIndex(f),this.setAttribute("position",new mn(p,3)),this.setAttribute("normal",new mn(x,3)),this.setAttribute("uv",new mn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.width,e.height,e.widthSegments,e.heightSegments)}}class ec extends aa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tc extends aa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xa={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class zu{constructor(e,t,r){const i=this;let n=!1,a=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(u){s++,n===!1&&i.onStart!==void 0&&i.onStart(u,a,s),n=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,s),a===s&&(n=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Vu=new zu;class io{constructor(e){this.manager=e!==void 0?e:Vu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(i,n){r.load(e,i,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}io.DEFAULT_MATERIAL_NAME="__DEFAULT";const wi=new WeakMap;class Hu extends io{constructor(e){super(e)}load(e,t,r,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,a=Xa.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)n.manager.itemStart(e),setTimeout(function(){t&&t(a),n.manager.itemEnd(e)},0);else{let d=wi.get(a);d===void 0&&(d=[],wi.set(a,d)),d.push({onLoad:t,onError:i})}return a}const s=hr("img");function l(){u(),t&&t(this);const d=wi.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}wi.delete(this),n.manager.itemEnd(e)}function c(d){u(),i&&i(d),Xa.remove(`image:${e}`);const h=wi.get(this)||[];for(let f=0;f<h.length;f++){const p=h[f];p.onError&&p.onError(d)}wi.delete(this),n.manager.itemError(e),n.manager.itemEnd(e)}function u(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),Xa.add(`image:${e}`,s),n.manager.itemStart(e),s.src=e,s}}class Wu extends io{constructor(e){super(e)}load(e,t,r,i){const n=new Et,a=new Hu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(s){n.image=s,n.needsUpdate=!0,t!==void 0&&t(n)},r,i),n}}class Ui extends Kl{constructor(e=-1,t=1,r=1,i=-1,n=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=i,this.near=n,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,i,n,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let n=r-e,a=r+e,s=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=c*this.view.offsetX,a=n+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(n,a,s,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xu extends xn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Yu extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Ho(o,e,t,r){const i=qu(r);switch(t){case Nl:return o*e;case Bl:return o*e/i.components*i.byteLength;case Qs:return o*e/i.components*i.byteLength;case $s:return o*e*2/i.components*i.byteLength;case eo:return o*e*2/i.components*i.byteLength;case Ol:return o*e*3/i.components*i.byteLength;case an:return o*e*4/i.components*i.byteLength;case to:return o*e*4/i.components*i.byteLength;case qr:case jr:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Kr:case Zr:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ds:case ms:return Math.max(o,16)*Math.max(e,8)/4;case hs:case ps:return Math.max(o,8)*Math.max(e,8)/2;case xs:case gs:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case vs:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case _s:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ys:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Ss:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Ms:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case bs:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Ts:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Es:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case As:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case ws:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Cs:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Rs:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Ps:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Us:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Ds:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Ls:case Is:case Fs:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Ns:case Os:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Bs:case ks:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qu(o){switch(o){case Cn:case Dl:return{byteLength:1,components:1};case lr:case Ll:case Bi:return{byteLength:2,components:1};case Zs:case Js:return{byteLength:2,components:4};case si:case Ks:case Kt:return{byteLength:4,components:1};case Il:case Fl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:js}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=js);function nc(){let o=null,e=!1,t=null,r=null;function i(n,a){t(n,a),r=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(r=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){o=n}}}function ju(o){const e=new WeakMap;function t(s,l){const c=s.array,u=s.usage,d=c.byteLength,h=o.createBuffer();o.bindBuffer(l,h),o.bufferData(l,c,u),s.onUploadCallback();let f;if(c instanceof Float32Array)f=o.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=o.HALF_FLOAT;else if(c instanceof Uint16Array)s.isFloat16BufferAttribute?f=o.HALF_FLOAT:f=o.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=o.SHORT;else if(c instanceof Uint32Array)f=o.UNSIGNED_INT;else if(c instanceof Int32Array)f=o.INT;else if(c instanceof Int8Array)f=o.BYTE;else if(c instanceof Uint8Array)f=o.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:s.version,size:d}}function r(s,l,c){const u=l.array,d=l.updateRanges;if(o.bindBuffer(c,s),d.length===0)o.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){const p=d[h],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){const x=d[f];o.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function n(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=e.get(s);l&&(o.deleteBuffer(l.buffer),e.delete(s))}function a(s,l){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const u=e.get(s);(!u||u.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const c=e.get(s);if(c===void 0)e.set(s,t(s,l));else if(c.version<s.version){if(c.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,s,l),c.version=s.version}}return{get:i,remove:n,update:a}}var Ku=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zu=`#ifdef USE_ALPHAHASH
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
#endif`,Ju=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$u=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ef=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tf=`#ifdef USE_AOMAP
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
#endif`,nf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rf=`#ifdef USE_BATCHING
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
#endif`,af=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,of=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cf=`#ifdef USE_IRIDESCENCE
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
#endif`,uf=`#ifdef USE_BUMPMAP
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
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_f=`#define PI 3.141592653589793
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
} // validated`,yf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sf=`vec3 transformedNormal = objectNormal;
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
#endif`,Mf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Af="gl_FragColor = linearToOutputTexel( gl_FragColor );",wf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cf=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Pf=`#ifdef USE_ENVMAP
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
#endif`,Uf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Df=`#ifdef USE_ENVMAP
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
#endif`,Lf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,If=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ff=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Of=`#ifdef USE_GRADIENTMAP
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
}`,Bf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zf=`uniform bool receiveShadow;
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
#endif`,Vf=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,Hf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qf=`PhysicalMaterial material;
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
#endif`,jf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,Kf=`
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
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$f=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,th=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ih=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ah=`#if defined( USE_POINTS_UV )
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
#endif`,sh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ch=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fh=`#ifdef USE_MORPHTARGETS
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
#endif`,hh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ph=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vh=`#ifdef USE_NORMALMAP
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
#endif`,_h=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Th=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Eh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ah=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ch=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ph=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,Dh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ih=`float getShadowMask() {
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
}`,Fh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nh=`#ifdef USE_SKINNING
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
#endif`,Oh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bh=`#ifdef USE_SKINNING
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
#endif`,kh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hh=`#ifdef USE_TRANSMISSION
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
#endif`,Wh=`#ifdef USE_TRANSMISSION
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
#endif`,Xh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zh=`uniform sampler2D t2D;
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
}`,Jh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$h=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ed=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,td=`#include <common>
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
}`,nd=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,id=`#define DISTANCE
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
}`,rd=`#define DISTANCE
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
}`,ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,od=`uniform float scale;
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
}`,ld=`uniform vec3 diffuse;
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
}`,cd=`#include <common>
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
}`,ud=`uniform vec3 diffuse;
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
}`,fd=`#define LAMBERT
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
}`,hd=`#define LAMBERT
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
}`,dd=`#define MATCAP
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
}`,pd=`#define MATCAP
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
}`,md=`#define NORMAL
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
}`,xd=`#define NORMAL
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
}`,gd=`#define PHONG
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
}`,vd=`#define PHONG
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
}`,_d=`#define STANDARD
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
}`,yd=`#define STANDARD
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
}`,Sd=`#define TOON
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
}`,Md=`#define TOON
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
}`,bd=`uniform float size;
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
}`,Td=`uniform vec3 diffuse;
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
}`,Ed=`#include <common>
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
}`,Ad=`uniform vec3 color;
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
}`,wd=`uniform float rotation;
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
}`,Cd=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Ku,alphahash_pars_fragment:Zu,alphamap_fragment:Ju,alphamap_pars_fragment:Qu,alphatest_fragment:$u,alphatest_pars_fragment:ef,aomap_fragment:tf,aomap_pars_fragment:nf,batching_pars_vertex:rf,batching_vertex:af,begin_vertex:sf,beginnormal_vertex:of,bsdfs:lf,iridescence_fragment:cf,bumpmap_pars_fragment:uf,clipping_planes_fragment:ff,clipping_planes_pars_fragment:hf,clipping_planes_pars_vertex:df,clipping_planes_vertex:pf,color_fragment:mf,color_pars_fragment:xf,color_pars_vertex:gf,color_vertex:vf,common:_f,cube_uv_reflection_fragment:yf,defaultnormal_vertex:Sf,displacementmap_pars_vertex:Mf,displacementmap_vertex:bf,emissivemap_fragment:Tf,emissivemap_pars_fragment:Ef,colorspace_fragment:Af,colorspace_pars_fragment:wf,envmap_fragment:Cf,envmap_common_pars_fragment:Rf,envmap_pars_fragment:Pf,envmap_pars_vertex:Uf,envmap_physical_pars_fragment:Vf,envmap_vertex:Df,fog_vertex:Lf,fog_pars_vertex:If,fog_fragment:Ff,fog_pars_fragment:Nf,gradientmap_pars_fragment:Of,lightmap_pars_fragment:Bf,lights_lambert_fragment:kf,lights_lambert_pars_fragment:Gf,lights_pars_begin:zf,lights_toon_fragment:Hf,lights_toon_pars_fragment:Wf,lights_phong_fragment:Xf,lights_phong_pars_fragment:Yf,lights_physical_fragment:qf,lights_physical_pars_fragment:jf,lights_fragment_begin:Kf,lights_fragment_maps:Zf,lights_fragment_end:Jf,logdepthbuf_fragment:Qf,logdepthbuf_pars_fragment:$f,logdepthbuf_pars_vertex:eh,logdepthbuf_vertex:th,map_fragment:nh,map_pars_fragment:ih,map_particle_fragment:rh,map_particle_pars_fragment:ah,metalnessmap_fragment:sh,metalnessmap_pars_fragment:oh,morphinstance_vertex:lh,morphcolor_vertex:ch,morphnormal_vertex:uh,morphtarget_pars_vertex:fh,morphtarget_vertex:hh,normal_fragment_begin:dh,normal_fragment_maps:ph,normal_pars_fragment:mh,normal_pars_vertex:xh,normal_vertex:gh,normalmap_pars_fragment:vh,clearcoat_normal_fragment_begin:_h,clearcoat_normal_fragment_maps:yh,clearcoat_pars_fragment:Sh,iridescence_pars_fragment:Mh,opaque_fragment:bh,packing:Th,premultiplied_alpha_fragment:Eh,project_vertex:Ah,dithering_fragment:wh,dithering_pars_fragment:Ch,roughnessmap_fragment:Rh,roughnessmap_pars_fragment:Ph,shadowmap_pars_fragment:Uh,shadowmap_pars_vertex:Dh,shadowmap_vertex:Lh,shadowmask_pars_fragment:Ih,skinbase_vertex:Fh,skinning_pars_vertex:Nh,skinning_vertex:Oh,skinnormal_vertex:Bh,specularmap_fragment:kh,specularmap_pars_fragment:Gh,tonemapping_fragment:zh,tonemapping_pars_fragment:Vh,transmission_fragment:Hh,transmission_pars_fragment:Wh,uv_pars_fragment:Xh,uv_pars_vertex:Yh,uv_vertex:qh,worldpos_vertex:jh,background_vert:Kh,background_frag:Zh,backgroundCube_vert:Jh,backgroundCube_frag:Qh,cube_vert:$h,cube_frag:ed,depth_vert:td,depth_frag:nd,distanceRGBA_vert:id,distanceRGBA_frag:rd,equirect_vert:ad,equirect_frag:sd,linedashed_vert:od,linedashed_frag:ld,meshbasic_vert:cd,meshbasic_frag:ud,meshlambert_vert:fd,meshlambert_frag:hd,meshmatcap_vert:dd,meshmatcap_frag:pd,meshnormal_vert:md,meshnormal_frag:xd,meshphong_vert:gd,meshphong_frag:vd,meshphysical_vert:_d,meshphysical_frag:yd,meshtoon_vert:Sd,meshtoon_frag:Md,points_vert:bd,points_frag:Td,shadow_vert:Ed,shadow_frag:Ad,sprite_vert:wd,sprite_frag:Cd},Ie={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},hn={basic:{uniforms:It([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:It([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:It([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:It([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:It([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:It([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:It([Ie.points,Ie.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:It([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:It([Ie.common,Ie.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:It([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:It([Ie.sprite,Ie.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:It([Ie.common,Ie.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:It([Ie.lights,Ie.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};hn.physical={uniforms:It([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Hr={r:0,b:0,g:0},Jn=new Pn,Rd=new _t;function Pd(o,e,t,r,i,n,a){const s=new Je(0);let l=n===!0?0:1,c,u,d=null,h=0,f=null;function p(T){let A=T.isScene===!0?T.background:null;return A&&A.isTexture&&(A=(T.backgroundBlurriness>0?t:e).get(A)),A}function x(T){let A=!1;const v=p(T);v===null?g(s,l):v&&v.isColor&&(g(v,1),A=!0);const y=o.xr.getEnvironmentBlendMode();y==="additive"?r.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,a),(o.autoClear||A)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function m(T,A){const v=p(A);v&&(v.isCubeTexture||v.mapping===ia)?(u===void 0&&(u=new At(new xr(1,1,1),new Pt({name:"BackgroundCubeMaterial",uniforms:Oi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(y,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Jn.copy(A.backgroundRotation),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Rd.makeRotationFromEuler(Jn)),u.material.toneMapped=tt.getTransfer(v.colorSpace)!==st,(d!==v||h!==v.version||f!==o.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,f=o.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new At(new Un(2,2),new Pt({name:"BackgroundMaterial",uniforms:Oi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=tt.getTransfer(v.colorSpace)!==st,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,f=o.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function g(T,A){T.getRGB(Hr,ql(o)),r.buffers.color.setClear(Hr.r,Hr.g,Hr.b,A,a)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return s},setClearColor:function(T,A=1){s.set(T),l=A,g(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,g(s,l)},render:x,addToRenderList:m,dispose:M}}function Ud(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},i=h(null);let n=i,a=!1;function s(_,C,w,P,L){let I=!1;const O=d(P,w,C);n!==O&&(n=O,c(n.object)),I=f(_,P,w,L),I&&p(_,P,w,L),L!==null&&e.update(L,o.ELEMENT_ARRAY_BUFFER),(I||a)&&(a=!1,A(_,C,w,P),L!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return o.createVertexArray()}function c(_){return o.bindVertexArray(_)}function u(_){return o.deleteVertexArray(_)}function d(_,C,w){const P=w.wireframe===!0;let L=r[_.id];L===void 0&&(L={},r[_.id]=L);let I=L[C.id];I===void 0&&(I={},L[C.id]=I);let O=I[P];return O===void 0&&(O=h(l()),I[P]=O),O}function h(_){const C=[],w=[],P=[];for(let L=0;L<t;L++)C[L]=0,w[L]=0,P[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:w,attributeDivisors:P,object:_,attributes:{},index:null}}function f(_,C,w,P){const L=n.attributes,I=C.attributes;let O=0;const V=w.getAttributes();for(const H in V)if(V[H].location>=0){const X=L[H];let N=I[H];if(N===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(N=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(N=_.instanceColor)),X===void 0||X.attribute!==N||N&&X.data!==N.data)return!0;O++}return n.attributesNum!==O||n.index!==P}function p(_,C,w,P){const L={},I=C.attributes;let O=0;const V=w.getAttributes();for(const H in V)if(V[H].location>=0){let X=I[H];X===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(X=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(X=_.instanceColor));const N={};N.attribute=X,X&&X.data&&(N.data=X.data),L[H]=N,O++}n.attributes=L,n.attributesNum=O,n.index=P}function x(){const _=n.newAttributes;for(let C=0,w=_.length;C<w;C++)_[C]=0}function m(_){g(_,0)}function g(_,C){const w=n.newAttributes,P=n.enabledAttributes,L=n.attributeDivisors;w[_]=1,P[_]===0&&(o.enableVertexAttribArray(_),P[_]=1),L[_]!==C&&(o.vertexAttribDivisor(_,C),L[_]=C)}function M(){const _=n.newAttributes,C=n.enabledAttributes;for(let w=0,P=C.length;w<P;w++)C[w]!==_[w]&&(o.disableVertexAttribArray(w),C[w]=0)}function T(_,C,w,P,L,I,O){O===!0?o.vertexAttribIPointer(_,C,w,L,I):o.vertexAttribPointer(_,C,w,P,L,I)}function A(_,C,w,P){x();const L=P.attributes,I=w.getAttributes(),O=C.defaultAttributeValues;for(const V in I){const H=I[V];if(H.location>=0){let W=L[V];if(W===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(W=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(W=_.instanceColor)),W!==void 0){const X=W.normalized,N=W.itemSize,Y=e.get(W);if(Y===void 0)continue;const J=Y.buffer,ne=Y.type,$=Y.bytesPerElement,B=ne===o.INT||ne===o.UNSIGNED_INT||W.gpuType===Ks;if(W.isInterleavedBufferAttribute){const G=W.data,K=G.stride,me=W.offset;if(G.isInstancedInterleavedBuffer){for(let he=0;he<H.locationSize;he++)g(H.location+he,G.meshPerAttribute);_.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let he=0;he<H.locationSize;he++)m(H.location+he);o.bindBuffer(o.ARRAY_BUFFER,J);for(let he=0;he<H.locationSize;he++)T(H.location+he,N/H.locationSize,ne,X,K*$,(me+N/H.locationSize*he)*$,B)}else{if(W.isInstancedBufferAttribute){for(let G=0;G<H.locationSize;G++)g(H.location+G,W.meshPerAttribute);_.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let G=0;G<H.locationSize;G++)m(H.location+G);o.bindBuffer(o.ARRAY_BUFFER,J);for(let G=0;G<H.locationSize;G++)T(H.location+G,N/H.locationSize,ne,X,N*$,N/H.locationSize*G*$,B)}}else if(O!==void 0){const X=O[V];if(X!==void 0)switch(X.length){case 2:o.vertexAttrib2fv(H.location,X);break;case 3:o.vertexAttrib3fv(H.location,X);break;case 4:o.vertexAttrib4fv(H.location,X);break;default:o.vertexAttrib1fv(H.location,X)}}}}M()}function v(){E();for(const _ in r){const C=r[_];for(const w in C){const P=C[w];for(const L in P)u(P[L].object),delete P[L];delete C[w]}delete r[_]}}function y(_){if(r[_.id]===void 0)return;const C=r[_.id];for(const w in C){const P=C[w];for(const L in P)u(P[L].object),delete P[L];delete C[w]}delete r[_.id]}function b(_){for(const C in r){const w=r[C];if(w[_.id]===void 0)continue;const P=w[_.id];for(const L in P)u(P[L].object),delete P[L];delete w[_.id]}}function E(){S(),a=!0,n!==i&&(n=i,c(n.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:E,resetDefaultState:S,dispose:v,releaseStatesOfGeometry:y,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function Dd(o,e,t){let r;function i(c){r=c}function n(c,u){o.drawArrays(r,c,u),t.update(u,r,1)}function a(c,u,d){d!==0&&(o.drawArraysInstanced(r,c,u,d),t.update(u,r,d))}function s(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,u,0,d);let f=0;for(let p=0;p<d;p++)f+=u[p];t.update(f,r,1)}function l(c,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)a(c[p],u[p],h[p]);else{f.multiDrawArraysInstancedWEBGL(r,c,0,u,0,h,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x]*h[x];t.update(p,r,1)}}this.setMode=i,this.render=n,this.renderInstances=a,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function Ld(o,e,t,r){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=o.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){return!(b!==an&&r.convert(b)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(b){const E=b===Bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Cn&&r.convert(b)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Kt&&!E)}function l(b){if(b==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),p=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=o.getParameter(o.MAX_TEXTURE_SIZE),m=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),M=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),T=o.getParameter(o.MAX_VARYING_VECTORS),A=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,y=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:s,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:A,vertexTextures:v,maxSamples:y}}function Id(o){const e=this;let t=null,r=0,i=!1,n=!1;const a=new ei,s=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||r!==0||i;return i=h,r=d.length,f},this.beginShadows=function(){n=!0,u(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=o.get(d);if(!i||p===null||p.length===0||n&&!m)n?u(null):c();else{const M=n?0:r,T=M*4;let A=g.clippingState||null;l.value=A,A=u(p,h,T,f);for(let v=0;v!==T;++v)A[v]=t[v];g.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(d,h,f,p){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,p!==!0||m===null){const g=f+x*4,M=h.matrixWorldInverse;s.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let T=0,A=f;T!==x;++T,A+=4)a.copy(d[T]).applyMatrix4(M,s),a.normal.toArray(m,A),m[A+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Fd(o){let e=new WeakMap;function t(a,s){return s===cs?a.mapping=Fi:s===us&&(a.mapping=Ni),a}function r(a){if(a&&a.isTexture){const s=a.mapping;if(s===cs||s===us)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Lu(l.height);return c.fromEquirectangularTexture(o,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const s=a.target;s.removeEventListener("dispose",i);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function n(){e=new WeakMap}return{get:r,dispose:n}}const zn=4,Wo=[.125,.215,.35,.446,.526,.582],ni=20,Nd=256,tr=new Ui,Xo=new Je;let Ya=null,qa=0,ja=0,Ka=!1;const Od=new oe;class Yo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,i=100,n={}){const{size:a=256,position:s=Od}=n;Ya=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,i,l,s),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ko(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ya,qa,ja),this._renderer.xr.enabled=Ka,e.scissorTest=!1,Ci(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fi||e.mapping===Ni?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ya=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:vt,minFilter:vt,generateMipmaps:!1,type:Bi,format:an,colorSpace:oi,depthBuffer:!1},i=qo(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qo(e,t,r);const{_lodMax:n}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Bd(n)),this._blurMaterial=Gd(n,e,t),this._ggxMaterial=kd(n,e,t)}return i}_compileMaterial(e){const t=new At(new xn,e);this._renderer.compile(t,tr)}_sceneToCubeUV(e,t,r,i,n){const l=new nn(90,1,t,r),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Xo),d.toneMapping=Vn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new At(new xr,new En({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let g=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,g=!0):(m.color.copy(Xo),g=!0);for(let T=0;T<6;T++){const A=T%3;A===0?(l.up.set(0,c[T],0),l.position.set(n.x,n.y,n.z),l.lookAt(n.x+u[T],n.y,n.z)):A===1?(l.up.set(0,0,c[T]),l.position.set(n.x,n.y,n.z),l.lookAt(n.x,n.y+u[T],n.z)):(l.up.set(0,c[T],0),l.position.set(n.x,n.y,n.z),l.lookAt(n.x,n.y,n.z+u[T]));const v=this._cubeSize;Ci(i,A*v,T>2?v:0,v,v),d.setRenderTarget(i),g&&d.render(x,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=M}_textureToCubeUV(e,t){const r=this._renderer,i=e.mapping===Fi||e.mapping===Ni;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ko()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jo());const n=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=n;const s=n.uniforms;s.envMap.value=e;const l=this._cubeSize;Ci(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(a,tr)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let n=1;n<i;n++)this._applyGGXFilter(e,n-1,n);t.autoClear=r}_applyGGXFilter(e,t,r){const i=this._renderer,n=this._pingPongRenderTarget,a=this._ggxMaterial,s=this._lodMeshes[r];s.material=a;const l=a.uniforms,c=r/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=.05+c*.95,f=d*h,{_lodMax:p}=this,x=this._sizeLods[r],m=3*x*(r>p-zn?r-p+zn:0),g=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Ci(n,m,g,3*x,2*x),i.setRenderTarget(n),i.render(s,tr),l.envMap.value=n.texture,l.roughness.value=0,l.mipInt.value=p-r,Ci(e,m,g,3*x,2*x),i.setRenderTarget(e),i.render(s,tr)}_blur(e,t,r,i,n){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,r,i,"latitudinal",n),this._halfBlur(a,e,r,r,i,"longitudinal",n)}_halfBlur(e,t,r,i,n,a,s){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&dt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[i];d.material=c;const h=c.uniforms,f=this._sizeLods[r]-1,p=isFinite(n)?Math.PI/(2*f):2*Math.PI/(2*ni-1),x=n/p,m=isFinite(n)?1+Math.floor(u*x):ni;m>ni&&qe(`sigmaRadians, ${n}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ni}`);const g=[];let M=0;for(let b=0;b<ni;++b){const E=b/x,S=Math.exp(-E*E/2);g.push(S),b===0?M+=S:b<m&&(M+=2*S)}for(let b=0;b<g.length;b++)g[b]=g[b]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=g,h.latitudinal.value=a==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:T}=this;h.dTheta.value=p,h.mipInt.value=T-r;const A=this._sizeLods[i],v=3*A*(i>T-zn?i-T+zn:0),y=4*(this._cubeSize-A);Ci(t,v,y,3*A,2*A),l.setRenderTarget(t),l.render(d,tr)}}function Bd(o){const e=[],t=[],r=[];let i=o;const n=o-zn+1+Wo.length;for(let a=0;a<n;a++){const s=Math.pow(2,i);e.push(s);let l=1/s;a>o-zn?l=Wo[a-o+zn-1]:a===0&&(l=0),t.push(l);const c=1/(s-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,p=6,x=3,m=2,g=1,M=new Float32Array(x*p*f),T=new Float32Array(m*p*f),A=new Float32Array(g*p*f);for(let y=0;y<f;y++){const b=y%3*2/3-1,E=y>2?0:-1,S=[b,E,0,b+2/3,E,0,b+2/3,E+1,0,b,E,0,b+2/3,E+1,0,b,E+1,0];M.set(S,x*p*y),T.set(h,m*p*y);const _=[y,y,y,y,y,y];A.set(_,g*p*y)}const v=new xn;v.setAttribute("position",new on(M,x)),v.setAttribute("uv",new on(T,m)),v.setAttribute("faceIndex",new on(A,g)),r.push(new At(v,null)),i>zn&&i--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function qo(o,e,t){const r=new sn(o,e,t);return r.texture.mapping=ia,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ci(o,e,t,r,i){o.viewport.set(e,t,r,i),o.scissor.set(e,t,r,i)}function kd(o,e,t){return new Pt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Nd,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:sa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Gd(o,e,t){const r=new Float32Array(ni),i=new oe(0,1,0);return new Pt({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:sa(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function jo(){return new Pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sa(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Ko(){return new Pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function sa(){return`

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
	`}function zd(o){let e=new WeakMap,t=null;function r(s){if(s&&s.isTexture){const l=s.mapping,c=l===cs||l===us,u=l===Fi||l===Ni;if(c||u){let d=e.get(s);const h=d!==void 0?d.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==h)return t===null&&(t=new Yo(o)),d=c?t.fromEquirectangular(s,d):t.fromCubemap(s,d),d.texture.pmremVersion=s.pmremVersion,e.set(s,d),d.texture;if(d!==void 0)return d.texture;{const f=s.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Yo(o)),d=c?t.fromEquirectangular(s):t.fromCubemap(s),d.texture.pmremVersion=s.pmremVersion,e.set(s,d),s.addEventListener("dispose",n),d.texture):null}}}return s}function i(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function n(s){const l=s.target;l.removeEventListener("dispose",n);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:a}}function Vd(o){const e={};function t(r){if(e[r]!==void 0)return e[r];const i=o.getExtension(r);return e[r]=i,i}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const i=t(r);return i===null&&dr("WebGLRenderer: "+r+" extension not supported."),i}}}function Hd(o,e,t,r){const i={},n=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",a),delete i[h.id];const f=n.get(h);f&&(e.remove(f),n.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function s(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],o.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,p=d.attributes.position;let x=0;if(f!==null){const M=f.array;x=f.version;for(let T=0,A=M.length;T<A;T+=3){const v=M[T+0],y=M[T+1],b=M[T+2];h.push(v,y,y,b,b,v)}}else if(p!==void 0){const M=p.array;x=p.version;for(let T=0,A=M.length/3-1;T<A;T+=3){const v=T+0,y=T+1,b=T+2;h.push(v,y,y,b,b,v)}}else return;const m=new(zl(h)?Yl:Xl)(h,1);m.version=x;const g=n.get(d);g&&e.remove(g),n.set(d,m)}function u(d){const h=n.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return n.get(d)}return{get:s,update:l,getWireframeAttribute:u}}function Wd(o,e,t){let r;function i(h){r=h}let n,a;function s(h){n=h.type,a=h.bytesPerElement}function l(h,f){o.drawElements(r,f,n,h*a),t.update(f,r,1)}function c(h,f,p){p!==0&&(o.drawElementsInstanced(r,f,n,h*a,p),t.update(f,r,p))}function u(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,f,0,n,h,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];t.update(m,r,1)}function d(h,f,p,x){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h.length;g++)c(h[g]/a,f[g],x[g]);else{m.multiDrawElementsInstancedWEBGL(r,f,0,n,h,0,x,0,p);let g=0;for(let M=0;M<p;M++)g+=f[M]*x[M];t.update(g,r,1)}}this.setMode=i,this.setIndex=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Xd(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,a,s){switch(t.calls++,a){case o.TRIANGLES:t.triangles+=s*(n/3);break;case o.LINES:t.lines+=s*(n/2);break;case o.LINE_STRIP:t.lines+=s*(n-1);break;case o.LINE_LOOP:t.lines+=s*n;break;case o.POINTS:t.points+=s*n;break;default:dt("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:r}}function Yd(o,e,t){const r=new WeakMap,i=new ft;function n(a,s,l){const c=a.morphTargetInfluences,u=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,d=u!==void 0?u.length:0;let h=r.get(s);if(h===void 0||h.count!==d){let _=function(){E.dispose(),r.delete(s),s.removeEventListener("dispose",_)};var f=_;h!==void 0&&h.texture.dispose();const p=s.morphAttributes.position!==void 0,x=s.morphAttributes.normal!==void 0,m=s.morphAttributes.color!==void 0,g=s.morphAttributes.position||[],M=s.morphAttributes.normal||[],T=s.morphAttributes.color||[];let A=0;p===!0&&(A=1),x===!0&&(A=2),m===!0&&(A=3);let v=s.attributes.position.count*A,y=1;v>e.maxTextureSize&&(y=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const b=new Float32Array(v*y*4*d),E=new Vl(b,v,y,d);E.type=Kt,E.needsUpdate=!0;const S=A*4;for(let C=0;C<d;C++){const w=g[C],P=M[C],L=T[C],I=v*y*4*C;for(let O=0;O<w.count;O++){const V=O*S;p===!0&&(i.fromBufferAttribute(w,O),b[I+V+0]=i.x,b[I+V+1]=i.y,b[I+V+2]=i.z,b[I+V+3]=0),x===!0&&(i.fromBufferAttribute(P,O),b[I+V+4]=i.x,b[I+V+5]=i.y,b[I+V+6]=i.z,b[I+V+7]=0),m===!0&&(i.fromBufferAttribute(L,O),b[I+V+8]=i.x,b[I+V+9]=i.y,b[I+V+10]=i.z,b[I+V+11]=L.itemSize===4?i.w:1)}}h={count:d,texture:E,size:new et(v,y)},r.set(s,h),s.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(o,"morphTexture",a.morphTexture,t);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const x=s.morphTargetsRelative?1:1-p;l.getUniforms().setValue(o,"morphTargetBaseInfluence",x),l.getUniforms().setValue(o,"morphTargetInfluences",c)}l.getUniforms().setValue(o,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(o,"morphTargetsTextureSize",h.size)}return{update:n}}function qd(o,e,t,r){let i=new WeakMap;function n(l){const c=r.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),i.get(l)!==c&&(t.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,o.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return d}function a(){i=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:n,dispose:a}}const ic=new Et,Zo=new Ql(1,1),rc=new Vl,ac=new xu,sc=new Zl,Jo=[],Qo=[],$o=new Float32Array(16),el=new Float32Array(9),tl=new Float32Array(4);function Gi(o,e,t){const r=o[0];if(r<=0||r>0)return o;const i=e*t;let n=Jo[i];if(n===void 0&&(n=new Float32Array(i),Jo[i]=n),e!==0){r.toArray(n,0);for(let a=1,s=0;a!==e;++a)s+=t,o[a].toArray(n,s)}return n}function Mt(o,e){if(o.length!==e.length)return!1;for(let t=0,r=o.length;t<r;t++)if(o[t]!==e[t])return!1;return!0}function bt(o,e){for(let t=0,r=e.length;t<r;t++)o[t]=e[t]}function oa(o,e){let t=Qo[e];t===void 0&&(t=new Int32Array(e),Qo[e]=t);for(let r=0;r!==e;++r)t[r]=o.allocateTextureUnit();return t}function jd(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Kd(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;o.uniform2fv(this.addr,e),bt(t,e)}}function Zd(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;o.uniform3fv(this.addr,e),bt(t,e)}}function Jd(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;o.uniform4fv(this.addr,e),bt(t,e)}}function Qd(o,e){const t=this.cache,r=e.elements;if(r===void 0){if(Mt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,r))return;tl.set(r),o.uniformMatrix2fv(this.addr,!1,tl),bt(t,r)}}function $d(o,e){const t=this.cache,r=e.elements;if(r===void 0){if(Mt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,r))return;el.set(r),o.uniformMatrix3fv(this.addr,!1,el),bt(t,r)}}function ep(o,e){const t=this.cache,r=e.elements;if(r===void 0){if(Mt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,r))return;$o.set(r),o.uniformMatrix4fv(this.addr,!1,$o),bt(t,r)}}function tp(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function np(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;o.uniform2iv(this.addr,e),bt(t,e)}}function ip(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;o.uniform3iv(this.addr,e),bt(t,e)}}function rp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;o.uniform4iv(this.addr,e),bt(t,e)}}function ap(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function sp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;o.uniform2uiv(this.addr,e),bt(t,e)}}function op(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;o.uniform3uiv(this.addr,e),bt(t,e)}}function lp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;o.uniform4uiv(this.addr,e),bt(t,e)}}function cp(o,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(o.uniform1i(this.addr,i),r[0]=i);let n;this.type===o.SAMPLER_2D_SHADOW?(Zo.compareFunction=Gl,n=Zo):n=ic,t.setTexture2D(e||n,i)}function up(o,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(o.uniform1i(this.addr,i),r[0]=i),t.setTexture3D(e||ac,i)}function fp(o,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(o.uniform1i(this.addr,i),r[0]=i),t.setTextureCube(e||sc,i)}function hp(o,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(o.uniform1i(this.addr,i),r[0]=i),t.setTexture2DArray(e||rc,i)}function dp(o){switch(o){case 5126:return jd;case 35664:return Kd;case 35665:return Zd;case 35666:return Jd;case 35674:return Qd;case 35675:return $d;case 35676:return ep;case 5124:case 35670:return tp;case 35667:case 35671:return np;case 35668:case 35672:return ip;case 35669:case 35673:return rp;case 5125:return ap;case 36294:return sp;case 36295:return op;case 36296:return lp;case 35678:case 36198:case 36298:case 36306:case 35682:return cp;case 35679:case 36299:case 36307:return up;case 35680:case 36300:case 36308:case 36293:return fp;case 36289:case 36303:case 36311:case 36292:return hp}}function pp(o,e){o.uniform1fv(this.addr,e)}function mp(o,e){const t=Gi(e,this.size,2);o.uniform2fv(this.addr,t)}function xp(o,e){const t=Gi(e,this.size,3);o.uniform3fv(this.addr,t)}function gp(o,e){const t=Gi(e,this.size,4);o.uniform4fv(this.addr,t)}function vp(o,e){const t=Gi(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function _p(o,e){const t=Gi(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function yp(o,e){const t=Gi(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Sp(o,e){o.uniform1iv(this.addr,e)}function Mp(o,e){o.uniform2iv(this.addr,e)}function bp(o,e){o.uniform3iv(this.addr,e)}function Tp(o,e){o.uniform4iv(this.addr,e)}function Ep(o,e){o.uniform1uiv(this.addr,e)}function Ap(o,e){o.uniform2uiv(this.addr,e)}function wp(o,e){o.uniform3uiv(this.addr,e)}function Cp(o,e){o.uniform4uiv(this.addr,e)}function Rp(o,e,t){const r=this.cache,i=e.length,n=oa(t,i);Mt(r,n)||(o.uniform1iv(this.addr,n),bt(r,n));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||ic,n[a])}function Pp(o,e,t){const r=this.cache,i=e.length,n=oa(t,i);Mt(r,n)||(o.uniform1iv(this.addr,n),bt(r,n));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||ac,n[a])}function Up(o,e,t){const r=this.cache,i=e.length,n=oa(t,i);Mt(r,n)||(o.uniform1iv(this.addr,n),bt(r,n));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||sc,n[a])}function Dp(o,e,t){const r=this.cache,i=e.length,n=oa(t,i);Mt(r,n)||(o.uniform1iv(this.addr,n),bt(r,n));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||rc,n[a])}function Lp(o){switch(o){case 5126:return pp;case 35664:return mp;case 35665:return xp;case 35666:return gp;case 35674:return vp;case 35675:return _p;case 35676:return yp;case 5124:case 35670:return Sp;case 35667:case 35671:return Mp;case 35668:case 35672:return bp;case 35669:case 35673:return Tp;case 5125:return Ep;case 36294:return Ap;case 36295:return wp;case 36296:return Cp;case 35678:case 36198:case 36298:case 36306:case 35682:return Rp;case 35679:case 36299:case 36307:return Pp;case 35680:case 36300:case 36308:case 36293:return Up;case 36289:case 36303:case 36311:case 36292:return Dp}}class Ip{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=dp(t.type)}}class Fp{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lp(t.type)}}class Np{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const i=this.seq;for(let n=0,a=i.length;n!==a;++n){const s=i[n];s.setValue(e,t[s.id],r)}}}const Za=/(\w+)(\])?(\[|\.)?/g;function nl(o,e){o.seq.push(e),o.map[e.id]=e}function Op(o,e,t){const r=o.name,i=r.length;for(Za.lastIndex=0;;){const n=Za.exec(r),a=Za.lastIndex;let s=n[1];const l=n[2]==="]",c=n[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===i){nl(t,c===void 0?new Ip(s,o,e):new Fp(s,o,e));break}else{let d=t.map[s];d===void 0&&(d=new Np(s),nl(t,d)),t=d}}}class Jr{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const n=e.getActiveUniform(t,i),a=e.getUniformLocation(t,n.name);Op(n,a,this)}}setValue(e,t,r,i){const n=this.map[t];n!==void 0&&n.setValue(e,r,i)}setOptional(e,t,r){const i=t[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,t,r,i){for(let n=0,a=t.length;n!==a;++n){const s=t[n],l=r[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,i)}}static seqWithValue(e,t){const r=[];for(let i=0,n=e.length;i!==n;++i){const a=e[i];a.id in t&&r.push(a)}return r}}function il(o,e,t){const r=o.createShader(e);return o.shaderSource(r,t),o.compileShader(r),r}const Bp=37297;let kp=0;function Gp(o,e){const t=o.split(`
`),r=[],i=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let a=i;a<n;a++){const s=a+1;r.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return r.join(`
`)}const rl=new Ye;function zp(o){tt._getMatrix(rl,tt.workingColorSpace,o);const e=`mat3( ${rl.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(o)){case ta:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function al(o,e,t){const r=o.getShaderParameter(e,o.COMPILE_STATUS),n=(o.getShaderInfoLog(e)||"").trim();if(r&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+n+`

`+Gp(o.getShaderSource(e),s)}else return n}function Vp(o,e){const t=zp(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Hp(o,e){let t;switch(e){case Wc:t="Linear";break;case Xc:t="Reinhard";break;case Yc:t="Cineon";break;case qc:t="ACESFilmic";break;case Kc:t="AgX";break;case Zc:t="Neutral";break;case jc:t="Custom";break;default:qe("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wr=new oe;function Wp(){tt.getLuminanceCoefficients(Wr);const o=Wr.x.toFixed(4),e=Wr.y.toFixed(4),t=Wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xp(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function Yp(o){const e=[];for(const t in o){const r=o[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function qp(o,e){const t={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const n=o.getActiveAttrib(e,i),a=n.name;let s=1;n.type===o.FLOAT_MAT2&&(s=2),n.type===o.FLOAT_MAT3&&(s=3),n.type===o.FLOAT_MAT4&&(s=4),t[a]={type:n.type,location:o.getAttribLocation(e,a),locationSize:s}}return t}function ir(o){return o!==""}function sl(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ol(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vs(o){return o.replace(jp,Zp)}const Kp=new Map;function Zp(o,e){let t=Ke[e];if(t===void 0){const r=Kp.get(e);if(r!==void 0)t=Ke[r],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Vs(t)}const Jp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ll(o){return o.replace(Jp,Qp)}function Qp(o,e,t,r){let i="";for(let n=parseInt(e);n<parseInt(t);n++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return i}function cl(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $p(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Rl?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===bc?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function e0(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Fi:case Ni:e="ENVMAP_TYPE_CUBE";break;case ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function t0(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===Ni&&(e="ENVMAP_MODE_REFRACTION"),e}function n0(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Pl:e="ENVMAP_BLENDING_MULTIPLY";break;case Vc:e="ENVMAP_BLENDING_MIX";break;case Hc:e="ENVMAP_BLENDING_ADD";break}return e}function i0(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function r0(o,e,t,r){const i=o.getContext(),n=t.defines;let a=t.vertexShader,s=t.fragmentShader;const l=$p(t),c=e0(t),u=t0(t),d=n0(t),h=i0(t),f=Xp(t),p=Yp(n),x=i.createProgram();let m,g,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ir).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ir).join(`
`),g.length>0&&(g+=`
`)):(m=[cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),g=[cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Vn?Hp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Vp("linearToOutputTexel",t.outputColorSpace),Wp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ir).join(`
`)),a=Vs(a),a=sl(a,t),a=ol(a,t),s=Vs(s),s=sl(s,t),s=ol(s,t),a=ll(a),s=ll(s),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Rn?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rn?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const T=M+m+a,A=M+g+s,v=il(i,i.VERTEX_SHADER,T),y=il(i,i.FRAGMENT_SHADER,A);i.attachShader(x,v),i.attachShader(x,y),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function b(C){if(o.debug.checkShaderErrors){const w=i.getProgramInfoLog(x)||"",P=i.getShaderInfoLog(v)||"",L=i.getShaderInfoLog(y)||"",I=w.trim(),O=P.trim(),V=L.trim();let H=!0,W=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(H=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,x,v,y);else{const X=al(i,v,"vertex"),N=al(i,y,"fragment");dt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+X+`
`+N)}else I!==""?qe("WebGLProgram: Program Info Log:",I):(O===""||V==="")&&(W=!1);W&&(C.diagnostics={runnable:H,programLog:I,vertexShader:{log:O,prefix:m},fragmentShader:{log:V,prefix:g}})}i.deleteShader(v),i.deleteShader(y),E=new Jr(i,x),S=qp(i,x)}let E;this.getUniforms=function(){return E===void 0&&b(this),E};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(x,Bp)),_},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kp++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=v,this.fragmentShader=y,this}let a0=0;class s0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(t),n=this._getShaderStage(r),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(n)===!1&&(a.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new o0(e),t.set(e,r)),r}}class o0{constructor(e){this.id=a0++,this.code=e,this.usedTimes=0}}function l0(o,e,t,r,i,n,a){const s=new Hl,l=new s0,c=new Set,u=[],d=i.logarithmicDepthBuffer,h=i.vertexTextures;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,_,C,w,P){const L=w.fog,I=P.geometry,O=S.isMeshStandardMaterial?w.environment:null,V=(S.isMeshStandardMaterial?t:e).get(S.envMap||O),H=V&&V.mapping===ia?V.image.height:null,W=p[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&qe("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const X=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,N=X!==void 0?X.length:0;let Y=0;I.morphAttributes.position!==void 0&&(Y=1),I.morphAttributes.normal!==void 0&&(Y=2),I.morphAttributes.color!==void 0&&(Y=3);let J,ne,$,B;if(W){const We=hn[W];J=We.vertexShader,ne=We.fragmentShader}else J=S.vertexShader,ne=S.fragmentShader,l.update(S),$=l.getVertexShaderID(S),B=l.getFragmentShaderID(S);const G=o.getRenderTarget(),K=o.state.buffers.depth.getReversed(),me=P.isInstancedMesh===!0,he=P.isBatchedMesh===!0,ce=!!S.map,ue=!!S.matcap,De=!!V,Fe=!!S.aoMap,F=!!S.lightMap,Te=!!S.bumpMap,Ue=!!S.normalMap,ge=!!S.displacementMap,le=!!S.emissiveMap,Ae=!!S.metalnessMap,ee=!!S.roughnessMap,Se=S.anisotropy>0,U=S.clearcoat>0,R=S.dispersion>0,z=S.iridescence>0,ie=S.sheen>0,te=S.transmission>0,j=Se&&!!S.anisotropyMap,_e=U&&!!S.clearcoatMap,xe=U&&!!S.clearcoatNormalMap,Ce=U&&!!S.clearcoatRoughnessMap,we=z&&!!S.iridescenceMap,se=z&&!!S.iridescenceThicknessMap,fe=ie&&!!S.sheenColorMap,ye=ie&&!!S.sheenRoughnessMap,Re=!!S.specularMap,Me=!!S.specularColorMap,Ge=!!S.specularIntensityMap,k=te&&!!S.transmissionMap,de=te&&!!S.thicknessMap,ve=!!S.gradientMap,Ee=!!S.alphaMap,pe=S.alphaTest>0,re=!!S.alphaHash,Pe=!!S.extensions;let Ne=Vn;S.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ne=o.toneMapping);const Be={shaderID:W,shaderType:S.type,shaderName:S.name,vertexShader:J,fragmentShader:ne,defines:S.defines,customVertexShaderID:$,customFragmentShaderID:B,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:he,batchingColor:he&&P._colorsTexture!==null,instancing:me,instancingColor:me&&P.instanceColor!==null,instancingMorph:me&&P.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:G===null?o.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:oi,alphaToCoverage:!!S.alphaToCoverage,map:ce,matcap:ue,envMap:De,envMapMode:De&&V.mapping,envMapCubeUVHeight:H,aoMap:Fe,lightMap:F,bumpMap:Te,normalMap:Ue,displacementMap:h&&ge,emissiveMap:le,normalMapObjectSpace:Ue&&S.normalMapType===eu,normalMapTangentSpace:Ue&&S.normalMapType===$c,metalnessMap:Ae,roughnessMap:ee,anisotropy:Se,anisotropyMap:j,clearcoat:U,clearcoatMap:_e,clearcoatNormalMap:xe,clearcoatRoughnessMap:Ce,dispersion:R,iridescence:z,iridescenceMap:we,iridescenceThicknessMap:se,sheen:ie,sheenColorMap:fe,sheenRoughnessMap:ye,specularMap:Re,specularColorMap:Me,specularIntensityMap:Ge,transmission:te,transmissionMap:k,thicknessMap:de,gradientMap:ve,opaque:S.transparent===!1&&S.blending===Di&&S.alphaToCoverage===!1,alphaMap:Ee,alphaTest:pe,alphaHash:re,combine:S.combine,mapUv:ce&&x(S.map.channel),aoMapUv:Fe&&x(S.aoMap.channel),lightMapUv:F&&x(S.lightMap.channel),bumpMapUv:Te&&x(S.bumpMap.channel),normalMapUv:Ue&&x(S.normalMap.channel),displacementMapUv:ge&&x(S.displacementMap.channel),emissiveMapUv:le&&x(S.emissiveMap.channel),metalnessMapUv:Ae&&x(S.metalnessMap.channel),roughnessMapUv:ee&&x(S.roughnessMap.channel),anisotropyMapUv:j&&x(S.anisotropyMap.channel),clearcoatMapUv:_e&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:xe&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:se&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:ye&&x(S.sheenRoughnessMap.channel),specularMapUv:Re&&x(S.specularMap.channel),specularColorMapUv:Me&&x(S.specularColorMap.channel),specularIntensityMapUv:Ge&&x(S.specularIntensityMap.channel),transmissionMapUv:k&&x(S.transmissionMap.channel),thicknessMapUv:de&&x(S.thicknessMap.channel),alphaMapUv:Ee&&x(S.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Ue||Se),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!I.attributes.uv&&(ce||Ee),fog:!!L,useFog:S.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:K,skinning:P.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:Y,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:o.shadowMap.enabled&&C.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ne,decodeVideoTexture:ce&&S.map.isVideoTexture===!0&&tt.getTransfer(S.map.colorSpace)===st,decodeVideoTextureEmissive:le&&S.emissiveMap.isVideoTexture===!0&&tt.getTransfer(S.emissiveMap.colorSpace)===st,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===dn,flipSided:S.side===kt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Pe&&S.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&S.extensions.multiDraw===!0||he)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function g(S){const _=[];if(S.shaderID?_.push(S.shaderID):(_.push(S.customVertexShaderID),_.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)_.push(C),_.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(M(_,S),T(_,S),_.push(o.outputColorSpace)),_.push(S.customProgramCacheKey),_.join()}function M(S,_){S.push(_.precision),S.push(_.outputColorSpace),S.push(_.envMapMode),S.push(_.envMapCubeUVHeight),S.push(_.mapUv),S.push(_.alphaMapUv),S.push(_.lightMapUv),S.push(_.aoMapUv),S.push(_.bumpMapUv),S.push(_.normalMapUv),S.push(_.displacementMapUv),S.push(_.emissiveMapUv),S.push(_.metalnessMapUv),S.push(_.roughnessMapUv),S.push(_.anisotropyMapUv),S.push(_.clearcoatMapUv),S.push(_.clearcoatNormalMapUv),S.push(_.clearcoatRoughnessMapUv),S.push(_.iridescenceMapUv),S.push(_.iridescenceThicknessMapUv),S.push(_.sheenColorMapUv),S.push(_.sheenRoughnessMapUv),S.push(_.specularMapUv),S.push(_.specularColorMapUv),S.push(_.specularIntensityMapUv),S.push(_.transmissionMapUv),S.push(_.thicknessMapUv),S.push(_.combine),S.push(_.fogExp2),S.push(_.sizeAttenuation),S.push(_.morphTargetsCount),S.push(_.morphAttributeCount),S.push(_.numDirLights),S.push(_.numPointLights),S.push(_.numSpotLights),S.push(_.numSpotLightMaps),S.push(_.numHemiLights),S.push(_.numRectAreaLights),S.push(_.numDirLightShadows),S.push(_.numPointLightShadows),S.push(_.numSpotLightShadows),S.push(_.numSpotLightShadowsWithMaps),S.push(_.numLightProbes),S.push(_.shadowMapType),S.push(_.toneMapping),S.push(_.numClippingPlanes),S.push(_.numClipIntersection),S.push(_.depthPacking)}function T(S,_){s.disableAll(),_.supportsVertexTextures&&s.enable(0),_.instancing&&s.enable(1),_.instancingColor&&s.enable(2),_.instancingMorph&&s.enable(3),_.matcap&&s.enable(4),_.envMap&&s.enable(5),_.normalMapObjectSpace&&s.enable(6),_.normalMapTangentSpace&&s.enable(7),_.clearcoat&&s.enable(8),_.iridescence&&s.enable(9),_.alphaTest&&s.enable(10),_.vertexColors&&s.enable(11),_.vertexAlphas&&s.enable(12),_.vertexUv1s&&s.enable(13),_.vertexUv2s&&s.enable(14),_.vertexUv3s&&s.enable(15),_.vertexTangents&&s.enable(16),_.anisotropy&&s.enable(17),_.alphaHash&&s.enable(18),_.batching&&s.enable(19),_.dispersion&&s.enable(20),_.batchingColor&&s.enable(21),_.gradientMap&&s.enable(22),S.push(s.mask),s.disableAll(),_.fog&&s.enable(0),_.useFog&&s.enable(1),_.flatShading&&s.enable(2),_.logarithmicDepthBuffer&&s.enable(3),_.reversedDepthBuffer&&s.enable(4),_.skinning&&s.enable(5),_.morphTargets&&s.enable(6),_.morphNormals&&s.enable(7),_.morphColors&&s.enable(8),_.premultipliedAlpha&&s.enable(9),_.shadowMapEnabled&&s.enable(10),_.doubleSided&&s.enable(11),_.flipSided&&s.enable(12),_.useDepthPacking&&s.enable(13),_.dithering&&s.enable(14),_.transmission&&s.enable(15),_.sheen&&s.enable(16),_.opaque&&s.enable(17),_.pointsUvs&&s.enable(18),_.decodeVideoTexture&&s.enable(19),_.decodeVideoTextureEmissive&&s.enable(20),_.alphaToCoverage&&s.enable(21),S.push(s.mask)}function A(S){const _=p[S.type];let C;if(_){const w=hn[_];C=jl.clone(w.uniforms)}else C=S.uniforms;return C}function v(S,_){let C;for(let w=0,P=u.length;w<P;w++){const L=u[w];if(L.cacheKey===_){C=L,++C.usedTimes;break}}return C===void 0&&(C=new r0(o,_,S,n),u.push(C)),C}function y(S){if(--S.usedTimes===0){const _=u.indexOf(S);u[_]=u[u.length-1],u.pop(),S.destroy()}}function b(S){l.remove(S)}function E(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:A,acquireProgram:v,releaseProgram:y,releaseShaderCache:b,programs:u,dispose:E}}function c0(){let o=new WeakMap;function e(a){return o.has(a)}function t(a){let s=o.get(a);return s===void 0&&(s={},o.set(a,s)),s}function r(a){o.delete(a)}function i(a,s,l){o.get(a)[s]=l}function n(){o=new WeakMap}return{has:e,get:t,remove:r,update:i,dispose:n}}function u0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function ul(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function fl(){const o=[];let e=0;const t=[],r=[],i=[];function n(){e=0,t.length=0,r.length=0,i.length=0}function a(d,h,f,p,x,m){let g=o[e];return g===void 0?(g={id:d.id,object:d,geometry:h,material:f,groupOrder:p,renderOrder:d.renderOrder,z:x,group:m},o[e]=g):(g.id=d.id,g.object=d,g.geometry=h,g.material=f,g.groupOrder=p,g.renderOrder=d.renderOrder,g.z=x,g.group=m),e++,g}function s(d,h,f,p,x,m){const g=a(d,h,f,p,x,m);f.transmission>0?r.push(g):f.transparent===!0?i.push(g):t.push(g)}function l(d,h,f,p,x,m){const g=a(d,h,f,p,x,m);f.transmission>0?r.unshift(g):f.transparent===!0?i.unshift(g):t.unshift(g)}function c(d,h){t.length>1&&t.sort(d||u0),r.length>1&&r.sort(h||ul),i.length>1&&i.sort(h||ul)}function u(){for(let d=e,h=o.length;d<h;d++){const f=o[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:r,transparent:i,init:n,push:s,unshift:l,finish:u,sort:c}}function f0(){let o=new WeakMap;function e(r,i){const n=o.get(r);let a;return n===void 0?(a=new fl,o.set(r,[a])):i>=n.length?(a=new fl,n.push(a)):a=n[i],a}function t(){o=new WeakMap}return{get:e,dispose:t}}function h0(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new oe,color:new Je};break;case"SpotLight":t={position:new oe,direction:new oe,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new oe,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new oe,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return o[e.id]=t,t}}}function d0(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let p0=0;function m0(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function x0(o){const e=new h0,t=d0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new oe);const i=new oe,n=new _t,a=new _t;function s(c){let u=0,d=0,h=0;for(let S=0;S<9;S++)r.probe[S].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,M=0,T=0,A=0,v=0,y=0,b=0;c.sort(m0);for(let S=0,_=c.length;S<_;S++){const C=c[S],w=C.color,P=C.intensity,L=C.distance,I=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=w.r*P,d+=w.g*P,h+=w.b*P;else if(C.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(C.sh.coefficients[O],P);b++}else if(C.isDirectionalLight){const O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const V=C.shadow,H=t.get(C);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,r.directionalShadow[f]=H,r.directionalShadowMap[f]=I,r.directionalShadowMatrix[f]=C.shadow.matrix,M++}r.directional[f]=O,f++}else if(C.isSpotLight){const O=e.get(C);O.position.setFromMatrixPosition(C.matrixWorld),O.color.copy(w).multiplyScalar(P),O.distance=L,O.coneCos=Math.cos(C.angle),O.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),O.decay=C.decay,r.spot[x]=O;const V=C.shadow;if(C.map&&(r.spotLightMap[v]=C.map,v++,V.updateMatrices(C),C.castShadow&&y++),r.spotLightMatrix[x]=V.matrix,C.castShadow){const H=t.get(C);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,r.spotShadow[x]=H,r.spotShadowMap[x]=I,A++}x++}else if(C.isRectAreaLight){const O=e.get(C);O.color.copy(w).multiplyScalar(P),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),r.rectArea[m]=O,m++}else if(C.isPointLight){const O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),O.distance=C.distance,O.decay=C.decay,C.castShadow){const V=C.shadow,H=t.get(C);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,H.shadowCameraNear=V.camera.near,H.shadowCameraFar=V.camera.far,r.pointShadow[p]=H,r.pointShadowMap[p]=I,r.pointShadowMatrix[p]=C.shadow.matrix,T++}r.point[p]=O,p++}else if(C.isHemisphereLight){const O=e.get(C);O.skyColor.copy(C.color).multiplyScalar(P),O.groundColor.copy(C.groundColor).multiplyScalar(P),r.hemi[g]=O,g++}}m>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=d,r.ambient[2]=h;const E=r.hash;(E.directionalLength!==f||E.pointLength!==p||E.spotLength!==x||E.rectAreaLength!==m||E.hemiLength!==g||E.numDirectionalShadows!==M||E.numPointShadows!==T||E.numSpotShadows!==A||E.numSpotMaps!==v||E.numLightProbes!==b)&&(r.directional.length=f,r.spot.length=x,r.rectArea.length=m,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=A+v-y,r.spotLightMap.length=v,r.numSpotLightShadowsWithMaps=y,r.numLightProbes=b,E.directionalLength=f,E.pointLength=p,E.spotLength=x,E.rectAreaLength=m,E.hemiLength=g,E.numDirectionalShadows=M,E.numPointShadows=T,E.numSpotShadows=A,E.numSpotMaps=v,E.numLightProbes=b,r.version=p0++)}function l(c,u){let d=0,h=0,f=0,p=0,x=0;const m=u.matrixWorldInverse;for(let g=0,M=c.length;g<M;g++){const T=c[g];if(T.isDirectionalLight){const A=r.directional[d];A.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(m),d++}else if(T.isSpotLight){const A=r.spot[f];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(m),f++}else if(T.isRectAreaLight){const A=r.rectArea[p];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(m),a.identity(),n.copy(T.matrixWorld),n.premultiply(m),a.extractRotation(n),A.halfWidth.set(T.width*.5,0,0),A.halfHeight.set(0,T.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),p++}else if(T.isPointLight){const A=r.point[h];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(m),h++}else if(T.isHemisphereLight){const A=r.hemi[x];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(m),x++}}}return{setup:s,setupView:l,state:r}}function hl(o){const e=new x0(o),t=[],r=[];function i(u){c.camera=u,t.length=0,r.length=0}function n(u){t.push(u)}function a(u){r.push(u)}function s(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:s,setupLightsView:l,pushLight:n,pushShadow:a}}function g0(o){let e=new WeakMap;function t(i,n=0){const a=e.get(i);let s;return a===void 0?(s=new hl(o),e.set(i,[s])):n>=a.length?(s=new hl(o),a.push(s)):s=a[n],s}function r(){e=new WeakMap}return{get:t,dispose:r}}const v0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_0=`uniform sampler2D shadow_pass;
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
}`;function y0(o,e,t){let r=new Jl;const i=new et,n=new et,a=new ft,s=new ec({depthPacking:kl}),l=new tc,c={},u=t.maxTextureSize,d={[Hn]:kt,[kt]:Hn,[dn]:dn},h=new Pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:v0,fragmentShader:_0}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const p=new xn;p.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new At(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rl;let g=this.type;this.render=function(y,b,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const S=o.getRenderTarget(),_=o.getActiveCubeFace(),C=o.getActiveMipmapLevel(),w=o.state;w.setBlending(An),w.buffers.depth.getReversed()===!0?w.buffers.color.setClear(0,0,0,0):w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);const P=g!==bn&&this.type===bn,L=g===bn&&this.type!==bn;for(let I=0,O=y.length;I<O;I++){const V=y[I],H=V.shadow;if(H===void 0){qe("WebGLShadowMap:",V,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const W=H.getFrameExtents();if(i.multiply(W),n.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(n.x=Math.floor(u/W.x),i.x=n.x*W.x,H.mapSize.x=n.x),i.y>u&&(n.y=Math.floor(u/W.y),i.y=n.y*W.y,H.mapSize.y=n.y)),H.map===null||P===!0||L===!0){const N=this.type!==bn?{minFilter:St,magFilter:St}:{};H.map!==null&&H.map.dispose(),H.map=new sn(i.x,i.y,N),H.map.texture.name=V.name+".shadowMap",H.camera.updateProjectionMatrix()}o.setRenderTarget(H.map),o.clear();const X=H.getViewportCount();for(let N=0;N<X;N++){const Y=H.getViewport(N);a.set(n.x*Y.x,n.y*Y.y,n.x*Y.z,n.y*Y.w),w.viewport(a),H.updateMatrices(V,N),r=H.getFrustum(),A(b,E,H.camera,V,this.type)}H.isPointLightShadow!==!0&&this.type===bn&&M(H,E),H.needsUpdate=!1}g=this.type,m.needsUpdate=!1,o.setRenderTarget(S,_,C)};function M(y,b){const E=e.update(x);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new sn(i.x,i.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,o.setRenderTarget(y.mapPass),o.clear(),o.renderBufferDirect(b,null,E,h,x,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,o.setRenderTarget(y.map),o.clear(),o.renderBufferDirect(b,null,E,f,x,null)}function T(y,b,E,S){let _=null;const C=E.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(C!==void 0)_=C;else if(_=E.isPointLight===!0?l:s,o.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const w=_.uuid,P=b.uuid;let L=c[w];L===void 0&&(L={},c[w]=L);let I=L[P];I===void 0&&(I=_.clone(),L[P]=I,b.addEventListener("dispose",v)),_=I}if(_.visible=b.visible,_.wireframe=b.wireframe,S===bn?_.side=b.shadowSide!==null?b.shadowSide:b.side:_.side=b.shadowSide!==null?b.shadowSide:d[b.side],_.alphaMap=b.alphaMap,_.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,_.map=b.map,_.clipShadows=b.clipShadows,_.clippingPlanes=b.clippingPlanes,_.clipIntersection=b.clipIntersection,_.displacementMap=b.displacementMap,_.displacementScale=b.displacementScale,_.displacementBias=b.displacementBias,_.wireframeLinewidth=b.wireframeLinewidth,_.linewidth=b.linewidth,E.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const w=o.properties.get(_);w.light=E}return _}function A(y,b,E,S,_){if(y.visible===!1)return;if(y.layers.test(b.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&_===bn)&&(!y.frustumCulled||r.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,y.matrixWorld);const P=e.update(y),L=y.material;if(Array.isArray(L)){const I=P.groups;for(let O=0,V=I.length;O<V;O++){const H=I[O],W=L[H.materialIndex];if(W&&W.visible){const X=T(y,W,S,_);y.onBeforeShadow(o,y,b,E,P,X,H),o.renderBufferDirect(E,null,P,X,y,H),y.onAfterShadow(o,y,b,E,P,X,H)}}}else if(L.visible){const I=T(y,L,S,_);y.onBeforeShadow(o,y,b,E,P,I,null),o.renderBufferDirect(E,null,P,I,y,null),y.onAfterShadow(o,y,b,E,P,I,null)}}const w=y.children;for(let P=0,L=w.length;P<L;P++)A(w[P],b,E,S,_)}function v(y){y.target.removeEventListener("dispose",v);for(const E in c){const S=c[E],_=y.target.uuid;_ in S&&(S[_].dispose(),delete S[_])}}}const S0={[ns]:is,[rs]:os,[as]:ls,[Ii]:ss,[is]:ns,[os]:rs,[ls]:as,[ss]:Ii};function M0(o,e){function t(){let k=!1;const de=new ft;let ve=null;const Ee=new ft(0,0,0,0);return{setMask:function(pe){ve!==pe&&!k&&(o.colorMask(pe,pe,pe,pe),ve=pe)},setLocked:function(pe){k=pe},setClear:function(pe,re,Pe,Ne,Be){Be===!0&&(pe*=Ne,re*=Ne,Pe*=Ne),de.set(pe,re,Pe,Ne),Ee.equals(de)===!1&&(o.clearColor(pe,re,Pe,Ne),Ee.copy(de))},reset:function(){k=!1,ve=null,Ee.set(-1,0,0,0)}}}function r(){let k=!1,de=!1,ve=null,Ee=null,pe=null;return{setReversed:function(re){if(de!==re){const Pe=e.get("EXT_clip_control");re?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),de=re;const Ne=pe;pe=null,this.setClear(Ne)}},getReversed:function(){return de},setTest:function(re){re?G(o.DEPTH_TEST):K(o.DEPTH_TEST)},setMask:function(re){ve!==re&&!k&&(o.depthMask(re),ve=re)},setFunc:function(re){if(de&&(re=S0[re]),Ee!==re){switch(re){case ns:o.depthFunc(o.NEVER);break;case is:o.depthFunc(o.ALWAYS);break;case rs:o.depthFunc(o.LESS);break;case Ii:o.depthFunc(o.LEQUAL);break;case as:o.depthFunc(o.EQUAL);break;case ss:o.depthFunc(o.GEQUAL);break;case os:o.depthFunc(o.GREATER);break;case ls:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ee=re}},setLocked:function(re){k=re},setClear:function(re){pe!==re&&(de&&(re=1-re),o.clearDepth(re),pe=re)},reset:function(){k=!1,ve=null,Ee=null,pe=null,de=!1}}}function i(){let k=!1,de=null,ve=null,Ee=null,pe=null,re=null,Pe=null,Ne=null,Be=null;return{setTest:function(We){k||(We?G(o.STENCIL_TEST):K(o.STENCIL_TEST))},setMask:function(We){de!==We&&!k&&(o.stencilMask(We),de=We)},setFunc:function(We,ot,rt){(ve!==We||Ee!==ot||pe!==rt)&&(o.stencilFunc(We,ot,rt),ve=We,Ee=ot,pe=rt)},setOp:function(We,ot,rt){(re!==We||Pe!==ot||Ne!==rt)&&(o.stencilOp(We,ot,rt),re=We,Pe=ot,Ne=rt)},setLocked:function(We){k=We},setClear:function(We){Be!==We&&(o.clearStencil(We),Be=We)},reset:function(){k=!1,de=null,ve=null,Ee=null,pe=null,re=null,Pe=null,Ne=null,Be=null}}}const n=new t,a=new r,s=new i,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,f=[],p=null,x=!1,m=null,g=null,M=null,T=null,A=null,v=null,y=null,b=new Je(0,0,0),E=0,S=!1,_=null,C=null,w=null,P=null,L=null;const I=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,V=0;const H=o.getParameter(o.VERSION);H.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=V>=1):H.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=V>=2);let W=null,X={};const N=o.getParameter(o.SCISSOR_BOX),Y=o.getParameter(o.VIEWPORT),J=new ft().fromArray(N),ne=new ft().fromArray(Y);function $(k,de,ve,Ee){const pe=new Uint8Array(4),re=o.createTexture();o.bindTexture(k,re),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Pe=0;Pe<ve;Pe++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(de,0,o.RGBA,1,1,Ee,0,o.RGBA,o.UNSIGNED_BYTE,pe):o.texImage2D(de+Pe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,pe);return re}const B={};B[o.TEXTURE_2D]=$(o.TEXTURE_2D,o.TEXTURE_2D,1),B[o.TEXTURE_CUBE_MAP]=$(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[o.TEXTURE_2D_ARRAY]=$(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),B[o.TEXTURE_3D]=$(o.TEXTURE_3D,o.TEXTURE_3D,1,1),n.setClear(0,0,0,1),a.setClear(1),s.setClear(0),G(o.DEPTH_TEST),a.setFunc(Ii),Te(!1),Ue(_o),G(o.CULL_FACE),Fe(An);function G(k){u[k]!==!0&&(o.enable(k),u[k]=!0)}function K(k){u[k]!==!1&&(o.disable(k),u[k]=!1)}function me(k,de){return d[k]!==de?(o.bindFramebuffer(k,de),d[k]=de,k===o.DRAW_FRAMEBUFFER&&(d[o.FRAMEBUFFER]=de),k===o.FRAMEBUFFER&&(d[o.DRAW_FRAMEBUFFER]=de),!0):!1}function he(k,de){let ve=f,Ee=!1;if(k){ve=h.get(de),ve===void 0&&(ve=[],h.set(de,ve));const pe=k.textures;if(ve.length!==pe.length||ve[0]!==o.COLOR_ATTACHMENT0){for(let re=0,Pe=pe.length;re<Pe;re++)ve[re]=o.COLOR_ATTACHMENT0+re;ve.length=pe.length,Ee=!0}}else ve[0]!==o.BACK&&(ve[0]=o.BACK,Ee=!0);Ee&&o.drawBuffers(ve)}function ce(k){return p!==k?(o.useProgram(k),p=k,!0):!1}const ue={[ti]:o.FUNC_ADD,[Ec]:o.FUNC_SUBTRACT,[Ac]:o.FUNC_REVERSE_SUBTRACT};ue[wc]=o.MIN,ue[Cc]=o.MAX;const De={[Rc]:o.ZERO,[Pc]:o.ONE,[Uc]:o.SRC_COLOR,[es]:o.SRC_ALPHA,[Oc]:o.SRC_ALPHA_SATURATE,[Fc]:o.DST_COLOR,[Lc]:o.DST_ALPHA,[Dc]:o.ONE_MINUS_SRC_COLOR,[ts]:o.ONE_MINUS_SRC_ALPHA,[Nc]:o.ONE_MINUS_DST_COLOR,[Ic]:o.ONE_MINUS_DST_ALPHA,[Bc]:o.CONSTANT_COLOR,[kc]:o.ONE_MINUS_CONSTANT_COLOR,[Gc]:o.CONSTANT_ALPHA,[zc]:o.ONE_MINUS_CONSTANT_ALPHA};function Fe(k,de,ve,Ee,pe,re,Pe,Ne,Be,We){if(k===An){x===!0&&(K(o.BLEND),x=!1);return}if(x===!1&&(G(o.BLEND),x=!0),k!==Tc){if(k!==m||We!==S){if((g!==ti||A!==ti)&&(o.blendEquation(o.FUNC_ADD),g=ti,A=ti),We)switch(k){case Di:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case yo:o.blendFunc(o.ONE,o.ONE);break;case So:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Mo:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:dt("WebGLState: Invalid blending: ",k);break}else switch(k){case Di:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case yo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case So:dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mo:dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dt("WebGLState: Invalid blending: ",k);break}M=null,T=null,v=null,y=null,b.set(0,0,0),E=0,m=k,S=We}return}pe=pe||de,re=re||ve,Pe=Pe||Ee,(de!==g||pe!==A)&&(o.blendEquationSeparate(ue[de],ue[pe]),g=de,A=pe),(ve!==M||Ee!==T||re!==v||Pe!==y)&&(o.blendFuncSeparate(De[ve],De[Ee],De[re],De[Pe]),M=ve,T=Ee,v=re,y=Pe),(Ne.equals(b)===!1||Be!==E)&&(o.blendColor(Ne.r,Ne.g,Ne.b,Be),b.copy(Ne),E=Be),m=k,S=!1}function F(k,de){k.side===dn?K(o.CULL_FACE):G(o.CULL_FACE);let ve=k.side===kt;de&&(ve=!ve),Te(ve),k.blending===Di&&k.transparent===!1?Fe(An):Fe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),n.setMask(k.colorWrite);const Ee=k.stencilWrite;s.setTest(Ee),Ee&&(s.setMask(k.stencilWriteMask),s.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),s.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),le(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?G(o.SAMPLE_ALPHA_TO_COVERAGE):K(o.SAMPLE_ALPHA_TO_COVERAGE)}function Te(k){_!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),_=k)}function Ue(k){k!==Sc?(G(o.CULL_FACE),k!==C&&(k===_o?o.cullFace(o.BACK):k===Mc?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):K(o.CULL_FACE),C=k}function ge(k){k!==w&&(O&&o.lineWidth(k),w=k)}function le(k,de,ve){k?(G(o.POLYGON_OFFSET_FILL),(P!==de||L!==ve)&&(o.polygonOffset(de,ve),P=de,L=ve)):K(o.POLYGON_OFFSET_FILL)}function Ae(k){k?G(o.SCISSOR_TEST):K(o.SCISSOR_TEST)}function ee(k){k===void 0&&(k=o.TEXTURE0+I-1),W!==k&&(o.activeTexture(k),W=k)}function Se(k,de,ve){ve===void 0&&(W===null?ve=o.TEXTURE0+I-1:ve=W);let Ee=X[ve];Ee===void 0&&(Ee={type:void 0,texture:void 0},X[ve]=Ee),(Ee.type!==k||Ee.texture!==de)&&(W!==ve&&(o.activeTexture(ve),W=ve),o.bindTexture(k,de||B[k]),Ee.type=k,Ee.texture=de)}function U(){const k=X[W];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function R(){try{o.compressedTexImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function z(){try{o.compressedTexImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function ie(){try{o.texSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function te(){try{o.texSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function j(){try{o.compressedTexSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function _e(){try{o.compressedTexSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function xe(){try{o.texStorage2D(...arguments)}catch(k){k("WebGLState:",k)}}function Ce(){try{o.texStorage3D(...arguments)}catch(k){k("WebGLState:",k)}}function we(){try{o.texImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function se(){try{o.texImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function fe(k){J.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),J.copy(k))}function ye(k){ne.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),ne.copy(k))}function Re(k,de){let ve=c.get(de);ve===void 0&&(ve=new WeakMap,c.set(de,ve));let Ee=ve.get(k);Ee===void 0&&(Ee=o.getUniformBlockIndex(de,k.name),ve.set(k,Ee))}function Me(k,de){const Ee=c.get(de).get(k);l.get(de)!==Ee&&(o.uniformBlockBinding(de,Ee,k.__bindingPointIndex),l.set(de,Ee))}function Ge(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),a.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),u={},W=null,X={},d={},h=new WeakMap,f=[],p=null,x=!1,m=null,g=null,M=null,T=null,A=null,v=null,y=null,b=new Je(0,0,0),E=0,S=!1,_=null,C=null,w=null,P=null,L=null,J.set(0,0,o.canvas.width,o.canvas.height),ne.set(0,0,o.canvas.width,o.canvas.height),n.reset(),a.reset(),s.reset()}return{buffers:{color:n,depth:a,stencil:s},enable:G,disable:K,bindFramebuffer:me,drawBuffers:he,useProgram:ce,setBlending:Fe,setMaterial:F,setFlipSided:Te,setCullFace:Ue,setLineWidth:ge,setPolygonOffset:le,setScissorTest:Ae,activeTexture:ee,bindTexture:Se,unbindTexture:U,compressedTexImage2D:R,compressedTexImage3D:z,texImage2D:we,texImage3D:se,updateUBOMapping:Re,uniformBlockBinding:Me,texStorage2D:xe,texStorage3D:Ce,texSubImage2D:ie,texSubImage3D:te,compressedTexSubImage2D:j,compressedTexSubImage3D:_e,scissor:fe,viewport:ye,reset:Ge}}function b0(o,e,t,r,i,n,a){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(U,R){return f?new OffscreenCanvas(U,R):hr("canvas")}function x(U,R,z){let ie=1;const te=Se(U);if((te.width>z||te.height>z)&&(ie=z/Math.max(te.width,te.height)),ie<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const j=Math.floor(ie*te.width),_e=Math.floor(ie*te.height);d===void 0&&(d=p(j,_e));const xe=R?p(j,_e):d;return xe.width=j,xe.height=_e,xe.getContext("2d").drawImage(U,0,0,j,_e),qe("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+j+"x"+_e+")."),xe}else return"data"in U&&qe("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),U;return U}function m(U){return U.generateMipmaps}function g(U){o.generateMipmap(U)}function M(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function T(U,R,z,ie,te=!1){if(U!==null){if(o[U]!==void 0)return o[U];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let j=R;if(R===o.RED&&(z===o.FLOAT&&(j=o.R32F),z===o.HALF_FLOAT&&(j=o.R16F),z===o.UNSIGNED_BYTE&&(j=o.R8)),R===o.RED_INTEGER&&(z===o.UNSIGNED_BYTE&&(j=o.R8UI),z===o.UNSIGNED_SHORT&&(j=o.R16UI),z===o.UNSIGNED_INT&&(j=o.R32UI),z===o.BYTE&&(j=o.R8I),z===o.SHORT&&(j=o.R16I),z===o.INT&&(j=o.R32I)),R===o.RG&&(z===o.FLOAT&&(j=o.RG32F),z===o.HALF_FLOAT&&(j=o.RG16F),z===o.UNSIGNED_BYTE&&(j=o.RG8)),R===o.RG_INTEGER&&(z===o.UNSIGNED_BYTE&&(j=o.RG8UI),z===o.UNSIGNED_SHORT&&(j=o.RG16UI),z===o.UNSIGNED_INT&&(j=o.RG32UI),z===o.BYTE&&(j=o.RG8I),z===o.SHORT&&(j=o.RG16I),z===o.INT&&(j=o.RG32I)),R===o.RGB_INTEGER&&(z===o.UNSIGNED_BYTE&&(j=o.RGB8UI),z===o.UNSIGNED_SHORT&&(j=o.RGB16UI),z===o.UNSIGNED_INT&&(j=o.RGB32UI),z===o.BYTE&&(j=o.RGB8I),z===o.SHORT&&(j=o.RGB16I),z===o.INT&&(j=o.RGB32I)),R===o.RGBA_INTEGER&&(z===o.UNSIGNED_BYTE&&(j=o.RGBA8UI),z===o.UNSIGNED_SHORT&&(j=o.RGBA16UI),z===o.UNSIGNED_INT&&(j=o.RGBA32UI),z===o.BYTE&&(j=o.RGBA8I),z===o.SHORT&&(j=o.RGBA16I),z===o.INT&&(j=o.RGBA32I)),R===o.RGB&&(z===o.UNSIGNED_INT_5_9_9_9_REV&&(j=o.RGB9_E5),z===o.UNSIGNED_INT_10F_11F_11F_REV&&(j=o.R11F_G11F_B10F)),R===o.RGBA){const _e=te?ta:tt.getTransfer(ie);z===o.FLOAT&&(j=o.RGBA32F),z===o.HALF_FLOAT&&(j=o.RGBA16F),z===o.UNSIGNED_BYTE&&(j=_e===st?o.SRGB8_ALPHA8:o.RGBA8),z===o.UNSIGNED_SHORT_4_4_4_4&&(j=o.RGBA4),z===o.UNSIGNED_SHORT_5_5_5_1&&(j=o.RGB5_A1)}return(j===o.R16F||j===o.R32F||j===o.RG16F||j===o.RG32F||j===o.RGBA16F||j===o.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function A(U,R){let z;return U?R===null||R===si||R===cr?z=o.DEPTH24_STENCIL8:R===Kt?z=o.DEPTH32F_STENCIL8:R===lr&&(z=o.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===si||R===cr?z=o.DEPTH_COMPONENT24:R===Kt?z=o.DEPTH_COMPONENT32F:R===lr&&(z=o.DEPTH_COMPONENT16),z}function v(U,R){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==St&&U.minFilter!==vt?Math.log2(Math.max(R.width,R.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?R.mipmaps.length:1}function y(U){const R=U.target;R.removeEventListener("dispose",y),E(R),R.isVideoTexture&&u.delete(R)}function b(U){const R=U.target;R.removeEventListener("dispose",b),_(R)}function E(U){const R=r.get(U);if(R.__webglInit===void 0)return;const z=U.source,ie=h.get(z);if(ie){const te=ie[R.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(U),Object.keys(ie).length===0&&h.delete(z)}r.remove(U)}function S(U){const R=r.get(U);o.deleteTexture(R.__webglTexture);const z=U.source,ie=h.get(z);delete ie[R.__cacheKey],a.memory.textures--}function _(U){const R=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(R.__webglFramebuffer[ie]))for(let te=0;te<R.__webglFramebuffer[ie].length;te++)o.deleteFramebuffer(R.__webglFramebuffer[ie][te]);else o.deleteFramebuffer(R.__webglFramebuffer[ie]);R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer[ie])}else{if(Array.isArray(R.__webglFramebuffer))for(let ie=0;ie<R.__webglFramebuffer.length;ie++)o.deleteFramebuffer(R.__webglFramebuffer[ie]);else o.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&o.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ie=0;ie<R.__webglColorRenderbuffer.length;ie++)R.__webglColorRenderbuffer[ie]&&o.deleteRenderbuffer(R.__webglColorRenderbuffer[ie]);R.__webglDepthRenderbuffer&&o.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const z=U.textures;for(let ie=0,te=z.length;ie<te;ie++){const j=r.get(z[ie]);j.__webglTexture&&(o.deleteTexture(j.__webglTexture),a.memory.textures--),r.remove(z[ie])}r.remove(U)}let C=0;function w(){C=0}function P(){const U=C;return U>=i.maxTextures&&qe("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+i.maxTextures),C+=1,U}function L(U){const R=[];return R.push(U.wrapS),R.push(U.wrapT),R.push(U.wrapR||0),R.push(U.magFilter),R.push(U.minFilter),R.push(U.anisotropy),R.push(U.internalFormat),R.push(U.format),R.push(U.type),R.push(U.generateMipmaps),R.push(U.premultiplyAlpha),R.push(U.flipY),R.push(U.unpackAlignment),R.push(U.colorSpace),R.join()}function I(U,R){const z=r.get(U);if(U.isVideoTexture&&Ae(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&z.__version!==U.version){const ie=U.image;if(ie===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{B(z,U,R);return}}else U.isExternalTexture&&(z.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(o.TEXTURE_2D,z.__webglTexture,o.TEXTURE0+R)}function O(U,R){const z=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&z.__version!==U.version){B(z,U,R);return}else U.isExternalTexture&&(z.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(o.TEXTURE_2D_ARRAY,z.__webglTexture,o.TEXTURE0+R)}function V(U,R){const z=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&z.__version!==U.version){B(z,U,R);return}t.bindTexture(o.TEXTURE_3D,z.__webglTexture,o.TEXTURE0+R)}function H(U,R){const z=r.get(U);if(U.version>0&&z.__version!==U.version){G(z,U,R);return}t.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture,o.TEXTURE0+R)}const W={[or]:o.REPEAT,[Tn]:o.CLAMP_TO_EDGE,[fs]:o.MIRRORED_REPEAT},X={[St]:o.NEAREST,[Jc]:o.NEAREST_MIPMAP_NEAREST,[Tr]:o.NEAREST_MIPMAP_LINEAR,[vt]:o.LINEAR,[ya]:o.LINEAR_MIPMAP_NEAREST,[ii]:o.LINEAR_MIPMAP_LINEAR},N={[tu]:o.NEVER,[ou]:o.ALWAYS,[nu]:o.LESS,[Gl]:o.LEQUAL,[iu]:o.EQUAL,[su]:o.GEQUAL,[ru]:o.GREATER,[au]:o.NOTEQUAL};function Y(U,R){if(R.type===Kt&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===vt||R.magFilter===ya||R.magFilter===Tr||R.magFilter===ii||R.minFilter===vt||R.minFilter===ya||R.minFilter===Tr||R.minFilter===ii)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,W[R.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,W[R.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,W[R.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,X[R.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,X[R.minFilter]),R.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,N[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===St||R.minFilter!==Tr&&R.minFilter!==ii||R.type===Kt&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||r.get(R).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),r.get(R).__currentAnisotropy=R.anisotropy}}}function J(U,R){let z=!1;U.__webglInit===void 0&&(U.__webglInit=!0,R.addEventListener("dispose",y));const ie=R.source;let te=h.get(ie);te===void 0&&(te={},h.set(ie,te));const j=L(R);if(j!==U.__cacheKey){te[j]===void 0&&(te[j]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,z=!0),te[j].usedTimes++;const _e=te[U.__cacheKey];_e!==void 0&&(te[U.__cacheKey].usedTimes--,_e.usedTimes===0&&S(R)),U.__cacheKey=j,U.__webglTexture=te[j].texture}return z}function ne(U,R,z){return Math.floor(Math.floor(U/z)/R)}function $(U,R,z,ie){const j=U.updateRanges;if(j.length===0)t.texSubImage2D(o.TEXTURE_2D,0,0,0,R.width,R.height,z,ie,R.data);else{j.sort((se,fe)=>se.start-fe.start);let _e=0;for(let se=1;se<j.length;se++){const fe=j[_e],ye=j[se],Re=fe.start+fe.count,Me=ne(ye.start,R.width,4),Ge=ne(fe.start,R.width,4);ye.start<=Re+1&&Me===Ge&&ne(ye.start+ye.count-1,R.width,4)===Me?fe.count=Math.max(fe.count,ye.start+ye.count-fe.start):(++_e,j[_e]=ye)}j.length=_e+1;const xe=o.getParameter(o.UNPACK_ROW_LENGTH),Ce=o.getParameter(o.UNPACK_SKIP_PIXELS),we=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,R.width);for(let se=0,fe=j.length;se<fe;se++){const ye=j[se],Re=Math.floor(ye.start/4),Me=Math.ceil(ye.count/4),Ge=Re%R.width,k=Math.floor(Re/R.width),de=Me,ve=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ge),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),t.texSubImage2D(o.TEXTURE_2D,0,Ge,k,de,ve,z,ie,R.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,xe),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ce),o.pixelStorei(o.UNPACK_SKIP_ROWS,we)}}function B(U,R,z){let ie=o.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ie=o.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ie=o.TEXTURE_3D);const te=J(U,R),j=R.source;t.bindTexture(ie,U.__webglTexture,o.TEXTURE0+z);const _e=r.get(j);if(j.version!==_e.__version||te===!0){t.activeTexture(o.TEXTURE0+z);const xe=tt.getPrimaries(tt.workingColorSpace),Ce=R.colorSpace===Gn?null:tt.getPrimaries(R.colorSpace),we=R.colorSpace===Gn||xe===Ce?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let se=x(R.image,!1,i.maxTextureSize);se=ee(R,se);const fe=n.convert(R.format,R.colorSpace),ye=n.convert(R.type);let Re=T(R.internalFormat,fe,ye,R.colorSpace,R.isVideoTexture);Y(ie,R);let Me;const Ge=R.mipmaps,k=R.isVideoTexture!==!0,de=_e.__version===void 0||te===!0,ve=j.dataReady,Ee=v(R,se);if(R.isDepthTexture)Re=A(R.format===fr,R.type),de&&(k?t.texStorage2D(o.TEXTURE_2D,1,Re,se.width,se.height):t.texImage2D(o.TEXTURE_2D,0,Re,se.width,se.height,0,fe,ye,null));else if(R.isDataTexture)if(Ge.length>0){k&&de&&t.texStorage2D(o.TEXTURE_2D,Ee,Re,Ge[0].width,Ge[0].height);for(let pe=0,re=Ge.length;pe<re;pe++)Me=Ge[pe],k?ve&&t.texSubImage2D(o.TEXTURE_2D,pe,0,0,Me.width,Me.height,fe,ye,Me.data):t.texImage2D(o.TEXTURE_2D,pe,Re,Me.width,Me.height,0,fe,ye,Me.data);R.generateMipmaps=!1}else k?(de&&t.texStorage2D(o.TEXTURE_2D,Ee,Re,se.width,se.height),ve&&$(R,se,fe,ye)):t.texImage2D(o.TEXTURE_2D,0,Re,se.width,se.height,0,fe,ye,se.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){k&&de&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ee,Re,Ge[0].width,Ge[0].height,se.depth);for(let pe=0,re=Ge.length;pe<re;pe++)if(Me=Ge[pe],R.format!==an)if(fe!==null)if(k){if(ve)if(R.layerUpdates.size>0){const Pe=Ho(Me.width,Me.height,R.format,R.type);for(const Ne of R.layerUpdates){const Be=Me.data.subarray(Ne*Pe/Me.data.BYTES_PER_ELEMENT,(Ne+1)*Pe/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,Ne,Me.width,Me.height,1,fe,Be)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,0,Me.width,Me.height,se.depth,fe,Me.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,pe,Re,Me.width,Me.height,se.depth,0,Me.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?ve&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,0,Me.width,Me.height,se.depth,fe,ye,Me.data):t.texImage3D(o.TEXTURE_2D_ARRAY,pe,Re,Me.width,Me.height,se.depth,0,fe,ye,Me.data)}else{k&&de&&t.texStorage2D(o.TEXTURE_2D,Ee,Re,Ge[0].width,Ge[0].height);for(let pe=0,re=Ge.length;pe<re;pe++)Me=Ge[pe],R.format!==an?fe!==null?k?ve&&t.compressedTexSubImage2D(o.TEXTURE_2D,pe,0,0,Me.width,Me.height,fe,Me.data):t.compressedTexImage2D(o.TEXTURE_2D,pe,Re,Me.width,Me.height,0,Me.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?ve&&t.texSubImage2D(o.TEXTURE_2D,pe,0,0,Me.width,Me.height,fe,ye,Me.data):t.texImage2D(o.TEXTURE_2D,pe,Re,Me.width,Me.height,0,fe,ye,Me.data)}else if(R.isDataArrayTexture)if(k){if(de&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ee,Re,se.width,se.height,se.depth),ve)if(R.layerUpdates.size>0){const pe=Ho(se.width,se.height,R.format,R.type);for(const re of R.layerUpdates){const Pe=se.data.subarray(re*pe/se.data.BYTES_PER_ELEMENT,(re+1)*pe/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,re,se.width,se.height,1,fe,ye,Pe)}R.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,fe,ye,se.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,Re,se.width,se.height,se.depth,0,fe,ye,se.data);else if(R.isData3DTexture)k?(de&&t.texStorage3D(o.TEXTURE_3D,Ee,Re,se.width,se.height,se.depth),ve&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,fe,ye,se.data)):t.texImage3D(o.TEXTURE_3D,0,Re,se.width,se.height,se.depth,0,fe,ye,se.data);else if(R.isFramebufferTexture){if(de)if(k)t.texStorage2D(o.TEXTURE_2D,Ee,Re,se.width,se.height);else{let pe=se.width,re=se.height;for(let Pe=0;Pe<Ee;Pe++)t.texImage2D(o.TEXTURE_2D,Pe,Re,pe,re,0,fe,ye,null),pe>>=1,re>>=1}}else if(Ge.length>0){if(k&&de){const pe=Se(Ge[0]);t.texStorage2D(o.TEXTURE_2D,Ee,Re,pe.width,pe.height)}for(let pe=0,re=Ge.length;pe<re;pe++)Me=Ge[pe],k?ve&&t.texSubImage2D(o.TEXTURE_2D,pe,0,0,fe,ye,Me):t.texImage2D(o.TEXTURE_2D,pe,Re,fe,ye,Me);R.generateMipmaps=!1}else if(k){if(de){const pe=Se(se);t.texStorage2D(o.TEXTURE_2D,Ee,Re,pe.width,pe.height)}ve&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,fe,ye,se)}else t.texImage2D(o.TEXTURE_2D,0,Re,fe,ye,se);m(R)&&g(ie),_e.__version=j.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function G(U,R,z){if(R.image.length!==6)return;const ie=J(U,R),te=R.source;t.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+z);const j=r.get(te);if(te.version!==j.__version||ie===!0){t.activeTexture(o.TEXTURE0+z);const _e=tt.getPrimaries(tt.workingColorSpace),xe=R.colorSpace===Gn?null:tt.getPrimaries(R.colorSpace),Ce=R.colorSpace===Gn||_e===xe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const we=R.isCompressedTexture||R.image[0].isCompressedTexture,se=R.image[0]&&R.image[0].isDataTexture,fe=[];for(let re=0;re<6;re++)!we&&!se?fe[re]=x(R.image[re],!0,i.maxCubemapSize):fe[re]=se?R.image[re].image:R.image[re],fe[re]=ee(R,fe[re]);const ye=fe[0],Re=n.convert(R.format,R.colorSpace),Me=n.convert(R.type),Ge=T(R.internalFormat,Re,Me,R.colorSpace),k=R.isVideoTexture!==!0,de=j.__version===void 0||ie===!0,ve=te.dataReady;let Ee=v(R,ye);Y(o.TEXTURE_CUBE_MAP,R);let pe;if(we){k&&de&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Ee,Ge,ye.width,ye.height);for(let re=0;re<6;re++){pe=fe[re].mipmaps;for(let Pe=0;Pe<pe.length;Pe++){const Ne=pe[Pe];R.format!==an?Re!==null?k?ve&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,0,0,Ne.width,Ne.height,Re,Ne.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,Ge,Ne.width,Ne.height,0,Ne.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ve&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,0,0,Ne.width,Ne.height,Re,Me,Ne.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,Ge,Ne.width,Ne.height,0,Re,Me,Ne.data)}}}else{if(pe=R.mipmaps,k&&de){pe.length>0&&Ee++;const re=Se(fe[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,Ee,Ge,re.width,re.height)}for(let re=0;re<6;re++)if(se){k?ve&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,fe[re].width,fe[re].height,Re,Me,fe[re].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ge,fe[re].width,fe[re].height,0,Re,Me,fe[re].data);for(let Pe=0;Pe<pe.length;Pe++){const Be=pe[Pe].image[re].image;k?ve&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,0,0,Be.width,Be.height,Re,Me,Be.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,Ge,Be.width,Be.height,0,Re,Me,Be.data)}}else{k?ve&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Re,Me,fe[re]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ge,Re,Me,fe[re]);for(let Pe=0;Pe<pe.length;Pe++){const Ne=pe[Pe];k?ve&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,0,0,Re,Me,Ne.image[re]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,Ge,Re,Me,Ne.image[re])}}}m(R)&&g(o.TEXTURE_CUBE_MAP),j.__version=te.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function K(U,R,z,ie,te,j){const _e=n.convert(z.format,z.colorSpace),xe=n.convert(z.type),Ce=T(z.internalFormat,_e,xe,z.colorSpace),we=r.get(R),se=r.get(z);if(se.__renderTarget=R,!we.__hasExternalTextures){const fe=Math.max(1,R.width>>j),ye=Math.max(1,R.height>>j);te===o.TEXTURE_3D||te===o.TEXTURE_2D_ARRAY?t.texImage3D(te,j,Ce,fe,ye,R.depth,0,_e,xe,null):t.texImage2D(te,j,Ce,fe,ye,0,_e,xe,null)}t.bindFramebuffer(o.FRAMEBUFFER,U),le(R)?s.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ie,te,se.__webglTexture,0,ge(R)):(te===o.TEXTURE_2D||te>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ie,te,se.__webglTexture,j),t.bindFramebuffer(o.FRAMEBUFFER,null)}function me(U,R,z){if(o.bindRenderbuffer(o.RENDERBUFFER,U),R.depthBuffer){const ie=R.depthTexture,te=ie&&ie.isDepthTexture?ie.type:null,j=A(R.stencilBuffer,te),_e=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,xe=ge(R);le(R)?s.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,xe,j,R.width,R.height):z?o.renderbufferStorageMultisample(o.RENDERBUFFER,xe,j,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,j,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,_e,o.RENDERBUFFER,U)}else{const ie=R.textures;for(let te=0;te<ie.length;te++){const j=ie[te],_e=n.convert(j.format,j.colorSpace),xe=n.convert(j.type),Ce=T(j.internalFormat,_e,xe,j.colorSpace),we=ge(R);z&&le(R)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,we,Ce,R.width,R.height):le(R)?s.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,we,Ce,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,Ce,R.width,R.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function he(U,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,U),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=r.get(R.depthTexture);ie.__renderTarget=R,(!ie.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),I(R.depthTexture,0);const te=ie.__webglTexture,j=ge(R);if(R.depthTexture.format===ur)le(R)?s.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,te,0,j):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,te,0);else if(R.depthTexture.format===fr)le(R)?s.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,te,0,j):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function ce(U){const R=r.get(U),z=U.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==U.depthTexture){const ie=U.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ie){const te=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ie.removeEventListener("dispose",te)};ie.addEventListener("dispose",te),R.__depthDisposeCallback=te}R.__boundDepthTexture=ie}if(U.depthTexture&&!R.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const ie=U.texture.mipmaps;ie&&ie.length>0?he(R.__webglFramebuffer[0],U):he(R.__webglFramebuffer,U)}else if(z){R.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[ie]),R.__webglDepthbuffer[ie]===void 0)R.__webglDepthbuffer[ie]=o.createRenderbuffer(),me(R.__webglDepthbuffer[ie],U,!1);else{const te=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,j=R.__webglDepthbuffer[ie];o.bindRenderbuffer(o.RENDERBUFFER,j),o.framebufferRenderbuffer(o.FRAMEBUFFER,te,o.RENDERBUFFER,j)}}else{const ie=U.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=o.createRenderbuffer(),me(R.__webglDepthbuffer,U,!1);else{const te=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,j=R.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,j),o.framebufferRenderbuffer(o.FRAMEBUFFER,te,o.RENDERBUFFER,j)}}t.bindFramebuffer(o.FRAMEBUFFER,null)}function ue(U,R,z){const ie=r.get(U);R!==void 0&&K(ie.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),z!==void 0&&ce(U)}function De(U){const R=U.texture,z=r.get(U),ie=r.get(R);U.addEventListener("dispose",b);const te=U.textures,j=U.isWebGLCubeRenderTarget===!0,_e=te.length>1;if(_e||(ie.__webglTexture===void 0&&(ie.__webglTexture=o.createTexture()),ie.__version=R.version,a.memory.textures++),j){z.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(R.mipmaps&&R.mipmaps.length>0){z.__webglFramebuffer[xe]=[];for(let Ce=0;Ce<R.mipmaps.length;Ce++)z.__webglFramebuffer[xe][Ce]=o.createFramebuffer()}else z.__webglFramebuffer[xe]=o.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){z.__webglFramebuffer=[];for(let xe=0;xe<R.mipmaps.length;xe++)z.__webglFramebuffer[xe]=o.createFramebuffer()}else z.__webglFramebuffer=o.createFramebuffer();if(_e)for(let xe=0,Ce=te.length;xe<Ce;xe++){const we=r.get(te[xe]);we.__webglTexture===void 0&&(we.__webglTexture=o.createTexture(),a.memory.textures++)}if(U.samples>0&&le(U)===!1){z.__webglMultisampledFramebuffer=o.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let xe=0;xe<te.length;xe++){const Ce=te[xe];z.__webglColorRenderbuffer[xe]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,z.__webglColorRenderbuffer[xe]);const we=n.convert(Ce.format,Ce.colorSpace),se=n.convert(Ce.type),fe=T(Ce.internalFormat,we,se,Ce.colorSpace,U.isXRRenderTarget===!0),ye=ge(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,ye,fe,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+xe,o.RENDERBUFFER,z.__webglColorRenderbuffer[xe])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(z.__webglDepthRenderbuffer=o.createRenderbuffer(),me(z.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(j){t.bindTexture(o.TEXTURE_CUBE_MAP,ie.__webglTexture),Y(o.TEXTURE_CUBE_MAP,R);for(let xe=0;xe<6;xe++)if(R.mipmaps&&R.mipmaps.length>0)for(let Ce=0;Ce<R.mipmaps.length;Ce++)K(z.__webglFramebuffer[xe][Ce],U,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce);else K(z.__webglFramebuffer[xe],U,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);m(R)&&g(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let xe=0,Ce=te.length;xe<Ce;xe++){const we=te[xe],se=r.get(we);let fe=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(fe=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(fe,se.__webglTexture),Y(fe,we),K(z.__webglFramebuffer,U,we,o.COLOR_ATTACHMENT0+xe,fe,0),m(we)&&g(fe)}t.unbindTexture()}else{let xe=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(xe=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(xe,ie.__webglTexture),Y(xe,R),R.mipmaps&&R.mipmaps.length>0)for(let Ce=0;Ce<R.mipmaps.length;Ce++)K(z.__webglFramebuffer[Ce],U,R,o.COLOR_ATTACHMENT0,xe,Ce);else K(z.__webglFramebuffer,U,R,o.COLOR_ATTACHMENT0,xe,0);m(R)&&g(xe),t.unbindTexture()}U.depthBuffer&&ce(U)}function Fe(U){const R=U.textures;for(let z=0,ie=R.length;z<ie;z++){const te=R[z];if(m(te)){const j=M(U),_e=r.get(te).__webglTexture;t.bindTexture(j,_e),g(j),t.unbindTexture()}}}const F=[],Te=[];function Ue(U){if(U.samples>0){if(le(U)===!1){const R=U.textures,z=U.width,ie=U.height;let te=o.COLOR_BUFFER_BIT;const j=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,_e=r.get(U),xe=R.length>1;if(xe)for(let we=0;we<R.length;we++)t.bindFramebuffer(o.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,_e.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const Ce=U.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(o.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(o.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let we=0;we<R.length;we++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(te|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(te|=o.STENCIL_BUFFER_BIT)),xe){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,_e.__webglColorRenderbuffer[we]);const se=r.get(R[we]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,se,0)}o.blitFramebuffer(0,0,z,ie,0,0,z,ie,te,o.NEAREST),l===!0&&(F.length=0,Te.length=0,F.push(o.COLOR_ATTACHMENT0+we),U.depthBuffer&&U.resolveDepthBuffer===!1&&(F.push(j),Te.push(j),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Te)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,F))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),xe)for(let we=0;we<R.length;we++){t.bindFramebuffer(o.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,_e.__webglColorRenderbuffer[we]);const se=r.get(R[we]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,_e.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.TEXTURE_2D,se,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const R=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[R])}}}function ge(U){return Math.min(i.maxSamples,U.samples)}function le(U){const R=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ae(U){const R=a.render.frame;u.get(U)!==R&&(u.set(U,R),U.update())}function ee(U,R){const z=U.colorSpace,ie=U.format,te=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||z!==oi&&z!==Gn&&(tt.getTransfer(z)===st?(ie!==an||te!==Cn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dt("WebGLTextures: Unsupported texture color space:",z)),R}function Se(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=w,this.setTexture2D=I,this.setTexture2DArray=O,this.setTexture3D=V,this.setTextureCube=H,this.rebindTextures=ue,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=K,this.useMultisampledRTT=le}function T0(o,e){function t(r,i=Gn){let n;const a=tt.getTransfer(i);if(r===Cn)return o.UNSIGNED_BYTE;if(r===Zs)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Js)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Il)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Fl)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===Dl)return o.BYTE;if(r===Ll)return o.SHORT;if(r===lr)return o.UNSIGNED_SHORT;if(r===Ks)return o.INT;if(r===si)return o.UNSIGNED_INT;if(r===Kt)return o.FLOAT;if(r===Bi)return o.HALF_FLOAT;if(r===Nl)return o.ALPHA;if(r===Ol)return o.RGB;if(r===an)return o.RGBA;if(r===ur)return o.DEPTH_COMPONENT;if(r===fr)return o.DEPTH_STENCIL;if(r===Bl)return o.RED;if(r===Qs)return o.RED_INTEGER;if(r===$s)return o.RG;if(r===eo)return o.RG_INTEGER;if(r===to)return o.RGBA_INTEGER;if(r===qr||r===jr||r===Kr||r===Zr)if(a===st)if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===qr)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===jr)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Kr)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Zr)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=e.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===qr)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===jr)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Kr)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Zr)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hs||r===ds||r===ps||r===ms)if(n=e.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===hs)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ds)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ps)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ms)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xs||r===gs||r===vs)if(n=e.get("WEBGL_compressed_texture_etc"),n!==null){if(r===xs||r===gs)return a===st?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===vs)return a===st?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===_s||r===ys||r===Ss||r===Ms||r===bs||r===Ts||r===Es||r===As||r===ws||r===Cs||r===Rs||r===Ps||r===Us||r===Ds)if(n=e.get("WEBGL_compressed_texture_astc"),n!==null){if(r===_s)return a===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ys)return a===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ss)return a===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ms)return a===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===bs)return a===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ts)return a===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Es)return a===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===As)return a===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ws)return a===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Cs)return a===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Rs)return a===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ps)return a===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Us)return a===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ds)return a===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ls||r===Is||r===Fs)if(n=e.get("EXT_texture_compression_bptc"),n!==null){if(r===Ls)return a===st?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Is)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Fs)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ns||r===Os||r===Bs||r===ks)if(n=e.get("EXT_texture_compression_rgtc"),n!==null){if(r===Ns)return n.COMPRESSED_RED_RGTC1_EXT;if(r===Os)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Bs)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ks)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===cr?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:t}}const E0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A0=`
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

}`;class w0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new $l(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Pt({vertexShader:E0,fragmentShader:A0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new Un(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class C0 extends ki{constructor(e,t){super();const r=this;let i=null,n=1,a=null,s="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null;const x=typeof XRWebGLBinding<"u",m=new w0,g={},M=t.getContextAttributes();let T=null,A=null;const v=[],y=[],b=new et;let E=null;const S=new nn;S.viewport=new ft;const _=new nn;_.viewport=new ft;const C=[S,_],w=new Yu;let P=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let G=v[B];return G===void 0&&(G=new Ha,v[B]=G),G.getTargetRaySpace()},this.getControllerGrip=function(B){let G=v[B];return G===void 0&&(G=new Ha,v[B]=G),G.getGripSpace()},this.getHand=function(B){let G=v[B];return G===void 0&&(G=new Ha,v[B]=G),G.getHandSpace()};function I(B){const G=y.indexOf(B.inputSource);if(G===-1)return;const K=v[G];K!==void 0&&(K.update(B.inputSource,B.frame,c||a),K.dispatchEvent({type:B.type,data:B.inputSource}))}function O(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",V);for(let B=0;B<v.length;B++){const G=y[B];G!==null&&(y[B]=null,v[B].disconnect(G))}P=null,L=null,m.reset();for(const B in g)delete g[B];e.setRenderTarget(T),f=null,h=null,d=null,i=null,A=null,$.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(b.width,b.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){n=B,r.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){s=B,r.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",O),i.addEventListener("inputsourceschange",V),M.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(b),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,me=null,he=null;M.depth&&(he=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=M.stencil?fr:ur,me=M.stencil?cr:si);const ce={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:n};d=this.getBinding(),h=d.createProjectionLayer(ce),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new sn(h.textureWidth,h.textureHeight,{format:an,type:Cn,depthTexture:new Ql(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const K={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:n};f=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),A=new sn(f.framebufferWidth,f.framebufferHeight,{format:an,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(s),$.setContext(i),$.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(B){for(let G=0;G<B.removed.length;G++){const K=B.removed[G],me=y.indexOf(K);me>=0&&(y[me]=null,v[me].disconnect(K))}for(let G=0;G<B.added.length;G++){const K=B.added[G];let me=y.indexOf(K);if(me===-1){for(let ce=0;ce<v.length;ce++)if(ce>=y.length){y.push(K),me=ce;break}else if(y[ce]===null){y[ce]=K,me=ce;break}if(me===-1)break}const he=v[me];he&&he.connect(K)}}const H=new oe,W=new oe;function X(B,G,K){H.setFromMatrixPosition(G.matrixWorld),W.setFromMatrixPosition(K.matrixWorld);const me=H.distanceTo(W),he=G.projectionMatrix.elements,ce=K.projectionMatrix.elements,ue=he[14]/(he[10]-1),De=he[14]/(he[10]+1),Fe=(he[9]+1)/he[5],F=(he[9]-1)/he[5],Te=(he[8]-1)/he[0],Ue=(ce[8]+1)/ce[0],ge=ue*Te,le=ue*Ue,Ae=me/(-Te+Ue),ee=Ae*-Te;if(G.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(ee),B.translateZ(Ae),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),he[10]===-1)B.projectionMatrix.copy(G.projectionMatrix),B.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{const Se=ue+Ae,U=De+Ae,R=ge-ee,z=le+(me-ee),ie=Fe*De/U*Se,te=F*De/U*Se;B.projectionMatrix.makePerspective(R,z,ie,te,Se,U),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function N(B,G){G===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(G.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;let G=B.near,K=B.far;m.texture!==null&&(m.depthNear>0&&(G=m.depthNear),m.depthFar>0&&(K=m.depthFar)),w.near=_.near=S.near=G,w.far=_.far=S.far=K,(P!==w.near||L!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),P=w.near,L=w.far),w.layers.mask=B.layers.mask|6,S.layers.mask=w.layers.mask&3,_.layers.mask=w.layers.mask&5;const me=B.parent,he=w.cameras;N(w,me);for(let ce=0;ce<he.length;ce++)N(he[ce],me);he.length===2?X(w,S,_):w.projectionMatrix.copy(S.projectionMatrix),Y(B,w,me)};function Y(B,G,K){K===null?B.matrix.copy(G.matrixWorld):(B.matrix.copy(K.matrixWorld),B.matrix.invert(),B.matrix.multiply(G.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(G.projectionMatrix),B.projectionMatrixInverse.copy(G.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Gs*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(w)},this.getCameraTexture=function(B){return g[B]};let J=null;function ne(B,G){if(u=G.getViewerPose(c||a),p=G,u!==null){const K=u.views;f!==null&&(e.setRenderTargetFramebuffer(A,f.framebuffer),e.setRenderTarget(A));let me=!1;K.length!==w.cameras.length&&(w.cameras.length=0,me=!0);for(let De=0;De<K.length;De++){const Fe=K[De];let F=null;if(f!==null)F=f.getViewport(Fe);else{const Ue=d.getViewSubImage(h,Fe);F=Ue.viewport,De===0&&(e.setRenderTargetTextures(A,Ue.colorTexture,Ue.depthStencilTexture),e.setRenderTarget(A))}let Te=C[De];Te===void 0&&(Te=new nn,Te.layers.enable(De),Te.viewport=new ft,C[De]=Te),Te.matrix.fromArray(Fe.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Fe.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(F.x,F.y,F.width,F.height),De===0&&(w.matrix.copy(Te.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),me===!0&&w.cameras.push(Te)}const he=i.enabledFeatures;if(he&&he.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=r.getBinding();const De=d.getDepthInformation(K[0]);De&&De.isValid&&De.texture&&m.init(De,i.renderState)}if(he&&he.includes("camera-access")&&x){e.state.unbindTexture(),d=r.getBinding();for(let De=0;De<K.length;De++){const Fe=K[De].camera;if(Fe){let F=g[Fe];F||(F=new $l,g[Fe]=F);const Te=d.getCameraImage(Fe);F.sourceTexture=Te}}}}for(let K=0;K<v.length;K++){const me=y[K],he=v[K];me!==null&&he!==void 0&&he.update(me,G,c||a)}J&&J(B,G),G.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:G}),p=null}const $=new nc;$.setAnimationLoop(ne),this.setAnimationLoop=function(B){J=B},this.dispose=function(){}}}const Qn=new Pn,R0=new _t;function P0(o,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function r(m,g){g.color.getRGB(m.fogColor.value,ql(o)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,M,T,A){g.isMeshBasicMaterial||g.isMeshLambertMaterial?n(m,g):g.isMeshToonMaterial?(n(m,g),d(m,g)):g.isMeshPhongMaterial?(n(m,g),u(m,g)):g.isMeshStandardMaterial?(n(m,g),h(m,g),g.isMeshPhysicalMaterial&&f(m,g,A)):g.isMeshMatcapMaterial?(n(m,g),p(m,g)):g.isMeshDepthMaterial?n(m,g):g.isMeshDistanceMaterial?(n(m,g),x(m,g)):g.isMeshNormalMaterial?n(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&s(m,g)):g.isPointsMaterial?l(m,g,M,T):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function n(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===kt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===kt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const M=e.get(g),T=M.envMap,A=M.envMapRotation;T&&(m.envMap.value=T,Qn.copy(A),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),m.envMapRotation.value.setFromMatrix4(R0.makeRotationFromEuler(Qn)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function s(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,M,T){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=T*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,M){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===kt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const M=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function U0(o,e,t,r){let i={},n={},a=[];const s=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,T){const A=T.program;r.uniformBlockBinding(M,A)}function c(M,T){let A=i[M.id];A===void 0&&(p(M),A=u(M),i[M.id]=A,M.addEventListener("dispose",m));const v=T.program;r.updateUBOMapping(M,v);const y=e.render.frame;n[M.id]!==y&&(h(M),n[M.id]=y)}function u(M){const T=d();M.__bindingPointIndex=T;const A=o.createBuffer(),v=M.__size,y=M.usage;return o.bindBuffer(o.UNIFORM_BUFFER,A),o.bufferData(o.UNIFORM_BUFFER,v,y),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,T,A),A}function d(){for(let M=0;M<s;M++)if(a.indexOf(M)===-1)return a.push(M),M;return dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const T=i[M.id],A=M.uniforms,v=M.__cache;o.bindBuffer(o.UNIFORM_BUFFER,T);for(let y=0,b=A.length;y<b;y++){const E=Array.isArray(A[y])?A[y]:[A[y]];for(let S=0,_=E.length;S<_;S++){const C=E[S];if(f(C,y,S,v)===!0){const w=C.__offset,P=Array.isArray(C.value)?C.value:[C.value];let L=0;for(let I=0;I<P.length;I++){const O=P[I],V=x(O);typeof O=="number"||typeof O=="boolean"?(C.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,w+L,C.__data)):O.isMatrix3?(C.__data[0]=O.elements[0],C.__data[1]=O.elements[1],C.__data[2]=O.elements[2],C.__data[3]=0,C.__data[4]=O.elements[3],C.__data[5]=O.elements[4],C.__data[6]=O.elements[5],C.__data[7]=0,C.__data[8]=O.elements[6],C.__data[9]=O.elements[7],C.__data[10]=O.elements[8],C.__data[11]=0):(O.toArray(C.__data,L),L+=V.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,w,C.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(M,T,A,v){const y=M.value,b=T+"_"+A;if(v[b]===void 0)return typeof y=="number"||typeof y=="boolean"?v[b]=y:v[b]=y.clone(),!0;{const E=v[b];if(typeof y=="number"||typeof y=="boolean"){if(E!==y)return v[b]=y,!0}else if(E.equals(y)===!1)return E.copy(y),!0}return!1}function p(M){const T=M.uniforms;let A=0;const v=16;for(let b=0,E=T.length;b<E;b++){const S=Array.isArray(T[b])?T[b]:[T[b]];for(let _=0,C=S.length;_<C;_++){const w=S[_],P=Array.isArray(w.value)?w.value:[w.value];for(let L=0,I=P.length;L<I;L++){const O=P[L],V=x(O),H=A%v,W=H%V.boundary,X=H+W;A+=W,X!==0&&v-X<V.storage&&(A+=v-X),w.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=A,A+=V.storage}}}const y=A%v;return y>0&&(A+=v-y),M.__size=A,M.__cache={},this}function x(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):qe("WebGLRenderer: Unsupported uniform value type.",M),T}function m(M){const T=M.target;T.removeEventListener("dispose",m);const A=a.indexOf(T.__bindingPointIndex);a.splice(A,1),o.deleteBuffer(i[T.id]),delete i[T.id],delete n[T.id]}function g(){for(const M in i)o.deleteBuffer(i[M]);a=[],i={},n={}}return{bind:l,update:c,dispose:g}}const D0=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Mn=null;function L0(){return Mn===null&&(Mn=new Fu(D0,32,32,$s,Bi),Mn.minFilter=vt,Mn.magFilter=vt,Mn.wrapS=Tn,Mn.wrapT=Tn,Mn.generateMipmaps=!1,Mn.needsUpdate=!0),Mn}class I0{constructor(e={}){const{canvas:t=lu(),context:r=null,depth:i=!0,stencil:n=!1,alpha:a=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=r.getContextAttributes().alpha}else f=a;const p=new Set([to,eo,Qs]),x=new Set([Cn,si,lr,cr,Zs,Js]),m=new Uint32Array(4),g=new Int32Array(4);let M=null,T=null;const A=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let b=!1;this._outputColorSpace=jt;let E=0,S=0,_=null,C=-1,w=null;const P=new ft,L=new ft;let I=null;const O=new Je(0);let V=0,H=t.width,W=t.height,X=1,N=null,Y=null;const J=new ft(0,0,H,W),ne=new ft(0,0,H,W);let $=!1;const B=new Jl;let G=!1,K=!1;const me=new _t,he=new oe,ce=new ft,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function Fe(){return _===null?X:1}let F=r;function Te(D,Z){return t.getContext(D,Z)}try{const D={alpha:!0,depth:i,stencil:n,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${js}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",re,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),F===null){const Z="webgl2";if(F=Te(Z,D),F===null)throw Te(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw D("WebGLRenderer: "+D.message),D}let Ue,ge,le,Ae,ee,Se,U,R,z,ie,te,j,_e,xe,Ce,we,se,fe,ye,Re,Me,Ge,k,de;function ve(){Ue=new Vd(F),Ue.init(),Ge=new T0(F,Ue),ge=new Ld(F,Ue,e,Ge),le=new M0(F,Ue),ge.reversedDepthBuffer&&h&&le.buffers.depth.setReversed(!0),Ae=new Xd(F),ee=new c0,Se=new b0(F,Ue,le,ee,ge,Ge,Ae),U=new Fd(y),R=new zd(y),z=new ju(F),k=new Ud(F,z),ie=new Hd(F,z,Ae,k),te=new qd(F,ie,z,Ae),ye=new Yd(F,ge,Se),we=new Id(ee),j=new l0(y,U,R,Ue,ge,k,we),_e=new P0(y,ee),xe=new f0,Ce=new g0(Ue),fe=new Pd(y,U,R,le,te,f,l),se=new y0(y,te,ge),de=new U0(F,Ae,ge,le),Re=new Dd(F,Ue,Ae),Me=new Wd(F,Ue,Ae),Ae.programs=j.programs,y.capabilities=ge,y.extensions=Ue,y.properties=ee,y.renderLists=xe,y.shadowMap=se,y.state=le,y.info=Ae}ve();const Ee=new C0(y,F);this.xr=Ee,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const D=Ue.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Ue.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(D){D!==void 0&&(X=D,this.setSize(H,W,!1))},this.getSize=function(D){return D.set(H,W)},this.setSize=function(D,Z,q=!0){if(Ee.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}H=D,W=Z,t.width=Math.floor(D*X),t.height=Math.floor(Z*X),q===!0&&(t.style.width=D+"px",t.style.height=Z+"px"),this.setViewport(0,0,D,Z)},this.getDrawingBufferSize=function(D){return D.set(H*X,W*X).floor()},this.setDrawingBufferSize=function(D,Z,q){H=D,W=Z,X=q,t.width=Math.floor(D*q),t.height=Math.floor(Z*q),this.setViewport(0,0,D,Z)},this.getCurrentViewport=function(D){return D.copy(P)},this.getViewport=function(D){return D.copy(J)},this.setViewport=function(D,Z,q,ae){D.isVector4?J.set(D.x,D.y,D.z,D.w):J.set(D,Z,q,ae),le.viewport(P.copy(J).multiplyScalar(X).round())},this.getScissor=function(D){return D.copy(ne)},this.setScissor=function(D,Z,q,ae){D.isVector4?ne.set(D.x,D.y,D.z,D.w):ne.set(D,Z,q,ae),le.scissor(L.copy(ne).multiplyScalar(X).round())},this.getScissorTest=function(){return $},this.setScissorTest=function(D){le.setScissorTest($=D)},this.setOpaqueSort=function(D){N=D},this.setTransparentSort=function(D){Y=D},this.getClearColor=function(D){return D.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(D=!0,Z=!0,q=!0){let ae=0;if(D){let Q=!1;if(_!==null){const be=_.texture.format;Q=p.has(be)}if(Q){const be=_.texture.type,Le=x.has(be),ke=fe.getClearColor(),Oe=fe.getClearAlpha(),He=ke.r,Xe=ke.g,ze=ke.b;Le?(m[0]=He,m[1]=Xe,m[2]=ze,m[3]=Oe,F.clearBufferuiv(F.COLOR,0,m)):(g[0]=He,g[1]=Xe,g[2]=ze,g[3]=Oe,F.clearBufferiv(F.COLOR,0,g))}else ae|=F.COLOR_BUFFER_BIT}Z&&(ae|=F.DEPTH_BUFFER_BIT),q&&(ae|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),fe.dispose(),xe.dispose(),Ce.dispose(),ee.dispose(),U.dispose(),R.dispose(),te.dispose(),k.dispose(),de.dispose(),j.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Ft),Ee.removeEventListener("sessionend",Zt),wt.stop()};function pe(D){D.preventDefault(),Ao("WebGLRenderer: Context Lost."),b=!0}function re(){Ao("WebGLRenderer: Context Restored."),b=!1;const D=Ae.autoReset,Z=se.enabled,q=se.autoUpdate,ae=se.needsUpdate,Q=se.type;ve(),Ae.autoReset=D,se.enabled=Z,se.autoUpdate=q,se.needsUpdate=ae,se.type=Q}function Pe(D){dt("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Ne(D){const Z=D.target;Z.removeEventListener("dispose",Ne),Be(Z)}function Be(D){We(D),ee.remove(D)}function We(D){const Z=ee.get(D).programs;Z!==void 0&&(Z.forEach(function(q){j.releaseProgram(q)}),D.isShaderMaterial&&j.releaseShaderCache(D))}this.renderBufferDirect=function(D,Z,q,ae,Q,be){Z===null&&(Z=ue);const Le=Q.isMesh&&Q.matrixWorld.determinant()<0,ke=vr(D,Z,q,ae,Q);le.setMaterial(ae,Le);let Oe=q.index,He=1;if(ae.wireframe===!0){if(Oe=ie.getWireframeAttribute(q),Oe===void 0)return;He=2}const Xe=q.drawRange,ze=q.attributes.position;let je=Xe.start*He,nt=(Xe.start+Xe.count)*He;be!==null&&(je=Math.max(je,be.start*He),nt=Math.min(nt,(be.start+be.count)*He)),Oe!==null?(je=Math.max(je,0),nt=Math.min(nt,Oe.count)):ze!=null&&(je=Math.max(je,0),nt=Math.min(nt,ze.count));const lt=nt-je;if(lt<0||lt===1/0)return;k.setup(Q,ae,ke,q,Oe);let ct,$e=Re;if(Oe!==null&&(ct=z.get(Oe),$e=Me,$e.setIndex(ct)),Q.isMesh)ae.wireframe===!0?(le.setLineWidth(ae.wireframeLinewidth*Fe()),$e.setMode(F.LINES)):$e.setMode(F.TRIANGLES);else if(Q.isLine){let Ve=ae.linewidth;Ve===void 0&&(Ve=1),le.setLineWidth(Ve*Fe()),Q.isLineSegments?$e.setMode(F.LINES):Q.isLineLoop?$e.setMode(F.LINE_LOOP):$e.setMode(F.LINE_STRIP)}else Q.isPoints?$e.setMode(F.POINTS):Q.isSprite&&$e.setMode(F.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)dr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$e.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))$e.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Ve=Q._multiDrawStarts,it=Q._multiDrawCounts,Ze=Q._multiDrawCount,Ct=Oe?z.get(Oe).bytesPerElement:1,un=ee.get(ae).currentProgram.getUniforms();for(let ut=0;ut<Ze;ut++)un.setValue(F,"_gl_DrawID",ut),$e.render(Ve[ut]/Ct,it[ut])}else if(Q.isInstancedMesh)$e.renderInstances(je,lt,Q.count);else if(q.isInstancedBufferGeometry){const Ve=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,it=Math.min(q.instanceCount,Ve);$e.renderInstances(je,lt,it)}else $e.render(je,lt)};function ot(D,Z,q){D.transparent===!0&&D.side===dn&&D.forceSinglePass===!1?(D.side=kt,D.needsUpdate=!0,Wn(D,Z,q),D.side=Hn,D.needsUpdate=!0,Wn(D,Z,q),D.side=dn):Wn(D,Z,q)}this.compile=function(D,Z,q=null){q===null&&(q=D),T=Ce.get(q),T.init(Z),v.push(T),q.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),D!==q&&D.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),T.setupLights();const ae=new Set;return D.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const be=Q.material;if(be)if(Array.isArray(be))for(let Le=0;Le<be.length;Le++){const ke=be[Le];ot(ke,q,Q),ae.add(ke)}else ot(be,q,Q),ae.add(be)}),T=v.pop(),ae},this.compileAsync=function(D,Z,q=null){const ae=this.compile(D,Z,q);return new Promise(Q=>{function be(){if(ae.forEach(function(Le){ee.get(Le).currentProgram.isReady()&&ae.delete(Le)}),ae.size===0){Q(D);return}setTimeout(be,10)}Ue.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let rt=null;function ht(D){rt&&rt(D)}function Ft(){wt.stop()}function Zt(){wt.start()}const wt=new nc;wt.setAnimationLoop(ht),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(D){rt=D,Ee.setAnimationLoop(D),D===null?wt.stop():wt.start()},Ee.addEventListener("sessionstart",Ft),Ee.addEventListener("sessionend",Zt),this.render=function(D,Z){if(Z!==void 0&&Z.isCamera!==!0){dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(Z),Z=Ee.getCamera()),D.isScene===!0&&D.onBeforeRender(y,D,Z,_),T=Ce.get(D,v.length),T.init(Z),v.push(T),me.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),B.setFromProjectionMatrix(me,pn,Z.reversedDepth),K=this.localClippingEnabled,G=we.init(this.clippingPlanes,K),M=xe.get(D,A.length),M.init(),A.push(M),Ee.enabled===!0&&Ee.isPresenting===!0){const be=y.xr.getDepthSensingMesh();be!==null&&Wt(be,Z,-1/0,y.sortObjects)}Wt(D,Z,0,y.sortObjects),M.finish(),y.sortObjects===!0&&M.sort(N,Y),De=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,De&&fe.addToRenderList(M,D),this.info.render.frame++,G===!0&&we.beginShadows();const q=T.state.shadowsArray;se.render(q,D,Z),G===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=M.opaque,Q=M.transmissive;if(T.setupLights(),Z.isArrayCamera){const be=Z.cameras;if(Q.length>0)for(let Le=0,ke=be.length;Le<ke;Le++){const Oe=be[Le];Xt(ae,Q,D,Oe)}De&&fe.render(D);for(let Le=0,ke=be.length;Le<ke;Le++){const Oe=be[Le];ln(M,D,Oe,Oe.viewport)}}else Q.length>0&&Xt(ae,Q,D,Z),De&&fe.render(D),ln(M,D,Z);_!==null&&S===0&&(Se.updateMultisampleRenderTarget(_),Se.updateRenderTargetMipmap(_)),D.isScene===!0&&D.onAfterRender(y,D,Z),k.resetDefaultState(),C=-1,w=null,v.pop(),v.length>0?(T=v[v.length-1],G===!0&&we.setGlobalState(y.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?M=A[A.length-1]:M=null};function Wt(D,Z,q,ae){if(D.visible===!1)return;if(D.layers.test(Z.layers)){if(D.isGroup)q=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Z);else if(D.isLight)T.pushLight(D),D.castShadow&&T.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||B.intersectsSprite(D)){ae&&ce.setFromMatrixPosition(D.matrixWorld).applyMatrix4(me);const Le=te.update(D),ke=D.material;ke.visible&&M.push(D,Le,ke,q,ce.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||B.intersectsObject(D))){const Le=te.update(D),ke=D.material;if(ae&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),ce.copy(D.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),ce.copy(Le.boundingSphere.center)),ce.applyMatrix4(D.matrixWorld).applyMatrix4(me)),Array.isArray(ke)){const Oe=Le.groups;for(let He=0,Xe=Oe.length;He<Xe;He++){const ze=Oe[He],je=ke[ze.materialIndex];je&&je.visible&&M.push(D,Le,je,q,ce.z,ze)}}else ke.visible&&M.push(D,Le,ke,q,ce.z,null)}}const be=D.children;for(let Le=0,ke=be.length;Le<ke;Le++)Wt(be[Le],Z,q,ae)}function ln(D,Z,q,ae){const{opaque:Q,transmissive:be,transparent:Le}=D;T.setupLightsView(q),G===!0&&we.setGlobalState(y.clippingPlanes,q),ae&&le.viewport(P.copy(ae)),Q.length>0&&pt(Q,Z,q),be.length>0&&pt(be,Z,q),Le.length>0&&pt(Le,Z,q),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Xt(D,Z,q,ae){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;T.state.transmissionRenderTarget[ae.id]===void 0&&(T.state.transmissionRenderTarget[ae.id]=new sn(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?Bi:Cn,minFilter:ii,samples:4,stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const be=T.state.transmissionRenderTarget[ae.id],Le=ae.viewport||P;be.setSize(Le.z*y.transmissionResolutionScale,Le.w*y.transmissionResolutionScale);const ke=y.getRenderTarget(),Oe=y.getActiveCubeFace(),He=y.getActiveMipmapLevel();y.setRenderTarget(be),y.getClearColor(O),V=y.getClearAlpha(),V<1&&y.setClearColor(16777215,.5),y.clear(),De&&fe.render(q);const Xe=y.toneMapping;y.toneMapping=Vn;const ze=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),T.setupLightsView(ae),G===!0&&we.setGlobalState(y.clippingPlanes,ae),pt(D,q,ae),Se.updateMultisampleRenderTarget(be),Se.updateRenderTargetMipmap(be),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let nt=0,lt=Z.length;nt<lt;nt++){const ct=Z[nt],{object:$e,geometry:Ve,material:it,group:Ze}=ct;if(it.side===dn&&$e.layers.test(ae.layers)){const Ct=it.side;it.side=kt,it.needsUpdate=!0,cn($e,q,ae,Ve,it,Ze),it.side=Ct,it.needsUpdate=!0,je=!0}}je===!0&&(Se.updateMultisampleRenderTarget(be),Se.updateRenderTargetMipmap(be))}y.setRenderTarget(ke,Oe,He),y.setClearColor(O,V),ze!==void 0&&(ae.viewport=ze),y.toneMapping=Xe}function pt(D,Z,q){const ae=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,be=D.length;Q<be;Q++){const Le=D[Q],{object:ke,geometry:Oe,group:He}=Le;let Xe=Le.material;Xe.allowOverride===!0&&ae!==null&&(Xe=ae),ke.layers.test(q.layers)&&cn(ke,Z,q,Oe,Xe,He)}}function cn(D,Z,q,ae,Q,be){D.onBeforeRender(y,Z,q,ae,Q,be),D.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),Q.onBeforeRender(y,Z,q,ae,D,be),Q.transparent===!0&&Q.side===dn&&Q.forceSinglePass===!1?(Q.side=kt,Q.needsUpdate=!0,y.renderBufferDirect(q,Z,ae,Q,D,be),Q.side=Hn,Q.needsUpdate=!0,y.renderBufferDirect(q,Z,ae,Q,D,be),Q.side=dn):y.renderBufferDirect(q,Z,ae,Q,D,be),D.onAfterRender(y,Z,q,ae,Q,be)}function Wn(D,Z,q){Z.isScene!==!0&&(Z=ue);const ae=ee.get(D),Q=T.state.lights,be=T.state.shadowsArray,Le=Q.state.version,ke=j.getParameters(D,Q.state,be,Z,q),Oe=j.getProgramCacheKey(ke);let He=ae.programs;ae.environment=D.isMeshStandardMaterial?Z.environment:null,ae.fog=Z.fog,ae.envMap=(D.isMeshStandardMaterial?R:U).get(D.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&D.envMap===null?Z.environmentRotation:D.envMapRotation,He===void 0&&(D.addEventListener("dispose",Ne),He=new Map,ae.programs=He);let Xe=He.get(Oe);if(Xe!==void 0){if(ae.currentProgram===Xe&&ae.lightsStateVersion===Le)return gr(D,ke),Xe}else ke.uniforms=j.getUniforms(D),D.onBeforeCompile(ke,y),Xe=j.acquireProgram(ke,Oe),He.set(Oe,Xe),ae.uniforms=ke.uniforms;const ze=ae.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(ze.clippingPlanes=we.uniform),gr(D,ke),ae.needsLights=Vi(D),ae.lightsStateVersion=Le,ae.needsLights&&(ze.ambientLightColor.value=Q.state.ambient,ze.lightProbe.value=Q.state.probe,ze.directionalLights.value=Q.state.directional,ze.directionalLightShadows.value=Q.state.directionalShadow,ze.spotLights.value=Q.state.spot,ze.spotLightShadows.value=Q.state.spotShadow,ze.rectAreaLights.value=Q.state.rectArea,ze.ltc_1.value=Q.state.rectAreaLTC1,ze.ltc_2.value=Q.state.rectAreaLTC2,ze.pointLights.value=Q.state.point,ze.pointLightShadows.value=Q.state.pointShadow,ze.hemisphereLights.value=Q.state.hemi,ze.directionalShadowMap.value=Q.state.directionalShadowMap,ze.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,ze.spotShadowMap.value=Q.state.spotShadowMap,ze.spotLightMatrix.value=Q.state.spotLightMatrix,ze.spotLightMap.value=Q.state.spotLightMap,ze.pointShadowMap.value=Q.state.pointShadowMap,ze.pointShadowMatrix.value=Q.state.pointShadowMatrix),ae.currentProgram=Xe,ae.uniformsList=null,Xe}function ci(D){if(D.uniformsList===null){const Z=D.currentProgram.getUniforms();D.uniformsList=Jr.seqWithValue(Z.seq,D.uniforms)}return D.uniformsList}function gr(D,Z){const q=ee.get(D);q.outputColorSpace=Z.outputColorSpace,q.batching=Z.batching,q.batchingColor=Z.batchingColor,q.instancing=Z.instancing,q.instancingColor=Z.instancingColor,q.instancingMorph=Z.instancingMorph,q.skinning=Z.skinning,q.morphTargets=Z.morphTargets,q.morphNormals=Z.morphNormals,q.morphColors=Z.morphColors,q.morphTargetsCount=Z.morphTargetsCount,q.numClippingPlanes=Z.numClippingPlanes,q.numIntersection=Z.numClipIntersection,q.vertexAlphas=Z.vertexAlphas,q.vertexTangents=Z.vertexTangents,q.toneMapping=Z.toneMapping}function vr(D,Z,q,ae,Q){Z.isScene!==!0&&(Z=ue),Se.resetTextureUnits();const be=Z.fog,Le=ae.isMeshStandardMaterial?Z.environment:null,ke=_===null?y.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:oi,Oe=(ae.isMeshStandardMaterial?R:U).get(ae.envMap||Le),He=ae.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Xe=!!q.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),ze=!!q.morphAttributes.position,je=!!q.morphAttributes.normal,nt=!!q.morphAttributes.color;let lt=Vn;ae.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(lt=y.toneMapping);const ct=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,$e=ct!==void 0?ct.length:0,Ve=ee.get(ae),it=T.state.lights;if(G===!0&&(K===!0||D!==w)){const xt=D===w&&ae.id===C;we.setState(ae,D,xt)}let Ze=!1;ae.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==it.state.version||Ve.outputColorSpace!==ke||Q.isBatchedMesh&&Ve.batching===!1||!Q.isBatchedMesh&&Ve.batching===!0||Q.isBatchedMesh&&Ve.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Ve.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Ve.instancing===!1||!Q.isInstancedMesh&&Ve.instancing===!0||Q.isSkinnedMesh&&Ve.skinning===!1||!Q.isSkinnedMesh&&Ve.skinning===!0||Q.isInstancedMesh&&Ve.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ve.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ve.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ve.instancingMorph===!1&&Q.morphTexture!==null||Ve.envMap!==Oe||ae.fog===!0&&Ve.fog!==be||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==we.numPlanes||Ve.numIntersection!==we.numIntersection)||Ve.vertexAlphas!==He||Ve.vertexTangents!==Xe||Ve.morphTargets!==ze||Ve.morphNormals!==je||Ve.morphColors!==nt||Ve.toneMapping!==lt||Ve.morphTargetsCount!==$e)&&(Ze=!0):(Ze=!0,Ve.__version=ae.version);let Ct=Ve.currentProgram;Ze===!0&&(Ct=Wn(ae,Z,Q));let un=!1,ut=!1,Xn=!1;const at=Ct.getUniforms(),mt=Ve.uniforms;if(le.useProgram(Ct.program)&&(un=!0,ut=!0,Xn=!0),ae.id!==C&&(C=ae.id,ut=!0),un||w!==D){le.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),at.setValue(F,"projectionMatrix",D.projectionMatrix),at.setValue(F,"viewMatrix",D.matrixWorldInverse);const yt=at.map.cameraPosition;yt!==void 0&&yt.setValue(F,he.setFromMatrixPosition(D.matrixWorld)),ge.logarithmicDepthBuffer&&at.setValue(F,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&at.setValue(F,"isOrthographic",D.isOrthographicCamera===!0),w!==D&&(w=D,ut=!0,Xn=!0)}if(Q.isSkinnedMesh){at.setOptional(F,Q,"bindMatrix"),at.setOptional(F,Q,"bindMatrixInverse");const xt=Q.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),at.setValue(F,"boneTexture",xt.boneTexture,Se))}Q.isBatchedMesh&&(at.setOptional(F,Q,"batchingTexture"),at.setValue(F,"batchingTexture",Q._matricesTexture,Se),at.setOptional(F,Q,"batchingIdTexture"),at.setValue(F,"batchingIdTexture",Q._indirectTexture,Se),at.setOptional(F,Q,"batchingColorTexture"),Q._colorsTexture!==null&&at.setValue(F,"batchingColorTexture",Q._colorsTexture,Se));const Lt=q.morphAttributes;if((Lt.position!==void 0||Lt.normal!==void 0||Lt.color!==void 0)&&ye.update(Q,q,Ct),(ut||Ve.receiveShadow!==Q.receiveShadow)&&(Ve.receiveShadow=Q.receiveShadow,at.setValue(F,"receiveShadow",Q.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(mt.envMap.value=Oe,mt.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&Z.environment!==null&&(mt.envMapIntensity.value=Z.environmentIntensity),mt.dfgLUT!==void 0&&(mt.dfgLUT.value=L0()),ut&&(at.setValue(F,"toneMappingExposure",y.toneMappingExposure),Ve.needsLights&&ui(mt,Xn),be&&ae.fog===!0&&_e.refreshFogUniforms(mt,be),_e.refreshMaterialUniforms(mt,ae,X,W,T.state.transmissionRenderTarget[D.id]),Jr.upload(F,ci(Ve),mt,Se)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Jr.upload(F,ci(Ve),mt,Se),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&at.setValue(F,"center",Q.center),at.setValue(F,"modelViewMatrix",Q.modelViewMatrix),at.setValue(F,"normalMatrix",Q.normalMatrix),at.setValue(F,"modelMatrix",Q.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const xt=ae.uniformsGroups;for(let yt=0,Yn=xt.length;yt<Yn;yt++){const fn=xt[yt];de.update(fn,Ct),de.bind(fn,Ct)}}return Ct}function ui(D,Z){D.ambientLightColor.needsUpdate=Z,D.lightProbe.needsUpdate=Z,D.directionalLights.needsUpdate=Z,D.directionalLightShadows.needsUpdate=Z,D.pointLights.needsUpdate=Z,D.pointLightShadows.needsUpdate=Z,D.spotLights.needsUpdate=Z,D.spotLightShadows.needsUpdate=Z,D.rectAreaLights.needsUpdate=Z,D.hemisphereLights.needsUpdate=Z}function Vi(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(D,Z,q){const ae=ee.get(D);ae.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),ee.get(D.texture).__webglTexture=Z,ee.get(D.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:q,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,Z){const q=ee.get(D);q.__webglFramebuffer=Z,q.__useDefaultFramebuffer=Z===void 0};const ua=F.createFramebuffer();this.setRenderTarget=function(D,Z=0,q=0){_=D,E=Z,S=q;let ae=!0,Q=null,be=!1,Le=!1;if(D){const Oe=ee.get(D);if(Oe.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(F.FRAMEBUFFER,null),ae=!1;else if(Oe.__webglFramebuffer===void 0)Se.setupRenderTarget(D);else if(Oe.__hasExternalTextures)Se.rebindTextures(D,ee.get(D.texture).__webglTexture,ee.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const ze=D.depthTexture;if(Oe.__boundDepthTexture!==ze){if(ze!==null&&ee.has(ze)&&(D.width!==ze.image.width||D.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Se.setupDepthRenderbuffer(D)}}const He=D.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Le=!0);const Xe=ee.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Xe[Z])?Q=Xe[Z][q]:Q=Xe[Z],be=!0):D.samples>0&&Se.useMultisampledRTT(D)===!1?Q=ee.get(D).__webglMultisampledFramebuffer:Array.isArray(Xe)?Q=Xe[q]:Q=Xe,P.copy(D.viewport),L.copy(D.scissor),I=D.scissorTest}else P.copy(J).multiplyScalar(X).floor(),L.copy(ne).multiplyScalar(X).floor(),I=$;if(q!==0&&(Q=ua),le.bindFramebuffer(F.FRAMEBUFFER,Q)&&ae&&le.drawBuffers(D,Q),le.viewport(P),le.scissor(L),le.setScissorTest(I),be){const Oe=ee.get(D.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Oe.__webglTexture,q)}else if(Le){const Oe=Z;for(let He=0;He<D.textures.length;He++){const Xe=ee.get(D.textures[He]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+He,Xe.__webglTexture,q,Oe)}}else if(D!==null&&q!==0){const Oe=ee.get(D.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Oe.__webglTexture,q)}C=-1},this.readRenderTargetPixels=function(D,Z,q,ae,Q,be,Le,ke=0){if(!(D&&D.isWebGLRenderTarget)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=ee.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){le.bindFramebuffer(F.FRAMEBUFFER,Oe);try{const He=D.textures[ke],Xe=He.format,ze=He.type;if(!ge.textureFormatReadable(Xe)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(ze)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=D.width-ae&&q>=0&&q<=D.height-Q&&(D.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ke),F.readPixels(Z,q,ae,Q,Ge.convert(Xe),Ge.convert(ze),be))}finally{const He=_!==null?ee.get(_).__webglFramebuffer:null;le.bindFramebuffer(F.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(D,Z,q,ae,Q,be,Le,ke=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=ee.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe)if(Z>=0&&Z<=D.width-ae&&q>=0&&q<=D.height-Q){le.bindFramebuffer(F.FRAMEBUFFER,Oe);const He=D.textures[ke],Xe=He.format,ze=He.type;if(!ge.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,je),F.bufferData(F.PIXEL_PACK_BUFFER,be.byteLength,F.STREAM_READ),D.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ke),F.readPixels(Z,q,ae,Q,Ge.convert(Xe),Ge.convert(ze),0);const nt=_!==null?ee.get(_).__webglFramebuffer:null;le.bindFramebuffer(F.FRAMEBUFFER,nt);const lt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await cu(F,lt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,je),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,be),F.deleteBuffer(je),F.deleteSync(lt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,Z=null,q=0){const ae=Math.pow(2,-q),Q=Math.floor(D.image.width*ae),be=Math.floor(D.image.height*ae),Le=Z!==null?Z.x:0,ke=Z!==null?Z.y:0;Se.setTexture2D(D,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,Le,ke,Q,be),le.unbindTexture()};const _r=F.createFramebuffer(),fi=F.createFramebuffer();this.copyTextureToTexture=function(D,Z,q=null,ae=null,Q=0,be=null){be===null&&(Q!==0?(dr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=Q,Q=0):be=0);let Le,ke,Oe,He,Xe,ze,je,nt,lt;const ct=D.isCompressedTexture?D.mipmaps[be]:D.image;if(q!==null)Le=q.max.x-q.min.x,ke=q.max.y-q.min.y,Oe=q.isBox3?q.max.z-q.min.z:1,He=q.min.x,Xe=q.min.y,ze=q.isBox3?q.min.z:0;else{const Lt=Math.pow(2,-Q);Le=Math.floor(ct.width*Lt),ke=Math.floor(ct.height*Lt),D.isDataArrayTexture?Oe=ct.depth:D.isData3DTexture?Oe=Math.floor(ct.depth*Lt):Oe=1,He=0,Xe=0,ze=0}ae!==null?(je=ae.x,nt=ae.y,lt=ae.z):(je=0,nt=0,lt=0);const $e=Ge.convert(Z.format),Ve=Ge.convert(Z.type);let it;Z.isData3DTexture?(Se.setTexture3D(Z,0),it=F.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(Se.setTexture2DArray(Z,0),it=F.TEXTURE_2D_ARRAY):(Se.setTexture2D(Z,0),it=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Z.unpackAlignment);const Ze=F.getParameter(F.UNPACK_ROW_LENGTH),Ct=F.getParameter(F.UNPACK_IMAGE_HEIGHT),un=F.getParameter(F.UNPACK_SKIP_PIXELS),ut=F.getParameter(F.UNPACK_SKIP_ROWS),Xn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ct.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ct.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,He),F.pixelStorei(F.UNPACK_SKIP_ROWS,Xe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ze);const at=D.isDataArrayTexture||D.isData3DTexture,mt=Z.isDataArrayTexture||Z.isData3DTexture;if(D.isDepthTexture){const Lt=ee.get(D),xt=ee.get(Z),yt=ee.get(Lt.__renderTarget),Yn=ee.get(xt.__renderTarget);le.bindFramebuffer(F.READ_FRAMEBUFFER,yt.__webglFramebuffer),le.bindFramebuffer(F.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let fn=0;fn<Oe;fn++)at&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ee.get(D).__webglTexture,Q,ze+fn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ee.get(Z).__webglTexture,be,lt+fn)),F.blitFramebuffer(He,Xe,Le,ke,je,nt,Le,ke,F.DEPTH_BUFFER_BIT,F.NEAREST);le.bindFramebuffer(F.READ_FRAMEBUFFER,null),le.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Q!==0||D.isRenderTargetTexture||ee.has(D)){const Lt=ee.get(D),xt=ee.get(Z);le.bindFramebuffer(F.READ_FRAMEBUFFER,_r),le.bindFramebuffer(F.DRAW_FRAMEBUFFER,fi);for(let yt=0;yt<Oe;yt++)at?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Lt.__webglTexture,Q,ze+yt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Lt.__webglTexture,Q),mt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,xt.__webglTexture,be,lt+yt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xt.__webglTexture,be),Q!==0?F.blitFramebuffer(He,Xe,Le,ke,je,nt,Le,ke,F.COLOR_BUFFER_BIT,F.NEAREST):mt?F.copyTexSubImage3D(it,be,je,nt,lt+yt,He,Xe,Le,ke):F.copyTexSubImage2D(it,be,je,nt,He,Xe,Le,ke);le.bindFramebuffer(F.READ_FRAMEBUFFER,null),le.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else mt?D.isDataTexture||D.isData3DTexture?F.texSubImage3D(it,be,je,nt,lt,Le,ke,Oe,$e,Ve,ct.data):Z.isCompressedArrayTexture?F.compressedTexSubImage3D(it,be,je,nt,lt,Le,ke,Oe,$e,ct.data):F.texSubImage3D(it,be,je,nt,lt,Le,ke,Oe,$e,Ve,ct):D.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,be,je,nt,Le,ke,$e,Ve,ct.data):D.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,be,je,nt,ct.width,ct.height,$e,ct.data):F.texSubImage2D(F.TEXTURE_2D,be,je,nt,Le,ke,$e,Ve,ct);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ze),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ct),F.pixelStorei(F.UNPACK_SKIP_PIXELS,un),F.pixelStorei(F.UNPACK_SKIP_ROWS,ut),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Xn),be===0&&Z.generateMipmaps&&F.generateMipmap(it),le.unbindTexture()},this.initRenderTarget=function(D){ee.get(D).__webglFramebuffer===void 0&&Se.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?Se.setTextureCube(D,0):D.isData3DTexture?Se.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Se.setTexture2DArray(D,0):Se.setTexture2D(D,0),le.unbindTexture()},this.resetState=function(){E=0,S=0,_=null,le.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}function F0(o,e){const t=o.image&&o.image.width?o.image.width/o.image.height:1;return t>e?(o.repeat.x=e/t,o.repeat.y=1,o.offset.x=(1-o.repeat.x)/2,o.offset.y=0):(o.repeat.x=1,o.repeat.y=t/e,o.offset.x=0,o.offset.y=(1-o.repeat.y)/2),o}function N0(){return new Pt({uniforms:{inputTexture:{value:null},resolution:{value:null}},glslVersion:Rn,vertexShader:` 
            out vec2 vUv;
            void main() { 
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,fragmentShader:`
            precision highp float;
            in vec2 vUv;
            uniform sampler2D inputTexture;
            uniform vec2 resolution;
            
            out vec4 fragColor;

            void main() {
                //this is the shader that converts the input texture to a seed texture
                //to calculate the nearest seed in the jfa phase, we need to know the location of the seed in the input texture
                //so we are storing the coordinates in a texture, this creates a nice looking gradient 

                vec4 color = texture(inputTexture, vUv);
        
                if(color.a == 1.0) { //problem for troika
                    fragColor = vec4(gl_FragCoord.xy, 0.0, 1.0);
                } else {
                    fragColor = vec4(0.0);
                }
            }
        `})}function O0(){return new Pt({uniforms:{inputTexture:{value:null},offset:{value:null},resolution:{value:null},isLast:{value:null}},glslVersion:Rn,vertexShader:`
            out vec2 vUv;
            
            void main() { 
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,fragmentShader:`
            precision highp float;
            in vec2 vUv;
            uniform sampler2D inputTexture;
            uniform float offset;
            uniform vec2 resolution;
            uniform bool isLast;
            
            out vec4 fragColor;

            void main() {
                vec4 nearestSeed = vec4(0.0); 
                float nearestDist = 9999999.9; // Distance to the nearest seed, make sure its larger then the biggest pixel distance^2

                //prove why the algo works

                for(float y = -1.; y <= 1.; y += 1.){ 
                    for(float x = -1.; x <= 1.; x += 1.){

                        vec2 samplePx = gl_FragCoord.xy + vec2(x, y) * offset; 
                        vec2 sampleUV = samplePx / resolution;

                        if(sampleUV.x < 0.0 || sampleUV.x > 1.0 || sampleUV.y < 0.0 || sampleUV.y > 1.0) { continue; }

                        vec4 sampleValue = texture(inputTexture, sampleUV);

                        if(sampleValue.a != 0.0) {
                            vec2 diff_px = sampleValue.xy - gl_FragCoord.xy;
                            float dist_raw = dot(diff_px, diff_px);
                            float dist_sq = dist_raw;
                            
                            if(dist_sq  < nearestDist){
                                nearestDist = dist_sq;
                                nearestSeed = sampleValue; 
                            }
                        }
                    }
                }

                if(isLast == false) {
                    fragColor = nearestSeed;
                    return;
                }

                //distance calculation last pass 
                vec2 diff_px = nearestSeed.xy - gl_FragCoord.xy;
                
                fragColor = vec4(length(diff_px), 0., 0., 1.);

            }
        `})}function B0(){return new Pt({uniforms:{sceneTexture:{value:null},distanceTexture:{value:null},blueNoise:{value:null},rayCount:{value:null},resolution:{value:null},time:{value:null},radianceModifier:{value:null},fixEdges:{value:null},srgbFix:{value:null}},glslVersion:Rn,vertexShader:` 
            out vec2 vUv;
            void main() { 
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,fragmentShader:`
            precision highp float;
            in vec2 vUv;
            uniform sampler2D sceneTexture;
            uniform sampler2D distanceTexture;
            uniform sampler2D blueNoise;
            uniform int rayCount;
            uniform vec2 resolution;
            uniform float time;
            uniform float radianceModifier;
            uniform bool fixEdges;
            uniform bool srgbFix;
            
            out vec4 fragColor;

            #define TAU 6.283185
            #define PHI 1.618033988749
            #define SRGB(c) pow(c.rgb, srgbFix ? vec3(2.2) : vec3(1.0))
            #define LINEAR(c) pow(c.rgb, srgbFix ? vec3(1.0 / 2.2) : vec3(1.0))

            bool outOfBounds(vec2 uv) {
                return uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0;
            }

            float rand(vec2 co) {
                return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
            }

            float blueNoiseSample(vec2 coord) { //blue noise I have no idea how to use this properly
                float noise = texelFetch(blueNoise, ivec2(coord) % 128, 0).r;

                noise = fract(noise + time * PHI);

                return noise; 
            }

            vec4 raymarch(){
                vec4 light = texture(sceneTexture, vUv);
                
                if(light.a != 0.0 && !fixEdges) {
                    return vec4(light.rgb, 1.0);
                }

                float oneOverRayCount = 1.0 / float(rayCount); 
                float tauOverRayCount = TAU * oneOverRayCount;

                float noise = blueNoiseSample(gl_FragCoord.xy);

                //float noise = rand(vUv);

                vec4 radiance = vec4(0.0); //total light that will be accumulated
                //calculate and shoot rayCount rays that are equidstant from each other, expensive
                
                bool useBruteForce = light.a != 0.0 && fixEdges; //if we are at a seed location use fixed stop size so when the full res element is overlaid the blocky edges smooth out
                int maxSteps = useBruteForce ? 40 : 50;
                float fixedStepSize = 1.0;

                for(int i = 0; i < rayCount; i++) {
                    float angle = tauOverRayCount * (float(i) + noise); //if we dont add noise all rays will be in the same direction which will introduce patterns
                    vec2 rayDirection = vec2(cos(angle), -sin(angle)); //unit circle, NOW FIXED!!!!!!

                    vec2 sampleUv = vUv; //start at the current uv coordinate
                    vec4 radDelta = vec4(0.0);
                    
                    for (int step = 1; step < maxSteps; step++) { // one funny observation is that pixels that are close to the seed will need more steps to accumulate radiance, this is because since the dist is so small, the rays looking at the other direction (the direction not immediately looking at the seed) will need more steps to reach something else 
                        float dist = useBruteForce ? fixedStepSize : texture(distanceTexture, sampleUv).r;
                        
                        sampleUv += (rayDirection * dist) / resolution;
                        
                        //sampleUv += rayDirection * dist; //move the pixel in the direction of the ray, dist is the distance to the nearest seed so we now we can at least move that much
                        //also sampleUV wont travel from center to center, nearestfilter will get the color of the closest pixel, but sampleUV might be somewhere else in the pixel, not a big deal tho, at most we will need more stpes 
                
                        if (outOfBounds(sampleUv)) break; // end if we know we arent getting anywhere
                        
                        if (dist == 0.0 || (useBruteForce && texture(distanceTexture, sampleUv).r == 0.0)) { 
                            // at this point we now we hit a seed, so get its color and add it to the radiance
                            vec4 sampleColor = vec4(SRGB(texture(sceneTexture, sampleUv)).rgb, 1.0);
                            radDelta += sampleColor;
                            break;
                        }
                    }

                    radiance += radDelta;
                }
                
                return vec4(LINEAR((radiance * oneOverRayCount * radianceModifier)).rgb, 0.0); //finally we return the color of the pixel by averaging the light 
            }

            void main() {
                fragColor = raymarch();
            }
        `})}function k0(){return new Pt({uniforms:{inputTexture:{value:null},resolution:{value:null},sigma_d:{value:null},sigma_r:{value:null},radius:{value:null}},glslVersion:Rn,vertexShader:`
            out vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,fragmentShader:`
            precision highp float;
            in vec2 vUv;

            uniform sampler2D inputTexture;
            uniform vec2 resolution;

            uniform float sigma_d;
            uniform float sigma_r;
            uniform float radius;
            
            out vec4 fragColor;

            void main() {
                vec2 ij = gl_FragCoord.xy;
                vec3 I_ij = texture(inputTexture, vUv).rgb;
                
                vec3 I_DT = vec3(0.0);
                float I_DB = 0.0;

                for(float i = -radius; i <= radius; i++) {
                    for(float j = -radius; j  <= radius; j++) {
                       
                        vec2 kl = ij + vec2(i, j);
                        vec3 I_kl = texture(inputTexture, kl / resolution).rgb;

                        float space_diff = dot(ij - kl, ij - kl);
                        float image_diff = dot(I_ij - I_kl, I_ij - I_kl);

                        float w = exp( -(space_diff / (2.0 * sigma_d * sigma_d)) - (image_diff / (2.0 * sigma_r * sigma_r)) );

                        I_DT += w * I_kl;
                        I_DB += w; 
                    }
                }
                
                fragColor = vec4(I_DT / I_DB, 1.0);
            }
        `})}function G0(){return new Pt({uniforms:{sceneTexture:{value:null},distanceTexture:{value:null},previousCascadeTexture:{value:null},distanceResolution:{value:null},cascadeResolution:{value:null},cascadeCount:{value:null},cascadeIndex:{value:null},probeSpacing:{value:null},interval:{value:null},radianceModifier:{value:null},fixEdges:{value:null},srgbFix:{value:null}},glslVersion:Rn,vertexShader:` 
            out vec2 vUv;
            void main() { 
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,fragmentShader:`
            precision highp float;
            in vec2 vUv;
            uniform sampler2D sceneTexture;
            uniform sampler2D distanceTexture;
            uniform sampler2D previousCascadeTexture;
            uniform vec2 distanceResolution;
            uniform vec2 cascadeResolution;
            uniform float cascadeCount;
            uniform float cascadeIndex;
            uniform float probeSpacing;
            uniform float interval;
            uniform float radianceModifier;
            uniform bool fixEdges;
            uniform bool srgbFix;
            
            out vec4 fragColor;

            #define TAU 6.283185
            
            #define SRGB(c) pow(c.rgb, srgbFix ? vec3(2.2) : vec3(1.0))
            #define LINEAR(c) pow(c.rgb, srgbFix ? vec3(1.0 / 2.2) : vec3(1.0))

            vec4 raymarch(vec2 rayOrigin, vec2 dir, float interval) {
                vec2 ray = rayOrigin;
                float traveled = 0.0;

                for(float i = 0.0; i < interval; i++) {
                    float dist = texelFetch(distanceTexture, ivec2(ray), 0).r;
                    
                    if (dist == 0.0 && i == 0.0 && fixEdges) {
                        dist = 1.0;
                    }
                    
                    traveled += dist;
                    ray += dir * dist;

                    if (traveled >= interval || ray.x < 0.0 || ray.y < 0.0 || ray.x >= distanceResolution.x || ray.y >= distanceResolution.y) break;
                    if (dist == 0.0) return vec4(SRGB(texelFetch(sceneTexture, ivec2(ray), 0).rgb), 1.0); 
                }
                
                return vec4(0.0, 0.0, 0.0, 0.0);
            }

            vec4 merge(vec4 rayColor, float upperRayIndex, vec2 probeLocation) {
                if (rayColor.a == 1.0 || cascadeIndex == cascadeCount - 1.0)
                    return rayColor;
                
                float upperAngular = pow(2.0, cascadeIndex + 1.0);
                vec2 upperSize = cascadeResolution / upperAngular;

                vec2 upperPos = vec2(mod(upperRayIndex, upperAngular), floor(upperRayIndex / upperAngular)) * upperSize;

                vec2 upperClamped = clamp(probeLocation, vec2(0.5), upperSize - 0.5); 

                vec2 upperProbe = upperPos + upperClamped;

                vec4 interpolated = texture(previousCascadeTexture, upperProbe * (1.0 / cascadeResolution));
                return interpolated;
            }

            void main() {
            
                ivec2 coord = ivec2(gl_FragCoord.xy);
                float angular = pow(2.0, cascadeIndex);
                vec2 linear = vec2(probeSpacing * pow(2.0, cascadeIndex));
                                                                            
                ivec2 directionSize = ivec2(cascadeResolution / angular);
                vec2 probe = vec2(coord % directionSize);

                vec2 direction2D = vec2(coord / directionSize);               
                float direction1D = direction2D.x + (angular * direction2D.y);

                float offset = (interval * (1.0 - pow(4.0, cascadeIndex))) / (1.0 - 4.0);
                float range = interval * pow(4.0, cascadeIndex) + length(vec2(probeSpacing * pow(2.0, cascadeIndex + 1.0)));
        
                vec2 rayOrigin = (probe + 0.5) * linear;
                float upperRayBase = direction1D * 4.0;
                float raySpacing = TAU / (angular * angular * 4.0);

                vec4 color = vec4(0.0);

                for(float i = 0.0; i < 4.0; i++) {
                    float upperRayIndex = upperRayBase + i;
                    float theta = (upperRayIndex + 0.5) * raySpacing;
                    vec2 dir = vec2(cos(theta), sin(theta));
                    
                    vec2 start = rayOrigin + (dir * offset);
                    vec4 rayColor = raymarch(start, dir, range);

                    //DEBUG color = vec4(probe / directionSize, 0.0, 1.0); //floats can go kill themselves
                    //DEBUG color = vec4(vec3(theta / TAU), 1.0);

                    color += merge(rayColor, upperRayIndex, (probe + 0.5) / 2.0) * 0.25;
                }

                if (cascadeIndex == 0.0) {
                    if(texture(sceneTexture, vUv).a != 1.0) color.rgb *= radianceModifier; 
                    color = vec4(LINEAR(color).rgb, 1.0);    
                }

                fragColor = color;
            }

        `})}function z0(){return new Pt({uniforms:{sceneTexture:{value:null},distanceTexture:{value:null},previousCascadeTexture:{value:null},distanceResolution:{value:null},cascadeResolution:{value:null},cascadeCount:{value:null},cascadeIndex:{value:null},probeSpacing:{value:null},interval:{value:null},radianceModifier:{value:null},fixEdges:{value:null},srgbFix:{value:null}},glslVersion:Rn,vertexShader:` 
            out vec2 vUv;
            void main() { 
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,fragmentShader:`
            precision highp float;
            in vec2 vUv;
            uniform sampler2D sceneTexture;
            uniform sampler2D distanceTexture;
            uniform sampler2D previousCascadeTexture;
            uniform vec2 distanceResolution;
            uniform vec2 cascadeResolution;
            uniform float cascadeCount;
            uniform float cascadeIndex;
            uniform float probeSpacing;
            uniform float interval;
            uniform float radianceModifier;
            uniform bool fixEdges;
            uniform bool srgbFix;
            
            out vec4 fragColor;

            #define TAU 6.283185
            #define SRGB(c) pow(c.rgb, srgbFix ? vec3(2.2) : vec3(1.0))
            #define LINEAR(c) pow(c.rgb, srgbFix ? vec3(1.0 / 2.2) : vec3(1.0))

            vec4 raymarch(vec2 rayOrigin, vec2 dir, float interval) {
                vec2 ray = rayOrigin;
                float traveled = 0.0;

                for(float i = 0.0; i < interval; i++) {
                    float dist = texelFetch(distanceTexture, ivec2(ray), 0).r;
                    
                    if (dist == 0.0 && i == 0.0 && fixEdges) {
                        dist = 1.0;
                    }
                    
                    traveled += dist;
                    ray += dir * dist;

                    if (traveled >= interval || ray.x < 0.0 || ray.y < 0.0 || ray.x >= distanceResolution.x || ray.y >= distanceResolution.y) break;
                    if (dist == 0.0) return vec4(SRGB(texelFetch(sceneTexture, ivec2(ray), 0)).rgb, 1.0);
                }
                
                return vec4(0.0, 0.0, 0.0, 0.0);
            }

            vec4 merge(vec4 rayColor, float upperRayIndex, vec2 probeLocation) {
                if (rayColor.a == 1.0 || cascadeIndex == cascadeCount - 1.0)
                    return rayColor;
                
                float upperAngular = pow(2.0, cascadeIndex + 1.0);
                vec2 upperSize = cascadeResolution / upperAngular;

                vec2 upperPos = vec2(mod(upperRayIndex, upperAngular), floor(upperRayIndex / upperAngular)) * upperSize;

                vec2 upperClamped = clamp(probeLocation, vec2(0.5), upperSize - 0.5);

                vec2 upperProbe = upperPos + upperClamped;

                vec4 interpolated = texelFetch(previousCascadeTexture, ivec2(upperProbe), 0); //nearest filter
                return interpolated;
            }

            void main() {
            
                ivec2 coord = ivec2(gl_FragCoord.xy);
                float angular = pow(2.0, cascadeIndex);
                vec2 linear = vec2(probeSpacing * pow(2.0, cascadeIndex));
                vec2 linearUpper = linear * 2.0;
                                                                            
                ivec2 directionSize = ivec2(cascadeResolution / angular);
                vec2 probe = vec2(coord % directionSize);
                vec2 direction2D = vec2(coord / directionSize);  
                float direction1D = direction2D.x + (angular * direction2D.y);

                float offset = (interval * (1.0 - pow(4.0, cascadeIndex))) / (1.0 - 4.0);
                float range = interval * pow(4.0, cascadeIndex);
        
                vec2 rayOrigin = (probe + 0.5) * linear;
                float upperRayBase = direction1D * 4.0;
                float raySpacing = TAU / (angular * angular * 4.0);

                vec2 probeC = probe + 0.5;
                vec2 bilinearC = (probeC - 1.0) / 2.0;
                vec2 ratio = fract(bilinearC);

                vec2 probes[4];
                probes[0] = floor(bilinearC);
                probes[1] = probes[0] + vec2(1.0, 0.0);
                probes[2] = probes[0] + vec2(0.0, 1.0);
                probes[3] = probes[0] + vec2(1.0, 1.0);

                vec4 color = vec4(0.0);
                for(float i = 0.0; i < 4.0; i++) {
                    float upperRayIndex = upperRayBase + i;
                    float theta = (upperRayIndex + 0.5) * raySpacing;
                    vec2 dir = vec2(cos(theta), sin(theta));

                    float thetaLower = (floor(upperRayIndex / 4.0) + 0.5) * (raySpacing * 4.0);
                    vec2 lowerDir = vec2(cos(thetaLower), sin(thetaLower));
                    vec2 start = rayOrigin + (lowerDir * offset);

                    vec4 rayColors[4];
                    for(int j = 0; j < 4; j++) {
                        vec2 originUpper = (probes[j] + 0.5) * linearUpper;
                        vec2 end = originUpper + dir * (offset + range);
                        rayColors[j] = raymarch(start, normalize(end - start), length(end - start));
                        rayColors[j] = merge(rayColors[j], upperRayIndex, probes[j] + 0.5);
                    }
                    
                    color += ((1.0 - ratio.x) * (1.0 - ratio.y) * rayColors[0] +
                             ratio.x * (1.0 - ratio.y) * rayColors[1] +
                             (1.0 - ratio.x) * ratio.y * rayColors[2] +
                             ratio.x * ratio.y * rayColors[3]) * 0.25;
                }

                
                if (cascadeIndex == 0.0) {
                    if(texture(sceneTexture, vUv).a != 1.0) color.rgb *= radianceModifier; 
                    color = vec4(LINEAR(color).rgb, 1.0);                                
                }

                fragColor = color;
            }

        `})}function V0(){var o=Object.create(null);function e(i,n){var a=i.id,s=i.name,l=i.dependencies;l===void 0&&(l=[]);var c=i.init;c===void 0&&(c=function(){});var u=i.getTransferables;if(u===void 0&&(u=null),!o[a])try{l=l.map(function(h){return h&&h.isWorkerModule&&(e(h,function(f){if(f instanceof Error)throw f}),h=o[h.id].value),h}),c=r("<"+s+">.init",c),u&&(u=r("<"+s+">.getTransferables",u));var d=null;typeof c=="function"?d=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),o[a]={id:a,value:d,getTransferables:u},n(d)}catch(h){h&&h.noLog||console.error(h),n(h)}}function t(i,n){var a,s=i.id,l=i.args;(!o[s]||typeof o[s].value!="function")&&n(new Error("Worker module "+s+": not found or its 'init' did not return a function"));try{var c=(a=o[s]).value.apply(a,l);c&&typeof c.then=="function"?c.then(u,function(d){return n(d instanceof Error?d:new Error(""+d))}):u(c)}catch(d){n(d)}function u(d){try{var h=o[s].getTransferables&&o[s].getTransferables(d);(!h||!Array.isArray(h)||!h.length)&&(h=void 0),n(d,h)}catch(f){console.error(f),n(f)}}}function r(i,n){var a=void 0;self.troikaDefine=function(l){return a=l};var s=URL.createObjectURL(new Blob(["/** "+i.replace(/\*/g,"")+` **/

troikaDefine(
`+n+`
)`],{type:"application/javascript"}));try{importScripts(s)}catch(l){console.error(l)}return URL.revokeObjectURL(s),delete self.troikaDefine,a}self.addEventListener("message",function(i){var n=i.data,a=n.messageId,s=n.action,l=n.data;try{s==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:{isCallable:typeof c=="function"}})}),s==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:a,success:!1,error:c.stack})}})}function H0(o){var e=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return e._getInitResult().then(function(i){if(typeof i=="function")return i.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=o.dependencies,r=o.init;t=Array.isArray(t)?t.map(function(n){return n&&(n=n.onMainThread||n,n._getInitResult&&(n=n._getInitResult())),n}):[];var i=Promise.all(t).then(function(n){return r.apply(null,n)});return e._getInitResult=function(){return i},i},e}var oc=function(){var o=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),o=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return oc=function(){return o},o},W0=0,X0=0,Ja=!1,ar=Object.create(null),sr=Object.create(null),Hs=Object.create(null);function zi(o){if((!o||typeof o.init!="function")&&!Ja)throw new Error("requires `options.init` function");var e=o.dependencies,t=o.init,r=o.getTransferables,i=o.workerId,n=H0(o);i==null&&(i="#default");var a="workerModule"+ ++W0,s=o.name||a,l=null;e=e&&e.map(function(u){return typeof u=="function"&&!u.workerModuleData&&(Ja=!0,u=zi({workerId:i,name:"<"+s+"> function dependency: "+u.name,init:`function(){return (
`+Qr(u)+`
)}`}),Ja=!1),u&&u.workerModuleData&&(u=u.workerModuleData),u});function c(){for(var u=[],d=arguments.length;d--;)u[d]=arguments[d];if(!oc())return n.apply(void 0,u);if(!l){l=dl(i,"registerModule",c.workerModuleData);var h=function(){l=null,sr[i].delete(h)};(sr[i]||(sr[i]=new Set)).add(h)}return l.then(function(f){var p=f.isCallable;if(p)return dl(i,"callModule",{id:a,args:u});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:a,name:s,dependencies:e,init:Qr(t),getTransferables:r&&Qr(r)},c.onMainThread=n,c}function Y0(o){sr[o]&&sr[o].forEach(function(e){e()}),ar[o]&&(ar[o].terminate(),delete ar[o])}function Qr(o){var e=o.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function q0(o){var e=ar[o];if(!e){var t=Qr(V0);e=ar[o]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+o.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(r){var i=r.data,n=i.messageId,a=Hs[n];if(!a)throw new Error("WorkerModule response with empty or unknown messageId");delete Hs[n],a(i)}}return e}function dl(o,e,t){return new Promise(function(r,i){var n=++X0;Hs[n]=function(a){a.success?r(a.result):i(new Error("Error in worker "+e+" call: "+a.error))},q0(o).postMessage({messageId:n,action:e,data:t})})}function lc(){var o=(function(e){function t(W,X,N,Y,J,ne,$,B){var G=1-$;B.x=G*G*W+2*G*$*N+$*$*J,B.y=G*G*X+2*G*$*Y+$*$*ne}function r(W,X,N,Y,J,ne,$,B,G,K){var me=1-G;K.x=me*me*me*W+3*me*me*G*N+3*me*G*G*J+G*G*G*$,K.y=me*me*me*X+3*me*me*G*Y+3*me*G*G*ne+G*G*G*B}function i(W,X){for(var N=/([MLQCZ])([^MLQCZ]*)/g,Y,J,ne,$,B;Y=N.exec(W);){var G=Y[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(K){return parseFloat(K)});switch(Y[1]){case"M":$=J=G[0],B=ne=G[1];break;case"L":(G[0]!==$||G[1]!==B)&&X("L",$,B,$=G[0],B=G[1]);break;case"Q":{X("Q",$,B,$=G[2],B=G[3],G[0],G[1]);break}case"C":{X("C",$,B,$=G[4],B=G[5],G[0],G[1],G[2],G[3]);break}case"Z":($!==J||B!==ne)&&X("L",$,B,J,ne);break}}}function n(W,X,N){N===void 0&&(N=16);var Y={x:0,y:0};i(W,function(J,ne,$,B,G,K,me,he,ce){switch(J){case"L":X(ne,$,B,G);break;case"Q":{for(var ue=ne,De=$,Fe=1;Fe<N;Fe++)t(ne,$,K,me,B,G,Fe/(N-1),Y),X(ue,De,Y.x,Y.y),ue=Y.x,De=Y.y;break}case"C":{for(var F=ne,Te=$,Ue=1;Ue<N;Ue++)r(ne,$,K,me,he,ce,B,G,Ue/(N-1),Y),X(F,Te,Y.x,Y.y),F=Y.x,Te=Y.y;break}}})}var a="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",s="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(W,X){var N=W.getContext?W.getContext("webgl",c):W,Y=l.get(N);if(!Y){let F=function(ee){var Se=ne[ee];if(!Se&&(Se=ne[ee]=N.getExtension(ee),!Se))throw new Error(ee+" not supported");return Se},Te=function(ee,Se){var U=N.createShader(Se);return N.shaderSource(U,ee),N.compileShader(U),U},Ue=function(ee,Se,U,R){if(!$[ee]){var z={},ie={},te=N.createProgram();N.attachShader(te,Te(Se,N.VERTEX_SHADER)),N.attachShader(te,Te(U,N.FRAGMENT_SHADER)),N.linkProgram(te),$[ee]={program:te,transaction:function(_e){N.useProgram(te),_e({setUniform:function(Ce,we){for(var se=[],fe=arguments.length-2;fe-- >0;)se[fe]=arguments[fe+2];var ye=ie[we]||(ie[we]=N.getUniformLocation(te,we));N["uniform"+Ce].apply(N,[ye].concat(se))},setAttribute:function(Ce,we,se,fe,ye){var Re=z[Ce];Re||(Re=z[Ce]={buf:N.createBuffer(),loc:N.getAttribLocation(te,Ce),data:null}),N.bindBuffer(N.ARRAY_BUFFER,Re.buf),N.vertexAttribPointer(Re.loc,we,N.FLOAT,!1,0,0),N.enableVertexAttribArray(Re.loc),J?N.vertexAttribDivisor(Re.loc,fe):F("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Re.loc,fe),ye!==Re.data&&(N.bufferData(N.ARRAY_BUFFER,ye,se),Re.data=ye)}})}}}$[ee].transaction(R)},ge=function(ee,Se){G++;try{N.activeTexture(N.TEXTURE0+G);var U=B[ee];U||(U=B[ee]=N.createTexture(),N.bindTexture(N.TEXTURE_2D,U),N.texParameteri(N.TEXTURE_2D,N.TEXTURE_MIN_FILTER,N.NEAREST),N.texParameteri(N.TEXTURE_2D,N.TEXTURE_MAG_FILTER,N.NEAREST)),N.bindTexture(N.TEXTURE_2D,U),Se(U,G)}finally{G--}},le=function(ee,Se,U){var R=N.createFramebuffer();K.push(R),N.bindFramebuffer(N.FRAMEBUFFER,R),N.activeTexture(N.TEXTURE0+Se),N.bindTexture(N.TEXTURE_2D,ee),N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ee,0);try{U(R)}finally{N.deleteFramebuffer(R),N.bindFramebuffer(N.FRAMEBUFFER,K[--K.length-1]||null)}},Ae=function(){ne={},$={},B={},G=-1,K.length=0};var me=F,he=Te,ce=Ue,ue=ge,De=le,Fe=Ae,J=typeof WebGL2RenderingContext<"u"&&N instanceof WebGL2RenderingContext,ne={},$={},B={},G=-1,K=[];N.canvas.addEventListener("webglcontextlost",function(ee){Ae(),ee.preventDefault()},!1),l.set(N,Y={gl:N,isWebGL2:J,getExtension:F,withProgram:Ue,withTexture:ge,withTextureFramebuffer:le,handleContextLoss:Ae})}X(Y)}function d(W,X,N,Y,J,ne,$,B){$===void 0&&($=15),B===void 0&&(B=null),u(W,function(G){var K=G.gl,me=G.withProgram,he=G.withTexture;he("copy",function(ce,ue){K.texImage2D(K.TEXTURE_2D,0,K.RGBA,J,ne,0,K.RGBA,K.UNSIGNED_BYTE,X),me("copy",a,s,function(De){var Fe=De.setUniform,F=De.setAttribute;F("aUV",2,K.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),Fe("1i","image",ue),K.bindFramebuffer(K.FRAMEBUFFER,B||null),K.disable(K.BLEND),K.colorMask($&8,$&4,$&2,$&1),K.viewport(N,Y,J,ne),K.scissor(N,Y,J,ne),K.drawArrays(K.TRIANGLES,0,3)})})})}function h(W,X,N){var Y=W.width,J=W.height;u(W,function(ne){var $=ne.gl,B=new Uint8Array(Y*J*4);$.readPixels(0,0,Y,J,$.RGBA,$.UNSIGNED_BYTE,B),W.width=X,W.height=N,d($,B,0,0,Y,J)})}var f=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:d,resizeWebGLCanvasWithoutClearing:h});function p(W,X,N,Y,J,ne){ne===void 0&&(ne=1);var $=new Uint8Array(W*X),B=Y[2]-Y[0],G=Y[3]-Y[1],K=[];n(N,function(F,Te,Ue,ge){K.push({x1:F,y1:Te,x2:Ue,y2:ge,minX:Math.min(F,Ue),minY:Math.min(Te,ge),maxX:Math.max(F,Ue),maxY:Math.max(Te,ge)})}),K.sort(function(F,Te){return F.maxX-Te.maxX});for(var me=0;me<W;me++)for(var he=0;he<X;he++){var ce=De(Y[0]+B*(me+.5)/W,Y[1]+G*(he+.5)/X),ue=Math.pow(1-Math.abs(ce)/J,ne)/2;ce<0&&(ue=1-ue),ue=Math.max(0,Math.min(255,Math.round(ue*255))),$[he*W+me]=ue}return $;function De(F,Te){for(var Ue=1/0,ge=1/0,le=K.length;le--;){var Ae=K[le];if(Ae.maxX+ge<=F)break;if(F+ge>Ae.minX&&Te-ge<Ae.maxY&&Te+ge>Ae.minY){var ee=g(F,Te,Ae.x1,Ae.y1,Ae.x2,Ae.y2);ee<Ue&&(Ue=ee,ge=Math.sqrt(Ue))}}return Fe(F,Te)&&(ge=-ge),ge}function Fe(F,Te){for(var Ue=0,ge=K.length;ge--;){var le=K[ge];if(le.maxX<=F)break;var Ae=le.y1>Te!=le.y2>Te&&F<(le.x2-le.x1)*(Te-le.y1)/(le.y2-le.y1)+le.x1;Ae&&(Ue+=le.y1<le.y2?1:-1)}return Ue!==0}}function x(W,X,N,Y,J,ne,$,B,G,K){ne===void 0&&(ne=1),B===void 0&&(B=0),G===void 0&&(G=0),K===void 0&&(K=0),m(W,X,N,Y,J,ne,$,null,B,G,K)}function m(W,X,N,Y,J,ne,$,B,G,K,me){ne===void 0&&(ne=1),G===void 0&&(G=0),K===void 0&&(K=0),me===void 0&&(me=0);for(var he=p(W,X,N,Y,J,ne),ce=new Uint8Array(he.length*4),ue=0;ue<he.length;ue++)ce[ue*4+me]=he[ue];d($,ce,G,K,W,X,1<<3-me,B)}function g(W,X,N,Y,J,ne){var $=J-N,B=ne-Y,G=$*$+B*B,K=G?Math.max(0,Math.min(1,((W-N)*$+(X-Y)*B)/G)):0,me=W-(N+K*$),he=X-(Y+K*B);return me*me+he*he}var M=Object.freeze({__proto__:null,generate:p,generateIntoCanvas:x,generateIntoFramebuffer:m}),T="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",A="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",v="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",y=new Float32Array([0,0,2,0,0,2]),b=null,E=!1,S={},_=new WeakMap;function C(W){if(!E&&!I(W))throw new Error("WebGL generation not supported")}function w(W,X,N,Y,J,ne,$){if(ne===void 0&&(ne=1),$===void 0&&($=null),!$&&($=b,!$)){var B=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!B)throw new Error("OffscreenCanvas or DOM canvas not supported");$=b=B.getContext("webgl",{depth:!1})}C($);var G=new Uint8Array(W*X*4);u($,function(ce){var ue=ce.gl,De=ce.withTexture,Fe=ce.withTextureFramebuffer;De("readable",function(F,Te){ue.texImage2D(ue.TEXTURE_2D,0,ue.RGBA,W,X,0,ue.RGBA,ue.UNSIGNED_BYTE,null),Fe(F,Te,function(Ue){L(W,X,N,Y,J,ne,ue,Ue,0,0,0),ue.readPixels(0,0,W,X,ue.RGBA,ue.UNSIGNED_BYTE,G)})})});for(var K=new Uint8Array(W*X),me=0,he=0;me<G.length;me+=4)K[he++]=G[me];return K}function P(W,X,N,Y,J,ne,$,B,G,K){ne===void 0&&(ne=1),B===void 0&&(B=0),G===void 0&&(G=0),K===void 0&&(K=0),L(W,X,N,Y,J,ne,$,null,B,G,K)}function L(W,X,N,Y,J,ne,$,B,G,K,me){ne===void 0&&(ne=1),G===void 0&&(G=0),K===void 0&&(K=0),me===void 0&&(me=0),C($);var he=[];n(N,function(ce,ue,De,Fe){he.push(ce,ue,De,Fe)}),he=new Float32Array(he),u($,function(ce){var ue=ce.gl,De=ce.isWebGL2,Fe=ce.getExtension,F=ce.withProgram,Te=ce.withTexture,Ue=ce.withTextureFramebuffer,ge=ce.handleContextLoss;if(Te("rawDistances",function(le,Ae){(W!==le._lastWidth||X!==le._lastHeight)&&ue.texImage2D(ue.TEXTURE_2D,0,ue.RGBA,le._lastWidth=W,le._lastHeight=X,0,ue.RGBA,ue.UNSIGNED_BYTE,null),F("main",T,A,function(ee){var Se=ee.setAttribute,U=ee.setUniform,R=!De&&Fe("ANGLE_instanced_arrays"),z=!De&&Fe("EXT_blend_minmax");Se("aUV",2,ue.STATIC_DRAW,0,y),Se("aLineSegment",4,ue.DYNAMIC_DRAW,1,he),U.apply(void 0,["4f","uGlyphBounds"].concat(Y)),U("1f","uMaxDistance",J),U("1f","uExponent",ne),Ue(le,Ae,function(ie){ue.enable(ue.BLEND),ue.colorMask(!0,!0,!0,!0),ue.viewport(0,0,W,X),ue.scissor(0,0,W,X),ue.blendFunc(ue.ONE,ue.ONE),ue.blendEquationSeparate(ue.FUNC_ADD,De?ue.MAX:z.MAX_EXT),ue.clear(ue.COLOR_BUFFER_BIT),De?ue.drawArraysInstanced(ue.TRIANGLES,0,3,he.length/4):R.drawArraysInstancedANGLE(ue.TRIANGLES,0,3,he.length/4)})}),F("post",a,v,function(ee){ee.setAttribute("aUV",2,ue.STATIC_DRAW,0,y),ee.setUniform("1i","tex",Ae),ue.bindFramebuffer(ue.FRAMEBUFFER,B),ue.disable(ue.BLEND),ue.colorMask(me===0,me===1,me===2,me===3),ue.viewport(G,K,W,X),ue.scissor(G,K,W,X),ue.drawArrays(ue.TRIANGLES,0,3)})}),ue.isContextLost())throw ge(),new Error("webgl context lost")})}function I(W){var X=!W||W===b?S:W.canvas||W,N=_.get(X);if(N===void 0){E=!0;var Y=null;try{var J=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],ne=w(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,W);N=ne&&J.length===ne.length&&ne.every(function($,B){return $===J[B]}),N||(Y="bad trial run results",console.info(J,ne))}catch($){N=!1,Y=$.message}Y&&console.warn("WebGL SDF generation not supported:",Y),E=!1,_.set(X,N)}return N}var O=Object.freeze({__proto__:null,generate:w,generateIntoCanvas:P,generateIntoFramebuffer:L,isSupported:I});function V(W,X,N,Y,J,ne){J===void 0&&(J=Math.max(Y[2]-Y[0],Y[3]-Y[1])/2),ne===void 0&&(ne=1);try{return w.apply(O,arguments)}catch($){return console.info("WebGL SDF generation failed, falling back to JS",$),p.apply(M,arguments)}}function H(W,X,N,Y,J,ne,$,B,G,K){J===void 0&&(J=Math.max(Y[2]-Y[0],Y[3]-Y[1])/2),ne===void 0&&(ne=1),B===void 0&&(B=0),G===void 0&&(G=0),K===void 0&&(K=0);try{return P.apply(O,arguments)}catch(me){return console.info("WebGL SDF generation failed, falling back to JS",me),x.apply(M,arguments)}}return e.forEachPathCommand=i,e.generate=V,e.generateIntoCanvas=H,e.javascript=M,e.pathToLineSegments=n,e.webgl=O,e.webglUtils=f,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return o}function j0(){var o=(function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},r={},i={};r.L=1,i[1]="L",Object.keys(t).forEach(function(ge,le){r[ge]=1<<le+1,i[r[ge]]=ge}),Object.freeze(r);var n=r.LRI|r.RLI|r.FSI,a=r.L|r.R|r.AL,s=r.B|r.S|r.WS|r.ON|r.FSI|r.LRI|r.RLI|r.PDI,l=r.BN|r.RLE|r.LRE|r.RLO|r.LRO|r.PDF,c=r.S|r.WS|r.B|n|r.PDI|l,u=null;function d(){if(!u){u=new Map;var ge=function(Ae){if(t.hasOwnProperty(Ae)){var ee=0;t[Ae].split(",").forEach(function(Se){var U=Se.split("+"),R=U[0],z=U[1];R=parseInt(R,36),z=z?parseInt(z,36):0,u.set(ee+=R,r[Ae]);for(var ie=0;ie<z;ie++)u.set(++ee,r[Ae])})}};for(var le in t)ge(le)}}function h(ge){return d(),u.get(ge.codePointAt(0))||r.L}function f(ge){return i[h(ge)]}var p={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function x(ge,le){var Ae=36,ee=0,Se=new Map,U=le&&new Map,R;return ge.split(",").forEach(function z(ie){if(ie.indexOf("+")!==-1)for(var te=+ie;te--;)z(R);else{R=ie;var j=ie.split(">"),_e=j[0],xe=j[1];_e=String.fromCodePoint(ee+=parseInt(_e,Ae)),xe=String.fromCodePoint(ee+=parseInt(xe,Ae)),Se.set(_e,xe),le&&U.set(xe,_e)}}),{map:Se,reverseMap:U}}var m,g,M;function T(){if(!m){var ge=x(p.pairs,!0),le=ge.map,Ae=ge.reverseMap;m=le,g=Ae,M=x(p.canonical,!1).map}}function A(ge){return T(),m.get(ge)||null}function v(ge){return T(),g.get(ge)||null}function y(ge){return T(),M.get(ge)||null}var b=r.L,E=r.R,S=r.EN,_=r.ES,C=r.ET,w=r.AN,P=r.CS,L=r.B,I=r.S,O=r.ON,V=r.BN,H=r.NSM,W=r.AL,X=r.LRO,N=r.RLO,Y=r.LRE,J=r.RLE,ne=r.PDF,$=r.LRI,B=r.RLI,G=r.FSI,K=r.PDI;function me(ge,le){for(var Ae=125,ee=new Uint32Array(ge.length),Se=0;Se<ge.length;Se++)ee[Se]=h(ge[Se]);var U=new Map;function R(Nt,Qt){var Ot=ee[Nt];ee[Nt]=Qt,U.set(Ot,U.get(Ot)-1),Ot&s&&U.set(s,U.get(s)-1),U.set(Qt,(U.get(Qt)||0)+1),Qt&s&&U.set(s,(U.get(s)||0)+1)}for(var z=new Uint8Array(ge.length),ie=new Map,te=[],j=null,_e=0;_e<ge.length;_e++)j||te.push(j={start:_e,end:ge.length-1,level:le==="rtl"?1:le==="ltr"?0:go(_e,!1)}),ee[_e]&L&&(j.end=_e,j=null);for(var xe=J|Y|N|X|n|K|ne|L,Ce=function(Nt){return Nt+(Nt&1?1:2)},we=function(Nt){return Nt+(Nt&1?2:1)},se=0;se<te.length;se++){j=te[se];var fe=[{_level:j.level,_override:0,_isolate:0}],ye=void 0,Re=0,Me=0,Ge=0;U.clear();for(var k=j.start;k<=j.end;k++){var de=ee[k];if(ye=fe[fe.length-1],U.set(de,(U.get(de)||0)+1),de&s&&U.set(s,(U.get(s)||0)+1),de&xe)if(de&(J|Y)){z[k]=ye._level;var ve=(de===J?we:Ce)(ye._level);ve<=Ae&&!Re&&!Me?fe.push({_level:ve,_override:0,_isolate:0}):Re||Me++}else if(de&(N|X)){z[k]=ye._level;var Ee=(de===N?we:Ce)(ye._level);Ee<=Ae&&!Re&&!Me?fe.push({_level:Ee,_override:de&N?E:b,_isolate:0}):Re||Me++}else if(de&n){de&G&&(de=go(k+1,!0)===1?B:$),z[k]=ye._level,ye._override&&R(k,ye._override);var pe=(de===B?we:Ce)(ye._level);pe<=Ae&&Re===0&&Me===0?(Ge++,fe.push({_level:pe,_override:0,_isolate:1,_isolInitIndex:k})):Re++}else if(de&K){if(Re>0)Re--;else if(Ge>0){for(Me=0;!fe[fe.length-1]._isolate;)fe.pop();var re=fe[fe.length-1]._isolInitIndex;re!=null&&(ie.set(re,k),ie.set(k,re)),fe.pop(),Ge--}ye=fe[fe.length-1],z[k]=ye._level,ye._override&&R(k,ye._override)}else de&ne?(Re===0&&(Me>0?Me--:!ye._isolate&&fe.length>1&&(fe.pop(),ye=fe[fe.length-1])),z[k]=ye._level):de&L&&(z[k]=j.level);else z[k]=ye._level,ye._override&&de!==V&&R(k,ye._override)}for(var Pe=[],Ne=null,Be=j.start;Be<=j.end;Be++){var We=ee[Be];if(!(We&l)){var ot=z[Be],rt=We&n,ht=We===K;Ne&&ot===Ne._level?(Ne._end=Be,Ne._endsWithIsolInit=rt):Pe.push(Ne={_start:Be,_end:Be,_level:ot,_startsWithPDI:ht,_endsWithIsolInit:rt})}}for(var Ft=[],Zt=0;Zt<Pe.length;Zt++){var wt=Pe[Zt];if(!wt._startsWithPDI||wt._startsWithPDI&&!ie.has(wt._start)){for(var Wt=[Ne=wt],ln=void 0;Ne&&Ne._endsWithIsolInit&&(ln=ie.get(Ne._end))!=null;)for(var Xt=Zt+1;Xt<Pe.length;Xt++)if(Pe[Xt]._start===ln){Wt.push(Ne=Pe[Xt]);break}for(var pt=[],cn=0;cn<Wt.length;cn++)for(var Wn=Wt[cn],ci=Wn._start;ci<=Wn._end;ci++)pt.push(ci);for(var gr=z[pt[0]],vr=j.level,ui=pt[0]-1;ui>=0;ui--)if(!(ee[ui]&l)){vr=z[ui];break}var Vi=pt[pt.length-1],ua=z[Vi],_r=j.level;if(!(ee[Vi]&n)){for(var fi=Vi+1;fi<=j.end;fi++)if(!(ee[fi]&l)){_r=z[fi];break}}Ft.push({_seqIndices:pt,_sosType:Math.max(vr,gr)%2?E:b,_eosType:Math.max(_r,ua)%2?E:b})}}for(var D=0;D<Ft.length;D++){var Z=Ft[D],q=Z._seqIndices,ae=Z._sosType,Q=Z._eosType,be=z[q[0]]&1?E:b;if(U.get(H))for(var Le=0;Le<q.length;Le++){var ke=q[Le];if(ee[ke]&H){for(var Oe=ae,He=Le-1;He>=0;He--)if(!(ee[q[He]]&l)){Oe=ee[q[He]];break}R(ke,Oe&(n|K)?O:Oe)}}if(U.get(S))for(var Xe=0;Xe<q.length;Xe++){var ze=q[Xe];if(ee[ze]&S)for(var je=Xe-1;je>=-1;je--){var nt=je===-1?ae:ee[q[je]];if(nt&a){nt===W&&R(ze,w);break}}}if(U.get(W))for(var lt=0;lt<q.length;lt++){var ct=q[lt];ee[ct]&W&&R(ct,E)}if(U.get(_)||U.get(P))for(var $e=1;$e<q.length-1;$e++){var Ve=q[$e];if(ee[Ve]&(_|P)){for(var it=0,Ze=0,Ct=$e-1;Ct>=0&&(it=ee[q[Ct]],!!(it&l));Ct--);for(var un=$e+1;un<q.length&&(Ze=ee[q[un]],!!(Ze&l));un++);it===Ze&&(ee[Ve]===_?it===S:it&(S|w))&&R(Ve,it)}}if(U.get(S))for(var ut=0;ut<q.length;ut++){var Xn=q[ut];if(ee[Xn]&S){for(var at=ut-1;at>=0&&ee[q[at]]&(C|l);at--)R(q[at],S);for(ut++;ut<q.length&&ee[q[ut]]&(C|l|S);ut++)ee[q[ut]]!==S&&R(q[ut],S)}}if(U.get(C)||U.get(_)||U.get(P))for(var mt=0;mt<q.length;mt++){var Lt=q[mt];if(ee[Lt]&(C|_|P)){R(Lt,O);for(var xt=mt-1;xt>=0&&ee[q[xt]]&l;xt--)R(q[xt],O);for(var yt=mt+1;yt<q.length&&ee[q[yt]]&l;yt++)R(q[yt],O)}}if(U.get(S))for(var Yn=0,fn=ae;Yn<q.length;Yn++){var ao=q[Yn],fa=ee[ao];fa&S?fn===b&&R(ao,b):fa&a&&(fn=fa)}if(U.get(s)){var Hi=E|S|w,so=Hi|b,yr=[];{for(var hi=[],di=0;di<q.length;di++)if(ee[q[di]]&s){var Wi=ge[q[di]],oo=void 0;if(A(Wi)!==null)if(hi.length<63)hi.push({char:Wi,seqIndex:di});else break;else if((oo=v(Wi))!==null)for(var Xi=hi.length-1;Xi>=0;Xi--){var ha=hi[Xi].char;if(ha===oo||ha===v(y(Wi))||A(y(ha))===Wi){yr.push([hi[Xi].seqIndex,di]),hi.length=Xi;break}}}yr.sort(function(Nt,Qt){return Nt[0]-Qt[0]})}for(var da=0;da<yr.length;da++){for(var lo=yr[da],Sr=lo[0],pa=lo[1],co=!1,Jt=0,ma=Sr+1;ma<pa;ma++){var uo=q[ma];if(ee[uo]&so){co=!0;var fo=ee[uo]&Hi?E:b;if(fo===be){Jt=fo;break}}}if(co&&!Jt){Jt=ae;for(var xa=Sr-1;xa>=0;xa--){var ho=q[xa];if(ee[ho]&so){var po=ee[ho]&Hi?E:b;po!==be?Jt=po:Jt=be;break}}}if(Jt){if(ee[q[Sr]]=ee[q[pa]]=Jt,Jt!==be){for(var Yi=Sr+1;Yi<q.length;Yi++)if(!(ee[q[Yi]]&l)){h(ge[q[Yi]])&H&&(ee[q[Yi]]=Jt);break}}if(Jt!==be){for(var qi=pa+1;qi<q.length;qi++)if(!(ee[q[qi]]&l)){h(ge[q[qi]])&H&&(ee[q[qi]]=Jt);break}}}}for(var Dn=0;Dn<q.length;Dn++)if(ee[q[Dn]]&s){for(var mo=Dn,ga=Dn,va=ae,ji=Dn-1;ji>=0;ji--)if(ee[q[ji]]&l)mo=ji;else{va=ee[q[ji]]&Hi?E:b;break}for(var xo=Q,Ki=Dn+1;Ki<q.length;Ki++)if(ee[q[Ki]]&(s|l))ga=Ki;else{xo=ee[q[Ki]]&Hi?E:b;break}for(var _a=mo;_a<=ga;_a++)ee[q[_a]]=va===xo?va:be;Dn=ga}}}for(var Gt=j.start;Gt<=j.end;Gt++){var _c=z[Gt],Mr=ee[Gt];if(_c&1?Mr&(b|S|w)&&z[Gt]++:Mr&E?z[Gt]++:Mr&(w|S)&&(z[Gt]+=2),Mr&l&&(z[Gt]=Gt===0?j.level:z[Gt-1]),Gt===j.end||h(ge[Gt])&(I|L))for(var br=Gt;br>=0&&h(ge[br])&c;br--)z[br]=j.level}}return{levels:z,paragraphs:te};function go(Nt,Qt){for(var Ot=Nt;Ot<ge.length;Ot++){var Ln=ee[Ot];if(Ln&(E|W))return 1;if(Ln&(L|b)||Qt&&Ln===K)return 0;if(Ln&n){var vo=yc(Ot);Ot=vo===-1?ge.length:vo}}return 0}function yc(Nt){for(var Qt=1,Ot=Nt+1;Ot<ge.length;Ot++){var Ln=ee[Ot];if(Ln&L)break;if(Ln&K){if(--Qt===0)return Ot}else Ln&n&&Qt++}return-1}}var he="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",ce;function ue(){if(!ce){var ge=x(he,!0),le=ge.map,Ae=ge.reverseMap;Ae.forEach(function(ee,Se){le.set(Se,ee)}),ce=le}}function De(ge){return ue(),ce.get(ge)||null}function Fe(ge,le,Ae,ee){var Se=ge.length;Ae=Math.max(0,Ae==null?0:+Ae),ee=Math.min(Se-1,ee==null?Se-1:+ee);for(var U=new Map,R=Ae;R<=ee;R++)if(le[R]&1){var z=De(ge[R]);z!==null&&U.set(R,z)}return U}function F(ge,le,Ae,ee){var Se=ge.length;Ae=Math.max(0,Ae==null?0:+Ae),ee=Math.min(Se-1,ee==null?Se-1:+ee);var U=[];return le.paragraphs.forEach(function(R){var z=Math.max(Ae,R.start),ie=Math.min(ee,R.end);if(z<ie){for(var te=le.levels.slice(z,ie+1),j=ie;j>=z&&h(ge[j])&c;j--)te[j]=R.level;for(var _e=R.level,xe=1/0,Ce=0;Ce<te.length;Ce++){var we=te[Ce];we>_e&&(_e=we),we<xe&&(xe=we|1)}for(var se=_e;se>=xe;se--)for(var fe=0;fe<te.length;fe++)if(te[fe]>=se){for(var ye=fe;fe+1<te.length&&te[fe+1]>=se;)fe++;fe>ye&&U.push([ye+z,fe+z])}}}),U}function Te(ge,le,Ae,ee){var Se=Ue(ge,le,Ae,ee),U=[].concat(ge);return Se.forEach(function(R,z){U[z]=(le.levels[R]&1?De(ge[R]):null)||ge[R]}),U.join("")}function Ue(ge,le,Ae,ee){for(var Se=F(ge,le,Ae,ee),U=[],R=0;R<ge.length;R++)U[R]=R;return Se.forEach(function(z){for(var ie=z[0],te=z[1],j=U.slice(ie,te+1),_e=j.length;_e--;)U[te-_e]=j[_e]}),U}return e.closingToOpeningBracket=v,e.getBidiCharType=h,e.getBidiCharTypeName=f,e.getCanonicalBracket=y,e.getEmbeddingLevels=me,e.getMirroredCharacter=De,e.getMirroredCharactersMap=Fe,e.getReorderSegments=F,e.getReorderedIndices=Ue,e.getReorderedString=Te,e.openingToClosingBracket=A,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return o}const cc=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Ws(o){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(r,i){let n=Ke[i];return n?Ws(n):r}return o.replace(e,t)}const Rt=[];for(let o=0;o<256;o++)Rt[o]=(o<16?"0":"")+o.toString(16);function K0(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rt[o&255]+Rt[o>>8&255]+Rt[o>>16&255]+Rt[o>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[r&255]+Rt[r>>8&255]+Rt[r>>16&255]+Rt[r>>24&255]).toUpperCase()}const $n=Object.assign||function(){let o=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let r=arguments[e];if(r)for(let i in r)Object.prototype.hasOwnProperty.call(r,i)&&(o[i]=r[i])}return o},Z0=Date.now(),pl=new WeakMap,ml=new Map;let J0=1e10;function Xs(o,e){const t=tm(e);let r=pl.get(o);if(r||pl.set(o,r=Object.create(null)),r[t])return new r[t];const i=`_onBeforeCompile${t}`,n=function(c,u){o.onBeforeCompile.call(this,c,u);const d=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let h=ml[d];if(!h){const f=Q0(this,c,e,t);h=ml[d]=f}c.vertexShader=h.vertexShader,c.fragmentShader=h.fragmentShader,$n(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-Z0}}),this[i]&&this[i](c)},a=function(){return s(e.chained?o:o.clone())},s=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:o}),Object.defineProperty(u,"id",{value:J0++}),u.uuid=K0(),u.uniforms=$n({},c.uniforms,e.uniforms),u.defines=$n({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=$n({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:a},isDerivedMaterial:{value:!0},type:{get:()=>o.type,set:c=>{o.type=c}},isDerivedFrom:{writable:!0,configurable:!0,value:function(c){const u=this.baseMaterial;return c===u||u.isDerivedMaterial&&u.isDerivedFrom(c)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return o.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return n},set(c){this[i]=c}},copy:{writable:!0,configurable:!0,value:function(c){return o.copy.call(this,c),!o.isShaderMaterial&&!o.isDerivedMaterial&&($n(this.extensions,c.extensions),$n(this.defines,c.defines),$n(this.uniforms,jl.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new o.constructor;return s(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=Xs(o.isDerivedMaterial?o.getDepthMaterial():new ec({depthPacking:kl}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=Xs(o.isDerivedMaterial?o.getDistanceMaterial():new tc,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),o.dispose.call(this)}}};return r[t]=a,new a}function Q0(o,{vertexShader:e,fragmentShader:t},r,i){let{vertexDefs:n,vertexMainIntro:a,vertexMainOutro:s,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:d,fragmentColorTransform:h,customRewriter:f,timeUniform:p}=r;if(n=n||"",a=a||"",s=s||"",c=c||"",u=u||"",d=d||"",(l||f)&&(e=Ws(e)),(h||f)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=Ws(t)),f){let x=f({vertexShader:e,fragmentShader:t});e=x.vertexShader,t=x.fragmentShader}if(h){let x=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,m=>(x.push(m),"")),d=`${h}
${x.join(`
`)}
${d}`}if(p){const x=`
uniform float ${p};
`;n=x+n,c=x+c}return l&&(e=`vec3 troika_position_${i};
vec3 troika_normal_${i};
vec2 troika_uv_${i};
${e}
`,n=`${n}
void troikaVertexTransform${i}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,a=`
troika_position_${i} = vec3(position);
troika_normal_${i} = vec3(normal);
troika_uv_${i} = vec2(uv);
troikaVertexTransform${i}(troika_position_${i}, troika_normal_${i}, troika_uv_${i});
${a}
`,e=e.replace(/\b(position|normal|uv)\b/g,(x,m,g,M)=>/\battribute\s+vec[23]\s+$/.test(M.substr(0,g))?m:`troika_${m}_${i}`),o.map&&o.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${i}`))),e=xl(e,i,n,a,s),t=xl(t,i,c,u,d),{vertexShader:e,fragmentShader:t}}function xl(o,e,t,r,i){return(r||i||t)&&(o=o.replace(cc,`
${t}
void troikaOrigMain${e}() {`),o+=`
void main() {
  ${r}
  troikaOrigMain${e}();
  ${i}
}`),o}function $0(o,e){return o==="uniforms"?void 0:typeof e=="function"?e.toString():e}let em=0;const gl=new Map;function tm(o){const e=JSON.stringify(o,$0);let t=gl.get(e);return t==null&&gl.set(e,t=++em),t}function nm(){return typeof window>"u"&&(self.window=self),(function(o){var e={parse:function(i){var n=e._bin,a=new Uint8Array(i);if(n.readASCII(a,0,4)=="ttcf"){var s=4;n.readUshort(a,s),s+=2,n.readUshort(a,s),s+=2;var l=n.readUint(a,s);s+=4;for(var c=[],u=0;u<l;u++){var d=n.readUint(a,s);s+=4,c.push(e._readFont(a,d))}return c}return[e._readFont(a,0)]},_readFont:function(i,n){var a=e._bin,s=n;a.readFixed(i,n),n+=4;var l=a.readUshort(i,n);n+=2,a.readUshort(i,n),n+=2,a.readUshort(i,n),n+=2,a.readUshort(i,n),n+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:i,_offset:s},d={},h=0;h<l;h++){var f=a.readASCII(i,n,4);n+=4,a.readUint(i,n),n+=4;var p=a.readUint(i,n);n+=4;var x=a.readUint(i,n);n+=4,d[f]={offset:p,length:x}}for(h=0;h<c.length;h++){var m=c[h];d[m]&&(u[m.trim()]=e[m.trim()].parse(i,d[m].offset,d[m].length,u))}return u},_tabOffset:function(i,n,a){for(var s=e._bin,l=s.readUshort(i,a+4),c=a+12,u=0;u<l;u++){var d=s.readASCII(i,c,4);c+=4,s.readUint(i,c),c+=4;var h=s.readUint(i,c);if(c+=4,s.readUint(i,c),c+=4,d==n)return h}return 0}};e._bin={readFixed:function(i,n){return(i[n]<<8|i[n+1])+(i[n+2]<<8|i[n+3])/65540},readF2dot14:function(i,n){return e._bin.readShort(i,n)/16384},readInt:function(i,n){return e._bin._view(i).getInt32(n)},readInt8:function(i,n){return e._bin._view(i).getInt8(n)},readShort:function(i,n){return e._bin._view(i).getInt16(n)},readUshort:function(i,n){return e._bin._view(i).getUint16(n)},readUshorts:function(i,n,a){for(var s=[],l=0;l<a;l++)s.push(e._bin.readUshort(i,n+2*l));return s},readUint:function(i,n){return e._bin._view(i).getUint32(n)},readUint64:function(i,n){return 4294967296*e._bin.readUint(i,n)+e._bin.readUint(i,n+4)},readASCII:function(i,n,a){for(var s="",l=0;l<a;l++)s+=String.fromCharCode(i[n+l]);return s},readUnicode:function(i,n,a){for(var s="",l=0;l<a;l++){var c=i[n++]<<8|i[n++];s+=String.fromCharCode(c)}return s},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(i,n,a){var s=e._bin._tdec;return s&&n==0&&a==i.length?s.decode(i):e._bin.readASCII(i,n,a)},readBytes:function(i,n,a){for(var s=[],l=0;l<a;l++)s.push(i[n+l]);return s},readASCIIArray:function(i,n,a){for(var s=[],l=0;l<a;l++)s.push(String.fromCharCode(i[n+l]));return s},_view:function(i){return i._dataView||(i._dataView=i.buffer?new DataView(i.buffer,i.byteOffset,i.byteLength):new DataView(new Uint8Array(i).buffer))}},e._lctf={},e._lctf.parse=function(i,n,a,s,l){var c=e._bin,u={},d=n;c.readFixed(i,n),n+=4;var h=c.readUshort(i,n);n+=2;var f=c.readUshort(i,n);n+=2;var p=c.readUshort(i,n);return n+=2,u.scriptList=e._lctf.readScriptList(i,d+h),u.featureList=e._lctf.readFeatureList(i,d+f),u.lookupList=e._lctf.readLookupList(i,d+p,l),u},e._lctf.readLookupList=function(i,n,a){var s=e._bin,l=n,c=[],u=s.readUshort(i,n);n+=2;for(var d=0;d<u;d++){var h=s.readUshort(i,n);n+=2;var f=e._lctf.readLookupTable(i,l+h,a);c.push(f)}return c},e._lctf.readLookupTable=function(i,n,a){var s=e._bin,l=n,c={tabs:[]};c.ltype=s.readUshort(i,n),n+=2,c.flag=s.readUshort(i,n),n+=2;var u=s.readUshort(i,n);n+=2;for(var d=c.ltype,h=0;h<u;h++){var f=s.readUshort(i,n);n+=2;var p=a(i,d,l+f,c);c.tabs.push(p)}return c},e._lctf.numOfOnes=function(i){for(var n=0,a=0;a<32;a++)(i>>>a&1)!=0&&n++;return n},e._lctf.readClassDef=function(i,n){var a=e._bin,s=[],l=a.readUshort(i,n);if(n+=2,l==1){var c=a.readUshort(i,n);n+=2;var u=a.readUshort(i,n);n+=2;for(var d=0;d<u;d++)s.push(c+d),s.push(c+d),s.push(a.readUshort(i,n)),n+=2}if(l==2){var h=a.readUshort(i,n);for(n+=2,d=0;d<h;d++)s.push(a.readUshort(i,n)),n+=2,s.push(a.readUshort(i,n)),n+=2,s.push(a.readUshort(i,n)),n+=2}return s},e._lctf.getInterval=function(i,n){for(var a=0;a<i.length;a+=3){var s=i[a],l=i[a+1];if(i[a+2],s<=n&&n<=l)return a}return-1},e._lctf.readCoverage=function(i,n){var a=e._bin,s={};s.fmt=a.readUshort(i,n),n+=2;var l=a.readUshort(i,n);return n+=2,s.fmt==1&&(s.tab=a.readUshorts(i,n,l)),s.fmt==2&&(s.tab=a.readUshorts(i,n,3*l)),s},e._lctf.coverageIndex=function(i,n){var a=i.tab;if(i.fmt==1)return a.indexOf(n);if(i.fmt==2){var s=e._lctf.getInterval(a,n);if(s!=-1)return a[s+2]+(n-a[s])}return-1},e._lctf.readFeatureList=function(i,n){var a=e._bin,s=n,l=[],c=a.readUshort(i,n);n+=2;for(var u=0;u<c;u++){var d=a.readASCII(i,n,4);n+=4;var h=a.readUshort(i,n);n+=2;var f=e._lctf.readFeatureTable(i,s+h);f.tag=d.trim(),l.push(f)}return l},e._lctf.readFeatureTable=function(i,n){var a=e._bin,s=n,l={},c=a.readUshort(i,n);n+=2,c>0&&(l.featureParams=s+c);var u=a.readUshort(i,n);n+=2,l.tab=[];for(var d=0;d<u;d++)l.tab.push(a.readUshort(i,n+2*d));return l},e._lctf.readScriptList=function(i,n){var a=e._bin,s=n,l={},c=a.readUshort(i,n);n+=2;for(var u=0;u<c;u++){var d=a.readASCII(i,n,4);n+=4;var h=a.readUshort(i,n);n+=2,l[d.trim()]=e._lctf.readScriptTable(i,s+h)}return l},e._lctf.readScriptTable=function(i,n){var a=e._bin,s=n,l={},c=a.readUshort(i,n);n+=2,c>0&&(l.default=e._lctf.readLangSysTable(i,s+c));var u=a.readUshort(i,n);n+=2;for(var d=0;d<u;d++){var h=a.readASCII(i,n,4);n+=4;var f=a.readUshort(i,n);n+=2,l[h.trim()]=e._lctf.readLangSysTable(i,s+f)}return l},e._lctf.readLangSysTable=function(i,n){var a=e._bin,s={};a.readUshort(i,n),n+=2,s.reqFeature=a.readUshort(i,n),n+=2;var l=a.readUshort(i,n);return n+=2,s.features=a.readUshorts(i,n,l),s},e.CFF={},e.CFF.parse=function(i,n,a){var s=e._bin;(i=new Uint8Array(i.buffer,n,a))[n=0],i[++n],i[++n],i[++n],n++;var l=[];n=e.CFF.readIndex(i,n,l);for(var c=[],u=0;u<l.length-1;u++)c.push(s.readASCII(i,n+l[u],l[u+1]-l[u]));n+=l[l.length-1];var d=[];n=e.CFF.readIndex(i,n,d);var h=[];for(u=0;u<d.length-1;u++)h.push(e.CFF.readDict(i,n+d[u],n+d[u+1]));n+=d[d.length-1];var f=h[0],p=[];n=e.CFF.readIndex(i,n,p);var x=[];for(u=0;u<p.length-1;u++)x.push(s.readASCII(i,n+p[u],p[u+1]-p[u]));if(n+=p[p.length-1],e.CFF.readSubrs(i,n,f),f.CharStrings){n=f.CharStrings,p=[],n=e.CFF.readIndex(i,n,p);var m=[];for(u=0;u<p.length-1;u++)m.push(s.readBytes(i,n+p[u],p[u+1]-p[u]));f.CharStrings=m}if(f.ROS){n=f.FDArray;var g=[];for(n=e.CFF.readIndex(i,n,g),f.FDArray=[],u=0;u<g.length-1;u++){var M=e.CFF.readDict(i,n+g[u],n+g[u+1]);e.CFF._readFDict(i,M,x),f.FDArray.push(M)}n+=g[g.length-1],n=f.FDSelect,f.FDSelect=[];var T=i[n];if(n++,T!=3)throw T;var A=s.readUshort(i,n);for(n+=2,u=0;u<A+1;u++)f.FDSelect.push(s.readUshort(i,n),i[n+2]),n+=3}return f.Encoding&&(f.Encoding=e.CFF.readEncoding(i,f.Encoding,f.CharStrings.length)),f.charset&&(f.charset=e.CFF.readCharset(i,f.charset,f.CharStrings.length)),e.CFF._readFDict(i,f,x),f},e.CFF._readFDict=function(i,n,a){var s;for(var l in n.Private&&(s=n.Private[1],n.Private=e.CFF.readDict(i,s,s+n.Private[0]),n.Private.Subrs&&e.CFF.readSubrs(i,s+n.Private.Subrs,n.Private)),n)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(n[l]=a[n[l]-426+35])},e.CFF.readSubrs=function(i,n,a){var s=e._bin,l=[];n=e.CFF.readIndex(i,n,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,a.Bias=c,a.Subrs=[];for(var d=0;d<l.length-1;d++)a.Subrs.push(s.readBytes(i,n+l[d],l[d+1]-l[d]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(i,n){for(var a=0;a<i.charset.length;a++)if(i.charset[a]==n)return a;return-1},e.CFF.glyphBySE=function(i,n){return n<0||n>255?-1:e.CFF.glyphByUnicode(i,e.CFF.tableSE[n])},e.CFF.readEncoding=function(i,n,a){e._bin;var s=[".notdef"],l=i[n];if(n++,l!=0)throw"error: unknown encoding format: "+l;var c=i[n];n++;for(var u=0;u<c;u++)s.push(i[n+u]);return s},e.CFF.readCharset=function(i,n,a){var s=e._bin,l=[".notdef"],c=i[n];if(n++,c==0)for(var u=0;u<a;u++){var d=s.readUshort(i,n);n+=2,l.push(d)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<a;){d=s.readUshort(i,n),n+=2;var h=0;for(c==1?(h=i[n],n++):(h=s.readUshort(i,n),n+=2),u=0;u<=h;u++)l.push(d),d++}}return l},e.CFF.readIndex=function(i,n,a){var s=e._bin,l=s.readUshort(i,n)+1,c=i[n+=2];if(n++,c==1)for(var u=0;u<l;u++)a.push(i[n+u]);else if(c==2)for(u=0;u<l;u++)a.push(s.readUshort(i,n+2*u));else if(c==3)for(u=0;u<l;u++)a.push(16777215&s.readUint(i,n+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(n+=l*c)-1},e.CFF.getCharString=function(i,n,a){var s=e._bin,l=i[n],c=i[n+1];i[n+2],i[n+3],i[n+4];var u=1,d=null,h=null;l<=20&&(d=l,u=1),l==12&&(d=100*l+c,u=2),21<=l&&l<=27&&(d=l,u=1),l==28&&(h=s.readShort(i,n+1),u=3),29<=l&&l<=31&&(d=l,u=1),32<=l&&l<=246&&(h=l-139,u=1),247<=l&&l<=250&&(h=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(h=256*-(l-251)-c-108,u=2),l==255&&(h=s.readInt(i,n+1)/65535,u=5),a.val=h??"o"+d,a.size=u},e.CFF.readCharString=function(i,n,a){for(var s=n+a,l=e._bin,c=[];n<s;){var u=i[n],d=i[n+1];i[n+2],i[n+3],i[n+4];var h=1,f=null,p=null;u<=20&&(f=u,h=1),u==12&&(f=100*u+d,h=2),u!=19&&u!=20||(f=u,h=2),21<=u&&u<=27&&(f=u,h=1),u==28&&(p=l.readShort(i,n+1),h=3),29<=u&&u<=31&&(f=u,h=1),32<=u&&u<=246&&(p=u-139,h=1),247<=u&&u<=250&&(p=256*(u-247)+d+108,h=2),251<=u&&u<=254&&(p=256*-(u-251)-d-108,h=2),u==255&&(p=l.readInt(i,n+1)/65535,h=5),c.push(p??"o"+f),n+=h}return c},e.CFF.readDict=function(i,n,a){for(var s=e._bin,l={},c=[];n<a;){var u=i[n],d=i[n+1];i[n+2],i[n+3],i[n+4];var h=1,f=null,p=null;if(u==28&&(p=s.readShort(i,n+1),h=3),u==29&&(p=s.readInt(i,n+1),h=5),32<=u&&u<=246&&(p=u-139,h=1),247<=u&&u<=250&&(p=256*(u-247)+d+108,h=2),251<=u&&u<=254&&(p=256*-(u-251)-d-108,h=2),u==255)throw p=s.readInt(i,n+1)/65535,h=5,"unknown number";if(u==30){var x=[];for(h=1;;){var m=i[n+h];h++;var g=m>>4,M=15&m;if(g!=15&&x.push(g),M!=15&&x.push(M),M==15)break}for(var T="",A=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],v=0;v<x.length;v++)T+=A[x[v]];p=parseFloat(T)}u<=21&&(f=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],h=1,u==12&&(f=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][d],h=2)),f!=null?(l[f]=c.length==1?c[0]:c,c=[]):c.push(p),n+=h}return l},e.cmap={},e.cmap.parse=function(i,n,a){i=new Uint8Array(i.buffer,n,a),n=0;var s=e._bin,l={};s.readUshort(i,n),n+=2;var c=s.readUshort(i,n);n+=2;var u=[];l.tables=[];for(var d=0;d<c;d++){var h=s.readUshort(i,n);n+=2;var f=s.readUshort(i,n);n+=2;var p=s.readUint(i,n);n+=4;var x="p"+h+"e"+f,m=u.indexOf(p);if(m==-1){var g;m=l.tables.length,u.push(p);var M=s.readUshort(i,p);M==0?g=e.cmap.parse0(i,p):M==4?g=e.cmap.parse4(i,p):M==6?g=e.cmap.parse6(i,p):M==12?g=e.cmap.parse12(i,p):console.debug("unknown format: "+M,h,f,p),l.tables.push(g)}if(l[x]!=null)throw"multiple tables for one platform+encoding";l[x]=m}return l},e.cmap.parse0=function(i,n){var a=e._bin,s={};s.format=a.readUshort(i,n),n+=2;var l=a.readUshort(i,n);n+=2,a.readUshort(i,n),n+=2,s.map=[];for(var c=0;c<l-6;c++)s.map.push(i[n+c]);return s},e.cmap.parse4=function(i,n){var a=e._bin,s=n,l={};l.format=a.readUshort(i,n),n+=2;var c=a.readUshort(i,n);n+=2,a.readUshort(i,n),n+=2;var u=a.readUshort(i,n);n+=2;var d=u/2;l.searchRange=a.readUshort(i,n),n+=2,l.entrySelector=a.readUshort(i,n),n+=2,l.rangeShift=a.readUshort(i,n),n+=2,l.endCount=a.readUshorts(i,n,d),n+=2*d,n+=2,l.startCount=a.readUshorts(i,n,d),n+=2*d,l.idDelta=[];for(var h=0;h<d;h++)l.idDelta.push(a.readShort(i,n)),n+=2;for(l.idRangeOffset=a.readUshorts(i,n,d),n+=2*d,l.glyphIdArray=[];n<s+c;)l.glyphIdArray.push(a.readUshort(i,n)),n+=2;return l},e.cmap.parse6=function(i,n){var a=e._bin,s={};s.format=a.readUshort(i,n),n+=2,a.readUshort(i,n),n+=2,a.readUshort(i,n),n+=2,s.firstCode=a.readUshort(i,n),n+=2;var l=a.readUshort(i,n);n+=2,s.glyphIdArray=[];for(var c=0;c<l;c++)s.glyphIdArray.push(a.readUshort(i,n)),n+=2;return s},e.cmap.parse12=function(i,n){var a=e._bin,s={};s.format=a.readUshort(i,n),n+=2,n+=2,a.readUint(i,n),n+=4,a.readUint(i,n),n+=4;var l=a.readUint(i,n);n+=4,s.groups=[];for(var c=0;c<l;c++){var u=n+12*c,d=a.readUint(i,u+0),h=a.readUint(i,u+4),f=a.readUint(i,u+8);s.groups.push([d,h,f])}return s},e.glyf={},e.glyf.parse=function(i,n,a,s){for(var l=[],c=0;c<s.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(i,n){var a=e._bin,s=i._data,l=e._tabOffset(s,"glyf",i._offset)+i.loca[n];if(i.loca[n]==i.loca[n+1])return null;var c={};if(c.noc=a.readShort(s,l),l+=2,c.xMin=a.readShort(s,l),l+=2,c.yMin=a.readShort(s,l),l+=2,c.xMax=a.readShort(s,l),l+=2,c.yMax=a.readShort(s,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(a.readUshort(s,l)),l+=2;var d=a.readUshort(s,l);if(l+=2,s.length-l<d)return null;c.instructions=a.readBytes(s,l,d),l+=d;var h=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<h;u++){var f=s[l];if(l++,c.flags.push(f),(8&f)!=0){var p=s[l];l++;for(var x=0;x<p;x++)c.flags.push(f),u++}}for(c.xs=[],u=0;u<h;u++){var m=(2&c.flags[u])!=0,g=(16&c.flags[u])!=0;m?(c.xs.push(g?s[l]:-s[l]),l++):g?c.xs.push(0):(c.xs.push(a.readShort(s,l)),l+=2)}for(c.ys=[],u=0;u<h;u++)m=(4&c.flags[u])!=0,g=(32&c.flags[u])!=0,m?(c.ys.push(g?s[l]:-s[l]),l++):g?c.ys.push(0):(c.ys.push(a.readShort(s,l)),l+=2);var M=0,T=0;for(u=0;u<h;u++)M+=c.xs[u],T+=c.ys[u],c.xs[u]=M,c.ys[u]=T}else{var A;c.parts=[];do{A=a.readUshort(s,l),l+=2;var v={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(v),v.glyphIndex=a.readUshort(s,l),l+=2,1&A){var y=a.readShort(s,l);l+=2;var b=a.readShort(s,l);l+=2}else y=a.readInt8(s,l),l++,b=a.readInt8(s,l),l++;2&A?(v.m.tx=y,v.m.ty=b):(v.p1=y,v.p2=b),8&A?(v.m.a=v.m.d=a.readF2dot14(s,l),l+=2):64&A?(v.m.a=a.readF2dot14(s,l),l+=2,v.m.d=a.readF2dot14(s,l),l+=2):128&A&&(v.m.a=a.readF2dot14(s,l),l+=2,v.m.b=a.readF2dot14(s,l),l+=2,v.m.c=a.readF2dot14(s,l),l+=2,v.m.d=a.readF2dot14(s,l),l+=2)}while(32&A);if(256&A){var E=a.readUshort(s,l);for(l+=2,c.instr=[],u=0;u<E;u++)c.instr.push(s[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(i,n,a,s){var l=n;n+=4;var c=e._bin.readUshort(i,n);return{glyphClassDef:c===0?null:e._lctf.readClassDef(i,l+c)}},e.GPOS={},e.GPOS.parse=function(i,n,a,s){return e._lctf.parse(i,n,a,s,e.GPOS.subt)},e.GPOS.subt=function(i,n,a,s){var l=e._bin,c=a,u={};if(u.fmt=l.readUshort(i,a),a+=2,n==1||n==2||n==3||n==7||n==8&&u.fmt<=2){var d=l.readUshort(i,a);a+=2,u.coverage=e._lctf.readCoverage(i,d+c)}if(n==1&&u.fmt==1){var h=l.readUshort(i,a);a+=2,h!=0&&(u.pos=e.GPOS.readValueRecord(i,a,h))}else if(n==2&&u.fmt>=1&&u.fmt<=2){h=l.readUshort(i,a),a+=2;var f=l.readUshort(i,a);a+=2;var p=e._lctf.numOfOnes(h),x=e._lctf.numOfOnes(f);if(u.fmt==1){u.pairsets=[];var m=l.readUshort(i,a);a+=2;for(var g=0;g<m;g++){var M=c+l.readUshort(i,a);a+=2;var T=l.readUshort(i,M);M+=2;for(var A=[],v=0;v<T;v++){var y=l.readUshort(i,M);M+=2,h!=0&&(w=e.GPOS.readValueRecord(i,M,h),M+=2*p),f!=0&&(P=e.GPOS.readValueRecord(i,M,f),M+=2*x),A.push({gid2:y,val1:w,val2:P})}u.pairsets.push(A)}}if(u.fmt==2){var b=l.readUshort(i,a);a+=2;var E=l.readUshort(i,a);a+=2;var S=l.readUshort(i,a);a+=2;var _=l.readUshort(i,a);for(a+=2,u.classDef1=e._lctf.readClassDef(i,c+b),u.classDef2=e._lctf.readClassDef(i,c+E),u.matrix=[],g=0;g<S;g++){var C=[];for(v=0;v<_;v++){var w=null,P=null;h!=0&&(w=e.GPOS.readValueRecord(i,a,h),a+=2*p),f!=0&&(P=e.GPOS.readValueRecord(i,a,f),a+=2*x),C.push({val1:w,val2:P})}u.matrix.push(C)}}}else if(n==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(i,l.readUshort(i,a)+c),u.baseCoverage=e._lctf.readCoverage(i,l.readUshort(i,a+2)+c),u.markClassCount=l.readUshort(i,a+4),u.markArray=e.GPOS.readMarkArray(i,l.readUshort(i,a+6)+c),u.baseArray=e.GPOS.readBaseArray(i,l.readUshort(i,a+8)+c,u.markClassCount);else if(n==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(i,l.readUshort(i,a)+c),u.mark2Coverage=e._lctf.readCoverage(i,l.readUshort(i,a+2)+c),u.markClassCount=l.readUshort(i,a+4),u.mark1Array=e.GPOS.readMarkArray(i,l.readUshort(i,a+6)+c),u.mark2Array=e.GPOS.readBaseArray(i,l.readUshort(i,a+8)+c,u.markClassCount);else{if(n==9&&u.fmt==1){var L=l.readUshort(i,a);a+=2;var I=l.readUint(i,a);if(a+=4,s.ltype==9)s.ltype=L;else if(s.ltype!=L)throw"invalid extension substitution";return e.GPOS.subt(i,s.ltype,c+I)}console.debug("unsupported GPOS table LookupType",n,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(i,n,a){var s=e._bin,l=[];return l.push(1&a?s.readShort(i,n):0),n+=1&a?2:0,l.push(2&a?s.readShort(i,n):0),n+=2&a?2:0,l.push(4&a?s.readShort(i,n):0),n+=4&a?2:0,l.push(8&a?s.readShort(i,n):0),n+=8&a?2:0,l},e.GPOS.readBaseArray=function(i,n,a){var s=e._bin,l=[],c=n,u=s.readUshort(i,n);n+=2;for(var d=0;d<u;d++){for(var h=[],f=0;f<a;f++)h.push(e.GPOS.readAnchorRecord(i,c+s.readUshort(i,n))),n+=2;l.push(h)}return l},e.GPOS.readMarkArray=function(i,n){var a=e._bin,s=[],l=n,c=a.readUshort(i,n);n+=2;for(var u=0;u<c;u++){var d=e.GPOS.readAnchorRecord(i,a.readUshort(i,n+2)+l);d.markClass=a.readUshort(i,n),s.push(d),n+=4}return s},e.GPOS.readAnchorRecord=function(i,n){var a=e._bin,s={};return s.fmt=a.readUshort(i,n),s.x=a.readShort(i,n+2),s.y=a.readShort(i,n+4),s},e.GSUB={},e.GSUB.parse=function(i,n,a,s){return e._lctf.parse(i,n,a,s,e.GSUB.subt)},e.GSUB.subt=function(i,n,a,s){var l=e._bin,c=a,u={};if(u.fmt=l.readUshort(i,a),a+=2,n!=1&&n!=2&&n!=4&&n!=5&&n!=6)return null;if(n==1||n==2||n==4||n==5&&u.fmt<=2||n==6&&u.fmt<=2){var d=l.readUshort(i,a);a+=2,u.coverage=e._lctf.readCoverage(i,c+d)}if(n==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(i,a),a+=2;else if(u.fmt==2){var h=l.readUshort(i,a);a+=2,u.newg=l.readUshorts(i,a,h),a+=2*u.newg.length}}else if(n==2&&u.fmt==1){h=l.readUshort(i,a),a+=2,u.seqs=[];for(var f=0;f<h;f++){var p=l.readUshort(i,a)+c;a+=2;var x=l.readUshort(i,p);u.seqs.push(l.readUshorts(i,p+2,x))}}else if(n==4)for(u.vals=[],h=l.readUshort(i,a),a+=2,f=0;f<h;f++){var m=l.readUshort(i,a);a+=2,u.vals.push(e.GSUB.readLigatureSet(i,c+m))}else if(n==5&&u.fmt==2){if(u.fmt==2){var g=l.readUshort(i,a);a+=2,u.cDef=e._lctf.readClassDef(i,c+g),u.scset=[];var M=l.readUshort(i,a);for(a+=2,f=0;f<M;f++){var T=l.readUshort(i,a);a+=2,u.scset.push(T==0?null:e.GSUB.readSubClassSet(i,c+T))}}}else if(n==6&&u.fmt==3){if(u.fmt==3){for(f=0;f<3;f++){h=l.readUshort(i,a),a+=2;for(var A=[],v=0;v<h;v++)A.push(e._lctf.readCoverage(i,c+l.readUshort(i,a+2*v)));a+=2*h,f==0&&(u.backCvg=A),f==1&&(u.inptCvg=A),f==2&&(u.ahedCvg=A)}h=l.readUshort(i,a),a+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(i,a,h)}}else{if(n==7&&u.fmt==1){var y=l.readUshort(i,a);a+=2;var b=l.readUint(i,a);if(a+=4,s.ltype==9)s.ltype=y;else if(s.ltype!=y)throw"invalid extension substitution";return e.GSUB.subt(i,s.ltype,c+b)}console.debug("unsupported GSUB table LookupType",n,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(i,n){var a=e._bin.readUshort,s=n,l=[],c=a(i,n);n+=2;for(var u=0;u<c;u++){var d=a(i,n);n+=2,l.push(e.GSUB.readSubClassRule(i,s+d))}return l},e.GSUB.readSubClassRule=function(i,n){var a=e._bin.readUshort,s={},l=a(i,n),c=a(i,n+=2);n+=2,s.input=[];for(var u=0;u<l-1;u++)s.input.push(a(i,n)),n+=2;return s.substLookupRecords=e.GSUB.readSubstLookupRecords(i,n,c),s},e.GSUB.readSubstLookupRecords=function(i,n,a){for(var s=e._bin.readUshort,l=[],c=0;c<a;c++)l.push(s(i,n),s(i,n+2)),n+=4;return l},e.GSUB.readChainSubClassSet=function(i,n){var a=e._bin,s=n,l=[],c=a.readUshort(i,n);n+=2;for(var u=0;u<c;u++){var d=a.readUshort(i,n);n+=2,l.push(e.GSUB.readChainSubClassRule(i,s+d))}return l},e.GSUB.readChainSubClassRule=function(i,n){for(var a=e._bin,s={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=a.readUshort(i,n);n+=2,c==1&&u--,s[l[c]]=a.readUshorts(i,n,u),n+=2*s[l[c]].length}return u=a.readUshort(i,n),n+=2,s.subst=a.readUshorts(i,n,2*u),n+=2*s.subst.length,s},e.GSUB.readLigatureSet=function(i,n){var a=e._bin,s=n,l=[],c=a.readUshort(i,n);n+=2;for(var u=0;u<c;u++){var d=a.readUshort(i,n);n+=2,l.push(e.GSUB.readLigature(i,s+d))}return l},e.GSUB.readLigature=function(i,n){var a=e._bin,s={chain:[]};s.nglyph=a.readUshort(i,n),n+=2;var l=a.readUshort(i,n);n+=2;for(var c=0;c<l-1;c++)s.chain.push(a.readUshort(i,n)),n+=2;return s},e.head={},e.head.parse=function(i,n,a){var s=e._bin,l={};return s.readFixed(i,n),n+=4,l.fontRevision=s.readFixed(i,n),n+=4,s.readUint(i,n),n+=4,s.readUint(i,n),n+=4,l.flags=s.readUshort(i,n),n+=2,l.unitsPerEm=s.readUshort(i,n),n+=2,l.created=s.readUint64(i,n),n+=8,l.modified=s.readUint64(i,n),n+=8,l.xMin=s.readShort(i,n),n+=2,l.yMin=s.readShort(i,n),n+=2,l.xMax=s.readShort(i,n),n+=2,l.yMax=s.readShort(i,n),n+=2,l.macStyle=s.readUshort(i,n),n+=2,l.lowestRecPPEM=s.readUshort(i,n),n+=2,l.fontDirectionHint=s.readShort(i,n),n+=2,l.indexToLocFormat=s.readShort(i,n),n+=2,l.glyphDataFormat=s.readShort(i,n),n+=2,l},e.hhea={},e.hhea.parse=function(i,n,a){var s=e._bin,l={};return s.readFixed(i,n),n+=4,l.ascender=s.readShort(i,n),n+=2,l.descender=s.readShort(i,n),n+=2,l.lineGap=s.readShort(i,n),n+=2,l.advanceWidthMax=s.readUshort(i,n),n+=2,l.minLeftSideBearing=s.readShort(i,n),n+=2,l.minRightSideBearing=s.readShort(i,n),n+=2,l.xMaxExtent=s.readShort(i,n),n+=2,l.caretSlopeRise=s.readShort(i,n),n+=2,l.caretSlopeRun=s.readShort(i,n),n+=2,l.caretOffset=s.readShort(i,n),n+=2,n+=8,l.metricDataFormat=s.readShort(i,n),n+=2,l.numberOfHMetrics=s.readUshort(i,n),n+=2,l},e.hmtx={},e.hmtx.parse=function(i,n,a,s){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,d=0,h=0;h<s.maxp.numGlyphs;h++)h<s.hhea.numberOfHMetrics&&(u=l.readUshort(i,n),n+=2,d=l.readShort(i,n),n+=2),c.aWidth.push(u),c.lsBearing.push(d);return c},e.kern={},e.kern.parse=function(i,n,a,s){var l=e._bin,c=l.readUshort(i,n);if(n+=2,c==1)return e.kern.parseV1(i,n-2,a,s);var u=l.readUshort(i,n);n+=2;for(var d={glyph1:[],rval:[]},h=0;h<u;h++){n+=2,a=l.readUshort(i,n),n+=2;var f=l.readUshort(i,n);n+=2;var p=f>>>8;if((p&=15)!=0)throw"unknown kern table format: "+p;n=e.kern.readFormat0(i,n,d)}return d},e.kern.parseV1=function(i,n,a,s){var l=e._bin;l.readFixed(i,n),n+=4;var c=l.readUint(i,n);n+=4;for(var u={glyph1:[],rval:[]},d=0;d<c;d++){l.readUint(i,n),n+=4;var h=l.readUshort(i,n);n+=2,l.readUshort(i,n),n+=2;var f=h>>>8;if((f&=15)!=0)throw"unknown kern table format: "+f;n=e.kern.readFormat0(i,n,u)}return u},e.kern.readFormat0=function(i,n,a){var s=e._bin,l=-1,c=s.readUshort(i,n);n+=2,s.readUshort(i,n),n+=2,s.readUshort(i,n),n+=2,s.readUshort(i,n),n+=2;for(var u=0;u<c;u++){var d=s.readUshort(i,n);n+=2;var h=s.readUshort(i,n);n+=2;var f=s.readShort(i,n);n+=2,d!=l&&(a.glyph1.push(d),a.rval.push({glyph2:[],vals:[]}));var p=a.rval[a.rval.length-1];p.glyph2.push(h),p.vals.push(f),l=d}return n},e.loca={},e.loca.parse=function(i,n,a,s){var l=e._bin,c=[],u=s.head.indexToLocFormat,d=s.maxp.numGlyphs+1;if(u==0)for(var h=0;h<d;h++)c.push(l.readUshort(i,n+(h<<1))<<1);if(u==1)for(h=0;h<d;h++)c.push(l.readUint(i,n+(h<<2)));return c},e.maxp={},e.maxp.parse=function(i,n,a){var s=e._bin,l={},c=s.readUint(i,n);return n+=4,l.numGlyphs=s.readUshort(i,n),n+=2,c==65536&&(l.maxPoints=s.readUshort(i,n),n+=2,l.maxContours=s.readUshort(i,n),n+=2,l.maxCompositePoints=s.readUshort(i,n),n+=2,l.maxCompositeContours=s.readUshort(i,n),n+=2,l.maxZones=s.readUshort(i,n),n+=2,l.maxTwilightPoints=s.readUshort(i,n),n+=2,l.maxStorage=s.readUshort(i,n),n+=2,l.maxFunctionDefs=s.readUshort(i,n),n+=2,l.maxInstructionDefs=s.readUshort(i,n),n+=2,l.maxStackElements=s.readUshort(i,n),n+=2,l.maxSizeOfInstructions=s.readUshort(i,n),n+=2,l.maxComponentElements=s.readUshort(i,n),n+=2,l.maxComponentDepth=s.readUshort(i,n),n+=2),l},e.name={},e.name.parse=function(i,n,a){var s=e._bin,l={};s.readUshort(i,n),n+=2;var c=s.readUshort(i,n);n+=2,s.readUshort(i,n);for(var u,d=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],h=n+=2,f=0;f<c;f++){var p=s.readUshort(i,n);n+=2;var x=s.readUshort(i,n);n+=2;var m=s.readUshort(i,n);n+=2;var g=s.readUshort(i,n);n+=2;var M=s.readUshort(i,n);n+=2;var T=s.readUshort(i,n);n+=2;var A,v=d[g],y=h+12*c+T;if(p==0)A=s.readUnicode(i,y,M/2);else if(p==3&&x==0)A=s.readUnicode(i,y,M/2);else if(x==0)A=s.readASCII(i,y,M);else if(x==1)A=s.readUnicode(i,y,M/2);else if(x==3)A=s.readUnicode(i,y,M/2);else{if(p!=1)throw"unknown encoding "+x+", platformID: "+p;A=s.readASCII(i,y,M),console.debug("reading unknown MAC encoding "+x+" as ASCII")}var b="p"+p+","+m.toString(16);l[b]==null&&(l[b]={}),l[b][v!==void 0?v:g]=A,l[b]._lang=m}for(var E in l)if(l[E].postScriptName!=null&&l[E]._lang==1033)return l[E];for(var E in l)if(l[E].postScriptName!=null&&l[E]._lang==0)return l[E];for(var E in l)if(l[E].postScriptName!=null&&l[E]._lang==3084)return l[E];for(var E in l)if(l[E].postScriptName!=null)return l[E];for(var E in l){u=E;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(i,n,a){var s=e._bin.readUshort(i,n);n+=2;var l={};if(s==0)e["OS/2"].version0(i,n,l);else if(s==1)e["OS/2"].version1(i,n,l);else if(s==2||s==3||s==4)e["OS/2"].version2(i,n,l);else{if(s!=5)throw"unknown OS/2 table version: "+s;e["OS/2"].version5(i,n,l)}return l},e["OS/2"].version0=function(i,n,a){var s=e._bin;return a.xAvgCharWidth=s.readShort(i,n),n+=2,a.usWeightClass=s.readUshort(i,n),n+=2,a.usWidthClass=s.readUshort(i,n),n+=2,a.fsType=s.readUshort(i,n),n+=2,a.ySubscriptXSize=s.readShort(i,n),n+=2,a.ySubscriptYSize=s.readShort(i,n),n+=2,a.ySubscriptXOffset=s.readShort(i,n),n+=2,a.ySubscriptYOffset=s.readShort(i,n),n+=2,a.ySuperscriptXSize=s.readShort(i,n),n+=2,a.ySuperscriptYSize=s.readShort(i,n),n+=2,a.ySuperscriptXOffset=s.readShort(i,n),n+=2,a.ySuperscriptYOffset=s.readShort(i,n),n+=2,a.yStrikeoutSize=s.readShort(i,n),n+=2,a.yStrikeoutPosition=s.readShort(i,n),n+=2,a.sFamilyClass=s.readShort(i,n),n+=2,a.panose=s.readBytes(i,n,10),n+=10,a.ulUnicodeRange1=s.readUint(i,n),n+=4,a.ulUnicodeRange2=s.readUint(i,n),n+=4,a.ulUnicodeRange3=s.readUint(i,n),n+=4,a.ulUnicodeRange4=s.readUint(i,n),n+=4,a.achVendID=[s.readInt8(i,n),s.readInt8(i,n+1),s.readInt8(i,n+2),s.readInt8(i,n+3)],n+=4,a.fsSelection=s.readUshort(i,n),n+=2,a.usFirstCharIndex=s.readUshort(i,n),n+=2,a.usLastCharIndex=s.readUshort(i,n),n+=2,a.sTypoAscender=s.readShort(i,n),n+=2,a.sTypoDescender=s.readShort(i,n),n+=2,a.sTypoLineGap=s.readShort(i,n),n+=2,a.usWinAscent=s.readUshort(i,n),n+=2,a.usWinDescent=s.readUshort(i,n),n+=2},e["OS/2"].version1=function(i,n,a){var s=e._bin;return n=e["OS/2"].version0(i,n,a),a.ulCodePageRange1=s.readUint(i,n),n+=4,a.ulCodePageRange2=s.readUint(i,n),n+=4},e["OS/2"].version2=function(i,n,a){var s=e._bin;return n=e["OS/2"].version1(i,n,a),a.sxHeight=s.readShort(i,n),n+=2,a.sCapHeight=s.readShort(i,n),n+=2,a.usDefault=s.readUshort(i,n),n+=2,a.usBreak=s.readUshort(i,n),n+=2,a.usMaxContext=s.readUshort(i,n),n+=2},e["OS/2"].version5=function(i,n,a){var s=e._bin;return n=e["OS/2"].version2(i,n,a),a.usLowerOpticalPointSize=s.readUshort(i,n),n+=2,a.usUpperOpticalPointSize=s.readUshort(i,n),n+=2},e.post={},e.post.parse=function(i,n,a){var s=e._bin,l={};return l.version=s.readFixed(i,n),n+=4,l.italicAngle=s.readFixed(i,n),n+=4,l.underlinePosition=s.readShort(i,n),n+=2,l.underlineThickness=s.readShort(i,n),n+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(i,n){var a=i.cmap,s=-1;if(a.p0e4!=null?s=a.p0e4:a.p3e1!=null?s=a.p3e1:a.p1e0!=null?s=a.p1e0:a.p0e3!=null&&(s=a.p0e3),s==-1)throw"no familiar platform and encoding!";var l=a.tables[s];if(l.format==0)return n>=l.map.length?0:l.map[n];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(n<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>n?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[n-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:n+l.idDelta[c])}if(l.format==12){if(n>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var d=l.groups[u];if(d[0]<=n&&n<=d[1])return d[2]+(n-d[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(i,n){var a={cmds:[],crds:[]};if(i.SVG&&i.SVG.entries[n]){var s=i.SVG.entries[n];return s==null?a:(typeof s=="string"&&(s=e.SVG.toPath(s),i.SVG.entries[n]=s),s)}if(i.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:i.CFF.Private?i.CFF.Private.defaultWidthX:0,open:!1},c=i.CFF,u=i.CFF.Private;if(c.ROS){for(var d=0;c.FDSelect[d+2]<=n;)d+=2;u=c.FDArray[c.FDSelect[d+1]].Private}e.U._drawCFF(i.CFF.CharStrings[n],l,c,u,a)}else i.glyf&&e.U._drawGlyf(n,i,a);return a},e.U._drawGlyf=function(i,n,a){var s=n.glyf[i];s==null&&(s=n.glyf[i]=e.glyf._parseGlyf(n,i)),s!=null&&(s.noc>-1?e.U._simpleGlyph(s,a):e.U._compoGlyph(s,n,a))},e.U._simpleGlyph=function(i,n){for(var a=0;a<i.noc;a++){for(var s=a==0?0:i.endPts[a-1]+1,l=i.endPts[a],c=s;c<=l;c++){var u=c==s?l:c-1,d=c==l?s:c+1,h=1&i.flags[c],f=1&i.flags[u],p=1&i.flags[d],x=i.xs[c],m=i.ys[c];if(c==s)if(h){if(!f){e.U.P.moveTo(n,x,m);continue}e.U.P.moveTo(n,i.xs[u],i.ys[u])}else f?e.U.P.moveTo(n,i.xs[u],i.ys[u]):e.U.P.moveTo(n,(i.xs[u]+x)/2,(i.ys[u]+m)/2);h?f&&e.U.P.lineTo(n,x,m):p?e.U.P.qcurveTo(n,x,m,i.xs[d],i.ys[d]):e.U.P.qcurveTo(n,x,m,(x+i.xs[d])/2,(m+i.ys[d])/2)}e.U.P.closePath(n)}},e.U._compoGlyph=function(i,n,a){for(var s=0;s<i.parts.length;s++){var l={cmds:[],crds:[]},c=i.parts[s];e.U._drawGlyf(c.glyphIndex,n,l);for(var u=c.m,d=0;d<l.crds.length;d+=2){var h=l.crds[d],f=l.crds[d+1];a.crds.push(h*u.a+f*u.b+u.tx),a.crds.push(h*u.c+f*u.d+u.ty)}for(d=0;d<l.cmds.length;d++)a.cmds.push(l.cmds[d])}},e.U._getGlyphClass=function(i,n){var a=e._lctf.getInterval(n,i);return a==-1?0:n[a+2]},e.U._applySubs=function(i,n,a,s){for(var l=i.length-n-1,c=0;c<a.tabs.length;c++)if(a.tabs[c]!=null){var u,d=a.tabs[c];if(!d.coverage||(u=e._lctf.coverageIndex(d.coverage,i[n]))!=-1){if(a.ltype==1)i[n],d.fmt==1?i[n]=i[n]+d.delta:i[n]=d.newg[u];else if(a.ltype==4)for(var h=d.vals[u],f=0;f<h.length;f++){var p=h[f],x=p.chain.length;if(!(x>l)){for(var m=!0,g=0,M=0;M<x;M++){for(;i[n+g+(1+M)]==-1;)g++;p.chain[M]!=i[n+g+(1+M)]&&(m=!1)}if(m){for(i[n]=p.nglyph,M=0;M<x+g;M++)i[n+M+1]=-1;break}}}else if(a.ltype==5&&d.fmt==2)for(var T=e._lctf.getInterval(d.cDef,i[n]),A=d.cDef[T+2],v=d.scset[A],y=0;y<v.length;y++){var b=v[y],E=b.input;if(!(E.length>l)){for(m=!0,M=0;M<E.length;M++){var S=e._lctf.getInterval(d.cDef,i[n+1+M]);if(T==-1&&d.cDef[S+2]!=E[M]){m=!1;break}}if(m){var _=b.substLookupRecords;for(f=0;f<_.length;f+=2)_[f],_[f+1]}}}else if(a.ltype==6&&d.fmt==3){if(!e.U._glsCovered(i,d.backCvg,n-d.backCvg.length)||!e.U._glsCovered(i,d.inptCvg,n)||!e.U._glsCovered(i,d.ahedCvg,n+d.inptCvg.length))continue;var C=d.lookupRec;for(y=0;y<C.length;y+=2){T=C[y];var w=s[C[y+1]];e.U._applySubs(i,n+T,w,s)}}}}},e.U._glsCovered=function(i,n,a){for(var s=0;s<n.length;s++)if(e._lctf.coverageIndex(n[s],i[a+s])==-1)return!1;return!0},e.U.glyphsToPath=function(i,n,a){for(var s={cmds:[],crds:[]},l=0,c=0;c<n.length;c++){var u=n[c];if(u!=-1){for(var d=c<n.length-1&&n[c+1]!=-1?n[c+1]:0,h=e.U.glyphToPath(i,u),f=0;f<h.crds.length;f+=2)s.crds.push(h.crds[f]+l),s.crds.push(h.crds[f+1]);for(a&&s.cmds.push(a),f=0;f<h.cmds.length;f++)s.cmds.push(h.cmds[f]);a&&s.cmds.push("X"),l+=i.hmtx.aWidth[u],c<n.length-1&&(l+=e.U.getPairAdjustment(i,u,d))}}return s},e.U.P={},e.U.P.moveTo=function(i,n,a){i.cmds.push("M"),i.crds.push(n,a)},e.U.P.lineTo=function(i,n,a){i.cmds.push("L"),i.crds.push(n,a)},e.U.P.curveTo=function(i,n,a,s,l,c,u){i.cmds.push("C"),i.crds.push(n,a,s,l,c,u)},e.U.P.qcurveTo=function(i,n,a,s,l){i.cmds.push("Q"),i.crds.push(n,a,s,l)},e.U.P.closePath=function(i){i.cmds.push("Z")},e.U._drawCFF=function(i,n,a,s,l){for(var c=n.stack,u=n.nStems,d=n.haveWidth,h=n.width,f=n.open,p=0,x=n.x,m=n.y,g=0,M=0,T=0,A=0,v=0,y=0,b=0,E=0,S=0,_=0,C={val:0,size:0};p<i.length;){e.CFF.getCharString(i,p,C);var w=C.val;if(p+=C.size,w=="o1"||w=="o18")c.length%2!=0&&!d&&(h=c.shift()+s.nominalWidthX),u+=c.length>>1,c.length=0,d=!0;else if(w=="o3"||w=="o23")c.length%2!=0&&!d&&(h=c.shift()+s.nominalWidthX),u+=c.length>>1,c.length=0,d=!0;else if(w=="o4")c.length>1&&!d&&(h=c.shift()+s.nominalWidthX,d=!0),f&&e.U.P.closePath(l),m+=c.pop(),e.U.P.moveTo(l,x,m),f=!0;else if(w=="o5")for(;c.length>0;)x+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,x,m);else if(w=="o6"||w=="o7")for(var P=c.length,L=w=="o6",I=0;I<P;I++){var O=c.shift();L?x+=O:m+=O,L=!L,e.U.P.lineTo(l,x,m)}else if(w=="o8"||w=="o24"){P=c.length;for(var V=0;V+6<=P;)g=x+c.shift(),M=m+c.shift(),T=g+c.shift(),A=M+c.shift(),x=T+c.shift(),m=A+c.shift(),e.U.P.curveTo(l,g,M,T,A,x,m),V+=6;w=="o24"&&(x+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,x,m))}else{if(w=="o11")break;if(w=="o1234"||w=="o1235"||w=="o1236"||w=="o1237")w=="o1234"&&(M=m,T=(g=x+c.shift())+c.shift(),_=A=M+c.shift(),y=A,E=m,x=(b=(v=(S=T+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,g,M,T,A,S,_),e.U.P.curveTo(l,v,y,b,E,x,m)),w=="o1235"&&(g=x+c.shift(),M=m+c.shift(),T=g+c.shift(),A=M+c.shift(),S=T+c.shift(),_=A+c.shift(),v=S+c.shift(),y=_+c.shift(),b=v+c.shift(),E=y+c.shift(),x=b+c.shift(),m=E+c.shift(),c.shift(),e.U.P.curveTo(l,g,M,T,A,S,_),e.U.P.curveTo(l,v,y,b,E,x,m)),w=="o1236"&&(g=x+c.shift(),M=m+c.shift(),T=g+c.shift(),_=A=M+c.shift(),y=A,b=(v=(S=T+c.shift())+c.shift())+c.shift(),E=y+c.shift(),x=b+c.shift(),e.U.P.curveTo(l,g,M,T,A,S,_),e.U.P.curveTo(l,v,y,b,E,x,m)),w=="o1237"&&(g=x+c.shift(),M=m+c.shift(),T=g+c.shift(),A=M+c.shift(),S=T+c.shift(),_=A+c.shift(),v=S+c.shift(),y=_+c.shift(),b=v+c.shift(),E=y+c.shift(),Math.abs(b-x)>Math.abs(E-m)?x=b+c.shift():m=E+c.shift(),e.U.P.curveTo(l,g,M,T,A,S,_),e.U.P.curveTo(l,v,y,b,E,x,m));else if(w=="o14"){if(c.length>0&&!d&&(h=c.shift()+a.nominalWidthX,d=!0),c.length==4){var H=c.shift(),W=c.shift(),X=c.shift(),N=c.shift(),Y=e.CFF.glyphBySE(a,X),J=e.CFF.glyphBySE(a,N);e.U._drawCFF(a.CharStrings[Y],n,a,s,l),n.x=H,n.y=W,e.U._drawCFF(a.CharStrings[J],n,a,s,l)}f&&(e.U.P.closePath(l),f=!1)}else if(w=="o19"||w=="o20")c.length%2!=0&&!d&&(h=c.shift()+s.nominalWidthX),u+=c.length>>1,c.length=0,d=!0,p+=u+7>>3;else if(w=="o21")c.length>2&&!d&&(h=c.shift()+s.nominalWidthX,d=!0),m+=c.pop(),x+=c.pop(),f&&e.U.P.closePath(l),e.U.P.moveTo(l,x,m),f=!0;else if(w=="o22")c.length>1&&!d&&(h=c.shift()+s.nominalWidthX,d=!0),x+=c.pop(),f&&e.U.P.closePath(l),e.U.P.moveTo(l,x,m),f=!0;else if(w=="o25"){for(;c.length>6;)x+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,x,m);g=x+c.shift(),M=m+c.shift(),T=g+c.shift(),A=M+c.shift(),x=T+c.shift(),m=A+c.shift(),e.U.P.curveTo(l,g,M,T,A,x,m)}else if(w=="o26")for(c.length%2&&(x+=c.shift());c.length>0;)g=x,M=m+c.shift(),x=T=g+c.shift(),m=(A=M+c.shift())+c.shift(),e.U.P.curveTo(l,g,M,T,A,x,m);else if(w=="o27")for(c.length%2&&(m+=c.shift());c.length>0;)M=m,T=(g=x+c.shift())+c.shift(),A=M+c.shift(),x=T+c.shift(),m=A,e.U.P.curveTo(l,g,M,T,A,x,m);else if(w=="o10"||w=="o29"){var ne=w=="o10"?s:a;if(c.length==0)console.debug("error: empty stack");else{var $=c.pop(),B=ne.Subrs[$+ne.Bias];n.x=x,n.y=m,n.nStems=u,n.haveWidth=d,n.width=h,n.open=f,e.U._drawCFF(B,n,a,s,l),x=n.x,m=n.y,u=n.nStems,d=n.haveWidth,h=n.width,f=n.open}}else if(w=="o30"||w=="o31"){var G=c.length,K=(V=0,w=="o31");for(V+=G-(P=-3&G);V<P;)K?(M=m,T=(g=x+c.shift())+c.shift(),m=(A=M+c.shift())+c.shift(),P-V==5?(x=T+c.shift(),V++):x=T,K=!1):(g=x,M=m+c.shift(),T=g+c.shift(),A=M+c.shift(),x=T+c.shift(),P-V==5?(m=A+c.shift(),V++):m=A,K=!0),e.U.P.curveTo(l,g,M,T,A,x,m),V+=4}else{if((w+"").charAt(0)=="o")throw console.debug("Unknown operation: "+w,i),w;c.push(w)}}}n.x=x,n.y=m,n.nStems=u,n.haveWidth=d,n.width=h,n.open=f};var t=e,r={Typr:t};return o.Typr=t,o.default=r,Object.defineProperty(o,"__esModule",{value:!0}),o})({}).Typr}function im(){return(function(o){var e=Uint8Array,t=Uint16Array,r=Uint32Array,i=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),n=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(w,P){for(var L=new t(31),I=0;I<31;++I)L[I]=P+=1<<w[I-1];var O=new r(L[30]);for(I=1;I<30;++I)for(var V=L[I];V<L[I+1];++V)O[V]=V-L[I]<<5|I;return[L,O]},l=s(i,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var d=s(n,0)[0],h=new t(32768),f=0;f<32768;++f){var p=(43690&f)>>>1|(21845&f)<<1;p=(61680&(p=(52428&p)>>>2|(13107&p)<<2))>>>4|(3855&p)<<4,h[f]=((65280&p)>>>8|(255&p)<<8)>>>1}var x=function(w,P,L){for(var I=w.length,O=0,V=new t(P);O<I;++O)++V[w[O]-1];var H,W=new t(P);for(O=0;O<P;++O)W[O]=W[O-1]+V[O-1]<<1;{H=new t(1<<P);var X=15-P;for(O=0;O<I;++O)if(w[O])for(var N=O<<4|w[O],Y=P-w[O],J=W[w[O]-1]++<<Y,ne=J|(1<<Y)-1;J<=ne;++J)H[h[J]>>>X]=N}return H},m=new e(288);for(f=0;f<144;++f)m[f]=8;for(f=144;f<256;++f)m[f]=9;for(f=256;f<280;++f)m[f]=7;for(f=280;f<288;++f)m[f]=8;var g=new e(32);for(f=0;f<32;++f)g[f]=5;var M=x(m,9),T=x(g,5),A=function(w){for(var P=w[0],L=1;L<w.length;++L)w[L]>P&&(P=w[L]);return P},v=function(w,P,L){var I=P/8|0;return(w[I]|w[I+1]<<8)>>(7&P)&L},y=function(w,P){var L=P/8|0;return(w[L]|w[L+1]<<8|w[L+2]<<16)>>(7&P)},b=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(w,P,L){var I=new Error(P||b[w]);if(I.code=w,Error.captureStackTrace&&Error.captureStackTrace(I,E),!L)throw I;return I},S=function(w,P,L){var I=w.length;if(!I||L&&!L.l&&I<5)return P||new e(0);var O=!P||L,V=!L||L.i;L||(L={}),P||(P=new e(3*I));var H,W=function(ye){var Re=P.length;if(ye>Re){var Me=new e(Math.max(2*Re,ye));Me.set(P),P=Me}},X=L.f||0,N=L.p||0,Y=L.b||0,J=L.l,ne=L.d,$=L.m,B=L.n,G=8*I;do{if(!J){L.f=X=v(w,N,1);var K=v(w,N+1,3);if(N+=3,!K){var me=w[(Ae=((H=N)/8|0)+(7&H&&1)+4)-4]|w[Ae-3]<<8,he=Ae+me;if(he>I){V&&E(0);break}O&&W(Y+me),P.set(w.subarray(Ae,he),Y),L.b=Y+=me,L.p=N=8*he;continue}if(K==1)J=M,ne=T,$=9,B=5;else if(K==2){var ce=v(w,N,31)+257,ue=v(w,N+10,15)+4,De=ce+v(w,N+5,31)+1;N+=14;for(var Fe=new e(De),F=new e(19),Te=0;Te<ue;++Te)F[a[Te]]=v(w,N+3*Te,7);N+=3*ue;var Ue=A(F),ge=(1<<Ue)-1,le=x(F,Ue);for(Te=0;Te<De;){var Ae,ee=le[v(w,N,ge)];if(N+=15&ee,(Ae=ee>>>4)<16)Fe[Te++]=Ae;else{var Se=0,U=0;for(Ae==16?(U=3+v(w,N,3),N+=2,Se=Fe[Te-1]):Ae==17?(U=3+v(w,N,7),N+=3):Ae==18&&(U=11+v(w,N,127),N+=7);U--;)Fe[Te++]=Se}}var R=Fe.subarray(0,ce),z=Fe.subarray(ce);$=A(R),B=A(z),J=x(R,$),ne=x(z,B)}else E(1);if(N>G){V&&E(0);break}}O&&W(Y+131072);for(var ie=(1<<$)-1,te=(1<<B)-1,j=N;;j=N){var _e=(Se=J[y(w,N)&ie])>>>4;if((N+=15&Se)>G){V&&E(0);break}if(Se||E(2),_e<256)P[Y++]=_e;else{if(_e==256){j=N,J=null;break}var xe=_e-254;if(_e>264){var Ce=i[Te=_e-257];xe=v(w,N,(1<<Ce)-1)+c[Te],N+=Ce}var we=ne[y(w,N)&te],se=we>>>4;if(we||E(3),N+=15&we,z=d[se],se>3&&(Ce=n[se],z+=y(w,N)&(1<<Ce)-1,N+=Ce),N>G){V&&E(0);break}O&&W(Y+131072);for(var fe=Y+xe;Y<fe;Y+=4)P[Y]=P[Y-z],P[Y+1]=P[Y+1-z],P[Y+2]=P[Y+2-z],P[Y+3]=P[Y+3-z];Y=fe}}L.l=J,L.p=j,L.b=Y,J&&(X=1,L.m=$,L.d=ne,L.n=B)}while(!X);return Y==P.length?P:(function(ye,Re,Me){(Me==null||Me>ye.length)&&(Me=ye.length);var Ge=new(ye instanceof t?t:ye instanceof r?r:e)(Me-Re);return Ge.set(ye.subarray(Re,Me)),Ge})(P,0,Y)},_=new e(0),C=typeof TextDecoder<"u"&&new TextDecoder;try{C.decode(_,{stream:!0})}catch{}return o.convert_streams=function(w){var P=new DataView(w),L=0;function I(){var ce=P.getUint16(L);return L+=2,ce}function O(){var ce=P.getUint32(L);return L+=4,ce}function V(ce){me.setUint16(he,ce),he+=2}function H(ce){me.setUint32(he,ce),he+=4}for(var W={signature:O(),flavor:O(),length:O(),numTables:I(),reserved:I(),totalSfntSize:O(),majorVersion:I(),minorVersion:I(),metaOffset:O(),metaLength:O(),metaOrigLength:O(),privOffset:O(),privLength:O()},X=0;Math.pow(2,X)<=W.numTables;)X++;X--;for(var N=16*Math.pow(2,X),Y=16*W.numTables-N,J=12,ne=[],$=0;$<W.numTables;$++)ne.push({tag:O(),offset:O(),compLength:O(),origLength:O(),origChecksum:O()}),J+=16;var B,G=new Uint8Array(12+16*ne.length+ne.reduce((function(ce,ue){return ce+ue.origLength+4}),0)),K=G.buffer,me=new DataView(K),he=0;return H(W.flavor),V(W.numTables),V(N),V(X),V(Y),ne.forEach((function(ce){H(ce.tag),H(ce.origChecksum),H(J),H(ce.origLength),ce.outOffset=J,(J+=ce.origLength)%4!=0&&(J+=4-J%4)})),ne.forEach((function(ce){var ue,De=w.slice(ce.offset,ce.offset+ce.compLength);if(ce.compLength!=ce.origLength){var Fe=new Uint8Array(ce.origLength);ue=new Uint8Array(De,2),S(ue,Fe)}else Fe=new Uint8Array(De);G.set(Fe,ce.outOffset);var F=0;(J=ce.outOffset+ce.origLength)%4!=0&&(F=4-J%4),G.set(new Uint8Array(F).buffer,ce.outOffset+ce.origLength),B=J+F})),K.slice(0,B)},Object.defineProperty(o,"__esModule",{value:!0}),o})({}).convert_streams}function rm(o,e){const t={M:2,L:2,Q:4,C:6,Z:0},r={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},i=1,n=2,a=4,s=8,l=16,c=32;let u;function d(b){if(!u){const E={R:n,L:i,D:a,C:l,U:c,T:s};u=new Map;for(let S in r){let _=0;r[S].split(",").forEach(C=>{let[w,P]=C.split("+");w=parseInt(w,36),P=P?parseInt(P,36):0,u.set(_+=w,E[S]);for(let L=P;L--;)u.set(++_,E[S])})}}return u.get(b)||c}const h=1,f=2,p=3,x=4,m=[null,"isol","init","fina","medi"];function g(b){const E=new Uint8Array(b.length);let S=c,_=h,C=-1;for(let w=0;w<b.length;w++){const P=b.codePointAt(w);let L=d(P)|0,I=h;L&s||(S&(i|a|l)?L&(n|a|l)?(I=p,(_===h||_===p)&&E[C]++):L&(i|c)&&(_===f||_===x)&&E[C]--:S&(n|c)&&(_===f||_===x)&&E[C]--,_=E[w]=I,S=L,C=w,P>65535&&w++)}return E}function M(b,E){const S=[];for(let C=0;C<E.length;C++){const w=E.codePointAt(C);w>65535&&C++,S.push(o.U.codeToGlyph(b,w))}const _=b.GSUB;if(_){const{lookupList:C,featureList:w}=_;let P;const L=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,I=[];w.forEach(O=>{if(L.test(O.tag))for(let V=0;V<O.tab.length;V++){if(I[O.tab[V]])continue;I[O.tab[V]]=!0;const H=C[O.tab[V]],W=/^(isol|init|fina|medi)$/.test(O.tag);W&&!P&&(P=g(E));for(let X=0;X<S.length;X++)(!P||!W||m[P[X]]===O.tag)&&o.U._applySubs(S,X,H,C)}})}return S}function T(b,E){const S=new Int16Array(E.length*3);let _=0;for(;_<E.length;_++){const L=E[_];if(L===-1)continue;S[_*3+2]=b.hmtx.aWidth[L];const I=b.GPOS;if(I){const O=I.lookupList;for(let V=0;V<O.length;V++){const H=O[V];for(let W=0;W<H.tabs.length;W++){const X=H.tabs[W];if(H.ltype===1){if(o._lctf.coverageIndex(X.coverage,L)!==-1&&X.pos){P(X.pos,_);break}}else if(H.ltype===2){let N=null,Y=C();if(Y!==-1){const J=o._lctf.coverageIndex(X.coverage,E[Y]);if(J!==-1){if(X.fmt===1){const ne=X.pairsets[J];for(let $=0;$<ne.length;$++)ne[$].gid2===L&&(N=ne[$])}else if(X.fmt===2){const ne=o.U._getGlyphClass(E[Y],X.classDef1),$=o.U._getGlyphClass(L,X.classDef2);N=X.matrix[ne][$]}if(N){N.val1&&P(N.val1,Y),N.val2&&P(N.val2,_);break}}}}else if(H.ltype===4){const N=o._lctf.coverageIndex(X.markCoverage,L);if(N!==-1){const Y=C(w),J=Y===-1?-1:o._lctf.coverageIndex(X.baseCoverage,E[Y]);if(J!==-1){const ne=X.markArray[N],$=X.baseArray[J][ne.markClass];S[_*3]=$.x-ne.x+S[Y*3]-S[Y*3+2],S[_*3+1]=$.y-ne.y+S[Y*3+1];break}}}else if(H.ltype===6){const N=o._lctf.coverageIndex(X.mark1Coverage,L);if(N!==-1){const Y=C();if(Y!==-1){const J=E[Y];if(A(b,J)===3){const ne=o._lctf.coverageIndex(X.mark2Coverage,J);if(ne!==-1){const $=X.mark1Array[N],B=X.mark2Array[ne][$.markClass];S[_*3]=B.x-$.x+S[Y*3]-S[Y*3+2],S[_*3+1]=B.y-$.y+S[Y*3+1];break}}}}}}}}else if(b.kern&&!b.cff){const O=C();if(O!==-1){const V=b.kern.glyph1.indexOf(E[O]);if(V!==-1){const H=b.kern.rval[V].glyph2.indexOf(L);H!==-1&&(S[O*3+2]+=b.kern.rval[V].vals[H])}}}}return S;function C(L){for(let I=_-1;I>=0;I--)if(E[I]!==-1&&(!L||L(E[I])))return I;return-1}function w(L){return A(b,L)===1}function P(L,I){for(let O=0;O<3;O++)S[I*3+O]+=L[O]||0}}function A(b,E){const S=b.GDEF&&b.GDEF.glyphClassDef;return S?o.U._getGlyphClass(E,S):0}function v(...b){for(let E=0;E<b.length;E++)if(typeof b[E]=="number")return b[E]}function y(b){const E=Object.create(null),S=b["OS/2"],_=b.hhea,C=b.head.unitsPerEm,w=v(S&&S.sTypoAscender,_&&_.ascender,C),P={unitsPerEm:C,ascender:w,descender:v(S&&S.sTypoDescender,_&&_.descender,0),capHeight:v(S&&S.sCapHeight,w),xHeight:v(S&&S.sxHeight,w),lineGap:v(S&&S.sTypoLineGap,_&&_.lineGap),supportsCodePoint(L){return o.U.codeToGlyph(b,L)>0},forEachGlyph(L,I,O,V){let H=0;const W=1/P.unitsPerEm*I,X=M(b,L);let N=0;const Y=T(b,X);return X.forEach((J,ne)=>{if(J!==-1){let $=E[J];if(!$){const{cmds:B,crds:G}=o.U.glyphToPath(b,J);let K="",me=0;for(let Fe=0,F=B.length;Fe<F;Fe++){const Te=t[B[Fe]];K+=B[Fe];for(let Ue=1;Ue<=Te;Ue++)K+=(Ue>1?",":"")+G[me++]}let he,ce,ue,De;if(G.length){he=ce=1/0,ue=De=-1/0;for(let Fe=0,F=G.length;Fe<F;Fe+=2){let Te=G[Fe],Ue=G[Fe+1];Te<he&&(he=Te),Ue<ce&&(ce=Ue),Te>ue&&(ue=Te),Ue>De&&(De=Ue)}}else he=ue=ce=De=0;$=E[J]={index:J,advanceWidth:b.hmtx.aWidth[J],xMin:he,yMin:ce,xMax:ue,yMax:De,path:K}}V.call(null,$,H+Y[ne*3]*W,Y[ne*3+1]*W,N),H+=Y[ne*3+2]*W,O&&(H+=O*I)}N+=L.codePointAt(N)>65535?2:1}),H}};return P}return function(E){const S=new Uint8Array(E,0,4),_=o._bin.readASCII(S,0,4);if(_==="wOFF")E=e(E);else if(_==="wOF2")throw new Error("woff2 fonts not supported");return y(o.parse(E)[0])}}const am=zi({name:"Typr Font Parser",dependencies:[nm,im,rm],init(o,e,t){const r=o(),i=e();return t(r,i)}});function sm(){return(function(o){var e=function(){this.buckets=new Map};e.prototype.add=function(T){var A=T>>5;this.buckets.set(A,(this.buckets.get(A)||0)|1<<(31&T))},e.prototype.has=function(T){var A=this.buckets.get(T>>5);return A!==void 0&&(A&1<<(31&T))!=0},e.prototype.serialize=function(){var T=[];return this.buckets.forEach((function(A,v){T.push((+v).toString(36)+":"+A.toString(36))})),T.join(",")},e.prototype.deserialize=function(T){var A=this;this.buckets.clear(),T.split(",").forEach((function(v){var y=v.split(":");A.buckets.set(parseInt(y[0],36),parseInt(y[1],36))}))};var t=Math.pow(2,8),r=t-1,i=~r;function n(T){var A=(function(y){return y&i})(T).toString(16),v=(function(y){return(y&i)+t-1})(T).toString(16);return"codepoint-index/plane"+(T>>16)+"/"+A+"-"+v+".json"}function a(T,A){var v=T&r,y=A.codePointAt(v/6|0);return((y=(y||48)-48)&1<<v%6)!=0}function s(T,A){var v;(v=T,v.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map((function(y){return y.split("-").map((function(b){return parseInt(b.trim(),16)}))}))).forEach((function(y){var b=y[0],E=y[1];E===void 0&&(E=b),A(b,E)}))}function l(T,A){s(T,(function(v,y){for(var b=v;b<=y;b++)A(b)}))}var c={},u={},d=new WeakMap,h="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function f(T){var A=d.get(T);return A||(A=new e,l(T.ranges,(function(v){return A.add(v)})),d.set(T,A)),A}var p,x=new Map;function m(T,A,v){return T[A]?A:T[v]?v:(function(y){for(var b in y)return b})(T)}function g(T,A){var v=A;if(!T.includes(v)){v=1/0;for(var y=0;y<T.length;y++)Math.abs(T[y]-A)<Math.abs(v-A)&&(v=T[y])}return v}function M(T){return p||(p=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",(function(A){p.add(A)}))),p.has(T)}return o.CodePointSet=e,o.clearCache=function(){c={},u={}},o.getFontsForString=function(T,A){A===void 0&&(A={});var v,y=A.lang;y===void 0&&(y=new RegExp("\\p{Script=Hangul}","u").test(v=T)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(v)?"ja":"en");var b=A.category;b===void 0&&(b="sans-serif");var E=A.style;E===void 0&&(E="normal");var S=A.weight;S===void 0&&(S=400);var _=(A.dataUrl||h).replace(/\/$/g,""),C=new Map,w=new Uint8Array(T.length),P={},L={},I=new Array(T.length),O=new Map,V=!1;function H(N){var Y=x.get(N);return Y||(Y=fetch(_+"/"+N).then((function(J){if(!J.ok)throw new Error(J.statusText);return J.json().then((function(ne){if(!Array.isArray(ne)||ne[0]!==1)throw new Error("Incorrect schema version; need 1, got "+ne[0]);return ne[1]}))})).catch((function(J){if(_!==h)return V||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+_+'", trying default CDN. '+J.message),V=!0),_=h,x.delete(N),H(N);throw J})),x.set(N,Y)),Y}for(var W=function(N){var Y=T.codePointAt(N),J=n(Y);I[N]=J,c[J]||O.has(J)||O.set(J,H(J).then((function(ne){c[J]=ne}))),Y>65535&&(N++,X=N)},X=0;X<T.length;X++)W(X);return Promise.all(O.values()).then((function(){O.clear();for(var N=function(J){var ne=T.codePointAt(J),$=null,B=c[I[J]],G=void 0;for(var K in B){var me=L[K];if(me===void 0&&(me=L[K]=new RegExp(K).test(y||"en")),me){for(var he in G=K,B[K])if(a(ne,B[K][he])){$=he;break}break}}if(!$){e:for(var ce in B)if(ce!==G){for(var ue in B[ce])if(a(ne,B[ce][ue])){$=ue;break e}}}$||(console.debug("No font coverage for U+"+ne.toString(16)),$="latin"),I[J]=$,u[$]||O.has($)||O.set($,H("font-meta/"+$+".json").then((function(De){u[$]=De}))),ne>65535&&(J++,Y=J)},Y=0;Y<T.length;Y++)N(Y);return Promise.all(O.values())})).then((function(){for(var N,Y=null,J=0;J<T.length;J++){var ne=T.codePointAt(J);if(Y&&(M(ne)||f(Y).has(ne)))w[J]=w[J-1];else{Y=u[I[J]];var $=P[Y.id];if(!$){var B=Y.typeforms,G=m(B,b,"sans-serif"),K=m(B[G],E,"normal"),me=g((N=B[G])===null||N===void 0?void 0:N[K],S);$=P[Y.id]=_+"/font-files/"+Y.id+"/"+G+"."+K+"."+me+".woff"}var he=C.get($);he==null&&(he=C.size,C.set($,he)),w[J]=he}ne>65535&&(J++,w[J]=w[J-1])}return{fontUrls:Array.from(C.keys()),chars:w}}))},Object.defineProperty(o,"__esModule",{value:!0}),o})({})}function om(o,e){const t=Object.create(null),r=Object.create(null);function i(a,s){const l=c=>{console.error(`Failure loading font ${a}`,c)};try{const c=new XMLHttpRequest;c.open("get",a,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=o(c.response);u.src=a,s(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function n(a,s){let l=t[a];l?s(l):r[a]?r[a].push(s):(r[a]=[s],i(a,c=>{c.src=a,t[a]=c,r[a].forEach(u=>u(c)),delete r[a]}))}return function(a,s,{lang:l,fonts:c=[],style:u="normal",weight:d="normal",unicodeFontsURL:h}={}){const f=new Uint8Array(a.length),p=[];a.length||M();const x=new Map,m=[];if(u!=="italic"&&(u="normal"),typeof d!="number"&&(d=d==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(A=>!A.lang||A.lang.test(l)).reverse(),c.length){let b=0;(function E(S=0){for(let _=S,C=a.length;_<C;_++){const w=a.codePointAt(_);if(b===1&&p[f[_-1]].supportsCodePoint(w)||_>0&&/\s/.test(a[_]))f[_]=f[_-1],b===2&&(m[m.length-1][1]=_);else for(let P=f[_],L=c.length;P<=L;P++)if(P===L){const I=b===2?m[m.length-1]:m[m.length]=[_,_];I[1]=_,b=2}else{f[_]=P;const{src:I,unicodeRange:O}=c[P];if(!O||T(w,O)){const V=t[I];if(!V){n(I,()=>{E(_)});return}if(V.supportsCodePoint(w)){let H=x.get(V);typeof H!="number"&&(H=p.length,p.push(V),x.set(V,H)),f[_]=H,b=1;break}}}w>65535&&_+1<C&&(f[_+1]=f[_],_++,b===2&&(m[m.length-1][1]=_))}g()})()}else m.push([0,a.length-1]),g();function g(){if(m.length){const A=m.map(v=>a.substring(v[0],v[1]+1)).join(`
`);e.getFontsForString(A,{lang:l||void 0,style:u,weight:d,dataUrl:h}).then(({fontUrls:v,chars:y})=>{const b=p.length;let E=0;m.forEach(_=>{for(let C=0,w=_[1]-_[0];C<=w;C++)f[_[0]+C]=y[E++]+b;E++});let S=0;v.forEach((_,C)=>{n(_,w=>{p[C+b]=w,++S===v.length&&M()})})})}else M()}function M(){s({chars:f,fonts:p})}function T(A,v){for(let y=0;y<v.length;y++){const[b,E=b]=v[y];if(b<=A&&A<=E)return!0}return!1}}}const lm=zi({name:"FontResolver",dependencies:[om,am,sm],init(o,e,t){return o(e,t())}});function cm(o,e){const r=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,i="[^\\S\\u00A0]",n=new RegExp(`${i}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function a({text:p,lang:x,fonts:m,style:g,weight:M,preResolvedFonts:T,unicodeFontsURL:A},v){const y=({chars:b,fonts:E})=>{let S,_;const C=[];for(let w=0;w<b.length;w++)b[w]!==_?(_=b[w],C.push(S={start:w,end:w,fontObj:E[b[w]]})):S.end=w;v(C)};T?y(T):o(p,y,{lang:x,fonts:m,style:g,weight:M,unicodeFontsURL:A})}function s({text:p="",font:x,lang:m,sdfGlyphSize:g=64,fontSize:M=400,fontWeight:T=1,fontStyle:A="normal",letterSpacing:v=0,lineHeight:y="normal",maxWidth:b=1/0,direction:E,textAlign:S="left",textIndent:_=0,whiteSpace:C="normal",overflowWrap:w="normal",anchorX:P=0,anchorY:L=0,metricsOnly:I=!1,unicodeFontsURL:O,preResolvedFonts:V=null,includeCaretPositions:H=!1,chunkedBoundsSize:W=8192,colorRanges:X=null},N){const Y=d(),J={fontLoad:0,typesetting:0};p.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),p=p.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),M=+M,v=+v,b=+b,y=y||"normal",_=+_,a({text:p,lang:m,style:A,weight:T,fonts:typeof x=="string"?[{src:x}]:x,unicodeFontsURL:O,preResolvedFonts:V},ne=>{J.fontLoad=d()-Y;const $=isFinite(b);let B=null,G=null,K=null,me=null,he=null,ce=null,ue=null,De=null,Fe=0,F=0,Te=C!=="nowrap";const Ue=new Map,ge=d();let le=_,Ae=0,ee=new h;const Se=[ee];ne.forEach(te=>{const{fontObj:j}=te,{ascender:_e,descender:xe,unitsPerEm:Ce,lineGap:we,capHeight:se,xHeight:fe}=j;let ye=Ue.get(j);if(!ye){const de=M/Ce,ve=y==="normal"?(_e-xe+we)*de:y*M,Ee=(ve-(_e-xe)*de)/2,pe=Math.min(ve,(_e-xe)*de),re=(_e+xe)/2*de+pe/2;ye={index:Ue.size,src:j.src,fontObj:j,fontSizeMult:de,unitsPerEm:Ce,ascender:_e*de,descender:xe*de,capHeight:se*de,xHeight:fe*de,lineHeight:ve,baseline:-Ee-_e*de,caretTop:re,caretBottom:re-pe},Ue.set(j,ye)}const{fontSizeMult:Re}=ye,Me=p.slice(te.start,te.end+1);let Ge,k;j.forEachGlyph(Me,M,v,(de,ve,Ee,pe)=>{ve+=Ae,pe+=te.start,Ge=ve,k=de;const re=p.charAt(pe),Pe=de.advanceWidth*Re,Ne=ee.count;let Be;if("isEmpty"in de||(de.isWhitespace=!!re&&new RegExp(i).test(re),de.canBreakAfter=!!re&&n.test(re),de.isEmpty=de.xMin===de.xMax||de.yMin===de.yMax||r.test(re)),!de.isWhitespace&&!de.isEmpty&&F++,Te&&$&&!de.isWhitespace&&ve+Pe+le>b&&Ne){if(ee.glyphAt(Ne-1).glyphObj.canBreakAfter)Be=new h,le=-ve;else for(let ot=Ne;ot--;)if(ot===0&&w==="break-word"){Be=new h,le=-ve;break}else if(ee.glyphAt(ot).glyphObj.canBreakAfter){Be=ee.splitAt(ot+1);const rt=Be.glyphAt(0).x;le-=rt;for(let ht=Be.count;ht--;)Be.glyphAt(ht).x-=rt;break}Be&&(ee.isSoftWrapped=!0,ee=Be,Se.push(ee),Fe=b)}let We=ee.glyphAt(ee.count);We.glyphObj=de,We.x=ve+le,We.y=Ee,We.width=Pe,We.charIndex=pe,We.fontData=ye,re===`
`&&(ee=new h,Se.push(ee),le=-(ve+Pe+v*M)+_)}),Ae=Ge+k.advanceWidth*Re+v*M});let U=0;Se.forEach(te=>{let j=!0;for(let _e=te.count;_e--;){const xe=te.glyphAt(_e);j&&!xe.glyphObj.isWhitespace&&(te.width=xe.x+xe.width,te.width>Fe&&(Fe=te.width),j=!1);let{lineHeight:Ce,capHeight:we,xHeight:se,baseline:fe}=xe.fontData;Ce>te.lineHeight&&(te.lineHeight=Ce);const ye=fe-te.baseline;ye<0&&(te.baseline+=ye,te.cap+=ye,te.ex+=ye),te.cap=Math.max(te.cap,te.baseline+we),te.ex=Math.max(te.ex,te.baseline+se)}te.baseline-=U,te.cap-=U,te.ex-=U,U+=te.lineHeight});let R=0,z=0;if(P&&(typeof P=="number"?R=-P:typeof P=="string"&&(R=-Fe*(P==="left"?0:P==="center"?.5:P==="right"?1:c(P)))),L&&(typeof L=="number"?z=-L:typeof L=="string"&&(z=L==="top"?0:L==="top-baseline"?-Se[0].baseline:L==="top-cap"?-Se[0].cap:L==="top-ex"?-Se[0].ex:L==="middle"?U/2:L==="bottom"?U:L==="bottom-baseline"?-Se[Se.length-1].baseline:c(L)*U)),!I){const te=e.getEmbeddingLevels(p,E);B=new Uint16Array(F),G=new Uint8Array(F),K=new Float32Array(F*2),me={},ue=[1/0,1/0,-1/0,-1/0],De=[],H&&(ce=new Float32Array(p.length*4)),X&&(he=new Uint8Array(F*3));let j=0,_e=-1,xe=-1,Ce,we;if(Se.forEach((se,fe)=>{let{count:ye,width:Re}=se;if(ye>0){let Me=0;for(let pe=ye;pe--&&se.glyphAt(pe).glyphObj.isWhitespace;)Me++;let Ge=0,k=0;if(S==="center")Ge=(Fe-Re)/2;else if(S==="right")Ge=Fe-Re;else if(S==="justify"&&se.isSoftWrapped){let pe=0;for(let re=ye-Me;re--;)se.glyphAt(re).glyphObj.isWhitespace&&pe++;k=(Fe-Re)/pe}if(k||Ge){let pe=0;for(let re=0;re<ye;re++){let Pe=se.glyphAt(re);const Ne=Pe.glyphObj;Pe.x+=Ge+pe,k!==0&&Ne.isWhitespace&&re<ye-Me&&(pe+=k,Pe.width+=k)}}const de=e.getReorderSegments(p,te,se.glyphAt(0).charIndex,se.glyphAt(se.count-1).charIndex);for(let pe=0;pe<de.length;pe++){const[re,Pe]=de[pe];let Ne=1/0,Be=-1/0;for(let We=0;We<ye;We++)if(se.glyphAt(We).charIndex>=re){let ot=We,rt=We;for(;rt<ye;rt++){let ht=se.glyphAt(rt);if(ht.charIndex>Pe)break;rt<ye-Me&&(Ne=Math.min(Ne,ht.x),Be=Math.max(Be,ht.x+ht.width))}for(let ht=ot;ht<rt;ht++){const Ft=se.glyphAt(ht);Ft.x=Be-(Ft.x+Ft.width-Ne)}break}}let ve;const Ee=pe=>ve=pe;for(let pe=0;pe<ye;pe++){const re=se.glyphAt(pe);ve=re.glyphObj;const Pe=ve.index,Ne=te.levels[re.charIndex]&1;if(Ne){const Be=e.getMirroredCharacter(p[re.charIndex]);Be&&re.fontData.fontObj.forEachGlyph(Be,0,0,Ee)}if(H){const{charIndex:Be,fontData:We}=re,ot=re.x+R,rt=re.x+re.width+R;ce[Be*4]=Ne?rt:ot,ce[Be*4+1]=Ne?ot:rt,ce[Be*4+2]=se.baseline+We.caretBottom+z,ce[Be*4+3]=se.baseline+We.caretTop+z;const ht=Be-_e;ht>1&&u(ce,_e,ht),_e=Be}if(X){const{charIndex:Be}=re;for(;Be>xe;)xe++,X.hasOwnProperty(xe)&&(we=X[xe])}if(!ve.isWhitespace&&!ve.isEmpty){const Be=j++,{fontSizeMult:We,src:ot,index:rt}=re.fontData,ht=me[ot]||(me[ot]={});ht[Pe]||(ht[Pe]={path:ve.path,pathBounds:[ve.xMin,ve.yMin,ve.xMax,ve.yMax]});const Ft=re.x+R,Zt=re.y+se.baseline+z;K[Be*2]=Ft,K[Be*2+1]=Zt;const wt=Ft+ve.xMin*We,Wt=Zt+ve.yMin*We,ln=Ft+ve.xMax*We,Xt=Zt+ve.yMax*We;wt<ue[0]&&(ue[0]=wt),Wt<ue[1]&&(ue[1]=Wt),ln>ue[2]&&(ue[2]=ln),Xt>ue[3]&&(ue[3]=Xt),Be%W===0&&(Ce={start:Be,end:Be,rect:[1/0,1/0,-1/0,-1/0]},De.push(Ce)),Ce.end++;const pt=Ce.rect;if(wt<pt[0]&&(pt[0]=wt),Wt<pt[1]&&(pt[1]=Wt),ln>pt[2]&&(pt[2]=ln),Xt>pt[3]&&(pt[3]=Xt),B[Be]=Pe,G[Be]=rt,X){const cn=Be*3;he[cn]=we>>16&255,he[cn+1]=we>>8&255,he[cn+2]=we&255}}}}}),ce){const se=p.length-_e;se>1&&u(ce,_e,se)}}const ie=[];Ue.forEach(({index:te,src:j,unitsPerEm:_e,ascender:xe,descender:Ce,lineHeight:we,capHeight:se,xHeight:fe})=>{ie[te]={src:j,unitsPerEm:_e,ascender:xe,descender:Ce,lineHeight:we,capHeight:se,xHeight:fe}}),J.typesetting=d()-ge,N({glyphIds:B,glyphFontIndices:G,glyphPositions:K,glyphData:me,fontData:ie,caretPositions:ce,glyphColors:he,chunkedBounds:De,fontSize:M,topBaseline:z+Se[0].baseline,blockBounds:[R,z-U,R+Fe,z],visibleBounds:ue,timings:J})})}function l(p,x){s({...p,metricsOnly:!0},m=>{const[g,M,T,A]=m.blockBounds;x({width:T-g,height:A-M})})}function c(p){let x=p.match(/^([\d.]+)%$/),m=x?parseFloat(x[1]):NaN;return isNaN(m)?0:m/100}function u(p,x,m){const g=p[x*4],M=p[x*4+1],T=p[x*4+2],A=p[x*4+3],v=(M-g)/m;for(let y=0;y<m;y++){const b=(x+y)*4;p[b]=g+v*y,p[b+1]=g+v*(y+1),p[b+2]=T,p[b+3]=A}}function d(){return(self.performance||Date).now()}function h(){this.data=[]}const f=["glyphObj","x","y","width","charIndex","fontData"];return h.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/f.length)},glyphAt(p){let x=h.flyweight;return x.data=this.data,x.index=p,x},splitAt(p){let x=new h;return x.data=this.data.splice(p*f.length),x}},h.flyweight=f.reduce((p,x,m,g)=>(Object.defineProperty(p,x,{get(){return this.data[this.index*f.length+m]},set(M){this.data[this.index*f.length+m]=M}}),p),{data:null,index:0}),{typeset:s,measure:l}}const ai=()=>(self.performance||Date).now(),la=lc();let vl;function um(o,e,t,r,i,n,a,s,l,c,u=!0){return u?hm(o,e,t,r,i,n,a,s,l,c).then(null,d=>(vl||(console.warn("WebGL SDF generation failed, falling back to JS",d),vl=!0),yl(o,e,t,r,i,n,a,s,l,c))):yl(o,e,t,r,i,n,a,s,l,c)}const $r=[],fm=5;let Ys=0;function uc(){const o=ai();for(;$r.length&&ai()-o<fm;)$r.shift()();Ys=$r.length?setTimeout(uc,0):0}const hm=(...o)=>new Promise((e,t)=>{$r.push(()=>{const r=ai();try{la.webgl.generateIntoCanvas(...o),e({timing:ai()-r})}catch(i){t(i)}}),Ys||(Ys=setTimeout(uc,0))}),dm=4,pm=2e3,_l={};let mm=0;function yl(o,e,t,r,i,n,a,s,l,c){const u="TroikaTextSDFGenerator_JS_"+mm++%dm;let d=_l[u];return d||(d=_l[u]={workerModule:zi({name:u,workerId:u,dependencies:[lc,ai],init(h,f){const p=h().javascript.generate;return function(...x){const m=f();return{textureData:p(...x),timing:f()-m}}},getTransferables(h){return[h.textureData.buffer]}}),requests:0,idleTimer:null}),d.requests++,clearTimeout(d.idleTimer),d.workerModule(o,e,t,r,i,n).then(({textureData:h,timing:f})=>{const p=ai(),x=new Uint8Array(h.length*4);for(let m=0;m<h.length;m++)x[m*4+c]=h[m];return la.webglUtils.renderImageData(a,x,s,l,o,e,1<<3-c),f+=ai()-p,--d.requests===0&&(d.idleTimer=setTimeout(()=>{Y0(u)},pm)),{timing:f}})}function xm(o){o._warm||(la.webgl.isSupported(o),o._warm=!0)}const gm=la.webglUtils.resizeWebGLCanvasWithoutClearing,rr={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},vm=new Je;function Ri(){return(self.performance||Date).now()}const Sl=Object.create(null);function _m(o,e){o=Sm({},o);const t=Ri(),r=[];if(o.font&&r.push({label:"user",src:Mm(o.font)}),o.font=r,o.text=""+o.text,o.sdfGlyphSize=o.sdfGlyphSize||rr.sdfGlyphSize,o.unicodeFontsURL=o.unicodeFontsURL||rr.unicodeFontsURL,o.colorRanges!=null){let h={};for(let f in o.colorRanges)if(o.colorRanges.hasOwnProperty(f)){let p=o.colorRanges[f];typeof p!="number"&&(p=vm.set(p).getHex()),h[f]=p}o.colorRanges=h}Object.freeze(o);const{textureWidth:i,sdfExponent:n}=rr,{sdfGlyphSize:a}=o,s=i/a*4;let l=Sl[a];if(!l){const h=document.createElement("canvas");h.width=i,h.height=a*256/s,l=Sl[a]={glyphCount:0,sdfGlyphSize:a,sdfCanvas:h,sdfTexture:new Et(h,void 0,void 0,void 0,vt,vt),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,ym(l)}const{sdfTexture:c,sdfCanvas:u}=l;dc(o).then(h=>{const{glyphIds:f,glyphFontIndices:p,fontData:x,glyphPositions:m,fontSize:g,timings:M}=h,T=[],A=new Float32Array(f.length*4);let v=0,y=0;const b=Ri(),E=x.map(P=>{let L=l.glyphsByFont.get(P.src);return L||l.glyphsByFont.set(P.src,L=new Map),L});f.forEach((P,L)=>{const I=p[L],{src:O,unitsPerEm:V}=x[I];let H=E[I].get(P);if(!H){const{path:J,pathBounds:ne}=h.glyphData[O][P],$=Math.max(ne[2]-ne[0],ne[3]-ne[1])/a*(rr.sdfMargin*a+.5),B=l.glyphCount++,G=[ne[0]-$,ne[1]-$,ne[2]+$,ne[3]+$];E[I].set(P,H={path:J,atlasIndex:B,sdfViewBox:G}),T.push(H)}const{sdfViewBox:W}=H,X=m[y++],N=m[y++],Y=g/V;A[v++]=X+W[0]*Y,A[v++]=N+W[1]*Y,A[v++]=X+W[2]*Y,A[v++]=N+W[3]*Y,f[L]=H.atlasIndex}),M.quads=(M.quads||0)+(Ri()-b);const S=Ri();M.sdf={};const _=u.height,C=Math.ceil(l.glyphCount/s),w=Math.pow(2,Math.ceil(Math.log2(C*a)));w>_&&(console.info(`Increasing SDF texture size ${_}->${w}`),gm(u,i,w),c.dispose()),Promise.all(T.map(P=>fc(P,l,o.gpuAccelerateSDF).then(({timing:L})=>{M.sdf[P.atlasIndex]=L}))).then(()=>{T.length&&!l.contextLost&&(hc(l),c.needsUpdate=!0),M.sdfTotal=Ri()-S,M.total=Ri()-t,e(Object.freeze({parameters:o,sdfTexture:c,sdfGlyphSize:a,sdfExponent:n,glyphBounds:A,glyphAtlasIndices:f,glyphColors:h.glyphColors,caretPositions:h.caretPositions,chunkedBounds:h.chunkedBounds,ascender:h.ascender,descender:h.descender,lineHeight:h.lineHeight,capHeight:h.capHeight,xHeight:h.xHeight,topBaseline:h.topBaseline,blockBounds:h.blockBounds,visibleBounds:h.visibleBounds,timings:h.timings}))})}),Promise.resolve().then(()=>{l.contextLost||xm(u)})}function fc({path:o,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:r,sdfCanvas:i,contextLost:n},a){if(n)return Promise.resolve({timing:-1});const{textureWidth:s,sdfExponent:l}=rr,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),d=u%(s/r)*r,h=Math.floor(u/(s/r))*r,f=e%4;return um(r,r,o,t,c,l,i,d,h,f,a)}function ym(o){const e=o.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),o.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),o.contextLost=!1;const r=[];o.glyphsByFont.forEach(i=>{i.forEach(n=>{r.push(fc(n,o,!0))})}),Promise.all(r).then(()=>{hc(o),o.sdfTexture.needsUpdate=!0})})}function Sm(o,e){for(let t in e)e.hasOwnProperty(t)&&(o[t]=e[t]);return o}let Xr;function Mm(o){return Xr||(Xr=typeof document>"u"?{}:document.createElement("a")),Xr.href=o,Xr.href}function hc(o){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=o,{width:r,height:i}=e,n=o.sdfCanvas.getContext("webgl");let a=t.image.data;(!a||a.length!==r*i*4)&&(a=new Uint8Array(r*i*4),t.image={width:r,height:i,data:a},t.flipY=!1,t.isDataTexture=!0),n.readPixels(0,0,r,i,n.RGBA,n.UNSIGNED_BYTE,a)}}const bm=zi({name:"Typesetter",dependencies:[cm,lm,j0],init(o,e,t){return o(e,t())}}),dc=zi({name:"Typesetter",dependencies:[bm],init(o){return function(e){return new Promise(t=>{o.typeset(e,t)})}},getTransferables(o){const e=[];for(let t in o)o[t]&&o[t].buffer&&e.push(o[t].buffer);return e}});dc.onMainThread;const Ml={};function Tm(o){let e=Ml[o];return e||(e=Ml[o]=new Un(1,1,o,o).translate(.5,.5,0)),e}const Em="aTroikaGlyphBounds",bl="aTroikaGlyphIndex",Am="aTroikaGlyphColor";class wm extends Xu{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new ra,this.boundingBox=new li}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=Tm(e);["position","normal","uv"].forEach(r=>{this.attributes[r]=t.attributes[r].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,r,i,n){this.updateAttributeData(Em,e,4),this.updateAttributeData(bl,t,1),this.updateAttributeData(Am,n,3),this._blockBounds=r,this._chunkedBounds=i,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:r}=this;if(t){const{PI:i,floor:n,min:a,max:s,sin:l,cos:c}=Math,u=i/2,d=i*2,h=Math.abs(t),f=e[0]/h,p=e[2]/h,x=n((f+u)/d)!==n((p+u)/d)?-h:a(l(f)*h,l(p)*h),m=n((f-u)/d)!==n((p-u)/d)?h:s(l(f)*h,l(p)*h),g=n((f+i)/d)!==n((p+i)/d)?h*2:s(h-c(f)*h,h-c(p)*h);r.min.set(x,e[1],t<0?-g:0),r.max.set(m,e[3],t<0?0:g)}else r.min.set(e[0],e[1],0),r.max.set(e[2],e[3],0);r.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(bl).count,r=this._chunkedBounds;if(r)for(let i=r.length;i--;){t=r[i].end;let n=r[i].rect;if(n[1]<e.w&&n[3]>e.y&&n[0]<e.z&&n[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,r){const i=this.getAttribute(e);t?i&&i.array.length===t.length?(i.array.set(t),i.needsUpdate=!0):(this.setAttribute(e,new Nu(t,r)),delete this._maxInstanceCount,this.dispose()):i&&this.deleteAttribute(e)}}const Cm=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,Rm=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,Pm=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,Um=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function Dm(o){const e=Xs(o,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new et},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new ft(0,0,0,0)},uTroikaClipRect:{value:new ft(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new et},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Je},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Ye},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:Cm,vertexTransform:Rm,fragmentDefs:Pm,fragmentColorTransform:Um,customRewriter({vertexShader:t,fragmentShader:r}){let i=/\buniform\s+vec3\s+diffuse\b/;return i.test(r)&&(r=r.replace(i,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),i.test(t)||(t=t.replace(cc,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:r}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const ro=new En({color:16777215,side:dn,transparent:!0}),Tl=8421504,El=new _t,Yr=new oe,Qa=new oe,nr=[],Lm=new oe,$a="+x+y";function Al(o){return Array.isArray(o)?o[0]:o}let pc=()=>{const o=new At(new Un(1,1),ro);return pc=()=>o,o},mc=()=>{const o=new At(new Un(1,1,32,1),ro);return mc=()=>o,o};const Im={type:"syncstart"},Fm={type:"synccomplete"},xc=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],Nm=xc.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class qs extends At{constructor(){const e=new wm;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Tl,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=$a,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(Im),_m({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const r=this._queuedSyncs;r&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{r.forEach(i=>i&&i())})),this.dispatchEvent(Fm),e&&e()})))}onBeforeRender(e,t,r,i,n,a){this.sync(),n.isTroikaTextMaterial&&this._prepareForRender(n)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return Dm(e)}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=ro.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function r(){t.removeEventListener("dispose",r),e.dispose()})),this.hasOutline()){let r=e._outlineMtl;return r||(r=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),r.isTextOutlineMaterial=!0,r.depthWrite=!1,r.map=null,e.addEventListener("dispose",function i(){e.removeEventListener("dispose",i),r.dispose()})),[r,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return Al(this.material).getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return Al(this.material).getDistanceMaterial()}set customDistanceMaterial(e){}_prepareForRender(e){const t=e.isTextOutlineMaterial,r=e.uniforms,i=this.textRenderInfo;if(i){const{sdfTexture:s,blockBounds:l}=i;r.uTroikaSDFTexture.value=s,r.uTroikaSDFTextureSize.value.set(s.image.width,s.image.height),r.uTroikaSDFGlyphSize.value=i.sdfGlyphSize,r.uTroikaSDFExponent.value=i.sdfExponent,r.uTroikaTotalBounds.value.fromArray(l),r.uTroikaUseGlyphColors.value=!t&&!!i.glyphColors;let c=0,u=0,d=0,h,f,p,x=0,m=0;if(t){let{outlineWidth:M,outlineOffsetX:T,outlineOffsetY:A,outlineBlur:v,outlineOpacity:y}=this;c=this._parsePercent(M)||0,u=Math.max(0,this._parsePercent(v)||0),h=y,x=this._parsePercent(T)||0,m=this._parsePercent(A)||0}else d=Math.max(0,this._parsePercent(this.strokeWidth)||0),d&&(p=this.strokeColor,r.uTroikaStrokeColor.value.set(p??Tl),f=this.strokeOpacity,f==null&&(f=1)),h=this.fillOpacity;r.uTroikaEdgeOffset.value=c,r.uTroikaPositionOffset.value.set(x,m),r.uTroikaBlurRadius.value=u,r.uTroikaStrokeWidth.value=d,r.uTroikaStrokeOpacity.value=f,r.uTroikaFillOpacity.value=h??1,r.uTroikaCurveRadius.value=this.curveRadius||0;let g=this.clipRect;if(g&&Array.isArray(g)&&g.length===4)r.uTroikaClipRect.value.fromArray(g);else{const M=(this.fontSize||.1)*100;r.uTroikaClipRect.value.set(l[0]-M,l[1]-M,l[2]+M,l[3]+M)}this.geometry.applyClipRect(r.uTroikaClipRect.value)}r.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const n=t?this.outlineColor||0:this.color;if(n==null)delete e.color;else{const s=e.hasOwnProperty("color")?e.color:e.color=new Je;(n!==s._input||typeof n=="object")&&s.set(s._input=n)}let a=this.orientation||$a;if(a!==e._orientation){let s=r.uTroikaOrient.value;a=a.replace(/[^-+xyz]/g,"");let l=a!==$a&&a.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,d,h]=l;Yr.set(0,0,0)[u]=c==="-"?1:-1,Qa.set(0,0,0)[h]=d==="-"?-1:1,El.lookAt(Lm,Yr.cross(Qa),Qa),s.setFromMatrix4(El)}else s.identity();e._orientation=a}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),r=t?parseFloat(t[1]):NaN;e=(isNaN(r)?0:r/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new et){t.copy(e);const r=this.curveRadius;return r&&(t.x=Math.atan2(e.x,Math.abs(r)-Math.abs(e.z))*Math.abs(r)),t}worldPositionToTextCoords(e,t=new et){return Yr.copy(e),this.localPositionToTextCoords(this.worldToLocal(Yr),t)}raycast(e,t){const{textRenderInfo:r,curveRadius:i}=this;if(r){const n=r.blockBounds,a=i?mc():pc(),s=a.geometry,{position:l,uv:c}=s.attributes;for(let u=0;u<c.count;u++){let d=n[0]+c.getX(u)*(n[2]-n[0]);const h=n[1]+c.getY(u)*(n[3]-n[1]);let f=0;i&&(f=i-Math.cos(d/i)*i,d=Math.sin(d/i)*i),l.setXYZ(u,d,h,f)}s.boundingSphere=this.geometry.boundingSphere,s.boundingBox=this.geometry.boundingBox,a.matrixWorld=this.matrixWorld,a.material.side=this.material.side,nr.length=0,a.raycast(e,nr);for(let u=0;u<nr.length;u++)nr[u].object=this,t.push(nr[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,Nm.forEach(r=>{this[r]=e[r]}),this}clone(){return new this.constructor().copy(this)}}xc.forEach(o=>{const e="_private_"+o;Object.defineProperty(qs.prototype,o,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});new li;new Je;class ca{scene;camera;sceneOverlay;cameraOverlay;width;height;widthOverlay;heightOverlay;scaleOverlay;constructor(e,t,r){this.width=e,this.height=t,this.widthOverlay=e*r,this.heightOverlay=t*r,this.scaleOverlay=r,this.scene=new zs,this.camera=new Ui(-this.width/2,this.width/2,this.height/2,-this.height/2,0,1),this.sceneOverlay=new zs,this.cameraOverlay=new Ui(-this.widthOverlay/2,this.widthOverlay/2,this.heightOverlay/2,-this.heightOverlay/2,0,1)}resize(e,t,r){this.width=e,this.height=t,this.widthOverlay=e*r,this.heightOverlay=t*r,this.scaleOverlay=r,this.camera=new Ui(-this.width/2,this.width/2,this.height/2,-this.height/2,0,1),this.cameraOverlay=new Ui(-this.widthOverlay/2,this.widthOverlay/2,this.heightOverlay/2,-this.heightOverlay/2,0,1),this.reset()}}class Om extends ca{textscale;currentText;mesh;meshOverlay;constructor(e,t,r,i){super(e,t,i),this.textscale=r,this.currentText="The show is starting!",this.createScene()}reset(){this.update(this.currentText)}createScene(){this.mesh=new qs,this.meshOverlay=new qs,this.mesh.material=this.createMaterial(),this.meshOverlay.material=this.createMaterial(),this.meshOverlay.fontSize=this.mesh.fontSize=70,this.meshOverlay.textAlign=this.mesh.textAlign="center",this.meshOverlay.anchorX=this.mesh.anchorX="center",this.meshOverlay.anchorY=this.mesh.anchorY="middle",this.meshOverlay.overflowWrap=this.mesh.overflowWrap="break-word",this.scene.add(this.mesh),this.sceneOverlay.add(this.meshOverlay),this.update(this.currentText)}createMaterial(){return new Pt({uniforms:{time:{value:null}},vertexShader:` 
			varying vec2 vUv;
			varying float vIndex;
			uniform float time;
			
			void main() { 
				vUv = uv;
				vIndex = aTroikaGlyphBounds.x;
				vec4 mvPosition = vec4(position, 1.0);

				float frequency1 = 0.035;
				float amplitude1 = 20.0;
				float frequency2 = 0.025;
				float amplitude2 = 20.0;

				float offset = sin(aTroikaGlyphBounds.x * 0.005 + time * 1.5) * amplitude2;
				mvPosition.x += offset;

				mvPosition = modelViewMatrix * mvPosition;
				gl_Position = projectionMatrix * mvPosition;

				//gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
			}
		`,fragmentShader:`
			precision highp float;
			varying vec2 vUv;
			varying float vIndex;
			uniform float time;
			
			//https://iquilezles.org/articles/palettes/
			vec3 palette(in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d) {
				return a + b*cos(6.28318*(c*t+d));
			}
			
			void main() {
				vec2 p = vUv * 2.0;

				for(int i = 1; i < 10; i++) {
					p.x += 0.4 / float(i) * sin(float(i) * 3.0 * p.y + time * 1.0 + vIndex);
					p.y += 0.4 / float(i) * cos(float(i) * 3.0 * p.x + time * 1.0 + vIndex);
				}

				float r = cos(p.x + p.y + 1.0 + time) * 0.5 + 0.5;
				
				//0.8, 0.5, 0.4		0.2, 0.4, 0.2	2.0, 1.0, 1.0	0.00, 0.25, 0.25
				//0.5, 0.5, 0.5		0.5, 0.5, 0.5	1.0, 1.0, 1.0	0.30, 0.20, 0.20
				//0.5, 0.5, 0.5		0.5, 0.5, 0.5	1.0, 0.7, 0.4	0.00, 0.15, 0.20
				//0.5, 0.5, 0.5		0.5, 0.5, 0.5	1.0, 1.0, 1.0	0.00, 0.10, 0.20	

				vec3 c0 = vec3(0.8, 0.5, 0.4);
				vec3 c1 = vec3(0.2, 0.4, 0.2);
				vec3 c2 = vec3(2.0, 1.0, 1.0);
				vec3 c3 = vec3(0.00, 0.25, 0.25);

				vec3 paletteColor = palette(r, c0, c1, c2, c3);
				gl_FragColor = vec4(paletteColor, 1.0);
			}`})}update(e){e&&(this.currentText=e,this.mesh.text=this.meshOverlay.text=this.currentText,this.mesh.maxWidth=this.meshOverlay.maxWidth=this.width/this.textscale,this.mesh.sync(),this.meshOverlay.sync()),this.mesh.scale.set(this.textscale,this.textscale,1),this.meshOverlay.scale.set(this.textscale*this.scaleOverlay,this.textscale*this.scaleOverlay,1),this.mesh.material.uniforms.time.value=performance.now()*.001,this.meshOverlay.material.uniforms.time.value=performance.now()*.001}dispose(){}}class Bm{isReady;timedLyrics;prevIndex;abortController;async getLRCLIB(e,t){this.abortController&&this.abortController.abort(),this.abortController=new AbortController,this.isReady=!1,this.timedLyrics=[];const r=new URLSearchParams({track_name:e,artist_name:t}),i=await fetch(`https://lrclib.net/api/search?${r.toString()}`,{headers:{"x-user-agent":"Lights! v0.1.0 (https://github.com/HalilB84/lights)"},signal:this.abortController.signal}).catch(s=>{s.name==="AbortError"&&console.log("aborted")});if(!i){this.isReady=!0;return}if(!i.ok){console.log("Error getting lyrics, LRCLIB didn't respond or something else went wrong"),this.isReady=!0;return}const n=await i.json();if(n.length===0){console.log("No lyrics found"),this.isReady=!0;return}const a=n[0].syncedLyrics?.split(`
`)||[];n[0].instrumental==!0&&(this.timedLyrics=[{time:0,lyric:"Instrumental"}]);for(const s of a){const l=s.substring(1,9).split(":"),c=s.substring(10).trim();this.timedLyrics.push({time:parseFloat(l[0])*60+parseFloat(l[1]),lyric:c})}this.prevIndex=-1,this.isReady=!0}update(e){if(this.timedLyrics.length===0)return["No lyrics found","init"];const t=this.timedLyrics.findLastIndex(r=>e>=r.time);if(t>=0){const r=t!==this.prevIndex;return this.prevIndex=t,[this.timedLyrics[t].lyric,r?"changed":"null"]}return["(Music)","init"]}}var wl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function km(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ea={exports:{}};var Gm=ea.exports,Cl;function zm(){return Cl||(Cl=1,(function(o,e){(function(r,i){o.exports=i()})(Gm,function(){return(function(t){var r={};function i(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=t,i.c=r,i.d=function(n,a,s){i.o(n,a)||Object.defineProperty(n,a,{enumerable:!0,get:s})},i.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,a){if(a&1&&(n=i(n)),a&8||a&4&&typeof n=="object"&&n&&n.__esModule)return n;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:n}),a&2&&typeof n!="string")for(var l in n)i.d(s,l,(function(c){return n[c]}).bind(null,l));return s},i.n=function(n){var a=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(a,"a",a),a},i.o=function(n,a){return Object.prototype.hasOwnProperty.call(n,a)},i.p="",i(i.s=20)})([(function(t,r){var i={};t.exports=i,(function(){i._baseDelta=1e3/60,i._nextId=0,i._seed=0,i._nowStartTime=+new Date,i._warnedOnce={},i._decomp=null,i.extend=function(a,s){var l,c;typeof s=="boolean"?(l=2,c=s):(l=1,c=!0);for(var u=l;u<arguments.length;u++){var d=arguments[u];if(d)for(var h in d)c&&d[h]&&d[h].constructor===Object&&(!a[h]||a[h].constructor===Object)?(a[h]=a[h]||{},i.extend(a[h],c,d[h])):a[h]=d[h]}return a},i.clone=function(a,s){return i.extend({},s,a)},i.keys=function(a){if(Object.keys)return Object.keys(a);var s=[];for(var l in a)s.push(l);return s},i.values=function(a){var s=[];if(Object.keys){for(var l=Object.keys(a),c=0;c<l.length;c++)s.push(a[l[c]]);return s}for(var u in a)s.push(a[u]);return s},i.get=function(a,s,l,c){s=s.split(".").slice(l,c);for(var u=0;u<s.length;u+=1)a=a[s[u]];return a},i.set=function(a,s,l,c,u){var d=s.split(".").slice(c,u);return i.get(a,s,0,-1)[d[d.length-1]]=l,l},i.shuffle=function(a){for(var s=a.length-1;s>0;s--){var l=Math.floor(i.random()*(s+1)),c=a[s];a[s]=a[l],a[l]=c}return a},i.choose=function(a){return a[Math.floor(i.random()*a.length)]},i.isElement=function(a){return typeof HTMLElement<"u"?a instanceof HTMLElement:!!(a&&a.nodeType&&a.nodeName)},i.isArray=function(a){return Object.prototype.toString.call(a)==="[object Array]"},i.isFunction=function(a){return typeof a=="function"},i.isPlainObject=function(a){return typeof a=="object"&&a.constructor===Object},i.isString=function(a){return toString.call(a)==="[object String]"},i.clamp=function(a,s,l){return a<s?s:a>l?l:a},i.sign=function(a){return a<0?-1:1},i.now=function(){if(typeof window<"u"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-i._nowStartTime},i.random=function(a,s){return a=typeof a<"u"?a:0,s=typeof s<"u"?s:1,a+n()*(s-a)};var n=function(){return i._seed=(i._seed*9301+49297)%233280,i._seed/233280};i.colorToNumber=function(a){return a=a.replace("#",""),a.length==3&&(a=a.charAt(0)+a.charAt(0)+a.charAt(1)+a.charAt(1)+a.charAt(2)+a.charAt(2)),parseInt(a,16)},i.logLevel=1,i.log=function(){console&&i.logLevel>0&&i.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},i.info=function(){console&&i.logLevel>0&&i.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},i.warn=function(){console&&i.logLevel>0&&i.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},i.warnOnce=function(){var a=Array.prototype.slice.call(arguments).join(" ");i._warnedOnce[a]||(i.warn(a),i._warnedOnce[a]=!0)},i.deprecated=function(a,s,l){a[s]=i.chain(function(){i.warnOnce("🔅 deprecated 🔅",l)},a[s])},i.nextId=function(){return i._nextId++},i.indexOf=function(a,s){if(a.indexOf)return a.indexOf(s);for(var l=0;l<a.length;l++)if(a[l]===s)return l;return-1},i.map=function(a,s){if(a.map)return a.map(s);for(var l=[],c=0;c<a.length;c+=1)l.push(s(a[c]));return l},i.topologicalSort=function(a){var s=[],l=[],c=[];for(var u in a)!l[u]&&!c[u]&&i._topologicalSort(u,l,c,a,s);return s},i._topologicalSort=function(a,s,l,c,u){var d=c[a]||[];l[a]=!0;for(var h=0;h<d.length;h+=1){var f=d[h];l[f]||s[f]||i._topologicalSort(f,s,l,c,u)}l[a]=!1,s[a]=!0,u.push(a)},i.chain=function(){for(var a=[],s=0;s<arguments.length;s+=1){var l=arguments[s];l._chained?a.push.apply(a,l._chained):a.push(l)}var c=function(){for(var u,d=new Array(arguments.length),h=0,f=arguments.length;h<f;h++)d[h]=arguments[h];for(h=0;h<a.length;h+=1){var p=a[h].apply(u,d);typeof p<"u"&&(u=p)}return u};return c._chained=a,c},i.chainPathBefore=function(a,s,l){return i.set(a,s,i.chain(l,i.get(a,s)))},i.chainPathAfter=function(a,s,l){return i.set(a,s,i.chain(i.get(a,s),l))},i.setDecomp=function(a){i._decomp=a},i.getDecomp=function(){var a=i._decomp;try{!a&&typeof window<"u"&&(a=window.decomp),!a&&typeof wl<"u"&&(a=wl.decomp)}catch{a=null}return a}})()}),(function(t,r){var i={};t.exports=i,(function(){i.create=function(n){var a={min:{x:0,y:0},max:{x:0,y:0}};return n&&i.update(a,n),a},i.update=function(n,a,s){n.min.x=1/0,n.max.x=-1/0,n.min.y=1/0,n.max.y=-1/0;for(var l=0;l<a.length;l++){var c=a[l];c.x>n.max.x&&(n.max.x=c.x),c.x<n.min.x&&(n.min.x=c.x),c.y>n.max.y&&(n.max.y=c.y),c.y<n.min.y&&(n.min.y=c.y)}s&&(s.x>0?n.max.x+=s.x:n.min.x+=s.x,s.y>0?n.max.y+=s.y:n.min.y+=s.y)},i.contains=function(n,a){return a.x>=n.min.x&&a.x<=n.max.x&&a.y>=n.min.y&&a.y<=n.max.y},i.overlaps=function(n,a){return n.min.x<=a.max.x&&n.max.x>=a.min.x&&n.max.y>=a.min.y&&n.min.y<=a.max.y},i.translate=function(n,a){n.min.x+=a.x,n.max.x+=a.x,n.min.y+=a.y,n.max.y+=a.y},i.shift=function(n,a){var s=n.max.x-n.min.x,l=n.max.y-n.min.y;n.min.x=a.x,n.max.x=a.x+s,n.min.y=a.y,n.max.y=a.y+l}})()}),(function(t,r){var i={};t.exports=i,(function(){i.create=function(n,a){return{x:n||0,y:a||0}},i.clone=function(n){return{x:n.x,y:n.y}},i.magnitude=function(n){return Math.sqrt(n.x*n.x+n.y*n.y)},i.magnitudeSquared=function(n){return n.x*n.x+n.y*n.y},i.rotate=function(n,a,s){var l=Math.cos(a),c=Math.sin(a);s||(s={});var u=n.x*l-n.y*c;return s.y=n.x*c+n.y*l,s.x=u,s},i.rotateAbout=function(n,a,s,l){var c=Math.cos(a),u=Math.sin(a);l||(l={});var d=s.x+((n.x-s.x)*c-(n.y-s.y)*u);return l.y=s.y+((n.x-s.x)*u+(n.y-s.y)*c),l.x=d,l},i.normalise=function(n){var a=i.magnitude(n);return a===0?{x:0,y:0}:{x:n.x/a,y:n.y/a}},i.dot=function(n,a){return n.x*a.x+n.y*a.y},i.cross=function(n,a){return n.x*a.y-n.y*a.x},i.cross3=function(n,a,s){return(a.x-n.x)*(s.y-n.y)-(a.y-n.y)*(s.x-n.x)},i.add=function(n,a,s){return s||(s={}),s.x=n.x+a.x,s.y=n.y+a.y,s},i.sub=function(n,a,s){return s||(s={}),s.x=n.x-a.x,s.y=n.y-a.y,s},i.mult=function(n,a){return{x:n.x*a,y:n.y*a}},i.div=function(n,a){return{x:n.x/a,y:n.y/a}},i.perp=function(n,a){return a=a===!0?-1:1,{x:a*-n.y,y:a*n.x}},i.neg=function(n){return{x:-n.x,y:-n.y}},i.angle=function(n,a){return Math.atan2(a.y-n.y,a.x-n.x)},i._temp=[i.create(),i.create(),i.create(),i.create(),i.create(),i.create()]})()}),(function(t,r,i){var n={};t.exports=n;var a=i(2),s=i(0);(function(){n.create=function(l,c){for(var u=[],d=0;d<l.length;d++){var h=l[d],f={x:h.x,y:h.y,index:d,body:c,isInternal:!1};u.push(f)}return u},n.fromPath=function(l,c){var u=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,d=[];return l.replace(u,function(h,f,p){d.push({x:parseFloat(f),y:parseFloat(p)})}),n.create(d,c)},n.centre=function(l){for(var c=n.area(l,!0),u={x:0,y:0},d,h,f,p=0;p<l.length;p++)f=(p+1)%l.length,d=a.cross(l[p],l[f]),h=a.mult(a.add(l[p],l[f]),d),u=a.add(u,h);return a.div(u,6*c)},n.mean=function(l){for(var c={x:0,y:0},u=0;u<l.length;u++)c.x+=l[u].x,c.y+=l[u].y;return a.div(c,l.length)},n.area=function(l,c){for(var u=0,d=l.length-1,h=0;h<l.length;h++)u+=(l[d].x-l[h].x)*(l[d].y+l[h].y),d=h;return c?u/2:Math.abs(u)/2},n.inertia=function(l,c){for(var u=0,d=0,h=l,f,p,x=0;x<h.length;x++)p=(x+1)%h.length,f=Math.abs(a.cross(h[p],h[x])),u+=f*(a.dot(h[p],h[p])+a.dot(h[p],h[x])+a.dot(h[x],h[x])),d+=f;return c/6*(u/d)},n.translate=function(l,c,u){u=typeof u<"u"?u:1;var d=l.length,h=c.x*u,f=c.y*u,p;for(p=0;p<d;p++)l[p].x+=h,l[p].y+=f;return l},n.rotate=function(l,c,u){if(c!==0){var d=Math.cos(c),h=Math.sin(c),f=u.x,p=u.y,x=l.length,m,g,M,T;for(T=0;T<x;T++)m=l[T],g=m.x-f,M=m.y-p,m.x=f+(g*d-M*h),m.y=p+(g*h+M*d);return l}},n.contains=function(l,c){for(var u=c.x,d=c.y,h=l.length,f=l[h-1],p,x=0;x<h;x++){if(p=l[x],(u-f.x)*(p.y-f.y)+(d-f.y)*(f.x-p.x)>0)return!1;f=p}return!0},n.scale=function(l,c,u,d){if(c===1&&u===1)return l;d=d||n.centre(l);for(var h,f,p=0;p<l.length;p++)h=l[p],f=a.sub(h,d),l[p].x=d.x+f.x*c,l[p].y=d.y+f.y*u;return l},n.chamfer=function(l,c,u,d,h){typeof c=="number"?c=[c]:c=c||[8],u=typeof u<"u"?u:-1,d=d||2,h=h||14;for(var f=[],p=0;p<l.length;p++){var x=l[p-1>=0?p-1:l.length-1],m=l[p],g=l[(p+1)%l.length],M=c[p<c.length?p:c.length-1];if(M===0){f.push(m);continue}var T=a.normalise({x:m.y-x.y,y:x.x-m.x}),A=a.normalise({x:g.y-m.y,y:m.x-g.x}),v=Math.sqrt(2*Math.pow(M,2)),y=a.mult(s.clone(T),M),b=a.normalise(a.mult(a.add(T,A),.5)),E=a.sub(m,a.mult(b,v)),S=u;u===-1&&(S=Math.pow(M,.32)*1.75),S=s.clamp(S,d,h),S%2===1&&(S+=1);for(var _=Math.acos(a.dot(T,A)),C=_/S,w=0;w<S;w++)f.push(a.add(a.rotate(y,C*w),E))}return f},n.clockwiseSort=function(l){var c=n.mean(l);return l.sort(function(u,d){return a.angle(c,u)-a.angle(c,d)}),l},n.isConvex=function(l){var c=0,u=l.length,d,h,f,p;if(u<3)return null;for(d=0;d<u;d++)if(h=(d+1)%u,f=(d+2)%u,p=(l[h].x-l[d].x)*(l[f].y-l[h].y),p-=(l[h].y-l[d].y)*(l[f].x-l[h].x),p<0?c|=1:p>0&&(c|=2),c===3)return!1;return c!==0?!0:null},n.hull=function(l){var c=[],u=[],d,h;for(l=l.slice(0),l.sort(function(f,p){var x=f.x-p.x;return x!==0?x:f.y-p.y}),h=0;h<l.length;h+=1){for(d=l[h];u.length>=2&&a.cross3(u[u.length-2],u[u.length-1],d)<=0;)u.pop();u.push(d)}for(h=l.length-1;h>=0;h-=1){for(d=l[h];c.length>=2&&a.cross3(c[c.length-2],c[c.length-1],d)<=0;)c.pop();c.push(d)}return c.pop(),u.pop(),c.concat(u)}})()}),(function(t,r,i){var n={};t.exports=n;var a=i(3),s=i(2),l=i(7),c=i(0),u=i(1),d=i(11);(function(){n._timeCorrection=!0,n._inertiaScale=4,n._nextCollidingGroupId=1,n._nextNonCollidingGroupId=-1,n._nextCategory=1,n._baseDelta=1e3/60,n.create=function(f){var p={id:c.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:a.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:16.666666666666668,_original:null},x=c.extend(p,f);return h(x,f),x},n.nextGroup=function(f){return f?n._nextNonCollidingGroupId--:n._nextCollidingGroupId++},n.nextCategory=function(){return n._nextCategory=n._nextCategory<<1,n._nextCategory};var h=function(f,p){p=p||{},n.set(f,{bounds:f.bounds||u.create(f.vertices),positionPrev:f.positionPrev||s.clone(f.position),anglePrev:f.anglePrev||f.angle,vertices:f.vertices,parts:f.parts||[f],isStatic:f.isStatic,isSleeping:f.isSleeping,parent:f.parent||f}),a.rotate(f.vertices,f.angle,f.position),d.rotate(f.axes,f.angle),u.update(f.bounds,f.vertices,f.velocity),n.set(f,{axes:p.axes||f.axes,area:p.area||f.area,mass:p.mass||f.mass,inertia:p.inertia||f.inertia});var x=f.isStatic?"#14151f":c.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),m=f.isStatic?"#555":"#ccc",g=f.isStatic&&f.render.fillStyle===null?1:0;f.render.fillStyle=f.render.fillStyle||x,f.render.strokeStyle=f.render.strokeStyle||m,f.render.lineWidth=f.render.lineWidth||g,f.render.sprite.xOffset+=-(f.bounds.min.x-f.position.x)/(f.bounds.max.x-f.bounds.min.x),f.render.sprite.yOffset+=-(f.bounds.min.y-f.position.y)/(f.bounds.max.y-f.bounds.min.y)};n.set=function(f,p,x){var m;typeof p=="string"&&(m=p,p={},p[m]=x);for(m in p)if(Object.prototype.hasOwnProperty.call(p,m))switch(x=p[m],m){case"isStatic":n.setStatic(f,x);break;case"isSleeping":l.set(f,x);break;case"mass":n.setMass(f,x);break;case"density":n.setDensity(f,x);break;case"inertia":n.setInertia(f,x);break;case"vertices":n.setVertices(f,x);break;case"position":n.setPosition(f,x);break;case"angle":n.setAngle(f,x);break;case"velocity":n.setVelocity(f,x);break;case"angularVelocity":n.setAngularVelocity(f,x);break;case"speed":n.setSpeed(f,x);break;case"angularSpeed":n.setAngularSpeed(f,x);break;case"parts":n.setParts(f,x);break;case"centre":n.setCentre(f,x);break;default:f[m]=x}},n.setStatic=function(f,p){for(var x=0;x<f.parts.length;x++){var m=f.parts[x];p?(m.isStatic||(m._original={restitution:m.restitution,friction:m.friction,mass:m.mass,inertia:m.inertia,density:m.density,inverseMass:m.inverseMass,inverseInertia:m.inverseInertia}),m.restitution=0,m.friction=1,m.mass=m.inertia=m.density=1/0,m.inverseMass=m.inverseInertia=0,m.positionPrev.x=m.position.x,m.positionPrev.y=m.position.y,m.anglePrev=m.angle,m.angularVelocity=0,m.speed=0,m.angularSpeed=0,m.motion=0):m._original&&(m.restitution=m._original.restitution,m.friction=m._original.friction,m.mass=m._original.mass,m.inertia=m._original.inertia,m.density=m._original.density,m.inverseMass=m._original.inverseMass,m.inverseInertia=m._original.inverseInertia,m._original=null),m.isStatic=p}},n.setMass=function(f,p){var x=f.inertia/(f.mass/6);f.inertia=x*(p/6),f.inverseInertia=1/f.inertia,f.mass=p,f.inverseMass=1/f.mass,f.density=f.mass/f.area},n.setDensity=function(f,p){n.setMass(f,p*f.area),f.density=p},n.setInertia=function(f,p){f.inertia=p,f.inverseInertia=1/f.inertia},n.setVertices=function(f,p){p[0].body===f?f.vertices=p:f.vertices=a.create(p,f),f.axes=d.fromVertices(f.vertices),f.area=a.area(f.vertices),n.setMass(f,f.density*f.area);var x=a.centre(f.vertices);a.translate(f.vertices,x,-1),n.setInertia(f,n._inertiaScale*a.inertia(f.vertices,f.mass)),a.translate(f.vertices,f.position),u.update(f.bounds,f.vertices,f.velocity)},n.setParts=function(f,p,x){var m;for(p=p.slice(0),f.parts.length=0,f.parts.push(f),f.parent=f,m=0;m<p.length;m++){var g=p[m];g!==f&&(g.parent=f,f.parts.push(g))}if(f.parts.length!==1){if(x=typeof x<"u"?x:!0,x){var M=[];for(m=0;m<p.length;m++)M=M.concat(p[m].vertices);a.clockwiseSort(M);var T=a.hull(M),A=a.centre(T);n.setVertices(f,T),a.translate(f.vertices,A)}var v=n._totalProperties(f);f.area=v.area,f.parent=f,f.position.x=v.centre.x,f.position.y=v.centre.y,f.positionPrev.x=v.centre.x,f.positionPrev.y=v.centre.y,n.setMass(f,v.mass),n.setInertia(f,v.inertia),n.setPosition(f,v.centre)}},n.setCentre=function(f,p,x){x?(f.positionPrev.x+=p.x,f.positionPrev.y+=p.y,f.position.x+=p.x,f.position.y+=p.y):(f.positionPrev.x=p.x-(f.position.x-f.positionPrev.x),f.positionPrev.y=p.y-(f.position.y-f.positionPrev.y),f.position.x=p.x,f.position.y=p.y)},n.setPosition=function(f,p,x){var m=s.sub(p,f.position);x?(f.positionPrev.x=f.position.x,f.positionPrev.y=f.position.y,f.velocity.x=m.x,f.velocity.y=m.y,f.speed=s.magnitude(m)):(f.positionPrev.x+=m.x,f.positionPrev.y+=m.y);for(var g=0;g<f.parts.length;g++){var M=f.parts[g];M.position.x+=m.x,M.position.y+=m.y,a.translate(M.vertices,m),u.update(M.bounds,M.vertices,f.velocity)}},n.setAngle=function(f,p,x){var m=p-f.angle;x?(f.anglePrev=f.angle,f.angularVelocity=m,f.angularSpeed=Math.abs(m)):f.anglePrev+=m;for(var g=0;g<f.parts.length;g++){var M=f.parts[g];M.angle+=m,a.rotate(M.vertices,m,f.position),d.rotate(M.axes,m),u.update(M.bounds,M.vertices,f.velocity),g>0&&s.rotateAbout(M.position,m,f.position,M.position)}},n.setVelocity=function(f,p){var x=f.deltaTime/n._baseDelta;f.positionPrev.x=f.position.x-p.x*x,f.positionPrev.y=f.position.y-p.y*x,f.velocity.x=(f.position.x-f.positionPrev.x)/x,f.velocity.y=(f.position.y-f.positionPrev.y)/x,f.speed=s.magnitude(f.velocity)},n.getVelocity=function(f){var p=n._baseDelta/f.deltaTime;return{x:(f.position.x-f.positionPrev.x)*p,y:(f.position.y-f.positionPrev.y)*p}},n.getSpeed=function(f){return s.magnitude(n.getVelocity(f))},n.setSpeed=function(f,p){n.setVelocity(f,s.mult(s.normalise(n.getVelocity(f)),p))},n.setAngularVelocity=function(f,p){var x=f.deltaTime/n._baseDelta;f.anglePrev=f.angle-p*x,f.angularVelocity=(f.angle-f.anglePrev)/x,f.angularSpeed=Math.abs(f.angularVelocity)},n.getAngularVelocity=function(f){return(f.angle-f.anglePrev)*n._baseDelta/f.deltaTime},n.getAngularSpeed=function(f){return Math.abs(n.getAngularVelocity(f))},n.setAngularSpeed=function(f,p){n.setAngularVelocity(f,c.sign(n.getAngularVelocity(f))*p)},n.translate=function(f,p,x){n.setPosition(f,s.add(f.position,p),x)},n.rotate=function(f,p,x,m){if(!x)n.setAngle(f,f.angle+p,m);else{var g=Math.cos(p),M=Math.sin(p),T=f.position.x-x.x,A=f.position.y-x.y;n.setPosition(f,{x:x.x+(T*g-A*M),y:x.y+(T*M+A*g)},m),n.setAngle(f,f.angle+p,m)}},n.scale=function(f,p,x,m){var g=0,M=0;m=m||f.position;for(var T=0;T<f.parts.length;T++){var A=f.parts[T];a.scale(A.vertices,p,x,m),A.axes=d.fromVertices(A.vertices),A.area=a.area(A.vertices),n.setMass(A,f.density*A.area),a.translate(A.vertices,{x:-A.position.x,y:-A.position.y}),n.setInertia(A,n._inertiaScale*a.inertia(A.vertices,A.mass)),a.translate(A.vertices,{x:A.position.x,y:A.position.y}),T>0&&(g+=A.area,M+=A.inertia),A.position.x=m.x+(A.position.x-m.x)*p,A.position.y=m.y+(A.position.y-m.y)*x,u.update(A.bounds,A.vertices,f.velocity)}f.parts.length>1&&(f.area=g,f.isStatic||(n.setMass(f,f.density*g),n.setInertia(f,M))),f.circleRadius&&(p===x?f.circleRadius*=p:f.circleRadius=null)},n.update=function(f,p){p=(typeof p<"u"?p:1e3/60)*f.timeScale;var x=p*p,m=n._timeCorrection?p/(f.deltaTime||p):1,g=1-f.frictionAir*(p/c._baseDelta),M=(f.position.x-f.positionPrev.x)*m,T=(f.position.y-f.positionPrev.y)*m;f.velocity.x=M*g+f.force.x/f.mass*x,f.velocity.y=T*g+f.force.y/f.mass*x,f.positionPrev.x=f.position.x,f.positionPrev.y=f.position.y,f.position.x+=f.velocity.x,f.position.y+=f.velocity.y,f.deltaTime=p,f.angularVelocity=(f.angle-f.anglePrev)*g*m+f.torque/f.inertia*x,f.anglePrev=f.angle,f.angle+=f.angularVelocity;for(var A=0;A<f.parts.length;A++){var v=f.parts[A];a.translate(v.vertices,f.velocity),A>0&&(v.position.x+=f.velocity.x,v.position.y+=f.velocity.y),f.angularVelocity!==0&&(a.rotate(v.vertices,f.angularVelocity,f.position),d.rotate(v.axes,f.angularVelocity),A>0&&s.rotateAbout(v.position,f.angularVelocity,f.position,v.position)),u.update(v.bounds,v.vertices,f.velocity)}},n.updateVelocities=function(f){var p=n._baseDelta/f.deltaTime,x=f.velocity;x.x=(f.position.x-f.positionPrev.x)*p,x.y=(f.position.y-f.positionPrev.y)*p,f.speed=Math.sqrt(x.x*x.x+x.y*x.y),f.angularVelocity=(f.angle-f.anglePrev)*p,f.angularSpeed=Math.abs(f.angularVelocity)},n.applyForce=function(f,p,x){var m={x:p.x-f.position.x,y:p.y-f.position.y};f.force.x+=x.x,f.force.y+=x.y,f.torque+=m.x*x.y-m.y*x.x},n._totalProperties=function(f){for(var p={mass:0,area:0,inertia:0,centre:{x:0,y:0}},x=f.parts.length===1?0:1;x<f.parts.length;x++){var m=f.parts[x],g=m.mass!==1/0?m.mass:1;p.mass+=g,p.area+=m.area,p.inertia+=m.inertia,p.centre=s.add(p.centre,s.mult(m.position,g))}return p.centre=s.div(p.centre,p.mass),p}})()}),(function(t,r,i){var n={};t.exports=n;var a=i(0);(function(){n.on=function(s,l,c){for(var u=l.split(" "),d,h=0;h<u.length;h++)d=u[h],s.events=s.events||{},s.events[d]=s.events[d]||[],s.events[d].push(c);return c},n.off=function(s,l,c){if(!l){s.events={};return}typeof l=="function"&&(c=l,l=a.keys(s.events).join(" "));for(var u=l.split(" "),d=0;d<u.length;d++){var h=s.events[u[d]],f=[];if(c&&h)for(var p=0;p<h.length;p++)h[p]!==c&&f.push(h[p]);s.events[u[d]]=f}},n.trigger=function(s,l,c){var u,d,h,f,p=s.events;if(p&&a.keys(p).length>0){c||(c={}),u=l.split(" ");for(var x=0;x<u.length;x++)if(d=u[x],h=p[d],h){f=a.clone(c,!1),f.name=d,f.source=s;for(var m=0;m<h.length;m++)h[m].apply(s,[f])}}}})()}),(function(t,r,i){var n={};t.exports=n;var a=i(5),s=i(0),l=i(1),c=i(4);(function(){n.create=function(u){return s.extend({id:s.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},u)},n.setModified=function(u,d,h,f){if(u.isModified=d,d&&u.cache&&(u.cache.allBodies=null,u.cache.allConstraints=null,u.cache.allComposites=null),h&&u.parent&&n.setModified(u.parent,d,h,f),f)for(var p=0;p<u.composites.length;p++){var x=u.composites[p];n.setModified(x,d,h,f)}},n.add=function(u,d){var h=[].concat(d);a.trigger(u,"beforeAdd",{object:d});for(var f=0;f<h.length;f++){var p=h[f];switch(p.type){case"body":if(p.parent!==p){s.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}n.addBody(u,p);break;case"constraint":n.addConstraint(u,p);break;case"composite":n.addComposite(u,p);break;case"mouseConstraint":n.addConstraint(u,p.constraint);break}}return a.trigger(u,"afterAdd",{object:d}),u},n.remove=function(u,d,h){var f=[].concat(d);a.trigger(u,"beforeRemove",{object:d});for(var p=0;p<f.length;p++){var x=f[p];switch(x.type){case"body":n.removeBody(u,x,h);break;case"constraint":n.removeConstraint(u,x,h);break;case"composite":n.removeComposite(u,x,h);break;case"mouseConstraint":n.removeConstraint(u,x.constraint);break}}return a.trigger(u,"afterRemove",{object:d}),u},n.addComposite=function(u,d){return u.composites.push(d),d.parent=u,n.setModified(u,!0,!0,!1),u},n.removeComposite=function(u,d,h){var f=s.indexOf(u.composites,d);if(f!==-1){var p=n.allBodies(d);n.removeCompositeAt(u,f);for(var x=0;x<p.length;x++)p[x].sleepCounter=0}if(h)for(var x=0;x<u.composites.length;x++)n.removeComposite(u.composites[x],d,!0);return u},n.removeCompositeAt=function(u,d){return u.composites.splice(d,1),n.setModified(u,!0,!0,!1),u},n.addBody=function(u,d){return u.bodies.push(d),n.setModified(u,!0,!0,!1),u},n.removeBody=function(u,d,h){var f=s.indexOf(u.bodies,d);if(f!==-1&&(n.removeBodyAt(u,f),d.sleepCounter=0),h)for(var p=0;p<u.composites.length;p++)n.removeBody(u.composites[p],d,!0);return u},n.removeBodyAt=function(u,d){return u.bodies.splice(d,1),n.setModified(u,!0,!0,!1),u},n.addConstraint=function(u,d){return u.constraints.push(d),n.setModified(u,!0,!0,!1),u},n.removeConstraint=function(u,d,h){var f=s.indexOf(u.constraints,d);if(f!==-1&&n.removeConstraintAt(u,f),h)for(var p=0;p<u.composites.length;p++)n.removeConstraint(u.composites[p],d,!0);return u},n.removeConstraintAt=function(u,d){return u.constraints.splice(d,1),n.setModified(u,!0,!0,!1),u},n.clear=function(u,d,h){if(h)for(var f=0;f<u.composites.length;f++)n.clear(u.composites[f],d,!0);return d?u.bodies=u.bodies.filter(function(p){return p.isStatic}):u.bodies.length=0,u.constraints.length=0,u.composites.length=0,n.setModified(u,!0,!0,!1),u},n.allBodies=function(u){if(u.cache&&u.cache.allBodies)return u.cache.allBodies;for(var d=[].concat(u.bodies),h=0;h<u.composites.length;h++)d=d.concat(n.allBodies(u.composites[h]));return u.cache&&(u.cache.allBodies=d),d},n.allConstraints=function(u){if(u.cache&&u.cache.allConstraints)return u.cache.allConstraints;for(var d=[].concat(u.constraints),h=0;h<u.composites.length;h++)d=d.concat(n.allConstraints(u.composites[h]));return u.cache&&(u.cache.allConstraints=d),d},n.allComposites=function(u){if(u.cache&&u.cache.allComposites)return u.cache.allComposites;for(var d=[].concat(u.composites),h=0;h<u.composites.length;h++)d=d.concat(n.allComposites(u.composites[h]));return u.cache&&(u.cache.allComposites=d),d},n.get=function(u,d,h){var f,p;switch(h){case"body":f=n.allBodies(u);break;case"constraint":f=n.allConstraints(u);break;case"composite":f=n.allComposites(u).concat(u);break}return f?(p=f.filter(function(x){return x.id.toString()===d.toString()}),p.length===0?null:p[0]):null},n.move=function(u,d,h){return n.remove(u,d),n.add(h,d),u},n.rebase=function(u){for(var d=n.allBodies(u).concat(n.allConstraints(u)).concat(n.allComposites(u)),h=0;h<d.length;h++)d[h].id=s.nextId();return u},n.translate=function(u,d,h){for(var f=h?n.allBodies(u):u.bodies,p=0;p<f.length;p++)c.translate(f[p],d);return u},n.rotate=function(u,d,h,f){for(var p=Math.cos(d),x=Math.sin(d),m=f?n.allBodies(u):u.bodies,g=0;g<m.length;g++){var M=m[g],T=M.position.x-h.x,A=M.position.y-h.y;c.setPosition(M,{x:h.x+(T*p-A*x),y:h.y+(T*x+A*p)}),c.rotate(M,d)}return u},n.scale=function(u,d,h,f,p){for(var x=p?n.allBodies(u):u.bodies,m=0;m<x.length;m++){var g=x[m],M=g.position.x-f.x,T=g.position.y-f.y;c.setPosition(g,{x:f.x+M*d,y:f.y+T*h}),c.scale(g,d,h)}return u},n.bounds=function(u){for(var d=n.allBodies(u),h=[],f=0;f<d.length;f+=1){var p=d[f];h.push(p.bounds.min,p.bounds.max)}return l.create(h)}})()}),(function(t,r,i){var n={};t.exports=n;var a=i(4),s=i(5),l=i(0);(function(){n._motionWakeThreshold=.18,n._motionSleepThreshold=.08,n._minBias=.9,n.update=function(c,u){for(var d=u/l._baseDelta,h=n._motionSleepThreshold,f=0;f<c.length;f++){var p=c[f],x=a.getSpeed(p),m=a.getAngularSpeed(p),g=x*x+m*m;if(p.force.x!==0||p.force.y!==0){n.set(p,!1);continue}var M=Math.min(p.motion,g),T=Math.max(p.motion,g);p.motion=n._minBias*M+(1-n._minBias)*T,p.sleepThreshold>0&&p.motion<h?(p.sleepCounter+=1,p.sleepCounter>=p.sleepThreshold/d&&n.set(p,!0)):p.sleepCounter>0&&(p.sleepCounter-=1)}},n.afterCollisions=function(c){for(var u=n._motionSleepThreshold,d=0;d<c.length;d++){var h=c[d];if(h.isActive){var f=h.collision,p=f.bodyA.parent,x=f.bodyB.parent;if(!(p.isSleeping&&x.isSleeping||p.isStatic||x.isStatic)&&(p.isSleeping||x.isSleeping)){var m=p.isSleeping&&!p.isStatic?p:x,g=m===p?x:p;!m.isStatic&&g.motion>u&&n.set(m,!1)}}}},n.set=function(c,u){var d=c.isSleeping;u?(c.isSleeping=!0,c.sleepCounter=c.sleepThreshold,c.positionImpulse.x=0,c.positionImpulse.y=0,c.positionPrev.x=c.position.x,c.positionPrev.y=c.position.y,c.anglePrev=c.angle,c.speed=0,c.angularSpeed=0,c.motion=0,d||s.trigger(c,"sleepStart")):(c.isSleeping=!1,c.sleepCounter=0,d&&s.trigger(c,"sleepEnd"))}})()}),(function(t,r,i){var n={};t.exports=n;var a=i(3),s=i(9);(function(){var l=[],c={overlap:0,axis:null},u={overlap:0,axis:null};n.create=function(d,h){return{pair:null,collided:!1,bodyA:d,bodyB:h,parentA:d.parent,parentB:h.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[null,null],supportCount:0}},n.collides=function(d,h,f){if(n._overlapAxes(c,d.vertices,h.vertices,d.axes),c.overlap<=0||(n._overlapAxes(u,h.vertices,d.vertices,h.axes),u.overlap<=0))return null;var p=f&&f.table[s.id(d,h)],x;p?x=p.collision:(x=n.create(d,h),x.collided=!0,x.bodyA=d.id<h.id?d:h,x.bodyB=d.id<h.id?h:d,x.parentA=x.bodyA.parent,x.parentB=x.bodyB.parent),d=x.bodyA,h=x.bodyB;var m;c.overlap<u.overlap?m=c:m=u;var g=x.normal,M=x.tangent,T=x.penetration,A=x.supports,v=m.overlap,y=m.axis,b=y.x,E=y.y,S=h.position.x-d.position.x,_=h.position.y-d.position.y;b*S+E*_>=0&&(b=-b,E=-E),g.x=b,g.y=E,M.x=-E,M.y=b,T.x=b*v,T.y=E*v,x.depth=v;var C=n._findSupports(d,h,g,1),w=0;if(a.contains(d.vertices,C[0])&&(A[w++]=C[0]),a.contains(d.vertices,C[1])&&(A[w++]=C[1]),w<2){var P=n._findSupports(h,d,g,-1);a.contains(h.vertices,P[0])&&(A[w++]=P[0]),w<2&&a.contains(h.vertices,P[1])&&(A[w++]=P[1])}return w===0&&(A[w++]=C[0]),x.supportCount=w,x},n._overlapAxes=function(d,h,f,p){var x=h.length,m=f.length,g=h[0].x,M=h[0].y,T=f[0].x,A=f[0].y,v=p.length,y=Number.MAX_VALUE,b=0,E,S,_,C,w,P;for(w=0;w<v;w++){var L=p[w],I=L.x,O=L.y,V=g*I+M*O,H=T*I+A*O,W=V,X=H;for(P=1;P<x;P+=1)C=h[P].x*I+h[P].y*O,C>W?W=C:C<V&&(V=C);for(P=1;P<m;P+=1)C=f[P].x*I+f[P].y*O,C>X?X=C:C<H&&(H=C);if(S=W-H,_=X-V,E=S<_?S:_,E<y&&(y=E,b=w,E<=0))break}d.axis=p[b],d.overlap=y},n._findSupports=function(d,h,f,p){var x=h.vertices,m=x.length,g=d.position.x,M=d.position.y,T=f.x*p,A=f.y*p,v=x[0],y=v,b=T*(g-y.x)+A*(M-y.y),E,S,_;for(_=1;_<m;_+=1)y=x[_],S=T*(g-y.x)+A*(M-y.y),S<b&&(b=S,v=y);return E=x[(m+v.index-1)%m],b=T*(g-E.x)+A*(M-E.y),y=x[(v.index+1)%m],T*(g-y.x)+A*(M-y.y)<b?(l[0]=v,l[1]=y,l):(l[0]=v,l[1]=E,l)}})()}),(function(t,r,i){var n={};t.exports=n;var a=i(16);(function(){n.create=function(s,l){var c=s.bodyA,u=s.bodyB,d={id:n.id(c,u),bodyA:c,bodyB:u,collision:s,contacts:[a.create(),a.create()],contactCount:0,separation:0,isActive:!0,isSensor:c.isSensor||u.isSensor,timeCreated:l,timeUpdated:l,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return n.update(d,s,l),d},n.update=function(s,l,c){var u=l.supports,d=l.supportCount,h=s.contacts,f=l.parentA,p=l.parentB;s.isActive=!0,s.timeUpdated=c,s.collision=l,s.separation=l.depth,s.inverseMass=f.inverseMass+p.inverseMass,s.friction=f.friction<p.friction?f.friction:p.friction,s.frictionStatic=f.frictionStatic>p.frictionStatic?f.frictionStatic:p.frictionStatic,s.restitution=f.restitution>p.restitution?f.restitution:p.restitution,s.slop=f.slop>p.slop?f.slop:p.slop,s.contactCount=d,l.pair=s;var x=u[0],m=h[0],g=u[1],M=h[1];(M.vertex===x||m.vertex===g)&&(h[1]=m,h[0]=m=M,M=h[1]),m.vertex=x,M.vertex=g},n.setActive=function(s,l,c){l?(s.isActive=!0,s.timeUpdated=c):(s.isActive=!1,s.contactCount=0)},n.id=function(s,l){return s.id<l.id?s.id.toString(36)+":"+l.id.toString(36):l.id.toString(36)+":"+s.id.toString(36)}})()}),(function(t,r,i){var n={};t.exports=n;var a=i(3),s=i(2),l=i(7),c=i(1),u=i(11),d=i(0);(function(){n._warming=.4,n._torqueDampen=1,n._minLength=1e-6,n.create=function(h){var f=h;f.bodyA&&!f.pointA&&(f.pointA={x:0,y:0}),f.bodyB&&!f.pointB&&(f.pointB={x:0,y:0});var p=f.bodyA?s.add(f.bodyA.position,f.pointA):f.pointA,x=f.bodyB?s.add(f.bodyB.position,f.pointB):f.pointB,m=s.magnitude(s.sub(p,x));f.length=typeof f.length<"u"?f.length:m,f.id=f.id||d.nextId(),f.label=f.label||"Constraint",f.type="constraint",f.stiffness=f.stiffness||(f.length>0?1:.7),f.damping=f.damping||0,f.angularStiffness=f.angularStiffness||0,f.angleA=f.bodyA?f.bodyA.angle:f.angleA,f.angleB=f.bodyB?f.bodyB.angle:f.angleB,f.plugin={};var g={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return f.length===0&&f.stiffness>.1?(g.type="pin",g.anchors=!1):f.stiffness<.9&&(g.type="spring"),f.render=d.extend(g,f.render),f},n.preSolveAll=function(h){for(var f=0;f<h.length;f+=1){var p=h[f],x=p.constraintImpulse;p.isStatic||x.x===0&&x.y===0&&x.angle===0||(p.position.x+=x.x,p.position.y+=x.y,p.angle+=x.angle)}},n.solveAll=function(h,f){for(var p=d.clamp(f/d._baseDelta,0,1),x=0;x<h.length;x+=1){var m=h[x],g=!m.bodyA||m.bodyA&&m.bodyA.isStatic,M=!m.bodyB||m.bodyB&&m.bodyB.isStatic;(g||M)&&n.solve(h[x],p)}for(x=0;x<h.length;x+=1)m=h[x],g=!m.bodyA||m.bodyA&&m.bodyA.isStatic,M=!m.bodyB||m.bodyB&&m.bodyB.isStatic,!g&&!M&&n.solve(h[x],p)},n.solve=function(h,f){var p=h.bodyA,x=h.bodyB,m=h.pointA,g=h.pointB;if(!(!p&&!x)){p&&!p.isStatic&&(s.rotate(m,p.angle-h.angleA,m),h.angleA=p.angle),x&&!x.isStatic&&(s.rotate(g,x.angle-h.angleB,g),h.angleB=x.angle);var M=m,T=g;if(p&&(M=s.add(p.position,m)),x&&(T=s.add(x.position,g)),!(!M||!T)){var A=s.sub(M,T),v=s.magnitude(A);v<n._minLength&&(v=n._minLength);var y=(v-h.length)/v,b=h.stiffness>=1||h.length===0,E=b?h.stiffness*f:h.stiffness*f*f,S=h.damping*f,_=s.mult(A,y*E),C=(p?p.inverseMass:0)+(x?x.inverseMass:0),w=(p?p.inverseInertia:0)+(x?x.inverseInertia:0),P=C+w,L,I,O,V,H;if(S>0){var W=s.create();O=s.div(A,v),H=s.sub(x&&s.sub(x.position,x.positionPrev)||W,p&&s.sub(p.position,p.positionPrev)||W),V=s.dot(O,H)}p&&!p.isStatic&&(I=p.inverseMass/C,p.constraintImpulse.x-=_.x*I,p.constraintImpulse.y-=_.y*I,p.position.x-=_.x*I,p.position.y-=_.y*I,S>0&&(p.positionPrev.x-=S*O.x*V*I,p.positionPrev.y-=S*O.y*V*I),L=s.cross(m,_)/P*n._torqueDampen*p.inverseInertia*(1-h.angularStiffness),p.constraintImpulse.angle-=L,p.angle-=L),x&&!x.isStatic&&(I=x.inverseMass/C,x.constraintImpulse.x+=_.x*I,x.constraintImpulse.y+=_.y*I,x.position.x+=_.x*I,x.position.y+=_.y*I,S>0&&(x.positionPrev.x+=S*O.x*V*I,x.positionPrev.y+=S*O.y*V*I),L=s.cross(g,_)/P*n._torqueDampen*x.inverseInertia*(1-h.angularStiffness),x.constraintImpulse.angle+=L,x.angle+=L)}}},n.postSolveAll=function(h){for(var f=0;f<h.length;f++){var p=h[f],x=p.constraintImpulse;if(!(p.isStatic||x.x===0&&x.y===0&&x.angle===0)){l.set(p,!1);for(var m=0;m<p.parts.length;m++){var g=p.parts[m];a.translate(g.vertices,x),m>0&&(g.position.x+=x.x,g.position.y+=x.y),x.angle!==0&&(a.rotate(g.vertices,x.angle,p.position),u.rotate(g.axes,x.angle),m>0&&s.rotateAbout(g.position,x.angle,p.position,g.position)),c.update(g.bounds,g.vertices,p.velocity)}x.angle*=n._warming,x.x*=n._warming,x.y*=n._warming}}},n.pointAWorld=function(h){return{x:(h.bodyA?h.bodyA.position.x:0)+(h.pointA?h.pointA.x:0),y:(h.bodyA?h.bodyA.position.y:0)+(h.pointA?h.pointA.y:0)}},n.pointBWorld=function(h){return{x:(h.bodyB?h.bodyB.position.x:0)+(h.pointB?h.pointB.x:0),y:(h.bodyB?h.bodyB.position.y:0)+(h.pointB?h.pointB.y:0)}},n.currentLength=function(h){var f=(h.bodyA?h.bodyA.position.x:0)+(h.pointA?h.pointA.x:0),p=(h.bodyA?h.bodyA.position.y:0)+(h.pointA?h.pointA.y:0),x=(h.bodyB?h.bodyB.position.x:0)+(h.pointB?h.pointB.x:0),m=(h.bodyB?h.bodyB.position.y:0)+(h.pointB?h.pointB.y:0),g=f-x,M=p-m;return Math.sqrt(g*g+M*M)}})()}),(function(t,r,i){var n={};t.exports=n;var a=i(2),s=i(0);(function(){n.fromVertices=function(l){for(var c={},u=0;u<l.length;u++){var d=(u+1)%l.length,h=a.normalise({x:l[d].y-l[u].y,y:l[u].x-l[d].x}),f=h.y===0?1/0:h.x/h.y;f=f.toFixed(3).toString(),c[f]=h}return s.values(c)},n.rotate=function(l,c){if(c!==0)for(var u=Math.cos(c),d=Math.sin(c),h=0;h<l.length;h++){var f=l[h],p;p=f.x*u-f.y*d,f.y=f.x*d+f.y*u,f.x=p}}})()}),(function(t,r,i){var n={};t.exports=n;var a=i(3),s=i(0),l=i(4),c=i(1),u=i(2);(function(){n.rectangle=function(d,h,f,p,x){x=x||{};var m={label:"Rectangle Body",position:{x:d,y:h},vertices:a.fromPath("L 0 0 L "+f+" 0 L "+f+" "+p+" L 0 "+p)};if(x.chamfer){var g=x.chamfer;m.vertices=a.chamfer(m.vertices,g.radius,g.quality,g.qualityMin,g.qualityMax),delete x.chamfer}return l.create(s.extend({},m,x))},n.trapezoid=function(d,h,f,p,x,m){m=m||{},x>=1&&s.warn("Bodies.trapezoid: slope parameter must be < 1."),x*=.5;var g=(1-x*2)*f,M=f*x,T=M+g,A=T+M,v;x<.5?v="L 0 0 L "+M+" "+-p+" L "+T+" "+-p+" L "+A+" 0":v="L 0 0 L "+T+" "+-p+" L "+A+" 0";var y={label:"Trapezoid Body",position:{x:d,y:h},vertices:a.fromPath(v)};if(m.chamfer){var b=m.chamfer;y.vertices=a.chamfer(y.vertices,b.radius,b.quality,b.qualityMin,b.qualityMax),delete m.chamfer}return l.create(s.extend({},y,m))},n.circle=function(d,h,f,p,x){p=p||{};var m={label:"Circle Body",circleRadius:f};x=x||25;var g=Math.ceil(Math.max(10,Math.min(x,f)));return g%2===1&&(g+=1),n.polygon(d,h,g,f,s.extend({},m,p))},n.polygon=function(d,h,f,p,x){if(x=x||{},f<3)return n.circle(d,h,p,x);for(var m=2*Math.PI/f,g="",M=m*.5,T=0;T<f;T+=1){var A=M+T*m,v=Math.cos(A)*p,y=Math.sin(A)*p;g+="L "+v.toFixed(3)+" "+y.toFixed(3)+" "}var b={label:"Polygon Body",position:{x:d,y:h},vertices:a.fromPath(g)};if(x.chamfer){var E=x.chamfer;b.vertices=a.chamfer(b.vertices,E.radius,E.quality,E.qualityMin,E.qualityMax),delete x.chamfer}return l.create(s.extend({},b,x))},n.fromVertices=function(d,h,f,p,x,m,g,M){var T=s.getDecomp(),A,v,y,b,E,S,_,C,w,P,L;for(A=!!(T&&T.quickDecomp),p=p||{},y=[],x=typeof x<"u"?x:!1,m=typeof m<"u"?m:.01,g=typeof g<"u"?g:10,M=typeof M<"u"?M:.01,s.isArray(f[0])||(f=[f]),P=0;P<f.length;P+=1)if(S=f[P],b=a.isConvex(S),E=!b,E&&!A&&s.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),b||!A)b?S=a.clockwiseSort(S):S=a.hull(S),y.push({position:{x:d,y:h},vertices:S});else{var I=S.map(function(B){return[B.x,B.y]});T.makeCCW(I),m!==!1&&T.removeCollinearPoints(I,m),M!==!1&&T.removeDuplicatePoints&&T.removeDuplicatePoints(I,M);var O=T.quickDecomp(I);for(_=0;_<O.length;_++){var V=O[_],H=V.map(function(B){return{x:B[0],y:B[1]}});g>0&&a.area(H)<g||y.push({position:a.centre(H),vertices:H})}}for(_=0;_<y.length;_++)y[_]=l.create(s.extend(y[_],p));if(x){var W=5;for(_=0;_<y.length;_++){var X=y[_];for(C=_+1;C<y.length;C++){var N=y[C];if(c.overlaps(X.bounds,N.bounds)){var Y=X.vertices,J=N.vertices;for(w=0;w<X.vertices.length;w++)for(L=0;L<N.vertices.length;L++){var ne=u.magnitudeSquared(u.sub(Y[(w+1)%Y.length],J[L])),$=u.magnitudeSquared(u.sub(Y[w],J[(L+1)%J.length]));ne<W&&$<W&&(Y[w].isInternal=!0,J[L].isInternal=!0)}}}}}return y.length>1?(v=l.create(s.extend({parts:y.slice(0)},p)),l.setPosition(v,{x:d,y:h}),v):y[0]}})()}),(function(t,r,i){var n={};t.exports=n;var a=i(0),s=i(8);(function(){n.create=function(l){var c={bodies:[],collisions:[],pairs:null};return a.extend(c,l)},n.setBodies=function(l,c){l.bodies=c.slice(0)},n.clear=function(l){l.bodies=[],l.collisions=[]},n.collisions=function(l){var c=l.pairs,u=l.bodies,d=u.length,h=n.canCollide,f=s.collides,p=l.collisions,x=0,m,g;for(u.sort(n._compareBoundsX),m=0;m<d;m++){var M=u[m],T=M.bounds,A=M.bounds.max.x,v=M.bounds.max.y,y=M.bounds.min.y,b=M.isStatic||M.isSleeping,E=M.parts.length,S=E===1;for(g=m+1;g<d;g++){var _=u[g],C=_.bounds;if(C.min.x>A)break;if(!(v<C.min.y||y>C.max.y)&&!(b&&(_.isStatic||_.isSleeping))&&h(M.collisionFilter,_.collisionFilter)){var w=_.parts.length;if(S&&w===1){var P=f(M,_,c);P&&(p[x++]=P)}else for(var L=E>1?1:0,I=w>1?1:0,O=L;O<E;O++)for(var V=M.parts[O],T=V.bounds,H=I;H<w;H++){var W=_.parts[H],C=W.bounds;if(!(T.min.x>C.max.x||T.max.x<C.min.x||T.max.y<C.min.y||T.min.y>C.max.y)){var P=f(V,W,c);P&&(p[x++]=P)}}}}}return p.length!==x&&(p.length=x),p},n.canCollide=function(l,c){return l.group===c.group&&l.group!==0?l.group>0:(l.mask&c.category)!==0&&(c.mask&l.category)!==0},n._compareBoundsX=function(l,c){return l.bounds.min.x-c.bounds.min.x}})()}),(function(t,r,i){var n={};t.exports=n;var a=i(0);(function(){n.create=function(s){var l={};return s||a.log("Mouse.create: element was undefined, defaulting to document.body","warn"),l.element=s||document.body,l.absolute={x:0,y:0},l.position={x:0,y:0},l.mousedownPosition={x:0,y:0},l.mouseupPosition={x:0,y:0},l.offset={x:0,y:0},l.scale={x:1,y:1},l.wheelDelta=0,l.button=-1,l.pixelRatio=parseInt(l.element.getAttribute("data-pixel-ratio"),10)||1,l.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},l.mousemove=function(c){var u=n._getRelativeMousePosition(c,l.element,l.pixelRatio),d=c.changedTouches;d&&(l.button=0,c.preventDefault()),l.absolute.x=u.x,l.absolute.y=u.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.sourceEvents.mousemove=c},l.mousedown=function(c){var u=n._getRelativeMousePosition(c,l.element,l.pixelRatio),d=c.changedTouches;d?(l.button=0,c.preventDefault()):l.button=c.button,l.absolute.x=u.x,l.absolute.y=u.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mousedownPosition.x=l.position.x,l.mousedownPosition.y=l.position.y,l.sourceEvents.mousedown=c},l.mouseup=function(c){var u=n._getRelativeMousePosition(c,l.element,l.pixelRatio),d=c.changedTouches;d&&c.preventDefault(),l.button=-1,l.absolute.x=u.x,l.absolute.y=u.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mouseupPosition.x=l.position.x,l.mouseupPosition.y=l.position.y,l.sourceEvents.mouseup=c},l.mousewheel=function(c){l.wheelDelta=Math.max(-1,Math.min(1,c.wheelDelta||-c.detail)),c.preventDefault(),l.sourceEvents.mousewheel=c},n.setElement(l,l.element),l},n.setElement=function(s,l){s.element=l,l.addEventListener("mousemove",s.mousemove,{passive:!0}),l.addEventListener("mousedown",s.mousedown,{passive:!0}),l.addEventListener("mouseup",s.mouseup,{passive:!0}),l.addEventListener("wheel",s.mousewheel,{passive:!1}),l.addEventListener("touchmove",s.mousemove,{passive:!1}),l.addEventListener("touchstart",s.mousedown,{passive:!1}),l.addEventListener("touchend",s.mouseup,{passive:!1})},n.clearSourceEvents=function(s){s.sourceEvents.mousemove=null,s.sourceEvents.mousedown=null,s.sourceEvents.mouseup=null,s.sourceEvents.mousewheel=null,s.wheelDelta=0},n.setOffset=function(s,l){s.offset.x=l.x,s.offset.y=l.y,s.position.x=s.absolute.x*s.scale.x+s.offset.x,s.position.y=s.absolute.y*s.scale.y+s.offset.y},n.setScale=function(s,l){s.scale.x=l.x,s.scale.y=l.y,s.position.x=s.absolute.x*s.scale.x+s.offset.x,s.position.y=s.absolute.y*s.scale.y+s.offset.y},n._getRelativeMousePosition=function(s,l,c){var u=l.getBoundingClientRect(),d=document.documentElement||document.body.parentNode||document.body,h=window.pageXOffset!==void 0?window.pageXOffset:d.scrollLeft,f=window.pageYOffset!==void 0?window.pageYOffset:d.scrollTop,p=s.changedTouches,x,m;return p?(x=p[0].pageX-u.left-h,m=p[0].pageY-u.top-f):(x=s.pageX-u.left-h,m=s.pageY-u.top-f),{x:x/(l.clientWidth/(l.width||l.clientWidth)*c),y:m/(l.clientHeight/(l.height||l.clientHeight)*c)}}})()}),(function(t,r,i){var n={};t.exports=n;var a=i(0);(function(){n._registry={},n.register=function(s){if(n.isPlugin(s)||a.warn("Plugin.register:",n.toString(s),"does not implement all required fields."),s.name in n._registry){var l=n._registry[s.name],c=n.versionParse(s.version).number,u=n.versionParse(l.version).number;c>u?(a.warn("Plugin.register:",n.toString(l),"was upgraded to",n.toString(s)),n._registry[s.name]=s):c<u?a.warn("Plugin.register:",n.toString(l),"can not be downgraded to",n.toString(s)):s!==l&&a.warn("Plugin.register:",n.toString(s),"is already registered to different plugin object")}else n._registry[s.name]=s;return s},n.resolve=function(s){return n._registry[n.dependencyParse(s).name]},n.toString=function(s){return typeof s=="string"?s:(s.name||"anonymous")+"@"+(s.version||s.range||"0.0.0")},n.isPlugin=function(s){return s&&s.name&&s.version&&s.install},n.isUsed=function(s,l){return s.used.indexOf(l)>-1},n.isFor=function(s,l){var c=s.for&&n.dependencyParse(s.for);return!s.for||l.name===c.name&&n.versionSatisfies(l.version,c.range)},n.use=function(s,l){if(s.uses=(s.uses||[]).concat(l||[]),s.uses.length===0){a.warn("Plugin.use:",n.toString(s),"does not specify any dependencies to install.");return}for(var c=n.dependencies(s),u=a.topologicalSort(c),d=[],h=0;h<u.length;h+=1)if(u[h]!==s.name){var f=n.resolve(u[h]);if(!f){d.push("❌ "+u[h]);continue}n.isUsed(s,f.name)||(n.isFor(f,s)||(a.warn("Plugin.use:",n.toString(f),"is for",f.for,"but installed on",n.toString(s)+"."),f._warned=!0),f.install?f.install(s):(a.warn("Plugin.use:",n.toString(f),"does not specify an install function."),f._warned=!0),f._warned?(d.push("🔶 "+n.toString(f)),delete f._warned):d.push("✅ "+n.toString(f)),s.used.push(f.name))}d.length>0&&a.info(d.join("  "))},n.dependencies=function(s,l){var c=n.dependencyParse(s),u=c.name;if(l=l||{},!(u in l)){s=n.resolve(s)||s,l[u]=a.map(s.uses||[],function(h){n.isPlugin(h)&&n.register(h);var f=n.dependencyParse(h),p=n.resolve(h);return p&&!n.versionSatisfies(p.version,f.range)?(a.warn("Plugin.dependencies:",n.toString(p),"does not satisfy",n.toString(f),"used by",n.toString(c)+"."),p._warned=!0,s._warned=!0):p||(a.warn("Plugin.dependencies:",n.toString(h),"used by",n.toString(c),"could not be resolved."),s._warned=!0),f.name});for(var d=0;d<l[u].length;d+=1)n.dependencies(l[u][d],l);return l}},n.dependencyParse=function(s){if(a.isString(s)){var l=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return l.test(s)||a.warn("Plugin.dependencyParse:",s,"is not a valid dependency string."),{name:s.split("@")[0],range:s.split("@")[1]||"*"}}return{name:s.name,range:s.range||s.version}},n.versionParse=function(s){var l=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;l.test(s)||a.warn("Plugin.versionParse:",s,"is not a valid version or range.");var c=l.exec(s),u=Number(c[4]),d=Number(c[5]),h=Number(c[6]);return{isRange:!!(c[1]||c[2]),version:c[3],range:s,operator:c[1]||c[2]||"",major:u,minor:d,patch:h,parts:[u,d,h],prerelease:c[7],number:u*1e8+d*1e4+h}},n.versionSatisfies=function(s,l){l=l||"*";var c=n.versionParse(l),u=n.versionParse(s);if(c.isRange){if(c.operator==="*"||s==="*")return!0;if(c.operator===">")return u.number>c.number;if(c.operator===">=")return u.number>=c.number;if(c.operator==="~")return u.major===c.major&&u.minor===c.minor&&u.patch>=c.patch;if(c.operator==="^")return c.major>0?u.major===c.major&&u.number>=c.number:c.minor>0?u.minor===c.minor&&u.patch>=c.patch:u.patch===c.patch}return s===l||s==="*"}})()}),(function(t,r){var i={};t.exports=i,(function(){i.create=function(n){return{vertex:n,normalImpulse:0,tangentImpulse:0}}})()}),(function(t,r,i){var n={};t.exports=n;var a=i(7),s=i(18),l=i(13),c=i(19),u=i(5),d=i(6),h=i(10),f=i(0),p=i(4);(function(){n._deltaMax=1e3/60,n.create=function(x){x=x||{};var m={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0,lastUpdatesPerFrame:0}},g=f.extend(m,x);return g.world=x.world||d.create({label:"World"}),g.pairs=x.pairs||c.create(),g.detector=x.detector||l.create(),g.detector.pairs=g.pairs,g.grid={buckets:[]},g.world.gravity=g.gravity,g.broadphase=g.grid,g.metrics={},g},n.update=function(x,m){var g=f.now(),M=x.world,T=x.detector,A=x.pairs,v=x.timing,y=v.timestamp,b;m>n._deltaMax&&f.warnOnce("Matter.Engine.update: delta argument is recommended to be less than or equal to",n._deltaMax.toFixed(3),"ms."),m=typeof m<"u"?m:f._baseDelta,m*=v.timeScale,v.timestamp+=m,v.lastDelta=m;var E={timestamp:v.timestamp,delta:m};u.trigger(x,"beforeUpdate",E);var S=d.allBodies(M),_=d.allConstraints(M);for(M.isModified&&(l.setBodies(T,S),d.setModified(M,!1,!1,!0)),x.enableSleeping&&a.update(S,m),n._bodiesApplyGravity(S,x.gravity),m>0&&n._bodiesUpdate(S,m),u.trigger(x,"beforeSolve",E),h.preSolveAll(S),b=0;b<x.constraintIterations;b++)h.solveAll(_,m);h.postSolveAll(S);var C=l.collisions(T);c.update(A,C,y),x.enableSleeping&&a.afterCollisions(A.list),A.collisionStart.length>0&&u.trigger(x,"collisionStart",{pairs:A.collisionStart,timestamp:v.timestamp,delta:m});var w=f.clamp(20/x.positionIterations,0,1);for(s.preSolvePosition(A.list),b=0;b<x.positionIterations;b++)s.solvePosition(A.list,m,w);for(s.postSolvePosition(S),h.preSolveAll(S),b=0;b<x.constraintIterations;b++)h.solveAll(_,m);for(h.postSolveAll(S),s.preSolveVelocity(A.list),b=0;b<x.velocityIterations;b++)s.solveVelocity(A.list,m);return n._bodiesUpdateVelocities(S),A.collisionActive.length>0&&u.trigger(x,"collisionActive",{pairs:A.collisionActive,timestamp:v.timestamp,delta:m}),A.collisionEnd.length>0&&u.trigger(x,"collisionEnd",{pairs:A.collisionEnd,timestamp:v.timestamp,delta:m}),n._bodiesClearForces(S),u.trigger(x,"afterUpdate",E),x.timing.lastElapsed=f.now()-g,x},n.merge=function(x,m){if(f.extend(x,m),m.world){x.world=m.world,n.clear(x);for(var g=d.allBodies(x.world),M=0;M<g.length;M++){var T=g[M];a.set(T,!1),T.id=f.nextId()}}},n.clear=function(x){c.clear(x.pairs),l.clear(x.detector)},n._bodiesClearForces=function(x){for(var m=x.length,g=0;g<m;g++){var M=x[g];M.force.x=0,M.force.y=0,M.torque=0}},n._bodiesApplyGravity=function(x,m){var g=typeof m.scale<"u"?m.scale:.001,M=x.length;if(!(m.x===0&&m.y===0||g===0))for(var T=0;T<M;T++){var A=x[T];A.isStatic||A.isSleeping||(A.force.y+=A.mass*m.y*g,A.force.x+=A.mass*m.x*g)}},n._bodiesUpdate=function(x,m){for(var g=x.length,M=0;M<g;M++){var T=x[M];T.isStatic||T.isSleeping||p.update(T,m)}},n._bodiesUpdateVelocities=function(x){for(var m=x.length,g=0;g<m;g++)p.updateVelocities(x[g])}})()}),(function(t,r,i){var n={};t.exports=n;var a=i(3),s=i(0),l=i(1);(function(){n._restingThresh=2,n._restingThreshTangent=Math.sqrt(6),n._positionDampen=.9,n._positionWarming=.8,n._frictionNormalMultiplier=5,n._frictionMaxStatic=Number.MAX_VALUE,n.preSolvePosition=function(c){var u,d,h,f=c.length;for(u=0;u<f;u++)d=c[u],d.isActive&&(h=d.contactCount,d.collision.parentA.totalContacts+=h,d.collision.parentB.totalContacts+=h)},n.solvePosition=function(c,u,d){var h,f,p,x,m,g,M,T,A=n._positionDampen*(d||1),v=s.clamp(u/s._baseDelta,0,1),y=c.length;for(h=0;h<y;h++)f=c[h],!(!f.isActive||f.isSensor)&&(p=f.collision,x=p.parentA,m=p.parentB,g=p.normal,f.separation=p.depth+g.x*(m.positionImpulse.x-x.positionImpulse.x)+g.y*(m.positionImpulse.y-x.positionImpulse.y));for(h=0;h<y;h++)f=c[h],!(!f.isActive||f.isSensor)&&(p=f.collision,x=p.parentA,m=p.parentB,g=p.normal,T=f.separation-f.slop*v,(x.isStatic||m.isStatic)&&(T*=2),x.isStatic||x.isSleeping||(M=A/x.totalContacts,x.positionImpulse.x+=g.x*T*M,x.positionImpulse.y+=g.y*T*M),m.isStatic||m.isSleeping||(M=A/m.totalContacts,m.positionImpulse.x-=g.x*T*M,m.positionImpulse.y-=g.y*T*M))},n.postSolvePosition=function(c){for(var u=n._positionWarming,d=c.length,h=a.translate,f=l.update,p=0;p<d;p++){var x=c[p],m=x.positionImpulse,g=m.x,M=m.y,T=x.velocity;if(x.totalContacts=0,g!==0||M!==0){for(var A=0;A<x.parts.length;A++){var v=x.parts[A];h(v.vertices,m),f(v.bounds,v.vertices,T),v.position.x+=g,v.position.y+=M}x.positionPrev.x+=g,x.positionPrev.y+=M,g*T.x+M*T.y<0?(m.x=0,m.y=0):(m.x*=u,m.y*=u)}}},n.preSolveVelocity=function(c){var u=c.length,d,h;for(d=0;d<u;d++){var f=c[d];if(!(!f.isActive||f.isSensor)){var p=f.contacts,x=f.contactCount,m=f.collision,g=m.parentA,M=m.parentB,T=m.normal,A=m.tangent;for(h=0;h<x;h++){var v=p[h],y=v.vertex,b=v.normalImpulse,E=v.tangentImpulse;if(b!==0||E!==0){var S=T.x*b+A.x*E,_=T.y*b+A.y*E;g.isStatic||g.isSleeping||(g.positionPrev.x+=S*g.inverseMass,g.positionPrev.y+=_*g.inverseMass,g.anglePrev+=g.inverseInertia*((y.x-g.position.x)*_-(y.y-g.position.y)*S)),M.isStatic||M.isSleeping||(M.positionPrev.x-=S*M.inverseMass,M.positionPrev.y-=_*M.inverseMass,M.anglePrev-=M.inverseInertia*((y.x-M.position.x)*_-(y.y-M.position.y)*S))}}}}},n.solveVelocity=function(c,u){var d=u/s._baseDelta,h=d*d,f=h*d,p=-n._restingThresh*d,x=n._restingThreshTangent,m=n._frictionNormalMultiplier*d,g=n._frictionMaxStatic,M=c.length,T,A,v,y;for(v=0;v<M;v++){var b=c[v];if(!(!b.isActive||b.isSensor)){var E=b.collision,S=E.parentA,_=E.parentB,C=E.normal.x,w=E.normal.y,P=E.tangent.x,L=E.tangent.y,I=b.inverseMass,O=b.friction*b.frictionStatic*m,V=b.contacts,H=b.contactCount,W=1/H,X=S.position.x-S.positionPrev.x,N=S.position.y-S.positionPrev.y,Y=S.angle-S.anglePrev,J=_.position.x-_.positionPrev.x,ne=_.position.y-_.positionPrev.y,$=_.angle-_.anglePrev;for(y=0;y<H;y++){var B=V[y],G=B.vertex,K=G.x-S.position.x,me=G.y-S.position.y,he=G.x-_.position.x,ce=G.y-_.position.y,ue=X-me*Y,De=N+K*Y,Fe=J-ce*$,F=ne+he*$,Te=ue-Fe,Ue=De-F,ge=C*Te+w*Ue,le=P*Te+L*Ue,Ae=b.separation+ge,ee=Math.min(Ae,1);ee=Ae<0?0:ee;var Se=ee*O;le<-Se||le>Se?(A=le>0?le:-le,T=b.friction*(le>0?1:-1)*f,T<-A?T=-A:T>A&&(T=A)):(T=le,A=g);var U=K*w-me*C,R=he*w-ce*C,z=W/(I+S.inverseInertia*U*U+_.inverseInertia*R*R),ie=(1+b.restitution)*ge*z;if(T*=z,ge<p)B.normalImpulse=0;else{var te=B.normalImpulse;B.normalImpulse+=ie,B.normalImpulse>0&&(B.normalImpulse=0),ie=B.normalImpulse-te}if(le<-x||le>x)B.tangentImpulse=0;else{var j=B.tangentImpulse;B.tangentImpulse+=T,B.tangentImpulse<-A&&(B.tangentImpulse=-A),B.tangentImpulse>A&&(B.tangentImpulse=A),T=B.tangentImpulse-j}var _e=C*ie+P*T,xe=w*ie+L*T;S.isStatic||S.isSleeping||(S.positionPrev.x+=_e*S.inverseMass,S.positionPrev.y+=xe*S.inverseMass,S.anglePrev+=(K*xe-me*_e)*S.inverseInertia),_.isStatic||_.isSleeping||(_.positionPrev.x-=_e*_.inverseMass,_.positionPrev.y-=xe*_.inverseMass,_.anglePrev-=(he*xe-ce*_e)*_.inverseInertia)}}}}})()}),(function(t,r,i){var n={};t.exports=n;var a=i(9),s=i(0);(function(){n.create=function(l){return s.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},l)},n.update=function(l,c,u){var d=a.update,h=a.create,f=a.setActive,p=l.table,x=l.list,m=x.length,g=m,M=l.collisionStart,T=l.collisionEnd,A=l.collisionActive,v=c.length,y=0,b=0,E=0,S,_,C;for(C=0;C<v;C++)S=c[C],_=S.pair,_?(_.isActive&&(A[E++]=_),d(_,S,u)):(_=h(S,u),p[_.id]=_,M[y++]=_,x[g++]=_);for(g=0,m=x.length,C=0;C<m;C++)_=x[C],_.timeUpdated>=u?x[g++]=_:(f(_,!1,u),_.collision.bodyA.sleepCounter>0&&_.collision.bodyB.sleepCounter>0?x[g++]=_:(T[b++]=_,delete p[_.id]));x.length!==g&&(x.length=g),M.length!==y&&(M.length=y),T.length!==b&&(T.length=b),A.length!==E&&(A.length=E)},n.clear=function(l){return l.table={},l.list.length=0,l.collisionStart.length=0,l.collisionActive.length=0,l.collisionEnd.length=0,l}})()}),(function(t,r,i){var n=t.exports=i(21);n.Axes=i(11),n.Bodies=i(12),n.Body=i(4),n.Bounds=i(1),n.Collision=i(8),n.Common=i(0),n.Composite=i(6),n.Composites=i(22),n.Constraint=i(10),n.Contact=i(16),n.Detector=i(13),n.Engine=i(17),n.Events=i(5),n.Grid=i(23),n.Mouse=i(14),n.MouseConstraint=i(24),n.Pair=i(9),n.Pairs=i(19),n.Plugin=i(15),n.Query=i(25),n.Render=i(26),n.Resolver=i(18),n.Runner=i(27),n.SAT=i(28),n.Sleeping=i(7),n.Svg=i(29),n.Vector=i(2),n.Vertices=i(3),n.World=i(30),n.Engine.run=n.Runner.run,n.Common.deprecated(n.Engine,"run","Engine.run ➤ use Matter.Runner.run(engine) instead")}),(function(t,r,i){var n={};t.exports=n;var a=i(15),s=i(0);(function(){n.name="matter-js",n.version="0.20.0",n.uses=[],n.used=[],n.use=function(){a.use(n,Array.prototype.slice.call(arguments))},n.before=function(l,c){return l=l.replace(/^Matter./,""),s.chainPathBefore(n,l,c)},n.after=function(l,c){return l=l.replace(/^Matter./,""),s.chainPathAfter(n,l,c)}})()}),(function(t,r,i){var n={};t.exports=n;var a=i(6),s=i(10),l=i(0),c=i(4),u=i(12),d=l.deprecated;(function(){n.stack=function(h,f,p,x,m,g,M){for(var T=a.create({label:"Stack"}),A=h,v=f,y,b=0,E=0;E<x;E++){for(var S=0,_=0;_<p;_++){var C=M(A,v,_,E,y,b);if(C){var w=C.bounds.max.y-C.bounds.min.y,P=C.bounds.max.x-C.bounds.min.x;w>S&&(S=w),c.translate(C,{x:P*.5,y:w*.5}),A=C.bounds.max.x+m,a.addBody(T,C),y=C,b+=1}else A+=m}v+=S+g,A=h}return T},n.chain=function(h,f,p,x,m,g){for(var M=h.bodies,T=1;T<M.length;T++){var A=M[T-1],v=M[T],y=A.bounds.max.y-A.bounds.min.y,b=A.bounds.max.x-A.bounds.min.x,E=v.bounds.max.y-v.bounds.min.y,S=v.bounds.max.x-v.bounds.min.x,_={bodyA:A,pointA:{x:b*f,y:y*p},bodyB:v,pointB:{x:S*x,y:E*m}},C=l.extend(_,g);a.addConstraint(h,s.create(C))}return h.label+=" Chain",h},n.mesh=function(h,f,p,x,m){var g=h.bodies,M,T,A,v,y;for(M=0;M<p;M++){for(T=1;T<f;T++)A=g[T-1+M*f],v=g[T+M*f],a.addConstraint(h,s.create(l.extend({bodyA:A,bodyB:v},m)));if(M>0)for(T=0;T<f;T++)A=g[T+(M-1)*f],v=g[T+M*f],a.addConstraint(h,s.create(l.extend({bodyA:A,bodyB:v},m))),x&&T>0&&(y=g[T-1+(M-1)*f],a.addConstraint(h,s.create(l.extend({bodyA:y,bodyB:v},m)))),x&&T<f-1&&(y=g[T+1+(M-1)*f],a.addConstraint(h,s.create(l.extend({bodyA:y,bodyB:v},m))))}return h.label+=" Mesh",h},n.pyramid=function(h,f,p,x,m,g,M){return n.stack(h,f,p,x,m,g,function(T,A,v,y,b,E){var S=Math.min(x,Math.ceil(p/2)),_=b?b.bounds.max.x-b.bounds.min.x:0;if(!(y>S)){y=S-y;var C=y,w=p-1-y;if(!(v<C||v>w)){E===1&&c.translate(b,{x:(v+(p%2===1?1:-1))*_,y:0});var P=b?v*_:0;return M(h+P+v*m,A,v,y,b,E)}}})},n.newtonsCradle=function(h,f,p,x,m){for(var g=a.create({label:"Newtons Cradle"}),M=0;M<p;M++){var T=1.9,A=u.circle(h+M*(x*T),f+m,x,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),v=s.create({pointA:{x:h+M*(x*T),y:f},bodyB:A});a.addBody(g,A),a.addConstraint(g,v)}return g},d(n,"newtonsCradle","Composites.newtonsCradle ➤ moved to newtonsCradle example"),n.car=function(h,f,p,x,m){var g=c.nextGroup(!0),M=20,T=-p*.5+M,A=p*.5-M,v=0,y=a.create({label:"Car"}),b=u.rectangle(h,f,p,x,{collisionFilter:{group:g},chamfer:{radius:x*.5},density:2e-4}),E=u.circle(h+T,f+v,m,{collisionFilter:{group:g},friction:.8}),S=u.circle(h+A,f+v,m,{collisionFilter:{group:g},friction:.8}),_=s.create({bodyB:b,pointB:{x:T,y:v},bodyA:E,stiffness:1,length:0}),C=s.create({bodyB:b,pointB:{x:A,y:v},bodyA:S,stiffness:1,length:0});return a.addBody(y,b),a.addBody(y,E),a.addBody(y,S),a.addConstraint(y,_),a.addConstraint(y,C),y},d(n,"car","Composites.car ➤ moved to car example"),n.softBody=function(h,f,p,x,m,g,M,T,A,v){A=l.extend({inertia:1/0},A),v=l.extend({stiffness:.2,render:{type:"line",anchors:!1}},v);var y=n.stack(h,f,p,x,m,g,function(b,E){return u.circle(b,E,T,A)});return n.mesh(y,p,x,M,v),y.label="Soft Body",y},d(n,"softBody","Composites.softBody ➤ moved to softBody and cloth examples")})()}),(function(t,r,i){var n={};t.exports=n;var a=i(9),s=i(0),l=s.deprecated;(function(){n.create=function(c){var u={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return s.extend(u,c)},n.update=function(c,u,d,h){var f,p,x,m=d.world,g=c.buckets,M,T,A=!1;for(f=0;f<u.length;f++){var v=u[f];if(!(v.isSleeping&&!h)&&!(m.bounds&&(v.bounds.max.x<m.bounds.min.x||v.bounds.min.x>m.bounds.max.x||v.bounds.max.y<m.bounds.min.y||v.bounds.min.y>m.bounds.max.y))){var y=n._getRegion(c,v);if(!v.region||y.id!==v.region.id||h){(!v.region||h)&&(v.region=y);var b=n._regionUnion(y,v.region);for(p=b.startCol;p<=b.endCol;p++)for(x=b.startRow;x<=b.endRow;x++){T=n._getBucketId(p,x),M=g[T];var E=p>=y.startCol&&p<=y.endCol&&x>=y.startRow&&x<=y.endRow,S=p>=v.region.startCol&&p<=v.region.endCol&&x>=v.region.startRow&&x<=v.region.endRow;!E&&S&&S&&M&&n._bucketRemoveBody(c,M,v),(v.region===y||E&&!S||h)&&(M||(M=n._createBucket(g,T)),n._bucketAddBody(c,M,v))}v.region=y,A=!0}}}A&&(c.pairsList=n._createActivePairsList(c))},l(n,"update","Grid.update ➤ replaced by Matter.Detector"),n.clear=function(c){c.buckets={},c.pairs={},c.pairsList=[]},l(n,"clear","Grid.clear ➤ replaced by Matter.Detector"),n._regionUnion=function(c,u){var d=Math.min(c.startCol,u.startCol),h=Math.max(c.endCol,u.endCol),f=Math.min(c.startRow,u.startRow),p=Math.max(c.endRow,u.endRow);return n._createRegion(d,h,f,p)},n._getRegion=function(c,u){var d=u.bounds,h=Math.floor(d.min.x/c.bucketWidth),f=Math.floor(d.max.x/c.bucketWidth),p=Math.floor(d.min.y/c.bucketHeight),x=Math.floor(d.max.y/c.bucketHeight);return n._createRegion(h,f,p,x)},n._createRegion=function(c,u,d,h){return{id:c+","+u+","+d+","+h,startCol:c,endCol:u,startRow:d,endRow:h}},n._getBucketId=function(c,u){return"C"+c+"R"+u},n._createBucket=function(c,u){var d=c[u]=[];return d},n._bucketAddBody=function(c,u,d){var h=c.pairs,f=a.id,p=u.length,x;for(x=0;x<p;x++){var m=u[x];if(!(d.id===m.id||d.isStatic&&m.isStatic)){var g=f(d,m),M=h[g];M?M[2]+=1:h[g]=[d,m,1]}}u.push(d)},n._bucketRemoveBody=function(c,u,d){var h=c.pairs,f=a.id,p;u.splice(s.indexOf(u,d),1);var x=u.length;for(p=0;p<x;p++){var m=h[f(d,u[p])];m&&(m[2]-=1)}},n._createActivePairsList=function(c){var u,d=c.pairs,h=s.keys(d),f=h.length,p=[],x;for(x=0;x<f;x++)u=d[h[x]],u[2]>0?p.push(u):delete d[h[x]];return p}})()}),(function(t,r,i){var n={};t.exports=n;var a=i(3),s=i(7),l=i(14),c=i(5),u=i(13),d=i(10),h=i(6),f=i(0),p=i(1);(function(){n.create=function(x,m){var g=(x?x.mouse:null)||(m?m.mouse:null);g||(x&&x.render&&x.render.canvas?g=l.create(x.render.canvas):m&&m.element?g=l.create(m.element):(g=l.create(),f.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var M=d.create({label:"Mouse Constraint",pointA:g.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),T={type:"mouseConstraint",mouse:g,element:null,body:null,constraint:M,collisionFilter:{category:1,mask:4294967295,group:0}},A=f.extend(T,m);return c.on(x,"beforeUpdate",function(){var v=h.allBodies(x.world);n.update(A,v),n._triggerEvents(A)}),A},n.update=function(x,m){var g=x.mouse,M=x.constraint,T=x.body;if(g.button===0){if(M.bodyB)s.set(M.bodyB,!1),M.pointA=g.position;else for(var A=0;A<m.length;A++)if(T=m[A],p.contains(T.bounds,g.position)&&u.canCollide(T.collisionFilter,x.collisionFilter))for(var v=T.parts.length>1?1:0;v<T.parts.length;v++){var y=T.parts[v];if(a.contains(y.vertices,g.position)){M.pointA=g.position,M.bodyB=x.body=T,M.pointB={x:g.position.x-T.position.x,y:g.position.y-T.position.y},M.angleB=T.angle,s.set(T,!1),c.trigger(x,"startdrag",{mouse:g,body:T});break}}}else M.bodyB=x.body=null,M.pointB=null,T&&c.trigger(x,"enddrag",{mouse:g,body:T})},n._triggerEvents=function(x){var m=x.mouse,g=m.sourceEvents;g.mousemove&&c.trigger(x,"mousemove",{mouse:m}),g.mousedown&&c.trigger(x,"mousedown",{mouse:m}),g.mouseup&&c.trigger(x,"mouseup",{mouse:m}),l.clearSourceEvents(m)}})()}),(function(t,r,i){var n={};t.exports=n;var a=i(2),s=i(8),l=i(1),c=i(12),u=i(3);(function(){n.collides=function(d,h){for(var f=[],p=h.length,x=d.bounds,m=s.collides,g=l.overlaps,M=0;M<p;M++){var T=h[M],A=T.parts.length,v=A===1?0:1;if(g(T.bounds,x))for(var y=v;y<A;y++){var b=T.parts[y];if(g(b.bounds,x)){var E=m(b,d);if(E){f.push(E);break}}}}return f},n.ray=function(d,h,f,p){p=p||1e-100;for(var x=a.angle(h,f),m=a.magnitude(a.sub(h,f)),g=(f.x+h.x)*.5,M=(f.y+h.y)*.5,T=c.rectangle(g,M,m,p,{angle:x}),A=n.collides(T,d),v=0;v<A.length;v+=1){var y=A[v];y.body=y.bodyB=y.bodyA}return A},n.region=function(d,h,f){for(var p=[],x=0;x<d.length;x++){var m=d[x],g=l.overlaps(m.bounds,h);(g&&!f||!g&&f)&&p.push(m)}return p},n.point=function(d,h){for(var f=[],p=0;p<d.length;p++){var x=d[p];if(l.contains(x.bounds,h))for(var m=x.parts.length===1?0:1;m<x.parts.length;m++){var g=x.parts[m];if(l.contains(g.bounds,h)&&u.contains(g.vertices,h)){f.push(x);break}}}return f}})()}),(function(t,r,i){var n={};t.exports=n;var a=i(4),s=i(0),l=i(6),c=i(1),u=i(5),d=i(2),h=i(14);(function(){var f,p;typeof window<"u"&&(f=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(v){window.setTimeout(function(){v(s.now())},1e3/60)},p=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),n._goodFps=30,n._goodDelta=1e3/60,n.create=function(v){var y={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],engineUpdatesHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",wireframeStrokeStyle:"#bbb",hasBounds:!!v.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},b=s.extend(y,v);return b.canvas&&(b.canvas.width=b.options.width||b.canvas.width,b.canvas.height=b.options.height||b.canvas.height),b.mouse=v.mouse,b.engine=v.engine,b.canvas=b.canvas||g(b.options.width,b.options.height),b.context=b.canvas.getContext("2d"),b.textures={},b.bounds=b.bounds||{min:{x:0,y:0},max:{x:b.canvas.width,y:b.canvas.height}},b.controller=n,b.options.showBroadphase=!1,b.options.pixelRatio!==1&&n.setPixelRatio(b,b.options.pixelRatio),s.isElement(b.element)&&b.element.appendChild(b.canvas),b},n.run=function(v){(function y(b){v.frameRequestId=f(y),x(v,b),n.world(v,b),v.context.setTransform(v.options.pixelRatio,0,0,v.options.pixelRatio,0,0),(v.options.showStats||v.options.showDebug)&&n.stats(v,v.context,b),(v.options.showPerformance||v.options.showDebug)&&n.performance(v,v.context,b),v.context.setTransform(1,0,0,1,0,0)})()},n.stop=function(v){p(v.frameRequestId)},n.setPixelRatio=function(v,y){var b=v.options,E=v.canvas;y==="auto"&&(y=M(E)),b.pixelRatio=y,E.setAttribute("data-pixel-ratio",y),E.width=b.width*y,E.height=b.height*y,E.style.width=b.width+"px",E.style.height=b.height+"px"},n.setSize=function(v,y,b){v.options.width=y,v.options.height=b,v.bounds.max.x=v.bounds.min.x+y,v.bounds.max.y=v.bounds.min.y+b,v.options.pixelRatio!==1?n.setPixelRatio(v,v.options.pixelRatio):(v.canvas.width=y,v.canvas.height=b)},n.lookAt=function(v,y,b,E){E=typeof E<"u"?E:!0,y=s.isArray(y)?y:[y],b=b||{x:0,y:0};for(var S={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},_=0;_<y.length;_+=1){var C=y[_],w=C.bounds?C.bounds.min:C.min||C.position||C,P=C.bounds?C.bounds.max:C.max||C.position||C;w&&P&&(w.x<S.min.x&&(S.min.x=w.x),P.x>S.max.x&&(S.max.x=P.x),w.y<S.min.y&&(S.min.y=w.y),P.y>S.max.y&&(S.max.y=P.y))}var L=S.max.x-S.min.x+2*b.x,I=S.max.y-S.min.y+2*b.y,O=v.canvas.height,V=v.canvas.width,H=V/O,W=L/I,X=1,N=1;W>H?N=W/H:X=H/W,v.options.hasBounds=!0,v.bounds.min.x=S.min.x,v.bounds.max.x=S.min.x+L*X,v.bounds.min.y=S.min.y,v.bounds.max.y=S.min.y+I*N,E&&(v.bounds.min.x+=L*.5-L*X*.5,v.bounds.max.x+=L*.5-L*X*.5,v.bounds.min.y+=I*.5-I*N*.5,v.bounds.max.y+=I*.5-I*N*.5),v.bounds.min.x-=b.x,v.bounds.max.x-=b.x,v.bounds.min.y-=b.y,v.bounds.max.y-=b.y,v.mouse&&(h.setScale(v.mouse,{x:(v.bounds.max.x-v.bounds.min.x)/v.canvas.width,y:(v.bounds.max.y-v.bounds.min.y)/v.canvas.height}),h.setOffset(v.mouse,v.bounds.min))},n.startViewTransform=function(v){var y=v.bounds.max.x-v.bounds.min.x,b=v.bounds.max.y-v.bounds.min.y,E=y/v.options.width,S=b/v.options.height;v.context.setTransform(v.options.pixelRatio/E,0,0,v.options.pixelRatio/S,0,0),v.context.translate(-v.bounds.min.x,-v.bounds.min.y)},n.endViewTransform=function(v){v.context.setTransform(v.options.pixelRatio,0,0,v.options.pixelRatio,0,0)},n.world=function(v,y){var b=s.now(),E=v.engine,S=E.world,_=v.canvas,C=v.context,w=v.options,P=v.timing,L=l.allBodies(S),I=l.allConstraints(S),O=w.wireframes?w.wireframeBackground:w.background,V=[],H=[],W,X={timestamp:E.timing.timestamp};if(u.trigger(v,"beforeRender",X),v.currentBackground!==O&&A(v,O),C.globalCompositeOperation="source-in",C.fillStyle="transparent",C.fillRect(0,0,_.width,_.height),C.globalCompositeOperation="source-over",w.hasBounds){for(W=0;W<L.length;W++){var N=L[W];c.overlaps(N.bounds,v.bounds)&&V.push(N)}for(W=0;W<I.length;W++){var Y=I[W],J=Y.bodyA,ne=Y.bodyB,$=Y.pointA,B=Y.pointB;J&&($=d.add(J.position,Y.pointA)),ne&&(B=d.add(ne.position,Y.pointB)),!(!$||!B)&&(c.contains(v.bounds,$)||c.contains(v.bounds,B))&&H.push(Y)}n.startViewTransform(v),v.mouse&&(h.setScale(v.mouse,{x:(v.bounds.max.x-v.bounds.min.x)/v.options.width,y:(v.bounds.max.y-v.bounds.min.y)/v.options.height}),h.setOffset(v.mouse,v.bounds.min))}else H=I,V=L,v.options.pixelRatio!==1&&v.context.setTransform(v.options.pixelRatio,0,0,v.options.pixelRatio,0,0);!w.wireframes||E.enableSleeping&&w.showSleeping?n.bodies(v,V,C):(w.showConvexHulls&&n.bodyConvexHulls(v,V,C),n.bodyWireframes(v,V,C)),w.showBounds&&n.bodyBounds(v,V,C),(w.showAxes||w.showAngleIndicator)&&n.bodyAxes(v,V,C),w.showPositions&&n.bodyPositions(v,V,C),w.showVelocity&&n.bodyVelocity(v,V,C),w.showIds&&n.bodyIds(v,V,C),w.showSeparations&&n.separations(v,E.pairs.list,C),w.showCollisions&&n.collisions(v,E.pairs.list,C),w.showVertexNumbers&&n.vertexNumbers(v,V,C),w.showMousePosition&&n.mousePosition(v,v.mouse,C),n.constraints(H,C),w.hasBounds&&n.endViewTransform(v),u.trigger(v,"afterRender",X),P.lastElapsed=s.now()-b},n.stats=function(v,y,b){for(var E=v.engine,S=E.world,_=l.allBodies(S),C=0,w=55,P=44,L=0,I=0,O=0;O<_.length;O+=1)C+=_[O].parts.length;var V={Part:C,Body:_.length,Cons:l.allConstraints(S).length,Comp:l.allComposites(S).length,Pair:E.pairs.list.length};y.fillStyle="#0e0f19",y.fillRect(L,I,w*5.5,P),y.font="12px Arial",y.textBaseline="top",y.textAlign="right";for(var H in V){var W=V[H];y.fillStyle="#aaa",y.fillText(H,L+w,I+8),y.fillStyle="#eee",y.fillText(W,L+w,I+26),L+=w}},n.performance=function(v,y){var b=v.engine,E=v.timing,S=E.deltaHistory,_=E.elapsedHistory,C=E.timestampElapsedHistory,w=E.engineDeltaHistory,P=E.engineUpdatesHistory,L=E.engineElapsedHistory,I=b.timing.lastUpdatesPerFrame,O=b.timing.lastDelta,V=m(S),H=m(_),W=m(w),X=m(P),N=m(L),Y=m(C),J=Y/V||0,ne=Math.round(V/O),$=1e3/V||0,B=4,G=12,K=60,me=34,he=10,ce=69;y.fillStyle="#0e0f19",y.fillRect(0,50,G*5+K*6+22,me),n.status(y,he,ce,K,B,S.length,Math.round($)+" fps",$/n._goodFps,function(ue){return S[ue]/V-1}),n.status(y,he+G+K,ce,K,B,w.length,O.toFixed(2)+" dt",n._goodDelta/O,function(ue){return w[ue]/W-1}),n.status(y,he+(G+K)*2,ce,K,B,P.length,I+" upf",Math.pow(s.clamp(X/ne||1,0,1),4),function(ue){return P[ue]/X-1}),n.status(y,he+(G+K)*3,ce,K,B,L.length,N.toFixed(2)+" ut",1-I*N/n._goodFps,function(ue){return L[ue]/N-1}),n.status(y,he+(G+K)*4,ce,K,B,_.length,H.toFixed(2)+" rt",1-H/n._goodFps,function(ue){return _[ue]/H-1}),n.status(y,he+(G+K)*5,ce,K,B,C.length,J.toFixed(2)+" x",J*J*J,function(ue){return(C[ue]/S[ue]/J||0)-1})},n.status=function(v,y,b,E,S,_,C,w,P){v.strokeStyle="#888",v.fillStyle="#444",v.lineWidth=1,v.fillRect(y,b+7,E,1),v.beginPath(),v.moveTo(y,b+7-S*s.clamp(.4*P(0),-2,2));for(var L=0;L<E;L+=1)v.lineTo(y+L,b+7-(L<_?S*s.clamp(.4*P(L),-2,2):0));v.stroke(),v.fillStyle="hsl("+s.clamp(25+95*w,0,120)+",100%,60%)",v.fillRect(y,b-7,4,4),v.font="12px Arial",v.textBaseline="middle",v.textAlign="right",v.fillStyle="#eee",v.fillText(C,y+E,b-5)},n.constraints=function(v,y){for(var b=y,E=0;E<v.length;E++){var S=v[E];if(!(!S.render.visible||!S.pointA||!S.pointB)){var _=S.bodyA,C=S.bodyB,w,P;if(_?w=d.add(_.position,S.pointA):w=S.pointA,S.render.type==="pin")b.beginPath(),b.arc(w.x,w.y,3,0,2*Math.PI),b.closePath();else{if(C?P=d.add(C.position,S.pointB):P=S.pointB,b.beginPath(),b.moveTo(w.x,w.y),S.render.type==="spring")for(var L=d.sub(P,w),I=d.perp(d.normalise(L)),O=Math.ceil(s.clamp(S.length/5,12,20)),V,H=1;H<O;H+=1)V=H%2===0?1:-1,b.lineTo(w.x+L.x*(H/O)+I.x*V*4,w.y+L.y*(H/O)+I.y*V*4);b.lineTo(P.x,P.y)}S.render.lineWidth&&(b.lineWidth=S.render.lineWidth,b.strokeStyle=S.render.strokeStyle,b.stroke()),S.render.anchors&&(b.fillStyle=S.render.strokeStyle,b.beginPath(),b.arc(w.x,w.y,3,0,2*Math.PI),b.arc(P.x,P.y,3,0,2*Math.PI),b.closePath(),b.fill())}}},n.bodies=function(v,y,b){var E=b;v.engine;var S=v.options,_=S.showInternalEdges||!S.wireframes,C,w,P,L;for(P=0;P<y.length;P++)if(C=y[P],!!C.render.visible){for(L=C.parts.length>1?1:0;L<C.parts.length;L++)if(w=C.parts[L],!!w.render.visible){if(S.showSleeping&&C.isSleeping?E.globalAlpha=.5*w.render.opacity:w.render.opacity!==1&&(E.globalAlpha=w.render.opacity),w.render.sprite&&w.render.sprite.texture&&!S.wireframes){var I=w.render.sprite,O=T(v,I.texture);E.translate(w.position.x,w.position.y),E.rotate(w.angle),E.drawImage(O,O.width*-I.xOffset*I.xScale,O.height*-I.yOffset*I.yScale,O.width*I.xScale,O.height*I.yScale),E.rotate(-w.angle),E.translate(-w.position.x,-w.position.y)}else{if(w.circleRadius)E.beginPath(),E.arc(w.position.x,w.position.y,w.circleRadius,0,2*Math.PI);else{E.beginPath(),E.moveTo(w.vertices[0].x,w.vertices[0].y);for(var V=1;V<w.vertices.length;V++)!w.vertices[V-1].isInternal||_?E.lineTo(w.vertices[V].x,w.vertices[V].y):E.moveTo(w.vertices[V].x,w.vertices[V].y),w.vertices[V].isInternal&&!_&&E.moveTo(w.vertices[(V+1)%w.vertices.length].x,w.vertices[(V+1)%w.vertices.length].y);E.lineTo(w.vertices[0].x,w.vertices[0].y),E.closePath()}S.wireframes?(E.lineWidth=1,E.strokeStyle=v.options.wireframeStrokeStyle,E.stroke()):(E.fillStyle=w.render.fillStyle,w.render.lineWidth&&(E.lineWidth=w.render.lineWidth,E.strokeStyle=w.render.strokeStyle,E.stroke()),E.fill())}E.globalAlpha=1}}},n.bodyWireframes=function(v,y,b){var E=b,S=v.options.showInternalEdges,_,C,w,P,L;for(E.beginPath(),w=0;w<y.length;w++)if(_=y[w],!!_.render.visible)for(L=_.parts.length>1?1:0;L<_.parts.length;L++){for(C=_.parts[L],E.moveTo(C.vertices[0].x,C.vertices[0].y),P=1;P<C.vertices.length;P++)!C.vertices[P-1].isInternal||S?E.lineTo(C.vertices[P].x,C.vertices[P].y):E.moveTo(C.vertices[P].x,C.vertices[P].y),C.vertices[P].isInternal&&!S&&E.moveTo(C.vertices[(P+1)%C.vertices.length].x,C.vertices[(P+1)%C.vertices.length].y);E.lineTo(C.vertices[0].x,C.vertices[0].y)}E.lineWidth=1,E.strokeStyle=v.options.wireframeStrokeStyle,E.stroke()},n.bodyConvexHulls=function(v,y,b){var E=b,S,_,C;for(E.beginPath(),_=0;_<y.length;_++)if(S=y[_],!(!S.render.visible||S.parts.length===1)){for(E.moveTo(S.vertices[0].x,S.vertices[0].y),C=1;C<S.vertices.length;C++)E.lineTo(S.vertices[C].x,S.vertices[C].y);E.lineTo(S.vertices[0].x,S.vertices[0].y)}E.lineWidth=1,E.strokeStyle="rgba(255,255,255,0.2)",E.stroke()},n.vertexNumbers=function(v,y,b){var E=b,S,_,C;for(S=0;S<y.length;S++){var w=y[S].parts;for(C=w.length>1?1:0;C<w.length;C++){var P=w[C];for(_=0;_<P.vertices.length;_++)E.fillStyle="rgba(255,255,255,0.2)",E.fillText(S+"_"+_,P.position.x+(P.vertices[_].x-P.position.x)*.8,P.position.y+(P.vertices[_].y-P.position.y)*.8)}}},n.mousePosition=function(v,y,b){var E=b;E.fillStyle="rgba(255,255,255,0.8)",E.fillText(y.position.x+"  "+y.position.y,y.position.x+5,y.position.y-5)},n.bodyBounds=function(v,y,b){var E=b;v.engine;var S=v.options;E.beginPath();for(var _=0;_<y.length;_++){var C=y[_];if(C.render.visible)for(var w=y[_].parts,P=w.length>1?1:0;P<w.length;P++){var L=w[P];E.rect(L.bounds.min.x,L.bounds.min.y,L.bounds.max.x-L.bounds.min.x,L.bounds.max.y-L.bounds.min.y)}}S.wireframes?E.strokeStyle="rgba(255,255,255,0.08)":E.strokeStyle="rgba(0,0,0,0.1)",E.lineWidth=1,E.stroke()},n.bodyAxes=function(v,y,b){var E=b;v.engine;var S=v.options,_,C,w,P;for(E.beginPath(),C=0;C<y.length;C++){var L=y[C],I=L.parts;if(L.render.visible)if(S.showAxes)for(w=I.length>1?1:0;w<I.length;w++)for(_=I[w],P=0;P<_.axes.length;P++){var O=_.axes[P];E.moveTo(_.position.x,_.position.y),E.lineTo(_.position.x+O.x*20,_.position.y+O.y*20)}else for(w=I.length>1?1:0;w<I.length;w++)for(_=I[w],P=0;P<_.axes.length;P++)E.moveTo(_.position.x,_.position.y),E.lineTo((_.vertices[0].x+_.vertices[_.vertices.length-1].x)/2,(_.vertices[0].y+_.vertices[_.vertices.length-1].y)/2)}S.wireframes?(E.strokeStyle="indianred",E.lineWidth=1):(E.strokeStyle="rgba(255, 255, 255, 0.4)",E.globalCompositeOperation="overlay",E.lineWidth=2),E.stroke(),E.globalCompositeOperation="source-over"},n.bodyPositions=function(v,y,b){var E=b;v.engine;var S=v.options,_,C,w,P;for(E.beginPath(),w=0;w<y.length;w++)if(_=y[w],!!_.render.visible)for(P=0;P<_.parts.length;P++)C=_.parts[P],E.arc(C.position.x,C.position.y,3,0,2*Math.PI,!1),E.closePath();for(S.wireframes?E.fillStyle="indianred":E.fillStyle="rgba(0,0,0,0.5)",E.fill(),E.beginPath(),w=0;w<y.length;w++)_=y[w],_.render.visible&&(E.arc(_.positionPrev.x,_.positionPrev.y,2,0,2*Math.PI,!1),E.closePath());E.fillStyle="rgba(255,165,0,0.8)",E.fill()},n.bodyVelocity=function(v,y,b){var E=b;E.beginPath();for(var S=0;S<y.length;S++){var _=y[S];if(_.render.visible){var C=a.getVelocity(_);E.moveTo(_.position.x,_.position.y),E.lineTo(_.position.x+C.x,_.position.y+C.y)}}E.lineWidth=3,E.strokeStyle="cornflowerblue",E.stroke()},n.bodyIds=function(v,y,b){var E=b,S,_;for(S=0;S<y.length;S++)if(y[S].render.visible){var C=y[S].parts;for(_=C.length>1?1:0;_<C.length;_++){var w=C[_];E.font="12px Arial",E.fillStyle="rgba(255,255,255,0.5)",E.fillText(w.id,w.position.x+10,w.position.y-10)}}},n.collisions=function(v,y,b){var E=b,S=v.options,_,C,w,P;for(E.beginPath(),w=0;w<y.length;w++)if(_=y[w],!!_.isActive)for(C=_.collision,P=0;P<_.contactCount;P++){var L=_.contacts[P],I=L.vertex;E.rect(I.x-1.5,I.y-1.5,3.5,3.5)}for(S.wireframes?E.fillStyle="rgba(255,255,255,0.7)":E.fillStyle="orange",E.fill(),E.beginPath(),w=0;w<y.length;w++)if(_=y[w],!!_.isActive&&(C=_.collision,_.contactCount>0)){var O=_.contacts[0].vertex.x,V=_.contacts[0].vertex.y;_.contactCount===2&&(O=(_.contacts[0].vertex.x+_.contacts[1].vertex.x)/2,V=(_.contacts[0].vertex.y+_.contacts[1].vertex.y)/2),C.bodyB===C.supports[0].body||C.bodyA.isStatic===!0?E.moveTo(O-C.normal.x*8,V-C.normal.y*8):E.moveTo(O+C.normal.x*8,V+C.normal.y*8),E.lineTo(O,V)}S.wireframes?E.strokeStyle="rgba(255,165,0,0.7)":E.strokeStyle="orange",E.lineWidth=1,E.stroke()},n.separations=function(v,y,b){var E=b,S=v.options,_,C,w,P,L;for(E.beginPath(),L=0;L<y.length;L++)if(_=y[L],!!_.isActive){C=_.collision,w=C.bodyA,P=C.bodyB;var I=1;!P.isStatic&&!w.isStatic&&(I=.5),P.isStatic&&(I=0),E.moveTo(P.position.x,P.position.y),E.lineTo(P.position.x-C.penetration.x*I,P.position.y-C.penetration.y*I),I=1,!P.isStatic&&!w.isStatic&&(I=.5),w.isStatic&&(I=0),E.moveTo(w.position.x,w.position.y),E.lineTo(w.position.x+C.penetration.x*I,w.position.y+C.penetration.y*I)}S.wireframes?E.strokeStyle="rgba(255,165,0,0.5)":E.strokeStyle="orange",E.stroke()},n.inspector=function(v,y){v.engine;var b=v.selected,E=v.render,S=E.options,_;if(S.hasBounds){var C=E.bounds.max.x-E.bounds.min.x,w=E.bounds.max.y-E.bounds.min.y,P=C/E.options.width,L=w/E.options.height;y.scale(1/P,1/L),y.translate(-E.bounds.min.x,-E.bounds.min.y)}for(var I=0;I<b.length;I++){var O=b[I].data;switch(y.translate(.5,.5),y.lineWidth=1,y.strokeStyle="rgba(255,165,0,0.9)",y.setLineDash([1,2]),O.type){case"body":_=O.bounds,y.beginPath(),y.rect(Math.floor(_.min.x-3),Math.floor(_.min.y-3),Math.floor(_.max.x-_.min.x+6),Math.floor(_.max.y-_.min.y+6)),y.closePath(),y.stroke();break;case"constraint":var V=O.pointA;O.bodyA&&(V=O.pointB),y.beginPath(),y.arc(V.x,V.y,10,0,2*Math.PI),y.closePath(),y.stroke();break}y.setLineDash([]),y.translate(-.5,-.5)}v.selectStart!==null&&(y.translate(.5,.5),y.lineWidth=1,y.strokeStyle="rgba(255,165,0,0.6)",y.fillStyle="rgba(255,165,0,0.1)",_=v.selectBounds,y.beginPath(),y.rect(Math.floor(_.min.x),Math.floor(_.min.y),Math.floor(_.max.x-_.min.x),Math.floor(_.max.y-_.min.y)),y.closePath(),y.stroke(),y.fill(),y.translate(-.5,-.5)),S.hasBounds&&y.setTransform(1,0,0,1,0,0)};var x=function(v,y){var b=v.engine,E=v.timing,S=E.historySize,_=b.timing.timestamp;E.delta=y-E.lastTime||n._goodDelta,E.lastTime=y,E.timestampElapsed=_-E.lastTimestamp||0,E.lastTimestamp=_,E.deltaHistory.unshift(E.delta),E.deltaHistory.length=Math.min(E.deltaHistory.length,S),E.engineDeltaHistory.unshift(b.timing.lastDelta),E.engineDeltaHistory.length=Math.min(E.engineDeltaHistory.length,S),E.timestampElapsedHistory.unshift(E.timestampElapsed),E.timestampElapsedHistory.length=Math.min(E.timestampElapsedHistory.length,S),E.engineUpdatesHistory.unshift(b.timing.lastUpdatesPerFrame),E.engineUpdatesHistory.length=Math.min(E.engineUpdatesHistory.length,S),E.engineElapsedHistory.unshift(b.timing.lastElapsed),E.engineElapsedHistory.length=Math.min(E.engineElapsedHistory.length,S),E.elapsedHistory.unshift(E.lastElapsed),E.elapsedHistory.length=Math.min(E.elapsedHistory.length,S)},m=function(v){for(var y=0,b=0;b<v.length;b+=1)y+=v[b];return y/v.length||0},g=function(v,y){var b=document.createElement("canvas");return b.width=v,b.height=y,b.oncontextmenu=function(){return!1},b.onselectstart=function(){return!1},b},M=function(v){var y=v.getContext("2d"),b=window.devicePixelRatio||1,E=y.webkitBackingStorePixelRatio||y.mozBackingStorePixelRatio||y.msBackingStorePixelRatio||y.oBackingStorePixelRatio||y.backingStorePixelRatio||1;return b/E},T=function(v,y){var b=v.textures[y];return b||(b=v.textures[y]=new Image,b.src=y,b)},A=function(v,y){var b=y;/(jpg|gif|png)$/.test(y)&&(b="url("+y+")"),v.canvas.style.background=b,v.canvas.style.backgroundSize="contain",v.currentBackground=y}})()}),(function(t,r,i){var n={};t.exports=n;var a=i(5),s=i(17),l=i(0);(function(){n._maxFrameDelta=1e3/15,n._frameDeltaFallback=1e3/60,n._timeBufferMargin=1.5,n._elapsedNextEstimate=1,n._smoothingLowerBound=.1,n._smoothingUpperBound=.9,n.create=function(u){var d={delta:16.666666666666668,frameDelta:null,frameDeltaSmoothing:!0,frameDeltaSnapping:!0,frameDeltaHistory:[],frameDeltaHistorySize:100,frameRequestId:null,timeBuffer:0,timeLastTick:null,maxUpdates:null,maxFrameTime:33.333333333333336,lastUpdatesDeferred:0,enabled:!0},h=l.extend(d,u);return h.fps=0,h},n.run=function(u,d){return u.timeBuffer=n._frameDeltaFallback,(function h(f){u.frameRequestId=n._onNextFrame(u,h),f&&u.enabled&&n.tick(u,d,f)})(),u},n.tick=function(u,d,h){var f=l.now(),p=u.delta,x=0,m=h-u.timeLastTick;if((!m||!u.timeLastTick||m>Math.max(n._maxFrameDelta,u.maxFrameTime))&&(m=u.frameDelta||n._frameDeltaFallback),u.frameDeltaSmoothing){u.frameDeltaHistory.push(m),u.frameDeltaHistory=u.frameDeltaHistory.slice(-u.frameDeltaHistorySize);var g=u.frameDeltaHistory.slice(0).sort(),M=u.frameDeltaHistory.slice(g.length*n._smoothingLowerBound,g.length*n._smoothingUpperBound),T=c(M);m=T||m}u.frameDeltaSnapping&&(m=1e3/Math.round(1e3/m)),u.frameDelta=m,u.timeLastTick=h,u.timeBuffer+=u.frameDelta,u.timeBuffer=l.clamp(u.timeBuffer,0,u.frameDelta+p*n._timeBufferMargin),u.lastUpdatesDeferred=0;var A=u.maxUpdates||Math.ceil(u.maxFrameTime/p),v={timestamp:d.timing.timestamp};a.trigger(u,"beforeTick",v),a.trigger(u,"tick",v);for(var y=l.now();p>0&&u.timeBuffer>=p*n._timeBufferMargin;){a.trigger(u,"beforeUpdate",v),s.update(d,p),a.trigger(u,"afterUpdate",v),u.timeBuffer-=p,x+=1;var b=l.now()-f,E=l.now()-y,S=b+n._elapsedNextEstimate*E/x;if(x>=A||S>u.maxFrameTime){u.lastUpdatesDeferred=Math.round(Math.max(0,u.timeBuffer/p-n._timeBufferMargin));break}}d.timing.lastUpdatesPerFrame=x,a.trigger(u,"afterTick",v),u.frameDeltaHistory.length>=100&&(u.lastUpdatesDeferred&&Math.round(u.frameDelta/p)>A?l.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs."):u.lastUpdatesDeferred&&l.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs."),typeof u.isFixed<"u"&&l.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs."),(u.deltaMin||u.deltaMax)&&l.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."),u.fps!==0&&l.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs."))},n.stop=function(u){n._cancelNextFrame(u)},n._onNextFrame=function(u,d){if(typeof window<"u"&&window.requestAnimationFrame)u.frameRequestId=window.requestAnimationFrame(d);else throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");return u.frameRequestId},n._cancelNextFrame=function(u){if(typeof window<"u"&&window.cancelAnimationFrame)window.cancelAnimationFrame(u.frameRequestId);else throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.")};var c=function(u){for(var d=0,h=u.length,f=0;f<h;f+=1)d+=u[f];return d/h||0}})()}),(function(t,r,i){var n={};t.exports=n;var a=i(8),s=i(0),l=s.deprecated;(function(){n.collides=function(c,u){return a.collides(c,u)},l(n,"collides","SAT.collides ➤ replaced by Collision.collides")})()}),(function(t,r,i){var n={};t.exports=n,i(1);var a=i(0);(function(){n.pathToVertices=function(s,l){typeof window<"u"&&!("SVGPathSeg"in window)&&a.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var c,u,d,h,f,p,x,m,g,M,T=[],A,v,y=0,b=0,E=0;l=l||15;var S=function(C,w,P){var L=P%2===1&&P>1;if(!g||C!=g.x||w!=g.y){g&&L?(A=g.x,v=g.y):(A=0,v=0);var I={x:A+C,y:v+w};(L||!g)&&(g=I),T.push(I),b=A+C,E=v+w}},_=function(C){var w=C.pathSegTypeAsLetter.toUpperCase();if(w!=="Z"){switch(w){case"M":case"L":case"T":case"C":case"S":case"Q":b=C.x,E=C.y;break;case"H":b=C.x;break;case"V":E=C.y;break}S(b,E,C.pathSegType)}};for(n._svgPathToAbsolute(s),d=s.getTotalLength(),p=[],c=0;c<s.pathSegList.numberOfItems;c+=1)p.push(s.pathSegList.getItem(c));for(x=p.concat();y<d;){if(M=s.getPathSegAtLength(y),f=p[M],f!=m){for(;x.length&&x[0]!=f;)_(x.shift());m=f}switch(f.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":h=s.getPointAtLength(y),S(h.x,h.y,0);break}y+=l}for(c=0,u=x.length;c<u;++c)_(x[c]);return T},n._svgPathToAbsolute=function(s){for(var l,c,u,d,h,f,p=s.pathSegList,x=0,m=0,g=p.numberOfItems,M=0;M<g;++M){var T=p.getItem(M),A=T.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(A))"x"in T&&(x=T.x),"y"in T&&(m=T.y);else switch("x1"in T&&(u=x+T.x1),"x2"in T&&(h=x+T.x2),"y1"in T&&(d=m+T.y1),"y2"in T&&(f=m+T.y2),"x"in T&&(x+=T.x),"y"in T&&(m+=T.y),A){case"m":p.replaceItem(s.createSVGPathSegMovetoAbs(x,m),M);break;case"l":p.replaceItem(s.createSVGPathSegLinetoAbs(x,m),M);break;case"h":p.replaceItem(s.createSVGPathSegLinetoHorizontalAbs(x),M);break;case"v":p.replaceItem(s.createSVGPathSegLinetoVerticalAbs(m),M);break;case"c":p.replaceItem(s.createSVGPathSegCurvetoCubicAbs(x,m,u,d,h,f),M);break;case"s":p.replaceItem(s.createSVGPathSegCurvetoCubicSmoothAbs(x,m,h,f),M);break;case"q":p.replaceItem(s.createSVGPathSegCurvetoQuadraticAbs(x,m,u,d),M);break;case"t":p.replaceItem(s.createSVGPathSegCurvetoQuadraticSmoothAbs(x,m),M);break;case"a":p.replaceItem(s.createSVGPathSegArcAbs(x,m,T.r1,T.r2,T.angle,T.largeArcFlag,T.sweepFlag),M);break;case"z":case"Z":x=l,m=c;break}(A=="M"||A=="m")&&(l=x,c=m)}}})()}),(function(t,r,i){var n={};t.exports=n;var a=i(6);i(0),(function(){n.create=a.create,n.add=a.add,n.remove=a.remove,n.clear=a.clear,n.addComposite=a.addComposite,n.addBody=a.addBody,n.addConstraint=a.addConstraint})()})])})})(ea)),ea.exports}var Vm=zm();const qt=km(Vm);class Hm extends ca{circles;walls;engine;palettes=[[[.067,1,.74],[0,1,.63],[.333,.15,.49],[0,0,.05]],[[.167,.35,.87],[.025,.7,.45],[.425,.28,.58],[0,0,.1]],[[.1,1,.5],[.5,.7,.81],[0,1,.5],[.667,.6,.05]],[[.144,.75,.79],[0,1,.68],[.506,.25,.5],[.311,.6,.82]],[[.022,1,.5],[.5,1,.25],[.544,1,.33],[.625,.6,.02]]];paletteIndex=0;constructor(e,t,r){super(e,t,r),this.circles=[],this.walls=[],this.createScene(),document.querySelector("canvas")?.addEventListener("click",()=>{this.changeColors()})}reset(){this.dispose(),this.circles=[],this.walls=[],this.createScene()}createScene(){this.engine=qt.Engine.create({gravity:{x:0,y:0,scale:0}}),this.scene.clear(),this.sceneOverlay.clear();const e=[new ri(10,32),new ri(17,32),new ri(21,32),new ri(25,32)],t=[new En({color:new Je().setHSL(this.palettes[this.paletteIndex][0][0],this.palettes[this.paletteIndex][0][1],this.palettes[this.paletteIndex][0][2])}),new En({color:new Je().setHSL(this.palettes[this.paletteIndex][1][0],this.palettes[this.paletteIndex][1][1],this.palettes[this.paletteIndex][1][2])}),new En({color:new Je().setHSL(this.palettes[this.paletteIndex][2][0],this.palettes[this.paletteIndex][2][1],this.palettes[this.paletteIndex][2][2])}),new En({color:new Je().setHSL(this.palettes[this.paletteIndex][3][0],this.palettes[this.paletteIndex][3][1],this.palettes[this.paletteIndex][3][2])})];for(let n=0;n<65;n++){const a=e[Math.floor(Math.random()*e.length)],s=t[Math.floor(n%t.length)],l=new At(a,s);this.scene.add(l);const c=new At(a,s);this.sceneOverlay.add(c);const h=qt.Bodies.circle(0,0,a.parameters.radius,{restitution:1,frictionAir:.025});qt.Composite.add(this.engine.world,h),this.circles.push({body:h,mesh:l,meshOverlay:c})}const r=10,i={isStatic:!0,restitution:.8};this.walls.push(qt.Bodies.rectangle(0,this.height/2+r/2,this.width+r,r,i)),this.walls.push(qt.Bodies.rectangle(0,-this.height/2-r/2,this.width+r,r,i)),this.walls.push(qt.Bodies.rectangle(-this.width/2-r/2,0,r,this.height+r,i)),this.walls.push(qt.Bodies.rectangle(this.width/2+r/2,0,r,this.height+r,i)),qt.Composite.add(this.engine.world,this.walls)}update(e,t){qt.Engine.update(this.engine,Math.min(e,1/60*1e3));for(let r=0;r<this.circles.length;r++){let{body:i,mesh:n,meshOverlay:a}=this.circles[r];(i.position.x<-this.width/2||i.position.x>this.width/2||i.position.y<-this.height/2||i.position.y>this.height/2)&&qt.Body.setPosition(i,{x:0,y:0}),n.position.set(i.position.x,i.position.y,0),n.rotation.set(0,0,i.angle),a.position.set(i.position.x*this.scaleOverlay,i.position.y*this.scaleOverlay,0),a.scale.set(this.scaleOverlay,this.scaleOverlay,1),a.rotation.set(0,0,i.angle),i.speed<.5&&i.speed!=0&&qt.Body.setSpeed(i,.5)}this.changeSpeed(70,1,t)}changeColors(){this.paletteIndex=(this.paletteIndex+1)%this.palettes.length;for(let e=0;e<4;e++)this.circles[e].mesh.material.color.setHSL(this.palettes[this.paletteIndex][e][0],this.palettes[this.paletteIndex][e][1],this.palettes[this.paletteIndex][e][2])}changeSpeed(e,t,r){for(let i=0;i<this.circles.length;i++){let{body:n}=this.circles[i],a,s;if(r){const l=n.position.x-r.x,c=n.position.y-r.y;a=Math.atan2(c,l),s=Math.hypot(l,c)}else s=0,a=Math.random()*Math.PI*2;s<e&&qt.Body.setVelocity(n,{x:n.velocity.x+t*Math.cos(a),y:n.velocity.y+t*Math.sin(a)})}}dispose(){for(const e of this.circles)e.mesh.geometry.dispose(),e.mesh.material.dispose()}}class Wm extends ca{circles;videoTexture;material;materialOverlay;constructor(e,t,r){super(e,t,r),this.circles=[],this.videoTexture=null,this.createScene()}reset(){this.dispose(),this.circles=[],this.createScene()}createScene(){this.scene.clear(),this.sceneOverlay.clear();const e=10;this.material=this.createShaderMaterial(),this.material.uniforms.resolution.value=[this.width,this.height],this.materialOverlay=this.createShaderMaterial(),this.materialOverlay.uniforms.resolution.value=[this.widthOverlay,this.heightOverlay];const t=new ri(10,16);for(let r=0;r<e;r++)for(let i=0;i<e;i++){const n=new At(t,this.material),a=this.width/e*(i+.5)-this.width/2,s=this.height/e*(r+.5)-this.height/2;n.position.set(a,s,0),this.scene.add(n);const l=new At(t,this.materialOverlay);l.position.set(a*this.scaleOverlay,s*this.scaleOverlay,0),l.scale.set(this.scaleOverlay,this.scaleOverlay,1),this.sceneOverlay.add(l),this.circles.push({mesh:n,meshOverlay:l})}}createShaderMaterial(){return new Pt({uniforms:{resolution:{value:null},videoTexture:{value:null},time:{value:0}},glslVersion:Rn,vertexShader:`
				out vec3 vWorldPosition;
							
				void main() { 
    				vWorldPosition = (modelMatrix * vec4(position, 1.0)).rgb;
					gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
				}
			`,fragmentShader:`
				precision highp float;
				in vec3 vWorldPosition;
				uniform vec2 resolution;
				uniform sampler2D videoTexture;
				uniform float time;

				out vec4 fragColor;

				//the video gets streched a lot but who cares
				void main() {
					vec2 uv = (vWorldPosition.xy + (resolution / 2.0)) / resolution;
					fragColor = texture(videoTexture, uv);
				}
			`})}update(e){this.material.uniforms.videoTexture.value=e,this.materialOverlay.uniforms.videoTexture.value=e}dispose(){this.circles[0]?.mesh.geometry.dispose(),this.material?.dispose(),this.materialOverlay?.dispose()}}class Xm extends ca{mesh;meshOverlay;constructor(e,t,r){super(e,t,r),this.createScene()}reset(){}createScene(){this.scene.clear(),this.sceneOverlay.clear();const e=new Un(1,1),t=new En;this.mesh=new At(e,t),this.meshOverlay=new At(e,t),this.scene.add(this.mesh),this.sceneOverlay.add(this.meshOverlay)}update(e,t,r,i){t&&this.mesh.material.map===null&&(this.meshOverlay.material.needsUpdate=this.mesh.material.needsUpdate=!0),this.meshOverlay.material.map=this.mesh.material.map=t;const n=Math.min(this.width/r,this.height/i)*e,a=r*n,s=i*n;this.mesh.scale.set(a,s,1),this.meshOverlay.scale.set(a*this.scaleOverlay,s*this.scaleOverlay,1)}dispose(){}}class Ym{state;renderer;canvas;scene;camera;lrcPlayer;text;playable1;playable2;video;width;height;dpr;scaleDown;actualWidth;actualHeight;cascadeInterval;probeSpacing;cascadeCount;cascadeWidth;cascadeHeight;modelRT;seedRT;curJFA;prevJFA;rayColorRT;bilateralRT;curCascade;prevCascade;overlayRT;mouse={x:9999,y:9999};frameCount=0;lastTime;seedMaterial;jfaMaterial;rayMaterial;bilateralMaterial;radiancecascadesMaterialV2;radiancecascadesMaterialV3;displayMaterial;geometry;mesh;constructor(e){this.state=e,this.renderer=new I0({antialias:!0}),this.renderer.autoClear=!1,this.renderer.info.autoReset=!1,this.renderer.outputColorSpace=oi,this.renderer.setClearColor(8684676,0),document.body.appendChild(this.renderer.domElement),this.canvas=this.renderer.domElement,this.calculateBounds(),this.renderer.setSize(this.width,this.height,!1),this.scene=new zs,this.camera=new Ui(-1,1,1,-1,0,1),this.lrcPlayer=new Bm,this.text=new Om(this.actualWidth,this.actualHeight,this.state.settings.textScale,this.scaleDown),this.playable1=new Hm(this.actualWidth,this.actualHeight,this.scaleDown),this.playable2=new Wm(this.actualWidth,this.actualHeight,this.scaleDown),this.video=new Xm(this.actualWidth,this.actualHeight,this.scaleDown),this.initialize(),this.shaders(),this.canvas.addEventListener("mousemove",t=>{this.mouse.x=t.clientX*this.dpr/this.scaleDown,this.mouse.y=(this.canvas.clientHeight-t.clientY)*this.dpr/this.scaleDown}),this.renderer.setAnimationLoop(this.render.bind(this))}calculateBounds(){this.dpr=this.state.settings.isMobile?Math.max(window.devicePixelRatio*.75,1):window.devicePixelRatio,this.width=Math.floor(this.canvas.clientWidth*this.dpr),this.height=Math.floor(this.canvas.clientHeight*this.dpr),this.scaleDown=(this.state.settings.isMobile,2);const e=Math.floor(this.width/this.scaleDown),t=Math.floor(this.height/this.scaleDown);this.cascadeInterval=1;const r=(s,l)=>Math.ceil(Math.log(3*Math.hypot(s,l)/this.cascadeInterval+1)/Math.log(4)),i=Math.pow(2,r(e,t)-1),n=Math.ceil(e/i),a=Math.ceil(t/i);this.actualWidth=n*i,this.actualHeight=a*i,this.cascadeCount=r(this.actualWidth,this.actualHeight),this.probeSpacing=1,this.cascadeWidth=Math.floor(this.actualWidth/this.probeSpacing),this.cascadeHeight=Math.floor(this.actualHeight/this.probeSpacing)}initialize(){const e={minFilter:St,magFilter:St,type:Kt},t={minFilter:vt,magFilter:vt,type:Kt};this.modelRT=new sn(this.actualWidth,this.actualHeight,e),this.seedRT=this.modelRT.clone(),this.curJFA=this.modelRT.clone(),this.prevJFA=this.modelRT.clone(),this.rayColorRT=this.modelRT.clone(),this.bilateralRT=this.modelRT.clone(),this.curCascade=new sn(this.cascadeWidth,this.cascadeHeight,t),this.prevCascade=this.curCascade.clone(),this.overlayRT=new sn(this.actualWidth*this.scaleDown,this.actualHeight*this.scaleDown,t)}shaders(){this.seedMaterial=N0(),this.jfaMaterial=O0(),this.rayMaterial=B0();const e=new Wu().load("LDR_LLL1_0.png");e.wrapS=or,e.wrapT=or,e.minFilter=St,e.magFilter=St,this.rayMaterial.uniforms.blueNoise.value=e,this.rayMaterial.uniforms.rayCount.value=24,this.bilateralMaterial=k0(),this.bilateralMaterial.uniforms.sigma_d.value=2,this.bilateralMaterial.uniforms.sigma_r.value=.5,this.bilateralMaterial.uniforms.radius.value=2,this.radiancecascadesMaterialV2=G0(),this.radiancecascadesMaterialV3=z0(),this.displayMaterial=new En,this.geometry=new Un(2,2),this.mesh=new At(this.geometry,this.seedMaterial),this.scene.add(this.mesh)}resize(){this.calculateBounds(),this.renderer.setSize(this.width,this.height,!1),this.modelRT.setSize(this.actualWidth,this.actualHeight),this.seedRT.setSize(this.actualWidth,this.actualHeight),this.curJFA.setSize(this.actualWidth,this.actualHeight),this.prevJFA.setSize(this.actualWidth,this.actualHeight),this.rayColorRT.setSize(this.actualWidth,this.actualHeight),this.bilateralRT.setSize(this.actualWidth,this.actualHeight),this.curCascade.setSize(this.cascadeWidth,this.cascadeHeight),this.prevCascade.setSize(this.cascadeWidth,this.cascadeHeight),this.overlayRT.setSize(this.actualWidth*this.scaleDown,this.actualHeight*this.scaleDown),this.text.resize(this.actualWidth,this.actualHeight,this.scaleDown),this.playable1.resize(this.actualWidth,this.actualHeight,this.scaleDown),this.playable2.resize(this.actualWidth,this.actualHeight,this.scaleDown),this.video.resize(this.actualWidth,this.actualHeight,this.scaleDown)}changeFilter(){this.prevCascade.dispose(),this.curCascade.dispose();const e={minFilter:this.state.settings.bilinearFix?St:vt,magFilter:this.state.settings.bilinearFix?St:vt,type:Kt};this.curCascade=new sn(this.cascadeWidth,this.cascadeHeight,e),this.prevCascade=this.curCascade.clone()}render(){(Math.floor(this.canvas.clientWidth*this.dpr)!==this.width||Math.floor(this.canvas.clientHeight*this.dpr)!==this.height)&&this.resize();const e=performance.now(),t=this.lastTime?e-this.lastTime:0;if(this.lastTime=e,this.state.settings.mode==="playable1"?this.playable1.update(t,{x:this.mouse.x-this.actualWidth/2,y:this.mouse.y-this.actualHeight/2}):this.state.settings.mode==="playable2"&&this.state.video.texture?this.playable2.update(this.state.video.texture):this.state.settings.mode==="lyrics"?this.text.update(null):this.state.settings.mode==="video"&&this.video.update(this.state.video.scale,this.state.video.texture,this.state.video.width,this.state.video.height),this.state.settings.twoPassOptimization&&this.frameCount%2===0||!this.state.settings.twoPassOptimization){this.state.settings.mode==="video"?(this.renderer.setRenderTarget(this.modelRT),this.renderer.clear(),this.renderer.render(this.video.scene,this.video.camera)):this.state.settings.mode==="lyrics"?(this.renderer.setRenderTarget(this.modelRT),this.renderer.clear(),this.renderer.render(this.text.scene,this.text.camera)):this.state.settings.mode==="playable1"?(this.renderer.setRenderTarget(this.modelRT),this.renderer.clear(),this.renderer.render(this.playable1.scene,this.playable1.camera)):this.state.settings.mode==="playable2"&&(this.renderer.setRenderTarget(this.modelRT),this.renderer.clear(),this.renderer.render(this.playable2.scene,this.playable2.camera)),this.mesh.material=this.seedMaterial,this.seedMaterial.uniforms.resolution.value=[this.actualWidth,this.actualHeight],this.seedMaterial.uniforms.inputTexture.value=this.modelRT.texture,this.renderer.setRenderTarget(this.seedRT),this.renderer.clear(),this.renderer.render(this.scene,this.camera);const r=Math.ceil(Math.log2(Math.max(this.actualWidth,this.actualHeight)));this.mesh.material=this.jfaMaterial,this.jfaMaterial.uniforms.resolution.value=[this.actualWidth,this.actualHeight];for(let i=0;i<r;i++)this.jfaMaterial.uniforms.inputTexture.value=i===0?this.seedRT.texture:this.prevJFA.texture,this.jfaMaterial.uniforms.offset.value=Math.pow(2,r-i-1),this.jfaMaterial.uniforms.isLast.value=i===r-1,this.renderer.setRenderTarget(this.curJFA),this.renderer.clear(),this.renderer.render(this.scene,this.camera),[this.curJFA,this.prevJFA]=[this.prevJFA,this.curJFA]}if(this.state.settings.enableRC){this.mesh.material=this.state.settings.bilinearFix?this.radiancecascadesMaterialV3:this.radiancecascadesMaterialV2;const r=this.state.settings.bilinearFix?this.radiancecascadesMaterialV3:this.radiancecascadesMaterialV2;r.uniforms.sceneTexture.value=this.modelRT.texture,r.uniforms.distanceTexture.value=this.prevJFA.texture,r.uniforms.radianceModifier.value=this.state.settings.radiance,r.uniforms.distanceResolution.value=[this.actualWidth,this.actualHeight],r.uniforms.cascadeResolution.value=[this.cascadeWidth,this.cascadeHeight],r.uniforms.cascadeCount.value=this.cascadeCount,r.uniforms.probeSpacing.value=this.probeSpacing,r.uniforms.interval.value=this.cascadeInterval,r.uniforms.fixEdges.value=this.state.settings.fixEdges,r.uniforms.srgbFix.value=this.state.settings.srgbFix;let i=this.frameCount%2===0?this.cascadeCount-1:Math.ceil((this.cascadeCount-1)/2)-1,n=this.frameCount%2===0?Math.ceil((this.cascadeCount-1)/2):0;this.state.settings.twoPassOptimization||(i=this.cascadeCount-1,n=0);for(let a=i;a>=n;a--)r.uniforms.cascadeIndex.value=a,r.uniforms.previousCascadeTexture.value=this.prevCascade.texture,this.renderer.setRenderTarget(this.curCascade),this.renderer.clear(),this.renderer.render(this.scene,this.camera),[this.curCascade,this.prevCascade]=[this.prevCascade,this.curCascade]}else this.mesh.material=this.rayMaterial,this.rayMaterial.uniforms.sceneTexture.value=this.modelRT.texture,this.rayMaterial.uniforms.distanceTexture.value=this.prevJFA.texture,this.rayMaterial.uniforms.resolution.value=[this.actualWidth,this.actualHeight],this.rayMaterial.uniforms.time.value=performance.now(),this.rayMaterial.uniforms.radianceModifier.value=this.state.settings.radiance,this.rayMaterial.uniforms.fixEdges.value=this.state.settings.fixEdges,this.rayMaterial.uniforms.srgbFix.value=this.state.settings.srgbFix,this.renderer.setRenderTarget(this.rayColorRT),this.renderer.clear(),this.renderer.render(this.scene,this.camera);(!this.state.settings.enableRC||!this.state.settings.twoPassOptimization||this.frameCount%2===1)&&(this.mesh.material=this.bilateralMaterial,this.bilateralMaterial.uniforms.inputTexture.value=this.state.settings.enableRC?this.prevCascade.texture:this.rayColorRT.texture,this.bilateralMaterial.uniforms.resolution.value=[this.actualWidth,this.actualHeight],this.renderer.setRenderTarget(this.bilateralRT),this.renderer.clear(),this.renderer.render(this.scene,this.camera)),this.mesh.material=this.displayMaterial,this.displayMaterial.map=this.bilateralRT.texture,this.renderer.setRenderTarget(this.overlayRT),this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.state.settings.mode==="playable1"?this.renderer.render(this.playable1.sceneOverlay,this.playable1.cameraOverlay):this.state.settings.mode==="lyrics"?this.renderer.render(this.text.sceneOverlay,this.text.cameraOverlay):this.state.settings.mode==="video"?this.renderer.render(this.video.sceneOverlay,this.video.cameraOverlay):this.state.settings.mode==="playable2"&&this.renderer.render(this.playable2.sceneOverlay,this.playable2.cameraOverlay),F0(this.overlayRT.texture,this.width/this.height),this.mesh.material=this.displayMaterial,this.displayMaterial.map=this.overlayRT.texture,this.renderer.setRenderTarget(null),this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.frameCount=this.frameCount+1,this.state.stats.update(),this.renderer.info.reset()}}class qm{state;hideSettings=document.getElementById("hide-settings");settings=document.getElementById("settings");videoInput=document.getElementById("video-upload");videoName=document.getElementById("video-name");audioInput=document.getElementById("audio-upload");audioName=document.getElementById("audio-name");mode=document.getElementById("mode");playPause=document.getElementById("play-pause");videoVolume=document.getElementById("video-volume");videoVolumeValue=document.getElementById("vv-value");videoScale=document.getElementById("video-scale");videoScaleValue=document.getElementById("vs-value");textScale=document.getElementById("text-scale");textScaleValue=document.getElementById("ts-value");radianceModifier=document.getElementById("radiance-modifier");radianceModifierValue=document.getElementById("rm-value");fixEdges=document.getElementById("fix-edges");showFps=document.getElementById("show-fps");enableRC=document.getElementById("enable-rc");twoPassOptimization=document.getElementById("2-pass-optimization");bilinearFix=document.getElementById("bilinear-fix");srgbFix=document.getElementById("srgb-fix");constructor(e){this.state=e,this.state.settings.mode=this.mode.value="lyrics",this.state.settings.isMobile=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),this.state.video.scale=.5,this.videoScale.value="0.5",this.state.video.volume=this.state.audio.volume=.5,this.videoVolume.value="0.5",this.state.settings.textScale=1,this.textScale.value="1",this.state.settings.radiance=1,this.radianceModifier.value="1",this.state.settings.showFps=this.showFps.checked=!0,this.state.settings.fixEdges=this.fixEdges.checked=!0,this.state.settings.enableRC=this.enableRC.checked=(this.state.settings.isMobile,!0),this.state.settings.bilinearFix=this.bilinearFix.checked=!1,this.state.settings.srgbFix=this.srgbFix.checked=!1,this.state.settings.twoPassOptimization=this.twoPassOptimization.checked=!0,document.querySelectorAll(".rc-collapse").forEach(t=>{t.style.display=this.enableRC.checked?"flex":"none"}),this.hideSettings.addEventListener("click",()=>{const t=this.settings.classList.toggle("hidden");this.hideSettings.textContent=t?"Show Settings":"Hide Settings"}),this.videoInput.addEventListener("change",()=>this.handleVideo()),this.audioInput.addEventListener("change",()=>this.handleAudio()),this.playPause.addEventListener("click",()=>{this.mode.value==="playable2"||this.mode.value==="video"?this.state.toggleVideo(!1):this.mode.value==="lyrics"&&this.state.toggleAudio(!1)}),this.mode.addEventListener("change",()=>{this.state.settings.mode=this.mode.value,this.mode.value!=="lyrics"&&this.state.toggleAudio(!0),this.mode.value!=="video"&&this.state.toggleVideo(!0),this.mode.value==="video"?this.radianceModifier.value="2":this.radianceModifier.value="1",this.state.settings.fixEdges=this.fixEdges.checked=this.mode.value!=="video",this.fixEdges.dispatchEvent(new Event("change")),this.radianceModifier.dispatchEvent(new Event("input"))}),this.videoVolume.addEventListener("input",()=>{this.state.setMediaVolume(+this.videoVolume.value),this.updateValue(this.videoVolume,this.videoVolumeValue)}),this.videoScale.addEventListener("input",()=>{this.state.video.scale=+this.videoScale.value,this.updateValue(this.videoScale,this.videoScaleValue)}),this.radianceModifier.addEventListener("input",()=>{this.state.settings.radiance=+this.radianceModifier.value,this.updateValue(this.radianceModifier,this.radianceModifierValue,200)}),this.fixEdges.addEventListener("change",()=>{this.state.settings.fixEdges=this.fixEdges.checked}),this.showFps.addEventListener("change",()=>{this.state.settings.showFps=this.showFps.checked,this.state.stats.dom.style.display=this.showFps.checked?"flex":"none"}),this.textScale.addEventListener("input",()=>{this.state.setTextScale(+this.textScale.value),this.updateValue(this.textScale,this.textScaleValue,300)}),this.enableRC.addEventListener("change",()=>{this.state.settings.enableRC=this.enableRC.checked,document.querySelectorAll(".rc-collapse").forEach(t=>{t.style.display=this.enableRC.checked?"flex":"none"})}),this.twoPassOptimization.addEventListener("change",()=>{this.state.settings.twoPassOptimization=this.twoPassOptimization.checked}),this.bilinearFix.addEventListener("change",()=>{this.state.settings.bilinearFix=this.bilinearFix.checked,this.state.changeFilter()}),this.srgbFix.addEventListener("change",()=>{this.state.settings.srgbFix=this.srgbFix.checked})}updateValue(e,t,r=100){const i=Math.round((+e.value-+e.min)/(+e.max-+e.min)*r);t.textContent=i.toString()}handleVideo(){const e=this.videoInput.files[0],t=document.createElement("video"),r=URL.createObjectURL(e);t.src=r,this.videoName.textContent=e.name,t.addEventListener("canplay",()=>{console.log("Video loaded"),this.state.loadVideo(t)},{once:!0})}handleAudio(){if(this.state.audio.loading){console.log("cant upload while waiting response!");return}const e=this.audioInput.files[0],t=document.createElement("audio"),r=URL.createObjectURL(e),i=e.name.split("-"),n=i[0].trim(),a=i[1].trim().replace(/\.[^/.]+$/,"");t.src=r,this.audioName.textContent=e.name,t.addEventListener("canplay",()=>{console.log("Audio loaded"),this.state.loadAudio(t,n,a),this.mode.value="lyrics",this.mode.dispatchEvent(new Event("change"))},{once:!0})}}class gc{constructor(e,t,r){this.id=0,this.name=e,this.fg=t,this.bg=r,this.gradient=null,this.PR=Math.round(window.devicePixelRatio||1),this.WIDTH=90*this.PR,this.HEIGHT=48*this.PR,this.TEXT_X=3*this.PR,this.TEXT_Y=2*this.PR,this.GRAPH_X=3*this.PR,this.GRAPH_Y=15*this.PR,this.GRAPH_WIDTH=84*this.PR,this.GRAPH_HEIGHT=30*this.PR,this.canvas=document.createElement("canvas"),this.canvas.width=this.WIDTH,this.canvas.height=this.HEIGHT,this.canvas.style.width="90px",this.canvas.style.height="48px",this.canvas.style.position="absolute",this.canvas.style.cssText="width:90px;height:48px;background-color: transparent !important;",this.context=this.canvas.getContext("2d"),this.initializeCanvas()}createGradient(){if(!this.context)throw new Error("No context");const e=this.context.createLinearGradient(0,this.GRAPH_Y,0,this.GRAPH_Y+this.GRAPH_HEIGHT);let t;const r=this.fg;switch(this.fg.toLowerCase()){case"#0ff":t="#006666";break;case"#0f0":t="#006600";break;case"#ff0":t="#666600";break;case"#e1e1e1":t="#666666";break;default:t=this.bg;break}return e.addColorStop(0,t),e.addColorStop(1,r),e}initializeCanvas(){this.context&&(this.context.imageSmoothingEnabled=!1,this.context.font="bold "+9*this.PR+"px Helvetica,Arial,sans-serif",this.context.textBaseline="top",this.gradient=this.createGradient(),this.context.fillStyle=this.bg,this.context.fillRect(0,0,this.WIDTH,this.HEIGHT),this.context.fillStyle=this.fg,this.context.fillText(this.name,this.TEXT_X,this.TEXT_Y),this.context.fillStyle=this.bg,this.context.globalAlpha=.9,this.context.fillRect(this.GRAPH_X,this.GRAPH_Y,this.GRAPH_WIDTH,this.GRAPH_HEIGHT))}update(e,t,r=0){if(!this.context||!this.gradient)return;const i=Math.min(1/0,e),n=Math.max(t,e);this.context.globalAlpha=1,this.context.fillStyle=this.bg,this.context.fillRect(0,0,this.WIDTH,this.GRAPH_Y),this.context.fillStyle=this.fg,this.context.fillText(`${e.toFixed(r)} ${this.name} (${i.toFixed(r)}-${parseFloat(n.toFixed(r))})`,this.TEXT_X,this.TEXT_Y)}updateGraph(e,t){if(!this.context||!this.gradient)return;e===0&&t===0&&(t=1),t=Math.max(t,e,.1),e=Math.max(e,0);const r=Math.round(this.GRAPH_X),i=Math.round(this.GRAPH_Y),n=Math.round(this.GRAPH_WIDTH),a=Math.round(this.GRAPH_HEIGHT),s=Math.round(this.PR);this.context.drawImage(this.canvas,r+s,i,n-s,a,r,i,n-s,a),this.context.fillStyle=this.bg,this.context.fillRect(r+n-s,i,s,a);const l=Math.min(a,Math.round(e/t*a));l>0&&(this.context.globalAlpha=.9,this.context.fillStyle=this.gradient,this.context.fillRect(r+n-s,i+(a-l),s,l)),this.context.globalAlpha=1}}class jm extends gc{constructor(e,t,r){super(e,t,r),this.vsyncValue=0,this.SMALL_HEIGHT=9*this.PR,this.HEIGHT=this.SMALL_HEIGHT,this.WIDTH=35*this.PR,this.TEXT_Y=0*this.PR,this.canvas.height=this.HEIGHT,this.canvas.width=this.WIDTH,this.canvas.style.height="9px",this.canvas.style.width="35px",this.canvas.style.cssText=`
            width: 35px;
            height: 9px;
            position: absolute;
            top: 0;
            left: 0;
            background-color: transparent !important;
            pointer-events: none;
        `,this.initializeCanvas()}initializeCanvas(){this.context&&(this.context.imageSmoothingEnabled=!1,this.context.font="bold "+9*this.PR+"px Helvetica,Arial,sans-serif",this.context.textBaseline="top",this.context.globalAlpha=1)}update(e,t,r=0){this.context&&(this.vsyncValue=e,this.context.clearRect(0,0,this.WIDTH,this.HEIGHT),this.context.globalAlpha=1,this.context.fillStyle=this.bg,this.context.fillText(`${e.toFixed(0)}Hz`,this.TEXT_X,this.TEXT_Y))}updateGraph(e,t){}setOffset(e,t){this.canvas.style.transform=`translate(${e}px, ${t}px)`}}const vc=class Pi{constructor({trackGPU:e=!1,trackCPT:t=!1,trackHz:r=!1,trackFPS:i=!0,logsPerSecond:n=4,graphsPerSecond:a=30,samplesLog:s=40,samplesGraph:l=10,precision:c=2,minimal:u=!1,horizontal:d=!0,mode:h=0}={}){this.gl=null,this.ext=null,this.activeQuery=null,this.gpuQueries=[],this.threeRendererPatched=!1,this.frameTimes=[],this.renderCount=0,this.totalCpuDuration=0,this.totalGpuDuration=0,this.totalGpuDurationCompute=0,this.fpsPanel=null,this.msPanel=null,this.gpuPanel=null,this.gpuPanelCompute=null,this.vsyncPanel=null,this.averageFps={logs:[],graph:[]},this.averageCpu={logs:[],graph:[]},this.averageGpu={logs:[],graph:[]},this.averageGpuCompute={logs:[],graph:[]},this.updateCounter=0,this.lastMin={},this.lastMax={},this.lastValue={},this.VSYNC_RATES=[{refreshRate:60,frameTime:16.67},{refreshRate:75,frameTime:13.33},{refreshRate:90,frameTime:11.11},{refreshRate:120,frameTime:8.33},{refreshRate:144,frameTime:6.94},{refreshRate:165,frameTime:6.06},{refreshRate:240,frameTime:4.17}],this.detectedVSync=null,this.frameTimeHistory=[],this.HISTORY_SIZE=120,this.VSYNC_THRESHOLD=.05,this.lastFrameTime=0,this.handleClick=p=>{p.preventDefault(),this.showPanel(++this.mode%this.dom.children.length)},this.handleResize=()=>{this.fpsPanel&&this.resizePanel(this.fpsPanel),this.msPanel&&this.resizePanel(this.msPanel),this.gpuPanel&&this.resizePanel(this.gpuPanel),this.gpuPanelCompute&&this.resizePanel(this.gpuPanelCompute)},this.mode=h,this.horizontal=d,this.minimal=u,this.trackGPU=e,this.trackCPT=t,this.trackHz=r,this.trackFPS=i,this.samplesLog=s,this.samplesGraph=l,this.precision=c,this.logsPerSecond=n,this.graphsPerSecond=a;const f=performance.now();this.prevGraphTime=f,this.dom=document.createElement("div"),this.initializeDOM(),this.beginTime=performance.now(),this.prevTextTime=this.beginTime,this.prevCpuTime=this.beginTime,this._panelId=0,this.trackFPS&&(this.fpsPanel=this.addPanel(new Pi.Panel("FPS","#0ff","#002")),this.msPanel=this.addPanel(new Pi.Panel("CPU","#0f0","#020"))),this.trackHz===!0&&(this.vsyncPanel=new jm("","#f0f","#202"),this.dom.appendChild(this.vsyncPanel.canvas),this.vsyncPanel.setOffset(56,35)),this.setupEventListeners()}initializeDOM(){this.dom.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      opacity: 0.9;
      z-index: 10000;
      ${this.minimal?"cursor: pointer;":""}
    `}setupEventListeners(){this.minimal?(this.dom.addEventListener("click",this.handleClick),this.showPanel(this.mode)):window.addEventListener("resize",this.handleResize)}async init(e){if(!e){console.error('Stats: The "canvas" parameter is undefined.');return}if(!this.handleThreeRenderer(e)&&!await this.handleWebGPURenderer(e))if(this.initializeWebGL(e)){this.trackGPU&&this.initializeGPUTracking();return}else console.error("Stats-gl: Failed to initialize WebGL context")}handleThreeRenderer(e){return e.isWebGLRenderer&&!this.threeRendererPatched?(this.patchThreeRenderer(e),this.gl=e.getContext(),this.trackGPU&&this.initializeGPUTracking(),!0):!1}async handleWebGPURenderer(e){return e.isWebGPURenderer?((this.trackGPU||this.trackCPT)&&(e.backend.trackTimestamp=!0,e._initialized||await e.init(),e.hasFeature("timestamp-query")&&this.initializeWebGPUPanels()),this.info=e.info,this.patchThreeWebGPU(e),!0):!1}initializeWebGPUPanels(){this.trackGPU&&(this.gpuPanel=this.addPanel(new Pi.Panel("GPU","#ff0","#220"))),this.trackCPT&&(this.gpuPanelCompute=this.addPanel(new Pi.Panel("CPT","#e1e1e1","#212121")))}initializeWebGL(e){if(e instanceof WebGL2RenderingContext)this.gl=e;else if(e instanceof HTMLCanvasElement||e instanceof OffscreenCanvas){if(this.gl=e.getContext("webgl2"),!this.gl)return console.error("Stats: Unable to obtain WebGL2 context."),!1}else return console.error("Stats: Invalid input type. Expected WebGL2RenderingContext, HTMLCanvasElement, or OffscreenCanvas."),!1;return!0}initializeGPUTracking(){this.gl&&(this.ext=this.gl.getExtension("EXT_disjoint_timer_query_webgl2"),this.ext&&(this.gpuPanel=this.addPanel(new Pi.Panel("GPU","#ff0","#220"))))}begin(){this.beginProfiling("cpu-started"),!(!this.gl||!this.ext)&&(this.activeQuery&&this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),this.activeQuery=this.gl.createQuery(),this.activeQuery&&this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT,this.activeQuery))}end(){this.renderCount++,this.gl&&this.ext&&this.activeQuery&&(this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),this.gpuQueries.push({query:this.activeQuery}),this.activeQuery=null),this.endProfiling("cpu-started","cpu-finished","cpu-duration")}update(){this.endProfiling("cpu-started","cpu-finished","cpu-duration"),this.info?this.processWebGPUTimestamps():this.processGpuQueries(),this.updateAverages(),this.resetCounters()}processWebGPUTimestamps(){this.totalGpuDuration=this.info.render.timestamp,this.totalGpuDurationCompute=this.info.compute.timestamp}resetCounters(){this.renderCount=0,this.totalCpuDuration=0,this.beginTime=this.endInternal()}resizePanel(e){e.canvas.style.position="absolute",this.minimal?e.canvas.style.display="none":(e.canvas.style.display="block",this.horizontal?(e.canvas.style.top="0px",e.canvas.style.left=e.id*e.WIDTH/e.PR+"px"):(e.canvas.style.left="0px",e.canvas.style.top=e.id*e.HEIGHT/e.PR+"px"))}addPanel(e){return e.canvas&&(this.dom.appendChild(e.canvas),e.id=this._panelId,this.resizePanel(e),this._panelId++),e}showPanel(e){for(let t=0;t<this.dom.children.length;t++){const r=this.dom.children[t];r.style.display=t===e?"block":"none"}this.mode=e}processGpuQueries(){!this.gl||!this.ext||(this.totalGpuDuration=0,this.gpuQueries.forEach((e,t)=>{if(this.gl){const r=this.gl.getQueryParameter(e.query,this.gl.QUERY_RESULT_AVAILABLE),i=this.gl.getParameter(this.ext.GPU_DISJOINT_EXT);if(r&&!i){const a=this.gl.getQueryParameter(e.query,this.gl.QUERY_RESULT)*1e-6;this.totalGpuDuration+=a,this.gl.deleteQuery(e.query),this.gpuQueries.splice(t,1)}}}))}detectVSync(e){if(this.lastFrameTime===0){this.lastFrameTime=e;return}const t=e-this.lastFrameTime;if(this.lastFrameTime=e,this.frameTimeHistory.push(t),this.frameTimeHistory.length>this.HISTORY_SIZE&&this.frameTimeHistory.shift(),this.frameTimeHistory.length<60)return;const r=this.frameTimeHistory.reduce((l,c)=>l+c)/this.frameTimeHistory.length,i=this.frameTimeHistory.reduce((l,c)=>l+Math.pow(c-r,2),0)/this.frameTimeHistory.length;if(Math.sqrt(i)>2){this.detectedVSync=null;return}let a=null,s=1/0;for(const l of this.VSYNC_RATES){const c=Math.abs(r-l.frameTime);c<s&&(s=c,a=l)}a&&s/a.frameTime<=this.VSYNC_THRESHOLD?this.detectedVSync=a:this.detectedVSync=null}endInternal(){var e;const t=performance.now();for(this.frameTimes.push(t);this.frameTimes.length>0&&this.frameTimes[0]<=t-1e3;)this.frameTimes.shift();const r=Math.round(this.frameTimes.length);this.addToAverage(r,this.averageFps);const i=t>=this.prevTextTime+1e3/this.logsPerSecond,n=t>=this.prevGraphTime+1e3/this.graphsPerSecond;if(this.updatePanelComponents(this.fpsPanel,this.averageFps,0,i,n),this.updatePanelComponents(this.msPanel,this.averageCpu,this.precision,i,n),this.gpuPanel&&this.updatePanelComponents(this.gpuPanel,this.averageGpu,this.precision,i,n),this.trackCPT&&this.gpuPanelCompute&&this.updatePanelComponents(this.gpuPanelCompute,this.averageGpuCompute,this.precision,i,n),i&&(this.prevTextTime=t),n&&(this.prevGraphTime=t),this.vsyncPanel!==null){this.detectVSync(t);const a=((e=this.detectedVSync)==null?void 0:e.refreshRate)||0;i&&a>0&&this.vsyncPanel.update(a,a)}return t}updatePanelComponents(e,t,r,i,n){if(!e||t.logs.length===0)return;e.name in this.lastMin||(this.lastMin[e.name]=1/0,this.lastMax[e.name]=0,this.lastValue[e.name]=0);const a=t.logs[t.logs.length-1];this.lastMax[e.name]=Math.max(...t.logs),this.lastMin[e.name]=Math.min(this.lastMin[e.name],a),this.lastValue[e.name]=this.lastValue[e.name]*.7+a*.3;const s=Math.max(Math.max(...t.logs),...t.graph.slice(-this.samplesGraph));this.updateCounter++,i&&e.update(this.lastValue[e.name],this.lastMax[e.name],r),n&&e.updateGraph(a,s)}beginProfiling(e){if(window.performance)try{window.performance.clearMarks(e),window.performance.mark(e)}catch(t){console.debug("Stats: Performance marking failed:",t)}}endProfiling(e,t,r){if(!(!window.performance||!t||!e))try{window.performance.getEntriesByName(e,"mark").length===0&&this.beginProfiling(e),window.performance.clearMarks(t),window.performance.mark(t),window.performance.clearMeasures(r);const n=performance.measure(r,e,t);this.totalCpuDuration+=n.duration,window.performance.clearMarks(e),window.performance.clearMarks(t),window.performance.clearMeasures(r)}catch(i){console.debug("Stats: Performance measurement failed:",i)}}updatePanel(e,t,r=2){if(!e||t.logs.length===0)return;const i=performance.now();e.name in this.lastMin||(this.lastMin[e.name]=1/0,this.lastMax[e.name]=0,this.lastValue[e.name]=0);const n=t.logs[t.logs.length-1],a=Math.max(...t.logs.slice(-30));this.lastMin[e.name]=Math.min(this.lastMin[e.name],n),this.lastMax[e.name]=Math.max(this.lastMax[e.name],n),this.lastValue[e.name]=this.lastValue[e.name]*.7+n*.3;const s=Math.max(a,...t.graph.slice(-this.samplesGraph));this.updateCounter++,this.updateCounter%(this.logsPerSecond*2)===0&&(this.lastMax[e.name]=a,this.lastMin[e.name]=n),e.update&&(i>=this.prevCpuTime+1e3/this.logsPerSecond&&e.update(this.lastValue[e.name],n,this.lastMax[e.name],s,r),i>=this.prevGraphTime+1e3/this.graphsPerSecond&&(e.updateGraph(n,s),this.prevGraphTime=i))}updateAverages(){this.addToAverage(this.totalCpuDuration,this.averageCpu),this.addToAverage(this.totalGpuDuration,this.averageGpu),this.info&&this.totalGpuDurationCompute!==void 0&&this.addToAverage(this.totalGpuDurationCompute,this.averageGpuCompute)}addToAverage(e,t){t.logs.push(e),t.logs.length>this.samplesLog&&(t.logs=t.logs.slice(-this.samplesLog)),t.graph.push(e),t.graph.length>this.samplesGraph&&(t.graph=t.graph.slice(-this.samplesGraph))}get domElement(){return this.dom}patchThreeWebGPU(e){const t=e.info.reset,r=this;e.info.reset=function(){r.beginProfiling("cpu-started"),t.call(this)}}patchThreeRenderer(e){const t=e.render,r=this;e.render=function(i,n){r.begin(),t.call(this,i,n),r.end()},this.threeRendererPatched=!0}};vc.Panel=gc;let Km=vc;class Zm{settings;video;audio;ui;visualization;stats;audioUpdateFunction=()=>{};constructor(){this.settings={mode:"lyrics",isMobile:!1,textScale:0,radiance:0,fixEdges:!1,showFps:!1,enableRC:!1,twoPassOptimization:!1,bilinearFix:!1,srgbFix:!1},this.video={element:null,texture:null,height:0,width:0,scale:0,volume:0},this.audio={element:null,volume:0,loading:!1},this.stats=new Km({trackGPU:!0,trackHz:!1,trackCPT:!1,logsPerSecond:4,graphsPerSecond:30,samplesLog:40,samplesGraph:10,precision:2,horizontal:!0,minimal:!0,mode:0}),document.body.appendChild(this.stats.dom),this.ui=new qm(this),this.visualization=new Ym(this)}setTextScale(e){this.settings.textScale=e,this.visualization.text.textscale=this.settings.textScale}setMediaVolume(e){this.video.volume=e,this.audio.volume=e,this.video.element&&(this.video.element.volume=e),this.audio.element&&(this.audio.element.volume=e)}loadVideo(e){this.video.element&&(this.video.element.pause(),URL.revokeObjectURL(this.video.element.src)),this.video.texture?.dispose(),this.video.element=e,this.video.element.volume=this.video.volume,this.video.height=e.videoHeight,this.video.width=e.videoWidth,this.video.texture=new Gu(e),this.toggleVideo(!1),this.ui.mode.value="video",this.ui.mode.dispatchEvent(new Event("change"))}toggleVideo(e){const t=this.video.element;t&&(e?t.pause():t.paused?t.play():t.pause())}loadAudio(e,t,r){this.audio.element&&(this.audio.element.pause(),URL.revokeObjectURL(this.audio.element.src),this.audio.element.removeEventListener("timeupdate",this.audioUpdateFunction)),this.audio.element=e,this.audio.element.volume=this.audio.volume,this.visualization.text.update("Loading lyrics..."),this.audio.loading=!0,this.visualization.lrcPlayer.getLRCLIB(t,r).then(()=>{this.audioUpdateFunction=()=>{const[i,n]=this.visualization.lrcPlayer.update(e.currentTime);(n==="init"||n==="changed")&&this.visualization.text.update(i)},e.addEventListener("timeupdate",this.audioUpdateFunction),this.audio.loading=!1,this.toggleAudio(!1),this.ui.mode.value="lyrics",this.ui.mode.dispatchEvent(new Event("change"))})}toggleAudio(e){const t=this.audio.element;!t||!this.visualization.lrcPlayer.isReady||(e?t.pause():t.paused?t.play():t.pause())}changeFilter(){this.visualization.changeFilter()}}new Zm;
