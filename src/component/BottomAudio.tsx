import React,{FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const BottomAudio:FC = () => {
  return(
    <>
      <View style={styles.container}>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'red',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    height: 130,
  }
})

export default BottomAudio