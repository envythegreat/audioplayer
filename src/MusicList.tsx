import React from 'react';
import {View, StyleSheet, Dimensions, ScrollView, SafeAreaView} from 'react-native';
import MusicRow from './component/MusicRow';
const {height} =  Dimensions.get('window');

const music = [
  {
    name: 'Black Magic (feat. Skylar Greyd)',
  },
  {
    name: 'Alfred\'s Theme [Official Audio]',
  },
  {
    name: 'Tone Deaf [Official Audio]',
  },
  {
    name: 'Book of Rhymes (feat. DJ Premier)',
  },
  {
    name: 'Rap Devil',
  },
  {
    name: 'KILLSHOT [Official Audio]',
  },
  {
    name: 'Favorite Bitch (feat. Ty Dolla $ign)',
  },
  {
    name: 'Zeus (feat. White Gold)',
  },
  {
    name: 'Hopsin - Alone With Me',
  },
  {
    name: 'NF - CLOUDS',
  },
  {
    name: 'NF - JUST LIKE YOU (Audio)',
  },
  {
    name: 'NF - TRUST (Audio) ft. Tech N9ne',
  },
  {
    name: 'NF - Leave Me Alone',
  },
  {
    name: 'Eminem - Godzilla ft. Juice WRLD',
  },
  {
    name: 'KILLSHOT [Official Audio]',
  },
  {
    name: 'Favorite Bitch (feat. Ty Dolla $ign)',
  },
  {
    name: 'Zeus (feat. White Gold)',
  },
  {
    name: 'Hopsin - Alone With Me',
  },
  {
    name: 'KILLSHOT [Official Audio]',
  },
  {
    name: 'Favorite Bitch (feat. Ty Dolla $ign)',
  },
  {
    name: 'Zeus (feat. White Gold)',
  },
  {
    name: 'Hopsin - Alone With Me',
  },
  {
    name: 'KILLSHOT [Official Audio]',
  },
  {
    name: 'Favorite Bitch (feat. Ty Dolla $ign)',
  },
  {
    name: 'Zeus (feat. White Gold)',
  },
  {
    name: 'Hopsin - Alone With Me',
  },
]


export default function MusicList() {
  console.log(height)
  return(
    <>
      <SafeAreaView style={styles.listContainer}>
        <ScrollView>
          {
            music.map(({name}, index) => (
              <MusicRow name={name} number={index} key={index} />
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
    // alignItems:'center',
    height: 658,
    marginHorizontal: 10,
  }
});