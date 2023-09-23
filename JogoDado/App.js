import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

const lados=[
  require('./assets/imag/1a.jpg'),
  require('./assets/imag/2a.jpg'),
  require('./assets/imag/3a.jpg'),
  require('./assets/imag/4a.jpg'),
  require('./assets/imag/5a.jpg'),
  require('./assets/imag/6a.jpg'),
]


export default function App() {
  const [iLados, setLados ] = useState(0)
  const [iLados2, setLados2 ] = useState(2)
  return (
    <View style={styles.container}>
      <Text>Jogo do Dado!</Text>
      <Image source={lados[iLados]} />
      <Image source={lados[iLados2]} />
      <Button title='Jogar' 
      onPress={() =>  { 
        setLados(randomLados())
        setLados2(randomLados())}
      }
      />
      <StatusBar style="auto" />
    </View>
  );
  
}

const randomLados = () => {
  return Math.floor((Math.random() * 6));
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
