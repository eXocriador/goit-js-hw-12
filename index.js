import{a as f,S as p}from"./assets/vendor-DBMDmZZa.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const m="47660157-57325717b13f34e4491083279",y="https://pixabay.com/api/",g=async(e,s=1,r=15)=>{try{return(await f.get(y,{params:{key:m,q:e,page:s,per_page:r,image_type:"photo"}})).data}catch(o){throw console.error("Error fetching images:",o),new Error("Unable to fetch images.")}},h=e=>{const s=document.querySelector(".gallery"),r=e.map(o=>`
        <div class="gallery-item">
          <a href="${o.largeImageURL}">
            <img src="${o.webformatURL}" alt="${o.tags}" loading="lazy" />
          </a>
          <ul class="info">
            <li class="info-item">
              <span class="info-title">Likes:</span>
              <span class="info-content">${o.likes}</span>
            </li>
            <li class="info-item">
              <span class="info-title">Views:</span>
              <span class="info-content">${o.views}</span>
            </li>
            <li class="info-item">
              <span class="info-title">Comments:</span>
              <span class="info-content">${o.comments}</span>
            </li>
            <li class="info-item">
              <span class="info-title">Downloads:</span>
              <span class="info-content">${o.downloads}</span>
            </li>
          </ul>
        </div>`).join("");s.insertAdjacentHTML("beforeend",r)},L=()=>{const e=document.querySelector(".load-more");e.style.display="block"},i=()=>{const e=document.querySelector(".load-more");e.style.display="none"},b=()=>{document.querySelector(".gallery").insertAdjacentHTML("beforeend",`<p class="end-message">We're sorry, but you've reached the end of search results.</p>`)},w=()=>{const e=document.querySelector(".gallery");e.innerHTML=""},S=new p(".gallery a",{captionsData:"alt",captionDelay:250});S.refresh();let a=1,l="",d=0;const q=document.querySelector(".search-form"),v=document.querySelector(".load-more");q.addEventListener("submit",async e=>{e.preventDefault(),l=e.target.elements.query.value.trim(),l!==""&&(a=1,w(),u(l,a))});v.addEventListener("click",()=>{a+=1,u(l,a)});const u=async(e,s)=>{try{const r=await g(e,s),{hits:o,totalHits:t}=r;if(o.length===0){b(),i();return}h(o),d=t,s*15>=d?i():L(),M()}catch(r){console.error(r)}},M=()=>{const e=document.querySelectorAll(".gallery-item"),s=e[e.length-1],{height:r}=s.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})};
//# sourceMappingURL=index.js.map
