
import { AnyAction } from 'redux'

type State = {
  name: string
}

const INITIAL_STATE: State = {
  name: ''
}

export default (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case 'getfull':
      return { ...state, name: action.payload }
    default:
      return state
  }
}
