import { StatusBar } from 'expo-status-bar';
import React, {useCallback, useMemo, useRef } from 'react';
import { StyleSheet, View} from 'react-native';
import { BottomAudio, CustomBackground, Header, MusicCard, NewAudio, TopPlayer } from './src/component';
import MusicList from './src/MusicList';

import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';



export default function App() {

  // NewAudio Modal
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['10%', '40%'], []);

  const handlePresentModalPress = useCallback(() => {
    if (bottomSheetModalRef.current) {
      bottomSheetModalRef.current.present();
    }
  }, []);



  //Card Music Modal
  const bottomSheetMusicCard = useRef<BottomSheetModal>(null);
  const CardsnapPoints = useMemo(() => ['40%', '78%'], []);

  const handlePresentCardPress = useCallback(() => {
    if (bottomSheetMusicCard.current) {
      bottomSheetMusicCard.current.present();
    }
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
        <BottomAudio  onClicks={handlePresentCardPress} />
        
        {/* <MusicCard /> */}
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <NewAudio />
        </BottomSheetModal>
        <BottomSheetModal
          ref={bottomSheetMusicCard}
          name="Music Card"
          index={1}
          snapPoints={CardsnapPoints}
          onChange={handleSheetChanges}
          backgroundComponent={CustomBackground}
        >
          <MusicCard />
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
