import React, { Component } from 'react'
import { withStore} from './store';
import UpdateEmployee from './UpdateEmployee';

class Home extends Component {
  componentWillMount() {
    this.props.store.set('name', 'Ashok');
    this.props.store.set('org', 'ABC Corp.');
    this.props.store.set('address', 'State Street, NY');
    this.props.store.set('contact', '+1 123-456-7890');
    this.props.store.set('intro', 'Full Stack Developer.');
  }
render() {
    return(
      <div className="body-padding">
        <div className="table-header">
        Employee Details
        </div>
        <table className="table-full-width">
          <tbody>
            <tr>
              <td className="td-header">Employee Name</td>
              <td>{this.props.store.name}</td>
            </tr>
            <tr>
              <td className="td-header">Employee Org.</td>
              <td>{this.props.store.org}</td>
            </tr>
            <tr>
              <td className="td-header">Employee Address</td>
              <td>{this.props.store.address}</td>
            </tr>
            <tr>
              <td className="td-header">Employee Contact</td>
              <td>{this.props.store.contact}</td>
            </tr>
            <tr>
              <td className="td-header">Brief Intro</td>
              <td>{this.props.store.intro}</td>
            </tr>
          </tbody>
        </table>
        <UpdateEmployee />
      </div>
  )}
}
export default withStore(Home);
