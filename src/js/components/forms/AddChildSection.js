import React, {Component} from 'react';
import { Field, reduxForm } from "redux-form";
import {connect} from 'react-redux';
import _ from 'lodash';
import {add_list_item} from "../../actions/index";
import {renderField, renderTextarea, renderSelect} from "./FormFields";
import {required} from "./Validations";
import Moment from "moment";

const hours = _.range(1,13);
const minutes = _.range(60);
const ampm = {am: 'AM', pm: 'PM'};
const types = ['default','header','indent'];
const groups = {0:1,1:2,2:3,3:4};

class AddChildSection extends Component {
    constructor(props){
        super(props);
    }

    onSubmit = (values) => {
        const { add_list_item, id, date} = this.props;
        values.parent = id;
        values.date = date;
        
        add_list_item(values)
    };

    componentDidMount() {
        //console.log('add child setion rendered');
        
    }

    componentDidUpdate(prevProps, prevState, prevContext) {
        //console.log('component did update');
        //console.log(prevProps);
    }




    render() {
        const { handleSubmit } = this.props; //handleSubmit is a props injected from redux
        // console.log('render');

        return (
            <div className="AddChildSection">
                <hr/>
                <h4>Add Child Section</h4>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <Field
                        label="title"
                        name="title"
                        type="text"
                        validate={[ required ]}

                        component={renderField}
                    />
                    <Field
                        label="body"
                        name="body"
                        type="text"
                        component={renderTextarea}
                    />
                    <h4>Start Time</h4>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-4">
                                    <Field name="hour" label="Hour" component={renderSelect}  validate={[ required ]}
                                           data={hours}/>
                                </div>
                                <div className="col-md-4">
                                    <Field name="min" label="Minutes" component={renderSelect} validate={[ required ]}
                                           data={minutes}/>
                                </div>
                                <div className="col-md-4">
                                    <Field name="ampm" label="AMPM" component={renderSelect} validate={[ required ]}

                                           data={ampm}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <Field name="type" label="Type" component={renderSelect}
                                           validate={[ required ]}
                                           data={types}/>
                                </div>

                                <div className="col-md-6">
                                    <Field name="group" label="Group" component={renderSelect}
                                           validate={[ required ]}
                                           data={groups}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-default pull-right">Add List Item</button>

                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    //console.log('agenda children');
    
    let lastChild = state.agendaChildren[Object.keys(state.agendaChildren)[Object.keys(state.agendaChildren).length - 1]];
    if(lastChild === undefined){
        lastChild = {
            datetime: Moment().format(),
            type: 'default'
        }
    }

    //console.log(lastChild);
    //console.log(Moment(lastChild.datetime).format('h'));
    //console.log(Moment(lastChild.datetime).format('mm'));
    //console.log(Moment(lastChild.datetime).format('A'));



    
    return {
        agendaChildren: state.agendaChildren,
        initialValues :
            {
                hour: Moment(lastChild.datetime).format('h'),
                min: Moment(lastChild.datetime).format('mm'),
                ampm: Moment(lastChild.datetime).format('A'),
                group: 1,
                type: lastChild.type
            }
    }
}


export default connect( mapStateToProps, { add_list_item} )(
    reduxForm({
        enableReinitialize : true,
        form: "AddChildSectionForm"
    })(AddChildSection)
);
