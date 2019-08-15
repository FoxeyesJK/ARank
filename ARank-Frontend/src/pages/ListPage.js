import React from 'react';
import PageTemplate from '../components/common/PageTemplate';
import ListWrapper from '../components/list/ListWrapper';
import ListContainer from '../containers/list/ListContainer';


const ListPage = () => {
    return (
        <PageTemplate>
            <ListWrapper>
                <ListContainer/>
            </ListWrapper>
        </PageTemplate>
    )
}

export default ListPage;