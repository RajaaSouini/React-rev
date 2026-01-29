import { useState } from "react";

function Compteur(){
    const [count , setCount] = useState(0);
    return(<>
        <p>Compteur = {count}</p>
        <button onClick={()=>{setCount(count+10)}}>Ok !</button>
    </>)
}
export default Compteur;