import {useState} from 'react' ;
function Couleur(){
    const [color , setColor] = useState("red");
    function ChangerCouleur(){
        setColor(color === "red" ? "green" : "red");
    }
    return(<>
        <div style={{height:"400px" , width:"400px",backgroundColor: color , margin: "10px"}}></div>
        <button onClick={ChangerCouleur}>Changer la couleur</button>
    </>)
}
export default Couleur;