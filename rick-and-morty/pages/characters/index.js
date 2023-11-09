import React from "react";
import { useEffect, useState } from "react";
import axiosInstance from "../api";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await axiosInstance.get("/character");
      setCharacters(response.data.results);
    };
    fetchCharacters();
  }, []);

  //on clicking the card go to character detail page /characters/[id]

  return (
    <div className="grid grid-cols-4 gap-4">
      {characters?.map((character) => {
        return (
          <div>
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
