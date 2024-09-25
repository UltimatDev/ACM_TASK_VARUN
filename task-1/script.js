nav = document.getElementById("nav")


window.onscroll = ()=>{
    if(document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10)
    {
        nav.classList.add('nav-scroll');
        nav.classList.remove('nav-no-scroll');
     
    }
    else{
        nav.classList.add('nav-no-scroll');
        nav.classList.remove('nav-scroll');
     
    }
 }