(this.webpackJsonpmovie_app_2021_08_23=this.webpackJsonpmovie_app_2021_08_23||[]).push([[0],{15:function(e,t,s){},51:function(e,t,s){},72:function(e,t,s){"use strict";s.r(t);var n=s(2),a=s.n(n),i=s(18),r=s.n(i),c=s(19),o=s(6),m=s.n(o),l=s(20),d=s(21),j=s(22),u=s(26),v=s(25),h=s(23),p=s.n(h),g=(s(15),s(0));function b(e){return e.join(", ")}var _=function(e){e.id,e.year,e.rating,e.runtime;var t=e.title_long,s=e.genres,n=e.summary,a=e.poster;return Object(g.jsxs)("div",{className:"movies_container",children:[Object(g.jsx)("span",{className:"movies_container_img",children:Object(g.jsx)("img",{src:a,alt:"noImage",title:t})}),Object(g.jsxs)("div",{className:"movies_data",children:[Object(g.jsxs)("h2",{className:"movies_title",children:[" ",t," "]}),Object(g.jsxs)("h4",{className:"movies_genres",children:[" ",b(s),"  "]}),Object(g.jsxs)("p",{className:"movies_summary",children:[" ",n.slice(0,250),"... "]})]})]})},x=(s(51),s(24)),O=s.n(x),y=(s(52),function(e){Object(u.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(d.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[],dotCount:0},e.getMovies=Object(l.a)(m.a.mark((function t(){var s,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,n=s.data.data.movies,e.setState({isLoading:!1,movies:n});case 5:case"end":return t.stop()}}),t)}))),e.renderMovie=function(e){return Object(g.jsx)(_,Object(c.a)({id:e.id,year:e.year,rating:e.rating,runtime:e.runtime,title_long:e.title_long,genres:e.genres,summary:e.summary,poster:e.medium_cover_image},"genres",e.genres),e.id)},e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(g.jsx)("section",{className:"container",children:t?Object(g.jsxs)("div",{className:"loader",children:[Object(g.jsx)("span",{className:"loader_text",children:"Loading..."}),Object(g.jsx)("span",{children:"\xa0"}),Object(g.jsx)(O.a,{type:"spin",color:"skyblue",width:"50px",height:"50px"})]}):Object(g.jsxs)("div",{className:"movies",children:[s.map(this.renderMovie),";"]})})}}]),s}(a.a.Component));r.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(y,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.b593928b.chunk.js.map