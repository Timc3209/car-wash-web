import React from "react";
import { connect } from "react-redux";
import AlgoliaPlaces from "algolia-places-react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { searchSet, searchStart, searchSuccess } from "../redux/actions";
import { LocationState } from "../redux/types";
import { AppState } from "../redux/reducers";
import { companies } from "../test/data";

interface Props extends RouteComponentProps {
  searchSuccess: typeof searchSuccess;
  searchStart: typeof searchStart;
  searchSet: typeof searchSet;
  address: LocationState;
  landing: boolean;
}

interface OnChangeProps {
  query: string;
  suggestion: { name: string; value: string };
}

interface Autocomplete extends React.RefObject<HTMLInputElement> {
  setVal: (name: string) => void;
}

class LocationAutocomplete extends React.Component<Props> {
  private autocomplete: Autocomplete | undefined = undefined;

  componentDidMount() {
    const { landing, address } = this.props;

    if (landing === false) {
      this.searchAddress(address);
    }
  }

  searchAddress = (address: LocationState) => {
    const { searchStart, searchSuccess } = this.props;

    if (this.autocomplete) {
      this.autocomplete.setVal(address.name);
    }

    const searchData = { address, companies, searching: false };
    searchStart(address);
    setTimeout(() => searchSuccess(searchData), 250);
  };

  onAddressChanged = (address: LocationState) => {
    const { searchSet, landing, history } = this.props;

    if (landing === false) {
      this.searchAddress(address);
      return;
    }
    searchSet(address);
    history.push("/search/");
  };

  setAutocomplete = (autocomplete: Autocomplete) => {
    this.autocomplete = autocomplete;
  };

  render() {
    const { landing } = this.props;
    return (
      <AlgoliaPlaces
        data-testid={"location-autocomplete"}
        placesRef={this.setAutocomplete}
        placeholder={"Enter address"}
        className={landing ? "form-control-lg form-control" : "form-control"}
        options={{
          appId: process.env.ALGOLIA_APP_ID,
          apiKey: process.env.ALGOLIA_APP_KEY,
          language: "en",
          countries: ["us"],
          aroundLatLng: "29.5652,-98.3364",
          aroundLatLngViaIP: false,
          type: "address",
        }}
        onChange={({ suggestion }: OnChangeProps) =>
          this.onAddressChanged({
            name: suggestion.name,
            address: suggestion.value,
          })
        }
        onLimit={() =>
          console.log("Fired when you reached your current rate limit.")
        }
        onError={() =>
          console.log(
            "Fired when we could not make the request to Algolia Places servers for any reason but reaching your rate limit."
          )
        }
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
)(LocationAutocomplete);

export default withRouter(ConnectedComponent);
