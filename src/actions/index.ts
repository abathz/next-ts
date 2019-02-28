import { Dispatch } from 'redux'

export const getFullName = () => (dispatch: Dispatch<any>) => {
  dispatch({
    type: 'getfull',
    payload: 'Adli Fariz Bonaputra'
  })
}
