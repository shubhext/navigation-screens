import * as React from 'react';
import {Text, View} from 'react-native';
import Header from './Header';
import {styles} from './styles';
interface CartProps {
  navigation?: any;
}

interface CartState {}

class Cart extends React.Component<CartProps, CartState> {
  constructor(props: CartProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header navigation={this.props.navigation} />
        <View style={styles.view}>
          <Text style={styles.text}>Cart</Text>
        </View>
      </>
    );
  }
}

export default Cart;
