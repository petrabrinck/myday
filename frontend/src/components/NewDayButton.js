import React from 'react'
import { Link } from 'react-router-dom'
import './newdaybutton.css'

export const NewDayButton =() => {

  function sayHello() {
    alert('Hello!');
  }
  return (  
    <div className="ButtonDiv">
      <button className="NewDayButton" onClick={sayHello}>
        New Day :-)
      </button>
    </div>
  )
}


// export const NewDayButton = () => {

//   return (
//     <div> 
//       <img className="newDayPic" src="./" alt="newday"/>
//     </div>
//   )
// }

// //test
// return (
//   <div className="NewDayButtonContainer">
//     {((NewDayButton) => (
//       <div className="NewDayDiv" key={MyDay2}>
//         <Link to={`MyDay2`}>
        
//     <button onClick={""}>
//       Click me!
//     </button> 

//         {/* <button className="newDayPic" src="./" alt="newday"/>
//           <h3>New Day </h3>   */}
//         </Link>
//       </div>
//     ))}
//   </div>
// )
// }


