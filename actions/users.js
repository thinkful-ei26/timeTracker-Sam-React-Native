
import {API_BASE_URL} from '../config';

export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        // .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
           console.log(err)
        });
};


export const fetchUserSuccess = (data) => {
    return {
        type:'FETCH_USER_SUCCESS',
        data
    }
}


export const fetchUser = () => dispatch => {
    return fetch(`${API_BASE_URL}/user`)
    .then(res => res.json())
    .then(data => dispatch(fetchUserSuccess(data)))
    .catch(error => console.log(error))
    
    
}