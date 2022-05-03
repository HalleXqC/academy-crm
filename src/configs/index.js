import axios from 'axios'

const baseURL = 'https://osnovy.pythonanywhere.com/'

const instance = axios.create({ baseURL })

export default instance