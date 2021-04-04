import React from "react";
import * as FaIcons from "react-icons/fa";
import First from "./image/First.jpg"
import pune from "./image/Pune.jpg"
import delhi from "./image/Delhi.jpg"
import bangalore from "./image/Bangalore.jpg"
//import Education from "./image/education.jpg"
//import Hydrabad from "./image/Hydrabad.jpg"
import axios from 'axios'
import Logo from "./image/logo.jpg"
import TKY from "./image/TKY.jpg"
import Panasonic from "./image/pana.jpeg"
import Adda52 from "./image/Adda52.png"
import Dineout from "./image/Dineout.png"
import Satyarthi from "./image/Satyarthi.png"
import vigo from "./image/Vigo.png"
import Climber from "./image/Climber.png"
import Facebook from "./image/Facebook.png"
import Instagram from "./image/Instagram.png"
import Youtube from "./image/Youtube.png"
import Twitter from "./image/Twitter.png"
import Opportunity from "./image/Opportunity.png"
import Certificate from "./image/Certificate.png"
import {useState} from 'react'
import { Carousel, Jumbotron } from "react-bootstrap";




function Nav() {


//     let sliderArr = [<img src={First} alt=""/>];



//     const [x,setX] = useState(0);

//     const goleft = () =>{
//         console.log(x)
//         x === 0 ? setX(-100 * (sliderArr.length - 1)) :setX(x+100);
//     }
    
//     const goright = () =>{
//         console.log(x)
//         x === -100* (sliderArr.length - 1) ? setX(0):setX(x-100);
//     }


    
    return ( 
        
            <nav>
        
                <div id="box"><img src={Logo} alt="" /></div>
                
                <div id="box29"><FaIcons.FaBars  /> </div>  

                    

                <div id="box25"><h3>Intern with the best <br/> companies and enhance your<br/> college experience</h3></div>
                   
                    <br/><br/><br/>
                
                    <img src={First}alt=""/> 

                    <button id="box28">REGISTER NOW</button>

                    <br/>
                    <br/>
                    <br/>

               
                    <br/><br/>

                <div id="box33">
                <h1>ABOUT YOUTHBEAT</h1>
                    <p>Channelize your creativity by associating with the biggest brands in the country by<br/>
                        representing brands as a campus ambassador for your college.Channelize your<br/>
                        creativity byassociating with the biggest brands in the country by representing<br/>
                        brands as a campus ambassador for your college.
                    </p>

                       <button id="box30">READ MORE</button>
                       
                        <br/><br/><br/><br/>
                </div>
                    
                <div id="box34">
                    <h1> FEATURED INTERNSHIPS</h1>
                        <div id="box1"><img src={Panasonic} alt=""/></div>
                        <div id="box2"><img src={Adda52} alt=""/></div>
                        <div id="box3"><img src={Dineout} alt=""/></div>
                        <div id="box4"><img src={Satyarthi} alt=""/></div>

                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>


                <div>
                    <h1>WHY YOUTHBEAT</h1>
                        <div id="box5"><img src={Opportunity} alt=""/><h3>Opportunity to work<br/> with brands during<br/> college years</h3></div>
                        <div id="box6"><img src={Certificate} alt=""/><h3>Certificate from <br/>sociowash</h3></div>
                        <div id="box7"><img src={Opportunity} alt=""/><h3>Opportunity to work<br/> with brands during<br/> college years</h3></div>
                        <div id="box8"><img src={Certificate} alt=""/><h3>Certificate from <br/>sociowash</h3></div>

                            <br/><br/><br/><br/><br/>

                        <div id="box9"><h3>1500<br/>Colleges</h3></div>
                        <div id="box10"><h3>100000<br/>Colleges Students </h3></div>
                        <div id="box11"><h3>22<br/> Student age groups</h3></div>
                        <div id="box12"><h3>5000<br/> Internship experience delivered</h3></div>
                </div>


                        <br/><br/><br/><br/><br/><br/><br/>


                <div className="container">
                    <h1> WHAT STUDENTS SAY ABOUT US?</h1> 
                        <img src={TKY} alt="" />  
                            <p>Learn ipsum dolor sit amet,consectur adilicing elit. <br/>
                                Adipisci eum in ipsum magni nulla obcaecati omnis quam <br/>
                                quisquam repellendus teneur! Ad exercitationem facilis fuga <br/>
                                incidunt maxime nobis nostrum optio velit.
                            </p>
                            <b><p>Tuntun kumar </p></b>
                            <p>DELHI UNIVERSITY</p>
                </div>


                <br/>


 
                <h1> OURCLIENTS</h1> 
                    <div id="box13"><img src={Adda52} alt="" /></div>
                    <div id="box14"><img src={Dineout} alt="" /></div>
                    <div id="box15"><img src={Satyarthi} alt="" /></div>
                    <div id="box16"><img src={Climber} alt="" /></div>

                    <br/><br/><br/><br/><br/><br/><br/><br/>

                    <div id="box17"><img src={Panasonic} alt="" /></div>
                    <div id="box18"><img src={vigo} alt="" /></div>
                    <div id="box19"><img src={vigo} alt="" /></div>
                    <div id="box20"><img src={vigo} alt="" /></div>
                
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                <h1>SIGN UP</h1>
                    <p>Fill this form to keep yourself updated about the best internships in the market. <br/>
                        We will buzz you whenever we think something interesrting has come up.
                    </p>
                    
                    <div id="box35">
                    <div className="email" >NAME
                            <input className="name" type="text" placeholder="name*" id="name"/>
                        </div>

                        <div className="email" >EMAIL
                            <input className="email" type="text" placeholder="Email*" id="email"/>
                        </div>

                        <div className="collage" >COLLAGE
                            <input className="collage" type="text" placeholder="Collage*" id="collage"/>
                        </div>


                        <div className=" select-city" >CITY
                            <input className="select-city" type="text" placeholder="Select City" id="city"/>
                                {/* <select>
                                        <option>Delhi</option>
                                        <option>Hariyana</option>
                                        <option>Punjab</option>
                                </select> */}
                        </div>


                        <div className="phone-number" >PHONE NUMBER
                            <input className="phone-number" type="text" placeholder="Phone number*" id="pno"/>
                        </div>

                        <div className="mobile-number" >MOBILE NUMBER
                            <input className="mobile-number" type="text" placeholder="Mobile number you are currently in use*" id="mno"/>
                        </div>

                        <div className="which-year" >WHICH YEAR
                            <input className="which-year" type="text" placeholder="Which year are you in" id="whichyear"/>
                                {/* <div>
                                    <select>
                                            <option>1890</option>
                                            <option>1891</option>
                                            <option>2090</option>
                                    </select>
                                </div> */}
                        </div>
                                
                        <div className="course" >COURSE
                            <input className="course" type="text" placeholder="What course are you pursuing*" id="course"/>
                        </div>

                        <div className="interest" >INTEREST
                            <input className="interest" type="text" placeholder="What are your area of interest?*" id="interest"/>
                        </div>

                        <div className="role-model" >ROLE MODEL
                            <input className="role-model" type="text" placeholder="Who is your role model in life and why" id="rolemodel"/>
                        </div>

                        <div className="internship" >INTERNSHIP
                            <input className="internship" type="text" placeholder="What type of internship are you looking forwrad" id="password"/>
                        </div>

                        <div className="internship-field" >INTERNSHIP FIELD
                            <input className="internship-field" type="text" placeholder="In which field are you looking forward to intern" id="cpassword"/>
                        </div>
                        

                    </div>
                    

                        <p>By filling this form,I permit youthbeat in to send me<br/> communication about internships in future.</p>

                        <button id="box31" onClick={userSignup}>Send</button>
                            
                        
                
    <div class="box38">
        <h5>ABOUT</h5>
        <h5>STUDENT SPEAK</h5>
        <h5>WHY YOUTHBEAT</h5>
        <h5>CLIENT</h5>
        <h5>CONTACT US</h5>
        </div>
                            
                        
                    


                        <p id="box32">FOLLOW US ON</p>

                        <div id="box21"><img src={Facebook} alt="" /></div>
                        <div id="box22"><img src={Instagram} alt="" /></div>
                        <div id="box23"><img src={Youtube} alt="" /></div>
                        <div id="box24"><img src={Twitter} alt="" /></div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffa500" fill-opacity="1" d="M0,96L80,128C160,160,320,224,480,218.7C640,213,800,139,960,128C1120,117,1280,171,1360,197.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

            </nav>
    );
                            }
function userSignup(){
    // console.log('jhuhhb')
    // e.preventDefault();
    let data = {
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        collage:document.getElementById('collage').value,
        city:document.getElementById('city').value,
        pno:document.getElementById('pno').value,
        mno:document.getElementById('mno').value,
        whichyear:document.getElementById('whichyear').value,
        course:document.getElementById('course').value,
        interest:document.getElementById('interest').value,
        rolemodel:document.getElementById('rolemodel').value,
        password:document.getElementById('password').value,
        cpassword:document.getElementById('cpassword').value
    }
console.log(data)
    axios.post('http://localhost:3002/register',data)
    .then(res=>[
        alert('User register successful')
    ])
    .catch(err=>{
        alert('some error')
        console.log(err)
    })
}

export default Nav;