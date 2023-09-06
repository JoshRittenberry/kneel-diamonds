import { setMetal } from "./TransientState.js"

// Create a function to send the chosen selection to the TransientState function to save it to permanent state
const handleMetalChange = (changeEvent) => {
    if (changeEvent.target.name === "metal") {
        setMetal(parseInt(changeEvent.target.dataset.metal))
    }
}

// Create a function that exports a list of metals with radio buttons
export const getMetals = async () => {

    document.addEventListener("change", handleMetalChange)

    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    let metalsHTML = "<h2>Metals</h2>"

    // This was the working metals list using a for...of loop - we are going to instead use the Array.map() method
    // for (const metal of metals) {
    //     metalsHTML +=
    //     `
    //     <div>
    //         <input type="radio" name="metal" data-metal="${metal.metal}" />${metal.metal}
    //     </dvi>
    //     `
    // }

    // This has the same results as the for...of loop but in a cleaner format

    const divStringAarray = metals.map(
        (metal) => {
            return `
                <div>
                    <input type="radio" name="metal" data-metal="${metal.id}" />${metal.metal}
                </div>
                `
        }
    )

    // This Array.map() method will needto return a single string, not an array of string - the code below handles this
    metalsHTML += divStringAarray.join("")

    return metalsHTML
}
