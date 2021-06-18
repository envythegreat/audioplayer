import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system'
import MyStorage from './config/storage/storage' 

const DownloadProgress = (downloadProgress: any) => {
  const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
  console.log(progress)
};
const storage =  new MyStorage;
export const downLoadAudio  = async (name: string) => {
  // await FileSystem.deleteAsync(FileSystem.documentDirectory + 'amari.mp3');
  // const myd = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'Helvegen.mp3', {size: true})
  // if(!myd.exists){
  //   console.log('not found')
  // }
  const data = {
    name: name,
    path: FileSystem.documentDirectory + `${name}.mp3`,
  }
  const downloadResumable = FileSystem.createDownloadResumable(
    'http://45.77.225.52/outputfile.mp3',
    FileSystem.documentDirectory + `${name}.mp3`,
    {},
    DownloadProgress
  );
  try {
   
    //@ts-ignore
    const { uri } = await downloadResumable.downloadAsync();
    console.log('Finished downloading to ', uri);
    await storage.addNewData(data, '@Audio')
  } catch (e) {
    console.error(e);
  }
}