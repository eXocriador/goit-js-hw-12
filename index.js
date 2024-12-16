import{i as c,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function m(r,n=1){return fetch(`https://pixabay.com/api/?key=47660157-57325717b13f34e4491083279&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&page=${n}`).then(e=>e.json()).then(e=>{if(e.hits.length===0)throw new Error("No images found");return e.hits})}function h(r){const n=document.querySelector(".gallery");n.innerHTML="",r.forEach(({webformatURL:s,largeImageURL:o,tags:e,likes:t,views:i,comments:u,downloads:p})=>{const a=document.createElement("li");a.classList.add("photo-card"),a.innerHTML=`
          <a href="${o}">
            <img src="${s}" alt="${e}" loading="lazy" />
          </a>
          <ul class="info">
            <li class="info-item">
               <span class="info-title">Likes:</span>
               <span class="info-content">${t}</span>
             </li>
             <li class="info-item">
               <span class="info-title">Views:</span>
               <span class="info-content">${i}</span>
              </li>
             <li class="info-item">
              <span class="info-title">Comments:</span>
               <span class="info-content">${u}</span>
             </li>
             <li class="info-item">
              <span class="info-title">Downloads:</span>
              <span class="info-content">${p}</span>
             </li>
          </ul>    `,n.appendChild(a)})}const y=document.querySelector(".search-form"),g=document.querySelector('input[name="searchQuery"]'),l=document.querySelector(".loader");let f=1;y.addEventListener("submit",function(r){r.preventDefault();const n=g.value.trim();if(!n){c.error({message:"Please enter a search query!"});return}f=1,l.classList.add("is-active"),m(n,f).then(function(s){h(s),new d(".gallery a")}).catch(function(s){c.error({message:"Sorry, no images found. Please try again!"})}).finally(function(){l.classList.remove("is-active")})});
//# sourceMappingURL=index.js.map
