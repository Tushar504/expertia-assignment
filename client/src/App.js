
import './App.css';
import {Routes,Route,} from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar';
import {Homepage} from './components/Home/HomePage'
import {Applied} from './components/JobApplied/appled'
import {Search} from './components/searchpage/search'
function App() {
  return (
    <div className="App">
       <Navbar/>

       <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/applied/:id"  element={<Applied/>}/>
      <Route path="/search"  element={<Search/>}/>

     
    
    </Routes>
    </div>
  );
}

export default App;
