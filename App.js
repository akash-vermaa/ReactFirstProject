import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground } from 'react-native';
import React from 'react';
import Forecast from './components/Forecast';
import Navbar from './components/Navbar';
import DataFromWeb from './components/DataFromWeb';
import bgImage from './assets/bg_landscape.jpg';

export default function App() {
  const [zip, setZip] = React.useState("");
  const [forecast, setForecast] = React.useState({
    main: 'clouds',
    description: 'few clouds',
    temperature: 45.7
  });

  const handleTextChange = (event)=>{
    setZip((prevVal)=>{
      prevVal += event.target.value;
      return prevVal;
    });
  }

  return (
    <View style={styles.appContainer}>
      <Navbar />
      <DataFromWeb/>
      <ImageBackground source={bgImage}
        resizeMode='cover'
        style={styles.backdrop}>
        
        <Forecast
          main = {forecast.main}
          description = {forecast.description}
          temperature = {forecast.temperature}
        />
      </ImageBackground>
      
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f5fcff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome:{
    fontSize:20,
    textAlign: 'center',
    margin:10,
  },
  input:{
    width:150,
    textAlign:'center',
    alignItems:'stretch',
    fontSize:20,
    borderWidth:2,
    height: 30,
    borderRadius:20,
  },
  backdrop:{
    width:'100%',
    flex:1,
    justifyContent:'center',
}
});
