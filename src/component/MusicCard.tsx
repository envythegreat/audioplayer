import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import React,{FC} from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {height} = Dimensions.get('window')

const MusicCard:FC = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={[0,1]}
        end={[0,1]}
        colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.2)']}
        style={{width: '100%', height: '100%'}}
      >
        <BlurView 
          intensity={90}
          style={{width: '100%', height: '100%',}}
          tint="dark"
        >
          <View style={styles.closeContainer}>
            <TouchableOpacity style={{width: '15%'}}>
              <MaterialIcons name="cancel" style={styles.closeIcon} ></MaterialIcons>
            </TouchableOpacity>
          </View>
        </BlurView>
    </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height * 0.82,
    backgroundColor: 'rgba(79, 79, 79, 0.2)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    borderRadius: 28.0846 ,
    overflow: 'hidden'
  },
  closeIcon: {
    color: '#FF4D4D',
    fontSize: 40,
  },
  closeContainer:{
    width: '100%',
    margin: 0,
    padding: 20,
    display: 'flex',
    flexDirection: 'row-reverse'
  }
});

export default MusicCard;