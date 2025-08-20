const root = document.documentElement;
const toggle = document.getElementById('toggle');
const saved = localStorage.getItem('portfolio-theme');
if(saved){ root.setAttribute('data-theme', saved); }
toggle.addEventListener('click', ()=>{
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
  localStorage.setItem('portfolio-theme', next);
});




