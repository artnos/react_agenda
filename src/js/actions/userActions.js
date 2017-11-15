import {firebase, firebaseAuth, firebase_logout, firebase_login} from '../utils/firebase';
import {CHECK_AUTH, LOGIN, LOGIN_ERROR, LOGOUT} from "./types";

export function firebaseCheckAuth() {
    return dispatch => {
        firebaseAuth().onAuthStateChanged(user => {
            console.log('checkAuth');
            dispatch({
                type: CHECK_AUTH,
                payload: user
            });

        })
    };
}


export function login(email, password) {
    return dispatch => {
        firebase_login(email, password).then((response) => {
            //console.log(response.email);

            dispatch({type:LOGIN, payload: response.email })
        }).catch((error) => {
            //console.log(error.message);
            dispatch({
                type:LOGIN_ERROR,
                payload: error.message
            })
        })

    }
}
export function logout() {
    return dispatch => {
        firebase_logout();

        dispatch({
            type: LOGOUT
        })
    }
}