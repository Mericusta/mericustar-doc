import axios from 'axios';

export const serverHost6666 = 'http://127.0.0.1:6666'
export const serverHost6666BasicURL = '/api-6666'

export const clientForLocalHost6666 = axios.create({
    baseURL: serverHost6666BasicURL
})

export const serverHost7777 = 'http://127.0.0.1:6666'
export const serverHost7777BasicURL = '/api-7777'

export const clientForLocalHost7777 = axios.create({
    baseURL: serverHost7777BasicURL
})