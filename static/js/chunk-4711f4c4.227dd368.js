(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4711f4c4"],{"0c6d":function(e,t,a){"use strict";a("d3b7");var s,r=a("bc3a"),i=a.n(r),n=a("5c96"),l=a("4360"),o=a("5fc1"),c=void 0;s="http://leju.bufan.cloud";var u=i.a.create({baseURL:s,timeout:5e3});u.interceptors.request.use((function(e){return Object(o["a"])()&&(e.headers["token"]=Object(o["a"])()),e}),(function(e){return console.log(e),Promise.reject(e)})),u.interceptors.response.use((function(e){var t=e.data;return 2e4!==t.code?(Object(n["Message"])({message:t.message||"Error",type:"error",duration:5e3}),20002===t.code&&(Object(o["c"])(),Object(o["d"])(),c.$router.push("/login")),50008!==t.code&&50012!==t.code&&50014!==t.code||n["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((function(){l["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(new Error(t.message||"Error"))):t}),(function(e){return console.log("err"+e),Object(n["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)})),t["a"]=u},"1b62":function(e,t,a){"use strict";var s=a("5fc1");t["a"]={data:function(){return{page:{currentPage:1,size:10,pageSizes:[10,15,20,25],total:0},uploadfilesOss:"/lejuAdmin/material/uploadFileOss"}},computed:{token:function(){return{token:Object(s["a"])()}}}}},"31f9":function(e,t,a){},"38db":function(e,t,a){"use strict";a("31f9")},"98e3":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("el-form",{ref:"form",staticClass:"forms",attrs:{model:e.searchForm,"label-width":"80px",size:"normal"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"昵称"}},[a("el-input",{attrs:{clearable:"",placeholder:"昵称/模糊查询"},on:{clear:e.initData},model:{value:e.searchForm.nickName,callback:function(t){e.$set(e.searchForm,"nickName",t)},expression:"searchForm.nickName"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"用户名"}},[a("el-input",{attrs:{placeholder:"用户名/模糊查询",clearable:""},on:{clear:e.initData},model:{value:e.searchForm.username,callback:function(t){e.$set(e.searchForm,"username",t)},expression:"searchForm.username"}})],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12,offset:18}},[a("el-button",{attrs:{type:"default",size:"mini"},on:{click:e.reset}},[e._v("重置")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.search}},[e._v("查询")])],1)],1)],1)],1),a("el-card",{staticClass:"card",attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.addUser}},[e._v("新增")])],1),a("el-dialog",{attrs:{title:"编辑用户",width:"30%",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{model:e.form,"label-width":"80px",size:"normal"}},[a("el-form-item",{attrs:{label:"用户名"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),a("el-form-item",{attrs:{label:"用户昵称"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.form.nickName,callback:function(t){e.$set(e.form,"nickName",t)},expression:"form.nickName"}})],1),a("el-form-item",{attrs:{label:"密码"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),a("el-form-item",{attrs:{label:"用户头像"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/lejuAdmin/material/uploadFileOss",headers:e.token,"show-file-list":!1,"auto-upload":!0,"on-success":e.handleAvatarSuccess}},[e.avatorImg?a("img",{staticClass:"avatar",attrs:{src:e.avatorImg}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"选择角色"}},[a("el-select",{attrs:{multiple:"",placeholder:""},model:{value:e.form.roleIds,callback:function(t){e.$set(e.form,"roleIds",t)},expression:"form.roleIds"}},e._l(e.rolesList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.roleName,value:e.id}})})),1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:3,offset:16}},[a("el-button",{attrs:{size:"mini"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取消")])],1),e.uptShow?e._e():a("el-col",{attrs:{span:3}},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.saveUser}},[e._v("确定")])],1),e.uptShow?a("el-col",{attrs:{span:3}},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.updateUser}},[e._v("更新")])],1):e._e()],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"",data:e.articleList,border:""}},[a("el-table-column",{attrs:{type:"index",width:"50",align:"center",label:"序号",fixed:""}}),a("el-table-column",{attrs:{align:"center",prop:"username",label:"用户名",width:"100"}}),a("el-table-column",{attrs:{align:"nick_name",prop:"title",label:"昵称",width:"100"}}),a("el-table-column",{attrs:{align:"center",label:"头像",width:"120"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{},attrs:{src:e.row.salt,height:"100",alt:""}})]}}])}),a("el-table-column",{attrs:{align:"center",prop:"roles",label:"角色"}}),a("el-table-column",{attrs:{align:"center",prop:"create_time",label:"添加时间"}}),a("el-table-column",{attrs:{align:"center",fixed:"right",label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(a){return e.edit(t.row.id)}}},[e._v("编辑")]),a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"danger",size:"small"},on:{click:function(a){return e.del(t.row.id)}}},[e._v("删除")])]}}])})],1),a("el-pagination",{staticStyle:{"margin-top":"20px"},attrs:{"current-page":e.page.currentPage,"page-sizes":e.page.pageSizes,"page-size":e.page.size,layout:"total, sizes, prev, pager, next, jumper",total:e.page.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},r=[],i=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),a("99af"),a("0c6d"));function n(e,t,a){return Object(i["a"])({url:"/admin/sysAuth/user/findUsersByPage/".concat(e,"/").concat(t),method:"post",data:a})}function l(e){return Object(i["a"])({url:"/admin/sysAuth/user/saveUserRoles",method:"post",data:e})}function o(e){return Object(i["a"])({url:"/admin/sysAuth/user/removeUser/".concat(e),method:"delete"})}function c(e){return Object(i["a"])({url:"/admin/sysAuth/user/updateUserRoles",method:"put",data:e})}function u(){return Object(i["a"])({url:"/admin/sysAuth/role/findAllRoles"})}function d(e){return Object(i["a"])({url:"/admin/sysAuth/user/".concat(e)})}var m=a("1b62"),p=a("5c96"),f={mixins:[m["a"]],data:function(){return{dialogVisible:!1,articleList:[],listLoading:!1,searchForm:{nickName:"",username:""},form:{roleIds:[]},avatorImg:"",rolesList:[],uptShow:!1}},created:function(){var e=this;u().then((function(t){e.rolesList=t.data.items})),this.getArticleListInit()},methods:{initData:function(){this.page.currentPage=1,this.getArticleListInit()},reset:function(){this.searchForm={}},search:function(){this.page.currentPage=1,this.getArticleListInit()},getArticleListInit:function(){var e=this;this.listLoading=!0,n(this.page.currentPage,this.page.size).then((function(t){t.success?(e.articleList=t.data.rows,e.page.total=t.data.total):e.$message.error("请求失败"),e.listLoading=!1}))},handleSizeChange:function(e){this.page.size=e,this.page.currentPage=1,this.getArticleListInit()},handleCurrentChange:function(e){this.page.currentPage=e,this.getArticleListInit()},edit:function(e){var t=this;this.dialogVisible=!0,this.uptShow=!0,d(e).then((function(e){t.form=e.data.user,t.avatorImg=e.data.user.salt}))},del:function(e){var t=this;o(e).then((function(e){e.success&&(Object(p["Message"])({message:"删除成功",type:"success",duration:5e3}),t.page.currentPage=1,t.getArticleListInit())}))},addUser:function(){this.form={},this.avatorImg="",this.dialogVisible=!0},handleAvatarSuccess:function(e,t){this.avatorImg=URL.createObjectURL(t.raw),this.form.salt=e.data.fileUrl},saveUser:function(){var e=this;l(this.form).then((function(t){var a=t.success,s=t.message;a?(p["Message"].success("添加成功"),e.dialogVisible=!1,e.getArticleListInit()):p["Message"].error(s)}))},updateUser:function(){var e=this;c(this.form).then((function(t){var a=t.success,s=t.message;a?(p["Message"].success("更新成功"),e.uptShow=!1,e.dialogVisible=!1,e.getArticleListInit()):p["Message"].error(s)}))}}},h=f,g=(a("38db"),a("2877")),b=Object(g["a"])(h,s,r,!1,null,"3742c329",null);t["default"]=b.exports}}]);