import {Component} from "react"
import Header from "../Header"
import SideNavbar from "../SideNavbar"
import BlogData from "../BlogData"

import "./index.css"

class Home extends Component{

    render(){
        return(
            <div className="home-cont">
                <Header />
             <div className="home-container">
                <div className="side-home-nav"><SideNavbar /></div>
               <div className="home-content-container">
               <BlogData />
               </div>
             </div>
            </div>
        )
    }
}

export default Home