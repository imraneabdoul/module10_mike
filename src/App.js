import React from 'react';
import './App.css';
import {PureCompo} from './components/PureCompo';
import{CompoState} from './components/CompoState'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={stateapp:""}
  }
  onInputChange = (val) =>{
    this.setState({stateapp : val});
  }


  render(){
    let mesLables= [];
    mesLables.push("Imrane");
    mesLables.push("ANdy");
    mesLables.push("Riyad");
    mesLables.push("Alex");
    return (
      <div className="App">
        {mesLables.map(x => <PureCompo label={x}/>)}
        <CompoState label="Sadi:" onInputChange={this.onInputChange}/>
        {this.state.stateapp ? <PureCompo label={this.state.stateapp}/> : <PureCompo label="Cest ko"/>}
      </div>
    )
  }
}

export default App;
