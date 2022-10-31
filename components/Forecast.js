import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


function Forecast(props){
    
    return(
        <View>
            <Text style={styles.bigText}>
                {props.main}
            </Text>
            <Text style={styles.mainText}>
                Current Condition: {props.description}
            </Text>
            <Text style={styles.bigText}>
                Temperature : {props.temperature}&deg;F
            </Text>
        </View>
    );
}

var styles = StyleSheet.create({
    bigText:{
        display:'flex',
        fontSize:20,
        textAlign:'center',
        margin:10,
        color:'#333333',
    },
    mainText:{
        display:'flex',
        fontSize:16,
        textAlign:'center',
        color:'#333333',
    },
})

export default Forecast;