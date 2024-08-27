
import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom"

import axios from "axios"

import "./index.css"

const BlogData = () =>{
    const [student, setStudent] = useState([])
    const [title, setTitle] = useState('')
    const [imgaeUrl, setUrl] = useState('')
    const [description, setDesc] = useState('')


    useEffect(() =>{
        axios.get('http://localhost:3001/posts')
        .then(res => setStudent(res.data))
        .catch(err => console.log(err))
    }, [])

    const addPostDataToTable = async (e) =>{
         e.preventDefault()
         axios.post("http://localhost:3001/posts", {title, description, imgaeUrl})
         .then(res =>{
            console.log(res)
            window.location.reload()


         }).catch(err => console.log(err))
    }

   

  
     const showForm = () =>{
       

        var x = document.getElementById("addPostForm");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        
        }
     }
   
 

    return(
        <div className="blog-container">
              <div className="total">
              <div className="add-post-container">
                <h1 className="add-text">Posts</h1>
                <button type = "button" className="add-post-btn" onClick={showForm}>Add Post</button>
            </div>
            <form className="add-form" id="addPostForm" onSubmit={addPostDataToTable}>
              <label htmlFor="title" className="post-label">Title</label>
              <input type="text" className="input-element" onChange={e => setTitle(e.target.value)} placeholder="Enter Post Title" />
              <label htmlFor="image" className="post-label">ImageUrl</label>
              <input type="text" className="input-element" onChange={e => setUrl(e.target.value)} placeholder="Enter Post ImageUrl" />
              <label htmlFor="desc" className="post-label">Description</label>
              <textarea id="desc" className="desc-input" onChange={e => setDesc(e.target.value)} placeholder="Enter Post Description" rows="4" cols="50" />
              <button type="submit" className="save-btn" >Post</button>
            </form>
              </div>
            
            <ul className="blog-items-list">
            
                {student.map((each) => (
                    <Link to ={`/postdetailview/${each.id}`} className = "link">
                        <li key = {each.id} id = "hoverme" className="blog-item">
                          {each.title}
                          
                          </li>
                    </Link>
                ))}
            </ul>
        </div>
        
    )
    
}


export default BlogData