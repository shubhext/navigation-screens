import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SearchScreen from './src/components/SearchScreen';

import HomeScreen from './src/components/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createDrawerNavigator} from '@react-navigation/drawer';
// import Feed from './src/components/Feed';
// import Category from './src/components/Category';
import HomeIcon from 'react-native-vector-icons/MaterialIcons';
import FeathgerIcons from 'react-native-vector-icons/Feather';
import SettingsScreen from './src/components/SettingsScreen';
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: '#0E5AA3',
          drawerActiveTintColor: '#fff',
          drawerPosition: 'left',
        }}>
        <Drawer.Screen
          name="BottomTabStackNavigator"
          component={BottomTabStackNavigator}
        />
        {/* <Drawer.Screen name="Home" component={BottomTabStackNavigator} /> */}
        <Drawer.Screen name="Search" component={SearchScreen} />
      </Drawer.Navigator>
    </>
  );
};

//bottom tabs navigation
const BottomTabStackNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <HomeIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Setting"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <FeathgerIcons name="settings" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <FeathgerIcons name="search" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

// main stack navigation
const MainStack = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={DrawerNavigation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default App;
