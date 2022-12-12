import * as React from 'react';
import {Text, View} from 'react-native';
import Header from './Header';
import {styles} from './styles';
interface SearchProps {
  navigation?: any;
}

interface SearchState {}

class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header navigation={this.props.navigation} />
        <View style={styles.view}>
          <Text style={styles.text}>Search</Text>
        </View>
      </>
    );
  }
}

export default Search;
