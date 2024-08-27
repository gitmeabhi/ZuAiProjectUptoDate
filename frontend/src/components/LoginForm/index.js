
import {useNavigate} from "react-router-dom"
import "./index.css"
import { useState } from "react"
import axios from "axios"

const LoginForm = () =>{
    const navigate = useNavigate()


    const [values, setValues1] = useState({
        name : '',
        password : ''
    })
    

    const setValues2 = (e)=>{
        setValues1({...values, [e.target.name] : e.target.value})
    }


    const logininto =(e) =>{
        e.preventDefault()
        axios.post("http://localhost:3001/login", values)
        .then(res => 
        {
            console.log(res.data.response)
            if(res.data.Status === "success"){
                alert(res.data.Error)
            }else{
           
                navigate('/')
            }
        }
        )
        .catch(err => console.log(err))
        
    }


   
    
        return(
            
              
            <div className="login-container">
                <form className="login-form" onSubmit = {logininto} >
                    <h1 className="login-text">ZuAI</h1>
                    <div className="fields">
                        <label htmlFor="name2" className="login-label">Name</label>
                        <input type="text " id="name2" onChange={setValues2} name="name" className="input-ele"  placeholder="Enter Name" />
                        <label htmlFor="pass1"  className="login-label">Password</label>
                        <input type="password" id="pass1" onChange={setValues2} name="password" className="input-ele" placeholder="Enter Password" />
                    </div>
                    <button type="submit" className="login-btns">Login</button>
                </form>
            </div>
              
            
        )
    
}

export default LoginForm