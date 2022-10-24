import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-config';

import { useNavigation } from '@react-navigation/native';


import Home from './HomeScreen';
import Login from './LoginScreen';

import { Ionicons } from '@expo/vector-icons';

const uri = 'https://media.istockphoto.com/videos/colored-smoke-on-a-dark-background-blue-and-red-light-with-smoke-video-id1341408852?b=1&k=20&m=1341408852&s=640x640&h=C6ymXpr_Jn6-WqQmHHuS8z6TGBtkWDQ9x6tFs_hsBjs=';


const LoginScreen = () => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const navigation = useNavigation();
  
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const [input, setInput] = useState('');
    const [hidePass, setHidePass ] = useState(true);
  
    const handleCreateAccount = () => {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Account created')
        const user = userCredential.user;
        console.log(user)
      })
      .catch(error => {
        console.log(error)
        Alert.alert(error.message)
      })
    }
    
    const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log('Signed in!')
        const user = userCredential.user;
        console.log(user)
        navigation.navigate('Home')
    })
    .catch(error => {
      console.log(error)
    })
    }
  
    return (
      <View style={{ flex: 1}}>   
      <ImageBackground source={{ uri }} style={styles.image}>
        <View style={{ bottom: 40, alignItems: 'center', justifyContent: 'center' }}>
      <View>    
      <View style={{ alignItems: 'center', justifyContent: 'center'}}>
        <Image source={{ uri: 'https://i.pinimg.com/originals/f3/0c/44/f30c443c072cfc8dea72d37be4c24810.jpg' }} style={styles.perfilImage} />
        </View> 
        <Text style={styles.text}>Email</Text>
        <TextInput onChangeText={(text) => setEmail(text)} style={styles.caixa}  placeholder="Dabi@gmail.com"></TextInput>
        </View>
        <View>
        <Text style={styles.text}>Password</Text>
        <TextInput onChangeText={(text) => setPassword(text)} style={styles.caixa} placeholder="password" secureTextEntry={true}></TextInput>
        <TouchableOpacity style={styles.icon} onPress={ () => setHidePass(!hidePass) }>
            { hidePass ? 
            <Ionicons name="eye" color="#FFF" size={25} />
            :
            <Ionicons name="eye-off" color="#FFF" size={25} />  
          }
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleSignIn} style={styles.buttonLogin}>
          <Text style={{ alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 'bold', color: '#fff' }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCreateAccount} style={styles.buttonCreate}>
          <Text style={{ alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 'bold', color: '#fff' }}>Create Account</Text>
        </TouchableOpacity>
        </View>
        </ImageBackground>
      </View>
    );
  }

export default LoginScreen


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
    },
    caixa: {
      padding: 10,
      width: 250,
      borderRadius: 20,
      borderWidth: 2,
      marginTop: 20,
      borderColor: "#0b8be0",
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e3e3e3'
  
    },
    text: {
      left: 5,
      top: 12,
      fontSize: 17,
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#0b8be0'
    },
    image: {
      resizeMode: 'cover',
      width: '100%', 
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    perfilImage: {
      padding: 0,
      width: 160, 
      height: 160,
      borderRadius: 80,
    },
    buttonLogin: {
      top: 20,
      padding: 13,
      width: 260,
      borderRadius: 10,
      backgroundColor: '#0373fc',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#fff',
    },
    buttonCreate: {
      top: 45,
      padding: 13,
      width: 260,
      borderRadius: 10,
      backgroundColor: '#9d56f5',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#fff',
    },
  });
  