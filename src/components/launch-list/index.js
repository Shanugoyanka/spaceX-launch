import React from "react";
import "./style.css";
import Card from "../card";
import Result from "../result";

export default class LaunchList extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <>
        <div className="list">
          {this.props.list ? (
            this.props.list.length ? (
              this.props.list.map((launch, i) => (
                <Card launch={launch} key={`card${i}`} />
              ))
            ) : (
              <Result type="notfound" />
            )
          ) : (
            <Result type="loading" />
          )}
        </div>
      </>
    );
  };
}
