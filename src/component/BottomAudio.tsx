import React,{FC} from 'react';
import { BlurView } from 'expo-blur';
import EntypoIcon from "react-native-vector-icons/Entypo";
import {View, StyleSheet, Text, Image, TouchableOpacity,} from 'react-native';

interface BAProps{
  onClicks: () => void;
}

const BottomAudio:FC<BAProps> = ({onClicks} : BAProps) => {
  return(
    <TouchableOpacity  onPress={onClicks} style={styles.container} activeOpacity={1.5}>
        <BlurView 
          intensity={80}
          style={{width: '100%', height: '100%',}}
          tint="dark"
        >
          <View style={styles.myPlayer}>
              <Image source={require('../../assets/emn.png')}  style={styles.musicImg} />
            <View style={{width: '60%'}}>
              <Text style={styles.musicTitle} >Black Magic (feat...</Text>
              <Text style={styles.musicTimer}>1:55</Text>
              <View style={styles.progressContainer}><View style={styles.progress}></View></View>
              
            </View>
            <TouchableOpacity>
              <EntypoIcon name="controller-play" style={styles.icon}></EntypoIcon>
            </TouchableOpacity>
          </View>
        </BlurView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'rgba(79, 79, 79, 0.2)',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    height: 135,
  },
  icon:{
    color: 'snow',
    fontSize: 60,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 3,  
    elevation: 2
  },
  myPlayer:{
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 5,
    alignContent: 'center',
    paddingTop: 5,
    paddingLeft: 5
  },
  musicImg: {width: 60, height: 60, borderRadius: 10},
  musicTitle: {color: 'snow', fontSize: 16, fontWeight: '500'},
  progressContainer: {
    height: 4,
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginTop:10,
    width: '100%',
    position: 'relative'
  },
  progress: {
    position: 'absolute',
    bottom:0,
    left: 0,
    height: 4,
    backgroundColor: '#FF4D4D',
    borderRadius: 5,
    width: '60%'
  },
  musicTimer:{
    textAlign: 'right',
    color: 'snow'
  }
})

export default BottomAudio