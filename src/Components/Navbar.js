import React,{useEffect} from 'react'

import { Link } from 'react-router-dom'

import logo from "../Images/logo.png";


const Navbar = (props) => {

    useEffect(() => {
      const countryCode = document.querySelectorAll('.dropdown-item');
      countryCode.forEach((element,index) => {
          element.addEventListener("click", ()=>{props.setCountry(index)});
      });
    
    }, // eslint-disable-next-line
    [])
    
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{padding: "0px", fontWeight: "500"}}>
                        <img src={logo} alt="" style={{height:"50px", filter: `invert(${props.theme==="dark"?"1":"0"})`}}/>
                        Newsify
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/general">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology">Technology</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Countries
                                </div>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{height: "200px", overflowY: "auto",backgroundColor: props.theme==="dark"?"gray":"white"}}>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Argentina</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Australia</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Austria</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Belgium</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Brazil</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Bulgaria</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Canada</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>China</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Colombia</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Cuba</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Czech Republic</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Egypt</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>France</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Germany</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Greece</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Hong Kong</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Hungary</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>India</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Indonesia</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Ireland</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Israel</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Italy</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Japan</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Latvia</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Lithuania</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Malaysia</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Mexico</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Morocco</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Netherlands</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>New Zealand</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Nigeria</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Norway</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Philippines</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Poland</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Portugal</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Romania</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Russia</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Saudi Arabia</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Serbia</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Singapore</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Slovakia</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Slovenia</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>South Africa</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>South Korea</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Sweden</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Switzerland</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Taiwan</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Thailand</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Turkey</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>UAE</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Ukraine</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>United Kingdom</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>United States</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: "pointer"}}>Venuzuela</div></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="form-check form-switch" style={{ float: "right" }}>
                            <input className="form-check-input" type="checkbox" id="toggleTheme" onClick={props.toggleTheme} />
                            <label className={`form-check-label text-${props.color}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar 