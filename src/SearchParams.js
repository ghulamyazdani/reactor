import { useState, useEffect } from "react";
import Pet from "./Pet";
const ANIMALS = ["dog", "cat", "bird", "fish"];
const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  useEffect(() => {
    requestPets();
    console.log("requested");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  async function requestPets() {
    const res = await fetch(
      `https://pets-v2.dev-apis.com/pets?animal=${animal}&breed=${breed}&location=${location}`
    );
    const respData = await res.json();
    console.log(respData);
    setPets(respData.pets);
  }
  const breeds = [];
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          placeholder="Location"
        />
        <label htmlFor="animal">
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>submit</button>
      </form>
      {pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          location={pet.location}
          key={pet.id}
        />
      ))}
    </div>
  );
};

export default SearchParams;
