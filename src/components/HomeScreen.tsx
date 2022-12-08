import * as React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {LogoImg} from '../assets';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Contact from './Contact';
import Phone from './Phone';
interface HomeScreenProps {
  navigation?: any;
}

interface HomeScreenState {}

const TopTab = createMaterialTopTabNavigator();

//top tab navigation
const TopTabNavigation = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarContentContainerStyle: {
          backgroundColor: '#fff',
          color: '#000',
        },
      }}>
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
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.toggleDrawer()}>
            <FeatherIcon name="menu" color="#1390C9" size={30} />
          </TouchableOpacity>
          <LogoImg
            width={110}
            height={50}
            // style={{
            //   fontSize: 10,
            // }}
          />

          <Text style={styles.HomeText}>Home</Text>
        </View>
        <View>
          <Text>Home screen</Text>
        </View>
        <TopTabNavigation />
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    padding: '1%',
    backgroundColor: '#fff',
    marginTop: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
    shadowColor: 'red',
  },
  Image: {
    width: '50%',

    height: 50,
    resizeMode: 'contain',
  },
  HomeText: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
});

export default HomeScreen;
