import axios from "axios"
import url from "../constants/url"

const fetchTmdb = async (url) => {
    return axios.get(`${url}`)
}