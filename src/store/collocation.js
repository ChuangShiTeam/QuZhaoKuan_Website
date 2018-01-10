const initialState = {
    categoryList: [],
    selectCategory:[],
    goodsList:[]
};

function collocation(state = initialState, action) {
    switch (action.type) {
        case 'collocation':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default collocation;
