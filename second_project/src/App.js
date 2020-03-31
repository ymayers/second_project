import React from "react";
import "./App.css";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      response: ""
    };
  }
  componentDidMount = async () => {
    const response = await axios.get(`https://api.covid19api.com/summary`);

    this.setState({ response: response.data.Countries });
  };

  render() {
    // used object.keys because I kept getting an error that .map is not a function
    //first map through the response Countries - returns only indices - not names
    let countryDisp = Object.keys(this.state.response).map((value, idx) => {
      return (
        //add } back here
        <div className="country" key={idx}>
          {value}
        </div>
      );
    });

    return (
      <div>
        <main>
          <Header />

          <div className="countries">
            <Home className="country" country={countryDisp} />
          </div>
        </main>
      </div>
    );
  }
}
export default App;
// return (<div className="container"> {this.state.response.data.Countries.map}((value, idx) => <p key={idx}>{value.map}</p>((country) => {<Home className="country" key={idx}>{country}</Home>}

// )
// );
// };
