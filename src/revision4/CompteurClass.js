import { Component } from "react";

class Compteur extends Component{
    constructor(){
        super();
        this.state = {count: 0};
    }
    render(){
        return(<>
            <p>Compteur : {this.state.count}</p>
            <button onClick={()=>{this.setState({count:this.state.count+10})}}>Ok !</button>
        </>)
    }
}
export default Compteur;