/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

class Dropdown extends Component {
    state = {
        style : {
            display: 'none'
        },
        toggle : 'off'
    }

    toggleSub = () => {
        const style = this.state.toggle === 'off' ? { display: 'block'} : { display: 'none'};
        const toggle = this.state.toggle === 'on' ? 'off' : 'on';
        this.setState({style, toggle});
    }

    render() { 
        if(typeof(this.props.menu.value)!=="object"){
            return (
                <li className="nav-item" key={this.props.menu.value}>
                    <a className="nav-link" href="#" onClick={() => this.props.changePage(this.props.menu.value)}>{this.props.menu.value}</a>
                </li>
            );
        }

        else{
            const keys = Object.keys(this.props.menu.value);
            return (
                <li className="nav-item" key={keys}>
                    <a className="nav-link collapsed text-truncate" onClick={() => this.toggleSub()} href={"#submenu".concat(this.props.menu.id)} data-toggle="collapse" data-target={"#submenu".concat(this.props.menu.id)}>
                        <div className="heading">{keys}</div>
                        <i className={"fa fa-arrow-".concat(this.state.toggle === 'off' ? 'down' : 'up')}></i>
                    </a>
                    <div style={this.state.style} className="collapse" id={"#submenu".concat(this.props.menu.id)} aria-expanded="false">
                        <ul className="flex-column pl-2 nav">
                            {this.props.menu.value[keys[0]].map(subitem => <li className="nav-item" key={subitem}><a className="nav-link" href="#" onClick={() => this.props.changePage(subitem)}>{subitem}</a></li>)}
                        </ul>
                    </div>
                </li>
            );
        }
    }
}
 
export default Dropdown;