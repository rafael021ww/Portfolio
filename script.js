const qs=s=>document.querySelectorAll(s);
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
qs('.reveal').forEach(x=>observer.observe(x));

const c=document.querySelector('.cursor'),r=document.querySelector('.ring');
window.addEventListener('mousemove',e=>{c.style.left=e.clientX+'px';c.style.top=e.clientY+'px';r.style.left=e.clientX+'px';r.style.top=e.clientY+'px'});
qs('a,.card,.interest').forEach(el=>{
 el.addEventListener('mouseenter',()=>{r.style.width='62px';r.style.height='62px'});
 el.addEventListener('mouseleave',()=>{r.style.width='36px';r.style.height='36px'});
});
qs('a').forEach(el=>{
 el.addEventListener('mousemove',e=>{
   if(!el.classList.contains('nav-btn'))return;
   const b=el.getBoundingClientRect(),x=e.clientX-b.left-b.width/2,y=e.clientY-b.top-b.height/2;
   el.style.transform=`translate(${x*.12}px,${y*.12}px)`;
 });
 el.addEventListener('mouseleave',()=>el.style.transform='');
});
