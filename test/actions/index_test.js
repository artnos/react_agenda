import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { expect } from '../test_helper';

import {ADD_ITEM_LIST_SAVE_SUCCESS, ADD_ITEM_SAVE_SUCCESS, SHOW_CONTROLS} from "../../src/js/actions/types";
import {add_list_item, add_section, showControls} from "../../src/js/actions/index";
import {addSectionModalReducer} from "../../src/js/reducers/ModalReducer";



describe('actions', () => {

    describe('Toggle Controls', () => {
        it('has the correct type', () => {
            const action = showControls();
            expect(action.type).to.equal( SHOW_CONTROLS );
        });
    });


    describe('Save List Item', () => {
        it('has correct payload', () => {
            const middlewares = [thunk];
            const mockStore = configureMockStore(middlewares);
            const store = mockStore({});
            const data = {
                    ampm: "AM",
                    body: "Item Body",
                    date: "2017-10-31",
                    group: 1,
                    hour: "10",
                    min: "10",
                    parent: "-Kyv0LbdBNyu6pTtJ7co",
                    title: "Item Title",
                    type: "default",
            };

            store.dispatch( add_list_item(data) );

            const actions = store.getActions();
            expect(actions[0]).to.deep.equal({
                type: ADD_ITEM_LIST_SAVE_SUCCESS,
                payload: {
                    body: "Item Body",
                    datetime: "2017-10-31T10:10:00-04:00",
                    group: 1,
                    parent: "-Kyv0LbdBNyu6pTtJ7co",
                    title: "Item Title",
                    type: "default"
                }
            });
        })
    })


    describe('Add Section', () => {
        it('should return correct type', ()=>{
            const middlewares = [thunk];
            const mockStore = configureMockStore(middlewares);
            const store = mockStore({});
            const data = {
                body:"My test body",
                datetime:"2017-08-07T09:54:25-05:00",
                title:"My Test Title"
            };
            store.dispatch( add_section(data) )

            const actions = store.getActions()
            const expectedPayload = { type: ADD_ITEM_SAVE_SUCCESS };
            expect(actions).to.deep.equal([expectedPayload]);
        });

        it('should hide modal', done =>{
            let action = {
                type: ADD_ITEM_SAVE_SUCCESS
            };
            let newState = addSectionModalReducer(undefined, action);
            expect(newState).to.deep.equal(false);
            done();
        })

    });


});


