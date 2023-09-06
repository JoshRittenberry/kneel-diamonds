export const getCustomOrders = async () => {
    const list = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=gemSize")
    const customOrders = await list.json()

    let customOrdersHTML = "<h2>Custom Jewelry Orders</h2>"

    const divStringArray = customOrders.map(
        (customOrder) => {
            
            let orderPrice = customOrder.metal.price + customOrder.style.price + customOrder.gemSize.price
            
            return `
                <div name="customOrder" value="${customOrder.id}">Order #${customOrder.id} cost $${orderPrice}</div>
            `
        }
    )

    customOrdersHTML += divStringArray.join("")
    return customOrdersHTML
}