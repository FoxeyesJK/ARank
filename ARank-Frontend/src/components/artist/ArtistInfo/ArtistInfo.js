import React from 'react';
import moment from 'moment';

const ArtistInfo = ({name, like}) => (
    <div>
        <h1>{name}</h1>
            <div>
                {like}
            </div>
    </div>
)

export default ArtistInfo;