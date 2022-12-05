import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Feed from './Feed';
import Category from './Category';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
interface Iprops {
  navigation: any;
}
const TopTab = createMaterialTopTabNavigator();

//top tab navigation
const TopTabNavigation = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Feed" component={Feed} />
      <TopTab.Screen name="Category" component={Category} />
    </TopTab.Navigator>
  );
};
const HomeScreen: React.FC<Iprops> = props => {
  return (
    <>
      <View style={stylesHomeScreen.header}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.toggleDrawer();
          }}>
          <FeatherIcon name="menu" size={30} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={stylesHomeScreen.bellIcon}>
          <FeatherIcon name="bell" size={30} color="#FFF" />
          <Text style={stylesHomeScreen.textBell}>3+</Text>
        </TouchableOpacity>
      </View>
      <TopTabNavigation />
      <Text style={stylesHomeScreen.text}>HomeScreen</Text>
    </>
  );
};

export const stylesHomeScreen = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    paddingLeft: 20,
    backgroundColor: '#0E60A1',
    color: '#fff',
    alignItems: 'center',
    height: 50,
  },
  bellIcon: {
    position: 'relative',
    paddingRight: 20,
  },

  textBell: {
    position: 'absolute',
    top: -5,
    right: 6,
    backgroundColor: '#F00',
    padding: 5,
    color: '#FFF',
    height: 30,
    width: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
  },
});
export default HomeScreen;
