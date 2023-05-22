import axios from 'axios';

export function getCustomer(){
    return axios.get('http://127.0.0.1:8000/customer/')
    .then(resp =>{
        return resp.data
    })
}

export function addCustomer(customer){
    return axios.post('http://127.0.0.1:8000/customer/',{
        customer_id: null,
        first_name : customer.first_name.value,
        last_name: customer.last_name.value,
        email: customer.email.value,
        contact: customer.contact.value,
    })
    .then(resp =>{
        return resp.data
    })
}