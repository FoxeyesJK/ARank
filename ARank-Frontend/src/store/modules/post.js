import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

// action types
const CHANGE_LOCATION_INPUT = 'post/CHANGE_LOCATION_INPUT';
// action creators
export const changeLocationInput = createAction(CHANGE_LOCATION_INPUT);

// initial state
const initialState = Map({
    city: 36,
    state: 94,
    error: false
});

// reducer
export default handleActions({
    [CHANGE_LOCATION_INPUT]: (state, action) => {
        const { payload: city } = action;
        return state.set('city', city)
                    //.set('state', state);
    }
}, initialState)