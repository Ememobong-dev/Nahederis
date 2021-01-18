    var topRecipeCarousel = [
        {name:"Goan Style Vegetable Curry With  Kitchari", header:"rise", avatar:"images/img-2.png", descript:"Eat all 5 of your 5-a-day in one delicious curry, served with brown rice and lentils. It's healthy, vegan, gluten-free and provides vitamin C and iron, too.", },
        {name:"Goan Style Vegetable Curry With  Kitchari", header:"rise", avatar:"images/img-2.png", descript:"Eat all 5 of your 5-a-day in one delicious curry, served with brown rice and lentils. It's healthy, vegan, gluten-free and provides vitamin C and iron, too.", },
        {name:"Goan Style Vegetable Curry With  Kitchari", header:"rise", avatar:"images/img-2.png", descript:"Eat all 5 of your 5-a-day in one delicious curry, served with brown rice and lentils. It's healthy, vegan, gluten-free and provides vitamin C and iron, too.", },
       
    ]


    document.querySelector('#topRecipe--inner').innerHTML = topRecipeCarousel.map(topRecipe => 
    `<div class="recipe_inner" >
        <div class="recipe-img">
            <img src=${topRecipe.avatar} alt="Image" class="img-fluid">
        </div>
        <div class="recipe-text">
            <div class="recipe-left">
                <span class="mr-3 ">${topRecipe.header}</span>
                <h2><a href="singleRecipe.html">${topRecipe.name} </a></h2>
                <div class="recipe-descript">
                    <p>${topRecipe.descript}</p>
                </div>
                <div class="recipe-eta">
                    <div class="d-flex">
                        <div class="p-1 align-self-start">
                            <span><img src="images/clock.png"  class="img-fluid" alt="icon-clock"></span> 
                        </div>
                        <div class="p-1 align-self-end">
                            <span>Prep:10 mins</span> <br> 
                            <span class="">Cook:30 mins</span>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="p-1 align-self-start">
                            <span><img src="images/flag.png" class="img-fluid" alt="icon-flag"></span> 
                        </div>
                        <div class="p-1 align-self-start">
                            <span>Easy</span> <br>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="p-1 align-self-start">
                            <span><img src="images/icon_catergoria.png" class="img-fluid" alt="icon-servings"></span> 
                        </div>
                        <div class="p-1 align-self-start">
                            <span>4 Servings</span> <br>
                        </div>
                    </div>
                </div>


            </div>
            <div class="recipe-right">
                
                <span class="recipe-share-btn">
                    <button class="btn btn-share share-button" type="button" title="Share this recipe">
                        <img src="images/share.png" alt="" class="img-fluid">
                    </button>
                </span>
                <span class="recipe-share-btn">
                    <button class="btn btn-share btn-bookmark" type="button" title="bookmark this recipe">
                        <img src="images/bookmark.png" alt="" class="img-fluid">
                    </button>
                </span>
                
            </div>
            
        </div>
    </div>`
        

    ).join('')


