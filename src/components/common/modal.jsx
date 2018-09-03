import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import '../../styles/modal.css';

class Modal extends Component {

    render () {
      return (
        <Fragment>
         { this.props.show &&
          <ReactModal 
             isOpen={this.props.show}
             contentLabel="onRequestClose Example"
             onRequestClose={this.props.onClose}
             className="Modal"
             overlayClassName="Overlay"
             ariaHideApp={false}
          >
          <div className="row">
          <div className="col-sm-12">
            <button type="button" className="close" onClick={this.props.onClose}>
              <span className="modalClose" ariaHideApp={false}>x</span>
            </button>
          </div>
          </div>
            {this.props.children}
          </ReactModal>
         }
        </Fragment>
      );
    }
  }
  
Modal.propTypes = {
    children: PropTypes.any.isRequired,
    title: PropTypes.string,
    show: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
    title: '',
    show: false,
};

export default Modal;