import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {LogoImg} from '../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';
const Header: React.FC<{navigation: any}> = props => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
        <FeatherIcon name="menu" color="#1390C9" size={30} />
      </TouchableOpacity>
      <LogoImg width={110} height={50} />

      <Text style={styles.HomeText}>Home</Text>
    </View>
  );
};

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
    tintColor: '#000',
  },
});

export default Header;
