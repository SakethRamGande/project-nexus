const container=document.querySelector('.container');
const loginLink=document.querySelector('.login_link');
const registerLink=document.querySelector('.register_link');

registerLink.addEventListener('click', ()=>{
    container.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    container.classList.remove('active');
});