import React from "react";
import "./App.css";
import axios from "axios";
import { Link, Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = { response: [] };
  }

  componentDidMount = async () => {
    const response = await axios.get(`https://api.covid19api.com/summary`);

    this.setState({ response: response.Countries });
  };

  render() {
    return <div></div>;
  }
}

export default App;
