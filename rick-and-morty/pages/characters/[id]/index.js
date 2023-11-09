import { useRouter } from "next/router";
import React from "react";

const CharacterDetail = () => {
  const router = useRouter;
  const { id } = router.query;

  //fetch character data

  return (
    <div>
      <img src={character.image} alt={character.name} />
      <p>{character.name}</p>
    </div>
  );
};

export default CharacterDetail;
