import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getContacts} from '../../actions/contacts';

export class Contacts extends Component {
    static PropTypes =  {
        contacts: PropTypes.array.isRequired
    }
    componentDidMount(){
        this.props.getContacts();
    }
    render() {
        return (
            <div>
                <h1>Contacts List</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    contacts: state.contacts.contacts
});

export default connect(mapStateToProps, {getContacts})(Contacts);
