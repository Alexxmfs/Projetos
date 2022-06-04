import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const JanelaInicial = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#8cdcf5'}}>
      <Text style={{top: 145, color: 'blue,', fontWeight: 'bold'}}>Janela Inicial</Text>
      <TouchableOpacity 
      onPress={
        ()=>{
          navigation.navigate("Nova",
          {nome: "Alex", idade: 17, })
        }
      }
      style = {styles.botao}
      ><Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15}}>Vai para nova janela</Text></TouchableOpacity>
      <View>
        <View>
      <Image 
      style = {{width: 380, height: 180, top: -150}}
      source={require('./assets/people.png')} /></View>
</View>
    </View>
  )
}

const NovaJanela = ({route, navigation}) => {
  const {nome, idade} = route.params;
  const image = { uri: "https://reactjs.org/logo-og.png" };

  return (
    
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Nova Janela</Text>
      <Text>Nome recebido: {JSON.stringify(nome)}</Text>
      <Text>Idade recebida: {JSON.stringify(idade)}</Text>
      <TextInput onChangeText={(valor)=>navigation.setParams({nome: valor})}
      style={{borderWidth:2, borderColor:'black'}} />

      <TouchableOpacity style={styles.botao2} title="Ir para Nova Janela... De novo!"
      onPress={()=>{
         navigation.push('Nova',
      {idade: Math.floor(Math.random() * 44)})
        }
      } >
        <Text>Ir para Nova Janela... De novo!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao3}title='Ir para Inicial'
      onPress={()=>navigation.navigate('Inicial')}>
        <Text>Ir para Inicial</Text>
        </TouchableOpacity>

    <TouchableOpacity style={styles.botao4} title='Voltar para a janela anterior'
      onPress={()=>navigation.goBack()} ><Text>Voltar para a janela anterior</Text></TouchableOpacity>
    </View>
  )
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Inicial'
        screenOptions={{headerTitle: 'Alex Macedo'}}>
        <Stack.Screen name="Inicial" component={JanelaInicial} />
        {/* {props => <JanelaInicial {...props} extraData={'Alguma coisa'} />} */}
        <Stack.Screen name="Nova" component={NovaJanela} 
        options={{title: 'Janela Nova Criada' }} 
        initialParams={{nome: 'Nome Qualquer'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    width: 250,
    height: 50,
    padding: 10,
    backgroundColor: '#2360fa',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    top: 150
  },
  botao2: {
    width: 250,
    height: 50,
    padding: 10,
    backgroundColor: '#2360fa',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-around',
    top: 10
  },
  botao3: {
    width: 250,
    height: 50,
    padding: 10,
    backgroundColor: '#2360fa',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-around',
    top: 20
  },
  
  botao4: {
    width: 250,
    height: 50,
    padding: 10,
    backgroundColor: '#2360fa',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-around',
    top: 30
  }
});

export default App;