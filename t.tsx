import * as FileSystem from 'expo-file-system'


const DownloadProgress = (downloadProgress: any) => {
  const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
  console.log(progress)
};

export const downLoadAudio  = async () => {
  // await FileSystem.deleteAsync(FileSystem.documentDirectory + 'Helvegen.mp3');
  // const myd = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'Helvegen.mp3', {size: true})
  // if(!myd.exists){
  //   console.log('not found')
  // }
  const downloadResumable = FileSystem.createDownloadResumable(
    'http://192.168.1.100:3599/audioUrl/Helvegen.mp3',
    FileSystem.documentDirectory + 'Helvegen.mp3',
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
