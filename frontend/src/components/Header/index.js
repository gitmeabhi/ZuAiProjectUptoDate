import {Link} from "react-router-dom"
import { IoMenu } from "react-icons/io5";
import "./index.css"

const Header = () =>{

    return(
        <nav className="nav-bar">
             <Link to ="/" className="link">
             <h1 className="logo">ZuAI</h1>
               </Link>
            
            <ul className="list-items">
               <Link to ="/login" className="link">
               <li className="item">
                <button type = "button" className="login-btn">Login</button>
               </li>
               </Link>
               <Link to ="/register" className="link">
               <li className="item">
                <button type = "button" className="join-btn">Join Now</button>
               </li>
               </Link>
            </ul>

            <button type="button" className="menu"><IoMenu size={30} /></button>
        </nav>
    )
}

export default Header