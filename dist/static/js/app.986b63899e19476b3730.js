webpackJsonp([0],{"2i7C":function(e,t){},"5XKE":function(e,t){},"9Kbi":function(e,t){},"9V/6":function(e,t){},"9VhN":function(e,t,a){e.exports=a.p+"static/img/helse.bc7ba92.jpg"},CPBg:function(e,t){},Cuwq:function(e,t){e.exports={id:1,siteTitle:"Ansette midlertidig",lead:"En eller annen lang ingress om ett eller annet.",sectionOneTitle:"Før du ansetter noen midlertidig"}},E0EW:function(e,t,a){"use strict";a("quWu");var n={data:function(){return{}},props:{onlyOneActive:{default:!1,type:Boolean}},computed:{elements:function(){return this.$children},elements_count:function(){return this.$children.length},active_elements:function(){return this.$children.filter(function(e){return!0===e.status})}},methods:{closeAll:function(){this.$children.forEach(function(e){e.close()})},openAll:function(){this.$children.forEach(function(e){e.open()})}}},s={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"v-collapse-group"},[this._t("default")],2)},staticRenderFns:[]},r=a("VU/8")(n,s,!1,null,null,null);t.a=r.exports},ETGl:function(e,t){},GxX4:function(e,t,a){e.exports=a.p+"static/img/hockey.6fe8f35.gif"},Hf0R:function(e,t,a){"use strict";var n=a("quWu"),s={data:function(){return{nodes:{},status:!1}},props:["active"],watch:{active:function(e){null!=e&&(this.status=e)},status:function(e,t){if(this.$emit("onStatusChange",{vm:this,status:e,old_status:t}),!1===this.$parent.onlyOneActive)Object(n.toggleElement)(this.nodes.content,this.$options.$vc.settings);else if(!0===e&&!1===t){var a=this.$parent.$children.filter(function(e){return!0===e.status});a.length>1&&a.forEach(function(e){e.close(),Object(n.closeElement)(e.nodes.content,this.$options.$vc.settings)}.bind(this)),Object(n.openElement)(this.nodes.content,this.$options.$vc.settings),this.open()}else!0===t&&!1===e&&(Object(n.closeElement)(this.nodes.content,this.$options.$vc.settings),this.close())}},methods:{toggle:function(){this.$emit("beforeToggle",this),this.status=!this.status,this.$emit("afterToggle",this)},close:function(){this.$emit("beforeClose",this),this.status=!1,this.$emit("afterClose",this)},open:function(){this.$emit("beforeOpen",this),this.status=!0,this.$emit("afterOpen",this)}},mounted:function(){var e=this;this.nodes.toggle=this.$el.querySelector("."+this.$options.$vc.settings.togglerClassDefault),this.nodes.content=this.$el.querySelector("."+this.$options.$vc.settings.contentClassDefault),this.$emit("afterNodesBinding",{vm:this,nodes:this.nodes}),null!==this.nodes.toggle&&this.nodes.toggle.addEventListener("click",function(){e.toggle()}),null!=this.active&&(this.status=this.active)}},r={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{class:"vc-"+this.$options.$vc.settings.basename},[this._t("default")],2)},staticRenderFns:[]};var i=a("VU/8")(s,r,!1,function(e){a("roBp")},null,null);t.a=i.exports},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),s=a("Vn2I"),r=a("3ZR5"),i=a.n(r),o=a("5UqA"),l=a.n(o),c=(a("YMr4"),a("4t5/")),v=a.n(c),p=a("Nvua"),m=a.n(p),d=a("T1ft"),_=a.n(d),u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"lh-menu"},[a("div",{staticClass:"item"},[a("router-link",{attrs:{to:"/"}},[e._v("Kontakt oss")])],1),e._v(" "),a("div",{staticClass:"item"},[a("router-link",{attrs:{to:"/"}},[a("h3",[e._v(e._s(e.sitetitle))])])],1),e._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"modal-container"},[a("button",{directives:[{name:"show",rawName:"v-show",value:!e.show,expression:"!show"}],staticClass:"button-primary",attrs:{type:"button"},on:{click:e.toggle}},[e._v("\n            Søk/ Meny\n          ")])])])]),e._v(" "),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"modal",on:{click:e.toggle}},[a("div",{staticClass:"modal-message"},[a("div",{staticClass:"modal-header"},[a("h2",[e._v("Meny")])]),e._v(" "),a("div",{staticClass:"modal-body"},[a("ul",[a("li",[a("router-link",{attrs:{to:"/innlogget"}},[e._v("\n                      Innlogget forside\n                    ")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/ikke-innlogget"}},[e._v("\n                      Ikke innlogget forside\n                    ")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/tema-side"}},[e._v("\n                      Tema side\n                    ")])],1)])])])])])],1)},staticRenderFns:[]};var h={name:"App",components:{Menu:a("VU/8")({data:function(){return{sitetitle:"Lederhuset",MenuSymbol:"Meny",show:!1}},methods:{toggle:function(){this.show=!this.show}}},u,!1,function(e){a("9V/6")},"data-v-6b9fb316",null).exports}},g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Menu"),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var f=a("VU/8")(h,g,!1,function(e){a("re9S")},null,null).exports,k=a("/ocq"),b={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",modifiers:{reset:!0}}]},[t("img",{attrs:{alt:"alt teksten",src:this.url}})])},staticRenderFns:[]};var x=a("VU/8")({name:"ImageComponent",props:["url"],data:function(){return{}}},b,!1,function(e){a("WaWv")},"data-v-21c786d1",null).exports,E={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",[e._v("Søk")]),e._v(" "),a("v-select",{attrs:{options:e.options,label:"title"},scopedSlots:e._u([{key:"option",fn:function(t){return[a("span",{staticClass:"fa",class:t.icon}),e._v("\n        "+e._s(t.title)+"\n    ")]}}])})],1)},staticRenderFns:[]};var w={props:{xs:"12",sm:"6"},name:"Home",data:function(){return{siteTitle:"Lederhuset",lead:"Lederhuset er en portal for ledere og arbeidsgivere\n        med praktiske verktøy og juridisk veiledning samlet på et sted.",show:!1,active:!1}},components:{ImageComponent:x,Selector:a("VU/8")({name:"Selector",data:function(){return{options:[{title:"Ferie",icon:"fa-book",url:"https://codeclimate.com/github/sagalbot/vue-select"},{title:"Ansettelse",icon:"fa-github",url:"https://codeclimate.com/github/sagalbot/vue-select"},{title:"Avskaffelse",icon:"fa-database",url:"https://codeclimate.com/github/sagalbot/vue-select"},{title:"Sykemelding",icon:"fa-pencil",url:"https://codeclimate.com/github/sagalbot/vue-select"}]}}},E,!1,function(e){a("2i7C")},"data-v-6f98b87e",null).exports}},C={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("Selector"),e._v(" "),n("section",[n("h1",[e._v(e._s(e.siteTitle))])]),e._v(" "),n("container",[n("row",[n("column",{attrs:{sm:"4"}},[n("ImageComponent",{attrs:{url:a("dsmR")}})],1),e._v(" "),n("column",{attrs:{sm:"4"}},[n("ImageComponent",{attrs:{url:a("9VhN")}})],1),e._v(" "),n("column",{attrs:{sm:"4"}},[n("ImageComponent",{attrs:{url:a("yJIQ")}})],1)],1)],1),e._v(" "),n("section",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",modifiers:{reset:!0}}]},[n("p",[e._v(e._s(e.lead))])]),e._v(" "),n("button",{attrs:{"aria-expanded":e.show?"true":"false"},on:{click:function(t){e.show=!e.show}}},[e._v("\n  Trykk på meg!\n")]),e._v(" "),e.show?n("p",[e._v("Hei, her er jeg!")]):e._e(),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("button",{attrs:{"aria-pressed":e.active?"true":"false"},on:{click:function(t){e.active=!e.active}}},[e._v("\n  Gjør meg større\n")]),e._v(" "),n("div",{class:{red:e.active}},[e._v("Nå er jeg større")])],1)},staticRenderFns:[]};var P=a("VU/8")(w,C,!1,function(e){a("5XKE")},"data-v-2f50c00d",null).exports,$={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lh-collapse"},[a("v-collapse-wrapper",[a("div",{directives:[{name:"collapse-toggle",rawName:"v-collapse-toggle"}],staticClass:"lh-collapse__header"},[a("affix",{staticStyle:{width:"100%"},attrs:{"relative-element-selector":"#collapse-content-1",offset:{top:140,bottom:-80}}},[a("h2",[e._v("Før du ansetter")])])],1),e._v(" "),a("div",{directives:[{name:"collapse-content",rawName:"v-collapse-content"}],staticClass:"my-content"},[a("section",{attrs:{id:"collapse-content-1"}},[a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")])])])]),e._v(" "),a("v-collapse-wrapper",[a("div",{directives:[{name:"collapse-toggle",rawName:"v-collapse-toggle"}],staticClass:"lh-collapse__header"},[a("affix",{staticStyle:{width:"100%"},attrs:{"relative-element-selector":"#collapse-content-2",offset:{top:140,bottom:-80}}},[a("h2",[e._v("Oppfølging av midlertidige ansatte")])])],1),e._v(" "),a("div",{directives:[{name:"collapse-content",rawName:"v-collapse-content"}],staticClass:"lh-collapse__content"},[a("section",{attrs:{id:"collapse-content-2"}},[a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")])])])]),e._v(" "),a("v-collapse-wrapper",[a("div",{directives:[{name:"collapse-toggle",rawName:"v-collapse-toggle"}],staticClass:"lh-collapse__header"},[a("affix",{staticStyle:{width:"100%"},attrs:{"relative-element-selector":"#collapse-content-3",offset:{top:140,bottom:-80}}},[a("h2",[e._v("Tips for å lykkes")])])],1),e._v(" "),a("div",{directives:[{name:"collapse-content",rawName:"v-collapse-content"}],staticClass:"my-content"},[a("section",{attrs:{id:"collapse-content-3"}},[a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")])])])]),e._v(" "),a("v-collapse-wrapper",[a("div",{directives:[{name:"collapse-toggle",rawName:"v-collapse-toggle"}],staticClass:"lh-collapse__header"},[a("affix",{staticStyle:{width:"100%"},attrs:{"relative-element-selector":"#collapse-content-4",offset:{top:140,bottom:-80}}},[a("h2",[e._v("Maler")])])],1),e._v(" "),a("div",{directives:[{name:"collapse-content",rawName:"v-collapse-content"}],staticClass:"my-content"},[a("section",{attrs:{id:"collapse-content-4"}},[a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")])])])])],1)},staticRenderFns:[]};var y={name:"LoggedIn",data:function(){return{siteTitle:"Her er vi innlogga"}},components:{IndexMeny:a("VU/8")({name:"IndexMeny",data:function(){return{scrollAffix:!0,enabled:!1,relativeElementSelector:!1,ExampleParagraph:"Living a fully ethical life gender rights,\n                        parse ideate rubric incubator, strategize engaging;\n                        data correlation collaborative cities empower communities\n                        co-create justice. Compelling circular, storytelling contextualize,\n                        and impact investing the support impact grit program areas.\n                        A social entrepreneurship capacity building; scalable segmentation B-corp.\n                        Vibrant overcome injustice thought leadership grit overcome injustice,\n                        low-hanging fruit strengthening infrastructure peaceful agile granular. "}}},$,!1,function(e){a("9Kbi")},"data-v-6457d119",null).exports}},T={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[t("h1",[this._v(this._s(this.siteTitle))]),this._v(" "),t("IndexMeny")],1)},staticRenderFns:[]};var V=a("VU/8")(y,T,!1,function(e){a("l9gp")},"data-v-03e5004d",null).exports,I={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[t("h1",[this._v(this._s(this.siteTitle))])])},staticRenderFns:[]};var F=a("VU/8")({name:"NotLoggedIn",data:function(){return{siteTitle:"Ikke innlogget forside"}}},I,!1,function(e){a("pDMO")},"data-v-431e7500",null).exports,R=a("Cuwq"),N=a.n(R),O={name:"ThemeFacts",data:function(){return{data:N.a}}},L={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("container",{staticClass:"lh-block"},[a("row",{attrs:{id:"four"}},[a("column",{staticClass:"lh-block__factBox",attrs:{sm:"6",smOffset:"3"}},[a("h4",[e._v("Fakta")]),e._v(" "),a("p",[e._v("Vanligvis skal du gi fast ansettelse til folk. Det finnes likevel\n        noen unntak hvor du har lov til å gi midlertidig ansettelse:")]),e._v(" "),a("ul",[a("li",[e._v("arbeid av midlertidig karakter (f.eks. sesongarbeid)")]),e._v(" "),a("li",[e._v("en annen ansatt (vikariat)")]),e._v(" "),a("li",[e._v("praksisarbeid")]),e._v(" "),a("li",[e._v("deltakelse i arbeidsmarkedstiltak")]),e._v(" "),a("li",[e._v("arbeid med organisert idrett")]),e._v(" "),a("li",[e._v("behov for kortvarig arbeidskraft (inntil 12 mnd.)")])])])],1)],1)},staticRenderFns:[]};var j={name:"ThemeContent",data:function(){return{data:N.a}},components:{ThemeFacts:a("VU/8")(O,L,!1,function(e){a("CPBg")},"data-v-993670fe",null).exports,ImageComponent:x}},S={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("container",{staticClass:"lh-block"},[n("row",[n("column",{attrs:{xs:"12",sm:"2",xsOffset:"3"}},[n("h3",[e._v("Kort sagt")])]),e._v(" "),n("column",{attrs:{xs:"12",sm:"4"}},[n("p",[e._v("For å ansette midlertidig må arbeidsoppgavene være midlertidige\n            eller sesongbaserte.Din motivasjon kan ikke være å omgå\n            oppsigelsesvernet, eller å gjøre det lett å\n            avslutte arbeidsforhold.")])])],1)],1),e._v(" "),n("container",{staticClass:"lh-block"},[n("row",{attrs:{id:"one"}},[n("column",{staticClass:"lh-block__content",attrs:{sm:"10",smOffset:"1"}},[n("h1",[e._v("1. "),n("br"),e._v("\n                Før du ansetter noen midlertidig\n             ")])])],1),e._v(" "),n("row",[n("column",{attrs:{sm:"6",smOffset:"3"}},[n("h3",[e._v("Kanskje enda en tittel her først")]),e._v(" "),n("h4",[e._v("Krav til deg som ansetter")]),e._v(" "),n("p",[e._v("Dersom du avslutter arbeidsforholdet, inntrer en karantene i\n          en periode på tolv måneder.I perioden kan du ikke ansette\n          andre til de samme arbeidsoppgavene\n        ")]),e._v(" "),n("h4",[e._v("Ikke ha mange midlertidig ansatte")]),e._v(" "),n("p",[e._v("Du kan ikke ha mer enn 15 prosent av arbeidstakerne på slike kontrakter.")]),e._v(" "),n("h4",[e._v("Oppsigelsestid")]),e._v(" "),n("p",[e._v("Du må varsle skriftlig senest 1 måned før fratredelsestidspunktet,\n          dersom en person har vært ansatt i mer enn 1 år.\n        ")]),e._v(" "),n("v-collapse-wrapper",[n("div",{directives:[{name:"collapse-toggle",rawName:"v-collapse-toggle"}],staticClass:"lh-collapse__header"},[n("u",[e._v("Vis lovtekst")])]),e._v(" "),n("div",{directives:[{name:"collapse-content",rawName:"v-collapse-content"}],staticClass:"my-content"},[n("h4",[e._v("Lov om midlertidig ansettelse")]),e._v(" "),n("p",[e._v("Dersom en midlertidig ansettelse har vart mer enn fire år\n                  sammenhengende, skal du behandle den ansatte som fast ansatt\n                  når arbeidsforholdet bir avsluttet. Dersom en midlertidig ansettelse\n                  har vart mer enn fire år sammenhengende, skal du behandle den ansatte\n                  som fast ansatt når arbeidsforholdet bir avsluttet.\n                ")]),e._v(" "),n("p",[e._v("Kilde: "),n("a",{attrs:{href:"#"}},[e._v("Lovdata.no")])])])])],1)],1)],1),e._v(" "),n("container",{staticClass:"lh-block"},[n("row",{attrs:{id:"two"}},[n("column",{staticClass:"lh-block lh-block__content",attrs:{sm:"10",smOffset:"1"}},[n("h1",[e._v("2. "),n("br"),e._v("\n                God Oppfølging\n             ")])])],1),e._v(" "),n("row",[n("column",{attrs:{sm:"6",smOffset:"3"}},[n("h4",[e._v("Krav til deg som ansetter")]),e._v(" "),n("p",[e._v("Gjør vedkommende i stand til å tilpasse seg arbeidsstedet og\n                arbeidsoppgavene på en effektiv og god måte.\n              ")]),e._v(" "),n("p",[e._v("Gi den ansatte muligheten til å sette seg inn i reglene på arbeidsplassen,\n                for eksempel eventuell tariffavtale, personalhåndbok, arbeidsreglement,\n                HMS-rutiner, arbeidsrutiner, øvrige sikkerhetsrutiner og annet som\n                er relevant.\n              ")])])],1),e._v(" "),n("row",[n("blockquote",[e._v("\n            Vær så konkret som mulig, og still spørsmål om noe oppleves som uklart.\n          ")])]),e._v(" "),n("row",[n("column",{attrs:{sm:"6",smOffset:"3"}},[n("h4",[e._v("Styr forventninger")]),e._v(" "),n("p",[e._v("Tydeliggjør forventninger om hvordan vedkommende skal representere\n                virksomheten din utad, om eventuelle individuelle mål, hvordan arbeidet\n                skal utføres og hvordan du vil at hun eller han samhandler og rapporterer\n                internt. Vær så konkret som mulig, og still spørsmål om noe oppleves som\n                uklart.\n              ")]),e._v(" "),n("h4",[e._v("Lag tydelige rammer for opplæringen")]),e._v(" "),n("p",[e._v("Informer om hvordan opplæring skal foregå, og hvilken rutine dere\n                skal ha for tilbakemelding om hvordan tilpasningen til den nye jobben\n                går.\n              ")])])],1),e._v(" "),n("row",{attrs:{id:"three"}},[n("column",{attrs:{xs:"12",sm:"2",xsOffset:"3"}},[n("ImageComponent",{attrs:{url:a("GxX4")}})],1),e._v(" "),n("column",{attrs:{xs:"12",sm:"4"}},[n("h4",[e._v("Last ned mal")]),e._v(" "),n("a",{attrs:{href:"#"}},[e._v("Midlertidig ansettelse")]),e._v(" "),n("p",[e._v("Word-dokument")])])],1)],1),e._v(" "),n("ThemeFacts")],1)},staticRenderFns:[]};var M={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("affix",{staticClass:"content-nav",attrs:{"relative-element-selector":"#theme-content",offset:{top:60,bottom:40}}},[a("scrollactive",{attrs:{"active-class":"active",offset:10,duration:800,"bezier-easing-value":".5,0,.35,1"},on:{itemchanged:e.onItemChanged}},[a("a",{staticClass:"scrollactive-item",attrs:{href:"#one"}},[e._v("\n                  1. Før du ansetter noen midlertidig\n                ")]),e._v(" "),a("a",{staticClass:"scrollactive-item",attrs:{href:"#two"}},[e._v("2. God oppfølging")]),e._v(" "),a("a",{staticClass:"scrollactive-item",attrs:{href:"#three"}},[e._v("3. Tips for å lykkes")]),e._v(" "),a("a",{staticClass:"scrollactive-item",attrs:{href:"#four"}},[e._v("4. Last ned maler")])])],1)],1)},staticRenderFns:[]};var U={name:"ThemeHero",data:function(){return{data:N.a}}},D={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("container",{staticClass:"lh-hero",attrs:{hero:"true"}},[a("row",[a("column",[a("h1",[e._v(e._s(e.data.siteTitle))]),e._v(" "),a("p",[e._v(e._s(e.data.lead))]),e._v(" "),a("ol",[a("li",[e._v("Før du ansetter midlertidig")]),e._v(" "),a("li",[e._v("God oppfølging")]),e._v(" "),a("li",[e._v("Tips for å lykkes")]),e._v(" "),a("li",[e._v("Last ned maler om «ferie»")])])])],1)],1)},staticRenderFns:[]};var A={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("container",{staticClass:"lh-block lh-block__download"},[a("row",[a("column",{attrs:{sm:"3"}},[e._v("Last ned")]),e._v(" "),a("column",{attrs:{sm:"3"}},[e._v("Last ned")]),e._v(" "),a("column",{attrs:{sm:"3"}},[e._v("Last ned")]),e._v(" "),a("column",{attrs:{sm:"3"}},[e._v("Last ned")])],1),e._v(" "),a("row",[a("column",{attrs:{sm:"3"}},[e._v("Last ned")]),e._v(" "),a("column",{attrs:{sm:"3"}},[e._v("Last ned")]),e._v(" "),a("column",{attrs:{sm:"3"}},[e._v("Last ned")]),e._v(" "),a("column",{attrs:{sm:"3"}},[e._v("Last ned")])],1)],1)},staticRenderFns:[]};var q={name:"ThemeRelated",data:function(){return{data:N.a}},components:{ImageComponent:x}},H={render:function(){var e=this.$createElement,t=this._self._c||e;return t("container",{staticClass:"lh-hero",attrs:{hero:"true"}},[t("row",[t("column",{attrs:{sm:"5",smOffset:"1"}},[t("ImageComponent",{attrs:{url:a("dsmR")}})],1),this._v(" "),t("column",{attrs:{sm:"6"}},[t("h1",[this._v("Les videre")])]),this._v(" "),t("row",[t("column",[t("p",[this._v("Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                    Iusto dolorem consequatur sint qui facere at reprehenderit\n                    laudantium, consequuntur similique, impedit tempora velit\n                    unde officiis ad vero dicta facilis fugiat provident.\n                  ")])])],1)],1)],1)},staticRenderFns:[]};var B={name:"ThemeSite",props:{},data:function(){return{data:N.a}},components:{ThemeContent:a("VU/8")(j,S,!1,function(e){a("kDaI")},"data-v-ca89aade",null).exports,ThemeNav:a("VU/8")({name:"ThemeNav",data:function(){return{}},methods:{onItemChanged:function(e,t,a){}}},M,!1,function(e){a("VaJB")},"data-v-1944c511",null).exports,ThemeHero:a("VU/8")(U,D,!1,function(e){a("RAVe")},"data-v-61607006",null).exports,ThemeDownload:a("VU/8")({name:"ThemeDownload",data:function(){return{}}},A,!1,function(e){a("pJ2M")},"data-v-4b9e9bd2",null).exports,ThemeRelated:a("VU/8")(q,H,!1,function(e){a("ETGl")},"data-v-51d782fd",null).exports}},G={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("ThemeHero"),this._v(" "),t("ThemeNav"),this._v(" "),t("div",{attrs:{id:"theme-content"}},[t("ThemeContent")],1),this._v(" "),t("ThemeDownload"),this._v(" "),t("ThemeRelated")],1)},staticRenderFns:[]};var K=a("VU/8")(B,G,!1,function(e){a("j3O9")},"data-v-7fc76b55",null).exports;n.a.use(k.a);var W=new k.a({routes:[{path:"/",name:"Home",component:P},{path:"/innlogget",name:"LoggedIn",component:V},{path:"/ikke-innlogget",name:"NotLoggedIn",component:F},{path:"/tema-side",name:"ThemeSite",component:K}]});n.a.component("v-select",_.a),n.a.use(v.a,{duration:800,scale:1,distance:"10px",mobile:!1}),n.a.use(l.a),n.a.use(m.a),n.a.use(i.a),n.a.use(s.a),n.a.config.productionTip=!1,new n.a({el:"#app",render:function(e){return e(f)},router:W,components:{App:f},template:"<App/>"})},RAVe:function(e,t){},VaJB:function(e,t){},WaWv:function(e,t){},YMr4:function(e,t){},dsmR:function(e,t,a){e.exports=a.p+"static/img/study.01ae4e1.jpg"},j3O9:function(e,t){},kDaI:function(e,t){},l9gp:function(e,t){},pDMO:function(e,t){},pJ2M:function(e,t){},re9S:function(e,t){},roBp:function(e,t){},yJIQ:function(e,t,a){e.exports=a.p+"static/img/person.9c3ae62.jpg"}},["NHnr"]);
//# sourceMappingURL=app.986b63899e19476b3730.js.map