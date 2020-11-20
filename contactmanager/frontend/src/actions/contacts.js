import axios from "axios";
import { createMessage } from "./messages";

import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT, GET_ERRORS } from "./types";

// Get Contacts

export const getContacts = () => (dispatch) => {
  axios
    .get("/api/contacts/")
    .then((res) => {
      dispatch({
        type: GET_CONTACTS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// DELETE Contact

export const deleteContact = (id) => (dispatch) => {
  axios
    .delete(`/api/contacts/${id}/`)
    .then((res) => {
      dispatch(createMessage({ deleteContact: "Contact Deleted!" }));
      dispatch({
        type: DELETE_CONTACT,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD Contact

export const addContact = (contact) => (dispatch) => {
  axios
    .post("/api/contacts/", contact)
    .then((res) => {
      dispatch(createMessage({ addContact: "Contact Added!" }));
      dispatch({
        type: ADD_CONTACT,
        payload: res.data,
      });
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};
