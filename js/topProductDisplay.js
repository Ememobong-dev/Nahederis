    function createCard() {
        cardElement = document.createElement('div');
        cardElement.className = "topProduct-content_inner slide-1 align-items-center mb-1";
        
        imageContainer = document.createElement('div');
        imageContainer.className = "img-container";
        
        imageAnchor = document.createElement('a');
        
        imageElement = document.createElement('img');
        imageElement.className = "img-fluid";
        imageElement.src = "images/tp-5.png";
        
    
    

    
        topProductDescript = document.createElement('div');
        topProductDescript.className = "topProduct-descript";
        
        descriptHeader = document.createElement('div');
        descriptHeader.className = "d-sm-block d-md-flex d-xl-flex justify-content-between align-items-center text-capitalize";
        
        topProductName = document.createElement('span');
        topProductName.className = "topProduct-name";
        
        topProductNameAnchor = document.createElement('a');
        
        topProductPrice = document.createElement('h5');
        topProductPrice.className = "topProduct-price";
        
        topProductText = document.createElement('div');
        topProductText.className = "topProduct-text";
        
        topProductTextParagraph = document.createElement('p');
        
        textParagraphAnchor = document.createElement('a');
        
        imageAnchor.setAttribute("href", "singleProduct.html");
        topProductNameAnchor.setAttribute("href", "singleProduct.html");
        textParagraphAnchor.setAttribute("href", "singleProduct.html");
        
        imageElement.setAttribute("alt", "Nahedris img");
        
        topProductNameAnchor.innerText = "Ham Sandwich";
        topProductPrice.innerText = "$10.50";
        textParagraphAnchor.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit.";

    
    
    
        // Appending
        cardElement.append(imageContainer, topProductDescript);
        imageContainer.appendChild(imageAnchor);
        imageAnchor.appendChild(imageElement);
        topProductDescript.append(descriptHeader, topProductText);
        descriptHeader.append(topProductName, topProductPrice);
        topProductName.append(topProductNameAnchor);
        topProductText.append(topProductTextParagraph);
        topProductTextParagraph.append(textParagraphAnchor);
        
        return cardElement;
    }



    createCard();
 
    let topProduct = document.getElementsByClassName('top-product-content')[0];
    // console.log(topProduct);
    topProduct.appendChild(createCard());
    topProduct.appendChild(createCard());
    topProduct.appendChild(createCard());
    topProduct.appendChild(createCard());
    topProduct.appendChild(createCard());
    topProduct.appendChild(createCard());
    topProduct.appendChild(createCard());
    topProduct.appendChild(createCard());
    topProduct.appendChild(createCard());
    topProduct.appendChild(createCard());

  