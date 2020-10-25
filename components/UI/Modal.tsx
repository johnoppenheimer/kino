import React from 'react';
import ReactModal, { Props as ReactModalProps } from 'react-modal';

ReactModal.setAppElement('#__next');
const Modal: React.FC<ReactModalProps> = ({ children, ...props }) => {
    return (
        <ReactModal
            style={{
                content: {
                    backgroundColor: 'rgba(26, 32, 44, 1)',
                    borderRadius: 10,
                    borderColor: 'rgba(26, 32, 44, 1)',
                    color: 'white',
                },
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
            }}
            {...props}
        >
            {children}
        </ReactModal>
    );
};

export default Modal;
