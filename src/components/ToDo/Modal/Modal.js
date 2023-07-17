import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const rootModal = document.getElementById('root-modal');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if(e.currentTarget === e.target) {
        this.props.onClose()
    }
  }
  render() {
    return createPortal(
      <div className={css.modal_backdrop} onClick={this.handleBackdropClick}>
        <div className={css.modal_content}>{this.props.children}</div>
      </div>,
      rootModal
    );
  }
}

export default Modal;
