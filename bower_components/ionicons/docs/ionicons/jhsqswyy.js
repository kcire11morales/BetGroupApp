/*! Built with http://stenciljs.com */
const{h:t}=window.ionicons;class e{constructor(){this.svgContent=null,this.ariaLabel="",this.ios="",this.md="",this.name="",this.src="",this.icon=""}componentWillLoad(){this.waitUntilVisible(this.el,"50px",()=>{this.isVisible=!0,this.loadIcon()})}waitUntilVisible(t,e,i){if(this.win.IntersectionObserver){const s=new this.win.IntersectionObserver(t=>{t[0].isIntersecting&&(s.disconnect(),i())},{rootMargin:e});s.observe(t)}else i()}loadIcon(){if(!this.isServer&&this.isVisible){const t=this.getUrl();t&&function(t){let e=i.get(t);return e||(e=fetch(t,{keepalive:!0,cache:"force-cache"}).then(t=>t.ok?t.text():Promise.resolve(null)),i.set(t,e)),e}(t).then(t=>{this.svgContent=t})}}getUrl(){let t=n(this.src);return t||((t=s(this.name,this.mode,this.ios,this.md))?this.getNamedUrl(t):(t=n(this.icon))?t:(t=s(this.icon,this.mode,this.ios,this.md))?this.getNamedUrl(t):null)}getNamedUrl(t){return`${this.resourcesUrl}svg/${t}.svg`}hostData(){const t={role:"img"};this.ariaLabel||s(this.name,this.mode,this.ios,this.md)&&(t["aria-label"]=this.name.replace("ios-","").replace("md-","").replace(/\-/g," "));const e={};return this.size&&(e[`icon-${this.size}`]=!0),Object.assign({},t,{class:e})}render(){return!this.isServer&&this.svgContent?t("div",{class:"icon-inner",innerHTML:function(t,e){if(e){const i=t.createDocumentFragment(),s=t.createElement("div");s.innerHTML=e,i.appendChild(s);for(let t=s.childNodes.length-1;t>=0;t--)"svg"!==s.childNodes[t].nodeName.toLowerCase()&&s.removeChild(s.childNodes[t]);const n=s.firstElementChild;if(n&&"svg"===n.nodeName.toLowerCase()&&function t(e){if(1===e.nodeType){if("script"===e.nodeName.toLowerCase())return!1;for(var i=0;i<e.attributes.length;i++){let t=e.attributes[i].value;if("string"==typeof t&&0===t.toLowerCase().indexOf("on"))return!1}for(i=0;i<e.childNodes.length;i++)if(!t(e.childNodes[i]))return!1}return!0}(n))return s.innerHTML}return""}(this.doc,this.svgContent)}):t("div",{class:"icon-inner"})}static get is(){return"ion-icon"}static get host(){return{theme:"icon"}}static get properties(){return{ariaLabel:{type:String,attr:"aria-label"},color:{type:String,attr:"color"},doc:{context:"document"},el:{elementRef:!0},icon:{type:String,attr:"icon",watchCallbacks:["loadIcon"]},ios:{type:String,attr:"ios"},isServer:{context:"isServer"},isVisible:{state:!0},md:{type:String,attr:"md"},mode:{context:"mode"},name:{type:String,attr:"name",watchCallbacks:["loadIcon"]},resourcesUrl:{context:"resourcesUrl"},size:{type:String,attr:"size"},src:{type:String,attr:"src",watchCallbacks:["loadIcon"]},svgContent:{state:!0},win:{context:"window"}}}static get style(){return"ion-icon{display:inline-block;font-size:inherit}ion-icon .icon-inner{height:1em;width:1em}ion-icon svg{fill:currentColor;stroke:currentColor}.icon-small .icon-inner{font-size:18px}.icon-large .icon-inner{font-size:32px}.icon-ios-primary svg{fill:var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff));stroke:var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff))}.icon-ios-secondary svg{fill:var(--ion-color-ios-secondary,var(--ion-color-secondary,#0cd1e8));stroke:var(--ion-color-ios-secondary,var(--ion-color-secondary,#0cd1e8))}.icon-ios-tertiary svg{fill:var(--ion-color-ios-tertiary,var(--ion-color-tertiary,#f4a942));stroke:var(--ion-color-ios-tertiary,var(--ion-color-tertiary,#f4a942))}.icon-ios-success svg{fill:var(--ion-color-ios-success,var(--ion-color-success,#10dc60));stroke:var(--ion-color-ios-success,var(--ion-color-success,#10dc60))}.icon-ios-warning svg{fill:var(--ion-color-ios-warning,var(--ion-color-warning,#ffce00));stroke:var(--ion-color-ios-warning,var(--ion-color-warning,#ffce00))}.icon-ios-danger svg{fill:var(--ion-color-ios-danger,var(--ion-color-danger,#f14141));stroke:var(--ion-color-ios-danger,var(--ion-color-danger,#f14141))}.icon-ios-light svg{fill:var(--ion-color-ios-light,var(--ion-color-light,#f4f5f8));stroke:var(--ion-color-ios-light,var(--ion-color-light,#f4f5f8))}.icon-ios-medium svg{fill:var(--ion-color-ios-medium,var(--ion-color-medium,#989aa2));stroke:var(--ion-color-ios-medium,var(--ion-color-medium,#989aa2))}.icon-ios-dark svg{fill:var(--ion-color-ios-dark,var(--ion-color-dark,#222428));stroke:var(--ion-color-ios-dark,var(--ion-color-dark,#222428))}.icon-md-primary svg{fill:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff));stroke:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.icon-md-secondary svg{fill:var(--ion-color-md-secondary,var(--ion-color-secondary,#0cd1e8));stroke:var(--ion-color-md-secondary,var(--ion-color-secondary,#0cd1e8))}.icon-md-tertiary svg{fill:var(--ion-color-md-tertiary,var(--ion-color-tertiary,#f4a942));stroke:var(--ion-color-md-tertiary,var(--ion-color-tertiary,#f4a942))}.icon-md-success svg{fill:var(--ion-color-md-success,var(--ion-color-success,#10dc60));stroke:var(--ion-color-md-success,var(--ion-color-success,#10dc60))}.icon-md-warning svg{fill:var(--ion-color-md-warning,var(--ion-color-warning,#ffce00));stroke:var(--ion-color-md-warning,var(--ion-color-warning,#ffce00))}.icon-md-danger svg{fill:var(--ion-color-md-danger,var(--ion-color-danger,#f14141));stroke:var(--ion-color-md-danger,var(--ion-color-danger,#f14141))}.icon-md-light svg{fill:var(--ion-color-md-light,var(--ion-color-light,#f4f5f8));stroke:var(--ion-color-md-light,var(--ion-color-light,#f4f5f8))}.icon-md-medium svg{fill:var(--ion-color-md-medium,var(--ion-color-medium,#989aa2));stroke:var(--ion-color-md-medium,var(--ion-color-medium,#989aa2))}.icon-md-dark svg{fill:var(--ion-color-md-dark,var(--ion-color-dark,#222428));stroke:var(--ion-color-md-dark,var(--ion-color-dark,#222428))}"}}const i=new Map;function s(t,e,i,s){return e=e||"md",i&&"ios"===e?t=i.toLowerCase():s&&"md"===e?t=s.toLowerCase():t&&!/^md-|^ios-|^logo-/.test(t)&&(t=e+"-"+t),"string"!=typeof t||""===t.trim()?null:""!==t.replace(/[a-z]|-|\d/g,"")?null:t}function n(t){return"string"==typeof t&&(t=t.trim()).length>0&&/(\/|\.)/.test(t)?t:null}export{e as IonIcon};