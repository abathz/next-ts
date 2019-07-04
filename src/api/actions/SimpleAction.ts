import { ThunkDispatch } from 'redux-thunk';
import { GET_FULLNAME } from 'api/types';

const arr = [1, 2, 3, 4, 5, 6, 7];

export const getFullName = () => async (dispatch: ThunkDispatch<{}, {}, any>) => {
    const isTrue = true;
    const test = { isTrue };

    dispatch({
        type: GET_FULLNAME,
        payload: 'Adli Fariz Bonaputra'
    });
};

export const ya = () => 'a';
