/* Chỉ điều khiển menu responsive và logo dự phòng; KHÔNG có dữ liệu/nghiệp vụ giả. */
(()=>{
 const sidebar=document.getElementById('app-sidebar');
 const overlay=document.getElementById('app-backdrop');
 const toggle=document.getElementById('app-toggle');
 const setOpen=(v)=>{sidebar?.classList.toggle('is-open',v);overlay?.classList.toggle('is-open',v);toggle?.setAttribute('aria-expanded',String(v));};
 toggle?.addEventListener('click',()=>setOpen(!sidebar?.classList.contains('is-open')));
 overlay?.addEventListener('click',()=>setOpen(false));
 document.addEventListener('keydown',(e)=>{if(e.key==='Escape')setOpen(false)});
 const logo=document.querySelector('[data-app-logo]');
 if(logo){const fallback=logo.nextElementSibling;const failed=()=>{logo.hidden=true;if(fallback)fallback.hidden=false};logo.addEventListener('error',failed);if(logo.complete&&logo.naturalWidth===0)failed();else if(logo.complete&&logo.naturalWidth>0&&fallback)fallback.hidden=true;else logo.addEventListener('load',()=>{if(fallback)fallback.hidden=true})}
})();
