(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{448:function(t,e,n){var content=n(449);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("26d73d9e",content,!0,{sourceMap:!1})},449:function(t,e,n){(e=n(9)(!1)).push([t.i,".v-form>.container{padding:16px}.v-form>.container>.layout>.flex{padding:8px}.v-form>.container>.layout:only-child{margin:-8px}.v-form>.container>.layout:not(:only-child){margin:auto -8px}",""]),t.exports=e},454:function(t,e,n){"use strict";n(64),n(32),n(21),n(210),n(36),n(37),n(448);var o=n(45);e.a={name:"v-form",mixins:[Object(o.b)("form")],inheritAttrs:!1,props:{value:Boolean,lazyValidation:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(){var t=Object.values(this.errorBag).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:void 0,shouldValidate:void 0};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(o){o&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return!this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].reset();this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].resetValidation();this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},register:function(input){var t=this.watchInput(input);this.inputs.push(input),this.watchers.push(t)},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e.valid&&e.valid(),e.shouldValidate&&e.shouldValidate(),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.$attrs),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}},469:function(t,e,n){var content=n(491);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("4d50f016",content,!0,{sourceMap:!1})},490:function(t,e,n){"use strict";var o=n(469);n.n(o).a},491:function(t,e,n){(e=n(9)(!1)).push([t.i,'#login[data-v-65ae2227]{height:50%;width:100%;position:absolute;top:0;left:0;content:"";z-index:0}',""]),t.exports=e},500:function(t,e,n){"use strict";n.r(e);var o={layout:"default",data:function(){return{loading:!1,dialog:!1,model:{username:"you@example.com",password:"password"}}},mounted:function(){JSON.parse(localStorage.getItem("user"))&&this.$router.push("/dashboard")},methods:{login:function(){this.loading=!0,this.$store.dispatch("createuserwithemail",this.model),this.loading=!1,this.model={username:"",password:""}}}},r=(n(490),n(13)),l=n(17),d=n.n(l),c=n(445),h=n(158),f=n(157),v=n(91),m=n(154),w=n(143),x=n(148),_=n(444),y=n(149),V=n(454),C=n(144),$=n(15),k=n(93),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"primary",attrs:{id:"login"}},[n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md4:"",lg4:""}},[n("v-card",{staticClass:"elevation-1 pa-3"},[n("v-card-text",[n("div",{staticClass:"layout column align-center"},[n("h1",{staticClass:"flex my-4 primary--text"},[t._v("NAAC Signup")])]),t._v(" "),n("v-form",[n("v-text-field",{attrs:{"append-icon":"person",name:"login",label:"Login",type:"text"},model:{value:t.model.username,callback:function(e){t.$set(t.model,"username",e)},expression:"model.username"}}),t._v(" "),n("v-text-field",{attrs:{"append-icon":"lock",name:"password",label:"Password",id:"password",type:"password"},model:{value:t.model.password,callback:function(e){t.$set(t.model,"password",e)},expression:"model.password"}})],1)],1),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{block:"",color:"primary",loading:t.loading},on:{click:t.login}},[t._v("Signup")])],1)],1),t._v(" "),n("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("Notice")]),t._v(" "),n("v-card-text",[t._v("Please wait until we process your information and get back to you.")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(e){t.dialog=!1,t.loading=!1}}},[t._v("Agree")])],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"65ae2227",null);e.default=component.exports;d()(component,{VApp:c.a,VBtn:h.a,VCard:f.a,VCardActions:v.a,VCardText:v.b,VCardTitle:m.a,VContainer:w.a,VContent:x.a,VDialog:_.a,VFlex:y.a,VForm:V.a,VLayout:C.a,VSpacer:$.a,VTextField:k.a})}}]);