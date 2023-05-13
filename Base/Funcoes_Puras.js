const shoppingCart = {
    items: [
        {
            produto: { id: 1, name: 'teste'},
            quantily: 10,
        },
        {
            product: { id:2, name: 'teste2'},
            quantily: 1,
        }
    ]
};

function formatShoppingCart(shoppingCart) {
    const result = {}
    shoppingCart.user.name = `${shoppingCart.user.firstName} ${shoppingCart.user.lastName}`;

    delete shoppingCart.user.firstName;
    delete shoppingCart.user.lastName;

    shoppingCart.items.forEach((item) => {
        item.product = { id: item.product.id }
    });
    return shoppingCart;
}

console.log(formatShoppingCart(shoppingCart))