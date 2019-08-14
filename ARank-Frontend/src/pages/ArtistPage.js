import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import Artist from 'containers/artist/Artist';

const ArtistPage = ({match}) => {
    const { id } = match.params;
    return (
        <PageTemplate>
            <Artist id={id}/>
        </PageTemplate>
    )
}

export default ArtistPage;