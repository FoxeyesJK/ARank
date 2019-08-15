import React from 'react';
import removeMd from 'remove-markdown';

const ArtistItem = ({name, like}) => {
    return (
        <div>
            <h2>{name}</h2>
            <div>
                {like}
            </div>
        </div>
    )
}

const ArtistList = ({artists}) => {
    const artistList = artists.map(
        (artist) => {
            const { _id, name, like } = artist.toJS();
            return (
                <ArtistItem 
                    name={name}
                    like={like}
                />
            )
        }
    )
    return (
        <div>
            {artistList}
        </div>
    )   
}

export default ArtistList