import React, {FC, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { AudioObj } from '../../config';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';

interface MusicProps{
  number: number;
  name: string;
  item: AudioObj
  playSound?: () => void
}

const MusicRow:FC<MusicProps>  = ({number,name, playSound}: MusicProps) => {
  return(
    <>
        <TouchableOpacity onPress={playSound}>
          <View style={styles.container}>
            <Text style={styles.musicNumber}>{number}</Text>
            <View style={styles.musicText}>
              <Text style={styles.musicName}>{name}</Text>
            </View>
          </View>
        </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 35,
    backgroundColor: 'transparent',
    width: '90%',
    marginBottom:10
  },
  musicNumber:{
    color: 'rgba(222, 209, 209, 0.60)',
    fontSize: 16,
    padding: 5,
    textAlign: 'left'
  },
  musicText: {
    borderBottomColor: 'rgba(222, 209, 209, 0.80)',
    height: '100%',
    borderBottomWidth:0.5,
    width: '90%',
    marginLeft:10
  },
  musicName: {
    color: 'rgba(255, 252, 252, 0.80)',
    fontSize: 16,
    padding: 5,
    paddingLeft: 0,
  }
});

export default MusicRow