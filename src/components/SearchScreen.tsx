import {View, Text, Button} from 'react-native';
import React from 'react';
interface Iprops {
  navigation: any;
}
const SearchScreen: React.FC<Iprops> = props => {
  return (
    <View>
      <Text>SearchScreen</Text>
      <Button
        title="go back"
        onPress={() => {
          props.navigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default SearchScreen;
