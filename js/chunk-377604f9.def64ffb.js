(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-377604f9"],{"2ba6":function(e,t,s){},"4c18":function(e,t,s){"use strict";var n=s("2ba6"),a=s.n(n);a.a},"73cf":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"w"},[e._m(0),e._m(1),s("van-form",{on:{submit:e.onSubmit}},[s("van-field",{attrs:{name:"用户名/手机号",placeholder:"用户名/手机号",rules:[{required:!0,message:"请填写手机号"}]},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}}),s("van-field",{attrs:{name:"昵称",placeholder:"昵称",rules:[{required:!0,message:"请填写昵称"}]},model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}}),s("van-field",{attrs:{type:"password",name:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),s("div",{staticClass:"btn"},[s("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v(" 注册 ")])],1)],1),s("div",{staticClass:"btn"},[s("router-link",{attrs:{to:"./Login"}},[s("van-button",{attrs:{round:"",block:""}},[e._v(" 去登入 ")])],1)],1)],1)},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"xx"},[s("span",{staticClass:"iconfont iconicon-test"})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"log"},[s("span",{staticClass:"iconfont iconnew"})])}],o={data:function(){return{form:{username:"",password:"",nickname:""}}},methods:{onSubmit:function(e){var t=this;this.$axios({url:"/register",method:"post",data:this.form}).then((function(e){console.log(e);var s=e.data.message;t.$toast.success(s)}))}}},r=o,i=(s("4c18"),s("2877")),c=Object(i["a"])(r,n,a,!1,null,"b87c062e",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-377604f9.def64ffb.js.map