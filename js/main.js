// Mobile menu
const burger=document.querySelector('.burger'),menu=document.getElementById('menu');
burger.addEventListener('click',()=>{const o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));

// Service tabs
const tabs=document.querySelectorAll('.tabs button'),panels=document.querySelectorAll('.panel');
tabs.forEach(t=>t.addEventListener('click',()=>{
  tabs.forEach(x=>x.classList.remove('on'));panels.forEach(p=>p.classList.remove('on'));
  t.classList.add('on');panels[t.dataset.tab].classList.add('on');
}));

// Waste sorter
const ans=document.getElementById('answer');
document.querySelectorAll('.items button').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('.items button').forEach(x=>x.classList.remove('on'));
  b.classList.add('on');
  ans.innerHTML='<strong>'+b.textContent.trim()+'</strong> goes in the <strong>'+b.dataset.bin+'</strong>. '+b.dataset.note;
}));

// Counters (run once when the strip is visible)
const strip=document.querySelector('.strip');
new IntersectionObserver((e,o)=>{
  if(!e[0].isIntersecting)return;o.disconnect();
  strip.querySelectorAll('[data-count]').forEach(el=>{
    const end=+el.dataset.count;let n=0;
    const t=setInterval(()=>{n+=Math.ceil(end/30);if(n>=end){n=end;clearInterval(t)}el.textContent=n},40);
  });
},{threshold:.5}).observe(strip);

// Pickup form -> WhatsApp (change the number to switch who receives it)
const WHATSAPP='233209644703';
document.getElementById('form').addEventListener('submit',e=>{
  e.preventDefault();const f=new FormData(e.target);
  const text=`Hello Vulpex, I am ${f.get('name')}. I need: ${f.get('service')}. Location: ${f.get('place')}. ${f.get('msg')}`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`,'_blank');
});

document.getElementById('yr').textContent=new Date().getFullYear();
