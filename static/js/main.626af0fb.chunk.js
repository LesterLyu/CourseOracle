(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{152:function(e,t,a){},174:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(47),i=a.n(c),o=(a(152),a(14)),s=a(8),l=a(30),j=a(20),d=(a(153),a(154),a(155),a(156),a(257)),u=a(122),h=a(273),b=0,x=1,p=JSON.parse(localStorage.getItem("userData")),O=Object(o.a)(Object(o.a)({username:"",email:"",type:b},p||{}),{},{login:function(){},logout:function(){}}),m=r.a.createContext(O),f=a(277),g=a(276),y=a(279),v=a(91),C=a(280),w=a(275),k=a(0);function S(e){var t=e.children,a=e.href,n=Object(j.f)();return Object(k.jsx)(w.a,{href:a,variant:"h6",color:"inherit",underline:"none",sx:{paddingRight:4,fontSize:17},onClick:function(e){e.preventDefault(),n.push(a)},children:t})}function W(){var e=Object(j.f)(),t=Object(n.useContext)(m),a=function(t){return function(){return e.push(t)}};return Object(k.jsx)(g.a,{sx:{flexGrow:1},children:Object(k.jsx)(f.a,{position:"static",sx:{bgcolor:"#242424"},children:Object(k.jsxs)(y.a,{children:[Object(k.jsx)("img",{src:"/CourseOracle/logo3.png",height:30,style:{paddingRight:8}}),Object(k.jsx)(v.a,{variant:"h6",component:"div",sx:{pr:6,cursor:"pointer"},onClick:a("/"),children:"Course Oracle"}),Object(k.jsxs)(g.a,{sx:{display:"flex",flexGrow:6},children:[Object(k.jsx)(S,{href:"/",children:"Search"}),Object(k.jsx)(S,{href:"/courses",children:"Courses"}),Object(k.jsx)(S,{href:"/schools",children:"Schools"})]}),Object(k.jsx)(C.a,{color:"inherit",onClick:a("/faq"),children:"FAQ"}),t.type===b?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(C.a,{color:"inherit",onClick:a("/register"),children:"Register"}),Object(k.jsx)(C.a,{color:"inherit",variant:"outlined",sx:{ml:1},onClick:a("/login"),children:"Login"})]}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(C.a,{color:"inherit",onClick:a("/dashboard"),children:"Dashboard"}),Object(k.jsx)(C.a,{color:"inherit",onClick:function(){return t.logout()},children:"log out"})]})]})})})}var T=a(38),P=a(3),I=a(4),B=a(175),N=a(24),R=a(281),E=a(278),F=a(240),M=a(282),L=a(283),_=a(263),z=a(118),D=a.n(z),U=a(270);function A(e){var t=e.children;return Object(k.jsx)(g.a,{sx:{height:"calc(100vh - 64px)",background:"linear-gradient(to bottom, #a285d4 0%,#6f90b3 100%)"},children:t})}function q(e){var t=e.children;return Object(k.jsx)(g.a,{sx:{height:"calc(100vh - 64px)",backgroundImage:'url("'.concat("/CourseOracle",'/homepage_bg-min.jpg")'),backgroundSize:"1920px 1280px"},children:t})}var Y=Object(I.a)("div")((function(e){var t=e.theme;return{position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(B.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(B.a)(t.palette.common.white,.25)},marginLeft:0,width:"100%"}})),G=Object(I.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),H=Object(I.a)(N.c)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":{padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),width:"100%"}}})),J=Object(I.a)(_.a)({color:"#ccc","&.Mui-checked":{color:"#ccc"}});var K=a(267),Q=a(247),X=a(284),V=Object(I.a)(C.a)((function(){return{backgroundColor:"#3b924a","&:hover":{backgroundColor:"#219d3a"},"&:active":{backgroundColor:"#3b924a"}}})),Z=Object(I.a)(X.a)((function(){return{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}));function $(e){var t=e.loading,a=e.children,n=(e.noDefaultStyle,Object(T.a)(e,["loading","children","noDefaultStyle"]));return Object(k.jsxs)(g.a,{sx:{position:"relative",display:"initial"},children:[Object(k.jsx)(V,Object(o.a)(Object(o.a)({variant:"contained",disabled:t},n),{},{children:a||"Submit"})),t&&Object(k.jsx)(Z,{size:24})]})}var ee=Object(I.a)(E.a)((function(e){var t=e.theme;return Object(P.a)({padding:40},t.breakpoints.down("sm"),{margin:0,padding:14,marginTop:10})})),te=Object(I.a)(w.a)((function(e){e.theme;return{fontSize:15,lineHeight:2,color:"#007dff",cursor:"pointer",fontWeight:500}}));function ae(){return Object(k.jsxs)(v.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(k.jsx)(w.a,{color:"inherit",href:"/",children:"CourseOracle"})," ",(new Date).getFullYear(),"."]})}var ne=Object(I.a)(E.a)((function(e){var t=e.theme;return Object(P.a)({padding:40},t.breakpoints.down("sm"),{margin:0,padding:14,marginTop:10})})),re=Object(I.a)(w.a)((function(e){e.theme;return{fontSize:15,lineHeight:2,color:"#007dff",cursor:"pointer",fontWeight:500}}));var ce=[{path:"/",exact:!0,Component:function(){var e=r.a.useState({checkedA:!0,checkedB:!0,checkedC:!0}),t=Object(s.a)(e,2),a=t[0],n=t[1],c=function(e){n(Object(o.a)(Object(o.a)({},a),{},Object(P.a)({},e.target.name,e.target.checked)))};return Object(k.jsx)(q,{children:Object(k.jsxs)(R.a,{justify:"center",children:[Object(k.jsx)(g.a,{sx:{display:"flex"},children:Object(k.jsx)(v.a,{variant:"h1",fontFamily:"sans-serif",fontSize:60,sx:{pt:5,color:"#eee",fontWeight:500,pb:5},children:"Course Oracle"})}),Object(k.jsx)(E.a,{sx:{height:"300px",pt:5,borderRadius:10,bgcolor:"rgb(36,36,36, 0.85)"},children:Object(k.jsxs)(U.a,{container:!0,spacing:4,sx:{marginTop:"40px"},justifyContent:"center",children:[Object(k.jsx)(U.a,{item:!0,xs:6,md:8,children:Object(k.jsxs)(U.a,{container:!0,direction:"column",alignItems:"stretch",children:[Object(k.jsx)(U.a,{item:!0,children:Object(k.jsx)(E.a,{children:Object(k.jsxs)(Y,{children:[Object(k.jsx)(G,{children:Object(k.jsx)(F.a,{})}),Object(k.jsx)(H,{placeholder:"Search for course\u2026"})]})})}),Object(k.jsx)(U.a,{item:!0,children:Object(k.jsx)(g.a,{sx:{pt:2},children:Object(k.jsxs)(M.a,{row:!0,children:[Object(k.jsx)(L.a,{sx:{color:"white"},control:Object(k.jsx)(J,{checked:a.checkedA,onChange:c,name:"checkedA",color:"primary"}),label:"Course Materials"}),Object(k.jsx)(L.a,{sx:{color:"white"},control:Object(k.jsx)(J,{checked:a.checkedB,onChange:c,name:"checkedB"}),label:"Course Past Exams"}),Object(k.jsx)(L.a,{sx:{color:"white"},control:Object(k.jsx)(J,{checked:a.checkedC,onChange:c,name:"checkedC",color:"primary"}),label:"Course Ratings"})]})})})]})}),Object(k.jsx)(U.a,{item:!0,xs:4,md:2,children:Object(k.jsx)(C.a,{sx:{mt:"-1px"},size:"large",variant:"contained",color:"primary",endIcon:Object(k.jsx)(D.a,{}),children:"Search"})})]})})]})})}},{path:"/login",exact:!0,Component:function(){var e=Object(j.f)(),t=Object(n.useContext)(m);t.type!==b&&e.push("/dashboard");var a=Object(n.useState)({username:"",password:"",alert:""}),r=Object(s.a)(a,2),c=r[0],i=r[1],l=Object(n.useState)(!1),d=Object(s.a)(l,2),u=d[0],h=d[1],p=function(e){return function(t){var a=t.target.value;i((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(P.a)({},e,a))}))}},O=function(){h(!0),setTimeout((function(){t.login({username:"LesterLyu",email:"lvds2000@gmail.com",type:x}),e.push("/dashboard")}),1e3)};return Object(k.jsx)(A,{children:Object(k.jsxs)(R.a,{maxWidth:"sm",children:[Object(k.jsx)(g.a,{sx:{paddingTop:"40px"}}),Object(k.jsxs)(ee,{elevation:5,onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),e.stopPropagation(),O())},children:[Object(k.jsx)(v.a,{variant:"h4",sx:{color:"rgb(0,32,81)",fontWeight:400,marginBottom:3},children:"Login"}),Object(k.jsx)(K.a,{label:"Email",value:c.username,fullWidth:!0,onChange:p("username"),sx:{minHeight:"80px"}}),Object(k.jsx)("br",{}),Object(k.jsx)(K.a,{label:"Password",type:"password",value:c.password,fullWidth:!0,onChange:p("password"),sx:{minHeight:"80px"},helperText:c.alert,error:!!c.alert}),Object(k.jsx)($,{sx:{marginTop:3,marginBottom:3},onClick:O,loading:u,children:"Log in"}),Object(k.jsx)(C.a,{color:"info",variant:"contained",sx:{marginLeft:2,marginTop:3,marginBottom:3},children:"Log in from Wallet"}),Object(k.jsx)(Q.a,{}),Object(k.jsx)(te,{variant:"body2",onClick:function(){return e.push("/register")},children:"Don't have an account? Sign up"}),Object(k.jsx)("br",{}),Object(k.jsx)(te,{variant:"body2",children:"Forgot password?"})]})]})})}},{path:"/register",exact:!0,Component:function(){var e=Object(j.f)(),t=Object(n.useState)({firstName:"",lastName:"",email:"",password:"",alert:""}),a=Object(s.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(!1),l=Object(s.a)(i,2),d=l[0],u=l[1],h=function(e){return function(t){var a=t.target.value;c((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(P.a)({},e,a))}))}},b=function(){u(!0),setTimeout((function(){e.push("/dashboard")}),1e3)};return Object(k.jsx)(A,{children:Object(k.jsxs)(R.a,{maxWidth:"sm",children:[Object(k.jsx)(g.a,{sx:{paddingTop:"40px"}}),Object(k.jsxs)(ne,{elevation:5,onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),e.stopPropagation(),b())},children:[Object(k.jsx)(v.a,{variant:"h4",sx:{color:"rgb(0,32,81)",fontWeight:400,marginBottom:3},children:"Sign up"}),Object(k.jsxs)(U.a,{container:!0,spacing:2,children:[Object(k.jsx)(U.a,{item:!0,xs:12,children:Object(k.jsx)(K.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",value:r.firstName,onChange:h("firstName"),autoFocus:!0})}),Object(k.jsx)(U.a,{item:!0,xs:12,children:Object(k.jsx)(K.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",value:r.lastName,onChange:h("lastName"),autoComplete:"lname"})}),Object(k.jsx)(U.a,{item:!0,xs:12,children:Object(k.jsx)(K.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",value:r.email,onChange:h("email"),autoComplete:"email"})}),Object(k.jsx)(U.a,{item:!0,xs:12,children:Object(k.jsx)(K.a,{variant:"outlined",required:!0,fullWidth:!0,id:"confirmEmail",label:"Confirm Email",name:"email",autoComplete:"confirmEmail"})}),Object(k.jsx)(U.a,{item:!0,xs:12,children:Object(k.jsx)(K.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:r.password,onChange:h("password"),helperText:r.alert,error:!!r.alert,autoComplete:"current-password"})}),Object(k.jsx)(U.a,{item:!0,xs:12,children:Object(k.jsx)(K.a,{variant:"outlined",required:!0,fullWidth:!0,name:"confirmPassword",label:"Confirm Password",type:"password",id:"confirmPassword",autoComplete:"confirmPassword"})}),Object(k.jsx)(U.a,{item:!0,xs:12,children:Object(k.jsx)(L.a,{control:Object(k.jsx)(_.a,{value:"allowExtraEmails",color:"primary"}),label:"I agree to the terms of use and privacy policy."})})]}),Object(k.jsx)($,{onClick:b,loading:d,children:"Sign Up"}),Object(k.jsx)(U.a,{container:!0,justifyContent:"flex-end",children:Object(k.jsx)(U.a,{item:!0,children:Object(k.jsx)(re,{variant:"body2",onClick:function(){return e.push("/login")},children:"Already have an account? Sign in"})})})]}),Object(k.jsx)(g.a,{mt:5,children:Object(k.jsx)(ae,{})})]})})}}];function ie(){return Object(k.jsx)(j.c,{children:ce.map((function(e,t){var a=e.path,n=e.Component,r=Object(T.a)(e,["path","Component"]);return Object(k.jsx)(j.a,Object(o.a)(Object(o.a)({path:a},r),{},{children:Object(k.jsx)(n,Object(o.a)({},r))}),t)}))})}function oe(){return Object(k.jsx)(v.a,{variant:"h1",fontSize:40,sx:{pt:5},children:"Profile Page Placeholder"})}var se=a(248),le=a(249),je=a(250),de=a(251),ue=a(252),he=a(253),be=a(254),xe=[{path:"/dashboard",exact:!0,Component:oe},{path:"/dashboard/profile",exact:!0,Component:oe},{path:"/dashboard/my-materials",exact:!0,Component:function(){return Object(k.jsx)(v.a,{variant:"h1",fontSize:40,sx:{pt:5},children:"MyMaterials.js"})}},{path:"/dashboard/my-reviews",exact:!0,Component:function(){return Object(k.jsx)(v.a,{variant:"h1",fontSize:40,sx:{pt:5},children:"MyReviews.js"})}},{path:"/dashboard/purchase",exact:!0,Component:function(){return Object(k.jsx)(v.a,{variant:"h1",fontSize:40,sx:{pt:5},children:"Purchase.js"})}},{path:"/dashboard/rate-course",exact:!0,Component:function(){return Object(k.jsx)(v.a,{variant:"h1",fontSize:40,sx:{pt:5},children:"RateCourse.js"})}},{path:"/dashboard/upload",exact:!0,Component:function(){return Object(k.jsx)(v.a,{variant:"h1",fontSize:40,sx:{pt:5},children:"UploadCourseMaterial.js"})}}],pe=[{label:"My Profile",Icon:se.a,path:"/dashboard/profile"},{label:"My Materials",Icon:le.a,path:"/dashboard/my-materials"},{label:"My Reviews",Icon:je.a,path:"/dashboard/my-reviews"},{label:"Purchase",Icon:de.a,path:"/dashboard/purchase"},{label:"Rate Course",Icon:ue.a,path:"/dashboard/rate-course"},{label:"Upload Materials",Icon:he.a,path:"/dashboard/upload"},{label:"Contact Us",Icon:be.a,path:"/dashboard/help"}],Oe=a(289),me=a(291),fe=a(255),ge=a(256);function ye(e){var t=e.config,a=Object(j.f)();return Object(k.jsx)(E.a,{variant:"outlined",sx:{marginTop:4,marginRight:2},children:Object(k.jsxs)(Oe.a,{dense:!0,children:[Object(k.jsx)(v.a,{sx:{fontWeight:500,paddingLeft:2,paddingBottom:1,pt:1},children:"Dashboard"}),t.map((function(e){var t=e.label,n=e.Icon,r=e.path;return Object(k.jsxs)(me.a,{onClick:function(){return a.push(r)},children:[Object(k.jsx)(fe.a,{children:Object(k.jsx)(n,{fontSize:"small"})}),Object(k.jsx)(ge.a,{children:t})]},t)}))]})})}function ve(){var e=Object(n.useContext)(m);return Object(k.jsxs)(R.a,{children:[Object(k.jsx)(g.a,{sx:{paddingTop:3}}),Object(k.jsxs)(v.a,{variant:"h1",fontSize:30,children:["Hello ",e.username," Icon here"]}),Object(k.jsxs)(g.a,{sx:{display:"flex"},children:[Object(k.jsx)(g.a,{sx:{flexGrow:1,maxWidth:"250px"},children:Object(k.jsx)(ye,{config:pe})}),Object(k.jsx)(E.a,{elevation:3,sx:{flexGrow:2,marginTop:4},children:Object(k.jsx)(j.c,{children:xe.map((function(e,t){var a=e.path,n=e.Component,r=Object(T.a)(e,["path","Component"]);return Object(k.jsx)(j.a,Object(o.a)(Object(o.a)({path:a},r),{},{children:Object(k.jsx)(n,Object(o.a)({},r))}),t)}))})})]})]})}var Ce=a(292),we=a(295),ke=a(294),Se=a(293),We=a(288),Te=a(290),Pe=a(266),Ie=a(55),Be=a.n(Ie);function Ne(e){var t=e.product,a=e.handleClose,n=e.materials,c=e.setMaterials,i=r.a.useState(0),o=Object(s.a)(i,2),l=o[0],j=o[1];return Object(k.jsxs)("div",{children:[Object(k.jsx)(U.a,{children:Object(k.jsx)("span",{children:"Rate this material!"})}),Object(k.jsxs)(U.a,{children:[Object(k.jsxs)(Be.a,{rating:l,widgetRatedColors:"orange",changeRating:function(e){return j(e)},children:[Object(k.jsx)(Be.a.Widget,{onClick:function(){return j(1)}}),Object(k.jsx)(Be.a.Widget,{}),Object(k.jsx)(Be.a.Widget,{}),Object(k.jsx)(Be.a.Widget,{}),Object(k.jsx)(Be.a.Widget,{})]}),Object(k.jsxs)("span",{children:[l," Stars"]})]}),Object(k.jsxs)(U.a,{children:[Object(k.jsx)(C.a,{variant:"outlined",color:"primary",onClick:a,children:"skip"}),Object(k.jsx)(C.a,{variant:"contained",color:"primary",onClick:function(){var e=[];n.forEach((function(a){t.id===a.id&&(a.status=2),e.push(a)})),c(e)},children:"Submit"})]})]})}function Re(e){var t=e.handleClose,a=Object(n.useState)(0),r=Object(s.a)(a,2),c=r[0],i=r[1];return Object(k.jsxs)("div",{children:[Object(k.jsx)(U.a,{children:"Reward Offerer"}),Object(k.jsx)(U.a,{children:Object(k.jsx)("input",{type:"number",placeholder:c,onChange:function(e){e.target.value<0?alert("You should type a positive number"):i(e.target.value)}})}),Object(k.jsxs)(U.a,{children:[Object(k.jsx)(C.a,{variant:"outlined",color:"primary",onClick:t,children:"Cancel"}),Object(k.jsx)(C.a,{variant:"contained",color:"primary",onClick:function(){console.log(c)},children:"Submit"})]})]})}var Ee=Object(I.a)(Pe.a)((function(){return{padding:20}}));function Fe(e){var t=e.product,a=e.handleClose,n=e.materials,c=e.setMaterials;return Object(k.jsxs)(r.a.Fragment,{children:[0===t.status&&Object(k.jsxs)(r.a.Fragment,{children:[Object(k.jsx)(v.a,{variant:"h6",gutterBottom:!0,children:"Order summary"}),Object(k.jsxs)(Te.a,{children:[Object(k.jsxs)(Ee,{children:[Object(k.jsx)(ge.a,{primary:t.school+" "+t.course+" "+t.year+" "+t.semester+" "+t.prof[0],secondary:t.type}),Object(k.jsx)(v.a,{variant:"body1",children:t.price})]},t.id),Object(k.jsxs)(Ee,{children:[Object(k.jsx)(ge.a,{primary:"Total"}),Object(k.jsx)(v.a,{variant:"subtitle1",style:{fontWeight:700},children:Object(k.jsx)("span",{children:t.price})})]}),Object(k.jsxs)(Ee,{children:[Object(k.jsx)(C.a,{variant:"outlined",color:"primary",onClick:a,children:"Close"}),Object(k.jsx)(v.a,{style:{fontWeight:700},children:Object(k.jsx)(C.a,{variant:"contained",color:"primary",onClick:function(e){var a=[];n.forEach((function(e){t.id===e.id&&(e.status=1),a.push(e)})),c(a)},children:"Buy"})})]})]})]}),1===t.status&&Object(k.jsx)(Ne,{product:t,handleClose:a,materials:n,setMaterials:c}),2===t.status&&Object(k.jsx)(Re,{product:t,handleClose:a,materials:n,setMaterials:c})]})}var Me=Object(I.a)(Ce.a)((function(){return{height:"100%",display:"flex",flexDirection:"column"}})),Le=[{id:1,price:5,school:"University of Toronto",course:"CSC148",cover_page:"https://source.unsplash.com/random",year:2018,semester:"fall",type:"Past Exam",prof:["David Liu"],offer_by:"student1",like:199,unlike:2,status:0},{id:2,price:5,school:"University of Toronto",course:"CSC148",cover_page:"https://source.unsplash.com/random",year:2019,semester:"fall",type:"Professor Course Note",prof:["xxxxxx","yyyyyyy"],offer_by:"student2",like:199,unlike:2,status:0},{id:3,price:5,school:"University of Toronto",course:"CSC148",cover_page:"https://source.unsplash.com/random",year:2019,semester:"fall",type:"Student Course Note",prof:["xxxxxx","yyyyyyy"],offer_by:"student3",like:199,unlike:2,status:0},{id:4,price:5,school:"University of Toronto",course:"CSC148",cover_page:"https://source.unsplash.com/random",year:2019,semester:"fall",type:"Past Exam",prof:["xxxxxx","yyyyyyy"],offer_by:"student4",like:199,unlike:2,status:2},{id:5,price:5,school:"University of Toronto",course:"CSC148",cover_page:"https://source.unsplash.com/random",year:2019,semester:"winter",type:"Final Exam",prof:["xxxxxx","yyyyyyy"],offer_by:"student5",like:199,unlike:2,status:1}];var _e=[{path:"/material/:course",exact:!0,Component:function(){var e=Object(n.useState)({name:window.location.href.split("/")[window.location.href.split("/").length-1],school:"University of Toronto",description:"CSC148 is an Introduction to Computer Science course. This course teaches you basic data structures (e.g. Stack, Queues, etc.) and powerful concepts like Object Oriented Programming and Recursion.",professors:["David Liu","xxxxxx","yyyyyyy"],difficulty:3}),t=Object(s.a)(e,2),a=t[0],c=(t[1],r.a.useState(null)),i=Object(s.a)(c,2),o=i[0],l=i[1],j=r.a.useState(null),u=Object(s.a)(j,2),h=u[0],b=u[1],x=function(e){b(e.target.value),l({top:e.clientY,left:e.clientX})},p=function(){l(null)},O=Object(n.useState)("contained"),m=Object(s.a)(O,2),f=m[0],g=m[1],y=Object(n.useState)("outlined"),w=Object(s.a)(y,2),S=w[0],W=w[1],T=Object(n.useState)("outlined"),P=Object(s.a)(T,2),I=P[0],B=P[1],N=Object(n.useState)("outlined"),E=Object(s.a)(N,2),F=E[0],M=E[1],L=Object(n.useState)("outlined"),_=Object(s.a)(L,2),z=_[0],D=_[1],A=Object(n.useState)(Le),q=Object(s.a)(A,2),Y=q[0],G=q[1];return Object(k.jsxs)(r.a.Fragment,{children:[Object(k.jsx)(d.a,{}),Object(k.jsxs)("main",{children:[Object(k.jsx)("div",{style:{padding:"10px"},children:Object(k.jsxs)(R.a,{maxWidth:"sm",children:[Object(k.jsx)(v.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:a.name}),Object(k.jsxs)(v.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:["school: ",a.school]}),Object(k.jsxs)(v.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:["professors: ",a.professors.map((function(e){return Object(k.jsx)("a",{href:"prof/"+e,children:e+" "},e)}))]}),Object(k.jsxs)(v.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:["difficulty: ",a.difficulty," (\u8fd9\u4e00\u884c\u53ef\u4ee5\u8981\u4e5f\u53ef\u4ee5\u4e0d\u8981\u3002\u3002)"]}),Object(k.jsx)(v.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:a.description}),Object(k.jsx)("div",{style:{marginTop:"5px"},children:Object(k.jsxs)(U.a,{container:!0,spacing:2,justifyContent:"center",children:[Object(k.jsx)(U.a,{item:!0,children:Object(k.jsx)(C.a,{variant:f,color:"primary",onClick:function(){g("contained"),W("outlined"),B("outlined"),M("outlined"),D("outlined"),G(Le)},children:"All"})}),Object(k.jsx)(U.a,{item:!0,children:Object(k.jsx)(C.a,{variant:S,color:"primary",onClick:function(){g("outlined"),W("contained"),B("outlined"),M("outlined"),D("outlined"),G(Le.filter((function(e){return"Student Course Note"===e.type})))},children:"Student Course Note"})}),Object(k.jsx)(U.a,{item:!0,children:Object(k.jsx)(C.a,{variant:I,color:"primary",onClick:function(){g("outlined"),W("outlined"),B("contained"),M("outlined"),D("outlined"),G(Le.filter((function(e){return"Professor Course Note"===e.type})))},children:"Professor Course Note"})}),Object(k.jsx)(U.a,{item:!0,children:Object(k.jsx)(C.a,{variant:F,color:"primary",onClick:function(e){g("outlined"),W("outlined"),B("outlined"),M("contained"),D("outlined"),G(Le.filter((function(e){return"Past Exam"===e.type})))},children:"Past Exam"})}),Object(k.jsx)(U.a,{item:!0,children:Object(k.jsx)(C.a,{variant:z,color:"primary",onClick:function(e){g("outlined"),W("outlined"),B("outlined"),M("outlined"),D("contained"),G(Le.filter((function(e){return"Final Exam"===e.type})))},children:"Final Exam"})})]})})]})}),Object(k.jsx)(R.a,{style:{paddingTop:"5px",paddingBottom:"5px"},maxWidth:"md",children:Object(k.jsx)(U.a,{container:!0,spacing:4,children:Y.map((function(e){return Object(k.jsx)(U.a,{item:!0,xs:12,sm:6,md:4,children:Object(k.jsxs)(Me,{children:[Object(k.jsx)(Se.a,{style:{paddingTop:"56.25%"},image:e.cover_page,title:"Image title"}),Object(k.jsxs)(ke.a,{style:{flexGrow:1},children:[Object(k.jsxs)(v.a,{gutterBottom:!0,variant:"h5",component:"h2",children:["semester: ",e.year," ",e.semester]}),Object(k.jsxs)(v.a,{children:["id: ",e.id]}),Object(k.jsxs)(v.a,{children:["price: ",e.price]}),Object(k.jsxs)(v.a,{children:["type: ",e.type]}),Object(k.jsxs)(v.a,{children:["offer_by: ",e.offer_by]}),Object(k.jsxs)(v.a,{children:["prof: ",e.prof.map((function(e){return Object(k.jsx)("a",{href:"profs/"+e,children:e+" "},e)}))]}),Object(k.jsxs)(v.a,{children:["like: ",e.like]}),Object(k.jsxs)(v.a,{children:["unlike: ",e.unlike]})]}),Object(k.jsxs)(we.a,{children:[0===e.status&&Object(k.jsx)(C.a,{value:e.id,variant:"contained",color:"primary",onClick:x,children:"Buy"}),1===e.status&&Object(k.jsx)(C.a,{value:e.id,variant:"outlined",color:"primary",onClick:x,children:"Rate"}),2===e.status&&Object(k.jsx)(C.a,{value:e.id,variant:"outlined",color:"secondary",onClick:x,children:"Reward"}),Object(k.jsxs)(We.a,{open:(t=e.id,t===parseInt(h)&&Boolean(o)),anchorReference:"anchorPosition",anchorPosition:o,onClose:p,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:[0===e.status&&Object(k.jsx)(Fe,{product:e,handleClose:p,materials:Y,setMaterials:G}),1===e.status&&Object(k.jsx)(Ne,{product:e,handleClose:p,materials:Y,setMaterials:G}),2===e.status&&Object(k.jsx)(Re,{product:e,handleClose:p})]})]})]})},e.id);var t}))})})]})]})}},{path:"/material/checkout",exact:!0,Component:Fe},{path:"/material/rate",exact:!0,Component:Ne}];function ze(){return Object(k.jsx)(j.c,{children:_e.map((function(e,t){var a=e.path,n=e.Component,r=Object(T.a)(e,["path","Component"]);return Object(k.jsx)(j.a,Object(o.a)(Object(o.a)({path:a},r),{},{render:function(){return Object(k.jsx)(n,Object(o.a)({},r))}}),t)}))})}var De=a(287),Ue=a(268),Ae=a(264),qe=a(285),Ye=a(262),Ge=a(260),He=a(258),Je=a(259),Ke=[{id:1,username:"Theo",user_image:"https://source.unsplash.com/random",course:"csc343",school:"University of Toronto",year:2018,semester:"Fall",prof:"Daniela",like:10,unlike:3,score:4,comment:"Be ready to read a lot. Those materials are really helpful"},{id:2,username:"Emily",user_image:"https://source.unsplash.com/random",course:"csc343",school:"University of Toronto",year:2019,semester:"Winter",prof:"Michelle",like:110,unlike:3,score:5,comment:"Cannot ask more, everything is perfect"},{id:3,username:"Lester",user_image:"https://source.unsplash.com/random",course:"csc343",school:"University of Toronto",year:2017,semester:"Summer",prof:"Michelle",like:50,unlike:2,score:3,comment:"Hard to pass the exams"}],Qe=["Fall","Summer","Winter"];var Xe=[{path:"/rating/:course",exact:!0,Component:function(){var e=window.location.href.split("/")[window.location.href.split("/").length-1],t=Object(n.useState)(Qe),a=Object(s.a)(t,2),c=a[0],i=a[1],l=Array.from(new Set(Ke.map((function(e){return e.prof})))),j=Object(n.useState)(l),d=Object(s.a)(j,2),u=d[0],h=d[1],b=Object(n.useState)(""),x=Object(s.a)(b,2),p=x[0],O=x[1],m=Object(n.useState)(0),f=Object(s.a)(m,2),y=f[0],C=f[1],w=Object(n.useState)(""),S=Object(s.a)(w,2),W=S[0],T=S[1],P=Object(n.useState)(""),I=Object(s.a)(P,2),B=I[0],N=(I[1],Object(n.useState)(2021)),R=Object(s.a)(N,2),E=R[0],F=R[1],M=Object(n.useState)(Qe[0]),L=Object(s.a)(M,2),_=L[0],z=L[1];return Object(k.jsxs)(r.a.Fragment,{children:[Object(k.jsx)(g.a,{className:"Title",children:Object(k.jsx)(v.a,{variant:"h1",children:e})}),Object(k.jsxs)(g.a,{pl:3,children:[Object(k.jsxs)(De.a,{width:"100px",style:{margin:5},children:[Object(k.jsx)(Ue.a,{id:"semester-selection-label",children:"Semester"}),Object(k.jsx)(Ae.a,{labelId:"semester-selection-label",id:"semester-selection",multiple:!0,value:c,onChange:function(e){i(e.target.value)},input:Object(k.jsx)(qe.a,{}),style:{minWidth:120},children:Qe.map((function(e){return Object(k.jsx)(me.a,{value:e,children:e},e)}))})]}),Object(k.jsxs)(De.a,{width:"100px",style:{margin:5},children:[Object(k.jsx)(Ue.a,{id:"prof-selection-label",children:"Prof"}),Object(k.jsx)(Ae.a,{labelId:"prof-selection-label",id:"prof-selection",multiple:!0,value:u,onChange:function(e){h(e.target.value)},input:Object(k.jsx)(qe.a,{}),style:{minWidth:120},children:l.map((function(e){return Object(k.jsx)(me.a,{value:e,children:e},e)}))})]})]}),Object(k.jsx)(g.a,{width:"90%",children:Ke.map((function(e){return function(e,t){return e.includes(t)}(c,e.semester)&&function(e,t){return e.includes(t)}(u,e.prof)&&Object(k.jsxs)(g.a,{border:1,width:1,m:3,display:"flex",children:[Object(k.jsxs)(g.a,{style:{width:"20%"},borderRight:1,children:[Object(k.jsxs)(g.a,{borderBottom:1,display:"flex",children:[Object(k.jsx)(v.a,{fontWeight:"fontWeightBold",pr:1,children:"User:"}),Object(k.jsx)(v.a,{children:e.username})]}),Object(k.jsx)(Se.a,{style:{height:0,paddingTop:"56.25%",marginTop:"30"},image:e.user_image,title:"user image"})]}),Object(k.jsxs)(g.a,{style:{width:"80%"},children:[Object(k.jsxs)(g.a,{borderBottom:1,display:"flex",justifyContent:"flex-start",children:[Object(k.jsx)(v.a,{fontWeight:"fontWeightBold",pl:1,pr:1,children:"Prof:"}),Object(k.jsx)(v.a,{children:e.prof}),Object(k.jsx)(v.a,{fontWeight:"fontWeightBold",pl:1,pr:1,children:"Score:"}),Object(k.jsxs)(v.a,{children:[e.score,"/5"]}),Object(k.jsx)(v.a,{fontWeight:"fontWeightBold",pl:1,pr:1,children:"Year:"}),Object(k.jsx)(v.a,{children:e.year}),Object(k.jsx)(v.a,{fontWeight:"fontWeightBold",pl:1,pr:1,children:"Semester:"}),Object(k.jsx)(v.a,{children:e.semester})]}),Object(k.jsxs)(g.a,{pl:1,display:"flex",justifyContent:"flex-start",children:[Object(k.jsxs)(g.a,{style:{width:"80%"},children:[Object(k.jsx)(v.a,{fontWeight:"fontWeightBold",children:"Comment:"}),Object(k.jsx)(v.a,{style:{display:"inline-block"},children:e.comment})]}),Object(k.jsxs)(g.a,{style:{width:"30%"},display:"flex",flexGrow:1,borderLeft:1,children:[Object(k.jsxs)(g.a,{children:[Object(k.jsx)(Se.a,{style:{height:"100px",width:"100px"},image:"https://www.kindpng.com/picc/m/136-1366147_thumb-up-icon-color-thumbs-up-png-transparent.png",title:"Like"}),Object(k.jsx)(v.a,{align:"center",children:e.like})]}),Object(k.jsxs)(g.a,{pl:5,children:[Object(k.jsx)(Se.a,{style:{height:"100px",width:"100px"},image:"https://www.pngitem.com/pimgs/m/366-3667940_thumbs-down-icon-png-transparent-png.png",title:"Unlike"}),Object(k.jsx)(v.a,{align:"center",children:e.unlike})]})]})]})]})]},e.id)}))}),Object(k.jsxs)(g.a,{width:"90%",p:3,m:3,border:1,children:[Object(k.jsx)(v.a,{variant:"h6",children:"Add a New Rating"}),Object(k.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={newScore:y,newYear:E,newCourse:B,newProf:p,newSemester:_,newComment:W};console.log(t)},children:[Object(k.jsx)("label",{children:"Score"}),Object(k.jsx)("input",{type:"number",min:"0",max:"5",required:!0,value:y,onChange:function(e){return C(e.target.value)}}),Object(k.jsx)("label",{children:"Year"}),Object(k.jsx)(He.b,{dateAdapter:Je.a,children:Object(k.jsx)(Ge.a,{views:["year"],label:"Year",value:E,onChange:function(e){F(e)},renderInput:function(e){return Object(k.jsx)(K.a,Object(o.a)({},e))}})}),Object(k.jsx)(g.a,{style:{width:"20%"},children:Object(k.jsx)(Ye.a,{freeSolo:!0,options:l,disableClearable:!0,onInputChange:function(e,t){O(t)},renderInput:function(e){return Object(k.jsx)(K.a,Object(o.a)(Object(o.a)({},e),{},{label:"Prof",margin:"normal",variant:"outlined"}))}})}),Object(k.jsx)(g.a,{style:{width:"20%"},children:Object(k.jsx)(Ye.a,{renderInput:function(e){return Object(k.jsx)(K.a,Object(o.a)(Object(o.a)({},e),{},{label:"Semester",variant:"outlined"}))},options:Qe,onInputChange:function(e,t){z(t)}})}),Object(k.jsx)("label",{children:"Comment"}),Object(k.jsx)("textarea",{required:!0,value:W,rows:"4",cols:"50",onChange:function(e){return T(e.target.value)}}),Object(k.jsx)("button",{children:"Add Rating"})]})]})]})}}];function Ve(){return Object(k.jsx)(j.c,{children:Xe.map((function(e,t){var a=e.path,n=e.Component,r=Object(T.a)(e,["path","Component"]);return Object(k.jsx)(j.a,Object(o.a)(Object(o.a)({path:a},r),{},{render:function(){return Object(k.jsx)(n,Object(o.a)({},r))}}),t)}))})}var Ze=Object(u.a)({}),$e="lesterlyu.github.io"===window.location.hostname.toLowerCase();var et=function(){var e=Object(n.useState)(Object(o.a)(Object(o.a)({},O),{},{login:function(e){localStorage.setItem("userData",JSON.stringify(e)),r((function(t){return Object(o.a)(Object(o.a)({},t),e)}))},logout:function(){r((function(e){return Object(o.a)(Object(o.a)({},e),{},{username:"",email:"",type:b})}))}})),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(k.jsx)("div",{className:"App",children:Object(k.jsxs)(h.a,{theme:Ze,children:[Object(k.jsx)(d.a,{}),Object(k.jsx)(m.Provider,{value:a,children:Object(k.jsxs)(l.a,{basename:$e?"/CourseOracle":void 0,children:[Object(k.jsx)(W,{}),Object(k.jsxs)(j.c,{children:[Object(k.jsx)(j.a,{path:"/material",component:ze}),Object(k.jsx)(j.a,{path:"/dashboard",component:ve}),Object(k.jsx)(j.a,{path:"/rating",component:Ve}),Object(k.jsx)(j.a,{path:"/",component:ie})]})]})})]})})},tt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,297)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};i.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(et,{})}),document.getElementById("root")),tt()}},[[174,1,2]]]);
//# sourceMappingURL=main.626af0fb.chunk.js.map