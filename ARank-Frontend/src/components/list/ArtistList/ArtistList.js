import React from 'react';
import removeMd from 'remove-markdown';
import { Image, Grid, Segment, Button } from 'semantic-ui-react';

const style = {
    box: {
      boxShadow: "none"
    },
  }
const ArtistItem = ({name, like}) => {
    return (
            <Grid.Column style={style.box}>
                <Segment>
                    <Image src="https://edmtrain.s3.amazonaws.com/img/artist/Gryffin.jpg?v=4" />
                    <div>{name}</div>
                    <Button
                    color='red'
                    content='Like'
                    icon='heart'
                    label={{ basic: true, color: 'red', pointing: 'left', content: like }}
                    />
                </Segment>
            </Grid.Column>
    )
}

const ArtistList = ({artists}) => {
    const artistList = artists.map(
        (artist, index) => { 
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
             <Grid columns={3} style={{marginTop:"50px"}} container divided stackable>
                {artistList}
            </Grid>
        </div>
    )   
}

export default ArtistList