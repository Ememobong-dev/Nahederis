    var productDashboard = [
        {btnDelete:"Delete Product", btnEdit:"Edit Product", avatar:"/Nahedris/images/tp-1.png",},
        {btnDelete:"Delete Product", btnEdit:"Edit Product", avatar:"/Nahedris/images/tp-2.png",},
        {btnDelete:"Delete Product", btnEdit:"Edit Product", avatar:"/Nahedris/images/tp-3.png",},
        {btnDelete:"Delete Product", btnEdit:"Edit Product", avatar:"/Nahedris/images/tp-5.png",},
        {btnDelete:"Delete Product", btnEdit:"Edit Product", avatar:"/Nahedris/images/tp-1.png",},
        {btnDelete:"Delete Product", btnEdit:"Edit Product", avatar:"/Nahedris/images/tp-2.png",},
        {btnDelete:"Delete Product", btnEdit:"Edit Product", avatar:"/Nahedris/images/tp-3.png",},
        {btnDelete:"Delete Product", btnEdit:"Edit Product", avatar:"/Nahedris/images/tp-5.png",},
    ]

    document.querySelectorAll('#productDashboard-content')[0].innerHTML = productDashboard.map(shop => 
        `<div class="productDashboard__slider-content--inner  text-dark align-items-center mb-1">
        <div class="img-container">
           <img src=${shop.avatar} class="img-fluid" alt="">
        </div>
        <div class="productDashboard__slider-content--descript ">
            <div class="text-center text-capitalize m-2">
                <a name="" id="" class="btn btn-default mb-2" href="editProduct.html" role="button"><i class="fas fa-pencil-alt "></i> ${shop.btnEdit} </a> <br>
                <a name="" id="" class="btn btn-default" href="#" role="button" data-toggle="modal" data-target="#modelId"><i class="fa fa-trash" aria-hidden="true"></i> ${shop.btnDelete} </a>
            </div>
        </div>
    </div>`
    ).join('')

    document.querySelectorAll('#productDashboard-content')[1].innerHTML = productDashboard.map(shop => 
        `<div class="productDashboard__slider-content--inner align-items-center mb-1">
        <div class="img-container">
           <img src=${shop.avatar} class="img-fluid" alt="">
        </div>
        <div class="productDashboard__slider-content--descript ">
            <div class="text-center text-capitalize m-2">
                <a name="" id="" class="btn btn-default mb-2" href="editProduct.html" role="button"><i class="fas fa-pencil-alt "></i> Edit Product</a> <br>
                <a name="" id="" class="btn btn-default" href="#" role="button" data-toggle="modal" data-target="#modelId"><i class="fa fa-trash" aria-hidden="true"></i> Delete Product</a>
            </div>
        </div>
    </div>`
    ).join('')

    


