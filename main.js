
const formInput = document.querySelector("form .search");
const searchBtn = document.querySelector(".search-btn");
const searchContent = document.querySelector(".search-content")


//app id and app key 
const app_id = 'c36d6e6d';
const app_key= 'e4b9dd0d518a6204a9eb47f8443e4063';
  

searchBtn.addEventListener('click', (e)=>{
   e.preventDefault();
   let inputtedValue = formInput.value;
   fetch(`https://api.edamam.com/search?q=${inputtedValue}&app_id=${app_id}&app_key=${app_key}`)
   .then(Response => Response.json() )
   .then(data => {
      console.log(data)
      //calling the renderHtml function
      renderHtml(data.hits);
      
   
   })
 

});

// introducing a function that is to render the fetched recipe
function renderHtml(results){
   let renderedHtml = "";
   results.map( results =>{
      renderedHtml += 
      `
      <div class="item">
                 <img src=${results.recipe.image} alt="">
                 <div class="wording-content">
                     <h2>${results.recipe.label}</h2>
                     <a href="${results.recipe.url}" class="btn" >view Recipe</a>
                 </div>
                 <p>${results.recipe.dietLabels}</p>
                 <p>${results.recipe.cuisineType}</p>
             </div>
      `
      searchContent.innerHTML = renderedHtml;



   })

}