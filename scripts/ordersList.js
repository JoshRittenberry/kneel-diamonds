export const getCustomOrders = async () => {
    const list = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=gemSize&_expand=type")
    const customOrders = await list.json()

    let customOrdersHTML = "<h2>Custom Jewelry Orders</h2>"

    const divStringArray = customOrders.map(
        (customOrder) => {
            
            let orderPrice = null
            
            if (customOrder.type.id === 1) {
                orderPrice = ((customOrder.metal.price + customOrder.style.price + customOrder.gemSize.price) * 1).toFixed(2)
            } else if (customOrder.type.id === 2) {
                orderPrice = ((customOrder.metal.price + customOrder.style.price + customOrder.gemSize.price) * 2).toFixed(2)
            } else if (customOrder.type.id === 3) {
                orderPrice = ((customOrder.metal.price + customOrder.style.price + customOrder.gemSize.price) * 4).toFixed(2)
            }
            
            return `
                <div name="customOrder" value="${customOrder.id}">Order #${customOrder.id} cost $${orderPrice}</div>
            `
        }
    )

    customOrdersHTML += divStringArray.join("")
    return customOrdersHTML
}