import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
//import Footer from '../Footer';
import HeaderContainer from '../../../containers/common/HeaderContainer';

const PageTemplate = ({children}) => (
    <div>
        <HeaderContainer />
        <main>
            {children}
        </main>
        <Footer/> 
    </div>
)

export default PageTemplate;
