const $_ = (id) => document.getElementById(id);

const $btnOpenMenu = $_('btn-open-menu');
const $btnCloseMenu = $_('btn-close-menu');
const $curtian = $_('curtian');
const $menu = $_('menu');

$btnOpenMenu.addEventListener("click",()=>{
  $curtian.classList.add('curtian--active');
})


$btnCloseMenu.addEventListener("click",()=>{
  $curtian.classList.remove('curtian--active');
})

$curtian.addEventListener('click',(e)=>{
  if(e.target.id === 'curtian'){
    $curtian.classList.remove('curtian--active');
  }
})

$menu.addEventListener("click",(e)=>{
  if(window.innerWidth < 768){

    const element = e.target;
    
    if(element.parentNode?.classList?.contains('menu__item')){
      element.parentNode?.classList?.toggle('submenu--active')
    }
    
    if(element.parentNode?.parentNode?.classList?.contains('menu__item')){
      element.parentNode?.parentNode?.classList?.toggle('submenu--active')
    }

    if(element.parentNode?.parentNode?.parentNode?.classList?.contains('menu__item')){
      element.parentNode?.parentNode?.parentNode?.classList?.toggle('submenu--active')
    }
  }
})

window.addEventListener("resize",()=>{
  if(window.innerWidth >= 768){
    const $submenus = document.querySelectorAll('.menu__item');
    $submenus.forEach((e)=>{
      e.classList.remove('submenu--active');
    })
  }
})
