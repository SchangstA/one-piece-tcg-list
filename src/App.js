import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./pages/Home"
import ReleasedSets from "./pages/ReleasedSets"
import RomanceDawn from "./pages/RomanceDawn"
import ParamountWar from "./pages/ParamountWar"
import PillarsofStrength from "./pages/PillarsofStrength"
import KingdomsofIntrigue from "./pages/KingdomsofIntrigue"

function App() {
  return (
    <>
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