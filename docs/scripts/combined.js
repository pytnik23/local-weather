function hideLoader(){document.getElementById("loader").style.display="none"}var weatherApp=function(){function e(){return navigator.geolocation?void navigator.geolocation.getCurrentPosition(function(e){s=e.coords.latitude,c=e.coords.longitude;var n=new XMLHttpRequest,a="https://api.openweathermap.org/data/2.5/weather?lat="+s+"&lon="+c+"&appid="+C;n.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=JSON.parse(this.responseText);t(e)}},n.open("GET",a,!0),n.send()}):void console.log("Geolocation API не поддерживается в вашем браузере")}function t(e){v=e,v.coord.lat=s,v.coord.lon=c,v.lastUpdate=(new Date).getTime(),v.currentTempC=a(v.main.temp,"C"),v.currentTempF=a(v.main.temp,"F"),o(),localStorage.setItem("currentWeather",JSON.stringify(v)),n(),hideLoader()}function n(){i.innerHTML=v.name,l.innerHTML=v.sys.country,r(),p.style.backgroundImage="url('images/weather-icons/"+v.weather[0].icon+".png')",f.innerHTML=v.wind.speed,y.style.transform="rotate("+v.wind.deg+"deg)"}function a(e,t){var n;if("C"===t)n=300-e;else{if("F"!==t)return void console.log("Error! Wrong temperature scale!");n=9*e/5-459.67}return n}function o(){"C"===h?v.currentTemp=v.currentTempC:"F"===h?v.currentTemp=v.currentTempF:console.log("Error! setCurrentTemp function")}function r(){"C"===h?(g.classList.remove("active"),d.classList.add("active")):"F"===h?(d.classList.remove("active"),g.classList.add("active")):console.log("Error! How it happend? WTF???"),o(),m.innerHTML=v.currentTemp.toFixed(1)}var s,c,i=document.getElementsByClassName("city")[0],l=document.getElementsByClassName("country")[0],m=document.getElementsByClassName("temperature__value")[0],u=document.getElementsByClassName("temperature__scales")[0],d=document.getElementsByClassName("temperature__scale_c")[0],g=document.getElementsByClassName("temperature__scale_f")[0],p=document.getElementsByClassName("weather-icon")[0],f=document.getElementsByClassName("wind__speed")[0],y=document.getElementsByClassName("wind__direction")[0],v=JSON.parse(localStorage.getItem("currentWeather")),_=(new Date).getTime(),h=JSON.parse(localStorage.getItem("currentTempScale"))||"C",C="1a30526b61791bf2a0ebd807b705d950";v?v.lastUpdate+6e4>_?(console.log("1 minute not left"),n(),hideLoader()):(console.log("1 minute left"),e()):(console.log("It's first init"),e()),u.addEventListener("click",function(e){var t=e.target;"A"===t.tagName&&(e.preventDefault(),t.classList.contains("temperature__scale_c")?(h="C",r()):t.classList.contains("temperature__scale_f")?(h="F",r()):console.log("Error! What did you click?!?!?"))}),window.onunload=function(){localStorage.setItem("currentTempScale",JSON.stringify(h))}};weatherApp();