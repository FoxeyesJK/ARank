import React from 'react'; 
//import styles from './Button.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

//const cx = classNames.bind(styles);

// rest includes className and onClick data
// ... allows data to be stored in props
const Div = ({children, ...rest}) => <div {...rest}>{children}</div>

const Button = ({
    children, to, onClick, disabled, theme = 'default',    
}) => {
    // if to value exists use Link, or use div including disabled
    const Element = (to && !disabled) ? Link : Div;

    // if disbaled is true, add it to className
    return (
        <Element
          to={to}
          //className={cx('button', theme, {disabled})}
          onClick={disabled ? () => null : onClick}>
          {children}
        </Element>
    )
}

export default Button;