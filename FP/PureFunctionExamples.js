// How to make a function "pure" -- without producing side effects

// This function is NOT pure
const exampleArray = [ 'a', 'b', 'c' ]

function notPure(array){
    return array.pop()
}

notPure(exampleArray)
// => [ 'a', 'b' ] 
notPure(exampleArray)
// => [ 'a' ]

// Each time we invoke notPure() and pass the array
// the output changes AND we modify something outside of the function w
// which is a side effect


// Pure function example
const exampleArray2 = ['a', 'b', 'c']

function pure(array){
    // create a new array and concat the values of the array we pass in
    const newArray = [].concat(array)
    // pop() off the newArray
    newArray.pop()
    // return the newArray
    return newArray
}

// In this example, our exampleArray2 does not get modified
// If we were to call exampleArray2 after invoking the pure() function
// it is still intact.

