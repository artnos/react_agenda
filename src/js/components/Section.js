import React, {Component} from 'react';
import {connect} from 'react-redux';


import Moment from 'moment';
import UpdateSection from "./forms/UpdateSection";
import AddChildSection from "./forms/AddChildSection";

import SectionList from "./SectionList";
import {CSSTransitionGroup} from "react-transition-group";

import {show_list, fetch_agenda_children,
    hide_list
} from "../actions/index";
import {showListItemForm, hideListItemForm, showUpdateSectionForm, hideUpdateSectionForm} from "../actions/formActions";


class Section extends Component {
    constructor(props) {
        super(props);
    }

    renderControls = () => { //pencil
        const {id, showUpdateSectionForm,hideUpdateSectionForm, activeUpdateForm, controls} = this.props;
        if(!controls){return false};
        if (id === activeUpdateForm) {
            return <button
                onClick={() => hideUpdateSectionForm()}
                className="btn btn-sm btn-warning pull-right">
                <span className="glyphicon glyphicon-remove"/>
            </button>
        } else {
            return <button
                onClick={() => showUpdateSectionForm(id)}
                className="btn btn-sm btn-warning pull-right">
                <span className="glyphicon glyphicon-pencil"/>
            </button>
        }
    };

    renderButton = () => { //plus
        const {id, activeChildForm, controls, hideListItemForm, showListItemForm } = this.props;
        //console.log(controls);

        if(!controls){return false};
        if(id === activeChildForm ){
            return  <button
                onClick={ () => hideListItemForm()}
                className="btn btn-xs btn-success pull-right">
                <span className="glyphicon glyphicon-minus"/>
            </button>;
        } else {
            return <button
                onClick={ () => showListItemForm(id)}
                className="btn btn-xs btn-success pull-right">
                <span className="glyphicon glyphicon-plus"/>
            </button>;
        }

    }

    toggleList = () => {
        const {id, fetch_agenda_children, activeChildren, hide_list} = this.props;

        if (id === activeChildren) {
            hide_list();
        } else {
            fetch_agenda_children(id);
        }
    };



    render() {
        const {title, body,datetime} = this.props.section;
        const {id,activeUpdateForm,activeChildForm, activeChildren,  agendaChildren } = this.props;

        return (
            <li datatime={datetime} id={id}  className={`${id === activeChildren?'active':''}`}>
                { this.renderControls() }
                <small>{Moment(datetime).format('MMMM DD, YYYY')} </small><br/>
                <h3><span className="click"  onClick={this.toggleList}>{title}</span></h3>
                <p>{body}</p>


                { id === activeUpdateForm ? <UpdateSection id={id} data={this.props.section} /> : '' }
                <CSSTransitionGroup
                    transitionName="slide"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                { id === activeChildren ? (

                    <div>
                        <SectionList id={id} data={agendaChildren} />
                        {this.renderButton()}
                    </div>

                ) : '' }
                </CSSTransitionGroup>

                <span className="clearfix"/>

                { id === activeChildForm ? <AddChildSection id={id} date={Moment(datetime).format('Y-MM-DD')} /> : '' }
                <span className="clearfix"/>


            </li>
        );
    }


}

function mapStateToProps(state){

    return {
        activeUpdateForm : state.activeUpdateForm,
        activeChildForm: state.activeAddChildForm,
        agendaChildren: state.agendaChildren,
        activeChildren: state.activeChildren,
        controls: state.controls
    }
}


export default connect(  mapStateToProps, {
    showUpdateSectionForm, hideUpdateSectionForm , show_list, fetch_agenda_children, hide_list, showListItemForm, hideListItemForm  })(Section);




