import { LinearGradient } from 'expo-linear-gradient';
import React,{FC,useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions, Animated, Easing } from 'react-native';
import TextInput from './TextInput';
const {width} = Dimensions.get('window');
import {Downloader, useAppDispatch, useAppSelector, setUrl, setName, setStatus} from '../../config/';
import axios from "axios";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { useEffect } from 'react';
// require('dotenv').config()



const downloader = new Downloader();
const NewAudio:FC = () => {

  const [rotateAnim, setRotateAnimation] = useState(new Animated.Value(0));


  Animated.loop(
    Animated.timing(
      rotateAnim,{
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true
      }
    )
  ).start()


  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })




  const dispatch = useAppDispatch();
  const url = useAppSelector(state => state.video.url);
  const name = useAppSelector(state => state.video.name);
  const status = useAppSelector(state => state.tracker.status);
  const progress = useAppSelector(state => state.tracker.progress)
  const setNewUrl = (url: string) => dispatch(setUrl(url));
  const setNewName = (name: string) => dispatch(setName(name));

  const downloadAudio = async (name: string, url: string) => {
    dispatch(setStatus("Converting"))
    const api = '45.77.225.52'
    await axios.post(`http://${api}:3000/downloader`, {
      VUrl: url,
      Vname: name
    }).then(res => {
      console.log(res.data)
      dispatch(setStatus("Downloading"))
      downloader.audioDownloader({name, url:`http://${api}:8080/${name}.mp3`})
    }).then(() => {
      dispatch(setStatus("None"))
      dispatch(setUrl(''));
      dispatch(setName(''));
    }).finally(() => {dispatch(setStatus("Download"))})
    // downloader.removeAllData('@Audio')
    // await FileSystem.deleteAsync(FileSystem.documentDirectory + 'LuckyYou.mp3', )
  }


  return(
    <>
      <View style={[styles.container, {bottom: 0,}]}>
        <View style={styles.header} >
          <Text style={styles.textHeader} >New Audio</Text>
          {/* <TouchableOpacity>
            <MaterialIcons name="cancel" style={styles.closeIcon} ></MaterialIcons>
          </TouchableOpacity> */}
        </View>
        <TextInput  icon="link" placeholder="Youtube Url" value={url} getNewValue={setNewUrl} />
        <TextInput  icon="headphones" placeholder="Audio Name"  value={name} getNewValue={setNewName} />
        <TouchableOpacity style={{
          shadowColor: 'rgba(255, 110, 170, 1)',
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.8,
          shadowRadius: 11,  
          elevation: 5
        }} onPress={() => downloadAudio(name, url)}>
          <LinearGradient
            start={[1,0.5]}
            end={[0, 0]}
            colors={['rgba(253, 83, 86, 1)', 'rgba(255, 110, 170, 1)']}
            style={styles.downloadButton}
          >
            <Text style={styles.downloadText}>
              {status}
            </Text>
            {/*  */}
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: 380,
    zIndex: 999999,
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
    marginBottom: 0
  },
  downloadText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default NewAudio;