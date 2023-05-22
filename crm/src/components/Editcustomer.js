import React from 'react'

export default function EditCustomer({handleEditCustomer, selectedData}){
    return(
        <div>
            <h3>EDIT CUSTOMER</h3>
            <form onSubmit={(e) => handleEditCustomer(e, selectedData.customer_id)}>
            First Name <input type="text" name="first_name" defaultValue={selectedData.first_name}></input>
            Last Name <input type="text" name="last_name" defaultValue={selectedData.last_name}></input>
            Email <input type="email" name="email" defaultValue={selectedData.email}></input>
            Contact <input type="text" name="contact" defaultValue={selectedData.contact}></input>
            <button type="submit">EDIT</button>
        </form>
        </div>
    )
}