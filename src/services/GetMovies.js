import axios from "axios"
import {baseUrl, requests} from "../constants/url"

const fetchTmdb = async (baseUrl) => {
    return axios.get(`${baseUrl}`)
}