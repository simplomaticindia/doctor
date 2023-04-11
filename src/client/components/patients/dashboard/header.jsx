import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//icon
import patient from "../../../assets/images/patients/patient.jpg"
import { faHospital } from "@fortawesome/free-regular-svg-icons";
import logo from "../../../assets/images/logo.png";
import IMG01 from "../../../assets/images/doctors/doctor-thumb-02.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import { useEffect } from "react";
import config from "config";
import AOS from "aos";
import "aos/dist/aos.css";
import { LinkOff } from "@material-ui/icons";

const Header = (props) => {

  //Aos

  useEffect(() => {
    AOS.init({duration: 1200,
      once: true});  
    
  }, []);

 //mobile menu  
 const [isSideMenu, setSideMenu] = useState("")
 const [isSideMenuone,setSideMenuone] =useState("")
 const [isSideMenutwo,setSideMenutwo] =useState("")
 const toggleSidebar = (value) => {
   console.log (value);
   setSideMenu(value)
   
 }
 const toggleSidebarone = (value) => {
   console.log (value);
   setSideMenuone(value)
   
 }
 const toggleSidebartwo = (value) => {
   console.log (value);
   setSideMenutwo(value)
   
 }
	
  console.log("Working", isSideMenu)

  let pathnames = window.location.pathname

  const [active, setActive] = useState(false);
  const url = pathnames.split("/").slice(0, -1).join("/");

  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };

  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };


  return ( 
    <>
     {  (pathnames.includes("homeslider1")) &&
        <div className="header-top">
          <div className="left-top ">
            <ul>
              <li><i className="fas fa-map-marker-alt top-icon" />123, washington street, uk</li>
              <li><i className="fas fa-phone-volume top-icon" />+19 123-456-7890</li>
              <li><i className="fas fa-envelope top-icon" />mail@yourdomain.com</li>
            </ul>
          </div>
          <div className="right-top ">
            <ul>
              <li><i className="fab fa-facebook-f top-icons" />
              </li>
              <li><i className="fab fa-instagram top-icons" />
              </li>
              <li><i className="fab fa-linkedin-in top-icons" />
              </li>
              <li><i className="fab fa-twitter top-icons" />
              </li>
            </ul>
          </div>
        </div>
    }
    { (!pathnames.includes("home1") && !pathnames.includes("home4") && !pathnames.includes("home6") && !pathnames.includes("home7") && !pathnames.includes("home8")) && 
          <header className="header">
          <nav className={`navbar navbar-expand-lg header-nav ${pathnames.includes("home1") ? "nav-transparent" : "" }`}>
            <div className="navbar-header">
              <a href="#0" id="mobile_btn" onClick={() => onHandleMobileMenu()}>
                <span className="bar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </a>
              <Link to="/home" className="navbar-brand logo">
                <img src={logo} className="img-fluid" alt="Logo" />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/home" className="menu-logo">
                  <img src={logo} className="img-fluid" alt="Logo" />
                </Link>
                <a
                  href="#0"
                  id="menu_close"
                  className="menu-close"
                  onClick={() => onhandleCloseMenu()}
                >
                  <i className="fas fa-times"></i>
                </a>
              </div>
              <ul className="main-nav">
             
                  <li className={`has-submenu ${pathnames.includes("home") || pathnames.includes("home2") || pathnames.includes("home3") || pathnames.includes("home5")|| pathnames.includes("homeslider1") || pathnames.includes("home4") || pathnames.includes("homeslider2") || pathnames.includes("home6") || pathnames.includes("home7") && !pathnames.includes("home10") || pathnames.includes("home11") || pathnames.includes("home12") || pathnames.includes("home13") || pathnames.includes("home14") || pathnames.includes("home8") ? "active" : ""}`}>
                 <a href="#0" className={isSideMenu == "home" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="home" ? "": "home")} >Home <i className="fas fa-chevron-down" /></a>
                  { isSideMenu == "home" ? 
                  <ul className="submenu">
                  <li className={pathnames.includes("home")  && !pathnames.includes("home2") && !pathnames.includes("home3") && !pathnames.includes("home5")&& !pathnames.includes("homeslider1") && !pathnames.includes("home4") && !pathnames.includes("homeslider2") && !pathnames.includes("home6") && !pathnames.includes("home7") && !pathnames.includes("home10") && !pathnames.includes("home11") && !pathnames.includes("home12") && !pathnames.includes("home13")  && !pathnames.includes("home14") && !pathnames.includes("home8")  ? "active" : ""}><Link to="/home">Home</Link></li>     
                    <li className={pathnames.includes("home2") ? "active" : ""}><Link to="/home2">Home 2</Link></li>
                    <li className={pathnames.includes("home3") ? "active" : ""}><Link to="/home3">Home 3</Link></li>                   
                    <li className={pathnames.includes("homeslider1") ? "active" : ""}><Link to="/homeslider1">Home 4</Link></li>

                    <li className={pathnames.includes("home5") ? "active" : ""}><Link to="/home5">Home 5</Link></li>
                    <li className={pathnames.includes("homeslider2") ? "active" : ""}><Link to="/homeslider2">Home 6</Link></li>  
                    
                    <li className={pathnames.includes("/home7") ? "active" : ""}><Link to="/home7">Home 7</Link></li>  
                   
                    <li className={pathnames.includes("/home8") ? "active" : ""}><Link to="/home8">Home 8</Link></li> 
                    <li className={pathnames.includes("home9") ? "active" : ""}><Link to="/home9">Home 9</Link></li>  
                    <li className={pathnames.includes("home10") ? "active" : ""}><Link to="/home10">Home 10</Link></li>
                    <li className={pathnames.includes("/home11") ? "active" : ""}><Link to="/home11">Home 11</Link></li>   
                    <li className={pathnames.includes("/home12") ? "active" : ""}><Link to="/home12">Home 12</Link></li>  
                    <li className={pathnames.includes("/home13") ? "active" : ""}><Link to="/home13">Home 13</Link></li> 
                    <li className={pathnames.includes("/home14") ? "active" : ""}><Link to="/home14">Home 14</Link></li>   
                   
                  </ul>
                  :""
                }
                </li>
                <li className={`has-submenu ${url.includes("/doctor") ? "active" : ""}`}>
                <a  className={isSideMenu == "doctors" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="doctors" ? "": "doctors")} >Doctors <i className="fas fa-chevron-down" /></a>              
                  { isSideMenu == "doctors" ?  
                  <ul className={`submenu`}>

                    <li className={pathnames.includes("doctor-dashboard") ? "active" : ""}>
                      <Link to="/doctor/doctor-dashboard" onClick={()=>onhandleCloseMenu()}>Doctor Dashboard</Link>
                    </li>
                    <li className={pathnames.includes("appointments") ? "active" : ""}>
                      <Link to="/doctor/appointments" onClick={()=>onhandleCloseMenu()}>Appointments</Link>
                    </li>
                    <li className={pathnames.includes("schedule-timing") ? "active" : ""}>
                      <Link to="/doctor/schedule-timing" onClick={()=>onhandleCloseMenu()}>Schedule Timing</Link>
                    </li>
                    <li className={pathnames.includes("my-patients") ? "active" : ""}>
                      <Link to="/doctor/my-patients" onClick={()=>onhandleCloseMenu()}>Patients List</Link>
                    </li>
                    <li className={pathnames.includes("patient-profile") ? "active" : ""}>
                      <Link to="/doctor/patient-profile" onClick={()=>onhandleCloseMenu()}>Patients Profile</Link>
                    </li>
                    <li className={pathnames.includes("chat-doctor") ? "active" : ""}>
                      <Link to="/doctor/chat-doctor" onClick={()=>onhandleCloseMenu()}>Chat</Link>
                    </li>
                    <li className={pathnames.includes("invoice") ? "active" : ""}>
                      <Link to="/pages/invoice" onClick={()=>onhandleCloseMenu()}>Invoices</Link>
                    </li>
                    <li className={pathnames.includes("profile-setting") ? "active" : ""}>
                      <Link to="/doctor/profile-setting" onClick={()=>onhandleCloseMenu()}>Profile Settings</Link>
                    </li>
                    <li className={pathnames.includes("review") ? "active" : ""}>
                      <Link to="/doctor/review" onClick={()=>onhandleCloseMenu()}>Reviews</Link>
                    </li>
                    <li className={pathnames.includes("doctor-register") ? "active" : ""}>
                      <Link to="/doctor/doctor-register" onClick={()=>onhandleCloseMenu()}>Doctor Register</Link>
                    </li>
                    <li className={`has-submenu ${pathnames.includes("doctor-blog") ? "active" : ""}`}>
										<Link to="/doctor-blog" onClick={()=>onhandleCloseMenu()}>Blog</Link>
										<ul className="submenu"> 
											<li><Link to="/doctor-blog" onClick={()=>onhandleCloseMenu()}>Blog</Link></li>
											<li><Link to="/blog/blog-details" onClick={()=>onhandleCloseMenu()}>Blog view</Link></li>
											<li><Link to="/blog/doctor-add-blog" onClick={()=>onhandleCloseMenu()}>Add Blog</Link></li>
										</ul>
									</li>
                  </ul>
                  :""
                }
                </li>
                <li className={`has-submenu ${url.includes("/patient") ? "active" : ""}`}>
                <a  className={isSideMenu == "patients" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="patients" ? "": "patients")} >Patients <i className="fas fa-chevron-down" /></a>              
                  { isSideMenu == "patients" ?  
                  <ul className={`submenu`}>
                    <li className={`has-submenu ${pathnames.includes("doctor") && !pathnames.includes("doctor-profile") && !pathnames.includes("search-doctor") ? "active" : ""}`}>
                    <a  className={isSideMenutwo == "doctor" ? "subdrop" : ""} onClick={()=> toggleSidebartwo(isSideMenutwo =="doctor" ? "": "doctor")} >Doctors </a>              
                  { isSideMenutwo == "doctor" ?  
                  <ul className="submenu">
                    <li className={pathnames.includes("doctor-grid") ? "active" : ""}>
                      <Link to="/patient/doctor-grid" onClick={()=>onhandleCloseMenu()}>Map Grid</Link>
                    </li>
                    <li className={pathnames.includes("doctor-list") ? "active" : ""}>
                      <Link to="/patient/doctor-list" onClick={()=>onhandleCloseMenu()}>Map List</Link>
                    </li>
                    <li className={pathnames.includes("map-list") ? "active" : ""}>
                      <Link to="/patient/map-list" onClick={()=>onhandleCloseMenu()}>Map List 1</Link>
                      </li>
                  </ul>:""
                  }
                    </li>
                    <li className={pathnames.includes("search-doctor") ? "active" : ""}>
                      <Link to="/patient/search-doctor" onClick={()=>onhandleCloseMenu()}>Search Doctor</Link>
                    </li>
                    <li className={pathnames.includes("doctor-profile") ? "active" : ""}>
                      <Link to="/patient/doctor-profile" onClick={()=>onhandleCloseMenu()}>Doctor Profile</Link>
                    </li>
                    <li className={pathnames.includes("booking") && !pathnames.includes("booking-success") ? "active" : ""}>
                      <Link to="/patient/booking" onClick={()=>onhandleCloseMenu()}>Booking</Link>
                    </li>
                    <li className={pathnames.includes("checkout") ? "active" : ""}>
                      <Link to="/patient/checkout" onClick={()=>onhandleCloseMenu()}>Checkout</Link>
                    </li>
                    <li className={pathnames.includes("booking-success") ? "active" : ""}>
                      <Link to="/patient/booking-success" onClick={()=>onhandleCloseMenu()}>Booking Success</Link>
                    </li>
                    <li className={pathnames.includes("dashboard") ? "active" : ""}>
                      <Link to="/patient/dashboard" onClick={()=>onhandleCloseMenu()}>Patient Dashboard</Link>
                    </li>
                    <li className={pathnames.includes("favourites") ? "active" : ""}>
                      <Link to="/patient/favourites" onClick={()=>onhandleCloseMenu()}>Favourites</Link>
                    </li>
                    <li className={pathnames.includes("patient-chat") ? "active" : ""}>
                      <Link to="/patient/patient-chat" onClick={()=>onhandleCloseMenu()}>Chat</Link>
                    </li>
                    <li className={pathnames.includes("profile") && !pathnames.includes("doctor-profile") ? "active" : ""}>
                      <Link to="/patient/profile" onClick={()=>onhandleCloseMenu()}>Profile Settings</Link>
                    </li>
                    <li className={pathnames.includes("change-password") ? "active" : ""}>
                      <Link to="/patient/change-password" onClick={()=>onhandleCloseMenu()}>Change Password</Link>
                    </li>
                  </ul>:""
                    }
                </li>
                <li className={`has-submenu ${url.includes("/Pharmacy") ? "active" : ""}`}>
                <a  className={isSideMenu == "pharmacy" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="pharmacy" ? "": "pharmacy")} >Pharmacy <i className="fas fa-chevron-down" /></a>              
                  { isSideMenu == "pharmacy" ?
                  <ul className="submenu">
                    <li className={pathnames.includes("Pharmacy-index") ? "active" : ""}><Link to="/Pharmacy/Pharmacy-index">Pharmacy</Link></li>
                    <li className={pathnames.includes("Pharmacy-details") ? "active" : ""}><Link to="/Pharmacy/Pharmacy-details">Pharmacy Details</Link></li>
                    <li className={pathnames.includes("pharmacy-search") ? "active" : ""}><Link to="/Pharmacy/pharmacy-search">Pharmacy Search</Link></li>
                    <li className={pathnames.includes("product-all") ? "active" : ""}><Link to="/Pharmacy/product-all">Product</Link></li>
                    <li className={pathnames.includes("product-description") ? "active" : ""}><Link to="/Pharmacy/product-description">Product Description</Link></li>
                    <li className={pathnames.includes("cart") ? "active" : ""}><Link to="/Pharmacy/cart">Cart</Link></li>
                    <li className={pathnames.includes("product-checkout") ? "active" : ""}><Link to="/Pharmacy/product-checkout">Product Checkout</Link></li>
                    <li className={pathnames.includes("payment-success") ? "active" : ""}><Link to="/Pharmacy/payment-success">Payment Success</Link></li>
                    <li className={pathnames.includes("pharmacy-register") ? "active" : ""}><Link to="/Pharmacy/pharmacy-register">Pharmacy Register</Link></li>
                  </ul>:""
                    }
                </li>
                <li className={`has-submenu ${url.includes("/pages") ? "active" : ""}`}>
                <a  className={isSideMenu == "pages" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="pages" ? "": "pages")} >Pages <i className="fas fa-chevron-down" /></a>              
                  { isSideMenu == "pages" ?  
                  <ul className={`submenu`}>
                    <li className={`${(pathnames).includes("/voice-call") ? "active" : ""}`}>
                      <Link to="/pages/voice-call" onClick={()=>onhandleCloseMenu()}>Voice Call</Link>
                    </li>
                    <li className={`${(pathnames).includes("/video-call") ? "active" : ""}`}>
                      <Link to="/pages/video-call" onClick={()=>onhandleCloseMenu()}>Video Call</Link>
                    </li>
                    <li className={pathnames.includes("search-doctor") ? "active" : ""}>
                      <Link to="/patient/search-doctor" onClick={()=>onhandleCloseMenu()}>Search Doctor</Link>
                    </li>
    
                    <li className={`${(pathnames).includes("/calendar") ? "active" : ""}`}>
                      <Link to="/pages/calendar" onClick={()=>onhandleCloseMenu()}>Calendar</Link>
                    </li>
                    <li className={`${(pathnames).includes("/onboarding-email") ? "active" : ""}`}>
                      <Link to="/pages/onboarding-email">Doctor Onboarding</Link>
                    </li>
									<li className={`${(pathnames).includes("/patient-email") ? "active" : ""}`}>
                    <Link to="/pages/patient-email">Patient Onboarding</Link>
                  </li>
                    <li className={`${(pathnames).includes("/component") ? "active" : ""}`}>
                      <Link to="/pages/component" onClick={()=>onhandleCloseMenu()}>Components</Link>
                    </li>
                   
    
                    <li className={`has-submenu ${(pathnames).includes("/invoice-view") ? "active" : ""}`}>
                    <a href="0#" className={isSideMenuone == "invoices" ? "subdrop" : ""} onClick={()=> toggleSidebarone(isSideMenuone =="invoices" ? "": "invoices")} >Invoices </a>              
                  { isSideMenuone == "invoices" ?  
                  <ul className="submenu">
                    <li className={pathnames.includes("invoice") ? "active" : ""}><Link to="/pages/invoice" onClick={()=>onhandleCloseMenu()}>Invoices</Link></li>
                    <li className={pathnames.includes("-view") ? "active" : ""}><Link to="/pages/invoice-view" onClick={()=>onhandleCloseMenu()}>Invoice View</Link></li>
                  </ul>:""
                  }
                    </li>
                    <li className={`${(pathnames).includes("/blank-page") ? "active" : ""}`}>
                      <Link to="/pages/blank-page" onClick={()=>onhandleCloseMenu()}>Starter Page</Link>
                    </li>
                    <li className={pathnames.includes("/aboutus") ? "active" : ""}><Link to="/aboutus" onClick={()=>onhandleCloseMenu()}>About Us</Link></li>
                    <li className={pathnames.includes("/contactus") ? "active" : ""}><Link to="/contactus" onClick={()=>onhandleCloseMenu()}>Contact Us</Link></li>


                    <li className={pathnames.includes("login") ? "active" : ""}>
                      <Link to="/login" onClick={()=>onhandleCloseMenu()}>Login</Link>
                    </li>
                    <li className={pathnames.includes("/register") ? "active" : ""}>
                      <Link to="/register"onClick={()=>onhandleCloseMenu()}>Register</Link>
                    </li>
                    <li className={`${pathnames === "/forgot-password" ? "active" : ""}`}>
                      <Link to="/forgot-password" onClick={()=>onhandleCloseMenu()}>Forgot Password</Link>
                    </li>
                  </ul>:""
                  }
                </li>
                <li className={`has-submenu ${url.includes("/blog") ? "active" : ""}`}>
                <a  className={isSideMenu == "blog" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="blog" ? "": "blog")} >Blog <i className="fas fa-chevron-down" /></a>              
                  { isSideMenu == "blog" ?
                  <ul className="submenu">
                    <li className={pathnames.includes("blog-list") ? "active" : ""}>
                      <Link to="/blog/blog-list" onClick={()=>onhandleCloseMenu()}>Blog List</Link>
                    </li>
                    <li className={pathnames.includes("blog-grid") ? "active" : ""}>
                      <Link to="/blog/blog-grid" onClick={()=>onhandleCloseMenu()}>Blog Grid</Link>
                    </li>
                    <li className={pathnames.includes("blog-details") ? "active" : ""}>
                      <Link to="/blog/blog-details" onClick={()=>onhandleCloseMenu()}>Blog Details</Link>
                    </li>
                  </ul>:""
                    }
                </li>
                <li className="has-submenu">
                     <a target="_blank" className={isSideMenu == "admin" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="admin" ? "": "admin")} >Admin<i className="fas fa-chevron-down" /></a>              
                        { isSideMenu == "admin" ? 
                     
                        <ul className="submenu">
                        <li><a href={`${config.publicPath}admin/login`} target="_blank" >Admin</a></li>
                        <li><a href={`${config.publicPath}pharmacyadmin`} target="_blank">Pharmacy Admin</a></li>
                        </ul>:""
                        }
                     </li>
                <li className="login-link" onClick={()=>onhandleCloseMenu()}>
                  <Link to="/">Login / Signup</Link>
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="nav-item contact-item">
                <div className="header-contact-img">
                  <i className="far fa-hospital" />							
                </div>
                <div className="header-contact-detail">
                  <p className="contact-header">Contact</p>
                  <p className="contact-info-header"> +1 315 369 5943</p>
                </div>
              </li>
    
              {(props.location.pathname) === ("/pages/voice-call") || (props.location.pathname) === ("/pages/video-call") ? (
                <>
                  <Dropdown className="user-drop nav-item dropdown has-arrow logged-item">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <img
                        className="rounded-circle"
                        src={IMG01}
                        width="31"
                        alt="Darren Elder"
                      />
                    </Dropdown.Toggle>
    
                    <Dropdown.Menu>
                      <div className="user-header">
                        <div className="avatar avatar-sm">
                          <img
                            src={IMG01}
                            alt="User"
                            className="avatar-img rounded-circle"
                          />
                        </div>
                        <div className="user-text">
                          <h6>Darren Elder</h6>
                          <p className="text-muted mb-0">Doctor</p>
                        </div>
                      </div>
                      <Dropdown.Item href={`${config.publicPath}doctor/doctor-dashboard`}>
                    Dashboard
                  </Dropdown.Item>
                  <Dropdown.Item href={`${config.publicPath}doctor/profile-setting`}>
                    Profile Settings
                  </Dropdown.Item>
                  <Dropdown.Item href={`${config.publicPath}login`}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              ) : (
                <>
                 {/* <!-- User Menu --> */}
						<li className="nav-item dropdown has-arrow logged-item">
							<a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
								<span className="user-img">
									<img className="rounded-circle" src={patient} width="31" alt="Ryan Taylor"/>
								</span>
							</a>
							<div className="dropdown-menu dropdown-menu-end">
								<div className="user-header">
									<div className="avatar avatar-sm">
										<img src={patient} alt="User Image" className="avatar-img rounded-circle"/>
									</div>
									<div className="user-text">
										<h6>Richard Wilson</h6>
										<p className="text-muted mb-0">Patient</p>
									</div>
								</div>
								<Link className="dropdown-item" to="/patient/dashboard">Dashboard</Link>
								<Link className="dropdown-item" to="/patient/profile">Profile Settings</Link>
								<Link className="dropdown-item" to="/login">Logout</Link>
							</div>
						</li>
						{/* <!-- /User Menu --> */}
                </>
              )}
            </ul>
          </nav>
        </header>
    }
     
    </>
  );
};

export default Header;
