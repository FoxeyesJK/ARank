import React, { Component } from 'react';
import ArtistList from '../../components/list/ArtistList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as listActions from '../../store/modules/list';

class ListContainer extends Component {
    getArtistList = () => {
        const { name, like, ListActions } = this.props;
        ListActions.getArtistList({
            name,
            like
        });
    }

    componentDidMount() {
        this.getArtistList();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.page !== this.props.page || prevProps.tag !== this.props.tag) {
            this.getArtistList();
            document.documentElement.scrollTop = 0;
        }
    }

    render() {
        const { loading, artists } = this.props;
        if(loading) return null;
        console.log(artists);
        return(
            <div>
                <ArtistList artists={artists}/>
            </div>
        )
    }
}

export default connect(
    (state) => ({
      artists: state.list.get('artists'),
      loading: state.pender.pending['list/GET_ARTIST_LIST']  
    }),
    (dispatch) => ({
        ListActions: bindActionCreators(listActions, dispatch)
    })
)(ListContainer);