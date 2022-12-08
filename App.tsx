import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigation from './src/components/DrawerNavigation';
interface AppProps {}

interface AppState {}
const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
    </Stack.Navigator>
  );
}
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NavigationContainer>
        {/* <View>
          <Text>App</Text>
          <Icon name="rocket" size={30} color="#900" />
        </View> */}
        <MainStack />
      </NavigationContainer>
    );
  }
}

export default App;
