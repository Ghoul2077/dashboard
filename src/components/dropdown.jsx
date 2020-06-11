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
        const type = typeof(this.props.menu.value);

        if( type!=="object" || Array.isArray(this.props.menu.value)){
            const menuItem = (type === "string" ? this.props.menu.value : this.props.menu.value[0]);
            const icon = (type === "string" ? "" : this.props.menu.value[1]);
            return (
                <li className="nav-item" key={menuItem}>
                    <a className="nav-link" href="#" onClick={() => this.props.changePage(menuItem)}>
                        <div className="heading">
                            {icon ? <i className={"fa-common fa ".concat(icon)}></i> : null}
                            {menuItem}
                        </div>
                    </a>
                </li>
            );
        }

        else{
            const keys = Object.keys(this.props.menu.value);
            const icon = this.props.menu.value[keys.pop()];
            const submenu = this.props.menu.value[keys[0]];
            const id = this.props.menu.id;

            return (
                <li className="nav-item" key={keys}>
                    <a className="nav-link collapsed text-truncate" onClick={() => this.toggleSub()} href={"#submenu".concat(id)} data-toggle="collapse" data-target={"#submenu".concat(id)}>
                        <div className="heading">
                            <i className={"fa-common fa ".concat(icon)}></i>
                            {keys}
                        </div>
                        <i className={"fa fa-arrow-".concat(this.state.toggle === 'off' ? 'down' : 'up')}></i>
                    </a>
                    <div style={this.state.style} className="collapse" id={"#submenu".concat(id)} aria-expanded="false">
                        <ul className="flex-column pl-2 nav">
                            {submenu.map(subitem => <li className="nav-item" key={subitem}><a className="nav-link" href="#" onClick={() => this.props.changePage(subitem)}>{subitem}</a></li>)}
                        </ul>
                    </div>
                </li>
            );
        }
    }
}
 
export default Dropdown;