import AsyncStorage from '@react-native-async-storage/async-storage';
import { AudioObj } from '../types';

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

  removeAllData = (data : AudioObj) => {

  }

  removeSingleObj = (data : AudioObj) => {
    
  }

  throwError = (e: any) => {
    throw `Something goes wrong : ${e}`;
  }

}

export default Storage;