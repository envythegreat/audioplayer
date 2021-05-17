import React,{FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import TextInput from './TextInput';


const NewAudio:FC = () => {
  return(
    <>
      <View style={styles.container}>
        <View style={styles.header} >
          <Text style={styles.textHeader} >New Audio</Text>
          <TouchableOpacity>
            <MaterialIcons name="cancel" style={styles.closeIcon} ></MaterialIcons>
          </TouchableOpacity>
        </View>
        <TextInput  icon="link" placeholder="Youtube Url" />
        <TextInput  icon="headphones" placeholder="Audio Name" />
      </View>
    </>
  );
}
//video
//link
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'snow',
    width: '100%',
    height: 350,
    position:'absolute',
    bottom: 0,
    left: 0,
    zIndex: 99999,
    borderRadius: 20,
    alignItems: 'center'
  },
  header:{
    width: '100%',
    flexDirection: 'row',
    margin: 10,
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  textHeader: {
    color: '#000000',
    fontSize: 26,
    fontWeight: 'bold'
  },
  closeIcon: {
    color: '#FF4D4D',
    fontSize: 40,
  },
});

export default NewAudio;