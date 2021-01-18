    var recipeCarousel = [
        {name:"Satay Sweet", header:"rise", avatar:"images/img-3.png",},
        {name:"Satay Sweet", header:"rise", avatar:"images/img-3.png",},
        {name:"Satay Sweet", header:"rise", avatar:"images/img-3.png",},
        {name:"Ham Sandich", header:"rise", avatar:"images/img-3.png",},
        {name:"Satay Sweet", header:"rise", avatar:"images/img-3.png",},
        {name:"Satay Sweet", header:"rise", avatar:"images/img-3.png",},
        {name:"Satay Sweet", header:"rise", avatar:"images/img-3.png",},
        {name:"Ham Sandich", header:"rise", avatar:"images/img-3.png",},
        {name:"Satay Sweet", header:"rise", avatar:"images/img-3.png",},
        {name:"Satay Sweet", header:"rise",  avatar:"images/img-3.png",},
        {name:"Satay Sweet", header:"rise", avatar:"images/img-3.png",},
        {name:"Satay Sweet", header:"rise",  avatar:"images/img-3.png",},
    ]


    document.querySelectorAll('#recipeContent')[0].innerHTML = recipeCarousel.map(recipe => 
    `<div class="recipe-product-content_inner slide-1 align-items-center mb-1">
        <!-- img-container -->
        <div class="img-container">
            <a href="singleRecipe.html"><img src= ${recipe.avatar} class="img-fluid" alt=""> </a>
            
        </div>
        <!-- recipe-text -->
        <div class="recipe-descript">
            <div class="justify-content-between align-items-center text-capitalize">
                <span id="recipe-head">${recipe.header}</span>
                <h5 class="recipe-name"><a href="singleRecipe.html">${recipe.name}</a></h5>
            </div>
            <div class="recipe-tripple-icon d-flex justify-content-between">
                <span class=""><img src="images/clock.png"  alt="" class="img-fluid">20</span>
                <span class=""><img src="images/flag.png"  alt="" class="img-fluid"> Easy</span>
                <span class="bookmark ">
                    <a name="" id="" class="btn btn-bookmark" href="#" role="button"><img src="images/bookmark.png" alt="" class="img-fluid"></a>
                </span>
            </div>
           
        </div>
    </div>`
        

    ).join(''),

    
    document.querySelectorAll('#recipeContent')[1].innerHTML = recipeCarousel.map(recipe => 
        `<div class="recipe-product-content_inner slide-1 align-items-center mb-1">
            <!-- img-container -->
            <div class="img-container">
                <a href="singleRecipe.html"><img src= ${recipe.avatar} class="img-fluid" alt=""> </a>
                
            </div>
            <!-- recipe-text -->
            <div class="recipe-descript">
                <div class="justify-content-between align-items-center text-capitalize">
                    <span id="recipe-head">${recipe.header}</span>
                    <h5 class="recipe-name"><a href="singleRecipe.html">${recipe.name}</a></h5>
                </div>
                <div class="recipe-tripple-icon d-flex justify-content-between">
                    <span class=""><img src="images/clock.png"  alt="" class="img-fluid">20</span>
                    <span class=""><img src="images/flag.png"  alt="" class="img-fluid"> Easy</span>
                    <span class="bookmark ">
                        <a name="" id="" class="btn btn-bookmark" href="#" role="button"><img src="images/bookmark.png" alt="" class="img-fluid"></a>
                    </span>
                </div>
               
            </div>
        </div>`
            
    
        ).join('')



