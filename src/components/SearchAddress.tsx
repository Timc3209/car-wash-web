import React, { createRef } from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { searchSet, searchStart, searchSuccess } from "../redux/actions";
import { AppState } from "../redux/reducers";
import LocationAutocomplete from "./LocationAutocomplete";
import { companies } from "../test/data";

interface Props extends RouteComponentProps {
  searchSuccess: typeof searchSuccess;
  searchStart: typeof searchStart;
  searchSet: typeof searchSet;
  address: string;
  landing: boolean;
}

class SearchAddress extends React.Component<Props, any> {
  private inputRef: any = createRef();

  componentDidMount() {
    const { landing, address } = this.props;

    if (landing === false) {
      this.searchAddress(address);
    }
  }

  searchAddress = (address: string) => {
    const { searchStart, searchSuccess } = this.props;

    if (this.inputRef) {
      this.inputRef.autocomplete.setVal(address);
    }

    const searchData = { address, companies, searching: false };
    searchStart(address);
    setTimeout(() => searchSuccess(searchData), 250);
  };

  onAddressChanged = (address: string) => {
    const { searchSet, landing, history } = this.props;

    if (landing === false) {
      this.searchAddress(address);
      return;
    }
    searchSet(address);
    history.push("/search/");
  };

  setRef = (ref: any) => {
    this.inputRef = ref;
  };

  render() {
    const { landing } = this.props;
    return (
      <LocationAutocomplete
        className={landing ? "form-control-lg form-control" : "form-control"}
        placeholder="Enter address"
        setRef={this.setRef}
        onChange={this.onAddressChanged}
      />
    );
  }
}

const mapStateToProps = ({ search }: AppState) => {
  const { address } = search;
  return { address };
};

const mapDispatchToProps = {
  searchSuccess,
  searchSet,
  searchStart,
};

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchAddress);

export default withRouter(ConnectedComponent);
