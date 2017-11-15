import 'react-widgets/lib/scss/react-widgets.scss';

import React from 'react';
import Agenda from "./components/Agenda";
import {connect} from 'react-redux';

import Login from "./components/forms/Login";
import AddSection from "./components/forms/AddSection";
import Modal from "./components/Modal";
import ComfirmDelete from "./components/ComfirmDelete";


import {clearSystemMessage, hideControls, resetAgenda, showControls, toggleControls} from "./actions/index";
import {firebaseCheckAuth, logout} from "./actions/userActions";
import {
    hideAddSectionModal, hideDeleteModal, hideLoginModal, showAddSectionModal,
    showLoginModal
} from "./actions/modalActions";
import SystemMessage from "./components/SystemMessage";
import {CSSTransitionGroup} from "react-transition-group";
import  _ from "lodash";

//TODO: app is getting heavy seperate to a header section
//TODO: add number selector type widget
//TODO: fix z-index on systemMEssage

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            modal: false
        }
    }

    componentWillMount() {
        const { firebaseCheckAuth } = this.props;
        firebaseCheckAuth();
    }

    componentDidUpdate(prevProps, prevState, prevContext) {
        const { clearSystemMessage, systemMessage } = this.props;
        if(systemMessage.message != '' && systemMessage.active === true){
            console.log('delay trigger');
            _.delay(() => {
                clearSystemMessage();
            }, 2000);
        }
    }

    render(){
        //const {modal} = this.state;
        const {user, loginModal, showLoginModal,hideLoginModal, hideDeleteModal, addSectionModal, controls, hideControls, showControls, showAddSectionModal, hideAddSectionModal, deleteModal, resetAgenda, logout,systemMessage } = this.props;
        return (
            <div id="App">
                <CSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                    {systemMessage.active?<SystemMessage/>:''}
                </CSSTransitionGroup>
                <div className="container">
                <div className="row Header">
                    <div className="col-md-7">
                        {user?`${user.email}`:``}
                    </div>

                    {user?
                    <div className="col-md-4 " style={{textAlign : 'right'}}>
                        {
                            controls?<a className="btn btn-sm btn-default btn-no-hover"  onClick={()=>hideControls()}>
                                <span className="glyphicon glyphicon-dashboard"></span>
                                </a>:
                                <a className="btn btn-sm btn-gray btn-no-hover"  onClick={()=>showControls()}>
                                    <span className="glyphicon glyphicon-dashboard"></span>
                                </a>
                        }

                        <a className="btn btn-sm btn-default"  onClick={()=>resetAgenda() }>
                            <span className="glyphicon glyphicon-refresh"></span>
                        </a>

                        <a className="btn btn-sm btn-default"  onClick={()=>showAddSectionModal() }>
                          <span className="glyphicon glyphicon-plus-sign"></span>
                        </a>

                    </div>:''
                    }


                    <div className="col-md-1 pull-right"  style={{textAlign : 'right'}}>
                        {
                            user?<a className="btn btn-sm btn-gray btn-default"  onClick={e=>logout()}>
                                    <span className="glyphicon glyphicon-log-out"></span>
                                </a>:
                                <a className="btn btn-sm btn-default"  onClick={() => showLoginModal()}>
                                    <span className="glyphicon glyphicon-log-in"></span>
                                </a>
                        }
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-3 info">

                            <h4>Info</h4>
                        <p>
                            Submiting data is disabled, in this demo.  You may install it yourself to submit data into your own database. Controls should be hidden by default unless logged in. They are visible just for the demo.
                        </p>
                    </div>
                    <div className="col-md-7">
                        <Agenda/>
                    </div>
                </div>
                    {loginModal == true?<Modal closeModal={ () => hideLoginModal() }><Login/></Modal>:''}
                    {deleteModal == true?<Modal className="warning-modal" closeModal={ () => hideDeleteModal() }><ComfirmDelete/></Modal>:''}
                    {addSectionModal == true?<Modal closeModal={ () => hideAddSectionModal() } ><AddSection/></Modal>:''}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    //console.log('mapStateToProps');
    //console.log(state.user);
    
    return {
        user: state.user,
        agenda: state.agenda,
        loginModal: state.loginModal,
        deleteModal: state.deleteModal,
        addSectionModal: state.addSectionModal,
        controls: state.controls,
        systemMessage: state.systemMessage

    }
}

export default connect(mapStateToProps,
    { firebaseCheckAuth, showLoginModal,hideLoginModal, hideDeleteModal, hideControls, showControls, showAddSectionModal, hideAddSectionModal, logout,resetAgenda, clearSystemMessage })(App)



