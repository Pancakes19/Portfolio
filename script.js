const root = document.documentElement;
const toggle = document.getElementById('toggle');
toggle.addEventListener('click', ()=>{
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);

});




