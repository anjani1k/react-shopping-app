import React,{Component} from 'react';

class Header extends Component{
    render(){

        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  Edureka
                  <img src={'../public/amazon-logo.png'} alt=''/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" aria-current="page" href="story.html">Our Story</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="courses.html">Courses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="signup.html">Signup</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="faqs.html">FAQs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html"> Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
          </nav>
        )
    }
}
export default Header;