import * as React from 'react';
import {Text} from 'react-native';
interface CartProps {}

interface CartState {}

class Cart extends React.Component<CartProps, CartState> {
  constructor(props: CartProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Text>Cart</Text>
      </>
    );
  }
}

export default Cart;
