const imgs = document.querySelectorAll('.header-slider ul li img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0; // Initial image index

function changeSlide() {
    for(let i=0;i<imgs.length;i++){
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';

}

changeSlide(); // Show first image initially

prev_btn.addEventListener('click', (e) => {
    n = (n > 0) ? n - 1 : imgs.length - 1;
    changeSlide();
})

next_btn.addEventListener('click', (e) => {
    n = (n < imgs.length - 1) ? n + 1 : 0;
    changeSlide();
})

const scrollContainer = document.querySelectorAll('.products');
for (const item of scrollContainer){
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}

