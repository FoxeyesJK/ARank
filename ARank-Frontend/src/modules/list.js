import { createAction, handleActions } from 'redux-actions';

import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types
const GET_ARTIST_LIST = 'list/GET_ARTIST_LIST';

// action creators
export const getArtistList = createAction(GET_ARTIST_LIST, api.getArtistList, meta => meta);

// initial state
const initialState = Map({
    artists: List()
});

// reducer
export default handleActions({
    ...pender({
        type: GET_ARTIST_LIST,
        onSuccess: (state, action) => {
            const { data: artists } = action.payload;

            return state.set('artists', fromJS(artists))
        }
    })
}, initailState)