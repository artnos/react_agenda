import {
    ADD_ITEM_LIST_SAVE_SUCCESS, ADD_ITEM_SAVE_SUCCESS, CLEAR_SYSTEM_MESSAGE, DELETE_SECTION, LOGIN, LOGOUT,
    RESET_AGENDA,
    UPDATE_SECTION
} from "../actions/types";

export default function (state = {active:false,message: ''}, action) {

    switch (action.type){
        case LOGIN:
            //console.log(action);
            state = {
                active: true,
                message : 'Success ' + action.payload
            };
            return {...state};
        case UPDATE_SECTION:
            state.active = true;
            state.message = 'Section Updated';
            return {...state};
        case ADD_ITEM_LIST_SAVE_SUCCESS :
        case ADD_ITEM_SAVE_SUCCESS:
            state.active = true;
            state.message = 'Section Added';
            return {...state};
        case DELETE_SECTION:
            state.active = true;
            state.message = 'Deleted';
            return {...state};
        case RESET_AGENDA:
            state.active = true;
            state.message = 'Reset Agenda';
            return {...state};
        case LOGOUT:
            state = {
                active: true,
                message : 'Logged Out'
            };
            return {...state};
        case CLEAR_SYSTEM_MESSAGE:
            state.active = false;
            return {...state};


    }

    return state;
}