import React, {Component} from "react"
import '../components/navbar.css'

class Navbar extends Component{

   state = { clicked: false};
   handleClick = () =>{
    this.setState({clicked:
    !this.state.clicked})
   }

render(){


    return(
        
        
       <nav>
            <h1 class="logo">welcome to zoo</h1>
           
            <ul>
                <li>Home</li>
                <li>Posts</li>
                <li><i class="fa fa-instagram" aria-hidden="true"></i></li>
                <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
            
            </ul>
            

            <button   className="menu_icon"  onClick={this.handleClick}>
            
            <i id="bar" className={this.state.clicked ? "fas fa-times" :
            "fas fa-bars"}
            ></i>
                
            </button>

   
        </nav>
        
        
    )
}
}
export default Navbar;