import { StatusBar } from 'expo-status-bar';
import React, {useCallback, useMemo, useRef } from 'react';
import { StyleSheet, View} from 'react-native';
import { BottomAudio, Header, MusicCard, NewAudio, TopPlayer } from './src/component';
import MusicList from './src/MusicList';

import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';



export default function App() {

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['10%', '40%'], []);
  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);


  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Header cnClicks={handlePresentModalPress} />
        <TopPlayer />
        <MusicList />
        <BottomAudio />
        {/* <MusicCard /> */}
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <NewAudio />
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    paddingTop: 20
  },
});
