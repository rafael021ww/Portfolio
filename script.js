
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, {threshold:.1});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const cursor = document.querySelector(".cursor");
const ring = document.querySelector(".cursor-ring");
window.addEventListener("mousemove", e => {
  if (!cursor || !ring) return;
  cursor.style.left=e.clientX+"px"; cursor.style.top=e.clientY+"px";
  ring.style.left=e.clientX+"px"; ring.style.top=e.clientY+"px";
});

document.querySelectorAll("a,.card,.interest,.mail-box").forEach(el=>{
  el.addEventListener("mouseenter",()=>{
    if(!ring)return;
    ring.style.width="64px"; ring.style.height="64px";
  });
  el.addEventListener("mouseleave",()=>{
    if(!ring)return;
    ring.style.width="34px"; ring.style.height="34px";
  });
});

const btn=document.querySelector(".enquire-btn");
if(btn){
  btn.addEventListener("mousemove",e=>{
    const r=btn.getBoundingClientRect();
    btn.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.10}px,${(e.clientY-r.top-r.height/2)*.10}px)`;
  });
  btn.addEventListener("mouseleave",()=>btn.style.transform="");
}
