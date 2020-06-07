(function(t){function e(e){for(var a,s,r=e[0],l=e[1],c=e[2],m=0,g=[];m<r.length;m++)s=r[m],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&g.push(i[s][0]),i[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(g.length)g.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var l=n[r];0!==i[l]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0d9d":function(t,e,n){"use strict";var a=n("4b19"),i=n.n(a);i.a},1213:function(t,e,n){t.exports=n.p+"img/style.f4e1d7f2.jpg"},1424:function(t,e,n){"use strict";var a=n("6ef2"),i=n.n(a);i.a},"190b":function(t,e,n){"use strict";var a=n("d9c7"),i=n.n(a);i.a},"1ad9":function(t,e,n){"use strict";var a=n("3b27"),i=n.n(a);i.a},"2e1b":function(t,e,n){t.exports=n.p+"img/innovation.7a3616f3.jpg"},"340c":function(t,e,n){},3435:function(t,e,n){"use strict";var a=n("3980"),i=n.n(a);i.a},3820:function(t,e,n){var a={"./LogoFull.svg":"4829","./WhiteFull.svg":"4e29","./abid.jpg":"b7c5","./innovation.jpg":"2e1b","./red.jpg":"3e62","./slack.jpeg":"a25d","./sra.jpg":"53c6","./style.jpg":"1213","./surf.jpg":"f353","./tasks.jpg":"7298"};function i(t){var e=o(t);return n(e)}function o(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=o,t.exports=i,i.id="3820"},"38e4":function(t,e,n){},3959:function(t,e,n){"use strict";var a=n("e697"),i=n.n(a);i.a},3980:function(t,e,n){},"3b27":function(t,e,n){},"3e62":function(t,e,n){t.exports=n.p+"img/red.65af89e6.jpg"},4829:function(t,e,n){t.exports=n.p+"img/LogoFull.f4addec2.svg"},"4b19":function(t,e,n){},"4dbd":function(t,e,n){"use strict";var a=n("ed39"),i=n.n(a);i.a},"4e29":function(t,e,n){t.exports=n.p+"img/WhiteFull.4a906a84.svg"},"53c6":function(t,e,n){t.exports=n.p+"img/sra.f02b2c49.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Hero"),n("Intro"),n("Portfolio"),n("Contact")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero section"},[n("LogoImage",{staticClass:"hero_nameImg"}),n("p",{staticClass:"hero_text--tag"},[t._v("learning, finding, designing, developing impact")]),n("p",{staticClass:"hero_text--intro"},[t._v(" I'm a UX Developer that is always trying to learn as much as I can, this is because I believe that every random thing I learn will somehow help me make an impact in this world. I'm currently based out of Toronto, where I take every chance I get to explore culture and build something new.")]),n("ButtonList",{attrs:{hasButton:!0,button:t.button,list:t.list}})],1)},r=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"LogoImage"},[a("img",{staticClass:"LogoImage_img light",attrs:{src:n("4829"),alt:t.logo_alttext}}),a("img",{staticClass:"LogoImage_img dark",attrs:{src:n("4e29"),alt:t.logo_alttext}})])},c=[],u={name:"LogoImage",components:{},props:[],mounted:function(){},data:function(){return{logo_alttext:"Arjun Kalburgi's logo - it's a leaf that lays on it's side, with a sharp leaf blade and a soft stem - symbolizing that he grows sharply but remains humble."}},methods:{},computed:{}},m=u,g=(n("978c"),n("2877")),p=Object(g["a"])(m,l,c,!1,null,"8f832a40",null),d=p.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"buttonlist",attrs:{role:"navigation"}},[t.hasButton?n("li",{key:t.button.text,staticClass:"button"},[n("Button",{staticClass:"buttonlist_button",attrs:{link:t.button.link,text:t.button.text,alttext:t.button.alt}})],1):t._e(),t._l(t.list,(function(e){return n("li",{key:e.icon,staticClass:"icon"},[n("a",{staticClass:"buttonlist_icon",class:t.hasButton?"":"light",attrs:{href:e.link,"aria-label":e.alt}},[n("font-awesome-icon",{attrs:{icon:t.icon[e.icon]}})],1)])}))],2)},h=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"button",attrs:{href:t.link,target:t.newTab?"blank":"",alt:t._f("''")(t.alttext)}},[t._v(t._s(t.text))])},v=[],_={name:"src-components-system-button",props:["link","text","new-tab","alttext"],mounted:function(){},data:function(){return{}},methods:{},computed:{}},k=_,w=(n("6b65"),Object(g["a"])(k,b,v,!1,null,"5cb64e86",null)),x=w.exports,y=n("ad3d"),j=n("b702"),I=n("f2d1"),C={name:"ButtonList",components:{Button:x,FontAwesomeIcon:y["a"]},props:["hasButton","button","list"],mounted:function(){},data:function(){return{icon:{email:j["b"],blog:j["a"],twitter:I["d"],github:I["b"],linkedin:I["c"],codepen:I["a"]}}},methods:{},computed:{}},B=C,O=(n("190b"),Object(g["a"])(B,f,h,!1,null,"98c45b1c",null)),E=O.exports,S={name:"hero",components:{LogoImage:d,ButtonList:E},props:[],mounted:function(){},data:function(){return{button:{link:"writing",text:"writing",alt:"View my blog"},list:[{link:"https://twitter.com/arjunkalburgi",icon:"twitter",alt:"View my Twitter"},{link:"https://github.com/arjunkalburgi",icon:"github",alt:"View my GitHub"},{link:"https://linkedin.com/in/arjunkalburgi",icon:"linkedin",alt:"View my Linked In"},{link:"https://codepen.io/arjunkalburgi",icon:"codepen",alt:"View my Code Pen"},{link:"mailto:askalburgi@gmail.com",icon:"email",alt:"Send me an Email"}]}},methods:{},computed:{}},A=S,R=(n("3435"),Object(g["a"])(A,s,r,!1,null,"2225a790",null)),$=R.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"intro section",attrs:{id:"intro"}},[n("BackgroundAnimation",{staticClass:"intro_bgani",attrs:{total:t.number_of_leaves}}),n("theImage",{staticClass:"intro_image intro_image--innovation mobile",attrs:{path:t.innovationimage.path,alttext:t.innovationimage.alttext}}),n("h2",{staticClass:"intro_text intro_text--title"},[t._v("Products work like magic when everyone is focused on the people it’s for.")]),t._m(0),t._m(1),n("FloatingImage",{staticClass:"intro_image intro_image--abid",attrs:{image:t.abidimage.path,alttext:t.abidimage.alttext}}),n("theImage",{staticClass:"intro_image mobile mobile-only",attrs:{path:t.abidimage.path,alttext:t.abidimage.alttext}}),n("FloatingImage",{staticClass:"intro_image intro_image--red",attrs:{image:t.redimage.path,alttext:t.redimage.alttext}}),t._m(2),n("FloatingImage",{staticClass:"intro_image intro_image--sra",attrs:{image:t.sraimage.path,alttext:t.sraimage.alttext}}),t._m(3)],1)},L=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"intro_text intro_text--firstpara"},[t._v(" I love developing websites and apps "),n("br"),t._v("that deliver magical experiences "),n("br"),t._v("by providing real value. ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"intro_text intro_text--secondpara"},[t._v(" First I learn everything I can about "),n("br"),t._v("who and what I need to build so that "),n("br"),t._v("I find the problems that need to be solved. ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"intro_text intro_text--thirdpara"},[t._v(" I’ll then iterate on possible designs, "),n("br"),t._v("theorizing what could solve the problem "),n("br"),t._v("and testing to see what does. ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"intro_text intro_text--fourthpara"},[t._v(" And finally, I’ll develop the solution in code "),n("br"),t._v("so that I can deploy it to real people "),n("br"),t._v("and create a real impact. ")])}],P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{staticClass:"Image b-lazy",attrs:{src:t.getImage,alt:t.alttext}})},M=[],V={name:"theImage",components:{},props:["path","alttext"],mounted:function(){},data:function(){return{}},methods:{},computed:{getImage:function(){return n("3820")("./"+this.path)}}},T=V,D=(n("a13a"),Object(g["a"])(T,P,M,!1,null,"89a18526",null)),z=D.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"parallax",rawName:"v-parallax",value:-.15,expression:"-0.15"}],staticClass:"FloatingImage"},[n("div",{staticClass:"FloatingImage_box FloatingImage_box--color"}),n("theImage",{staticClass:"FloatingImage_box FloatingImage_box--image",attrs:{path:t.image,alttext:t.alttext}})],1)},W=[],G={name:"FloatingImage",props:["image","alttext"],components:{theImage:z},mounted:function(){},data:function(){return{}},methods:{},computed:{}},H=G,N=(n("4dbd"),Object(g["a"])(H,U,W,!1,null,null,null)),X=N.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"bgani",staticClass:"BackgroundAnimation b-lazy"},t._l(t.total,(function(t){return n("div",{key:t,ref:"BackgroundAnimation_icon",refInFor:!0,staticClass:"BackgroundAnimation_icon",class:"BackgroundAnimation_icon--"+t%8})})),0)},J=[],K=n("a5cf"),Y=n("cffa"),Z={name:"BackgroundAnimation",props:["total"],mounted:function(){for(var t=this.$refs.bgani,e=t.clientWidth,n=t.clientHeight,a=this.$refs.BackgroundAnimation_icon,i=0;i<this.total;i++){var o=a[i];K["c"].set(o,{x:this.R(0,e),y:this.R(0,n),z:this.R(-200,200)}),this.iconRotate(o,Y["a"]),this.iconSway(o,Y["a"])}},data:function(){return{}},methods:{R:function(t,e){return t+Math.floor(10*Math.random()*(e-t))/10},S:function(){return Math.random()<.5?-1:1},iconRotate:function(t,e){var n=this;e.to(t,this.R(2,5),{rotationX:180*this.S(),rotationY:180*this.S(),repeat:1,yoyo:!0,ease:"easeInOut",onComplete:function(){n.iconRotate(t,e)}})},iconSway:function(t,e){var n=this;e.to(t,this.R(2,8),{x:"+="+this.R(-100,100),y:"+="+this.R(-100,100),rotationZ:this.R(0,180),repeat:0,yoyo:!1,ease:"easeInOut",onComplete:function(){n.iconSway(t,e)}})}},computed:{}},Q=Z,tt=(n("3959"),Object(g["a"])(Q,q,J,!1,null,"c61848ac",null)),et=tt.exports,nt={name:"intro",components:{theImage:z,FloatingImage:X,BackgroundAnimation:et},props:[],mounted:function(){},data:function(){return{number_of_leaves:40,innovationimage:{path:"innovation.jpg",alttext:"When you combine Domain Knowledge, Tech and Design, you get to the Users. That's the receipe for Innovation."},abidimage:{path:"abid.jpg",alttext:"Interviews and in-person 1 on 1s gather unique and invaluable insights, these softskills help start great products."},sraimage:{path:"sra.jpg",alttext:"Remaining happy and optimistic helps battle stress of deadlines, these softskills help glue together great teams."},redimage:{path:"red.jpg",alttext:"Discussion, presentation and collaboration are grease for the engine, these softskills unlock great work."}}},methods:{},computed:{}},at=nt,it=(n("a413"),Object(g["a"])(at,F,L,!1,null,"970b8b98",null)),ot=it.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"portfolio section",attrs:{id:"portfolio"}},[n("div",{staticClass:"portfolio-intro"},[n("p",[t._v("Working on these products requires constant learning and work.")]),n("div",{staticClass:"portfolio_introbuttons"},[n("Button",{staticClass:"portfolio_introbutton",attrs:{link:"writing",text:"Learning"}}),n("Button",{staticClass:"portfolio_introbutton",attrs:{link:"https://github.com/arjunkalburgi",text:"Work"}})],1),n("small",[t._v("View all my content or some highlights below.")])]),t._l(t.portfolio_items,(function(t){return n("PortfolioItem",{key:t.image,attrs:{item:t}})}))],2)},rt=[],lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"portfolioitem"},[n("div",{staticClass:"portfolioitem_left"},[n("h2",{staticClass:"portfolioitem_title"},[t._v(t._s(t.item.title))]),n("small",{staticClass:"portfolioitem_tags"},[t._v(t._s(t.item.tags))]),n("p",{staticClass:"portfolioitem_description"},[t._v(t._s(t.item.description))]),n("div",[n("Button",{staticClass:"portfolioitem_button",attrs:{link:t.item.buttonlink,text:t.item.buttontext}})],1)]),n("theImage",{staticClass:"portfolioitem_image",attrs:{path:t.item.image,alttext:t.item.alt}})],1)},ct=[],ut={name:"PortfolioItem",components:{theImage:z,Button:x},props:["item"],mounted:function(){},data:function(){return{}},methods:{},computed:{}},mt=ut,gt=(n("0d9d"),Object(g["a"])(mt,lt,ct,!1,null,"0d9ef301",null)),pt=gt.exports,dt={name:"portfolio",components:{Button:x,PortfolioItem:pt},props:[],mounted:function(){},data:function(){return{portfolio_items:[{title:"Creating Team Bonding",tags:"Leadership, React Native, UX Research",description:"After a bad year, the culture of the Computer Engineering Club needed to change so that we could make the largest student hackathon in Alberta even larger. My solution was custom Slack emojis and I built a way to democratize them.",buttonlink:"https://github.com/arjunkalburgi/slackify",buttontext:"View on Github",image:"slack.jpeg",alt:"Stock photo of someone having a good time at their work desk"},{title:"Coding a Business Model",tags:"Product Management, Angular, Design",description:"Personal stylists can take on more clients using image detection, data science and a mobile app. Creating User flows and ER diagrams helped me build an app that can bring stylists to the amount of business personal trainers enjoy.",buttonlink:"https://github.com/arjunkalburgi/stylist-assistant",buttontext:"View on Github",image:"style.jpg",alt:"Stock photo of an outfit laid out on the floor"},{title:"Persevering using details",tags:"Growth Mindset, Travel",description:"I was still falling an hour and a half after everyone else in the beginners class was able to stand, but my mind I was focused on the details of what I was doing, because the details are where you find success.",buttonlink:"https://www.arjunkalburgi.com/writing/learning-to-surf-a-mindset-practice",buttontext:"Read the Story",image:"surf.jpg",alt:"Stock photo of a surfer dude waving his hand out of the water, signaling he's ok"},{title:"Developing Behaviour",tags:"Behavioural Design, Angular",description:"Reading Carol Dweck taught me that every challenge needs the right mindset. At the same time, my peers in my design course were being overwhelmed by the workload. I experimented with how a tool could help them change.",buttonlink:"https://www.arjunkalburgi.com/writing/stressful-tasks-a-behavioural-design-experiment",buttontext:"Read the Story",image:"tasks.jpg",alt:"Stock photo of a silhouette of a man thinking"}]}},methods:{},computed:{}},ft=dt,ht=(n("1ad9"),Object(g["a"])(ft,st,rt,!1,null,"40ece3ba",null)),bt=ht.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"contact contact-style b-loaded",attrs:{id:"contact"}},[n("BackgroundAnimation",{attrs:{total:t.number_of_leaves}}),n("div",{staticClass:"contact_contents"},[n("h2",{staticClass:"contact_contents--title"},[t._v("More")]),n("ButtonList",{staticClass:"contact_contents--links",attrs:{hasButton:!1,list:t.list}})],1)],1)},_t=[],kt={name:"contact",components:{ButtonList:E,BackgroundAnimation:et},props:[],mounted:function(){},data:function(){return{number_of_leaves:24,list:[{link:"https://arjunkalburgi.com/writing",icon:"blog",alt:"View my Blog"},{link:"https://twitter.com/arjunkalburgi",icon:"twitter",alt:"View my Twitter"},{link:"https://github.com/arjunkalburgi",icon:"github",alt:"View my GitHub"},{link:"https://linkedin.com/in/arjunkalburgi",icon:"linkedin",alt:"View my Linked In"},{link:"https://codepen.io/arjunkalburgi",icon:"codepen",alt:"View my Code Pen"},{link:"mailto:askalburgi@gmail.com",icon:"email",alt:"Send me an Email"}]}},methods:{},computed:{}},wt=kt,xt=(n("1424"),Object(g["a"])(wt,vt,_t,!1,null,"7de66fab",null)),yt=xt.exports,jt={name:"App",components:{Hero:$,Intro:ot,Portfolio:bt,Contact:yt}},It=jt,Ct=(n("5c0b"),Object(g["a"])(It,i,o,!1,null,null,null)),Bt=Ct.exports,Ot=n("b3b5");a["a"].component("font-awesome-icon",y["a"]),a["a"].use(Ot["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(Bt)}}).$mount("#app")},"596e":function(t,e,n){},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),i=n.n(a);i.a},"6b65":function(t,e,n){"use strict";var a=n("340c"),i=n.n(a);i.a},"6ef2":function(t,e,n){},7298:function(t,e,n){t.exports=n.p+"img/tasks.5444fd16.jpg"},"978c":function(t,e,n){"use strict";var a=n("d91e"),i=n.n(a);i.a},"9c0c":function(t,e,n){},a13a:function(t,e,n){"use strict";var a=n("38e4"),i=n.n(a);i.a},a25d:function(t,e,n){t.exports=n.p+"img/slack.0bae0703.jpeg"},a413:function(t,e,n){"use strict";var a=n("596e"),i=n.n(a);i.a},b7c5:function(t,e,n){t.exports=n.p+"img/abid.e2def615.jpg"},d91e:function(t,e,n){},d9c7:function(t,e,n){},e697:function(t,e,n){},ed39:function(t,e,n){},f353:function(t,e,n){t.exports=n.p+"img/surf.a36b5dda.jpg"}});
//# sourceMappingURL=app.f519b296.js.map