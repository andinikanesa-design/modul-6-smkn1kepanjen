// tahun footer
document.getElementById('yr').textContent = new Date().getFullYear();

// ticks waktu kayak di screenshot footer asli
const ticks = document.getElementById('ticks');
const curHour = new Date().getHours();
for(let i=0;i<24;i++){
  const el = document.createElement('i');
  if(i === curHour % 24) el.classList.add('on');
  if(Math.abs(i-curHour) > 7) el.style.opacity = '0.28';
  ticks.appendChild(el);
}

// pill active biar gak statis
document.querySelectorAll('.pill a').forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelectorAll('.pill a').forEach(x=>x.classList.remove('on'));
    a.classList.add('on');
  });
});

// parallax bintang halus
window.addEventListener('scroll', ()=>{
  const y = window.scrollY * 0.1;
  document.querySelectorAll('.star').forEach(s=>{
    s.style.transform = `translateY(${y}px) rotate(${y}deg)`;
  });
});