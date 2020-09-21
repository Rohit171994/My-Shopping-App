export function addToCart(product, orignalCart) {
    const cart = { ...orignalCart };
    const { id, ...rest } = product;
    if (cart[id]) {
        const { quantity } = cart[id];
        cart[id] = {
            id,
            ...cart[id],
            quantity: quantity + 1
        }
    } else {
        cart[id] = {
            id,
            ...rest,
            quantity: 1
        }
    }
    return cart;
}


export function removeFromCart(product, orignalCart) {
    const cart = { ...orignalCart };
    const { id } = product;
    if (cart[id]) {
        const { quantity, ...rest } = cart[id];
        if (quantity > 1) {
            cart[id] = {
                id,
                ...rest,
                quantity: quantity - 1
            }
        } else {
            delete cart[id];
        }

    }
    return cart;
}

export function totalRemove(product, orignalCart) {
    const cart = { ...orignalCart };
    const { id } = product;
    if (cart[id]) {
        delete cart[id];
    }
    return cart;
}