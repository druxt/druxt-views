(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{376:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return a}));n(310);function r(t,e,n,r,i,o,a,s,u,p){"boolean"!=typeof a&&(u=s,s=a,a=!1);var c,d="function"==typeof n?n.options:n;if(t&&t.render&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0,i&&(d.functional=!0)),r&&(d._scopeId=r),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,u(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},d._ssrRegister=c):e&&(c=a?function(t){e.call(this,p(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,s(t))}),c)if(d.functional){var l=d.render;d.render=function(t,e){return c.call(e),l(t,e)}}else{var f=d.beforeCreate;d.beforeCreate=f?[].concat(f,c):[c]}return n}Boolean,Boolean;var i=r({render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default")],2)},staticRenderFns:[]},void 0,{name:"DruxtWrapper"},void 0,!1,void 0,!1,void 0,void 0,void 0),o=function(){};o.prototype.getComponents=function(t,e,n,r){void 0===n&&(n=!1);var i=[],o={};return e.filter((function(t){return Array.isArray(t)})).map((function(e){var n=[];e.map((function(e){var i=n.length?[].concat(n[0].parts):[];i.push(e);var o=[].concat(i);"string"==typeof r||!1===r&&void 0!==r||!((t||{}).$options||{}).name||(r=t.$options.name.match(/[A-Z][a-z]+/g).map((function(t){return t.toLowerCase()})).join("-")),r&&o.unshift(r);var a=o.map((function(t){return t.toLowerCase().replace(/--|_/g,"-")})).join("-"),s=a.replace(/((\b|[^a-zA-Z0-9]+)[a-zA-Z0-9])/gi,(function(t,e,n){return t.toUpperCase().replace(n,"")})),u=!1;for(var p of[a,s])if(void 0!==(((t||{}).$options||{}).components||{})[p]){u=!0;break}n.unshift({global:u,kebab:a,parts:i,pascal:s,prefix:r})})),n.map((function(t){o[t.pascal]||(o[t.pascal]=!0,i.push(t))}))})),i.filter((function(t){return t.global||!!n})).sort((function(t,e){return e.parts.length-t.parts.length}))},o.prototype.getModuleData=async function(t){if("function"!=typeof((t||{}).$options||{}).druxt)return!1;var e=await t.$options.druxt({vm:t});return(t.$options||{}).name&&(e.name=t.$options.name.match(/[A-Z][a-z]+/g).map((function(t){return t.toLowerCase()})).join("-")),e};var a={components:{DruxtWrapper:i},data:function(){return{component:{is:"DruxtWrapper",options:[],propsData:{}}}},props:{wrapper:{type:Object,default:function(){return{component:"div",propsData:{}}}}},fetch:async function(){var t=new o,e=await t.getModuleData(this);if(e.componentOptions){var n=t.getComponents(this,e.componentOptions,!0);this.component.options=n.map((function(t){return t.pascal}));var r=n.filter((function(t){return t.global}));r.length&&(this.component.is=r[0].pascal,this.component.propsData=e.propsData||{})}}}}).call(this,"/")},412:function(t,e,n){"use strict";n.r(e);n(24),n(173),n(93),n(174);var r=n(347),i=(n(96),n(55)),o=n(308),a=n(376),s={name:"DruxtView",mixins:[a.a],props:{displayId:{type:String,default:"default"},type:{type:String,default:"view--view"},uuid:{type:String,required:!0},viewId:{type:String,required:!0}},fetch:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource({type:t.type,id:t.uuid});case 2:return t.view=e.sent,e.next=5,t.getResource({type:"views--".concat(t.viewId),id:t.displayId});case 5:return t.results=e.sent,e.next=8,a.a.fetch.call(t);case 8:case"end":return e.stop()}}),e)})))()},data:function(){return{results:[],view:!1}},computed:{attachments_after:function(){var t=this,e=this.view.attributes.display;return Object.keys(e).filter((function(n){return"attachment"===e[n].display_plugin&&"after"===e[n].display_options.attachment_position&&void 0!==e[n].display_options.displays[t.displayId]}))},attachments_before:function(){var t=this,e=this.view.attributes.display;return Object.keys(e).filter((function(n){return"attachment"===e[n].display_plugin&&"before"===e[n].display_options.attachment_position&&void 0!==e[n].display_options.displays[t.displayId]}))},display:function(){return!(!this.view||!this.view.attributes)&&("default"===this.display_id?this.view.attributes.display[this.display_id]:Object(r.a)(Object(r.a)({},this.view.attributes.display[this.displayId]),this.view.attributes.display.default))},headers:function(){return this.display?this.display.display_options.header:[]},mode:function(){return!!this.display&&(!!this.display.display_options.row.type.includes("entity:")&&this.display.display_options.row.options.view_mode)}},methods:Object(r.a)({},Object(o.a)({getResource:"druxtRouter/getEntity"})),druxt:function(t){var e=t.vm;return{componentOptions:[[e.viewId,e.displayId]],propsData:{results:e.results,view:e.view}}},watch:{uuid:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$fetch();case 2:case"end":return e.stop()}}),e)})))()},displayId:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$fetch();case 2:case"end":return e.stop()}}),e)})))()}}},u=n(42),p=Object(u.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$fetchState.pending?t._e():n(t.wrapper.component,t._b({tag:"component"},"component",t.wrapper.propsData,!1),[n(t.component.is,t._b({tag:"component",scopedSlots:t._u([{key:"header",fn:function(){return t._l(t.headers,(function(e){return n("span",{key:e.id,domProps:{innerHTML:t._s(e.content.value)}})}))},proxy:!0},t.attachments_before?{key:"attachments_before",fn:function(e){return t._l(t.attachments_before,(function(r){return n("DruxtView",t._b({key:r,attrs:{"display-id":r,type:t.type,uuid:t.uuid,"view-id":t.viewId}},"DruxtView",e,!1))}))}}:null,{key:"results",fn:function(e){return t._l(t.results,(function(r){return n("DruxtEntity",t._b({key:r.id},"DruxtEntity",Object.assign({},{type:r.type,uuid:r.id,mode:t.mode},e),!1))}))}},t.attachments_after?{key:"attachments_after",fn:function(e){return t._l(t.attachments_after,(function(r){return n("DruxtView",t._b({key:r,attrs:{"display-id":r,type:t.type,uuid:t.uuid,"view-id":t.viewId}},"DruxtView",e,!1))}))}}:null],null,!0)},"component",t.component.propsData,!1),[t._v(" "),t._v(" "),t._v(" "),t._v(" "),[t._l(t.headers,(function(e){return n("span",{key:e.id,domProps:{innerHTML:t._s(e.content.value)}})})),t._v(" "),t._l(t.results,(function(e){return n("DruxtEntity",t._b({key:e.id},"DruxtEntity",{type:e.type,uuid:e.id,mode:t.mode},!1))}))]],2)],1)}),[],!1,null,null,null);e.default=p.exports}}]);