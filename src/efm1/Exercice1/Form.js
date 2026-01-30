import { useState } from "react";

function FormGenre(){
    const [taille , setTaille] = useState("");
    const [genre , setGenre] = useState("");
    function handleSubmit(e){
        e.preventDefault();
    }
    return(<>
            <form onSubmit={handleSubmit}>
                <label>Taille en cm:</label><br/>
                <input type="text" value={taille} 
                onChange={(e)=>setTaille(e.target.value)}/><br/>
                <label>Genre :</label><br/>
                <select value={genre} onChange={(e)=>setGenre(e.target.value)}>
                    <option>Femme</option>
                    <option>Homme</option>
                </select><br/>
                <label>Poids idéal:</label><br/>
                <input disabled /><br/>
                <button type="submit">Calculer</button>
            </form>
    </>);
}
export default FormGenre;