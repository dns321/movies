(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[6],{101:function(t,e,n){"use strict";n.r(e),n.d(e,"Reviews",(function(){return j}));var r=n(54),c=n.n(r),s=n(65),a=n(55),i=n(56),o=n(57),u=n(60),h=n(59),l=n(0),v=(n(98),n(58)),p=n(1),j=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={results:[]},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=Object(a.a)(c.a.mark((function t(){var e,n=this;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.props.movieId,v.a.fetchReviews(e).then((function(t){n.setState(Object(s.a)({},t))}));case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.results;return Object(p.jsx)(p.Fragment,{children:t.length>0?Object(p.jsx)("ul",{children:t.map((function(t){return Object(p.jsxs)("li",{children:[Object(p.jsxs)("h3",{className:"title-reviews",children:["Author: ",t.author]}),Object(p.jsx)("p",{className:"text-reviews",children:t.content})]},t.author)}))}):Object(p.jsx)("p",{children:"We don't have any reviews forthis movie."})})}}]),n}(l.Component);e.default=j},98:function(t,e,n){}}]);
//# sourceMappingURL=reviews.72932b25.chunk.js.map