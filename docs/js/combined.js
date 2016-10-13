function hideLoader(){document.getElementById("loader").classList.add("hide")}var weatherApp=function(){function e(){return navigator.geolocation?void navigator.geolocation.getCurrentPosition(function(e){function r(e,t){var r=new XMLHttpRequest;return"withCredentials"in r?r.open(e,t,!0):"undefined"!=typeof XDomainRequest?(r=new XDomainRequest,r.open(e,t)):r=null,r}function n(e){var n=r("GET",e);return n?(n.onload=function(){y=JSON.parse(n.responseText),t()},n.onerror=function(){alert("Woops, there was an error making the request.")},void n.send()):void alert("CORS not supported")}var o=e.coords.latitude,c=e.coords.longitude,a=o+","+c,i="https://query.yahooapis.com/v1/public/yql?q=";i+='select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="('+a+')") and u="c"',i+="&format=json",n(i)}):void console.log("Geolocation API не поддерживается в вашем браузере")}function t(){y.lastUpdate=(new Date).getTime(),y.currentTempC=+y.query.results.channel.item.condition.temp,y.currentTempF=+n(y.currentTempC,"F"),y.bgImageUrl="url('https://s.yimg.com/zz/combo?a/i/us/nws/weather/gr/"+y.query.results.channel.item.condition.code+"d.png')",o(),y.weatherDescription=y.query.results.channel.item.condition.text,localStorage.setItem("currentWeather",JSON.stringify(y)),r(),hideLoader()}function r(){a.innerHTML=y.query.results.channel.location.city,i.innerHTML=y.query.results.channel.location.country,c(),m.innerHTML=y.weatherDescription,p.style.backgroundImage=y.bgImageUrl,g.innerHTML=y.query.results.channel.wind.speed,f.style.transform="rotate("+y.query.results.channel.wind.direction+"deg)"}function n(e,t){var r;if("C"===t)r=e;else{if("F"!==t)return void console.log("Error! Wrong temperature scale!");r=9*e/5+32}return r}function o(){"C"===v?y.currentTemp=y.currentTempC:"F"===v?y.currentTemp=y.currentTempF:console.log("Error! setCurrentTemp function")}function c(){"C"===v?(d.classList.remove("active"),u.classList.add("active"),s.classList.remove("f"),s.classList.add("c")):"F"===v?(u.classList.remove("active"),d.classList.add("active"),s.classList.remove("c"),s.classList.add("f")):console.log("Error! How it happend? WTF???"),o(),s.innerHTML=y.currentTemp.toFixed(0)}var a=document.querySelector(".city"),i=document.querySelector(".country"),s=document.querySelector(".temperature__value"),l=document.querySelector(".temperature__scales"),u=document.querySelector(".temperature__scale_c"),d=document.querySelector(".temperature__scale_f"),m=document.querySelector(".weather-description"),p=document.querySelector(".weather-icon"),g=document.querySelector(".wind__speed"),f=document.querySelector(".wind__direction"),y=JSON.parse(localStorage.getItem("currentWeather")),h=(new Date).getTime(),v=JSON.parse(localStorage.getItem("currentTempScale"))||"C";y?y.lastUpdate+6e4>h?(console.log("1 minute not left"),r(),hideLoader()):(console.log("1 minute left"),e()):(console.log("It's first init"),e()),l.addEventListener("click",function(e){var t=e.target;"A"===t.tagName&&(e.preventDefault(),t.classList.contains("temperature__scale_c")?(v="C",c()):t.classList.contains("temperature__scale_f")?(v="F",c()):console.log("Error! What did you click?!?!?"))}),window.onunload=function(){localStorage.setItem("currentTempScale",JSON.stringify(v))}};weatherApp();