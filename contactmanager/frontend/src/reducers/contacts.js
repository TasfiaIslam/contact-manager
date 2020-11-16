import {GET_CONTACTS} from '../actions/types.js';

const initialState = {
    contacts: []
};

export default function(state = initialState, action){
    switch(action.types){
        case GET_CONTACTS:
            return{
                ...state,
                contacts: action.payload
            }
        default:
            return state;
    }
}