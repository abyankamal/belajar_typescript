import axios from "axios";
import { ActionType } from "../action-type";

function searchRepositories(term : string) {
    return async (dispatch: any) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES,
        });

        try {
            const { data } = await axios.get(
                "https://registry.npmjs.org/-/v1/search",
                {
                  params: {
                    text: term,
                  },
                }
              );
        
              const names = data.objects.map((result: any) => {
                return result.package.name;
              });
        
              dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: names,
              });
        }catch (err) {
            if (err instanceof Error) {
                dispatch({
                type: ActionType.SEARCH_REPOSITORIES_FAILED,
                payload: err.message,
                });
            }
        }
    }
}