import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text} from 'react-native';
import * as SecureStore from 'expo-secure-store';


export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Faille de sécurité 
   /* console.log('Username:', username);
    console.log('Password:', password);*/

    // Meilleure pratique 
      SecureStore.setItemAsync('username', username);
      SecureStore.setItemAsync('password', password);

    // Faille de sécurité : connexion sans validation des entrées
    if (username === 'admin' && password === 'admin123') {
      // Authentification réussie
      Alert.alert('Login successful');
    } else {
      // Authentification échouée
      Alert.alert('Login failed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Authentification</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  title:{
    marginBottom:25,
    fontSize:20
  }
});