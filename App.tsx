// import * as React from 'react';
// import {NavigationContainer, StackActions} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// interface AppProps {}
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const TopTab = createMaterialTopTabNavigator();
// interface AppState {}
// const MainStack = createStackNavigator();

// class MainStack extends Component{
//   return (
//     <NavigationContainer>
//     <Stack.Navigator>
//     <stack.screen component={} options={{title="HomeScreen"}} />
//     </Stack.Navigator>
//     <NavigationContainer/>

//     )
// }

// class App extends React.Component<AppProps, AppState> {
//   constructor(props: AppProps) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <NavigationContainer>
//         {/* <TabNavigator />
//         <TopTabNavigation /> */}
//       </NavigationContainer>
//     );
//   }
// }

// export default App;

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/components/HomeScreen';
import SearchScreen from './src/components/SearchScreen';

// const MainStack = createNativeStackNavigator();
const homeStack = createNativeStackNavigator();

const HomeContainer = () => {
  return (
    <>
      <homeStack.Navigator initialRouteName="Home">
        <homeStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <homeStack.Screen name="Search" component={SearchScreen} />
      </homeStack.Navigator>
    </>
  );
};

function App() {
  return (
    <NavigationContainer>
      <HomeContainer />
    </NavigationContainer>
  );
}

export default App;
