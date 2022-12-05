import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface Iprops {
  navigation: any;
}

const HomeScreen: React.FC<Iprops> = props => {
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.toggleDrawer();
          }}>
          <FeatherIcon name="menu" size={30} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bellIcon}>
          <FeatherIcon name="bell" size={30} color="#FFF" />
          <Text style={styles.textBell}>3+</Text>
        </TouchableOpacity>
      </View>
      <Text>HomeScreen</Text>
    </>
  );
};

const styles = StyleSheet.create({
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
});
export default HomeScreen;
