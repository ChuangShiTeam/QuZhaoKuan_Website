const initialState = {
    navList: [],
    categoryList: []
};

function product(state = initialState, action) {
    switch (action.type) {
        case 'index':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default product;