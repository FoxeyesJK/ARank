//ListWrapper: Layout for Form Container
import React from 'react';
//import styles from './ListWrapper.scss';
import classNames from 'classnames/bind';

//const cx = classNames.bind(styles);

const FormWrapper = ({children}) => (
    <div>
        {children}
    </div>
);

export default FormWrapper;