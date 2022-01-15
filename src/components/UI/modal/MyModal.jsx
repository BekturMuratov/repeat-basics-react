import React from 'react';
import classes from './MyModal.module.css';

let MyModal = ({children}) => {

  
    return (
        <div className={[classes.MyModal, classes.active].join('  ')}>
            <div className={classes.myModalContent}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;