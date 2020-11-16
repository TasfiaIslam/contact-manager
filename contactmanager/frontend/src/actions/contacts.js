import axios from 'axios';

import {GET_CONTACTS} from './types';

// Get Contacts

export const getContacts = () => dispatch => {
    axios.get('/api/contacts/')
        .then( res => {
            dispatch({
                type: GET_CONTACTS,
                payload: res.data
            });
        }).catch(err => console.log(err));
};