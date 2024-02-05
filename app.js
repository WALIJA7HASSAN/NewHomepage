const closebtn=document.getElementById('close-icon')
const menubtn=document.getElementById('menu-icon')
const blurBg=document.getElementById('blur-bg')
const nav=document.getElementById('nav-list')

menubtn.addEventListener('click',()=>{
    nav.classList.remove('max-[416px]:-right-full');
    nav.classList.add('max-[416px]:right-0');
    blurBg.classList.remove('hidden');
    // blurBg.classList.add('visible');
})
closebtn.addEventListener('click',()=>{
    nav.classList.remove('max-[416px]:right-0');
    nav.classList.add('max-[416px]:-right-full');
    // blurBg.classList.remove('visible');
    blurBg.classList.add('hidden');
})