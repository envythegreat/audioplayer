import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface MusicProps{
  number: number;
  name: string
}

const MusicRow:FC<MusicProps>  = ({number,name}: MusicProps) => {
  return(
    <>
        <TouchableOpacity>
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
    fontSize: 18,
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
    color: 'white',
    fontSize: 18,
    padding: 5,
    paddingLeft: 0,
  }
});

export default MusicRow