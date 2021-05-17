import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/component/Header';
import TopPlayer from './src/component/TopPlayer';
import MusicList from './src/MusicList';
import BottomAudio from './src/component/BottomAudio'
import NewAudio from './src/component/NewAudio';

export default function App() {

  // all for test purpose we change them later to redux
  const [click, setClick] = useState(false);
  const setClicked = () => setClick(!click)


  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header cnClicks={setClicked} />
      <TopPlayer />
      <MusicList />
      <BottomAudio />
      <NewAudio isClicked={click} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#000',
    paddingTop: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
