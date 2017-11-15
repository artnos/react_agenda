import React, {Component} from 'react';
import { Field, reduxForm, submit } from "redux-form";
import {connect} from 'react-redux';

import {renderDateTimePicker, renderField, renderTextarea} from "./FormFields";

import { delete_section, update_section } from "../../actions/index";
import {showDeleteModal} from "../../actions/modalActions";
import {load_default} from "../../actions/formActions";


class UpdateSection extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        const {data, load_default} = this.props;
        load_default(data); //Load default fields
    }

    onSubmit = (values) => {
        const {update_section, id, setActiveUpdateForm} = this.props;
        update_section(id, values);
    }

    deleteSection = () => {
        this.props.delete_section(this.props.id);
    }


    render() {
        const { handleSubmit, id, showDeleteModal } = this.props; //handleSubmit is a props injected from redux
        //handleSubmit(this.onSubmit)
        
        return (
            <div className="EditSection">
                <hr/>
                <span className="red">Edit Mode</span>
                <div className="controls pull-right">


                    <button
                        onClick={() => showDeleteModal()}
                        className="btn btn-xs btn-danger">
                        <span className="glyphicon glyphicon-trash"></span>
                    </button>
                </div>

                <div >
                        <form onSubmit={handleSubmit(this.onSubmit)}>

                        <Field
                            label="title"
                            name="title"
                            component={renderField}
                        />
                        <Field
                            label="body"
                            name="body"
                            component={renderTextarea}
                        />

                        <Field
                            label="Date"
                            name="datetime"
                            showTime={true}
                            component={renderDateTimePicker}
                        />

                        <button type="submit" className="btn btn-default pull-right">Update</button>

                    </form>
                </div>
            </div>


        );
    }
}


function mapStateToProps(state) {
    //console.log(state.updateFormDefaultValues);

    return {
        initialValues :state.updateFormDefaultValues
    }
}

export default connect( mapStateToProps, { delete_section,load_default , update_section, showDeleteModal } )(
    reduxForm({
        form: 'UpdateSection',
        enableReinitialize : true
    })(UpdateSection)
);