import * as FileSystem from 'expo-file-system'
import { AudioObj, downloadObj } from '../';

class Downloader {


  DownloadProgress = (downloadProgress: any) => {
    const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
    console.log(progress)
  };

  removeAudio = async (path: any) => {
    await FileSystem.deleteAsync(path);
  }

  async ifExist (path: any) {
    const ifExist = await FileSystem.getInfoAsync(path, {size: true})
    return ifExist.exists
  }

  async audioDownloader(data: downloadObj) {
    const dataStorage: AudioObj = {
      name: data.name,
      path: FileSystem.documentDirectory + `${data.name}.mp3`,
      date: new Date(),
      id: 1
    }
    const downloadResumable = FileSystem.createDownloadResumable(
      data.url,
      FileSystem.documentDirectory + `${data.name}.mp3`,
      {},
      this.DownloadProgress
    );
    try {
      //@ts-ignore
      const { uri } = await downloadResumable.downloadAsync();
      console.log('Finished downloading to ', uri);
    } catch (e) {
      console.error(e);
    }
  }
}

export default Downloader