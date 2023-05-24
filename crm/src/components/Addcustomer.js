import React from 'react'

export default function Addcustomer({handleNewCustomer}){
    return (
        <div className="exmain">
        <h3>ADD CUSTOMER</h3>
        <div className="edit">
        <form onSubmit={handleNewCustomer}>
            First Name <input className="inp" type="text" name="first_name" required></input>
            Last Name <input className="inp" type="text" name="last_name" required></input>
            Email <input className="inp" type="email" name="email" required></input>
            Contact <input className="inp" type="text" name="contact" required></input>
            <button className="btn1 btn btn-primary" type="submit">ADD</button>
        </form>
        </div>
        </div>
    )
}