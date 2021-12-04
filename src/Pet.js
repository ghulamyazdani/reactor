import React from "react";

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
const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h3>{props.breed}</h3>
    </div>
  );
};
export default Pet;
