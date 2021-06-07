import express, {Application} from 'express';
import cors from 'cors';
import routes from './routes';
const app: Application = express();
const PORT = 3599;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

routes({app})
app.listen(PORT, () => {
  console.log(`Express with Typescript! http://localhost:${PORT}`);
})

module.exports = app