import React from 'react';
import CartIcon from "./CartIcon";
import './Header.scss';
import Logo from 'assets/Saatva.svg';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="company-logo">
                    <img src={Logo} />
                </div>
                <CartIcon cartCount={this.props.cartCount}/>
            </div>
        );
    }
}

export default Header;