const formInput = document.querySelector("form .search");
const searchBtn = document.querySelector(".search-btn")

const app_id = 'c36d6e6d';
const app_key= 'e4b9dd0d518a6204a9eb47f8443e4063';

searchBtn.addEventListener('click', (e)=>{
   e.preventDefault();
   let inputtedValue = formInput.value;
   console.log(inputtedValue)

})