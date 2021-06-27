import Storage from "./controllers/Storage";
import Downloader from "./controllers/Downloader";
import {AudioObj, downloadObj} from './types';
import { setName, setUrl } from "./redux/VideoSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";


export {Storage, Downloader, AudioObj, downloadObj, setName, setUrl, useAppDispatch, useAppSelector}