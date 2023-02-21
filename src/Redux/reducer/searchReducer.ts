import { SEARCH } from "../actions/searchActions";

const searchReducer = (state:any = "", action:any) => {
    switch (action.type) {
        case SEARCH:
            return action.payload.query;
        default:
            return state;
    }
};

export default searchReducer;