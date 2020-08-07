import React from "react";
import { connect } from "react-redux";
import { AppState } from "../redux/reducers";
import { CompanyState } from "../redux/types";
import Header from "../components/Header";
import CompanyList from "../components/CompanyList";
import Spinner from "../components/Spinner";

interface Props {
  address: string;
  searching: boolean;
  companies: Array<CompanyState>;
}

class Search extends React.Component<Props> {
  render() {
    const { searching, companies } = this.props;
    return (
      <div className="App">
        <Header showSearch={true} />
        {searching ? (
          <Spinner />
        ) : (
          <CompanyList title="Local Results" companies={companies} />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ search }: AppState) => {
  const { address, searching, companies } = search;
  return { address, searching, companies };
};

export default connect(mapStateToProps, undefined)(Search);
