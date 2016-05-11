define(["historyManager","focusManager","browser","layoutManager","inputManager","css!./dialoghelper.css"],function(t,e,n,i,o){function a(e,n,i){function a(){var t=f.originalUrl==window.location.href;(t||!m(e))&&window.removeEventListener("popstate",a),t&&(f.closedByBack=!0,b(e))}function s(t){"back"==t.detail.command&&(f.closedByBack=!0,b(e),t.preventDefault())}function c(){if(o.off(e,s),window.removeEventListener("popstate",a),A(e),e.classList.remove("opened"),g&&document.body.classList.remove("noScroll"),!f.closedByBack&&u(e)){var t=history.state||{};t.dialogId==n&&history.back()}v.focus(),"true"==e.getAttribute("data-removeonclose")&&e.parentNode.removeChild(e),setTimeout(function(){i({element:e,closedByBack:f.closedByBack})},1)}var f=this;f.originalUrl=window.location.href;var v=document.activeElement,g=!1;e.addEventListener("close",c);var p=!e.classList.contains("fixedSize");p&&e.classList.add("centeredDialog"),e.classList.remove("hide"),e.showModal?(e.getAttribute("modal")?e.showModal():(r(e),e.showModal()),l(document.activeElement)):d(e),e.classList.add("opened"),p&&w(e),"true"!=e.getAttribute("data-lockscroll")||document.body.classList.contains("noScroll")||(document.body.classList.add("noScroll"),g=!0),h(e),u(e)?(t.pushState({dialogId:n},"Dialog",n),window.addEventListener("popstate",a)):o.on(e,s)}function s(t,e){for(;t.tagName!=e;)if(t=t.parentNode,!t)return null;return t}function r(t){t.addEventListener("click",function(e){var n=t.getBoundingClientRect(),i=n.top<=e.clientY&&e.clientY<=n.top+n.height&&n.left<=e.clientX&&e.clientX<=n.left+n.width;i||s(e.target,"SELECT")&&(i=!0),i||v(t)})}function c(t){var i=n.animate?0:300;setTimeout(function(){e.autoFocus(t)},i)}function l(t){t&&t.blur&&t!=document.body&&t.blur()}function d(t){var e=document.createElement("div");e.classList.add("dialogBackdrop"),t.parentNode.insertBefore(e,t.nextSibling),t.backdrop=e,setTimeout(function(){e.classList.add("opened")},0),e.addEventListener("click",function(){v(t)})}function u(t){return"true"==t.getAttribute("data-history")}function f(t){return new Promise(function(e){new a(t,"dlg"+(new Date).getTime(),e)})}function m(t){return!t.classList.contains("hide")}function v(t){m(t)&&(u(t)?history.back():b(t))}function g(t,e){var n=[{transform:"scale(0)",offset:0},{transform:"scale(1,1)",offset:1}],i=t.animationConfig.entry.timing;return t.animate(n,i).onfinish=e}function p(t,e){var n=[{opacity:"0",offset:0},{opacity:"1",offset:1}],i=t.animationConfig.entry.timing;return t.animate(n,i).onfinish=e}function y(t){var e=[{opacity:"1",offset:0},{opacity:"0",offset:1}],n=t.animationConfig.exit.timing;return t.animate(e,n)}function b(t){if(!t.classList.contains("hide")){var e=function(){t.classList.add("hide"),t.close?t.close():t.dispatchEvent(new CustomEvent("close",{bubbles:!1,cancelable:!1}))};if(!t.animationConfig||!t.animate)return void e();y(t).onfinish=e}}function h(t){var e=function(){"true"==t.getAttribute("data-autofocus")&&c(t)};return t.animationConfig&&t.animate?void("fade-in-animation"==t.animationConfig.entry.name?p(t,e):"scale-up-animation"==t.animationConfig.entry.name&&g(t,e)):void e()}function L(t){return null!=t.lockScroll?t.lockScroll:"fullscreen"==t.size?!0:n.mobile}function w(t){t.style.marginLeft=-(t.offsetWidth/2)+"px",t.style.marginTop=-(t.offsetHeight/2)+"px"}function A(t){var e=t.backdrop;e&&(t.backdrop=null,e.classList.remove("opened"),setTimeout(function(){e.parentNode.removeChild(e)},300))}function k(e){e=e||{};var o=document.createElement("dialog");o=document.createElement(!o.showModal||n.tv?"div":"div"),o.classList.add("focuscontainer"),o.classList.add("hide"),L(e)&&o.setAttribute("data-lockscroll","true"),e.enableHistory!==!1&&t.enableNativeHistory()&&o.setAttribute("data-history","true"),e.modal!==!1&&o.setAttribute("modal","modal"),e.autoFocus!==!1&&o.setAttribute("data-autofocus","true");var a=n.animate?"scale-up-animation":"fade-in-animation";o.entryAnimation=e.entryAnimation||a,o.exitAnimation="fade-out-animation";var s=e.entryAnimationDuration||(e.size?240:300);return o.animationConfig={entry:{name:o.entryAnimation,node:o,timing:{duration:s,easing:"ease-out"}},exit:{name:o.exitAnimation,node:o,timing:{duration:e.exitAnimationDuration||300,easing:"ease-in"}}},n.animate||(o.animationConfig=null,o.entryAnimation=null,o.exitAnimation=null),o.classList.add("dialog"),o.classList.add("scrollY"),(i.tv||i.mobile)&&o.classList.add("hiddenScroll"),e.removeOnClose&&o.setAttribute("data-removeonclose","true"),e.size&&(o.classList.add("fixedSize"),o.classList.add(e.size)),o}return{open:f,close:v,createDialog:k}});