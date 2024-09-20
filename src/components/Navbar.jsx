import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Index</Link>
        </li>
        <li>
          <Link to="/404">Error page</Link>
        </li>
        <li>
          <Link to="/about">About page</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
      </ul>
    </div>
  );
}
