const NetflixSeries = () => {
  const name = "Queen Of Tears";
  const rating = 8.2 ;
  const summary = "Queen of Tears is a 2024 South Korean romantic comedy drama starring Kim Soo-hyun and Kim Ji-won that follows the marital crisis of Baek Hyun-woo, a rural lawyer, and Hong Hae-in, a wealthy chaebol heiress."

  let age = 19;
  const canWatch = () => {
    if (age>=18) return "Watch Now";
    return "Not Available"
  };
  

  const returnGenre = () => {
    const genre =  "RomCom";
    return genre;
  };

  return(
    <div>
    <div>
        <img src="qot.png" alt="qot img " height="40%" width="40%"/>
      </div>
      <h2>
        Name : {name}
      </h2>
      <h3>Ratings : {rating}</h3>
      <p>
        Summary : {summary}  
      </p>
      <p>Genre : {returnGenre()}</p>
      <button > {canWatch()}</button>
    </div>
  )
}
export default NetflixSeries;

export const Header = () => {
  return(
    <p>this is header </p>
  )
}

export const Footer = () => {
  return(
    <p>Sanskruti more @copyright </p>
  )
}



// conditional rendering in jsx ........

// 1 st method     ---- but this voilates DRY (do not repeat yourself)
// const NetflixSeries = () => {
//   const name = "Queen Of Tears";
//   const rating = 8.2 ;
//   const summary = "Queen of Tears is a 2024 South Korean romantic comedy drama starring Kim Soo-hyun and Kim Ji-won that follows the marital crisis of Baek Hyun-woo, a rural lawyer, and Hong Hae-in, a wealthy chaebol heiress."

//   let age =  16;

//   const returnGenre = () => {
//     const genre =  "RomCom";
//     return genre;
//   };

//   if (age <18){
//     return(
//     <div>
//     <div>
//         <img src="qot.png" alt="qot img " height="40%" width="40%"/>
//       </div>
//       <h2>
//         Name : {name}
//       </h2>
//       <h3>Ratings : {rating}</h3>
//       <p>
//         Summary : {summary}  
//       </p>
//       <p>Genre : {returnGenre()}</p>
//       <button>Not Available </button>
//     </div>
//   )
//   }

//   return(
//     <div>
//     <div>
//         <img src="qot.png" alt="qot img " height="40%" width="40%"/>
//       </div>
//       <h2>
//         Name : {name}
//       </h2>
//       <h3>Ratings : {rating}</h3>
//       <p>
//         Summary : {summary}  
//       </p>
//       <p>Genre : {returnGenre()}</p>
//       <button>Watch Now</button>
//     </div>
//   )
// }

//  2nd method ---  directly writing condition inside button

// const NetflixSeries = () => {
//   const name = "Queen Of Tears";
//   const rating = 8.2 ;
//   const summary = "Queen of Tears is a 2024 South Korean romantic comedy drama starring Kim Soo-hyun and Kim Ji-won that follows the marital crisis of Baek Hyun-woo, a rural lawyer, and Hong Hae-in, a wealthy chaebol heiress."

//   let age = 16;

//   const returnGenre = () => {
//     const genre =  "RomCom";
//     return genre;
//   };

//   return(
//     <div>
//     <div>
//         <img src="qot.png" alt="qot img " height="40%" width="40%"/>
//       </div>
//       <h2>
//         Name : {name}
//       </h2>
//       <h3>Ratings : {rating}</h3>
//       <p>
//         Summary : {summary}  
//       </p>
//       <p>Genre : {returnGenre()}</p>
//       <button > { age >=18 ? "Watch Now" : "Not Available"}</button>
//     </div>
//   )
// }

// 3rd method --- sometimes you have very complex if conditions ,for that there are some solutions 

// const NetflixSeries = () => {
//   const name = "Queen Of Tears";
//   const rating = 8.2 ;
//   const summary = "Queen of Tears is a 2024 South Korean romantic comedy drama starring Kim Soo-hyun and Kim Ji-won that follows the marital crisis of Baek Hyun-woo, a rural lawyer, and Hong Hae-in, a wealthy chaebol heiress."

//   let age = 19;
//   let canWatch = "Not Available"
//   if (age>=18) canWatch = "Watch Now";

//   const returnGenre = () => {
//     const genre =  "RomCom";
//     return genre;
//   };

//   return(
//     <div>
//     <div>
//         <img src="qot.png" alt="qot img " height="40%" width="40%"/>
//       </div>
//       <h2>
//         Name : {name}
//       </h2>
//       <h3>Ratings : {rating}</h3>
//       <p>
//         Summary : {summary}  
//       </p>
//       <p>Genre : {returnGenre()}</p>
//       <button > {canWatch}</button>
//     </div>
//   )
// }


// 4th method --- solution can be better as  it prevents cluttering of variables outside and encapsulates such logic inside function 
// one another benifit is also that ,you can also pass some dynamic values as function parameters

// const NetflixSeries = () => {
//   const name = "Queen Of Tears";
//   const rating = 8.2 ;
//   const summary = "Queen of Tears is a 2024 South Korean romantic comedy drama starring Kim Soo-hyun and Kim Ji-won that follows the marital crisis of Baek Hyun-woo, a rural lawyer, and Hong Hae-in, a wealthy chaebol heiress."

//   let age = 19;
//   const canWatch = () => {
//     if (age>=18) return "Watch Now";
//     return "Not Available"
//   };
  

//   const returnGenre = () => {
//     const genre =  "RomCom";
//     return genre;
//   };

//   return(
//     <div>
//     <div>
//         <img src="qot.png" alt="qot img " height="40%" width="40%"/>
//       </div>
//       <h2>
//         Name : {name}
//       </h2>
//       <h3>Ratings : {rating}</h3>
//       <p>
//         Summary : {summary}  
//       </p>
//       <p>Genre : {returnGenre()}</p>
//       <button > {canWatch()}</button>
//     </div>
//   )
// }



// dynamic values in jsx
// // using variables ..........
// const NetflixSeries = () => {
//   const name = "Queen Of Tears";
//   const rating = 8.2 ;
//   const summary = "Queen of Tears is a 2024 South Korean romantic comedy drama starring Kim Soo-hyun and Kim Ji-won that follows the marital crisis of Baek Hyun-woo, a rural lawyer, and Hong Hae-in, a wealthy chaebol heiress."
//   return(
//     <div>
//     <div>
//         <img src="qot.png" alt="qot img " height="40%" width="40%"/>
//       </div>
//       <h2>
//         Name : {name}
//       </h2>
//       <h3>Ratings : {rating}</h3>
//       <p>
//         Summary : {summary}  
//       </p>
//     </div>
//   )
// }

// // using expressions ............
// const NetflixSeries = () => {
//   const name = "Queen Of Tears";
//   const rating = 8.2 ;
//   const summary = "Queen of Tears is a 2024 South Korean romantic comedy drama starring Kim Soo-hyun and Kim Ji-won that follows the marital crisis of Baek Hyun-woo, a rural lawyer, and Hong Hae-in, a wealthy chaebol heiress."
//   return(
//     <div>
//     <div>
//         <img src="qot.png" alt="qot img " height="40%" width="40%"/>
//       </div>
//       <h2>
//         Name : {name}
//       </h2>
//       <h3>Ratings : {18/3.2}</h3>
//       <p>
//         Summary : {summary}  
//       </p>
//     </div>
//   )
// }

// Function calls ............
// const NetflixSeries = () => {
//   const name = "Queen Of Tears";
//   const rating = 8.2 ;
//   const summary = "Queen of Tears is a 2024 South Korean romantic comedy drama starring Kim Soo-hyun and Kim Ji-won that follows the marital crisis of Baek Hyun-woo, a rural lawyer, and Hong Hae-in, a wealthy chaebol heiress."

//   const returnGenre = () => {
//     const genre =  "RomCom";
//     return genre;
//   };

//   return(
//     <div>
//     <div>
//         <img src="qot.png" alt="qot img " height="40%" width="40%"/>
//       </div>
//       <h2>
//         Name : {name}
//       </h2>
//       <h3>Ratings : {rating}</h3>
//       <p>
//         Summary : {summary}  
//       </p>
//       <p>Genre : {returnGenre()}</p>
//     </div>
//   )
// }

