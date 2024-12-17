import{a as y,i as d,S as p}from"./assets/vendor-D0cagnvz.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const g="47660157-57325717b13f34e4491083279",h="https://pixabay.com/api/",w=async(e,s=1,r=15)=>{try{const t=await y.get(h,{params:{key:g,q:e,page:s,per_page:r,image_type:"photo"}});return t.data.hits.length===0&&d.info({title:"No images found",message:"Try adjusting your search criteria."}),t.data}catch(t){throw console.error("Error fetching images:",t),d.error({title:"Error",message:"Unable to fetch images. Please try again later."}),new Error("Unable to fetch images.")}},L=e=>{const s=document.querySelector(".gallery");if(e.length===0){f(),a();return}const r=e.map(t=>`
        <div class="gallery-item">
          <a href="${t.largeImageURL}">
            <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
          </a>
          <ul class="info">
            <li class="info-item">
              <span class="info-title">Likes:</span>
              <span class="info-content">${t.likes}</span>
            </li>
            <li class="info-item">
              <span class="info-title">Views:</span>
              <span class="info-content">${t.views}</span>
            </li>
            <li class="info-item">
              <span class="info-title">Comments:</span>
              <span class="info-content">${t.comments}</span>
            </li>
            <li class="info-item">
              <span class="info-title">Downloads:</span>
              <span class="info-content">${t.downloads}</span>
            </li>
          </ul>
        </div>`).join("");s.insertAdjacentHTML("beforeend",r)},S=()=>{const e=document.querySelector(".load-more");e.style.display="block"},a=()=>{const e=document.querySelector(".load-more");e.style.display="none"},f=()=>{document.querySelector(".gallery").insertAdjacentHTML("beforeend",`<p class="end-message">We're sorry, but you've reached the end of search results.</p>`)},b=()=>{const e=document.querySelector(".gallery");e.innerHTML=""};document.querySelector(".loader");const q=()=>{const e=document.querySelector(".loader");e.classList.contains("show")||e.classList.add("show")},v=()=>{const e=document.querySelector(".loader");e.classList.contains("show")&&e.classList.remove("show")},E=new p(".gallery a",{captionsData:"alt",captionDelay:250});let c=1,l="",u=0;const M=document.querySelector(".search-form"),B=document.querySelector(".load-more");M.addEventListener("submit",async e=>{e.preventDefault(),l=e.target.elements.query.value.trim(),l!==""&&(c=1,b(),await m(l,c))});B.addEventListener("click",async()=>{c+=1,await m(l,c)});const m=async(e,s)=>{try{q(),a();const r=await w(e,s),{hits:t,totalHits:o}=r;if(t.length===0){f(),a();return}L(t),E.refresh(),u=o,s*3>=u?a():S(),I()}catch(r){d.error({title:"Error",message:"Something went wrong! Please try again later."}),console.error(r)}finally{v()}},I=()=>{const e=document.querySelectorAll(".gallery-item"),s=e[e.length-1],{height:r}=s.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})};
//# sourceMappingURL=index.js.map
