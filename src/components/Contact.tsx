import * as React from 'react';

import {Text, View} from 'react-native';

interface ContactProps {}

interface ContactState {}

class Contact extends React.Component<ContactProps, ContactState> {
  constructor(props: ContactProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <View>
          <Text>contact</Text>
        </View>
      </>
    );
  }
}

export default Contact;
