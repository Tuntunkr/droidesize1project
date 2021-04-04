import React from 'react'
import Panasonic from "./image/Panasonic.png"
import Adda52 from "./image/Adda52.png"
 import Dineout from "./image/Dineout.png"
 import Satyarthi from "./image/Satyarthi.png"
import vigo from "./image/Vigo.png"
 import Climber from "./image/Climber.png"

function Client() {
    return (
        <div> 
             <h1> OURCLIENTS</h1> 
                

                        <div id="box17"><img src={Adda52} alt="" /></div>
                        <div id="box18"><img src={Dineout} alt="" /></div>
                        <div id="box19"><img src={Satyarthi} alt="" /></div>
                        <div id="box20"><img src={Climber} alt="" /></div>


                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                       
                        <div id="box21"><img src={Panasonic} alt="" /></div>
                        <div id="box22"><img src={vigo} alt="" /></div>
                        <div id="box23"><img src={vigo} alt="" /></div>
                        <div id="box24"><img src={vigo} alt="" /></div>
                
        </div>
    )
}

export default Client
