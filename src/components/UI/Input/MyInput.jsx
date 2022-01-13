import React from 'react'
import classes from '../Input/MyInput.module.css';

 const MyInput = React.forwardRef((props,ref) => {
    return (
        <input ref={ref} className={classes} {...props} />
    )
})

export default MyInput;