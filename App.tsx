import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/component/Header';
import TopPlayer from './src/component/TopPlayer';
import MusicList from './src/MusicList';
import BottomAudio from './src/component/BottomAudio'
import NewAudio from './src/component/NewAudio';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <TopPlayer />
      <MusicList />
      <BottomAudio />
      <NewAudio />
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
