(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-501f6252"],{"0c6d":function(e,t,a){"use strict";a("d3b7");var n,r=a("bc3a"),o=a.n(r),s=a("5c96"),c=a("4360"),i=a("5fc1"),l=void 0;n="http://leju.bufan.cloud";var u=o.a.create({baseURL:n,timeout:5e3});u.interceptors.request.use((function(e){return Object(i["a"])()&&(e.headers["token"]=Object(i["a"])()),e}),(function(e){return console.log(e),Promise.reject(e)})),u.interceptors.response.use((function(e){var t=e.data;return 2e4!==t.code?(Object(s["Message"])({message:t.message||"Error",type:"error",duration:5e3}),20002===t.code&&(Object(i["c"])(),Object(i["d"])(),l.$router.push("/login")),50008!==t.code&&50012!==t.code&&50014!==t.code||s["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((function(){c["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(new Error(t.message||"Error"))):t}),(function(e){return console.log("err"+e),Object(s["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)})),t["a"]=u},"1b62":function(e,t,a){"use strict";var n=a("5fc1");t["a"]={data:function(){return{page:{currentPage:1,size:10,pageSizes:[10,15,20,25],total:0},uploadfilesOss:"/lejuAdmin/material/uploadFileOss"}},computed:{token:function(){return{token:Object(n["a"])()}}}}},3150:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("el-card",{attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("分类管理")])]),a("div",{staticClass:"body"},[a("div",{staticClass:"kind-box"},[a("h4",[e._v("乐居分类:")]),a("el-row",{attrs:{gutter:20,align:"center"}},e._l(e.leju,(function(t,n){return a("el-col",{key:t.id,attrs:{span:6}},[a("el-card",{attrs:{shadow:"hover"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v(e._s(t.name))])]),a("el-upload",{ref:"uploadImg",refInFor:!0,staticClass:"upload-demo",attrs:{action:"/lejuAdmin/material/uploadFileOss",headers:e.token,"show-file-list":!1,"on-success":function(t){return e.getImg(t,n)}}},[a("img",{attrs:{src:t.icon,alt:"",width:"280",height:"300"}})])],1)],1)})),1)],1),a("div",{staticClass:"all-kind"},[a("h4",[e._v("全部分类:")]),a("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:e.lejuData,"row-key":"id",border:"","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"}}},[a("el-table-column",{attrs:{prop:"name",label:"菜单名称",sortable:"",width:"180"}}),a("el-table-column",{attrs:{align:"center",prop:"icon",label:"icon",sortable:"",width:"180"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.icon,width:"100",height:"100",alt:""}})]}}])}),a("el-table-column",{attrs:{align:"center",prop:"keywords",label:"分类名字"}}),a("el-table-column",{attrs:{align:"center",prop:"sort",label:"排序"}}),a("el-table-column",{attrs:{align:"center",prop:"showStatus",label:"显示状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.row.showStatus,callback:function(a){e.$set(t.row,"showStatus",a)},expression:"scope.row.showStatus"}})]}}])}),a("el-table-column",{attrs:{align:"center",prop:"navStatus",label:"导航栏展示"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.row.navStatus,callback:function(a){e.$set(t.row,"navStatus",a)},expression:"scope.row.navStatus"}})]}}])}),a("el-table-column",{attrs:{align:"center",prop:"description",label:"描述"}}),a("el-table-column",{attrs:{align:"center",prop:"createTime",label:"创建时间"}})],1)],1)])])],1)},r=[],o=a("5530"),s=(a("d81d"),a("7db0"),a("d3b7"),a("b0c0"),a("a3e6")),c=a("1b62"),i=a("5c96"),l={mixins:[c["a"]],data:function(){return{lejuData:[],leju:[]}},computed:{},created:function(){this.initList()},mounted:function(){},methods:{initList:function(){var e=this;Object(s["a"])().then((function(t){var a=t.data.items.map((function(e){return Object(o["a"])(Object(o["a"])({},e.category),{},{children:e.children})}));e.lejuData=a,e.leju=a.find((function(e){return"乐居"===e.name})).children}))},getImg:function(e,t){var a=this;this.leju[t].icon=e.data.fileUrl,Object(s["b"])(this.leju[t]).then((function(e){var t=e.success,n=e.message;t?(i["Message"].success("更改成功"),a.initList()):n.error(n)}))}}},u=l,d=(a("d1cf"),a("2877")),f=Object(d["a"])(u,n,r,!1,null,"6596bea6",null);t["default"]=f.exports},"7db0":function(e,t,a){"use strict";var n=a("23e7"),r=a("b727").find,o=a("44d2"),s=a("ae40"),c="find",i=!0,l=s(c);c in[]&&Array(1)[c]((function(){i=!1})),n({target:"Array",proto:!0,forced:i||!l},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),o(c)},a3e6:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return o}));var n=a("0c6d");function r(){return Object(n["a"])({url:"/lejuAdmin/category/getAllCategory"})}function o(e){return Object(n["a"])({url:"/lejuAdmin/category/updateCategory",method:"post",data:e})}},aa03:function(e,t,a){},d1cf:function(e,t,a){"use strict";a("aa03")}}]);