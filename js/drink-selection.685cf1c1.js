(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["drink-selection"],{"15ad":function(e,t,r){"use strict";r("a716")},a716:function(e,t,r){},fcd9:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("c-input",{attrs:{label:"Search your drink"},model:{value:e.searchTerm,callback:function(t){e.searchTerm=t},expression:"searchTerm"}}),r("c-items-picker",{attrs:{list:e.filteredList},on:{onItemChosen:function(t){return e.handleChosenItem(t)}}}),r("div",{staticClass:"actions-container"},[r("c-button",{on:{click:e.back}},[e._v("Back")]),r("c-button",{attrs:{disabled:!e.newOrder.items.length},on:{click:e.next}},[e._v("Next")])],1)],1)},s=[],c=(r("4de4"),r("caad"),r("b0c0"),r("2532"),r("2909")),i=r("5530"),o=r("2f62"),a=r("7c9e"),u=r("a597"),d=r("cbdb"),h={name:"ItemSelection",components:{CItemsPicker:a["a"],CButton:u["a"],CInput:d["a"]},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(o["b"])("restaurantMenu",["drinkList"])),Object(o["c"])("order",["newOrder"])),{},{filteredList:function(){var e=this,t=Object(c["a"])(this.drinkList),r=t.sort((function(e,t){return e.name.localeCompare(t.name)}));return this.searchTerm?r.filter((function(t){var r=t.name.toLowerCase();return r.includes(e.searchTerm.toLowerCase())})):r}}),data:function(){return{searchTerm:""}},created:function(){this.newOrder.customerIdentification?(this.$store.commit("order/setCurrentStep","Choose your drinks"),this.drinkList.length||this.$store.dispatch("restaurantMenu/get")):this.$router.push("/order/customer")},methods:{handleChosenItem:function(e){this.$store.commit("order/setItem",e),this.$store.commit("restaurantMenu/setItemSelected",{itemId:e.id,selected:!0})},next:function(){this.newOrder.items.length&&this.$router.push("/order/payment")},back:function(){this.$router.push("/order/food")}}},m=h,l=(r("15ad"),r("2877")),f=Object(l["a"])(m,n,s,!1,null,"7e84c436",null);t["default"]=f.exports}}]);
//# sourceMappingURL=drink-selection.685cf1c1.js.map