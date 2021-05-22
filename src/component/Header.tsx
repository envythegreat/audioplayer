import React, {FC} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

interface HProps{
  cnClicks: () => void
}

const Header:FC<HProps> = ({cnClicks} : HProps) => {
  return(
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.mp3AudioRow}>
            <Text style={styles.mp3Audio}>Mp3 Audio</Text>
            <TouchableOpacity
              onPress={cnClicks}
              style={styles.button}
            >
              <Icon name="circle-with-plus" style={styles.icon} />
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
    height: 107,
    // backgroundColor: 'red'
  },
  header: {
    height: 44,
    width: 329,
    marginTop: 49,
    marginLeft: 21,
    // backgroundColor: 'snow',
  },
  mp3AudioRow:{
    height: 44,
    flexDirection: "row",
    flex: 1
  },
  mp3Audio:{
    // fontFamily: "roboto-700",
    color: "rgba(236,236,236,1)",
    fontSize: 36
  },
  button:{
    width: 40,
    height: 44,
    marginLeft: 113
  },
  icon:{
    color: "rgba(255,77,77,1)",
    fontSize: 40
  },
});

export default Header