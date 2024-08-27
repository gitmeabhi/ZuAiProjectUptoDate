import {NavLink} from "react-router-dom"
import { useParams } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import "./index.css"

const SideNavbar = () =>{

    const { id } = useParams();

    return(
        <nav className="side-nav-bar">
            
            
            <ul className="side-list-items">
               <NavLink to ="/" className="link1">
               <li className="side-item">
                <IoHomeOutline size={25}  />
               </li>
               </NavLink>
               <NavLink to ={`/postdetailview/${id}`}  className="link1">
               <li className="side-item">
               <MdOutlineCollectionsBookmark size={25}  />
               </li>
               </NavLink>
               <NavLink to ="/login" className="link1">
               <li className="side-item">
               <AiOutlineLogout size={25} />
               </li>
               </NavLink>
            </ul>
        </nav>
    )
}

export default SideNavbar