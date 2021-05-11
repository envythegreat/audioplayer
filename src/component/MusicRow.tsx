import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


export default function MusicRow () {
  return(
    <>
      <View style={styles.listContainer}>
        <TouchableOpacity>
          <View style={styles.container}>
            <Text style={styles.musicNumber}>1</Text>
            <View style={styles.musicText}>
              <Text style={styles.musicName}>Music Name unknown</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.container}>
            <Text style={styles.musicNumber}>1</Text>
            <View style={styles.musicText}>
              <Text style={styles.musicName}>Music Name unknown</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    display: 'flex',
    alignItems:'center',
  },
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
    width: '5%',
    padding: 5,
  },
  musicText: {
    borderBottomColor: '#F0E8E8',
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
