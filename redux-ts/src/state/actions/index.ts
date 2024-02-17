import { ActionType } from "../action-type";

export type Action = SearchRepositories | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction;

interface SearchRepositories {
    type: ActionType.SEARCH_REPOSITORIES
    payload?: string[] 
}

interface SearchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS
    payload: string[]
}

interface SearchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_FAILED
    payload: string
}