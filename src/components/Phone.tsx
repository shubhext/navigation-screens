import * as React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface PhoneProps {}

interface PhoneState {}

class Phone extends React.Component<PhoneProps, PhoneState> {
  constructor(props: PhoneProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>Phone</Text>
      </View>
    );
  }
}

export default Phone;
