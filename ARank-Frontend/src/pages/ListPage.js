import React from 'react';
import PageTemplate from '../components/common/PageTemplate';
import ListWrapper from '../components/list/ListWrapper';
import ArtistList from '../components/list/ArtistList';


const ListPage = () => {
    return (
        <PageTemplate>
            <ListWrapper>
                <ArtistList/>
            </ListWrapper>
        </PageTemplate>
    )
}

export default ListPage;