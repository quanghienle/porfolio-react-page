(this["webpackJsonpreact-page"]=this["webpackJsonpreact-page"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),i=t.n(r),s=(t(13),t(1)),o=t(2),c=t(4),m=t(3),p=t(5),u=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.appData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},e.greetingMessage,"."),l.a.createElement("h2",{style:{color:"#fff",fontFamily:"sans-serif "}},e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:e.className})))}))))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),d=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.appData.about.map((function(e,a){var t="panel-"+a;return l.a.createElement("div",{className:"console-panel",style:{fontFamily:"Monaco",textAlign:"left",fontSize:"15px",padding:"0 0 20px 8px"},key:t},l.a.createElement("span",{style:{color:"white"}},"> ",e.question),l.a.createElement("br",null),l.a.createElement("span",{style:{padding:"0 0 0 20px"}},"=> ",e.answer))}));return l.a.createElement("section",{id:"about",style:{padding:"100px 80px 0 80px"}},l.a.createElement("h1",null," Hello World !!"),l.a.createElement("div",{className:"main-col"},l.a.createElement("div",{className:"console-header",style:{height:"5%",background:"grey",color:"grey"}},"terminal"),l.a.createElement("div",{className:"console-body",style:{padding:"20px"}},e)))}}]),a}(n.Component),h=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.appData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map((function(e,a){var t="work"+a,n=e.Achievements&&e.Achievements.map((function(e,a){var t="achievement-"+a;return l.a.createElement("p",{key:t}," \u2022 ",e)}));return l.a.createElement("div",{className:"row item",key:t},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.startDate," - ",e.endDate)),n))})))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map((function(e,a){var t="skill"+a;return l.a.createElement("li",{key:t},l.a.createElement("span",{className:"bar-expand",style:{paddingRight:e.level}}),l.a.createElement("em",null,e.skillname))})))))))}}]),a}(n.Component),E=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.appData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map((function(e,a){var t="porfolio-"+a;return l.a.createElement("div",{className:"columns portfolio-item",key:t},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:"#modal-01"},l.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img",alt:"item-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))))))}))))))}}]),a}(n.Component),v=(n.Component,{imagebaseurl:"https://rbhatia46.github.io/",greetingMessage:"Hi There!",profilePicture:"images/profile-photo.jpg",linkedinId:"dont have linkedin account yet",skypeid:"skype?",roleDescription:"I'm Hien Le,  a Computer Science student at Carleton University",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/quanghienle",className:"fa fa-github"},{name:"skype",url:"http://twitter.com/",className:"fa fa-twitter"}],about:[{question:"HienLe.origin",answer:'"Cantho, Vietnam"'},{question:"HienLe.education",answer:'"Carleton University"'},{question:"HienLe.major",answer:'"Computer Science - Software Engineering Stream"'},{question:"HienLe.expectedGraduation",answer:'"August 2021"'},{question:"HienLe.email",answer:"\"hienle@cmail.carleton.ca'"},{question:"HienLe.interests",answer:'["Code", "Badminton", "Guitar", "Movies"]'}],address:"Ottawa, Ontario, Canada ",website:"https://hienle.me",education:[{UniversityName:"Carleton University",specialization:"Computer Science - Software Engineering",MonthOfPassing:"August",YearOfPassing:"2021",Achievements:[1,2]}],work:[{CompanyName:"Carleton University",specialization:"Teaching Assistant",startDate:"Jan 2020",endDate:"Current",Achievements:[1,2]},{CompanyName:"Ericsson",specialization:"Software Developer Co-op",startDate:"May 2019",endDate:"December 2019",Achievements:[1,2]}],skillsDescription:"*doing literally nothing*",skills:[{skillname:"Java",level:"80%"},{skillname:"JavaScript / HTML / CSS",level:"80%"},{skillname:"Clojure / ClojureScript",level:"75%"},{skillname:"C/C++",level:"50%"}],portfolio:[{name:"project1",description:"mobileapp",imgurl:"images/portfolio/phone.jpg"},{name:"project2",description:"mobileapp",imgurl:"images/portfolio/project.jpg"},{name:"project3",description:"mobileapp",imgurl:"images/portfolio/project2.png"},{name:"project4",description:"mobileapp",imgurl:"images/portfolio/phone.jpg"}]}),f=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(u,{appData:v}),l.a.createElement(d,{appData:v}),l.a.createElement(h,{appData:v}),l.a.createElement(E,{appData:v}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,a,t){e.exports=t(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.bcf1ee4a.chunk.js.map