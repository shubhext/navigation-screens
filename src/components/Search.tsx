import * as React from 'react';
import {Text} from 'react-native';

interface SearchProps {}

interface SearchState {}

class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {};
  }
  render() {
    return <Text>Search</Text>;
  }
}

export default Search;
