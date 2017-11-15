import {DEFAULT_LIST_ITEM} from "../actions/types";

export default function (state = null, action) {
    switch (action.type) {
        case  DEFAULT_LIST_ITEM:
            return action.payload;

    }
    return state
}

