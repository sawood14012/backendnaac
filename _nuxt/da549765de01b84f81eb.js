(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{447:function(e,t,n){var content=n(451);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("7893eabd",content,!0,{sourceMap:!1})},448:function(e,t,n){var content=n(449);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("26d73d9e",content,!0,{sourceMap:!1})},449:function(e,t,n){(t=n(9)(!1)).push([e.i,".v-form>.container{padding:16px}.v-form>.container>.layout>.flex{padding:8px}.v-form>.container>.layout:only-child{margin:-8px}.v-form>.container>.layout:not(:only-child){margin:auto -8px}",""]),e.exports=t},450:function(e,t,n){"use strict";var l=n(447);n.n(l).a},451:function(e,t,n){(t=n(9)(!1)).push([e.i,".file-select>.select-button[data-v-95c3aaf0]{padding:1rem;color:#fff;background-color:#2ea169;border-radius:.3rem;text-align:center;font-weight:700}.file-select>input[type=file][data-v-95c3aaf0]{display:none}",""]),e.exports=t},452:function(e,t,n){"use strict";var l={props:{value:File},methods:{handleFileChange:function(e){this.$emit("input",e.target.files[0])}}},o=(n(450),n(13)),component=Object(o.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("label",{staticClass:"file-select"},[t("div",{staticClass:"select-button"},[this.value?t("span",[this._v("Selected File: "+this._s(this.value.name))]):t("span",[this._v("Select File")])]),this._v(" "),t("input",{attrs:{type:"file"},on:{change:this.handleFileChange}})])}),[],!1,null,"95c3aaf0",null);t.a=component.exports},454:function(e,t,n){"use strict";n(64),n(32),n(21),n(210),n(36),n(37),n(448);var l=n(45);t.a={name:"v-form",mixins:[Object(l.b)("form")],inheritAttrs:!1,props:{value:Boolean,lazyValidation:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(){var e=Object.values(this.errorBag).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},n={_uid:input._uid,valid:void 0,shouldValidate:void 0};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(l){l&&(e.errorBag.hasOwnProperty(input._uid)||(n.valid=t(input)))})):n.valid=t(input),n},validate:function(){return!this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){for(var e=this,i=this.inputs.length;i--;)this.inputs[i].reset();this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){for(var e=this,i=this.inputs.length;i--;)this.inputs[i].resetValidation();this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},register:function(input){var e=this.watchInput(input);this.inputs.push(input),this.watchers.push(e)},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t.valid&&t.valid(),t.shouldValidate&&t.shouldValidate(),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.$attrs),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}}},456:function(e,t,n){var content=n(457);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("2149b6a5",content,!0,{sourceMap:!1})},457:function(e,t,n){(t=n(9)(!1)).push([e.i,".theme--light.v-small-dialog a{color:rgba(0,0,0,.87)}.theme--dark.v-small-dialog a{color:#fff}.theme--light.v-small-dialog__content{background:#fff}.theme--dark.v-small-dialog__content{background:#424242}.theme--light.v-small-dialog__actions{background:#fff}.theme--dark.v-small-dialog__actions{background:#424242}.v-small-dialog{display:block;width:100%;height:100%}.v-small-dialog__content{padding:0 24px}.v-small-dialog__actions{text-align:right;white-space:pre}.v-small-dialog a{display:flex;align-items:center;height:100%;text-decoration:none}.v-small-dialog a>*{width:100%}.v-small-dialog .v-menu__activator{height:100%}",""]),e.exports=t},464:function(e,t,n){"use strict";n(456);var l=n(94),o=n(7),r=n(3),c=n(27),d=n(430);t.a={name:"v-edit-dialog",mixins:[l.a,o.a],props:{cancelText:{default:"Cancel"},large:Boolean,lazy:Boolean,persistent:Boolean,saveText:{default:"Save"},transition:{type:String,default:"slide-x-reverse-transition"}},data:function(){return{isActive:!1}},watch:{isActive:function(e){e?(this.$emit("open"),setTimeout(this.focus,50)):this.$emit("close")}},methods:{cancel:function(){this.isActive=!1,this.$emit("cancel")},focus:function(){var input=this.$refs.content.querySelector("input");input&&input.focus()},genButton:function(e,text){return this.$createElement(c.a,{props:{flat:!0,color:"primary",light:!0},on:{click:e}},text)},genActions:function(){var e=this;return this.$createElement("div",{class:"v-small-dialog__actions"},[this.genButton(this.cancel,this.cancelText),this.genButton((function(){e.save(e.returnValue),e.$emit("save")}),this.saveText)])},genContent:function(){var e=this;return this.$createElement("div",{on:{keydown:function(t){var input=e.$refs.content.querySelector("input");t.keyCode===r.p.esc&&e.cancel(),t.keyCode===r.p.enter&&input&&(e.save(input.value),e.$emit("save"))}},ref:"content"},[this.$slots.input])}},render:function(e){var t=this;return e(d.a,{staticClass:"v-small-dialog",class:this.themeClasses,props:{contentClass:"v-small-dialog__content",transition:this.transition,origin:"top right",right:!0,value:this.isActive,closeOnClick:!this.persistent,closeOnContentClick:!1,lazy:this.lazy,light:this.light,dark:this.dark},on:{input:function(e){return t.isActive=e}}},[e("a",{slot:"activator"},this.$slots.default),this.genContent(),this.large?this.genActions():null])}}},576:function(e,t,n){"use strict";n.r(t);n(28);var l={layout:"dashboard",$_veeValidate:{validator:"new"},components:{FileSelect:n(452).a},data:function(){return{snack:!1,snackColor:"",snackText:"",max25chars:function(e){return e.length<=25||"Input too long!"},pagination:{},total:0,file1:null,file2:null,file3:null,formModel:{},valid:!0,headers:[{text:"Year",align:"left",sortable:!1,value:"year"},{text:"Number of students placed/self-employed",sortable:!1,value:"number"}],items:[{year:"",number:""}]}},computed:{useraccess:function(){return this.$store.state.access}},mounted:function(){this.$validator.localize("en",this.dictionary)},methods:{submit:function(){try{var data={id:"5_2_2",file1name:this.file1.name,file1:this.file1,file2name:this.file2.name,file2:this.file2,file3name:this.file3.name,file3:this.file3,table:this.items,info:this.formModel.info};this.$store.dispatch("upload2_1_3",data),this.clear()}catch(e){alert("please select all the files or enter all the feilds provided")}},clear:function(){this.formModel={},this.items=[{year:"",number:""}],this.file1=this.file2=this.file3=null},save:function(){this.snack=!0,this.snackColor="success",this.snackText="Data saved"},cancel:function(){this.snack=!0,this.snackColor="error",this.snackText="Canceled"},open:function(){this.snack=!0,this.snackColor="info",this.snackText="Dialog opened"},close:function(){console.log("Dialog closed")},addmore:function(){this.items.push({year:"",number:""})},remove:function(){this.items.pop()}}},o=n(13),r=n(17),c=n.n(r),d=n(158),f=n(157),v=n(91),h=n(435),m=n(143),_=n(497),y=n(433),k=n(464),x=n(149),$=n(454),C=n(159),V=n(144),w=n(443),T=n(15),B=n(93),S=n(160),A=n(18),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[e.useraccess&&"5"==e.useraccess||"admin"==e.useraccess?n("div",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{sm12:""}},[n("h3",[e._v("5.2.2 Average percentage of placement / self-employment (in relevant field) in professional services of outgoing students during the last five years")]),e._v(" "),n("h4",[e._v("Number of outgoing students who got placed / self-employed year-wise during the last five years")]),e._v(" "),n("br"),e._v(" "),n("v-divider",{attrs:{inset:""}}),e._v(" "),n("v-chip",{attrs:{label:"",color:"pink","text-color":"white"}},[n("v-icon",{attrs:{left:""}},[e._v("label")]),e._v("Data Requirement for the last five years: (As per Data Template)\n        ")],1),e._v(" "),n("v-chip",[e._v("Name of the employer with contact details")]),e._v(" "),n("v-chip",[e._v("Names of self-employed professionals with Register Number and contact details")]),e._v(" "),n("v-chip",[e._v("Number of students placed")])],1),e._v(" "),n("v-flex",{attrs:{lg12:""}},[n("v-card",[n("v-toolbar",{attrs:{color:"success",dark:"",flat:"",dense:"",cad:""}},[n("v-toolbar-title",{staticClass:"subheading"},[e._v("Upload:")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-divider")],1),e._v(" "),n("v-card-text",{},[n("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("div",[n("v-data-table",{attrs:{headers:e.headers,items:e.items,"hide-actions":""},scopedSlots:e._u([{key:"items",fn:function(t){return[n("td",[n("v-edit-dialog",{attrs:{"return-value":t.item.year,lazy:""},on:{"update:returnValue":function(n){return e.$set(t.item,"year",n)},"update:return-value":function(n){return e.$set(t.item,"year",n)},save:e.save,cancel:e.cancel,open:e.open,close:e.close},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{rules:[e.max25chars],label:"Edit",type:"number",counter:""},model:{value:t.item.year,callback:function(n){e.$set(t.item,"year",n)},expression:"props.item.year"}})]},proxy:!0}],null,!0)},[e._v("\n                        "+e._s(t.item.year)+"\n                        ")])],1),e._v(" "),n("td",[n("v-edit-dialog",{attrs:{"return-value":t.item.number,lazy:""},on:{"update:returnValue":function(n){return e.$set(t.item,"number",n)},"update:return-value":function(n){return e.$set(t.item,"number",n)},save:e.save,cancel:e.cancel,open:e.open,close:e.close},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{label:"Edit"},model:{value:t.item.number,callback:function(n){e.$set(t.item,"number",n)},expression:"props.item.number"}})]},proxy:!0}],null,!0)},[e._v("\n                        "+e._s(t.item.number)+"\n                        ")])],1)]}}],null,!1,916301839)}),e._v(" "),n("v-snackbar",{attrs:{timeout:3e3,color:e.snackColor},model:{value:e.snack,callback:function(t){e.snack=t},expression:"snack"}},[e._v("\n                  "+e._s(e.snackText)+"\n                  "),n("v-btn",{attrs:{flat:""},on:{click:function(t){e.snack=!1}}},[e._v("Close")])],1)],1),e._v(" "),n("center",[n("v-btn",{staticClass:"form-btn",on:{click:e.addmore}},[e._v("Add")]),e._v(" "),n("v-btn",{staticClass:"form-btn",on:{click:e.remove}},[e._v("Remove")])],1),e._v(" "),n("v-divider"),e._v(" "),n("br"),e._v(" "),n("h3",[e._v("Annual reports of Placement Cell.")]),e._v(" "),n("file-select",{model:{value:e.file1,callback:function(t){e.file1=t},expression:"file1"}}),e._v(" "),n("br"),e._v(" "),n("h3",[e._v("Self-attested list of students placed / self-employed")]),e._v(" "),n("file-select",{model:{value:e.file2,callback:function(t){e.file2=t},expression:"file2"}}),e._v(" "),n("br"),e._v("Details of student placement / self-employment during the last five years (Data Template)\n              "),n("file-select",{model:{value:e.file3,callback:function(t){e.file3=t},expression:"file3"}}),e._v(" "),n("br"),e._v(" "),n("v-text-field",{attrs:{label:"Any other info",name:"info","error-messages":e.errors.collect("desc")},model:{value:e.formModel.info,callback:function(t){e.$set(e.formModel,"info",t)},expression:"formModel.info"}}),e._v(" "),n("v-spacer"),e._v(" "),n("div",{staticClass:"form-btn"},[n("v-btn",{attrs:{outline:"",color:"primary"},on:{click:e.submit}},[e._v("Submit")]),e._v(" "),n("v-btn",{attrs:{outline:""},on:{click:e.clear}},[e._v("Clear")])],1)],1)],1)],1)],1)],1)],1):n("div",[n("h1",[e._v("locked")])])])}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:d.a,VCard:f.a,VCardText:v.b,VChip:h.a,VContainer:m.a,VDataTable:_.a,VDivider:y.a,VEditDialog:k.a,VFlex:x.a,VForm:$.a,VIcon:C.a,VLayout:V.a,VSnackbar:w.a,VSpacer:T.a,VTextField:B.a,VToolbar:S.a,VToolbarTitle:A.a})}}]);