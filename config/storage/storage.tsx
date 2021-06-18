import AsyncStorage from '@react-native-async-storage/async-storage';

class MyStorage {

  public addNewData = async (data : any, key : string) => {
    await AsyncStorage.getItem(key, async (error, result) => {
      console.log(result);
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
    })
  }

  getData = (data : any) => {

  }

  removeAllData = (data : any) => {

  }

  removeSingleObj = (data : any) => {
    
  }

  throwError = (e: any) => {
    throw `Something goes wrong : ${e}`;
  }

}

export default MyStorage;