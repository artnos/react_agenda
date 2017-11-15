import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetch_agenda  } from "../actions";
import Section from "./Section";
import _ from 'lodash';

class Agenda extends Component {
    componentDidMount() {
        const {fetch_agenda} = this.props;
        fetch_agenda();
    }

    render() {
        const {agenda} = this.props;
        return (
            <div className="Agenda">
                 <h2>Agenda</h2>
                {
                    agenda === null ? 'Loading..' : (
                        <ul id="Agenda">
                            {
                                // agenda.map(a => {
                                //     console.log(a);
                                //     const {body, title} = a;
                                //     return <div key={title}><strong>{title}</strong><p>{body}</p></div>
                                // })
                                _.map(agenda,function(s,key){
                                    return   <Section key={key} section={s} id={key} />
                                })
                            }
                        </ul>
                    )
                }




            </div>
        );
    }
}


function mapStateToProps(state) {
     return {
        agenda: state.agenda
    }
}

export default connect(mapStateToProps, {fetch_agenda})(Agenda);

////



