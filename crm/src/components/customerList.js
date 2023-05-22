import React, { useEffect , useState} from 'react'
import { getCustomer , addCustomer, editCustomer, deleteCustomer} from '../services/ApiService'
import Addcustomer from "./Addcustomer"
import EditCustomer from './Editcustomer'
export default function Customerlist(){

    const [customer, setCustomers] = useState([])
    const [addCustomerForm, setForm] = useState(false)
    const [editCustomerForm, setEditForm] = useState(false)
    const [selectedData, setSelectedData] = useState()
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

    const handleEditBtn = (cus) =>{
        setSelectedData(cus)
        setForm(false)
        setEditForm(true)
    }

    const handleEditCustomer = (e, customer_id)  =>{
        editCustomer(customer_id, e.target)
        .then(res => {
            setCustomers(res)
        })
    }

    const handleDelete =(id) =>{
        deleteCustomer(id)
    .then(res =>{
        setCustomers(customer.filter(custo => custo.customer_id !==id))
    })    }
    return (

        <div className="main-table">
            <div className="table">
        <h1>Customer List</h1>
        <div className="newbutton">
        <button onClick={()=>setForm(true)} className='btn btn-primary'>Add New Customer</button>
        </div>
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
                    <td><button className="btn btn-warning" onClick={() =>handleEditBtn(cus)}>Edit</button> <button className="btn btn-danger" onClick = {() =>handleDelete(cus.customer_id)}>Delete</button></td>
                </tr>
                })}
            </tbody>
        </table>
        </div>
        
        {addCustomerForm && <Addcustomer handleNewCustomer={handleNewCustomer}/>}
        {editCustomerForm && <EditCustomer handleEditCustomer={handleEditCustomer} selectedData={selectedData}/>}
        </div>
        
    )
}