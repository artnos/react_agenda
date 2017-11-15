import React, {Component} from 'react';
import { Field, reduxForm } from "redux-form";
import {connect} from 'react-redux';

import {  add_section } from "../../actions/index";
import {renderDateTimePicker, renderField, renderTextarea} from "./FormFields";
import {required} from "./Validations";
import SubmissionError from "redux-form/es/SubmissionError";




class AddSection extends Component {
    constructor(props){
        super(props);
    }

    onSubmit = (values) => {
        const {add_section} = this.props;
        // if (!['john', 'paul', 'george', 'ringo'].includes(values.username)) {
        //     throw new SubmissionError({
        //         username: 'User does not exist',
        //         _error: 'Login failed!'
        //     })
        // } else if (values.password !== 'redux-form') {
        //     throw new SubmissionError({
        //         password: 'Wrong password',
        //         _error: 'Login failed!'
        //     })


        add_section(values)
    }


    render() {
        const { handleSubmit } = this.props; //handleSubmit is a props injected from redux
        return (
            <div className="AddSection">
                        <h2>Add Section</h2>
                        <form onSubmit={handleSubmit(this.onSubmit)}>
                            <Field
                                label="title"
                                name="title"
                                component={renderField}
                                type="text"
                                validate={[ required ]}
                            />
                            <Field
                                label="body"
                                name="body"
                                component={renderTextarea}
                                type="text"
                            />
                            <Field
                                    label="Date"
                                    name="datetime"
                                    showTime={true}
                                    component={renderDateTimePicker}
                                    validate={[ required ]}
                            />

                            <div className="form-group">
                                <button type="submit" className="btn btn-default pull-right">Add Section</button>
                            </div>
                            <div className="clearfix"></div>
                        </form>
            </div>
        );
    }
}




function mapStateToProps(state) {
    return {
        null: null
    }
}


export default connect( mapStateToProps, { add_section} )(
    reduxForm({
        form: "AddSectionForm",
    })(AddSection)
);
