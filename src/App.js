import React from "react"
import Navbar from "./components/Navbar/Navbar";
import {orginals,action} from './urls'
import './App.css'
import Banner from "./components/Banner/Banner";
import RawPost from "./components/RowPost/RowPost";
function App() {
 
  return(
    <div className="App">
      <Navbar/>
      <Banner/>
      <RawPost url={orginals} title='Netflix orginals'/>
      <RawPost url={action} title='Action' isSmall/>
    </div>
  );
  }
export default App;
