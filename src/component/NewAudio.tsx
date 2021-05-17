import { LinearGradient } from 'expo-linear-gradient';
import React,{FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions,} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import TextInput from './TextInput';
const {width} = Dimensions.get('window');

interface NAProps{
  isClicked: boolean;
}

const NewAudio:FC<NAProps> = ({isClicked}: NAProps) => {
  return(
    <>
      <View style={[styles.container, {bottom: isClicked ? 0 : -400,}]}>
        <View style={styles.header} >
          <Text style={styles.textHeader} >New Audio</Text>
          <TouchableOpacity>
            <MaterialIcons name="cancel" style={styles.closeIcon} ></MaterialIcons>
          </TouchableOpacity>
        </View>
        <TextInput  icon="link" placeholder="Youtube Url" />
        <TextInput  icon="headphones" placeholder="Audio Name" />
        <TouchableOpacity style={{
          shadowColor: 'rgba(255, 110, 170, 1)',
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.8,
          shadowRadius: 11,  
          elevation: 5
        }}>
          <LinearGradient
            start={[1,0.5]}
            end={[0, 0]}
            colors={['rgba(253, 83, 86, 1)', 'rgba(255, 110, 170, 1)']}
            style={styles.downloadButton}
          >
            <Text style={styles.downloadText}>Download</Text>
          </LinearGradient>
        </TouchableOpacity>
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
    height: 380,
    position:'absolute',
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
  downloadButton:{
    width: width * 0.6,
    height: 60,
    margin: 20,
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  downloadText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default NewAudio;