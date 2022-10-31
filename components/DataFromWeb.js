import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function DataFromWeb(){
    
    const [message, setMessage] = useState('Welcome');

    useEffect(()=>{
        console.log(message)
    },[message]);
    
    return(
        <View>
            <Text style={styles.messageText}> Hello, {message}</Text>
            <Button
                onPress={()=> setMessage("Selected")}
                title="Submit"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    messageText:{
        color:'blue',
        fontSize:20,
    }
})

export default DataFromWeb;