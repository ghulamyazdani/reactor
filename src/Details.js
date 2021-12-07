import { Component } from "react";
import { withRouter } from "react-router-dom"; // eslint-disable-line
import Carousel from "./Carousel";

class Details extends Component {
  state = { loading: true };

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
    } = this.state; //destructuring
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal}-${breed}-${city},${state}`}</h2>
          <p>{description}</p>
          <button>Adopt {name}</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Details);
