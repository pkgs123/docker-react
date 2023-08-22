import React, { useState } from "react";

function FormNestedObject() {
  const [person, setPerson] = useState({
    name: "Prashant Kumar",
    artwork: {
      title: "Blue Nana",
      city: "Runnisaidpur",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });
  function handleNameChange(e) {
    setPerson({ ...person, name: e.target.value });
  }
  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: { ...person.artwork, title: e.target.value },
    });
  }
  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: { ...person.artwork, city: e.target.value },
    });
  }
  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: { ...person.artwork, image: e.target.value },
    });
  }
  return (
    <>
      <label>
        Name:
        <input value={person.name} onChange={handleNameChange} />
      </label>
      <label>
        Title:
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>
      <label>
        City:
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <label>
        Image:
        <input value={person.artwork.image} onChange={handleImageChange} />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {person.name} <br />
        (Located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
}
export default FormNestedObject;
