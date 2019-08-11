import React from 'react';
//import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import NavBar from 'components/common/NavBar';

//const cx = classNames.bind(styles);

const Header = () => (
    <header>
        <div>
            Header
            <NavBar />
        </div>
    </header>
);

export default Header;