(this["webpackJsonpplant-lookup"]=this["webpackJsonpplant-lookup"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(5),r=n.n(a),l=n(4),i=n.n(l),o=n(8),p=n(3),d=n(2);function u(e){return{type:"CHANGE_PLANT",payload:e}}var b=n(0),h=function(){var e=Object(d.c)((function(e){return e.plant})),t=Object(s.useState)(e),n=Object(p.a)(t,2),c=n[0],a=n[1],r=Object(d.b)();return Object(b.jsxs)("div",{className:"d-flex m-auto",style:{backgroundColor:"#EEEEEE"},children:[Object(b.jsx)("input",{className:"form-control",type:"text",value:c,placeholder:"Plant id",onChange:function(e){return a(e.target.value.trim())}}),Object(b.jsx)("button",{className:"ms-1 btn btn-primary col-3",onClick:function(){a(c),c.match("[0-2]{3}[0-9]{2}[1-3]{1}[0-9]{2}[0-9]{2,6}")?r(u(c)):r(u(""))},children:"Look up"})]})},j=n(6);var m=Object(j.a)({plant:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"2009039914",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_PLANT":return t.payload;default:return e}}}),x=Object(j.b)(m,"object"===typeof window&&"undefined"!==typeof window.__REDUX_DEVTOOLS_EXTENSION__?__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}),y=[{id:"0",element:"Fire",baseLE:[400,440,511,701],hour:"48",step:"1",type:"Plant"},{id:"1",element:"Fire",baseLE:[400,440,511,701],hour:"48",step:"1",type:"Plant"},{id:"2",element:"Ice",baseLE:[500,550,591,751],hour:"60",step:"1",type:"Plant"},{id:"3",element:"Electro",baseLE:[500,550,591,751],hour:"48",step:"1",type:"Plant"},{id:"4",element:"Water",baseLE:[950,1040,1111,1301],hour:"108",step:"1",type:"Plant"},{id:"5",element:"Water",baseLE:[950,1040,1111,1301],hour:"108",step:"1",type:"Plant"},{id:"6",element:"Ice",baseLE:[500,550,591,751],hour:"60",step:"1",type:"Plant"},{id:"7",element:"Fire",baseLE:[400,440,511,701],hour:"48",step:"1",type:"Plant"},{id:"8",element:"Electro",baseLE:[500,550,591,751],hour:"48",step:"1",type:"Plant"},{id:"9",element:"Wind",baseLE:[750,800,861,1051],hour:"72",step:"1",type:"Plant"},{id:"10",element:"Wind",baseLE:[750,800,861,1051],hour:"72",step:"1",type:"Plant"},{id:"11",element:"Parasite",baseLE:[900,950,1011,1151],hour:"120",step:"1",type:"Plant"},{id:"12",element:"Parasite",baseLE:[900,950,1011,1151],hour:"120",step:"1",type:"Plant"},{id:"13",element:"Parasite",baseLE:[900,950,1011,1151],hour:"120",step:"1",type:"Plant"},{id:"14",element:"Dark",baseLE:[1200,1840,2211,2401],hour:"192",step:"10",type:"Plant"},{id:"15",element:"Electro",baseLE:[500,550,591,751],hour:"48",step:"1",type:"Plant"},{id:"16",element:"Wind",baseLE:[900,950,1011,1151],hour:"96",step:"1",type:"Plant"},{id:"17",element:"Fire",baseLE:[650,700,811,1001],hour:"72",step:"1",type:"Plant"},{id:"18",element:"Light",baseLE:[1200,1250,1311,1401],hour:"240",step:"1",type:"Plant"},{id:"19",element:"Light",baseLE:[1200,1250,1311,1401],hour:"240",step:"1",type:"Plant"},{id:"20",element:"Light",baseLE:[1600,1650,1711,1901],hour:"312",step:"1",type:"Plant"},{id:"21",element:"Light",baseLE:[1600,1650,1711,1901],hour:"312",step:"1",type:"Plant"},{id:"22",element:"Parasite",baseLE:[1300,1350,1411,1551],hour:"168",step:"1",type:"Plant"},{id:"23",element:"Parasite",baseLE:[1300,1350,1411,1551],hour:"168",step:"1",type:"Plant"},{id:"24",element:"Parasite",baseLE:[1300,1350,1411,1551],hour:"168",step:"1",type:"Plant"},{id:"25",element:"Metal",baseLE:[3500,4240,4711,5101],hour:"336",step:"10",type:"Plant"},{id:"26",element:"Metal",baseLE:[3500,4240,4711,5101],hour:"336",step:"10",type:"Plant"},{id:"27",element:"Metal",baseLE:[5500,6340,6711,7001],hour:"480",step:"10",type:"Plant"},{id:"28",element:"Metal",baseLE:[5500,6340,6711,7001],hour:"480",step:"10",type:"Plant"},{id:"29",element:"Ice",baseLE:[800,850,911,1151],hour:"96",step:"1",type:"Plant"},{id:"30",element:"Fire",baseLE:[650,700,811,1001],hour:"72",step:"1",type:"Plant"},{id:"31",element:"Dark",baseLE:[1200,1840,2211,2401],hour:"192",step:"10",type:"Plant"},{id:"32",element:"Electro",baseLE:[650,700,811,1001],hour:"60",step:"1",type:"Plant"},{id:"33",element:"Dark",baseLE:[1400,2040,2411,2701],hour:"216",step:"10",type:"Plant"},{id:"34",element:"Electro",baseLE:[650,700,811,1001],hour:"60",step:"1",type:"Plant"},{id:"35",element:"Dark",baseLE:[1400,2040,2411,2701],hour:"216",step:"10",type:"Plant"},{id:"36",element:"Water",baseLE:[950,1040,1111,1301],hour:"108",step:"1",type:"Plant"},{id:"37",element:"Wind",baseLE:[900,950,1011,1151],hour:"96",step:"1",type:"Plant"},{id:"38",element:"Water",baseLE:[1050,1140,1211,1401],hour:"120",step:"1",type:"Plant"},{id:"39",element:"Water",baseLE:[1050,1140,1211,1401],hour:"120",step:"1",type:"Plant"},{id:"90",element:"Fire",baseLE:[750,1040,1211,1401],hour:"48",step:"5",type:"Mother tree"},{id:"91",element:"Light",baseLE:[1400,1690,1851,2021],hour:"240",step:"5",type:"Mother tree"},{id:"92",element:"Ice",baseLE:[1050,1340,1511,1701],hour:"96",step:"5",type:"Mother tree"},{id:"93",element:"Dark",baseLE:[2600,2890,3061,3201],hour:"216",step:"5",type:"Mother tree"}],O=function(e){if(59==e||88==e||98==e)return"(Most value)"},E=function(e){return Object(b.jsx)("img",{className:"w-25 h-25 me-4",src:""+"/assets/img/".concat(e.id,"_").concat(e.imgType,".png"),alt:e.id})},f=function(e){var t=Object(d.c)((function(e){return e.plant})),n=function(e){var t=e.split("");return{type:"".concat(t[0]).concat(t[1]).concat(t[2]),id:parseInt("".concat(t[3]).concat(t[4])),img:"".concat(t[5]),rarity:"".concat(t[6]).concat(t[7])}}(t),s=n.id,c=n.img,a=n.rarity,r=function(e){var t="",n="",s=0,c=parseInt(e);return c>=0&&c<=59?(s=0,t="Common",n="#198754"):c>=60&&c<=88?(s=1,t="Uncommon",n="#0d6efd"):c>=89&&c<=98?(s=2,t="Rare",n="#dc3545"):99===c&&(s=3,t="Mythic",n="#6610f2"),{rarityNum:s,rarityType:t,color:n}}(a),l=r.rarityNum,i=r.rarityType,o=r.color,p=function(e){return y.filter((function(t){return t.id==e}))[0]}(s),u=function(e,t,n,s){var c;switch(t){case 0:c=0;break;case 1:c=60;break;case 2:c=89;break;case 3:c=99}return e[t]+c+(n-c)*s}(p.baseLE,l,a,p.step),h=u/p.hour*.95,j=24*h*.95;return console.log(e.price),""===t?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("p",{className:"text-center h3 mt-4",children:"Wrong input"})}):Object(b.jsxs)("div",{className:"d-flex m-auto mt-4 justify-content-center",children:[Object(b.jsx)(E,{id:s,imgType:c}),Object(b.jsxs)("div",{className:"ms-3",children:[Object(b.jsxs)("p",{children:["Type: ",p.type]}),Object(b.jsxs)("p",{children:["Rarity: ",Object(b.jsx)("span",{style:{color:"".concat(o)},children:i})]}),Object(b.jsxs)("p",{children:["Element: ",p.element]}),Object(b.jsxs)("p",{children:["LE: ",u,"/",p.hour," hours"," ",Object(b.jsx)("span",{style:{color:"".concat(o)},children:O(a)})]}),Object(b.jsxs)("p",{children:["LE per hour: ",e.fixFunc(h,1)," -"," ",e.fixFunc(h/150,1)," PVU (~",e.fixFunc(e.price*h/150,2),"$)"]}),Object(b.jsxs)("p",{children:["LE per day: ",e.fixFunc(j,1)," -"," ",e.fixFunc(j/150,1)," PVU (~",e.fixFunc(e.price*j/150,2),"$)"]}),Object(b.jsx)("p",{children:"(include 5% tax)"})]})]})},L=function(){return Object(b.jsxs)("div",{className:"mx-auto col-12 col-md-4",style:{color:"#FFD369"},children:[Object(b.jsx)("h2",{className:"text-center",children:"Explain"}),Object(b.jsxs)("div",{className:"mt-3 ms-md-5 ps-md-5 ps-4",children:[Object(b.jsxs)("h4",{children:["Plant id:",Object(b.jsx)("span",{style:{color:"#ef476f"},children:" aaa"}),"-",Object(b.jsx)("span",{style:{color:"#ffd166"},children:"bb"}),"-",Object(b.jsx)("span",{style:{color:"#06d6a0"},children:"c"}),"-",Object(b.jsx)("span",{style:{color:"#118ab2"},children:"dd"}),"-",Object(b.jsx)("span",{style:{color:"#F0F0F0"},children:"xxxxxx"})]}),Object(b.jsxs)("ul",{className:"list-unstyled",children:[Object(b.jsx)("li",{style:{color:"#ef476f"},children:"a is type of plant (100: plant, 200: mother tree)"}),Object(b.jsx)("li",{style:{color:"#ffd166"},children:"b is plant id"}),Object(b.jsx)("li",{style:{color:"#06d6a0"},children:"c is image code of plant"}),Object(b.jsx)("li",{style:{color:"#118ab2"},children:"d is rarity (0-59: common, 60-88: uncommon, 89-98: rare, 99: mythic)"})]})]})]})},P=(n(24),function(){return Object(b.jsxs)("div",{className:"mx-auto col-12 col-md-4",style:{color:"#FFD369"},children:[Object(b.jsx)("h3",{className:"text-center",children:"How to get plant ID"}),Object(b.jsx)("p",{className:"text-center",children:"Click on seed and copy number in URL"}),Object(b.jsx)("div",{children:Object(b.jsx)("img",{className:"w-100",src:"".concat("","/assets/example/seed-ex.png"),alt:"ex"})})]})}),v=n(11),g=n.n(v);n(26);function N(e,t){var n=Math.pow(10,t||0);return String(Math.round(e*n)/n)}var F=function(){var e=Object(s.useState)(0),t=Object(p.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(0),r=Object(p.a)(a,2),l=r[0],u=r[1],j=Object(s.useState)(""),m=Object(p.a)(j,2),y=m[0],O=m[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(o.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.countapi.xyz/hit/baolongt.github.io/PVU-plant-lookup");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n.value);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(o.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.pancakeswap.info/api/v2/tokens/0x31471e0791fcdbe82fbf4c44943255e923f1b794");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,O(g()(n.updated_at).fromNow()),u(N(n.data.price,2));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),t()}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{style:{color:"#EEEEEE"},className:"h1 text-center",children:"Plant Lookup"}),Object(b.jsx)("div",{className:"shadow p-3 mb-2 bg-body rounded col-12 col-md-6 mx-auto fs-6",children:Object(b.jsxs)(d.a,{store:x,children:[Object(b.jsx)(h,{}),Object(b.jsx)(f,{price:l,fixFunc:N})]})}),Object(b.jsxs)("div",{className:"text-light d-flex justify-content-center rate col-12 mx-lg-0",children:[Object(b.jsxs)("div",{className:"p-2 me-2",children:[Object(b.jsx)("p",{children:"PVU token"}),Object(b.jsxs)("p",{children:["Price: ",l,"$"]}),Object(b.jsxs)("p",{children:["Update ",y]})]}),Object(b.jsxs)("div",{className:"p-2",children:[Object(b.jsx)("p",{children:"Light Energy(LE) rate"}),Object(b.jsx)("p",{children:"1 PVU = 105 LE"}),Object(b.jsx)("p",{children:"150 LE = 1 PVU"}),Object(b.jsx)("p",{children:"(Not include 5% tax)"})]})]}),Object(b.jsxs)("div",{className:"mt-3",style:{color:"#FFD369"},children:[Object(b.jsx)("p",{className:"text-center",children:"Don't sad if your plant is common one"}),Object(b.jsx)("p",{className:"text-center",children:"Anything that just costs money is cheap"}),Object(b.jsxs)("p",{className:"text-center",children:["Thanks ",Object(b.jsx)("b",{children:"@Cherry3136"})," and ",Object(b.jsx)("b",{children:"Mr.Vinsmoke"})," for the contribute"]}),Object(b.jsx)("p",{className:"text-center",children:"Donate me: 0x4eAA5f182AcA60A9560b480FE737bc7bC9E33fcB (Binance Smart Chain)"})]}),Object(b.jsx)(L,{}),Object(b.jsx)(P,{}),Object(b.jsx)("div",{className:"mt-3",style:{color:"#FFD369"},children:Object(b.jsxs)("p",{className:"text-center",children:["Visit count: ",n]})}),Object(b.jsxs)("p",{className:"d-none",align:"left",children:[" ",Object(b.jsx)("img",{src:"https://komarev.com/ghpvc/?username=baolongt&label=Profile%20views&color=0e75b6&style=flat",alt:"baolongt"})," "]})]})};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(F,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.f5eff234.chunk.js.map