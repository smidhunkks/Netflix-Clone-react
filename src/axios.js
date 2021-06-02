import axios from 'axios'
import {Base_URL} from './constants/constants'

const instance=axios.create({
    baseURL:Base_URL
})

export default instance;