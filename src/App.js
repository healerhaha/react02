// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            circleStyle :{
                padding:10,
                margin:20,
                display:"inline-block",
                backgroundColor:this.props.bgColor,
                borderRadius:'50%',
                width:100,
                height:100
            }
        }
    }
    render(){
        return (
          <div className="App" style={this.state.circleStyle}>
          </div>
        );
    }
   
}

export default App;
