import React from 'react';
import Cart from 'assets/Cart.svg';

class CartIcon extends React.Component {
    render() {
        return (
          <div className="cart-icon">
              <img src={Cart}/>
              <div className={this.props.cartCount > 0 ? "cart-bubble" : "no-items"}>{this.props.cartCount}</div>
          </div>
        );
    }
}

export default CartIcon;