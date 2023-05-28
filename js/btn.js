let barBtn = document.querySelector(".bar");
let sideBar = document.querySelector(".panel_overlay");//выбрать блок выползающего меню
console.log(sideBar);

let closeBtn = document.querySelector(".close_menu");


barBtn.addEventListener("click", ()=>{
	sideBar.classList.toggle("active_panel");
})

// Нажатие на кнопку закрытие
closeBtn.addEventListener("click", ()=>{
	sideBar.classList.toggle("active_panel");
})

