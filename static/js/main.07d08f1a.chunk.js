(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),i=a(15),n=a.n(i),o=(a(24),a(4)),r=(a(25),"84747cea4e211b0384f313a9c570e9b2"),l="https://image.tmdb.org/t/p/original",d=a(16),j=a.n(d).a.create({baseURL:"https://api.themoviedb.org/3"}),b=a(0);var u=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){j.get("/trending/all/week?api_key=".concat(r,"&language=en-US")).then((function(e){var t=e.data.results[Math.floor(Math.random()*e.data.results.length)];s(t),console.log(t)}))}),[]),Object(b.jsxs)("div",{className:"banner",style:{backgroundImage:"url(".concat(a?l+a.backdrop_path:"",")")},children:[Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("h1",{className:"title",children:a?a.title?a.title:a.original_name:""}),Object(b.jsxs)("div",{className:"banner-buttons",children:[Object(b.jsx)("button",{className:"button",children:"Play"}),Object(b.jsx)("button",{className:"button",children:"My List"})]}),Object(b.jsx)("h1",{className:"description",children:a?a.overview:""})]}),Object(b.jsx)("div",{className:"fade_bottom"})]})};a(44);var m=function(){return Object(b.jsxs)("div",{className:"navbar",children:[Object(b.jsx)("img",{className:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png",alt:"Netflix logo"}),Object(b.jsx)("img",{className:"avatar",src:"https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png",alt:"Avatar"})]})},g=(a(45),a(17));var h=function(e){var t=Object(c.useState)([]),a=Object(o.a)(t,2),s=a[0],i=a[1],n=Object(c.useState)(""),d=Object(o.a)(n,2),u=d[0],m=d[1];return Object(c.useEffect)((function(){j.get(e.url).then((function(e){i(e.data.results)}))}),[]),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("h2",{children:e.title}),Object(b.jsx)("div",{className:"posters",children:s.map((function(t,a){return Object(b.jsx)("img",{onClick:function(){return e=t.id,void j.get("/movie/".concat(e,"/videos?api_key=").concat(r)).then((function(e){0!==e.data.results.length?(console.log(e.data.results),m(e.data.results[0].key)):console.log("Array empty")}));var e},className:e.isSmall?"small-poster":"poster",src:"".concat(l+t.backdrop_path),alt:"Poster"},a)}))}),u&&Object(b.jsx)(g.a,{opts:{height:"390",width:"100%",playerVars:{autoplay:1}},videoId:u,_onReady:function(e){e.target.pauseVideo()}})]})},p="/discover/tv?api_key=".concat(r,"&with_networks=213"),v="discover/movie?api_key=".concat(r,"&with_genres=28"),O="discover/movie?api_key=".concat(r,"&with_genres=35"),x="discover/movie?api_key=".concat(r,"&with_genres=27"),f="trending/movie/day?api_key=".concat(r);var _=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(m,{}),Object(b.jsx)(u,{}),Object(b.jsx)(h,{url:p,title:"Netflix Originals"}),Object(b.jsx)(h,{url:f,title:"Trending",isSmall:!0}),Object(b.jsx)(h,{url:v,title:"Action",isSmall:!0}),Object(b.jsx)(h,{url:O,title:"Comedy",isSmall:!0}),Object(b.jsx)(h,{url:x,title:"Horror",isSmall:!0})]})};n.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.07d08f1a.chunk.js.map