import React from 'react';
import Auth from '../modules/Auth';

class DashboardPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    
    const homeemail = encodeURIComponent(Auth.grabEmail());
    const formData = `email=${homeemail}`;

    const xhr = new XMLHttpRequest();
    xhr.open('post', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          roommates: xhr.response.roommates,
          bills: xhr.response.bills
        });
        
      }
    });
    xhr.send(formData);
  }

  /**
   * Render the component.
   */
  render() {

    return (
    <div className="container">


    </div>
    );
  }

}

export default DashboardPage;
