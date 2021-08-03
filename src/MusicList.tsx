import React from 'react';
import { useEffect } from 'react';
import {View, StyleSheet, Dimensions, ScrollView, SafeAreaView} from 'react-native';
import { addMusic, AudioObj, Storage, useAppDispatch, useAppSelector, } from '../config';
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

const storage = new Storage();
export default function MusicList() {
  const dispatch = useAppDispatch();
  const p = async () => {
    await storage.getData('@Audio').then(res => {
      dispatch(addMusic(res != null ? res != false ? JSON.parse(res) : null : null)) 
    });
  }
  useEffect(() => {p()})
  const list = useAppSelector(state => state.music.listMusic)
  return(
    <>
      <SafeAreaView style={styles.listContainer}>
        <ScrollView>
          {
            list.map((item, index) => (
                <MusicRow name={item.name} number={index} key={index} />
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