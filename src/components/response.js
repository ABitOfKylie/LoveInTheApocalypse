import React from 'react';
import { Link } from "react-router"


const Answers = props => (
    <div>
        <Link to="/interview">
            <p>Answer the Zombie's questions & find love? </p>
        </Link>
       
<div className="switch-radio-example">
  <Switch input={{ type: InputTypes.RADIO, name: 'testGroup', defaultChecked: true }} value=5/>
  <Switch input={{ type: InputTypes.RADIO, name: 'testGroup' }}/>
  <Switch input={{ type: InputTypes.RADIO, name: 'testGroup' }}/>
</div>

       
        <form onSubmit={props.handleSubmit} >
            {props.show ? <input onChange={props.handleChange} placeholder="faded text" value={props.search}/> : null}

            <button>submit</button>
        </form>
        <div>{props.search}</div>
    </div>
);

export default Answers;