import {FETCH_AGENDA, FETCH_CHILDREN} from "../actions/types";

export function agendaReducer (state = null, action) {
        switch (action.type) {
            case FETCH_AGENDA:
                return action.payload
        }
        return state;

}

export function listItemsReducer (state = null, action) {
    switch (action.type) {
        case FETCH_CHILDREN:
            return action.payload
    }
    return state;
}

