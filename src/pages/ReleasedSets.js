import { Link } from "react-router-dom"

export default function ReleasedSets() {
    return (
        <>
        <div className="set-card">
        <ul>
            <Link to="/romancedawn">
                <button className="set-icon">
                    <img className="set-btn" src="https://en.onepiece-cardgame.com/images/products/boosters/op01/mv_01.jpg?v3" alt="romance dawn"/><br />
                    <strong>Romance Dawn</strong>
                </button>
            </Link>
            </ul>
            <ul>
            <Link to="/paramountwar">
                <button className="set-icon">
                    <img className="set-btn" src="https://en.onepiece-cardgame.com/images/products/boosters/op02/mv_01.jpg?v03" alt="paramount war"/><br />
                    <strong>Paramount War</strong>
                </button>
            </Link>
            </ul>
            <ul>
            <Link to="/pillarsofstrength">
                <button className="set-icon">
                    <img className="set-btn" src="https://en.onepiece-cardgame.com/images/products/boosters/op03/mv_01.jpg?1" alt="pillars of strength"/><br />
                    <strong>Pillars of Strength</strong>
                </button>
            </Link>
            </ul>
            <ul>
            <Link to="/kingdomsofintrigue">
                <button className="set-icon">
                    <img className="set-btn" src="https://en.onepiece-cardgame.com/images/products/boosters/op04/mv_01.jpg?3" alt="kingdoms of intrigue"/><br />
                    <strong>Kingdoms of Intrigue</strong>
                </button>
            </Link>
            </ul>
            <ul>
            <Link to="/awakeningofthenewera">
                <button className="set-icon">
                    <img className="set-btn" src='./images/op05-set-image.png' alt="awakening of the new era"/><br />
                    <strong>Awakening of The New Era</strong>
                </button>
            </Link>
            </ul>
            <ul>
            <Link to="/wingsofthecaptain">
                <button className="set-icon">
                    <img className="set-btn" src="https://asia-en.onepiece-cardgame.com/images/products/boosters/op06/mv_01.jpg?v2" alt="wings of the captain"/><br />
                    <strong>Wings of The Captain</strong>
                </button>
            </Link>
            </ul>
            <ul>
            <Link to="/500yearsintothefuture">
                <button className="set-icon">
                    <img className="set-btn" src="https://asia-en.onepiece-cardgame.com/images/products/boosters/op07/mv_01.jpg" alt="500 years into the future"/><br />
                    <strong>500 Years Into The Future</strong>
                </button>
            </Link>
            </ul>
        </div>
          </>
    )
  }