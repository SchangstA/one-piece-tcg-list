import { Route, Routes } from "react-router-dom"
import React, {useState} from 'react'
import Navbar from "./Navbar"
import Home from "./pages/Home"
import DataInput from "./components/DataInput"
import ReleasedSets from "./pages/ReleasedSets"
import RomanceDawn from "./pages/RomanceDawn"
import ParamountWar from "./pages/ParamountWar"
import PillarsofStrength from "./pages/PillarsofStrength"
import KingdomsofIntrigue from "./pages/KingdomsofIntrigue"

  function App() {
    const [returnedData, setReturnedData] = useState({
      id: '',
      name: ''
    });
    
    const handleFetchData = (newData) => {
      setReturnedData(newData);
    };
  
    return (
      <>
        <DataInput onFetchData={handleFetchData} />
        <p>id: {returnedData.id}</p>
        <p>name: {returnedData.name}</p>
  
        <Navbar />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/releasedsets/*"
              element={<ReleasedSets />}
            />
            <Route
              path="/romancedawn"
              element={<RomanceDawn />}
            />
            <Route
              path="/paramountwar"
              element={<ParamountWar />}
            />
            <Route
              path="/pillarsofstrength"
              element={<PillarsofStrength />}
            />
            <Route
              path="/kingdomsofintrigue"
              element={<KingdomsofIntrigue />}
            />
          </Routes>
        </div>
      </>
    )
  }
  
  export default App
  