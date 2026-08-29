const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const glow=document.querySelector('.cursor-glow');
document.addEventListener('pointermove',e=>{
  glow.style.left=e.clientX+'px'; glow.style.top=e.clientY+'px';
});
const topBtn=document.querySelector('.back-top');
window.addEventListener('scroll',()=>topBtn.classList.toggle('show',window.scrollY>500));
topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.style.opacity='1';entry.target.style.transform='translateY(0)';}});
},{threshold:.12});
document.querySelectorAll('.project-card,.skill-card,.timeline-item,.certs>div,.contact-grid a').forEach(el=>{
  el.style.opacity='0';el.style.transform='translateY(16px)';el.style.transition='opacity .55s ease,transform .55s ease';
  observer.observe(el);
});
