import { useState} from "react"
import { useParams, Link } from 'react-router-dom';

import axios from "axios"
import Header from "../Header"
import SideNavbar from "../SideNavbar"


import "./index.css"

const UpdatePosts = () =>{

    const [title, setTitle1] = useState('')
    const [imgaeUrl, setUrl1] = useState('')
    const [description, setDesc1] = useState('')
    
    const { id } = useParams();
    
    const addPostDataToTable1 =  (e) =>{
        e.preventDefault()
        axios.put("http://localhost:3001/posts/"+ id, {title, description, imgaeUrl})
        .then(res =>{
           console.log(res)
           
           var abhi = document.getElementById("update-scc")
           if(abhi.style.display === "block"){
             abhi.style.display = "none"
           }else{
            abhi.style.display = "block"
           }
           
        }).catch(err => console.log(err))
   }

   
    
        return(
            <div className="home-cont">
                <Header />
             <div className="home-container">
                <div className="side-home-nav"><SideNavbar /></div>
               <div className="home-content-container1">
               
               <form className="add-form" id="addPostForm1" onSubmit={addPostDataToTable1}>
              <label htmlFor="title" className="post-label">Title</label>
              <input type="text" className="input-element" onChange={e => setTitle1(e.target.value)} placeholder="Enter Post Title" />
              <label htmlFor="image" className="post-label">ImageUrl</label>
              <input type="text" className="input-element" onChange={e => setUrl1(e.target.value)} placeholder="Enter Post ImageUrl" />
              <label htmlFor="desc" className="post-label">Description</label>
              <textarea id="desc" className="desc-input" onChange={e => setDesc1(e.target.value)} placeholder="Enter Post Description" rows="4" cols="50" />
            
              <button type="submit" className="save-btn" >Save</button>
              <p id="update-scc">Updated Successfully.... <Link to={`/PostDetailView/${id}`}> <button type="submit" className="save-btn" >Go Back</button></Link></p>
            </form>
                </div>
               </div>
             </div>
            
        )
    
}

export default UpdatePosts
