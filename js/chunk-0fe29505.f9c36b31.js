(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fe29505"],{"695f":function(e,t,n){"use strict";var s=n("fb47"),a=n.n(s);a.a},"70e5":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"hold-ranking"}},[n("div",{staticClass:"search"},[n("a-input-search",{ref:"searchInput",attrs:{size:"large",placeholder:" 牛散、基金、机构名称"},on:{keyup:function(t){return e.whenInput(t)},blur:function(t){return e.closeHintsBox()},search:e.handleZhenguClick},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}},[n("a-icon",{staticClass:"class1",attrs:{slot:"prefix",type:"search"},slot:"prefix"}),n("a-button",{attrs:{slot:"enterButton",type:"primary"},slot:"enterButton"},[e._v(" 搜索 ")])],1),n("span",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{searchkeyCode:e.searchkeyCode}}),n("span",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{searchkeyCode:e.sharehdtype}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.searchCauseError,expression:"searchCauseError"}],staticClass:"searchCauseError"},[n("span",{staticClass:"red class2"},[e._v(e._s(e.errorMessage))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showHintsBox,expression:"showHintsBox"}],staticClass:"hintsbox ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft"},[n("div",{staticClass:"ant-select-dropdown-content",staticStyle:{overflow:"auto",transform:"translateZ(0px)"},attrs:{tabindex:"-1"}},[n("ul",{staticClass:"hintslist ant-select-dropdown-menu ant-select-dropdown-menu-vertical ant-select-dropdown-menu-root"},e._l(e.hints,(function(t,s){return n("li",{key:t.code+t.name,ref:"hint",refInFor:!0,staticClass:"hint ant-select-dropdown-menu-item",on:{click:function(t){return e.fillInput(s)}}},[n("span",[e._v(e._s(t.name))]),n("span",{staticStyle:{display:"none"}},[e._v(e._s(t.code))]),n("span",{staticStyle:{display:"none"}},[e._v(e._s(t.sharehdtype))])])})),0)])])],1),n("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.handleInfiniteOnLoad,expression:"handleInfiniteOnLoad"}],staticClass:"demo-infinite-container",attrs:{"infinite-scroll-disabled":e.busy,"infinite-scroll-distance":10}},[n("a-table",{attrs:{pagination:!1,columns:e.table_columns,"data-source":e.table_data,customRow:e.ReviewClick,rowKey:"id"},scopedSlots:e._u([{key:"rank",fn:function(t){return n("div",{},[n("div",{staticClass:"content-sort"},[e._v(e._s(t))])])}},{key:"name",fn:function(t){return n("div",{},[n("div",{staticClass:"bigtxt"},[e._v(e._s(t))])])}},{key:"total",fn:function(t){return n("div",{},[n("div",{staticClass:"bigtxt"},[e._v(e._s(t))])])}},{key:"code",fn:function(t){return n("div",{},[n("div",{staticClass:"content-btn2-text"},[e._v("查看")])])}}])}),e.loading&&!e.busy?n("div",{staticClass:"demo-loading-container"},[n("a-spin")],1):e._e(),n("div",{directives:[{name:"show",rawName:"v-show",value:e.alreadyBottom,expression:"alreadyBottom"}],staticStyle:{"text-align":"center"}},[e._v("到底啦")])],1)])},a=[],o=(n("99af"),n("b0c0"),n("d3b7"),[{id:0,name:"2020-10-11",total:"复盘总结"},{id:1,name:"2020-10-11",total:"复盘总结"},{id:2,name:"2020-10-11",total:"复盘总结"},{id:3,name:"2020-10-11",total:"复盘总结"},{id:4,name:"2020-10-11",total:"复盘总结"},{id:5,name:"2020-10-11",total:"复盘总结"}]),r=n("3dfd"),i={data:function(){return{searchKey:"",searchkeyCode:"",sharehdtype:"",hints:[],searchCauseError:!1,errorMessage:"请输入牛散、基金、机构名称",searchSelect:!1,showHintsBox:!1,activeNo:-1,alreadyBottom:!1,loading:!1,busy:!1,table_data:o,current_page:0,totalPage:1,table_columns:[{title:"排名",dataIndex:"rank",key:"rank",scopedSlots:{customRender:"rank"},width:110,align:"center"},{title:"代码名称",dataIndex:"name",key:"name",scopedSlots:{customRender:"name"},width:110,align:"center"},{title:"数量",dataIndex:"total",key:"total",scopedSlots:{customRender:"total"},align:"center"},{title:"操作",dataIndex:"code",key:"code",scopedSlots:{customRender:"code"},align:"center"}],listData:[{name:"吕强(100只)吕强(100只)吕强(100只)吕强(100只)",btn:"解锁"},{name:"吕强(100只)",btn:"解锁"},{name:"吕强(100只)",btn:"查看"},{name:"吕强(100只)",btn:"解锁"},{name:"吕强(100只)",btn:"解锁"},{name:"吕强(100只)吕强(100只)吕强(100只)吕强(100只)",btn:"解锁"},{name:"吕强(100只)",btn:"解锁"},{name:"吕强(100只)",btn:"查看"},{name:"吕强(100只)",btn:"解锁"},{name:"吕强(100只)",btn:"解锁"},{name:"吕强(100只)吕强(100只)吕强(100只)吕强(100只)",btn:"解锁"},{name:"吕强(100只)",btn:"解锁"},{name:"吕强(100只)",btn:"查看"},{name:"吕强(100只)",btn:"解锁"},{name:"吕强(100只)",btn:"解锁"},{name:"吕强(100只)吕强(100只)吕强(100只)吕强(100只)",btn:"解锁"},{name:"吕强(100只)",btn:"解锁"},{name:"吕强(100只)",btn:"查看"},{name:"吕强(100只)",btn:"解锁"},{name:"吕强(100只)",btn:"解锁"}]}},activated:function(){var e=this.$route.query;null!=e&&null!=e.sharehdtype&&"undefined"!=e.sharehdtype&&("1"==e.sharehdtype?(document.title="牛散最新持股排名",this.$emit("title",document.title),console.log("1")):"2"==e.sharehdtype&&(document.title="基金最新持股排名",this.$emit("title",document.title),console.log("2"))),this.current_page=0,this.table_data=[],console.log("hold-ranking activated","busy",this.busy,"current_page",this.current_page),this.handleInfiniteOnLoad()},methods:{handleInfiniteOnLoad:function(){var e=this;console.log("hold-ranking handleInfiniteOnLoad",this.busy);var t=this.$route.query,n=r["a"].baseUrl+"/api/holder/countHolder.do?pageSize=50&groupKey=sharehdname";null!=t&&null!=t.sharehdtype&&"undefined"!=t.sharehdtype?n+="&sharehdtype="+t.sharehdtype:n+="&sharehdtype=1";var s=this.table_data;this.loading=!0;var a=this.current_page+1;console.log(n+="&pageNo="+a),fetch(n+="&pageNo="+a).then((function(e){return e.json()})).then((function(t){a<=t.totalPage?(e.table_data=s.concat(t.rows),e.loading=!1,e.current_page=t.pageNo,e.totalPage=t.totalPage):(console.log(t.pageNo+"--"+t.totalPage),e.loading=!1,e.alreadyBottom=!0)}))},ReviewClick:function(e,t){var n=this;return{on:{click:function(){var t=n.$route.query;console.log(n.$route.query),null!=t&&null!=t.sharehdtype&&"undefined"!=t.sharehdtype?n.$router.push({path:"new_stakes",query:{sharehdcode:e.code,sharehdtype:t.sharehdtype}}):n.$router.push({path:"new_stakes",query:{sharehdcode:e.code}})}}}},holderReview:function(e){var t=this.$route.query;null!=t&&null!=t.sharehdtype&&"undefined"!=t.sharehdtype?this.$router.push({path:"new_stakes",query:{sharehdcode:e,sharehdtype:t.sharehdtype}}):this.$router.push({path:"new_stakes",query:{sharehdcode:e}})},handleZhenguClick:function(){var e=this.searchkeyCode,t=this.sharehdtype;return console.log("code===",e,"sharehdtype=",t),""==e||"undefined"==typeof e?(this.$refs.searchInput.focus(),this.errorMessage="请输入牛散、基金、机构名称",void(this.searchCauseError=!0)):this.searchCauseError?(this.$refs.searchInput.focus(),void(this.searchCauseError=!1)):this.searchSelect?(console.log(e),void this.$router.push({path:"new_stakes",query:{sharehdcode:e,sharehdtype:t}})):(this.searchCauseError=!0,this.$refs.searchInput.focus(),void(this.errorMessage="请选择搜索结果中匹配中的牛散/基金/机构名称"))},whenInput:function(e){var t=this.hints.length;return 40==e.keyCode?this.activeNo>=t-1?void console.log("到底了"):void this.activeNo++:38==e.keyCode?this.activeNo<=0?void console.log("到顶了"):void this.activeNo--:(13==e.keyCode&&this.fillInput(this.activeNo),void(this.searchKey?38!==e.keyCode&&40!==e.keyCode&&13!==e.keyCode&&this.getHintsList():this.closeHintsBox()))},getHintsList:function(){var e=this,t=r["a"].baseUrl;fetch(t+"/api/holder/stockCodeFuzzy.do?sharehdname="+this.searchKey).then((function(e){return e.json()})).then((function(t){null==t.obj?(e.searchCauseError=!0,e.$refs.searchInput.focus(),e.errorMessage="请输入正确的牛散/基金/机构名称"):1!=t.obj.length||e.searchKey!=t.obj[0].code&&e.searchKey!=t.obj[0].name?(e.searchCauseError=!1,e.searchSelect=!1):(e.searchCauseError=!1,e.searchSelect=!0),e.hints=t.obj||[],console.log("hints=",e.hints)})),this.showHintsBox=!0,this.hotSearchShow=!1},fillInput:function(e){console.log("fillInput=",e,",",this.hints[e]),this.searchKey=this.hints[e].name,this.searchkeyCode=this.hints[e].code,this.sharehdtype=this.hints[e].sharehdtype,this.showHintsBox=!1,this.searchSelect=!0,this.closeHintsBox()},closeHintsBox:function(){var e=this;setTimeout((function(){e.showHintsBox=!1,e.activeNo=-1}),280)}}},h=i,c=(n("695f"),n("2877")),l=Object(c["a"])(h,s,a,!1,null,"bfdebd74",null);t["default"]=l.exports},"99af":function(e,t,n){"use strict";var s=n("23e7"),a=n("d039"),o=n("e8b5"),r=n("861d"),i=n("7b0b"),h=n("50c4"),c=n("8418"),l=n("65f0"),d=n("1dde"),u=n("b622"),p=n("2d00"),f=u("isConcatSpreadable"),y=9007199254740991,v="Maximum allowed index exceeded",m=p>=51||!a((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),b=d("concat"),g=function(e){if(!r(e))return!1;var t=e[f];return void 0!==t?!!t:o(e)},w=!m||!b;s({target:"Array",proto:!0,forced:w},{concat:function(e){var t,n,s,a,o,r=i(this),d=l(r,0),u=0;for(t=-1,s=arguments.length;t<s;t++)if(o=-1===t?r:arguments[t],g(o)){if(a=h(o.length),u+a>y)throw TypeError(v);for(n=0;n<a;n++,u++)n in o&&c(d,u,o[n])}else{if(u>=y)throw TypeError(v);c(d,u++,o)}return d.length=u,d}})},fb47:function(e,t,n){}}]);
//# sourceMappingURL=chunk-0fe29505.f9c36b31.js.map