/**
*
*   Classy
*   @version: 0.4.4
*
*   Object-Oriented mini-framework for JavaScript
*   https://github.com/foo123/classy.js
*
**/!function(e,t,n,r,l){var o="undefined"!=typeof global&&"[object global]"=={}.toString.call(global)?1:0,a=o||"undefined"==typeof navigator?0:1,i="function"==typeof importScripts&&navigator instanceof WorkerNavigator?1:0,c=Array,u=c.prototype,f=function(){var e=null;if(o)return e=__filename,{path:__dirname,file:__filename};if(i)e=self.location.href;else if(a){var t;(t=document.getElementsByTagName("script"))&&t.length&&(e=t[t.length-1].src)}return e?{path:e.split("/").slice(0,-1).join("/"),file:e}:{path:null,file:null}},p=f(),s=function(e,t){if(o)return t;if("."==t.charAt(0)){e=e.split("/"),t=t.split("/");var n,r=0,l=0,a=t.length,i=e.length;for(n=0;a>n;n++)if(/^\.\./.test(t[n]))r++,l++;else{if(!/^\./.test(t[n]))break;l++}r=r>=i?0:i-r,t=e.slice(0,r).concat(t.slice(l)).join("/")}return t};n=n?[].concat(n):[];var y,b,d,g=n.length,v=new c(g),m=new c(g),h=new c(g),j=new c(g);for(y=0;g>y;y++)v[y]=n[y][0],m[y]=n[y][1],h[y]=/\.js$/i.test(m[y])?s(p.path,m[y]):s(p.path,m[y]+".js");if("object"==typeof module&&module.exports){if(l===module.exports[t]){for(y=0;g>y;y++)j[y]=module.exports[v[y]]||require(h[y])[v[y]];b=r.apply(e,j),module.exports[t]=b||1}}else if("function"==typeof define&&define.amd)define(["exports"].concat(m),function(n){if(l===n[t]){for(var o=u.slice.call(arguments,1),a=o.length,i=0;a>i;i++)j[i]=n[v[i]]||o[i];b=r.apply(e,j),n[t]=b||1}});else if(i){for(y=0;g>y;y++)self[v[y]]||importScripts(h[y]),j[y]=self[v[y]];b=r.apply(e,j),self[t]=b||1}else if(l===e[t]){var w=function(e,t){d=d||document.getElementsByTagName("head")[0];var n=0,r=document.createElement("script");r.type="text/javascript",r.language="javascript",r.src=e,r.onload=r.onreadystatechange=function(){n||r.readyState&&"loaded"!=r.readyState&&"complete"!=r.readyState||(n=1,r.onload=r.onreadystatechange=null,d.removeChild(r),r=null,t&&t())},d.appendChild(r)},x=function(t,n,r){e[t]?r():w(n,r)},E=function(n){return function(){g>n&&(j[n]=e[v[n]]),++n<g?x(v[n],h[n],E(n)):(b=r.apply(e,j),e[t]=b||1)}};g?x(v[0],h[0],E(0)):(b=r.apply(e,j),e[t]=b||1)}}(this,"Classy",null,function(){var e={};return function(e){var t=function(e,t,n){this.v=e||null,this.prev=t||null,n=n||null};t.prototype={constructor:t,v:null,prev:null,next:null};var n=Array.prototype,r=Object.prototype,l=n.slice,o=(n.splice,n.concat,r.toString),a=r.hasOwnProperty,i=r.propertyIsEnumerable,c=Object.keys,u=Object.defineProperty,f=function(e){return"function"==typeof e},p=function(e,t){if("object"!=typeof e||null===e)throw new TypeError("bad desc");var n={};if(a.call(e,"enumerable")&&(n.enumerable=!!t.enumerable),a.call(e,"configurable")&&(n.configurable=!!t.configurable),a.call(e,"value")&&(n.value=t.value),a.call(e,"writable")&&(n.writable=!!e.writable),a.call(e,"get")){var r=e.get;if(!f(r)&&"undefined"!==r)throw new TypeError("bad get");n.get=r}if(a.call(e,"set")){var l=e.set;if(!f(l)&&"undefined"!==l)throw new TypeError("bad set");n.set=l}if(("get"in n||"set"in n)&&("value"in n||"writable"in n))throw new TypeError("identity-confused descriptor");return n},s=Object.defineProperties||function(e,t){if("object"!=typeof e||null===e)throw new TypeError("bad obj");t=Object(t);for(var n=c(t),r=[],l=0;l<n.length;l++)r.push([n[l],p(t[n[l]],e)]);for(var l=0;l<r.length;l++)u(e,r[l][0],r[l][1]);return e},y=Object.create||function(e,t){var n,r=function(){};return r.prototype=e,n=new r,n.__proto__=e,"object"==typeof t&&s(n,t),n},b=function(e){var n=new t(e);return function(e){if(e&&n&&n.v){var r,o=this;if(e="constructor"==e?n.v:n.v.prototype[e])return n=new t(n.v.$super,n),r=e.apply(o,l.call(arguments,1)),n=n.prev,r}}},d=function(){var e,t,n,r,c,u,f,p,s=l.call(arguments);for(t=s.shift()||{},e=s.length,p=0;e>p;p++)if(n=s[p],n&&"object"==typeof n)for(f in n)a.call(n,f)&&i.call(n,f)&&(u=n[f],r=o.call(u),c=typeof u,t[f]="number"==c||u instanceof Number?0+u:u&&("[object Array]"==r||u instanceof Array||"string"==c||u instanceof String)?u.slice(0):u);return t},g=function(e,t){e=e||Object,t=t||{};var n=t.constructor?t.constructor:function(){};return n.prototype=y(e.prototype),n.prototype=d(n.prototype,t),s(n.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0},$class:{value:n,enumerable:!1,writable:!0,configurable:!0},$super:{value:b(e),enumerable:!1,writable:!0,configurable:!0}}),s(n,{$super:{value:e,enumerable:!1,writable:!0,configurable:!0},$static:{value:e.$static&&"object"==typeof e.$static?d(null,e.$static):null,enumerable:!1,writable:!0,configurable:!0}}),n},v=Mixin=d,m=function(){var e=l.call(arguments),t=e.length,n=null;if(t>=2){var r=typeof e[0];r="function"==r?{Extends:e[0]}:"object"==r?e[0]:{Extends:Object};var o,a,i=e[1]||{},c=e[2]||null,u={},f=r.Extends||r.extends||Object,p=r.Implements||r.implements,s=r.Mixin||r.mixin;if(p=p?[].concat(p):null,s=s?[].concat(s):null)for(o=0,a=s.length;a>o;o++)s[o].prototype&&(u=Mixin(u,s[o].prototype));if(p)for(o=0,a=p.length;a>o;o++)p[o].prototype&&(u=v(u,p[o].prototype));n=g(f,d(u,i)),c&&"object"==typeof c&&(n.$static=d(n.$static,c))}else n=g(Object,e[0]);return n};e.Classy={VERSION:"0.4.4",Class:m,Extends:g,Implements:v,Mixin:Mixin,Create:y,Merge:d}}(e),e.Classy});
/**
*
*   RegExAnalyzer
*   @version: 0.2.5
*
*   A simple Regular Expression Analyzer in JavaScript
*   https://github.com/foo123/regex-analyzer
*
**/!function(t,e,r,a,p){var s="undefined"!=typeof global&&"[object global]"=={}.toString.call(global)?1:0,h=s||"undefined"==typeof navigator?0:1,n="function"==typeof importScripts&&navigator instanceof WorkerNavigator?1:0,i=Array,l=i.prototype,g=function(){var t=null;if(s)return t=__filename,{path:__dirname,file:__filename};if(n)t=self.location.href;else if(h){var e;(e=document.getElementsByTagName("script"))&&e.length&&(t=e[e.length-1].src)}return t?{path:t.split("/").slice(0,-1).join("/"),file:t}:{path:null,file:null}},o=g(),u=function(t,e){if(s)return e;if("."==e.charAt(0)){t=t.split("/"),e=e.split("/");var r,a=0,p=0,h=e.length,n=t.length;for(r=0;h>r;r++)if(/^\.\./.test(e[r]))a++,p++;else{if(!/^\./.test(e[r]))break;p++}a=a>=n?0:n-a,e=t.slice(0,a).concat(e.slice(p)).join("/")}return e};r=r?[].concat(r):[];var f,c,y,d=r.length,S=new i(d),C=new i(d),x=new i(d),m=new i(d);for(f=0;d>f;f++)S[f]=r[f][0],C[f]=r[f][1],x[f]=/\.js$/i.test(C[f])?u(o.path,C[f]):u(o.path,C[f]+".js");if("object"==typeof module&&module.exports){if(p===module.exports[e]){for(f=0;d>f;f++)m[f]=module.exports[S[f]]||require(x[f])[S[f]];c=a.apply(t,m),module.exports[e]=c||1}}else if("function"==typeof define&&define.amd)define(["exports"].concat(C),function(r){if(p===r[e]){for(var s=l.slice.call(arguments,1),h=s.length,n=0;h>n;n++)m[n]=r[S[n]]||s[n];c=a.apply(t,m),r[e]=c||1}});else if(n){for(f=0;d>f;f++)self[S[f]]||importScripts(x[f]),m[f]=self[S[f]];c=a.apply(t,m),self[e]=c||1}else if(p===t[e]){var M=function(t,e){y=y||document.getElementsByTagName("head")[0];var r=0,a=document.createElement("script");a.type="text/javascript",a.language="javascript",a.src=t,a.onload=a.onreadystatechange=function(){r||a.readyState&&"loaded"!=a.readyState&&"complete"!=a.readyState||(r=1,a.onload=a.onreadystatechange=null,y.removeChild(a),a=null,e&&e())},y.appendChild(a)},A=function(e,r,a){t[e]?a():M(r,a)},v=function(r){return function(){d>r&&(m[r]=t[S[r]]),++r<d?A(S[r],x[r],v(r)):(c=a.apply(t,m),t[e]=c||1)}};d?A(S[0],x[0],v(0)):(c=a.apply(t,m),t[e]=c||1)}}(this,"RegExAnalyzer",null,function(){var t={};return function(t){var e="\\",r=/^\{\s*(\d+)\s*,?\s*(\d+)?\s*\}/,a=/^u([0-9a-fA-F]{4})/,p=/^x([0-9a-fA-F]{2})/,s={".":"MatchAnyChar","|":"MatchEither","?":"MatchZeroOrOne","*":"MatchZeroOrMore","+":"MatchOneOrMore","^":"MatchStart",$:"MatchEnd","{":"StartRepeats","}":"EndRepeats","(":"StartGroup",")":"EndGroup","[":"StartCharGroup","]":"EndCharGroup"},h={"\\":"EscapeChar","/":"/",0:"NULChar",f:"FormFeed",n:"LineFeed",r:"CarriageReturn",t:"HorizontalTab",v:"VerticalTab",b:"MatchWordBoundary",B:"MatchNonWordBoundary",s:"MatchSpaceChar",S:"MatchNonSpaceChar",w:"MatchWordChar",W:"MatchNonWordChar",d:"MatchDigitChar",D:"MatchNonDigitChar"},n=Object.prototype.toString,i=function(t,e){if(e&&(e instanceof Array||"[object Array]"==n.call(e)))for(var r=0,a=e.length;a>r;r++)t[e[r]]=1;else for(var r in e)t[r]=1;return t},l=function(t,e){t&&(t instanceof Array||"[object Array]"==n.call(t))&&(e=t[1],t=t[0]);var r,a,p=t.charCodeAt(0),s=e.charCodeAt(0);if(s==p)return[String.fromCharCode(p)];for(a=[],r=p;s>=r;++r)a.push(String.fromCharCode(r));return a},g=function(t){var e,r,a,p,s,h,n={},o={};if("Alternation"==t.type)for(a=0,p=t.part.length;p>a;a++)s=g(t.part[a]),n=i(n,s.peek),o=i(o,s.negativepeek);else if("Group"==t.type)s=g(t.part),n=i(n,s.peek),o=i(o,s.negativepeek);else if("Sequence"==t.type){for(a=0,p=t.part.length,r=t.part[a],h=a>=p||!r||"Quantifier"!=r.type||!r.flags.MatchZeroOrMore&&!r.flags.MatchZeroOrOne&&"0"!=r.flags.MatchMinimum;!h;)s=g(r.part),n=i(n,s.peek),o=i(o,s.negativepeek),a++,r=t.part[a],h=a>=p||!r||"Quantifier"!=r.type||!r.flags.MatchZeroOrMore&&!r.flags.MatchZeroOrOne&&"0"!=r.flags.MatchMinimum;p>a&&(r=t.part[a],"Special"!=r.type||"^"!=r.part&&"$"!=r.part||(r=t.part[a+1]||null),r&&"Quantifier"==r.type&&(r=r.part),r&&(s=g(r),n=i(n,s.peek),o=i(o,s.negativepeek)))}else if("CharGroup"==t.type)for(e=t.flags.NotMatch?o:n,a=0,p=t.part.length;p>a;a++)r=t.part[a],"Chars"==r.type?e=i(e,r.part):"CharRange"==r.type?e=i(e,l(r.part)):"UnicodeChar"==r.type||"HexChar"==r.type?e[r.flags.Char]=1:"Special"==r.type&&("D"==r.part?t.flags.NotMatch?n["\\d"]=1:o["\\d"]=1:"W"==r.part?t.flags.NotMatch?n["\\w"]=1:o["\\W"]=1:"S"==r.part?t.flags.NotMatch?n["\\s"]=1:o["\\s"]=1:e["\\"+r.part]=1);else"String"==t.type?n[t.part.charAt(0)]=1:"Special"!=t.type||t.flags.MatchStart||t.flags.MatchEnd?("UnicodeChar"==t.type||"HexChar"==t.type)&&(n[t.flags.Char]=1):"D"==t.part?o["\\d"]=1:"W"==t.part?o["\\W"]=1:"S"==t.part?o["\\s"]=1:n["\\"+t.part]=1;return{peek:n,negativepeek:o}},o=function(t,e){t&&this.setRegex(t,e)};o.VERSION="0.2.5",o.getCharRange=l,o.prototype={constructor:o,VERSION:o.VERSION,regex:null,groupIndex:null,pos:null,flags:null,parts:null,getCharRange:o.getCharRange,getPeekChars:function(){var t,e,r,a,p=this.flags&&this.flags.i,h=g(this.parts);for(t in h){a={},r=h[t];for(e in r)"\\d"==e?(delete r[e],a=i(a,l("0","9"))):"\\s"==e?(delete r[e],a=i(a,["\f","\n","\r","	",""," ","\u2028","\u2029"])):"\\w"==e?(delete r[e],a=i(a,["_"].concat(l("0","9")).concat(l("a","z")).concat(l("A","Z")))):"\\."==e?(delete r[e],a[s["."]]=1):"\\"!=e.charAt(0)&&p?(a[e.toLowerCase()]=1,a[e.toUpperCase()]=1):"\\"==e.charAt(0)&&delete r[e];h[t]=i(r,a)}return h},setRegex:function(t,e){if(t){this.flags={},e=e||"/";for(var r=t.toString(),a=r.length,p=r.charAt(a-1);e!=p;)this.flags[p]=1,r=r.substr(0,a-1),a=r.length,p=r.charAt(a-1);e==r.charAt(0)&&e==r.charAt(a-1)&&(r=r.substr(1,a-2)),this.regex=r}return this},analyze:function(){var t,n,i,l="",g=[],o=[],u=!1;for(this.pos=0,this.groupIndex=0;this.pos<this.regex.length;)t=this.regex.charAt(this.pos++),u=e==t?!0:!1,u&&(t=this.regex.charAt(this.pos++)),u?"u"==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),i=a.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,o.push({part:i[0],flags:{Char:String.fromCharCode(parseInt(i[1],16)),Code:i[1]},type:"UnicodeChar"})):"x"==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),i=p.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,o.push({part:i[0],flags:{Char:String.fromCharCode(parseInt(i[1],16)),Code:i[1]},type:"HexChar"})):h[t]&&"/"!=t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),n={},n[h[t]]=1,o.push({part:t,flags:n,type:"Special"})):l+=t:"|"==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),g.push({part:o,flags:{},type:"Sequence"}),o=[]):"["==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),o.push(this.chargroup())):"("==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),o.push(this.subgroup())):"{"==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),i=r.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,o.push({part:o.pop(),flags:{part:i[0],MatchMinimum:i[1],MatchMaximum:i[2]||"unlimited"},type:"Quantifier"})):"*"==t||"+"==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),n={},n[s[t]]=1,"?"==this.regex.charAt(this.pos)?(n.isGreedy=0,this.pos++):n.isGreedy=1,o.push({part:o.pop(),flags:n,type:"Quantifier"})):"?"==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),n={},n[s[t]]=1,o.push({part:o.pop(),flags:n,type:"Quantifier"})):s[t]?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),n={},n[s[t]]=1,o.push({part:t,flags:n,type:"Special"})):l+=t;return l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),g.length?(g.push({part:o,flags:{},type:"Sequence"}),o=[],n={},n[s["|"]]=1,this.parts={part:g,flags:n,type:"Alternation"}):this.parts={part:o,flags:{},type:"Sequence"},this},subgroup:function(){var t,n,i,l="",g=[],o=[],u={},f=!1,c=this.regex.substr(this.pos,2);for("?:"==c?(u.NotCaptured=1,this.pos+=2):"?="==c?(u.LookAhead=1,this.pos+=2):"?!"==c&&(u.NegativeLookAhead=1,this.pos+=2),u.GroupIndex=++this.groupIndex;this.pos<this.regex.length;)if(t=this.regex.charAt(this.pos++),f=e==t?!0:!1,f&&(t=this.regex.charAt(this.pos++)),f)"u"==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),i=a.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,o.push({part:i[0],flags:{Char:String.fromCharCode(parseInt(i[1],16)),Code:i[1]},type:"UnicodeChar"})):"x"==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),i=p.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,o.push({part:i[0],flags:{Char:String.fromCharCode(parseInt(i[1],16)),Code:i[1]},type:"HexChar"})):h[t]&&"/"!=t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),n={},n[h[t]]=1,o.push({part:t,flags:n,type:"Special"})):l+=t;else{if(")"==t)return l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),g.length?(g.push({part:o,flags:{},type:"Sequence"}),o=[],n={},n[s["|"]]=1,{part:{part:g,flags:n,type:"Alternation"},flags:u,type:"Group"}):{part:{part:o,flags:{},type:"Sequence"},flags:u,type:"Group"};"|"==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),g.push({part:o,flags:{},type:"Sequence"}),o=[]):"["==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),o.push(this.chargroup())):"("==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),o.push(this.subgroup())):"{"==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),i=r.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,o.push({part:o.pop(),flags:{part:i[0],MatchMinimum:i[1],MatchMaximum:i[2]||"unlimited"},type:"Quantifier"})):"*"==t||"+"==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),n={},n[s[t]]=1,"?"==this.regex.charAt(this.pos)?(n.isGreedy=0,this.pos++):n.isGreedy=1,o.push({part:o.pop(),flags:n,type:"Quantifier"})):"?"==t?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),n={},n[s[t]]=1,o.push({part:o.pop(),flags:n,type:"Quantifier"})):s[t]?(l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),n={},n[s[t]]=1,o.push({part:t,flags:n,type:"Special"})):l+=t}return l.length&&(o.push({part:l,flags:{},type:"String"}),l=""),g.length?(g.push({part:o,flags:{},type:"Sequence"}),o=[],n={},n[s["|"]]=1,{part:{part:g,flags:n,type:"Alternation"},flags:u,type:"Group"}):{part:{part:o,flags:{},type:"Sequence"},flags:u,type:"Group"}},chargroup:function(){var t,r,s,n,i,l,g=[],o=[],u={},f=!1,c=!1;for("^"==this.regex.charAt(this.pos)&&(u.NotMatch=1,this.pos++);this.pos<this.regex.length;)if(l=!1,s=r,r=this.regex.charAt(this.pos++),c=e==r?!0:!1,c&&(r=this.regex.charAt(this.pos++)),c&&("u"==r?(i=a.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,r=String.fromCharCode(parseInt(i[1],16)),l=!0):"x"==r&&(i=p.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,r=String.fromCharCode(parseInt(i[1],16)),l=!0)),f)o.length&&(g.push({part:o,flags:{},type:"Chars"}),o=[]),n[1]=r,f=!1,g.push({part:n,flags:{},type:"CharRange"});else if(c)!l&&h[r]&&"/"!=r?(o.length&&(g.push({part:o,flags:{},type:"Chars"}),o=[]),t={},t[h[r]]=1,g.push({part:r,flags:t,type:"Special"})):o.push(r);else{if("]"==r)return o.length&&(g.push({part:o,flags:{},type:"Chars"}),o=[]),{part:g,flags:u,type:"CharGroup"};"-"==r?(n=[s,""],o.pop(),f=!0):o.push(r)}return o.length&&(g.push({part:o,flags:{},type:"Chars"}),o=[]),{part:g,flags:u,type:"CharGroup"}}},t.RegExAnalyzer=o}(t),t.RegExAnalyzer});
/**
*
*   CodeMirrorGrammar
*   @version: 0.7.5
*
*   Transform a grammar specification in JSON format, into a syntax-highlight parser mode for CodeMirror
*   https://github.com/foo123/codemirror-grammar
*
**/!function(t,n,e,r,l){var o="undefined"!=typeof global&&"[object global]"=={}.toString.call(global)?1:0,i=o||"undefined"==typeof navigator?0:1,s="function"==typeof importScripts&&navigator instanceof WorkerNavigator?1:0,u=Array,c=u.prototype,a=function(){var t=null;if(o)return t=__filename,{path:__dirname,file:__filename};if(s)t=self.location.href;else if(i){var n;(n=document.getElementsByTagName("script"))&&n.length&&(t=n[n.length-1].src)}return t?{path:t.split("/").slice(0,-1).join("/"),file:t}:{path:null,file:null}},f=a(),p=function(t,n){if(o)return n;if("."==n.charAt(0)){t=t.split("/"),n=n.split("/");var e,r=0,l=0,i=n.length,s=t.length;for(e=0;i>e;e++)if(/^\.\./.test(n[e]))r++,l++;else{if(!/^\./.test(n[e]))break;l++}r=r>=s?0:s-r,n=t.slice(0,r).concat(n.slice(l)).join("/")}return n};e=e?[].concat(e):[];var h,g,m,k=e.length,v=new u(k),d=new u(k),R=new u(k),E=new u(k);for(h=0;k>h;h++)v[h]=e[h][0],d[h]=e[h][1],R[h]=/\.js$/i.test(d[h])?p(f.path,d[h]):p(f.path,d[h]+".js");if("object"==typeof module&&module.exports){if(l===module.exports[n]){for(h=0;k>h;h++)E[h]=module.exports[v[h]]||require(R[h])[v[h]];g=r.apply(t,E),module.exports[n]=g||1}}else if("function"==typeof define&&define.amd)define(["exports"].concat(d),function(e){if(l===e[n]){for(var o=c.slice.call(arguments,1),i=o.length,s=0;i>s;s++)E[s]=e[v[s]]||o[s];g=r.apply(t,E),e[n]=g||1}});else if(s){for(h=0;k>h;h++)self[v[h]]||importScripts(R[h]),E[h]=self[v[h]];g=r.apply(t,E),self[n]=g||1}else if(l===t[n]){var y=function(t,n){m=m||document.getElementsByTagName("head")[0];var e=0,r=document.createElement("script");r.type="text/javascript",r.language="javascript",r.src=t,r.onload=r.onreadystatechange=function(){e||r.readyState&&"loaded"!=r.readyState&&"complete"!=r.readyState||(e=1,r.onload=r.onreadystatechange=null,m.removeChild(r),r=null,n&&n())},m.appendChild(r)},C=function(n,e,r){t[n]?r():y(e,r)},b=function(e){return function(){k>e&&(E[e]=t[v[e]]),++e<k?C(v[e],R[e],b(e)):(g=r.apply(t,E),t[n]=g||1)}};k?C(v[0],R[0],b(0)):(g=r.apply(t,E),t[n]=g||1)}}(this,"CodeMirrorGrammar",[["Classy","./classy"],["RegExAnalyzer","./regexanalyzer"]],function(t,n){var e,r,o=1/0,s=2,u=4,c=8,a=9,f=10,p=16,h=32,g=64,m=128,k=256,v=512,d=2,R=4,E=8,y=4,C=8,b=16,_=17,w=18,x=32,S=33,B=34,O=64,A=128,j=256,T=257,L=258,Q=259,M=512,D=1024,P={ONEOF:O,EITHER:O,ALL:A,ZEROORONE:T,ZEROORMORE:L,ONEORMORE:Q,REPEATED:j},N={BLOCK:x,COMMENT:B,ESCAPEDBLOCK:S,SIMPLE:b,GROUP:M,NGRAM:D},I=t.Class,$=Array.prototype,q=Object.prototype,K=$.slice,F=($.splice,$.concat),G=q.hasOwnProperty,U=q.toString,z=q.propertyIsEnumerable,W=Object.keys,Z=function(t){var n=typeof t,e=U.call(t);return"undefined"==n?k:"number"==n||t instanceof Number?s:null===t?m:!0===t||!1===t?u:t&&("string"==n||t instanceof String)?1==t.length?a:c:t&&("[object RegExp]"==e||t instanceof RegExp)?p:t&&("[object Array]"==e||t instanceof Array)?h:t&&"[object Object]"==e?g:v},H=function(t,n){return n||h!=Z(t)?[t]:t},V=function(t,n){return t=H(t,n),(n||h!=Z(t[0]))&&(t=[t]),t},J=function(t){var n,e=Z(t);if(!((g|h)&e))return t;var r,l={};for(r in t)G.call(t,r)&&z.call(t,r)&&(n=Z(t[r]),l[r]=g&n?J(t[r]):h&n?t[r].slice():t[r]);return l},X=function(){var t=K.call(arguments),n=t.length;if(1>n)return null;if(2>n)return J(t[0]);var e,r,l,o,i=t.shift(),s=J(i);for(n--,r=0;n>r;r++)if(e=t.shift())for(l in e)G.call(e,l)&&z.call(e,l)&&(G.call(i,l)&&z.call(i,l)?(o=Z(i[l]),g&~c&o&&(s[l]=X(i[l],e[l]))):s[l]=J(e[l]));return s},Y=function(t){return t.replace(/([.*+?^${}()|[\]\/\\])/g,"\\$1")},tn=function(t,n){var e,r,l,o;for(o=function(t,e){return n[1+parseInt(e,10)]},e=t.split("$$"),l=e.length,r=0;l>r;r++)e[r]=e[r].replace(/\$(\d{1,2})/g,o);return e.join("$")},nn=function(t,n){return n.length-t.length},en=function(t,n){return c&Z(n)&&c&Z(t)&&n.length&&n.length<=t.length&&n==t.substr(0,n.length)},rn=function(t,e,r){if(!t||s==Z(t))return t;var l,o=e?e.length||0:0;if(o&&e==t.substr(0,o)){var i,u,c,a,f,l,p,h=t.substr(o),g=h[0],m="";for(l=h.length;l--&&(p=h[l],g!=p);)"i"==p.toLowerCase()&&(m="i");return i=h.substring(1,l),u="^("+i+")",r[u]||(c=new RegExp(u,m),f=new n(c).analyze(),a=f.getPeekChars(),W(a.peek).length||(a.peek=null),W(a.negativepeek).length||(a.negativepeek=null),r[u]=[c,a]),r[u]}return t},ln=function(t,n){var e={},r="",l=Z(n);(c==l||a==l)&&(r=n);var o=t.sort(nn).map(function(t){return e[t.charAt(0)]=1,Y(t)}).join("|");return[new RegExp("^("+o+")"+r),{peek:e,negativepeek:null},1]},on="undefined"!=typeof global&&"[object global]"=={}.toString.call(global)?1:0,sn=on||"undefined"==typeof navigator?0:1,un="function"==typeof importScripts&&navigator instanceof WorkerNavigator?1:0,cn=function(){var t,n,e=null;return on?(e=__filename,{path:__dirname,file:__filename,base:__dirname}):(un?e=self.location.href:sn&&(t=document.location.href.split("#")[0].split("?")[0].split("/").slice(0,-1).join("/"),(n=document.getElementsByTagName("script"))&&n.length&&(e=n[n.length-1].src)),e?{path:e.split("/").slice(0,-1).join("/"),file:e,base:t}:{path:null,file:null,base:null})};cn();var an=Math.max,fn=/^[\s\u00a0]+/,pn=I({constructor:function(t){var n=this;n._=null,n.s=t?""+t:"",n.start=n.pos=0},_:null,s:"",start:0,pos:0,fromStream:function(t){var n=this;return n._=t,n.s=""+t.string,n.start=t.start,n.pos=t.pos,n},toString:function(){return this.s},sol:function(){return 0==this.pos},eol:function(){return this.pos>=this.s.length},chr:function(t,n){var e=this,r=e.s.charAt(e.pos)||null;return r&&t==r?(!1!==n&&(e.pos+=1,e._&&(e._.pos=e.pos)),r):!1},chl:function(t,n){var e=this,r=e.s.charAt(e.pos)||null;return r&&-1<t.indexOf(r)?(!1!==n&&(e.pos+=1,e._&&(e._.pos=e.pos)),r):!1},str:function(t,n,e){var r,l=this,o=l.pos,i=l.s,s=i.charAt(o)||null;return s&&n[s]&&(r=t.length,t==i.substr(o,r))?(!1!==e&&(l.pos+=r,l._&&(l._.pos=l.pos)),t):!1},rex:function(t,n,e,r,l){var o,i=this,s=i.pos,u=i.s,c=u.charAt(s)||null;return c&&n&&n[c]||e&&!e[c]?(o=u.slice(s).match(t),!o||o.index>0?!1:(!1!==l&&(i.pos+=o[r||0].length,i._&&(i._.pos=i.pos)),o)):!1},end:function(){var t=this;return t.pos=t.s.length,t._&&(t._.pos=t.pos),t},nxt:function(){var t,n=this,e=n.s;return n.pos<e.length?(t=e.charAt(n.pos++)||null,n._&&(n._.pos=n.pos),t):void 0},bck:function(t){var n=this;return n.pos=an(0,n.pos-t),n._&&(n._.pos=n.pos),n},bck2:function(t){var n=this;return n.pos=an(0,t),n._&&(n._.pos=n.pos),n},spc:function(){var t,n=this,e=n.pos,r=n.s.slice(e);return(t=r.match(fn))&&(n.pos+=t[0].length,n._&&(n._.pos=n.pos)),n.pos>e},cur:function(t){var n=this,e=n.s.slice(n.start,n.pos);return t&&(n.start=n.pos),e},sft:function(){return this.start=this.pos,this}}),hn=I({constructor:function(t,n){var e=this;e.id=n?(new Date).getTime():0,e.l=t||0,e.stack=[],e.t=C,e.r="0",e.inBlock=null,e.endBlock=null},id:0,l:0,stack:null,t:null,r:null,inBlock:null,endBlock:null,clone:function(t){var n=this,e=new n.$class(n.l,t);return e.t=n.t,e.r=n.r,e.stack=n.stack.slice(),e.inBlock=n.inBlock,e.endBlock=n.endBlock,e},toString:function(){var t=this;return["",t.id,t.l,t.t,t.inBlock||"0"].join("_")}}),gn=I({constructor:function(t,n,e,r){var l=this;switch(l.type=d,l.tt=t||a,l.tn=n,l.tk=r||0,l.tg=0,l.tp=null,l.p=null,l.np=null,l.tt){case a:case f:l.tp=e;break;case c:l.tp=e,l.p={},l.p[""+e.charAt(0)]=1;break;case p:l.tp=e[0],l.p=e[1].peek||null,l.np=e[1].negativepeek||null,l.tg=e[2]||0;break;case m:l.tp=null}},type:null,tt:null,tn:null,tp:null,tg:0,tk:0,p:null,np:null,get:function(t,n){var e,r=this,l=r.tt,o=r.tk,i=r.tp,s=r.tg,u=r.p,h=r.np;switch(l){case a:if(e=t.chr(i,n))return[o,e];break;case f:if(e=t.chl(i,n))return[o,e];break;case c:if(e=t.str(i,u,n))return[o,e];break;case p:if(e=t.rex(i,u,h,s,n))return[o,e];break;case m:return!1!==n&&t.end(),[o,""]}return!1},toString:function(){return["[","Matcher: ",this.tn,", Pattern: ",this.tp?this.tp.toString():null,"]"].join("")}}),mn=I(gn,{constructor:function(t,n,e){var r=this;r.type=R,r.tn=t,r.ms=n,r.ownKey=!1!==e},ms:null,ownKey:!0,get:function(t,n){var e,r,l=this.ms,o=l.length,i=this.ownKey;for(e=0;o>e;e++)if(r=l[e].get(t,n))return i?[e,r[1]]:r;return!1}}),kn=I(gn,{constructor:function(t,n,e){var r=this;r.type=E,r.tn=t,r.s=new mn(r.tn+"_Start",n,!1),r.e=e},s:null,e:null,get:function(t,n){var e,r=this,l=r.s,o=r.e;if(e=l.get(t,n)){var i=o[e[0]],u=Z(i),a=l.ms[e[0]].tt;return p==a&&(s==u?i=new gn(c,r.tn+"_End",e[1][i+1]):c==u&&(i=new gn(c,r.tn+"_End",tn(i,e[1])))),i}return!1}}),vn=function(t,n,e,r){var l=Z(n);if(s==l)return n;if(!r[t]){e=e||0;var o,i=0;n&&n.isCharList&&(i=1,delete n.isCharList),o=m&l?new gn(m,t,n,e):a==l?new gn(a,t,n,e):c&l?i?new gn(f,t,n,e):new gn(c,t,n,e):h&l?new gn(p,t,n,e):n,r[t]=o}return r[t]},dn=function(t,n,e,r,l,o){if(!o[t]){var i,s,u,f,p,g,m,k=0,v=0,d=1;if(i=H(n),u=i.length,1==u)m=vn(t,rn(i[0],e,l),0,o);else if(u>1){for(f=(u>>1)+1,s=0;f>=s;s++)p=Z(i[s]),g=Z(i[u-1-s]),(a!=p||a!=g)&&(d=0),h&p||h&g?k=1:(en(i[s],e)||en(i[u-1-s],e))&&(v=1);if(!d||r&&c&Z(r))if(!r||k||v){for(s=0;u>s;s++)i[s]=h&Z(i[s])?dn(t+"_"+s,i[s],e,r,l,o):vn(t+"_"+s,rn(i[s],e,l),s,o);m=u>1?new mn(t,i):i[0]}else m=vn(t,ln(i,r),0,o);else i=i.slice().join(""),i.isCharList=1,m=vn(t,i,0,o)}o[t]=m}return o[t]},Rn=function(t,n,e,r,l){if(!l[t]){var o,i,s,u,a,f,h;for(u=[],a=[],o=V(n),i=0,s=o.length;s>i;i++)f=vn(t+"_0_"+i,rn(o[i][0],e,r),i,l),h=o[i].length>1?p!=f.tt||c!=Z(o[i][1])||en(o[i][1],e)?vn(t+"_1_"+i,rn(o[i][1],e,r),i,l):o[i][1]:f,u.push(f),a.push(h);l[t]=new kn(t,u,a)}return l[t]},En=0,yn=function(){return++En},Cn=function(t,n){if(n)for(;t.length&&n==t[t.length-1].sID;)t.pop();else t.length=0;return t},bn=I({constructor:function(t,n,e){var r=this;r.tt=b,r.tn=t,r.t=n,r.r=e,r.REQ=0,r.ERR=0,r.toClone=["t","r"]},sID:null,tn:null,tt:null,t:null,r:null,REQ:0,ERR:0,toClone:null,err:function(){var t=this;return w==t.tt?"NONSPACE Required":_==t.tt?"EOL Required":t.REQ?'Token Missing "'+t.tn+'"':'Syntax Error "'+t.tn+'"'},get:function(t,n){var e=this,r=e.t,l=e.tt;if(_==l){if(t.spc(),t.eol())return n.t=C,e.r}else if(w==l)e.ERR=e.REQ&&t.spc()&&!t.eol()?1:0,e.REQ=0;else if(r.get(t))return n.t=e.tt,e.r;return!1},require:function(t){return this.REQ=t?1:0,this},push:function(t,n,e,r){r&&(e.sID=r),n<t.length?t.splice(n,0,e):t.push(e)},clone:function(){var t,n,e,r=this,l=r.toClone;if(t=new r.$class,t.tt=r.tt,t.tn=r.tn,l&&l.length)for(n=0,e=l.length;e>n;n++)t[l[n]]=r[l[n]];return t},toString:function(){return["[","Tokenizer: ",this.tn,", Matcher: ",this.t?this.t.toString():null,"]"].join("")}}),_n=I(bn,{constructor:function(t,n,e,r,l,o,i){var s=this;s.$super("constructor",n,e,r),s.ri="undefined"==typeof l?s.r:l,s.tt=t,s.mline="undefined"==typeof o?1:o,s.esc=i||"\\",s.toClone=["t","r","ri","mline","esc"]},ri:null,mline:0,esc:null,get:function(t,n){var e,r,l,o,i,s,u,c,a,f=this,p=0,h=0,g="",k=f.mline,v=f.t,d=f.tn,R=f.tt,E=f.r,y=f.ri,C=E!=y,b=0,_=S==R,w=f.esc;if(B==R&&(f.REQ=0),i=0,n.inBlock==d?(h=1,e=n.endBlock,i=1,s=y):!n.inBlock&&(e=v.get(t))&&(h=1,n.inBlock=d,n.endBlock=e,s=E),h){if(l=n.stack.length,o=m==e.tt,C){if(i&&o&&t.sol())return f.REQ=0,n.inBlock=null,n.endBlock=null,!1;if(!i)return f.push(n.stack,l,f.clone(),d),n.t=R,s}if(p=e.get(t),r=k,a=0,p)s=o?y:E;else for(c=t.pos;!t.eol();){if(u=t.pos,!(_&&b||!e.get(t))){C?t.pos>u&&u>c?(s=y,t.bck2(u),a=1):(s=E,p=1):(s=E,p=1);break}g=t.nxt(),b=!b&&g==w}return r=k||_&&b,p||!r&&!a?(n.inBlock=null,n.endBlock=null):f.push(n.stack,l,f.clone(),d),n.t=R,s}return!1}}),wn=I(bn,{constructor:function(t,n,e,r){var l=this;l.tt=j,l.tn=t||null,l.t=null,l.ts=null,l.min=e||0,l.max=r||o,l.found=0,l.toClone=["ts","min","max","found"],n&&l.set(n)},ts:null,min:0,max:1,found:0,set:function(t){return t&&(this.ts=H(t)),this},get:function(t,n){var e,r,l,o,i,s,u=this,c=u.ts,a=c.length,f=u.found,p=u.min,h=u.max,g=0;for(u.ERR=0,u.REQ=0,o=t.pos,i=n.stack.length,s=u.tn+"_"+yn(),e=0;a>e;e++){if(r=c[e].clone().require(1),l=r.get(t,n),!1!==l){if(++f,h>=f)return u.found=f,u.push(n.stack,i,u.clone(),s),u.found=0,l;break}r.REQ&&g++,r.ERR&&t.bck2(o)}return u.REQ=p>f,u.ERR=f>h||p>f&&g>0,!1}}),xn=I(wn,{constructor:function(t,n){this.$super("constructor",t,n,1,1),this.tt=O},get:function(t,n){var e,r,l,o,i=this,s=i.ts,u=s.length,c=0,a=0;for(i.REQ=1,i.ERR=0,o=t.pos,l=0;u>l;l++){if(r=s[l].clone(),e=r.get(t,n),c+=r.REQ?1:0,!1!==e)return e;r.ERR&&(a++,t.bck2(o))}return i.REQ=c>0,i.ERR=u==a&&c>0,!1}}),Sn=I(wn,{constructor:function(t,n){this.$super("constructor",t,n,1,1),this.tt=A},get:function(t,n){var e,r,l,o,i,s=this,u=s.ts,c=u.length;if(s.REQ=1,s.ERR=0,l=t.pos,o=n.stack.length,i=s.tn+"_"+yn(),e=u[0].clone().require(1),r=e.get(t,n),!1!==r){for(var a=c-1;a>0;a--)s.push(n.stack,o+c-a-1,u[a].clone().require(1),i);return r}return e.ERR?(s.ERR=1,t.bck2(l)):e.REQ&&(s.ERR=1),!1}}),Bn=I(wn,{constructor:function(t,n){this.$super("constructor",t,n,1,1),this.tt=D},get:function(t,n){var e,r,l,o,i,s=this,u=s.ts,c=u.length;if(s.REQ=0,s.ERR=0,l=t.pos,o=n.stack.length,i=s.tn+"_"+yn(),e=u[0].clone().require(0),r=e.get(t,n),!1!==r){for(var a=c-1;a>0;a--)s.push(n.stack,o+c-a-1,u[a].clone().require(1),i);return r}return e.ERR&&t.bck2(l),!1}}),On=function(t,n,r,l,i,s,u,a,f,p,g){if(null===t){var m=new bn(t,t,e);return m.tt=_,m}if(""===t){var m=new bn(t,t,e);return m.tt=w,m}if(t=""+t,!a[t]){var k,v,d,R,E,y,C,m=null;if(k=r[t]||l[t]||{type:"simple",tokens:t}){if((c|h)&Z(k)&&(k={type:"simple",tokens:k}),v=k.type?N[k.type.toUpperCase().replace("-","").replace("_","")]:b,b&v){if(""===k.tokens)return m=new bn(t,"",e),m.tt=w,a[t]=m,m;if(null===k.tokens)return m=new bn(t,"",e),m.tt=_,a[t]=m,m}if(k.tokens=H(k.tokens),R=k.action||null,b&v)k.autocomplete&&jn(k,t,g),d="undefined"==typeof k.combine?"\\b":k.combine,m=new bn(t,dn(t,k.tokens.slice(),n,d,s,u),i[t]||e),a[t]=m;else if(x&v)B&v&&An(k,p),m=new _n(v,t,Rn(t,k.tokens.slice(),n,s,u),i[t]||e,i[t+".inside"],k.multiline,k.escape),a[t]=m,k.interleave&&f.push(m.clone());else if(M&v){y=k.tokens.slice(),h&Z(k.match)?m=new wn(t,null,k.match[0],k.match[1]):(E=P[k.match.toUpperCase()],m=T==E?new wn(t,null,0,1):L==E?new wn(t,null,0,o):Q==E?new wn(t,null,1,o):O&E?new xn(t,null):new Sn(t,null)),a[t]=m,C=[];for(var S=0,A=y.length;A>S;S++)C=C.concat(On(y[S],n,r,l,i,s,u,a,f,p,g));m.set(C)}else if(D&v){m=V(k.tokens.slice()).slice();for(var j,I=[],S=0,A=m.length;A>S;S++)I[S]=m[S].slice(),m[S]=new Bn(t+"_NGRAM_"+S,null);a[t]=m;for(var S=0,A=m.length;A>S;S++){j=I[S],C=[];for(var $=0,q=j.length;q>$;$++)C=C.concat(On(j[$],n,r,l,i,s,u,a,f,p,g));m[S].set(C)}}}}return a[t]},An=function(t,n){var e,r,o,s=V(t.tokens.slice());for(i=0,l=s.length;l>i;i++)e=s[i][0],r=s[i].length>1?s[i][1]:s[i][0],o=s[i].length>2?s[i][2]:"",null===r?(n.line=n.line||[],n.line.push(e)):(n.block=n.block||[],n.block.push([e,r,o]))},jn=function(t,n,e){var r=[].concat(H(t.tokens)).map(function(t){return{word:t,meta:n}});e.autocomplete=F.apply(e.autocomplete||[],r)},Tn=function(t){var n,e,r,l,o,i,s,u,c,a,f,p,g,m,k,v;if(t.__parsed)return t;for(f={},p={},g={},k={},v={},m=[],t=J(t),n=t.RegExpID||null,t.RegExpID=null,delete t.RegExpID,i=t.Lex||{},t.Lex=null,delete t.Lex,s=t.Syntax||{},t.Syntax=null,delete t.Syntax,o=t.Style||{},l=t.Parser||[],r=l.length,e=[],u=0;r>u;u++)c=l[u],a=On(c,n,i,s,o,f,p,g,m,k,v)||null,a&&(h&Z(a)?e=e.concat(a):e.push(a));return t.Parser=e,t.cTokens=m,t.Style=o,t.Comments=k,t.Keywords=v,t.__parsed=1,t},Ln=CodeMirror||{Pass:{toString:function(){return"CodeMirror.Pass"}}},Qn=I({constructor:function(t,n){var e=this;e.electricChars=t.electricChars||!1,e.LC=t.Comments.line?t.Comments.line[0]:null,e.BCS=t.Comments.block?t.Comments.block[0][0]:null,e.BCE=t.Comments.block?t.Comments.block[0][1]:null,e.BCC=e.BCL=t.Comments.block?t.Comments.block[0][2]:null,e.DEF=n.DEFAULT,e.ERR=t.Style.error||n.ERROR,e.Keywords=t.Keywords.autocomplete||null,e.Tokens=t.Parser||[],e.cTokens=t.cTokens.length?t.cTokens:null},conf:null,parserConf:null,electricChars:!1,LC:null,BCS:null,BCE:null,BCL:null,BCC:null,ERR:null,DEF:null,Keywords:null,cTokens:null,Tokens:null,parse:function(t){t=t||"";var n,e,r,l,o=t.split(/\r\n|\r|\n/g),i=o.length,s=[];for(r=new hn,r.parseAll=1,n=0;i>n;n++){for(l=new pn(o[n]),e=[];!l.eol();)e.push(this.getToken(l,r));s.push(e)}return s},getToken:function(t,n){var e,r,l,o,i,s,u=this,c=u.cTokens,a=u.Tokens,f=a.length,p=n.parseAll,h=u.DEF,g=u.ERR;if(s=n.stack,i=p?t:(new pn).fromStream(t),i.sol()&&s.length&&_==s[s.length-1].tt&&s.pop(),(!s.length||w!=s[s.length-1].tt)&&i.spc())return n.t=C,p?{value:i.cur(1),type:h,error:null}:n.r=h;for(;s.length;){if(c)for(r=0;r<c.length;)if(l=c[r++],o=l.get(i,n),!1!==o)return p?{value:i.cur(1),type:o,error:null}:n.r=o;if(l=s.pop(),o=l.get(i,n),!1!==o)return p?{value:i.cur(1),type:o,error:null}:n.r=o;if(l.ERR||l.REQ)return Cn(s,l.sID),i.nxt(),n.t=y,p?{value:i.cur(1),type:g,error:l.err()}:n.r=g}for(e=0;f>e;e++){if(l=a[e],o=l.get(i,n),!1!==o)return p?{value:i.cur(1),type:o,error:null}:n.r=o;if(l.ERR||l.REQ)return Cn(s,l.sID),i.nxt(),n.t=y,p?{value:i.cur(1),type:g,error:l.err()}:n.r=g}return i.nxt(),n.t=C,p?{value:i.cur(1),type:h,error:null}:n.r=h},indent:function(){return Ln.Pass}}),Mn=function(t,n){return new Qn(t,n)},Dn=function(t){var n=function(n,e){return t.conf=n,t.parserConf=e,{startState:function(){return new hn},copyState:function(t){return t.clone()},electricChars:t.electricChars,validator:function(n){if(!t.conf||!t.conf.supportGrammarAnnotations)return[];var e,r,l,o,i,s,u,c,a,f=0;if(e=n,!e||!e.length)return[];for(r=[],l=t.parse(e),u=l.length,c=0;u>c;c++)if(o=l[c],o&&o.length)for(a=0,s=0;s<o.length;s++)i=o[s],t.ERR==i.type&&(r.push({message:i.error||"Syntax Error",severity:"error",from:CodeMirror.Pos(c,a),to:CodeMirror.Pos(c,a+1)}),f=1),a+=i.value.length;return f?r:[]},lineComment:t.LC,blockCommentStart:t.BCS,blockCommentEnd:t.BCE,blockCommentContinue:t.BCC,blockCommentLead:t.BCL,token:function(n,e){return t.getToken(n,e)},indent:function(n,e,r){return t.indent(n,e,r)}}};return n},Pn=function(t,n){var l={DEFAULT:n||e,ERROR:r};return t=Tn(t),Dn(Mn(t,l))};e=null,r="error";var Nn={VERSION:"0.7.5",extend:X,parse:Tn,getMode:Pn};return Nn});
