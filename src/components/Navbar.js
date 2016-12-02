// This looks a bit different bcz I'm using a little ES6. 
// const is an immutable variable and the => is a nice function shortcut
// what's happening is: The html look of Navbar is created HERE
// this includes the react method onChange : when a change occurs
// in this case -- they write something in the search input box - then
// the value of the input box 
import React from 'react';
import { Link } from "react-router"


const Navbar = props => (
    <div>
        <Link to="/">
            <p>Home</p>
        </Link>
        <Link to="/Giphy">
            <p>Giphy</p>
        </Link>
        <form onSubmit={props.handleSubmit} >
            {props.show ? <input onChange={props.handleChange} placeholder="faded text" value={props.search}/> : null}

            <button>submit</button>
        </form>
        <div>{props.search}</div>
    </div>
);

export default Navbar;