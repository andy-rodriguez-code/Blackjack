const miModulo=(()=>{"use strict"; let e=[],t=["C","D","H","S"],a=["A","J","K","Q"],r=[],l=document.querySelector("#boton__pedirCarta"),o=(document.querySelector("#boton__nuevoJuego"),document.querySelector("#boton__pausa")),n=document.querySelectorAll("small"),s=document.querySelectorAll(".cartas_html"),d=(t=2)=>{e.push(i()),r=[];for(let a=0;a<t;a++)r.push(0);n.forEach(e=>e.innerText=0),s.forEach(e=>e.innerHTML=""),l.disabled=!1,o.disabled=!1},i=()=>{e=[];for(let r=2;r<10;r++)for(let l of t)e.push(r+l);for(let o of t)for(let n of a)e.push(n+o);return e=_.shuffle(e)},u=()=>{if(0===e.length)throw"No hay cartas en la baraja";return e.pop()},c=e=>{let t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t},$=(e,t)=>(r[t]=r[t]+c(e),n[t].innerText=r,r[t]),f=(e,t)=>{let a=document.createElement("img");a.src=`assets/img-cartas/${e}.png`,a.classList.add("img_scala"),s[t].append(a)},g=()=>{let[e,t]=r;setTimeout(()=>{t===e?Swal.fire(" Es un empate nadien gana"):e>21?Swal.fire("Computadora gana"):t>21?Swal.fire("Jugador gana"):Swal.fire(" Computadora gana")},100)},h=e=>{let t=0;do{let a=u();t=$(a,r.length-1),f(a,r.length-1)}while(t<e&&e<=21);g()};return l.addEventListener("click",()=>{let e=u(),t=$(e,0);f(e,0),t>21?(l.disabled=!0,o.disabled=!0,h(t)):21===t&&(l.disabled=!0,o.disabled=!0,h(t))}),o.addEventListener("click",()=>{l.disabled=!0,o.disabled=!0,h(r[0])}),{nuevoJuego:d}})();