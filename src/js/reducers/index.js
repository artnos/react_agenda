import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import UserReducer from "./UserReducer";
import {loginModalReducer, deleteModalReducer, addSectionModalReducer} from "./ModalReducer";
import {agendaReducer, listItemsReducer} from "./DataReducers";

import UpdateFormReducer from './UpdateFormReducer';
import ViewUpdateFormReducer from "./ViewUpdateFormReducer";
import ViewAddChildFormReducer from "./ViewAddChildFormReducer";
import ShowListReducer from "./ShowListReducer";
import {
    ADD_ITEM_LIST_SAVE_SUCCESS, ADD_ITEM_SAVE_SUCCESS, DEFAULT_LIST_ITEM, LOGIN_ERROR
} from "../actions/types";
import {UIReducer} from "./UIReducer";
import SystemMessageReducer from "./SystemMessageReducer";


const rootReducer = combineReducers({
    form: formReducer.plugin({
        AddSectionForm: (state, action) => { // <------ 'AddSectionForm' is name of form given to reduxForm()
            switch(action.type) {
                case ADD_ITEM_SAVE_SUCCESS:
                    let newState = {
                        values: {
                            title: '',
                            body: '',
                            datetime: ''
                        },
                        fields: {},
                        anyTouched: false,

                    }
                    return {...state,...newState};
                default:
                    return state;
            }
        },
        AddChildSectionForm: (state, action) => {
            switch(action.type) {
                case ADD_ITEM_LIST_SAVE_SUCCESS:
                    let newState = {
                        values: {
                            title: '',
                            body: '',
                            hour: action.payload.hour , //convert 24 hr to 12 hr
                            min: action.payload.min ,
                            ampm: action.payload.ampm ,
                            group: action.payload.group ,
                            type: action.payload.type ,
                        },
                        fields: {},
                        anyTouched: false,
                    }
                    return {...state,...newState};
                case DEFAULT_LIST_ITEM:
                    return {...state,...action.payload};
                default:
                    return state;
            }
        },
        LoginForm: (state, action) => {
            switch(action.type){
                case LOGIN_ERROR:
                    let newState = {
                        syncErrors: {
                            password: "email/password incorrect"
                        }
                    }
                    return {...state,...newState};

            }
            return state;
        }


    }),
    agenda: agendaReducer, //data
    agendaChildren: listItemsReducer, //data

    user: UserReducer, //auth
    loginModal: loginModalReducer,
    deleteModal: deleteModalReducer,
    addSectionModal: addSectionModalReducer,
    controls: UIReducer,
    systemMessage: SystemMessageReducer,
    updateFormDefaultValues : UpdateFormReducer,
    activeChildren: ShowListReducer,
    activeUpdateForm: ViewUpdateFormReducer, //this doubles as the delete key
    activeAddChildForm:  ViewAddChildFormReducer
});

export default rootReducer;


