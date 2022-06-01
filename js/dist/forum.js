(()=>{var e={116:function(e,o){"use strict";var t=this&&this.__assign||function(){return t=Object.assign||function(e){for(var o,t=1,n=arguments.length;t<n;t++)for(var r in o=arguments[t])Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);return e},t.apply(this,arguments)};function n(e,o){if(!o)return"";var t="; "+e;return!0===o?t:t+"="+o}function r(e,o,t){return encodeURIComponent(e).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/\(/g,"%28").replace(/\)/g,"%29")+"="+encodeURIComponent(o).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)+function(e){if("number"==typeof e.expires){var o=new Date;o.setMilliseconds(o.getMilliseconds()+864e5*e.expires),e.expires=o}return n("Expires",e.expires?e.expires.toUTCString():"")+n("Domain",e.domain)+n("Path",e.path)+n("Secure",e.secure)+n("SameSite",e.sameSite)}(t)}function i(e){for(var o={},t=e?e.split("; "):[],n=/(%[\dA-F]{2})+/gi,r=0;r<t.length;r++){var i=t[r].split("="),s=i.slice(1).join("=");'"'===s.charAt(0)&&(s=s.slice(1,-1));try{o[i[0].replace(n,decodeURIComponent)]=s.replace(n,decodeURIComponent)}catch(e){}}return o}function s(){return i(document.cookie)}function a(e,o,n){document.cookie=r(e,o,t({path:"/"},n))}o.__esModule=!0,o.encode=r,o.parse=i,o.getAll=s,o.get=function(e){return s()[e]},o.set=a,o.remove=function(e,o){a(e,"",t(t({},o),{expires:-1}))}}},o={};function t(n){var r=o[n];if(void 0!==r)return r.exports;var i=o[n]={exports:{}};return e[n].call(i.exports,i,i.exports,t),i.exports}t.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},t.d=(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";t.r(n);const e=flarum.core.compat["forum/app"];var o=t.n(e);const r=flarum.core.compat["common/extend"],i=flarum.core.compat["forum/components/SettingsPage"];var s=t.n(i);const a=flarum.core.compat["forum/components/SessionDropdown"];var c=t.n(a);const u=flarum.core.compat["forum/components/HeaderSecondary"];var f=t.n(u);const d=flarum.core.compat["common/components/Button"];var p=t.n(d);const l=flarum.core.compat["common/components/LoadingIndicator"];var h=t.n(l);const g=flarum.core.compat["common/components/Select"];var v=t.n(g);const y=flarum.core.compat["common/components/FieldSet"];var _=t.n(y);const T=flarum.core.compat["common/components/Switch"];var S=t.n(T);const b=flarum.core.compat["common/app"];var N=t.n(b);const A=flarum.core.compat["common/components/Page"];var D=t.n(A),U="fof-nightmode.default_theme";const x={AUTO:0,LIGHT:1,DARK:2,DEFAULT:function(){var e;return Number.parseInt((null==(e=N().data.settings)?void 0:e[U])||N().data[U])||0}};var M=t(116),O="flarum_nightmode",w=function(){var e=M.get(O);return e||"0"===e?Number(e):x.DEFAULT()},I=function(e){return M.set(O,e,{sameSite:"lax",secure:"https:"===location.protocol})};function k(){var e=Array.from(new Set(Object.values(x))),o=w();isNaN(o)?R("Theme is not a valid integer! Resetting..."):e.includes(o)||R("Theme is out of bounds! Resetting...")}function R(e){console.warn(e),I(x.DEFAULT())}function L(){var e,o=N().session.user,t=!o||!!o.preferences().fofNightMode_perDevice,n=o&&o.preferences().fofNightMode;return t?e=w():"number"==typeof n&&-1!==n&&(e=n),"number"==typeof e?e:x.DEFAULT()}function P(){var e,o,t=N().session.user,n=null==(e=N().session.user)?void 0:e.preferences().fofNightMode_perDevice;t&&!n||k(),n&&k(),j((o=L())===x.DARK?"night":o===x.LIGHT?"day":window.matchMedia("(prefers-color-scheme: dark)").matches?"night":"day")}function C(){return{day:N().data["fof-nightmode.assets.day"],night:N().data["fof-nightmode.assets.night"]}}function j(e){var o=document.querySelector("link.nightmode-light[rel=stylesheet]"),t=document.querySelector("link.nightmode-dark[rel=stylesheet]");if(o&&t){if(L()===x.AUTO)return;var n=document.createElement("link");"onload"in n?n.onload=function(){o.remove(),t.remove()}:(o.remove(),t.remove()),n.rel="stylesheet",n.className="nightmode",n.href=C()[e],document.head.append(n)}else{var r=o||t||document.querySelector("link.nightmode[rel=stylesheet]"),i=C()[e];i!==r.href&&(r.href=i,r.className="nightmode")}}function E(e){return e===x.LIGHT||e===x.AUTO&&!window.matchMedia("(prefers-color-scheme: dark)").matches}function F(){var e,t=L(),n=E(t),r=o().session.user;if(r){var i=n?x.DARK:x.LIGHT;if(r.preferences().fofNightMode_perDevice)return perDevice.set(i),void P();r.savePreferences({fofNightMode:i}).then((function(){P()}))}else{var s=(e=t)===x.AUTO?x.LIGHT:e===x.LIGHT?x.DARK:x.AUTO;perDevice.set(s),P()}}var H=function(e){return o().translator.trans("fof-nightmode.forum.user.settings."+e)};o().initializers.add("fof-nightmode",(function(){(0,r.extend)(s().prototype,"settingsItems",(function(e){var t=o().session.user,n=!!t.preferences().fofNightMode_perDevice;n&&k();var r=!window.matchMedia("not all and (prefers-color-scheme), (prefers-color-scheme)").matches,i=L(),s={0:H("options.auto"),1:H("options.day"),2:H("options.night")};r&&(delete s[0],i===x.AUTO&&(i=o().forum.attribute("fofNightMode_autoUnsupportedFallback"))),e.add("fof-nightmode",_().component({label:H("heading"),className:"Settings-theme"},[m("p",{className:"description"},H("description")),m("p",{className:"description"},H("description2")),r?m("p",{class:"description NightMode-autoUnsupported"},H("auto_unsupported")):null,S().component({className:"Settings-theme--per_device_cb",state:n,onchange:function(e){e?I(i):M.remove(O),t.savePreferences({fofNightMode_perDevice:e}).then((function(){P()}))}},H("device_specific_setting_checkbox")),v().component({value:i,className:"Settings-theme--input",onchange:function(e){if(n)return I(e),void P();t.savePreferences({fofNightMode:e}).then((function(){m.redraw(),P()}))},options:s}),m("p",{className:"Settings-theme--selection_description"},i===x.AUTO?H("option_descriptions.auto"):i===x.LIGHT?H("option_descriptions.day"):i===x.DARK?H("option_descriptions.night"):h().component())]))})),(0,r.extend)(f().prototype,"items",(function(e){if(!o().session.user||o().forum.attribute("fofNightMode.showThemeToggleOnHeaderAlways")){var t=L(),n=E(t);e.add("nightmode",m(p(),{className:"Button Button--flat",onclick:function(){F()},icon:t===x.AUTO?"fas fa-adjust":"far fa-"+(n?"sun":"moon")},o().translator.trans("fof-nightmode.forum.header.nightmode_button")),15)}})),(0,r.extend)(c().prototype,"items",(function(e){if(o().session.user){var t=E(L());e.add(t?"nightmode":"daymode",p().component({icon:"far fa-"+(t?"moon":"sun"),onclick:function(){F()}},o().translator.trans("fof-nightmode.forum."+(t?"night":"day"))),-1)}})),(0,r.extend)(D().prototype,"oninit",P)}))})(),module.exports=n})();
//# sourceMappingURL=forum.js.map