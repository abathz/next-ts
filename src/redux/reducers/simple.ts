import update from 'immutability-helper'
import { AnyAction } from 'redux'
import initialState, { State } from '../intialState'
import { createReducer } from '../reduxUtils'

export default createReducer(initialState, {
  ['getfull']: (state: State, action: AnyAction) => changeName(state, action.payload)
})

const changeName = (state: State, payload: any) => {
  return update(state, {
    name: { $set: payload }
  })
}
