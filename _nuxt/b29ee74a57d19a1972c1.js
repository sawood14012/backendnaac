(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{447:function(e,t,n){var content=n(451);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("7893eabd",content,!0,{sourceMap:!1})},448:function(e,t,n){var content=n(449);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("26d73d9e",content,!0,{sourceMap:!1})},449:function(e,t,n){(t=n(9)(!1)).push([e.i,".v-form>.container{padding:16px}.v-form>.container>.layout>.flex{padding:8px}.v-form>.container>.layout:only-child{margin:-8px}.v-form>.container>.layout:not(:only-child){margin:auto -8px}",""]),e.exports=t},450:function(e,t,n){"use strict";var o=n(447);n.n(o).a},451:function(e,t,n){(t=n(9)(!1)).push([e.i,".file-select>.select-button[data-v-95c3aaf0]{padding:1rem;color:#fff;background-color:#2ea169;border-radius:.3rem;text-align:center;font-weight:700}.file-select>input[type=file][data-v-95c3aaf0]{display:none}",""]),e.exports=t},452:function(e,t,n){"use strict";var o={props:{value:File},methods:{handleFileChange:function(e){this.$emit("input",e.target.files[0])}}},l=(n(450),n(13)),component=Object(l.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("label",{staticClass:"file-select"},[t("div",{staticClass:"select-button"},[this.value?t("span",[this._v("Selected File: "+this._s(this.value.name))]):t("span",[this._v("Select File")])]),this._v(" "),t("input",{attrs:{type:"file"},on:{change:this.handleFileChange}})])}),[],!1,null,"95c3aaf0",null);t.a=component.exports},454:function(e,t,n){"use strict";n(64),n(32),n(21),n(210),n(36),n(37),n(448);var o=n(45);t.a={name:"v-form",mixins:[Object(o.b)("form")],inheritAttrs:!1,props:{value:Boolean,lazyValidation:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(){var e=Object.values(this.errorBag).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},n={_uid:input._uid,valid:void 0,shouldValidate:void 0};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(o){o&&(e.errorBag.hasOwnProperty(input._uid)||(n.valid=t(input)))})):n.valid=t(input),n},validate:function(){return!this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){for(var e=this,i=this.inputs.length;i--;)this.inputs[i].reset();this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){for(var e=this,i=this.inputs.length;i--;)this.inputs[i].resetValidation();this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},register:function(input){var e=this.watchInput(input);this.inputs.push(input),this.watchers.push(e)},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t.valid&&t.valid(),t.shouldValidate&&t.shouldValidate(),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.$attrs),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}}},456:function(e,t,n){var content=n(457);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("2149b6a5",content,!0,{sourceMap:!1})},457:function(e,t,n){(t=n(9)(!1)).push([e.i,".theme--light.v-small-dialog a{color:rgba(0,0,0,.87)}.theme--dark.v-small-dialog a{color:#fff}.theme--light.v-small-dialog__content{background:#fff}.theme--dark.v-small-dialog__content{background:#424242}.theme--light.v-small-dialog__actions{background:#fff}.theme--dark.v-small-dialog__actions{background:#424242}.v-small-dialog{display:block;width:100%;height:100%}.v-small-dialog__content{padding:0 24px}.v-small-dialog__actions{text-align:right;white-space:pre}.v-small-dialog a{display:flex;align-items:center;height:100%;text-decoration:none}.v-small-dialog a>*{width:100%}.v-small-dialog .v-menu__activator{height:100%}",""]),e.exports=t},464:function(e,t,n){"use strict";n(456);var o=n(94),l=n(7),r=n(3),c=n(27),d=n(430);t.a={name:"v-edit-dialog",mixins:[o.a,l.a],props:{cancelText:{default:"Cancel"},large:Boolean,lazy:Boolean,persistent:Boolean,saveText:{default:"Save"},transition:{type:String,default:"slide-x-reverse-transition"}},data:function(){return{isActive:!1}},watch:{isActive:function(e){e?(this.$emit("open"),setTimeout(this.focus,50)):this.$emit("close")}},methods:{cancel:function(){this.isActive=!1,this.$emit("cancel")},focus:function(){var input=this.$refs.content.querySelector("input");input&&input.focus()},genButton:function(e,text){return this.$createElement(c.a,{props:{flat:!0,color:"primary",light:!0},on:{click:e}},text)},genActions:function(){var e=this;return this.$createElement("div",{class:"v-small-dialog__actions"},[this.genButton(this.cancel,this.cancelText),this.genButton((function(){e.save(e.returnValue),e.$emit("save")}),this.saveText)])},genContent:function(){var e=this;return this.$createElement("div",{on:{keydown:function(t){var input=e.$refs.content.querySelector("input");t.keyCode===r.p.esc&&e.cancel(),t.keyCode===r.p.enter&&input&&(e.save(input.value),e.$emit("save"))}},ref:"content"},[this.$slots.input])}},render:function(e){var t=this;return e(d.a,{staticClass:"v-small-dialog",class:this.themeClasses,props:{contentClass:"v-small-dialog__content",transition:this.transition,origin:"top right",right:!0,value:this.isActive,closeOnClick:!this.persistent,closeOnContentClick:!1,lazy:this.lazy,light:this.light,dark:this.dark},on:{input:function(e){return t.isActive=e}}},[e("a",{slot:"activator"},this.$slots.default),this.genContent(),this.large?this.genActions():null])}}},512:function(e,t,n){"use strict";n.r(t);n(28);var o={layout:"dashboard",$_veeValidate:{validator:"new"},components:{FileSelect:n(452).a},data:function(){return{snack:!1,snackColor:"",snackText:"",max25chars:function(e){return e.length<=25||"Input too long!"},pagination:{},total:0,file1:null,file2:null,formModel:{},valid:!0,headers:[{text:"Year",align:"left",sortable:!1,value:"year"},{text:"Number of seats filled in",sortable:!1,value:"number1"},{text:"Number of approved seats ",sortable:!1,value:"number2"}],items:[{year:"",number_of_steats_filled:"",number_of_approved:""}]}},computed:{useraccess:function(){return this.$store.state.access}},mounted:function(){this.$validator.localize("en",this.dictionary)},methods:{submit:function(){try{var data={id:"2_1_2",file1name:this.file1.name,file1:this.file1,file2name:this.file2.name,file2:this.file2,table:this.items,info:this.formModel.info};this.$store.dispatch("upload1_3_2",data),this.clear()}catch(e){alert("please select all the files or enter all the feilds provided")}},clear:function(){this.formModel={},this.items=[{year:"",number_of_steats_filled:"",number_of_approved:""}],this.file1=this.file2=null},save:function(){this.snack=!0,this.snackColor="success",this.snackText="Data saved"},cancel:function(){this.snack=!0,this.snackColor="error",this.snackText="Canceled"},open:function(){this.snack=!0,this.snackColor="info",this.snackText="Dialog opened"},close:function(){console.log("Dialog closed")},addmore:function(){this.items.push({year:"",number_of_steats_filled:"",number_of_approved:""})},remove:function(){this.items.pop()}}},l=n(13),r=n(17),c=n.n(r),d=n(158),f=n(157),v=n(91),h=n(143),m=n(497),_=n(433),y=n(464),k=n(149),x=n(454),$=n(144),C=n(443),V=n(15),w=n(93),T=n(160),B=n(18),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[e.useraccess&&"2"==e.useraccess||"admin"==e.useraccess?n("div",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{sm12:""}},[n("h3",[e._v("2.1.2 Average percentage of seats filled in for the various programmes as against the approved intake")]),e._v(" "),n("br"),e._v(" "),n("h4",[e._v("Number of seats filled-in for various programmes offered by the College as against the approved intake during the last five years:")]),e._v(" "),n("v-divider",{attrs:{inset:""}})],1),e._v(" "),n("v-flex",{attrs:{lg12:""}},[n("v-card",[n("v-toolbar",{attrs:{color:"success",dark:"",flat:"",dense:"",cad:""}},[n("v-toolbar-title",{staticClass:"subheading"},[e._v("Upload:")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-divider")],1),e._v(" "),n("v-card-text",{},[n("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("div",[n("v-data-table",{attrs:{headers:e.headers,items:e.items,"hide-actions":""},scopedSlots:e._u([{key:"items",fn:function(t){return[n("td",[n("v-edit-dialog",{attrs:{"return-value":t.item.year,lazy:""},on:{"update:returnValue":function(n){return e.$set(t.item,"year",n)},"update:return-value":function(n){return e.$set(t.item,"year",n)},save:e.save,cancel:e.cancel,open:e.open,close:e.close},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{rules:[e.max25chars],label:"Edit",type:"number",counter:""},model:{value:t.item.year,callback:function(n){e.$set(t.item,"year",n)},expression:"props.item.year"}})]},proxy:!0}],null,!0)},[e._v("\n                        "+e._s(t.item.year)+"\n                        ")])],1),e._v(" "),n("td",[n("v-edit-dialog",{attrs:{"return-value":t.item.number_of_steats_filled,lazy:""},on:{"update:returnValue":function(n){return e.$set(t.item,"number_of_steats_filled",n)},"update:return-value":function(n){return e.$set(t.item,"number_of_steats_filled",n)},save:e.save,cancel:e.cancel,open:e.open,close:e.close},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{label:"Edit"},model:{value:t.item.number_of_steats_filled,callback:function(n){e.$set(t.item,"number_of_steats_filled",n)},expression:"props.item.number_of_steats_filled"}})]},proxy:!0}],null,!0)},[e._v("\n                        "+e._s(t.item.number_of_steats_filled)+"\n                        ")])],1),e._v(" "),n("td",[n("v-edit-dialog",{attrs:{"return-value":t.item.number_of_approved,lazy:""},on:{"update:returnValue":function(n){return e.$set(t.item," number_of_approved",n)},"update:return-value":function(n){return e.$set(t.item," number_of_approved",n)},save:e.save,cancel:e.cancel,open:e.open,close:e.close},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{label:"Edit","single-line":""},model:{value:t.item.number_of_approved,callback:function(n){e.$set(t.item,"number_of_approved",n)},expression:"props.item.number_of_approved"}})]},proxy:!0}],null,!0)},[e._v("\n                        "+e._s(t.item.number_of_approved)+"\n                        ")])],1)]}}],null,!1,428173855)}),e._v(" "),n("v-snackbar",{attrs:{timeout:3e3,color:e.snackColor},model:{value:e.snack,callback:function(t){e.snack=t},expression:"snack"}},[e._v("\n                  "+e._s(e.snackText)+"\n                  "),n("v-btn",{attrs:{flat:""},on:{click:function(t){e.snack=!1}}},[e._v("Close")])],1)],1),e._v(" "),n("center",[n("v-btn",{staticClass:"form-btn",on:{click:e.addmore}},[e._v("Add")]),e._v(" "),n("v-btn",{staticClass:"form-btn",on:{click:e.remove}},[e._v("Remove")])],1),e._v(" "),n("v-divider"),e._v(" "),n("br"),e._v(" "),n("h3",[e._v("Relevant details certified by the Head of the Institution clearly mentioning the programs that are not covered under CET and the number of applications received for the same")]),e._v(" "),n("file-select",{model:{value:e.file1,callback:function(t){e.file1=t},expression:"file1"}}),e._v(" "),n("br"),e._v(" "),n("h3",[e._v("Data template")]),e._v(" "),n("file-select",{model:{value:e.file2,callback:function(t){e.file2=t},expression:"file2"}}),e._v(" "),n("br"),e._v(" "),n("v-text-field",{attrs:{label:"Any other info",name:"info","error-messages":e.errors.collect("desc")},model:{value:e.formModel.info,callback:function(t){e.$set(e.formModel,"info",t)},expression:"formModel.info"}}),e._v(" "),n("v-spacer"),e._v(" "),n("div",{staticClass:"form-btn"},[n("v-btn",{attrs:{outline:"",color:"primary"},on:{click:e.submit}},[e._v("Submit")]),e._v(" "),n("v-btn",{attrs:{outline:""},on:{click:e.clear}},[e._v("Clear")])],1)],1)],1)],1)],1)],1)],1):n("div",[n("h1",[e._v("locked")])])])}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:d.a,VCard:f.a,VCardText:v.b,VContainer:h.a,VDataTable:m.a,VDivider:_.a,VEditDialog:y.a,VFlex:k.a,VForm:x.a,VLayout:$.a,VSnackbar:C.a,VSpacer:V.a,VTextField:w.a,VToolbar:T.a,VToolbarTitle:B.a})}}]);