import {CHECK_AUTH} from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case CHECK_AUTH:
            return action.payload
    }
    return state;
}