import ReactDOM from "react-dom";
import React from "react";

class Reloader extends React.Component{
  constructor(props){
    super(props);
    this.state={content: ""};
    this.onChar = this.onChar.bind(this);
    this.onGOTime=this.onGOTime.bind(this);

  }
  onChar(){
    this.setState({content:event.target.value});
  }
  onGOTime(){
    if(this.state.content != "reload"){
      event.preventDefault();
    }
  }


render(){
  return(
    <form onSubmit={this.onGOTime}>
    <input type ="text"   value= {this.state.content} onChange={this.onChar}/>
    <input type = "submit" value = "Go Time"/>

  </form>);
}
}

ReactDOM.render(<Reloader/>,
document.getElementById('root'));