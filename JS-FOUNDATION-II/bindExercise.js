// FIX THIS CODE TO RETURN THE NAME OF THE CHARACTER

const character = {
    name: 'Simon',
    getName(){
        return this.name
    }  
}
const giveMeTheCharacter = character.getName;

console.log(giveMeTheCharacter())


// CORRECT CODE

const character = {
    name: 'Simon',
    getName(){
        return this.name
    }  
}
const giveMeTheCharacter = character.getName.bind(character);

console.log(giveMeTheCharacter())