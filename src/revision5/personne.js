function Personne(props){
    return(<>
    <div>
        <p>Le nom est : {props.nom} et l'age est : {props.age}
            et le travail est {props.job} </p>
    </div>

    </>)
}
export default Personne;