(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8d9fdae4"],{"08d3":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stock-detail"},[a("div",{staticClass:"row1"},[a("div",{staticClass:"row1-col1"},[a("div",{class:{red:Number(t.data.quoteChangePercent)>0,green:Number(t.data.quoteChangePercent)<0,gray:0===Number(t.data.quoteChangePercent),bignum:!0}},[t._v(t._s(t.data.price))]),a("div",{class:{red:Number(t.data.quoteChangePercent)>0,green:Number(t.data.quoteChangePercent)<0,gray:0===Number(t.data.quoteChangePercent),bignum:!0}},[a("span",{staticStyle:{"padding-right":"8px"}},[t._v(t._s(t.data.quoteChangePercent)+"%")]),a("span",[t._v(t._s(t.data.quoteChangeAmount))])])]),a("div",{staticClass:"row1-col2"},[a("div",{staticClass:"row1-col2-row1"},[a("span",[t._v("今开：")]),a("span",{class:{red:Number(t.data.quoteChangePercent)>0,green:Number(t.data.quoteChangePercent)<0,gray:0===Number(t.data.quoteChangePercent)}},[t._v(t._s(t.data.openPrice))]),a("span",{staticStyle:{"padding-left":"5px"}},[t._v("最高：")]),a("span",{class:{red:Number(t.data.quoteChangePercent)>0,green:Number(t.data.quoteChangePercent)<0,gray:0===Number(t.data.quoteChangePercent)}},[t._v(t._s(t.data.highest))])]),a("div",{staticClass:"row1-col2-row1"},[a("span",[t._v("最低：")]),a("span",{class:{red:Number(t.data.quoteChangePercent)>0,green:Number(t.data.quoteChangePercent)<0,gray:0===Number(t.data.quoteChangePercent)}},[t._v(t._s(t.data.lowest)+" ")]),a("span",[t._v("换手率：")]),a("span",[t._v(t._s(t.data.turnoverRate)+"%")])]),a("div",{staticClass:"row1-col2-row1"},[a("span",[t._v("成交量:")]),a("span",[t._v(t._s(t.data.tradeover)+" "),a("span",{staticStyle:{"font-size":"1px"}},[t._v(t._s(t.data.tradeoverUnit)+" ")])]),a("span",[t._v("成交额：")]),a("span",[t._v(t._s(t.data.tradeVolume)),a("span",{staticStyle:{"font-size":"1px"}},[t._v(t._s(t.data.tradeVolumeUnit))])])])])]),a("div",{staticClass:"row2"},[a("a-tabs",{attrs:{"default-active-key":"2",size:"small"}},[a("a-tab-pane",{key:"1",attrs:{tab:"分时"}},[a("div",{staticClass:"chart"},[a("img",{ref:"img",attrs:{src:t.minute_img_src,width:"100%"}})])]),a("a-tab-pane",{key:"2",attrs:{tab:"日K"}},[a("div",{staticClass:"stock"},[a("div",{staticClass:"chart"},[a("img",{ref:"img",attrs:{src:t.day_month_img_src,width:"100%"}})])])]),a("a-tab-pane",{key:"3",attrs:{tab:"日K(1季)"}},[a("div",{staticClass:"longhu"},[a("div",{staticClass:"chart"},[a("img",{ref:"img",attrs:{src:t.season_img_src,width:"100%"}})])])]),a("a-tab-pane",{key:"4",attrs:{tab:"日K(半年)"}},[a("div",{staticClass:"longhu"},[a("div",{staticClass:"chart"},[a("img",{ref:"img",attrs:{src:t.half_year_img_src,width:"100%"}})])])]),a("a-tab-pane",{key:"5",attrs:{tab:"周K"}},[a("div",{staticClass:"longhu"},[a("div",{staticClass:"chart"},[a("img",{ref:"img",attrs:{src:t.week_img_src,width:"100%"}})])])]),a("a-tab-pane",{key:"6",attrs:{tab:"月K"}},[a("div",{staticClass:"longhu"},[a("div",{staticClass:"chart"},[a("img",{ref:"img",attrs:{src:t.month_img_src,width:"100%"}})])])])],1)],1)])},n=[],r=(a("b0c0"),a("d3b7"),{name:"特力A",market:"SZ",code:"000025",price:22.08,quoteChangePercent:10.01,quoteChangeAmount:2.01,totalValue:89,totalValueUnit:"亿",circulationValue:81,circulationValueUnit:"亿",mainBusiness:"汽车销售",openPrice:"0.00",highest:"1.00",lowest:"0.00",turnoverRate:"0.00",tradeover:"10",tradeoverUnit:"万手",tradeVolume:"0.00",tradeVolumeUnit:"亿"}),i=(a("506d"),a("3dfd")),c={data:function(){return{data:r,minute_img_src:"http://img1.money.126.net/chart/hs/time/540x360/1002277.png",day_month_img_src:"http://img1.money.126.net/chart/hs/kline/day/30/1002277.png",season_img_src:"http://img1.money.126.net/chart/hs/kline/day/90/1002277.png",half_year_img_src:"http://img1.money.126.net/chart/hs/kline/day/180/1002277.png",week_img_src:"http://img1.money.126.net/chart/hs/kline/week/1002277.png",month_img_src:"http://img1.money.126.net/chart/hs/kline/month/1002277.png",html_src:"http://m.money.163.com/stock/1002277.html?from=singlemessage&isappinstalled=0"}},activated:function(){var t=this,e=this.$route.params.id,a="/api/stockDetail/stockDetail.do?stockCode="+e;null!=this.$route.query.stockSource&&(a=a+"&stockSource="+this.$route.query.stockSource);var s=i["a"].baseUrl;fetch(s+a).then((function(t){return t.json()})).then((function(e){t.data=e.obj,t.$emit("title",t.data.name+" "+t.data.market+":"+t.data.code);var a=0;"SZ"==e.obj.market&&(a=1),t.minute_img_src="http://img1.money.126.net/chart/hs/time/540x360/"+a+e.obj.code+".png",t.day_month_img_src="http://img1.money.126.net/chart/hs/kline/day/30/"+a+e.obj.code+".png",t.season_img_src="http://img1.money.126.net/chart/hs/kline/day/90/"+a+e.obj.code+".png",t.half_year_img_src="http://img1.money.126.net/chart/hs/kline/day/180/"+a+e.obj.code+".png",t.week_img_src="http://img1.money.126.net/chart/hs/kline/week/"+a+e.obj.code+".png",t.month_img_src="http://img1.money.126.net/chart/hs/kline/month/"+a+e.obj.code+".png"}))},mounted:function(){},methods:{}},o=c,d=(a("6ae2"),a("2877")),h=Object(d["a"])(o,s,n,!1,null,"17519270",null);e["default"]=h.exports},"506d":function(t,e,a){"use strict";a("a434"),a("d3b7"),a("ddb0");var s="#ec0000",n="#8A0000",r="#00da3c",i="#008F28",c=o([["2013/1/24",2320.26,2320.26,2287.3,2362.94],["2013/1/25",2300,2291.3,2288.26,2308.38],["2013/1/28",2295.35,2346.5,2295.35,2346.92],["2013/1/29",2347.22,2358.98,2337.35,2363.8],["2013/1/30",2360.75,2382.48,2347.89,2383.76],["2013/1/31",2383.43,2385.42,2371.23,2391.82],["2013/2/1",2377.41,2419.02,2369.57,2421.15],["2013/2/4",2425.92,2428.15,2417.58,2440.38],["2013/2/5",2411,2433.13,2403.3,2437.42],["2013/2/6",2432.68,2434.48,2427.7,2441.73],["2013/2/7",2430.69,2418.53,2394.22,2433.89],["2013/2/8",2416.62,2432.4,2414.4,2443.03],["2013/2/18",2441.91,2421.56,2415.43,2444.8],["2013/2/19",2420.26,2382.91,2373.53,2427.07],["2013/2/20",2383.49,2397.18,2370.61,2397.94],["2013/2/21",2378.82,2325.95,2309.17,2378.82],["2013/2/22",2322.94,2314.16,2308.76,2330.88],["2013/2/25",2320.62,2325.82,2315.01,2338.78],["2013/2/26",2313.74,2293.34,2289.89,2340.71],["2013/2/27",2297.77,2313.22,2292.03,2324.63],["2013/2/28",2322.32,2365.59,2308.92,2366.16],["2013/3/1",2364.54,2359.51,2330.86,2369.65],["2013/3/4",2332.08,2273.4,2259.25,2333.54],["2013/3/5",2274.81,2326.31,2270.1,2328.14],["2013/3/6",2333.61,2347.18,2321.6,2351.44],["2013/3/7",2340.44,2324.29,2304.27,2352.02],["2013/3/8",2326.42,2318.61,2314.59,2333.67],["2013/3/11",2314.68,2310.59,2296.58,2320.96],["2013/3/12",2309.16,2286.6,2264.83,2333.29],["2013/3/13",2282.17,2263.97,2253.25,2286.33],["2013/3/14",2255.77,2270.28,2253.31,2276.22],["2013/3/15",2269.31,2278.4,2250,2312.08],["2013/3/18",2267.29,2240.02,2239.21,2276.05],["2013/3/19",2244.26,2257.43,2232.02,2261.31],["2013/3/20",2257.74,2317.37,2257.42,2317.86],["2013/3/21",2318.21,2324.24,2311.6,2330.81],["2013/3/22",2321.4,2328.28,2314.97,2332],["2013/3/25",2334.74,2326.72,2319.91,2344.89],["2013/3/26",2318.58,2297.67,2281.12,2319.99],["2013/3/27",2299.38,2301.26,2289,2323.48],["2013/3/28",2273.55,2236.3,2232.91,2273.55],["2013/3/29",2238.49,2236.62,2228.81,2246.87],["2013/4/1",2229.46,2234.4,2227.31,2243.95],["2013/4/2",2234.9,2227.74,2220.44,2253.42],["2013/4/3",2232.69,2225.29,2217.25,2241.34],["2013/4/8",2196.24,2211.59,2180.67,2212.59],["2013/4/9",2215.47,2225.77,2215.47,2234.73],["2013/4/10",2224.93,2226.13,2212.56,2233.04],["2013/4/11",2236.98,2219.55,2217.26,2242.48],["2013/4/12",2218.09,2206.78,2204.44,2226.26],["2013/4/15",2199.91,2181.94,2177.39,2204.99],["2013/4/16",2169.63,2194.85,2165.78,2196.43],["2013/4/17",2195.03,2193.8,2178.47,2197.51],["2013/4/18",2181.82,2197.6,2175.44,2206.03],["2013/4/19",2201.12,2244.64,2200.58,2250.11],["2013/4/22",2236.4,2242.17,2232.26,2245.12],["2013/4/23",2242.62,2184.54,2182.81,2242.62],["2013/4/24",2187.35,2218.32,2184.11,2226.12],["2013/4/25",2213.19,2199.31,2191.85,2224.63],["2013/4/26",2203.89,2177.91,2173.86,2210.58],["2013/5/2",2170.78,2174.12,2161.14,2179.65],["2013/5/3",2179.05,2205.5,2179.05,2222.81],["2013/5/6",2212.5,2231.17,2212.5,2236.07],["2013/5/7",2227.86,2235.57,2219.44,2240.26],["2013/5/8",2242.39,2246.3,2235.42,2255.21],["2013/5/9",2246.96,2232.97,2221.38,2247.86],["2013/5/10",2228.82,2246.83,2225.81,2247.67],["2013/5/13",2247.68,2241.92,2231.36,2250.85],["2013/5/14",2238.9,2217.01,2205.87,2239.93],["2013/5/15",2217.09,2224.8,2213.58,2225.19],["2013/5/16",2221.34,2251.81,2210.77,2252.87],["2013/5/17",2249.81,2282.87,2248.41,2288.09],["2013/5/20",2286.33,2299.99,2281.9,2309.39],["2013/5/21",2297.11,2305.11,2290.12,2305.3],["2013/5/22",2303.75,2302.4,2292.43,2314.18],["2013/5/23",2293.81,2275.67,2274.1,2304.95],["2013/5/24",2281.45,2288.53,2270.25,2292.59],["2013/5/27",2286.66,2293.08,2283.94,2301.7],["2013/5/28",2293.4,2321.32,2281.47,2322.1],["2013/5/29",2323.54,2324.02,2321.17,2334.33],["2013/5/30",2316.25,2317.75,2310.49,2325.72],["2013/5/31",2320.74,2300.59,2299.37,2325.53],["2013/6/3",2300.21,2299.25,2294.11,2313.43],["2013/6/4",2297.1,2272.42,2264.76,2297.1],["2013/6/5",2270.71,2270.93,2260.87,2276.86],["2013/6/6",2264.43,2242.11,2240.07,2266.69],["2013/6/7",2242.26,2210.9,2205.07,2250.63],["2013/6/13",2190.1,2148.35,2126.22,2190.1]]);function o(t){for(var e=[],a=[],s=0;s<t.length;s++)e.push(t[s].splice(0,1)[0]),a.push(t[s]);return{categoryData:e,values:a}}function d(t){for(var e=[],a=0,s=c.values.length;a<s;a++)if(a<t)e.push("-");else{for(var n=0,r=0;r<t;r++)n+=c.values[a-r][1];e.push(n/t)}return e}c.categoryData,c.values,d(5),d(10),d(20),d(30)},"6ae2":function(t,e,a){"use strict";var s=a("ae94"),n=a.n(s);n.a},a434:function(t,e,a){"use strict";var s=a("23e7"),n=a("23cb"),r=a("a691"),i=a("50c4"),c=a("7b0b"),o=a("65f0"),d=a("8418"),h=a("1dde"),m=a("ae40"),l=h("splice"),u=m("splice",{ACCESSORS:!0,0:0,1:2}),g=Math.max,p=Math.min,_=9007199254740991,v="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!l||!u},{splice:function(t,e){var a,s,h,m,l,u,b=c(this),f=i(b.length),y=n(t,f),C=arguments.length;if(0===C?a=s=0:1===C?(a=0,s=f-y):(a=C-2,s=p(g(r(e),0),f-y)),f+a-s>_)throw TypeError(v);for(h=o(b,s),m=0;m<s;m++)l=y+m,l in b&&d(h,m,b[l]);if(h.length=s,a<s){for(m=y;m<f-s;m++)l=m+s,u=m+a,l in b?b[u]=b[l]:delete b[u];for(m=f;m>f-s+a;m--)delete b[m-1]}else if(a>s)for(m=f-s;m>y;m--)l=m+s-1,u=m+a-1,l in b?b[u]=b[l]:delete b[u];for(m=0;m<a;m++)b[m+y]=arguments[m+2];return b.length=f-s+a,h}})},ae94:function(t,e,a){}}]);
//# sourceMappingURL=chunk-8d9fdae4.ddd8e4d0.js.map