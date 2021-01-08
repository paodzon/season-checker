import React from "react";
import SeasonDisplay from './SeasonDisplay';
import "./App.css";
import Loading from './Loading';
import Error from './Error';
class App extends React.Component {

  state ={lat: null, long: null, error: "", time: new Date().toLocaleTimeString(), date: new Date().toLocaleDateString()};

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position =>  this.setState({ lat: position.coords.latitude,long: position.coords.longitude,}),
      err => this.setState({ error: err.message })
    );

    setInterval (() =>{
      this.setState({time: new Date().toLocaleTimeString()})
    },1000)

  }

  renderContent (){
    if (this.state.error && !this.state.lat && !this.state.long) {
      return(<Error error={this.state.error}/>);
    }
    if (!this.state.error && this.state.lat && this.state.long) {
      return (<SeasonDisplay lat={this.state.lat} long={this.state.long} time={this.state.time} date={this.state.date}/>);
    }

    return (<Loading/>);
  }

  render() {
    return(<div>{this.renderContent()}</div>);
  }
}

export default App
