import { setGemSize } from "./TransientState.js"


const handleGemSizeChange = (changeEvent) => {
    if (changeEvent.target.name === "gemSize") {
        setGemSize(parseInt(changeEvent.target.dataset.carets))
    }
}

// Create a function that exports a list of gem sizes with radio buttons
export const getGemSizes = async () => {
    
    document.addEventListener("change", handleGemSizeChange)
    
    const response = await fetch("http://localhost:8088/gemSizes")
    const gemSizes = await response.json()

    let gemSizesHTML = "<h2>Gem Sizes</h2>"
    
    // This was the working metals list using a for...of loop - we are going to instead use the Array.map() method
    // for (const gemSize of gemSizes) {
    //     gemSizesHTML +=
    //     `
    //     <div>
    //         <input type="radio" name="gemSize" data-carets="${gemSize.carets}"/>${gemSize.carets} Carets
    //     </div>
    //     `
    // }

    const divStringAarray = gemSizes.map(
        (gemSize) => {
            return `
                <div>
                    <input type="radio" name="gemSize" data-carets="${gemSize.id}"/>${gemSize.carets} Carets
                </div>
            `
        }
    )

    // This Array.map() method will needto return a single string, not an array of string - the code below handles this
    gemSizesHTML += divStringAarray.join("")

    return gemSizesHTML
}
