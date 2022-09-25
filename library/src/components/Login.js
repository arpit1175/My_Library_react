import React from 'react'
import "./login.css";
import { useNavigate } from 'react-router-dom';




export default function Login() {

    let navigate = useNavigate();
    return (

        <>

<div className='logo-image'>
    My Library
</div>
        <form className='login-page container ' onSubmit={onclick} id='res'>
            <div className='login-content mt-5'>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Login ID</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="loginid" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="password" />
                    </div>
                </div>
                <button type="submit" className="btn btn-outline-success" >Login</button>
            </div>


        </form>
        </>
    )

    function Alert() {
        return (
            <>
                <div class="alert alert-danger" role="alert">
                    A simple danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
                </div>
            </>
        )
    }



    function onclick(e) {
        e.preventDefault()

        let id = document.getElementById('loginid').value
        let password = document.getElementById('password').value

        console.log(id)
        console.log(password)


        if (id == "arpit.shukla" && password == "mybooks") {
            navigate("/allBookhome")

        }
        else {

            alert("please enter the correct password")
        }

        let res = document.getElementById('res')
        res.reset()

    }

}
