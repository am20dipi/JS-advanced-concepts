// Memoization: a specific form of caching; caching the return value of a function based on its parameters
    // if the parameter of the function already exists in the cache, it retrieves it from memory from the cache
    

// Caching: a way to store values for later use. 
// Example: a backpack => you keep everything in your backpack and if you need something, it is there for you to use. 

// Caching speeds up programs because it holds data in an easy accessible "box".


// Caching Example 1

// old way
function addTo80(num){
    return num + 80
}

addTo80(1) // output => 81


// cached/memoized way
let cache = {}
function memoizedAddTo80(num){
    // if num exists in the cache, return it
    if (num in cache){
        return cache[num]
    } else { // if num does NOT exist in cache, then add it to the cache
        cache[num] = num + 80
    }
}

memoizedAddTo80(5) // output => 85
cache // output => { 5: 85 }
memoizedAddTo80(7) // output => 87
cache // output => { 5: 85, 7: 87 }



// Caching Example 2

// it is good practice to have the cache stored in local scope; not global scope

function memoizedAddTo80(){
    // move the cache into the local scope
    let cache = {}
    // wrap our logic in a closure so that cache does not reset each time the function is ran
    return function(num){
        // if num exists in the cache, return it
        if (num in cache){
            return cache[num]
        } else { // if num does NOT exist in cache, then add it to the cache
            cache[num] = num + 80
            return cache[num]
        }
    }
}

// set our function to a variable to refer to the closure
const memoized = memoizedAddTo80()

