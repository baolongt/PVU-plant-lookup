(this["webpackJsonpplant-lookup"]=this["webpackJsonpplant-lookup"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(5),r=n.n(c),l=n(4),i=n.n(l),o=n(8),p=n(3),d=n(2);function b(e){return{type:"CHANGE_PLANT",payload:e}}var u=n(0),h=function(){var e=Object(d.c)((function(e){return e.plant})),t=Object(s.useState)(e),n=Object(p.a)(t,2),a=n[0],c=n[1],r=Object(d.b)();return Object(u.jsxs)("div",{className:"d-flex m-auto",style:{backgroundColor:"#EEEEEE"},children:[Object(u.jsx)("input",{className:"form-control",type:"text",value:a,placeholder:"Plant id",onChange:function(e){return c(e.target.value.trim())}}),Object(u.jsx)("button",{className:"ms-1 btn btn-primary col-3",onClick:function(){c(a),a.match("[0-2]{3}[0-9]{2}[1-3]{1}[0-9]{2}[0-9]{2,6}")?r(b(a)):r(b(""))},children:"Look up"})]})},j=n(6);var m=Object(j.a)({plant:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"2009039914",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_PLANT":return t.payload;default:return e}}}),x=Object(j.b)(m,"object"===typeof window&&"undefined"!==typeof window.__REDUX_DEVTOOLS_EXTENSION__?__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}),y=[{id:"0",element:"Fire",baseLE:[400,440,511,701],hour:"48",step:"1",type:"Plant"},{id:"1",element:"Fire",baseLE:[400,440,511,701],hour:"48",step:"1",type:"Plant"},{id:"2",element:"Ice",baseLE:[500,550,591,751],hour:"60",step:"1",type:"Plant"},{id:"3",element:"Electro",baseLE:[500,550,591,751],hour:"48",step:"1",type:"Plant"},{id:"4",element:"Water",baseLE:[950,1040,1111,1301],hour:"108",step:"1",type:"Plant"},{id:"5",element:"Water",baseLE:[950,1040,1111,1301],hour:"108",step:"1",type:"Plant"},{id:"6",element:"Ice",baseLE:[500,550,591,751],hour:"60",step:"1",type:"Plant"},{id:"7",element:"Fire",baseLE:[400,440,511,701],hour:"48",step:"1",type:"Plant"},{id:"8",element:"Electro",baseLE:[500,550,591,751],hour:"48",step:"1",type:"Plant"},{id:"9",element:"Wind",baseLE:[750,800,861,1051],hour:"72",step:"1",type:"Plant"},{id:"10",element:"Wind",baseLE:[750,800,861,1051],hour:"72",step:"1",type:"Plant"},{id:"11",element:"Parasite",baseLE:[900,950,1011,1151],hour:"120",step:"1",type:"Plant"},{id:"12",element:"Parasite",baseLE:[900,950,1011,1151],hour:"120",step:"1",type:"Plant"},{id:"13",element:"Parasite",baseLE:[900,950,1011,1151],hour:"120",step:"1",type:"Plant"},{id:"14",element:"Dark",baseLE:[1200,1840,2211,2401],hour:"192",step:"10",type:"Plant"},{id:"15",element:"Electro",baseLE:[500,550,591,751],hour:"48",step:"1",type:"Plant"},{id:"16",element:"Wind",baseLE:[900,950,1011,1151],hour:"96",step:"1",type:"Plant"},{id:"17",element:"Fire",baseLE:[650,700,811,1001],hour:"72",step:"1",type:"Plant"},{id:"18",element:"Light",baseLE:[1200,1250,1311,1401],hour:"240",step:"1",type:"Plant"},{id:"19",element:"Light",baseLE:[1200,1250,1311,1401],hour:"240",step:"1",type:"Plant"},{id:"20",element:"Light",baseLE:[1600,1650,1711,1901],hour:"312",step:"1",type:"Plant"},{id:"21",element:"Light",baseLE:[1600,1650,1711,1901],hour:"312",step:"1",type:"Plant"},{id:"22",element:"Parasite",baseLE:[1300,1350,1411,1551],hour:"168",step:"1",type:"Plant"},{id:"23",element:"Parasite",baseLE:[1300,1350,1411,1551],hour:"168",step:"1",type:"Plant"},{id:"24",element:"Parasite",baseLE:[1300,1350,1411,1551],hour:"168",step:"1",type:"Plant"},{id:"25",element:"Metal",baseLE:[3500,4240,4711,5101],hour:"336",step:"10",type:"Plant"},{id:"26",element:"Metal",baseLE:[3500,4240,4711,5101],hour:"336",step:"10",type:"Plant"},{id:"27",element:"Metal",baseLE:[5500,6340,6711,7001],hour:"480",step:"10",type:"Plant"},{id:"28",element:"Metal",baseLE:[5500,6340,6711,7001],hour:"480",step:"10",type:"Plant"},{id:"29",element:"Ice",baseLE:[800,850,911,1151],hour:"96",step:"1",type:"Plant"},{id:"30",element:"Fire",baseLE:[650,700,811,1001],hour:"72",step:"1",type:"Plant"},{id:"31",element:"Dark",baseLE:[1200,1840,2211,2401],hour:"192",step:"10",type:"Plant"},{id:"32",element:"Electro",baseLE:[650,700,811,1001],hour:"60",step:"1",type:"Plant"},{id:"33",element:"Dark",baseLE:[1400,2040,2411,2701],hour:"216",step:"10",type:"Plant"},{id:"34",element:"Electro",baseLE:[650,700,811,1001],hour:"60",step:"1",type:"Plant"},{id:"35",element:"Dark",baseLE:[1400,2040,2411,2701],hour:"216",step:"10",type:"Plant"},{id:"36",element:"Water",baseLE:[950,1040,1111,1301],hour:"108",step:"1",type:"Plant"},{id:"37",element:"Wind",baseLE:[900,950,1011,1151],hour:"96",step:"1",type:"Plant"},{id:"38",element:"Water",baseLE:[1050,1140,1211,1401],hour:"120",step:"1",type:"Plant"},{id:"39",element:"Water",baseLE:[1050,1140,1211,1401],hour:"120",step:"1",type:"Plant"},{id:"90",element:"Fire",baseLE:[750,1040,1211,1401],hour:"48",step:"5",type:"Mother tree"},{id:"91",element:"Light",baseLE:[1400,1690,1851,2021],hour:"240",step:"5",type:"Mother tree"},{id:"92",element:"Ice",baseLE:[1050,1340,1511,1701],hour:"96",step:"5",type:"Mother tree"},{id:"93",element:"Dark",baseLE:[2600,2890,3061,3201],hour:"216",step:"5",type:"Mother tree"}],O=function(e){return Object(u.jsx)("img",{className:"w-25 h-25 me-4",src:""+"/assets/img/".concat(e.id,"_").concat(e.imgType,".png"),alt:e.id})},E=function(e){var t=Object(d.c)((function(e){return e.plant})),n=function(e){var t=e.split("");return{type:"".concat(t[0]).concat(t[1]).concat(t[2]),id:parseInt("".concat(t[3]).concat(t[4])),img:"".concat(t[5]),rarity:"".concat(t[6]).concat(t[7])}}(t),s=n.id,a=n.img,c=n.rarity,r=function(e){var t="",n="",s=0,a=parseInt(e);return a>=0&&a<=59?(s=0,t="Common",n="#198754"):a>=60&&a<=88?(s=1,t="Uncommon",n="#0d6efd"):a>=89&&a<=98?(s=2,t="Rare",n="#dc3545"):99===a&&(s=3,t="Mythic",n="#6610f2"),{rarityNum:s,rarityType:t,color:n}}(c),l=r.rarityNum,i=r.rarityType,o=r.color,p=function(e){return y.filter((function(t){return t.id==e}))[0]}(s),b=95*function(e,t,n,s){var a;switch(t){case 0:a=0;break;case 1:a=60;break;case 2:a=89;break;case 3:a=99}return e[t]+a+(n-a)*s}(p.baseLE,l,c,p.step)/100,h=b/p.hour,j=24*h;return console.log(e.price),""===t?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("p",{className:"text-center h3 mt-4",children:"Wrong input"})}):Object(u.jsxs)("div",{className:"d-flex m-auto mt-4 justify-content-center",children:[Object(u.jsx)(O,{id:s,imgType:a}),Object(u.jsxs)("div",{className:"ms-3",children:[Object(u.jsxs)("p",{children:["Type: ",p.type]}),Object(u.jsxs)("p",{children:["Rarity: ",Object(u.jsx)("span",{style:{color:"".concat(o)},children:i})]}),Object(u.jsxs)("p",{children:["Element: ",p.element]}),Object(u.jsxs)("p",{children:["LE: ",b,"/",p.hour," hours"]}),Object(u.jsxs)("p",{children:["LE per hour: ",h," (~",e.fixFunc(e.price*h/150,2),"$)"]}),Object(u.jsxs)("p",{children:["LE per day: ",j," (~",e.fixFunc(e.price*j/150,2),"$)"]}),Object(u.jsx)("p",{children:"(include 5% tax)"})]})]})},f=function(){return Object(u.jsxs)("div",{className:"mx-auto col-12 col-md-4",style:{color:"#FFD369"},children:[Object(u.jsx)("h2",{className:"text-center",children:"Explain"}),Object(u.jsxs)("div",{className:"mt-3 ms-md-5 ps-md-5 ps-4",children:[Object(u.jsxs)("h4",{children:["Plant id:",Object(u.jsx)("span",{style:{color:"#ef476f"},children:" aaa"}),"-",Object(u.jsx)("span",{style:{color:"#ffd166"},children:"bb"}),"-",Object(u.jsx)("span",{style:{color:"#06d6a0"},children:"c"}),"-",Object(u.jsx)("span",{style:{color:"#118ab2"},children:"dd"}),"-",Object(u.jsx)("span",{style:{color:"#F0F0F0"},children:"xxxxxx"})]}),Object(u.jsxs)("ul",{className:"list-unstyled",children:[Object(u.jsx)("li",{style:{color:"#ef476f"},children:"a is type of plant (100: plant, 200: mother tree)"}),Object(u.jsx)("li",{style:{color:"#ffd166"},children:"b is plant id"}),Object(u.jsx)("li",{style:{color:"#06d6a0"},children:"c is image code of plant"}),Object(u.jsx)("li",{style:{color:"#118ab2"},children:"d is rarity (0-59: common, 60-88: uncommon, 89-98: rare, 99: mythic)"})]})]})]})},L=(n(24),function(){return Object(u.jsxs)("div",{className:"mx-auto col-12 col-md-4",style:{color:"#FFD369"},children:[Object(u.jsx)("h3",{className:"text-center",children:"How to get plant ID"}),Object(u.jsx)("p",{className:"text-center",children:"Click on seed and copy number in URL"}),Object(u.jsx)("div",{children:Object(u.jsx)("img",{className:"w-100",src:"".concat("","/assets/example/seed-ex.png"),alt:"ex"})})]})}),P=n(11),v=n.n(P);n(26);function g(e,t){var n=Math.pow(10,t||0);return String(Math.round(e*n)/n)}var N=function(){var e=Object(s.useState)(0),t=Object(p.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(0),r=Object(p.a)(c,2),l=r[0],b=r[1],j=Object(s.useState)(0),m=Object(p.a)(j,2),y=m[0],O=m[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(o.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.countapi.xyz/hit/baolongt.github.io/PVU-plant-lookup");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(n.value);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(o.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.pancakeswap.info/api/v2/tokens/0x31471e0791fcdbe82fbf4c44943255e923f1b794");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,O(v()(n.updated_at).fromNow()),b(g(n.data.price,2));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),t()}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{style:{color:"#EEEEEE"},className:"h1 text-center",children:"Plant Lookup"}),Object(u.jsx)("div",{className:"shadow p-3 mb-2 bg-body rounded col-12 col-md-6 mx-auto fs-6",children:Object(u.jsxs)(d.a,{store:x,children:[Object(u.jsx)(h,{}),Object(u.jsx)(E,{price:l,fixFunc:g})]})}),Object(u.jsxs)("div",{className:"text-light d-flex justify-content-center rate col-12 mx-lg-0",children:[Object(u.jsxs)("div",{className:"p-2 me-2",children:[Object(u.jsx)("p",{children:"PVU token"}),Object(u.jsxs)("p",{children:["Price: ",l,"$"]}),Object(u.jsxs)("p",{children:["Update ",y]})]}),Object(u.jsxs)("div",{className:"p-2",children:[Object(u.jsx)("p",{children:"Light Energy(LE) rate"}),Object(u.jsx)("p",{children:"1 PVU = 105 LE"}),Object(u.jsx)("p",{children:"150 LE = 1 PVU"}),Object(u.jsx)("p",{children:"(Not include 5% tax)"})]})]}),Object(u.jsxs)("div",{className:"mt-3",style:{color:"#FFD369"},children:[Object(u.jsx)("p",{className:"text-center",children:"Don't sad if your plant is common one"}),Object(u.jsx)("p",{className:"text-center",children:"Anything that just costs money is cheap"}),Object(u.jsxs)("p",{className:"text-center",children:["Thanks ",Object(u.jsx)("b",{children:"@Cherry3136"})," and ",Object(u.jsx)("b",{children:"Mr.Vinsmoke"})," for the contribute"]}),Object(u.jsx)("p",{className:"text-center",children:"Donate me: 0x4eAA5f182AcA60A9560b480FE737bc7bC9E33fcB (Binance Smart Chain)"})]}),Object(u.jsx)(f,{}),Object(u.jsx)(L,{}),Object(u.jsx)("div",{className:"mt-3",style:{color:"#FFD369"},children:Object(u.jsxs)("p",{className:"text-center",children:["Visit count: ",n]})}),Object(u.jsxs)("p",{className:"d-none",align:"left",children:[" ",Object(u.jsx)("img",{src:"https://komarev.com/ghpvc/?username=baolongt&label=Profile%20views&color=0e75b6&style=flat",alt:"baolongt"})," "]})]})};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.7dd4eb08.chunk.js.map