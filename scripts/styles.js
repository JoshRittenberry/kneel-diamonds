import { setStyle } from "./TransientState.js"

const handleStyleChange = (changeEvent) => {
    if (changeEvent.target.name === "style") {
        setStyle(parseInt(changeEvent.target.dataset.style))
    }
}

// Create a function that exports a list of styles with radio buttons
export const getStyles = async () => {

    document.addEventListener("change", handleStyleChange)

    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    let stylesHTML = "<h2>Styles</h2>"
    
    // This was the working metals list using a for...of loop - we are going to instead use the Array.map() method
    // for (const style of styles) {
    //  stylesHTML +=
    //     `
    //     <div>
    //         <input type="radio" name="style" data-style="${style.style}"/>${style.style} Carets
    //     </div>
    //     `
    // }

    const divStringAarray = styles.map(
        (style) => {
            return `
                <div>
                    <input type="radio" name="style" data-style="${style.id}"/>${style.style} Carets
                </div>
            `
        }
    )

    // This Array.map() method will needto return a single string, not an array of string - the code below handles this
    stylesHTML += divStringAarray.join("")

    return stylesHTML
}
