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
      // Verificacao se o window foi recarregado ou nao.
      if (window.performance) {
        // se window nao foi recarregado atualizar a lista de pokemon normalmente
        if (performance.navigation.type != 1) {
          console.log("pagina nao Recarregou");

          await fetch(nextlist)
            .then(response => response.json())
            .then(response => {
              setlist(response.results);

              seturl([response.next, response.previous]);
            });
          // se window foi recarregado. atualizar a lista de pokemon com os dados do localStorage
        } else {
          const data = localStorage.getItem("my-list");

          const nextLink = localStorage.getItem("next-links");
          const prevLink = localStorage.getItem("prev-links");

          if (data) {
            setlist(JSON.parse(data));
            seturl([nextLink, prevLink]);
          }
          // se data nao existir atualizar a lista de pokemon normalmente
          else {
            await fetch(nextlist)
              .then(response => response.json())
              .then(response => {
                setlist(response.results);

                seturl([response.next, response.previous]);
              });
          }
        }
      }
    }

    getData();

    setloading(false);
  }, [loading]);

  /* Local Storage data */

  useEffect(() => {
    localStorage.setItem("my-list", JSON.stringify(pokelist));
    localStorage.setItem("next-links", nextlist);
    localStorage.setItem("prev-links", prevlist);
  });

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
