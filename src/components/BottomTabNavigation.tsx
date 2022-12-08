/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Cart from './Cart';
import HomeScreen from './HomeScreen';
import Search from './Search';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Profile from './Profile';
const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#fff',
      tabBarActiveBackgroundColor: 'red',
      tabBarInactiveTintColor: '#000',
    }}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <FontAwesomeIcon name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={Search}
      options={{
        tabBarIcon: ({color, size}) => (
          <FontAwesomeIcon name="search" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Cart"
      component={Cart}
      options={{
        tabBarIcon: ({color, size}) => (
          <FontAwesomeIcon name="shopping-cart" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({color, size}) => (
          <FontAwesomeIcon name="user" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomTabNavigation;
