// most of the work here will be done with logic and a little math
// what's the usual measurement of a progress bar? you'll need to measure the same way here
// use that measurement to update the style of your inner fill element as you scroll
const progress = document.querySelector('.progress-bar-inner')

window.addEventListener('scroll',function (){
  let h = document.documentElement;
  
  let st = h.scrollTop;
  let sh = h.scrollHeight;

  let percent = Math.round(st / (sh - h.clientHeight) *100);
    

    progress.style.width = percent + "%";
    progress.innerHTML = percent + "%";
})