import { saveCustomOrder } from "./TransientState.js"

// Function for when the Create Custom Order Button is clicked
const handleCustomOrderButton = (clickEvent) => {
    if (clickEvent.target.name === "orderButton") {
        console.log("Custom Order Created")
        saveCustomOrder()
    }
}

// Creates the Create Custom Order Button
export const purchaseButton = () => {

    document.addEventListener("click", handleCustomOrderButton)

    return `
    <button type="button" name="orderButton" id="orderButton">Create Custom Order</button>
    `
}