import { Link } from "react-router-dom"
const NotfoundComponent=()=>{
  
        
    
return(
    
    <div className='container-fluid text-center ' >
    <div className='notFound-info'>
        <h1>404 Page Not Found</h1>
        <small>This page is moved,removed,renamed or not exist.</small>
        <br/><br/>

        <ul className="btn-links" >
            <li> <Link className='btn btn-md btn-primary' to='/'> Home </Link> </li>
            <li> <Link className='btn btn-md btn-outline-primary' to='/'> Contact Us </Link> </li>
        </ul>
    </div>
       
    </div>
    
)
}
export default NotfoundComponent