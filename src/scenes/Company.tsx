import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Button, ListGroup } from "reactstrap";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { AppState } from "../redux/reducers";
import {
  setBookingCompany,
  setBookingDate,
  setBookingTimeSlot,
  setBookingType,
  setBookingTotal,
  setBookingPackage,
  addBookingAddon,
  removeBookingAddon,
  resetBooking,
} from "../redux/actions";
import {
  CompanyState,
  AddonState,
  PackageState,
  LocationState,
  TimeSlotState,
} from "../redux/types";
import Header from "../components/Header";
import Vehicle from "../components/Vehicle";
import DateInput from "../components/DateInput";
import TimeSelect from "../components/TimeSelect";
import Package from "../components/Package";
import Addon from "../components/Addon";
import { companies } from "../test/data";
import defaultLogo from "../assets/images/company-default.jpg";

type MatchProps = {
  id: string;
};

interface ErrorField {
  bookingDate: string;
  bookingTimeSlot: string;
  bookingType: string;
  bookingPackage: string;
}

interface State extends CompanyState {
  errors: ErrorField;
}

interface Props extends RouteComponentProps<MatchProps> {
  loggedIn: boolean;
  address: LocationState;
  bookingCompany: CompanyState | undefined;
  bookingDate: number;
  bookingTimeSlot: TimeSlotState | undefined;
  bookingType: string;
  bookingPackage: PackageState;
  bookingAddons: Array<AddonState>;
  bookingAddonIDs: string[];
  bookingPrice: number;
  bookingDuration: number;
  setBookingCompany: typeof setBookingCompany;
  setBookingDate: typeof setBookingDate;
  setBookingTimeSlot: typeof setBookingTimeSlot;
  setBookingType: typeof setBookingType;
  setBookingTotal: typeof setBookingTotal;
  setBookingPackage: typeof setBookingPackage;
  addBookingAddon: typeof addBookingAddon;
  removeBookingAddon: typeof removeBookingAddon;
  resetBooking: typeof resetBooking;
}

class Company extends React.Component<Props, State> {
  readonly state: State = {
    id: "",
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
    email: "",
    desc: "",
    packages: [],
    packagesTruck: [],
    addons: [],
    timeSlots: [],
    errors: {
      bookingDate: "",
      bookingTimeSlot: "",
      bookingType: "",
      bookingPackage: "",
    },
  };

  componentDidMount() {
    const { match } = this.props;
    const id = match.params.id;

    if (id) {
      this.loadCompany(id);
    }
  }

  loadCompany = (id: string) => {
    const { bookingCompany, setBookingCompany } = this.props;

    const data = companies.filter(
      (company: CompanyState) => company.id === id
    )[0];

    if (data) {
      const { name, desc, packages, packagesTruck, addons, timeSlots } = data;
      this.setState({
        id,
        name,
        desc,
        packages,
        packagesTruck,
        addons,
        timeSlots,
      });

      if (bookingCompany === undefined) {
        setBookingCompany(data);
      } else if (bookingCompany.id !== id) {
        setBookingCompany(data);
      }

      return true;
    }
  };

  clearError = (name: keyof ErrorField) => {
    const { errors } = this.state;
    errors[name] = "";
    this.setState({ errors });
  };

  setError = (name: keyof ErrorField, value: string) => {
    const { errors } = this.state;
    errors[name] = value;
    this.setState({ errors });
  };

  selectBookingDate = (bookingDate: number) => {
    const { setBookingDate } = this.props;
    setBookingDate(bookingDate);
    this.clearError("bookingDate");
  };

  selectBookingTimeSlot = (timeSlot: TimeSlotState) => {
    const { setBookingTimeSlot } = this.props;
    setBookingTimeSlot(timeSlot);
    this.clearError("bookingTimeSlot");
  };

  selectBookingType = (bookingType: string) => {
    const { setBookingType } = this.props;
    setBookingType(bookingType);
    this.clearError("bookingType");
  };

  selectBookingPackage = (bookingPackage: PackageState) => {
    const { setBookingPackage } = this.props;
    setBookingPackage(bookingPackage);
    this.clearError("bookingPackage");
  };

  selectBookingAddon = (bookingAddon: AddonState) => {
    const { id } = bookingAddon;
    const { addBookingAddon, removeBookingAddon, bookingAddonIDs } = this.props;

    if (bookingAddonIDs.includes(id)) {
      removeBookingAddon(bookingAddon);
      return;
    }
    addBookingAddon(bookingAddon);
  };

  calcTotals = () => {
    const { setBookingTotal, bookingPackage, bookingAddons } = this.props;

    let totalPrice = 0;
    let totalDuration = 0;

    if (bookingPackage.price > 0) {
      totalPrice += bookingPackage.price;
      totalDuration += bookingPackage.duration;
    }
    for (let i = 0; i < bookingAddons.length; i++) {
      totalPrice += bookingAddons[i].price;
      totalDuration += bookingAddons[i].duration;
    }

    const price = parseFloat(totalPrice.toFixed(2));
    const duration = totalDuration;

    setBookingTotal({ price, duration });
  };

  componentDidUpdate = (prevProps: Props) => {
    const { bookingPackage, bookingAddonIDs } = this.props;

    if (prevProps.bookingPackage !== bookingPackage) {
      this.calcTotals();
    } else if (prevProps.bookingAddonIDs !== bookingAddonIDs) {
      this.calcTotals();
    }
  };

  login = () => {
    const { history, bookingCompany } = this.props;

    if (bookingCompany) {
      history.push(`/login/company/${bookingCompany.id}`);
    }
  };

  checkout = () => {
    const {
      history,
      bookingPackage,
      bookingTimeSlot,
      bookingType,
    } = this.props;

    let errors = 0;

    if (bookingTimeSlot === undefined) {
      this.setError("bookingTimeSlot", "Required");
      errors = 1;
    }

    if (bookingType === "") {
      this.setError("bookingType", "Required");
      errors = 1;
    }

    if (bookingPackage.id === "") {
      this.setError("bookingPackage", "Required");
      errors = 1;
    }

    if (errors > 0) {
      return false;
    }

    history.push(`/checkout/`);
  };

  render() {
    const {
      id,
      name,
      desc,
      packages,
      packagesTruck,
      addons,
      timeSlots,
      errors,
    } = this.state;

    const {
      loggedIn,
      bookingDate,
      bookingTimeSlot,
      bookingType,
      bookingPackage,
      bookingAddonIDs,
      bookingPrice,
      bookingDuration,
    } = this.props;

    const currentPackages = bookingType === "Truck" ? packagesTruck : packages;

    console.log(errors);

    return (
      <div className="App">
        <Header showSearch={false} page={`/company/${id}`} />
        <Container>
          <Row className="mt-2 mb-2">
            <Col>
              <img src={defaultLogo} className="company-banner" alt={name} />
            </Col>
          </Row>
          <Row>
            <Col sm="12" xl="6">
              <Row>
                <Col>
                  <h2>{name}</h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>{desc}</p>
                </Col>
              </Row>
            </Col>
            <Col sm="12" xl="6">
              <Row>
                <Col>
                  <div className="booking-container border p-3">
                    <div className="pb-1">
                      <h6>When do you want your car washed?</h6>
                      <Row>
                        <Col sm="12" lg="6">
                          <DateInput
                            label="Date"
                            date={bookingDate}
                            onChange={this.selectBookingDate}
                            errorMessage={errors.bookingDate}
                          />
                        </Col>
                        <Col sm="12" lg="6">
                          <TimeSelect
                            label="Time"
                            value={
                              bookingTimeSlot ? bookingTimeSlot.id : "select"
                            }
                            onSelect={this.selectBookingTimeSlot}
                            options={timeSlots}
                            errorMessage={errors.bookingTimeSlot}
                          />
                        </Col>
                      </Row>
                    </div>
                    <div className="pb-2">
                      <h6>What kind of car do you drive?</h6>
                      <Row>
                        <Col sm="12" lg="6" className="pb-2">
                          <Vehicle
                            name="Car"
                            icon="car"
                            iconColor="#154379"
                            selected={bookingType === "Car"}
                            onClick={() => this.selectBookingType("Car")}
                          />
                        </Col>
                        <Col sm="12" lg="6">
                          <Vehicle
                            name="Truck"
                            icon="truck"
                            iconColor="#ef412d"
                            selected={bookingType === "Truck"}
                            onClick={() => this.selectBookingType("Truck")}
                          />
                        </Col>
                      </Row>
                      {errors.bookingType !== "" && (
                        <span className="text-danger">
                          {errors.bookingType}
                        </span>
                      )}
                    </div>
                    <div className="pb-2">
                      <h6>Select Package</h6>
                      <Row className="no-gutters">
                        {currentPackages.map(
                          (item: PackageState, index: number) => (
                            <React.Fragment key={index}>
                              {index % 4 === 0 && index !== 0 && (
                                <div className="w-100"></div>
                              )}
                              <Col key={index} sm="3" className="pb-2 px-1">
                                <Package
                                  id={item.id}
                                  name={item.name}
                                  price={item.price}
                                  duration={item.duration}
                                  lines={item.lines}
                                  selected={bookingPackage.id === item.id}
                                  onClick={() =>
                                    this.selectBookingPackage(item)
                                  }
                                />
                              </Col>
                            </React.Fragment>
                          )
                        )}
                      </Row>
                      {errors.bookingPackage !== "" && (
                        <span className="text-danger">
                          {errors.bookingPackage}
                        </span>
                      )}
                    </div>
                    <div className="pb-3">
                      <h6>Select Addons (Optional)</h6>
                      <ListGroup className="addon-container">
                        {addons &&
                          addons.map((item: AddonState, index: number) => (
                            <Addon
                              key={index}
                              id={item.id}
                              name={item.name}
                              price={item.price}
                              duration={item.duration}
                              selected={bookingAddonIDs.includes(item.id)}
                              onClick={() => this.selectBookingAddon(item)}
                            />
                          ))}
                      </ListGroup>
                    </div>
                    <div className="pb-2">
                      <h6>Payment Details</h6>
                      <span className="d-block">
                        Total Time: {bookingDuration} Mins
                      </span>
                      <span className="d-block">
                        Total Price: ${bookingPrice}
                      </span>
                    </div>
                    {loggedIn ? (
                      <Button
                        onClick={this.checkout}
                        color="primary"
                        size="lg"
                        block
                      >
                        Book Your Wash
                      </Button>
                    ) : (
                      <Button
                        onClick={this.login}
                        color="primary"
                        size="lg"
                        block
                      >
                        Login to book
                      </Button>
                    )}
                  </div>
                  <br />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, search, booking }: AppState) => {
  const { loggedIn } = auth;
  const { address } = search;
  const {
    bookingCompany,
    bookingDate,
    bookingTimeSlot,
    bookingType,
    bookingPackage,
    bookingAddons,
    bookingAddonIDs,
    bookingPrice,
    bookingDuration,
  } = booking;
  return {
    loggedIn,
    address,
    bookingCompany,
    bookingDate,
    bookingTimeSlot,
    bookingType,
    bookingPackage,
    bookingAddons,
    bookingAddonIDs,
    bookingPrice,
    bookingDuration,
  };
};

const mapDispatchToProps = {
  setBookingCompany,
  setBookingDate,
  setBookingTimeSlot,
  setBookingType,
  setBookingTotal,
  setBookingPackage,
  addBookingAddon,
  removeBookingAddon,
  resetBooking,
};

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Company);

export default withRouter(ConnectedComponent);
