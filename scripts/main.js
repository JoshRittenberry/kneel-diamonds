// Import functions from other modules (metals, sizes, styles)

import { getGemSizes } from "./gemSizes.js"
import { getMetals } from "./metals.js"
import { purchaseButton } from "./ordersButton.js"
import { getCustomOrders } from "./ordersList.js"
import { getStyles } from "./styles.js"


// Create the DOM with a function that invokes the getMetals, getSizes, and getStyles functions

let content = document.querySelector("#content")

const render = async() => {
const metalsHTML = await getMetals()
const gemSizesHTML = await getGemSizes()
const stylesHTML = await getStyles()
const customOrderButtonHTML = purchaseButton()
const customOrdersListHTML = await getCustomOrders()

    content.innerHTML =
    `
    ${metalsHTML}
    ${gemSizesHTML}
    ${stylesHTML}
    ${customOrderButtonHTML}
    ${customOrdersListHTML}
    `
}

render()

document.addEventListener("newCustomOrderCreated", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})