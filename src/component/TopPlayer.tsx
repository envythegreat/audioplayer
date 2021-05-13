import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";

export default function TopPlayer() {
  return(
    <>
      <View style={styles.container}>
      <LinearGradient start={[1,0.5]}
                  end={[0, 0]}
                  colors={['rgba(0, 0, 0, 0.54)', 'rgba(255, 252, 252, 0.25)']}
                  style={{width: '90%'}}>
        <View style={styles.playerContainer}>
          <View style={styles.playbuttonRow}>
            <TouchableOpacity
              onPress={() => console.log("Navigate to Untitled")}
              style={styles.btn}
            >
              <View style={styles.row}>
                <EntypoIcon name="controller-play" style={styles.icon}></EntypoIcon>
                <Text style={styles.iconText}>Play All</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => console.log("Navigate to Untitled")}
              style={styles.btn}
            >
              <View style={styles.row}>
                <Text style={styles.iconText}>Shuffle</Text>
                <FeatherIcon name="shuffle" style={[styles.icon, {fontSize: 30,}]}></FeatherIcon>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        </LinearGradient>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 51,
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems:'center',
    marginBottom: 5,
  },
  playerContainer: {
    height: 44,
    backgroundColor:'#000',
    margin: 1,
  },
  playbuttonRow: {
    flexDirection: "row",
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between'
  },
  btn: {
    height: 44,
    borderColor: 'snow',
    marginHorizontal: 10,
  },
  row: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    // backgroundColor: 'red'
  },
  iconText: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
  },
});