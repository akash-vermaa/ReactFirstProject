import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import React from 'react';
import Forecast from './components/Forecast';

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
      <Forecast
        main = {forecast.main}
        description = {forecast.description}
        temperature = {forecast.temperature}
      />
      <TextInput
        style={styles.input} 
        name='tin_zip'
        onSubmitEditing={handleTextChange}
        value={zip}
      />
      <Text style={styles.welcome}>
        You input {zip}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 2,
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
});
