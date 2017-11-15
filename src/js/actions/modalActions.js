import {
    HIDE_ADD_SECTION_FORM_MODAL, HIDE_DELETE_MODAL, HIDE_LOGIN_MODAL, SHOW_ADD_SECTION_FORM_MODAL, SHOW_DELETE_MODAL,
    SHOW_LOGIN_MODAL
} from "./types";

export function showLoginModal(){
    return {
        type: SHOW_LOGIN_MODAL
    }
}

export function hideLoginModal(){
    return {
        type: HIDE_LOGIN_MODAL
    }
}

export function showDeleteModal(){
    return {
        type: SHOW_DELETE_MODAL,
    }
}

export function hideDeleteModal(){
    return {
        type: HIDE_DELETE_MODAL,
    }
}

export function showAddSectionModal() {
    return {
        type: SHOW_ADD_SECTION_FORM_MODAL
    }
}
export function hideAddSectionModal() {
    return {
        type: HIDE_ADD_SECTION_FORM_MODAL
    }
}
