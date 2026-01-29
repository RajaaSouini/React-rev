/*const etudiants = [
    {id : 101 , nom : "Souini" , option : "DD" , note : 17.20 , status : "admis"},
    {id : 102 , nom : "Alami" , option : "ID" , note : 9 , status : "Redoublant "},
    {id : 103 , nom : "Azizi ", option : "devfullstack", note : 19, status : "admis"},
    {id : 104 , nom : "Grhazoui" , option :"DD" , note: 16 , status : "Admis"}
]; je vais le faire dans index.js */
import Ligne from "./Ligne";
function Resultat(props){
    return(<>
        <table border="1">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Option</th>
                    <th>Note</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {props.etudiants.map((s)=>(
                    <Ligne key={s.id} etud={s}/>
                ) )}
            </tbody></table>
    </>)

}
export default Resultat;