function updateProductNumber(product, pri) 
{
    const productInput = document.getElementById(product);
    var qota = document.getElementById('tproduct').innerText;
    var temp = parseInt(qota);
    var total = parseInt(productInput.value);
    tproduct.innerText = total+temp;
    var tprice = total*pri;
    var temp3 = parseInt(document.getElementById('price').innerText);
    price.innerText = tprice+temp3;

    if((tprice+temp3)<=500)
    {
        var del = 100;
        delivery.innerText = del;
    }
    else if((tprice+temp3)<=800)
    {
        var del = 150;
        delivery.innerText = del;
    }
    else
    {
        var del = 200;
        delivery.innerText = del;
    }


    if((tprice+temp3)<=500)
    {
        var ship = 100;
        shipping.innerText = ship;
    }
    else if((tprice+temp3)<=800)
    {
        var ship = 150;
        shipping.innerText = ship;
    }
    else
    {
        var ship = 200;
        shipping.innerText = ship;
    }

    var totalPrice = parseInt(tprice+temp3);
    ttprice.innerText = totalPrice;

    var tx = totalPrice*0.15;
    tax.innerText = parseInt(tx);

    totaltax.innerText = parseInt(tx+totalPrice);
}
function addToCart(pr)
{
    var qota = document.getElementById('tproduct').innerText;
    var temp = parseInt(qota);
    var temp2 = parseInt(document.getElementById('price').innerText);
    tproduct.innerText = temp+1;
    price.innerText = temp2+pr;
}
function ClearCart()
{
    tproduct.innerText = 0;
    price.innerText = 0;
    delivery.innerText = 0;
    shipping.innerText = 0;
    ttprice.innerText = 0;
    tax.innerText = 0;
    price.innerText = 0;
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

