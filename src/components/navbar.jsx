import React, { Component } from 'react'

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="navbar-wrapper">
                <div id="navbar" className="navbar navbar-transparent navbar-absolute fixed-top px-4 py-3">
                    <a className="navbar-brand" href="#">
                        Dashboard
                    </a>
                    <form className="form-inline my-2 my-md-0">
                        <input className="form-control" type="text" placeholder="Search"></input>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default Navbar;