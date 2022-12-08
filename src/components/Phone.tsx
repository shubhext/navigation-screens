import * as React from 'react';
import {Text, View} from 'react-native';

interface PhoneProps {}

interface PhoneState {}

class Phone extends React.Component<PhoneProps, PhoneState> {
  constructor(props: PhoneProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>Phone</Text>
      </View>
    );
  }
}

export default Phone;
