(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{160:function(e,t,n){},183:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(49),i=n.n(c),o=(n(160),n(14)),s=n(8),l=n(31),j=n(20),d=(n(161),n(162),n(163),n(164),n(261)),u=n(129),h=n(277),b=0,p=1,x=JSON.parse(localStorage.getItem("userData")),O=Object(o.a)(Object(o.a)({firstName:"",lastName:"",email:"",type:b},x||{}),{},{login:function(){},logout:function(){}}),m=r.a.createContext(O),f=n(281),g=n(280),y=n(283),v=n(98),C=n(284),w=n(279),S=n(0);function k(e){var t=e.children,n=e.href,a=Object(j.f)();return Object(S.jsx)(w.a,{href:n,variant:"h6",color:"inherit",underline:"none",sx:{paddingRight:4,fontSize:17},onClick:function(e){e.preventDefault(),a.push(n)},children:t})}function W(){var e=Object(j.f)(),t=Object(a.useContext)(m),n=function(t){return function(){return e.push(t)}};return Object(S.jsx)(g.a,{sx:{flexGrow:1},children:Object(S.jsx)(f.a,{position:"static",sx:{bgcolor:"#242424"},children:Object(S.jsxs)(y.a,{children:[Object(S.jsx)("img",{src:"/CourseOracle/logo3.png",height:30,style:{paddingRight:8}}),Object(S.jsx)(v.a,{variant:"h6",component:"div",sx:{pr:6,cursor:"pointer"},onClick:n("/"),children:"Course Oracle"}),Object(S.jsxs)(g.a,{sx:{display:"flex",flexGrow:6},children:[Object(S.jsx)(k,{href:"/",children:"Search"}),Object(S.jsx)(k,{href:"/courses",children:"Courses"}),Object(S.jsx)(k,{href:"/schools",children:"Schools"})]}),Object(S.jsx)(C.a,{color:"inherit",onClick:n("/faq"),children:"FAQ"}),t.type===b?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(C.a,{color:"inherit",onClick:n("/register"),children:"Register"}),Object(S.jsx)(C.a,{color:"inherit",variant:"outlined",sx:{ml:1},onClick:n("/login"),children:"Login"})]}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(C.a,{color:"inherit",onClick:n("/dashboard"),children:"Dashboard"}),Object(S.jsx)(C.a,{color:"inherit",onClick:function(){return t.logout()||e.push("/")},children:"log out"})]})]})})})}var P=n(39),T=n(3),I=n(4),N=n(184),B=n(24),R=n(285),E=n(282),F=n(244),L=n(286),M=n(287),_=n(267),D=n(125),z=n.n(D),U=n(274);function A(e){var t=e.children;return Object(S.jsx)(g.a,{sx:{height:"calc(100vh - 64px)",background:"linear-gradient(to bottom, #a285d4 0%,#6f90b3 100%)"},children:t})}function q(e){var t=e.children;return Object(S.jsx)(g.a,{sx:{height:"calc(100vh - 64px)",backgroundImage:'url("'.concat("/CourseOracle",'/homepage_bg-min.jpg")'),backgroundSize:"1920px 1280px"},children:t})}var Y=Object(I.a)("div")((function(e){var t=e.theme;return{position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(N.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(N.a)(t.palette.common.white,.25)},marginLeft:0,width:"100%"}})),G=Object(I.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),H=Object(I.a)(B.c)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":{padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),width:"100%"}}})),J=Object(I.a)(_.a)({color:"#ccc","&.Mui-checked":{color:"#ccc"}});var K=n(271),Q=n(251),X=n(288),V=Object(I.a)(C.a)((function(){return{backgroundColor:"#3b924a","&:hover":{backgroundColor:"#219d3a"},"&:active":{backgroundColor:"#3b924a"}}})),Z=Object(I.a)(X.a)((function(){return{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}));function $(e){var t=e.loading,n=e.children,a=(e.noDefaultStyle,Object(P.a)(e,["loading","children","noDefaultStyle"]));return Object(S.jsxs)(g.a,{sx:{position:"relative",display:"initial"},children:[Object(S.jsx)(V,Object(o.a)(Object(o.a)({variant:"contained",disabled:t},a),{},{children:n||"Submit"})),t&&Object(S.jsx)(Z,{size:24})]})}var ee=n(25),te=n.n(ee),ne=n(44),ae={address:"https://co.lesterlyu.com"},re=n(65),ce=n(89),ie=n(93),oe=n(130),se=function(e){Object(ce.a)(n,e);var t=Object(ie.a)(n);function n(){return Object(re.a)(this,n),t.call(this,"Login Session Expired. Redirecting to login page.")}return n}(Object(oe.a)(Error)),le=function(e){if(!0===e.error&&2===e.code)throw localStorage.removeItem("userContext"),window.stop(),window.location.replace("/login"),new se;return e},je=function(){var e=Object(ne.a)(te.a.mark((function e(t,n){var a;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(ae.address).concat(t),{method:"POST",body:n?JSON.stringify(n):void 0,headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return a=e.sent,e.t0=le,e.next=6,a.json();case 6:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),de=function(){var e=Object(ne.a)(te.a.mark((function e(t,n){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je("/api/login",{email:t,password:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ue=function(){var e=Object(ne.a)(te.a.mark((function e(t){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je("/api/register",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),he=function(){var e=Object(ne.a)(te.a.mark((function e(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je("/api/logout");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),be=Object(I.a)(E.a)((function(e){var t=e.theme;return Object(T.a)({padding:40},t.breakpoints.down("sm"),{margin:0,padding:14,marginTop:10})})),pe=Object(I.a)(w.a)((function(e){e.theme;return{fontSize:15,lineHeight:2,color:"#007dff",cursor:"pointer",fontWeight:500}}));function xe(){return Object(S.jsxs)(v.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(S.jsx)(w.a,{color:"inherit",href:"/",children:"CourseOracle"})," ",(new Date).getFullYear(),"."]})}var Oe=Object(I.a)(E.a)((function(e){var t=e.theme;return Object(T.a)({padding:40},t.breakpoints.down("sm"),{margin:0,padding:14,marginTop:10})})),me=Object(I.a)(w.a)((function(e){e.theme;return{fontSize:15,lineHeight:2,color:"#007dff",cursor:"pointer",fontWeight:500}}));var fe=[{path:"/",exact:!0,Component:function(){var e=r.a.useState({checkedA:!0,checkedB:!0,checkedC:!0}),t=Object(s.a)(e,2),n=t[0],a=t[1],c=function(e){a(Object(o.a)(Object(o.a)({},n),{},Object(T.a)({},e.target.name,e.target.checked)))};return Object(S.jsx)(q,{children:Object(S.jsxs)(R.a,{justify:"center",children:[Object(S.jsx)(g.a,{sx:{display:"flex"},children:Object(S.jsx)(v.a,{variant:"h1",fontFamily:"sans-serif",fontSize:60,sx:{pt:5,color:"#eee",fontWeight:500,pb:5},children:"Course Oracle"})}),Object(S.jsx)(E.a,{sx:{height:"300px",pt:5,borderRadius:10,bgcolor:"rgb(36,36,36, 0.85)"},children:Object(S.jsxs)(U.a,{container:!0,spacing:4,sx:{marginTop:"40px"},justifyContent:"center",children:[Object(S.jsx)(U.a,{item:!0,xs:6,md:8,children:Object(S.jsxs)(U.a,{container:!0,direction:"column",alignItems:"stretch",children:[Object(S.jsx)(U.a,{item:!0,children:Object(S.jsx)(E.a,{children:Object(S.jsxs)(Y,{children:[Object(S.jsx)(G,{children:Object(S.jsx)(F.a,{})}),Object(S.jsx)(H,{placeholder:"Search for course\u2026"})]})})}),Object(S.jsx)(U.a,{item:!0,children:Object(S.jsx)(g.a,{sx:{pt:2},children:Object(S.jsxs)(L.a,{row:!0,children:[Object(S.jsx)(M.a,{sx:{color:"white"},control:Object(S.jsx)(J,{checked:n.checkedA,onChange:c,name:"checkedA",color:"primary"}),label:"Course Materials"}),Object(S.jsx)(M.a,{sx:{color:"white"},control:Object(S.jsx)(J,{checked:n.checkedB,onChange:c,name:"checkedB"}),label:"Course Past Exams"}),Object(S.jsx)(M.a,{sx:{color:"white"},control:Object(S.jsx)(J,{checked:n.checkedC,onChange:c,name:"checkedC",color:"primary"}),label:"Course Ratings"})]})})})]})}),Object(S.jsx)(U.a,{item:!0,xs:4,md:2,children:Object(S.jsx)(C.a,{sx:{mt:"-1px"},size:"large",variant:"contained",color:"primary",endIcon:Object(S.jsx)(z.a,{}),children:"Search"})})]})})]})})}},{path:"/login",exact:!0,Component:function(){var e=Object(j.f)(),t=Object(a.useContext)(m);t.type!==b&&e.push("/dashboard");var n=Object(a.useState)({email:"",password:"",alert:""}),r=Object(s.a)(n,2),c=r[0],i=r[1],l=Object(a.useState)(!1),d=Object(s.a)(l,2),u=d[0],h=d[1],x=function(e){return function(t){var n=t.target.value;i((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(T.a)({},e,n))}))}},O=function(){h(!0),de(c.email,c.password).then((function(n){n.success?(t.login({email:n.data.email,type:p}),e.push("/dashboard")):(h(!1),i((function(e){return Object(o.a)(Object(o.a)({},e),{},{alert:n.message})})))}))};return Object(S.jsx)(A,{children:Object(S.jsxs)(R.a,{maxWidth:"sm",children:[Object(S.jsx)(g.a,{sx:{paddingTop:"40px"}}),Object(S.jsxs)(be,{elevation:5,onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),e.stopPropagation(),O())},children:[Object(S.jsx)(v.a,{variant:"h4",sx:{color:"rgb(0,32,81)",fontWeight:400,marginBottom:3},children:"Login"}),Object(S.jsx)(K.a,{label:"Email",value:c.email,fullWidth:!0,onChange:x("email"),sx:{minHeight:"80px"}}),Object(S.jsx)("br",{}),Object(S.jsx)(K.a,{label:"Password",type:"password",value:c.password,fullWidth:!0,onChange:x("password"),sx:{minHeight:"80px"},helperText:c.alert,error:!!c.alert}),Object(S.jsx)($,{sx:{marginTop:3,marginBottom:3},onClick:O,loading:u,children:"Log in"}),Object(S.jsx)(C.a,{color:"info",variant:"contained",sx:{marginLeft:2,marginTop:3,marginBottom:3},children:"Log in from Wallet"}),Object(S.jsx)(Q.a,{}),Object(S.jsx)(pe,{variant:"body2",onClick:function(){return e.push("/register")},children:"Don't have an account? Sign up"}),Object(S.jsx)("br",{}),Object(S.jsx)(pe,{variant:"body2",children:"Forgot password?"})]})]})})}},{path:"/register",exact:!0,Component:function(){var e=Object(j.f)(),t=Object(a.useState)({firstName:"",lastName:"",email:"",password:"",alert:""}),n=Object(s.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(!1),l=Object(s.a)(i,2),d=l[0],u=l[1],h=function(e){return function(t){var n=t.target.value;c((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(T.a)({},e,n))}))}},b=function(){u(!0);var t=r.password,n=r.email,a=r.firstName,i=r.lastName;ue({password:t,email:n,firstName:a,lastName:i}).then((function(t){t.success?e.push("/login"):(u(!1),c((function(e){return Object(o.a)(Object(o.a)({},e),{},{alert:t.message})})))}))};return Object(S.jsx)(A,{children:Object(S.jsxs)(R.a,{maxWidth:"sm",children:[Object(S.jsx)(g.a,{sx:{paddingTop:"40px"}}),Object(S.jsxs)(Oe,{elevation:5,onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),e.stopPropagation(),b())},children:[Object(S.jsx)(v.a,{variant:"h4",sx:{color:"rgb(0,32,81)",fontWeight:400,marginBottom:3},children:"Sign up"}),Object(S.jsxs)(U.a,{container:!0,spacing:2,children:[Object(S.jsx)(U.a,{item:!0,xs:12,children:Object(S.jsx)(K.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",value:r.firstName,onChange:h("firstName"),autoFocus:!0})}),Object(S.jsx)(U.a,{item:!0,xs:12,children:Object(S.jsx)(K.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",value:r.lastName,onChange:h("lastName"),autoComplete:"lname"})}),Object(S.jsx)(U.a,{item:!0,xs:12,children:Object(S.jsx)(K.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",value:r.email,onChange:h("email"),autoComplete:"email"})}),Object(S.jsx)(U.a,{item:!0,xs:12,children:Object(S.jsx)(K.a,{variant:"outlined",required:!0,fullWidth:!0,id:"confirmEmail",label:"Confirm Email",name:"email",autoComplete:"confirmEmail"})}),Object(S.jsx)(U.a,{item:!0,xs:12,children:Object(S.jsx)(K.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:r.password,onChange:h("password"),helperText:r.alert,error:!!r.alert,autoComplete:"current-password"})}),Object(S.jsx)(U.a,{item:!0,xs:12,children:Object(S.jsx)(K.a,{variant:"outlined",required:!0,fullWidth:!0,name:"confirmPassword",label:"Confirm Password",type:"password",id:"confirmPassword",autoComplete:"confirmPassword"})}),Object(S.jsx)(U.a,{item:!0,xs:12,children:Object(S.jsx)(M.a,{control:Object(S.jsx)(_.a,{value:"allowExtraEmails",color:"primary"}),label:"I agree to the terms of use and privacy policy."})})]}),Object(S.jsx)($,{onClick:b,loading:d,children:"Sign Up"}),Object(S.jsx)(U.a,{container:!0,justifyContent:"flex-end",children:Object(S.jsx)(U.a,{item:!0,children:Object(S.jsx)(me,{variant:"body2",onClick:function(){return e.push("/login")},children:"Already have an account? Sign in"})})})]}),Object(S.jsx)(g.a,{mt:5,children:Object(S.jsx)(xe,{})})]})})}}];function ge(){return Object(S.jsx)(j.c,{children:fe.map((function(e,t){var n=e.path,a=e.Component,r=Object(P.a)(e,["path","Component"]);return Object(S.jsx)(j.a,Object(o.a)(Object(o.a)({path:n},r),{},{children:Object(S.jsx)(a,Object(o.a)({},r))}),t)}))})}function ye(){return Object(S.jsx)(v.a,{variant:"h1",fontSize:40,sx:{pt:5},children:"Profile Page Placeholder"})}var ve=n(252),Ce=n(253),we=n(254),Se=n(255),ke=n(256),We=n(257),Pe=n(258),Te=[{path:"/dashboard",exact:!0,Component:ye},{path:"/dashboard/profile",exact:!0,Component:ye},{path:"/dashboard/my-materials",exact:!0,Component:function(){return Object(S.jsx)(v.a,{variant:"h1",fontSize:40,sx:{pt:5},children:"MyMaterials.js"})}},{path:"/dashboard/my-reviews",exact:!0,Component:function(){return Object(S.jsx)(v.a,{variant:"h1",fontSize:40,sx:{pt:5},children:"MyReviews.js"})}},{path:"/dashboard/purchase",exact:!0,Component:function(){return Object(S.jsx)(v.a,{variant:"h1",fontSize:40,sx:{pt:5},children:"Purchase.js"})}},{path:"/dashboard/rate-course",exact:!0,Component:function(){return Object(S.jsx)(v.a,{variant:"h1",fontSize:40,sx:{pt:5},children:"RateCourse.js"})}},{path:"/dashboard/upload",exact:!0,Component:function(){return Object(S.jsx)(v.a,{variant:"h1",fontSize:40,sx:{pt:5},children:"UploadCourseMaterial.js"})}}],Ie=[{label:"My Profile",Icon:ve.a,path:"/dashboard/profile"},{label:"My Materials",Icon:Ce.a,path:"/dashboard/my-materials"},{label:"My Reviews",Icon:we.a,path:"/dashboard/my-reviews"},{label:"Purchase",Icon:Se.a,path:"/dashboard/purchase"},{label:"Rate Course",Icon:ke.a,path:"/dashboard/rate-course"},{label:"Upload Materials",Icon:We.a,path:"/dashboard/upload"},{label:"Contact Us",Icon:Pe.a,path:"/dashboard/help"}],Ne=n(293),Be=n(295),Re=n(259),Ee=n(260);function Fe(e){var t=e.config,n=Object(j.f)();return Object(S.jsx)(E.a,{variant:"outlined",sx:{marginTop:4,marginRight:2},children:Object(S.jsxs)(Ne.a,{dense:!0,children:[Object(S.jsx)(v.a,{sx:{fontWeight:500,paddingLeft:2,paddingBottom:1,pt:1},children:"Dashboard"}),t.map((function(e){var t=e.label,a=e.Icon,r=e.path;return Object(S.jsxs)(Be.a,{onClick:function(){return n.push(r)},children:[Object(S.jsx)(Re.a,{children:Object(S.jsx)(a,{fontSize:"small"})}),Object(S.jsx)(Ee.a,{children:t})]},t)}))]})})}function Le(){var e=Object(a.useContext)(m);return Object(S.jsxs)(R.a,{children:[Object(S.jsx)(g.a,{sx:{paddingTop:3}}),Object(S.jsxs)(v.a,{variant:"h1",fontSize:30,children:["Hello ",e.username," Icon here"]}),Object(S.jsxs)(g.a,{sx:{display:"flex"},children:[Object(S.jsx)(g.a,{sx:{flexGrow:1,maxWidth:"250px"},children:Object(S.jsx)(Fe,{config:Ie})}),Object(S.jsx)(E.a,{elevation:3,sx:{flexGrow:2,marginTop:4},children:Object(S.jsx)(j.c,{children:Te.map((function(e,t){var n=e.path,a=e.Component,r=Object(P.a)(e,["path","Component"]);return Object(S.jsx)(j.a,Object(o.a)(Object(o.a)({path:n},r),{},{children:Object(S.jsx)(a,Object(o.a)({},r))}),t)}))})})]})]})}var Me=n(296),_e=n(299),De=n(298),ze=n(297),Ue=n(292),Ae=n(294),qe=n(270),Ye=n(57),Ge=n.n(Ye);function He(e){var t=e.product,n=e.handleClose,a=e.materials,c=e.setMaterials,i=r.a.useState(0),o=Object(s.a)(i,2),l=o[0],j=o[1];return Object(S.jsxs)("div",{children:[Object(S.jsx)(U.a,{children:Object(S.jsx)("span",{children:"Rate this material!"})}),Object(S.jsxs)(U.a,{children:[Object(S.jsxs)(Ge.a,{rating:l,widgetRatedColors:"orange",changeRating:function(e){return j(e)},children:[Object(S.jsx)(Ge.a.Widget,{onClick:function(){return j(1)}}),Object(S.jsx)(Ge.a.Widget,{}),Object(S.jsx)(Ge.a.Widget,{}),Object(S.jsx)(Ge.a.Widget,{}),Object(S.jsx)(Ge.a.Widget,{})]}),Object(S.jsxs)("span",{children:[l," Stars"]})]}),Object(S.jsxs)(U.a,{children:[Object(S.jsx)(C.a,{variant:"outlined",color:"primary",onClick:n,children:"skip"}),Object(S.jsx)(C.a,{variant:"contained",color:"primary",onClick:function(){var e=[];a.forEach((function(n){t.id===n.id&&(n.status=2),e.push(n)})),c(e)},children:"Submit"})]})]})}function Je(e){var t=e.handleClose,n=Object(a.useState)(0),r=Object(s.a)(n,2),c=r[0],i=r[1];return Object(S.jsxs)("div",{children:[Object(S.jsx)(U.a,{children:"Reward Offerer"}),Object(S.jsx)(U.a,{children:Object(S.jsx)("input",{type:"number",placeholder:c,onChange:function(e){e.target.value<0?alert("You should type a positive number"):i(e.target.value)}})}),Object(S.jsxs)(U.a,{children:[Object(S.jsx)(C.a,{variant:"outlined",color:"primary",onClick:t,children:"Cancel"}),Object(S.jsx)(C.a,{variant:"contained",color:"primary",onClick:function(){console.log(c)},children:"Submit"})]})]})}var Ke=Object(I.a)(qe.a)((function(){return{padding:20}}));function Qe(e){var t=e.product,n=e.handleClose,a=e.materials,c=e.setMaterials;return Object(S.jsxs)(r.a.Fragment,{children:[0===t.status&&Object(S.jsxs)(r.a.Fragment,{children:[Object(S.jsx)(v.a,{variant:"h6",gutterBottom:!0,children:"Order summary"}),Object(S.jsxs)(Ae.a,{children:[Object(S.jsxs)(Ke,{children:[Object(S.jsx)(Ee.a,{primary:t.school+" "+t.course+" "+t.year+" "+t.semester+" "+t.prof[0],secondary:t.type}),Object(S.jsx)(v.a,{variant:"body1",children:t.price})]},t.id),Object(S.jsxs)(Ke,{children:[Object(S.jsx)(Ee.a,{primary:"Total"}),Object(S.jsx)(v.a,{variant:"subtitle1",style:{fontWeight:700},children:Object(S.jsx)("span",{children:t.price})})]}),Object(S.jsxs)(Ke,{children:[Object(S.jsx)(C.a,{variant:"outlined",color:"primary",onClick:n,children:"Close"}),Object(S.jsx)(v.a,{style:{fontWeight:700},children:Object(S.jsx)(C.a,{variant:"contained",color:"primary",onClick:function(e){var n=[];a.forEach((function(e){t.id===e.id&&(e.status=1),n.push(e)})),c(n)},children:"Buy"})})]})]})]}),1===t.status&&Object(S.jsx)(He,{product:t,handleClose:n,materials:a,setMaterials:c}),2===t.status&&Object(S.jsx)(Je,{product:t,handleClose:n,materials:a,setMaterials:c})]})}var Xe=Object(I.a)(Me.a)((function(){return{height:"100%",display:"flex",flexDirection:"column"}})),Ve=[{id:1,price:5,school:"University of Toronto",course:"CSC148",cover_page:"https://source.unsplash.com/random",year:2018,semester:"fall",type:"Past Exam",prof:["David Liu"],offer_by:"student1",like:199,unlike:2,status:0},{id:2,price:5,school:"University of Toronto",course:"CSC148",cover_page:"https://source.unsplash.com/random",year:2019,semester:"fall",type:"Professor Course Note",prof:["xxxxxx","yyyyyyy"],offer_by:"student2",like:199,unlike:2,status:0},{id:3,price:5,school:"University of Toronto",course:"CSC148",cover_page:"https://source.unsplash.com/random",year:2019,semester:"fall",type:"Student Course Note",prof:["xxxxxx","yyyyyyy"],offer_by:"student3",like:199,unlike:2,status:0},{id:4,price:5,school:"University of Toronto",course:"CSC148",cover_page:"https://source.unsplash.com/random",year:2019,semester:"fall",type:"Past Exam",prof:["xxxxxx","yyyyyyy"],offer_by:"student4",like:199,unlike:2,status:2},{id:5,price:5,school:"University of Toronto",course:"CSC148",cover_page:"https://source.unsplash.com/random",year:2019,semester:"winter",type:"Final Exam",prof:["xxxxxx","yyyyyyy"],offer_by:"student5",like:199,unlike:2,status:1}];var Ze=[{path:"/materials",exact:!0,Component:function(){var e=new URLSearchParams(window.location.search).get("course"),t=new URLSearchParams(window.location.search).get("institution");console.log(e,t);var n=Object(a.useState)({name:window.location.href.split("/")[window.location.href.split("/").length-1],school:"University of Toronto",description:"CSC148 is an Introduction to Computer Science course. This course teaches you basic data structures (e.g. Stack, Queues, etc.) and powerful concepts like Object Oriented Programming and Recursion.",professors:["David Liu","xxxxxx","yyyyyyy"],difficulty:3}),c=Object(s.a)(n,2),i=c[0],o=(c[1],r.a.useState(null)),l=Object(s.a)(o,2),j=l[0],u=l[1],h=r.a.useState(null),b=Object(s.a)(h,2),p=b[0],x=b[1],O=function(e){x(e.target.value),u({top:e.clientY,left:e.clientX})},m=function(){u(null)},f=Object(a.useState)("contained"),g=Object(s.a)(f,2),y=g[0],w=g[1],k=Object(a.useState)("outlined"),W=Object(s.a)(k,2),P=W[0],T=W[1],I=Object(a.useState)("outlined"),N=Object(s.a)(I,2),B=N[0],E=N[1],F=Object(a.useState)("outlined"),L=Object(s.a)(F,2),M=L[0],_=L[1],D=Object(a.useState)("outlined"),z=Object(s.a)(D,2),A=z[0],q=z[1],Y=Object(a.useState)(Ve),G=Object(s.a)(Y,2),H=G[0],J=G[1];return Object(S.jsxs)(r.a.Fragment,{children:[Object(S.jsx)(d.a,{}),Object(S.jsxs)("main",{children:[Object(S.jsx)("div",{style:{padding:"10px"},children:Object(S.jsxs)(R.a,{maxWidth:"sm",children:[Object(S.jsx)(v.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:e}),Object(S.jsxs)(v.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:["school: ",t]}),Object(S.jsxs)(v.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:["professors: ",i.professors.map((function(e){return Object(S.jsx)("a",{href:"prof/"+e,children:e+" "},e)}))]}),Object(S.jsx)(v.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:i.description}),Object(S.jsx)("div",{style:{marginTop:"5px"},children:Object(S.jsxs)(U.a,{container:!0,spacing:2,justifyContent:"center",children:[Object(S.jsx)(U.a,{item:!0,children:Object(S.jsx)(C.a,{variant:y,color:"primary",onClick:function(){w("contained"),T("outlined"),E("outlined"),_("outlined"),q("outlined"),J(Ve)},children:"All"})}),Object(S.jsx)(U.a,{item:!0,children:Object(S.jsx)(C.a,{variant:P,color:"primary",onClick:function(){w("outlined"),T("contained"),E("outlined"),_("outlined"),q("outlined"),J(Ve.filter((function(e){return"Student Course Note"===e.type})))},children:"Student Course Note"})}),Object(S.jsx)(U.a,{item:!0,children:Object(S.jsx)(C.a,{variant:B,color:"primary",onClick:function(){w("outlined"),T("outlined"),E("contained"),_("outlined"),q("outlined"),J(Ve.filter((function(e){return"Professor Course Note"===e.type})))},children:"Professor Course Note"})}),Object(S.jsx)(U.a,{item:!0,children:Object(S.jsx)(C.a,{variant:M,color:"primary",onClick:function(e){w("outlined"),T("outlined"),E("outlined"),_("contained"),q("outlined"),J(Ve.filter((function(e){return"Past Exam"===e.type})))},children:"Past Exam"})}),Object(S.jsx)(U.a,{item:!0,children:Object(S.jsx)(C.a,{variant:A,color:"primary",onClick:function(e){w("outlined"),T("outlined"),E("outlined"),_("outlined"),q("contained"),J(Ve.filter((function(e){return"Final Exam"===e.type})))},children:"Final Exam"})})]})})]})}),Object(S.jsx)(R.a,{style:{paddingTop:"5px",paddingBottom:"5px"},maxWidth:"md",children:Object(S.jsx)(U.a,{container:!0,spacing:4,children:H.map((function(e){return Object(S.jsx)(U.a,{item:!0,xs:12,sm:6,md:4,children:Object(S.jsxs)(Xe,{children:[Object(S.jsx)(ze.a,{style:{paddingTop:"56.25%"},image:e.cover_page,title:"Image title"}),Object(S.jsxs)(De.a,{style:{flexGrow:1},children:[Object(S.jsxs)(v.a,{gutterBottom:!0,variant:"h5",component:"h2",children:["semester: ",e.year," ",e.semester]}),Object(S.jsxs)(v.a,{children:["id: ",e.id]}),Object(S.jsxs)(v.a,{children:["price: ",e.price]}),Object(S.jsxs)(v.a,{children:["type: ",e.type]}),Object(S.jsxs)(v.a,{children:["offer_by: ",e.offer_by]}),Object(S.jsxs)(v.a,{children:["prof: ",e.prof.map((function(e){return Object(S.jsx)("a",{href:"profs/"+e,children:e+" "},e)}))]}),Object(S.jsxs)(v.a,{children:["like: ",e.like]}),Object(S.jsxs)(v.a,{children:["unlike: ",e.unlike]})]}),Object(S.jsxs)(_e.a,{children:[0===e.status&&Object(S.jsx)(C.a,{value:e.id,variant:"contained",color:"primary",onClick:O,children:"Buy"}),1===e.status&&Object(S.jsx)(C.a,{value:e.id,variant:"outlined",color:"primary",onClick:O,children:"Rate"}),2===e.status&&Object(S.jsx)(C.a,{value:e.id,variant:"outlined",color:"secondary",onClick:O,children:"Reward"}),Object(S.jsxs)(Ue.a,{open:(t=e.id,t===parseInt(p)&&Boolean(j)),anchorReference:"anchorPosition",anchorPosition:j,onClose:m,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:[0===e.status&&Object(S.jsx)(Qe,{product:e,handleClose:m,materials:H,setMaterials:J}),1===e.status&&Object(S.jsx)(He,{product:e,handleClose:m,materials:H,setMaterials:J}),2===e.status&&Object(S.jsx)(Je,{product:e,handleClose:m})]})]})]})},e.id);var t}))})})]})]})}}];function $e(){return Object(S.jsx)(j.c,{children:Ze.map((function(e,t){var n=e.path,a=e.Component,r=Object(P.a)(e,["path","Component"]);return Object(S.jsx)(j.a,Object(o.a)(Object(o.a)({path:n},r),{},{render:function(){return Object(S.jsx)(a,Object(o.a)({},r))}}),t)}))})}var et=n(291),tt=n(272),nt=n(268),at=n(289),rt=n(266),ct=n(264),it=n(262),ot=n(263),st=[{id:1,username:"Theo",user_image:"https://source.unsplash.com/random",course:"csc343",school:"University of Toronto",year:2018,semester:"Fall",prof:"Daniela",like:10,unlike:3,score:4,comment:"Be ready to read a lot. Those materials are really helpful"},{id:2,username:"Emily",user_image:"https://source.unsplash.com/random",course:"csc343",school:"University of Toronto",year:2019,semester:"Winter",prof:"Michelle",like:110,unlike:3,score:5,comment:"Cannot ask more, everything is perfect"},{id:3,username:"Lester",user_image:"https://source.unsplash.com/random",course:"csc343",school:"University of Toronto",year:2017,semester:"Summer",prof:"Michelle",like:50,unlike:2,score:3,comment:"Hard to pass the exams"}],lt=["Fall","Summer","Winter"];var jt=[{path:"/rating/:course",exact:!0,Component:function(){var e=window.location.href.split("/")[window.location.href.split("/").length-1],t=Object(a.useState)(lt),n=Object(s.a)(t,2),c=n[0],i=n[1],l=Array.from(new Set(st.map((function(e){return e.prof})))),j=Object(a.useState)(l),d=Object(s.a)(j,2),u=d[0],h=d[1],b=Object(a.useState)(""),p=Object(s.a)(b,2),x=p[0],O=p[1],m=Object(a.useState)(0),f=Object(s.a)(m,2),y=f[0],C=f[1],w=Object(a.useState)(""),k=Object(s.a)(w,2),W=k[0],P=k[1],T=Object(a.useState)(""),I=Object(s.a)(T,2),N=I[0],B=(I[1],Object(a.useState)(2021)),R=Object(s.a)(B,2),E=R[0],F=R[1],L=Object(a.useState)(lt[0]),M=Object(s.a)(L,2),_=M[0],D=M[1];return Object(S.jsxs)(r.a.Fragment,{children:[Object(S.jsx)(g.a,{className:"Title",children:Object(S.jsx)(v.a,{variant:"h1",children:e})}),Object(S.jsxs)(g.a,{pl:3,children:[Object(S.jsxs)(et.a,{width:"100px",style:{margin:5},children:[Object(S.jsx)(tt.a,{id:"semester-selection-label",children:"Semester"}),Object(S.jsx)(nt.a,{labelId:"semester-selection-label",id:"semester-selection",multiple:!0,value:c,onChange:function(e){i(e.target.value)},input:Object(S.jsx)(at.a,{}),style:{minWidth:120},children:lt.map((function(e){return Object(S.jsx)(Be.a,{value:e,children:e},e)}))})]}),Object(S.jsxs)(et.a,{width:"100px",style:{margin:5},children:[Object(S.jsx)(tt.a,{id:"prof-selection-label",children:"Prof"}),Object(S.jsx)(nt.a,{labelId:"prof-selection-label",id:"prof-selection",multiple:!0,value:u,onChange:function(e){h(e.target.value)},input:Object(S.jsx)(at.a,{}),style:{minWidth:120},children:l.map((function(e){return Object(S.jsx)(Be.a,{value:e,children:e},e)}))})]})]}),Object(S.jsx)(g.a,{width:"90%",children:st.map((function(e){return function(e,t){return e.includes(t)}(c,e.semester)&&function(e,t){return e.includes(t)}(u,e.prof)&&Object(S.jsxs)(g.a,{border:1,width:1,m:3,display:"flex",children:[Object(S.jsxs)(g.a,{style:{width:"20%"},borderRight:1,children:[Object(S.jsxs)(g.a,{borderBottom:1,display:"flex",children:[Object(S.jsx)(v.a,{fontWeight:"fontWeightBold",pr:1,children:"User:"}),Object(S.jsx)(v.a,{children:e.username})]}),Object(S.jsx)(ze.a,{style:{height:0,paddingTop:"56.25%",marginTop:"30"},image:e.user_image,title:"user image"})]}),Object(S.jsxs)(g.a,{style:{width:"80%"},children:[Object(S.jsxs)(g.a,{borderBottom:1,display:"flex",justifyContent:"flex-start",children:[Object(S.jsx)(v.a,{fontWeight:"fontWeightBold",pl:1,pr:1,children:"Prof:"}),Object(S.jsx)(v.a,{children:e.prof}),Object(S.jsx)(v.a,{fontWeight:"fontWeightBold",pl:1,pr:1,children:"Score:"}),Object(S.jsxs)(v.a,{children:[e.score,"/5"]}),Object(S.jsx)(v.a,{fontWeight:"fontWeightBold",pl:1,pr:1,children:"Year:"}),Object(S.jsx)(v.a,{children:e.year}),Object(S.jsx)(v.a,{fontWeight:"fontWeightBold",pl:1,pr:1,children:"Semester:"}),Object(S.jsx)(v.a,{children:e.semester})]}),Object(S.jsxs)(g.a,{pl:1,display:"flex",justifyContent:"flex-start",children:[Object(S.jsxs)(g.a,{style:{width:"80%"},children:[Object(S.jsx)(v.a,{fontWeight:"fontWeightBold",children:"Comment:"}),Object(S.jsx)(v.a,{style:{display:"inline-block"},children:e.comment})]}),Object(S.jsxs)(g.a,{style:{width:"30%"},display:"flex",flexGrow:1,borderLeft:1,children:[Object(S.jsxs)(g.a,{children:[Object(S.jsx)(ze.a,{style:{height:"100px",width:"100px"},image:"https://www.kindpng.com/picc/m/136-1366147_thumb-up-icon-color-thumbs-up-png-transparent.png",title:"Like"}),Object(S.jsx)(v.a,{align:"center",children:e.like})]}),Object(S.jsxs)(g.a,{pl:5,children:[Object(S.jsx)(ze.a,{style:{height:"100px",width:"100px"},image:"https://www.pngitem.com/pimgs/m/366-3667940_thumbs-down-icon-png-transparent-png.png",title:"Unlike"}),Object(S.jsx)(v.a,{align:"center",children:e.unlike})]})]})]})]})]},e.id)}))}),Object(S.jsxs)(g.a,{width:"90%",p:3,m:3,border:1,children:[Object(S.jsx)(v.a,{variant:"h6",children:"Add a New Rating"}),Object(S.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={newScore:y,newYear:E,newCourse:N,newProf:x,newSemester:_,newComment:W};console.log(t)},children:[Object(S.jsx)("label",{children:"Score"}),Object(S.jsx)("input",{type:"number",min:"0",max:"5",required:!0,value:y,onChange:function(e){return C(e.target.value)}}),Object(S.jsx)("label",{children:"Year"}),Object(S.jsx)(it.b,{dateAdapter:ot.a,children:Object(S.jsx)(ct.a,{views:["year"],label:"Year",value:E,onChange:function(e){F(e)},renderInput:function(e){return Object(S.jsx)(K.a,Object(o.a)({},e))}})}),Object(S.jsx)(g.a,{style:{width:"20%"},children:Object(S.jsx)(rt.a,{freeSolo:!0,options:l,disableClearable:!0,onInputChange:function(e,t){O(t)},renderInput:function(e){return Object(S.jsx)(K.a,Object(o.a)(Object(o.a)({},e),{},{label:"Prof",margin:"normal",variant:"outlined"}))}})}),Object(S.jsx)(g.a,{style:{width:"20%"},children:Object(S.jsx)(rt.a,{renderInput:function(e){return Object(S.jsx)(K.a,Object(o.a)(Object(o.a)({},e),{},{label:"Semester",variant:"outlined"}))},options:lt,onInputChange:function(e,t){D(t)}})}),Object(S.jsx)("label",{children:"Comment"}),Object(S.jsx)("textarea",{required:!0,value:W,rows:"4",cols:"50",onChange:function(e){return P(e.target.value)}}),Object(S.jsx)("button",{children:"Add Rating"})]})]})]})}}];function dt(){return Object(S.jsx)(j.c,{children:jt.map((function(e,t){var n=e.path,a=e.Component,r=Object(P.a)(e,["path","Component"]);return Object(S.jsx)(j.a,Object(o.a)(Object(o.a)({path:n},r),{},{render:function(){return Object(S.jsx)(a,Object(o.a)({},r))}}),t)}))})}var ut=Object(u.a)({}),ht="lesterlyu.github.io"===window.location.hostname.toLowerCase();var bt=function(){var e=Object(a.useState)(Object(o.a)(Object(o.a)({},O),{},{login:function(e){localStorage.setItem("userData",JSON.stringify(e)),r((function(t){return Object(o.a)(Object(o.a)({},t),e)}))},logout:function(){he().then((function(){r((function(e){return Object(o.a)(Object(o.a)({},e),{},{username:"",email:"",type:b})})),localStorage.removeItem("userData")}))}})),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(S.jsx)("div",{className:"App",children:Object(S.jsxs)(h.a,{theme:ut,children:[Object(S.jsx)(d.a,{}),Object(S.jsx)(m.Provider,{value:n,children:Object(S.jsxs)(l.a,{basename:ht?"/CourseOracle":void 0,children:[Object(S.jsx)(W,{}),Object(S.jsxs)(j.c,{children:[Object(S.jsx)(j.a,{path:"/materials",component:$e}),Object(S.jsx)(j.a,{path:"/dashboard",component:Le}),Object(S.jsx)(j.a,{path:"/rating",component:dt}),Object(S.jsx)(j.a,{path:"/",component:ge})]})]})})]})})},pt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,301)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(bt,{})}),document.getElementById("root")),pt()}},[[183,1,2]]]);
//# sourceMappingURL=main.4ec58391.chunk.js.map