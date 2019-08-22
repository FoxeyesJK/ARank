import React from 'react';
import removeMd from 'remove-markdown';
import { Image, Grid, Segment, Button, Header, Label } from 'semantic-ui-react';

const style = {
    box: {
      boxShadow: "none"
    },
    artist: {
        margin: "5px 0px"
    },
  }

const ArtistItem = ({name, genres, like}) => {
    const genreList = genres.map(genre => <Label>{genre}</Label>)
    return (
            <Grid.Column style={style.box}>
                <Segment clearing>
                    <Image src="https://edm.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTU1MTYyNTkxNTUzOTIyNzE3/illenium-2017-billboard-1548.jpg" />
                    {/* <Image src="https://edmtrain.s3.amazonaws.com/img/artist/Gryffin.jpg?v=4" /> */}
                    <Header as='h3' style={style.artist}>{name}</Header>
                    {genreList}
                    {/* {genres.map(genre => <Label>{genre}</Label>)} */}
                    <Button
                    size='mini'
                    floated='right'
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
            const { _id, name, genres, like } = artist.toJS();
            return ( 
                <ArtistItem 
                    name={name}
                    genres={genres}
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