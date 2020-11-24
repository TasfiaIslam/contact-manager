import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from "./types";

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
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
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
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
