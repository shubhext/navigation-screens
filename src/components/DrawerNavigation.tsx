import React from 'react';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import BottomTabNavigation from './BottomTabNavigation';
import {View, Image} from 'react-native';
import Search from './Search';
import Cart from './Cart';
import Profile from './Profile';
import {LogoImg} from '../assets';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const drawerCustom = (props: any) => (
    <View>
      <LogoImg
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: '90%',
          height: 40,

          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />

      <DrawerItemList {...props} />
    </View>
  );
  return (
    <>
      <Drawer.Navigator
        initialRouteName="BottomTabNavigation"
        drawerContent={drawerCustom}
        screenOptions={{
          headerShown: false,
        }}>
        <Drawer.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
        />
        <Drawer.Screen
          name="Searchbar"
          component={Search}
          options={{
            drawerLabel: 'Search',
          }}
        />
        <Drawer.Screen
          name="CartPage"
          component={Cart}
          options={{
            drawerLabel: 'Cart',
          }}
        />
        <Drawer.Screen
          name="ProfilePage"
          component={Profile}
          options={{
            drawerLabel: 'Profile',
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigation;
