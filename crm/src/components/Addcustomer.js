import React from 'react'

export default function Addcustomer({handleNewCustomer}){
    return (
        <>
        <h3>ADD CUSTOMER</h3>
        <form onSubmit={handleNewCustomer}>
            First Name <input type="text" name="first_name"></input>
            Last Name <input type="text" name="last_name"></input>
            Email <input type="email" name="email"></input>
            Contact <input type="text" name="contact"></input>
            <button type="submit">ADD</button>
        </form>
        </>
    )
}