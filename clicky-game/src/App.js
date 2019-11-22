import React, { Component } from "react";
import Wrapper from "./components/Wrapper/Wrapper";
import Grid from "./components/Grid/Grid";


class App extends Component {
  
  render() {
    return (
      <Wrapper>
          <Grid />
      </Wrapper>
    );
  }
}

export default App;






// import React from 'react';
// import logo from './logo.svg';
// // imports style for the entire app
// import './App.css';
// // imports from the header component
// import Header from "./Components/Header/header";
// // imports from the wrapper component
// import Wrapper from "./components/Wrapper/Wrapper";
// // imports from the grid component
// import Grid from "./components/Grid/Grid";


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import React, { Component } from "react";
// import Header from "./components/Header/Header";

// import Wrapper from "./components/Wrapper/Wrapper";
// import Grid from "./components/Grid/Grid";

// // @@ -26,7 +26,7 @@ class App extends Component {
//   render() {
//     return (
//       <Wrapper>
//         <Header />

//           <Grid>
//             {/* {this.state.femmes.map(femme => (
//               <Femmes