import React, { useEffect , useState} from 'react'
import { getCustomer , addCustomer} from '../services/ApiService'
import Addcustomer from "./Addcustomer"
export default function Customerlist(){

    const [customer, setCustomers] = useState([])
    const [addCustomerForm, setForm] = useState(false)
    useEffect(()=>{
        let mount= true
        getCustomer()
        .then(res => {
            console.log(res)
            setCustomers(res)
            return() => mount = false
        })
    },[])

    const handleNewCustomer = (e) =>{
        addCustomer(e.target)
        .then(res => setCustomers(res))
    }
    return (
        <>
        <h1>Customer List</h1>
        <table border={"2px"} cellPadding={"10px"}>
            <thead>
                <tr>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {customer.map(cus =>{
                return <tr key={cus.customer_id}>
                    <td>{cus.first_name}</td>
                    <td>{cus.last_name}</td>
                    <td>{cus.email}</td>
                    <td>{cus.contact}</td>
                    <td><button>Edit</button><button>Delete</button></td>
                </tr>
                })}
            </tbody>
        </table>
        <button onClick={()=>setForm(true)}>Add New Customer</button>
        {addCustomerForm && <Addcustomer handleNewCustomer={handleNewCustomer}/>}
        </>
    )
}