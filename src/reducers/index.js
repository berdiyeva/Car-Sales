// import {combineReducers} from 'redux';

//takes different reducers and combine into one, for seperations of concerns
// export default combineREducers ({
//     todoReducer
// })

const Features = (state, action) => {
    switch(action.type){
        case 'ADD_FEATURE':
            return state;
        case 'REMOVE_FEATURE':
            return state;
    }
}