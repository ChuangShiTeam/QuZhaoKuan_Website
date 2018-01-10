const initialState = {
    categoryList: [],
    selectCategory:[],
    goodsList:[]
};

function burstStyle(state = initialState, action) {
    switch (action.type) {
        case 'burstStyle':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default burstStyle;