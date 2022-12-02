import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import SearchScreen from './SearchScreen';
import SettingsScreen from './SettingsScreen';
// import {createStackNavigator} from '@react-navigation/stack';
// import DrawerNavigation from './DrawerNavigation';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from './HomeScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
interface AppProps {}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TopTab = createMaterialTopTabNavigator();
interface AppState {}
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NavigationContainer>
        <TabNavigator />

        {/* <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="Profile" component={SearchScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} /> */}
      </NavigationContainer>
    );
  }
}

export default App;
