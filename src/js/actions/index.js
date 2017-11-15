import {firebase, agendaRef} from '../utils/firebase';
import Moment from "moment";
import {
    FETCH_AGENDA, FETCH_CHILDREN, ADD_ITEM_LIST_SAVE_SUCCESS, UPDATE_SECTION, DELETE_SECTION,
    SET_ACTIVE_UPDATE_FORM,
    DEFAULT_LIST_ITEM, SHOW_LIST, TOGGLE_CONTROLS, ADD_ITEM_SAVE_SUCCESS, LOGOUT,
    HIDE_LIST, SHOW_CONTROLS, HIDE_CONTROLS, RESET_AGENDA, CLEAR_SYSTEM_MESSAGE
} from "./types";




//Agenda DATA
export function fetch_agenda() {
    return dispatch => {
        agendaRef.orderByChild('datetime').on('value', snapshot => {
            let data = {};
            snapshot.forEach(function(child) {

                if( !('parent' in child.val()) ){
                    data[child.key] = child.val();
                }

            }.bind(this));
            //console.log(data);
            dispatch({
                type: FETCH_AGENDA,
                //payload: snapshot.val()
                payload: data
            });
        });
    };
}



export function fetch_agenda_children(parent_id) {
    return dispatch => {
        agendaRef.orderByChild('datetime').on('value', snapshot => {
            let data = {};

            snapshot.forEach(function(child) {
                if(child.val().parent === parent_id){
                    data[child.key] = child.val();
                }
            }.bind(this));
            //console.log(data);
            dispatch({
                type: FETCH_CHILDREN,
                payload: data,
                parent_id: parent_id
            });
        });
    };
}


//SECTION CRUD

/*
-Kv7k2jH5XHVZA8-FPjP
     body:  "Lorem ipsum dolor sit amet, consectetur adipisc..."
     datetime:  "2017-09-02T00:00:00-05:00"
     title:  "Day 2 Meet Abraham Lincoln"



-Kv7k2jHsdsd-FPjP
     body:  "Lorem ipsum dolor sit amet, consectetur adipisc..."
     datetime:  "2017-09-02T00:00:00-05:00"
     title:  "Day 2 Meet Abraham Lincoln"
     parent: "-Kv7k2jH5XHVZA8-FPjP"




* */
export function resetAgenda() {

    return dispatch => {
        const day1 =  agendaRef.push().key;
        const day2 =  agendaRef.push().key;
        const day3 =  agendaRef.push().key;


        agendaRef.set({
            [day1]: {
                    "body" : "Satellite programs offer sponsors the opportunity to provide professional attendees with comprehensive insights into important interventional topics and issues facing today's interventional specialists.",
                    "datetime" : "2017-03-01T00:00:00-05:00",
                    "title" : "Day 1 Satellite Programs"
            },
            [day2] : {
                "body" : "Satellite programs offer sponsors the opportunity to provide professional attendees with comprehensive insights into important interventional topics and issues facing today's interventional specialists.",
                "datetime" : "2017-03-02T00:00:00-05:00",
                "title" : "Day 2 Satellite Programs"
            },
            [day3] : {
                "body" : "Satellite programs offer sponsors the opportunity to provide professional attendees with comprehensive insights into important interventional topics and issues facing today's interventional specialists.",
                "datetime" : "2017-03-03T00:00:00-05:00",
                "title" : "Day 3 Satellite Programs"
            },
            "-Kwafq1aC-CU7w4nWJ2u" : {
                "body" : "Rita Birchard",
                "datetime" : "2017-03-01T08:00:00-05:00",
                "parent" : day1,
                "title" : "Welcome and Introduction",
                "type" : "header"
            },
            "-Kwagph46bG_yWhIUYnC" : {
                "datetime" : "2017-03-01T08:15:00-05:00",
                "group" : 1,
                "parent" : day1,
                "title" : "Evolution and PARTNER Data Overview",
                "type" : "default"
            },
            "-Kwagw_CmDCx1scGqhUh" : {
                "datetime" : "2017-03-01T09:15:00-05:00",
                "group" : 1,
                "parent" : day1,
                "title" : "Valve Clinic Structure and Patient Screening",
                "type" : "default"
            },
            "-KwagywBYnRI297sgNsy" : {
                "datetime" : "2017-03-01T09:45:00-05:00",
                "group" : 1,
                "parent" : day1,
                "title" : "Break",
                "type" : "header"
            },
            "-Kwah36YpIslrDTxa_EQ" : {
                "datetime" : "2017-03-01T10:00:00-05:00",
                "group" : 1,
                "parent" : day1,
                "title" : "Advanced Imaging ",
                "type" : "default"
            },
            "-KwahD10NS2_ZOrmCao2" : {
                "datetime" : "2017-03-01T11:00:00-05:00",
                "group" : 1,
                "parent" : day1,
                "title" : "Transfemoral Procedure: Device Overview, ",
                "type" : "default"
            },
            "-KwahH-fh9gaJ7kLq7qs" : {
                "datetime" : "2017-03-01T12:00:00-05:00",
                "group" : 1,
                "parent" : day1,
                "title" : "Break and Box Lunch",
                "type" : "header"
            },
            "-KwahONpi1EvkzpAtwTI" : {
                "body" : "Ann Thompson",
                "datetime" : "2017-03-01T12:30:00-05:00",
                "group" : 1,
                "parent" : day1,
                "title" : "Don’t Dismiss the Importance of Economics",
                "type" : "default"
            },
            "-KwahVZ9SZolnzW189Md" : {
                "datetime" : "2017-03-01T13:15:00-05:00",
                "group" : 1,
                "parent" : day1,
                "title" : "Case Study Panel",
                "type" : "default"
            },
            "-Kwahb-MIRsSkZsn71to" : {
                "datetime" : "2017-03-01T14:45:00-05:00",
                "group" : 1,
                "parent" : day1,
                "title" : "Break",
                "type" : "header"
            },
            "-KwahejQPly6i-qnKvm0" : {
                "datetime" : "2017-03-01T15:00:00-05:00",
                "group" : 1,
                "parent" : day1,
                "title" : "Panel Discussion",
                "type" : "default"
            },
            "-Kwahkv6F6zGBoyu1ZUH" : {
                "datetime" : "2017-03-01T16:00:00-05:00",
                "group" : 1,
                "parent" : day1,
                "title" : "Hands-on Workshops ",
                "type" : "default"
            },
            "-Kwahkv6F6zGBoyuGZUH" : {
                "body" : "Room 712",
                "datetime" : "2017-03-01T16:15:00-05:00",
                "group" : 1,
                "parent" : day1,
                "title" : "Group 2 ",
                "type" : "indent"
            },
            "-Kwahkv6F6zGBGyu1ZUH" : {
                "body" : "Room 715",
                "datetime" : "2017-03-01T16:15:00-05:00",
                "group" : 1,
                "parent" : day1,
                "title" : "Group 1",
                "type" : "indent"
            },
            "-Kwahkv6F8zGBGyu1ZUH" : {
                "datetime" : "2017-03-01T17:00:00-05:00",
                "group" : 1,
                "parent" : day1,
                "title" : "Wrap Up",
                "type" : "header"
            },
            "-Kwafq1aC-CU7w4nWJ2G" : {
                "body" : "Rita Birchard",
                "datetime" : "2017-03-02T08:00:00-05:00",
                "parent" : day2,
                "title" : "Welcome and Introduction",
                "type" : "header"
            },
            "-Kwagph46bG_yWhIUYnZ" : {
                "datetime" : "2017-03-01T08:15:00-05:00",
                "group" : 1,
                "parent" : day2,
                "title" : "Evolution and PARTNER Data Overview",
                "type" : "default"
            },
            "-Kwafq1aC-CU7w4nWJ2Z" : {
                "body" : "Rita Birchard",
                "datetime" : "2017-03-03T08:00:00-05:00",
                "parent" : day3,
                "title" : "Welcome and Introduction",
                "type" : "header"
            },
            "-Kwagph46bG_yWhIUYnB" : {
                "datetime" : "2017-03-01T08:15:00-05:00",
                "group" : 1,
                "parent" : day3,
                "title" : "Evolution and PARTNER Data Overview",
                "type" : "default"
            },



        });


        dispatch({
            type: RESET_AGENDA
        })
    }
}

export function add_section(data){
    console.log(data);

    data.datetime = Moment(data.datetime).format(); //sanitize date
    return dispatch => {
        const sectionKey =  agendaRef.push().key;
        agendaRef.child(   sectionKey  ).set(data);
        dispatch({
            type: ADD_ITEM_SAVE_SUCCESS,
            //payload: true
        })

    }
}

export function update_section(key, data){

    data.datetime = Moment(data.datetime).format(); //sanitize date

    return dispatch => {
        agendaRef.child(key).update({
            "title": data.title,
            "body": data.body,
            "datetime": data.datetime,
        });
        dispatch({
            type: UPDATE_SECTION
        })
    }
}

export function delete_section(key) {

    return  dispatch => {
        agendaRef.child(key).remove();

        agendaRef.on('value', snapshot => {

            snapshot.forEach(function(child) {
                if(child.val().parent === key){
                    agendaRef.child(child.key).remove();
                }
            }.bind(this));
            //console.log(data);

        });
        dispatch({
            type: DELETE_SECTION
        })
    }

}

//END SECTION CRUD


// LIST ITEMS CRUD
export function add_list_item(data){
    let formatDatetime;
    let time = Moment(data.hour + ":" + data.min + " " + data.ampm, ["LT"]).format("HH:mm:00");
    formatDatetime = data.date + "T" + time;
    /*
                hour: 1,
                min: 30,
                ampm: 'PM',
                group: 2
    */
    let patchedData = {
        ...data,
        datetime: Moment(formatDatetime).format() //sanitize date
    }
    delete patchedData.date;
    delete patchedData.hour;
    delete patchedData.min;
    delete patchedData.ampm;

    //"2017-03-28T09:51:03-05:00"
    data.datetime = Moment().format(); //sanitize date
    return dispatch => {
        const sectionKey =  agendaRef.push().key;
        agendaRef.child(   sectionKey  ).set(patchedData);


        dispatch({
            type: ADD_ITEM_LIST_SAVE_SUCCESS,
            payload: patchedData
        })
    }
}







export function showControls() {
    return {
        type: SHOW_CONTROLS,
    }
}

export function hideControls() {
    return {
        type: HIDE_CONTROLS,
    }
}



export function show_list(id) {
    return {
        type: SHOW_LIST,
        payload: id
    }
}

export function hide_list() {
    return {
        type: HIDE_LIST
    }
}

export function clearSystemMessage() {
    return {
        type: CLEAR_SYSTEM_MESSAGE
    }
}