(window.webpackJsonp=window.webpackJsonp||[]).push([[49,4],{195:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(203),c=t(214),i=t(200);var o=function(e){var a=e.metadata,t=a.previousPage,n=a.nextPage;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t},r.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(i.a,{className:"pagination-nav__link",to:n},r.a.createElement("h4",{className:"pagination-nav__link--label"},"Older Entries \xbb"))))};a.default=function(e){var a=e.metadata,t=e.items;return r.a.createElement(l.a,{title:"Blog",description:"Blog"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},t.map((function(e){var a=e.content;return r.a.createElement(c.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},r.a.createElement(a,null))})),r.a.createElement(o,{metadata:a})))))}},204:function(e,a,t){"use strict";t(48),t(23),t(19),t(17),t(66);var n=t(0),r=t.n(n),l=t(198),c=t.n(l),i=t(202),o=t(199),s=!1;a.a=function(e){var a=Object(n.useRef)(!1),l=Object(n.useRef)(null),m=Object(i.b)(),u=Object(o.a)().siteConfig,d=(void 0===u?{}:u).baseUrl,h=function(){a.current||(new window.DocSearch({searchData:window.searchData,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=d+t.url;document.createElement("a").href=n,m.push(n)}}),a.current=!0)},v=function(){s?h():Promise.all([t.e(75).then(t.bind(null,210)),Promise.all([t.e(71),t.e(74)]).then(t.bind(null,212)),t.e(0).then(t.t.bind(null,118,7))]).then((function(e){var a=e[0].default,t=e[1].default;s=!0,window.searchData=a,window.DocSearch=t,h()}))},E=Object(n.useCallback)((function(a){l.current.contains(a.target)||l.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:E,onKeyDown:E,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:v,onMouseOver:v,onFocus:E,onBlur:E,ref:l}))}},214:function(e,a,t){"use strict";t(68);var n=t(0),r=t.n(n),l=t(198),c=t.n(l),i=t(197),o=t(200),s=t(215),m=t(123),u=t.n(m),d=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,l,m,h=e.children,v=e.frontMatter,E=e.metadata,p=e.truncated,b=e.isBlogPostPage,g=void 0!==b&&b,_=E.date,f=E.permalink,N=E.tags,k=v.author,w=v.title,x=v.author_url||v.authorURL,S=v.author_title||v.authorTitle,B=v.author_image_url||v.authorImageURL;return r.a.createElement("article",{className:g?void 0:"margin-bottom--xl"},(a=g?"h1":"h2",t=_.substring(0,10).split("-"),n=t[0],l=d[parseInt(t[1],10)-1],m=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:c()("margin-bottom--sm",u.a.blogPostTitle)},g?w:r.a.createElement(o.a,{to:f},w)),r.a.createElement("div",{className:"margin-bottom--sm"},r.a.createElement("time",{dateTime:_,className:u.a.blogPostDate},l," ",m,", ",n)),r.a.createElement("div",{className:"avatar margin-bottom--md"},B&&r.a.createElement("a",{className:"avatar__photo-link",href:x,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{className:"avatar__photo",src:B,alt:k})),r.a.createElement("div",{className:"avatar__intro"},k&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:x,target:"_blank",rel:"noreferrer noopener"},k)),r.a.createElement("small",{className:"avatar__subtitle"},S)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(i.a,{components:s.a},h)),(N.length>0||p)&&r.a.createElement("footer",{className:"row margin-vert--lg"},N.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),N.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(o.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),p&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(o.a,{to:E.permalink,"aria-label":"Read more about "+w},r.a.createElement("strong",null,"Read More")))))}}}]);