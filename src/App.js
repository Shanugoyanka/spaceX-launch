import React from "react";

import "./App.css";
import LaunchList from "./components/launch-list";
import Filters from "./components/filters";

const API_HOST = "https://api.spacexdata.com/v3";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      year: this.props.launch_year,
      launch: this.props.launch_success,
      land: this.props.land_success,
      list: this.props.list,
      count: 100,
    };
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

  changeUrl = () => {
    let url = "/";
    if (this.state.year != "") {
      url = url === "/" ? `/?launch_year=${this.state.year}` : url + `&launch_year=${this.state.year}`;
    }
    if (this.state.launch != "") {
      url = url === "/" ? `/?launch_success=${this.state.launch}` : url + `&launch_success=${this.state.launch}`;
    }
    if (this.state.land != "") {
      url = url === "/" ? `/?land_success=${this.state.land}` : url + `&land_success=${this.state.land}`;
    }
    window.history.replaceState({ id: "100" }, "launches", url);
  };

  changeYear = (year) => {
    this.setState({ list: null });
    year = year === this.state.year ? "" : year;
    this.setState(
      { year },
      () => {
        this.changeUrl();
      }
    );
    this.filter(year, this.state.launch, this.state.land);
    this.changeUrl();
  };

  changeLaunchFilter = (launch) => {
    this.setState({ list: null });
    launch = launch === this.state.launch ? "" : launch;
    this.setState(
      { launch },
      () => {
        this.changeUrl();
      }
    );
    this.filter(this.state.year, launch, this.state.land);
    this.changeUrl();
  };

  changeLandingFilter = (land) => {
    this.setState({ list: null });
    land = land === this.state.land ? "" : land;
    this.setState(
      { land },
      () => {
        this.changeUrl();
      }
    );
    this.filter(this.state.year, this.state.launch, land);
    this.changeUrl();
  };

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
