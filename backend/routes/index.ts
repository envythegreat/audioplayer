import {TRoutesInput} from '../types';

export default ({app}: TRoutesInput) => {
  app.get('/audio', async (req, res) => {
    return res.send({mydata: 'hello'})
  })
}