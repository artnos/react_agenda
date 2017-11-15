import React, {Component} from 'react';
import {connect} from 'react-redux';
import {delete_section} from '../actions/index';
import {hideDeleteModal} from "../actions/modalActions";

class ComfirmDelete extends Component {
    render() {
        const { hideDeleteModal, delete_section, deleteKey } = this.props;

        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h2>Comfirm Delete</h2>
                        <h3>If you delete this section you will also delete all of it's children.</h3>
                    </div>
                </div>

               <div className="row"> <div className="col-md-6 text-center">
                    <button
                        onClick={ () =>  delete_section(deleteKey) }
                        className="btn btn-white ">
                        Delete This And All Children
                    </button>
                </div>
                <div className="col-md-6 text-center">
                    <button
                        onClick={ () => hideDeleteModal()}
                        className="btn btn-white ">
                       Cancel
                    </button>
                </div></div>

            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        deleteKey: state.activeUpdateForm
    }
}

export default connect(mapStateToProps, {hideDeleteModal, delete_section})(ComfirmDelete);




