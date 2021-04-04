import React from 'react'

function Photo() {
    return (
        <div>
            <h1>SIGN UP</h1>

<p>Fill this form to keep yourself updated about the best internships in the market. 
    We will buzz you whenever we think something interesrting has come up.
</p>

<div className="name">NAME
    <input className="name" type="text" placeholder=" Name*"/>
</div>

<div className="email">EMAIL
    <input className="email" type="text" placeholder="Email*"/>
</div>

<div className="College">COLLEGE
    <input className="College" type="text" placeholder="College*"/>
</div>


<div className=" Select City">CITY
    
    <input className="Select City" type="text" placeholder="Select City"/>
    
        <select>
            <option>Delhi</option>
            <option>Hariyana</option>
            <option>Punjab</option>
        </select>
</div>


<div className="Phone number">PHONE NUMBER
    <input className="Phone number" type="text" placeholder="Phone number*"/>
</div>

<div className="Mobile number">MOBILE NUMBER
    <input className="Mobile number" type="text" placeholder="Mobile number you are currently in use*"/>
</div>

<div className="Which">WHICH YEAR
    <input className="Which year" type="text" placeholder="Which year are you in"/>
        <div>

            <select>
                    <option>1890</option>
                    <option>1891</option>
                    <option>2090</option>
            </select>
        </div>
</div>
    


<div className="Course">COURSE
    <input className="Course" type="text" placeholder="What course are you pursuing*"/>
</div>

<div className="Interest">INTEREST
    <input className="Interest" type="text" placeholder="What are your area of interest?*"/>
</div>

<div className="Role model">ROLE MODEL
    <input className="Role model" type="text" placeholder="Who is your role model in life and why"/>
</div>

<div className="Internship">INTERNSHIP
    <input className="Internship" type="text" placeholder="What type of internship are you looking forwrad"/>
</div>

<div className="Internship field">INTERNSHIP FIELD
    <input className="Internship field" type="text" placeholder="In which field are you looking forward to intern"/>
</div>

<p>By filling this form,I permit youthbeat in to send me communication about internships in future.</p>

<button>cvbcvb</button>



        </div>
    )
}

export default Photo

