(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["drink-selection~food-selection"],{"01e1":function(t,e,n){},"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("a630"),n("fb6a"),n("b0c0"),n("d3b7"),n("25f0"),n("3ca3");var i=n("6b75");function r(t,e){if(t){if("string"===typeof t)return Object(i["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(i["a"])(t,e):void 0}}},"25f0":function(t,e,n){"use strict";var i=n("6eeb"),r=n("825a"),a=n("d039"),o=n("ad6d"),c="toString",s=RegExp.prototype,l=s[c],u=a((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=c;(u||d)&&i(RegExp.prototype,c,(function(){var t=r(this),e=String(t.source),n=t.flags,i=String(void 0===n&&t instanceof RegExp&&!("flags"in s)?o.call(t):n);return"/"+e+"/"+i}),{unsafe:!0})},2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("6b75");function r(t){if(Array.isArray(t))return Object(i["a"])(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0");function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var o=n("06c5");function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t){return r(t)||a(t)||Object(o["a"])(t)||c()}},"3ca3":function(t,e,n){"use strict";var i=n("6547").charAt,r=n("69f3"),a=n("7dd0"),o="String Iterator",c=r.set,s=r.getterFor(o);a(String,"String",(function(t){c(this,{type:o,string:String(t),index:0})}),(function(){var t,e=s(this),n=e.string,r=e.index;return r>=n.length?{value:void 0,done:!0}:(t=i(n,r),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,n){"use strict";var i=n("0366"),r=n("7b0b"),a=n("9bdd"),o=n("e95a"),c=n("50c4"),s=n("8418"),l=n("35a1");t.exports=function(t){var e,n,u,d,f,m,p=r(t),v="function"==typeof this?this:Array,h=arguments.length,b=h>1?arguments[1]:void 0,y=void 0!==b,_=l(p),g=0;if(y&&(b=i(b,h>2?arguments[2]:void 0,2)),void 0==_||v==Array&&o(_))for(e=c(p.length),n=new v(e);e>g;g++)m=y?b(p[g],g):p[g],s(n,g,m);else for(d=_.call(p),f=d.next,n=new v;!(u=f.call(d)).done;g++)m=y?a(d,b,[u.value,g],!0):u.value,s(n,g,m);return n.length=g,n}},"6b75":function(t,e,n){"use strict";function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}n.d(e,"a",(function(){return i}))},"71e7":function(t,e,n){"use strict";n("01e1")},7376:function(t,e,n){"use strict";n("fe9a")},"7c9e":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"cards-container"},t._l(t.list,(function(e){return n("c-restaurant-item",{key:e.id,attrs:{item:e,selected:e.selected},on:{click:function(e){return t.handleItemClick(e)}}})})),1),n("c-restaurant-item-checkout",{attrs:{show:t.showItemCheckout,item:t.selectedItem},on:{onCancel:t.closeItemCheckout,onItemConfirm:function(e){return t.handleChosenItem(e)}}})],1)},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("c-card",{class:{selected:t.selected},attrs:{clickable:""},nativeOn:{click:function(e){return t.handleClick(e)}}},[n("p",[t._v(t._s(t.item.name))]),n("p",[t._v(t._s(t.item.description))]),t.item.quantity?n("p",[t._v("Quantity: "+t._s(t.item.quantity))]):t._e(),n("p",[t._v(t._s(t._f("currency")(t.item.price)))])])},o=[],c=n("a13c"),s={name:"CRestaurantItem",components:{CCard:c["a"]},props:{item:{type:Object,required:!0,default:function(){}},selected:{type:Boolean,default:!1}},methods:{handleClick:function(){this.$emit("click",this.item)}}},l=s,u=(n("c6cc"),n("2877")),d=Object(u["a"])(l,a,o,!1,null,"0b0afb3b",null),f=d.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[t.show?n("div",{staticClass:"modal"},[n("div",{staticClass:"modal__background",on:{click:t.cancel}}),n("div",{staticClass:"modal__body"},[n("close-icon",{staticClass:"modal__close-icon",on:{click:t.cancel}}),n("h1",[t._v(t._s(t.item.name))]),t.item.description?n("p",[t._v(t._s(t.item.description))]):t._e(),n("p",[t._v("Price: "+t._s(t._f("currency")(t.price)))]),n("c-input",{attrs:{autofocus:"",min:"1",label:"Quantity",type:"number"},model:{value:t.quantity,callback:function(e){t.quantity=t._n(e)},expression:"quantity"}}),n("c-button",{attrs:{disabled:!t.quantity},on:{click:t.confirm}},[t._v("Confirm")])],1)]):t._e()])},p=[],v=n("5530"),h=n("a597"),b=n("cbdb"),y=function(t,e){var n=e._c;return n("span",e._g(e._b({staticClass:"material-design-icon close-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[n("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}},[n("title",[e._v(e._s(e.props.title))])])])])},_=[],g=(n("a9e3"),{name:"CloseIcon",props:{title:{type:String,default:"Close icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}),C=g,k=Object(u["a"])(C,y,_,!0,null,null,null),I=k.exports,$={name:"CRestaurantItemCheckout",components:{CButton:h["a"],CInput:b["a"],CloseIcon:I},computed:{price:function(){return this.item.price*this.quantity}},data:function(){return{quantity:1}},props:{item:{type:Object,default:function(){}},show:{type:Boolean,default:!1}},methods:{confirm:function(){var t=this.item,e=this.quantity,n=this.price;this.$emit("onItemConfirm",Object(v["a"])(Object(v["a"])({},t),{},{quantity:e,price:n})),this.quantity=1},cancel:function(){this.$emit("onCancel")}}},w=$,S=(n("bbd4"),Object(u["a"])(w,m,p,!1,null,"35fb99ba",null)),x=S.exports,O={name:"CItemsPicker",components:{CRestaurantItem:f,CRestaurantItemCheckout:x},props:{list:{type:Array,default:function(){return[]}}},data:function(){return{showItemCheckout:!1,selectedItem:{},chosenItems:[]}},methods:{handleItemClick:function(t){this.selectedItem=t,this.showItemCheckout=!0},closeItemCheckout:function(){this.selectedItem={},this.showItemCheckout=!1},handleChosenItem:function(t){this.$emit("onItemChosen",t),this.closeItemCheckout()}}},j=O,A=(n("7376"),Object(u["a"])(j,i,r,!1,null,"898abf86",null));e["a"]=A.exports},9975:function(t,e,n){},"9bdd":function(t,e,n){var i=n("825a"),r=n("2a62");t.exports=function(t,e,n,a){try{return a?e(i(n)[0],n[1]):e(n)}catch(o){throw r(t),o}}},a630:function(t,e,n){var i=n("23e7"),r=n("4df4"),a=n("1c7e"),o=!a((function(t){Array.from(t)}));i({target:"Array",stat:!0,forced:o},{from:r})},b0c0:function(t,e,n){var i=n("83ab"),r=n("9bf2").f,a=Function.prototype,o=a.toString,c=/^\s*function ([^ (]*)/,s="name";i&&!(s in a)&&r(a,s,{configurable:!0,get:function(){try{return o.call(this).match(c)[1]}catch(t){return""}}})},b5a2:function(t,e,n){},bbd4:function(t,e,n){"use strict";n("9975")},c6cc:function(t,e,n){"use strict";n("b5a2")},cbdb:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["input",{"invalid-input":t.v&&t.v.$error&&t.v.$dirty}]},[n("label",{staticClass:"input__label"},[t._v(t._s(t.label))]),"checkbox"===t.$attrs.type?n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],staticClass:"input__field",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.model)?t._i(t.model,null)>-1:t.model},on:{change:function(e){var n=t.model,i=e.target,r=!!i.checked;if(Array.isArray(n)){var a=null,o=t._i(n,a);i.checked?o<0&&(t.model=n.concat([a])):o>-1&&(t.model=n.slice(0,o).concat(n.slice(o+1)))}else t.model=r}}},"input",t.$attrs,!1)):"radio"===t.$attrs.type?n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],staticClass:"input__field",attrs:{type:"radio"},domProps:{checked:t._q(t.model,null)},on:{change:function(e){t.model=null}}},"input",t.$attrs,!1)):n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],staticClass:"input__field",attrs:{type:t.$attrs.type},domProps:{value:t.model},on:{input:function(e){e.target.composing||(t.model=e.target.value)}}},"input",t.$attrs,!1)),t.v&&t.v.$error&&t.v.$dirty?n("div",{staticClass:"input__errors"},[n("p",[t._v(" "+t._s(t.errorText)+" ")])]):t._e()])},r=[],a=(n("caad"),n("a9e3"),n("b64b"),n("2532"),{name:"CInput",props:{value:{type:[String,Number],default:""},label:{type:String,default:""},v:{type:Object,default:function(){return null}}},computed:{model:{get:function(){return this.value},set:function(t){this.v&&this.v.$touch(),this.$emit("input",t)}},errorText:function(){if(this.v){var t=Object.keys(this.v.$params).includes("required"),e=Object.keys(this.v.$params).includes("minLength"),n=Object.keys(this.v.$params).includes("isCardDateValid");return t&&!this.v.required?"Field is required":e&&!this.v.minLength?"Field size is incorrect":n&&!this.v.isCardDateValid?"Card valid date is incorrect":""}}}}),o=a,c=(n("71e7"),n("2877")),s=Object(c["a"])(o,i,r,!1,null,"ba09f08c",null);e["a"]=s.exports},d28b:function(t,e,n){var i=n("746f");i("iterator")},ddb0:function(t,e,n){var i=n("da84"),r=n("fdbc"),a=n("e260"),o=n("9112"),c=n("b622"),s=c("iterator"),l=c("toStringTag"),u=a.values;for(var d in r){var f=i[d],m=f&&f.prototype;if(m){if(m[s]!==u)try{o(m,s,u)}catch(v){m[s]=u}if(m[l]||o(m,l,d),r[d])for(var p in a)if(m[p]!==a[p])try{o(m,p,a[p])}catch(v){m[p]=a[p]}}}},e01a:function(t,e,n){"use strict";var i=n("23e7"),r=n("83ab"),a=n("da84"),o=n("5135"),c=n("861d"),s=n("9bf2").f,l=n("e893"),u=a.Symbol;if(r&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};l(f,u);var m=f.prototype=u.prototype;m.constructor=f;var p=m.toString,v="Symbol(test)"==String(u("test")),h=/^Symbol\((.*)\)[^)]+$/;s(m,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=p.call(t);if(o(d,t))return"";var n=v?e.slice(7,-1):e.replace(h,"$1");return""===n?void 0:n}}),i({global:!0,forced:!0},{Symbol:f})}},fe9a:function(t,e,n){}}]);
//# sourceMappingURL=drink-selection~food-selection.0a63cc33.js.map