import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/component/Header';
import TopPlayer from './src/component/TopPlayer';
import MusicRow from './src/component/MusicRow'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <TopPlayer />
      <MusicRow />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
