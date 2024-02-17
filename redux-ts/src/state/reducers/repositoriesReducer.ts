import { ActionType } from "../action-type";
import { Action } from "../actions";

interface RepositoriesState {
    loading: boolean
    error: string | null
    data: string[]
}

function reducer(state: RepositoriesState, action: Action) : RepositoriesState {
    switch(action.type){
        case ActionType.SEARCH_REPOSITORIES:
            return { loading: false, error: null, data: [] };
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        case ActionType.SEARCH_REPOSITORIES_FAILED:
            return { loading: false, error: action.payload, data: [] };
        default:
            return state;
    }
}

export default reducer;