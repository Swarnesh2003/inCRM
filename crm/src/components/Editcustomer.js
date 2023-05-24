import React from 'react'

export default function EditCustomer({handleEditCustomer, selectedData}){
    return(
        <div className="exmain">
            <h3>EDIT CUSTOMER</h3>
            <div className="edit">
            <form onSubmit={(e) => handleEditCustomer(e, selectedData.customer_id)}>
            First Name <input className="inp" type="text" name="first_name" defaultValue={selectedData.first_name}></input>
            Last Name <input className="inp" type="text" name="last_name" defaultValue={selectedData.last_name}></input>
            Email <input className="inp" type="email" name="email" defaultValue={selectedData.email}></input>
            Contact <input  className="inp" type="text" name="contact" defaultValue={selectedData.contact}></input>
            <button type="submit" className="btn1 btn btn-primary">EDIT</button>
        </form>
        </div>
        </div>
    )
}