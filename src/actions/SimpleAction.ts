import { Dispatch, AnyAction } from 'redux'

export const getFullName = () => async (dispatch: Dispatch<AnyAction>) => {
  dispatch({
    type: 'getfull',
    payload: 'Adli Fariz Bonaputra'
  })
}
