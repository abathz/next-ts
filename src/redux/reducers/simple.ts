import update from 'immutability-helper';
import { AnyAction } from 'redux';
import { GET_FULLNAME } from '../types';
import initialState, { State } from '../intialState';
import { createReducer } from '../reduxUtils';

export default createReducer(initialState, {
    [GET_FULLNAME]: (state: State, action: AnyAction) => changeName(state, action.payload)
});

const changeName = (state: State, payload: any) => {
    return update(state, {
        name: { $set: payload }
    });
};
