(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09620657"],{"0c6d":function(e,t,a){"use strict";a("d3b7");var n,s=a("bc3a"),r=a.n(s),o=a("5c96"),i=a("4360"),c=a("5fc1"),l=void 0;n="http://leju.bufan.cloud";var u=r.a.create({baseURL:n,timeout:5e3});u.interceptors.request.use((function(e){return Object(c["a"])()&&(e.headers["token"]=Object(c["a"])()),e}),(function(e){return console.log(e),Promise.reject(e)})),u.interceptors.response.use((function(e){var t=e.data;return 2e4!==t.code?(Object(o["Message"])({message:t.message||"Error",type:"error",duration:5e3}),20002===t.code&&(Object(c["c"])(),Object(c["d"])(),l.$router.push("/login")),50008!==t.code&&50012!==t.code&&50014!==t.code||o["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((function(){i["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(new Error(t.message||"Error"))):t}),(function(e){return console.log("err"+e),Object(o["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)})),t["a"]=u},"1b62":function(e,t,a){"use strict";var n=a("5fc1");t["a"]={data:function(){return{page:{currentPage:1,size:10,pageSizes:[10,15,20,25],total:0},uploadfilesOss:"/lejuAdmin/material/uploadFileOss"}},computed:{token:function(){return{token:Object(n["a"])()}}}}},"3ff8":function(e,t,a){"use strict";a("c87f")},b65f:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("el-card",{attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.add}},[e._v("新增")])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{align:"center",type:"index",label:"序号"}}),a("el-table-column",{attrs:{prop:"name",label:"品牌名称",align:"center"}}),a("el-table-column",{attrs:{prop:"showStatus",label:"展示状态",align:"center",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" 是否展示: "),a("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(a){return e.swChange(t.row)}},model:{value:t.row.showStatus,callback:function(a){e.$set(t.row,"showStatus",a)},expression:"scope.row.showStatus"}})]}}])}),a("el-table-column",{attrs:{align:"center",label:"logo"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.logo,width:"100",height:"100",alt:""}})]}}])}),a("el-table-column",{attrs:{prop:"bigPic",label:"专区大图",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.bigPic,width:"100",height:"100",alt:""}})]}}])}),a("el-table-column",{attrs:{prop:"brandStory",label:"品牌故事",align:"center"}}),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间",align:"center"}}),a("el-table-column",{attrs:{align:"center",label:"排序",prop:"sort"}}),a("el-table-column",{attrs:{prop:"productCommentCount",label:"产品评论数量",align:"center"}}),a("el-table-column",{attrs:{prop:"productCount",label:"产品数量",align:"center"}}),a("el-table-column",{attrs:{prop:"factoryStatus",label:"是否品牌制造商",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.factoryStatus?a("span",[e._v("是")]):e._e(),0==t.row.factoryStatus?a("span",[e._v("不是")]):e._e()]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small",icon:"el-icon-view"},on:{click:function(a){return e.edit(t.row)}}},[e._v("编辑")]),a("el-button",{staticStyle:{color:"#f00","margin-left":"20px"},attrs:{type:"text",size:"small"},on:{click:function(a){return e.del(t.row.id)}}},[e._v("删除")])]}}])})],1),a("el-pagination",{staticStyle:{"margin-top":"20px"},attrs:{"current-page":e.page.currentPage,"page-sizes":e.page.pageSizes,"page-size":e.page.size,layout:"total, sizes, prev, pager, next, jumper",total:e.page.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},s=[],r=(a("99af"),a("0c6d"));function o(e,t){return Object(r["a"])({url:"/lejuAdmin/brand/findBrandByPage/".concat(e,"/").concat(t)})}function i(e){return Object(r["a"])({url:"/lejuAdmin/brand/addBrand",method:"post",data:e})}function c(e){return Object(r["a"])({url:"/lejuAdmin/brand/updateBrand",method:"post",data:e})}function l(e){return Object(r["a"])({url:"/lejuAdmin/brand/delBrand/".concat(e),method:"delete"})}function u(e){return Object(r["a"])({url:"/lejuAdmin/brand/switchShowStatus",method:"post",data:e})}var d=a("1b62"),g=a("5c96"),f={mixins:[d["a"]],data:function(){return{bigPic:"",logo:"",isshow:!0,tableData:[],dialogVisible:!1,form:{}}},created:function(){this.initAddressList()},mounted:function(){},methods:{add:function(){this.isshow=!0,this.form={},this.dialogVisible=!0,this.bigPic="",this.logo=""},initAddressList:function(){var e=this;o(this.page.currentPage,this.page.size).then((function(t){var a=t.data;e.tableData=a.rows,e.page.total=a.total}))},sureForm:function(){var e=this;i(this.form).then((function(t){var a=t.success,n=t.message;a?(g["Message"].success("新增成功"),e.dialogVisible=!1,e.initAddressList()):g["Message"].error(n)}))},handleSizeChange:function(e){this.page.size=e,this.page.currentPage=1,this.getArticleListInit()},handleCurrentChange:function(e){this.page.currentPage=e,this.getArticleListInit()},swChange:function(e){u({status:e.showStatus,id:e.id}).then((function(e){e.success?g["Message"].success("文章状态修改成功"):g["Message"].error(e.message)}))},del:function(e){var t=this;l(e).then((function(e){var a=e.success,n=e.message;a?(g["Message"].success("删除成功"),t.initAddressList()):g["Message"].error(n)}))},edit:function(e){console.log(e),this.isshow=!1,this.dialogVisible=!0,this.form=e,this.logo=e.logo,this.bigPic=e.bigPic},uploadForm:function(){var e=this;c(this.form).then((function(t){var a=t.success,n=t.message;a?(g["Message"].success("更新成功"),e.dialogVisible=!1,e.initAddressList()):g["Message"].error(n)}))},handleAvatarSuccessOne:function(e){var t=e.success,a=e.data,n=e.message;t?(this.form.bigPic=a.fileUrl,this.bigPic=a.fileUrl,this.$refs.uploadImgOne.clearFiles()):g["Message"].error(n)},handleAvatarSuccessTwo:function(e){var t=e.success,a=e.data,n=e.message;t?(this.form.logo=a.fileUrl,this.logo=a.fileUrl,this.$refs.uploadImgTwo.clearFiles()):g["Message"].error(n)},beforeAvatarUpload:function(e){var t=e.size/1024/1024<2;return t||this.$message.error("上传头像图片大小不能超过 2MB!"),t}}},h=f,p=(a("3ff8"),a("2877")),b=Object(p["a"])(h,n,s,!1,null,"42a8e562",null);t["default"]=b.exports},c87f:function(e,t,a){}}]);