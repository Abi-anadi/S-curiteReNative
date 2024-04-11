import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';

export default function Register() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration Form</Text>
      <Image source={require("./assets/hbd.png")} style={{marginTop:5, width:100, height:100}}></Image>
      <TextInput
        style={styles.input}
        placeholder="Nom"
      />
      <TextInput
        style={styles.input}
        placeholder="Prenom"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
      />
      <Text>Date de Naissance: </Text>

      <View style={styles.buttonContainer}>
        <Button title="Valider" />
        <Button title="Annuler" color="red"  />
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: 200,
    height: 40, 
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
