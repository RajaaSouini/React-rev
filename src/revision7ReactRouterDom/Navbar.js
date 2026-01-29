import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/form">Formulaire</Link>
      <Link to="/C1">Calculer l'âge</Link>
    </nav>
  );
}

export default Navbar;
