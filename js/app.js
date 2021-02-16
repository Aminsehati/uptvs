const btnSearch=document.querySelector('.btn-search');
const mobileSearch =document.querySelector('.mobile-search ');
const hideSearch=document.querySelector('.hide-search');
btnSearch.addEventListener('click',(e)=>{
    mobileSearch.classList.add('mobile-search-show');
});
hideSearch.addEventListener('click',()=>{
    mobileSearch.classList.remove('mobile-search-show');
});