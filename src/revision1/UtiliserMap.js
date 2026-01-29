
//si on a utiliser props alors le tableau et dans index.js et on le passe par props
function UtiliserMap(props){
    return(<>
        <select>
            {props.ville.map((v, index)=> <option key={index}>{v}</option>)}
        </select>
    </>)
}
export default UtiliserMap;