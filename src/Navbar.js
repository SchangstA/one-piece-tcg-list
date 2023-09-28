import { Link } from "react-router-dom"
import { CustomLink } from "./components/CustomLink"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link 
      to="/" 
      className="site-title">
        Laugh Tale Log
      </Link>
      <ul>
        <CustomLink 
        to="/">Home
        </CustomLink>
        <CustomLink 
        to="/releasedsets">
          Released Sets
        </CustomLink>
        <CustomLink 
        to="/upcomingsets">
          Upcoming Sets
        </CustomLink>
      </ul>
    </nav>
  )
}