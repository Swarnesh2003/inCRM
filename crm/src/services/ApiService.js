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
    }).catch(function(error){
        window.alert("Please provide a different emailId/ Contact Number")
        console.log(error)
        return error
    })
}
export function addCustomerDetails(customer){
    return axios.post('http://127.0.0.1:8000/customerDetail/',{
        customer_id: null,
        first_name : customer.first_name.value,
        last_name: customer.last_name.value,
        contact: customer.contact.value,
        email: customer.email.value,
        address1:customer.address_1.value,
        address2:customer.address_2.value,
        city:customer.city.value,
        state:customer.state.value,
        pincode:customer.pincode.value,
        purchase_date:customer.purchase_date.value,
        model: customer.model.value,
        sr_number:customer.sr_number.value,
    })
    .then(resp =>{
        return resp.data
    }).catch(function(error){
        window.alert("Please provide a different emailId/ Contact Number")
        console.log(error)
        return error
    })
}
export function editCustomer(id, customer){
    return axios.put('http://127.0.0.1:8000/customer/'+id+'/',{
        first_name : customer.first_name.value,
        last_name: customer.last_name.value,
        email: customer.email.value,
        contact: customer.contact.value,
    })
    .then(resp =>{
        return resp.data
    }).catch(function(error){
        window.alert("Please provide a different emailId/ Contact Number")
        return error})
}

export function deleteCustomer(id){
    return axios.delete('http://127.0.0.1:8000/customer/'+id+'/')
    .then(resp =>{
        return resp.data
    })
}