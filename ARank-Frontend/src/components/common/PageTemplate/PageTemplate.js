import React from 'react';
import Header from '../Header';
//import Footer from '../Footer';
import FooterContainer from '../../../containers/common/FooterContainer';

const PageTemplate = ({children}) => (
    <div>
        <Header />
        <main>
            {children}
        </main>
        <FooterContainer />
    </div>
)

export default PageTemplate;
