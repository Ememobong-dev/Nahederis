var topProduct = [
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

document.getElementById('tpContent').innerHTML = topProduct.map(product => 
    `<div class="topProduct-content_inner slide-1 align-items-center mb-1">
    <div class="img-container">
        <a href="singleProduct.html">
            <img src = ${product.avatar} alt="Nahedris img" class="img-fluid">
        </a>
    </div>
    <div class="topProduct-descript">
        <div class="d-sm-block d-md-flex d-xl-flex justify-content-between align-items-center text-capitalize">
            <span class="topProduct-name">
                <a href="singleProduct.html">${product.name}</a>
            </span>
            <h5 class="topProduct-price">${product.price}</h5>
        </div>

        <div class="topProduct-text">
            <p>
                <a href="singleProduct.html">${product.description}</a>
            </p>
        </div>
    </div>
</div>`
    

).join('')


