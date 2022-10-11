function updateProductNumber(qt,pri) 
{
    var select_product = parseInt(document.getElementById(qt).value); //How much quatity I selected from cart
    var ini_product = parseInt(document.getElementById('tproduct').innerText); //Initial value of "Total Product"
    tproduct.innerText = select_product+ini_product; //Set result to "Total product"
    var tprice = select_product*pri; //Multiply product quantity with product price
    var ini_price = parseInt(document.getElementById('price').innerText); //Initial value of "Price"
    var subtotal_price = tprice+ini_price; //Final Total Price
    price.innerText = subtotal_price; //Set result to "Price"
    if(subtotal_price<=500)
    {
        delivery.innerText = 100;
        shipping.innerText = 100;
        var del_charge = 100;
    }
    else if(subtotal_price<=800)
    {
        delivery.innerText = 150;
        shipping.innerText = 150;
        var del_charge = 150;
    }
    else
    {
        delivery.innerText = 200;
        shipping.innerText = 200;
        var del_charge = 200;
    }
    var price_with_del_charge = subtotal_price+del_charge+del_charge; //Total Price+Delivery+Shipping
    ttprice.innerText = price_with_del_charge; //Set result to "Total Price"
    var tx = subtotal_price*0.15; //Count Tax according to product
    tax.innerText = parseInt(tx); //Set result to "Tax"
    totaltax.innerText = parseInt(tx+price_with_del_charge); //Set result to "Total(inc. TAX)"
}
function addToCart(pr) //If choose product from carousel (Single Product)
{
    var in_prod = parseInt(document.getElementById('tproduct').innerText);
    var in_price = parseInt(document.getElementById('price').innerText);
    tproduct.innerText = in_prod+1;
    price.innerText = in_price+pr;
}
function ClearCart()
{
    tproduct.innerText = 0;
    price.innerText = 0;
    delivery.innerText = 0;
    shipping.innerText = 0;
    ttprice.innerText = 0;
    tax.innerText = 0;
    totaltax.innerText = 0;
}
document.getElementById("add1").addEventListener('click', function () 
{
    updateProductNumber('c1', 3039);
});
document.getElementById("add2").addEventListener('click', function () 
{
    updateProductNumber('c2', 139);
});
document.getElementById("add3").addEventListener('click', function () 
{
    updateProductNumber('c3', 700);
});
document.getElementById("add4").addEventListener('click', function () 
{
    updateProductNumber('c4', 205);
});
document.getElementById("add5").addEventListener('click', function () 
{
    updateProductNumber('c5', 789);
});
document.getElementById("add6").addEventListener('click', function () 
{
    updateProductNumber('c6', 700);
});
document.getElementById("p1").addEventListener('click', function () 
{
    addToCart(3039);
});
document.getElementById("p2").addEventListener('click', function () 
{
    addToCart(139);
});
document.getElementById("p3").addEventListener('click', function () 
{
    addToCart(700);
});
document.getElementById("p4").addEventListener('click', function () 
{
    addToCart(205);
});
document.getElementById("p5").addEventListener('click', function () 
{
    addToCart(789);
});

document.getElementById("clear").addEventListener('click', function () 
{
    ClearCart();
});

document.getElementById("check-btn").addEventListener('click', function () 
{
    alert("Thanks for shopping!"+"\nTotal amount of purchased: "+totaltax.innerText);
});