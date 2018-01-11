const initialState = {
    categoryList: [],
    selectCategory:[],
    goodsList:[]
};

function productList(state = initialState, action) {
    switch (action.type) {
        case 'productList':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default productList;
