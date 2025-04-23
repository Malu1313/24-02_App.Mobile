import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Ir para evento" onPress={() => navigation.navigate('CadastroEvento')} />
      <Button title="Ir para organizadores" onPress={() => navigation.navigate('CadastroOrganizador')} />
      <Button title="Ir para ingresso" onPress={() => navigation.navigate('CadastroIngresso')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export default Home;
