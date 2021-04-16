import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/home">inicio</Link>
        </li>
        <li>
          <Link to="/news">noticias</Link>
        </li>
        <li>
          <Link to="/products">productos</Link>
        </li>
        <li>
          <Link to="/about-us">nosotros</Link>
        </li>
      </ul>
    </nav>
  );
};
