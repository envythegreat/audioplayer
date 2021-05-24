import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import React,{FC} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';

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
          <View style={styles.imgBg}>
            <Image source={require('../../assets/emn.png')} style={styles.musicImage} />
          </View>
          <Text style={styles.myText}>Black Magic (feat. Skylar Grey)</Text>
          <View style={styles.progressContainer}><View style={styles.progress}></View></View>
          <Text style={[styles.myText, {textAlign: 'right', fontWeight: 'bold', marginRight: 38}]}>1:56</Text>
          <View style={styles.musicController}>
            <TouchableOpacity>
              <FeatherIcon name="skip-back" style={{fontSize: 50,}}  color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FeatherIcon name="pause" style={{fontSize: 50,}} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FeatherIcon name="skip-forward" style={{fontSize: 50,}}  color="#fff"/>
            </TouchableOpacity>
          </View>
          <View style={styles.otherControllers}>
            <TouchableOpacity>
              <FeatherIcon name="repeat" style={{fontSize: 30,}}  color="#fff"/>
            </TouchableOpacity>
            <TouchableOpacity>
              <FeatherIcon name="trash-2" style={{fontSize: 30,}}  color="#fff"/>
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
    zIndex: 9999,
    borderRadius: 20 ,
    overflow: 'hidden',
  },
  imgBg:{
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginVertical: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,  
    elevation: 1
  },
  musicImage:{
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  myText:{
    color:'#FFF',
    fontSize: 18,
    margin: 20,
    marginTop:10
  },
  progressContainer: {
    height: 4,
    backgroundColor: '#000000',
    borderRadius: 5,
    marginTop:10,
    width: '80%',
    position: 'relative',
    alignSelf: 'center',
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
  musicController:{
    flexDirection: 'row',
    alignSelf: 'center',
    margin: 15,
    justifyContent: 'space-between',
    width: '40%'
  },
  otherControllers: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal: 20
  }
});

export default MusicCard;