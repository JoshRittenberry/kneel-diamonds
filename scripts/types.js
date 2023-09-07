// Explorer Chapter Changes
import { setType } from "./TransientState.js"

const typesList = await fetch("http://localhost:8088/types")
const types = await typesList.json()

const handleTypeChange = (changeEvent) => {
    if (changeEvent.target.name === "type") {
        setType(parseInt(changeEvent.target.dataset.type))
    }
}

export const getTypes = () => {

    document.addEventListener("change", handleTypeChange)

    let typesHTML = `
    <h2>Type</h2>
    `

    const typeDivs = types.map(
        (type) => {
            return `
            <div>
                <input type="radio" name="type" data-type="${type.id}"/>${type.type}
            </div>
            `
        }
    )

    typesHTML += typeDivs.join("")
    return typesHTML
}