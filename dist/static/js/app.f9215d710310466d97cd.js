webpackJsonp([0],{"9Kbi":function(e,t){},"9V/6":function(e,t){},Cuwq:function(e,t){e.exports={id:1,siteTitle:"Ansette midlertidig",lead:"En eller annen lang ingress om ett eller annet.",sectionOneTitle:"Før du ansetter noen midlertidig"}},E0EW:function(e,t,a){"use strict";a("quWu");var s={data:function(){return{}},props:{onlyOneActive:{default:!1,type:Boolean}},computed:{elements:function(){return this.$children},elements_count:function(){return this.$children.length},active_elements:function(){return this.$children.filter(function(e){return!0===e.status})}},methods:{closeAll:function(){this.$children.forEach(function(e){e.close()})},openAll:function(){this.$children.forEach(function(e){e.open()})}}},n={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"v-collapse-group"},[this._t("default")],2)},staticRenderFns:[]},i=a("VU/8")(s,n,!1,null,null,null);t.a=i.exports},Ftlx:function(e,t,a){e.exports=a.p+"static/img/hockey.6fe8f35.gif"},Hf0R:function(e,t,a){"use strict";var s=a("quWu"),n={data:function(){return{nodes:{},status:!1}},props:["active"],watch:{active:function(e){null!=e&&(this.status=e)},status:function(e,t){if(this.$emit("onStatusChange",{vm:this,status:e,old_status:t}),!1===this.$parent.onlyOneActive)Object(s.toggleElement)(this.nodes.content,this.$options.$vc.settings);else if(!0===e&&!1===t){var a=this.$parent.$children.filter(function(e){return!0===e.status});a.length>1&&a.forEach(function(e){e.close(),Object(s.closeElement)(e.nodes.content,this.$options.$vc.settings)}.bind(this)),Object(s.openElement)(this.nodes.content,this.$options.$vc.settings),this.open()}else!0===t&&!1===e&&(Object(s.closeElement)(this.nodes.content,this.$options.$vc.settings),this.close())}},methods:{toggle:function(){this.$emit("beforeToggle",this),this.status=!this.status,this.$emit("afterToggle",this)},close:function(){this.$emit("beforeClose",this),this.status=!1,this.$emit("afterClose",this)},open:function(){this.$emit("beforeOpen",this),this.status=!0,this.$emit("afterOpen",this)}},mounted:function(){var e=this;this.nodes.toggle=this.$el.querySelector("."+this.$options.$vc.settings.togglerClassDefault),this.nodes.content=this.$el.querySelector("."+this.$options.$vc.settings.contentClassDefault),this.$emit("afterNodesBinding",{vm:this,nodes:this.nodes}),null!==this.nodes.toggle&&this.nodes.toggle.addEventListener("click",function(){e.toggle()}),null!=this.active&&(this.status=this.active)}},i={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{class:"vc-"+this.$options.$vc.settings.basename},[this._t("default")],2)},staticRenderFns:[]};var r=a("VU/8")(n,i,!1,function(e){a("roBp")},null,null);t.a=r.exports},M72V:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("7+uW"),n=a("Vn2I"),i=a("3ZR5"),r=a.n(i),l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"lh-menu"},[a("div",{staticClass:"item"},[a("router-link",{attrs:{to:"/"}},[e._v("Kontakt oss")])],1),e._v(" "),a("div",{staticClass:"item"},[a("router-link",{attrs:{to:"/"}},[a("h3",[e._v(e._s(e.sitetitle))])])],1),e._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"modal-container"},[a("button",{directives:[{name:"show",rawName:"v-show",value:!e.show,expression:"!show"}],staticClass:"button-primary",attrs:{type:"button"},on:{click:e.toggle}},[e._v("\n            Søk/ Meny\n          ")])])])]),e._v(" "),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"modal",on:{click:e.toggle}},[a("div",{staticClass:"modal-message"},[a("div",{staticClass:"modal-header"},[a("h2",[e._v("Meny")])]),e._v(" "),a("div",{staticClass:"modal-body"},[a("ul",[a("li",[a("router-link",{attrs:{to:"/innlogget"}},[e._v("\n                      Innlogget forside\n                    ")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/ikke-innlogget"}},[e._v("\n                      Ikke innlogget forside\n                    ")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/tema-side"}},[e._v("\n                      Tema side\n                    ")])],1)])])])])])],1)},staticRenderFns:[]};var o={name:"App",components:{Menu:a("VU/8")({data:function(){return{sitetitle:"Lederhuset",MenuSymbol:"Meny",show:!1}},methods:{toggle:function(){this.show=!this.show}}},l,!1,function(e){a("9V/6")},"data-v-6b9fb316",null).exports}},v={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Menu"),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var c=a("VU/8")(o,v,!1,function(e){a("re9S")},null,null).exports,_=a("/ocq"),p={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[t("h1",[this._v(this._s(this.siteTitle))]),this._v(" "),t("h2",[this._v(this._s(this.lead))])])},staticRenderFns:[]};var d=a("VU/8")({name:"HelloWorld",data:function(){return{siteTitle:"Dette blir bra!",lead:"Lederhuset er en portal for ledere og arbeidsgivere\n        med praktiske verktøy og juridisk veiledning samlet på et sted."}}},p,!1,function(e){a("M72V")},"data-v-bfd9480a",null).exports,h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lh-collapse"},[a("v-collapse-wrapper",[a("div",{directives:[{name:"collapse-toggle",rawName:"v-collapse-toggle"}],staticClass:"lh-collapse__header"},[a("affix",{staticStyle:{width:"100%"},attrs:{"relative-element-selector":"#collapse-content-1",offset:{top:140,bottom:-80}}},[a("h2",[e._v("Før du ansetter")])])],1),e._v(" "),a("div",{directives:[{name:"collapse-content",rawName:"v-collapse-content"}],staticClass:"my-content"},[a("section",{attrs:{id:"collapse-content-1"}},[a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")])])])]),e._v(" "),a("v-collapse-wrapper",[a("div",{directives:[{name:"collapse-toggle",rawName:"v-collapse-toggle"}],staticClass:"lh-collapse__header"},[a("affix",{staticStyle:{width:"100%"},attrs:{"relative-element-selector":"#collapse-content-2",offset:{top:140,bottom:-80}}},[a("h2",[e._v("Oppfølging av midlertidige ansatte")])])],1),e._v(" "),a("div",{directives:[{name:"collapse-content",rawName:"v-collapse-content"}],staticClass:"lh-collapse__content"},[a("section",{attrs:{id:"collapse-content-2"}},[a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")])])])]),e._v(" "),a("v-collapse-wrapper",[a("div",{directives:[{name:"collapse-toggle",rawName:"v-collapse-toggle"}],staticClass:"lh-collapse__header"},[a("affix",{staticStyle:{width:"100%"},attrs:{"relative-element-selector":"#collapse-content-3",offset:{top:140,bottom:-80}}},[a("h2",[e._v("Tips for å lykkes")])])],1),e._v(" "),a("div",{directives:[{name:"collapse-content",rawName:"v-collapse-content"}],staticClass:"my-content"},[a("section",{attrs:{id:"collapse-content-3"}},[a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")])])])]),e._v(" "),a("v-collapse-wrapper",[a("div",{directives:[{name:"collapse-toggle",rawName:"v-collapse-toggle"}],staticClass:"lh-collapse__header"},[a("affix",{staticStyle:{width:"100%"},attrs:{"relative-element-selector":"#collapse-content-4",offset:{top:140,bottom:-80}}},[a("h2",[e._v("Maler")])])],1),e._v(" "),a("div",{directives:[{name:"collapse-content",rawName:"v-collapse-content"}],staticClass:"my-content"},[a("section",{attrs:{id:"collapse-content-4"}},[a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")]),e._v(" "),a("p",[e._v(" "+e._s(e.ExampleParagraph)+" ")])])])])],1)},staticRenderFns:[]};var m={name:"LoggedIn",data:function(){return{siteTitle:"Her er vi innlogga"}},components:{IndexMeny:a("VU/8")({name:"IndexMeny",data:function(){return{scrollAffix:!0,enabled:!1,relativeElementSelector:!1,ExampleParagraph:"Living a fully ethical life gender rights,\n                        parse ideate rubric incubator, strategize engaging;\n                        data correlation collaborative cities empower communities\n                        co-create justice. Compelling circular, storytelling contextualize,\n                        and impact investing the support impact grit program areas.\n                        A social entrepreneurship capacity building; scalable segmentation B-corp.\n                        Vibrant overcome injustice thought leadership grit overcome injustice,\n                        low-hanging fruit strengthening infrastructure peaceful agile granular. "}}},h,!1,function(e){a("9Kbi")},"data-v-6457d119",null).exports}},g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[t("h1",[this._v(this._s(this.siteTitle))]),this._v(" "),t("IndexMeny")],1)},staticRenderFns:[]};var u=a("VU/8")(m,g,!1,function(e){a("l9gp")},"data-v-03e5004d",null).exports,f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[t("h1",[this._v(this._s(this.siteTitle))])])},staticRenderFns:[]};var k=a("VU/8")({name:"NotLoggedIn",data:function(){return{siteTitle:"Ikke innlogget forside"}}},f,!1,function(e){a("pDMO")},"data-v-431e7500",null).exports,b=a("Cuwq"),x=a.n(b),E={name:"ThemeSite",data:function(){return{data:x.a}},methods:{onItemChanged:function(e,t,a){}},beforeCreate:function(){document.body.className="light"}},C={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"light"},[a("scrollactive",{staticClass:"my-nav",attrs:{"active-class":"active",offset:10,duration:800,"bezier-easing-value":".5,0,.35,1"},on:{itemchanged:e.onItemChanged}},[a("a",{staticClass:"scrollactive-item",attrs:{href:"#one"}},[e._v("Før du ansetter noen midlertidig")]),e._v(" "),a("a",{staticClass:"scrollactive-item",attrs:{href:"#two"}},[e._v("God oppfølging")]),e._v(" "),a("a",{staticClass:"scrollactive-item",attrs:{href:"#three"}},[e._v("Tips for å lykkes")]),e._v(" "),a("a",{staticClass:"scrollactive-item",attrs:{href:"#four"}},[e._v("Last ned maler")])]),e._v(" "),a("div",{staticClass:"lh-hero"},[a("h1",[e._v(e._s(e.data.siteTitle))]),e._v(" "),a("p",[e._v(e._s(e.data.lead))]),e._v(" "),e._m(0)]),e._v(" "),a("div",{staticClass:"lh-block"},[e._m(1),e._v(" "),e._m(2),e._v(" "),a("div",{staticClass:"lh-block__content"},[a("div",{staticClass:"lh-block__textBlock"},[a("h3",[e._v("Kanskje enda en tittel her først")]),e._v(" "),a("h4",[e._v("Krav til deg som ansetter")]),e._v(" "),a("p",[e._v("Dersom du avslutter arbeidsforholdet, inntrer en karantene i\n              en periode på tolv måneder.I perioden kan du ikke ansette\n              andre til de samme arbeidsoppgavene\n            ")]),e._v(" "),a("h4",[e._v("Ikke ha mange midlertidig ansatte")]),e._v(" "),a("p",[e._v("Du kan ikke ha mer enn 15 prosent av arbeidstakerne på slike kontrakter.")]),e._v(" "),a("h4",[e._v("Oppsigelsestid")]),e._v(" "),a("p",[e._v("Du må varsle skriftlig senest 1 måned før fratredelsestidspunktet,\n              dersom en person har vært ansatt i mer enn 1 år.\n            ")]),e._v(" "),a("v-collapse-wrapper",[a("div",{directives:[{name:"collapse-toggle",rawName:"v-collapse-toggle"}],staticClass:"lh-collapse__header"},[a("u",[e._v("Vis lovtekst")])]),e._v(" "),a("div",{directives:[{name:"collapse-content",rawName:"v-collapse-content"}],staticClass:"my-content"},[a("h4",[e._v("Lov om midlertidig ansettelse")]),e._v(" "),a("p",[e._v("Dersom en midlertidig ansettelse har vart mer enn fire år\n                      sammenhengende, skal du behandle den ansatte som fast ansatt\n                      når arbeidsforholdet bir avsluttet. Dersom en midlertidig ansettelse\n                      har vart mer enn fire år sammenhengende, skal du behandle den ansatte\n                      som fast ansatt når arbeidsforholdet bir avsluttet.\n                    ")]),e._v(" "),a("p",[e._v("Kilde: "),a("a",{attrs:{href:"#"}},[e._v("Lovdata.no")])])])])],1)]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5)])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("Før du ansetter midlertidig")]),this._v(" "),t("li",[this._v("God oppfølging")]),this._v(" "),t("li",[this._v("Tips for å lykkes")]),this._v(" "),t("li",[this._v("Last ned maler om «ferie»")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"lh-block__content"},[t("div",{staticClass:"lh-block__grid"},[t("div",{staticClass:"lh-block__grid--item"},[t("h3",[this._v("Kort sagt")])]),this._v(" "),t("div",{staticClass:"lh-block__grid--item"},[t("p",[this._v("For å ansette midlertidig må arbeidsoppgavene være midlertidige\n                eller sesongbaserte.Din motivasjon kan ikke være å omgå\n                oppsigelsesvernet, eller å gjøre det lett å\n                avslutte arbeidsforhold.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"lh-block__content",attrs:{id:"one"}},[t("h1",[this._v("1. "),t("br"),this._v("\n            Før du ansetter noen midlertidig\n            ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"lh-block__content",attrs:{id:"two"}},[t("h1",[this._v("2. "),t("br"),this._v("\n              God Oppfølging\n              ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"lh-block__content"},[s("div",{staticClass:"lh-block__textBlock"},[s("h4",[e._v("Krav til deg som ansetter")]),e._v(" "),s("p",[e._v("Gjør vedkommende i stand til å tilpasse seg arbeidsstedet og\n                    arbeidsoppgavene på en effektiv og god måte.\n                  ")]),e._v(" "),s("p",[e._v("Gi den ansatte muligheten til å sette seg inn i reglene på arbeidsplassen,\n                    for eksempel eventuell tariffavtale, personalhåndbok, arbeidsreglement,\n                    HMS-rutiner, arbeidsrutiner, øvrige sikkerhetsrutiner og annet som\n                    er relevant.\n                  ")]),e._v(" "),s("h4",[e._v("Styr forventninger")]),e._v(" "),s("p",[e._v("Tydeliggjør forventninger om hvordan vedkommende skal representere\n                    virksomheten din utad, om eventuelle individuelle mål, hvordan arbeidet\n                    skal utføres og hvordan du vil at hun eller han samhandler og rapporterer\n                    internt. Vær så konkret som mulig, og still spørsmål om noe oppleves som\n                    uklart.\n                  ")]),e._v(" "),s("h4",[e._v("Lag tydelige rammer for opplæringen")]),e._v(" "),s("p",[e._v("Informer om hvordan opplæring skal foregå, og hvilken rutine dere\n                    skal ha for tilbakemelding om hvordan tilpasningen til den nye jobben\n                    går.\n                  ")])]),e._v(" "),s("div",{staticClass:"lh-block__grid"},[s("div",{staticClass:"lh-block__grid--item"},[s("img",{attrs:{src:a("Ftlx")}})]),e._v(" "),s("div",{staticClass:"lh-block__grid--item"},[s("h4",[e._v("Last ned mal")]),e._v(" "),s("a",{attrs:{href:"#"}},[e._v("Midlertidig ansettelse")]),e._v(" "),s("p",[e._v("Word-dokument")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lh-block__content"},[a("div",{staticClass:"lh-block__factBox"},[a("h4",[e._v("Fakta")]),e._v(" "),a("p",[e._v("Vanligvis skal du gi fast ansettelse til folk. Det finnes likevel\n                noen unntak hvor du har lov til å gi midlertidig ansettelse:")]),e._v(" "),a("ul",[a("li",[e._v("arbeid av midlertidig karakter (f.eks. sesongarbeid)")]),e._v(" "),a("li",[e._v("en annen ansatt (vikariat)")]),e._v(" "),a("li",[e._v("praksisarbeid")]),e._v(" "),a("li",[e._v("deltakelse i arbeidsmarkedstiltak")]),e._v(" "),a("li",[e._v("arbeid med organisert idrett")]),e._v(" "),a("li",[e._v("behov for kortvarig arbeidskraft (inntil 12 mnd.)")])])])])}]};var P=a("VU/8")(E,C,!1,function(e){a("ZKtY")},"data-v-452cb768",null).exports;s.a.use(_.a);var $=new _.a({routes:[{path:"/",name:"HelloWorld",component:d},{path:"/innlogget",name:"LoggedIn",component:u},{path:"/ikke-innlogget",name:"NotLoggedIn",component:k},{path:"/tema-side",name:"ThemeSite",component:P}]});s.a.use(r.a),s.a.use(n.a),s.a.config.productionTip=!1,new s.a({el:"#app",render:function(e){return e(c)},router:$,components:{App:c},template:"<App/>"})},ZKtY:function(e,t){},l9gp:function(e,t){},pDMO:function(e,t){},re9S:function(e,t){},roBp:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.f9215d710310466d97cd.js.map