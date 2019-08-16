import React from 'react';
import removeMd from 'remove-markdown';

const ArtistItem = ({name, like}) => {
    return (
        <div class="column">
            <div class="ui segment">
            <img src="https://edmtrain.s3.amazonaws.com/img/artist/Gryffin.jpg?v=4" alt="Mountain"></img>
                <div>{name}</div>
                <div>
                    {like}
                </div>
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
        <div class="ui five column grid">
            {artistList}
        </div>
    )   
}

export default ArtistList