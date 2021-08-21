const extramemory = document.getElementById('extra-memory');
const extrastorage = document.getElementById('extra-storage');
const extracharge = document.getElementById('extra-charge');
//total
const totalprice = document.getElementById('total-price');

//memory 
document.getElementById('memory-8').addEventListener('click',function(){
    macBook(0, extramemory);
})
document.getElementById('memory-16').addEventListener('click',function(){
    macBook(180, extramemory);
})

//storage
document.getElementById('storage-256').addEventListener('click',function(){
    macBook(0, extrastorage);
})
document.getElementById('storage-512').addEventListener('click',function(){
    macBook(100, extrastorage);
})
document.getElementById('storage-1tb').addEventListener('click',function(){
    macBook(180, extrastorage);
})

// cost
document.getElementById('delivery-free').addEventListener('click',function(){
    macBook(0, extracharge);
})
document.getElementById('delivery-20').addEventListener('click',function(){
    macBook(20, extracharge);
})

function macBook(price,initialCost){
   const initialPrice = price;
   initialCost.innerText = initialPrice;
   totalPrice();
}
function totalPrice(){
    const bestPrice = 1299;
    const memoryCost = extramemory.innerText;
    const storageCost = extrastorage.innerText;
    const deliveryCost = extracharge.innerText;
    const totalPrice = bestPrice + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost);
    totalprice.innerText = totalPrice;
}