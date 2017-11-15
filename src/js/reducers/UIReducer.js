import {HIDE_CONTROLS, LOGIN, LOGOUT, SHOW_CONTROLS} from "../actions/types";

export function UIReducer (state = true, action) {
    switch (action.type) {
        case SHOW_CONTROLS:
        case LOGIN:
            return true;
        case HIDE_CONTROLS:
        case LOGOUT:
            return false;
    }
    return state;
}
