(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{141:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(149),o=n(150);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Our Vision",keywords:["janus","application","react"]}),r.a.createElement("h1",null," This is our vision. "),r.a.createElement("p",null," We imagine a world where your data is managed your way. "))}},145:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m}),n.d(t,"useStaticQuery",function(){return y});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(144),s=n.n(u);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var c=n(146),l=n.n(c);n.d(t,"PageRenderer",function(){return l.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},y=function(e){r.a.useContext;var t=r.a.useContext(p);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(e,t,n){var a;e.exports=(a=n(148))&&a.default||a},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Janus"}}}}},148:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(52),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},149:function(e,t,n){"use strict";var a=n(147),r=n(0),i=n.n(r),o=n(4),u=n.n(o),s=n(145),c=(n(152),function(e){e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1rem .75rem"}},i.a.createElement("div",null,i.a.createElement("h4",{style:{margin:0}},i.a.createElement(s.Link,{className:"nav-link",to:"/"}," Home "),i.a.createElement(s.Link,{className:"nav-link",to:"/about"}," About "),i.a.createElement(s.Link,{className:"nav-link",to:"/vision"}," Vision ")))))});c.propTypes={siteTitle:u.a.string},c.defaultProps={siteTitle:""};var l=c,d=(n(153),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l,null),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",{style:{height:"100vh",backgroundColor:""}},t),i.a.createElement("footer",null,i.a.createElement("div",null," © ",(new Date).getFullYear()," "),i.a.createElement("div",null," Built with love, by Aaron Chen. "))))},data:a})});d.propTypes={children:u.a.node.isRequired};t.a=d},150:function(e,t,n){"use strict";var a=n(151),r=n(0),i=n.n(r),o=n(4),u=n.n(o),s=n(156),c=n.n(s),l=n(145);function d(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,u=e.title;return i.a.createElement(l.StaticQuery,{query:p,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:n},title:u,meta:[{name:"description",content:a},{property:"og:title",content:u},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:u.a.string,lang:u.a.string,meta:u.a.array,keywords:u.a.arrayOf(u.a.string),title:u.a.string.isRequired},t.a=d;var p="1025518380"},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Janus",description:"Made with love, by Aaron Chen.",author:"@kempo"}}}}}}]);
//# sourceMappingURL=component---src-pages-vision-js-470b2cf4f0f69403c1a8.js.map