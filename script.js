const reveal = new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")})},{threshold:.12});
document.querySelectorAll(".section,.card,.quote").forEach(el=>{el.style.opacity="0";el.style.transform="translateY(24px)";el.style.transition="opacity .8s ease, transform .8s ease";reveal.observe(el)});
document.addEventListener("scroll",()=>{document.querySelectorAll(".section.visible,.card.visible,.quote.visible").forEach(el=>{el.style.opacity="1";el.style.transform="translateY(0)"})});
