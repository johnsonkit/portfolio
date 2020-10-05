(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{36:function(e,t,a){e.exports=a(73)},41:function(e,t,a){},42:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},43:function(e,t,a){},44:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(31),c=a.n(r),o=(a(41),a(42),a(14)),i=a(13),s=(a(43),a(5)),m=a(6),u=a(8),p=a(7),h=a(12),b=a(9),d=(a(44),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={isMenuOpened:!1},a.handleBurgerIconClick=a.handleBurgerIconClick.bind(Object(h.a)(a)),a.handleNavLinkClick=a.handleNavLinkClick.bind(Object(h.a)(a)),a.toggleNavMenu=a.toggleNavMenu.bind(Object(h.a)(a)),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"toggleNavMenu",value:function(){this.setState({isMenuOpened:!this.state.isMenuOpened})}},{key:"handleBurgerIconClick",value:function(){this.toggleNavMenu()}},{key:"handleNavLinkClick",value:function(e){var t=e.target;if("A"===t.nodeName){for(var a=t;"UL"!==a.nodeName;)a=a.parentNode;a.className.indexOf("active")>=0&&this.toggleNavMenu()}}},{key:"render",value:function(){var e=this.state.isMenuOpened?"active":"";return l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,l.a.createElement(o.b,{to:"/"},"JK")),l.a.createElement("ul",{className:"header--nav ".concat(e),onClick:this.handleNavLinkClick},l.a.createElement("li",null,l.a.createElement(o.c,{exact:!0,to:"/",activeClassName:"active"},"Home")),l.a.createElement("li",null,l.a.createElement(o.c,{to:"/about",activeClassName:"active"},"About")),l.a.createElement("li",null,l.a.createElement(o.c,{to:"/work",activeClassName:"active"},"Work")),l.a.createElement("li",null,l.a.createElement(o.c,{to:"/contact",activeClassName:"active"},"Contact"))),l.a.createElement("div",{onClick:this.handleBurgerIconClick,className:"header--nav__icon"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)))}}]),t}(l.a.Component)),E=(a(50),a(51),function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).call(this,e))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"about"},l.a.createElement("div",{className:"text--container"},l.a.createElement("h2",null,"About"),l.a.createElement("p",null,"Hi! My name is Johnson Kit. I am a web developer from Hong Kong and now in London. My previous working experiences were mainly on the front-end and had some experiences in PHP and Ruby on Rails. My web development stack is HTML, CSS, and JavaScript."),l.a.createElement("p",null,"I like reading books, taking online courses, and joining the meetup group to learn about the latest web development skills."),l.a.createElement("p",null,"My skills are as below:"),l.a.createElement("p",null,l.a.createElement("u",null,"Programming Languages:"),l.a.createElement("br",null),"HTML/HTML5/Nunjucks, CSS/CSS3/SASS/SCSS/LESS/BEM, JavaScript/TypeScript, PHP, Ruby"),l.a.createElement("p",null,l.a.createElement("u",null,"Libraries / Frameworks:"),l.a.createElement("br",null),"jQuery, React, Node.js, Bootstrap, Ruby on Rails"),l.a.createElement("p",null,l.a.createElement("u",null,"Tools:"),l.a.createElement("br",null),"Git, Gulp, Webpack"),l.a.createElement("p",null,l.a.createElement("u",null,"Testing:"),l.a.createElement("br",null),"Jasmine, Cross-Browser and Cross-Device Testing"),l.a.createElement("p",null,l.a.createElement("u",null,"CMS:"),l.a.createElement("br",null),"WordPress, Adobe Experience Manager, Umbraco, ATG Business Control Center System"),l.a.createElement("p",null,l.a.createElement("u",null,"Web development:"),l.a.createElement("br",null),"Responsive Web Development, SEO"),l.a.createElement("p",null,l.a.createElement("u",null,"Languages:"),l.a.createElement("br",null),"Intermediate English, native Cantonese speaker, and fluent Mandarin"),l.a.createElement("p",null,"Apart from work, I like Chinese tea culture, calligraphy, meditation, and yoga.")))}}]),t}(l.a.Component)),v=function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).call(this,e))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"home"},l.a.createElement("div",{className:"hero"},l.a.createElement("h2",null,"Johnson Kit",l.a.createElement("br",null),"Web Developer",l.a.createElement("br",null),"From Hong Kong",l.a.createElement("br",null),"Now in London")),l.a.createElement(E,null))}}]),t}(l.a.Component),g=(a(52),a(20)),f=a.n(g),k=a(33),j=(a(54),a(34)),y=a.n(j),S=a(35),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={isSubmitted:!1},a.handleFormSubmit=a.handleFormSubmit.bind(Object(h.a)(a)),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"objectToQueryString",value:function(e){return Object.keys(e).map((function(t){return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(e[t]))})).join("&")}},{key:"handleFormSubmit",value:function(){var e=Object(k.a)(f.a.mark((function e(t){var a,n,l,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t.preventDefault(),a=t.target,n={},l=0;l<a.length;l++)null!=(r=a.elements[l]).getAttribute("name")&&(n[r.getAttribute("name")]=r.value);return"https://script.google.com/macros/s/AKfycbyiX2vxyioc-TzTntLbuwsP-STsyNuIignP_jKnIo9Zb9gzQUkf/exec?action=CREATE_DATA",c={headers:{"Content-Type":"application/x-www-form-urlencoded"}},e.prev=6,e.next=9,y.a.post("https://script.google.com/macros/s/AKfycbyiX2vxyioc-TzTntLbuwsP-STsyNuIignP_jKnIo9Zb9gzQUkf/exec?action=CREATE_DATA",this.objectToQueryString(n),c);case 9:e.sent.data.success&&this.setState({isSubmitted:!0}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),console.error(e.t0);case 16:case"end":return e.stop()}}),e,this,[[6,13]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.isSubmitted?"isSubmitted":"";return l.a.createElement("div",{className:"contact-form ".concat(e)},l.a.createElement("div",{className:"form--wrapper"},l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("div",{id:"html_element"}),l.a.createElement("label",{htmlFor:"name"},l.a.createElement("span",{className:"label-title"},"Name:"),l.a.createElement("input",{type:"text",name:"name",id:"name"})),l.a.createElement("label",{htmlFor:"email"},l.a.createElement("span",{className:"label-title"},"Email:"),l.a.createElement("input",{type:"email",name:"email",id:"email"})),l.a.createElement("label",{htmlFor:"message"},l.a.createElement("span",{className:"label-title"},"Message:"),l.a.createElement("textarea",{name:"message",id:"message",rows:"10",cols:"50"})),l.a.createElement(S.a,{sitekey:"6Le8vtMZAAAAADwW_LLXthPT50vVZfA-GaBYG-XL"}),l.a.createElement("br",null),l.a.createElement("button",{id:"submit-btn",className:"submit",type:"submit"},"Send"))),l.a.createElement("div",{className:"thank-you--wrapper"},"Thanks for your message."))}}]),t}(l.a.Component),w=function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).call(this,e))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"contact"},l.a.createElement("div",{className:"text--container"},l.a.createElement("h2",null,"Contact"),l.a.createElement(N,null)))}}]),t}(l.a.Component),C=(a(72),function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).call(this,e))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"work"},l.a.createElement("div",{className:"text--container"},l.a.createElement("h2",null,"Work"),l.a.createElement("p",null,"Past few years, I have had the pleasure to work with the companies, including EF Education First, Tofugear, and LaneCrawford. If you would like to see some examples, please drop me a message. I'll send you some examples."),l.a.createElement("h2",null,"Project"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://johnsonkit.github.io/responsive-web-page-sample/dist/",target:"_blank"},"Responsive Web Page Sample (HTML, CSS, and JavaScript)")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://johnsonkit.github.io/tic-tac-toe-react/",target:"_blank"},"Tic Tac Toe (React)")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://johnsonkit.github.io/simon-game/dist/",target:"_blank"},"Simon Game (HTML, CSS, and JavaScript)")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://johnsonkit.github.io/lightweight-web-script/",target:"_blank"},"Lightweight Web Script - ScrollTo effect (pure JavaScript)")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/johnsonkit/batch-process-images",target:"_blank"},"Batch images processing (gulp)")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/johnsonkit/simple-frontend-starter",target:"_blank"},"Custom front-end development template (gulp)")))))}}]),t}(l.a.Component));var O=function(){return l.a.createElement(o.a,{basename:"/"},l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"app--container"},l.a.createElement(d,null),l.a.createElement("div",{className:"main"},l.a.createElement(i.a,{path:"/",exact:!0,component:v}),l.a.createElement(i.a,{path:"/about",component:E}),l.a.createElement(i.a,{path:"/work",component:C}),l.a.createElement(i.a,{path:"/contact",component:w})),l.a.createElement("div",{className:"footer"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.ddb8c8f9.chunk.js.map