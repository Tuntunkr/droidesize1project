import React,{Component} from 'react'
import TKY from "./image/TKY.jpg"
 import TK from "./image/TK.jpg"
 import TJ from "./image/TJ.jpg"

function About(){
    return (
        <div>

        
<h1> WHAT STUDENTS SAY ABOUT US?</h1> 

<img src={TKY} alt="" />  

        <p>Learn ipsum dolor sit amet,consectur adilicing elit.
            Adipisci eum in ipsum magni nulla obcaecati omnis quam
            quisquam repellendus teneur! Ad exercitationem facilis fuga 
            incidunt maxime nobis nostrum optio velit.
        </p>
<b><p>MOHD MOZAMMIL</p></b>
<p>DELHI UNIVERSITY</p>


<img src={TK} alt="" />  

        <p>Learn ipsum dolor sit amet,consectur adilicing elit.
            Adipisci eum in ipsum magni nulla obcaecati omnis quam
            quisquam repellendus teneur! Ad exercitationem facilis fuga 
            incidunt maxime nobis nostrum optio velit.
        </p>
<b><p>MOHD MOZAMMIL</p></b>
<p>DELHI UNIVERSITY</p>
                        

<img src={TJ} alt="" />  

        <p>Learn ipsum dolor sit amet,consectur adilicing elit.
            Adipisci eum in ipsum magni nulla obcaecati omnis quam
            quisquam repellendus teneur! Ad exercitationem facilis fuga 
            incidunt maxime nobis nostrum optio velit.
        </p>
<b><p>MOHD MOZAMMIL</p></b>
<p>DELHI UNIVERSITY</p>
</div>

            
        
    )
}


export default About
