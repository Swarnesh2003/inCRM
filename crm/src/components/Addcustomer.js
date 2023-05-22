import React from 'react'

export default function Addcustomer({handleNewCustomer}){
    return (
        <div className="exmain">
        <h3>ADD CUSTOMER</h3>
        <div class="edit">
        <form onSubmit={handleNewCustomer}>
            First Name <input className="inp" type="text" name="first_name"></input>
            Last Name <input className="inp" type="text" name="last_name"></input>
            Email <input className="inp" type="email" name="email"></input>
            Contact <input className="inp" type="text" name="contact"></input>
            <button className="btn1 btn btn-primary" type="submit">ADD</button>
        </form>
        </div>
        </div>
    )
}