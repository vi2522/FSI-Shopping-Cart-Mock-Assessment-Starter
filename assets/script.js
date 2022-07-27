function updateQuantity(){
    let quantity = document.querySelector('.total-quantity')
    quantity.innerHTML = displayQuantity
}

let quantity = 1

const neg = document.querySelector('#quantity-down')
const pos = document.querySelector('#quantity-up')

neg.addEventListener('click', function(e){
    if(quantity > 0){
        quantity--
    }
    updateQuantity(`Quantity: ${quantity}`)
})

pos.addEventListener('click', function(){
    quantity++
    updateQuantity(`Quantity: ${quantity}`)
})