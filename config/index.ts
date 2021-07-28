import Storage from "./controllers/Storage";
import Downloader from "./controllers/Downloader";
import {AudioObj, downloadObj} from './types';
import { setName, setUrl } from "./redux/VideoSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { setProgress, setStatus } from "./redux/keepTackSlice";


export {
  Storage,
  Downloader,
  AudioObj,
  downloadObj,
  setName,
  setUrl,
  setProgress,
  setStatus,
  useAppDispatch,
  useAppSelector
}