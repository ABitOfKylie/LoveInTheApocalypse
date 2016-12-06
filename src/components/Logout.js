import React from 'react';
import {Link} from 'react-router';
import {Card, CardTitle, CardText, RaisedButton, TextField} from 'material-ui';


class Logout extends React.Component {

    getInitialState: function() {
        return {
            endSession: false
        };
    },
    handleClick: function() {
        this.setState({
            endSession: true
        })
    },
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    console.log("email:", this.refs.email.getValue());
    console.log("password:", this.refs.password.getValue());
  }


  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  render() {
    return (
      <Card class="container">
        <form action="/" onSubmit={this.processForm.bind(this)}>
          <h2 className="card-heading">Log In</h2>

          <CardTitle title="Logout" />

          <CardText>Leaving so soon? <Link to={`/`}>
        
      </Card>
    );
  }

}

export default Logout;

import React from 'react';
import { Link } from "react-router"


const Logout = props => (
    <div>
        <Link to="/">
            <p>Home</p>
        </Link>
        <Link to="/zombie-choice">
            <p>Zombie_choice</p>
        </Link>
        <Link to="/zplay">
            <p>Zplay</p>
        </Link>
        
        <form onSubmit={props.handleSubmit} >
            {props.show ? <input onChange={props.handleChange} placeholder="faded text" value={props.logout}/> : null}

            <button>submit</button>
        </form>
        <div>{props.logout}</div>
    </div>
);

export default Logout;
alternative code -- 
import React from 'react';

class Logout extends React.Component {
    componentDidMount() {
        sessionStorage.clear();
        setInterval( () => this.context.router.transitionTo('/'), 2000);
    }

    render() {
        return (
            <p>You have been logged out, you will be redirected shortly to login...</p>
        );
    }
}

Logout.contextTypes = {
    router: React.PropTypes.func
};

export default Logout;*/
