import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const PageTemplate = ({children}) => (
    <div>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </div>
)

export default PageTemplate;
