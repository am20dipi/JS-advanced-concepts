// IMMUTABILITY

const person = { 
    name: 'Adri',
    age: 25
}

function cloneObject(obj){
    return { ...obj }
}

cloneObject(person)
// => output: { name: Adri, age: 24 }


function updateName(obj){
    const obj2 = clone(obj)
    obj2.name = 'Dillon'
    return obj2
}

updateName(person)
// => output: { name: Dillon, age: 24}

