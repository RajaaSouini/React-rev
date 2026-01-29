import { Component } from "react";

class Ligne extends Component{
    render(){
        const {etud} = this.props;
        return(
        <tr>
        <td>{etud.nom}</td>
        <td>{etud.option}</td>
        <td>{etud.note}</td>
        <td>{etud.status}</td>
    </tr>
    )
    }
}
export default Ligne;