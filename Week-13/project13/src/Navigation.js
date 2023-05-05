import { Link } from "react-router-dom";
const Navigation = () => {
    return <>
    <nav>
        <ul className="nav">
          <li className="nav-li">
            <Link to="/">Home</Link>
          </li>
          
          <li className="nav-li">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav></>
}

export default Navigation;