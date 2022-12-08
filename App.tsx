import * as React from 'react';
import {Text, View} from 'react-native';

interface AppProps {}

interface AppState {}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <View>
          <Text>App</Text>
        </View>
      </>
    );
  }
}

export default App;
