import React from 'react';
import {StyleSheet,View,Button,Text,Image} from 'react-native';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';

const Header = props => {
    return(
        <View style={styles.header}>
            <Text style={styles.text}>
                COACH
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        padding:10
    },
    text:{
        textAlign:'left',
        fontWeight:'bold',
        fontSize:18,
        color: 'lightgray'
    },
    logo: {
        marginBottom:10,
      }
  });
  

export default Header;