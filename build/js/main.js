!function(){"use strict";var e=document.querySelector(".hamburger__wrap"),t=document.querySelector(".site-navigation__list");e.addEventListener("click",function(){t.classList.toggle("site-navigation__list--show")}),window.onload=function(){for(var e=document.querySelector(".js-large-img"),t=document.querySelectorAll(".js-gallery-picture"),l=function(l){var s=t[l];s.addEventListener("click",function(){var t=s.getAttribute("src");e.setAttribute("src",t),e.classList.add("fade"),setTimeout(function(){e.classList.remove("fade")},500)})},s=0;s<t.length;s++)l(s)},function(e){var t=1e3,l=e.getElementById("block-club"),s=e.getElementById("block-day"),n=e.getElementById("block-age"),c=e.getElementById("block-duration"),i=e.getElementById("block-players"),o=l.querySelectorAll("input"),a=s.querySelectorAll("input"),r=n.querySelectorAll("input"),d=c.querySelectorAll("input"),u=i.querySelectorAll("input"),v=e.querySelector('input[value = "children"]'),h=e.querySelector('input[value = "two-hours"]'),f=e.getElementById("reset"),g=f.closest("form").querySelectorAll("label");f.addEventListener("click",function(){b=0,k=0,p=0,E=1,q=0,w=0,S.innerHTML=w;for(var t=0;t<g.length;t++)g[t].classList.remove("active");l.className="",s.className="hidden",n.className="hidden",c.className="hidden",i.className="hidden",e.body.scrollTop=0});var m=void 0,L=void 0,y=void 0,b=0,k=0,p=0,E=1,q=0,S=e.querySelector(".js-price"),w=void 0;function A(){console.log("Функция сработала (возраст изменился)"),v.checked?(console.log("Кнопка Дети нажата"),h.disabled=!0,h.parentElement.classList.add("disabled")):(console.log("Кнопка Взрослые нажата"),h.disabled=!1,h.parentElement.classList.remove("disabled"))}!function(){for(var e=0;e<o.length;e++)o[e].addEventListener("click",function(){"golf"===this.value?(b=650,s.classList.remove("hidden")):(b=0,s.classList.add("hidden"),m=null,_(a),n.classList.remove("hidden")),l.classList.add("blocked"),N(this),I()})}(),function(){for(var e=0;e<a.length;e++)a[e].addEventListener("click",function(){m=this.value,k="weekend"===m?400:0,s.classList.add("blocked"),N(this),I(),n.classList.remove("hidden")})}(),function(){for(var e=0;e<r.length;e++)r[e].addEventListener("click",function(){"adults"===(L=this.value)?p=500:(p=0,null,_(d)),n.classList.add("blocked"),N(this),I(),c.classList.remove("hidden")})}(),function(){for(var e=0;e<d.length;e++)d[e].addEventListener("click",function(){"two-hours"===this.value?(E=2,console.log(E)):(E=1,console.log(E)),c.classList.add("blocked"),N(this),I(),i.classList.remove("hidden")})}(),function(){for(var e=0;e<u.length;e++)u[e].addEventListener("click",function(){switch(y=this.value,L){case"children":q="two-players"===y?400:"three-players"===y?800:0;break;case"adults":q="two-players"===y?300:"three-players"===y?500:0}i.classList.add("blocked"),N(this),I(),S.innerHTML=w})}();for(var B=0;B<r.length;B++)r[B].addEventListener("change",A);function I(){w=(t+b+k+p+q)*E,console.log("Прайс обновился, стало "+w)}function _(e){for(var t=0;t<e.length;t++)e[t].checked=!1,e[t].parentElement.classList.remove("active")}function N(e){for(var t=e.closest("fieldset").querySelectorAll("label"),l=0;l<t.length;l++)t[l].classList.remove("active");e.parentElement.classList.add("active")}}(document)}();
//# sourceMappingURL=main.js.map
