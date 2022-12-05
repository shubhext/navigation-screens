import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SearchScreen from './src/components/SearchScreen';

import HomeScreen from './src/components/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Feed from './src/components/Feed';
import Category from './src/components/Category';
import HomeIcon from 'react-native-vector-icons/MaterialIcons';
import FeathgerIcons from 'react-native-vector-icons/Feather';
import SettingsScreen from './src/components/SettingsScreen';
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
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
        <Drawer.Screen name="Home" component={BottomTabStackNavigator} />
        {/* <Drawer.Screen name="Home" component={BottomTabStackNavigator} /> */}
        <Drawer.Screen name="Search" component={SearchScreen} />
      </Drawer.Navigator>
    </>
  );
};

//top tab navigation
const TopTabNavigation = () => {
  const TopTab = createMaterialTopTabNavigator();
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Home" component={HomeScreen} />
      <TopTab.Screen name="Feed" component={Feed} />
      <TopTab.Screen name="Category" component={Category} />
    </TopTab.Navigator>
  );
};

//bottom tabs navigation
const BottomTabStackNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="TopTabNavigation"
        component={TopTabNavigation}
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
          name="DrawerNavigation"
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
