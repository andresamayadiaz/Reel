/*
 Copyright (c) 2009-2011 Petr Vostrel (http://petr.vostrel.cz/)
 Dual licensed under the MIT (MIT-LICENSE.txt)
 and GPL (GPL-LICENSE.txt) licenses.

 jQuery Reel
 http://jquery.vostrel.cz/reel
 Version: 1.1.3-devel
 Updated: 2011-11-09

 Requires jQuery 1.4.2 or higher
*/
jQuery.reel||function(e,tb,oa,s){function D(h){return e.reel.instances.length?e.reel.instances.first().data(h):null}function ub(h){return e.reel.instances.push(h[0])&&h}function vb(h){return(e.reel.instances=e.reel.instances.not("#"+h.attr(U)))&&h}function pa(h){return wb&&"data:image/gif;base64,R0lGODlh"+h}function qa(h){return"<"+h+"/>"}function ra(h){return"."+h}function sa(h){return"http://code.vostrel.cz/"+h}function ta(h){return"url("+h+")"}function N(h,a,o){return V(h,Qa(a,o))}function xb(h){function a(){e.fn[this]||
(e.fn[this]=function(){return this})}e.each(h,a)}function ua(h,a){return B(h)*(a?-1:1)}function $(h){return h.originalEvent.touches[0]}e.reel={version:"1.1.3-devel",def:{footage:6,frame:1,frames:36,hint:"",horizontal:true,hotspot:s,indicator:0,klass:"",loops:true,reversed:s,spacing:0,stitched:0,suffix:"-reel",tooltip:"",area:s,brake:0.5,clickfree:false,cw:false,delay:-1,directional:false,draggable:true,entry:s,graph:s,image:s,images:[],inversed:false,laziness:6,monitor:s,opening:0,orbital:0,path:"",
preloader:4,rebound:0.5,revolution:s,row:1,rows:0,speed:0,step:s,steps:s,tempo:36,timeout:2,throwable:true,vertical:false,wheelable:true,annotations:s,attr:{},scrollable:true,velocity:0}};e.fn.reel=function(h){var a=e.extend({},e.reel.def,h);h=function(g){var q=[];g.filter(Ra).each(function(){var d=e(this),b=a.images.length&&a.images||a.image||a.attr.src||d.attr(Sa),u=aa(a.attr.width||d.css(Ta)),n=aa(a.attr.height||d.css(Ua));!b||b==Va||!u||!n||q.push(d)});g.filter(ra(z)).each(function(){q.push(e(this).trigger("teardown"))});
return e(q)}(this);var o=[];a.reversed&&(a.cw=true);a.tooltip&&(a.hint=a.tooltip);a.hotspot&&(a.area=a.hotspot);h.each(function(){var g=e(this),q=g.data(),d=function(i,c){q[i]=c;g.trigger("store",[i,c]);return c},b=function(i){var c=q[i];g.trigger("recall",[i,c]);return c},u={setup:function(i){if(g.hasClass(z))return n.call(i);var c=g.attr(a.attr).attr(Sa),f=d(U,g.attr(U)||g.attr(U,z+"-"+ +new Date).attr(U)),k=g.attr("style"),m=e.extend({},g.data()),p=a.images,j=a.stitched,l=a.loops,r={x:aa(g.css(Ta)||
a.attr.width),y:aa(g.css(Ua)||a.attr.height)},y=d(ba,a.orbital&&a.footage||a.rows<=1&&p.length||a.frames),H=j?1:Wa(y/a.footage),A={display:"block",width:r.x,height:r.y};f="#"+f+a.suffix;var I=g.attr("class")||"",x={position:"relative",width:r.x,height:r.y};x=e(J,{id:f.substr(1),"class":I+va+yb,css:x}).bind("openingDone",Xa);A=g.wrap(x).attr({"class":z}).css(A).bind(u);o.push(ub(A)[0]);d(Ya,p.length&&p.length||a.image||c.replace(/^(.*)\.(jpg|jpeg|png|gif)$/,"$1"+a.suffix+".$2"));d(Za,[]);d(E,a.frame);
d($a,a.spacing);d(O,r);d(t,0);d(wa,a.steps||a.frames);d(ca,a.revolution||j/2||r.x*2);d(xa,H);d(da,1/(y-(l&&!j?0:1)));d(zb,1/V(y,b(wa)));d(ya,j);d(ab,j-(l?0:r.x));d(za,f);d(K,d(Aa,a.speed)<0);d(P,a.velocity||0);d(Q,a.vertical);d(C,(a.row-1)/(a.rows-1));d(ea,ua(1,!a.cw&&!j));d(W,false);d(bb,a.brake);d(Ba,!!a.orbital);d(F,a.tempo/(e.reel.lazy?a.laziness:1));d(fa,0);d(cb,{src:c,classes:I,style:k||Va,data:m});G.bind(L,u.tick);n.call(i);g.trigger("start")},teardown:function(i){var c=g.data(cb);g.parent().unbind("openingDone",
Xa).children("img").unbind(v);g.unbind(v).unbind(u).attr({"class":c.classes,src:c.src,style:c.style}).removeClass(z);g.data(c.data).siblings().remove();g.unwrap();vb(g);ga();G.unbind(L,u.tick).unbind(L,u.opening_tick);ha.unbind(Ca).unbind(Da);n.call(i)},start:function(){var i=b(O),c=b(ba),f=V(c,b(wa));f=d(t,1/f*((a.step||a.frame)-1));d(E,M(f*c)+1);g.attr("id");c={position:X,width:i.x,height:i.y,left:0,top:0};f=g.parent();var k=e(J,{"class":Ab,css:c}).appendTo(f),m=!b(W)||a.rows<=1||!a.orbital||a.scrollable,
p=d(db,e(a.area||k));if(e.reel.touchy){g.css({WebkitUserSelect:"none",WebkitBackgroundSize:a.images.length?"auto":b(ya)&&b(ya)+"px "+i.y+"px"||i.x*a.footage+"px "+i.y*b(xa)*(a.rows||1)*(a.directional?2:1)+"px"});p.bind(Bb,function(j){g.trigger("down",[$(j).clientX,$(j).clientY,true])}).bind(Cb,function(j){g.trigger("pan",[$(j).clientX,$(j).clientY,true]);return!m}).bind(Db,function(){g.trigger("up",[true]);return false}).bind(Eb,function(){g.trigger("up",[true]);return false})}else p.css({cursor:"url("+
eb+"), "+Ea}).bind(a.wheelable?Fb:"",function(j,l){g.trigger("wheel",[l]);return false}).bind(Gb,function(){g.trigger("play")}).bind(a.clickfree?Hb:Ib,function(j){if(j.which==1){g.trigger("down",[j.clientX,j.clientY]);return false}}).bind(a.clickfree?Jb:"",function(){g.trigger("up");return false}).disableTextSelect();a.hint&&p.attr(Kb,a.hint);a.monitor&&f.append(Fa=e(J,{"class":Lb,css:{position:X,left:0,top:0}}))||(Fa=e());if(a.annotations){k.append(Ga=e(J,{"class":Mb,css:c}))||(Ga=e());e.each(a.annotations,
function(j,l){j=e(J,l.holder).attr({id:j});var r=l.image?e(qa(Ra),l.image):e(),y=l.link?e(qa(Nb),l.link):e();l.image||l.link&&j.append(y);l.link||l.image&&j.append(r);l.link&&l.image&&j.append(y.append(r));j.hide().appendTo(Ga)})}a.indicator&&f.append(fb("x"));a.rows>1&&a.indicator&&f.append(fb("y"));g.trigger("preload")},preload:function(i){var c=b(O),f=g.parent(),k=b(Ya),m=a.images,p=!m.length?[k]:e.reel.math.spread(m,a,b),j=[],l=g[0];l.frames=p.length;l.preloaded=0;g.trigger("stop");for(f.append(Ha=
e(J,{"class":Ob,css:{position:X,left:0,top:c.y-a.preloader,height:a.preloader,overflow:gb,backgroundColor:hb}}));p.length;){var r=a.path+p.shift(),y=e(new Image).hide().bind("load"+v,function(){l.preloaded++;e(this).unbind(v);Ha.css({width:1/l.frames*l.preloaded*c.x});if(l.frames==l.preloaded){Ha.remove();m.length||g.attr({src:Pb}).css({backgroundImage:ta(a.path+k)});g.trigger(a.rows>1&&!a.stitched?"rowChange":"frameChange").trigger("loaded").trigger("opening");n.call(i)}});f.append(y);j.push(r);
setTimeout(function(H,A){return function(){H.attr({src:A})}}(y,r),0)}d(Za,j)},tick:function(i){var c=b(P);if(Y){var f=c-b(bb)/D(F)*Y;c=!(c*f<=0||c<B(f))&&d(P,c>B(b(Aa))?f:(Y=w=0))}Fa.text(b(a.monitor));c&&Y++;w&&w++;ib(0);Ia=true;if(w&&!c)return n.call(i);if(b(ia))return n.call(i,R());f=b(ea)*ua(1,b(K));var k=(b(Ja)?c:B(b(Aa))+c)/D(F);c=b(t);f=d(t,c-k*f);n.call(i);f!=c&&g.trigger("fractionChange")},opening:function(){var i=a.entry||a.speed,c=b(t),f=a.opening;d(t,c-i*a.opening);d(fa,f*D(F));G.bind(L,
u.opening_tick)},opening_tick:function(i){var c=(a.entry||a.speed)/D(F)*(a.cw?-1:1),f=b(t);d(t,f+c);c=d(fa,b(fa)-1);g.trigger("fractionChange");n.call(i);if(!(c>1)){G.unbind(L,u.opening_tick);g.trigger("openingDone")}},play:function(i){var c=d(Ka,true);d(Ja,!c);jb();n.call(i)},pause:function(i){d(Ka,false);R();n.call(i)},stop:function(i){var c=d(Ja,true);d(Ka,!c);n.call(i)},down:function(i,c,f,k){if(a.draggable){d(ia,b(E));d(P,0);ja=ka(c,f,b(t),b(ca),b(C));R();ga();if(!k){ha.css({cursor:ta(Qb)+", "+
Ea}).bind(Da,function(m){g.trigger("pan",[m.clientX,m.clientY]);n.call(m);return false});a.clickfree||ha.bind(Ca,function(m){g.trigger("up");n.call(m)})}}n.call(i)},up:function(i,c){if(!a.draggable)return n.call(i);d(ia,false);d(W,false);var f=d(P,!a.throwable?0:B(Z[0]+Z[1])/60);Y=f?1:0;f?jb():R();ga();!c&&ha.unbind(Ca).unbind(Da)&&b(db).css({cursor:ta(eb)+", "+Ea});n.call(i)},pan:function(i,c,f){if(a.draggable&&Ia){Ia=false;R();var k={x:c-ja.x,y:f-ja.y};if(B(k.x)>0||B(k.y)>0){ja={x:c,y:f};var m=
b(ca),p=b(kb),j=b(Q),l=d(t,lb(j?f-p.y:c-p.x,b(La),m,b(Ma),b(Na),b(ea)));d(W,b(W)||b(E)!=b(ia));(k=ib(j?k.y:k.x||0))&&d(K,k<0);if(a.orbital&&b(Ba)){d(Q,B(f-p.y)>B(c-p.x));p=ka(c,f,l,m,b(C))}if(a.rows>1){k=b(O).y;j=b(mb);var r=-j*k;d(C,e.reel.math.envelope(f-p.y,j,k,r,r+k,-1))}!(l%1)&&!a.loops&&ka(c,f,l,m,b(C));g.trigger("fractionChange")}}n.call(i)},wheel:function(i,c){var f=Wa(Rb(B(c))/2);f=ua(f,c>0);c=0.2*b(ca);ka(s,s,b(t),c,b(C));d(t,lb(f,b(La),c,b(Ma),b(Na),b(ea)));f&&d(K,f<0);d(P,0);R();n.call(i);
g.trigger("fractionChange");return false},fractionChange:function(i,c){c=d(t,la.fraction(c,a,b));var f=d(E,1+S(c/b(da))),k=a.rows>1,m=a.orbital;d(Ba,!!m&&(f<=m||f>=a.footage-m+2));if(!a.loops&&a.rebound){!w&&!(c%1)?Oa++:(Oa=0);Oa>=a.rebound*1E3/D(F)&&d(K,!b(K))}g.trigger(k?"rowChange":"frameChange");n.call(i)},rowChange:function(i,c){var f=b(t)/b(da)+1;c=d(C,la.row(c,a,b));c=N(0,a.rows-1,S(c*a.rows));d(E,S(f+c*a.frames));n.call(i);g.trigger("frameChange")},frameChange:function(i,c){var f=d(t,la.fraction(!c?
s:b(da)*(c-1),a,b)),k=b(nb);c=d(nb,d(E,la.frame(c,a,b)));var m=a.images,p=a.footage,j=b(O),l=a.rows>1,r=b(za),y=a.horizontal;if(b(Q)){c=a.inversed?p+1-c:c;c+=p}var H=(b(Q)?j.y:j.x)-a.indicator,A=N(0,H,M(e.reel.math.interpolate(b(t),-1,H+2)));A=!a.cw||a.stitched?A:H-A;e(ra(Pa+".x"),r).css(b(Q)?{left:0,top:A}:{left:A,top:j.y-a.indicator});if(l){l=j.y-a.indicator;l=N(0,l,M(e.reel.math.interpolate(b(C),-1,l+2)));e(ra(Pa+".y"),r).css({top:l})}if(c!=k){e(b(za)).removeClass(ob+k).addClass(ob+c);if(m.length)g.attr({src:a.path+
m[c-1]});else{if(a.stitched)m=[-M(f*b(ab))+T,0+T];else{f=c%p-1;f=f<0?p-1:f;k=S((c-0.1)/p);k+=a.rows>1?0:b(K)?0:b(xa);p=b($a);k=k*((y?j.y:j.x)+p);j=f*((y?j.x:j.y)+p);m=m.length?[0,0]:y?[-j+T,-k+T]:[-k+T,-j+T]}g.css({backgroundPosition:m.join(va)})}}a.annotations&&e.each(a.annotations,function(I,x){var ma=typeof x.x!=pb?x.x:x.x[c-x.start],qb=typeof x.y!=pb?x.y:x.y[c-x.start];x=ma&&qb;ma={position:X,left:ma,top:qb};I=e("#"+I,r).css(ma);x&&I.filter(":hidden").show()||I.filter(":visible").hide()});n.call(i)}},
n=function(i){rb||delete this;return i},w,Y=0,jb=function(){return w=0},R=function(){clearTimeout(sb);G.unbind(L,u.opening_tick);g.trigger("play");return w=-a.timeout*D(F)},sb,Xa=function(){sb=setTimeout(function(){g.trigger("play")},a.delay*1E3||0)},Fa,Ga,Ha,fb=function(i){return e(J,{"class":[Pa,i].join(va),css:{width:a.indicator,height:a.indicator,overflow:gb,top:b(O).y-a.indicator,left:0,position:X,backgroundColor:hb}})},Oa=0,ja={x:0,y:0},ib=function(i){return Z.push(i)&&Z.shift()&&i},ga=function(){return Z=
[0,0]},Z=ga(),lb=a.graph||e.reel.math[a.loops?"hatch":"envelope"],la=e.reel.normal,ka=function(i,c,f,k,m){d(La,f);d(mb,m);d(Ma,a.loops?0:-f*k);d(Na,a.loops?k:k-f*k);return i&&d(kb,{x:i,y:c})||s},Ia=true,ha=e.browser.opera?G:e.unique(G.add(tb.top.document));u.setup()});na=na||function g(){var q=+new Date,d=D(F);if(d){G.trigger(L);e.reel.cost=(+new Date+e.reel.cost-q)/2;return na=setTimeout(g,V(4,1E3/d-e.reel.cost))}else return na=s}();return e(o)};e.reel.math={envelope:function(h,a,o,g,q,d){return a+
V(g,Qa(q,-h*d))/o},hatch:function(h,a,o,g,q,d){h=(h<g?q:0)+h%q;h=a+-h*d/o;return h-S(h)},interpolate:function(h,a,o){return a+h*(o-a)},spread:function(h,a,o){function g(w){for(;!(w>=1&&w<=n);)w+=w<1?+n:-n;return d[w]||(d[w]=!!q.push(w))}var q=[],d=new Array(n),b=o(ba),u=a.orbital?2:a.rows||1;o=u*2;var n=b*u;u=(a.row-1)*b+a.frame;a=n/o;for(b=0;b<o;b++)g(u+M(b*a));for(;a>1;){b=0;o=q.length;for(a/=2;b<o;b++)g(M(q[b]+a))}for(b=0;b<q.length;b++)q[b]=h[q[b]-1];return q}};e.reel.normal={fraction:function(h,
a,o){h=h!=s?h:o(t);return a.loops?h-S(h):N(0,1,h)},row:function(h,a,o){return N(0,1,h!=s?(h-1)/(a.rows-1):o(C))},frame:function(h,a,o){h=M(h)||o(E);for(o=o(ba)*(a.orbital?2:a.rows||1);h<1;)h+=o;return a.loops?h%o:N(0,o,h)}};e.reel.touchy=/iphone|ipod|ipad|android/i.test(navigator.userAgent);e.reel.lazy=/iphone|ipod|android/i.test(navigator.userAgent);e.reel.instances=e();e.reel.cost=0;e.reel.leader=D;xb("mousewheel disableTextSelect enableTextSelect".split(/ /));var G=e(oa);oa=+e.browser.version.split(".").slice(0,
2).join(".");var rb=e.browser.msie,wb=!(rb&&oa<8),Ea="ew-resize",na,z="jquery-reel",yb=z+"-overlay",Pa=z+"-indicator",Ob=z+"-preloader",Lb=z+"-monitor",Ab=z+"-interface",Mb=z+"-annotations",ob="frame-",Pb=pa("CAAIAIAAAAAAAAAAACH5BAEAAAAALAAAAAAIAAgAAAIHhI+py+1dAAA7")||sa("blank.gif"),eb=pa("EAAQAJECAAAAAP///////wAAACH5BAEAAAIALAAAAAAQABAAQAI3lC8AeBDvgosQxQtne7yvLWGStVBelXBKqDJpNzLKq3xWBlU2nUs4C/O8cCvU0EfZGUwt19FYAAA7")||sa("jquery.reel.cursor-drag.gif"),Qb=pa("EAAQAJECAAAAAP///////wAAACH5BAEAAAIALAAAAAAQABAAQAIslI95EB3MHECxNjBVdE/5b2zcRV1QBabqhwltq41St4hj5konmVioZ6OtEgUAOw==")||
sa("jquery.reel.cursor-drag-down.gif"),M=Math.round,S=Math.floor,Wa=Math.ceil,Qa=Math.min,V=Math.max,B=Math.abs,Rb=Math.sqrt,aa=parseInt,db="area",cb="backup",K="backwards",da="bit",bb="brake",Ba="center",ia="clicked",kb="clicked_location",La="clicked_on",mb="clicked_row",ea="cwish",O="dimensions",t="fraction",E="frame",nb="_frame",ba="frames",Na="hi",gb="hidden",Ya="image",Za="images",fa="opening_ticks",Ma="lo",Ka="playing",W="reeling",ca="revolution",C="row",xa="rows",$a="spacing",Aa="speed",za=
"stage",wa="steps",ya="stitched",ab="stitched_travel",Ja="stopped",F="tempo",P="velocity",Q="vertical",zb="wheel_step",v=".reel",Gb="dblclick"+v,Ib="mousedown"+v,Hb="mouseenter"+v,Jb="mouseleave"+v,Da="mousemove"+v,Ca="mouseup"+v,Fb="mousewheel"+v,L="tick"+v,Eb="touchcancel"+v,Db="touchend"+v,Bb="touchstart"+v,Cb="touchmove"+v,Va="",va=" ",X="absolute",Nb="a",J=qa("div"),Ua="height",hb="#000",U="id",Ra="img",pb="object",T="px",Sa="src",Kb="title",Ta="width"}(jQuery,window,document);
