import axios from 'axios';

export function getCustomer(){
    return axios.get('http://127.0.0.1:8000/customer/')
    .then(resp =>{
        return resp.data
    })
}