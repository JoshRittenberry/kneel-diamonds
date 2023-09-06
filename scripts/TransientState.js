// Setup the transient state data structure and provide initial values
// Since there aren't any integers (none of the data has any id's) we will need to have the transient state be an empty string... maybe
    // gemSizes is a number and will be set to zero

const transientState = {
    "metalId": 0,
    "gemSizeId": 0,
    "styleId": 0,
}

// Create function to modify each property of the transientState

export const setMetal = async (chosenMetal) => {
    transientState.metal = chosenMetal
    console.log("This is the metal T-State: " + chosenMetal)
    console.log(transientState)
}

export const setGemSize = (chosenGemSize) => {
    transientState.gemSize = chosenGemSize
    console.log("This is the gemSize T-State: " + chosenGemSize)
    console.log(transientState)
}

export const setStyle = (chosenStyle) => {
    transientState.style = chosenStyle
    console.log("This is the style T-State: " + chosenStyle)
    console.log(transientState)
}


// Create a function to convert the transient state to permanent state, by pushing to the database.json API
export const saveCustomOrder = async() => {
    // I'm still not sure how this postOptions works, but I know it is necessary
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    // This should push the new T-State Object to the database API
    const orders = await fetch("http://localhost:8088/orders", postOptions)

    // Also creating an event listener incase it is needed - I imagine it will be
    const newCustomOrder = new CustomEvent("newCustomOrderCreated")
    document.dispatchEvent(newCustomOrder)
}