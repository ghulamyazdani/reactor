import { Component } from "react";
import { withRouter } from "react-router-dom"; // eslint-disable-line
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";
class Details extends Component {
  state = { loading: true, showModal: false };

  async componentDidMount() {
    const resp = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const respData = await resp.json();
    this.setState(
      Object.assign(
        {
          loading: false,
        },
        respData.pets[0]
      )
      // this.setState({
      //   loading: false,
      //   name = respData.pets[0].name,
      //   animal = respData.pets[0].animal,
      //   breed = respData.pets[0].breed,
      //   description = respData.pets[0].description,
      //   city = respData.pets[0].city,
      //   state = respData.pets[0].state,
      // });
    );
  }
  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => (window.location = "http://bit.ly/pet-adopt");
  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    console.log(this.state);
    const {
      animal,
      breed,
      description,
      name,
      city,
      state,
      images,
      showModal,
    } = this.state; //destructuring
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal}-${breed}-${city},${state}`}</h2>
          <p>{description}</p>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}
const DetailsWithRouter = withRouter(Details);

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <DetailsWithRouter {...props} />
    </ErrorBoundary>
  );
}
