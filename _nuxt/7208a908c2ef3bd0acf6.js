(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{447:function(t,e,n){var content=n(451);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("7893eabd",content,!0,{sourceMap:!1})},448:function(t,e,n){var content=n(449);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("26d73d9e",content,!0,{sourceMap:!1})},449:function(t,e,n){(e=n(9)(!1)).push([t.i,".v-form>.container{padding:16px}.v-form>.container>.layout>.flex{padding:8px}.v-form>.container>.layout:only-child{margin:-8px}.v-form>.container>.layout:not(:only-child){margin:auto -8px}",""]),t.exports=e},450:function(t,e,n){"use strict";var o=n(447);n.n(o).a},451:function(t,e,n){(e=n(9)(!1)).push([t.i,".file-select>.select-button[data-v-95c3aaf0]{padding:1rem;color:#fff;background-color:#2ea169;border-radius:.3rem;text-align:center;font-weight:700}.file-select>input[type=file][data-v-95c3aaf0]{display:none}",""]),t.exports=e},452:function(t,e,n){"use strict";var o={props:{value:File},methods:{handleFileChange:function(t){this.$emit("input",t.target.files[0])}}},r=(n(450),n(13)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"file-select"},[e("div",{staticClass:"select-button"},[this.value?e("span",[this._v("Selected File: "+this._s(this.value.name))]):e("span",[this._v("Select File")])]),this._v(" "),e("input",{attrs:{type:"file"},on:{change:this.handleFileChange}})])}),[],!1,null,"95c3aaf0",null);e.a=component.exports},454:function(t,e,n){"use strict";n(64),n(32),n(21),n(210),n(36),n(37),n(448);var o=n(45);e.a={name:"v-form",mixins:[Object(o.b)("form")],inheritAttrs:!1,props:{value:Boolean,lazyValidation:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(){var t=Object.values(this.errorBag).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:void 0,shouldValidate:void 0};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(o){o&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return!this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].reset();this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].resetValidation();this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},register:function(input){var t=this.watchInput(input);this.inputs.push(input),this.watchers.push(t)},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e.valid&&e.valid(),e.shouldValidate&&e.shouldValidate(),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.$attrs),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}},456:function(t,e,n){var content=n(457);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("2149b6a5",content,!0,{sourceMap:!1})},457:function(t,e,n){(e=n(9)(!1)).push([t.i,".theme--light.v-small-dialog a{color:rgba(0,0,0,.87)}.theme--dark.v-small-dialog a{color:#fff}.theme--light.v-small-dialog__content{background:#fff}.theme--dark.v-small-dialog__content{background:#424242}.theme--light.v-small-dialog__actions{background:#fff}.theme--dark.v-small-dialog__actions{background:#424242}.v-small-dialog{display:block;width:100%;height:100%}.v-small-dialog__content{padding:0 24px}.v-small-dialog__actions{text-align:right;white-space:pre}.v-small-dialog a{display:flex;align-items:center;height:100%;text-decoration:none}.v-small-dialog a>*{width:100%}.v-small-dialog .v-menu__activator{height:100%}",""]),t.exports=e},464:function(t,e,n){"use strict";n(456);var o=n(94),r=n(7),l=n(3),c=n(27),d=n(430);e.a={name:"v-edit-dialog",mixins:[o.a,r.a],props:{cancelText:{default:"Cancel"},large:Boolean,lazy:Boolean,persistent:Boolean,saveText:{default:"Save"},transition:{type:String,default:"slide-x-reverse-transition"}},data:function(){return{isActive:!1}},watch:{isActive:function(t){t?(this.$emit("open"),setTimeout(this.focus,50)):this.$emit("close")}},methods:{cancel:function(){this.isActive=!1,this.$emit("cancel")},focus:function(){var input=this.$refs.content.querySelector("input");input&&input.focus()},genButton:function(t,text){return this.$createElement(c.a,{props:{flat:!0,color:"primary",light:!0},on:{click:t}},text)},genActions:function(){var t=this;return this.$createElement("div",{class:"v-small-dialog__actions"},[this.genButton(this.cancel,this.cancelText),this.genButton((function(){t.save(t.returnValue),t.$emit("save")}),this.saveText)])},genContent:function(){var t=this;return this.$createElement("div",{on:{keydown:function(e){var input=t.$refs.content.querySelector("input");e.keyCode===l.p.esc&&t.cancel(),e.keyCode===l.p.enter&&input&&(t.save(input.value),t.$emit("save"))}},ref:"content"},[this.$slots.input])}},render:function(t){var e=this;return t(d.a,{staticClass:"v-small-dialog",class:this.themeClasses,props:{contentClass:"v-small-dialog__content",transition:this.transition,origin:"top right",right:!0,value:this.isActive,closeOnClick:!this.persistent,closeOnContentClick:!1,lazy:this.lazy,light:this.light,dark:this.dark},on:{input:function(t){return e.isActive=t}}},[t("a",{slot:"activator"},this.$slots.default),this.genContent(),this.large?this.genActions():null])}}},570:function(t,e,n){"use strict";n.r(e);n(28);var o={layout:"dashboard",$_veeValidate:{validator:"new"},components:{FileSelect:n(452).a},data:function(){return{snack:!1,snackColor:"",snackText:"",max25chars:function(t){return t.length<=25||"Input too long!"},pagination:{},total:0,file1:null,file2:null,formModel:{},valid:!0,headers:[{text:"Year",align:"left",sortable:!1,value:"year"},{text:"Number of students benefited",sortable:!1,value:"amount"}],items:[{year:"",number:""}]}},computed:{useraccess:function(){return this.$store.state.access}},mounted:function(){this.$validator.localize("en",this.dictionary)},methods:{submit:function(){try{var data={id:"5_1_1",file1name:this.file1.name,file1:this.file1,file2name:this.file2.name,file2:this.file2,table:this.items,link:"",info:this.formModel.info};this.$store.dispatch("upload3_1_3",data),this.clear()}catch(t){alert("please select all the files or enter all the feilds provided")}},clear:function(){this.formModel={},this.file1=this.file2=null,this.items=[{year:"",number:""}]},save:function(){this.snack=!0,this.snackColor="success",this.snackText="Data saved"},cancel:function(){this.snack=!0,this.snackColor="error",this.snackText="Canceled"},open:function(){this.snack=!0,this.snackColor="info",this.snackText="Dialog opened"},close:function(){console.log("Dialog closed")},addmore:function(){this.items.push({year:"",number:""})},remove:function(){this.items.pop()}}},r=n(13),l=n(17),c=n.n(l),d=n(158),v=n(157),f=n(91),h=n(435),m=n(143),_=n(497),y=n(433),k=n(464),x=n(149),$=n(454),w=n(159),C=n(144),V=n(443),T=n(15),B=n(93),A=n(160),S=n(18),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[t.useraccess&&"5"==t.useraccess||"admin"==t.useraccess?n("div",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{sm12:""}},[n("h3",[t._v("5.1.1 Average percentage of students benefited by scholarships /freeships / fee-waivers by Government / Non-Governmental agencies / Institution during the last five years")]),t._v(" "),n("h4",[t._v("Number of students benefited by scholarships /freeships / fee- waivers by Government / Non-Governmental agencies / Institution -year-wise during the last five years")]),t._v(" "),n("br"),t._v(" "),n("v-divider",{attrs:{inset:""}}),t._v(" "),n("v-chip",{attrs:{label:"",color:"pink","text-color":"white"}},[n("v-icon",{attrs:{left:""}},[t._v("label")]),t._v("Data Requirement for the last five years:(As per Data Template)\n        ")],1),t._v(" "),n("v-chip",[t._v("Name of the scheme")]),t._v(" "),n("v-chip",[t._v("Number of students benefited")])],1),t._v(" "),n("v-flex",{attrs:{lg12:""}},[n("v-card",[n("v-toolbar",{attrs:{color:"success",dark:"",flat:"",dense:"",cad:""}},[n("v-toolbar-title",{staticClass:"subheading"},[t._v("Upload")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-divider")],1),t._v(" "),n("v-card-text",{},[n("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("div",[n("v-data-table",{attrs:{headers:t.headers,items:t.items,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",[n("v-edit-dialog",{attrs:{"return-value":e.item.year,lazy:""},on:{"update:returnValue":function(n){return t.$set(e.item,"year",n)},"update:return-value":function(n){return t.$set(e.item,"year",n)},save:t.save,cancel:t.cancel,open:t.open,close:t.close},scopedSlots:t._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{rules:[t.max25chars],label:"Edit",type:"number",counter:""},model:{value:e.item.year,callback:function(n){t.$set(e.item,"year",n)},expression:"props.item.year"}})]},proxy:!0}],null,!0)},[t._v("\n                        "+t._s(e.item.year)+"\n                        ")])],1),t._v(" "),n("td",[n("v-edit-dialog",{attrs:{"return-value":e.item.number,lazy:""},on:{"update:returnValue":function(n){return t.$set(e.item,"number",n)},"update:return-value":function(n){return t.$set(e.item,"number",n)},save:t.save,cancel:t.cancel,open:t.open,close:t.close},scopedSlots:t._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{label:"Edit"},model:{value:e.item.number,callback:function(n){t.$set(e.item,"number",n)},expression:"props.item.number"}})]},proxy:!0}],null,!0)},[t._v("\n                        "+t._s(e.item.number)+"\n                        ")])],1)]}}],null,!1,916301839)}),t._v(" "),n("v-snackbar",{attrs:{timeout:3e3,color:t.snackColor},model:{value:t.snack,callback:function(e){t.snack=e},expression:"snack"}},[t._v("\n                  "+t._s(t.snackText)+"\n                  "),n("v-btn",{attrs:{flat:""},on:{click:function(e){t.snack=!1}}},[t._v("Close")])],1)],1),t._v(" "),n("center",[n("v-btn",{staticClass:"form-btn",on:{click:t.addmore}},[t._v("Add")]),t._v(" "),n("v-btn",{staticClass:"form-btn",on:{click:t.remove}},[t._v("Remove")])],1),t._v(" "),n("v-divider"),t._v(" "),n("br"),t._v(" "),n("h3",[t._v("Attested copies of the sanction letters from the sanctioning authorities")]),t._v(" "),n("file-select",{model:{value:t.file1,callback:function(e){t.file1=e},expression:"file1"}}),t._v(" "),n("br"),t._v(" "),n("h3",[t._v("List of students who received scholarships/ freeships /fee-waivers")]),t._v(" "),n("file-select",{model:{value:t.file2,callback:function(e){t.file2=e},expression:"file2"}}),t._v(" "),n("br"),t._v(" "),n("v-text-field",{attrs:{label:"Any other info",name:"info","error-messages":t.errors.collect("desc")},model:{value:t.formModel.info,callback:function(e){t.$set(t.formModel,"info",e)},expression:"formModel.info"}}),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticClass:"form-btn"},[n("v-btn",{attrs:{outline:"",color:"primary"},on:{click:t.submit}},[t._v("Submit")]),t._v(" "),n("v-btn",{attrs:{outline:""},on:{click:t.clear}},[t._v("Clear")])],1)],1)],1)],1)],1)],1)],1):n("div",[n("h1",[t._v("locked")])])])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardText:f.b,VChip:h.a,VContainer:m.a,VDataTable:_.a,VDivider:y.a,VEditDialog:k.a,VFlex:x.a,VForm:$.a,VIcon:w.a,VLayout:C.a,VSnackbar:V.a,VSpacer:T.a,VTextField:B.a,VToolbar:A.a,VToolbarTitle:S.a})}}]);