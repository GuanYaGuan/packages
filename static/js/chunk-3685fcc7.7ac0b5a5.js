(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3685fcc7"],{"013c":function(t,e,a){"use strict";a("46c1")},"0c6d":function(t,e,a){"use strict";a("d3b7");var r,n=a("bc3a"),o=a.n(n),i=a("5c96"),l=a("4360"),s=a("5fc1"),c=void 0;r="http://leju.bufan.cloud";var u=o.a.create({baseURL:r,timeout:5e3});u.interceptors.request.use((function(t){return Object(s["a"])()&&(t.headers["token"]=Object(s["a"])()),t}),(function(t){return console.log(t),Promise.reject(t)})),u.interceptors.response.use((function(t){var e=t.data;return 2e4!==e.code?(Object(i["Message"])({message:e.message||"Error",type:"error",duration:5e3}),20002===e.code&&(Object(s["c"])(),Object(s["d"])(),c.$router.push("/login")),50008!==e.code&&50012!==e.code&&50014!==e.code||i["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((function(){l["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(new Error(e.message||"Error"))):e}),(function(t){return console.log("err"+t),Object(i["Message"])({message:t.message,type:"error",duration:5e3}),Promise.reject(t)})),e["a"]=u},"109b":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("el-card",{attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.openDetail}},[t._v("热销详情")])],1),a("el-dialog",{attrs:{title:"热销详情",visible:t.dialogVisible,width:"70%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("goods",{attrs:{"form-data":t.formData,"brand-data":t.brandData,list:t.list,total:t.total,start:t.start,limit:t.limit},on:{initData:t.initClear,searchData:t.search,uptLimit:t.parLimit,uptStart:t.parStart}}),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取消")])],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{fixed:"",align:"center",type:"index",width:"50",label:"序号"}}),a("el-table-column",{attrs:{prop:"addressName",label:"商品图片",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{attrs:{src:t.row.pic,alt:"",width:"100",height:"100"}})]}}])}),a("el-table-column",{attrs:{align:"center",label:"活动时间",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v("开始时间:"+t._s(e.row.promotionStartTime))]),a("p",[t._v("结束时间:"+t._s(e.row.promotionEndTime))])]}}])}),a("el-table-column",{attrs:{prop:"",label:"是否过期",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"name",label:"商品名称",align:"center",width:"220"}}),a("el-table-column",{attrs:{prop:"brandName",label:"品牌名称",align:"center",width:"200"}}),a("el-table-column",{attrs:{align:"center",label:"商品价格",prop:"price",width:"120"}}),a("el-table-column",{attrs:{prop:"productCategoryName",label:"商品类别",align:"center",width:"120"}}),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间",align:"center",width:"220"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",align:"center",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticStyle:{color:"#f00","margin-left":"20px"},attrs:{type:"text",size:"small"},on:{click:function(a){return t.del(e.row.id)}}},[t._v("删除")])]}}])})],1)],1)],1)},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-card",{attrs:{shadow:"never","body-style":{padding:"20px"}}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v("查询条件")])]),a("div",[a("el-form",{ref:"form",attrs:{model:t.formData}},[a("el-form-item",[a("el-input",{staticStyle:{width:"18%","margin-right":"20px"},attrs:{placeholder:"商品名称",size:"normal",clearable:""},on:{clear:t.initData},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}}),a("el-input",{staticStyle:{width:"18%","margin-right":"20px"},attrs:{placeholder:"商品货号",size:"normal",clearable:""},on:{clear:t.initData},model:{value:t.formData.productSn,callback:function(e){t.$set(t.formData,"productSn",e)},expression:"formData.productSn"}}),a("el-select",{staticStyle:{"margin-right":"20px"},attrs:{placeholder:"品牌",clearable:""},on:{clear:t.initData},model:{value:t.formData.brandId,callback:function(e){t.$set(t.formData,"brandId",e)},expression:"formData.brandId"}},t._l(t.brandData,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1),a("el-select",{staticStyle:{"margin-right":"20px"},attrs:{placeholder:"上架状态",clearable:""},on:{clear:t.initData},model:{value:t.formData.publishStatus,callback:function(e){t.$set(t.formData,"publishStatus",e)},expression:"formData.publishStatus"}},[a("el-option",{attrs:{label:"下架",value:0}}),a("el-option",{attrs:{label:"上架",value:1}})],1),a("el-select",{attrs:{placeholder:"审核状态",clearable:""},on:{clear:t.initData},model:{value:t.formData.verifyStatus,callback:function(e){t.$set(t.formData,"verifyStatus",e)},expression:"formData.verifyStatus"}},[a("el-option",{attrs:{label:"未审核",value:0}}),a("el-option",{attrs:{label:"审核",value:1}})],1)],1),a("el-form-item",[a("div",{staticClass:"btn",staticStyle:{"margin-top":"20px",width:"100%",display:"flex","justify-content":"flex-end"}},[a("el-button",{attrs:{size:"mini"}},[t._v("取消")]),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.search}},[t._v("搜索")])],1)])],1)],1)]),a("el-card",{staticStyle:{"margin-top":"40px"},attrs:{shadow:"never","body-style":{padding:"20px"}}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v("商品列表")])]),a("el-table",{attrs:{data:t.list,border:"",stripe:""}},[a("el-table-column",{attrs:{label:"序号",type:"index",align:"center",width:"50"}}),a("el-table-column",{attrs:{label:"选择",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-radio",{attrs:{label:e.row.id},on:{change:function(a){return t.showDialog(e.row)}},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[a("span")])]}}])}),a("el-table-column",{attrs:{label:"商品图片",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{attrs:{src:t.row.pic,width:"100",height:"100",alt:""}})]}}])}),a("el-table-column",{attrs:{label:"商品名称",align:"center",prop:"name"}}),a("el-table-column",{attrs:{label:"商品价格",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v("原价:"+t._s(e.row.originalPrice))]),a("p",[t._v("现价:"+t._s(e.row.price))])]}}])}),a("el-table-column",{attrs:{label:"商品类别",align:"center",prop:"productCategoryName"}}),a("el-table-column",{attrs:{label:"商品重量",align:"center",prop:"weight"}})],1),a("el-pagination",{attrs:{total:t.total,"current-page":t.start,"page-sizes":[5,10,15,20],"page-size":t.limit,layout:"total,sizes,prev,pager,next,jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),a("el-dialog",{attrs:{title:"编辑限时活动",visible:t.isDialogShow,"append-to-body":""},on:{"update:visible":function(e){t.isDialogShow=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px",inline:!1,size:"mini"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"商品价格"}},[t._v(" "+t._s(t.form.price)+" ")])],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"商品名称"}},[t._v(" "+t._s(t.form.name)+" ")])],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"促销价格"}},[a("el-input-number",{model:{value:t.form.promotionPrice,callback:function(e){t.$set(t.form,"promotionPrice",e)},expression:"form.promotionPrice"}})],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"排序"}},[a("el-input-number",{model:{value:t.form.sort,callback:function(e){t.$set(t.form,"sort",e)},expression:"form.sort"}})],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"开始时间"}},[[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"选择日期时间"},model:{value:t.form.promotionStartTime,callback:function(e){t.$set(t.form,"promotionStartTime",e)},expression:"form.promotionStartTime"}})],1)]],2)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"结束时间"}},[[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"选择日期时间"},model:{value:t.form.promotionEndTime,callback:function(e){t.$set(t.form,"promotionEndTime",e)},expression:"form.promotionEndTime"}})],1)]],2)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"活动限购数量"}},[a("el-input",{attrs:{placeholder:""},model:{value:t.form.promotionPerLimit,callback:function(e){t.$set(t.form,"promotionPerLimit",e)},expression:"form.promotionPerLimit "}})],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"商品图片"}},[a("img",{staticStyle:{},attrs:{src:t.form.pic,alt:"",height:"100"}})])],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6,offset:18}},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.isDialogShow=!1}}},[t._v("取消")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.addActive}},[t._v("确定")])],1)],1)],1)],1)],1)},i=[],l=(a("b0c0"),a("0c6d"));function s(){return Object(l["a"])({url:"/lejuAdmin/homeRecommend/findAllRecommends"})}function c(t){return Object(l["a"])({url:"/lejuAdmin/homeRecommend/delRecommend/".concat(t),method:"delete"})}function u(t){return Object(l["a"])({url:"/lejuAdmin/homeRecommend/addRecommend",method:"post",data:t})}var d=a("5c96"),m={props:["list","total","limit","start","formData","brandData"],data:function(){return{radio:"",form:{productId:"",promotionEndTime:"",promotionPerLimit:"",promotionPrice:"",promotionStartTime:"",sort:""},isDialogShow:!1}},created:function(){},mounted:function(){},methods:{handleSizeChange:function(t){this.$emit("uptLimit",t)},handleCurrentChange:function(t){this.$emit("uptStart",t)},search:function(){this.$emit("searchData",this.formData)},initData:function(){this.$emit("initData")},addActive:function(){var t=this;u(this.form).then((function(e){var a=e.success,r=e.message;a?(d["Message"].success("添加成功"),t.isDialogShow=!1):d["Message"].error(r)}))},showDialog:function(t){this.isDialogShow=!0,this.form.productId=t.id,this.form.price=t.price,this.form.name=t.name,this.form.pic=t.pic}}},p=m,f=(a("38e3"),a("2877")),b=Object(f["a"])(p,o,i,!1,null,"112e6523",null),h=b.exports,g=a("6cd9"),v=a("1b62"),w={components:{goods:h},mixins:[v["a"]],data:function(){return{dialogVisible:!1,tableData:[],start:1,limit:5,list:[],formData:{brandId:"",id:"",name:"",productCategoryId:"",productSn:"",publishStatus:"",verifyStatus:""},total:0,brandData:[]}},created:function(){this.initAddressList(),this.init()},mounted:function(){},methods:{init:function(){var t=this;Object(g["g"])(this.start,this.limit,this.formData).then((function(e){t.total=e.data.total,t.list=e.data.rows})),Object(g["e"])().then((function(e){t.brandData=e.data.items}))},openDetail:function(){this.dialogVisible=!0},initAddressList:function(){var t=this;s().then((function(e){var a=e.data;t.tableData=a.items}))},del:function(t){var e=this;c(t).then((function(t){var a=t.success,r=t.message;a?(d["Message"].success("删除成功"),e.initAddressList()):d["Message"].error(r)}))},parLimit:function(t){this.limit=t,this.start=1,this.init()},parStart:function(t){this.start=t,this.init()},search:function(t){this.init()},initClear:function(){this.start=1,this.init()}}},y=w,S=(a("013c"),Object(f["a"])(y,r,n,!1,null,"098dc02c",null));e["default"]=S.exports},"1b62":function(t,e,a){"use strict";var r=a("5fc1");e["a"]={data:function(){return{page:{currentPage:1,size:10,pageSizes:[10,15,20,25],total:0},uploadfilesOss:"/lejuAdmin/material/uploadFileOss"}},computed:{token:function(){return{token:Object(r["a"])()}}}}},"38e3":function(t,e,a){"use strict";a("784a")},"46c1":function(t,e,a){},"6cd9":function(t,e,a){"use strict";a.d(e,"e",(function(){return n})),a.d(e,"f",(function(){return o})),a.d(e,"g",(function(){return i})),a.d(e,"d",(function(){return l})),a.d(e,"c",(function(){return s})),a.d(e,"l",(function(){return c})),a.d(e,"b",(function(){return u})),a.d(e,"h",(function(){return d})),a.d(e,"j",(function(){return m})),a.d(e,"i",(function(){return p})),a.d(e,"k",(function(){return f})),a.d(e,"a",(function(){return b}));a("99af");var r=a("0c6d");function n(){return Object(r["a"])({url:"/lejuAdmin/brand/findAllBrand"})}function o(t){return Object(r["a"])({url:"/lejuAdmin/product/productSkusDetail/".concat(t)})}function i(t,e,a){return Object(r["a"])({url:"/lejuAdmin/product/productsByPage/".concat(t,"/").concat(e),method:"post",data:a})}function l(t){return Object(r["a"])({url:"/lejuAdmin/product/del/".concat(t),method:"delete"})}function s(t){return Object(r["a"])({url:"/lejuAdmin/sku/delSku/".concat(t),method:"delete"})}function c(t){return Object(r["a"])({url:"/lejuAdmin/sku/updateSkuInfo",method:"post",data:t})}function u(t){return Object(r["a"])({url:"/lejuAdmin/sku/addProductSkus",method:"post",data:t})}function d(t){return Object(r["a"])({url:"/lejuAdmin/product/switchNewStatus",method:"post",data:t})}function m(t){return Object(r["a"])({url:"/lejuAdmin/product/switchRecommandStatus",method:"post",data:t})}function p(t){return Object(r["a"])({url:"/lejuAdmin/product/switchPublishStatus",method:"post",data:t})}function f(t){return Object(r["a"])({url:"/lejuAdmin/product/switchVerifyStatus",method:"post",data:t})}function b(t){return Object(r["a"])({url:"/lejuAdmin/product/addProductAndSkus",method:"post",data:t})}},"784a":function(t,e,a){}}]);