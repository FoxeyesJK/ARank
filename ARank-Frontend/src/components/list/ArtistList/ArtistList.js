import React from 'react';
import removeMd from 'remove-markdown';
import { Header, Grid, Segment } from 'semantic-ui-react';

const style = {
    h1: {
      marginTop: '3em',
    },
    h2: {
      margin: '4em 0em 2em',
    },
    h3: {
      marginTop: '2em',
      padding: '2em 0em',
    },
    last: {
      marginBottom: '300px',
    },
  }

const ArtistItem = ({name, like}) => {
    return (
                <Grid.Column>
                    <Segment>
            <img src="https://edmtrain.s3.amazonaws.com/img/artist/Gryffin.jpg?v=4" alt="Mountain"></img>
                <div>{name}</div>
                <div>
                    {like}
                </div>
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
             <Header as='h2' content='Responsive Grid with Variations' style={style.h2} textAlign='center'/>
             <Grid columns={3} container divided stackable>
            <Grid.Row>
            {artistList}
            </Grid.Row>
        </Grid>
        </div>
    )   
}

export default ArtistList