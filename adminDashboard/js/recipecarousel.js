var recipeDashboard = [
    {btnDelete:"Delete Recipe", btnEdit:"Edit Recipe", avatar:"/Nahedris/images/img-3.png",},
    {btnDelete:"Delete Recipe", btnEdit:"Edit Recipe", avatar:"/Nahedris/images/img-3.png",},
    {btnDelete:"Delete Recipe", btnEdit:"Edit Recipe", avatar:"/Nahedris/images/img-3.png",},
    {btnDelete:"Delete Recipe", btnEdit:"Edit Recipe", avatar:"/Nahedris/images/img-3.png",},
    {btnDelete:"Delete Recipe", btnEdit:"Edit Recipe", avatar:"/Nahedris/images/img-3.png",},
    {btnDelete:"Delete Recipe", btnEdit:"Edit Recipe", avatar:"/Nahedris/images/img-3.png",},
    {btnDelete:"Delete Recipe", btnEdit:"Edit Recipe", avatar:"/Nahedris/images/img-3.png",},
    {btnDelete:"Delete Recipe", btnEdit:"Edit Product", avatar:"/Nahedris/images/img-3.png",},
    {btnDelete:"Delete Recipe", btnEdit:"Edit Recipe", avatar:"/Nahedris/images/img-3.png",},
    {btnDelete:"Delete Recipe", btnEdit:"Edit Recipe", avatar:"/Nahedris/images/img-3.png",},
]


document.querySelectorAll('#recipeDashboard-content')[0].innerHTML = recipeDashboard.map(recipe => 
    `<div class="recipeDashboard__slider-content--inner  align-items-center mb-1">
    <div class="img-container">
       <img src=${recipe.avatar} class="img-fluid" alt="">
    </div>
    <div class="recipeDashboard__slider-content--descript ">
        <div class="text-center text-capitalize">
            <h5 class="recipe-name">Jollof Rice</a></h5>
            <a name="" id="" class="btn btn-default mb-2" href="editRecipe.html" role="button"><i class="fas fa-pencil-alt "></i> ${recipe.btnEdit} </a> <br>
            <a name="" id="" class="btn btn-default" href="#" role="button" data-toggle="modal" data-target="#modelId"><i class="fa fa-trash" aria-hidden="true"></i> ${recipe.btnDelete} </a>
        </div>
    </div>
</div>`
    

).join('')

document.querySelectorAll('#recipeDashboard-content')[1].innerHTML = recipeDashboard.map(recipe => 
    `<div class="recipeDashboard__slider-content--inner  align-items-center mb-1">
    <div class="img-container">
       <img src=${recipe.avatar} class="img-fluid" alt="">
    </div>
    <div class="recipeDashboard__slider-content--descript ">
        <div class="text-center text-capitalize">
            <h5 class="recipe-name">Jollof Rice</a></h5>
            <a name="" id="" class="btn btn-default mb-2" href="editRecipe.html" role="button"><i class="fas fa-pencil-alt "></i> ${recipe.btnEdit} </a> <br>
            <a name="" id="" class="btn btn-default" href="#" role="button" data-toggle="modal" data-target="#modelId"><i class="fa fa-trash" aria-hidden="true"></i> ${recipe.btnDelete} </a>
        </div>
    </div>
</div>`
    

).join('')