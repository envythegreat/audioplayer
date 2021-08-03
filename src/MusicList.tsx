import React from 'react';
import { useEffect } from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import { addMusic, Storage, useAppDispatch, useAppSelector, } from '../config';
import MusicRow from './component/MusicRow';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';


const STORAGE = new Storage();
export default function MusicList() {
  const dispatch = useAppDispatch();
  const p = async () => {
    await STORAGE.getData('@Audio').then(res => {
      dispatch(addMusic(res != null ? res != false ? JSON.parse(res) : null : null)) 
    });
  }
  useEffect(() => {p()},[])
  const list = useAppSelector(state => state.music.listMusic)
  return(
    <>
      <SafeAreaView style={styles.listContainer}>
        <ScrollView>
          {
            list.map((item, index) => (
                <MusicRow name={item.name} number={index} key={index} {...{item}} />
            ))
          }
          <View style={{width: '100%', height:100}}></View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    display: 'flex',
    height: 658,
    marginHorizontal: 10,
  }
});