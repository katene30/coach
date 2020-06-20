import React, {Component} from 'react';
import {View,Button,Text, StyleSheet,ImageBackground,Dimensions,TouchableHighlight, TextInput} from 'react-native';
const { width, height } = Dimensions.get('window');
import Header from './Header'


export default function Name({navigation}) {


        const [value, onChangeText] = React.useState('');

        const pressHandler=()=>{
        navigation.navigate('Name')
        }

        return (
        <View style={styles.container}>
            <Header />
                <ImageBackground source={require('../assets/COACH.png')} style={styles.image}>
                    <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={styles.text}>Welcome,</Text>
                        <Text style={styles.text}>begin by first telling me your name.</Text>
                        <TextInput autoCapitalize={'characters'} style={{ paddingLeft:10,marginTop:10,marginBottom:10,width:80,height: 40, borderColor: 'white', borderWidth: 1, color: 'white' }} onChangeText={text => onChangeText(text)} value={value}/>
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
    padding: 10
  }
  });