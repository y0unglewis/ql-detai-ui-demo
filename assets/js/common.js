// UI FOUNDATION ONLY: this file does not perform business operations.
(function(){
  const sidebar=document.querySelector('.sidebar');
  const toggle=document.querySelector('[data-menu-toggle]');
  const backdrop=document.querySelector('.backdrop');
  function close(){sidebar?.classList.remove('is-open');backdrop?.classList.remove('is-open');toggle?.setAttribute('aria-expanded','false');}
  toggle?.addEventListener('click',()=>{const next=!sidebar?.classList.contains('is-open');sidebar?.classList.toggle('is-open',next);backdrop?.classList.toggle('is-open',next);toggle?.setAttribute('aria-expanded',String(next));});
  backdrop?.addEventListener('click',close);
  document.addEventListener('keydown',ev=>{if(ev.key==='Escape')close();});
  sidebar?.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
})();
