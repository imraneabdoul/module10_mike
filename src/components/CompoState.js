/**
 * @author:Imrane
 * Premier composant pure React
 */
import './css/CompoState.css';
import React, {Component,useState} from 'react';

export class CompoState extends Component{
    constructor(props){
        super(props);
        this.state={nom : ''}; //propriete avec un state
    }

    handleChange = (event) =>{
        console.log(event.target.value);
        this.setState({nom:event.target.value}); //changer la valeur d'un state
    }

    render(){
        return(
            <div>
                <h6 className="monH66">{this.props.label} {this.state.nom}</h6>
                <input type="text" value={this.state.nom} onChange={this.handleChange}/>
            </div>
        )
    }
}

/*export const CompoState = () =>{
    const [nom,setNom] = useState('');

    const handleChange = (event) =>{
        setNom(event.target.value);
    }

    return(
        <div>
            <h6 className="monH66">{nom}</h6>
            <input type="text" value={nom} onChange={handleChange}/>
        </div>
    )
}*/