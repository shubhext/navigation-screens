import * as React from 'react';
import {Text} from 'react-native';

interface ProfileProps {}

interface ProfileState {}

class Profile extends React.Component<ProfileProps, ProfileState> {
  constructor(props: ProfileProps) {
    super(props);
    this.state = {};
  }
  render() {
    return <Text>Profile</Text>;
  }
}

export default Profile;
