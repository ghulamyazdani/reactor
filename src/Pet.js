import React from "react";
import { Link } from "react-router-dom"; // eslint-disable-line

// export default function Pet({ name, animal, breed }) {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, name),
//     React.createElement("h2", {}, animal),
//     React.createElement("h2", {}, breed),
//   ]);
// }

// export default function Pet({ name, animal, breed }) {
//   return (
//     <div>
//       <h1>name</h1>
//       <h2>animal</h2>
//       <h3>bread</h3>
//     </div>
//   )
// }
const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }
  return (
    <Link to={`/details/${id}`} className="pet">
      <div>
        <div className="image-container">
          <img src={hero} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${location}`}</h2>
        </div>
      </div>
    </Link>
  );
};
export default Pet;
