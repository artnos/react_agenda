import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCibBxi_3sqHF_cQCQgSaXzwuNvgFQvmwI",
    authDomain: "agenda-d9e3a.firebaseapp.com",
    databaseURL: "https://agenda-d9e3a.firebaseio.com",
}

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const agendaRef = ref.child('Agenda');
export const firebaseAuth = firebase.auth;
//
// // references to out children in our database
// export const headToHeadsRef = ref.child('headToHeads');
//
// export function auth (email, pw) {
//     return firebaseAuth().createUserWithEmailAndPassword(email, pw)
//         .then(saveUser)
// }
//
export function firebase_login (email, pw) {
    return firebaseAuth().signInWithEmailAndPassword(email, pw)
}
//
export function firebase_logout () {
    return firebaseAuth().signOut()
}
//
// export function resetPassword (email) {
//     return firebaseAuth().sendPasswordResetEmail(email)
// }
//
// export function off () {
//     return ref.off()
// }
//
// export function saveUser (user) {
//     return ref.child(`users/${user.uid}/info`)
//         .set({
//             email: user.email,
//             uid: user.uid
//         })
//         .then(() => user)
// }