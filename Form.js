import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Button, StyleSheet, Text, TextInput, View, ActivityIndicator } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import Register from 'react';
export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  //const navigation = useNavigation();

  const handleLoginPress = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
   //   navigation.navigate(Register);
    }, 2000); 
  };

  return (
    <View style={styles.container}>
      <Image source={require("./assets/hbd.png")} style={{marginTop: 5, width: 100, height: 100}} />
      <TextInput style={styles.formulaire} placeholder='Login'  placeholderTextColor={'black'} />
      <TextInput style={styles.formulaire} placeholder='Password' placeholderTextColor={'black'} />
      <TextInput editable multiline numberOfLines={4} maxLength={40} style={{padding: 10}}>Password</TextInput>
      <Text>Mot de passe oublié?</Text>
      <Text>Créer un compte</Text>
      {isLoading ? (
        <ActivityIndicator style={{ marginTop: 20 }} size="large" color="#0000ff" />
      ) : (
        <Button title='Se connecter' onPress={handleLoginPress} /> 
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  formulaire:{
    width: 200,
    height: 40, 
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,   
  }
});

