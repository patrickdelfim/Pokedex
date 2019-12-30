import React, { useEffect, useState } from "react";

import Pokemoncard from "./Pokemoncard.js";
import Navbottom from "./Navbottom.js";
import Pokemoninfo from "./Pokemoninfo.js";

function Pokemonlist(props) {
  const [pokelist, setlist] = useState(null);
  const [[nextlist, prevlist], seturl] = useState([
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`,
    null
  ]);
  const [loading, setloading] = useState(false);
  const [[moreinfo, url], setinfo] = useState([false, null]);

  useEffect(() => {
    async function getData() {
      await fetch(nextlist)
        .then(response => response.json())
        .then(response => {
          setlist(response.results);
          seturl([response.next, response.previous]);
        });
    }
    getData();
    setloading(false);
  }, [loading]);

  if (moreinfo == false) {
    return (
      <div>
        <div className="row">
          {pokelist != null ? (
            pokelist.map((pokemon, index) => (
              <Pokemoncard
                key={index}
                name={pokemon.name}
                url={pokemon.url}
                moreinfo={moreinfo}
                setinfo={setinfo}
              />
            ))
          ) : (
            <h1>error </h1>
          )}
        </div>

        <Navbottom
          nextlist={nextlist}
          prevlist={prevlist}
          setlist={setlist}
          seturl={seturl}
          loading={loading}
          setloading={setloading}
        />
      </div>
    );
  } else {
    return <Pokemoninfo url={url} setinfo={setinfo} />;
  }
}

export default Pokemonlist;
