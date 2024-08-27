import { useState } from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import "./index.css"


const RegisterForm = () =>{
    const navigate = useNavigate()

    const [values, setValues] = useState({
        name : '',
        email : '',
        password : ''
    })
    

    const setValues1 = (e)=>{
        setValues({...values, [e.target.name] : e.target.value})
    }


    const signin =(e) =>{
        e.preventDefault()
        axios.post("http://localhost:3001/registers", values)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        navigate('/')
    }

   
    
        return(
            
              
            <div className="login-container">
                <form className="login-form" onSubmit = {signin} >
                    <h1 className="login-text">Sign Up</h1>
                    <div className="fields">
                        <label htmlFor="name1" className="login-label">Name</label>
                        <input type="text" id="name1" name = "name" className="input-ele"
                         onChange={setValues1}  placeholder="Enter Name" />
                          
                          <label htmlFor="email1" className="login-label">Email</label>
                        <input type="email" id="email1" name = "email" className="input-ele"
                         onChange={setValues1}  placeholder="Enter Email" />
                        
                        <label htmlFor="password1" name = "password" className="login-label">Password</label>
                        <input type="password" id="password1" className="input-ele"
                         onChange={setValues1} placeholder="Enter Password" />
                    </div>
                    <button type="submit" className="login-btns">Sing In</button>
                </form>
            </div>
              
            
        )
    
}

export default RegisterForm