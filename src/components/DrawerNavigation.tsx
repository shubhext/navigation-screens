import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Drawer"
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: '#0E5AA3',
          drawerActiveTintColor: '#fff',
          drawerPosition: 'left',
          drawerStyle: {
            bottom: 0,
            top: 0,
            zIndex: 1000,
            backgroundColor: '#fff',
            overflow: 'visible',
          },
        }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        {/* <View>
          <Text>fipola</Text>
        </View> */}
        <Drawer.Screen name="Search" component={SearchScreen} />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigation;
