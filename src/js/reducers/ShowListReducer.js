import {FETCH_CHILDREN, HIDE_LIST, HIDE_UPDATE_SECTION_FORM, SET_ACTIVE_UPDATE_FORM, SHOW_LIST} from "../actions/types";

export default function (state = null, action) {
    switch (action.type) {
        case SHOW_LIST:
            return action.payload;
        case HIDE_UPDATE_SECTION_FORM:
        case HIDE_LIST:
            return null;
        case FETCH_CHILDREN:
            return action.parent_id

    }

    return state;
}