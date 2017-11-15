import React, {Component} from 'react';
import { Field, reduxForm } from "redux-form";
import {connect} from 'react-redux';
import {renderField } from "./FormFields"
import {hideLoginModal} from "../../actions/modalActions";
import {login} from "../../actions/userActions";
import {email, required} from "./Validations";

class Login extends Component {
    constructor(props){
        super(props);
    }

    onSubmit = (values) => {
        const {login} = this.props;
        login(values.email, values.password);
    };

    render() {
        const { handleSubmit } = this.props; //handleSubmit is a props injected from redux
        

        return (
            <div className="row Login">
                <div className="col-md-10 col-md-offset-1">
                    <h2>Login</h2>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <Field
                        label="email"
                        name="email"
                        type="text"
                        validate={[ email ]}
                        component={renderField}
                    />
                    <Field
                        label="Password"
                        name="password"
                        type="password"
                        validate={[ required ]}
                        component={renderField}
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                    <br/>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        user: state.user,
    }
}

function validate(values){

    const errors = {};
    // Validate the inputs from 'values'
    if (!values.email ) {
        errors.email = "Enter a title atleast 3 characters";
    }
    if (!values.password) {
        errors.password = "Enter some categories";
    }

    //Validate the inputs from 'values
    return errors;
}


export default reduxForm({
    validate,
    form: "LoginForm"
})(
connect(mapStateToProps, { hideLoginModal , login })(Login)
);
////



