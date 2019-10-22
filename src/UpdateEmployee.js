import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStore} from './store';

class UpdateEmployee extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: this.props.store.name,
      org: this.props.store.org,
      address: this.props.store.address,
      contact: this.props.store.contact,
      intro: this.props.store.intro,
      isUpdateEnable: false,
    };
    this.handleOnNameChange = this.handleOnNameChange.bind(this);
    this.handleOnOrgChange = this.handleOnOrgChange.bind(this);
    this.handleOnAddressChange = this.handleOnAddressChange.bind(this);
    this.handleOnContactChange = this.handleOnContactChange.bind(this);
    this.handleOnIntroChange = this.handleOnIntroChange.bind(this);
    this.updateEmployeeDetails = this.updateEmployeeDetails.bind(this);
    this.editEmployeeDetails = this.editEmployeeDetails.bind(this);
  }

  handleOnNameChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleOnOrgChange(event) {
    this.setState({
      org: event.target.value,
    });
  }

  handleOnAddressChange(event) {
    this.setState({
      address: event.target.value,
    });
  }

  handleOnContactChange(event) {
    this.setState({
      contact: event.target.value,
    });
  }

  handleOnIntroChange(event) {
    this.setState({
      intro: event.target.value,
    });
  }

  editEmployeeDetails() {
    this.setState({
      isUpdateEnable: !this.state.isUpdateEnable,
    });
  }

  updateEmployeeDetails() {
    this.props.store.set('name',this.state.name);
    this.props.store.set('org',this.state.org);
    this.props.store.set('address',this.state.address);
    this.props.store.set('contact',this.state.contact);
    this.props.store.set('intro',this.state.intro);
    this.editEmployeeDetails();
  }

render() {
    return(
      <div>
      { this.state.isUpdateEnable ?
          <div>
            <div className="padding-20px" />
            <div className="table-header" >
              Update Employee Details
            </div>
            <table className="table-full-width">
              <tbody>
                <tr>
                  <td className="td-header">Employee Name</td>
                  <td>
                    <input
                      type="text"
                      value={this.state.name}
                      onChange={this.handleOnNameChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="td-header">Employee Org.</td>
                  <td>
                    <input
                      type="text"
                      value={this.state.org}
                      onChange={this.handleOnOrgChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="td-header">Employee Address</td>
                  <td>
                    <input
                      type="text"
                      value={this.state.address}
                      onChange={this.handleOnAddressChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="td-header">Employee Contact</td>
                  <td>
                    <input
                      type="text"
                      value={this.state.contact}
                      onChange={this.handleOnContactChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="td-header">Brief Intro</td>
                  <td>
                    <input
                      type="text"
                      value={this.state.intro}
                      onChange={this.handleOnIntroChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          : ''
        }
        <div className="btn-container">
          {this.state.isUpdateEnable ?

            <button
              className="btn-style"
              onClick={this.updateEmployeeDetails}
            >
              Update Employee Details
            </button>
          :
            <button
              className="btn-style"
              onClick={this.editEmployeeDetails}
            >
              Edit Employee Details
            </button>
          }
        </div>
      </div>
  )};
}

UpdateEmployee.propTypes = {
  store: PropTypes.object,
}


export default withStore(UpdateEmployee);
