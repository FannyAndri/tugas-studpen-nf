import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? "bg-primary shadow-sm" : "bg-transparent"}`}>
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">📚 Bookstore</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              { path: "/", label: "Home" },
              { path: "/books", label: "Books" },
              { path: "/team", label: "Team" },
              { path: "/contact", label: "Contact" },
            ].map((link, i) => (
              <li className="nav-item" key={i}>
                <Link
                  className={`nav-link ${location.pathname === link.path ? "active fw-bold text-warning" : ""}`}
                  to={link.path}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
