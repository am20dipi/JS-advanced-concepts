# Encapsulation

```js
const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    
    let passTime = () => timeWithoutDestruction++
    
    const totalPeaceTime = () => timeWithoutDestruction
    
    const launch = () => {
        timeWithoutDestruction = -1
        return 'boop'
    }
    
    
    setInterval(passTime, 1000)
    // increments timeWithoutDestruction every 1 second

    return {
        launch: launch,
        totalPeaceTime: totalPeaceTime,

    }
}

const setOffNuclear = makeNuclearButton()

setOffNuclear.totalPeaceTime()
setOffNuclear.launch()
```

In this example, we used closures. 

By returning the two functions: 'launch' and 'totalPeaceTime' we are allowing access to those functions to really anyone. 

This is where encapsulation comes in. Encapsulation is the hiding of information unnecessary to be manipulated by the 'outside' world. We do NOT want to give access to certain functions to users -- privilege of access. 


Basically, data Encapsulation ensures that some data is not exposed.

By removing 'launch' or 'totalPeaceTime' or both from the return statement, the functions are encapsulated and no longer accessible by 'anyone'. 