(function(e){function t(t){for(var s,o,n=t[0],l=t[1],c=t[2],d=0,p=[];d<n.length;d++)o=n[d],r[o]&&p.push(r[o][0]),r[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,n=1;n<a.length;n++){var l=a[n];0!==r[l]&&(s=!1)}s&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},r={app:0},i=[];function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var c=0;c<n.length;c++)t(n[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("64a9"),r=a.n(s);r.a},"54d6":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("nav",{staticClass:"navbar navbar-expand justify-content-between p-3"},[a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarTogglerDemo02"}},[a("ul",{staticClass:"navbar-nav mr-auto mt-lg-2"},[e._m(0),a("li",{staticClass:"nav-item active"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[a("router-link",{staticStyle:{color:"#c36a2d"},attrs:{to:{name:"home"},title:"Home"}},[a("i",{staticClass:"fas fa-home"})])],1)]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[e.user.id?a("router-link",{staticStyle:{color:"#c36a2d"},attrs:{to:{name:"collections"},title:"Collections"}},[a("i",{staticClass:"fas fa-book-open"})]):e._e()],1)]),e._m(1),e._m(2)]),e.user.id?a("button",{staticClass:"btn btn-secondary p-0",on:{click:e.logout}},[e._v("Logout")]):a("router-link",{attrs:{to:{name:"login"}}},[e._v("Login")])],1)])])]),a("div",{staticClass:"modal fade",attrs:{id:"postModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[e._m(3),a("div",{staticClass:"modal-body"},[e.user.id?a("form",{on:{submit:function(t){return t.preventDefault(),e.createKeep(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newKeep.img,expression:"newKeep.img"}],staticClass:"form-control form-control-sm",attrs:{required:"",type:"text",placeholder:"Image URL"},domProps:{value:e.newKeep.img},on:{input:function(t){t.target.composing||e.$set(e.newKeep,"img",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newKeep.name,expression:"newKeep.name"}],staticClass:"form-control form-control-sm",attrs:{required:"",type:"text",placeholder:"Name"},domProps:{value:e.newKeep.name},on:{input:function(t){t.target.composing||e.$set(e.newKeep,"name",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newKeep.description,expression:"newKeep.description"}],staticClass:"form-control mb-1",attrs:{required:"",type:"text",placeholder:"Description"},domProps:{value:e.newKeep.description},on:{input:function(t){t.target.composing||e.$set(e.newKeep,"description",t.target.value)}}}),e._v("\n            Private?"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newKeep.isPrivate,expression:"newKeep.isPrivate"}],staticStyle:{margin:"1vh"},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.newKeep.isPrivate)?e._i(e.newKeep.isPrivate,null)>-1:e.newKeep.isPrivate},on:{change:function(t){var a=e.newKeep.isPrivate,s=t.target,r=!!s.checked;if(Array.isArray(a)){var i=null,o=e._i(a,i);s.checked?o<0&&e.$set(e.newKeep,"isPrivate",a.concat([i])):o>-1&&e.$set(e.newKeep,"isPrivate",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.newKeep,"isPrivate",r)}}}),a("button",{staticClass:"btn btn-secondary",attrs:{type:"submit"}},[e._v("Submit")])]):e._e()])])])]),a("div",{staticClass:"modal fade",attrs:{id:"collectionModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[e._m(4),a("div",{staticClass:"modal-body"},[e.user.id?a("form",{on:{submit:function(t){return t.preventDefault(),e.createVault(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newVault.name,expression:"newVault.name"}],staticClass:"form-control form-control-sm",attrs:{required:"",type:"text",placeholder:"Collection Name"},domProps:{value:e.newVault.name},on:{input:function(t){t.target.composing||e.$set(e.newVault,"name",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newVault.description,expression:"newVault.description"}],staticClass:"form-control form-control-sm mb-1",attrs:{required:"",type:"text",placeholder:"Description"},domProps:{value:e.newVault.description},on:{input:function(t){t.target.composing||e.$set(e.newVault,"description",t.target.value)}}}),a("button",{staticClass:"btn btn-secondary",attrs:{type:"submit"}},[e._v("Submit")])]):e._e()])])])]),a("router-view")],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"nav-item active"},[a("a",{staticClass:"nav-link",staticStyle:{color:"#c36a2d"},attrs:{href:"#"}},[a("h4",[a("b",[e._v("COLLECTREST")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",staticStyle:{color:"#c36a2d"},attrs:{href:"#","data-toggle":"modal","data-target":"#postModal"}},[a("i",{staticClass:"fas fa-pencil-alt"}),e._v("Post")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",staticStyle:{color:"#c36a2d"},attrs:{href:"#","data-toggle":"modal","data-target":"#collectionModal"}},[a("i",{staticClass:"fas fa-pencil-alt"}),e._v("Collection")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e._v("New Post")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e._v("New Collection")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])}],o={data(){return{newVault:{name:"",description:""},newKeep:{img:"",name:"",description:"",isPrivate:0}}},computed:{user(){return this.$store.state.user},keeps(){return this.$store.state.keeps},vaults(){return this.$store.state.vaults}},methods:{logout(){this.$store.dispatch("logout")},createKeep(e){this.$store.dispatch("createKeep",this.newKeep)},createVault(e){this.$store.dispatch("createVault",this.newVault)}}},n=o,l=(a("034f"),a("2877")),c=Object(l["a"])(n,r,i,!1,null,null,null),u=c.exports,d=a("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{staticClass:"row keeps mt-2"},[a("div",{staticClass:"col-12"},[a("h2",[e._v("Welcome Home "+e._s(e.user.username))])]),e._l(e.keeps,function(t){return a("div",{key:t.id,staticClass:"col-lg-3 col-md-4 col-sm-6"},[a("div",{staticClass:"card",staticStyle:{width:"16rem"}},[a("img",{staticClass:"card-img-top",attrs:{src:t.img,alt:"image"}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[e._v(e._s(t.name))]),a("p",{staticClass:"card-text"},[e._v(e._s(t.description)+"\n          ")])]),a("ul",{staticClass:"list-group list-group-flush"},[a("li",{staticClass:"list-group-item",staticStyle:{"background-color":"#e2c175"}},[e._v("Private: "+e._s(t.isPrivate)+" - Views:\n            "+e._s(t.views))]),a("li",{staticClass:"list-group-item",staticStyle:{"background-color":"#e2c175"}},[e._v("Shares: "+e._s(t.shares)+" - Keeps:\n            "+e._s(t.shares))])]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selected=t.target.multiple?a:a[0]},function(a){e.addKeep(t.id)}]}},[a("option",{attrs:{disabled:"",value:""}},[e._v("Archive to Collection")]),e._l(e.vaults,function(t){return a("option",{domProps:{value:t.id}},[e._v(e._s(t.name))])})],2)])])})],2)])},m=[],v={name:"home",data(){return{newVault:{name:"",description:""},newKeep:{img:"",name:"",description:"",isPrivate:0},selected:""}},mounted(){this.$store.dispatch("getKeeps")},computed:{user(){return this.$store.state.user},keeps(){return this.$store.state.keeps},vaults(){return this.$store.state.vaults}},methods:{addKeep(e){let t={keepId:e,vaultId:this.selected};this.$store.dispatch("addKeep",t)}}},h=v,g=(a("6551"),Object(l["a"])(h,p,m,!1,null,"39560438",null)),f=g.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login"},[e.loginForm?a("form",{on:{submit:function(t){return t.preventDefault(),e.loginUser(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.creds.email,expression:"creds.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:e.creds.email},on:{input:function(t){t.target.composing||e.$set(e.creds,"email",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.creds.password,expression:"creds.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.creds.password},on:{input:function(t){t.target.composing||e.$set(e.creds,"password",t.target.value)}}}),a("button",{attrs:{type:"submit"}},[e._v("Login")])]):a("form",{on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.username,expression:"newUser.username"}],attrs:{type:"text",placeholder:"name"},domProps:{value:e.newUser.username},on:{input:function(t){t.target.composing||e.$set(e.newUser,"username",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.email,expression:"newUser.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:e.newUser.email},on:{input:function(t){t.target.composing||e.$set(e.newUser,"email",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.password,expression:"newUser.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.newUser.password},on:{input:function(t){t.target.composing||e.$set(e.newUser,"password",t.target.value)}}}),a("button",{attrs:{type:"submit"}},[e._v("Create Account")])]),a("div",{on:{click:function(t){e.loginForm=!e.loginForm}}},[e.loginForm?a("p",[e._v("No account Click to Register")]):a("p",[e._v("Already have an account click to Login")])])])},_=[],b={name:"login",data(){return{loginForm:!0,creds:{email:"",password:""},newUser:{email:"",password:"",username:""}}},beforeCreate(){this.$store.state.user.id&&this.$router.push({name:"home"})},methods:{register(){this.$store.dispatch("register",this.newUser)},loginUser(){this.$store.dispatch("login",this.creds)}}},C=b,y=Object(l["a"])(C,w,_,!1,null,null,null),K=y.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"collections"},[a("div",{staticClass:"row"},[e._m(0),a("div",{staticClass:"col-4"},[a("h4",[e._v("Your Posts")]),e._l(e.userKeeps,function(t){return a("div",{key:t.id,staticClass:"col"},[a("b",[e._v("(IMAGE)")]),e._v(e._s(t.img)+" "),a("b",[e._v("(NAME)")]),e._v(e._s(t.name)+" "),a("b",[e._v("(DESC)")]),e._v(e._s(t.description)+"\n            "),a("b",[e._v("(PRIVATE?)")]),e._v(e._s(t.isPrivate)+"\n            "),a("button",{on:{click:function(a){e.deleteKeep(t.id)}}},[e._v("Delete")])])})],2),a("div",{staticClass:"col-8"},[a("h4",[e._v("Your Collections")]),e._l(e.vaults,function(t){return a("div",{key:t.id,staticClass:"col"},[a("router-link",{attrs:{to:{name:"collectionsArchive",params:{id:t.id}}}},[a("b",[e._v("(NAME)")]),e._v(e._s(t.name)+" "),a("b",[e._v("(DESCRIPTION)")]),e._v(e._s(t.description))]),a("button",{on:{click:function(a){e.deleteVault(t.id)}}},[e._v("Delete")])],1)})],2)])])},k=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-12"},[a("h2",[e._v("COLLECTIONS")])])}],x={name:"collections",props:[],data(){return{}},mounted(){this.$store.dispatch("getVaults"),this.$store.dispatch("getUserKeeps")},computed:{vaults(){return this.$store.state.vaults},userKeeps(){return this.$store.state.userKeeps}},methods:{deleteVault(e){this.$store.dispatch("deleteVault",e)},deleteKeep(e){this.$store.dispatch("deleteKeep",e)}},components:{}},P=x,V=Object(l["a"])(P,$,k,!1,null,null,null),U=V.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h4",[e._v("ARCHIVE")]),e._l(e.vaultKeeps,function(t){return a("div",{key:t.id,staticClass:"col"},[e._v("\n        "+e._s(t.img)+e._s(t.name)+e._s(t.description)+"\n        "),a("button",{on:{click:function(a){e.removeKeep(t.id)}}},[e._v("Remove")])])})],2)])])},S=[],N={name:"collectionsArchive",props:[],data(){return{}},mounted(){this.$store.dispatch("getVaultKeeps",this.$route.params.id)},computed:{vaultKeeps(){return this.$store.state.vaultKeeps}},methods:{removeKeep(e){let t=this.$route.params.id;this.$store.dispatch("removeKeep",{keepId:e,vaultId:t})}},components:{}},A=N,L=Object(l["a"])(A,E,S,!1,null,null,null),O=L.exports;s["a"].use(d["a"]);var M=new d["a"]({routes:[{path:"/",name:"home",component:f},{path:"/login",name:"login",component:K},{path:"/collections",name:"collections",component:U},{path:"/collections/:id",name:"collectionsArchive",props:!0,component:O}]}),j=a("2f62"),I=a("bc3a"),D=a.n(I);let R=location.host.includes("localhost")?"//localhost:5000/":"/",T=D.a.create({baseURL:R+"account/",timeout:3e3,withCredentials:!0});class q{static async Login(e){try{let a=await T.post("login",e);return a.data}catch(t){throw new Error("[login failed] :"+t.response.data)}}static async Register(e){try{let a=await T.post("register",e);return a.data}catch(t){throw new Error("[registration failed] :"+t.response.data)}}static async Logout(){try{await T.delete("logout");return!0}catch(e){throw new Error("[logout failed] :"+e.response.data)}}static async Authenticate(){try{let t=await T.get("authenticate");return t.data}catch(e){console.warn("[Authentication failed] :"+e.response.data)}}}s["a"].use(j["a"]);let F=location.host.includes("localhost")?"//localhost:5000/":"/",H=D.a.create({baseURL:F+"api/",timeout:3e3,withCredentials:!0});var J=new j["a"].Store({state:{user:{},keeps:[],userKeeps:[],vaults:[],vaultKeeps:[]},mutations:{setUser(e,t){e.user=t},resetState(e){e.user={}},setKeeps(e,t){e.keeps=t},setUserKeeps(e,t){e.userKeeps=t},setVaults(e,t){e.vaults=t},setVaultKeeps(e,t){e.vaultKeeps=t},addVaultKeep(e,t){e.vaultKeeps.push(t)},addKeep(e,t){e.keeps.push(t)},addVault(e,t){e.vaults.push(t)}},actions:{async register({commit:e,dispatch:t},a){try{let t=await q.Register(a);e("setUser",t),M.push({name:"home"})}catch(s){console.warn(s.message)}},async login({commit:e,dispatch:t},a){try{let t=await q.Login(a);e("setUser",t),M.push({name:"home"})}catch(s){console.warn(s.message)}},async logout({commit:e,dispatch:t}){try{await q.Logout();e("resetState"),M.push({name:"login"})}catch(a){console.warn(a.message)}},getKeeps({commit:e,dispatch:t}){H.get("keeps").then(t=>{e("setKeeps",t.data)})},getUserKeeps({commit:e,dispatch:t}){H.get("keeps/user").then(t=>{e("setUserKeeps",t.data)})},async createKeep({commit:e,dispatch:t},a){try{await H.post("keeps",a);t("getKeeps")}catch(s){console.error(s)}},async addKeep({commit:e,dispatch:t},a){try{let e=await H.post("vaultkeeps",a);t("getKeeps",a.vaultId),t("getKeeps"),console.log(e)}catch(s){console.error(s)}},deleteKeep({commit:e,dispatch:t},a){H.delete("keeps/"+a).then(e=>{t("getKeeps")})},getVaults({commit:e,dispatch:t}){H.get("vaults").then(t=>{e("setVaults",t.data)})},async createVault({commit:e,dispatch:t},a){try{await H.post("vaults",a);t("getVaults")}catch(s){console.error(s)}},deleteVault({commit:e,dispatch:t},a){H.delete("vaults/"+a).then(e=>{t("getVaults")})},getVaultKeeps({commit:e,dispatch:t},a){H.get("/vaultkeeps/"+a).then(t=>{e("setVaultKeeps",t.data)})},removeKeep({commit:e,dispatch:t},a){H.put("/vaultkeeps",a).then(e=>{t("getVaultKeeps",a.vaultId)})}}});async function Y(){let e=await q.Authenticate();e&&J.commit("setUser",e),new s["a"]({router:M,store:J,render:e=>e(u)}).$mount("#app")}Y()},"64a9":function(e,t,a){},6551:function(e,t,a){"use strict";var s=a("54d6"),r=a.n(s);r.a}});