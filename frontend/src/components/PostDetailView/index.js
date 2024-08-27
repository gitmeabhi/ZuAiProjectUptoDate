import { useEffect, useState} from "react"
import { useParams, useNavigate, Link } from 'react-router-dom';

import axios from "axios"
import Header from "../Header"
import SideNavbar from "../SideNavbar"


import "./index.css"

const PostDetailView = () =>{
    const [student, setStudent] = useState([])
    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() =>{
        axios.get(`http://localhost:3001/posts/${id}`)
        .then(res => setStudent(res.data))
        .catch(err => console.log(err))
    }, [id])

    

    const deletePost = async (id) =>{
        try{
         await axios.delete("http://localhost:3001/posts/" + id)
        
         navigate('/')
        }catch(err){
         console.log(err)
        }
     }
    
        return(
            <div className="home-cont">
                <Header />
             <div className="home-container">
                <div className="side-home-nav"><SideNavbar /></div>
               <div className="home-content-container">
              
            
            <ul className="blog-items-list-detail">
                {student.map((each) => (
                   
                        <li key = {each.id} className="blog-item-detail">
                            <div className="detail-content">
                                <h1 className="title">{each.id} . {each.title}</h1>
                                <img src={each.imgaeUrl} alt = "post img" className="post-img" />
                                <p className="desc">{each.description}</p>
                                <div>
                                <button type="button" className="delete-btn" onClick={e => deletePost(each.id)}>
                            Delete
                            </button>
                           <Link to = {`/updatepost/${each.id}`}>
                           <button type="button" className="delete-btn">
                            Update
                            </button>
                           </Link>
                                </div>
                            </div>
                            </li>
                  
                ))}
            </ul>
        </div>
               </div>
             </div>
            
        )
    
}

export default PostDetailView