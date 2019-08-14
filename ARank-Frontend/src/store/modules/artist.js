import { createAction, handleActions } from ' redux-actions';

import { Map, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';
import { pender } from 'redux-pender/lib/utils';

// action types
const GET_ARTIST = 'artist/GET_ARTIST';

// action creators
export const getArtist = createAction(GET_ARTIST, api.getArtist);

// initial state
const initialState = Map({
    artist: Map({})
});

// reducer
export default handleActions({
    ...pender({
        type: GET_ARTIST,
        onSuccess: (state, action) => {
            const { data: artist } = action.payload;
            return state.set('artist', fromJS(artist));
        }
    })
}, initialState)