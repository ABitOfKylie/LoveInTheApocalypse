import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import Auth from '../modules/Auth';


// class Main extends React.Component { now using user-defined component

const Base = ({children}) => (
  <div>
    <div className = "top-bar">
      <div className = "top-bar-left">
        <IndexLink to = "/" root </IndexLink>
      </div>  

      {Auth.isUserAuthenticated() ? (
        <div className="top-bar-right">
          <Link to="/logout">Log out</Link>
        </div>
      ) : (
        <div className="top-bar-right">
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      )}

    </div>
  {/* child component will be rendered here */}
      
      {children}
    
  </div>

  );

Main.propTypes = {
  children: PropTypes.object.isRequired
};

export default Main;