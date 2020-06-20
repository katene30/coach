import React, {Component} from 'react';
import {View,Button,Text, StyleSheet,ImageBackground,Dimensions,TouchableHighlight} from 'react-native';
const { width, height } = Dimensions.get('window');
import Header from './Header'


export default function Home({navigation}) {


        const pressHandler=()=>{
        navigation.navigate('Name')
        }

        return (
        <View style={styles.container}>
            <Header />
            
                <ImageBackground source={require('../assets/COACH.png')} style={styles.image}>
                    <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={styles.text}>Welcome,</Text>
                        <Text style={styles.text}>tap below to get started.</Text>
                        <TouchableHighlight style={styles.button} onPress={pressHandler}>
                            <Text>--></Text>
                        </TouchableHighlight>
                    </View>
                </ImageBackground>
        </View>
        )
}



const styles = StyleSheet.create({
    text:{
        fontSize:20,
        color:'white',
    },
    container:{
     flex: 1,
     flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "contain",
        width:width,
        justifyContent: "center"
    },
    button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 5
  }
  });