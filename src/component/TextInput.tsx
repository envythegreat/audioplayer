import React, {FC} from 'react';
import { useState } from 'react';
import {View,StyleSheet, TextInput as Input, Dimensions} from 'react-native'

import FeatherIcon from "react-native-vector-icons/Feather";
const {width} = Dimensions.get('window');

interface TNProps {
  icon: string;
  placeholder: string;
  value?:string;
  getNewValue?: any
}

const TextInput:FC<TNProps> = ({icon, placeholder, value, getNewValue}: TNProps) => {

  const handleChange = (e: string) => {
    //@ts-ignore
    getNewValue(e)
  }

  return(
    <View style={styles.textInputContainer}>
      <View style={{padding: 5,paddingLeft: 13}}>
        <FeatherIcon name={icon}  style={styles.iconSy} size={18} color="#8A8D90" />
      </View>
      <Input 
        underlineColorAndroid="transparent"
        placeholder={placeholder}
        style={styles.textInput}
        returnKeyType={'done'}
        value={value}
        onChangeText={(e) => handleChange(e)}
      />
      {/* <View style={{padding: 5,paddingHorizontal: 10}}>
        <FeatherIcon name="check-circle"  style={styles.iconSy} size={18} />
      </View> */}
    </View>
  );
  
}
const styles = StyleSheet.create({
  textInputContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    width: width *0.8,
    height: 48,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 20,
    marginBottom: 2,
    borderColor: '#8A8D90'
  },
  iconSy:{},
  textInput: {
    flex:1,
    height:35,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8A8D90'
  }
});

export default TextInput