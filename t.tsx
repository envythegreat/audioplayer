import * as FileSystem from 'expo-file-system'
import Storage from './config/controllers/Storage' 
import { AudioObj } from './config/types';

const DownloadProgress = (downloadProgress: any) => {
  const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
  console.log(progress)
};
const storage =  new Storage();
export const downLoadAudio  = async (name: string) => {
  const data: AudioObj = {
    name: name,
    path: FileSystem.documentDirectory + `${name}.mp3`,
    date: new Date(),
    id: 1
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
  } catch (e) {
    console.error(e);
  }
}