import React from 'react'

export default function Home(){
    return (
        <div className="home">
            <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src=".\image\logo.png" alt="Logo" width="150" height="50" className="d-inline-block align-text-top" />
    </a>
    <div className='adminBut'><a href='\'>Admin</a></div>
  </div>
</nav>
<div className='home-main'>
  <div className='login'>
    
    <form>
    <h2>Login</h2>
    <div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"></input>
    </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <div className='login-submit'>
  <button type="submit" class="btn btn-primary">Submit</button>
  </div>
    </form>
  </div>
</div>
        </div>
    )
}