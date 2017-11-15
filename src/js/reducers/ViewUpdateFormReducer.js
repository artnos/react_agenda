
import {
    FETCH_CHILDREN, HIDE_CONTROLS, HIDE_UPDATE_SECTION_FORM, SHOW_LIST, SHOW_UPDATE_SECTION_FORM,
    UPDATE_SECTION
} from "../actions/types";

export default function (state = null, action) {
    switch (action.type) {
        case SHOW_UPDATE_SECTION_FORM:
            return action.payload;
        case HIDE_UPDATE_SECTION_FORM:
        case UPDATE_SECTION:
        case FETCH_CHILDREN:
        case SHOW_LIST:
        case HIDE_CONTROLS:
            return null;

    }
    return state;
}


