import React, { Component } from 'react';
import Dropdown from './dropdown';
import userPlaceholder from "../images/user.png";

class Sidebar extends Component {
    state = {
        headings: [
            { id: 1 , value: {'Dashboard' : ["a","b"], icon : 'fa-tachometer'} },
            { id: 2 , value: ['Report Tables',  'fa-file-text']},
            { id: 3 , value: ['Profile', 'fa-user' ]},
            { id: 4 , value: ['Settings Password', 'fa-key']},
            { id: 5 , value: ['Tasks', 'fa-tasks'] } ],
        userImg: "",
        useName: ""
    }

    render() { 
        return (
            <div>
                <div className="row">
                    <nav id="sidebar" className="sidebar bg-dark" data-background-color="white">
                        <div className="dismiss">
                            <i className="fa fa-arrow-left"></i>
                        </div>

                        <div id="UserImg" className="logo">
                            {this.user()}
                        </div>  

                        <div className="sidebar-wrapper">
                            <ul className="nav">
                                {this.deflateHeadings()}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    };

    user = () => {
        const imgSrc = this.state.userImg ? this.state.userImg : userPlaceholder;
        const userName = this.state.userName ? this.state.userName : "Admin"; 
        return(
            <>
                <img src={imgSrc} className="profile-img" alt="userImg"></img>
                <h3>Hi {userName}</h3>
            </>
        );
    }

    deflateHeadings = () => {
        return (
            <>
                {
                    this.state.headings.map(heading => {
                        return <Dropdown key={heading.id} changePage={this.changePage} menu={heading} />
                    })
                }
            </>
        );
    }

    changePage = selection => {
        console.log(selection);
    }

}
 
export default Sidebar;