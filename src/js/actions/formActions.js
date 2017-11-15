import {
    DEFAULT_LIST_ITEM, HIDE_LIST_ITEM_FORM, HIDE_UPDATE_SECTION_FORM, SHOW_LIST_ITEM_FORM,
    SHOW_UPDATE_SECTION_FORM
} from "./types";

export function showListItemForm(key){
    return {
        type: SHOW_LIST_ITEM_FORM,
        payload: key
    }
}

export function hideListItemForm(){
    return {
        type: HIDE_LIST_ITEM_FORM
    }
}

//Loading default of the update section form
export function load_default (data){
    return  {
        type: DEFAULT_LIST_ITEM,
        payload: data
    }
}


export function showUpdateSectionForm(key){
    return {
        type: SHOW_UPDATE_SECTION_FORM,
        payload: key
    }
}

export function hideUpdateSectionForm(){
    return {
        type: HIDE_UPDATE_SECTION_FORM
    }
}