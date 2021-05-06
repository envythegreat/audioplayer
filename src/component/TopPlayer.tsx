import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";

export default function TopPlayer() {
  return(
    <>
      <View style={styles.container}>
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
                <FeatherIcon name="shuffle" style={[styles.icon, {fontSize: 30}]}></FeatherIcon>
              </View>
            </TouchableOpacity>
          </View>
        </View>
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
    alignItems:'center'
  },
  playerContainer: {
    height: 44,
    borderWidth: 1,
    borderColor: "rgba(255,252,252,1)",
    width: '90%',
  },
  playbuttonRow: {
    flexDirection: "row",
    flex: 1,
    display: 'flex',
    justifyContent:'flex-end',
  },
  btn: {
    width: '50%',
    height: 44,
  },
  row: {
    height: 44,
    flexDirection: "row",
    flex: 1
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  iconText: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginLeft: 5,
    marginTop: 12
  },
});