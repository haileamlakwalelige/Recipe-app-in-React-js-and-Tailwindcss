const menu=document.querySelector("#menu");
const navlist =document.querySelector('.navlist');

menu.addEventListener('click',()=>{
    if(navlist.classList.contain("hidden")){
        navlist.classList.remove('hidden');
    }else{
        navlist.classList.add("hidden");
    }
})