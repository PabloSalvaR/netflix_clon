import {imgBaseUrl} from "../constants/url"

export const generateImageUrl =  (url,width) => {
    return `${imgBaseUrl}/w${width}${url}`
}

