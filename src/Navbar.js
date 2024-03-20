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
          Sets Database
        </CustomLink>
        <CustomLink 
          to="/deckdatabase">Deck Database
        </CustomLink>
        <CustomLink 
          to="/carddatabase">Card Database
        </CustomLink>
        <CustomLink 
          to="/deckbuilder">
            <img className="deck-icon" src="https://api.iconify.design/bx:layer.svg" alt="login" />
              Deck Builder
        </CustomLink>
        <CustomLink 
          to="/login">
            <img className="login-icon" src="https://api.iconify.design/line-md:account.svg" alt="login" />
              Sign In
        </CustomLink>
      </ul>
    </nav>
  )
}