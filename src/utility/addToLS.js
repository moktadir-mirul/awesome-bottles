const getCartFromLS = () => {
    const storedItems = localStorage.getItem('cart');
    if(storedItems) {
        const convertedStoredItems = JSON.parse(storedItems);
        return convertedStoredItems;
    } else {
        return [];
    }
}

const addToLS = (newItem) => {
    const cart = getCartFromLS();
    const newCart = [...cart, newItem];
    const convertedNewCart = JSON.stringify(newCart);
    localStorage.setItem('cart', convertedNewCart);
}
const removeFromCart = (bottleId) => {
    const cart = getCartFromLS();
    const newCart = cart.filter(item => item !== bottleId);
    const convertedNewCart = JSON.stringify(newCart);
    localStorage.setItem('cart', convertedNewCart)
}


export {addToLS, getCartFromLS, removeFromCart};