import React, { createRef } from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { estimateSuccess } from "../redux/actions";
import { AppState } from "../redux/reducers";
import LocationAutocomplete from "./LocationAutocomplete";
import { companies } from "../test/data";

type MatchProps = {
  search: string;
};

interface Props extends RouteComponentProps<MatchProps> {
  estimateSuccess: typeof estimateSuccess;
  address: string;
}

class EstimateAddress extends React.Component<Props, any> {
  private inputRef: any = createRef();

  componentDidMount() {
    const { match, estimateSuccess } = this.props;
    const address: any = match.params.search;

    if (address) {
      const estimateData = { address, companies };
      estimateSuccess(estimateData);
      this.inputRef.autocomplete.setVal(address);
    }
  }

  onAddressChanged = (address: string) => {
    const { history, estimateSuccess } = this.props;
    const estimateData = { address, companies };
    estimateSuccess(estimateData);
    history.push("/Estimate/" + address);
  };

  setRef = (ref: any) => {
    this.inputRef = ref;
  };

  render() {
    return (
      <LocationAutocomplete
        setRef={this.setRef}
        onChange={this.onAddressChanged}
      />
    );
  }
}

const mapStateToProps = ({ estimate }: AppState) => {
  const { address } = estimate;
  return { address };
};

const mapDispatchToProps = {
  estimateSuccess,
};

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(EstimateAddress);

export default withRouter(ConnectedComponent);
