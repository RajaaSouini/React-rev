import { useState } from "react";

function FormGenre() {
  const [taille, setTaille] = useState("");
  const [genre, setGenre] = useState("");
  const [img, setImg] = useState("/imageEFM1/feminin.jpg");
  const [message , setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    Afficher();
  }
  function Afficher (){
    if (!Number.isInteger(Number(taille))) {
      setMessage("La taille doit être un entier !");
      return;
    }
    if (Number(taille) < 150) {
      setMessage("La taille doit être supérieure ou égale à 150 cm");
      return;
    }
    if (genre === "femme"){
        const poidsIdeal = taille - 100 - ((taille - 150) / 2);
        setMessage(`Poids idéal  ${poidsIdeal} kg`);
    }else if (genre === "homme"){
        const poidsIdeal = taille - 100 - ((taille - 150) / 4);
        setMessage(`Poids idéal  ${poidsIdeal} kg`);
    }
  }

  const handleGenreChange = (e) => {
    const value = e.target.value;
    setGenre(value);

    if (value === "femme") {
      setImg("/imageEFM1/feminin.jpg");
    } else {
      setImg("/imageEFM1/masculin.png");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Taille en cm:</label><br />
      <input
        type="text"
        value={taille}
        onChange={(e) => setTaille(e.target.value)}
      /><br />

      <label>Genre :</label><br />
      <select value={genre} onChange={handleGenreChange}>
        <option value="">Choisir</option>
        <option value="femme">Femme</option>
        <option value="homme">Homme</option>
      </select><br /><br />

      <img src={img} alt="genre" width="80" /><br /><br />

      <label>Poids idéal:</label><br />
      <input disabled value={message} /><br /><br />

      <button type="submit">Calculer</button>
    </form>
  );
}

export default FormGenre;
