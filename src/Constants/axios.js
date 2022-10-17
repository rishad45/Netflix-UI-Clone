import axios from "axios";
import { baseUrlApiTMDB } from './constants'
const instance = axios.create({
    baseURL: baseUrlApiTMDB
});

export default instance