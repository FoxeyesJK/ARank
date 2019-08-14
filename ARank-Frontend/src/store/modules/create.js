import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as api from '../../lib/api';

// action types
const CREATE_ARTIST = 'create/CREATE_ARTIST';

// action creators
export const createArtist = createAction(CREATE_ARTIST, api.createArtist);

// initial state
const initialState = Map({
  name: '',
  like: 0,
  artistId: null
});

// reducer
export default handleActions({
  ...pender({
    type: CREATE_ARTIST,
    onSuccess: (state, action) => {
      const { _id } = action.payload.data;
      return state.set('artistId', _id);
    }
  })
}, initialState)