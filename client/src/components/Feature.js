import React from 'react'
import Panasonic from "./image/Panasonic.png"
import Adda52 from "./image/Adda52.png"
 import Dineout from "./image/Dineout.png"
 import Satyarthi from "./image/Satyarthi.png"
import Opportunity from "./image/Opportunity.png"
 import Certificate from "./image/Certificate.png"


function Featutre() {
    return (
        <div>
            

                
            <h1> FEATURED INTERNSHIPS</h1>




        <div id="box1"><img src={Panasonic} alt=""/></div>
        <div id="box2"><img src={Adda52} alt=""/></div>
        <div id="box3"><img src={Dineout} alt=""/></div>
        <div id="box4"><img src={Satyarthi} alt=""/></div>

        <br/><br/><br/><br/><br/><br/><br/>




        <h1>WHY YOUTHBEAT</h1>


        <div id="box5"><img src={Opportunity} alt=""/><h6>Oppertunity to work with brands during college years</h6></div>
        <div id="box6"><img src={Certificate} alt=""/><h6>Certificate from sociowash</h6></div>
        <div id="box7"><img src={Opportunity} alt=""/><h6>Oppertunity to work with brands during college years</h6></div>
        <div id="box8"><img src={Certificate} alt=""/> <h6>Certificate from sociowash</h6></div><br/><br/><br/><br/><br/><br/><br/>



        <div id="box9"><h6>1500 Colleges</h6></div>
        <div id="box10"><h6>100000 Colleges Students </h6></div>
        <div id="box11"><h6>22 Student age groups</h6></div>
        <div id="box12"><h6>5000 Internship experience delivered</h6></div>


        </div>
    )
}

export default Featutre
