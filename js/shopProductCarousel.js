    var shopDetail = [
        {name:"Ham Sandwich", price:"$24.00", description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.", avatar:"./images/tp-1.png",},
        {name:"Tomato Bread", price:"$22.00", description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.,", avatar:"./images/tp-2.png",},
        {name:"Sliced Plantain", price:"$26.00", description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit." ,avatar:"./images/tp-3.png",},
        {name:"Ham Sandich", price:"$20.00", description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.", avatar:"./images/tp-5.png",},
        {name:"Ham Sandwich", price:"$24.00", description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.", avatar:"./images/tp-1.png",},
        {name:"Tomato Bread", price:"$22.00", description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.,", avatar:"./images/tp-2.png",},
        {name:"Sliced Plantain", price:"$26.00", description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.", avatar:"./images/tp-3.png",},
        {name:"Ham Sandich", price:"$20.00", description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.", avatar:"./images/tp-5.png",},
        {name:"Tomato Bread", price:"$22.00", description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.,", avatar:"./images/tp-2.png",},
        {name:"Sliced Plantain", price:"$26.00", description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",  avatar:"./images/tp-3.png",},
    ]

    document.querySelectorAll('#test2')[0].innerHTML = shopDetail.map(shop => 
        `<div class="shop-product-content_inner slide-1 align-items-center mb-1">
        <div class="img-container">
            <a href="singleProduct.html">
                <img src = ${shop.avatar} alt="Nahedris img" class="img-fluid">
            </a>
        </div>
        <div class="shop-descript">
            <div class="d-sm-block d-md-flex d-xl-flex justify-content-between align-items-center text-capitalize">
            <h6 class="store-item-name">
            <a href="singleProduct.html">${shop.name}</a>
        </h6>
                <h5 class="store-item-price">${shop.price}</h5>
            </div>

            <div class="shop-text">
                <p>
                    <a href="singleProduct.html">${shop.description}</a>
                </p>
            </div>
        </div>
    </div>`
        

    ).join(''),

    
    document.querySelectorAll('#test2')[1].innerHTML = shopDetail.map(shop => 
        `<div class="shop-product-content_inner slide-1 align-items-center mb-1">
        <div class="img-container">
            <a href="singleProduct.html">
                <img src = ${shop.avatar} alt="Nahedris img" class="img-fluid">
            </a>
        </div>
        <div class="shop-descript">
            <div class="d-sm-block d-md-flex d-xl-flex justify-content-between align-items-center text-capitalize">
                <h6 class="store-item-name">
                    <a href="singleProduct.html">${shop.name}</a>
                </h6>
                <h5 class="store-item-price">${shop.price}</h5>
            </div>

            <div class="shop-text">
                <p>
                    <a href="singleProduct.html">${shop.description}</a>
                </p>
            </div>
        </div>
    </div>`
        

    ).join('')



