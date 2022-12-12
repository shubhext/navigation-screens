import * as React from 'react';

import {Text, View} from 'react-native';
import {styles} from './styles';

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
        <View style={styles.view}>
          <Text style={styles.text}>Contact</Text>
        </View>
      </>
    );
  }
}

export default Contact;
