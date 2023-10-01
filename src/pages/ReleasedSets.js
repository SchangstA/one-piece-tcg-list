import { Link } from "react-router-dom"

export default function ReleasedSets() {
    return (
        <>
        <h1>Released Sets</h1>
        <div className="set-card">
        <ul>
            <Link to="/romancedawn">
                <button>
                    <img className="set-btn" src="https://en.onepiece-cardgame.com/images/products/boosters/op01/mv_01.jpg?v3" alt="romance dawn"/>
                    <strong>Romance Dawn</strong>
                </button>
            </Link>
            </ul>
            <ul>
            <Link to="/paramountwar">
                <button>
                    <img className="set-btn" src="https://en.onepiece-cardgame.com/images/products/boosters/op02/mv_01.jpg?v03" alt="paramount war"/>
                    <strong>Paramount War</strong>
                </button>
            </Link>
            </ul>
            <ul>
            <Link to="/pillarsofstrength">
                <button>
                    <img className="set-btn" src="https://en.onepiece-cardgame.com/images/products/boosters/op03/mv_01.jpg?1" alt="pillars of strength"/>
                    <strong>Pillars of Strength</strong>
                </button>
            </Link>
            </ul>
            <ul>
            <Link to="/kingdomsofintrigue">
                <button>
                    <img className="set-btn" src="https://en.onepiece-cardgame.com/images/products/boosters/op04/mv_01.jpg?3" alt="kingdoms of intrigue"/>
                    <strong>Kingdoms of Intrigue</strong>
                </button>
            </Link>
            </ul>
        </div>
          </>
    )
  }