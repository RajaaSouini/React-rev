import { useState } from "react";

function Form1(){
    const [Identifiant , setIdentifiant] = useState("");
    const [pass , setPass] = useState();
    const [dateNais , setDateNais] = useState();
    const [vil , setVil] = useState();
    const [genre , setGenre] = useState();
    const [loisir , setLoisir] = useState([]);
    const [afficher , setAfficher] = useState(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setAfficher(true);

    }
    //pour utiliser checkbox
    const handleChoisirLoisir = (e)=>{
        const valeur = e.target.value;
        if(e.target.checked){
            setLoisir([...loisir , valeur]);
        }else{
            setLoisir(loisir.filter((l)=> l !== valeur));
        }
    }
    const ville = ["Safi" , "Marrakech", "Taoujtat", "Bensliman"];
    return(<>
        <form onSubmit={handleSubmit}>
            <h1> Inscription :</h1>
            <label>Identifiant :</label>
            <input type="text"onChange={(e)=>setIdentifiant(e.target.value)} /><br/>
            <label>Mot de passe :</label>
            <input type="password" onChange={(e)=>setPass(e.target.value)}/><br/>
            <label>Date de naissance :</label>
            <input type="date" onChange={(e)=>setDateNais(e.target.value)}/><br/>
            <label>Ville:</label>
            <select onChange={(e)=>setVil(e.target.value)}>{ville.map((v, index)=><option key={index}>{v}</option>)}</select><br/>
            <label>Genre :</label>
            <input type="radio" value="Homme" onChange={(e)=>setGenre(e.target.value)}/>
            <input type="radio" value="Femme" onChange={(e)=>setGenre(e.target.value)}/><br/>
            <label>Loisirs :</label>
            <input type="checkbox" value="Sport" onChange={handleChoisirLoisir}/>Sport
            <input type="checkbox" value="Lecture" onChange={handleChoisirLoisir}/>Lecture
            <input type="checkbox" value="Voyage" onChange={handleChoisirLoisir}/>Voyage<br/>
            <label>Photo</label>
            <input type="file"/><br/>
            <button type="submit">Envoyer</button>
        </form>
        {afficher && <p>Je suis {Identifiant} , je suis né le : {dateNais},
            je suis de {vil} mes loisirs sont : {loisir} </p>}

    </>)
}
export default Form1;