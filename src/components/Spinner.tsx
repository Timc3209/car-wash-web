import React from "react";
import { Spinner as ReactstrapSpinner } from "reactstrap";

export default class Spinner extends React.Component<any, any> {
  render() {
    return (
      <div className="spinner-container">
        <ReactstrapSpinner style={{ width: "3rem", height: "3rem" }} />
      </div>
    );
  }
}
