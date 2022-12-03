import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from './HomeScreen';
import SettingsScreen from '../../SettingsScreen';

const TopTabNavigation = () => {
  const TopTab = createMaterialTopTabNavigator();
  return (
    <>
      <TopTab.Screen name="Home" component={HomeScreen} />
      <TopTab.Screen name="Settings" component={SettingsScreen} />
    </>
  );
};

export default TopTabNavigation;
