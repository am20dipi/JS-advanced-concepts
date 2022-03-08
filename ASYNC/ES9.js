// ES9 (2018)


// Object spread operator

const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
    bird: 3
}

const { tiger, ...rest } = animals

tiger // output => 23
rest // output => {lion: 5, monkey: 2}


function objectSpread(param1, param2, param3){
    console.log(param1)
    console.log(param2)
    console.log(param3)
}

const { tiger, lion, ...rest } = animals

objectSpread(tiger, lion, rest)
// output => 23
// output => 5
// output => { monkey: 2, bird: 3}




// Finally() Method
// let's us do something after a Promise finishes
// finally() gets called whether the Promise is resolved OR rejected

// chain onto the end of a Promise chain after then() and catch()
// finally() usually does not receive a parameter; nor does it receive anything from the Promise


Promise.all(urls.map(url => {
    return fetch(url).then(response => response.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
})
.catch(() => console.log('error!'))
.finally(() => console.log("finally!!!!"))



