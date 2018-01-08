const initialState = {
    categoryList: [],
    selectCategory:[],
    goodsList:[]
};

function newStyle(state = initialState, action) {
    switch (action.type) {
        case 'newStyle':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default newStyle;