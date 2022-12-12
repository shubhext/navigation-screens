import * as React from 'react';
import {Text, View} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Contact from './Contact';
import Phone from './Phone';
import Header from './Header';
import {styles} from './styles';
interface HomeScreenProps {
  navigation?: any;
}

interface HomeScreenState {}

const TopTab = createMaterialTopTabNavigator();

//top tab navigation
const TopTabNavigation = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Phone" component={Phone} />
      <TopTab.Screen name="Contact" component={Contact} />
      <TopTab.Screen name="List" component={Contact} />
    </TopTab.Navigator>
  );
};
class HomeScreen extends React.Component<HomeScreenProps, HomeScreenState> {
  constructor(props: HomeScreenProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header navigation={this.props.navigation} />
        <View style={{marginTop: 15, marginBottom: 15}}>
          <Text style={styles.text}>Home screen</Text>
        </View>
        <TopTabNavigation />
      </>
    );
  }
}

export default HomeScreen;
