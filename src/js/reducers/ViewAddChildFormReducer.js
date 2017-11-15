import {
    HIDE_CONTROLS,
    HIDE_LIST_ITEM_FORM, HIDE_UPDATE_SECTION_FORM, SHOW_LIST_ITEM_FORM
} from "../actions/types";

export default function (state = null, action) {
    switch (action.type) {
        case SHOW_LIST_ITEM_FORM:
            return action.payload;
        case HIDE_LIST_ITEM_FORM:
        case HIDE_UPDATE_SECTION_FORM:
        case HIDE_CONTROLS:
            return null;
    }
    return state;
}


