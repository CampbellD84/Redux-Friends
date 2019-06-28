import { 
    BEGIN_LOGIN, 
    DATA_FETCH_BEGIN, 
    DATA_FETCH_SUCCESS, 
    DATA_FETCH_FAILURE,
} from '../actions';


const initialState = {
    friends: [],
    error: null,
    dataFetching: false,
    loggingIn: false
};

export default function root(state = initialState, action) {
    switch (action.type) {
        case BEGIN_LOGIN:
            return {
                ...state,
                loggingIn: true
            };
        case DATA_FETCH_BEGIN: 
            return {
                ...state,
                error: "",
                dataFetching: true
            };
        case DATA_FETCH_SUCCESS:
            return {
                ...state,
                error: "",
                dataFetching: false,
                friends: [...state.friends, ...action.payload]
            };
        case DATA_FETCH_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};