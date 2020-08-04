import React from "react";
import AlgoliaPlaces from "algolia-places-react";

interface Props {
  onChange: (address: string) => void;
  setRef?: any;
}

interface OnChangeProps {
  query: string;
  suggestion: { value: string };
}

export default (props: Props) => {
  const { onChange, setRef } = props;
  return (
    <AlgoliaPlaces
      ref={setRef && setRef}
      placeholder="Write an address here"
      className="form-control-lg form-control"
      options={{
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_APP_KEY,
        language: "en",
        countries: ["us"],
        aroundLatLng: "29.5652,-98.3364",
        aroundLatLngViaIP: false,
        type: "address",
      }}
      onChange={({ suggestion }: OnChangeProps) => onChange(suggestion.value)}
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
};
