import { BlurView } from 'expo-blur';
import EntypoIcon from "react-native-vector-icons/Entypo";
import React,{FC} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

const BottomAudio:FC = () => {
  return(
    <>
      <View style={styles.container}>
        <BlurView 
          intensity={80}
          style={{width: '100%', height: '100%',}}
          tint="dark"
        >
          <View style={styles.myPlayer}>
              <Image source={require('../../assets/emn.png')}  style={styles.musicImg} />
            <View>
              <Text style={styles.musicTitle} >Black Magic (feat. Sk....</Text>
              <View style={{backgroundColor:'snow', height:2}}></View>
            </View>
            <TouchableOpacity>
              <EntypoIcon name="controller-play" style={styles.icon}></EntypoIcon>
            </TouchableOpacity>
          </View>
        </BlurView>
      </View>
    </>
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
    fontSize: 60
  },
  myPlayer:{display: 'flex', justifyContent: 'space-around', flexDirection: 'row',alignItems: 'baseline'},
  musicImg: {width: 60, height: 60, borderRadius: 10},
  musicTitle: {color: 'snow', fontSize: 16, fontWeight: '500'},
})

export default BottomAudio