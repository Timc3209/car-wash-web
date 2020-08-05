import React from "react";
import { connect } from "react-redux";
import { AppState } from "../redux/reducers";
import { CompanyState } from "../redux/types";
import Header from "../components/Header";
import CompanyList from "../components/CompanyList";

interface Props {
  address: string;
  companies: Array<CompanyState>;
}

class Estimate extends React.Component<Props> {
  render() {
    const { companies } = this.props;
    return (
      <div className="App">
        <Header showSearch={true} />
        <CompanyList title="Local Results" companies={companies} />
      </div>
    );
  }
}

const mapStateToProps = ({ estimate }: AppState) => {
  const { address, companies } = estimate;
  return { address, companies };
};

export default connect(mapStateToProps, undefined)(Estimate);
