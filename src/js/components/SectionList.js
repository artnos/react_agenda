import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Moment from 'moment';
import {delete_section} from '../actions/index'
import {CSSTransitionGroup} from "react-transition-group";

class SectionList extends Component {
    constructor(props){
        super(props);
    }


    renderList = (data) => {
        if(_.isEmpty(data)){
            return <div className="red">Empty</div>;
        }

        const {delete_section, controls} = this.props;
        return _.map(data,function(d,key){

            return <li key={key} id={key} className={d.type} day={Moment(d.datetime).format('M_D_YY')}
            >
                <span className="col1">
                    <strong>{Moment(d.datetime).format('h:mm')}<span
                        className="small-caps">{Moment(d.datetime).format('A')}</span></strong><br/>


                </span>
                <span className="col2">

                     <h4>{d.title}</h4>
                    <p>{d.body}</p>
                </span>

                {controls?
                <button
                    onClick={() => delete_section(key)}
                    className="btn btn-xs btn-danger pull-right">
                    <span className="glyphicon glyphicon-trash"></span>
                </button>:''}
            </li>;
        })
    }

    render() {
        const {data} = this.props;
        const transitionOption = {
            transitionName: "fade",
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 500

        }
        return (
            <ul className={`timelist `}>
                <CSSTransitionGroup {...transitionOption}>
                {this.renderList(data)}
                </CSSTransitionGroup>
            </ul>
        );
    }
}


function mapStateToProps(state){
    return {
        controls: state.controls
    }
}

export default connect(mapStateToProps,{delete_section})(SectionList);
