(function(e){function t(t){for(var a,n,o=t[0],l=t[1],c=t[2],d=0,p=[];d<o.length;d++)n=o[d],r[n]&&p.push(r[n][0]),r[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],a=!0,o=1;o<s.length;o++){var l=s[o];0!==r[l]&&(a=!1)}a&&(i.splice(t--,1),e=n(n.s=s[0]))}return e}var a={},r={app:0},i=[];function n(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=a,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var a=s("64a9"),r=s.n(a);r.a},"25da":function(e,t,s){"use strict";var a=s("3129"),r=s.n(a);r.a},3129:function(e,t,s){},"4aea":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);var a=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("nav",{staticClass:"navbar navbar-expand justify-content-between p-3"},[s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarTogglerDemo02"}},[s("ul",{staticClass:"navbar-nav mr-auto mt-lg-2"},[e._m(0),s("li",{staticClass:"nav-item active"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[s("router-link",{staticStyle:{color:"#c36a2d"},attrs:{to:{name:"home"},title:"Home"}},[s("i",{staticClass:"fas fa-home"})])],1)]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[e.user.id?s("router-link",{staticStyle:{color:"#c36a2d"},attrs:{to:{name:"collections"},title:"Collections"}},[s("i",{staticClass:"fas fa-book-open"})]):e._e()],1)]),e._m(1),e._m(2)]),e.user.id?s("button",{staticClass:"btn btn-secondary p-0",on:{click:e.logout}},[e._v("Logout")]):s("router-link",{staticStyle:{color:"black"},attrs:{to:{name:"login"}}},[e._v("Login")])],1)])])]),s("div",{staticClass:"modal fade",attrs:{id:"postModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[e._m(3),s("div",{staticClass:"modal-body"},[e.user.id?s("form",{on:{submit:function(t){return t.preventDefault(),e.createKeep(t)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.newKeep.img,expression:"newKeep.img"}],staticClass:"form-control form-control-sm",attrs:{required:"",type:"text",placeholder:"Image URL"},domProps:{value:e.newKeep.img},on:{input:function(t){t.target.composing||e.$set(e.newKeep,"img",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newKeep.name,expression:"newKeep.name"}],staticClass:"form-control form-control-sm",attrs:{required:"",type:"text",placeholder:"Name"},domProps:{value:e.newKeep.name},on:{input:function(t){t.target.composing||e.$set(e.newKeep,"name",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newKeep.description,expression:"newKeep.description"}],staticClass:"form-control mb-1",attrs:{required:"",type:"text",placeholder:"Description"},domProps:{value:e.newKeep.description},on:{input:function(t){t.target.composing||e.$set(e.newKeep,"description",t.target.value)}}}),e._v("\n            Private?"),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newKeep.isPrivate,expression:"newKeep.isPrivate"}],staticStyle:{margin:"1vh"},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.newKeep.isPrivate)?e._i(e.newKeep.isPrivate,null)>-1:e.newKeep.isPrivate},on:{change:function(t){var s=e.newKeep.isPrivate,a=t.target,r=!!a.checked;if(Array.isArray(s)){var i=null,n=e._i(s,i);a.checked?n<0&&e.$set(e.newKeep,"isPrivate",s.concat([i])):n>-1&&e.$set(e.newKeep,"isPrivate",s.slice(0,n).concat(s.slice(n+1)))}else e.$set(e.newKeep,"isPrivate",r)}}}),s("button",{staticClass:"btn btn-secondary",attrs:{type:"submit"}},[e._v("Submit")])]):e._e()])])])]),s("div",{staticClass:"modal fade",attrs:{id:"collectionModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[e._m(4),s("div",{staticClass:"modal-body"},[e.user.id?s("form",{on:{submit:function(t){return t.preventDefault(),e.createVault(t)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.newVault.name,expression:"newVault.name"}],staticClass:"form-control form-control-sm",attrs:{required:"",type:"text",placeholder:"Collection Name"},domProps:{value:e.newVault.name},on:{input:function(t){t.target.composing||e.$set(e.newVault,"name",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newVault.description,expression:"newVault.description"}],staticClass:"form-control form-control-sm mb-1",attrs:{required:"",type:"text",placeholder:"Description"},domProps:{value:e.newVault.description},on:{input:function(t){t.target.composing||e.$set(e.newVault,"description",t.target.value)}}}),s("button",{staticClass:"btn btn-secondary",attrs:{type:"submit"}},[e._v("Submit")])]):e._e()])])])]),s("router-view")],1)},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",{staticClass:"nav-item active"},[s("a",{staticClass:"nav-link",staticStyle:{color:"#2c3e50"},attrs:{href:"#"}},[s("h4",[s("b",[e._v("COLLECTREST")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",staticStyle:{color:"#c36a2d"},attrs:{href:"#","data-toggle":"modal","data-target":"#postModal"}},[s("i",{staticClass:"fas fa-pencil-alt"}),e._v("Post")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",staticStyle:{color:"#c36a2d"},attrs:{href:"#","data-toggle":"modal","data-target":"#collectionModal"}},[s("i",{staticClass:"fas fa-pencil-alt"}),e._v("Collection")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e._v("New Post")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e._v("New Collection")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])}],n={data(){return{newVault:{name:"",description:""},newKeep:{img:"",name:"",description:"",isPrivate:0}}},computed:{user(){return this.$store.state.user},keeps(){return this.$store.state.keeps},vaults(){return this.$store.state.vaults}},methods:{logout(){this.$store.dispatch("logout")},createKeep(e){this.$store.dispatch("createKeep",this.newKeep)},createVault(e){this.$store.dispatch("createVault",this.newVault)}}},o=n,l=(s("034f"),s("2877")),c=Object(l["a"])(o,r,i,!1,null,null,null),u=c.exports,d=s("8c4f"),p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("div",{staticClass:"row keeps mt-2"},[s("div",{staticClass:"col-12"},[s("h2",[e._v("Welcome Home "+e._s(e.user.username))])])]),s("keeps",{attrs:{keepsData:e.keeps}})],1)},m=[],v=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home row"},e._l(e.keepsData,function(t){return s("div",{staticClass:"col-3"},[s("div",{staticClass:"card",staticStyle:{width:"16rem",height:"30rem"}},[s("img",{staticClass:"card-img-top",attrs:{src:t.img,alt:"image"}}),s("div",{staticClass:"card-body d-flex justify-content-end flex-column"},[s("h5",{staticClass:"card-title"},[e._v(e._s(t.name))]),s("p",{staticClass:"card-text"},[e._v(e._s(t.description)+"\n        ")]),s("p",{staticClass:"card-text"},[e._v(e._s(1==t.isPrivate?"Private Post":"Public Post"))])]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"btn btn-secondary",staticStyle:{margin:"1vh"},on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selected=t.target.multiple?s:s[0]},function(s){e.addKeep(t.id)}]}},[s("option",{attrs:{disabled:"",value:""}},[e._v("Archive to Collection")]),e._l(e.vaults,function(t){return s("option",{domProps:{value:t.id}},[e._v(e._s(t.name))])})],2)])])}))},h=[],f={name:"keeps",props:["keepsData"],data(){return{selected:""}},computed:{keeps(){return this.$store.state.keeps},vaults(){return this.$store.state.vaults}},methods:{addKeep(e){let t={keepId:e,vaultId:this.selected};this.$store.dispatch("addKeep",t)}}},g=f,w=(s("7d61"),Object(l["a"])(g,v,h,!1,null,"dcf3563e",null)),_=w.exports,b={name:"home",computed:{user(){return this.$store.state.user},keeps(){return this.$store.state.keeps}},mounted(){this.$store.dispatch("getKeeps")},components:{Keeps:_}},C=b,y=Object(l["a"])(C,p,m,!1,null,null,null),K=y.exports,$=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[e.loginForm?s("form",{on:{submit:function(t){return t.preventDefault(),e.loginUser(t)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.creds.email,expression:"creds.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:e.creds.email},on:{input:function(t){t.target.composing||e.$set(e.creds,"email",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.creds.password,expression:"creds.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.creds.password},on:{input:function(t){t.target.composing||e.$set(e.creds,"password",t.target.value)}}}),s("button",{attrs:{type:"submit"}},[e._v("Login")])]):s("form",{on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.username,expression:"newUser.username"}],attrs:{type:"text",placeholder:"name"},domProps:{value:e.newUser.username},on:{input:function(t){t.target.composing||e.$set(e.newUser,"username",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.email,expression:"newUser.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:e.newUser.email},on:{input:function(t){t.target.composing||e.$set(e.newUser,"email",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.password,expression:"newUser.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.newUser.password},on:{input:function(t){t.target.composing||e.$set(e.newUser,"password",t.target.value)}}}),s("button",{attrs:{type:"submit"}},[e._v("Create Account")])]),s("div",{on:{click:function(t){e.loginForm=!e.loginForm}}},[e.loginForm?s("p",[e._v("No account Click to Register")]):s("p",[e._v("Already have an account click to Login")])])])},k=[],x={name:"login",data(){return{loginForm:!0,creds:{email:"",password:""},newUser:{email:"",password:"",username:""}}},beforeCreate(){this.$store.state.user.id&&this.$router.push({name:"home"})},methods:{register(){this.$store.dispatch("register",this.newUser)},loginUser(){this.$store.dispatch("login",this.creds)}}},P=x,V=Object(l["a"])(P,$,k,!1,null,null,null),U=V.exports,S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"collections"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h2",[e._v(e._s(e.user.username)+"'s Collections")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h4",[e._v("Your Posts")]),s("userKeeps",{attrs:{userKeepsData:e.userKeeps}})],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h4",[e._v("Your Collections")]),s("vaults",{attrs:{vaultsData:e.vaults}})],1)])])},j=[],E=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row userKeeps"},e._l(e.userKeeps,function(t){return s("div",{key:t.id,staticClass:"col-3"},[s("div",{staticClass:"card",staticStyle:{width:"16rem",height:"30rem",margin:"1vh"}},[s("img",{staticClass:"card-img-top",attrs:{src:t.img,alt:"image"}}),s("div",{staticClass:"card-body d-flex justify-content-end flex-column"},[s("h5",{staticClass:"card-title"},[e._v(e._s(t.name))]),s("p",{staticClass:"card-text"},[e._v(e._s(t.description)+"\n        ")]),s("p",{staticClass:"card-text"},[e._v(e._s(1==t.isPrivate?"Private Post":"Public Post"))]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"btn btn-secondary",staticStyle:{margin:"1vh"},on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selected=t.target.multiple?s:s[0]},function(s){e.addKeep(t.id)}]}},[s("option",{staticStyle:{color:"white"},attrs:{disabled:"",value:""}},[e._v("Archive to Collection")]),e._l(e.vaults,function(t){return s("option",{domProps:{value:t.id}},[e._v(e._s(t.name))])})],2),s("button",{staticClass:"btn btn-secondary p-1",on:{click:function(s){e.deleteKeep(t.id)}}},[e._v("Delete")])])])])}))},O=[],D={name:"userKeeps",props:["userKeepsData"],data(){return{selected:""}},mounted(){this.$store.dispatch("getUserKeeps")},computed:{userKeeps(){return this.$store.state.userKeeps},vaults(){return this.$store.state.vaults}},methods:{deleteKeep(e){this.$store.dispatch("deleteKeep",e)},addKeep(e){let t={keepId:e,vaultId:this.selected};this.$store.dispatch("addKeep",t)}},components:{}},N=D,A=(s("25da"),Object(l["a"])(N,E,O,!1,null,null,null)),L=A.exports,M=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row vaults"},e._l(e.vaults,function(t){return s("div",{key:t.id,staticClass:"col-2"},[s("div",{staticClass:"card",staticStyle:{width:"10rem",height:"10rem","background-color":"#e2c175"}},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[s("router-link",{staticStyle:{color:"#2c3e50"},attrs:{to:{name:"collectionsArchive",params:{id:t.id}}}},[e._v("\n            "+e._s(t.name)+"\n          ")])],1),s("p",{staticClass:"card-text"},[e._v(e._s(t.description)+"\n        ")]),s("button",{staticClass:"btn btn-secondary p-1",on:{click:function(s){e.deleteVault(t.id)}}},[e._v("Delete")])])])])}))},I=[],R={name:"vaults",props:["vaultsData"],data(){return{}},mounted(){this.$store.dispatch("getVaults")},computed:{vaults(){return this.$store.state.vaults}},methods:{deleteVault(e){this.$store.dispatch("deleteVault",e)}},components:{}},q=R,F=(s("7383"),Object(l["a"])(q,M,I,!1,null,null,null)),T=F.exports,H={name:"collections",props:[],data(){return{}},mounted(){this.$store.dispatch("getVaults"),this.$store.dispatch("getUserKeeps")},computed:{vaults(){return this.$store.state.vaults},userKeeps(){return this.$store.state.userKeeps},user(){return this.$store.state.user}},components:{UserKeeps:L,Vaults:T}},J=H,Y=(s("77d4"),Object(l["a"])(J,S,j,!1,null,null,null)),W=Y.exports,z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("h4",[e._v(e._s(e.vaults.name)+" Post Archive")]),s("vaultKeeps",{attrs:{vaultKeepsData:e.vaultKeeps}})],1)])])},B=[],G=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row vaultKeeps"},e._l(e.vaultKeeps,function(t){return s("div",{key:t.id,staticClass:"col-3"},[s("div",{staticClass:"card",staticStyle:{width:"16rem",height:"30rem"}},[s("img",{staticClass:"card-img-top",attrs:{src:t.img,alt:"image"}}),s("div",{staticClass:"card-body d-flex justify-content-end flex-column"},[s("h5",{staticClass:"card-title"},[e._v(e._s(t.name))]),s("p",{staticClass:"card-text"},[e._v(e._s(t.description)+"\n        ")]),s("p",{staticClass:"card-text"},[e._v(e._s(1==t.isPrivate?"Private Post":"Public Post"))]),s("button",{staticClass:"btn btn-secondary",on:{click:function(s){e.removeKeep(t.id)}}},[e._v("Remove")])])])])}))},Q=[],X={name:"vaultKeeps",props:["vaultKeepsData"],data(){return{}},mounted(){this.$store.dispatch("getVaultKeeps",this.$route.params.id)},computed:{vaultKeeps(){return this.$store.state.vaultKeeps}},methods:{removeKeep(e){let t=this.$route.params.id;this.$store.dispatch("removeKeep",{keepId:e,vaultId:t})}}},Z=X,ee=(s("d549"),Object(l["a"])(Z,G,Q,!1,null,"881345f2",null)),te=ee.exports,se={name:"collectionsArchive",props:[],data(){return{}},mounted(){this.$store.dispatch("getVaultKeeps",this.$route.params.id)},computed:{vaults(){return this.$store.state.vaults},vaultKeeps(){return this.$store.state.vaultKeeps}},components:{VaultKeeps:te}},ae=se,re=Object(l["a"])(ae,z,B,!1,null,null,null),ie=re.exports;a["a"].use(d["a"]);var ne=new d["a"]({routes:[{path:"/",name:"home",component:K},{path:"/login",name:"login",component:U},{path:"/collections",name:"collections",component:W},{path:"/collections/:id",name:"collectionsArchive",props:!0,component:ie}]}),oe=s("2f62"),le=s("bc3a"),ce=s.n(le);let ue=location.host.includes("localhost")?"//localhost:5000/":"/",de=ce.a.create({baseURL:ue+"account/",timeout:3e3,withCredentials:!0});class pe{static async Login(e){try{let s=await de.post("login",e);return s.data}catch(t){throw new Error("[login failed] :"+t.response.data)}}static async Register(e){try{let s=await de.post("register",e);return s.data}catch(t){throw new Error("[registration failed] :"+t.response.data)}}static async Logout(){try{await de.delete("logout");return!0}catch(e){throw new Error("[logout failed] :"+e.response.data)}}static async Authenticate(){try{let t=await de.get("authenticate");return t.data}catch(e){console.warn("[Authentication failed] :"+e.response.data)}}}a["a"].use(oe["a"]);let me=location.host.includes("localhost")?"//localhost:5000/":"/",ve=ce.a.create({baseURL:me+"api/",timeout:3e3,withCredentials:!0});var he=new oe["a"].Store({state:{user:{},keeps:[],userKeeps:[],vaults:[],vaultKeeps:[]},mutations:{setUser(e,t){e.user=t},resetState(e){e.user={}},setKeeps(e,t){e.keeps=t},setUserKeeps(e,t){e.userKeeps=t},setVaults(e,t){e.vaults=t},setVaultKeeps(e,t){e.vaultKeeps=t},addVaultKeep(e,t){e.vaultKeeps.push(t)},addKeep(e,t){e.keeps.push(t)},addVault(e,t){e.vaults.push(t)}},actions:{async register({commit:e,dispatch:t},s){try{let t=await pe.Register(s);e("setUser",t),ne.push({name:"home"})}catch(a){console.warn(a.message)}},async login({commit:e,dispatch:t},s){try{let t=await pe.Login(s);e("setUser",t),ne.push({name:"home"})}catch(a){console.warn(a.message)}},async logout({commit:e,dispatch:t}){try{await pe.Logout();e("resetState"),ne.push({name:"login"})}catch(s){console.warn(s.message)}},getKeeps({commit:e,dispatch:t}){ve.get("keeps").then(t=>{e("setKeeps",t.data)})},getUserKeeps({commit:e,dispatch:t}){ve.get("keeps/user").then(t=>{e("setUserKeeps",t.data)})},async createKeep({commit:e,dispatch:t},s){try{await ve.post("keeps",s);t("getKeeps")}catch(a){console.error(a)}},async addKeep({commit:e,dispatch:t},s){try{let e=await ve.post("vaultkeeps",s);t("getKeeps",s.vaultId),t("getKeeps"),console.log(e)}catch(a){console.error(a)}},deleteKeep({commit:e,dispatch:t},s){ve.delete("keeps/"+s).then(e=>{t("getKeeps")})},getVaults({commit:e,dispatch:t}){ve.get("vaults").then(t=>{e("setVaults",t.data)})},async createVault({commit:e,dispatch:t},s){try{await ve.post("vaults",s);t("getVaults")}catch(a){console.error(a)}},deleteVault({commit:e,dispatch:t},s){ve.delete("vaults/"+s).then(e=>{t("getVaults")})},getVaultKeeps({commit:e,dispatch:t},s){ve.get("/vaultkeeps/"+s).then(t=>{e("setVaultKeeps",t.data)})},removeKeep({commit:e,dispatch:t},s){ve.put("/vaultkeeps",s).then(e=>{t("getVaultKeeps",s.vaultId)})}}});async function fe(){let e=await pe.Authenticate();e&&he.commit("setUser",e),new a["a"]({router:ne,store:he,render:e=>e(u)}).$mount("#app")}fe()},"64a9":function(e,t,s){},7383:function(e,t,s){"use strict";var a=s("d84b"),r=s.n(a);r.a},"77d4":function(e,t,s){"use strict";var a=s("8378"),r=s.n(a);r.a},"7d61":function(e,t,s){"use strict";var a=s("ad71"),r=s.n(a);r.a},8378:function(e,t,s){},ad71:function(e,t,s){},d549:function(e,t,s){"use strict";var a=s("4aea"),r=s.n(a);r.a},d84b:function(e,t,s){}});