import {Component} from "react"
import{BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import BlogData from "./components/BlogData"
import PostDetailView from "./components/PostDetailView"
import UpdatePosts from "./components/UpdatePosts"
import LoginForm from "./components/LoginForm"
import RegisterForm from "./components/RegisterForm"

import './App.css';

class App extends Component{

  render(){
    return(

     <>
      <BrowserRouter>
      <Routes>
     
        <Route path = "/" element = {<Home />} ></Route>
        <Route path = "/login" element = {<LoginForm />} ></Route>
        <Route path = "/register" element = {<RegisterForm />} ></Route>
        <Route path = "/posts" element = {<BlogData />} ></Route>
        <Route path = "/postdetailview/:id" element = {<PostDetailView />} ></Route>
        <Route path = "/updatepost/:id" element = {<UpdatePosts />} ></Route>
      </Routes>
      </BrowserRouter>
     </>

    )
  }
}

export default App;
