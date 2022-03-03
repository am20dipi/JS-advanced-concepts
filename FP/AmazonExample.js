const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}
// GOALS: 

// 1. Add items to cart. []
// 2. Add 3% tax to item in cart []
// 3. Buy item: cart --> purchases [x]
// 4. Empty cart []


/* // 3. Buy item
function purchaseItem(user, item){
    // create a copy of user object as to not modify original user object
    // Object.assign() => first parameter: what we want to create;
    // second parameter: what object we are referencing (taking props from);
    // third parameter: anything we want to update in the new object we just created

    return Object.assign({}, user, { 
        purchases: item 
    })
    // so here ^ we create an empty object with the properties of the 'user' object
    // and we update purchases to include the item we pass into the function 
}

purchaseItem(user, { name: 'laptop', price: 344 })


// 1. Add items to cart 
function addItemToCart(){
    
}

// 2. Add taxes to item
function applyTaxToItems(){

}

function buyItem(){

} */

const compose = (f, g) => (...args) => f(g(...args)) 

purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)(user, {name: 'laptop', price: 200})

function purchaseItem(...fns) {
    return fns.reduce(compose)
} 

function addItemToCart(user, item){
    // add item to cart using concatenation
    const updateCart = user.cart.concat(item)
    // create a new user with the updated cart
    return Object.assign({}, user, { cart: updateCart })
}

function applyTaxToItems(user){
    return user
}

function buyItem(user){
    return user
}

function emptyCart(user){
    return user
}
    
