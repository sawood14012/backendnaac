(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{447:function(t,e,n){var content=n(451);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("7893eabd",content,!0,{sourceMap:!1})},448:function(t,e,n){var content=n(449);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("26d73d9e",content,!0,{sourceMap:!1})},449:function(t,e,n){(e=n(9)(!1)).push([t.i,".v-form>.container{padding:16px}.v-form>.container>.layout>.flex{padding:8px}.v-form>.container>.layout:only-child{margin:-8px}.v-form>.container>.layout:not(:only-child){margin:auto -8px}",""]),t.exports=e},450:function(t,e,n){"use strict";var o=n(447);n.n(o).a},451:function(t,e,n){(e=n(9)(!1)).push([t.i,".file-select>.select-button[data-v-95c3aaf0]{padding:1rem;color:#fff;background-color:#2ea169;border-radius:.3rem;text-align:center;font-weight:700}.file-select>input[type=file][data-v-95c3aaf0]{display:none}",""]),t.exports=e},452:function(t,e,n){"use strict";var o={props:{value:File},methods:{handleFileChange:function(t){this.$emit("input",t.target.files[0])}}},l=(n(450),n(13)),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"file-select"},[e("div",{staticClass:"select-button"},[this.value?e("span",[this._v("Selected File: "+this._s(this.value.name))]):e("span",[this._v("Select File")])]),this._v(" "),e("input",{attrs:{type:"file"},on:{change:this.handleFileChange}})])}),[],!1,null,"95c3aaf0",null);e.a=component.exports},454:function(t,e,n){"use strict";n(64),n(32),n(21),n(210),n(36),n(37),n(448);var o=n(45);e.a={name:"v-form",mixins:[Object(o.b)("form")],inheritAttrs:!1,props:{value:Boolean,lazyValidation:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(){var t=Object.values(this.errorBag).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:void 0,shouldValidate:void 0};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(o){o&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return!this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].reset();this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].resetValidation();this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},register:function(input){var t=this.watchInput(input);this.inputs.push(input),this.watchers.push(t)},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e.valid&&e.valid(),e.shouldValidate&&e.shouldValidate(),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.$attrs),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}},458:function(t,e,n){"use strict";var o=n(4),l=n(3);e.a=o.a.extend({name:"comparable",props:{valueComparator:{type:Function,default:l.g}}})},459:function(t,e,n){"use strict";var o=n(65),l=n(4);e.a=l.a.extend({name:"rippleable",directives:{Ripple:o.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),data.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",data)):null},onChange:function(){}}})},460:function(t,e,n){var content=n(461);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("3c22fb13",content,!0,{sourceMap:!1})},461:function(t,e,n){(e=n(9)(!1)).push([t.i,'.theme--light.v-input--selection-controls.v-input--is-disabled .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-input--selection-controls.v-input--is-disabled .v-icon{color:hsla(0,0%,100%,.3)!important}.application--is-rtl .v-input--selection-controls .v-input--selection-controls__input{margin-right:0;margin-left:8px}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls .v-input__append-outer,.v-input--selection-controls .v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls .v-input__control{flex-grow:0;width:auto}.v-input--selection-controls:not(.v-input--hide-details) .v-input__slot{margin-bottom:12px}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;margin-right:8px;transition:.3s cubic-bezier(.25,.8,.25,1);transition-property:color,transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input input{position:absolute;opacity:0;width:100%;height:100%}.v-input--selection-controls__input+.v-label,.v-input--selection-controls__input input{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple .v-ripple__container{transform:scale(1.4)}.v-input--selection-controls.v-input .v-label{align-items:center;display:inline-flex;top:0;height:auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(.8)}',""]),t.exports=e},462:function(t,e,n){"use strict";n(55),n(56),n(21);var o=n(66),l=n(459),r=n(458);e.a=o.a.extend({name:"selectable",mixins:[l.a,r.a],model:{prop:"inputValue",event:"change"},props:{color:{type:String,default:"accent"},id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(t){return{lazyValue:t.inputValue}},computed:{computedColor:function(){return this.isActive?this.color:this.validationState},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive}},watch:{inputValue:function(t){this.lazyValue=t}},methods:{genLabel:function(){if(!this.hasLabel)return null;var label=o.a.options.methods.genLabel.call(this);return label.data.on={click:this.onChange},label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-label":this.label,"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.id,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(!this.isDisabled){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})},466:function(t,e,n){"use strict";n(55),n(56),n(21),n(460);var o=n(22),l=n(462),r=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};e.a={name:"v-checkbox",mixins:[l.a],props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$vuetify.icons.checkboxIndeterminate"},onIcon:{type:String,default:"$vuetify.icons.checkboxOn"},offIcon:{type:String,default:"$vuetify.icons.checkboxOff"}},data:function(t){return{inputIndeterminate:t.indeterminate}},computed:{classes:function(){return{"v-input--selection-controls":!0,"v-input--checkbox":!0}},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon}},watch:{indeterminate:function(t){this.inputIndeterminate=t}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",r({},this.$attrs,{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.computedColor)),this.$createElement(o.a,this.setTextColor(this.computedColor,{props:{dark:this.dark,light:this.light}}),this.computedIcon)])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}},604:function(t,e,n){"use strict";n.r(e);n(28);var o={layout:"dashboard",$_veeValidate:{validator:"new"},components:{FileSelect:n(452).a},data:function(){return{total:0,file1:null,file2:null,file3:null,formModel:{checkbox1:!1,checkbox2:!1,checkbox3:!1,checkbox4:!1,checkbox5:!1},valid:!0}},computed:{useraccess:function(){return this.$store.state.access}},mounted:function(){this.$validator.localize("en",this.dictionary)},methods:{submit:function(){try{var data={id:"7_1_6",file1name:this.file1.name,file1:this.file1,file2name:this.file2.name,file2:this.file2,file3name:this.file3.name,file3:this.file3,c1:this.formModel.checkbox1,c2:this.formModel.checkbox2,c3:this.formModel.checkbox3,c4:this.formModel.checkbox4,c5:this.formModel.checkbox5,info:this.formModel.info};this.$store.dispatch("upload4_4_3",data),this.clear()}catch(t){alert("please select all the files or enter all the feilds provided")}},clear:function(){this.formModel={checkbox1:!1,checkbox2:!1,checkbox3:!1,checkbox4:!1,checkbox5:!1},this.file1=this.file2=this.file3=null}}},l=n(13),r=n(17),c=n.n(r),h=n(158),d=n(157),f=n(91),v=n(466),m=n(143),x=n(433),_=n(149),k=n(454),y=n(144),V=n(15),w=n(93),C=n(160),M=n(18),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[t.useraccess&&"7"==t.useraccess||"admin"==t.useraccess?n("div",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{sm12:""}},[n("h3",[t._v("7.1.6 Green campus initiatives of the Institution include:")]),t._v(" "),n("br"),t._v(" "),n("v-divider",{attrs:{inset:""}})],1),t._v(" "),n("v-flex",{attrs:{lg12:""}},[n("v-card",[n("v-toolbar",{attrs:{color:"success",dark:"",flat:"",dense:"",cad:""}},[n("v-toolbar-title",{staticClass:"subheading"},[t._v("Upload:")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-divider")],1),t._v(" "),n("v-card-text",{},[n("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-checkbox",{attrs:{label:"Restricted entry of automobiles"},model:{value:t.formModel.checkbox1,callback:function(e){t.$set(t.formModel,"checkbox1",e)},expression:"formModel.checkbox1"}}),t._v(" "),n("v-checkbox",{attrs:{label:"Battery-powered vehicles"},model:{value:t.formModel.checkbox2,callback:function(e){t.$set(t.formModel,"checkbox2",e)},expression:"formModel.checkbox2"}}),t._v(" "),n("v-checkbox",{attrs:{label:"Pedestrian-friendly pathways"},model:{value:t.formModel.checkbox3,callback:function(e){t.$set(t.formModel,"checkbox3",e)},expression:"formModel.checkbox3"}}),t._v(" "),n("v-checkbox",{attrs:{label:"Ban on the use of Plastics"},model:{value:t.formModel.checkbox4,callback:function(e){t.$set(t.formModel,"checkbox4",e)},expression:"formModel.checkbox4"}}),t._v(" "),n("v-checkbox",{attrs:{label:"Landscaping with trees and plants"},model:{value:t.formModel.checkbox5,callback:function(e){t.$set(t.formModel,"checkbox5",e)},expression:"formModel.checkbox5"}}),t._v(" "),n("h3",[t._v("Geotagged photographs/ videos of the facilities")]),t._v(" "),n("file-select",{model:{value:t.file1,callback:function(e){t.file1=e},expression:"file1"}}),t._v(" "),n("br"),t._v(" "),n("h3",[t._v("Geotagged photo Code of conduct or visitor instruction displayed in the institution")]),t._v(" "),n("file-select",{model:{value:t.file2,callback:function(e){t.file2=e},expression:"file2"}}),t._v(" "),n("br"),t._v(" "),n("v-text-field",{attrs:{label:"Any other relevant info",name:"info","error-messages":t.errors.collect("desc")},model:{value:t.formModel.info,callback:function(e){t.$set(t.formModel,"info",e)},expression:"formModel.info"}}),t._v(" "),n("h3",[t._v("Reports to be uploaded")]),t._v(" "),n("file-select",{model:{value:t.file3,callback:function(e){t.file3=e},expression:"file3"}}),t._v(" "),n("br"),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticClass:"form-btn"},[n("v-btn",{attrs:{outline:"",color:"primary"},on:{click:t.submit}},[t._v("Submit")]),t._v(" "),n("v-btn",{attrs:{outline:""},on:{click:t.clear}},[t._v("Clear")])],1)],1)],1)],1)],1)],1)],1):n("div",[n("h1",[t._v("locked")])])])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:h.a,VCard:d.a,VCardText:f.b,VCheckbox:v.a,VContainer:m.a,VDivider:x.a,VFlex:_.a,VForm:k.a,VLayout:y.a,VSpacer:V.a,VTextField:w.a,VToolbar:C.a,VToolbarTitle:M.a})}}]);