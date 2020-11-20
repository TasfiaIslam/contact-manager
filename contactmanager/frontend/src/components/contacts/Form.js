import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addContact } from "../../actions/contacts";

export class Form extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
  };

  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { first_name, last_name, email, mobile } = this.state;
    const contact = { first_name, last_name, email, mobile };
    this.props.addContact(contact);
    this.setState({
      first_name: "",
      last_name: "",
      email: "",
      mobile: "",
    });
  };

  render() {
    const { first_name, last_name, email, mobile } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Contact</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              className="form-control"
              type="text"
              name="first_name"
              onChange={this.onChange}
              value={first_name}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              className="form-control"
              type="text"
              name="last_name"
              onChange={this.onChange}
              value={last_name}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Mobile</label>
            <textarea
              className="form-control"
              type="text"
              name="mobile"
              onChange={this.onChange}
              value={mobile}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addContact })(Form);
