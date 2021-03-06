const initialState = {
    cartList: []
};

function shoppingCart(state = initialState, action) {
    switch (action.type) {
        case 'shoppingCart':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default shoppingCart;
