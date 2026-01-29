
function CalculerAge(dateNaissance){
    return(2025 - dateNaissance.getFullYear())     
}
var mystyle = {
    color : "blue"
}
const dateNaissance = new Date('2004-11-26');
const age = CalculerAge(dateNaissance);

function C1(){
    return(<>
        <p style={mystyle}>Votre age est : {age}</p>
    </>)
}
export default C1;