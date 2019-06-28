import { 
    BEGIN_ADD_FRIEND, 
    ADD_FRIEND_SUCCESS, 
    ADD_FRIEND_FAILURE 
} from '../actions';

const initialState = {
    friends: [],
    friendAdded: false,
    error: null
}

export default function add(state = initialState, action) {
    switch(action.type){
        case BEGIN_ADD_FRIEND:
            return {
                ...state,
            };
        case ADD_FRIEND_SUCCESS:
            return {
                ...state,
                friends: [...state.friends, ...action.payload],
                friendAdded: true,
            };
            case ADD_FRIEND_FAILURE:
                return {
                    ...state,
                    friendAdded: false,
                    error: action.payload
                };
            default:
                return state;
    }
}