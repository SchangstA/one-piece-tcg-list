import { Route, Routes } from "react-router-dom"
import React, {useState} from 'react'
import Navbar from "./Navbar"
import Home from "./pages/Home"
import ReleasedSets from "./pages/ReleasedSets"
import DeckBuilder from "./pages/DeckBuilder"
import RomanceDawn from "./pages/RomanceDawn"
import ParamountWar from "./pages/ParamountWar"
import PillarsofStrength from "./pages/PillarsofStrength"
import KingdomsofIntrigue from "./pages/KingdomsofIntrigue"
import Test from "./pages/Test"

  function App() {
    const [returnedData, setReturnedData] = useState({
      id: '',
      cardNumber: '',
      cardRarity: '',
      img_links: ''
    });
    
    return (
      <>
        <Navbar />
        <img
        className='card-image'
        src={returnedData.img_links} />
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
              path="/deckbuilder/*"
              element={<DeckBuilder />}
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
            <Route
              path="/test"
              element={<Test />}
            />
          </Routes>
        </div>
      </>
    )
  }
  
  export default App
  