var e,n,i=((e={name:null,version:null,os:null,osVersion:null,touch:null,mobile:null,_canUse:null,canUse:function(n){e._canUse||(e._canUse=document.createElement("div"));var i=e._canUse.style,o=n.charAt(0).toUpperCase()+n.slice(1);return n in i||"Moz"+o in i||"Webkit"+o in i||"O"+o in i||"ms"+o in i},init:function(){for(var n=navigator.userAgent,i="other",o=0,r=[["firefox",/Firefox\/([0-9\.]+)/],["bb",/BlackBerry.+Version\/([0-9\.]+)/],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/],["opera",/OPR\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)/],["edge",/Edge\/([0-9\.]+)/],["safari",/Version\/([0-9\.]+).+Safari/],["chrome",/Chrome\/([0-9\.]+)/],["ie",/MSIE ([0-9]+)/],["ie",/Trident\/.+rv:([0-9]+)/]],t=0;t<r.length;t++)if(n.match(r[t][1])){i=r[t][0],o=parseFloat(RegExp.$1);break}for(e.name=i,e.version=o,i="other",r=[["ios",/([0-9_]+) like Mac OS X/,function(e){return e.replace("_",".").replace("_","")}],["ios",/CPU like Mac OS X/,function(e){return 0}],["wp",/Windows Phone ([0-9\.]+)/,null],["android",/Android ([0-9\.]+)/,null],["mac",/Macintosh.+Mac OS X ([0-9_]+)/,function(e){return e.replace("_",".").replace("_","")}],["windows",/Windows NT ([0-9\.]+)/,null],["bb",/BlackBerry.+Version\/([0-9\.]+)/,null],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/,null],["linux",/Linux/,null],["bsd",/BSD/,null],["unix",/X11/,null]],t=o=0;t<r.length;t++)if(n.match(r[t][1])){i=r[t][0],o=parseFloat(r[t][2]?r[t][2](RegExp.$1):RegExp.$1);break}"mac"==i&&"ontouchstart"in window&&(1024==screen.width&&1366==screen.height||834==screen.width&&1112==screen.height||810==screen.width&&1080==screen.height||768==screen.width&&1024==screen.height)&&(i="ios"),e.os=i,e.osVersion=o,e.touch="wp"==e.os?0<navigator.msMaxTouchPoints:"ontouchstart"in window,e.mobile="wp"==e.os||"android"==e.os||"ios"==e.os||"bb"==e.os}}).init(),e);n=function(){return i},"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?module.exports=n():this.browser=n();
//# sourceMappingURL=index.af0c9ec1.js.map
