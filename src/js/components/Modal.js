import React, { Component } from 'react';
import _ from "lodash";

class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
            animationClass: ''
        };
    }


    componentDidMount() {
        let self = this;
        _.delay(function(self) {
            self.setState({
                animationClass: 'in'
            })
        }, 10, self  );
    }

    //inline conditional ${true? 'in':'in'
    render()    {
        const {closeModal} = this.props;
        return (
            <div className={`modal ${this.state.animationClass} ${this.props.className}`}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <button type="button" className="close" onClick={(e)=>closeModal(e)}><span
                                aria-hidden="true">&times;</span></button>
                            <div className="modal-body">
                                {this.props.children}
                            </div>

                        </div>
                    </div>
            </div>
        );
    }
}



export default Modal;


/*{this.renderDetails()}*/


