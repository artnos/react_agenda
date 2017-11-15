import React, {Component} from 'react';
import {connect} from 'react-redux';

class SystemMessage extends Component {
    render() {
        const {message} = this.props;
        return (
            <div className="SystemMessage"><h1>{message}</h1></div>
        );
    }
}


function mapStateToProps(state) {
    return {
        message: state.systemMessage.message
    }
}

export default connect(mapStateToProps)(SystemMessage);




