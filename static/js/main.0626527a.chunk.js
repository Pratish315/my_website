(this.webpackJsonpmy_website=this.webpackJsonpmy_website||[]).push([[0],{102:function(e,t,a){e.exports={button_style:"Button_button_style__hPjpY",hamburger:"Button_hamburger__-7BoU"}},103:function(e,t,a){e.exports={list:"Menu_list__1ltAI",active:"Menu_active__2On_O"}},106:function(e,t,a){e.exports={title:"Title_title__ZgkTm",myname:"Title_myname__zg50r"}},147:function(e,t,a){e.exports={profile:"ProfilePicture_profile__3egoG",beat:"ProfilePicture_beat__1FYLF"}},150:function(e,t,a){e.exports={particles:"Particles_particles__3GVO3"}},152:function(e,t,a){e.exports={about_header:"Header_about_header__iqjZX"}},154:function(e,t,a){e.exports={services_header:"Header_services_header__38dc-"}},156:function(e,t,a){e.exports={contact_header:"Header_contact_header__wLreI"}},157:function(e,t,a){e.exports={style:"Description_style__Xpjqh"}},163:function(e,t,a){},411:function(e,t,a){},416:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a.n(n),s=a(53),c=a.n(s),r=(a(163),a(9)),o=a(11),l=a(12),d=a(13),b=a(61),j=a(19),u=a(26),h=a(102),m=a.n(h),p=a(22),_=a(33),O=a(1),x=function(e){var t=e.isSideBarOpened?_.g:_.a;return Object(O.jsx)("button",{onClick:e.clicked,className:m.a.hamburger,style:{background:"linear-gradient(to right, "+e.color+", "+e.color2+")"},children:Object(O.jsx)(p.a,{icon:t,size:"1x",color:"black",className:m.a.button_style})})},f=a(147),g=a.n(f),v=a.p+"static/media/profilePic.6c1991f8.PNG",y=function(){return Object(O.jsx)("div",{className:g.a.profile,children:Object(O.jsx)("img",{alt:"profile_pic",src:v})})},S=a(103),E=a.n(S),w=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={menu:[{id:1,name:"Home",path:"/"},{id:2,name:"About",path:"/about"},{id:3,name:"Resume",path:"/resume"},{id:4,name:"Projects",path:"/projects"},{id:5,name:"Contact",path:"/contact"}]},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(O.jsx)("ul",{className:E.a.list,children:this.state.menu.map((function(t){return Object(O.jsx)("li",{children:Object(O.jsx)(b.b,{onClick:e.props.clicked,exact:!0,to:t.path,activeClassName:E.a.active,children:t.name})},t.id)}))})}}]),a}(n.Component),N=a(84),C=a.n(N),k=a(64),T=a.n(k),A=function(e){return Object(O.jsxs)("div",{className:T.a.bg,children:[Object(O.jsx)("p",{className:T.a.backgroundGenText,children:"CHOOSE YOUR 2 FAVOURITE COLOURS BELOW!"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{className:T.a.input_colour,type:"color",value:e.color,onChange:function(t){return e.setColor(t.target.value)}}),Object(O.jsx)("input",{className:T.a.input_colour,type:"color",value:e.color2,onChange:function(t){return e.setColor2(t.target.value)}})]})]})},I=function(e){var t=e.isSideBarOpened?C.a.Opensidebar:C.a.Closesidebar,a=i.a.useState("#C5C1C1"),n=Object(u.a)(a,2),s=n[0],c=n[1],r=i.a.useState("#111111"),o=Object(u.a)(r,2),l=o[0],d=o[1];return Object(O.jsxs)("nav",{className:C.a.sidebar+" "+t,style:{background:"linear-gradient(to right, "+s+", "+l+")"},children:[Object(O.jsx)(x,{isSideBarOpened:e.isSideBarOpened,clicked:e.clicked,color:s,color2:l}),Object(O.jsx)(y,{}),Object(O.jsx)(w,{clicked:e.clicked}),Object(O.jsx)(A,{color:s,color2:l,setColor:c,setColor2:d})]})},D=function(e){return e.children},P=a(149),R=a.n(P),B=a(150),H=a.n(B),L={particles:{number:{value:150,density:{enable:!1}},color:{value:"#ffffff"},size:{value:6,random:!0,anim:{speed:5,size_min:.3}},line_linked:{enable:!1},move:{enable:!0,random:!0,speed:2,direction:"bottom",out_mode:"out"}},interactivity:{events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"push"}},modes:{bubble:{distance:25,duration:2,size:15,opacity:10}}}},F=function(){return Object(O.jsx)(R.a,{params:L,className:H.a.particles})},W=a(49),K=a(65),U=a.n(K),G=function(){return Object(O.jsxs)(D,{children:[Object(O.jsx)("a",{href:"https://www.facebook.com/pratish.dullabh/",rel:"noopener noreferrer",target:"_blank",children:Object(O.jsx)(p.a,{icon:W.b,size:"3x",color:"white",className:U.a.sm_icons})}),Object(O.jsx)("a",{href:"https://github.com/pratish315/",rel:"noopener noreferrer",target:"_blank",children:Object(O.jsx)(p.a,{icon:W.c,size:"3x",color:"white",className:U.a.sm_icons})}),Object(O.jsx)("a",{href:"https://www.instagram.com/_pratish_d/",rel:"noopener noreferrer",target:"_blank",children:Object(O.jsx)(p.a,{icon:W.d,size:"3x",color:"white",className:U.a.sm_icons})}),Object(O.jsx)("a",{href:"https://www.linkedin.com/in/pratish-dullabh-200a64188/",rel:"noopener noreferrer",target:"_blank",children:Object(O.jsx)(p.a,{icon:W.e,size:"3x",color:"white",className:U.a.sm_icons})})]})},M=a(66),V=a.n(M),z=a(85),Y=a.n(z),J=function(){return Object(O.jsxs)("div",{className:Y.a.hire_call,children:[Object(O.jsx)("a",{href:"mailto:pdullabh315@gmail.com",target:"_blank",rel:"noopener noreferrer",children:Object(O.jsx)("button",{className:"btn btn-primary "+Y.a.hire_call,children:Object(O.jsx)("strong",{children:"Hire Me"})})}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("a",{href:"tel:+27-71-683-3908",target:"_blank",rel:"noopener noreferrer",children:Object(O.jsxs)("button",{className:"btn btn-primary "+Y.a.hire_call,children:[" ",Object(O.jsx)("strong",{children:"Call Me"})," "]})})]})},q=a(151),X=a.n(q),Q=a(106),Z=a.n(Q),$=function(){return Object(O.jsxs)("div",{className:Z.a.title,children:[Object(O.jsxs)("h1",{children:["Hi, I am ",Object(O.jsx)("br",{}),Object(O.jsx)("span",{className:Z.a.myname,children:Object(O.jsx)("b",{children:"Pratish Dullabh"})})]}),Object(O.jsx)(X.a,{style:{color:"rgb(233, 27, 199)",fontSize:"30px"},strings:["Data Scientist","Web Developer","Software Engineer","Data Engineer","Dev-Ops Engineer"],typeSpeed:40,backSpeed:50,className:"typedcursor",loop:!0})]})},ee=function(){return Object(O.jsxs)(D,{children:[Object(O.jsx)(F,{}),Object(O.jsx)("div",{className:V.a.container,children:Object(O.jsx)("div",{className:V.a.box,children:Object(O.jsxs)("div",{className:V.a.content,children:[Object(O.jsx)($,{}),Object(O.jsx)("div",{className:V.a.social_media_icons,children:Object(O.jsx)(G,{})}),Object(O.jsx)(J,{})]})})})]})},te=a.p+"static/media/me.b204c1f2.JPG",ae=a(86),ne=a.n(ae),ie=a(152),se=a.n(ie),ce=function(){return Object(O.jsxs)("div",{className:se.a.about_header,children:[Object(O.jsx)("h2",{children:"About"}),Object(O.jsx)("span",{children:"About Me"})]})},re=a(153),oe=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(ce,{}),Object(O.jsxs)("div",{className:ne.a.about_details,children:[Object(O.jsx)("div",{className:ne.a.about_details_myimage,children:Object(O.jsx)("a",{href:te,children:Object(O.jsx)(re.a,{children:Object(O.jsx)("img",{src:te,alt:"Pratish Dullabh"})})})}),Object(O.jsxs)("div",{className:ne.a.about_details_mydetails,children:[Object(O.jsx)("h2",{children:"Description:"}),Object(O.jsxs)("p",{children:["Since a young boy I was fascinated with computers and how they work. Computers is what I do, and I do what I love, every single day! I am continuously driven to solve problems, whilst simultaneously expanding my knowledge. For me, it is a privilege to be given the opportunity to do this within my employer's environment.",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"I am currently working as a Data Scientist at ShopriteX, with over 2 years of experience in Big Data, Data Science, Software Engineering, Data Engineering and Dev-Ops.",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"My passion is full-stack software development and I am enthusiastic about machine learning, artificial intelligence and autonomous operations. I am always curious to learn from others and develop strong relationships with co-workers. I am a flexible team player that prospers in a fast-paced environment. I thoroughly enjoy spending time with family and friends. Other hobbies of mine include going to the gym, enjoying gourmet foods, playing soccer/cricket, gaming, travelling and finally \u2026 coding!"]})]})]})]})},le=a(154),de=a.n(le),be=function(){return Object(O.jsxs)("div",{className:de.a.services_header,children:[Object(O.jsx)("h2",{children:"Services"}),Object(O.jsx)("span",{children:"Services"})]})},je=function(){return Object(O.jsxs)(D,{children:[Object(O.jsx)("span",{children:Object(O.jsx)(p.a,{icon:_.b,size:"2x",color:"white",className:"sm-icons"})}),Object(O.jsx)("h5",{children:"Data Scientist"}),Object(O.jsxs)("p",{children:["Working as a Data Scientist has equipped me with the necessary skills to manage Big Data more easily and effectively. My daily job entails solving business-problems using a combination of Statistics, Computer Science and Business knowledge to develop and deploy machine-learning/analytical models that are accurate and scalable.",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"I have experience with data pipelines, ETL processes, ML/Cloud Operations & DevOps - having my own models put into production using AWS EMR/EC2, Apache Hadoop, Apache Spark, BitBucket, and quite a few other tools. Adopting Software Engineering Best Practices and an Agile-mindset throughout my job is very important."]})]})},ue=function(){return Object(O.jsxs)(D,{children:[Object(O.jsx)("span",{children:Object(O.jsx)(p.a,{icon:W.a,size:"2x",color:"white",className:"sm-icons"})}),Object(O.jsx)("h5",{children:"Full-Stack Developer"}),Object(O.jsxs)("p",{children:["I have experience in both Front End and Back End development of WebApps. However, I am stronger in Back End development and I tend to enjoy it more. On the front-end, I have worked with and am most experienced with React. To create servers, I have mostly used ExpressJS. With regards to databases, I have worked with both Relational and Non-Relational (NoSQL) databases.",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"I am familiar with Docker/Kubernetes and have used it to create a containerized React app which was scalable and deployed to Google Kubernetes Engine (GKE). Designing and developing working APIs, building client/server-side architecture, fixing bugs and testing software is also part of my skillset."]})]})},he=function(){return Object(O.jsxs)(D,{children:[Object(O.jsx)("span",{children:Object(O.jsx)(p.a,{icon:_.c,size:"2x",color:"white",className:"sm-icons"})}),Object(O.jsx)("h5",{children:"Software Engineer"}),Object(O.jsxs)("p",{children:["Studying Computer Science has provided me with a great amount of insight on the roles that data structures, algorithms, and time complexities serve in problem-solving and software development. I also have past work-experience in the fields of CE, CI, and CD. Having Java/Python as my preferred languages, I have the ability and resilience to troubleshoot and debug software issues from large codebases in these languages.",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Working closely with clients, planning & analyzing their requirements, creating clear but technical documentation, and developing easy-to-read code with comments is what I am good at. I have the capacity to work closely with other individuals/teams, research, create, test, deploy and maintain software programs."]})]})},me=a(43),pe=a.n(me),_e=function(){return Object(O.jsxs)("div",{className:pe.a.services,children:[Object(O.jsx)("div",{className:pe.a.services_box,children:Object(O.jsx)("div",{className:pe.a.services_content,children:Object(O.jsx)(je,{})})}),Object(O.jsx)("div",{className:pe.a.services_box,children:Object(O.jsx)("div",{className:pe.a.services_content,children:Object(O.jsx)(ue,{})})}),Object(O.jsx)("div",{className:pe.a.services_box,children:Object(O.jsx)("div",{className:pe.a.services_content,children:Object(O.jsx)(he,{})})})]})},Oe=(a(411),function(){return Object(O.jsx)(D,{children:Object(O.jsxs)("div",{className:"services-services",children:[Object(O.jsx)(be,{}),Object(O.jsx)(_e,{})]})})}),xe=a(34),fe=a(87),ge=a.n(fe),ve=function(){return Object(O.jsx)(xe.Spring,{from:{opacity:0},to:{opacity:1},config:{delay:100,duration:900},children:function(e){return Object(O.jsx)(xe.animated.div,{style:e,className:ge.a.about_full_container,children:Object(O.jsx)("div",{className:ge.a.about_container,children:Object(O.jsxs)("div",{className:ge.a.about_content,children:[Object(O.jsx)(oe,{}),Object(O.jsx)(Oe,{})]})})})}})},ye=function(){return Object(O.jsxs)(D,{children:[Object(O.jsx)(p.a,{icon:_.d,size:"2x",color:"white"}),Object(O.jsx)("h5",{children:"Education"}),Object(O.jsx)("h6",{children:"University of Cape Town (Cape Town, South Africa):"}),Object(O.jsx)("h6",{children:"January 2019 \u2013 April 2020"}),Object(O.jsx)("p",{children:"Honours in B.Sc. Computer Science, GPA: 77"}),Object(O.jsx)("h6",{children:"February 2016 - November 2018"}),Object(O.jsx)("p",{children:"B.Sc. Computer Science and Business Computing"}),Object(O.jsx)("h6",{style:{paddingBottom:"7%"},children:"Fairbairn College (Cape Town, South Africa, February 2011 \u2013 November 2015)"}),Object(O.jsx)(p.a,{icon:_.e,size:"2x",color:"white"}),Object(O.jsx)("h5",{children:"Acedemic Projects"}),Object(O.jsx)("h6",{children:"AutoStar: SEMI-AUTOMATED DATA WAREHOUSE CONSTRUCTION"}),Object(O.jsx)("p",{children:"This was my Honours project; I worked in a team of 2 and I was responsible for semi-automatically generating a star-schema from flat relational and NoSQL databases."}),Object(O.jsx)("p",{children:"Java was the core language used for this project. I used it to semi-automatically develop the star-schema from both SQL and MongoDB databases. I also defined the ETL process and scripted the entire data pipeline from the source databases to the warehouse containing the generated star-schema."}),Object(O.jsx)("h6",{children:"Bid4Cows: an auctioning web application"}),Object(O.jsx)("p",{children:"This was my Capstone project; our team built a dynamic web application that allows users to buy and sell their cattle in an auction-based environment. "}),Object(O.jsx)("p",{children:"I worked in a team of 3, I was responsible for the backend and the tools I used were Java, JavaServer Pages, JDBC and SQL."}),Object(O.jsx)("h6",{children:"Survival: a 2D 1-Player game / Tetris"}),Object(O.jsx)("p",{children:"I created my own top-down shooter game and Tetris from scratch using Java and LibGDX."}),Object(O.jsx)("p",{children:"For the top-down shooter game I added in basic AI using A* pathfinding. "})]})},Se=function(){return Object(O.jsxs)(D,{children:[Object(O.jsx)(p.a,{icon:_.f,size:"2x",color:"white"}),Object(O.jsx)("h5",{children:"Work Experience"}),Object(O.jsx)("h6",{children:"Data Scientist, Shoprite Holdings (Cape Town, SA: Jan. 01, 2021 \u2013 Present)"}),Object(O.jsx)("h7",{children:"Data Science - model development to drive customer personalisation: "}),Object(O.jsx)("p",{children:"Developed multiple collaborative-filtering model that would form part of the company\u2019s recommendation engine. I showcased this to business and currently it serves as the primary input for personalised deals sent to customers."}),Object(O.jsx)("p",{children:"Another data science related project of mine consisted of creating definitions for whether customers have churned from categories. The predictive aspect of this project involved developing a classification model to accurately predict the likelihood of a customer churning within a variable time frame. After exhibiting the results and achieving an average yearly accuracy of +-85%, clients were pleased, and the model was consumed for gamification/rewards initiatives and offer-generation use cases."}),Object(O.jsx)("h7",{children:"Data Engineering - data mart development for analytics: "}),Object(O.jsx)("p",{children:"Converted raw data into correctly grained data marts that housed a substantial amount of valuable customer insights and readily available features for ML models"}),Object(O.jsx)("h7",{children:"Dev-Ops - ETL and CI/CD pipeline creation for product automation: "}),Object(O.jsx)("p",{children:"Through automating jobs and pushing them into production, 40 hours of manual work was eliminated and reliability for service delivery was increased."}),Object(O.jsx)("h7",{children:"Software Engineering - design and develop scalable integration applications:"}),Object(O.jsx)("p",{children:"Integrated billions of records of data into the company\u2019s ERP system. To achieve a scalable solution, I used spark and called an API concurrently through a pandasUDF function for batches of customers."}),Object(O.jsx)("h6",{children:"Data Science Intern, Shoprite Holdings (Cape Town, SA: Feb. 03, 2020 \u2013 Dec. 31, 2020)"}),Object(O.jsx)("p",{children:"During my internship year I participated in a Machine Learning competition amongst other data scientists to predict the demand of products at various branches, where I placed 1st."}),Object(O.jsx)("p",{children:"I was involved in acquiring audiences for targeted deals through data science, which yielded over 1 billion Rand in incremental sales within a year"})]})},Ee=a(57),we=a.n(Ee),Ne=function(){return Object(O.jsxs)("div",{className:we.a.education_expertise,children:[Object(O.jsx)("div",{className:we.a.box,children:Object(O.jsx)("div",{className:we.a.content,children:Object(O.jsx)(ye,{})})}),Object(O.jsx)("div",{className:we.a.box,children:Object(O.jsx)("div",{className:we.a.content,children:Object(O.jsx)(Se,{})})})]})},Ce=a(155),ke=(a(412),a(51)),Te=a.n(ke),Ae=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={skills:[{id:1,name:"JAVA",percentage:85},{id:2,name:"PYTHON",percentage:80},{id:3,name:"SQL",percentage:83},{id:4,name:"HTML",percentage:80},{id:5,name:"CSS",percentage:75},{id:6,name:"REACT",percentage:77},{id:7,name:"JAVASCRIPT",percentage:80},{id:8,name:"DATABASE TECHNOLOGY",percentage:90},{id:8,name:"SOFTWARE ENGINEERING",percentage:90},{id:9,name:"UNIX",percentage:78},{id:10,name:"HASKELL",percentage:70},{id:11,name:"Google Cloud / AWS",percentage:80},{id:12,name:"Machine-learning",percentage:85},{id:13,name:"APACHE SPARK",percentage:80},{id:14,name:"DOCKER & KUBERNETES",percentage:80},{id:15,name:"NODEJS",percentage:79},{id:16,name:"BIG DATA",percentage:85},{id:16,name:"DATA ENGINEERING",percentage:88},{id:16,name:"DEV OPS",percentage:86},{id:8,name:"BLOCKCHAIN DEVELOPMENT",percentage:70}]},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.skills.map((function(e){return Object(O.jsx)("div",{className:Te.a.box,children:Object(O.jsxs)("div",{className:Te.a.content,children:[Object(O.jsx)("p",{children:e.name}),Object(O.jsxs)("h6",{children:[e.percentage,"%"]}),Object(O.jsx)(Ce.Progress,{percent:e.percentage,status:"success",strokeWidth:3,className:Te.a.back,symbolClassName:Te.a.symbol,theme:{success:{trailColor:"transparent",color:"#037fff"}}})]})},e.id)}));return Object(O.jsxs)(D,{children:[Object(O.jsxs)("div",{className:Te.a.skills,children:[Object(O.jsx)("h2",{children:"Skills"}),Object(O.jsx)("span",{children:"My Skills"})]}),Object(O.jsx)("div",{className:Te.a.skills_content,children:e})]})}}]),a}(n.Component),Ie=a(58),De=a.n(Ie),Pe=a.p+"static/media/CV-updated.9fdaef70.pdf",Re=function(){return Object(O.jsx)(xe.Spring,{from:{opacity:0},to:{opacity:1},config:{delay:500,duration:900},children:function(e){return Object(O.jsx)(xe.animated.div,{style:e,className:De.a.resume_full_container,children:Object(O.jsx)("div",{className:De.a.container,children:Object(O.jsxs)("div",{className:De.a.content,children:[Object(O.jsxs)("div",{className:De.a.resume,children:[Object(O.jsx)("h2",{children:"Resume"}),Object(O.jsx)("span",{children:"My Resume"})]}),Object(O.jsx)("div",{className:De.a.downloadCV,children:Object(O.jsx)("a",{href:Pe,download:!0,children:Object(O.jsx)("button",{className:"btn btn-primary",children:"DOWNLOAD MY FULL CV"})})}),Object(O.jsx)(Ne,{}),Object(O.jsx)(Ae,{})]})})})}})},Be=a(59),He=a.n(Be),Le=a.p+"static/media/facialRec.ed546138.PNG",Fe=a.p+"static/media/roboHooks.fba3dd2c.PNG",We=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={projects:[{id:1,img:Le,alt:"Facial Recognition",topic:"Facial Recognition",description:"To learn React, I created this facial recognition webapp using PostgreSQL, ExpressJS & Clarifai's API and deployed it on Heroku.",codeLink:"https://github.com/Pratish315/facial-recognition-static-frontend",liveLink:"https://pratish315.github.io/facial-recognition-static-frontend/"},{id:2,img:Fe,alt:"Robo Friends",topic:"Robo-Friends",description:"During my free time I created this basic webapp to familarize myself with React Hooks.",codeLink:"https://github.com/Pratish315/robofriends-hooks",liveLink:"https://pratish315.github.io/robofriends-hooks/"}]},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{className:He.a.content,children:this.state.projects.map((function(e){return Object(O.jsxs)("div",{className:He.a.box,children:[Object(O.jsx)("span",{className:He.a.topic,children:Object(O.jsxs)("span",{children:[e.topic,Object(O.jsx)("br",{}),Object(O.jsxs)("p",{children:[e.description," "]})]})}),Object(O.jsx)("img",{src:e.img,alt:e.alt}),Object(O.jsx)("a",{href:e.liveLink,rel:"noopener noreferrer",target:"_blank",children:Object(O.jsx)("button",{className:He.a.githubbut,children:"View live"})}),Object(O.jsx)("a",{href:e.codeLink,rel:"noopener noreferrer",target:"_blank",children:Object(O.jsx)("button",{className:He.a.githubbut,children:"View code on Github"})})]},e.id)}))})}}]),a}(n.Component),Ke=a(68),Ue=a.n(Ke),Ge=function(){return Object(O.jsx)(xe.Spring,{from:{opacity:0},to:{opacity:1},config:{delay:500,duration:900},children:function(e){return Object(O.jsx)(xe.animated.div,{style:e,className:Ue.a.projects_full_container,children:Object(O.jsx)("div",{className:Ue.a.container,children:Object(O.jsxs)("div",{className:Ue.a.content,children:[Object(O.jsxs)("div",{className:Ue.a.projetcs,children:[Object(O.jsx)("h2",{children:"Projects"}),Object(O.jsx)("span",{children:"My Projects"})]}),Object(O.jsx)(We,{})]})})})}})},Me=a(83),Ve=a(44),ze=a.n(Ve),Ye=function(e){return Object(O.jsxs)("form",{method:"post",onSubmit:e.handleSubmit,children:[Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{className:ze.a.label_astrix,children:"Enter Your Name"}),Object(O.jsx)("input",{type:"text",className:"form-control "+ze.a.input,name:"name",onChange:e.handleChange,placeholder:"Enter your name here "})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{className:ze.a.label_astrix,children:"Enter Your Email"}),Object(O.jsx)("input",{type:"text",className:"form-control "+ze.a.input,name:"email",onChange:e.handleChange,placeholder:"Enter your email address here "}),Object(O.jsx)("span",{style:{color:"red"},children:e.errors.emailError})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Enter Your Number"}),Object(O.jsx)("input",{type:"number",className:"form-control "+ze.a.input,name:"phone",onChange:e.handleChange,placeholder:"Enter your mobile number here: +27 81 633 7129"})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Enter Your Message"}),Object(O.jsx)("textarea",{onChange:e.handleChange,className:"form-control "+ze.a.input,name:"message",placeholder:"Enter your message here",cols:"50",rows:"5"})]}),Object(O.jsxs)("div",{className:ze.a.submitButton,children:[e.submitButton,Object(O.jsx)("span",{style:{color:"Your query was submitted successfully."===e.mainError?"rgb(72, 255, 0)":"Yellow",marginLeft:"20px"},children:e.mainError})]})]})},Je=a(69),qe=a.n(Je),Xe=a(156),Qe=a.n(Xe),Ze=function(){return Object(O.jsxs)("div",{className:Qe.a.contact_header,children:[Object(O.jsx)("h2",{children:"Contact"}),Object(O.jsx)("span",{children:"Get In Touch"})]})},$e=a(157),et=a.n($e),tt=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{className:et.a.style,children:Object(O.jsx)("p",{children:"Please enter your details/enquiries below, and I will get back to you ASAP."})})}}]),a}(n.Component),at=a(89),nt=(a(413),a(108)),it=(a(418),a(417),{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/my_website",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"/my_website",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_AUTH_KEY,projectId:"myprofessionalportfolio",storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"/my_website",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_STOARGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/my_website",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_MSG_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"/my_website",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_APP_ID,measurementId:Object({NODE_ENV:"production",PUBLIC_URL:"/my_website",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_MEASUREMENT_ID});nt.a.initializeApp(it);var st=nt.a.firestore(),ct=(a(414),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target.name,a=e.target.value,i=n.state.errors;switch(n.setState(Object(Me.a)({},t,a)),"Your query was submitted successfully."===n.state.mainError&&n.setState({mainError:""}),n.setState({submitButton:Object(O.jsx)("button",{className:"btn btn-primary",type:"submit",children:" Submit "})}),t){case"email":i.emailError=!a.endsWith("@")&&!a.endsWith(".")&&a.includes(".")&&a.includes("@")?"":"Please ensure that you have typed out your email address correctly."}a||(i.emailError="")},n.handleSubmit=function(e){e.preventDefault(),n.setState({submitButton:Object(O.jsx)("button",{className:"btn btn-primary animate__animated animate__shakeX",type:"submit",children:" Submit "})}),setTimeout((function(){return n.setState({submitButton:Object(O.jsx)("button",{className:"btn btn-primary",type:"submit",children:" Submit "})})}),500);var t=n.state,a=t.name,i=t.email,s=!1;if(""===a.trim()?n.setState({mainError:"Please enter a valid name."}):""===i||n.state.errors.emailError?n.setState({mainError:"Please enter a valid email address."}):(n.setState({mainError:"Your query was submitted successfully."}),s=!0),!0===s){var c={name:n.state.name,email:n.state.email,phone:n.state.phone,message:n.state.message};st.collection("Users").add(c).then((function(e){at.b.success("Thank you for contacting me, I will get back to you soon :)",{position:at.b.POSITION.BOTTOM_CENTER})})).catch((function(e){console.log(e)})),n.setState({submitButton:Object(O.jsx)("button",{className:"btn btn-primary animate__animated animate__shakeY",type:"submit",children:" Submit "})}),setTimeout((function(){return n.setState({submitButton:Object(O.jsx)("button",{disabled:!0,className:"btn btn-primary",type:"submit",children:" Submit "})})}),500)}},n.state={name:"",email:"",phone:"",message:"",errors:{emailError:""},mainError:"",submitButton:Object(O.jsx)("button",{className:"btn btn-primary",type:"submit",children:" Submit "})},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(O.jsx)(xe.Spring,{from:{opacity:0},to:{opacity:1},config:{delay:100,duration:900},children:function(t){return Object(O.jsx)(xe.animated.div,{style:t,className:qe.a.contact_full_container,children:Object(O.jsx)("div",{className:qe.a.container,children:Object(O.jsxs)("div",{className:qe.a.content,children:[Object(O.jsx)(Ze,{}),Object(O.jsx)(tt,{}),Object(O.jsxs)("div",{className:qe.a.contact_form,children:[Object(O.jsx)(Ye,{handleChange:e.handleChange,handleSubmit:e.handleSubmit,errors:e.state.errors,mainError:e.state.mainError,submitButton:e.state.submitButton}),Object(O.jsx)(at.a,{})]})]})})})}})}}]),a}(n.Component)),rt=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).openSideBar=function(){e.setState({isSideBarOpened:!e.state.isSideBarOpened})},e.state={isSideBarOpened:!1},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsxs)(D,{children:[Object(O.jsx)(I,{isSideBarOpened:this.state.isSideBarOpened,clicked:this.openSideBar}),Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{exact:!0,path:"/",component:ee}),Object(O.jsx)(j.a,{exact:!0,path:"/my_website",component:ee}),Object(O.jsx)(j.a,{exact:!0,path:"/about",component:ve}),Object(O.jsx)(j.a,{exact:!0,path:"/resume",component:Re}),Object(O.jsx)(j.a,{exact:!0,path:"/projects",component:Ge}),Object(O.jsx)(j.a,{exact:!0,path:"/contact",component:ct})]})]})}}]),a}(n.Component),ot=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsx)(b.a,{children:Object(O.jsx)(rt,{})})}}]),a}(n.Component),lt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,419)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),s(e),c(e)}))};a(415);c.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(ot,{})}),document.getElementById("root")),lt()},43:function(e,t,a){e.exports={services:"ServiceContent_services__3q3u3",services_box:"ServiceContent_services_box__3Kk-R",services_content:"ServiceContent_services_content__4V42E"}},44:function(e,t,a){e.exports={input:"ContactForm_input__mU4wS",label_astrix:"ContactForm_label_astrix__EOdXk",submitButton:"ContactForm_submitButton__1Bp3C"}},51:function(e,t,a){e.exports={skills:"Skills_skills__V-e1b",skills_content:"Skills_skills_content__2JFrr",content:"Skills_content__3m_rH",box:"Skills_box__3AEhK",back:"Skills_back__2Iz21",symbol:"Skills_symbol__2Yg5C"}},57:function(e,t,a){e.exports={education_expertise:"ResumeDetails_education_expertise__1tBIa",box:"ResumeDetails_box__2AwL5",content:"ResumeDetails_content__IqYi8"}},58:function(e,t,a){e.exports={resume_full_container:"Resume_resume_full_container__3x4r_",content:"Resume_content__3XY1F",resume:"Resume_resume__3Gm5P",container:"Resume_container__3Xejf",downloadCV:"Resume_downloadCV__2iIez"}},59:function(e,t,a){e.exports={content:"ProjectDetails_content__giV_Y",box:"ProjectDetails_box__1UTHE",topic:"ProjectDetails_topic__e68zd",githubbut:"ProjectDetails_githubbut__13D0D"}},64:function(e,t,a){e.exports={bg:"BackgroundGenerator_bg__24bph",backgroundGenText:"BackgroundGenerator_backgroundGenText__ddbl_",input_colour:"BackgroundGenerator_input_colour__22jNJ"}},65:function(e,t,a){e.exports={sm_icons:"SocialMediaIcons_sm_icons__1KoCQ"}},66:function(e,t,a){e.exports={container:"Home_container__JCy8R",box:"Home_box__o0iWa",content:"Home_content__hCl8g",typedcursor:"Home_typedcursor__1bjAe",social_media_icons:"Home_social_media_icons__2UE_f"}},68:function(e,t,a){e.exports={projects_full_container:"Projects_projects_full_container__23Isy",content:"Projects_content__3why5",projetcs:"Projects_projetcs__3LntV",container:"Projects_container__1tvwq"}},69:function(e,t,a){e.exports={contact_full_container:"Contact_contact_full_container__3RVkh",content:"Contact_content__3IDMN",contact_form:"Contact_contact_form__3GrbV",container:"Contact_container__2grhq"}},84:function(e,t,a){e.exports={sidebar:"SideBar_sidebar__1niBN",Closesidebar:"SideBar_Closesidebar__92cBZ",Opensidebar:"SideBar_Opensidebar__2N5GT"}},85:function(e,t,a){e.exports={hire_call:"HireCallMe_hire_call__1D5te"}},86:function(e,t,a){e.exports={about_details:"AboutDetails_about_details__3XS1X",about_details_mydetails:"AboutDetails_about_details_mydetails__L17_T",about_details_textcolor:"AboutDetails_about_details_textcolor__2wqV0",about_details_myimage:"AboutDetails_about_details_myimage__1cIDo"}},87:function(e,t,a){e.exports={about_full_container:"About_about_full_container__2xQbS",about_content:"About_about_content__2t-m_",about_container:"About_about_container__2WCnU"}}},[[416,1,2]]]);
//# sourceMappingURL=main.0626527a.chunk.js.map