import React, { Component } from 'react';
import ArtistInfo from 'components/artist/ArtistInfo';
import ArtistBody from 'components/artist/ArtistBody';
import * as artistActions from 'store/moudles/artist';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Artist extends Component {
    initialize = async () => {
        const { ArtistActions, id } = this.props;
        try {
            await ArtistActions.getArtist(id);
        } catch(e) {
            console.log(e);
        }
    }

    componentDidMount() {
        this.initialize();
    }

    render() {
        const { loading, artist } = this.props;

        if(loading) return null;

        const { name, like } = artist.toJS();
        
        return (
            <div>
                <ArtistInfo name={name} like={like}/>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        artist: state.artist.get('artist'),
        loading: state.pender.pending['artist/GET_ARTIST']
    }),
    (dispatch) => ({
        ArtistActions: bindActionCreators(artistActions, dispatch)
    })
)(Artist);