webpackJsonp([20],{319:function(n,t,r){r(812);var a=r(113)(r(693),r(902),"data-v-53579d54",null);n.exports=a.exports},496:function(n,t,r){n.exports=r.p+"static/img/logo.05b476b.png"},693:function(n,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(19),o=r(33);t.default={mounted:function(){},data:function(){return{username:null,password:null,errorMessage:"",user:o.a.user,tokenData:o.a.tokenData}},methods:{logIn:function(){var n=this;null!==this.username&&""!==this.username&&null!==this.password&&""!==this.password?($("#loading").css({display:"block"}),o.a.authenticate(this.username,this.password,function(t){n.errorMessage=null,$("#loading").css({display:"none"}),a.a.push("/account_settings")},function(t,r){$("#loading").css({display:"none"}),n.errorMessage=401===r?"Username and Password did not matched.":"Cannot log in? Contact us through email: support@idfactories.com"})):this.errorMessage="Please fill up all the required fields."},redirect:function(n){a.a.push(n)},request:function(n){this.APIRequest(n,{}).then(function(n){})}}}},752:function(n,t,r){t=n.exports=r(300)(),t.push([n.i,'.login-wrapper[data-v-53579d54]{width:80%;margin:0 10% 50px}.login-header[data-v-53579d54]{height:100px;color:#060;width:100%;float:left;text-align:center}.login-header img[data-v-53579d54]{width:70px;height:70px}.login-header img[data-v-53579d54]:hover{cursor:pointer}.login-message-holder[data-v-53579d54]{min-height:30px;font-size:12px;float:left;overflow:hidden}.login-spacer[data-v-53579d54]{margin-bottom:10px}.forgot-password a[data-v-53579d54]{color:#060!important}.forgot-password a[data-v-53579d54]:hover{cursor:pointer!important;text-decoration:underline!important;color:#090!important}.input-group-addon[data-v-53579d54]{width:50px}.form-control-login[data-v-53579d54]{height:45px!important}.separator>[data-v-53579d54]{display:inline-block;vertical-align:middle}.separator[data-v-53579d54]{text-align:center;border:0;white-space:nowrap;display:block;overflow:hidden;padding:0;margin:0}.separator[data-v-53579d54]:after,.separator[data-v-53579d54]:before{content:"";height:1px;width:50%;background-color:#ccc;margin:0 5px;display:inline-block;vertical-align:middle}.separator[data-v-53579d54]:before{margin-left:-100%}.separator[data-v-53579d54]:after{margin-right:-100%}.btn-login-primary[data-v-53579d54]{background:#22b173;color:#fff;height:45px!important}.btn-login-primary[data-v-53579d54]:hover{border:1px solid #3f0050}.btn-login-warning[data-v-53579d54]{color:#fff;background:#fccd04;height:45px!important}.btn-login-warning[data-v-53579d54]:hover{color:#fff;border:1px solid #bb9800}.btn-blue[data-v-53579d54]{background:#028170;color:#fff;height:45px!important}.btn-blue[data-v-53579d54]:hover{border:1px solid #026759}.banner[data-v-53579d54]{width:90%;float:left;margin-left:10%}.banner h2[data-v-53579d54]{text-transform:uppercase;font-weight:600;color:#3f0050;float:left;width:100%}.banner span[data-v-53579d54]{width:100%;float:left;font-size:24px;color:#888}.banner ul[data-v-53579d54]{list-style:none;width:100%;margin-top:100px}.banner ul li[data-v-53579d54]{font-size:20px;color:#888;margin-top:10px}.banner ul li i[data-v-53579d54]{padding-right:10px;color:#fccd04;font-weight:700}@media (max-width:992px){.login-wrapper[data-v-53579d54]{width:96%;margin:0 2%}}',"",{version:3,sources:["C:/xampp/htdocs/projectabc/src/modules/home/LogIn.vue"],names:[],mappings:"AACA,gCACE,UAAW,AACX,iBAAuB,CACxB,AACD,+BACE,aAAc,AACd,WAAe,AACf,WAAY,AACZ,WAAY,AACZ,iBAAmB,CACpB,AAGD,mCACE,WAAY,AACZ,WAAa,CACd,AACD,yCACE,cAAgB,CACjB,AACD,uCACE,gBAAiB,AACjB,eAAgB,AAChB,WAAY,AACZ,eAAiB,CAClB,AACD,+BACE,kBAAoB,CACrB,AACD,oCACE,oBAA0B,CAC3B,AACD,0CACE,yBAA2B,AAC3B,oCAAsC,AACtC,oBAA0B,CAC3B,AACD,oCACE,UAAY,CACb,AAMD,qCACE,qBAAwB,CACzB,AAID,6BACE,qBAAsB,AACtB,qBAAuB,CACxB,AACD,4BACI,kBAAmB,AACnB,SAAU,AACV,mBAAoB,AACpB,cAAe,AACf,gBAAiB,AACjB,UAAW,AACX,QAAU,CACb,AACD,qEACI,WAAY,AACZ,WAAY,AACZ,UAAW,AACX,sBAAuB,AACvB,aAAoB,AACpB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,mCACI,iBAAmB,CACtB,AACD,kCACI,kBAAoB,CACvB,AACD,oCACE,mBAAoB,AACpB,WAAY,AACZ,qBAAwB,CACzB,AACD,0CACE,wBAA0B,CAC3B,AACD,oCACE,WAAY,AACZ,mBAAoB,AACpB,qBAAwB,CACzB,AACD,0CACE,WAAY,AACZ,wBAA0B,CAC3B,AACD,2BACE,mBAAoB,AACpB,WAAY,AACZ,qBAAwB,CACzB,AACD,iCACE,wBAA0B,CAC3B,AACD,yBACE,UAAW,AACX,WAAY,AACZ,eAAiB,CAClB,AACD,4BACE,yBAA0B,AAC1B,gBAAiB,AACjB,cAAe,AACf,WAAY,AACZ,UAAY,CACb,AACD,8BACE,WAAY,AACZ,WAAY,AACZ,eAAgB,AAChB,UAAY,CACb,AACD,4BACE,gBAAiB,AACjB,WAAY,AACZ,gBAAkB,CACnB,AACD,+BACE,eAAgB,AAChB,WAAY,AACZ,eAAiB,CAClB,AACD,iCACE,mBAAoB,AACpB,cAAe,AACf,eAAiB,CAClB,AACD,yBACA,gCACI,UAAW,AACX,WAAkB,CACrB,CACA",file:"LogIn.vue",sourcesContent:['\n.login-wrapper[data-v-53579d54]{\r\n  width: 80%;\r\n  margin: 0 10% 50px 10%;\n}\n.login-header[data-v-53579d54]{\r\n  height: 100px;\r\n  color: #006600;\r\n  width: 100%;\r\n  float: left;\r\n  text-align: center;\n}\r\n\r\n/*-- login-header --*/\n.login-header img[data-v-53579d54]{\r\n  width: 70px;\r\n  height: 70px;\n}\n.login-header img[data-v-53579d54]:hover{\r\n  cursor: pointer;\n}\n.login-message-holder[data-v-53579d54]{\r\n  min-height: 30px;\r\n  font-size: 12px;\r\n  float: left;\r\n  overflow: hidden;\n}\n.login-spacer[data-v-53579d54]{\r\n  margin-bottom: 10px;\n}/*-- login-spacer --*/\n.forgot-password a[data-v-53579d54]{\r\n  color: #006600 !important;\n}\n.forgot-password a[data-v-53579d54]:hover{\r\n  cursor: pointer !important;\r\n  text-decoration: underline !important;\r\n  color: #009900 !important;\n}\n.input-group-addon[data-v-53579d54]{\r\n  width: 50px;\n}\r\n/*----------------------------------------\r\n\r\n            Forms\r\n\r\n------------------------------------------*/\n.form-control-login[data-v-53579d54]{\r\n  height: 45px !important;\n}\r\n\r\n\r\n/*    Line with text on top  */\n.separator>*[data-v-53579d54]{\r\n  display: inline-block;\r\n  vertical-align: middle;\n}\n.separator[data-v-53579d54] {\r\n    text-align: center;\r\n    border: 0;\r\n    white-space: nowrap;\r\n    display: block;\r\n    overflow: hidden;\r\n    padding: 0;\r\n    margin: 0;\n}\n.separator[data-v-53579d54]:before, .separator[data-v-53579d54]:after {\r\n    content: "";\r\n    height: 1px;\r\n    width: 50%;\r\n    background-color: #ccc;\r\n    margin: 0 5px 0 5px;\r\n    display: inline-block;\r\n    vertical-align: middle;\n}\n.separator[data-v-53579d54]:before {\r\n    margin-left: -100%;\n}\n.separator[data-v-53579d54]:after {\r\n    margin-right: -100%;\n}\n.btn-login-primary[data-v-53579d54]{\r\n  background: #22b173;\r\n  color: #fff;\r\n  height: 45px !important;\n}\n.btn-login-primary[data-v-53579d54]:hover{\r\n  border: solid 1px #3f0050;\n}\n.btn-login-warning[data-v-53579d54]{\r\n  color: #fff;\r\n  background: #FCCD04;\r\n  height: 45px !important;\n}\n.btn-login-warning[data-v-53579d54]:hover{\r\n  color: #fff;\r\n  border: solid 1px #bb9800;\n}\n.btn-blue[data-v-53579d54]{\r\n  background: #028170;\r\n  color: #fff;\r\n  height: 45px !important;\n}\n.btn-blue[data-v-53579d54]:hover{\r\n  border: solid 1px #026759;\n}\n.banner[data-v-53579d54]{\r\n  width: 90%;\r\n  float: left;\r\n  margin-left: 10%;\n}\n.banner h2[data-v-53579d54]{\r\n  text-transform: uppercase;\r\n  font-weight: 600;\r\n  color: #3f0050;\r\n  float: left;\r\n  width: 100%;\n}\n.banner span[data-v-53579d54]{\r\n  width: 100%;\r\n  float: left;\r\n  font-size: 24px;\r\n  color: #888;\n}\n.banner ul[data-v-53579d54]{\r\n  list-style: none;\r\n  width: 100%;\r\n  margin-top: 100px;\n}\n.banner ul li[data-v-53579d54]{\r\n  font-size: 20px;\r\n  color: #888;\r\n  margin-top: 10px;\n}\n.banner ul li i[data-v-53579d54]{\r\n  padding-right: 10px;\r\n  color: #FCCD04;\r\n  font-weight: 700;\n}\n@media (max-width: 992px){\n.login-wrapper[data-v-53579d54]{\r\n    width: 96%;\r\n    margin: 0 2% 0 2%;\n}\n}\r\n'],sourceRoot:""}])},812:function(n,t,r){var a=r(752);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);r(301)("007b4b1a",a,!0)},902:function(n,t,r){n.exports={render:function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"col-sm-12 col-md-6 col-lg-4 mx-auto"},[a("div",{staticClass:"login-wrapper"},[a("div",{staticClass:"login-header",staticStyle:{"margin-top":"75px"}},[a("img",{attrs:{src:r(496)},on:{click:function(t){n.redirect("/")}}})]),n._v(" "),n._m(0),n._v(" "),""!=n.errorMessage?a("div",{staticClass:"login-message-holder login-spacer"},[a("span",{staticClass:"text-danger"},[a("b",[n._v("Oops!")]),n._v(" "+n._s(n.errorMessage))])]):n._e(),n._v(" "),a("div",[a("div",{staticClass:"input-group login-spacer"},[n._m(1),n._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:n.username,expression:"username"}],staticClass:"form-control form-control-login",attrs:{type:"text",placeholder:"Username or Email","aria-describedby":"addon-1"},domProps:{value:n.username},on:{input:function(t){t.target.composing||(n.username=t.target.value)}}})]),n._v(" "),a("div",{staticClass:"input-group login-spacer"},[n._m(2),n._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:n.password,expression:"password"}],staticClass:"form-control form-control-login",attrs:{type:"password",placeholder:"********","aria-describedby":"addon-2"},domProps:{value:n.password},on:{keyup:function(t){if(!("button"in t)&&n._k(t.keyCode,"enter",13,t.key,"Enter"))return null;n.logIn()},input:function(t){t.target.composing||(n.password=t.target.value)}}})]),n._v(" "),a("button",{staticClass:"btn btn-login-primary btn-block btn-login login-spacer",on:{click:function(t){n.logIn()}}},[n._v("Login")]),n._v(" "),a("button",{staticClass:"btn btn-login-warning btn-block btn-login login-spacer",on:{click:function(t){n.redirect("/request_reset_password")}}},[n._v("Forget your Password?")]),n._v(" "),a("br"),n._v(" "),a("div",{staticClass:"container-fluid separator"},[n._v("\n          or\n      ")]),n._v(" "),a("br"),n._v(" "),a("button",{staticClass:"btn btn-blue btn-block btn-login login-spacer",on:{click:function(t){n.redirect("/signup")}}},[n._v("Create Account Now!")])])])])},staticRenderFns:[function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("span",{staticStyle:{width:"100%",float:"left","text-align":"center","font-size":"20px","margin-bottom":"20px"}},[n._v("\n      Login to "),r("b",{staticClass:"text-primary"},[n._v("ID FACTORY")])])},function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("span",{staticClass:"input-group-addon",attrs:{id:"addon-1"}},[r("i",{staticClass:"fa fa-user"})])},function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("span",{staticClass:"input-group-addon",attrs:{id:"addon-2"}},[r("i",{staticClass:"fa fa-key"})])}]}}});
//# sourceMappingURL=20.4b5a004620a044014464.js.map