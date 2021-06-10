import {TRoutesInput} from '../types';
const fs = require('fs');
const ytdl = require('ytdl-core');




export default ({app}: TRoutesInput) => {
  app.get('/audio', async (req, res) => {
    return res.send({mydata: 'hello'})
  })

  
  app.post('/downloader', async (req, res) => {
    const Url = req.body.VUrl
    const name = req.body.VName
    // { quality: 'highestaudio' }
    let info = await ytdl.getInfo(Url);
    ytdl(Url, { quality: 'highestaudio' })
    .pipe(fs.createWriteStream(`./downloader/${name}.mp3`));
    return res.send({info})
  })


  app.get('/audioUrl', async (req, res) => {
    const name = req.query.VName
    res.download(`./downloader/${name}.mp3`);
  })

}