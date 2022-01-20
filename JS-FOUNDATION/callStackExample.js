// how will the numbers be printed in the console?

setTimeout(() => {console.log('1'), 0})
setTimeout(() => {console.log('2'), 10})
console.log('3')

// answer:
    // 3 => 1 => 2




// how will the numbers be printed in the console?

setTimeout(() => {console.log('1'), 1000})
setTimeout(() => {console.log('2'), 10})
console.log('3')

// answer:
    // 3 => 2 => 1


// how will the numbers be printed in the console?

setTimeout(() => {console.log('1'), 0})
Promise.resolve('2').then(() => console.log('2'))
console.log('3')

// answer:
    // 3 => 2 => 1

    // 2 gets printed before 1 because the Promise resolves
    // before setTimeout() is processed by the Web API

    