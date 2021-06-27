import AsyncStorage from '@react-native-async-storage/async-storage';
import { AudioObj } from '../';

class Storage {

  addNewData = async (data : AudioObj, key : string) => {
    await AsyncStorage.getItem(key, async (error, result) => {
      try{
        if(result !== undefined && result !== null) {
          let getedData = JSON.parse(result)
          getedData.push(data);
          await AsyncStorage.setItem(key, JSON.stringify(getedData));
          console.log(getedData)
        } else {
          console.log('Error no data found');
          let dataArray = [
            data
          ]
          await AsyncStorage.setItem(key, JSON.stringify(dataArray));
          console.log(dataArray);
        }
      } catch(e) {
        this.throwError(error)
      }
    })
  }

  getData = async (key: string) => {
    await AsyncStorage.getItem(key, async(error, result) => {
      try{
        if(result !== undefined && result !== null ){
          return JSON.parse(result)
        }
      } catch(e) {
        this.throwError(error)
      }
    })
  }

  removeAllData = async (key: string) => {
    await AsyncStorage.removeItem(key,)
  }

  removeSingleObj = (data : AudioObj) => {
    
  }

  throwError = (e: any) => {
    throw `Something goes wrong : ${e}`;
  }

}

export default Storage;