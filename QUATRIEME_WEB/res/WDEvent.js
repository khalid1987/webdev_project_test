/*! 24.0.1.0 */
/*! VersionVI: 01F260056u   */
var clWDEventMain=function(){"use strict";function l(n){switch(typeof n){case"string":try{var t=eval(n);if(t&&typeof t=="function")return t}catch(i){}return null;case"function":return n;default:return null}}function a(n){var i,t;switch(typeof n){case"string":return(i=document.getElementById(n),i)?i:(t=document.getElementsByName(n),t&&t.length&&t[0])?t[0]:null;case"number":switch(n){case f:return window;case e:return window.document;case o:return window.document.body;case s:return _PAGE_}return null;default:return n}}function v(n){switch(typeof n){case"number":return r[n];case"string":return[n,n];default:return n}}function y(n){switch(typeof n){case"number":return n;default:return parseInt(n,10)}}var t=function(){function n(n,t,i,r){this.m_fCallback=n;this.m_oCibleDOM=t;this.m_tabEvenementNom=i;this.m_bCapture=r;HookOnXXX(this.m_oCibleDOM,this.m_tabEvenementNom[0],this.m_tabEvenementNom[1],this.m_fCallback,this.m_bCapture)}return n.prototype.Libere=function(){UnhookOnXXX(this.m_oCibleDOM,this.m_tabEvenementNom[0],this.m_tabEvenementNom[1],this.m_fCallback,this.m_bCapture)},n}(),n={},i=1,r=[["onclick","click"],["ondblclick","dblclick"],["onmousedown","mousedown"],["onmouseup","mouseup"],["onmousemove","mousemove"],["onmouseout","mouseout"],["onmouseover","mouseover"],["onkeydown","keydown"],["onkeypress","keypress"],["onkeyup","keyup"],["onfocus","focus"],["onblur","blur"],["onchange","change"],["onselect","select"],["onload","load"],["onunload","unload"],["onreset","reset"],["onsubmit","submit"],["onresize","resize"],["onscroll","scroll"],["onorientationchange","orientationchange"],["ontouchstart","touchstart"],["ontouchmove","touchmove"],["ontouchend","touchend"],["ontouchcancel","touchcancel"],["ongesturestart","gesturestart"],["ongesturechange","gesturechange"],["ongestureend","gestureend"],["onbeforeunload","beforeunload"],["onmouseenter","mouseenter"],["onmouseleave","mouseleave"]],u=1,f=0,e=1,o=2,s=3,h=1,c=2;return{nEvenement:function(r,f,e,o){var s=l(r),h=a(f),c=v(e),p=y(o);if(s&&h&&c&&!isNaN(p)){var b=(p&u)!=0,k=new t(s,h,c,b),w=i++;return n[w]=k,w}return 0},bFinEvenement:function(t){var i=n[t];return i?(i.Libere(),delete n[t],!0):!1},bInterruptionEvenement:function(n,t){return clWDUtil.bStopPropagationCond(n,(t&h)!=0,(t&c)!=0)}}}()