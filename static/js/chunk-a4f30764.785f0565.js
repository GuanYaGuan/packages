(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a4f30764"],{"06c5":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("fb6a"),a("d3b7"),a("b0c0"),a("a630"),a("3ca3"),a("ac1f"),a("00b4");var n=a("6b75");function r(t,e){if(t){if("string"===typeof t)return Object(n["a"])(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n["a"])(t,e):void 0}}},"0c6d":function(t,e,a){"use strict";a("d3b7");var n,r=a("bc3a"),i=a.n(r),o=a("5c96"),c=a("4360"),s=a("5fc1"),l=void 0;n="http://leju.bufan.cloud";var u=i.a.create({baseURL:n,timeout:5e3});u.interceptors.request.use((function(t){return Object(s["a"])()&&(t.headers["token"]=Object(s["a"])()),t}),(function(t){return console.log(t),Promise.reject(t)})),u.interceptors.response.use((function(t){var e=t.data;return 2e4!==e.code?(Object(o["Message"])({message:e.message||"Error",type:"error",duration:5e3}),20002===e.code&&(Object(s["c"])(),Object(s["d"])(),l.$router.push("/login")),50008!==e.code&&50012!==e.code&&50014!==e.code||o["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((function(){c["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(new Error(e.message||"Error"))):e}),(function(t){return console.log("err"+t),Object(o["Message"])({message:t.message,type:"error",duration:5e3}),Promise.reject(t)})),e["a"]=u},1148:function(t,e,a){"use strict";var n=a("a691"),r=a("1d80");t.exports="".repeat||function(t){var e=String(r(this)),a="",i=n(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(a+=e);return a}},"1b62":function(t,e,a){"use strict";var n=a("5fc1");e["a"]={data:function(){return{page:{currentPage:1,size:10,pageSizes:[10,15,20,25],total:0},uploadfilesOss:"/lejuAdmin/material/uploadFileOss"}},computed:{token:function(){return{token:Object(n["a"])()}}}}},"3d53":function(t,e,a){"use strict";a("6036")},"408a":function(t,e,a){var n=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},6036:function(t,e,a){},"645d":function(t,e,a){},"6b75":function(t,e,a){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}a.d(e,"a",(function(){return n}))},"6c7a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("el-card",{attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("新增文章")])]),a("el-form",{ref:"articleDetail",attrs:{size:"normal","label-width":"120px",model:t.articleData,rules:t.rules}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"作者",prop:"author"}},[a("el-input",{attrs:{type:"text",placeholder:"作者姓名"},model:{value:t.articleData.author,callback:function(e){t.$set(t.articleData,"author",e)},expression:"articleData.author"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-input",{attrs:{type:"text",placeholder:"文章标题"},model:{value:t.articleData.title,callback:function(e){t.$set(t.articleData,"title",e)},expression:"articleData.title"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"是否显示"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.articleData.isShow,callback:function(e){t.$set(t.articleData,"isShow",e)},expression:"articleData.isShow"}})],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:14}},[a("el-form-item",{attrs:{label:"摘要"}},[a("el-input",{attrs:{id:"",type:"textarea",placeholder:"摘要",rows:"3"},model:{value:t.articleData.summary,callback:function(e){t.$set(t.articleData,"summary",e)},expression:"articleData.summary"}})],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"封面图片"}},[a("el-upload",{ref:"uploadCom",attrs:{action:t.uploadfilesOss,headers:t.token,"on-success":t.uploadSuc,"before-upload":t.uploadCoverimg}},[t.articleData.coverImg?a("img",{staticStyle:{width:"200px",height:"200px"},attrs:{src:t.articleData.coverImg,alt:""}}):a("el-button",{attrs:{type:"primary",size:"small"}},[t._v("点击上传素材")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v(" 只能上传jpg/png/gif/webp文件,且不超过500kb ")])],1)],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:14}},[a("el-form-item",{attrs:{label:"切换富文本类型"}},[a("el-radio",{attrs:{label:0},model:{value:t.articleData.editorType,callback:function(e){t.$set(t.articleData,"editorType",e)},expression:"articleData.editorType"}},[t._v("富文本")]),a("el-radio",{attrs:{label:1},model:{value:t.articleData.editorType,callback:function(e){t.$set(t.articleData,"editorType",e)},expression:"articleData.editorType"}},[t._v("Markdown")]),a("span",{staticStyle:{color:"#e6a23c"}},[a("i",{staticClass:"el-icon-warning-outline"}),t._v(" 注意!切换编辑器会清空编辑内容")])],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[0==t.articleData.editorType?a("Tinymce",{on:{change:t.editorChange},model:{value:t.articleData.content1,callback:function(e){t.$set(t.articleData,"content1",e)},expression:"articleData.content1"}}):t._e(),1==t.articleData.editorType?a("mavon-editor",{ref:"markdown",on:{imgAdd:t.$imgAdd,change:t.editorChange},model:{value:t.articleData.content1,callback:function(e){t.$set(t.articleData,"content1",e)},expression:"articleData.content1"}}):t._e()],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8,offset:19}},[a("el-form-item",{staticStyle:{"margin-top":"40px"}},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.submit}},[this.$route.query.id?a("span",[t._v("立即修改")]):a("span",[t._v("新增")])]),a("el-button",{staticStyle:{"margin-left":"30px"},attrs:{size:"small",type:"default"},on:{click:t.returnLast}},[t._v("取消")])],1)],1)],1)],1)],1)],1)},r=[],i=(a("ac1f"),a("00b4"),a("8256")),o=a("5c96"),c=a("0c6d");function s(t){return Object(c["a"])({url:"/lejuAdmin/productArticle/addArticle",method:"post",data:t})}function l(t){return Object(c["a"])({url:"/lejuAdmin/productArticle/productArticle/".concat(t)})}var u=a("1b62"),d=a("bc3a"),f=a.n(d),m={components:{Tinymce:i["a"]},mixins:[u["a"]],data:function(){return{rules:{author:[{required:!0,message:"请输入作者名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],title:[{required:!0,message:"请输入文章标题",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}]},articleData:{editorType:0,isShow:1,coverImg:""},fileimage:[]}},created:function(){var t=this;this.$route.query.id&&l(this.$route.query.id).then((function(e){t.articleData=e.data.productArticle}))},mounted:function(){},methods:{submit:function(){var t=this;this.$refs.articleDetail.validate((function(e){if(!e)return o["Message"].error("请注意表单验证"),!1;0===t.articleData.editorType?t.articleData.content2=t.articleData.content1:t.articleData.content2=t.$refs.markdown.d_render,s(t.articleData).then((function(e){var a=e.success,n=e.message;a?(o["Message"].success(n),t.$router.push({name:"Article"})):o["Message"].error(n)}))}))},uploadSuc:function(t){var e=t.success,a=t.data,n=t.message;e?(this.articleData.coverImg=a.fileUrl,this.$refs.uploadCom.clearFiles()):o["Message"].error(n)},uploadCoverimg:function(t){var e=/^image\/(jpeg|png|gif|webp|jpg)$/,a=e.test(t.type),n=t.size/1024/1024<1.5;return a||o["Message"].error("请按照格式上传图片"),n||o["Message"].error("上传头像图片大小不能超过 2MB!"),a&&n},editorChange:function(){this.articleData.content1=""},$imgAdd:function(t,e){var a=this,n=new FormData;n.append("image",e),f()({url:this.uploadfilesOss,method:"post",data:n,headers:this.token}).then((function(e){var n=e.data,r=n.data,i=n.message,c=n.success;if(c){var s=r.fileurl;a.$refs.markdown.$img2Url(t,s)}else o["Message"].error(i)}))},returnLast:function(){this.$router.push("/content/article")}}},p=m,h=(a("3d53"),a("2877")),g=Object(h["a"])(p,n,r,!1,null,"3d91607a",null);e["default"]=g.exports},8256:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tinymce-container",class:{fullscreen:t.fullscreen},style:{width:t.containerWidth}},[a("textarea",{staticClass:"tinymce-textarea",attrs:{id:t.tinymceId}}),t._v(" "),a("div",{staticClass:"editor-custom-btn-container"},[a("el-button",{staticClass:"btn",attrs:{type:"primary",size:"mini",icon:"el-icon-upload"}},[t._v("上传图片 "),a("input",{staticClass:"ipt-file",attrs:{type:"file"},on:{change:function(e){return t.fileChange(e)}}})])],1)])},r=[],i=(a("b680"),a("a9e3"),a("ac1f"),a("00b4"),["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"]),o=i,c=["searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"],s=c,l=(a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("06c5"));function u(t,e){var a="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=Object(l["a"])(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,c=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return o=t.done,t},e:function(t){c=!0,i=t},f:function(){try{o||null==a["return"]||a["return"]()}finally{if(c)throw i}}}}var d=[];function f(){return window.tinymce}var m=function(t,e){var a=document.getElementById(t),n=e||function(){};if(!a){var r=document.createElement("script");r.src=t,r.id=t,document.body.appendChild(r),d.push(n);var i="onload"in r?o:c;i(r)}function o(e){e.onload=function(){this.onerror=this.onload=null;var t,a=u(d);try{for(a.s();!(t=a.n()).done;){var n=t.value;n(null,e)}}catch(r){a.e(r)}finally{a.f()}d=null},e.onerror=function(){this.onerror=this.onload=null,n(new Error("Failed to load "+t),e)}}function c(t){t.onreadystatechange=function(){if("complete"===this.readyState||"loaded"===this.readyState){this.onreadystatechange=null;var e,a=u(d);try{for(a.s();!(e=a.n()).done;){var n=e.value;n(null,t)}}catch(r){a.e(r)}finally{a.f()}d=null}}}a&&n&&(f()?n(null,a):d.push(n))},p=m,h=a("bc3a"),g=a.n(h),b=a("5fc1"),y=a("5c96"),v="https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js",w={name:"Tinymce",props:{id:{type:String,default:function(){return"vue-tinymce-"+ +new Date+(1e3*Math.random()).toFixed(0)}},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{type:String,default:"file edit insert view format table"},height:{type:[Number,String],required:!1,default:360},width:{type:[Number,String],required:!1,default:"auto"}},data:function(){return{hasChange:!1,hasInit:!1,tinymceId:this.id,fullscreen:!1,languageTypeList:{en:"en",zh:"zh_CN",es:"es_MX",ja:"ja"}}},computed:{containerWidth:function(){var t=this.width;return/^[\d]+(\.[\d]+)?$/.test(t)?"".concat(t,"px"):t}},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick((function(){return window.tinymce.get(e.tinymceId).setContent(t||"")}))}},mounted:function(){this.init()},activated:function(){window.tinymce&&this.initTinymce()},deactivated:function(){this.destroyTinymce()},destroyed:function(){this.destroyTinymce()},methods:{init:function(){var t=this;p(v,(function(e){e?t.$message.error(e.message):t.initTinymce()}))},initTinymce:function(){var t=this,e=this;window.tinymce.init({selector:"#".concat(this.tinymceId),language:this.languageTypeList["zh"],height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:s,menubar:this.menubar,plugins:o,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,init_instance_callback:function(a){e.value&&a.setContent(e.value),e.hasInit=!0,a.on("NodeChange Change KeyUp SetContent",(function(){t.hasChange=!0,t.$emit("input",a.getContent())}))},setup:function(t){t.on("FullscreenStateChanged",(function(t){e.fullscreen=t.state}))},images_upload_handler:function(t,a,n,r){r(0);var i=t.blob(),o=new FormData;o.append("file",i);var c=Object(b["a"])();g.a.post("/lejuAdmin/material/uploadFileOss",o,{headers:{token:c}}).then((function(t){var n=t.data;n.success&&(a(n.data.fileUrl),window.tinymce.get(e.tinymceId).insertContent('<img src="'.concat(n.ossUrl,'" >'))),r(100)})).catch((function(t){console.log(t),r(100)}))}})},destroyTinymce:function(){var t=window.tinymce.get(this.tinymceId);this.fullscreen&&t.execCommand("mceFullScreen"),t&&t.destroy()},setContent:function(t){window.tinymce.get(this.tinymceId).setContent(t)},setDelayContent:function(t){var e=this,a=setInterval((function(){window.tinymce&&(window.tinymce.get(e.tinymceId).setContent(t),clearInterval(a))}),500)},getContent:function(){return window.tinymce.get(this.tinymceId).getContent()},fileChange:function(t){var e=this,a=t.target.files,n=a[0],r=new FormData;r.append("file",n);var i=Object(b["a"])();g.a.post("/lejuAdmin/material/uploadFileOss",r,{headers:{token:i}}).then((function(t){var a=t.data;a.success?(e.imageSuccessCBK(a.data.fileUrl),window.tinymce.get(e.tinymceId).insertContent('<img src="'.concat(a.ossUrl,'" >'))):y["Message"].error(a.data.message)}))},imageSuccessCBK:function(t){window.tinymce.get(this.tinymceId).insertContent('<img class="wscnph" src="'.concat(t,'" >'))}}},_=w,C=(a("d52b"),a("2877")),k=Object(C["a"])(_,n,r,!1,null,"76326418",null);e["a"]=k.exports},a9e3:function(t,e,a){"use strict";var n=a("83ab"),r=a("da84"),i=a("94ca"),o=a("6eeb"),c=a("5135"),s=a("c6b6"),l=a("7156"),u=a("c04e"),d=a("d039"),f=a("7c73"),m=a("241c").f,p=a("06cf").f,h=a("9bf2").f,g=a("58a8").trim,b="Number",y=r[b],v=y.prototype,w=s(f(v))==b,_=function(t){var e,a,n,r,i,o,c,s,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=g(l),e=l.charCodeAt(0),43===e||45===e){if(a=l.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+l}for(i=l.slice(2),o=i.length,c=0;c<o;c++)if(s=i.charCodeAt(c),s<48||s>r)return NaN;return parseInt(i,n)}return+l};if(i(b,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var C,k=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof k&&(w?d((function(){v.valueOf.call(a)})):s(a)!=b)?l(new y(_(e)),a,k):_(e)},x=n?m(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),D=0;x.length>D;D++)c(y,C=x[D])&&!c(k,C)&&h(k,C,p(y,C));k.prototype=v,v.constructor=k,o(r,b,k)}},b680:function(t,e,a){"use strict";var n=a("23e7"),r=a("a691"),i=a("408a"),o=a("1148"),c=a("d039"),s=1..toFixed,l=Math.floor,u=function(t,e,a){return 0===e?a:e%2===1?u(t,e-1,a*t):u(t*t,e/2,a)},d=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},f=s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){s.call({})}));n({target:"Number",proto:!0,forced:f},{toFixed:function(t){var e,a,n,c,s=i(this),f=r(t),m=[0,0,0,0,0,0],p="",h="0",g=function(t,e){var a=-1,n=e;while(++a<6)n+=t*m[a],m[a]=n%1e7,n=l(n/1e7)},b=function(t){var e=6,a=0;while(--e>=0)a+=m[e],m[e]=l(a/t),a=a%t*1e7},y=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==m[t]){var a=String(m[t]);e=""===e?a:e+o.call("0",7-a.length)+a}return e};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(p="-",s=-s),s>1e-21)if(e=d(s*u(2,69,1))-69,a=e<0?s*u(2,-e,1):s/u(2,e,1),a*=4503599627370496,e=52-e,e>0){g(0,a),n=f;while(n>=7)g(1e7,0),n-=7;g(u(10,n,1),0),n=e-1;while(n>=23)b(1<<23),n-=23;b(1<<n),g(1,1),b(2),h=y()}else g(0,a),g(1<<-e,0),h=y()+o.call("0",f);return f>0?(c=h.length,h=p+(c<=f?"0."+o.call("0",f-c)+h:h.slice(0,c-f)+"."+h.slice(c-f))):h=p+h,h}})},d52b:function(t,e,a){"use strict";a("645d")}}]);