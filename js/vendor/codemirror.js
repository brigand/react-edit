window.CodeMirror=function(){"use strict";function y(a,c){if(!(this instanceof y))return new y(a,c);this.options=c=c||{};for(var d in dd)!c.hasOwnProperty(d)&&dd.hasOwnProperty(d)&&(c[d]=dd[d]);L(c);var e="string"==typeof c.value?0:c.value.first,f=this.display=z(a,e);f.wrapper.CodeMirror=this,I(this),c.autofocus&&!q&&Pb(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,focused:!1,suppressEdits:!1,pasteIncoming:!1,cutIncoming:!1,draggingText:!1,highlight:new gf},G(this),c.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap");var g=c.value;"string"==typeof g&&(g=new re(c.value,c.mode)),Hb(this,ve)(this,g),b&&setTimeout(rf(Ob,this,!0),20),Rb(this);var h;try{h=document.activeElement==f.input}catch(i){}h||c.autofocus&&!q?setTimeout(rf(pc,this),20):qc(this),Hb(this,function(){for(var a in cd)cd.propertyIsEnumerable(a)&&cd[a](this,c[a],fd);for(var b=0;b<jd.length;++b)jd[b](this)})()}function z(a,b){var d={},e=d.input=xf("textarea",null,null,"position: absolute; padding: 0; width: 1px; height: 1em; outline: none; font-size: 4px;");return g?e.style.width="1000px":e.setAttribute("wrap","off"),p&&(e.style.border="1px solid black"),e.setAttribute("autocorrect","off"),e.setAttribute("autocapitalize","off"),e.setAttribute("spellcheck","false"),d.inputDiv=xf("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;"),d.scrollbarH=xf("div",[xf("div",null,null,"height: 1px")],"CodeMirror-hscrollbar"),d.scrollbarV=xf("div",[xf("div",null,null,"width: 1px")],"CodeMirror-vscrollbar"),d.scrollbarFiller=xf("div",null,"CodeMirror-scrollbar-filler"),d.gutterFiller=xf("div",null,"CodeMirror-gutter-filler"),d.lineDiv=xf("div",null,"CodeMirror-code"),d.selectionDiv=xf("div",null,null,"position: relative; z-index: 1"),d.cursor=xf("div","\xa0","CodeMirror-cursor"),d.otherCursor=xf("div","\xa0","CodeMirror-cursor CodeMirror-secondarycursor"),d.measure=xf("div",null,"CodeMirror-measure"),d.lineSpace=xf("div",[d.measure,d.selectionDiv,d.lineDiv,d.cursor,d.otherCursor],null,"position: relative; outline: none"),d.mover=xf("div",[xf("div",[d.lineSpace],"CodeMirror-lines")],null,"position: relative"),d.sizer=xf("div",[d.mover],"CodeMirror-sizer"),d.heightForcer=xf("div",null,null,"position: absolute; height: "+ef+"px; width: 1px;"),d.gutters=xf("div",null,"CodeMirror-gutters"),d.lineGutter=null,d.scroller=xf("div",[d.sizer,d.heightForcer,d.gutters],"CodeMirror-scroll"),d.scroller.setAttribute("tabIndex","-1"),d.wrapper=xf("div",[d.inputDiv,d.scrollbarH,d.scrollbarV,d.scrollbarFiller,d.gutterFiller,d.scroller],"CodeMirror"),c&&(d.gutters.style.zIndex=-1,d.scroller.style.paddingRight=0),a.appendChild?a.appendChild(d.wrapper):a(d.wrapper),p&&(e.style.width="0px"),g||(d.scroller.draggable=!0),l?(d.inputDiv.style.height="1px",d.inputDiv.style.position="absolute"):c&&(d.scrollbarH.style.minWidth=d.scrollbarV.style.minWidth="18px"),d.viewOffset=d.lastSizeC=0,d.showingFrom=d.showingTo=b,d.lineNumWidth=d.lineNumInnerWidth=d.lineNumChars=null,d.prevInput="",d.alignWidgets=!1,d.pollingFast=!1,d.poll=new gf,d.cachedCharWidth=d.cachedTextHeight=null,d.measureLineCache=[],d.measureLineCachePos=0,d.inaccurateSelection=!1,d.maxLine=null,d.maxLineLength=0,d.maxLineChanged=!1,d.wheelDX=d.wheelDY=d.wheelStartX=d.wheelStartY=null,d}function A(a){a.doc.mode=y.getMode(a.options,a.doc.modeOption),B(a)}function B(a){a.doc.iter(function(a){a.stateAfter&&(a.stateAfter=null),a.styles&&(a.styles=null)}),a.doc.frontier=a.doc.first,db(a,100),a.state.modeGen++,a.curOp&&Kb(a)}function C(a){a.options.lineWrapping?(a.display.wrapper.className+=" CodeMirror-wrap",a.display.sizer.style.minWidth=""):(a.display.wrapper.className=a.display.wrapper.className.replace(" CodeMirror-wrap",""),K(a)),E(a),Kb(a),rb(a),setTimeout(function(){M(a)},100)}function D(a){var b=Cb(a.display),c=a.options.lineWrapping,d=c&&Math.max(5,a.display.scroller.clientWidth/Db(a.display)-3);return function(e){return Qd(a.doc,e)?0:c?(Math.ceil(e.text.length/d)||1)*b:b}}function E(a){var b=a.doc,c=D(a);b.iter(function(a){var b=c(a);b!=a.height&&ze(a,b)})}function F(a){var b=od[a.options.keyMap],c=b.style;a.display.wrapper.className=a.display.wrapper.className.replace(/\s*cm-keymap-\S+/g,"")+(c?" cm-keymap-"+c:"")}function G(a){a.display.wrapper.className=a.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+a.options.theme.replace(/(^|\s)\s*/g," cm-s-"),rb(a)}function H(a){I(a),Kb(a),setTimeout(function(){O(a)},20)}function I(a){var b=a.display.gutters,c=a.options.gutters;yf(b);for(var d=0;d<c.length;++d){var e=c[d],f=b.appendChild(xf("div",null,"CodeMirror-gutter "+e));"CodeMirror-linenumbers"==e&&(a.display.lineGutter=f,f.style.width=(a.display.lineNumWidth||1)+"px")}b.style.display=d?"":"none"}function J(a,b){if(0==b.height)return 0;for(var d,c=b.text.length,e=b;d=Md(e);){var f=d.find();e=we(a,f.from.line),c+=f.from.ch-f.to.ch}for(e=b;d=Nd(e);){var f=d.find();c-=e.text.length-f.from.ch,e=we(a,f.to.line),c+=e.text.length-f.to.ch}return c}function K(a){var b=a.display,c=a.doc;b.maxLine=we(c,c.first),b.maxLineLength=J(c,b.maxLine),b.maxLineChanged=!0,c.iter(function(a){var d=J(c,a);d>b.maxLineLength&&(b.maxLineLength=d,b.maxLine=a)})}function L(a){var b=nf(a.gutters,"CodeMirror-linenumbers");-1==b&&a.lineNumbers?a.gutters=a.gutters.concat(["CodeMirror-linenumbers"]):b>-1&&!a.lineNumbers&&(a.gutters=a.gutters.slice(0),a.gutters.splice(b,1))}function M(a){var b=a.display,c=a.doc.height,d=c+ib(b);b.sizer.style.minHeight=b.heightForcer.style.top=d+"px",b.gutters.style.height=Math.max(d,b.scroller.clientHeight-ef)+"px";var e=Math.max(d,b.scroller.scrollHeight),f=b.scroller.scrollWidth>b.scroller.clientWidth+1,g=e>b.scroller.clientHeight+1;g?(b.scrollbarV.style.display="block",b.scrollbarV.style.bottom=f?Ff(b.measure)+"px":"0",b.scrollbarV.firstChild.style.height=Math.max(0,e-b.scroller.clientHeight+b.scrollbarV.clientHeight)+"px"):(b.scrollbarV.style.display="",b.scrollbarV.firstChild.style.height="0"),f?(b.scrollbarH.style.display="block",b.scrollbarH.style.right=g?Ff(b.measure)+"px":"0",b.scrollbarH.firstChild.style.width=b.scroller.scrollWidth-b.scroller.clientWidth+b.scrollbarH.clientWidth+"px"):(b.scrollbarH.style.display="",b.scrollbarH.firstChild.style.width="0"),f&&g?(b.scrollbarFiller.style.display="block",b.scrollbarFiller.style.height=b.scrollbarFiller.style.width=Ff(b.measure)+"px"):b.scrollbarFiller.style.display="",f&&a.options.coverGutterNextToScrollbar&&a.options.fixedGutter?(b.gutterFiller.style.display="block",b.gutterFiller.style.height=Ff(b.measure)+"px",b.gutterFiller.style.width=b.gutters.offsetWidth+"px"):b.gutterFiller.style.display="",m&&0===Ff(b.measure)&&(b.scrollbarV.style.minWidth=b.scrollbarH.style.minHeight=n?"18px":"12px",b.scrollbarV.style.pointerEvents=b.scrollbarH.style.pointerEvents="none")}function N(a,b,c){var d=a.scroller.scrollTop,e=a.wrapper.clientHeight;"number"==typeof c?d=c:c&&(d=c.top,e=c.bottom-c.top),d=Math.floor(d-hb(a));var f=Math.ceil(d+e);return{from:Be(b,d),to:Be(b,f)}}function O(a){var b=a.display;if(b.alignWidgets||b.gutters.firstChild&&a.options.fixedGutter){for(var c=R(b)-b.scroller.scrollLeft+a.doc.scrollLeft,d=b.gutters.offsetWidth,e=c+"px",f=b.lineDiv.firstChild;f;f=f.nextSibling)if(f.alignable)for(var g=0,h=f.alignable;g<h.length;++g)h[g].style.left=e;a.options.fixedGutter&&(b.gutters.style.left=c+d+"px")}}function P(a){if(!a.options.lineNumbers)return!1;var b=a.doc,c=Q(a.options,b.first+b.size-1),d=a.display;if(c.length!=d.lineNumChars){var e=d.measure.appendChild(xf("div",[xf("div",c)],"CodeMirror-linenumber CodeMirror-gutter-elt")),f=e.firstChild.offsetWidth,g=e.offsetWidth-f;return d.lineGutter.style.width="",d.lineNumInnerWidth=Math.max(f,d.lineGutter.offsetWidth-g),d.lineNumWidth=d.lineNumInnerWidth+g,d.lineNumChars=d.lineNumInnerWidth?c.length:-1,d.lineGutter.style.width=d.lineNumWidth+"px",!0}return!1}function Q(a,b){return String(a.lineNumberFormatter(b+a.firstLineNumber))}function R(a){return Bf(a.scroller).left-Bf(a.sizer).left}function S(a,b,c,d){for(var g,e=a.display.showingFrom,f=a.display.showingTo,h=N(a.display,a.doc,c),i=!0;;i=!1){var j=a.display.scroller.clientWidth;if(!T(a,b,h,d))break;if(g=!0,b=[],_(a),M(a),i&&a.options.lineWrapping&&j!=a.display.scroller.clientWidth)d=!0;else if(d=!1,c&&(c=Math.min(a.display.scroller.scrollHeight-a.display.scroller.clientHeight,"number"==typeof c?c:c.top)),h=N(a.display,a.doc,c),h.from>=a.display.showingFrom&&h.to<=a.display.showingTo)break}return g&&(_e(a,"update",a),(a.display.showingFrom!=e||a.display.showingTo!=f)&&_e(a,"viewportChange",a,a.display.showingFrom,a.display.showingTo)),g}function T(a,b,c,d){var e=a.display,f=a.doc;if(!e.wrapper.offsetWidth)return e.showingFrom=e.showingTo=f.first,e.viewOffset=0,void 0;if(!(!d&&0==b.length&&c.from>e.showingFrom&&c.to<e.showingTo)){P(a)&&(b=[{from:f.first,to:f.first+f.size}]);var g=e.sizer.style.marginLeft=e.gutters.offsetWidth+"px";e.scrollbarH.style.left=a.options.fixedGutter?g:"0";var h=1/0;if(a.options.lineNumbers)for(var i=0;i<b.length;++i)b[i].diff&&b[i].from<h&&(h=b[i].from);var j=f.first+f.size,k=Math.max(c.from-a.options.viewportMargin,f.first),l=Math.min(j,c.to+a.options.viewportMargin);if(e.showingFrom<k&&k-e.showingFrom<20&&(k=Math.max(f.first,e.showingFrom)),e.showingTo>l&&e.showingTo-l<20&&(l=Math.min(j,e.showingTo)),x)for(k=Ae(Pd(f,we(f,k)));j>l&&Qd(f,we(f,l));)++l;var m=[{from:Math.max(e.showingFrom,f.first),to:Math.min(e.showingTo,j)}];if(m=m[0].from>=m[0].to?[]:W(m,b),x)for(var i=0;i<m.length;++i)for(var o,n=m[i];o=Nd(we(f,n.to-1));){var p=o.find().from.line;if(!(p>n.from)){m.splice(i--,1);break}n.to=p}for(var q=0,i=0;i<m.length;++i){var n=m[i];n.from<k&&(n.from=k),n.to>l&&(n.to=l),n.from>=n.to?m.splice(i--,1):q+=n.to-n.from}if(!d&&q==l-k&&k==e.showingFrom&&l==e.showingTo)return V(a),void 0;m.sort(function(a,b){return a.from-b.from});try{var r=document.activeElement}catch(s){}.7*(l-k)>q&&(e.lineDiv.style.display="none"),Y(a,k,l,m,h),e.lineDiv.style.display="",r&&document.activeElement!=r&&r.offsetHeight&&r.focus();var t=k!=e.showingFrom||l!=e.showingTo||e.lastSizeC!=e.wrapper.clientHeight;return t&&(e.lastSizeC=e.wrapper.clientHeight,db(a,400)),e.showingFrom=k,e.showingTo=l,e.gutters.style.height="",U(a),V(a),!0}}function U(a){for(var f,b=a.display,d=b.lineDiv.offsetTop,e=b.lineDiv.firstChild;e;e=e.nextSibling)if(e.lineObj){if(c){var g=e.offsetTop+e.offsetHeight;f=g-d,d=g}else{var h=Bf(e);f=h.bottom-h.top}var i=e.lineObj.height-f;if(2>f&&(f=Cb(b)),i>.001||-.001>i){ze(e.lineObj,f);var j=e.lineObj.widgets;if(j)for(var k=0;k<j.length;++k)j[k].height=j[k].node.offsetHeight}}}function V(a){var b=a.display.viewOffset=Ce(a,we(a.doc,a.display.showingFrom));a.display.mover.style.top=b+"px"}function W(a,b){for(var c=0,d=b.length||0;d>c;++c){for(var e=b[c],f=[],g=e.diff||0,h=0,i=a.length;i>h;++h){var j=a[h];e.to<=j.from&&e.diff?f.push({from:j.from+g,to:j.to+g}):e.to<=j.from||e.from>=j.to?f.push(j):(e.from>j.from&&f.push({from:j.from,to:e.from}),e.to<j.to&&f.push({from:e.to+g,to:j.to+g}))}a=f}return a}function X(a){for(var b=a.display,c={},d={},e=b.gutters.firstChild,f=0;e;e=e.nextSibling,++f)c[a.options.gutters[f]]=e.offsetLeft,d[a.options.gutters[f]]=e.offsetWidth;return{fixedPos:R(b),gutterTotalWidth:b.gutters.offsetWidth,gutterLeft:c,gutterWidth:d,wrapperWidth:b.wrapper.clientWidth}}function Y(a,b,c,d,e){function l(b){var c=b.nextSibling;return g&&r&&a.display.currentWheelTarget==b?(b.style.display="none",b.lineObj=null):b.parentNode.removeChild(b),c}var f=X(a),h=a.display,i=a.options.lineNumbers;d.length||g&&a.display.currentWheelTarget||yf(h.lineDiv);var j=h.lineDiv,k=j.firstChild,m=d.shift(),n=b;for(a.doc.iter(b,c,function(b){if(m&&m.to==n&&(m=d.shift()),Qd(a.doc,b)){if(0!=b.height&&ze(b,0),b.widgets&&k&&k.previousSibling)for(var c=0;c<b.widgets.length;++c){var g=b.widgets[c];if(g.showIfHidden){var h=k.previousSibling;if(/pre/i.test(h.nodeName)){var o=xf("div",null,null,"position: relative");h.parentNode.replaceChild(o,h),o.appendChild(h),h=o}var p=h.appendChild(xf("div",[g.node],"CodeMirror-linewidget"));g.handleMouseEvents||(p.ignoreEvents=!0),$(g,p,h,f)}}}else if(m&&m.from<=n&&m.to>n){for(;k.lineObj!=b;)k=l(k);i&&n>=e&&k.lineNumber&&Af(k.lineNumber,Q(a.options,n)),k=k.nextSibling}else{if(b.widgets)for(var s,q=0,r=k;r&&20>q;++q,r=r.nextSibling)if(r.lineObj==b&&/div/i.test(r.nodeName)){s=r;break}var t=Z(a,b,n,f,s);if(t!=s)j.insertBefore(t,k);else{for(;k!=s;)k=l(k);k=k.nextSibling}t.lineObj=b}++n});k;)k=l(k)}function Z(a,b,d,e,f){var k,g=ge(a,b),h=g.pre,i=b.gutterMarkers,j=a.display,l=g.bgClass?g.bgClass+" "+(b.bgClass||""):b.bgClass;if(!(a.options.lineNumbers||i||l||b.wrapClass||b.widgets))return h;if(f){f.alignable=null;for(var q,m=!0,n=0,o=null,p=f.firstChild;p;p=q)if(q=p.nextSibling,/\bCodeMirror-linewidget\b/.test(p.className)){for(var r=0;r<b.widgets.length;++r){var s=b.widgets[r];if(s.node==p.firstChild){s.above||o||(o=p),$(s,p,f,e),++n;break}}if(r==b.widgets.length){m=!1;break}}else f.removeChild(p);f.insertBefore(h,o),m&&n==b.widgets.length&&(k=f,f.className=b.wrapClass||"")}if(k||(k=xf("div",null,b.wrapClass,"position: relative"),k.appendChild(h)),l&&k.insertBefore(xf("div",null,l+" CodeMirror-linebackground"),k.firstChild),a.options.lineNumbers||i){var t=k.insertBefore(xf("div",null,"CodeMirror-gutter-wrapper","position: absolute; left: "+(a.options.fixedGutter?e.fixedPos:-e.gutterTotalWidth)+"px"),h);if(a.options.fixedGutter&&(k.alignable||(k.alignable=[])).push(t),!a.options.lineNumbers||i&&i["CodeMirror-linenumbers"]||(k.lineNumber=t.appendChild(xf("div",Q(a.options,d),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+e.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+j.lineNumInnerWidth+"px"))),i)for(var u=0;u<a.options.gutters.length;++u){var v=a.options.gutters[u],w=i.hasOwnProperty(v)&&i[v];w&&t.appendChild(xf("div",[w],"CodeMirror-gutter-elt","left: "+e.gutterLeft[v]+"px; width: "+e.gutterWidth[v]+"px"))}}if(c&&(k.style.zIndex=2),b.widgets&&k!=f)for(var r=0,x=b.widgets;r<x.length;++r){var s=x[r],y=xf("div",[s.node],"CodeMirror-linewidget");s.handleMouseEvents||(y.ignoreEvents=!0),$(s,y,k,e),s.above?k.insertBefore(y,a.options.lineNumbers&&0!=b.height?t:h):k.appendChild(y),_e(s,"redraw")}return k}function $(a,b,c,d){if(a.noHScroll){(c.alignable||(c.alignable=[])).push(b);var e=d.wrapperWidth;b.style.left=d.fixedPos+"px",a.coverGutter||(e-=d.gutterTotalWidth,b.style.paddingLeft=d.gutterTotalWidth+"px"),b.style.width=e+"px"}a.coverGutter&&(b.style.zIndex=5,b.style.position="relative",a.noHScroll||(b.style.marginLeft=-d.gutterTotalWidth+"px"))}function _(a){var b=a.display,c=Fc(a.doc.sel.from,a.doc.sel.to);if(c||a.options.showCursorWhenSelecting?ab(a):b.cursor.style.display=b.otherCursor.style.display="none",c?b.selectionDiv.style.display="none":bb(a),a.options.moveInputWithCursor){var d=xb(a,a.doc.sel.head,"div"),e=Bf(b.wrapper),f=Bf(b.lineDiv);b.inputDiv.style.top=Math.max(0,Math.min(b.wrapper.clientHeight-10,d.top+f.top-e.top))+"px",b.inputDiv.style.left=Math.max(0,Math.min(b.wrapper.clientWidth-10,d.left+f.left-e.left))+"px"}}function ab(a){var b=a.display,c=xb(a,a.doc.sel.head,"div");b.cursor.style.left=c.left+"px",b.cursor.style.top=c.top+"px",b.cursor.style.height=Math.max(0,c.bottom-c.top)*a.options.cursorHeight+"px",b.cursor.style.display="",c.other?(b.otherCursor.style.display="",b.otherCursor.style.left=c.other.left+"px",b.otherCursor.style.top=c.other.top+"px",b.otherCursor.style.height=.85*(c.other.bottom-c.other.top)+"px"):b.otherCursor.style.display="none"}function bb(a){function h(a,b,c,d){0>b&&(b=0),e.appendChild(xf("div",null,"CodeMirror-selected","position: absolute; left: "+a+"px; top: "+b+"px; width: "+(null==c?f-a:c)+"px; height: "+(d-b)+"px"))}function i(b,d,e){function m(c,d){return wb(a,Ec(b,c),"div",i,d)}var k,l,i=we(c,b),j=i.text.length;return Mf(De(i),d||0,null==e?j:e,function(a,b,c){var n,o,p,i=m(a,"left");if(a==b)n=i,o=p=i.left;else{if(n=m(b-1,"right"),"rtl"==c){var q=i;i=n,n=q}o=i.left,p=n.right}null==d&&0==a&&(o=g),n.top-i.top>3&&(h(o,i.top,null,i.bottom),o=g,i.bottom<n.top&&h(o,i.bottom,null,n.top)),null==e&&b==j&&(p=f),(!k||i.top<k.top||i.top==k.top&&i.left<k.left)&&(k=i),(!l||n.bottom>l.bottom||n.bottom==l.bottom&&n.right>l.right)&&(l=n),g+1>o&&(o=g),h(o,n.top,p-o,n.bottom)}),{start:k,end:l}}var b=a.display,c=a.doc,d=a.doc.sel,e=document.createDocumentFragment(),f=b.lineSpace.offsetWidth,g=jb(a.display);if(d.from.line==d.to.line)i(d.from.line,d.from.ch,d.to.ch);else{var j=we(c,d.from.line),k=we(c,d.to.line),l=Pd(c,j)==Pd(c,k),m=i(d.from.line,d.from.ch,l?j.text.length:null).end,n=i(d.to.line,l?0:null,d.to.ch).start;l&&(m.top<n.top-2?(h(m.right,m.top,null,m.bottom),h(g,n.top,n.left,n.bottom)):h(m.right,m.top,n.left-m.right,m.bottom)),m.bottom<n.top&&h(g,m.bottom,null,n.top)}zf(b.selectionDiv,e),b.selectionDiv.style.display=""}function cb(a){if(a.state.focused){var b=a.display;clearInterval(b.blinker);var c=!0;b.cursor.style.visibility=b.otherCursor.style.visibility="",a.options.cursorBlinkRate>0&&(b.blinker=setInterval(function(){b.cursor.style.visibility=b.otherCursor.style.visibility=(c=!c)?"":"hidden"},a.options.cursorBlinkRate))}}function db(a,b){a.doc.mode.startState&&a.doc.frontier<a.display.showingTo&&a.state.highlight.set(b,rf(eb,a))}function eb(a){var b=a.doc;if(b.frontier<b.first&&(b.frontier=b.first),!(b.frontier>=a.display.showingTo)){var f,c=+new Date+a.options.workTime,d=ld(b.mode,gb(a,b.frontier)),e=[];b.iter(b.frontier,Math.min(b.first+b.size,a.display.showingTo+500),function(g){if(b.frontier>=a.display.showingFrom){var h=g.styles;g.styles=ae(a,g,d,!0);for(var i=!h||h.length!=g.styles.length,j=0;!i&&j<h.length;++j)i=h[j]!=g.styles[j];i&&(f&&f.end==b.frontier?f.end++:e.push(f={start:b.frontier,end:b.frontier+1})),g.stateAfter=ld(b.mode,d)}else ce(a,g.text,d),g.stateAfter=0==b.frontier%5?ld(b.mode,d):null;return++b.frontier,+new Date>c?(db(a,a.options.workDelay),!0):void 0}),e.length&&Hb(a,function(){for(var a=0;a<e.length;++a)Kb(this,e[a].start,e[a].end)})()}}function fb(a,b,c){for(var d,e,f=a.doc,g=c?-1:b-(a.doc.mode.innerMode?1e3:100),h=b;h>g;--h){if(h<=f.first)return f.first;var i=we(f,h-1);if(i.stateAfter&&(!c||h<=f.frontier))return h;var j=hf(i.text,null,a.options.tabSize);(null==e||d>j)&&(e=h-1,d=j)}return e}function gb(a,b,c){var d=a.doc,e=a.display;if(!d.mode.startState)return!0;var f=fb(a,b,c),g=f>d.first&&we(d,f-1).stateAfter;return g=g?ld(d.mode,g):md(d.mode),d.iter(f,b,function(c){ce(a,c.text,g);var h=f==b-1||0==f%5||f>=e.showingFrom&&f<e.showingTo;c.stateAfter=h?ld(d.mode,g):null,++f}),c&&(d.frontier=f),g}function hb(a){return a.lineSpace.offsetTop}function ib(a){return a.mover.offsetHeight-a.lineSpace.offsetHeight}function jb(a){var b=zf(a.measure,xf("pre",null,null,"text-align: left")).appendChild(xf("span","x"));return b.offsetLeft}function kb(a,b,c,d,e){var f=-1;if(d=d||nb(a,b),d.crude){var g=d.left+c*d.width;return{left:g,right:g+d.width,top:d.top,bottom:d.bottom}}for(var h=c;;h+=f){var i=d[h];if(i)break;0>f&&0==h&&(f=1)}return e=h>c?"left":c>h?"right":e,"left"==e&&i.leftSide?i=i.leftSide:"right"==e&&i.rightSide&&(i=i.rightSide),{left:c>h?i.right:i.left,right:h>c?i.left:i.right,top:i.top,bottom:i.bottom}}function lb(a,b){for(var c=a.display.measureLineCache,d=0;d<c.length;++d){var e=c[d];if(e.text==b.text&&e.markedSpans==b.markedSpans&&a.display.scroller.clientWidth==e.width&&e.classes==b.textClass+"|"+b.wrapClass)return e}}function mb(a,b){var c=lb(a,b);c&&(c.text=c.measure=c.markedSpans=null)}function nb(a,b){var c=lb(a,b);if(c)return c.measure;var d=ob(a,b),e=a.display.measureLineCache,f={text:b.text,width:a.display.scroller.clientWidth,markedSpans:b.markedSpans,measure:d,classes:b.textClass+"|"+b.wrapClass};return 16==e.length?e[++a.display.measureLineCachePos%16]=f:e.push(f),d}function ob(a,e){function t(a){var b=a.top-p.top,c=a.bottom-p.top;c>s&&(c=s),0>b&&(b=0);for(var d=q.length-2;d>=0;d-=2){var e=q[d],f=q[d+1];if(!(e>c||b>f)&&(b>=e&&f>=c||e>=b&&c>=f||Math.min(c,f)-Math.max(b,e)>=c-b>>1)){q[d]=Math.min(b,e),q[d+1]=Math.max(c,f);break}}return 0>d&&(d=q.length,q.push(b,c)),{left:a.left-p.left,right:a.right-p.left,top:d,bottom:null}}function u(a){a.bottom=q[a.top+1],a.top=q[a.top]}if(!a.options.lineWrapping&&e.text.length>=a.options.crudeMeasuringFrom)return pb(a,e);var f=a.display,g=qf(e.text.length),h=ge(a,e,g,!0).pre;if(b&&!c&&!a.options.lineWrapping&&h.childNodes.length>100){for(var i=document.createDocumentFragment(),j=10,k=h.childNodes.length,l=0,m=Math.ceil(k/j);m>l;++l){for(var n=xf("div",null,null,"display: inline-block"),o=0;j>o&&k;++o)n.appendChild(h.firstChild),--k;i.appendChild(n)}h.appendChild(i)}zf(f.measure,h);var p=Bf(f.lineDiv),q=[],r=qf(e.text.length),s=h.offsetHeight;d&&f.measure.first!=h&&zf(f.measure,h);for(var v,l=0;l<g.length;++l)if(v=g[l]){var w=v,x=null;if(/\bCodeMirror-widget\b/.test(v.className)&&v.getClientRects){1==v.firstChild.nodeType&&(w=v.firstChild);var y=w.getClientRects();y.length>1&&(x=r[l]=t(y[0]),x.rightSide=t(y[y.length-1]))}x||(x=r[l]=t(Bf(w))),v.measureRight&&(x.right=Bf(v.measureRight).left-p.left),v.leftSide&&(x.leftSide=t(Bf(v.leftSide)))}yf(a.display.measure);for(var v,l=0;l<r.length;++l)(v=r[l])&&(u(v),v.leftSide&&u(v.leftSide),v.rightSide&&u(v.rightSide));return r}function pb(a,b){var c=new Yd(b.text.slice(0,100),null);b.textClass&&(c.textClass=b.textClass);var d=ob(a,c),e=kb(a,c,0,d,"left"),f=kb(a,c,99,d,"right");return{crude:!0,top:e.top,left:e.left,bottom:e.bottom,width:(f.right-e.left)/100}}function qb(a,b){var c=!1;if(b.markedSpans)for(var d=0;d<b.markedSpans;++d){var e=b.markedSpans[d];!e.collapsed||null!=e.to&&e.to!=b.text.length||(c=!0)}var f=!c&&lb(a,b);if(f||b.text.length>=a.options.crudeMeasuringFrom)return kb(a,b,b.text.length,f&&f.measure,"right").right;var g=ge(a,b,null,!0).pre,h=g.appendChild(Hf(a.display.measure));return zf(a.display.measure,g),Bf(h).right-Bf(a.display.lineDiv).left}function rb(a){a.display.measureLineCache.length=a.display.measureLineCachePos=0,a.display.cachedCharWidth=a.display.cachedTextHeight=null,a.options.lineWrapping||(a.display.maxLineChanged=!0),a.display.lineNumChars=null}function sb(){return window.pageXOffset||(document.documentElement||document.body).scrollLeft}function tb(){return window.pageYOffset||(document.documentElement||document.body).scrollTop}function ub(a,b,c,d){if(b.widgets)for(var e=0;e<b.widgets.length;++e)if(b.widgets[e].above){var f=Wd(b.widgets[e]);c.top+=f,c.bottom+=f}if("line"==d)return c;d||(d="local");var g=Ce(a,b);if("local"==d?g+=hb(a.display):g-=a.display.viewOffset,"page"==d||"window"==d){var h=Bf(a.display.lineSpace);g+=h.top+("window"==d?0:tb());var i=h.left+("window"==d?0:sb());c.left+=i,c.right+=i}return c.top+=g,c.bottom+=g,c}function vb(a,b,c){if("div"==c)return b;var d=b.left,e=b.top;if("page"==c)d-=sb(),e-=tb();else if("local"==c||!c){var f=Bf(a.display.sizer);d+=f.left,e+=f.top}var g=Bf(a.display.lineSpace);return{left:d-g.left,top:e-g.top}}function wb(a,b,c,d,e){return d||(d=we(a.doc,b.line)),ub(a,d,kb(a,d,b.ch,null,e),c)}function xb(a,b,c,d,e){function f(b,f){var g=kb(a,d,b,e,f?"right":"left");return f?g.left=g.right:g.right=g.left,ub(a,d,g,c)}function g(a,b){var c=h[b],d=c.level%2;return a==Nf(c)&&b&&c.level<h[b-1].level?(c=h[--b],a=Of(c)-(c.level%2?0:1),d=!0):a==Of(c)&&b<h.length-1&&c.level<h[b+1].level&&(c=h[++b],a=Nf(c)-c.level%2,d=!1),d&&a==c.to&&a>c.from?f(a-1):f(a,d)}d=d||we(a.doc,b.line),e||(e=nb(a,d));var h=De(d),i=b.ch;if(!h)return f(i);var j=Vf(h,i),k=g(i,j);return null!=Uf&&(k.other=g(i,Uf)),k}function yb(a,b,c,d){var e=new Ec(a,b);return e.xRel=d,c&&(e.outside=!0),e}function zb(a,b,c){var d=a.doc;if(c+=a.display.viewOffset,0>c)return yb(d.first,0,!0,-1);var e=Be(d,c),f=d.first+d.size-1;if(e>f)return yb(d.first+d.size-1,we(d,f).text.length,!0,1);for(0>b&&(b=0);;){var g=we(d,e),h=Ab(a,g,e,b,c),i=Nd(g),j=i&&i.find();if(!i||!(h.ch>j.from.ch||h.ch==j.from.ch&&h.xRel>0))return h;e=j.to.line}}function Ab(a,b,c,d,e){function j(d){var e=xb(a,Ec(c,d),"line",b,i);return g=!0,f>e.bottom?e.left-h:f<e.top?e.left+h:(g=!1,e.left)}var f=e-Ce(a,b),g=!1,h=2*a.display.wrapper.clientWidth,i=nb(a,b),k=De(b),l=b.text.length,m=Pf(b),n=Qf(b),o=j(m),p=g,q=j(n),r=g;if(d>q)return yb(c,n,r,1);for(;;){if(k?n==m||n==Xf(b,m,1):1>=n-m){for(var s=o>d||q-d>=d-o?m:n,t=d-(s==m?o:q);wf(b.text.charAt(s));)++s;var u=yb(c,s,s==m?p:r,0>t?-1:t?1:0);return u}var v=Math.ceil(l/2),w=m+v;if(k){w=m;for(var x=0;v>x;++x)w=Xf(b,w,1)}var y=j(w);y>d?(n=w,q=y,(r=g)&&(q+=1e3),l=v):(m=w,o=y,p=g,l-=v)}}function Cb(a){if(null!=a.cachedTextHeight)return a.cachedTextHeight;if(null==Bb){Bb=xf("pre");for(var b=0;49>b;++b)Bb.appendChild(document.createTextNode("x")),Bb.appendChild(xf("br"));Bb.appendChild(document.createTextNode("x"))}zf(a.measure,Bb);var c=Bb.offsetHeight/50;return c>3&&(a.cachedTextHeight=c),yf(a.measure),c||1}function Db(a){if(null!=a.cachedCharWidth)return a.cachedCharWidth;var b=xf("span","x"),c=xf("pre",[b]);zf(a.measure,c);var d=b.offsetWidth;return d>2&&(a.cachedCharWidth=d),d||10}function Fb(a){a.curOp={changes:[],forceUpdate:!1,updateInput:null,userSelChange:null,textChanged:null,selectionChanged:!1,cursorActivity:!1,updateMaxLine:!1,updateScrollPos:!1,id:++Eb},$e++||(Ze=[])}function Gb(a){var b=a.curOp,c=a.doc,d=a.display;if(a.curOp=null,b.updateMaxLine&&K(a),d.maxLineChanged&&!a.options.lineWrapping&&d.maxLine){var e=qb(a,d.maxLine);d.sizer.style.minWidth=Math.max(0,e+3+ef)+"px",d.maxLineChanged=!1;var f=Math.max(0,d.sizer.offsetLeft+d.sizer.offsetWidth-d.scroller.clientWidth);f<c.scrollLeft&&!b.updateScrollPos&&cc(a,Math.min(d.scroller.scrollLeft,f),!0)}var g,h;if(b.updateScrollPos)g=b.updateScrollPos;else if(b.selectionChanged&&d.scroller.clientHeight){var i=xb(a,c.sel.head);g=Vc(a,i.left,i.top,i.left,i.bottom)}if((b.changes.length||b.forceUpdate||g&&null!=g.scrollTop)&&(h=S(a,b.changes,g&&g.scrollTop,b.forceUpdate),a.display.scroller.offsetHeight&&(a.doc.scrollTop=a.display.scroller.scrollTop)),!h&&b.selectionChanged&&_(a),b.updateScrollPos){var j=Math.max(0,Math.min(d.scroller.scrollHeight-d.scroller.clientHeight,g.scrollTop)),k=Math.max(0,Math.min(d.scroller.scrollWidth-d.scroller.clientWidth,g.scrollLeft));d.scroller.scrollTop=d.scrollbarV.scrollTop=c.scrollTop=j,d.scroller.scrollLeft=d.scrollbarH.scrollLeft=c.scrollLeft=k,O(a),b.scrollToPos&&Tc(a,Kc(a.doc,b.scrollToPos.from),Kc(a.doc,b.scrollToPos.to),b.scrollToPos.margin)}else g&&Sc(a);b.selectionChanged&&cb(a),a.state.focused&&b.updateInput&&Ob(a,b.userSelChange);var l=b.maybeHiddenMarkers,m=b.maybeUnhiddenMarkers;if(l)for(var n=0;n<l.length;++n)l[n].lines.length||Ye(l[n],"hide");if(m)for(var n=0;n<m.length;++n)m[n].lines.length&&Ye(m[n],"unhide");var o;if(--$e||(o=Ze,Ze=null),b.textChanged&&Ye(a,"change",a,b.textChanged),b.cursorActivity&&Ye(a,"cursorActivity",a),o)for(var n=0;n<o.length;++n)o[n]()}function Hb(a,b){return function(){var c=a||this,d=!c.curOp;d&&Fb(c);try{var e=b.apply(c,arguments)}finally{d&&Gb(c)}return e}}function Ib(a){return function(){var c,b=this.cm&&!this.cm.curOp;b&&Fb(this.cm);try{c=a.apply(this,arguments)}finally{b&&Gb(this.cm)}return c}}function Jb(a,b){var d,c=!a.curOp;c&&Fb(a);try{d=b()}finally{c&&Gb(a)}return d}function Kb(a,b,c,d){null==b&&(b=a.doc.first),null==c&&(c=a.doc.first+a.doc.size),a.curOp.changes.push({from:b,to:c,diff:d})}function Lb(a){a.display.pollingFast||a.display.poll.set(a.options.pollInterval,function(){Nb(a),a.state.focused&&Lb(a)})}function Mb(a){function c(){var d=Nb(a);d||b?(a.display.pollingFast=!1,Lb(a)):(b=!0,a.display.poll.set(60,c))}var b=!1;a.display.pollingFast=!0,a.display.poll.set(20,c)}function Nb(a){var b=a.display.input,c=a.display.prevInput,e=a.doc,g=e.sel;if(!a.state.focused||Jf(b)||Qb(a)||a.options.disableInput)return!1;a.state.pasteIncoming&&a.state.fakedLastChar&&(b.value=b.value.substring(0,b.value.length-1),a.state.fakedLastChar=!1);var h=b.value;if(h==c&&Fc(g.from,g.to))return!1;if(f&&!d&&a.display.inputHasSelection===h)return Ob(a,!0),!1;var i=!a.curOp;i&&Fb(a),g.shift=!1;for(var j=0,k=Math.min(c.length,h.length);k>j&&c.charCodeAt(j)==h.charCodeAt(j);)++j;var l=g.from,m=g.to,n=h.slice(j);j<c.length?l=Ec(l.line,l.ch-(c.length-j)):a.state.overwrite&&Fc(l,m)&&!a.state.pasteIncoming&&(m=Ec(m.line,Math.min(we(e,m.line).text.length,m.ch+n.length)));var o=a.curOp.updateInput,p={from:l,to:m,text:If(n),origin:a.state.pasteIncoming?"paste":a.state.cutIncoming?"cut":"+input"};if(xc(a.doc,p,"end"),a.curOp.updateInput=o,_e(a,"inputRead",a,p),n&&!a.state.pasteIncoming&&a.options.electricChars&&a.options.smartIndent&&g.head.ch<100){var q=a.getModeAt(g.head).electricChars;if(q)for(var r=0;r<q.length;r++)if(n.indexOf(q.charAt(r))>-1){Yc(a,g.head.line,"smart");break}}return h.length>1e3||h.indexOf("\n")>-1?b.value=a.display.prevInput="":a.display.prevInput=h,i&&Gb(a),a.state.pasteIncoming=a.state.cutIncoming=!1,!0}function Ob(a,b){var c,e,g=a.doc;if(Fc(g.sel.from,g.sel.to))b&&(a.display.prevInput=a.display.input.value="",f&&!d&&(a.display.inputHasSelection=null));else{a.display.prevInput="",c=Kf&&(g.sel.to.line-g.sel.from.line>100||(e=a.getSelection()).length>1e3);var h=c?"-":e||a.getSelection();a.display.input.value=h,a.state.focused&&mf(a.display.input),f&&!d&&(a.display.inputHasSelection=h)}a.display.inaccurateSelection=c}function Pb(a){"nocursor"==a.options.readOnly||q&&document.activeElement==a.display.input||a.display.input.focus()}function Qb(a){return a.options.readOnly||a.doc.cantEdit}function Rb(a){function e(){a.state.focused&&setTimeout(rf(Pb,a),0)}function i(){null==h&&(h=setTimeout(function(){h=null,c.cachedCharWidth=c.cachedTextHeight=Ef=null,rb(a),Jb(a,rf(Kb,a))},100))}function j(){for(var a=c.wrapper.parentNode;a&&a!=document.body;a=a.parentNode);a?setTimeout(j,5e3):Xe(window,"resize",i)}function k(b){af(a,b)||a.options.onDragEvent&&a.options.onDragEvent(a,Pe(b))||Te(b)}function m(b){c.inaccurateSelection&&(c.prevInput="",c.inaccurateSelection=!1,c.input.value=a.getSelection(),mf(c.input)),"cut"==b.type&&(a.state.cutIncoming=!0)}var c=a.display;We(c.scroller,"mousedown",Hb(a,Wb)),b?We(c.scroller,"dblclick",Hb(a,function(b){if(!af(a,b)){var c=Tb(a,b);if(c&&!Zb(a,b)&&!Sb(a.display,b)){Qe(b);var d=ad(we(a.doc,c.line).text,c);Nc(a.doc,d.from,d.to)}}})):We(c.scroller,"dblclick",function(b){af(a,b)||Qe(b)}),We(c.lineSpace,"selectstart",function(a){Sb(c,a)||Qe(a)}),v||We(c.scroller,"contextmenu",function(b){sc(a,b)}),We(c.scroller,"scroll",function(){c.scroller.clientHeight&&(bc(a,c.scroller.scrollTop),cc(a,c.scroller.scrollLeft,!0),Ye(a,"scroll",a))}),We(c.scrollbarV,"scroll",function(){c.scroller.clientHeight&&bc(a,c.scrollbarV.scrollTop)}),We(c.scrollbarH,"scroll",function(){c.scroller.clientHeight&&cc(a,c.scrollbarH.scrollLeft)}),We(c.scroller,"mousewheel",function(b){fc(a,b)}),We(c.scroller,"DOMMouseScroll",function(b){fc(a,b)}),We(c.scrollbarH,"mousedown",e),We(c.scrollbarV,"mousedown",e),We(c.wrapper,"scroll",function(){c.wrapper.scrollTop=c.wrapper.scrollLeft=0});var h;We(window,"resize",i),setTimeout(j,5e3),We(c.input,"keyup",Hb(a,lc)),We(c.input,"input",function(){f&&!d&&a.display.inputHasSelection&&(a.display.inputHasSelection=null),Mb(a)}),We(c.input,"keydown",Hb(a,nc)),We(c.input,"keypress",Hb(a,oc)),We(c.input,"focus",rf(pc,a)),We(c.input,"blur",rf(qc,a)),a.options.dragDrop&&(We(c.scroller,"dragstart",function(b){ac(a,b)}),We(c.scroller,"dragenter",k),We(c.scroller,"dragover",k),We(c.scroller,"drop",Hb(a,_b))),We(c.scroller,"paste",function(b){Sb(c,b)||(Pb(a),Mb(a))}),We(c.input,"paste",function(){if(g&&!a.state.fakedLastChar&&!(new Date-a.state.lastMiddleDown<200)){var b=c.input.selectionStart,d=c.input.selectionEnd;c.input.value+="$",c.input.selectionStart=b,c.input.selectionEnd=d,a.state.fakedLastChar=!0}a.state.pasteIncoming=!0,Mb(a)}),We(c.input,"cut",m),We(c.input,"copy",m),l&&We(c.sizer,"mouseup",function(){document.activeElement==c.input&&c.input.blur(),Pb(a)})}function Sb(a,b){for(var c=Ue(b);c!=a.wrapper;c=c.parentNode)if(!c||c.ignoreEvents||c.parentNode==a.sizer&&c!=a.mover)return!0}function Tb(a,b,c){var d=a.display;
if(!c){var e=Ue(b);if(e==d.scrollbarH||e==d.scrollbarH.firstChild||e==d.scrollbarV||e==d.scrollbarV.firstChild||e==d.scrollbarFiller||e==d.gutterFiller)return null}var f,g,h=Bf(d.lineSpace);try{f=b.clientX,g=b.clientY}catch(b){return null}return zb(a,f-h.left,g-h.top)}function Wb(a){function r(a){if(!Fc(q,a)){if(q=a,"single"==k)return Nc(c.doc,Kc(f,i),a),void 0;if(o=Kc(f,o),p=Kc(f,p),"double"==k){var b=ad(we(f,a.line).text,a);Gc(a,o)?Nc(c.doc,b.from,p):Nc(c.doc,o,b.to)}else"triple"==k&&(Gc(a,o)?Nc(c.doc,p,Kc(f,Ec(a.line,0))):Nc(c.doc,o,Kc(f,Ec(a.line+1,0))))}}function u(a){var b=++t,d=Tb(c,a,!0);if(d)if(Fc(d,m)){var h=a.clientY<s.top?-20:a.clientY>s.bottom?20:0;h&&setTimeout(Hb(c,function(){t==b&&(e.scroller.scrollTop+=h,u(a))}),50)}else{c.state.focused||pc(c),m=d,r(d);var g=N(e,f);(d.line>=g.to||d.line<g.from)&&setTimeout(Hb(c,function(){t==b&&u(a)}),150)}}function w(a){t=1/0,Qe(a),Pb(c),Xe(document,"mousemove",x),Xe(document,"mouseup",y)}if(!af(this,a)){var c=this,e=c.display,f=c.doc,h=f.sel;if(h.shift=a.shiftKey,Sb(e,a))return g||(e.scroller.draggable=!1,setTimeout(function(){e.scroller.draggable=!0},100)),void 0;if(!Zb(c,a)){var i=Tb(c,a);switch(window.focus(),Ve(a)){case 3:return v&&sc.call(c,c,a),void 0;case 2:return g&&(c.state.lastMiddleDown=+new Date),i&&Nc(c.doc,i),setTimeout(rf(Pb,c),20),Qe(a),void 0}if(!i)return Ue(a)==e.scroller&&Qe(a),void 0;c.state.focused||pc(c);var j=+new Date,k="single";if(Vb&&Vb.time>j-400&&Fc(Vb.pos,i))k="triple",Qe(a),setTimeout(rf(Pb,c),20),bd(c,i.line);else if(Ub&&Ub.time>j-400&&Fc(Ub.pos,i)){k="double",Vb={time:j,pos:i},Qe(a);var l=ad(we(f,i.line).text,i);Nc(c.doc,l.from,l.to)}else Ub={time:j,pos:i};var m=i;if(c.options.dragDrop&&Cf&&!Qb(c)&&!Fc(h.from,h.to)&&!Gc(i,h.from)&&!Gc(h.to,i)&&"single"==k){var n=Hb(c,function(f){g&&(e.scroller.draggable=!1),c.state.draggingText=!1,Xe(document,"mouseup",n),Xe(e.scroller,"drop",n),Math.abs(a.clientX-f.clientX)+Math.abs(a.clientY-f.clientY)<10&&(Qe(f),Nc(c.doc,i),Pb(c),b&&!d&&setTimeout(function(){document.body.focus(),Pb(c)},20))});return g&&(e.scroller.draggable=!0),c.state.draggingText=n,e.scroller.dragDrop&&e.scroller.dragDrop(),We(document,"mouseup",n),We(e.scroller,"drop",n),void 0}Qe(a),"single"==k&&Nc(c.doc,Kc(f,i));var o=h.from,p=h.to,q=i,s=Bf(e.wrapper),t=0,x=Hb(c,function(a){b||Ve(a)?u(a):w(a)}),y=Hb(c,w);We(document,"mousemove",x),We(document,"mouseup",y)}}}function Xb(a,b,c,d,e){try{var f=b.clientX,g=b.clientY}catch(b){return!1}if(f>=Math.floor(Bf(a.display.gutters).right))return!1;d&&Qe(b);var h=a.display,i=Bf(h.lineDiv);if(g>i.bottom||!cf(a,c))return Se(b);g-=i.top-h.viewOffset;for(var j=0;j<a.options.gutters.length;++j){var k=h.gutters.childNodes[j];if(k&&Bf(k).right>=f){var l=Be(a.doc,g),m=a.options.gutters[j];return e(a,c,a,l,m,b),Se(b)}}}function Yb(a,b){return cf(a,"gutterContextMenu")?Xb(a,b,"gutterContextMenu",!1,Ye):!1}function Zb(a,b){return Xb(a,b,"gutterClick",!0,_e)}function _b(a){var b=this;if(!(af(b,a)||Sb(b.display,a)||b.options.onDragEvent&&b.options.onDragEvent(b,Pe(a)))){Qe(a),f&&($b=+new Date);var c=Tb(b,a,!0),d=a.dataTransfer.files;if(c&&!Qb(b))if(d&&d.length&&window.FileReader&&window.File)for(var e=d.length,g=Array(e),h=0,i=function(a,d){var f=new FileReader;f.onload=function(){g[d]=f.result,++h==e&&(c=Kc(b.doc,c),xc(b.doc,{from:c,to:c,text:If(g.join("\n")),origin:"paste"},"around"))},f.readAsText(a)},j=0;e>j;++j)i(d[j],j);else{if(b.state.draggingText&&!Gc(c,b.doc.sel.from)&&!Gc(b.doc.sel.to,c))return b.state.draggingText(a),setTimeout(rf(Pb,b),20),void 0;try{var g=a.dataTransfer.getData("Text");if(g){var k=b.doc.sel.from,l=b.doc.sel.to;Pc(b.doc,c,c),b.state.draggingText&&Dc(b.doc,"",k,l,"paste"),b.replaceSelection(g,null,"paste"),Pb(b)}}catch(a){}}}}function ac(a,b){if(f&&(!a.state.draggingText||+new Date-$b<100))return Te(b),void 0;if(!af(a,b)&&!Sb(a.display,b)){var c=a.getSelection();if(b.dataTransfer.setData("Text",c),b.dataTransfer.setDragImage&&!k){var d=xf("img",null,null,"position: fixed; left: 0; top: 0;");d.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",j&&(d.width=d.height=1,a.display.wrapper.appendChild(d),d._top=d.offsetTop),b.dataTransfer.setDragImage(d,0,0),j&&d.parentNode.removeChild(d)}}}function bc(b,c){Math.abs(b.doc.scrollTop-c)<2||(b.doc.scrollTop=c,a||S(b,[],c),b.display.scroller.scrollTop!=c&&(b.display.scroller.scrollTop=c),b.display.scrollbarV.scrollTop!=c&&(b.display.scrollbarV.scrollTop=c),a&&S(b,[]),db(b,100))}function cc(a,b,c){(c?b==a.doc.scrollLeft:Math.abs(a.doc.scrollLeft-b)<2)||(b=Math.min(b,a.display.scroller.scrollWidth-a.display.scroller.clientWidth),a.doc.scrollLeft=b,O(a),a.display.scroller.scrollLeft!=b&&(a.display.scroller.scrollLeft=b),a.display.scrollbarH.scrollLeft!=b&&(a.display.scrollbarH.scrollLeft=b))}function fc(b,c){var d=c.wheelDeltaX,e=c.wheelDeltaY;null==d&&c.detail&&c.axis==c.HORIZONTAL_AXIS&&(d=c.detail),null==e&&c.detail&&c.axis==c.VERTICAL_AXIS?e=c.detail:null==e&&(e=c.wheelDelta);var f=b.display,h=f.scroller;if(d&&h.scrollWidth>h.clientWidth||e&&h.scrollHeight>h.clientHeight){if(e&&r&&g)for(var i=c.target;i!=h;i=i.parentNode)if(i.lineObj){b.display.currentWheelTarget=i;break}if(d&&!a&&!j&&null!=ec)return e&&bc(b,Math.max(0,Math.min(h.scrollTop+e*ec,h.scrollHeight-h.clientHeight))),cc(b,Math.max(0,Math.min(h.scrollLeft+d*ec,h.scrollWidth-h.clientWidth))),Qe(c),f.wheelStartX=null,void 0;if(e&&null!=ec){var k=e*ec,l=b.doc.scrollTop,m=l+f.wrapper.clientHeight;0>k?l=Math.max(0,l+k-50):m=Math.min(b.doc.height,m+k+50),S(b,[],{top:l,bottom:m})}20>dc&&(null==f.wheelStartX?(f.wheelStartX=h.scrollLeft,f.wheelStartY=h.scrollTop,f.wheelDX=d,f.wheelDY=e,setTimeout(function(){if(null!=f.wheelStartX){var a=h.scrollLeft-f.wheelStartX,b=h.scrollTop-f.wheelStartY,c=b&&f.wheelDY&&b/f.wheelDY||a&&f.wheelDX&&a/f.wheelDX;f.wheelStartX=f.wheelStartY=null,c&&(ec=(ec*dc+c)/(dc+1),++dc)}},200)):(f.wheelDX+=d,f.wheelDY+=e))}}function gc(a,b,c){if("string"==typeof b&&(b=nd[b],!b))return!1;a.display.pollingFast&&Nb(a)&&(a.display.pollingFast=!1);var d=a.doc,e=d.sel.shift,f=!1;try{Qb(a)&&(a.state.suppressEdits=!0),c&&(d.sel.shift=!1),f=b(a)!=ff}finally{d.sel.shift=e,a.state.suppressEdits=!1}return f}function hc(a){var b=a.state.keyMaps.slice(0);return a.options.extraKeys&&b.push(a.options.extraKeys),b.push(a.options.keyMap),b}function jc(a,b){var c=pd(a.options.keyMap),e=c.auto;clearTimeout(ic),e&&!rd(b)&&(ic=setTimeout(function(){pd(a.options.keyMap)==c&&(a.options.keyMap=e.call?e.call(null,a):e,F(a))},50));var f=sd(b,!0),g=!1;if(!f)return!1;var h=hc(a);return g=b.shiftKey?qd("Shift-"+f,h,function(b){return gc(a,b,!0)})||qd(f,h,function(b){return("string"==typeof b?/^go[A-Z]/.test(b):b.motion)?gc(a,b):void 0}):qd(f,h,function(b){return gc(a,b)}),g&&(Qe(b),cb(a),d&&(b.oldKeyCode=b.keyCode,b.keyCode=0),_e(a,"keyHandled",a,f,b)),g}function kc(a,b,c){var d=qd("'"+c+"'",hc(a),function(b){return gc(a,b,!0)});return d&&(Qe(b),cb(a),_e(a,"keyHandled",a,"'"+c+"'",b)),d}function lc(a){var b=this;af(b,a)||b.options.onKeyEvent&&b.options.onKeyEvent(b,Pe(a))||16==a.keyCode&&(b.doc.sel.shift=!1)}function nc(a){var c=this;if(c.state.focused||pc(c),!(af(c,a)||c.options.onKeyEvent&&c.options.onKeyEvent(c,Pe(a)))){b&&27==a.keyCode&&(a.returnValue=!1);var d=a.keyCode;c.doc.sel.shift=16==d||a.shiftKey;var e=jc(c,a);j&&(mc=e?d:null,!e&&88==d&&!Kf&&(r?a.metaKey:a.ctrlKey)&&c.replaceSelection(""))}}function oc(a){var b=this;if(!(af(b,a)||b.options.onKeyEvent&&b.options.onKeyEvent(b,Pe(a)))){var c=a.keyCode,e=a.charCode;if(j&&c==mc)return mc=null,Qe(a),void 0;if(!(j&&(!a.which||a.which<10)||l)||!jc(b,a)){var g=String.fromCharCode(null==e?c:e);kc(b,a,g)||(f&&!d&&(b.display.inputHasSelection=null),Mb(b))}}}function pc(a){"nocursor"!=a.options.readOnly&&(a.state.focused||(Ye(a,"focus",a),a.state.focused=!0,-1==a.display.wrapper.className.search(/\bCodeMirror-focused\b/)&&(a.display.wrapper.className+=" CodeMirror-focused"),a.curOp||(Ob(a,!0),g&&setTimeout(rf(Ob,a,!0),0))),Lb(a),cb(a))}function qc(a){a.state.focused&&(Ye(a,"blur",a),a.state.focused=!1,a.display.wrapper.className=a.display.wrapper.className.replace(" CodeMirror-focused","")),clearInterval(a.display.blinker),setTimeout(function(){a.state.focused||(a.doc.sel.shift=!1)},150)}function sc(a,b){function l(){if(null!=c.input.selectionStart){var a=c.input.value="\u200b"+(Fc(e.from,e.to)?"":c.input.value);c.prevInput="\u200b",c.input.selectionStart=1,c.input.selectionEnd=a.length}}function m(){if(c.inputDiv.style.position="relative",c.input.style.cssText=k,d&&(c.scrollbarV.scrollTop=c.scroller.scrollTop=h),Lb(a),null!=c.input.selectionStart){(!f||d)&&l(),clearTimeout(rc);var b=0,e=function(){"\u200b"==c.prevInput&&0==c.input.selectionStart?Hb(a,nd.selectAll)(a):b++<10?rc=setTimeout(e,500):Ob(a)};rc=setTimeout(e,200)}}if(!af(a,b,"contextmenu")){var c=a.display,e=a.doc.sel;if(!Sb(c,b)&&!Yb(a,b)){var g=Tb(a,b),h=c.scroller.scrollTop;if(g&&!j){var i=a.options.resetSelectionOnContextMenu;i&&(Fc(e.from,e.to)||Gc(g,e.from)||!Gc(g,e.to))&&Hb(a,Pc)(a.doc,g,g);var k=c.input.style.cssText;if(c.inputDiv.style.position="absolute",c.input.style.cssText="position: fixed; width: 30px; height: 30px; top: "+(b.clientY-5)+"px; left: "+(b.clientX-5)+"px; z-index: 1000; background: transparent; outline: none;"+"border-width: 0; outline: none; overflow: hidden; opacity: .05; -ms-opacity: .05; filter: alpha(opacity=5);",Pb(a),Ob(a,!0),Fc(e.from,e.to)&&(c.input.value=c.prevInput=" "),f&&!d&&l(),v){Te(b);var n=function(){Xe(window,"mouseup",n),setTimeout(m,20)};We(window,"mouseup",n)}else setTimeout(m,50)}}}}function uc(a,b,c){if(!Gc(b.from,c))return Kc(a,c);var d=b.text.length-1-(b.to.line-b.from.line);if(c.line>b.to.line+d){var e=c.line-d,f=a.first+a.size-1;return e>f?Ec(f,we(a,f).text.length):Lc(c,we(a,e).text.length)}if(c.line==b.to.line+d)return Lc(c,lf(b.text).length+(1==b.text.length?b.from.ch:0)+we(a,b.to.line).text.length-b.to.ch);var g=c.line-b.from.line;return Lc(c,b.text[g].length+(g?0:b.from.ch))}function vc(a,b,c){if(c&&"object"==typeof c)return{anchor:uc(a,b,c.anchor),head:uc(a,b,c.head)};if("start"==c)return{anchor:b.from,head:b.from};var d=tc(b);if("around"==c)return{anchor:b.from,head:d};if("end"==c)return{anchor:d,head:d};var e=function(a){if(Gc(a,b.from))return a;if(!Gc(b.to,a))return d;var c=a.line+b.text.length-(b.to.line-b.from.line)-1,e=a.ch;return a.line==b.to.line&&(e+=d.ch-b.to.ch),Ec(c,e)};return{anchor:e(a.sel.anchor),head:e(a.sel.head)}}function wc(a,b,c){var d={canceled:!1,from:b.from,to:b.to,text:b.text,origin:b.origin,cancel:function(){this.canceled=!0}};return c&&(d.update=function(b,c,d,e){b&&(this.from=Kc(a,b)),c&&(this.to=Kc(a,c)),d&&(this.text=d),void 0!==e&&(this.origin=e)}),Ye(a,"beforeChange",a,d),a.cm&&Ye(a.cm,"beforeChange",a.cm,d),d.canceled?null:{from:d.from,to:d.to,text:d.text,origin:d.origin}}function xc(a,b,c,d){if(a.cm){if(!a.cm.curOp)return Hb(a.cm,xc)(a,b,c,d);if(a.cm.state.suppressEdits)return}if(!(cf(a,"beforeChange")||a.cm&&cf(a.cm,"beforeChange"))||(b=wc(a,b,!0))){var e=w&&!d&&Hd(a,b.from,b.to);if(e){for(var f=e.length-1;f>=1;--f)yc(a,{from:e[f].from,to:e[f].to,text:[""]});e.length&&yc(a,{from:e[0].from,to:e[0].to,text:b.text},c)}else yc(a,b,c)}}function yc(a,b,c){if(1!=b.text.length||""!=b.text[0]||!Fc(b.from,b.to)){var d=vc(a,b,c);He(a,b,d,a.cm?a.cm.curOp.id:0/0),Bc(a,b,d,Ed(a,b));var e=[];ue(a,function(a,c){c||-1!=nf(e,a.history)||(Ne(a.history,b),e.push(a.history)),Bc(a,b,null,Ed(a,b))})}}function zc(a,b){if(!a.cm||!a.cm.state.suppressEdits){var c=a.history,d=("undo"==b?c.done:c.undone).pop();if(d){var e={changes:[],anchorBefore:d.anchorAfter,headBefore:d.headAfter,anchorAfter:d.anchorBefore,headAfter:d.headBefore,generation:c.generation};("undo"==b?c.undone:c.done).push(e),c.generation=d.generation||++c.maxGeneration;for(var f=cf(a,"beforeChange")||a.cm&&cf(a.cm,"beforeChange"),g=d.changes.length-1;g>=0;--g){var h=d.changes[g];if(h.origin=b,f&&!wc(a,h,!1))return("undo"==b?c.done:c.undone).length=0,void 0;e.changes.push(Ge(a,h));var i=g?vc(a,h,null):{anchor:d.anchorBefore,head:d.headBefore};Bc(a,h,i,Gd(a,h));var j=[];ue(a,function(a,b){b||-1!=nf(j,a.history)||(Ne(a.history,h),j.push(a.history)),Bc(a,h,null,Gd(a,h))})}}}}function Ac(a,b){function c(a){return Ec(a.line+b,a.ch)}a.first+=b,a.cm&&Kb(a.cm,a.first,a.first,b),a.sel.head=c(a.sel.head),a.sel.anchor=c(a.sel.anchor),a.sel.from=c(a.sel.from),a.sel.to=c(a.sel.to)}function Bc(a,b,c,d){if(a.cm&&!a.cm.curOp)return Hb(a.cm,Bc)(a,b,c,d);if(b.to.line<a.first)return Ac(a,b.text.length-1-(b.to.line-b.from.line)),void 0;if(!(b.from.line>a.lastLine())){if(b.from.line<a.first){var e=b.text.length-1-(a.first-b.from.line);Ac(a,e),b={from:Ec(a.first,0),to:Ec(b.to.line+e,b.to.ch),text:[lf(b.text)],origin:b.origin}}var f=a.lastLine();b.to.line>f&&(b={from:b.from,to:Ec(f,we(a,f).text.length),text:[b.text[0]],origin:b.origin}),b.removed=xe(a,b.from,b.to),c||(c=vc(a,b,null)),a.cm?Cc(a.cm,b,d,c):ne(a,b,d,c)}}function Cc(a,b,c,d){var e=a.doc,f=a.display,g=b.from,h=b.to,i=!1,j=g.line;a.options.lineWrapping||(j=Ae(Pd(e,we(e,g.line))),e.iter(j,h.line+1,function(a){return a==f.maxLine?(i=!0,!0):void 0})),Gc(e.sel.head,b.from)||Gc(b.to,e.sel.head)||(a.curOp.cursorActivity=!0),ne(e,b,c,d,D(a)),a.options.lineWrapping||(e.iter(j,g.line+b.text.length,function(a){var b=J(e,a);b>f.maxLineLength&&(f.maxLine=a,f.maxLineLength=b,f.maxLineChanged=!0,i=!1)}),i&&(a.curOp.updateMaxLine=!0)),e.frontier=Math.min(e.frontier,g.line),db(a,400);var k=b.text.length-(h.line-g.line)-1;if(Kb(a,g.line,h.line+1,k),cf(a,"change")){var l={from:g,to:h,text:b.text,removed:b.removed,origin:b.origin};if(a.curOp.textChanged){for(var m=a.curOp.textChanged;m.next;m=m.next);m.next=l}else a.curOp.textChanged=l}}function Dc(a,b,c,d,e){if(d||(d=c),Gc(d,c)){var f=d;d=c,c=f}"string"==typeof b&&(b=If(b)),xc(a,{from:c,to:d,text:b,origin:e},null)}function Ec(a,b){return this instanceof Ec?(this.line=a,this.ch=b,void 0):new Ec(a,b)}function Fc(a,b){return a.line==b.line&&a.ch==b.ch}function Gc(a,b){return a.line<b.line||a.line==b.line&&a.ch<b.ch}function Hc(a,b){return a.line-b.line||a.ch-b.ch}function Ic(a){return Ec(a.line,a.ch)}function Jc(a,b){return Math.max(a.first,Math.min(b,a.first+a.size-1))}function Kc(a,b){if(b.line<a.first)return Ec(a.first,0);var c=a.first+a.size-1;return b.line>c?Ec(c,we(a,c).text.length):Lc(b,we(a,b.line).text.length)}function Lc(a,b){var c=a.ch;return null==c||c>b?Ec(a.line,b):0>c?Ec(a.line,0):a}function Mc(a,b){return b>=a.first&&b<a.first+a.size}function Nc(a,b,c,d){if(a.sel.shift||a.sel.extend){var e=a.sel.anchor;if(c){var f=Gc(b,e);f!=Gc(c,e)?(e=b,b=c):f!=Gc(b,c)&&(b=c)}Pc(a,e,b,d)}else Pc(a,b,c||b,d);a.cm&&(a.cm.curOp.userSelChange=!0)}function Oc(a,b,c){var d={anchor:b,head:c};return Ye(a,"beforeSelectionChange",a,d),a.cm&&Ye(a.cm,"beforeSelectionChange",a.cm,d),d.anchor=Kc(a,d.anchor),d.head=Kc(a,d.head),d}function Pc(a,b,c,d,e){if(!e&&cf(a,"beforeSelectionChange")||a.cm&&cf(a.cm,"beforeSelectionChange")){var f=Oc(a,b,c);c=f.head,b=f.anchor}var g=a.sel;if(g.goalColumn=null,null==d&&(d=Gc(c,g.head)?-1:1),(e||!Fc(b,g.anchor))&&(b=Rc(a,b,d,"push"!=e)),(e||!Fc(c,g.head))&&(c=Rc(a,c,d,"push"!=e)),!Fc(g.anchor,b)||!Fc(g.head,c)){g.anchor=b,g.head=c;var h=Gc(c,b);g.from=h?c:b,g.to=h?b:c,a.cm&&(a.cm.curOp.updateInput=a.cm.curOp.selectionChanged=a.cm.curOp.cursorActivity=!0),_e(a,"cursorActivity",a)}}function Qc(a){Pc(a.doc,a.doc.sel.from,a.doc.sel.to,null,"push")}function Rc(a,b,c,d){var e=!1,f=b,g=c||1;a.cantEdit=!1;a:for(;;){var h=we(a,f.line);if(h.markedSpans)for(var i=0;i<h.markedSpans.length;++i){var j=h.markedSpans[i],k=j.marker;if((null==j.from||(k.inclusiveLeft?j.from<=f.ch:j.from<f.ch))&&(null==j.to||(k.inclusiveRight?j.to>=f.ch:j.to>f.ch))){if(d&&(Ye(k,"beforeCursorEnter"),k.explicitlyCleared)){if(h.markedSpans){--i;continue}break}if(!k.atomic)continue;var l=k.find()[0>g?"from":"to"];if(Fc(l,f)&&(l.ch+=g,l.ch<0?l=l.line>a.first?Kc(a,Ec(l.line-1)):null:l.ch>h.text.length&&(l=l.line<a.first+a.size-1?Ec(l.line+1,0):null),!l)){if(e)return d?(a.cantEdit=!0,Ec(a.first,0)):Rc(a,b,c,!0);e=!0,l=b,g=-g}f=l;continue a}}return f}}function Sc(a){var b=Tc(a,a.doc.sel.head,null,a.options.cursorScrollMargin);if(a.state.focused){var c=a.display,d=Bf(c.sizer),e=null;if(b.top+d.top<0?e=!0:b.bottom+d.top>(window.innerHeight||document.documentElement.clientHeight)&&(e=!1),null!=e&&!o){var f=xf("div","\u200b",null,"position: absolute; top: "+(b.top-c.viewOffset)+"px; height: "+(b.bottom-b.top+ef)+"px; left: "+b.left+"px; width: 2px;");a.display.lineSpace.appendChild(f),f.scrollIntoView(e),a.display.lineSpace.removeChild(f)}}}function Tc(a,b,c,d){for(null==d&&(d=0);;){var e=!1,f=xb(a,b),g=c&&c!=b?xb(a,c):f,h=Vc(a,Math.min(f.left,g.left),Math.min(f.top,g.top)-d,Math.max(f.left,g.left),Math.max(f.bottom,g.bottom)+d),i=a.doc.scrollTop,j=a.doc.scrollLeft;if(null!=h.scrollTop&&(bc(a,h.scrollTop),Math.abs(a.doc.scrollTop-i)>1&&(e=!0)),null!=h.scrollLeft&&(cc(a,h.scrollLeft),Math.abs(a.doc.scrollLeft-j)>1&&(e=!0)),!e)return f}}function Uc(a,b,c,d,e){var f=Vc(a,b,c,d,e);null!=f.scrollTop&&bc(a,f.scrollTop),null!=f.scrollLeft&&cc(a,f.scrollLeft)}function Vc(a,b,c,d,e){var f=a.display,g=Cb(a.display);0>c&&(c=0);var h=f.scroller.clientHeight-ef,i=f.scroller.scrollTop,j={},k=a.doc.height+ib(f),l=g>c,m=e>k-g;if(i>c)j.scrollTop=l?0:c;else if(e>i+h){var n=Math.min(c,(m?k:e)-h);n!=i&&(j.scrollTop=n)}var o=f.scroller.clientWidth-ef,p=f.scroller.scrollLeft;b+=f.gutters.offsetWidth,d+=f.gutters.offsetWidth;var q=f.gutters.offsetWidth,r=q+10>b;return p+q>b||r?(r&&(b=0),j.scrollLeft=Math.max(0,b-10-q)):d>o+p-3&&(j.scrollLeft=d+10-o),j}function Wc(a,b,c){a.curOp.updateScrollPos={scrollLeft:null==b?a.doc.scrollLeft:b,scrollTop:null==c?a.doc.scrollTop:c}}function Xc(a,b,c){var d=a.curOp.updateScrollPos||(a.curOp.updateScrollPos={scrollLeft:a.doc.scrollLeft,scrollTop:a.doc.scrollTop}),e=a.display.scroller;d.scrollTop=Math.max(0,Math.min(e.scrollHeight-e.clientHeight,d.scrollTop+c)),d.scrollLeft=Math.max(0,Math.min(e.scrollWidth-e.clientWidth,d.scrollLeft+b))}function Yc(a,b,c,d){var f,e=a.doc;null==c&&(c="add"),"smart"==c&&(a.doc.mode.indent?f=gb(a,b):c="prev");var g=a.options.tabSize,h=we(e,b),i=hf(h.text,null,g);h.stateAfter&&(h.stateAfter=null);var k,j=h.text.match(/^\s*/)[0];if(d||/\S/.test(h.text)){if("smart"==c&&(k=a.doc.mode.indent(f,h.text.slice(j.length),h.text),k==ff)){if(!d)return;c="prev"}}else k=0,c="not";"prev"==c?k=b>e.first?hf(we(e,b-1).text,null,g):0:"add"==c?k=i+a.options.indentUnit:"subtract"==c?k=i-a.options.indentUnit:"number"==typeof c&&(k=i+c),k=Math.max(0,k);var l="",m=0;if(a.options.indentWithTabs)for(var n=Math.floor(k/g);n;--n)m+=g,l+="	";k>m&&(l+=kf(k-m)),l!=j?Dc(a.doc,l,Ec(b,0),Ec(b,j.length),"+input"):e.sel.head.line==b&&e.sel.head.ch<j.length&&Pc(e,Ec(b,j.length),Ec(b,j.length),1),h.stateAfter=null}function Zc(a,b,c){var d=b,e=b,f=a.doc;return"number"==typeof b?e=we(f,Jc(f,b)):d=Ae(b),null==d?null:c(e,d)?(Kb(a,d,d+1),e):null}function $c(a,b,c,d,e){function k(){var b=f+c;return b<a.first||b>=a.first+a.size?j=!1:(f=b,i=we(a,b))}function l(a){var b=(e?Xf:Yf)(i,g,c,!0);if(null==b){if(a||!k())return j=!1;g=e?(0>c?Qf:Pf)(i):0>c?i.text.length:0}else g=b;return!0}var f=b.line,g=b.ch,h=c,i=we(a,f),j=!0;if("char"==d)l();else if("column"==d)l(!0);else if("word"==d||"group"==d)for(var m=null,n="group"==d,o=!0;!(0>c)||l(!o);o=!1){var p=i.text.charAt(g)||"\n",q=tf(p)?"w":n?/\s/.test(p)?null:"p":null;if(m&&m!=q){0>c&&(c=1,l());break}if(q&&(m=q),c>0&&!l(!o))break}var r=Rc(a,Ec(f,g),h,!0);return j||(r.hitSide=!0),r}function _c(a,b,c,d){var g,e=a.doc,f=b.left;if("page"==d){var h=Math.min(a.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight);g=b.top+c*(h-(0>c?1.5:.5)*Cb(a.display))}else"line"==d&&(g=c>0?b.bottom+3:b.top-3);for(;;){var i=zb(a,f,g);if(!i.outside)break;if(0>c?0>=g:g>=e.height){i.hitSide=!0;break}g+=5*c}return i}function ad(a,b){var c=b.ch,d=b.ch;if(a){(b.xRel<0||d==a.length)&&c?--c:++d;for(var e=a.charAt(c),f=tf(e)?tf:/\s/.test(e)?function(a){return/\s/.test(a)}:function(a){return!/\s/.test(a)&&!tf(a)};c>0&&f(a.charAt(c-1));)--c;for(;d<a.length&&f(a.charAt(d));)++d}return{from:Ec(b.line,c),to:Ec(b.line,d)}}function bd(a,b){Nc(a.doc,Ec(b,0),Kc(a.doc,Ec(b+1,0)))}function ed(a,b,c,d){y.defaults[a]=b,c&&(cd[a]=d?function(a,b,d){d!=fd&&c(a,b,d)}:c)}function ld(a,b){if(b===!0)return b;if(a.copyState)return a.copyState(b);var c={};for(var d in b){var e=b[d];e instanceof Array&&(e=e.concat([])),c[d]=e}return c}function md(a,b,c){return a.startState?a.startState(b,c):!0}function pd(a){return"string"==typeof a?od[a]:a}function qd(a,b,c){function d(b){b=pd(b);var e=b[a];if(e===!1)return"stop";if(null!=e&&c(e))return!0;if(b.nofallthrough)return"stop";var f=b.fallthrough;if(null==f)return!1;if("[object Array]"!=Object.prototype.toString.call(f))return d(f);for(var g=0,h=f.length;h>g;++g){var i=d(f[g]);if(i)return i}return!1}for(var e=0;e<b.length;++e){var f=d(b[e]);if(f)return"stop"!=f}}function rd(a){var b=Lf[a.keyCode];return"Ctrl"==b||"Alt"==b||"Shift"==b||"Mod"==b}function sd(a,b){if(j&&34==a.keyCode&&a["char"])return!1;var c=Lf[a.keyCode];return null==c||a.altGraphKey?!1:(a.altKey&&(c="Alt-"+c),(u?a.metaKey:a.ctrlKey)&&(c="Ctrl-"+c),(u?a.ctrlKey:a.metaKey)&&(c="Cmd-"+c),!b&&a.shiftKey&&(c="Shift-"+c),c)}function td(a,b){this.pos=this.start=0,this.string=a,this.tabSize=b||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0}function ud(a,b){this.lines=[],this.type=b,this.doc=a}function wd(a,b,c,d,e){if(d&&d.shared)return yd(a,b,c,d,e);if(a.cm&&!a.cm.curOp)return Hb(a.cm,wd)(a,b,c,d,e);var f=new ud(a,e);if(d&&pf(d,f),Gc(c,b)||Fc(b,c)&&f.clearWhenEmpty!==!1)return f;if(f.replacedWith&&(f.collapsed=!0,f.replacedWith=xf("span",[f.replacedWith],"CodeMirror-widget"),d.handleMouseEvents||(f.replacedWith.ignoreEvents=!0)),f.collapsed){if(Od(a,b.line,b,c,f)||b.line!=c.line&&Od(a,c.line,b,c,f))throw new Error("Inserting collapsed marker partially overlapping an existing one");x=!0}f.addToHistory&&He(a,{from:b,to:c,origin:"markText"},{head:a.sel.head,anchor:a.sel.anchor},0/0);var i,g=b.line,h=a.cm;return a.iter(g,c.line+1,function(d){h&&f.collapsed&&!h.options.lineWrapping&&Pd(a,d)==h.display.maxLine&&(i=!0);var e={from:null,to:null,marker:f};g==b.line&&(e.from=b.ch),g==c.line&&(e.to=c.ch),f.collapsed&&g!=b.line&&ze(d,0),Bd(d,e),++g}),f.collapsed&&a.iter(b.line,c.line+1,function(b){Qd(a,b)&&ze(b,0)}),f.clearOnEnter&&We(f,"beforeCursorEnter",function(){f.clear()}),f.readOnly&&(w=!0,(a.history.done.length||a.history.undone.length)&&a.clearHistory()),f.collapsed&&(f.id=++vd,f.atomic=!0),h&&(i&&(h.curOp.updateMaxLine=!0),(f.className||f.title||f.startStyle||f.endStyle||f.collapsed)&&Kb(h,b.line,c.line+1),f.atomic&&Qc(h)),f}function xd(a,b){this.markers=a,this.primary=b;for(var c=0,d=this;c<a.length;++c)a[c].parent=this,We(a[c],"clear",function(){d.clear()})}function yd(a,b,c,d,e){d=pf(d),d.shared=!1;var f=[wd(a,b,c,d,e)],g=f[0],h=d.replacedWith;return ue(a,function(a){h&&(d.replacedWith=h.cloneNode(!0)),f.push(wd(a,Kc(a,b),Kc(a,c),d,e));for(var i=0;i<a.linked.length;++i)if(a.linked[i].isParent)return;g=lf(f)}),new xd(f,g)}function zd(a,b){if(a)for(var c=0;c<a.length;++c){var d=a[c];if(d.marker==b)return d}}function Ad(a,b){for(var c,d=0;d<a.length;++d)a[d]!=b&&(c||(c=[])).push(a[d]);return c}function Bd(a,b){a.markedSpans=a.markedSpans?a.markedSpans.concat([b]):[b],b.marker.attachLine(a)}function Cd(a,b,c){if(a)for(var e,d=0;d<a.length;++d){var f=a[d],g=f.marker,h=null==f.from||(g.inclusiveLeft?f.from<=b:f.from<b);if(h||f.from==b&&"bookmark"==g.type&&(!c||!f.marker.insertLeft)){var i=null==f.to||(g.inclusiveRight?f.to>=b:f.to>b);(e||(e=[])).push({from:f.from,to:i?null:f.to,marker:g})}}return e}function Dd(a,b,c){if(a)for(var e,d=0;d<a.length;++d){var f=a[d],g=f.marker,h=null==f.to||(g.inclusiveRight?f.to>=b:f.to>b);if(h||f.from==b&&"bookmark"==g.type&&(!c||f.marker.insertLeft)){var i=null==f.from||(g.inclusiveLeft?f.from<=b:f.from<b);(e||(e=[])).push({from:i?null:f.from-b,to:null==f.to?null:f.to-b,marker:g})}}return e}function Ed(a,b){var c=Mc(a,b.from.line)&&we(a,b.from.line).markedSpans,d=Mc(a,b.to.line)&&we(a,b.to.line).markedSpans;if(!c&&!d)return null;var e=b.from.ch,f=b.to.ch,g=Fc(b.from,b.to),h=Cd(c,e,g),i=Dd(d,f,g),j=1==b.text.length,k=lf(b.text).length+(j?e:0);if(h)for(var l=0;l<h.length;++l){var m=h[l];if(null==m.to){var n=zd(i,m.marker);n?j&&(m.to=null==n.to?null:n.to+k):m.to=e}}if(i)for(var l=0;l<i.length;++l){var m=i[l];if(null!=m.to&&(m.to+=k),null==m.from){var n=zd(h,m.marker);n||(m.from=k,j&&(h||(h=[])).push(m))}else m.from+=k,j&&(h||(h=[])).push(m)}h&&(h=Fd(h)),i&&i!=h&&(i=Fd(i));var o=[h];if(!j){var q,p=b.text.length-2;if(p>0&&h)for(var l=0;l<h.length;++l)null==h[l].to&&(q||(q=[])).push({from:null,to:null,marker:h[l].marker});for(var l=0;p>l;++l)o.push(q);o.push(i)}return o}function Fd(a){for(var b=0;b<a.length;++b){var c=a[b];null!=c.from&&c.from==c.to&&c.marker.clearWhenEmpty!==!1&&a.splice(b--,1)}return a.length?a:null}function Gd(a,b){var c=Je(a,b),d=Ed(a,b);if(!c)return d;if(!d)return c;for(var e=0;e<c.length;++e){var f=c[e],g=d[e];if(f&&g)a:for(var h=0;h<g.length;++h){for(var i=g[h],j=0;j<f.length;++j)if(f[j].marker==i.marker)continue a;f.push(i)}else g&&(c[e]=g)}return c}function Hd(a,b,c){var d=null;if(a.iter(b.line,c.line+1,function(a){if(a.markedSpans)for(var b=0;b<a.markedSpans.length;++b){var c=a.markedSpans[b].marker;!c.readOnly||d&&-1!=nf(d,c)||(d||(d=[])).push(c)}}),!d)return null;for(var e=[{from:b,to:c}],f=0;f<d.length;++f)for(var g=d[f],h=g.find(),i=0;i<e.length;++i){var j=e[i];if(!Gc(j.to,h.from)&&!Gc(h.to,j.from)){var k=[i,1];(Gc(j.from,h.from)||!g.inclusiveLeft&&Fc(j.from,h.from))&&k.push({from:j.from,to:h.from}),(Gc(h.to,j.to)||!g.inclusiveRight&&Fc(j.to,h.to))&&k.push({from:h.to,to:j.to}),e.splice.apply(e,k),i+=k.length-1}}return e}function Id(a){return a.inclusiveLeft?-1:0}function Jd(a){return a.inclusiveRight?1:0}function Kd(a,b){var c=a.lines.length-b.lines.length;if(0!=c)return c;var d=a.find(),e=b.find(),f=Hc(d.from,e.from)||Id(a)-Id(b);if(f)return-f;var g=Hc(d.to,e.to)||Jd(a)-Jd(b);return g?g:b.id-a.id}function Ld(a,b){var d,c=x&&a.markedSpans;if(c)for(var e,f=0;f<c.length;++f)e=c[f],e.marker.collapsed&&null==(b?e.from:e.to)&&(!d||Kd(d,e.marker)<0)&&(d=e.marker);return d}function Md(a){return Ld(a,!0)}function Nd(a){return Ld(a,!1)}function Od(a,b,c,d,e){var f=we(a,b),g=x&&f.markedSpans;if(g)for(var h=0;h<g.length;++h){var i=g[h];if(i.marker.collapsed){var j=i.marker.find(!0),k=Hc(j.from,c)||Id(i.marker)-Id(e),l=Hc(j.to,d)||Jd(i.marker)-Jd(e);if(!(k>=0&&0>=l||0>=k&&l>=0)&&(0>=k&&(Hc(j.to,c)||Jd(i.marker)-Id(e))>0||k>=0&&(Hc(j.from,d)||Id(i.marker)-Jd(e))<0))return!0}}}function Pd(a,b){for(var c;c=Md(b);)b=we(a,c.find().from.line);return b}function Qd(a,b){var c=x&&b.markedSpans;if(c)for(var d,e=0;e<c.length;++e)if(d=c[e],d.marker.collapsed){if(null==d.from)return!0;if(!d.marker.replacedWith&&0==d.from&&d.marker.inclusiveLeft&&Rd(a,b,d))return!0}}function Rd(a,b,c){if(null==c.to){var d=c.marker.find().to,e=we(a,d.line);return Rd(a,e,zd(e.markedSpans,c.marker))}if(c.marker.inclusiveRight&&c.to==b.text.length)return!0;for(var f,g=0;g<b.markedSpans.length;++g)if(f=b.markedSpans[g],f.marker.collapsed&&!f.marker.replacedWith&&f.from==c.to&&(null==f.to||f.to!=c.from)&&(f.marker.inclusiveLeft||c.marker.inclusiveRight)&&Rd(a,b,f))return!0}function Sd(a){var b=a.markedSpans;if(b){for(var c=0;c<b.length;++c)b[c].marker.detachLine(a);a.markedSpans=null}}function Td(a,b){if(b){for(var c=0;c<b.length;++c)b[c].marker.attachLine(a);a.markedSpans=b}}function Vd(a){return function(){var b=!this.cm.curOp;b&&Fb(this.cm);try{var c=a.apply(this,arguments)}finally{b&&Gb(this.cm)}return c}}function Wd(a){return null!=a.height?a.height:(a.node.parentNode&&1==a.node.parentNode.nodeType||zf(a.cm.display.measure,xf("div",[a.node],null,"position: relative")),a.height=a.node.offsetHeight)}function Xd(a,b,c,d){var e=new Ud(a,c,d);return e.noHScroll&&(a.display.alignWidgets=!0),Zc(a,b,function(b){var c=b.widgets||(b.widgets=[]);if(null==e.insertAt?c.push(e):c.splice(Math.min(c.length-1,Math.max(0,e.insertAt)),0,e),e.line=b,!Qd(a.doc,b)||e.showIfHidden){var d=Ce(a,b)<a.doc.scrollTop;ze(b,b.height+Wd(e)),d&&Xc(a,0,e.height)}return!0}),e}function Zd(a,b,c,d){a.text=b,a.stateAfter&&(a.stateAfter=null),a.styles&&(a.styles=null),null!=a.order&&(a.order=null),Sd(a),Td(a,c);var e=d?d(a):1;e!=a.height&&ze(a,e)}function $d(a){a.parent=null,Sd(a)}function _d(a,b,c,d,e,f){var g=c.flattenSpans;null==g&&(g=a.options.flattenSpans);var k,h=0,i=null,j=new td(b,a.options.tabSize);for(""==b&&c.blankLine&&c.blankLine(d);!j.eol();){if(j.pos>a.options.maxHighlightLength?(g=!1,f&&ce(a,b,d,j.pos),j.pos=b.length,k=null):k=c.token(j,d),a.options.addModeClass){var l=y.innerMode(c,d).mode.name;l&&(k="m-"+(k?l+" "+k:l))}g&&i==k||(h<j.start&&e(j.start,i),h=j.start,i=k),j.start=j.pos}for(;h<j.pos;){var m=Math.min(j.pos,h+5e4);e(m,i),h=m}}function ae(a,b,c,d){var e=[a.state.modeGen];_d(a,b.text,a.doc.mode,c,function(a,b){e.push(a,b)},d);for(var f=0;f<a.state.overlays.length;++f){var g=a.state.overlays[f],h=1,i=0;_d(a,b.text,g.mode,!0,function(a,b){for(var c=h;a>i;){var d=e[h];d>a&&e.splice(h,1,a,e[h+1],d),h+=2,i=Math.min(a,d)}if(b)if(g.opaque)e.splice(c,h-c,a,b),h=c+2;else for(;h>c;c+=2){var f=e[c+1];e[c+1]=f?f+" "+b:b}})}return e}function be(a,b){return b.styles&&b.styles[0]==a.state.modeGen||(b.styles=ae(a,b,b.stateAfter=gb(a,Ae(b)))),b.styles}function ce(a,b,c,d){var e=a.doc.mode,f=new td(b,a.options.tabSize);for(f.start=f.pos=d||0,""==b&&e.blankLine&&e.blankLine(c);!f.eol()&&f.pos<=a.options.maxHighlightLength;)e.token(f,c),f.start=f.pos}function fe(a,b){if(!a)return null;for(;;){var c=a.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!c)break;a=a.slice(0,c.index)+a.slice(c.index+c[0].length);var d=c[1]?"bgClass":"textClass";null==b[d]?b[d]=c[2]:new RegExp("(?:^|s)"+c[2]+"(?:$|s)").test(b[d])||(b[d]+=" "+c[2])}if(/^\s*$/.test(a))return null;var e=b.cm.options.addModeClass?ee:de;return e[a]||(e[a]=a.replace(/\S+/g,"cm-$&"))}function ge(a,b,c,d){for(var e,h=b,i=!0;e=Md(h);)h=we(a.doc,e.find().from.line);var j={pre:xf("pre"),col:0,pos:0,measure:null,measuredSomething:!1,cm:a,copyWidgets:d};do{h.text&&(i=!1),j.measure=h==b&&c,j.pos=0,j.addToken=j.measure?je:ie,(f||g)&&a.getOption("lineWrapping")&&(j.addToken=ke(j.addToken));var k=me(h,j,be(a,h));c&&h==b&&!j.measuredSomething&&(c[0]=j.pre.appendChild(Hf(a.display.measure)),j.measuredSomething=!0),k&&(h=we(a.doc,k.to.line))}while(k);!c||j.measuredSomething||c[0]||(c[0]=j.pre.appendChild(i?xf("span","\xa0"):Hf(a.display.measure))),j.pre.firstChild||Qd(a.doc,b)||j.pre.appendChild(document.createTextNode("\xa0"));var l;if(c&&f&&(l=De(h))){var m=l.length-1;l[m].from==l[m].to&&--m;var n=l[m],o=l[m-1];if(n.from+1==n.to&&o&&n.level<o.level){var p=c[j.pos-1];p&&p.parentNode.insertBefore(p.measureRight=Hf(a.display.measure),p.nextSibling)}}var q=j.textClass?j.textClass+" "+(b.textClass||""):b.textClass;return q&&(j.pre.className=q),Ye(a,"renderLine",a,b,j.pre),j}function he(a){var b=xf("span","\u2022","cm-invalidchar");return b.title="\\u"+a.charCodeAt(0).toString(16),b}function ie(a,b,c,d,e,f){if(b){var g=a.cm.options.specialChars;if(g.test(b))for(var h=document.createDocumentFragment(),i=0;;){g.lastIndex=i;var j=g.exec(b),k=j?j.index-i:b.length-i;if(k&&(h.appendChild(document.createTextNode(b.slice(i,i+k))),a.col+=k),!j)break;if(i+=k+1,"	"==j[0]){var l=a.cm.options.tabSize,m=l-a.col%l;h.appendChild(xf("span",kf(m),"cm-tab")),a.col+=m}else{var n=a.cm.options.specialCharPlaceholder(j[0]);h.appendChild(n),a.col+=1}}else{a.col+=b.length;var h=document.createTextNode(b)}if(c||d||e||a.measure){var o=c||"";d&&(o+=d),e&&(o+=e);var n=xf("span",[h],o);return f&&(n.title=f),a.pre.appendChild(n)}a.pre.appendChild(h)}}function je(a,c,d,e,f){for(var g=a.cm.options.lineWrapping,h=0;h<c.length;++h){for(var i=0==h,j=h+1;j<c.length&&wf(c.charAt(j));)++j;var k=c.slice(h,j);h=j-1,h&&g&&Df(c,h)&&a.pre.appendChild(xf("wbr"));
var l=a.measure[a.pos],m=a.measure[a.pos]=ie(a,k,d,i&&e,h==c.length-1&&f);l&&(m.leftSide=l.leftSide||l),b&&g&&" "==k&&h&&!/\s/.test(c.charAt(h-1))&&h<c.length-1&&!/\s/.test(c.charAt(h+1))&&(m.style.whiteSpace="normal"),a.pos+=k.length}c.length&&(a.measuredSomething=!0)}function ke(a){function b(a){for(var b=" ",c=0;c<a.length-2;++c)b+=c%2?" ":"\xa0";return b+=" "}return function(c,d,e,f,g,h){return a(c,d.replace(/ {3,}/g,b),e,f,g,h)}}function le(a,b,c,d){var e=!d&&c.replacedWith;if(e&&(a.copyWidgets&&(e=e.cloneNode(!0)),a.pre.appendChild(e),a.measure)){if(b)a.measure[a.pos]=e;else{var f=Hf(a.cm.display.measure);if("bookmark"!=c.type||c.insertLeft){if(a.measure[a.pos])return;a.measure[a.pos]=a.pre.insertBefore(f,e)}else a.measure[a.pos]=a.pre.appendChild(f)}a.measuredSomething=!0}a.pos+=b}function me(a,b,c){var d=a.markedSpans,e=a.text,f=0;if(d)for(var k,m,n,o,p,q,h=e.length,i=0,g=1,j="",l=0;;){if(l==i){m=n=o=p="",q=null,l=1/0;for(var r=[],s=0;s<d.length;++s){var t=d[s],u=t.marker;t.from<=i&&(null==t.to||t.to>i)?(null!=t.to&&l>t.to&&(l=t.to,n=""),u.className&&(m+=" "+u.className),u.startStyle&&t.from==i&&(o+=" "+u.startStyle),u.endStyle&&t.to==l&&(n+=" "+u.endStyle),u.title&&!p&&(p=u.title),u.collapsed&&(!q||Kd(q.marker,u)<0)&&(q=t)):t.from>i&&l>t.from&&(l=t.from),"bookmark"==u.type&&t.from==i&&u.replacedWith&&r.push(u)}if(q&&(q.from||0)==i&&(le(b,(null==q.to?h:q.to)-i,q.marker,null==q.from),null==q.to))return q.marker.find();if(!q&&r.length)for(var s=0;s<r.length;++s)le(b,0,r[s])}if(i>=h)break;for(var v=Math.min(h,l);;){if(j){var w=i+j.length;if(!q){var x=w>v?j.slice(0,v-i):j;b.addToken(b,x,k?k+m:m,o,i+x.length==l?n:"",p)}if(w>=v){j=j.slice(v-i),i=v;break}i=w,o=""}j=e.slice(f,f=c[g++]),k=fe(c[g++],b)}}else for(var g=1;g<c.length;g+=2)b.addToken(b,e.slice(f,f=c[g]),fe(c[g+1],b))}function ne(a,b,c,d,e){function f(a){return c?c[a]:null}function g(a,c,d){Zd(a,c,d,e),_e(a,"change",a,b)}var h=b.from,i=b.to,j=b.text,k=we(a,h.line),l=we(a,i.line),m=lf(j),n=f(j.length-1),o=i.line-h.line;if(0!=h.ch||0!=i.ch||""!=m||a.cm&&!a.cm.options.wholeLineUpdateBefore)if(k==l)if(1==j.length)g(k,k.text.slice(0,h.ch)+m+k.text.slice(i.ch),n);else{for(var r=[],p=1,q=j.length-1;q>p;++p)r.push(new Yd(j[p],f(p),e));r.push(new Yd(m+k.text.slice(i.ch),n,e)),g(k,k.text.slice(0,h.ch)+j[0],f(0)),a.insert(h.line+1,r)}else if(1==j.length)g(k,k.text.slice(0,h.ch)+j[0]+l.text.slice(i.ch),f(0)),a.remove(h.line+1,o);else{g(k,k.text.slice(0,h.ch)+j[0],f(0)),g(l,m+l.text.slice(i.ch),n);for(var p=1,q=j.length-1,r=[];q>p;++p)r.push(new Yd(j[p],f(p),e));o>1&&a.remove(h.line+1,o-1),a.insert(h.line+1,r)}else{for(var p=0,q=j.length-1,r=[];q>p;++p)r.push(new Yd(j[p],f(p),e));g(l,l.text,n),o&&a.remove(h.line,o),r.length&&a.insert(h.line,r)}_e(a,"change",a,b),Pc(a,d.anchor,d.head,null,!0)}function oe(a){this.lines=a,this.parent=null;for(var b=0,c=a.length,d=0;c>b;++b)a[b].parent=this,d+=a[b].height;this.height=d}function pe(a){this.children=a;for(var b=0,c=0,d=0,e=a.length;e>d;++d){var f=a[d];b+=f.chunkSize(),c+=f.height,f.parent=this}this.size=b,this.height=c,this.parent=null}function ue(a,b,c){function d(a,e,f){if(a.linked)for(var g=0;g<a.linked.length;++g){var h=a.linked[g];if(h.doc!=e){var i=f&&h.sharedHist;(!c||i)&&(b(h.doc,i),d(h.doc,a,i))}}}d(a,null,!0)}function ve(a,b){if(b.cm)throw new Error("This document is already in use.");a.doc=b,b.cm=a,E(a),A(a),a.options.lineWrapping||K(a),a.options.mode=b.modeOption,Kb(a)}function we(a,b){for(b-=a.first;!a.lines;)for(var c=0;;++c){var d=a.children[c],e=d.chunkSize();if(e>b){a=d;break}b-=e}return a.lines[b]}function xe(a,b,c){var d=[],e=b.line;return a.iter(b.line,c.line+1,function(a){var f=a.text;e==c.line&&(f=f.slice(0,c.ch)),e==b.line&&(f=f.slice(b.ch)),d.push(f),++e}),d}function ye(a,b,c){var d=[];return a.iter(b,c,function(a){d.push(a.text)}),d}function ze(a,b){for(var c=b-a.height,d=a;d;d=d.parent)d.height+=c}function Ae(a){if(null==a.parent)return null;for(var b=a.parent,c=nf(b.lines,a),d=b.parent;d;b=d,d=d.parent)for(var e=0;d.children[e]!=b;++e)c+=d.children[e].chunkSize();return c+b.first}function Be(a,b){var c=a.first;a:do{for(var d=0,e=a.children.length;e>d;++d){var f=a.children[d],g=f.height;if(g>b){a=f;continue a}b-=g,c+=f.chunkSize()}return c}while(!a.lines);for(var d=0,e=a.lines.length;e>d;++d){var h=a.lines[d],i=h.height;if(i>b)break;b-=i}return c+d}function Ce(a,b){b=Pd(a.doc,b);for(var c=0,d=b.parent,e=0;e<d.lines.length;++e){var f=d.lines[e];if(f==b)break;c+=f.height}for(var g=d.parent;g;d=g,g=d.parent)for(var e=0;e<g.children.length;++e){var h=g.children[e];if(h==d)break;c+=h.height}return c}function De(a){var b=a.order;return null==b&&(b=a.order=Zf(a.text)),b}function Ee(a){return{done:[],undone:[],undoDepth:1/0,lastTime:0,lastOp:null,lastOrigin:null,generation:a||1,maxGeneration:a||1}}function Fe(a,b,c,d){var e=b["spans_"+a.id],f=0;a.iter(Math.max(a.first,c),Math.min(a.first+a.size,d),function(c){c.markedSpans&&((e||(e=b["spans_"+a.id]={}))[f]=c.markedSpans),++f})}function Ge(a,b){var c={line:b.from.line,ch:b.from.ch},d={from:c,to:tc(b),text:xe(a,b.from,b.to)};return Fe(a,d,b.from.line,b.to.line+1),ue(a,function(a){Fe(a,d,b.from.line,b.to.line+1)},!0),d}function He(a,b,c,d){var e=a.history;e.undone.length=0;var f=+new Date,g=lf(e.done);if(g&&(e.lastOp==d||e.lastOrigin==b.origin&&b.origin&&("+"==b.origin.charAt(0)&&a.cm&&e.lastTime>f-a.cm.options.historyEventDelay||"*"==b.origin.charAt(0)))){var h=lf(g.changes);Fc(b.from,b.to)&&Fc(b.from,h.to)?h.to=tc(b):g.changes.push(Ge(a,b)),g.anchorAfter=c.anchor,g.headAfter=c.head}else for(g={changes:[Ge(a,b)],generation:e.generation,anchorBefore:a.sel.anchor,headBefore:a.sel.head,anchorAfter:c.anchor,headAfter:c.head},e.done.push(g);e.done.length>e.undoDepth;)e.done.shift();e.generation=++e.maxGeneration,e.lastTime=f,e.lastOp=d,e.lastOrigin=b.origin,h||Ye(a,"historyAdded")}function Ie(a){if(!a)return null;for(var c,b=0;b<a.length;++b)a[b].marker.explicitlyCleared?c||(c=a.slice(0,b)):c&&c.push(a[b]);return c?c.length?c:null:a}function Je(a,b){var c=b["spans_"+a.id];if(!c)return null;for(var d=0,e=[];d<b.text.length;++d)e.push(Ie(c[d]));return e}function Ke(a,b){for(var c=0,d=[];c<a.length;++c){var e=a[c],f=e.changes,g=[];d.push({changes:g,anchorBefore:e.anchorBefore,headBefore:e.headBefore,anchorAfter:e.anchorAfter,headAfter:e.headAfter});for(var h=0;h<f.length;++h){var j,i=f[h];if(g.push({from:i.from,to:i.to,text:i.text}),b)for(var k in i)(j=k.match(/^spans_(\d+)$/))&&nf(b,Number(j[1]))>-1&&(lf(g)[k]=i[k],delete i[k])}}return d}function Le(a,b,c,d){c<a.line?a.line+=d:b<a.line&&(a.line=b,a.ch=0)}function Me(a,b,c,d){for(var e=0;e<a.length;++e){for(var f=a[e],g=!0,h=0;h<f.changes.length;++h){var i=f.changes[h];if(f.copied||(i.from=Ic(i.from),i.to=Ic(i.to)),c<i.from.line)i.from.line+=d,i.to.line+=d;else if(b<=i.to.line){g=!1;break}}f.copied||(f.anchorBefore=Ic(f.anchorBefore),f.headBefore=Ic(f.headBefore),f.anchorAfter=Ic(f.anchorAfter),f.readAfter=Ic(f.headAfter),f.copied=!0),g?(Le(f.anchorBefore),Le(f.headBefore),Le(f.anchorAfter),Le(f.headAfter)):(a.splice(0,e+1),e=0)}}function Ne(a,b){var c=b.from.line,d=b.to.line,e=b.text.length-(d-c)-1;Me(a.done,c,d,e),Me(a.undone,c,d,e)}function Oe(){Te(this)}function Pe(a){return a.stop||(a.stop=Oe),a}function Qe(a){a.preventDefault?a.preventDefault():a.returnValue=!1}function Re(a){a.stopPropagation?a.stopPropagation():a.cancelBubble=!0}function Se(a){return null!=a.defaultPrevented?a.defaultPrevented:0==a.returnValue}function Te(a){Qe(a),Re(a)}function Ue(a){return a.target||a.srcElement}function Ve(a){var b=a.which;return null==b&&(1&a.button?b=1:2&a.button?b=3:4&a.button&&(b=2)),r&&a.ctrlKey&&1==b&&(b=3),b}function We(a,b,c){if(a.addEventListener)a.addEventListener(b,c,!1);else if(a.attachEvent)a.attachEvent("on"+b,c);else{var d=a._handlers||(a._handlers={}),e=d[b]||(d[b]=[]);e.push(c)}}function Xe(a,b,c){if(a.removeEventListener)a.removeEventListener(b,c,!1);else if(a.detachEvent)a.detachEvent("on"+b,c);else{var d=a._handlers&&a._handlers[b];if(!d)return;for(var e=0;e<d.length;++e)if(d[e]==c){d.splice(e,1);break}}}function Ye(a,b){var c=a._handlers&&a._handlers[b];if(c)for(var d=Array.prototype.slice.call(arguments,2),e=0;e<c.length;++e)c[e].apply(null,d)}function _e(a,b){function e(a){return function(){a.apply(null,d)}}var c=a._handlers&&a._handlers[b];if(c){var d=Array.prototype.slice.call(arguments,2);Ze||(++$e,Ze=[],setTimeout(bf,0));for(var f=0;f<c.length;++f)Ze.push(e(c[f]))}}function af(a,b,c){return Ye(a,c||b.type,a,b),Se(b)||b.codemirrorIgnore}function bf(){--$e;var a=Ze;Ze=null;for(var b=0;b<a.length;++b)a[b]()}function cf(a,b){var c=a._handlers&&a._handlers[b];return c&&c.length>0}function df(a){a.prototype.on=function(a,b){We(this,a,b)},a.prototype.off=function(a,b){Xe(this,a,b)}}function gf(){this.id=null}function hf(a,b,c,d,e){null==b&&(b=a.search(/[^\s\u00a0]/),-1==b&&(b=a.length));for(var f=d||0,g=e||0;b>f;++f)"	"==a.charAt(f)?g+=c-g%c:++g;return g}function kf(a){for(;jf.length<=a;)jf.push(lf(jf)+" ");return jf[a]}function lf(a){return a[a.length-1]}function mf(a){if(p)a.selectionStart=0,a.selectionEnd=a.value.length;else try{a.select()}catch(b){}}function nf(a,b){if(a.indexOf)return a.indexOf(b);for(var c=0,d=a.length;d>c;++c)if(a[c]==b)return c;return-1}function of(a,b){function c(){}c.prototype=a;var d=new c;return b&&pf(b,d),d}function pf(a,b){b||(b={});for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}function qf(a){for(var b=[],c=0;a>c;++c)b.push(void 0);return b}function rf(a){var b=Array.prototype.slice.call(arguments,1);return function(){return a.apply(null,b)}}function tf(a){return/\w/.test(a)||a>"\x80"&&(a.toUpperCase()!=a.toLowerCase()||sf.test(a))}function uf(a){for(var b in a)if(a.hasOwnProperty(b)&&a[b])return!1;return!0}function wf(a){return a.charCodeAt(0)>=768&&vf.test(a)}function xf(a,b,c,d){var e=document.createElement(a);if(c&&(e.className=c),d&&(e.style.cssText=d),"string"==typeof b)Af(e,b);else if(b)for(var f=0;f<b.length;++f)e.appendChild(b[f]);return e}function yf(a){for(var b=a.childNodes.length;b>0;--b)a.removeChild(a.firstChild);return a}function zf(a,b){return yf(a).appendChild(b)}function Af(a,b){d?(a.innerHTML="",a.appendChild(document.createTextNode(b))):a.textContent=b}function Bf(a){return a.getBoundingClientRect()}function Df(){return!1}function Ff(a){if(null!=Ef)return Ef;var b=xf("div",null,null,"width: 50px; height: 50px; overflow-x: scroll");return zf(a,b),b.offsetWidth&&(Ef=b.offsetHeight-b.clientHeight),Ef||0}function Hf(a){if(null==Gf){var b=xf("span","\u200b");zf(a,xf("span",[b,document.createTextNode("x")])),0!=a.firstChild.offsetHeight&&(Gf=b.offsetWidth<=1&&b.offsetHeight>2&&!c)}return Gf?xf("span","\u200b"):xf("span","\xa0",null,"display: inline-block; width: 1px; margin-right: -1px")}function Mf(a,b,c,d){if(!a)return d(b,c,"ltr");for(var e=!1,f=0;f<a.length;++f){var g=a[f];(g.from<c&&g.to>b||b==c&&g.to==b)&&(d(Math.max(g.from,b),Math.min(g.to,c),1==g.level?"rtl":"ltr"),e=!0)}e||d(b,c,"ltr")}function Nf(a){return a.level%2?a.to:a.from}function Of(a){return a.level%2?a.from:a.to}function Pf(a){var b=De(a);return b?Nf(b[0]):0}function Qf(a){var b=De(a);return b?Of(lf(b)):a.text.length}function Rf(a,b){var c=we(a.doc,b),d=Pd(a.doc,c);d!=c&&(b=Ae(d));var e=De(d),f=e?e[0].level%2?Qf(d):Pf(d):0;return Ec(b,f)}function Sf(a,b){for(var c,d;c=Nd(d=we(a.doc,b));)b=c.find().to.line;var e=De(d),f=e?e[0].level%2?Pf(d):Qf(d):d.text.length;return Ec(b,f)}function Tf(a,b,c){var d=a[0].level;return b==d?!0:c==d?!1:c>b}function Vf(a,b){Uf=null;for(var d,c=0;c<a.length;++c){var e=a[c];if(e.from<b&&e.to>b)return c;if(e.from==b||e.to==b){if(null!=d)return Tf(a,e.level,a[d].level)?(e.from!=e.to&&(Uf=d),c):(e.from!=e.to&&(Uf=c),d);d=c}}return d}function Wf(a,b,c,d){if(!d)return b+c;do b+=c;while(b>0&&wf(a.text.charAt(b)));return b}function Xf(a,b,c,d){var e=De(a);if(!e)return Yf(a,b,c,d);for(var f=Vf(e,b),g=e[f],h=Wf(a,b,g.level%2?-c:c,d);;){if(h>g.from&&h<g.to)return h;if(h==g.from||h==g.to)return Vf(e,h)==f?h:(g=e[f+=c],c>0==g.level%2?g.to:g.from);if(g=e[f+=c],!g)return null;h=c>0==g.level%2?Wf(a,g.to,-1,d):Wf(a,g.from,1,d)}}function Yf(a,b,c,d){var e=b+c;if(d)for(;e>0&&wf(a.text.charAt(e));)e+=c;return 0>e||e>a.text.length?null:e}var a=/gecko\/\d/i.test(navigator.userAgent),b=/MSIE \d/.test(navigator.userAgent),c=b&&(null==document.documentMode||document.documentMode<8),d=b&&(null==document.documentMode||document.documentMode<9),e=/Trident\/([7-9]|\d{2,})\./.test(navigator.userAgent),f=b||e,g=/WebKit\//.test(navigator.userAgent),h=g&&/Qt\/\d+\.\d+/.test(navigator.userAgent),i=/Chrome\//.test(navigator.userAgent),j=/Opera\//.test(navigator.userAgent),k=/Apple Computer/.test(navigator.vendor),l=/KHTML\//.test(navigator.userAgent),m=/Mac OS X 1\d\D([7-9]|\d\d)\D/.test(navigator.userAgent),n=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent),o=/PhantomJS/.test(navigator.userAgent),p=/AppleWebKit/.test(navigator.userAgent)&&/Mobile\/\w+/.test(navigator.userAgent),q=p||/Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent),r=p||/Mac/.test(navigator.platform),s=/win/i.test(navigator.platform),t=j&&navigator.userAgent.match(/Version\/(\d*\.\d*)/);t&&(t=Number(t[1])),t&&t>=15&&(j=!1,g=!0);var Bb,Ub,Vb,u=r&&(h||j&&(null==t||12.11>t)),v=a||f&&!d,w=!1,x=!1,Eb=0,$b=0,dc=0,ec=null;f?ec=-.53:a?ec=15:i?ec=-.7:k&&(ec=-1/3);var ic,rc,mc=null,tc=y.changeEnd=function(a){return a.text?Ec(a.from.line+a.text.length-1,lf(a.text).length+(1==a.text.length?a.from.ch:0)):a.to};y.Pos=Ec,y.prototype={constructor:y,focus:function(){window.focus(),Pb(this),Mb(this)},setOption:function(a,b){var c=this.options,d=c[a];(c[a]!=b||"mode"==a)&&(c[a]=b,cd.hasOwnProperty(a)&&Hb(this,cd[a])(this,b,d))},getOption:function(a){return this.options[a]},getDoc:function(){return this.doc},addKeyMap:function(a,b){this.state.keyMaps[b?"push":"unshift"](a)},removeKeyMap:function(a){for(var b=this.state.keyMaps,c=0;c<b.length;++c)if(b[c]==a||"string"!=typeof b[c]&&b[c].name==a)return b.splice(c,1),!0},addOverlay:Hb(null,function(a,b){var c=a.token?a:y.getMode(this.options,a);if(c.startState)throw new Error("Overlays may not be stateful.");this.state.overlays.push({mode:c,modeSpec:a,opaque:b&&b.opaque}),this.state.modeGen++,Kb(this)}),removeOverlay:Hb(null,function(a){for(var b=this.state.overlays,c=0;c<b.length;++c){var d=b[c].modeSpec;if(d==a||"string"==typeof a&&d.name==a)return b.splice(c,1),this.state.modeGen++,Kb(this),void 0}}),indentLine:Hb(null,function(a,b,c){"string"!=typeof b&&"number"!=typeof b&&(b=null==b?this.options.smartIndent?"smart":"prev":b?"add":"subtract"),Mc(this.doc,a)&&Yc(this,a,b,c)}),indentSelection:Hb(null,function(a){var b=this.doc.sel;if(Fc(b.from,b.to))return Yc(this,b.from.line,a,!0);for(var c=b.to.line-(b.to.ch?0:1),d=b.from.line;c>=d;++d)Yc(this,d,a)}),getTokenAt:function(a,b){var c=this.doc;a=Kc(c,a);for(var d=gb(this,a.line,b),e=this.doc.mode,f=we(c,a.line),g=new td(f.text,this.options.tabSize);g.pos<a.ch&&!g.eol();){g.start=g.pos;var h=e.token(g,d)}return{start:g.start,end:g.pos,string:g.current(),className:h||null,type:h||null,state:d}},getTokenTypeAt:function(a){a=Kc(this.doc,a);var b=be(this,we(this.doc,a.line)),c=0,d=(b.length-1)/2,e=a.ch;if(0==e)return b[2];for(;;){var f=c+d>>1;if((f?b[2*f-1]:0)>=e)d=f;else{if(!(b[2*f+1]<e))return b[2*f+2];c=f+1}}},getModeAt:function(a){var b=this.doc.mode;return b.innerMode?y.innerMode(b,this.getTokenAt(a).state).mode:b},getHelper:function(a,b){return this.getHelpers(a,b)[0]},getHelpers:function(a,b){var c=[];if(!kd.hasOwnProperty(b))return kd;var d=kd[b],e=this.getModeAt(a);if("string"==typeof e[b])d[e[b]]&&c.push(d[e[b]]);else if(e[b])for(var f=0;f<e[b].length;f++){var g=d[e[b][f]];g&&c.push(g)}else e.helperType&&d[e.helperType]?c.push(d[e.helperType]):d[e.name]&&c.push(d[e.name]);for(var f=0;f<d._global.length;f++){var h=d._global[f];h.pred(e,this)&&-1==nf(c,h.val)&&c.push(h.val)}return c},getStateAfter:function(a,b){var c=this.doc;return a=Jc(c,null==a?c.first+c.size-1:a),gb(this,a+1,b)},cursorCoords:function(a,b){var c,d=this.doc.sel;return c=null==a?d.head:"object"==typeof a?Kc(this.doc,a):a?d.from:d.to,xb(this,c,b||"page")},charCoords:function(a,b){return wb(this,Kc(this.doc,a),b||"page")},coordsChar:function(a,b){return a=vb(this,a,b||"page"),zb(this,a.left,a.top)},lineAtHeight:function(a,b){return a=vb(this,{top:a,left:0},b||"page").top,Be(this.doc,a+this.display.viewOffset)},heightAtLine:function(a,b){var c=!1,d=this.doc.first+this.doc.size-1;a<this.doc.first?a=this.doc.first:a>d&&(a=d,c=!0);var e=we(this.doc,a);return ub(this,we(this.doc,a),{top:0,left:0},b||"page").top+(c?e.height:0)},defaultTextHeight:function(){return Cb(this.display)},defaultCharWidth:function(){return Db(this.display)},setGutterMarker:Hb(null,function(a,b,c){return Zc(this,a,function(a){var d=a.gutterMarkers||(a.gutterMarkers={});return d[b]=c,!c&&uf(d)&&(a.gutterMarkers=null),!0})}),clearGutter:Hb(null,function(a){var b=this,c=b.doc,d=c.first;c.iter(function(c){c.gutterMarkers&&c.gutterMarkers[a]&&(c.gutterMarkers[a]=null,Kb(b,d,d+1),uf(c.gutterMarkers)&&(c.gutterMarkers=null)),++d})}),addLineClass:Hb(null,function(a,b,c){return Zc(this,a,function(a){var d="text"==b?"textClass":"background"==b?"bgClass":"wrapClass";if(a[d]){if(new RegExp("(?:^|\\s)"+c+"(?:$|\\s)").test(a[d]))return!1;a[d]+=" "+c}else a[d]=c;return!0})}),removeLineClass:Hb(null,function(a,b,c){return Zc(this,a,function(a){var d="text"==b?"textClass":"background"==b?"bgClass":"wrapClass",e=a[d];if(!e)return!1;if(null==c)a[d]=null;else{var f=e.match(new RegExp("(?:^|\\s+)"+c+"(?:$|\\s+)"));if(!f)return!1;var g=f.index+f[0].length;a[d]=e.slice(0,f.index)+(f.index&&g!=e.length?" ":"")+e.slice(g)||null}return!0})}),addLineWidget:Hb(null,function(a,b,c){return Xd(this,a,b,c)}),removeLineWidget:function(a){a.clear()},lineInfo:function(a){if("number"==typeof a){if(!Mc(this.doc,a))return null;var b=a;if(a=we(this.doc,a),!a)return null}else{var b=Ae(a);if(null==b)return null}return{line:b,handle:a,text:a.text,gutterMarkers:a.gutterMarkers,textClass:a.textClass,bgClass:a.bgClass,wrapClass:a.wrapClass,widgets:a.widgets}},getViewport:function(){return{from:this.display.showingFrom,to:this.display.showingTo}},addWidget:function(a,b,c,d,e){var f=this.display;a=xb(this,Kc(this.doc,a));var g=a.bottom,h=a.left;if(b.style.position="absolute",f.sizer.appendChild(b),"over"==d)g=a.top;else if("above"==d||"near"==d){var i=Math.max(f.wrapper.clientHeight,this.doc.height),j=Math.max(f.sizer.clientWidth,f.lineSpace.clientWidth);("above"==d||a.bottom+b.offsetHeight>i)&&a.top>b.offsetHeight?g=a.top-b.offsetHeight:a.bottom+b.offsetHeight<=i&&(g=a.bottom),h+b.offsetWidth>j&&(h=j-b.offsetWidth)}b.style.top=g+"px",b.style.left=b.style.right="","right"==e?(h=f.sizer.clientWidth-b.offsetWidth,b.style.right="0px"):("left"==e?h=0:"middle"==e&&(h=(f.sizer.clientWidth-b.offsetWidth)/2),b.style.left=h+"px"),c&&Uc(this,h,g,h+b.offsetWidth,g+b.offsetHeight)},triggerOnKeyDown:Hb(null,nc),triggerOnKeyPress:Hb(null,oc),triggerOnKeyUp:Hb(null,lc),execCommand:function(a){return nd.hasOwnProperty(a)?nd[a](this):void 0},findPosH:function(a,b,c,d){var e=1;0>b&&(e=-1,b=-b);for(var f=0,g=Kc(this.doc,a);b>f&&(g=$c(this.doc,g,e,c,d),!g.hitSide);++f);return g},moveH:Hb(null,function(a,b){var d,c=this.doc.sel;d=c.shift||c.extend||Fc(c.from,c.to)?$c(this.doc,c.head,a,b,this.options.rtlMoveVisually):0>a?c.from:c.to,Nc(this.doc,d,d,a)}),deleteH:Hb(null,function(a,b){var c=this.doc.sel;Fc(c.from,c.to)?Dc(this.doc,"",c.from,$c(this.doc,c.head,a,b,!1),"+delete"):Dc(this.doc,"",c.from,c.to,"+delete"),this.curOp.userSelChange=!0}),findPosV:function(a,b,c,d){var e=1,f=d;0>b&&(e=-1,b=-b);for(var g=0,h=Kc(this.doc,a);b>g;++g){var i=xb(this,h,"div");if(null==f?f=i.left:i.left=f,h=_c(this,i,e,c),h.hitSide)break}return h},moveV:Hb(null,function(a,b){var d,e,c=this.doc.sel;if(c.shift||c.extend||Fc(c.from,c.to)){var f=xb(this,c.head,"div");null!=c.goalColumn&&(f.left=c.goalColumn),d=_c(this,f,a,b),"page"==b&&Xc(this,0,wb(this,d,"div").top-f.top),e=f.left}else d=0>a?c.from:c.to;Nc(this.doc,d,d,a),null!=e&&(c.goalColumn=e)}),toggleOverwrite:function(a){(null==a||a!=this.state.overwrite)&&((this.state.overwrite=!this.state.overwrite)?this.display.cursor.className+=" CodeMirror-overwrite":this.display.cursor.className=this.display.cursor.className.replace(" CodeMirror-overwrite",""),Ye(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return document.activeElement==this.display.input},scrollTo:Hb(null,function(a,b){Wc(this,a,b)}),getScrollInfo:function(){var a=this.display.scroller,b=ef;return{left:a.scrollLeft,top:a.scrollTop,height:a.scrollHeight-b,width:a.scrollWidth-b,clientHeight:a.clientHeight-b,clientWidth:a.clientWidth-b}},scrollIntoView:Hb(null,function(a,b){null==a?a={from:this.doc.sel.head,to:null}:"number"==typeof a?a={from:Ec(a,0),to:null}:null==a.from&&(a={from:a,to:null}),a.to||(a.to=a.from),b||(b=0);var c=a;null!=a.from.line&&(this.curOp.scrollToPos={from:a.from,to:a.to,margin:b},c={from:xb(this,a.from),to:xb(this,a.to)});var d=Vc(this,Math.min(c.from.left,c.to.left),Math.min(c.from.top,c.to.top)-b,Math.max(c.from.right,c.to.right),Math.max(c.from.bottom,c.to.bottom)+b);Wc(this,d.scrollLeft,d.scrollTop)}),setSize:Hb(null,function(a,b){function c(a){return"number"==typeof a||/^\d+$/.test(String(a))?a+"px":a}null!=a&&(this.display.wrapper.style.width=c(a)),null!=b&&(this.display.wrapper.style.height=c(b)),this.options.lineWrapping&&(this.display.measureLineCache.length=this.display.measureLineCachePos=0),this.curOp.forceUpdate=!0,Ye(this,"refresh",this)}),operation:function(a){return Jb(this,a)},refresh:Hb(null,function(){var a=this.display.cachedTextHeight;rb(this),Wc(this,this.doc.scrollLeft,this.doc.scrollTop),Kb(this),(null==a||Math.abs(a-Cb(this.display))>.5)&&E(this),Ye(this,"refresh",this)}),swapDoc:Hb(null,function(a){var b=this.doc;return b.cm=null,ve(this,a),rb(this),Ob(this,!0),Wc(this,a.scrollLeft,a.scrollTop),_e(this,"swapDoc",this,b),b}),getInputField:function(){return this.display.input},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},df(y);var cd=y.optionHandlers={},dd=y.defaults={},fd=y.Init={toString:function(){return"CodeMirror.Init"}};ed("value","",function(a,b){a.setValue(b)},!0),ed("mode",null,function(a,b){a.doc.modeOption=b,A(a)},!0),ed("indentUnit",2,A,!0),ed("indentWithTabs",!1),ed("smartIndent",!0),ed("tabSize",4,function(a){B(a),rb(a),Kb(a)},!0),ed("specialChars",/[\t\u0000-\u0019\u00ad\u200b\u2028\u2029\ufeff]/g,function(a,b){a.options.specialChars=new RegExp(b.source+(b.test("	")?"":"|	"),"g"),a.refresh()},!0),ed("specialCharPlaceholder",he,function(a){a.refresh()},!0),ed("electricChars",!0),ed("rtlMoveVisually",!s),ed("wholeLineUpdateBefore",!0),ed("theme","default",function(a){G(a),H(a)},!0),ed("keyMap","default",F),ed("extraKeys",null),ed("onKeyEvent",null),ed("onDragEvent",null),ed("lineWrapping",!1,C,!0),ed("gutters",[],function(a){L(a.options),H(a)},!0),ed("fixedGutter",!0,function(a,b){a.display.gutters.style.left=b?R(a.display)+"px":"0",a.refresh()},!0),ed("coverGutterNextToScrollbar",!1,M,!0),ed("lineNumbers",!1,function(a){L(a.options),H(a)},!0),ed("firstLineNumber",1,H,!0),ed("lineNumberFormatter",function(a){return a},H,!0),ed("showCursorWhenSelecting",!1,_,!0),ed("resetSelectionOnContextMenu",!0),ed("readOnly",!1,function(a,b){"nocursor"==b?(qc(a),a.display.input.blur(),a.display.disabled=!0):(a.display.disabled=!1,b||Ob(a,!0))}),ed("disableInput",!1,function(a,b){b||Ob(a,!0)},!0),ed("dragDrop",!0),ed("cursorBlinkRate",530),ed("cursorScrollMargin",0),ed("cursorHeight",1),ed("workTime",100),ed("workDelay",100),ed("flattenSpans",!0,B,!0),ed("addModeClass",!1,B,!0),ed("pollInterval",100),ed("undoDepth",40,function(a,b){a.doc.history.undoDepth=b}),ed("historyEventDelay",500),ed("viewportMargin",10,function(a){a.refresh()},!0),ed("maxHighlightLength",1e4,B,!0),ed("crudeMeasuringFrom",1e4),ed("moveInputWithCursor",!0,function(a,b){b||(a.display.inputDiv.style.top=a.display.inputDiv.style.left=0)}),ed("tabindex",null,function(a,b){a.display.input.tabIndex=b||""}),ed("autofocus",null);var gd=y.modes={},hd=y.mimeModes={};y.defineMode=function(a,b){if(y.defaults.mode||"null"==a||(y.defaults.mode=a),arguments.length>2){b.dependencies=[];for(var c=2;c<arguments.length;++c)b.dependencies.push(arguments[c])}gd[a]=b},y.defineMIME=function(a,b){hd[a]=b},y.resolveMode=function(a){if("string"==typeof a&&hd.hasOwnProperty(a))a=hd[a];else if(a&&"string"==typeof a.name&&hd.hasOwnProperty(a.name)){var b=hd[a.name];a=of(b,a),a.name=b.name}else if("string"==typeof a&&/^[\w\-]+\/[\w\-]+\+xml$/.test(a))return y.resolveMode("application/xml");return"string"==typeof a?{name:a}:a||{name:"null"}},y.getMode=function(a,b){var b=y.resolveMode(b),c=gd[b.name];if(!c)return y.getMode(a,"text/plain");var d=c(a,b);if(id.hasOwnProperty(b.name)){var e=id[b.name];for(var f in e)e.hasOwnProperty(f)&&(d.hasOwnProperty(f)&&(d["_"+f]=d[f]),d[f]=e[f])}if(d.name=b.name,b.helperType&&(d.helperType=b.helperType),b.modeProps)for(var f in b.modeProps)d[f]=b.modeProps[f];return d},y.defineMode("null",function(){return{token:function(a){a.skipToEnd()}}}),y.defineMIME("text/plain","null");var id=y.modeExtensions={};y.extendMode=function(a,b){var c=id.hasOwnProperty(a)?id[a]:id[a]={};pf(b,c)},y.defineExtension=function(a,b){y.prototype[a]=b},y.defineDocExtension=function(a,b){re.prototype[a]=b},y.defineOption=ed;var jd=[];y.defineInitHook=function(a){jd.push(a)};var kd=y.helpers={};y.registerHelper=function(a,b,c){kd.hasOwnProperty(a)||(kd[a]=y[a]={_global:[]}),kd[a][b]=c},y.registerGlobalHelper=function(a,b,c,d){y.registerHelper(a,b,d),kd[a]._global.push({pred:c,val:d})},y.isWordChar=tf,y.copyState=ld,y.startState=md,y.innerMode=function(a,b){for(;a.innerMode;){var c=a.innerMode(b);if(!c||c.mode==a)break;b=c.state,a=c.mode}return c||{mode:a,state:b}};var nd=y.commands={selectAll:function(a){a.setSelection(Ec(a.firstLine(),0),Ec(a.lastLine()))},killLine:function(a){var b=a.getCursor(!0),c=a.getCursor(!1),d=!Fc(b,c);d||a.getLine(b.line).length!=b.ch?a.replaceRange("",b,d?c:Ec(b.line),"+delete"):a.replaceRange("",b,Ec(b.line+1,0),"+delete")},deleteLine:function(a){var b=a.getCursor().line;a.replaceRange("",Ec(b,0),Ec(b),"+delete")},delLineLeft:function(a){var b=a.getCursor();a.replaceRange("",Ec(b.line,0),b,"+delete")},undo:function(a){a.undo()},redo:function(a){a.redo()},goDocStart:function(a){a.extendSelection(Ec(a.firstLine(),0))},goDocEnd:function(a){a.extendSelection(Ec(a.lastLine()))},goLineStart:function(a){a.extendSelection(Rf(a,a.getCursor().line))},goLineStartSmart:function(a){var b=a.getCursor(),c=Rf(a,b.line),d=a.getLineHandle(c.line),e=De(d);if(e&&0!=e[0].level)a.extendSelection(c);else{var f=Math.max(0,d.text.search(/\S/)),g=b.line==c.line&&b.ch<=f&&b.ch;a.extendSelection(Ec(c.line,g?0:f))}},goLineEnd:function(a){a.extendSelection(Sf(a,a.getCursor().line))},goLineRight:function(a){var b=a.charCoords(a.getCursor(),"div").top+5;a.extendSelection(a.coordsChar({left:a.display.lineDiv.offsetWidth+100,top:b},"div"))},goLineLeft:function(a){var b=a.charCoords(a.getCursor(),"div").top+5;a.extendSelection(a.coordsChar({left:0,top:b},"div"))},goLineUp:function(a){a.moveV(-1,"line")},goLineDown:function(a){a.moveV(1,"line")},goPageUp:function(a){a.moveV(-1,"page")},goPageDown:function(a){a.moveV(1,"page")},goCharLeft:function(a){a.moveH(-1,"char")},goCharRight:function(a){a.moveH(1,"char")},goColumnLeft:function(a){a.moveH(-1,"column")},goColumnRight:function(a){a.moveH(1,"column")},goWordLeft:function(a){a.moveH(-1,"word")},goGroupRight:function(a){a.moveH(1,"group")},goGroupLeft:function(a){a.moveH(-1,"group")},goWordRight:function(a){a.moveH(1,"word")},delCharBefore:function(a){a.deleteH(-1,"char")},delCharAfter:function(a){a.deleteH(1,"char")},delWordBefore:function(a){a.deleteH(-1,"word")},delWordAfter:function(a){a.deleteH(1,"word")},delGroupBefore:function(a){a.deleteH(-1,"group")},delGroupAfter:function(a){a.deleteH(1,"group")},indentAuto:function(a){a.indentSelection("smart")},indentMore:function(a){a.indentSelection("add")},indentLess:function(a){a.indentSelection("subtract")},insertTab:function(a){a.replaceSelection("	","end","+input")},defaultTab:function(a){a.somethingSelected()?a.indentSelection("add"):a.replaceSelection("	","end","+input")},transposeChars:function(a){var b=a.getCursor(),c=a.getLine(b.line);b.ch>0&&b.ch<c.length-1&&a.replaceRange(c.charAt(b.ch)+c.charAt(b.ch-1),Ec(b.line,b.ch-1),Ec(b.line,b.ch+1))},newlineAndIndent:function(a){Hb(a,function(){a.replaceSelection("\n","end","+input"),a.indentLine(a.getCursor().line,null,!0)})()},toggleOverwrite:function(a){a.toggleOverwrite()}},od=y.keyMap={};od.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite"},od.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-Up":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Down":"goDocEnd","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore",fallthrough:"basic"},od.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineStart","Cmd-Right":"goLineEnd","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delLineLeft",fallthrough:["basic","emacsy"]},od["default"]=r?od.macDefault:od.pcDefault,od.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars"},y.lookupKey=qd,y.isModifierKey=rd,y.keyName=sd,y.fromTextArea=function(a,b){function e(){a.value=i.getValue()}if(b||(b={}),b.value=a.value,!b.tabindex&&a.tabindex&&(b.tabindex=a.tabindex),!b.placeholder&&a.placeholder&&(b.placeholder=a.placeholder),null==b.autofocus){var c=document.body;try{c=document.activeElement}catch(d){}b.autofocus=c==a||null!=a.getAttribute("autofocus")&&c==document.body}if(a.form&&(We(a.form,"submit",e),!b.leaveSubmitMethodAlone)){var f=a.form,g=f.submit;try{var h=f.submit=function(){e(),f.submit=g,f.submit(),f.submit=h}}catch(d){}}a.style.display="none";var i=y(function(b){a.parentNode.insertBefore(b,a.nextSibling)},b);return i.save=e,i.getTextArea=function(){return a},i.toTextArea=function(){e(),a.parentNode.removeChild(i.getWrapperElement()),a.style.display="",a.form&&(Xe(a.form,"submit",e),"function"==typeof a.form.submit&&(a.form.submit=g))},i},td.prototype={eol:function(){return this.pos>=this.string.length},sol:function(){return this.pos==this.lineStart},peek:function(){return this.string.charAt(this.pos)||void 0},next:function(){return this.pos<this.string.length?this.string.charAt(this.pos++):void 0},eat:function(a){var b=this.string.charAt(this.pos);if("string"==typeof a)var c=b==a;else var c=b&&(a.test?a.test(b):a(b));
return c?(++this.pos,b):void 0},eatWhile:function(a){for(var b=this.pos;this.eat(a););return this.pos>b},eatSpace:function(){for(var a=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>a},skipToEnd:function(){this.pos=this.string.length},skipTo:function(a){var b=this.string.indexOf(a,this.pos);return b>-1?(this.pos=b,!0):void 0},backUp:function(a){this.pos-=a},column:function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=hf(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?hf(this.string,this.lineStart,this.tabSize):0)},indentation:function(){return hf(this.string,null,this.tabSize)-(this.lineStart?hf(this.string,this.lineStart,this.tabSize):0)},match:function(a,b,c){if("string"!=typeof a){var f=this.string.slice(this.pos).match(a);return f&&f.index>0?null:(f&&b!==!1&&(this.pos+=f[0].length),f)}var d=function(a){return c?a.toLowerCase():a},e=this.string.substr(this.pos,a.length);return d(e)==d(a)?(b!==!1&&(this.pos+=a.length),!0):void 0},current:function(){return this.string.slice(this.start,this.pos)},hideFirstChars:function(a,b){this.lineStart+=a;try{return b()}finally{this.lineStart-=a}}},y.StringStream=td,y.TextMarker=ud,df(ud),ud.prototype.clear=function(){if(!this.explicitlyCleared){var a=this.doc.cm,b=a&&!a.curOp;if(b&&Fb(a),cf(this,"clear")){var c=this.find();c&&_e(this,"clear",c.from,c.to)}for(var d=null,e=null,f=0;f<this.lines.length;++f){var g=this.lines[f],h=zd(g.markedSpans,this);null!=h.to&&(e=Ae(g)),g.markedSpans=Ad(g.markedSpans,h),null!=h.from?d=Ae(g):this.collapsed&&!Qd(this.doc,g)&&a&&ze(g,Cb(a.display))}if(a&&this.collapsed&&!a.options.lineWrapping)for(var f=0;f<this.lines.length;++f){var i=Pd(a.doc,this.lines[f]),j=J(a.doc,i);j>a.display.maxLineLength&&(a.display.maxLine=i,a.display.maxLineLength=j,a.display.maxLineChanged=!0)}null!=d&&a&&Kb(a,d,e+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,a&&Qc(a)),b&&Gb(a)}},ud.prototype.find=function(a){for(var b,c,d=0;d<this.lines.length;++d){var e=this.lines[d],f=zd(e.markedSpans,this);if(null!=f.from||null!=f.to){var g=Ae(e);null!=f.from&&(b=Ec(g,f.from)),null!=f.to&&(c=Ec(g,f.to))}}return"bookmark"!=this.type||a?b&&{from:b,to:c}:b},ud.prototype.changed=function(){var a=this.find(),b=this.doc.cm;if(a&&b){"bookmark"!=this.type&&(a=a.from);var c=we(this.doc,a.line);if(mb(b,c),a.line>=b.display.showingFrom&&a.line<b.display.showingTo){for(var d=b.display.lineDiv.firstChild;d;d=d.nextSibling)if(d.lineObj==c){d.offsetHeight!=c.height&&ze(c,d.offsetHeight);break}Jb(b,function(){b.curOp.selectionChanged=b.curOp.forceUpdate=b.curOp.updateMaxLine=!0})}}},ud.prototype.attachLine=function(a){if(!this.lines.length&&this.doc.cm){var b=this.doc.cm.curOp;b.maybeHiddenMarkers&&-1!=nf(b.maybeHiddenMarkers,this)||(b.maybeUnhiddenMarkers||(b.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(a)},ud.prototype.detachLine=function(a){if(this.lines.splice(nf(this.lines,a),1),!this.lines.length&&this.doc.cm){var b=this.doc.cm.curOp;(b.maybeHiddenMarkers||(b.maybeHiddenMarkers=[])).push(this)}};var vd=0;y.SharedTextMarker=xd,df(xd),xd.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var a=0;a<this.markers.length;++a)this.markers[a].clear();_e(this,"clear")}},xd.prototype.find=function(){return this.primary.find()};var Ud=y.LineWidget=function(a,b,c){if(c)for(var d in c)c.hasOwnProperty(d)&&(this[d]=c[d]);this.cm=a,this.node=b};df(Ud),Ud.prototype.clear=Vd(function(){var a=this.line.widgets,b=Ae(this.line);if(null!=b&&a){for(var c=0;c<a.length;++c)a[c]==this&&a.splice(c--,1);a.length||(this.line.widgets=null);var d=Ce(this.cm,this.line)<this.cm.doc.scrollTop;ze(this.line,Math.max(0,this.line.height-Wd(this))),d&&Xc(this.cm,0,-this.height),Kb(this.cm,b,b+1)}}),Ud.prototype.changed=Vd(function(){var a=this.height;this.height=null;var b=Wd(this)-a;if(b){ze(this.line,this.line.height+b);var c=Ae(this.line);Kb(this.cm,c,c+1)}});var Yd=y.Line=function(a,b,c){this.text=a,Td(this,b),this.height=c?c(this):1};df(Yd),Yd.prototype.lineNo=function(){return Ae(this)};var de={},ee={};oe.prototype={chunkSize:function(){return this.lines.length},removeInner:function(a,b){for(var c=a,d=a+b;d>c;++c){var e=this.lines[c];this.height-=e.height,$d(e),_e(e,"delete")}this.lines.splice(a,b)},collapse:function(a){a.splice.apply(a,[a.length,0].concat(this.lines))},insertInner:function(a,b,c){this.height+=c,this.lines=this.lines.slice(0,a).concat(b).concat(this.lines.slice(a));for(var d=0,e=b.length;e>d;++d)b[d].parent=this},iterN:function(a,b,c){for(var d=a+b;d>a;++a)if(c(this.lines[a]))return!0}},pe.prototype={chunkSize:function(){return this.size},removeInner:function(a,b){this.size-=b;for(var c=0;c<this.children.length;++c){var d=this.children[c],e=d.chunkSize();if(e>a){var f=Math.min(b,e-a),g=d.height;if(d.removeInner(a,f),this.height-=g-d.height,e==f&&(this.children.splice(c--,1),d.parent=null),0==(b-=f))break;a=0}else a-=e}if(this.size-b<25){var h=[];this.collapse(h),this.children=[new oe(h)],this.children[0].parent=this}},collapse:function(a){for(var b=0,c=this.children.length;c>b;++b)this.children[b].collapse(a)},insertInner:function(a,b,c){this.size+=b.length,this.height+=c;for(var d=0,e=this.children.length;e>d;++d){var f=this.children[d],g=f.chunkSize();if(g>=a){if(f.insertInner(a,b,c),f.lines&&f.lines.length>50){for(;f.lines.length>50;){var h=f.lines.splice(f.lines.length-25,25),i=new oe(h);f.height-=i.height,this.children.splice(d+1,0,i),i.parent=this}this.maybeSpill()}break}a-=g}},maybeSpill:function(){if(!(this.children.length<=10)){var a=this;do{var b=a.children.splice(a.children.length-5,5),c=new pe(b);if(a.parent){a.size-=c.size,a.height-=c.height;var e=nf(a.parent.children,a);a.parent.children.splice(e+1,0,c)}else{var d=new pe(a.children);d.parent=a,a.children=[d,c],a=d}c.parent=a.parent}while(a.children.length>10);a.parent.maybeSpill()}},iterN:function(a,b,c){for(var d=0,e=this.children.length;e>d;++d){var f=this.children[d],g=f.chunkSize();if(g>a){var h=Math.min(b,g-a);if(f.iterN(a,h,c))return!0;if(0==(b-=h))break;a=0}else a-=g}}};var qe=0,re=y.Doc=function(a,b,c){if(!(this instanceof re))return new re(a,b,c);null==c&&(c=0),pe.call(this,[new oe([new Yd("",null)])]),this.first=c,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.history=Ee(),this.cleanGeneration=1,this.frontier=c;var d=Ec(c,0);this.sel={from:d,to:d,head:d,anchor:d,shift:!1,extend:!1,goalColumn:null},this.id=++qe,this.modeOption=b,"string"==typeof a&&(a=If(a)),ne(this,{from:d,to:d,text:a},null,{head:d,anchor:d})};re.prototype=of(pe.prototype,{constructor:re,iter:function(a,b,c){c?this.iterN(a-this.first,b-a,c):this.iterN(this.first,this.first+this.size,a)},insert:function(a,b){for(var c=0,d=0,e=b.length;e>d;++d)c+=b[d].height;this.insertInner(a-this.first,b,c)},remove:function(a,b){this.removeInner(a-this.first,b)},getValue:function(a){var b=ye(this,this.first,this.first+this.size);return a===!1?b:b.join(a||"\n")},setValue:function(a){var b=Ec(this.first,0),c=this.first+this.size-1;xc(this,{from:b,to:Ec(c,we(this,c).text.length),text:If(a),origin:"setValue"},{head:b,anchor:b},!0)},replaceRange:function(a,b,c,d){b=Kc(this,b),c=c?Kc(this,c):b,Dc(this,a,b,c,d)},getRange:function(a,b,c){var d=xe(this,Kc(this,a),Kc(this,b));return c===!1?d:d.join(c||"\n")},getLine:function(a){var b=this.getLineHandle(a);return b&&b.text},setLine:function(a,b){Mc(this,a)&&Dc(this,b,Ec(a,0),Kc(this,Ec(a)))},removeLine:function(a){a?Dc(this,"",Kc(this,Ec(a-1)),Kc(this,Ec(a))):Dc(this,"",Ec(0,0),Kc(this,Ec(1,0)))},getLineHandle:function(a){return Mc(this,a)?we(this,a):void 0},getLineNumber:function(a){return Ae(a)},getLineHandleVisualStart:function(a){return"number"==typeof a&&(a=we(this,a)),Pd(this,a)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(a){return Kc(this,a)},getCursor:function(a){var c,b=this.sel;return c=null==a||"head"==a?b.head:"anchor"==a?b.anchor:"end"==a||a===!1?b.to:b.from,Ic(c)},somethingSelected:function(){return!Fc(this.sel.head,this.sel.anchor)},setCursor:Ib(function(a,b,c){var d=Kc(this,"number"==typeof a?Ec(a,b||0):a);c?Nc(this,d):Pc(this,d,d)}),setSelection:Ib(function(a,b,c){Pc(this,Kc(this,a),Kc(this,b||a),c)}),extendSelection:Ib(function(a,b,c){Nc(this,Kc(this,a),b&&Kc(this,b),c)}),getSelection:function(a){return this.getRange(this.sel.from,this.sel.to,a)},replaceSelection:function(a,b,c){xc(this,{from:this.sel.from,to:this.sel.to,text:If(a),origin:c},b||"around")},undo:Ib(function(){zc(this,"undo")}),redo:Ib(function(){zc(this,"redo")}),setExtending:function(a){this.sel.extend=a},historySize:function(){var a=this.history;return{undo:a.done.length,redo:a.undone.length}},clearHistory:function(){this.history=Ee(this.history.maxGeneration)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(a){return a&&(this.history.lastOp=this.history.lastOrigin=null),this.history.generation},isClean:function(a){return this.history.generation==(a||this.cleanGeneration)},getHistory:function(){return{done:Ke(this.history.done),undone:Ke(this.history.undone)}},setHistory:function(a){var b=this.history=Ee(this.history.maxGeneration);b.done=a.done.slice(0),b.undone=a.undone.slice(0)},markText:function(a,b,c){return wd(this,Kc(this,a),Kc(this,b),c,"range")},setBookmark:function(a,b){var c={replacedWith:b&&(null==b.nodeType?b.widget:b),insertLeft:b&&b.insertLeft,clearWhenEmpty:!1};return a=Kc(this,a),wd(this,a,a,c,"bookmark")},findMarksAt:function(a){a=Kc(this,a);var b=[],c=we(this,a.line).markedSpans;if(c)for(var d=0;d<c.length;++d){var e=c[d];(null==e.from||e.from<=a.ch)&&(null==e.to||e.to>=a.ch)&&b.push(e.marker.parent||e.marker)}return b},getAllMarks:function(){var a=[];return this.iter(function(b){var c=b.markedSpans;if(c)for(var d=0;d<c.length;++d)null!=c[d].from&&a.push(c[d].marker)}),a},posFromIndex:function(a){var b,c=this.first;return this.iter(function(d){var e=d.text.length+1;return e>a?(b=a,!0):(a-=e,++c,void 0)}),Kc(this,Ec(c,b))},indexFromPos:function(a){a=Kc(this,a);var b=a.ch;return a.line<this.first||a.ch<0?0:(this.iter(this.first,a.line,function(a){b+=a.text.length+1}),b)},copy:function(a){var b=new re(ye(this,this.first,this.first+this.size),this.modeOption,this.first);return b.scrollTop=this.scrollTop,b.scrollLeft=this.scrollLeft,b.sel={from:this.sel.from,to:this.sel.to,head:this.sel.head,anchor:this.sel.anchor,shift:this.sel.shift,extend:!1,goalColumn:this.sel.goalColumn},a&&(b.history.undoDepth=this.history.undoDepth,b.setHistory(this.getHistory())),b},linkedDoc:function(a){a||(a={});var b=this.first,c=this.first+this.size;null!=a.from&&a.from>b&&(b=a.from),null!=a.to&&a.to<c&&(c=a.to);var d=new re(ye(this,b,c),a.mode||this.modeOption,b);return a.sharedHist&&(d.history=this.history),(this.linked||(this.linked=[])).push({doc:d,sharedHist:a.sharedHist}),d.linked=[{doc:this,isParent:!0,sharedHist:a.sharedHist}],d},unlinkDoc:function(a){if(a instanceof y&&(a=a.doc),this.linked)for(var b=0;b<this.linked.length;++b){var c=this.linked[b];if(c.doc==a){this.linked.splice(b,1),a.unlinkDoc(this);break}}if(a.history==this.history){var d=[a.id];ue(a,function(a){d.push(a.id)},!0),a.history=Ee(),a.history.done=Ke(this.history.done,d),a.history.undone=Ke(this.history.undone,d)}},iterLinkedDocs:function(a){ue(this,a)},getMode:function(){return this.mode},getEditor:function(){return this.cm}}),re.prototype.eachLine=re.prototype.iter;var se="iter insert remove copy getEditor".split(" ");for(var te in re.prototype)re.prototype.hasOwnProperty(te)&&nf(se,te)<0&&(y.prototype[te]=function(a){return function(){return a.apply(this.doc,arguments)}}(re.prototype[te]));df(re),y.e_stop=Te,y.e_preventDefault=Qe,y.e_stopPropagation=Re;var Ze,$e=0;y.on=We,y.off=Xe,y.signal=Ye;var ef=30,ff=y.Pass={toString:function(){return"CodeMirror.Pass"}};gf.prototype={set:function(a,b){clearTimeout(this.id),this.id=setTimeout(b,a)}},y.countColumn=hf;var jf=[""],sf=/[\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,vf=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;y.replaceGetRect=function(a){Bf=a};var Cf=function(){if(d)return!1;var a=xf("div");return"draggable"in a||"dragDrop"in a}();a?Df=function(a,b){return 36==a.charCodeAt(b-1)&&39==a.charCodeAt(b)}:k&&!/Version\/([6-9]|\d\d)\b/.test(navigator.userAgent)?Df=function(a,b){return/\-[^ \-?]|\?[^ !\'\"\),.\-\/:;\?\]\}]/.test(a.slice(b-1,b+1))}:g&&/Chrome\/(?:29|[3-9]\d|\d\d\d)\./.test(navigator.userAgent)?Df=function(a,b){var c=a.charCodeAt(b-1);return c>=8208&&8212>=c}:g&&(Df=function(a,b){if(b>1&&45==a.charCodeAt(b-1)){if(/\w/.test(a.charAt(b-2))&&/[^\-?\.]/.test(a.charAt(b)))return!0;if(b>2&&/[\d\.,]/.test(a.charAt(b-2))&&/[\d\.,]/.test(a.charAt(b)))return!1}return/[~!#%&*)=+}\]\\|\"\.>,:;][({[<]|-[^\-?\.\u2010-\u201f\u2026]|\?[\w~`@#$%\^&*(_=+{[|><]|\u2026[\w~`@#$%\^&*(_=+{[><]/.test(a.slice(b-1,b+1))});var Ef,Gf,If=3!="\n\nb".split(/\n/).length?function(a){for(var b=0,c=[],d=a.length;d>=b;){var e=a.indexOf("\n",b);-1==e&&(e=a.length);var f=a.slice(b,"\r"==a.charAt(e-1)?e-1:e),g=f.indexOf("\r");-1!=g?(c.push(f.slice(0,g)),b+=g+1):(c.push(f),b=e+1)}return c}:function(a){return a.split(/\r\n?|\n/)};y.splitLines=If;var Jf=window.getSelection?function(a){try{return a.selectionStart!=a.selectionEnd}catch(b){return!1}}:function(a){try{var b=a.ownerDocument.selection.createRange()}catch(c){}return b&&b.parentElement()==a?0!=b.compareEndPoints("StartToEnd",b):!1},Kf=function(){var a=xf("div");return"oncopy"in a?!0:(a.setAttribute("oncopy","return;"),"function"==typeof a.oncopy)}(),Lf={3:"Enter",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",107:"=",109:"-",127:"Delete",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"};y.keyNames=Lf,function(){for(var a=0;10>a;a++)Lf[a+48]=Lf[a+96]=String(a);for(var a=65;90>=a;a++)Lf[a]=String.fromCharCode(a);for(var a=1;12>=a;a++)Lf[a+111]=Lf[a+63235]="F"+a}();var Uf,Zf=function(){function c(c){return 255>=c?a.charAt(c):c>=1424&&1524>=c?"R":c>=1536&&1791>=c?b.charAt(c-1536):c>=1792&&2220>=c?"r":"L"}var a="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLL",b="rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmmrrrrrrrrrrrrrrrrrr",d=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,e=/[stwN]/,f=/[LRr]/,g=/[Lb1n]/,h=/[1n]/,i="L";return function(a){if(!d.test(a))return!1;for(var l,b=a.length,j=[],k=0;b>k;++k)j.push(l=c(a.charCodeAt(k)));for(var k=0,m=i;b>k;++k){var l=j[k];"m"==l?j[k]=m:m=l}for(var k=0,n=i;b>k;++k){var l=j[k];"1"==l&&"r"==n?j[k]="n":f.test(l)&&(n=l,"r"==l&&(j[k]="R"))}for(var k=1,m=j[0];b-1>k;++k){var l=j[k];"+"==l&&"1"==m&&"1"==j[k+1]?j[k]="1":","!=l||m!=j[k+1]||"1"!=m&&"n"!=m||(j[k]=m),m=l}for(var k=0;b>k;++k){var l=j[k];if(","==l)j[k]="N";else if("%"==l){for(var o=k+1;b>o&&"%"==j[o];++o);for(var p=k&&"!"==j[k-1]||b>o&&"1"==j[o]?"1":"N",q=k;o>q;++q)j[q]=p;k=o-1}}for(var k=0,n=i;b>k;++k){var l=j[k];"L"==n&&"1"==l?j[k]="L":f.test(l)&&(n=l)}for(var k=0;b>k;++k)if(e.test(j[k])){for(var o=k+1;b>o&&e.test(j[o]);++o);for(var r="L"==(k?j[k-1]:i),s="L"==(b>o?j[o]:i),p=r||s?"L":"R",q=k;o>q;++q)j[q]=p;k=o-1}for(var u,t=[],k=0;b>k;)if(g.test(j[k])){var v=k;for(++k;b>k&&g.test(j[k]);++k);t.push({from:v,to:k,level:0})}else{var w=k,x=t.length;for(++k;b>k&&"L"!=j[k];++k);for(var q=w;k>q;)if(h.test(j[q])){q>w&&t.splice(x,0,{from:w,to:q,level:1});var y=q;for(++q;k>q&&h.test(j[q]);++q);t.splice(x,0,{from:y,to:q,level:2}),w=q}else++q;k>w&&t.splice(x,0,{from:w,to:k,level:1})}return 1==t[0].level&&(u=a.match(/^\s+/))&&(t[0].from=u[0].length,t.unshift({from:0,to:u[0].length,level:0})),1==lf(t).level&&(u=a.match(/\s+$/))&&(lf(t).to-=u[0].length,t.push({from:b-u[0].length,to:b,level:0})),t[0].level!=lf(t).level&&t.push({from:b,to:b,level:t[0].level}),t}}();return y.version="3.21.1",y}(),CodeMirror.defineMode("css",function(a,b){"use strict";function n(a,b){return l=b,a}function o(a,b){var c=a.next();if(d[c]){var e=d[c](a,b);if(e!==!1)return e}return"@"==c?(a.eatWhile(/[\w\\\-]/),n("def",a.current())):"="==c||("~"==c||"|"==c)&&a.eat("=")?n(null,"compare"):'"'==c||"'"==c?(b.tokenize=p(c),b.tokenize(a,b)):"#"==c?(a.eatWhile(/[\w\\\-]/),n("atom","hash")):"!"==c?(a.match(/^\s*\w*/),n("keyword","important")):/\d/.test(c)||"."==c&&a.eat(/\d/)?(a.eatWhile(/[\w.%]/),n("number","unit")):"-"!==c?/[,+>*\/]/.test(c)?n(null,"select-op"):"."==c&&a.match(/^-?[_a-z][_a-z0-9-]*/i)?n("qualifier","qualifier"):/[:;{}\[\]\(\)]/.test(c)?n(null,c):"u"==c&&a.match("rl(")?(a.backUp(1),b.tokenize=q,n("property","word")):/[\w\\\-]/.test(c)?(a.eatWhile(/[\w\\\-]/),n("property","word")):n(null,null):/[\d.]/.test(a.peek())?(a.eatWhile(/[\w.%]/),n("number","unit")):a.match(/^[^-]+-/)?n("meta","meta"):void 0}function p(a){return function(b,c){for(var e,d=!1;null!=(e=b.next());){if(e==a&&!d){")"==a&&b.backUp(1);break}d=!d&&"\\"==e}return(e==a||!d&&")"!=a)&&(c.tokenize=null),n("string","string")}}function q(a,b){return a.next(),b.tokenize=a.match(/\s*[\"\']/,!1)?null:p(")"),n(null,"(")}function r(a,b,c){this.type=a,this.indent=b,this.prev=c}function s(a,b,d){return a.context=new r(d,b.indentation()+c,a.context),d}function t(a){return a.context=a.context.prev,a.context.type}function u(a,b,c){return x[c.context.type](a,b,c)}function v(a,b,c,d){for(var e=d||1;e>0;e--)c.context=c.context.prev;return u(a,b,c)}function w(a){var b=a.current().toLowerCase();m=i.hasOwnProperty(b)?"atom":h.hasOwnProperty(b)?"keyword":"variable"}b.propertyKeywords||(b=CodeMirror.resolveMode("text/css"));var l,m,c=a.indentUnit,d=b.tokenHooks,e=b.mediaTypes||{},f=b.mediaFeatures||{},g=b.propertyKeywords||{},h=b.colorKeywords||{},i=b.valueKeywords||{},j=b.fontProperties||{},k=b.allowNested,x={};return x.top=function(a,b,c){if("{"==a)return s(c,b,"block");if("}"==a&&c.context.prev)return t(c);if("@media"==a)return s(c,b,"media");if("@font-face"==a)return"font_face_before";if(/^@(-(moz|ms|o|webkit)-)?keyframes$/.test(a))return"keyframes";if(a&&"@"==a.charAt(0))return s(c,b,"at");if("hash"==a)m="builtin";else if("word"==a)m="tag";else{if("variable-definition"==a)return"maybeprop";if("interpolation"==a)return s(c,b,"interpolation");if(":"==a)return"pseudo";if(k&&"("==a)return s(c,b,"params")}return c.context.type},x.block=function(a,b,c){return"word"==a?g.hasOwnProperty(b.current().toLowerCase())?(m="property","maybeprop"):k?(m=b.match(/^\s*:/,!1)?"property":"tag","block"):(m+=" error","maybeprop"):"meta"==a?"block":k||"hash"!=a&&"qualifier"!=a?x.top(a,b,c):(m="error","block")},x.maybeprop=function(a,b,c){return":"==a?s(c,b,"prop"):u(a,b,c)},x.prop=function(a,b,c){if(";"==a)return t(c);if("{"==a&&k)return s(c,b,"propBlock");if("}"==a||"{"==a)return v(a,b,c);if("("==a)return s(c,b,"parens");if("hash"!=a||/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(b.current())){if("word"==a)w(b);else if("interpolation"==a)return s(c,b,"interpolation")}else m+=" error";return"prop"},x.propBlock=function(a,b,c){return"}"==a?t(c):"word"==a?(m="property","maybeprop"):c.context.type},x.parens=function(a,b,c){return"{"==a||"}"==a?v(a,b,c):")"==a?t(c):"parens"},x.pseudo=function(a,b,c){return"word"==a?(m="variable-3",c.context.type):u(a,b,c)},x.media=function(a,b,c){if("("==a)return s(c,b,"media_parens");if("}"==a)return v(a,b,c);if("{"==a)return t(c)&&s(c,b,k?"block":"top");if("word"==a){var d=b.current().toLowerCase();m="only"==d||"not"==d||"and"==d?"keyword":e.hasOwnProperty(d)?"attribute":f.hasOwnProperty(d)?"property":"error"}return c.context.type},x.media_parens=function(a,b,c){return")"==a?t(c):"{"==a||"}"==a?v(a,b,c,2):x.media(a,b,c)},x.font_face_before=function(a,b,c){return"{"==a?s(c,b,"font_face"):u(a,b,c)},x.font_face=function(a,b,c){return"}"==a?t(c):"word"==a?(m=j.hasOwnProperty(b.current().toLowerCase())?"property":"error","maybeprop"):"font_face"},x.keyframes=function(a,b,c){return"word"==a?(m="variable","keyframes"):"{"==a?s(c,b,"top"):u(a,b,c)},x.at=function(a,b,c){return";"==a?t(c):"{"==a||"}"==a?v(a,b,c):("word"==a?m="tag":"hash"==a&&(m="builtin"),"at")},x.interpolation=function(a,b,c){return"}"==a?t(c):"{"==a||";"==a?v(a,b,c):("variable"!=a&&(m="error"),"interpolation")},x.params=function(a,b,c){return")"==a?t(c):"{"==a||"}"==a?v(a,b,c):("word"==a&&w(b),"params")},{startState:function(a){return{tokenize:null,state:"top",context:new r("top",a||0,null)}},token:function(a,b){if(!b.tokenize&&a.eatSpace())return null;var c=(b.tokenize||o)(a,b);return c&&"object"==typeof c&&(l=c[1],c=c[0]),m=c,b.state=x[b.state](l,a,b),m},indent:function(a,b){var d=a.context,e=b&&b.charAt(0),f=d.indent;return"prop"==d.type&&"}"==e&&(d=d.prev),!d.prev||("}"!=e||"block"!=d.type&&"top"!=d.type&&"interpolation"!=d.type&&"font_face"!=d.type)&&(")"!=e||"parens"!=d.type&&"params"!=d.type&&"media_parens"!=d.type)&&("{"!=e||"at"!=d.type&&"media"!=d.type)||(f=d.indent-c,d=d.prev),f},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/",fold:"brace"}}),function(){function a(a){for(var b={},c=0;c<a.length;++c)b[a[c]]=!0;return b}function o(a,b){for(var d,c=!1;null!=(d=a.next());){if(c&&"/"==d){b.tokenize=null;break}c="*"==d}return["comment","comment"]}function p(a,b){return a.skipTo("-->")?(a.match("-->"),b.tokenize=null):a.skipToEnd(),["comment","comment"]}var b=["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"],c=a(b),d=["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid"],e=a(d),f=["align-content","align-items","align-self","alignment-adjust","alignment-baseline","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backface-visibility","background","background-attachment","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","baseline-shift","binding","bleed","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flow-from","flow-into","font","font-feature-settings","font-family","font-kerning","font-language-override","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-weight","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-position","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","justify-content","left","letter-spacing","line-break","line-height","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marker-offset","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","max-height","max-width","min-height","min-width","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","play-during","position","presentation-level","punctuation-trim","quotes","region-break-after","region-break-before","region-break-inside","region-fragment","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotation","rotation-point","ruby-align","ruby-overhang","ruby-position","ruby-span","shape-inside","shape-outside","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-outline","text-overflow","text-shadow","text-size-adjust","text-space-collapse","text-transform","text-underline-position","text-wrap","top","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","word-break","word-spacing","word-wrap","z-index","zoom","clip-path","clip-rule","mask","enable-background","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","pointer-events","color-interpolation","color-interpolation-filters","color-profile","color-rendering","fill","fill-opacity","fill-rule","image-rendering","marker","marker-end","marker-mid","marker-start","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-rendering","baseline-shift","dominant-baseline","glyph-orientation-horizontal","glyph-orientation-vertical","kerning","text-anchor","writing-mode"],g=a(f),h=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],i=a(h),j=["above","absolute","activeborder","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","auto","avoid","avoid-column","avoid-page","avoid-region","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","button","button-bevel","buttonface","buttonhighlight","buttonshadow","buttontext","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","column","compact","condensed","contain","content","content-box","context-menu","continuous","copy","cover","crop","cross","crosshair","currentcolor","cursive","dashed","decimal","decimal-leading-zero","default","default-button","destination-atop","destination-in","destination-out","destination-over","devanagari","disc","discard","document","dot-dash","dot-dot-dash","dotted","double","down","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ew-resize","expanded","extra-condensed","extra-expanded","fantasy","fast","fill","fixed","flat","footnotes","forwards","from","geometricPrecision","georgian","graytext","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-table","inset","inside","intrinsic","invert","italic","justify","kannada","katakana","katakana-iroha","keep-all","khmer","landscape","lao","large","larger","left","level","lighter","line-through","linear","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","malayalam","match","media-controls-background","media-current-time-display","media-fullscreen-button","media-mute-button","media-play-button","media-return-to-realtime-button","media-rewind-button","media-seek-back-button","media-seek-forward-button","media-slider","media-sliderthumb","media-time-remaining-display","media-volume-slider","media-volume-slider-container","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menulist-text","menulist-textfield","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","nw-resize","nwse-resize","oblique","octal","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","persian","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","round","row-resize","rtl","run-in","running","s-resize","sans-serif","scroll","scrollbar","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","semi-condensed","semi-expanded","separate","serif","show","sidama","single","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","solid","somali","source-atop","source-in","source-out","source-over","space","square","square-button","start","static","status-bar","stretch","stroke","sub","subpixel-antialiased","super","sw-resize","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","transparent","ultra-condensed","ultra-expanded","underline","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","vertical","vertical-text","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","x-large","x-small","xor","xx-large","xx-small"],k=a(j),l=["font-family","src","unicode-range","font-variant","font-feature-settings","font-stretch","font-weight","font-style"],m=a(l),n=b.concat(d).concat(f).concat(h).concat(j);
CodeMirror.registerHelper("hintWords","css",n),CodeMirror.defineMIME("text/css",{mediaTypes:c,mediaFeatures:e,propertyKeywords:g,colorKeywords:i,valueKeywords:k,fontProperties:m,tokenHooks:{"<":function(a,b){return a.match("!--")?(b.tokenize=p,p(a,b)):!1},"/":function(a,b){return a.eat("*")?(b.tokenize=o,o(a,b)):!1}},name:"css"}),CodeMirror.defineMIME("text/x-scss",{mediaTypes:c,mediaFeatures:e,propertyKeywords:g,colorKeywords:i,valueKeywords:k,fontProperties:m,allowNested:!0,tokenHooks:{"/":function(a,b){return a.eat("/")?(a.skipToEnd(),["comment","comment"]):a.eat("*")?(b.tokenize=o,o(a,b)):["operator","operator"]},":":function(a){return a.match(/\s*{/)?[null,"{"]:!1},$:function(a){return a.match(/^[\w-]+/),a.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"]},"#":function(a){return a.eat("{")?[null,"interpolation"]:!1}},name:"css",helperType:"scss"}),CodeMirror.defineMIME("text/x-less",{mediaTypes:c,mediaFeatures:e,propertyKeywords:g,colorKeywords:i,valueKeywords:k,fontProperties:m,allowNested:!0,tokenHooks:{"/":function(a,b){return a.eat("/")?(a.skipToEnd(),["comment","comment"]):a.eat("*")?(b.tokenize=o,o(a,b)):["operator","operator"]},"@":function(a){return a.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/,!1)?!1:(a.eatWhile(/[\w\\\-]/),a.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"])},"&":function(){return["atom","atom"]}},name:"css",helperType:"less"})}(),CodeMirror.defineMode("javascript",function(a,b){function i(a){for(var c,b=!1,d=!1;null!=(c=a.next());){if(!b){if("/"==c&&!d)return;"["==c?d=!0:d&&"]"==c&&(d=!1)}b=!b&&"\\"==c}}function l(a,b,c){return j=a,k=c,b}function m(a,b){var c=a.next();if('"'==c||"'"==c)return b.tokenize=n(c),b.tokenize(a,b);if("."==c&&a.match(/^\d+(?:[eE][+\-]?\d+)?/))return l("number","number");if("."==c&&a.match(".."))return l("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(c))return l(c);if("="==c&&a.eat(">"))return l("=>","operator");if("0"==c&&a.eat(/x/i))return a.eatWhile(/[\da-f]/i),l("number","number");if(/\d/.test(c))return a.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),l("number","number");if("/"==c)return a.eat("*")?(b.tokenize=o,o(a,b)):a.eat("/")?(a.skipToEnd(),l("comment","comment")):"operator"==b.lastType||"keyword c"==b.lastType||"sof"==b.lastType||/^[\[{}\(,;:]$/.test(b.lastType)?(i(a),a.eatWhile(/[gimy]/),l("regexp","string-2")):(a.eatWhile(h),l("operator","operator",a.current()));if("`"==c)return b.tokenize=p,p(a,b);if("#"==c)return a.skipToEnd(),l("error","error");if(h.test(c))return a.eatWhile(h),l("operator","operator",a.current());a.eatWhile(/[\w\$_]/);var d=a.current(),e=g.propertyIsEnumerable(d)&&g[d];return e&&"."!=b.lastType?l(e.type,e.style,d):l("variable","variable",d)}function n(a){return function(b,c){for(var e,d=!1;null!=(e=b.next())&&(e!=a||d);)d=!d&&"\\"==e;return d||(c.tokenize=m),l("string","string")}}function o(a,b){for(var d,c=!1;d=a.next();){if("/"==d&&c){b.tokenize=m;break}c="*"==d}return l("comment","comment")}function p(a,b){for(var d,c=!1;null!=(d=a.next());){if(!c&&("`"==d||"$"==d&&a.eat("{"))){b.tokenize=m;break}c=!c&&"\\"==d}return l("quasi","string-2",a.current())}function r(a,b){b.fatArrowAt&&(b.fatArrowAt=null);var c=a.string.indexOf("=>",a.start);if(!(0>c)){for(var d=0,e=!1,f=c-1;f>=0;--f){var g=a.string.charAt(f),h=q.indexOf(g);if(h>=0&&3>h){if(!d){++f;break}if(0==--d)break}else if(h>=3&&6>h)++d;else if(/[$\w]/.test(g))e=!0;else if(e&&!d){++f;break}}e&&!d&&(b.fatArrowAt=f)}}function t(a,b,c,d,e,f){this.indented=a,this.column=b,this.type=c,this.prev=e,this.info=f,null!=d&&(this.align=d)}function u(a,b){for(var c=a.localVars;c;c=c.next)if(c.name==b)return!0;for(var d=a.context;d;d=d.prev)for(var c=d.vars;c;c=c.next)if(c.name==b)return!0}function v(a,b,c,d,f){var g=a.cc;for(w.state=a,w.stream=f,w.marked=null,w.cc=g,a.lexical.hasOwnProperty("align")||(a.lexical.align=!0);;){var h=g.length?g.pop():e?H:G;if(h(c,d)){for(;g.length&&g[g.length-1].lex;)g.pop()();return w.marked?w.marked:"variable"==c&&u(a,d)?"variable-2":b}}}function x(){for(var a=arguments.length-1;a>=0;a--)w.cc.push(arguments[a])}function y(){return x.apply(null,arguments),!0}function z(a){function c(b){for(var c=b;c;c=c.next)if(c.name==a)return!0;return!1}var d=w.state;if(d.context){if(w.marked="def",c(d.localVars))return;d.localVars={name:a,next:d.localVars}}else{if(c(d.globalVars))return;b.globalVars&&(d.globalVars={name:a,next:d.globalVars})}}function B(){w.state.context={prev:w.state.context,vars:w.state.localVars},w.state.localVars=A}function C(){w.state.localVars=w.state.context.vars,w.state.context=w.state.context.prev}function D(a,b){var c=function(){var c=w.state,d=c.indented;"stat"==c.lexical.type&&(d=c.lexical.indented),c.lexical=new t(d,w.stream.column(),a,null,c.lexical,b)};return c.lex=!0,c}function E(){var a=w.state;a.lexical.prev&&(")"==a.lexical.type&&(a.indented=a.lexical.indented),a.lexical=a.lexical.prev)}function F(a){return function(b){return b==a?y():";"==a?x():y(arguments.callee)}}function G(a,b){return"var"==a?y(D("vardef",b.length),ab,F(";"),E):"keyword a"==a?y(D("form"),H,G,E):"keyword b"==a?y(D("form"),G,E):"{"==a?y(D("}"),Z,E):";"==a?y():"if"==a?y(D("form"),H,G,E,fb):"function"==a?y(lb):"for"==a?y(D("form"),gb,G,E):"variable"==a?y(D("stat"),S):"switch"==a?y(D("form"),H,D("}","switch"),F("{"),Z,E,E):"case"==a?y(H,F(":")):"default"==a?y(F(":")):"catch"==a?y(D("form"),B,F("("),mb,F(")"),G,E,C):"module"==a?y(D("form"),B,qb,C,E):"class"==a?y(D("form"),nb,pb,E):"export"==a?y(D("form"),rb,E):"import"==a?y(D("form"),sb,E):x(D("stat"),H,F(";"),E)}function H(a){return J(a,!1)}function I(a){return J(a,!0)}function J(a,b){if(w.state.fatArrowAt==w.stream.start){var c=b?R:Q;if("("==a)return y(B,D(")"),X(bb,")"),E,F("=>"),c,C);if("variable"==a)return x(B,bb,F("=>"),c,C)}var d=b?N:M;return s.hasOwnProperty(a)?y(d):"function"==a?y(lb):"keyword c"==a?y(b?L:K):"("==a?y(D(")"),K,xb,F(")"),E,d):"operator"==a||"spread"==a?y(b?I:H):"["==a?y(D("]"),vb,E,d):"{"==a?Y(U,"}",null,d):y()}function K(a){return a.match(/[;\}\)\],]/)?x():x(H)}function L(a){return a.match(/[;\}\)\],]/)?x():x(I)}function M(a,b){return","==a?y(H):N(a,b,!1)}function N(a,b,c){var d=0==c?M:N,e=0==c?H:I;return"=>"==b?y(B,c?R:Q,C):"operator"==a?/\+\+|--/.test(b)?y(d):"?"==b?y(H,F(":"),e):y(e):"quasi"==a?(w.cc.push(d),O(b)):";"!=a?"("==a?Y(I,")","call",d):"."==a?y(T,d):"["==a?y(D("]"),K,F("]"),E,d):void 0:void 0}function O(a){return"${"!=a.slice(a.length-2)?y():y(H,P)}function P(a){return"}"==a?(w.marked="string-2",w.state.tokenize=p,y()):void 0}function Q(a){return r(w.stream,w.state),"{"==a?x(G):x(H)}function R(a){return r(w.stream,w.state),"{"==a?x(G):x(I)}function S(a){return":"==a?y(E,G):x(M,F(";"),E)}function T(a){return"variable"==a?(w.marked="property",y()):void 0}function U(a,b){if("variable"==a){if(w.marked="property","get"==b||"set"==b)return y(V)}else if("number"==a||"string"==a)w.marked=a+" property";else if("["==a)return y(H,F("]"),W);return s.hasOwnProperty(a)?y(W):void 0}function V(a){return"variable"!=a?x(W):(w.marked="property",y(lb))}function W(a){return":"==a?y(I):"("==a?x(lb):void 0}function X(a,b){function c(d){if(","==d){var e=w.state.lexical;return"call"==e.info&&(e.pos=(e.pos||0)+1),y(a,c)}return d==b?y():y(F(b))}return function(d){return d==b?y():x(a,c)}}function Y(a,b,c){for(var d=3;d<arguments.length;d++)w.cc.push(arguments[d]);return y(D(b,c),X(a,b),E)}function Z(a){return"}"==a?y():x(G,Z)}function $(a){return f&&":"==a?y(_):void 0}function _(a){return"variable"==a?(w.marked="variable-3",y()):void 0}function ab(){return x(bb,$,db,eb)}function bb(a,b){return"variable"==a?(z(b),y()):"["==a?Y(bb,"]"):"{"==a?Y(cb,"}"):void 0}function cb(a,b){return"variable"!=a||w.stream.match(/^\s*:/,!1)?("variable"==a&&(w.marked="property"),y(F(":"),bb,db)):(z(b),y(db))}function db(a,b){return"="==b?y(I):void 0}function eb(a){return","==a?y(ab):void 0}function fb(a,b){return"keyword b"==a&&"else"==b?y(D("form"),G,E):void 0}function gb(a){return"("==a?y(D(")"),hb,F(")"),E):void 0}function hb(a){return"var"==a?y(ab,F(";"),jb):";"==a?y(jb):"variable"==a?y(ib):x(H,F(";"),jb)}function ib(a,b){return"in"==b||"of"==b?(w.marked="keyword",y(H)):y(M,jb)}function jb(a,b){return";"==a?y(kb):"in"==b||"of"==b?(w.marked="keyword",y(H)):x(H,F(";"),kb)}function kb(a){")"!=a&&y(H)}function lb(a,b){return"*"==b?(w.marked="keyword",y(lb)):"variable"==a?(z(b),y(lb)):"("==a?y(B,D(")"),X(mb,")"),E,G,C):void 0}function mb(a){return"spread"==a?y(mb):x(bb,$)}function nb(a,b){return"variable"==a?(z(b),y(ob)):void 0}function ob(a,b){return"extends"==b?y(H):void 0}function pb(a){return"{"==a?Y(U,"}"):void 0}function qb(a,b){return"string"==a?y(G):"variable"==a?(z(b),y(ub)):void 0}function rb(a,b){return"*"==b?(w.marked="keyword",y(ub,F(";"))):"default"==b?(w.marked="keyword",y(H,F(";"))):x(G)}function sb(a){return"string"==a?y():x(tb,ub)}function tb(a,b){return"{"==a?Y(tb,"}"):("variable"==a&&z(b),y())}function ub(a,b){return"from"==b?(w.marked="keyword",y(H)):void 0}function vb(a){return"]"==a?y():x(I,wb)}function wb(a){return"for"==a?x(xb,F("]")):","==a?y(X(I,"]")):x(X(I,"]"))}function xb(a){return"for"==a?y(gb,xb):"if"==a?y(H,xb):void 0}var j,k,c=a.indentUnit,d=b.statementIndent,e=b.json,f=b.typescript,g=function(){function a(a){return{type:a,style:"keyword"}}var b=a("keyword a"),c=a("keyword b"),d=a("keyword c"),e=a("operator"),g={type:"atom",style:"atom"},h={"if":a("if"),"while":b,"with":b,"else":c,"do":c,"try":c,"finally":c,"return":d,"break":d,"continue":d,"new":d,"delete":d,"throw":d,"debugger":d,"var":a("var"),"const":a("var"),let:a("var"),"function":a("function"),"catch":a("catch"),"for":a("for"),"switch":a("switch"),"case":a("case"),"default":a("default"),"in":e,"typeof":e,"instanceof":e,"true":g,"false":g,"null":g,undefined:g,NaN:g,Infinity:g,"this":a("this"),module:a("module"),"class":a("class"),"super":a("atom"),yield:d,"export":a("export"),"import":a("import"),"extends":d};if(f){var i={type:"variable",style:"variable-3"},j={"interface":a("interface"),"extends":a("extends"),constructor:a("constructor"),"public":a("public"),"private":a("private"),"protected":a("protected"),"static":a("static"),string:i,number:i,bool:i,any:i};for(var k in j)h[k]=j[k]}return h}(),h=/[+\-*&%=<>!?|~^]/,q="([{}])",s={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,"this":!0},w={state:null,column:null,marked:null,cc:null},A={name:"this",next:{name:"arguments"}};return E.lex=!0,{startState:function(a){var d={tokenize:m,lastType:"sof",cc:[],lexical:new t((a||0)-c,0,"block",!1),localVars:b.localVars,context:b.localVars&&{vars:b.localVars},indented:0};return b.globalVars&&(d.globalVars=b.globalVars),d},token:function(a,b){if(a.sol()&&(b.lexical.hasOwnProperty("align")||(b.lexical.align=!1),b.indented=a.indentation(),r(a,b)),b.tokenize!=o&&a.eatSpace())return null;var c=b.tokenize(a,b);return"comment"==j?c:(b.lastType="operator"!=j||"++"!=k&&"--"!=k?j:"incdec",v(b,c,j,k,a))},indent:function(a,e){if(a.tokenize==o)return CodeMirror.Pass;if(a.tokenize!=m)return 0;for(var f=e&&e.charAt(0),g=a.lexical,h=a.cc.length-1;h>=0;--h){var i=a.cc[h];if(i==E)g=g.prev;else if(i!=fb)break}"stat"==g.type&&"}"==f&&(g=g.prev),d&&")"==g.type&&"stat"==g.prev.type&&(g=g.prev);var j=g.type,k=f==j;return"vardef"==j?g.indented+("operator"==a.lastType||","==a.lastType?g.info+1:0):"form"==j&&"{"==f?g.indented:"form"==j?g.indented+c:"stat"==j?g.indented+("operator"==a.lastType||","==a.lastType?d||c:0):"switch"!=g.info||k||0==b.doubleIndentSwitch?g.align?g.column+(k?0:1):g.indented+(k?0:c):g.indented+(/^(?:case|default)\b/.test(e)?c:2*c)},electricChars:":{}",blockCommentStart:e?null:"/*",blockCommentEnd:e?null:"*/",lineComment:e?null:"//",fold:"brace",helperType:e?"json":"javascript",jsonMode:e}}),CodeMirror.defineMIME("text/javascript","javascript"),CodeMirror.defineMIME("text/ecmascript","javascript"),CodeMirror.defineMIME("application/javascript","javascript"),CodeMirror.defineMIME("application/ecmascript","javascript"),CodeMirror.defineMIME("application/json",{name:"javascript",json:!0}),CodeMirror.defineMIME("application/x-json",{name:"javascript",json:!0}),CodeMirror.defineMIME("text/typescript",{name:"javascript",typescript:!0}),CodeMirror.defineMIME("application/typescript",{name:"javascript",typescript:!0}),CodeMirror.defineMode("xml",function(a,b){function k(a,b){function c(c){return b.tokenize=c,c(a,b)}var d=a.next();if("<"==d){if(a.eat("!"))return a.eat("[")?a.match("CDATA[")?c(n("atom","]]>")):null:a.match("--")?c(n("comment","-->")):a.match("DOCTYPE",!0,!0)?(a.eatWhile(/[\w\._\-]/),c(o(1))):null;if(a.eat("?"))return a.eatWhile(/[\w\._\-]/),b.tokenize=n("meta","?>"),"meta";var e=a.eat("/");h="";for(var f;f=a.eat(/[^\s\u00a0=<>\"\'\/?]/);)h+=f;return h?(i=e?"closeTag":"openTag",b.tokenize=l,"tag"):"tag error"}if("&"==d){var g;return g=a.eat("#")?a.eat("x")?a.eatWhile(/[a-fA-F\d]/)&&a.eat(";"):a.eatWhile(/[\d]/)&&a.eat(";"):a.eatWhile(/[\w\.\-:]/)&&a.eat(";"),g?"atom":"error"}return a.eatWhile(/[^&<]/),null}function l(a,b){var c=a.next();if(">"==c||"/"==c&&a.eat(">"))return b.tokenize=k,i=">"==c?"endTag":"selfcloseTag","tag";if("="==c)return i="equals",null;if("<"==c){b.tokenize=k,b.state=s,b.tagName=b.tagStart=null;var d=b.tokenize(a,b);return d?d+" error":"error"}return/[\'\"]/.test(c)?(b.tokenize=m(c),b.stringStartCol=a.column(),b.tokenize(a,b)):(a.eatWhile(/[^\s\u00a0=<>\"\']/),"word")}function m(a){var b=function(b,c){for(;!b.eol();)if(b.next()==a){c.tokenize=l;break}return"string"};return b.isInAttribute=!0,b}function n(a,b){return function(c,d){for(;!c.eol();){if(c.match(b)){d.tokenize=k;break}c.next()}return a}}function o(a){return function(b,c){for(var d;null!=(d=b.next());){if("<"==d)return c.tokenize=o(a+1),c.tokenize(b,c);if(">"==d){if(1==a){c.tokenize=k;break}return c.tokenize=o(a-1),c.tokenize(b,c)}}return"meta"}}function p(a,b,c){this.prev=a.context,this.tagName=b,this.indent=a.indented,this.startOfLine=c,(f.doNotIndent.hasOwnProperty(b)||a.context&&a.context.noIndent)&&(this.noIndent=!0)}function q(a){a.context&&(a.context=a.context.prev)}function r(a,b){for(var c;;){if(!a.context)return;if(c=a.context.tagName.toLowerCase(),!f.contextGrabbers.hasOwnProperty(c)||!f.contextGrabbers[c].hasOwnProperty(b))return;q(a)}}function s(a,b,c){if("openTag"==a)return c.tagName=h,c.tagStart=b.column(),v;if("closeTag"==a){var d=!1;return c.context?c.context.tagName!=h&&(f.implicitlyClosed.hasOwnProperty(c.context.tagName.toLowerCase())&&q(c),d=!c.context||c.context.tagName!=h):d=!0,d&&(j="error"),d?u:t}return s}function t(a,b,c){return"endTag"!=a?(j="error",t):(q(c),s)}function u(a,b,c){return j="error",t(a,b,c)}function v(a,b,c){if("word"==a)return j="attribute",w;if("endTag"==a||"selfcloseTag"==a){var d=c.tagName,e=c.tagStart;return c.tagName=c.tagStart=null,"selfcloseTag"==a||f.autoSelfClosers.hasOwnProperty(d.toLowerCase())?r(c,d.toLowerCase()):(r(c,d.toLowerCase()),c.context=new p(c,d,e==c.indented)),s}return j="error",v}function w(a,b,c){return"equals"==a?x:(f.allowMissing||(j="error"),v(a,b,c))}function x(a,b,c){return"string"==a?y:"word"==a&&f.allowUnquoted?(j="string",v):(j="error",v(a,b,c))}function y(a,b,c){return"string"==a?y:v(a,b,c)}var h,i,j,c=a.indentUnit,d=b.multilineTagIndentFactor||1,e=b.multilineTagIndentPastTag||!0,f=b.htmlMode?{autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0}:{autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1},g=b.alignCDATA;return{startState:function(){return{tokenize:k,state:s,indented:0,tagName:null,tagStart:null,context:null}},token:function(a,b){if(!b.tagName&&a.sol()&&(b.indented=a.indentation()),a.eatSpace())return null;h=i=null;var c=b.tokenize(a,b);return(c||i)&&"comment"!=c&&(j=null,b.state=b.state(i||c,a,b),j&&(c="error"==j?c+" error":j)),c},indent:function(a,b,f){var h=a.context;if(a.tokenize.isInAttribute)return a.stringStartCol+1;if(h&&h.noIndent)return CodeMirror.Pass;if(a.tokenize!=l&&a.tokenize!=k)return f?f.match(/^(\s*)/)[0].length:0;if(a.tagName)return e?a.tagStart+a.tagName.length+2:a.tagStart+c*d;if(g&&/<!\[CDATA\[/.test(b))return 0;for(h&&/^<\//.test(b)&&(h=h.prev);h&&!h.startOfLine;)h=h.prev;return h?h.indent+c:0},electricChars:"/",blockCommentStart:"<!--",blockCommentEnd:"-->",configuration:b.htmlMode?"html":"xml",helperType:b.htmlMode?"html":"xml"}}),CodeMirror.defineMIME("text/xml","xml"),CodeMirror.defineMIME("application/xml","xml"),CodeMirror.mimeModes.hasOwnProperty("text/html")||CodeMirror.defineMIME("text/html",{name:"xml",htmlMode:!0}),function(){function d(a,b){var c=a.getRange(CodeMirror.Pos(b.line,b.ch-1),CodeMirror.Pos(b.line,b.ch+1));return 2==c.length?c:null}function e(a){for(var b={name:"autoCloseBrackets",Backspace:function(b){if(b.somethingSelected()||b.getOption("disableInput"))return CodeMirror.Pass;var c=b.getCursor(),e=d(b,c);return e&&0==a.indexOf(e)%2?(b.replaceRange("",CodeMirror.Pos(c.line,c.ch-1),CodeMirror.Pos(c.line,c.ch+1)),void 0):CodeMirror.Pass}},e="",f=0;f<a.length;f+=2)!function(a,d){function f(b){var c=b.getSelection();b.replaceSelection(a+c+d)}function g(a){var b=a.getCursor(),c=a.getRange(b,CodeMirror.Pos(b.line,b.ch+1));return c!=d||a.somethingSelected()?CodeMirror.Pass:(a.execCommand("goCharRight"),void 0)}a!=d&&(e+=d),b["'"+a+"'"]=function(b){if("'"==a&&"comment"==b.getTokenAt(b.getCursor()).type||b.getOption("disableInput"))return CodeMirror.Pass;if(b.somethingSelected())return f(b);if(a!=d||g(b)==CodeMirror.Pass){var h=b.getCursor(),i=CodeMirror.Pos(h.line,h.ch+1),j=b.getLine(h.line),k=j.charAt(h.ch),l=h.ch>0?j.charAt(h.ch-1):"";return a==d&&CodeMirror.isWordChar(l)?CodeMirror.Pass:j.length==h.ch||e.indexOf(k)>=0||c.test(k)?(b.replaceSelection(a+d,{head:i,anchor:i}),void 0):CodeMirror.Pass}},a!=d&&(b["'"+d+"'"]=g)}(a.charAt(f),a.charAt(f+1));return b}function f(a){return function(b){var c=b.getCursor(),e=d(b,c);return!e||0!=a.indexOf(e)%2||b.getOption("disableInput")?CodeMirror.Pass:(b.operation(function(){var a=CodeMirror.Pos(c.line+1,0);b.replaceSelection("\n\n",{anchor:a,head:a},"+input"),b.indentLine(c.line+1,null,!0),b.indentLine(c.line+2,null,!0)}),void 0)}}var a="()[]{}''\"\"",b="[]{}",c=/\s/;CodeMirror.defineOption("autoCloseBrackets",!1,function(c,d,g){if(g!=CodeMirror.Init&&g&&c.removeKeyMap("autoCloseBrackets"),d){var h=a,i=b;"string"==typeof d?h=d:"object"==typeof d&&(null!=d.pairs&&(h=d.pairs),null!=d.explode&&(i=d.explode));var j=e(h);i&&(j.Enter=f(i)),c.addKeyMap(j)}})}(),function(){function c(c){var d=c.getCursor(),f=c.getTokenAt(d),g=CodeMirror.innerMode(c.getMode(),f.state),h=g.state;if("xml"!=g.mode.name||!h.tagName||c.getOption("disableInput"))return CodeMirror.Pass;var i=c.getOption("autoCloseTags"),j="html"==g.mode.configuration,k="object"==typeof i&&i.dontCloseTags||j&&a,l="object"==typeof i&&i.indentTags||j&&b,m=h.tagName;f.end>d.ch&&(m=m.slice(0,m.length-f.end+d.ch));var n=m.toLowerCase();if(!m||"string"==f.type&&(f.end!=d.ch||!/[\"\']/.test(f.string.charAt(f.string.length-1))||1==f.string.length)||"tag"==f.type&&"closeTag"==h.type||f.string.indexOf("/")==f.string.length-1||k&&e(k,n)>-1||CodeMirror.scanForClosingTag&&CodeMirror.scanForClosingTag(c,d,m,Math.min(c.lastLine()+1,d.line+50)))return CodeMirror.Pass;var o=l&&e(l,n)>-1,p=o?CodeMirror.Pos(d.line+1,0):CodeMirror.Pos(d.line,d.ch+1);c.replaceSelection(">"+(o?"\n\n":"")+"</"+m+">",{head:p,anchor:p}),o&&(c.indentLine(d.line+1,null,!0),c.indentLine(d.line+2,null))}function d(a){var b=a.getCursor(),c=a.getTokenAt(b),d=CodeMirror.innerMode(a.getMode(),c.state),e=d.state;if("string"==c.type||"<"!=c.string.charAt(0)||c.start!=b.ch-1||"xml"!=d.mode.name||a.getOption("disableInput"))return CodeMirror.Pass;var f=e.context&&e.context.tagName;return f?(a.replaceSelection("/"+f+">","end"),void 0):CodeMirror.Pass}function e(a,b){if(a.indexOf)return a.indexOf(b);for(var c=0,d=a.length;d>c;++c)if(a[c]==b)return c;return-1}CodeMirror.defineOption("autoCloseTags",!1,function(a,b,e){if(e!=CodeMirror.Init&&e&&a.removeKeyMap("autoCloseTags"),b){var f={name:"autoCloseTags"};("object"!=typeof b||b.whenClosing)&&(f["'/'"]=function(a){return d(a)}),("object"!=typeof b||b.whenOpening)&&(f["'>'"]=function(a){return c(a)}),a.addKeyMap(f)}});var a=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],b=["applet","blockquote","body","button","div","dl","fieldset","form","frameset","h1","h2","h3","h4","h5","h6","head","html","iframe","layer","legend","object","ol","p","select","table","ul"]}(),function(){"use strict";function d(a){var c=a.search(b);return-1==c?0:c}var a={},b=/[^\s\u00a0]/,c=CodeMirror.Pos;CodeMirror.commands.toggleComment=function(a){var b=a.getCursor("start"),c=a.getCursor("end");a.uncomment(b,c)||a.lineComment(b,c)},CodeMirror.defineExtension("lineComment",function(e,f,g){g||(g=a);var h=this,i=h.getModeAt(e),j=g.lineComment||i.lineComment;if(!j)return(g.blockCommentStart||i.blockCommentStart)&&(g.fullLines=!0,h.blockComment(e,f,g)),void 0;var k=h.getLine(e.line);if(null!=k){var l=Math.min(0!=f.ch||f.line==e.line?f.line+1:f.line,h.lastLine()+1),m=null==g.padding?" ":g.padding,n=g.commentBlankLines||e.line==f.line;h.operation(function(){if(g.indent)for(var a=k.slice(0,d(k)),f=e.line;l>f;++f){var i=h.getLine(f),o=a.length;(n||b.test(i))&&(i.slice(0,o)!=a&&(o=d(i)),h.replaceRange(a+j+m,c(f,0),c(f,o)))}else for(var f=e.line;l>f;++f)(n||b.test(h.getLine(f)))&&h.replaceRange(j+m,c(f,0))})}}),CodeMirror.defineExtension("blockComment",function(d,e,f){f||(f=a);var g=this,h=g.getModeAt(d),i=f.blockCommentStart||h.blockCommentStart,j=f.blockCommentEnd||h.blockCommentEnd;if(!i||!j)return(f.lineComment||h.lineComment)&&0!=f.fullLines&&g.lineComment(d,e,f),void 0;var k=Math.min(e.line,g.lastLine());k!=d.line&&0==e.ch&&b.test(g.getLine(k))&&--k;var l=null==f.padding?" ":f.padding;d.line>k||g.operation(function(){if(0!=f.fullLines){var a=b.test(g.getLine(k));g.replaceRange(l+j,c(k)),g.replaceRange(i+l,c(d.line,0));var m=f.blockCommentLead||h.blockCommentLead;if(null!=m)for(var n=d.line+1;k>=n;++n)(n!=k||a)&&g.replaceRange(m+l,c(n,0))}else g.replaceRange(j,e),g.replaceRange(i,d)})}),CodeMirror.defineExtension("uncomment",function(d,e,f){f||(f=a);var n,g=this,h=g.getModeAt(d),i=Math.min(e.line,g.lastLine()),j=Math.min(d.line,i),k=f.lineComment||h.lineComment,l=[],m=null==f.padding?" ":f.padding;a:if(k){for(var o=j;i>=o;++o){var p=g.getLine(o),q=p.indexOf(k);if(q>-1&&!/comment/.test(g.getTokenTypeAt(c(o,q+1)))&&(q=-1),-1==q&&(o!=i||o==j)&&b.test(p))break a;if(q>-1&&b.test(p.slice(0,q)))break a;l.push(p)}if(g.operation(function(){for(var a=j;i>=a;++a){var b=l[a-j],d=b.indexOf(k),e=d+k.length;0>d||(b.slice(e,e+m.length)==m&&(e+=m.length),n=!0,g.replaceRange("",c(a,d),c(a,e)))}}),n)return!0}var r=f.blockCommentStart||h.blockCommentStart,s=f.blockCommentEnd||h.blockCommentEnd;if(!r||!s)return!1;var t=f.blockCommentLead||h.blockCommentLead,u=g.getLine(j),v=i==j?u:g.getLine(i),w=u.indexOf(r),x=v.lastIndexOf(s);return-1==x&&j!=i&&(v=g.getLine(--i),x=v.lastIndexOf(s)),-1!=w&&-1!=x&&/comment/.test(g.getTokenTypeAt(c(j,w+1)))&&/comment/.test(g.getTokenTypeAt(c(i,x+1)))?(g.operation(function(){g.replaceRange("",c(i,x-(m&&v.slice(x-m.length,x)==m?m.length:0)),c(i,x+s.length));var a=w+r.length;if(m&&u.slice(a,a+m.length)==m&&(a+=m.length),g.replaceRange("",c(j,w),c(j,a)),t)for(var d=j+1;i>=d;++d){var e=g.getLine(d),f=e.indexOf(t);if(-1!=f&&!b.test(e.slice(0,f))){var h=f+t.length;m&&e.slice(h,h+m.length)==m&&(h+=m.length),g.replaceRange("",c(d,f),c(d,h))}}}),!0):!1})}(),function(){"use strict";var a={link:1,visited:1,active:1,hover:1,focus:1,"first-letter":1,"first-line":1,"first-child":1,before:1,after:1,lang:1};CodeMirror.registerHelper("hint","css",function(b){function k(a){for(var b in a)f&&0!=b.lastIndexOf(f,0)||j.push(b)}var c=b.getCursor(),d=b.getTokenAt(c),e=CodeMirror.innerMode(b.getMode(),d.state);if("css"==e.mode.name){var f=d.string,g=d.start,h=d.end;/[^\w$_-]/.test(f)&&(f="",g=h=c.ch);var i=CodeMirror.resolveMode("text/css"),j=[],l=d.state.state;return"pseudo"==l||"variable-3"==d.type?k(a):"block"==l||"maybeprop"==l?k(i.propertyKeywords):"prop"==l||"parens"==l||"at"==l||"params"==l?(k(i.valueKeywords),k(i.colorKeywords)):("media"==l||"media_parens"==l)&&(k(i.mediaTypes),k(i.mediaFeatures)),j.length?{list:j,from:CodeMirror.Pos(c.line,g),to:CodeMirror.Pos(c.line,h)}:void 0}})}(),function(){function b(a,b){for(var c=0,d=a.length;d>c;++c)b(a[c])}function c(a,b){if(!Array.prototype.indexOf){for(var c=a.length;c--;)if(a[c]===b)return!0;return!1}return-1!=a.indexOf(b)}function d(b,c,d,e){var f=b.getCursor(),g=d(b,f),h=g;if(!/\b(?:string|comment)\b/.test(g.type)){for(g.state=CodeMirror.innerMode(b.getMode(),g.state).state,/^[\w$_]*$/.test(g.string)||(g=h={start:f.ch,end:f.ch,string:"",state:g.state,type:"."==g.string?"property":null});"property"==h.type;){if(h=d(b,a(f.line,h.start)),"."!=h.string)return;if(h=d(b,a(f.line,h.start)),!i)var i=[];i.push(h)}return{list:m(g,i,c,e),from:a(f.line,g.start),to:a(f.line,g.end)}}}function e(a,b){return d(a,k,function(a,b){return a.getTokenAt(b)},b)}function f(a,b){var c=a.getTokenAt(b);return b.ch==c.start+1&&"."==c.string.charAt(0)?(c.end=c.start,c.string=".",c.type="property"):/^\.[\w$_]*$/.test(c.string)&&(c.type="property",c.start++,c.string=c.string.replace(/\./,"")),c}function g(a,b){return d(a,l,f,b)}function m(a,d,e,f){function l(a){0!=a.lastIndexOf(k,0)||c(g,a)||g.push(a)}function m(a){"string"==typeof a?b(h,l):a instanceof Array?b(i,l):a instanceof Function&&b(j,l);for(var c in a)l(c)}var g=[],k=a.string;if(d&&d.length){var o,n=d.pop();for(n.type&&0===n.type.indexOf("variable")?(f&&f.additionalContext&&(o=f.additionalContext[n.string]),o=o||window[n.string]):"string"==n.type?o="":"atom"==n.type?o=1:"function"==n.type&&(null==window.jQuery||"$"!=n.string&&"jQuery"!=n.string||"function"!=typeof window.jQuery?null!=window._&&"_"==n.string&&"function"==typeof window._&&(o=window._()):o=window.jQuery());null!=o&&d.length;)o=o[d.pop().string];null!=o&&m(o)}else{for(var p=a.state.localVars;p;p=p.next)l(p.name);for(var p=a.state.globalVars;p;p=p.next)l(p.name);m(window),b(e,l)}return g}var a=CodeMirror.Pos;CodeMirror.javascriptHint=e,CodeMirror.registerHelper("hint","javascript",e),CodeMirror.coffeescriptHint=g,CodeMirror.registerHelper("hint","coffeescript",g);var h="charAt charCodeAt indexOf lastIndexOf substring substr slice trim trimLeft trimRight toUpperCase toLowerCase split concat match replace search".split(" "),i="length concat join splice push pop shift unshift slice reverse sort indexOf lastIndexOf every some filter forEach map reduce reduceRight ".split(" "),j="prototype apply call bind".split(" "),k="break case catch continue debugger default delete do else false finally for function if in instanceof new null return switch throw true try typeof var void while with".split(" "),l="and break catch class continue delete do else extends false finally for if in instanceof isnt new no not null of off on or return switch then throw true try typeof until void while with yes".split(" ")}(),function(){function d(a,d,e){function r(d,e,f){if(d.text){var h=m?0:d.text.length-1,i=m?d.text.length:-1;if(d.text.length>g)return null;for(null!=f&&(h=f+n);h!=i;h+=n){var j=d.text.charAt(h);if(q.test(j)&&a.getTokenTypeAt(b(e,h+1))==o){var k=c[j];if(">"==k.charAt(1)==m)p.push(j);else{if(p.pop()!=k.charAt(0))return{pos:h,match:!1};if(!p.length)return{pos:h,match:!0}}}}}}var f=a.state.matchBrackets,g=f&&f.maxScanLineLength||1e4,h=f&&f.maxScanLines||100,i=d||a.getCursor(),j=a.getLineHandle(i.line),k=i.ch-1,l=k>=0&&c[j.text.charAt(k)]||c[j.text.charAt(++k)];if(!l)return null;var m=">"==l.charAt(1),n=m?1:-1;if(e&&m!=(k==i.ch))return null;for(var t,o=a.getTokenTypeAt(b(i.line,k+1)),p=[j.text.charAt(k)],q=/[(){}[\]]/,s=i.line,u=m?Math.min(s+h,a.lineCount()):Math.max(-1,s-h);s!=u&&!(t=s==i.line?r(j,s,k):r(a.getLineHandle(s),s));s+=n);return{from:b(i.line,k),to:t&&b(s,t.pos),match:t&&t.match,forward:m}}function e(c,e){var f=c.state.matchBrackets.maxHighlightLineLength||1e3,g=d(c);if(!(!g||c.getLine(g.from.line).length>f||g.to&&c.getLine(g.to.line).length>f)){var h=g.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket",i=c.markText(g.from,b(g.from.line,g.from.ch+1),{className:h}),j=g.to&&c.markText(g.to,b(g.to.line,g.to.ch+1),{className:h});a&&c.state.focused&&c.display.input.focus();var k=function(){c.operation(function(){i.clear(),j&&j.clear()})};return e?(setTimeout(k,800),void 0):k}}function g(a){a.operation(function(){f&&(f(),f=null),a.somethingSelected()||(f=e(a,!1))})}var a=/MSIE \d/.test(navigator.userAgent)&&(null==document.documentMode||document.documentMode<8),b=CodeMirror.Pos,c={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<"},f=null;CodeMirror.defineOption("matchBrackets",!1,function(a,b,c){c&&c!=CodeMirror.Init&&a.off("cursorActivity",g),b&&(a.state.matchBrackets="object"==typeof b?b:{},a.on("cursorActivity",g))}),CodeMirror.defineExtension("matchBrackets",function(){e(this,!0)}),CodeMirror.defineExtension("findMatchingBracket",function(a,b){return d(this,a,b)})}(),function(){"use strict";function a(a){a.state.tagHit&&a.state.tagHit.clear(),a.state.tagOther&&a.state.tagOther.clear(),a.state.tagHit=a.state.tagOther=null}function b(b){b.state.failedTagMatch=!1,b.operation(function(){if(a(b),!b.somethingSelected()){var c=b.getCursor(),d=b.getViewport();d.from=Math.min(d.from,c.line),d.to=Math.max(c.line+1,d.to);var e=CodeMirror.findMatchingTag(b,c,d);if(e){if(b.state.matchBothTags){var f="open"==e.at?e.open:e.close;f&&(b.state.tagHit=b.markText(f.from,f.to,{className:"CodeMirror-matchingtag"}))}var g="close"==e.at?e.open:e.close;g?b.state.tagOther=b.markText(g.from,g.to,{className:"CodeMirror-matchingtag"}):b.state.failedTagMatch=!0}}})}function c(a){a.state.failedTagMatch&&b(a)}CodeMirror.defineOption("matchTags",!1,function(d,e,f){f&&f!=CodeMirror.Init&&(d.off("cursorActivity",b),d.off("viewportChange",c),a(d)),e&&(d.state.matchBothTags="object"==typeof e&&e.bothTags,d.on("cursorActivity",b),d.on("viewportChange",c),b(d))}),CodeMirror.commands.toMatchingTag=function(a){var b=CodeMirror.findMatchingTag(a,a.getCursor());if(b){var c="close"==b.at?b.open:b.close;c&&a.setSelection(c.to,c.from)}}}(),CodeMirror.multiplexingMode=function(a){function d(a,b,c){if("string"==typeof b)return a.indexOf(b,c);var d=b.exec(c?a.slice(c):a);return d?d.index+c:-1}var b=Array.prototype.slice.call(arguments,1),c=b.length;return{startState:function(){return{outer:CodeMirror.startState(a),innerActive:null,inner:null}},copyState:function(b){return{outer:CodeMirror.copyState(a,b.outer),innerActive:b.innerActive,inner:b.innerActive&&CodeMirror.copyState(b.innerActive.mode,b.inner)}},token:function(e,f){if(f.innerActive){var m=f.innerActive,h=e.string;if(!m.close&&e.sol())return f.innerActive=f.inner=null,this.token(e,f);var k=m.close?d(h,m.close,e.pos):-1;if(k==e.pos)return e.match(m.close),f.innerActive=f.inner=null,m.delimStyle;k>-1&&(e.string=h.slice(0,k));var n=m.mode.token(e,f.inner);return k>-1&&(e.string=h),m.innerStyle&&(n=n?n+" "+m.innerStyle:m.innerStyle),n}for(var g=1/0,h=e.string,i=0;c>i;++i){var j=b[i],k=d(h,j.open,e.pos);if(k==e.pos)return e.match(j.open),f.innerActive=j,f.inner=CodeMirror.startState(j.mode,a.indent?a.indent(f.outer,""):0),j.delimStyle;
-1!=k&&g>k&&(g=k)}1/0!=g&&(e.string=h.slice(0,g));var l=a.token(e,f.outer);return 1/0!=g&&(e.string=h),l},indent:function(b,c){var d=b.innerActive?b.innerActive.mode:a;return d.indent?d.indent(b.innerActive?b.inner:b.outer,c):CodeMirror.Pass},blankLine:function(d){var e=d.innerActive?d.innerActive.mode:a;if(e.blankLine&&e.blankLine(d.innerActive?d.inner:d.outer),d.innerActive)"\n"===d.innerActive.close&&(d.innerActive=d.inner=null);else for(var f=0;c>f;++f){var g=b[f];"\n"===g.open&&(d.innerActive=g,d.inner=CodeMirror.startState(g.mode,e.indent?e.indent(d.outer,""):0))}},electricChars:a.electricChars,innerMode:function(b){return b.inner?{state:b.inner,mode:b.innerActive.mode}:{state:b.outer,mode:a}}}},function(){"use strict";function c(a,b,c){this.cm=a,this.getHints=b,this.options=c,this.widget=this.onClose=null}function d(a){return"string"==typeof a?a:a.text}function e(a,b){function e(a,e){var f;f="string"!=typeof e?function(a){return e(a,b)}:c.hasOwnProperty(e)?c[e]:e,d[a]=f}var c={Up:function(){b.moveFocus(-1)},Down:function(){b.moveFocus(1)},PageUp:function(){b.moveFocus(-b.menuSize()+1,!0)},PageDown:function(){b.moveFocus(b.menuSize()-1,!0)},Home:function(){b.setFocus(0)},End:function(){b.setFocus(b.length-1)},Enter:b.pick,Tab:b.pick,Esc:b.close},d=a.customKeys?{}:c;if(a.customKeys)for(var f in a.customKeys)a.customKeys.hasOwnProperty(f)&&e(f,a.customKeys[f]);if(a.extraKeys)for(var f in a.extraKeys)a.extraKeys.hasOwnProperty(f)&&e(f,a.extraKeys[f]);return d}function f(a,b){for(;b&&b!=a;){if("LI"===b.nodeName.toUpperCase()&&b.parentNode==a)return b;b=b.parentNode}}function g(c,g){this.completion=c,this.data=g;var h=this,i=c.cm,j=c.options,k=this.hints=document.createElement("ul");k.className="CodeMirror-hints",this.selectedHint=j.getDefaultSelection?j.getDefaultSelection(i,j,g):0;for(var l=g.list,m=0;m<l.length;++m){var n=k.appendChild(document.createElement("li")),o=l[m],p=a+(m!=this.selectedHint?"":" "+b);null!=o.className&&(p=o.className+" "+p),n.className=p,o.render?o.render(n,g,o):n.appendChild(document.createTextNode(o.displayText||d(o))),n.hintId=m}var q=i.cursorCoords(j.alignWithWord!==!1?g.from:null),r=q.left,s=q.bottom,t=!0;k.style.left=r+"px",k.style.top=s+"px";var u=window.innerWidth||Math.max(document.body.offsetWidth,document.documentElement.offsetWidth),v=window.innerHeight||Math.max(document.body.offsetHeight,document.documentElement.offsetHeight);(j.container||document.body).appendChild(k);var w=k.getBoundingClientRect(),x=w.bottom-v;if(x>0){var y=w.bottom-w.top,z=w.top-(q.bottom-q.top);if(z-y>0)k.style.top=(s=z-y)+"px",t=!1;else if(y>v){k.style.height=v-5+"px",k.style.top=(s=q.bottom-w.top)+"px";var A=i.getCursor();g.from.ch!=A.ch&&(q=i.cursorCoords(A),k.style.left=(r=q.left)+"px",w=k.getBoundingClientRect())}}var B=w.left-u;if(B>0&&(w.right-w.left>u&&(k.style.width=u-5+"px",B-=w.right-w.left-u),k.style.left=(r=q.left-B)+"px"),i.addKeyMap(this.keyMap=e(j,{moveFocus:function(a,b){h.changeActive(h.selectedHint+a,b)},setFocus:function(a){h.changeActive(a)},menuSize:function(){return h.screenAmount()},length:l.length,close:function(){c.close()},pick:function(){h.pick()},data:g})),j.closeOnUnfocus!==!1){var C;i.on("blur",this.onBlur=function(){C=setTimeout(function(){c.close()},100)}),i.on("focus",this.onFocus=function(){clearTimeout(C)})}var D=i.getScrollInfo();return i.on("scroll",this.onScroll=function(){var a=i.getScrollInfo(),b=i.getWrapperElement().getBoundingClientRect(),d=s+D.top-a.top,e=d-(window.pageYOffset||(document.documentElement||document.body).scrollTop);return t||(e+=k.offsetHeight),e<=b.top||e>=b.bottom?c.close():(k.style.top=d+"px",k.style.left=r+D.left-a.left+"px",void 0)}),CodeMirror.on(k,"dblclick",function(a){var b=f(k,a.target||a.srcElement);b&&null!=b.hintId&&(h.changeActive(b.hintId),h.pick())}),CodeMirror.on(k,"click",function(a){var b=f(k,a.target||a.srcElement);b&&null!=b.hintId&&(h.changeActive(b.hintId),j.completeOnSingleClick&&h.pick())}),CodeMirror.on(k,"mousedown",function(){setTimeout(function(){i.focus()},20)}),CodeMirror.signal(g,"select",l[0],k.firstChild),!0}var a="CodeMirror-hint",b="CodeMirror-hint-active";CodeMirror.showHint=function(a,b,d){if(!a.somethingSelected()){if(null==b){if(d&&d.async)return;b=CodeMirror.hint.auto}a.state.completionActive&&a.state.completionActive.close();var e=a.state.completionActive=new c(a,b,d||{});return CodeMirror.signal(a,"startCompletion",a),e.options.async?(b(a,function(a){e.showHints(a)},e.options),void 0):e.showHints(b(a,e.options))}},c.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.widget&&this.widget.close(),this.onClose&&this.onClose(),CodeMirror.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(a,b){var c=a.list[b];c.hint?c.hint(this.cm,a,c):this.cm.replaceRange(d(c),c.from||a.from,c.to||a.to),CodeMirror.signal(a,"pick",c),this.close()},showHints:function(a){return a&&a.list.length&&this.active()?(0!=this.options.completeSingle&&1==a.list.length?this.pick(a,0):this.showWidget(a),void 0):this.close()},showWidget:function(a){function k(){d||(d=!0,c.close(),c.cm.off("cursorActivity",o),a&&CodeMirror.signal(a,"close"))}function l(){d||(CodeMirror.signal(a,"update"),c.options.async?c.getHints(c.cm,m,c.options):m(c.getHints(c.cm,c.options)))}function m(b){return a=b,d?void 0:a&&a.list.length?(c.widget=new g(c,a),void 0):k()}function n(){b&&(j(b),b=0)}function o(){n();var a=c.cm.getCursor(),d=c.cm.getLine(a.line);a.line!=f.line||d.length-a.ch!=h-f.ch||a.ch<f.ch||c.cm.somethingSelected()||a.ch&&e.test(d.charAt(a.ch-1))?c.close():(b=i(l),c.widget&&c.widget.close())}this.widget=new g(this,a),CodeMirror.signal(a,"shown");var d,b=0,c=this,e=this.options.closeCharacters||/[\s()\[\]{};:>,]/,f=this.cm.getCursor(),h=this.cm.getLine(f.line).length,i=window.requestAnimationFrame||function(a){return setTimeout(a,1e3/60)},j=window.cancelAnimationFrame||clearTimeout;this.cm.on("cursorActivity",o),this.onClose=k}},g.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap);var a=this.completion.cm;this.completion.options.closeOnUnfocus!==!1&&(a.off("blur",this.onBlur),a.off("focus",this.onFocus)),a.off("scroll",this.onScroll)}},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(a,c){if(a>=this.data.list.length?a=c?this.data.list.length-1:0:0>a&&(a=c?0:this.data.list.length-1),this.selectedHint!=a){var d=this.hints.childNodes[this.selectedHint];d.className=d.className.replace(" "+b,""),d=this.hints.childNodes[this.selectedHint=a],d.className+=" "+b,d.offsetTop<this.hints.scrollTop?this.hints.scrollTop=d.offsetTop-3:d.offsetTop+d.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=d.offsetTop+d.offsetHeight-this.hints.clientHeight+3),CodeMirror.signal(this.data,"select",this.data.list[this.selectedHint],d)}},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1}},CodeMirror.registerHelper("hint","auto",function(a,b){var c=a.getHelpers(a.getCursor(),"hint");if(c.length)for(var d=0;d<c.length;d++){var e=c[d](a,b);if(e&&e.list.length)return e}else{var f=a.getHelper(a.getCursor(),"hintWords");if(f)return CodeMirror.hint.fromList(a,{words:f})}}),CodeMirror.registerHelper("hint","fromList",function(a,b){for(var c=a.getCursor(),d=a.getTokenAt(c),e=[],f=0;f<b.words.length;f++){var g=b.words[f];g.slice(0,d.string.length)==d.string&&e.push(g)}return e.length?{list:e,from:CodeMirror.Pos(c.line,d.start),to:CodeMirror.Pos(c.line,d.end)}:void 0}),CodeMirror.commands.autocomplete=CodeMirror.showHint}(),CodeMirror.defineOption("showTrailingSpace",!1,function(a,b,c){c==CodeMirror.Init&&(c=!1),c&&!b?a.removeOverlay("trailingspace"):!c&&b&&a.addOverlay({token:function(a){for(var b=a.string.length,c=b;c&&/\s/.test(a.string.charAt(c-1));--c);return c>a.pos?(a.pos=c,null):(a.pos=b,"trailingspace")},name:"trailingspace"})}),function(){"use strict";function d(a,b,c){var d=a.docs[b];d?c(G(a,d)):a.options.getFile?a.options.getFile(b,c):c(null)}function e(a,b,c){for(var d in a.docs){var e=a.docs[d];if(e.doc==b)return e}if(!c)for(var f=0;;++f)if(d="[doc"+(f||"")+"]",!a.docs[d]){c=d;break}return a.addDoc(c,b)}function f(a,b,d){var f=e(a,b),h=a.cachedArgHints;h&&h.doc==b&&x(h.start,d.to)<=0&&(a.cachedArgHints=null);var i=f.changed;null==i&&(f.changed=i={from:d.from.line,to:d.from.line});var j=d.from.line+(d.text.length-1);d.from.line<i.to&&(i.to=i.to-(d.to.line-j)),j>=i.to&&(i.to=j+1),i.from>d.from.line&&(i.from=d.from.line),b.lineCount()>c&&d.to-i.from>100&&setTimeout(function(){f.changed&&f.changed.to-f.changed.from>100&&g(a,f)},200)}function g(a,b){a.server.request({files:[{type:"full",name:b.name,text:G(a,b)}]},function(a){a?console.error(a):b.changed=null})}function h(c,d,e){c.request(d,{type:"completions",types:!0,docs:!0,urls:!0},function(f,g){if(f)return E(c,d,f);var h=[],j="",k=g.start,l=g.end;'["'==d.getRange(a(k.line,k.ch-2),k)&&'"]'!=d.getRange(l,a(l.line,l.ch+2))&&(j='"]');for(var m=0;m<g.completions.length;++m){var n=g.completions[m],o=i(n.type);g.guess&&(o+=" "+b+"guess"),h.push({text:n.name+j,displayText:n.name,className:o,data:n})}var p={from:k,to:l,list:h},q=null;CodeMirror.on(p,"close",function(){C(q)}),CodeMirror.on(p,"update",function(){C(q)}),CodeMirror.on(p,"select",function(a,d){C(q);var e=c.options.completionTip?c.options.completionTip(a.data):a.data.doc;e&&(q=B(d.parentNode.getBoundingClientRect().right+window.pageXOffset,d.getBoundingClientRect().top+window.pageYOffset,e),q.className+=" "+b+"hint-doc")}),e(p)})}function i(a){var c;return c="?"==a?"unknown":"number"==a||"string"==a||"bool"==a?a:/^fn\(/.test(a)?"fn":/^\[/.test(a)?"array":"object",b+"completion "+b+"completion-"+c}function j(a,b,c){a.request(b,"type",function(c,d){if(c)return E(a,b,c);if(a.options.typeTip)var e=a.options.typeTip(d);else{var e=y("span",null,y("strong",null,d.type||"not found"));d.doc&&e.appendChild(document.createTextNode(" \u2014 "+d.doc)),d.url&&(e.appendChild(document.createTextNode(" ")),e.appendChild(y("a",null,"[docs]")).href=d.url)}A(b,e)},c)}function k(b,c){if(F(b),!c.somethingSelected()){var d=c.getTokenAt(c.getCursor()).state,e=CodeMirror.innerMode(c.getMode(),d);if("javascript"==e.mode.name){var f=e.state.lexical;if("call"==f.info){for(var g,h=f.pos||0,i=c.getOption("tabSize"),j=c.getCursor().line,k=Math.max(0,j-9),n=!1;j>=k;--j){for(var o=c.getLine(j),p=0,q=0;;){var r=o.indexOf("	",q);if(-1==r)break;p+=i-(r+p)%i-1,q=r+1}if(g=f.column-p,"("==o.charAt(g)){n=!0;break}}if(n){var s=a(j,g),t=b.cachedArgHints;return t&&t.doc==c.getDoc()&&0==x(s,t.start)?l(b,c,h):(b.request(c,{type:"type",preferFunction:!0,end:s},function(a,d){!a&&d.type&&/^fn\(/.test(d.type)&&(b.cachedArgHints={start:q,type:m(d.type),name:d.exprName||d.name||"fn",guess:d.guess,doc:c.getDoc()},l(b,c,h))}),void 0)}}}}}function l(a,c,d){F(a);for(var e=a.cachedArgHints,f=e.type,g=y("span",e.guess?b+"fhint-guess":null,y("span",b+"fname",e.name),"("),h=0;h<f.args.length;++h){h&&g.appendChild(document.createTextNode(", "));var i=f.args[h];g.appendChild(y("span",b+"farg"+(h==d?" "+b+"farg-current":""),i.name||"?")),"?"!=i.type&&(g.appendChild(document.createTextNode(":\xa0")),g.appendChild(y("span",b+"type",i.type)))}g.appendChild(document.createTextNode(f.rettype?") ->\xa0":")")),f.rettype&&g.appendChild(y("span",b+"type",f.rettype));var j=c.cursorCoords(null,"page");a.activeArgHints=B(j.right+1,j.bottom,g)}function m(a){function d(b){for(var d=0,e=c;;){var f=a.charAt(c);if(b.test(f)&&!d)return a.slice(e,c);/[{\[\(]/.test(f)?++d:/[}\]\)]/.test(f)&&--d,++c}}var b=[],c=3;if(")"!=a.charAt(c))for(;;){var e=a.slice(c).match(/^([^, \(\[\{]+): /);if(e&&(c+=e[0].length,e=e[1]),b.push({name:e,type:d(/[\),]/)}),")"==a.charAt(c))break;c+=2}var f=a.slice(c).match(/^\) -> (.*)$/);return{args:b,rettype:f&&f[1]}}function n(a,b){function c(c){var d={type:"definition",variable:c||null},f=e(a,b.getDoc());a.server.request(v(a,f,d),function(c,d){if(c)return E(a,b,c);if(!d.file&&d.url)return window.open(d.url),void 0;if(d.file){var g,e=a.docs[d.file];if(e&&(g=q(e.doc,d)))return a.jumpStack.push({file:f.name,start:b.getCursor("from"),end:b.getCursor("to")}),p(a,f,e,g.start,g.end),void 0}E(a,b,"Could not find a definition.")})}r(b)?c():z(b,"Jump to variable",function(a){a&&c(a)})}function o(a,b){var c=a.jumpStack.pop(),d=c&&a.docs[c.file];d&&p(a,e(a,b.getDoc()),d,c.start,c.end)}function p(a,b,c,d,e){c.doc.setSelection(e,d),b!=c&&a.options.switchToDoc&&(F(a),a.options.switchToDoc(c.name))}function q(b,c){for(var d=c.context.slice(0,c.contextOffset).split("\n"),e=c.start.line-(d.length-1),f=a(e,(1==d.length?c.start.ch:b.getLine(e).length)-d[0].length),g=b.getLine(e).slice(f.ch),h=e+1;h<b.lineCount()&&g.length<c.context.length;++h)g+="\n"+b.getLine(h);if(g.slice(0,c.context.length)==c.context)return c;for(var j,i=b.getSearchCursor(c.context,0,!1),k=1/0;i.findNext();){var l=i.from(),m=1e4*Math.abs(l.line-f.line);m||(m=Math.abs(l.ch-f.ch)),k>m&&(j=l,k=m)}if(!j)return null;if(1==d.length?j.ch+=d[0].length:j=a(j.line+(d.length-1),d[d.length-1].length),c.start.line==c.end.line)var n=a(j.line,j.ch+(c.end.ch-c.start.ch));else var n=a(j.line+(c.end.line-c.start.line),c.end.ch);return{start:j,end:n}}function r(a){var b=a.getCursor("end"),c=a.getTokenAt(b);return c.start<b.ch&&("comment"==c.type||"string"==c.type)?!1:/\w/.test(a.getLine(b.line).slice(Math.max(b.ch-1,0),b.ch+1))}function s(a,b){var c=b.getTokenAt(b.getCursor());/\w/.test(c.string)||E(a,b,"Not at a variable"),z(b,"New name for "+c.string,function(c){a.request(b,{type:"rename",newName:c,fullDocs:!0},function(c,d){return c?E(a,b,c):(u(a,d.changes),void 0)})})}function u(a,b){for(var c=Object.create(null),d=0;d<b.length;++d){var e=b[d];(c[e.file]||(c[e.file]=[])).push(e)}for(var f in c){var g=a.docs[f],h=c[f];if(g){h.sort(function(a,b){return x(b.start,a.start)});for(var i="*rename"+ ++t,d=0;d<h.length;++d){var e=h[d];g.doc.replaceRange(e.text,e.start,e.end,i)}}}}function v(b,d,e,f){var g=[],h=0,i=!e.fullDocs;i||delete e.fullDocs,"string"==typeof e&&(e={type:e}),e.lineCharPositions=!0,null==e.end&&(e.end=f||d.doc.getCursor("end"),d.doc.somethingSelected()&&(e.start=d.doc.getCursor("start")));var j=e.start||e.end;if(d.changed)if(d.doc.lineCount()>c&&i!==!1&&d.changed.to-d.changed.from<100&&d.changed.from<=j.line&&d.changed.to>e.end.line){g.push(w(d,j,e.end)),e.file="#0";var h=g[0].offsetLines;null!=e.start&&(e.start=a(e.start.line- -h,e.start.ch)),e.end=a(e.end.line-h,e.end.ch)}else g.push({type:"full",name:d.name,text:G(b,d)}),e.file=d.name,d.changed=null;else e.file=d.name;for(var k in b.docs){var l=b.docs[k];l.changed&&l!=d&&(g.push({type:"full",name:l.name,text:G(b,l)}),l.changed=null)}return{query:e,files:g}}function w(b,c,d){for(var h,e=b.doc,f=null,g=null,i=4,j=c.line-1,k=Math.max(0,j-50);j>=k;--j){var l=e.getLine(j),m=l.search(/\bfunction\b/);if(!(0>m)){var n=CodeMirror.countColumn(l,null,i);null!=f&&n>=f||(f=n,g=j)}}null==g&&(g=k);var o=Math.min(e.lastLine(),d.line+20);if(null==f||f==CodeMirror.countColumn(e.getLine(c.line),null,i))h=o;else for(h=d.line+1;o>h;++h){var n=CodeMirror.countColumn(e.getLine(h),null,i);if(f>=n)break}var p=a(g,0);return{type:"part",name:b.name,offsetLines:p.line,text:e.getRange(p,a(h,0))}}function x(a,b){return a.line-b.line||a.ch-b.ch}function y(a,b){var c=document.createElement(a);b&&(c.className=b);for(var d=2;d<arguments.length;++d){var e=arguments[d];"string"==typeof e&&(e=document.createTextNode(e)),c.appendChild(e)}return c}function z(a,b,c){a.openDialog?a.openDialog(b+": <input type=text>",c):c(prompt(b,""))}function A(a,b){function e(){d.parentNode&&(a.off("cursorActivity",e),D(d))}var c=a.cursorCoords(),d=B(c.right+1,c.bottom,b);setTimeout(e,1700),a.on("cursorActivity",e)}function B(a,c,d){var e=y("div",b+"tooltip",d);return e.style.left=a+"px",e.style.top=c+"px",document.body.appendChild(e),e}function C(a){var b=a&&a.parentNode;b&&b.removeChild(a)}function D(a){a.style.opacity="0",setTimeout(function(){C(a)},1100)}function E(a,b,c){a.options.showError?a.options.showError(b,c):A(b,String(c))}function F(a){a.activeArgHints&&(C(a.activeArgHints),a.activeArgHints=null)}function G(a,b){var c=b.doc.getValue();return a.options.fileFilter&&(c=a.options.fileFilter(c,b.name,b.doc)),c}function H(a){function f(a,d){d&&(a.id=++c,e[c]=d),b.postMessage(a)}var b=new Worker(a.options.workerScript);b.postMessage({type:"init",defs:a.options.defs,plugins:a.options.plugins,scripts:a.options.workerDeps});var c=0,e={};b.onmessage=function(b){var c=b.data;"getFile"==c.type?d(a,c.name,function(a,b){f({type:"getFile",err:String(a),text:b,id:c.id})}):"debug"==c.type?console.log(c.message):c.id&&e[c.id]&&(e[c.id](c.err,c.body),delete e[c.id])},b.onerror=function(a){for(var b in e)e[b](a);e={}},this.addFile=function(a,b){f({type:"add",name:a,text:b})},this.delFile=function(a){f({type:"del",name:a})},this.request=function(a,b){f({type:"req",body:a},b)}}CodeMirror.TernServer=function(a){var b=this;this.options=a||{};var c=this.options.plugins||(this.options.plugins={});c.doc_comment||(c.doc_comment=!0),this.server=this.options.useWorker?new H(this):new tern.Server({getFile:function(a,c){return d(b,a,c)},async:!0,defs:this.options.defs||[],plugins:c}),this.docs=Object.create(null),this.trackChange=function(a,c){f(b,a,c)},this.cachedArgHints=null,this.activeArgHints=null,this.jumpStack=[]},CodeMirror.TernServer.prototype={addDoc:function(a,b){var c={doc:b,name:a,changed:null};return this.server.addFile(a,G(this,c)),CodeMirror.on(b,"change",this.trackChange),this.docs[a]=c},delDoc:function(a){var b=this.docs[a];b&&(CodeMirror.off(b.doc,"change",this.trackChange),delete this.docs[a],this.server.delFile(a))},hideDoc:function(a){F(this);var b=this.docs[a];b&&b.changed&&g(this,b)},complete:function(a){var b=this;CodeMirror.showHint(a,function(a,c){return h(b,a,c)},{async:!0})},getHint:function(a,b){return h(this,a,b)},showType:function(a,b){j(this,a,b)},updateArgHints:function(a){k(this,a)},jumpToDef:function(a){n(this,a)},jumpBack:function(a){o(this,a)},rename:function(a){s(this,a)},request:function(a,b,c,d){var f=this,g=e(this,a.getDoc()),h=v(this,g,b,d);this.server.request(h,function(a,d){!a&&f.options.responseFilter&&(d=f.options.responseFilter(g,b,h,a,d)),c(a,d)})}};var a=CodeMirror.Pos,b="CodeMirror-Tern-",c=250,t=0}();// Acorn is a tiny, fast JavaScript parser written in JavaScript.
//
// Acorn was written by Marijn Haverbeke and released under an MIT
// license. The Unicode regexps (for identifiers and whitespace) were
// taken from [Esprima](http://esprima.org) by Ariya Hidayat.
//
// Git repositories for Acorn are available at
//
//     http://marijnhaverbeke.nl/git/acorn
//     https://github.com/marijnh/acorn.git
//
// Please use the [github bug tracker][ghbt] to report issues.
//
// [ghbt]: https://github.com/marijnh/acorn/issues
//
// This file defines the main parser interface. The library also comes
// with a [error-tolerant parser][dammit] and an
// [abstract syntax tree walker][walk], defined in other files.
//
// [dammit]: acorn_loose.js
// [walk]: util/walk.js

(function(root, mod) {
  if (typeof exports == "object" && typeof module == "object") return mod(exports); // CommonJS
  if (typeof define == "function" && define.amd) return define(["exports"], mod); // AMD
  mod(root.acorn || (root.acorn = {})); // Plain browser env
})(this, function(exports) {
  "use strict";

  exports.version = "0.4.1";

  // The main exported interface (under `self.acorn` when in the
  // browser) is a `parse` function that takes a code string and
  // returns an abstract syntax tree as specified by [Mozilla parser
  // API][api], with the caveat that the SpiderMonkey-specific syntax
  // (`let`, `yield`, inline XML, etc) is not recognized.
  //
  // [api]: https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API

  var options, input, inputLen, sourceFile;

  exports.parse = function(inpt, opts) {
    input = String(inpt); inputLen = input.length;
    setOptions(opts);
    initTokenState();
    return parseTopLevel(options.program);
  };

  // A second optional argument can be given to further configure
  // the parser process. These options are recognized:

  var defaultOptions = exports.defaultOptions = {
    // `ecmaVersion` indicates the ECMAScript version to parse. Must
    // be either 3 or 5. This
    // influences support for strict mode, the set of reserved words, and
    // support for getters and setter.
    ecmaVersion: 5,
    // Turn on `strictSemicolons` to prevent the parser from doing
    // automatic semicolon insertion.
    strictSemicolons: false,
    // When `allowTrailingCommas` is false, the parser will not allow
    // trailing commas in array and object literals.
    allowTrailingCommas: true,
    // By default, reserved words are not enforced. Enable
    // `forbidReserved` to enforce them.
    forbidReserved: false,
    // When `locations` is on, `loc` properties holding objects with
    // `start` and `end` properties in `{line, column}` form (with
    // line being 1-based and column 0-based) will be attached to the
    // nodes.
    locations: false,
    // A function can be passed as `onComment` option, which will
    // cause Acorn to call that function with `(block, text, start,
    // end)` parameters whenever a comment is skipped. `block` is a
    // boolean indicating whether this is a block (`/* */`) comment,
    // `text` is the content of the comment, and `start` and `end` are
    // character offsets that denote the start and end of the comment.
    // When the `locations` option is on, two more parameters are
    // passed, the full `{line, column}` locations of the start and
    // end of the comments. Note that you are not allowed to call the
    // parser from the callback—that will corrupt its internal state.
    onComment: null,
    // Nodes have their start and end characters offsets recorded in
    // `start` and `end` properties (directly on the node, rather than
    // the `loc` object, which holds line/column data. To also add a
    // [semi-standardized][range] `range` property holding a `[start,
    // end]` array with the same numbers, set the `ranges` option to
    // `true`.
    //
    // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
    ranges: false,
    // It is possible to parse multiple files into a single AST by
    // passing the tree produced by parsing the first file as
    // `program` option in subsequent parses. This will add the
    // toplevel forms of the parsed file to the `Program` (top) node
    // of an existing parse tree.
    program: null,
    // When `locations` is on, you can pass this to record the source
    // file in every node's `loc` object.
    sourceFile: null,
    // This value, if given, is stored in every node, whether
    // `locations` is on or off.
    directSourceFile: null
  };

  function setOptions(opts) {
    options = opts || {};
    for (var opt in defaultOptions) if (!Object.prototype.hasOwnProperty.call(options, opt))
      options[opt] = defaultOptions[opt];
    sourceFile = options.sourceFile || null;
  }

  // The `getLineInfo` function is mostly useful when the
  // `locations` option is off (for performance reasons) and you
  // want to find the line/column position for a given character
  // offset. `input` should be the code string that the offset refers
  // into.

  var getLineInfo = exports.getLineInfo = function(input, offset) {
    for (var line = 1, cur = 0;;) {
      lineBreak.lastIndex = cur;
      var match = lineBreak.exec(input);
      if (match && match.index < offset) {
        ++line;
        cur = match.index + match[0].length;
      } else break;
    }
    return {line: line, column: offset - cur};
  };

  // Acorn is organized as a tokenizer and a recursive-descent parser.
  // The `tokenize` export provides an interface to the tokenizer.
  // Because the tokenizer is optimized for being efficiently used by
  // the Acorn parser itself, this interface is somewhat crude and not
  // very modular. Performing another parse or call to `tokenize` will
  // reset the internal state, and invalidate existing tokenizers.

  exports.tokenize = function(inpt, opts) {
    input = String(inpt); inputLen = input.length;
    setOptions(opts);
    initTokenState();

    var t = {};
    function getToken(forceRegexp) {
      lastEnd = tokEnd;
      readToken(forceRegexp);
      t.start = tokStart; t.end = tokEnd;
      t.startLoc = tokStartLoc; t.endLoc = tokEndLoc;
      t.type = tokType; t.value = tokVal;
      return t;
    }
    getToken.jumpTo = function(pos, reAllowed) {
      tokPos = pos;
      if (options.locations) {
        tokCurLine = 1;
        tokLineStart = lineBreak.lastIndex = 0;
        var match;
        while ((match = lineBreak.exec(input)) && match.index < pos) {
          ++tokCurLine;
          tokLineStart = match.index + match[0].length;
        }
      }
      tokRegexpAllowed = reAllowed;
      skipSpace();
    };
    return getToken;
  };

  // State is kept in (closure-)global variables. We already saw the
  // `options`, `input`, and `inputLen` variables above.

  // The current position of the tokenizer in the input.

  var tokPos;

  // The start and end offsets of the current token.

  var tokStart, tokEnd;

  // When `options.locations` is true, these hold objects
  // containing the tokens start and end line/column pairs.

  var tokStartLoc, tokEndLoc;

  // The type and value of the current token. Token types are objects,
  // named by variables against which they can be compared, and
  // holding properties that describe them (indicating, for example,
  // the precedence of an infix operator, and the original name of a
  // keyword token). The kind of value that's held in `tokVal` depends
  // on the type of the token. For literals, it is the literal value,
  // for operators, the operator name, and so on.

  var tokType, tokVal;

  // Interal state for the tokenizer. To distinguish between division
  // operators and regular expressions, it remembers whether the last
  // token was one that is allowed to be followed by an expression.
  // (If it is, a slash is probably a regexp, if it isn't it's a
  // division operator. See the `parseStatement` function for a
  // caveat.)

  var tokRegexpAllowed;

  // When `options.locations` is true, these are used to keep
  // track of the current line, and know when a new line has been
  // entered.

  var tokCurLine, tokLineStart;

  // These store the position of the previous token, which is useful
  // when finishing a node and assigning its `end` position.

  var lastStart, lastEnd, lastEndLoc;

  // This is the parser's state. `inFunction` is used to reject
  // `return` statements outside of functions, `labels` to verify that
  // `break` and `continue` have somewhere to jump to, and `strict`
  // indicates whether strict mode is on.

  var inFunction, labels, strict;

  // This function is used to raise exceptions on parse errors. It
  // takes an offset integer (into the current `input`) to indicate
  // the location of the error, attaches the position to the end
  // of the error message, and then raises a `SyntaxError` with that
  // message.

  function raise(pos, message) {
    var loc = getLineInfo(input, pos);
    message += " (" + loc.line + ":" + loc.column + ")";
    var err = new SyntaxError(message);
    err.pos = pos; err.loc = loc; err.raisedAt = tokPos;
    throw err;
  }

  // Reused empty array added for node fields that are always empty.

  var empty = [];

  // ## Token types

  // The assignment of fine-grained, information-carrying type objects
  // allows the tokenizer to store the information it has about a
  // token in a way that is very cheap for the parser to look up.

  // All token type variables start with an underscore, to make them
  // easy to recognize.

  // These are the general types. The `type` property is only used to
  // make them recognizeable when debugging.

  var _num = {type: "num"}, _regexp = {type: "regexp"}, _string = {type: "string"};
  var _name = {type: "name"}, _eof = {type: "eof"};

  // Keyword tokens. The `keyword` property (also used in keyword-like
  // operators) indicates that the token originated from an
  // identifier-like word, which is used when parsing property names.
  //
  // The `beforeExpr` property is used to disambiguate between regular
  // expressions and divisions. It is set on all token types that can
  // be followed by an expression (thus, a slash after them would be a
  // regular expression).
  //
  // `isLoop` marks a keyword as starting a loop, which is important
  // to know when parsing a label, in order to allow or disallow
  // continue jumps to that label.

  var _break = {keyword: "break"}, _case = {keyword: "case", beforeExpr: true}, _catch = {keyword: "catch"};
  var _continue = {keyword: "continue"}, _debugger = {keyword: "debugger"}, _default = {keyword: "default"};
  var _do = {keyword: "do", isLoop: true}, _else = {keyword: "else", beforeExpr: true};
  var _finally = {keyword: "finally"}, _for = {keyword: "for", isLoop: true}, _function = {keyword: "function"};
  var _if = {keyword: "if"}, _return = {keyword: "return", beforeExpr: true}, _switch = {keyword: "switch"};
  var _throw = {keyword: "throw", beforeExpr: true}, _try = {keyword: "try"}, _var = {keyword: "var"};
  var _while = {keyword: "while", isLoop: true}, _with = {keyword: "with"}, _new = {keyword: "new", beforeExpr: true};
  var _this = {keyword: "this"};

  // The keywords that denote values.

  var _null = {keyword: "null", atomValue: null}, _true = {keyword: "true", atomValue: true};
  var _false = {keyword: "false", atomValue: false};

  // Some keywords are treated as regular operators. `in` sometimes
  // (when parsing `for`) needs to be tested against specifically, so
  // we assign a variable name to it for quick comparing.

  var _in = {keyword: "in", binop: 7, beforeExpr: true};

  // Map keyword names to token types.

  var keywordTypes = {"break": _break, "case": _case, "catch": _catch,
                      "continue": _continue, "debugger": _debugger, "default": _default,
                      "do": _do, "else": _else, "finally": _finally, "for": _for,
                      "function": _function, "if": _if, "return": _return, "switch": _switch,
                      "throw": _throw, "try": _try, "var": _var, "while": _while, "with": _with,
                      "null": _null, "true": _true, "false": _false, "new": _new, "in": _in,
                      "instanceof": {keyword: "instanceof", binop: 7, beforeExpr: true}, "this": _this,
                      "typeof": {keyword: "typeof", prefix: true, beforeExpr: true},
                      "void": {keyword: "void", prefix: true, beforeExpr: true},
                      "delete": {keyword: "delete", prefix: true, beforeExpr: true}};

  // Punctuation token types. Again, the `type` property is purely for debugging.

  var _bracketL = {type: "[", beforeExpr: true}, _bracketR = {type: "]"}, _braceL = {type: "{", beforeExpr: true};
  var _braceR = {type: "}"}, _parenL = {type: "(", beforeExpr: true}, _parenR = {type: ")"};
  var _comma = {type: ",", beforeExpr: true}, _semi = {type: ";", beforeExpr: true};
  var _colon = {type: ":", beforeExpr: true}, _dot = {type: "."}, _question = {type: "?", beforeExpr: true};

  // Operators. These carry several kinds of properties to help the
  // parser use them properly (the presence of these properties is
  // what categorizes them as operators).
  //
  // `binop`, when present, specifies that this operator is a binary
  // operator, and will refer to its precedence.
  //
  // `prefix` and `postfix` mark the operator as a prefix or postfix
  // unary operator. `isUpdate` specifies that the node produced by
  // the operator should be of type UpdateExpression rather than
  // simply UnaryExpression (`++` and `--`).
  //
  // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
  // binary operators with a very low precedence, that should result
  // in AssignmentExpression nodes.

  var _slash = {binop: 10, beforeExpr: true}, _eq = {isAssign: true, beforeExpr: true};
  var _assign = {isAssign: true, beforeExpr: true};
  var _incDec = {postfix: true, prefix: true, isUpdate: true}, _prefix = {prefix: true, beforeExpr: true};
  var _logicalOR = {binop: 1, beforeExpr: true};
  var _logicalAND = {binop: 2, beforeExpr: true};
  var _bitwiseOR = {binop: 3, beforeExpr: true};
  var _bitwiseXOR = {binop: 4, beforeExpr: true};
  var _bitwiseAND = {binop: 5, beforeExpr: true};
  var _equality = {binop: 6, beforeExpr: true};
  var _relational = {binop: 7, beforeExpr: true};
  var _bitShift = {binop: 8, beforeExpr: true};
  var _plusMin = {binop: 9, prefix: true, beforeExpr: true};
  var _multiplyModulo = {binop: 10, beforeExpr: true};

  // Provide access to the token types for external users of the
  // tokenizer.

  exports.tokTypes = {bracketL: _bracketL, bracketR: _bracketR, braceL: _braceL, braceR: _braceR,
                      parenL: _parenL, parenR: _parenR, comma: _comma, semi: _semi, colon: _colon,
                      dot: _dot, question: _question, slash: _slash, eq: _eq, name: _name, eof: _eof,
                      num: _num, regexp: _regexp, string: _string};
  for (var kw in keywordTypes) exports.tokTypes["_" + kw] = keywordTypes[kw];

  // This is a trick taken from Esprima. It turns out that, on
  // non-Chrome browsers, to check whether a string is in a set, a
  // predicate containing a big ugly `switch` statement is faster than
  // a regular expression, and on Chrome the two are about on par.
  // This function uses `eval` (non-lexical) to produce such a
  // predicate from a space-separated string of words.
  //
  // It starts by sorting the words by length.

  function makePredicate(words) {
    words = words.split(" ");
    var f = "", cats = [];
    out: for (var i = 0; i < words.length; ++i) {
      for (var j = 0; j < cats.length; ++j)
        if (cats[j][0].length == words[i].length) {
          cats[j].push(words[i]);
          continue out;
        }
      cats.push([words[i]]);
    }
    function compareTo(arr) {
      if (arr.length == 1) return f += "return str === " + JSON.stringify(arr[0]) + ";";
      f += "switch(str){";
      for (var i = 0; i < arr.length; ++i) f += "case " + JSON.stringify(arr[i]) + ":";
      f += "return true}return false;";
    }

    // When there are more than three length categories, an outer
    // switch first dispatches on the lengths, to save on comparisons.

    if (cats.length > 3) {
      cats.sort(function(a, b) {return b.length - a.length;});
      f += "switch(str.length){";
      for (var i = 0; i < cats.length; ++i) {
        var cat = cats[i];
        f += "case " + cat[0].length + ":";
        compareTo(cat);
      }
      f += "}";

    // Otherwise, simply generate a flat `switch` statement.

    } else {
      compareTo(words);
    }
    return new Function("str", f);
  }

  // The ECMAScript 3 reserved word list.

  var isReservedWord3 = makePredicate("abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile");

  // ECMAScript 5 reserved words.

  var isReservedWord5 = makePredicate("class enum extends super const export import");

  // The additional reserved words in strict mode.

  var isStrictReservedWord = makePredicate("implements interface let package private protected public static yield");

  // The forbidden variable names in strict mode.

  var isStrictBadIdWord = makePredicate("eval arguments");

  // And the keywords.

  var isKeyword = makePredicate("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this");

  // ## Character categories

  // Big ugly regular expressions that match characters in the
  // whitespace, identifier, and identifier-start categories. These
  // are only applied when a character is found to actually have a
  // code point above 128.

  var nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
  var nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";
  var nonASCIIidentifierChars = "\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u0620-\u0649\u0672-\u06d3\u06e7-\u06e8\u06fb-\u06fc\u0730-\u074a\u0800-\u0814\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0840-\u0857\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962-\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09d7\u09df-\u09e0\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5f-\u0b60\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2-\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d46-\u0d48\u0d57\u0d62-\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e34-\u0e3a\u0e40-\u0e45\u0e50-\u0e59\u0eb4-\u0eb9\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f41-\u0f47\u0f71-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1029\u1040-\u1049\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u170e-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17b2\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1920-\u192b\u1930-\u193b\u1951-\u196d\u19b0-\u19c0\u19c8-\u19c9\u19d0-\u19d9\u1a00-\u1a15\u1a20-\u1a53\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b46-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1bb0-\u1bb9\u1be6-\u1bf3\u1c00-\u1c22\u1c40-\u1c49\u1c5b-\u1c7d\u1cd0-\u1cd2\u1d00-\u1dbe\u1e01-\u1f15\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2d81-\u2d96\u2de0-\u2dff\u3021-\u3028\u3099\u309a\ua640-\ua66d\ua674-\ua67d\ua69f\ua6f0-\ua6f1\ua7f8-\ua800\ua806\ua80b\ua823-\ua827\ua880-\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8f3-\ua8f7\ua900-\ua909\ua926-\ua92d\ua930-\ua945\ua980-\ua983\ua9b3-\ua9c0\uaa00-\uaa27\uaa40-\uaa41\uaa4c-\uaa4d\uaa50-\uaa59\uaa7b\uaae0-\uaae9\uaaf2-\uaaf3\uabc0-\uabe1\uabec\uabed\uabf0-\uabf9\ufb20-\ufb28\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";
  var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
  var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

  // Whether a single character denotes a newline.

  var newline = /[\n\r\u2028\u2029]/;

  // Matches a whole line break (where CRLF is considered a single
  // line break). Used to count lines.

  var lineBreak = /\r\n|[\n\r\u2028\u2029]/g;

  // Test whether a given character code starts an identifier.

  var isIdentifierStart = exports.isIdentifierStart = function(code) {
    if (code < 65) return code === 36;
    if (code < 91) return true;
    if (code < 97) return code === 95;
    if (code < 123)return true;
    return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code));
  };

  // Test whether a given character is part of an identifier.

  var isIdentifierChar = exports.isIdentifierChar = function(code) {
    if (code < 48) return code === 36;
    if (code < 58) return true;
    if (code < 65) return false;
    if (code < 91) return true;
    if (code < 97) return code === 95;
    if (code < 123)return true;
    return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code));
  };

  // ## Tokenizer

  // These are used when `options.locations` is on, for the
  // `tokStartLoc` and `tokEndLoc` properties.

  function line_loc_t() {
    this.line = tokCurLine;
    this.column = tokPos - tokLineStart;
  }

  // Reset the token state. Used at the start of a parse.

  function initTokenState() {
    tokCurLine = 1;
    tokPos = tokLineStart = 0;
    tokRegexpAllowed = true;
    skipSpace();
  }

  // Called at the end of every token. Sets `tokEnd`, `tokVal`, and
  // `tokRegexpAllowed`, and skips the space after the token, so that
  // the next one's `tokStart` will point at the right position.

  function finishToken(type, val) {
    tokEnd = tokPos;
    if (options.locations) tokEndLoc = new line_loc_t;
    tokType = type;
    skipSpace();
    tokVal = val;
    tokRegexpAllowed = type.beforeExpr;
  }

  function skipBlockComment() {
    var startLoc = options.onComment && options.locations && new line_loc_t;
    var start = tokPos, end = input.indexOf("*/", tokPos += 2);
    if (end === -1) raise(tokPos - 2, "Unterminated comment");
    tokPos = end + 2;
    if (options.locations) {
      lineBreak.lastIndex = start;
      var match;
      while ((match = lineBreak.exec(input)) && match.index < tokPos) {
        ++tokCurLine;
        tokLineStart = match.index + match[0].length;
      }
    }
    if (options.onComment)
      options.onComment(true, input.slice(start + 2, end), start, tokPos,
                        startLoc, options.locations && new line_loc_t);
  }

  function skipLineComment() {
    var start = tokPos;
    var startLoc = options.onComment && options.locations && new line_loc_t;
    var ch = input.charCodeAt(tokPos+=2);
    while (tokPos < inputLen && ch !== 10 && ch !== 13 && ch !== 8232 && ch !== 8233) {
      ++tokPos;
      ch = input.charCodeAt(tokPos);
    }
    if (options.onComment)
      options.onComment(false, input.slice(start + 2, tokPos), start, tokPos,
                        startLoc, options.locations && new line_loc_t);
  }

  // Called at the start of the parse and after every token. Skips
  // whitespace and comments, and.

  function skipSpace() {
    while (tokPos < inputLen) {
      var ch = input.charCodeAt(tokPos);
      if (ch === 32) { // ' '
        ++tokPos;
      } else if (ch === 13) {
        ++tokPos;
        var next = input.charCodeAt(tokPos);
        if (next === 10) {
          ++tokPos;
        }
        if (options.locations) {
          ++tokCurLine;
          tokLineStart = tokPos;
        }
      } else if (ch === 10 || ch === 8232 || ch === 8233) {
        ++tokPos;
        if (options.locations) {
          ++tokCurLine;
          tokLineStart = tokPos;
        }
      } else if (ch > 8 && ch < 14) {
        ++tokPos;
      } else if (ch === 47) { // '/'
        var next = input.charCodeAt(tokPos + 1);
        if (next === 42) { // '*'
          skipBlockComment();
        } else if (next === 47) { // '/'
          skipLineComment();
        } else break;
      } else if (ch === 160) { // '\xa0'
        ++tokPos;
      } else if (ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
        ++tokPos;
      } else {
        break;
      }
    }
  }

  // ### Token reading

  // This is the function that is called to fetch the next token. It
  // is somewhat obscure, because it works in character codes rather
  // than characters, and because operator parsing has been inlined
  // into it.
  //
  // All in the name of speed.
  //
  // The `forceRegexp` parameter is used in the one case where the
  // `tokRegexpAllowed` trick does not work. See `parseStatement`.

  function readToken_dot() {
    var next = input.charCodeAt(tokPos + 1);
    if (next >= 48 && next <= 57) return readNumber(true);
    ++tokPos;
    return finishToken(_dot);
  }

  function readToken_slash() { // '/'
    var next = input.charCodeAt(tokPos + 1);
    if (tokRegexpAllowed) {++tokPos; return readRegexp();}
    if (next === 61) return finishOp(_assign, 2);
    return finishOp(_slash, 1);
  }

  function readToken_mult_modulo() { // '%*'
    var next = input.charCodeAt(tokPos + 1);
    if (next === 61) return finishOp(_assign, 2);
    return finishOp(_multiplyModulo, 1);
  }

  function readToken_pipe_amp(code) { // '|&'
    var next = input.charCodeAt(tokPos + 1);
    if (next === code) return finishOp(code === 124 ? _logicalOR : _logicalAND, 2);
    if (next === 61) return finishOp(_assign, 2);
    return finishOp(code === 124 ? _bitwiseOR : _bitwiseAND, 1);
  }

  function readToken_caret() { // '^'
    var next = input.charCodeAt(tokPos + 1);
    if (next === 61) return finishOp(_assign, 2);
    return finishOp(_bitwiseXOR, 1);
  }

  function readToken_plus_min(code) { // '+-'
    var next = input.charCodeAt(tokPos + 1);
    if (next === code) {
      if (next == 45 && input.charCodeAt(tokPos + 2) == 62 &&
          newline.test(input.slice(lastEnd, tokPos))) {
        // A `-->` line comment
        tokPos += 3;
        skipLineComment();
        skipSpace();
        return readToken();
      }
      return finishOp(_incDec, 2);
    }
    if (next === 61) return finishOp(_assign, 2);
    return finishOp(_plusMin, 1);
  }

  function readToken_lt_gt(code) { // '<>'
    var next = input.charCodeAt(tokPos + 1);
    var size = 1;
    if (next === code) {
      size = code === 62 && input.charCodeAt(tokPos + 2) === 62 ? 3 : 2;
      if (input.charCodeAt(tokPos + size) === 61) return finishOp(_assign, size + 1);
      return finishOp(_bitShift, size);
    }
    if (next == 33 && code == 60 && input.charCodeAt(tokPos + 2) == 45 &&
        input.charCodeAt(tokPos + 3) == 45) {
      // `<!--`, an XML-style comment that should be interpreted as a line comment
      tokPos += 4;
      skipLineComment();
      skipSpace();
      return readToken();
    }
    if (next === 61)
      size = input.charCodeAt(tokPos + 2) === 61 ? 3 : 2;
    return finishOp(_relational, size);
  }

  function readToken_eq_excl(code) { // '=!'
    var next = input.charCodeAt(tokPos + 1);
    if (next === 61) return finishOp(_equality, input.charCodeAt(tokPos + 2) === 61 ? 3 : 2);
    return finishOp(code === 61 ? _eq : _prefix, 1);
  }

  function getTokenFromCode(code) {
    switch(code) {
      // The interpretation of a dot depends on whether it is followed
      // by a digit.
    case 46: // '.'
      return readToken_dot();

      // Punctuation tokens.
    case 40: ++tokPos; return finishToken(_parenL);
    case 41: ++tokPos; return finishToken(_parenR);
    case 59: ++tokPos; return finishToken(_semi);
    case 44: ++tokPos; return finishToken(_comma);
    case 91: ++tokPos; return finishToken(_bracketL);
    case 93: ++tokPos; return finishToken(_bracketR);
    case 123: ++tokPos; return finishToken(_braceL);
    case 125: ++tokPos; return finishToken(_braceR);
    case 58: ++tokPos; return finishToken(_colon);
    case 63: ++tokPos; return finishToken(_question);

      // '0x' is a hexadecimal number.
    case 48: // '0'
      var next = input.charCodeAt(tokPos + 1);
      if (next === 120 || next === 88) return readHexNumber();
      // Anything else beginning with a digit is an integer, octal
      // number, or float.
    case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57: // 1-9
      return readNumber(false);

      // Quotes produce strings.
    case 34: case 39: // '"', "'"
      return readString(code);

    // Operators are parsed inline in tiny state machines. '=' (61) is
    // often referred to. `finishOp` simply skips the amount of
    // characters it is given as second argument, and returns a token
    // of the type given by its first argument.

    case 47: // '/'
      return readToken_slash(code);

    case 37: case 42: // '%*'
      return readToken_mult_modulo();

    case 124: case 38: // '|&'
      return readToken_pipe_amp(code);

    case 94: // '^'
      return readToken_caret();

    case 43: case 45: // '+-'
      return readToken_plus_min(code);

    case 60: case 62: // '<>'
      return readToken_lt_gt(code);

    case 61: case 33: // '=!'
      return readToken_eq_excl(code);

    case 126: // '~'
      return finishOp(_prefix, 1);
    }

    return false;
  }

  function readToken(forceRegexp) {
    if (!forceRegexp) tokStart = tokPos;
    else tokPos = tokStart + 1;
    if (options.locations) tokStartLoc = new line_loc_t;
    if (forceRegexp) return readRegexp();
    if (tokPos >= inputLen) return finishToken(_eof);

    var code = input.charCodeAt(tokPos);
    // Identifier or keyword. '\uXXXX' sequences are allowed in
    // identifiers, so '\' also dispatches to that.
    if (isIdentifierStart(code) || code === 92 /* '\' */) return readWord();

    var tok = getTokenFromCode(code);

    if (tok === false) {
      // If we are here, we either found a non-ASCII identifier
      // character, or something that's entirely disallowed.
      var ch = String.fromCharCode(code);
      if (ch === "\\" || nonASCIIidentifierStart.test(ch)) return readWord();
      raise(tokPos, "Unexpected character '" + ch + "'");
    }
    return tok;
  }

  function finishOp(type, size) {
    var str = input.slice(tokPos, tokPos + size);
    tokPos += size;
    finishToken(type, str);
  }

  // Parse a regular expression. Some context-awareness is necessary,
  // since a '/' inside a '[]' set does not end the expression.

  function readRegexp() {
    var content = "", escaped, inClass, start = tokPos;
    for (;;) {
      if (tokPos >= inputLen) raise(start, "Unterminated regular expression");
      var ch = input.charAt(tokPos);
      if (newline.test(ch)) raise(start, "Unterminated regular expression");
      if (!escaped) {
        if (ch === "[") inClass = true;
        else if (ch === "]" && inClass) inClass = false;
        else if (ch === "/" && !inClass) break;
        escaped = ch === "\\";
      } else escaped = false;
      ++tokPos;
    }
    var content = input.slice(start, tokPos);
    ++tokPos;
    // Need to use `readWord1` because '\uXXXX' sequences are allowed
    // here (don't ask).
    var mods = readWord1();
    if (mods && !/^[gmsiy]*$/.test(mods)) raise(start, "Invalid regexp flag");
    try {
      var value = new RegExp(content, mods);
    } catch (e) {
      if (e instanceof SyntaxError) raise(start, e.message);
      raise(e);
    }
    return finishToken(_regexp, value);
  }

  // Read an integer in the given radix. Return null if zero digits
  // were read, the integer value otherwise. When `len` is given, this
  // will return `null` unless the integer has exactly `len` digits.

  function readInt(radix, len) {
    var start = tokPos, total = 0;
    for (var i = 0, e = len == null ? Infinity : len; i < e; ++i) {
      var code = input.charCodeAt(tokPos), val;
      if (code >= 97) val = code - 97 + 10; // a
      else if (code >= 65) val = code - 65 + 10; // A
      else if (code >= 48 && code <= 57) val = code - 48; // 0-9
      else val = Infinity;
      if (val >= radix) break;
      ++tokPos;
      total = total * radix + val;
    }
    if (tokPos === start || len != null && tokPos - start !== len) return null;

    return total;
  }

  function readHexNumber() {
    tokPos += 2; // 0x
    var val = readInt(16);
    if (val == null) raise(tokStart + 2, "Expected hexadecimal number");
    if (isIdentifierStart(input.charCodeAt(tokPos))) raise(tokPos, "Identifier directly after number");
    return finishToken(_num, val);
  }

  // Read an integer, octal integer, or floating-point number.

  function readNumber(startsWithDot) {
    var start = tokPos, isFloat = false, octal = input.charCodeAt(tokPos) === 48;
    if (!startsWithDot && readInt(10) === null) raise(start, "Invalid number");
    if (input.charCodeAt(tokPos) === 46) {
      ++tokPos;
      readInt(10);
      isFloat = true;
    }
    var next = input.charCodeAt(tokPos);
    if (next === 69 || next === 101) { // 'eE'
      next = input.charCodeAt(++tokPos);
      if (next === 43 || next === 45) ++tokPos; // '+-'
      if (readInt(10) === null) raise(start, "Invalid number");
      isFloat = true;
    }
    if (isIdentifierStart(input.charCodeAt(tokPos))) raise(tokPos, "Identifier directly after number");

    var str = input.slice(start, tokPos), val;
    if (isFloat) val = parseFloat(str);
    else if (!octal || str.length === 1) val = parseInt(str, 10);
    else if (/[89]/.test(str) || strict) raise(start, "Invalid number");
    else val = parseInt(str, 8);
    return finishToken(_num, val);
  }

  // Read a string value, interpreting backslash-escapes.

  function readString(quote) {
    tokPos++;
    var out = "";
    for (;;) {
      if (tokPos >= inputLen) raise(tokStart, "Unterminated string constant");
      var ch = input.charCodeAt(tokPos);
      if (ch === quote) {
        ++tokPos;
        return finishToken(_string, out);
      }
      if (ch === 92) { // '\'
        ch = input.charCodeAt(++tokPos);
        var octal = /^[0-7]+/.exec(input.slice(tokPos, tokPos + 3));
        if (octal) octal = octal[0];
        while (octal && parseInt(octal, 8) > 255) octal = octal.slice(0, -1);
        if (octal === "0") octal = null;
        ++tokPos;
        if (octal) {
          if (strict) raise(tokPos - 2, "Octal literal in strict mode");
          out += String.fromCharCode(parseInt(octal, 8));
          tokPos += octal.length - 1;
        } else {
          switch (ch) {
          case 110: out += "\n"; break; // 'n' -> '\n'
          case 114: out += "\r"; break; // 'r' -> '\r'
          case 120: out += String.fromCharCode(readHexChar(2)); break; // 'x'
          case 117: out += String.fromCharCode(readHexChar(4)); break; // 'u'
          case 85: out += String.fromCharCode(readHexChar(8)); break; // 'U'
          case 116: out += "\t"; break; // 't' -> '\t'
          case 98: out += "\b"; break; // 'b' -> '\b'
          case 118: out += "\u000b"; break; // 'v' -> '\u000b'
          case 102: out += "\f"; break; // 'f' -> '\f'
          case 48: out += "\0"; break; // 0 -> '\0'
          case 13: if (input.charCodeAt(tokPos) === 10) ++tokPos; // '\r\n'
          case 10: // ' \n'
            if (options.locations) { tokLineStart = tokPos; ++tokCurLine; }
            break;
          default: out += String.fromCharCode(ch); break;
          }
        }
      } else {
        if (ch === 13 || ch === 10 || ch === 8232 || ch === 8233) raise(tokStart, "Unterminated string constant");
        out += String.fromCharCode(ch); // '\'
        ++tokPos;
      }
    }
  }

  // Used to read character escape sequences ('\x', '\u', '\U').

  function readHexChar(len) {
    var n = readInt(16, len);
    if (n === null) raise(tokStart, "Bad character escape sequence");
    return n;
  }

  // Used to signal to callers of `readWord1` whether the word
  // contained any escape sequences. This is needed because words with
  // escape sequences must not be interpreted as keywords.

  var containsEsc;

  // Read an identifier, and return it as a string. Sets `containsEsc`
  // to whether the word contained a '\u' escape.
  //
  // Only builds up the word character-by-character when it actually
  // containeds an escape, as a micro-optimization.

  function readWord1() {
    containsEsc = false;
    var word, first = true, start = tokPos;
    for (;;) {
      var ch = input.charCodeAt(tokPos);
      if (isIdentifierChar(ch)) {
        if (containsEsc) word += input.charAt(tokPos);
        ++tokPos;
      } else if (ch === 92) { // "\"
        if (!containsEsc) word = input.slice(start, tokPos);
        containsEsc = true;
        if (input.charCodeAt(++tokPos) != 117) // "u"
          raise(tokPos, "Expecting Unicode escape sequence \\uXXXX");
        ++tokPos;
        var esc = readHexChar(4);
        var escStr = String.fromCharCode(esc);
        if (!escStr) raise(tokPos - 1, "Invalid Unicode escape");
        if (!(first ? isIdentifierStart(esc) : isIdentifierChar(esc)))
          raise(tokPos - 4, "Invalid Unicode escape");
        word += escStr;
      } else {
        break;
      }
      first = false;
    }
    return containsEsc ? word : input.slice(start, tokPos);
  }

  // Read an identifier or keyword token. Will check for reserved
  // words when necessary.

  function readWord() {
    var word = readWord1();
    var type = _name;
    if (!containsEsc) {
      if (isKeyword(word)) type = keywordTypes[word];
      else if (options.forbidReserved &&
               (options.ecmaVersion === 3 ? isReservedWord3 : isReservedWord5)(word) ||
               strict && isStrictReservedWord(word))
        raise(tokStart, "The keyword '" + word + "' is reserved");
    }
    return finishToken(type, word);
  }

  // ## Parser

  // A recursive descent parser operates by defining functions for all
  // syntactic elements, and recursively calling those, each function
  // advancing the input stream and returning an AST node. Precedence
  // of constructs (for example, the fact that `!x[1]` means `!(x[1])`
  // instead of `(!x)[1]` is handled by the fact that the parser
  // function that parses unary prefix operators is called first, and
  // in turn calls the function that parses `[]` subscripts — that
  // way, it'll receive the node for `x[1]` already parsed, and wraps
  // *that* in the unary operator node.
  //
  // Acorn uses an [operator precedence parser][opp] to handle binary
  // operator precedence, because it is much more compact than using
  // the technique outlined above, which uses different, nesting
  // functions to specify precedence, for all of the ten binary
  // precedence levels that JavaScript defines.
  //
  // [opp]: http://en.wikipedia.org/wiki/Operator-precedence_parser

  // ### Parser utilities

  // Continue to the next token.

  function next() {
    lastStart = tokStart;
    lastEnd = tokEnd;
    lastEndLoc = tokEndLoc;
    readToken();
  }

  // Enter strict mode. Re-reads the next token to please pedantic
  // tests ("use strict"; 010; -- should fail).

  function setStrict(strct) {
    strict = strct;
    tokPos = tokStart;
    if (options.locations) {
      while (tokPos < tokLineStart) {
        tokLineStart = input.lastIndexOf("\n", tokLineStart - 2) + 1;
        --tokCurLine;
      }
    }
    skipSpace();
    readToken();
  }

  // Start an AST node, attaching a start offset.

  function node_t() {
    this.type = null;
    this.start = tokStart;
    this.end = null;
  }

  function node_loc_t() {
    this.start = tokStartLoc;
    this.end = null;
    if (sourceFile !== null) this.source = sourceFile;
  }

  function startNode() {
    var node = new node_t();
    if (options.locations)
      node.loc = new node_loc_t();
    if (options.directSourceFile)
      node.sourceFile = options.directSourceFile;
    if (options.ranges)
      node.range = [tokStart, 0];
    return node;
  }

  // Start a node whose start offset information should be based on
  // the start of another node. For example, a binary operator node is
  // only started after its left-hand side has already been parsed.

  function startNodeFrom(other) {
    var node = new node_t();
    node.start = other.start;
    if (options.locations) {
      node.loc = new node_loc_t();
      node.loc.start = other.loc.start;
    }
    if (options.ranges)
      node.range = [other.range[0], 0];

    return node;
  }

  // Finish an AST node, adding `type` and `end` properties.

  function finishNode(node, type) {
    node.type = type;
    node.end = lastEnd;
    if (options.locations)
      node.loc.end = lastEndLoc;
    if (options.ranges)
      node.range[1] = lastEnd;
    return node;
  }

  // Test whether a statement node is the string literal `"use strict"`.

  function isUseStrict(stmt) {
    return options.ecmaVersion >= 5 && stmt.type === "ExpressionStatement" &&
      stmt.expression.type === "Literal" && stmt.expression.value === "use strict";
  }

  // Predicate that tests whether the next token is of the given
  // type, and if yes, consumes it as a side effect.

  function eat(type) {
    if (tokType === type) {
      next();
      return true;
    }
  }

  // Test whether a semicolon can be inserted at the current position.

  function canInsertSemicolon() {
    return !options.strictSemicolons &&
      (tokType === _eof || tokType === _braceR || newline.test(input.slice(lastEnd, tokStart)));
  }

  // Consume a semicolon, or, failing that, see if we are allowed to
  // pretend that there is a semicolon at this position.

  function semicolon() {
    if (!eat(_semi) && !canInsertSemicolon()) unexpected();
  }

  // Expect a token of a given type. If found, consume it, otherwise,
  // raise an unexpected token error.

  function expect(type) {
    if (tokType === type) next();
    else unexpected();
  }

  // Raise an unexpected token error.

  function unexpected() {
    raise(tokStart, "Unexpected token");
  }

  // Verify that a node is an lval — something that can be assigned
  // to.

  function checkLVal(expr) {
    if (expr.type !== "Identifier" && expr.type !== "MemberExpression")
      raise(expr.start, "Assigning to rvalue");
    if (strict && expr.type === "Identifier" && isStrictBadIdWord(expr.name))
      raise(expr.start, "Assigning to " + expr.name + " in strict mode");
  }

  // ### Statement parsing

  // Parse a program. Initializes the parser, reads any number of
  // statements, and wraps them in a Program node.  Optionally takes a
  // `program` argument.  If present, the statements will be appended
  // to its body instead of creating a new node.

  function parseTopLevel(program) {
    lastStart = lastEnd = tokPos;
    if (options.locations) lastEndLoc = new line_loc_t;
    inFunction = strict = null;
    labels = [];
    readToken();

    var node = program || startNode(), first = true;
    if (!program) node.body = [];
    while (tokType !== _eof) {
      var stmt = parseStatement();
      node.body.push(stmt);
      if (first && isUseStrict(stmt)) setStrict(true);
      first = false;
    }
    return finishNode(node, "Program");
  }

  var loopLabel = {kind: "loop"}, switchLabel = {kind: "switch"};

  // Parse a single statement.
  //
  // If expecting a statement and finding a slash operator, parse a
  // regular expression literal. This is to handle cases like
  // `if (foo) /blah/.exec(foo);`, where looking at the previous token
  // does not help.

  function parseStatement() {
    if (tokType === _slash || tokType === _assign && tokVal == "/=")
      readToken(true);

    var starttype = tokType, node = startNode();

    // Most types of statements are recognized by the keyword they
    // start with. Many are trivial to parse, some require a bit of
    // complexity.

    switch (starttype) {
    case _break: case _continue:
      next();
      var isBreak = starttype === _break;
      if (eat(_semi) || canInsertSemicolon()) node.label = null;
      else if (tokType !== _name) unexpected();
      else {
        node.label = parseIdent();
        semicolon();
      }

      // Verify that there is an actual destination to break or
      // continue to.
      for (var i = 0; i < labels.length; ++i) {
        var lab = labels[i];
        if (node.label == null || lab.name === node.label.name) {
          if (lab.kind != null && (isBreak || lab.kind === "loop")) break;
          if (node.label && isBreak) break;
        }
      }
      if (i === labels.length) raise(node.start, "Unsyntactic " + starttype.keyword);
      return finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");

    case _debugger:
      next();
      semicolon();
      return finishNode(node, "DebuggerStatement");

    case _do:
      next();
      labels.push(loopLabel);
      node.body = parseStatement();
      labels.pop();
      expect(_while);
      node.test = parseParenExpression();
      semicolon();
      return finishNode(node, "DoWhileStatement");

      // Disambiguating between a `for` and a `for`/`in` loop is
      // non-trivial. Basically, we have to parse the init `var`
      // statement or expression, disallowing the `in` operator (see
      // the second parameter to `parseExpression`), and then check
      // whether the next token is `in`. When there is no init part
      // (semicolon immediately after the opening parenthesis), it is
      // a regular `for` loop.

    case _for:
      next();
      labels.push(loopLabel);
      expect(_parenL);
      if (tokType === _semi) return parseFor(node, null);
      if (tokType === _var) {
        var init = startNode();
        next();
        parseVar(init, true);
        finishNode(init, "VariableDeclaration");
        if (init.declarations.length === 1 && eat(_in))
          return parseForIn(node, init);
        return parseFor(node, init);
      }
      var init = parseExpression(false, true);
      if (eat(_in)) {checkLVal(init); return parseForIn(node, init);}
      return parseFor(node, init);

    case _function:
      next();
      return parseFunction(node, true);

    case _if:
      next();
      node.test = parseParenExpression();
      node.consequent = parseStatement();
      node.alternate = eat(_else) ? parseStatement() : null;
      return finishNode(node, "IfStatement");

    case _return:
      if (!inFunction) raise(tokStart, "'return' outside of function");
      next();

      // In `return` (and `break`/`continue`), the keywords with
      // optional arguments, we eagerly look for a semicolon or the
      // possibility to insert one.

      if (eat(_semi) || canInsertSemicolon()) node.argument = null;
      else { node.argument = parseExpression(); semicolon(); }
      return finishNode(node, "ReturnStatement");

    case _switch:
      next();
      node.discriminant = parseParenExpression();
      node.cases = [];
      expect(_braceL);
      labels.push(switchLabel);

      // Statements under must be grouped (by label) in SwitchCase
      // nodes. `cur` is used to keep the node that we are currently
      // adding statements to.

      for (var cur, sawDefault; tokType != _braceR;) {
        if (tokType === _case || tokType === _default) {
          var isCase = tokType === _case;
          if (cur) finishNode(cur, "SwitchCase");
          node.cases.push(cur = startNode());
          cur.consequent = [];
          next();
          if (isCase) cur.test = parseExpression();
          else {
            if (sawDefault) raise(lastStart, "Multiple default clauses"); sawDefault = true;
            cur.test = null;
          }
          expect(_colon);
        } else {
          if (!cur) unexpected();
          cur.consequent.push(parseStatement());
        }
      }
      if (cur) finishNode(cur, "SwitchCase");
      next(); // Closing brace
      labels.pop();
      return finishNode(node, "SwitchStatement");

    case _throw:
      next();
      if (newline.test(input.slice(lastEnd, tokStart)))
        raise(lastEnd, "Illegal newline after throw");
      node.argument = parseExpression();
      semicolon();
      return finishNode(node, "ThrowStatement");

    case _try:
      next();
      node.block = parseBlock();
      node.handler = null;
      if (tokType === _catch) {
        var clause = startNode();
        next();
        expect(_parenL);
        clause.param = parseIdent();
        if (strict && isStrictBadIdWord(clause.param.name))
          raise(clause.param.start, "Binding " + clause.param.name + " in strict mode");
        expect(_parenR);
        clause.guard = null;
        clause.body = parseBlock();
        node.handler = finishNode(clause, "CatchClause");
      }
      node.guardedHandlers = empty;
      node.finalizer = eat(_finally) ? parseBlock() : null;
      if (!node.handler && !node.finalizer)
        raise(node.start, "Missing catch or finally clause");
      return finishNode(node, "TryStatement");

    case _var:
      next();
      parseVar(node);
      semicolon();
      return finishNode(node, "VariableDeclaration");

    case _while:
      next();
      node.test = parseParenExpression();
      labels.push(loopLabel);
      node.body = parseStatement();
      labels.pop();
      return finishNode(node, "WhileStatement");

    case _with:
      if (strict) raise(tokStart, "'with' in strict mode");
      next();
      node.object = parseParenExpression();
      node.body = parseStatement();
      return finishNode(node, "WithStatement");

    case _braceL:
      return parseBlock();

    case _semi:
      next();
      return finishNode(node, "EmptyStatement");

      // If the statement does not start with a statement keyword or a
      // brace, it's an ExpressionStatement or LabeledStatement. We
      // simply start parsing an expression, and afterwards, if the
      // next token is a colon and the expression was a simple
      // Identifier node, we switch to interpreting it as a label.

    default:
      var maybeName = tokVal, expr = parseExpression();
      if (starttype === _name && expr.type === "Identifier" && eat(_colon)) {
        for (var i = 0; i < labels.length; ++i)
          if (labels[i].name === maybeName) raise(expr.start, "Label '" + maybeName + "' is already declared");
        var kind = tokType.isLoop ? "loop" : tokType === _switch ? "switch" : null;
        labels.push({name: maybeName, kind: kind});
        node.body = parseStatement();
        labels.pop();
        node.label = expr;
        return finishNode(node, "LabeledStatement");
      } else {
        node.expression = expr;
        semicolon();
        return finishNode(node, "ExpressionStatement");
      }
    }
  }

  // Used for constructs like `switch` and `if` that insist on
  // parentheses around their expression.

  function parseParenExpression() {
    expect(_parenL);
    var val = parseExpression();
    expect(_parenR);
    return val;
  }

  // Parse a semicolon-enclosed block of statements, handling `"use
  // strict"` declarations when `allowStrict` is true (used for
  // function bodies).

  function parseBlock(allowStrict) {
    var node = startNode(), first = true, strict = false, oldStrict;
    node.body = [];
    expect(_braceL);
    while (!eat(_braceR)) {
      var stmt = parseStatement();
      node.body.push(stmt);
      if (first && allowStrict && isUseStrict(stmt)) {
        oldStrict = strict;
        setStrict(strict = true);
      }
      first = false;
    }
    if (strict && !oldStrict) setStrict(false);
    return finishNode(node, "BlockStatement");
  }

  // Parse a regular `for` loop. The disambiguation code in
  // `parseStatement` will already have parsed the init statement or
  // expression.

  function parseFor(node, init) {
    node.init = init;
    expect(_semi);
    node.test = tokType === _semi ? null : parseExpression();
    expect(_semi);
    node.update = tokType === _parenR ? null : parseExpression();
    expect(_parenR);
    node.body = parseStatement();
    labels.pop();
    return finishNode(node, "ForStatement");
  }

  // Parse a `for`/`in` loop.

  function parseForIn(node, init) {
    node.left = init;
    node.right = parseExpression();
    expect(_parenR);
    node.body = parseStatement();
    labels.pop();
    return finishNode(node, "ForInStatement");
  }

  // Parse a list of variable declarations.

  function parseVar(node, noIn) {
    node.declarations = [];
    node.kind = "var";
    for (;;) {
      var decl = startNode();
      decl.id = parseIdent();
      if (strict && isStrictBadIdWord(decl.id.name))
        raise(decl.id.start, "Binding " + decl.id.name + " in strict mode");
      decl.init = eat(_eq) ? parseExpression(true, noIn) : null;
      node.declarations.push(finishNode(decl, "VariableDeclarator"));
      if (!eat(_comma)) break;
    }
    return node;
  }

  // ### Expression parsing

  // These nest, from the most general expression type at the top to
  // 'atomic', nondivisible expression types at the bottom. Most of
  // the functions will simply let the function(s) below them parse,
  // and, *if* the syntactic construct they handle is present, wrap
  // the AST node that the inner parser gave them in another node.

  // Parse a full expression. The arguments are used to forbid comma
  // sequences (in argument lists, array literals, or object literals)
  // or the `in` operator (in for loops initalization expressions).

  function parseExpression(noComma, noIn) {
    var expr = parseMaybeAssign(noIn);
    if (!noComma && tokType === _comma) {
      var node = startNodeFrom(expr);
      node.expressions = [expr];
      while (eat(_comma)) node.expressions.push(parseMaybeAssign(noIn));
      return finishNode(node, "SequenceExpression");
    }
    return expr;
  }

  // Parse an assignment expression. This includes applications of
  // operators like `+=`.

  function parseMaybeAssign(noIn) {
    var left = parseMaybeConditional(noIn);
    if (tokType.isAssign) {
      var node = startNodeFrom(left);
      node.operator = tokVal;
      node.left = left;
      next();
      node.right = parseMaybeAssign(noIn);
      checkLVal(left);
      return finishNode(node, "AssignmentExpression");
    }
    return left;
  }

  // Parse a ternary conditional (`?:`) operator.

  function parseMaybeConditional(noIn) {
    var expr = parseExprOps(noIn);
    if (eat(_question)) {
      var node = startNodeFrom(expr);
      node.test = expr;
      node.consequent = parseExpression(true);
      expect(_colon);
      node.alternate = parseExpression(true, noIn);
      return finishNode(node, "ConditionalExpression");
    }
    return expr;
  }

  // Start the precedence parser.

  function parseExprOps(noIn) {
    return parseExprOp(parseMaybeUnary(), -1, noIn);
  }

  // Parse binary operators with the operator precedence parsing
  // algorithm. `left` is the left-hand side of the operator.
  // `minPrec` provides context that allows the function to stop and
  // defer further parser to one of its callers when it encounters an
  // operator that has a lower precedence than the set it is parsing.

  function parseExprOp(left, minPrec, noIn) {
    var prec = tokType.binop;
    if (prec != null && (!noIn || tokType !== _in)) {
      if (prec > minPrec) {
        var node = startNodeFrom(left);
        node.left = left;
        node.operator = tokVal;
        var op = tokType;
        next();
        node.right = parseExprOp(parseMaybeUnary(), prec, noIn);
        var exprNode = finishNode(node, (op === _logicalOR || op === _logicalAND) ? "LogicalExpression" : "BinaryExpression");
        return parseExprOp(exprNode, minPrec, noIn);
      }
    }
    return left;
  }

  // Parse unary operators, both prefix and postfix.

  function parseMaybeUnary() {
    if (tokType.prefix) {
      var node = startNode(), update = tokType.isUpdate;
      node.operator = tokVal;
      node.prefix = true;
      tokRegexpAllowed = true;
      next();
      node.argument = parseMaybeUnary();
      if (update) checkLVal(node.argument);
      else if (strict && node.operator === "delete" &&
               node.argument.type === "Identifier")
        raise(node.start, "Deleting local variable in strict mode");
      return finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
    }
    var expr = parseExprSubscripts();
    while (tokType.postfix && !canInsertSemicolon()) {
      var node = startNodeFrom(expr);
      node.operator = tokVal;
      node.prefix = false;
      node.argument = expr;
      checkLVal(expr);
      next();
      expr = finishNode(node, "UpdateExpression");
    }
    return expr;
  }

  // Parse call, dot, and `[]`-subscript expressions.

  function parseExprSubscripts() {
    return parseSubscripts(parseExprAtom());
  }

  function parseSubscripts(base, noCalls) {
    if (eat(_dot)) {
      var node = startNodeFrom(base);
      node.object = base;
      node.property = parseIdent(true);
      node.computed = false;
      return parseSubscripts(finishNode(node, "MemberExpression"), noCalls);
    } else if (eat(_bracketL)) {
      var node = startNodeFrom(base);
      node.object = base;
      node.property = parseExpression();
      node.computed = true;
      expect(_bracketR);
      return parseSubscripts(finishNode(node, "MemberExpression"), noCalls);
    } else if (!noCalls && eat(_parenL)) {
      var node = startNodeFrom(base);
      node.callee = base;
      node.arguments = parseExprList(_parenR, false);
      return parseSubscripts(finishNode(node, "CallExpression"), noCalls);
    } else return base;
  }

  // Parse an atomic expression — either a single token that is an
  // expression, an expression started by a keyword like `function` or
  // `new`, or an expression wrapped in punctuation like `()`, `[]`,
  // or `{}`.

  function parseExprAtom() {
    switch (tokType) {
    case _this:
      var node = startNode();
      next();
      return finishNode(node, "ThisExpression");
    case _name:
      return parseIdent();
    case _num: case _string: case _regexp:
      var node = startNode();
      node.value = tokVal;
      node.raw = input.slice(tokStart, tokEnd);
      next();
      return finishNode(node, "Literal");

    case _null: case _true: case _false:
      var node = startNode();
      node.value = tokType.atomValue;
      node.raw = tokType.keyword;
      next();
      return finishNode(node, "Literal");

    case _parenL:
      var tokStartLoc1 = tokStartLoc, tokStart1 = tokStart;
      next();
      var val = parseExpression();
      val.start = tokStart1;
      val.end = tokEnd;
      if (options.locations) {
        val.loc.start = tokStartLoc1;
        val.loc.end = tokEndLoc;
      }
      if (options.ranges)
        val.range = [tokStart1, tokEnd];
      expect(_parenR);
      return val;

    case _bracketL:
      var node = startNode();
      next();
      node.elements = parseExprList(_bracketR, true, true);
      return finishNode(node, "ArrayExpression");

    case _braceL:
      return parseObj();

    case _function:
      var node = startNode();
      next();
      return parseFunction(node, false);

    case _new:
      return parseNew();

    default:
      unexpected();
    }
  }

  // New's precedence is slightly tricky. It must allow its argument
  // to be a `[]` or dot subscript expression, but not a call — at
  // least, not without wrapping it in parentheses. Thus, it uses the

  function parseNew() {
    var node = startNode();
    next();
    node.callee = parseSubscripts(parseExprAtom(), true);
    if (eat(_parenL)) node.arguments = parseExprList(_parenR, false);
    else node.arguments = empty;
    return finishNode(node, "NewExpression");
  }

  // Parse an object literal.

  function parseObj() {
    var node = startNode(), first = true, sawGetSet = false;
    node.properties = [];
    next();
    while (!eat(_braceR)) {
      if (!first) {
        expect(_comma);
        if (options.allowTrailingCommas && eat(_braceR)) break;
      } else first = false;

      var prop = {key: parsePropertyName()}, isGetSet = false, kind;
      if (eat(_colon)) {
        prop.value = parseExpression(true);
        kind = prop.kind = "init";
      } else if (options.ecmaVersion >= 5 && prop.key.type === "Identifier" &&
                 (prop.key.name === "get" || prop.key.name === "set")) {
        isGetSet = sawGetSet = true;
        kind = prop.kind = prop.key.name;
        prop.key = parsePropertyName();
        if (tokType !== _parenL) unexpected();
        prop.value = parseFunction(startNode(), false);
      } else unexpected();

      // getters and setters are not allowed to clash — either with
      // each other or with an init property — and in strict mode,
      // init properties are also not allowed to be repeated.

      if (prop.key.type === "Identifier" && (strict || sawGetSet)) {
        for (var i = 0; i < node.properties.length; ++i) {
          var other = node.properties[i];
          if (other.key.name === prop.key.name) {
            var conflict = kind == other.kind || isGetSet && other.kind === "init" ||
              kind === "init" && (other.kind === "get" || other.kind === "set");
            if (conflict && !strict && kind === "init" && other.kind === "init") conflict = false;
            if (conflict) raise(prop.key.start, "Redefinition of property");
          }
        }
      }
      node.properties.push(prop);
    }
    return finishNode(node, "ObjectExpression");
  }

  function parsePropertyName() {
    if (tokType === _num || tokType === _string) return parseExprAtom();
    return parseIdent(true);
  }

  // Parse a function declaration or literal (depending on the
  // `isStatement` parameter).

  function parseFunction(node, isStatement) {
    if (tokType === _name) node.id = parseIdent();
    else if (isStatement) unexpected();
    else node.id = null;
    node.params = [];
    var first = true;
    expect(_parenL);
    while (!eat(_parenR)) {
      if (!first) expect(_comma); else first = false;
      node.params.push(parseIdent());
    }

    // Start a new scope with regard to labels and the `inFunction`
    // flag (restore them to their old value afterwards).
    var oldInFunc = inFunction, oldLabels = labels;
    inFunction = true; labels = [];
    node.body = parseBlock(true);
    inFunction = oldInFunc; labels = oldLabels;

    // If this is a strict mode function, verify that argument names
    // are not repeated, and it does not try to bind the words `eval`
    // or `arguments`.
    if (strict || node.body.body.length && isUseStrict(node.body.body[0])) {
      for (var i = node.id ? -1 : 0; i < node.params.length; ++i) {
        var id = i < 0 ? node.id : node.params[i];
        if (isStrictReservedWord(id.name) || isStrictBadIdWord(id.name))
          raise(id.start, "Defining '" + id.name + "' in strict mode");
        if (i >= 0) for (var j = 0; j < i; ++j) if (id.name === node.params[j].name)
          raise(id.start, "Argument name clash in strict mode");
      }
    }

    return finishNode(node, isStatement ? "FunctionDeclaration" : "FunctionExpression");
  }

  // Parses a comma-separated list of expressions, and returns them as
  // an array. `close` is the token type that ends the list, and
  // `allowEmpty` can be turned on to allow subsequent commas with
  // nothing in between them to be parsed as `null` (which is needed
  // for array literals).

  function parseExprList(close, allowTrailingComma, allowEmpty) {
    var elts = [], first = true;
    while (!eat(close)) {
      if (!first) {
        expect(_comma);
        if (allowTrailingComma && options.allowTrailingCommas && eat(close)) break;
      } else first = false;

      if (allowEmpty && tokType === _comma) elts.push(null);
      else elts.push(parseExpression(true));
    }
    return elts;
  }

  // Parse the next token as an identifier. If `liberal` is true (used
  // when parsing properties), it will also convert keywords into
  // identifiers.

  function parseIdent(liberal) {
    var node = startNode();
    node.name = tokType === _name ? tokVal : (liberal && !options.forbidReserved && tokType.keyword) || unexpected();
    tokRegexpAllowed = false;
    next();
    return finishNode(node, "Identifier");
  }

});
// Acorn: Loose parser
//
// This module provides an alternative parser (`parse_dammit`) that
// exposes that same interface as `parse`, but will try to parse
// anything as JavaScript, repairing syntax error the best it can.
// There are circumstances in which it will raise an error and give
// up, but they are very rare. The resulting AST will be a mostly
// valid JavaScript AST (as per the [Mozilla parser API][api], except
// that:
//
// - Return outside functions is allowed
//
// - Label consistency (no conflicts, break only to existing labels)
//   is not enforced.
//
// - Bogus Identifier nodes with a name of `"✖"` are inserted whenever
//   the parser got too confused to return anything meaningful.
//
// [api]: https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API
//
// The expected use for this is to *first* try `acorn.parse`, and only
// if that fails switch to `parse_dammit`. The loose parser might
// parse badly indented code incorrectly, so **don't** use it as
// your default parser.
//
// Quite a lot of acorn.js is duplicated here. The alternative was to
// add a *lot* of extra cruft to that file, making it less readable
// and slower. Copying and editing the code allowed me to make
// invasive changes and simplifications without creating a complicated
// tangle.

(function(root, mod) {
  if (typeof exports == "object" && typeof module == "object") return mod(exports, require("./acorn")); // CommonJS
  if (typeof define == "function" && define.amd) return define(["exports", "./acorn"], mod); // AMD
  mod(root.acorn || (root.acorn = {}), root.acorn); // Plain browser env
})(this, function(exports, acorn) {
  "use strict";

  var tt = acorn.tokTypes;

  var options, input, fetchToken, context;

  exports.parse_dammit = function(inpt, opts) {
    if (!opts) opts = {};
    input = String(inpt);
    options = opts;
    if (!opts.tabSize) opts.tabSize = 4;
    fetchToken = acorn.tokenize(inpt, opts);
    sourceFile = options.sourceFile || null;
    context = [];
    nextLineStart = 0;
    ahead.length = 0;
    next();
    return parseTopLevel();
  };

  var lastEnd, token = {start: 0, end: 0}, ahead = [];
  var curLineStart, nextLineStart, curIndent, lastEndLoc, sourceFile;

  function next() {
    lastEnd = token.end;
    if (options.locations)
      lastEndLoc = token.endLoc;

    if (ahead.length)
      token = ahead.shift();
    else
      token = readToken();

    if (token.start >= nextLineStart) {
      while (token.start >= nextLineStart) {
        curLineStart = nextLineStart;
        nextLineStart = lineEnd(curLineStart) + 1;
      }
      curIndent = indentationAfter(curLineStart);
    }
  }

  function readToken() {
    for (;;) {
      try {
        return fetchToken();
      } catch(e) {
        if (!(e instanceof SyntaxError)) throw e;

        // Try to skip some text, based on the error message, and then continue
        var msg = e.message, pos = e.raisedAt, replace = true;
        if (/unterminated/i.test(msg)) {
          pos = lineEnd(e.pos);
          if (/string/.test(msg)) {
            replace = {start: e.pos, end: pos, type: tt.string, value: input.slice(e.pos + 1, pos)};
          } else if (/regular expr/i.test(msg)) {
            var re = input.slice(e.pos, pos);
            try { re = new RegExp(re); } catch(e) {}
            replace = {start: e.pos, end: pos, type: tt.regexp, value: re};
          } else {
            replace = false;
          }
        } else if (/invalid (unicode|regexp|number)|expecting unicode|octal literal|is reserved|directly after number/i.test(msg)) {
          while (pos < input.length && !isSpace(input.charCodeAt(pos))) ++pos;
        } else if (/character escape|expected hexadecimal/i.test(msg)) {
          while (pos < input.length) {
            var ch = input.charCodeAt(pos++);
            if (ch === 34 || ch === 39 || isNewline(ch)) break;
          }
        } else if (/unexpected character/i.test(msg)) {
          pos++;
          replace = false;
        } else {
          throw e;
        }
        resetTo(pos);
        if (replace === true) replace = {start: pos, end: pos, type: tt.name, value: "✖"};
        if (replace) {
          if (options.locations) {
            replace.startLoc = acorn.getLineInfo(input, replace.start);
            replace.endLoc = acorn.getLineInfo(input, replace.end);
          }
          return replace;
        }
      }
    }
  }

  function resetTo(pos) {
    var ch = input.charAt(pos - 1);
    var reAllowed = !ch || /[\[\{\(,;:?\/*=+\-~!|&%^<>]/.test(ch) ||
      /[enwfd]/.test(ch) && /\b(keywords|case|else|return|throw|new|in|(instance|type)of|delete|void)$/.test(input.slice(pos - 10, pos));
    fetchToken.jumpTo(pos, reAllowed);
  }

  function copyToken(token) {
    var copy = {start: token.start, end: token.end, type: token.type, value: token.value};
    if (options.locations) {
      copy.startLoc = token.startLoc;
      copy.endLoc = token.endLoc;
    }
    return copy;
  }

  function lookAhead(n) {
    // Copy token objects, because fetchToken will overwrite the one
    // it returns, and in this case we still need it
    if (!ahead.length)
      token = copyToken(token);
    while (n > ahead.length)
      ahead.push(copyToken(readToken()));
    return ahead[n-1];
  }

  var newline = /[\n\r\u2028\u2029]/;

  function isNewline(ch) {
    return ch === 10 || ch === 13 || ch === 8232 || ch === 8329;
  }
  function isSpace(ch) {
    return (ch < 14 && ch > 8) || ch === 32 || ch === 160 || isNewline(ch);
  }

  function pushCx() {
    context.push(curIndent);
  }
  function popCx() {
    curIndent = context.pop();
  }

  function lineEnd(pos) {
    while (pos < input.length && !isNewline(input.charCodeAt(pos))) ++pos;
    return pos;
  }
  function indentationAfter(pos) {
    for (var count = 0;; ++pos) {
      var ch = input.charCodeAt(pos);
      if (ch === 32) ++count;
      else if (ch === 9) count += options.tabSize;
      else return count;
    }
  }

  function closes(closeTok, indent, line, blockHeuristic) {
    if (token.type === closeTok || token.type === tt.eof) return true;
    if (line != curLineStart && curIndent < indent && tokenStartsLine() &&
        (!blockHeuristic || nextLineStart >= input.length ||
         indentationAfter(nextLineStart) < indent)) return true;
    return false;
  }

  function tokenStartsLine() {
    for (var p = token.start - 1; p >= curLineStart; --p) {
      var ch = input.charCodeAt(p);
      if (ch !== 9 && ch !== 32) return false;
    }
    return true;
  }

  function node_t(start) {
    this.type = null;
    this.start = start;
    this.end = null;
  }

  function node_loc_t(start) {
    this.start = start || token.startLoc || {line: 1, column: 0};
    this.end = null;
    if (sourceFile !== null) this.source = sourceFile;
  }

  function startNode() {
    var node = new node_t(token.start);
    if (options.locations)
      node.loc = new node_loc_t();
    if (options.directSourceFile)
      node.sourceFile = options.directSourceFile;
    return node;
  }

  function startNodeFrom(other) {
    var node = new node_t(other.start);
    if (options.locations)
      node.loc = new node_loc_t(other.loc.start);
    return node;
  }

  function finishNode(node, type) {
    node.type = type;
    node.end = lastEnd;
    if (options.locations)
      node.loc.end = lastEndLoc;
    return node;
  }

  function getDummyLoc() {
    if (options.locations) {
      var loc = new node_loc_t();
      loc.end = loc.start;
      return loc;
    }
  };

  function dummyIdent() {
    var dummy = new node_t(token.start);
    dummy.type = "Identifier";
    dummy.end = token.start;
    dummy.name = "✖";
    dummy.loc = getDummyLoc();
    return dummy;
  }
  function isDummy(node) { return node.name == "✖"; }

  function eat(type) {
    if (token.type === type) {
      next();
      return true;
    }
  }

  function canInsertSemicolon() {
    return (token.type === tt.eof || token.type === tt.braceR || newline.test(input.slice(lastEnd, token.start)));
  }
  function semicolon() {
    eat(tt.semi);
  }

  function expect(type) {
    if (eat(type)) return true;
    if (lookAhead(1).type == type) {
      next(); next();
      return true;
    }
    if (lookAhead(2).type == type) {
      next(); next(); next();
      return true;
    }
  }

  function checkLVal(expr) {
    if (expr.type === "Identifier" || expr.type === "MemberExpression") return expr;
    return dummyIdent();
  }

  function parseTopLevel() {
    var node = startNode();
    node.body = [];
    while (token.type !== tt.eof) node.body.push(parseStatement());
    return finishNode(node, "Program");
  }

  function parseStatement() {
    var starttype = token.type, node = startNode();

    switch (starttype) {
    case tt._break: case tt._continue:
      next();
      var isBreak = starttype === tt._break;
      node.label = token.type === tt.name ? parseIdent() : null;
      semicolon();
      return finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");

    case tt._debugger:
      next();
      semicolon();
      return finishNode(node, "DebuggerStatement");

    case tt._do:
      next();
      node.body = parseStatement();
      node.test = eat(tt._while) ? parseParenExpression() : dummyIdent();
      semicolon();
      return finishNode(node, "DoWhileStatement");

    case tt._for:
      next();
      pushCx();
      expect(tt.parenL);
      if (token.type === tt.semi) return parseFor(node, null);
      if (token.type === tt._var) {
        var init = startNode();
        next();
        parseVar(init, true);
        if (init.declarations.length === 1 && eat(tt._in))
          return parseForIn(node, init);
        return parseFor(node, init);
      }
      var init = parseExpression(false, true);
      if (eat(tt._in)) {return parseForIn(node, checkLVal(init));}
      return parseFor(node, init);

    case tt._function:
      next();
      return parseFunction(node, true);

    case tt._if:
      next();
      node.test = parseParenExpression();
      node.consequent = parseStatement();
      node.alternate = eat(tt._else) ? parseStatement() : null;
      return finishNode(node, "IfStatement");

    case tt._return:
      next();
      if (eat(tt.semi) || canInsertSemicolon()) node.argument = null;
      else { node.argument = parseExpression(); semicolon(); }
      return finishNode(node, "ReturnStatement");

    case tt._switch:
      var blockIndent = curIndent, line = curLineStart;
      next();
      node.discriminant = parseParenExpression();
      node.cases = [];
      pushCx();
      expect(tt.braceL);

      for (var cur; !closes(tt.braceR, blockIndent, line, true);) {
        if (token.type === tt._case || token.type === tt._default) {
          var isCase = token.type === tt._case;
          if (cur) finishNode(cur, "SwitchCase");
          node.cases.push(cur = startNode());
          cur.consequent = [];
          next();
          if (isCase) cur.test = parseExpression();
          else cur.test = null;
          expect(tt.colon);
        } else {
          if (!cur) {
            node.cases.push(cur = startNode());
            cur.consequent = [];
            cur.test = null;
          }
          cur.consequent.push(parseStatement());
        }
      }
      if (cur) finishNode(cur, "SwitchCase");
      popCx();
      eat(tt.braceR);
      return finishNode(node, "SwitchStatement");

    case tt._throw:
      next();
      node.argument = parseExpression();
      semicolon();
      return finishNode(node, "ThrowStatement");

    case tt._try:
      next();
      node.block = parseBlock();
      node.handler = null;
      if (token.type === tt._catch) {
        var clause = startNode();
        next();
        expect(tt.parenL);
        clause.param = parseIdent();
        expect(tt.parenR);
        clause.guard = null;
        clause.body = parseBlock();
        node.handler = finishNode(clause, "CatchClause");
      }
      node.finalizer = eat(tt._finally) ? parseBlock() : null;
      if (!node.handler && !node.finalizer) return node.block;
      return finishNode(node, "TryStatement");

    case tt._var:
      next();
      node = parseVar(node);
      semicolon();
      return node;

    case tt._while:
      next();
      node.test = parseParenExpression();
      node.body = parseStatement();
      return finishNode(node, "WhileStatement");

    case tt._with:
      next();
      node.object = parseParenExpression();
      node.body = parseStatement();
      return finishNode(node, "WithStatement");

    case tt.braceL:
      return parseBlock();

    case tt.semi:
      next();
      return finishNode(node, "EmptyStatement");

    default:
      var expr = parseExpression();
      if (isDummy(expr)) {
        next();
        if (token.type === tt.eof) return finishNode(node, "EmptyStatement");
        return parseStatement();
      } else if (starttype === tt.name && expr.type === "Identifier" && eat(tt.colon)) {
        node.body = parseStatement();
        node.label = expr;
        return finishNode(node, "LabeledStatement");
      } else {
        node.expression = expr;
        semicolon();
        return finishNode(node, "ExpressionStatement");
      }
    }
  }

  function parseBlock() {
    var node = startNode();
    pushCx();
    expect(tt.braceL);
    var blockIndent = curIndent, line = curLineStart;
    node.body = [];
    while (!closes(tt.braceR, blockIndent, line, true))
      node.body.push(parseStatement());
    popCx();
    eat(tt.braceR);
    return finishNode(node, "BlockStatement");
  }

  function parseFor(node, init) {
    node.init = init;
    node.test = node.update = null;
    if (eat(tt.semi) && token.type !== tt.semi) node.test = parseExpression();
    if (eat(tt.semi) && token.type !== tt.parenR) node.update = parseExpression();
    popCx();
    expect(tt.parenR);
    node.body = parseStatement();
    return finishNode(node, "ForStatement");
  }

  function parseForIn(node, init) {
    node.left = init;
    node.right = parseExpression();
    popCx();
    expect(tt.parenR);
    node.body = parseStatement();
    return finishNode(node, "ForInStatement");
  }

  function parseVar(node, noIn) {
    node.declarations = [];
    node.kind = "var";
    while (token.type === tt.name) {
      var decl = startNode();
      decl.id = parseIdent();
      decl.init = eat(tt.eq) ? parseExpression(true, noIn) : null;
      node.declarations.push(finishNode(decl, "VariableDeclarator"));
      if (!eat(tt.comma)) break;
    }
    if (!node.declarations.length) {
      var decl = startNode();
      decl.id = dummyIdent();
      node.declarations.push(finishNode(decl, "VariableDeclarator"));
    }
    return finishNode(node, "VariableDeclaration");
  }

  function parseExpression(noComma, noIn) {
    var expr = parseMaybeAssign(noIn);
    if (!noComma && token.type === tt.comma) {
      var node = startNodeFrom(expr);
      node.expressions = [expr];
      while (eat(tt.comma)) node.expressions.push(parseMaybeAssign(noIn));
      return finishNode(node, "SequenceExpression");
    }
    return expr;
  }

  function parseParenExpression() {
    pushCx();
    expect(tt.parenL);
    var val = parseExpression();
    popCx();
    expect(tt.parenR);
    return val;
  }

  function parseMaybeAssign(noIn) {
    var left = parseMaybeConditional(noIn);
    if (token.type.isAssign) {
      var node = startNodeFrom(left);
      node.operator = token.value;
      node.left = checkLVal(left);
      next();
      node.right = parseMaybeAssign(noIn);
      return finishNode(node, "AssignmentExpression");
    }
    return left;
  }

  function parseMaybeConditional(noIn) {
    var expr = parseExprOps(noIn);
    if (eat(tt.question)) {
      var node = startNodeFrom(expr);
      node.test = expr;
      node.consequent = parseExpression(true);
      node.alternate = expect(tt.colon) ? parseExpression(true, noIn) : dummyIdent();
      return finishNode(node, "ConditionalExpression");
    }
    return expr;
  }

  function parseExprOps(noIn) {
    var indent = curIndent, line = curLineStart;
    return parseExprOp(parseMaybeUnary(noIn), -1, noIn, indent, line);
  }

  function parseExprOp(left, minPrec, noIn, indent, line) {
    if (curLineStart != line && curIndent < indent && tokenStartsLine()) return left;
    var prec = token.type.binop;
    if (prec != null && (!noIn || token.type !== tt._in)) {
      if (prec > minPrec) {
        var node = startNodeFrom(left);
        node.left = left;
        node.operator = token.value;
        next();
        if (curLineStart != line && curIndent < indent && tokenStartsLine())
          node.right = dummyIdent();
        else
          node.right = parseExprOp(parseMaybeUnary(noIn), prec, noIn, indent, line);
        var node = finishNode(node, /&&|\|\|/.test(node.operator) ? "LogicalExpression" : "BinaryExpression");
        return parseExprOp(node, minPrec, noIn, indent, line);
      }
    }
    return left;
  }

  function parseMaybeUnary(noIn) {
    if (token.type.prefix) {
      var node = startNode(), update = token.type.isUpdate;
      node.operator = token.value;
      node.prefix = true;
      next();
      node.argument = parseMaybeUnary(noIn);
      if (update) node.argument = checkLVal(node.argument);
      return finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
    }
    var expr = parseExprSubscripts();
    while (token.type.postfix && !canInsertSemicolon()) {
      var node = startNodeFrom(expr);
      node.operator = token.value;
      node.prefix = false;
      node.argument = checkLVal(expr);
      next();
      expr = finishNode(node, "UpdateExpression");
    }
    return expr;
  }

  function parseExprSubscripts() {
    return parseSubscripts(parseExprAtom(), false, curIndent, curLineStart);
  }

  function parseSubscripts(base, noCalls, startIndent, line) {
    for (;;) {
      if (curLineStart != line && curIndent <= startIndent && tokenStartsLine()) {
        if (token.type == tt.dot && curIndent == startIndent)
          --startIndent;
        else
          return base;
      }

      if (eat(tt.dot)) {
        var node = startNodeFrom(base);
        node.object = base;
        if (curLineStart != line && curIndent <= startIndent && tokenStartsLine())
          node.property = dummyIdent();
        else
          node.property = parsePropertyName() || dummyIdent();
        node.computed = false;
        base = finishNode(node, "MemberExpression");
      } else if (token.type == tt.bracketL) {
        pushCx();
        next();
        var node = startNodeFrom(base);
        node.object = base;
        node.property = parseExpression();
        node.computed = true;
        popCx();
        expect(tt.bracketR);
        base = finishNode(node, "MemberExpression");
      } else if (!noCalls && token.type == tt.parenL) {
        pushCx();
        var node = startNodeFrom(base);
        node.callee = base;
        node.arguments = parseExprList(tt.parenR);
        base = finishNode(node, "CallExpression");
      } else {
        return base;
      }
    }
  }

  function parseExprAtom() {
    switch (token.type) {
    case tt._this:
      var node = startNode();
      next();
      return finishNode(node, "ThisExpression");
    case tt.name:
      return parseIdent();
    case tt.num: case tt.string: case tt.regexp:
      var node = startNode();
      node.value = token.value;
      node.raw = input.slice(token.start, token.end);
      next();
      return finishNode(node, "Literal");

    case tt._null: case tt._true: case tt._false:
      var node = startNode();
      node.value = token.type.atomValue;
      node.raw = token.type.keyword;
      next();
      return finishNode(node, "Literal");

    case tt.parenL:
      var tokStart1 = token.start;
      next();
      var val = parseExpression();
      val.start = tokStart1;
      val.end = token.end;
      expect(tt.parenR);
      return val;

    case tt.bracketL:
      var node = startNode();
      pushCx();
      node.elements = parseExprList(tt.bracketR);
      return finishNode(node, "ArrayExpression");

    case tt.braceL:
      return parseObj();

    case tt._function:
      var node = startNode();
      next();
      return parseFunction(node, false);

    case tt._new:
      return parseNew();

    default:
      return dummyIdent();
    }
  }

  function parseNew() {
    var node = startNode(), startIndent = curIndent, line = curLineStart;
    next();
    node.callee = parseSubscripts(parseExprAtom(), true, startIndent, line);
    if (token.type == tt.parenL) {
      pushCx();
      node.arguments = parseExprList(tt.parenR);
    } else {
      node.arguments = [];
    }
    return finishNode(node, "NewExpression");
  }

  function parseObj() {
    var node = startNode();
    node.properties = [];
    pushCx();
    next();
    var propIndent = curIndent, line = curLineStart;
    while (!closes(tt.braceR, propIndent, line)) {
      var name = parsePropertyName();
      if (!name) { if (isDummy(parseExpression(true))) next(); eat(tt.comma); continue; }
      var prop = {key: name}, isGetSet = false, kind;
      if (eat(tt.colon)) {
        prop.value = parseExpression(true);
        kind = prop.kind = "init";
      } else if (options.ecmaVersion >= 5 && prop.key.type === "Identifier" &&
                 (prop.key.name === "get" || prop.key.name === "set")) {
        isGetSet = true;
        kind = prop.kind = prop.key.name;
        prop.key = parsePropertyName() || dummyIdent();
        prop.value = parseFunction(startNode(), false);
      } else {
        next();
        eat(tt.comma);
        continue;
      }

      node.properties.push(prop);
      eat(tt.comma);
    }
    popCx();
    eat(tt.braceR);
    return finishNode(node, "ObjectExpression");
  }

  function parsePropertyName() {
    if (token.type === tt.num || token.type === tt.string) return parseExprAtom();
    if (token.type === tt.name || token.type.keyword) return parseIdent();
  }

  function parseIdent() {
    var node = startNode();
    node.name = token.type === tt.name ? token.value : token.type.keyword;
    next();
    return finishNode(node, "Identifier");
  }

  function parseFunction(node, isStatement) {
    if (token.type === tt.name) node.id = parseIdent();
    else if (isStatement) node.id = dummyIdent();
    else node.id = null;
    node.params = [];
    pushCx();
    expect(tt.parenL);
    while (token.type == tt.name) {
      node.params.push(parseIdent());
      eat(tt.comma);
    }
    popCx();
    eat(tt.parenR);
    node.body = parseBlock();
    return finishNode(node, isStatement ? "FunctionDeclaration" : "FunctionExpression");
  }

  function parseExprList(close) {
    var indent = curIndent, line = curLineStart, elts = [], continuedLine = nextLineStart;
    next(); // Opening bracket
    if (curLineStart > continuedLine) continuedLine = curLineStart;
    while (!closes(close, indent + (curLineStart <= continuedLine ? 1 : 0), line)) {
      var elt = parseExpression(true);
      if (isDummy(elt)) {
        if (closes(close, indent, line)) break;
        next();
      } else {
        elts.push(elt);
      }
      while (eat(tt.comma)) {}
    }
    popCx();
    eat(close);
    return elts;
  }
});
// AST walker module for Mozilla Parser API compatible trees

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") return mod(exports); // CommonJS
  if (typeof define == "function" && define.amd) return define(["exports"], mod); // AMD
  mod((this.acorn || (this.acorn = {})).walk = {}); // Plain browser env
})(function(exports) {
  "use strict";

  // A simple walk is one where you simply specify callbacks to be
  // called on specific nodes. The last two arguments are optional. A
  // simple use would be
  //
  //     walk.simple(myTree, {
  //         Expression: function(node) { ... }
  //     });
  //
  // to do something with all expressions. All Parser API node types
  // can be used to identify node types, as well as Expression,
  // Statement, and ScopeBody, which denote categories of nodes.
  //
  // The base argument can be used to pass a custom (recursive)
  // walker, and state can be used to give this walked an initial
  // state.
  exports.simple = function(node, visitors, base, state) {
    if (!base) base = exports.base;
    function c(node, st, override) {
      var type = override || node.type, found = visitors[type];
      base[type](node, st, c);
      if (found) found(node, st);
    }
    c(node, state);
  };

  // A recursive walk is one where your functions override the default
  // walkers. They can modify and replace the state parameter that's
  // threaded through the walk, and can opt how and whether to walk
  // their child nodes (by calling their third argument on these
  // nodes).
  exports.recursive = function(node, state, funcs, base) {
    var visitor = funcs ? exports.make(funcs, base) : base;
    function c(node, st, override) {
      visitor[override || node.type](node, st, c);
    }
    c(node, state);
  };

  function makeTest(test) {
    if (typeof test == "string")
      return function(type) { return type == test; };
    else if (!test)
      return function() { return true; };
    else
      return test;
  }

  function Found(node, state) { this.node = node; this.state = state; }

  // Find a node with a given start, end, and type (all are optional,
  // null can be used as wildcard). Returns a {node, state} object, or
  // undefined when it doesn't find a matching node.
  exports.findNodeAt = function(node, start, end, test, base, state) {
    test = makeTest(test);
    try {
      if (!base) base = exports.base;
      var c = function(node, st, override) {
        var type = override || node.type;
        if ((start == null || node.start <= start) &&
            (end == null || node.end >= end))
          base[type](node, st, c);
        if (test(type, node) &&
            (start == null || node.start == start) &&
            (end == null || node.end == end))
          throw new Found(node, st);
      };
      c(node, state);
    } catch (e) {
      if (e instanceof Found) return e;
      throw e;
    }
  };

  // Find the innermost node of a given type that contains the given
  // position. Interface similar to findNodeAt.
  exports.findNodeAround = function(node, pos, test, base, state) {
    test = makeTest(test);
    try {
      if (!base) base = exports.base;
      var c = function(node, st, override) {
        var type = override || node.type;
        if (node.start > pos || node.end < pos) return;
        base[type](node, st, c);
        if (test(type, node)) throw new Found(node, st);
      };
      c(node, state);
    } catch (e) {
      if (e instanceof Found) return e;
      throw e;
    }
  };

  // Find the outermost matching node after a given position.
  exports.findNodeAfter = function(node, pos, test, base, state) {
    test = makeTest(test);
    try {
      if (!base) base = exports.base;
      var c = function(node, st, override) {
        if (node.end < pos) return;
        var type = override || node.type;
        if (node.start >= pos && test(type, node)) throw new Found(node, st);
        base[type](node, st, c);
      };
      c(node, state);
    } catch (e) {
      if (e instanceof Found) return e;
      throw e;
    }
  };

  // Find the outermost matching node before a given position.
  exports.findNodeBefore = function(node, pos, test, base, state) {
    test = makeTest(test);
    if (!base) base = exports.base;
    var max;
    var c = function(node, st, override) {
      if (node.start > pos) return;
      var type = override || node.type;
      if (node.end <= pos && (!max || max.node.end < node.end) && test(type, node))
        max = new Found(node, st);
      base[type](node, st, c);
    };
    c(node, state);
    return max;
  };

  // Used to create a custom walker. Will fill in all missing node
  // type properties with the defaults.
  exports.make = function(funcs, base) {
    if (!base) base = exports.base;
    var visitor = {};
    for (var type in base) visitor[type] = base[type];
    for (var type in funcs) visitor[type] = funcs[type];
    return visitor;
  };

  function skipThrough(node, st, c) { c(node, st); }
  function ignore(_node, _st, _c) {}

  // Node walkers.

  var base = exports.base = {};
  base.Program = base.BlockStatement = function(node, st, c) {
    for (var i = 0; i < node.body.length; ++i)
      c(node.body[i], st, "Statement");
  };
  base.Statement = skipThrough;
  base.EmptyStatement = ignore;
  base.ExpressionStatement = function(node, st, c) {
    c(node.expression, st, "Expression");
  };
  base.IfStatement = function(node, st, c) {
    c(node.test, st, "Expression");
    c(node.consequent, st, "Statement");
    if (node.alternate) c(node.alternate, st, "Statement");
  };
  base.LabeledStatement = function(node, st, c) {
    c(node.body, st, "Statement");
  };
  base.BreakStatement = base.ContinueStatement = ignore;
  base.WithStatement = function(node, st, c) {
    c(node.object, st, "Expression");
    c(node.body, st, "Statement");
  };
  base.SwitchStatement = function(node, st, c) {
    c(node.discriminant, st, "Expression");
    for (var i = 0; i < node.cases.length; ++i) {
      var cs = node.cases[i];
      if (cs.test) c(cs.test, st, "Expression");
      for (var j = 0; j < cs.consequent.length; ++j)
        c(cs.consequent[j], st, "Statement");
    }
  };
  base.ReturnStatement = function(node, st, c) {
    if (node.argument) c(node.argument, st, "Expression");
  };
  base.ThrowStatement = function(node, st, c) {
    c(node.argument, st, "Expression");
  };
  base.TryStatement = function(node, st, c) {
    c(node.block, st, "Statement");
    if (node.handler) c(node.handler.body, st, "ScopeBody");
    if (node.finalizer) c(node.finalizer, st, "Statement");
  };
  base.WhileStatement = function(node, st, c) {
    c(node.test, st, "Expression");
    c(node.body, st, "Statement");
  };
  base.DoWhileStatement = base.WhileStatement;
  base.ForStatement = function(node, st, c) {
    if (node.init) c(node.init, st, "ForInit");
    if (node.test) c(node.test, st, "Expression");
    if (node.update) c(node.update, st, "Expression");
    c(node.body, st, "Statement");
  };
  base.ForInStatement = function(node, st, c) {
    c(node.left, st, "ForInit");
    c(node.right, st, "Expression");
    c(node.body, st, "Statement");
  };
  base.ForInit = function(node, st, c) {
    if (node.type == "VariableDeclaration") c(node, st);
    else c(node, st, "Expression");
  };
  base.DebuggerStatement = ignore;

  base.FunctionDeclaration = function(node, st, c) {
    c(node, st, "Function");
  };
  base.VariableDeclaration = function(node, st, c) {
    for (var i = 0; i < node.declarations.length; ++i) {
      var decl = node.declarations[i];
      if (decl.init) c(decl.init, st, "Expression");
    }
  };

  base.Function = function(node, st, c) {
    c(node.body, st, "ScopeBody");
  };
  base.ScopeBody = function(node, st, c) {
    c(node, st, "Statement");
  };

  base.Expression = skipThrough;
  base.ThisExpression = ignore;
  base.ArrayExpression = function(node, st, c) {
    for (var i = 0; i < node.elements.length; ++i) {
      var elt = node.elements[i];
      if (elt) c(elt, st, "Expression");
    }
  };
  base.ObjectExpression = function(node, st, c) {
    for (var i = 0; i < node.properties.length; ++i)
      c(node.properties[i].value, st, "Expression");
  };
  base.FunctionExpression = base.FunctionDeclaration;
  base.SequenceExpression = function(node, st, c) {
    for (var i = 0; i < node.expressions.length; ++i)
      c(node.expressions[i], st, "Expression");
  };
  base.UnaryExpression = base.UpdateExpression = function(node, st, c) {
    c(node.argument, st, "Expression");
  };
  base.BinaryExpression = base.AssignmentExpression = base.LogicalExpression = function(node, st, c) {
    c(node.left, st, "Expression");
    c(node.right, st, "Expression");
  };
  base.ConditionalExpression = function(node, st, c) {
    c(node.test, st, "Expression");
    c(node.consequent, st, "Expression");
    c(node.alternate, st, "Expression");
  };
  base.NewExpression = base.CallExpression = function(node, st, c) {
    c(node.callee, st, "Expression");
    if (node.arguments) for (var i = 0; i < node.arguments.length; ++i)
      c(node.arguments[i], st, "Expression");
  };
  base.MemberExpression = function(node, st, c) {
    c(node.object, st, "Expression");
    if (node.computed) c(node.property, st, "Expression");
  };
  base.Identifier = base.Literal = ignore;

  // A custom walker that keeps track of the scope chain and the
  // variables defined in it.
  function makeScope(prev, isCatch) {
    return {vars: Object.create(null), prev: prev, isCatch: isCatch};
  }
  function normalScope(scope) {
    while (scope.isCatch) scope = scope.prev;
    return scope;
  }
  exports.scopeVisitor = exports.make({
    Function: function(node, scope, c) {
      var inner = makeScope(scope);
      for (var i = 0; i < node.params.length; ++i)
        inner.vars[node.params[i].name] = {type: "argument", node: node.params[i]};
      if (node.id) {
        var decl = node.type == "FunctionDeclaration";
        (decl ? normalScope(scope) : inner).vars[node.id.name] =
          {type: decl ? "function" : "function name", node: node.id};
      }
      c(node.body, inner, "ScopeBody");
    },
    TryStatement: function(node, scope, c) {
      c(node.block, scope, "Statement");
      if (node.handler) {
        var inner = makeScope(scope, true);
        inner.vars[node.handler.param.name] = {type: "catch clause", node: node.handler.param};
        c(node.handler.body, inner, "ScopeBody");
      }
      if (node.finalizer) c(node.finalizer, scope, "Statement");
    },
    VariableDeclaration: function(node, scope, c) {
      var target = normalScope(scope);
      for (var i = 0; i < node.declarations.length; ++i) {
        var decl = node.declarations[i];
        target.vars[decl.id.name] = {type: "var", node: decl.id};
        if (decl.init) c(decl.init, scope, "Expression");
      }
    }
  });

});
// Shims to fill in enough of ECMAScript 5 to make Tern run. Does not
// supply standard-compliant methods, in that some functionality is
// left out (such as second argument to Object.create, self args in
// array methods, etc). WILL clash with other ECMA5 polyfills in a
// probably disruptive way.

(function() {
  Object.create = Object.create || (function() {
    if (!({__proto__: null} instanceof Object))
      return function(base) { return {__proto__: base}; };
    function ctor() {}
    var frame = document.body.appendChild(document.createElement("iframe"));
    frame.src = "javascript:";
    var empty = frame.contentWindow.Object.prototype;
    delete empty.hasOwnProperty;
    delete empty.isPrototypeOf;
    delete empty.propertyIsEnumerable;
    delete empty.valueOf;
    delete empty.toString;
    delete empty.toLocaleString;
    delete empty.constructor;
    return function(base) { ctor.prototype = base || empty; return new ctor(); };
  })();

  // Array methods

  var AP = Array.prototype;

  AP.some = AP.some || function(pred) {
    for (var i = 0; i < this.length; ++i) if (pred(this[i], i)) return true;
  };

  AP.forEach = AP.forEach || function(f) {
    for (var i = 0; i < this.length; ++i) f(this[i], i);
  };

  AP.indexOf = AP.indexOf || function(x, start) {
    for (var i = start || 0; i < this.length; ++i) if (this[i] === x) return i;
    return -1;
  };

  AP.lastIndexOf = AP.lastIndexOf || function(x, start) {
    for (var i = start == null ? this.length - 1 : start; i >= 0; ++i) if (this[i] === x) return i;
    return -1;
  };

  AP.map = AP.map || function(f) {
    for (var r = [], i = 0; i < this.length; ++i) r.push(f(this[i], i));
    return r;
  };

  Array.isArray = Array.isArray || function(v) {
    return Object.prototype.toString.call(v) == "[object Array]";
  };

  String.prototype.trim = String.prototype.trim || function() {
    var from = 0, to = this.length;
    while (/\s/.test(this.charAt(from))) ++from;
    while (/\s/.test(this.charAt(to - 1))) --to;
    return this.slice(from, to);
  };

/*! JSON v3.2.4 | http://bestiejs.github.com/json3 | Copyright 2012, Kit Cambridge | http://kit.mit-license.org */
;(function(){var e=void 0,i=!0,k=null,l={}.toString,m,n,p="function"===typeof define&&define.c,q=!p&&"object"==typeof exports&&exports;q||p?"object"==typeof JSON&&JSON?p?q=JSON:(q.stringify=JSON.stringify,q.parse=JSON.parse):p&&(q=this.JSON={}):q=this.JSON||(this.JSON={});var r,t,u,x,z,B,C,D,E,F,G,H,I,J=new Date(-3509827334573292),K,O,P;try{J=-109252==J.getUTCFullYear()&&0===J.getUTCMonth()&&1==J.getUTCDate()&&10==J.getUTCHours()&&37==J.getUTCMinutes()&&6==J.getUTCSeconds()&&708==J.getUTCMilliseconds()}catch(Q){}
function R(b){var c,a,d,j=b=="json";if(j||b=="json-stringify"||b=="json-parse"){if(b=="json-stringify"||j){if(c=typeof q.stringify=="function"&&J){(d=function(){return 1}).toJSON=d;try{c=q.stringify(0)==="0"&&q.stringify(new Number)==="0"&&q.stringify(new String)=='""'&&q.stringify(l)===e&&q.stringify(e)===e&&q.stringify()===e&&q.stringify(d)==="1"&&q.stringify([d])=="[1]"&&q.stringify([e])=="[null]"&&q.stringify(k)=="null"&&q.stringify([e,l,k])=="[null,null,null]"&&q.stringify({A:[d,i,false,k,"\x00\u0008\n\u000c\r\t"]})==
'{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}'&&q.stringify(k,d)==="1"&&q.stringify([1,2],k,1)=="[\n 1,\n 2\n]"&&q.stringify(new Date(-864E13))=='"-271821-04-20T00:00:00.000Z"'&&q.stringify(new Date(864E13))=='"+275760-09-13T00:00:00.000Z"'&&q.stringify(new Date(-621987552E5))=='"-000001-01-01T00:00:00.000Z"'&&q.stringify(new Date(-1))=='"1969-12-31T23:59:59.999Z"'}catch(f){c=false}}if(!j)return c}if(b=="json-parse"||j){if(typeof q.parse=="function")try{if(q.parse("0")===0&&!q.parse(false)){d=
q.parse('{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');if(a=d.a.length==5&&d.a[0]==1){try{a=!q.parse('"\t"')}catch(o){}if(a)try{a=q.parse("01")!=1}catch(g){}}}}catch(h){a=false}if(!j)return a}return c&&a}}
if(!R("json")){J||(K=Math.floor,O=[0,31,59,90,120,151,181,212,243,273,304,334],P=function(b,c){return O[c]+365*(b-1970)+K((b-1969+(c=+(c>1)))/4)-K((b-1901+c)/100)+K((b-1601+c)/400)});if(!(m={}.hasOwnProperty))m=function(b){var c={},a;if((c.__proto__=k,c.__proto__={toString:1},c).toString!=l)m=function(a){var b=this.__proto__,a=a in(this.__proto__=k,this);this.__proto__=b;return a};else{a=c.constructor;m=function(b){var c=(this.constructor||a).prototype;return b in this&&!(b in c&&this[b]===c[b])}}c=
k;return m.call(this,b)};n=function(b,c){var a=0,d,j,f;(d=function(){this.valueOf=0}).prototype.valueOf=0;j=new d;for(f in j)m.call(j,f)&&a++;d=j=k;if(a)a=a==2?function(a,b){var c={},d=l.call(a)=="[object Function]",f;for(f in a)!(d&&f=="prototype")&&!m.call(c,f)&&(c[f]=1)&&m.call(a,f)&&b(f)}:function(a,b){var c=l.call(a)=="[object Function]",d,f;for(d in a)!(c&&d=="prototype")&&m.call(a,d)&&!(f=d==="constructor")&&b(d);(f||m.call(a,d="constructor"))&&b(d)};else{j=["valueOf","toString","toLocaleString",
"propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"];a=function(a,b){var c=l.call(a)=="[object Function]",d;for(d in a)!(c&&d=="prototype")&&m.call(a,d)&&b(d);for(c=j.length;d=j[--c];m.call(a,d)&&b(d));}}a(b,c)};R("json-stringify")||(r={"\\":"\\\\",'"':'\\"',"\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"},t=function(b,c){return("000000"+(c||0)).slice(-b)},u=function(b){for(var c='"',a=0,d;d=b.charAt(a);a++)c=c+('\\"\u0008\u000c\n\r\t'.indexOf(d)>-1?r[d]:r[d]=d<" "?
"\\u00"+t(2,d.charCodeAt(0).toString(16)):d);return c+'"'},x=function(b,c,a,d,j,f,o){var g=c[b],h,s,v,w,L,M,N,y,A;if(typeof g=="object"&&g){h=l.call(g);if(h=="[object Date]"&&!m.call(g,"toJSON"))if(g>-1/0&&g<1/0){if(P){v=K(g/864E5);for(h=K(v/365.2425)+1970-1;P(h+1,0)<=v;h++);for(s=K((v-P(h,0))/30.42);P(h,s+1)<=v;s++);v=1+v-P(h,s);w=(g%864E5+864E5)%864E5;L=K(w/36E5)%24;M=K(w/6E4)%60;N=K(w/1E3)%60;w=w%1E3}else{h=g.getUTCFullYear();s=g.getUTCMonth();v=g.getUTCDate();L=g.getUTCHours();M=g.getUTCMinutes();
N=g.getUTCSeconds();w=g.getUTCMilliseconds()}g=(h<=0||h>=1E4?(h<0?"-":"+")+t(6,h<0?-h:h):t(4,h))+"-"+t(2,s+1)+"-"+t(2,v)+"T"+t(2,L)+":"+t(2,M)+":"+t(2,N)+"."+t(3,w)+"Z"}else g=k;else if(typeof g.toJSON=="function"&&(h!="[object Number]"&&h!="[object String]"&&h!="[object Array]"||m.call(g,"toJSON")))g=g.toJSON(b)}a&&(g=a.call(c,b,g));if(g===k)return"null";h=l.call(g);if(h=="[object Boolean]")return""+g;if(h=="[object Number]")return g>-1/0&&g<1/0?""+g:"null";if(h=="[object String]")return u(g);if(typeof g==
"object"){for(b=o.length;b--;)if(o[b]===g)throw TypeError();o.push(g);y=[];c=f;f=f+j;if(h=="[object Array]"){s=0;for(b=g.length;s<b;A||(A=i),s++){h=x(s,g,a,d,j,f,o);y.push(h===e?"null":h)}b=A?j?"[\n"+f+y.join(",\n"+f)+"\n"+c+"]":"["+y.join(",")+"]":"[]"}else{n(d||g,function(b){var c=x(b,g,a,d,j,f,o);c!==e&&y.push(u(b)+":"+(j?" ":"")+c);A||(A=i)});b=A?j?"{\n"+f+y.join(",\n"+f)+"\n"+c+"}":"{"+y.join(",")+"}":"{}"}o.pop();return b}},q.stringify=function(b,c,a){var d,j,f,o,g,h;if(typeof c=="function"||
typeof c=="object"&&c)if(l.call(c)=="[object Function]")j=c;else if(l.call(c)=="[object Array]"){f={};o=0;for(g=c.length;o<g;h=c[o++],(l.call(h)=="[object String]"||l.call(h)=="[object Number]")&&(f[h]=1));}if(a)if(l.call(a)=="[object Number]"){if((a=a-a%1)>0){d="";for(a>10&&(a=10);d.length<a;d=d+" ");}}else l.call(a)=="[object String]"&&(d=a.length<=10?a:a.slice(0,10));return x("",(h={},h[""]=b,h),j,f,d,"",[])});R("json-parse")||(z=String.fromCharCode,B={"\\":"\\",'"':'"',"/":"/",b:"\u0008",t:"\t",
n:"\n",f:"\u000c",r:"\r"},C=function(){H=I=k;throw SyntaxError();},D=function(){for(var b=I,c=b.length,a,d,j,f,o;H<c;){a=b.charAt(H);if("\t\r\n ".indexOf(a)>-1)H++;else{if("{}[]:,".indexOf(a)>-1){H++;return a}if(a=='"'){d="@";for(H++;H<c;){a=b.charAt(H);if(a<" ")C();else if(a=="\\"){a=b.charAt(++H);if('\\"/btnfr'.indexOf(a)>-1){d=d+B[a];H++}else if(a=="u"){j=++H;for(f=H+4;H<f;H++){a=b.charAt(H);a>="0"&&a<="9"||a>="a"&&a<="f"||a>="A"&&a<="F"||C()}d=d+z("0x"+b.slice(j,H))}else C()}else{if(a=='"')break;
d=d+a;H++}}if(b.charAt(H)=='"'){H++;return d}}else{j=H;if(a=="-"){o=i;a=b.charAt(++H)}if(a>="0"&&a<="9"){for(a=="0"&&(a=b.charAt(H+1),a>="0"&&a<="9")&&C();H<c&&(a=b.charAt(H),a>="0"&&a<="9");H++);if(b.charAt(H)=="."){for(f=++H;f<c&&(a=b.charAt(f),a>="0"&&a<="9");f++);f==H&&C();H=f}a=b.charAt(H);if(a=="e"||a=="E"){a=b.charAt(++H);(a=="+"||a=="-")&&H++;for(f=H;f<c&&(a=b.charAt(f),a>="0"&&a<="9");f++);f==H&&C();H=f}return+b.slice(j,H)}o&&C();if(b.slice(H,H+4)=="true"){H=H+4;return i}if(b.slice(H,H+5)==
"false"){H=H+5;return false}if(b.slice(H,H+4)=="null"){H=H+4;return k}}C()}}return"$"},E=function(b){var c,a;b=="$"&&C();if(typeof b=="string"){if(b.charAt(0)=="@")return b.slice(1);if(b=="["){for(c=[];;a||(a=i)){b=D();if(b=="]")break;if(a)if(b==","){b=D();b=="]"&&C()}else C();b==","&&C();c.push(E(b))}return c}if(b=="{"){for(c={};;a||(a=i)){b=D();if(b=="}")break;if(a)if(b==","){b=D();b=="}"&&C()}else C();(b==","||typeof b!="string"||b.charAt(0)!="@"||D()!=":")&&C();c[b.slice(1)]=E(D())}return c}C()}return b},
G=function(b,c,a){a=F(b,c,a);a===e?delete b[c]:b[c]=a},F=function(b,c,a){var d=b[c],j;if(typeof d=="object"&&d)if(l.call(d)=="[object Array]")for(j=d.length;j--;)G(d,j,a);else n(d,function(b){G(d,b,a)});return a.call(b,c,d)},q.parse=function(b,c){var a,d;H=0;I=b;a=E(D());D()!="$"&&C();H=I=k;return c&&l.call(c)=="[object Function]"?F((d={},d[""]=a,d),"",c):a})}p&&define(function(){return q});
}());
})();
(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(exports);
  if (typeof define == "function" && define.amd) // AMD
    return define(["exports"], mod);
  mod((self.tern || (self.tern = {})).signal = {}); // Plain browser env
})(function(exports) {
  function on(type, f) {
    var handlers = this._handlers || (this._handlers = Object.create(null));
    (handlers[type] || (handlers[type] = [])).push(f);
  }
  function off(type, f) {
    var arr = this._handlers && this._handlers[type];
    if (arr) for (var i = 0; i < arr.length; ++i)
      if (arr[i] == f) { arr.splice(i, 1); break; }
  }
  function signal(type, a1, a2, a3, a4) {
    var arr = this._handlers && this._handlers[type];
    if (arr) for (var i = 0; i < arr.length; ++i) arr[i].call(this, a1, a2, a3, a4);
  }

  exports.mixin = function(obj) {
    obj.on = on; obj.off = off; obj.signal = signal;
    return obj;
  };
});
// The Tern server object

// A server is a stateful object that manages the analysis for a
// project, and defines an interface for querying the code in the
// project.

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(exports, require("./infer"), require("./signal"),
               require("acorn/acorn"), require("acorn/util/walk"));
  if (typeof define == "function" && define.amd) // AMD
    return define(["exports", "./infer", "./signal", "acorn/acorn", "acorn/util/walk"], mod);
  mod(self.tern || (self.tern = {}), tern, tern.signal, acorn, acorn.walk); // Plain browser env
})(function(exports, infer, signal, acorn, walk) {
  "use strict";

  var plugins = Object.create(null);
  exports.registerPlugin = function(name, init) { plugins[name] = init; };

  var defaultOptions = {
    debug: false,
    async: false,
    getFile: function(_f, c) { if (this.async) c(null, null); },
    defs: [],
    plugins: {},
    fetchTimeout: 1000
  };

  var queryTypes = {
    completions: {
      takesFile: true,
      run: findCompletions
    },
    properties: {
      run: findProperties
    },
    type: {
      takesFile: true,
      run: findTypeAt
    },
    documentation: {
      takesFile: true,
      run: findDocs
    },
    definition: {
      takesFile: true,
      run: findDef
    },
    refs: {
      takesFile: true,
      fullFile: true,
      run: findRefs
    },
    rename: {
      takesFile: true,
      fullFile: true,
      run: buildRename
    },
    files: {
      run: listFiles
    }
  };

  exports.defineQueryType = function(name, desc) { queryTypes[name] = desc; };

  function File(name) {
    this.name = name;
    this.scope = this.text = this.ast = this.lineOffsets = null;
  }
  File.prototype.asLineChar = function(pos) { return asLineChar(this, pos); };

  function updateText(file, text, srv) {
    file.text = text;
    file.ast = infer.parse(text, srv.passes, {directSourceFile: file});
    file.lineOffsets = null;
  }

  var Server = exports.Server = function(options) {
    this.cx = null;
    this.options = options || {};
    for (var o in defaultOptions) if (!options.hasOwnProperty(o))
      options[o] = defaultOptions[o];

    this.handlers = Object.create(null);
    this.files = [];
    this.uses = 0;
    this.pending = 0;
    this.asyncError = null;
    this.passes = Object.create(null);

    this.defs = options.defs.slice(0);
    for (var plugin in options.plugins) if (options.plugins.hasOwnProperty(plugin) && plugin in plugins) {
      var init = plugins[plugin](this, options.plugins[plugin]);
      if (init && init.defs) {
        if (init.loadFirst) this.defs.unshift(init.defs);
        else this.defs.push(init.defs);
      }
      if (init && init.passes) for (var type in init.passes) if (init.passes.hasOwnProperty(type))
        (this.passes[type] || (this.passes[type] = [])).push(init.passes[type]);
    }

    this.reset();
  };
  Server.prototype = signal.mixin({
    addFile: function(name, /*optional*/ text) {
      ensureFile(this, name, text);
    },
    delFile: function(name) {
      for (var i = 0, f; i < this.files.length; ++i) if ((f = this.files[i]).name == name) {
        clearFile(this, f);
        this.files.splice(i--, 1);
        return;
      }
    },
    reset: function() {
      this.signal("reset");
      this.cx = new infer.Context(this.defs, this);
      this.uses = 0;
      for (var i = 0; i < this.files.length; ++i) {
        var file = this.files[i];
        file.scope = null;
      }
    },

    request: function(doc, c) {
      var inv = invalidDoc(doc);
      if (inv) return c(inv);

      var self = this;
      doRequest(this, doc, function(err, data) {
        c(err, data);
        if (self.uses > 40) {
          self.reset();
          analyzeAll(self, function(){});
        }
      });
    },

    findFile: function(name) {
      return findFile(this.files, name);
    },

    flush: function(c) {
      var cx = this.cx;
      analyzeAll(this, function(err) {
        if (err) return c(err);
        infer.withContext(cx, c);
      });
    },

    startAsyncAction: function() {
      ++this.pending;
    },
    finishAsyncAction: function(err) {
      if (err) this.asyncError = err;
      if (--this.pending == 0) this.signal("everythingFetched");
    }
  });

  function doRequest(srv, doc, c) {
    if (doc.query && !queryTypes.hasOwnProperty(doc.query.type))
      return c("No query type '" + doc.query.type + "' defined");

    var query = doc.query;
    // Respond as soon as possible when this just uploads files
    if (!query) c(null, {});

    var files = doc.files || [];
    if (files.length) ++srv.uses;
    for (var i = 0; i < files.length; ++i) {
      var file = files[i];
      ensureFile(srv, file.name, file.type == "full" ? file.text : null);
    }

    if (!query) {
      analyzeAll(srv, function(){});
      return;
    }

    var queryType = queryTypes[query.type];
    if (queryType.takesFile) {
      if (typeof query.file != "string") return c(".query.file must be a string");
      if (!/^#/.test(query.file)) ensureFile(srv, query.file);
    }

    analyzeAll(srv, function(err) {
      if (err) return c(err);
      var file = queryType.takesFile && resolveFile(srv, files, query.file);
      if (queryType.fullFile && file.type == "part")
        return c("Can't run a " + query.type + " query on a file fragment");

      infer.withContext(srv.cx, function() {
        var result;
        try {
          result = queryType.run(srv, query, file);
        } catch (e) {
          if (srv.options.debug && e.name != "TernError") console.error(e.stack);
          return c(e);
        }
        c(null, result);
      });
    });
  }

  function analyzeFile(srv, file) {
    infer.withContext(srv.cx, function() {
      file.scope = srv.cx.topScope;
      srv.signal("beforeLoad", file);
      infer.markVariablesDefinedBy(file.scope, file.name);
      infer.analyze(file.ast, file.name, file.scope, srv.passes);
      infer.purgeMarkedVariables(file.scope);
      srv.signal("afterLoad", file);
    });
    return file;
  }

  function ensureFile(srv, name, text) {
    var known = findFile(srv.files, name);
    if (known) {
      if (text) clearFile(srv, known, text);
      return;
    }

    var file = new File(name);
    srv.files.push(file);
    if (text) {
      updateText(file, text, srv);
    } else if (srv.options.async) {
      srv.startAsyncAction();
      srv.options.getFile(name, function(err, text) {
        updateText(file, text || "", srv);
        srv.finishAsyncAction(err);
      });
    } else {
      updateText(file, srv.options.getFile(name) || "", srv);
    }
  }

  function clearFile(srv, file, newText) {
    if (file.scope) {
      infer.withContext(srv.cx, function() {
        // FIXME try to batch purges into a single pass (each call needs
        // to traverse the whole graph)
        infer.purgeTypes(file.name);
        infer.markVariablesDefinedBy(file.scope, file.name);
        infer.purgeMarkedVariables(file.scope);
      });
      file.scope = null;
    }
    if (newText != null) updateText(file, newText, srv);
  }

  function fetchAll(srv, c) {
    var done = true, returned = false;
    for (var i = 0; i < srv.files.length; ++i) {
      var file = srv.files[i];
      if (file.text != null) continue;
      if (srv.options.async) {
        done = false;
        srv.options.getFile(file.name, function(err, text) {
          if (err && !returned) { returned = true; return c(err); }
          updateText(file, text || "", srv);
          fetchAll(srv, c);
        });
      } else {
        try {
          updateText(file, srv.options.getFile(file.name) || "", srv);
        } catch (e) { return c(e); }
      }
    }
    if (done) c();
  }

  function waitOnFetch(srv, c) {
    var done = function() {
      srv.off("everythingFetched", done);
      clearTimeout(timeout);
      analyzeAll(srv, c);
    };
    srv.on("everythingFetched", done);
    var timeout = setTimeout(done, srv.options.fetchTimeout);
  }

  function analyzeAll(srv, c) {
    if (srv.pending) return waitOnFetch(srv, c);

    var e = srv.fetchError;
    if (e) { srv.fetchError = null; return c(e); }

    var done = true;
    for (var i = 0; i < srv.files.length; ++i) {
      var file = srv.files[i];
      if (file.text == null) done = false;
      else if (file.scope == null) analyzeFile(srv, file);
    }
    if (done) c();
    else waitOnFetch(srv, c);
  }

  function findFile(arr, name) {
    for (var i = 0; i < arr.length; ++i) {
      var file = arr[i];
      if (file.name == name && file.type != "part") return file;
    }
  }

  function firstLine(str) {
    var end = str.indexOf("\n");
    if (end < 0) return str;
    return str.slice(0, end);
  }

  function findMatchingPosition(line, file, near) {
    var pos = Math.max(0, near - 500), closest = null;
    if (!/^\s*$/.test(line)) for (;;) {
      var found = file.indexOf(line, pos);
      if (found < 0 || found > near + 500) break;
      if (closest == null || Math.abs(closest - near) > Math.abs(found - near))
        closest = found;
      pos = found + line.length;
    }
    return closest;
  }

  function scopeDepth(s) {
    for (var i = 0; s; ++i, s = s.prev) {}
    return i;
  }

  function ternError(msg) {
    var err = new Error(msg);
    err.name = "TernError";
    return err;
  }

  function resolveFile(srv, localFiles, name) {
    var isRef = name.match(/^#(\d+)$/);
    if (!isRef) return findFile(srv.files, name);

    var file = localFiles[isRef[1]];
    if (!file) throw ternError("Reference to unknown file " + name);
    if (file.type == "full") return findFile(srv.files, file.name);

    // This is a partial file

    var realFile = file.backing = findFile(srv.files, file.name);
    var offset = file.offset;
    if (file.offsetLines) offset = {line: file.offsetLines, ch: 0};
    file.offset = offset = resolvePos(realFile, file.offsetLines == null ? file.offset : {line: file.offsetLines, ch: 0}, true);
    var line = firstLine(file.text);
    var foundPos = findMatchingPosition(line, realFile.text, offset);
    var pos = foundPos == null ? Math.max(0, realFile.text.lastIndexOf("\n", offset)) : foundPos;

    infer.withContext(srv.cx, function() {
      infer.purgeTypes(file.name, pos, pos + file.text.length);

      var text = file.text, m;
      if (m = text.match(/(?:"([^"]*)"|([\w$]+))\s*:\s*function\b/)) {
        var objNode = walk.findNodeAround(file.backing.ast, pos, "ObjectExpression");
        if (objNode && objNode.node.objType)
          var inObject = {type: objNode.node.objType, prop: m[2] || m[1]};
      }
      if (foundPos && (m = line.match(/^(.*?)\bfunction\b/))) {
        var cut = m[1].length, white = "";
        for (var i = 0; i < cut; ++i) white += " ";
        text = white + text.slice(cut);
        var atFunction = true;
      }

      var scopeStart = infer.scopeAt(realFile.ast, pos, realFile.scope);
      var scopeEnd = infer.scopeAt(realFile.ast, pos + text.length, realFile.scope);
      var scope = file.scope = scopeDepth(scopeStart) < scopeDepth(scopeEnd) ? scopeEnd : scopeStart;
      infer.markVariablesDefinedBy(scopeStart, file.name, pos, pos + file.text.length);
      file.ast = infer.parse(file.text, srv.passes, {directSourceFile: file});
      infer.analyze(file.ast, file.name, scope, srv.passes);
      infer.purgeMarkedVariables(scopeStart);

      // This is a kludge to tie together the function types (if any)
      // outside and inside of the fragment, so that arguments and
      // return values have some information known about them.
      tieTogether: if (inObject || atFunction) {
        var newInner = infer.scopeAt(file.ast, line.length, scopeStart);
        if (!newInner.fnType) break tieTogether;
        if (inObject) {
          var prop = inObject.type.getProp(inObject.prop);
          prop.addType(newInner.fnType);
        } else if (atFunction) {
          var inner = infer.scopeAt(realFile.ast, pos + line.length, realFile.scope);
          if (inner == scopeStart || !inner.fnType) break tieTogether;
          var fOld = inner.fnType, fNew = newInner.fnType;
          if (!fNew || (fNew.name != fOld.name && fOld.name)) break tieTogether;
          for (var i = 0, e = Math.min(fOld.args.length, fNew.args.length); i < e; ++i)
            fOld.args[i].propagate(fNew.args[i]);
          fOld.self.propagate(fNew.self);
          fNew.retval.propagate(fOld.retval);
        }
      }
    });
    return file;
  }

  function isPosition(val) {
    return typeof val == "number" || typeof val == "object" &&
      typeof val.line == "number" && typeof val.ch == "number";
  }

  // Baseline query document validation
  function invalidDoc(doc) {
    if (doc.query) {
      if (typeof doc.query.type != "string") return ".query.type must be a string";
      if (doc.query.start && !isPosition(doc.query.start)) return ".query.start must be a position";
      if (doc.query.end && !isPosition(doc.query.end)) return ".query.end must be a position";
    }
    if (doc.files) {
      if (!Array.isArray(doc.files)) return "Files property must be an array";
      for (var i = 0; i < doc.files.length; ++i) {
        var file = doc.files[i];
        if (typeof file != "object") return ".files[n] must be objects";
        else if (typeof file.text != "string") return ".files[n].text must be a string";
        else if (typeof file.name != "string") return ".files[n].name must be a string";
        else if (file.type == "part") {
          if (!isPosition(file.offset) && typeof file.offsetLines != "number")
            return ".files[n].offset must be a position";
        } else if (file.type != "full") return ".files[n].type must be \"full\" or \"part\"";
      }
    }
  }

  var offsetSkipLines = 25;

  function findLineStart(file, line) {
    var text = file.text, offsets = file.lineOffsets || (file.lineOffsets = [0]);
    var pos = 0, curLine = 0;
    var storePos = Math.min(Math.floor(line / offsetSkipLines), offsets.length - 1);
    var pos = offsets[storePos], curLine = storePos * offsetSkipLines;

    while (curLine < line) {
      ++curLine;
      pos = text.indexOf("\n", pos) + 1;
      if (pos == 0) return null;
      if (curLine % offsetSkipLines == 0) offsets.push(pos);
    }
    return pos;
  }

  function resolvePos(file, pos, tolerant) {
    if (typeof pos != "number") {
      var lineStart = findLineStart(file, pos.line);
      if (lineStart == null) {
        if (tolerant) pos = file.text.length;
        else throw ternError("File doesn't contain a line " + pos.line);
      } else {
        pos = lineStart + pos.ch;
      }
    }
    if (pos > file.text.length) {
      if (tolerant) pos = file.text.length;
      else throw ternError("Position " + pos + " is outside of file.");
    }
    return pos;
  }

  function asLineChar(file, pos) {
    if (!file) return {line: 0, ch: 0};
    var offsets = file.lineOffsets || (file.lineOffsets = [0]);
    var text = file.text, line, lineStart;
    for (var i = offsets.length - 1; i >= 0; --i) if (offsets[i] <= pos) {
      line = i * offsetSkipLines;
      lineStart = offsets[i];
    }
    for (;;) {
      var eol = text.indexOf("\n", lineStart);
      if (eol >= pos || eol < 0) break;
      lineStart = eol + 1;
      ++line;
    }
    return {line: line, ch: pos - lineStart};
  }

  function outputPos(query, file, pos) {
    if (query.lineCharPositions) {
      var out = asLineChar(file, pos);
      if (file.type == "part")
        out.line += file.offsetLines != null ? file.offsetLines : asLineChar(file.backing, file.offset).line;
      return out;
    } else {
      return pos + (file.type == "part" ? file.offset : 0);
    }
  }

  // Delete empty fields from result objects
  function clean(obj) {
    for (var prop in obj) if (obj[prop] == null) delete obj[prop];
    return obj;
  }
  function maybeSet(obj, prop, val) {
    if (val != null) obj[prop] = val;
  }

  // Built-in query types

  function compareCompletions(a, b) {
    if (typeof a != "string") { a = a.name; b = b.name; }
    var aUp = /^[A-Z]/.test(a), bUp = /^[A-Z]/.test(b);
    if (aUp == bUp) return a < b ? -1 : a == b ? 0 : 1;
    else return aUp ? 1 : -1;
  }

  function isStringAround(node, start, end) {
    return node.type == "Literal" && typeof node.value == "string" &&
      node.start == start - 1 && node.end <= end + 1;
  }

  function findCompletions(srv, query, file) {
    if (query.end == null) throw ternError("missing .query.end field");
    var wordStart = resolvePos(file, query.end), wordEnd = wordStart, text = file.text;
    while (wordStart && acorn.isIdentifierChar(text.charCodeAt(wordStart - 1))) --wordStart;
    if (query.expandWordForward !== false)
      while (wordEnd < text.length && acorn.isIdentifierChar(text.charCodeAt(wordEnd))) ++wordEnd;
    var word = text.slice(wordStart, wordEnd), completions = [];
    if (query.caseInsensitive) word = word.toLowerCase();
    var wrapAsObjs = query.types || query.depths || query.docs || query.urls || query.origins;

    function gather(prop, obj, depth) {
      // 'hasOwnProperty' and such are usually just noise, leave them
      // out when no prefix is provided.
      if (query.omitObjectPrototype !== false && obj == srv.cx.protos.Object && !word) return;
      if (query.filter !== false && word &&
          (query.caseInsensitive ? prop.toLowerCase() : prop).indexOf(word) != 0) return;
      for (var i = 0; i < completions.length; ++i) {
        var c = completions[i];
        if ((wrapAsObjs ? c.name : c) == prop) return;
      }
      var rec = wrapAsObjs ? {name: prop} : prop;
      completions.push(rec);

      if (query.types || query.docs || query.urls || query.origins) {
        var val = obj ? obj.props[prop] : infer.ANull;
        infer.resetGuessing();
        var type = val.getType();
        rec.guess = infer.didGuess();
        if (query.types)
          rec.type = infer.toString(type);
        if (query.docs)
          maybeSet(rec, "doc", val.doc || type && type.doc);
        if (query.urls)
          maybeSet(rec, "url", val.url || type && type.url);
        if (query.origins)
          maybeSet(rec, "origin", val.origin || type && type.origin);
      }
      if (query.depths) rec.depth = depth;
    }

    var memberExpr = infer.findExpressionAround(file.ast, null, wordStart, file.scope, "MemberExpression");
    if (memberExpr &&
        (memberExpr.node.computed ? isStringAround(memberExpr.node.property, wordStart, wordEnd)
                                  : memberExpr.node.object.end < wordStart)) {
      var prop = memberExpr.node.property;
      prop = prop.type == "Literal" ? prop.value.slice(1) : prop.name;

      memberExpr.node = memberExpr.node.object;
      var tp = infer.expressionType(memberExpr);
      if (tp) infer.forAllPropertiesOf(tp, gather);

      if (!completions.length && query.guess !== false && tp && tp.guessProperties) {
        tp.guessProperties(function(p, o, d) {if (p != prop && p != "✖") gather(p, o, d);});
      }
      if (!completions.length && word.length >= 2 && query.guess !== false)
        for (var prop in srv.cx.props) gather(prop, srv.cx.props[prop][0], 0);
    } else {
      infer.forAllLocalsAt(file.ast, wordStart, file.scope, gather);
    }

    if (query.sort !== false) completions.sort(compareCompletions);

    return {start: outputPos(query, file, wordStart),
            end: outputPos(query, file, wordEnd),
            completions: completions};
  }

  function findProperties(srv, query) {
    var prefix = query.prefix, found = [];
    for (var prop in srv.cx.props)
      if (prop != "<i>" && (!prefix || prop.indexOf(prefix) == 0)) found.push(prop);
    if (query.sort !== false) found.sort(compareCompletions);
    return {completions: found};
  }

  var findExpr = exports.findQueryExpr = function(file, query, wide) {
    if (query.end == null) throw ternError("missing .query.end field");

    if (query.variable) {
      var scope = infer.scopeAt(file.ast, resolvePos(file, query.end), file.scope);
      return {node: {type: "Identifier", name: query.variable, start: query.end, end: query.end + 1},
              state: scope};
    } else {
      var start = query.start && resolvePos(file, query.start), end = resolvePos(file, query.end);
      var expr = infer.findExpressionAt(file.ast, start, end, file.scope);
      if (expr) return expr;
      expr = infer.findExpressionAround(file.ast, start, end, file.scope);
      if (expr && (wide || (start == null ? end : start) - expr.node.start < 20 || expr.node.end - end < 20))
        return expr;
      throw ternError("No expression at the given position.");
    }
  };

  function findTypeAt(_srv, query, file) {
    var expr = findExpr(file, query);
    infer.resetGuessing();
    var type = infer.expressionType(expr);
    if (query.preferFunction)
      type = type.getFunctionType() || type.getType();
    else
      type = type.getType();

    if (expr.node.type == "Identifier")
      var exprName = expr.node.name;
    else if (expr.node.type == "MemberExpression" && !expr.node.computed)
      var exprName = expr.node.property.name;

    if (query.depth != null && typeof query.depth != "number")
      throw ternError(".query.depth must be a number");

    var result = {guess: infer.didGuess(),
                  type: infer.toString(type, query.depth),
                  name: type && type.name,
                  exprName: exprName};
    if (type) storeTypeDocs(type, result);

    return clean(result);
  }

  function findDocs(_srv, query, file) {
    var expr = findExpr(file, query);
    var type = infer.expressionType(expr);
    var result = {url: type.url, doc: type.doc};
    var inner = type.getType();
    if (inner) storeTypeDocs(inner, result);
    return clean(result);
  }

  function storeTypeDocs(type, out) {
    if (!out.url) out.url = type.url;
    if (!out.doc) out.doc = type.doc;
    if (!out.origin) out.origin = type.origin;
    var ctor, boring = infer.cx().protos;
    if (!out.url && !out.doc && type.proto && (ctor = type.proto.hasCtor) &&
        type.proto != boring.Object && type.proto != boring.Function && type.proto != boring.Array) {
      out.url = ctor.url;
      out.doc = ctor.doc;
    }
  }

  var getSpan = exports.getSpan = function(obj) {
    if (!obj.origin) return;
    if (obj.originNode) {
      var node = obj.originNode;
      if (/^Function/.test(node.type) && node.id) node = node.id;
      return {origin: obj.origin, node: node};
    }
    if (obj.span) return {origin: obj.origin, span: obj.span};
  };

  var storeSpan = exports.storeSpan = function(srv, query, span, target) {
    target.origin = span.origin;
    if (span.span) {
      var m = /^(\d+)\[(\d+):(\d+)\]-(\d+)\[(\d+):(\d+)\]$/.exec(span.span);
      target.start = query.lineCharPositions ? {line: Number(m[2]), ch: Number(m[3])} : Number(m[1]);
      target.end = query.lineCharPositions ? {line: Number(m[5]), ch: Number(m[6])} : Number(m[4]);
    } else {
      var file = findFile(srv.files, span.origin);
      target.start = outputPos(query, file, span.node.start);
      target.end = outputPos(query, file, span.node.end);
    }
  };

  function findDef(srv, query, file) {
    var expr = findExpr(file, query);
    infer.resetGuessing();
    var type = infer.expressionType(expr);
    if (infer.didGuess()) return {};

    var span = getSpan(type);
    var result = {url: type.url, doc: type.doc, origin: type.origin};

    if (type.types) for (var i = type.types.length - 1; i >= 0; --i) {
      var tp = type.types[i];
      storeTypeDocs(tp, result);
      if (!span) span = getSpan(tp);
    }

    if (span && span.node) { // refers to a loaded file
      var spanFile = span.node.sourceFile || findFile(srv.files, span.origin);
      var start = outputPos(query, spanFile, span.node.start), end = outputPos(query, spanFile, span.node.end);
      result.start = start; result.end = end;
      result.file = span.origin;
      var cxStart = Math.max(0, span.node.start - 50);
      result.contextOffset = span.node.start - cxStart;
      result.context = spanFile.text.slice(cxStart, cxStart + 50);
    } else if (span) { // external
      result.file = span.origin;
      storeSpan(srv, query, span, result);
    }
    return clean(result);
  }

  function findRefsToVariable(srv, query, file, expr, checkShadowing) {
    var name = expr.node.name;

    for (var scope = expr.state; scope && !(name in scope.props); scope = scope.prev) {}
    if (!scope) throw ternError("Could not find a definition for " + name + " " + !!srv.cx.topScope.props.x);

    var type, refs = [];
    function storeRef(file) {
      return function(node, scopeHere) {
        if (checkShadowing) for (var s = scopeHere; s != scope; s = s.prev) {
          var exists = s.hasProp(checkShadowing);
          if (exists)
            throw ternError("Renaming `" + name + "` to `" + checkShadowing + "` would make a variable at line " +
                            (asLineChar(file, node.start).line + 1) + " point to the definition at line " +
                            (asLineChar(file, exists.name.start).line + 1));
        }
        refs.push({file: file.name,
                   start: outputPos(query, file, node.start),
                   end: outputPos(query, file, node.end)});
      };
    }

    if (scope.node) {
      type = "local";
      if (checkShadowing) {
        for (var prev = scope.prev; prev; prev = prev.prev)
          if (checkShadowing in prev.props) break;
        if (prev) infer.findRefs(scope.node, scope, checkShadowing, prev, function(node) {
          throw ternError("Renaming `" + name + "` to `" + checkShadowing + "` would shadow the definition used at line " +
                          (asLineChar(file, node.start).line + 1));
        });
      }
      infer.findRefs(scope.node, scope, name, scope, storeRef(file));
    } else {
      type = "global";
      for (var i = 0; i < srv.files.length; ++i) {
        var cur = srv.files[i];
        infer.findRefs(cur.ast, cur.scope, name, scope, storeRef(cur));
      }
    }

    return {refs: refs, type: type, name: name};
  }

  function findRefsToProperty(srv, query, expr, prop) {
    var objType = infer.expressionType(expr).getType();
    if (!objType) throw ternError("Couldn't determine type of base object.");

    var refs = [];
    function storeRef(file) {
      return function(node) {
        refs.push({file: file.name,
                   start: outputPos(query, file, node.start),
                   end: outputPos(query, file, node.end)});
      };
    }
    for (var i = 0; i < srv.files.length; ++i) {
      var cur = srv.files[i];
      infer.findPropRefs(cur.ast, cur.scope, objType, prop.name, storeRef(cur));
    }

    return {refs: refs, name: prop.name};
  }

  function findRefs(srv, query, file) {
    var expr = findExpr(file, query, true);
    if (expr && expr.node.type == "Identifier") {
      return findRefsToVariable(srv, query, file, expr);
    } else if (expr && expr.node.type == "MemberExpression" && !expr.node.computed) {
      var p = expr.node.property;
      expr.node = expr.node.object;
      return findRefsToProperty(srv, query, expr, p);
    } else if (expr && expr.node.type == "ObjectExpression") {
      var pos = resolvePos(file, query.end);
      for (var i = 0; i < expr.node.properties.length; ++i) {
        var k = expr.node.properties[i].key;
        if (k.start <= pos && k.end >= pos)
          return findRefsToProperty(srv, query, expr, k);
      }
    }
    throw ternError("Not at a variable or property name.");
  }

  function buildRename(srv, query, file) {
    if (typeof query.newName != "string") throw ternError(".query.newName should be a string");
    var expr = findExpr(file, query);
    if (!expr || expr.node.type != "Identifier") throw ternError("Not at a variable.");

    var data = findRefsToVariable(srv, query, file, expr, query.newName), refs = data.refs;
    delete data.refs;
    data.files = srv.files.map(function(f){return f.name;});

    var changes = data.changes = [];
    for (var i = 0; i < refs.length; ++i) {
      var use = refs[i];
      use.text = query.newName;
      changes.push(use);
    }

    return data;
  }

  function listFiles(srv) {
    return {files: srv.files.map(function(f){return f.name;})};
  }

  exports.version = "0.5.1";
});
// Type description parser

// Type description JSON files (such as ecma5.json and browser.json)
// are used to
//
// A) describe types that come from native code

// B) to cheaply load the types for big libraries, or libraries that
//    can't be inferred well

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return exports.init = mod;
  if (typeof define == "function" && define.amd) // AMD
    return define({init: mod});
  tern.def = {init: mod};
})(function(exports, infer) {
  "use strict";

  function hop(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }

  var TypeParser = exports.TypeParser = function(spec, start, base, forceNew) {
    this.pos = start || 0;
    this.spec = spec;
    this.base = base;
    this.forceNew = forceNew;
  };
  TypeParser.prototype = {
    eat: function(str) {
      if (str.length == 1 ? this.spec.charAt(this.pos) == str : this.spec.indexOf(str, this.pos) == this.pos) {
        this.pos += str.length;
        return true;
      }
    },
    word: function(re) {
      var word = "", ch, re = re || /[\w$]/;
      while ((ch = this.spec.charAt(this.pos)) && re.test(ch)) { word += ch; ++this.pos; }
      return word;
    },
    error: function() {
      throw new Error("Unrecognized type spec: " + this.spec + " (at " + this.pos + ")");
    },
    parseFnType: function(name, top) {
      var args = [], names = [];
      if (!this.eat(")")) for (var i = 0; ; ++i) {
        var colon = this.spec.indexOf(": ", this.pos), argname;
        if (colon != -1) {
          argname = this.spec.slice(this.pos, colon);
          if (/^[$\w?]+$/.test(argname))
            this.pos = colon + 2;
          else
            argname = null;
        }
        names.push(argname);
        args.push(this.parseType());
        if (!this.eat(", ")) {
          this.eat(")") || this.error();
          break;
        }
      }
      var retType, computeRet, computeRetStart, fn;
      if (this.eat(" -> ")) {
        if (top && this.spec.indexOf("!", this.pos) > -1) {
          retType = infer.ANull;
          computeRetStart = this.pos;
          computeRet = this.parseRetType();
        } else retType = this.parseType();
      } else retType = infer.ANull;
      if (top && (fn = this.base))
        infer.Fn.call(this.base, name, infer.ANull, args, names, retType);
      else
        fn = new infer.Fn(name, infer.ANull, args, names, retType);
      if (computeRet) fn.computeRet = computeRet;
      if (computeRetStart != null) fn.computeRetSource = this.spec.slice(computeRetStart, this.pos);
      return fn;
    },
    parseType: function(name, top) {
      if (this.eat("fn(")) {
        return this.parseFnType(name, top);
      } else if (this.eat("[")) {
        var inner = this.parseType();
        this.eat("]") || this.error();
        if (top && this.base) {
          infer.Arr.call(this.base, inner);
          return this.base;
        }
        return new infer.Arr(inner);
      } else if (this.eat("+")) {
        var path = this.word(/[\w$<>\.!]/);
        var base = parsePath(path + ".prototype");
        if (!(base instanceof infer.Obj)) base = parsePath(path);
        if (!(base instanceof infer.Obj)) return base;
        if (top && this.forceNew) return new infer.Obj(base);
        return infer.getInstance(base);
      } else if (this.eat("?")) {
        return infer.ANull;
      } else {
        return this.fromWord(this.word(/[\w$<>\.!`]/));
      }
    },
    fromWord: function(spec) {
      var cx = infer.cx();
      switch (spec) {
      case "number": return cx.num;
      case "string": return cx.str;
      case "bool": return cx.bool;
      case "<top>": return cx.topScope;
      }
      if (cx.localDefs && spec in cx.localDefs) return cx.localDefs[spec];
      return parsePath(spec);
    },
    parseBaseRetType: function() {
      if (this.eat("[")) {
        var inner = this.parseRetType();
        this.eat("]") || this.error();
        return function(self, args) { return new infer.Arr(inner(self, args)); };
      } else if (this.eat("+")) {
        var base = this.parseRetType();
        return function(self, args) { return infer.getInstance(base(self, args)); };
      } else if (this.eat("!")) {
        var arg = this.word(/\d/);
        if (arg) {
          arg = Number(arg);
          return function(_self, args) {return args[arg] || infer.ANull;};
        } else if (this.eat("this")) {
          return function(self) {return self;};
        } else if (this.eat("custom:")) {
          var fname = this.word(/[\w$]/);
          return customFunctions[fname] || function() { return infer.ANull; };
        } else {
          return this.fromWord("!" + arg + this.word(/[\w$<>\.!]/));
        }
      }
      var t = this.parseType();
      return function(){return t;};
    },
    extendRetType: function(base) {
      var propName = this.word(/[\w<>$!]/) || this.error();
      if (propName == "!ret") return function(self, args) {
        var lhs = base(self, args);
        if (lhs.retval) return lhs.retval;
        var rv = new infer.AVal;
        lhs.propagate(new infer.IsCallee(infer.ANull, [], null, rv));
        return rv;
      };
      return function(self, args) {return base(self, args).getProp(propName);};
    },
    parseRetType: function() {
      var tp = this.parseBaseRetType();
      while (this.eat(".")) tp = this.extendRetType(tp);
      return tp;
    }
  };

  function parseType(spec, name, base, forceNew) {
    var type = new TypeParser(spec, null, base, forceNew).parseType(name, true);
    if (/^fn\(/.test(spec)) for (var i = 0; i < type.args.length; ++i) (function(i) {
      var arg = type.args[i];
      if (arg instanceof infer.Fn && arg.args && arg.args.length) addEffect(type, function(_self, fArgs) {
        var fArg = fArgs[i];
        if (fArg) fArg.propagate(new infer.IsCallee(infer.cx().topScope, arg.args, null, infer.ANull));
      });
    })(i);
    return type;
  }

  function addEffect(fn, handler, replaceRet) {
    var oldCmp = fn.computeRet, rv = fn.retval;
    fn.computeRet = function(self, args, argNodes) {
      var handled = handler(self, args, argNodes);
      var old = oldCmp ? oldCmp(self, args, argNodes) : rv;
      return replaceRet ? handled : old;
    };
  }

  var parseEffect = exports.parseEffect = function(effect, fn) {
    var m;
    if (effect.indexOf("propagate ") == 0) {
      var p = new TypeParser(effect, 10);
      var getOrigin = p.parseRetType();
      if (!p.eat(" ")) p.error();
      var getTarget = p.parseRetType();
      addEffect(fn, function(self, args) {
        getOrigin(self, args).propagate(getTarget(self, args));
      });
    } else if (effect.indexOf("call ") == 0) {
      var andRet = effect.indexOf("and return ", 5) == 5;
      var p = new TypeParser(effect, andRet ? 16 : 5);
      var getCallee = p.parseRetType(), getSelf = null, getArgs = [];
      if (p.eat(" this=")) getSelf = p.parseRetType();
      while (p.eat(" ")) getArgs.push(p.parseRetType());
      addEffect(fn, function(self, args) {
        var callee = getCallee(self, args);
        var slf = getSelf ? getSelf(self, args) : infer.ANull, as = [];
        for (var i = 0; i < getArgs.length; ++i) as.push(getArgs[i](self, args));
        var result = andRet ? new infer.AVal : infer.ANull;
        callee.propagate(new infer.IsCallee(slf, as, null, result));
        return result;
      }, andRet);
    } else if (m = effect.match(/^custom (\S+)\s*(.*)/)) {
      var customFunc = customFunctions[m[1]];
      if (customFunc) addEffect(fn, m[2] ? customFunc(m[2]) : customFunc);
    } else if (effect.indexOf("copy ") == 0) {
      var p = new TypeParser(effect, 5);
      var getFrom = p.parseRetType();
      p.eat(" ");
      var getTo = p.parseRetType();
      addEffect(fn, function(self, args) {
        var from = getFrom(self, args), to = getTo(self, args);
        from.forAllProps(function(prop, val, local) {
          if (local && prop != "<i>")
            to.propagate(new infer.PropHasSubset(prop, val));
        });
      });
    } else {
      throw new Error("Unknown effect type: " + effect);
    }
  };

  var currentTopScope;

  var parsePath = exports.parsePath = function(path) {
    var cx = infer.cx(), cached = cx.paths[path], origPath = path;
    if (cached != null) return cached;
    cx.paths[path] = infer.ANull;

    var base = currentTopScope || cx.topScope;

    if (cx.localDefs) for (var name in cx.localDefs) {
      if (path.indexOf(name) == 0) {
        if (path == name) return cx.paths[path] = cx.localDefs[path];
        if (path.charAt(name.length) == ".") {
          base = cx.localDefs[name];
          path = path.slice(name.length + 1);
          break;
        }
      }
    }

    var parts = path.split(".");
    for (var i = 0; i < parts.length && base != infer.ANull; ++i) {
      var prop = parts[i];
      if (prop.charAt(0) == "!") {
        if (prop == "!proto") {
          base = (base instanceof infer.Obj && base.proto) || infer.ANull;
        } else {
          var fn = base.getFunctionType();
          if (!fn) {
            base = infer.ANull;
          } else if (prop == "!ret") {
            base = fn.retval && fn.retval.getType() || infer.ANull;
          } else {
            var arg = fn.args && fn.args[Number(prop.slice(1))];
            base = (arg && arg.getType()) || infer.ANull;
          }
        }
      } else if (base instanceof infer.Obj) {
        var propVal = (prop == "prototype" && base instanceof infer.Fn) ? base.getProp(prop) : base.props[prop];
        if (!propVal || propVal.isEmpty())
          base = infer.ANull;
        else
          base = propVal.types[0];
      }
    }
    // Uncomment this to get feedback on your poorly written .json files
    // if (base == infer.ANull) console.error("bad path: " + origPath + " (" + cx.curOrigin + ")");
    cx.paths[origPath] = base == infer.ANull ? null : base;
    return base;
  };

  function emptyObj(ctor) {
    var empty = Object.create(ctor.prototype);
    empty.props = Object.create(null);
    empty.isShell = true;
    return empty;
  }

  function isSimpleAnnotation(spec) {
    if (!spec["!type"] || /^fn\(/.test(spec["!type"])) return false;
    for (var prop in spec)
      if (prop != "!type" && prop != "!doc" && prop != "!url" && prop != "!span" && prop != "!data")
        return false;
    return true;
  }

  function passOne(base, spec, path) {
    if (!base) {
      var tp = spec["!type"];
      if (tp) {
        if (/^fn\(/.test(tp)) base = emptyObj(infer.Fn);
        else if (tp.charAt(0) == "[") base = emptyObj(infer.Arr);
        else throw new Error("Invalid !type spec: " + tp);
      } else if (spec["!stdProto"]) {
        base = infer.cx().protos[spec["!stdProto"]];
      } else {
        base = emptyObj(infer.Obj);
      }
      base.name = path;
    }

    for (var name in spec) if (hop(spec, name) && name.charCodeAt(0) != 33) {
      var inner = spec[name];
      if (typeof inner == "string" || isSimpleAnnotation(inner)) continue;
      var prop = base.defProp(name);
      passOne(prop.getType(), inner, path ? path + "." + name : name).propagate(prop);
    }
    return base;
  }

  function passTwo(base, spec, path) {
    if (base.isShell) {
      delete base.isShell;
      var tp = spec["!type"];
      if (tp) {
        parseType(tp, path, base);
      } else {
        var proto = spec["!proto"] && parseType(spec["!proto"]);
        infer.Obj.call(base, proto instanceof infer.Obj ? proto : true, path);
      }
    }

    var effects = spec["!effects"];
    if (effects && base instanceof infer.Fn) for (var i = 0; i < effects.length; ++i)
      parseEffect(effects[i], base);
    copyInfo(spec, base);

    for (var name in spec) if (hop(spec, name) && name.charCodeAt(0) != 33) {
      var inner = spec[name], known = base.defProp(name), innerPath = path ? path + "." + name : name;
      var type = known.getType();
      if (typeof inner == "string") {
        if (type) continue;
        parseType(inner, innerPath).propagate(known);
      } else {
        if (!isSimpleAnnotation(inner)) {
          passTwo(type, inner, innerPath);
        } else if (!type) {
          parseType(inner["!type"], innerPath, null, true).propagate(known);
          type = known.getType();
          if (type instanceof infer.Obj) copyInfo(inner, type);
        } else continue;
        if (inner["!doc"]) known.doc = inner["!doc"];
        if (inner["!url"]) known.url = inner["!url"];
        if (inner["!span"]) known.span = inner["!span"];
      }
    }
  }

  function copyInfo(spec, type) {
    if (spec["!doc"]) type.doc = spec["!doc"];
    if (spec["!url"]) type.url = spec["!url"];
    if (spec["!span"]) type.span = spec["!span"];
    if (spec["!data"]) type.metaData = spec["!data"];
  }

  function runPasses(type, arg) {
    var parent = infer.cx().parent, pass = parent && parent.passes && parent.passes[type];
    if (pass) for (var i = 0; i < pass.length; i++) pass[i](arg);
  }

  function doLoadEnvironment(data, scope) {
    var cx = infer.cx();

    infer.addOrigin(cx.curOrigin = data["!name"] || "env#" + cx.origins.length);
    cx.localDefs = cx.definitions[cx.curOrigin] = Object.create(null);

    runPasses("preLoadDef", data);

    passOne(scope, data);

    var def = data["!define"];
    if (def) {
      for (var name in def) {
        var spec = def[name];
        cx.localDefs[name] = typeof spec == "string" ? parsePath(spec) : passOne(null, spec, name);
      }
      for (var name in def) {
        var spec = def[name];
        if (typeof spec != "string") passTwo(cx.localDefs[name], def[name], name);
      }
    }

    passTwo(scope, data);

    runPasses("postLoadDef", data);

    cx.curOrigin = cx.localDefs = null;
  }

  exports.load = function(data, scope) {
    if (!scope) scope = infer.cx().topScope;
    var oldScope = currentTopScope;
    currentTopScope = scope;
    try {
      doLoadEnvironment(data, scope);
    } finally {
      currentTopScope = oldScope;
    }
  };

  // Used to register custom logic for more involved effect or type
  // computation.
  var customFunctions = Object.create(null);
  infer.registerFunction = function(name, f) { customFunctions[name] = f; };

  var IsCreated = infer.constraint("created, target, spec", {
    addType: function(tp) {
      if (tp instanceof infer.Obj && this.created++ < 5) {
        var derived = new infer.Obj(tp), spec = this.spec;
        if (spec instanceof infer.AVal) spec = spec.getType();
        if (spec instanceof infer.Obj) for (var prop in spec.props) {
          var cur = spec.props[prop].types[0];
          var p = derived.defProp(prop);
          if (cur && cur instanceof infer.Obj && cur.props.value) {
            var vtp = cur.props.value.getType();
            if (vtp) p.addType(vtp);
          }
        }
        this.target.addType(derived);
      }
    }
  });

  infer.registerFunction("Object_create", function(_self, args, argNodes) {
    if (argNodes && argNodes.length && argNodes[0].type == "Literal" && argNodes[0].value == null)
      return new infer.Obj();

    var result = new infer.AVal;
    if (args[0]) args[0].propagate(new IsCreated(0, result, args[1]));
    return result;
  });

  var IsBound = infer.constraint("self, args, target", {
    addType: function(tp) {
      if (!(tp instanceof infer.Fn)) return;
      this.target.addType(new infer.Fn(tp.name, tp.self, tp.args.slice(this.args.length),
                                       tp.argNames.slice(this.args.length), tp.retval));
      this.self.propagate(tp.self);
      for (var i = 0; i < Math.min(tp.args.length, this.args.length); ++i)
        this.args[i].propagate(tp.args[i]);
    }
  });

  infer.registerFunction("Function_bind", function(self, args) {
    if (!args.length) return infer.ANull;
    var result = new infer.AVal;
    self.propagate(new IsBound(args[0], args.slice(1), result));
    return result;
  });

  infer.registerFunction("Array_ctor", function(_self, args) {
    var arr = new infer.Arr;
    if (args.length != 1 || !args[0].hasType(infer.cx().num)) {
      var content = arr.getProp("<i>");
      for (var i = 0; i < args.length; ++i) args[i].propagate(content);
    }
    return arr;
  });

  return exports;
});
(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(exports);
  if (typeof define == "function" && define.amd) // AMD
    return define(["exports"], mod);
  mod(tern.comment || (tern.comment = {}));
})(function(exports) {
  function isSpace(ch) {
    return (ch < 14 && ch > 8) || ch === 32 || ch === 160;
  }

  function onOwnLine(text, pos) {
    for (; pos > 0; --pos) {
      var ch = text.charCodeAt(pos - 1);
      if (ch == 10) break;
      if (!isSpace(ch)) return false;
    }
    return true;
  }

  // Gather comments directly before a function
  exports.commentsBefore = function(text, pos) {
    var found = null, emptyLines = 0, topIsLineComment;
    out: while (pos > 0) {
      var prev = text.charCodeAt(pos - 1);
      if (prev == 10) {
        for (var scan = --pos, sawNonWS = false; scan > 0; --scan) {
          prev = text.charCodeAt(scan - 1);
          if (prev == 47 && text.charCodeAt(scan - 2) == 47) {
            if (!onOwnLine(text, scan - 2)) break out;
            var content = text.slice(scan, pos);
            if (!emptyLines && topIsLineComment) found[0] = content + "\n" + found[0];
            else (found || (found = [])).unshift(content);
            topIsLineComment = true;
            emptyLines = 0;
            pos = scan - 2;
            break;
          } else if (prev == 10) {
            if (!sawNonWS && ++emptyLines > 1) break out;
            break;
          } else if (!sawNonWS && !isSpace(prev)) {
            sawNonWS = true;
          }
        }
      } else if (prev == 47 && text.charCodeAt(pos - 2) == 42) {
        for (var scan = pos - 2; scan > 1; --scan) {
          if (text.charCodeAt(scan - 1) == 42 && text.charCodeAt(scan - 2) == 47) {
            if (!onOwnLine(text, scan - 2)) break out;
            (found || (found = [])).unshift(text.slice(scan, pos - 2));
            topIsLineComment = false;
            emptyLines = 0;
            break;
          }
        }
        pos = scan - 2;
      } else if (isSpace(prev)) {
        --pos;
      } else {
        break;
      }
    }
    return found;
  };

  exports.commentAfter = function(text, pos) {
    while (pos < text.length) {
      var next = text.charCodeAt(pos);
      if (next == 47) {
        var after = text.charCodeAt(pos + 1), end;
        if (after == 47) // line comment
          end = text.indexOf("\n", pos + 2);
        else if (after == 42) // block comment
          end = text.indexOf("*/", pos + 2);
        else
          return;
        return text.slice(pos + 2, end < 0 ? text.length : end);
      } else if (isSpace(next)) {
        ++pos;
      }
    }
  };

  exports.ensureCommentsBefore = function(text, node) {
    if (node.hasOwnProperty("commentsBefore")) return node.commentsBefore;
    return node.commentsBefore = exports.commentsBefore(text, node.start);
  };
});
// Main type inference engine

// Walks an AST, building up a graph of abstract values and contraints
// that cause types to flow from one node to another. Also defines a
// number of utilities for accessing ASTs and scopes.

// Analysis is done in a context, which is tracked by the dynamically
// bound cx variable. Use withContext to set the current context.

// For memory-saving reasons, individual types export an interface
// similar to abstract values (which can hold multiple types), and can
// thus be used in place abstract values that only ever contain a
// single type.

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(exports, require("acorn/acorn"), require("acorn/acorn_loose"), require("acorn/util/walk"),
               require("./def"), require("./signal"));
  if (typeof define == "function" && define.amd) // AMD
    return define(["exports", "acorn/acorn", "acorn/acorn_loose", "acorn/util/walk", "./def", "./signal"], mod);
  mod(self.tern || (self.tern = {}), acorn, acorn, acorn.walk, tern.def, tern.signal); // Plain browser env
})(function(exports, acorn, acorn_loose, walk, def, signal) {
  "use strict";

  var toString = exports.toString = function(type, maxDepth, parent) {
    return !type || type == parent ? "?": type.toString(maxDepth);
  };

  // A variant of AVal used for unknown, dead-end values. Also serves
  // as prototype for AVals, Types, and Constraints because it
  // implements 'empty' versions of all the methods that the code
  // expects.
  var ANull = exports.ANull = signal.mixin({
    addType: function() {},
    propagate: function() {},
    getProp: function() { return ANull; },
    forAllProps: function() {},
    hasType: function() { return false; },
    isEmpty: function() { return true; },
    getFunctionType: function() {},
    getType: function() {},
    gatherProperties: function() {},
    propagatesTo: function() {},
    typeHint: function() {},
    propHint: function() {}
  });

  function extend(proto, props) {
    var obj = Object.create(proto);
    if (props) for (var prop in props) obj[prop] = props[prop];
    return obj;
  }

  // ABSTRACT VALUES

  var WG_DEFAULT = 100, WG_NEW_INSTANCE = 90, WG_MADEUP_PROTO = 10, WG_MULTI_MEMBER = 5,
      WG_CATCH_ERROR = 5, WG_GLOBAL_THIS = 90, WG_SPECULATIVE_THIS = 2;

  var AVal = exports.AVal = function() {
    this.types = [];
    this.forward = null;
    this.maxWeight = 0;
  };
  AVal.prototype = extend(ANull, {
    addType: function(type, weight) {
      weight = weight || WG_DEFAULT;
      if (this.maxWeight < weight) {
        this.maxWeight = weight;
        if (this.types.length == 1 && this.types[0] == type) return;
        this.types.length = 0;
      } else if (this.maxWeight > weight || this.types.indexOf(type) > -1) {
        return;
      }

      this.signal("addType", type);
      this.types.push(type);
      var forward = this.forward;
      if (forward) withWorklist(function(add) {
        for (var i = 0; i < forward.length; ++i) add(type, forward[i], weight);
      });
    },

    propagate: function(target, weight) {
      if (target == ANull || (target instanceof Type)) return;
      if (weight && weight < WG_DEFAULT) target = new Muffle(target, weight);
      (this.forward || (this.forward = [])).push(target);
      var types = this.types;
      if (types.length) withWorklist(function(add) {
        for (var i = 0; i < types.length; ++i) add(types[i], target, weight);
      });
    },

    getProp: function(prop) {
      if (prop == "__proto__" || prop == "✖") return ANull;
      var found = (this.props || (this.props = Object.create(null)))[prop];
      if (!found) {
        found = this.props[prop] = new AVal;
        this.propagate(new PropIsSubset(prop, found));
      }
      return found;
    },

    forAllProps: function(c) {
      this.propagate(new ForAllProps(c));
    },

    hasType: function(type) {
      return this.types.indexOf(type) > -1;
    },
    isEmpty: function() { return this.types.length == 0; },
    getFunctionType: function() {
      for (var i = this.types.length - 1; i >= 0; --i)
        if (this.types[i] instanceof Fn) return this.types[i];
    },

    getType: function(guess) {
      if (this.types.length == 0 && guess !== false) return this.makeupType();
      if (this.types.length == 1) return this.types[0];
      return canonicalType(this.types);
    },

    makeupType: function() {
      if (!this.forward) return null;
      for (var i = this.forward.length - 1; i >= 0; --i) {
        var hint = this.forward[i].typeHint();
        if (hint && !hint.isEmpty()) {guessing = true; return hint;}
      }

      var props = Object.create(null), foundProp = null;
      for (var i = 0; i < this.forward.length; ++i) {
        var prop = this.forward[i].propHint();
        if (prop && prop != "length" && prop != "<i>" && prop != "✖") {
          props[prop] = true;
          foundProp = prop;
        }
      }
      if (!foundProp) return null;

      var objs = objsWithProp(foundProp);
      if (objs) {
        var matches = [];
        search: for (var i = 0; i < objs.length; ++i) {
          var obj = objs[i];
          for (var prop in props) if (!obj.hasProp(prop)) continue search;
          if (obj.hasCtor) obj = getInstance(obj);
          matches.push(obj);
        }
        var canon = canonicalType(matches);
        if (canon) {guessing = true; return canon;}
      }
    },

    typeHint: function() { return this.types.length ? this.getType() : null; },
    propagatesTo: function() { return this; },

    gatherProperties: function(f, depth) {
      for (var i = 0; i < this.types.length; ++i)
        this.types[i].gatherProperties(f, depth);
    },

    guessProperties: function(f) {
      if (this.forward) for (var i = 0; i < this.forward.length; ++i) {
        var prop = this.forward[i].propHint();
        if (prop) f(prop, null, 0);
      }
    }
  });

  function canonicalType(types) {
    var arrays = 0, fns = 0, objs = 0, prim = null;
    for (var i = 0; i < types.length; ++i) {
      var tp = types[i];
      if (tp instanceof Arr) ++arrays;
      else if (tp instanceof Fn) ++fns;
      else if (tp instanceof Obj) ++objs;
      else if (tp instanceof Prim) {
        if (prim && tp.name != prim.name) return null;
        prim = tp;
      }
    }
    var kinds = (arrays && 1) + (fns && 1) + (objs && 1) + (prim && 1);
    if (kinds > 1) return null;
    if (prim) return prim;

    var maxScore = 0, maxTp = null;
    for (var i = 0; i < types.length; ++i) {
      var tp = types[i], score = 0;
      if (arrays) {
        score = tp.getProp("<i>").isEmpty() ? 1 : 2;
      } else if (fns) {
        score = 1;
        for (var j = 0; j < tp.args.length; ++j) if (!tp.args[j].isEmpty()) ++score;
        if (!tp.retval.isEmpty()) ++score;
      } else if (objs) {
        score = tp.name ? 100 : 2;
      }
      if (score >= maxScore) { maxScore = score; maxTp = tp; }
    }
    return maxTp;
  }

  // PROPAGATION STRATEGIES

  function Constraint() {}
  Constraint.prototype = extend(ANull, {
    init: function() { this.origin = cx.curOrigin; }
  });

  var constraint = exports.constraint = function(props, methods) {
    var body = "this.init();";
    props = props ? props.split(", ") : [];
    for (var i = 0; i < props.length; ++i)
      body += "this." + props[i] + " = " + props[i] + ";";
    var ctor = Function.apply(null, props.concat([body]));
    ctor.prototype = Object.create(Constraint.prototype);
    for (var m in methods) if (methods.hasOwnProperty(m)) ctor.prototype[m] = methods[m];
    return ctor;
  };

  var PropIsSubset = constraint("prop, target", {
    addType: function(type, weight) {
      if (type.getProp)
        type.getProp(this.prop).propagate(this.target, weight);
    },
    propHint: function() { return this.prop; },
    propagatesTo: function() {
      return {target: this.target, pathExt: "." + this.prop};
    }
  });

  var PropHasSubset = exports.PropHasSubset = constraint("prop, type, originNode", {
    addType: function(type, weight) {
      if (!(type instanceof Obj)) return;
      var prop = type.defProp(this.prop, this.originNode);
      prop.origin = this.origin;
      this.type.propagate(prop, weight);
    },
    propHint: function() { return this.prop; }
  });

  var ForAllProps = constraint("c", {
    addType: function(type) {
      if (!(type instanceof Obj)) return;
      type.forAllProps(this.c);
    }
  });

  function withDisabledComputing(fn, body) {
    cx.disabledComputing = {fn: fn, prev: cx.disabledComputing};
    try {
      return body();
    } finally {
      cx.disabledComputing = cx.disabledComputing.prev;
    }
  }
  var IsCallee = exports.IsCallee = constraint("self, args, argNodes, retval", {
    init: function() {
      Constraint.prototype.init();
      this.disabled = cx.disabledComputing;
    },
    addType: function(fn, weight) {
      if (!(fn instanceof Fn)) return;
      for (var i = 0; i < this.args.length; ++i) {
        if (i < fn.args.length) this.args[i].propagate(fn.args[i], weight);
        if (fn.arguments) this.args[i].propagate(fn.arguments, weight);
      }
      this.self.propagate(fn.self, this.self == cx.topScope ? WG_GLOBAL_THIS : weight);
      var compute = fn.computeRet;
      if (compute) for (var d = this.disabled; d; d = d.prev)
        if (d.fn == fn || fn.name && d.fn.name == fn.name) compute = null;
      if (compute)
        compute(this.self, this.args, this.argNodes).propagate(this.retval, weight);
      else
        fn.retval.propagate(this.retval, weight);
    },
    typeHint: function() {
      var names = [];
      for (var i = 0; i < this.args.length; ++i) names.push("?");
      return new Fn(null, this.self, this.args, names, ANull);
    },
    propagatesTo: function() {
      return {target: this.retval, pathExt: ".!ret"};
    }
  });

  var HasMethodCall = constraint("propName, args, argNodes, retval", {
    init: function() {
      Constraint.prototype.init();
      this.disabled = cx.disabledComputing;
    },
    addType: function(obj, weight) {
      var callee = new IsCallee(obj, this.args, this.argNodes, this.retval);
      callee.disabled = this.disabled;
      obj.getProp(this.propName).propagate(callee, weight);
    },
    propHint: function() { return this.propName; }
  });

  var IsCtor = exports.IsCtor = constraint("target, noReuse", {
    addType: function(f, weight) {
      if (!(f instanceof Fn)) return;
      f.getProp("prototype").propagate(new IsProto(this.noReuse ? false : f, this.target), weight);
    }
  });

  var getInstance = exports.getInstance = function(obj, ctor) {
    if (ctor === false) return new Obj(obj);

    if (!ctor) ctor = obj.hasCtor;
    if (!obj.instances) obj.instances = [];
    for (var i = 0; i < obj.instances.length; ++i) {
      var cur = obj.instances[i];
      if (cur.ctor == ctor) return cur.instance;
    }
    var instance = new Obj(obj, ctor && ctor.name);
    instance.origin = obj.origin;
    obj.instances.push({ctor: ctor, instance: instance});
    return instance;
  };

  var IsProto = exports.IsProto = constraint("ctor, target", {
    addType: function(o, _weight) {
      if (!(o instanceof Obj)) return;
      if ((this.count = (this.count || 0) + 1) > 8) return;
      if (o == cx.protos.Array)
        this.target.addType(new Arr);
      else
        this.target.addType(getInstance(o, this.ctor));
    }
  });

  var FnPrototype = constraint("fn", {
    addType: function(o, _weight) {
      if (o instanceof Obj && !o.hasCtor) {
        o.hasCtor = this.fn;
        var adder = new SpeculativeThis(o, this.fn);
        adder.addType(this.fn);
        o.forAllProps(function(_prop, val, local) {
          if (local) val.propagate(adder);
        });
      }
    }
  });

  var IsAdded = constraint("other, target", {
    addType: function(type, weight) {
      if (type == cx.str)
        this.target.addType(cx.str, weight);
      else if (type == cx.num && this.other.hasType(cx.num))
        this.target.addType(cx.num, weight);
    },
    typeHint: function() { return this.other; }
  });

  var IfObj = exports.IfObj = constraint("target", {
    addType: function(t, weight) {
      if (t instanceof Obj) this.target.addType(t, weight);
    },
    propagatesTo: function() { return this.target; }
  });

  var SpeculativeThis = constraint("obj, ctor", {
    addType: function(tp) {
      if (tp instanceof Fn && tp.self && tp.self.isEmpty())
        tp.self.addType(getInstance(this.obj, this.ctor), WG_SPECULATIVE_THIS);
    }
  });

  var Muffle = constraint("inner, weight", {
    addType: function(tp, weight) {
      this.inner.addType(tp, Math.min(weight, this.weight));
    },
    propagatesTo: function() { return this.inner.propagatesTo(); },
    typeHint: function() { return this.inner.typeHint(); },
    propHint: function() { return this.inner.propHint(); }
  });

  // TYPE OBJECTS

  var Type = exports.Type = function() {};
  Type.prototype = extend(ANull, {
    propagate: function(c, w) { c.addType(this, w); },
    hasType: function(other) { return other == this; },
    isEmpty: function() { return false; },
    typeHint: function() { return this; },
    getType: function() { return this; }
  });

  var Prim = exports.Prim = function(proto, name) { this.name = name; this.proto = proto; };
  Prim.prototype = extend(Type.prototype, {
    toString: function() { return this.name; },
    getProp: function(prop) {return this.proto.hasProp(prop) || ANull;},
    gatherProperties: function(f, depth) {
      if (this.proto) this.proto.gatherProperties(f, depth);
    }
  });

  var Obj = exports.Obj = function(proto, name) {
    if (!this.props) this.props = Object.create(null);
    this.proto = proto === true ? cx.protos.Object : proto;
    if (proto && !name && proto.name && !(this instanceof Fn)) {
      var match = /^(.*)\.prototype$/.exec(this.proto.name);
      if (match) name = match[1];
    }
    this.name = name;
    this.maybeProps = null;
    this.origin = cx.curOrigin;
  };
  Obj.prototype = extend(Type.prototype, {
    toString: function(maxDepth) {
      if (!maxDepth && this.name) return this.name;
      var props = [], etc = false;
      for (var prop in this.props) if (prop != "<i>") {
        if (props.length > 5) { etc = true; break; }
        if (maxDepth)
          props.push(prop + ": " + toString(this.props[prop].getType(), maxDepth - 1));
        else
          props.push(prop);
      }
      props.sort();
      if (etc) props.push("...");
      return "{" + props.join(", ") + "}";
    },
    hasProp: function(prop, searchProto) {
      var found = this.props[prop];
      if (searchProto !== false)
        for (var p = this.proto; p && !found; p = p.proto) found = p.props[prop];
      return found;
    },
    defProp: function(prop, originNode) {
      var found = this.hasProp(prop, false);
      if (found) {
        if (originNode && !found.originNode) found.originNode = originNode;
        return found;
      }
      if (prop == "__proto__" || prop == "✖") return ANull;

      var av = this.maybeProps && this.maybeProps[prop];
      if (av) {
        delete this.maybeProps[prop];
        this.maybeUnregProtoPropHandler();
      } else {
        av = new AVal;
      }

      this.props[prop] = av;
      av.originNode = originNode;
      av.origin = cx.curOrigin;
      this.broadcastProp(prop, av, true);
      return av;
    },
    getProp: function(prop) {
      var found = this.hasProp(prop, true) || (this.maybeProps && this.maybeProps[prop]);
      if (found) return found;
      if (prop == "__proto__" || prop == "✖") return ANull;
      return this.ensureMaybeProps()[prop] = new AVal;
    },
    broadcastProp: function(prop, val, local) {
      if (local) {
        this.signal("addProp", prop, val);
        // If this is a scope, it shouldn't be registered
        if (!(this instanceof Scope)) registerProp(prop, this);
      }

      if (this.onNewProp) for (var i = 0; i < this.onNewProp.length; ++i) {
        var h = this.onNewProp[i];
        h.onProtoProp ? h.onProtoProp(prop, val, local) : h(prop, val, local);
      }
    },
    onProtoProp: function(prop, val, _local) {
      var maybe = this.maybeProps && this.maybeProps[prop];
      if (maybe) {
        delete this.maybeProps[prop];
        this.maybeUnregProtoPropHandler();
        this.proto.getProp(prop).propagate(maybe);
      }
      this.broadcastProp(prop, val, false);
    },
    ensureMaybeProps: function() {
      if (!this.maybeProps) {
        if (this.proto) this.proto.forAllProps(this);
        this.maybeProps = Object.create(null);
      }
      return this.maybeProps;
    },
    removeProp: function(prop) {
      var av = this.props[prop];
      delete this.props[prop];
      this.ensureMaybeProps()[prop] = av;
    },
    forAllProps: function(c) {
      if (!this.onNewProp) {
        this.onNewProp = [];
        if (this.proto) this.proto.forAllProps(this);
      }
      this.onNewProp.push(c);
      for (var o = this; o; o = o.proto) for (var prop in o.props) {
        if (c.onProtoProp)
          c.onProtoProp(prop, o.props[prop], o == this);
        else
          c(prop, o.props[prop], o == this);
      }
    },
    maybeUnregProtoPropHandler: function() {
      if (this.maybeProps) {
        for (var _n in this.maybeProps) return;
        this.maybeProps = null;
      }
      if (!this.proto || this.onNewProp && this.onNewProp.length) return;
      this.proto.unregPropHandler(this);
    },
    unregPropHandler: function(handler) {
      for (var i = 0; i < this.onNewProp.length; ++i)
        if (this.onNewProp[i] == handler) { this.onNewProp.splice(i, 1); break; }
      this.maybeUnregProtoPropHandler();
    },
    gatherProperties: function(f, depth) {
      for (var prop in this.props) if (prop != "<i>")
        f(prop, this, depth);
      if (this.proto) this.proto.gatherProperties(f, depth + 1);
    }
  });

  var Fn = exports.Fn = function(name, self, args, argNames, retval) {
    Obj.call(this, cx.protos.Function, name);
    this.self = self;
    this.args = args;
    this.argNames = argNames;
    this.retval = retval;
  };
  Fn.prototype = extend(Obj.prototype, {
    toString: function(maxDepth) {
      if (maxDepth) maxDepth--;
      var str = "fn(";
      for (var i = 0; i < this.args.length; ++i) {
        if (i) str += ", ";
        var name = this.argNames[i];
        if (name && name != "?") str += name + ": ";
        str += toString(this.args[i].getType(), maxDepth, this);
      }
      str += ")";
      if (!this.retval.isEmpty())
        str += " -> " + toString(this.retval.getType(), maxDepth, this);
      return str;
    },
    getProp: function(prop) {
      if (prop == "prototype") {
        var known = this.hasProp(prop, false);
        if (!known) {
          known = this.defProp(prop);
          var proto = new Obj(true, this.name && this.name + ".prototype");
          proto.origin = this.origin;
          known.addType(proto, WG_MADEUP_PROTO);
        }
        return known;
      }
      return Obj.prototype.getProp.call(this, prop);
    },
    defProp: function(prop, originNode) {
      if (prop == "prototype") {
        var found = this.hasProp(prop, false);
        if (found) return found;
        found = Obj.prototype.defProp.call(this, prop, originNode);
        found.origin = this.origin;
        found.propagate(new FnPrototype(this));
        return found;
      }
      return Obj.prototype.defProp.call(this, prop, originNode);
    },
    getFunctionType: function() { return this; }
  });

  var Arr = exports.Arr = function(contentType) {
    Obj.call(this, cx.protos.Array);
    var content = this.defProp("<i>");
    if (contentType) contentType.propagate(content);
  };
  Arr.prototype = extend(Obj.prototype, {
    toString: function(maxDepth) {
      return "[" + toString(this.getProp("<i>").getType(), maxDepth, this) + "]";
    }
  });

  // THE PROPERTY REGISTRY

  function registerProp(prop, obj) {
    var data = cx.props[prop] || (cx.props[prop] = []);
    data.push(obj);
  }

  function objsWithProp(prop) {
    return cx.props[prop];
  }

  // INFERENCE CONTEXT

  exports.Context = function(defs, parent) {
    this.parent = parent;
    this.props = Object.create(null);
    this.protos = Object.create(null);
    this.origins = [];
    this.curOrigin = "ecma5";
    this.paths = Object.create(null);
    this.definitions = Object.create(null);
    this.purgeGen = 0;
    this.workList = null;
    this.disabledComputing = null;

    exports.withContext(this, function() {
      cx.protos.Object = new Obj(null, "Object.prototype");
      cx.topScope = new Scope();
      cx.topScope.name = "<top>";
      cx.protos.Array = new Obj(true, "Array.prototype");
      cx.protos.Function = new Obj(true, "Function.prototype");
      cx.protos.RegExp = new Obj(true, "RegExp.prototype");
      cx.protos.String = new Obj(true, "String.prototype");
      cx.protos.Number = new Obj(true, "Number.prototype");
      cx.protos.Boolean = new Obj(true, "Boolean.prototype");
      cx.str = new Prim(cx.protos.String, "string");
      cx.bool = new Prim(cx.protos.Boolean, "bool");
      cx.num = new Prim(cx.protos.Number, "number");
      cx.curOrigin = null;

      if (defs) for (var i = 0; i < defs.length; ++i)
        def.load(defs[i]);
    });
  };

  var cx = null;
  exports.cx = function() { return cx; };

  exports.withContext = function(context, f) {
    var old = cx;
    cx = context;
    try { return f(); }
    finally { cx = old; }
  };

  exports.addOrigin = function(origin) {
    if (cx.origins.indexOf(origin) < 0) cx.origins.push(origin);
  };

  var baseMaxWorkDepth = 20, reduceMaxWorkDepth = .0001;
  function withWorklist(f) {
    if (cx.workList) return f(cx.workList);

    var list = [], depth = 0;
    var add = cx.workList = function(type, target, weight) {
      if (depth < baseMaxWorkDepth - reduceMaxWorkDepth * list.length)
        list.push(type, target, weight, depth);
    };
    try {
      var ret = f(add);
      for (var i = 0; i < list.length; i += 4) {
        depth = list[i + 3] + 1;
        list[i + 1].addType(list[i], list[i + 2]);
      }
      return ret;
    } finally {
      cx.workList = null;
    }
  }

  // SCOPES

  var Scope = exports.Scope = function(prev) {
    Obj.call(this, prev || true);
    this.prev = prev;
  };
  Scope.prototype = extend(Obj.prototype, {
    defVar: function(name, originNode) {
      for (var s = this; ; s = s.proto) {
        var found = s.props[name];
        if (found) return found;
        if (!s.prev) return s.defProp(name, originNode);
      }
    }
  });

  // RETVAL COMPUTATION HEURISTICS

  function maybeInstantiate(scope, score) {
    if (scope.fnType)
      scope.fnType.instantiateScore = (scope.fnType.instantiateScore || 0) + score;
  }

  var NotSmaller = {};
  function nodeSmallerThan(node, n) {
    try {
      walk.simple(node, {Expression: function() { if (--n <= 0) throw NotSmaller; }});
      return true;
    } catch(e) {
      if (e == NotSmaller) return false;
      throw e;
    }
  }

  function maybeTagAsInstantiated(node, scope) {
    var score = scope.fnType.instantiateScore;
    if (!cx.disabledComputing && score && scope.fnType.args.length && nodeSmallerThan(node, score * 5)) {
      maybeInstantiate(scope.prev, score / 2);
      setFunctionInstantiated(node, scope);
      return true;
    } else {
      scope.fnType.instantiateScore = null;
    }
  }

  function setFunctionInstantiated(node, scope) {
    var fn = scope.fnType;
    // Disconnect the arg avals, so that we can add info to them without side effects
    for (var i = 0; i < fn.args.length; ++i) fn.args[i] = new AVal;
    fn.self = new AVal;
    fn.computeRet = function(self, args) {
      // Prevent recursion
      return withDisabledComputing(fn, function() {
        var oldOrigin = cx.curOrigin;
        cx.curOrigin = fn.origin;
        var scopeCopy = new Scope(scope.prev);
        for (var v in scope.props) {
          var local = scopeCopy.defProp(v);
          for (var i = 0; i < args.length; ++i) if (fn.argNames[i] == v && i < args.length)
            args[i].propagate(local);
        }
        var argNames = fn.argNames.length != args.length ? fn.argNames.slice(0, args.length) : fn.argNames;
        while (argNames.length < args.length) argNames.push("?");
        scopeCopy.fnType = new Fn(fn.name, self, args, argNames, ANull);
        if (fn.arguments) {
          var argset = scopeCopy.fnType.arguments = new AVal;
          scopeCopy.defProp("arguments").addType(new Arr(argset));
          for (var i = 0; i < args.length; ++i) args[i].propagate(argset);
        }
        node.body.scope = scopeCopy;
        walk.recursive(node.body, scopeCopy, null, scopeGatherer);
        walk.recursive(node.body, scopeCopy, null, inferWrapper);
        cx.curOrigin = oldOrigin;
        return scopeCopy.fnType.retval;
      });
    };
  }

  function maybeTagAsGeneric(scope) {
    var fn = scope.fnType, target = fn.retval;
    if (target == ANull) return;
    var targetInner, asArray;
    if (!target.isEmpty() && (targetInner = target.getType()) instanceof Arr)
      target = asArray = targetInner.getProp("<i>");

    function explore(aval, path, depth) {
      if (depth > 3 || !aval.forward) return;
      for (var i = 0; i < aval.forward.length; ++i) {
        var prop = aval.forward[i].propagatesTo();
        if (!prop) continue;
        var newPath = path, dest;
        if (prop instanceof AVal) {
          dest = prop;
        } else if (prop.target instanceof AVal) {
          newPath += prop.pathExt;
          dest = prop.target;
        } else continue;
        if (dest == target) return newPath;
        var found = explore(dest, newPath, depth + 1);
        if (found) return found;
      }
    }

    var foundPath = explore(fn.self, "!this", 0);
    for (var i = 0; !foundPath && i < fn.args.length; ++i)
      foundPath = explore(fn.args[i], "!" + i, 0);

    if (foundPath) {
      if (asArray) foundPath = "[" + foundPath + "]";
      var p = new def.TypeParser(foundPath);
      fn.computeRet = p.parseRetType();
      fn.computeRetSource = foundPath;
      return true;
    }
  }

  // SCOPE GATHERING PASS

  function addVar(scope, nameNode) {
    var val = scope.defProp(nameNode.name, nameNode);
    if (val.maybePurge) val.maybePurge = false;
    return val;
  }

  var scopeGatherer = walk.make({
    Function: function(node, scope, c) {
      var inner = node.body.scope = new Scope(scope);
      inner.node = node;
      var argVals = [], argNames = [];
      for (var i = 0; i < node.params.length; ++i) {
        var param = node.params[i];
        argNames.push(param.name);
        argVals.push(addVar(inner, param));
      }
      inner.fnType = new Fn(node.id && node.id.name, new AVal, argVals, argNames, ANull);
      inner.fnType.originNode = node;
      if (node.id) {
        var decl = node.type == "FunctionDeclaration";
        addVar(decl ? scope : inner, node.id);
      }
      c(node.body, inner, "ScopeBody");
    },
    TryStatement: function(node, scope, c) {
      c(node.block, scope, "Statement");
      if (node.handler) {
        var v = addVar(scope, node.handler.param);
        c(node.handler.body, scope, "ScopeBody");
        var e5 = cx.definitions.ecma5;
        if (e5 && v.isEmpty()) getInstance(e5["Error.prototype"]).propagate(v, WG_CATCH_ERROR);
      }
      if (node.finalizer) c(node.finalizer, scope, "Statement");
    },
    VariableDeclaration: function(node, scope, c) {
      for (var i = 0; i < node.declarations.length; ++i) {
        var decl = node.declarations[i];
        addVar(scope, decl.id);
        if (decl.init) c(decl.init, scope, "Expression");
      }
    }
  });

  // CONSTRAINT GATHERING PASS

  function propName(node, scope, c) {
    var prop = node.property;
    if (!node.computed) return prop.name;
    if (prop.type == "Literal" && typeof prop.value == "string") return prop.value;
    if (c) infer(prop, scope, c, ANull);
    return "<i>";
  }

  function unopResultType(op) {
    switch (op) {
    case "+": case "-": case "~": return cx.num;
    case "!": return cx.bool;
    case "typeof": return cx.str;
    case "void": case "delete": return ANull;
    }
  }
  function binopIsBoolean(op) {
    switch (op) {
    case "==": case "!=": case "===": case "!==": case "<": case ">": case ">=": case "<=":
    case "in": case "instanceof": return true;
    }
  }
  function literalType(val) {
    switch (typeof val) {
    case "boolean": return cx.bool;
    case "number": return cx.num;
    case "string": return cx.str;
    case "object":
    case "function":
      if (!val) return ANull;
      return getInstance(cx.protos.RegExp);
    }
  }

  function ret(f) {
    return function(node, scope, c, out, name) {
      var r = f(node, scope, c, name);
      if (out) r.propagate(out);
      return r;
    };
  }
  function fill(f) {
    return function(node, scope, c, out, name) {
      if (!out) out = new AVal;
      f(node, scope, c, out, name);
      return out;
    };
  }

  var inferExprVisitor = {
    ArrayExpression: ret(function(node, scope, c) {
      var eltval = new AVal;
      for (var i = 0; i < node.elements.length; ++i) {
        var elt = node.elements[i];
        if (elt) infer(elt, scope, c, eltval);
      }
      return new Arr(eltval);
    }),
    ObjectExpression: ret(function(node, scope, c, name) {
      var obj = node.objType = new Obj(true, name);
      obj.originNode = node;

      for (var i = 0; i < node.properties.length; ++i) {
        var prop = node.properties[i], key = prop.key, name;
        if (key.type == "Identifier") {
          name = key.name;
        } else if (typeof key.value == "string") {
          name = key.value;
        } else {
          infer(prop.value, scope, c, ANull);
          continue;
        }
        var val = obj.defProp(name, key);
        val.initializer = true;
        infer(prop.value, scope, c, val, name);
      }
      return obj;
    }),
    FunctionExpression: ret(function(node, scope, c, name) {
      var inner = node.body.scope, fn = inner.fnType;
      if (name && !fn.name) fn.name = name;
      c(node.body, scope, "ScopeBody");
      maybeTagAsInstantiated(node, inner) || maybeTagAsGeneric(inner);
      if (node.id) inner.getProp(node.id.name).addType(fn);
      return fn;
    }),
    SequenceExpression: ret(function(node, scope, c) {
      for (var i = 0, l = node.expressions.length - 1; i < l; ++i)
        infer(node.expressions[i], scope, c, ANull);
      return infer(node.expressions[l], scope, c);
    }),
    UnaryExpression: ret(function(node, scope, c) {
      infer(node.argument, scope, c, ANull);
      return unopResultType(node.operator);
    }),
    UpdateExpression: ret(function(node, scope, c) {
      infer(node.argument, scope, c, ANull);
      return cx.num;
    }),
    BinaryExpression: ret(function(node, scope, c) {
      if (node.operator == "+") {
        var lhs = infer(node.left, scope, c);
        var rhs = infer(node.right, scope, c);
        if (lhs.hasType(cx.str) || rhs.hasType(cx.str)) return cx.str;
        if (lhs.hasType(cx.num) && rhs.hasType(cx.num)) return cx.num;
        var result = new AVal;
        lhs.propagate(new IsAdded(rhs, result));
        rhs.propagate(new IsAdded(lhs, result));
        return result;
      } else {
        infer(node.left, scope, c, ANull);
        infer(node.right, scope, c, ANull);
        return binopIsBoolean(node.operator) ? cx.bool : cx.num;
      }
    }),
    AssignmentExpression: ret(function(node, scope, c) {
      var rhs, name, pName;
      if (node.left.type == "MemberExpression") {
        pName = propName(node.left, scope, c);
        if (node.left.object.type == "Identifier")
          name = node.left.object.name + "." + pName;
      } else {
        name = node.left.name;
      }

      if (node.operator != "=" && node.operator != "+=") {
        infer(node.right, scope, c, ANull);
        rhs = cx.num;
      } else {
        rhs = infer(node.right, scope, c, null, name);
      }

      if (node.left.type == "MemberExpression") {
        var obj = infer(node.left.object, scope, c);
        if (pName == "prototype") maybeInstantiate(scope, 20);
        if (pName == "<i>") {
          // This is a hack to recognize for/in loops that copy
          // properties, and do the copying ourselves, insofar as we
          // manage, because such loops tend to be relevant for type
          // information.
          var v = node.left.property.name, local = scope.props[v], over = local && local.iteratesOver;
          if (over) {
            maybeInstantiate(scope, 20);
            var fromRight = node.right.type == "MemberExpression" && node.right.computed && node.right.property.name == v;
            over.forAllProps(function(prop, val, local) {
              if (local && prop != "prototype" && prop != "<i>")
                obj.propagate(new PropHasSubset(prop, fromRight ? val : ANull));
            });
            return rhs;
          }
        }
        obj.propagate(new PropHasSubset(pName, rhs, node.left.property));
      } else { // Identifier
        var v = scope.defVar(node.left.name, node.left);
        if (v.maybePurge) v.maybePurge = false;
        rhs.propagate(v);
      }
      return rhs;
    }),
    LogicalExpression: fill(function(node, scope, c, out) {
      infer(node.left, scope, c, out);
      infer(node.right, scope, c, out);
    }),
    ConditionalExpression: fill(function(node, scope, c, out) {
      infer(node.test, scope, c, ANull);
      infer(node.consequent, scope, c, out);
      infer(node.alternate, scope, c, out);
    }),
    NewExpression: fill(function(node, scope, c, out, name) {
      if (node.callee.type == "Identifier" && node.callee.name in scope.props)
        maybeInstantiate(scope, 20);

      for (var i = 0, args = []; i < node.arguments.length; ++i)
        args.push(infer(node.arguments[i], scope, c));
      var callee = infer(node.callee, scope, c);
      var self = new AVal;
      callee.propagate(new IsCtor(self, name && /\.prototype$/.test(name)));
      self.propagate(out, WG_NEW_INSTANCE);
      callee.propagate(new IsCallee(self, args, node.arguments, new IfObj(out)));
    }),
    CallExpression: fill(function(node, scope, c, out) {
      for (var i = 0, args = []; i < node.arguments.length; ++i)
        args.push(infer(node.arguments[i], scope, c));
      if (node.callee.type == "MemberExpression") {
        var self = infer(node.callee.object, scope, c);
        var pName = propName(node.callee, scope, c);
        if ((pName == "call" || pName == "apply") &&
            scope.fnType && scope.fnType.args.indexOf(self) > -1)
          maybeInstantiate(scope, 30);
        self.propagate(new HasMethodCall(pName, args, node.arguments, out));
      } else {
        var callee = infer(node.callee, scope, c);
        if (scope.fnType && scope.fnType.args.indexOf(callee) > -1)
          maybeInstantiate(scope, 30);
        var knownFn = callee.getFunctionType();
        if (knownFn && knownFn.instantiateScore && scope.fnType)
          maybeInstantiate(scope, knownFn.instantiateScore / 5);
        callee.propagate(new IsCallee(cx.topScope, args, node.arguments, out));
      }
    }),
    MemberExpression: fill(function(node, scope, c, out) {
      var name = propName(node, scope);
      var obj = infer(node.object, scope, c);
      var prop = obj.getProp(name);
      if (name == "<i>") {
        var propType = infer(node.property, scope, c);
        if (!propType.hasType(cx.num))
          return prop.propagate(out, WG_MULTI_MEMBER);
      }
      prop.propagate(out);
    }),
    Identifier: ret(function(node, scope) {
      if (node.name == "arguments" && scope.fnType && !(node.name in scope.props))
        scope.defProp(node.name, scope.fnType.originNode)
          .addType(new Arr(scope.fnType.arguments = new AVal));
      return scope.getProp(node.name);
    }),
    ThisExpression: ret(function(_node, scope) {
      return scope.fnType ? scope.fnType.self : cx.topScope;
    }),
    Literal: ret(function(node) {
      return literalType(node.value);
    })
  };

  function infer(node, scope, c, out, name) {
    return inferExprVisitor[node.type](node, scope, c, out, name);
  }

  var inferWrapper = walk.make({
    Expression: function(node, scope, c) {
      infer(node, scope, c, ANull);
    },

    FunctionDeclaration: function(node, scope, c) {
      var inner = node.body.scope, fn = inner.fnType;
      c(node.body, scope, "ScopeBody");
      maybeTagAsInstantiated(node, inner) || maybeTagAsGeneric(inner);
      var prop = scope.getProp(node.id.name);
      prop.addType(fn);
    },

    VariableDeclaration: function(node, scope, c) {
      for (var i = 0; i < node.declarations.length; ++i) {
        var decl = node.declarations[i], prop = scope.getProp(decl.id.name);
        if (decl.init)
          infer(decl.init, scope, c, prop, decl.id.name);
      }
    },

    ReturnStatement: function(node, scope, c) {
      if (node.argument && scope.fnType) {
        if (scope.fnType.retval == ANull) scope.fnType.retval = new AVal;
        infer(node.argument, scope, c, scope.fnType.retval);
      }
    },

    ForInStatement: function(node, scope, c) {
      var source = infer(node.right, scope, c);
      if ((node.right.type == "Identifier" && node.right.name in scope.props) ||
          (node.right.type == "MemberExpression" && node.right.property.name == "prototype")) {
        maybeInstantiate(scope, 5);
        var varName;
        if (node.left.type == "Identifier") {
          varName = node.left.name;
        } else if (node.left.type == "VariableDeclaration") {
          varName = node.left.declarations[0].id.name;
        }
        if (varName && varName in scope.props)
          scope.getProp(varName).iteratesOver = source;
      }
      c(node.body, scope, "Statement");
    },

    ScopeBody: function(node, scope, c) { c(node, node.scope || scope); }
  });

  // PARSING

  function runPasses(passes, pass) {
    var arr = passes && passes[pass];
    var args = Array.prototype.slice.call(arguments, 2);
    if (arr) for (var i = 0; i < arr.length; ++i) arr[i].apply(null, args);
  }

  var parse = exports.parse = function(text, passes, options) {
    var ast;
    try { ast = acorn.parse(text, options); }
    catch(e) { ast = acorn_loose.parse_dammit(text, options); }
    runPasses(passes, "postParse", ast, text);
    return ast;
  };

  // ANALYSIS INTERFACE

  exports.analyze = function(ast, name, scope, passes) {
    if (typeof ast == "string") ast = parse(ast);

    if (!name) name = "file#" + cx.origins.length;
    exports.addOrigin(cx.curOrigin = name);

    if (!scope) scope = cx.topScope;
    walk.recursive(ast, scope, null, scopeGatherer);
    runPasses(passes, "preInfer", ast, scope);
    walk.recursive(ast, scope, null, inferWrapper);
    runPasses(passes, "postInfer", ast, scope);

    cx.curOrigin = null;
  };

  // PURGING

  exports.purgeTypes = function(origins, start, end) {
    var test = makePredicate(origins, start, end);
    ++cx.purgeGen;
    cx.topScope.purge(test);
    for (var prop in cx.props) {
      var list = cx.props[prop];
      for (var i = 0; i < list.length; ++i) {
        var obj = list[i], av = obj.props[prop];
        if (!av || test(av, av.originNode)) list.splice(i--, 1);
      }
      if (!list.length) delete cx.props[prop];
    }
  };

  function makePredicate(origins, start, end) {
    var arr = Array.isArray(origins);
    if (arr && origins.length == 1) { origins = origins[0]; arr = false; }
    if (arr) {
      if (end == null) return function(n) { return origins.indexOf(n.origin) > -1; };
      return function(n, pos) { return pos && pos.start >= start && pos.end <= end && origins.indexOf(n.origin) > -1; };
    } else {
      if (end == null) return function(n) { return n.origin == origins; };
      return function(n, pos) { return pos && pos.start >= start && pos.end <= end && n.origin == origins; };
    }
  }

  AVal.prototype.purge = function(test) {
    if (this.purgeGen == cx.purgeGen) return;
    this.purgeGen = cx.purgeGen;
    for (var i = 0; i < this.types.length; ++i) {
      var type = this.types[i];
      if (test(type, type.originNode))
        this.types.splice(i--, 1);
      else
        type.purge(test);
    }
    if (this.forward) for (var i = 0; i < this.forward.length; ++i) {
      var f = this.forward[i];
      if (test(f)) {
        this.forward.splice(i--, 1);
        if (this.props) this.props = null;
      } else if (f.purge) {
        f.purge(test);
      }
    }
  };
  ANull.purge = function() {};
  Obj.prototype.purge = function(test) {
    if (this.purgeGen == cx.purgeGen) return true;
    this.purgeGen = cx.purgeGen;
    for (var p in this.props) {
      var av = this.props[p];
      if (test(av, av.originNode))
        this.removeProp(p);
      av.purge(test);
    }
  };
  Fn.prototype.purge = function(test) {
    if (Obj.prototype.purge.call(this, test)) return;
    this.self.purge(test);
    this.retval.purge(test);
    for (var i = 0; i < this.args.length; ++i) this.args[i].purge(test);
  };

  exports.markVariablesDefinedBy = function(scope, origins, start, end) {
    var test = makePredicate(origins, start, end);
    for (var s = scope; s; s = s.prev) for (var p in s.props) {
      var prop = s.props[p];
      if (test(prop, prop.originNode)) {
        prop.maybePurge = true;
        if (start == null && prop.originNode) prop.originNode = null;
      }
    }
  };

  exports.purgeMarkedVariables = function(scope) {
    for (var s = scope; s; s = s.prev) for (var p in s.props)
      if (s.props[p].maybePurge) delete s.props[p];
  };

  // EXPRESSION TYPE DETERMINATION

  function findByPropertyName(name) {
    guessing = true;
    var found = objsWithProp(name);
    if (found) for (var i = 0; i < found.length; ++i) {
      var val = found[i].getProp(name);
      if (!val.isEmpty()) return val;
    }
    return ANull;
  }

  var typeFinder = {
    ArrayExpression: function(node, scope) {
      var eltval = new AVal;
      for (var i = 0; i < node.elements.length; ++i) {
        var elt = node.elements[i];
        if (elt) findType(elt, scope).propagate(eltval);
      }
      return new Arr(eltval);
    },
    ObjectExpression: function(node) {
      return node.objType;
    },
    FunctionExpression: function(node) {
      return node.body.scope.fnType;
    },
    SequenceExpression: function(node, scope) {
      return findType(node.expressions[node.expressions.length-1], scope);
    },
    UnaryExpression: function(node) {
      return unopResultType(node.operator);
    },
    UpdateExpression: function() {
      return cx.num;
    },
    BinaryExpression: function(node, scope) {
      if (binopIsBoolean(node.operator)) return cx.bool;
      if (node.operator == "+") {
        var lhs = findType(node.left, scope);
        var rhs = findType(node.right, scope);
        if (lhs.hasType(cx.str) || rhs.hasType(cx.str)) return cx.str;
      }
      return cx.num;
    },
    AssignmentExpression: function(node, scope) {
      return findType(node.right, scope);
    },
    LogicalExpression: function(node, scope) {
      var lhs = findType(node.left, scope);
      return lhs.isEmpty() ? findType(node.right, scope) : lhs;
    },
    ConditionalExpression: function(node, scope) {
      var lhs = findType(node.consequent, scope);
      return lhs.isEmpty() ? findType(node.alternate, scope) : lhs;
    },
    NewExpression: function(node, scope) {
      var f = findType(node.callee, scope).getFunctionType();
      var proto = f && f.getProp("prototype").getType();
      if (!proto) return ANull;
      return getInstance(proto, f);
    },
    CallExpression: function(node, scope) {
      var f = findType(node.callee, scope).getFunctionType();
      if (!f) return ANull;
      if (f.computeRet) {
        for (var i = 0, args = []; i < node.arguments.length; ++i)
          args.push(findType(node.arguments[i], scope));
        var self = ANull;
        if (node.callee.type == "MemberExpression")
          self = findType(node.callee.object, scope);
        return f.computeRet(self, args, node.arguments);
      } else {
        return f.retval;
      }
    },
    MemberExpression: function(node, scope) {
      var propN = propName(node, scope), obj = findType(node.object, scope).getType();
      if (obj) return obj.getProp(propN);
      if (propN == "<i>") return ANull;
      return findByPropertyName(propN);
    },
    Identifier: function(node, scope) {
      return scope.hasProp(node.name) || ANull;
    },
    ThisExpression: function(_node, scope) {
      return scope.fnType ? scope.fnType.self : cx.topScope;
    },
    Literal: function(node) {
      return literalType(node.value);
    }
  };

  function findType(node, scope) {
    var found = typeFinder[node.type](node, scope);
    return found;
  }

  var searchVisitor = exports.searchVisitor = walk.make({
    Function: function(node, _st, c) {
      var scope = node.body.scope;
      if (node.id) c(node.id, scope);
      for (var i = 0; i < node.params.length; ++i)
        c(node.params[i], scope);
      c(node.body, scope, "ScopeBody");
    },
    TryStatement: function(node, st, c) {
      if (node.handler)
        c(node.handler.param, st);
      walk.base.TryStatement(node, st, c);
    },
    VariableDeclaration: function(node, st, c) {
      for (var i = 0; i < node.declarations.length; ++i) {
        var decl = node.declarations[i];
        c(decl.id, st);
        if (decl.init) c(decl.init, st, "Expression");
      }
    }
  });
  exports.fullVisitor = walk.make({
    MemberExpression: function(node, st, c) {
      c(node.object, st, "Expression");
      c(node.property, st, node.computed ? "Expression" : null);
    },
    ObjectExpression: function(node, st, c) {
      for (var i = 0; i < node.properties.length; ++i) {
        c(node.properties[i].value, st, "Expression");
        c(node.properties[i].key, st);
      }
    }
  }, searchVisitor);

  exports.findExpressionAt = function(ast, start, end, defaultScope, filter) {
    var test = filter || function(_t, node) {return typeFinder.hasOwnProperty(node.type);};
    return walk.findNodeAt(ast, start, end, test, searchVisitor, defaultScope || cx.topScope);
  };

  exports.findExpressionAround = function(ast, start, end, defaultScope, filter) {
    var test = filter || function(_t, node) {
      if (start != null && node.start > start) return false;
      return typeFinder.hasOwnProperty(node.type);
    };
    return walk.findNodeAround(ast, end, test, searchVisitor, defaultScope || cx.topScope);
  };

  exports.expressionType = function(found) {
    return findType(found.node, found.state);
  };

  // Flag used to indicate that some wild guessing was used to produce
  // a type or set of completions.
  var guessing = false;

  exports.resetGuessing = function(val) { guessing = val; };
  exports.didGuess = function() { return guessing; };

  exports.forAllPropertiesOf = function(type, f) {
    type.gatherProperties(f, 0);
  };

  var refFindWalker = walk.make({}, searchVisitor);

  exports.findRefs = function(ast, baseScope, name, refScope, f) {
    refFindWalker.Identifier = function(node, scope) {
      if (node.name != name) return;
      for (var s = scope; s; s = s.prev) {
        if (s == refScope) f(node, scope);
        if (name in s.props) return;
      }
    };
    walk.recursive(ast, baseScope, null, refFindWalker);
  };

  var simpleWalker = walk.make({
    Function: function(node, _st, c) { c(node.body, node.body.scope, "ScopeBody"); }
  });

  exports.findPropRefs = function(ast, scope, objType, propName, f) {
    walk.simple(ast, {
      MemberExpression: function(node, scope) {
        if (node.computed || node.property.name != propName) return;
        if (findType(node.object, scope).getType() == objType) f(node.property);
      },
      ObjectExpression: function(node, scope) {
        if (findType(node, scope).getType() != objType) return;
        for (var i = 0; i < node.properties.length; ++i)
          if (node.properties[i].key.name == propName) f(node.properties[i].key);
      }
    }, simpleWalker, scope);
  };

  // LOCAL-VARIABLE QUERIES

  var scopeAt = exports.scopeAt = function(ast, pos, defaultScope) {
    var found = walk.findNodeAround(ast, pos, function(tp, node) {
      return tp == "ScopeBody" && node.scope;
    });
    if (found) return found.node.scope;
    else return defaultScope || cx.topScope;
  };

  exports.forAllLocalsAt = function(ast, pos, defaultScope, f) {
    var scope = scopeAt(ast, pos, defaultScope);
    scope.gatherProperties(f, 0);
  };

  // INIT DEF MODULE

  // Delayed initialization because of cyclic dependencies.
  def = exports.def = def.init({}, exports);
});
// Parses comments above variable declarations, function declarations,
// and object properties as docstrings and JSDoc-style type
// annotations.

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("../lib/infer"), require("../lib/tern"), require("../lib/comment"),
               require("acorn/util/walk"));
  if (typeof define == "function" && define.amd) // AMD
    return define(["../lib/infer", "../lib/tern", "../lib/comment", "acorn/util/walk"], mod);
  mod(tern, tern, tern.comment, acorn.walk);
})(function(infer, tern, comment, walk) {
  "use strict";

  tern.registerPlugin("doc_comment", function() {
    return {
      passes: {
        "postParse": postParse,
        "postInfer": postInfer
      }
    };
  });

  function postParse(ast, text) {
    function attachComments(node) { comment.ensureCommentsBefore(text, node); }

    walk.simple(ast, {
      VariableDeclaration: attachComments,
      FunctionDeclaration: attachComments,
      AssignmentExpression: function(node) {
        if (node.operator == "=") attachComments(node);
      },
      ObjectExpression: function(node) {
        for (var i = 0; i < node.properties.length; ++i)
          attachComments(node.properties[i].key);
      }
    });
  }

  function postInfer(ast, scope) {
    walk.simple(ast, {
      VariableDeclaration: function(node, scope) {
        if (node.commentsBefore)
          interpretComments(node, node.commentsBefore, scope,
                            scope.getProp(node.declarations[0].id.name));
      },
      FunctionDeclaration: function(node, scope) {
        if (node.commentsBefore)
          interpretComments(node, node.commentsBefore, scope,
                            scope.getProp(node.id.name),
                            node.body.scope.fnType);
      },
      AssignmentExpression: function(node, scope) {
        if (node.commentsBefore)
          interpretComments(node, node.commentsBefore, scope,
                            infer.expressionType({node: node.left, state: scope}));
      },
      ObjectExpression: function(node, scope) {
        for (var i = 0; i < node.properties.length; ++i) {
          var prop = node.properties[i], key = prop.key;
          if (key.commentsBefore)
            interpretComments(prop, key.commentsBefore, scope,
                              node.objType.getProp(key.name));
        }
      }
    }, infer.searchVisitor, scope);
  }

  // COMMENT INTERPRETATION

  function interpretComments(node, comments, scope, aval, type) {
    jsdocInterpretComments(node, scope, aval, comments);

    if (!type && aval instanceof infer.AVal && aval.types.length) {
      type = aval.types[aval.types.length - 1];
      if (!(type instanceof infer.Obj) || type.origin != infer.cx().curOrigin || type.doc)
        type = null;
    }

    var first = comments[0], dot = first.search(/\.\s/);
    if (dot > 5) first = first.slice(0, dot + 1);
    first = first.trim().replace(/\s*\n\s*\*\s*|\s{1,}/g, " ");
    if (aval instanceof infer.AVal) aval.doc = first;
    if (type) type.doc = first;
  }

  // Parses a subset of JSDoc-style comments in order to include the
  // explicitly defined types in the analysis.

  function skipSpace(str, pos) {
    while (/\s/.test(str.charAt(pos))) ++pos;
    return pos;
  }

  function parseLabelList(scope, str, pos, close) {
    var labels = [], types = [];
    for (var first = true; ; first = false) {
      pos = skipSpace(str, pos);
      if (first && str.charAt(pos) == close) break;
      var colon = str.indexOf(":", pos);
      if (colon < 0) return null;
      var label = str.slice(pos, colon);
      if (!/^[\w$]+$/.test(label)) return null;
      labels.push(label);
      pos = colon + 1;
      var type = parseType(scope, str, pos);
      if (!type) return null;
      pos = type.end;
      types.push(type.type);
      pos = skipSpace(str, pos);
      var next = str.charAt(pos);
      ++pos;
      if (next == close) break;
      if (next != ",") return null;
    }
    return {labels: labels, types: types, end: pos};
  }

  function parseType(scope, str, pos) {
    pos = skipSpace(str, pos);
    var type;

    if (str.indexOf("function(", pos) == pos) {
      var args = parseLabelList(scope, str, pos + 9, ")"), ret = infer.ANull;
      if (!args) return null;
      pos = skipSpace(str, args.end);
      if (str.charAt(pos) == ":") {
        ++pos;
        var retType = parseType(scope, str, pos + 1);
        if (!retType) return null;
        pos = retType.end;
        ret = retType.type;
      }
      type = new infer.Fn(null, infer.ANull, args.types, args.labels, ret);
    } else if (str.charAt(pos) == "[") {
      var inner = parseType(scope, str, pos + 1);
      if (!inner) return null;
      pos = skipSpace(str, inner.end);
      if (str.charAt(pos) != "]") return null;
      ++pos;
      type = new infer.Arr(inner.type);
    } else if (str.charAt(pos) == "{") {
      var fields = parseLabelList(scope, str, pos + 1, "}");
      if (!fields) return null;
      type = new infer.Obj(true);
      for (var i = 0; i < fields.types.length; ++i) {
        var field = type.defProp(fields.labels[i]);
        field.initializer = true;
        fields.types[i].propagate(field);
      }
      pos = fields.end;
    } else {
      var start = pos;
      while (/[\w$]/.test(str.charAt(pos))) ++pos;
      if (start == pos) return null;
      var word = str.slice(start, pos);
      if (/^(number|integer)$/i.test(word)) type = infer.cx().num;
      else if (/^bool(ean)?$/i.test(word)) type = infer.cx().bool;
      else if (/^string$/i.test(word)) type = infer.cx().str;
      else if (/^array$/i.test(word)) {
        var inner = null;
        if (str.charAt(pos) == "." && str.charAt(pos + 1) == "<") {
          var inAngles = parseType(scope, str, pos + 2);
          if (!inAngles) return null;
          pos = skipSpace(str, inAngles.end);
          if (str.charAt(pos++) != ">") return null;
          inner = inAngles.type;
        }
        type = new infer.Arr(inner);
      } else if (/^object$/i.test(word)) {
        type = new infer.Obj(true);
        if (str.charAt(pos) == "." && str.charAt(pos + 1) == "<") {
          var key = parseType(scope, str, pos + 2);
          if (!key) return null;
          pos = skipSpace(str, key.end);
          if (str.charAt(pos++) != ",") return null;
          var val = parseType(scope, str, pos);
          if (!val) return null;
          pos = skipSpace(str, val.end);
          if (str.charAt(pos++) != ">") return null;
          val.type.propagate(type.defProp("<i>"));
        }
      } else {
        var found = scope.hasProp(word);
        if (found) found = found.getType();
        if (!found) {
          type = infer.ANull;
        } else if (found instanceof infer.Fn && /^[A-Z]/.test(word)) {
          var proto = found.getProp("prototype").getType();
          if (proto instanceof infer.Obj) type = infer.getInstance(proto);
          else type = found;
        } else {
          type = found;
        }
      }
    }

    var isOptional = false;
    if (str.charAt(pos) == "=") {
      ++pos;
      isOptional = true;
    }
    return {type: type, end: pos, isOptional: isOptional};
  }

  function parseTypeOuter(scope, str, pos) {
    pos = skipSpace(str, pos || 0);
    if (str.charAt(pos) != "{") return null;
    var result = parseType(scope, str, pos + 1);
    if (!result || str.charAt(result.end) != "}") return null;
    ++result.end;
    return result;
  }

  function jsdocInterpretComments(node, scope, aval, comments) {
    var type, args, ret, foundOne;

    for (var i = 0; i < comments.length; ++i) {
      var comment = comments[i];
      var decl = /(?:\n|$|\*)\s*@(type|param|arg(?:ument)?|returns?)\s+(.*)/g, m;
      while (m = decl.exec(comment)) {
        var parsed = parseTypeOuter(scope, m[2]);
        if (!parsed) continue;
        foundOne = true;

        switch(m[1]) {
        case "returns": case "return":
          ret = parsed.type; break;
        case "type":
          type = parsed.type; break;
        case "param": case "arg": case "argument":
          var name = m[2].slice(parsed.end).match(/^\s*([\w$]+)/);
          if (!name) continue;
          var argname = name[1] + (parsed.isOptional ? "?" : "");
          (args || (args = Object.create(null)))[argname] = parsed.type;
          break;
        }
      }
    }

    if (foundOne) applyType(type, args, ret, node, aval);
  };

  function applyType(type, args, ret, node, aval) {
    var fn;
    if (node.type == "VariableDeclaration") {
      var decl = node.declarations[0];
      if (decl.init && decl.init.type == "FunctionExpression") fn = decl.init.body.scope.fnType;
    } else if (node.type == "FunctionDeclaration") {
      fn = node.body.scope.fnType;
    } else if (node.type == "AssignmentExpression") {
      if (node.right.type == "FunctionExpression")
        fn = node.right.body.scope.fnType;
    } else { // An object property
      if (node.value.type == "FunctionExpression") fn = node.value.body.scope.fnType;
    }

    if (fn && (args || ret)) {
      if (args) for (var i = 0; i < fn.argNames.length; ++i) {
        var name = fn.argNames[i], known = args[name];
        if (!known && (known = args[name + "?"]))
          fn.argNames[i] += "?";
        if (known) known.propagate(fn.args[i]);
      }
      if (ret) ret.propagate(fn.retval);
    } else if (type) {
      type.propagate(aval);
    }
  };
});
