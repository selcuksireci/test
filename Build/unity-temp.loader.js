function createUnityInstance(e,n,r){function t(e,n,r){if(u.startupErrorHandler)return void u.startupErrorHandler(e,n,r);if(!(u.errorHandler&&u.errorHandler(e,n,r)||(console.log("Invoking error handler due to\n"+e),"function"==typeof dump&&dump("Invoking error handler due to\n"+e),e.indexOf("UnknownError")!=-1||e.indexOf("Program terminated with exit(0)")!=-1||t.didShowErrorMessage))){var e="An error occurred running the Unity content on this page. See your browser JavaScript console for more info. The error was:\n"+e;e.indexOf("DISABLE_EXCEPTION_CATCHING")!=-1?e="An exception has occurred, but exception handling has been disabled in this build. If you are the developer of this content, enable exceptions in your project WebGL player settings to be able to catch the exception or see the stack trace.":e.indexOf("Cannot enlarge memory arrays")!=-1?e="Out of memory. If you are the developer of this content, try allocating more memory to your WebGL build in the WebGL player settings.":e.indexOf("Invalid array buffer length")==-1&&e.indexOf("Invalid typed array length")==-1&&e.indexOf("out of memory")==-1&&e.indexOf("could not allocate memory")==-1||(e="The browser could not allocate enough memory for the WebGL content. If you are the developer of this content, try allocating less memory to your WebGL build in the WebGL player settings."),alert(e),t.didShowErrorMessage=!0}}function o(e){var n="unhandledrejection"==e.type&&"object"==typeof e.reason?e.reason:"object"==typeof e.error?e.error:null,r=n?n.toString():"string"==typeof e.message?e.message:"string"==typeof e.reason?e.reason:"";if(n&&"string"==typeof n.stack&&(r+="\n"+n.stack.substring(n.stack.lastIndexOf(r,0)?0:r.length).replace(/(^\n*|\n*$)/g,"")),r&&u.stackTraceRegExp&&u.stackTraceRegExp.test(r)){var o=e instanceof ErrorEvent?e.filename:n&&"string"==typeof n.fileName?n.fileName:n&&"string"==typeof n.sourceURL?n.sourceURL:"",s=e instanceof ErrorEvent?e.lineno:n&&"number"==typeof n.lineNumber?n.lineNumber:n&&"number"==typeof n.line?n.line:0;t(r,o,s)}}function s(e,n){if("symbolsUrl"!=e){var t=u.downloadProgress[e];t||(t=u.downloadProgress[e]={started:!1,finished:!1,lengthComputable:!1,total:0,loaded:0}),"object"!=typeof n||"progress"!=n.type&&"load"!=n.type||(t.started||(t.started=!0,t.lengthComputable=n.lengthComputable,t.total=n.total),t.loaded=n.loaded,"load"==n.type&&(t.finished=!0));var o=0,s=0,i=0,a=0,d=0;for(var e in u.downloadProgress){var t=u.downloadProgress[e];if(!t.started)return 0;i++,t.lengthComputable?(o+=t.loaded,s+=t.total,a++):t.finished||d++}var l=i?(i-d-(s?a*(s-o)/s:0))/i:0;r(.9*l)}}function i(e){return new Promise(function(n,r){s(e);var t=new XMLHttpRequest;t.open("GET",u[e]),t.responseType="arraybuffer",t.addEventListener("progress",function(n){s(e,n)}),t.addEventListener("load",function(r){s(e,r),n(new Uint8Array(t.response))}),t.send()})}function a(){return new Promise(function(e,n){var r=document.createElement("script");r.src=u.frameworkUrl,r.onload=function(){delete r.onload,e(unityFramework)},document.body.appendChild(r),u.deinitializers.push(function(){document.body.removeChild(r)})})}function d(){a().then(function(e){e(u)});var e=i("dataUrl");u.preRun.push(function(){u.addRunDependency("dataUrl"),e.then(function(e){var n=new DataView(e.buffer,e.byteOffset,e.byteLength),r=0,t="UnityWebData1.0\0";if(!String.fromCharCode.apply(null,e.subarray(r,r+t.length))==t)throw"unknown data format";r+=t.length;var o=n.getUint32(r,!0);for(r+=4;r<o;){var s=n.getUint32(r,!0);r+=4;var i=n.getUint32(r,!0);r+=4;var a=n.getUint32(r,!0);r+=4;var d=String.fromCharCode.apply(null,e.subarray(r,r+a));r+=a;for(var l=0,c=d.indexOf("/",l)+1;c>0;l=c,c=d.indexOf("/",l)+1)u.FS_createPath(d.substring(0,l),d.substring(l,c-1),!0,!0);u.FS_createDataFile(d,null,e.subarray(s,s+i),!0,!0,!0)}u.removeRunDependency("dataUrl")})})}r=r||function(){};var u={canvas:e,webglContextAttributes:{preserveDrawingBuffer:!1},streamingAssetsUrl:"StreamingAssets",downloadProgress:{},deinitializers:[],intervals:{},setInterval:function(e,n){var r=window.setInterval(e,n);return this.intervals[r]=!0,r},clearInterval:function(e){delete this.intervals[e],window.clearInterval(e)},preRun:[],postRun:[],print:function(e){console.log(e)},printErr:function(e){console.error(e)},locateFile:function(e){return"build.wasm"==e?this.codeUrl:e},disabledCanvasEvents:["contextmenu","dragstart"]};for(var l in n)u[l]=n[l];u.streamingAssetsUrl=new URL(u.streamingAssetsUrl,document.URL).href,u.disabledCanvasEvents.forEach(function(n){e.addEventListener(n,function(e){e.preventDefault()})});var c={Module:u,SetFullscreen:function(){return u.SetFullscreen?u.SetFullscreen.apply(u,arguments):void u.print("Failed to set Fullscreen mode: Player not loaded yet.")},SendMessage:function(){return u.SendMessage?u.SendMessage.apply(u,arguments):void u.print("Failed to execute SendMessage: Player not loaded yet.")},Quit:function(){return new Promise(function(e,n){u.shouldQuit=!0,u.onQuit=e})}};return u.SystemInfo=function(){var e,n,r,t="-",o=navigator.appVersion,s=navigator.userAgent,i=navigator.appName,a=navigator.appVersion,d=parseInt(navigator.appVersion,10);(n=s.indexOf("Opera"))!=-1?(i="Opera",a=s.substring(n+6),(n=s.indexOf("Version"))!=-1&&(a=s.substring(n+8))):(n=s.indexOf("MSIE"))!=-1?(i="Microsoft Internet Explorer",a=s.substring(n+5)):(n=s.indexOf("Edge"))!=-1?(i="Edge",a=s.substring(n+5)):(n=s.indexOf("Chrome"))!=-1?(i="Chrome",a=s.substring(n+7)):(n=s.indexOf("Safari"))!=-1?(i="Safari",a=s.substring(n+7),(n=s.indexOf("Version"))!=-1&&(a=s.substring(n+8))):(n=s.indexOf("Firefox"))!=-1?(i="Firefox",a=s.substring(n+8)):s.indexOf("Trident/")!=-1?(i="Microsoft Internet Explorer",a=s.substring(s.indexOf("rv:")+3)):(e=s.lastIndexOf(" ")+1)<(n=s.lastIndexOf("/"))&&(i=s.substring(e,n),a=s.substring(n+1),i.toLowerCase()==i.toUpperCase()&&(i=navigator.appName)),(r=a.indexOf(";"))!=-1&&(a=a.substring(0,r)),(r=a.indexOf(" "))!=-1&&(a=a.substring(0,r)),(r=a.indexOf(")"))!=-1&&(a=a.substring(0,r)),d=parseInt(""+a,10),isNaN(d)?(a=""+parseFloat(navigator.appVersion),d=parseInt(navigator.appVersion,10)):a=""+parseFloat(a);var u=/Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(o),l=t,c=[{s:"Windows 3.11",r:/Win16/},{s:"Windows 95",r:/(Windows 95|Win95|Windows_95)/},{s:"Windows ME",r:/(Win 9x 4.90|Windows ME)/},{s:"Windows 98",r:/(Windows 98|Win98)/},{s:"Windows CE",r:/Windows CE/},{s:"Windows 2000",r:/(Windows NT 5.0|Windows 2000)/},{s:"Windows XP",r:/(Windows NT 5.1|Windows XP)/},{s:"Windows Server 2003",r:/Windows NT 5.2/},{s:"Windows Vista",r:/Windows NT 6.0/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows 10",r:/(Windows 10|Windows NT 10.0)/},{s:"Windows NT 4.0",r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},{s:"Windows ME",r:/Windows ME/},{s:"Android",r:/Android/},{s:"Open BSD",r:/OpenBSD/},{s:"Sun OS",r:/SunOS/},{s:"Linux",r:/(Linux|X11)/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{s:"QNX",r:/QNX/},{s:"UNIX",r:/UNIX/},{s:"BeOS",r:/BeOS/},{s:"OS/2",r:/OS\/2/},{s:"Search Bot",r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}];for(var f in c){var p=c[f];if(p.r.test(s)){l=p.s;break}}var g=t;switch(/Windows/.test(l)&&(g=/Windows (.*)/.exec(l)[1],l="Windows"),l){case"Mac OS X":g=/Mac OS X (10[\.\_\d]+)/.exec(s)[1];break;case"Android":g=/Android ([\.\_\d]+)/.exec(s)[1];break;case"iOS":g=/OS (\d+)_(\d+)_?(\d+)?/.exec(o),g=g[1]+"."+g[2]+"."+(0|g[3])}return{width:screen.width?screen.width:0,height:screen.height?screen.height:0,browser:i,browserVersion:a,mobile:u,os:l,osVersion:g,gpu:function(){var e=document.createElement("canvas"),n=e.getContext("experimental-webgl");if(n){var r=n.getExtension("WEBGL_debug_renderer_info");if(r)return n.getParameter(r.UNMASKED_RENDERER_WEBGL)}return t}(),language:window.navigator.userLanguage||window.navigator.language,hasWebGL:function(){if(!window.WebGLRenderingContext)return 0;var e=document.createElement("canvas"),n=e.getContext("webgl2");return n?2:(n=e.getContext("experimental-webgl2"),n?2:(n=e.getContext("webgl"),n||(n=e.getContext("experimental-webgl"))?1:0))}(),hasCursorLock:function(){var e=document.createElement("canvas");return e.requestPointerLock||e.mozRequestPointerLock||e.webkitRequestPointerLock||e.msRequestPointerLock?1:0}(),hasFullscreen:function(){var e=document.createElement("canvas");return(e.requestFullScreen||e.mozRequestFullScreen||e.msRequestFullscreen||e.webkitRequestFullScreen)&&(i.indexOf("Safari")==-1||a>=10.1)?1:0}(),hasThreads:"undefined"!=typeof SharedArrayBuffer,hasWasm:"object"==typeof WebAssembly&&"function"==typeof WebAssembly.validate&&"function"==typeof WebAssembly.compile,hasWasmThreads:function(){if("object"!=typeof WebAssembly)return!1;if("undefined"==typeof SharedArrayBuffer)return!1;var e=new WebAssembly.Memory({initial:1,maximum:1,shared:!0}),n=e.buffer instanceof SharedArrayBuffer;return delete e,n}()}}(),u.abortHandler=function(e){return t(e,"",0),!0},window.addEventListener("error",o),window.addEventListener("unhandledrejection",o),Error.stackTraceLimit=Math.max(Error.stackTraceLimit||0,50),new Promise(function(e,n){u.SystemInfo.hasWebGL?u.SystemInfo.hasWasm?(1==u.SystemInfo.hasWebGL&&u.print('Warning: Your browser does not support "WebGL 2.0" Graphics API, switching to "WebGL 1.0"'),u.startupErrorHandler=n,r(0),u.postRun.push(function(){r(1),delete u.startupErrorHandler,e(c)}),d()):n("Your browser does not support WebAssembly."):n("Your browser does not support WebGL.")})}
