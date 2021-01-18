var srCarousel = [
    {name:"Satay sweet potato vegan curry", header:"rise", avatar:"images/img-3.png", descript:"Eat all 5 of your 5-a-day in one delicious curry, served with brown rice and lentils. It's healthy, vegan, gluten-free and provides vitamin C and iron, too.", },
    {name:"Satay sweet potato vegan curry", header:"rise", avatar:"images/img-3.png", descript:"Eat all 5 of your 5-a-day in one delicious curry, served with brown rice and lentils. It's healthy, vegan, gluten-free and provides vitamin C and iron, too.", },
    {name:"Satay sweet potato vegan curry", header:"rise", avatar:"images/img-3.png", descript:"Eat all 5 of your 5-a-day in one delicious curry, served with brown rice and lentils. It's healthy, vegan, gluten-free and provides vitamin C and iron, too.", },
    {name:"Satay sweet potato vegan curry", header:"rise", avatar:"images/img-3.png", descript:"Eat all 5 of your 5-a-day in one delicious curry, served with brown rice and lentils. It's healthy, vegan, gluten-free and provides vitamin C and iron, too.", },
    {name:"Satay sweet potato vegan curry", header:"rise", avatar:"images/img-3.png", descript:"Eat all 5 of your 5-a-day in one delicious curry, served with brown rice and lentils. It's healthy, vegan, gluten-free and provides vitamin C and iron, too.", },
    {name:"Satay sweet potato vegan curry", header:"rise", avatar:"images/img-3.png", descript:"Eat all 5 of your 5-a-day in one delicious curry, served with brown rice and lentils. It's healthy, vegan, gluten-free and provides vitamin C and iron, too.", },
    {name:"Satay sweet potato vegan curry", header:"rise", avatar:"images/img-3.png", descript:"Eat all 5 of your 5-a-day in one delicious curry, served with brown rice and lentils. It's healthy, vegan, gluten-free and provides vitamin C and iron, too.", },
    {name:"Satay sweet potato vegan curry", header:"rise", avatar:"images/img-3.png", descript:"Eat all 5 of your 5-a-day in one delicious curry, served with brown rice and lentils. It's healthy, vegan, gluten-free and provides vitamin C and iron, too.", },
    {name:"Satay sweet potato vegan curry", header:"rise", avatar:"images/img-3.png", descript:"Eat all 5 of your 5-a-day in one delicious curry, served with brown rice and lentils. It's healthy, vegan, gluten-free and provides vitamin C and iron, too.", },
]


    document.querySelector('#SR-carousel').innerHTML = srCarousel.map(SR => 
        `<!-- Single Slide -->
        <div class="recipe-product-content_inner  align-items-center">
            <!-- img-container -->
            <div class="img-container">
                <a href="#"><img src=${SR.avatar} class="img-fluid" alt=""> </a>
            </div>
            <!-- recipe-text -->
            <div class="recipe-descript">
                <div class="justify-content-between align-items-center text-capitalize">
                    <h5 class="Srecipe-name"><a href="#">${SR.name}</a></h5>
                </div>
                <div class="recipe-tripple-icon d-flex justify-content-between">
                    <span class=""><img src="images/clock.png"  alt="" class="img-fluid">20</span>
                    <span class=""><img src="images/flag.png"  alt="" class="img-fluid"> Easy</span>
                    <span class="bookmark ">
                        <a name="" id="" class="btn btn-bookmark bg-Sr" href="#" role="button"><img src="images/bookmark.png" alt="" class="img-fluid"></a>
                    </span>
                </div>
            
            </div>
        </div>`
    ).join('')


