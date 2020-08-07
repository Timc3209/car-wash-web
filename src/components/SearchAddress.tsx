import React, { createRef } from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { searchStart, searchSuccess } from "../redux/actions";
import { AppState } from "../redux/reducers";
import LocationAutocomplete from "./LocationAutocomplete";
import { companies } from "../test/data";

type MatchProps = {
  search: string;
};

interface Props extends RouteComponentProps<MatchProps> {
  searchSuccess: typeof searchSuccess;
  searchStart: typeof searchStart;
  address: string;
}

class SearchAddress extends React.Component<Props, any> {
  private inputRef: any = createRef();

  componentDidMount() {
    const { match } = this.props;
    const search = match.params.search;

    if (search) {
      const address = decodeURIComponent(search);
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
    setTimeout(() => searchSuccess(searchData), 500);
  };

  onAddressChanged = (address: string) => {
    const { history } = this.props;
    history.push("/search/" + encodeURIComponent(address));
    this.searchAddress(address);
  };

  setRef = (ref: any) => {
    this.inputRef = ref;
  };

  render() {
    return (
      <LocationAutocomplete
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
  searchStart,
};

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchAddress);

export default withRouter(ConnectedComponent);
