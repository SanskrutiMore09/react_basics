# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


<!-- // conditional rendering in jsx ........

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


<!-- named export  -->
<!-- import {NetflixSeries} from "./components/NetflixSeries"; -->

// this is defualt export 
// export default NetflixSeries; -->