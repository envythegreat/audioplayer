import * as FileSystem from 'expo-file-system'
import ytdl from "react-native-ytdl"


const DownloadProgress = (downloadProgress: any) => {
  const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
  console.log(progress)
};

export const makeDr  = async (url?: string) => {
  // await FileSystem.deleteAsync(FileSystem.documentDirectory + 'MyAudioPlayer', {
  //   idempotent: false
  // })
  // data:audio/mpeg;base64,
  const urls = await ytdl(url, { quality: 'highestaudio' });
  const myd = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'MyAudioPlayer', {size: true})
  if(!myd.exists) {
    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'MyAudioPlayer')
  }
  console.log(urls[0].url)
  const downloadResumable = FileSystem.createDownloadResumable(
    urls[0].url,
    FileSystem.documentDirectory + 'MyAudioPlayer/myaudio.mp3',
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
