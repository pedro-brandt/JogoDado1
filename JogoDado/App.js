import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App(){
  const lados=[
      require('./1a'),
      require('./1b'),
      require('./2a'),
      require('./2b'),
      require('./3a'),
      require('./3b'),
      require('./4a'),
      require('./4b'),
      require('./5a'),
      require('./5b'),
      require('./6a'),
      require('./6b'),
  ]
let iLados=0;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
