import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useGoogleAuth } from '../services/googleConfig';

const HomeScreen = () => {
  const { promptAsync, handleLogin } = useGoogleAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo ao Descubra Sua Cidade!</Text>
      <Button
        title="Login com Google"
        onPress={() => {
          promptAsync();
          handleLogin();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HomeScreen;

