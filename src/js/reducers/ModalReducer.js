import {
    ADD_ITEM_SAVE_SUCCESS,
    DELETE_SECTION, HIDE_ADD_SECTION_FORM_MODAL, HIDE_DELETE_MODAL, HIDE_LOGIN_MODAL, LOGIN,
    SHOW_ADD_SECTION_FORM_MODAL, SHOW_DELETE_MODAL,
    SHOW_LOGIN_MODAL

} from "../actions/types";

export function loginModalReducer (state = false, action) {

    switch (action.type) {
        case SHOW_LOGIN_MODAL:
            return true;
        case LOGIN:
        case HIDE_LOGIN_MODAL:
            return false;
    }
    return state;
}

export function deleteModalReducer (state = false, action) {
    switch (action.type) {
        case SHOW_DELETE_MODAL:
            return true;
        case DELETE_SECTION:
        case HIDE_DELETE_MODAL:
            return false;
    }
    return state;
}

export function addSectionModalReducer(state = null, action) {

    switch (action.type) {
        case SHOW_ADD_SECTION_FORM_MODAL:
            return true;
        case HIDE_ADD_SECTION_FORM_MODAL:
        case ADD_ITEM_SAVE_SUCCESS:
            return false;
    }


    return state;
}




