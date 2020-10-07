import React from "react";

import "./App.css";
import LaunchList from "./components/launch-list";
import Filters from "./components/filters";

const API_HOST = "https://api.spacexdata.com/v3";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      year: "",
      launch: "",
      land: "",
      list: this.props.list,
      count: 100,
    };
  }

  componentDidUpdate() {
    this.updateLocalstorage();
  }

  filter = async (
    year = this.state.year,
    launch = this.state.launch,
    land = this.state.land
  ) => {
    let res = await fetch(
      `${API_HOST}/launches?limit=${this.state.count}&launch_success=${launch}&land_success=${land}&launch_year=${year}`
    );
    res = await res.json();

    this.setState({ list: res });
  };

  changeYear = (year) => {
    this.setState({ list: null });
    year = year === this.state.year ? "" : year;
    this.setState({ year });
    this.filter(year, this.state.launch, this.state.land);
  };

  changeLaunchFilter = (launch) => {
    this.setState({ list: null });
    launch = launch === this.state.launch ? "" : launch;
    this.setState({ launch });
    this.filter(this.state.year, launch, this.state.land);
  };

  changeLandingFilter = (land) => {
    this.setState({ list: null });
    land = land === this.state.land ? "" : land;
    this.setState({ land });
    this.filter(this.state.year, this.state.launch, land);
  };

  updateLocalstorage = () => {
    const { year, launch, land } = this.state;
    if (window) {
      let temp = JSON.stringify({ year, launch, land });
      window.localStorage.setItem("configuration", temp);
    }
  };

  componentDidMount() {
    if (window) {
      if (window.localStorage.configuration) {
        let temp = JSON.parse(window.localStorage.configuration);
        this.setState({ ...temp }, this.filter);
      }
    }
  }

  render() {
    return (
      <div className="App">
        <h1>SpaceX Launch Programs</h1>
        <div className="container">
          <Filters
            config={this.state}
            setYear={this.changeYear}
            setLaunch={this.changeLaunchFilter}
            setLand={this.changeLandingFilter}
          />
          <LaunchList
            config={this.state}
            year={this.state.year}
            list={this.state.list}
          />
        </div>
        <div className="center">
          <strong>Developed By: </strong> Shanu Goyanka
        </div>
      </div>
    );
  }
}

export default App;
