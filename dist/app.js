!function e(n,r,o){function t(i,a){if(!r[i]){if(!n[i]){var f="function"==typeof require&&require;if(!a&&f)return f(i,!0);if(u)return u(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var s=r[i]={exports:{}};n[i][0].call(s.exports,function(e){var r=n[i][1][e];return t(r?r:e)},s,s.exports,e,n,r,o)}return r[i].exports}for(var u="function"==typeof require&&require,i=0;i<o.length;i++)t(o[i]);return t}({1:[function(e,n,r){"use strict";var o=e("./import");console.log("square(5) = "+(0,o.square)(5));var t={name:"Tojo Antonio",phoneNo:"+230 58 200 206"},u=new o.MyClass(t);console.log("My name is "+u.getName()),console.log("My phone number is "+u.getPhoneNo())},{"./import":2}],2:[function(e,n,r){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var t=function(){function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,r,o){return r&&e(n.prototype,r),o&&e(n,o),n}}(),u=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return e+n},i=function(e){return e*e},a=8,f=function(){function e(n){o(this,e),this.name=n.name,this.phoneNo=n.phoneNo}return t(e,[{key:"getName",value:function(){return this.name}},{key:"getPhoneNo",value:function(){return this.phoneNo}}]),e}();r.sum=u,r.square=i,r.variable=a,r.MyClass=f},{}]},{},[1]);
//# sourceMappingURL=app.js.map