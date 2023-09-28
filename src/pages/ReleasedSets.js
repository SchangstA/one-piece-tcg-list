import { Link } from "react-router-dom"

export default function ReleasedSets() {
    return (
        <>
        <div className="set-card">
            <ul>
                <Link 
                to="/romancedawn">
                    Romance Dawn
                </Link>
            </ul>
            <ul>
                <Link 
                to="/paramountwar">
                    Paramount War
                </Link>
            </ul>
        </div>
          </>
    )
  }