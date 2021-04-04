// import React,{useState} from 'react'
// import './Slider.scss'
// import Hydrabad from "./Hydrabad.jpg"
// import ImgComp from "./ImgComp"
// // import Bangalore from "./Bangalore.jpg"
// // import Pune from "./Pune.jpg"
//  //import Delhi from "./Delhi.jpg"
//  //import First from "./First.jpg"




// function Slider() {

//     let sliderArr = [<ImgComp src={Hydrabad
//     } alt=""/>,<ImgComp src={Hydrabad} alt=""/>,<ImgComp src={Hydrabad}alt=""/>,<ImgComp src={Hydrabad}alt=""/>];



//     const [x,setX] = useState(0);

//     const goleft = () =>{
//         console.log(x)
//         x === 0 ? setX(-100 * (sliderArr.length - 1)) :setX(x+100);
//     }
//     const goright = () =>{
//         console.log(x)
//         x === -100* (sliderArr.length - 1) ? setX(0):setX(x-100);
//     }


//     return (
//         <div className="slider">
//             {
//             sliderArr.map((item,index) =>{
//                 return(
//                     <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
//                         {item}
//                     </div>
//                 )
//             })
//         }
//         <button id="goleft" onClick={goleft}><i id="fas fa-angle-left"></i></button>
//         <button id="goright"onClick={goright}><i id="fas fa-angle-right"></i></button>
//         </div>
//     )
// }

// export default Slider
