(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c5623fbc"],{"0c6d":function(e,t,a){"use strict";a("d3b7");var r,l=a("bc3a"),s=a.n(l),o=a("5c96"),i=a("4360"),n=a("5fc1"),c=void 0;r="http://leju.bufan.cloud";var u=s.a.create({baseURL:r,timeout:5e3});u.interceptors.request.use((function(e){return Object(n["a"])()&&(e.headers["token"]=Object(n["a"])()),e}),(function(e){return console.log(e),Promise.reject(e)})),u.interceptors.response.use((function(e){var t=e.data;return 2e4!==t.code?(Object(o["Message"])({message:t.message||"Error",type:"error",duration:5e3}),20002===t.code&&(Object(n["c"])(),Object(n["d"])(),c.$router.push("/login")),50008!==t.code&&50012!==t.code&&50014!==t.code||o["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((function(){i["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(new Error(t.message||"Error"))):t}),(function(e){return console.log("err"+e),Object(o["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)})),t["a"]=u},"1b62":function(e,t,a){"use strict";var r=a("5fc1");t["a"]={data:function(){return{page:{currentPage:1,size:10,pageSizes:[10,15,20,25],total:0},uploadfilesOss:"/lejuAdmin/material/uploadFileOss"}},computed:{token:function(){return{token:Object(r["a"])()}}}}},"45e5":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("el-card",{attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.add}},[e._v("新增")])],1),a("el-dialog",{attrs:{title:"地址详情",visible:e.dialogVisible,width:"50%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"form",attrs:{rules:e.rule,model:e.form,"label-width":"100px"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"广告名称",prop:"name"}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入广告名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"备注",prop:"note"}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入备注"},model:{value:e.form.note,callback:function(t){e.$set(e.form,"note",t)},expression:"form.note"}})],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"排序",prop:"sort"}},[a("el-input",{attrs:{clearable:"",placeholder:"排序"},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"产品数量",prop:"productCount"}},[a("el-input",{attrs:{clearable:"",placeholder:"数量"},model:{value:e.form.productCount,callback:function(t){e.$set(e.form,"productCount",t)},expression:"form.productCount"}})],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"链接地址",prop:"url"}},[a("el-input",{attrs:{clearable:"",placeholder:"地址"},model:{value:e.form.url,callback:function(t){e.$set(e.form,"url",t)},expression:"form.url"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"首页轮播位置"}},[[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)]],2)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"开始时间"}},[[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:e.timeValueStr,callback:function(t){e.timeValueStr=t},expression:"timeValueStr"}})],1)]],2)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"结束时间"}},[[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:e.timeValueEnd,callback:function(t){e.timeValueEnd=t},expression:"timeValueEnd"}})],1)]],2)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"上下线状态"}},[[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})]],2)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"图片"}},[[a("el-upload",{ref:"uploadImg",staticClass:"avatar-uploader",attrs:{action:"/lejuAdmin/material/uploadFileOss","show-file-list":!0,"on-success":e.handleAvatarSuccess,headers:e.token,"before-upload":e.beforeAvatarUpload}},[e.uploadImage?a("img",{staticClass:"avatar",attrs:{src:e.uploadImage}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])]],2)],1)],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e.isshow?a("el-button",{attrs:{type:"primary"},on:{click:e.sureForm}},[e._v("确 定")]):e._e(),e.isshow?e._e():a("el-button",{attrs:{type:"primary"},on:{click:e.uploadForm}},[e._v("更 新")])],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{fixed:"",align:"center",type:"index",label:"序号"}}),a("el-table-column",{attrs:{prop:"addressName",label:"广告图片",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.pic,alt:"",width:"100",height:"100"}})]}}])}),a("el-table-column",{attrs:{align:"center",label:"时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("p",[e._v("开始时间:"+e._s(t.row.startTime))]),a("p",[e._v("结束时间:"+e._s(t.row.endTime))])]}}])}),a("el-table-column",{attrs:{prop:"name",label:"广告名称",align:"center"}}),a("el-table-column",{attrs:{prop:"clickCount",label:"点击数",align:"center"}}),a("el-table-column",{attrs:{prop:"orderCount",label:"下单数",align:"center"}}),a("el-table-column",{attrs:{align:"center",label:"轮播位置"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(0==t.row.type?"首页轮播":"其它页面")+" ")]}}])}),a("el-table-column",{attrs:{prop:"url",label:"链接地址",align:"center"}}),a("el-table-column",{attrs:{prop:"note",label:"备注",align:"center"}}),a("el-table-column",{attrs:{label:"上下线状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(1==t.row.status?"上线":"下线")+" ")]}}])}),a("el-table-column",{attrs:{fixed:"right",label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small",icon:"el-icon-view"},on:{click:function(a){return e.edit(t.row)}}},[e._v("编辑")]),a("el-button",{staticStyle:{color:"#f00","margin-left":"20px"},attrs:{type:"text",size:"small"},on:{click:function(a){return e.del(t.row.id)}}},[e._v("删除")])]}}])})],1)],1)],1)},l=[],s=(a("ac1f"),a("00b4"),a("5319"),a("0c6d"));function o(){return Object(s["a"])({url:"/lejuAdmin/advertise/adsList"})}function i(e){return Object(s["a"])({url:"/lejuAdmin/advertise/delAds/".concat(e),method:"delete"})}function n(e){return Object(s["a"])({url:"/lejuAdmin/advertise/addAds",method:"post",data:e})}function c(e){return Object(s["a"])({url:"/lejuAdmin/advertise/updateAds",method:"post",data:e})}var u=a("1b62"),d=a("5c96"),m={mixins:[u["a"]],data:function(){var e=this,t=function(t,a,r){if(""===a)r(new Error("请输入手机号码"));else{var l=/^[1][3,5,7,8][0-9]{9}$/;if(!l.test(e.form.phone))return r(new Error("请输入正确的手机号码"));r()}};return{isshow:!0,tableData:[],dialogVisible:!1,form:{},uploadImage:"",timeValueStr:"",timeValueEnd:"",options:[{value:0,label:1},{value:1,label:"App首页轮播"}],value:"",rule:{addressName:[{required:!0,message:"请输入发货地址",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],phone:[{validator:t,trigger:"blur"}]}}},created:function(){this.initAddressList()},mounted:function(){},methods:{add:function(){this.form={},this.isshow=!0,this.dialogVisible=!0,this.value="",this.timeValueStr="",this.timeValueEnd="",this.uploadImage=""},initAddressList:function(){var e=this;o().then((function(t){var a=t.data;e.tableData=a.items}))},p:function(e){return e<10?"0"+e:e},sureForm:function(){var e=this;this.form.type=this.value;var t=new Date(this.timeValueStr),a=t.getFullYear()+"-"+this.p(t.getMonth()+1)+"-"+this.p(t.getDate()),r=this.p(t.getHours())+":"+this.p(t.getMinutes())+":"+this.p(t.getSeconds());this.form.startTime=a+" "+r;var l=new Date(this.timeValueEnd),s=l.getFullYear()+"-"+this.p(l.getMonth()+1)+"-"+this.p(l.getDate()),o=this.p(l.getHours())+":"+this.p(l.getMinutes())+":"+this.p(l.getSeconds());this.form.endTime=s+" "+o,n(this.form).then((function(t){var a=t.success,r=t.message;a?(d["Message"].success("新增成功"),e.dialogVisible=!1,e.initAddressList()):d["Message"].error(r)}))},del:function(e){var t=this;i(e).then((function(e){var a=e.success,r=e.message;a?(d["Message"].success("删除成功"),t.initAddressList()):d["Message"].error(r)}))},edit:function(e){this.isshow=!1,this.dialogVisible=!0,this.timeValueStr=new Date(Date.parse(e.startTime.replace(/-/g,"/"))),this.timeValueEnd=new Date(Date.parse(e.endTime.replace(/-/g,"/"))),this.value=e.type,this.uploadImage=e.pic,this.form=e},uploadForm:function(){var e=this;c(this.form).then((function(t){var a=t.success,r=t.message;a?(d["Message"].success("更新成功"),e.dialogVisible=!1,e.initAddressList()):d["Message"].error(r)}))},handleAvatarSuccess:function(e){var t=e.success,a=e.data,r=e.message;t?(this.form.pic=a.fileUrl,this.uploadImage=a.fileUrl,this.$refs.uploadImg.clearFiles()):d["Message"].error(r)},beforeAvatarUpload:function(e){var t=e.size/1024/1024<2;return t||this.$message.error("上传头像图片大小不能超过 2MB!"),t}}},p=m,f=(a("aae6"),a("2877")),b=Object(f["a"])(p,r,l,!1,null,"bd9b1b44",null);t["default"]=b.exports},5936:function(e,t,a){},aae6:function(e,t,a){"use strict";a("5936")}}]);