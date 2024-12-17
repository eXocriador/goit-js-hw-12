import{a as w,i as u,S as L}from"./assets/vendor-D0cagnvz.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const b="47660157-57325717b13f34e4491083279",S="https://pixabay.com/api/",q=async(e,o=1,t=15)=>{try{const n=await w.get(S,{params:{key:b,q:e,page:o,per_page:t,image_type:"photo"}});return n.data.hits.length===0&&u.info({title:"No images found",message:"Try adjusting your search criteria."}),n.data}catch(n){throw console.error("Error fetching images:",n),u.error({title:"Error",message:"Unable to fetch images. Please try again later."}),new Error("Unable to fetch images.")}},y=document.querySelector(".gallery"),p=document.querySelector(".load-more"),l=document.querySelector(".loader"),v=e=>{if(e.length===0){f(),i();return}const o=e.map(t=>`
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
        </div>`).join("");y.insertAdjacentHTML("beforeend",o)},E=()=>{p.style.display="block"},i=()=>{p.style.display="none"},f=e=>{const o=document.querySelector(".gallery");g(),o.insertAdjacentHTML("afterend",`<p class="end-message">${e}</p>`)},g=()=>{const e=document.querySelector(".end-message");e&&e.remove()},M=()=>{y.innerHTML=""},$=()=>{l.classList.contains("show")||l.classList.add("show")},B=()=>{l.classList.contains("show")&&l.classList.remove("show")},I=new L(".gallery a",{captionsData:"alt",captionDelay:250});let c=1,a="",m=0;const P=document.querySelector(".search-form"),A=document.querySelector(".load-more");P.addEventListener("submit",async e=>{e.preventDefault(),a=e.target.elements.query.value.trim(),a!==""&&(c=1,M(),i(),await h(a,c))});A.addEventListener("click",async()=>{c+=1,await h(a,c)});const h=async(e,o)=>{try{$(),i();const t=await q(e,o),{hits:n,totalHits:s}=t;if(g(),n.length===0&&o===1){f("No images found. Try adjusting your search criteria.");return}v(n),I.refresh(),m=s,o*15>=m?(i(),f("We're sorry, but you've reached the end of search results.")):E(),o>1&&O()}catch(t){u.error({title:"Error",message:"Something went wrong! Please try again later."}),console.error(t)}finally{B()}},O=()=>{const e=document.querySelectorAll(".gallery-item"),o=e[e.length-1],{height:t}=o.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})};
//# sourceMappingURL=index.js.map
