import {TRoutesInput} from '../types';
const fs = require('fs');
const ytdl = require('ytdl-core');
const path = require('path');



export default ({app}: TRoutesInput) => {
  app.get('/audio', async (req, res) => {
    return res.send({mydata: 'hello'})
  })


  app.post('/downloader', async (req, res) => {
    const Url = req.body.VUrl
    // { quality: 'highestaudio' }
    let info = await ytdl.getInfo(Url);
    let name = info.videoDetails.title
    name = name.replace(/\s/g, '_');
    ytdl(Url, { quality: 'highestaudio' })
    .pipe(fs.createWriteStream(`./downloader/${name}.mp3`));
    return res.send({Res: `Audio DownLoaded : ${name}`})
  })


  app.get('/audioUrl/:VName', async (req, res) => {
    const name = req.params.VName
    const filePath = path.join('./downloader/',name)
    const stat = fs.statSync(filePath);

    res.writeHead(200, {
      'Content-Type': 'audio/mpeg',
    });
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  })

}