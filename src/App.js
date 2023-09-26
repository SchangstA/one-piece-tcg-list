import Navbar from "./Navbar"
import Home from "./pages/Home"
import RomanceDawn from "./pages/RomanceDawn"
import ParamountWar from "./pages/ParamountWar"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/romancedawn" element={<RomanceDawn />} />
          <Route path="/paramountwar" element={<ParamountWar />} />
        </Routes>
      </div>
    </>
  )
}

export default App