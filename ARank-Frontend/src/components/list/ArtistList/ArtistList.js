import React from 'react';
import removeMd from 'remove-markdown';
import { Header, Grid, Segment, Button } from 'semantic-ui-react';

const ArtistItem = ({name, like}) => {
    return (
            <Grid.Column>
                <Segment>
                    <img src="https://edmtrain.s3.amazonaws.com/img/artist/Gryffin.jpg?v=4" alt="Mountain"></img>
                    <div>{name}</div>
                    <div>
                        {like}
                    </div>
                    <Button
                    color='red'
                    content='Like'
                    icon='heart'
                    label={{ basic: true, color: 'red', pointing: 'left', content: '123' }}
                    />
                </Segment>
            </Grid.Column>
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
             <Grid columns={3} container divided stackable>
            <Grid.Row>
            {artistList}
            </Grid.Row>
        </Grid>
        </div>
    )   
}

export default ArtistList