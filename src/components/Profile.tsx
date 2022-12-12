import * as React from 'react';
import {Text, View} from 'react-native';
import Header from './Header';
import {styles} from './styles';

interface ProfileProps {
  navigation?: any;
}

interface ProfileState {}

class Profile extends React.Component<ProfileProps, ProfileState> {
  constructor(props: ProfileProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header navigation={this.props.navigation} />
        <View style={styles.view}>
          <Text style={styles.text}>profile</Text>
        </View>
      </>
    );
  }
}

export default Profile;
